import { Check, ChevronRight, Lock } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import type { LearningPathNode } from '../lib/courseOverview';
import { ProgressBar, cx } from './ui';

interface LearningPathTimelineProps {
  nodes: LearningPathNode[];
  onSelectNode: (node: LearningPathNode) => void;
  /** Developer Testing Mode override: allows opening locked nodes while still displaying their true locked status */
  allowLockedAccess?: boolean;
}

/**
 * Reusable single-column connected vertical learning path timeline.
 * Connects sequential module nodes along a continuous vertical track with clear
 * Emerald Neon (completed/current) and Gold-locked visual states.
 */
export function LearningPathTimeline({
  nodes,
  onSelectNode,
  allowLockedAccess = false,
}: LearningPathTimelineProps) {
  const { t, tr } = useI18n();

  return (
    <ol className="relative space-y-3.5 pl-1" aria-label={t('learningPath')}>
      {nodes.map((node, index) => {
        const Icon = node.icon;
        const isCompleted = node.status === 'completed';
        const isCurrent = node.status === 'current';
        const isLocked = node.status === 'locked';
        const canOpen = !isLocked || allowLockedAccess;
        const hasNext = index < nodes.length - 1;
        const isNextActive = hasNext && (isCompleted || nodes[index + 1]?.status !== 'locked');
        const prevSectionId = index > 0 ? nodes[index - 1]?.sectionLabel?.id : undefined;
        const showSectionHeader = Boolean(node.sectionLabel && node.sectionLabel.id !== prevSectionId);

        return (
          <li key={node.id} className="space-y-2.5">
            {showSectionHeader && node.sectionLabel && (
              <div
                className={cx(
                  'flex items-center gap-2.5 pl-1',
                  index > 0 && 'pt-2',
                )}
              >
                <span className="bn text-[11px] font-extrabold uppercase tracking-wider text-neon/90">
                  {tr(node.sectionLabel.title)}
                </span>
                <span className="h-px flex-1 bg-white/12" aria-hidden="true" />
              </div>
            )}

            <div className="relative flex items-stretch gap-3.5">
            {/* Left vertical timeline track + node marker */}
            <div className="relative flex w-12 shrink-0 flex-col items-center">
              {/* Top connector segment */}
              {index > 0 && !showSectionHeader && (
                <span
                  aria-hidden="true"
                  className={cx(
                    'absolute -top-3.5 left-1/2 h-5 w-[3px] -translate-x-1/2 rounded-full',
                    isCompleted || isCurrent
                      ? 'bg-gradient-to-b from-neon to-neon/75 shadow-[0_0_8px_rgba(0,245,160,0.45)]'
                      : 'bg-white/12',
                  )}
                />
              )}

              {/* Circular timeline node */}
              <div
                className={cx(
                  'relative z-10 mt-3 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition',
                  isCompleted &&
                    'border-neon bg-neon text-navy-950 shadow-[0_0_18px_-2px_rgba(0,245,160,0.75)]',
                  isCurrent &&
                    'border-neon bg-gradient-to-br from-[#09473a] to-[#04231e] text-neon shadow-[0_0_22px_-2px_rgba(0,245,160,0.65)] ring-4 ring-neon/15',
                  isLocked &&
                    'border-white/15 bg-[#06211d] text-gold/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
                )}
              >
                {isCompleted ? (
                  <Check size={22} strokeWidth={3} aria-label={t('completed')} />
                ) : isLocked ? (
                  <Lock size={19} strokeWidth={2.2} className="text-gold" aria-label={t('lockedLabel')} />
                ) : (
                  <Icon size={21} strokeWidth={2.1} aria-hidden="true" />
                )}

                {/* Order badge anchored to node corner */}
                <span
                  className={cx(
                    'absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-extrabold tabular-nums border',
                    isCompleted
                      ? 'border-navy-950 bg-white text-navy-950'
                      : isCurrent
                        ? 'border-neon bg-navy-950 text-neon'
                        : 'border-white/20 bg-[#041917] text-ink-2',
                  )}
                >
                  {node.order}
                </span>
              </div>

              {/* Bottom connector segment extending down to the next node */}
              {hasNext && (
                <span
                  aria-hidden="true"
                  className={cx(
                    'mt-1 w-[3px] flex-1 rounded-full',
                    isCompleted && isNextActive
                      ? 'bg-gradient-to-b from-neon to-neon/80 shadow-[0_0_10px_rgba(0,245,160,0.45)]'
                      : isCompleted
                        ? 'bg-gradient-to-b from-neon/80 to-white/15'
                        : 'bg-white/12',
                  )}
                />
              )}
            </div>

            {/* Right node content card */}
            <button
              type="button"
              disabled={!canOpen}
              onClick={() => {
                if (canOpen) onSelectNode(node);
              }}
              aria-label={`${node.order}. ${node.title} (${
                isCompleted ? t('completed') : isCurrent ? t('currentLabel') : t('lockedLabel')
              })`}
              className={cx(
                'group relative min-w-0 flex-1 rounded-[1.35rem] border p-4 text-left backdrop-blur-md transition',
                isCompleted &&
                  'border-neon/45 bg-gradient-to-br from-[#073a30]/90 via-[#052621]/90 to-[#041b18]/95 hover:border-neon/80 active:scale-[0.99]',
                isCurrent &&
                  'border-neon/80 bg-gradient-to-br from-[#0a4b3d]/95 via-[#062d26]/95 to-[#041e1b]/95 shadow-[0_10px_28px_-10px_rgba(0,245,160,0.45)] hover:brightness-110 active:scale-[0.99]',
                isLocked && !allowLockedAccess &&
                  'cursor-not-allowed border-white/10 bg-[#041b18]/75 opacity-80',
                isLocked && allowLockedAccess &&
                  'border-gold/40 bg-[#041b18]/80 hover:border-gold/75 active:scale-[0.99]',
              )}
            >
              {/* Top status row */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0 flex-wrap">
                  <span
                    className={cx(
                      'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide',
                      isCompleted && 'bg-neon/15 text-neon border border-neon/40',
                      isCurrent && 'bg-neon text-navy-950 shadow-[0_0_12px_-2px_rgba(0,245,160,0.7)]',
                      isLocked && 'bg-gold/10 text-gold border border-gold/35',
                    )}
                  >
                    {isCompleted
                      ? t('completed')
                      : isCurrent
                        ? t('currentLabel')
                        : node.upcomingPhase
                          ? `${t('lockedLabel')} · Phase ${node.upcomingPhase}`
                          : t('lockedLabel')}
                  </span>
                  {isLocked && allowLockedAccess && (
                    <span className="bn inline-flex items-center rounded-full border border-cyan/35 bg-cyan/10 px-2 py-0.5 text-[10px] font-extrabold text-cyan">
                      {t('testingOpenLabel')}
                    </span>
                  )}
                  {node.bestScorePct !== undefined && node.bestScorePct > 0 && (
                    <span className="text-[11px] font-extrabold text-cyan tabular-nums">
                      {node.bestScorePct}%
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-xs font-extrabold text-ink-2 tabular-nums">{node.progressText}</span>
                  {canOpen && (
                    <ChevronRight
                      size={18}
                      className={cx(
                        'transition-transform group-hover:translate-x-0.5',
                        isCurrent ? 'text-neon' : isLocked ? 'text-gold' : 'text-ink-2',
                      )}
                    />
                  )}
                </div>
              </div>

              {/* Title + Bengali subtitle */}
              <div className="mt-2 flex items-start gap-2.5">
                <div className="min-w-0 flex-1">
                  <h3 className={cx('text-lg leading-snug font-extrabold', isLocked ? 'text-ink-2' : 'text-white')}>
                    <span className="mr-1.5 text-neon/90 tabular-nums">{node.order}.</span>
                    {node.title}
                  </h3>
                  <p className="bn mt-0.5 text-sm font-semibold text-mint/95">{tr(node.subtitle)}</p>
                  <p className="bn mt-1 text-xs leading-relaxed text-ink-2 line-clamp-2">
                    {isLocked && node.lockedHint ? tr(node.lockedHint) : tr(node.description)}
                  </p>
                </div>
              </div>

              {/* Bottom slim progress indicator */}
              <div className="mt-3 flex items-center gap-2.5">
                <ProgressBar value={node.progressRatio} className="h-1.5 flex-1" />
                <span className="text-[11px] font-bold text-ink-2 tabular-nums">
                  {Math.round(node.progressRatio * 100)}%
                </span>
              </div>
            </button>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
