import { BookOpen, Bot, FilePenLine, FileText, Headphones, Infinity as InfinityIcon, Layers, Mic, RotateCcw, Signpost, type LucideIcon } from 'lucide-react';
import type { Tr } from '../../content/types';
import { useRouter } from '../../app/router';
import { useI18n } from '../../lib/i18n';
import { useProgress } from '../../state/ProgressContext';
import { dueCards } from '../../state/progress';
import { GlassCard, IconTile, ScreenTitle, cx, type Tone } from '../../components/ui';

interface Module {
  id: string;
  icon: LucideIcon;
  tone: Tone;
  title: string;
  sub: Tr;
  /** Undefined = not built yet; shown honestly as "coming soon". */
  route?: string;
}

const MODULES: Module[] = [
  { id: 'vocab', icon: Layers, tone: 'emerald', title: 'Vocabulary', sub: { bn: 'ফ্ল্যাশকার্ডে শব্দ রিভিশন', en: 'Spaced-repetition flashcards' }, route: '/practice/vocabulary' },
  { id: 'grammar', icon: BookOpen, tone: 'violet', title: 'Grammar', sub: { bn: 'ব্যাকরণ পুনরালোচনা', en: 'Grammar review' }, route: '/practice/grammar' },
  { id: 'listening', icon: Headphones, tone: 'cyan', title: 'Listening', sub: { bn: 'সংলাপ শুনে বুঝুন', en: 'Listen to dialogues' }, route: '/practice/listening' },
  { id: 'verbs', icon: InfinityIcon, tone: 'pink', title: 'Important Verbs', sub: { bn: 'গুরুত্বপূর্ণ ক্রিয়ার রূপ', en: 'Key verb conjugations' }, route: '/practice/verbs' },
  { id: 'survival', icon: Signpost, tone: 'gold', title: 'Survival Italian', sub: { bn: 'ইতালিতে টিকে থাকার ভাষা', en: 'Real situations in Italy' }, route: '/practice/survival' },
  { id: 'mistakes', icon: RotateCcw, tone: 'blue', title: 'Review Mistakes', sub: { bn: 'আগের ভুলগুলো আবার অনুশীলন', en: 'Practise past mistakes' }, route: '/practice/mistakes' },
  { id: 'speaking', icon: Mic, tone: 'violet', title: 'Speaking', sub: { bn: 'কথা বলার অনুশীলন', en: 'Speaking practice' } },
  { id: 'reading', icon: FileText, tone: 'emerald', title: 'Reading', sub: { bn: 'পড়ে বুঝুন', en: 'Reading comprehension' } },
  { id: 'writing', icon: FilePenLine, tone: 'cyan', title: 'Writing', sub: { bn: 'লিখে অনুশীলন', en: 'Writing practice' } },
  { id: 'tutor', icon: Bot, tone: 'blue', title: 'AI Tutor', sub: { bn: 'এআই-এর সাথে ইতালিয়ান', en: 'Practise with an AI tutor' } },
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
          const badge = m.id === 'vocab' && due > 0 ? due : m.id === 'mistakes' && mistakes > 0 ? mistakes : null;
          const available = !!m.route;
          return (
            <button
              key={m.id}
              type="button"
              disabled={!available}
              onClick={() => m.route && navigate(m.route)}
              className={cx('text-left transition active:scale-[0.98]', !available && 'cursor-not-allowed')}
            >
              <GlassCard className={cx('relative flex h-full flex-col items-center p-4 text-center', !available && 'opacity-55')}>
                {badge !== null && (
                  <span className="bg-grad-primary absolute top-2 right-2 rounded-full px-2 text-xs font-bold text-navy-950">{badge}</span>
                )}
                <IconTile icon={m.icon} tone={m.tone} size="lg" />
                <span className="mt-3 font-semibold">{m.title}</span>
                <span className="bn text-xs text-ink-2">{tr(m.sub)}</span>
                {!available && <span className="mt-2 rounded-full border border-white/15 px-2 py-0.5 text-[10px] text-ink-3">{t('comingSoon')}</span>}
              </GlassCard>
            </button>
          );
        })}
      </div>
    </div>
  );
}
