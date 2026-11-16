import { useEffect, useState } from 'react';
import { Award, CheckCircle2, Lock, RotateCcw } from 'lucide-react';
import type { LevelId } from '../content/types';
import type { LevelAssessment } from '../content/academyTypes';
import { loadLevelAssessments } from '../content/registry';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { dayKey } from '../lib/date';
import { useProgress, useStudyTimer } from '../state/ProgressContext';
import { isLevelUnlocked } from '../state/progress';
import { Button, GlassCard } from '../components/ui';
import { SubHeader } from '../components/SubHeader';
import { QuizRunner } from '../components/QuizRunner';

export function AssessmentScreen({ level, id }: { level: LevelId; id: string }) {
  const { navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const unlocked = isLevelUnlocked(state, level);
  const [assessment, setAssessment] = useState<LevelAssessment | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let active = true;
    setLoaded(false);
    void loadLevelAssessments(level).then((list) => {
      if (!active) return;
      setAssessment(list.find((a) => a.id === id) ?? null);
      setLoaded(true);
    });
    return () => {
      active = false;
    };
  }, [level, id]);

  if (!unlocked) {
    return (
      <div className="py-16 text-center">
        <Lock className="mx-auto text-ink-3" size={40} />
        <p className="bn mt-3 text-ink-2">{t('locked')}</p>
        <Button className="mt-6" onClick={() => navigate('/courses')}>
          {t('backToCourses')}
        </Button>
      </div>
    );
  }

  if (!loaded) return <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>;
  if (!assessment) return <p className="py-10 text-center text-ink-2">Assessment not found</p>;

  const prev = state.assessments[assessment.id];

  return (
    <div className="animate-rise space-y-4">
      <SubHeader
        title={tr(assessment.title)}
        subtitle={`${assessment.level} · ${assessment.questions.length} ${t('quiz')}`}
      />

      {result !== null ? (
        <GlassCard neon={result >= assessment.passScore} className="p-6 text-center">
          <Award size={44} className={result >= assessment.passScore ? 'mx-auto text-neon' : 'mx-auto text-gold'} />
          <p className="mt-2 text-5xl font-extrabold text-grad-primary tabular-nums">{Math.round(result * 100)}%</p>
          <p className="bn mt-2 text-lg font-bold">
            {result >= assessment.passScore ? t('quizPassed') : t('quizFailed')}
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button variant="ghost" onClick={() => { setResult(null); setAttempt((a) => a + 1); }}>
              <RotateCcw size={18} /> {t('retry')}
            </Button>
            <Button onClick={() => navigate(`/level/${assessment.level}`)}>
              {t('backToCourses')}
            </Button>
          </div>
        </GlassCard>
      ) : (
        <GlassCard className="p-4">
          {prev && (
            <p className="mb-3 flex items-center gap-1.5 text-sm font-bold text-mint tabular-nums">
              <CheckCircle2 size={16} /> Best: {Math.round(prev.score * 100)}% {prev.passed ? `(${t('passedLabel')})` : ''}
            </p>
          )}
          <QuizRunner
            key={`${assessment.id}-${attempt}`}
            questions={assessment.questions}
            onFinish={(results) => {
              const score = results.filter((r) => r.correct).length / Math.max(1, results.length);
              setResult(score);
              dispatch({
                type: 'submitAssessment',
                assessmentId: assessment.id,
                score,
                passScore: assessment.passScore,
                today: dayKey(),
              });
            }}
          />
        </GlassCard>
      )}
    </div>
  );
}
