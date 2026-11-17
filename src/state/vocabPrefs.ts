import { BANK_LEVELS, type BankLevel } from '../content/bank';

export type VocabMode = 'browse' | 'listen' | 'match' | 'recall';
export type VocabPracticeMode = Exclude<VocabMode, 'browse'>;

export interface VocabPreferences {
  level: BankLevel;
  mode: VocabMode;
  lastPracticeMode: VocabPracticeMode;
  topic: string | null;
  query: string;
  bookmarkedOnly: boolean;
}

export const VOCAB_PREFS_KEY = 'italianpro.vocab.prefs.v1';

const VALID_MODES: ReadonlySet<VocabMode> = new Set(['browse', 'listen', 'match', 'recall']);
const VALID_PRACTICE_MODES: ReadonlySet<VocabPracticeMode> = new Set(['listen', 'match', 'recall']);

export function defaultVocabPrefs(): VocabPreferences {
  return {
    level: 'A1',
    mode: 'browse',
    lastPracticeMode: 'listen',
    topic: null,
    query: '',
    bookmarkedOnly: false,
  };
}

export function isValidBankLevel(value: unknown): value is BankLevel {
  return typeof value === 'string' && (BANK_LEVELS as readonly string[]).includes(value);
}

export function isValidVocabMode(value: unknown): value is VocabMode {
  return typeof value === 'string' && VALID_MODES.has(value as VocabMode);
}

export function loadVocabPrefs(): VocabPreferences {
  const base = defaultVocabPrefs();
  try {
    if (typeof localStorage === 'undefined') return base;
    const raw = localStorage.getItem(VOCAB_PREFS_KEY);
    if (!raw) return base;
    const parsed = JSON.parse(raw) as Partial<VocabPreferences>;
    const level = isValidBankLevel(parsed.level) ? parsed.level : base.level;
    const mode = isValidVocabMode(parsed.mode) ? parsed.mode : base.mode;
    const lastPracticeMode =
      typeof parsed.lastPracticeMode === 'string' &&
      VALID_PRACTICE_MODES.has(parsed.lastPracticeMode as VocabPracticeMode)
        ? (parsed.lastPracticeMode as VocabPracticeMode)
        : mode !== 'browse'
          ? mode
          : base.lastPracticeMode;
    const topic = typeof parsed.topic === 'string' && parsed.topic.trim().length > 0 ? parsed.topic : null;
    const query = typeof parsed.query === 'string' ? parsed.query : '';
    const bookmarkedOnly = Boolean(parsed.bookmarkedOnly);
    return { level, mode, lastPracticeMode, topic, query, bookmarkedOnly };
  } catch {
    return base;
  }
}

export function saveVocabPrefs(prefs: VocabPreferences): boolean {
  try {
    if (typeof localStorage === 'undefined') return false;
    localStorage.setItem(VOCAB_PREFS_KEY, JSON.stringify(prefs));
    return true;
  } catch {
    return false;
  }
}
