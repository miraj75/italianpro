import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a2-u2-l1',
  number: 1,
  title: 'In viaggio e in albergo',
  subtitle: { bn: 'হোটেল বুকিং, ভদ্র অনুরোধ ও ভবিষ্যৎ পরিকল্পনা', en: 'Hotel booking, polite requests & future plans' },
  minutes: 12,
  objectives: [
    { bn: 'vorrei / potrei দিয়ে হোটেল ও রেস্টুরেন্টে ভদ্র অনুরোধ করতে পারবেন', en: 'Make polite requests with vorrei and potrei' },
    { bn: 'futuro semplice দিয়ে ভ্রমণের পরিকল্পনা বলবেন', en: 'Express travel plans using futuro semplice' },
  ],
  phrases: [
    { id: 'camera-doppia', it: 'Vorrei prenotare una camera doppia per tre notti.', tr: { bn: 'আমি তিন রাতের জন্য একটি ডাবল রুম বুক করতে চাই।', en: 'I would like to book a double room for three nights.' } },
    { id: 'potrebbe-ripetere', it: 'Scusi, potrebbe ripetere il numero del binario?', tr: { bn: 'মাফ করবেন, প্ল্যাটফর্ম নম্বরটা আরেকবার বলবেন?', en: 'Excuse me, could you repeat the platform number?' } },
    { id: 'partiremo', it: 'Partiremo dopodomani mattina alle nove.', tr: { bn: 'আমরা আগামী পরশু সকাল নয়টায় রওনা দেব।', en: 'We will leave the day after tomorrow at nine.' } },
    { id: 'stare-per-partire', it: 'Sbrigati, il treno sta per partire!', tr: { bn: 'তাড়াতাড়ি করো, ট্রেন এইমাত্র ছাড়তে যাচ্ছে!', en: 'Hurry up, the train is about to leave!' } },
  ],
  grammar: [
    {
      id: 'condizionale',
      title: { bn: 'condizionale ও ভদ্র অনুরোধ', en: 'Present conditional & polite frames' },
      explanation: {
        bn: 'ইচ্ছা বা ভদ্র অনুরোধে vorrei, potrei, dovrei ব্যবহার হয়। ভবিষ্যতের পরিকল্পনা ও সম্ভাবনা বোঝাতে futuro semplice (-ò, -ai, -à, -emo, -ete, -anno)। খুব আসন্ন কাজে stare per + infinito।',
        en: 'Polite requests use vorrei / potrei. Future plans use futuro semplice (-ò.. -anno); imminent events use stare per + infinitive.',
      },
      table: [
        { label: 'volere (cond.)', it: 'vorrei, vorresti, vorrebbe', tr: { bn: 'চাইতাম / অনুগ্রহ করে চাই', en: 'would like' } },
        { label: 'potere (cond.)', it: 'potrei, potresti, potrebbe', tr: { bn: 'পারতাম কি / কি পারেন', en: 'could' } },
        { label: 'andare (fut.)', it: 'andrò, andrai, andrà', tr: { bn: 'যাব', en: 'will go' } },
      ],
      examples: [
        { id: 'a2u2l1-e1', it: 'Le dispiace se apro un po’ la finestra?', tr: { bn: 'আমি জানালাটা একটু খুললে আপনার কি আপত্তি আছে?', en: 'Do you mind if I open the window a bit?' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'হোটেল রিসেপশনে', en: 'At the hotel reception' },
    context: { bn: 'নাদিয়া ভেনিসের এক হোটেলে চেক-ইন করছে।', en: 'Nadia checks in at a hotel in Venice.' },
    lines: [
      { speaker: 'Receptionist', it: 'Buonasera signora, ha una prenotazione?', tr: { bn: 'শুভ সন্ধ্যা ম্যাডাম, আপনার কি বুকিং আছে?', en: 'Good evening madam, do you have a booking?' } },
      { speaker: 'Nadia', it: 'Sì, a nome Begum. Avrei prenotato una camera singola con balcone.', tr: { bn: 'হ্যাঁ, বেগম নামে। আমি বারান্দাসহ একটি সিঙ্গেল রুম বুক করেছিলাম।', en: 'Yes, under Begum. I booked a single room with a balcony.' } },
      { speaker: 'Receptionist', it: 'Perfetto, è al secondo piano. Potrebbe mostrarmi il passaporto, per favore?', tr: { bn: 'ঠিক আছে, দোতলায়। অনুগ্রহ করে পাসপোর্টটা একটু দেখাবেন?', en: 'Perfect, it is on the second floor. Could you show me your passport, please?' } },
      { speaker: 'Nadia', it: 'Certo, eccolo! A che ora sarà la colazione domani?', tr: { bn: 'অবশ্যই, এই যে! কাল নাস্তা কয়টায় হবে?', en: 'Sure, here it is! What time will breakfast be tomorrow?' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'ভদ্রভাবে সাহায্য চাইতে:', en: 'Polite request to staff:' }, it: 'Scusi, ___ darmi la ricevuta?', options: ['può', 'potrebbe', 'vuole', 'deve'], answer: 1, explanation: { bn: 'potrebbe + infinito সবচেয়ে ভদ্র।', en: 'potrebbe is the most polite conditional.' } },
    { id: 'q2', prompt: { bn: 'venire-এর ভবিষ্যৎ io রূপ:', en: 'Future io of venire:' }, options: ['venirò', 'verrò', 'vengo', 'vorrò'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: venire → verrò — venire যুক্ত হয়ে সংক্ষিপ্ত রূপ হয় verrò।', en: 'venire contracts to verrò.' } },
    { id: 'q3', prompt: { bn: '"প্রায় ছাড়তে যাচ্ছে":', en: '"About to leave":' }, it: 'L’aereo ___ decollare.', options: ['è per', 'sta per', 'va per', 'fa per'], answer: 1, explanation: { bn: 'আসন্ন কাজ প্রকাশের গঠন (stare per + infinito)', en: 'stare per + infinitive.' } },
    { id: 'q4', prompt: { bn: 'ভদ্রভাবে রুম চাওয়া:', en: 'Politely requesting a room:' }, it: '___ prenotare una camera singola.', options: ['Vorrò', 'Vorrei', 'Volevo ieri', 'Voluto'], answer: 1, explanation: { bn: 'Vorrei = আমি চাইতাম (ভদ্র অনুরোধ)।', en: 'Vorrei is the polite conditional.' } },
  ],
  tip: { bn: 'volere (ভবিষ্যৎ vorrò) ও condizionale (vorrei) গুলিয়ে ফেলবেন না — অনুরোধে সবসময় vorrei!।', en: 'Don’t confuse vorrei (I’d like) with vorrò (I will want).' },
};

const lesson2: Lesson = {
  id: 'a2-u2-l2',
  number: 2,
  title: 'Preposizioni e direzioni',
  subtitle: { bn: 'আর্টিকেলযুক্ত অব্যয়, ci/ne ও দিকনির্দেশ', en: 'Articulated prepositions, ci/ne & directions' },
  minutes: 12,
  objectives: [
    { bn: 'al, nel, dal, sul, della ইত্যাদি অব্যয় সঠিকভাবে ব্যবহার করবেন', en: 'Use contracted prepositions accurately' },
    { bn: 'ci ও ne ব্যবহার করে পুনরাবৃত্তি এড়াবেন', en: 'Avoid repetition using ci and ne' },
    { bn: 'আদেশ/নির্দেশ (imperativo) ও ক্রমবাচক সংখ্যা বলবেন', en: 'Give directions with the imperative and ordinals' },
  ],
  phrases: [
    { id: 'seconda-a-destra', it: 'Giri alla seconda strada a destra.', tr: { bn: 'ডানদিকের দ্বিতীয় রাস্তায় ঘুরুন।', en: 'Turn onto the second street on the right.' } },
    { id: 'ci-vado', it: 'Vai spesso al museo? Sì, ci vado spesso.', tr: { bn: 'তুমি কি প্রায়ই জাদুঘরে যাও? হ্যাঁ, যাই।', en: 'Do you go to the museum often? Yes, I go there often.' } },
    { id: 'ne-prendo', it: 'Quante bottiglie vuole? Ne prendo due.', tr: { bn: 'কতগুলো বোতল নেবেন? দুটো নেব।', en: 'How many bottles would you like? I’ll take two.' } },
  ],
  grammar: [
    {
      id: 'preposizioni-articolate',
      title: { bn: 'আর্টিকেলযুক্ত অব্যয় ও ci/ne', en: 'Contracted prepositions & ci/ne' },
      explanation: {
        bn: 'a, da, di, in, su-এর পর আর্টিকেল যুক্ত হয় (al, dal, del, nel, sul)। স্থান পুনরাবৃত্তি না করতে ci ("সেখানে"), এবং সংখ্যাসহ পরিমাণ বোঝাতে ne ("তার থেকে") বসে।',
        en: 'Contract a/da/di/in/su with definite articles. Replace places with ci and quantified objects with ne.',
      },
      table: [
        { label: 'a + il / la', it: 'al / alla', tr: { bn: 'তে / দিকে', en: 'to / at the' } },
        { label: 'in + il / gli', it: 'nel / negli', tr: { bn: 'ভেতরে', en: 'in the' } },
        { label: 'da + l’ / i', it: 'dall’ / dai', tr: { bn: 'থেকে / কারও কাছে', en: 'from the' } },
      ],
      examples: [
        { id: 'a2u2l2-e1', it: 'Ci vogliono quindici minuti a piedi.', tr: { bn: 'হেঁটে যেতে পনেরো মিনিট লাগে।', en: 'It takes fifteen minutes on foot.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ডাকঘরের পথ খোঁজা', en: 'Finding the post office' },
    context: { bn: 'পথচারীর কাছে ঠিকানা জিজ্ঞেস করা হচ্ছে।', en: 'Asking a passer-by for directions.' },
    lines: [
      { speaker: 'Tariq', it: 'Scusi, sa dov’è l’ufficio postale più vicino?', tr: { bn: 'মাফ করবেন, সবচেয়ে কাছের ডাকঘরটা কোথায় জানেন কি?', en: 'Excuse me, do you know where the nearest post office is?' } },
      { speaker: 'Passante', it: 'Vada sempre dritto fino al semaforo e giri alla prima strada a sinistra.', tr: { bn: 'ট্রাফিক লাইট পর্যন্ত সোজা যান এবং বামদিকের প্রথম রাস্তায় ঘুরুন।', en: 'Go straight ahead to the traffic light and turn left at the first street.' } },
      { speaker: 'Tariq', it: 'Ci vogliono molti minuti?', tr: { bn: 'অনেক সময় লাগে কি?', en: 'Does it take many minutes?' } },
      { speaker: 'Passante', it: 'No, ci vogliono solo cinque minuti a piedi!', tr: { bn: 'না, হেঁটে মাত্র পাঁচ মিনিট লাগে!', en: 'No, it only takes five minutes on foot!' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'প্রিপোজিশন ও আর্টিকেল যুক্ত করে সংযুক্ত রূপটি লিখুন: in + la = ?', en: 'Contract in + la:' }, options: ['in la', 'nella', 'alla', 'sulla'], answer: 1, explanation: { bn: 'ব্যাকরণগত সংযোজন: in + la = nella নিয়ম অনুসারে সঠিক রূপটি গঠিত হয়েছে।', en: 'in + la = nella.' } },
    { id: 'q2', prompt: { bn: 'সংখ্যাসহ উত্তর:', en: 'Answer with a quantity:' }, it: 'Quanti biglietti compri? ___ compro tre.', options: ['Li', 'Ci', 'Ne', 'Le'], answer: 2, explanation: { bn: 'সংখ্যাসহ অংশে Ne।', en: 'Quantities use ne.' } },
    { id: 'q3', prompt: { bn: 'আনুষ্ঠানিক Lei আদেশ (girare):', en: 'Formal Lei imperative of girare:' }, it: '___ a destra dopo il ponte.', options: ['Gira', 'Giri', 'Girate', 'Girare'], answer: 1, explanation: { bn: '-are ক্রিয়ার Lei আদেশে -i → Giri।', en: 'Formal -are imperative ends in -i.' } },
    { id: 'q4', prompt: { bn: 'স্থান বোঝাতে কোন সর্বনাম বসে?', en: 'Which pronoun replaces a place?' }, it: 'Vai in banca? Sì, ___ vado subito.', options: ['ne', 'ci', 'la', 'lo'], answer: 1, explanation: { bn: 'স্থান (সেখানে) বোঝাতে ci বসে।', en: 'ci means "there".' } },
  ],
  tip: { bn: 'একাধিক মিনিট/ঘণ্টা হলে বহুবচন: ci vogliono 10 minuti; একবচনে: ci vuole un’ora।', en: 'Use ci vuole for 1 unit (un’ora) and ci vogliono for plural durations (venti minuti).' },
};

const lesson3: Lesson = {
  id: 'a2-u2-l3',
  number: 3,
  title: 'Confrontare e scegliere',
  subtitle: { bn: 'তুলনা, অনিয়মিত বিশেষণ ও কর্ম সর্বনাম', en: 'Comparisons, irregulars & object pronouns' },
  minutes: 12,
  objectives: [
    { bn: 'più/meno di, che ও migliore/meglio সঠিকভাবে ব্যবহার করবেন', en: 'Compare with di/che and distinguish migliore from meglio' },
    { bn: 'প্রত্যক্ষ ও পরোক্ষ সর্বনাম একসাথে চিনবেন', en: 'Use direct (lo/la/li/le) and indirect (gli/le) pronouns' },
  ],
  phrases: [
    { id: 'treno-meno-caro', it: 'Il treno è meno caro dell’aereo.', tr: { bn: 'ট্রেন বিমানের চেয়ে কম দামি।', en: 'The train is less expensive than the plane.' } },
    { id: 'scelta-migliore', it: 'Questa è la soluzione migliore.', tr: { bn: 'এটাই সবচেয়ে ভালো সমাধান।', en: 'This is the best solution.' } },
    { id: 'parlo-meglio', it: 'Adesso capisco molto meglio.', tr: { bn: 'এখন আমি অনেক ভালো বুঝি।', en: 'Now I understand much better.' } },
    { id: 'le-ho-scritto', it: 'Le ho mandato una mail ieri.', tr: { bn: 'গতকাল আমি তাকে (মহিলাকে) একটি ইমেইল পাঠিয়েছি।', en: 'I sent her an email yesterday.' } },
  ],
  grammar: [
    {
      id: 'comparativi-irregolari',
      title: { bn: 'তুলনা ও কর্ম সর্বনাম', en: 'Comparatives & object pronouns' },
      explanation: {
        bn: 'দুটো বিশেষ্যের তুলনায় di, দুটি ক্রিয়া/বিশেষণের তুলনায় che। migliore (বিশেষণ: un lavoro migliore) বনাম meglio (ক্রিয়াবিশেষণ: parlo meglio)। কর্ম সর্বনামে প্রত্যক্ষ lo/la/li/le ও পরোক্ষ gli (পুং/বহু)/le (স্ত্রী) চিনুন।',
        en: 'Use di between nouns, che between verbs/adjectives. migliore modifies nouns; meglio modifies verbs. Distinguish direct lo/la/li/le from indirect gli/le.',
      },
      table: [
        { label: 'buono →', it: 'migliore / ottimo', tr: { bn: 'আরও ভালো / সেরা', en: 'better / excellent' } },
        { label: 'bene →', it: 'meglio', tr: { bn: 'আরও ভালোভাবে', en: 'better (adverb)' } },
        { label: 'a lui / a lei', it: 'gli / le', tr: { bn: 'তাকে (পুং / স্ত্রী)', en: 'to him / to her' } },
      ],
      examples: [
        { id: 'a2u2l3-e1', it: 'Le scarpe nere? Le ho comprate ai saldi.', tr: { bn: 'কালো জুতাগুলো? সেগুলো আমি সেলে কিনেছি।', en: 'The black shoes? I bought them in the sales.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ফ্ল্যাট খোঁজা', en: 'Comparing apartments' },
    context: { bn: 'দুটি ফ্ল্যাটের মধ্যে তুলনা হচ্ছে।', en: 'Comparing two flats to rent.' },
    lines: [
      { speaker: 'Luca', it: 'Quale appartamento preferisci? Quello vicino al centro?', tr: { bn: 'কোন ফ্ল্যাটটা তোমার বেশি পছন্দ? শহরের কেন্দ্রের কাছেরটা?', en: 'Which flat do you prefer? The one near the centre?' } },
      { speaker: 'Rahim', it: 'Sì, è più piccolo dell’altro, ma è molto più luminoso e tranquillo.', tr: { bn: 'হ্যাঁ, এটা অন্যটার চেয়ে ছোট, তবে অনেক বেশি আলোকিত আর শান্ত।', en: 'Yes, it is smaller than the other one, but much brighter and quieter.' } },
      { speaker: 'Luca', it: 'Allora chiama subito il proprietario e chiedigli un appuntamento!', tr: { bn: 'তাহলে এখনই মালিককে ফোন করে অ্যাপয়েন্টমেন্ট চাও!', en: 'Then call the landlord right away and ask him for an appointment!' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'ক্রিয়ার সাথে সঠিক শব্দ:', en: 'Adverb modifying a verb:' }, it: 'Dormo ___ in una stanza silenziosa.', options: ['migliore', 'meglio', 'ottima', 'più buono'], answer: 1, explanation: { bn: 'dormo ক্রিয়ার সাথে meglio বসে।', en: 'Modify verbs with meglio.' } },
    { id: 'q2', prompt: { bn: 'অতীতে প্রত্যক্ষ সর্বনাম:', en: 'Direct pronoun in past tense:' }, it: 'Dove sono i moduli? Li ho ___ qui.', options: ['lasciato', 'lasciata', 'lasciati', 'lasciate'], answer: 2, explanation: { bn: 'Li (পুং বহুবচন) → lasciati।', en: 'Li agrees masculine plural.' } },
    { id: 'q3', prompt: { bn: 'আমাকে সাহায্য করা:', en: 'Helping her:' }, it: 'Sara ha molti pacchi: ___ do una mano.', options: ['la', 'le', 'gli', 'lo'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: dare una mano a Sara → le — Sara-র জন্য পরোক্ষ সর্বনাম হলো le।', en: 'Indirect pronoun for Sara is le.' } },
    { id: 'q4', prompt: { bn: 'দুটি বিশেষ্যের তুলনা:', en: 'Comparing two nouns:' }, it: 'Il treno è più veloce ___ autobus.', options: ['che', 'dell’', 'dall’', 'all’'], answer: 1, explanation: { bn: 'বিশেষ্যের তুলনায় di + l’ = dell’।', en: 'Comparison before a noun uses di (dell’).' } },
  ],
  tip: { bn: 'gli মানে "তাকে (পুরুষ)" এবং আধুনিক ইতালিয়ানে "তাদেরকেও (a loro)" বোঝায়।', en: 'gli means both "to him" and, in modern Italian, "to them".' },
};

export const a2Unit2: Unit = {
  id: 'a2-u2',
  number: 2,
  title: 'In viaggio e in città',
  subtitle: { bn: 'ভ্রমণ, দিকনির্দেশ ও তুলনা', en: 'Travel, directions & comparisons' },
  lessons: [lesson1, lesson2, lesson3],
};
