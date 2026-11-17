import { describe, expect, it } from 'vitest';
import { A1_ACADEMY_MODULES, A2_ACADEMY_MODULES, B1_ACADEMY_MODULES, B2_ACADEMY_MODULES } from '../src/content/academy/curriculum';
import {
  A1_GREETINGS_DRILL_ITEMS,
  A1_GREETINGS_EXAM_POOL,
  A1_GREETINGS_ITEMS,
  A1_GREETINGS_REQUIRED_IDS,
  A1_GREETING_DIALOGUES,
  GREETINGS_THEORY_CONFIG,
} from '../src/content/academy/a1GreetingsIntro';
import {
  A1_NOUNS_DRILL_ITEMS,
  A1_NOUNS_EXAM_POOL,
  A1_NOUNS_LIST,
  A1_NOUNS_REQUIRED_IDS,
  NOUNS_THEORY_CONFIG,
} from '../src/content/academy/a1NounsPlurals';
import {
  A1_PRONOUNS_POSSESSIVES_DRILL_ITEMS,
  A1_PRONOUNS_POSSESSIVES_EXAM_POOL,
  A1_PRONOUNS_POSSESSIVES_LIST,
  A1_PRONOUNS_POSSESSIVES_REQUIRED_IDS,
  PRONOUNS_POSSESSIVES_THEORY_CONFIG,
} from '../src/content/academy/a1PronounsPossessives';
import { A1_ADJECTIVES_LIST } from '../src/content/academy/a1Adjectives';
import {
  A1_SENTENCE_ITEMS,
  A1_SENTENCE_STRUCTURE_DRILL_ITEMS,
  A1_SENTENCE_STRUCTURE_EXAM_POOL,
  A1_SENTENCE_STRUCTURE_REQUIRED_IDS,
  SENTENCE_STRUCTURE_THEORY_CONFIG,
} from '../src/content/academy/a1SentenceStructure';
import {
  A1_TIME_DATES_DIALOGUES,
  A1_TIME_DATES_DRILL_ITEMS,
  A1_TIME_DATES_EXAM_POOL,
  A1_TIME_DATES_ITEMS,
  A1_TIME_DATES_REQUIRED_IDS,
  TIME_DATES_THEORY_CONFIG,
} from '../src/content/academy/a1TimeDates';
import { A1_VOCAB_TOPICS } from '../src/content/academy/a1Vocabulary';
import {
  A1_EVERYDAY_COMM_DRILL_ITEMS,
  A1_EVERYDAY_COMM_EXAM_POOL,
  A1_EVERYDAY_COMM_REQUIRED_IDS,
  EVERYDAY_COMM_DIALOGUES,
  EVERYDAY_COMM_EXPRESSIONS,
  EVERYDAY_COMM_THEORY_CONFIG,
  EVERYDAY_COMM_TOPICS,
} from '../src/content/academy/a1EverydayCommunication';
import {
  A1_CULTURE_EXERCISES,
  A1_CULTURE_GUIDES,
  A1_CULTURE_PHRASES,
  A1_CULTURE_SURVIVAL_DRILL_ITEMS,
  A1_CULTURE_SURVIVAL_EXAM_POOL,
  A1_CULTURE_SURVIVAL_REQUIRED_IDS,
  CULTURE_SURVIVAL_THEORY_CONFIG,
} from '../src/content/academy/a1CultureSurvival';
import {
  A1_LISTENING_EXERCISES,
  A1_LISTENING_SPEAKING_DRILL_ITEMS,
  A1_LISTENING_SPEAKING_EXAM_POOL,
  A1_LISTENING_SPEAKING_REQUIRED_IDS,
  A1_SPEAKING_EXERCISES,
  LISTENING_SPEAKING_THEORY_CONFIG,
} from '../src/content/academy/a1ListeningSpeaking';
import {
  A1_READING_PASSAGES,
  A1_READING_WRITING_DRILL_ITEMS,
  A1_READING_WRITING_EXAM_POOL,
  A1_READING_WRITING_REQUIRED_IDS,
  A1_WRITING_TASKS,
  READING_WRITING_THEORY_CONFIG,
  evaluateA1WritingTask,
} from '../src/content/academy/a1ReadingWriting';
import { A1_FINAL_EXAM_BANK, type A1FinalExamTopic } from '../src/content/academy/a1FinalExam';
import type { AcademyExamQuestion, AcademyTheoryConfig } from '../src/content/academy/types';
import { generateAcademyModuleExam } from '../src/lib/examEngine';
import { initialState, reducer } from '../src/state/progress';
import { isAcademyModuleCompleted, isAcademyModuleUnlocked } from '../src/state/academyProgress';
import { WORDS } from '../src/content/bank';

const BENGALI_REGEX = /[\u0980-\u09FF]/;

function makeSeededRng(seed: number): () => number {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function assertTheoryClean(cfg: AcademyTheoryConfig) {
  expect(cfg.title.bn.trim().length).toBeGreaterThan(0);
  expect(BENGALI_REGEX.test(cfg.title.bn)).toBe(true);
  expect(cfg.title.en.trim().length).toBeGreaterThan(0);
  expect(BENGALI_REGEX.test(cfg.title.en)).toBe(false);
  expect(BENGALI_REGEX.test(cfg.intro.en)).toBe(false);
  for (const sec of cfg.sections) {
    expect(BENGALI_REGEX.test(sec.heading.bn)).toBe(true);
    expect(BENGALI_REGEX.test(sec.heading.en)).toBe(false);
    expect(BENGALI_REGEX.test(sec.summary.en)).toBe(false);
  }
}

function assertPoolClean(pool: readonly AcademyExamQuestion[], label: string) {
  expect(pool.length, `${label} pool size`).toBeGreaterThanOrEqual(20);
  const ids = new Set<string>();
  for (const q of pool) {
    expect(ids.has(q.id), `Duplicate ID ${q.id}`).toBe(false);
    ids.add(q.id);
    expect(BENGALI_REGEX.test(q.prompt.bn), `Missing BN in ${q.id}`).toBe(true);
    expect(BENGALI_REGEX.test(q.prompt.en), `BN leaked to EN prompt in ${q.id}`).toBe(false);
    expect(BENGALI_REGEX.test(q.explanation.bn), `Missing BN explanation in ${q.id}`).toBe(true);
    expect(BENGALI_REGEX.test(q.explanation.en), `BN leaked to EN explanation in ${q.id}`).toBe(false);
    expect(q.options.length).toBe(4);
    expect(new Set(q.options).size).toBe(4);
    expect(q.answer).toBeGreaterThanOrEqual(0);
    expect(q.answer).toBeLessThan(4);
  }
}

describe('Complete 20-Module CEFR A1 Curriculum Expansion', () => {
  it('registers exact 20 modules in exact required sequence with valid routes and section labels', () => {
    expect(A1_ACADEMY_MODULES).toHaveLength(20);
    expect(A1_ACADEMY_MODULES.map((m) => [m.order, m.id, m.sectionLabel?.id])).toEqual([
      [1, 'alphabet', 'foundation'],
      [2, 'numbers', 'foundation'],
      [3, 'greetings-intro', 'foundation'],
      [4, 'articles', 'grammar'],
      [5, 'nouns-gender-plurals', 'grammar'],
      [6, 'pronouns-possessives', 'grammar'],
      [7, 'verbs', 'grammar'],
      [8, 'essential-verbs', 'grammar'],
      [9, 'adjectives', 'grammar'],
      [10, 'adverbs', 'grammar'],
      [11, 'prepositions', 'grammar'],
      [12, 'conjunctions', 'grammar'],
      [13, 'sentence-structure', 'grammar'],
      [14, 'time-dates', 'grammar'],
      [15, 'vocabulary', 'vocab-comm'],
      [16, 'everyday-communication', 'vocab-comm'],
      [17, 'culture-survival', 'vocab-comm'],
      [18, 'listening-speaking', 'four-skills'],
      [19, 'reading-writing', 'four-skills'],
      [20, 'final-exam', 'assessment'],
    ]);

    for (const m of A1_ACADEMY_MODULES) {
      expect(m.implemented).toBe(true);
      expect(m.route).toBe(`/academy/a1/${m.id}`);
    }

    // Preserve A2/B1/B2 courses untouched
    expect(A2_ACADEMY_MODULES.length).toBeGreaterThan(0);
    expect(B1_ACADEMY_MODULES.length).toBeGreaterThan(0);
    expect(B2_ACADEMY_MODULES.length).toBeGreaterThan(0);
  });

  it('meets content volume and pedagogical coverage targets across all 9 new A1 modules & 4 curriculum gap additions', () => {
    // Module 3: Greetings & Self Introduction
    expect(A1_GREETINGS_ITEMS.length).toBeGreaterThanOrEqual(36);
    expect(A1_GREETING_DIALOGUES.length).toBe(10);
    expect(A1_GREETINGS_REQUIRED_IDS.length).toBe(A1_GREETINGS_ITEMS.length + A1_GREETING_DIALOGUES.length);

    // Module 5: Nouns, Gender & Plurals
    expect(A1_NOUNS_LIST.length).toBeGreaterThanOrEqual(100);
    expect(A1_NOUNS_REQUIRED_IDS.length).toBe(A1_NOUNS_LIST.length);

    // Module 6: Personal & Possessive Pronouns (with singular family rule)
    expect(A1_PRONOUNS_POSSESSIVES_LIST.length).toBeGreaterThanOrEqual(40);
    expect(A1_PRONOUNS_POSSESSIVES_REQUIRED_IDS.length).toBe(A1_PRONOUNS_POSSESSIVES_LIST.length);
    const ppCorpus = A1_PRONOUNS_POSSESSIVES_LIST.map((x) => `${x.it} ${x.exampleIt}`).join(' ');
    expect(ppCorpus).toContain('mia madre');
    expect(ppCorpus).toContain('la loro madre');

    // Module 9 gap update: demonstratives in Adjectives
    const adjBases = A1_ADJECTIVES_LIST.map((a) => a.base);
    expect(adjBases).toContain('questo');
    expect(adjBases).toContain('quello');

    // Module 13: Sentence Structure & All 8 Question Words
    expect(A1_SENTENCE_ITEMS.length).toBeGreaterThanOrEqual(60);
    expect(A1_SENTENCE_STRUCTURE_REQUIRED_IDS.length).toBe(A1_SENTENCE_ITEMS.length);
    const whCorpus = A1_SENTENCE_ITEMS.map((x) => x.it.toLowerCase()).join(' ');
    for (const qWord of ['chi', 'che cosa', 'dove', 'quando', 'come', 'perché', 'quanto', 'quale']) {
      expect(whCorpus).toContain(qWord);
    }

    // Module 14: Time, Days, Months & Dates
    expect(A1_TIME_DATES_ITEMS.length).toBeGreaterThanOrEqual(80);
    expect(A1_TIME_DATES_DIALOGUES).toHaveLength(15);
    expect(A1_TIME_DATES_REQUIRED_IDS.length).toBe(A1_TIME_DATES_ITEMS.length + A1_TIME_DATES_DIALOGUES.length);

    // Module 15 gap update: indefinites in A1 vocabulary without duplicates
    expect(A1_VOCAB_TOPICS).toHaveLength(21);
    const wordKeys = WORDS.A1.map((w) => w.key);
    expect(new Set(wordKeys).size).toBe(wordKeys.length);
    const italianWords = new Set(WORDS.A1.map((w) => w.it.toLowerCase()));
    for (const ind of ['ogni', 'qualche', 'alcuni', 'alcune', 'tutto', 'ciascuno']) {
      expect(italianWords.has(ind)).toBe(true);
    }

    // Module 16: Everyday Communication (14 topics, >=150 expr, >=28 dialogues)
    expect(EVERYDAY_COMM_TOPICS).toHaveLength(14);
    expect(EVERYDAY_COMM_EXPRESSIONS.length).toBeGreaterThanOrEqual(150);
    expect(EVERYDAY_COMM_DIALOGUES.length).toBeGreaterThanOrEqual(28);
    expect(A1_EVERYDAY_COMM_REQUIRED_IDS.length).toBe(
      EVERYDAY_COMM_EXPRESSIONS.length + EVERYDAY_COMM_DIALOGUES.length,
    );

    // Module 17: Culture & Survival (>=100 phrases, 15 guides, 20 exercises)
    expect(A1_CULTURE_PHRASES.length).toBeGreaterThanOrEqual(100);
    expect(A1_CULTURE_GUIDES).toHaveLength(15);
    expect(A1_CULTURE_EXERCISES).toHaveLength(20);
    expect(A1_CULTURE_SURVIVAL_REQUIRED_IDS.length).toBe(
      A1_CULTURE_PHRASES.length + A1_CULTURE_GUIDES.length + A1_CULTURE_EXERCISES.length,
    );

    // Module 18: Listening (30) & Speaking (30)
    expect(A1_LISTENING_EXERCISES).toHaveLength(30);
    expect(A1_SPEAKING_EXERCISES).toHaveLength(30);
    expect(A1_LISTENING_SPEAKING_REQUIRED_IDS).toHaveLength(60);

    // Module 19: Reading (20) & Writing (15)
    expect(A1_READING_PASSAGES).toHaveLength(20);
    expect(A1_WRITING_TASKS).toHaveLength(15);
    expect(A1_READING_WRITING_REQUIRED_IDS).toHaveLength(35);

    // Module 20 alignment update: 120 cumulative final exam questions preserving 14 topics
    expect(A1_FINAL_EXAM_BANK.length).toBe(120);
    expect(new Set<A1FinalExamTopic>(A1_FINAL_EXAM_BANK.map((q) => q.topic)).size).toBe(14);
  });

  it('enforces multi-criteria writing evaluation (rejects single-keyword cheating & repeated fragments)', () => {
    const task1 = A1_WRITING_TASKS[0]!; // Self introduction email/note
    expect(evaluateA1WritingTask(task1, 'ciao').passed).toBe(false);
    expect(evaluateA1WritingTask(task1, 'ciao nome anni abito').passed).toBe(false);
    expect(evaluateA1WritingTask(task1, 'Mi chiamo Luca. Mi chiamo Luca. Mi chiamo Luca.').passed).toBe(false);
    expect(evaluateA1WritingTask(task1, 'ciao! mi chiamo tariq e sono del bangladesh senza punteggiatura finale').passed).toBe(false);

    const validDraft =
      'Ciao amici! Mi chiamo Tariq e ho venticinque anni. Sono del Bangladesh, ma adesso abito a Milano. Studio italiano ogni mattina.';
    const res = evaluateA1WritingTask(task1, validDraft);
    expect(res.passed).toBe(true);
    expect(res.wordCount).toBeGreaterThanOrEqual(task1.minWords);
    expect(res.sentenceCount).toBeGreaterThanOrEqual(task1.minSentences);
  });

  it('keeps strict EN/BN separation and generates 10 unique exam questions for every new A1 module', () => {
    for (const cfg of [
      GREETINGS_THEORY_CONFIG,
      NOUNS_THEORY_CONFIG,
      PRONOUNS_POSSESSIVES_THEORY_CONFIG,
      SENTENCE_STRUCTURE_THEORY_CONFIG,
      TIME_DATES_THEORY_CONFIG,
      EVERYDAY_COMM_THEORY_CONFIG,
      CULTURE_SURVIVAL_THEORY_CONFIG,
      LISTENING_SPEAKING_THEORY_CONFIG,
      READING_WRITING_THEORY_CONFIG,
    ]) {
      assertTheoryClean(cfg);
    }

    for (const drill of [
      ...A1_GREETINGS_DRILL_ITEMS,
      ...A1_NOUNS_DRILL_ITEMS,
      ...A1_PRONOUNS_POSSESSIVES_DRILL_ITEMS,
      ...A1_SENTENCE_STRUCTURE_DRILL_ITEMS,
      ...A1_TIME_DATES_DRILL_ITEMS,
      ...A1_EVERYDAY_COMM_DRILL_ITEMS,
      ...A1_CULTURE_SURVIVAL_DRILL_ITEMS,
      ...A1_LISTENING_SPEAKING_DRILL_ITEMS,
      ...A1_READING_WRITING_DRILL_ITEMS,
    ]) {
      expect(BENGALI_REGEX.test(drill.cueBn)).toBe(true);
      expect(BENGALI_REGEX.test(drill.cueEn)).toBe(false);
      expect(BENGALI_REGEX.test(drill.feedbackDetail.en)).toBe(false);
    }

    assertPoolClean(A1_GREETINGS_EXAM_POOL, 'greetings-intro');
    assertPoolClean(A1_NOUNS_EXAM_POOL, 'nouns-gender-plurals');
    assertPoolClean(A1_PRONOUNS_POSSESSIVES_EXAM_POOL, 'pronouns-possessives');
    assertPoolClean(A1_SENTENCE_STRUCTURE_EXAM_POOL, 'sentence-structure');
    assertPoolClean(A1_TIME_DATES_EXAM_POOL, 'time-dates');
    assertPoolClean(A1_EVERYDAY_COMM_EXAM_POOL, 'everyday-communication');
    assertPoolClean(A1_CULTURE_SURVIVAL_EXAM_POOL, 'culture-survival');
    assertPoolClean(A1_LISTENING_SPEAKING_EXAM_POOL, 'listening-speaking');
    assertPoolClean(A1_READING_WRITING_EXAM_POOL, 'reading-writing');

    const newModuleIds = [
      'greetings-intro',
      'nouns-gender-plurals',
      'pronouns-possessives',
      'sentence-structure',
      'time-dates',
      'everyday-communication',
      'culture-survival',
      'listening-speaking',
      'reading-writing',
    ] as const;

    for (const modId of newModuleIds) {
      const q1 = generateAcademyModuleExam(modId, makeSeededRng(101), 'A1');
      const q2 = generateAcademyModuleExam(modId, makeSeededRng(909), 'A1');
      expect(q1).toHaveLength(10);
      expect(new Set(q1.map((q) => q.id)).size).toBe(10);
      expect(q1.map((q) => q.id)).not.toEqual(q2.map((q) => q.id));
    }
  });

  it('migrates partial legacy progress seamlessly under the 20-module order and locks module 20 until 1..19 complete', () => {
    let s = initialState();
    // Simulate completing modules 1 and 2 only (Alphabet + Numbers)
    const today = '2026-11-17';
    const firstTwo = A1_ACADEMY_MODULES.slice(0, 2);
    for (const mod of firstTwo) {
      s = reducer(s, { type: 'completeAcademyTheory', moduleId: mod.id, level: 'A1' });
      for (const itemId of mod.requiredItemIds) {
        s = reducer(s, { type: 'studyAcademyItem', moduleId: mod.id, itemId, level: 'A1' });
      }
      s = reducer(s, {
        type: 'completeAcademyDrill',
        moduleId: mod.id,
        level: 'A1',
        correct: 10,
        total: 10,
        today,
      });
      s = reducer(s, {
        type: 'submitAcademyExam',
        attemptId: `mig-${mod.id}`,
        moduleId: mod.id,
        level: 'A1',
        total: mod.examQuestionCount,
        correct: mod.examQuestionCount,
        incorrect: 0,
        maxIncorrect: mod.maxIncorrect,
        today,
      });
      expect(isAcademyModuleCompleted(s.academy, mod.id, 'A1')).toBe(true);
    }

    // Module 3 (greetings-intro) should now be unlocked; module 4 (articles) and module 20 (final-exam) stay locked
    expect(isAcademyModuleUnlocked(s.academy, 'greetings-intro', 'A1')).toBe(true);
    expect(isAcademyModuleUnlocked(s.academy, 'articles', 'A1')).toBe(false);
    expect(isAcademyModuleUnlocked(s.academy, 'final-exam', 'A1')).toBe(false);
  });
});
