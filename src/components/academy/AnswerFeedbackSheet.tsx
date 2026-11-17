import { createPortal } from 'react-dom';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { Tr } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { Button, cx } from '../ui';

export interface AnswerFeedbackSheetProps {
  open: boolean;
  correct: boolean;
  correctAnswerLabel: string;
  detail?: Tr;
  exampleIt?: string;
  onAcknowledge: () => void;
}

/**
 * Reusable bottom-sheet answer feedback popup shared by Sound Drill & Section Exam:
 * - Portaled to document.body at z-[70] so it overlays nav bars cleanly
 * - Blocks duplicate submissions while open via full-screen modal backdrop
 * - Green success banner + Check icon + "Correct!" + correct answer + Bengali explanation
 * - Red error banner + X icon + "Incorrect!" + prominent correct answer + Bengali explanation + optional Italian example
 * - Single "GOT IT" action button to close popup and advance cleanly
 */
export function AnswerFeedbackSheet({
  open,
  correct,
  correctAnswerLabel,
  detail,
  exampleIt,
  onAcknowledge,
}: AnswerFeedbackSheetProps) {
  const { tr } = useI18n();
  if (!open || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-end justify-center bg-black/70 backdrop-blur-sm pb-safe"
      role="dialog"
      aria-modal="true"
      aria-live="assertive"
      data-testid="answer-feedback-sheet"
    >
      <div
        className={cx(
          'w-full max-w-xl rounded-t-3xl border-t-2 px-5 pt-5 pb-8 shadow-[0_-16px_48px_rgba(0,0,0,0.85)]',
          correct ? 'border-neon bg-[#052d22]' : 'border-red-500 bg-[#2e0b14]',
        )}
      >
        <div className="mx-auto mb-3.5 h-1 w-10 rounded-full bg-white/25" aria-hidden="true" />

        <div className="flex items-start gap-3.5">
          <span
            className={cx(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border',
              correct
                ? 'border-neon/60 bg-neon/20 text-neon'
                : 'border-red-400/60 bg-red-500/20 text-red-400',
            )}
          >
            {correct ? <CheckCircle2 size={28} /> : <XCircle size={28} />}
          </span>

          <div className="min-w-0 flex-1 space-y-1.5">
            <h3
              className={cx(
                'bn text-xl font-extrabold',
                correct ? 'text-neon' : 'text-red-400',
              )}
            >
              {correct
                ? tr({ bn: 'সঠিক হয়েছে!', en: 'Correct!', it: 'Corretto!' })
                : tr({ bn: 'সঠিক হয়নি!', en: 'Incorrect!', it: 'Sbagliato!' })}
            </h3>

            <p className="text-sm sm:text-base font-extrabold text-white">
              {tr({ bn: 'সঠিক উত্তর:', en: 'Correct answer:', it: 'Risposta corretta:' })}{' '}
              <span className={cx(correct ? 'text-mint' : 'text-neon')}>{correctAnswerLabel}</span>
            </p>

            {detail && (
              <p className="bn text-xs sm:text-sm leading-relaxed text-ink">
                {tr(detail)}
              </p>
            )}

            {exampleIt && (
              <div className="rounded-xl border border-white/12 bg-black/25 px-3 py-1.5 text-xs font-bold text-cyan">
                {tr({ bn: 'উদাহরণ:', en: 'Example:', it: 'Esempio:' })}{' '}
                <span className="text-white">{exampleIt}</span>
              </div>
            )}
          </div>
        </div>

        <Button
          onClick={onAcknowledge}
          data-testid="feedback-got-it-btn"
          className={cx(
            'mt-5 w-full min-h-12 font-extrabold tracking-wide',
            !correct &&
              '!bg-none !bg-red-500 !text-white !shadow-[0_0_20px_-4px_rgba(239,68,68,0.65)] hover:!bg-red-400',
          )}
        >
          <span className="bn">{tr({ bn: 'বুঝেছি', en: 'GOT IT', it: 'HO CAPITO' })}</span>
        </Button>
      </div>
    </div>,
    document.body,
  );
}
