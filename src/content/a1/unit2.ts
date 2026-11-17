import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a1-u2-l1',
  number: 1,
  title: 'La mia famiglia',
  subtitle: { bn: 'পরিবারের সদস্য ও পরিচয়', en: 'Family members and relationships' },
  minutes: 10,
  objectives: [
    { bn: 'পরিবারের সদস্যদের ইতালিয়ান নাম শিখবেন', en: 'Learn Italian words for family members' },
    { bn: 'আত্মীয়তার সাথে mio/mia ব্যবহার করতে পারবেন', en: 'Use mio and mia with family members' },
  ],
  phrases: [
    { id: 'famiglia', it: 'Questa è la mia famiglia.', tr: { bn: 'এই হলো আমার পরিবার।', en: 'This is my family.' } },
    { id: 'padre-madre', it: 'Mio padre e mia madre vivono a Dhaka.', tr: { bn: 'আমার বাবা ও মা ঢাকায় থাকেন।', en: 'My father and mother live in Dhaka.' }, note: { bn: 'একবচন পরিবারের আগে il/la বসে না।', en: 'Drop il/la before singular unmodified family members.' } },
    { id: 'fratello-sorella', it: 'Ho un fratello e una sorella.', tr: { bn: 'আমার একজন ভাই ও একজন বোন আছে।', en: 'I have a brother and a sister.' } },
    { id: 'miei-genitori', it: 'I miei genitori sono gentili.', tr: { bn: 'আমার বাবা-মা খুব ভদ্র।', en: 'My parents are kind.' }, note: { bn: 'বহুবচনে আর্টিকেল (i miei) ফিরে আসে।', en: 'In the plural, keep the article: i miei.' } },
    { id: 'nonni', it: 'Mio nonno ha settanta anni.', tr: { bn: 'আমার দাদার বয়স সত্তর বছর।', en: 'My grandfather is seventy years old.' } },
    { id: 'sposato', it: 'Sei sposato? / Sei sposata?', tr: { bn: 'তুমি কি বিবাহিত?', en: 'Are you married?' } },
  ],
  grammar: [
    {
      id: 'possessivi-famiglia',
      title: { bn: 'পরিবারের ক্ষেত্রে mio / mia', en: 'Possessives with family members' },
      explanation: {
        bn: 'একবচন ও বিশেষণহীন পরিবারের সদস্যের আগে আর্টিকেল বসে না: mio padre, tua sorella, suo zio। কিন্তু বহুবচন হলে অবশ্যই আর্টিকেল বসে: i miei fratelli, le tue sorelle।',
        en: 'Singular unmodified family nouns drop the article (mio padre, tua sorella). Plural family nouns always keep the article (i miei fratelli).',
      },
      table: [
        { label: 'আমার বাবা', it: 'mio padre', tr: { bn: 'আর্টিকেল নেই', en: 'no article' } },
        { label: 'আমার মা', it: 'mia madre', tr: { bn: 'আর্টিকেল নেই', en: 'no article' } },
        { label: 'আমার ভাইয়েরা', it: 'i miei fratelli', tr: { bn: 'বহুবচনে আর্টিকেল আছে', en: 'article required' } },
        { label: 'তাদের বাবা', it: 'il loro padre', tr: { bn: 'loro-তে সবসময় আর্টিকেল', en: 'loro always keeps article' } },
      ],
      examples: [
        { id: 'u2-g1-e1', it: 'Mia sorella studia medicina.', tr: { bn: 'আমার বোন মেডিকেল পড়ে।', en: 'My sister studies medicine.' } },
        { id: 'u2-g1-e2', it: 'Le mie cugine abitano a Torino.', tr: { bn: 'আমার কাজিনরা তুরিনে থাকে।', en: 'My cousins live in Turin.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ছবি দেখে পরিবারের কথা', en: 'Talking about a family photo' },
    context: { bn: 'রাহিম সোফিয়াকে তার পরিবারের ছবি দেখাচ্ছে।', en: 'Rahim shows Sofia a photo of his family.' },
    lines: [
      { speaker: 'Sofia', it: 'Chi sono queste persone nella foto?', tr: { bn: 'ছবিতে এই মানুষগুলো কারা?', en: 'Who are these people in the photo?' } },
      { speaker: 'Rahim', it: 'È la mia famiglia! Ecco mio padre e mia madre.', tr: { bn: 'এটা আমার পরিবার! এই যে আমার বাবা ও মা।', en: 'It is my family! Here are my father and mother.' } },
      { speaker: 'Sofia', it: 'Hai fratelli o sorelle?', tr: { bn: 'তোমার কি ভাই বা বোন আছে?', en: 'Do you have brothers or sisters?' } },
      { speaker: 'Rahim', it: 'Sì, ho due fratelli e una sorella più piccola.', tr: { bn: 'হ্যাঁ, আমার দুই ভাই আর এক ছোট বোন আছে।', en: 'Yes, I have two brothers and a younger sister.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Choose the correct form:' },
      it: '___ madre cucina molto bene.',
      options: ['La mia', 'Mia', 'Il mio', 'Mio'],
      answer: 1,
      explanation: { bn: 'একবচন madre-র আগে আর্টিকেল বসে না: Mia madre।', en: 'Singular madre drops the article: Mia madre.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'বহুবচনে কোনটি সঠিক?', en: 'Which plural is correct?' },
      options: ['miei genitori', 'i miei genitori', 'il miei genitori', 'le miei genitori'],
      answer: 1,
      explanation: { bn: 'বহুবচন পরিবারে আর্টিকেল বসে: i miei genitori।', en: 'Plural family nouns require the article: i miei genitori.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"il marito" অর্থ কী?', en: 'What does "il marito" mean?' },
      options: ['Brother', 'Husband', 'Uncle', 'Son'],
      localizedOptions: {
        bn: ['ভাই', 'স্বামী', 'চাচা', 'ছেলে'],
        en: ['Brother', 'Husband', 'Uncle', 'Son'],
        it: ['Fratello', 'Marito', 'Zio', 'Figlio'],
      },
      answer: 1,
      explanation: { bn: 'il marito = স্বামী, la moglie = স্ত্রী।', en: 'il marito = husband.' },
    },
    {
      id: 'q4',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'Tuo fratello ___ venticinque anni.',
      options: ['è', 'sei', 'ha', 'abbiamo'],
      answer: 2,
      explanation: { bn: 'বয়স বলতে avere ব্যবহৃত হয়: ha।', en: 'Age uses avere: ha.' },
    },
  ],
  tip: {
    bn: '"figlio" ও "famiglia"-তে gl-এর পরের i মিলে নরম "ল্য" ধ্বনি তৈরি করে।',
    en: 'In "figlio" and "famiglia", gli sounds like the "lli" in "million".',
  },
};

const lesson2: Lesson = {
  id: 'a1-u2-l2',
  number: 2,
  title: 'Gli articoli',
  subtitle: { bn: 'il, lo, la, l’ ও un, uno, una ব্যবহার', en: 'Using definite and indefinite articles' },
  minutes: 12,
  objectives: [
    { bn: 'শব্দের প্রথম অক্ষর দেখে সঠিক আর্টিকেল নির্বাচন করবেন', en: 'Choose the right article from a noun’s opening letter' },
    { bn: 'একবচন থেকে বহুবচনে রূপান্তর করবেন', en: 'Transform singular nouns and articles to plural' },
  ],
  phrases: [
    { id: 'il-libro', it: 'il libro → i libri', tr: { bn: 'বই → বইগুলো', en: 'the book → the books' } },
    { id: 'lo-zaino', it: 'lo zaino → gli zaini', tr: { bn: 'ব্যাকপ্যাক → ব্যাকপ্যাকগুলো', en: 'the backpack → the backpacks' } },
    { id: 'l-amico', it: "l'amico → gli amici", tr: { bn: 'বন্ধু → বন্ধুরা', en: 'the friend → the friends' } },
    { id: 'la-casa', it: 'la casa → le case', tr: { bn: 'বাড়ি → বাড়িগুলো', en: 'the house → the houses' } },
    { id: 'un-caffe', it: 'Vorrei un caffè e una brioche.', tr: { bn: 'আমি একটি কফি ও একটি ব্রিয়শ চাই।', en: 'I would like a coffee and a croissant.' } },
    { id: 'un-amica', it: "Ho un'amica italiana.", tr: { bn: 'আমার একজন ইতালীয় বান্ধবী আছে।', en: 'I have an Italian female friend.' } },
  ],
  grammar: [
    {
      id: 'articoli-u2',
      title: { bn: 'নির্দিষ্ট ও অনির্দিষ্ট আর্টিকেল', en: 'Definite and indefinite articles' },
      explanation: {
        bn: 'পুংলিঙ্গে সাধারণ ব্যঞ্জনে il/un, s+ব্যঞ্জন বা z-তে lo/uno, স্বরবর্ণে l’/un। স্ত্রীলিঙ্গে ব্যঞ্জনে la/una, স্বরবর্ণে l’/un’ (অ্যাপস্ট্রফি সহ)।',
        en: 'Masculine: il/un (normal consonant), lo/uno (s+consonant, z), l’/un (vowel). Feminine: la/una (consonant), l’/un’ (vowel with apostrophe).',
      },
      table: [
        { label: 'il / un', it: 'il tavolo, un libro', tr: { bn: 'সাধারণ পুং', en: 'regular masc.' } },
        { label: 'lo / uno', it: 'lo studente, uno zaino', tr: { bn: 's+ব্যঞ্জন, z', en: 's+cons, z' } },
        { label: "l' / un", it: "l'uomo, un orologio", tr: { bn: 'স্বরবর্ণ (পুং)', en: 'vowel masc.' } },
        { label: "la / una / un'", it: "la penna, un'arancia", tr: { bn: 'স্ত্রীলিঙ্গ', en: 'feminine' } },
      ],
      examples: [
        { id: 'u2-g2-e1', it: 'Gli studenti leggono i libri.', tr: { bn: 'ছাত্ররা বইগুলো পড়ছে।', en: 'The students read the books.' } },
        { id: 'u2-g2-e2', it: "L'acqua è fresca.", tr: { bn: 'পানিটা ঠান্ডা।', en: 'The water is fresh.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ক্লাসের ব্যাগ গোছানো', en: 'Packing the bag for class' },
    context: { bn: 'মার্কো আর জুলিয়া ক্লাসে যাওয়ার আগে জিনিসপত্র খুঁজছে।', en: 'Marco and Giulia check what they have before heading to class.' },
    lines: [
      { speaker: 'Giulia', it: 'Hai lo zaino pronto?', tr: { bn: 'তোমার ব্যাকপ্যাক কি প্রস্তুত?', en: 'Is your backpack ready?' } },
      { speaker: 'Marco', it: 'Sì! Ho il libro, un quaderno e una penna blu.', tr: { bn: 'হ্যাঁ! আমার কাছে বই, একটা খাতা আর একটা নীল কলম আছে।', en: 'Yes! I have the book, a notebook and a blue pen.' } },
      { speaker: 'Giulia', it: "Prendi anche l'ombrello, oggi piove.", tr: { bn: 'ছাতাটাও নাও, আজ বৃষ্টি পড়ছে।', en: 'Take the umbrella too, it is raining today.' } },
      { speaker: 'Marco', it: 'Hai ragione, grazie mille!', tr: { bn: 'ঠিক বলেছো, অনেক ধন্যবাদ!', en: 'You are right, thanks a lot!' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"studente"-এর আগে কোন নির্দিষ্ট আর্টিকেল বসবে?', en: 'Which definite article goes before "studente"?' },
      options: ['il', 'lo', 'la', "l'"],
      answer: 1,
      explanation: { bn: 'st- (s+ব্যঞ্জন) দিয়ে শুরু হওয়ায় lo studente।', en: 'Words starting with s+consonant take lo.' },
    },
    {
      id: 'q2',
      prompt: { bn: '"amica"-এর আগে অনির্দিষ্ট আর্টিকেল কোনটি?', en: 'Which indefinite article goes before "amica"?' },
      options: ['un', 'uno', 'una', "un'"],
      answer: 3,
      explanation: { bn: 'স্বরবর্ণে শুরু স্ত্রীলিঙ্গ শব্দে un’ বসে।', en: 'Feminine vowel-initial nouns take un’.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"l\'orologio"-এর বহুবচন কোনটি?', en: 'What is the plural of "l\'orologio"?' },
      options: ['i orologi', 'gli orologi', 'le orologi', 'lo orologi'],
      answer: 1,
      explanation: { bn: 'পুংলিঙ্গ l’ বহুবচনে gli হয়: gli orologi।', en: 'Masculine l’ becomes gli in the plural.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"la chiave"-এর বহুবচন কোনটি?', en: 'What is the plural of "la chiave"?' },
      options: ['le chiavi', 'le chiave', 'i chiavi', 'gli chiavi'],
      answer: 0,
      explanation: { bn: 'la → le এবং -e → -i।', en: 'la → le and -e → -i.' },
    },
  ],
  tip: {
    bn: 'মনে রাখুন: স্ত্রীলিঙ্গে "un’" কিন্তু পুংলিঙ্গে "un" (অ্যাপস্ট্রফি ছাড়া): un amico vs un’amica।',
    en: 'Remember: un’ (with apostrophe) is feminine; un (no apostrophe) is masculine.',
  },
};

const lesson3: Lesson = {
  id: 'a1-u2-l3',
  number: 3,
  title: 'Persone e aggettivi',
  subtitle: { bn: 'মানুষ ও জিনিসের বর্ণনা — বিশেষণ', en: 'Describing people and things with adjectives' },
  minutes: 10,
  objectives: [
    { bn: 'বিশেষ্য ও বিশেষণের লিঙ্গ-বচন মেলাতে পারবেন', en: 'Match adjective endings to nouns' },
    { bn: 'মানুষের চেহারা ও স্বভাব বর্ণনা করতে পারবেন', en: 'Describe appearance and personality' },
  ],
  phrases: [
    { id: 'simpatico', it: 'Luca è alto e simpatico.', tr: { bn: 'লুকা লম্বা ও মজার।', en: 'Luca is tall and likeable.' } },
    { id: 'simpatica', it: 'Elena è giovane e gentile.', tr: { bn: 'এলেনা তরুণী ও ভদ্র।', en: 'Elena is young and kind.' } },
    { id: 'capelli', it: 'Ha i capelli neri e gli occhi castani.', tr: { bn: 'তার চুল কালো ও চোখ বাদামি।', en: 'He/She has black hair and brown eyes.' } },
    { id: 'citta-grande', it: 'Le città italiane sono belle.', tr: { bn: 'ইতালির শহরগুলো সুন্দর।', en: 'Italian cities are beautiful.' } },
    { id: 'vestiti-blu', it: 'Porto una camicia blu.', tr: { bn: 'আমি একটা নীল শার্ট পরেছি।', en: 'I am wearing a blue shirt.' }, note: { bn: 'blu সব লিঙ্গ ও বচনে অপরিবর্তিত থাকে।', en: 'blu stays the same for all genders and numbers.' } },
  ],
  grammar: [
    {
      id: 'aggettivi-u2',
      title: { bn: 'দুই ধরনের বিশেষণ', en: 'Two regular adjective patterns' },
      explanation: {
        bn: '-o শ্রেণির ৪টি রূপ (-o, -a, -i, -e), আর -e শ্রেণির ২টি রূপ (-e একবচন, -i বহুবচন)। কিছু রং যেমন blu, rosa বদলায় না।',
        en: '-o adjectives have 4 forms (-o, -a, -i, -e). -e adjectives have 2 forms (-e singular, -i plural). Colours like blu and rosa never change.',
      },
      table: [
        { label: '-o শ্রেণি', it: 'alto / alta / alti / alte', tr: { bn: '৪টি রূপ', en: '4 forms' } },
        { label: '-e শ্রেণি', it: 'gentile / gentili', tr: { bn: '২টি রূপ', en: '2 forms' } },
        { label: 'অপরিবর্তিত', it: 'blu, rosa', tr: { bn: 'বদলায় না', en: 'invariable' } },
      ],
      examples: [
        { id: 'u2-g3-e1', it: 'I ragazzi sono felici.', tr: { bn: 'ছেলেরা খুশি।', en: 'The boys are happy.' } },
        { id: 'u2-g3-e2', it: 'Questi esercizi sono facili.', tr: { bn: 'এই অনুশীলনগুলো সহজ।', en: 'These exercises are easy.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'নতুন সহপাঠী', en: 'A new classmate' },
    context: { bn: 'ক্লাসে নতুন আসা এক বন্ধুর সম্পর্কে দুই ছাত্রী কথা বলছে।', en: 'Two classmates describe a new student in their course.' },
    lines: [
      { speaker: 'Anna', it: 'Com’è la nuova studentessa?', tr: { bn: 'নতুন ছাত্রীটি কেমন?', en: 'What is the new student like?' } },
      { speaker: 'Sara', it: 'Si chiama Nadia. È molto gentile e intelligente.', tr: { bn: 'তার নাম নাদিয়া। সে খুব ভদ্র ও বুদ্ধিমতী।', en: 'Her name is Nadia. She is very kind and smart.' } },
      { speaker: 'Anna', it: 'È alta? Ha i capelli lunghi?', tr: { bn: 'সে কি লম্বা? তার চুল কি লম্বা?', en: 'Is she tall? Does she have long hair?' } },
      { speaker: 'Sara', it: 'Sì, ha i capelli lunghi e porta gli occhiali.', tr: { bn: 'হ্যাঁ, তার লম্বা চুল আছে আর সে চশমা পরে।', en: 'Yes, she has long hair and wears glasses.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'সঠিক বিশেষণ বেছে নিন:', en: 'Pick the correct adjective:' },
      it: 'Le ragazze sono ___.',
      options: ['simpatico', 'simpatica', 'simpatici', 'simpatiche'],
      answer: 3,
      explanation: { bn: 'le ragazze স্ত্রীলিঙ্গ বহুবচন, তাই simpatiche।', en: 'le ragazze is feminine plural → simpatiche.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'সঠিক রূপটি বেছে নিন:', en: 'Pick the right form:' },
      it: 'Le lezioni sono molto ___.',
      options: ['interessante', 'interessanti', 'interessanta', 'interessanto'],
      answer: 1,
      explanation: { bn: '-e শ্রেণির বহুবচন -i: interessanti।', en: '-e adjectives take -i in the plural.' },
    },
    {
      id: 'q3',
      prompt: { bn: 'কোন রংটি কখনো বদলায় না?', en: 'Which colour never changes form?' },
      options: ['rosso', 'nero', 'blu', 'giallo'],
      answer: 2,
      explanation: { bn: 'blu অপরিবর্তিত রং।', en: 'blu is invariable.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"চশমা পরা" বোঝাতে কোনটি?', en: 'How do you say "to wear glasses"?' },
      options: ['portare gli occhiali', 'mangiare gli occhi', 'bere il vetro', 'avere le scarpe'],
      answer: 0,
      explanation: { bn: 'portare gli occhiali = চশমা পরা।', en: 'portare gli occhiali means to wear glasses.' },
    },
  ],
  tip: {
    bn: 'সাধারণত বিশেষণ বিশেষ্যের পরে বসে: "una casa grande" (বড় বাড়ি), "un caffè caldo" (গরম কফি)।',
    en: 'Adjectives usually follow the noun: "una casa grande", "un caffè caldo".',
  },
};

export const a1Unit2: Unit = {
  id: 'a1-u2',
  number: 2,
  title: 'La famiglia',
  subtitle: { bn: 'পরিবার, আর্টিকেল ও বিশেষণ', en: 'Family, articles and adjectives' },
  lessons: [lesson1, lesson2, lesson3],
};
