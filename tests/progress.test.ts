import { describe, expect, it } from 'vitest';
import { initialState, reducer, isLessonUnlocked, isLevelUnlocked, dueCards, totalStudySeconds, type ProgressState } from '../src/state/progress';
import { reviewCard } from '../src/state/srs';
import { dailyPlan, currentLesson } from '../src/state/plan';
import { allLessons } from '../src/content/courses';

const today = '2026-11-16';
const lessons = allLessons().map((r) => r.lesson);
const pass = (s: ProgressState, lessonId: string) => {
  const quiz = lessons.find((l) => l.id === lessonId)!.quiz;
  return reducer(s, { type: 'submitQuiz', lessonId, today, results: quiz.map((q) => ({ questionId: q.id, correct: true })) });
};

describe('unlocking', () => {
  it('opens lessons sequentially', () => {
    let s = initialState();
    expect(isLessonUnlocked(s, 'A1', lessons[0]!.id)).toBe(true);
    expect(isLessonUnlocked(s, 'A1', lessons[1]!.id)).toBe(false);
    s = pass(s, lessons[0]!.id);
    expect(isLessonUnlocked(s, 'A1', lessons[1]!.id)).toBe(true);
  });

  it('does not unlock A2 on partial lessons, unlocks A2 on full A1 completion, B1 on full A2 completion, and B2 on full B1 completion', () => {
    let s = initialState();
    expect(isLevelUnlocked(s, 'A2')).toBe(false);
    s = pass(s, lessons[0]!.id);
    expect(isLevelUnlocked(s, 'A2')).toBe(false);
    const a1Lessons = allLessons().filter((r) => r.level.id === 'A1').map((r) => r.lesson);
    for (const l of a1Lessons) s = pass(s, l.id);
    expect(isLevelUnlocked(s, 'A2')).toBe(true);
    expect(isLevelUnlocked(s, 'B1')).toBe(false);
    const a2Lessons = allLessons().filter((r) => r.level.id === 'A2').map((r) => r.lesson);
    for (const l of a2Lessons) s = pass(s, l.id);
    expect(isLevelUnlocked(s, 'B1')).toBe(true);
    expect(isLevelUnlocked(s, 'B2')).toBe(false);
    for (const l of lessons) s = pass(s, l.id);
    expect(isLevelUnlocked(s, 'B2')).toBe(true);
  });

  it('a failing score does not complete the lesson and records mistakes', () => {
    const quiz = lessons[0]!.quiz;
    const s = reducer(initialState(), {
      type: 'submitQuiz', lessonId: lessons[0]!.id, today,
      results: quiz.map((q, i) => ({ questionId: q.id, correct: i === 0 })),
    });
    expect(s.lessons[lessons[0]!.id]!.completed).toBe(false);
    expect(Object.keys(s.mistakes).length).toBe(quiz.length - 1);
  });

  it('preserves completedAt timestamp across repeat passing attempts', () => {
    const once = pass(initialState(), lessons[0]!.id);
    const twice = reducer(once, {
      type: 'submitQuiz',
      lessonId: lessons[0]!.id,
      today: '2026-11-20',
      results: lessons[0]!.quiz.map((q) => ({ questionId: q.id, correct: true })),
    });
    expect(twice.lessons[lessons[0]!.id]!.completed).toBe(true);
    expect(twice.lessons[lessons[0]!.id]!.completedAt).toBe(today);
  });
});

describe('spaced repetition', () => {
  it('moves cards up boxes and resets on lapse', () => {
    const c0 = { box: 0, due: today, reviews: 0, lapses: 0 };
    const c1 = reviewCard(c0, true, today);
    expect(c1.box).toBe(1);
    expect(c1.due).toBe('2026-11-17');
    const c2 = reviewCard({ ...c1, box: 3 }, false, today);
    expect(c2.box).toBe(0);
    expect(c2.lapses).toBe(1);
  });

  it('viewing phrases creates due cards', () => {
    const l = lessons[0]!;
    const s = reducer(initialState(), { type: 'viewLessonTab', lessonId: l.id, tab: 'phrases', phraseIds: l.phrases.map((p) => p.id), today });
    expect(dueCards(s, today).length).toBe(l.phrases.length);
  });
});

describe('study time and plan', () => {
  it('sums study seconds accurately across days', () => {
    const s = { ...initialState(), days: {
      '2026-11-14': { seconds: 300, tasks: [] },
      '2026-11-15': { seconds: 0, tasks: ['lesson' as const] },
      '2026-11-16': { seconds: 90, tasks: [] },
    } };
    expect(totalStudySeconds(s)).toBe(390);
  });

  it('plan sums to the daily goal and points at the current lesson', () => {
    const s = initialState();
    const plan = dailyPlan(s, today);
    expect(plan.reduce((a, p) => a + p.minutes, 0)).toBe(25);
    expect(currentLesson(s)?.lesson.id).toBe(lessons[0]!.id);
    expect(plan[0]!.route).toBe('/academy/a1/alphabet?from=home&activity=lesson&level=A1');
  });
});
