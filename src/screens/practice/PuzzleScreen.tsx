import { useMemo, useState } from 'react';
import { BookOpen, CheckCircle2, Lightbulb, RotateCcw, XCircle } from 'lucide-react';
import { grammarById } from '../../content/grammar';
import type { BankLevel, BankSentence } from '../../content/bank';
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

/** Grammar-based sentence builder: tap shuffled word tiles into the right order. */
export function PuzzleScreen() {
  const { route } = useRouter();
  const { t } = useI18n();
  useStudyTimer();
  const initialLevel = route.params.get('level');
  const [level, setLevel] = useState<BankLevel>(isBankLevel(initialLevel) ? initialLevel : 'A1');
  const [grammar, setGrammar] = useState<string | null>(route.params.get('g'));
  const [seed, setSeed] = useState(0);
  const grammarIds = useMemo(() => [...new Set(puzzlePool(level).map((s) => s.grammar))], [level]);

  return (
    <div className="animate-rise">
      <SubHeader title={t('puzzle')} subtitle={t('puzzleSub')} />
      <LevelTabs
        value={level}
        onChange={(l) => {
          setLevel(l);
          setGrammar(null);
        }}
      />
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
      <PuzzleRound key={`${level}|${grammar}|${seed}`} level={level} grammar={grammar} onRestart={() => setSeed((s) => s + 1)} />
    </div>
  );
}

function PuzzleRound({ level, grammar, onRestart }: { level: BankLevel; grammar: string | null; onRestart: () => void }) {
  const { dispatch } = useProgress();
  const { t } = useI18n();
  const [round] = useState(() => [...puzzlePool(level, grammar)].sort(() => Math.random() - 0.5).slice(0, ROUND));
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const sentence = round[index];

  if (!sentence) {
    return (
      <GlassCard neon className="p-6 text-center">
        <p className="text-5xl font-extrabold text-grad-primary">
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
        <span className="text-sm font-semibold text-ink-2">
          {index + 1}/{round.length}
        </span>
      </div>
      <PuzzleItem key={sentence.key} sentence={sentence} onDone={advance} />
    </>
  );
}

function PuzzleItem({ sentence, onDone }: { sentence: BankSentence; onDone: (correct: boolean) => void }) {
  const { dispatch } = useProgress();
  const { navigate } = useRouter();
  const { t, tr } = useI18n();
  const words = useMemo(() => tokenize(sentence.it), [sentence]);
  const [bank, setBank] = useState<Tile[]>(() => shuffleTiles(words));
  const [answer, setAnswer] = useState<Tile[]>([]);
  const [result, setResult] = useState<'right' | 'wrong' | null>(null);
  const [hint, setHint] = useState(false);
  const topic = grammarById(sentence.grammar);

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
  const check = () => {
    const ok = isCorrect(answer, words);
    setResult(ok ? 'right' : 'wrong');
    if (ok) dispatch({ type: 'awardXp', amount: XP_PER_PUZZLE, today: dayKey() });
  };

  return (
    <>
      <GlassCard className="p-5">
        <p className="text-sm font-bold tracking-wide text-mint uppercase">{t('buildSentence')}</p>
        <p className="bn mt-1 text-xl font-bold">{tr(sentence.tr)}</p>
        {topic && <p className="mt-2 text-sm font-semibold text-ink-3">{topic.title}</p>}
      </GlassCard>

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

      {result && (
        <div className={cx('mt-4 rounded-2xl border p-4', result === 'right' ? 'border-neon/40 bg-neon/10' : 'border-pink/40 bg-pink/10')} aria-live="polite">
          <p className="flex items-center gap-2 text-lg font-bold">
            {result === 'right' ? <CheckCircle2 className="text-neon" /> : <XCircle className="text-pink" />}
            {result === 'right' ? `${t('correct')} +${XP_PER_PUZZLE} XP` : `${t('incorrect')} — ${t('correctAnswer')}:`}
          </p>
          <div className="mt-2 flex items-center gap-2">
            <SpeakButton text={sentence.it} size={34} />
            <p className="text-lg font-bold">{sentence.it}</p>
          </div>
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
            <Button variant="ghost" onClick={() => setHint(true)} disabled={hint}>
              <Lightbulb size={18} /> {t('hint')}
            </Button>
            <Button onClick={check} disabled={bank.length > 0}>
              {t('check')}
            </Button>
          </>
        )}
      </div>
    </>
  );
}
