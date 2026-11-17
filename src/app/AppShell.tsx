import type { ReactNode } from 'react';
import { BookOpen, Home, Settings, Target, User, type LucideIcon } from 'lucide-react';
import { useRouter } from './router';
import { useI18n, type StringKey } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { cx } from '../components/ui';
import { BrandHeader, BrandLogoMark, BrandWordmark } from '../components/BrandLogo';

const TABS: { path: string; label: StringKey; icon: LucideIcon; match: string[] }[] = [
  { path: '/', label: 'home', icon: Home, match: ['/'] },
  { path: '/courses', label: 'courses', icon: BookOpen, match: ['/courses', '/level', '/academy'] },
  { path: '/practice', label: 'practice', icon: Target, match: ['/practice', '/grammar'] },
  { path: '/profile', label: 'profile', icon: User, match: ['/profile'] },
];

const TOP_LEVEL_BRAND_PATHS = new Set(['/', '/courses', '/practice', '/profile']);

function isActive(path: string, match: string[]): boolean {
  return match.some((m) => (m === '/' ? path === '/' : path.startsWith(m)));
}

/** Bottom navigation on phones, side rail on wide screens. */
export function AppShell({ children, hideNav = false }: { children: ReactNode; hideNav?: boolean }) {
  const { route, navigate } = useRouter();
  const { t } = useI18n();
  const { persisted } = useProgress();
  const showTopBrandBar = !hideNav && TOP_LEVEL_BRAND_PATHS.has(route.path);

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl">
      {!hideNav && (
        <nav
          className="pt-safe sticky top-0 hidden h-dvh w-64 shrink-0 flex-col gap-1.5 border-r border-neon/20 bg-[#041917]/80 px-4 py-6 backdrop-blur-xl lg:flex"
          aria-label="Main"
        >
          <div className="mb-6 flex items-center gap-3 px-2">
            <BrandLogoMark size="sm" />
            <BrandWordmark size="sm" showTagline />
          </div>
          {TABS.map((tab) => {
            const active = isActive(route.path, tab.match);
            return (
              <button
                key={tab.path}
                type="button"
                onClick={() => navigate(tab.path)}
                aria-current={active ? 'page' : undefined}
                className={cx(
                  'flex min-h-11 items-center gap-3 rounded-xl px-3.5 text-left font-bold transition',
                  active
                    ? 'bg-neon/15 text-neon glass-neon border border-neon/45'
                    : 'text-ink-2 hover:bg-white/5 hover:text-ink',
                )}
              >
                <tab.icon size={20} strokeWidth={1.9} />
                {t(tab.label)}
              </button>
            );
          })}
        </nav>
      )}

      <main className={cx('pt-safe min-w-0 flex-1 px-3.5 sm:px-6 lg:px-10', hideNav ? 'pb-10' : 'pb-28 lg:pb-10')}>
        {!persisted && (
          <p role="alert" className="mt-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold">
            {t('storageWarning')}
          </p>
        )}
        <div className="mx-auto w-full max-w-3xl pt-3.5 sm:pt-5">
          {showTopBrandBar && (
            <BrandHeader
              rightSlot={
                route.path === '/profile' ? (
                  <button
                    type="button"
                    onClick={() => navigate('/about')}
                    aria-label={t('about')}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neon/40 bg-[#072924]/85 text-ink shadow-[0_0_16px_-6px_rgba(0,245,160,0.45)] transition hover:border-neon/70 active:scale-[0.98]"
                  >
                    <Settings size={19} className="text-ink" />
                  </button>
                ) : undefined
              }
            />
          )}
          {children}
        </div>
      </main>

      {!hideNav && (
        <nav
          className="pb-safe fixed inset-x-0 bottom-0 z-20 border-t border-neon/20 bg-[#031917]/92 shadow-[0_-8px_28px_rgba(0,0,0,0.65)] backdrop-blur-xl lg:hidden"
          aria-label="Main"
        >
          <div className="mx-auto flex max-w-lg items-center justify-around px-1.5 pt-2 pb-2">
            {TABS.map((tab) => {
              const active = isActive(route.path, tab.match);
              return (
                <button
                  key={tab.path}
                  type="button"
                  onClick={() => navigate(tab.path)}
                  aria-current={active ? 'page' : undefined}
                  className="flex min-w-12 flex-1 flex-col items-center gap-1 text-[0.75rem] sm:text-xs font-extrabold"
                >
                  <span
                    className={cx(
                      'flex h-8 w-13 sm:w-14 items-center justify-center rounded-full transition-all duration-200',
                      active
                        ? 'border border-neon/45 bg-gradient-to-b from-neon/25 to-emerald/15 text-neon shadow-[0_0_20px_-2px_rgba(0,245,160,0.65)]'
                        : 'text-ink-2',
                    )}
                  >
                    <tab.icon size={20} strokeWidth={1.9} />
                  </span>
                  <span className={cx('truncate', active ? 'text-neon' : 'text-ink-2')}>{t(tab.label)}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
