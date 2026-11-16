import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Heart, Lightbulb, Lock, Square, Volume2, CheckCircle2 } from 'lucide-react';
import { findLesson } from '../content/courses';
import type { Lesson } from '../content/types';
import { useRouter } from '../app/router';
import { useI18n } from '../lib/i18n';
import { dayKey } from '../lib/date';
import { speakItalian, stopSpeaking } from '../lib/speech';
import { useProgress, useStudyTimer } from '../state/ProgressContext';
import { isLessonUnlocked } from '../state/progress';
import { LESSON_PASS_SCORE } from '../content/types';
import { Button, GlassCard, Pill, ProgressBar, cx } from '../components/ui';
import { SpeakButton } from '../components/SpeakButton';
import { QuizRunner, type QuizResult } from '../components/QuizRunner';

const TABS = ['phrases', 'grammar', 'dialogue', 'quiz'] as const;
type Tab = (typeof TABS)[number];

function isTab(v: string | null): v is Tab {
  return !!v && (TABS as readonly string[]).includes(v);
}

export function LessonScreen({ lessonId }: { lessonId: string }) {
  const ref = findLesson(lessonId);
  const { state, dispatch } = useProgress();
  const { route, navigate, back } = useRouter();
  const { t, tr } = useI18n();
  const initial = route.params.get('tab');
  const [tab, setTab] = useState<Tab>(isTab(initial) ? initial : 'phrases');
  useStudyTimer();

  const lesson = ref?.lesson;
  useEffect(() => {
    if (!lesson) return;
    dispatch({ type: 'viewLessonTab', lessonId: lesson.id, tab, phraseIds: lesson.phrases.map((p) => p.id), today: dayKey() });
  }, [lesson, tab, dispatch]);

  if (!ref || !lesson) {
    return <p className="py-10 text-center text-ink-2">404</p>;
  }
  if (!isLessonUnlocked(state, ref.level.id, lesson.id)) {
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

  const viewed = state.lessons[lesson.id]?.viewed ?? [];
  const tabIndex = TABS.indexOf(tab);
  const goNext = () => setTab(TABS[Math.min(tabIndex + 1, TABS.length - 1)]!);

  return (
    <div className="animate-rise">
      <div className="mb-3 flex items-center gap-3">
        <button type="button" onClick={back} aria-label="Back" className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5">
          <ArrowLeft size={22} />
        </button>
        <p className="flex-1 font-semibold">
          {ref.level.id} · {t('unit')} {ref.unit.number} · {t('lesson')} {lesson.number}
        </p>
      </div>
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={viewed.length / TABS.length} />
        <span className="text-sm text-ink-2">
          {viewed.length}/{TABS.length}
        </span>
      </div>

      <section
        className="relative mb-4 overflow-hidden rounded-3xl border border-white/10 p-5"
        style={{ background: 'linear-gradient(135deg, rgba(0,201,135,0.25), rgba(39,223,255,0.12) 55%, rgba(168,85,247,0.18))' }}
      >
        <p className="text-xs font-semibold tracking-wider text-mint uppercase">{lesson.minutes} {t('minutes')}</p>
        <h1 className="mt-1 text-3xl font-bold">{lesson.title}</h1>
        <p className="bn text-ink-2">{tr(lesson.subtitle)}</p>
      </section>

      <div className="-mx-4 mb-5 flex gap-2 overflow-x-auto px-4 pb-1" role="tablist">
        {TABS.map((k) => (
          <Pill key={k} active={tab === k} onClick={() => setTab(k)}>
            <span className="inline-flex items-center gap-1">
              {viewed.includes(k) && tab !== k && <CheckCircle2 size={14} className="text-neon" />}
              {t(k)}
            </span>
          </Pill>
        ))}
      </div>

      {tab === 'phrases' && <PhrasesTab lesson={lesson} />}
      {tab === 'grammar' && <GrammarTab lesson={lesson} />}
      {tab === 'dialogue' && <DialogueTab lesson={lesson} />}
      {tab === 'quiz' && <QuizTab lesson={lesson} />}

      {tab !== 'quiz' && (
        <Button className="mt-6 w-full" onClick={goNext}>
          {t('next')} <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
}

function PhrasesTab({ lesson }: { lesson: Lesson }) {
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  return (
    <div className="space-y-4">
      <GlassCard className="p-4">
        <h2 className="mb-2 font-semibold">{t('objectives')}</h2>
        <ul className="bn list-inside list-disc space-y-1 text-sm text-ink-2 marker:text-neon">
          {lesson.objectives.map((o) => (
            <li key={o.en}>{tr(o)}</li>
          ))}
        </ul>
      </GlassCard>
      <h2 className="font-semibold">{t('keyPhrases')}</h2>
      <GlassCard className="divide-y divide-white/5">
        {lesson.phrases.map((p) => {
          const key = `${lesson.id}:${p.id}`;
          const saved = state.saved.includes(key);
          return (
            <div key={p.id} className="flex items-start gap-3 p-4">
              <SpeakButton text={p.it} />
              <div className="min-w-0 flex-1">
                <p className="text-lg font-semibold">{p.it}</p>
                <p className="bn text-sm text-ink-2">{tr(p.tr)}</p>
                {p.note && <p className="bn mt-1 text-xs text-ink-3">{tr(p.note)}</p>}
              </div>
              <button
                type="button"
                onClick={() => dispatch({ type: 'toggleSaved', key })}
                aria-pressed={saved}
                aria-label={t('saved')}
                className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/5"
              >
                <Heart size={20} className={saved ? 'fill-pink text-pink' : 'text-ink-2'} />
              </button>
            </div>
          );
        })}
      </GlassCard>
      {lesson.tip && (
        <div className="rounded-2xl border border-gold/40 bg-gold/8 p-4">
          <p className="flex items-center gap-2 font-semibold text-gold">
            <Lightbulb size={18} /> {t('pronTip')}
          </p>
          <p className="bn mt-1 text-sm text-ink">{tr(lesson.tip)}</p>
        </div>
      )}
    </div>
  );
}

function GrammarTab({ lesson }: { lesson: Lesson }) {
  const { tr } = useI18n();
  return (
    <div className="space-y-4">
      {lesson.grammar.map((g) => (
        <GlassCard key={g.id} className="p-5">
          <h2 className="text-lg font-semibold text-mint">{tr(g.title)}</h2>
          <p className="bn mt-2 text-ink-2">{tr(g.explanation)}</p>
          {g.table && (
            <table className="mt-4 w-full text-left">
              <tbody>
                {g.table.map((row) => (
                  <tr key={row.label + row.it} className="border-t border-white/8">
                    <td className="py-2 pr-3 text-ink-3">{row.label}</td>
                    <td className="py-2 pr-3 text-lg font-semibold">{row.it}</td>
                    <td className="bn py-2 text-sm text-ink-2">{tr(row.tr)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="mt-4 space-y-2">
            {g.examples.map((e) => (
              <div key={e.id} className="flex items-center gap-3 rounded-xl bg-navy-950/40 p-3">
                <SpeakButton text={e.it} size={34} />
                <div>
                  <p className="font-medium">{e.it}</p>
                  <p className="bn text-sm text-ink-2">{tr(e.tr)}</p>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      ))}
    </div>
  );
}

function DialogueTab({ lesson }: { lesson: Lesson }) {
  const { t, tr } = useI18n();
  const { dispatch } = useProgress();
  const [showTr, setShowTr] = useState(true);
  const [playing, setPlaying] = useState<number | null>(null);
  const [error, setError] = useState(false);
  const cancelled = useRef(false);
  const speakers = [...new Set(lesson.dialogue.lines.map((l) => l.speaker))];

  useEffect(
    () => () => {
      cancelled.current = true;
      void stopSpeaking();
    },
    [],
  );

  const playAll = async () => {
    cancelled.current = false;
    setError(false);
    try {
      for (let i = 0; i < lesson.dialogue.lines.length; i++) {
        if (cancelled.current) break;
        setPlaying(i);
        await speakItalian(lesson.dialogue.lines[i]!.it, 0.85);
      }
      // Listening counts only when the whole dialogue was heard.
      if (!cancelled.current) dispatch({ type: 'completeTask', task: 'listening', today: dayKey() });
    } catch {
      setError(true);
    }
    setPlaying(null);
  };

  const stop = () => {
    cancelled.current = true;
    void stopSpeaking();
    setPlaying(null);
  };

  return (
    <div className="space-y-4">
      <GlassCard className="p-4">
        <h2 className="font-semibold">{tr(lesson.dialogue.title)}</h2>
        <p className="bn text-sm text-ink-2">{tr(lesson.dialogue.context)}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {playing === null ? (
            <Button variant="secondary" className="min-h-10 px-4 text-sm" onClick={playAll}>
              <Volume2 size={18} /> {t('playAll')}
            </Button>
          ) : (
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={stop}>
              <Square size={16} /> {t('stop')}
            </Button>
          )}
          <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setShowTr((v) => !v)}>
            {showTr ? t('hideTranslation') : t('showTranslation')}
          </Button>
        </div>
        {error && <p className="mt-2 text-sm text-gold">{t('ttsUnavailable')}</p>}
      </GlassCard>
      <div className="space-y-3">
        {lesson.dialogue.lines.map((line, i) => {
          const right = speakers.indexOf(line.speaker) % 2 === 1;
          return (
            <div key={i} className={cx('flex', right ? 'justify-end' : 'justify-start')}>
              <div
                className={cx(
                  'max-w-[85%] rounded-2xl border p-3 transition',
                  right ? 'rounded-br-sm border-cyan/25 bg-cyan/8' : 'rounded-bl-sm border-neon/25 bg-neon/8',
                  playing === i && 'glass-neon',
                )}
              >
                <p className="text-xs font-semibold text-ink-3">{line.speaker}</p>
                <div className="flex items-start gap-2">
                  <p className="flex-1 font-medium">{line.it}</p>
                  <SpeakButton text={line.it} size={30} />
                </div>
                {showTr && <p className="bn mt-1 text-sm text-ink-2">{tr(line.tr)}</p>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function QuizTab({ lesson }: { lesson: Lesson }) {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t } = useI18n();
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState<QuizResult[] | null>(null);

  const finish = (results: QuizResult[]) => {
    dispatch({ type: 'submitQuiz', lessonId: lesson.id, results, today: dayKey() });
    setResult(results);
  };

  if (result) {
    const score = result.filter((r) => r.correct).length / result.length;
    const passed = score >= LESSON_PASS_SCORE;
    return (
      <GlassCard neon={passed} className="animate-rise p-6 text-center">
        <p className="text-5xl font-bold text-grad-primary">{Math.round(score * 100)}%</p>
        <p className="mt-1 text-sm text-ink-2">{t('score')}</p>
        <p className="bn mt-4 text-lg font-semibold">{passed ? t('quizPassed') : t('quizFailed')}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            variant="ghost"
            onClick={() => {
              setResult(null);
              setAttempt((a) => a + 1);
            }}
          >
            {t('retry')}
          </Button>
          <Button onClick={() => navigate('/courses')}>{t('backToCourses')}</Button>
        </div>
        {state.lessons[lesson.id]?.completed && !passed && <p className="mt-4 text-xs text-ink-3">{t('completed')} ✓</p>}
      </GlassCard>
    );
  }
  return <QuizRunner key={attempt} questions={lesson.quiz} onFinish={finish} />;
}
