import {
  A1_ACADEMY_MODULES,
  findAcademyModule,
  getAcademyModules,
  getPreviousAcademyModule,
  inferLevelFromModuleId,
  isFinalExamModuleId,
} from '../content/academy/curriculum';
import type { A1AcademyModuleId, AcademyModuleId } from '../content/academy/types';
import type { LevelId } from '../content/types';

export interface ExamAttemptRecord {
  id: string;
  moduleId: AcademyModuleId;
  date: string;
  total: number;
  correct: number;
  incorrect: number;
  score: number;
  passed: boolean;
  awardedXp: number;
}

export interface AcademyModuleProgress {
  theoryCompleted?: boolean;
  studiedItems: string[];
  drillCompleted?: boolean;
  drillBestScore?: number;
  drillCorrect?: number;
  drillIncorrect?: number;
  completed: boolean;
  completedAt?: string;
  bestScore: number;
  attempts: number;
  failedAttempts: number;
  completedAttemptIds: string[];
  history: ExamAttemptRecord[];
}

export type LevelAcademyModulesMap = Record<string, AcademyModuleProgress>;

export interface AcademyProgressState {
  /** Legacy & canonical storage for CEFR A1 Academy modules (preserved for full backward compatibility). */
  modules: Partial<Record<A1AcademyModuleId, AcademyModuleProgress>>;
  /** Independent structured academy progress for CEFR A2, B1, and B2. */
  levels?: Partial<Record<'A2' | 'B1' | 'B2', LevelAcademyModulesMap>>;
}

export function emptyModuleProgress(): AcademyModuleProgress {
  return {
    theoryCompleted: false,
    studiedItems: [],
    drillCompleted: false,
    drillBestScore: 0,
    drillCorrect: 0,
    drillIncorrect: 0,
    completed: false,
    bestScore: 0,
    attempts: 0,
    failedAttempts: 0,
    completedAttemptIds: [],
    history: [],
  };
}

export function defaultAcademyProgress(): AcademyProgressState {
  return { modules: {}, levels: {} };
}

function normalizeModuleEntry(entry: unknown): AcademyModuleProgress | undefined {
  if (!entry || typeof entry !== 'object') return undefined;
  const e = entry as Partial<AcademyModuleProgress>;
  const completed = Boolean(e.completed);
  return {
    theoryCompleted: Boolean(e.theoryCompleted ?? completed),
    studiedItems: Array.isArray(e.studiedItems) ? e.studiedItems.filter((x): x is string => typeof x === 'string') : [],
    drillCompleted: Boolean(e.drillCompleted ?? completed),
    drillBestScore: typeof e.drillBestScore === 'number' && Number.isFinite(e.drillBestScore) ? e.drillBestScore : 0,
    drillCorrect: typeof e.drillCorrect === 'number' && Number.isFinite(e.drillCorrect) ? e.drillCorrect : 0,
    drillIncorrect: typeof e.drillIncorrect === 'number' && Number.isFinite(e.drillIncorrect) ? e.drillIncorrect : 0,
    completed,
    completedAt: typeof e.completedAt === 'string' ? e.completedAt : undefined,
    bestScore: typeof e.bestScore === 'number' && Number.isFinite(e.bestScore) ? e.bestScore : 0,
    attempts: typeof e.attempts === 'number' && Number.isFinite(e.attempts) ? e.attempts : 0,
    failedAttempts: typeof e.failedAttempts === 'number' && Number.isFinite(e.failedAttempts) ? e.failedAttempts : 0,
    completedAttemptIds: Array.isArray(e.completedAttemptIds)
      ? e.completedAttemptIds.filter((x): x is string => typeof x === 'string')
      : [],
    history: Array.isArray(e.history) ? e.history.slice(0, 20) : [],
  };
}

export function normalizeAcademyProgress(raw: unknown): AcademyProgressState {
  if (!raw || typeof raw !== 'object') return defaultAcademyProgress();
  const obj = raw as Partial<AcademyProgressState>;

  const modules: Partial<Record<A1AcademyModuleId, AcademyModuleProgress>> = {};
  if (obj.modules && typeof obj.modules === 'object') {
    for (const mod of A1_ACADEMY_MODULES) {
      const normalized = normalizeModuleEntry(obj.modules[mod.id as A1AcademyModuleId]);
      if (normalized) modules[mod.id as A1AcademyModuleId] = normalized;
    }
  }

  const levels: Partial<Record<'A2' | 'B1' | 'B2', LevelAcademyModulesMap>> = {};
  if (obj.levels && typeof obj.levels === 'object') {
    for (const lvl of ['A2', 'B1', 'B2'] as const) {
      const rawMap = obj.levels[lvl];
      if (!rawMap || typeof rawMap !== 'object') continue;
      const lvlMap: LevelAcademyModulesMap = {};
      for (const mod of getAcademyModules(lvl)) {
        const normalized = normalizeModuleEntry(rawMap[mod.id]);
        if (normalized) lvlMap[mod.id] = normalized;
      }
      if (Object.keys(lvlMap).length > 0) levels[lvl] = lvlMap;
    }
  }

  return { modules, levels };
}

export function getAcademyModuleProgress(
  academy: AcademyProgressState | undefined,
  moduleId: AcademyModuleId,
  level?: LevelId,
): AcademyModuleProgress {
  const lvl = level ?? inferLevelFromModuleId(moduleId);
  if (lvl === 'A1') {
    return academy?.modules?.[moduleId as A1AcademyModuleId] ?? emptyModuleProgress();
  }
  return academy?.levels?.[lvl]?.[moduleId] ?? emptyModuleProgress();
}

export function isAcademyModuleCompleted(
  academy: AcademyProgressState | undefined,
  moduleId: AcademyModuleId,
  level?: LevelId,
): boolean {
  const lvl = level ?? inferLevelFromModuleId(moduleId);
  const meta = findAcademyModule(moduleId, lvl);
  const mod = getAcademyModuleProgress(academy, moduleId, lvl);
  if (!meta) return false;
  if (!mod.completed) return false;
  if (meta.requiredItemIds.length > 0) {
    const studied = new Set(mod.studiedItems);
    return meta.requiredItemIds.every((id) => studied.has(id));
  }
  return true;
}

export function isAcademyModuleUnlocked(
  academy: AcademyProgressState | undefined,
  moduleId: AcademyModuleId,
  level?: LevelId,
): boolean {
  const lvl = level ?? inferLevelFromModuleId(moduleId);
  const meta = findAcademyModule(moduleId, lvl);
  if (!meta || !meta.implemented) return false;
  if (meta.order === 1) return true;
  if (isFinalExamModuleId(moduleId)) {
    const mods = getAcademyModules(lvl);
    const prerequisiteCategories = mods.filter((m) => !isFinalExamModuleId(m.id));
    return prerequisiteCategories.every((m) => m.implemented && isAcademyModuleCompleted(academy, m.id, lvl));
  }
  const prev = getPreviousAcademyModule(moduleId, lvl);
  if (!prev) return true;
  return isAcademyModuleCompleted(academy, prev.id, lvl);
}

export function getNextAcademyModuleTarget(academy: AcademyProgressState | undefined, level: LevelId = 'A1') {
  const mods = getAcademyModules(level);
  const nextUnlockedIncomplete = mods.find(
    (m) => m.implemented && isAcademyModuleUnlocked(academy, m.id, level) && !isAcademyModuleCompleted(academy, m.id, level),
  );
  if (nextUnlockedIncomplete) return nextUnlockedIncomplete;
  const completedImplemented = mods.filter(
    (m) => m.implemented && isAcademyModuleCompleted(academy, m.id, level),
  );
  return completedImplemented[completedImplemented.length - 1] ?? mods[0]!;
}

export function academyStudyStats(
  academy: AcademyProgressState | undefined,
  moduleId: AcademyModuleId,
  level?: LevelId,
): { studied: number; remaining: number; total: number; readyForExam: boolean } {
  const lvl = level ?? inferLevelFromModuleId(moduleId);
  const meta = findAcademyModule(moduleId, lvl);
  if (!meta) return { studied: 0, remaining: 0, total: 0, readyForExam: false };
  const mod = getAcademyModuleProgress(academy, moduleId, lvl);
  const studiedSet = new Set(mod.studiedItems);
  const total = meta.requiredItemIds.length;
  const studied = meta.requiredItemIds.filter((id) => studiedSet.has(id)).length;
  const remaining = Math.max(0, total - studied);
  return {
    studied,
    remaining,
    total,
    readyForExam: meta.implemented && (total > 0 ? remaining === 0 : true),
  };
}

export function overallAcademyProgress(
  academy: AcademyProgressState | undefined,
  level: LevelId,
): {
  completedCount: number;
  implementedCount: number;
  totalModules: number;
} {
  const mods = getAcademyModules(level);
  const implemented = mods.filter((m) => m.implemented);
  const completedCount = implemented.filter((m) => isAcademyModuleCompleted(academy, m.id, level)).length;
  return {
    completedCount,
    implementedCount: implemented.length,
    totalModules: mods.length,
  };
}

export function overallA1AcademyProgress(academy: AcademyProgressState | undefined) {
  return overallAcademyProgress(academy, 'A1');
}
