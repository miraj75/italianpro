import type { RichVocabItem } from '../content/academyTypes';
import { RICH_WORDS, type BankLevel } from '../content/bank';
import { dayKey } from './date';
import type { ProgressState } from '../state/progress';
import { getAcademyModuleProgress } from '../state/academyProgress';

export interface VocabPriorityInfo {
  bookmarkedKeys: ReadonlySet<string>;
  weakOrDueKeys: ReadonlySet<string>;
  studiedKeys: ReadonlySet<string>;
  priorityKeys: ReadonlySet<string>;
}

export interface VocabRevisionSummary {
  level: BankLevel;
  totalWords: number;
  bookmarkedCount: number;
  weakOrDueCount: number;
  studiedCount: number;
  priorityCount: number;
}

function shuffleWithRng<T>(items: readonly T[], rng: () => number = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = tmp;
  }
  return copy;
}

/** Collects bookmarked, weak/due SRS, and previously studied vocabulary keys for a CEFR level. */
export function getVocabPriorityInfo(
  state: ProgressState,
  level: BankLevel,
  today: string = dayKey(),
): VocabPriorityInfo {
  const levelWords = RICH_WORDS[level];
  const savedSet = new Set(state.saved);
  const bookmarkedKeys = new Set<string>();
  const weakOrDueKeys = new Set<string>();
  const studiedKeys = new Set<string>();
  const priorityKeys = new Set<string>();

  const a1StudiedSet =
    level === 'A1'
      ? new Set(getAcademyModuleProgress(state.academy, 'vocabulary', 'A1').studiedItems)
      : null;

  const upperVocabModuleId = level === 'A2' ? 'a2-vocab' : level === 'B1' ? 'b1-vocab' : 'b2-vocab';
  const upperStudiedTopics =
    level !== 'A1'
      ? new Set(getAcademyModuleProgress(state.academy, upperVocabModuleId, level).studiedItems)
      : null;

  for (const w of levelWords) {
    const isSaved = savedSet.has(w.key);
    const card = state.cards[w.key];
    const isWeakOrDue = Boolean(card && (card.lapses > 0 || card.box <= 1 || card.due <= today));
    const isTopicOrCardStudied = Boolean(
      card ||
        a1StudiedSet?.has(w.key) ||
        upperStudiedTopics?.has(`topic:${level}:${w.topic.en}`),
    );

    if (isSaved) {
      bookmarkedKeys.add(w.key);
      priorityKeys.add(w.key);
    }
    if (isWeakOrDue) {
      weakOrDueKeys.add(w.key);
      priorityKeys.add(w.key);
    }
    if (isTopicOrCardStudied) {
      studiedKeys.add(w.key);
      priorityKeys.add(w.key);
    }
  }

  return {
    bookmarkedKeys,
    weakOrDueKeys,
    studiedKeys,
    priorityKeys,
  };
}

export function getVocabRevisionSummary(
  state: ProgressState,
  level: BankLevel,
  today: string = dayKey(),
): VocabRevisionSummary {
  const info = getVocabPriorityInfo(state, level, today);
  return {
    level,
    totalWords: RICH_WORDS[level].length,
    bookmarkedCount: info.bookmarkedKeys.size,
    weakOrDueCount: info.weakOrDueKeys.size,
    studiedCount: info.studiedKeys.size,
    priorityCount: info.priorityKeys.size,
  };
}

/**
 * Selects a practice round prioritizing:
 * 1. Both bookmarked and weak/due SRS words
 * 2. Bookmarked or weak/due SRS words
 * 3. Previously studied vocabulary / SRS cards
 * 4. Remaining words in the pool (when needed to complete a full round)
 */
export function buildPrioritizedRoundWords(
  pool: readonly RichVocabItem[],
  state: ProgressState,
  level: BankLevel,
  today: string = dayKey(),
  count = 6,
  rng: () => number = Math.random,
): RichVocabItem[] {
  const info = getVocabPriorityInfo(state, level, today);

  const tier1: RichVocabItem[] = [];
  const tier2: RichVocabItem[] = [];
  const tier3: RichVocabItem[] = [];
  const tier4: RichVocabItem[] = [];

  for (const item of pool) {
    const isBookmarked = info.bookmarkedKeys.has(item.key);
    const isWeakOrDue = info.weakOrDueKeys.has(item.key);
    const isStudied = info.studiedKeys.has(item.key);
    if (isBookmarked && isWeakOrDue) {
      tier1.push(item);
    } else if (isBookmarked || isWeakOrDue) {
      tier2.push(item);
    } else if (isStudied) {
      tier3.push(item);
    } else {
      tier4.push(item);
    }
  }

  const ordered = [
    ...shuffleWithRng(tier1, rng),
    ...shuffleWithRng(tier2, rng),
    ...shuffleWithRng(tier3, rng),
    ...shuffleWithRng(tier4, rng),
  ];

  const selected: RichVocabItem[] = [];
  const seenEn = new Set<string>();
  const seenBn = new Set<string>();
  for (const item of ordered) {
    const en = item.tr.en.trim().toLowerCase();
    const bn = item.tr.bn.trim();
    if (seenEn.has(en) || seenBn.has(bn)) continue;
    seenEn.add(en);
    seenBn.add(bn);
    selected.push(item);
    if (selected.length >= count) break;
  }
  return selected;
}
