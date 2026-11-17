import { useState } from 'react';
import {
  Bookmark,
  BookOpen,
  ChevronRight,
  Clock,
  FlaskConical,
  GraduationCap,
  Info,
  Languages,
  Minus,
  Pencil,
  Plus,
  Target,
  Trash2,
} from 'lucide-react';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { getCourseOverview } from '../lib/courseOverview';
import { useProgress } from '../state/ProgressContext';
import {
  getCurrentLevel,
  isShowAllLockedModulesEnabled,
  totalCompletedModules,
  totalStudySeconds,
} from '../state/progress';
import type { ExplainLang } from '../content/types';
import { GlassCard, ProgressBar, cx } from '../components/ui';
import { ItalianRibbonWave } from '../components/BrandDecor';
import { StatsRow } from '../components/StatsRow';

const PROFILE_LEVELS = ['A1', 'A2', 'B1'] as const;

function formatStudyDuration(seconds: number, lang: ExplainLang): string {
  const totalMinutes = Math.max(0, Math.floor(seconds / 60));
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (lang === 'bn') {
    return hours > 0 ? `${hours}ঘ ${mins}মি` : `${totalMinutes} মি.`;
  }
  return hours > 0 ? `${hours}h ${mins}m` : `${totalMinutes}m`;
}

export function ProfileScreen() {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t, tr, lang } = useI18n();
  const [confirming, setConfirming] = useState(false);
  const [editingGoal, setEditingGoal] = useState(false);
  const activeLevel = getCurrentLevel(state);
  const completedModules = totalCompletedModules(state);
  const studySeconds = totalStudySeconds(state);
  const goal = state.settings.dailyGoalMinutes;
  const showAllLocked = isShowAllLockedModulesEnabled(state);

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
          <p className="mt-0.5 text-sm font-semibold text-ink-2">
            {activeLevel} · {tr({ bn: 'ইতালিয়ান শিক্ষার্থী', en: 'Italian Learner', it: 'Studente di italiano' })}
          </p>
        </div>
      </section>

      <StatsRow
        items={[
          { icon: GraduationCap, tone: 'emerald', value: activeLevel, label: t('statsActiveLevel') },
          { icon: BookOpen, tone: 'cyan', value: completedModules, label: t('statsCompletedModules') },
          { icon: Clock, tone: 'violet', value: formatStudyDuration(studySeconds, lang), label: t('statsStudyTime') },
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
            {(['bn', 'en', 'it'] as const).map((l) => (
              <button
                key={l}
                type="button"
                role="radio"
                aria-checked={lang === l}
                onClick={() => dispatch({ type: 'setExplainLang', lang: l })}
                className={cx(
                  'min-h-8 rounded-full px-3 text-xs sm:text-sm font-extrabold transition',
                  lang === l ? 'bg-grad-primary text-navy-950 glow-neon' : 'text-ink-2 hover:text-white',
                )}
              >
                {l === 'bn' ? 'বাংলা' : l === 'en' ? 'English' : 'Italiano'}
              </button>
            ))}
          </div>
        </div>

        {/* Developer Testing Toggle: Show All Locked Modules */}
        <div className="px-4 py-3.5 space-y-2.5">
          <div className="flex items-center gap-3">
            <span
              className={cx(
                'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                showAllLocked
                  ? 'border-gold/60 bg-gold/15 text-gold'
                  : 'border-white/20 bg-white/5 text-ink-2',
              )}
            >
              <FlaskConical size={20} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="bn text-base font-extrabold text-white">{t('showAllLockedModules')}</p>
              <p className="bn text-xs font-semibold text-ink-2">{t('showAllLockedSub')}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={showAllLocked}
              aria-label={t('showAllLockedModules')}
              onClick={() => dispatch({ type: 'setShowAllLockedModules', enabled: !showAllLocked })}
              className={cx(
                'relative inline-flex h-8 w-14 shrink-0 items-center rounded-full border p-1 transition',
                showAllLocked
                  ? 'border-gold bg-gold/25 shadow-[0_0_16px_-4px_rgba(255,209,102,0.65)]'
                  : 'border-white/20 bg-[#041d19]',
              )}
            >
              <span
                className={cx(
                  'h-5.5 w-5.5 rounded-full transition-transform',
                  showAllLocked ? 'translate-x-6 bg-gold' : 'translate-x-0 bg-ink-3',
                )}
              />
            </button>
          </div>

          {showAllLocked && (
            <div
              role="status"
              className="flex items-center gap-2 rounded-xl border border-gold/45 bg-gold/10 px-3 py-2 text-xs font-extrabold text-gold"
            >
              <FlaskConical size={14} className="shrink-0" />
              <span>{t('testingModeOn')}</span>
            </div>
          )}
        </div>
      </GlassCard>

      {/* My Learning Progress (A1, A2, B1) */}
      <GlassCard className="border-neon/30 p-4 sm:p-5">
        <h2 className="bn mb-3.5 flex items-center gap-2 text-lg font-extrabold text-white">
          <GraduationCap size={20} className="text-neon" /> {t('myProgress')}
        </h2>
        <div className="space-y-3">
          {PROFILE_LEVELS.map((id) => {
            const overview = getCourseOverview(state, id);
            return (
              <div key={id} className="flex items-center gap-3">
                <span className="w-8 text-base font-extrabold text-neon">{id}</span>
                <ProgressBar
                  value={overview.totalModules ? overview.completedModules / overview.totalModules : 0}
                  className="h-2.5 flex-1"
                />
                <span className="w-14 text-right text-sm font-bold text-ink-2 tabular-nums">
                  {overview.completedModules}/{overview.totalModules}
                </span>
              </div>
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
