import type { LevelId } from '../content/types';
import { cx } from './ui';

/**
 * Flowing Italian tricolor ribbon wave (Green, White, Red) used on the Hero banners
 * in the approved Home, Courses, and Profile reference designs.
 */
export function ItalianRibbonWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 90"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cx('pointer-events-none select-none', className)}
    >
      <path
        d="M0 88 C135 86 245 36 420 14 L420 42 C255 60 145 90 0 90 Z"
        fill="#009246"
      />
      <path
        d="M40 90 C165 82 268 42 420 26 L420 56 C272 68 175 90 40 90 Z"
        fill="#F5FAFF"
      />
      <path
        d="M95 90 C205 82 295 54 420 42 L420 90 L95 90 Z"
        fill="#CE2B37"
      />
    </svg>
  );
}

const DIAMOND_PALETTE: Record<
  LevelId,
  {
    topStart: string;
    topEnd: string;
    midFill: string;
    botFill: string;
    stroke: string;
    glow: string;
  }
> = {
  A1: {
    topStart: '#00F5A0',
    topEnd: '#00B87C',
    midFill: 'rgba(0, 215, 140, 0.55)',
    botFill: 'rgba(0, 175, 115, 0.32)',
    stroke: '#6BFFCA',
    glow: 'drop-shadow(0 0 14px rgba(0, 245, 160, 0.55))',
  },
  A2: {
    topStart: '#27DFFF',
    topEnd: '#0088FF',
    midFill: 'rgba(39, 223, 255, 0.5)',
    botFill: 'rgba(0, 136, 255, 0.28)',
    stroke: '#8CEEFF',
    glow: 'drop-shadow(0 0 14px rgba(39, 223, 255, 0.52))',
  },
  B1: {
    topStart: '#C084FC',
    topEnd: '#7E22CE',
    midFill: 'rgba(168, 85, 247, 0.52)',
    botFill: 'rgba(126, 34, 206, 0.3)',
    stroke: '#E9D5FF',
    glow: 'drop-shadow(0 0 14px rgba(168, 85, 247, 0.52))',
  },
  B2: {
    topStart: '#FFE066',
    topEnd: '#D97706',
    midFill: 'rgba(255, 209, 102, 0.52)',
    botFill: 'rgba(217, 119, 6, 0.3)',
    stroke: '#FFF3B0',
    glow: 'drop-shadow(0 0 14px rgba(255, 209, 102, 0.52))',
  },
};

/**
 * 3D layered geometric diamond level badge matching the Courses Screen visual reference.
 */
export function LevelDiamondBadge({
  level,
  className,
}: {
  level: LevelId;
  className?: string;
}) {
  const p = DIAMOND_PALETTE[level];
  const gradId = `diamond-grad-${level}`;

  return (
    <div
      className={cx(
        'relative flex h-24 w-24 sm:h-28 sm:w-28 shrink-0 items-center justify-center select-none',
        className,
      )}
      style={{ filter: p.glow }}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={p.topStart} />
            <stop offset="100%" stopColor={p.topEnd} />
          </linearGradient>
        </defs>

        {/* Bottom layer */}
        <path
          d="M60 36 L106 68 Q112 72 106 76 L66 104 Q60 108 54 104 L14 76 Q8 72 14 68 Z"
          fill={p.botFill}
          stroke={p.stroke}
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />

        {/* Middle layer */}
        <path
          d="M60 24 L106 56 Q112 60 106 64 L66 92 Q60 96 54 92 L14 64 Q8 60 14 56 Z"
          fill={p.midFill}
          stroke={p.stroke}
          strokeOpacity="0.65"
          strokeWidth="1.6"
        />

        {/* Top primary diamond face */}
        <path
          d="M60 12 L106 44 Q112 48 106 52 L66 80 Q60 84 54 80 L14 52 Q8 48 14 44 Z"
          fill={`url(#${gradId})`}
          stroke={p.stroke}
          strokeWidth="2"
        />

        {/* Inner subtle highlight rim */}
        <path
          d="M60 17 L99 45 Q103 48 99 51 L64 75 Q60 78 56 75 L21 51 Q17 48 21 45 Z"
          fill="none"
          stroke="#FFFFFF"
          strokeOpacity="0.28"
          strokeWidth="1.2"
        />
      </svg>

      <span className="pointer-events-none absolute inset-0 -translate-y-2.5 flex items-center justify-center text-[1.65rem] sm:text-[1.85rem] font-extrabold tracking-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]">
        {level}
      </span>
    </div>
  );
}
