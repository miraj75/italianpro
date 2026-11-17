import type { LevelId, Tr } from '../content/types';
import { getAcademyModules, isFinalExamModuleId } from '../content/academy/curriculum';
import { dayKey } from './date';
import { loadModulePosition } from './modulePosition';
import { getReviewQuizAvailability } from './reviewQuiz';
import { getVocabRevisionSummary } from './vocabRevision';
import {
  getAcademyModuleProgress,
  getNextAcademyModuleTarget,
  isAcademyModuleCompleted,
} from '../state/academyProgress';
import { getCurrentLevel, type ProgressState, type TaskKind } from '../state/progress';

export interface DailyPlanSessionConfig {
  source: 'daily-plan';
  mode?: string;
  prioritizeBookmarked?: boolean;
  prioritizeWeakAndDue?: boolean;
  prioritizeStudied?: boolean;
  includeMistakes?: boolean;
  resumePosition?: boolean;
}

export interface DailyPlanAction {
  actionId: string;
  activityType: TaskKind;
  level: LevelId;
  targetId: string;
  route: string;
  available: boolean;
  unavailableReason?: Tr;
  sessionConfig: DailyPlanSessionConfig;
}

export interface DailyPlanEntry {
  action: DailyPlanAction;
  title: Tr;
  detail: Tr;
  weight: number;
}

function withQuery(baseRoute: string, params: Record<string, string>): string {
  const qs = new URLSearchParams(params).toString();
  if (!qs) return baseRoute;
  return baseRoute.includes('?') ? `${baseRoute}&${qs}` : `${baseRoute}?${qs}`;
}

export function buildDailyPlanEntries(state: ProgressState, today: string = dayKey()): DailyPlanEntry[] {
  const activeLevel = getCurrentLevel(state);
  const implementedMods = getAcademyModules(activeLevel).filter((m) => m.implemented);
  const nextMod = implementedMods.length > 0 ? getNextAcademyModuleTarget(state.academy, activeLevel) : undefined;
  const savedPos = nextMod ? loadModulePosition(activeLevel, nextMod.id) : undefined;
  const modProg = nextMod ? getAcademyModuleProgress(state.academy, nextMod.id, activeLevel) : undefined;
  const modCompleted = nextMod ? isAcademyModuleCompleted(state.academy, nextMod.id, activeLevel) : false;

  const hasSavedResume = Boolean(
    nextMod &&
      !modCompleted &&
      (savedPos?.stage ||
        savedPos?.tab ||
        (modProg && (modProg.theoryCompleted || modProg.studiedItems.length > 0 || modProg.drillCompleted))),
  );

  const lessonAvailable = Boolean(nextMod);
  const lessonRoute = nextMod
    ? withQuery(nextMod.route, {
        from: 'home',
        activity: 'lesson',
        level: activeLevel,
      })
    : `/level/${activeLevel}?from=home`;

  const lessonDetail: Tr = !nextMod
    ? {
        bn: `${activeLevel} কোর্সের পাঠ এখনো প্রস্তুত হচ্ছে`,
        en: `${activeLevel} course lessons are not available yet`,
        it: `Lezioni ${activeLevel} non ancora disponibili`,
      }
    : modCompleted && isFinalExamModuleId(nextMod.id)
      ? {
          bn: `${activeLevel} সব মডিউল সম্পন্ন — ${nextMod.order}. ${nextMod.title} পুনরায় দেখুন`,
          en: `All ${activeLevel} modules completed — review ${nextMod.order}. ${nextMod.title}`,
          it: `Tutti i moduli ${activeLevel} completati — rivedi ${nextMod.order}. ${nextMod.title}`,
        }
      : hasSavedResume
        ? {
            bn: `${activeLevel} · ${nextMod.order}. ${nextMod.title} — যেখান থেকে থেমেছিলেন`,
            en: `${activeLevel} · ${nextMod.order}. ${nextMod.title} — resume progress`,
            it: `${activeLevel} · ${nextMod.order}. ${nextMod.title} — riprendi studio`,
          }
        : {
            bn: `${activeLevel} · ${nextMod.order}. ${nextMod.title}`,
            en: `${activeLevel} · ${nextMod.order}. ${nextMod.title}`,
            it: `${activeLevel} · ${nextMod.order}. ${nextMod.title}`,
          };

  const vocabSummary = getVocabRevisionSummary(state, activeLevel, today);
  const vocabAvailable = vocabSummary.totalWords > 0;
  const vocabRoute = withQuery('/practice/words', {
    level: activeLevel,
    mode: 'recall',
    revision: '1',
    from: 'home',
    activity: 'vocab',
  });

  const vocabDetail: Tr = !vocabAvailable
    ? {
        bn: `${activeLevel} স্তরে কোনো শব্দভাণ্ডার পাওয়া যায়নি`,
        en: `No vocabulary items found for ${activeLevel}`,
        it: `Nessun vocabolo trovato per ${activeLevel}`,
      }
    : vocabSummary.priorityCount > 0
      ? {
          bn: `${activeLevel} · বুকমার্ক, দুর্বল ও পঠিত ${vocabSummary.priorityCount}টি শব্দ রিভিশন`,
          en: `${activeLevel} · Revise ${vocabSummary.priorityCount} saved, weak & studied words`,
          it: `${activeLevel} · Ripassa ${vocabSummary.priorityCount} parole salvate, deboli e studiate`,
        }
      : {
          bn: `${activeLevel} শব্দভাণ্ডার রিভিশন (${vocabSummary.totalWords}টি শব্দ)`,
          en: `Start ${activeLevel} vocabulary revision (${vocabSummary.totalWords} words)`,
          it: `Ripasso lessico ${activeLevel} (${vocabSummary.totalWords} parole)`,
        };

  const listeningRoute = withQuery('/practice/listening', {
    level: activeLevel,
    from: 'home',
    activity: 'listening',
  });

  const reviewAvail = getReviewQuizAvailability(state, activeLevel);
  const reviewRoute = withQuery('/practice/mistakes', {
    mode: 'quiz',
    level: activeLevel,
    from: 'home',
    activity: 'review',
  });

  const reviewDetail: Tr =
    reviewAvail.activeMistakesCount > 0
      ? {
          bn: `${activeLevel} · ${reviewAvail.activeMistakesCount}টি ভুল ও শেখা অধ্যায় থেকে কুইজ`,
          en: `${activeLevel} · Quiz from ${reviewAvail.activeMistakesCount} mistakes & studied modules`,
          it: `${activeLevel} · Quiz da ${reviewAvail.activeMistakesCount} errori e moduli studiati`,
        }
      : reviewAvail.completedModulesCount + reviewAvail.studiedModulesCount > 0
        ? {
            bn: `${activeLevel} · পঠিত অধ্যায় ও শব্দভাণ্ডার রিভিউ কুইজ`,
            en: `${activeLevel} · Quiz from studied modules & vocabulary`,
            it: `${activeLevel} · Quiz dai moduli studiati e dal lessico`,
          }
        : {
            bn: `${activeLevel} মূল ব্যাকরণ ও শব্দভাণ্ডার রিভিউ কুইজ`,
            en: `${activeLevel} core grammar & vocabulary review quiz`,
            it: `Quiz di ripasso ${activeLevel} (grammatica e lessico)`,
          };

  return [
    {
      weight: 0.4,
      title: { bn: 'নতুন পাঠ', en: 'New lesson', it: 'Nuova lezione' },
      detail: lessonDetail,
      action: {
        actionId: `daily:${activeLevel}:lesson:${nextMod?.id ?? 'none'}`,
        activityType: 'lesson',
        level: activeLevel,
        targetId: nextMod?.id ?? 'none',
        route: lessonRoute,
        available: lessonAvailable,
        unavailableReason: lessonAvailable
          ? undefined
          : {
              bn: `${activeLevel} স্তরে এখনো কোনো পাঠ যুক্ত হয়নি।`,
              en: `No lessons are available yet for level ${activeLevel}.`,
              it: `Nessuna lezione disponibile al momento per il livello ${activeLevel}.`,
            },
        sessionConfig: {
          source: 'daily-plan',
          resumePosition: true,
        },
      },
    },
    {
      weight: 0.2,
      title: { bn: 'শোনা (Listening)', en: 'Listening', it: 'Ascolto' },
      detail: {
        bn: `${activeLevel} লিসেনিং ল্যাব — অডিও অনুশীলন ও কুইজ`,
        en: `${activeLevel} Listening Lab — audio exercises & quiz`,
        it: `Laboratorio d’ascolto ${activeLevel} — esercizi audio e quiz`,
      },
      action: {
        actionId: `daily:${activeLevel}:listening`,
        activityType: 'listening',
        level: activeLevel,
        targetId: `listening-lab-${activeLevel.toLowerCase()}`,
        route: listeningRoute,
        available: true,
        sessionConfig: {
          source: 'daily-plan',
          mode: 'listening-lab',
        },
      },
    },
    {
      weight: 0.2,
      title: { bn: 'শব্দভাণ্ডার রিভিশন', en: 'Vocabulary revision', it: 'Ripasso lessico' },
      detail: vocabDetail,
      action: {
        actionId: `daily:${activeLevel}:vocab:recall`,
        activityType: 'vocab',
        level: activeLevel,
        targetId: `vocab-revision-${activeLevel.toLowerCase()}`,
        route: vocabRoute,
        available: vocabAvailable,
        unavailableReason: vocabAvailable
          ? undefined
          : {
              bn: `${activeLevel} শব্দভাণ্ডার এখনো প্রস্তুত হয়নি।`,
              en: `Vocabulary bank is not available yet for ${activeLevel}.`,
              it: `Vocabolario non ancora disponibile per ${activeLevel}.`,
            },
        sessionConfig: {
          source: 'daily-plan',
          mode: 'recall',
          prioritizeBookmarked: true,
          prioritizeWeakAndDue: true,
          prioritizeStudied: true,
        },
      },
    },
    {
      weight: 0.2,
      title: { bn: 'রিভিউ ও কুইজ', en: 'Review & quiz', it: 'Ripasso e quiz' },
      detail: reviewDetail,
      action: {
        actionId: `daily:${activeLevel}:review:quiz`,
        activityType: 'review',
        level: activeLevel,
        targetId: `review-quiz-${activeLevel.toLowerCase()}`,
        route: reviewRoute,
        available: true,
        sessionConfig: {
          source: 'daily-plan',
          mode: 'quiz',
          includeMistakes: true,
          prioritizeStudied: true,
        },
      },
    },
  ];
}

export function openDailyPlanActivity(
  item: { action: DailyPlanAction; route: string },
  navigate: (to: string) => void,
  onUnavailable?: (reason: Tr) => void,
): boolean {
  if (!item.action.available) {
    if (item.action.unavailableReason && onUnavailable) {
      onUnavailable(item.action.unavailableReason);
    }
    return false;
  }
  navigate(item.action.route);
  return true;
}
