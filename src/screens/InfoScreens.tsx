import { BookOpen, CheckCircle2, Heart, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { WORDS, SENTENCES } from '../content/bank';
import { GRAMMAR_TOPICS } from '../content/grammar';
import { allLessons } from '../content/courses';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../state/ProgressContext';
import { GlassCard } from '../components/ui';
import { SpeakButton } from '../components/SpeakButton';
import { SubHeader } from '../components/SubHeader';
import { phraseByKey } from './practice/VocabularyScreen';

export function SavedScreen() {
  const { state, dispatch } = useProgress();
  const { t, tr } = useI18n();
  const items = state.saved.flatMap((key) => {
    const phrase = phraseByKey(key);
    return phrase ? [{ key, phrase }] : [];
  });
  return (
    <div className="animate-rise">
      <SubHeader title={t('saved')} />
      {items.length === 0 ? (
        <GlassCard className="p-6 text-center text-ink-2">
          <Heart className="mx-auto mb-2" size={28} /> 0
        </GlassCard>
      ) : (
        <GlassCard className="divide-y divide-white/5">
          {items.map(({ key, phrase }) => (
            <div key={key} className="flex items-center gap-3 p-4">
              <SpeakButton text={phrase.it} size={36} />
              <div className="flex-1">
                <p className="font-semibold">{phrase.it}</p>
                <p className="bn text-sm text-ink-2">{tr(phrase.tr)}</p>
              </div>
              <button
                type="button"
                aria-label="Remove"
                onClick={() => dispatch({ type: 'toggleSaved', key })}
                className="flex h-10 w-10 items-center justify-center"
              >
                <Heart size={20} className="fill-pink text-pink" />
              </button>
            </div>
          ))}
        </GlassCard>
      )}
    </div>
  );
}

export function AboutScreen() {
  const { lang } = useI18n();
  const totalWords = WORDS.A1.length + WORDS.A2.length + WORDS.B1.length + WORDS.B2.length;
  const totalSentences = SENTENCES.A1.length + SENTENCES.A2.length + SENTENCES.B1.length + SENTENCES.B2.length;
  const totalGrammar = GRAMMAR_TOPICS.length;
  const totalLessons = allLessons().length;

  const featuresBn = [
    `সম্পূর্ণ CEFR A1, A2, B1 ও B2 কোর্স (${totalLessons}টি পাঠ এবং ইউনিট ও ফাইনাল অ্যাসেসমেন্ট)`,
    `${totalWords}+ শব্দভাণ্ডার, উচ্চারণ, বহুবচন, উদাহরণ বাক্য ও স্পেসড-রিপিটেশন ফ্ল্যাশকার্ড`,
    `${totalSentences}+ নমুনা বাক্য এবং B1 প্রবাদ ও এক্সপ্রেশন`,
    `${totalGrammar}টি গ্রামার একাডেমি টপিক, টেবিল, সাধারণ ভুল ও কুইজ`,
    '১৪৫+ ইন্টারঅ্যাক্টিভ গল্প (শব্দ গ্লোসারি, গ্রামার বিশ্লেষণ, অডিও ও ৫ ধরনের অনুধাবন অনুশীলন)',
    'লিসেনিং ল্যাব, রিডিং একাডেমি, ১২-মোড পাজল একাডেমি, গাইডেড রাইটিং (রুব্রিক যাচাইসহ) এবং স্পিকিং ও উচ্চারণ অনুশীলন',
    'গুরুত্বপূর্ণ ক্রিয়াপদ, Survival Italian, ভুল সংশোধন (Review Mistakes) ও দৈনিক চ্যালেঞ্জ',
  ];

  const featuresEn = [
    `Complete CEFR A1, A2, B1 & B2 curriculum (${totalLessons} structured lessons plus unit and final assessments)`,
    `${totalWords}+ vocabulary entries with pronunciation, plurals, contextual examples, and spaced-repetition flashcards`,
    `${totalSentences}+ model sentences and B1 idioms & expressions`,
    `${totalGrammar} Grammar Academy topics with rule tables, common mistakes, and interactive quizzes`,
    '145+ original interactive stories with clickable word glossaries, grammar breakdowns, audio playback, and 5-mode comprehension checks',
    'Listening Lab, Reading Academy, 12-mode Puzzle Academy, Guided Writing with rubric evaluation, and Speaking & Pronunciation practice',
    'Important Verbs, Survival Italian, Review Mistakes, and Daily Challenges',
  ];

  return (
    <div className="animate-rise space-y-4">
      <SubHeader title="ItalianPro" subtitle="Learn Italian. Live Italian." />

      <GlassCard neon className="bn space-y-3 p-5 text-ink">
        <div className="flex items-center justify-between gap-2">
          <p className="flex items-center gap-2 text-lg font-extrabold text-white">
            <Sparkles size={18} className="text-neon" />
            <span>{lang === 'bn' ? 'ItalianPro একাডেমি' : 'ItalianPro Academy'}</span>
          </p>
          <span className="rounded-full border border-neon/45 bg-neon/12 px-3 py-0.5 text-xs font-extrabold text-neon">
            v2.0 · A1–B2
          </span>
        </div>

        {lang === 'bn' ? (
          <p className="text-ink-2">
            ItalianPro হলো CEFR A1 থেকে B2 পর্যন্ত সম্পূর্ণ ইতালিয়ান ভাষা শেখার একটি আধুনিক একাডেমি অ্যাপ, যেখানে প্রতিটি পাঠ, শব্দ, বাক্য, ব্যাকরণ এবং অনুশীলন বাংলা ও ইংরেজি ব্যাখ্যাসহ সাজানো হয়েছে।
          </p>
        ) : (
          <p className="text-ink-2">
            ItalianPro is a comprehensive Italian language learning academy covering CEFR A1 through B2 with full Bengali and English explanations across every lesson, word, grammar topic, story, and skill module.
          </p>
        )}
      </GlassCard>

      <GlassCard className="bn space-y-3 p-5">
        <h2 className="flex items-center gap-2 text-base font-extrabold text-white">
          <BookOpen size={18} className="text-cyan" />
          <span>{lang === 'bn' ? 'অন্তর্ভুক্ত ফিচারসমূহ' : 'Included Learning Modules'}</span>
        </h2>
        <ul className="space-y-2 text-sm text-ink-2">
          {(lang === 'bn' ? featuresBn : featuresEn).map((feat) => (
            <li key={feat} className="flex items-start gap-2.5">
              <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-neon" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </GlassCard>

      <GlassCard className="bn flex items-start gap-3 p-4 text-sm text-ink-2">
        <ShieldCheck size={20} className="mt-0.5 shrink-0 text-gold" />
        <p>
          {lang === 'bn'
            ? 'আপনার সমস্ত শেখার অগ্রগতি, ফ্ল্যাশকার্ড, সংরক্ষিত বাক্যাংশ এবং স্ট্রিক সম্পূর্ণ অফলাইনে আপনার ডিভাইসেই সুরক্ষিতভাবে সংরক্ষিত থাকে।'
            : 'All of your learning progress, flashcards, saved phrases, and streaks are stored locally on your device for full offline reliability.'}
        </p>
      </GlassCard>

      <GlassCard className="bn flex items-center gap-3 p-4 text-xs text-ink-3">
        <Layers size={16} className="shrink-0 text-neon" />
        <span>ItalianPro v2.0 · Complete CEFR A1–B2 Curriculum · Offline-Ready</span>
      </GlassCard>
    </div>
  );
}
