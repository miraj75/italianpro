import { useEffect, useMemo, useState } from 'react';
import {
  Apple,
  ArrowLeft,
  BookOpen,
  Briefcase,
  Calendar,
  Car,
  Check,
  CheckCircle2,
  CloudSun,
  Coins,
  FlaskConical,
  GraduationCap,
  HeartPulse,
  HelpCircle,
  Home,
  Languages,
  Lock,
  MapPin,
  Plus,
  Search,
  Shirt,
  ShoppingCart,
  Smartphone,
  Smile,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { A1_VOCAB_TOPICS, type A1VocabTopicGroup } from '../../content/academy/a1Vocabulary';
import { RICH_WORDS } from '../../content/bank';
import { shuffleArray } from '../../lib/examEngine';
import { dayKey } from '../../lib/date';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { matchesLocalizedSearch, resolveTr, useI18n } from '../../lib/i18n';
import { loadModulePosition, saveModulePosition } from '../../lib/modulePosition';
import { useRouter } from '../../app/router';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { isShowAllLockedModulesEnabled } from '../../state/progress';
import { academyStudyStats, getAcademyModuleProgress, isAcademyModuleUnlocked } from '../../state/academyProgress';
import { Button, GlassCard, ProgressBar, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { AcademyExamRunner } from '../../components/AcademyExamRunner';

type Tab = 'learn' | 'practice' | 'exam';
type Hue = 'emerald' | 'violet' | 'cyan' | 'pink' | 'gold' | 'blue';

const TOPIC_VISUALS: { icon: LucideIcon; hue: Hue }[] = [
  { icon: Smile, hue: 'emerald' },
  { icon: Users, hue: 'cyan' },
  { icon: BookOpen, hue: 'violet' },
  { icon: Calendar, hue: 'blue' },
  { icon: Apple, hue: 'pink' },
  { icon: Home, hue: 'gold' },
  { icon: MapPin, hue: 'emerald' },
  { icon: Car, hue: 'cyan' },
  { icon: HeartPulse, hue: 'pink' },
  { icon: Shirt, hue: 'violet' },
  { icon: Briefcase, hue: 'blue' },
  { icon: Languages, hue: 'emerald' },
  { icon: Sparkles, hue: 'gold' },
  { icon: HelpCircle, hue: 'cyan' },
  { icon: CloudSun, hue: 'blue' },
  { icon: Coins, hue: 'gold' },
  { icon: ShoppingCart, hue: 'emerald' },
  { icon: Smile, hue: 'pink' },
  { icon: Smartphone, hue: 'violet' },
  { icon: Calendar, hue: 'cyan' },
];

const HUES: Record<Hue, { tile: string; icon: string }> = {
  emerald: {
    tile: 'from-[#084438]/90 via-[#072e28]/90 to-[#05201d]/95 border-neon/40',
    icon: 'text-neon',
  },
  violet: {
    tile: 'from-[#2e1c54]/90 via-[#1d173c]/90 to-[#0e1828]/95 border-violet/45',
    icon: 'text-violet',
  },
  cyan: {
    tile: 'from-[#073b46]/90 via-[#072834]/90 to-[#051d24]/95 border-cyan/40',
    icon: 'text-cyan',
  },
  blue: {
    tile: 'from-[#0b2f52]/90 via-[#09233e]/90 to-[#061b2c]/95 border-blue/45',
    icon: 'text-blue',
  },
  pink: {
    tile: 'from-[#44193d]/90 via-[#2a1530]/90 to-[#131726]/95 border-pink/40',
    icon: 'text-pink',
  },
  gold: {
    tile: 'from-[#3d3515]/90 via-[#252819]/90 to-[#0d201c]/95 border-gold/40',
    icon: 'text-gold',
  },
};

/**
 * A1 Vocabulary Module:
 * A1 Learning Hub -> Vocabulary -> Topic cards -> Individual words & example sentences -> Vocabulary exam.
 */
export function VocabularyModuleScreen() {
  useStudyTimer();
  const { state, dispatch } = useProgress();
  const { route, navigate } = useRouter();
  const { lang, t, tr } = useI18n();
  const backRoute = route.params.get('from') === 'home' ? '/' : '/level/A1';

  const [tab, setTab] = useState<Tab>(() => {
    const saved = loadModulePosition('A1', 'vocabulary')?.tab;
    return saved === 'learn' || saved === 'practice' || saved === 'exam' ? saved : 'learn';
  });
  const [activeTopicId, setActiveTopicId] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [practiceRound, setPracticeRound] = useState(1);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practicePick, setPracticePick] = useState<string | null>(null);

  const unlocked = isAcademyModuleUnlocked(state.academy, 'vocabulary');
  const testingOverride = !unlocked && isShowAllLockedModulesEnabled(state);
  const modProg = getAcademyModuleProgress(state.academy, 'vocabulary');
  const studiedSet = useMemo(() => new Set(modProg.studiedItems), [modProg.studiedItems]);
  const stats = academyStudyStats(state.academy, 'vocabulary');

  useEffect(() => {
    if (!unlocked || testingOverride) return;
    saveModulePosition('A1', 'vocabulary', { tab });
  }, [unlocked, testingOverride, tab]);

  const activeTopic: A1VocabTopicGroup | undefined = useMemo(
    () => A1_VOCAB_TOPICS.find((tp) => tp.id === activeTopicId),
    [activeTopicId],
  );

  const searchedWords = useMemo(() => {
    const q = query.trim();
    if (!q) return activeTopic ? activeTopic.words : [];
    const base = activeTopic ? activeTopic.words : RICH_WORDS.A1;
    return base.filter((w) => matchesLocalizedSearch(q, lang, w.it, w.tr));
  }, [activeTopic, lang, query]);

  const markWordStudied = (wordKey: string) => {
    dispatch({ type: 'studyAcademyItem', moduleId: 'vocabulary', itemId: wordKey });
  };

  // Practice deck randomized across all A1 words
  const practiceDeck = useMemo(() => shuffleArray(RICH_WORDS.A1), [practiceRound]);
  const currentPractice = practiceDeck[practiceIdx % practiceDeck.length]!;
  const practiceOptions = useMemo(() => {
    const curTr = resolveTr(lang, currentPractice.tr);
    const others = shuffleArray(
      RICH_WORDS.A1.filter(
        (w) =>
          w.key !== currentPractice.key &&
          w.tr.en !== currentPractice.tr.en &&
          w.tr.bn !== currentPractice.tr.bn &&
          resolveTr(lang, w.tr) !== curTr,
      ),
    ).slice(0, 3);
    return shuffleArray([currentPractice, ...others]);
  }, [currentPractice, lang]);

  if (!unlocked && !testingOverride) {
    return (
      <div className="animate-rise space-y-3">
        <div className="flex items-center gap-2.5 pb-1 border-b border-white/10">
          <button
            type="button"
            onClick={() => navigate(backRoute)}
            aria-label={tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-2 hover:border-neon/40 hover:text-white transition"
          >
            <ArrowLeft size={16} />
          </button>
          <span className="text-sm font-extrabold text-white">{t('wordBank')}</span>
        </div>
        <GlassCard className="p-6 text-center space-y-4">
          <Lock className="mx-auto text-gold" size={38} />
          <p className="bn text-base font-bold text-ink-2">{t('academyModuleLocked')}</p>
          <Button onClick={() => navigate('/level/A1')}>{t('backToCourses')}</Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="animate-rise space-y-3">
      {/* Compact Header & Integrated Progress Strip */}
      <div className="space-y-1.5 pb-1 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => navigate(backRoute)}
            aria-label={tr({ bn: 'ফিরুন', en: 'Back', it: 'Indietro' })}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-2 hover:border-neon/40 hover:text-white transition"
          >
            <ArrowLeft size={16} />
          </button>
          <div className="flex-1 min-w-0">
            <ProgressBar value={stats.studied / Math.max(1, stats.total)} className="h-1.5" />
          </div>
          <span className="shrink-0 text-[11px] font-extrabold text-neon tabular-nums">
            {stats.studied}/{stats.total}
          </span>
        </div>

        <nav className="grid grid-cols-3 gap-0.5" role="tablist">
          {(
            [
              { id: 'learn', icon: BookOpen, label: { bn: 'বিষয় ও শব্দ', en: 'Topics', it: 'Argomenti' } },
              { id: 'practice', icon: Sparkles, label: { bn: 'অনুশীলন', en: 'Practice', it: 'Pratica' } },
              { id: 'exam', icon: GraduationCap, label: { bn: 'পরীক্ষা (১০)', en: 'Exam (10 Q)', it: 'Esame (10)' } },
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
      </div>

      {testingOverride && (
        <div
          role="status"
          className="flex items-start gap-2.5 rounded-2xl border border-gold/50 bg-gold/10 px-4 py-3 text-xs font-extrabold text-gold"
        >
          <FlaskConical size={16} className="mt-0.5 shrink-0" />
          <span className="bn">{t('testingModePreviewBanner')}</span>
        </div>
      )}

      {tab === 'learn' && (
        <div className="space-y-3.5">
          {/* Search A1 words */}
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

          {/* Topic Selection Cards OR Selected Topic's Words */}
          {!activeTopic && !query.trim() ? (
            <div className="grid grid-cols-2 gap-3">
              {A1_VOCAB_TOPICS.map((topic, idx) => {
                const visual = TOPIC_VISUALS[idx % TOPIC_VISUALS.length]!;
                const Icon = visual.icon;
                const hue = HUES[visual.hue];
                const done = topic.words.filter((w) => studiedSet.has(w.key)).length;
                const total = topic.words.length;
                const topicDone = total > 0 && done === total;

                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setActiveTopicId(topic.id)}
                    className={cx(
                      'relative flex min-h-36 flex-col justify-between rounded-[1.35rem] border bg-gradient-to-br p-3.5 text-left backdrop-blur-md transition hover:brightness-110 active:scale-[0.98]',
                      hue.tile,
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <Icon size={26} strokeWidth={1.85} className={hue.icon} aria-hidden="true" />
                      {topicDone && (
                        <CheckCircle2
                          size={16}
                          className="text-neon"
                          aria-label={tr({ bn: 'সম্পন্ন', en: 'Completed', it: 'Completato' })}
                        />
                      )}
                    </div>

                    <div className="my-1.5 min-w-0">
                      <p className="bn text-[0.95rem] leading-tight font-extrabold text-white line-clamp-2">
                        {tr(topic.title)}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-bold text-ink-2 tabular-nums">
                        <span>{total} {t('wordsLabel')}</span>
                        <span className={topicDone ? 'text-neon' : ''}>{done}/{total}</span>
                      </div>
                      <ProgressBar value={total > 0 ? done / total : 0} className="h-1.5" />
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="space-y-3">
              {activeTopic && (
                <GlassCard className="p-3 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveTopicId(null)}
                    className="inline-flex min-h-9 items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 text-xs font-extrabold text-ink hover:border-neon/45"
                  >
                    <ArrowLeft size={14} />
                    <span className="bn">{tr({ bn: 'সব বিষয়', en: 'All Topics', it: 'Tutti gli argomenti' })}</span>
                  </button>
                  <p className="bn min-w-0 flex-1 text-right text-sm font-extrabold text-white truncate">
                    {tr(activeTopic.title)}
                  </p>
                </GlassCard>
              )}

              <div className="space-y-2.5">
                {searchedWords.map((w) => {
                  const studied = studiedSet.has(w.key);
                  const inDeck = !!state.cards[w.key];
                  return (
                    <GlassCard key={w.key} neon={studied} className="p-4 space-y-2.5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3 min-w-0 flex-1">
                          <SpeakButton
                            text={w.it}
                            size={40}
                            onSpeak={() => markWordStudied(w.key)}
                          />
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

                      {/* Supporting Example Sentence inside Word Entry */}
                      <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/4 px-3.5 py-2.5">
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-mint">{w.example.it}</p>
                          <p className="bn mt-0.5 text-xs text-ink-2">{tr(w.example.tr)}</p>
                        </div>
                        <SpeakButton
                          text={w.example.it}
                          size={34}
                          onSpeak={() => markWordStudied(w.key)}
                        />
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => markWordStudied(w.key)}
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
                {searchedWords.length === 0 && (
                  <GlassCard className="bn p-6 text-center text-sm text-ink-2">
                    {tr({
                      bn: 'কোনো মিল পাওয়া যায়নি।',
                      en: 'No matching words found.',
                      it: 'Nessuna parola trovata.',
                    })}
                  </GlassCard>
                )}
              </div>
            </div>
          )}

          {stats.readyForExam && (
            <Button className="w-full" onClick={() => setTab('exam')}>
              <GraduationCap size={18} />
              <span className="bn">
                {t('takeAssessment')} · {tr({ bn: '১০ প্রশ্ন', en: '10 Questions', it: '10 domande' })}
              </span>
            </Button>
          )}
        </div>
      )}

      {tab === 'practice' && (
        <GlassCard neon className="p-4 sm:p-5 space-y-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="bn text-xs font-bold uppercase tracking-wide text-cyan">
                {tr(currentPractice.topic)}
              </p>
              <p className="mt-1 text-2xl font-extrabold text-white">{currentPractice.it}</p>
              <p className="text-xs font-semibold text-ink-3">/{currentPractice.pronunciation}/</p>
            </div>
            <SpeakButton
              text={currentPractice.it}
              size={46}
              onSpeak={() => void speakItalian(currentPractice.it, 0.88, startSpeechSession()).catch(() => {})}
            />
          </div>

          <div className="grid gap-2.5">
            {practiceOptions.map((opt) => {
              const picked = practicePick === opt.key;
              const right = opt.key === currentPractice.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  disabled={practicePick !== null}
                  onClick={() => {
                    setPracticePick(opt.key);
                    markWordStudied(currentPractice.key);
                  }}
                  className={cx(
                    'glass min-h-13 rounded-2xl px-4 py-2.5 text-left font-bold transition',
                    practicePick !== null && right && 'border-neon bg-neon/15 text-neon',
                    practicePick !== null && picked && !right && 'border-pink bg-pink/15 text-pink',
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
                <p className="text-xs font-bold text-mint">{currentPractice.example.it}</p>
                <p className="bn text-xs text-ink-2">{tr(currentPractice.example.tr)}</p>
              </div>
              <Button
                className="w-full"
                onClick={() => {
                  setPracticePick(null);
                  if (practiceIdx + 1 >= practiceDeck.length) {
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
          moduleId="vocabulary"
          onReviewContent={() => setTab('learn')}
          onNavigateModule={(route) => navigate(route)}
        />
      )}
    </div>
  );
}
