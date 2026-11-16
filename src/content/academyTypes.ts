import type { GrammarRow, LevelId, QuizQuestion, Tr } from './types';

export type PartOfSpeech =
  | 'noun'
  | 'verb'
  | 'adjective'
  | 'adverb'
  | 'pronoun'
  | 'preposition'
  | 'conjunction'
  | 'interjection'
  | 'phrase'
  | 'number';

export type Gender = 'm' | 'f' | 'mf' | 'none';

export interface VocabExample {
  it: string;
  tr: Tr;
}

export interface RichVocabItem {
  id: string;
  key: string;
  level: LevelId;
  it: string;
  baseWord: string;
  article?: string;
  gender: Gender;
  plural?: string;
  pos: PartOfSpeech;
  pronunciation: string;
  tr: Tr;
  topic: Tr;
  example: VocabExample;
  grammarIds: string[];
}

export interface RichSentenceItem {
  id: string;
  key: string;
  level: LevelId;
  it: string;
  tr: Tr;
  pronunciation: string;
  grammar: string;
  grammarIds: string[];
  vocabKeys: string[];
  context: Tr;
  dialogueRef?: string;
  acceptedOrders?: string[];
}

export interface GrammarMistake {
  wrong: string;
  right: string;
  note: Tr;
}

export interface GrammarTopicRich {
  id: string;
  level: LevelId;
  title: string;
  name: Tr;
  explanation: Tr;
  rule: Tr;
  table?: [string, string][];
  richTable?: GrammarRow[];
  examples: { it: string; tr: Tr }[];
  exceptions?: Tr;
  commonMistakes?: GrammarMistake[];
  exercises?: QuizQuestion[];
  storyIds?: string[];
  vocabKeys?: string[];
}

export interface StoryParagraph {
  it: string;
  tr: Tr;
  grammarNote?: Tr;
}

export interface StoryWordGlossary {
  word: string;
  base: string;
  tr: Tr;
  pos: string;
  grammarHint?: Tr;
}

export interface StoryGrammarPoint {
  sentenceIt: string;
  ruleTitle: Tr;
  explanation: Tr;
  verbForm?: string;
  grammarId: string;
}

export interface StoryTrueFalse {
  id: string;
  statementIt: string;
  statement: Tr;
  answer: boolean;
  explanation: Tr;
}

export interface StoryFillBlank {
  id: string;
  sentence: string;
  options: string[];
  answer: number;
  explanation: Tr;
}

export interface StoryShortAnswer {
  id: string;
  question: Tr;
  sampleAnswerIt: string;
  keywords: string[];
}

export interface StoryPractice {
  retellPrompt: Tr;
  completeMissing: {
    promptIt: string;
    hint: Tr;
    sampleIt: string;
  };
  buildSimilar: {
    patternIt: string;
    prompt: Tr;
    sampleIt: string;
  };
  altEndingPrompt: Tr;
}

export interface StoryItem {
  id: string;
  level: LevelId;
  titleIt: string;
  title: Tr;
  topic: Tr;
  readingMinutes: number;
  difficulty: 1 | 2 | 3;
  grammarIds: string[];
  vocabKeys: string[];
  paragraphs: StoryParagraph[];
  wordGlossary: StoryWordGlossary[];
  grammarBreakdown: StoryGrammarPoint[];
  comprehension: {
    mcq: QuizQuestion[];
    trueFalse: StoryTrueFalse[];
    fillBlank: StoryFillBlank[];
    orderSentences: string[];
    shortAnswer: StoryShortAnswer[];
  };
  practice: StoryPractice;
}

export type ListeningKind =
  | 'conversation'
  | 'announcement'
  | 'dialogue'
  | 'phone'
  | 'interview'
  | 'story'
  | 'news'
  | 'discussion'
  | 'formal';

export interface ListeningLine {
  speaker: string;
  it: string;
  tr: Tr;
}

export interface ListeningExercise {
  id: string;
  level: LevelId;
  kind: ListeningKind;
  titleIt: string;
  title: Tr;
  topic: Tr;
  lines: ListeningLine[];
  explanation: Tr;
  vocabList: { it: string; tr: Tr }[];
  vocabKeys: string[];
  grammarIds: string[];
  questions: QuizQuestion[];
}

export type ReadingKind =
  | 'story'
  | 'dialogue'
  | 'letter'
  | 'email'
  | 'message'
  | 'notice'
  | 'article'
  | 'travel'
  | 'news'
  | 'opinion'
  | 'essay';

export interface ReadingPassage {
  id: string;
  level: LevelId;
  kind: ReadingKind;
  titleIt: string;
  title: Tr;
  readingMinutes: number;
  paragraphs: { it: string; tr: Tr }[];
  vocabHighlights: { it: string; tr: Tr }[];
  grammarHighlights: { excerpt: string; note: Tr; grammarId: string }[];
  relatedGrammarIds: string[];
  storyId?: string;
  questions: QuizQuestion[];
}

export type PuzzleType =
  | 'word-order'
  | 'sentence-build'
  | 'missing-word'
  | 'translation'
  | 'verb-conjugation'
  | 'article-select'
  | 'preposition-select'
  | 'pronoun-place'
  | 'grammar-fix'
  | 'dialogue-complete'
  | 'sentence-transform'
  | 'story-reconstruct';

export interface PuzzleChallenge {
  id: string;
  level: LevelId;
  type: PuzzleType;
  prompt: Tr;
  stemIt?: string;
  answerIt: string;
  acceptedAnswers?: string[];
  options?: string[];
  tiles?: string[];
  tr: Tr;
  grammarId: string;
  vocabKeys: string[];
  explanation: Tr;
}

export interface WritingExercise {
  id: string;
  level: LevelId;
  category: Tr;
  title: Tr;
  prompt: Tr;
  minWords: number;
  requiredKeywords: string[];
  keyPhrases: { it: string; tr: Tr }[];
  grammarIds: string[];
  checklist: Tr[];
  modelResponse: { it: string; tr: Tr };
}

export type SpeakingKind =
  | 'read-aloud'
  | 'repeat'
  | 'self-intro'
  | 'roleplay'
  | 'qa'
  | 'picture'
  | 'retell'
  | 'discussion';

export interface SpeakingExercise {
  id: string;
  level: LevelId;
  kind: SpeakingKind;
  title: Tr;
  prompt: Tr;
  targetIt: string;
  targetTr: Tr;
  pronunciationHint: string;
  imageAsset?: string;
  dialogueCue?: { speaker: string; it: string; tr: Tr };
  followUps?: { it: string; tr: Tr }[];
  grammarIds: string[];
}

export interface LevelAssessment {
  id: string;
  level: LevelId;
  unitNumber?: number;
  title: Tr;
  passScore: number;
  questions: QuizQuestion[];
}
