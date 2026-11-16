import { useState } from 'react';
import {
  Award,
  Bookmark,
  BookOpen,
  CalendarCheck,
  ChevronRight,
  Flame,
  Info,
  Languages,
  Layers,
  Minus,
  Pencil,
  Plus,
  Star,
  Target,
  Trash2,
  Trophy,
  type LucideIcon,
} from 'lucide-react';
import { LEVEL_ORDER } from '../content/courses';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { badges, isLevelUnlocked, levelProgress, streak } from '../state/progress';
import { GlassCard, ProgressBar, cx } from '../components/ui';
import { ItalianRibbonWave } from '../components/BrandDecor';
import { StatsRow } from '../components/StatsRow';

const BADGE_META: Record<string, { bn: string; en: string; icon: LucideIcon; tone: string }> = {
  'first-lesson': { bn: 'প্রথম পাঠ', en: 'First lesson', icon: BookOpen, tone: 'text-neon' },
  'perfect-quiz': { bn: '১০০% কুইজ', en: 'Perfect quiz', icon: Layers, tone: 'text-neon' },
  'streak-3': { bn: '৩ দিনের স্ট্রিক', en: '3-day streak', icon: Flame, tone: 'text-pink' },
  'xp-500': { bn: '৫০০ XP', en: '500 XP', icon: Star, tone: 'text-gold' },
  'unit-1': { bn: 'ইউনিট ১ সম্পন্ন', en: 'Unit 1 complete', icon: CalendarCheck, tone: 'text-neon' },
};

export function ProfileScreen() {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t, tr, lang } = useI18n();
  const [confirming, setConfirming] = useState(false);
  const [editingGoal, setEditingGoal] = useState(false);
  const current = [...LEVEL_ORDER].reverse().find((id) => isLevelUnlocked(state, id)) ?? 'A1';
  const earned = badges(state);
  const goal = state.settings.dailyGoalMinutes;

  return (
    <div className="animate-rise space-y-4">
      {/* Hero Profile Header with Colosseum Backdrop & Italian Ribbon Wave */}
      <section className="relative overflow-hidden rounded-3xl border border-neon/25 bg-gradient-to-b from-[#062b26]/90 to-[#041917]/95 px-4 pt-5 pb-5 text-center shadow-[0_12px_32px_-12px_rgba(0,0,0,0.65)]">
        <div
          className="pointer-events-none absolute top-0 right-0 h-36 w-56 opacity-75 photo-fade"
          style={{
            background: 'url(./img/colosseum.webp) right top / cover no-repeat',
          }}
          aria-hidden="true"
        />
        <ItalianRibbonWave className="absolute top-20 right-0 h-12 w-56 opacity-95" />

        <div className="relative z-10 flex flex-col items-center">
          <div className="relative">
            <img
              src="./img/colosseum.webp"
              alt=""
              className="h-28 w-28 rounded-full border-[3px] border-neon object-cover shadow-[0_0_28px_-4px_rgba(0,245,160,0.75)]"
            />
            <span
              className="absolute right-0 bottom-0 flex h-8 w-8 items-center justify-center rounded-full border border-neon bg-[#052621] text-neon shadow-[0_0_12px_rgba(0,245,160,0.6)]"
              aria-hidden="true"
            >
              <Pencil size={14} />
            </span>
          </div>
          <h1 className="bn mt-3 text-2xl leading-tight font-extrabold text-white">{t('learner')}</h1>
          <p className="mt-0.5 text-sm font-semibold text-ink-2">{current} · Italian Learner</p>
        </div>
      </section>

      <StatsRow
        items={[
          { icon: Flame, tone: 'pink', value: streak(state), label: t('streak') },
          { icon: Star, tone: 'gold', value: state.xp.toLocaleString(), label: 'XP' },
          { icon: Trophy, tone: 'gold', value: earned.filter((b) => b.earned).length, label: t('badges') },
        ]}
      />

      {/* Daily Goal & App Language Settings */}
      <GlassCard className="divide-y divide-white/10 border-neon/30">
        <div className="flex min-h-16 items-center gap-3 px-4 py-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-pink/35 bg-pink/12 text-pink">
            <Target size={20} />
          </span>
          <span className="min-w-0 flex-1">
            <span className="bn block text-base font-extrabold text-white">{t('dailyGoal')}</span>
            <span className="bn text-sm font-semibold text-ink-2">
              {goal} {t('minutes')}
            </span>
          </span>
          <div className="flex items-center gap-1.5">
            {editingGoal && (
              <>
                <button
                  type="button"
                  aria-label="−5"
                  onClick={() => dispatch({ type: 'setDailyGoal', minutes: goal - 5 })}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-ink hover:border-neon/50"
                >
                  <Minus size={16} />
                </button>
                <button
                  type="button"
                  aria-label="+5"
                  onClick={() => dispatch({ type: 'setDailyGoal', minutes: goal + 5 })}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-ink hover:border-neon/50"
                >
                  <Plus size={16} />
                </button>
              </>
            )}
            {!editingGoal && (
              <>
                <button
                  type="button"
                  aria-label="−5"
                  onClick={() => dispatch({ type: 'setDailyGoal', minutes: goal - 5 })}
                  className="sr-only"
                >
                  −5
                </button>
                <button
                  type="button"
                  aria-label="+5"
                  onClick={() => dispatch({ type: 'setDailyGoal', minutes: goal + 5 })}
                  className="sr-only"
                >
                  +5
                </button>
              </>
            )}
            <button
              type="button"
              onClick={() => setEditingGoal((v) => !v)}
              aria-label={t('dailyGoal')}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-ink-2 transition hover:border-neon/50 hover:text-white"
            >
              <Pencil size={15} />
            </button>
          </div>
        </div>

        <div className="flex min-h-16 items-center gap-3 px-4 py-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neon/35 bg-neon/12 text-neon">
            <Languages size={20} />
          </span>
          <span className="bn flex-1 text-base font-extrabold text-white">{t('explainLang')}</span>
          <div
            className="flex rounded-full border border-neon/35 bg-[#041d19] p-1"
            role="radiogroup"
            aria-label={t('explainLang')}
          >
            {(['bn', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                role="radio"
                aria-checked={lang === l}
                onClick={() => dispatch({ type: 'setExplainLang', lang: l })}
                className={cx(
                  'min-h-8 rounded-full px-4 text-sm font-extrabold transition',
                  lang === l ? 'bg-grad-primary text-navy-950 glow-neon' : 'text-ink-2 hover:text-white',
                )}
              >
                {l === 'bn' ? 'বাংলা' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      {/* My Progress & Achievement Badges */}
      <GlassCard className="border-neon/30 p-4 sm:p-5">
        <h2 className="bn mb-3.5 flex items-center gap-2 text-lg font-extrabold text-white">
          <Award size={20} className="text-neon" /> {t('myProgress')}
        </h2>
        <div className="space-y-3">
          {LEVEL_ORDER.map((id) => {
            const { done, total } = levelProgress(state, id);
            return (
              <div key={id} className="flex items-center gap-3">
                <span className="w-8 text-base font-extrabold text-neon">{id}</span>
                <ProgressBar value={total ? done / total : 0} className="h-2.5 flex-1" />
                <span className="w-12 text-right text-sm font-bold text-ink-2 tabular-nums">
                  {done}/{total}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {earned.map((b) => {
            const meta = BADGE_META[b.id];
            const Icon = meta?.icon ?? Award;
            return (
              <span
                key={b.id}
                className={cx(
                  'bn inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs sm:text-[0.82rem] font-bold',
                  b.earned
                    ? 'border-neon/50 bg-neon/12 text-white shadow-[0_0_12px_-4px_rgba(0,245,160,0.45)]'
                    : 'border-white/15 bg-white/5 text-ink-2',
                )}
              >
                <Icon size={14} className={meta?.tone ?? 'text-neon'} aria-hidden="true" />
                <span>{tr(meta ?? { bn: b.id, en: b.id })}</span>
              </span>
            );
          })}
        </div>
      </GlassCard>

      {/* Action Links */}
      <GlassCard className="divide-y divide-white/10 border-neon/25">
        <button
          type="button"
          onClick={() => navigate('/saved')}
          className="flex min-h-14 w-full items-center gap-3 px-4 text-left transition hover:bg-white/5"
        >
          <Bookmark size={20} className="text-cyan" />
          <span className="bn flex-1 font-bold text-white">{t('saved')}</span>
          <span className="text-sm font-bold text-ink-2 tabular-nums">{state.saved.length}</span>
          <ChevronRight size={18} className="text-ink-2" />
        </button>

        <button
          type="button"
          onClick={() => navigate('/about')}
          className="flex min-h-14 w-full items-center gap-3 px-4 text-left transition hover:bg-white/5"
        >
          <Info size={20} className="text-cyan" />
          <span className="bn flex-1 font-bold text-white">{t('about')}</span>
          <ChevronRight size={18} className="text-ink-2" />
        </button>

        <div className="px-4 py-3">
          {confirming ? (
            <div>
              <p className="bn text-sm font-semibold text-pink">{t('resetConfirm')}</p>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setConfirming(false)}
                  className="min-h-10 flex-1 rounded-full border border-white/15 text-sm font-bold"
                >
                  ✕
                </button>
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: 'reset' });
                    setConfirming(false);
                  }}
                  className="min-h-10 flex-1 rounded-full bg-pink/85 text-sm font-extrabold text-navy-950"
                >
                  {t('resetProgress')}
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirming(true)}
              className="flex min-h-10 w-full items-center gap-3 text-left text-pink"
            >
              <Trash2 size={20} />
              <span className="bn flex-1 font-bold">{t('resetProgress')}</span>
              <ChevronRight size={18} className="text-ink-2" />
            </button>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
