import { useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import type { AcademyModuleMeta } from '../../../content/academy/types';
import type { LevelId } from '../../../content/types';
import { GRAMMAR_TOPICS } from '../../../content/grammar';
import { GRAMMAR_DETAILS_A2, type GrammarDetailEntry } from '../../../content/grammarDetailsA2';
import { GRAMMAR_DETAILS_B1 } from '../../../content/grammarDetailsB1';
import { GRAMMAR_DETAILS_B2 } from '../../../content/grammarDetailsB2';
import { SENTENCES } from '../../../content/bank';
import { generateAcademyModuleExam, shuffleArray } from '../../../lib/examEngine';
import { resolveExamOptions, useI18n } from '../../../lib/i18n';
import { Button, GlassCard, cx } from '../../../components/ui';
import { SpeakButton } from '../../../components/SpeakButton';
import { AcademyExamRunner } from '../../../components/AcademyExamRunner';

type Tab = 'theory' | 'practice' | 'exam';

interface GrammarModuleViewProps {
  meta: AcademyModuleMeta;
  levelId: 'A2' | 'B1' | 'B2';
  studiedSet: Set<string>;
  readyForExam: boolean;
  onMarkStudied: (itemId: string) => void;
  onNavigateModule: (route: string) => void;
}

function detailsForLevel(level: 'A2' | 'B1' | 'B2'): Record<string, GrammarDetailEntry> {
  if (level === 'A2') return GRAMMAR_DETAILS_A2;
  if (level === 'B1') return GRAMMAR_DETAILS_B1;
  return GRAMMAR_DETAILS_B2;
}

export function GrammarModuleView({
  meta,
  levelId,
  studiedSet,
  readyForExam,
  onMarkStudied,
  onNavigateModule,
}: GrammarModuleViewProps) {
  const { lang, t, tr } = useI18n();
  const [tab, setTab] = useState<Tab>('theory');
  const [topicFilter, setTopicFilter] = useState<'all' | 'remaining'>('all');
  const [practiceRound, setPracticeRound] = useState(1);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practicePick, setPracticePick] = useState<number | null>(null);

  const detailsMap = detailsForLevel(levelId);
  const topics = useMemo(() => {
    const allowed = new Set(meta.grammarIds ?? []);
    return GRAMMAR_TOPICS.filter((g) => g.level === levelId && allowed.has(g.id));
  }, [meta.grammarIds, levelId]);

  const visibleTopics = useMemo(() => {
    if (topicFilter === 'all') return topics;
    return topics.filter((topic) => !studiedSet.has(topic.id));
  }, [topics, topicFilter, studiedSet]);

  const practicePool = useMemo(() => {
    const qs = generateAcademyModuleExam(meta.id, Math.random, levelId as LevelId);
    return shuffleArray(qs);
  }, [meta.id, levelId, practiceRound]);

  const currentQ = practicePool[practiceIdx % Math.max(1, practicePool.length)];

  const practiceOpts = currentQ ? resolveExamOptions(currentQ, lang) : [];

  return (
    <div className="space-y-3">
      <nav className="grid grid-cols-3 gap-0.5 border-b border-white/10" role="tablist">
        {(
          [
            {
              id: 'theory',
              icon: BookOpen,
              label: { bn: `নিয়ম (${topics.length})`, en: `Theory (${topics.length})`, it: `Teoria (${topics.length})` },
            },
            { id: 'practice', icon: Sparkles, label: { bn: 'অনুশীলন', en: 'Practice', it: 'Pratica' } },
            {
              id: 'exam',
              icon: GraduationCap,
              label: { bn: `পরীক্ষা (${meta.examQuestionCount})`, en: `Exam (${meta.examQuestionCount})`, it: `Esame (${meta.examQuestionCount})` },
            },
          ] as const
        ).map((item) => {
          const active = tab === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(item.id)}
              className={cx(
                'flex min-h-9 items-center justify-center gap-1 border-b-2 px-1.5 py-1 text-[11px] sm:text-xs transition',
                active
                  ? 'border-neon text-white font-extrabold'
                  : 'border-transparent text-ink-2 hover:text-white font-semibold',
              )}
            >
              <item.icon size={13} className="shrink-0" />
              <span className="bn truncate">{tr(item.label)}</span>
            </button>
          );
        })}
      </nav>

      {tab === 'theory' && (
        <div className="space-y-4">
          {topics.length > 10 && (
            <div className="glass rounded-2xl p-3 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs font-bold text-ink-2 tabular-nums">
                  {studiedSet.size} / {topics.length} {tr({ bn: 'বিষয় সম্পন্ন', en: 'topics studied', it: 'argomenti studiati' })}
                </p>
                <div className="inline-flex rounded-xl border border-white/12 bg-white/5 p-0.5">
                  <button
                    type="button"
                    onClick={() => setTopicFilter('all')}
                    className={cx(
                      'min-h-8 rounded-lg px-2.5 text-xs font-bold transition',
                      topicFilter === 'all' ? 'bg-neon text-bg' : 'text-ink-2 hover:text-white',
                    )}
                  >
                    {tr({ bn: `সব (${topics.length})`, en: `All (${topics.length})`, it: `Tutti (${topics.length})` })}
                  </button>
                  <button
                    type="button"
                    onClick={() => setTopicFilter('remaining')}
                    className={cx(
                      'min-h-8 rounded-lg px-2.5 text-xs font-bold transition',
                      topicFilter === 'remaining' ? 'bg-neon text-bg' : 'text-ink-2 hover:text-white',
                    )}
                  >
                    {tr({
                      bn: `বাকি (${Math.max(0, topics.length - studiedSet.size)})`,
                      en: `Remaining (${Math.max(0, topics.length - studiedSet.size)})`,
                      it: `Restanti (${Math.max(0, topics.length - studiedSet.size)})`,
                    })}
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                {visibleTopics.map((tp, i) => {
                  const done = studiedSet.has(tp.id);
                  return (
                    <button
                      key={tp.id}
                      type="button"
                      title={tp.title}
                      onClick={() => {
                        const el = document.getElementById(`grammar-topic-${tp.id}`);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={cx(
                        'shrink-0 min-h-8 min-w-8 rounded-lg border px-2 text-xs font-extrabold tabular-nums transition',
                        done
                          ? 'border-neon/40 bg-neon/15 text-neon'
                          : 'border-white/10 bg-white/5 text-ink-2 hover:border-white/25 hover:text-white',
                      )}
                    >
                      #{i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {visibleTopics.map((topic, idx) => {
            const studied = studiedSet.has(topic.id);
            const det = detailsMap[topic.id];
            const relatedSentences = SENTENCES[levelId].filter((s) => s.grammar === topic.id).slice(0, 2);

            return (
              <div key={topic.id} id={`grammar-topic-${topic.id}`} className="scroll-mt-4">
              <GlassCard neon={studied} className="p-4 sm:p-5 space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-extrabold uppercase tracking-wide text-cyan">
                      {levelId} · #{idx + 1} · {topic.title}
                    </p>
                    <h2 className="bn text-lg sm:text-xl font-extrabold text-white">{tr(topic.name)}</h2>
                  </div>
                  {studied && <CheckCircle2 size={22} className="shrink-0 text-neon" aria-label="studied" />}
                </div>

                <p className="bn text-sm leading-relaxed text-ink">{tr(topic.explanation)}</p>

                {det && (
                  <div className="rounded-2xl border border-neon/25 bg-neon/6 p-3.5 space-y-1">
                    <p className="text-[11px] font-extrabold uppercase tracking-wide text-neon">
                      {tr({ bn: 'মূল নিয়ম', en: 'Rule', it: 'Regola' })}
                    </p>
                    <p className="bn text-xs sm:text-sm leading-relaxed text-ink">{tr(det.rule)}</p>
                  </div>
                )}

                {topic.table && topic.table.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {topic.table.map(([left, right], i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs sm:text-sm"
                      >
                        <span className="bn font-bold text-ink-2">{left}</span>
                        <span className="font-extrabold text-neon text-right">{right}</span>
                      </div>
                    ))}
                  </div>
                )}

                {(det?.examples.length || relatedSentences.length > 0) && (
                  <div className="space-y-2">
                    {(det?.examples ?? relatedSentences.map((s) => ({ it: s.it, tr: s.tr }))).map((ex, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/4 px-3.5 py-2.5"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-mint">{ex.it}</p>
                          <p className="bn mt-0.5 text-xs text-ink-2">{tr(ex.tr)}</p>
                        </div>
                        <SpeakButton text={ex.it} size={34} onSpeak={() => onMarkStudied(topic.id)} />
                      </div>
                    ))}
                  </div>
                )}

                {det?.exceptions && (
                  <div className="rounded-2xl border border-gold/30 bg-gold/8 p-3.5 space-y-1">
                    <p className="bn text-xs font-extrabold text-gold uppercase">{t('exceptionsLabel')}</p>
                    <p className="bn text-xs sm:text-sm text-ink">{tr(det.exceptions)}</p>
                  </div>
                )}

                {det && det.commonMistakes.length > 0 && (
                  <div className="rounded-2xl border border-pink/30 bg-pink/8 p-3.5 space-y-2">
                    <p className="bn flex items-center gap-1.5 text-xs font-extrabold text-pink uppercase">
                      <AlertTriangle size={14} /> {t('commonMistakes')}
                    </p>
                    {det.commonMistakes.map((m, i) => (
                      <div key={i} className="text-xs sm:text-sm space-y-0.5">
                        <p>
                          <span className="line-through text-pink font-bold">{tr(m.wrong)}</span>
                          {' → '}
                          <span className="text-neon font-extrabold">{tr(m.right)}</span>
                        </p>
                        <p className="bn text-ink-2">{tr(m.note)}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex justify-end pt-1">
                  <Button
                    variant={studied ? 'ghost' : 'primary'}
                    className="min-h-11 px-5 text-sm"
                    onClick={() => onMarkStudied(topic.id)}
                  >
                    <CheckCircle2 size={17} />
                    <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                  </Button>
                </div>
              </GlassCard>
              </div>
            );
          })}

          {readyForExam && (
            <Button className="w-full" onClick={() => setTab('exam')}>
              <GraduationCap size={18} />
              <span className="bn">
                {t('takeAssessment')} · {meta.examQuestionCount} {tr({ bn: 'প্রশ্ন', en: 'Questions', it: 'domande' })}
              </span>
            </Button>
          )}
        </div>
      )}

      {tab === 'practice' && currentQ && (
        <GlassCard neon className="p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-cyan">
                {tr({ bn: 'গ্রামার অনুশীলন', en: 'Interactive Grammar Practice', it: 'Pratica di grammatica' })}
              </p>
              <h2 className="bn mt-1 text-base font-bold text-ink-2">{tr(currentQ.prompt)}</h2>
              {currentQ.it && <p className="mt-1.5 text-xl font-extrabold text-white">{currentQ.it}</p>}
            </div>
            {currentQ.audioIt && <SpeakButton text={currentQ.audioIt} size={42} />}
          </div>

          <div className="grid gap-2.5">
            {practiceOpts.map((opt, idx) => {
              const picked = practicePick === idx;
              const right = idx === currentQ.answer;
              return (
                <button
                  key={`${currentQ.id}-${opt}-${idx}`}
                  type="button"
                  disabled={practicePick !== null}
                  onClick={() => setPracticePick(idx)}
                  className={cx(
                    'glass min-h-13 rounded-2xl px-4 py-2.5 text-left text-sm sm:text-base font-bold text-white transition',
                    practicePick !== null && right && 'border-neon bg-neon/15',
                    practicePick !== null && picked && !right && 'border-pink bg-pink/15',
                  )}
                >
                  <span className="bn">{opt}</span>
                </button>
              );
            })}
          </div>

          {practicePick !== null && (
            <div className="space-y-3">
              <div
                className={cx(
                  'rounded-2xl border p-3.5',
                  practicePick === currentQ.answer ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10',
                )}
              >
                <p className="font-extrabold text-white">
                  {practicePick === currentQ.answer
                    ? t('correct')
                    : `${t('correctAnswer')}: ${practiceOpts[currentQ.answer] ?? ''}`}
                </p>
                <p className="bn mt-1 text-xs sm:text-sm text-ink-2">{tr(currentQ.explanation)}</p>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  setPracticePick(null);
                  if (practiceIdx + 1 >= practicePool.length) {
                    setPracticeIdx(0);
                    setPracticeRound((r) => r + 1);
                  } else {
                    setPracticeIdx((i) => i + 1);
                  }
                }}
              >
                {t('next')}
              </Button>
            </div>
          )}
        </GlassCard>
      )}

      {tab === 'exam' && (
        <AcademyExamRunner
          moduleId={meta.id}
          level={levelId}
          onReviewContent={() => setTab('theory')}
          onNavigateModule={onNavigateModule}
        />
      )}
    </div>
  );
}
