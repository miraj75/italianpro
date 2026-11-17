import { useMemo, useState } from 'react';
import { Check, RotateCcw, Volume2 } from 'lucide-react';
import type { AcademyDrillItem } from '../../content/academy/types';
import { shuffleArray } from '../../lib/examEngine';
import { useI18n } from '../../lib/i18n';
import { speakItalian, startSpeechSession } from '../../lib/speech';
import { Button, GlassCard, ProgressBar, cx } from '../ui';

export interface MixedDrillQuestionProps {
  item: AcademyDrillItem;
  questionNumber: number;
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  disabled: boolean;
  onResolve: (correct: boolean) => void;
}

function normalizeSentence(raw: string): string {
  return raw
    .trim()
    .replace(/\s+([?.!,])/g, '$1')
    .replace(/\s+/g, ' ')
    .replace(/[?.!]+$/, '')
    .toLowerCase();
}

/**
 * Interactive multi-format Stage 3 Drill question widget for:
 * - 'matching': pair Italian phrases on the left with target translations on the right
 * - 'sentence-builder': tap word tokens in order to build an Italian sentence
 */
export function MixedDrillQuestion({
  item,
  questionNumber,
  totalQuestions,
  correctCount,
  incorrectCount,
  disabled,
  onResolve,
}: MixedDrillQuestionProps) {
  const { lang, tr } = useI18n();
  const kind = item.drillKind ?? 'mcq';

  // Sentence-builder state
  const shuffledTokens = useMemo(() => {
    const tokens = item.sentenceTokens ?? item.primaryLabel.split(/\s+/).filter(Boolean);
    const indexed = tokens.map((tok, idx) => ({ key: `${item.id}-tok-${idx}`, text: tok }));
    const shuffled = shuffleArray(indexed);
    if (
      shuffled.length > 1 &&
      shuffled.map((t) => t.text).join(' ') === tokens.join(' ')
    ) {
      return [...shuffled.slice(1), shuffled[0]!];
    }
    return shuffled;
  }, [item]);
  const [selectedTokenKeys, setSelectedTokenKeys] = useState<string[]>([]);

  // Matching pairs state
  const rightOptions = useMemo(() => {
    const pairs = item.matchingPairs ?? [];
    const mapped = pairs.map((p) => ({ id: p.id, label: tr(p.rightTr) }));
    const shuffled = shuffleArray(mapped);
    if (shuffled.length > 1 && shuffled.every((x, i) => x.id === pairs[i]?.id)) {
      return [...shuffled.slice(1), shuffled[0]!];
    }
    return shuffled;
  }, [item, tr]);
  const [activeLeftId, setActiveLeftId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [hadMismatch, setHadMismatch] = useState(false);

  const cueText =
    lang === 'bn' ? item.cueBn : lang === 'it' ? (item.cueIt ?? '') : item.cueEn;

  const headingText = item.promptOverride
    ? tr(item.promptOverride)
    : kind === 'matching'
      ? tr({
          bn: 'ইতালীয় অংশের সাথে সঠিক অর্থ মিলান',
          en: 'Match each Italian phrase with its meaning',
          it: 'Abbina ogni espressione italiana al suo significato',
        })
      : tr({
          bn: 'শব্দগুলো সঠিক ক্রমে সাজিয়ে বাক্য তৈরি করুন',
          en: 'Arrange the words in order to build the Italian sentence',
          it: 'Ordina le parole per costruire la frase in italiano',
        });

  const handleReplay = () => {
    if (!item.audioIt) return;
    const sid = startSpeechSession();
    void speakItalian(item.audioIt, 0.85, sid).catch(() => {});
  };

  const handleToggleToken = (key: string) => {
    if (disabled) return;
    setSelectedTokenKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const handleCheckSentence = () => {
    if (disabled) return;
    const tokMap = new Map(shuffledTokens.map((t) => [t.key, t.text]));
    const built = selectedTokenKeys.map((k) => tokMap.get(k) ?? '').join(' ');
    const normalizedBuilt = normalizeSentence(built);
    const accepted = (item.acceptedSentences && item.acceptedSentences.length > 0
      ? item.acceptedSentences
      : [item.primaryLabel]
    ).map(normalizeSentence);
    onResolve(accepted.includes(normalizedBuilt));
  };

  const handleSelectRight = (rightId: string) => {
    if (disabled || !activeLeftId || matchedIds.includes(rightId)) return;
    if (rightId === activeLeftId) {
      const nextMatched = [...matchedIds, rightId];
      setMatchedIds(nextMatched);
      setActiveLeftId(null);
      if (nextMatched.length >= (item.matchingPairs?.length ?? 0)) {
        onResolve(!hadMismatch);
      }
    } else {
      setHadMismatch(true);
      setActiveLeftId(null);
    }
  };

  return (
    <GlassCard neon className="p-3.5 sm:p-4 space-y-3">
      <div className="space-y-1.5">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold tabular-nums">
          <span className="text-cyan uppercase tracking-wider">
            {tr({
              bn: `ড্রিল · প্রশ্ন ${questionNumber} / ${totalQuestions}`,
              en: `Drill · Question ${questionNumber} of ${totalQuestions}`,
              it: `Esercizio · Domanda ${questionNumber} di ${totalQuestions}`,
            })}
          </span>
          <span className="flex items-center gap-2.5">
            <span className="text-neon">✓ {correctCount}</span>
            <span className="text-pink">✗ {incorrectCount}</span>
          </span>
        </div>
        <ProgressBar value={questionNumber / Math.max(1, totalQuestions)} className="h-1.5" />
      </div>

      <h2 className="bn text-sm sm:text-base font-extrabold text-white">{headingText}</h2>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 rounded-2xl border border-neon/25 bg-white/5 p-3">
        <div className="min-w-0 space-y-0.5">
          {item.promptIt && (
            <p className="text-base sm:text-lg font-extrabold text-white leading-snug break-words">
              {item.promptIt}
            </p>
          )}
          <p className="bn text-xs sm:text-sm font-semibold text-mint break-words">{cueText}</p>
        </div>

        {item.audioIt && (
          <Button
            type="button"
            variant="ghost"
            data-testid="drill-replay-btn"
            onClick={handleReplay}
            className="min-h-10 shrink-0 border-neon/40 bg-neon/10 px-3.5 text-xs sm:text-sm text-neon hover:bg-neon/20"
          >
            <Volume2 size={16} />
            <span>{tr({ bn: 'শুনুন', en: 'Play Audio', it: 'Ascolta' })}</span>
          </Button>
        )}
      </div>

      {kind === 'matching' && item.matchingPairs && (
        <div className="grid grid-cols-2 gap-2.5">
          <div className="space-y-2">
            {item.matchingPairs.map((pair) => {
              const isMatched = matchedIds.includes(pair.id);
              const isSelected = activeLeftId === pair.id;
              return (
                <button
                  key={pair.id}
                  type="button"
                  disabled={disabled || isMatched}
                  onClick={() => setActiveLeftId(pair.id)}
                  className={cx(
                    'flex w-full min-h-12 items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-xs sm:text-sm font-extrabold transition',
                    isMatched
                      ? 'border-neon/60 bg-neon/15 text-neon'
                      : isSelected
                        ? 'border-cyan bg-cyan/15 text-white ring-2 ring-cyan/30'
                        : 'border-white/15 bg-white/5 text-white hover:border-neon/45',
                  )}
                >
                  <span className="break-words">{pair.leftIt}</span>
                  {isMatched && <Check size={14} className="shrink-0" />}
                </button>
              );
            })}
          </div>

          <div className="space-y-2">
            {rightOptions.map((opt) => {
              const isMatched = matchedIds.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  disabled={disabled || isMatched || !activeLeftId}
                  onClick={() => handleSelectRight(opt.id)}
                  className={cx(
                    'bn flex w-full min-h-12 items-center justify-between gap-2 rounded-xl border px-3 py-2 text-left text-xs sm:text-sm font-bold transition',
                    isMatched
                      ? 'border-neon/60 bg-neon/15 text-neon'
                      : activeLeftId
                        ? 'border-white/25 bg-white/8 text-white hover:border-cyan/60'
                        : 'border-white/10 bg-white/4 text-ink-2',
                  )}
                >
                  <span className="break-words">{opt.label}</span>
                  {isMatched && <Check size={14} className="shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {kind === 'sentence-builder' && (
        <div className="space-y-3">
          <div className="min-h-14 rounded-2xl border border-cyan/30 bg-black/25 p-3 flex flex-wrap items-center gap-1.5">
            {selectedTokenKeys.length === 0 ? (
              <span className="bn text-xs text-ink-3">
                {tr({
                  bn: 'নিচের শব্দগুলোতে ট্যাপ করে বাক্য গঠন করুন…',
                  en: 'Tap words below in order to build the sentence…',
                  it: 'Tocca le parole sotto in ordine…',
                })}
              </span>
            ) : (
              selectedTokenKeys.map((k) => {
                const tok = shuffledTokens.find((t) => t.key === k);
                if (!tok) return null;
                return (
                  <button
                    key={k}
                    type="button"
                    disabled={disabled}
                    onClick={() => handleToggleToken(k)}
                    className="rounded-xl border border-neon/45 bg-neon/15 px-2.5 py-1 text-sm font-extrabold text-white transition hover:bg-neon/25"
                  >
                    {tok.text}
                  </button>
                );
              })
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {shuffledTokens.map((tok) => {
              const used = selectedTokenKeys.includes(tok.key);
              return (
                <button
                  key={tok.key}
                  type="button"
                  disabled={disabled || used}
                  onClick={() => handleToggleToken(tok.key)}
                  className={cx(
                    'rounded-xl border px-3 py-1.5 text-sm font-bold transition',
                    used
                      ? 'border-white/10 bg-white/5 text-ink-3 opacity-40'
                      : 'border-white/20 bg-white/8 text-white hover:border-neon/50 hover:bg-neon/10',
                  )}
                >
                  {tok.text}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2">
            <Button
              type="button"
              variant="ghost"
              disabled={disabled || selectedTokenKeys.length === 0}
              onClick={() => setSelectedTokenKeys([])}
              className="min-h-11 px-3.5"
            >
              <RotateCcw size={15} />
              <span className="bn">{tr({ bn: 'রিসেট', en: 'Clear', it: 'Pulisci' })}</span>
            </Button>
            <Button
              type="button"
              disabled={disabled || selectedTokenKeys.length === 0}
              onClick={handleCheckSentence}
              className="flex-1 min-h-11"
            >
              <span className="bn">{tr({ bn: 'যাচাই করুন', en: 'Check Answer', it: 'Verifica' })}</span>
            </Button>
          </div>
        </div>
      )}
    </GlassCard>
  );
}
