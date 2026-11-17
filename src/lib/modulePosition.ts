import type { LevelId } from '../content/types';

export const MODULE_POSITION_KEY = 'italianpro.module.position.v1';

export interface SavedModulePosition {
  stage?: string;
  tab?: string;
  updatedAt: number;
}

type ModulePositionMap = Record<string, SavedModulePosition>;

function readMap(): ModulePositionMap {
  try {
    if (typeof localStorage === 'undefined') return {};
    const raw = localStorage.getItem(MODULE_POSITION_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return parsed as ModulePositionMap;
  } catch {
    return {};
  }
}

function writeMap(map: ModulePositionMap): void {
  try {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(MODULE_POSITION_KEY, JSON.stringify(map));
  } catch {
    // ignore storage quota / private-browsing errors
  }
}

export function modulePositionStorageKey(level: LevelId, moduleId: string): string {
  return `${level}:${moduleId}`;
}

export function loadModulePosition(level: LevelId, moduleId: string): SavedModulePosition | undefined {
  const map = readMap();
  const entry = map[modulePositionStorageKey(level, moduleId)];
  if (!entry || typeof entry !== 'object') return undefined;
  return {
    ...(typeof entry.stage === 'string' ? { stage: entry.stage } : {}),
    ...(typeof entry.tab === 'string' ? { tab: entry.tab } : {}),
    updatedAt: typeof entry.updatedAt === 'number' ? entry.updatedAt : 0,
  };
}

export function saveModulePosition(
  level: LevelId,
  moduleId: string,
  patch: { stage?: string; tab?: string },
): void {
  const key = modulePositionStorageKey(level, moduleId);
  const map = readMap();
  const prev = map[key];
  map[key] = {
    ...(prev?.stage ? { stage: prev.stage } : {}),
    ...(prev?.tab ? { tab: prev.tab } : {}),
    ...patch,
    updatedAt: Date.now(),
  };
  writeMap(map);
}
