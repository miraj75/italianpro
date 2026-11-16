import { useMemo, useState } from 'react';
import { Check, ChevronDown, ChevronUp, Layers, Plus, RotateCcw, Search, Sparkles } from 'lucide-react';
import { RICH_WORDS, WORDS, topicsOf, type BankLevel } from '../../content/bank';
import type { RichVocabItem } from '../../content/academyTypes';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { speakItalian } from '../../lib/speech';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, Pill, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';

type VocabMode = 'browse' | 'listen' | 'match' | 'recall';

/** Rich Vocabulary Academy with morphological details, audio, saved cards, and mini-practice modes. */
export function WordBankScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr, lang } = useI18n();
  useStudyTimer();

  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [topic, setTopic] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState<VocabMode>('browse');
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  const topics = useMemo(() => topicsOf(level), [level]);
  const words = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RICH_WORDS[level].filter(
      (w) =>
        (!topic || w.topic.en === topic) &&
        (!q || w.it.toLowerCase().includes(q) || w.tr.bn.includes(q) || w.tr.en.toLowerCase().includes(q)),
    );
  }, [level, topic, query]);

  const notInDeck = words.filter((w) => !state.cards[w.key]).map((w) => w.key);

  const changeLevel = (l: BankLevel) => {
    setLevel(l);
    setTopic(null);
    setExpandedKey(null);
  };

  return (
    <div className="animate-rise">
      <SubHeader title={t('wordBank')} subtitle={t('wordBankSub', { n: WORDS[level].length, level })} />
      <LevelTabs value={level} onChange={changeLevel} />

      <div className="-mx-4 mb-3 flex gap-2 overflow-x-auto px-4 pb-1">
        <Pill active={mode === 'browse'} onClick={() => setMode('browse')}>
          {t('wordBank')}
        </Pill>
        <Pill active={mode === 'listen'} onClick={() => setMode('listen')}>
          Listen & Choose
        </Pill>
        <Pill active={mode === 'match'} onClick={() => setMode('match')}>
          Match Pairs
        </Pill>
        <Pill active={mode === 'recall'} onClick={() => setMode('recall')}>
          Word Recall
        </Pill>
      </div>

      {mode !== 'browse' ? (
        <VocabMiniDrill key={`${level}-${topic}-${mode}`} pool={words.length >= 6 ? words : RICH_WORDS[level]} mode={mode} />
      ) : (
        <>
          <label className="glass mb-3 flex min-h-12 items-center gap-2 px-4">
            <Search size={20} className="text-ink-3" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchWords')}
              className="w-full bg-transparent text-base font-semibold outline-none placeholder:text-ink-3"
            />
          </label>

          <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
            <Pill active={topic === null} onClick={() => setTopic(null)}>
              {t('all')}
            </Pill>
            {topics.map((tp) => (
              <Pill key={tp.en} active={topic === tp.en} onClick={() => setTopic(tp.en)}>
                {tp[lang]}
              </Pill>
            ))}
          </div>

          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-ink-2 tabular-nums">{t('wordsShown', { n: words.length })}</p>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                className="min-h-10 px-4 text-sm"
                disabled={notInDeck.length === 0}
                onClick={() => dispatch({ type: 'addCards', keys: notInDeck, today: dayKey() })}
              >
                <Plus size={18} /> {t('addAllCards', { n: notInDeck.length })}
              </Button>
              <Button className="min-h-10 px-4 text-sm" onClick={() => navigate('/practice/vocabulary')}>
                <Layers size={18} /> {t('flashcards')}
              </Button>
            </div>
          </div>

          <GlassCard className="divide-y divide-white/5">
            {words.map((w) => {
              const inDeck = !!state.cards[w.key];
              const open = expandedKey === w.key;
              return (
                <div key={w.key} className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <SpeakButton text={w.it} size={38} />
                    <button
                      type="button"
                      onClick={() => setExpandedKey(open ? null : w.key)}
                      className="min-w-0 flex-1 text-left"
                    >
                      <p className="text-lg font-bold">
                        {w.it}{' '}
                        <span className="text-xs font-semibold text-ink-3">
                          {w.pos}
                          {w.gender !== 'none' ? ` · ${w.gender}.` : ''}
                        </span>
                      </p>
                      <p className="bn text-[0.95rem] text-ink-2">{tr(w.tr)}</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setExpandedKey(open ? null : w.key)}
                      className="flex h-9 w-9 items-center justify-center rounded-full text-ink-3 hover:text-ink"
                      aria-label="Details"
                    >
                      {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>
                    <button
                      type="button"
                      onClick={() => !inDeck && dispatch({ type: 'addCards', keys: [w.key], today: dayKey() })}
                      aria-label={inDeck ? t('inDeck') : t('addCard')}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${inDeck ? 'border-neon/40 text-neon' : 'border-white/15 text-ink-2'}`}
                    >
                      {inDeck ? <Check size={18} /> : <Plus size={18} />}
                    </button>
                  </div>

                  {open && (
                    <div className="mt-2.5 space-y-1.5 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm">
                      <p className="text-xs font-semibold text-cyan">
                        /{w.pronunciation}/ {w.plural ? `· Plural: ${w.plural}` : ''}
                      </p>
                      <div className="flex items-start gap-2 pt-1">
                        <SpeakButton text={w.example.it} size={28} />
                        <div>
                          <p className="font-bold text-mint">{w.example.it}</p>
                          <p className="bn text-xs text-ink-2">{tr(w.example.tr)}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            {words.length === 0 && <p className="p-6 text-center text-ink-2">—</p>}
          </GlassCard>
        </>
      )}
    </div>
  );
}

function VocabMiniDrill({ pool, mode }: { pool: RichVocabItem[]; mode: Exclude<VocabMode, 'browse'> }) {
  const { dispatch } = useProgress();
  const { t, tr } = useI18n();
  const [seed, setSeed] = useState(0);

  const sample = useMemo(() => [...pool].sort(() => Math.random() - 0.5).slice(0, 6), [pool, seed]);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [recallInput, setRecallInput] = useState('');
  const [recallChecked, setRecallChecked] = useState(false);

  // Match Pairs state
  const [selectedIt, setSelectedIt] = useState<string | null>(null);
  const [matchedKeys, setMatchedKeys] = useState<string[]>([]);
  const shuffledTranslations = useMemo(() => [...sample].sort((a, b) => a.tr.en.localeCompare(b.tr.en)), [sample]);

  const current = sample[idx];

  const options = useMemo(() => {
    if (!current) return [];
    const distractors = pool.filter((w) => w.key !== current.key).sort(() => Math.random() - 0.5).slice(0, 3);
    return [current, ...distractors].sort((a, b) => a.it.localeCompare(b.it));
  }, [current, pool]);

  if (mode === 'match') {
    const allMatched = matchedKeys.length === sample.length;
    return (
      <GlassCard neon className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm font-extrabold text-cyan">Match Italian ↔ Meaning ({matchedKeys.length}/{sample.length})</p>
          <Button variant="ghost" className="min-h-8 px-3 text-xs" onClick={() => { setMatchedKeys([]); setSelectedIt(null); setSeed((s) => s + 1); }}>
            <RotateCcw size={14} /> {t('newRound')}
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            {sample.map((w) => {
              const isDone = matchedKeys.includes(w.key);
              return (
                <button
                  key={w.key}
                  type="button"
                  disabled={isDone}
                  onClick={() => setSelectedIt(w.key)}
                  className={cx(
                    'w-full rounded-xl border px-3 py-2.5 text-left text-sm font-bold transition',
                    isDone ? 'border-neon/30 bg-neon/10 text-neon opacity-50' : selectedIt === w.key ? 'border-neon bg-neon/20 text-neon' : 'border-white/15 bg-white/5',
                  )}
                >
                  {w.it}
                </button>
              );
            })}
          </div>
          <div className="space-y-2">
            {shuffledTranslations.map((w) => {
              const isDone = matchedKeys.includes(w.key);
              return (
                <button
                  key={w.key}
                  type="button"
                  disabled={isDone || !selectedIt}
                  onClick={() => {
                    if (selectedIt === w.key) {
                      setMatchedKeys((m) => [...m, w.key]);
                      dispatch({ type: 'awardXp', amount: 3, today: dayKey() });
                    }
                    setSelectedIt(null);
                  }}
                  className={cx(
                    'bn w-full rounded-xl border px-3 py-2.5 text-left text-sm font-semibold transition',
                    isDone ? 'border-neon/30 bg-neon/10 text-neon opacity-50' : 'border-white/15 bg-white/5 hover:border-cyan/40',
                  )}
                >
                  {tr(w.tr)}
                </button>
              );
            })}
          </div>
        </div>
        {allMatched && <p className="text-center font-extrabold text-neon"><Sparkles size={16} className="mr-1 inline" /> {t('sessionDone')}</p>}
      </GlassCard>
    );
  }

  if (!current) {
    return (
      <GlassCard neon className="p-6 text-center">
        <p className="text-lg font-bold">{t('sessionDone')}</p>
        <Button className="mt-4" onClick={() => { setIdx(0); setPicked(null); setRecallInput(''); setRecallChecked(false); setSeed((s) => s + 1); }}>
          <RotateCcw size={16} /> {t('newRound')}
        </Button>
      </GlassCard>
    );
  }

  if (mode === 'recall') {
    const cleanExpected = current.baseWord.toLowerCase();
    const ok = recallInput.trim().toLowerCase() === cleanExpected || recallInput.trim().toLowerCase() === current.it.toLowerCase();
    return (
      <GlassCard neon className="space-y-4 p-5">
        <p className="text-xs font-bold text-ink-3 tabular-nums">{idx + 1}/{sample.length}</p>
        <p className="bn text-xl font-extrabold">{tr(current.tr)}</p>
        <p className="text-xs font-semibold text-cyan">{current.pos} · Hint: starts with “{current.baseWord[0]}”</p>
        <div className="flex gap-2">
          <input
            value={recallInput}
            onChange={(e) => setRecallInput(e.target.value)}
            placeholder="Type in Italian..."
            className="glass min-h-11 flex-1 rounded-xl px-3 font-bold outline-none"
          />
          <Button
            className="min-h-11 px-4 text-sm"
            onClick={() => {
              setRecallChecked(true);
              if (ok) dispatch({ type: 'awardXp', amount: 4, today: dayKey() });
            }}
          >
            {t('check')}
          </Button>
        </div>
        {recallChecked && (
          <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
            <p className={cx('font-bold', ok ? 'text-neon' : 'text-pink')}>
              {ok ? t('correct') : `${t('correctAnswer')}: ${current.it}`}
            </p>
            <Button className="min-h-9 px-3 text-xs" onClick={() => { setIdx(idx + 1); setRecallInput(''); setRecallChecked(false); }}>
              {t('continue')}
            </Button>
          </div>
        )}
      </GlassCard>
    );
  }

  // Listen & Choose
  return (
    <GlassCard neon className="space-y-4 p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-bold text-ink-3 tabular-nums">{idx + 1}/{sample.length}</p>
        <Button className="min-h-10 px-4 text-sm" onClick={() => void speakItalian(current.it)}>
          Listen
        </Button>
      </div>
      <div className="grid gap-2">
        {options.map((opt) => {
          const isRight = opt.key === current.key;
          const chosen = picked === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              disabled={picked !== null}
              onClick={() => {
                setPicked(opt.key);
                if (isRight) dispatch({ type: 'awardXp', amount: 3, today: dayKey() });
              }}
              className={cx(
                'rounded-xl border px-4 py-3 text-left font-bold transition',
                picked === null
                  ? 'border-white/15 bg-white/5 hover:border-neon/40'
                  : isRight
                    ? 'border-neon bg-neon/15 text-neon'
                    : chosen
                      ? 'border-pink bg-pink/15 text-pink'
                      : 'border-white/10 opacity-60',
              )}
            >
              <span className="block">{opt.it}</span>
              <span className="bn text-xs text-ink-2">{tr(opt.tr)}</span>
            </button>
          );
        })}
      </div>
      {picked && (
        <Button className="w-full" onClick={() => { setIdx(idx + 1); setPicked(null); }}>
          {t('continue')}
        </Button>
      )}
    </GlassCard>
  );
}
