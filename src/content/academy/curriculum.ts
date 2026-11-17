import type { LevelId } from '../types';
import { A1_ALPHABET_REQUIRED_IDS } from './a1Alphabet';
import { A1_NUMBERS_REQUIRED_IDS } from './a1Numbers';
import { A1_GREETINGS_REQUIRED_IDS } from './a1GreetingsIntro';
import { A1_ARTICLES_REQUIRED_IDS } from './a1Articles';
import { A1_NOUNS_REQUIRED_IDS } from './a1NounsPlurals';
import { A1_PRONOUNS_POSSESSIVES_REQUIRED_IDS } from './a1PronounsPossessives';
import { A1_VERBS_REQUIRED_IDS } from './a1Verbs';
import { A1_ESSENTIAL_VERBS_REQUIRED_IDS } from './a1EssentialVerbs';
import { A1_ADJECTIVES_REQUIRED_IDS } from './a1Adjectives';
import { A1_ADVERBS_REQUIRED_IDS } from './a1Adverbs';
import { A1_PREPOSITIONS_REQUIRED_IDS } from './a1Prepositions';
import { A1_CONJUNCTIONS_REQUIRED_IDS } from './a1Conjunctions';
import { A1_SENTENCE_STRUCTURE_REQUIRED_IDS } from './a1SentenceStructure';
import { A1_TIME_DATES_REQUIRED_IDS } from './a1TimeDates';
import { A1_VOCAB_REQUIRED_IDS } from './a1Vocabulary';
import { A1_EVERYDAY_COMM_REQUIRED_IDS } from './a1EverydayCommunication';
import { A1_CULTURE_SURVIVAL_REQUIRED_IDS } from './a1CultureSurvival';
import { A1_LISTENING_SPEAKING_REQUIRED_IDS } from './a1ListeningSpeaking';
import { A1_READING_WRITING_REQUIRED_IDS } from './a1ReadingWriting';
import {
  A2_ACADEMY_MODULES,
  B1_ACADEMY_MODULES,
  B2_ACADEMY_MODULES,
} from './curriculumA2B1B2';
import type { AcademyModuleId, AcademyModuleMeta } from './types';

export { A2_ACADEMY_MODULES, B1_ACADEMY_MODULES, B2_ACADEMY_MODULES };

const SECTION_FOUNDATION = {
  id: 'foundation',
  title: { bn: 'ভিত্তি (FOUNDATION)', en: 'FOUNDATION', it: 'BASI (FOUNDATION)' },
};
const SECTION_GRAMMAR = {
  id: 'grammar',
  title: { bn: 'ব্যাকরণ (GRAMMAR)', en: 'GRAMMAR', it: 'GRAMMATICA' },
};
const SECTION_VOCAB_COMM = {
  id: 'vocab-comm',
  title: { bn: 'শব্দভাণ্ডার ও যোগাযোগ (VOCABULARY & COMMUNICATION)', en: 'VOCABULARY & COMMUNICATION', it: 'LESSICO E COMUNICAZIONE' },
};
const SECTION_FOUR_SKILLS = {
  id: 'four-skills',
  title: { bn: 'চার দক্ষতা (FOUR SKILLS)', en: 'FOUR SKILLS', it: 'QUATTRO ABILITÀ' },
};
const SECTION_ASSESSMENT = {
  id: 'assessment',
  title: { bn: 'চূড়ান্ত মূল্যায়ন (ASSESSMENT)', en: 'ASSESSMENT', it: 'VALUTAZIONE FINALE' },
};

/**
 * Complete 20-module CEFR A1 Learning Hub path:
 * Foundation (1–3) -> Grammar (4–14) -> Vocabulary & Communication (15–17) -> Four Skills (18–19) -> Final Exam (20).
 */
export const A1_ACADEMY_MODULES: AcademyModuleMeta[] = [
  // FOUNDATION
  {
    id: 'alphabet',
    order: 1,
    phase: 'A',
    sectionLabel: SECTION_FOUNDATION,
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
    sectionLabel: SECTION_FOUNDATION,
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
    id: 'greetings-intro',
    order: 3,
    phase: 'B',
    kind: 'communication',
    sectionLabel: SECTION_FOUNDATION,
    implemented: true,
    route: '/academy/a1/greetings-intro',
    title: 'Greetings & Self Introduction',
    subtitle: { bn: 'সম্ভাষণ, পরিচয় ও ভদ্রতা (tu / Lei)', en: 'Greetings, personal info & polite expressions' },
    description: {
      bn: 'Ciao, Buongiorno, আত্মপরিচয়, বয়স, দেশ, পেশা ও ১০টি বাস্তব সংলাপ।',
      en: 'Time-of-day greetings, farewells, self-introductions, formal Lei vs. tu, and 10 real dialogues.',
    },
    requiredItemIds: A1_GREETINGS_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },

  // GRAMMAR
  {
    id: 'articles',
    order: 4,
    phase: 'A',
    sectionLabel: SECTION_GRAMMAR,
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
    id: 'nouns-gender-plurals',
    order: 5,
    phase: 'B',
    kind: 'grammar',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/nouns-gender-plurals',
    title: 'Nouns, Gender & Plurals',
    subtitle: { bn: 'বিশেষ্য, লিঙ্গ ও বহুবচন (-o/-i, -a/-e, -e/-i)', en: 'Gender endings, spelling rules & plurals' },
    description: {
      bn: '১০২টি A1 বিশেষ্যসহ পুং/স্ত্রী লিঙ্গ, -ca/-ga/-co/-go বানান নিয়ম ও অনিয়মিত বহুবচন।',
      en: 'Master noun gender identification, regular plural transformations, spelling shifts, and A1 exceptions.',
    },
    requiredItemIds: A1_NOUNS_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'pronouns-possessives',
    order: 6,
    phase: 'B',
    kind: 'grammar',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/pronouns-possessives',
    title: 'Personal & Possessive Pronouns',
    subtitle: { bn: 'ব্যক্তিবাচক সর্বনাম ও অধিকারসূচক রূপ (io, mio...)', en: 'Subject pronouns, possessives & family rule' },
    description: {
      bn: 'io/tu/lui/lei/Lei, সর্বনাম বাদ দেওয়ার নিয়ম এবং mio/tuo/suo ও পরিবারের বিশেষ ব্যতিক্রম।',
      en: 'Subject pronouns (with Lei formal), possessive agreement by object, and the singular family-noun rule.',
    },
    requiredItemIds: A1_PRONOUNS_POSSESSIVES_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'verbs',
    order: 7,
    phase: 'B',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/verbs',
    title: 'Verbs & Conjugation',
    subtitle: { bn: 'ক্রিয়া ও রূপান্তর (-are, -ere, -ire)', en: '-are, -ere, -ire conjugation tables' },
    description: {
      bn: 'io, tu, lui/lei, noi, voi, loro অনুযায়ী নিয়মিত ও অনিয়মিত ক্রিয়ার পূর্ণ রূপান্তর।',
      en: 'Present-tense conjugation patterns across all six persons with audio examples.',
    },
    requiredItemIds: A1_VERBS_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'essential-verbs',
    order: 8,
    phase: 'B',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/essential-verbs',
    title: 'Essential Verbs',
    subtitle: { bn: 'অপরিহার্য A1 ক্রিয়া', en: 'Verified CEFR A1 core verb list' },
    description: {
      bn: 'দৈনন্দিন যোগাযোগের অপরিহার্য ক্রিয়াগুলো একে একে অনুশীলন ও পরীক্ষা।',
      en: 'Step-by-step mastery of the verified CEFR A1 essential verb inventory.',
    },
    requiredItemIds: A1_ESSENTIAL_VERBS_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'adjectives',
    order: 9,
    phase: 'B',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/adjectives',
    title: 'Adjectives',
    subtitle: { bn: 'বিশেষণ, নির্দেশক (questo/quello) ও লিঙ্গ-বচন মিল', en: 'Descriptive adjectives & demonstratives' },
    description: {
      bn: '-o/-a/-e বিশেষণের রূপান্তর, অবস্থান, এবং questo/quello/stesso/altro নির্দেশক বিশেষণ।',
      en: 'Adjective gender/number agreement, placement, demonstratives (questo/quello), and drills.',
    },
    requiredItemIds: A1_ADJECTIVES_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'adverbs',
    order: 10,
    phase: 'B',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/adverbs',
    title: 'Adverbs',
    subtitle: { bn: 'ক্রিয়াবিশেষণ (সময় ও স্থান)', en: 'Time, place, frequency & manner' },
    description: {
      bn: 'sempre, spesso, oggi, domani, molto, bene — বাক্যে সঠিক অবস্থান ও ব্যবহার।',
      en: 'Frequency, time, place, and manner adverbs with common mistake checks.',
    },
    requiredItemIds: A1_ADVERBS_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'prepositions',
    order: 11,
    phase: 'B',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/prepositions',
    title: 'Prepositions',
    subtitle: { bn: 'পদান্বয়ী অব্যয় (di, a, da, in)', en: 'Simple & articulated A1 prepositions' },
    description: {
      bn: 'di, a, da, in, con, su, per, tra/fra এবং al, del, dal, nel, sul যুক্ত অব্যয়।',
      en: 'Core Italian simple & articulated prepositions for places, movement, time, and possession.',
    },
    requiredItemIds: A1_PREPOSITIONS_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'conjunctions',
    order: 12,
    phase: 'B',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/conjunctions',
    title: 'Conjunctions',
    subtitle: { bn: 'সংযোজক অব্যয় (e, ma, perché)', en: 'Connecting ideas smoothly' },
    description: {
      bn: 'e, ma, o, perché, quindi, anche, però, quando, se ব্যবহার করে সহজ বাক্য সংযোগ।',
      en: 'Join A1 sentences naturally using core coordinating and subordinating conjunctions.',
    },
    requiredItemIds: A1_CONJUNCTIONS_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'sentence-structure',
    order: 13,
    phase: 'B',
    kind: 'sentences',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/sentence-structure',
    title: 'Sentence Structure & Questions',
    subtitle: { bn: 'বাক্য গঠন, না-বোধক non ও ৮টি প্রশ্নবোধক শব্দ', en: 'Word order, negation & all 8 question words' },
    description: {
      bn: 'SVO বাক্য গঠন, ক্রিয়ার আগে non বসানো এবং Chi/Cosa/Dove/Quando/Come/Perché/Quanto/Quale।',
      en: 'Build affirmative, negative ("non"), yes/no intonation, and WH-questions accurately.',
    },
    requiredItemIds: A1_SENTENCE_STRUCTURE_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'time-dates',
    order: 14,
    phase: 'B',
    kind: 'grammar',
    sectionLabel: SECTION_GRAMMAR,
    implemented: true,
    route: '/academy/a1/time-dates',
    title: 'Time, Days, Months & Dates',
    subtitle: { bn: 'ঘড়ির সময়, ৭ দিন, ১২ মাস, ঋতু ও তারিখ', en: 'Telling time, calendar, birthdays & schedules' },
    description: {
      bn: 'Che ora è?, সপ্তাহের দিন, মাস, ঋতু, জন্মদিন বলা, সময়সূচি ও ১৫টি বাস্তব সংলাপ।',
      en: 'Master telling time (È l’una / Sono le…), days, months, dates, schedules, and 15 dialogues.',
    },
    requiredItemIds: A1_TIME_DATES_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },

  // VOCABULARY & COMMUNICATION
  {
    id: 'vocabulary',
    order: 15,
    phase: 'A',
    sectionLabel: SECTION_VOCAB_COMM,
    implemented: true,
    route: '/academy/a1/vocabulary',
    title: 'Topic-wise Vocabulary',
    subtitle: { bn: 'বিষয়ভিত্তিক শব্দভাণ্ডার (২১টি বিষয়)', en: 'Topic-based A1 vocabulary (21 topics)' },
    description: {
      bn: 'দৈনন্দিন ২১টি বিষয়ে সাজানো A1 শব্দ, পরিমাণ ও অনির্দিষ্ট শব্দ, উদাহরণ বাক্য, অডিও ও পরীক্ষা।',
      en: '21-topic A1 vocabulary including indefinites (ogni/qualche/alcuni), audio, and contextual exam.',
    },
    requiredItemIds: A1_VOCAB_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'everyday-communication',
    order: 16,
    phase: 'B',
    kind: 'communication',
    sectionLabel: SECTION_VOCAB_COMM,
    implemented: true,
    route: '/academy/a1/everyday-communication',
    title: 'Everyday Communication',
    subtitle: { bn: '১৪টি দৈনন্দিন পরিস্থিতি, ১৫৪ বাক্য ও ২৮ সংলাপ', en: '14 real-life topics, phrases & dialogues' },
    description: {
      bn: 'রেস্তোরাঁ, সুপারমার্কেট, কেনাকাটা, দিকনির্দেশ, ট্রেন, হোটেল, ফার্মেসি, ডাক্তার ও ফোনালাপ।',
      en: 'Practical A1 communication across restaurants, transit, shops, hotels, healthcare, and phone calls.',
    },
    requiredItemIds: A1_EVERYDAY_COMM_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'culture-survival',
    order: 17,
    phase: 'B',
    kind: 'communication',
    sectionLabel: SECTION_VOCAB_COMM,
    implemented: true,
    route: '/academy/a1/culture-survival',
    title: 'Italian Culture & Everyday Survival',
    subtitle: { bn: 'ইতালীয় শিষ্টাচার, ক্যাফে-ট্রেন নিয়ম ও জরুরি গাইড', en: 'Social norms, survival phrases & public signs' },
    description: {
      bn: '১০২টি জীবনাচরণ বাক্যাংশ, ১৫টি বাস্তব গাইড (টিকিট কনভালিডা, কফি, সুপারমার্কেট) ও ২০টি অনুশীলনী।',
      en: 'Navigate Italian daily life: bar etiquette, ticket validation, shop hours, signs, and 20 exercises.',
    },
    requiredItemIds: A1_CULTURE_SURVIVAL_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },

  // FOUR SKILLS
  {
    id: 'listening-speaking',
    order: 18,
    phase: 'B',
    kind: 'listening',
    sectionLabel: SECTION_FOUR_SKILLS,
    implemented: true,
    route: '/academy/a1/listening-speaking',
    title: 'Listening & Speaking Practice',
    subtitle: { bn: '৩০টি শ্রবণ ও ৩০টি কথন অনুশীলন (সাবটাইটেলসহ)', en: '30 listening exercises + 30 guided speaking tasks' },
    description: {
      bn: 'স্বাভাবিক ও ধীর গতির অডিও শুনে প্রশ্নোত্তর, লিপি যাচাই এবং উচ্চারণ গাইডসহ কথন অনুশীলন।',
      en: 'Train A1 listening comprehension at normal & slow speeds alongside guided speaking prompts.',
    },
    requiredItemIds: A1_LISTENING_SPEAKING_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },
  {
    id: 'reading-writing',
    order: 19,
    phase: 'B',
    kind: 'reading',
    sectionLabel: SECTION_FOUR_SKILLS,
    implemented: true,
    route: '/academy/a1/reading-writing',
    title: 'Reading & Guided Writing',
    subtitle: { bn: '২০টি A1 পঠন অনুচ্ছেদ ও ১৫টি লিখন টাস্ক', en: '20 short reading texts + 15 evaluated writing tasks' },
    description: {
      bn: 'দৈনন্দিন প্রোফাইল, সাইনবোর্ড, মেসেজ-ইমেইল পঠন এবং নিয়মভিত্তিক যাচাইসহ ১৫টি ইতালিয়ান লিখন।',
      en: 'Read 20 authentic A1 short texts with glossary support and write 15 multi-criteria tasks.',
    },
    requiredItemIds: A1_READING_WRITING_REQUIRED_IDS,
    examQuestionCount: 10,
    maxIncorrect: 3,
  },

  // ASSESSMENT
  {
    id: 'final-exam',
    order: 20,
    phase: 'C',
    sectionLabel: SECTION_ASSESSMENT,
    implemented: true,
    route: '/academy/a1/final-exam',
    title: 'A1 Final Examination',
    subtitle: { bn: 'চূড়ান্ত A1 পরীক্ষা (৩০ প্রশ্ন)', en: 'Cumulative 30-question A1 exam' },
    description: {
      bn: '১৯টি A1 অধ্যায় সম্পন্ন করার পর সম্পূর্ণ A1 পাঠ্যক্রম থেকে ৩০টি র‍্যান্ডম প্রশ্নের পরীক্ষা।',
      en: 'Comprehensive 30-question randomized final examination across the complete 19-module A1 curriculum.',
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
