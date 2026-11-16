import type { LevelAssessment } from '../academyTypes';

export const A2_ASSESSMENTS: LevelAssessment[] = [
  {
    id: 'assess-a2-u1',
    level: 'A2',
    unitNumber: 1,
    title: { bn: 'A2 ইউনিট ১ মূল্যায়ন: অতীত কাল ও গল্প', en: 'A2 Unit 1 Assessment: Past Tenses' },
    passScore: 0.7,
    questions: [
      { id: 'a2u1q1', prompt: { bn: 'অনিয়মিত পার্টিসিপল:', en: 'Irregular past participle:' }, it: 'Abbiamo ___ tutte le regole nel libro.', options: ['legguto', 'letto', 'letti', 'leggito'], answer: 1, explanation: { bn: 'leggere → letto; avere সহ -o থাকে।', en: 'leggere → letto.' } },
      { id: 'a2u1q2', prompt: { bn: 'essere সহ লিঙ্গ-বচন মিল:', en: 'Agreement with essere:' }, it: 'Le studentesse ___ a Venezia ieri sera.', options: ['hanno arrivate', 'sono arrivate', 'sono arrivati', 'è arrivata'], answer: 1, explanation: { bn: 'স্ত্রীলিঙ্গ বহুবচন → sono arrivate।', en: 'Feminine plural takes sono arrivate.' } },
      { id: 'a2u1q3', prompt: { bn: 'অতীতে চলমান বনাম হঠাৎ ঘটনা:', en: 'Background vs sudden event:' }, it: 'Mentre ___ la cena, è arrivato Luca.', options: ['ho preparato', 'preparavo', 'preparerò', 'preparo'], answer: 1, explanation: { bn: 'mentre-এর পরে চলমান অবস্থা = imperfetto (preparavo)।', en: 'Ongoing background after mentre uses imperfetto.' } },
      { id: 'a2u1q4', prompt: { bn: 'প্রতিফলক ক্রিয়া অতীতে:', en: 'Past reflexive verb:' }, it: 'Stamattina Marco ___ svegliato alle sei.', options: ['ha', 'si ha', 'si è', 'è si'], answer: 2, explanation: { bn: 'si è svegliato।', en: 'si + è + svegliato.' } },
    ],
  },
  {
    id: 'assess-a2-u2',
    level: 'A2',
    unitNumber: 2,
    title: { bn: 'A2 ইউনিট ২ মূল্যায়ন: ভ্রমণ, তুলনা ও সর্বনাম', en: 'A2 Unit 2 Assessment: Travel & Pronouns' },
    passScore: 0.7,
    questions: [
      { id: 'a2u2q1', prompt: { bn: 'ভদ্র অনুরোধ:', en: 'Polite request:' }, it: 'Scusi, ___ ripetere il prezzo?', options: ['potrebbe', 'puoi', 'poteva', 'potrà'], answer: 0, explanation: { bn: 'আনুষ্ঠানিক Lei অনুরোধে potrebbe।', en: 'Formal polite request uses potrebbe.' } },
      { id: 'a2u2q2', prompt: { bn: 'আর্টিকেলযুক্ত অব্যয়:', en: 'Articulated preposition:' }, it: 'L’ufficio è ___ terzo piano.', options: ['a il', 'al', 'in il', 'sul’'], answer: 1, explanation: { bn: 'a + il = al।', en: 'a + il contracts to al.' } },
      { id: 'a2u2q3', prompt: { bn: 'প্রত্যক্ষ সর্বনাম অতীতে মিল:', en: 'Direct pronoun past agreement:' }, it: 'Hai comprato le mele? Sì, ___ ho comprate.', options: ['li', 'le', 'ne', 'la'], answer: 1, explanation: { bn: 'le mele → le (অতীতে comprate)।', en: 'le mele is feminine plural → le.' } },
      { id: 'a2u2q4', prompt: { bn: 'তুলনা (বিশেষ্য বনাম ক্রিয়া):', en: 'Adverb comparative:' }, it: 'Quest’anno parlo italiano ___ rispetto a prima.', options: ['migliore', 'meglio', 'ottimo', 'più bene'], answer: 1, explanation: { bn: 'ক্রিয়ার সাথে meglio বসে।', en: 'Verb modifier uses meglio.' } },
    ],
  },
  {
    id: 'assess-a2-u3',
    level: 'A2',
    unitNumber: 3,
    title: { bn: 'A2 ইউনিট ৩ মূল্যায়ন: কাজ ও দাপ্তরিক সেবা', en: 'A2 Unit 3 Assessment: Work & Services' },
    passScore: 0.7,
    questions: [
      { id: 'a2u3q1', prompt: { bn: 'ক্রিয়ার পর অব্যয়:', en: 'Verb preposition:' }, it: 'Abbiamo deciso ___ aprire un conto corrente.', options: ['a', 'di', 'per', 'in'], answer: 1, explanation: { bn: 'decidere di + infinito।', en: 'decidere takes di.' } },
      { id: 'a2u3q2', prompt: { bn: 'সময়কাল:', en: 'Time duration:' }, it: 'Lavoro in questa azienda ___ tre anni.', options: ['fa', 'fra', 'da', 'a'], answer: 2, explanation: { bn: 'এখনো চলমান কাজে presente + da।', en: 'Ongoing span uses present + da.' } },
      { id: 'a2u3q3', prompt: { bn: 'নৈর্ব্যক্তিক si:', en: 'Impersonal si:' }, it: 'Allo sportello due si ___ i certificati.', options: ['ritira', 'ritirano', 'ritiriamo', 'ritiri'], answer: 1, explanation: { bn: 'i certificati বহুবচন → ritirano।', en: 'Plural subject requires ritirano.' } },
      { id: 'a2u3q4', prompt: { bn: 'দ্বৈত না-বাচক:', en: 'Double negative:' }, it: 'Dopo le sette in ufficio ___ c’è ___.', options: ['non / nessuno', 'non / qualcuno', 'mai / nessuno', 'non / ogni'], answer: 0, explanation: { bn: 'non + verb + nessuno।', en: 'Nobody = non … nessuno.' } },
    ],
  },
  {
    id: 'assess-a2-u4',
    level: 'A2',
    unitNumber: 4,
    title: { bn: 'A2 ইউনিট ৪ মূল্যায়ন: স্বাস্থ্য, মিডিয়া ও সমাজ', en: 'A2 Unit 4 Assessment: Health & Society' },
    passScore: 0.7,
    questions: [
      { id: 'a2u4q1', prompt: { bn: 'sapere বনাম conoscere:', en: 'sapere vs conoscere:' }, it: '___ un buon avvocato in città?', options: ['Sai', 'Conosci', 'Sa', 'Sapete'], answer: 1, explanation: { bn: 'মানুষ চেনার ক্ষেত্রে conoscere।', en: 'Knowing a person takes conoscere.' } },
      { id: 'a2u4q2', prompt: { bn: 'অতীতে মডাল:', en: 'Past modal:' }, it: 'Purtroppo ieri non ___ potuto venire.', options: ['ho', 'sono', 'stavo', 'facevo'], answer: 1, explanation: { bn: 'venire essere নেয় → non sono potuto venire (কথ্য ho potuto-ও প্রচলিত)।', en: 'venire takes essere.' } },
      { id: 'a2u4q3', prompt: { bn: 'ক্রিয়াবিশেষণ:', en: 'Manner adverb:' }, it: 'Il dottore ha spiegato la ricetta ___.', options: ['chiaro', 'chiaramente', 'chiari', 'chiarare'], answer: 1, explanation: { bn: 'chiara + mente = chiaramente।', en: 'Feminine adjective + mente.' } },
      { id: 'a2u4q4', prompt: { bn: 'ভদ্র প্রস্তাব:', en: 'Polite invitation:' }, it: 'Domenica ___ va di andare al lago?', options: ['ti', 'tu', 'sei', 'fai'], answer: 0, explanation: { bn: 'ti va di + infinito।', en: 'ti va di + infinitive.' } },
    ],
  },
  {
    id: 'assess-a2-final',
    level: 'A2',
    title: { bn: 'A2 চূড়ান্ত পরীক্ষা (সম্পূর্ণ মূল্যায়ন)', en: 'A2 Final Comprehensive Assessment' },
    passScore: 0.75,
    questions: [
      { id: 'a2f1', prompt: { bn: 'অনিয়মিত পার্টিসিপল ও মিল:', en: 'Agreement & irregular participle:' }, it: 'Ecco la ricevuta, l’ho ___ nello zaino.', options: ['messo', 'messa', 'messi', 'mettuto'], answer: 1, explanation: { bn: 'l’ (la ricevuta) স্ত্রীলিঙ্গ → messa।', en: 'Direct pronoun l’ (fem.) → messa.' } },
      { id: 'a2f2', prompt: { bn: 'imperfetto বনাম passato:', en: 'Imperfect vs passato prossimo:' }, it: 'Da bambino ___ in campagna, ma poi mi sono trasferito.', options: ['ho abitato', 'abitavo', 'abiterò', 'abito'], answer: 1, explanation: { bn: 'শৈশবের অভ্যাস/অবস্থা = imperfetto।', en: 'Past habit uses abitavo.' } },
      { id: 'a2f3', prompt: { bn: 'ভবিষ্যৎ কাল:', en: 'Simple future:' }, it: 'Domani mattina ___ dal dentista alle dieci.', options: ['andarò', 'andrò', 'vado', 'sono andato'], answer: 1, explanation: { bn: 'andare → andrò।', en: 'Future of andare is andrò.' } },
      { id: 'a2f4', prompt: { bn: 'সর্বনামযুক্ত ক্রিয়া:', en: 'Pronominal verb:' }, it: '___ trenta minuti in treno fino a Milano.', options: ['Ci vuole', 'Ci vogliono', 'Ce la fa', 'Se ne va'], answer: 1, explanation: { bn: 'trenta minuti বহুবচন → Ci vogliono।', en: 'Plural duration takes Ci vogliono.' } },
      { id: 'a2f5', prompt: { bn: 'সম্বন্ধবাচক সর্বনাম:', en: 'Relative pronoun:' }, it: 'La città ___ lavoro è molto tranquilla.', options: ['che', 'in cui', 'chi', 'quale'], answer: 1, explanation: { bn: 'স্থান বোঝাতে in cui (বা dove)।', en: 'Place requires in cui / dove.' } },
      { id: 'a2f6', prompt: { bn: 'আর্টিকেলযুক্ত অব্যয়:', en: 'Contracted preposition:' }, it: 'I documenti sono ___ sportello quattro.', options: ['a lo', 'allo', 'al', 'nello'], answer: 1, explanation: { bn: 'a + lo sportello = allo sportello।', en: 's+consonant uses lo → a + lo = allo.' } },
      { id: 'a2f7', prompt: { bn: 'সম্বন্ধসূচক ও পরিবার:', en: 'Family possessive:' }, it: '___ fratelli vivono a Roma da cinque anni.', options: ['Miei', 'I miei', 'Il mio', 'Mio'], answer: 1, explanation: { bn: 'বহুবচন পরিবারে আর্টিকেল বসে: I miei fratelli।', en: 'Plural family nouns keep the article.' } },
      { id: 'a2f8', prompt: { bn: 'অনির্দিষ্ট শব্দ:', en: 'Indefinite word:' }, it: 'Ho aspettato ___ giorno prima di ricevere la risposta.', options: ['alcuni', 'qualche', 'ogni i', 'tutti'], answer: 1, explanation: { bn: 'giorno একবচন → qualche giorno।', en: 'qualche takes singular giorno.' } },
    ],
  },
];
