import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';
import type { AcademyDrillItem } from '../../content/academy/types';
import { shuffleArray } from '../../lib/examEngine';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession, stopSpeaking } from '../../lib/speech';
import { Button, GlassCard } from '../ui';
import { AnswerFeedbackSheet } from './AnswerFeedbackSheet';
import { AudioChoiceQuestion } from './AudioChoiceQuestion';
import { MixedDrillQuestion } from './MixedDrillQuestion';

export interface SoundDrillScreenProps {
  drillItems: AcademyDrillItem[];
  distractorPool?: AcademyDrillItem[];
  alreadyCompleted: boolean;
  savedCorrect?: number;
  savedIncorrect?: number;
  savedBestScore?: number;
  previewMode?: boolean;
  onDrillComplete: (stats: { correct: number; total: number }) => void;
  onContinueToExam: () => void;
}

/**
 * Reusable Stage 3 (Interactive Drill) screen.
 * - Randomized non-repeating deck covering all configured items
 * - Auto-plays Italian audio when each question opens (cancelling prior speech cleanly)
 * - Supports MCQ, Listening, Fill-blank, Matching, and Sentence-builder items
 * - Shows bottom-sheet AnswerFeedbackSheet ("Correct!" / "Incorrect" + GOT IT)
 * - Prevents advancing or double-submitting while feedback popup is open
 * - Unlocks Stage 4 (Section Examination) upon completing the drill round
 */
export function SoundDrillScreen({
  drillItems,
  distractorPool,
  alreadyCompleted,
  savedCorrect = 0,
  savedIncorrect = 0,
  savedBestScore = 0,
  previewMode = false,
  onDrillComplete,
  onContinueToExam,
}: SoundDrillScreenProps) {
  const { tr } = useI18n();
  const [round, setRound] = useState(1);
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [drillDone, setDrillDone] = useState(alreadyCompleted);
  const [pickedOption, setPickedOption] = useState<AcademyDrillItem | null>(null);
  const [mixedResult, setMixedResult] = useState<boolean | null>(null);
  const completedRef = useRef(false);

  const deck = useMemo(() => shuffleArray(drillItems), [drillItems, round]);
  const pool = useMemo(() => distractorPool ?? drillItems, [distractorPool, drillItems]);
  const activeItem = deck[index];

  const options = useMemo(() => {
    if (!activeItem) return [];
    if (activeItem.explicitOptions && activeItem.explicitOptions.length > 0) {
      const mappedOthers: AcademyDrillItem[] = activeItem.explicitOptions.slice(0, 3).map((opt) => ({
        id: opt.id,
        audioIt: activeItem.audioIt,
        primaryLabel: opt.primaryLabel,
        secondaryLabel: opt.secondaryLabel ?? '',
        secondaryLabelTr: opt.secondaryLabelTr,
        cueBn: activeItem.cueBn,
        cueEn: activeItem.cueEn,
        feedbackDetail: activeItem.feedbackDetail,
      }));
      return shuffleArray([activeItem, ...mappedOthers]);
    }
    const others = shuffleArray(pool.filter((x) => x.id !== activeItem.id)).slice(0, 3);
    return shuffleArray([activeItem, ...others]);
  }, [activeItem, pool]);

  // Auto-play Italian audio cleanly when a question loads and stop speech on leave/unmount
  useEffect(() => {
    if (drillDone || !activeItem || !activeItem.audioIt) return;
    const sid = startSpeechSession();
    void speakItalian(activeItem.audioIt, 0.82, sid).catch(() => {});
    return () => {
      void stopSpeaking();
    };
  }, [drillDone, activeItem, index, round]);

  const handleSelectOption = (chosen: AcademyDrillItem) => {
    if (!activeItem || pickedOption !== null || mixedResult !== null) return;
    setPickedOption(chosen);
    if (chosen.id === activeItem.id) {
      setCorrectCount((c) => c + 1);
    } else {
      setIncorrectCount((c) => c + 1);
    }
  };

  const handleMixedResolve = (isCorrect: boolean) => {
    if (!activeItem || pickedOption !== null || mixedResult !== null) return;
    setMixedResult(isCorrect);
    if (isCorrect) {
      setCorrectCount((c) => c + 1);
    } else {
      setIncorrectCount((c) => c + 1);
    }
  };

  const handleAcknowledge = () => {
    if (pickedOption === null && mixedResult === null) return;
    setPickedOption(null);
    setMixedResult(null);

    if (index + 1 >= deck.length) {
      setDrillDone(true);
      void stopSpeaking();
      if (!completedRef.current) {
        completedRef.current = true;
        onDrillComplete({ correct: correctCount, total: deck.length });
      }
      return;
    }

    setIndex((i) => i + 1);
  };

  const handleRestartDrill = () => {
    completedRef.current = false;
    setRound((r) => r + 1);
    setIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setPickedOption(null);
    setMixedResult(null);
    setDrillDone(false);
  };

  if (drillDone) {
    const totalShown = correctCount + incorrectCount > 0 ? deck.length : Math.max(1, savedCorrect + savedIncorrect);
    const displayCorrect = correctCount + incorrectCount > 0 ? correctCount : savedCorrect;
    const displayIncorrect = correctCount + incorrectCount > 0 ? incorrectCount : savedIncorrect;
    const accuracy =
      correctCount + incorrectCount > 0
        ? Math.round((displayCorrect / Math.max(1, totalShown)) * 100)
        : Math.round(savedBestScore * 100);

    return (
      <div className="space-y-4" data-testid="drill-completed-card">
        <GlassCard neon className="p-5 sm:p-6 text-center space-y-4">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-neon/45 bg-neon/15 text-neon shadow-[0_0_24px_-6px_rgba(0,245,160,0.45)]">
            <CheckCircle2 size={34} />
          </span>

          <div className="space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-wider text-cyan">
              {tr({
                bn: 'ধাপ ৩ · সাউন্ড ড্রিল সম্পন্ন',
                en: 'Stage 3 · Drill Completed',
                it: 'Fase 3 · Esercizio completato',
              })}
            </p>
            <h2 className="bn text-2xl sm:text-3xl font-extrabold text-white">
              {tr({
                bn: 'ড্রিল সম্পন্ন হয়েছে',
                en: 'Drill Completed',
                it: 'Esercizio completato',
              })}
            </h2>
            <p className="bn text-sm text-ink-2">
              {previewMode
                ? tr({
                    bn: 'প্রিভিউ ড্রিল সম্পন্ন! এখন প্রিভিউ পরীক্ষায় যেতে পারেন।',
                    en: 'Preview drill completed! You can now preview the Section Exam.',
                    it: 'Anteprima esercizio completata! Ora puoi vedere l’esame di sezione.',
                  })
                : tr({
                    bn: 'অভিনন্দন! সব আইটেম শুনে অনুশীলন শেষ হয়েছে। এখন মূল সেকশন পরীক্ষা আনলক হয়েছে।',
                    en: 'Great work! You covered every drill item. Section Examination is now unlocked.',
                    it: 'Ottimo lavoro! Hai completato tutti gli esercizi. L’esame di sezione è ora sbloccato.',
                  })}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2.5 text-center">
            <div className="rounded-2xl border border-neon/30 bg-neon/8 p-3">
              <p className="text-2xl font-extrabold text-neon tabular-nums">{displayCorrect}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'সঠিক', en: 'Correct', it: 'Corrette' })}
              </p>
            </div>
            <div className="rounded-2xl border border-pink/30 bg-pink/8 p-3">
              <p className="text-2xl font-extrabold text-pink tabular-nums">{displayIncorrect}</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'ভুল', en: 'Incorrect', it: 'Errori' })}
              </p>
            </div>
            <div className="rounded-2xl border border-cyan/30 bg-cyan/8 p-3">
              <p className="text-2xl font-extrabold text-cyan tabular-nums">{accuracy}%</p>
              <p className="bn text-xs font-semibold text-ink-2">
                {tr({ bn: 'নির্ভুলতা', en: 'Accuracy', it: 'Precisione' })}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
            <Button variant="ghost" onClick={handleRestartDrill} className="flex-1 min-h-12" data-testid="drill-retry-btn">
              <RotateCcw size={17} />
              <span className="bn">
                {tr({ bn: 'আবার ড্রিল করুন', en: 'Practice Again', it: 'Ripeti esercizio' })}
              </span>
            </Button>
            <Button onClick={onContinueToExam} className="flex-1 min-h-12" data-testid="drill-continue-btn">
              <span className="bn">
                {tr({
                  bn: 'সেকশন পরীক্ষায় যান',
                  en: 'Continue to Section Exam',
                  it: 'Vai all’esame di sezione',
                })}
              </span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </GlassCard>
      </div>
    );
  }

  if (!activeItem) return null;

  const feedbackOpen = pickedOption !== null || mixedResult !== null;
  const isAnswerCorrect =
    mixedResult !== null ? mixedResult : pickedOption?.id === activeItem.id;
  const isMixedKind =
    activeItem.drillKind === 'matching' || activeItem.drillKind === 'sentence-builder';

  return (
    <div className="space-y-3">
      {isMixedKind ? (
        <MixedDrillQuestion
          key={`${activeItem.id}-${index}-${round}`}
          item={activeItem}
          questionNumber={index + 1}
          totalQuestions={deck.length}
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          disabled={feedbackOpen}
          onResolve={handleMixedResolve}
        />
      ) : (
        <AudioChoiceQuestion
          item={activeItem}
          options={options}
          questionNumber={index + 1}
          totalQuestions={deck.length}
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          disabled={feedbackOpen}
          pickedId={pickedOption?.id ?? null}
          onSelect={handleSelectOption}
        />
      )}

      <AnswerFeedbackSheet
        open={feedbackOpen}
        correct={isAnswerCorrect}
        correctAnswerLabel={(() => {
          const sec = activeItem.secondaryLabelTr
            ? tr(activeItem.secondaryLabelTr)
            : activeItem.secondaryLabel;
          return sec ? `${activeItem.primaryLabel} (${sec})` : activeItem.primaryLabel;
        })()}
        detail={activeItem.feedbackDetail}
        onAcknowledge={handleAcknowledge}
      />
    </div>
  );
}
