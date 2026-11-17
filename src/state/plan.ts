import type { Tr } from '../content/types';
import { LEVEL_ORDER, levelLessons, type LessonRef, findLesson } from '../content/courses';
import { dayKey } from '../lib/date';
import { buildDailyPlanEntries, type DailyPlanAction } from '../lib/dailyPlanNavigation';
import { getCurrentLevel, isLessonCompleted, isLevelUnlocked, type ProgressState, type TaskKind } from './progress';

export interface PlanItem {
  task: TaskKind;
  minutes: number;
  title: Tr;
  detail: Tr;
  /** Route to open when the item is tapped. */
  route: string;
  done: boolean;
  /** Structured deep-link metadata for the daily plan activity. */
  action: DailyPlanAction;
}

/** The lesson the learner should work on next: prefers active currentLevel when unlocked, then first unlocked incomplete lesson. */
export function currentLesson(state: ProgressState): LessonRef | undefined {
  const active = getCurrentLevel(state);
  if (isLevelUnlocked(state, active)) {
    const activeNext = levelLessons(active).find((l) => !isLessonCompleted(state, l.id));
    if (activeNext) return findLesson(activeNext.id);
  }
  for (const levelId of LEVEL_ORDER) {
    if (!isLevelUnlocked(state, levelId)) break;
    const next = levelLessons(levelId).find((l) => !isLessonCompleted(state, l.id));
    if (next) return findLesson(next.id);
  }
  return undefined;
}

/**
 * Builds today's plan from real active-level progress and centralized deep-link actions:
 * - New Lesson -> next incomplete module in the active CEFR course (resuming saved position)
 * - Listening -> Listening Lab at the active CEFR level
 * - Vocabulary Revision -> Vocabulary revision mode prioritizing bookmarked, weak/due & studied words
 * - Review & Quiz -> Interactive quiz at the active CEFR level from studied modules, vocab & mistakes
 * Minutes remain scaled to the user's daily goal and items are marked done only on actual completion.
 */
export function dailyPlan(state: ProgressState, today: string = dayKey()): PlanItem[] {
  const tasks = state.days[today]?.tasks ?? [];
  const goal = state.settings.dailyGoalMinutes;
  const entries = buildDailyPlanEntries(state, today);

  return entries.map((entry) => ({
    task: entry.action.activityType,
    minutes: Math.max(1, Math.round(goal * entry.weight)),
    title: entry.title,
    detail: entry.detail,
    route: entry.action.route,
    done: tasks.includes(entry.action.activityType),
    action: entry.action,
  }));
}
