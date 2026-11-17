import { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, HelpCircle, Loader2, Puzzle, RotateCcw, Sparkles, XCircle } from 'lucide-react';
import { findLesson } from '../../content/courses';
import type { PuzzleChallenge } from '../../content/academyTypes';
import type { ExplainLang, QuizQuestion } from '../../content/types';
import { SENTENCES } from '../../content/bank';
import { A1_PUZZLES } from '../../content/a1/puzzles';
import { A2_PUZZLES } from '../../content/a2/puzzles';
import { B1_PUZZLES } from '../../content/b1/puzzles';
import { B2_PUZZLES } from '../../content/b2/puzzles';
import { resolveExamOptions, useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { buildDailyReviewQuiz, type DailyReviewQuizSession } from '../../lib/reviewQuiz';
import { useRouter } from '../../app/router';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { getCurrentLevel, type ProgressState } from '../../state/progress';
import { Button, FilterChipRow, GlassCard, Pill } from '../../components/ui';
import { isBankLevel } from '../../components/LevelTabs';
import { QuizRunner, type QuizResult } from '../../components/QuizRunner';
import { SubHeader } from '../../components/SubHeader';
import { PuzzleCard, sentenceToChallenge } from './PuzzleScreen';

const ALL_EXPLICIT_PUZZLES: PuzzleChallenge[] = [
  ...A1_PUZZLES,
  ...A2_PUZZLES,
  ...B1_PUZZLES,
  ...B2_PUZZLES,
];

const PUZZLE_BY_ID = new Map<string, PuzzleChallenge>(ALL_EXPLICIT_PUZZLES.map((p) => [p.id, p]));

const SENTENCE_BY_KEY = new Map(
  [...SENTENCES.A1, ...SENTENCES.A2, ...SENTENCES.B1, ...SENTENCES.B2].map((s) => [s.key, s]),
);

export function resolvePuzzleById(puzzleId: string): PuzzleChallenge | undefined {
  const explicit = PUZZLE_BY_ID.get(puzzleId);
  if (explicit) return explicit;
  const sentence = SENTENCE_BY_KEY.get(puzzleId);
  if (sentence) return sentenceToChallenge(sentence);
  return undefined;
}

export interface QuizMistakeItem {
  key: string;
  lessonId: string;
  lessonTitle: string;
  question: QuizQuestion;
  count: number;
  previousAnswer: string;
  correctAnswer: string;
}

export interface PuzzleMistakeItem {
  puzzleId: string;
  challenge: PuzzleChallenge;
  count: number;
  previousAnswer: string;
  correctAnswer: string;
}

export function collectQuizMistakes(state: ProgressState, lang: ExplainLang = 'bn'): QuizMistakeItem[] {
  return Object.entries(state.mistakes).flatMap(([key, count]) => {
    const [lessonId = '', qid = ''] = key.split(':');
    const found = findLesson(lessonId);
    const question = found?.lesson.quiz.find((q) => q.id === qid);
    if (!found || !question) return [];
    const opts = resolveExamOptions(question, lang);
    const correctAnswer = opts[question.answer] ?? '';
    const recorded = state.mistakeAnswers?.[key];
    const fallbackWrong = opts.find((_, i) => i !== question.answer) ?? '—';
    return [
      {
        key,
        lessonId,
        lessonTitle: found.lesson.title,
        question: { ...question, id: key },
        count,
        previousAnswer: recorded ?? fallbackWrong,
        correctAnswer,
      },
    ];
  });
}

export function collectPuzzleMistakes(state: ProgressState): PuzzleMistakeItem[] {
  return Object.entries(state.puzzleMistakes).flatMap(([puzzleId, count]) => {
    const challenge = resolvePuzzleById(puzzleId);
    if (!challenge) return [];
    const recorded = state.puzzleMistakeAnswers?.[puzzleId];
    const fallbackWrong =
      challenge.options?.find((opt) => opt !== challenge.answerIt) ??
      (challenge.tiles ? [...challenge.tiles].reverse().join(' ') : '—');
    return [
      {
        puzzleId,
        challenge,
        count,
        previousAnswer: recorded ?? fallbackWrong,
        correctAnswer: challenge.answerIt,
      },
    ];
  });
}

/** Total reviewable mistakes across both lesson quizzes and puzzles. */
export function countReviewableMistakes(state: ProgressState): number {
  return collectQuizMistakes(state).length + collectPuzzleMistakes(state).length;
}

type ReviewMode =
  | { kind: 'overview' }
  | { kind: 'quiz'; questions: QuizQuestion[] }
  | { kind: 'puzzle'; queue: PuzzleChallenge[]; index: number; cleared: number };

/** Integrates both lesson quiz mistakes and puzzle mistakes with question/answer inspection, CEFR review quiz mode, and retry clearing. */
export function MistakesScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { lang, t, tr } = useI18n();
  useStudyTimer();

  const paramMode = route.params.get('mode');
  const paramLevel = route.params.get('level');
  const fromHome = route.params.get('from') === 'home';
  const backRoute = fromHome ? '/' : undefined;
  const reviewLevel = isBankLevel(paramLevel) ? paramLevel : getCurrentLevel(state);
  const isDailyQuiz = paramMode === 'quiz';

  const latestStateRef = useRef(state);
  latestStateRef.current = state;

  const [dailySession, setDailySession] = useState<DailyReviewQuizSession | null>(null);
  const [dailyLoading, setDailyLoading] = useState(isDailyQuiz);
  const [dailyResult, setDailyResult] = useState<{ correct: number; total: number } | null>(null);
  const [dailyRunKey, setDailyRunKey] = useState(0);

  useEffect(() => {
    if (!isDailyQuiz) {
      setDailyLoading(false);
      return;
    }
    let mounted = true;
    setDailyLoading(true);
    setDailyResult(null);
    void buildDailyReviewQuiz(latestStateRef.current, reviewLevel, 8)
      .then((session) => {
        if (!mounted) return;
        setDailySession(session);
        setDailyLoading(false);
      })
      .catch(() => {
        if (!mounted) return;
        setDailySession(null);
        setDailyLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [isDailyQuiz, reviewLevel, dailyRunKey]);

  const quizMistakes = useMemo(() => collectQuizMistakes(state, lang), [state, lang]);
  const puzzleMistakes = useMemo(() => collectPuzzleMistakes(state), [state]);
  const totalMistakes = quizMistakes.length + puzzleMistakes.length;

  const [filter, setFilter] = useState<'all' | 'quiz' | 'puzzle'>('all');
  const [mode, setMode] = useState<ReviewMode>({ kind: 'overview' });
  const [doneSummary, setDoneSummary] = useState<{ correct: number; total: number } | null>(null);

  const handleDailyQuizFinish = (results: QuizResult[]) => {
    const today = dayKey();
    let correctCount = 0;
    for (const r of results) {
      if (r.correct) {
        correctCount += 1;
        if (r.questionId.startsWith('mistake:')) {
          dispatch({ type: 'clearMistake', key: r.questionId.slice('mistake:'.length) });
        } else if (r.questionId.startsWith('pmistake:')) {
          dispatch({ type: 'clearPuzzleMistake', puzzleId: r.questionId.slice('pmistake:'.length), today });
        }
      }
    }
    dispatch({ type: 'completeTask', task: 'review', today });
    setDailyResult({ correct: correctCount, total: results.length });
  };

  if (isDailyQuiz) {
    const quizTitle = tr({
      bn: `${reviewLevel} রিভিউ ও কুইজ`,
      en: `${reviewLevel} Review & Quiz`,
      it: `Ripasso e quiz ${reviewLevel}`,
    });
    const quizSubtitle = tr({
      bn: 'অধ্যয়নকৃত পাঠ, শব্দভাণ্ডার ও ভুলের সমন্বয়ে প্রশ্নোত্তর',
      en: 'Questions from your studied modules, vocabulary & mistakes',
      it: 'Domande da moduli studiati, lessico ed errori',
    });

    return (
      <div className="animate-rise max-w-full space-y-4 overflow-x-hidden">
        <SubHeader
          title={quizTitle}
          subtitle={quizSubtitle}
          backTo={backRoute}
          right={
            totalMistakes > 0 ? (
              <Button
                variant="ghost"
                className="min-h-10 px-3 text-xs"
                onClick={() => navigate('/practice/mistakes')}
              >
                {tr({ bn: `ভুল (${totalMistakes})`, en: `Mistakes (${totalMistakes})`, it: `Errori (${totalMistakes})` })}
              </Button>
            ) : undefined
          }
        />

        {dailyResult ? (
          <GlassCard neon className="animate-rise space-y-4 p-6 text-center">
            <CheckCircle2 size={38} className="mx-auto text-neon" aria-hidden />
            <p className="text-5xl font-extrabold text-grad-primary tabular-nums">
              {Math.round((dailyResult.correct / Math.max(1, dailyResult.total)) * 100)}%
            </p>
            <p className="text-sm font-bold text-ink-2 tabular-nums">
              {t('score')}: {dailyResult.correct}/{dailyResult.total}
            </p>
            <p className="bn text-base font-extrabold text-neon">{t('sessionDone')}</p>
            <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center">
              <Button
                variant="ghost"
                onClick={() => setDailyRunKey((k) => k + 1)}
              >
                <RotateCcw size={16} /> {t('newRound')}
              </Button>
              <Button onClick={() => navigate(fromHome ? '/' : '/practice')}>
                {fromHome ? t('home') : t('continue')}
              </Button>
            </div>
          </GlassCard>
        ) : dailyLoading ? (
          <GlassCard className="p-8 text-center space-y-3" data-testid="daily-review-loading">
            <Loader2 size={28} className="mx-auto animate-spin text-neon" />
            <p className="bn text-sm font-semibold text-ink-2">
              {tr({
                bn: `${reviewLevel} রিভিউ কুইজ তৈরি হচ্ছে...`,
                en: `Preparing ${reviewLevel} review quiz...`,
                it: `Preparazione del quiz ${reviewLevel}...`,
              })}
            </p>
          </GlassCard>
        ) : !dailySession || dailySession.questions.length === 0 ? (
          <GlassCard className="p-6 text-center space-y-3">
            <p className="bn text-sm font-semibold text-ink-2">
              {tr({
                bn: `${reviewLevel} স্তরের জন্য এখনো পর্যাপ্ত রিভিউ প্রশ্ন পাওয়া যায়নি।`,
                en: `No review quiz questions available yet for ${reviewLevel}.`,
                it: `Nessuna domanda di ripasso disponibile per ${reviewLevel}.`,
              })}
            </p>
            <Button variant="ghost" onClick={() => navigate(fromHome ? '/' : '/practice')}>
              {fromHome ? t('home') : t('continue')}
            </Button>
          </GlassCard>
        ) : (
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-pink/30 bg-pink/10 px-3.5 py-2.5 text-xs font-bold text-ink">
              <Sparkles size={15} className="shrink-0 text-pink" />
              <span className="bn">
                {tr({
                  bn: `${reviewLevel} স্তর · ${dailySession.questions.length}টি প্রশ্ন (ভুল: ${dailySession.sourceSummary.mistakes}, অধ্যায়: ${dailySession.sourceSummary.completedOrStudied}, শব্দ: ${dailySession.sourceSummary.vocab})`,
                  en: `${reviewLevel} · ${dailySession.questions.length} questions (Mistakes: ${dailySession.sourceSummary.mistakes}, Modules: ${dailySession.sourceSummary.completedOrStudied}, Vocab: ${dailySession.sourceSummary.vocab})`,
                  it: `${reviewLevel} · ${dailySession.questions.length} domande (Errori: ${dailySession.sourceSummary.mistakes}, Moduli: ${dailySession.sourceSummary.completedOrStudied}, Lessico: ${dailySession.sourceSummary.vocab})`,
                })}
              </span>
            </div>
            <QuizRunner
              key={`daily-review-${reviewLevel}-${dailyRunKey}`}
              questions={dailySession.questions}
              onFinish={handleDailyQuizFinish}
            />
          </div>
        )}
      </div>
    );
  }

  const handleQuizFinish = (results: QuizResult[]) => {
    const today = dayKey();
    let clearedCount = 0;
    for (const r of results) {
      if (r.correct) {
        clearedCount += 1;
        dispatch({ type: 'clearMistake', key: r.questionId });
      }
    }
    dispatch({ type: 'completeTask', task: 'review', today });
    setMode({ kind: 'overview' });
    setDoneSummary({ correct: clearedCount, total: results.length });
  };

  if (mode.kind === 'quiz') {
    return (
      <div className="animate-rise space-y-4">
        <SubHeader
          title={tr({ bn: 'কুইজের ভুল অনুশীলন', en: 'Review Quiz Mistakes', it: 'Rivedi errori quiz' })}
          backTo={backRoute}
          right={
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setMode({ kind: 'overview' })}>
              {t('all')}
            </Button>
          }
        />
        <QuizRunner questions={mode.questions} onFinish={handleQuizFinish} />
      </div>
    );
  }

  if (mode.kind === 'puzzle') {
    const current = mode.queue[mode.index];
    if (!current) {
      return (
        <div className="animate-rise space-y-4">
          <SubHeader title={tr({ bn: 'পাজলের ভুল অনুশীলন', en: 'Review Puzzle Mistakes', it: 'Rivedi errori puzzle' })} />
          <GlassCard neon className="p-6 text-center">
            <p className="text-4xl font-bold text-grad-primary tabular-nums">
              {mode.cleared}/{mode.queue.length}
            </p>
            <p className="mt-2 font-semibold">{t('sessionDone')}</p>
            <Button className="mt-5" onClick={() => setMode({ kind: 'overview' })}>
              {t('continue')}
            </Button>
          </GlassCard>
        </div>
      );
    }

    return (
      <div className="animate-rise space-y-4">
        <SubHeader
          title={`${tr({ bn: 'পাজল পুনরায় চেষ্টা', en: 'Retry Puzzle', it: 'Riprova puzzle' })} (${mode.index + 1}/${mode.queue.length})`}
          right={
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setMode({ kind: 'overview' })}>
              {t('all')}
            </Button>
          }
        />
        <PuzzleCard
          key={`${current.id}-${mode.index}`}
          item={current}
          onDone={(correct) => {
            const nextCleared = mode.cleared + (correct ? 1 : 0);
            if (mode.index + 1 >= mode.queue.length) {
              dispatch({ type: 'completeTask', task: 'review', today: dayKey() });
              setMode({ kind: 'overview' });
              setDoneSummary({ correct: nextCleared, total: mode.queue.length });
            } else {
              setMode({
                kind: 'puzzle',
                queue: mode.queue,
                index: mode.index + 1,
                cleared: nextCleared,
              });
            }
          }}
        />
      </div>
    );
  }

  const showQuiz = filter === 'all' || filter === 'quiz';
  const showPuzzle = filter === 'all' || filter === 'puzzle';

  return (
    <div className="animate-rise max-w-full space-y-4 overflow-x-hidden">
      <SubHeader
        title={tr({ bn: 'ভুল সংশোধন', en: 'Review Mistakes', it: 'Rivedi errori' })}
        subtitle={`${totalMistakes} ${tr({ bn: 'টি সংশোধনযোগ্য আইটেম', en: 'reviewable items', it: 'elementi da rivedere' })}`}
        backTo={backRoute}
      />

      {doneSummary && (
        <GlassCard neon className="flex flex-wrap items-center justify-between gap-3 p-4">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="text-neon" size={22} />
            <p className="text-sm font-bold">
              {t('sessionDone')} ({doneSummary.correct}/{doneSummary.total})
            </p>
          </div>
          <Button variant="ghost" className="min-h-9 px-3 text-xs" onClick={() => setDoneSummary(null)}>
            OK
          </Button>
        </GlassCard>
      )}

      {totalMistakes === 0 ? (
        <GlassCard className="bn p-6 text-center text-ink-2">{t('noMistakes')}</GlassCard>
      ) : (
        <>
          <div className="space-y-3">
            <FilterChipRow label="Mistakes filter">
              <Pill active={filter === 'all'} onClick={() => setFilter('all')}>
                {t('all')} ({totalMistakes})
              </Pill>
              <Pill active={filter === 'quiz'} onClick={() => setFilter('quiz')}>
                {t('quiz')} ({quizMistakes.length})
              </Pill>
              <Pill active={filter === 'puzzle'} onClick={() => setFilter('puzzle')}>
                {t('puzzle')} ({puzzleMistakes.length})
              </Pill>
            </FilterChipRow>

            {(quizMistakes.length > 0 || puzzleMistakes.length > 0) && (
              <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                {quizMistakes.length > 0 && (
                  <Button
                    className="min-h-11 w-full px-3.5 text-xs sm:text-sm"
                    onClick={() => {
                      setDoneSummary(null);
                      setMode({ kind: 'quiz', questions: quizMistakes.map((m) => m.question) });
                    }}
                  >
                    <RotateCcw size={15} className="shrink-0" />
                    <span>{t('retry')} {t('quiz')} ({quizMistakes.length})</span>
                  </Button>
                )}
                {puzzleMistakes.length > 0 && (
                  <Button
                    variant={quizMistakes.length > 0 ? 'secondary' : 'primary'}
                    className="min-h-11 w-full px-3.5 text-xs sm:text-sm"
                    onClick={() => {
                      setDoneSummary(null);
                      setMode({
                        kind: 'puzzle',
                        queue: puzzleMistakes.map((p) => p.challenge),
                        index: 0,
                        cleared: 0,
                      });
                    }}
                  >
                    <Puzzle size={15} className="shrink-0" />
                    <span>{t('retry')} {t('puzzle')} ({puzzleMistakes.length})</span>
                  </Button>
                )}
              </div>
            )}
          </div>

          <div className="space-y-3">
            {showQuiz &&
              quizMistakes.map((item) => (
                <GlassCard key={item.key} className="space-y-2.5 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-pink uppercase">
                      <HelpCircle size={15} />
                      <span>
                        {t('quiz')} · {item.lessonTitle}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      className="min-h-8 px-3 text-xs"
                      onClick={() => {
                        setDoneSummary(null);
                        setMode({ kind: 'quiz', questions: [item.question] });
                      }}
                    >
                      <RotateCcw size={13} /> {t('retry')}
                    </Button>
                  </div>

                  <div>
                    <p className="bn text-sm font-semibold text-ink-2">{tr(item.question.prompt)}</p>
                    {item.question.it && <p className="mt-1 text-base font-extrabold">{item.question.it}</p>}
                  </div>

                  <div className="grid gap-2 rounded-xl bg-white/5 p-3 text-sm sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <XCircle size={16} className="mt-0.5 shrink-0 text-pink" />
                      <div>
                        <p className="text-xs font-bold text-ink-3">{t('yourAnswer')}</p>
                        <p className="font-bold text-pink">{item.previousAnswer}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-neon" />
                      <div>
                        <p className="text-xs font-bold text-ink-3">{t('correctAnswer')}</p>
                        <p className="font-bold text-neon">{item.correctAnswer}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}

            {showPuzzle &&
              puzzleMistakes.map((item) => (
                <GlassCard key={item.puzzleId} className="space-y-2.5 p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-extrabold tracking-wide text-cyan uppercase">
                      <Puzzle size={15} />
                      <span>
                        {item.challenge.level} · {item.challenge.type}
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      className="min-h-8 px-3 text-xs"
                      onClick={() => {
                        setDoneSummary(null);
                        setMode({
                          kind: 'puzzle',
                          queue: [item.challenge],
                          index: 0,
                          cleared: 0,
                        });
                      }}
                    >
                      <RotateCcw size={13} /> {t('retry')}
                    </Button>
                  </div>

                  <div>
                    <p className="bn text-sm font-semibold text-mint">{tr(item.challenge.prompt)}</p>
                    {item.challenge.stemIt && <p className="mt-1 text-base font-extrabold">{item.challenge.stemIt}</p>}
                    <p className="bn mt-0.5 text-sm font-semibold text-ink-2">{tr(item.challenge.tr)}</p>
                  </div>

                  <div className="grid gap-2 rounded-xl bg-white/5 p-3 text-sm sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <XCircle size={16} className="mt-0.5 shrink-0 text-pink" />
                      <div>
                        <p className="text-xs font-bold text-ink-3">{t('yourAnswer')}</p>
                        <p className="font-bold text-pink">{item.previousAnswer}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-neon" />
                      <div>
                        <p className="text-xs font-bold text-ink-3">{t('correctAnswer')}</p>
                        <p className="font-bold text-neon">{item.correctAnswer}</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
          </div>
        </>
      )}
    </div>
  );
}
