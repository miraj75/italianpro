import {
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Circle,
  Headphones,
  Layers,
  Play,
  RotateCcw,
  Target,
  type LucideIcon,
} from 'lucide-react';
import type { LevelId } from '../content/types';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { getCurrentLevel, minutesToday, type TaskKind } from '../state/progress';
import { dailyPlan } from '../state/plan';
import { getCourseOverview } from '../lib/courseOverview';
import { GlassCard, IconTile, ProgressBar, ProgressRing, cx, type Tone } from '../components/ui';
import { ItalianRibbonWave } from '../components/BrandDecor';

const PLAN_ICONS: Record<TaskKind, { icon: LucideIcon; tone: Tone }> = {
  lesson: { icon: BookOpen, tone: 'emerald' },
  listening: { icon: Headphones, tone: 'cyan' },
  vocab: { icon: Layers, tone: 'violet' },
  review: { icon: RotateCcw, tone: 'pink' },
};

const LEVEL_BADGE_STYLE: Record<LevelId, string> = {
  A1: 'border-neon/60 bg-neon/15 text-neon shadow-[0_0_16px_-4px_rgba(0,245,160,0.55)]',
  A2: 'border-cyan/60 bg-cyan/15 text-cyan shadow-[0_0_16px_-4px_rgba(39,223,255,0.55)]',
  B1: 'border-violet/60 bg-violet/15 text-violet shadow-[0_0_16px_-4px_rgba(168,85,247,0.55)]',
  B2: 'border-gold/60 bg-gold/15 text-gold shadow-[0_0_16px_-4px_rgba(255,209,102,0.55)]',
};

export function HomeScreen() {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const goal = state.settings.dailyGoalMinutes;
  const minutes = minutesToday(state);
  const activeLevel = getCurrentLevel(state);
  const overview = getCourseOverview(state, activeLevel);
  const plan = dailyPlan(state);

  const courseCounterText =
    overview.unitKind === 'modules'
      ? t('modulesProgress', { done: overview.completedModules, total: overview.totalModules })
      : t('lessonsProgress', { done: overview.completedModules, total: overview.totalModules });

  return (
    <div className="animate-rise space-y-4">
      {/* Hero Greeting Card — reflects only the learner's active CEFR course */}
      <section
        className="relative overflow-hidden rounded-3xl border border-neon/35 p-5 sm:p-6 shadow-[0_12px_32px_-12px_rgba(0,0,0,0.7)]"
        style={{
          background:
            'linear-gradient(112deg, rgba(4, 34, 30, 0.96) 0%, rgba(6, 42, 37, 0.82) 52%, rgba(6, 35, 31, 0.18) 100%), url(./img/colosseum.webp) right center / cover no-repeat',
        }}
      >
        <div className="relative z-10 pb-2">
          <h1 className="text-[2.1rem] sm:text-[2.3rem] leading-tight font-extrabold text-white">
            Buongiorno! 👋
          </h1>
          <p className="bn mt-1.5 max-w-[15.5rem] text-base sm:text-lg leading-snug font-semibold text-ink/95">
            {t('greetingSub', { n: goal })}
          </p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-neon/45 bg-[#04241f]/85 px-3.5 py-1.5 text-sm font-bold text-ink shadow-[0_0_16px_-4px_rgba(0,245,160,0.45)]">
            <BookOpen size={16} className="text-neon" />
            <span>
              {overview.levelId} · {tr(overview.levelName)}
            </span>
          </span>
        </div>
        <ItalianRibbonWave className="absolute right-0 bottom-0 h-14 w-[78%]" />
      </section>

      {/* Daily Goal Card */}
      <GlassCard neon className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5">
        <ProgressRing value={minutes / goal}>
          <span className="text-xl sm:text-2xl font-extrabold text-white tabular-nums">
            {Math.min(minutes, 999)} / {goal}
          </span>
          <span className="bn text-xs font-semibold text-ink-2">{t('minutes')}</span>
        </ProgressRing>

        <div className="h-16 w-px shrink-0 bg-white/15" aria-hidden="true" />

        <div className="min-w-0 flex-1">
          <p className="bn flex items-center gap-2 text-xl sm:text-2xl font-extrabold text-white">
            <Target size={22} className="shrink-0 text-gold drop-shadow-[0_0_8px_rgba(255,209,102,0.55)]" />
            <span>{t('dailyGoal')}</span>
          </p>
          <p className="bn mt-1 text-base sm:text-lg font-semibold text-ink-2">
            {minutes >= goal ? t('goalReached') : `${goal} ${t('minutes')}`}
          </p>
        </div>
      </GlassCard>

      {/* Continue Learning — single direct card for the active CEFR course & current module */}
      <GlassCard neon className="p-4 sm:p-5 space-y-3.5">
        <div className="flex items-center justify-between gap-2">
          <h2 className="bn flex items-center gap-2 text-xl font-extrabold text-white">
            <CalendarCheck size={20} className="text-neon" />
            <span>{t('continueLearning')}</span>
          </h2>
          <span className="text-xs font-extrabold text-neon tabular-nums">{overview.percentage}%</span>
        </div>

        <button
          type="button"
          onClick={() => navigate(overview.continueRoute)}
          className="group block w-full rounded-2xl border border-neon/25 bg-[#04211c]/85 p-4 text-left transition hover:border-neon/65 active:scale-[0.99]"
        >
          {/* Active CEFR Course + Overall Progress */}
          <div className="flex items-center gap-3.5">
            <span
              className={cx(
                'flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-2xl border text-center',
                LEVEL_BADGE_STYLE[overview.levelId],
              )}
            >
              <span className="text-lg leading-none font-extrabold tracking-tight">{overview.levelId}</span>
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-base sm:text-lg font-extrabold text-white">
                {overview.levelId} — <span className="bn">{tr(overview.levelName)}</span>
              </p>
              <p className="bn text-xs font-semibold text-ink-2 tabular-nums">{courseCounterText}</p>
            </div>
          </div>

          <ProgressBar value={overview.percentage / 100} className="mt-3 h-1.5" />

          {/* Current Active Module + Direct Continue Action */}
          <div className="mt-3.5 flex items-center justify-between gap-3 border-t border-white/10 pt-3.5">
            <div className="min-w-0 flex-1">
              <p className="bn text-xs font-bold text-cyan">
                {t('currentModuleLabel')}:{' '}
                <span className="text-white font-extrabold">{overview.nextTitle}</span>
              </p>
              <p className="mt-1 text-xs font-bold text-ink-2 tabular-nums">
                {t('progressLabel')}: {overview.nextProgressText}
              </p>
              <ProgressBar value={overview.nextProgressRatio} className="mt-1.5 h-1.5" />
            </div>

            <span className="bg-grad-primary glow-neon inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-extrabold text-navy-950 transition group-hover:brightness-105">
              <Play size={15} fill="currentColor" />
              <span className="bn">{t('continue')}</span>
            </span>
          </div>
        </button>
      </GlassCard>

      {/* Today's Learning Plan */}
      <GlassCard className="p-4 sm:p-5">
        <h2 className="bn mb-2 flex items-center gap-2 text-xl font-extrabold text-white">
          <CalendarCheck size={18} className="text-neon" /> {t('todaysPlan')}
        </h2>
        <ul className="divide-y divide-white/5">
          {plan.map((item) => {
            const meta = PLAN_ICONS[item.task];
            return (
              <li key={item.task}>
                <button
                  type="button"
                  onClick={() => navigate(item.route)}
                  className="flex min-h-14 w-full items-center gap-3 py-2 text-left"
                >
                  <IconTile icon={meta.icon} tone={meta.tone} size="sm" />
                  <span className="min-w-0 flex-1">
                    <span
                      className={cx(
                        'block text-[1.05rem] font-bold',
                        item.done && 'text-ink-2 line-through decoration-ink-3',
                      )}
                    >
                      {tr(item.title)}
                    </span>
                    <span className="bn block truncate text-xs text-ink-3">{tr(item.detail)}</span>
                  </span>
                  <span className="text-sm text-ink-2">
                    {item.minutes} {t('minutes')}
                  </span>
                  {item.done ? (
                    <CheckCircle2 size={22} className="text-neon" aria-label={t('completed')} />
                  ) : (
                    <Circle size={22} className="text-ink-3" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </GlassCard>
    </div>
  );
}
