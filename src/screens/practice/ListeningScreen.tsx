import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, ChevronRight, Headphones, Plus, RotateCcw, Square, Volume2 } from 'lucide-react';
import type { ListeningExercise, ListeningKind } from '../../content/academyTypes';
import { LESSON_PASS_SCORE } from '../../content/types';
import type { BankLevel } from '../../content/bank';
import { WORDS } from '../../content/bank';
import { loadLevelListening } from '../../content/registry';
import { grammarById } from '../../content/grammar';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { speakItalian, stopSpeaking } from '../../lib/speech';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, Pill, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';
import { QuizRunner, type QuizResult } from '../../components/QuizRunner';

const KIND_LABELS: Record<ListeningKind, { bn: string; en: string }> = {
  dialogue: { bn: 'সংলাপ', en: 'Dialogue' },
  conversation: { bn: 'কথোপকথন', en: 'Conversation' },
  announcement: { bn: 'ঘোষণা', en: 'Announcement' },
  phone: { bn: 'ফোন কল', en: 'Phone call' },
  interview: { bn: 'সাক্ষাৎকার', en: 'Interview' },
  story: { bn: 'গল্প', en: 'Story' },
  news: { bn: 'সংবাদ', en: 'News' },
  discussion: { bn: 'আলোচনা', en: 'Discussion' },
  formal: { bn: 'আনুষ্ঠানিক', en: 'Formal' },
};

export function ListeningScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr, lang } = useI18n();
  useStudyTimer();

  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [exercises, setExercises] = useState<ListeningExercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [kind, setKind] = useState<ListeningKind | 'all'>('all');
  const [active, setActive] = useState<ListeningExercise | null>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showTr, setShowTr] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [activeLine, setActiveLine] = useState<number | null>(null);
  const [quizKey, setQuizKey] = useState(0);
  const [quizResult, setQuizResult] = useState<QuizResult[] | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setActive(null);
    setQuizResult(null);
    void loadLevelListening(level).then((list) => {
      if (!mounted) return;
      setExercises(list);
      setLoading(false);
    });
    return () => {
      mounted = false;
      void stopSpeaking();
    };
  }, [level]);

  const kinds = useMemo(() => [...new Set(exercises.map((e) => e.kind))], [exercises]);
  const filtered = useMemo(
    () => (kind === 'all' ? exercises : exercises.filter((e) => e.kind === kind)),
    [exercises, kind],
  );

  const playAll = async (ex: ListeningExercise, rate: number) => {
    setPlaying(true);
    try {
      for (let i = 0; i < ex.lines.length; i++) {
        setActiveLine(i);
        await speakItalian(ex.lines[i]!.it, rate);
      }
    } catch {
      // handled cleanly
    } finally {
      setPlaying(false);
      setActiveLine(null);
    }
  };

  const stopAudio = () => {
    void stopSpeaking();
    setPlaying(false);
    setActiveLine(null);
  };

  if (active) {
    return (
      <div className="animate-rise space-y-4">
        <SubHeader
          title={active.titleIt}
          subtitle={`${active.level} · ${tr(active.title)}`}
          right={
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => { stopAudio(); setQuizResult(null); setActive(null); }}>
              {t('all')}
            </Button>
          }
        />

        <GlassCard neon className="p-4">
          <p className="text-xs font-semibold text-ink-3">{t('ttsNotice')}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {playing ? (
              <Button variant="secondary" className="min-h-10 px-4 text-sm" onClick={stopAudio}>
                <Square size={16} /> {t('stop')}
              </Button>
            ) : (
              <>
                <Button className="min-h-10 px-4 text-sm" onClick={() => void playAll(active, 0.92)}>
                  <Volume2 size={17} /> {t('normalSpeed')}
                </Button>
                <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => void playAll(active, 0.68)}>
                  <Volume2 size={17} /> {t('slowSpeed')}
                </Button>
              </>
            )}
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setShowTranscript((s) => !s)}>
              {showTranscript ? t('hideTranscript') : t('showTranscript')}
            </Button>
          </div>
          {activeLine !== null && (
            <p className="mt-2 text-xs font-bold text-neon tabular-nums">
              Line {activeLine + 1} / {active.lines.length} — {active.lines[activeLine]?.speaker}
            </p>
          )}
        </GlassCard>

        {showTranscript && (
          <GlassCard className="space-y-3 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-extrabold text-cyan">{t('dialogue')}</p>
              <button type="button" onClick={() => setShowTr((v) => !v)} className="text-xs font-bold text-mint hover:underline">
                {showTr ? t('hideTranslation') : t('showTranslation')}
              </button>
            </div>
            {active.lines.map((line, i) => (
              <div key={i} className={cx('flex items-start gap-3 rounded-xl p-2.5', activeLine === i && 'bg-neon/10 ring-1 ring-neon/40')}>
                <SpeakButton text={line.it} size={34} />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold text-mint">{line.speaker}</p>
                  <p className="text-base font-bold">{line.it}</p>
                  {showTr && <p className="bn text-sm text-ink-2">{tr(line.tr)}</p>}
                </div>
              </div>
            ))}
            <div className="border-t border-white/10 pt-3">
              <p className="bn text-sm font-semibold text-ink-2">{tr(active.explanation)}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {active.grammarIds.map((gid) => {
                  const g = grammarById(gid);
                  return (
                    g && (
                      <button
                        key={gid}
                        type="button"
                        onClick={() => navigate(`/grammar/${gid}`)}
                        className="rounded-lg border border-cyan/30 bg-cyan/10 px-2.5 py-1 text-xs font-bold text-cyan"
                      >
                        {g.title}
                      </button>
                    )
                  );
                })}
              </div>
            </div>
          </GlassCard>
        )}

        <GlassCard className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="text-base font-extrabold">{t('wordBank')}</h2>
            {active.vocabKeys.length > 0 && (
              <Button
                variant="ghost"
                className="min-h-8 px-3 text-xs"
                onClick={() => {
                  const valid = active.vocabKeys.filter((k) => WORDS[active.level as BankLevel].some((w) => w.key === k));
                  if (valid.length > 0) dispatch({ type: 'addCards', keys: valid, today: dayKey() });
                }}
              >
                <Plus size={14} /> {t('addCard')}
              </Button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {active.vocabList.map((v) => (
              <div key={v.it} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm">
                <SpeakButton text={v.it} size={28} />
                <span className="font-bold">{v.it}</span>
                <span className="bn text-xs text-ink-2">— {tr(v.tr)}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-4">
          <h2 className="mb-3 text-lg font-extrabold">{t('comprehensionCheck')}</h2>
          {quizResult ? (
            (() => {
              const correct = quizResult.filter((r) => r.correct).length;
              const total = Math.max(1, quizResult.length);
              const score = correct / total;
              const passed = score >= LESSON_PASS_SCORE;
              return (
                <div className="animate-rise py-4 text-center">
                  <p className="text-5xl font-extrabold text-grad-primary tabular-nums">{Math.round(score * 100)}%</p>
                  <p className="mt-1 text-sm font-bold text-ink-2 tabular-nums">
                    {t('score')}: {correct}/{total}
                  </p>
                  <p className={cx('bn mt-3 text-lg font-bold', passed ? 'text-neon' : 'text-gold')}>
                    {passed ? t('quizPassed') : t('quizFailed')}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setQuizResult(null);
                        setQuizKey((k) => k + 1);
                      }}
                    >
                      <RotateCcw size={18} /> {t('retry')}
                    </Button>
                    <Button
                      onClick={() => {
                        stopAudio();
                        setQuizResult(null);
                        setActive(null);
                      }}
                    >
                      {t('continue')}
                    </Button>
                  </div>
                </div>
              );
            })()
          ) : (
            <QuizRunner
              key={`${active.id}-${quizKey}`}
              questions={active.questions}
              onFinish={(results) => {
                setQuizResult(results);
                const score = results.filter((r) => r.correct).length / Math.max(1, results.length);
                dispatch({ type: 'recordListening', exerciseId: active.id, score, today: dayKey() });
              }}
            />
          )}
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="animate-rise">
      <SubHeader title={t('listeningLab')} subtitle={t('listeningLabSub')} />
      <LevelTabs value={level} onChange={(l) => { setLevel(l); setKind('all'); }} />

      <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <Pill active={kind === 'all'} onClick={() => setKind('all')}>
          {t('all')} ({exercises.length})
        </Pill>
        {kinds.map((k) => (
          <Pill key={k} active={kind === k} onClick={() => setKind(k)}>
            {KIND_LABELS[k][lang]}
          </Pill>
        ))}
      </div>

      {loading ? (
        <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>
      ) : filtered.length === 0 ? (
        <GlassCard className="p-6 text-center text-ink-2">{t('inPreparation')}</GlassCard>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((ex) => {
            const best = state.listeningScores[ex.id];
            return (
              <button
                key={ex.id}
                type="button"
                onClick={() => {
                  setActive(ex);
                  setShowTranscript(false);
                  setQuizKey(0);
                  setQuizResult(null);
                }}
                className="text-left"
              >
                <GlassCard neon={best !== undefined} className="flex h-full items-center gap-3 p-4 transition hover:border-cyan/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
                    <Headphones size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-ink-3">
                      {KIND_LABELS[ex.kind][lang]} · {ex.lines.length} lines · {ex.questions.length} Q
                    </p>
                    <p className="truncate text-base font-extrabold">{ex.titleIt}</p>
                    <p className="bn truncate text-sm text-ink-2">{tr(ex.title)}</p>
                  </div>
                  {best !== undefined ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-neon tabular-nums">
                      <CheckCircle2 size={15} /> {Math.round(best * 100)}%
                    </span>
                  ) : (
                    <ChevronRight size={18} className="text-ink-3" />
                  )}
                </GlassCard>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
