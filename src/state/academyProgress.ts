import { topicsOf } from '../content/bank';
import {
  A1_ACADEMY_MODULES,
  findAcademyModule,
  getAcademyModules,
  getPreviousAcademyModule,
  inferLevelFromModuleId,
  isFinalExamModuleId,
} from '../content/academy/curriculum';
import { A2_GRAMMAR_EXPANSION_IDS } from '../content/academy/curriculumA2B1B2';
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
    history: Array.isArray(e.history)
      ? e.history.slice(0, 20).flatMap((rawItem) => {
          if (!rawItem || typeof rawItem !== 'object') return [];
          const h = rawItem as Partial<ExamAttemptRecord>;
          if (typeof h.id !== 'string' || typeof h.moduleId !== 'string') return [];
          return [
            {
              id: h.id,
              moduleId: h.moduleId,
              date: typeof h.date === 'string' ? h.date : '',
              total: typeof h.total === 'number' && Number.isFinite(h.total) ? h.total : 0,
              correct: typeof h.correct === 'number' && Number.isFinite(h.correct) ? h.correct : 0,
              incorrect: typeof h.incorrect === 'number' && Number.isFinite(h.incorrect) ? h.incorrect : 0,
              score: typeof h.score === 'number' && Number.isFinite(h.score) ? h.score : 0,
              passed: Boolean(h.passed),
            },
          ];
        })
      : [],
  };
}

const CANONICAL_A2_TOPIC_MATCHERS: [RegExp, string][] = [
  [/greet|salut|social\s*relat/i, 'topic:A2:Greetings & Social Relationships'],
  [/famil|parent|relat/i, 'topic:A2:Family & Relationships'],
  [/home|furnitur|house|kitchen/i, 'topic:A2:Home & Furniture'],
  [/food|cook|restaur|eat|drink/i, 'topic:A2:Food & Cooking'],
  [/shop|cloth|fashion|store/i, 'topic:A2:Shopping & Clothing'],
  [/health|body|medic|doctor|hospital/i, 'topic:A2:Health & Body'],
  [/travel|transport|airport|train/i, 'topic:A2:Travel & Transport'],
  [/work|profession|job|office|career/i, 'topic:A2:Work & Professions'],
  [/educat|universit|school|study/i, 'topic:A2:Education & University'],
  [/city|public|service|bureau|post/i, 'topic:A2:City & Public Services'],
  [/tech|communicat|phone|internet|media/i, 'topic:A2:Technology & Communication'],
  [/weather|environ|climate|season/i, 'topic:A2:Weather & Environment'],
  [/leisur|entertain|hobby|sport|music/i, 'topic:A2:Leisure & Entertainment'],
  [/emot|personal|feel|character/i, 'topic:A2:Emotions & Personality'],
  [/dail|routin|activit/i, 'topic:A2:Daily Activities'],
  [/money|bank|financ/i, 'topic:A2:Money & Banking'],
  [/hous|accommodat|rent|flat/i, 'topic:A2:Housing & Accommodation'],
  [/societ|cultur|civic/i, 'topic:A2:Society & Culture'],
  [/natur|animal|plant/i, 'topic:A2:Nature & Animals'],
  [/time|express|calend/i, 'topic:A2:Time & Everyday Expressions'],
];

function migrateA2VocabItems(items: string[]): string[] {
  const canonicalSet = new Set(topicsOf('A2').map((t) => `topic:A2:${t.en}`));
  const out = new Set<string>();
  for (const item of items) {
    if (!item.startsWith('topic:A2:')) {
      out.add(item);
      continue;
    }
    if (canonicalSet.has(item)) {
      out.add(item);
      continue;
    }
    const label = item.slice('topic:A2:'.length);
    const match = CANONICAL_A2_TOPIC_MATCHERS.find(([rx]) => rx.test(label));
    out.add(match ? match[1] : item);
  }
  return Array.from(out);
}

function mergeWritingSpeakingEntries(
  rawWriting: unknown,
  rawSpeaking: unknown,
): AcademyModuleProgress | undefined {
  const w = normalizeModuleEntry(rawWriting);
  const s = normalizeModuleEntry(rawSpeaking);
  if (!w && !s) return undefined;
  return {
    theoryCompleted: Boolean(w?.theoryCompleted || s?.theoryCompleted),
    studiedItems: Array.from(new Set([...(w?.studiedItems ?? []), ...(s?.studiedItems ?? [])])),
    drillCompleted: Boolean(w?.drillCompleted && s?.drillCompleted),
    drillBestScore: Math.max(w?.drillBestScore ?? 0, s?.drillBestScore ?? 0),
    drillCorrect: (w?.drillCorrect ?? 0) + (s?.drillCorrect ?? 0),
    drillIncorrect: (w?.drillIncorrect ?? 0) + (s?.drillIncorrect ?? 0),
    completed: Boolean(w?.completed && s?.completed),
    completedAt: w?.completedAt ?? s?.completedAt,
    bestScore: Math.max(w?.bestScore ?? 0, s?.bestScore ?? 0),
    attempts: (w?.attempts ?? 0) + (s?.attempts ?? 0),
    failedAttempts: (w?.failedAttempts ?? 0) + (s?.failedAttempts ?? 0),
    completedAttemptIds: Array.from(
      new Set([...(w?.completedAttemptIds ?? []), ...(s?.completedAttemptIds ?? [])]),
    ),
    history: [...(w?.history ?? []), ...(s?.history ?? [])].slice(0, 20),
  };
}

function applyA2Migrations(rawMap: LevelAcademyModulesMap, lvlMap: LevelAcademyModulesMap): void {
  // 1. Merge legacy separate a2-writing + a2-speaking into unified a2-writing-speaking
  if (!lvlMap['a2-writing-speaking'] && (rawMap['a2-writing'] || rawMap['a2-speaking'])) {
    const merged = mergeWritingSpeakingEntries(rawMap['a2-writing'], rawMap['a2-speaking']);
    if (merged) lvlMap['a2-writing-speaking'] = merged;
  }

  // 2. Migrate any legacy A2 vocab topic keys to canonical 20-category keys
  if (lvlMap['a2-vocab']) {
    lvlMap['a2-vocab'] = {
      ...lvlMap['a2-vocab'],
      studiedItems: migrateA2VocabItems(lvlMap['a2-vocab'].studiedItems),
    };
  }

  // 3. Preserve moved grammar IDs now housed inside a2-grammar-expansion
  const expansionSet = new Set(A2_GRAMMAR_EXPANSION_IDS);
  const movedStudied = [
    ...(lvlMap['a2-tenses']?.studiedItems ?? []),
    ...(lvlMap['a2-pronouns-prep']?.studiedItems ?? []),
  ].filter((id) => expansionSet.has(id));
  if (movedStudied.length > 0) {
    const existing = lvlMap['a2-grammar-expansion'] ?? emptyModuleProgress();
    lvlMap['a2-grammar-expansion'] = {
      ...existing,
      studiedItems: Array.from(new Set([...existing.studiedItems, ...movedStudied])),
    };
  }
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
      if (lvl === 'A2') {
        applyA2Migrations(rawMap, lvlMap);
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
