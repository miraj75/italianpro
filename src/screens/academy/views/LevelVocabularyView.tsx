import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Check,
  CheckCircle2,
  GraduationCap,
  Plus,
  Quote,
  Search,
  Sparkles,
} from 'lucide-react';
import type { AcademyModuleMeta } from '../../../content/academy/types';
import { B2_COLLOCATIONS } from '../../../content/academy/levelVerbs';
import { PHRASES, RICH_WORDS, topicsOf } from '../../../content/bank';
import { dayKey } from '../../../lib/date';
import { shuffleArray } from '../../../lib/examEngine';
import { speakItalian, startSpeechSession } from '../../../lib/speech';
import { matchesLocalizedSearch, resolveTr, useI18n } from '../../../lib/i18n';
import { loadModulePosition, saveModulePosition } from '../../../lib/modulePosition';
import { useProgress } from '../../../state/ProgressContext';
import { Button, GlassCard, ProgressBar, cx } from '../../../components/ui';
import { SpeakButton } from '../../../components/SpeakButton';
import { AcademyExamRunner } from '../../../components/AcademyExamRunner';
import type { Tr } from '../../../content/types';

type Tab = 'learn' | 'practice' | 'exam';
type RegisterKey = 'all' | 'idiomatic' | 'formal' | 'colloquial' | 'academic';

const REGISTER_LABELS: Record<RegisterKey, Tr> = {
  all: { bn: 'সব', en: 'All', it: 'Tutte' },
  idiomatic: { bn: 'বাগধারা', en: 'Idiomatic', it: 'Idiomatico' },
  formal: { bn: 'আনুষ্ঠানিক', en: 'Formal', it: 'Formale' },
  academic: { bn: 'একাডেমিক', en: 'Academic', it: 'Accademico' },
  colloquial: { bn: 'কথ্য', en: 'Colloquial', it: 'Colloquiale' },
};

const TILE_HUES = [
  'from-[#084438]/90 via-[#072e28]/90 to-[#05201d]/95 border-neon/40',
  'from-[#073b46]/90 via-[#072834]/90 to-[#051d24]/95 border-cyan/40',
  'from-[#2e1c54]/90 via-[#1d173c]/90 to-[#0e1828]/95 border-violet/45',
  'from-[#0b2f52]/90 via-[#09233e]/90 to-[#061b2c]/95 border-blue/45',
  'from-[#3d3515]/90 via-[#252819]/90 to-[#0d201c]/95 border-gold/40',
  'from-[#44193d]/90 via-[#2a1530]/90 to-[#131726]/95 border-pink/40',
] as const;

interface LevelVocabularyViewProps {
  meta: AcademyModuleMeta;
  levelId: 'A2' | 'B1' | 'B2';
  studiedSet: Set<string>;
  readyForExam: boolean;
  previewMode?: boolean;
  onMarkStudied: (itemId: string) => void;
  onNavigateModule: (route: string) => void;
}

export function LevelVocabularyView({
  meta,
  levelId,
  studiedSet,
  readyForExam,
  previewMode = false,
  onMarkStudied,
  onNavigateModule,
}: LevelVocabularyViewProps) {
  const { state, dispatch } = useProgress();
  const { lang, t, tr } = useI18n();
  const [tab, setTab] = useState<Tab>(() => {
    const saved = loadModulePosition(levelId, meta.id)?.tab;
    return saved === 'learn' || saved === 'practice' || saved === 'exam' ? saved : 'learn';
  });

  useEffect(() => {
    if (previewMode) return;
    saveModulePosition(levelId, meta.id, { tab });
  }, [levelId, meta.id, tab, previewMode]);

  const [activeTopicEn, setActiveTopicEn] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [registerFilter, setRegisterFilter] = useState<RegisterKey>('all');
  const [practiceRound, setPracticeRound] = useState(1);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practicePick, setPracticePick] = useState<string | null>(null);

  const isIdioms = meta.kind === 'idioms';
  const topics = useMemo(() => topicsOf(levelId), [levelId]);
  const levelWords = RICH_WORDS[levelId];

  const searchedWords = useMemo(() => {
    const q = query.trim();
    const base = activeTopicEn ? levelWords.filter((w) => w.topic.en === activeTopicEn) : levelWords;
    if (!q) return activeTopicEn ? base : [];
    return base.filter((w) => matchesLocalizedSearch(q, lang, w.it, w.tr));
  }, [activeTopicEn, query, lang, levelWords]);

  const idiomsList = useMemo(() => {
    const q = query.trim();
    if (levelId === 'B1') {
      const b1Items = PHRASES.map((p) => ({
        id: p.key,
        it: p.it,
        tr: p.tr,
        register: 'idiomatic' as const,
        exampleIt: p.it,
        exampleTr: p.tr,
        isRequired: meta.requiredItemIds.includes(p.key),
      }));
      return q ? b1Items.filter((x) => matchesLocalizedSearch(q, lang, x.it, x.tr)) : b1Items;
    }
    const b2Colls = B2_COLLOCATIONS.filter((c) => registerFilter === 'all' || c.register === registerFilter).map((c) => ({
      ...c,
      isRequired: meta.requiredItemIds.includes(c.id),
    }));
    return q ? b2Colls.filter((x) => matchesLocalizedSearch(q, lang, x.it, x.tr)) : b2Colls;
  }, [levelId, query, lang, registerFilter, meta.requiredItemIds]);

  const practicePool = useMemo(() => {
    if (isIdioms) {
      return shuffleArray(
        levelId === 'B1'
          ? PHRASES.map((p) => ({ key: p.key, it: p.it, tr: p.tr, exampleIt: p.it, tag: p.topic }))
          : B2_COLLOCATIONS.map((c) => ({
              key: c.id,
              it: c.it,
              tr: c.tr,
              exampleIt: c.exampleIt,
              tag: REGISTER_LABELS[c.register] ?? { bn: c.register, en: c.register, it: c.register },
            })),
      );
    }
    return shuffleArray(
      levelWords.map((w) => ({ key: `topic:${levelId}:${w.topic.en}`, id: w.key, it: w.it, tr: w.tr, exampleIt: w.example.it, tag: w.topic })),
    );
  }, [isIdioms, levelId, levelWords, practiceRound]);

  const currentPractice = practicePool[practiceIdx % Math.max(1, practicePool.length)]!;
  const practiceOptions = useMemo(() => {
    const curTr = resolveTr(lang, currentPractice.tr);
    const others = shuffleArray(
      practicePool.filter(
        (o) =>
          o.it !== currentPractice.it &&
          o.tr.en !== currentPractice.tr.en &&
          o.tr.bn !== currentPractice.tr.bn &&
          resolveTr(lang, o.tr) !== curTr,
      ),
    ).slice(0, 3);
    return shuffleArray([currentPractice, ...others]);
  }, [currentPractice, lang, practicePool]);

  return (
    <div className="space-y-3">
      <nav className="grid grid-cols-3 gap-0.5 border-b border-white/10" role="tablist">
        {(
          [
            {
              id: 'learn',
              icon: isIdioms ? Quote : BookOpen,
              label: isIdioms
                ? { bn: `বাগধারা (${idiomsList.length})`, en: `Idioms (${idiomsList.length})`, it: `Espressioni (${idiomsList.length})` }
                : { bn: `বিষয় (${topics.length})`, en: `Topics (${topics.length})`, it: `Temi (${topics.length})` },
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

      {tab === 'learn' && (
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

          {isIdioms ? (
            <div className="space-y-3">
              {levelId === 'B2' && (
                <div className="flex flex-wrap gap-1.5">
                  {(['all', 'idiomatic', 'formal', 'academic', 'colloquial'] as const).map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => setRegisterFilter(reg)}
                      className={cx(
                        'bn min-h-9 rounded-xl border px-3 text-xs font-extrabold transition',
                        registerFilter === reg
                          ? 'bg-grad-primary border-transparent text-navy-950'
                          : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                      )}
                    >
                      {tr(REGISTER_LABELS[reg])}
                    </button>
                  ))}
                </div>
              )}

              {idiomsList.map((item) => {
                const studied = studiedSet.has(item.id);
                return (
                  <GlassCard key={item.id} neon={studied} className="p-4 space-y-2.5">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 text-[10px] font-extrabold uppercase">
                          <span className="bn text-cyan">{tr(REGISTER_LABELS[item.register] ?? { bn: item.register, en: item.register, it: item.register })}</span>
                          {item.isRequired && (
                            <>
                              <span className="text-ink-3" aria-hidden="true">·</span>
                              <span className="text-gold">{tr({ bn: 'মূল', en: 'Core', it: 'Base' })}</span>
                            </>
                          )}
                        </div>
                        <p className="mt-1.5 text-lg font-extrabold text-white">{item.it}</p>
                        <p className="bn mt-1 text-sm font-bold text-mint">{tr(item.tr)}</p>
                      </div>
                      <SpeakButton text={item.exampleIt} size={40} onSpeak={() => onMarkStudied(item.id)} />
                    </div>

                    {item.exampleIt !== item.it && (
                      <div className="rounded-2xl border border-white/10 bg-white/4 px-3.5 py-2.5">
                        <p className="text-sm font-bold text-ink">{item.exampleIt}</p>
                        <p className="bn mt-0.5 text-xs text-ink-2">{tr(item.exampleTr)}</p>
                      </div>
                    )}

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => onMarkStudied(item.id)}
                        className={cx(
                          'inline-flex min-h-9 items-center gap-1.5 rounded-xl border px-3 text-xs font-bold transition',
                          studied
                            ? 'border-neon/45 bg-neon/15 text-neon'
                            : 'border-white/15 bg-white/5 text-ink-2 hover:border-neon/45 hover:text-white',
                        )}
                      >
                        <CheckCircle2 size={14} />
                        <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                      </button>
                    </div>
                  </GlassCard>
                );
              })}
            </div>
          ) : !activeTopicEn && !query.trim() ? (
            <div className="grid grid-cols-2 gap-3">
              {topics.map((topic, idx) => {
                const topicKey = `topic:${levelId}:${topic.en}`;
                const wordsInTopic = levelWords.filter((w) => w.topic.en === topic.en);
                const topicDone = studiedSet.has(topicKey);
                return (
                  <button
                    key={topicKey}
                    type="button"
                    onClick={() => setActiveTopicEn(topic.en)}
                    className={cx(
                      'relative flex min-h-34 flex-col justify-between rounded-[1.35rem] border bg-gradient-to-br p-3.5 text-left backdrop-blur-md transition hover:brightness-110 active:scale-[0.98]',
                      TILE_HUES[idx % TILE_HUES.length],
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <BookOpen size={24} className="text-neon" />
                      {topicDone && (
                        <CheckCircle2
                          size={17}
                          className="text-neon"
                          aria-label={tr({ bn: 'সম্পন্ন', en: 'Completed', it: 'Completato' })}
                        />
                      )}
                    </div>
                    <div className="my-1.5 min-w-0">
                      <p className="bn text-[0.95rem] leading-tight font-extrabold text-white line-clamp-2">{tr(topic)}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-ink-2 tabular-nums">
                        <span>{wordsInTopic.length} {t('wordsLabel')}</span>
                        <span className={topicDone ? 'text-neon' : ''}>
                          {topicDone ? '✓' : tr({ bn: 'খুলুন', en: 'Open', it: 'Apri' })}
                        </span>
                      </div>
                      <ProgressBar value={topicDone ? 1 : 0} className="h-1.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {activeTopicEn && (
                <GlassCard className="p-3.5 flex flex-wrap items-center justify-between gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveTopicEn(null)}
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-extrabold text-ink hover:border-neon/45"
                  >
                    <ArrowLeft size={15} />
                    <span className="bn">{tr({ bn: 'সব বিষয়', en: 'All Topics', it: 'Tutti i temi' })}</span>
                  </button>
                  <div className="min-w-0 flex-1 text-right">
                    <p className="bn text-sm font-extrabold text-white truncate">
                      {(() => {
                        const found = topics.find((tp) => tp.en === activeTopicEn);
                        return found ? tr(found) : activeTopicEn;
                      })()}
                    </p>
                  </div>
                  <Button
                    variant={studiedSet.has(`topic:${levelId}:${activeTopicEn}`) ? 'ghost' : 'primary'}
                    className="w-full min-h-10 text-xs"
                    onClick={() => onMarkStudied(`topic:${levelId}:${activeTopicEn}`)}
                  >
                    <CheckCircle2 size={15} />
                    <span className="bn">
                      {studiedSet.has(`topic:${levelId}:${activeTopicEn}`) ? t('academyStudiedBadge') : t('academyMarkStudied')}
                    </span>
                  </Button>
                </GlassCard>
              )}

              <div className="space-y-2.5">
                {searchedWords.map((w) => {
                  const topicKey = `topic:${levelId}:${w.topic.en}`;
                  const topicStudied = studiedSet.has(topicKey);
                  const inDeck = !!state.cards[w.key];
                  return (
                    <GlassCard key={w.key} neon={topicStudied} className="p-4 space-y-2.5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0 flex-1">
                          <SpeakButton text={w.it} size={40} onSpeak={() => onMarkStudied(topicKey)} />
                          <div className="min-w-0 flex-1">
                            <p className="text-lg font-extrabold text-white leading-tight">
                              {w.it}{' '}
                              <span className="text-xs font-semibold text-cyan">
                                · {w.pos}
                                {w.gender !== 'none' ? ` (${w.gender})` : ''}
                              </span>
                            </p>
                            <p className="text-xs font-semibold text-ink-3">
                              /{w.pronunciation}/
                              {w.plural ? ` · ${tr({ bn: 'বহু:', en: 'Pl:', it: 'Pl:' })} ${w.plural}` : ''}
                            </p>
                            <p className="bn mt-1 text-sm font-bold text-ink">{tr(w.tr)}</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => !inDeck && dispatch({ type: 'addCards', keys: [w.key], today: dayKey() })}
                          aria-label={inDeck ? t('inDeck') : t('addCard')}
                          className={cx(
                            'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition',
                            inDeck ? 'border-neon/45 bg-neon/10 text-neon' : 'border-white/15 text-ink-2 hover:border-neon/40',
                          )}
                        >
                          {inDeck ? <Check size={16} /> : <Plus size={16} />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/4 px-3.5 py-2.5">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-mint">{w.example.it}</p>
                          <p className="bn mt-0.5 text-xs text-ink-2">{tr(w.example.tr)}</p>
                        </div>
                        <SpeakButton text={w.example.it} size={34} onSpeak={() => onMarkStudied(topicKey)} />
                      </div>
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

      {tab === 'practice' && (
        <GlassCard neon className="p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="bn text-xs font-bold uppercase tracking-wide text-cyan">
                {tr(currentPractice.tag)}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-white">{currentPractice.it}</p>
            </div>
            <SpeakButton
              text={currentPractice.it}
              size={46}
              onSpeak={() => void speakItalian(currentPractice.it, 0.88, startSpeechSession()).catch(() => {})}
            />
          </div>

          <div className="grid gap-2.5">
            {practiceOptions.map((opt) => {
              const picked = practicePick === opt.it;
              const right = opt.it === currentPractice.it;
              return (
                <button
                  key={opt.it}
                  type="button"
                  disabled={practicePick !== null}
                  onClick={() => {
                    setPracticePick(opt.it);
                    onMarkStudied(currentPractice.key);
                  }}
                  className={cx(
                    'glass min-h-13 rounded-2xl px-4 py-2.5 text-left font-bold transition',
                    practicePick !== null && right && 'border-neon bg-neon/15',
                    practicePick !== null && picked && !right && 'border-pink bg-pink/15',
                  )}
                >
                  <span className="bn block text-base text-white">{tr(opt.tr)}</span>
                </button>
              );
            })}
          </div>

          {practicePick !== null && (
            <div className="space-y-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5">
                <p className="text-xs font-bold text-mint">{currentPractice.exampleIt}</p>
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
          onReviewContent={() => setTab('learn')}
          onNavigateModule={onNavigateModule}
        />
      )}
    </div>
  );
}
