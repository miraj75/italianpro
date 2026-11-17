import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  HelpCircle,
  Info,
  MessageSquare,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  StructuredFlowRunner,
  type StructuredStudyRenderContext,
} from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';
import {
  A1_EVERYDAY_COMM_DRILL_ITEMS,
  EVERYDAY_COMM_DIALOGUES,
  EVERYDAY_COMM_EXPRESSIONS,
  EVERYDAY_COMM_THEORY_CONFIG,
  EVERYDAY_COMM_TOPICS,
  type EverydayTopicId,
} from '../../content/academy/a1EverydayCommunication';
import {
  A1_CULTURE_CATEGORIES,
  A1_CULTURE_EXERCISES,
  A1_CULTURE_GUIDES,
  A1_CULTURE_PHRASES,
  A1_CULTURE_SURVIVAL_DRILL_ITEMS,
  CULTURE_SURVIVAL_THEORY_CONFIG,
  type CultureCategoryId,
} from '../../content/academy/a1CultureSurvival';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { Button, GlassCard, cx } from '../../components/ui';

export type A1CommunicationModuleId = 'everyday-communication' | 'culture-survival';

function FixedStudyContinueBar({
  totalCount,
  studiedCount,
  canContinue,
  onContinue,
}: {
  totalCount: number;
  studiedCount: number;
  canContinue: boolean;
  onContinue: () => void;
}) {
  const { tr } = useI18n();
  const remaining = Math.max(0, totalCount - studiedCount);
  const label = canContinue
    ? tr({ bn: 'ড্রিলে যান', en: 'Continue to Drill', it: 'Vai all’esercizio' })
    : tr({
        bn: `ড্রিলে যেতে আরও ${remaining}টি সম্পন্ন করুন (${studiedCount}/${totalCount})`,
        en: `Continue (${remaining} remaining · ${studiedCount}/${totalCount})`,
      });

  const btn = (
    <Button
      className="w-full min-h-12"
      disabled={!canContinue}
      data-testid="study-continue-btn"
      onClick={onContinue}
    >
      <span className="bn">{label}</span>
      {canContinue && <ArrowRight size={17} />}
    </Button>
  );

  if (typeof document === 'undefined') return btn;
  return createPortal(
    <div
      className="fixed inset-x-0 bottom-[calc(4.5rem+var(--safe-bottom,0px))] lg:bottom-4 z-30 pointer-events-none"
      data-testid="study-fixed-dock"
    >
      <div className="mx-auto flex w-full max-w-6xl px-3.5 sm:px-6 lg:pl-[18.5rem] lg:pr-10">
        <div className="mx-auto w-full max-w-3xl pointer-events-auto">
          <div className="rounded-2xl border border-neon/25 bg-[#031917]/95 p-2.5 shadow-[0_-8px_28px_rgba(0,0,0,0.75)] backdrop-blur-xl">
            {btn}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function EverydayCommunicationStudy({ ctx }: { ctx: StructuredStudyRenderContext }) {
  const { lang, tr } = useI18n();
  const [activeTopic, setActiveTopic] = useState<EverydayTopicId>(EVERYDAY_COMM_TOPICS[0]!.id);
  const [dialogueAnswers, setDialogueAnswers] = useState<Record<string, number>>({});

  const totalRequired = EVERYDAY_COMM_EXPRESSIONS.length + EVERYDAY_COMM_DIALOGUES.length;
  const studiedCount =
    EVERYDAY_COMM_EXPRESSIONS.filter((e) => ctx.studiedSet.has(e.id)).length +
    EVERYDAY_COMM_DIALOGUES.filter((d) => ctx.studiedSet.has(d.id)).length;
  const canContinue = studiedCount >= totalRequired || ctx.studyCompleted;

  const topicMeta = useMemo(
    () => EVERYDAY_COMM_TOPICS.find((t) => t.id === activeTopic) ?? EVERYDAY_COMM_TOPICS[0]!,
    [activeTopic],
  );
  const topicExpressions = useMemo(
    () => EVERYDAY_COMM_EXPRESSIONS.filter((e) => e.topicId === activeTopic),
    [activeTopic],
  );
  const topicDialogues = useMemo(
    () => EVERYDAY_COMM_DIALOGUES.filter((d) => d.topicId === activeTopic),
    [activeTopic],
  );

  const playText = (text: string, markId?: string) => {
    if (markId) ctx.markItemStudied(markId);
    void speakItalian(text, 0.88, startSpeechSession()).catch(() => {});
  };

  return (
    <div className="space-y-4 pb-24">
      <div className="glass rounded-2xl border border-neon/20 px-4 py-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <MessageSquare size={17} className="text-neon shrink-0" />
          <span className="bn text-xs sm:text-sm font-extrabold text-white">
            {tr({
              bn: '১৪টি বাস্তব পরিস্থিতির অভিব্যক্তি ও সংলাপ',
              en: '14 Real-Life Topics: Expressions & Dialogues',
            })}
          </span>
        </div>
        <span className="text-xs font-extrabold text-neon tabular-nums">
          {studiedCount}/{totalRequired}
        </span>
      </div>

      {/* Topic Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {EVERYDAY_COMM_TOPICS.map((topic) => {
          const tExprs = EVERYDAY_COMM_EXPRESSIONS.filter((e) => e.topicId === topic.id);
          const tDlgs = EVERYDAY_COMM_DIALOGUES.filter((d) => d.topicId === topic.id);
          const tTotal = tExprs.length + tDlgs.length;
          const tDone =
            tExprs.filter((e) => ctx.studiedSet.has(e.id)).length +
            tDlgs.filter((d) => ctx.studiedSet.has(d.id)).length;
          const active = topic.id === activeTopic;
          const done = tDone >= tTotal;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => setActiveTopic(topic.id)}
              className={cx(
                'flex flex-col items-start gap-1 rounded-xl border px-3 py-2 text-left transition',
                active
                  ? 'border-neon bg-neon/15 text-white shadow-[0_0_16px_-6px_rgba(0,245,160,0.5)]'
                  : done
                    ? 'border-neon/40 bg-[#08312a]/80 text-mint'
                    : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
              )}
            >
              <div className="flex w-full items-center justify-between gap-1">
                <span className="bn text-xs font-extrabold leading-tight line-clamp-1">
                  {tr(topic.title)}
                </span>
                {done && <CheckCircle2 size={13} className="text-neon shrink-0" />}
              </div>
              <span className="text-[10px] font-bold text-ink-3 tabular-nums">
                {tDone}/{tTotal}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Topic Header */}
      <div className="border-b border-white/10 pb-2">
        <h3 className="bn text-base font-extrabold text-white">{tr(topicMeta.title)}</h3>
        <p className="bn text-xs text-ink-2">{tr(topicMeta.subtitle)}</p>
      </div>

      {/* Expressions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {topicExpressions.map((exp) => {
          const isStudied = ctx.studiedSet.has(exp.id);
          const phonetic = lang === 'bn' ? exp.phoneticBn : exp.phoneticEn;
          return (
            <div
              key={exp.id}
              onClick={() => playText(`${exp.it} ${exp.exampleIt}`, exp.id)}
              data-testid={`study-item-${exp.id}`}
              className={cx(
                'cursor-pointer rounded-2xl border p-3.5 space-y-2 transition active:scale-[0.99]',
                isStudied
                  ? 'border-neon/55 bg-[#08312a]/90 shadow-[0_0_14px_-6px_rgba(0,245,160,0.45)]'
                  : 'border-white/12 bg-white/5 hover:border-neon/35',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={cx(
                    'inline-flex items-center gap-1 text-[11px] font-bold',
                    isStudied ? 'text-neon' : 'text-ink-3',
                  )}
                >
                  {isStudied ? (
                    <>
                      <CheckCircle2 size={14} className="text-neon" />
                      <span className="bn">{tr({ bn: 'সম্পন্ন', en: 'Studied' })}</span>
                    </>
                  ) : (
                    <span className="inline-block h-3.5 w-3.5 rounded-full border border-white/25" />
                  )}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    playText(`${exp.it} ${exp.exampleIt}`, exp.id);
                  }}
                  aria-label={`Play ${exp.it}`}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-grad-primary text-navy-950"
                >
                  <Volume2 size={14} />
                </button>
              </div>
              <div>
                <p className="text-base font-extrabold text-white leading-snug">{exp.it}</p>
                <p className="bn mt-0.5 text-sm font-bold text-mint">{tr(exp.meaning)}</p>
                <p className="bn mt-0.5 text-xs text-ink-3">/{phonetic}/</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/4 px-2.5 py-2 space-y-0.5">
                <p className="text-xs font-bold text-white">{exp.exampleIt}</p>
                <p className="bn text-[11px] text-ink-2">{tr(exp.exampleTr)}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Topic Dialogues with Inline Comprehension Checks */}
      <div className="space-y-3 pt-1">
        <h4 className="bn text-sm font-extrabold text-cyan">
          {tr({
            bn: 'পরিস্থিতিভিত্তিক সংলাপ ও বোঝাপড়া যাচাই (২টি সংলাপ)',
            en: 'Situational Dialogues & Quick Checks (2 Dialogues)',
          })}
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {topicDialogues.map((dlg) => {
            const isStudied = ctx.studiedSet.has(dlg.id);
            const selected = dialogueAnswers[dlg.id];
            const answered = selected !== undefined;
            const correct = answered && selected === dlg.checkAnswer;
            return (
              <GlassCard
                key={dlg.id}
                className={cx(
                  'p-4 space-y-3',
                  isStudied && 'border-neon/50 bg-[#08312a]/85',
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={cx(
                          'inline-flex items-center gap-1 text-[11px] font-bold',
                          isStudied ? 'text-neon' : 'text-ink-3',
                        )}
                      >
                        {isStudied ? (
                          <>
                            <CheckCircle2 size={14} className="text-neon" />
                            <span className="bn">{tr({ bn: 'সম্পন্ন', en: 'Studied' })}</span>
                          </>
                        ) : (
                          <span className="inline-block h-3.5 w-3.5 rounded-full border border-white/25" />
                        )}
                      </span>
                    </div>
                    <h5 className="bn text-sm font-extrabold text-white">{tr(dlg.title)}</h5>
                    <p className="bn text-xs text-ink-3">{tr(dlg.setting)}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => playText(dlg.lines.map((l) => l.it).join('. '), dlg.id)}
                    aria-label={tr({ bn: 'পুরো সংলাপ শুনুন', en: 'Play full dialogue' })}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-grad-primary text-navy-950"
                  >
                    <Volume2 size={15} />
                  </button>
                </div>

                <div className="space-y-1.5">
                  {dlg.lines.map((line, i) => (
                    <div
                      key={i}
                      onClick={() => playText(line.it, dlg.id)}
                      className="flex items-start justify-between gap-2 rounded-xl border border-white/10 bg-white/4 px-3 py-2 cursor-pointer hover:border-neon/35"
                    >
                      <div className="min-w-0">
                        <span className="text-[10px] font-extrabold uppercase text-cyan">
                          {line.speaker}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white">{line.it}</p>
                        <p className="bn text-[11px] text-ink-2">{tr(line.tr)}</p>
                      </div>
                      <Volume2 size={13} className="text-neon mt-1 shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Inline comprehension check */}
                <div className="rounded-xl border border-cyan/25 bg-cyan/5 p-3 space-y-2">
                  <p className="bn text-xs font-extrabold text-cyan flex items-center gap-1.5">
                    <HelpCircle size={13} className="shrink-0" />
                    {tr(dlg.checkQuestion)}
                  </p>
                  <div className="space-y-1.5">
                    {dlg.checkOptions.map((opt, idx) => {
                      const picked = selected === idx;
                      const isRight = idx === dlg.checkAnswer;
                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setDialogueAnswers((prev) => ({ ...prev, [dlg.id]: idx }));
                            ctx.markItemStudied(dlg.id);
                          }}
                          className={cx(
                            'bn w-full rounded-lg border px-2.5 py-1.5 text-left text-xs font-bold transition flex items-center justify-between gap-2',
                            !answered && 'border-white/15 bg-white/5 text-white hover:border-neon/45',
                            answered && isRight && 'border-neon bg-neon/15 text-neon',
                            answered && picked && !isRight && 'border-rose-400 bg-rose-500/15 text-rose-200',
                            answered && !picked && !isRight && 'border-white/10 bg-white/3 text-ink-3 opacity-70',
                          )}
                        >
                          <span>{tr(opt)}</span>
                          {answered && isRight && <CheckCircle2 size={14} className="shrink-0" />}
                          {answered && picked && !isRight && <XCircle size={14} className="shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <p className={cx('bn text-[11px] font-bold', correct ? 'text-neon' : 'text-gold')}>
                      {correct
                        ? tr({ bn: 'চমৎকার! সঠিক উত্তর।', en: 'Correct comprehension!' })
                        : tr({
                            bn: `সঠিক উত্তর: ${tr(dlg.checkOptions[dlg.checkAnswer]!)}`,
                            en: `Correct answer: ${tr(dlg.checkOptions[dlg.checkAnswer]!)}`,
                          })}
                    </p>
                  )}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>

      <FixedStudyContinueBar
        totalCount={totalRequired}
        studiedCount={studiedCount}
        canContinue={canContinue}
        onContinue={ctx.onContinueToDrill}
      />
    </div>
  );
}

function CultureSurvivalStudy({ ctx }: { ctx: StructuredStudyRenderContext }) {
  const { lang, tr } = useI18n();
  const [tab, setTab] = useState<'phrases' | 'guides' | 'exercises'>('phrases');
  const [selectedCat, setSelectedCat] = useState<CultureCategoryId>(A1_CULTURE_CATEGORIES[0]!.id);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const totalRequired =
    A1_CULTURE_PHRASES.length + A1_CULTURE_GUIDES.length + A1_CULTURE_EXERCISES.length;
  const phrasesDone = A1_CULTURE_PHRASES.filter((p) => ctx.studiedSet.has(p.id)).length;
  const guidesDone = A1_CULTURE_GUIDES.filter((g) => ctx.studiedSet.has(g.id)).length;
  const exDone = A1_CULTURE_EXERCISES.filter((e) => ctx.studiedSet.has(e.id)).length;
  const studiedCount = phrasesDone + guidesDone + exDone;
  const canContinue = studiedCount >= totalRequired || ctx.studyCompleted;

  const visiblePhrases = useMemo(
    () => A1_CULTURE_PHRASES.filter((p) => p.category === selectedCat),
    [selectedCat],
  );

  const playPhrase = (it: string, id: string) => {
    ctx.markItemStudied(id);
    void speakItalian(it, 0.88, startSpeechSession()).catch(() => {});
  };

  return (
    <div className="space-y-4 pb-24">
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          onClick={() => setTab('phrases')}
          className={cx(
            'rounded-xl border px-3 py-2.5 text-center text-xs sm:text-sm font-extrabold transition',
            tab === 'phrases'
              ? 'border-neon bg-neon/15 text-neon'
              : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
          )}
        >
          <span className="bn block">
            {tr({ bn: 'বাক্যাংশ', en: 'Phrases' })} ({phrasesDone}/{A1_CULTURE_PHRASES.length})
          </span>
        </button>
        <button
          type="button"
          onClick={() => setTab('guides')}
          className={cx(
            'rounded-xl border px-3 py-2.5 text-center text-xs sm:text-sm font-extrabold transition',
            tab === 'guides'
              ? 'border-neon bg-neon/15 text-neon'
              : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
          )}
        >
          <span className="bn block">
            {tr({ bn: 'পরিস্থিতি গাইড', en: 'Situations' })} ({guidesDone}/{A1_CULTURE_GUIDES.length})
          </span>
        </button>
        <button
          type="button"
          onClick={() => setTab('exercises')}
          className={cx(
            'rounded-xl border px-3 py-2.5 text-center text-xs sm:text-sm font-extrabold transition',
            tab === 'exercises'
              ? 'border-neon bg-neon/15 text-neon'
              : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
          )}
        >
          <span className="bn block">
            {tr({ bn: 'অনুশীলনী', en: 'Exercises' })} ({exDone}/{A1_CULTURE_EXERCISES.length})
          </span>
        </button>
      </div>

      {tab === 'phrases' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-1.5">
            {A1_CULTURE_CATEGORIES.map((cat) => {
              const catItems = A1_CULTURE_PHRASES.filter((p) => p.category === cat.id);
              const catDone = catItems.filter((p) => ctx.studiedSet.has(p.id)).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  className={cx(
                    'bn rounded-lg border px-2.5 py-1.5 text-xs font-extrabold transition',
                    selectedCat === cat.id
                      ? 'border-neon bg-neon/15 text-white'
                      : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
                  )}
                >
                  {tr(cat.title)} ({catDone}/{catItems.length})
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {visiblePhrases.map((p) => {
              const isStudied = ctx.studiedSet.has(p.id);
              return (
                <div
                  key={p.id}
                  onClick={() => playPhrase(p.it, p.id)}
                  data-testid={`study-item-${p.id}`}
                  className={cx(
                    'cursor-pointer rounded-2xl border p-3.5 space-y-2 transition',
                    isStudied
                      ? 'border-neon/55 bg-[#08312a]/90'
                      : 'border-white/12 bg-white/5 hover:border-neon/35',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cx(
                        'inline-flex items-center gap-1 text-[11px] font-bold',
                        isStudied ? 'text-neon' : 'text-ink-3',
                      )}
                    >
                      {isStudied ? (
                        <>
                          <CheckCircle2 size={14} className="text-neon" />
                          <span className="bn">{tr({ bn: 'সম্পন্ন', en: 'Studied' })}</span>
                        </>
                      ) : (
                        <span className="inline-block h-3.5 w-3.5 rounded-full border border-white/25" />
                      )}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        playPhrase(p.it, p.id);
                      }}
                      aria-label={`Play ${p.it}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-grad-primary text-navy-950"
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                  <p className="text-base font-extrabold text-white">{p.it}</p>
                  <p className="bn text-sm font-bold text-mint">{tr(p.meaning)}</p>
                  <p className="bn text-xs text-ink-3">/{lang === 'bn' ? p.phoneticBn : p.phoneticEn}/</p>
                  <p className="bn text-xs text-ink-2 rounded-xl border border-white/10 bg-white/4 px-2.5 py-2">
                    {tr(p.contextNote)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {tab === 'guides' && (
        <div className="space-y-3">
          <div className="rounded-xl border border-cyan/30 bg-cyan/10 px-3.5 py-2.5 flex items-start gap-2 text-xs text-cyan font-semibold">
            <Info size={16} className="shrink-0 mt-0.5" />
            <span className="bn">
              {tr({
                bn: 'সাধারণ দিকনির্দেশনা: শহর ও অঞ্চলভেদে সময়, টিকিট বা স্থানীয় নিয়ম সামান্য ভিন্ন হতে পারে। প্রতিটি গাইড পড়ে ট্যাপ করে সম্পন্ন করুন।',
                en: 'General orientation: hours, ticket rules, and customs can vary across Italian cities and regions. Tap each guide after reading to mark it studied.',
              })}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {A1_CULTURE_GUIDES.map((g) => {
              const isStudied = ctx.studiedSet.has(g.id);
              return (
                <div
                  key={g.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => ctx.markItemStudied(g.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      ctx.markItemStudied(g.id);
                    }
                  }}
                  className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neon rounded-2xl"
                >
                  <GlassCard
                    className={cx(
                      'h-full cursor-pointer p-4 space-y-2.5 transition',
                      isStudied ? 'border-neon/55 bg-[#08312a]/90' : 'hover:border-neon/35',
                    )}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-cyan">
                        <Compass size={14} /> #{g.order}
                      </span>
                      <span className={cx('bn text-xs font-bold', isStudied ? 'text-neon' : 'text-ink-3')}>
                        {isStudied
                          ? tr({ bn: 'পড়া সম্পন্ন', en: 'Studied' })
                          : tr({ bn: 'ট্যাপ করে সম্পন্ন করুন', en: 'Tap to mark studied' })}
                      </span>
                    </div>
                    <h4 className="bn text-base font-extrabold text-white">{tr(g.title)}</h4>
                    <p className="bn text-xs text-ink-2 leading-relaxed">{tr(g.summary)}</p>
                    <ul className="space-y-1 text-xs text-white/90">
                      {g.checklist.map((item, idx) => (
                        <li key={idx} className="bn flex items-start gap-1.5">
                          <span className="text-neon mt-0.5">•</span>
                          <span>{tr(item)}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="bn rounded-lg border border-gold/30 bg-gold/10 px-2.5 py-1.5 text-[11px] font-semibold text-gold">
                      {tr(g.variabilityNote)}
                    </p>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {tab === 'exercises' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {A1_CULTURE_EXERCISES.map((ex, idx) => {
            const isStudied = ctx.studiedSet.has(ex.id);
            const selected = answers[ex.id];
            const answered = selected !== undefined;
            const correct = answered && selected === ex.answer;
            return (
              <GlassCard
                key={ex.id}
                className={cx('p-4 space-y-2.5', isStudied && 'border-neon/50 bg-[#08312a]/85')}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="bn text-xs font-extrabold text-cyan">
                    #{idx + 1} · {tr(ex.situationTitle)}
                  </span>
                  {isStudied && <CheckCircle2 size={15} className="text-neon shrink-0" />}
                </div>
                <p className="bn text-xs text-ink-2">{tr(ex.scenario)}</p>
                {ex.itCue && (
                  <div className="flex items-center justify-between gap-2 rounded-xl border border-white/12 bg-white/5 px-3 py-2">
                    <span className="text-sm font-extrabold text-white">{ex.itCue}</span>
                    <button
                      type="button"
                      onClick={() => void speakItalian(ex.itCue!, 0.88, startSpeechSession()).catch(() => {})}
                      className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-grad-primary text-navy-950"
                      aria-label={`Play ${ex.itCue}`}
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                )}
                <p className="bn text-sm font-extrabold text-white">{tr(ex.question)}</p>
                <div className="space-y-1.5">
                  {ex.options.map((opt, oIdx) => {
                    const picked = selected === oIdx;
                    const isRight = oIdx === ex.answer;
                    return (
                      <button
                        key={oIdx}
                        type="button"
                        onClick={() => {
                          setAnswers((prev) => ({ ...prev, [ex.id]: oIdx }));
                          ctx.markItemStudied(ex.id);
                        }}
                        className={cx(
                          'bn w-full rounded-xl border px-3 py-2 text-left text-xs font-bold transition flex items-center justify-between gap-2',
                          !answered && 'border-white/15 bg-white/5 text-white hover:border-neon/45',
                          answered && isRight && 'border-neon bg-neon/15 text-neon',
                          answered && picked && !isRight && 'border-rose-400 bg-rose-500/15 text-rose-200',
                          answered && !picked && !isRight && 'border-white/10 bg-white/3 text-ink-3 opacity-70',
                        )}
                      >
                        <span>{tr(opt)}</span>
                        {answered && isRight && <CheckCircle2 size={14} />}
                        {answered && picked && !isRight && <XCircle size={14} />}
                      </button>
                    );
                  })}
                </div>
                {answered && (
                  <p className={cx('bn text-xs font-semibold', correct ? 'text-neon' : 'text-gold')}>
                    {tr(ex.explanation)}
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>
      )}

      <FixedStudyContinueBar
        totalCount={totalRequired}
        studiedCount={studiedCount}
        canContinue={canContinue}
        onContinue={ctx.onContinueToDrill}
      />
    </div>
  );
}

export function A1CommunicationModuleScreen({
  moduleId,
}: {
  moduleId: A1CommunicationModuleId;
}) {
  const isEveryday = moduleId === 'everyday-communication';

  const stubItems = useMemo<StudyListItem[]>(() => {
    if (isEveryday) {
      return [
        ...EVERYDAY_COMM_EXPRESSIONS.map((e) => ({
          id: e.id,
          primary: e.it,
          italianLabel: e.it,
          phoneticBn: e.phoneticBn,
          phoneticEn: e.phoneticEn,
          exampleIt: e.exampleIt,
          exampleTrBn: e.exampleTr.bn,
          exampleTrEn: e.exampleTr.en,
          audioText: e.it,
        })),
        ...EVERYDAY_COMM_DIALOGUES.map((d) => ({
          id: d.id,
          primary: d.title.en,
          italianLabel: d.title.en,
          phoneticBn: '',
          phoneticEn: '',
          exampleIt: d.lines[0]?.it ?? '',
          exampleTrBn: '',
          exampleTrEn: '',
          audioText: d.lines.map((l) => l.it).join('. '),
        })),
      ];
    }
    return [
      ...A1_CULTURE_PHRASES.map((p) => ({
        id: p.id,
        primary: p.it,
        italianLabel: p.it,
        phoneticBn: p.phoneticBn,
        phoneticEn: p.phoneticEn,
        exampleIt: p.it,
        exampleTrBn: p.meaning.bn,
        exampleTrEn: p.meaning.en,
        audioText: p.it,
      })),
      ...A1_CULTURE_GUIDES.map((g) => ({
        id: g.id,
        primary: g.title.en,
        italianLabel: g.title.en,
        phoneticBn: '',
        phoneticEn: '',
        exampleIt: '',
        exampleTrBn: '',
        exampleTrEn: '',
        audioText: '',
      })),
      ...A1_CULTURE_EXERCISES.map((ex) => ({
        id: ex.id,
        primary: ex.situationTitle.en,
        italianLabel: ex.itCue ?? '',
        phoneticBn: '',
        phoneticEn: '',
        exampleIt: ex.itCue ?? '',
        exampleTrBn: '',
        exampleTrEn: '',
        audioText: ex.itCue ?? '',
      })),
    ];
  }, [isEveryday]);

  return (
    <StructuredFlowRunner
      key={moduleId}
      moduleId={moduleId}
      backTo="/level/A1"
      theoryConfig={isEveryday ? EVERYDAY_COMM_THEORY_CONFIG : CULTURE_SURVIVAL_THEORY_CONFIG}
      studyTitle={
        isEveryday
          ? { bn: 'দৈনন্দিন যোগাযোগ অনুশীলন', en: 'Everyday Communication Practice' }
          : { bn: 'ইতালীয় সংস্কৃতি ও জীবনযাত্রা', en: 'Italian Culture & Everyday Survival' }
      }
      studyItems={stubItems}
      drillItems={isEveryday ? A1_EVERYDAY_COMM_DRILL_ITEMS : A1_CULTURE_SURVIVAL_DRILL_ITEMS}
      renderCustomStudy={(ctx) =>
        isEveryday ? <EverydayCommunicationStudy ctx={ctx} /> : <CultureSurvivalStudy ctx={ctx} />
      }
    />
  );
}
