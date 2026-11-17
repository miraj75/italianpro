import {
  BookMarked,
  BookOpen,
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
import { cx } from '../../components/ui';
import { countReviewableMistakes } from './MistakesScreen';

type Hue = 'emerald' | 'violet' | 'cyan' | 'pink' | 'gold' | 'blue';

const HUES: Record<Hue, { tile: string; icon: string }> = {
  emerald: {
    tile: 'from-[#084438]/90 via-[#072e28]/90 to-[#05201d]/95 border-neon/40 shadow-[inset_0_1px_0_rgba(0,245,160,0.18)]',
    icon: 'text-neon',
  },
  violet: {
    tile: 'from-[#2e1c54]/90 via-[#1d173c]/90 to-[#0e1828]/95 border-violet/45 shadow-[inset_0_1px_0_rgba(168,85,247,0.2)]',
    icon: 'text-violet',
  },
  cyan: {
    tile: 'from-[#073b46]/90 via-[#072834]/90 to-[#051d24]/95 border-cyan/40 shadow-[inset_0_1px_0_rgba(39,223,255,0.18)]',
    icon: 'text-cyan',
  },
  blue: {
    tile: 'from-[#0b2f52]/90 via-[#09233e]/90 to-[#061b2c]/95 border-blue/45 shadow-[inset_0_1px_0_rgba(57,139,255,0.2)]',
    icon: 'text-blue',
  },
  pink: {
    tile: 'from-[#44193d]/90 via-[#2a1530]/90 to-[#131726]/95 border-pink/40 shadow-[inset_0_1px_0_rgba(255,79,216,0.2)]',
    icon: 'text-pink',
  },
  gold: {
    tile: 'from-[#3d3515]/90 via-[#252819]/90 to-[#0d201c]/95 border-gold/40 shadow-[inset_0_1px_0_rgba(255,209,102,0.2)]',
    icon: 'text-gold',
  },
};

interface Module {
  id: string;
  icon: LucideIcon;
  hue: Hue;
  title: Tr;
  sub: Tr;
  route: string;
  proTag?: boolean;
}

const total = WORDS.A1.length + WORDS.A2.length + WORDS.B1.length + WORDS.B2.length;

const MODULES: Module[] = [
  {
    id: 'words',
    icon: BookOpen,
    hue: 'emerald',
    title: { bn: 'শব্দভাণ্ডার', en: 'Vocabulary', it: 'Vocabolario' },
    sub: { bn: `${total}+ গুরুত্বপূর্ণ শব্দ`, en: `${total}+ essential words`, it: `Oltre ${total} parole essenziali` },
    route: '/practice/words',
  },
  {
    id: 'grammar',
    icon: Layers,
    hue: 'violet',
    title: { bn: 'ব্যাকরণ', en: 'Grammar', it: 'Grammatica' },
    sub: { bn: 'ব্যাকরণ ও নিয়ম', en: 'Grammar & rules', it: 'Regole ed esercizi' },
    route: '/practice/grammar',
  },
  {
    id: 'puzzle',
    icon: Puzzle,
    hue: 'cyan',
    title: { bn: 'বাক্য গঠন পাজল', en: 'Sentence Builder', it: 'Costruzione frasi' },
    sub: { bn: 'সঠিক বাক্য গঠন অনুশীলন', en: '12 sentence & grammar puzzles', it: '12 modalità di esercizi' },
    route: '/practice/puzzle',
  },
  {
    id: 'sentences',
    icon: Text,
    hue: 'blue',
    title: { bn: 'বাক্য', en: 'Sentences', it: 'Frasi' },
    sub: { bn: 'বহুল ব্যবহৃত বাক্য', en: 'Common model sentences', it: 'Frasi modello comuni' },
    route: '/practice/sentences',
  },
  {
    id: 'cards',
    icon: SpellCheck,
    hue: 'pink',
    title: { bn: 'ফ্ল্যাশকার্ড', en: 'Flashcards', it: 'Flashcard' },
    sub: { bn: 'দ্রুত মনে রাখুন', en: 'Spaced repetition', it: 'Ripetizione dilazionata' },
    route: '/practice/vocabulary',
    proTag: true,
  },
  {
    id: 'phrases',
    icon: MessageSquareQuote,
    hue: 'gold',
    title: { bn: 'এক্সপ্রেশন (B1)', en: 'Phrases (B1)', it: 'Espressioni (B1)' },
    sub: { bn: 'দৈনন্দিন কথোপকথন', en: 'Idioms & expressions', it: 'Modi di dire ed espressioni' },
    route: '/practice/phrases',
  },
  {
    id: 'listening',
    icon: Headphones,
    hue: 'cyan',
    title: { bn: 'শোনা', en: 'Listening', it: 'Ascolto' },
    sub: { bn: 'শুনে শিখুন', en: 'Audio & comprehension', it: 'Audio e comprensione' },
    route: '/practice/listening',
  },
  {
    id: 'verbs',
    icon: InfinityIcon,
    hue: 'violet',
    title: { bn: 'গুরুত্বপূর্ণ ক্রিয়াপদ', en: 'Important Verbs', it: 'Verbi principali' },
    sub: { bn: 'গুরুত্বপূর্ণ ১০০টি ক্রিয়া', en: 'Key verb conjugations', it: 'Coniugazioni essenziali' },
    route: '/practice/verbs',
  },
  {
    id: 'survival',
    icon: Signpost,
    hue: 'gold',
    title: { bn: 'সারভাইভাল ইতালিয়ান', en: 'Survival Italian', it: 'Italiano essenziale' },
    sub: { bn: 'ইতালিতে টিকে থাকার বাক্য', en: 'Real situations in Italy', it: 'Situazioni reali in Italia' },
    route: '/practice/survival',
  },
  {
    id: 'mistakes',
    icon: RotateCcw,
    hue: 'pink',
    title: { bn: 'ভুল পর্যালোচনা', en: 'Review Mistakes', it: 'Rivedi errori' },
    sub: { bn: 'ভুলগুলো দেখুন এবং শুদ্ধ করুন', en: 'Practise past mistakes', it: 'Ripassa gli errori passati' },
    route: '/practice/mistakes',
  },
  {
    id: 'speaking',
    icon: Mic,
    hue: 'violet',
    title: { bn: 'স্পিকিং', en: 'Speaking', it: 'Parlato' },
    sub: { bn: 'উচ্চারণ ও বলার অনুশীলন', en: 'Mic & pronunciation', it: 'Microfono e pronuncia' },
    route: '/practice/speaking',
  },
  {
    id: 'reading',
    icon: FileText,
    hue: 'emerald',
    title: { bn: 'পড়া', en: 'Reading', it: 'Lettura' },
    sub: { bn: 'পড়া ও বোঝা অনুশীলন', en: 'Reading comprehension', it: 'Comprensione scritta' },
    route: '/practice/reading',
  },
  {
    id: 'writing',
    icon: FilePenLine,
    hue: 'cyan',
    title: { bn: 'লেখা', en: 'Writing', it: 'Scrittura' },
    sub: { bn: 'ইতালিয়ান ভাষায় লেখার অনুশীলন', en: 'Guided writing & rubric', it: 'Scrittura guidata' },
    route: '/practice/writing',
  },
  {
    id: 'stories',
    icon: BookMarked,
    hue: 'blue',
    title: { bn: 'গল্প', en: 'Stories', it: 'Storie' },
    sub: { bn: 'গল্পভিত্তিক ব্যাকরণ ও পাঠ', en: 'Story-based learning', it: 'Apprendimento con storie' },
    route: '/practice/stories',
  },
];

export function PracticeHub() {
  const { navigate } = useRouter();
  const { state } = useProgress();
  const { t, tr } = useI18n();
  const due = dueCards(state).length;
  const mistakes = countReviewableMistakes(state);

  return (
    <div className="animate-rise max-w-full overflow-x-hidden">
      <header className="mb-4">
        <h1 className="bn text-[1.9rem] sm:text-[2.25rem] leading-tight font-extrabold text-white break-words">
          {t('practiceHub')}
        </h1>
        <p className="bn mt-1 text-sm sm:text-base font-semibold text-ink-2 break-words">{t('practiceSub')}</p>
      </header>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {MODULES.map((m) => {
          const countBadge =
            m.id === 'cards' && due > 0 ? due : m.id === 'mistakes' && mistakes > 0 ? mistakes : null;
          const hue = HUES[m.hue];
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => navigate(m.route)}
              className={cx(
                'relative flex h-full min-h-[9.25rem] sm:min-h-[9.75rem] w-full min-w-0 flex-col items-center justify-center rounded-[1.35rem] border bg-gradient-to-br px-3 pt-7 pb-3.5 sm:px-4 sm:pt-7 sm:pb-4 text-center backdrop-blur-md transition hover:brightness-110 active:scale-[0.98]',
                hue.tile,
              )}
            >
              {countBadge !== null ? (
                <span className="bg-grad-primary glow-neon absolute top-2.5 right-2.5 rounded-full px-2.5 py-0.5 text-[0.7rem] font-extrabold text-navy-950 tabular-nums">
                  {countBadge}
                </span>
              ) : m.proTag ? (
                <span className="bg-grad-primary glow-neon absolute top-2.5 right-2.5 rounded-full px-2.5 py-0.5 text-[0.65rem] font-extrabold tracking-wide text-navy-950 uppercase">
                  PRO
                </span>
              ) : null}

              <m.icon
                size={30}
                strokeWidth={1.85}
                className={cx(hue.icon, 'shrink-0 drop-shadow-[0_0_12px_currentColor]')}
                aria-hidden
              />
              <span className="bn mt-2.5 w-full text-[0.98rem] sm:text-[1.08rem] leading-tight font-extrabold text-white break-words">
                {tr(m.title)}
              </span>
              <span className="bn mt-1 line-clamp-2 w-full text-[0.76rem] sm:text-[0.84rem] leading-snug font-semibold text-ink-2 break-words">
                {tr(m.sub)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
