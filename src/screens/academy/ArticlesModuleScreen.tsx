import { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Layers,
  Lock,
  Sparkles,
} from 'lucide-react';
import {
  A1_ARTICLE_EXAM_POOL,
  A1_ARTICLE_EXAMPLES,
  A1_ARTICLE_RULES,
} from '../../content/academy/a1Articles';
import { shuffleArray } from '../../lib/examEngine';
import { resolveExamOptions, useI18n } from '../../lib/i18n';
import { loadModulePosition, saveModulePosition } from '../../lib/modulePosition';
import { useRouter } from '../../app/router';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { isShowAllLockedModulesEnabled } from '../../state/progress';
import {
  academyStudyStats,
  getAcademyModuleProgress,
  isAcademyModuleUnlocked,
} from '../../state/academyProgress';
import { Button, GlassCard, ProgressBar, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { AcademyExamRunner } from '../../components/AcademyExamRunner';

type Tab = 'theory' | 'examples' | 'practice' | 'exam';
type ExampleFilter = 'all' | 'definite' | 'indefinite';

export function ArticlesModuleScreen() {
  useStudyTimer();
  const { state, dispatch } = useProgress();
  const { route, navigate } = useRouter();
  const { lang, t, tr } = useI18n();
  const backRoute = route.params.get('from') === 'home' ? '/' : '/level/A1';

  const unlocked = isAcademyModuleUnlocked(state.academy, 'articles');
  const testingOverride = !unlocked && isShowAllLockedModulesEnabled(state);
  const modProg = getAcademyModuleProgress(state.academy, 'articles');
  const studiedSet = useMemo(() => new Set(modProg.studiedItems), [modProg.studiedItems]);
  const stats = academyStudyStats(state.academy, 'articles');

  const [tab, setTab] = useState<Tab>(() => {
    const saved = loadModulePosition('A1', 'articles')?.tab;
    return saved === 'theory' || saved === 'examples' || saved === 'practice' || saved === 'exam' ? saved : 'theory';
  });

  useEffect(() => {
    if (!unlocked || testingOverride) return;
    saveModulePosition('A1', 'articles', { tab });
  }, [unlocked, testingOverride, tab]);

  const [exFilter, setExFilter] = useState<ExampleFilter>('all');
  const [practiceRound, setPracticeRound] = useState(1);
  const [practiceIdx, setPracticeIdx] = useState(0);
  const [practicePick, setPracticePick] = useState<number | null>(null);

  const filteredExamples = useMemo(() => {
    if (exFilter === 'all') return A1_ARTICLE_EXAMPLES;
    return A1_ARTICLE_EXAMPLES.filter((e) => e.kind === exFilter);
  }, [exFilter]);

  const practiceDeck = useMemo(() => shuffleArray(A1_ARTICLE_EXAM_POOL), [practiceRound]);
  const currentPractice = practiceDeck[practiceIdx % practiceDeck.length]!;
  const practiceOpts = resolveExamOptions(currentPractice, lang);

  const markItem = (itemId: string) => {
    dispatch({ type: 'studyAcademyItem', moduleId: 'articles', itemId });
  };

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
          <span className="text-sm font-extrabold text-white">
            {tr({ bn: 'আর্টিকেল (Articoli)', en: 'Articles', it: 'Articoli' })}
          </span>
        </div>
        <GlassCard className="p-6 text-center space-y-4">
          <Lock className="mx-auto text-gold" size={38} />
          <p className="bn text-base font-bold text-ink-2">{t('academyModuleLocked')}</p>
          <Button onClick={() => navigate('/academy/a1/numbers')}>
            2. {tr({ bn: 'সংখ্যা (০–১০০)', en: 'Numbers (0–100)', it: 'Numeri (0–100)' })}
          </Button>
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

        <nav className="grid grid-cols-4 gap-0.5" role="tablist">
          {(
            [
              { id: 'theory', icon: BookOpen, label: { bn: 'থিওরি', en: 'Theory', it: 'Teoria' } },
              { id: 'examples', icon: Layers, label: { bn: 'উদাহরণ', en: 'Examples', it: 'Esempi' } },
              { id: 'practice', icon: Sparkles, label: { bn: 'অনুশীলন', en: 'Practice', it: 'Pratica' } },
              { id: 'exam', icon: GraduationCap, label: { bn: 'পরীক্ষা', en: 'Exam', it: 'Esame' } },
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

      {tab === 'theory' && (
        <div className="space-y-3.5">
          {A1_ARTICLE_RULES.map((rule) => {
            const studied = studiedSet.has(rule.id);
            return (
              <GlassCard key={rule.id} neon={studied} className="p-4 sm:p-5 space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-cyan">
                      {rule.kind === 'definite'
                        ? tr({ bn: 'নির্দিষ্ট আর্টিকেল', en: 'Definite', it: 'Articolo determinativo' })
                        : tr({ bn: 'অনির্দিষ্ট আর্টিকেল', en: 'Indefinite', it: 'Articolo indeterminativo' })}
                    </p>
                    <h2 className="bn text-lg sm:text-xl font-extrabold text-white">{tr(rule.title)}</h2>
                    <p className="bn mt-1 text-sm font-semibold text-mint">{tr(rule.summary)}</p>
                  </div>
                  {studied && (
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-neon"
                      aria-label={tr({ bn: 'সম্পন্ন', en: 'studied', it: 'studiato' })}
                    />
                  )}
                </div>

                <p className="bn text-sm leading-relaxed text-ink">{tr(rule.explanation)}</p>

                <div className="space-y-2">
                  {rule.forms.map((form, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-3.5 py-2.5"
                    >
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-extrabold text-neon">{form.article}</p>
                        <p className="bn text-xs text-ink-2">{tr(form.usage)}</p>
                        <p className="mt-1 text-sm font-bold text-white">
                          {form.singularIt}
                          {form.pluralIt ? ` → ${form.pluralIt}` : ''}
                        </p>
                        <p className="bn text-xs text-ink-3">{tr(form.tr)}</p>
                      </div>
                      <SpeakButton
                        text={form.pluralIt ? `${form.singularIt}. ${form.pluralIt}` : form.singularIt}
                        size={38}
                      />
                    </div>
                  ))}
                </div>

                {rule.exceptions && (
                  <div className="rounded-2xl border border-gold/30 bg-gold/8 p-3.5 space-y-1">
                    <p className="bn text-xs font-extrabold text-gold uppercase">{t('exceptionsLabel')}</p>
                    <p className="bn text-xs sm:text-sm text-ink">{tr(rule.exceptions)}</p>
                  </div>
                )}

                {rule.commonMistakes.length > 0 && (
                  <div className="rounded-2xl border border-pink/30 bg-pink/8 p-3.5 space-y-2">
                    <p className="bn flex items-center gap-1.5 text-xs font-extrabold text-pink uppercase">
                      <AlertTriangle size={14} /> {t('commonMistakes')}
                    </p>
                    {rule.commonMistakes.map((m, i) => (
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

                <div className="pt-1 flex justify-end">
                  <Button
                    variant={studied ? 'ghost' : 'primary'}
                    className="min-h-10 px-4 text-sm"
                    onClick={() => markItem(rule.id)}
                  >
                    <CheckCircle2 size={16} />
                    <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                  </Button>
                </div>
              </GlassCard>
            );
          })}
        </div>
      )}

      {tab === 'examples' && (
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {(
              [
                { id: 'all', label: { bn: 'সব উদাহরণ', en: 'All Examples', it: 'Tutti gli esempi' } },
                { id: 'definite', label: { bn: 'নির্দিষ্ট (il, lo, la, l’, i, gli, le)', en: 'Definite', it: 'Determinativi' } },
                { id: 'indefinite', label: { bn: 'অনির্দিষ্ট (un, uno, una, un’)', en: 'Indefinite', it: 'Indeterminativi' } },
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setExFilter(f.id)}
                className={cx(
                  'min-h-9 rounded-xl border px-3 text-xs font-extrabold transition',
                  exFilter === f.id
                    ? 'bg-grad-primary border-transparent text-navy-950 glow-neon'
                    : 'border-white/15 bg-white/5 text-ink-2 hover:text-white',
                )}
              >
                <span className="bn">{tr(f.label)}</span>
              </button>
            ))}
          </div>

          <div className="space-y-2.5">
            {filteredExamples.map((ex) => {
              const studied = studiedSet.has(ex.id);
              const kindLabel =
                ex.kind === 'definite'
                  ? tr({ bn: 'নির্দিষ্ট', en: 'Definite', it: 'Determinativo' })
                  : tr({ bn: 'অনির্দিষ্ট', en: 'Indefinite', it: 'Indeterminativo' });
              const genderLabel =
                ex.gender === 'm'
                  ? tr({ bn: 'পুং', en: 'Masc.', it: 'Masch.' })
                  : tr({ bn: 'স্ত্রী', en: 'Fem.', it: 'Femm.' });
              const pluralLabel = tr({ bn: 'বহুবচন:', en: 'Plural:', it: 'Plurale:' });
              return (
                <GlassCard key={ex.id} neon={studied} className="p-3.5 space-y-2">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1 space-y-1">
                      <p className="text-xs font-bold text-cyan tabular-nums">
                        {ex.article} · {kindLabel} · {genderLabel} · {ex.number}
                      </p>
                      <p className="text-base sm:text-lg font-extrabold text-white">{ex.it}</p>
                      {ex.pluralIt && (
                        <p className="text-sm font-bold text-mint">
                          {pluralLabel} {ex.pluralIt}
                        </p>
                      )}
                      <p className="bn text-sm font-semibold text-ink-2">{tr(ex.tr)}</p>
                      <p className="bn text-xs text-ink-3">{tr(ex.note)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <SpeakButton
                        text={ex.pluralIt ? `${ex.it} ${ex.pluralIt}` : ex.it}
                        size={40}
                        onSpeak={() => markItem(ex.id)}
                      />
                      <button
                        type="button"
                        onClick={() => markItem(ex.id)}
                        className={cx(
                          'inline-flex min-h-8 items-center gap-1 rounded-xl border px-2.5 text-xs font-bold transition',
                          studied
                            ? 'border-neon/50 bg-neon/15 text-neon'
                            : 'border-white/15 bg-white/5 text-ink-2 hover:border-neon/40',
                        )}
                      >
                        <CheckCircle2 size={13} />
                        <span className="bn">{studied ? t('academyStudiedBadge') : t('academyMarkStudied')}</span>
                      </button>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </div>

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
              <p className="text-xs font-bold uppercase tracking-wide text-cyan">
                {tr({
                  bn: 'আর্টিকেল অনুশীলন',
                  en: 'Interactive Articles Practice',
                  it: 'Pratica sugli articoli',
                })}
              </p>
              <h2 className="bn mt-1 text-base font-bold text-ink-2">{tr(currentPractice.prompt)}</h2>
              {currentPractice.it && <p className="mt-1 text-2xl font-extrabold text-white">{currentPractice.it}</p>}
            </div>
            {currentPractice.audioIt && <SpeakButton text={currentPractice.audioIt} size={42} />}
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {practiceOpts.map((opt, idx) => {
              const picked = practicePick === idx;
              const correct = idx === currentPractice.answer;
              return (
                <button
                  key={`${currentPractice.id}-${opt}-${idx}`}
                  type="button"
                  disabled={practicePick !== null}
                  onClick={() => setPracticePick(idx)}
                  className={cx(
                    'glass min-h-14 rounded-2xl px-4 text-base font-extrabold text-white transition',
                    practicePick !== null && correct && 'border-neon bg-neon/15',
                    practicePick !== null && picked && !correct && 'border-pink bg-pink/15',
                  )}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {practicePick !== null && (
            <div className="space-y-3">
              <div
                className={cx(
                  'rounded-2xl border p-3.5',
                  practicePick === currentPractice.answer ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10',
                )}
              >
                <p className="font-extrabold text-white">
                  {practicePick === currentPractice.answer
                    ? t('correct')
                    : `${t('correctAnswer')}: ${practiceOpts[currentPractice.answer] ?? ''}`}
                </p>
                <p className="bn mt-1 text-xs sm:text-sm text-ink-2">{tr(currentPractice.explanation)}</p>
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
          moduleId="articles"
          onReviewContent={() => setTab('theory')}
          onNavigateModule={(route) => navigate(route)}
        />
      )}
    </div>
  );
}
