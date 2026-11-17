import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Bookmark,
  Brain,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Headphones,
  Layers,
  Link2,
  Play,
  Plus,
  RotateCcw,
  Search,
  Volume2,
  X,
  XCircle,
  type LucideIcon,
} from 'lucide-react';
import { RICH_WORDS, WORDS, topicsOf, type BankLevel } from '../../content/bank';
import type { RichVocabItem } from '../../content/academyTypes';
import { useRouter } from '../../app/router';
import { useI18n, type StringKey } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { speakItalian } from '../../lib/speech';
import { buildPrioritizedRoundWords, getVocabRevisionSummary } from '../../lib/vocabRevision';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import {
  isValidBankLevel,
  isValidVocabMode,
  loadVocabPrefs,
  saveVocabPrefs,
  type VocabMode,
  type VocabPracticeMode,
  type VocabPreferences,
} from '../../state/vocabPrefs';
import { Button, FilterChipRow, GlassCard, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';

const PRACTICE_ROUND_SIZE = 6;

const MODE_CARDS: {
  id: VocabMode;
  icon: LucideIcon;
  titleKey: StringKey;
  descKey: StringKey;
  accent: string;
}[] = [
  {
    id: 'browse',
    icon: BookOpen,
    titleKey: 'wordBank',
    descKey: 'vocabModeBrowseDesc',
    accent: 'text-neon border-neon/40 bg-neon/15',
  },
  {
    id: 'listen',
    icon: Headphones,
    titleKey: 'vocabModeListenTitle',
    descKey: 'vocabModeListenDesc',
    accent: 'text-cyan border-cyan/40 bg-cyan/15',
  },
  {
    id: 'match',
    icon: Link2,
    titleKey: 'vocabModeMatchTitle',
    descKey: 'vocabModeMatchDesc',
    accent: 'text-violet border-violet/40 bg-violet/15',
  },
  {
    id: 'recall',
    icon: Brain,
    titleKey: 'vocabModeRecallTitle',
    descKey: 'vocabModeRecallDesc',
    accent: 'text-gold border-gold/40 bg-gold/15',
  },
];

export function filterVocabularyWords(
  items: RichVocabItem[],
  opts: {
    topic: string | null;
    query: string;
    bookmarkedOnly: boolean;
    savedKeys: ReadonlySet<string>;
  },
): RichVocabItem[] {
  const q = opts.query.trim().toLowerCase();
  return items.filter((w) => {
    if (opts.bookmarkedOnly && !opts.savedKeys.has(w.key)) return false;
    if (opts.topic && w.topic.en !== opts.topic) return false;
    if (!q) return true;
    return (
      w.it.toLowerCase().includes(q) ||
      w.baseWord.toLowerCase().includes(q) ||
      w.tr.en.toLowerCase().includes(q) ||
      w.tr.bn.includes(q) ||
      w.pronunciation.toLowerCase().includes(q)
    );
  });
}

function shuffleWithRng<T>(items: T[], rng: () => number = Math.random): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = tmp;
  }
  return copy;
}

export function buildRoundWords(pool: RichVocabItem[], count = PRACTICE_ROUND_SIZE, rng: () => number = Math.random): RichVocabItem[] {
  const uniqueByMeaning: RichVocabItem[] = [];
  const seenEn = new Set<string>();
  const seenBn = new Set<string>();
  for (const item of shuffleWithRng(pool, rng)) {
    const en = item.tr.en.trim().toLowerCase();
    const bn = item.tr.bn.trim();
    if (seenEn.has(en) || seenBn.has(bn)) continue;
    seenEn.add(en);
    seenBn.add(bn);
    uniqueByMeaning.push(item);
    if (uniqueByMeaning.length >= count) break;
  }
  return uniqueByMeaning;
}

export function buildListenOptions(
  target: RichVocabItem,
  pool: RichVocabItem[],
  rng: () => number = Math.random,
): RichVocabItem[] {
  const seenEn = new Set<string>([target.tr.en.trim().toLowerCase()]);
  const seenBn = new Set<string>([target.tr.bn.trim()]);
  const distractors: RichVocabItem[] = [];
  for (const candidate of shuffleWithRng(pool, rng)) {
    if (candidate.key === target.key) continue;
    const en = candidate.tr.en.trim().toLowerCase();
    const bn = candidate.tr.bn.trim();
    if (seenEn.has(en) || seenBn.has(bn)) continue;
    seenEn.add(en);
    seenBn.add(bn);
    distractors.push(candidate);
    if (distractors.length === 3) break;
  }
  return shuffleWithRng([target, ...distractors], rng);
}

interface ListenSessionState {
  round: RichVocabItem[];
  idx: number;
  pickedKey: string | null;
  correctCount: number;
  recordedDone: boolean;
}

interface MatchSessionState {
  pairs: RichVocabItem[];
  rightOrder: RichVocabItem[];
  selectedIt: string | null;
  selectedTr: string | null;
  matchedKeys: string[];
  mistakes: number;
  feedback: { kind: 'ok' | 'err'; text: string } | null;
  wrongPair: { itKey: string; trKey: string } | null;
  recordedDone: boolean;
}

interface RecallSessionState {
  round: RichVocabItem[];
  idx: number;
  revealed: boolean;
  showHint: boolean;
  knownKeys: string[];
  reviewKeys: string[];
  recordedDone: boolean;
}

type RoundBuilder = (pool: RichVocabItem[], count?: number) => RichVocabItem[];

function createListenSession(pool: RichVocabItem[], buildRound: RoundBuilder = buildRoundWords): ListenSessionState {
  return {
    round: buildRound(pool, PRACTICE_ROUND_SIZE),
    idx: 0,
    pickedKey: null,
    correctCount: 0,
    recordedDone: false,
  };
}

function createMatchSession(pool: RichVocabItem[], buildRound: RoundBuilder = buildRoundWords): MatchSessionState {
  const pairs = buildRound(pool, PRACTICE_ROUND_SIZE);
  let rightOrder = shuffleWithRng(pairs);
  if (pairs.length > 1 && rightOrder.every((item, i) => item.key === pairs[i]!.key)) {
    rightOrder = [...rightOrder.slice(1), rightOrder[0]!];
  }
  return {
    pairs,
    rightOrder,
    selectedIt: null,
    selectedTr: null,
    matchedKeys: [],
    mistakes: 0,
    feedback: null,
    wrongPair: null,
    recordedDone: false,
  };
}

function createRecallSession(
  pool: RichVocabItem[],
  customRound?: RichVocabItem[],
  buildRound: RoundBuilder = buildRoundWords,
): RecallSessionState {
  return {
    round:
      customRound && customRound.length > 0
        ? shuffleWithRng(customRound)
        : buildRound(pool, PRACTICE_ROUND_SIZE),
    idx: 0,
    revealed: false,
    showHint: false,
    knownKeys: [],
    reviewKeys: [],
    recordedDone: false,
  };
}

/** Unified Vocabulary screen combining CEFR levels (A1–B2), instant mode switching, search, bookmarks, and 3 interactive practice modes. */
export function WordBankScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr, lang } = useI18n();
  useStudyTimer();

  const paramLevel = route.params.get('level');
  const paramMode = route.params.get('mode');
  const isRevision = route.params.get('revision') === '1' || route.params.get('activity') === 'vocab';
  const fromHome = route.params.get('from') === 'home';

  const [prefs, setPrefs] = useState<VocabPreferences>(() => {
    const saved = loadVocabPrefs();
    const level = isValidBankLevel(paramLevel) ? paramLevel : saved.level;
    const mode = isValidVocabMode(paramMode) ? paramMode : isRevision ? 'recall' : saved.mode;
    const hasDeepParams = isValidBankLevel(paramLevel) || isValidVocabMode(paramMode) || isRevision;
    const topicValid =
      saved.topic && topicsOf(level).some((tp) => tp.en === saved.topic) ? saved.topic : null;
    const next: VocabPreferences = {
      ...saved,
      level,
      mode,
      lastPracticeMode: mode !== 'browse' ? mode : saved.lastPracticeMode,
      topic: isRevision ? null : (hasDeepParams && level !== saved.level ? null : topicValid),
      query: isRevision ? '' : saved.query,
      bookmarkedOnly: isRevision ? false : saved.bookmarkedOnly,
    };
    saveVocabPrefs(next);
    return next;
  });

  useEffect(() => {
    if (!isValidBankLevel(paramLevel) && !isValidVocabMode(paramMode) && !isRevision) return;
    setPrefs((prev) => {
      const nextLevel = isValidBankLevel(paramLevel) ? paramLevel : prev.level;
      const nextMode = isValidVocabMode(paramMode) ? paramMode : isRevision ? 'recall' : prev.mode;
      const nextTopic = isRevision ? null : (nextLevel === prev.level ? prev.topic : null);
      const nextQuery = isRevision ? '' : prev.query;
      const nextBookmarkedOnly = isRevision ? false : prev.bookmarkedOnly;
      if (
        prev.level === nextLevel &&
        prev.mode === nextMode &&
        prev.topic === nextTopic &&
        prev.query === nextQuery &&
        prev.bookmarkedOnly === nextBookmarkedOnly
      ) {
        return prev;
      }
      const next: VocabPreferences = {
        ...prev,
        level: nextLevel,
        mode: nextMode,
        lastPracticeMode: nextMode !== 'browse' ? nextMode : prev.lastPracticeMode,
        topic: nextTopic,
        query: nextQuery,
        bookmarkedOnly: nextBookmarkedOnly,
      };
      saveVocabPrefs(next);
      return next;
    });
  }, [paramLevel, paramMode, isRevision]);

  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const updatePrefs = (updater: (prev: VocabPreferences) => VocabPreferences) => {
    setPrefs((prev) => {
      const next = updater(prev);
      saveVocabPrefs(next);
      return next;
    });
  };

  const level = prefs.level;
  const mode = prefs.mode;
  const topic = prefs.topic;
  const query = prefs.query;
  const bookmarkedOnly = prefs.bookmarkedOnly;

  const savedSet = useMemo(() => new Set(state.saved), [state.saved]);
  const topics = useMemo(() => topicsOf(level), [level]);
  const levelWords = RICH_WORDS[level];

  const bookmarkedInLevelCount = useMemo(
    () => levelWords.filter((w) => savedSet.has(w.key)).length,
    [levelWords, savedSet],
  );

  const words = useMemo(
    () =>
      filterVocabularyWords(levelWords, {
        topic,
        query,
        bookmarkedOnly,
        savedKeys: savedSet,
      }),
    [levelWords, topic, query, bookmarkedOnly, savedSet],
  );

  const notInDeck = useMemo(
    () => words.filter((w) => !state.cards[w.key]).map((w) => w.key),
    [words, state.cards],
  );

  const revisionSummary = useMemo(
    () => getVocabRevisionSummary(state, level, dayKey()),
    [state, level],
  );

  // When launched for Daily Vocabulary Revision, prioritize bookmarked, weak/due SRS, and previously studied words.
  const buildRound: RoundBuilder = (pool, count = PRACTICE_ROUND_SIZE) =>
    isRevision
      ? buildPrioritizedRoundWords(pool, state, level, dayKey(), count)
      : buildRoundWords(pool, count);

  // Use filtered pool for practice when enough distinct items exist; otherwise fall back smoothly to full level pool.
  const practicePool = words.length >= PRACTICE_ROUND_SIZE ? words : levelWords;
  const poolSignature = `${level}::${topic ?? ''}::${bookmarkedOnly ? '1' : '0'}::${practicePool.length}::${isRevision ? 'rev' : 'std'}`;

  const [listenSessions, setListenSessions] = useState<Record<string, ListenSessionState>>({});
  const [matchSessions, setMatchSessions] = useState<Record<string, MatchSessionState>>({});
  const [recallSessions, setRecallSessions] = useState<Record<string, RecallSessionState>>({});

  const listenState = listenSessions[poolSignature] ?? createListenSession(practicePool, buildRound);
  const matchState = matchSessions[poolSignature] ?? createMatchSession(practicePool, buildRound);
  const recallState = recallSessions[poolSignature] ?? createRecallSession(practicePool, undefined, buildRound);

  // Lazily seed the session entry on first render of a signature so randomized items stay stable across re-renders.
  useEffect(() => {
    if (mode === 'listen' && !listenSessions[poolSignature]) {
      setListenSessions((prev) => (prev[poolSignature] ? prev : { ...prev, [poolSignature]: listenState }));
    } else if (mode === 'match' && !matchSessions[poolSignature]) {
      setMatchSessions((prev) => (prev[poolSignature] ? prev : { ...prev, [poolSignature]: matchState }));
    } else if (mode === 'recall' && !recallSessions[poolSignature]) {
      setRecallSessions((prev) => (prev[poolSignature] ? prev : { ...prev, [poolSignature]: recallState }));
    }
  }, [mode, poolSignature, listenSessions, matchSessions, recallSessions, listenState, matchState, recallState]);

  const changeLevel = (nextLevel: BankLevel) => {
    setExpandedKey(null);
    updatePrefs((prev) => {
      const nextTopics = topicsOf(nextLevel);
      const keepTopic = prev.topic && nextTopics.some((tp) => tp.en === prev.topic) ? prev.topic : null;
      return {
        ...prev,
        level: nextLevel,
        topic: keepTopic,
      };
    });
  };

  const changeMode = (nextMode: VocabMode) => {
    updatePrefs((prev) => ({
      ...prev,
      mode: nextMode,
      lastPracticeMode: nextMode !== 'browse' ? nextMode : prev.lastPracticeMode,
    }));
  };

  const quickStartTarget: VocabPracticeMode = prefs.lastPracticeMode;
  const quickStartModeMeta = MODE_CARDS.find((m) => m.id === quickStartTarget)!;

  return (
    <div className="animate-rise max-w-full space-y-3 overflow-x-hidden">
      <SubHeader
        title={t('wordBank')}
        subtitle={`${level} · ${WORDS[level].length} ${t('wordsLabel')}${
          bookmarkedInLevelCount > 0 ? ` · ${bookmarkedInLevelCount} ${t('vocabBookmarked')}` : ''
        }`}
        backTo={fromHome ? '/' : '/practice'}
        right={
          mode === 'browse' ? (
            <button
              type="button"
              onClick={() => changeMode(quickStartTarget)}
              aria-label={`${t('vocabQuickStart')}: ${t(quickStartModeMeta.titleKey)} (${level})`}
              className="inline-flex min-h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-neon/45 bg-neon/15 px-3 text-xs font-extrabold text-neon transition hover:bg-neon/25 active:scale-[0.98]"
            >
              <Play size={13} fill="currentColor" aria-hidden />
              <span>{t('vocabQuickStart')}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => changeMode('browse')}
              className="inline-flex min-h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-bold text-ink transition hover:border-white/30"
            >
              <BookOpen size={14} aria-hidden />
              <span>{t('wordBank')}</span>
            </button>
          )
        }
      />

      {/* Compact 4-Column CEFR Level Selector (A1, A2, B1, B2) */}
      <div
        className="grid grid-cols-4 gap-1.5 rounded-2xl border border-white/12 bg-[#041d19]/90 p-1"
        role="tablist"
        aria-label="CEFR level"
      >
        {(['A1', 'A2', 'B1', 'B2'] as const).map((l) => {
          const active = level === l;
          return (
            <button
              key={l}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => changeLevel(l)}
              className={cx(
                'flex min-h-11 flex-col items-center justify-center rounded-xl px-2 py-1.5 transition active:scale-[0.98]',
                active
                  ? 'bg-grad-primary text-navy-950 shadow-[0_0_16px_-4px_rgba(0,245,160,0.65)]'
                  : 'text-ink-2 hover:bg-white/5 hover:text-white',
              )}
            >
              <span className="text-sm leading-tight font-extrabold tracking-tight">{l}</span>
              <span
                className={cx(
                  'text-[11px] leading-tight font-bold tabular-nums',
                  active ? 'text-navy-950/80' : 'text-ink-3',
                )}
              >
                {WORDS[l].length}
              </span>
            </button>
          );
        })}
      </div>

      {/* Search Field */}
      <div className="flex min-h-11 items-center gap-2 rounded-2xl border border-white/15 bg-[#05231e]/90 px-3.5 transition focus-within:border-neon/60">
        <Search size={18} className="shrink-0 text-ink-3" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => {
            const val = e.target.value;
            updatePrefs((prev) => ({ ...prev, query: val }));
          }}
          placeholder={t('searchWords')}
          aria-label={t('searchWords')}
          className="min-w-0 flex-1 bg-transparent text-sm sm:text-base font-semibold text-white outline-none placeholder:text-ink-3"
        />
        {query.length > 0 && (
          <button
            type="button"
            onClick={() => updatePrefs((prev) => ({ ...prev, query: '' }))}
            aria-label={t('vocabClearFilters')}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-3 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* 2x2 Mobile-First Practice Mode Selector */}
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4" role="group" aria-label="Practice mode">
        {MODE_CARDS.map((m) => {
          const active = mode === m.id;
          return (
            <button
              key={m.id}
              type="button"
              aria-pressed={active}
              onClick={() => changeMode(m.id)}
              className={cx(
                'flex h-full min-h-[5.25rem] w-full min-w-0 flex-col justify-between rounded-2xl border p-3 text-left transition active:scale-[0.98]',
                active
                  ? 'border-neon bg-neon/12 text-white shadow-[0_0_20px_-6px_rgba(0,245,160,0.5)]'
                  : 'border-white/12 bg-[#062520]/80 text-ink hover:border-white/25 hover:bg-[#082d27]/85',
              )}
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className={cx(
                    'flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border',
                    active ? 'border-neon/50 bg-neon/20 text-neon' : m.accent,
                  )}
                >
                  <m.icon size={16} aria-hidden />
                </span>
                <span className="min-w-0 flex-1 text-[0.84rem] sm:text-sm leading-tight font-extrabold text-white break-words">
                  {t(m.titleKey)}
                </span>
              </div>
              <p className="bn mt-1.5 line-clamp-2 text-[0.72rem] sm:text-xs leading-snug font-medium text-ink-2 break-words">
                {t(m.descKey)}
              </p>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Section */}
      {mode === 'browse' && (
        <section aria-label={t('wordBank')} className="space-y-3">
          {/* Category Filter Strip */}
          <FilterChipRow label={t('wordBank')}>
            <button
              type="button"
              aria-pressed={topic === null && !bookmarkedOnly}
              onClick={() => updatePrefs((prev) => ({ ...prev, topic: null, bookmarkedOnly: false }))}
              className={cx(
                'min-h-10 shrink-0 whitespace-nowrap rounded-xl border px-3.5 text-xs font-extrabold transition',
                topic === null && !bookmarkedOnly
                  ? 'border-neon bg-neon/15 text-neon'
                  : 'border-white/12 bg-white/5 text-ink-2 hover:text-white',
              )}
            >
              {t('all')}
            </button>
            <button
              type="button"
              aria-pressed={bookmarkedOnly}
              onClick={() => updatePrefs((prev) => ({ ...prev, bookmarkedOnly: !prev.bookmarkedOnly }))}
              className={cx(
                'inline-flex min-h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-xl border px-3 text-xs font-extrabold transition',
                bookmarkedOnly
                  ? 'border-gold/60 bg-gold/15 text-gold'
                  : 'border-white/12 bg-white/5 text-ink-2 hover:text-white',
              )}
            >
              <Bookmark size={13} className={bookmarkedOnly ? 'fill-gold text-gold' : ''} aria-hidden />
              <span>{t('vocabBookmarked')}</span>
              <span className="tabular-nums opacity-80">({bookmarkedInLevelCount})</span>
            </button>
            {topics.map((tp) => {
              const active = topic === tp.en;
              return (
                <button
                  key={tp.en}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    updatePrefs((prev) => ({
                      ...prev,
                      topic: prev.topic === tp.en ? null : tp.en,
                    }))
                  }
                  className={cx(
                    'bn min-h-10 shrink-0 whitespace-nowrap rounded-xl border px-3 text-xs font-bold transition',
                    active
                      ? 'border-neon bg-neon/15 text-neon'
                      : 'border-white/12 bg-white/5 text-ink-2 hover:text-white',
                  )}
                >
                  {tr(tp)}
                </button>
              );
            })}
          </FilterChipRow>

          {/* Count + Responsive Flashcard Action Row (Never Clips Off Mobile Viewport) */}
          <div className="space-y-2">
            <p className="text-xs font-bold text-ink-2 tabular-nums">
              {t('wordsShown', { n: words.length })}
              {words.length !== WORDS[level].length ? ` / ${WORDS[level].length}` : ''}
            </p>
            <div className="grid grid-cols-1 gap-2 min-[440px]:grid-cols-2">
              <Button
                variant="ghost"
                className="min-h-11 w-full px-3.5 py-2 text-center text-xs sm:text-sm whitespace-normal"
                disabled={notInDeck.length === 0}
                onClick={() => dispatch({ type: 'addCards', keys: notInDeck, today: dayKey() })}
              >
                <Plus size={15} className="shrink-0" />
                <span>{t('addAllCards', { n: notInDeck.length })}</span>
              </Button>
              <Button
                className="min-h-11 w-full px-3.5 py-2 text-center text-xs sm:text-sm whitespace-normal"
                onClick={() => navigate('/practice/vocabulary')}
              >
                <Layers size={15} className="shrink-0" />
                <span>{t('flashcards')}</span>
              </Button>
            </div>
          </div>

          {/* Word Rows */}
          <GlassCard className="divide-y divide-white/8">
            {words.map((w) => {
              const inDeck = !!state.cards[w.key];
              const isSaved = savedSet.has(w.key);
              const open = expandedKey === w.key;
              const primaryMeaning = tr(w.tr);
              const secondaryMeaning = lang === 'bn' ? w.tr.en : w.tr.bn;

              return (
                <div key={w.key} className="px-3.5 py-3.5 sm:px-4">
                  <div className="flex items-start gap-2.5 sm:gap-3">
                    <SpeakButton text={w.it} size={38} />
                    <button
                      type="button"
                      onClick={() => setExpandedKey(open ? null : w.key)}
                      aria-expanded={open}
                      className="min-w-0 flex-1 text-left"
                    >
                      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                        <span className="text-base sm:text-lg font-extrabold text-white break-words">{w.it}</span>
                        <span className="text-xs font-semibold text-cyan/90">/{w.pronunciation}/</span>
                        <span className="text-xs font-medium text-ink-3">
                          {w.pos}
                          {w.gender !== 'none' ? ` · ${w.gender}.` : ''}
                        </span>
                      </div>
                      <p className="bn mt-1 text-sm font-semibold text-ink break-words">{primaryMeaning}</p>
                      <p className="bn text-xs text-ink-2 break-words">{secondaryMeaning}</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setExpandedKey(open ? null : w.key)}
                      aria-expanded={open}
                      aria-label={`Details: ${w.it}`}
                      className="flex h-11 w-10 shrink-0 items-center justify-center rounded-xl text-ink-3 hover:text-white"
                    >
                      {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                  </div>

                  <div className="mt-2 flex items-center justify-between gap-2 pl-12">
                    <span className="min-w-0 truncate text-[11px] font-semibold text-ink-3">{tr(w.topic)}</span>
                    <div className="flex shrink-0 items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() => dispatch({ type: 'toggleSaved', key: w.key })}
                        aria-pressed={isSaved}
                        aria-label={isSaved ? `${t('vocabRemoveBookmark')}: ${w.it}` : `${t('vocabBookmarkWord')}: ${w.it}`}
                        className={cx(
                          'flex h-11 w-11 items-center justify-center rounded-xl border transition',
                          isSaved
                            ? 'border-gold/55 bg-gold/15 text-gold'
                            : 'border-white/12 bg-white/5 text-ink-2 hover:text-white',
                        )}
                      >
                        <Bookmark size={17} className={isSaved ? 'fill-gold text-gold' : ''} />
                      </button>

                      <button
                        type="button"
                        onClick={() => !inDeck && dispatch({ type: 'addCards', keys: [w.key], today: dayKey() })}
                        aria-label={inDeck ? t('inDeck') : t('addCard')}
                        className={cx(
                          'flex h-11 w-11 items-center justify-center rounded-xl border transition',
                          inDeck
                            ? 'border-neon/45 bg-neon/10 text-neon'
                            : 'border-white/12 bg-white/5 text-ink-2 hover:text-white',
                        )}
                      >
                        {inDeck ? <Check size={17} /> : <Plus size={17} />}
                      </button>
                    </div>
                  </div>

                  {open && (
                    <div className="mt-2.5 space-y-2 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold text-ink-2">
                        <span className="text-cyan">/{w.pronunciation}/</span>
                        <span aria-hidden>·</span>
                        <span>{tr(w.topic)}</span>
                        {w.plural && (
                          <>
                            <span aria-hidden>·</span>
                            <span className="text-mint">Plural: {w.plural}</span>
                          </>
                        )}
                      </div>
                      <div className="flex items-start gap-2.5 pt-0.5">
                        <SpeakButton text={w.example.it} size={32} />
                        <div className="min-w-0 flex-1 space-y-0.5">
                          <p className="font-bold text-mint">{w.example.it}</p>
                          <p className="text-xs text-ink">{w.example.tr.en}</p>
                          <p className="bn text-xs text-ink-2">{w.example.tr.bn}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {words.length === 0 && (
              <div className="p-6 text-center space-y-3">
                <p className="bn text-sm font-semibold text-ink-2">{t('vocabEmptySearch')}</p>
                <Button
                  variant="ghost"
                  className="min-h-10 px-4 text-xs"
                  onClick={() =>
                    updatePrefs((prev) => ({
                      ...prev,
                      query: '',
                      topic: null,
                      bookmarkedOnly: false,
                    }))
                  }
                >
                  {t('vocabClearFilters')}
                </Button>
              </div>
            )}
          </GlassCard>
        </section>
      )}

      {isRevision && mode !== 'browse' && (
        <div
          data-testid="daily-vocab-revision-banner"
          className="rounded-2xl border border-violet/35 bg-violet/10 px-3.5 py-2.5 text-xs font-bold text-ink"
        >
          <p className="bn text-neon font-extrabold">
            {tr({
              bn: `${level} দৈনিক শব্দভাণ্ডার রিভিশন`,
              en: `${level} Daily Vocabulary Revision`,
              it: `Ripasso lessico giornaliero ${level}`,
            })}
          </p>
          <p className="bn mt-0.5 text-ink-2">
            {revisionSummary.priorityCount > 0
              ? tr({
                  bn: `বুকমার্ক (${revisionSummary.bookmarkedCount}), দুর্বল/বাকি কার্ড (${revisionSummary.weakOrDueCount}) ও পঠিত শব্দ (${revisionSummary.studiedCount}) অগ্রাধিকার পাচ্ছে।`,
                  en: `Prioritizing bookmarked (${revisionSummary.bookmarkedCount}), weak/due (${revisionSummary.weakOrDueCount}), and studied (${revisionSummary.studiedCount}) words first.`,
                  it: `Priorità a preferiti (${revisionSummary.bookmarkedCount}), da ripassare (${revisionSummary.weakOrDueCount}) e parole studiate (${revisionSummary.studiedCount}).`,
                })
              : tr({
                  bn: `${level} স্তরের মূল শব্দ দিয়ে রিভিশন শুরু হয়েছে (${revisionSummary.totalWords}টি শব্দ)।`,
                  en: `Starting revision with ${level} core words (${revisionSummary.totalWords} words).`,
                  it: `Avvio ripasso con le parole chiave ${level} (${revisionSummary.totalWords} parole).`,
                })}
          </p>
        </div>
      )}

      {mode === 'listen' && (
        <ListenChoosePanel
          state={listenState}
          pool={practicePool}
          savedSet={savedSet}
          buildRound={buildRound}
          onUpdate={(updater) =>
            setListenSessions((prev) => ({
              ...prev,
              [poolSignature]: updater(prev[poolSignature] ?? listenState),
            }))
          }
          onBookmark={(key) => dispatch({ type: 'toggleSaved', key })}
          onCompleteRound={() => dispatch({ type: 'completeTask', task: 'vocab', today: dayKey() })}
        />
      )}

      {mode === 'match' && (
        <MatchPairsPanel
          state={matchState}
          pool={practicePool}
          buildRound={buildRound}
          onUpdate={(updater) =>
            setMatchSessions((prev) => ({
              ...prev,
              [poolSignature]: updater(prev[poolSignature] ?? matchState),
            }))
          }
          onCompleteRound={() => dispatch({ type: 'completeTask', task: 'vocab', today: dayKey() })}
        />
      )}

      {mode === 'recall' && (
        <WordRecallPanel
          state={recallState}
          pool={practicePool}
          cards={state.cards}
          buildRound={buildRound}
          onUpdate={(updater) =>
            setRecallSessions((prev) => ({
              ...prev,
              [poolSignature]: updater(prev[poolSignature] ?? recallState),
            }))
          }
          onMarkWord={(word, known) => {
            const today = dayKey();
            if (known) {
              if (state.cards[word.key]) {
                dispatch({ type: 'reviewCard', key: word.key, remembered: true, today });
              } else {
                dispatch({ type: 'addCards', keys: [word.key], today });
              }
            } else {
              if (!state.cards[word.key]) {
                dispatch({ type: 'addCards', keys: [word.key], today });
              } else {
                dispatch({ type: 'reviewCard', key: word.key, remembered: false, today });
              }
            }
          }}
          onCompleteRound={() => dispatch({ type: 'completeTask', task: 'vocab', today: dayKey() })}
        />
      )}
    </div>
  );
}

function ListenChoosePanel({
  state,
  pool,
  savedSet,
  buildRound,
  onUpdate,
  onBookmark,
  onCompleteRound,
}: {
  state: ListenSessionState;
  pool: RichVocabItem[];
  savedSet: ReadonlySet<string>;
  buildRound: RoundBuilder;
  onUpdate: (updater: (prev: ListenSessionState) => ListenSessionState) => void;
  onBookmark: (key: string) => void;
  onCompleteRound: () => void;
}) {
  const { t, tr, lang } = useI18n();
  const current = state.round[state.idx];

  const options = useMemo(() => {
    if (!current) return [];
    return buildListenOptions(current, pool);
  }, [current, pool]);

  if (!current) {
    return (
      <GlassCard neon className="space-y-4 p-5 text-center">
        <CheckCircle2 size={36} className="mx-auto text-neon" aria-hidden />
        <div className="space-y-1">
          <p className="bn text-lg font-extrabold text-white">{t('sessionDone')}</p>
          <p className="text-sm font-semibold text-ink-2 tabular-nums">
            {t('score')}: {state.correctCount} / {state.round.length}
          </p>
        </div>
        <Button onClick={() => onUpdate(() => createListenSession(pool, buildRound))}>
          <RotateCcw size={16} /> {t('newRound')}
        </Button>
      </GlassCard>
    );
  }

  const answered = state.pickedKey !== null;
  const isRight = state.pickedKey === current.key;
  const isSaved = savedSet.has(current.key);

  const handleSelect = (optKey: string) => {
    if (answered) return;
    const ok = optKey === current.key;
    const isLast = state.idx + 1 >= state.round.length;
    onUpdate((prev) => ({
      ...prev,
      pickedKey: optKey,
      correctCount: prev.correctCount + (ok ? 1 : 0),
      recordedDone: prev.recordedDone || isLast,
    }));
    if (isLast && !state.recordedDone) {
      onCompleteRound();
    }
  };

  return (
    <GlassCard neon className="space-y-3.5 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-ink-2 tabular-nums">
          {state.idx + 1} / {state.round.length}
        </p>
        <button
          type="button"
          onClick={() => onUpdate(() => createListenSession(pool, buildRound))}
          className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-3 text-xs font-bold text-ink-2 hover:text-white"
        >
          <RotateCcw size={13} /> {t('newRound')}
        </button>
      </div>

      {/* Audio Trigger Row */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 rounded-2xl border border-cyan/25 bg-[#042228]/80 p-3.5">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Button
            className="min-h-11 min-w-0 flex-1 px-3.5 text-sm sm:flex-initial"
            onClick={() => void speakItalian(current.it)}
          >
            <Volume2 size={18} className="shrink-0" />
            <span>{t('vocabPlayAudio')}</span>
          </Button>
          <button
            type="button"
            onClick={() => void speakItalian(current.it, 0.72)}
            className="min-h-11 shrink-0 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-bold text-ink-2 hover:text-white"
          >
            0.7x
          </button>
        </div>

        <button
          type="button"
          onClick={() => onBookmark(current.key)}
          aria-pressed={isSaved}
          aria-label={isSaved ? t('vocabRemoveBookmark') : t('vocabBookmarkWord')}
          className={cx(
            'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition',
            isSaved ? 'border-gold/55 bg-gold/15 text-gold' : 'border-white/12 bg-white/5 text-ink-2',
          )}
        >
          <Bookmark size={17} className={isSaved ? 'fill-gold text-gold' : ''} />
        </button>
      </div>

      {/* Four Answer Options */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {options.map((opt) => {
          const optIsCorrect = opt.key === current.key;
          const optWasChosen = state.pickedKey === opt.key;
          const primaryOptMeaning = tr(opt.tr);
          const secondaryOptMeaning = lang === 'bn' ? opt.tr.en : opt.tr.bn;

          return (
            <button
              key={opt.key}
              type="button"
              disabled={answered}
              onClick={() => handleSelect(opt.key)}
              className={cx(
                'flex min-h-14 w-full min-w-0 flex-col justify-center rounded-xl border px-3.5 py-2.5 text-left transition',
                !answered
                  ? 'border-white/15 bg-white/5 hover:border-neon/50 active:scale-[0.99]'
                  : optIsCorrect
                    ? 'border-neon bg-neon/15 text-neon'
                    : optWasChosen
                      ? 'border-pink bg-pink/15 text-pink'
                      : 'border-white/10 bg-white/[0.02] opacity-55',
              )}
            >
              <span className="bn text-sm font-extrabold text-white break-words">{primaryOptMeaning}</span>
              <span className="bn text-xs text-ink-2 break-words">{secondaryOptMeaning}</span>
              {answered && (
                <span className="mt-1 text-xs font-bold text-cyan break-words">
                  {opt.it} · /{opt.pronunciation}/
                </span>
              )}
            </button>
          );
        })}
      </div>

      {answered && (
        <div
          role="status"
          className={cx(
            'flex flex-col gap-3 rounded-2xl border p-3.5 sm:flex-row sm:items-center sm:justify-between',
            isRight ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10',
          )}
        >
          <div className="flex min-w-0 items-start gap-2.5">
            {isRight ? (
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-neon" />
            ) : (
              <XCircle size={20} className="mt-0.5 shrink-0 text-pink" />
            )}
            <div className="min-w-0 flex-1">
              <p className={cx('bn text-sm font-extrabold', isRight ? 'text-neon' : 'text-pink')}>
                {isRight ? t('correct') : t('incorrect')}
              </p>
              <p className="text-sm font-bold text-white break-words">
                {current.it}{' '}
                <span className="text-xs font-semibold text-cyan">/{current.pronunciation}/</span>
              </p>
              <p className="bn text-xs text-ink-2 break-words">
                {current.tr.en} · {current.tr.bn}
              </p>
            </div>
          </div>

          <Button
            className="min-h-11 w-full shrink-0 px-4 text-sm sm:w-auto"
            onClick={() =>
              onUpdate((prev) => ({
                ...prev,
                idx: prev.idx + 1,
                pickedKey: null,
              }))
            }
          >
            {t('vocabNextQuestion')}
          </Button>
        </div>
      )}
    </GlassCard>
  );
}

function MatchPairsPanel({
  state,
  pool,
  buildRound,
  onUpdate,
  onCompleteRound,
}: {
  state: MatchSessionState;
  pool: RichVocabItem[];
  buildRound: RoundBuilder;
  onUpdate: (updater: (prev: MatchSessionState) => MatchSessionState) => void;
  onCompleteRound: () => void;
}) {
  const { t, tr, lang } = useI18n();
  const allMatched = state.pairs.length > 0 && state.matchedKeys.length === state.pairs.length;

  const evaluatePair = (itKey: string, trKey: string) => {
    const isCorrect = itKey === trKey;
    const itItem = state.pairs.find((p) => p.key === itKey);
    if (isCorrect) {
      const nextMatched = state.matchedKeys.includes(itKey)
        ? state.matchedKeys
        : [...state.matchedKeys, itKey];
      const completedNow = nextMatched.length === state.pairs.length;
      onUpdate((prev) => ({
        ...prev,
        selectedIt: null,
        selectedTr: null,
        wrongPair: null,
        matchedKeys: nextMatched,
        feedback: {
          kind: 'ok',
          text: `${t('vocabMatchGood')} ${itItem ? `${itItem.it} = ${tr(itItem.tr)}` : ''}`.trim(),
        },
        recordedDone: prev.recordedDone || completedNow,
      }));
      if (completedNow && !state.recordedDone) {
        onCompleteRound();
      }
    } else {
      onUpdate((prev) => ({
        ...prev,
        selectedIt: null,
        selectedTr: null,
        wrongPair: { itKey, trKey },
        mistakes: prev.mistakes + 1,
        feedback: {
          kind: 'err',
          text: t('vocabMatchWrong'),
        },
      }));
    }
  };

  const handleTapItalian = (key: string) => {
    if (state.matchedKeys.includes(key)) return;
    if (state.selectedTr) {
      evaluatePair(key, state.selectedTr);
      return;
    }
    onUpdate((prev) => ({
      ...prev,
      selectedIt: prev.selectedIt === key ? null : key,
      wrongPair: null,
      feedback: null,
    }));
  };

  const handleTapMeaning = (key: string) => {
    if (state.matchedKeys.includes(key)) return;
    if (state.selectedIt) {
      evaluatePair(state.selectedIt, key);
      return;
    }
    onUpdate((prev) => ({
      ...prev,
      selectedTr: prev.selectedTr === key ? null : key,
      wrongPair: null,
      feedback: null,
    }));
  };

  return (
    <GlassCard neon className="space-y-3.5 p-4 sm:p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3 text-xs font-bold tabular-nums">
          <span className="text-cyan">
            {t('vocabMatchedCount', { done: state.matchedKeys.length, total: state.pairs.length })}
          </span>
          <span className="text-ink-3" aria-hidden>·</span>
          <span className={state.mistakes > 0 ? 'text-pink' : 'text-ink-2'}>
            {t('vocabMistakesLabel')}: {state.mistakes}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onUpdate(() => createMatchSession(pool, buildRound))}
          className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-3 text-xs font-bold text-ink-2 hover:text-white"
        >
          <RotateCcw size={13} /> {t('newRound')}
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        <div className="min-w-0 space-y-2">
          {state.pairs.map((w) => {
            const isDone = state.matchedKeys.includes(w.key);
            const isSelected = state.selectedIt === w.key;
            const isWrong = state.wrongPair?.itKey === w.key;
            return (
              <button
                key={w.key}
                type="button"
                disabled={isDone}
                onClick={() => handleTapItalian(w.key)}
                className={cx(
                  'min-h-13 w-full min-w-0 rounded-xl border px-3 py-2 text-left transition',
                  isDone
                    ? 'border-neon/35 bg-neon/10 text-neon opacity-55'
                    : isWrong
                      ? 'border-pink bg-pink/15 text-pink'
                      : isSelected
                        ? 'border-cyan bg-cyan/15 text-white'
                        : 'border-white/15 bg-white/5 text-white hover:border-cyan/40',
                )}
              >
                <span className="block text-sm font-extrabold break-words">{w.it}</span>
                <span className="block text-[11px] font-medium text-cyan/80 break-words">/{w.pronunciation}/</span>
              </button>
            );
          })}
        </div>

        <div className="min-w-0 space-y-2">
          {state.rightOrder.map((w) => {
            const isDone = state.matchedKeys.includes(w.key);
            const isSelected = state.selectedTr === w.key;
            const isWrong = state.wrongPair?.trKey === w.key;
            const primary = tr(w.tr);
            const secondary = lang === 'bn' ? w.tr.en : w.tr.bn;
            return (
              <button
                key={w.key}
                type="button"
                disabled={isDone}
                onClick={() => handleTapMeaning(w.key)}
                className={cx(
                  'bn min-h-13 w-full min-w-0 rounded-xl border px-3 py-2 text-left transition',
                  isDone
                    ? 'border-neon/35 bg-neon/10 text-neon opacity-55'
                    : isWrong
                      ? 'border-pink bg-pink/15 text-pink'
                      : isSelected
                        ? 'border-cyan bg-cyan/15 text-white'
                        : 'border-white/15 bg-white/5 text-ink hover:border-cyan/40',
                )}
              >
                <span className="block text-sm font-bold text-white break-words">{primary}</span>
                <span className="block text-[11px] text-ink-2 break-words">{secondary}</span>
              </button>
            );
          })}
        </div>
      </div>

      {state.feedback && !allMatched && (
        <div
          role="status"
          className={cx(
            'flex items-center gap-2 rounded-xl border px-3.5 py-2.5 text-xs font-extrabold',
            state.feedback.kind === 'ok'
              ? 'border-neon/40 bg-neon/10 text-neon'
              : 'border-pink/40 bg-pink/10 text-pink',
          )}
        >
          {state.feedback.kind === 'ok' ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
          <span className="bn">{state.feedback.text}</span>
        </div>
      )}

      {allMatched && (
        <div className="flex flex-col items-center gap-2 rounded-2xl border border-neon/40 bg-neon/10 p-4 text-center">
          <CheckCircle2 size={26} className="text-neon" />
          <p className="bn text-base font-extrabold text-neon">{t('sessionDone')}</p>
          <Button className="mt-1 min-h-10 px-4 text-xs" onClick={() => onUpdate(() => createMatchSession(pool, buildRound))}>
            <RotateCcw size={14} /> {t('newRound')}
          </Button>
        </div>
      )}
    </GlassCard>
  );
}

function WordRecallPanel({
  state,
  pool,
  cards,
  buildRound,
  onUpdate,
  onMarkWord,
  onCompleteRound,
}: {
  state: RecallSessionState;
  pool: RichVocabItem[];
  cards: Record<string, unknown>;
  buildRound: RoundBuilder;
  onUpdate: (updater: (prev: RecallSessionState) => RecallSessionState) => void;
  onMarkWord: (word: RichVocabItem, known: boolean) => void;
  onCompleteRound: () => void;
}) {
  const { t, tr, lang } = useI18n();
  const current = state.round[state.idx];

  if (!current) {
    const reviewItems = pool.filter((item) => state.reviewKeys.includes(item.key));
    return (
      <GlassCard neon className="space-y-4 p-5 text-center">
        <CheckCircle2 size={34} className="mx-auto text-neon" aria-hidden />
        <div className="space-y-1">
          <p className="bn text-lg font-extrabold text-white">{t('sessionDone')}</p>
          <p className="text-sm font-semibold text-ink-2 tabular-nums">
            {t('vocabKnow')}: {state.knownKeys.length} · {t('vocabReviewAgain')}: {state.reviewKeys.length}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {reviewItems.length > 0 && (
            <Button
              variant="ghost"
              className="min-h-11 px-4 text-xs"
              onClick={() => onUpdate(() => createRecallSession(pool, reviewItems, buildRound))}
            >
              <RotateCcw size={14} /> {t('vocabPracticeReview', { n: reviewItems.length })}
            </Button>
          )}
          <Button
            className="min-h-11 px-4 text-xs"
            onClick={() => onUpdate(() => createRecallSession(pool, undefined, buildRound))}
          >
            <RotateCcw size={14} /> {t('newRound')}
          </Button>
        </div>
      </GlassCard>
    );
  }

  const primaryPrompt = tr(current.tr);
  const secondaryPrompt = lang === 'bn' ? current.tr.en : current.tr.bn;
  const inDeck = Boolean(cards[current.key]);

  const markAndAdvance = (known: boolean) => {
    const isLast = state.idx + 1 >= state.round.length;
    onMarkWord(current, known);
    onUpdate((prev) => ({
      ...prev,
      idx: prev.idx + 1,
      revealed: false,
      showHint: false,
      knownKeys: known ? [...prev.knownKeys, current.key] : prev.knownKeys,
      reviewKeys: !known ? [...prev.reviewKeys, current.key] : prev.reviewKeys,
      recordedDone: prev.recordedDone || isLast,
    }));
    if (isLast && !state.recordedDone) {
      onCompleteRound();
    }
  };

  return (
    <GlassCard neon className="space-y-4 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs font-bold text-ink-2 tabular-nums">
          {state.idx + 1} / {state.round.length}
        </p>
        <button
          type="button"
          onClick={() => onUpdate(() => createRecallSession(pool, undefined, buildRound))}
          className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-white/12 bg-white/5 px-3 text-xs font-bold text-ink-2 hover:text-white"
        >
          <RotateCcw size={13} /> {t('newRound')}
        </button>
      </div>

      {/* Prompt Card */}
      <div className="rounded-2xl border border-white/12 bg-[#04211c]/85 p-4 text-center space-y-1.5">
        <p className="text-xs font-semibold text-ink-3">
          {current.pos}
          {current.gender !== 'none' ? ` · ${current.gender}.` : ''}
          {inDeck ? ` · ${t('inDeck')}` : ''}
        </p>
        <p className="bn text-xl sm:text-2xl font-extrabold text-white">{primaryPrompt}</p>
        <p className="bn text-sm font-medium text-ink-2">{secondaryPrompt}</p>

        {!state.revealed && (
          <div className="pt-2">
            {state.showHint ? (
              <p className="text-xs font-bold text-cyan">
                {t('hint')}: “{current.baseWord[0]}...” ({current.baseWord.length})
              </p>
            ) : (
              <button
                type="button"
                onClick={() => onUpdate((prev) => ({ ...prev, showHint: true }))}
                className="min-h-9 px-3 text-xs font-bold text-cyan hover:underline"
              >
                {t('hint')}
              </button>
            )}
          </div>
        )}
      </div>

      {!state.revealed ? (
        <Button
          className="w-full min-h-12"
          onClick={() => onUpdate((prev) => ({ ...prev, revealed: true }))}
        >
          {t('vocabRevealAnswer')}
        </Button>
      ) : (
        <div className="animate-rise space-y-3.5">
          <div className="rounded-2xl border border-neon/30 bg-neon/8 p-4 space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-2xl font-extrabold text-mint">{current.it}</p>
                <p className="text-xs font-semibold text-cyan">/{current.pronunciation}/</p>
              </div>
              <SpeakButton text={current.it} size={44} />
            </div>
            <p className="text-xs font-semibold text-ink">{current.example.it}</p>
          </div>

          <div className="grid grid-cols-1 gap-2 min-[360px]:grid-cols-2">
            <Button
              variant="ghost"
              className="min-h-12 w-full border-pink/40 px-3 text-sm text-pink hover:bg-pink/10"
              onClick={() => markAndAdvance(false)}
            >
              <RotateCcw size={16} className="shrink-0" />
              <span>{t('vocabReviewAgain')}</span>
            </Button>
            <Button
              className="min-h-12 w-full px-3 text-sm"
              onClick={() => markAndAdvance(true)}
            >
              <Check size={17} className="shrink-0" />
              <span>{t('vocabKnow')}</span>
            </Button>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
