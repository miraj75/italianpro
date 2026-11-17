/** Explanation languages the learner can choose. Italian content is never translated away. */
export type ExplainLang = 'bn' | 'en' | 'it';

/** A text available in explanation languages. */
export interface Tr {
  bn: string;
  en: string;
  it?: string;
}

export type LevelId = 'A1' | 'A2' | 'B1' | 'B2';

export interface Phrase {
  id: string;
  it: string;
  tr: Tr;
  /** Optional usage note (formality, pronunciation, etc.). */
  note?: Tr;
}

export interface GrammarRow {
  /** Left column, e.g. a pronoun ("io"). */
  label: string;
  /** Italian form, e.g. "mi chiamo". */
  it: string;
  tr: Tr;
}

export interface GrammarPoint {
  id: string;
  title: Tr;
  explanation: Tr;
  table?: GrammarRow[];
  examples: Phrase[];
}

export interface DialogueLine {
  speaker: string;
  it: string;
  tr: Tr;
}

export interface Dialogue {
  title: Tr;
  context: Tr;
  lines: DialogueLine[];
}

export interface QuizQuestion {
  id: string;
  prompt: Tr;
  /** Optional Italian stem shown in large type. */
  it?: string;
  options: string[];
  /** Optional per-language answer choices when options are translated. */
  localizedOptions?: {
    bn: string[];
    en: string[];
    it?: string[];
  };
  answer: number;
  explanation: Tr;
}

export interface Lesson {
  id: string;
  number: number;
  title: string;
  subtitle: Tr;
  minutes: number;
  objectives: Tr[];
  phrases: Phrase[];
  grammar: GrammarPoint[];
  dialogue: Dialogue;
  quiz: QuizQuestion[];
  tip?: Tr;
}

export interface Unit {
  id: string;
  number: number;
  title: string;
  subtitle: Tr;
  /** Empty while the unit's content is still being authored. */
  lessons: Lesson[];
}

export interface Level {
  id: LevelId;
  name: Tr;
  description: Tr;
  units: Unit[];
}

/** Minimum quiz score (fraction) required to count a lesson as completed. */
export const LESSON_PASS_SCORE = 0.7;
