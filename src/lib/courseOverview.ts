import {
  Award,
  BookOpen,
  CalendarDays,
  Clock,
  Compass,
  FileText,
  GitMerge,
  HandHelping,
  Hash,
  Headphones,
  HelpCircle,
  Infinity as InfinityIcon,
  Layers,
  MessageCircle,
  MessageSquare,
  Mic,
  Palette,
  PenTool,
  Quote,
  Signpost,
  Sparkles,
  Type,
  Users,
  type LucideIcon,
} from 'lucide-react';
import type { A1AcademyModuleId, AcademyModuleKind, AcademyModuleMeta } from '../content/academy/types';
import {
  getAcademyModules,
  isFinalExamModuleId,
} from '../content/academy/curriculum';
import { getLevel } from '../content/courses';
import type { LevelId, Tr } from '../content/types';
import {
  academyStudyStats,
  getAcademyModuleProgress,
  getNextAcademyModuleTarget,
  isAcademyModuleCompleted,
  isAcademyModuleUnlocked,
  overallAcademyProgress,
} from '../state/academyProgress';
import {
  isLevelUnlocked,
  type ProgressState,
} from '../state/progress';

export type LearningPathNodeStatus = 'completed' | 'current' | 'locked';

export interface LearningPathNode {
  id: string;
  order: number;
  title: string;
  subtitle: Tr;
  description: Tr;
  icon: LucideIcon;
  status: LearningPathNodeStatus;
  /** 0..1 completion inside this node */
  progressRatio: number;
  /** Concise tabular progress counter (e.g. "5/21" or "0/10 Q") */
  progressText: string;
  /** Optional score badge when attempted */
  bestScorePct?: number;
  /** Destination route when unlocked */
  route: string;
  /** Reason shown when locked */
  lockedHint?: Tr;
  /** Optional A1 section grouping divider metadata */
  sectionLabel?: { id: string; title: Tr };
  /** Distinguishes Phase B/C modules awaiting authoring from prerequisite locks */
  upcomingPhase?: 'B' | 'C';
}

export interface CourseOverview {
  levelId: LevelId;
  levelName: Tr;
  levelDescription: Tr;
  /** Completed units/modules in this level */
  completedModules: number;
  /** Total units/modules in this level */
  totalModules: number;
  /** Rounded 0..100 completion percentage */
  percentage: number;
  /** True once the learner has made any progress in this course */
  started: boolean;
  /** Title of the current or next incomplete module/lesson */
  nextTitle: string;
  /** Supporting subtitle of the current or next incomplete module/lesson */
  nextSubtitle: Tr;
  /** 0..1 completion ratio inside the current or next module/lesson */
  nextProgressRatio: number;
  /** Tabular progress text for the current or next module/lesson */
  nextProgressText: string;
  /** Direct destination when clicking Continue / Start Learning */
  continueRoute: string;
  /** Destination for the course's Learning Hub */
  hubRoute: string;
  /** True if this level's lessons/exams are unlocked */
  levelUnlocked: boolean;
  /** Metric kind for all Structured Learning Academies */
  unitKind: 'modules' | 'lessons';
  imageSrc: string;
}

const LEVEL_IMAGES: Record<LevelId, string> = {
  A1: './img/colosseum.webp',
  A2: './img/pisa.webp',
  B1: './img/milan.webp',
  B2: './img/milan.webp',
};

const A1_MODULE_ICONS: Record<A1AcademyModuleId, LucideIcon> = {
  alphabet: Type,
  numbers: Hash,
  'greetings-intro': HandHelping,
  articles: Layers,
  'nouns-gender-plurals': BookOpen,
  'pronouns-possessives': Users,
  verbs: InfinityIcon,
  'essential-verbs': Sparkles,
  adjectives: Palette,
  adverbs: Clock,
  prepositions: Signpost,
  conjunctions: GitMerge,
  'sentence-structure': HelpCircle,
  'time-dates': CalendarDays,
  vocabulary: BookOpen,
  'everyday-communication': MessageCircle,
  'culture-survival': Compass,
  'listening-speaking': Headphones,
  'reading-writing': FileText,
  'final-exam': Award,
};

const KIND_ICONS: Record<AcademyModuleKind, LucideIcon> = {
  alphabet: Type,
  numbers: Hash,
  articles: Layers,
  grammar: GitMerge,
  verbs: InfinityIcon,
  vocabulary: BookOpen,
  idioms: Quote,
  sentences: MessageSquare,
  communication: MessageCircle,
  reading: FileText,
  listening: Headphones,
  writing: PenTool,
  speaking: Mic,
  'writing-speaking': PenTool,
  'final-exam': Award,
};

function iconForModule(mod: AcademyModuleMeta, levelId: LevelId): LucideIcon {
  if (levelId === 'A1' && mod.id in A1_MODULE_ICONS) {
    return A1_MODULE_ICONS[mod.id as A1AcademyModuleId];
  }
  if (mod.kind && mod.kind in KIND_ICONS) {
    return KIND_ICONS[mod.kind];
  }
  return BookOpen;
}

/**
 * Data-driven summary of any CEFR course (A1, A2, B1, B2).
 * Each CEFR level reflects its own independent Structured Learning Academy path.
 */
export function getCourseOverview(state: ProgressState, levelId: LevelId): CourseOverview {
  const level = getLevel(levelId);
  const mods = getAcademyModules(levelId);
  const summary = overallAcademyProgress(state.academy, levelId);
  const nextMod = getNextAcademyModuleTarget(state.academy, levelId);
  const nextStats = academyStudyStats(state.academy, nextMod.id, levelId);
  const nextCompleted = isAcademyModuleCompleted(state.academy, nextMod.id, levelId);
  const anyAcademyActivity = mods.some((m) => {
    const p = getAcademyModuleProgress(state.academy, m.id, levelId);
    return p.completed || p.studiedItems.length > 0 || p.attempts > 0;
  });

  const nextProgressRatio = nextCompleted
    ? 1
    : nextStats.total > 0
      ? nextStats.studied / nextStats.total
      : 0;

  const nextProgressText =
    nextStats.total > 0
      ? `${nextStats.studied}/${nextStats.total}`
      : `0/${nextMod.examQuestionCount} Q`;

  return {
    levelId,
    levelName: level.name,
    levelDescription: level.description,
    completedModules: summary.completedCount,
    totalModules: summary.totalModules,
    percentage: Math.round((summary.completedCount / Math.max(1, summary.totalModules)) * 100),
    started: anyAcademyActivity,
    nextTitle: `${nextMod.order}. ${nextMod.title}`,
    nextSubtitle: nextMod.subtitle,
    nextProgressRatio,
    nextProgressText,
    continueRoute: nextMod.route,
    hubRoute: `/level/${levelId}`,
    levelUnlocked: isLevelUnlocked(state, levelId),
    unitKind: 'modules',
    imageSrc: LEVEL_IMAGES[levelId],
  };
}

/**
 * Builds the connected vertical learning path for ANY CEFR level (A1, A2, B1, B2)
 * using that level's own Structured Learning Academy configuration and independent progress.
 */
export function buildLevelLearningPathNodes(state: ProgressState, levelId: LevelId): LearningPathNode[] {
  const mods = getAcademyModules(levelId);

  return mods.map((mod) => {
    const completed = isAcademyModuleCompleted(state.academy, mod.id, levelId);
    const unlocked = mod.implemented && isAcademyModuleUnlocked(state.academy, mod.id, levelId);
    const stats = academyStudyStats(state.academy, mod.id, levelId);
    const modProg = getAcademyModuleProgress(state.academy, mod.id, levelId);

    const status: LearningPathNodeStatus = completed ? 'completed' : unlocked ? 'current' : 'locked';

    const progressRatio = completed
      ? 1
      : stats.total > 0
        ? stats.studied / stats.total
        : 0;

    const progressText = isFinalExamModuleId(mod.id)
      ? `0/${mod.examQuestionCount} Q`
      : stats.total > 0
        ? `${stats.studied}/${stats.total}`
        : `0/${mod.examQuestionCount} Q`;

    return {
      id: mod.id,
      order: mod.order,
      title: mod.title,
      subtitle: mod.subtitle,
      description: mod.description,
      icon: iconForModule(mod, levelId),
      status,
      progressRatio,
      progressText,
      bestScorePct: modProg.attempts > 0 ? Math.round(modProg.bestScore * 100) : undefined,
      route: mod.route,
      sectionLabel: mod.sectionLabel,
      upcomingPhase: !mod.implemented ? (mod.phase as 'B' | 'C') : undefined,
      lockedHint: !mod.implemented
        ? {
            bn: `পরবর্তী ধাপে যুক্ত হবে (Phase ${mod.phase})`,
            en: `Coming in Phase ${mod.phase}`,
            it: `In arrivo nella Fase ${mod.phase}`,
          }
        : isFinalExamModuleId(mod.id)
          ? {
              bn: 'আগের সব অধ্যায় সম্পন্ন করলে চূড়ান্ত পরীক্ষা খুলবে',
              en: 'Complete all prior modules to unlock Final Exam',
              it: 'Completa tutti i moduli precedenti per sbloccare l’Esame Finale',
            }
          : {
              bn: 'আগের মডিউল সম্পন্ন করলে খুলবে',
              en: 'Complete the previous module to unlock',
              it: 'Completa il modulo precedente per sbloccare',
            },
    };
  });
}

export function buildA1LearningPathNodes(state: ProgressState): LearningPathNode[] {
  return buildLevelLearningPathNodes(state, 'A1');
}
