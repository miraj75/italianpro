import type { ExplainLang, LevelId } from '../content/types';
import { LESSON_PASS_SCORE } from '../content/types';
import { LEVEL_ORDER, isLevelContentComplete, levelLessons } from '../content/courses';
import { addDays, dayKey } from '../lib/date';
import { reviewCard, type CardState } from './srs';

/** Daily-plan task kinds; each is recorded once per day when actually done. */
export type TaskKind = 'lesson' | 'listening' | 'vocab' | 'review' | 'challenge';

export interface LessonProgress {
  bestScore: number;
  completed: boolean;
  completedAt?: string;
  /** Lesson tabs the learner has opened (phrases, grammar, dialogue, quiz). */
  viewed: string[];
}

export interface ProgressState {
  version: 1;
  settings: { explainLang: ExplainLang; dailyGoalMinutes: number };
  xp: number;
  lessons: Record<string, LessonProgress>;
  /** Spaced-repetition cards keyed by `${lessonId}:${phraseId}`. */
  cards: Record<string, CardState>;
  /** Wrong quiz answers keyed by `${lessonId}:${questionId}`. */
  mistakes: Record<string, number>;
  /** Per-day study seconds and completed plan tasks. */
  days: Record<string, { seconds: number; tasks: TaskKind[] }>;
  saved: string[];
}

export const XP = {
  lessonComplete: 50,
  correctAnswer: 5,
  cardReview: 2,
  challenge: 50,
} as const;

export function initialState(): ProgressState {
  return {
    version: 1,
    settings: { explainLang: 'bn', dailyGoalMinutes: 25 },
    xp: 0,
    lessons: {},
    cards: {},
    mistakes: {},
    days: {},
    saved: [],
  };
}

export type Action =
  | { type: 'viewLessonTab'; lessonId: string; tab: string; phraseIds: string[]; today: string }
  | { type: 'submitQuiz'; lessonId: string; results: { questionId: string; correct: boolean }[]; today: string }
  | { type: 'reviewCard'; key: string; remembered: boolean; today: string }
  | { type: 'completeTask'; task: TaskKind; today: string }
  | { type: 'completeChallenge'; correct: number; today: string }
  | { type: 'addStudyTime'; seconds: number; today: string }
  | { type: 'toggleSaved'; key: string }
  | { type: 'clearMistake'; key: string }
  | { type: 'addCards'; keys: string[]; today: string }
  | { type: 'awardXp'; amount: number; today: string }
  | { type: 'setExplainLang'; lang: ExplainLang }
  | { type: 'setDailyGoal'; minutes: number }
  | { type: 'reset' };

function withTask(state: ProgressState, today: string, task: TaskKind): ProgressState {
  const day = state.days[today] ?? { seconds: 0, tasks: [] };
  if (day.tasks.includes(task)) return state;
  return { ...state, days: { ...state.days, [today]: { ...day, tasks: [...day.tasks, task] } } };
}

export function reducer(state: ProgressState, action: Action): ProgressState {
  switch (action.type) {
    case 'viewLessonTab': {
      const prev = state.lessons[action.lessonId] ?? { bestScore: 0, completed: false, viewed: [] };
      const viewed = prev.viewed.includes(action.tab) ? prev.viewed : [...prev.viewed, action.tab];
      // Phrases become flashcards once the learner has seen them.
      const cards = { ...state.cards };
      if (action.tab === 'phrases') {
        for (const id of action.phraseIds) {
          const key = `${action.lessonId}:${id}`;
          if (!cards[key]) cards[key] = { box: 0, due: action.today, reviews: 0, lapses: 0 };
        }
      }
      return { ...state, cards, lessons: { ...state.lessons, [action.lessonId]: { ...prev, viewed } } };
    }
    case 'submitQuiz': {
      const total = action.results.length;
      if (total === 0) return state;
      const correct = action.results.filter((r) => r.correct).length;
      const score = correct / total;
      const prev = state.lessons[action.lessonId] ?? { bestScore: 0, completed: false, viewed: [] };
      const passed = score >= LESSON_PASS_SCORE;
      const newlyCompleted = passed && !prev.completed;
      const mistakes = { ...state.mistakes };
      for (const r of action.results) {
        const key = `${action.lessonId}:${r.questionId}`;
        if (r.correct) delete mistakes[key];
        else mistakes[key] = (mistakes[key] ?? 0) + 1;
      }
      let next: ProgressState = {
        ...state,
        mistakes,
        xp: state.xp + correct * XP.correctAnswer + (newlyCompleted ? XP.lessonComplete : 0),
        lessons: {
          ...state.lessons,
          [action.lessonId]: {
            ...prev,
            bestScore: Math.max(prev.bestScore, score),
            completed: prev.completed || passed,
            completedAt: prev.completedAt ?? (passed ? action.today : undefined),
          },
        },
      };
      next = withTask(next, action.today, 'review');
      if (passed) next = withTask(next, action.today, 'lesson');
      return next;
    }
    case 'reviewCard': {
      const card = state.cards[action.key];
      if (!card) return state;
      const next: ProgressState = {
        ...state,
        xp: state.xp + XP.cardReview,
        cards: { ...state.cards, [action.key]: reviewCard(card, action.remembered, action.today) },
      };
      return next;
    }
    case 'completeTask':
      return withTask(state, action.today, action.task);
    case 'completeChallenge': {
      const already = state.days[action.today]?.tasks.includes('challenge') ?? false;
      const next = withTask(state, action.today, 'challenge');
      return already ? next : { ...next, xp: next.xp + XP.challenge + action.correct * XP.correctAnswer };
    }
    case 'addStudyTime': {
      if (action.seconds <= 0) return state;
      const day = state.days[action.today] ?? { seconds: 0, tasks: [] };
      return { ...state, days: { ...state.days, [action.today]: { ...day, seconds: day.seconds + action.seconds } } };
    }
    case 'toggleSaved': {
      const saved = state.saved.includes(action.key)
        ? state.saved.filter((k) => k !== action.key)
        : [...state.saved, action.key];
      return { ...state, saved };
    }
    case 'addCards': {
      const fresh = action.keys.filter((k) => !state.cards[k]);
      if (fresh.length === 0) return state;
      const cards = { ...state.cards };
      for (const k of fresh) cards[k] = { box: 0, due: action.today, reviews: 0, lapses: 0 };
      return { ...state, cards };
    }
    case 'awardXp': {
      const day = state.days[action.today] ?? { seconds: 0, tasks: [] };
      return { ...state, xp: state.xp + action.amount, days: { ...state.days, [action.today]: day } };
    }
    case 'clearMistake': {
      if (!(action.key in state.mistakes)) return state;
      const mistakes = { ...state.mistakes };
      delete mistakes[action.key];
      return { ...state, mistakes, xp: state.xp + XP.correctAnswer };
    }
    case 'setExplainLang':
      return { ...state, settings: { ...state.settings, explainLang: action.lang } };
    case 'setDailyGoal':
      return { ...state, settings: { ...state.settings, dailyGoalMinutes: Math.min(120, Math.max(5, action.minutes)) } };
    case 'reset':
      return initialState();
  }
}

/* ---------- selectors ---------- */

function studiedOn(state: ProgressState, key: string): boolean {
  const day = state.days[key];
  return !!day && (day.seconds >= 60 || day.tasks.length > 0);
}

/** Consecutive study days ending today (or yesterday, so the streak survives until tonight). */
export function streak(state: ProgressState, today: string = dayKey()): number {
  let cursor = studiedOn(state, today) ? today : addDays(today, -1);
  let count = 0;
  while (studiedOn(state, cursor)) {
    count += 1;
    cursor = addDays(cursor, -1);
  }
  return count;
}

export function minutesToday(state: ProgressState, today: string = dayKey()): number {
  return Math.floor((state.days[today]?.seconds ?? 0) / 60);
}

export function isLessonCompleted(state: ProgressState, lessonId: string): boolean {
  return state.lessons[lessonId]?.completed ?? false;
}

/** A level opens only when the previous level is fully completed — never by XP. */
export function isLevelUnlocked(state: ProgressState, id: LevelId): boolean {
  const index = LEVEL_ORDER.indexOf(id);
  if (index <= 0) return true;
  const prev = LEVEL_ORDER[index - 1]!;
  if (!isLevelUnlocked(state, prev)) return false;
  // A level whose content is still being authored cannot be completed yet.
  if (!isLevelContentComplete(prev)) return false;
  return levelLessons(prev).every((l) => isLessonCompleted(state, l.id));
}

/** Lessons open sequentially within a level. */
export function isLessonUnlocked(state: ProgressState, levelId: LevelId, lessonId: string): boolean {
  if (!isLevelUnlocked(state, levelId)) return false;
  const lessons = levelLessons(levelId);
  const index = lessons.findIndex((l) => l.id === lessonId);
  if (index < 0) return false;
  if (index === 0) return true;
  return isLessonCompleted(state, lessons[index - 1]!.id);
}

export function levelProgress(state: ProgressState, id: LevelId): { done: number; total: number } {
  const lessons = levelLessons(id);
  return { done: lessons.filter((l) => isLessonCompleted(state, l.id)).length, total: lessons.length };
}

export function dueCards(state: ProgressState, today: string = dayKey()): string[] {
  return Object.entries(state.cards)
    .filter(([, c]) => c.due <= today)
    .map(([k]) => k);
}

export interface Badge {
  id: string;
  earned: boolean;
}

export function badges(state: ProgressState, today: string = dayKey()): Badge[] {
  const completed = Object.values(state.lessons).filter((l) => l.completed).length;
  return [
    { id: 'first-lesson', earned: completed >= 1 },
    { id: 'perfect-quiz', earned: Object.values(state.lessons).some((l) => l.bestScore === 1) },
    { id: 'streak-3', earned: streak(state, today) >= 3 },
    { id: 'xp-500', earned: state.xp >= 500 },
    { id: 'unit-1', earned: completed >= 3 },
  ];
}
