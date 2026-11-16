import { useEffect, useState } from 'react';
import { Award, CheckCircle2, ChevronRight, Lock, Play } from 'lucide-react';
import type { LevelId } from '../content/types';
import type { LevelAssessment } from '../content/academyTypes';
import { LEVELS, LEVEL_ORDER, getLevel } from '../content/courses';
import { WORDS, SENTENCES } from '../content/bank';
import { loadLevelAssessments } from '../content/registry';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { isLessonCompleted, isLessonUnlocked, isLevelUnlocked, levelProgress } from '../state/progress';
import { Button, GlassCard, ProgressBar, cx } from '../components/ui';
import { ItalianRibbonWave, LevelDiamondBadge } from '../components/BrandDecor';
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
          const { done, total } = levelProgress(state, level.id);
          const pct = total ? Math.round((done / total) * 100) : 0;
          const units = level.units.length;
          const unitsReady = level.units.filter((u) => u.lessons.length > 0).length;

          return (
            <button
              key={level.id}
              type="button"
              onClick={() => navigate(`/level/${level.id}`)}
              className="block w-full text-left"
            >
              <GlassCard
                neon={unlocked}
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
                    {!unlocked && <Lock size={20} className="mt-1 shrink-0 text-ink-2" aria-label="locked" />}
                  </div>

                  <p className="bn mt-1 text-[0.92rem] sm:text-[0.98rem] leading-snug font-medium text-ink-2">
                    {tr(level.description)}
                  </p>

                  {unlocked ? (
                    <div className="mt-2.5 flex items-end gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="bn text-sm font-bold text-ink tabular-nums">
                          {t('unit')} {unitsReady}/{units} • {pct}%
                        </p>
                        <ProgressBar value={pct / 100} className="mt-1.5 h-2.5" />
                      </div>
                      <span className="bg-grad-primary glow-neon flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-navy-950">
                        <Play size={18} fill="currentColor" className="translate-x-[1px]" />
                      </span>
                    </div>
                  ) : (
                    <p className="bn mt-2.5 inline-flex items-center gap-1.5 rounded-full border border-gold/65 bg-gold/10 px-3.5 py-1 text-xs sm:text-sm font-bold text-gold shadow-[0_0_14px_-4px_rgba(255,209,102,0.35)]">
                      <Lock size={14} className="shrink-0 text-gold" />
                      <span>{t('unlockAfter', { level: LEVEL_ORDER[i - 1] ?? '' })}</span>
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

/** Level detail: units, lessons, assessments, and the level's vocabulary and sentence banks. */
export function LevelScreen({ id }: { id: LevelId }) {
  const { state } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const level = getLevel(id);
  const unlocked = isLevelUnlocked(state, id);
  const bankLevel = id;
  const [assessments, setAssessments] = useState<LevelAssessment[]>([]);

  useEffect(() => {
    let mounted = true;
    void loadLevelAssessments(id).then((list) => {
      if (mounted) setAssessments(list);
    });
    return () => {
      mounted = false;
    };
  }, [id]);

  const finalAssessment = assessments.find((a) => !a.unitNumber);

  return (
    <div className="animate-rise">
      <SubHeader title={`${level.id} · ${tr(level.name)}`} subtitle={tr(level.description)} />

      {bankLevel && (
        <div className="mb-5 grid grid-cols-2 gap-3">
          <button type="button" onClick={() => navigate(`/practice/words?level=${bankLevel}`)} className="text-left">
            <GlassCard className="p-4">
              <p className="text-3xl font-extrabold text-grad-primary tabular-nums">{WORDS[bankLevel].length}</p>
              <p className="bn font-bold text-ink-2">{t('wordsLabel')}</p>
            </GlassCard>
          </button>
          <button type="button" onClick={() => navigate(`/practice/sentences?level=${bankLevel}`)} className="text-left">
            <GlassCard className="p-4">
              <p className="text-3xl font-extrabold text-cyan tabular-nums">{SENTENCES[bankLevel].length}</p>
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
        {level.units.map((unit) => {
          const unitTest = assessments.find((a) => a.unitNumber === unit.number);
          const testState = unitTest ? state.assessments[unitTest.id] : undefined;
          return (
            <GlassCard key={unit.id} className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-sm font-extrabold tracking-wide text-mint uppercase">
                    {t('unit')} {unit.number} · {unit.title}
                  </p>
                  <p className="bn font-semibold text-ink-2">{tr(unit.subtitle)}</p>
                </div>
                {unitTest && unlocked && (
                  <button
                    type="button"
                    onClick={() => navigate(`/assessment/${id}/${unitTest.id}`)}
                    className={cx(
                      'inline-flex shrink-0 items-center gap-1 rounded-xl border px-3 py-1.5 text-xs font-bold transition',
                      testState?.passed ? 'border-neon/40 bg-neon/15 text-neon' : 'border-cyan/35 bg-cyan/10 text-cyan hover:border-cyan',
                    )}
                  >
                    <Award size={14} />
                    {testState ? `${Math.round(testState.score * 100)}%` : t('takeAssessment')}
                  </button>
                )}
              </div>
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
          );
        })}

        {finalAssessment && unlocked && (
          <GlassCard neon={!!state.assessments[finalAssessment.id]?.passed} className="p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-extrabold tracking-wide text-gold uppercase">{t('assessmentsTitle')}</p>
                <p className="bn text-lg font-extrabold">{tr(finalAssessment.title)}</p>
                {state.assessments[finalAssessment.id] && (
                  <p className="text-xs font-bold text-neon tabular-nums">
                    Best: {Math.round(state.assessments[finalAssessment.id]!.score * 100)}%
                  </p>
                )}
              </div>
              <Button
                className="min-h-10 px-4 text-sm"
                disabled={!unlocked}
                onClick={() => {
                  if (unlocked) navigate(`/assessment/${id}/${finalAssessment.id}`);
                }}
              >
                <Award size={16} /> {t('takeAssessment')}
              </Button>
            </div>
          </GlassCard>
        )}
      </div>
    </div>
  );
}
