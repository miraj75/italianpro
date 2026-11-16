import { Heart } from 'lucide-react';
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
              <button type="button" aria-label="Remove" onClick={() => dispatch({ type: 'toggleSaved', key })} className="flex h-10 w-10 items-center justify-center">
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
  return (
    <div className="animate-rise">
      <SubHeader title="ItalianPro" subtitle="Learn Italian. Live Italian. Master Italian." />
      <GlassCard className="bn space-y-3 p-5 text-ink-2">
        {lang === 'bn' ? (
          <>
            <p>ItalianPro হলো A1 থেকে B2 পর্যন্ত ইতালিয়ান শেখার একটি অ্যাপ, বাংলা ও ইংরেজি ব্যাখ্যাসহ।</p>
            <p>বর্তমান সংস্করণ (0.1): A1 ইউনিট ১-এর ৩টি পাঠ, ফ্ল্যাশকার্ড রিভিশন, গুরুত্বপূর্ণ ক্রিয়া, Survival Italian ও দৈনিক চ্যালেঞ্জ। আপনার অগ্রগতি শুধু এই ডিভাইসে সংরক্ষিত থাকে।</p>
            <p>Speaking, Reading, Writing ও AI Tutor এখনো তৈরি হয়নি।</p>
          </>
        ) : (
          <>
            <p>ItalianPro teaches Italian from A1 to B2 with Bengali and English explanations.</p>
            <p>Current version (0.1): 3 lessons of A1 Unit 1, flashcard review, important verbs, Survival Italian and a daily challenge. Your progress is stored only on this device.</p>
            <p>Speaking, Reading, Writing and the AI Tutor are not built yet.</p>
          </>
        )}
      </GlassCard>
    </div>
  );
}
