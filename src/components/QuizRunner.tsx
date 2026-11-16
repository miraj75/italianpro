import { useState } from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { QuizQuestion } from '../content/types';
import { useI18n } from '../lib/i18n';
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
  const { t, tr } = useI18n();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [finished, setFinished] = useState(false);
  const [results, setResults] = useState<QuizResult[]>([]);

  const q = questions[index];
  if (!q) return null;
  const isCorrect = selected === q.answer;

  const check = () => {
    if (selected === null || checked) return;
    setChecked(true);
    setResults((r) => [...r, { questionId: q.id, correct: selected === q.answer, chosen: q.options[selected] }]);
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
    <div className="animate-rise" key={q.id}>
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={index / questions.length} />
        <span className="shrink-0 text-sm text-ink-2">
          {index + 1}/{questions.length}
        </span>
      </div>
      <GlassCard className="p-5">
        <p className="bn text-ink-2">{tr(q.prompt)}</p>
        {q.it && <p className="mt-2 text-2xl font-semibold">{q.it}</p>}
      </GlassCard>
      <div className="mt-4 grid gap-3" role="radiogroup">
        {q.options.map((opt, i) => {
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
                'glass flex min-h-14 items-center justify-between px-5 text-left text-lg transition',
                state === 'selected' && 'glass-neon',
                state === 'right' && 'border-neon/70 bg-neon/10',
                state === 'wrong' && 'border-pink/60 bg-pink/10',
              )}
            >
              <span>{opt}</span>
              {state === 'right' && <CheckCircle2 className="text-neon" size={22} />}
              {state === 'wrong' && <XCircle className="text-pink" size={22} />}
            </button>
          );
        })}
      </div>
      {checked && (
        <div
          className={cx('mt-4 rounded-2xl border p-4', isCorrect ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10')}
          aria-live="polite"
        >
          <p className="font-semibold">{isCorrect ? t('correct') : `${t('incorrect')} — ${t('correctAnswer')}: ${q.options[q.answer]}`}</p>
          <p className="bn mt-1 text-sm text-ink-2">{tr(q.explanation)}</p>
        </div>
      )}
      <div className="mt-6">
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
