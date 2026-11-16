import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a1-u4-l1',
  number: 1,
  title: 'Che ore sono?',
  subtitle: { bn: 'সময় বলা ও দিনের অংশ', en: 'Telling the time and parts of the day' },
  minutes: 10,
  objectives: [
    { bn: 'ঘড়ি দেখে ইতালিয়ানে সময় বলতে পারবেন', en: 'Tell the time in Italian' },
    { bn: 'সপ্তাহের দিন ও সময়সূচি বলতে পারবেন', en: 'Talk about days of the week and schedules' },
  ],
  phrases: [
    { id: 'che-ore', it: 'Che ore sono?', tr: { bn: 'কয়টা বাজে?', en: 'What time is it?' } },
    { id: 'una', it: "È l'una.", tr: { bn: 'একটা বাজে।', en: 'It is one o’clock.' }, note: { bn: 'শুধু ১টার ক্ষেত্রে È (একবচন) ব্যবহার হয়।', en: 'Only 1:00 uses singular È.' } },
    { id: 'otto-mezza', it: 'Sono le otto e mezza.', tr: { bn: 'সাড়ে আটটা বাজে।', en: 'It is half past eight.' } },
    { id: 'alle-nove', it: 'La lezione inizia alle nove.', tr: { bn: 'ক্লাস নয়টায় শুরু হয়।', en: 'The lesson starts at nine.' } },
    { id: 'ogni-mattina', it: 'Ogni mattina lavoro dalle nove alle cinque.', tr: { bn: 'প্রতিদিন সকালে আমি নয়টা থেকে পাঁচটা পর্যন্ত কাজ করি।', en: 'Every morning I work from nine to five.' } },
  ],
  grammar: [
    {
      id: 'ora-u4',
      title: { bn: 'সময় বলা: È বনাম Sono le', en: 'Time: È vs Sono le' },
      explanation: {
        bn: '১টা, দুপুর ১২টা (mezzogiorno) এবং রাত ১২টা (mezzanotte) একবচন, তাই È বসে। বাকি সব ঘণ্টায় Sono le। কোনো কাজের সময় বোঝাতে alle + ঘণ্টা (তবে ১টায় all’una)।',
        en: '1:00, noon (mezzogiorno), and midnight (mezzanotte) take È. All other hours take Sono le. "At" a time is alle (all’una for 1:00).',
      },
      table: [
        { label: '১:০০', it: "È l'una.", tr: { bn: '১টা বাজে', en: 'It is 1:00' } },
        { label: '৩:১৫', it: 'Sono le tre e un quarto.', tr: { bn: 'সোয়া ৩টা', en: '3:15' } },
        { label: '৫:৩০', it: 'Sono le cinque e mezza.', tr: { bn: 'সাড়ে ৫টা', en: '5:30' } },
        { label: '৭:৪৫', it: 'Sono le otto meno un quarto.', tr: { bn: 'পৌনে ৮টা', en: '7:45' } },
      ],
      examples: [
        { id: 'u4-g1-e1', it: 'Pranziamo a mezzogiorno.', tr: { bn: 'আমরা দুপুর বারোটায় দুপুরের খাবার খাই।', en: 'We have lunch at noon.' } },
        { id: 'u4-g1-e2', it: 'Il treno arriva alle sei e dieci.', tr: { bn: 'ট্রেন ছয়টা দশ মিনিটে পৌঁছায়।', en: 'The train arrives at 6:10.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সকালের ক্লাসের সময়', en: 'Time for morning class' },
    context: { bn: 'লুকা ও রাহিম ক্লাসের সময় নিয়ে কথা বলছে।', en: 'Luca and Rahim check the time before class.' },
    lines: [
      { speaker: 'Rahim', it: 'Scusa Luca, che ore sono?', tr: { bn: 'শোনো লুকা, কয়টা বাজে?', en: 'Excuse me Luca, what time is it?' } },
      { speaker: 'Luca', it: 'Sono le nove meno dieci!', tr: { bn: 'নয়টা বাজতে দশ মিনিট বাকি!', en: 'It is ten to nine!' } },
      { speaker: 'Rahim', it: 'Oh, a che ora inizia la lezione?', tr: { bn: 'ওহ, ক্লাস কয়টায় শুরু হয়?', en: 'Oh, what time does the class start?' } },
      { speaker: 'Luca', it: 'Alle nove in punto! Dobbiamo camminare velocemente.', tr: { bn: 'ঠিক নয়টায়! আমাদের তাড়াতাড়ি হাঁটতে হবে।', en: 'At nine sharp! We have to walk fast.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"১০টা বাজে" — সঠিক কোনটি?', en: 'How do you say "It is ten o’clock"?' },
      options: ['È le dieci.', 'Sono le dieci.', 'Sono dieci.', 'Alle dieci.'],
      answer: 1,
      explanation: { bn: '২ থেকে ১২ পর্যন্ত Sono le বসে।', en: 'Hours 2–12 use Sono le.' },
    },
    {
      id: 'q2',
      prompt: { bn: '"১টা বাজে" কীভাবে বলবেন?', en: 'How do you say "It is 1 o’clock"?' },
      options: ['Sono le una.', "È l'una.", "È l'uno.", 'Sono uno.'],
      answer: 1,
      explanation: { bn: "১টা একবচন, তাই È l'una।", en: "1:00 uses È l'una." },
    },
    {
      id: 'q3',
      prompt: { bn: '"সাড়ে চারটা" কোনটি?', en: 'Which is "4:30"?' },
      options: ['Sono le quattro e mezza', 'Sono le quattro meno un quarto', 'Sono le cinque e mezza', 'Alle quattro'],
      answer: 0,
      explanation: { bn: 'e mezza = এবং অর্ধেক (সাড়ে)।', en: 'e mezza means half past.' },
    },
    {
      id: 'q4',
      prompt: { bn: 'ইতালিয়ানে "রবিবার" কোনটি?', en: 'Which day is Sunday in Italian?' },
      options: ['sabato', 'venerdì', 'domenica', 'giovedì'],
      answer: 2,
      explanation: { bn: 'domenica = রবিবার।', en: 'domenica = Sunday.' },
    },
  ],
  tip: {
    bn: 'ইতালিয়ান সময়সূচিতে (ট্রেন, অফিস) ২৪ ঘণ্টার ঘড়ি বেশি চলে: "alle 17:30" = বিকেল সাড়ে ৫টা।',
    en: 'Timetables and train stations use the 24-hour clock: "alle 17:30".',
  },
};

const lesson2: Lesson = {
  id: 'a1-u4-l2',
  number: 2,
  title: 'La mia giornata',
  subtitle: { bn: 'দৈনন্দিন রুটিন ও -are ক্রিয়া', en: 'Daily routine and -are verbs' },
  minutes: 12,
  objectives: [
    { bn: 'নিয়মিত -are ক্রিয়া বর্তমান কালে ব্যবহার করবেন', en: 'Conjugate regular -are verbs in the present' },
    { bn: 'সকাল থেকে দুপুর পর্যন্ত রুটিন বর্ণনা করবেন', en: 'Describe your morning and daytime routine' },
  ],
  phrases: [
    { id: 'sveglio', it: 'Mi sveglio alle sette.', tr: { bn: 'আমি সাতটায় ঘুম থেকে উঠি।', en: 'I wake up at seven.' } },
    { id: 'colazione', it: 'Faccio colazione alle sette e mezza.', tr: { bn: 'আমি সাড়ে সাতটায় নাস্তা করি।', en: 'I have breakfast at seven thirty.' } },
    { id: 'lavoro-ufficio', it: 'Lavoro in ufficio fino alle cinque.', tr: { bn: 'আমি পাঁচটা পর্যন্ত অফিসে কাজ করি।', en: 'I work in the office until five.' } },
    { id: 'studio-it', it: 'Studio italiano ogni giorno.', tr: { bn: 'আমি প্রতিদিন ইতালিয়ান পড়ি।', en: 'I study Italian every day.' } },
    { id: 'cucino-cena', it: 'La sera cucino la cena a casa.', tr: { bn: 'সন্ধ্যায় আমি বাড়িতে রাতের খাবার রান্না করি।', en: 'In the evening I cook dinner at home.' } },
  ],
  grammar: [
    {
      id: 'presente-are-u4',
      title: { bn: '-are ক্রিয়ার বর্তমান রূপ', en: 'Present tense of -are verbs' },
      explanation: {
        bn: 'parlare, lavorare, studiare, cucinare, ascoltare — মূল থেকে -are বাদ দিয়ে -o, -i, -a, -iamo, -ate, -ano বসান।',
        en: 'Drop -are from verbs like parlare, lavorare, studiare, cucinare and add -o, -i, -a, -iamo, -ate, -ano.',
      },
      table: [
        { label: 'io', it: 'lavoro', tr: { bn: 'আমি কাজ করি', en: 'I work' } },
        { label: 'tu', it: 'lavori', tr: { bn: 'তুমি কাজ করো', en: 'you work' } },
        { label: 'lui / lei', it: 'lavora', tr: { bn: 'সে কাজ করে', en: 'he / she works' } },
        { label: 'noi', it: 'lavoriamo', tr: { bn: 'আমরা কাজ করি', en: 'we work' } },
        { label: 'voi', it: 'lavorate', tr: { bn: 'তোমরা কাজ করো', en: 'you (pl.) work' } },
        { label: 'loro', it: 'lavorano', tr: { bn: 'তারা কাজ করে', en: 'they work' } },
      ],
      examples: [
        { id: 'u4-g2-e1', it: 'Ascoltiamo un podcast in italiano.', tr: { bn: 'আমরা ইতালিয়ানে একটা পডকাস্ট শুনি।', en: 'We listen to an Italian podcast.' } },
        { id: 'u4-g2-e2', it: 'Maria torna a casa alle sei.', tr: { bn: 'মারিয়া ছয়টায় বাড়ি ফেরে।', en: 'Maria returns home at six.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সাধারণ একটি কর্মদিবস', en: 'A typical weekday' },
    context: { bn: 'দুই বন্ধু তাদের প্রতিদিনের রুটিন নিয়ে কথা বলছে।', en: 'Two friends compare their daily schedules.' },
    lines: [
      { speaker: 'Sara', it: 'A che ora inizi a lavorare?', tr: { bn: 'তুমি কয়টায় কাজ শুরু করো?', en: 'What time do you start work?' } },
      { speaker: 'Rahim', it: 'Inizio alle nove, ma mi sveglio alle sette.', tr: { bn: 'আমি নয়টায় শুরু করি, তবে সাতটায় উঠি।', en: 'I start at nine, but I wake up at seven.' } },
      { speaker: 'Sara', it: 'E cosa fai dopo il lavoro?', tr: { bn: 'আর কাজের পরে কী করো?', en: 'And what do you do after work?' } },
      { speaker: 'Rahim', it: 'Torno a casa, cucino la cena e studio italiano per un’ora.', tr: { bn: 'বাড়ি ফিরি, রাতের খাবার রান্না করি আর এক ঘণ্টা ইতালিয়ান পড়ি।', en: 'I go home, cook dinner and study Italian for an hour.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Pick the correct form:' },
      it: 'Noi ___ musica italiana.',
      options: ['ascolto', 'ascoltate', 'ascoltiamo', 'ascoltano'],
      answer: 2,
      explanation: { bn: 'noi-এর প্রত্যয় -iamo: ascoltiamo।', en: 'noi takes -iamo: ascoltiamo.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'Tu ___ a che ora la sera?',
      options: ['cucino', 'cucini', 'cucina', 'cucinano'],
      answer: 1,
      explanation: { bn: 'tu-এর প্রত্যয় -i: cucini।', en: 'tu takes -i: cucini.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"lavorano" কোন কর্তার সাথে বসে?', en: 'Which subject takes "lavorano"?' },
      options: ['io', 'noi', 'voi', 'loro'],
      answer: 3,
      explanation: { bn: '-ano হলো loro-র প্রত্যয়।', en: '-ano is the loro ending.' },
    },
    {
      id: 'q4',
      prompt: { bn: 'সঠিক রূপ বেছে নিন:', en: 'Pick the right verb form:' },
      it: 'Giulia ___ a casa alle sette.',
      options: ['torno', 'torni', 'torna', 'tornate'],
      answer: 2,
      explanation: { bn: 'lei (Giulia)-এর সাথে -a বসে: torna।', en: 'lei takes -a: torna.' },
    },
  ],
  tip: {
    bn: '"Fare colazione" (নাস্তা করা), "pranzare" (দুপুরের খাবার খাওয়া), "cenare" (রাতের খাবার খাওয়া) — দৈনন্দিন কথায় খুব কাজে আসে।',
    en: 'Useful meal verbs: fare colazione, pranzare, and cenare.',
  },
};

const lesson3: Lesson = {
  id: 'a1-u4-l3',
  number: 3,
  title: 'Il tempo libero',
  subtitle: { bn: 'সন্ধ্যা ও সাপ্তাহিক ছুটির কাজ (-ere / -ire)', en: 'Evenings, weekends, and -ere / -ire verbs' },
  minutes: 12,
  objectives: [
    { bn: 'নিয়মিত -ere ও -ire ক্রিয়া ব্যবহার করবেন', en: 'Use regular -ere and -ire verbs' },
    { bn: 'অবসর সময়ের কাজ ও অভ্যাস বলতে পারবেন', en: 'Describe free-time activities and frequency' },
  ],
  phrases: [
    { id: 'leggo-sera', it: 'La sera leggo sempre un libro.', tr: { bn: 'সন্ধ্যায় আমি সবসময় একটা বই পড়ি।', en: 'In the evening I always read a book.' } },
    { id: 'dormo-tardi', it: 'La domenica dormo fino alle nove.', tr: { bn: 'রবিবার আমি নয়টা পর্যন্ত ঘুমাই।', en: 'On Sundays I sleep until nine.' } },
    { id: 'scrivo-msg', it: 'Scrivo spesso ai miei amici.', tr: { bn: 'আমি প্রায়ই বন্ধুদের মেসেজ লিখি।', en: 'I often write to my friends.' } },
    { id: 'non-guardo', it: 'Non guardo mai la televisione.', tr: { bn: 'আমি কখনো টিভি দেখি না।', en: 'I never watch television.' } },
    { id: 'esco-amici', it: 'Il sabato esco con gli amici.', tr: { bn: 'শনিবার আমি বন্ধুদের সাথে বের হই।', en: 'On Saturdays I go out with friends.' } },
  ],
  grammar: [
    {
      id: 'ere-ire-u4',
      title: { bn: '-ere ও -ire ক্রিয়া + sempre/mai', en: '-ere / -ire verbs and frequency adverbs' },
      explanation: {
        bn: 'leggere (leggo, leggi, legge, leggiamo, leggete, leggono) এবং dormire (dormo, dormi, dorme, dormiamo, dormite, dormono)। sempre, spesso, mai ক্রিয়ার পরে বসে।',
        en: '-ere and -ire verbs share -o, -i, -e, -iamo, -ono; voi takes -ete (-ere) or -ite (-ire). Frequency words sempre, spesso, and mai follow the verb.',
      },
      table: [
        { label: 'leggere', it: 'leggo, leggi, legge, leggiamo, leggete, leggono', tr: { bn: 'পড়া', en: 'to read' } },
        { label: 'dormire', it: 'dormo, dormi, dorme, dormiamo, dormite, dormono', tr: { bn: 'ঘুমানো', en: 'to sleep' } },
        { label: 'capire (-isc-)', it: 'capisco, capisci, capisce, capiamo, capite, capiscono', tr: { bn: 'বোঝা', en: 'to understand' } },
      ],
      examples: [
        { id: 'u4-g3-e1', it: 'Voi leggete il giornale ogni giorno?', tr: { bn: 'তোমরা কি প্রতিদিন পত্রিকা পড়ো?', en: 'Do you read the newspaper every day?' } },
        { id: 'u4-g3-e2', it: 'Non capisco bene questa frase.', tr: { bn: 'আমি এই বাক্যটা ভালো বুঝতে পারছি না।', en: 'I do not understand this sentence well.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সাপ্তাহিক ছুটি কেমন কাটে?', en: 'What do you do on weekends?' },
    context: { bn: 'জুলিয়া রাহিমকে জিজ্ঞেস করছে সে ছুটির দিনে কী করে।', en: 'Giulia asks Rahim how he spends his weekends.' },
    lines: [
      { speaker: 'Giulia', it: 'Cosa fai di solito nel weekend?', tr: { bn: 'সপ্তাহান্তে তুমি সাধারণত কী করো?', en: 'What do you usually do at the weekend?' } },
      { speaker: 'Rahim', it: 'Il sabato vado al parco e gioco a calcio con gli amici.', tr: { bn: 'শনিবার আমি পার্কে যাই আর বন্ধুদের সাথে ফুটবল খেলি।', en: 'On Saturday I go to the park and play football with friends.' } },
      { speaker: 'Giulia', it: 'E la domenica?', tr: { bn: 'আর রবিবার?', en: 'And on Sunday?' } },
      { speaker: 'Rahim', it: 'Dormo un po’ di più, poi leggo e chiamo la mia famiglia.', tr: { bn: 'একটু বেশি ঘুমাই, তারপর বই পড়ি ও পরিবারকে ফোন করি।', en: 'I sleep a bit longer, then read and call my family.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"voi" এর সাথে leggere-এর রূপ কোনটি?', en: 'What is the voi form of leggere?' },
      options: ['leggiate', 'leggete', 'leggite', 'leggono'],
      answer: 1,
      explanation: { bn: '-ere ক্রিয়ায় voi প্রত্যয় -ete: leggete।', en: '-ere verbs use -ete for voi.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'সঠিক শব্দক্রম কোনটি?', en: 'Which word order is correct?' },
      options: ['Non mai dormo tardi.', 'Non dormo mai tardi.', 'Dormo non mai tardi.', 'Mai non dormo tardi.'],
      answer: 1,
      explanation: { bn: 'non ক্রিয়ার আগে এবং mai ক্রিয়ার পরে বসে।', en: 'non precedes the verb and mai follows it.' },
    },
    {
      id: 'q3',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'I bambini ___ otto ore ogni notte.',
      options: ['dorme', 'dormono', 'dormiamo', 'dormite'],
      answer: 1,
      explanation: { bn: 'I bambini = loro, তাই dormono।', en: 'I bambini = loro → dormono.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"আমি প্রায়ই লিখি" ইতালিয়ানে কী?', en: 'How do you say "I often write"?' },
      options: ['Scrivo sempre', 'Scrivo mai', 'Scrivo spesso', 'Scrivo tardi'],
      answer: 2,
      explanation: { bn: 'spesso = প্রায়ই।', en: 'spesso means often.' },
    },
  ],
  tip: {
    bn: 'উচ্চারণ: "leggere"-তে gg হলো নরম "জ" (লেজ্জে-রে), কিন্তু "leggo"-তে g শক্ত "গ" (লেগ্গো)!',
    en: 'Pronunciation: "leggere" has soft gg ("j"), while "leggo" has hard gg ("g") before o.',
  },
};

export const a1Unit4: Unit = {
  id: 'a1-u4',
  number: 4,
  title: 'La mia giornata',
  subtitle: { bn: 'সময়, রুটিন ও বর্তমান কাল', en: 'Time, daily routine and present tense' },
  lessons: [lesson1, lesson2, lesson3],
};
