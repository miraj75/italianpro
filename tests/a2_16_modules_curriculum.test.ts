import { beforeEach, describe, expect, it } from 'vitest';
import {
  A2_FINAL_EXAM_DISTRIBUTION,
  A2_FINAL_EXAM_POOL,
  buildA2FinalExam,
  computeA2CategoryPerformance,
} from '../src/content/academy/a2FinalExam';
import { A2_ACADEMY_MODULES } from '../src/content/academy/curriculumA2B1B2';
import { A2_ACADEMY_VERBS } from '../src/content/academy/levelVerbs';
import {
  A2_COMMUNICATION_MODULES_DATA,
  getAllA2CommunicationDialoguesCount,
} from '../src/content/a2/communicationModules';
import { SENTENCES, WORDS, topicsOf } from '../src/content/bank';
import { levelLessons } from '../src/content/courses';
import { GRAMMAR_TOPICS } from '../src/content/grammar';
import { GRAMMAR_DETAILS_A2 } from '../src/content/grammarDetailsA2';
import {
  loadLevelListening,
  loadLevelReading,
  loadLevelSpeaking,
  loadLevelWriting,
} from '../src/content/registry';
import { evaluateExamAttempt, generateAcademyModuleExamAsync } from '../src/lib/examEngine';
import { normalizeAcademyProgress } from '../src/state/academyProgress';
import { initialState, isLevelUnlocked, reducer } from '../src/state/progress';

const store = new Map<string, string>();
const mockLocalStorage = {
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

function makeSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

describe('ItalianPro — Complete A2 16-Module Curriculum & Content Verification', () => {
  beforeEach(() => {
    store.clear();
    Object.defineProperty(globalThis, 'localStorage', {
      value: mockLocalStorage,
      configurable: true,
      writable: true,
    });
  });

  it('implements the exact 16-module A2 structure organized into 4 sections', () => {
    expect(A2_ACADEMY_MODULES).toHaveLength(16);
    expect(
      A2_ACADEMY_MODULES.map((m) => [m.order, m.id, m.kind, m.sectionLabel?.id]),
    ).toEqual([
      [1, 'a2-tenses', 'grammar', 'a2-grammar-language'],
      [2, 'a2-verbs', 'verbs', 'a2-grammar-language'],
      [3, 'a2-pronouns-prep', 'grammar', 'a2-grammar-language'],
      [4, 'a2-modifiers', 'grammar', 'a2-grammar-language'],
      [5, 'a2-grammar-expansion', 'grammar', 'a2-grammar-language'],
      [6, 'a2-vocab', 'vocabulary', 'a2-vocab-communication'],
      [7, 'a2-sentences', 'sentences', 'a2-vocab-communication'],
      [8, 'a2-housing', 'communication', 'a2-vocab-communication'],
      [9, 'a2-health', 'communication', 'a2-vocab-communication'],
      [10, 'a2-travel', 'communication', 'a2-vocab-communication'],
      [11, 'a2-work-social', 'communication', 'a2-vocab-communication'],
      [12, 'a2-functional-comm', 'communication', 'a2-vocab-communication'],
      [13, 'a2-reading', 'reading', 'a2-four-skills'],
      [14, 'a2-listening', 'listening', 'a2-four-skills'],
      [15, 'a2-writing-speaking', 'writing-speaking', 'a2-four-skills'],
      [16, 'a2-final-exam', 'final-exam', 'a2-assessment'],
    ]);
  });

  it('meets or exceeds A2 grammar depth targets (300+ examples, 150+ exercises, 30+/120+/60+ in Module 1, 50+ verbs)', () => {
    const a2Topics = GRAMMAR_TOPICS.filter((g) => g.level === 'A2');
    expect(a2Topics.length).toBeGreaterThanOrEqual(65);
    expect(new Set(a2Topics.map((g) => g.id)).size).toBe(a2Topics.length);

    let totalExamples = 0;
    let totalExercises = 0;
    for (const topic of a2Topics) {
      const det = GRAMMAR_DETAILS_A2[topic.id];
      expect(det).toBeDefined();
      totalExamples += det!.examples.length;
      totalExercises += det!.exercises.length;
      for (const ex of det!.exercises) {
        expect(new Set(ex.options).size).toBe(ex.options.length);
        expect(ex.answer).toBeGreaterThanOrEqual(0);
        expect(ex.answer).toBeLessThan(ex.options.length);
      }
    }
    expect(totalExamples).toBeGreaterThanOrEqual(300);
    expect(totalExercises).toBeGreaterThanOrEqual(150);

    // Module 1: 30+ explanations, 120+ examples, 60+ exercises
    const mod1 = A2_ACADEMY_MODULES.find((m) => m.id === 'a2-tenses')!;
    const mod1Ids = mod1.grammarIds!;
    expect(mod1Ids.length).toBeGreaterThanOrEqual(30);
    const mod1Examples = mod1Ids.reduce((s, id) => s + (GRAMMAR_DETAILS_A2[id]?.examples.length ?? 0), 0);
    const mod1Exercises = mod1Ids.reduce((s, id) => s + (GRAMMAR_DETAILS_A2[id]?.exercises.length ?? 0), 0);
    expect(mod1Examples).toBeGreaterThanOrEqual(120);
    expect(mod1Exercises).toBeGreaterThanOrEqual(60);

    // Module 2: 50+ verbs with pronunciation & conjugations
    expect(A2_ACADEMY_VERBS.length).toBeGreaterThanOrEqual(50);
    for (const v of A2_ACADEMY_VERBS) {
      expect(Boolean(v.pronunciation && v.pronunciation.trim().length > 0)).toBe(true);
      expect(v.conjugations.length).toBeGreaterThanOrEqual(3);
      expect(v.examples.length).toBeGreaterThanOrEqual(2);
    }
  });

  it('provides 20 A2 vocabulary topics (750+ words), 370 sentences, 50+ dialogues, 32 reading, 42 listening, 20 writing & 20 speaking', async () => {
    const a2Topics = topicsOf('A2');
    expect(a2Topics).toHaveLength(20);
    expect(WORDS.A2.length).toBeGreaterThanOrEqual(750);
    expect(new Set(WORDS.A2.map((w) => w.key)).size).toBe(WORDS.A2.length);
    expect(SENTENCES.A2.length).toBe(370);

    // 50+ A2 dialogues across the 5 communication modules + A2 unit dialogues
    const totalA2Dialogues = getAllA2CommunicationDialoguesCount() + levelLessons('A2').length;
    expect(totalA2Dialogues).toBeGreaterThanOrEqual(50);

    for (const comm of Object.values(A2_COMMUNICATION_MODULES_DATA)) {
      expect(comm.expressions.length).toBeGreaterThanOrEqual(10);
      expect(comm.dialogues.length).toBeGreaterThanOrEqual(8);
      expect(comm.functionalFrames.length).toBeGreaterThanOrEqual(2);
      expect(comm.questions.length).toBeGreaterThanOrEqual(10);
      for (const q of comm.questions) {
        expect(new Set(q.options).size).toBe(q.options.length);
      }
    }

    const [reading, listening, writing, speaking] = await Promise.all([
      loadLevelReading('A2'),
      loadLevelListening('A2'),
      loadLevelWriting('A2'),
      loadLevelSpeaking('A2'),
    ]);
    expect(reading.length).toBeGreaterThanOrEqual(32);
    expect(listening.length).toBeGreaterThanOrEqual(42);
    expect(writing.length).toBeGreaterThanOrEqual(20);
    expect(speaking.length).toBeGreaterThanOrEqual(20);
  });

  it('builds randomized exams for every one of the 16 A2 modules and draws 40 stratified questions for a2-final-exam', async () => {
    for (let i = 0; i < A2_ACADEMY_MODULES.length; i++) {
      const mod = A2_ACADEMY_MODULES[i]!;
      const qs = await generateAcademyModuleExamAsync(mod.id, makeSeededRng(2026 + i), 'A2');
      expect(qs).toHaveLength(mod.examQuestionCount);
      expect(new Set(qs.map((q) => q.id)).size).toBe(qs.length);
      for (const q of qs) {
        expect(new Set(q.options).size).toBe(q.options.length);
      }
    }

    // Verify 100+ final exam bank & stratified 40-question distribution
    expect(A2_FINAL_EXAM_POOL.length).toBeGreaterThanOrEqual(100);
    const final40 = buildA2FinalExam(makeSeededRng(777));
    expect(final40).toHaveLength(40);
    const counts = final40.reduce<Record<string, number>>((acc, q) => {
      acc[q.category] = (acc[q.category] ?? 0) + 1;
      return acc;
    }, {});
    expect(counts).toEqual(A2_FINAL_EXAM_DISTRIBUTION);

    // Verify weak-topic analysis flags < 70% categories
    const selections: Record<string, number> = {};
    for (const q of final40) {
      selections[q.id] = q.category === 'grammar' ? (q.answer + 1) % 4 : q.answer;
    }
    const evaluated = evaluateExamAttempt({
      attemptId: 'weak-check',
      moduleId: 'a2-final-exam',
      questions: final40,
      selections,
      maxIncorrect: 12,
    });
    expect(evaluated.correct).toBe(28);
    expect(evaluated.passed).toBe(true);
    const perf = computeA2CategoryPerformance(evaluated.breakdown);
    const gramPerf = perf.find((p) => p.category === 'grammar')!;
    expect(gramPerf.percentage).toBe(0);
    expect(gramPerf.isWeak).toBe(true);
    expect(perf.find((p) => p.category === 'vocabulary')!.isWeak).toBe(false);
  });

  it('enforces the 70% (28/40) pass threshold on a2-final-exam to unlock B1', () => {
    // Complete A1 using lessons so A2 is unlocked cleanly
    let s = {
      ...initialState(),
      lessons: Object.fromEntries(
        levelLessons('A1').map((l) => [l.id, { bestScore: 1, completed: true, viewed: ['phrases', 'grammar', 'dialogue', 'quiz'] }]),
      ),
    };
    expect(isLevelUnlocked(s, 'A2')).toBe(true);
    expect(isLevelUnlocked(s, 'B1')).toBe(false);

    // Complete A2 modules 1..15
    for (let i = 0; i < 15; i++) {
      const mod = A2_ACADEMY_MODULES[i]!;
      for (const itemId of mod.requiredItemIds) {
        s = reducer(s, { type: 'studyAcademyItem', moduleId: mod.id, level: 'A2', itemId });
      }
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: `a2-pass-${mod.id}`,
        moduleId: mod.id,
        level: 'A2',
        total: 10,
        correct: 8,
        incorrect: 2,
        maxIncorrect: 3,
        today: '2026-11-17',
      });
    }

    // 27/40 (67.5%) must fail and keep B1 locked
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'a2-final-fail-27',
      moduleId: 'a2-final-exam',
      level: 'A2',
      total: 40,
      correct: 27,
      incorrect: 13,
      maxIncorrect: 12,
      today: '2026-11-17',
    });
    expect(isLevelUnlocked(s, 'B1')).toBe(false);

    // 28/40 (70.0%) must pass and unlock B1
    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: 'a2-final-pass-28',
      moduleId: 'a2-final-exam',
      level: 'A2',
      total: 40,
      correct: 28,
      incorrect: 12,
      maxIncorrect: 12,
      today: '2026-11-17',
    });
    expect(isLevelUnlocked(s, 'B1')).toBe(true);
  });

  it('migrates legacy 11-module A2 saves cleanly without losing progress', () => {
    const migrated = normalizeAcademyProgress({
      modules: {},
      levels: {
        A2: {
          'a2-tenses': {
            studiedItems: ['passato-prossimo', 'imperativo', 'condizionale'],
            completed: true,
            bestScore: 0.9,
            attempts: 1,
            failedAttempts: 0,
            completedAttemptIds: ['old-t'],
            history: [],
          },
          'a2-vocab': {
            studiedItems: ['topic:A2:Travel & airports', 'topic:A2:Health & medical'],
            completed: false,
            bestScore: 0,
            attempts: 0,
            failedAttempts: 0,
            completedAttemptIds: [],
            history: [],
          },
          'a2-writing': {
            studiedItems: ['wr-a2-01', 'wr-a2-02'],
            completed: true,
            bestScore: 0.8,
            attempts: 1,
            failedAttempts: 0,
            completedAttemptIds: ['old-w'],
            history: [],
          },
          'a2-speaking': {
            studiedItems: ['sp-a2-01'],
            completed: true,
            bestScore: 0.9,
            attempts: 1,
            failedAttempts: 0,
            completedAttemptIds: ['old-s'],
            history: [],
          },
        },
      },
    });

    const a2 = migrated.levels!.A2!;
    expect(a2['a2-writing-speaking']?.completed).toBe(true);
    expect(a2['a2-writing-speaking']?.bestScore).toBe(0.9);
    expect(a2['a2-writing-speaking']?.studiedItems).toEqual(['wr-a2-01', 'wr-a2-02', 'sp-a2-01']);
    expect(a2['a2-grammar-expansion']?.studiedItems).toEqual(expect.arrayContaining(['imperativo', 'condizionale']));
    expect(a2['a2-vocab']?.studiedItems).toEqual([
      'topic:A2:Travel & Transport',
      'topic:A2:Health & Body',
    ]);
  });
});
