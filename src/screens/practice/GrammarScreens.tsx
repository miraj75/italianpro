import { useState } from 'react';
import { ChevronRight, Puzzle } from 'lucide-react';
import { GRAMMAR_TOPICS, grammarById } from '../../content/grammar';
import { sentencesFor, type BankLevel } from '../../content/bank';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';

export function GrammarHubScreen() {
  const { route, navigate } = useRouter();
  const { t, tr } = useI18n();
  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const topics = GRAMMAR_TOPICS.filter((g) => g.level === level);

  return (
    <div className="animate-rise">
      <SubHeader title={t('grammar')} subtitle={t('grammarSub', { n: topics.length, level })} />
      <LevelTabs value={level} onChange={setLevel} />
      <div className="grid gap-3 sm:grid-cols-2">
        {topics.map((g, i) => (
          <button key={g.id} type="button" onClick={() => navigate(`/grammar/${g.id}`)} className="text-left">
            <GlassCard className="flex h-full items-center gap-3 p-4 transition hover:border-neon/40">
              <span className="bg-grad-premium flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white">{i + 1}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold">{g.title}</span>
                <span className="bn block text-[0.95rem] text-ink-2">{tr(g.name)}</span>
                <span className="text-xs font-semibold text-ink-3">{t('examplesCount', { n: sentencesFor(g.id).length })}</span>
              </span>
              <ChevronRight size={20} className="text-ink-3" />
            </GlassCard>
          </button>
        ))}
      </div>
    </div>
  );
}

export function GrammarTopicScreen({ id }: { id: string }) {
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  useStudyTimer();
  const topic = grammarById(id);
  if (!topic) return <p className="py-10 text-center text-ink-2">404</p>;
  const examples = sentencesFor(id);
  const puzzleLevel = examples[0]?.level ?? topic.level;

  return (
    <div className="animate-rise">
      <SubHeader title={topic.title} subtitle={`${topic.level} · ${tr(topic.name)}`} />
      <GlassCard neon className="p-5">
        <p className="bn text-[1.05rem] leading-relaxed">{tr(topic.explanation)}</p>
        {topic.table && (
          <table className="mt-4 w-full text-left">
            <tbody>
              {topic.table.map(([label, form]) => (
                <tr key={label + form} className="border-t border-white/10">
                  <td className="py-2.5 pr-3 font-semibold text-ink-3">{label}</td>
                  <td className="py-2.5 text-lg font-bold text-mint">{form}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </GlassCard>

      {examples.length > 0 && (
        <>
          <div className="mt-6 mb-3 flex items-center justify-between gap-3">
            <h2 className="text-xl">{t('examples')}</h2>
            <Button className="min-h-10 px-4 text-sm" onClick={() => navigate(`/practice/puzzle?level=${puzzleLevel}&g=${id}`)}>
              <Puzzle size={18} /> {t('puzzle')}
            </Button>
          </div>
          <GlassCard className="divide-y divide-white/5">
            {examples.map((s) => (
              <div key={s.key} className="flex items-start gap-3 px-4 py-3">
                <SpeakButton text={s.it} size={36} />
                <div>
                  <p className="text-lg font-bold">{s.it}</p>
                  <p className="bn text-[0.95rem] text-ink-2">{tr(s.tr)}</p>
                </div>
              </div>
            ))}
          </GlassCard>
        </>
      )}
    </div>
  );
}
