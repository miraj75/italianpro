import {
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Circle,
  Flame,
  Headphones,
  Layers,
  Play,
  RotateCcw,
  Sparkles,
  Star,
  Target,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { badges, levelProgress, minutesToday, streak, type TaskKind } from '../state/progress';
import { currentLesson, dailyPlan } from '../state/plan';
import { GlassCard, IconTile, ProgressBar, ProgressRing, cx, type Tone } from '../components/ui';
import { ItalianRibbonWave } from '../components/BrandDecor';
import { StatsRow } from '../components/StatsRow';
import { dayKey } from '../lib/date';

const PLAN_ICONS: Record<TaskKind, { icon: LucideIcon; tone: Tone }> = {
  lesson: { icon: BookOpen, tone: 'emerald' },
  listening: { icon: Headphones, tone: 'cyan' },
  vocab: { icon: Layers, tone: 'violet' },
  review: { icon: RotateCcw, tone: 'pink' },
  challenge: { icon: Trophy, tone: 'gold' },
};

export function HomeScreen() {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const goal = state.settings.dailyGoalMinutes;
  const minutes = minutesToday(state);
  const ref = currentLesson(state);
  const plan = dailyPlan(state);
  const challengeDone = state.days[dayKey()]?.tasks.includes('challenge') ?? false;

  const currentLvlProgress = ref ? levelProgress(state, ref.level.id) : { done: 0, total: 1 };
  const lessonScore = ref ? state.lessons[ref.lesson.id]?.bestScore : undefined;
  const continuePct =
    lessonScore !== undefined
      ? Math.round(lessonScore * 100)
      : currentLvlProgress.total > 0
        ? Math.max(15, Math.round((currentLvlProgress.done / currentLvlProgress.total) * 100))
        : 20;

  return (
    <div className="animate-rise space-y-4">
      {/* Hero Greeting Card */}
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
          <p className="bn mt-1.5 max-w-[15rem] text-base sm:text-lg leading-snug font-semibold text-ink/95">
            {t('greetingSub', { n: goal })}
          </p>
          {ref && (
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-neon/45 bg-[#04241f]/85 px-3.5 py-1.5 text-sm font-bold text-ink shadow-[0_0_16px_-4px_rgba(0,245,160,0.45)]">
              <BookOpen size={16} className="text-neon" />
              <span>
                {ref.level.id} · {tr(ref.level.name)}
              </span>
            </span>
          )}
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

      {/* Streak, XP, Badges */}
      <StatsRow
        items={[
          { icon: Flame, tone: 'pink', value: streak(state), label: t('streak') },
          { icon: Star, tone: 'gold', value: state.xp.toLocaleString(), label: 'XP' },
          { icon: Trophy, tone: 'gold', value: badges(state).filter((b) => b.earned).length, label: t('badges') },
        ]}
      />

      {/* Continue Learning Card */}
      {ref && (
        <GlassCard className="border-neon/30 p-4 sm:p-5">
          <h2 className="bn mb-3.5 flex items-center gap-2 text-xl font-extrabold text-white">
            <CalendarCheck size={20} className="text-neon" />
            <span>{t('continueLearning')}</span>
          </h2>
          <button
            type="button"
            onClick={() => navigate(`/lesson/${ref.lesson.id}`)}
            className="flex w-full items-center gap-3.5 text-left group"
          >
            <img
              src="./img/colosseum.webp"
              alt=""
              className="h-20 w-20 shrink-0 rounded-2xl border border-white/15 object-cover shadow-md"
            />
            <span className="min-w-0 flex-1">
              <span className="bn block text-xs sm:text-sm font-semibold text-ink-2">
                {ref.level.id} · {t('unit')} {ref.unit.number} · {t('lesson')} {ref.lesson.number}
              </span>
              <span className="mt-0.5 block text-lg sm:text-xl leading-snug font-extrabold text-white">
                {ref.lesson.title}
              </span>
              <span className="mt-2 flex items-center gap-2.5">
                <ProgressBar value={continuePct / 100} className="h-2.5 flex-1" />
                <span className="text-xs font-extrabold text-ink-2 tabular-nums">{continuePct}%</span>
              </span>
            </span>
            <span className="bg-grad-primary glow-neon flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy-950 transition group-hover:scale-105">
              <Play size={18} fill="currentColor" className="translate-x-[1px]" />
            </span>
          </button>
        </GlassCard>
      )}

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

      {/* Daily Challenge Banner */}
      <button
        type="button"
        onClick={() => navigate('/challenge')}
        className="relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-pink/30 p-5 text-left"
        style={{
          background:
            'linear-gradient(120deg, rgba(168,85,247,0.35), rgba(255,79,216,0.25) 60%, rgba(255,209,102,0.15))',
        }}
      >
        <IconTile icon={Sparkles} tone="gold" size="lg" />
        <span className="flex-1">
          <span className="block text-xl font-extrabold">{t('dailyChallenge')}</span>
          <span className="bn block text-sm text-ink-2">
            {challengeDone ? t('challengeDone') : t('challengeSub')}
          </span>
        </span>
        <span className="bg-grad-premium rounded-full px-3 py-1 text-sm font-bold text-white">+50 XP</span>
      </button>
    </div>
  );
}
