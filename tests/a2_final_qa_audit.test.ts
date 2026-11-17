import { beforeEach, describe, expect, it } from 'vitest';
import {
  A2_FINAL_EXAM_DISTRIBUTION,
  A2_FINAL_EXAM_POOL,
  buildA2FinalExam,
} from '../src/content/academy/a2FinalExam';
import {
  A1_ACADEMY_MODULES,
  findAcademyModule,
} from '../src/content/academy/curriculum';
import { A2_ACADEMY_MODULES } from '../src/content/academy/curriculumA2B1B2';
import { A2_ACADEMY_VERBS } from '../src/content/academy/levelVerbs';
import { A2_COMMUNICATION_MODULES_DATA } from '../src/content/a2/communicationModules';
import { SENTENCES, WORDS } from '../src/content/bank';
import { GRAMMAR_TOPICS } from '../src/content/grammar';
import { GRAMMAR_DETAILS_A2 } from '../src/content/grammarDetailsA2';
import { loadAllBundles } from '../src/content/registry';
import { validateAllContent } from '../src/content/validate';
import {
  evaluateExamAttempt,
  generateAcademyModuleExamAsync,
} from '../src/lib/examEngine';
import {
  clearA2FinalExamDraft,
  loadA2FinalExamDraft,
  saveA2FinalExamDraft,
} from '../src/lib/finalExamDraft';
import { resolveExamOptions, resolveTr } from '../src/lib/i18n';
import {
  academyStudyStats,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
  normalizeAcademyProgress,
} from '../src/state/academyProgress';
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

const BENGALI_RX = /[\u0980-\u09FF]/;
const OTHER_INDIC_RX = /[\u0900-\u0963\u0966-\u097F\u0C00-\u0C7F\u0B80-\u0BFF]/;

describe('ItalianPro A2 — Final QA & Content Audit Suite', () => {
  beforeEach(() => {
    store.clear();
    Object.defineProperty(globalThis, 'localStorage', {
      value: mockLocalStorage,
      configurable: true,
      writable: true,
    });
  });

  it('passes full repository validation (validateAllContent) with 0 errors', async () => {
    const summary = await validateAllContent();
    expect(summary.issues).toEqual([]);
    expect(summary.counts.words.A2).toBe(774);
    expect(summary.counts.sentences.A2).toBe(370);
    expect(summary.counts.grammar.A2).toBe(74);
    expect(summary.counts.reading.A2).toBe(32);
    expect(summary.counts.listening.A2).toBe(42);
    expect(summary.counts.writing.A2).toBe(20);
    expect(summary.counts.speaking.A2).toBe(20);
    expect(summary.counts.puzzles.A2).toBe(180);
    expect(summary.counts.stories.A2).toBe(32);
  });

  it('verifies all 16 A2 modules have complete metadata in bn/en/it and accurate counts', () => {
    expect(A2_ACADEMY_MODULES).toHaveLength(16);
    for (const mod of A2_ACADEMY_MODULES) {
      expect(mod.implemented).toBe(true);
      expect(mod.sectionLabel?.title.bn.trim().length).toBeGreaterThan(0);
      expect(mod.sectionLabel?.title.en.trim().length).toBeGreaterThan(0);
      expect(mod.sectionLabel?.title.it?.trim().length).toBeGreaterThan(0);
      expect(mod.subtitle.bn.trim().length).toBeGreaterThan(0);
      expect(mod.subtitle.en.trim().length).toBeGreaterThan(0);
      expect(mod.subtitle.it?.trim().length).toBeGreaterThan(0);
      expect(mod.description.bn.trim().length).toBeGreaterThan(0);
      expect(mod.description.en.trim().length).toBeGreaterThan(0);
      expect(mod.description.it?.trim().length).toBeGreaterThan(0);

      // No Bengali leak inside English/Italian module metadata
      expect(BENGALI_RX.test(mod.title)).toBe(false);
      expect(BENGALI_RX.test(mod.subtitle.en)).toBe(false);
      expect(BENGALI_RX.test(mod.subtitle.it!)).toBe(false);
      expect(BENGALI_RX.test(mod.description.en)).toBe(false);
      expect(BENGALI_RX.test(mod.description.it!)).toBe(false);

      if (mod.kind !== 'final-exam') {
        expect(mod.requiredItemIds.length).toBeGreaterThan(0);
      }
    }

    const verbsMod = findAcademyModule('a2-verbs', 'A2')!;
    expect(A2_ACADEMY_VERBS).toHaveLength(66);
    expect(verbsMod.subtitle.en).toContain('66');
    expect(verbsMod.subtitle.bn).toContain('৬৬');
    expect(verbsMod.subtitle.it).toContain('66');

    const vocabMod = findAcademyModule('a2-vocab', 'A2')!;
    expect(WORDS.A2).toHaveLength(774);
    expect(vocabMod.subtitle.en).toContain('774');
    expect(vocabMod.subtitle.bn).toContain('৭৭৪');
    expect(vocabMod.subtitle.it).toContain('774');
  });

  it('confirms zero A1 grammar-tag leaks in SENTENCES.A2 / A2 listening and zero broken refs across A2 modules', async () => {
    const a1GrammarIds = new Set(GRAMMAR_TOPICS.filter((g) => g.level === 'A1').map((g) => g.id));
    const a2GrammarIds = new Set(GRAMMAR_TOPICS.filter((g) => g.level === 'A2').map((g) => g.id));

    for (const s of SENTENCES.A2) {
      expect(a1GrammarIds.has(s.grammar)).toBe(false);
      expect(a2GrammarIds.has(s.grammar)).toBe(true);
      expect(OTHER_INDIC_RX.test(s.tr.bn)).toBe(false);
    }

    const bundles = await loadAllBundles();
    for (const ls of bundles.A2.listening) {
      for (const gid of ls.grammarIds) {
        expect(a1GrammarIds.has(gid)).toBe(false);
      }
    }

    // All 20 Writing tasks must meet minWords and include every requiredKeyword in their modelResponse
    for (const wr of bundles.A2.writing) {
      const model = wr.modelResponse.it;
      const wordCount = model.trim().split(/\s+/).length;
      expect(wordCount).toBeGreaterThanOrEqual(wr.minWords);
      for (const kw of wr.requiredKeywords) {
        expect(model.toLowerCase().includes(kw.toLowerCase())).toBe(true);
      }
    }

    // All A2 grammar topics must have non-empty rules, >=3 examples, and clean bn/en text
    const a2Grammar = GRAMMAR_TOPICS.filter((g) => g.level === 'A2');
    expect(a2Grammar).toHaveLength(74);
    for (const g of a2Grammar) {
      const det = GRAMMAR_DETAILS_A2[g.id];
      expect(det).toBeDefined();
      expect(det!.examples.length).toBeGreaterThanOrEqual(3);
      expect(BENGALI_RX.test(det!.rule.en)).toBe(false);
      expect(OTHER_INDIC_RX.test(det!.rule.bn)).toBe(false);
    }

    // Verify no non-Bengali Indic artifacts in Communication modules or A2 Units
    for (const comm of Object.values(A2_COMMUNICATION_MODULES_DATA)) {
      expect(comm.expressions.length).toBe(12);
      expect(comm.dialogues.length).toBe(8);
      expect(comm.functionalFrames.length).toBe(2);
      expect(comm.questions.length).toBe(14);
      for (const exp of comm.expressions) {
        expect(BENGALI_RX.test(exp.meaning.en)).toBe(false);
        expect(OTHER_INDIC_RX.test(exp.meaning.bn)).toBe(false);
      }
    }
  });

  it('generates valid randomized section exams for every A2 module 1..15', async () => {
    const rng = makeSeededRng(4242);
    for (const mod of A2_ACADEMY_MODULES.filter((m) => m.kind !== 'final-exam')) {
      const qs = await generateAcademyModuleExamAsync(mod.id, rng, 'A2');
      expect(qs).toHaveLength(mod.examQuestionCount);
      expect(new Set(qs.map((q) => q.id)).size).toBe(qs.length);
      for (const q of qs) {
        expect(q.options.length).toBeGreaterThanOrEqual(2);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
        expect(q.prompt.bn.trim().length).toBeGreaterThan(0);
        expect(q.prompt.en.trim().length).toBeGreaterThan(0);
        expect(q.explanation.bn.trim().length).toBeGreaterThan(0);
        expect(q.explanation.en.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('prevents incomplete modules from being marked complete and scopes studied counts cleanly', () => {
    let state = initialState();
    // Unlock A2 first by passing A1 final exam
    const a1Final = findAcademyModule('final-exam', 'A1')!;
    const a1Prereqs = A1_ACADEMY_MODULES.filter((m) => m.id !== 'final-exam');
    for (const mod of a1Prereqs) {
      for (const id of mod.requiredItemIds) {
        state = reducer(state, { type: 'studyAcademyItem', moduleId: mod.id, itemId: id, level: 'A1' });
      }
      state = reducer(state, {
        type: 'submitAcademyExam',
        attemptId: `pass-${mod.id}`,
        moduleId: mod.id,
        level: 'A1',
        total: mod.examQuestionCount,
        correct: mod.examQuestionCount,
        incorrect: 0,
        maxIncorrect: mod.maxIncorrect,
        today: '2026-11-17',
      });
    }
    state = reducer(state, {
      type: 'submitAcademyExam',
      attemptId: 'pass-a1-final',
      moduleId: a1Final.id,
      level: 'A1',
      total: 30,
      correct: 28,
      incorrect: 2,
      maxIncorrect: 9,
      today: '2026-11-17',
    });
    expect(isLevelUnlocked(state, 'A2')).toBe(true);

    // Module 1 (a2-tenses): study 31 of 32 required items + inject an unrelated/legacy ID
    const mod1 = findAcademyModule('a2-tenses', 'A2')!;
    for (const itemId of mod1.requiredItemIds.slice(0, -1)) {
      state = reducer(state, { type: 'studyAcademyItem', moduleId: 'a2-tenses', itemId, level: 'A2' });
    }
    state = reducer(state, { type: 'studyAcademyItem', moduleId: 'a2-tenses', itemId: 'legacy-moved-topic', level: 'A2' });

    const partialStats = academyStudyStats(state.academy, 'a2-tenses', 'A2');
    expect(partialStats.studied).toBe(mod1.requiredItemIds.length - 1);
    expect(partialStats.remaining).toBe(1);
    expect(partialStats.readyForExam).toBe(false);

    // Even a 100% exam submission must NOT mark the incomplete module as completed
    state = reducer(state, {
      type: 'submitAcademyExam',
      attemptId: 'premature-a2-tenses',
      moduleId: 'a2-tenses',
      level: 'A2',
      total: 10,
      correct: 10,
      incorrect: 0,
      maxIncorrect: 3,
      today: '2026-11-17',
    });
    expect(isAcademyModuleCompleted(state.academy, 'a2-tenses', 'A2')).toBe(false);
    expect(isAcademyModuleUnlocked(state.academy, 'a2-verbs', 'A2')).toBe(false);

    // Testing Mode toggle must NOT write progress onto locked modules
    state = reducer(state, { type: 'setShowAllLockedModules', enabled: true });
    state = reducer(state, {
      type: 'submitAcademyExam',
      attemptId: 'locked-final-try',
      moduleId: 'a2-final-exam',
      level: 'A2',
      total: 40,
      correct: 40,
      incorrect: 0,
      maxIncorrect: 12,
      today: '2026-11-17',
    });
    expect(isLevelUnlocked(state, 'B1')).toBe(false);

    // Complete final required item & re-submit new attempt -> module 1 completes and unlocks module 2
    state = reducer(state, {
      type: 'studyAcademyItem',
      moduleId: 'a2-tenses',
      itemId: mod1.requiredItemIds[mod1.requiredItemIds.length - 1]!,
      level: 'A2',
    });
    state = reducer(state, {
      type: 'submitAcademyExam',
      attemptId: 'valid-a2-tenses',
      moduleId: 'a2-tenses',
      level: 'A2',
      total: 10,
      correct: 8,
      incorrect: 2,
      maxIncorrect: 3,
      today: '2026-11-17',
    });
    expect(isAcademyModuleCompleted(state.academy, 'a2-tenses', 'A2')).toBe(true);
    expect(isAcademyModuleUnlocked(state.academy, 'a2-verbs', 'A2')).toBe(true);
  });

  it('verifies A2 108-Q pool, 40-Q stratified selection, draft persistence, 70% threshold, and B1 unlock', () => {
    expect(A2_FINAL_EXAM_POOL).toHaveLength(108);

    const rng = makeSeededRng(2026);
    const draw = buildA2FinalExam(rng);
    expect(draw).toHaveLength(40);
    expect(new Set(draw.map((q) => q.id)).size).toBe(40);

    const catCounts = { grammar: 0, vocabulary: 0, reading: 0, listening: 0, communication: 0 };
    for (const q of draw) {
      catCounts[q.category] += 1;
      for (const lang of ['bn', 'en', 'it'] as const) {
        const promptText = resolveTr(lang, q.prompt);
        const opts = resolveExamOptions(q, lang);
        expect(promptText.trim().length).toBeGreaterThan(0);
        expect(opts).toHaveLength(4);
        if (lang !== 'bn') {
          expect(BENGALI_RX.test(promptText)).toBe(false);
          for (const opt of opts) expect(BENGALI_RX.test(opt)).toBe(false);
        }
      }
    }
    expect(catCounts).toEqual(A2_FINAL_EXAM_DISTRIBUTION);

    // Draft save -> reload -> clear roundtrip
    const draft = {
      attemptId: 'a2-draft-qa',
      questions: draw,
      selections: { [draw[0]!.id]: 1, [draw[1]!.id]: 2 },
      currentIndex: 14,
      updatedAt: 1700000000000,
    };
    expect(saveA2FinalExamDraft(draft, false)).toBe(true);
    const loaded = loadA2FinalExamDraft(false);
    expect(loaded).not.toBeNull();
    expect(loaded?.currentIndex).toBe(14);
    expect(loaded?.selections).toEqual(draft.selections);
    clearA2FinalExamDraft(false);
    expect(loadA2FinalExamDraft(false)).toBeNull();

    // Score evaluation at 27/40 (67.5% -> FAIL) vs 28/40 (70% -> PASS)
    const failSelections: Record<string, number> = {};
    draw.forEach((q, idx) => {
      failSelections[q.id] = idx < 27 ? q.answer : (q.answer + 1) % 4;
    });
    const failRes = evaluateExamAttempt({
      attemptId: 'a2-fail-27',
      moduleId: 'a2-final-exam',
      questions: draw,
      selections: failSelections,
      maxIncorrect: 12,
    });
    expect(failRes.correct).toBe(27);
    expect(failRes.incorrect).toBe(13);
    expect(failRes.passed).toBe(false);

    const passSelections: Record<string, number> = {};
    draw.forEach((q, idx) => {
      passSelections[q.id] = idx < 28 ? q.answer : (q.answer + 1) % 4;
    });
    const passRes = evaluateExamAttempt({
      attemptId: 'a2-pass-28',
      moduleId: 'a2-final-exam',
      questions: draw,
      selections: passSelections,
      maxIncorrect: 12,
    });
    expect(passRes.correct).toBe(28);
    expect(passRes.incorrect).toBe(12);
    expect(passRes.passed).toBe(true);

    // Full progression: pass A1, complete A2 modules 1..15, verify B1 remains locked on 27/40 and unlocks on 28/40
    let state = initialState();
    for (const mod of A1_ACADEMY_MODULES) {
      for (const id of mod.requiredItemIds) {
        state = reducer(state, { type: 'studyAcademyItem', moduleId: mod.id, itemId: id, level: 'A1' });
      }
      state = reducer(state, {
        type: 'submitAcademyExam',
        attemptId: `a1-${mod.id}`,
        moduleId: mod.id,
        level: 'A1',
        total: mod.examQuestionCount,
        correct: mod.examQuestionCount,
        incorrect: 0,
        maxIncorrect: mod.maxIncorrect,
        today: '2026-11-17',
      });
    }
    for (const mod of A2_ACADEMY_MODULES.filter((m) => m.id !== 'a2-final-exam')) {
      for (const id of mod.requiredItemIds) {
        state = reducer(state, { type: 'studyAcademyItem', moduleId: mod.id, itemId: id, level: 'A2' });
      }
      state = reducer(state, {
        type: 'submitAcademyExam',
        attemptId: `a2-${mod.id}`,
        moduleId: mod.id,
        level: 'A2',
        total: mod.examQuestionCount,
        correct: mod.examQuestionCount,
        incorrect: 0,
        maxIncorrect: mod.maxIncorrect,
        today: '2026-11-17',
      });
    }

    expect(isAcademyModuleUnlocked(state.academy, 'a2-final-exam', 'A2')).toBe(true);

    // Fail attempt 27/40 keeps B1 locked
    state = reducer(state, {
      type: 'submitAcademyExam',
      attemptId: 'a2-final-27',
      moduleId: 'a2-final-exam',
      level: 'A2',
      total: 40,
      correct: 27,
      incorrect: 13,
      maxIncorrect: 12,
      today: '2026-11-17',
    });
    expect(isLevelUnlocked(state, 'B1')).toBe(false);

    // Pass attempt 28/40 unlocks B1
    state = reducer(state, {
      type: 'submitAcademyExam',
      attemptId: 'a2-final-28',
      moduleId: 'a2-final-exam',
      level: 'A2',
      total: 40,
      correct: 28,
      incorrect: 12,
      maxIncorrect: 12,
      today: '2026-11-17',
    });
    expect(isAcademyModuleCompleted(state.academy, 'a2-final-exam', 'A2')).toBe(true);
    expect(isLevelUnlocked(state, 'B1')).toBe(true);
  });

  it('preserves existing A1 progress and migrates legacy A2 saves losslessly via normalizeAcademyProgress', () => {
    const legacy = {
      modules: {
        alphabet: {
          studiedItems: ['a1-alpha-1'],
          completed: true,
          bestScore: 1,
          attempts: 1,
          failedAttempts: 0,
          completedAttemptIds: ['att-a1-1'],
          history: [],
        },
        'final-exam': {
          studiedItems: [],
          completed: true,
          bestScore: 0.9,
          attempts: 1,
          failedAttempts: 0,
          completedAttemptIds: ['att-a1-final'],
          history: [],
        },
      },
      levels: {
        A2: {
          'a2-tenses': {
            studiedItems: ['passato-prossimo', 'imperativo'],
            completed: true,
            bestScore: 0.9,
            attempts: 1,
            failedAttempts: 0,
            completedAttemptIds: ['att-a2-1'],
            history: [],
          },
          'a2-vocab': {
            studiedItems: ['topic:A2:Greetings & Social Relations', 'topic:A2:Work & Jobs'],
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
            completedAttemptIds: ['att-wr'],
            history: [],
          },
          'a2-speaking': {
            studiedItems: ['sp-a2-01'],
            completed: true,
            bestScore: 0.9,
            attempts: 1,
            failedAttempts: 0,
            completedAttemptIds: ['att-sp'],
            history: [],
          },
        },
      },
    };

    const normalized = normalizeAcademyProgress(legacy);
    expect(normalized.modules.alphabet?.completed).toBe(true);
    expect(normalized.modules['final-exam']?.completed).toBe(true);
    expect(normalized.levels?.A2?.['a2-vocab']?.studiedItems).toEqual([
      'topic:A2:Greetings & Social Relationships',
      'topic:A2:Work & Professions',
    ]);
    expect(normalized.levels?.A2?.['a2-grammar-expansion']?.studiedItems).toContain('imperativo');
    expect(normalized.levels?.A2?.['a2-writing-speaking']?.studiedItems).toEqual([
      'wr-a2-01',
      'wr-a2-02',
      'sp-a2-01',
    ]);
    expect(normalized.levels?.A2?.['a2-writing-speaking']?.completed).toBe(true);
  });
});
