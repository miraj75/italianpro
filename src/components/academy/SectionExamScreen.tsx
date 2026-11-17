import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  GraduationCap,
  RotateCcw,
  Volume2,
} from 'lucide-react';
import type { AcademyExamQuestion, AcademyModuleId } from '../../content/academy/types';
import { findAcademyModule } from '../../content/academy/curriculum';
import {
  createExamAttemptId,
  evaluateExamAttempt,
  generateAcademyModuleExam,
  type EvaluatedExamResult,
} from '../../lib/examEngine';
import { resolveExamOptions, useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession, stopSpeaking } from '../../lib/speech';
import { SpeakButton } from '../SpeakButton';
import { Button, GlassCard, ProgressBar, cx } from '../ui';
import { AnswerFeedbackSheet } from './AnswerFeedbackSheet';

export interface SectionExamScreenProps {
  moduleId: AcademyModuleId;
  previewMode?: boolean;
  onAttemptFailed: (result: EvaluatedExamResult) => void;
  onAttemptPassed: (result: EvaluatedExamResult) => void;
  onReviewStudy: () => void;
}

/**
 * Reusable Stage 4 (Section Examination) screen using audio-first Sound Drill interaction:
 * - Automatically plays Italian audio on each question load + provides Replay Sound button
 * - Selecting an option immediately opens AnswerFeedbackSheet (no separate Check button)
 * - Strictly renders localizedOptions, phoneticCue, and explanation in the active language (bn/en/it)
 * - Immediately stops exam & shows failure result if mistakes exceed max allowed (3)
 */
export function SectionExamScreen({
  moduleId,
  previewMode = false,
  onAttemptFailed,
  onAttemptPassed,
  onReviewStudy,
}: SectionExamScreenProps) {
  const { lang, tr } = useI18n();
  const meta = findAcademyModule(moduleId, 'A1');

  const [attemptSeed, setAttemptSeed] = useState(1);
  const attemptId = useMemo(() => createExamAttemptId(moduleId), [moduleId, attemptSeed]);

  const [questions, setQuestions] = useState<AcademyExamQuestion[]>(() =>
    generateAcademyModuleExam(moduleId, Math.random, 'A1'),
  );

  useEffect(() => {
    setQuestions(generateAcademyModuleExam(moduleId, Math.random, 'A1'));
  }, [moduleId, attemptSeed]);

  const [index, setIndex] = useState(0);
  const [pickedIndex, setPickedIndex] = useState<number | null>(null);
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [mistakesSoFar, setMistakesSoFar] = useState(0);
  const [failedResult, setFailedResult] = useState<EvaluatedExamResult | null>(null);
  const [audioWarning, setAudioWarning] = useState(false);
  const submittedRef = useRef<string | null>(null);

  const maxAllowedMistakes = meta?.maxIncorrect ?? 3;
  const activeQuestion = questions[index];
  const spokenText = activeQuestion ? (activeQuestion.audioIt ?? activeQuestion.it ?? '') : '';

  // Automatically play Italian audio when a question loads and cancel on change/unmount
  useEffect(() => {
    if (failedResult || !activeQuestion || !spokenText) return;
    setAudioWarning(false);
    const sid = startSpeechSession();
    void speakItalian(spokenText, 0.84, sid).catch((err) => {
      if (err instanceof Error && err.message === 'speech-cancelled') return;
      setAudioWarning(true);
    });
    return () => {
      void stopSpeaking();
    };
  }, [failedResult, activeQuestion, spokenText, index, attemptSeed]);

  if (!meta) return null;

  const handleRestartExam = () => {
    void stopSpeaking();
    submittedRef.current = null;
    setAttemptSeed((s) => s + 1);
    setIndex(0);
    setPickedIndex(null);
    setSelections({});
    setMistakesSoFar(0);
    setFailedResult(null);
    setAudioWarning(false);
  };

  if (failedResult) {
    const missedQuestions = failedResult.breakdown.filter((b) => !b.correct && b.selectedIndex >= 0);
    return (
      <div className="space-y-4" data-testid="exam-failed-card">
        <GlassCard className="p-5 sm:p-6 text-center space-y-4 border-pink/40">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-pink/50 bg-pink/15 text-pink">
            <AlertTriangle size={34} />
          </span>

          <div className="space-y-1.5">
            <p className="text-xs font-extrabold uppercase tracking-wider text-pink">
              {tr({
                bn: 'পরীক্ষায় উত্তীর্ণ হওয়া যায়নি',
                en: 'Section Exam Not Passed',
                it: 'Esame di sezione non superato',
              })}
            </p>
            <p className="text-4xl font-extrabold text-pink tabular-nums">{failedResult.percentage}%</p>
            <p className="text-sm font-bold text-white tabular-nums">
              {tr({
                bn: `সঠিক: ${failedResult.correct}/${failedResult.total} · ভুল: ${failedResult.incorrect} (সর্বোচ্চ অনুমতি: ${failedResult.maxIncorrect})`,
                en: `Correct: ${failedResult.correct}/${failedResult.total} · Mistakes: ${failedResult.incorrect} (max ${failedResult.maxIncorrect} allowed)`,
                it: `Corrette: ${failedResult.correct}/${failedResult.total} · Errori: ${failedResult.incorrect} (massimo ${failedResult.maxIncorrect})`,
              })}
            </p>
            <p className="bn text-xs sm:text-sm text-ink-2 pt-1">
              {tr({
                bn: 'ভুল ৩টির বেশি হওয়ায় পরীক্ষা এখানেই শেষ হয়েছে এবং পরবর্তী মডিউল এখনও আনলক হয়নি। আপনার থিওরি, অধ্যয়ন ও ড্রিল অগ্রগতি সংরক্ষিত আছে—আবার নতুন প্রশ্নে পরীক্ষা দিন।',
                en: 'More than 3 mistakes ends the exam immediately and keeps the next module locked. Your Theory, Study, and Drill progress are preserved—restart for a fresh randomized exam.',
                it: 'Più di 3 errori terminano subito l’esame e mantengono bloccato il modulo successivo. I tuoi progressi in Teoria, Studio ed Esercizi restano salvati: riprova con nuove domande.',
              })}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="rounded-2xl border border-neon/30 bg-neon/8 p-3">
              <p className="text-xl font-extrabold text-neon tabular-nums">{failedResult.correct}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'সঠিক', en: 'Correct', it: 'Corrette' })}
              </p>
            </div>
            <div className="rounded-2xl border border-pink/35 bg-pink/10 p-3">
              <p className="text-xl font-extrabold text-pink tabular-nums">{failedResult.incorrect}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'ভুল', en: 'Mistakes', it: 'Errori' })}
              </p>
            </div>
            <div className="rounded-2xl border border-gold/30 bg-gold/8 p-3">
              <p className="text-xl font-extrabold text-gold tabular-nums">{failedResult.maxIncorrect}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'সর্বোচ্চ ভুল', en: 'Max Allowed', it: 'Massimo errori' })}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <Button variant="ghost" onClick={onReviewStudy} className="flex-1 min-h-12">
              <BookOpen size={17} />
              <span className="bn">
                {tr({ bn: 'তালিকা পুনরায় দেখুন', en: 'Review Study List', it: 'Rivedi lo studio' })}
              </span>
            </Button>
            <Button onClick={handleRestartExam} className="flex-1 min-h-12" data-testid="exam-restart-btn">
              <RotateCcw size={17} />
              <span className="bn">
                {tr({ bn: 'নতুন প্রশ্নে পরীক্ষা দিন', en: 'Restart Exam', it: 'Ripeti esame' })}
              </span>
            </Button>
          </div>
        </GlassCard>

        {missedQuestions.length > 0 && (
          <GlassCard className="p-4 sm:p-5 space-y-2.5">
            <h3 className="bn text-sm sm:text-base font-extrabold text-white">
              {tr({
                bn: `ভুল উত্তরগুলোর পর্যালোচনা (${missedQuestions.length})`,
                en: `Review Missed Questions (${missedQuestions.length})`,
                it: `Revisione delle risposte errate (${missedQuestions.length})`,
              })}
            </h3>
            <div className="divide-y divide-white/10">
              {missedQuestions.map((entry) => {
                const localizedOpts = resolveExamOptions(entry.question, lang);
                const selectedOptText =
                  entry.selectedIndex >= 0 ? (localizedOpts[entry.selectedIndex] ?? entry.selectedText) : '';
                const correctOptText = localizedOpts[entry.question.answer] ?? entry.correctText;
                return (
                  <div key={entry.question.id} className="py-2.5 space-y-1 text-xs">
                    <div className="flex items-start justify-between gap-2">
                      <p className="bn font-bold text-ink">{tr(entry.question.prompt)}</p>
                      {entry.question.audioIt && <SpeakButton text={entry.question.audioIt} size={32} />}
                    </div>
                    <p className="text-ink-2">
                      {tr({ bn: 'আপনার উত্তর:', en: 'Yours:', it: 'Tua risposta:' })}{' '}
                      <span className="font-bold text-pink">{selectedOptText || '—'}</span>
                      {' · '}
                      {tr({ bn: 'সঠিক:', en: 'Correct:', it: 'Corretta:' })}{' '}
                      <span className="font-bold text-neon">{correctOptText}</span>
                    </p>
                    <p className="bn text-ink-2">{tr(entry.question.explanation)}</p>
                  </div>
                );
              })}
            </div>
          </GlassCard>
        )}
      </div>
    );
  }

  if (!activeQuestion) return null;

  const localizedOptions = resolveExamOptions(activeQuestion, lang);
  const isAnswerCorrect = pickedIndex !== null && pickedIndex === activeQuestion.answer;
  const correctAnswerLabel = localizedOptions[activeQuestion.answer] ?? '';

  const handleReplaySound = () => {
    if (!spokenText) return;
    setAudioWarning(false);
    const sid = startSpeechSession();
    void speakItalian(spokenText, 0.84, sid).catch((err) => {
      if (err instanceof Error && err.message === 'speech-cancelled') return;
      setAudioWarning(true);
    });
  };

  const handleSelectOption = (optionIndex: number) => {
    if (pickedIndex !== null || submittedRef.current === attemptId) return;
    setPickedIndex(optionIndex);
    setSelections((prev) => ({ ...prev, [activeQuestion.id]: optionIndex }));
    if (optionIndex !== activeQuestion.answer) {
      setMistakesSoFar((m) => m + 1);
    }
  };

  const finalizeFailure = (finalSelections: Record<string, number>) => {
    if (submittedRef.current === attemptId) return;
    submittedRef.current = attemptId;
    void stopSpeaking();

    const evaluated = evaluateExamAttempt({
      attemptId,
      moduleId,
      questions,
      selections: finalSelections,
      maxIncorrect: maxAllowedMistakes,
    });
    const actualCorrect = Object.entries(finalSelections).filter(([qId, idx]) => {
      const q = questions.find((item) => item.id === qId);
      return q ? idx === q.answer : false;
    }).length;
    const recordedMistakes = Object.entries(finalSelections).filter(([qId, idx]) => {
      const q = questions.find((item) => item.id === qId);
      return q ? idx !== q.answer : false;
    }).length;

    const immediateFailResult: EvaluatedExamResult = {
      ...evaluated,
      correct: actualCorrect,
      incorrect: recordedMistakes,
      passed: false,
    };

    onAttemptFailed(immediateFailResult);
    setFailedResult(immediateFailResult);
  };

  const handleAcknowledgeFeedback = () => {
    if (pickedIndex === null) return;
    const nextSelections = { ...selections, [activeQuestion.id]: pickedIndex };
    setPickedIndex(null);

    if (mistakesSoFar > maxAllowedMistakes) {
      finalizeFailure(nextSelections);
      return;
    }

    if (index + 1 >= questions.length) {
      if (submittedRef.current === attemptId) return;
      submittedRef.current = attemptId;
      void stopSpeaking();

      const evaluated = evaluateExamAttempt({
        attemptId,
        moduleId,
        questions,
        selections: nextSelections,
        maxIncorrect: maxAllowedMistakes,
      });

      if (evaluated.passed) {
        onAttemptPassed(evaluated);
      } else {
        onAttemptFailed(evaluated);
        setFailedResult(evaluated);
      }
      return;
    }

    setIndex((i) => i + 1);
  };

  const mistakeBadgeColor =
    mistakesSoFar > maxAllowedMistakes
      ? 'border-red-500/60 bg-red-500/15 text-red-400'
      : mistakesSoFar >= maxAllowedMistakes
        ? 'border-gold/50 bg-gold/12 text-gold'
        : 'border-neon/35 bg-neon/10 text-neon';

  const exampleSnippet =
    activeQuestion.audioIt && activeQuestion.audioIt !== correctAnswerLabel
      ? activeQuestion.audioIt
      : undefined;

  return (
    <div className="space-y-3">
      <GlassCard neon className="p-3.5 sm:p-4 space-y-3" key={activeQuestion.id}>
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold tabular-nums">
            <span className="flex items-center gap-1.5 text-cyan">
              <GraduationCap size={14} />
              <span>
                {tr({
                  bn: `প্রশ্ন ${index + 1} / ${questions.length}`,
                  en: `Question ${index + 1} of ${questions.length}`,
                  it: `Domanda ${index + 1} di ${questions.length}`,
                })}
              </span>
              {previewMode && (
                <span className="text-gold">
                  ({tr({ bn: 'প্রিভিউ', en: 'Preview', it: 'Anteprima' })})
                </span>
              )}
            </span>

            <span
              data-testid="exam-mistakes-counter"
              className={cx('rounded-lg border px-2 py-0.5 text-[11px] font-extrabold', mistakeBadgeColor)}
            >
              {tr({
                bn: `ভুল: ${mistakesSoFar}/${maxAllowedMistakes}`,
                en: `Mistakes: ${mistakesSoFar}/${maxAllowedMistakes}`,
                it: `Errori: ${mistakesSoFar}/${maxAllowedMistakes}`,
              })}
            </span>
          </div>

          <ProgressBar
            value={(index + (pickedIndex !== null ? 1 : 0)) / Math.max(1, questions.length)}
            className="h-1.5"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-2xl border border-neon/25 bg-white/5 p-3">
          <div className="min-w-0 flex-1 space-y-1">
            <p className="bn text-sm sm:text-base font-bold text-ink-2">{tr(activeQuestion.prompt)}</p>
            {activeQuestion.phoneticCue && (
              <p className="bn text-base sm:text-lg font-extrabold text-mint">
                {tr(activeQuestion.phoneticCue)}
              </p>
            )}
            {activeQuestion.it && (
              <p className="text-xl sm:text-2xl font-extrabold text-white">{activeQuestion.it}</p>
            )}
          </div>

          {spokenText && (
            <Button
              type="button"
              variant="ghost"
              data-testid="exam-replay-btn"
              onClick={handleReplaySound}
              className="min-h-10 shrink-0 border-neon/40 bg-neon/10 px-3.5 text-xs sm:text-sm text-neon hover:bg-neon/20"
            >
              <Volume2 size={16} />
              <span>{tr({ bn: 'আবার শুনুন', en: 'Replay Sound', it: 'Riascolta' })}</span>
            </Button>
          )}
        </div>

        {audioWarning && (
          <p className="bn rounded-xl border border-gold/35 bg-gold/10 px-3 py-2 text-xs font-semibold text-gold">
            {tr({
              bn: 'এই ডিভাইসে সরাসরি ভয়েস প্লেব্যাক পাওয়া যাচ্ছে না; প্রশ্ন দেখে সঠিক উত্তর বাছুন।',
              en: 'Device voice playback is unavailable here—use the question cue above to answer.',
              it: 'Sintesi vocale non disponibile: usa il testo della domanda sopra.',
            })}
          </p>
        )}

        <div className="grid gap-2 pt-0.5">
          {localizedOptions.map((opt, i) => {
            const showOutcome = pickedIndex !== null;
            const isRight = i === activeQuestion.answer;
            const isPicked = pickedIndex === i;
            return (
              <button
                key={`${activeQuestion.id}-${opt}-${i}`}
                type="button"
                disabled={showOutcome}
                data-testid={`exam-option-${i}`}
                data-correct={isRight ? 'true' : 'false'}
                onClick={() => handleSelectOption(i)}
                className={cx(
                  'glass flex min-h-12 items-center justify-between px-4 py-2 text-left text-base font-bold transition active:scale-[0.99]',
                  !showOutcome && 'hover:border-neon/60 hover:bg-neon/8',
                  showOutcome && isRight && 'border-neon bg-neon/18 shadow-[0_0_20px_-6px_rgba(0,245,160,0.65)]',
                  showOutcome && isPicked && !isRight && 'border-red-500 bg-red-500/18',
                  showOutcome && !isPicked && !isRight && 'opacity-55',
                )}
              >
                <span className="bn">{opt}</span>
              </button>
            );
          })}
        </div>
      </GlassCard>

      <AnswerFeedbackSheet
        open={pickedIndex !== null}
        correct={isAnswerCorrect}
        correctAnswerLabel={correctAnswerLabel}
        detail={activeQuestion.explanation}
        exampleIt={exampleSnippet}
        onAcknowledge={handleAcknowledgeFeedback}
      />
    </div>
  );
}
