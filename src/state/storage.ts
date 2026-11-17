import { LEVEL_ORDER } from '../content/courses';
import { initialState, type ProgressState } from './progress';
import { normalizeAcademyProgress } from './academyProgress';

const KEY = 'italianpro.progress.v1';

/** Loads saved progress; corrupt or missing data falls back to a fresh state. */
export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initialState();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    if (parsed.version !== 1) return initialState();
    const base = initialState();
    const rawLevel = parsed.settings?.currentLevel;
    const currentLevel = rawLevel && (LEVEL_ORDER as string[]).includes(rawLevel) ? rawLevel : base.settings.currentLevel;
    const rawLang = parsed.settings?.explainLang;
    const explainLang = rawLang === 'bn' || rawLang === 'en' || rawLang === 'it' ? rawLang : base.settings.explainLang;
    const showAllLockedModules = Boolean(parsed.settings?.showAllLockedModules);
    return {
      ...base,
      ...parsed,
      settings: { ...base.settings, ...parsed.settings, explainLang, currentLevel, showAllLockedModules },
      saved: Array.isArray(parsed.saved) ? parsed.saved : base.saved,
      bookmarkedStories: Array.isArray(parsed.bookmarkedStories) ? parsed.bookmarkedStories : base.bookmarkedStories,
      writingDone: Array.isArray(parsed.writingDone) ? parsed.writingDone : base.writingDone,
      speakingDone: Array.isArray(parsed.speakingDone) ? parsed.speakingDone : base.speakingDone,
      storiesDone: parsed.storiesDone ?? base.storiesDone,
      listeningScores: parsed.listeningScores ?? base.listeningScores,
      readingDone: parsed.readingDone ?? base.readingDone,
      assessments: parsed.assessments ?? base.assessments,
      mistakes: parsed.mistakes ?? base.mistakes,
      mistakeAnswers: parsed.mistakeAnswers ?? base.mistakeAnswers,
      puzzleMistakes: parsed.puzzleMistakes ?? base.puzzleMistakes,
      puzzleMistakeAnswers: parsed.puzzleMistakeAnswers ?? base.puzzleMistakeAnswers,
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
