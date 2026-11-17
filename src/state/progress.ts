import type { ExplainLang, LevelId } from '../content/types';
import { LESSON_PASS_SCORE } from '../content/types';
import { LEVEL_ORDER, isLevelContentComplete, levelLessons } from '../content/courses';
import { addDays, dayKey } from '../lib/date';
import type { AcademyModuleId } from '../content/academy/types';
import {
  findAcademyModule,
  getAcademyModules,
  inferLevelFromModuleId,
  isFinalExamModuleId,
} from '../content/academy/curriculum';
import {
  academyStudyStats,
  defaultAcademyProgress,
  emptyModuleProgress,
  getAcademyModuleProgress,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
  type AcademyModuleProgress,
  type AcademyProgressState,
  type ExamAttemptRecord,
} from './academyProgress';
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
  settings: {
    explainLang: ExplainLang;
    dailyGoalMinutes: number;
    currentLevel?: LevelId;
    showAllLockedModules?: boolean;
  };
  xp: number;
  lessons: Record<string, LessonProgress>;
  /** Spaced-repetition cards keyed by `${lessonId}:${phraseId}` or `w:<level>:<it>`. */
  cards: Record<string, CardState>;
  /** Wrong quiz answers keyed by `${lessonId}:${questionId}`. */
  mistakes: Record<string, number>;
  /** Optional recorded wrong answer text for lesson quiz mistakes. */
  mistakeAnswers?: Record<string, string>;
  /** Per-day study seconds and completed plan tasks. */
  days: Record<string, { seconds: number; tasks: TaskKind[] }>;
  saved: string[];
  storiesDone: Record<string, boolean>;
  bookmarkedStories: string[];
  listeningScores: Record<string, number>;
  readingDone: Record<string, boolean>;
  writingDone: string[];
  speakingDone: string[];
  assessments: Record<string, { score: number; passed: boolean }>;
  puzzleMistakes: Record<string, number>;
  /** Optional recorded wrong answer text for puzzle mistakes. */
  puzzleMistakeAnswers?: Record<string, string>;
  /** CEFR A1 Learning Academy structured module progress & exam history. */
  academy?: AcademyProgressState;
}

export const XP = {
  lessonComplete: 50,
  correctAnswer: 5,
  cardReview: 2,
  challenge: 50,
  storyComplete: 25,
  listeningComplete: 20,
  readingComplete: 20,
  writingComplete: 25,
  speakingComplete: 20,
  assessmentPass: 60,
  academyModuleComplete: 50,
} as const;

export function initialState(): ProgressState {
  return {
    version: 1,
    settings: { explainLang: 'bn', dailyGoalMinutes: 25, currentLevel: 'A1', showAllLockedModules: false },
    xp: 0,
    lessons: {},
    cards: {},
    mistakes: {},
    mistakeAnswers: {},
    days: {},
    saved: [],
    storiesDone: {},
    bookmarkedStories: [],
    listeningScores: {},
    readingDone: {},
    writingDone: [],
    speakingDone: [],
    assessments: {},
    puzzleMistakes: {},
    puzzleMistakeAnswers: {},
    academy: defaultAcademyProgress(),
  };
}

export type Action =
  | { type: 'viewLessonTab'; lessonId: string; tab: string; phraseIds: string[]; today: string }
  | { type: 'submitQuiz'; lessonId: string; results: { questionId: string; correct: boolean; chosen?: string }[]; today: string }
  | { type: 'reviewCard'; key: string; remembered: boolean; today: string }
  | { type: 'completeTask'; task: TaskKind; today: string }
  | { type: 'completeChallenge'; correct: number; today: string }
  | { type: 'addStudyTime'; seconds: number; today: string }
  | { type: 'toggleSaved'; key: string }
  | { type: 'clearMistake'; key: string }
  | { type: 'addCards'; keys: string[]; today: string }
  | { type: 'awardXp'; amount: number; today: string }
  | { type: 'completeStory'; storyId: string; today: string }
  | { type: 'toggleBookmarkStory'; storyId: string }
  | { type: 'recordListening'; exerciseId: string; score: number; today: string }
  | { type: 'completeReading'; readingId: string; score?: number; today: string }
  | { type: 'completeWriting'; writingId: string; today: string }
  | { type: 'completeSpeaking'; speakingId: string; today: string }
  | { type: 'submitAssessment'; assessmentId: string; score: number; passScore: number; today: string }
  | { type: 'recordPuzzleMistake'; puzzleId: string; givenAnswer?: string }
  | { type: 'clearPuzzleMistake'; puzzleId: string; today: string }
  | { type: 'completeAcademyTheory'; moduleId: AcademyModuleId; level?: LevelId }
  | { type: 'studyAcademyItem'; moduleId: AcademyModuleId; itemId: string; level?: LevelId }
  | {
      type: 'completeAcademyDrill';
      moduleId: AcademyModuleId;
      level?: LevelId;
      correct: number;
      total: number;
      today: string;
    }
  | {
      type: 'submitAcademyExam';
      attemptId: string;
      moduleId: AcademyModuleId;
      level?: LevelId;
      total: number;
      correct: number;
      incorrect: number;
      maxIncorrect: number;
      today: string;
    }
  | { type: 'setExplainLang'; lang: ExplainLang }
  | { type: 'setDailyGoal'; minutes: number }
  | { type: 'setCurrentLevel'; level: LevelId }
  | { type: 'setShowAllLockedModules'; enabled: boolean }
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
      const mistakeAnswers = { ...(state.mistakeAnswers ?? {}) };
      for (const r of action.results) {
        const key = `${action.lessonId}:${r.questionId}`;
        if (r.correct) {
          delete mistakes[key];
          delete mistakeAnswers[key];
        } else {
          mistakes[key] = (mistakes[key] ?? 0) + 1;
          if (r.chosen !== undefined) mistakeAnswers[key] = r.chosen;
        }
      }
      let next: ProgressState = {
        ...state,
        mistakes,
        mistakeAnswers,
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
    case 'completeStory': {
      const first = !state.storiesDone[action.storyId];
      const next = withTask(
        {
          ...state,
          xp: state.xp + (first ? XP.storyComplete : 0),
          storiesDone: { ...state.storiesDone, [action.storyId]: true },
        },
        action.today,
        'review',
      );
      return next;
    }
    case 'toggleBookmarkStory': {
      const has = state.bookmarkedStories.includes(action.storyId);
      const bookmarkedStories = has
        ? state.bookmarkedStories.filter((id) => id !== action.storyId)
        : [...state.bookmarkedStories, action.storyId];
      return { ...state, bookmarkedStories };
    }
    case 'recordListening': {
      const prev = state.listeningScores[action.exerciseId];
      const first = prev === undefined;
      return withTask(
        {
          ...state,
          xp: state.xp + (first ? XP.listeningComplete : 0),
          listeningScores: {
            ...state.listeningScores,
            [action.exerciseId]: Math.max(prev ?? 0, action.score),
          },
        },
        action.today,
        'listening',
      );
    }
    case 'completeReading': {
      if (action.score !== undefined && action.score <= 0) {
        return state;
      }
      const first = !state.readingDone[action.readingId];
      return withTask(
        {
          ...state,
          xp: state.xp + (first ? XP.readingComplete : 0),
          readingDone: { ...state.readingDone, [action.readingId]: true },
        },
        action.today,
        'review',
      );
    }
    case 'completeWriting': {
      const has = state.writingDone.includes(action.writingId);
      return withTask(
        {
          ...state,
          xp: state.xp + (has ? 0 : XP.writingComplete),
          writingDone: has ? state.writingDone : [...state.writingDone, action.writingId],
        },
        action.today,
        'review',
      );
    }
    case 'completeSpeaking': {
      const has = state.speakingDone.includes(action.speakingId);
      return withTask(
        {
          ...state,
          xp: state.xp + (has ? 0 : XP.speakingComplete),
          speakingDone: has ? state.speakingDone : [...state.speakingDone, action.speakingId],
        },
        action.today,
        'listening',
      );
    }
    case 'submitAssessment': {
      const prev = state.assessments[action.assessmentId];
      const passed = action.score >= action.passScore;
      const newlyPassed = passed && !prev?.passed;
      return withTask(
        {
          ...state,
          xp: state.xp + (newlyPassed ? XP.assessmentPass : 0),
          assessments: {
            ...state.assessments,
            [action.assessmentId]: {
              score: Math.max(prev?.score ?? 0, action.score),
              passed: prev?.passed || passed,
            },
          },
        },
        action.today,
        'lesson',
      );
    }
    case 'recordPuzzleMistake': {
      const count = (state.puzzleMistakes[action.puzzleId] ?? 0) + 1;
      const puzzleMistakeAnswers = { ...(state.puzzleMistakeAnswers ?? {}) };
      if (action.givenAnswer !== undefined) {
        puzzleMistakeAnswers[action.puzzleId] = action.givenAnswer;
      }
      return {
        ...state,
        puzzleMistakes: { ...state.puzzleMistakes, [action.puzzleId]: count },
        puzzleMistakeAnswers,
      };
    }
    case 'clearPuzzleMistake': {
      if (!(action.puzzleId in state.puzzleMistakes)) return state;
      const puzzleMistakes = { ...state.puzzleMistakes };
      const puzzleMistakeAnswers = { ...(state.puzzleMistakeAnswers ?? {}) };
      delete puzzleMistakes[action.puzzleId];
      delete puzzleMistakeAnswers[action.puzzleId];
      return { ...state, puzzleMistakes, puzzleMistakeAnswers, xp: state.xp + XP.correctAnswer };
    }
    case 'clearMistake': {
      if (!(action.key in state.mistakes)) return state;
      const mistakes = { ...state.mistakes };
      const mistakeAnswers = { ...(state.mistakeAnswers ?? {}) };
      delete mistakes[action.key];
      delete mistakeAnswers[action.key];
      return { ...state, mistakes, mistakeAnswers, xp: state.xp + XP.correctAnswer };
    }
    case 'completeAcademyTheory': {
      const academy = state.academy ?? defaultAcademyProgress();
      const lvl = action.level ?? inferLevelFromModuleId(action.moduleId);
      if (!isAcademyModuleUnlocked(academy, action.moduleId, lvl)) return state;
      const prevMod = getAcademyModuleProgress(academy, action.moduleId, lvl);
      if (prevMod.theoryCompleted) return state;
      const updatedMod: AcademyModuleProgress = {
        ...prevMod,
        theoryCompleted: true,
      };
      if (lvl === 'A1') {
        return {
          ...state,
          academy: {
            ...academy,
            modules: { ...academy.modules, [action.moduleId]: updatedMod },
          },
        };
      }
      const prevLevels = academy.levels ?? {};
      const prevLvlMap = prevLevels[lvl] ?? {};
      return {
        ...state,
        academy: {
          ...academy,
          levels: { ...prevLevels, [lvl]: { ...prevLvlMap, [action.moduleId]: updatedMod } },
        },
      };
    }
    case 'studyAcademyItem': {
      const academy = state.academy ?? defaultAcademyProgress();
      const lvl = action.level ?? inferLevelFromModuleId(action.moduleId);
      // Testing Mode access override must never record progress on actually locked modules
      if (!isAcademyModuleUnlocked(academy, action.moduleId, lvl)) return state;
      const prevMod = getAcademyModuleProgress(academy, action.moduleId, lvl);
      if (prevMod.studiedItems.includes(action.itemId)) return state;
      const updatedMod: AcademyModuleProgress = {
        ...prevMod,
        studiedItems: [...prevMod.studiedItems, action.itemId],
      };
      if (lvl === 'A1') {
        return {
          ...state,
          academy: {
            ...academy,
            modules: {
              ...academy.modules,
              [action.moduleId]: updatedMod,
            },
          },
        };
      }
      const prevLevels = academy.levels ?? {};
      const prevLvlMap = prevLevels[lvl] ?? {};
      return {
        ...state,
        academy: {
          ...academy,
          levels: {
            ...prevLevels,
            [lvl]: {
              ...prevLvlMap,
              [action.moduleId]: updatedMod,
            },
          },
        },
      };
    }
    case 'completeAcademyDrill': {
      if (action.total <= 0) return state;
      const academy = state.academy ?? defaultAcademyProgress();
      const lvl = action.level ?? inferLevelFromModuleId(action.moduleId);
      if (!isAcademyModuleUnlocked(academy, action.moduleId, lvl)) return state;
      const prevMod = getAcademyModuleProgress(academy, action.moduleId, lvl);
      const score = action.correct / action.total;
      const incorrect = Math.max(0, action.total - action.correct);
      const updatedMod: AcademyModuleProgress = {
        ...prevMod,
        drillCompleted: true,
        drillCorrect: action.correct,
        drillIncorrect: incorrect,
        drillBestScore: Math.max(prevMod.drillBestScore ?? 0, score),
      };
      let nextAcademy: AcademyProgressState;
      if (lvl === 'A1') {
        nextAcademy = {
          ...academy,
          modules: { ...academy.modules, [action.moduleId]: updatedMod },
        };
      } else {
        const prevLevels = academy.levels ?? {};
        const prevLvlMap = prevLevels[lvl] ?? {};
        nextAcademy = {
          ...academy,
          levels: { ...prevLevels, [lvl]: { ...prevLvlMap, [action.moduleId]: updatedMod } },
        };
      }
      return withTask({ ...state, academy: nextAcademy }, action.today, 'listening');
    }
    case 'submitAcademyExam': {
      if (action.total <= 0) return state;
      const academy = state.academy ?? defaultAcademyProgress();
      const lvl = action.level ?? inferLevelFromModuleId(action.moduleId);
      // Testing Mode access override must never record completion, exam history, or XP on locked modules
      if (!isAcademyModuleUnlocked(academy, action.moduleId, lvl)) return state;
      const prevMod = getAcademyModuleProgress(academy, action.moduleId, lvl);
      // Idempotency guard: never award XP or record completion twice for the same attemptId
      if (prevMod.completedAttemptIds.includes(action.attemptId)) return state;

      const meta = findAcademyModule(action.moduleId, lvl);
      const studyStats = academyStudyStats(academy, action.moduleId, lvl);
      const passedByScore = action.incorrect <= action.maxIncorrect;
      // Do not allow completing a module unless all required items have been studied
      const canComplete = passedByScore && (meta?.requiredItemIds.length ? studyStats.readyForExam : true);
      const score = action.correct / action.total;
      const newlyCompleted = canComplete && !prevMod.completed;
      const alreadyPassedBefore = prevMod.completed;
      // Grant XP only on first valid passing completion; prevent XP farming on failed runs or retakes.
      const awardedXp =
        !alreadyPassedBefore && canComplete
          ? action.correct * XP.correctAnswer + (newlyCompleted ? XP.academyModuleComplete : 0)
          : 0;

      const record: ExamAttemptRecord = {
        id: action.attemptId,
        moduleId: action.moduleId,
        date: action.today,
        total: action.total,
        correct: action.correct,
        incorrect: action.incorrect,
        score,
        passed: passedByScore,
        awardedXp,
      };

      const updatedMod: AcademyModuleProgress = {
        ...emptyModuleProgress(),
        ...prevMod,
        completed: prevMod.completed || canComplete,
        completedAt: prevMod.completedAt ?? (canComplete ? action.today : undefined),
        bestScore: Math.max(prevMod.bestScore, score),
        attempts: prevMod.attempts + 1,
        failedAttempts: prevMod.failedAttempts + (passedByScore ? 0 : 1),
        completedAttemptIds: [...prevMod.completedAttemptIds.slice(-49), action.attemptId],
        history: [record, ...prevMod.history].slice(0, 20),
      };

      let nextAcademy: AcademyProgressState;
      if (lvl === 'A1') {
        nextAcademy = {
          ...academy,
          modules: {
            ...academy.modules,
            [action.moduleId]: updatedMod,
          },
        };
      } else {
        const prevLevels = academy.levels ?? {};
        const prevLvlMap = prevLevels[lvl] ?? {};
        nextAcademy = {
          ...academy,
          levels: {
            ...prevLevels,
            [lvl]: {
              ...prevLvlMap,
              [action.moduleId]: updatedMod,
            },
          },
        };
      }

      let next: ProgressState = {
        ...state,
        xp: state.xp + awardedXp,
        academy: nextAcademy,
      };
      next = withTask(next, action.today, 'review');
      if (canComplete) next = withTask(next, action.today, 'lesson');
      return next;
    }
    case 'setExplainLang':
      return { ...state, settings: { ...state.settings, explainLang: action.lang } };
    case 'setDailyGoal':
      return { ...state, settings: { ...state.settings, dailyGoalMinutes: Math.min(120, Math.max(5, action.minutes)) } };
    case 'setCurrentLevel':
      return (LEVEL_ORDER as string[]).includes(action.level)
        ? { ...state, settings: { ...state.settings, currentLevel: action.level } }
        : state;
    case 'setShowAllLockedModules':
      return { ...state, settings: { ...state.settings, showAllLockedModules: action.enabled } };
    case 'reset':
      return initialState();
  }
}

/* ---------- selectors ---------- */

export function getCurrentLevel(state: ProgressState): LevelId {
  const candidate = state.settings.currentLevel;
  return candidate && (LEVEL_ORDER as string[]).includes(candidate) ? candidate : 'A1';
}

export function isShowAllLockedModulesEnabled(state: ProgressState): boolean {
  return Boolean(state.settings.showAllLockedModules);
}

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

/** A level opens only when the previous level is fully completed — either legacy lessons or its Academy Final Exam. */
export function isLevelUnlocked(state: ProgressState, id: LevelId): boolean {
  const index = LEVEL_ORDER.indexOf(id);
  if (index <= 0) return true;
  const prev = LEVEL_ORDER[index - 1]!;
  if (!isLevelUnlocked(state, prev)) return false;
  // A level whose content is still being authored cannot be completed yet.
  if (!isLevelContentComplete(prev)) return false;
  const legacyComplete = levelLessons(prev).every((l) => isLessonCompleted(state, l.id));
  const finalExamMod = getAcademyModules(prev).find((m) => isFinalExamModuleId(m.id));
  const academyComplete = Boolean(
    finalExamMod && isAcademyModuleCompleted(state.academy, finalExamMod.id, prev),
  );
  return legacyComplete || academyComplete;
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
