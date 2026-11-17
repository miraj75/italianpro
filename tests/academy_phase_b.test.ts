import { describe, expect, it } from 'vitest';
import { A1_ACADEMY_MODULES } from '../src/content/academy/curriculum';
import { A1_ALPHABET_REQUIRED_IDS } from '../src/content/academy/a1Alphabet';
import { A1_NUMBERS_REQUIRED_IDS } from '../src/content/academy/a1Numbers';
import { A1_ARTICLES_REQUIRED_IDS } from '../src/content/academy/a1Articles';
import { A1_VOCAB_REQUIRED_IDS } from '../src/content/academy/a1Vocabulary';
import {
  A1_VERBS_DRILL_ITEMS,
  A1_VERBS_EXAM_POOL,
  A1_VERBS_LIST,
  A1_VERBS_REQUIRED_IDS,
  VERBS_THEORY_CONFIG,
} from '../src/content/academy/a1Verbs';
import {
  A1_ESSENTIAL_VERBS,
  A1_ESSENTIAL_VERBS_DRILL_ITEMS,
  A1_ESSENTIAL_VERBS_EXAM_POOL,
  A1_ESSENTIAL_VERBS_REQUIRED_IDS,
  ESSENTIAL_VERBS_THEORY_CONFIG,
} from '../src/content/academy/a1EssentialVerbs';
import {
  A1_ADJECTIVES_DRILL_ITEMS,
  A1_ADJECTIVES_EXAM_POOL,
  A1_ADJECTIVES_LIST,
  A1_ADJECTIVES_REQUIRED_IDS,
  ADJECTIVES_THEORY_CONFIG,
} from '../src/content/academy/a1Adjectives';
import {
  A1_ADVERBS_DRILL_ITEMS,
  A1_ADVERBS_EXAM_POOL,
  A1_ADVERBS_LIST,
  A1_ADVERBS_REQUIRED_IDS,
  ADVERBS_THEORY_CONFIG,
} from '../src/content/academy/a1Adverbs';
import {
  A1_PREPOSITIONS_DRILL_ITEMS,
  A1_PREPOSITIONS_EXAM_POOL,
  A1_PREPOSITIONS_LIST,
  A1_PREPOSITIONS_REQUIRED_IDS,
  PREPOSITIONS_THEORY_CONFIG,
} from '../src/content/academy/a1Prepositions';
import {
  A1_CONJUNCTIONS_DRILL_ITEMS,
  A1_CONJUNCTIONS_EXAM_POOL,
  A1_CONJUNCTIONS_LIST,
  A1_CONJUNCTIONS_REQUIRED_IDS,
  CONJUNCTIONS_THEORY_CONFIG,
} from '../src/content/academy/a1Conjunctions';
import {
  A1_FINAL_EXAM_BANK,
  buildA1FinalExam,
  type A1FinalExamTopic,
  type A1FinalQuestionType,
} from '../src/content/academy/a1FinalExam';
import { evaluateExamAttempt, generateAcademyModuleExam } from '../src/lib/examEngine';
import { initialState, reducer, type ProgressState } from '../src/state/progress';
import {
  getAcademyModuleProgress,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
} from '../src/state/academyProgress';
import type { AcademyExamQuestion, AcademyTheoryConfig } from '../src/content/academy/types';

const BENGALI_REGEX = /[\u0980-\u09FF]/;

function makeSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function assertValidExamPool(pool: readonly AcademyExamQuestion[], label: string) {
  const ids = new Set<string>();
  for (const q of pool) {
    expect(ids.has(q.id), `Duplicate ID ${q.id} in ${label}`).toBe(false);
    ids.add(q.id);
    expect(q.prompt.bn.trim().length, `Empty bn prompt in ${q.id}`).toBeGreaterThan(0);
    expect(q.prompt.en.trim().length, `Empty en prompt in ${q.id}`).toBeGreaterThan(0);
    expect(BENGALI_REGEX.test(q.prompt.en), `Bengali text leaked into en prompt in ${q.id}`).toBe(false);
    if (q.it) {
      expect(BENGALI_REGEX.test(q.it), `Bengali leaked into Italian cue in ${q.id}`).toBe(false);
    }
    expect(q.explanation.bn.trim().length).toBeGreaterThan(0);
    expect(q.explanation.en.trim().length).toBeGreaterThan(0);
    expect(BENGALI_REGEX.test(q.explanation.en), `Bengali leaked into en explanation in ${q.id}`).toBe(false);
    expect(q.options.length).toBe(4);
    expect(new Set(q.options).size, `Duplicate options in ${q.id}`).toBe(4);
    if (q.localizedOptions) {
      expect(q.localizedOptions.bn).toHaveLength(4);
      expect(q.localizedOptions.en).toHaveLength(4);
      for (const opt of q.localizedOptions.en) {
        expect(BENGALI_REGEX.test(opt), `Bengali leaked into en localizedOptions in ${q.id}`).toBe(false);
      }
    }
    expect(q.answer).toBeGreaterThanOrEqual(0);
    expect(q.answer).toBeLessThan(q.options.length);
  }
}

function assertCleanTheory(cfg: AcademyTheoryConfig) {
  expect(cfg.title.bn.trim().length).toBeGreaterThan(0);
  expect(cfg.title.en.trim().length).toBeGreaterThan(0);
  expect(BENGALI_REGEX.test(cfg.title.en)).toBe(false);
  expect(BENGALI_REGEX.test(cfg.subtitle.en)).toBe(false);
  expect(BENGALI_REGEX.test(cfg.intro.en)).toBe(false);
  for (const h of cfg.highlights) {
    expect(BENGALI_REGEX.test(h.caption.en)).toBe(false);
  }
  for (const sec of cfg.sections) {
    expect(BENGALI_REGEX.test(sec.heading.en)).toBe(false);
    expect(BENGALI_REGEX.test(sec.summary.en)).toBe(false);
    if (sec.table) {
      for (const h of sec.table.headers) {
        expect(BENGALI_REGEX.test(h.en)).toBe(false);
      }
      for (const row of sec.table.rows) {
        for (const c of row.cells) {
          if (typeof c === 'string') {
            expect(BENGALI_REGEX.test(c)).toBe(false);
          } else {
            expect(BENGALI_REGEX.test(c.en)).toBe(false);
          }
        }
      }
    }
  }
}

describe('Phase B & C: Complete A1 Curriculum Modules & A1 Final Exam', () => {
  describe('1. Complete 11-Module Implementation & Inventory', () => {
    it('marks all 11 A1 modules as implemented with non-empty required items for modules 1–10', () => {
      expect(A1_ACADEMY_MODULES).toHaveLength(11);
      for (const mod of A1_ACADEMY_MODULES) {
        expect(mod.implemented).toBe(true);
        if (mod.id !== 'final-exam') {
          expect(mod.requiredItemIds.length).toBeGreaterThan(0);
        }
      }
    });

    it('includes all required regular & irregular verbs with 6-person conjugations and audio examples', () => {
      const infinitives = A1_VERBS_LIST.map((v) => v.infinitive);
      for (const req of [
        'parlare', 'mangiare', 'abitare', 'prendere', 'vedere', 'dormire', 'partire',
        'essere', 'avere', 'fare', 'andare', 'stare', 'dare', 'potere', 'volere', 'dovere', 'sapere', 'venire', 'uscire',
      ]) {
        expect(infinitives).toContain(req);
      }
      expect(A1_VERBS_LIST).toHaveLength(19);
      expect(A1_VERBS_REQUIRED_IDS).toHaveLength(19);

      for (const v of A1_VERBS_LIST) {
        expect(v.conjugation).toHaveLength(6);
        for (const form of v.conjugation) {
          expect(form.trim().length).toBeGreaterThan(0);
          expect(BENGALI_REGEX.test(form)).toBe(false);
        }
        expect(v.meaning.bn.trim().length).toBeGreaterThan(0);
        expect(v.meaning.en.trim().length).toBeGreaterThan(0);
        expect(BENGALI_REGEX.test(v.meaning.en)).toBe(false);
        expect(BENGALI_REGEX.test(v.phoneticEn)).toBe(false);
        expect(v.examples.length).toBeGreaterThanOrEqual(2);
      }

      const essere = A1_VERBS_LIST.find((v) => v.infinitive === 'essere')!;
      expect(essere.conjugation).toEqual(['sono', 'sei', 'è', 'siamo', 'siete', 'sono']);
      const avere = A1_VERBS_LIST.find((v) => v.infinitive === 'avere')!;
      expect(avere.conjugation).toEqual(['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno']);
      const uscire = A1_VERBS_LIST.find((v) => v.infinitive === 'uscire')!;
      expect(uscire.conjugation).toEqual(['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono']);
    });

    it('covers all 7 everyday categories in Essential Verbs with cross-links and zero duplicate IDs', () => {
      const categories = new Set(A1_ESSENTIAL_VERBS.map((v) => v.category));
      expect(categories).toEqual(
        new Set(['daily-routine', 'food-eating', 'travel-transport', 'study-work', 'communication', 'shopping', 'home-family']),
      );
      expect(new Set(A1_ESSENTIAL_VERBS_REQUIRED_IDS).size).toBe(A1_ESSENTIAL_VERBS.length);
      for (const v of A1_ESSENTIAL_VERBS) {
        expect(v.meaning.bn.trim().length).toBeGreaterThan(0);
        expect(v.meaning.en.trim().length).toBeGreaterThan(0);
        expect(BENGALI_REGEX.test(v.meaning.en)).toBe(false);
        expect(BENGALI_REGEX.test(v.phoneticEn)).toBe(false);
        expect(v.exampleIt.trim().length).toBeGreaterThan(0);
      }
    });

    it('includes all 18 required A1 Adjectives and all 19 required A1 Adverbs', () => {
      const adjWords = A1_ADJECTIVES_LIST.map((a) => a.base);
      for (const req of [
        'bello', 'brutto', 'buono', 'cattivo', 'grande', 'piccolo', 'alto', 'basso',
        'nuovo', 'vecchio', 'caldo', 'freddo', 'facile', 'difficile', 'felice', 'stanco', 'caro', 'economico',
      ]) {
        expect(adjWords).toContain(req);
      }
      expect(A1_ADJECTIVES_REQUIRED_IDS).toHaveLength(18);

      const advWords = A1_ADVERBS_LIST.map((a) => a.word);
      for (const req of [
        'sempre', 'spesso', 'qualche volta', 'raramente', 'mai',
        'oggi', 'domani', 'ieri', 'adesso', 'presto', 'tardi',
        'qui', 'lì', 'bene', 'male', 'molto', 'poco', 'abbastanza', 'troppo',
      ]) {
        expect(advWords).toContain(req);
      }
      expect(A1_ADVERBS_REQUIRED_IDS).toHaveLength(19);
    });

    it('includes all 9 simple prepositions, 5 articulated contraction families, and 9 conjunctions', () => {
      const prepWords = A1_PREPOSITIONS_LIST.map((p) => p.word);
      for (const req of ['di', 'a', 'da', 'in', 'con', 'su', 'per', 'tra', 'fra']) {
        expect(prepWords).toContain(req);
      }
      const artForms = A1_PREPOSITIONS_LIST.filter((p) => p.group === 'articulated')
        .map((p) => p.formsDisplay)
        .join(' ');
      for (const form of ['al', 'allo', 'alla', 'all’', 'del', 'dello', 'della', 'dell’', 'dal', 'dallo', 'dalla', 'dall’', 'nel', 'nello', 'nella', 'nell’', 'sul', 'sullo', 'sulla', 'sull’']) {
        expect(artForms).toContain(form);
      }
      expect(A1_PREPOSITIONS_REQUIRED_IDS).toHaveLength(14);

      const conjWords = A1_CONJUNCTIONS_LIST.map((c) => c.word);
      for (const req of ['e', 'ma', 'o', 'perché', 'quindi', 'anche', 'però', 'quando', 'se']) {
        expect(conjWords).toContain(req);
      }
      expect(A1_CONJUNCTIONS_REQUIRED_IDS).toHaveLength(9);
    });
  });

  describe('2. Content Quality, Language Separation & Exam Pools', () => {
    it('keeps strict EN/BN language separation across all Phase B theory configs, drills, and exam pools', () => {
      for (const cfg of [
        VERBS_THEORY_CONFIG,
        ESSENTIAL_VERBS_THEORY_CONFIG,
        ADJECTIVES_THEORY_CONFIG,
        ADVERBS_THEORY_CONFIG,
        PREPOSITIONS_THEORY_CONFIG,
        CONJUNCTIONS_THEORY_CONFIG,
      ]) {
        assertCleanTheory(cfg);
      }

      for (const dr of [
        ...A1_VERBS_DRILL_ITEMS,
        ...A1_ESSENTIAL_VERBS_DRILL_ITEMS,
        ...A1_ADJECTIVES_DRILL_ITEMS,
        ...A1_ADVERBS_DRILL_ITEMS,
        ...A1_PREPOSITIONS_DRILL_ITEMS,
        ...A1_CONJUNCTIONS_DRILL_ITEMS,
      ]) {
        expect(BENGALI_REGEX.test(dr.cueEn)).toBe(false);
        expect(BENGALI_REGEX.test(dr.primaryLabel)).toBe(false);
        if (dr.promptOverride) expect(BENGALI_REGEX.test(dr.promptOverride.en)).toBe(false);
        expect(BENGALI_REGEX.test(dr.feedbackDetail.en)).toBe(false);
      }

      assertValidExamPool(A1_VERBS_EXAM_POOL, 'verbs');
      assertValidExamPool(A1_ESSENTIAL_VERBS_EXAM_POOL, 'essential-verbs');
      assertValidExamPool(A1_ADJECTIVES_EXAM_POOL, 'adjectives');
      assertValidExamPool(A1_ADVERBS_EXAM_POOL, 'adverbs');
      assertValidExamPool(A1_PREPOSITIONS_EXAM_POOL, 'prepositions');
      assertValidExamPool(A1_CONJUNCTIONS_EXAM_POOL, 'conjunctions');
      assertValidExamPool(A1_FINAL_EXAM_BANK, 'final-exam');
    });

    it('generates randomized 10-Q section exams for all 6 Phase B modules', () => {
      const moduleIds = ['verbs', 'essential-verbs', 'adjectives', 'adverbs', 'prepositions', 'conjunctions'] as const;
      for (const moduleId of moduleIds) {
        const q1 = generateAcademyModuleExam(moduleId, makeSeededRng(10));
        const q2 = generateAcademyModuleExam(moduleId, makeSeededRng(20));
        expect(q1, `${moduleId} length`).toHaveLength(10);
        expect(new Set(q1.map((q) => q.id)).size).toBe(10);
        expect(q1.map((q) => q.id)).not.toEqual(q2.map((q) => q.id));
      }
    });
  });

  describe('3. A1 Final Examination Bank (>=100 Qs) & 30-Q Cumulative Generator', () => {
    it('has at least 100 unique questions covering all 14 topics and all 4 question types', () => {
      expect(A1_FINAL_EXAM_BANK.length).toBeGreaterThanOrEqual(100);
      const topics = new Set<A1FinalExamTopic>(A1_FINAL_EXAM_BANK.map((q) => q.topic));
      expect(topics).toEqual(
        new Set<A1FinalExamTopic>([
          'alphabet',
          'numbers',
          'articles',
          'pronouns',
          'verbs',
          'essential-verbs',
          'adjectives',
          'adverbs',
          'prepositions',
          'conjunctions',
          'vocabulary',
          'sentence-building',
          'reading',
          'communication',
        ]),
      );

      const qTypes = new Set<A1FinalQuestionType>(A1_FINAL_EXAM_BANK.map((q) => q.questionType));
      expect(qTypes).toEqual(new Set<A1FinalQuestionType>(['mcq', 'fill-blank', 'sentence-building', 'reading']));
    });

    it('builds a balanced 30-question randomized final exam with 70% pass threshold (21/30)', () => {
      const e1 = buildA1FinalExam(makeSeededRng(42));
      const e2 = buildA1FinalExam(makeSeededRng(99));
      expect(e1).toHaveLength(30);
      expect(e2).toHaveLength(30);
      expect(new Set(e1.map((q) => q.id)).size).toBe(30);
      expect(e1.map((q) => q.id)).not.toEqual(e2.map((q) => q.id));

      // Verify generator path via generateAcademyModuleExam('final-exam')
      const viaEngine = generateAcademyModuleExam('final-exam', makeSeededRng(7));
      expect(viaEngine).toHaveLength(30);

      // 21/30 (9 mistakes) passes (70%)
      const passSelections: Record<string, number> = {};
      e1.forEach((q, idx) => {
        passSelections[q.id] = idx < 9 ? (q.answer + 1) % q.options.length : q.answer;
      });
      const passEval = evaluateExamAttempt({
        attemptId: 'fin-pass-21',
        moduleId: 'final-exam',
        questions: e1,
        selections: passSelections,
        maxIncorrect: 9,
      });
      expect(passEval.percentage).toBe(70);
      expect(passEval.passed).toBe(true);

      // 20/30 (10 mistakes) fails (67%)
      const failSelections: Record<string, number> = {};
      e1.forEach((q, idx) => {
        failSelections[q.id] = idx < 10 ? (q.answer + 1) % q.options.length : q.answer;
      });
      const failEval = evaluateExamAttempt({
        attemptId: 'fin-fail-20',
        moduleId: 'final-exam',
        questions: e1,
        selections: failSelections,
        maxIncorrect: 9,
      });
      expect(failEval.percentage).toBe(67);
      expect(failEval.passed).toBe(false);
    });
  });

  describe('4. Stage Persistence, Sequential Gating & Final Exam Unlocking', () => {
    it('tracks Theory -> Study -> Drill -> Exam stages, preserves progress, avoids duplicate XP, and unlocks Final Exam only after all 10 prior modules', () => {
      const today = '2026-11-16';
      let s: ProgressState = initialState();

      // Sequential prerequisite completion for modules 1..10
      const priorModules: { id: string; req: string[]; totalQ: number; maxIncorrect: number }[] = [
        { id: 'alphabet', req: A1_ALPHABET_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'numbers', req: A1_NUMBERS_REQUIRED_IDS, totalQ: 30, maxIncorrect: 3 },
        { id: 'articles', req: A1_ARTICLES_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'verbs', req: A1_VERBS_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'essential-verbs', req: A1_ESSENTIAL_VERBS_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'adjectives', req: A1_ADJECTIVES_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'adverbs', req: A1_ADVERBS_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'prepositions', req: A1_PREPOSITIONS_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'conjunctions', req: A1_CONJUNCTIONS_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
        { id: 'vocabulary', req: A1_VOCAB_REQUIRED_IDS, totalQ: 10, maxIncorrect: 3 },
      ];

      priorModules.forEach((mod, idx) => {
        expect(isAcademyModuleUnlocked(s.academy, mod.id, 'A1')).toBe(true);
        expect(isAcademyModuleUnlocked(s.academy, 'final-exam', 'A1')).toBe(false);

        s = reducer(s, { type: 'completeAcademyTheory', moduleId: mod.id, level: 'A1' });
        for (const itemId of mod.req) {
          s = reducer(s, { type: 'studyAcademyItem', moduleId: mod.id, itemId, level: 'A1' });
        }
        s = reducer(s, {
          type: 'completeAcademyDrill',
          moduleId: mod.id,
          level: 'A1',
          correct: 8,
          total: 10,
          today,
        });

        // Duplicate drill/study dispatch does not change XP
        const xpBeforeDup = s.xp;
        s = reducer(s, { type: 'studyAcademyItem', moduleId: mod.id, itemId: mod.req[0]!, level: 'A1' });
        expect(s.xp).toBe(xpBeforeDup);

        s = reducer(s, {
          type: 'submitAcademyExam',
          attemptId: `pass-${mod.id}`,
          moduleId: mod.id,
          level: 'A1',
          total: mod.totalQ,
          correct: mod.totalQ,
          incorrect: 0,
          maxIncorrect: mod.maxIncorrect,
          today,
        });

        expect(isAcademyModuleCompleted(s.academy, mod.id, 'A1')).toBe(true);
        const modProg = getAcademyModuleProgress(s.academy, mod.id, 'A1');
        expect(modProg.theoryCompleted).toBe(true);
        expect(modProg.drillCompleted).toBe(true);

        if (idx + 1 < priorModules.length) {
          expect(isAcademyModuleUnlocked(s.academy, priorModules[idx + 1]!.id, 'A1')).toBe(true);
        }
      });

      // Only NOW is A1 Final Exam unlocked!
      expect(isAcademyModuleUnlocked(s.academy, 'final-exam', 'A1')).toBe(true);
    });
  });
});
