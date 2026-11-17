import type { LevelId, QuizQuestion } from '../content/types';
import { getAcademyModules, isFinalExamModuleId } from '../content/academy/curriculum';
import { levelLessons, findLesson } from '../content/courses';
import { RICH_WORDS } from '../content/bank';
import { A1_PUZZLES } from '../content/a1/puzzles';
import { A2_PUZZLES } from '../content/a2/puzzles';
import { B1_PUZZLES } from '../content/b1/puzzles';
import { B2_PUZZLES } from '../content/b2/puzzles';
import { generateAcademyModuleExamAsync, randomizeQuestionOptions, shuffleArray } from './examEngine';
import { getVocabPriorityInfo } from './vocabRevision';
import { getAcademyModuleProgress, isAcademyModuleCompleted } from '../state/academyProgress';
import { isLessonCompleted, type ProgressState } from '../state/progress';

const ALL_EXPLICIT_PUZZLES = new Map(
  [...A1_PUZZLES, ...A2_PUZZLES, ...B1_PUZZLES, ...B2_PUZZLES].map((p) => [p.id, p]),
);

export interface ReviewQuizAvailability {
  level: LevelId;
  activeMistakesCount: number;
  completedModulesCount: number;
  studiedModulesCount: number;
  completedLessonsCount: number;
  hasCompletedOrStudiedContent: boolean;
}

export interface DailyReviewQuizSession {
  level: LevelId;
  questions: QuizQuestion[];
  sourceSummary: {
    mistakes: number;
    completedOrStudied: number;
    vocab: number;
    coreStarter: number;
  };
  hasCompletedOrStudiedContent: boolean;
}

export function getReviewQuizAvailability(state: ProgressState, level: LevelId): ReviewQuizAvailability {
  const activeLessonMistakes = Object.keys(state.mistakes).filter((key) => {
    const [lessonId = ''] = key.split(':');
    return findLesson(lessonId)?.level.id === level;
  }).length;

  const activePuzzleMistakes = Object.keys(state.puzzleMistakes).filter((puzzleId) => {
    const explicit = ALL_EXPLICIT_PUZZLES.get(puzzleId);
    if (explicit) return explicit.level === level && Boolean(explicit.options?.length);
    return puzzleId.startsWith(`s:${level}:`) || puzzleId.startsWith(`p:${level}:`);
  }).length;

  const mods = getAcademyModules(level);
  const completedModulesCount = mods.filter((m) => isAcademyModuleCompleted(state.academy, m.id, level)).length;
  const studiedModulesCount = mods.filter(
    (m) => !isAcademyModuleCompleted(state.academy, m.id, level) && getAcademyModuleProgress(state.academy, m.id, level).studiedItems.length > 0,
  ).length;
  const completedLessonsCount = levelLessons(level).filter((l) => isLessonCompleted(state, l.id)).length;
  const activeMistakesCount = activeLessonMistakes + activePuzzleMistakes;

  return {
    level,
    activeMistakesCount,
    completedModulesCount,
    studiedModulesCount,
    completedLessonsCount,
    hasCompletedOrStudiedContent:
      activeMistakesCount > 0 || completedModulesCount > 0 || studiedModulesCount > 0 || completedLessonsCount > 0,
  };
}

function buildVocabReviewQuestions(
  state: ProgressState,
  level: LevelId,
  limit: number,
  rng: () => number,
): QuizQuestion[] {
  const pool = RICH_WORDS[level];
  if (pool.length < 4) return [];

  const priority = getVocabPriorityInfo(state, level);
  const prioritized = pool.filter((w) => priority.priorityKeys.has(w.key));
  const candidates = shuffleArray(prioritized.length > 0 ? prioritized : pool, rng);
  const out: QuizQuestion[] = [];

  for (const word of candidates) {
    if (out.length >= limit) break;
    const distractors = shuffleArray(
      pool.filter(
        (other) =>
          other.key !== word.key &&
          other.tr.en.trim().toLowerCase() !== word.tr.en.trim().toLowerCase() &&
          other.tr.bn.trim() !== word.tr.bn.trim(),
      ),
      rng,
    ).slice(0, 3);
    if (distractors.length < 3) continue;

    const bnOpts = [word.tr.bn, ...distractors.map((d) => d.tr.bn)];
    const enOpts = [word.tr.en, ...distractors.map((d) => d.tr.en)];
    const q: QuizQuestion = {
      id: `rev-vocab-${level}-${word.key}`,
      prompt: {
        bn: `${level} শব্দভাণ্ডার রিভিউ: «${word.it}» শব্দের সঠিক অর্থ কোনটি?`,
        en: `${level} Vocabulary Review: Choose the accurate meaning of “${word.it}”:`,
        it: `Ripasso lessico ${level}: Scegli il significato corretto di «${word.it}»:`,
      },
      it: word.it,
      options: enOpts,
      localizedOptions: { bn: bnOpts, en: enOpts, it: enOpts },
      answer: 0,
      explanation: {
        bn: `${word.it} (/${word.pronunciation}/) = ${word.tr.bn} · ${word.example.it}`,
        en: `${word.it} (/${word.pronunciation}/) = ${word.tr.en} · ${word.example.it}`,
        it: `${word.it} (/${word.pronunciation}/) = ${word.tr.en} · ${word.example.it}`,
      },
    };
    const randomized = randomizeQuestionOptions({ ...q, moduleId: `${level.toLowerCase()}-vocab` }, rng);
    out.push({
      id: randomized.id,
      prompt: randomized.prompt,
      it: randomized.it,
      options: randomized.options,
      localizedOptions: randomized.localizedOptions,
      answer: randomized.answer,
      explanation: randomized.explanation,
    });
  }
  return out;
}

function starterModuleIdsForLevel(level: LevelId): string[] {
  if (level === 'A1') return ['greetings-intro', 'articles', 'verbs', 'vocabulary'];
  if (level === 'A2') return ['a2-tenses', 'a2-verbs', 'a2-vocab'];
  if (level === 'B1') return ['b1-subjunctive', 'b1-verbs', 'b1-vocab'];
  return ['b2-syntax', 'b2-verbs', 'b2-vocab'];
}

function deduplicateQuizQuestions(items: readonly QuizQuestion[]): QuizQuestion[] {
  const seenIds = new Set<string>();
  const seenStems = new Set<string>();
  const out: QuizQuestion[] = [];
  for (const q of items) {
    if (!q.options || q.options.length < 2) continue;
    const stem = `${q.it ?? ''}|${q.prompt.en}|${q.options[q.answer] ?? ''}`;
    if (seenIds.has(q.id) || seenStems.has(stem)) continue;
    seenIds.add(q.id);
    seenStems.add(stem);
    out.push(q);
  }
  return out;
}

/**
 * Generates an interactive 8-question CEFR-level review quiz combining:
 * 1. Active-level lesson & puzzle mistakes
 * 2. Completed Academy modules in the active CEFR level (grammar, verbs, comms, etc.)
 * 3. Partially studied Academy modules & completed legacy lessons in that level
 * 4. Prioritized (bookmarked / weak / studied) level vocabulary
 * 5. Active-level starter grammar & vocabulary fallback when no modules are completed yet
 */
export async function buildDailyReviewQuiz(
  state: ProgressState,
  level: LevelId,
  count = 8,
  rng: () => number = Math.random,
): Promise<DailyReviewQuizSession> {
  const availability = getReviewQuizAvailability(state, level);

  // 1. Collect active-level mistakes
  const mistakeQuestions: QuizQuestion[] = [];
  for (const key of Object.keys(state.mistakes)) {
    const [lessonId = '', qid = ''] = key.split(':');
    const found = findLesson(lessonId);
    if (!found || found.level.id !== level) continue;
    const q = found.lesson.quiz.find((item) => item.id === qid);
    if (!q) continue;
    mistakeQuestions.push({ ...q, id: `mistake:${key}` });
  }
  for (const puzzleId of Object.keys(state.puzzleMistakes)) {
    const p = ALL_EXPLICIT_PUZZLES.get(puzzleId);
    if (!p || p.level !== level || !p.options || p.options.length < 2) continue;
    const ansIdx = p.options.indexOf(p.answerIt);
    if (ansIdx < 0) continue;
    mistakeQuestions.push({
      id: `pmistake:${puzzleId}`,
      prompt: p.prompt,
      it: p.stemIt ?? '',
      options: [...p.options],
      answer: ansIdx,
      explanation: p.explanation,
    });
  }

  // 2. Collect questions from completed & studied Academy modules for this level
  const mods = getAcademyModules(level).filter((m) => m.implemented);
  const completedMods = shuffleArray(
    mods.filter((m) => !isFinalExamModuleId(m.id) && isAcademyModuleCompleted(state.academy, m.id, level)),
    rng,
  );
  const studiedMods = shuffleArray(
    mods.filter(
      (m) =>
        !isFinalExamModuleId(m.id) &&
        !isAcademyModuleCompleted(state.academy, m.id, level) &&
        getAcademyModuleProgress(state.academy, m.id, level).studiedItems.length > 0,
    ),
    rng,
  );

  const selectedModules = [...completedMods.slice(0, 4), ...studiedMods.slice(0, 3)];
  const academyExamBatches = await Promise.all(
    selectedModules.map((m) => generateAcademyModuleExamAsync(m.id, rng, level).catch(() => [])),
  );
  const completedOrStudiedPool: QuizQuestion[] = shuffleArray(
    academyExamBatches.flat().map((q) => ({
      id: `rev-mod-${level}-${q.id}`,
      prompt: q.prompt,
      it: q.it,
      options: q.options,
      localizedOptions: q.localizedOptions,
      answer: q.answer,
      explanation: q.explanation,
    })),
    rng,
  );

  // Completed legacy lessons in this level
  for (const lessonRef of levelLessons(level)) {
    if (!isLessonCompleted(state, lessonRef.id)) continue;
    for (const q of lessonRef.quiz) {
      completedOrStudiedPool.push({ ...q, id: `rev-legacy-${lessonRef.id}-${q.id}` });
    }
  }

  // 3. Vocabulary review questions (prioritizing bookmarked/weak/studied words)
  const vocabQuestions = buildVocabReviewQuestions(state, level, 3, rng);

  // Assemble primary selection from user's real progress + active level vocab
  const chosen: QuizQuestion[] = [];
  const chosenMistakes = shuffleArray(mistakeQuestions, rng).slice(0, 3);
  chosen.push(...chosenMistakes);

  const primaryModSlice = deduplicateQuizQuestions(completedOrStudiedPool).slice(0, Math.max(0, count - chosen.length - 2));
  chosen.push(...primaryModSlice);
  chosen.push(...vocabQuestions);

  let deduped = deduplicateQuizQuestions(chosen);
  let coreStarterCount = 0;

  // 4. Core starter fallback (guarantees grammar + vocab quiz at active level even before finishing a module)
  if (deduped.length < count) {
    const starterIds = starterModuleIdsForLevel(level);
    const starterBatches = await Promise.all(
      starterIds.map((id) => generateAcademyModuleExamAsync(id, rng, level).catch(() => [])),
    );
    const starterQuestions: QuizQuestion[] = shuffleArray(
      starterBatches.flat().map((q) => ({
        id: `rev-core-${level}-${q.id}`,
        prompt: q.prompt,
        it: q.it,
        options: q.options,
        localizedOptions: q.localizedOptions,
        answer: q.answer,
        explanation: q.explanation,
      })),
      rng,
    );
    const extraVocab = buildVocabReviewQuestions(state, level, 4, rng);
    const combinedFallback = deduplicateQuizQuestions([...deduped, ...starterQuestions, ...extraVocab]);
    coreStarterCount = Math.max(0, Math.min(count, combinedFallback.length) - deduped.length);
    deduped = combinedFallback;
  }

  const finalQuestions = deduped.slice(0, count);

  return {
    level,
    questions: finalQuestions,
    sourceSummary: {
      mistakes: chosenMistakes.length,
      completedOrStudied: primaryModSlice.length,
      vocab: vocabQuestions.length,
      coreStarter: coreStarterCount,
    },
    hasCompletedOrStudiedContent: availability.hasCompletedOrStudiedContent,
  };
}
