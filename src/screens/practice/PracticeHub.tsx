import {
  BookOpen,
  Bot,
  FilePenLine,
  FileText,
  Headphones,
  Infinity as InfinityIcon,
  Layers,
  MessageSquareQuote,
  Mic,
  Puzzle,
  RotateCcw,
  Signpost,
  SpellCheck,
  Text,
  type LucideIcon,
} from 'lucide-react';
import type { Tr } from '../../content/types';
import { WORDS } from '../../content/bank';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress } from '../../state/ProgressContext';
import { dueCards } from '../../state/progress';
import { ScreenTitle, cx } from '../../components/ui';

type Hue = 'emerald' | 'violet' | 'cyan' | 'pink' | 'gold' | 'blue';

const HUES: Record<Hue, { tile: string; icon: string }> = {
  emerald: { tile: 'from-emerald/30 to-emerald-deep/60 border-neon/35', icon: 'text-neon' },
  violet: { tile: 'from-violet/30 to-navy-900/60 border-violet/40', icon: 'text-violet' },
  cyan: { tile: 'from-cyan/25 to-navy-900/60 border-cyan/35', icon: 'text-cyan' },
  pink: { tile: 'from-pink/25 to-navy-900/60 border-pink/35', icon: 'text-pink' },
  gold: { tile: 'from-gold/25 to-emerald-deep/60 border-gold/40', icon: 'text-gold' },
  blue: { tile: 'from-blue/25 to-navy-900/60 border-blue/35', icon: 'text-blue' },
};

interface Module {
  id: string;
  icon: LucideIcon;
  hue: Hue;
  title: string;
  sub: Tr;
  /** Undefined = not built yet; shown honestly as "coming soon". */
  route?: string;
}

const total = WORDS.A1.length + WORDS.A2.length + WORDS.B1.length;

const MODULES: Module[] = [
  { id: 'words', icon: BookOpen, hue: 'emerald', title: 'Vocabulary', sub: { bn: `${total}+ শব্দভাণ্ডার শিখুন`, en: `${total}+ words, A1–B1` }, route: '/practice/words' },
  { id: 'grammar', icon: Layers, hue: 'violet', title: 'Grammar', sub: { bn: 'ব্যাকরণ অনুশীলন', en: 'Grammar topics' }, route: '/practice/grammar' },
  { id: 'puzzle', icon: Puzzle, hue: 'cyan', title: 'Sentence Builder', sub: { bn: 'গ্রামার দিয়ে বাক্য গঠন (পাজল)', en: 'Build sentences (puzzle)' }, route: '/practice/puzzle' },
  { id: 'sentences', icon: Text, hue: 'blue', title: 'Sentences', sub: { bn: 'নমুনা বাক্য শুনুন ও শিখুন', en: 'Model sentences' }, route: '/practice/sentences' },
  { id: 'cards', icon: SpellCheck, hue: 'pink', title: 'Flashcards', sub: { bn: 'রিভিশন কার্ড', en: 'Spaced repetition' }, route: '/practice/vocabulary' },
  { id: 'phrases', icon: MessageSquareQuote, hue: 'gold', title: 'Phrases (B1)', sub: { bn: 'প্রবাদ ও এক্সপ্রেশন', en: 'Idioms & expressions' }, route: '/practice/phrases' },
  { id: 'listening', icon: Headphones, hue: 'cyan', title: 'Listening', sub: { bn: 'শুনে বুঝুন', en: 'Listen to dialogues' }, route: '/practice/listening' },
  { id: 'verbs', icon: InfinityIcon, hue: 'violet', title: 'Important Verbs', sub: { bn: 'গুরুত্বপূর্ণ ক্রিয়াপদ', en: 'Key verb conjugations' }, route: '/practice/verbs' },
  { id: 'survival', icon: Signpost, hue: 'gold', title: 'Survival Italian', sub: { bn: 'ইতালিতে টিকে থাকার ভাষা', en: 'Real situations in Italy' }, route: '/practice/survival' },
  { id: 'mistakes', icon: RotateCcw, hue: 'pink', title: 'Review Mistakes', sub: { bn: 'ভুলগুলো আবার অনুশীলন', en: 'Practise past mistakes' }, route: '/practice/mistakes' },
  { id: 'speaking', icon: Mic, hue: 'violet', title: 'Speaking', sub: { bn: 'কথা বলার অনুশীলন', en: 'Speaking practice' } },
  { id: 'reading', icon: FileText, hue: 'emerald', title: 'Reading', sub: { bn: 'পড়ে বুঝুন', en: 'Reading' } },
  { id: 'writing', icon: FilePenLine, hue: 'cyan', title: 'Writing', sub: { bn: 'লিখে অনুশীলন করুন', en: 'Writing' } },
  { id: 'tutor', icon: Bot, hue: 'blue', title: 'AI Tutor', sub: { bn: 'এআই-এর সাথে ইতালিয়ান', en: 'AI tutor' } },
];

export function PracticeHub() {
  const { navigate } = useRouter();
  const { state } = useProgress();
  const { t, tr } = useI18n();
  const due = dueCards(state).length;
  const mistakes = Object.keys(state.mistakes).length;

  return (
    <div className="animate-rise">
      <ScreenTitle title={t('practiceHub')} subtitle={t('practiceSub')} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {MODULES.map((m) => {
          const badge = m.id === 'cards' && due > 0 ? due : m.id === 'mistakes' && mistakes > 0 ? mistakes : null;
          const available = !!m.route;
          const hue = HUES[m.hue];
          return (
            <button
              key={m.id}
              type="button"
              disabled={!available}
              onClick={() => m.route && navigate(m.route)}
              className={cx(
                'relative flex min-h-36 flex-col items-center justify-center rounded-[1.4rem] border bg-gradient-to-br p-4 text-center backdrop-blur transition active:scale-[0.98]',
                hue.tile,
                !available && 'cursor-not-allowed opacity-50',
              )}
            >
              {badge !== null && <span className="bg-grad-primary absolute top-2 right-2 rounded-full px-2 text-xs font-bold text-navy-950">{badge}</span>}
              <m.icon size={40} strokeWidth={1.7} className={cx(hue.icon, 'drop-shadow-[0_0_10px_currentColor]')} aria-hidden />
              <span className="mt-2 text-[1.08rem] leading-tight font-extrabold">{m.title}</span>
              <span className="bn mt-0.5 text-[0.85rem] leading-snug font-semibold text-ink-2">{tr(m.sub)}</span>
              {!available && <span className="mt-1.5 rounded-full border border-white/20 px-2 py-0.5 text-[10px] font-bold text-ink-3">{t('comingSoon')}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
