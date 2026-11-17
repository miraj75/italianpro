import { LEVEL_ORDER } from '../content/courses';
import { initialState, type ProgressState, type TaskKind } from './progress';
import { normalizeAcademyProgress } from './academyProgress';

const KEY = 'italianpro.progress.v1';

const VALID_TASKS: ReadonlySet<TaskKind> = new Set(['lesson', 'listening', 'vocab', 'review']);

function normalizeDays(rawDays: unknown): ProgressState['days'] {
  if (!rawDays || typeof rawDays !== 'object') return {};
  const result: ProgressState['days'] = {};
  for (const [dateKey, entry] of Object.entries(rawDays as Record<string, unknown>)) {
    if (!entry || typeof entry !== 'object') continue;
    const raw = entry as { seconds?: unknown; tasks?: unknown };
    const seconds = typeof raw.seconds === 'number' && Number.isFinite(raw.seconds) && raw.seconds >= 0 ? raw.seconds : 0;
    const tasks = Array.isArray(raw.tasks)
      ? raw.tasks.filter((t): t is TaskKind => typeof t === 'string' && VALID_TASKS.has(t as TaskKind))
      : [];
    result[dateKey] = { seconds, tasks };
  }
  return result;
}

/** Loads saved progress; corrupt or missing data falls back to a fresh state while safely migrating legacy fields. */
export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initialState();
    const parsed = JSON.parse(raw) as Partial<ProgressState> & Record<string, unknown>;
    if (parsed.version !== 1) return initialState();
    const base = initialState();
    const rawLevel = parsed.settings?.currentLevel;
    const currentLevel = rawLevel && (LEVEL_ORDER as string[]).includes(rawLevel) ? rawLevel : base.settings.currentLevel;
    const rawLang = parsed.settings?.explainLang;
    const explainLang = rawLang === 'bn' || rawLang === 'en' || rawLang === 'it' ? rawLang : base.settings.explainLang;
    const rawGoal = parsed.settings?.dailyGoalMinutes;
    const dailyGoalMinutes =
      typeof rawGoal === 'number' && Number.isFinite(rawGoal)
        ? Math.min(120, Math.max(5, rawGoal))
        : base.settings.dailyGoalMinutes;
    const showAllLockedModules = Boolean(parsed.settings?.showAllLockedModules);
    return {
      version: 1,
      settings: { explainLang, dailyGoalMinutes, currentLevel, showAllLockedModules },
      lessons: parsed.lessons && typeof parsed.lessons === 'object' ? parsed.lessons : base.lessons,
      cards: parsed.cards && typeof parsed.cards === 'object' ? parsed.cards : base.cards,
      days: normalizeDays(parsed.days),
      saved: Array.isArray(parsed.saved) ? parsed.saved : base.saved,
      bookmarkedStories: Array.isArray(parsed.bookmarkedStories) ? parsed.bookmarkedStories : base.bookmarkedStories,
      writingDone: Array.isArray(parsed.writingDone) ? parsed.writingDone : base.writingDone,
      speakingDone: Array.isArray(parsed.speakingDone) ? parsed.speakingDone : base.speakingDone,
      storiesDone: parsed.storiesDone && typeof parsed.storiesDone === 'object' ? parsed.storiesDone : base.storiesDone,
      listeningScores: parsed.listeningScores && typeof parsed.listeningScores === 'object' ? parsed.listeningScores : base.listeningScores,
      readingDone: parsed.readingDone && typeof parsed.readingDone === 'object' ? parsed.readingDone : base.readingDone,
      assessments: parsed.assessments && typeof parsed.assessments === 'object' ? parsed.assessments : base.assessments,
      mistakes: parsed.mistakes && typeof parsed.mistakes === 'object' ? parsed.mistakes : base.mistakes,
      mistakeAnswers: parsed.mistakeAnswers && typeof parsed.mistakeAnswers === 'object' ? parsed.mistakeAnswers : base.mistakeAnswers,
      puzzleMistakes: parsed.puzzleMistakes && typeof parsed.puzzleMistakes === 'object' ? parsed.puzzleMistakes : base.puzzleMistakes,
      puzzleMistakeAnswers:
        parsed.puzzleMistakeAnswers && typeof parsed.puzzleMistakeAnswers === 'object'
          ? parsed.puzzleMistakeAnswers
          : base.puzzleMistakeAnswers,
      academy: normalizeAcademyProgress(parsed.academy),
    };
  } catch {
    return initialState();
  }
}

export function saveProgress(state: ProgressState): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
