import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';
import type { Tr } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { Button, cx } from '../ui';
import { StudyItemCard, type StudyListItem } from './StudyItemCard';

export interface StudySequentialGroup {
  id: string;
  label: string;
  items: StudyListItem[];
}

export interface StudyGroupedSection {
  id: string;
  title: Tr;
  subtitle?: Tr;
  items: StudyListItem[];
}

export interface StudyListScreenProps {
  items: StudyListItem[];
  studiedSet: Set<string>;
  sequentialGroups?: StudySequentialGroup[];
  groupedSections?: StudyGroupedSection[];
  extraRequiredIds?: string[];
  extraBottomSlot?: ReactNode;
  onStudyItem: (item: StudyListItem) => void;
  onContinue: () => void;
}

export function resolveInitialSequentialGroupIndex(
  groups: readonly { items: readonly { id: string }[] }[],
  studiedSet: ReadonlySet<string>,
): number {
  if (groups.length === 0) return 0;
  const firstIncomplete = groups.findIndex((g) =>
    g.items.some((item) => !studiedSet.has(item.id)),
  );
  return firstIncomplete === -1 ? groups.length - 1 : firstIncomplete;
}

/**
 * Reusable Stage 2 (Study List) screen.
 * - Renders study cards directly below StageFlowHeader with zero clutter or duplicate summaries.
 * - Supports a flat list (Alphabet), sequential groups (Numbers: 10 per group + 100), or thematic sections (Phase B modules).
 * - Fixed bottom Continue button stays disabled until all items in the active view/group are studied.
 */
export function StudyListScreen({
  items,
  studiedSet,
  sequentialGroups,
  groupedSections,
  extraRequiredIds,
  extraBottomSlot,
  onStudyItem,
  onContinue,
}: StudyListScreenProps) {
  const { tr } = useI18n();

  const hasSequentialGroups = Boolean(sequentialGroups && sequentialGroups.length > 0);
  const [groupIndex, setGroupIndex] = useState<number>(() =>
    sequentialGroups && sequentialGroups.length > 0
      ? resolveInitialSequentialGroupIndex(sequentialGroups, studiedSet)
      : 0,
  );

  useEffect(() => {
    if (!sequentialGroups || sequentialGroups.length === 0) return;
    setGroupIndex((prev) => Math.min(prev, sequentialGroups.length - 1));
  }, [sequentialGroups]);

  const activeGroup = hasSequentialGroups ? sequentialGroups![groupIndex] : undefined;
  const visibleItems = activeGroup ? activeGroup.items : items;
  const isFinalGroup = !activeGroup || groupIndex >= sequentialGroups!.length - 1;
  const nextGroup =
    activeGroup && !isFinalGroup ? sequentialGroups![groupIndex + 1] : undefined;

  const { studiedInView, remainingInView, canContinue } = useMemo(() => {
    const total = visibleItems.length;
    const studied = visibleItems.filter((item) => studiedSet.has(item.id)).length;
    const extraRemaining =
      !activeGroup && extraRequiredIds
        ? extraRequiredIds.filter((id) => !studiedSet.has(id)).length
        : 0;
    const remaining = Math.max(0, total - studied) + extraRemaining;
    return {
      studiedInView: studied,
      remainingInView: remaining,
      canContinue: total > 0 && remaining === 0,
    };
  }, [visibleItems, studiedSet, activeGroup, extraRequiredIds]);

  const hasRichCards = useMemo(
    () => visibleItems.some((item) => item.detailLayout === 'rich'),
    [visibleItems],
  );

  const handleSelectCard = (item: StudyListItem) => {
    onStudyItem(item);
    void speakItalian(item.audioText, 0.88, startSpeechSession()).catch(() => {});
  };

  const handleContinueClick = () => {
    if (!canContinue) return;
    if (activeGroup && !isFinalGroup) {
      setGroupIndex((idx) => Math.min(idx + 1, sequentialGroups!.length - 1));
      if (typeof window !== 'undefined') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }
    onContinue();
  };

  const continueLabel = canContinue
    ? nextGroup
      ? tr({
          bn: `পরবর্তী ধাপ: ${nextGroup.label}`,
          en: `Continue to ${nextGroup.label}`,
          it: `Continua a ${nextGroup.label}`,
        })
      : tr({
          bn: 'ড্রিলে যান',
          en: 'Continue to Drill',
          it: 'Vai all’esercizio',
        })
    : tr({
        bn: `এগিয়ে যেতে আরও ${remainingInView}টি অধ্যয়ন করুন`,
        en: `Continue (${remainingInView} remaining)`,
        it: `Continua (${remainingInView} rimanenti)`,
      });

  const continueButton = (
    <Button
      className="w-full min-h-12"
      disabled={!canContinue}
      data-testid="study-continue-btn"
      onClick={handleContinueClick}
    >
      <span className="bn">{continueLabel}</span>
      {canContinue && <ArrowRight size={17} />}
    </Button>
  );

  const fixedContinueDock =
    typeof document !== 'undefined'
      ? createPortal(
          <div
            className="fixed inset-x-0 bottom-[calc(4.5rem+var(--safe-bottom,0px))] lg:bottom-4 z-30 pointer-events-none"
            data-testid="study-fixed-dock"
          >
            <div className="mx-auto flex w-full max-w-6xl px-3.5 sm:px-6 lg:pl-[18.5rem] lg:pr-10">
              <div className="mx-auto w-full max-w-3xl pointer-events-auto">
                <div className="rounded-2xl border border-neon/25 bg-[#031917]/95 p-2.5 shadow-[0_-8px_28px_rgba(0,0,0,0.75)] backdrop-blur-xl">
                  {continueButton}
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : continueButton;

  return (
    <div className="space-y-3 pb-24">
      {activeGroup && (
        <div
          className="flex items-center justify-between gap-2 px-0.5"
          data-testid="study-group-bar"
        >
          <div className="flex items-center gap-2">
            {groupIndex > 0 && (
              <button
                type="button"
                onClick={() => setGroupIndex((idx) => Math.max(0, idx - 1))}
                aria-label={tr({
                  bn: 'আগের গ্রুপ',
                  en: 'Previous group',
                  it: 'Gruppo precedente',
                })}
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-ink-2 hover:border-neon/45 hover:text-white transition"
              >
                <ChevronLeft size={15} />
              </button>
            )}
            <span className="text-sm font-extrabold text-white tabular-nums">
              {activeGroup.label}
            </span>
            <span className="text-xs font-bold text-ink-3 tabular-nums">
              ({groupIndex + 1}/{sequentialGroups!.length})
            </span>
          </div>

          <span className="text-xs font-extrabold text-neon tabular-nums">
            {studiedInView}/{visibleItems.length}
          </span>
        </div>
      )}

      {!activeGroup && groupedSections && groupedSections.length > 0 ? (
        <div className="space-y-5">
          {groupedSections.map((sec) => {
            const secStudied = sec.items.filter((i) => studiedSet.has(i.id)).length;
            return (
              <section key={sec.id} className="space-y-2.5">
                <div className="flex items-baseline justify-between gap-2 border-b border-white/10 pb-1.5">
                  <div>
                    <h3 className="bn text-sm sm:text-base font-extrabold text-white">
                      {tr(sec.title)}
                    </h3>
                    {sec.subtitle && (
                      <p className="bn text-xs text-ink-2">{tr(sec.subtitle)}</p>
                    )}
                  </div>
                  <span className="text-xs font-extrabold text-neon tabular-nums shrink-0">
                    {secStudied}/{sec.items.length}
                  </span>
                </div>
                <div
                  className={cx(
                    'grid gap-2.5',
                    hasRichCards
                      ? 'grid-cols-1 sm:grid-cols-2'
                      : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
                  )}
                >
                  {sec.items.map((item) => (
                    <StudyItemCard
                      key={item.id}
                      item={item}
                      studied={studiedSet.has(item.id)}
                      onSelect={handleSelectCard}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div
          className={cx(
            'grid gap-2 sm:gap-2.5',
            visibleItems.length === 1
              ? 'mx-auto max-w-xs grid-cols-1'
              : hasRichCards
                ? 'grid-cols-1 sm:grid-cols-2'
                : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4',
          )}
        >
          {visibleItems.map((item) => (
            <StudyItemCard
              key={item.id}
              item={item}
              studied={studiedSet.has(item.id)}
              onSelect={handleSelectCard}
            />
          ))}
        </div>
      )}

      {extraBottomSlot}

      {fixedContinueDock}
    </div>
  );
}
