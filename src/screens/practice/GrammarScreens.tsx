import { useState } from 'react';
import { AlertTriangle, BookOpen, CheckCircle2, ChevronRight, Plus, Puzzle } from 'lucide-react';
import { GRAMMAR_TOPICS, richGrammarById } from '../../content/grammar';
import { richWordByKey, sentencesFor, type BankLevel } from '../../content/bank';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, cx } from '../../components/ui';
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
              <span className="bg-grad-premium flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-extrabold text-white tabular-nums">{i + 1}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold">{g.title}</span>
                <span className="bn block text-[0.95rem] text-ink-2">{tr(g.name)}</span>
                <span className="text-xs font-semibold text-ink-3 tabular-nums">{t('examplesCount', { n: sentencesFor(g.id).length })}</span>
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
  const { dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const [picked, setPicked] = useState<Record<string, number>>({});
  const topic = richGrammarById(id);
  if (!topic) return <p className="py-10 text-center text-ink-2">404</p>;

  const examples = sentencesFor(id);
  const puzzleLevel = examples[0]?.level ?? topic.level;
  const relatedWords = (topic.vocabKeys ?? []).map((k) => richWordByKey(k)).filter((w): w is NonNullable<typeof w> => !!w);

  return (
    <div className="animate-rise space-y-5">
      <SubHeader title={topic.title} subtitle={`${topic.level} · ${tr(topic.name)}`} />

      <GlassCard neon className="space-y-4 p-5">
        <div>
          <p className="text-xs font-bold tracking-wide text-mint uppercase">{t('ruleSummary')}</p>
          <p className="bn mt-1 text-[1.05rem] leading-relaxed font-semibold">{tr(topic.rule)}</p>
          {topic.rule.bn !== topic.explanation.bn && (
            <p className="bn mt-2 text-[0.95rem] leading-relaxed text-ink-2">{tr(topic.explanation)}</p>
          )}
        </div>

        {topic.table && (
          <table className="w-full text-left">
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

        {topic.exceptions && (
          <div className="rounded-2xl border border-gold/30 bg-gold/10 p-3.5">
            <p className="text-xs font-bold text-gold uppercase">{t('exceptionsLabel')}</p>
            <p className="bn mt-1 text-sm font-semibold">{tr(topic.exceptions)}</p>
          </div>
        )}
      </GlassCard>

      {topic.commonMistakes && topic.commonMistakes.length > 0 && (
        <GlassCard className="space-y-3 p-4">
          <h2 className="flex items-center gap-2 text-lg font-extrabold text-gold">
            <AlertTriangle size={18} /> {t('commonMistakes')}
          </h2>
          {topic.commonMistakes.map((m, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-sm">
              <p className="font-bold text-pink line-through">✗ {m.wrong}</p>
              <p className="mt-0.5 font-extrabold text-neon">✓ {m.right}</p>
              <p className="bn mt-1 text-xs text-ink-2">{tr(m.note)}</p>
            </div>
          ))}
        </GlassCard>
      )}

      {topic.exercises && topic.exercises.length > 0 && (
        <GlassCard className="space-y-4 p-4">
          <h2 className="text-lg font-extrabold">{t('quickPractice')}</h2>
          {topic.exercises.map((q) => {
            const ans = picked[q.id];
            return (
              <div key={q.id} className="space-y-2 border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
                <p className="bn text-sm font-bold text-ink-2">{tr(q.prompt)}</p>
                {q.it && <p className="text-base font-extrabold">{q.it}</p>}
                <div className="flex flex-wrap gap-2">
                  {q.options.map((opt, idx) => (
                    <button
                      key={opt}
                      type="button"
                      disabled={ans !== undefined}
                      onClick={() => setPicked((p) => ({ ...p, [q.id]: idx }))}
                      className={cx(
                        'min-h-10 rounded-xl border px-3.5 text-sm font-bold transition',
                        ans === undefined
                          ? 'border-white/15 bg-white/5 hover:border-neon/40'
                          : idx === q.answer
                            ? 'border-neon bg-neon/15 text-neon'
                            : ans === idx
                              ? 'border-pink bg-pink/15 text-pink'
                              : 'border-white/10 opacity-60',
                      )}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {ans !== undefined && (
                  <p className="bn flex items-center gap-1.5 text-xs font-semibold text-mint">
                    <CheckCircle2 size={14} /> {tr(q.explanation)}
                  </p>
                )}
              </div>
            );
          })}
        </GlassCard>
      )}

      {(examples.length > 0 || topic.examples.length > 0) && (
        <section>
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-xl">{t('examples')}</h2>
            <Button className="min-h-10 px-4 text-sm" onClick={() => navigate(`/practice/puzzle?level=${puzzleLevel}&g=${id}`)}>
              <Puzzle size={18} /> {t('puzzle')}
            </Button>
          </div>
          <GlassCard className="divide-y divide-white/5">
            {topic.examples.map((ex) => (
              <div key={ex.it} className="flex items-start gap-3 px-4 py-3">
                <SpeakButton text={ex.it} size={36} />
                <div>
                  <p className="text-lg font-bold">{ex.it}</p>
                  <p className="bn text-[0.95rem] text-ink-2">{tr(ex.tr)}</p>
                </div>
              </div>
            ))}
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
        </section>
      )}

      {relatedWords.length > 0 && (
        <GlassCard className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-base font-extrabold">{t('relatedVocab')}</h2>
            <Button
              variant="ghost"
              className="min-h-8 px-3 text-xs"
              onClick={() => dispatch({ type: 'addCards', keys: relatedWords.map((w) => w.key), today: dayKey() })}
            >
              <Plus size={14} /> {t('addCard')}
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {relatedWords.map((w) => (
              <div key={w.key} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm">
                <SpeakButton text={w.it} size={28} />
                <span className="font-bold">{w.it}</span>
                <span className="bn text-xs text-ink-2">— {tr(w.tr)}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {topic.storyIds && topic.storyIds.length > 0 && (
        <GlassCard className="p-4">
          <h2 className="mb-2 text-base font-extrabold">{t('relatedStories')}</h2>
          <div className="flex flex-wrap gap-2">
            {topic.storyIds.map((sid) => (
              <Button key={sid} variant="ghost" className="min-h-9 px-3.5 text-xs" onClick={() => navigate(`/practice/stories/${sid}`)}>
                <BookOpen size={14} /> {sid.toUpperCase()}
              </Button>
            ))}
          </div>
        </GlassCard>
      )}
    </div>
  );
}
