import { useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  Gauge,
  Headphones,
  Mic,
  Square,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  StructuredFlowRunner,
  type StructuredStudyRenderContext,
} from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';
import {
  A1_LISTENING_EXERCISES,
  A1_LISTENING_SPEAKING_DRILL_ITEMS,
  A1_SPEAKING_EXERCISES,
  LISTENING_SPEAKING_THEORY_CONFIG,
} from '../../content/academy/a1ListeningSpeaking';
import { useI18n } from '../../lib/i18n';
import {
  isSpeechRecognitionSupported,
  scoreSpokenMatch,
  speakItalian,
  startItalianRecognition,
  startSpeechSession,
} from '../../lib/speech';
import { Button, GlassCard, cx } from '../../components/ui';

function ListeningSpeakingStudy({ ctx }: { ctx: StructuredStudyRenderContext }) {
  const { lang, tr } = useI18n();
  const [tab, setTab] = useState<'listening' | 'speaking'>('listening');
  const [listeningAnswers, setListeningAnswers] = useState<Record<string, number>>({});
  const [showTranscript, setShowTranscript] = useState<Record<string, boolean>>({});
  const [activeMicId, setActiveMicId] = useState<string | null>(null);
  const [micTranscript, setMicTranscript] = useState<Record<string, string>>({});
  const [micError, setMicError] = useState<string | null>(null);
  const stopMicRef = useRef<(() => void) | null>(null);

  const speechRecAvailable = useMemo(() => isSpeechRecognitionSupported(), []);

  const totalRequired = A1_LISTENING_EXERCISES.length + A1_SPEAKING_EXERCISES.length;
  const listeningDone = A1_LISTENING_EXERCISES.filter((e) => ctx.studiedSet.has(e.id)).length;
  const speakingDone = A1_SPEAKING_EXERCISES.filter((e) => ctx.studiedSet.has(e.id)).length;
  const studiedCount = listeningDone + speakingDone;
  const remaining = Math.max(0, totalRequired - studiedCount);
  const canContinue = studiedCount >= totalRequired || ctx.studyCompleted;

  const playAudio = (it: string, rate: number) => {
    void speakItalian(it, rate, startSpeechSession()).catch(() => {});
  };

  const toggleMicForItem = (itemId: string) => {
    setMicError(null);
    if (activeMicId === itemId) {
      stopMicRef.current?.();
      stopMicRef.current = null;
      setActiveMicId(null);
      return;
    }
    if (stopMicRef.current) {
      stopMicRef.current();
      stopMicRef.current = null;
    }
    setActiveMicId(itemId);
    stopMicRef.current = startItalianRecognition({
      onResult: (transcript) => {
        setMicTranscript((prev) => ({ ...prev, [itemId]: transcript }));
        if (transcript.trim()) ctx.markItemStudied(itemId);
      },
      onError: (reason) => {
        setMicError(reason);
      },
      onEnd: () => {
        setActiveMicId((cur) => (cur === itemId ? null : cur));
      },
    });
  };

  const continueBtn = (
    <Button
      className="w-full min-h-12"
      disabled={!canContinue}
      data-testid="study-continue-btn"
      onClick={ctx.onContinueToDrill}
    >
      <span className="bn">
        {canContinue
          ? tr({ bn: 'ড্রিলে যান', en: 'Continue to Drill', it: 'Vai all’esercizio' })
          : tr({
              bn: `ড্রিলে যেতে আরও ${remaining}টি অনুশীলন করুন (${studiedCount}/${totalRequired})`,
              en: `Continue (${remaining} remaining · ${studiedCount}/${totalRequired})`,
              it: `Continua (altri ${remaining} · ${studiedCount}/${totalRequired})`,
            })}
      </span>
      {canContinue && <ArrowRight size={17} />}
    </Button>
  );

  return (
    <div className="space-y-4 pb-24">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setTab('listening')}
          className={cx(
            'flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs sm:text-sm font-extrabold transition',
            tab === 'listening'
              ? 'border-neon bg-neon/15 text-neon'
              : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
          )}
        >
          <Headphones size={16} />
          <span className="bn">
            {tr({ bn: 'শ্রবণ (Listening)', en: 'Listening', it: 'Ascolto' })} ({listeningDone}/{A1_LISTENING_EXERCISES.length})
          </span>
        </button>

        <button
          type="button"
          onClick={() => setTab('speaking')}
          className={cx(
            'flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs sm:text-sm font-extrabold transition',
            tab === 'speaking'
              ? 'border-neon bg-neon/15 text-neon'
              : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
          )}
        >
          <Mic size={16} />
          <span className="bn">
            {tr({ bn: 'কথন (Speaking)', en: 'Speaking', it: 'Parlato' })} ({speakingDone}/{A1_SPEAKING_EXERCISES.length})
          </span>
        </button>
      </div>

      {tab === 'listening' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {A1_LISTENING_EXERCISES.map((ex) => {
            const isStudied = ctx.studiedSet.has(ex.id);
            const selected = listeningAnswers[ex.id];
            const answered = selected !== undefined;
            const correct = answered && selected === ex.answer;
            const transcriptVisible = Boolean(showTranscript[ex.id]);

            return (
              <GlassCard
                key={ex.id}
                data-testid={`study-item-${ex.id}`}
                className={cx('p-4 space-y-3', isStudied && 'border-neon/50 bg-[#08312a]/85')}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="bn text-[11px] font-extrabold text-cyan">
                      {tr(ex.category)}
                    </span>
                    <h4 className="bn text-sm font-extrabold text-white">{tr(ex.title)}</h4>
                  </div>
                  {isStudied && <CheckCircle2 size={16} className="text-neon shrink-0" />}
                </div>

                {/* Audio playback controls */}
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    className="px-3 py-1.5 text-xs"
                    onClick={() => playAudio(ex.audioIt, 0.92)}
                  >
                    <Volume2 size={14} />
                    <span className="bn">{tr({ bn: 'স্বাভাবিক গতিতে শুনুন', en: 'Play Normal', it: 'Velocità normale' })}</span>
                  </Button>
                  <Button
                    className="px-3 py-1.5 text-xs"
                    variant="secondary"
                    onClick={() => playAudio(ex.audioIt, 0.68)}
                  >
                    <Gauge size={14} />
                    <span className="bn">{tr({ bn: 'ধীরে শুনুন', en: 'Play Slow', it: 'Riproduci lento' })}</span>
                  </Button>
                  <button
                    type="button"
                    onClick={() =>
                      setShowTranscript((prev) => ({ ...prev, [ex.id]: !prev[ex.id] }))
                    }
                    className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-[11px] font-bold text-ink-2 hover:border-neon/40"
                  >
                    {transcriptVisible ? <EyeOff size={13} /> : <Eye size={13} />}
                    <span className="bn">
                      {transcriptVisible
                        ? tr({ bn: 'লিপি লুকান', en: 'Hide Script', it: 'Nascondi testo' })
                        : tr({ bn: 'লিপি দেখুন', en: 'Transcript', it: 'Trascrizione' })}
                    </span>
                  </button>
                </div>

                {transcriptVisible && (
                  <div className="rounded-xl border border-white/12 bg-black/25 p-2.5 space-y-1">
                    <p className="text-xs font-bold text-white">{ex.audioIt}</p>
                    <p className="bn text-[11px] text-ink-2">{tr(ex.transcriptTr)}</p>
                  </div>
                )}

                <p className="bn text-sm font-extrabold text-white">{tr(ex.question)}</p>

                <div className="space-y-1.5">
                  {ex.options.map((opt, idx) => {
                    const picked = selected === idx;
                    const isRight = idx === ex.answer;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setListeningAnswers((prev) => ({ ...prev, [ex.id]: idx }));
                          ctx.markItemStudied(ex.id);
                        }}
                        className={cx(
                          'bn w-full rounded-xl border px-3 py-2 text-left text-xs font-bold transition flex items-center justify-between gap-2',
                          !answered && 'border-white/15 bg-white/5 text-white hover:border-neon/45',
                          answered && isRight && 'border-neon bg-neon/15 text-neon',
                          answered && picked && !isRight && 'border-rose-400 bg-rose-500/15 text-rose-200',
                          answered && !picked && !isRight && 'border-white/10 bg-white/3 text-ink-3 opacity-70',
                        )}
                      >
                        <span>{tr(opt)}</span>
                        {answered && isRight && <CheckCircle2 size={14} />}
                        {answered && picked && !isRight && <XCircle size={14} />}
                      </button>
                    );
                  })}
                </div>

                {answered && (
                  <p className={cx('bn text-xs font-semibold', correct ? 'text-neon' : 'text-gold')}>
                    {tr(ex.explanation)}
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {!speechRecAvailable && (
            <div className="rounded-xl border border-cyan/30 bg-cyan/10 px-3.5 py-2.5 text-xs text-cyan font-semibold">
              <span className="bn">
                {tr({
                  bn: 'অফলাইন মডেল গাইড: অডিও শুনে উচ্চারণ গাইড অনুসরণ করে জোরে বলুন এবং নিজে যাচাই করে "জোরে অনুশীলন করেছি" চাপুন।',
                  en: 'Listen to the Italian model audio, repeat aloud using the phonetic guide, and mark each prompt once practiced.',
                  it: 'Ascolta l’audio modello in italiano, ripeti ad alta voce e segna ogni esercizio come praticato.',
                })}
              </span>
            </div>
          )}

          {micError && (
            <div className="rounded-xl border border-gold/40 bg-gold/10 px-3 py-2 text-xs text-gold font-bold">
              {tr({
                bn: `মাইক্রোফোন অবস্থা: ${micError}`,
                en: `Mic status: ${micError}`,
                it: `Stato microfono: ${micError}`,
              })}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {A1_SPEAKING_EXERCISES.map((sp) => {
              const isStudied = ctx.studiedSet.has(sp.id);
              const isListening = activeMicId === sp.id;
              const spoken = micTranscript[sp.id];
              const match = spoken ? scoreSpokenMatch(sp.targetIt, spoken) : null;

              return (
                <GlassCard
                  key={sp.id}
                  data-testid={`study-item-${sp.id}`}
                  className={cx('p-4 space-y-2.5', isStudied && 'border-neon/50 bg-[#08312a]/85')}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="bn rounded-md border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-extrabold text-cyan">
                      #{sp.order} · {tr(sp.modeLabel)}
                    </span>
                    {isStudied && <CheckCircle2 size={16} className="text-neon shrink-0" />}
                  </div>

                  <p className="bn text-xs font-semibold text-ink-2">{tr(sp.prompt)}</p>

                  <div className="rounded-xl border border-white/12 bg-white/5 p-3 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-base font-extrabold text-white leading-snug">
                        {sp.targetIt}
                      </p>
                      <button
                        type="button"
                        onClick={() => playAudio(sp.targetIt, 0.88)}
                        aria-label={tr({ bn: `${sp.targetIt} শুনুন`, en: `Play ${sp.targetIt}`, it: `Ascolta ${sp.targetIt}` })}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-grad-primary text-navy-950"
                      >
                        <Volume2 size={14} />
                      </button>
                    </div>
                    <p className="bn text-xs font-bold text-mint">{tr(sp.targetTr)}</p>
                    {(lang === 'bn' ? sp.phoneticBn : lang === 'it' ? '' : sp.phoneticEn) && (
                      <p className="bn text-xs text-ink-3">
                        /{lang === 'bn' ? sp.phoneticBn : sp.phoneticEn}/
                      </p>
                    )}
                  </div>

                  <p className="bn text-[11px] text-gold font-semibold">{tr(sp.tip)}</p>

                  {spoken && match && (
                    <div className="rounded-xl border border-cyan/30 bg-cyan/10 px-3 py-2 text-xs space-y-0.5">
                      <p className="font-bold text-white">“{spoken}”</p>
                      <p className="text-cyan font-extrabold">
                        {tr({
                          bn: `শব্দ মিল: ${match.matched.length}/${match.matched.length + match.missed.length} (${match.percent}%)`,
                          en: `Word match: ${match.matched.length}/${match.matched.length + match.missed.length} (${match.percent}%)`,
                          it: `Parole riconosciute: ${match.matched.length}/${match.matched.length + match.missed.length} (${match.percent}%)`,
                        })}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <Button
                      className="px-3 py-1.5 text-xs"
                      variant={isStudied ? 'secondary' : 'primary'}
                      onClick={() => ctx.markItemStudied(sp.id)}
                    >
                      <CheckCircle2 size={14} />
                      <span className="bn">
                        {isStudied
                          ? tr({ bn: 'অনুশীলন সম্পন্ন', en: 'Practiced', it: 'Praticato' })
                          : tr({ bn: 'জোরে অনুশীলন করেছি', en: 'Mark Practiced', it: 'Segna praticato' })}
                      </span>
                    </Button>

                    {speechRecAvailable && (
                      <Button
                        className="px-3 py-1.5 text-xs"
                        variant="ghost"
                        onClick={() => toggleMicForItem(sp.id)}
                      >
                        {isListening ? <Square size={14} /> : <Mic size={14} />}
                        <span className="bn">
                          {isListening
                            ? tr({ bn: 'থামান', en: 'Stop Mic', it: 'Ferma microfono' })
                            : tr({ bn: 'মাইক পরীক্ষা', en: 'Test Mic', it: 'Prova microfono' })}
                        </span>
                      </Button>
                    )}
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </div>
      )}

      {typeof document !== 'undefined'
        ? createPortal(
            <div
              className="fixed inset-x-0 bottom-[calc(4.5rem+var(--safe-bottom,0px))] lg:bottom-4 z-30 pointer-events-none"
              data-testid="study-fixed-dock"
            >
              <div className="mx-auto flex w-full max-w-6xl px-3.5 sm:px-6 lg:pl-[18.5rem] lg:pr-10">
                <div className="mx-auto w-full max-w-3xl pointer-events-auto">
                  <div className="rounded-2xl border border-neon/25 bg-[#031917]/95 p-2.5 shadow-[0_-8px_28px_rgba(0,0,0,0.75)] backdrop-blur-xl">
                    {continueBtn}
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : continueBtn}
    </div>
  );
}

export function A1ListeningSpeakingModuleScreen() {
  const stubItems = useMemo<StudyListItem[]>(
    () => [
      ...A1_LISTENING_EXERCISES.map((l) => ({
        id: l.id,
        primary: l.title.en,
        italianLabel: l.title.en,
        phoneticBn: '',
        phoneticEn: '',
        exampleIt: l.audioIt,
        exampleTrBn: l.transcriptTr.bn,
        exampleTrEn: l.transcriptTr.en,
        exampleTrIt: l.transcriptTr.it ?? '',
        audioText: l.audioIt,
      })),
      ...A1_SPEAKING_EXERCISES.map((s) => ({
        id: s.id,
        primary: s.targetIt,
        italianLabel: s.targetIt,
        phoneticBn: s.phoneticBn,
        phoneticEn: s.phoneticEn,
        exampleIt: s.targetIt,
        exampleTrBn: s.targetTr.bn,
        exampleTrEn: s.targetTr.en,
        exampleTrIt: s.targetTr.it ?? '',
        audioText: s.targetIt,
      })),
    ],
    [],
  );

  return (
    <StructuredFlowRunner
      key="listening-speaking"
      moduleId="listening-speaking"
      backTo="/level/A1"
      theoryConfig={LISTENING_SPEAKING_THEORY_CONFIG}
      studyTitle={{
        bn: 'শ্রবণ (৩০টি) ও কথন (৩০টি) অনুশীলন',
        en: 'Listening (30) & Guided Speaking (30)',
        it: 'Ascolto (30) e produzione orale (30)',
      }}
      studyItems={stubItems}
      drillItems={A1_LISTENING_SPEAKING_DRILL_ITEMS}
      renderCustomStudy={(ctx) => <ListeningSpeakingStudy ctx={ctx} />}
    />
  );
}
