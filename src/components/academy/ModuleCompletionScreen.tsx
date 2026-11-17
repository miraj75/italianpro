import { ArrowRight, Award, BookOpen, CheckCircle2, History, RotateCcw, Sparkles, XCircle } from 'lucide-react';
import type { AcademyModuleMeta } from '../../content/academy/types';
import type { EvaluatedExamResult } from '../../lib/examEngine';
import { resolveExamOptions, useI18n } from '../../lib/i18n';
import type { AcademyModuleProgress } from '../../state/academyProgress';
import { SpeakButton } from '../SpeakButton';
import { Button, GlassCard, cx } from '../ui';

export interface ModuleCompletionScreenProps {
  meta: AcademyModuleMeta;
  nextModule?: AcademyModuleMeta;
  modProgress: AcademyModuleProgress;
  latestResult: EvaluatedExamResult | null;
  previewMode?: boolean;
  onRetakeExam: () => void;
  onReviewStudy: () => void;
  onContinueNext: (route: string) => void;
}

/**
 * Reusable Stage 5 (Completion Result) screen displaying score %, correct/mistakes summary,
 * XP reward badge, optional localized question breakdown & attempt history, and Continue to next module.
 */
export function ModuleCompletionScreen({
  meta,
  nextModule,
  modProgress,
  latestResult,
  previewMode = false,
  onRetakeExam,
  onReviewStudy,
  onContinueNext,
}: ModuleCompletionScreenProps) {
  const { lang, t, tr } = useI18n();

  const latestAttempt = modProgress.history[0];
  const displayPercentage = latestResult
    ? latestResult.percentage
    : latestAttempt
      ? Math.round(latestAttempt.score * 100)
      : Math.round(modProgress.bestScore * 100);
  const displayCorrect = latestResult?.correct ?? latestAttempt?.correct ?? meta.examQuestionCount;
  const displayTotal = latestResult?.total ?? latestAttempt?.total ?? meta.examQuestionCount;
  const displayMistakes = latestResult?.incorrect ?? latestAttempt?.incorrect ?? Math.max(0, displayTotal - displayCorrect);
  const displayXp = latestAttempt?.awardedXp ?? (latestResult ? latestResult.correct * 5 + 50 : 0);
  const bestPct = Math.round(Math.max(modProgress.bestScore * 100, displayPercentage));

  const localizedMetaTitle = tr({ bn: meta.subtitle.bn, en: meta.title, it: meta.title });
  const localizedNextTitle = nextModule
    ? tr({ bn: nextModule.subtitle.bn, en: nextModule.title, it: nextModule.title })
    : '';

  return (
    <div className="space-y-4" data-testid="module-completion-card">
      <GlassCard neon className="p-5 sm:p-6 text-center space-y-4">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-neon/50 bg-neon/15 text-neon shadow-[0_0_26px_-6px_rgba(0,245,160,0.6)]">
          <Award size={36} />
        </span>

        <div className="space-y-1.5">
          <p className="text-xs font-extrabold uppercase tracking-wider text-cyan">
            {tr({
              bn: 'ধাপ ৫ · মডিউল সম্পন্ন',
              en: 'Stage 5 · Module Completed',
              it: 'Fase 5 · Modulo completato',
            })}
          </p>
          <p className="text-5xl font-extrabold text-grad-primary tabular-nums">{displayPercentage}%</p>
          <p className="text-sm font-bold text-ink-2 tabular-nums">
            {displayCorrect} / {displayTotal} · {t('passedLabel')}
          </p>
          <h2 className="bn pt-1 text-lg sm:text-xl font-extrabold text-white">
            {previewMode
              ? tr({
                  bn: `${localizedMetaTitle} প্রিভিউ সম্পন্ন হয়েছে!`,
                  en: `${meta.title} preview completed!`,
                  it: `Anteprima «${meta.title}» completata!`,
                })
              : tr({
                  bn: `অভিনন্দন! ${localizedMetaTitle} মডিউল সম্পন্ন হয়েছে।`,
                  en: `Congratulations! You completed ${meta.title}.`,
                  it: `Complimenti! Hai completato «${meta.title}».`,
                })}
          </h2>
        </div>

        {/* XP Badge */}
        {!previewMode && displayXp > 0 && (
          <div className="inline-flex items-center gap-2 rounded-2xl border border-neon/45 bg-neon/12 px-4 py-2 text-sm font-extrabold text-neon">
            <Sparkles size={16} />
            <span>+{displayXp} XP</span>
          </div>
        )}

        {/* Score Breakdown Grid */}
        <div className="grid grid-cols-3 gap-2.5 text-center">
          <div className="rounded-2xl border border-neon/30 bg-neon/8 p-3">
            <p className="text-2xl font-extrabold text-neon tabular-nums">{displayCorrect}</p>
            <p className="bn text-xs font-semibold text-ink-2">
              {tr({ bn: 'সঠিক', en: 'Correct', it: 'Corrette' })}
            </p>
          </div>
          <div className="rounded-2xl border border-pink/30 bg-pink/8 p-3">
            <p className="text-2xl font-extrabold text-pink tabular-nums">{displayMistakes}</p>
            <p className="bn text-xs font-semibold text-ink-2">
              {tr({ bn: 'ভুল', en: 'Mistakes', it: 'Errori' })}
            </p>
          </div>
          <div className="rounded-2xl border border-gold/30 bg-gold/8 p-3">
            <p className="text-2xl font-extrabold text-gold tabular-nums">{bestPct}%</p>
            <p className="bn text-xs font-semibold text-ink-2">{t('academyBestScore')}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
          <Button variant="ghost" onClick={onReviewStudy} className="flex-1 min-h-12">
            <BookOpen size={17} />
            <span className="bn">
              {tr({ bn: 'অধ্যয়ন পর্যালোচনা', en: 'Review Study', it: 'Rivedi studio' })}
            </span>
          </Button>
          <Button variant="ghost" onClick={onRetakeExam} className="flex-1 min-h-12">
            <RotateCcw size={17} />
            <span className="bn">{t('academyRetakeExam')}</span>
          </Button>
          {nextModule && nextModule.implemented && (
            <Button
              onClick={() => onContinueNext(nextModule.route)}
              className="flex-1 min-h-12"
              data-testid="completion-continue-btn"
            >
              <span className="bn">
                {tr({
                  bn: `পরবর্তী: ${nextModule.order}. ${localizedNextTitle}`,
                  en: `Continue to ${nextModule.order}. ${nextModule.title}`,
                  it: `Continua: ${nextModule.order}. ${nextModule.title}`,
                })}
              </span>
              <ArrowRight size={18} />
            </Button>
          )}
        </div>
      </GlassCard>

      {/* Latest Answer Breakdown */}
      {latestResult && (
        <GlassCard className="p-4 sm:p-5 space-y-3">
          <h3 className="bn text-sm sm:text-base font-extrabold text-white">
            {tr({
              bn: `উত্তর পর্যালোচনা (${latestResult.correct}/${latestResult.total})`,
              en: `Answer Breakdown (${latestResult.correct}/${latestResult.total})`,
              it: `Riepilogo risposte (${latestResult.correct}/${latestResult.total})`,
            })}
          </h3>
          <div className="divide-y divide-white/10">
            {latestResult.breakdown.map((entry, idx) => {
              const localizedOpts = resolveExamOptions(entry.question, lang);
              const selectedOptText =
                entry.selectedIndex >= 0 ? (localizedOpts[entry.selectedIndex] ?? entry.selectedText) : '';
              const correctOptText = localizedOpts[entry.question.answer] ?? entry.correctText;
              const qPrefix = tr({ bn: `প্রশ্ন ${idx + 1}`, en: `Q${idx + 1}`, it: `D${idx + 1}` });
              return (
                <div key={entry.question.id} className="py-2.5 first:pt-1 last:pb-1 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <p className="bn text-xs font-bold text-ink-2">
                        {qPrefix} · {tr(entry.question.prompt)}
                      </p>
                      {entry.question.it && <p className="mt-0.5 text-sm font-extrabold text-white">{entry.question.it}</p>}
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      {entry.question.audioIt && <SpeakButton text={entry.question.audioIt} size={32} />}
                      {entry.correct ? (
                        <CheckCircle2 size={18} className="text-neon" aria-label="correct" />
                      ) : (
                        <XCircle size={18} className="text-pink" aria-label="incorrect" />
                      )}
                    </div>
                  </div>
                  <p className="bn text-xs font-semibold text-ink-2">
                    {tr({ bn: 'আপনার উত্তর:', en: 'Your answer:', it: 'Tua risposta:' })}{' '}
                    <span className={cx('font-bold', entry.correct ? 'text-neon' : 'text-pink')}>
                      {selectedOptText || '—'}
                    </span>
                    {!entry.correct && (
                      <>
                        {' · '}
                        {tr({ bn: 'সঠিক:', en: 'Correct:', it: 'Corretta:' })}{' '}
                        <span className="font-bold text-neon">{correctOptText}</span>
                      </>
                    )}
                  </p>
                  <p className="bn text-xs text-ink-3 leading-relaxed">{tr(entry.question.explanation)}</p>
                </div>
              );
            })}
          </div>
        </GlassCard>
      )}

      {/* Attempt History */}
      {modProgress.history.length > 0 && (
        <GlassCard className="p-4 sm:p-5 space-y-2.5">
          <h3 className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-white">
            <History size={17} className="text-cyan" />
            <span className="bn">{t('academyHistoryTitle')}</span>
            <span className="bn ml-auto text-xs font-bold text-ink-2 tabular-nums">
              {tr({
                bn: `চেষ্টা: ${modProgress.attempts}`,
                en: `Attempts: ${modProgress.attempts}`,
                it: `Tentativi: ${modProgress.attempts}`,
              })}
            </span>
          </h3>
          <ul className="divide-y divide-white/10">
            {modProgress.history.slice(0, 6).map((h) => (
              <li key={h.id} className="flex items-center justify-between py-2 text-xs sm:text-sm tabular-nums">
                <span className="text-ink-2 font-semibold">{h.date}</span>
                <span className="font-bold text-white">
                  {h.correct}/{h.total} ({Math.round(h.score * 100)}%)
                </span>
                <span className={cx('bn font-extrabold', h.passed ? 'text-neon' : 'text-pink')}>
                  {h.passed
                    ? t('passedLabel')
                    : tr({ bn: 'অকৃতকার্য', en: 'Fail', it: 'Non superato' })}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>
      )}
    </div>
  );
}
