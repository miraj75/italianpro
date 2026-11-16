import { addDays } from '../lib/date';

/** Leitner-style card: higher box = longer interval before the next review. */
export interface CardState {
  box: number;
  due: string;
  reviews: number;
  lapses: number;
}

/** Days until next review for each box. */
export const BOX_INTERVALS = [0, 1, 3, 7, 14, 30] as const;
const MAX_BOX = BOX_INTERVALS.length - 1;

export function reviewCard(card: CardState, remembered: boolean, today: string): CardState {
  const box = remembered ? Math.min(card.box + 1, MAX_BOX) : 0;
  // A forgotten card comes back tomorrow rather than immediately, to avoid same-session loops.
  const interval = remembered ? BOX_INTERVALS[box]! : 1;
  return {
    box,
    due: addDays(today, Math.max(interval, 1)),
    reviews: card.reviews + 1,
    lapses: card.lapses + (remembered ? 0 : 1),
  };
}
