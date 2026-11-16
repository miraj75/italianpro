import type { LucideIcon } from 'lucide-react';
import { GlassCard, cx, type Tone } from './ui';

const ICON_COLOR: Record<Tone, string> = {
  emerald: 'text-neon drop-shadow-[0_0_8px_rgba(0,245,160,0.55)]',
  cyan: 'text-cyan drop-shadow-[0_0_8px_rgba(39,223,255,0.55)]',
  violet: 'text-violet drop-shadow-[0_0_8px_rgba(168,85,247,0.55)]',
  pink: 'text-pink drop-shadow-[0_0_8px_rgba(255,79,216,0.55)]',
  gold: 'text-gold drop-shadow-[0_0_8px_rgba(255,209,102,0.55)]',
  blue: 'text-blue drop-shadow-[0_0_8px_rgba(57,139,255,0.55)]',
};

export function StatsRow({
  items,
}: {
  items: { icon: LucideIcon; tone: Tone; value: string | number; label: string }[];
}) {
  return (
    <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
      {items.map((s) => (
        <GlassCard
          key={s.label}
          className="flex flex-col items-center justify-center border-neon/25 px-2 py-3.5 text-center"
        >
          <s.icon size={26} strokeWidth={2} className={cx(ICON_COLOR[s.tone])} aria-hidden />
          <span className="mt-1.5 text-2xl leading-none font-extrabold text-white tabular-nums">
            {s.value}
          </span>
          <span className="bn mt-1 text-xs sm:text-sm font-semibold text-ink-2">
            {s.label}
          </span>
        </GlassCard>
      ))}
    </div>
  );
}
