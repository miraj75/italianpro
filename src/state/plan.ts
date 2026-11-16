import type { Tr } from '../content/types';
import { LEVEL_ORDER, levelLessons, type LessonRef, findLesson } from '../content/courses';
import { dayKey } from '../lib/date';
import { dueCards, isLessonCompleted, isLevelUnlocked, type ProgressState, type TaskKind } from './progress';

export interface PlanItem {
  task: TaskKind;
  minutes: number;
  title: Tr;
  detail: Tr;
  /** Route to open when the item is tapped. */
  route: string;
  done: boolean;
}

/** The lesson the learner should work on next: first unlocked, uncompleted lesson. */
export function currentLesson(state: ProgressState): LessonRef | undefined {
  for (const levelId of LEVEL_ORDER) {
    if (!isLevelUnlocked(state, levelId)) break;
    const next = levelLessons(levelId).find((l) => !isLessonCompleted(state, l.id));
    if (next) return findLesson(next.id);
  }
  return undefined;
}

/**
 * Builds today's plan from real progress: the next lesson, its dialogue,
 * due flashcards, and either outstanding mistakes or the lesson quiz.
 * Minutes are scaled so the plan fits the learner's daily goal.
 */
export function dailyPlan(state: ProgressState, today: string = dayKey()): PlanItem[] {
  const tasks = state.days[today]?.tasks ?? [];
  const ref = currentLesson(state);
  const due = dueCards(state, today).length;
  const mistakes = Object.keys(state.mistakes).length;
  const lessonRoute = ref ? `/lesson/${ref.lesson.id}` : '/courses';

  const base: Omit<PlanItem, 'minutes' | 'done'>[] = [
    {
      task: 'lesson',
      title: { bn: 'নতুন পাঠ', en: 'New lesson' },
      detail: ref
        ? { bn: `${ref.lesson.title} — বাক্যাংশ ও ব্যাকরণ`, en: `${ref.lesson.title} — phrases & grammar` }
        : { bn: 'সব উপলব্ধ পাঠ সম্পন্ন', en: 'All available lessons completed' },
      route: lessonRoute,
    },
    {
      task: 'listening',
      title: { bn: 'শোনা (Listening)', en: 'Listening' },
      detail: { bn: 'পাঠের সংলাপ শুনুন', en: 'Listen to the lesson dialogue' },
      route: ref ? `${lessonRoute}?tab=dialogue` : '/courses',
    },
    {
      task: 'vocab',
      title: { bn: 'শব্দভাণ্ডার রিভিশন', en: 'Vocabulary review' },
      detail: due > 0
        ? { bn: `${due}টি কার্ড রিভিশনের সময় হয়েছে`, en: `${due} cards due for review` }
        : { bn: 'আজকের জন্য কোনো কার্ড বাকি নেই', en: 'No cards due today' },
      route: '/practice/vocabulary',
    },
    {
      task: 'review',
      title: { bn: 'রিভিউ ও কুইজ', en: 'Review & quiz' },
      detail: mistakes > 0
        ? { bn: `${mistakes}টি ভুল আবার অনুশীলন করুন`, en: `Practise ${mistakes} past mistakes` }
        : { bn: 'পাঠের কুইজ দিন', en: 'Take the lesson quiz' },
      route: mistakes > 0 ? '/practice/mistakes' : ref ? `${lessonRoute}?tab=quiz` : '/courses',
    },
  ];

  const weights = [0.4, 0.2, 0.2, 0.2];
  const goal = state.settings.dailyGoalMinutes;
  return base.map((item, i) => ({
    ...item,
    minutes: Math.max(1, Math.round(goal * weights[i]!)),
    // With no cards due, vocabulary review has nothing to do and counts as done.
    done: tasks.includes(item.task) || (item.task === 'vocab' && due === 0 && Object.keys(state.cards).length > 0),
  }));
}
