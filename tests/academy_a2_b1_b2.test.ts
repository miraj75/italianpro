import { beforeEach, describe, expect, it } from 'vitest';
import {
  A2_ACADEMY_MODULES,
  B1_ACADEMY_MODULES,
  B2_ACADEMY_MODULES,
} from '../src/content/academy/curriculumA2B1B2';
import { getAcademyModules, isFinalExamModuleId } from '../src/content/academy/curriculum';
import {
  A2_ACADEMY_VERBS,
  B1_ACADEMY_VERBS,
  B2_ACADEMY_VERBS,
  B2_COLLOCATIONS,
} from '../src/content/academy/levelVerbs';
import { GRAMMAR_TOPICS } from '../src/content/grammar';
import { GRAMMAR_DETAILS_A2 } from '../src/content/grammarDetailsA2';
import { GRAMMAR_DETAILS_B1 } from '../src/content/grammarDetailsB1';
import { GRAMMAR_DETAILS_B2 } from '../src/content/grammarDetailsB2';
import { PHRASES, SENTENCES, WORDS } from '../src/content/bank';
import {
  loadLevelListening,
  loadLevelReading,
  loadLevelSpeaking,
  loadLevelWriting,
} from '../src/content/registry';
import { generateAcademyModuleExamAsync } from '../src/lib/examEngine';
import {
  academyStudyStats,
  getAcademyModuleProgress,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
  overallAcademyProgress,
} from '../src/state/academyProgress';
import { buildLevelLearningPathNodes, getCourseOverview } from '../src/lib/courseOverview';
import {
  initialState,
  reducer,
  type ProgressState,
} from '../src/state/progress';
import { loadProgress, saveProgress } from '../src/state/storage';

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

describe('A2, B1 & B2 Structured Learning Academies', () => {
  const today = '2026-11-16';

  beforeEach(() => {
    store.clear();
    Object.defineProperty(globalThis, 'localStorage', {
      value: mockLocalStorage,
      configurable: true,
      writable: true,
    });
  });

  describe('1. Architecture, Scope Separation & Verified Content Alignment', () => {
    it('defines 16 A2, 11 B1, and 12 B2 implemented modules with sequential ordering and final exams', () => {
      expect(A2_ACADEMY_MODULES).toHaveLength(16);
      expect(B1_ACADEMY_MODULES).toHaveLength(11);
      expect(B2_ACADEMY_MODULES).toHaveLength(12);

      for (const level of ['A2', 'B1', 'B2'] as const) {
        const mods = getAcademyModules(level);
        expect(mods.every((m) => m.implemented)).toBe(true);
        expect(mods.map((m) => m.order)).toEqual(mods.map((_, idx) => idx + 1));
        expect(isFinalExamModuleId(mods[mods.length - 1]!.id)).toBe(true);

        // Must never duplicate completed A1 basics
        const titles = mods.map((m) => m.title.toLowerCase());
        expect(titles.some((t) => t.includes('alphabet'))).toBe(false);
        expect(titles.some((t) => t.includes('0–100') || t.includes('numbers'))).toBe(false);
        expect(titles.some((t) => t === 'articles')).toBe(false);
      }
    });

    it('provides substantial level-appropriate verb and collocation expansions', () => {
      expect(A2_ACADEMY_VERBS.length).toBeGreaterThanOrEqual(50);
      expect(B1_ACADEMY_VERBS).toHaveLength(14);
      expect(B2_ACADEMY_VERBS).toHaveLength(14);
      expect(B2_COLLOCATIONS).toHaveLength(16);

      for (const list of [A2_ACADEMY_VERBS, B1_ACADEMY_VERBS, B2_ACADEMY_VERBS]) {
        for (const v of list) {
          expect(v.conjugations.length).toBeGreaterThanOrEqual(2);
          for (const t of v.conjugations) {
            expect(t.forms).toHaveLength(6);
          }
        }
      }
    });

    it('maps every grammar module to real grammar topics & details and every skill module to loaded bundles', async () => {
      const detailsByLevel = {
        A2: GRAMMAR_DETAILS_A2,
        B1: GRAMMAR_DETAILS_B1,
        B2: GRAMMAR_DETAILS_B2,
      };

      for (const level of ['A2', 'B1', 'B2'] as const) {
        const mods = getAcademyModules(level);
        const grammarSet = new Set(GRAMMAR_TOPICS.filter((g) => g.level === level).map((g) => g.id));
        const detailMap = detailsByLevel[level];
        const reading = await loadLevelReading(level);
        const listening = await loadLevelListening(level);
        const writing = await loadLevelWriting(level);
        const speaking = await loadLevelSpeaking(level);

        const readIds = new Set(reading.map((r) => r.id));
        const listenIds = new Set(listening.map((l) => l.id));
        const writeIds = new Set(writing.map((w) => w.id));
        const speakIds = new Set(speaking.map((s) => s.id));

        for (const mod of mods) {
          if (mod.grammarIds) {
            expect(mod.grammarIds.length).toBeGreaterThan(0);
            for (const gid of mod.grammarIds) {
              expect(grammarSet.has(gid)).toBe(true);
              expect(Boolean(detailMap[gid])).toBe(true);
            }
          }
          if (mod.kind === 'reading') {
            expect(mod.requiredItemIds.every((id) => readIds.has(id))).toBe(true);
          }
          if (mod.kind === 'listening') {
            expect(mod.requiredItemIds.every((id) => listenIds.has(id))).toBe(true);
          }
          if (mod.kind === 'writing') {
            expect(mod.requiredItemIds.every((id) => writeIds.has(id))).toBe(true);
          }
          if (mod.kind === 'speaking') {
            expect(mod.requiredItemIds.every((id) => speakIds.has(id))).toBe(true);
          }
          if (mod.kind === 'writing-speaking') {
            expect(mod.requiredItemIds.every((id) => writeIds.has(id) || speakIds.has(id))).toBe(true);
          }
        }
      }

      expect(WORDS.A2.length).toBeGreaterThanOrEqual(750);
      expect(WORDS.B1.length).toBeGreaterThanOrEqual(700);
      expect(WORDS.B2.length).toBeGreaterThanOrEqual(1000);
      expect(SENTENCES.A2.length).toBeGreaterThanOrEqual(350);
      expect(SENTENCES.B1.length).toBeGreaterThanOrEqual(500);
      expect(SENTENCES.B2.length).toBeGreaterThanOrEqual(700);
      expect(PHRASES.length).toBeGreaterThanOrEqual(60);
    });
  });

  describe('2. Randomized Exam Generation Across Every A2, B1 & B2 Module', () => {
    it('builds valid non-duplicate 10-Q section exams and 30-Q final exams for every module in A2, B1, and B2', async () => {
      for (const level of ['A2', 'B1', 'B2'] as const) {
        const mods = getAcademyModules(level);
        for (let idx = 0; idx < mods.length; idx++) {
          const mod = mods[idx]!;
          const questions = await generateAcademyModuleExamAsync(mod.id, makeSeededRng(1000 + idx), level);
          expect(questions).toHaveLength(mod.examQuestionCount);
          const ids = new Set(questions.map((q) => q.id));
          expect(ids.size).toBe(questions.length);

          for (const q of questions) {
            expect(q.options.length).toBeGreaterThanOrEqual(2);
            expect(q.answer).toBeGreaterThanOrEqual(0);
            expect(q.answer).toBeLessThan(q.options.length);
          }
        }
      }
    });
  });

  describe('3. Per-Level Sequential Locks, Isolation & Persistence', () => {
    it('isolates A1, A2, B1, and B2 module progress inside italianpro.progress.v1', () => {
      let s: ProgressState = initialState();

      // Module 1 of each level starts unlocked; Modules 2..N start locked
      for (const level of ['A1', 'A2', 'B1', 'B2'] as const) {
        const mods = getAcademyModules(level);
        expect(isAcademyModuleUnlocked(s.academy, mods[0]!.id, level)).toBe(true);
        for (let i = 1; i < mods.length; i++) {
          expect(isAcademyModuleUnlocked(s.academy, mods[i]!.id, level)).toBe(false);
        }
      }

      // Studying and passing A2 Module 1 unlocks A2 Module 2 WITHOUT changing A1, B1, or B2
      const a2Mod1 = A2_ACADEMY_MODULES[0]!;
      const a2Mod2 = A2_ACADEMY_MODULES[1]!;
      for (const itemId of a2Mod1.requiredItemIds) {
        s = reducer(s, { type: 'studyAcademyItem', moduleId: a2Mod1.id, level: 'A2', itemId });
      }
      expect(academyStudyStats(s.academy, a2Mod1.id, 'A2').readyForExam).toBe(true);

      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: 'a2-m1-pass',
        moduleId: a2Mod1.id,
        level: 'A2',
        total: 10,
        correct: 8,
        incorrect: 2,
        maxIncorrect: 3,
        today,
      });

      expect(isAcademyModuleCompleted(s.academy, a2Mod1.id, 'A2')).toBe(true);
      expect(isAcademyModuleUnlocked(s.academy, a2Mod2.id, 'A2')).toBe(true);
      expect(isAcademyModuleCompleted(s.academy, 'alphabet', 'A1')).toBe(false);
      expect(isAcademyModuleCompleted(s.academy, B1_ACADEMY_MODULES[0]!.id, 'B1')).toBe(false);
      expect(isAcademyModuleCompleted(s.academy, B2_ACADEMY_MODULES[0]!.id, 'B2')).toBe(false);

      // Overview for A2 reflects 1/16 and targets A2 Module 2
      const a2Overview = getCourseOverview(s, 'A2');
      expect(a2Overview.completedModules).toBe(1);
      expect(a2Overview.totalModules).toBe(16);
      expect(a2Overview.nextTitle).toBe(`2. ${a2Mod2.title}`);
      expect(a2Overview.continueRoute).toBe(a2Mod2.route);

      // Connected timeline nodes reflect completed -> current -> locked
      const a2Nodes = buildLevelLearningPathNodes(s, 'A2');
      expect(a2Nodes[0]?.status).toBe('completed');
      expect(a2Nodes[1]?.status).toBe('current');
      expect(a2Nodes[2]?.status).toBe('locked');
      expect(a2Nodes[15]?.status).toBe('locked');

      // Save & reload round-trip preserves nested academy.levels state
      expect(saveProgress(s)).toBe(true);
      const reloaded = loadProgress();
      expect(overallAcademyProgress(reloaded.academy, 'A2').completedCount).toBe(1);
      expect(isAcademyModuleUnlocked(reloaded.academy, a2Mod2.id, 'A2')).toBe(true);
    });

    it('blocks study, completion, and progress mutation on locked B1/B2 modules even in Developer Testing Mode', () => {
      let s = reducer(initialState(), { type: 'setShowAllLockedModules', enabled: true });

      // Locked module b1-verbs should ignore study & exam mutations
      s = reducer(s, { type: 'studyAcademyItem', moduleId: 'b1-verbs', level: 'B1', itemId: 'verb-b1-dovere' });
      expect(getAcademyModuleProgress(s.academy, 'b1-verbs', 'B1').studiedItems).toEqual([]);

      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: 'b1-locked-attempt',
        moduleId: 'b1-verbs',
        level: 'B1',
        total: 10,
        correct: 10,
        incorrect: 0,
        maxIncorrect: 3,
        today,
      });
      expect(isAcademyModuleCompleted(s.academy, 'b1-verbs', 'B1')).toBe(false);
      expect(getAcademyModuleProgress(s.academy, 'b1-verbs', 'B1').attempts).toBe(0);

      // Studying all required items + passing B2 module 1 completes it while keeping B2 Final Exam locked until modules 1..11 pass
      const b2First = B2_ACADEMY_MODULES[0]!;
      for (const itemId of b2First.requiredItemIds) {
        s = reducer(s, { type: 'studyAcademyItem', moduleId: b2First.id, level: 'B2', itemId });
      }
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: 'b2-m1-pass',
        moduleId: b2First.id,
        level: 'B2',
        total: 10,
        correct: 9,
        incorrect: 1,
        maxIncorrect: 3,
        today,
      });
      expect(isAcademyModuleCompleted(s.academy, b2First.id, 'B2')).toBe(true);
      expect(getAcademyModuleProgress(s.academy, b2First.id, 'B2').bestScore).toBe(0.9);
      expect(isAcademyModuleUnlocked(s.academy, 'b2-final-exam', 'B2')).toBe(false);
    });
  });
});
