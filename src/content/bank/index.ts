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
import { enrichSentence, enrichWord } from '../vocabMeta';
import type { RichSentenceItem, RichVocabItem } from '../academyTypes';

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
  let topic: Tr = { bn: 'সাধারণ', en: 'General' };
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

/** Canonical story glossary vocabulary entries so every story glossary word can be saved & reviewed in flashcards. */
const STORY_GLOSSARY_RAW: Array<{ level: 'A1' | 'A2' | 'B1' | 'B2'; it: string; tr: Tr }> = [
  { level: 'A1', it: 'luminoso', tr: { bn: 'উজ্জ্বল / আলোকিত', en: 'bright' } },
  { level: 'A1', it: 'subito', tr: { bn: 'সাথে সাথে', en: 'immediately' } },
  { level: 'A1', it: 'tutto', tr: { bn: 'সবাই / সব', en: 'everyone / all' } },
  { level: 'A1', it: 'la fretta', tr: { bn: 'তাড়া', en: 'hurry' } },
  { level: 'A1', it: 'il cornetto', tr: { bn: 'ইতালীয় ক্রোঁয়াসা / পেস্ট্রি', en: 'croissant' } },
  { level: 'A1', it: 'sorridere', tr: { bn: 'হাসা (মৃদু)', en: 'to smile' } },
  { level: 'A1', it: 'smarrito', tr: { bn: 'হারানো / হারিয়ে যাওয়া', en: 'misplaced / lost' } },
  { level: 'A1', it: 'ridere', tr: { bn: 'হাসা', en: 'to laugh' } },
  { level: 'A1', it: 'la scrivania', tr: { bn: 'পড়ার টেবিল / ডেস্ক', en: 'desk' } },
  { level: 'A1', it: 'accanto a', tr: { bn: 'পাশে', en: 'next to' } },
  { level: 'A1', it: 'il fotografo', tr: { bn: 'ফটোগ্রাফার', en: 'photographer' } },
  { level: 'A1', it: 'controllare', tr: { bn: 'পরীক্ষা করা / যাচাই করা', en: 'to check' } },
  { level: 'A1', it: 'la richiesta', tr: { bn: 'অনুরোধ', en: 'request' } },
  { level: 'A1', it: 'scattare', tr: { bn: 'ছবি তোলা', en: 'to take (photos)' } },
  { level: 'A1', it: 'la compagna', tr: { bn: 'সহপাঠী (মেয়ে)', en: 'classmate (f.)' } },
  { level: 'A1', it: 'passare', tr: { bn: 'কাটানো (সময়) / পার হওয়া', en: 'to spend (time) / pass' } },
  { level: 'A1', it: 'la tisana', tr: { bn: 'ভেষজ চা', en: 'herbal tea' } },
  { level: 'A1', it: 'riuscire', tr: { bn: 'সক্ষম হওয়া / পারা', en: 'to manage to / succeed' } },
  { level: 'A1', it: 'la professoressa', tr: { bn: 'শিক্ষিকা / প্রফেসর', en: 'female teacher / professor' } },
  { level: 'A1', it: 'il sorriso', tr: { bn: 'হাসি', en: 'smile' } },
  { level: 'A1', it: 'la cartolina', tr: { bn: 'পোস্টকার্ড', en: 'postcard' } },
  { level: 'A1', it: 'tirare vento', tr: { bn: 'বাতাস বওয়া', en: 'to be windy' } },
  { level: 'A1', it: 'il modello', tr: { bn: 'মডেল / ডিজাইন', en: 'model / style' } },
  { level: 'A1', it: "all'aperto", tr: { bn: 'খোলা জায়গায় / বাইরে', en: 'outdoors' } },
  { level: 'A1', it: 'il profumo', tr: { bn: 'সুগন্ধ', en: 'aroma / scent' } },
  { level: 'A1', it: 'il/la nipote', tr: { bn: 'নাতি-নাতনি / ভাইপো-ভাইঝি', en: 'grandchild / nephew / niece' } },
  { level: 'A1', it: 'il banco', tr: { bn: 'দোকানের স্টল / কাউন্টার', en: 'market stall / counter' } },
  { level: 'A1', it: 'il venditore', tr: { bn: 'বিক্রেতা', en: 'seller' } },
  { level: 'A1', it: 'sfornato', tr: { bn: 'সদ্য ওভেন থেকে বের করা', en: 'freshly baked' } },
  { level: 'A1', it: 'il mal di gola', tr: { bn: 'গলা ব্যথা', en: 'sore throat' } },
  { level: 'A1', it: 'lo studio', tr: { bn: 'চেম্বার / অফিস', en: 'practice / office' } },
  { level: 'A1', it: 'la segretaria', tr: { bn: 'সেক্রেটারি', en: 'secretary' } },
  { level: 'A1', it: 'il tuono', tr: { bn: 'বজ্রপাত', en: 'thunder' } },
  { level: 'A1', it: 'nascondersi', tr: { bn: 'লুকিয়ে পড়া', en: 'to hide' } },
  { level: 'A1', it: 'la cioccolata calda', tr: { bn: 'হট চকলেট', en: 'hot chocolate' } },
  { level: 'A2', it: 'artigianale', tr: { bn: 'হাতে তৈরি / ঐতিহ্যবাহী পদ্ধতিতে তৈরি', en: 'artisanal / handmade' } },
  { level: 'A2', it: 'scattare', tr: { bn: 'ছবি তোলা', en: 'to snap (photos)' } },
  { level: 'A2', it: 'ripararsi', tr: { bn: 'আশ্রয় নেওয়া', en: 'to take shelter' } },
  { level: 'A2', it: 'veloce', tr: { bn: 'দ্রুত', en: 'quick / fast' } },
  { level: 'A2', it: 'prendere + le', tr: { bn: 'তাদের (মেয়েদের) আনতে যাওয়া', en: 'to pick them (f.) up' } },
  { level: 'A2', it: 'corsa', tr: { bn: 'দৌড় / তাড়াহুড়ো', en: 'run / rush' } },
  { level: 'A2', it: 'orario', tr: { bn: 'সময়সূচি / সময়মতো', en: 'schedule / on time' } },
  { level: 'A2', it: 'trascorrere', tr: { bn: 'কাটানো (সময়)', en: 'to spend (time)' } },
  { level: 'A2', it: "l'orto", tr: { bn: 'সবজি বাগান', en: 'vegetable garden' } },
  { level: 'A2', it: 'il dettaglio', tr: { bn: 'বিস্তারিত / খুঁটিনাটি', en: 'detail' } },
  { level: 'A2', it: 'la novità', tr: { bn: 'নতুন বিষয় / খবর', en: 'new thing / news' } },
  { level: 'A2', it: 'la zucchina', tr: { bn: 'জুকিনি (সবজি)', en: 'courgette / zucchini' } },
  { level: 'A2', it: 'pesare', tr: { bn: 'ওজন করা', en: 'to weigh' } },
  { level: 'A2', it: 'lo scatolone', tr: { bn: 'বড় কার্ডবোর্ডের বাক্স', en: 'large cardboard box' } },
  { level: 'A2', it: 'il convegno', tr: { bn: 'সম্মেলন / সেমিনার', en: 'conference' } },
  { level: 'A2', it: "l'attesa", tr: { bn: 'অপেক্ষা', en: 'waiting' } },
  { level: 'A2', it: 'inserire', tr: { bn: 'প্রবেশ করানো / এন্ট্রি করা', en: 'to insert / enter' } },
  { level: 'A2', it: 'il vicolo', tr: { bn: 'সরু গলি', en: 'narrow alley' } },
  { level: 'A2', it: 'il cartello', tr: { bn: 'সাইনবোর্ড', en: 'sign' } },
  { level: 'A2', it: 'consigliare + ci', tr: { bn: 'আমাদের পরামর্শ দেওয়া', en: 'to recommend to us' } },
  { level: 'A2', it: 'griglia', tr: { bn: 'গ্রিল', en: 'grill' } },
  { level: 'A2', it: 'contagioso', tr: { bn: 'ছোঁয়াচে / সংক্রামক', en: 'contagious' } },
  { level: 'A2', it: 'riunirsi', tr: { bn: 'একত্রিত হওয়া', en: 'to gather / meet up' } },
  { level: 'A2', it: 'frequentare', tr: { bn: 'নিয়মিত অংশগ্রহণ করা (কোর্সে)', en: 'to attend (a course)' } },
  { level: 'A2', it: 'splendido', tr: { bn: 'চমৎকার / দারুণ', en: 'splendid' } },
  { level: 'A2', it: 'traccia', tr: { bn: 'চিহ্ন / ছাপ', en: 'trace / track' } },
  { level: 'A2', it: 'tasca', tr: { bn: 'পকেট', en: 'pocket' } },
  { level: 'A2', it: 'improvviso', tr: { bn: 'আকস্মিক / হঠাৎ', en: 'sudden' } },
  { level: 'A2', it: 'la spalla', tr: { bn: 'কাঁধ', en: 'shoulder' } },
  { level: 'A2', it: 'la carrozza', tr: { bn: 'ট্রেনের বগি', en: 'train carriage' } },
  { level: 'A2', it: 'la panchina', tr: { bn: 'বেঞ্চ', en: 'bench' } },
  { level: 'A2', it: "l'angolo", tr: { bn: 'কোণ / মোড়', en: 'corner' } },
  { level: 'A2', it: 'sospeso', tr: { bn: 'অমীমাংসিত / স্থগিত', en: 'pending / suspended' } },
  { level: 'A2', it: 'il controllo', tr: { bn: 'পরীক্ষা / যাচাই', en: 'check / inspection' } },
  { level: 'A2', it: 'preparato', tr: { bn: 'দক্ষ / প্রস্তুত', en: 'prepared / capable' } },
  { level: 'A2', it: 'il passaggio', tr: { bn: 'ধাপ / পারাপার', en: 'step / passage' } },
  { level: 'A2', it: "l'istruttore", tr: { bn: 'প্রশিক্ষক', en: 'instructor' } },
  { level: 'A2', it: 'lo specchietto', tr: { bn: 'গাড়ির সাইড/রিয়ার মিরর', en: 'car mirror' } },
  { level: 'A2', it: 'la maratona', tr: { bn: 'ম্যারাথন / দীর্ঘ দৌড়', en: 'marathon' } },
  { level: 'A2', it: 'farcela', tr: { bn: 'সফল হওয়া / সামলে ওঠা', en: 'to manage / succeed' } },
  { level: 'A2', it: 'il palcoscenico', tr: { bn: 'মঞ্চ', en: 'stage' } },
  { level: 'A2', it: 'applaudire', tr: { bn: 'করতালি দেওয়া', en: 'to applaud' } },
  { level: 'A2', it: 'la pasticceria', tr: { bn: 'মিষ্টান্ন / পেস্ট্রির দোকান', en: 'pastry shop' } },
  { level: 'A2', it: 'bisognare', tr: { bn: 'প্রয়োজন হওয়া', en: 'to be necessary' } },
  { level: 'A2', it: 'rionale', tr: { bn: 'স্থানীয় / পাড়ার', en: 'local / neighbourhood' } },
  { level: 'A2', it: 'il banco', tr: { bn: 'বাজারের স্টল / দোকান', en: 'market stall' } },
  { level: 'A2', it: 'il campanello', tr: { bn: 'দরজার কলিং বেল', en: 'doorbell' } },
  { level: 'A2', it: 'speziato', tr: { bn: 'মশলাদার', en: 'spiced' } },
  { level: 'B1', it: 'rigido', tr: { bn: 'কঠোর / তীব্র শীতল', en: 'harsh / rigid / cold' } },
  { level: 'B1', it: 'la copertina', tr: { bn: 'প্রচ্ছদ', en: 'book cover' } },
  { level: 'B1', it: 'trimestrale', tr: { bn: 'ত্রৈমাসিক', en: 'quarterly' } },
  { level: 'B1', it: 'sollevato', tr: { bn: 'স্বস্তিপ্রাপ্ত / ভারমুক্ত', en: 'relieved' } },
  { level: 'B1', it: 'il piano di studi', tr: { bn: 'পাঠ্যপরিকল্পনা', en: 'study plan' } },
  { level: 'B1', it: 'la tangenziale', tr: { bn: 'শহরের বাইপাস / রিং রোড', en: 'ring road / bypass' } },
  { level: 'B1', it: 'congratularsi', tr: { bn: 'অভিনন্দন জানানো', en: 'to congratulate' } },
  { level: 'B1', it: 'la parete divisoria', tr: { bn: 'বিভাজক দেয়াল', en: 'partition wall' } },
];

export const STORY_GLOSSARY_WORDS: BankWord[] = STORY_GLOSSARY_RAW.map((item) => ({
  key: `w:${item.level}:${item.it}`,
  level: item.level,
  it: item.it,
  tr: item.tr,
  topic: { bn: 'গল্পের শব্দভাণ্ডার', en: 'Story vocabulary' },
}));

export const BANK_LEVELS = ['A1', 'A2', 'B1', 'B2'] as const;
export type BankLevel = (typeof BANK_LEVELS)[number];

const ALL_ITEMS = new Map<string, { it: string; tr: Tr }>(
  [...Object.values(WORDS).flat(), ...STORY_GLOSSARY_WORDS, ...Object.values(SENTENCES).flat(), ...PHRASES].map((x) => [x.key, x]),
);

export function bankItem(key: string): { it: string; tr: Tr } | undefined {
  return ALL_ITEMS.get(key);
}

function normalizeLookup(raw: string): string {
  return raw
    .toLowerCase()
    .trim()
    .replace(/[’‘]/g, "'")
    .replace(/\s+/g, ' ');
}

function stripItalianArticle(norm: string): string {
  return norm
    .replace(/^(il\/la|un\/una)\s+/i, '')
    .replace(/^(il|lo|la|i|gli|le|un|uno|una)\s+/i, '')
    .replace(/^(l'|un')/i, '')
    .trim();
}

/**
 * Resolves a story glossary item (or raw Italian lemma/word) to a canonical bank key (`w:<level>:...` or `p:B1:...`)
 * without false substring matches. Supports article-stripped forms, curly apostrophes, clitic notations, and cross-level lookup.
 */
export function findGlossaryBankKey(
  wordOrGlossary: string | { word?: string; base: string },
  level: LevelId,
): string | null {
  const rawBase = typeof wordOrGlossary === 'string' ? wordOrGlossary : wordOrGlossary.base;
  const rawWord = typeof wordOrGlossary === 'string' ? '' : (wordOrGlossary.word ?? '');

  const normBase = normalizeLookup(rawBase);
  const strippedBase = stripItalianArticle(normBase);
  const withoutParens = normalizeLookup(normBase.replace(/\([^)]*\)/g, ''));
  const withoutClitic = normalizeLookup(withoutParens.replace(/\s*\+\s*[a-zàèéìòù]+$/i, ''));
  const withoutTrailingPrep = normalizeLookup(withoutClitic.replace(/\s+(a|di|da|in|con|su|per)$/i, ''));

  const candidates = Array.from(
    new Set(
      [
        normBase,
        strippedBase,
        withoutParens,
        stripItalianArticle(withoutParens),
        withoutClitic,
        stripItalianArticle(withoutClitic),
        withoutTrailingPrep,
        stripItalianArticle(withoutTrailingPrep),
        rawWord ? normalizeLookup(rawWord) : '',
        rawWord ? stripItalianArticle(normalizeLookup(rawWord)) : '',
      ].filter((c) => c.length >= 2),
    ),
  );

  const matchInList = (list: BankWord[], cand: string): BankWord | undefined => {
    // 1. Exact full match (normalized)
    const exact = list.find((w) => normalizeLookup(w.it) === cand);
    if (exact) return exact;
    // 2. Exact match after stripping article on bank item
    const bare = stripItalianArticle(cand);
    const byBare = list.find((w) => {
      const wNorm = normalizeLookup(w.it);
      const wBare = stripItalianArticle(wNorm);
      return wBare !== wNorm && wBare === bare;
    });
    if (byBare) return byBare;
    return undefined;
  };

  const orderedLevels: BankLevel[] = [
    ...(BANK_LEVELS.includes(level as BankLevel) ? [level as BankLevel] : []),
    ...BANK_LEVELS.filter((l) => l !== level),
  ];

  // Search primary WORDS first (same level, then other levels)
  for (const cand of candidates) {
    for (const lvl of orderedLevels) {
      const hit = matchInList(WORDS[lvl], cand);
      if (hit) return hit.key;
    }
  }

  // Search PHRASES
  for (const cand of candidates) {
    const phraseHit = matchInList(PHRASES, cand);
    if (phraseHit) return phraseHit.key;
  }

  // Search STORY_GLOSSARY_WORDS (same level, then other levels)
  for (const cand of candidates) {
    const sameLevelGlossary = STORY_GLOSSARY_WORDS.filter((w) => w.level === level);
    const hitSame = matchInList(sameLevelGlossary, cand);
    if (hitSame) return hitSame.key;
    const hitAny = matchInList(STORY_GLOSSARY_WORDS, cand);
    if (hitAny) return hitAny.key;
  }

  return null;
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
    const lower = s.it.toLowerCase().replace(/[’‘]/g, "'");
    if (!idx.has(lower)) idx.set(lower, { it: s.it, tr: s.tr, grammar: s.grammar });
    const tokens = lower
      .replace(/[.,!?'"«»()]/g, ' ')
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
  [
    ...Object.values(RICH_WORDS).flat(),
    ...STORY_GLOSSARY_WORDS.map((w) => enrichWord(w, SENTENCE_WORD_INDEX)),
  ].map((w) => [w.key, w]),
);

export function richWordByKey(key: string): RichVocabItem | undefined {
  return RICH_WORD_MAP.get(key);
}
