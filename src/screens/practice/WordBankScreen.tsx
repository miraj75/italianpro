import { useMemo, useState } from 'react';
import { Check, Layers, Plus, Search } from 'lucide-react';
import { WORDS, topicsOf, type BankLevel } from '../../content/bank';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, Pill } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';

/** Searchable A1–B1 vocabulary with topic filters; words can be added to flashcards. */
export function WordBankScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr, lang } = useI18n();
  useStudyTimer();
  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [topic, setTopic] = useState<string | null>(null);
  const [query, setQuery] = useState('');

  const topics = useMemo(() => topicsOf(level), [level]);
  const words = useMemo(() => {
    const q = query.trim().toLowerCase();
    return WORDS[level].filter(
      (w) =>
        (!topic || w.topic.en === topic) &&
        (!q || w.it.toLowerCase().includes(q) || w.tr.bn.includes(q) || w.tr.en.toLowerCase().includes(q)),
    );
  }, [level, topic, query]);
  const notInDeck = words.filter((w) => !state.cards[w.key]).map((w) => w.key);

  const changeLevel = (l: BankLevel) => {
    setLevel(l);
    setTopic(null);
  };

  return (
    <div className="animate-rise">
      <SubHeader title={t('wordBank')} subtitle={t('wordBankSub', { n: WORDS[level].length, level })} />
      <LevelTabs value={level} onChange={changeLevel} />

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
        <p className="text-sm font-semibold text-ink-2">{t('wordsShown', { n: words.length })}</p>
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
          return (
            <div key={w.key} className="flex items-center gap-3 px-4 py-3">
              <SpeakButton text={w.it} size={38} />
              <div className="min-w-0 flex-1">
                <p className="text-lg font-bold">{w.it}</p>
                <p className="bn text-[0.95rem] text-ink-2">{tr(w.tr)}</p>
              </div>
              <button
                type="button"
                onClick={() => !inDeck && dispatch({ type: 'addCards', keys: [w.key], today: dayKey() })}
                aria-label={inDeck ? t('inDeck') : t('addCard')}
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${inDeck ? 'border-neon/40 text-neon' : 'border-white/15 text-ink-2'}`}
              >
                {inDeck ? <Check size={18} /> : <Plus size={18} />}
              </button>
            </div>
          );
        })}
        {words.length === 0 && <p className="p-6 text-center text-ink-2">—</p>}
      </GlassCard>
    </div>
  );
}
