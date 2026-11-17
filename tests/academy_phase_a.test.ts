import { beforeEach, describe, expect, it } from 'vitest';
import { A1_ACADEMY_MODULES, getAcademyModules } from '../src/content/academy/curriculum';
import { A1_ALPHABET_LETTERS } from '../src/content/academy/a1Alphabet';
import { A1_NUMBERS } from '../src/content/academy/a1Numbers';
import { A1_ARTICLE_EXAMPLES, A1_ARTICLE_RULES } from '../src/content/academy/a1Articles';
import { A1_VOCAB_REQUIRED_IDS, A1_VOCAB_TOPICS } from '../src/content/academy/a1Vocabulary';
import { WORDS } from '../src/content/bank';
import {
  buildNumbersExam,
  evaluateExamAttempt,
  generateAcademyModuleExam,
} from '../src/lib/examEngine';
import {
  getCurrentLevel,
  initialState,
  isShowAllLockedModulesEnabled,
  reducer,
  XP,
  type ProgressState,
} from '../src/state/progress';
import { loadProgress, saveProgress } from '../src/state/storage';
import {
  academyStudyStats,
  getAcademyModuleProgress,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
} from '../src/state/academyProgress';
import {
  buildA1LearningPathNodes,
  buildLevelLearningPathNodes,
  getCourseOverview,
} from '../src/lib/courseOverview';

function makeSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

describe('Phase A: A1 Complete Learning Academy', () => {
  describe('1. 11-Module A1 Curriculum Architecture', () => {
    it('defines all 11 ordered A1 Academy modules with Phase A modules enabled', () => {
      expect(A1_ACADEMY_MODULES.map((m) => m.id)).toEqual([
        'alphabet',
        'numbers',
        'articles',
        'verbs',
        'essential-verbs',
        'adjectives',
        'adverbs',
        'prepositions',
        'conjunctions',
        'vocabulary',
        'final-exam',
      ]);
      expect(A1_ACADEMY_MODULES.filter((m) => m.implemented)).toHaveLength(11);
      expect(A1_ACADEMY_MODULES.filter((m) => !m.implemented)).toHaveLength(0);
    });
  });

  describe('2. Alphabet Module (21 standard Italian letters)', () => {
    it('teaches exactly 21 standard Italian letters with complete BN/EN guidance and examples', () => {
      expect(A1_ALPHABET_LETTERS).toHaveLength(21);
      expect(A1_ALPHABET_LETTERS.map((l) => l.letter)).toEqual([
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'Z',
      ]);
      for (const l of A1_ALPHABET_LETTERS) {
        expect(l.italianName.length).toBeGreaterThan(0);
        expect(l.phoneticBn.length).toBeGreaterThan(0);
        expect(l.phoneticEn.length).toBeGreaterThan(0);
        expect(l.guide.bn.length).toBeGreaterThan(5);
        expect(l.guide.en.length).toBeGreaterThan(5);
        expect(l.exampleIt.length).toBeGreaterThan(0);
      }
    });

    it('generates a 10-question randomized Alphabet Sound Quiz without duplicates', () => {
      const q1 = generateAcademyModuleExam('alphabet', makeSeededRng(101));
      const q2 = generateAcademyModuleExam('alphabet', makeSeededRng(202));
      expect(q1).toHaveLength(10);
      expect(q2).toHaveLength(10);
      expect(new Set(q1.map((q) => q.id)).size).toBe(10);
      expect(q1.map((q) => q.id)).not.toEqual(q2.map((q) => q.id));
      for (const q of q1) {
        expect(q.audioIt).toBeTruthy();
        expect(q.options).toHaveLength(4);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(4);
      }
    });
  });

  describe('3. Numbers Module (0–100)', () => {
    it('teaches all 101 numbers (0–100) with accurate spellings, phonetics, and examples', () => {
      expect(A1_NUMBERS).toHaveLength(101);
      expect(A1_NUMBERS[0]?.value).toBe(0);
      expect(A1_NUMBERS[0]?.it).toBe('zero');
      expect(A1_NUMBERS[21]?.it).toBe('ventuno');
      expect(A1_NUMBERS[23]?.it).toBe('ventitré');
      expect(A1_NUMBERS[28]?.it).toBe('ventotto');
      expect(A1_NUMBERS[31]?.it).toBe('trentuno');
      expect(A1_NUMBERS[99]?.it).toBe('novantanove');
      expect(A1_NUMBERS[100]?.it).toBe('cento');

      for (const n of A1_NUMBERS) {
        expect(n.it.length).toBeGreaterThan(0);
        expect(n.phoneticBn.length).toBeGreaterThan(0);
        expect(n.phoneticEn.length).toBeGreaterThan(0);
        expect(n.exampleIt.length).toBeGreaterThan(0);
        expect(n.exampleTr.bn.length).toBeGreaterThan(0);
        expect(n.exampleTr.en.length).toBeGreaterThan(0);
      }
    });

    it('builds a 30-question exam containing all first 20 numbers (1–20) plus 10 unique numbers from the rest with zero duplicates', () => {
      const exam1 = buildNumbersExam(makeSeededRng(11));
      const exam2 = buildNumbersExam(makeSeededRng(77));

      expect(exam1).toHaveLength(30);
      const ids1 = exam1.map((q) => q.id);
      expect(new Set(ids1).size).toBe(30);

      // Every single number 1..20 must appear
      for (let i = 1; i <= 20; i++) {
        expect(ids1).toContain(`exam-num-${i}`);
      }
      // Exactly 10 extended questions
      const extended = exam1.filter((q) => q.tier === 'extended');
      expect(extended).toHaveLength(10);

      // Order & draws differ across attempts
      expect(ids1).not.toEqual(exam2.map((q) => q.id));
    });
  });

  describe('4. Articles Module (Definite & Indefinite)', () => {
    it('covers all 7 definite and 4 indefinite articles with Bengali explanations, exceptions, common mistakes, and examples', () => {
      expect(A1_ARTICLE_RULES).toHaveLength(5);
      expect(A1_ARTICLE_EXAMPLES).toHaveLength(16);

      const allFormLabels = A1_ARTICLE_RULES.flatMap((r) => r.forms.map((f) => f.article)).join(' ');
      for (const token of ['il', 'lo', "l'", 'la', 'i', 'gli', 'le', 'un', 'uno', 'una', "un'"]) {
        expect(allFormLabels).toContain(token);
      }

      const exampleArticles = new Set(A1_ARTICLE_EXAMPLES.map((e) => e.article));
      for (const form of ['il', 'lo', 'la', "l'", 'i', 'gli', 'le', 'un', 'uno', 'una', "un'"]) {
        expect(exampleArticles.has(form), `Missing study example for article: ${form}`).toBe(true);
      }
    });

    it('generates a 10-question randomized Articles exam without duplicates', () => {
      const q1 = generateAcademyModuleExam('articles', makeSeededRng(33));
      const q2 = generateAcademyModuleExam('articles', makeSeededRng(99));
      expect(q1).toHaveLength(10);
      expect(new Set(q1.map((q) => q.id)).size).toBe(10);
      expect(q1.map((q) => q.id)).not.toEqual(q2.map((q) => q.id));
    });

    it('organizes existing canonical A1 words into topic groups without duplication and locks A1 Final Exam until all categories complete', () => {
      expect(A1_VOCAB_TOPICS.length).toBe(20);
      expect(A1_VOCAB_REQUIRED_IDS.length).toBe(WORDS.A1.length);
      expect(new Set(A1_VOCAB_REQUIRED_IDS).size).toBe(WORDS.A1.length);

      const vq1 = generateAcademyModuleExam('vocabulary', makeSeededRng(12));
      const vq2 = generateAcademyModuleExam('vocabulary', makeSeededRng(48));
      expect(vq1).toHaveLength(10);
      expect(new Set(vq1.map((q) => q.id)).size).toBe(10);
      expect(vq1.map((q) => q.id)).not.toEqual(vq2.map((q) => q.id));

      const s = initialState();
      expect(isAcademyModuleUnlocked(s.academy, 'vocabulary')).toBe(false);
      expect(isAcademyModuleUnlocked(s.academy, 'final-exam')).toBe(false);
    });
  });

  describe('5. Exam Engine, Sequential Unlocks, Anti-Skip Gate & Backward-Compatible Persistence', () => {
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

    it('gates section exam until all required items are studied and enforces max 3 incorrect on 10-Q exams', () => {
      const today = '2026-11-16';
      let s: ProgressState = initialState();

      // Module 1 unlocked; Modules 2 & 3 locked initially
      expect(isAcademyModuleUnlocked(s.academy, 'alphabet')).toBe(true);
      expect(isAcademyModuleUnlocked(s.academy, 'numbers')).toBe(false);
      expect(isAcademyModuleUnlocked(s.academy, 'articles')).toBe(false);

      // Even if submitAcademyExam is dispatched before all 21 letters are studied, completion stays false
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: 'premature-attempt',
        moduleId: 'alphabet',
        total: 10,
        correct: 10,
        incorrect: 0,
        maxIncorrect: 3,
        today,
      });
      expect(isAcademyModuleCompleted(s.academy, 'alphabet')).toBe(false);
      expect(isAcademyModuleUnlocked(s.academy, 'numbers')).toBe(false);

      // Study all 21 letters one by one
      for (const l of A1_ALPHABET_LETTERS) {
        s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: l.id });
      }
      expect(academyStudyStats(s.academy, 'alphabet').readyForExam).toBe(true);

      // Evaluate a failing exam (4 incorrect > max 3)
      const questions = generateAcademyModuleExam('alphabet', makeSeededRng(5));
      const failSelections: Record<string, number> = {};
      questions.forEach((q, idx) => {
        failSelections[q.id] = idx < 4 ? (q.answer + 1) % q.options.length : q.answer;
      });
      const failEval = evaluateExamAttempt({
        attemptId: 'alpha-fail-1',
        moduleId: 'alphabet',
        questions,
        selections: failSelections,
        maxIncorrect: 3,
      });
      expect(failEval.incorrect).toBe(4);
      expect(failEval.passed).toBe(false);

      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: failEval.attemptId,
        moduleId: 'alphabet',
        total: failEval.total,
        correct: failEval.correct,
        incorrect: failEval.incorrect,
        maxIncorrect: failEval.maxIncorrect,
        today,
      });
      expect(getAcademyModuleProgress(s.academy, 'alphabet').failedAttempts).toBe(1);
      expect(isAcademyModuleCompleted(s.academy, 'alphabet')).toBe(false);
      expect(isAcademyModuleUnlocked(s.academy, 'numbers')).toBe(false);

      // Evaluate a passing exam (3 incorrect <= max 3 -> 7/10)
      const passSelections: Record<string, number> = {};
      questions.forEach((q, idx) => {
        passSelections[q.id] = idx < 3 ? (q.answer + 1) % q.options.length : q.answer;
      });
      const passEval = evaluateExamAttempt({
        attemptId: 'alpha-pass-1',
        moduleId: 'alphabet',
        questions,
        selections: passSelections,
        maxIncorrect: 3,
      });
      expect(passEval.incorrect).toBe(3);
      expect(passEval.passed).toBe(true);

      const xpBeforePass = s.xp;
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: passEval.attemptId,
        moduleId: 'alphabet',
        total: passEval.total,
        correct: passEval.correct,
        incorrect: passEval.incorrect,
        maxIncorrect: passEval.maxIncorrect,
        today,
      });

      expect(isAcademyModuleCompleted(s.academy, 'alphabet')).toBe(true);
      expect(isAcademyModuleUnlocked(s.academy, 'numbers')).toBe(true);
      expect(s.xp).toBe(xpBeforePass + 7 * XP.correctAnswer + XP.academyModuleComplete);

      // Re-submitting the SAME attemptId never awards XP or changes attempt counts
      const afterFirstSubmitXp = s.xp;
      const attemptsBeforeDup = getAcademyModuleProgress(s.academy, 'alphabet').attempts;
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: passEval.attemptId,
        moduleId: 'alphabet',
        total: passEval.total,
        correct: passEval.correct,
        incorrect: passEval.incorrect,
        maxIncorrect: passEval.maxIncorrect,
        today,
      });
      expect(s.xp).toBe(afterFirstSubmitXp);
      expect(getAcademyModuleProgress(s.academy, 'alphabet').attempts).toBe(attemptsBeforeDup);
    });

    it('preserves pre-Academy localStorage progress data seamlessly without loss', () => {
      const legacyPayload = {
        version: 1,
        settings: { explainLang: 'en', dailyGoalMinutes: 30 },
        xp: 250,
        lessons: {
          'a1-u1-l1': { bestScore: 0.9, completed: true, completedAt: '2026-11-10', viewed: ['phrases', 'quiz'] },
        },
        cards: {},
        mistakes: {},
        days: { '2026-11-10': { seconds: 300, tasks: ['lesson'] } },
        saved: ['a1-u1-l1:ciao'],
        storiesDone: {},
        bookmarkedStories: [],
        listeningScores: {},
        readingDone: {},
        writingDone: [],
        speakingDone: [],
        assessments: {},
        puzzleMistakes: {},
      };
      store.set('italianpro.progress.v1', JSON.stringify(legacyPayload));

      let loaded = loadProgress();
      expect(loaded.xp).toBe(250);
      expect(loaded.settings.explainLang).toBe('en');
      expect(loaded.saved).toContain('a1-u1-l1:ciao');
      expect(loaded.lessons['a1-u1-l1']?.completed).toBe(true);
      expect(isAcademyModuleUnlocked(loaded.academy, 'alphabet')).toBe(true);

      loaded = reducer(loaded, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: 'alpha-a' });
      expect(saveProgress(loaded)).toBe(true);
      const reloaded = loadProgress();
      expect(reloaded.xp).toBe(250);
      expect(reloaded.academy?.modules.alphabet?.studiedItems).toContain('alpha-a');
      expect(getCurrentLevel(reloaded)).toBe('A1');
    });
  });

  describe('6. Dynamic Home Course Overview & Connected Vertical Learning Path', () => {
    const today = '2026-11-16';

    it('switches active CEFR course (A1/A2/B1/B2), persists currentLevel, and projects isolated per-level overviews', () => {
      let s = initialState();
      expect(getCurrentLevel(s)).toBe('A1');

      const a1 = getCourseOverview(s, 'A1');
      expect(a1.levelId).toBe('A1');
      expect(a1.completedModules).toBe(0);
      expect(a1.totalModules).toBe(11);
      expect(a1.percentage).toBe(0);
      expect(a1.started).toBe(false);
      expect(a1.nextTitle).toBe('1. Alphabet');
      expect(a1.continueRoute).toBe('/academy/a1/alphabet');
      expect(a1.hubRoute).toBe('/level/A1');

      // Switch to A2 -> A2 overview uses A2's own Structured Academy curriculum, never A1 modules
      const a2Mods = getAcademyModules('A2');
      s = reducer(s, { type: 'setCurrentLevel', level: 'A2' });
      expect(getCurrentLevel(s)).toBe('A2');
      const a2 = getCourseOverview(s, 'A2');
      expect(a2.levelId).toBe('A2');
      expect(a2.totalModules).toBe(a2Mods.length);
      expect(a2.nextTitle).toBe(`${a2Mods[0]!.order}. ${a2Mods[0]!.title}`);
      expect(a2.nextTitle).not.toContain('Alphabet');
      expect(a2.hubRoute).toBe('/level/A2');

      // Switch to B1 and B2 -> each uses its own Structured Academy curriculum
      const b1Mods = getAcademyModules('B1');
      const b2Mods = getAcademyModules('B2');
      s = reducer(s, { type: 'setCurrentLevel', level: 'B1' });
      expect(getCourseOverview(s, 'B1').nextTitle).toBe(`${b1Mods[0]!.order}. ${b1Mods[0]!.title}`);
      s = reducer(s, { type: 'setCurrentLevel', level: 'B2' });
      expect(getCourseOverview(s, 'B2').nextTitle).toBe(`${b2Mods[0]!.order}. ${b2Mods[0]!.title}`);

      // Persist & reload preserves selected currentLevel
      expect(saveProgress(s)).toBe(true);
      const reloaded = loadProgress();
      expect(getCurrentLevel(reloaded)).toBe('B2');
    });

    it('enforces exact 11-module A1 sequence, strict sequential unlock, fail non-unlock, and revision access', () => {
      let s = initialState();
      const nodes0 = buildA1LearningPathNodes(s);
      expect(nodes0.map((n) => `${n.order}. ${n.title}`)).toEqual([
        '1. Alphabet',
        '2. Numbers (0–100)',
        '3. Articles',
        '4. Verbs & Conjugation',
        '5. Essential Verbs',
        '6. Adjectives',
        '7. Adverbs',
        '8. Prepositions',
        '9. Conjunctions',
        '10. Topic-wise Vocabulary',
        '11. A1 Final Examination',
      ]);

      expect(nodes0[0]?.status).toBe('current');
      for (let i = 1; i < nodes0.length; i++) {
        expect(nodes0[i]?.status).toBe('locked');
      }

      // Study all 21 letters and fail Alphabet quiz -> Numbers stays locked
      for (const l of A1_ALPHABET_LETTERS) {
        s = reducer(s, { type: 'studyAcademyItem', moduleId: 'alphabet', itemId: l.id });
      }
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: 'alpha-fail',
        moduleId: 'alphabet',
        total: 10,
        correct: 5,
        incorrect: 5,
        maxIncorrect: 3,
        today,
      });
      const nodesAfterFail = buildA1LearningPathNodes(s);
      expect(nodesAfterFail[0]?.status).toBe('current');
      expect(nodesAfterFail[1]?.status).toBe('locked');

      // Pass Alphabet quiz -> Alphabet becomes completed (still accessible), Numbers becomes current, Articles stays locked
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: 'alpha-pass',
        moduleId: 'alphabet',
        total: 10,
        correct: 9,
        incorrect: 1,
        maxIncorrect: 3,
        today,
      });
      const nodesAfterPass = buildA1LearningPathNodes(s);
      expect(nodesAfterPass[0]?.status).toBe('completed');
      expect(nodesAfterPass[1]?.status).toBe('current');
      expect(nodesAfterPass[2]?.status).toBe('locked');
      expect(nodesAfterPass[10]?.status).toBe('locked');

      // Home A1 overview now targets 2. Numbers (0–100)
      const a1Next = getCourseOverview(s, 'A1');
      expect(a1Next.completedModules).toBe(1);
      expect(a1Next.percentage).toBe(9);
      expect(a1Next.started).toBe(true);
      expect(a1Next.nextTitle).toBe('2. Numbers (0–100)');
      expect(a1Next.continueRoute).toBe('/academy/a1/numbers');

      // A2 path builder uses A2's own Structured Academy curriculum cleanly
      const a2Nodes = buildLevelLearningPathNodes(s, 'A2');
      const a2Mods = getAcademyModules('A2');
      expect(a2Nodes).toHaveLength(a2Mods.length);
      expect(a2Nodes[0]?.title).toBe(a2Mods[0]!.title);
    });

    it('supports Developer Testing Toggle persistence without modifying actual unlock status, completion, or XP', () => {
      let s = initialState();
      expect(isShowAllLockedModulesEnabled(s)).toBe(false);

      // Enable Show All Locked Modules
      s = reducer(s, { type: 'setShowAllLockedModules', enabled: true });
      expect(isShowAllLockedModulesEnabled(s)).toBe(true);

      // Actual unlock status remains strictly sequential
      expect(isAcademyModuleUnlocked(s.academy, 'alphabet')).toBe(true);
      expect(isAcademyModuleUnlocked(s.academy, 'numbers')).toBe(false);
      expect(isAcademyModuleUnlocked(s.academy, 'articles')).toBe(false);
      expect(isAcademyModuleUnlocked(s.academy, 'vocabulary')).toBe(false);

      // Interacting with or submitting an exam on a locked module during testing mode never alters XP or completion
      const xpBefore = s.xp;
      s = reducer(s, { type: 'studyAcademyItem', moduleId: 'numbers', itemId: 'num-0' });
      expect(getAcademyModuleProgress(s.academy, 'numbers').studiedItems).toEqual([]);

      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: 'testing-locked-numbers',
        moduleId: 'numbers',
        total: 30,
        correct: 30,
        incorrect: 0,
        maxIncorrect: 9,
        today,
      });
      expect(s.xp).toBe(xpBefore);
      expect(isAcademyModuleCompleted(s.academy, 'numbers')).toBe(false);
      expect(isAcademyModuleUnlocked(s.academy, 'articles')).toBe(false);

      // Persist & reload keeps toggle ON
      expect(saveProgress(s)).toBe(true);
      const reloaded = loadProgress();
      expect(isShowAllLockedModulesEnabled(reloaded)).toBe(true);

      // Disabling restores OFF cleanly
      const turnedOff = reducer(reloaded, { type: 'setShowAllLockedModules', enabled: false });
      expect(isShowAllLockedModulesEnabled(turnedOff)).toBe(false);
      expect(isAcademyModuleUnlocked(turnedOff.academy, 'numbers')).toBe(false);
    });
  });
});
