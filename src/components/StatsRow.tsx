import type { LucideIcon } from 'lucide-react';
import { GlassCard, type Tone } from './ui';

const ICON_COLOR: Record<Tone, string> = {
  emerald: 'text-neon',
  cyan: 'text-cyan',
  violet: 'text-violet',
  pink: 'text-pink',
  gold: 'text-gold',
  blue: 'text-blue',
};

export function StatsRow({ items }: { items: { icon: LucideIcon; tone: Tone; value: string | number; label: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {items.map((s) => (
        <GlassCard key={s.label} className="flex flex-col items-center py-3 text-center">
          <s.icon size={22} className={ICON_COLOR[s.tone]} aria-hidden />
          <span className="mt-1 text-xl font-bold">{s.value}</span>
          <span className="bn text-xs text-ink-2">{s.label}</span>
        </GlassCard>
      ))}
    </div>
  );
}
