import type { ReactNode } from 'react';
import { BookOpen, Home, Target, Trophy, User, type LucideIcon } from 'lucide-react';
import { useRouter } from './router';
import { useI18n, type StringKey } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { cx } from '../components/ui';

const TABS: { path: string; label: StringKey; icon: LucideIcon; match: string[] }[] = [
  { path: '/', label: 'home', icon: Home, match: ['/'] },
  { path: '/courses', label: 'courses', icon: BookOpen, match: ['/courses', '/lesson', '/level'] },
  { path: '/practice', label: 'practice', icon: Target, match: ['/practice', '/grammar'] },
  { path: '/challenge', label: 'challenge', icon: Trophy, match: ['/challenge'] },
  { path: '/profile', label: 'profile', icon: User, match: ['/profile'] },
];

function isActive(path: string, match: string[]): boolean {
  return match.some((m) => (m === '/' ? path === '/' : path.startsWith(m)));
}

/** Bottom navigation on phones, side rail on wide screens. */
export function AppShell({ children, hideNav = false }: { children: ReactNode; hideNav?: boolean }) {
  const { route, navigate } = useRouter();
  const { t } = useI18n();
  const { persisted } = useProgress();

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl">
      {!hideNav && (
        <nav className="pt-safe sticky top-0 hidden h-dvh w-60 shrink-0 flex-col gap-1 border-r border-white/10 px-4 py-6 lg:flex" aria-label="Main">
          <div className="mb-6 px-3">
            <p className="text-xl font-bold">
              Italian<span className="text-grad-primary">Pro</span>
            </p>
            <p className="text-xs text-ink-3">{t('tagline')}</p>
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
                  'flex min-h-11 items-center gap-3 rounded-xl px-3 text-left font-medium transition',
                  active ? 'bg-neon/12 text-neon glass-neon border' : 'text-ink-2 hover:bg-white/5 hover:text-ink',
                )}
              >
                <tab.icon size={20} strokeWidth={1.8} />
                {t(tab.label)}
              </button>
            );
          })}
        </nav>
      )}

      <main className={cx('pt-safe min-w-0 flex-1 px-4 sm:px-6 lg:px-10', hideNav ? 'pb-10' : 'pb-28 lg:pb-10')}>
        {!persisted && (
          <p role="alert" className="mt-3 rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 text-sm text-gold">
            {t('storageWarning')}
          </p>
        )}
        <div className="mx-auto w-full max-w-3xl pt-5">{children}</div>
      </main>

      {!hideNav && (
        <nav
          className="pb-safe fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-navy-950/85 backdrop-blur-md lg:hidden"
          aria-label="Main"
        >
          <div className="mx-auto flex max-w-lg justify-around px-2 pt-2 pb-2">
            {TABS.map((tab) => {
              const active = isActive(route.path, tab.match);
              return (
                <button
                  key={tab.path}
                  type="button"
                  onClick={() => navigate(tab.path)}
                  aria-current={active ? 'page' : undefined}
                  className="flex min-w-14 flex-col items-center gap-1 text-xs font-bold"
                >
                  <span
                    className={cx(
                      'flex h-8 w-14 items-center justify-center rounded-full transition',
                      active ? 'bg-neon/15 text-neon shadow-[0_0_16px_-4px_rgba(0,245,160,0.7)]' : 'text-ink-2',
                    )}
                  >
                    <tab.icon size={20} strokeWidth={1.8} />
                  </span>
                  <span className={active ? 'text-neon' : 'text-ink-2'}>{t(tab.label)}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </div>
  );
}
