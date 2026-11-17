import { CheckCircle2, Volume2 } from 'lucide-react';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { cx } from '../ui';

export interface StudyListItem {
  id: string;
  primary: string;
  secondary?: string;
  italianLabel: string;
  phoneticBn: string;
  phoneticEn: string;
  phoneticIt?: string;
  meaningBn?: string;
  meaningEn?: string;
  meaningIt?: string;
  exampleIt: string;
  exampleTrBn: string;
  exampleTrEn: string;
  exampleTrIt?: string;
  examplePhoneticBn?: string;
  examplePhoneticEn?: string;
  guideBn?: string;
  guideEn?: string;
  guideIt?: string;
  categoryLabel?: string;
  group?: string;
  audioText: string;
}

export interface StudyItemCardProps {
  item: StudyListItem;
  studied: boolean;
  selected: boolean;
  onSelect: (item: StudyListItem) => void;
}

/**
 * Reusable Study List card tile supporting both Alphabet letters and Numbers 0–100.
 * Strictly displays language-appropriate phonetic cue / translation without leaking Bengali into EN/IT.
 */
export function StudyItemCard({ item, studied, selected, onSelect }: StudyItemCardProps) {
  const { lang } = useI18n();

  const cueText =
    lang === 'bn'
      ? item.phoneticBn.split('(')[0]!.trim()
      : lang === 'it'
        ? (item.phoneticIt ?? item.phoneticEn)
        : item.phoneticEn;

  const subText =
    lang === 'bn'
      ? item.meaningBn
        ? item.meaningBn.replace(/\s*\(.+\)/, '')
        : item.exampleIt
      : lang === 'it'
        ? (item.meaningIt ?? item.exampleIt)
        : (item.meaningEn ?? item.exampleIt);

  return (
    <div
      className={cx(
        'relative flex flex-col justify-between rounded-2xl border p-2 text-left transition',
        selected
          ? 'border-neon bg-neon/15 shadow-[0_0_16px_-6px_rgba(0,245,160,0.52)]'
          : studied
            ? 'border-neon/35 bg-[#08312a]/85 hover:border-neon/65'
            : 'border-white/12 bg-white/5 hover:border-white/30',
      )}
    >
      <button
        type="button"
        onClick={() => onSelect(item)}
        data-testid={`study-item-${item.id}`}
        aria-pressed={selected}
        aria-label={`${item.primary} ${item.italianLabel}`}
        className="flex min-h-[68px] w-full flex-col items-center justify-center text-center focus:outline-none"
      >
        {studied && (
          <CheckCircle2
            size={13}
            className="absolute top-1.5 left-1.5 text-neon"
            aria-label="studied"
          />
        )}

        <div className="flex items-baseline justify-center gap-1 pt-0.5">
          <span className="text-xl font-extrabold text-white leading-none tabular-nums">
            {item.primary}
          </span>
          {item.secondary && (
            <span className="text-sm font-bold text-ink-2 leading-none">{item.secondary}</span>
          )}
        </div>

        <span className="mt-1 max-w-full truncate text-xs font-extrabold text-cyan">
          {item.italianLabel}
        </span>

        <span className="bn max-w-full truncate text-[11px] font-semibold text-mint/95">
          {cueText}
        </span>

        <span className="bn mt-0.5 max-w-full truncate text-[10px] text-ink-3">
          {subText}
        </span>
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(item);
          void speakItalian(item.audioText, 0.88, startSpeechSession()).catch(() => {});
        }}
        aria-label={`Play sound for ${item.italianLabel}`}
        className="mt-1 flex h-6 w-full items-center justify-center gap-1 rounded-lg border border-white/10 bg-white/5 text-[10px] font-bold text-ink-2 hover:border-neon/40 hover:text-neon"
      >
        <Volume2 size={11} />
        <span className="truncate">{item.italianLabel}</span>
      </button>
    </div>
  );
}
