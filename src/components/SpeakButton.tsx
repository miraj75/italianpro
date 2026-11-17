import { useEffect, useRef, useState } from 'react';
import { Loader2, Play } from 'lucide-react';
import { speakItalian, startSpeechSession } from '../lib/speech';
import { useI18n } from '../lib/i18n';
import { cx } from './ui';

/** Plays Italian text via TTS; shows an honest error if no Italian voice exists. */
export function SpeakButton({
  text,
  size = 40,
  className,
  onSpeak,
}: {
  text: string;
  size?: number;
  className?: string;
  onSpeak?: () => void;
}) {
  const { t } = useI18n();
  const [state, setState] = useState<'idle' | 'playing' | 'error'>('idle');
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const play = async () => {
    onSpeak?.();
    const sessionId = startSpeechSession();
    setState('playing');
    try {
      await speakItalian(text, 0.9, sessionId);
      if (mountedRef.current) setState('idle');
    } catch (err) {
      if (!mountedRef.current) return;
      if (err instanceof Error && err.message === 'speech-cancelled') {
        setState('idle');
      } else {
        setState('error');
      }
    }
  };

  return (
    <button
      type="button"
      onClick={play}
      aria-label={`${text} ▶`}
      title={state === 'error' ? t('ttsUnavailable') : undefined}
      className={cx(
        'inline-flex shrink-0 items-center justify-center rounded-full transition active:scale-95',
        state === 'error' ? 'bg-white/10 text-ink-3' : 'bg-grad-primary text-navy-950',
        className,
      )}
      style={{ width: size, height: size }}
    >
      {state === 'playing' ? <Loader2 size={size * 0.45} className="animate-spin" /> : <Play size={size * 0.42} fill="currentColor" />}
    </button>
  );
}
