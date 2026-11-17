import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { beforeEach, describe, expect, it } from 'vitest';
import { A1_ACADEMY_MODULES } from '../src/content/academy/curriculum';
import { A1_FINAL_EXAM_BANK, buildA1FinalExam } from '../src/content/academy/a1FinalExam';
import { A1FinalExamFlow } from '../src/components/academy/A1FinalExamFlow';
import { FinalExamModuleScreen } from '../src/screens/academy/FinalExamModuleScreen';
import { RouterProvider } from '../src/app/router';
import {
  evaluateExamAttempt,
  formatExamPercentage,
  randomizeQuestionOptions,
} from '../src/lib/examEngine';
import {
  A1_FINAL_EXAM_DRAFT_KEY,
  buildReviewExplanation,
  clearA1FinalExamDraft,
  createFreshA1FinalExamDraft,
  getUnansweredIndices,
  loadA1FinalExamDraft,
  loadOrCreateA1FinalExamDraft,
  saveA1FinalExamDraft,
} from '../src/lib/finalExamDraft';
import { resolveExamOptions } from '../src/lib/i18n';
import { getAcademyModuleProgress, isAcademyModuleCompleted } from '../src/state/academyProgress';
import { ProgressProvider } from '../src/state/ProgressContext';
import { initialState, isLevelUnlocked, reducer, XP, type ProgressState } from '../src/state/progress';
import { saveProgress } from '../src/state/storage';

const BENGALI_REGEX = /[\u0980-\u09FF]/;

function makeSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function completeA1Modules1To10(start: ProgressState, today = '2026-11-16'): ProgressState {
  let s = start;
  const prereqs = A1_ACADEMY_MODULES.filter((m) => m.id !== 'final-exam');
  for (const mod of prereqs) {
    s = reducer(s, { type: 'completeAcademyTheory', moduleId: mod.id, level: 'A1' });
    for (const itemId of mod.requiredItemIds) {
      s = reducer(s, { type: 'studyAcademyItem', moduleId: mod.id, level: 'A1', itemId });
    }
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: `pass-${mod.id}`,
      moduleId: mod.id,
      level: 'A1',
      total: mod.examQuestionCount,
      correct: mod.examQuestionCount,
      incorrect: 0,
      maxIncorrect: mod.maxIncorrect,
      today,
    });
  }
  return s;
}

describe('A1 Final Examination: Complete Deferred Exam Flow', () => {
  const store = new Map<string, string>();
  const today = '2026-11-16';

  beforeEach(() => {
    store.clear();
    const mockStorage = {
      getItem: (key: string) => store.get(key) ?? null,
      setItem: (key: string, val: string) => {
        store.set(key, String(val));
      },
      removeItem: (key: string) => {
        store.delete(key);
      },
      clear: () => {
        store.clear();
      },
    };
    Object.defineProperty(globalThis, 'localStorage', {
      value: mockStorage,
      configurable: true,
      writable: true,
    });
    Object.defineProperty(globalThis, 'window', {
      value: {
        location: { hash: '#/academy/a1/final-exam' },
        addEventListener: () => {},
        removeEventListener: () => {},
        scrollTo: () => {},
        setInterval: () => 0,
        clearInterval: () => {},
        speechSynthesis: undefined,
      },
      configurable: true,
      writable: true,
    });
    Object.defineProperty(globalThis, 'document', {
      value: { visibilityState: 'visible' },
      configurable: true,
      writable: true,
    });
  });

  it('1. evaluates all 30 answered questions accurately upon final submission (e.g. 25/30 -> 83.3% PASS)', () => {
    const questions = buildA1FinalExam(makeSeededRng(101));
    expect(questions).toHaveLength(30);

    const selections: Record<string, number> = {};
    questions.forEach((q, idx) => {
      selections[q.id] = idx < 25 ? q.answer : (q.answer + 1) % q.options.length;
    });

    const result = evaluateExamAttempt({
      attemptId: 'fin-25-of-30',
      moduleId: 'final-exam',
      questions,
      selections,
      maxIncorrect: 9,
    });

    expect(result.total).toBe(30);
    expect(result.correct).toBe(25);
    expect(result.wrongCount).toBe(5);
    expect(result.unanswered).toBe(0);
    expect(result.incorrect).toBe(5);
    expect(result.exactPercentage).toBe(83.3);
    expect(formatExamPercentage(result.exactPercentage)).toBe('83.3');
    expect(result.passed).toBe(true);
  });

  it('2. handles unanswered questions explicitly with Not answered status and review explanations', () => {
    const questions = buildA1FinalExam(makeSeededRng(202));
    const selections: Record<string, number> = {};
    // Answer 25 questions correctly, leave 5 unanswered
    questions.slice(0, 25).forEach((q) => {
      selections[q.id] = q.answer;
    });

    const result = evaluateExamAttempt({
      attemptId: 'fin-unanswered-5',
      moduleId: 'final-exam',
      questions,
      selections,
      maxIncorrect: 9,
    });

    expect(result.total).toBe(30);
    expect(result.correct).toBe(25);
    expect(result.wrongCount).toBe(0);
    expect(result.unanswered).toBe(5);
    expect(result.incorrect).toBe(5);
    expect(result.passed).toBe(true);

    const skipped = result.breakdown.slice(25);
    for (const rec of skipped) {
      expect(rec.answered).toBe(false);
      expect(rec.selectedIndex).toBe(-1);
      expect(rec.selectedText).toBe('');
      expect(rec.correct).toBe(false);

      const enExplain = buildReviewExplanation(rec, 'en', '', rec.correctText);
      expect(enExplain).toContain('No answer was selected');
      expect(enExplain).toContain(rec.correctText);
      expect(BENGALI_REGEX.test(enExplain)).toBe(false);

      const bnExplain = buildReviewExplanation(rec, 'bn', '', rec.correctText);
      expect(BENGALI_REGEX.test(bnExplain)).toBe(true);
    }
  });

  it('3 & 4. supports navigating backward, changing answers before final submit, and reviewing unanswered indices', () => {
    const draft = createFreshA1FinalExamDraft(makeSeededRng(303));
    const q1 = draft.questions[0]!;
    const q2 = draft.questions[1]!;

    // Pick wrong answer on Q1, leave Q2..Q30 unanswered
    const wrongIdx = (q1.answer + 1) % q1.options.length;
    draft.selections[q1.id] = wrongIdx;
    draft.currentIndex = 29;
    saveA1FinalExamDraft(draft);

    // Pre-submit confirmation sees 1 answered, 29 unanswered (starting at index 1 = Question 2)
    let unanswered = getUnansweredIndices(draft.questions, draft.selections);
    expect(unanswered).toHaveLength(29);
    expect(unanswered[0]).toBe(1);

    // Navigate back to Q1 and change answer to correct answer, then answer remaining questions
    draft.currentIndex = 0;
    draft.selections[q1.id] = q1.answer;
    draft.selections[q2.id] = q2.answer;
    draft.questions.slice(2).forEach((q) => {
      draft.selections[q.id] = q.answer;
    });
    saveA1FinalExamDraft(draft);

    const reloaded = loadA1FinalExamDraft()!;
    unanswered = getUnansweredIndices(reloaded.questions, reloaded.selections);
    expect(unanswered).toEqual([]);
    const evalRes = evaluateExamAttempt({
      attemptId: reloaded.attemptId,
      moduleId: 'final-exam',
      questions: reloaded.questions,
      selections: reloaded.selections,
      maxIncorrect: 9,
    });
    expect(evalRes.correct).toBe(30);
    expect(evalRes.passed).toBe(true);
  });

  it('5 & 6. enforces 70% passing threshold (21/30 passes, 20/30 fails at 66.7%) and builds wrong-answer explanations', () => {
    const questions = buildA1FinalExam(makeSeededRng(404));

    const boundaryPassSel: Record<string, number> = {};
    questions.forEach((q, idx) => {
      boundaryPassSel[q.id] = idx < 21 ? q.answer : (q.answer + 1) % q.options.length;
    });
    const passResult = evaluateExamAttempt({
      attemptId: 'pass-21',
      moduleId: 'final-exam',
      questions,
      selections: boundaryPassSel,
      maxIncorrect: 9,
    });
    expect(passResult.passed).toBe(true);
    expect(passResult.exactPercentage).toBe(70);
    expect(formatExamPercentage(passResult.exactPercentage)).toBe('70');

    const boundaryFailSel: Record<string, number> = {};
    questions.forEach((q, idx) => {
      boundaryFailSel[q.id] = idx < 20 ? q.answer : (q.answer + 1) % q.options.length;
    });
    const failResult = evaluateExamAttempt({
      attemptId: 'fail-20',
      moduleId: 'final-exam',
      questions,
      selections: boundaryFailSel,
      maxIncorrect: 9,
    });
    expect(failResult.passed).toBe(false);
    expect(failResult.correct).toBe(20);
    expect(failResult.wrongCount).toBe(10);
    expect(failResult.unanswered).toBe(0);
    expect(failResult.exactPercentage).toBe(66.7);

    const wrongRec = failResult.breakdown.find((r) => r.answered && !r.correct)!;
    const wrongExplainEn = buildReviewExplanation(wrongRec, 'en', wrongRec.selectedText, wrongRec.correctText);
    expect(wrongExplainEn).toContain(wrongRec.selectedText);
    expect(wrongExplainEn).toContain(wrongRec.correctText);
    expect(BENGALI_REGEX.test(wrongExplainEn)).toBe(false);
  });

  it('7. retaking creates a fresh randomized 30-question attempt while preserving prior history', () => {
    let s = completeA1Modules1To10(initialState(), today);
    const attempt1 = createFreshA1FinalExamDraft(makeSeededRng(11));

    // Submit failing attempt 1
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: attempt1.attemptId,
      moduleId: 'final-exam',
      level: 'A1',
      total: 30,
      correct: 15,
      incorrect: 15,
      maxIncorrect: 9,
      today,
    });
    clearA1FinalExamDraft();

    // Start retake draft with fresh RNG
    const attempt2 = createFreshA1FinalExamDraft(makeSeededRng(77));
    expect(attempt2.attemptId).not.toBe(attempt1.attemptId);
    expect(attempt2.currentIndex).toBe(0);
    expect(attempt2.selections).toEqual({});
    expect(attempt2.questions).toHaveLength(30);
    expect(attempt2.questions.map((q) => q.id)).not.toEqual(attempt1.questions.map((q) => q.id));

    const modProg = getAcademyModuleProgress(s.academy, 'final-exam', 'A1');
    expect(modProg.attempts).toBe(1);
    expect(modProg.failedAttempts).toBe(1);
    expect(modProg.history).toHaveLength(1);
  });

  it('8. option randomization always preserves exact answer mapping and localizedOptions alignment', () => {
    for (const q of A1_FINAL_EXAM_BANK) {
      const canonicalAnswer = q.options[q.answer];
      const canonicalBn = resolveExamOptions(q, 'bn')[q.answer];
      const canonicalEn = resolveExamOptions(q, 'en')[q.answer];

      const shuffled = randomizeQuestionOptions(q, makeSeededRng(999));
      expect(shuffled.options).toHaveLength(q.options.length);
      expect(shuffled.options[shuffled.answer]).toBe(canonicalAnswer);
      expect(resolveExamOptions(shuffled, 'bn')[shuffled.answer]).toBe(canonicalBn);
      expect(resolveExamOptions(shuffled, 'en')[shuffled.answer]).toBe(canonicalEn);
    }
  });

  it('9. persists and restores in-progress exam draft across refresh and rejects corrupt drafts safely', () => {
    const created = createFreshA1FinalExamDraft(makeSeededRng(505));
    const q3 = created.questions[2]!;
    created.currentIndex = 14;
    created.selections[q3.id] = q3.answer;
    expect(saveA1FinalExamDraft(created)).toBe(true);

    // Reloading from localStorage restores exact attemptId, 30 questions, selections, and currentIndex
    const restored = loadOrCreateA1FinalExamDraft();
    expect(restored.attemptId).toBe(created.attemptId);
    expect(restored.questions.map((q) => q.id)).toEqual(created.questions.map((q) => q.id));
    expect(restored.currentIndex).toBe(14);
    expect(restored.selections[q3.id]).toBe(q3.answer);

    // Corrupt draft falls back cleanly to null
    store.set(A1_FINAL_EXAM_DRAFT_KEY, '{"attemptId":"bad","questions":[1,2]}');
    expect(loadA1FinalExamDraft()).toBeNull();
  });

  it('10, 11 & 12. guards XP against retakes/failures and keeps A2 locked on fail, unlocking A2 only on valid pass', () => {
    let s = completeA1Modules1To10(initialState(), today);
    expect(isLevelUnlocked(s, 'A2')).toBe(false);

    // Fail final exam -> 0 XP awarded, A2 MUST stay locked
    const xpBeforeFail = s.xp;
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'final-fail-1',
      moduleId: 'final-exam',
      level: 'A1',
      total: 30,
      correct: 19,
      incorrect: 11,
      maxIncorrect: 9,
      today,
    });
    expect(s.xp).toBe(xpBeforeFail);
    expect(isAcademyModuleCompleted(s.academy, 'final-exam', 'A1')).toBe(false);
    expect(isLevelUnlocked(s, 'A2')).toBe(false);

    // Second fail attempt -> still 0 XP, A2 still locked
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'final-fail-2',
      moduleId: 'final-exam',
      level: 'A1',
      total: 30,
      correct: 20,
      incorrect: 10,
      maxIncorrect: 9,
      today,
    });
    expect(s.xp).toBe(xpBeforeFail);
    expect(isLevelUnlocked(s, 'A2')).toBe(false);

    // Pass final exam (25/30) -> awards XP once and unlocks A2!
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'final-pass-1',
      moduleId: 'final-exam',
      level: 'A1',
      total: 30,
      correct: 25,
      incorrect: 5,
      maxIncorrect: 9,
      today,
    });
    const xpAfterFirstPass = s.xp;
    expect(xpAfterFirstPass).toBe(xpBeforeFail + 25 * XP.correctAnswer + XP.academyModuleComplete);
    expect(isAcademyModuleCompleted(s.academy, 'final-exam', 'A1')).toBe(true);
    expect(isLevelUnlocked(s, 'A2')).toBe(true);

    // Retake passing attempt (30/30) or duplicate attemptId -> ZERO additional XP
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'final-pass-1',
      moduleId: 'final-exam',
      level: 'A1',
      total: 30,
      correct: 30,
      incorrect: 0,
      maxIncorrect: 9,
      today,
    });
    expect(s.xp).toBe(xpAfterFirstPass);

    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'final-retake-2',
      moduleId: 'final-exam',
      level: 'A1',
      total: 30,
      correct: 30,
      incorrect: 0,
      maxIncorrect: 9,
      today,
    });
    expect(s.xp).toBe(xpAfterFirstPass);
  });

  it('renders active exam question screen with zero immediate check/answers and strict EN vs BN isolation', () => {
    const unlockedState = completeA1Modules1To10(initialState(), today);
    saveProgress(reducer(unlockedState, { type: 'setExplainLang', lang: 'en' }));

    const enHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(FinalExamModuleScreen)),
      ),
    );
    expect(enHtml).toContain('Question 1 of 30');
    expect(enHtml).toContain('Answered: 0/30');
    expect(enHtml).toContain('Previous');
    expect(enHtml).toContain('Next');
    expect(enHtml).not.toContain('>Check<');
    expect(enHtml).not.toContain('Correct answer');
    expect(BENGALI_REGEX.test(enHtml)).toBe(false);

    // Last question (Q30) renders prominent "Review & Submit" button
    const draftAt30 = loadA1FinalExamDraft()!;
    saveA1FinalExamDraft({ ...draftAt30, currentIndex: 29 });

    const q30Html = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(A1FinalExamFlow)),
      ),
    );
    expect(q30Html).toContain('Question 30 of 30');
    expect(q30Html).toContain('Review &amp; Submit');
    expect(BENGALI_REGEX.test(q30Html)).toBe(false);

    // Switch to Bengali mode: renders BN labels cleanly
    saveProgress(reducer(unlockedState, { type: 'setExplainLang', lang: 'bn' }));
    const bnHtml = renderToStaticMarkup(
      createElement(
        ProgressProvider,
        null,
        createElement(RouterProvider, null, createElement(A1FinalExamFlow)),
      ),
    );
    expect(bnHtml).toContain('প্রশ্ন 30 / 30');
    expect(bnHtml).toContain('পর্যালোচনা ও জমা দিন');
  });
});
