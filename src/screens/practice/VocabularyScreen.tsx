import { useState } from 'react';
import { findLesson } from '../../content/courses';
import type { Phrase } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { dueCards } from '../../state/progress';
import { Button, GlassCard, ProgressBar } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';

export function phraseByKey(key: string): Phrase | undefined {
  const [lessonId = '', phraseId] = key.split(':');
  return findLesson(lessonId)?.lesson.phrases.find((p) => p.id === phraseId);
}

/** Flashcard review of due cards: Bengali/English prompt → recall the Italian. */
export function VocabularyScreen() {
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();
  // Snapshot the queue so cards don't vanish mid-session as they're rescheduled.
  const [queue] = useState(() => dueCards(state).filter((k) => phraseByKey(k)));
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const key = queue[index];
  const phrase = key ? phraseByKey(key) : undefined;

  const answer = (remembered: boolean) => {
    if (!key) return;
    const today = dayKey();
    dispatch({ type: 'reviewCard', key, remembered, today });
    if (index + 1 >= queue.length) dispatch({ type: 'completeTask', task: 'vocab', today });
    setIndex(index + 1);
    setRevealed(false);
  };

  return (
    <div className="animate-rise">
      <SubHeader title="Vocabulary" subtitle={`${Object.keys(state.cards).length} cards`} />
      {queue.length === 0 && <GlassCard className="bn p-6 text-center text-ink-2">{t('noDue')}</GlassCard>}
      {queue.length > 0 && !phrase && <GlassCard className="p-6 text-center text-lg font-semibold">{t('sessionDone')} ✓</GlassCard>}
      {phrase && (
        <>
          <div className="mb-4 flex items-center gap-3">
            <ProgressBar value={index / queue.length} />
            <span className="text-sm text-ink-2">
              {index + 1}/{queue.length}
            </span>
          </div>
          <GlassCard neon className="flex min-h-64 flex-col items-center justify-center p-6 text-center">
            <p className="bn text-xl">{tr(phrase.tr)}</p>
            {revealed ? (
              <div className="animate-rise mt-6 flex flex-col items-center gap-3">
                <p className="text-3xl font-bold text-mint">{phrase.it}</p>
                <SpeakButton text={phrase.it} size={48} />
              </div>
            ) : (
              <p className="mt-6 text-sm text-ink-3">?</p>
            )}
          </GlassCard>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {revealed ? (
              <>
                <Button variant="ghost" onClick={() => answer(false)}>
                  {t('forgot')}
                </Button>
                <Button onClick={() => answer(true)}>{t('remembered')}</Button>
              </>
            ) : (
              <Button className="col-span-2" onClick={() => setRevealed(true)}>
                {t('reveal')}
              </Button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
