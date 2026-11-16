import { CheckCircle2, ChevronRight, Church, Landmark, Lock, Building2, Castle, type LucideIcon } from 'lucide-react';
import type { LevelId } from '../content/types';
import { LEVELS, LEVEL_ORDER } from '../content/courses';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { isLessonCompleted, isLessonUnlocked, isLevelUnlocked, levelProgress } from '../state/progress';
import { GlassCard, IconTile, ProgressBar, ScreenTitle, cx, type Tone } from '../components/ui';

const LEVEL_STYLE: Record<LevelId, { icon: LucideIcon; tone: Tone }> = {
  A1: { icon: Landmark, tone: 'emerald' },
  A2: { icon: Castle, tone: 'cyan' },
  B1: { icon: Building2, tone: 'violet' },
  B2: { icon: Church, tone: 'pink' },
};

export function CoursesScreen() {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();

  return (
    <div className="animate-rise">
      <ScreenTitle title={t('courses')} subtitle={t('coursesSub')} />
      <div className="space-y-4">
        {LEVELS.map((level, i) => {
          const unlocked = isLevelUnlocked(state, level.id);
          const { done, total } = levelProgress(state, level.id);
          const style = LEVEL_STYLE[level.id];
          return (
            <GlassCard key={level.id} neon={unlocked} className={cx('p-5', !unlocked && 'opacity-80')}>
              <div className="flex items-start gap-4">
                <IconTile icon={style.icon} tone={style.tone} size="lg" />
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold">
                    {level.id} <span className="text-base font-semibold text-ink-2">{tr(level.name)}</span>
                  </h2>
                  <p className="bn text-sm text-ink-2">{tr(level.description)}</p>
                </div>
                {!unlocked && <Lock size={20} className="mt-1 text-ink-3" aria-label="locked" />}
              </div>

              {unlocked ? (
                <>
                  <div className="mt-4 flex items-center gap-3">
                    <ProgressBar value={total ? done / total : 0} />
                    <span className="shrink-0 text-xs text-ink-2">{t('lessonsDone', { d: done, t: total })}</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    {level.units.map((unit) => (
                      <div key={unit.id} className="rounded-2xl border border-white/8 bg-navy-950/30 p-3">
                        <p className="text-xs font-semibold tracking-wide text-ink-3 uppercase">
                          {t('unit')} {unit.number} · {unit.title}
                        </p>
                        <p className="bn text-sm text-ink-2">{tr(unit.subtitle)}</p>
                        {unit.lessons.length === 0 ? (
                          <p className="bn mt-2 text-xs text-gold/80">{t('inPreparation')}</p>
                        ) : (
                          <ul className="mt-2 space-y-1">
                            {unit.lessons.map((lesson) => {
                              const open = isLessonUnlocked(state, level.id, lesson.id);
                              const completed = isLessonCompleted(state, lesson.id);
                              return (
                                <li key={lesson.id}>
                                  <button
                                    type="button"
                                    disabled={!open}
                                    onClick={() => navigate(`/lesson/${lesson.id}`)}
                                    className="flex min-h-12 w-full items-center gap-3 rounded-xl px-2 text-left transition hover:bg-white/5 disabled:cursor-not-allowed"
                                  >
                                    <span
                                      className={cx(
                                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold',
                                        completed ? 'bg-neon/15 text-neon' : open ? 'bg-grad-primary text-navy-950' : 'bg-white/5 text-ink-3',
                                      )}
                                    >
                                      {completed ? <CheckCircle2 size={18} /> : open ? lesson.number : <Lock size={14} />}
                                    </span>
                                    <span className="min-w-0 flex-1">
                                      <span className={cx('block font-medium', !open && 'text-ink-3')}>{lesson.title}</span>
                                      <span className="bn block truncate text-xs text-ink-3">{open ? tr(lesson.subtitle) : t('locked')}</span>
                                    </span>
                                    {open && <ChevronRight size={18} className="text-ink-3" />}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="bn mt-4 inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs text-gold">
                  {t('unlockAfter', { level: LEVEL_ORDER[i - 1] ?? '' })}
                </p>
              )}
            </GlassCard>
          );
        })}
      </div>
    </div>
  );
}
