import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Layers,
  Plus,
  RotateCcw,
  Square,
  Volume2,
  XCircle,
} from 'lucide-react';
import type { LevelId } from '../../content/types';
import type { StoryItem, StoryWordGlossary } from '../../content/academyTypes';
import { loadLevelStories, findStoryById } from '../../content/registry';
import { grammarById } from '../../content/grammar';
import { WORDS } from '../../content/bank';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { speakItalian, stopSpeaking } from '../../lib/speech';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { Button, GlassCard, Pill, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';
import type { BankLevel } from '../../content/bank';

export function StoriesScreen() {
  const { route, navigate } = useRouter();
  const { state } = useProgress();
  const { t, tr, lang } = useI18n();
  useStudyTimer();

  const initial = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initial) ? initial : 'A1');
  const [stories, setStories] = useState<StoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  useEffect(() => {
    let active = true;
    setLoading(true);
    void loadLevelStories(level).then((list) => {
      if (!active) return;
      setStories(list);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [level]);

  const filtered = useMemo(
    () => (onlyBookmarked ? stories.filter((s) => state.bookmarkedStories.includes(s.id)) : stories),
    [stories, onlyBookmarked, state.bookmarkedStories],
  );

  const doneCount = stories.filter((s) => state.storiesDone[s.id]).length;

  return (
    <div className="animate-rise">
      <SubHeader title={t('stories')} subtitle={t('storiesSub')} />
      <LevelTabs value={level} onChange={(l) => setLevel(l)} />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold tabular-nums text-ink-2">
          {level}: {doneCount}/{stories.length} {t('completed')}
        </p>
        <div className="flex gap-2">
          <Pill active={!onlyBookmarked} onClick={() => setOnlyBookmarked(false)}>
            {t('all')} ({stories.length})
          </Pill>
          <Pill active={onlyBookmarked} onClick={() => setOnlyBookmarked(true)}>
            <Bookmark size={14} className="mr-1 inline" /> {t('bookmarked')}
          </Pill>
        </div>
      </div>

      {loading ? (
        <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>
      ) : filtered.length === 0 ? (
        <GlassCard className="p-6 text-center text-ink-2">
          {stories.length === 0 ? t('inPreparation') : '—'}
        </GlassCard>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {filtered.map((s) => {
            const done = !!state.storiesDone[s.id];
            const saved = state.bookmarkedStories.includes(s.id);
            return (
              <button key={s.id} type="button" onClick={() => navigate(`/practice/stories/${s.id}`)} className="text-left">
                <GlassCard neon={done} className="flex h-full flex-col justify-between p-4 transition hover:border-neon/40">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-ink-3 tabular-nums">
                        {s.level} · {s.readingMinutes} {t('minutes')} · {s.topic[lang]}
                      </p>
                      <div className="flex items-center gap-1.5 shrink-0">
                        {saved && <Bookmark size={15} className="text-gold fill-gold" aria-label="bookmarked" />}
                        {done && <CheckCircle2 size={17} className="text-neon" aria-label="completed" />}
                      </div>
                    </div>
                    <h2 className="mt-1 text-lg font-extrabold">{s.titleIt}</h2>
                    <p className="bn text-[0.95rem] font-semibold text-ink-2">{tr(s.title)}</p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold text-cyan">
                    <span>
                      {s.grammarBreakdown.length} {t('grammar')} · {s.wordGlossary.length} {t('wordsLabel')}
                    </span>
                    <ChevronRight size={18} className="text-ink-3" />
                  </div>
                </GlassCard>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function StoryReaderScreen({ storyId }: { storyId: string }) {
  const { navigate } = useRouter();
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  useStudyTimer();

  const [story, setStory] = useState<StoryItem | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [showTr, setShowTr] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [activePara, setActivePara] = useState<number | null>(null);
  const [selectedWord, setSelectedWord] = useState<StoryWordGlossary | null>(null);

  // Comprehension states
  const [mcqChoice, setMcqChoice] = useState<Record<string, number>>({});
  const [tfChoice, setTfChoice] = useState<Record<string, boolean>>({});
  const [fbChoice, setFbChoice] = useState<Record<string, number>>({});
  const [orderPicked, setOrderPicked] = useState<string[]>([]);
  const [orderChecked, setOrderChecked] = useState<boolean | null>(null);
  const [shortInputs, setShortInputs] = useState<Record<string, string>>({});
  const [shortChecked, setShortChecked] = useState<Record<string, boolean>>({});
  const [creativeNotes, setCreativeNotes] = useState<Record<string, string>>({});
  const [showSample, setShowSample] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let active = true;
    setLoaded(false);
    void findStoryById(storyId).then((st) => {
      if (!active) return;
      setStory(st ?? null);
      setLoaded(true);
    });
    return () => {
      active = false;
      void stopSpeaking();
    };
  }, [storyId]);

  const shuffledOrder = useMemo(() => {
    if (!story) return [];
    const list = [...story.comprehension.orderSentences];
    return list.sort((a, b) => a.localeCompare(b));
  }, [story]);

  if (!loaded) return <GlassCard className="p-6 text-center text-ink-2">...</GlassCard>;
  if (!story) {
    return (
      <div className="py-10 text-center">
        <p className="text-ink-2">Story not found</p>
        <Button variant="ghost" className="mt-4" onClick={() => navigate('/practice/stories')}>
          <ArrowLeft size={18} /> {t('stories')}
        </Button>
      </div>
    );
  }

  const bookmarked = state.bookmarkedStories.includes(story.id);
  const done = !!state.storiesDone[story.id];

  const playStory = async (rate: number) => {
    setPlaying(true);
    try {
      for (let i = 0; i < story.paragraphs.length; i++) {
        setActivePara(i);
        await speakItalian(story.paragraphs[i]!.it, rate);
      }
    } catch {
      // handled gracefully
    } finally {
      setPlaying(false);
      setActivePara(null);
    }
  };

  const stopAudio = () => {
    void stopSpeaking();
    setPlaying(false);
    setActivePara(null);
  };

  const findBankKey = (word: string, level: LevelId): string | null => {
    const clean = word.toLowerCase();
    const hit = WORDS[level].find((w) => w.it.toLowerCase() === clean || w.it.toLowerCase().endsWith(` ${clean}`));
    return hit?.key ?? null;
  };

  const saveGlossaryWord = (g: StoryWordGlossary) => {
    const key = findBankKey(g.base, story.level);
    if (key) {
      dispatch({ type: 'addCards', keys: [key], today: dayKey() });
      if (!state.saved.includes(key)) dispatch({ type: 'toggleSaved', key });
    }
  };

  const renderParagraphTokens = (text: string) => {
    const glossaryMap = new Map(story.wordGlossary.map((g) => [g.word.toLowerCase(), g]));
    return text.split(/(\s+)/).map((tok, idx) => {
      const stripped = tok.replace(/^[.,!?;:'"«»()]+|[.,!?;:'"«»()]+$/g, '').toLowerCase();
      const match = glossaryMap.get(stripped);
      if (!match) return <span key={idx}>{tok}</span>;
      const isSelected = selectedWord?.word.toLowerCase() === match.word.toLowerCase();
      return (
        <button
          key={idx}
          type="button"
          onClick={() => setSelectedWord(match)}
          className={cx(
            'inline rounded px-0.5 underline decoration-neon/60 decoration-dotted underline-offset-4 transition',
            isSelected ? 'bg-neon/20 text-neon' : 'hover:bg-neon/10 hover:text-mint',
          )}
        >
          {tok}
        </button>
      );
    });
  };

  return (
    <div className="animate-rise space-y-5">
      <SubHeader
        title={story.titleIt}
        subtitle={`${story.level} · ${tr(story.title)}`}
        right={
          <button
            type="button"
            onClick={() => dispatch({ type: 'toggleBookmarkStory', storyId: story.id })}
            className={cx(
              'flex h-11 w-11 items-center justify-center rounded-full border transition',
              bookmarked ? 'border-gold/50 bg-gold/15 text-gold' : 'border-white/15 bg-white/5 text-ink-2',
            )}
            aria-label={t('bookmark')}
          >
            <Bookmark size={20} className={bookmarked ? 'fill-gold' : ''} />
          </button>
        }
      />

      {/* Audio & Reading Controls */}
      <GlassCard className="p-4">
        <p className="text-xs font-semibold text-ink-3">{t('ttsNotice')}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {playing ? (
            <Button variant="secondary" className="min-h-10 px-4 text-sm" onClick={stopAudio}>
              <Square size={16} /> {t('stop')}
            </Button>
          ) : (
            <>
              <Button className="min-h-10 px-4 text-sm" onClick={() => void playStory(0.92)}>
                <Volume2 size={17} /> {t('normalSpeed')}
              </Button>
              <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => void playStory(0.68)}>
                <Volume2 size={17} /> {t('slowSpeed')}
              </Button>
            </>
          )}
          <Button variant="ghost" className="min-h-10 px-4 text-sm" onClick={() => setShowTr((v) => !v)}>
            {showTr ? t('hideTranslation') : t('showTranslation')}
          </Button>
        </div>
      </GlassCard>

      {/* Interactive Story Text */}
      <GlassCard neon className="space-y-4 p-5">
        <p className="text-xs font-semibold text-cyan">{t('glossaryHint')}</p>
        {story.paragraphs.map((p, i) => (
          <div key={i} className={cx('rounded-2xl p-3 transition', activePara === i ? 'bg-neon/10 ring-1 ring-neon/40' : 'bg-white/[0.02]')}>
            <div className="flex items-start gap-3">
              <SpeakButton text={p.it} size={34} />
              <div className="min-w-0 flex-1">
                <p className="text-[1.12rem] leading-relaxed font-semibold">{renderParagraphTokens(p.it)}</p>
                {showTr && <p className="bn mt-2 text-[0.98rem] leading-relaxed text-ink-2">{tr(p.tr)}</p>}
                {p.grammarNote && <p className="bn mt-1.5 text-xs font-semibold text-mint">{tr(p.grammarNote)}</p>}
              </div>
            </div>
          </div>
        ))}
      </GlassCard>

      {/* Selected Tappable Word Inspector + Full Glossary */}
      <GlassCard className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-lg font-extrabold">{t('wordBank')}</h2>
          <span className="text-xs font-semibold text-ink-3 tabular-nums">{story.wordGlossary.length} {t('wordsLabel')}</span>
        </div>

        {selectedWord && (
          <div className="mt-3 rounded-2xl border border-neon/35 bg-neon/8 p-3.5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <SpeakButton text={selectedWord.word} size={34} />
                <div>
                  <p className="text-lg font-extrabold text-mint">
                    {selectedWord.word} <span className="text-xs font-semibold text-ink-3">({selectedWord.base} · {selectedWord.pos})</span>
                  </p>
                  <p className="bn text-sm font-semibold">{tr(selectedWord.tr)}</p>
                  {selectedWord.grammarHint && <p className="bn text-xs text-cyan">{tr(selectedWord.grammarHint)}</p>}
                </div>
              </div>
              {findBankKey(selectedWord.base, story.level) && (
                <Button variant="ghost" className="min-h-9 px-3 text-xs" onClick={() => saveGlossaryWord(selectedWord)}>
                  <Plus size={14} /> {t('addCard')}
                </Button>
              )}
            </div>
          </div>
        )}

        <div className="mt-3 flex flex-wrap gap-2">
          {story.wordGlossary.map((g) => (
            <button
              key={g.word + g.base}
              type="button"
              onClick={() => setSelectedWord(g)}
              className={cx(
                'rounded-xl border px-3 py-1.5 text-left text-sm font-semibold transition',
                selectedWord?.word === g.word ? 'border-neon bg-neon/15 text-neon' : 'border-white/10 bg-white/5 text-ink hover:border-white/25',
              )}
            >
              <span>{g.word}</span>
              <span className="bn ml-1.5 text-xs text-ink-3">— {tr(g.tr)}</span>
            </button>
          ))}
        </div>
      </GlassCard>

      {/* Grammar Breakdown linked to Grammar Academy */}
      <GlassCard className="p-4">
        <h2 className="mb-3 flex items-center gap-2 text-lg font-extrabold">
          <Layers size={18} className="text-violet" /> {t('grammarBreakdown')}
        </h2>
        <div className="space-y-3">
          {story.grammarBreakdown.map((gb, i) => {
            const topic = grammarById(gb.grammarId);
            return (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-base font-extrabold text-mint">{gb.sentenceIt}</p>
                    <p className="bn mt-0.5 text-sm font-bold text-gold">{tr(gb.ruleTitle)}</p>
                  </div>
                  <SpeakButton text={gb.sentenceIt} size={32} />
                </div>
                <p className="bn mt-1.5 text-sm text-ink-2">{tr(gb.explanation)}</p>
                {gb.verbForm && <p className="mt-1 text-xs font-semibold text-cyan">{gb.verbForm}</p>}
                {topic && (
                  <button
                    type="button"
                    onClick={() => navigate(`/grammar/${topic.id}`)}
                    className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-cyan hover:underline"
                  >
                    <BookOpen size={14} /> {topic.title} — {t('openGrammar')}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </GlassCard>

      {/* Multi-Mode Comprehension Check */}
      <GlassCard className="space-y-5 p-4">
        <h2 className="text-lg font-extrabold">{t('comprehensionCheck')}</h2>

        {/* 1. MCQ */}
        {story.comprehension.mcq.map((q) => {
          const picked = mcqChoice[q.id];
          return (
            <div key={q.id} className="space-y-2 border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
              <p className="bn font-bold">{tr(q.prompt)}</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {q.options.map((opt, idx) => {
                  const isRight = idx === q.answer;
                  const chosen = picked === idx;
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={picked !== undefined}
                      onClick={() => setMcqChoice((c) => ({ ...c, [q.id]: idx }))}
                      className={cx(
                        'rounded-xl border px-3 py-2.5 text-left text-sm font-bold transition',
                        picked === undefined
                          ? 'border-white/15 bg-white/5 hover:border-neon/40'
                          : isRight
                            ? 'border-neon bg-neon/15 text-neon'
                            : chosen
                              ? 'border-pink bg-pink/15 text-pink'
                              : 'border-white/10 opacity-60',
                      )}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {picked !== undefined && <p className="bn text-xs font-semibold text-mint">{tr(q.explanation)}</p>}
            </div>
          );
        })}

        {/* 2. True / False */}
        {story.comprehension.trueFalse.map((tf) => {
          const picked = tfChoice[tf.id];
          return (
            <div key={tf.id} className="space-y-2 border-t border-white/10 pt-3">
              <p className="text-sm font-bold text-mint">{tf.statementIt}</p>
              <p className="bn text-sm text-ink-2">{tr(tf.statement)}</p>
              <div className="flex gap-2">
                {[true, false].map((val) => {
                  const isRight = val === tf.answer;
                  const chosen = picked === val;
                  return (
                    <button
                      key={String(val)}
                      type="button"
                      disabled={picked !== undefined}
                      onClick={() => setTfChoice((c) => ({ ...c, [tf.id]: val }))}
                      className={cx(
                        'min-h-10 rounded-xl border px-4 text-sm font-bold transition',
                        picked === undefined
                          ? 'border-white/15 bg-white/5 hover:border-neon/40'
                          : isRight
                            ? 'border-neon bg-neon/15 text-neon'
                            : chosen
                              ? 'border-pink bg-pink/15 text-pink'
                              : 'border-white/10 opacity-60',
                      )}
                    >
                      {val ? 'Vero / সত্য' : 'Falso / মিথ্যা'}
                    </button>
                  );
                })}
              </div>
              {picked !== undefined && <p className="bn text-xs font-semibold text-mint">{tr(tf.explanation)}</p>}
            </div>
          );
        })}

        {/* 3. Fill in the Blank */}
        {story.comprehension.fillBlank.map((fb) => {
          const picked = fbChoice[fb.id];
          return (
            <div key={fb.id} className="space-y-2 border-t border-white/10 pt-3">
              <p className="font-bold">{fb.sentence}</p>
              <div className="flex flex-wrap gap-2">
                {fb.options.map((opt, idx) => {
                  const isRight = idx === fb.answer;
                  const chosen = picked === idx;
                  return (
                    <button
                      key={opt}
                      type="button"
                      disabled={picked !== undefined}
                      onClick={() => setFbChoice((c) => ({ ...c, [fb.id]: idx }))}
                      className={cx(
                        'min-h-10 rounded-xl border px-3.5 text-sm font-bold transition',
                        picked === undefined
                          ? 'border-white/15 bg-white/5 hover:border-neon/40'
                          : isRight
                            ? 'border-neon bg-neon/15 text-neon'
                            : chosen
                              ? 'border-pink bg-pink/15 text-pink'
                              : 'border-white/10 opacity-60',
                      )}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              {picked !== undefined && <p className="bn text-xs font-semibold text-mint">{tr(fb.explanation)}</p>}
            </div>
          );
        })}

        {/* 4. Sentence Ordering */}
        {story.comprehension.orderSentences.length > 1 && (
          <div className="space-y-2 border-t border-white/10 pt-3">
            <div className="flex items-center justify-between">
              <p className="bn text-sm font-bold text-cyan">{t('tapWords')}</p>
              <button
                type="button"
                onClick={() => {
                  setOrderPicked([]);
                  setOrderChecked(null);
                }}
                className="inline-flex items-center gap-1 text-xs font-bold text-ink-3 hover:text-ink"
              >
                <RotateCcw size={13} /> Reset
              </button>
            </div>
            <div className="space-y-1.5 rounded-2xl border border-dashed border-white/15 p-3">
              {orderPicked.length === 0 && <p className="text-xs text-ink-3">—</p>}
              {orderPicked.map((s, idx) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => {
                    if (orderChecked !== null) return;
                    setOrderPicked((p) => p.filter((x) => x !== s));
                  }}
                  className="block w-full rounded-xl bg-neon/15 px-3 py-2 text-left text-sm font-bold text-neon"
                >
                  {idx + 1}. {s}
                </button>
              ))}
            </div>
            <div className="space-y-1.5">
              {shuffledOrder
                .filter((s) => !orderPicked.includes(s))
                .map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setOrderPicked((p) => [...p, s])}
                    className="block w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-left text-sm font-semibold hover:border-neon/40"
                  >
                    {s}
                  </button>
                ))}
            </div>
            {orderPicked.length === story.comprehension.orderSentences.length && orderChecked === null && (
              <Button
                className="min-h-10 px-4 text-sm"
                onClick={() =>
                  setOrderChecked(orderPicked.every((s, i) => s === story.comprehension.orderSentences[i]))
                }
              >
                {t('check')}
              </Button>
            )}
            {orderChecked !== null && (
              <p className={cx('flex items-center gap-1.5 text-sm font-bold', orderChecked ? 'text-neon' : 'text-pink')}>
                {orderChecked ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                {orderChecked ? t('correct') : t('incorrect')}
              </p>
            )}
          </div>
        )}

        {/* 5. Short Answer */}
        {story.comprehension.shortAnswer.map((sa) => {
          const val = shortInputs[sa.id] ?? '';
          const checked = shortChecked[sa.id];
          const matchedCount = sa.keywords.filter((kw) => val.toLowerCase().includes(kw.toLowerCase())).length;
          return (
            <div key={sa.id} className="space-y-2 border-t border-white/10 pt-3">
              <p className="bn font-bold">{tr(sa.question)}</p>
              <div className="flex gap-2">
                <input
                  value={val}
                  onChange={(e) => setShortInputs((s) => ({ ...s, [sa.id]: e.target.value }))}
                  placeholder="Scrivi in italiano..."
                  className="glass min-h-11 flex-1 rounded-xl px-3 text-sm font-semibold outline-none placeholder:text-ink-3"
                />
                <Button className="min-h-11 px-4 text-sm" onClick={() => setShortChecked((c) => ({ ...c, [sa.id]: true }))}>
                  {t('check')}
                </Button>
              </div>
              {checked && (
                <div className="rounded-xl bg-white/5 p-3 text-sm">
                  <p className="font-bold text-cyan">
                    Keywords matched: {matchedCount}/{sa.keywords.length}
                  </p>
                  <p className="mt-1 font-semibold text-mint">Model: {sa.sampleAnswerIt}</p>
                </div>
              )}
            </div>
          );
        })}
      </GlassCard>

      {/* Creative Practice */}
      <GlassCard className="space-y-4 p-4">
        <h2 className="text-lg font-extrabold">{t('storyPractice')}</h2>
        {[
          { key: 'retell', title: tr(story.practice.retellPrompt), sample: '' },
          {
            key: 'complete',
            title: `${story.practice.completeMissing.promptIt} (${tr(story.practice.completeMissing.hint)})`,
            sample: story.practice.completeMissing.sampleIt,
          },
          {
            key: 'similar',
            title: `${story.practice.buildSimilar.patternIt} — ${tr(story.practice.buildSimilar.prompt)}`,
            sample: story.practice.buildSimilar.sampleIt,
          },
          { key: 'ending', title: tr(story.practice.altEndingPrompt), sample: '' },
        ].map((item) => (
          <div key={item.key} className="space-y-2 border-t border-white/10 pt-3 first:border-t-0 first:pt-0">
            <p className="bn text-sm font-bold">{item.title}</p>
            <textarea
              rows={2}
              value={creativeNotes[item.key] ?? ''}
              onChange={(e) => setCreativeNotes((n) => ({ ...n, [item.key]: e.target.value }))}
              placeholder="Scrivi qui in italiano..."
              className="glass w-full rounded-xl p-3 text-sm font-semibold outline-none placeholder:text-ink-3"
            />
            {item.sample && (
              <div>
                <button
                  type="button"
                  onClick={() => setShowSample((s) => ({ ...s, [item.key]: !s[item.key] }))}
                  className="text-xs font-bold text-cyan hover:underline"
                >
                  {showSample[item.key] ? t('hideModelAnswer') : t('showModelAnswer')}
                </button>
                {showSample[item.key] && <p className="mt-1 text-sm font-semibold text-mint">{item.sample}</p>}
              </div>
            )}
          </div>
        ))}
      </GlassCard>

      <Button
        className="w-full"
        onClick={() => dispatch({ type: 'completeStory', storyId: story.id, today: dayKey() })}
      >
        <CheckCircle2 size={20} /> {done ? `${t('completed')} ✓` : `${t('markDone')} (+25 XP)`}
      </Button>
    </div>
  );
}
