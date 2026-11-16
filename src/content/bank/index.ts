import type { LevelId, Tr } from '../types';
import { A1_WORDS } from './a1-words';
import { A2_WORDS } from './a2-words';
import { B1_WORDS_1 } from './b1-words-1';
import { B1_WORDS_2 } from './b1-words-2';
import { B2_WORDS_1 } from './b2-words-1';
import { B2_WORDS_2 } from './b2-words-2';
import { A1_SENTENCES } from './a1-sentences';
import { A2_SENTENCES } from './a2-sentences';
import { B1_SENTENCES } from './b1-sentences';
import { B2_SENTENCES } from './b2-sentences';
import { B1_PHRASES } from './b1-phrases';

export interface BankWord {
  /** Stable key used for flashcards: `w:<level>:<italian>` */
  key: string;
  level: LevelId;
  it: string;
  tr: Tr;
  topic: Tr;
}

export interface BankSentence {
  key: string;
  level: LevelId;
  it: string;
  tr: Tr;
  grammar: string;
}

function lines(raw: string): string[] {
  return raw.split('\n').map((l) => l.trim()).filter(Boolean);
}

function parseWords(level: LevelId, ...raws: string[]): BankWord[] {
  const out: BankWord[] = [];
  let topic: Tr = { bn: '', en: '' };
  for (const line of raws.flatMap(lines)) {
    if (line.startsWith('# ')) {
      const [bn = '', en = ''] = line.slice(2).split(' / ');
      topic = { bn: bn.trim(), en: en.trim() };
      continue;
    }
    const [it = '', bn = '', en = ''] = line.split('|');
    out.push({ key: `w:${level}:${it}`, level, it, tr: { bn, en }, topic });
  }
  return out;
}

function parseSentences(level: LevelId, raw: string): BankSentence[] {
  return lines(raw).map((line) => {
    const [it = '', bn = '', en = '', grammar = ''] = line.split('|');
    return { key: `s:${level}:${it}`, level, it, tr: { bn, en }, grammar };
  });
}

export const WORDS: Record<'A1' | 'A2' | 'B1' | 'B2', BankWord[]> = {
  A1: parseWords('A1', A1_WORDS),
  A2: parseWords('A2', A2_WORDS),
  B1: parseWords('B1', B1_WORDS_1, B1_WORDS_2),
  B2: parseWords('B2', B2_WORDS_1, B2_WORDS_2),
};

export const SENTENCES: Record<'A1' | 'A2' | 'B1' | 'B2', BankSentence[]> = {
  A1: parseSentences('A1', A1_SENTENCES),
  A2: parseSentences('A2', A2_SENTENCES),
  B1: parseSentences('B1', B1_SENTENCES),
  B2: parseSentences('B2', B2_SENTENCES),
};

/** B1 idioms and fixed expressions (no grammar tag). */
export const PHRASES: BankWord[] = lines(B1_PHRASES).map((line) => {
  const [it = '', bn = '', en = ''] = line.split('|');
  return { key: `p:B1:${it}`, level: 'B1', it, tr: { bn, en }, topic: { bn: 'এক্সপ্রেশন', en: 'Expressions' } };
});

export const BANK_LEVELS = ['A1', 'A2', 'B1', 'B2'] as const;
export type BankLevel = (typeof BANK_LEVELS)[number];

const ALL_ITEMS = new Map<string, { it: string; tr: Tr }>(
  [...Object.values(WORDS).flat(), ...Object.values(SENTENCES).flat(), ...PHRASES].map((x) => [x.key, x]),
);

import { enrichSentence, enrichWord } from '../vocabMeta';
import type { RichSentenceItem, RichVocabItem } from '../academyTypes';

export function bankItem(key: string): { it: string; tr: Tr } | undefined {
  return ALL_ITEMS.get(key);
}

export function topicsOf(level: BankLevel): Tr[] {
  const seen = new Map<string, Tr>();
  for (const w of WORDS[level]) if (!seen.has(w.topic.en)) seen.set(w.topic.en, w.topic);
  return [...seen.values()];
}

export function sentencesFor(grammarId: string): BankSentence[] {
  return Object.values(SENTENCES).flat().filter((s) => s.grammar === grammarId);
}

const SENTENCE_WORD_INDEX = (() => {
  const idx = new Map<string, { it: string; tr: Tr; grammar: string }>();
  for (const s of Object.values(SENTENCES).flat()) {
    const tokens = s.it
      .toLowerCase()
      .replace(/[.,!?'"’]/g, ' ')
      .split(/\s+/)
      .filter((t) => t.length >= 3);
    for (const tok of tokens) {
      if (!idx.has(tok)) idx.set(tok, { it: s.it, tr: s.tr, grammar: s.grammar });
    }
  }
  return idx;
})();

export const RICH_WORDS: Record<BankLevel, RichVocabItem[]> = {
  A1: WORDS.A1.map((w) => enrichWord(w, SENTENCE_WORD_INDEX)),
  A2: WORDS.A2.map((w) => enrichWord(w, SENTENCE_WORD_INDEX)),
  B1: WORDS.B1.map((w) => enrichWord(w, SENTENCE_WORD_INDEX)),
  B2: WORDS.B2.map((w) => enrichWord(w, SENTENCE_WORD_INDEX)),
};

export const RICH_SENTENCES: Record<BankLevel, RichSentenceItem[]> = {
  A1: SENTENCES.A1.map((s, i) => enrichSentence(s, i)),
  A2: SENTENCES.A2.map((s, i) => enrichSentence(s, i)),
  B1: SENTENCES.B1.map((s, i) => enrichSentence(s, i)),
  B2: SENTENCES.B2.map((s, i) => enrichSentence(s, i)),
};

const RICH_WORD_MAP = new Map<string, RichVocabItem>(
  Object.values(RICH_WORDS)
    .flat()
    .map((w) => [w.key, w]),
);

export function richWordByKey(key: string): RichVocabItem | undefined {
  return RICH_WORD_MAP.get(key);
}

