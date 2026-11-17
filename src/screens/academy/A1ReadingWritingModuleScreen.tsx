import { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  Eye,
  EyeOff,
  PenLine,
  Volume2,
  XCircle,
} from 'lucide-react';
import {
  StructuredFlowRunner,
  type StructuredStudyRenderContext,
} from '../../components/academy/StructuredFlowRunner';
import type { StudyListItem } from '../../components/academy/StudyItemCard';
import {
  A1_READING_PASSAGES,
  A1_READING_WRITING_DRILL_ITEMS,
  A1_WRITING_TASKS,
  READING_WRITING_THEORY_CONFIG,
  evaluateA1WritingTask,
  type WritingEvaluationResult,
} from '../../content/academy/a1ReadingWriting';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { Button, GlassCard, cx } from '../../components/ui';

function ReadingWritingStudy({ ctx }: { ctx: StructuredStudyRenderContext }) {
  const { tr } = useI18n();
  const [tab, setTab] = useState<'reading' | 'writing'>('reading');
  const [readingAnswers, setReadingAnswers] = useState<Record<string, number>>({});
  const [showTrans, setShowTrans] = useState<Record<string, boolean>>({});
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [evalResults, setEvalResults] = useState<Record<string, WritingEvaluationResult>>({});
  const [showModel, setShowModel] = useState<Record<string, boolean>>({});

  const totalRequired = A1_READING_PASSAGES.length + A1_WRITING_TASKS.length;
  const readingDone = A1_READING_PASSAGES.filter((r) => ctx.studiedSet.has(r.id)).length;
  const writingDone = A1_WRITING_TASKS.filter((w) => ctx.studiedSet.has(w.id)).length;
  const studiedCount = readingDone + writingDone;
  const remaining = Math.max(0, totalRequired - studiedCount);
  const canContinue = studiedCount >= totalRequired || ctx.studyCompleted;

  const playPassage = (it: string) => {
    void speakItalian(it, 0.86, startSpeechSession()).catch(() => {});
  };

  const handleEvaluateTask = (taskId: string) => {
    const task = A1_WRITING_TASKS.find((t) => t.id === taskId);
    if (!task) return;
    const text = drafts[taskId] ?? '';
    const result = evaluateA1WritingTask(task, text);
    setEvalResults((prev) => ({ ...prev, [taskId]: result }));
    if (result.passed) {
      ctx.markItemStudied(taskId);
    }
  };

  const continueBtn = (
    <Button
      className="w-full min-h-12"
      disabled={!canContinue}
      data-testid="study-continue-btn"
      onClick={ctx.onContinueToDrill}
    >
      <span className="bn">
        {canContinue
          ? tr({ bn: 'ড্রিলে যান', en: 'Continue to Drill', it: 'Vai all’esercizio' })
          : tr({
              bn: `ড্রিলে যেতে আরও ${remaining}টি সম্পন্ন করুন (${studiedCount}/${totalRequired})`,
              en: `Continue (${remaining} remaining · ${studiedCount}/${totalRequired})`,
            })}
      </span>
      {canContinue && <ArrowRight size={17} />}
    </Button>
  );

  return (
    <div className="space-y-4 pb-24">
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => setTab('reading')}
          className={cx(
            'flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs sm:text-sm font-extrabold transition',
            tab === 'reading'
              ? 'border-neon bg-neon/15 text-neon'
              : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
          )}
        >
          <BookOpenText size={16} />
          <span className="bn">
            {tr({ bn: 'পঠন (Reading)', en: 'Reading' })} ({readingDone}/{A1_READING_PASSAGES.length})
          </span>
        </button>

        <button
          type="button"
          onClick={() => setTab('writing')}
          className={cx(
            'flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs sm:text-sm font-extrabold transition',
            tab === 'writing'
              ? 'border-neon bg-neon/15 text-neon'
              : 'border-white/12 bg-white/5 text-ink-2 hover:border-neon/35',
          )}
        >
          <PenLine size={16} />
          <span className="bn">
            {tr({ bn: 'লিখন (Writing)', en: 'Writing' })} ({writingDone}/{A1_WRITING_TASKS.length})
          </span>
        </button>
      </div>

      {tab === 'reading' ? (
        <div className="space-y-3">
          {A1_READING_PASSAGES.map((passage) => {
            const isStudied = ctx.studiedSet.has(passage.id);
            const selected = readingAnswers[passage.id];
            const answered = selected !== undefined;
            const correct = answered && selected === passage.answer;
            const transOpen = Boolean(showTrans[passage.id]);

            return (
              <GlassCard
                key={passage.id}
                data-testid={`study-item-${passage.id}`}
                className={cx('p-4 space-y-3', isStudied && 'border-neon/50 bg-[#08312a]/85')}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="bn text-[11px] font-extrabold text-cyan">
                      {tr(passage.genre)}
                    </span>
                    <h4 className="bn text-base font-extrabold text-white">{tr(passage.title)}</h4>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {isStudied && <CheckCircle2 size={16} className="text-neon" />}
                    <button
                      type="button"
                      onClick={() => playPassage(passage.it)}
                      aria-label={tr({ bn: 'অনুচ্ছেদ শুনুন', en: 'Listen to passage' })}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-grad-primary text-navy-950"
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                </div>

                <div className="rounded-xl border border-white/12 bg-white/5 p-3 space-y-2">
                  <p className="text-sm font-semibold text-white leading-relaxed">{passage.it}</p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {passage.glossary.map((g, i) => (
                      <span
                        key={i}
                        className="bn rounded-md border border-cyan/25 bg-cyan/10 px-2 py-0.5 text-[11px] font-semibold text-cyan"
                      >
                        <strong className="text-white">{g.it}</strong> = {tr(g.tr)}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setShowTrans((prev) => ({ ...prev, [passage.id]: !prev[passage.id] }))
                    }
                    className="inline-flex items-center gap-1 text-xs font-bold text-mint hover:text-neon pt-1"
                  >
                    {transOpen ? <EyeOff size={13} /> : <Eye size={13} />}
                    <span className="bn">
                      {transOpen
                        ? tr({ bn: 'অনুবাদ লুকান', en: 'Hide Translation' })
                        : tr({ bn: 'অনুবাদ দেখুন', en: 'Show Translation' })}
                    </span>
                  </button>

                  {transOpen && (
                    <p className="bn text-xs text-ink-2 border-t border-white/10 pt-2">
                      {tr(passage.translation)}
                    </p>
                  )}
                </div>

                <p className="bn text-sm font-extrabold text-white">{tr(passage.question)}</p>

                <div className="space-y-1.5">
                  {passage.options.map((opt, idx) => {
                    const picked = selected === idx;
                    const isRight = idx === passage.answer;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setReadingAnswers((prev) => ({ ...prev, [passage.id]: idx }));
                          ctx.markItemStudied(passage.id);
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
                    {tr(passage.explanation)}
                  </p>
                )}
              </GlassCard>
            );
          })}
        </div>
      ) : (
        <div className="space-y-3">
          {A1_WRITING_TASKS.map((task) => {
            const isStudied = ctx.studiedSet.has(task.id);
            const draft = drafts[task.id] ?? '';
            const evalRes = evalResults[task.id];
            const modelVisible = Boolean(showModel[task.id]);

            return (
              <GlassCard
                key={task.id}
                data-testid={`study-item-${task.id}`}
                className={cx('p-4 space-y-3', isStudied && 'border-neon/50 bg-[#08312a]/85')}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="bn text-[11px] font-extrabold text-cyan">
                      #{task.order} · {tr(task.category)}
                    </span>
                    <h4 className="bn text-base font-extrabold text-white">{tr(task.title)}</h4>
                  </div>
                  {isStudied && <CheckCircle2 size={16} className="text-neon shrink-0" />}
                </div>

                <p className="bn text-xs sm:text-sm text-ink-2 leading-relaxed">{tr(task.prompt)}</p>

                <div className="flex flex-wrap gap-1.5">
                  {task.usefulVocab.map((w, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-white/12 bg-white/5 px-2 py-0.5 text-[11px] font-bold text-mint"
                    >
                      {w}
                    </span>
                  ))}
                </div>

                <textarea
                  value={draft}
                  onChange={(e) => setDrafts((prev) => ({ ...prev, [task.id]: e.target.value }))}
                  rows={3}
                  placeholder="Scrivi qui in italiano..."
                  className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-ink-3 focus:border-neon focus:outline-none"
                />

                <div className="flex flex-wrap items-center gap-2">
                  <Button className="px-3 py-1.5 text-xs" onClick={() => handleEvaluateTask(task.id)}>
                    <CheckCircle2 size={14} />
                    <span className="bn">{tr({ bn: 'লেখা যাচাই করুন', en: 'Check Writing' })}</span>
                  </Button>
                  <button
                    type="button"
                    onClick={() =>
                      setShowModel((prev) => ({ ...prev, [task.id]: !prev[task.id] }))
                    }
                    className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-white/5 px-2.5 py-1.5 text-xs font-bold text-ink-2 hover:border-neon/40"
                  >
                    {modelVisible ? <EyeOff size={13} /> : <Eye size={13} />}
                    <span className="bn">
                      {modelVisible
                        ? tr({ bn: 'নমুনা উত্তর লুকান', en: 'Hide Model' })
                        : tr({ bn: 'নমুনা উত্তর দেখুন', en: 'Model Answer' })}
                    </span>
                  </button>
                </div>

                {evalRes && (
                  <div
                    className={cx(
                      'rounded-xl border p-3 space-y-2',
                      evalRes.passed
                        ? 'border-neon/50 bg-neon/10'
                        : 'border-gold/50 bg-gold/10',
                    )}
                  >
                    <p
                      className={cx(
                        'bn text-xs font-extrabold',
                        evalRes.passed ? 'text-neon' : 'text-gold',
                      )}
                    >
                      {tr(evalRes.feedback)}
                    </p>
                    <div className="space-y-1">
                      {evalRes.criteria.map((c) => (
                        <div
                          key={c.id}
                          className="bn flex items-center gap-2 text-xs font-semibold"
                        >
                          {c.met ? (
                            <CheckCircle2 size={13} className="text-neon shrink-0" />
                          ) : (
                            <XCircle size={13} className="text-rose-300 shrink-0" />
                          )}
                          <span className={c.met ? 'text-white' : 'text-ink-2'}>
                            {tr(c.label)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {modelVisible && (
                  <div className="rounded-xl border border-cyan/30 bg-cyan/10 p-3 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs sm:text-sm font-bold text-white leading-relaxed">
                        {task.modelAnswerIt}
                      </p>
                      <button
                        type="button"
                        onClick={() => playPassage(task.modelAnswerIt)}
                        aria-label="Play model answer"
                        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-grad-primary text-navy-950"
                      >
                        <Volume2 size={13} />
                      </button>
                    </div>
                    <p className="bn text-xs text-ink-2">{tr(task.modelAnswerTr)}</p>
                  </div>
                )}
              </GlassCard>
            );
          })}
        </div>
      )}

      {typeof document !== 'undefined'
        ? createPortal(
            <div
              className="fixed inset-x-0 bottom-[calc(4.5rem+var(--safe-bottom,0px))] lg:bottom-4 z-30 pointer-events-none"
              data-testid="study-fixed-dock"
            >
              <div className="mx-auto flex w-full max-w-6xl px-3.5 sm:px-6 lg:pl-[18.5rem] lg:pr-10">
                <div className="mx-auto w-full max-w-3xl pointer-events-auto">
                  <div className="rounded-2xl border border-neon/25 bg-[#031917]/95 p-2.5 shadow-[0_-8px_28px_rgba(0,0,0,0.75)] backdrop-blur-xl">
                    {continueBtn}
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )
        : continueBtn}
    </div>
  );
}

export function A1ReadingWritingModuleScreen() {
  const stubItems = useMemo<StudyListItem[]>(
    () => [
      ...A1_READING_PASSAGES.map((r) => ({
        id: r.id,
        primary: r.title.en,
        italianLabel: r.title.en,
        phoneticBn: '',
        phoneticEn: '',
        exampleIt: r.it,
        exampleTrBn: r.translation.bn,
        exampleTrEn: r.translation.en,
        audioText: r.it,
      })),
      ...A1_WRITING_TASKS.map((w) => ({
        id: w.id,
        primary: w.title.en,
        italianLabel: w.title.en,
        phoneticBn: '',
        phoneticEn: '',
        exampleIt: w.modelAnswerIt,
        exampleTrBn: w.modelAnswerTr.bn,
        exampleTrEn: w.modelAnswerTr.en,
        audioText: w.modelAnswerIt,
      })),
    ],
    [],
  );

  return (
    <StructuredFlowRunner
      key="reading-writing"
      moduleId="reading-writing"
      backTo="/level/A1"
      theoryConfig={READING_WRITING_THEORY_CONFIG}
      studyTitle={{
        bn: 'পঠন (২০টি) ও লিখন (১৫টি) অনুশীলন',
        en: 'Reading (20) & Guided Writing (15)',
      }}
      studyItems={stubItems}
      drillItems={A1_READING_WRITING_DRILL_ITEMS}
      renderCustomStudy={(ctx) => <ReadingWritingStudy ctx={ctx} />}
    />
  );
}
