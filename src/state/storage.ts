import { initialState, type ProgressState } from './progress';

const KEY = 'italianpro.progress.v1';

/** Loads saved progress; corrupt or missing data falls back to a fresh state. */
export function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return initialState();
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    if (parsed.version !== 1) return initialState();
    const base = initialState();
    return { ...base, ...parsed, settings: { ...base.settings, ...parsed.settings } };
  } catch {
    return initialState();
  }
}

export function saveProgress(state: ProgressState): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
