import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, ChevronRight, Mic, Square, Volume2 } from 'lucide-react';
import type { SpeakingExercise, SpeakingKind } from '../../content/academyTypes';
import type { Tr } from '../../content/types';
import type { BankLevel } from '../../content/bank';
import { loadLevelSpeaking } from '../../content/registry';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { isSpeechRecognitionSupported, scoreSpokenMatch, speakItalian, startItalianRecognition } from '../../lib/speech';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, Pill, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';
import { useRouter } from '../../app/router';

const SPEAKING_KINDS: Record<SpeakingKind, Tr> = {
  'read-aloud': { bn: 'পড়ে শোনানো', en: 'Read aloud', it: 'Lettura ad alta voce' },
  repeat: { bn: 'শুনে পুনরাবৃত্তি', en: 'Listen & repeat', it: 'Ascolta e ripeti' },
  'self-intro': { bn: 'নিজের পরিচয়', en: 'Self-intro', it: 'Presentazione' },
  roleplay: { bn: 'রোলপ্লে', en: 'Role-play', it: 'Gioco di ruolo' },
  qa: { bn: 'প্রশ্নোত্তর', en: 'Q&A', it: 'Domande e risposte' },
  picture: { bn: 'ছবি বর্ণনা', en: 'Picture prompt', it: 'Descrizione immagine' },
  retell: { bn: 'গল্প বলা', en: 'Story retell', it: 'Racconta la storia' },
  discussion: { bn: 'আলোচনা', en: 'Discussion', it: 'Discussione' },
};

export function SpeakingScreen() {
  const { route } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [items, setItems] = useState<SpeakingExercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [kind, setKind] = useState<SpeakingKind | 'all'>('all');
  const [active, setActive] = useState<SpeakingExercise | null>(null);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [micError, setMicError] = useState<string | null>(null);
  const stopRef = useRef<(() => void) | null>(null);

  const micSupported = isSpeechRecognitionSupported();

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setActive(null);
    void loadLevelSpeaking(level).then((list) => {
      if (!mounted) return;
      setItems(list);
      setLoading(false);
    });
    return () => {
      mounted = false;
      stopRef.current?.();
    };
  }, [level]);

  const filtered = kind === 'all' ? items : items.filter((i) => i.kind === kind);

  const toggleMic = (ex: SpeakingExercise) => {
    if (listening) {
      stopRef.current?.();
      setListening(false);
      return;
    }
    setTranscript('');
    setMicError(null);
    setListening(true);
    stopRef.current = startItalianRecognition({
      onResult: (text) => {
        setTranscript(text);
        const match = scoreSpokenMatch(ex.targetIt, text);
        if (match.percent >= 50) {
          dispatch({ type: 'completeSpeaking', speakingId: ex.id, today: dayKey() });
        }
      },
      onError: (err) => setMicError(err),
      onEnd: () => setListening(false),
    });
  };

  if (active) {
    const done = state.speakingDone.includes(active.id);
    const match = transcript ? scoreSpokenMatch(active.targetIt, transcript) : null;

    return (
      <div className="animate-rise space-y-4">
        <SubHeader
          title={tr(active.title)}
          subtitle={`${active.level} · ${tr(SPEAKING_KINDS[active.kind])}`}
          right={
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => { stopRef.current?.(); setListening(false); setActive(null); }}>
              {t('all')}
            </Button>
          }
        />

        {active.imageAsset && (
          <GlassCard className="overflow-hidden p-3">
            <img
              src={active.imageAsset}
              alt={tr(active.title)}
              referrerPolicy="no-referrer"
              className="h-52 w-full rounded-2xl object-cover"
            />
          </GlassCard>
        )}

        {active.dialogueCue && (
          <GlassCard className="flex items-start gap-3 p-4">
            <SpeakButton text={active.dialogueCue.it} size={36} />
            <div>
              <p className="text-xs font-bold text-cyan">{active.dialogueCue.speaker}</p>
              <p className="text-base font-bold">{active.dialogueCue.it}</p>
              <p className="bn text-sm text-ink-2">{tr(active.dialogueCue.tr)}</p>
            </div>
          </GlassCard>
        )}

        <GlassCard neon className="space-y-3 p-5">
          <p className="bn text-sm font-semibold text-ink-2">{tr(active.prompt)}</p>
          <p className="text-xl leading-snug font-extrabold text-mint">{active.targetIt}</p>
          <p className="bn text-sm font-semibold">{tr(active.targetTr)}</p>
          <p className="bn rounded-xl bg-white/5 px-3 py-2 text-sm text-cyan">
            {t('pronTip')}: {active.pronunciationHint}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            <Button className="min-h-10 px-4 text-sm" onClick={() => void speakItalian(active.targetIt, 0.92)}>
              <Volume2 size={17} /> {t('normalSpeed')}
            </Button>
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => void speakItalian(active.targetIt, 0.68)}>
              <Volume2 size={17} /> {t('slowSpeed')}
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="space-y-3 p-4">
          {micSupported ? (
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant={listening ? 'secondary' : 'primary'}
                className="min-h-11 px-5 text-sm"
                onClick={() => toggleMic(active)}
              >
                {listening ? <Square size={16} /> : <Mic size={18} />}
                {listening ? t('stopMic') : t('startMic')}
              </Button>
              {listening && <span className="text-xs font-bold text-cyan">In ascolto (it-IT)…</span>}
            </div>
          ) : (
            <p className="bn text-sm font-semibold text-gold">{t('micUnsupported')}</p>
          )}

          {micError && (
            <p className="text-xs font-semibold text-gold">Microphone note: {micError}</p>
          )}

          {transcript && match && (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-3.5">
              <p className="text-xs font-bold text-ink-3">Recognized (it-IT):</p>
              <p className="mt-0.5 text-base font-bold">“{transcript}”</p>
              <p className={cx('mt-2 text-sm font-extrabold tabular-nums', match.percent >= 65 ? 'text-neon' : 'text-gold')}>
                Word match: {match.percent}% ({match.matched.length}/{match.matched.length + match.missed.length})
              </p>
              {match.missed.length > 0 && (
                <p className="mt-1 text-xs text-ink-2">Practise again: {match.missed.join(', ')}</p>
              )}
            </div>
          )}

          <Button
            variant="ghost"
            className="min-h-10 px-4 text-sm"
            onClick={() => dispatch({ type: 'completeSpeaking', speakingId: active.id, today: dayKey() })}
          >
            <CheckCircle2 size={16} /> {done ? `${t('completed')} ✓` : t('markDone')}
          </Button>
        </GlassCard>

        {active.followUps && active.followUps.length > 0 && (
          <GlassCard className="p-4">
            <p className="mb-2 text-xs font-bold text-ink-3">Follow-up reply</p>
            {active.followUps.map((f, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <SpeakButton text={f.it} size={32} />
                <div>
                  <p className="font-bold">{f.it}</p>
                  <p className="bn text-sm text-ink-2">{tr(f.tr)}</p>
                </div>
              </div>
            ))}
          </GlassCard>
        )}
      </div>
    );
  }

  return (
    <div className="animate-rise">
      <SubHeader title={t('speakingStudio')} subtitle={t('speakingStudioSub')} />
      <LevelTabs value={level} onChange={(l) => { setLevel(l); setKind('all'); }} />

      <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <Pill active={kind === 'all'} onClick={() => setKind('all')}>
          {t('all')} ({items.length})
        </Pill>
        {[...new Set(items.map((i) => i.kind))].map((k) => (
          <Pill key={k} active={kind === k} onClick={() => setKind(k)}>
            {tr(SPEAKING_KINDS[k])}
          </Pill>
        ))}
      </div>

      {loading ? (
        <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>
      ) : filtered.length === 0 ? (
        <GlassCard className="p-6 text-center text-ink-2">{t('inPreparation')}</GlassCard>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((sp) => {
            const done = state.speakingDone.includes(sp.id);
            return (
              <button
                key={sp.id}
                type="button"
                onClick={() => {
                  setActive(sp);
                  setTranscript('');
                  setMicError(null);
                }}
                className="text-left"
              >
                <GlassCard neon={done} className="flex h-full items-center gap-3 p-4 transition hover:border-violet/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet/30 bg-violet/10 text-violet">
                    <Mic size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-ink-3">{tr(SPEAKING_KINDS[sp.kind])}</p>
                    <p className="bn truncate text-base font-extrabold">{tr(sp.title)}</p>
                    <p className="truncate text-xs text-ink-2">{sp.targetIt}</p>
                  </div>
                  {done ? <CheckCircle2 size={18} className="text-neon shrink-0" /> : <ChevronRight size={18} className="text-ink-3 shrink-0" />}
                </GlassCard>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
