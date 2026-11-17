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
import { Button, FilterChipRow, GlassCard, Pill, cx } from '../../components/ui';
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

function formatMicError(code: string): Tr {
  switch (code) {
    case 'not-allowed':
    case 'service-not-allowed':
      return {
        bn: 'মাইক্রোফোনের অনুমতি দেওয়া হয়নি। অনুগ্রহ করে ব্রাউজার সেটিংস থেকে মাইক্রোফোন অনুমতি দিন।',
        en: 'Microphone permission was denied. Enable microphone access in your browser settings and try again.',
        it: 'Autorizzazione microfono negata. Abilita il microfono nelle impostazioni del browser.',
      };
    case 'no-speech':
      return {
        bn: 'কোনো কথা শোনা যায়নি — অনুগ্রহ করে আবার বলুন।',
        en: 'No speech was detected. Tap the microphone and speak clearly.',
        it: 'Nessun audio rilevato. Tocca il microfono e parla chiaramente.',
      };
    case 'audio-capture':
      return {
        bn: 'কোনো সক্রিয় মাইক্রোফোন পাওয়া যায়নি।',
        en: 'No working microphone was detected on this device.',
        it: 'Nessun microfono disponibile su questo dispositivo.',
      };
    default:
      return {
        bn: `স্পিচ রিকগনিশন ত্রুটি (${code})। অনুগ্রহ করে আবার চেষ্টা করুন।`,
        en: `Speech recognition error (${code}). Please try again.`,
        it: `Errore di riconoscimento vocale (${code}). Riprova.`,
      };
  }
}

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
    const trimmedTranscript = transcript.trim();
    const match = trimmedTranscript ? scoreSpokenMatch(active.targetIt, trimmedTranscript) : null;

    return (
      <div className="animate-rise max-w-full space-y-4 overflow-x-hidden">
        <SubHeader
          title={tr(active.title)}
          subtitle={`${active.level} · ${tr(SPEAKING_KINDS[active.kind])}`}
          right={
            <Button variant="ghost" className="min-h-10 px-3.5 text-sm" onClick={() => { stopRef.current?.(); setListening(false); setActive(null); }}>
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
            <div className="min-w-0 flex-1">
              <p className="text-xs font-bold text-cyan">{active.dialogueCue.speaker}</p>
              <p className="text-base font-bold break-words">{active.dialogueCue.it}</p>
              <p className="bn text-sm text-ink-2 break-words">{tr(active.dialogueCue.tr)}</p>
            </div>
          </GlassCard>
        )}

        <GlassCard neon className="space-y-3 p-4 sm:p-5">
          <p className="bn text-sm font-semibold text-ink-2 break-words">{tr(active.prompt)}</p>
          <p className="text-xl leading-snug font-extrabold text-mint break-words">{active.targetIt}</p>
          <p className="bn text-sm font-semibold break-words">{tr(active.targetTr)}</p>
          <p className="bn rounded-xl bg-white/5 px-3 py-2 text-sm text-cyan break-words">
            {t('pronTip')}: {active.pronunciationHint}
          </p>

          <div className="grid grid-cols-1 gap-2 pt-1 min-[380px]:grid-cols-2">
            <Button className="min-h-11 w-full px-3.5 text-sm" onClick={() => void speakItalian(active.targetIt, 0.92)}>
              <Volume2 size={17} className="shrink-0" />
              <span>{t('normalSpeed')}</span>
            </Button>
            <Button variant="ghost" className="min-h-11 w-full px-3.5 text-sm" onClick={() => void speakItalian(active.targetIt, 0.68)}>
              <Volume2 size={17} className="shrink-0" />
              <span>{t('slowSpeed')}</span>
            </Button>
          </div>
        </GlassCard>

        <GlassCard className="space-y-3 p-4">
          {micSupported ? (
            <div className="space-y-2">
              <Button
                variant={listening ? 'secondary' : 'primary'}
                className="min-h-12 w-full px-4 text-sm"
                onClick={() => toggleMic(active)}
              >
                {listening ? <Square size={16} className="shrink-0" /> : <Mic size={18} className="shrink-0" />}
                <span>{listening ? t('stopMic') : t('startMic')}</span>
              </Button>
              <p className={cx('bn text-xs font-semibold', listening ? 'text-cyan' : 'text-ink-3')}>
                {listening ? t('micListening') : t('micReadyNote')}
              </p>
            </div>
          ) : (
            <p className="bn rounded-xl border border-gold/30 bg-gold/10 px-3 py-2.5 text-sm font-semibold text-gold">
              {t('micUnsupported')}
            </p>
          )}

          {micError && (
            <p role="alert" className="bn rounded-xl border border-pink/40 bg-pink/10 px-3 py-2 text-xs font-semibold text-pink">
              {tr(formatMicError(micError))}
            </p>
          )}

          {trimmedTranscript && match && (
            <div className="rounded-2xl border border-white/15 bg-white/5 p-3.5">
              <p className="text-xs font-bold text-ink-3">Recognized (it-IT):</p>
              <p className="mt-0.5 text-base font-bold break-words">“{trimmedTranscript}”</p>
              <p className={cx('mt-2 text-sm font-extrabold tabular-nums', match.percent >= 65 ? 'text-neon' : 'text-gold')}>
                Word match: {match.percent}% ({match.matched.length}/{match.matched.length + match.missed.length})
              </p>
              {match.missed.length > 0 && (
                <p className="mt-1 text-xs text-ink-2 break-words">Practise again: {match.missed.join(', ')}</p>
              )}
            </div>
          )}

          <Button
            variant="ghost"
            className="min-h-11 w-full px-4 text-sm"
            onClick={() => dispatch({ type: 'completeSpeaking', speakingId: active.id, today: dayKey() })}
          >
            <CheckCircle2 size={16} className="shrink-0" />
            <span>{done ? `${t('completed')} ✓` : t('markDone')}</span>
          </Button>
        </GlassCard>

        {active.followUps && active.followUps.length > 0 && (
          <GlassCard className="p-4">
            <p className="mb-2 text-xs font-bold text-ink-3">Follow-up reply</p>
            <div className="space-y-2.5">
              {active.followUps.map((f, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <SpeakButton text={f.it} size={32} />
                  <div className="min-w-0 flex-1">
                    <p className="font-bold break-words">{f.it}</p>
                    <p className="bn text-sm text-ink-2 break-words">{tr(f.tr)}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        )}
      </div>
    );
  }

  return (
    <div className="animate-rise max-w-full space-y-3 overflow-x-hidden">
      <SubHeader title={t('speakingStudio')} subtitle={t('speakingStudioSub')} />
      <LevelTabs value={level} onChange={(l) => { setLevel(l); setKind('all'); }} />

      <FilterChipRow label={t('speakingStudio')}>
        <Pill active={kind === 'all'} onClick={() => setKind('all')}>
          {t('all')} ({items.length})
        </Pill>
        {[...new Set(items.map((i) => i.kind))].map((k) => (
          <Pill key={k} active={kind === k} onClick={() => setKind(k)}>
            {tr(SPEAKING_KINDS[k])}
          </Pill>
        ))}
      </FilterChipRow>

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
                className="h-full w-full min-w-0 text-left"
              >
                <GlassCard
                  neon={done}
                  className="flex h-full w-full min-w-0 items-center gap-3 p-4 transition hover:border-violet/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-violet/30 bg-violet/10 text-violet">
                    <Mic size={20} aria-hidden />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-violet/90">{tr(SPEAKING_KINDS[sp.kind])}</p>
                    <p className="bn mt-0.5 line-clamp-2 text-base leading-snug font-extrabold text-white break-words">
                      {tr(sp.title)}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs sm:text-sm font-semibold text-mint/90 break-words">
                      {sp.targetIt}
                    </p>
                  </div>
                  {done ? (
                    <CheckCircle2 size={18} className="shrink-0 text-neon" />
                  ) : (
                    <ChevronRight size={18} className="shrink-0 text-ink-3" />
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
