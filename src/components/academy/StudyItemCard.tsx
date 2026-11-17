import { CheckCircle2, Volume2 } from 'lucide-react';
import type { Tr } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { cx } from '../ui';

export interface StudyConjugationRow {
  pronoun: string;
  form: string;
}

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
  detailLayout?: 'rich';
  badge?: Tr;
  conjugationRows?: StudyConjugationRow[];
  secondaryExampleIt?: string;
  secondaryExampleTrBn?: string;
  secondaryExampleTrEn?: string;
  secondaryExampleTrIt?: string;
  crossLinkNote?: Tr;
}

export interface StudyItemCardProps {
  item: StudyListItem;
  studied: boolean;
  onSelect: (item: StudyListItem) => void;
}

/**
 * Compact, self-contained Study card tile for A1 modules.
 * - Default mode preserves the exact compact layout used by Alphabet & Numbers.
 * - Rich mode ('rich') supports Verbs conjugation tables, examples, categories, and cross-links.
 * Tapping anywhere on the card or its audio button marks it studied and plays pronunciation.
 */
export function StudyItemCard({ item, studied, onSelect }: StudyItemCardProps) {
  const { lang, tr } = useI18n();

  const pronunciation =
    lang === 'bn'
      ? item.phoneticBn
      : lang === 'it'
        ? (item.phoneticIt ?? item.phoneticEn)
        : item.phoneticEn;

  if (item.detailLayout === 'rich') {
    const meaning =
      lang === 'bn'
        ? (item.meaningBn ?? '')
        : lang === 'it'
          ? (item.meaningIt ?? item.meaningEn ?? '')
          : (item.meaningEn ?? '');
    const exampleTr =
      lang === 'bn'
        ? item.exampleTrBn
        : lang === 'it'
          ? (item.exampleTrIt ?? item.exampleTrEn)
          : item.exampleTrEn;
    const secondaryExampleTr =
      lang === 'bn'
        ? (item.secondaryExampleTrBn ?? '')
        : lang === 'it'
          ? (item.secondaryExampleTrIt ?? item.secondaryExampleTrEn ?? '')
          : (item.secondaryExampleTrEn ?? '');

    return (
      <div
        onClick={() => onSelect(item)}
        className={cx(
          'relative flex cursor-pointer flex-col justify-between rounded-2xl border p-3.5 sm:p-4 transition active:scale-[0.99]',
          studied
            ? 'border-neon/55 bg-[#08312a]/90 shadow-[0_0_16px_-8px_rgba(0,245,160,0.45)]'
            : 'border-white/12 bg-white/5 hover:border-neon/35',
        )}
      >
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <span
              className={cx(
                'inline-flex items-center gap-1 text-[11px] font-bold shrink-0',
                studied ? 'text-neon' : 'text-ink-3',
              )}
            >
              {studied ? (
                <>
                  <CheckCircle2 size={14} className="shrink-0 text-neon" aria-label="studied" />
                  <span className="bn">{tr({ bn: 'সম্পন্ন', en: 'Studied', it: 'Studiato' })}</span>
                </>
              ) : (
                <span
                  className="inline-block h-3.5 w-3.5 rounded-full border border-white/25"
                  aria-hidden="true"
                />
              )}
            </span>
            {item.badge && (
              <span className="bn truncate rounded-md border border-cyan/30 bg-cyan/10 px-2 py-0.5 text-[10px] font-extrabold text-cyan">
                {tr(item.badge)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(item);
            }}
            aria-label={tr({
              bn: `${item.italianLabel} শুনুন`,
              en: `Play ${item.italianLabel}`,
              it: `Ascolta ${item.italianLabel}`,
            })}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-grad-primary text-navy-950 transition hover:brightness-110 active:scale-95"
          >
            <Volume2 size={15} />
          </button>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          data-testid={`study-item-${item.id}`}
          aria-pressed={studied}
          aria-label={`${item.primary} ${meaning}`}
          className="flex w-full flex-1 flex-col items-start text-left space-y-2 focus:outline-none"
        >
          <div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
              <span className="text-lg sm:text-xl font-extrabold text-white">{item.primary}</span>
              {item.italianLabel && item.italianLabel !== item.primary && (
                <span className="text-xs font-bold text-cyan">{item.italianLabel}</span>
              )}
            </div>
            {meaning && <p className="bn mt-0.5 text-sm font-bold text-mint">{meaning}</p>}
            {pronunciation && (
              <p className="bn mt-0.5 text-xs font-semibold text-ink-3">/{pronunciation}/</p>
            )}
          </div>

          {item.conjugationRows && item.conjugationRows.length > 0 && (
            <div className="grid w-full grid-cols-2 sm:grid-cols-3 gap-1.5 rounded-xl border border-white/10 bg-black/25 p-2 text-xs">
              {item.conjugationRows.map((row) => (
                <div key={row.pronoun} className="truncate">
                  <span className="text-ink-3 font-semibold">{row.pronoun} </span>
                  <span className="text-white font-extrabold">{row.form}</span>
                </div>
              ))}
            </div>
          )}

          <div className="w-full space-y-1 rounded-xl border border-white/10 bg-white/4 px-2.5 py-2">
            <p className="text-xs sm:text-sm font-bold text-white leading-snug">{item.exampleIt}</p>
            <p className="bn text-[11px] sm:text-xs text-ink-2 leading-snug">{exampleTr}</p>
            {item.secondaryExampleIt && (
              <div className="pt-1 mt-1 border-t border-white/10">
                <p className="text-xs font-bold text-cyan leading-snug">{item.secondaryExampleIt}</p>
                {secondaryExampleTr && (
                  <p className="bn text-[11px] text-ink-3 leading-snug">{secondaryExampleTr}</p>
                )}
              </div>
            )}
          </div>

          {item.crossLinkNote && (
            <p className="bn text-[11px] font-semibold text-gold/90 leading-snug">
              {tr(item.crossLinkNote)}
            </p>
          )}
        </button>
      </div>
    );
  }

  const isAlphabet = Boolean(item.secondary);

  const subText = isAlphabet
    ? `${item.exampleIt} · ${
        lang === 'bn'
          ? item.exampleTrBn
          : lang === 'it'
            ? (item.exampleTrIt ?? item.exampleTrEn)
            : item.exampleTrEn
      }`
    : lang === 'bn'
      ? (item.meaningBn?.replace(/^সংখ্যা\s+/, '') ?? item.exampleIt)
      : lang === 'it'
        ? (item.meaningIt ?? item.exampleIt)
        : (item.meaningEn ?? item.exampleIt);

  return (
    <div
      onClick={() => onSelect(item)}
      className={cx(
        'relative flex cursor-pointer flex-col justify-between rounded-2xl border p-2.5 sm:p-3 transition active:scale-[0.99]',
        studied
          ? 'border-neon/55 bg-[#08312a]/90 shadow-[0_0_16px_-8px_rgba(0,245,160,0.45)]'
          : 'border-white/12 bg-white/5 hover:border-neon/35',
      )}
    >
      {/* Top bar: Studied status indicator + Audio button */}
      <div className="mb-1.5 flex items-center justify-between gap-2">
        <span
          className={cx(
            'inline-flex items-center gap-1 text-[10px] font-bold',
            studied ? 'text-neon' : 'text-ink-3',
          )}
        >
          {studied ? (
            <>
              <CheckCircle2 size={14} className="shrink-0 text-neon" aria-label="studied" />
              <span className="bn">{tr({ bn: 'সম্পন্ন', en: 'Studied', it: 'Studiato' })}</span>
            </>
          ) : (
            <span
              className="inline-block h-3.5 w-3.5 rounded-full border border-white/25"
              aria-hidden="true"
            />
          )}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          aria-label={tr({
            bn: `${item.italianLabel} শুনুন`,
            en: `Play ${item.italianLabel}`,
            it: `Ascolta ${item.italianLabel}`,
          })}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-grad-primary text-navy-950 transition hover:brightness-110 active:scale-95"
        >
          <Volume2 size={14} />
        </button>
      </div>

      {/* Main card content */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onSelect(item);
        }}
        data-testid={`study-item-${item.id}`}
        aria-pressed={studied}
        aria-label={`${item.primary}${item.secondary ? ` ${item.secondary}` : ''} ${item.italianLabel}`}
        className="flex w-full flex-1 flex-col items-start text-left focus:outline-none"
      >
        <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
          <span className="text-xl sm:text-2xl font-extrabold leading-none text-white tabular-nums">
            {item.primary}
            {item.secondary && (
              <span className="ml-1 text-base sm:text-lg font-bold text-mint">{item.secondary}</span>
            )}
          </span>
          <span
            className={cx(
              'font-extrabold text-cyan leading-tight',
              isAlphabet ? 'text-xs' : 'text-sm sm:text-base',
            )}
          >
            {isAlphabet ? `· ${item.italianLabel}` : item.italianLabel}
          </span>
        </div>

        <p className="bn mt-1.5 line-clamp-2 text-[11px] sm:text-xs font-semibold leading-snug text-mint/95">
          {pronunciation}
        </p>

        <p className="bn mt-1 line-clamp-2 text-[11px] font-medium leading-snug text-ink-2">
          {subText}
        </p>
      </button>
    </div>
  );
}
