import { useMemo, useState } from 'react';
import { CheckCircle2, HelpCircle, Puzzle, RotateCcw, XCircle } from 'lucide-react';
import { findLesson } from '../../content/courses';
import type { PuzzleChallenge } from '../../content/academyTypes';
import type { QuizQuestion } from '../../content/types';
import { SENTENCES } from '../../content/bank';
import { A1_PUZZLES } from '../../content/a1/puzzles';
import { A2_PUZZLES } from '../../content/a2/puzzles';
import { B1_PUZZLES } from '../../content/b1/puzzles';
import { B2_PUZZLES } from '../../content/b2/puzzles';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import type { ProgressState } from '../../state/progress';
import { Button, GlassCard, Pill } from '../../components/ui';
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

export function collectQuizMistakes(state: ProgressState): QuizMistakeItem[] {
  return Object.entries(state.mistakes).flatMap(([key, count]) => {
    const [lessonId = '', qid = ''] = key.split(':');
    const found = findLesson(lessonId);
    const question = found?.lesson.quiz.find((q) => q.id === qid);
    if (!found || !question) return [];
    const correctAnswer = question.options[question.answer] ?? '';
    const recorded = state.mistakeAnswers?.[key];
    const fallbackWrong = question.options.find((_, i) => i !== question.answer) ?? '—';
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

/** Integrates both lesson quiz mistakes and puzzle mistakes with question/answer inspection and retry clearing. */
export function MistakesScreen() {
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const quizMistakes = useMemo(() => collectQuizMistakes(state), [state]);
  const puzzleMistakes = useMemo(() => collectPuzzleMistakes(state), [state]);
  const totalMistakes = quizMistakes.length + puzzleMistakes.length;

  const [filter, setFilter] = useState<'all' | 'quiz' | 'puzzle'>('all');
  const [mode, setMode] = useState<ReviewMode>({ kind: 'overview' });
  const [doneSummary, setDoneSummary] = useState<{ correct: number; total: number } | null>(null);

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
          title="Review Quiz Mistakes"
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
          <SubHeader title="Review Puzzle Mistakes" />
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
          title={`Retry Puzzle (${mode.index + 1}/${mode.queue.length})`}
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
    <div className="animate-rise space-y-4">
      <SubHeader title="Review Mistakes" subtitle={`${totalMistakes} reviewable items`} />

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
          <div className="-mx-4 flex flex-wrap items-center justify-between gap-2 px-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              <Pill active={filter === 'all'} onClick={() => setFilter('all')}>
                {t('all')} ({totalMistakes})
              </Pill>
              <Pill active={filter === 'quiz'} onClick={() => setFilter('quiz')}>
                {t('quiz')} ({quizMistakes.length})
              </Pill>
              <Pill active={filter === 'puzzle'} onClick={() => setFilter('puzzle')}>
                {t('puzzle')} ({puzzleMistakes.length})
              </Pill>
            </div>

            <div className="flex flex-wrap gap-2">
              {quizMistakes.length > 0 && (
                <Button
                  className="min-h-9 px-3.5 text-xs"
                  onClick={() => {
                    setDoneSummary(null);
                    setMode({ kind: 'quiz', questions: quizMistakes.map((m) => m.question) });
                  }}
                >
                  <RotateCcw size={14} /> {t('retry')} {t('quiz')} ({quizMistakes.length})
                </Button>
              )}
              {puzzleMistakes.length > 0 && (
                <Button
                  variant={quizMistakes.length > 0 ? 'secondary' : 'primary'}
                  className="min-h-9 px-3.5 text-xs"
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
                  <Puzzle size={14} /> {t('retry')} {t('puzzle')} ({puzzleMistakes.length})
                </Button>
              )}
            </div>
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
