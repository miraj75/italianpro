import type { LevelId } from '../types';
import { A1_ALPHABET_REQUIRED_IDS } from './a1Alphabet';
import { A1_NUMBERS_REQUIRED_IDS } from './a1Numbers';
import { A1_ARTICLES_REQUIRED_IDS } from './a1Articles';
import { A1_VOCAB_REQUIRED_IDS } from './a1Vocabulary';
import {
  A2_ACADEMY_MODULES,
  B1_ACADEMY_MODULES,
  B2_ACADEMY_MODULES,
} from './curriculumA2B1B2';
import type { AcademyModuleId, AcademyModuleMeta } from './types';

export { A2_ACADEMY_MODULES, B1_ACADEMY_MODULES, B2_ACADEMY_MODULES };

/**
 * Complete 11-module CEFR A1 Learning Hub path.
 * Phase A activates Alphabet, Numbers (0–100), Articles, and Topic-based Vocabulary.
 * Phase B activates Verbs & Conjugation, Essential Verbs, Adjectives, Adverbs, Prepositions, Conjunctions.
 * Phase C activates A1 Final Exam (30 randomized questions across the complete A1 curriculum).
 */
export const A1_ACADEMY_MODULES: AcademyModuleMeta[] = [
  {
    id: 'alphabet',
    order: 1,
    phase: 'A',
    implemented: true,
    route: '/academy/a1/alphabet',
    title: 'Alphabet',
    subtitle: { bn: 'ইতালিয়ান বর্ণমালা (২১টি বর্ণ)', en: '21 standard Italian letters' },
    description: {
      bn: '২১টি মূল বর্ণের সঠিক ইতালিয়ান উচ্চারণ, বাংলা ও ইংরেজি গাইড এবং অডিও সাউন্ড কুইজ।',
      en: 'Master pronunciation for all 21 Italian letters with audio, phonetic cues, and a randomized sound quiz.',
      it: 'Padroneggia la pronuncia delle 21 lettere italiane con audio e quiz sonoro.',
    },
    requiredItemIds: A1_ALPHABET_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'numbers',
    order: 2,
    phase: 'A',
    implemented: true,
    route: '/academy/a1/numbers',
    title: 'Numbers (0–100)',
    subtitle: { bn: 'সংখ্যা ০ থেকে ১০০', en: 'Counting 0 through 100' },
    description: {
      bn: '০–১০০ পর্যন্ত সব সংখ্যা, বানান, বাংলা উচ্চারণ, ব্যবহার ও ৩০ প্রশ্নের পূর্ণ পরীক্ষা।',
      en: 'Learn all 101 numbers from zero to one hundred with rules, audio examples, and a 30-question exam.',
    },
    requiredItemIds: A1_NUMBERS_REQUIRED_IDS,
    examQuestionCount: 30,
    maxIncorrect: 3,
  },
  {
    id: 'articles',
    order: 3,
    phase: 'A',
    implemented: true,
    route: '/academy/a1/articles',
    title: 'Articles',
    subtitle: { bn: 'আর্টিকেল (il, lo, la, un...)', en: 'Definite & indefinite articles' },
    description: {
      bn: 'il, lo, la, l’, i, gli, le এবং un, uno, una, un’ — লিঙ্গ-বচন মিল, ব্যতিক্রম ও সাধারণ ভুল।',
      en: 'Complete rules for definite & indefinite articles, gender/number agreement, and common exceptions.',
    },
    requiredItemIds: A1_ARTICLES_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'verbs',
    order: 4,
    phase: 'B',
    implemented: false,
    route: '/academy/a1/verbs',
    title: 'Verbs & Conjugation',
    subtitle: { bn: 'ক্রিয়া ও রূপান্তর (-are, -ere, -ire)', en: '-are, -ere, -ire conjugation tables' },
    description: {
      bn: 'io, tu, lui/lei, noi, voi, loro অনুযায়ী নিয়মিত ও অনিয়মিত ক্রিয়ার পূর্ণ রূপান্তর।',
      en: 'Present-tense conjugation patterns across all six persons with audio examples.',
    },
    requiredItemIds: [],
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'essential-verbs',
    order: 5,
    phase: 'B',
    implemented: false,
    route: '/academy/a1/essential-verbs',
    title: 'Essential Verbs',
    subtitle: { bn: 'অপরিহার্য A1 ক্রিয়া', en: 'Verified CEFR A1 core verb list' },
    description: {
      bn: 'দৈনন্দিন যোগাযোগের অপরিহার্য ক্রিয়াগুলো একে একে অনুশীলন ও পরীক্ষা।',
      en: 'Step-by-step mastery of the verified CEFR A1 essential verb inventory.',
    },
    requiredItemIds: [],
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'adjectives',
    order: 6,
    phase: 'B',
    implemented: false,
    route: '/academy/a1/adjectives',
    title: 'Adjectives',
    subtitle: { bn: 'বিশেষণ ও লিঙ্গ-বচন মিল', en: 'Descriptive & agreement rules' },
    description: {
      bn: '-o/-a এবং -e বিশেষণের ব্যবহার, অবস্থান, ব্যতিক্রম ও অনুশীলন।',
      en: 'Adjective gender/number agreement, placement, and interactive drills.',
    },
    requiredItemIds: [],
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'adverbs',
    order: 7,
    phase: 'B',
    implemented: false,
    route: '/academy/a1/adverbs',
    title: 'Adverbs',
    subtitle: { bn: 'ক্রিয়াবিশেষণ (সময় ও স্থান)', en: 'Time, place, frequency & manner' },
    description: {
      bn: 'sempre, spesso, oggi, domani, molto, bene — বাক্যে সঠিক অবস্থান ও ব্যবহার।',
      en: 'Frequency, time, place, and manner adverbs with common mistake checks.',
    },
    requiredItemIds: [],
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'prepositions',
    order: 8,
    phase: 'B',
    implemented: false,
    route: '/academy/a1/prepositions',
    title: 'Prepositions',
    subtitle: { bn: 'পদান্বয়ী অব্যয় (di, a, da, in)', en: 'Simple & essential A1 prepositions' },
    description: {
      bn: 'di, a, da, in, con, su, per, tra/fra — শহর, দেশ, সময় ও যাতায়াতের ব্যবহার।',
      en: 'Core Italian prepositions for places, movement, time, and possession.',
    },
    requiredItemIds: [],
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'conjunctions',
    order: 9,
    phase: 'B',
    implemented: false,
    route: '/academy/a1/conjunctions',
    title: 'Conjunctions',
    subtitle: { bn: 'সংযোজক অব্যয় (e, ma, perché)', en: 'Connecting ideas smoothly' },
    description: {
      bn: 'e, o, ma, però, perché, quindi, quando ব্যবহার করে সহজ বাক্য সংযোগ।',
      en: 'Join A1 sentences naturally using core coordinating and subordinating conjunctions.',
    },
    requiredItemIds: [],
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'vocabulary',
    order: 10,
    phase: 'A',
    implemented: true,
    route: '/academy/a1/vocabulary',
    title: 'Topic-wise Vocabulary',
    subtitle: { bn: 'বিষয়ভিত্তিক শব্দভাণ্ডার', en: 'Topic-based A1 vocabulary' },
    description: {
      bn: 'দৈনন্দিন ২০টি বিষয়ে সাজানো A1 শব্দ, উদাহরণ বাক্য, অডিও ও পরীক্ষা।',
      en: 'Topic-organized A1 vocabulary with audio, contextual example sentences, and exam.',
    },
    requiredItemIds: A1_VOCAB_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'final-exam',
    order: 11,
    phase: 'C',
    implemented: false,
    route: '/academy/a1/final-exam',
    title: 'A1 Final Examination',
    subtitle: { bn: 'চূড়ান্ত A1 পরীক্ষা (৩০ প্রশ্ন)', en: 'Cumulative 30-question A1 exam' },
    description: {
      bn: 'সব A1 অধ্যায় সম্পন্ন করার পর সম্পূর্ণ A1 পাঠ্যক্রম থেকে ৩০টি র‍্যান্ডম প্রশ্নের পরীক্ষা।',
      en: 'Comprehensive 30-question randomized final examination across all A1 categories.',
    },
    requiredItemIds: [],
    examQuestionCount: 30,
    maxIncorrect: 9,
  },
];

export function getAcademyModules(level: LevelId): AcademyModuleMeta[] {
  if (level === 'A1') return A1_ACADEMY_MODULES;
  if (level === 'A2') return A2_ACADEMY_MODULES;
  if (level === 'B1') return B1_ACADEMY_MODULES;
  return B2_ACADEMY_MODULES;
}

export function inferLevelFromModuleId(id: string): LevelId {
  if (id.startsWith('a2-')) return 'A2';
  if (id.startsWith('b1-')) return 'B1';
  if (id.startsWith('b2-')) return 'B2';
  return 'A1';
}

export function isFinalExamModuleId(id: string): boolean {
  return id === 'final-exam' || id.endsWith('-final-exam');
}

export function findAcademyModule(id: string, level?: LevelId): AcademyModuleMeta | undefined {
  if (level) {
    return getAcademyModules(level).find((m) => m.id === id);
  }
  return (
    A1_ACADEMY_MODULES.find((m) => m.id === id) ??
    A2_ACADEMY_MODULES.find((m) => m.id === id) ??
    B1_ACADEMY_MODULES.find((m) => m.id === id) ??
    B2_ACADEMY_MODULES.find((m) => m.id === id)
  );
}

export function getPreviousAcademyModule(id: AcademyModuleId, level?: LevelId): AcademyModuleMeta | undefined {
  const mods = getAcademyModules(level ?? inferLevelFromModuleId(id));
  const idx = mods.findIndex((m) => m.id === id);
  return idx > 0 ? mods[idx - 1] : undefined;
}

export function getNextAcademyModule(id: AcademyModuleId, level?: LevelId): AcademyModuleMeta | undefined {
  const mods = getAcademyModules(level ?? inferLevelFromModuleId(id));
  const idx = mods.findIndex((m) => m.id === id);
  return idx >= 0 && idx + 1 < mods.length ? mods[idx + 1] : undefined;
}
