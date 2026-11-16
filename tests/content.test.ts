import { describe, expect, it } from 'vitest';
import { LEVELS, allLessons } from '../src/content/courses';
import { VERBS } from '../src/content/verbs';
import { SURVIVAL_TOPICS } from '../src/content/survival';
import type { Tr } from '../src/content/types';

const filled = (t: Tr) => t.bn.trim().length > 0 && t.en.trim().length > 0;

describe('course content integrity', () => {
  const lessons = allLessons().map((r) => r.lesson);

  it('has unique lesson ids', () => {
    const ids = lessons.map((l) => l.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('every lesson is fully trilingual and has all sections', () => {
    for (const l of lessons) {
      expect(filled(l.subtitle), l.id).toBe(true);
      expect(l.objectives.length).toBeGreaterThan(0);
      expect(l.phrases.length).toBeGreaterThan(0);
      expect(l.grammar.length).toBeGreaterThan(0);
      expect(l.dialogue.lines.length).toBeGreaterThan(1);
      expect(l.quiz.length).toBeGreaterThanOrEqual(4);
      l.objectives.forEach((o) => expect(filled(o)).toBe(true));
      l.phrases.forEach((p) => expect(filled(p.tr), `${l.id}:${p.id}`).toBe(true));
      l.dialogue.lines.forEach((d) => expect(filled(d.tr)).toBe(true));
      l.grammar.forEach((g) => {
        expect(filled(g.title) && filled(g.explanation)).toBe(true);
        g.examples.forEach((e) => expect(filled(e.tr)).toBe(true));
      });
    }
  });

  it('quiz answers point at a real, unique option', () => {
    for (const l of lessons) {
      const ids = l.quiz.map((q) => q.id);
      expect(new Set(ids).size).toBe(ids.length);
      for (const q of l.quiz) {
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
        expect(new Set(q.options).size).toBe(q.options.length);
        expect(filled(q.prompt) && filled(q.explanation)).toBe(true);
      }
    }
  });

  it('phrase ids are unique within a lesson', () => {
    for (const l of lessons) {
      const ids = l.phrases.map((p) => p.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('levels are in CEFR order', () => {
    expect(LEVELS.map((l) => l.id)).toEqual(['A1', 'A2', 'B1', 'B2']);
  });

  it('verbs have six present forms and survival phrases are translated', () => {
    VERBS.forEach((v) => v.conjugations.forEach((c) => expect(c.forms.every((f) => f.length > 0)).toBe(true)));
    SURVIVAL_TOPICS.forEach((t) => t.phrases.forEach((p) => expect(filled(p.tr)).toBe(true)));
  });
});
