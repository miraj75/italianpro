import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Search } from 'lucide-react';
import type { Tr } from '../../content/types';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { SpeakButton } from '../SpeakButton';
import { Button, GlassCard, ProgressBar, cx } from '../ui';
import { StudyItemCard, type StudyListItem } from './StudyItemCard';

export interface StudyGroupOption {
  id: string;
  label: string;
}

export interface StudyListScreenProps {
  title?: Tr;
  items: StudyListItem[];
  studiedSet: Set<string>;
  groups?: StudyGroupOption[];
  searchPlaceholder?: string;
  enableStepper?: boolean;
  onStudyItem: (item: StudyListItem) => void;
  onContinue: () => void;
}

/**
 * Reusable Stage 2 (Study List) screen.
 * Items are NEVER auto-marked as studied on render—only when the learner taps/opens an item.
 * Displays compact Studied / Remaining progress directly inside the spotlight card,
 * strictly separates bn / en / it strings, and gates Continue until every required item is studied.
 */
export function StudyListScreen({
  items,
  studiedSet,
  groups,
  searchPlaceholder,
  enableStepper = false,
  onStudyItem,
  onContinue,
}: StudyListScreenProps) {
  const { lang, tr } = useI18n();
  const [selectedId, setSelectedId] = useState<string>(items[0]?.id ?? '');
  const [group, setGroup] = useState<string>(groups?.[0]?.id ?? 'all');
  const [query, setQuery] = useState('');

  const total = items.length;
  const studiedCount = useMemo(
    () => items.filter((item) => studiedSet.has(item.id)).length,
    [items, studiedSet],
  );
  const remainingCount = Math.max(0, total - studiedCount);
  const pct = total > 0 ? Math.round((studiedCount / total) * 100) : 0;
  const allStudied = total > 0 && remainingCount === 0;

  const activeIdx = Math.max(
    0,
    items.findIndex((i) => i.id === selectedId),
  );
  const activeItem = items[activeIdx] ?? items[0];

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      if (!q && groups && group !== 'all' && item.group !== group) return false;
      if (!q) return true;
      return (
        item.primary.toLowerCase().includes(q) ||
        item.italianLabel.toLowerCase().includes(q) ||
        item.phoneticEn.toLowerCase().includes(q) ||
        item.phoneticBn.includes(q) ||
        item.exampleIt.toLowerCase().includes(q) ||
        (item.meaningEn?.toLowerCase().includes(q) ?? false) ||
        (item.meaningBn?.includes(q) ?? false)
      );
    });
  }, [items, groups, group, query]);

  const handleOpenItem = (item: StudyListItem, playAudio = true) => {
    setSelectedId(item.id);
    onStudyItem(item);
    if (playAudio) {
      void speakItalian(item.audioText, 0.88, startSpeechSession()).catch(() => {});
    }
  };

  const renderPrimaryCue = (item: StudyListItem) => {
    if (lang === 'bn') {
      return (
        <>
          <p className="bn mt-0.5 text-sm sm:text-base font-extrabold text-white">
            বাংলা উচ্চারণ: {item.phoneticBn}
          </p>
          {item.meaningBn && (
            <p className="bn text-xs font-semibold text-ink-2">{item.meaningBn}</p>
          )}
        </>
      );
    }
    if (lang === 'it') {
      return (
        <>
          <p className="mt-0.5 text-sm sm:text-base font-extrabold text-white">
            {item.phoneticIt ?? item.phoneticEn}
          </p>
          {item.meaningIt && <p className="text-xs font-semibold text-ink-2">{item.meaningIt}</p>}
        </>
      );
    }
    return (
      <>
        <p className="mt-0.5 text-sm sm:text-base font-extrabold text-white">
          Pronunciation: {item.phoneticEn}
        </p>
        {item.meaningEn && <p className="text-xs font-semibold text-ink-2">{item.meaningEn}</p>}
      </>
    );
  };

  const activeGuide = activeItem
    ? lang === 'bn'
      ? (activeItem.guideBn ?? activeItem.guideEn)
      : lang === 'it'
        ? (activeItem.guideIt ?? activeItem.guideEn)
        : activeItem.guideEn
    : undefined;

  const activeExamplePhonetic = activeItem
    ? lang === 'bn'
      ? activeItem.examplePhoneticBn
      : activeItem.examplePhoneticEn
    : undefined;

  return (
    <div className="space-y-3">
      {/* Active Item Inspector with slim integrated Study Progress Strip */}
      {activeItem && (
        <GlassCard neon={allStudied} className="p-3.5 sm:p-4 space-y-2.5">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between gap-2 text-[11px] sm:text-xs font-bold tabular-nums">
              <span className="bn text-mint">
                {tr({
                  bn: `অধ্যয়ন: ${studiedCount}/${total} · বাকি: ${remainingCount}`,
                  en: `Studied: ${studiedCount}/${total} · Remaining: ${remainingCount}`,
                  it: `Studiati: ${studiedCount}/${total} · Rimanenti: ${remainingCount}`,
                })}
              </span>
              <span className="text-neon">{pct}%</span>
            </div>
            <ProgressBar value={studiedCount / Math.max(1, total)} className="h-1.5" />
          </div>

          <div className="flex items-start justify-between gap-3 pt-0.5">
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-neon/45 bg-gradient-to-br from-neon/20 to-emerald/10 shadow-[0_0_20px_-6px_rgba(0,245,160,0.45)] tabular-nums">
                <span className="text-2xl font-extrabold text-white leading-none">
                  {activeItem.primary}
                  {activeItem.secondary && (
                    <span className="ml-0.5 text-lg font-bold text-mint">{activeItem.secondary}</span>
                  )}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-extrabold uppercase tracking-wide text-cyan truncate">
                  {activeItem.categoryLabel ? `${activeItem.categoryLabel} · ` : ''}
                  {tr({ bn: 'ইতালীয়:', en: 'Italian:', it: 'Italiano:' })} &ldquo;{activeItem.italianLabel}&rdquo;
                </p>
                {renderPrimaryCue(activeItem)}
              </div>
            </div>
            <SpeakButton text={activeItem.audioText} size={42} />
          </div>

          {activeGuide && (
            <p className="bn text-xs sm:text-sm leading-relaxed text-ink">{activeGuide}</p>
          )}

          <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-wide text-ink-3">
                {tr({ bn: 'উদাহরণ', en: 'Example', it: 'Esempio' })}
              </p>
              <p className="text-sm sm:text-base font-extrabold text-white">
                {activeItem.exampleIt}{' '}
                {activeExamplePhonetic && (
                  <span className="bn text-xs font-semibold text-mint">
                    ({activeExamplePhonetic})
                  </span>
                )}
              </p>
              <p className="bn text-xs font-medium text-ink-2">
                {tr({
                  bn: activeItem.exampleTrBn,
                  en: activeItem.exampleTrEn,
                  it: activeItem.exampleTrIt ?? activeItem.exampleTrEn,
                })}
              </p>
            </div>
            <SpeakButton text={activeItem.exampleIt} size={34} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2">
            {enableStepper ? (
              <button
                type="button"
                disabled={activeIdx <= 0}
                onClick={() => {
                  const prev = items[activeIdx - 1];
                  if (prev) handleOpenItem(prev, true);
                }}
                className="inline-flex min-h-9 items-center gap-1 rounded-xl border border-white/15 bg-white/5 px-2.5 text-xs font-bold text-ink hover:border-neon/50 disabled:opacity-40"
              >
                <ChevronLeft size={15} /> {tr({ bn: 'পূর্ববর্তী', en: 'Prev', it: 'Prec.' })}
              </button>
            ) : (
              <span />
            )}

            {studiedSet.has(activeItem.id) ? (
              <span className="bn inline-flex items-center gap-1.5 text-xs font-bold text-neon">
                <CheckCircle2 size={15} />
                {tr({
                  bn: 'অধ্যয়ন সম্পন্ন হয়েছে',
                  en: 'Marked as studied',
                  it: 'Segnato come studiato',
                })}
              </span>
            ) : (
              <Button
                className="min-h-9 px-3.5 text-xs"
                onClick={() => handleOpenItem(activeItem, true)}
              >
                <span className="bn">
                  {tr({
                    bn: 'শুনে অধ্যয়ন সম্পন্ন করুন',
                    en: 'Study & Play Sound',
                    it: 'Studia e ascolta',
                  })}
                </span>
              </Button>
            )}

            {enableStepper && (
              <button
                type="button"
                disabled={activeIdx >= items.length - 1}
                onClick={() => {
                  const next = items[activeIdx + 1];
                  if (next) handleOpenItem(next, true);
                }}
                className="inline-flex min-h-9 items-center gap-1 rounded-xl border border-neon/40 bg-neon/10 px-2.5 text-xs font-bold text-neon hover:bg-neon/20 disabled:opacity-40"
              >
                {tr({ bn: 'পরবর্তী', en: 'Next', it: 'Succ.' })} <ChevronRight size={15} />
              </button>
            )}
          </div>
        </GlassCard>
      )}

      {/* Optional Group Filter Tabs & Search */}
      {(groups || searchPlaceholder) && (
        <div className="space-y-2">
          {searchPlaceholder && (
            <div className="relative">
              <Search
                size={15}
                className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-ink-3"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="min-h-10 w-full rounded-2xl border border-neon/25 bg-[#041d19]/90 pr-4 pl-9 text-sm font-semibold text-white placeholder:text-ink-3 focus:border-neon focus:outline-none"
              />
            </div>
          )}

          {groups && (
            <div className="flex flex-wrap gap-1.5">
              {groups.map((g) => {
                const inGroup =
                  g.id === 'all' ? items : items.filter((item) => item.group === g.id);
                const doneInGroup = inGroup.filter((item) => studiedSet.has(item.id)).length;
                const active = group === g.id && !query.trim();
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setGroup(g.id);
                    }}
                    className={cx(
                      'min-h-9 rounded-xl border px-2.5 text-xs font-extrabold tabular-nums transition',
                      active
                        ? 'bg-grad-primary border-transparent text-navy-950 glow-neon'
                        : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                    )}
                  >
                    {g.label} ({doneInGroup}/{inGroup.length})
                  </button>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Interactive Study Grid (3 columns on mobile, 4-5 on wider screens) */}
      <GlassCard className="p-3 sm:p-3.5 space-y-2">
        <div className="flex items-center justify-between gap-2 text-xs font-bold text-ink-2">
          <span className="bn">
            {tr({
              bn: 'প্রতিটি কার্ডে ট্যাপ করে অডিও শুনুন ও অধ্যয়ন চিহ্নিত করুন',
              en: 'Tap each card to hear pronunciation and mark it studied',
              it: 'Tocca ogni scheda per ascoltare e completare lo studio',
            })}
          </span>
          <span className="tabular-nums text-mint shrink-0">
            {studiedCount}/{total}
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
          {filteredItems.map((item) => (
            <StudyItemCard
              key={item.id}
              item={item}
              studied={studiedSet.has(item.id)}
              selected={item.id === activeItem?.id}
              onSelect={(picked) => handleOpenItem(picked, true)}
            />
          ))}
        </div>
      </GlassCard>

      {/* Bottom Thumb-Zone Continue CTA */}
      <div className="sticky bottom-20 lg:bottom-4 z-10 pt-0.5">
        <GlassCard neon={allStudied} className="p-2.5 shadow-[0_10px_28px_rgba(0,0,0,0.65)]">
          <Button
            className="w-full min-h-11"
            disabled={!allStudied}
            data-testid="study-continue-btn"
            onClick={onContinue}
          >
            {allStudied ? (
              <>
                <span className="bn">
                  {tr({
                    bn: 'সাউন্ড ড্রিলে যান',
                    en: 'Continue to Sound Drill',
                    it: 'Vai all’esercizio audio',
                  })}
                </span>
                <ArrowRight size={17} />
              </>
            ) : (
              <span className="bn text-sm">
                {tr({
                  bn: `এগিয়ে যেতে আরও ${remainingCount}টি আইটেম অধ্যয়ন করুন`,
                  en: `Continue (${remainingCount} remaining to study)`,
                  it: `Continua (${remainingCount} rimanenti da studiare)`,
                })}
              </span>
            )}
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
