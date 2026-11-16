import { useState } from 'react';
import { Sparkles, Trophy } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { dayKey } from '../lib/date';
import { useProgress, useStudyTimer } from '../state/ProgressContext';
import { buildChallenge, CHALLENGE_SIZE } from '../state/challenge';
import { Button, GlassCard, IconTile, ScreenTitle } from '../components/ui';
import { QuizRunner, type QuizResult } from '../components/QuizRunner';

export function ChallengeScreen() {
  const { state, dispatch } = useProgress();
  const { t } = useI18n();
  useStudyTimer();
  const doneToday = state.days[dayKey()]?.tasks.includes('challenge') ?? false;
  const [questions, setQuestions] = useState<ReturnType<typeof buildChallenge> | null>(null);
  const [result, setResult] = useState<QuizResult[] | null>(null);

  const start = () => setQuestions(buildChallenge(state));
  const finish = (results: QuizResult[]) => {
    dispatch({ type: 'completeChallenge', correct: results.filter((r) => r.correct).length, today: dayKey() });
    setResult(results);
  };

  return (
    <div className="animate-rise">
      <ScreenTitle title={t('dailyChallenge')} subtitle={t('challengeSub')} />
      {result ? (
        <GlassCard neon className="p-6 text-center">
          <Trophy className="mx-auto text-gold" size={44} />
          <p className="mt-3 text-4xl font-bold text-grad-primary">
            {result.filter((r) => r.correct).length}/{result.length}
          </p>
          <p className="bn mt-2 text-ink-2">{t('challengeDone')}</p>
        </GlassCard>
      ) : questions && questions.length > 0 ? (
        <QuizRunner questions={questions} onFinish={finish} />
      ) : (
        <GlassCard className="p-6 text-center">
          <IconTile icon={Sparkles} tone="gold" size="lg" />
          {questions?.length === 0 ? (
            <p className="bn mt-4 text-ink-2">{t('notEnough')}</p>
          ) : doneToday ? (
            <p className="bn mt-4 text-ink-2">{t('challengeDone')}</p>
          ) : (
            <p className="bn mt-4 text-ink-2">
              {CHALLENGE_SIZE} · +50 XP
            </p>
          )}
          {!doneToday && questions === null && (
            <Button className="mt-5" onClick={start}>
              {t('start')}
            </Button>
          )}
          {doneToday && questions === null && (
            <Button variant="ghost" className="mt-5" onClick={start}>
              {t('retry')}
            </Button>
          )}
        </GlassCard>
      )}
    </div>
  );
}
