import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ClipboardCheck,
  History,
  MinusCircle,
  RotateCcw,
  Sparkles,
  Trophy,
  XCircle,
} from 'lucide-react';
import { findAcademyModule } from '../../content/academy/curriculum';
import { dayKey } from '../../lib/date';
import {
  evaluateExamAttempt,
  formatExamPercentage,
  type EvaluatedExamResult,
} from '../../lib/examEngine';
import {
  buildReviewExplanation,
  clearA1FinalExamDraft,
  createFreshA1FinalExamDraft,
  getUnansweredIndices,
  loadOrCreateA1FinalExamDraft,
  saveA1FinalExamDraft,
  type A1FinalExamDraft,
} from '../../lib/finalExamDraft';
import { resolveExamOptions, resolveTr, useI18n } from '../../lib/i18n';
import { useRouter } from '../../app/router';
import { useProgress } from '../../state/ProgressContext';
import { getAcademyModuleProgress } from '../../state/academyProgress';
import { isLevelUnlocked } from '../../state/progress';
import { SpeakButton } from '../SpeakButton';
import { Button, GlassCard, ProgressBar, cx } from '../ui';

type FlowView = 'exam' | 'confirm' | 'congrats' | 'result';
type ReviewFilter = 'all' | 'mistakes' | 'unanswered';

interface A1FinalExamFlowProps {
  previewMode?: boolean;
}

const CONFETTI_PIECES = [
  { left: '8%', delay: '0s', color: 'bg-neon' },
  { left: '18%', delay: '0.35s', color: 'bg-lime-pro' },
  { left: '30%', delay: '0.7s', color: 'bg-cyan' },
  { left: '46%', delay: '0.2s', color: 'bg-neon' },
  { left: '60%', delay: '0.55s', color: 'bg-gold' },
  { left: '74%', delay: '0.15s', color: 'bg-mint' },
  { left: '86%', delay: '0.45s', color: 'bg-neon' },
] as const;

export function A1FinalExamFlow({ previewMode = false }: A1FinalExamFlowProps) {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { lang, tr } = useI18n();

  const meta = findAcademyModule('final-exam', 'A1');
  const modProgress = getAcademyModuleProgress(state.academy, 'final-exam', 'A1');

  const [draft, setDraft] = useState<A1FinalExamDraft>(() =>
    loadOrCreateA1FinalExamDraft(Math.random, previewMode),
  );
  const [view, setView] = useState<FlowView>('exam');
  const [returnedFromConfirm, setReturnedFromConfirm] = useState(false);
  const [result, setResult] = useState<EvaluatedExamResult | null>(null);
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');

  const submittedAttemptRef = useRef<string | null>(null);
  const reviewSectionRef = useRef<HTMLDivElement | null>(null);

  // Sync draft to localStorage during active exam taking/confirm so refresh resumes seamlessly.
  useEffect(() => {
    if (view === 'exam' || view === 'confirm') {
      saveA1FinalExamDraft(draft, previewMode);
    }
  }, [draft, view, previewMode]);

  const totalQuestions = draft.questions.length;
  const currentIndex = Math.min(Math.max(0, draft.currentIndex), Math.max(0, totalQuestions - 1));
  const currentQuestion = draft.questions[currentIndex];
  const selectedForCurrent = currentQuestion ? draft.selections[currentQuestion.id] : undefined;

  const unansweredIndices = useMemo(
    () => getUnansweredIndices(draft.questions, draft.selections),
    [draft.questions, draft.selections],
  );
  const unansweredCount = unansweredIndices.length;
  const answeredCount = totalQuestions - unansweredCount;

  const localizedOpts = useMemo(
    () => (currentQuestion ? resolveExamOptions(currentQuestion, lang) : []),
    [currentQuestion, lang],
  );

  const a2Unlocked = isLevelUnlocked(state, 'A2');
  const maxIncorrect = meta?.maxIncorrect ?? 9;

  const handleSelectOption = (optionIndex: number) => {
    if (!currentQuestion) return;
    setDraft((prev) => ({
      ...prev,
      selections: {
        ...prev.selections,
        [currentQuestion.id]: optionIndex,
      },
      updatedAt: Date.now(),
    }));
  };

  const handleGoToQuestion = (targetIdx: number, fromConfirm = false) => {
    const clamped = Math.min(Math.max(0, targetIdx), Math.max(0, totalQuestions - 1));
    setDraft((prev) => ({
      ...prev,
      currentIndex: clamped,
      updatedAt: Date.now(),
    }));
    if (fromConfirm) {
      setReturnedFromConfirm(true);
    }
    setView('exam');
  };

  const handleOpenConfirm = () => {
    setReturnedFromConfirm(false);
    setView('confirm');
  };

  const handleFinalSubmit = () => {
    if (submittedAttemptRef.current === draft.attemptId) return;
    submittedAttemptRef.current = draft.attemptId;

    const evaluated = evaluateExamAttempt({
      attemptId: draft.attemptId,
      moduleId: 'final-exam',
      questions: draft.questions,
      selections: draft.selections,
      maxIncorrect,
    });

    if (!previewMode) {
      dispatch({
        type: 'submitAcademyExam',
        attemptId: evaluated.attemptId,
        moduleId: 'final-exam',
        level: 'A1',
        total: evaluated.total,
        correct: evaluated.correct,
        incorrect: evaluated.incorrect,
        maxIncorrect: evaluated.maxIncorrect,
        today: dayKey(),
      });
    }

    clearA1FinalExamDraft(previewMode);
    setResult(evaluated);
    setReviewFilter('all');
    setReturnedFromConfirm(false);
    setView(evaluated.passed ? 'congrats' : 'result');
  };

  const handleRetakeExam = () => {
    const fresh = createFreshA1FinalExamDraft(Math.random, previewMode);
    submittedAttemptRef.current = null;
    setDraft(fresh);
    setResult(null);
    setReviewFilter('all');
    setReturnedFromConfirm(false);
    setView('exam');
  };

  const handleContinueToA2 = () => {
    dispatch({ type: 'setCurrentLevel', level: 'A2' });
    navigate('/level/A2');
  };

  const handleJumpToMistakes = () => {
    setReviewFilter('mistakes');
    setView('result');
    setTimeout(() => {
      reviewSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  /* -------------------------------------------------------------------------- */
  /* PHASE 3A: CELEBRATORY CONGRATULATIONS SCREEN (PASS >= 70%)                 */
  /* -------------------------------------------------------------------------- */
  if (view === 'congrats' && result && result.passed) {
    const pctText = `${formatExamPercentage(result.exactPercentage)}%`;
    return (
      <div className="animate-rise space-y-4" data-testid="final-exam-congrats">
        <div className="relative overflow-hidden rounded-3xl border border-neon/50 bg-[radial-gradient(circle_at_top,rgba(0,245,160,0.22),rgba(6,47,43,0.92)_58%,rgba(4,25,23,0.98))] p-6 sm:p-8 text-center shadow-[0_0_48px_-10px_rgba(0,245,160,0.45)]">
          {/* Decorative subtle confetti pieces (muted when prefers-reduced-motion is enabled) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 overflow-hidden" aria-hidden="true">
            {CONFETTI_PIECES.map((piece, idx) => (
              <span
                key={idx}
                className={cx('animate-confetti absolute top-2 h-2.5 w-2.5 rounded-sm opacity-80', piece.color)}
                style={{ left: piece.left, animationDelay: piece.delay }}
              />
            ))}
          </div>

          <div className="relative z-10 space-y-5">
            <div className="animate-celebration-pop mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-neon/60 bg-neon/15 text-neon shadow-[0_0_30px_-4px_rgba(0,245,160,0.65)]">
              <Trophy size={42} strokeWidth={2} />
            </div>

            <div className="space-y-2">
              <p className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-neon">
                <Sparkles size={14} aria-hidden="true" />
                <span>
                  {tr({
                    bn: 'উত্তীর্ণ · ৭০% ন্যূনতম মান অতিক্রান্ত',
                    en: 'PASS · 70% Threshold Cleared',
                    it: 'SUPERATO · Soglia del 70% raggiunta',
                  })}
                </span>
              </p>
              <h2 className="bn text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {tr({
                  bn: 'অভিনন্দন! A1 সম্পন্ন হয়েছে!',
                  en: 'Congratulations! A1 Completed!',
                  it: 'Congratulazioni! A1 completato!',
                })}
              </h2>
              <p className="bn mx-auto max-w-lg text-sm sm:text-base font-semibold text-ink-2">
                {tr({
                  bn: 'আপনি সফলভাবে A1 চূড়ান্ত পরীক্ষায় উত্তীর্ণ হয়েছেন।',
                  en: 'You have successfully passed your A1 Final Examination.',
                  it: 'Hai superato con successo l’Esame Finale A1.',
                })}
              </p>
            </div>

            <div className="mx-auto grid max-w-xl grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 tabular-nums">
              <div className="rounded-2xl border border-neon/40 bg-navy-950/60 p-3">
                <p className="text-2xl font-extrabold text-grad-primary">{pctText}</p>
                <p className="bn mt-0.5 text-xs font-semibold text-ink-2">
                  {tr({ bn: 'শতাংশ', en: 'Percentage', it: 'Percentuale' })}
                </p>
              </div>
              <div className="rounded-2xl border border-neon/35 bg-navy-950/60 p-3">
                <p className="text-2xl font-extrabold text-white">
                  {result.correct}/{result.total}
                </p>
                <p className="bn mt-0.5 text-xs font-semibold text-ink-2">
                  {tr({ bn: 'চূড়ান্ত স্কোর', en: 'Final Score', it: 'Punteggio' })}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald/35 bg-navy-950/60 p-3">
                <p className="text-2xl font-extrabold text-neon">{result.correct}</p>
                <p className="bn mt-0.5 text-xs font-semibold text-ink-2">
                  {tr({ bn: 'সঠিক', en: 'Correct', it: 'Corrette' })}
                </p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-navy-950/60 p-3">
                <p className="text-2xl font-extrabold text-ink-2">{result.wrongCount + result.unanswered}</p>
                <p className="bn mt-0.5 text-xs font-semibold text-ink-2">
                  {tr({ bn: 'ভুল ও বাকি', en: 'Incorrect / Unanswered', it: 'Errori / Omesse' })}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
              {a2Unlocked && !previewMode && (
                <Button onClick={handleContinueToA2} className="sm:min-w-48">
                  <span className="bn">
                    {tr({
                      bn: 'A2-তে এগিয়ে যান',
                      en: 'Continue to A2',
                      it: 'Continua verso A2',
                    })}
                  </span>
                  <ArrowRight size={18} />
                </Button>
              )}
              <Button
                variant={a2Unlocked && !previewMode ? 'ghost' : 'primary'}
                onClick={() => setView('result')}
              >
                <ClipboardCheck size={18} />
                <span className="bn">
                  {tr({
                    bn: 'আমার উত্তর পর্যালোচনা করুন',
                    en: 'Review My Answers',
                    it: 'Rivedi le risposte',
                  })}
                </span>
              </Button>
              <Button variant="ghost" onClick={handleRetakeExam}>
                <RotateCcw size={18} />
                <span className="bn">
                  {tr({
                    bn: 'আবার পরীক্ষা দিন',
                    en: 'Retake Exam',
                    it: 'Ripeti esame',
                  })}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* PHASE 3B: RESULT SUMMARY + DETAILED ANSWER REVIEW                          */
  /* -------------------------------------------------------------------------- */
  if (view === 'result' && result) {
    const pctText = `${formatExamPercentage(result.exactPercentage)}%`;
    const filteredBreakdown = result.breakdown
      .map((entry, originalIndex) => ({ entry, originalIndex }))
      .filter(({ entry }) => {
        if (reviewFilter === 'mistakes') return !entry.correct;
        if (reviewFilter === 'unanswered') return !entry.answered;
        return true;
      });

    return (
      <div className="animate-rise space-y-4" data-testid="final-exam-result">
        <GlassCard neon={result.passed} className="p-5 sm:p-6 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <span
              className={cx(
                'flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border',
                result.passed
                  ? 'border-neon/55 bg-neon/15 text-neon'
                  : 'border-pink/55 bg-pink/12 text-pink',
              )}
            >
              {result.passed ? <Award size={34} /> : <AlertTriangle size={34} />}
            </span>
            <div className="min-w-0 flex-1 space-y-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="bn text-xl sm:text-2xl font-extrabold text-white">
                  {result.passed
                    ? tr({
                        bn: 'চূড়ান্ত পরীক্ষার ফলাফল: উত্তীর্ণ',
                        en: 'Final Examination Result: PASS',
                        it: 'Risultato Esame Finale: SUPERATO',
                      })
                    : tr({
                        bn: 'উত্তীর্ণ হতে ৭০% স্কোর প্রয়োজন',
                        en: 'Passing Score (70%) Not Reached',
                        it: 'Punteggio minimo (70%) non raggiunto',
                      })}
                </h2>
              </div>
              <p className="bn text-sm font-semibold text-ink-2">
                {result.passed
                  ? tr({
                      bn: 'আপনি সফলভাবে A1 চূড়ান্ত পরীক্ষায় উত্তীর্ণ হয়েছেন। নিচে প্রতিটি প্রশ্নের উত্তর ও ব্যাখ্যা দেখুন।',
                      en: 'You passed the A1 Final Examination. Review every question and explanation below.',
                      it: 'Hai superato l’Esame Finale A1. Qui sotto puoi rivedere tutte le risposte.',
                    })
                  : tr({
                      bn: 'চিন্তা করবেন না — নিচের ভুল উত্তর ও ব্যাখ্যাগুলো মনোযোগ দিয়ে দেখে নিন এবং নতুন ৩০ প্রশ্নের সেটে পুনরায় পরীক্ষা দিন। পাস না হওয়া পর্যন্ত A2 লক থাকবে।',
                      en: 'Do not be discouraged — review your mistakes below carefully and retake a fresh 30-question exam. A2 stays locked until you pass with at least 70%.',
                      it: 'Non scoraggiarti: rivedi gli errori qui sotto e riprova con un nuovo esame da 30 domande.',
                    })}
              </p>
            </div>
          </div>

          {/* Required Exact Result Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 tabular-nums">
            <div className="rounded-2xl border border-white/12 bg-white/4 p-3 text-center">
              <p className="text-xl font-extrabold text-white">{result.total}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'মোট প্রশ্ন', en: 'Total', it: 'Totale' })}
              </p>
            </div>
            <div className="rounded-2xl border border-neon/35 bg-neon/10 p-3 text-center">
              <p className="text-xl font-extrabold text-neon">{result.correct}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'সঠিক', en: 'Correct', it: 'Corrette' })}
              </p>
            </div>
            <div className="rounded-2xl border border-pink/35 bg-pink/10 p-3 text-center">
              <p className="text-xl font-extrabold text-pink">{result.wrongCount}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'ভুল', en: 'Incorrect', it: 'Errate' })}
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-3 text-center">
              <p className="text-xl font-extrabold text-ink-2">{result.unanswered}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'উত্তর দেওয়া হয়নি', en: 'Unanswered', it: 'Omesse' })}
              </p>
            </div>
            <div className="rounded-2xl border border-cyan/35 bg-cyan/10 p-3 text-center">
              <p className="text-xl font-extrabold text-cyan">
                {result.correct}/{result.total}
              </p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'স্কোর', en: 'Score', it: 'Punteggio' })}
              </p>
            </div>
            <div
              className={cx(
                'rounded-2xl border p-3 text-center',
                result.passed ? 'border-neon/45 bg-neon/12' : 'border-pink/45 bg-pink/12',
              )}
            >
              <p className={cx('text-xl font-extrabold', result.passed ? 'text-neon' : 'text-pink')}>
                {pctText}
              </p>
              <p className="bn text-xs font-semibold text-ink-2">
                {result.passed
                  ? tr({ bn: 'ফলাফল: উত্তীর্ণ', en: 'Result: PASS', it: 'Esito: SUPERATO' })
                  : tr({ bn: 'ফলাফল: অকৃতকার্য', en: 'Result: FAIL', it: 'Esito: NON SUPERATO' })}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/4 px-4 py-2.5 text-xs font-bold text-ink-2 tabular-nums">
            <span className="bn">
              {tr({
                bn: 'উত্তীর্ণের ন্যূনতম মান: ৭০% (৩০টির মধ্যে অন্তত ২১টি সঠিক)',
                en: 'Passing threshold: 70% (at least 21/30 correct)',
                it: 'Soglia di superamento: 70% (almeno 21/30)',
              })}
            </span>
            <span className={result.passed ? 'text-neon font-extrabold' : 'text-pink font-extrabold'}>
              {result.passed
                ? tr({ bn: 'অবস্থা: উত্তীর্ণ (PASS)', en: 'Status: PASS', it: 'Stato: SUPERATO' })
                : tr({ bn: 'অবস্থা: অকৃতকার্য (FAIL)', en: 'Status: FAIL', it: 'Stato: NON SUPERATO' })}
            </span>
          </div>

          {/* Result Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-2.5">
            {result.passed && a2Unlocked && !previewMode && (
              <Button onClick={handleContinueToA2} className="flex-1">
                <span className="bn">
                  {tr({ bn: 'A2-তে এগিয়ে যান', en: 'Continue to A2', it: 'Continua verso A2' })}
                </span>
                <ArrowRight size={18} />
              </Button>
            )}
            {result.passed && (
              <Button variant="ghost" onClick={() => setView('congrats')} className="flex-1">
                <Trophy size={18} />
                <span className="bn">
                  {tr({
                    bn: 'অভিনন্দন পাতায় ফিরুন',
                    en: 'Celebration Summary',
                    it: 'Torna ai risultati',
                  })}
                </span>
              </Button>
            )}
            {!result.passed && result.incorrect > 0 && (
              <Button variant="secondary" onClick={handleJumpToMistakes} className="flex-1">
                <ClipboardCheck size={18} />
                <span className="bn">
                  {tr({
                    bn: 'ভুলগুলো পর্যালোচনা করুন',
                    en: 'Review Mistakes',
                    it: 'Rivedi gli errori',
                  })}
                </span>
              </Button>
            )}
            <Button variant={result.passed ? 'ghost' : 'primary'} onClick={handleRetakeExam} className="flex-1">
              <RotateCcw size={18} />
              <span className="bn">
                {tr({
                  bn: 'আবার পরীক্ষা দিন',
                  en: 'Retake Exam',
                  it: 'Ripeti esame',
                })}
              </span>
            </Button>
          </div>
        </GlassCard>

        {/* Detailed Answer Review Section */}
        <div ref={reviewSectionRef}>
          <GlassCard className="p-4 sm:p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="bn text-base sm:text-lg font-extrabold text-white">
                {tr({
                  bn: `বিস্তারিত উত্তর পর্যালোচনা (${result.correct}/${result.total})`,
                  en: `Detailed Answer Review (${result.correct}/${result.total})`,
                  it: `Revisione dettagliata (${result.correct}/${result.total})`,
                })}
              </h3>
              <div className="flex flex-wrap items-center gap-1.5 tabular-nums">
                <button
                  type="button"
                  onClick={() => setReviewFilter('all')}
                  className={cx(
                    'min-h-9 rounded-xl border px-3 text-xs font-bold transition',
                    reviewFilter === 'all'
                      ? 'border-neon/60 bg-neon/15 text-neon'
                      : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                  )}
                >
                  {tr({ bn: 'সব প্রশ্ন', en: 'All', it: 'Tutte' })} ({result.total})
                </button>
                {result.incorrect > 0 && (
                  <button
                    type="button"
                    onClick={() => setReviewFilter('mistakes')}
                    className={cx(
                      'min-h-9 rounded-xl border px-3 text-xs font-bold transition',
                      reviewFilter === 'mistakes'
                        ? 'border-pink/60 bg-pink/15 text-pink'
                        : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                    )}
                  >
                    {tr({ bn: 'ভুল ও বাকি', en: 'Mistakes', it: 'Errori' })} ({result.incorrect})
                  </button>
                )}
                {result.unanswered > 0 && (
                  <button
                    type="button"
                    onClick={() => setReviewFilter('unanswered')}
                    className={cx(
                      'min-h-9 rounded-xl border px-3 text-xs font-bold transition',
                      reviewFilter === 'unanswered'
                        ? 'border-cyan/60 bg-cyan/15 text-cyan'
                        : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                    )}
                  >
                    {tr({ bn: 'উত্তর দেওয়া হয়নি', en: 'Unanswered', it: 'Omesse' })} ({result.unanswered})
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-3">
              {filteredBreakdown.map(({ entry, originalIndex }) => {
                const opts = resolveExamOptions(entry.question, lang);
                const selectedOptText =
                  entry.answered && entry.selectedIndex >= 0
                    ? (opts[entry.selectedIndex] ?? entry.selectedText)
                    : '';
                const correctOptText = opts[entry.question.answer] ?? entry.correctText;
                const explanationText = buildReviewExplanation(entry, lang, selectedOptText, correctOptText);

                const statusKind: 'correct' | 'incorrect' | 'unanswered' = entry.correct
                  ? 'correct'
                  : entry.answered
                    ? 'incorrect'
                    : 'unanswered';

                return (
                  <div
                    key={entry.question.id}
                    className={cx(
                      'rounded-2xl border p-4 space-y-2.5 transition',
                      statusKind === 'correct' && 'border-neon/35 bg-neon/6',
                      statusKind === 'incorrect' && 'border-pink/40 bg-pink/6',
                      statusKind === 'unanswered' && 'border-white/15 bg-white/4',
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex flex-wrap items-center gap-2 text-xs font-extrabold">
                          <span className="text-ink-2 tabular-nums">
                            {tr({
                              bn: `প্রশ্ন ${originalIndex + 1} / ${result.total}`,
                              en: `Question ${originalIndex + 1} of ${result.total}`,
                              it: `Domanda ${originalIndex + 1} di ${result.total}`,
                            })}
                          </span>
                          <span className="text-ink-3" aria-hidden="true">
                            ·
                          </span>
                          <span
                            className={cx(
                              'inline-flex items-center gap-1 font-extrabold',
                              statusKind === 'correct' && 'text-neon',
                              statusKind === 'incorrect' && 'text-pink',
                              statusKind === 'unanswered' && 'text-ink-2',
                            )}
                          >
                            {statusKind === 'correct' && <CheckCircle2 size={15} />}
                            {statusKind === 'incorrect' && <XCircle size={15} />}
                            {statusKind === 'unanswered' && <MinusCircle size={15} />}
                            <span className="bn">
                              {statusKind === 'correct'
                                ? tr({ bn: 'সঠিক', en: 'Correct', it: 'Corretta' })
                                : statusKind === 'incorrect'
                                  ? tr({ bn: 'ভুল', en: 'Incorrect', it: 'Errata' })
                                  : tr({ bn: 'উত্তর দেওয়া হয়নি', en: 'Unanswered', it: 'Non risposta' })}
                            </span>
                          </span>
                        </div>
                        <p className="bn text-sm sm:text-base font-bold text-white">
                          {resolveTr(lang, entry.question.prompt)}
                        </p>
                        {entry.question.it && (
                          <p className="text-base sm:text-lg font-extrabold text-cyan">{entry.question.it}</p>
                        )}
                      </div>
                      {entry.question.audioIt && <SpeakButton text={entry.question.audioIt} size={36} />}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                      <div className="rounded-xl border border-white/10 bg-navy-950/50 px-3 py-2">
                        <p className="bn text-[11px] font-bold uppercase tracking-wide text-ink-3">
                          {tr({ bn: 'আপনার উত্তর', en: 'Your selected answer', it: 'La tua risposta' })}
                        </p>
                        <p
                          className={cx(
                            'bn mt-0.5 font-extrabold',
                            statusKind === 'correct' && 'text-neon',
                            statusKind === 'incorrect' && 'text-pink',
                            statusKind === 'unanswered' && 'text-ink-2 italic',
                          )}
                        >
                          {entry.answered
                            ? selectedOptText
                            : tr({ bn: 'উত্তর দেওয়া হয়নি', en: 'Not answered', it: 'Non risposta' })}
                        </p>
                      </div>

                      <div className="rounded-xl border border-neon/25 bg-navy-950/50 px-3 py-2">
                        <p className="bn text-[11px] font-bold uppercase tracking-wide text-ink-3">
                          {tr({ bn: 'সঠিক উত্তর', en: 'Correct answer', it: 'Risposta corretta' })}
                        </p>
                        <p className="bn mt-0.5 font-extrabold text-neon">{correctOptText}</p>
                      </div>
                    </div>

                    <p className="bn text-xs sm:text-sm leading-relaxed text-ink-2">{explanationText}</p>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        </div>

        {/* Attempt History */}
        {modProgress.history.length > 0 && (
          <GlassCard className="p-4 sm:p-5 space-y-2.5">
            <h3 className="flex items-center gap-2 text-base font-extrabold text-white">
              <History size={18} className="text-cyan" />
              <span className="bn">
                {tr({ bn: 'পূর্ববর্তী পরীক্ষার রেকর্ড', en: 'Exam attempt history', it: 'Cronologia tentativi' })}
              </span>
              <span className="bn ml-auto text-xs font-bold text-ink-2 tabular-nums">
                {tr({
                  bn: `মোট চেষ্টা: ${modProgress.attempts} · অকৃতকার্য: ${modProgress.failedAttempts}`,
                  en: `Attempts: ${modProgress.attempts} · Failed: ${modProgress.failedAttempts}`,
                  it: `Tentativi: ${modProgress.attempts} · Falliti: ${modProgress.failedAttempts}`,
                })}
              </span>
            </h3>
            <ul className="divide-y divide-white/10">
              {modProgress.history.slice(0, 6).map((h) => {
                const histPct = formatExamPercentage(Math.round(h.score * 1000) / 10);
                return (
                  <li key={h.id} className="flex items-center justify-between py-2 text-sm tabular-nums">
                    <span className="text-ink-2 font-semibold">{h.date}</span>
                    <span className="font-bold text-white">
                      {h.correct}/{h.total} ({histPct}%)
                    </span>
                    <span className={cx('bn font-extrabold', h.passed ? 'text-neon' : 'text-pink')}>
                      {h.passed
                        ? tr({ bn: 'উত্তীর্ণ', en: 'PASS', it: 'SUPERATO' })
                        : tr({ bn: 'অকৃতকার্য', en: 'FAIL', it: 'NON SUPERATO' })}
                    </span>
                  </li>
                );
              })}
            </ul>
          </GlassCard>
        )}
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* PHASE 2: PRE-SUBMISSION CONFIRMATION SCREEN                                */
  /* -------------------------------------------------------------------------- */
  if (view === 'confirm') {
    return (
      <div className="animate-rise space-y-4" data-testid="final-exam-confirm">
        <GlassCard neon className="p-5 sm:p-6 space-y-5">
          <div className="space-y-1.5">
            <h2 className="bn text-xl sm:text-2xl font-extrabold text-white">
              {tr({
                bn: 'চূড়ান্ত জমা দেওয়ার আগে পর্যালোচনা করুন',
                en: 'Review & Submit Final Examination',
                it: 'Rivedi e invia l’Esame Finale',
              })}
            </h2>
            <p className="bn text-sm font-semibold text-ink-2">
              {tr({
                bn: 'চূড়ান্ত জমা দেওয়ার আগে আপনার উত্তরিত ও বাকি থাকা প্রশ্নগুলো যাচাই করুন।',
                en: 'Verify how many questions you have answered before submitting your examination.',
                it: 'Controlla il riepilogo delle domande risposte e omesse prima di inviare.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center tabular-nums">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-3">
              <p className="text-2xl font-extrabold text-white">{totalQuestions}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'মোট প্রশ্ন', en: 'Total questions', it: 'Domande totali' })}
              </p>
            </div>
            <div className="rounded-2xl border border-neon/40 bg-neon/10 p-3">
              <p className="text-2xl font-extrabold text-neon">{answeredCount}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'উত্তরিত', en: 'Answered', it: 'Risposte' })}
              </p>
            </div>
            <div
              className={cx(
                'rounded-2xl border p-3',
                unansweredCount > 0 ? 'border-gold/45 bg-gold/10' : 'border-white/15 bg-white/5',
              )}
            >
              <p className={cx('text-2xl font-extrabold', unansweredCount > 0 ? 'text-gold' : 'text-ink-2')}>
                {unansweredCount}
              </p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'উত্তর দেওয়া হয়নি', en: 'Unanswered', it: 'Omesse' })}
              </p>
            </div>
          </div>

          <div
            role="alert"
            className="flex items-start gap-2.5 rounded-2xl border border-gold/45 bg-gold/10 px-4 py-3 text-xs sm:text-sm font-bold text-gold"
          >
            <AlertTriangle size={18} className="mt-0.5 shrink-0" />
            <span className="bn">
              {tr({
                bn: 'সতর্কতা: চূড়ান্ত জমা দেওয়ার পর আপনি আর কোনো উত্তর পরিবর্তন করতে পারবেন না এবং সাথে সাথে আপনার ফলাফল নির্ধারিত হবে।',
                en: 'Warning: Answers cannot be changed after final submission. Your score will be calculated once submitted.',
                it: 'Attenzione: dopo l’invio definitivo non potrai più modificare le risposte.',
              })}
            </span>
          </div>

          {/* Clickable 30-question status map (answered vs unanswered ONLY) */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-ink-2">
              <span className="bn">
                {tr({
                  bn: 'যেকোনো প্রশ্নে ফিরে যেতে নম্বরে ট্যাপ করুন:',
                  en: 'Tap any question number to review or edit your answer:',
                  it: 'Tocca un numero per rivedere o modificare la risposta:',
                })}
              </span>
              <span className="tabular-nums">
                {answeredCount}/{totalQuestions}
              </span>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
              {draft.questions.map((q, idx) => {
                const isAnswered =
                  typeof draft.selections[q.id] === 'number' &&
                  draft.selections[q.id]! >= 0 &&
                  draft.selections[q.id]! < q.options.length;
                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => handleGoToQuestion(idx, true)}
                    className={cx(
                      'min-h-10 rounded-xl border text-xs font-extrabold tabular-nums transition',
                      isAnswered
                        ? 'border-neon/50 bg-neon/15 text-neon hover:border-neon'
                        : 'border-gold/50 bg-gold/10 text-gold hover:border-gold',
                    )}
                    aria-label={tr({
                      bn: `প্রশ্ন ${idx + 1}: ${isAnswered ? 'উত্তরিত' : 'বাকি'}`,
                      en: `Question ${idx + 1}: ${isAnswered ? 'Answered' : 'Unanswered'}`,
                      it: `Domanda ${idx + 1}: ${isAnswered ? 'Risposta' : 'Omessa'}`,
                    })}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            {unansweredCount > 0 ? (
              <Button
                variant="ghost"
                onClick={() => handleGoToQuestion(unansweredIndices[0]!, true)}
                className="flex-1"
              >
                <ArrowLeft size={18} />
                <span className="bn">
                  {tr({
                    bn: `বাকি প্রশ্নগুলোতে ফিরুন (${unansweredCount})`,
                    en: `Return to Unanswered (${unansweredCount})`,
                    it: `Torna alle omesse (${unansweredCount})`,
                  })}
                </span>
              </Button>
            ) : (
              <Button variant="ghost" onClick={() => handleGoToQuestion(currentIndex, true)} className="flex-1">
                <ArrowLeft size={18} />
                <span className="bn">
                  {tr({
                    bn: 'প্রশ্নগুলোতে ফিরুন',
                    en: 'Back to Questions',
                    it: 'Torna alle domande',
                  })}
                </span>
              </Button>
            )}
            <Button onClick={handleFinalSubmit} className="flex-1" data-testid="final-submit-button">
              <span className="bn">
                {tr({
                  bn: 'চূড়ান্ত জমা দিন',
                  en: 'Confirm Final Submit',
                  it: 'Invia Esame Finale',
                })}
              </span>
              <CheckCircle2 size={18} />
            </Button>
          </div>
        </GlassCard>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /* PHASE 1: TAKING THE 30-QUESTION FINAL EXAM (ONE QUESTION AT A TIME)        */
  /* -------------------------------------------------------------------------- */
  if (!currentQuestion) return null;

  const isLastQuestion = currentIndex === totalQuestions - 1;

  return (
    <div className="animate-rise space-y-3" data-testid="final-exam-question-screen">
      {/* Compact Question Navigator */}
      <GlassCard className="p-3.5 sm:p-4 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-extrabold tabular-nums">
          <span className="bn text-white">
            {tr({
              bn: `প্রশ্ন ${currentIndex + 1} / ${totalQuestions}`,
              en: `Question ${currentIndex + 1} of ${totalQuestions}`,
              it: `Domanda ${currentIndex + 1} di ${totalQuestions}`,
            })}
          </span>
          <span className="bn text-neon">
            {tr({
              bn: `উত্তরিত: ${answeredCount}/${totalQuestions}`,
              en: `Answered: ${answeredCount}/${totalQuestions}`,
              it: `Risposte: ${answeredCount}/${totalQuestions}`,
            })}
          </span>
        </div>

        <ProgressBar value={(currentIndex + 1) / Math.max(1, totalQuestions)} className="h-2" />

        <div className="grid grid-cols-6 sm:grid-cols-10 gap-1.5" role="navigation" aria-label={tr({
          bn: 'প্রশ্ন নেভিগেশন',
          en: 'Question navigation',
          it: 'Navigazione domande',
        })}>
          {draft.questions.map((q, idx) => {
            const isCurrent = idx === currentIndex;
            const isAnswered =
              typeof draft.selections[q.id] === 'number' &&
              draft.selections[q.id]! >= 0 &&
              draft.selections[q.id]! < q.options.length;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => handleGoToQuestion(idx)}
                aria-current={isCurrent ? 'step' : undefined}
                aria-label={tr({
                  bn: `প্রশ্ন ${idx + 1} (${isAnswered ? 'উত্তরিত' : 'অসম্পূর্ণ'})`,
                  en: `Question ${idx + 1} (${isAnswered ? 'answered' : 'unanswered'})`,
                  it: `Domanda ${idx + 1} (${isAnswered ? 'risposta' : 'omessa'})`,
                })}
                className={cx(
                  'min-h-10 rounded-xl border text-xs font-extrabold tabular-nums transition',
                  isCurrent
                    ? 'border-cyan bg-cyan/25 text-white ring-2 ring-cyan/45'
                    : isAnswered
                      ? 'border-neon/50 bg-neon/15 text-neon hover:border-neon'
                      : 'border-white/15 bg-white/4 text-ink-3 hover:border-white/30 hover:text-ink-2',
                )}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold text-ink-3">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan" aria-hidden="true" />
            <span className="bn">{tr({ bn: 'বর্তমান', en: 'Current', it: 'Attuale' })}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-neon" aria-hidden="true" />
            <span className="bn">{tr({ bn: 'উত্তরিত', en: 'Answered', it: 'Risposta' })}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full border border-white/35 bg-white/10" aria-hidden="true" />
            <span className="bn">{tr({ bn: 'উত্তর বাকি', en: 'Unanswered', it: 'Non risposta' })}</span>
          </span>
        </div>
      </GlassCard>

      {/* Single Question Card (zero immediate check/feedback/score) */}
      <GlassCard neon className="p-4 sm:p-6 space-y-4" key={currentQuestion.id}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1 space-y-1.5">
            <p className="bn text-base sm:text-lg font-bold text-ink-2">
              {resolveTr(lang, currentQuestion.prompt)}
            </p>
            {currentQuestion.it && (
              <p className="text-xl sm:text-2xl font-extrabold text-white">{currentQuestion.it}</p>
            )}
          </div>
          {currentQuestion.audioIt && <SpeakButton text={currentQuestion.audioIt} size={44} />}
        </div>

        <div className="grid gap-2.5" role="radiogroup" aria-label={resolveTr(lang, currentQuestion.prompt)}>
          {localizedOpts.map((opt, idx) => {
            const isSelected = selectedForCurrent === idx;
            return (
              <button
                key={`${currentQuestion.id}-${idx}`}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleSelectOption(idx)}
                className={cx(
                  'glass flex min-h-12 items-center justify-between gap-3 px-4 py-3 text-left text-base font-bold transition',
                  isSelected
                    ? 'glass-neon border-neon bg-neon/12 text-white'
                    : 'hover:border-white/30 text-ink',
                )}
              >
                <span className="bn">{opt}</span>
                <span
                  className={cx(
                    'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition',
                    isSelected ? 'border-neon bg-neon/25' : 'border-white/25 bg-transparent',
                  )}
                  aria-hidden="true"
                >
                  {isSelected && <span className="h-2.5 w-2.5 rounded-full bg-neon" />}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 pt-2">
          <Button
            variant="ghost"
            onClick={() => handleGoToQuestion(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="sm:flex-1"
          >
            <ArrowLeft size={18} />
            <span className="bn">
              {tr({ bn: 'পূর্ববর্তী', en: 'Previous', it: 'Precedente' })}
            </span>
          </Button>

          {returnedFromConfirm && !isLastQuestion && (
            <Button variant="secondary" onClick={handleOpenConfirm} className="sm:flex-1">
              <ClipboardCheck size={18} />
              <span className="bn">
                {tr({ bn: 'পর্যালোচনা ও জমা', en: 'Review & Submit', it: 'Rivedi e invia' })}
              </span>
            </Button>
          )}

          {isLastQuestion ? (
            <Button onClick={handleOpenConfirm} className="sm:flex-1" data-testid="review-submit-button">
              <span className="bn">
                {tr({ bn: 'পর্যালোচনা ও জমা দিন', en: 'Review & Submit', it: 'Rivedi e invia' })}
              </span>
              <ClipboardCheck size={18} />
            </Button>
          ) : (
            <Button onClick={() => handleGoToQuestion(currentIndex + 1)} className="sm:flex-1">
              <span className="bn">
                {tr({ bn: 'পরবর্তী', en: 'Next', it: 'Avanti' })}
              </span>
              <ArrowRight size={18} />
            </Button>
          )}
        </div>
      </GlassCard>
    </div>
  );
}
