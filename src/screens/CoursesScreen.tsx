import { CheckCircle2, Lock, Play } from 'lucide-react';
import type { LevelId } from '../content/types';
import { LEVELS, LEVEL_ORDER } from '../content/courses';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { getCurrentLevel, isLevelUnlocked } from '../state/progress';
import { getCourseOverview } from '../lib/courseOverview';
import { GlassCard, ProgressBar, cx } from '../components/ui';
import { ItalianRibbonWave, LevelDiamondBadge } from '../components/BrandDecor';
import { A1AcademyHubScreen } from './academy/A1AcademyHubScreen';
import { LevelAcademyHubScreen } from './academy/LevelAcademyHubScreen';

export function CoursesScreen() {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const activeLevel = getCurrentLevel(state);

  return (
    <div className="animate-rise space-y-4">
      <header
        className="relative overflow-hidden rounded-3xl border border-neon/35 p-5 sm:p-6 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.7)]"
        style={{
          background:
            'linear-gradient(110deg, rgba(4, 32, 28, 0.96) 0%, rgba(6, 42, 37, 0.82) 52%, rgba(6, 35, 31, 0.18) 100%), url(./img/colosseum.webp) right center / cover no-repeat',
        }}
      >
        <div className="relative z-10 pb-2">
          <h1 className="text-[2.2rem] leading-tight font-extrabold text-white">{t('courses')}</h1>
          <p className="bn mt-1.5 max-w-[15.5rem] text-base sm:text-lg leading-snug font-semibold text-ink/95">
            {t('coursesSub')}
          </p>
        </div>
        <ItalianRibbonWave className="absolute right-0 bottom-0 h-14 w-[78%]" />
      </header>

      <div className="space-y-3.5">
        {LEVELS.map((level, i) => {
          const unlocked = isLevelUnlocked(state, level.id);
          const isActive = activeLevel === level.id;
          const overview = getCourseOverview(state, level.id);

          return (
            <div key={level.id} className="relative">
              <button
                type="button"
                onClick={() => {
                  if (unlocked) {
                    dispatch({ type: 'setCurrentLevel', level: level.id });
                  }
                  navigate(`/level/${level.id}`);
                }}
                className="block w-full text-left"
              >
                <GlassCard
                  neon={unlocked || isActive}
                  className={cx(
                    'flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 transition hover:border-neon/50 active:scale-[0.99]',
                    !unlocked && 'opacity-95',
                  )}
                >
                  <LevelDiamondBadge level={level.id} />

                  <div className="h-24 w-px shrink-0 bg-white/10" aria-hidden="true" />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="text-[1.75rem] sm:text-[1.9rem] leading-tight font-extrabold text-white">
                        {level.id}{' '}
                        <span className="bn text-[1.15rem] sm:text-[1.25rem] font-extrabold text-ink">
                          {tr(level.name)}
                        </span>
                      </h2>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {isActive && (
                          <span className="inline-flex items-center gap-1 rounded-full border border-neon/50 bg-neon/15 px-2.5 py-0.5 text-[11px] font-extrabold text-neon">
                            <CheckCircle2 size={12} /> {t('activeLabel')}
                          </span>
                        )}
                        {!unlocked && <Lock size={20} className="mt-1 text-ink-2" aria-label="locked" />}
                      </div>
                    </div>

                    <p className="bn mt-1 text-[0.92rem] sm:text-[0.98rem] leading-snug font-medium text-ink-2">
                      {tr(level.description)}
                    </p>

                    {unlocked ? (
                      <div className="mt-2.5 flex items-end gap-3">
                        <div className="min-w-0 flex-1">
                          <p className="bn text-sm font-bold text-ink tabular-nums">
                            {`${level.id} ${tr({ bn: 'পাথ', en: 'Path', it: 'Percorso' })} ${overview.completedModules}/${overview.totalModules} • ${overview.percentage}%`}
                          </p>
                          <ProgressBar value={overview.percentage / 100} className="mt-1.5 h-2.5" />
                        </div>
                        <span className="bg-grad-primary glow-neon flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy-950">
                          <Play size={18} fill="currentColor" className="translate-x-[1px]" />
                        </span>
                      </div>
                    ) : (
                      <div className="mt-2.5 flex flex-wrap items-center gap-2">
                        <p className="bn inline-flex items-center gap-1.5 rounded-full border border-gold/65 bg-gold/10 px-3.5 py-1 text-xs sm:text-sm font-bold text-gold shadow-[0_0_14px_-4px_rgba(255,209,102,0.35)]">
                          <Lock size={14} className="shrink-0 text-gold" />
                          <span>{t('unlockAfter', { level: LEVEL_ORDER[i - 1] ?? '' })}</span>
                        </p>
                      </div>
                    )}
                  </div>
                </GlassCard>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** Level detail: opens the Connected Vertical Learning Path for the selected CEFR Academy (A1–B2). */
export function LevelScreen({ id }: { id: LevelId }) {
  if (id === 'A1') {
    return <A1AcademyHubScreen />;
  }
  return <LevelAcademyHubScreen levelId={id} />;
}
