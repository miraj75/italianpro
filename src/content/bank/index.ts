import type { LevelId, Tr } from '../types';
import { A1_WORDS } from './a1-words';
import { A2_WORDS } from './a2-words';
import { B1_WORDS_1 } from './b1-words-1';
import { B1_WORDS_2 } from './b1-words-2';
import { A1_SENTENCES } from './a1-sentences';
import { A2_SENTENCES } from './a2-sentences';
import { B1_SENTENCES } from './b1-sentences';
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

export const WORDS: Record<'A1' | 'A2' | 'B1', BankWord[]> = {
  A1: parseWords('A1', A1_WORDS),
  A2: parseWords('A2', A2_WORDS),
  B1: parseWords('B1', B1_WORDS_1, B1_WORDS_2),
};

export const SENTENCES: Record<'A1' | 'A2' | 'B1', BankSentence[]> = {
  A1: parseSentences('A1', A1_SENTENCES),
  A2: parseSentences('A2', A2_SENTENCES),
  B1: parseSentences('B1', B1_SENTENCES),
};

/** B1 idioms and fixed expressions (no grammar tag). */
export const PHRASES: BankWord[] = lines(B1_PHRASES).map((line) => {
  const [it = '', bn = '', en = ''] = line.split('|');
  return { key: `p:B1:${it}`, level: 'B1', it, tr: { bn, en }, topic: { bn: 'এক্সপ্রেশন', en: 'Expressions' } };
});

export const BANK_LEVELS = ['A1', 'A2', 'B1'] as const;
export type BankLevel = (typeof BANK_LEVELS)[number];

const ALL_ITEMS = new Map<string, { it: string; tr: Tr }>(
  [...Object.values(WORDS).flat(), ...Object.values(SENTENCES).flat(), ...PHRASES].map((x) => [x.key, x]),
);

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
