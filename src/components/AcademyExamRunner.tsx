import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  History,
  Loader2,
  Lock,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import type { AcademyExamQuestion, AcademyModuleId } from '../content/academy/types';
import type { LevelId } from '../content/types';
import {
  findAcademyModule,
  getNextAcademyModule,
  inferLevelFromModuleId,
} from '../content/academy/curriculum';
import {
  createExamAttemptId,
  evaluateExamAttempt,
  generateAcademyModuleExam,
  generateAcademyModuleExamAsync,
  type EvaluatedExamResult,
} from '../lib/examEngine';
import { dayKey } from '../lib/date';
import { resolveExamOptions, useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { academyStudyStats, getAcademyModuleProgress, isAcademyModuleUnlocked } from '../state/academyProgress';
import { Button, GlassCard, ProgressBar, cx } from './ui';
import { SpeakButton } from './SpeakButton';

interface AcademyExamRunnerProps {
  moduleId: AcademyModuleId;
  level?: LevelId;
  previewMode?: boolean;
  onReviewContent: () => void;
  onNavigateModule: (route: string) => void;
}

/**
 * Reusable randomized section & final exam runner + results breakdown + attempt history.
 * Supports A1, A2, B1, and B2 Academy modules (sync & async bundle-backed exams).
 */
export function AcademyExamRunner({
  moduleId,
  level,
  previewMode = false,
  onReviewContent,
  onNavigateModule,
}: AcademyExamRunnerProps) {
  const { state, dispatch } = useProgress();
  const { lang, t, tr } = useI18n();
  const lvl = level ?? inferLevelFromModuleId(moduleId);
  const meta = findAcademyModule(moduleId, lvl);
  const modProgress = getAcademyModuleProgress(state.academy, moduleId, lvl);
  const studyStats = academyStudyStats(state.academy, moduleId, lvl);
  const nextModule = getNextAcademyModule(moduleId, lvl);

  const [attemptSeed, setAttemptSeed] = useState(1);
  const attemptId = useMemo(() => createExamAttemptId(moduleId), [moduleId, attemptSeed]);

  const unlocked = isAcademyModuleUnlocked(state.academy, moduleId, lvl);
  const canRunExam = (unlocked && studyStats.readyForExam) || previewMode;

  const [questions, setQuestions] = useState<AcademyExamQuestion[]>(() =>
    canRunExam ? generateAcademyModuleExam(moduleId, Math.random, lvl) : [],
  );
  const [loadingExam, setLoadingExam] = useState(false);

  useEffect(() => {
    if (!canRunExam) {
      setQuestions([]);
      return;
    }
    const syncQs = generateAcademyModuleExam(moduleId, Math.random, lvl);
    if (syncQs.length > 0) {
      setQuestions(syncQs);
      setLoadingExam(false);
      return;
    }
    let mounted = true;
    setLoadingExam(true);
    void generateAcademyModuleExamAsync(moduleId, Math.random, lvl)
      .then((qs) => {
        if (mounted) {
          setQuestions(qs);
          setLoadingExam(false);
        }
      })
      .catch(() => {
        if (mounted) setLoadingExam(false);
      });
    return () => {
      mounted = false;
    };
  }, [moduleId, lvl, attemptSeed, canRunExam]);

  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [result, setResult] = useState<EvaluatedExamResult | null>(null);
  const [breakdownFilter, setBreakdownFilter] = useState<'all' | 'mistakes'>('all');
  const submittedRef = useRef<string | null>(null);

  if (!meta) return null;

  if (!unlocked && !previewMode) {
    return (
      <GlassCard className="p-6 text-center space-y-4">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
          <Lock size={28} />
        </span>
        <div className="space-y-1.5">
          <h2 className="text-xl font-extrabold text-white">
            {tr({ bn: meta.subtitle.bn, en: meta.title, it: meta.subtitle.it ?? meta.title })} ·{' '}
            {tr({ bn: 'সেকশন পরীক্ষা', en: 'Section Exam', it: 'Esame di sezione' })}
          </h2>
          <p className="bn text-base font-semibold text-gold">{t('testingModePreviewBanner')}</p>
        </div>
        <Button onClick={onReviewContent} className="mx-auto">
          <BookOpen size={18} />
          <span className="bn">{t('academyReviewContent')}</span>
        </Button>
      </GlassCard>
    );
  }

  if (!studyStats.readyForExam && !previewMode) {
    return (
      <GlassCard className="p-6 text-center space-y-4">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/10 text-gold">
          <Lock size={28} />
        </span>
        <div className="space-y-1.5">
          <h2 className="text-xl font-extrabold text-white">
            {tr({ bn: meta.subtitle.bn, en: meta.title, it: meta.subtitle.it ?? meta.title })} ·{' '}
            {tr({ bn: 'সেকশন পরীক্ষা', en: 'Section Exam', it: 'Esame di sezione' })}
          </h2>
          <p className="bn text-base font-semibold text-ink-2">
            {t('academyUnlockExamHint', { total: studyStats.total, rem: studyStats.remaining })}
          </p>
        </div>
        <div className="mx-auto max-w-sm space-y-1.5 text-left">
          <div className="flex items-center justify-between text-xs font-bold text-ink-2 tabular-nums">
            <span>{t('academyStudiedOf', { done: studyStats.studied, total: studyStats.total, rem: studyStats.remaining })}</span>
            <span>{studyStats.total ? Math.round((studyStats.studied / studyStats.total) * 100) : 0}%</span>
          </div>
          <ProgressBar value={studyStats.total ? studyStats.studied / studyStats.total : 0} className="h-2.5" />
        </div>
        <Button onClick={onReviewContent} className="mx-auto">
          <BookOpen size={18} />
          <span className="bn">{t('academyReviewContent')}</span>
        </Button>
      </GlassCard>
    );
  }

  if (loadingExam) {
    return (
      <GlassCard className="p-8 text-center space-y-3">
        <Loader2 size={30} className="mx-auto animate-spin text-neon" />
        <p className="bn text-sm font-bold text-ink-2">
          {tr({
            bn: 'পরীক্ষার প্রশ্ন প্রস্তুত করা হচ্ছে...',
            en: 'Preparing randomized exam questions...',
            it: 'Preparazione delle domande dell’esame...',
          })}
        </p>
      </GlassCard>
    );
  }

  const startFreshAttempt = () => {
    setAttemptSeed((s) => s + 1);
    setIndex(0);
    setSelected(null);
    setChecked(false);
    setSelections({});
    setResult(null);
    setBreakdownFilter('all');
    submittedRef.current = null;
  };

  if (result) {
    return (
      <div className="animate-rise space-y-4">
        <GlassCard neon={result.passed} className="p-5 sm:p-6 text-center space-y-4">
          <span
            className={cx(
              'mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border',
              result.passed
                ? 'border-neon/50 bg-neon/15 text-neon'
                : 'border-pink/50 bg-pink/12 text-pink',
            )}
          >
            {result.passed ? <Award size={34} /> : <AlertTriangle size={34} />}
          </span>

          <div>
            <p className={cx('text-5xl font-extrabold tabular-nums', result.passed ? 'text-grad-primary' : 'text-pink')}>
              {result.percentage}%
            </p>
            <p className="mt-1 text-sm font-bold text-ink-2 tabular-nums">
              {result.correct} / {result.total} ·{' '}
              {result.passed
                ? t('passedLabel')
                : tr({ bn: 'অকৃতকার্য', en: 'Fail', it: 'Non superato' })}
            </p>
            <p className="bn mt-2 text-base font-bold text-white">
              {result.passed ? t('academyExamPassed') : t('academyExamFailed')}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="rounded-2xl border border-neon/30 bg-neon/8 p-3">
              <p className="text-2xl font-extrabold text-neon tabular-nums">{result.correct}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'সঠিক', en: 'Correct', it: 'Corrette' })}
              </p>
            </div>
            <div className="rounded-2xl border border-pink/30 bg-pink/8 p-3">
              <p className="text-2xl font-extrabold text-pink tabular-nums">{result.incorrect}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'ভুল', en: 'Incorrect', it: 'Errori' })}
              </p>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-gold/8 p-3">
              <p className="text-2xl font-extrabold text-gold tabular-nums">
                {Math.round(Math.max(modProgress.bestScore, result.score) * 100)}%
              </p>
              <p className="bn text-xs font-semibold text-ink-2">{t('academyBestScore')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <Button variant="ghost" onClick={onReviewContent} className="flex-1 min-h-12">
              <BookOpen size={18} />
              <span className="bn text-sm">{t('academyReviewContent')}</span>
            </Button>
            <Button variant="ghost" onClick={startFreshAttempt} className="flex-1 min-h-12">
              <RotateCcw size={18} />
              <span className="bn text-sm">{t('academyRetakeExam')}</span>
            </Button>
            {result.passed && nextModule && nextModule.implemented && (
              <Button onClick={() => onNavigateModule(nextModule.route)} className="flex-1 min-h-12">
                <span className="bn text-sm">{t('academyNextModule')}</span>
                <ArrowRight size={18} />
              </Button>
            )}
          </div>
        </GlassCard>

        {/* Detailed Question & Explanation Review */}
        <GlassCard className="p-4 sm:p-5 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="bn text-base font-extrabold text-white">
              {tr({
                bn: `উত্তর ও ব্যাখ্যা পর্যালোচনা (${result.correct}/${result.total})`,
                en: `Answer Breakdown & Explanations (${result.correct}/${result.total})`,
                it: `Riepilogo risposte e spiegazioni (${result.correct}/${result.total})`,
              })}
            </h3>
            {result.incorrect > 0 && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setBreakdownFilter('all')}
                  className={cx(
                    'rounded-lg border px-2.5 py-1 text-xs font-bold transition',
                    breakdownFilter === 'all'
                      ? 'border-neon/60 bg-neon/15 text-neon'
                      : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                  )}
                >
                  {tr({ bn: 'সব', en: 'All', it: 'Tutte' })} ({result.total})
                </button>
                <button
                  type="button"
                  onClick={() => setBreakdownFilter('mistakes')}
                  className={cx(
                    'rounded-lg border px-2.5 py-1 text-xs font-bold transition',
                    breakdownFilter === 'mistakes'
                      ? 'border-pink/60 bg-pink/15 text-pink'
                      : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                  )}
                >
                  {tr({ bn: 'শুধু ভুল', en: 'Mistakes', it: 'Errori' })} ({result.incorrect})
                </button>
              </div>
            )}
          </div>
          <div className="divide-y divide-white/10">
            {result.breakdown
              .filter((entry) => (breakdownFilter === 'mistakes' ? !entry.correct : true))
              .map((entry, idx) => {
                const localizedOpts = resolveExamOptions(entry.question, lang);
                const selectedOptText =
                  entry.selectedIndex >= 0 ? (localizedOpts[entry.selectedIndex] ?? entry.selectedText) : '';
                const correctOptText = localizedOpts[entry.question.answer] ?? entry.correctText;
                const qPrefix = tr({ bn: `প্রশ্ন ${idx + 1}`, en: `Q${idx + 1}`, it: `D${idx + 1}` });
                return (
                  <div key={entry.question.id} className="py-3 first:pt-1 last:pb-1 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="bn text-xs font-bold text-ink-2">
                          {qPrefix} · {tr(entry.question.prompt)}
                        </p>
                        {entry.question.it && <p className="mt-0.5 text-base font-extrabold text-white">{entry.question.it}</p>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {entry.question.audioIt && <SpeakButton text={entry.question.audioIt} size={34} />}
                        {entry.correct ? (
                          <CheckCircle2 size={20} className="text-neon" aria-label="correct" />
                        ) : (
                          <XCircle size={20} className="text-pink" aria-label="incorrect" />
                        )}
                      </div>
                    </div>
                    <p className="bn text-xs font-semibold text-ink-2">
                      {tr({ bn: 'আপনার উত্তর:', en: 'Your answer:', it: 'Tua risposta:' })}{' '}
                      <span className={entry.correct ? 'text-neon font-bold' : 'text-pink font-bold'}>
                        {selectedOptText || '—'}
                      </span>
                      {!entry.correct && (
                        <>
                          {' · '}
                          {tr({ bn: 'সঠিক:', en: 'Correct:', it: 'Corretta:' })}{' '}
                          <span className="text-neon font-bold">{correctOptText}</span>
                        </>
                      )}
                    </p>
                    <p className="bn text-xs leading-relaxed text-ink-2">{tr(entry.question.explanation)}</p>
                  </div>
                );
              })}
          </div>
        </GlassCard>

        {/* Attempt History */}
        {modProgress.history.length > 0 && (
          <GlassCard className="p-4 sm:p-5 space-y-2.5">
            <h3 className="flex items-center gap-2 text-base font-extrabold text-white">
              <History size={18} className="text-cyan" />
              <span className="bn">{t('academyHistoryTitle')}</span>
              <span className="bn ml-auto text-xs font-bold text-ink-2 tabular-nums">
                {tr({
                  bn: `চেষ্টা: ${modProgress.attempts} · অকৃতকার্য: ${modProgress.failedAttempts}`,
                  en: `Attempts: ${modProgress.attempts} · Failed: ${modProgress.failedAttempts}`,
                  it: `Tentativi: ${modProgress.attempts} · Falliti: ${modProgress.failedAttempts}`,
                })}
              </span>
            </h3>
            <ul className="divide-y divide-white/10">
              {modProgress.history.slice(0, 6).map((h) => (
                <li key={h.id} className="flex items-center justify-between py-2 text-sm tabular-nums">
                  <span className="text-ink-2 font-semibold">{h.date}</span>
                  <span className="font-bold text-white">
                    {h.correct}/{h.total} ({Math.round(h.score * 100)}%)
                  </span>
                  <span className={cx('bn font-extrabold', h.passed ? 'text-neon' : 'text-pink')}>
                    {h.passed
                      ? t('passedLabel')
                      : tr({ bn: 'অকৃতকার্য', en: 'Fail', it: 'Non superato' })}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        )}
      </div>
    );
  }

  const q = questions[index];
  if (!q) return null;

  const localizedOpts = resolveExamOptions(q, lang);
  const isCorrect = selected === q.answer;

  const handleCheck = () => {
    if (selected === null || checked) return;
    setChecked(true);
    setSelections((prev) => ({ ...prev, [q.id]: selected }));
  };

  const handleNext = () => {
    if (index + 1 >= questions.length) {
      if (submittedRef.current === attemptId) return;
      submittedRef.current = attemptId;
      const finalSelections = { ...selections, [q.id]: selected ?? -1 };
      const evaluated = evaluateExamAttempt({
        attemptId,
        moduleId,
        questions,
        selections: finalSelections,
        maxIncorrect: meta.maxIncorrect,
      });
      setResult(evaluated);
      if (!previewMode) {
        dispatch({
          type: 'submitAcademyExam',
          attemptId,
          moduleId,
          level: lvl,
          total: evaluated.total,
          correct: evaluated.correct,
          incorrect: evaluated.incorrect,
          maxIncorrect: evaluated.maxIncorrect,
          today: dayKey(),
        });
      }
      return;
    }
    setIndex(index + 1);
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className="animate-rise space-y-3">
      <GlassCard neon className="p-4 sm:p-5 space-y-3" key={q.id}>
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-ink-2">
            <span className="bn">{t('academyPassRule', { max: meta.maxIncorrect, total: questions.length })}</span>
            <span className="text-neon tabular-nums">
              {index + 1} / {questions.length}
            </span>
          </div>
          <ProgressBar value={(index + (checked ? 1 : 0)) / questions.length} className="h-1.5" />
        </div>

        <div className="flex items-start justify-between gap-3 pt-1">
          <div className="min-w-0 flex-1">
            <p className="bn text-base font-semibold text-ink-2">{tr(q.prompt)}</p>
            {q.it && <p className="mt-1.5 text-xl sm:text-2xl font-extrabold text-white">{q.it}</p>}
          </div>
          {q.audioIt && <SpeakButton text={q.audioIt} size={44} />}
        </div>

        <div className="grid gap-2.5 pt-1" role="radiogroup">
          {localizedOpts.map((opt, i) => {
            const stateStyle = !checked
              ? selected === i
                ? 'selected'
                : 'idle'
              : i === q.answer
                ? 'right'
                : selected === i
                  ? 'wrong'
                  : 'idle';
            return (
              <button
                key={`${q.id}-${opt}-${i}`}
                type="button"
                role="radio"
                aria-checked={selected === i}
                disabled={checked}
                onClick={() => setSelected(i)}
                className={cx(
                  'glass flex min-h-12 items-center justify-between px-4 py-2 text-left text-base font-bold transition',
                  stateStyle === 'selected' && 'glass-neon',
                  stateStyle === 'right' && 'border-neon/75 bg-neon/12',
                  stateStyle === 'wrong' && 'border-pink/70 bg-pink/12',
                )}
              >
                <span className="bn">{opt}</span>
                {stateStyle === 'right' && <CheckCircle2 className="text-neon shrink-0" size={20} />}
                {stateStyle === 'wrong' && <XCircle className="text-pink shrink-0" size={20} />}
              </button>
            );
          })}
        </div>

        {checked && (
          <div
            className={cx(
              'rounded-2xl border p-4',
              isCorrect ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10',
            )}
            aria-live="polite"
          >
            <p className="font-extrabold text-white">
              {isCorrect ? t('correct') : `${t('incorrect')} — ${t('correctAnswer')}: ${localizedOpts[q.answer] ?? ''}`}
            </p>
            <p className="bn mt-1 text-sm text-ink-2">{tr(q.explanation)}</p>
          </div>
        )}

        <div className="pt-2">
          {checked ? (
            <Button className="w-full" onClick={handleNext}>
              {index + 1 >= questions.length ? t('score') : t('continue')}
            </Button>
          ) : (
            <Button className="w-full" onClick={handleCheck} disabled={selected === null}>
              {t('check')}
            </Button>
          )}
        </div>
      </GlassCard>

      {modProgress.attempts > 0 && (
        <p className="px-1 text-xs font-semibold text-ink-3 tabular-nums">
          {t('academyBestScore')}: {Math.round(modProgress.bestScore * 100)}% · {t('academyFailedAttempts')}: {modProgress.failedAttempts}
        </p>
      )}
    </div>
  );
}
