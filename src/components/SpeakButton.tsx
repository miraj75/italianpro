import { useState } from 'react';
import { Loader2, Play } from 'lucide-react';
import { speakItalian } from '../lib/speech';
import { useI18n } from '../lib/i18n';
import { cx } from './ui';

/** Plays Italian text via TTS; shows an honest error if no Italian voice exists. */
export function SpeakButton({ text, size = 40, className }: { text: string; size?: number; className?: string }) {
  const { t } = useI18n();
  const [state, setState] = useState<'idle' | 'playing' | 'error'>('idle');

  const play = async () => {
    setState('playing');
    try {
      await speakItalian(text);
      setState('idle');
    } catch {
      setState('error');
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
