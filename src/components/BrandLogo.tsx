import type { ReactNode } from 'react';
import { ChevronDown, Languages } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { cx } from './ui';

/**
 * Official ItalianPro brand logo asset provided in the design specification.
 * Preserved intact without redrawing, recreating, modifying, or distorting.
 */
export const OFFICIAL_LOGO_SRC = './img/italianpro-logo.jpg';

export function BrandLogoMark({
  size = 'md',
  className,
}: {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  const dims = {
    sm: 'h-10 w-10 rounded-xl',
    md: 'h-12 w-12 sm:h-13 sm:w-13 rounded-2xl',
    lg: 'h-20 w-20 rounded-3xl',
    xl: 'h-36 w-36 sm:h-40 sm:w-40 rounded-[2.2rem]',
  }[size];

  return (
    <span
      className={cx(
        'relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-neon/50 bg-[#052316] shadow-[0_0_20px_-4px_rgba(0,245,160,0.58)]',
        dims,
        className,
      )}
    >
      <img
        src={OFFICIAL_LOGO_SRC}
        alt="ItalianPro"
        className="h-full w-full object-contain select-none"
        draggable={false}
      />
    </span>
  );
}

export function BrandWordmark({
  size = 'md',
  showTagline = true,
  className,
}: {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}) {
  const { t } = useI18n();
  const titleCls = {
    sm: 'text-xl leading-none',
    md: 'text-[1.55rem] sm:text-[1.75rem] leading-none',
    lg: 'text-[2.6rem] sm:text-[3rem] leading-none',
  }[size];

  const subCls = {
    sm: 'text-[0.7rem] mt-0.5',
    md: 'text-xs sm:text-[0.82rem] mt-1',
    lg: 'text-base sm:text-lg mt-2',
  }[size];

  return (
    <div className={cx('min-w-0', className)}>
      <p className={cx('font-extrabold tracking-tight text-ink', titleCls)}>
        Italian<span className="text-lime-pro">Pro</span>
      </p>
      {showTagline && (
        <p className={cx('truncate font-medium text-ink-2', subCls)}>
          {t('tagline')}
        </p>
      )}
    </div>
  );
}

/**
 * Shared top brand header matching the approved Home, Practice Hub, Courses, and Profile references.
 */
export function BrandHeader({
  rightSlot,
  className,
}: {
  rightSlot?: ReactNode;
  className?: string;
}) {
  const { state, dispatch } = useProgress();
  const { t } = useI18n();
  const nextLang = state.settings.explainLang === 'bn' ? 'en' : 'bn';

  return (
    <header className={cx('mb-4 flex items-center justify-between gap-3', className)}>
      <div className="flex min-w-0 items-center gap-3">
        <BrandLogoMark size="md" />
        <BrandWordmark size="md" showTagline />
      </div>

      {rightSlot ?? (
        <button
          type="button"
          onClick={() => dispatch({ type: 'setExplainLang', lang: nextLang })}
          aria-label={t('explainLang')}
          className="inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border border-neon/40 bg-[#072924]/85 px-3.5 py-1.5 text-sm font-extrabold uppercase text-ink shadow-[0_0_16px_-6px_rgba(0,245,160,0.45)] transition hover:border-neon/70 active:scale-[0.98]"
        >
          <Languages size={16} className="text-neon" />
          <span>{state.settings.explainLang.toUpperCase()}</span>
          <ChevronDown size={14} className="text-ink-2" aria-hidden />
        </button>
      )}
    </header>
  );
}
