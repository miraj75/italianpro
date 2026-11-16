import { SENTENCES, type BankLevel, type BankSentence } from '../content/bank';

export interface Tile {
  id: number;
  text: string;
}

/** Splits a sentence into word tiles; punctuation stays attached to its word. */
export function tokenize(sentence: string): string[] {
  return sentence.split(/\s+/).filter(Boolean);
}

export function shuffleTiles(words: string[], rand: () => number = Math.random): Tile[] {
  const tiles = words.map((text, id) => ({ id, text }));
  if (tiles.length < 2) return tiles;
  // Reshuffle until the order differs from the answer (bounded attempts).
  for (let attempt = 0; attempt < 10; attempt++) {
    for (let i = tiles.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [tiles[i], tiles[j]] = [tiles[j]!, tiles[i]!];
    }
    if (tiles.some((t, i) => t.text !== words[i])) break;
  }
  return tiles;
}

/** Compares by text so that identical words (e.g. two "e") are interchangeable. */
export function isCorrect(answer: Tile[], words: string[]): boolean {
  return answer.length === words.length && answer.every((t, i) => t.text === words[i]);
}

/** Sentences suitable as puzzles: 3–12 words, optionally filtered by grammar topic. */
export function puzzlePool(level: BankLevel, grammar?: string | null): BankSentence[] {
  return SENTENCES[level].filter((s) => {
    const n = tokenize(s.it).length;
    return n >= 3 && n <= 12 && (!grammar || s.grammar === grammar);
  });
}
