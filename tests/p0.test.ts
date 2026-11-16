import { describe, expect, it } from 'vitest';
import {
  XP,
  initialState,
  isLevelUnlocked,
  reducer,
  type ProgressState,
} from '../src/state/progress';
import { allLessons } from '../src/content/courses';
import { WORDS, SENTENCES } from '../src/content/bank';
import { loadAllBundles, loadLevelAssessments, loadLevelListening } from '../src/content/registry';
import {
  collectPuzzleMistakes,
  collectQuizMistakes,
  countReviewableMistakes,
  resolvePuzzleById,
} from '../src/screens/practice/MistakesScreen';
import {
  evaluateWritingSubmission,
  matchesItalianKeyword,
} from '../src/screens/practice/WritingScreen';

const today = '2026-11-16';

describe('P0-1: Listening Quiz completion & XP rules', () => {
  it('awards listening completion XP only once and updates best score on retry without duplicate XP', () => {
    let s = initialState();
    s = reducer(s, { type: 'recordListening', exerciseId: 'ls-a1-01', score: 0.5, today });
    expect(s.listeningScores['ls-a1-01']).toBe(0.5);
    expect(s.xp).toBe(XP.listeningComplete);

    // Retry with higher score updates best score but does not award duplicate XP
    const s2 = reducer(s, { type: 'recordListening', exerciseId: 'ls-a1-01', score: 1.0, today });
    expect(s2.listeningScores['ls-a1-01']).toBe(1.0);
    expect(s2.xp).toBe(XP.listeningComplete);

    // Repeated call with lower score keeps best score and does not award duplicate XP
    const s3 = reducer(s2, { type: 'recordListening', exerciseId: 'ls-a1-01', score: 0.75, today });
    expect(s3.listeningScores['ls-a1-01']).toBe(1.0);
    expect(s3.xp).toBe(XP.listeningComplete);
  });
});

describe('P0-2: Reading Quiz completion & zero-score guard', () => {
  it('does not mark reading completed or award XP on a zero-score attempt', () => {
    const s0 = initialState();
    const afterZero = reducer(s0, { type: 'completeReading', readingId: 'rd-a1-01', score: 0, today });
    expect(afterZero.readingDone['rd-a1-01']).toBeUndefined();
    expect(afterZero.xp).toBe(0);
  });

  it('awards reading XP once on positive score and prevents duplicate XP on repeat completion', () => {
    let s = initialState();
    s = reducer(s, { type: 'completeReading', readingId: 'rd-a1-01', score: 0.75, today });
    expect(s.readingDone['rd-a1-01']).toBe(true);
    expect(s.xp).toBe(XP.readingComplete);

    const sRepeat = reducer(s, { type: 'completeReading', readingId: 'rd-a1-01', score: 1.0, today });
    expect(sRepeat.readingDone['rd-a1-01']).toBe(true);
    expect(sRepeat.xp).toBe(XP.readingComplete);
  });
});

describe('P0-3: Review Mistakes integration (state.mistakes + state.puzzleMistakes)', () => {
  it('collects both lesson quiz mistakes and puzzle mistakes with original question, previous answer, and correct answer', () => {
    const firstLesson = allLessons()[0]!.lesson;
    const firstQ = firstLesson.quiz[0]!;
    const wrongOption = firstQ.options.find((_, i) => i !== firstQ.answer)!;

    let s = initialState();
    // Record a lesson quiz mistake with chosen wrong answer
    s = reducer(s, {
      type: 'submitQuiz',
      lessonId: firstLesson.id,
      today,
      results: [{ questionId: firstQ.id, correct: false, chosen: wrongOption }],
    });

    // Record an explicit puzzle mistake and a sentence-build puzzle mistake
    const sentenceKey = SENTENCES.A1[0]!.key;
    s = reducer(s, {
      type: 'recordPuzzleMistake',
      puzzleId: 'pz-a1-001',
      givenAnswer: 'risposta sbagliata',
    });
    s = reducer(s, {
      type: 'recordPuzzleMistake',
      puzzleId: sentenceKey,
      givenAnswer: 'ordine errato',
    });

    const quizItems = collectQuizMistakes(s);
    const puzzleItems = collectPuzzleMistakes(s);

    expect(quizItems.length).toBe(1);
    expect(quizItems[0]!.question.prompt.en).toBe(firstQ.prompt.en);
    expect(quizItems[0]!.previousAnswer).toBe(wrongOption);
    expect(quizItems[0]!.correctAnswer).toBe(firstQ.options[firstQ.answer]);

    expect(puzzleItems.length).toBe(2);
    expect(puzzleItems[0]!.puzzleId).toBe('pz-a1-001');
    expect(puzzleItems[0]!.previousAnswer).toBe('risposta sbagliata');
    expect(puzzleItems[0]!.correctAnswer).toBe(resolvePuzzleById('pz-a1-001')!.answerIt);

    expect(puzzleItems[1]!.puzzleId).toBe(sentenceKey);
    expect(puzzleItems[1]!.previousAnswer).toBe('ordine errato');
    expect(puzzleItems[1]!.correctAnswer).toBe(SENTENCES.A1[0]!.it);

    // Practice Hub badge count matches reviewable mistakes
    expect(countReviewableMistakes(s)).toBe(3);

    // Clearing a puzzle mistake removes it and awards XP only after successful review
    const xpBefore = s.xp;
    s = reducer(s, { type: 'clearPuzzleMistake', puzzleId: 'pz-a1-001', today });
    expect(s.puzzleMistakes['pz-a1-001']).toBeUndefined();
    expect(s.puzzleMistakeAnswers?.['pz-a1-001']).toBeUndefined();
    expect(s.xp).toBe(xpBefore + XP.correctAnswer);
    expect(countReviewableMistakes(s)).toBe(2);

    // Clearing a quiz mistake removes it and awards XP
    s = reducer(s, { type: 'clearMistake', key: `${firstLesson.id}:${firstQ.id}` });
    expect(s.mistakes[`${firstLesson.id}:${firstQ.id}`]).toBeUndefined();
    expect(countReviewableMistakes(s)).toBe(1);
  });
});

describe('P0-4: Writing Rubric model responses and inflection-aware keyword matching', () => {
  it('handles legitimate Italian conjugations, plurals, clitics, and articulated prepositions', () => {
    expect(matchesItalianKeyword('Compriamo i biglietti sul sito.', 'biglietto')).toBe(true);
    expect(matchesItalianKeyword('Vorrei fissare un appuntamento per rinnovarlo.', 'rinnovare')).toBe(true);
    expect(matchesItalianKeyword('Vorrei festeggiarlo insieme a voi.', 'festeggiare')).toBe(true);
    expect(matchesItalianKeyword('Spegniamo sempre le luci inutili.', 'spegnere')).toBe(true);
    expect(matchesItalianKeyword('Riducessimo gli sprechi quotidiani.', 'spreco')).toBe(true);
    expect(matchesItalianKeyword('La coincidenza era già partita.', 'era già partito')).toBe(true);
    expect(matchesItalianKeyword('Me la sono cavata salendo sul treno successivo.', 'cavarsela')).toBe(true);
    expect(matchesItalianKeyword('Mi sono fatto mandare due preventivi.', 'preventivo')).toBe(true);
    expect(matchesItalianKeyword('Non può svilupparsi a scapito della sicurezza sul lavoro.', 'a scapito di')).toBe(true);
    expect(matchesItalianKeyword('Non esci mai quando piove.', 'uscire')).toBe(true);
    expect(matchesItalianKeyword('Abbiamo risolto il problema con calma.', 'risolvere')).toBe(true);
  });

  it('all 48 writing modelResponses (including the 12 previously failing tasks and 18 keyword sets) pass word count, punctuation, and 100% requiredKeywords', async () => {
    const bundles = await loadAllBundles();
    const allWriting = [
      ...bundles.A1.writing,
      ...bundles.A2.writing,
      ...bundles.B1.writing,
      ...bundles.B2.writing,
    ];
    expect(allWriting.length).toBe(48);

    const previouslyFailingIds = [
      'wr-b1-05',
      'wr-b2-01',
      'wr-b2-02',
      'wr-b2-03',
      'wr-b2-04',
      'wr-b2-05',
      'wr-b2-06',
      'wr-b2-07',
      'wr-b2-08',
      'wr-b2-09',
      'wr-b2-10',
      'wr-b2-12',
    ];

    for (const id of previouslyFailingIds) {
      const task = allWriting.find((w) => w.id === id);
      expect(task, `Missing task ${id}`).toBeDefined();
      const report = evaluateWritingSubmission(task!, task!.modelResponse.it);
      expect(report.minOk, `${id}: words ${report.words} < minWords ${task!.minWords}`).toBe(true);
      expect(report.missingKeywords, `${id} missing keywords: ${report.missingKeywords.join(', ')}`).toEqual([]);
      expect(report.passed, `${id} did not pass rubric`).toBe(true);
    }

    for (const task of allWriting) {
      const report = evaluateWritingSubmission(task, task.modelResponse.it);
      expect(
        report.words,
        `${task.id} word count (${report.words}) must be >= minWords (${task.minWords})`,
      ).toBeGreaterThanOrEqual(task.minWords);
      expect(report.minOk, `${task.id} minOk`).toBe(true);
      expect(report.punctuationOk, `${task.id} punctuationOk`).toBe(true);
      expect(
        report.missingKeywords,
        `${task.id} modelResponse missed requiredKeywords: ${report.missingKeywords.join(', ')}`,
      ).toEqual([]);
      expect(report.matchedKeywords.length).toBe(task.requiredKeywords.length);
      expect(report.passed, `${task.id} modelResponse must pass rubric`).toBe(true);
    }
  });
});

describe('P0-5: B2 Listening Flashcard Saving across all 62 exercises', () => {
  it('verifies all 62 B2 listening exercises have valid vocabKeys in WORDS.B2 and can be added to flashcards', async () => {
    const b2Listening = await loadLevelListening('B2');
    expect(b2Listening.length).toBe(62);

    const b2WordKeys = new Set(WORDS.B2.map((w) => w.key));
    let state = initialState();

    for (const ex of b2Listening) {
      expect(ex.vocabKeys.length, `${ex.id} should have vocabKeys`).toBeGreaterThan(0);
      const validKeys = ex.vocabKeys.filter((k) => b2WordKeys.has(k));
      expect(validKeys, `${ex.id} has invalid B2 vocabKeys`).toEqual(ex.vocabKeys);

      state = reducer(state, { type: 'addCards', keys: validKeys, today });
      for (const k of validKeys) {
        expect(state.cards[k], `${ex.id} key ${k} was not added to cards`).toBeDefined();
      }
    }
  });
});

describe('P0-6: Locked Final Assessments progression rules', () => {
  const passLesson = (s: ProgressState, lessonId: string): ProgressState => {
    const lesson = allLessons().find((r) => r.lesson.id === lessonId)!.lesson;
    return reducer(s, {
      type: 'submitQuiz',
      lessonId,
      today,
      results: lesson.quiz.map((q) => ({ questionId: q.id, correct: true })),
    });
  };

  it('keeps finalAssessment locked for A2, B1, and B2 until the preceding level is fully completed', async () => {
    const [a1Ass, a2Ass, b1Ass, b2Ass] = await Promise.all([
      loadLevelAssessments('A1'),
      loadLevelAssessments('A2'),
      loadLevelAssessments('B1'),
      loadLevelAssessments('B2'),
    ]);

    expect(a1Ass.find((a) => !a.unitNumber)?.id).toBe('assess-a1-final');
    expect(a2Ass.find((a) => !a.unitNumber)?.id).toBe('assess-a2-final');
    expect(b1Ass.find((a) => !a.unitNumber)?.id).toBe('assess-b1-final');
    expect(b2Ass.find((a) => !a.unitNumber)?.id).toBe('assess-b2-final');

    let s = initialState();
    // Initial state: only A1 is unlocked; A2, B1, B2 final assessments are gated by isLevelUnlocked
    expect(isLevelUnlocked(s, 'A1')).toBe(true);
    expect(isLevelUnlocked(s, 'A2')).toBe(false);
    expect(isLevelUnlocked(s, 'B1')).toBe(false);
    expect(isLevelUnlocked(s, 'B2')).toBe(false);

    // Complete A1 -> unlocks A2, keeps B1 and B2 locked
    for (const r of allLessons().filter((x) => x.level.id === 'A1')) {
      s = passLesson(s, r.lesson.id);
    }
    expect(isLevelUnlocked(s, 'A2')).toBe(true);
    expect(isLevelUnlocked(s, 'B1')).toBe(false);
    expect(isLevelUnlocked(s, 'B2')).toBe(false);

    // Complete A2 -> unlocks B1, keeps B2 locked
    for (const r of allLessons().filter((x) => x.level.id === 'A2')) {
      s = passLesson(s, r.lesson.id);
    }
    expect(isLevelUnlocked(s, 'B1')).toBe(true);
    expect(isLevelUnlocked(s, 'B2')).toBe(false);

    // Complete B1 -> unlocks B2
    for (const r of allLessons().filter((x) => x.level.id === 'B1')) {
      s = passLesson(s, r.lesson.id);
    }
    expect(isLevelUnlocked(s, 'B2')).toBe(true);
  });
});
