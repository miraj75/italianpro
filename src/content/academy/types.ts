import type { LevelId, Tr } from '../types';

export type A1AcademyModuleId =
  | 'alphabet'
  | 'numbers'
  | 'articles'
  | 'verbs'
  | 'essential-verbs'
  | 'adjectives'
  | 'adverbs'
  | 'prepositions'
  | 'conjunctions'
  | 'vocabulary'
  | 'final-exam';

export type AcademyModuleId = A1AcademyModuleId | string;

export type AcademyPhase = 'A' | 'B' | 'C';

export type AcademyModuleKind =
  | 'alphabet'
  | 'numbers'
  | 'articles'
  | 'grammar'
  | 'verbs'
  | 'vocabulary'
  | 'idioms'
  | 'sentences'
  | 'reading'
  | 'listening'
  | 'writing'
  | 'speaking'
  | 'final-exam';

export interface AcademyModuleMeta {
  id: AcademyModuleId;
  level?: LevelId;
  kind?: AcademyModuleKind;
  order: number;
  phase: AcademyPhase;
  implemented: boolean;
  route: string;
  title: string;
  subtitle: Tr;
  description: Tr;
  /** IDs of individual learning items that must be studied before unlocking the section exam. */
  requiredItemIds: string[];
  /** Number of questions in each exam attempt. */
  examQuestionCount: number;
  /** Maximum incorrect answers permitted to pass (e.g. 3 for 10-question exam). */
  maxIncorrect: number;
  /** Optional grammar topic IDs taught in grammar/verb modules. */
  grammarIds?: string[];
}

export interface AlphabetLetter {
  id: string;
  letter: string;
  lower: string;
  italianName: string;
  phoneticEn: string;
  phoneticBn: string;
  guide: Tr;
  exampleIt: string;
  exampleTr: Tr;
  examplePhoneticBn: string;
  examplePhoneticEn?: string;
  isVowel?: boolean;
}

export interface AlphabetRuleNote {
  id: string;
  pattern: string;
  soundEn: string;
  soundBn: string;
  exampleIt: string;
  exampleTr: Tr;
  explanation: Tr;
}

export interface NumberItem {
  id: string;
  value: number;
  it: string;
  phoneticBn: string;
  phoneticEn: string;
  en: string;
  bn: string;
  exampleIt: string;
  exampleTr: Tr;
  group: '0-10' | '11-20' | '21-30' | '31-50' | '51-70' | '71-100';
}

export interface NumberRule {
  id: string;
  title: Tr;
  range: string;
  explanation: Tr;
  examples: { it: string; tr: Tr }[];
}

export interface ArticleMistake {
  wrong: string;
  right: string;
  note: Tr;
}

export interface ArticleRule {
  id: string;
  kind: 'definite' | 'indefinite' | 'agreement' | 'exceptions';
  title: Tr;
  summary: Tr;
  explanation: Tr;
  forms: {
    article: string;
    usage: Tr;
    singularIt: string;
    pluralIt?: string;
    tr: Tr;
  }[];
  exceptions?: Tr;
  commonMistakes: ArticleMistake[];
}

export interface ArticleExample {
  id: string;
  article: string;
  kind: 'definite' | 'indefinite';
  gender: 'm' | 'f';
  number: 'singular' | 'plural';
  it: string;
  pluralIt?: string;
  tr: Tr;
  note: Tr;
}

export interface AcademyExamQuestion {
  id: string;
  moduleId: AcademyModuleId;
  prompt: Tr;
  /** Optional Italian text displayed prominently as stem. */
  it?: string;
  /** Optional Italian text spoken aloud via TTS when audio replay is offered. */
  audioIt?: string;
  options: string[];
  localizedOptions?: {
    bn: string[];
    en: string[];
    it?: string[];
  };
  phoneticCue?: Tr;
  answer: number;
  explanation: Tr;
  /** Optional tier tag (e.g. 'core-20' | 'extended-80' for Numbers exam sampling). */
  tier?: 'core' | 'extended';
}

export interface AcademyVerbTenseTable {
  id: string;
  tense: Tr;
  forms: [string, string, string, string, string, string];
}

export interface AcademyVerbEntry {
  id: string;
  level: 'A2' | 'B1' | 'B2';
  infinitive: string;
  meaning: Tr;
  category: Tr;
  irregular: boolean;
  usageNote: Tr;
  conjugations: AcademyVerbTenseTable[];
  examples: { it: string; tr: Tr }[];
}

export interface AcademyCollocationItem {
  id: string;
  level: 'B1' | 'B2';
  it: string;
  tr: Tr;
  register: 'idiomatic' | 'formal' | 'colloquial' | 'academic';
  exampleIt: string;
  exampleTr: Tr;
}

export type AcademyModuleStage = 'theory' | 'study' | 'drill' | 'exam' | 'result';

export interface TheoryRuleCard {
  id: string;
  title: Tr;
  badge?: Tr;
  body: Tr;
  examples: {
    it: string;
    phoneticBn?: string;
    phoneticEn?: string;
    phoneticIt?: string;
    tr: Tr;
  }[];
  tip?: Tr;
}

export interface TheoryMistakeItem {
  wrong: string | Tr;
  right: string | Tr;
  explanation: Tr;
}

export interface TheoryTableRow {
  cells: (string | Tr)[];
  audioIt?: string;
}

export interface TheorySectionBlock {
  id: string;
  heading: Tr;
  summary: Tr;
  rules?: TheoryRuleCard[];
  table?: {
    headers: Tr[];
    rows: TheoryTableRow[];
  };
  mistakes?: TheoryMistakeItem[];
}

export interface AcademyTheoryConfig {
  moduleId: AcademyModuleId;
  title: Tr;
  subtitle: Tr;
  intro: Tr;
  highlights: { label: string; caption: Tr }[];
  sections: TheorySectionBlock[];
}

export interface AcademyDrillItem {
  id: string;
  /** Audio string spoken automatically in Italian when the question loads. */
  audioIt: string;
  /** Primary display token on the choice option card (e.g. 'T' or '21'). */
  primaryLabel: string;
  /** Secondary subtitle on the choice option card (e.g. 'ti' or 'ventuno'). */
  secondaryLabel: string;
  /** Phonetic guide in Bengali displayed as a listening cue. */
  cueBn: string;
  /** Phonetic guide / meaning in English displayed as a listening cue. */
  cueEn: string;
  /** Phonetic guide / cue in Italian displayed as a listening cue when ExplainLang === 'it'. */
  cueIt?: string;
  /** Detailed feedback shown inside AnswerFeedbackSheet after answering. */
  feedbackDetail: Tr;
}
