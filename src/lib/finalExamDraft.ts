import { buildA1FinalExam } from '../content/academy/a1FinalExam';
import { buildA2FinalExam, type A2FinalExamQuestion } from '../content/academy/a2FinalExam';
import type { AcademyExamQuestion } from '../content/academy/types';
import type { ExplainLang } from '../content/types';
import { createExamAttemptId, type ExamAnswerRecord, type RandomFn } from './examEngine';
import { resolveTr } from './i18n';

export const A1_FINAL_EXAM_DRAFT_KEY = 'italianpro.a1_final_exam_draft.v1';
export const A1_FINAL_EXAM_PREVIEW_DRAFT_KEY = 'italianpro.a1_final_exam_draft_preview.v1';

export const A2_FINAL_EXAM_DRAFT_KEY = 'italianpro.a2_final_exam_draft.v1';
export const A2_FINAL_EXAM_PREVIEW_DRAFT_KEY = 'italianpro.a2_final_exam_draft_preview.v1';

export interface A1FinalExamDraft {
  attemptId: string;
  questions: AcademyExamQuestion[];
  selections: Record<string, number>;
  currentIndex: number;
  updatedAt: number;
}

export interface A2FinalExamDraft {
  attemptId: string;
  questions: A2FinalExamQuestion[];
  selections: Record<string, number>;
  currentIndex: number;
  updatedAt: number;
}

function getDraftKey(previewMode = false): string {
  return previewMode ? A1_FINAL_EXAM_PREVIEW_DRAFT_KEY : A1_FINAL_EXAM_DRAFT_KEY;
}

function getA2DraftKey(previewMode = false): string {
  return previewMode ? A2_FINAL_EXAM_PREVIEW_DRAFT_KEY : A2_FINAL_EXAM_DRAFT_KEY;
}

function isValidQuestion(q: unknown): q is AcademyExamQuestion {
  if (!q || typeof q !== 'object') return false;
  const item = q as Partial<AcademyExamQuestion>;
  return (
    typeof item.id === 'string' &&
    item.id.length > 0 &&
    Array.isArray(item.options) &&
    item.options.length >= 2 &&
    typeof item.answer === 'number' &&
    Number.isInteger(item.answer) &&
    item.answer >= 0 &&
    item.answer < item.options.length &&
    Boolean(item.prompt) &&
    typeof item.prompt === 'object' &&
    typeof item.prompt.en === 'string' &&
    typeof item.prompt.bn === 'string' &&
    Boolean(item.explanation) &&
    typeof item.explanation === 'object'
  );
}

function sanitizeSelections(
  questions: readonly AcademyExamQuestion[],
  rawSelections: unknown,
): Record<string, number> {
  const validIds = new Map(questions.map((q) => [q.id, q.options.length]));
  const cleanSelections: Record<string, number> = {};
  if (rawSelections && typeof rawSelections === 'object') {
    for (const [qId, optIdx] of Object.entries(rawSelections)) {
      const optionCount = validIds.get(qId);
      if (
        optionCount !== undefined &&
        typeof optIdx === 'number' &&
        Number.isInteger(optIdx) &&
        optIdx >= 0 &&
        optIdx < optionCount
      ) {
        cleanSelections[qId] = optIdx;
      }
    }
  }
  return cleanSelections;
}

/** Loads a validated in-progress A1 Final Exam draft from localStorage, returning null if absent or invalid. */
export function loadA1FinalExamDraft(previewMode = false): A1FinalExamDraft | null {
  try {
    const raw = localStorage.getItem(getDraftKey(previewMode));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<A1FinalExamDraft>;
    if (
      !parsed ||
      typeof parsed.attemptId !== 'string' ||
      !parsed.attemptId ||
      !Array.isArray(parsed.questions) ||
      parsed.questions.length !== 30 ||
      !parsed.questions.every(isValidQuestion)
    ) {
      return null;
    }
    const questions = parsed.questions;
    const cleanSelections = sanitizeSelections(questions, parsed.selections);
    const rawIndex = typeof parsed.currentIndex === 'number' && Number.isInteger(parsed.currentIndex) ? parsed.currentIndex : 0;
    const currentIndex = Math.min(questions.length - 1, Math.max(0, rawIndex));
    const updatedAt = typeof parsed.updatedAt === 'number' && Number.isFinite(parsed.updatedAt) ? parsed.updatedAt : Date.now();
    return {
      attemptId: parsed.attemptId,
      questions,
      selections: cleanSelections,
      currentIndex,
      updatedAt,
    };
  } catch {
    return null;
  }
}

export function saveA1FinalExamDraft(draft: A1FinalExamDraft, previewMode = false): boolean {
  try {
    localStorage.setItem(getDraftKey(previewMode), JSON.stringify(draft));
    return true;
  } catch {
    return false;
  }
}

export function clearA1FinalExamDraft(previewMode = false): void {
  try {
    localStorage.removeItem(getDraftKey(previewMode));
  } catch {
    // Ignore storage removal failures in constrained WebViews.
  }
}

/** Creates a brand-new 30-question randomized A1 Final Exam attempt and persists it as the active draft. */
export function createFreshA1FinalExamDraft(rng: RandomFn = Math.random, previewMode = false): A1FinalExamDraft {
  const draft: A1FinalExamDraft = {
    attemptId: createExamAttemptId('final-exam'),
    questions: buildA1FinalExam(rng),
    selections: {},
    currentIndex: 0,
    updatedAt: Date.now(),
  };
  saveA1FinalExamDraft(draft, previewMode);
  return draft;
}

/** Loads an existing valid draft or starts a fresh 30-question attempt if none exists. */
export function loadOrCreateA1FinalExamDraft(rng: RandomFn = Math.random, previewMode = false): A1FinalExamDraft {
  return loadA1FinalExamDraft(previewMode) ?? createFreshA1FinalExamDraft(rng, previewMode);
}

/** Loads a validated in-progress 40-question A2 Final Exam draft from localStorage, returning null if absent or invalid. */
export function loadA2FinalExamDraft(previewMode = false): A2FinalExamDraft | null {
  try {
    const raw = localStorage.getItem(getA2DraftKey(previewMode));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<A2FinalExamDraft>;
    if (
      !parsed ||
      typeof parsed.attemptId !== 'string' ||
      !parsed.attemptId ||
      !Array.isArray(parsed.questions) ||
      parsed.questions.length !== 40 ||
      !parsed.questions.every(isValidQuestion)
    ) {
      return null;
    }
    const questions = parsed.questions;
    const cleanSelections = sanitizeSelections(questions, parsed.selections);
    const rawIndex = typeof parsed.currentIndex === 'number' && Number.isInteger(parsed.currentIndex) ? parsed.currentIndex : 0;
    const currentIndex = Math.min(questions.length - 1, Math.max(0, rawIndex));
    const updatedAt = typeof parsed.updatedAt === 'number' && Number.isFinite(parsed.updatedAt) ? parsed.updatedAt : Date.now();
    return {
      attemptId: parsed.attemptId,
      questions,
      selections: cleanSelections,
      currentIndex,
      updatedAt,
    };
  } catch {
    return null;
  }
}

export function saveA2FinalExamDraft(draft: A2FinalExamDraft, previewMode = false): boolean {
  try {
    localStorage.setItem(getA2DraftKey(previewMode), JSON.stringify(draft));
    return true;
  } catch {
    return false;
  }
}

export function clearA2FinalExamDraft(previewMode = false): void {
  try {
    localStorage.removeItem(getA2DraftKey(previewMode));
  } catch {
    // Ignore storage removal failures in constrained WebViews.
  }
}

/** Creates a brand-new 40-question randomized A2 Final Exam attempt and persists it as the active draft. */
export function createFreshA2FinalExamDraft(rng: RandomFn = Math.random, previewMode = false): A2FinalExamDraft {
  const draft: A2FinalExamDraft = {
    attemptId: createExamAttemptId('a2-final-exam'),
    questions: buildA2FinalExam(rng),
    selections: {},
    currentIndex: 0,
    updatedAt: Date.now(),
  };
  saveA2FinalExamDraft(draft, previewMode);
  return draft;
}

/** Loads an existing valid 40-question A2 draft or starts a fresh attempt if none exists. */
export function loadOrCreateA2FinalExamDraft(rng: RandomFn = Math.random, previewMode = false): A2FinalExamDraft {
  return loadA2FinalExamDraft(previewMode) ?? createFreshA2FinalExamDraft(rng, previewMode);
}

/** Returns 0-based indices of questions in the current attempt that do not yet have a valid selection. */
export function getUnansweredIndices(
  questions: readonly AcademyExamQuestion[],
  selections: Record<string, number>,
): number[] {
  const indices: number[] = [];
  questions.forEach((q, idx) => {
    const sel = selections[q.id];
    if (typeof sel !== 'number' || !Number.isInteger(sel) || sel < 0 || sel >= q.options.length) {
      indices.push(idx);
    }
  });
  return indices;
}

/**
 * Formats a detailed, single-language explanation for the post-exam Answer Review:
 * clarifies why a wrong option does not apply AND why the canonical option is correct.
 */
export function buildReviewExplanation(
  record: ExamAnswerRecord,
  lang: ExplainLang,
  selectedOptText: string,
  correctOptText: string,
): string {
  const ruleExplanation = resolveTr(lang, record.question.explanation);
  if (record.correct) {
    return ruleExplanation;
  }
  if (!record.answered) {
    if (lang === 'bn') {
      return `কোনো উত্তর নির্বাচন করা হয়নি। সঠিক উত্তর «${correctOptText}» হওয়ার কারণ: ${ruleExplanation}`;
    }
    if (lang === 'it') {
      return `Nessuna risposta selezionata. Perché «${correctOptText}» è corretta: ${ruleExplanation}`;
    }
    return `No answer was selected for this question. Why "${correctOptText}" is correct: ${ruleExplanation}`;
  }
  if (lang === 'bn') {
    return `আপনার নির্বাচিত উত্তর «${selectedOptText}» এই প্রাসঙ্গিক ব্যাকরণ বা অর্থের সাথে মেলে না। সঠিক উত্তর «${correctOptText}» হওয়ার কারণ: ${ruleExplanation}`;
  }
  if (lang === 'it') {
    return `La risposta «${selectedOptText}» non soddisfa la regola richiesta qui. Perché «${correctOptText}» è corretta: ${ruleExplanation}`;
  }
  return `Your selected option "${selectedOptText}" does not satisfy the rule or context tested here. Why "${correctOptText}" is correct: ${ruleExplanation}`;
}
