import { useEffect, useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, Lightbulb, RotateCcw, XCircle } from 'lucide-react';
import type { PuzzleChallenge, PuzzleType } from '../../content/academyTypes';
import type { Tr } from '../../content/types';
import type { BankLevel } from '../../content/bank';
import { loadLevelPuzzles } from '../../content/registry';
import { grammarById } from '../../content/grammar';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { dayKey } from '../../lib/date';
import { useProgress, useStudyTimer } from '../../state/ProgressContext';
import { isCorrect, puzzlePool, shuffleTiles, tokenize, type Tile } from '../../state/puzzle';
import { Button, GlassCard, Pill, ProgressBar, cx } from '../../components/ui';
import { SpeakButton } from '../../components/SpeakButton';
import { SubHeader } from '../../components/SubHeader';
import { LevelTabs, isBankLevel } from '../../components/LevelTabs';

const ROUND = 8;
const XP_PER_PUZZLE = 5;

const TYPE_LABELS: Record<PuzzleType, Tr> = {
  'word-order': { bn: 'শব্দ সাজানো', en: 'Word order', it: 'Ordine delle parole' },
  'sentence-build': { bn: 'বাক্য গঠন', en: 'Sentence build', it: 'Costruzione frase' },
  'missing-word': { bn: 'শূন্যস্থান', en: 'Missing word', it: 'Parola mancante' },
  translation: { bn: 'অনুবাদ', en: 'Translation', it: 'Traduzione' },
  'verb-conjugation': { bn: 'ক্রিয়া রূপান্তর', en: 'Verb form', it: 'Forma verbale' },
  'article-select': { bn: 'আর্টিকেল', en: 'Articles', it: 'Articoli' },
  'preposition-select': { bn: 'অব্যয়', en: 'Prepositions', it: 'Preposizioni' },
  'pronoun-place': { bn: 'সর্বনাম', en: 'Pronouns', it: 'Pronomi' },
  'grammar-fix': { bn: 'ভুল সংশোধন', en: 'Grammar fix', it: 'Correzione grammaticale' },
  'dialogue-complete': { bn: 'সংলাপ পূরণ', en: 'Dialogue', it: 'Dialogo' },
  'sentence-transform': { bn: 'বাক্য রূপান্তর', en: 'Transform', it: 'Trasformazione' },
  'story-reconstruct': { bn: 'গল্পের ক্রম', en: 'Story order', it: 'Ordine della storia' },
};

export function sentenceToChallenge(s: ReturnType<typeof puzzlePool>[number]): PuzzleChallenge {
  return {
    id: s.key,
    level: s.level,
    type: 'sentence-build',
    prompt: { bn: 'ইতালিয়ানে বাক্যটি গঠন করুন', en: 'Build this sentence in Italian', it: 'Costruisci questa frase in italiano' },
    answerIt: s.it,
    tiles: tokenize(s.it),
    tr: s.tr,
    grammarId: s.grammar,
    vocabKeys: [],
    explanation: grammarById(s.grammar)?.explanation ?? { bn: '', en: '', it: '' },
  };
}

export function PuzzleScreen() {
  const { route } = useRouter();
  const { t, tr } = useI18n();
  useStudyTimer();

  const initialLevel = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initialLevel) ? initialLevel : 'A1');
  const [grammar, setGrammar] = useState<string | null>(route.params.get('g'));
  const [ptype, setPtype] = useState<PuzzleType | 'all'>('all');
  const [explicitPuzzles, setExplicitPuzzles] = useState<PuzzleChallenge[]>([]);
  const [seed, setSeed] = useState(0);

  useEffect(() => {
    let active = true;
    void loadLevelPuzzles(level).then((list) => {
      if (active) setExplicitPuzzles(list);
    });
    return () => {
      active = false;
    };
  }, [level]);

  const combinedPool = useMemo(() => {
    const sentenceTiles = puzzlePool(level, grammar).map(sentenceToChallenge);
    const filteredExplicit = grammar ? explicitPuzzles.filter((p) => p.grammarId === grammar) : explicitPuzzles;
    const all = [...filteredExplicit, ...sentenceTiles];
    return ptype === 'all' ? all : all.filter((p) => p.type === ptype);
  }, [level, grammar, ptype, explicitPuzzles]);

  const grammarIds = useMemo(() => {
    const set = new Set<string>();
    for (const p of explicitPuzzles) set.add(p.grammarId);
    for (const s of puzzlePool(level)) set.add(s.grammar);
    return [...set];
  }, [level, explicitPuzzles]);

  const availableTypes = useMemo(() => [...new Set(explicitPuzzles.map((p) => p.type))], [explicitPuzzles]);

  return (
    <div className="animate-rise">
      <SubHeader title={t('puzzle')} subtitle={`${t('puzzleSub')} (${combinedPool.length})`} />
      <LevelTabs
        value={level}
        onChange={(l) => {
          setLevel(l);
          setGrammar(null);
          setPtype('all');
        }}
      />

      {availableTypes.length > 0 && (
        <div className="-mx-4 mb-2 flex gap-2 overflow-x-auto px-4 pb-1">
          <Pill active={ptype === 'all'} onClick={() => setPtype('all')}>
            {t('all')}
          </Pill>
          {availableTypes.map((tp) => (
            <Pill key={tp} active={ptype === tp} onClick={() => setPtype(tp)}>
              {tr(TYPE_LABELS[tp])}
            </Pill>
          ))}
        </div>
      )}

      <div className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
        <Pill active={grammar === null} onClick={() => setGrammar(null)}>
          {t('allGrammar')}
        </Pill>
        {grammarIds.map((g) => (
          <Pill key={g} active={grammar === g} onClick={() => setGrammar(g)}>
            {grammarById(g)?.title ?? g}
          </Pill>
        ))}
      </div>

      <PuzzleRound
        key={`${level}|${grammar}|${ptype}|${seed}|${combinedPool.length}`}
        pool={combinedPool}
        onRestart={() => setSeed((s) => s + 1)}
      />
    </div>
  );
}

function PuzzleRound({ pool, onRestart }: { pool: PuzzleChallenge[]; onRestart: () => void }) {
  const { dispatch } = useProgress();
  const { t } = useI18n();
  const [round] = useState(() => [...pool].sort(() => Math.random() - 0.5).slice(0, ROUND));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const item = round[index];

  if (round.length === 0) {
    return <GlassCard className="p-6 text-center text-ink-2">—</GlassCard>;
  }

  if (!item) {
    return (
      <GlassCard neon className="p-6 text-center">
        <p className="text-5xl font-extrabold text-grad-primary tabular-nums">
          {score}/{round.length}
        </p>
        <p className="mt-2 text-lg font-bold">{t('sessionDone')}</p>
        <Button className="mt-5" onClick={onRestart}>
          <RotateCcw size={18} /> {t('newRound')}
        </Button>
      </GlassCard>
    );
  }

  const advance = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    if (index + 1 >= round.length) dispatch({ type: 'completeTask', task: 'review', today: dayKey() });
    setIndex(index + 1);
  };

  return (
    <>
      <div className="mb-4 flex items-center gap-3">
        <ProgressBar value={index / round.length} />
        <span className="text-sm font-semibold text-ink-2 tabular-nums">
          {index + 1}/{round.length}
        </span>
      </div>
      <PuzzleCard key={item.id} item={item} onDone={advance} />
    </>
  );
}

export function PuzzleCard({ item, onDone }: { item: PuzzleChallenge; onDone: (correct: boolean) => void }) {
  const { state, dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const topic = grammarById(item.grammarId);

  const isTileMode = !!item.tiles && item.tiles.length > 0 && !item.options;
  const words = useMemo(() => (item.tiles && item.tiles.length > 0 ? item.tiles : tokenize(item.answerIt)), [item]);
  const [bank, setBank] = useState<Tile[]>(() => shuffleTiles(words));
  const [answer, setAnswer] = useState<Tile[]>([]);
  const [pickedOpt, setPickedOpt] = useState<string | null>(null);
  const [result, setResult] = useState<'right' | 'wrong' | null>(null);
  const [hint, setHint] = useState(false);

  const pick = (tile: Tile) => {
    if (result) return;
    setBank((b) => b.filter((x) => x.id !== tile.id));
    setAnswer((a) => [...a, tile]);
  };
  const unpick = (tile: Tile) => {
    if (result) return;
    setAnswer((a) => a.filter((x) => x.id !== tile.id));
    setBank((b) => [...b, tile]);
  };

  const checkTiles = () => {
    const built = answer.map((a) => a.text).join(' ').trim();
    const ok =
      isCorrect(answer, words) ||
      (item.acceptedAnswers ?? []).some((alt) => alt.trim().toLowerCase() === built.toLowerCase());
    finishCheck(ok, built);
  };

  const checkOption = (opt: string) => {
    if (result) return;
    setPickedOpt(opt);
    const ok = opt === item.answerIt || (item.acceptedAnswers ?? []).includes(opt);
    finishCheck(ok, opt);
  };

  const finishCheck = (ok: boolean, givenAnswer: string) => {
    setResult(ok ? 'right' : 'wrong');
    if (ok) {
      dispatch({ type: 'awardXp', amount: XP_PER_PUZZLE, today: dayKey() });
      if (state.puzzleMistakes[item.id]) {
        dispatch({ type: 'clearPuzzleMistake', puzzleId: item.id, today: dayKey() });
      }
    } else {
      dispatch({ type: 'recordPuzzleMistake', puzzleId: item.id, givenAnswer });
    }
  };

  return (
    <>
      <GlassCard className="p-5">
        <p className="text-xs font-bold tracking-wide text-cyan uppercase">
          {tr(TYPE_LABELS[item.type])} {topic ? `· ${topic.title}` : ''}
        </p>
        <p className="bn mt-1 text-base font-bold text-mint">{tr(item.prompt)}</p>
        {item.stemIt && <p className="mt-2 rounded-xl bg-white/5 px-3 py-2 text-lg font-extrabold">{item.stemIt}</p>}
        <p className="bn mt-2 text-lg font-bold">{tr(item.tr)}</p>
      </GlassCard>

      {isTileMode ? (
        <>
          <div
            className={cx(
              'mt-4 flex min-h-24 flex-wrap content-start gap-2 rounded-2xl border-2 border-dashed p-3 transition',
              result === 'right' ? 'border-neon/70 bg-neon/8' : result === 'wrong' ? 'border-pink/60 bg-pink/8' : 'border-white/15',
            )}
            aria-label={t('yourAnswer')}
          >
            {answer.length === 0 && <span className="self-center px-2 text-ink-3">{t('tapWords')}</span>}
            {answer.map((tile) => (
              <button
                key={tile.id}
                type="button"
                onClick={() => unpick(tile)}
                className="bg-grad-primary min-h-11 rounded-xl px-3 text-lg font-bold text-navy-950 shadow-[0_0_14px_-4px_rgba(0,245,160,0.7)]"
              >
                {tile.text}
              </button>
            ))}
          </div>

          <div className="mt-4 flex min-h-14 flex-wrap gap-2">
            {bank.map((tile) => (
              <button key={tile.id} type="button" onClick={() => pick(tile)} className="glass min-h-11 rounded-xl px-3 text-lg font-bold transition active:scale-95">
                {tile.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="mt-4 grid gap-2.5">
          {(item.options ?? []).map((opt) => {
            const isAnswer = opt === item.answerIt;
            const chosen = pickedOpt === opt;
            return (
              <button
                key={opt}
                type="button"
                disabled={result !== null}
                onClick={() => checkOption(opt)}
                className={cx(
                  'rounded-2xl border px-4 py-3 text-left text-base font-bold transition',
                  result === null
                    ? 'border-white/15 bg-white/5 hover:border-neon/40'
                    : isAnswer
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
      )}

      {result && (
        <div className={cx('mt-4 rounded-2xl border p-4', result === 'right' ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10')} aria-live="polite">
          <p className="flex items-center gap-2 text-lg font-bold">
            {result === 'right' ? <CheckCircle2 className="text-neon" /> : <XCircle className="text-pink" />}
            {result === 'right' ? `${t('correct')} +${XP_PER_PUZZLE} XP` : `${t('incorrect')} — ${t('correctAnswer')}:`}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <SpeakButton text={item.answerIt} size={34} />
            <p className="text-lg font-bold">{item.answerIt}</p>
          </div>
          {item.explanation.bn && <p className="bn mt-2 text-sm text-ink-2">{tr(item.explanation)}</p>}
        </div>
      )}

      {(hint || result === 'wrong') && topic && (
        <GlassCard className="mt-4 p-4">
          <p className="flex items-center gap-2 font-bold text-gold">
            <Lightbulb size={18} /> {tr(topic.name)}
          </p>
          <p className="bn mt-1 text-[0.95rem] text-ink-2">{tr(topic.explanation)}</p>
          <button type="button" onClick={() => navigate(`/grammar/${topic.id}`)} className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-cyan">
            <BookOpen size={16} /> {t('openGrammar')}
          </button>
        </GlassCard>
      )}

      <div className="mt-6 grid grid-cols-2 gap-3">
        {result ? (
          <Button className="col-span-2" onClick={() => onDone(result === 'right')}>
            {t('continue')}
          </Button>
        ) : (
          <>
            <Button variant={isTileMode ? 'ghost' : 'ghost'} className={isTileMode ? '' : 'col-span-2'} onClick={() => setHint(true)} disabled={hint}>
              <Lightbulb size={18} /> {t('hint')}
            </Button>
            {isTileMode && (
              <Button onClick={checkTiles} disabled={bank.length > 0}>
                {t('check')}
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
}
