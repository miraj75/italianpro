import { useState } from 'react';
import { Volume2 } from 'lucide-react';
import type { AcademyDrillItem } from '../../content/academy/types';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { Button, GlassCard, ProgressBar, cx } from '../ui';

export interface AudioChoiceQuestionProps {
  item: AcademyDrillItem;
  options: AcademyDrillItem[];
  questionNumber: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  disabled: boolean;
  pickedId: string | null;
  onSelect: (option: AcademyDrillItem) => void;
}

/**
 * Reusable interactive listening multiple-choice question card.
 * Displays strictly language-appropriate phonetic cue, slim progress bar, Replay Sound trigger,
 * graceful fallback notice on TTS failure, and a 2x2 choice grid.
 */
export function AudioChoiceQuestion({
  item,
  options,
  questionNumber,
  totalQuestions,
  correctCount,
  incorrectCount,
  disabled,
  pickedId,
  onSelect,
}: AudioChoiceQuestionProps) {
  const { lang, tr } = useI18n();
  const [audioWarning, setAudioWarning] = useState(false);

  const handleReplay = () => {
    setAudioWarning(false);
    const sid = startSpeechSession();
    void speakItalian(item.audioIt, 0.82, sid).catch((err) => {
      if (err instanceof Error && err.message === 'speech-cancelled') return;
      setAudioWarning(true);
    });
  };

  const cueText =
    lang === 'bn'
      ? item.cueBn
      : lang === 'it'
        ? (item.cueIt ?? item.cueEn)
        : item.cueEn;

  return (
    <GlassCard neon className="p-3.5 sm:p-4 space-y-3">
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold tabular-nums">
          <span className="text-cyan uppercase tracking-wider">
            {tr({
              bn: `ড্রিল · প্রশ্ন ${questionNumber} / ${totalQuestions}`,
              en: `Drill · Question ${questionNumber} of ${totalQuestions}`,
              it: `Esercizio · Domanda ${questionNumber} di ${totalQuestions}`,
            })}
          </span>
          <span className="flex items-center gap-2.5">
            <span className="text-neon">✓ {correctCount}</span>
            <span className="text-pink">✗ {incorrectCount}</span>
          </span>
        </div>
        <ProgressBar
          value={(questionNumber - (pickedId ? 0 : 1) + (pickedId ? 1 : 0)) / Math.max(1, totalQuestions)}
          className="h-1.5"
        />
      </div>

      <h2 className="bn text-sm sm:text-base font-extrabold text-white">
        {tr({
          bn: 'ইতালীয় অডিও শুনে সঠিক উত্তরটি বাছুন',
          en: 'Listen to the Italian audio and choose the matching answer',
          it: 'Ascolta l’audio in italiano e scegli la risposta corretta',
        })}
      </h2>

      {/* Audio Player + Single-Language Phonetic Cue Strip */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-2xl border border-neon/25 bg-white/5 p-3">
        <div className="min-w-0 space-y-0.5">
          <p className="text-[10px] font-extrabold uppercase tracking-wide text-ink-3">
            {tr({ bn: 'উচ্চারণ সংকেত', en: 'Phonetic Cue', it: 'Suggerimento audio' })}
          </p>
          <p className="bn text-base sm:text-lg font-extrabold text-mint break-words">
            {cueText}
          </p>
        </div>

        <Button
          type="button"
          variant="ghost"
          data-testid="drill-replay-btn"
          onClick={handleReplay}
          className="min-h-10 shrink-0 border-neon/40 bg-neon/10 px-3.5 text-xs sm:text-sm text-neon hover:bg-neon/20"
        >
          <Volume2 size={16} />
          <span>{tr({ bn: 'আবার শুনুন', en: 'Replay Sound', it: 'Riascolta' })}</span>
        </Button>
      </div>

      {audioWarning && (
        <p className="bn rounded-xl border border-gold/35 bg-gold/10 px-3 py-2 text-xs font-semibold text-gold">
          {tr({
            bn: 'এই ডিভাইসে সরাসরি ভয়েস প্লেব্যাক পাওয়া যাচ্ছে না; উপরের উচ্চারণ সংকেত দেখে উত্তর দিন।',
            en: 'Device voice playback is unavailable here—use the phonetic cue above to answer.',
            it: 'Sintesi vocale non disponibile: usa il suggerimento sopra per rispondere.',
          })}
        </p>
      )}

      {/* 2x2 Option Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {options.map((opt) => {
          const isPicked = pickedId === opt.id;
          const showResult = pickedId !== null;
          const isRight = opt.id === item.id;
          return (
            <button
              key={opt.id}
              type="button"
              disabled={disabled || showResult}
              data-testid={`drill-option-${opt.id}`}
              data-correct={isRight ? 'true' : 'false'}
              onClick={() => onSelect(opt)}
              className={cx(
                'glass flex min-h-20 flex-col items-center justify-center rounded-2xl border p-2.5 text-center transition active:scale-[0.98]',
                !showResult && 'border-white/15 bg-white/5 hover:border-neon/60 hover:bg-neon/8',
                showResult && isRight && 'border-neon bg-neon/18 shadow-[0_0_20px_-6px_rgba(0,245,160,0.65)]',
                showResult && isPicked && !isRight && 'border-red-500 bg-red-500/18',
                showResult && !isPicked && !isRight && 'opacity-55',
              )}
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tabular-nums">
                {opt.primaryLabel}
              </span>
              <span className="mt-0.5 text-xs sm:text-sm font-bold text-mint truncate max-w-full">
                {opt.secondaryLabel}
              </span>
            </button>
          );
        })}
      </div>
    </GlassCard>
  );
}
