import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, ChevronRight, Headphones, Plus, RotateCcw, Square, Volume2 } from 'lucide-react';
import type { ListeningExercise, ListeningKind } from '../../content/academyTypes';
import { LESSON_PASS_SCORE, type Tr } from '../../content/types';
import type { BankLevel } from '../../content/bank';
import { WORDS } from '../../content/bank';
import { loadLevelListening } from '../../content/registry';
import { grammarById } from '../../content/grammar';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { isSpeechSessionActive, speakItalian, startSpeechSession, stopSpeaking } from '../../lib/speech';
import { getCurrentLevel } from '../../state/progress';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, FilterChipRow, GlassCard, Pill, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';
import { QuizRunner, type QuizResult } from '../../components/QuizRunner';

const KIND_LABELS: Record<ListeningKind, Tr> = {
  dialogue: { bn: 'সংলাপ', en: 'Dialogue', it: 'Dialogo' },
  conversation: { bn: 'কথোপকথন', en: 'Conversation', it: 'Conversazione' },
  announcement: { bn: 'ঘোষণা', en: 'Announcement', it: 'Annuncio' },
  phone: { bn: 'ফোন কল', en: 'Phone call', it: 'Telefonata' },
  interview: { bn: 'সাক্ষাৎকার', en: 'Interview', it: 'Intervista' },
  story: { bn: 'গল্প', en: 'Story', it: 'Storia' },
  news: { bn: 'সংবাদ', en: 'News', it: 'Notizie' },
  discussion: { bn: 'আলোচনা', en: 'Discussion', it: 'Discussione' },
  formal: { bn: 'আনুষ্ঠানিক', en: 'Formal', it: 'Formale' },
};

export function ListeningScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const paramLevel = route.params.get('level');
  const fromHome = route.params.get('from') === 'home';
  const fromDailyPlan = route.params.get('activity') === 'listening';
  const [level, setLevel] = useState<BankLevel>(
    isBankLevel(paramLevel) ? paramLevel : getCurrentLevel(state),
  );
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
  const sessionRef = useRef(0);

  const stopAudio = () => {
    sessionRef.current += 1;
    void stopSpeaking();
    setPlaying(false);
    setActiveLine(null);
  };

  useEffect(() => {
    if (isBankLevel(paramLevel) && paramLevel !== level) {
      setLevel(paramLevel);
      setKind('all');
    }
  }, [paramLevel, level]);

  useEffect(() => {
    let mounted = true;
    stopAudio();
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
      sessionRef.current += 1;
      void stopSpeaking();
    };
  }, [level]);

  const kinds = useMemo(() => [...new Set(exercises.map((e) => e.kind))], [exercises]);
  const filtered = useMemo(() => {
    const base = kind === 'all' ? exercises : exercises.filter((e) => e.kind === kind);
    if (!fromDailyPlan) return base;
    // Show uncompleted exercises at the user's active level first when coming from Today's Plan.
    return [...base].sort((a, b) => {
      const aDone = state.listeningScores[a.id] !== undefined ? 1 : 0;
      const bDone = state.listeningScores[b.id] !== undefined ? 1 : 0;
      return aDone - bDone;
    });
  }, [exercises, kind, fromDailyPlan, state.listeningScores]);

  const playAll = async (ex: ListeningExercise, rate: number) => {
    const sessionId = startSpeechSession();
    sessionRef.current = sessionId;
    setPlaying(true);
    try {
      for (let i = 0; i < ex.lines.length; i++) {
        if (sessionRef.current !== sessionId || !isSpeechSessionActive(sessionId)) break;
        setActiveLine(i);
        await speakItalian(ex.lines[i]!.it, rate, sessionId);
        if (sessionRef.current !== sessionId || !isSpeechSessionActive(sessionId)) break;
      }
    } catch {
      // handled cleanly on cancel or TTS unavailability
    } finally {
      if (sessionRef.current === sessionId) {
        setPlaying(false);
        setActiveLine(null);
      }
    }
  };

  if (active) {
    return (
      <div className="animate-rise max-w-full space-y-4 overflow-x-hidden">
        <SubHeader
          title={active.titleIt}
          subtitle={`${active.level} · ${tr(active.title)}`}
          onBack={() => {
            stopAudio();
            setQuizResult(null);
            setActive(null);
          }}
          right={
            <Button variant="ghost" className="min-h-10 px-3.5 text-sm" onClick={() => { stopAudio(); setQuizResult(null); setActive(null); }}>
              {t('all')}
            </Button>
          }
        />

        <GlassCard neon className="space-y-3 p-4">
          <p className="text-xs font-semibold text-ink-3">{t('ttsNotice')}</p>
          <div className="grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
            {playing ? (
              <Button variant="secondary" className="min-h-11 w-full px-3.5 text-sm min-[380px]:col-span-2" onClick={stopAudio}>
                <Square size={16} className="shrink-0" />
                <span>{t('stop')}</span>
              </Button>
            ) : (
              <>
                <Button className="min-h-11 w-full px-3.5 text-sm" onClick={() => void playAll(active, 0.92)}>
                  <Volume2 size={17} className="shrink-0" />
                  <span>{t('normalSpeed')}</span>
                </Button>
                <Button variant="ghost" className="min-h-11 w-full px-3.5 text-sm" onClick={() => void playAll(active, 0.68)}>
                  <Volume2 size={17} className="shrink-0" />
                  <span>{t('slowSpeed')}</span>
                </Button>
              </>
            )}
          </div>
          <Button variant="ghost" className="min-h-11 w-full px-3.5 text-sm" onClick={() => setShowTranscript((s) => !s)}>
            {showTranscript ? t('hideTranscript') : t('showTranscript')}
          </Button>
          {activeLine !== null && (
            <p className="text-xs font-bold text-neon tabular-nums">
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
    <div className="animate-rise max-w-full space-y-3 overflow-x-hidden">
      <SubHeader
        title={t('listeningLab')}
        subtitle={t('listeningLabSub')}
        backTo={fromHome ? '/' : undefined}
      />
      <p className="rounded-xl border border-cyan/20 bg-cyan/8 px-3 py-2 text-xs font-semibold text-ink-2">
        {t('ttsNotice')}
      </p>
      <LevelTabs value={level} onChange={(l) => { setLevel(l); setKind('all'); }} />

      <FilterChipRow label={t('listeningLab')}>
        <Pill active={kind === 'all'} onClick={() => setKind('all')}>
          {t('all')} ({exercises.length})
        </Pill>
        {kinds.map((k) => (
          <Pill key={k} active={kind === k} onClick={() => setKind(k)}>
            {tr(KIND_LABELS[k])}
          </Pill>
        ))}
      </FilterChipRow>

      {loading ? (
        <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>
      ) : filtered.length === 0 ? (
        <GlassCard className="p-6 text-center space-y-3 text-ink-2">
          <p className="bn">{t('inPreparation')}</p>
          {fromHome && (
            <Button variant="ghost" className="min-h-10 px-4 text-xs" onClick={() => navigate('/')}>
              {t('home')}
            </Button>
          )}
        </GlassCard>
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
                className="h-full w-full min-w-0 text-left"
              >
                <GlassCard
                  neon={best !== undefined}
                  className="flex h-full w-full min-w-0 items-center gap-3 p-4 transition hover:border-cyan/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan/30 bg-cyan/10 text-cyan">
                    <Headphones size={20} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-cyan/90 tabular-nums">
                      {tr(KIND_LABELS[ex.kind])} · {ex.lines.length} {tr({ bn: 'লাইন', en: 'lines', it: 'righe' })} · {ex.questions.length} Q
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-base leading-snug font-extrabold text-white break-words">
                      {ex.titleIt}
                    </p>
                    <p className="bn mt-0.5 line-clamp-2 text-xs sm:text-sm text-ink-2 break-words">{tr(ex.title)}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <Volume2 size={15} className="text-cyan/75" aria-hidden />
                    {best !== undefined ? (
                      <span className="flex items-center gap-1 text-xs font-bold text-neon tabular-nums">
                        <CheckCircle2 size={14} /> {Math.round(best * 100)}%
                      </span>
                    ) : (
                      <ChevronRight size={18} className="text-ink-3" />
                    )}
                  </div>
                </GlassCard>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
