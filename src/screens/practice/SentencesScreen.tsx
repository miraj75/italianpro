import { useMemo, useState } from 'react';
import { Puzzle } from 'lucide-react';
import { PHRASES, SENTENCES, type BankLevel } from '../../content/bank';
import { grammarById } from '../../content/grammar';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, Pill } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';

/** Model sentences grouped by grammar point, with audio and translation. */
export function SentencesScreen() {
  const { route, navigate } = useRouter();
  const { t, tr } = useI18n();
  useStudyTimer();
  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [grammar, setGrammar] = useState<string | null>(null);
  const [showTr, setShowTr] = useState(true);

  const grammarIds = useMemo(() => [...new Set(SENTENCES[level].map((s) => s.grammar))], [level]);
  const list = SENTENCES[level].filter((s) => !grammar || s.grammar === grammar);

  return (
    <div className="animate-rise">
      <SubHeader title={t('sentences')} subtitle={t('sentencesSub', { n: SENTENCES[level].length, level })} />
      <LevelTabs
        value={level}
        onChange={(l) => {
          setLevel(l);
          setGrammar(null);
        }}
      />
      <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <Pill active={grammar === null} onClick={() => setGrammar(null)}>
          {t('all')}
        </Pill>
        {grammarIds.map((g) => (
          <Pill key={g} active={grammar === g} onClick={() => setGrammar(g)}>
            {grammarById(g)?.title ?? g}
          </Pill>
        ))}
      </div>
      <div className="mb-4 flex flex-wrap gap-2">
        <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setShowTr((v) => !v)}>
          {showTr ? t('hideTranslation') : t('showTranslation')}
        </Button>
        <Button className="min-h-10 px-4 text-sm" onClick={() => navigate(`/practice/puzzle?level=${level}${grammar ? `&g=${grammar}` : ''}`)}>
          <Puzzle size={18} /> {t('puzzle')}
        </Button>
      </div>
      <GlassCard className="divide-y divide-white/5">
        {list.map((s) => (
          <div key={s.key} className="flex items-start gap-3 px-4 py-3">
            <SpeakButton text={s.it} size={38} />
            <div className="min-w-0 flex-1">
              <p className="text-lg font-bold">{s.it}</p>
              {showTr && <p className="bn text-[0.95rem] text-ink-2">{tr(s.tr)}</p>}
            </div>
          </div>
        ))}
      </GlassCard>
    </div>
  );
}

export function PhrasesScreen() {
  const { t } = useI18n();
  useStudyTimer();
  return (
    <div className="animate-rise">
      <SubHeader title={t('phrasesExpr')} subtitle={t('phrasesExprSub', { n: PHRASES.length })} />
      <div className="space-y-3">
        {PHRASES.map((p) => (
          <GlassCard key={p.key} className="flex items-start gap-3 p-4">
            <SpeakButton text={p.it} size={38} />
            <div>
              <p className="text-lg font-bold text-mint">{p.it}</p>
              <p className="bn mt-0.5 font-semibold">{p.tr.bn}</p>
              <p className="text-sm text-ink-2">{p.tr.en}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
