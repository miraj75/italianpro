import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a1-u1-l1',
  number: 1,
  title: 'Saluti e Presentazioni',
  subtitle: { bn: 'অভিবাদন ও নিজের পরিচয়', en: 'Greetings and introductions' },
  minutes: 10,
  objectives: [
    { bn: 'দিনের বিভিন্ন সময়ে অভিবাদন জানাতে পারবেন', en: 'Greet people at different times of day' },
    { bn: 'নিজের নাম বলতে ও অন্যের নাম জিজ্ঞেস করতে পারবেন', en: 'Say your name and ask someone else’s' },
    { bn: 'অনানুষ্ঠানিক (tu) ও আনুষ্ঠানিক (Lei) সম্বোধনের পার্থক্য বুঝবেন', en: 'Understand informal (tu) vs formal (Lei) address' },
  ],
  phrases: [
    {
      id: 'ciao',
      it: 'Ciao!',
      tr: { bn: 'হ্যালো! / বিদায়!', en: 'Hi! / Bye!' },
      note: { bn: 'অনানুষ্ঠানিক — বন্ধু, পরিবার ও সমবয়সীদের সাথে। দেখা হলে ও বিদায়ে দুই ক্ষেত্রেই চলে।', en: 'Informal — friends, family, peers. Used both when meeting and leaving.' },
    },
    {
      id: 'buongiorno',
      it: 'Buongiorno!',
      tr: { bn: 'শুভ সকাল! / শুভ দিন!', en: 'Good morning! / Good day!' },
      note: { bn: 'সকাল থেকে বিকেল পর্যন্ত; আনুষ্ঠানিক পরিস্থিতিতেও ব্যবহার হয়।', en: 'From morning until mid-afternoon; fine in formal situations.' },
    },
    {
      id: 'buonasera',
      it: 'Buonasera!',
      tr: { bn: 'শুভ সন্ধ্যা!', en: 'Good evening!' },
      note: { bn: 'সাধারণত বিকেলের শেষ থেকে সন্ধ্যায় দেখা হলে।', en: 'Usually from late afternoon when meeting someone.' },
    },
    {
      id: 'buonanotte',
      it: 'Buonanotte!',
      tr: { bn: 'শুভ রাত্রি!', en: 'Good night!' },
      note: { bn: 'শুধু রাতে বিদায় বা ঘুমাতে যাওয়ার সময় বলা হয়।', en: 'Only when leaving at night or going to bed.' },
    },
    {
      id: 'arrivederci',
      it: 'Arrivederci!',
      tr: { bn: 'আবার দেখা হবে! / বিদায়!', en: 'Goodbye!' },
      note: { bn: 'ভদ্র ও নিরপেক্ষ বিদায়; দোকান বা অফিসে উপযুক্ত।', en: 'Polite, neutral goodbye; good for shops and offices.' },
    },
    {
      id: 'mi-chiamo',
      it: 'Mi chiamo Marco.',
      tr: { bn: 'আমার নাম মার্কো।', en: 'My name is Marco.' },
    },
    {
      id: 'come-ti-chiami',
      it: 'Come ti chiami?',
      tr: { bn: 'তোমার নাম কী?', en: 'What’s your name? (informal)' },
    },
    {
      id: 'come-si-chiama',
      it: 'Come si chiama?',
      tr: { bn: 'আপনার নাম কী?', en: 'What’s your name? (formal)' },
    },
    {
      id: 'piacere',
      it: 'Piacere!',
      tr: { bn: 'পরিচিত হয়ে ভালো লাগলো!', en: 'Nice to meet you!' },
    },
    {
      id: 'come-stai',
      it: 'Come stai?',
      tr: { bn: 'তুমি কেমন আছো?', en: 'How are you? (informal)' },
    },
    {
      id: 'sto-bene',
      it: 'Sto bene, grazie. E tu?',
      tr: { bn: 'আমি ভালো আছি, ধন্যবাদ। আর তুমি?', en: 'I’m fine, thanks. And you?' },
    },
  ],
  grammar: [
    {
      id: 'chiamarsi',
      title: { bn: 'নাম বলা: chiamarsi ক্রিয়া', en: 'Saying your name: the verb chiamarsi' },
      explanation: {
        bn: 'ইতালিয়ানে নাম বলতে "chiamarsi" (নিজেকে ডাকা) ক্রিয়া ব্যবহার হয়। আক্ষরিক অর্থে "Mi chiamo Marco" = "আমি নিজেকে মার্কো ডাকি"। ক্রিয়ার আগে mi / ti / si বসে।',
        en: 'Italian uses the verb "chiamarsi" (to call oneself) to give a name. Literally, "Mi chiamo Marco" = "I call myself Marco". The words mi / ti / si come before the verb.',
      },
      table: [
        { label: 'io', it: 'mi chiamo', tr: { bn: 'আমার নাম …', en: 'my name is …' } },
        { label: 'tu', it: 'ti chiami', tr: { bn: 'তোমার নাম …', en: 'your name is … (informal)' } },
        { label: 'lui / lei', it: 'si chiama', tr: { bn: 'তার নাম …', en: 'his / her name is …' } },
        { label: 'Lei', it: 'si chiama', tr: { bn: 'আপনার নাম …', en: 'your name is … (formal)' } },
      ],
      examples: [
        { id: 'g1-e1', it: 'Lei si chiama Giulia.', tr: { bn: 'তার নাম জুলিয়া।', en: 'Her name is Giulia.' } },
        { id: 'g1-e2', it: 'Come si chiama Lei?', tr: { bn: 'আপনার নাম কী?', en: 'What is your name? (formal)' } },
      ],
    },
    {
      id: 'tu-lei',
      title: { bn: 'tu বনাম Lei', en: 'tu vs Lei' },
      explanation: {
        bn: '"tu" ব্যবহার করুন বন্ধু, পরিবার, শিশু ও সমবয়সীদের সাথে। অপরিচিত বড়দের, দোকানদার, অফিসের কর্মকর্তা বা শিক্ষকের সাথে "Lei" (বড় হাতের L) ব্যবহার করুন। Lei-এর সাথে ক্রিয়া তৃতীয় পুরুষের রূপ নেয়।',
        en: 'Use "tu" with friends, family, children and peers. Use "Lei" (capital L) with strangers, shop staff, officials and teachers. With Lei the verb takes the third-person form.',
      },
      examples: [
        { id: 'g2-e1', it: 'Come stai? (tu)', tr: { bn: 'তুমি কেমন আছো?', en: 'How are you? (informal)' } },
        { id: 'g2-e2', it: 'Come sta? (Lei)', tr: { bn: 'আপনি কেমন আছেন?', en: 'How are you? (formal)' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ক্লাসে প্রথম দিন', en: 'First day in class' },
    context: { bn: 'মার্কো ও জুলিয়া ভাষা কোর্সে প্রথম দেখা করছে।', en: 'Marco and Giulia meet for the first time at a language course.' },
    lines: [
      { speaker: 'Marco', it: 'Ciao! Mi chiamo Marco. E tu, come ti chiami?', tr: { bn: 'হ্যালো! আমার নাম মার্কো। আর তোমার নাম কী?', en: 'Hi! My name is Marco. And you, what’s your name?' } },
      { speaker: 'Giulia', it: 'Ciao, Marco! Mi chiamo Giulia. Piacere!', tr: { bn: 'হ্যালো, মার্কো! আমার নাম জুলিয়া। পরিচিত হয়ে ভালো লাগলো!', en: 'Hi, Marco! My name is Giulia. Nice to meet you!' } },
      { speaker: 'Marco', it: 'Piacere mio! Come stai?', tr: { bn: 'আমারও ভালো লাগলো! কেমন আছো?', en: 'My pleasure! How are you?' } },
      { speaker: 'Giulia', it: 'Sto bene, grazie. E tu?', tr: { bn: 'ভালো আছি, ধন্যবাদ। আর তুমি?', en: 'I’m fine, thanks. And you?' } },
      { speaker: 'Marco', it: 'Bene, grazie!', tr: { bn: 'ভালো, ধন্যবাদ!', en: 'Fine, thanks!' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'সন্ধ্যায় কারও সাথে দেখা হলে কী বলবেন?', en: 'What do you say when you meet someone in the evening?' },
      options: ['Buonanotte', 'Buonasera', 'Buongiorno', 'Arrivederci'],
      answer: 1,
      explanation: { bn: '"Buonasera" সন্ধ্যার অভিবাদন। "Buonanotte" শুধু রাতে বিদায়ের সময় বলা হয়।', en: '"Buonasera" is the evening greeting. "Buonanotte" is only for leaving at night.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: '___ chiamo Sara.',
      options: ['Ti', 'Si', 'Mi', 'Io'],
      answer: 2,
      explanation: { bn: '"io"-এর জন্য রূপ হলো "mi chiamo"।', en: 'The "io" form is "mi chiamo".' },
    },
    {
      id: 'q3',
      prompt: { bn: 'একজন অফিস কর্মকর্তার নাম ভদ্রভাবে জিজ্ঞেস করুন:', en: 'Politely ask an official’s name:' },
      options: ['Come ti chiami?', 'Come si chiama?', 'Come stai?', 'Mi chiamo?'],
      answer: 1,
      explanation: { bn: 'আনুষ্ঠানিক "Lei"-এর সাথে "si chiama" ব্যবহার হয়।', en: 'Formal "Lei" uses "si chiama".' },
    },
    {
      id: 'q4',
      prompt: { bn: '"Piacere!" অর্থ কী?', en: 'What does "Piacere!" mean?' },
      options: ['Thank you!', 'Nice to meet you!', 'Goodbye!', 'Please!'],
      answer: 1,
      explanation: { bn: '"Piacere!" = পরিচিত হয়ে ভালো লাগলো। কারও সাথে প্রথম পরিচয়ে বলা হয়।', en: '"Piacere!" = nice to meet you, said when first introduced.' },
    },
    {
      id: 'q5',
      prompt: { bn: '"Come stai?"-এর স্বাভাবিক উত্তর কোনটি?', en: 'Which is a natural answer to "Come stai?"' },
      options: ['Mi chiamo Luca.', 'Buongiorno.', 'Sto bene, grazie.', 'Piacere mio.'],
      answer: 2,
      explanation: { bn: '"Sto bene, grazie" = আমি ভালো আছি, ধন্যবাদ।', en: '"Sto bene, grazie" = I’m fine, thanks.' },
    },
  ],
  tip: {
    bn: '"Ciao" উচ্চারণ: চাও (chao) — "ao" একসাথে উচ্চারণ করতে হয়।',
    en: '"Ciao" is pronounced "chow" — say "ao" together as one sound.',
  },
};

const lesson2: Lesson = {
  id: 'a1-u1-l2',
  number: 2,
  title: 'Di dove sei?',
  subtitle: { bn: 'কোথা থেকে এসেছেন — essere ক্রিয়া', en: 'Where are you from? — the verb essere' },
  minutes: 10,
  objectives: [
    { bn: 'essere (হওয়া) ক্রিয়ার বর্তমান কালের সব রূপ জানবেন', en: 'Learn all present-tense forms of essere (to be)' },
    { bn: 'আপনি কোথা থেকে এসেছেন তা বলতে ও জিজ্ঞেস করতে পারবেন', en: 'Say and ask where someone is from' },
    { bn: 'জাতীয়তা বলতে পারবেন', en: 'State a nationality' },
  ],
  phrases: [
    { id: 'di-dove-sei', it: 'Di dove sei?', tr: { bn: 'তুমি কোথা থেকে এসেছো?', en: 'Where are you from? (informal)' } },
    { id: 'di-dove-e', it: 'Di dov’è Lei?', tr: { bn: 'আপনি কোথা থেকে এসেছেন?', en: 'Where are you from? (formal)' } },
    {
      id: 'sono-di-dhaka',
      it: 'Sono di Dhaka.',
      tr: { bn: 'আমি ঢাকার।', en: 'I’m from Dhaka.' },
      note: { bn: 'শহরের আগে "di" বসে।', en: 'Use "di" before a city.' },
    },
    {
      id: 'vengo-dal-bangladesh',
      it: 'Vengo dal Bangladesh.',
      tr: { bn: 'আমি বাংলাদেশ থেকে এসেছি।', en: 'I come from Bangladesh.' },
      note: { bn: 'দেশের ক্ষেত্রে "venire da" + আর্টিকেল ব্যবহার হয়: dal Bangladesh, dall’Italia।', en: 'For countries use "venire da" + article: dal Bangladesh, dall’Italia.' },
    },
    { id: 'sono-italiano', it: 'Sono italiano. / Sono italiana.', tr: { bn: 'আমি ইতালীয় (পুরুষ / নারী)।', en: 'I’m Italian (male / female).' } },
    { id: 'sono-studente', it: 'Sono uno studente. / Sono una studentessa.', tr: { bn: 'আমি একজন ছাত্র / ছাত্রী।', en: 'I’m a student (male / female).' } },
    { id: 'abito-a-roma', it: 'Abito a Roma.', tr: { bn: 'আমি রোমে থাকি।', en: 'I live in Rome.' } },
  ],
  grammar: [
    {
      id: 'essere',
      title: { bn: 'essere (হওয়া) — বর্তমান কাল', en: 'essere (to be) — present tense' },
      explanation: {
        bn: 'essere একটি অনিয়মিত ক্রিয়া — রূপগুলো মুখস্থ করতে হবে। ইতালিয়ানে সাধারণত সর্বনাম বাদ দেওয়া হয়, কারণ ক্রিয়ার রূপ থেকেই বোঝা যায় কে: "Sono di Dhaka" = "আমি ঢাকার"।',
        en: 'essere is irregular — the forms must be memorised. Italians usually drop the subject pronoun because the verb form shows who: "Sono di Dhaka" = "I’m from Dhaka".',
      },
      table: [
        { label: 'io', it: 'sono', tr: { bn: 'আমি হই', en: 'I am' } },
        { label: 'tu', it: 'sei', tr: { bn: 'তুমি হও', en: 'you are (informal)' } },
        { label: 'lui / lei / Lei', it: 'è', tr: { bn: 'সে / আপনি হন', en: 'he / she is, you are (formal)' } },
        { label: 'noi', it: 'siamo', tr: { bn: 'আমরা হই', en: 'we are' } },
        { label: 'voi', it: 'siete', tr: { bn: 'তোমরা হও', en: 'you are (plural)' } },
        { label: 'loro', it: 'sono', tr: { bn: 'তারা হয়', en: 'they are' } },
      ],
      examples: [
        { id: 'g-e1', it: 'Noi siamo di Napoli.', tr: { bn: 'আমরা নাপোলির।', en: 'We are from Naples.' } },
        { id: 'g-e2', it: 'Giulia è italiana.', tr: { bn: 'জুলিয়া ইতালীয়।', en: 'Giulia is Italian.' } },
      ],
    },
    {
      id: 'gender-nationality',
      title: { bn: 'জাতীয়তার লিঙ্গ', en: 'Gender of nationalities' },
      explanation: {
        bn: '-o দিয়ে শেষ হওয়া বিশেষণ নারীর ক্ষেত্রে -a হয়: italiano → italiana। -e দিয়ে শেষ হলে একই থাকে: inglese (পুরুষ ও নারী)।',
        en: 'Adjectives ending in -o change to -a for women: italiano → italiana. Those ending in -e stay the same: inglese (male and female).',
      },
      examples: [
        { id: 'g-e3', it: 'Marco è italiano, Anna è italiana.', tr: { bn: 'মার্কো ইতালীয়, আন্না ইতালীয়।', en: 'Marco is Italian, Anna is Italian.' } },
        { id: 'g-e4', it: 'John è inglese, Kate è inglese.', tr: { bn: 'জন ইংরেজ, কেট ইংরেজ।', en: 'John is English, Kate is English.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'বিশ্ববিদ্যালয়ের ক্যাফেতে', en: 'At the university café' },
    context: { bn: 'রাহিম রোমে পড়তে এসেছে; সে লুকার সাথে কথা বলছে।', en: 'Rahim has come to study in Rome; he is talking to Luca.' },
    lines: [
      { speaker: 'Luca', it: 'Ciao! Sei nuovo? Di dove sei?', tr: { bn: 'হ্যালো! তুমি কি নতুন? কোথা থেকে এসেছো?', en: 'Hi! Are you new? Where are you from?' } },
      { speaker: 'Rahim', it: 'Sì, sono nuovo. Vengo dal Bangladesh, sono di Dhaka.', tr: { bn: 'হ্যাঁ, আমি নতুন। আমি বাংলাদেশ থেকে এসেছি, ঢাকার।', en: 'Yes, I’m new. I come from Bangladesh, I’m from Dhaka.' } },
      { speaker: 'Luca', it: 'Che bello! Io sono di Roma. Sei uno studente?', tr: { bn: 'দারুণ! আমি রোমের। তুমি কি ছাত্র?', en: 'How nice! I’m from Rome. Are you a student?' } },
      { speaker: 'Rahim', it: 'Sì, sono uno studente di ingegneria.', tr: { bn: 'হ্যাঁ, আমি প্রকৌশলের ছাত্র।', en: 'Yes, I’m an engineering student.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Choose the correct form:' },
      it: 'Noi ___ di Milano.',
      options: ['sono', 'siamo', 'siete', 'è'],
      answer: 1,
      explanation: { bn: '"noi"-এর সাথে essere-র রূপ "siamo"।', en: 'With "noi", essere becomes "siamo".' },
    },
    {
      id: 'q2',
      prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Choose the correct form:' },
      it: 'Tu ___ italiano?',
      options: ['sei', 'sono', 'è', 'siete'],
      answer: 0,
      explanation: { bn: '"tu"-এর সাথে "sei"।', en: '"tu" takes "sei".' },
    },
    {
      id: 'q3',
      prompt: { bn: 'আন্না একজন নারী। সঠিক বাক্য কোনটি?', en: 'Anna is a woman. Which sentence is correct?' },
      options: ['Anna è italiano.', 'Anna è italiana.', 'Anna sono italiana.', 'Anna sei italiana.'],
      answer: 1,
      explanation: { bn: 'নারীর জন্য italiano → italiana, এবং lei-এর সাথে "è"।', en: 'Feminine italiano → italiana, and "lei" takes "è".' },
    },
    {
      id: 'q4',
      prompt: { bn: 'শহরের আগে কোন শব্দ বসে?', en: 'Which word goes before a city?' },
      it: 'Sono ___ Dhaka.',
      options: ['a', 'in', 'di', 'dal'],
      answer: 2,
      explanation: { bn: 'উৎস বোঝাতে essere + di + শহর: "Sono di Dhaka"।', en: 'For origin: essere + di + city: "Sono di Dhaka".' },
    },
    {
      id: 'q5',
      prompt: { bn: '"Loro" এর সাথে essere-র রূপ কোনটি?', en: 'Which form of essere goes with "loro"?' },
      options: ['siamo', 'siete', 'sono', 'sei'],
      answer: 2,
      explanation: { bn: '"loro sono" — লক্ষ্য করুন, "io sono"-র মতো একই রূপ।', en: '"loro sono" — note it matches "io sono".' },
    },
  ],
  tip: {
    bn: '"è" (হয়) উপরে চিহ্নসহ লেখা হয়; চিহ্ন ছাড়া "e" মানে "এবং"।',
    en: '"è" (is) has an accent; without it, "e" means "and".',
  },
};

const lesson3: Lesson = {
  id: 'a1-u1-l3',
  number: 3,
  title: 'Numeri e Età',
  subtitle: { bn: '০–২০ সংখ্যা ও বয়স বলা', en: 'Numbers 0–20 and saying your age' },
  minutes: 10,
  objectives: [
    { bn: '০ থেকে ২০ পর্যন্ত গুনতে পারবেন', en: 'Count from 0 to 20' },
    { bn: 'avere ক্রিয়া দিয়ে বয়স বলতে পারবেন', en: 'Say your age with the verb avere' },
  ],
  phrases: [
    { id: 'n0-5', it: 'zero, uno, due, tre, quattro, cinque', tr: { bn: '০, ১, ২, ৩, ৪, ৫', en: '0, 1, 2, 3, 4, 5' } },
    { id: 'n6-10', it: 'sei, sette, otto, nove, dieci', tr: { bn: '৬, ৭, ৮, ৯, ১০', en: '6, 7, 8, 9, 10' } },
    { id: 'n11-15', it: 'undici, dodici, tredici, quattordici, quindici', tr: { bn: '১১, ১২, ১৩, ১৪, ১৫', en: '11, 12, 13, 14, 15' } },
    { id: 'n16-20', it: 'sedici, diciassette, diciotto, diciannove, venti', tr: { bn: '১৬, ১৭, ১৮, ১৯, ২০', en: '16, 17, 18, 19, 20' } },
    { id: 'quanti-anni', it: 'Quanti anni hai?', tr: { bn: 'তোমার বয়স কত?', en: 'How old are you? (informal)' } },
    {
      id: 'ho-anni',
      it: 'Ho diciannove anni.',
      tr: { bn: 'আমার বয়স ১৯ বছর।', en: 'I’m nineteen years old.' },
      note: { bn: 'ইতালিয়ানে বয়স "avere" (থাকা) দিয়ে বলা হয় — আক্ষরিক অর্থে "আমার ১৯ বছর আছে"।', en: 'Italian uses "avere" (to have) for age — literally "I have 19 years".' },
    },
  ],
  grammar: [
    {
      id: 'avere-sing',
      title: { bn: 'avere (থাকা) — একবচন', en: 'avere (to have) — singular' },
      explanation: {
        bn: 'avere অনিয়মিত ক্রিয়া। "h" অক্ষরটি উচ্চারণ হয় না: "ho" = "ও"। বয়স বলতে সবসময় avere: "Ho 20 anni", কখনো "Sono 20 anni" নয়।',
        en: 'avere is irregular. The "h" is silent: "ho" sounds like "o". Age always uses avere: "Ho 20 anni", never "Sono 20 anni".',
      },
      table: [
        { label: 'io', it: 'ho', tr: { bn: 'আমার আছে', en: 'I have' } },
        { label: 'tu', it: 'hai', tr: { bn: 'তোমার আছে', en: 'you have' } },
        { label: 'lui / lei / Lei', it: 'ha', tr: { bn: 'তার / আপনার আছে', en: 'he / she has, you have (formal)' } },
      ],
      examples: [
        { id: 'g-e1', it: 'Marco ha venti anni.', tr: { bn: 'মার্কোর বয়স ২০ বছর।', en: 'Marco is twenty.' } },
        { id: 'g-e2', it: 'Quanti anni ha, signora?', tr: { bn: 'আপনার বয়স কত, ম্যাডাম?', en: 'How old are you, madam?' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'নিবন্ধন ডেস্কে', en: 'At the registration desk' },
    context: { bn: 'ভাষা স্কুলে একজন কর্মী আয়েশার তথ্য নিচ্ছেন (আনুষ্ঠানিক Lei)।', en: 'A staff member at a language school takes Ayesha’s details (formal Lei).' },
    lines: [
      { speaker: 'Impiegata', it: 'Buongiorno! Come si chiama?', tr: { bn: 'শুভ দিন! আপনার নাম কী?', en: 'Good morning! What’s your name?' } },
      { speaker: 'Ayesha', it: 'Buongiorno. Mi chiamo Ayesha Rahman.', tr: { bn: 'শুভ দিন। আমার নাম আয়েশা রহমান।', en: 'Good morning. My name is Ayesha Rahman.' } },
      { speaker: 'Impiegata', it: 'Quanti anni ha?', tr: { bn: 'আপনার বয়স কত?', en: 'How old are you?' } },
      { speaker: 'Ayesha', it: 'Ho diciotto anni.', tr: { bn: 'আমার বয়স ১৮ বছর।', en: 'I’m eighteen.' } },
      { speaker: 'Impiegata', it: 'Perfetto, grazie!', tr: { bn: 'চমৎকার, ধন্যবাদ!', en: 'Perfect, thank you!' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"১৭" ইতালিয়ানে কী?', en: 'How do you say "17" in Italian?' },
      options: ['settanta', 'diciassette', 'sedici', 'diciotto'],
      answer: 1,
      explanation: { bn: '১৭ = diciassette। "settanta" মানে ৭০।', en: '17 = diciassette. "settanta" is 70.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'সঠিক বাক্য কোনটি?', en: 'Which sentence is correct?' },
      options: ['Sono venti anni.', 'Ho venti anni.', 'Hai venti anni io.', 'Ha venti anni io.'],
      answer: 1,
      explanation: { bn: 'বয়স avere দিয়ে: "io ho"।', en: 'Age uses avere: "io ho".' },
    },
    {
      id: 'q3',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'Quanti anni ___, Luca?',
      options: ['ho', 'hai', 'ha', 'sei'],
      answer: 1,
      explanation: { bn: 'লুকাকে সরাসরি "tu" বলা হচ্ছে, তাই "hai"।', en: 'Addressing Luca as "tu", so "hai".' },
    },
    {
      id: 'q4',
      prompt: { bn: '"quattordici" কোন সংখ্যা?', en: 'Which number is "quattordici"?' },
      options: ['4', '14', '40', '12'],
      answer: 1,
      explanation: { bn: 'quattordici = ১৪। quattro = ৪।', en: 'quattordici = 14. quattro = 4.' },
    },
  ],
  tip: {
    bn: '"ho", "hai", "ha"-তে h নীরব — "ও", "আই", "আ" এর মতো উচ্চারণ।',
    en: 'The h in "ho", "hai", "ha" is silent.',
  },
};

export const a1Unit1: Unit = {
  id: 'a1-u1',
  number: 1,
  title: 'Primi passi',
  subtitle: { bn: 'প্রথম পদক্ষেপ: অভিবাদন, পরিচয়, সংখ্যা', en: 'First steps: greetings, introductions, numbers' },
  lessons: [lesson1, lesson2, lesson3],
};
