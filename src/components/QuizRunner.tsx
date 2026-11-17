import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { QuizQuestion } from '../content/types';
import { resolveExamOptions, useI18n } from '../lib/i18n';
import { Button, GlassCard, ProgressBar, cx } from './ui';

export interface QuizResult {
  questionId: string;
  correct: boolean;
  chosen?: string;
}

/** Reusable multiple-choice runner with per-question explanations. */
export function QuizRunner({
  questions,
  onFinish,
}: {
  questions: QuizQuestion[];
  onFinish: (results: QuizResult[]) => void;
}) {
  const { lang, t, tr } = useI18n();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);

  const q = questions[index];
  if (!q) return null;
  const opts = resolveExamOptions(q, lang);
  const isCorrect = selected === q.answer;

  const check = () => {
    if (selected === null || checked) return;
    setChecked(true);
    setResults((r) => [...r, { questionId: q.id, correct: selected === q.answer, chosen: opts[selected] }]);
  };

  const next = () => {
    if (index + 1 >= questions.length) {
      if (finished) return;
      setFinished(true);
      onFinish(results);
      return;
    }
    setIndex(index + 1);
    setSelected(null);
    setChecked(false);
  };

  return (
    <div className="animate-rise min-w-0 max-w-full" key={q.id}>
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={index / questions.length} />
        <span className="shrink-0 text-sm font-bold text-ink-2 tabular-nums">
          {index + 1}/{questions.length}
        </span>
      </div>
      <GlassCard className="p-4 sm:p-5">
        <p className="bn text-sm sm:text-base text-ink-2 break-words">{tr(q.prompt)}</p>
        {q.it && <p className="mt-2 text-xl sm:text-2xl font-semibold break-words">{q.it}</p>}
      </GlassCard>
      <div className="mt-4 grid gap-2.5" role="radiogroup">
        {opts.map((opt, i) => {
          const state = !checked ? (selected === i ? 'selected' : 'idle') : i === q.answer ? 'right' : selected === i ? 'wrong' : 'idle';
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={selected === i}
              disabled={checked}
              onClick={() => setSelected(i)}
              className={cx(
                'glass flex min-h-13 w-full min-w-0 items-center justify-between gap-3 px-4 py-3 text-left text-base sm:text-lg font-semibold transition',
                state === 'selected' && 'glass-neon',
                state === 'right' && 'border-neon/70 bg-neon/10',
                state === 'wrong' && 'border-pink/60 bg-pink/10',
              )}
            >
              <span className="min-w-0 flex-1 break-words">{opt}</span>
              {state === 'right' && <CheckCircle2 className="shrink-0 text-neon" size={20} />}
              {state === 'wrong' && <XCircle className="shrink-0 text-pink" size={20} />}
            </button>
          );
        })}
      </div>
      {checked && (
        <div
          className={cx('mt-4 rounded-2xl border p-4', isCorrect ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10')}
          aria-live="polite"
        >
          <p className="font-semibold break-words">{isCorrect ? t('correct') : `${t('incorrect')} — ${t('correctAnswer')}: ${opts[q.answer] ?? ''}`}</p>
          <p className="bn mt-1 text-sm text-ink-2 break-words">{tr(q.explanation)}</p>
        </div>
      )}
      <div className="mt-5">
        {checked ? (
          <Button className="w-full" onClick={next}>
            {t('continue')}
          </Button>
        ) : (
          <Button className="w-full" onClick={check} disabled={selected === null}>
            {t('check')}
          </Button>
        )}
      </div>
    </div>
  );
}
