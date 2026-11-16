import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

export function cx(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}

export function GlassCard({
  children,
  className,
  neon = false,
}: {
  children: ReactNode;
  className?: string;
  neon?: boolean;
}) {
  return <div className={cx('glass', neon && 'glass-neon', className)}>{children}</div>;
}

type Variant = 'primary' | 'secondary' | 'ghost';

export function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const styles: Record<Variant, string> = {
    primary: 'bg-grad-primary text-navy-950 glow-neon',
    secondary: 'bg-grad-secondary text-navy-950',
    ghost: 'glass text-ink hover:border-white/25',
  };
  return (
    <button
      type="button"
      className={cx(
        'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[1.05rem] font-extrabold transition active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none',
        styles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  const pct = Math.round(Math.min(1, Math.max(0, value)) * 100);
  return (
    <div
      className={cx('h-2 w-full overflow-hidden rounded-full bg-white/10', className)}
      role="progressbar"
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="bg-grad-progress h-full rounded-full transition-[width] duration-500" style={{ width: `${pct}%` }} />
    </div>
  );
}

export function ProgressRing({ value, size = 112, children }: { value: number; size?: number; children?: ReactNode }) {
  const stroke = 10;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.min(1, Math.max(0, value));
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00C987" />
            <stop offset="1" stopColor="#55FFD1" />
          </linearGradient>
        </defs>
        <circle cx={size / 2} cy={size / 2} r={r} stroke="rgba(255,255,255,0.1)" strokeWidth={stroke} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          stroke="url(#ring)"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 0.6s ease', filter: 'drop-shadow(0 0 6px rgba(0,245,160,0.55))' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">{children}</div>
    </div>
  );
}

const TONES = {
  emerald: 'text-neon bg-neon/10 border-neon/25',
  cyan: 'text-cyan bg-cyan/10 border-cyan/25',
  violet: 'text-violet bg-violet/10 border-violet/25',
  pink: 'text-pink bg-pink/10 border-pink/25',
  gold: 'text-gold bg-gold/10 border-gold/25',
  blue: 'text-blue bg-blue/10 border-blue/25',
} as const;
export type Tone = keyof typeof TONES;

export function IconTile({ icon: Icon, tone = 'emerald', size = 'md' }: { icon: LucideIcon; tone?: Tone; size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: 'h-9 w-9', md: 'h-11 w-11', lg: 'h-14 w-14' }[size];
  const iconSize = { sm: 18, md: 22, lg: 28 }[size];
  return (
    <span className={cx('inline-flex shrink-0 items-center justify-center rounded-2xl border', dims, TONES[tone])}>
      <Icon size={iconSize} strokeWidth={1.8} aria-hidden />
    </span>
  );
}

export function Pill({ children, active, onClick }: { children: ReactNode; active?: boolean; onClick?: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cx(
        'min-h-10 shrink-0 rounded-full border px-4 text-[0.95rem] font-bold transition',
        active ? 'bg-grad-primary border-transparent text-navy-950 glow-neon' : 'border-white/15 bg-white/5 text-ink-2 hover:text-ink',
      )}
    >
      {children}
    </button>
  );
}

export function ScreenTitle({ title, subtitle, right }: { title: string; subtitle?: string; right?: ReactNode }) {
  return (
    <header className="mb-5 flex items-start justify-between gap-4">
      <div>
        <h1 className="text-[2.3rem] leading-tight">{title}</h1>
        {subtitle && <p className="bn mt-1 text-lg font-semibold text-ink-2">{subtitle}</p>}
      </div>
      {right}
    </header>
  );
}
