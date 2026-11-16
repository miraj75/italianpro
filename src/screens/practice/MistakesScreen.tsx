import { useState } from 'react';
import { findLesson } from '../../content/courses';
import type { QuizQuestion } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard } from '../../components/ui';
import { QuizRunner, type QuizResult } from '../../components/QuizRunner';
import { SubHeader } from '../../components/SubHeader';

interface MistakeItem {
  lessonId: string;
  question: QuizQuestion;
}

function collectMistakes(keys: string[]): MistakeItem[] {
  return keys.flatMap((key) => {
    const [lessonId = '', qid] = key.split(':');
    const question = findLesson(lessonId)?.lesson.quiz.find((q) => q.id === qid);
    return question ? [{ lessonId, question: { ...question, id: key } }] : [];
  });
}

/** Re-asks previously missed quiz questions; a correct answer clears the mistake. */
export function MistakesScreen() {
  const { state, dispatch } = useProgress();
  const { t } = useI18n();
  useStudyTimer();
  const [items] = useState(() => collectMistakes(Object.keys(state.mistakes)));
  const [done, setDone] = useState<QuizResult[] | null>(null);

  const finish = (results: QuizResult[]) => {
    const today = dayKey();
    // Question ids here are full mistake keys (`lessonId:questionId`).
    for (const r of results) {
      if (r.correct) dispatch({ type: 'clearMistake', key: r.questionId });
    }
    dispatch({ type: 'completeTask', task: 'review', today });
    setDone(results);
  };

  return (
    <div className="animate-rise">
      <SubHeader title="Review Mistakes" />
      {items.length === 0 ? (
        <GlassCard className="bn p-6 text-center text-ink-2">{t('noMistakes')}</GlassCard>
      ) : done ? (
        <GlassCard neon className="p-6 text-center">
          <p className="text-4xl font-bold text-grad-primary">
            {done.filter((r) => r.correct).length}/{done.length}
          </p>
          <p className="mt-2 font-semibold">{t('sessionDone')}</p>
          <Button className="mt-5" onClick={() => history.back()}>
            {t('continue')}
          </Button>
        </GlassCard>
      ) : (
        <QuizRunner questions={items.map((i) => i.question)} onFinish={finish} />
      )}
    </div>
  );
}
