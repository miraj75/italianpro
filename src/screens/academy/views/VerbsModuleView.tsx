import { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Infinity as InfinityIcon,
  Sparkles,
} from 'lucide-react';
import type { AcademyModuleMeta } from '../../../content/academy/types';
import { getAcademyVerbsForLevel } from '../../../content/academy/levelVerbs';
import { GRAMMAR_TOPICS } from '../../../content/grammar';
import { generateAcademyModuleExam, shuffleArray } from '../../../lib/examEngine';
import { resolveExamOptions, useI18n } from '../../../lib/i18n';
import { loadModulePosition, saveModulePosition } from '../../../lib/modulePosition';
import type { ExplainLang } from '../../../content/types';

function formatVerbPronunciation(raw: string | undefined, lang: ExplainLang): string {
  if (!raw || lang === 'it') return '';
  if (lang === 'bn') return raw;
  const latinMatch = raw.match(/\/([A-Za-z][^]*)\/$/);
  if (latinMatch?.[1]) return `/${latinMatch[1]}/`;
  return /[\u0980-\u09FF]/.test(raw) ? '' : raw;
}
import { Button, GlassCard, cx } from '../../../components/ui';
import { SpeakButton } from '../../../components/SpeakButton';
import { AcademyExamRunner } from '../../../components/AcademyExamRunner';

type Tab = 'verbs' | 'rules' | 'practice' | 'exam';
const PRONOUNS = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'] as const;

interface VerbsModuleViewProps {
  meta: AcademyModuleMeta;
  levelId: 'A2' | 'B1' | 'B2';
  studiedSet: Set<string>;
  readyForExam: boolean;
  previewMode?: boolean;
  onMarkStudied: (itemId: string) => void;
  onNavigateModule: (route: string) => void;
}

export function VerbsModuleView({
  meta,
  levelId,
  studiedSet,
  readyForExam,
  previewMode = false,
  onMarkStudied,
  onNavigateModule,
}: VerbsModuleViewProps) {
  const { lang, t, tr } = useI18n();
  const [tab, setTab] = useState<Tab>(() => {
    const saved = loadModulePosition(levelId, meta.id)?.tab;
    return saved === 'verbs' || saved === 'rules' || saved === 'practice' || saved === 'exam' ? saved : 'verbs';
  });

  useEffect(() => {
    if (previewMode) return;
    saveModulePosition(levelId, meta.id, { tab });
  }, [levelId, meta.id, tab, previewMode]);

  const [tenseByVerb, setTenseByVerb] = useState<Record<string, number>>({});
  const [practiceRound, setPracticeRound] = useState(1);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practicePick, setPracticePick] = useState<number | null>(null);

  const verbs = useMemo(() => getAcademyVerbsForLevel(levelId), [levelId]);
  const grammarTopics = useMemo(() => {
    const allowed = new Set(meta.grammarIds ?? []);
    return GRAMMAR_TOPICS.filter((g) => g.level === levelId && allowed.has(g.id));
  }, [meta.grammarIds, levelId]);

  const practicePool = useMemo(() => {
    const qs = generateAcademyModuleExam(meta.id, Math.random, levelId);
    return shuffleArray(qs);
  }, [meta.id, levelId, practiceRound]);
  const currentQ = practicePool[practiceIdx % Math.max(1, practicePool.length)];

  const practiceOpts = currentQ ? resolveExamOptions(currentQ, lang) : [];

  return (
    <div className="space-y-3">
      <nav className="grid grid-cols-4 gap-0.5 border-b border-white/10" role="tablist">
        {(
          [
            {
              id: 'verbs',
              icon: InfinityIcon,
              label: { bn: `ক্রিয়া (${verbs.length})`, en: `Verbs (${verbs.length})`, it: `Verbi (${verbs.length})` },
            },
            {
              id: 'rules',
              icon: BookOpen,
              label: { bn: `ব্যবহার (${grammarTopics.length})`, en: `Usage (${grammarTopics.length})`, it: `Uso (${grammarTopics.length})` },
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
                'flex min-h-9 items-center justify-center gap-1 border-b-2 px-1 py-1 text-[11px] sm:text-xs transition',
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

      {tab === 'verbs' && (
        <div className="space-y-4">
          {verbs.map((verb) => {
            const studied = studiedSet.has(verb.id);
            const activeTenseIdx = tenseByVerb[verb.id] ?? 0;
            const table = verb.conjugations[activeTenseIdx] ?? verb.conjugations[0]!;

            return (
              <GlassCard key={verb.id} neon={studied} className="p-4 sm:p-5 space-y-3.5">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-extrabold">
                      <span className="text-cyan">{tr(verb.category)}</span>
                      <span className="text-ink-3" aria-hidden="true">·</span>
                      <span className="text-gold">
                        {verb.irregular
                          ? tr({ bn: 'অনিয়মিত', en: 'Irregular', it: 'Irregolare' })
                          : tr({ bn: 'নিয়মিত', en: 'Regular', it: 'Regolare' })}
                      </span>
                    </div>
                    <h2 className="mt-1.5 text-xl sm:text-2xl font-extrabold text-white">{verb.infinitive}</h2>
                    <p className="bn text-sm font-bold text-mint">{tr(verb.meaning)}</p>
                    {(() => {
                      const pron = formatVerbPronunciation(verb.pronunciation, lang);
                      return pron ? (
                        <p className="bn mt-0.5 text-xs font-semibold text-ink-3">{pron}</p>
                      ) : null;
                    })()}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <SpeakButton text={verb.infinitive} size={38} onSpeak={() => onMarkStudied(verb.id)} />
                    {studied && (
                      <CheckCircle2
                        size={22}
                        className="text-neon"
                        aria-label={tr({ bn: 'সম্পন্ন', en: 'studied', it: 'studiato' })}
                      />
                    )}
                  </div>
                </div>

                <p className="bn text-xs sm:text-sm leading-relaxed text-ink-2">{tr(verb.usageNote)}</p>

                {/* Tense switcher */}
                <div className="flex flex-wrap gap-1.5">
                  {verb.conjugations.map((c, idx) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setTenseByVerb((prev) => ({ ...prev, [verb.id]: idx }))}
                      className={cx(
                        'min-h-9 rounded-xl border px-3 text-xs font-extrabold transition',
                        activeTenseIdx === idx
                          ? 'bg-grad-primary border-transparent text-navy-950'
                          : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                      )}
                    >
                      {tr(c.tense)}
                    </button>
                  ))}
                </div>

                {/* 6-person conjugation grid */}
                <div className="grid grid-cols-2 gap-2">
                  {table.forms.map((form, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2"
                    >
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-ink-3">{PRONOUNS[i]}</p>
                        <p className="text-sm font-extrabold text-white truncate">{form}</p>
                      </div>
                      {form !== '—' && (
                        <SpeakButton
                          text={form.replace(/\/[ae]\b/g, '')}
                          size={30}
                          onSpeak={() => onMarkStudied(verb.id)}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Example sentences */}
                <div className="space-y-2">
                  {verb.examples.map((ex, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/4 px-3.5 py-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-bold text-mint">{ex.it}</p>
                        <p className="bn mt-0.5 text-xs text-ink-2">{tr(ex.tr)}</p>
                      </div>
                      <SpeakButton text={ex.it} size={34} onSpeak={() => onMarkStudied(verb.id)} />
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button
                    variant={studied ? 'ghost' : 'primary'}
                    className="min-h-11 px-5 text-sm"
                    onClick={() => onMarkStudied(verb.id)}
                  >
                    <CheckCircle2 size={17} />
                    <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                  </Button>
                </div>
              </GlassCard>
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

      {tab === 'rules' && (
        <div className="space-y-3">
          {grammarTopics.map((topic) => (
            <GlassCard key={topic.id} className="p-4 sm:p-5 space-y-2.5">
              <p className="text-xs font-extrabold uppercase text-cyan">{topic.title}</p>
              <h3 className="bn text-lg font-extrabold text-white">{tr(topic.name)}</h3>
              <p className="bn text-sm leading-relaxed text-ink">{tr(topic.explanation)}</p>
              {topic.table && topic.table.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {topic.table.map(([l, r], idx) => (
                    <div key={idx} className="flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs">
                      <span className="bn font-bold text-ink-2">{l}</span>
                      <span className="font-extrabold text-neon text-right">{r}</span>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>
      )}

      {tab === 'practice' && currentQ && (
        <GlassCard neon className="p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-cyan">
                {tr({ bn: 'ক্রিয়া অনুশীলন', en: 'Interactive Verb Drill', it: 'Pratica sui verbi' })}
              </p>
              <h2 className="bn mt-1 text-base font-bold text-ink-2">{tr(currentQ.prompt)}</h2>
              {currentQ.it && <p className="mt-1.5 text-xl font-extrabold text-white">{currentQ.it}</p>}
            </div>
            {currentQ.audioIt && <SpeakButton text={currentQ.audioIt} size={42} />}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
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
                    'glass min-h-13 rounded-2xl px-3.5 py-2.5 text-left text-sm font-extrabold text-white transition',
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
          onReviewContent={() => setTab('verbs')}
          onNavigateModule={onNavigateModule}
        />
      )}
    </div>
  );
}
