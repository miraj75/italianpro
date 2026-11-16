import type {
  ListeningExercise,
  ListeningKind,
  ListeningLine,
  PuzzleChallenge,
  PuzzleType,
  ReadingKind,
  ReadingPassage,
  SpeakingExercise,
  SpeakingKind,
  StoryFillBlank,
  StoryGrammarPoint,
  StoryItem,
  StoryParagraph,
  StoryPractice,
  StoryShortAnswer,
  StoryTrueFalse,
  StoryWordGlossary,
  WritingExercise,
} from './academyTypes';
import type { LevelId, QuizQuestion, Tr } from './types';

export interface CompactStoryInput {
  id: string;
  level: LevelId;
  titleIt: string;
  title: Tr;
  topic: Tr;
  readingMinutes?: number;
  difficulty?: 1 | 2 | 3;
  grammarIds: string[];
  vocabKeys: string[];
  paragraphs: StoryParagraph[];
  wordGlossary: StoryWordGlossary[];
  grammarBreakdown: StoryGrammarPoint[];
  mcq: QuizQuestion[];
  trueFalse: StoryTrueFalse[];
  fillBlank: StoryFillBlank[];
  shortAnswer: StoryShortAnswer[];
  practice: StoryPractice;
}

export function buildStory(input: CompactStoryInput): StoryItem {
  const orderSentences = input.paragraphs.map((p) => p.it.split(/(?<=[.!?])\s+/)[0]!).filter(Boolean);
  return {
    id: input.id,
    level: input.level,
    titleIt: input.titleIt,
    title: input.title,
    topic: input.topic,
    readingMinutes: input.readingMinutes ?? (input.level === 'A1' ? 3 : input.level === 'A2' ? 4 : input.level === 'B1' ? 5 : 7),
    difficulty: input.difficulty ?? (input.level === 'A1' ? 1 : input.level === 'A2' ? 2 : 3),
    grammarIds: input.grammarIds,
    vocabKeys: input.vocabKeys,
    paragraphs: input.paragraphs,
    wordGlossary: input.wordGlossary,
    grammarBreakdown: input.grammarBreakdown,
    comprehension: {
      mcq: input.mcq,
      trueFalse: input.trueFalse,
      fillBlank: input.fillBlank,
      orderSentences,
      shortAnswer: input.shortAnswer,
    },
    practice: input.practice,
  };
}

export interface CompactListeningInput {
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

export function buildListening(input: CompactListeningInput): ListeningExercise {
  return { ...input };
}

export interface CompactReadingInput {
  id: string;
  level: LevelId;
  kind: ReadingKind;
  titleIt: string;
  title: Tr;
  readingMinutes?: number;
  paragraphs: { it: string; tr: Tr }[];
  vocabHighlights: { it: string; tr: Tr }[];
  grammarHighlights: { excerpt: string; note: Tr; grammarId: string }[];
  relatedGrammarIds: string[];
  storyId?: string;
  questions: QuizQuestion[];
}

export function buildReading(input: CompactReadingInput): ReadingPassage {
  return {
    ...input,
    readingMinutes: input.readingMinutes ?? (input.level === 'A1' ? 2 : input.level === 'A2' ? 3 : input.level === 'B1' ? 4 : 6),
  };
}

export function buildPuzzle(
  id: string,
  level: LevelId,
  type: PuzzleType,
  prompt: Tr,
  answerIt: string,
  tr: Tr,
  grammarId: string,
  explanation: Tr,
  extra?: {
    stemIt?: string;
    acceptedAnswers?: string[];
    options?: string[];
    tiles?: string[];
    vocabKeys?: string[];
  },
): PuzzleChallenge {
  return {
    id,
    level,
    type,
    prompt,
    stemIt: extra?.stemIt,
    answerIt,
    acceptedAnswers: extra?.acceptedAnswers,
    options: extra?.options,
    tiles: extra?.tiles,
    tr,
    grammarId,
    vocabKeys: extra?.vocabKeys ?? [],
    explanation,
  };
}

export function buildWriting(
  id: string,
  level: LevelId,
  category: Tr,
  title: Tr,
  prompt: Tr,
  minWords: number,
  requiredKeywords: string[],
  keyPhrases: { it: string; tr: Tr }[],
  grammarIds: string[],
  checklist: Tr[],
  modelResponse: { it: string; tr: Tr },
): WritingExercise {
  return { id, level, category, title, prompt, minWords, requiredKeywords, keyPhrases, grammarIds, checklist, modelResponse };
}

export function buildSpeaking(
  id: string,
  level: LevelId,
  kind: SpeakingKind,
  title: Tr,
  prompt: Tr,
  targetIt: string,
  targetTr: Tr,
  pronunciationHint: string,
  grammarIds: string[],
  extra?: { imageAsset?: string; dialogueCue?: { speaker: string; it: string; tr: Tr }; followUps?: { it: string; tr: Tr }[] },
): SpeakingExercise {
  return {
    id,
    level,
    kind,
    title,
    prompt,
    targetIt,
    targetTr,
    pronunciationHint,
    grammarIds,
    ...extra,
  };
}
