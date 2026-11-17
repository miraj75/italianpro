import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { AlertTriangle, ArrowRight, BookOpen, CheckCircle2, Lock } from 'lucide-react';
import type { AcademyTheoryConfig } from '../../content/academy/types';
import { useI18n } from '../../lib/i18n';
import { SpeakButton } from '../SpeakButton';
import { GlassCard, cx } from '../ui';

export interface TheoryLessonScreenProps {
  config: AcademyTheoryConfig;
  alreadyCompleted: boolean;
  previewMode?: boolean;
  onComplete: () => void;
  onContinue: () => void;
}

/**
 * Reusable Stage 1 (Theory / Study Material) screen:
 * - Dedicated scrollable Theory content container sized cleanly between fixed top chrome and fixed bottom controls
 * - Fixed bottom Continue button positioned cleanly above mobile bottom navigation
 * - Tracks live reading percentage (0–100%) strictly from container scroll position
 * - Gradually fills button background from dark muted emerald (0%) to bright neon green (100%)
 * - Never auto-completes on initial open; persists completion once scrolled to the actual bottom
 */
export function TheoryLessonScreen({
  config,
  alreadyCompleted,
  previewMode = false,
  onComplete,
  onContinue,
}: TheoryLessonScreenProps) {
  const { lang, tr } = useI18n();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const completedRef = useRef(alreadyCompleted);
  const [reachedEnd, setReachedEnd] = useState(alreadyCompleted);
  const [scrollProgress, setScrollProgress] = useState(alreadyCompleted ? 100 : 0);
  const [containerHeight, setContainerHeight] = useState<number>(480);

  useEffect(() => {
    if (alreadyCompleted) {
      completedRef.current = true;
      setReachedEnd(true);
      setScrollProgress(100);
    }
  }, [alreadyCompleted]);

  const measureContainer = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el || typeof window === 'undefined') return;
    const vh = window.innerHeight || document.documentElement.clientHeight || 800;
    const rect = el.getBoundingClientRect();
    const isDesktop = window.innerWidth >= 1024;
    // Reserve space below scroll area for the fixed Continue dock (+ mobile bottom nav when < 1024px)
    const bottomReserve = isDesktop ? 108 : 172;
    const nextHeight = Math.max(220, Math.floor(vh - Math.max(0, rect.top) - bottomReserve));
    setContainerHeight(nextHeight);
  }, []);

  useLayoutEffect(() => {
    measureContainer();
    window.addEventListener('resize', measureContainer, { passive: true });
    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && scrollContainerRef.current?.parentElement) {
      ro = new ResizeObserver(measureContainer);
      ro.observe(scrollContainerRef.current.parentElement);
    }
    return () => {
      window.removeEventListener('resize', measureContainer);
      ro?.disconnect();
    };
  }, [measureContainer]);

  const handleContainerScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
    if (maxScroll <= 0) return;

    const top = Math.max(0, el.scrollTop);
    // 12px tolerance accommodates Android sub-pixel / fractional DPR rounding
    const atBottom = top + el.clientHeight >= el.scrollHeight - 12;
    const rawPct = Math.round((top / maxScroll) * 100);
    const clampedPct = atBottom ? 100 : Math.min(99, Math.max(0, rawPct));

    if (completedRef.current) {
      setScrollProgress(100);
      return;
    }

    setScrollProgress(clampedPct);

    if (atBottom && top > 0) {
      completedRef.current = true;
      setReachedEnd(true);
      setScrollProgress(100);
      onComplete();
    }
  }, [onComplete]);

  const effectiveProgress = reachedEnd ? 100 : scrollProgress;

  const fixedContinueDock =
    typeof document !== 'undefined'
      ? createPortal(
          <div
            className="fixed inset-x-0 bottom-[calc(4.5rem+var(--safe-bottom,0px))] lg:bottom-4 z-30 pointer-events-none"
            data-testid="theory-fixed-dock"
          >
            <div className="mx-auto flex w-full max-w-6xl px-3.5 sm:px-6 lg:pl-[18.5rem] lg:pr-10">
              <div className="mx-auto w-full max-w-3xl pointer-events-auto">
                <div className="rounded-2xl border border-neon/25 bg-[#031917]/95 p-2.5 shadow-[0_-8px_28px_rgba(0,0,0,0.75)] backdrop-blur-xl space-y-1.5">
                  <div className="flex items-center justify-between gap-2 px-1 text-[11px] sm:text-xs font-bold tabular-nums">
                    {reachedEnd ? (
                      <span
                        className="bn flex items-center gap-1.5 text-neon"
                        data-testid="theory-status-label"
                      >
                        <CheckCircle2 size={14} className="shrink-0" />
                        {previewMode
                          ? tr({
                              bn: 'প্রিভিউ পাঠ ১০০% সম্পন্ন হয়েছে',
                              en: 'Preview reading 100% complete',
                              it: 'Anteprima completata al 100%',
                            })
                          : tr({
                              bn: 'পাঠ ১০০% সম্পন্ন! এখন অধ্যয়ন তালিকায় যান',
                              en: 'Lesson completed! Tap Continue below',
                              it: 'Lezione completata! Tocca Continua',
                            })}
                      </span>
                    ) : (
                      <span
                        className="bn flex items-center gap-1.5 text-ink-2"
                        data-testid="theory-status-label"
                      >
                        <Lock size={13} className="text-emerald shrink-0" />
                        {tr({
                          bn: 'সম্পূর্ণ পড়তে নিচে স্ক্রোল করুন',
                          en: 'Scroll through the lesson to continue',
                          it: 'Scorri tutta la lezione per continuare',
                        })}
                      </span>
                    )}
                    <span
                      data-testid="theory-progress-pct"
                      className={cx(
                        'font-extrabold',
                        reachedEnd ? 'text-neon' : 'text-mint/80',
                      )}
                    >
                      {effectiveProgress}%
                    </span>
                  </div>

                  <button
                    type="button"
                    disabled={!reachedEnd}
                    data-testid="theory-continue-btn"
                    onClick={() => {
                      if (!reachedEnd) return;
                      if (!completedRef.current) {
                        completedRef.current = true;
                        onComplete();
                      }
                      onContinue();
                    }}
                    className={cx(
                      'relative flex min-h-12 w-full items-center justify-center overflow-hidden rounded-full border px-5 text-sm sm:text-base font-extrabold transition-all duration-200',
                      reachedEnd
                        ? 'border-neon bg-grad-primary text-navy-950 shadow-[0_0_22px_-4px_rgba(0,245,160,0.7)] active:scale-[0.98] cursor-pointer'
                        : 'border-emerald/25 bg-[#06221d] text-ink-2 cursor-not-allowed',
                    )}
                  >
                    {/* Smooth scroll-driven emerald -> neon green fill layer */}
                    {!reachedEnd && (
                      <span
                        aria-hidden="true"
                        data-testid="theory-continue-fill"
                        className="pointer-events-none absolute inset-y-0 left-0 transition-[width] duration-150 ease-out"
                        style={{
                          width: `${effectiveProgress}%`,
                          background:
                            'linear-gradient(90deg, rgba(0, 150, 102, 0.55) 0%, rgba(0, 245, 160, 0.82) 100%)',
                        }}
                      />
                    )}
                    {reachedEnd && (
                      <span
                        aria-hidden="true"
                        data-testid="theory-continue-fill"
                        className="pointer-events-none absolute inset-0"
                        style={{
                          width: '100%',
                          background: 'linear-gradient(135deg, #00c987 0%, #00f5a0 100%)',
                        }}
                      />
                    )}

                    <span
                      className={cx(
                        'relative z-10 flex items-center justify-center gap-2',
                        reachedEnd
                          ? 'text-navy-950 font-extrabold'
                          : effectiveProgress >= 55
                            ? 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]'
                            : 'text-ink-2',
                      )}
                    >
                      {reachedEnd && <CheckCircle2 size={17} className="shrink-0" />}
                      <span className="bn">
                        {tr({
                          bn: 'অধ্যয়ন তালিকায় যান',
                          en: 'Continue to Study List',
                          it: 'Vai alla lista di studio',
                        })}
                      </span>
                      <ArrowRight size={17} className="shrink-0" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="space-y-3">
      {/* Dedicated Scrollable Theory Content Container */}
      <div
        ref={scrollContainerRef}
        onScroll={handleContainerScroll}
        data-testid="theory-scroll-container"
        style={{ height: `${containerHeight}px` }}
        className="space-y-4 overflow-y-auto overscroll-contain pr-1 pb-24 sm:pb-28"
      >
        {/* Intro Hero Card */}
        <GlassCard neon className="p-4 sm:p-5 space-y-3">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neon/35 bg-neon/12 text-neon">
              <BookOpen size={22} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-extrabold uppercase tracking-wider text-cyan">
                {tr({
                  bn: 'ধাপ ১ · তত্ত্ব ও উচ্চারণ পাঠ',
                  en: 'Stage 1 · Theory & Rules',
                  it: 'Fase 1 · Teoria e regole',
                })}
              </p>
              <h2 className="bn mt-0.5 text-lg sm:text-xl font-extrabold text-white text-balance">
                {tr(config.title)}
              </h2>
              <p className="bn mt-1 text-xs sm:text-sm font-medium text-ink-2">{tr(config.subtitle)}</p>
            </div>
          </div>

          <p className="bn text-sm sm:text-base leading-relaxed text-ink">{tr(config.intro)}</p>

          {/* Key Takeaways Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
            {config.highlights.map((h, idx) => (
              <div
                key={`${h.label}-${idx}`}
                className="rounded-xl border border-white/10 bg-white/4 px-3 py-2 text-center"
              >
                <p className="text-base sm:text-lg font-extrabold text-neon tabular-nums">{h.label}</p>
                <p className="bn text-[11px] font-semibold text-ink-2">{tr(h.caption)}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Lesson Sections */}
        {config.sections.map((section) => (
          <GlassCard key={section.id} className="p-4 sm:p-5 space-y-3.5">
            <div className="space-y-1">
              <h3 className="bn text-base sm:text-lg font-extrabold text-white">{tr(section.heading)}</h3>
              <p className="bn text-xs sm:text-sm leading-relaxed text-ink-2">{tr(section.summary)}</p>
            </div>

            {/* Rule Cards */}
            {section.rules && section.rules.length > 0 && (
              <div className="space-y-3">
                {section.rules.map((rule) => (
                  <div
                    key={rule.id}
                    className="rounded-2xl border border-white/10 bg-[#041d19]/75 p-3.5 sm:p-4 space-y-2.5"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="bn text-sm sm:text-base font-extrabold text-mint">{tr(rule.title)}</h4>
                      {rule.badge && (
                        <span className="bn text-[11px] font-bold text-cyan">{tr(rule.badge)}</span>
                      )}
                    </div>
                    <p className="bn text-xs sm:text-sm leading-relaxed text-ink">{tr(rule.body)}</p>

                    {rule.examples.length > 0 && (
                      <div className="space-y-1.5 pt-1">
                        {rule.examples.map((ex, idx) => {
                          const phoneticCue =
                            lang === 'bn'
                              ? ex.phoneticBn
                              : lang === 'it'
                                ? (ex.phoneticIt ?? ex.phoneticEn)
                                : ex.phoneticEn;
                          return (
                            <div
                              key={idx}
                              className="flex items-center justify-between gap-2.5 rounded-xl border border-white/10 bg-white/4 px-3 py-2"
                            >
                              <div className="min-w-0 flex-1">
                                <p className="text-sm sm:text-base font-extrabold text-white">
                                  {ex.it}{' '}
                                  {phoneticCue && (
                                    <span className="bn text-xs font-bold text-cyan">({phoneticCue})</span>
                                  )}
                                </p>
                                <p className="bn text-xs font-medium text-ink-2">{tr(ex.tr)}</p>
                              </div>
                              <SpeakButton text={ex.it} size={36} />
                            </div>
                          );
                        })}
                      </div>
                    )}

                    {rule.tip && (
                      <p className="bn rounded-xl border border-cyan/25 bg-cyan/8 px-3 py-2 text-xs font-semibold text-cyan">
                        {tr(rule.tip)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Reference Table */}
            {section.table && (
              <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#041b18]/80">
                <table className="w-full min-w-[280px] text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      {section.table.headers.map((head, idx) => (
                        <th key={idx} className="bn px-3 py-2.5 font-extrabold text-cyan">
                          {tr(head)}
                        </th>
                      ))}
                      <th className="px-2 py-2.5 text-right font-extrabold text-cyan">🔊</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/8">
                    {section.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-white/4">
                        {row.cells.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={cx(
                              'bn px-3 py-2 align-middle',
                              cIdx === 0
                                ? 'font-extrabold text-white whitespace-nowrap'
                                : cIdx === 1
                                  ? 'font-bold text-mint'
                                  : 'text-ink-2',
                            )}
                          >
                            {tr(cell)}
                          </td>
                        ))}
                        <td className="px-2 py-1.5 text-right align-middle">
                          {row.audioIt && <SpeakButton text={row.audioIt} size={34} />}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Common Mistakes */}
            {section.mistakes && section.mistakes.length > 0 && (
              <div className="space-y-2.5">
                {section.mistakes.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gold/25 bg-gold/6 p-3.5 space-y-1.5"
                  >
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-bold text-pink">
                      <AlertTriangle size={15} className="mt-0.5 shrink-0" />
                      <span className="bn">✗ {tr(m.wrong)}</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs sm:text-sm font-extrabold text-neon">
                      <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                      <span className="bn">✓ {tr(m.right)}</span>
                    </div>
                    <p className="bn text-xs text-ink-2 pl-5">{tr(m.explanation)}</p>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        ))}

        {/* End of lesson marker inside scrollable container */}
        <div
          data-testid="theory-end-sentinel"
          className="rounded-2xl border border-white/10 bg-white/3 px-4 py-3 text-center text-xs font-bold text-ink-2"
        >
          <span className="bn">
            {tr({
              bn: 'পাঠের শেষ প্রান্তে পৌঁছেছেন।',
              en: 'End of Theory Lesson.',
              it: 'Fine della lezione teorica.',
            })}
          </span>
        </div>
      </div>

      {fixedContinueDock}
    </div>
  );
}
