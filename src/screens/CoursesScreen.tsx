import { ArrowRight, CheckCircle2, ChevronRight, Lock } from 'lucide-react';
import type { LevelId } from '../content/types';
import { LEVELS, LEVEL_ORDER, getLevel } from '../content/courses';
import { WORDS, SENTENCES } from '../content/bank';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { isLessonCompleted, isLessonUnlocked, isLevelUnlocked, levelProgress } from '../state/progress';
import { GlassCard, ProgressBar, cx } from '../components/ui';
import { SubHeader } from '../components/SubHeader';

export const LEVEL_IMAGE: Record<LevelId, { src: string; filter?: string }> = {
  A1: { src: './img/colosseum.webp' },
  A2: { src: './img/pisa.webp' },
  B1: { src: './img/milan.webp', filter: 'hue-rotate(-15deg) saturate(1.1)' },
  B2: { src: './img/milan.webp', filter: 'hue-rotate(150deg) saturate(0.8)' },
};

export function CoursesScreen() {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();

  return (
    <div className="animate-rise">
      <header
        className="relative -mx-4 mb-5 overflow-hidden px-4 pt-2 pb-6 sm:mx-0 sm:rounded-3xl"
        style={{ background: 'linear-gradient(90deg, rgba(7,21,34,0.95) 40%, rgba(7,21,34,0.2)), url(./img/milan.webp) right / contain no-repeat' }}
      >
        <h1 className="text-[2.3rem] leading-tight">{t('courses')}</h1>
        <p className="bn mt-1 max-w-[15rem] text-lg font-semibold text-ink-2">{t('coursesSub')}</p>
      </header>
      <div className="space-y-4">
        {LEVELS.map((level, i) => {
          const unlocked = isLevelUnlocked(state, level.id);
          const { done, total } = levelProgress(state, level.id);
          const pct = total ? Math.round((done / total) * 100) : 0;
          const img = LEVEL_IMAGE[level.id];
          const units = level.units.length;
          const unitsReady = level.units.filter((u) => u.lessons.length > 0).length;
          return (
            <button key={level.id} type="button" onClick={() => navigate(`/level/${level.id}`)} className="block w-full text-left">
              <GlassCard neon={unlocked} className={cx('flex gap-4 p-4', !unlocked && 'opacity-90')}>
                <img src={img.src} alt="" className="h-28 w-24 shrink-0 rounded-2xl object-cover" style={{ filter: img.filter }} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="text-[1.9rem] leading-none">
                      {level.id} <span className="text-lg font-bold">{tr(level.name)}</span>
                    </h2>
                    {!unlocked && <Lock size={22} className="shrink-0 text-ink-2" aria-label="locked" />}
                  </div>
                  <p className="bn mt-1 text-[0.95rem] leading-snug font-semibold text-ink-2">{tr(level.description)}</p>
                  {unlocked ? (
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-sm font-bold">
                        <span>
                          {t('unit')} {unitsReady}/{units} · {pct}%
                        </span>
                        <span className="bg-grad-primary glow-neon flex h-9 w-9 items-center justify-center rounded-full text-navy-950">
                          <ArrowRight size={20} />
                        </span>
                      </div>
                      <ProgressBar value={pct / 100} className="mt-1.5" />
                    </div>
                  ) : (
                    <p className="bn mt-2 inline-block rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-sm font-bold text-gold">
                      {t('unlockAfter', { level: LEVEL_ORDER[i - 1] ?? '' })}
                    </p>
                  )}
                </div>
              </GlassCard>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Level detail: units and lessons, plus the level's vocabulary and sentence banks. */
export function LevelScreen({ id }: { id: LevelId }) {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const level = getLevel(id);
  const unlocked = isLevelUnlocked(state, id);
  const bankLevel = id === 'B2' ? null : id;

  return (
    <div className="animate-rise">
      <SubHeader title={`${level.id} · ${tr(level.name)}`} subtitle={tr(level.description)} />

      {bankLevel && (
        <div className="mb-5 grid grid-cols-2 gap-3">
          <button type="button" onClick={() => navigate(`/practice/words?level=${bankLevel}`)} className="text-left">
            <GlassCard className="p-4">
              <p className="text-3xl font-extrabold text-grad-primary">{WORDS[bankLevel].length}</p>
              <p className="bn font-bold text-ink-2">{t('wordsLabel')}</p>
            </GlassCard>
          </button>
          <button type="button" onClick={() => navigate(`/practice/sentences?level=${bankLevel}`)} className="text-left">
            <GlassCard className="p-4">
              <p className="text-3xl font-extrabold text-cyan">{SENTENCES[bankLevel].length}</p>
              <p className="bn font-bold text-ink-2">{t('sentencesLabel')}</p>
            </GlassCard>
          </button>
        </div>
      )}

      {!unlocked && (
        <p className="bn mb-4 rounded-2xl border border-gold/40 bg-gold/10 p-4 font-semibold text-gold">
          <Lock size={18} className="mr-2 inline" />
          {t('levelLockedNote')}
        </p>
      )}

      <div className="space-y-3">
        {level.units.map((unit) => (
          <GlassCard key={unit.id} className="p-4">
            <p className="text-sm font-extrabold tracking-wide text-mint uppercase">
              {t('unit')} {unit.number} · {unit.title}
            </p>
            <p className="bn font-semibold text-ink-2">{tr(unit.subtitle)}</p>
            {unit.lessons.length === 0 ? (
              <p className="bn mt-2 text-sm font-semibold text-gold/80">{t('inPreparation')}</p>
            ) : (
              <ul className="mt-2 space-y-1">
                {unit.lessons.map((lesson) => {
                  const open = isLessonUnlocked(state, id, lesson.id);
                  const completed = isLessonCompleted(state, lesson.id);
                  return (
                    <li key={lesson.id}>
                      <button
                        type="button"
                        disabled={!open}
                        onClick={() => navigate(`/lesson/${lesson.id}`)}
                        className="flex min-h-14 w-full items-center gap-3 rounded-xl px-2 text-left transition hover:bg-white/5 disabled:cursor-not-allowed"
                      >
                        <span
                          className={cx(
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-extrabold',
                            completed ? 'bg-neon/15 text-neon' : open ? 'bg-grad-primary text-navy-950' : 'bg-white/5 text-ink-3',
                          )}
                        >
                          {completed ? <CheckCircle2 size={20} /> : open ? lesson.number : <Lock size={15} />}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className={cx('block text-lg font-bold', !open && 'text-ink-3')}>{lesson.title}</span>
                          <span className="bn block truncate text-sm font-semibold text-ink-3">{open ? tr(lesson.subtitle) : t('locked')}</span>
                        </span>
                        {open && <ChevronRight size={20} className="text-ink-3" />}
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
