import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  CheckCircle2,
  GraduationCap,
  MessageSquare,
  Search,
  Sparkles,
} from 'lucide-react';
import type { AcademyModuleMeta } from '../../../content/academy/types';
import { SENTENCES } from '../../../content/bank';
import { GRAMMAR_TOPICS } from '../../../content/grammar';
import { generateAcademyModuleExam, shuffleArray } from '../../../lib/examEngine';
import { matchesLocalizedSearch, resolveExamOptions, useI18n } from '../../../lib/i18n';
import { loadModulePosition, saveModulePosition } from '../../../lib/modulePosition';
import { Button, GlassCard, cx } from '../../../components/ui';
import { SpeakButton } from '../../../components/SpeakButton';
import { AcademyExamRunner } from '../../../components/AcademyExamRunner';

type Tab = 'groups' | 'practice' | 'exam';

interface SentencesModuleViewProps {
  meta: AcademyModuleMeta;
  levelId: 'A2' | 'B1' | 'B2';
  studiedSet: Set<string>;
  readyForExam: boolean;
  previewMode?: boolean;
  onMarkStudied: (itemId: string) => void;
  onNavigateModule: (route: string) => void;
}

export function SentencesModuleView({
  meta,
  levelId,
  studiedSet,
  readyForExam,
  previewMode = false,
  onMarkStudied,
  onNavigateModule,
}: SentencesModuleViewProps) {
  const { lang, t, tr } = useI18n();
  const [tab, setTab] = useState<Tab>(() => {
    const saved = loadModulePosition(levelId, meta.id)?.tab;
    return saved === 'groups' || saved === 'practice' || saved === 'exam' ? saved : 'groups';
  });

  useEffect(() => {
    if (previewMode) return;
    saveModulePosition(levelId, meta.id, { tab });
  }, [levelId, meta.id, tab, previewMode]);

  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [practiceRound, setPracticeRound] = useState(1);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practicePick, setPracticePick] = useState<number | null>(null);

  const topicsMap = useMemo(
    () => new Map(GRAMMAR_TOPICS.map((g) => [g.id, g])),
    [],
  );

  const groups = useMemo(() => {
    const map = new Map<string, typeof SENTENCES.A2>();
    for (const s of SENTENCES[levelId]) {
      const list = map.get(s.grammar) ?? [];
      list.push(s);
      map.set(s.grammar, list);
    }
    return [...map.entries()].map(([tag, items]) => {
      const key = `sent-grp:${levelId}:${tag}`;
      const topic = topicsMap.get(tag);
      return {
        tag,
        key,
        title: topic?.title ?? tag,
        name: topic?.name ?? { bn: tag, en: tag, it: tag },
        items,
        isRequired: meta.requiredItemIds.includes(key),
      };
    });
  }, [levelId, topicsMap, meta.requiredItemIds]);

  const activeGroup = groups.find((g) => g.tag === activeTag);
  const filteredSentences = useMemo(() => {
    const q = query.trim();
    const base = activeGroup ? activeGroup.items : SENTENCES[levelId];
    if (!q) return activeGroup ? base : [];
    return base.filter((s) => matchesLocalizedSearch(q, lang, s.it, s.tr));
  }, [activeGroup, lang, query, levelId]);

  const practicePool = useMemo(() => {
    const qs = generateAcademyModuleExam(meta.id, Math.random, levelId);
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
              id: 'groups',
              icon: MessageSquare,
              label: { bn: `কাঠামো (${groups.length})`, en: `Patterns (${groups.length})`, it: `Strutture (${groups.length})` },
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

      {tab === 'groups' && (
        <div className="space-y-3.5">
          <div className="relative">
            <Search size={17} className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-ink-3" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchWords')}
              className="w-full min-h-11 rounded-2xl border border-neon/25 bg-[#041d19]/90 pr-4 pl-10 text-sm font-semibold text-white placeholder:text-ink-3 focus:border-neon focus:outline-none"
            />
          </div>

          {!activeGroup && !query.trim() ? (
            <div className="space-y-2.5">
              {groups.map((grp) => {
                const studied = studiedSet.has(grp.key);
                return (
                  <button
                    key={grp.key}
                    type="button"
                    onClick={() => setActiveTag(grp.tag)}
                    className="block w-full text-left"
                  >
                    <GlassCard neon={studied} className="p-4 flex items-center justify-between gap-3 hover:border-neon/50 transition">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-xs font-extrabold uppercase">
                          <span className="text-cyan">{grp.title}</span>
                          {grp.isRequired && (
                            <>
                              <span className="text-ink-3" aria-hidden="true">·</span>
                              <span className="text-gold">{tr({ bn: 'মূল', en: 'Core', it: 'Base' })}</span>
                            </>
                          )}
                        </div>
                        <p className="bn mt-0.5 text-sm sm:text-base font-extrabold text-white truncate">{tr(grp.name)}</p>
                        <p className="mt-1 text-xs font-semibold text-ink-2 tabular-nums">
                          {grp.items.length} {t('sentencesLabel')}
                        </p>
                      </div>
                      {studied && <CheckCircle2 size={20} className="shrink-0 text-neon" />}
                    </GlassCard>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {activeGroup && (
                <GlassCard className="p-3.5 flex flex-wrap items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTag(null)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-extrabold text-ink hover:border-neon/45"
                  >
                    <ArrowLeft size={15} />
                    <span className="bn">{tr({ bn: 'সব কাঠামো', en: 'All Patterns', it: 'Tutte le strutture' })}</span>
                  </button>
                  <div className="min-w-0 flex-1 text-right">
                    <p className="text-sm font-extrabold text-white truncate">{activeGroup.title}</p>
                    <p className="bn text-xs font-semibold text-mint truncate">{tr(activeGroup.name)}</p>
                  </div>
                  <Button
                    variant={studiedSet.has(activeGroup.key) ? 'ghost' : 'primary'}
                    className="w-full min-h-10 text-xs"
                    onClick={() => onMarkStudied(activeGroup.key)}
                  >
                    <CheckCircle2 size={15} />
                    <span className="bn">
                      {studiedSet.has(activeGroup.key) ? t('academyStudiedBadge') : t('academyMarkStudied')}
                    </span>
                  </Button>
                </GlassCard>
              )}

              <div className="space-y-2.5">
                {filteredSentences.map((s) => {
                  const grpKey = `sent-grp:${levelId}:${s.grammar}`;
                  return (
                    <GlassCard key={s.key} className="p-4 flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1 space-y-1">
                        <p className="text-base font-extrabold text-white leading-snug">{s.it}</p>
                        <p className="bn text-xs sm:text-sm font-semibold text-mint">{tr(s.tr)}</p>
                      </div>
                      <SpeakButton text={s.it} size={38} onSpeak={() => onMarkStudied(grpKey)} />
                    </GlassCard>
                  );
                })}
              </div>
            </div>
          )}

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
                {tr({ bn: 'বাক্য অনুশীলন', en: 'Sentence Comprehension', it: 'Comprensione delle frasi' })}
              </p>
              <h2 className="bn mt-1 text-sm font-bold text-ink-2">{tr(currentQ.prompt)}</h2>
              {currentQ.it && <p className="mt-1.5 text-lg sm:text-xl font-extrabold text-white">{currentQ.it}</p>}
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
                    'glass min-h-13 rounded-2xl px-4 py-2.5 text-left text-sm font-bold text-white transition',
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
          onReviewContent={() => setTab('groups')}
          onNavigateModule={onNavigateModule}
        />
      )}
    </div>
  );
}
