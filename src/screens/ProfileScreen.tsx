import { useState } from 'react';
import { Award, Bookmark, ChevronRight, Flame, Info, Languages, Minus, Plus, Star, Target, Trash2, Trophy } from 'lucide-react';
import { LEVEL_ORDER } from '../content/courses';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { badges, isLevelUnlocked, levelProgress, streak } from '../state/progress';
import { GlassCard, IconTile, ProgressBar, ScreenTitle, cx } from '../components/ui';
import { StatsRow } from '../components/StatsRow';

const BADGE_NAMES: Record<string, { bn: string; en: string }> = {
  'first-lesson': { bn: 'প্রথম পাঠ', en: 'First lesson' },
  'perfect-quiz': { bn: '১০০% কুইজ', en: 'Perfect quiz' },
  'streak-3': { bn: '৩ দিনের স্ট্রিক', en: '3-day streak' },
  'xp-500': { bn: '৫০০ XP', en: '500 XP' },
  'unit-1': { bn: 'ইউনিট ১ সম্পন্ন', en: 'Unit 1 complete' },
};

export function ProfileScreen() {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t, tr, lang } = useI18n();
  const [confirming, setConfirming] = useState(false);
  const current = [...LEVEL_ORDER].reverse().find((id) => isLevelUnlocked(state, id)) ?? 'A1';
  const earned = badges(state);
  const goal = state.settings.dailyGoalMinutes;

  return (
    <div className="animate-rise space-y-4">
      <ScreenTitle title={t('myProfile')} />
      <div className="flex flex-col items-center text-center">
        <img src="./img/colosseum.webp" alt="" className="h-24 w-24 rounded-full border-2 border-neon/60 object-cover shadow-[0_0_24px_-6px_rgba(0,245,160,0.7)]" />
        <p className="mt-3 text-xl font-bold">{t('learner')}</p>
        <p className="text-sm text-ink-2">{current} · Italian Learner</p>
      </div>

      <StatsRow
        items={[
          { icon: Flame, tone: 'pink', value: streak(state), label: t('streak') },
          { icon: Star, tone: 'gold', value: state.xp.toLocaleString(), label: 'XP' },
          { icon: Trophy, tone: 'gold', value: earned.filter((b) => b.earned).length, label: t('badges') },
        ]}
      />

      <GlassCard className="divide-y divide-white/5">
        <div className="flex min-h-16 items-center gap-3 px-4">
          <IconTile icon={Target} tone="pink" size="sm" />
          <span className="flex-1">
            <span className="bn block font-medium">{t('dailyGoal')}</span>
            <span className="text-sm text-ink-2">
              {goal} {t('minutes')}
            </span>
          </span>
          <button type="button" aria-label="−5" onClick={() => dispatch({ type: 'setDailyGoal', minutes: goal - 5 })} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
            <Minus size={18} />
          </button>
          <button type="button" aria-label="+5" onClick={() => dispatch({ type: 'setDailyGoal', minutes: goal + 5 })} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
            <Plus size={18} />
          </button>
        </div>
        <div className="flex min-h-16 items-center gap-3 px-4">
          <IconTile icon={Languages} tone="emerald" size="sm" />
          <span className="bn flex-1 font-medium">{t('explainLang')}</span>
          <div className="flex rounded-full border border-white/15 p-1" role="radiogroup" aria-label={t('explainLang')}>
            {(['bn', 'en'] as const).map((l) => (
              <button
                key={l}
                type="button"
                role="radio"
                aria-checked={lang === l}
                onClick={() => dispatch({ type: 'setExplainLang', lang: l })}
                className={cx('min-h-9 rounded-full px-4 text-sm font-semibold', lang === l ? 'bg-grad-primary text-navy-950' : 'text-ink-2')}
              >
                {l === 'bn' ? 'বাংলা' : 'English'}
              </button>
            ))}
          </div>
        </div>
      </GlassCard>

      <GlassCard className="p-4">
        <h2 className="mb-3 flex items-center gap-2 font-semibold">
          <Award size={18} className="text-neon" /> {t('myProgress')}
        </h2>
        <div className="space-y-3">
          {LEVEL_ORDER.map((id) => {
            const { done, total } = levelProgress(state, id);
            return (
              <div key={id} className="flex items-center gap-3">
                <span className="w-8 font-bold text-mint">{id}</span>
                <ProgressBar value={total ? done / total : 0} />
                <span className="w-12 text-right text-xs text-ink-2">
                  {done}/{total}
                </span>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {earned.map((b) => (
            <span
              key={b.id}
              className={cx('bn rounded-full border px-3 py-1 text-xs', b.earned ? 'border-gold/50 bg-gold/10 text-gold' : 'border-white/10 text-ink-3')}
            >
              {b.earned ? '🏆 ' : ''}
              {tr(BADGE_NAMES[b.id] ?? { bn: b.id, en: b.id })}
            </span>
          ))}
        </div>
      </GlassCard>

      <GlassCard className="divide-y divide-white/5">
        <button type="button" onClick={() => navigate('/saved')} className="flex min-h-14 w-full items-center gap-3 px-4 text-left">
          <Bookmark size={20} className="text-cyan" />
          <span className="bn flex-1 font-medium">{t('saved')}</span>
          <span className="text-sm text-ink-3">{state.saved.length}</span>
          <ChevronRight size={18} className="text-ink-3" />
        </button>
        <button type="button" onClick={() => navigate('/about')} className="flex min-h-14 w-full items-center gap-3 px-4 text-left">
          <Info size={20} className="text-cyan" />
          <span className="bn flex-1 font-medium">{t('about')}</span>
          <ChevronRight size={18} className="text-ink-3" />
        </button>
        <div className="px-4 py-3">
          {confirming ? (
            <div>
              <p className="bn text-sm text-pink">{t('resetConfirm')}</p>
              <div className="mt-3 flex gap-2">
                <button type="button" onClick={() => setConfirming(false)} className="min-h-10 flex-1 rounded-full border border-white/15 text-sm">
                  ✕
                </button>
                <button
                  type="button"
                  onClick={() => {
                    dispatch({ type: 'reset' });
                    setConfirming(false);
                  }}
                  className="min-h-10 flex-1 rounded-full bg-pink/80 text-sm font-semibold text-navy-950"
                >
                  {t('resetProgress')}
                </button>
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => setConfirming(true)} className="flex min-h-10 w-full items-center gap-3 text-left text-pink">
              <Trash2 size={20} />
              <span className="bn font-medium">{t('resetProgress')}</span>
            </button>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
