import { useMemo, useState } from 'react';
import { Puzzle, Search, X } from 'lucide-react';
import { PHRASES, RICH_SENTENCES, type BankLevel } from '../../content/bank';
import { grammarById } from '../../content/grammar';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useStudyTimer } from '../../state/ProgressContext';
import { Button, FilterChipRow, GlassCard, Pill } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';

/** Searchable model sentences grouped by grammar point, with pronunciation, context, and grammar links. */
export function SentencesScreen() {
  const { route, navigate } = useRouter();
  const { lang, t, tr } = useI18n();
  useStudyTimer();

  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [grammar, setGrammar] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [showTr, setShowTr] = useState(true);

  const grammarIds = useMemo(() => [...new Set(RICH_SENTENCES[level].map((s) => s.grammar))], [level]);
  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return RICH_SENTENCES[level].filter(
      (s) =>
        (!grammar || s.grammar === grammar) &&
        (!q || s.it.toLowerCase().includes(q) || s.tr.bn.includes(q) || s.tr.en.toLowerCase().includes(q)),
    );
  }, [level, grammar, query]);

  return (
    <div className="animate-rise max-w-full space-y-3 overflow-x-hidden">
      <SubHeader title={t('sentences')} subtitle={t('sentencesSub', { n: RICH_SENTENCES[level].length, level })} />
      <LevelTabs
        value={level}
        onChange={(l) => {
          setLevel(l);
          setGrammar(null);
        }}
      />

      <div className="flex min-h-11 items-center gap-2 rounded-2xl border border-white/15 bg-[#05231e]/90 px-3.5 transition focus-within:border-neon/60">
        <Search size={18} className="shrink-0 text-ink-3" aria-hidden />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('searchWords')}
          aria-label={t('searchWords')}
          className="min-w-0 flex-1 bg-transparent text-sm sm:text-base font-semibold text-white outline-none placeholder:text-ink-3"
        />
        {query.length > 0 && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label={t('vocabClearFilters')}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-3 hover:text-white"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <FilterChipRow label={t('grammar')}>
        <Pill active={grammar === null} onClick={() => setGrammar(null)}>
          {t('all')}
        </Pill>
        {grammarIds.map((g) => (
          <Pill key={g} active={grammar === g} onClick={() => setGrammar(g)}>
            {grammarById(g)?.title ?? g}
          </Pill>
        ))}
      </FilterChipRow>

      <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
        <Button
          variant="ghost"
          className="min-h-11 w-full px-3.5 py-2 text-center text-sm whitespace-normal"
          onClick={() => setShowTr((v) => !v)}
        >
          {showTr ? t('hideTranslation') : t('showTranslation')}
        </Button>
        <Button
          className="min-h-11 w-full px-3.5 py-2 text-center text-sm whitespace-normal"
          onClick={() => navigate(`/practice/puzzle?level=${level}${grammar ? `&g=${grammar}` : ''}`)}
        >
          <Puzzle size={17} className="shrink-0" />
          <span>{t('puzzle')}</span>
        </Button>
      </div>

      <GlassCard className="divide-y divide-white/8">
        {list.map((s) => {
          const primaryMeaning = tr(s.tr);
          const secondaryMeaning = lang === 'bn' ? s.tr.en : lang === 'en' ? s.tr.bn : `${s.tr.en} · ${s.tr.bn}`;
          return (
            <div key={s.key} className="flex items-start gap-3 px-3.5 py-3.5 sm:px-4">
              <SpeakButton text={s.it} size={38} />
              <div className="min-w-0 flex-1">
                <p className="text-base sm:text-lg leading-snug font-extrabold text-white break-words">{s.it}</p>
                {showTr && (
                  <div className="mt-1 space-y-0.5">
                    <p className="bn text-sm font-semibold text-ink break-words">{primaryMeaning}</p>
                    <p className="bn text-xs text-ink-2 break-words">{secondaryMeaning}</p>
                  </div>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-ink-3">
                  <span className="bn">{tr(s.context)}</span>
                  <button
                    type="button"
                    onClick={() => navigate(`/grammar/${s.grammar}`)}
                    className="inline-flex min-h-7 items-center rounded-lg border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[11px] font-bold text-cyan transition hover:bg-cyan/20"
                  >
                    {grammarById(s.grammar)?.title ?? s.grammar}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {list.length === 0 && <p className="p-6 text-center text-ink-2">{t('vocabEmptySearch')}</p>}
      </GlassCard>
    </div>
  );
}

export function PhrasesScreen() {
  const { lang, t, tr } = useI18n();
  useStudyTimer();
  return (
    <div className="animate-rise max-w-full space-y-3 overflow-x-hidden">
      <SubHeader title={t('phrasesExpr')} subtitle={t('phrasesExprSub', { n: PHRASES.length })} />
      <div className="space-y-3">
        {PHRASES.map((p) => {
          const primaryMeaning = tr(p.tr);
          const secondaryMeaning = lang === 'bn' ? p.tr.en : lang === 'en' ? p.tr.bn : `${p.tr.en} · ${p.tr.bn}`;
          return (
            <GlassCard key={p.key} className="flex items-start gap-3 p-4">
              <SpeakButton text={p.it} size={38} />
              <div className="min-w-0 flex-1">
                <p className="text-base sm:text-lg font-extrabold text-mint break-words">{p.it}</p>
                <p className="bn mt-1 text-sm font-semibold text-ink break-words">{primaryMeaning}</p>
                <p className="bn text-xs text-ink-2 break-words">{secondaryMeaning}</p>
              </div>
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
