import { BookOpen, CalendarCheck, ChevronRight, Circle, CheckCircle2, Flame, Headphones, Layers, RotateCcw, Sparkles, Star, Target, Trophy, type LucideIcon } from 'lucide-react';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { badges, minutesToday, streak, type TaskKind } from '../state/progress';
import { currentLesson, dailyPlan } from '../state/plan';
import { GlassCard, IconTile, ProgressRing, cx, type Tone } from '../components/ui';
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

  return (
    <div className="animate-rise space-y-4">
      <header className="flex items-center justify-between lg:hidden">
        <div>
          <p className="text-2xl font-bold">
            Italian<span className="text-grad-primary">Pro</span>
          </p>
          <p className="text-xs text-ink-3">{t('tagline')}</p>
        </div>
        <span className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-ink-2 uppercase">{state.settings.explainLang}</span>
      </header>

      <section
        className="relative overflow-hidden rounded-3xl border border-white/10 p-5"
        style={{ background: 'linear-gradient(120deg, rgba(6,47,43,0.95) 0%, rgba(11,27,42,0.75) 55%, rgba(11,27,42,0.2) 100%), url(./img/colosseum.webp) right center / cover no-repeat' }}
      >
        <h1 className="text-3xl font-bold">Buongiorno! 👋</h1>
        <p className="bn mt-1 max-w-[16rem] text-ink-2">{t('greetingSub', { n: goal })}</p>
        {ref && (
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/60 px-3 py-1.5 text-sm">
            <BookOpen size={16} className="text-neon" /> {ref.level.id} · {tr(ref.level.name)}
          </span>
        )}
      </section>

      <GlassCard neon className="flex items-center gap-5 p-5">
        <ProgressRing value={minutes / goal}>
          <span className="text-xl font-bold">
            {Math.min(minutes, 999)} / {goal}
          </span>
          <span className="text-xs text-ink-2">{t('minutes')}</span>
        </ProgressRing>
        <div>
          <p className="flex items-center gap-2 text-lg font-semibold">
            <Target size={20} className="text-gold" /> {t('dailyGoal')}
          </p>
          <p className="bn text-ink-2">
            {minutes >= goal ? t('goalReached') : `${goal} ${t('minutes')}`}
          </p>
        </div>
      </GlassCard>

      <StatsRow
        items={[
          { icon: Flame, tone: 'pink', value: streak(state), label: t('streak') },
          { icon: Star, tone: 'gold', value: state.xp.toLocaleString(), label: 'XP' },
          { icon: Trophy, tone: 'gold', value: badges(state).filter((b) => b.earned).length, label: t('badges') },
        ]}
      />

      {ref && (
        <GlassCard className="p-4">
          <h2 className="mb-3 flex items-center gap-2 font-semibold">
            <CalendarCheck size={18} className="text-neon" /> {t('continueLearning')}
          </h2>
          <button type="button" onClick={() => navigate(`/lesson/${ref.lesson.id}`)} className="flex w-full items-center gap-3 text-left">
            <img src="./img/colosseum.webp" alt="" className="h-16 w-20 shrink-0 rounded-xl object-cover" />
            <span className="min-w-0 flex-1">
              <span className="block text-xs text-ink-3">
                {ref.level.id} · {t('unit')} {ref.unit.number} · {t('lesson')} {ref.lesson.number}
              </span>
              <span className="block font-semibold">{ref.lesson.title}</span>
              <span className="bn block truncate text-sm text-ink-2">{tr(ref.lesson.subtitle)}</span>
            </span>
            <span className="bg-grad-primary glow-neon flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-navy-950">
              <ChevronRight size={22} />
            </span>
          </button>
        </GlassCard>
      )}

      <GlassCard className="p-4">
        <h2 className="mb-2 flex items-center gap-2 font-semibold">
          <CalendarCheck size={18} className="text-neon" /> {t('todaysPlan')}
        </h2>
        <ul className="divide-y divide-white/5">
          {plan.map((item) => {
            const meta = PLAN_ICONS[item.task];
            return (
              <li key={item.task}>
                <button type="button" onClick={() => navigate(item.route)} className="flex min-h-14 w-full items-center gap-3 py-2 text-left">
                  <IconTile icon={meta.icon} tone={meta.tone} size="sm" />
                  <span className="min-w-0 flex-1">
                    <span className={cx('block font-medium', item.done && 'text-ink-2 line-through decoration-ink-3')}>{tr(item.title)}</span>
                    <span className="bn block truncate text-xs text-ink-3">{tr(item.detail)}</span>
                  </span>
                  <span className="text-sm text-ink-2">
                    {item.minutes} {t('minutes')}
                  </span>
                  {item.done ? <CheckCircle2 size={22} className="text-neon" aria-label={t('completed')} /> : <Circle size={22} className="text-ink-3" />}
                </button>
              </li>
            );
          })}
        </ul>
      </GlassCard>

      <button
        type="button"
        onClick={() => navigate('/challenge')}
        className="relative flex w-full items-center gap-4 overflow-hidden rounded-3xl border border-pink/30 p-5 text-left"
        style={{ background: 'linear-gradient(120deg, rgba(168,85,247,0.35), rgba(255,79,216,0.25) 60%, rgba(255,209,102,0.15))' }}
      >
        <IconTile icon={Sparkles} tone="gold" size="lg" />
        <span className="flex-1">
          <span className="block text-lg font-semibold">{t('dailyChallenge')}</span>
          <span className="bn block text-sm text-ink-2">{challengeDone ? t('challengeDone') : t('challengeSub')}</span>
        </span>
        <span className="bg-grad-premium rounded-full px-3 py-1 text-sm font-bold text-white">+50 XP</span>
      </button>
    </div>
  );
}
