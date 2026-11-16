import { describe, expect, it } from 'vitest';
import { validateAllContent } from '../src/content/validate';

describe('automated curriculum validation', () => {
  it('passes all referential, duplicate, translation, and quiz checks with zero errors', async () => {
    const summary = await validateAllContent();
    const errors = summary.issues.filter((i) => i.severity === 'error');
    expect(errors, errors.map((e) => `${e.module}:${e.itemId} -> ${e.message}`).join('\n')).toEqual([]);

    // Batch 1 (A1) minimum curriculum targets
    expect(summary.counts.words.A1).toBeGreaterThanOrEqual(300);
    expect(summary.counts.sentences.A1).toBeGreaterThanOrEqual(200);
    expect(summary.counts.grammar.A1).toBeGreaterThanOrEqual(20);
    expect(summary.counts.lessons.A1).toBeGreaterThanOrEqual(18);
    expect(summary.counts.stories.A1).toBeGreaterThanOrEqual(20);
    expect(summary.counts.listening.A1).toBeGreaterThanOrEqual(30);
    expect(summary.counts.reading.A1).toBeGreaterThanOrEqual(20);
    expect(summary.counts.puzzles.A1).toBeGreaterThanOrEqual(100);
    expect(summary.counts.writing.A1).toBeGreaterThanOrEqual(12);
    expect(summary.counts.speaking.A1).toBeGreaterThanOrEqual(12);
    expect(summary.counts.assessments.A1).toBeGreaterThanOrEqual(7);

    // Batch 2 (A2) minimum curriculum targets
    expect(summary.counts.words.A2).toBeGreaterThanOrEqual(500);
    expect(summary.counts.sentences.A2).toBeGreaterThanOrEqual(350);
    expect(summary.counts.grammar.A2).toBeGreaterThanOrEqual(30);
    expect(summary.counts.lessons.A2).toBeGreaterThanOrEqual(12);
    expect(summary.counts.stories.A2).toBeGreaterThanOrEqual(30);
    expect(summary.counts.listening.A2).toBeGreaterThanOrEqual(40);
    expect(summary.counts.reading.A2).toBeGreaterThanOrEqual(30);
    expect(summary.counts.puzzles.A2).toBeGreaterThanOrEqual(150);
    expect(summary.counts.writing.A2).toBeGreaterThanOrEqual(12);
    expect(summary.counts.speaking.A2).toBeGreaterThanOrEqual(12);
    expect(summary.counts.assessments.A2).toBeGreaterThanOrEqual(5);

    // Batch 3 (B1) minimum curriculum targets
    expect(summary.counts.words.B1).toBeGreaterThanOrEqual(700);
    expect(summary.counts.sentences.B1).toBeGreaterThanOrEqual(500);
    expect(summary.counts.grammar.B1).toBeGreaterThanOrEqual(40);
    expect(summary.counts.lessons.B1).toBeGreaterThanOrEqual(12);
    expect(summary.counts.stories.B1).toBeGreaterThanOrEqual(40);
    expect(summary.counts.listening.B1).toBeGreaterThanOrEqual(50);
    expect(summary.counts.reading.B1).toBeGreaterThanOrEqual(40);
    expect(summary.counts.puzzles.B1).toBeGreaterThanOrEqual(200);
    expect(summary.counts.writing.B1).toBeGreaterThanOrEqual(12);
    expect(summary.counts.speaking.B1).toBeGreaterThanOrEqual(12);
    expect(summary.counts.assessments.B1).toBeGreaterThanOrEqual(5);

    // Batch 4 (B2) minimum curriculum targets
    expect(summary.counts.words.B2).toBeGreaterThanOrEqual(1000);
    expect(summary.counts.sentences.B2).toBeGreaterThanOrEqual(700);
    expect(summary.counts.grammar.B2).toBeGreaterThanOrEqual(50);
    expect(summary.counts.lessons.B2).toBeGreaterThanOrEqual(12);
    expect(summary.counts.stories.B2).toBeGreaterThanOrEqual(50);
    expect(summary.counts.listening.B2).toBeGreaterThanOrEqual(60);
    expect(summary.counts.reading.B2).toBeGreaterThanOrEqual(50);
    expect(summary.counts.puzzles.B2).toBeGreaterThanOrEqual(250);
    expect(summary.counts.writing.B2).toBeGreaterThanOrEqual(12);
    expect(summary.counts.speaking.B2).toBeGreaterThanOrEqual(12);
    expect(summary.counts.assessments.B2).toBeGreaterThanOrEqual(5);
  });
});
