import { describe, expect, it } from 'vitest';
import { PHRASES, SENTENCES, WORDS } from '../src/content/bank';
import { GRAMMAR_TOPICS, grammarById } from '../src/content/grammar';
import { isCorrect, puzzlePool, shuffleTiles, tokenize } from '../src/state/puzzle';

describe('vocabulary and sentence bank', () => {
  it('meets the level targets', () => {
    expect(WORDS.A1.length).toBeGreaterThanOrEqual(300);
    expect(SENTENCES.A1.length).toBeGreaterThanOrEqual(100);
    expect(WORDS.A2.length).toBeGreaterThanOrEqual(500);
    expect(SENTENCES.A2.length).toBeGreaterThanOrEqual(200);
    expect(WORDS.B1.length).toBeGreaterThanOrEqual(600);
    expect(PHRASES.length).toBeGreaterThanOrEqual(50);
  });

  it('every entry is trilingual and keys are unique', () => {
    const all = [...Object.values(WORDS).flat(), ...Object.values(SENTENCES).flat(), ...PHRASES];
    for (const x of all) {
      expect(x.it.trim(), x.key).not.toBe('');
      expect(x.tr.bn.trim(), x.key).not.toBe('');
      expect(x.tr.en.trim(), x.key).not.toBe('');
    }
    const keys = all.map((x) => x.key);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it('every word has a topic', () => {
    for (const w of Object.values(WORDS).flat()) expect(w.topic.en, w.key).not.toBe('');
  });

  it('every sentence links to an existing grammar topic', () => {
    for (const s of Object.values(SENTENCES).flat()) expect(grammarById(s.grammar), `${s.key} → ${s.grammar}`).toBeDefined();
  });

  it('grammar topics have unique ids and full explanations', () => {
    const ids = GRAMMAR_TOPICS.map((g) => g.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const g of GRAMMAR_TOPICS) expect(g.explanation.bn && g.explanation.en && g.name.bn).toBeTruthy();
  });
});

describe('sentence puzzle', () => {
  it('shuffles into a different order but checks by text', () => {
    const words = tokenize('Io sono Marco.');
    const tiles = shuffleTiles(words, () => 0.1);
    expect(tiles.map((t) => t.text).join(' ')).not.toBe(words.join(' '));
    const ordered = [...tiles].sort((a, b) => a.id - b.id);
    expect(isCorrect(ordered, words)).toBe(true);
    expect(isCorrect(tiles, words)).toBe(false);
  });

  it('has puzzles for every level', () => {
    for (const l of ['A1', 'A2', 'B1'] as const) expect(puzzlePool(l).length).toBeGreaterThan(50);
  });
});
