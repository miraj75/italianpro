import { useEffect, useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, ChevronRight, FileText, RotateCcw } from 'lucide-react';
import type { ReadingKind, ReadingPassage } from '../../content/academyTypes';
import { LESSON_PASS_SCORE, type Tr } from '../../content/types';
import type { BankLevel } from '../../content/bank';
import { loadLevelReading } from '../../content/registry';
import { grammarById } from '../../content/grammar';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, FilterChipRow, GlassCard, Pill, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';
import { QuizRunner, type QuizResult } from '../../components/QuizRunner';

const READING_KINDS: Record<ReadingKind, Tr> = {
  story: { bn: 'গল্প', en: 'Story', it: 'Storia' },
  dialogue: { bn: 'সংলাপ', en: 'Dialogue', it: 'Dialogo' },
  letter: { bn: 'চিঠি', en: 'Letter', it: 'Lettera' },
  email: { bn: 'ইমেইল', en: 'Email', it: 'Email' },
  message: { bn: 'মেসেজ', en: 'Message', it: 'Messaggio' },
  notice: { bn: 'বিজ্ঞপ্তি', en: 'Notice', it: 'Avviso' },
  article: { bn: 'প্রবন্ধ', en: 'Article', it: 'Articolo' },
  travel: { bn: 'ভ্রমণ', en: 'Travel', it: 'Viaggio' },
  news: { bn: 'সংবাদ', en: 'News', it: 'Notizie' },
  opinion: { bn: 'মতামত', en: 'Opinion', it: 'Opinione' },
  essay: { bn: 'রচনা', en: 'Essay', it: 'Saggio' },
};

export function ReadingScreen() {
  const { route, navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [passages, setPassages] = useState<ReadingPassage[]>([]);
  const [loading, setLoading] = useState(true);
  const [kind, setKind] = useState<ReadingKind | 'all'>('all');
  const [active, setActive] = useState<ReadingPassage | null>(null);
  const [showTr, setShowTr] = useState(true);
  const [quizKey, setQuizKey] = useState(0);
  const [quizResult, setQuizResult] = useState<QuizResult[] | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    setActive(null);
    setQuizResult(null);
    void loadLevelReading(level).then((list) => {
      if (!mounted) return;
      setPassages(list);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, [level]);

  const kinds = useMemo(() => [...new Set(passages.map((p) => p.kind))], [passages]);
  const filtered = useMemo(
    () => (kind === 'all' ? passages : passages.filter((p) => p.kind === kind)),
    [passages, kind],
  );

  if (active) {
    const done = !!state.readingDone[active.id];
    return (
      <div className="animate-rise max-w-full space-y-4 overflow-x-hidden">
        <SubHeader
          title={active.titleIt}
          subtitle={`${active.level} · ${tr(READING_KINDS[active.kind])} · ${tr(active.title)}`}
          right={
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => { setQuizResult(null); setActive(null); }}>
              {t('all')}
            </Button>
          }
        />

        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setShowTr((v) => !v)}>
            {showTr ? t('hideTranslation') : t('showTranslation')}
          </Button>
          {active.storyId && (
            <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => navigate(`/practice/stories/${active.storyId}`)}>
              <BookOpen size={16} /> {t('stories')}
            </Button>
          )}
        </div>

        <GlassCard neon className="space-y-4 p-5">
          {active.paragraphs.map((p, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <SpeakButton text={p.it} size={34} />
              <div className="min-w-0 flex-1">
                <p className="text-[1.08rem] leading-relaxed font-semibold">{p.it}</p>
                {showTr && <p className="bn mt-1.5 text-[0.95rem] leading-relaxed text-ink-2">{tr(p.tr)}</p>}
              </div>
            </div>
          ))}
        </GlassCard>

        <GlassCard className="p-4">
          <h2 className="mb-2 text-base font-extrabold">{t('wordBank')}</h2>
          <div className="flex flex-wrap gap-2">
            {active.vocabHighlights.map((v) => (
              <div key={v.it} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm">
                <SpeakButton text={v.it} size={28} />
                <span className="font-bold text-mint">{v.it}</span>
                <span className="bn text-xs text-ink-2">— {tr(v.tr)}</span>
              </div>
            ))}
          </div>

          {active.grammarHighlights.length > 0 && (
            <div className="mt-4 space-y-2 border-t border-white/10 pt-3">
              <h3 className="text-sm font-extrabold text-cyan">{t('grammar')}</h3>
              {active.grammarHighlights.map((gh, i) => {
                const g = grammarById(gh.grammarId);
                return (
                  <div key={i} className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-white/5 px-3 py-2 text-sm">
                    <div>
                      <span className="font-bold text-mint">{gh.excerpt}</span>
                      <span className="bn ml-2 text-xs text-ink-2">{tr(gh.note)}</span>
                    </div>
                    {g && (
                      <button
                        type="button"
                        onClick={() => navigate(`/grammar/${g.id}`)}
                        className="text-xs font-bold text-cyan hover:underline"
                      >
                        {g.title} →
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </GlassCard>

        <GlassCard className="p-4">
          <h2 className="mb-3 text-lg font-extrabold">{t('comprehensionCheck')}</h2>
          {quizResult ? (
            (() => {
              const correct = quizResult.filter((r) => r.correct).length;
              const total = Math.max(1, quizResult.length);
              const score = correct / total;
              const passed = score >= LESSON_PASS_SCORE;
              return (
                <div className="animate-rise py-4 text-center">
                  <p className="text-5xl font-extrabold text-grad-primary tabular-nums">{Math.round(score * 100)}%</p>
                  <p className="mt-1 text-sm font-bold text-ink-2 tabular-nums">
                    {t('score')}: {correct}/{total}
                  </p>
                  <p className={cx('bn mt-3 text-lg font-bold', passed ? 'text-neon' : 'text-gold')}>
                    {passed ? t('quizPassed') : t('quizFailed')}
                  </p>
                  <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <Button
                      variant="ghost"
                      onClick={() => {
                        setQuizResult(null);
                        setQuizKey((k) => k + 1);
                      }}
                    >
                      <RotateCcw size={18} /> {t('retry')}
                    </Button>
                    <Button
                      onClick={() => {
                        setQuizResult(null);
                        setActive(null);
                      }}
                    >
                      {t('continue')}
                    </Button>
                  </div>
                </div>
              );
            })()
          ) : (
            <QuizRunner
              key={`${active.id}-${quizKey}`}
              questions={active.questions}
              onFinish={(results) => {
                setQuizResult(results);
                const score = results.filter((r) => r.correct).length / Math.max(1, results.length);
                if (score > 0) {
                  dispatch({ type: 'completeReading', readingId: active.id, score, today: dayKey() });
                }
              }}
            />
          )}
          {done && (
            <p className="mt-3 flex items-center gap-1.5 text-sm font-bold text-neon">
              <CheckCircle2 size={16} /> {t('completed')}
            </p>
          )}
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="animate-rise max-w-full space-y-3 overflow-x-hidden">
      <SubHeader title={t('readingAcademy')} subtitle={t('readingAcademySub')} />
      <LevelTabs value={level} onChange={(l) => { setLevel(l); setKind('all'); }} />

      <FilterChipRow label={t('readingAcademy')}>
        <Pill active={kind === 'all'} onClick={() => setKind('all')}>
          {t('all')} ({passages.length})
        </Pill>
        {kinds.map((k) => (
          <Pill key={k} active={kind === k} onClick={() => setKind(k)}>
            {tr(READING_KINDS[k])}
          </Pill>
        ))}
      </FilterChipRow>

      {loading ? (
        <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>
      ) : filtered.length === 0 ? (
        <GlassCard className="p-6 text-center text-ink-2">{t('inPreparation')}</GlassCard>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((p) => {
            const done = !!state.readingDone[p.id];
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => {
                  setActive(p);
                  setQuizKey(0);
                  setQuizResult(null);
                }}
                className="h-full w-full min-w-0 text-left"
              >
                <GlassCard neon={done} className="flex h-full w-full min-w-0 items-center gap-3 p-4 transition hover:border-neon/40">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-neon/30 bg-neon/10 text-neon">
                    <FileText size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-ink-3 tabular-nums">
                      {tr(READING_KINDS[p.kind])} · {p.readingMinutes} {t('minutes')}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-base leading-snug font-extrabold break-words">{p.titleIt}</p>
                    <p className="bn mt-0.5 line-clamp-2 text-sm text-ink-2 break-words">{tr(p.title)}</p>
                  </div>
                  {done ? <CheckCircle2 size={18} className="text-neon shrink-0" /> : <ChevronRight size={18} className="text-ink-3 shrink-0" />}
                </GlassCard>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
