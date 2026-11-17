import { beforeEach, describe, expect, it } from 'vitest';
import { A1_ALPHABET_EXAM_POOL, A1_ALPHABET_LETTERS } from '../src/content/academy/a1Alphabet';
import { A1_ARTICLE_EXAM_POOL } from '../src/content/academy/a1Articles';
import { A1_NUMBERS } from '../src/content/academy/a1Numbers';
import { buildVocabularyExamPool } from '../src/content/academy/a1Vocabulary';
import { findAcademyModule } from '../src/content/academy/curriculum';
import { ALPHABET_THEORY_CONFIG, NUMBERS_THEORY_CONFIG } from '../src/content/academy/theoryData';
import {
  buildNumbersExam,
  evaluateExamAttempt,
  generateAcademyModuleExam,
} from '../src/lib/examEngine';
import { resolveExamOptions, resolveTr } from '../src/lib/i18n';
import {
  getAcademyModuleProgress,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
} from '../src/state/academyProgress';
import { initialState, reducer, type ProgressState } from '../src/state/progress';
import { loadProgress, saveProgress } from '../src/state/storage';

function makeSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

describe('Alphabet & Numbers 5-Stage Interactive Learning Flow', () => {
  const store = new Map<string, string>();
  beforeEach(() => {
    store.clear();
    Object.defineProperty(globalThis, 'localStorage', {
      value: {
        getItem: (k: string) => store.get(k) ?? null,
        setItem: (k: string, v: string) => {
          store.set(k, v);
        },
        removeItem: (k: string) => {
          store.delete(k);
        },
        clear: () => store.clear(),
      },
      configurable: true,
      writable: true,
    });
  });

  it('provides rich structured Theory configs for Alphabet and Numbers', () => {
    expect(ALPHABET_THEORY_CONFIG.moduleId).toBe('alphabet');
    expect(ALPHABET_THEORY_CONFIG.sections.length).toBeGreaterThanOrEqual(4);
    const alphaText = JSON.stringify(ALPHABET_THEORY_CONFIG);
    expect(alphaText).toContain('Amico');
    expect(alphaText).toContain('Casa');
    expect(alphaText).toContain('Gelato');
    expect(alphaText).toContain('i lunga');

    expect(NUMBERS_THEORY_CONFIG.moduleId).toBe('numbers');
    expect(NUMBERS_THEORY_CONFIG.sections.length).toBeGreaterThanOrEqual(4);
    const numText = JSON.stringify(NUMBERS_THEORY_CONFIG);
    expect(numText).toContain('Ho venticinque anni.');
    expect(numText).toContain('costa diciotto euro');
    expect(numText).toContain('il quindici maggio');
    expect(numText).toContain('dodici biglietti');
    expect(numText).toContain('Il mio numero');
  });

  it('organizes A1_NUMBERS into exact 6 range groups across 0–100', () => {
    const counts: Record<string, number> = {};
    for (const item of A1_NUMBERS) {
      counts[item.group] = (counts[item.group] ?? 0) + 1;
    }
    expect(Object.keys(counts).sort()).toEqual([
      '0-10',
      '11-20',
      '21-30',
      '31-50',
      '51-70',
      '71-100',
    ]);
    expect(counts['0-10']).toBe(11);
    expect(counts['11-20']).toBe(10);
    expect(counts['21-30']).toBe(10);
    expect(counts['31-50']).toBe(20);
    expect(counts['51-70']).toBe(20);
    expect(counts['71-100']).toBe(30);
  });

  it('enforces max 3 allowed mistakes for both Alphabet (10Q) and Numbers (30Q) and supports multi-format Alphabet questions', () => {
    const alphaMeta = findAcademyModule('alphabet', 'A1');
    const numMeta = findAcademyModule('numbers', 'A1');
    expect(alphaMeta?.maxIncorrect).toBe(3);
    expect(numMeta?.maxIncorrect).toBe(3);

    expect(A1_ALPHABET_EXAM_POOL.some((q) => q.id.startsWith('exam-alpha-alpha-'))).toBe(true);
    expect(A1_ALPHABET_EXAM_POOL.some((q) => q.id.startsWith('exam-alpha-case-'))).toBe(true);
    expect(A1_ALPHABET_EXAM_POOL.some((q) => q.id.startsWith('exam-alpha-name-'))).toBe(true);
    expect(A1_ALPHABET_EXAM_POOL.some((q) => q.id.startsWith('exam-alpha-word-'))).toBe(true);

    const numExam = buildNumbersExam(makeSeededRng(2026));
    expect(numExam).toHaveLength(30);
    // First 20 questions cover 1..20 (randomized), last 10 come from 21..100 + 0
    const first20Ids = numExam.slice(0, 20).map((q) => Number(q.it));
    expect(first20Ids.slice().sort((a, b) => a - b)).toEqual(
      Array.from({ length: 20 }, (_, i) => i + 1),
    );
    const last10Ids = numExam.slice(20).map((q) => Number(q.it));
    for (const v of last10Ids) {
      expect(v === 0 || v >= 21).toBe(true);
    }

    // 4 mistakes on Numbers (26/30) fails
    const numFailSelections: Record<string, number> = {};
    numExam.forEach((q, idx) => {
      numFailSelections[q.id] = idx < 4 ? (q.answer + 1) % q.options.length : q.answer;
    });
    const numFailEval = evaluateExamAttempt({
      attemptId: 'num-fail-4',
      moduleId: 'numbers',
      questions: numExam,
      selections: numFailSelections,
      maxIncorrect: numMeta?.maxIncorrect,
    });
    expect(numFailEval.incorrect).toBe(4);
    expect(numFailEval.passed).toBe(false);

    // 3 mistakes on Numbers (27/30) passes
    const numPassSelections: Record<string, number> = {};
    numExam.forEach((q, idx) => {
      numPassSelections[q.id] = idx < 3 ? (q.answer + 1) % q.options.length : q.answer;
    });
    const numPassEval = evaluateExamAttempt({
      attemptId: 'num-pass-3',
      moduleId: 'numbers',
      questions: numExam,
      selections: numPassSelections,
      maxIncorrect: numMeta?.maxIncorrect,
    });
    expect(numPassEval.incorrect).toBe(3);
    expect(numPassEval.passed).toBe(true);
  });

  it('persists stage progression cleanly and keeps Theory/Study/Drill intact when Exam fails', () => {
    const today = '2026-11-16';
    let s: ProgressState = initialState();

    // Stage 1: Complete Theory
    s = reducer(s, { type: 'completeAcademyTheory', moduleId: 'alphabet', level: 'A1' });
    expect(getAcademyModuleProgress(s.academy, 'alphabet').theoryCompleted).toBe(true);

    // Stage 2: Study partial -> save -> reload -> preserved
    s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: 'alpha-a' });
    s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: 'alpha-b' });
    expect(saveProgress(s)).toBe(true);
    let reloaded = loadProgress();
    expect(getAcademyModuleProgress(reloaded.academy, 'alphabet').theoryCompleted).toBe(true);
    expect(getAcademyModuleProgress(reloaded.academy, 'alphabet').studiedItems).toEqual(['alpha-a', 'alpha-b']);

    // Complete all 21 letters + Sound Drill
    for (const l of A1_ALPHABET_LETTERS) {
      reloaded = reducer(reloaded, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: l.id });
    }
    reloaded = reducer(reloaded, {
      type: 'completeAcademyDrill',
      moduleId: 'alphabet',
      level: 'A1',
      correct: 19,
      total: 21,
      today,
    });
    expect(getAcademyModuleProgress(reloaded.academy, 'alphabet').drillCompleted).toBe(true);
    expect(getAcademyModuleProgress(reloaded.academy, 'alphabet').drillCorrect).toBe(19);
    expect(getAcademyModuleProgress(reloaded.academy, 'alphabet').drillIncorrect).toBe(2);

    // Failed exam (>3 mistakes) preserves Theory/Study/Drill and leaves Numbers locked
    const alphaQs = generateAcademyModuleExam('alphabet', makeSeededRng(77), 'A1');
    const failSel: Record<string, number> = {};
    alphaQs.forEach((q, idx) => {
      failSel[q.id] = idx < 4 ? (q.answer + 1) % q.options.length : q.answer;
    });
    const evalFail = evaluateExamAttempt({
      attemptId: 'alpha-fail-preserves',
      moduleId: 'alphabet',
      questions: alphaQs,
      selections: failSel,
      maxIncorrect: 3,
    });
    reloaded = reducer(reloaded, {
      type: 'submitAcademyExam',
      attemptId: evalFail.attemptId,
      moduleId: 'alphabet',
      level: 'A1',
      total: evalFail.total,
      correct: evalFail.correct,
      incorrect: evalFail.incorrect,
      maxIncorrect: 3,
      today,
    });
    const afterFailMod = getAcademyModuleProgress(reloaded.academy, 'alphabet');
    expect(afterFailMod.theoryCompleted).toBe(true);
    expect(afterFailMod.studiedItems).toHaveLength(21);
    expect(afterFailMod.drillCompleted).toBe(true);
    expect(afterFailMod.completed).toBe(false);
    expect(isAcademyModuleUnlocked(reloaded.academy, 'numbers')).toBe(false);

    // Pass Alphabet -> unlocks Numbers -> Numbers still starts with Theory uncompleted!
    reloaded = reducer(reloaded, {
      type: 'submitAcademyExam',
      attemptId: 'alpha-pass-unlock',
      moduleId: 'alphabet',
      level: 'A1',
      total: 10,
      correct: 9,
      incorrect: 1,
      maxIncorrect: 3,
      today,
    });
    expect(isAcademyModuleCompleted(reloaded.academy, 'alphabet')).toBe(true);
    expect(isAcademyModuleUnlocked(reloaded.academy, 'numbers')).toBe(true);
    expect(getAcademyModuleProgress(reloaded.academy, 'numbers').theoryCompleted).toBe(false);

    expect(saveProgress(reloaded)).toBe(true);
    const afterSave = loadProgress();
    expect(isAcademyModuleCompleted(afterSave.academy, 'alphabet')).toBe(true);
    expect(getAcademyModuleProgress(afterSave.academy, 'numbers').theoryCompleted).toBe(false);
  });

  it('evaluates early-stop (>3 mistakes) as failed without unlocking next module', () => {
    const today = '2026-11-16';
    let s: ProgressState = initialState();
    s = reducer(s, { type: 'completeAcademyTheory', moduleId: 'alphabet', level: 'A1' });
    for (const l of A1_ALPHABET_LETTERS) {
      s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: l.id });
    }
    s = reducer(s, {
      type: 'completeAcademyDrill',
      moduleId: 'alphabet',
      level: 'A1',
      correct: 21,
      total: 21,
      today,
    });

    // Simulate stopping immediately at Q4 after 4 mistakes on a 10Q Alphabet exam
    const alphaQs = generateAcademyModuleExam('alphabet', makeSeededRng(101), 'A1');
    const partialFailSelections: Record<string, number> = {};
    alphaQs.slice(0, 4).forEach((q) => {
      partialFailSelections[q.id] = (q.answer + 1) % q.options.length;
    });
    const evaluated = evaluateExamAttempt({
      attemptId: 'alpha-early-stop-4',
      moduleId: 'alphabet',
      questions: alphaQs,
      selections: partialFailSelections,
      maxIncorrect: 3,
    });
    expect(evaluated.passed).toBe(false);
    expect(evaluated.incorrect).toBeGreaterThan(3);

    s = reducer(s, {
      type: 'submitAcademyExam',
      attemptId: evaluated.attemptId,
      moduleId: 'alphabet',
      level: 'A1',
      total: alphaQs.length,
      correct: 0,
      incorrect: 4,
      maxIncorrect: 3,
      today,
    });

    const mod = getAcademyModuleProgress(s.academy, 'alphabet');
    expect(mod.failedAttempts).toBe(1);
    expect(mod.completed).toBe(false);
    expect(mod.theoryCompleted).toBe(true);
    expect(mod.drillCompleted).toBe(true);
    expect(isAcademyModuleUnlocked(s.academy, 'numbers')).toBe(false);
  });

  it('strictly separates Bengali from English and Italian modes across Theory, Exam pools, and storage', () => {
    const bengaliRegex = /[\u0980-\u09FF]/;

    // Theory sections: zero Bengali in English and Italian
    for (const cfg of [ALPHABET_THEORY_CONFIG, NUMBERS_THEORY_CONFIG]) {
      expect(resolveTr('en', cfg.title)).not.toMatch(bengaliRegex);
      expect(resolveTr('it', cfg.title)).not.toMatch(bengaliRegex);
      expect(resolveTr('en', cfg.intro)).not.toMatch(bengaliRegex);
      expect(resolveTr('it', cfg.intro)).not.toMatch(bengaliRegex);
      for (const sec of cfg.sections) {
        expect(resolveTr('en', sec.heading)).not.toMatch(bengaliRegex);
        expect(resolveTr('it', sec.heading)).not.toMatch(bengaliRegex);
        expect(resolveTr('en', sec.summary)).not.toMatch(bengaliRegex);
        expect(resolveTr('it', sec.summary)).not.toMatch(bengaliRegex);
        for (const rule of sec.rules ?? []) {
          expect(resolveTr('en', rule.title)).not.toMatch(bengaliRegex);
          expect(resolveTr('it', rule.title)).not.toMatch(bengaliRegex);
          expect(resolveTr('en', rule.body)).not.toMatch(bengaliRegex);
          expect(resolveTr('it', rule.body)).not.toMatch(bengaliRegex);
          for (const ex of rule.examples) {
            if (ex.phoneticEn) expect(ex.phoneticEn).not.toMatch(bengaliRegex);
            if (ex.phoneticIt) expect(ex.phoneticIt).not.toMatch(bengaliRegex);
            expect(resolveTr('en', ex.tr)).not.toMatch(bengaliRegex);
            expect(resolveTr('it', ex.tr)).not.toMatch(bengaliRegex);
          }
        }
        for (const row of sec.table?.rows ?? []) {
          for (const cell of row.cells) {
            expect(resolveTr('en', cell)).not.toMatch(bengaliRegex);
            expect(resolveTr('it', cell)).not.toMatch(bengaliRegex);
          }
        }
        for (const m of sec.mistakes ?? []) {
          expect(resolveTr('en', m.wrong)).not.toMatch(bengaliRegex);
          expect(resolveTr('it', m.wrong)).not.toMatch(bengaliRegex);
          expect(resolveTr('en', m.right)).not.toMatch(bengaliRegex);
          expect(resolveTr('it', m.right)).not.toMatch(bengaliRegex);
          expect(resolveTr('en', m.explanation)).not.toMatch(bengaliRegex);
          expect(resolveTr('it', m.explanation)).not.toMatch(bengaliRegex);
        }
      }
    }

    // Exam pools + generators: zero Bengali in English or Italian options/prompts/explanations
    const rng = makeSeededRng(4242);
    const examBatches = [
      A1_ALPHABET_EXAM_POOL,
      A1_ARTICLE_EXAM_POOL,
      buildVocabularyExamPool(rng),
      buildNumbersExam(rng),
      generateAcademyModuleExam('articles', rng, 'A1'),
      generateAcademyModuleExam('vocabulary', rng, 'A1'),
      generateAcademyModuleExam('a2-verbs', rng, 'A2'),
    ];
    for (const qs of examBatches) {
      for (const q of qs) {
        expect(resolveTr('en', q.prompt)).not.toMatch(bengaliRegex);
        expect(resolveTr('it', q.prompt)).not.toMatch(bengaliRegex);
        expect(resolveTr('en', q.explanation)).not.toMatch(bengaliRegex);
        expect(resolveTr('it', q.explanation)).not.toMatch(bengaliRegex);
        for (const opt of resolveExamOptions(q, 'en')) {
          expect(opt).not.toMatch(bengaliRegex);
        }
        for (const opt of resolveExamOptions(q, 'it')) {
          expect(opt).not.toMatch(bengaliRegex);
        }
      }
    }

    // Persist explainLang = 'en' and 'it' across loadProgress/saveProgress
    let s = initialState();
    s = reducer(s, { type: 'setExplainLang', lang: 'it' });
    expect(saveProgress(s)).toBe(true);
    expect(loadProgress().settings.explainLang).toBe('it');

    s = reducer(s, { type: 'setExplainLang', lang: 'en' });
    expect(saveProgress(s)).toBe(true);
    expect(loadProgress().settings.explainLang).toBe('en');
  });

  it('builds 11 sequential Numbers groups (10 per group + final 100), enforces sequential resumption, prevents duplicate study tracking, and separates EN/BN study data', async () => {
    const { buildSequentialNumberGroups } = await import('../src/screens/academy/NumbersModuleScreen');
    const { resolveInitialSequentialGroupIndex } = await import('../src/components/academy/StudyListScreen');
    const { academyStudyStats } = await import('../src/state/academyProgress');
    const bengaliRegex = /[\u0980-\u09FF]/;

    // 1. Exact 11 sequential groups
    const groups = buildSequentialNumberGroups(A1_NUMBERS);
    expect(groups.map((g) => g.label)).toEqual([
      '0–9',
      '10–19',
      '20–29',
      '30–39',
      '40–49',
      '50–59',
      '60–69',
      '70–79',
      '80–89',
      '90–99',
      '100',
    ]);
    for (let i = 0; i < 10; i++) {
      expect(groups[i]!.items).toHaveLength(10);
      expect(groups[i]!.items[0]!.primary).toBe(String(i * 10));
      expect(groups[i]!.items[9]!.primary).toBe(String(i * 10 + 9));
    }
    expect(groups[10]!.items).toHaveLength(1);
    expect(groups[10]!.items[0]!.primary).toBe('100');
    expect(groups[10]!.items[0]!.italianLabel).toBe('cento');

    // 2. Strict language separation in Numbers study items (zero Bengali in EN)
    for (const g of groups) {
      for (const item of g.items) {
        expect(item.phoneticEn).not.toMatch(bengaliRegex);
        expect(item.meaningEn ?? '').not.toMatch(bengaliRegex);
        expect(item.exampleTrEn).not.toMatch(bengaliRegex);
        expect(item.phoneticBn).toMatch(bengaliRegex);
        expect(item.meaningBn ?? '').toMatch(bengaliRegex);
      }
    }

    // Strict language separation in Alphabet study items
    for (const l of A1_ALPHABET_LETTERS) {
      expect(l.phoneticEn).not.toMatch(bengaliRegex);
      expect(l.exampleTr.en).not.toMatch(bengaliRegex);
      expect(l.phoneticBn).toMatch(bengaliRegex);
      expect(l.exampleTr.bn).toMatch(bengaliRegex);
    }

    // 3. Sequential group resumption & non-skipping
    expect(resolveInitialSequentialGroupIndex(groups, new Set())).toBe(0);
    // Completing 0-9 advances initial index to 1 (10-19)
    const set0to9 = new Set(groups[0]!.items.map((x) => x.id));
    expect(resolveInitialSequentialGroupIndex(groups, set0to9)).toBe(1);
    // Partial 10-19 still stays at 1 (10-19)
    set0to9.add('num-10');
    set0to9.add('num-11');
    expect(resolveInitialSequentialGroupIndex(groups, set0to9)).toBe(1);
    // Even if an item in 20-29 were present while 0-9 is incomplete, never skips 0-9
    expect(resolveInitialSequentialGroupIndex(groups, new Set(['num-20']))).toBe(0);
    // Completing 0-99 lands on final single-item group 100 (index 10)
    const set0to99 = new Set(A1_NUMBERS.slice(0, 100).map((n) => n.id));
    expect(resolveInitialSequentialGroupIndex(groups, set0to99)).toBe(10);
    // Completing all 101 lands on index 10 (100)
    const setAll = new Set(A1_NUMBERS.map((n) => n.id));
    expect(resolveInitialSequentialGroupIndex(groups, setAll)).toBe(10);

    // 4. Alphabet 21-letter gate + Persistence + Zero duplicate study items
    let s = initialState();
    s = reducer(s, { type: 'completeAcademyTheory', moduleId: 'alphabet', level: 'A1' });
    for (let i = 0; i < 20; i++) {
      s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: A1_ALPHABET_LETTERS[i]!.id });
    }
    expect(academyStudyStats(s.academy, 'alphabet').readyForExam).toBe(false);
    expect(academyStudyStats(s.academy, 'alphabet').remaining).toBe(1);

    // Tapping an already studied letter never duplicates itemId
    s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: A1_ALPHABET_LETTERS[0]!.id });
    expect(getAcademyModuleProgress(s.academy, 'alphabet').studiedItems).toHaveLength(20);

    // 21st letter completes Study requirement
    s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: A1_ALPHABET_LETTERS[20]!.id });
    expect(academyStudyStats(s.academy, 'alphabet').readyForExam).toBe(true);
    expect(saveProgress(s)).toBe(true);

    const reloaded = loadProgress();
    expect(getAcademyModuleProgress(reloaded.academy, 'alphabet').studiedItems).toHaveLength(21);
    expect(academyStudyStats(reloaded.academy, 'alphabet').readyForExam).toBe(true);
  });
});
