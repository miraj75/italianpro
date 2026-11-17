import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a1-u6-l1',
  number: 1,
  title: 'Al mercato e al supermercato',
  subtitle: { bn: 'ফল, সবজি ও বাজার করা', en: 'Buying fruit, vegetables and groceries' },
  minutes: 10,
  objectives: [
    { bn: 'বাজারে পরিমাণ (কিলো, গ্রাম, বোতল) বলতে পারবেন', en: 'State quantities when buying groceries' },
    { bn: 'এই/ঐ (questo/quello) সঠিকভাবে ব্যবহার করবেন', en: 'Use questo and quello when pointing at items' },
  ],
  phrases: [
    { id: 'quanto-costano', it: 'Quanto costano queste mele?', tr: { bn: 'এই আপেলগুলোর দাম কত?', en: 'How much do these apples cost?' } },
    { id: 'un-chilo', it: 'Vorrei un chilo di pomodori maturi.', tr: { bn: 'আমি এক কেজি পাকা টমেটো চাই।', en: 'I would like a kilo of ripe tomatoes.' } },
    { id: 'mezzo-chilo', it: 'Mi dia mezzo chilo di formaggio, per favore.', tr: { bn: 'আমাকে আধা কেজি পনির দিন, প্লিজ।', en: 'Give me half a kilo of cheese, please.' } },
    { id: 'altro', it: 'Desidera qualcos’altro?', tr: { bn: 'আর কিছু কি লাগবে?', en: 'Would you like anything else?' } },
    { id: 'basta-cosi', it: 'No, grazie, basta così.', tr: { bn: 'না, ধন্যবাদ, এতেই চলবে।', en: 'No thanks, that is enough.' } },
    { id: 'sacchetto', it: 'Ha bisogno di un sacchetto?', tr: { bn: 'আপনার কি একটা ব্যাগ লাগবে?', en: 'Do you need a bag?' } },
  ],
  grammar: [
    {
      id: 'dimostrativi-u6',
      title: { bn: 'নির্দেশক: questo বনাম quello', en: 'Demonstratives: questo vs quello' },
      explanation: {
        bn: 'কাছের জিনিস দেখাতে questo / questa / questi / queste। দূরের জিনিসে quello, যা বিশেষ্যের আগে আর্টিকেলের মতো রূপ নেয়: quel pomodoro, quella mela, quei biscotti, quelle banane।',
        en: 'Use questo/a/i/e for things near you, and quel/quello/quella/quei/quegli/quelle for things farther away.',
      },
      examples: [
        { id: 'u6-g1-e1', it: 'Questi pomodori sono freschissimi.', tr: { bn: 'এই টমেটোগুলো একদম তাজা।', en: 'These tomatoes are very fresh.' } },
        { id: 'u6-g1-e2', it: 'Voglio quelle arance lì.', tr: { bn: 'ঐ কমলাগুলো চাই।', en: 'I want those oranges over there.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'শনিবারের বাজারে', en: 'At the Saturday market' },
    context: { bn: 'আয়েশা ফলের দোকানে তাজা ফল ও সবজি কিনছে।', en: 'Ayesha buys fresh fruit and vegetables at a market stall.' },
    lines: [
      { speaker: 'Fruttivendolo', it: 'Buongiorno signora! Che cosa desidera oggi?', tr: { bn: 'শুভ সকাল ম্যাডাম! আজ কী নেবেন?', en: 'Good morning madam! What would you like today?' } },
      { speaker: 'Ayesha', it: 'Buongiorno! Quanto costano questi pomodori?', tr: { bn: 'শুভ সকাল! এই টমেটোগুলোর দাম কত?', en: 'Good morning! How much are these tomatoes?' } },
      { speaker: 'Fruttivendolo', it: 'Due euro al chilo. Sono dolcissimi!', tr: { bn: 'কেজি দুই ইউরো। খুব মিষ্টি!', en: 'Two euros a kilo. They are very sweet!' } },
      { speaker: 'Ayesha', it: 'Perfetto, prendo un chilo di pomodori e sei mele rosse. Basta così.', tr: { bn: 'চমৎকার, আমি এক কেজি টমেটো আর ছয়টি লাল আপেল নিচ্ছি। আর কিছু না।', en: 'Great, I’ll take one kilo of tomatoes and six red apples. That’s all.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"আর কিছু না, এতেই হবে" ইতালিয়ানে কীভাবে বলবেন?', en: 'How do you say "That is enough / nothing else"?' },
      options: ['Basta così', 'Molto bene', 'Subito', 'Di niente'],
      answer: 0,
      explanation: { bn: 'Basta così = এতেই চলবে।', en: 'Basta così means "that is enough".' },
    },
    {
      id: 'q2',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Pick the right demonstrative:' },
      it: 'Quanto costano ___ fragole?',
      options: ['questo', 'questa', 'questi', 'queste'],
      answer: 3,
      explanation: { bn: 'fragole স্ত্রীলিঙ্গ বহুবচন, তাই queste।', en: 'fragole is feminine plural → queste.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"আধা কেজি" কোনটি?', en: 'Which means "half a kilo"?' },
      options: ['un chilo', 'mezzo chilo', 'due chili', 'cento grammi'],
      answer: 1,
      explanation: { bn: 'mezzo chilo = আধা কেজি।', en: 'mezzo chilo = half a kilo.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"il carrello" কী?', en: 'What is "il carrello"?' },
      options: ['Receipt', 'Shopping cart / trolley', 'Discount', 'Packet'],
      localizedOptions: {
        bn: ['রসিদ', 'শপিং কার্ট / ট্রলি', 'ছাড়', 'প্যাকেট'],
        en: ['Receipt', 'Shopping cart / trolley', 'Discount', 'Packet'],
        it: ['Scontrino', 'Carrello della spesa', 'Sconto', 'Sacchetto'],
      },
      answer: 1,
      explanation: { bn: 'il carrello = সুপারমার্কেটের ট্রলি।', en: 'il carrello = shopping trolley.' },
    },
  ],
  tip: {
    bn: 'ইতালীয় বাজারে দোকানদারের কাছ থেকে সরাসরি ফল ছোঁয়ার আগে অনুমতি বা গ্লাভস ব্যবহার করা ভদ্রতা।',
    en: 'At Italian markets and produce aisles, use the plastic gloves provided before picking fruit.',
  },
};

const lesson2: Lesson = {
  id: 'a1-u6-l2',
  number: 2,
  title: 'In negozio di vestiti',
  subtitle: { bn: 'পোশাক কেনা, সাইজ ও রং', en: 'Buying clothes, sizes and colours' },
  minutes: 10,
  objectives: [
    { bn: 'পোশাকের সাইজ, রং ও দাম জিজ্ঞেস করতে পারবেন', en: 'Ask about clothing sizes, colours and prices' },
    { bn: 'পোশাক পরে দেখার অনুরোধ করতে পারবেন', en: 'Ask to try clothes on' },
  ],
  phrases: [
    { id: 'cerco-giacca', it: 'Cerco una giacca leggera.', tr: { bn: 'আমি একটা হালকা জ্যাকেট খুঁজছি।', en: 'I am looking for a light jacket.' } },
    { id: 'posso-provare', it: 'Posso provarla?', tr: { bn: 'আমি কি এটা পরে দেখতে পারি?', en: 'Can I try it on?' } },
    { id: 'taglia-grande', it: 'Avete una taglia più grande?', tr: { bn: 'আপনাদের কাছে আরও বড় সাইজ আছে?', en: 'Do you have a bigger size?' } },
    { id: 'altro-colore', it: "C'è in un altro colore?", tr: { bn: 'এটা কি অন্য রঙে আছে?', en: 'Is it available in another colour?' } },
    { id: 'solo-guardando', it: 'Sto solo guardando, grazie.', tr: { bn: 'আমি শুধু দেখছি, ধন্যবাদ।', en: 'I am just looking, thank you.' } },
    { id: 'sconto', it: 'Questo cappotto ha uno sconto del venti per cento.', tr: { bn: 'এই কোটটিতে বিশ শতাংশ ছাড় আছে।', en: 'This coat has a twenty percent discount.' } },
  ],
  grammar: [
    {
      id: 'prezzi-u6',
      title: { bn: 'দাম, সংখ্যা (৩০–১০০০) ও বিশেষণ', en: 'Prices, larger numbers and clothes adjectives' },
      explanation: {
        bn: 'দাম জিজ্ঞেস করতে একবচনে "Quanto costa?" এবং বহুবচনে "Quanto costano?"। জুতা (le scarpe) ও প্যান্ট (i pantaloni) ইতালিয়ানে সবসময় বহুবচন হয়।',
        en: 'Use "Quanto costa?" for singular items and "Quanto costano?" for plurals like le scarpe (shoes) and i pantaloni (trousers).',
      },
      examples: [
        { id: 'u6-g2-e1', it: 'Quanto costano questi pantaloni grigi?', tr: { bn: 'এই ধূসর প্যান্টগুলোর দাম কত?', en: 'How much do these grey trousers cost?' } },
        { id: 'u6-g2-e2', it: 'La camicia bianca costa trentacinque euro.', tr: { bn: 'সাদা শার্টটির দাম পঁয়ত্রিশ ইউরো।', en: 'The white shirt costs thirty-five euros.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'পোশাকের দোকানে', en: 'At the clothes shop' },
    context: { bn: 'মার্কো একটি জ্যাকেট কিনতে দোকানে গেছে।', en: 'Marco visits a shop to buy a jacket.' },
    lines: [
      { speaker: 'Commessa', it: 'Buonasera, posso aiutarla?', tr: { bn: 'শুভ সন্ধ্যা, আমি কি আপনাকে সাহায্য করতে পারি?', en: 'Good evening, may I help you?' } },
      { speaker: 'Marco', it: 'Sì, grazie. Mi piace questa giacca verde, ma è troppo piccola.', tr: { bn: 'হ্যাঁ, ধন্যবাদ। আমার এই সবুজ জ্যাকেটটা পছন্দ হয়েছে, কিন্তু এটা খুব ছোট।', en: 'Yes, thanks. I like this green jacket, but it is too small.' } },
      { speaker: 'Commessa', it: 'Che taglia porta?', tr: { bn: 'আপনি কোন সাইজ পরেন?', en: 'What size do you wear?' } },
      { speaker: 'Marco', it: 'Porto la L. Posso provare quella blu?', tr: { bn: 'আমি L পরি। আমি কি ঐ নীলটা পরে দেখতে পারি?', en: 'I wear L. Can I try that blue one?' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"এই জুতাগুলোর দাম কত?" — সঠিক কোনটি?', en: '"How much do these shoes cost?"' },
      options: ['Quanto costa queste scarpe?', 'Quanto costano queste scarpe?', 'Quanto costa questi scarpe?', 'Che cosa costano scarpe?'],
      answer: 1,
      explanation: { bn: 'queste scarpe বহুবচন, তাই costano।', en: 'queste scarpe is plural → costano.' },
    },
    {
      id: 'q2',
      prompt: { bn: '"আমি শুধু দেখছি" ইতালিয়ানে কীভাবে বলবেন?', en: 'How do you say "I am just looking"?' },
      options: ['Sto solo guardando', 'Voglio comprare tutto', 'Ho bisogno di aiuto', 'Cerco lo sconto'],
      answer: 0,
      explanation: { bn: 'Sto solo guardando = আমি শুধু দেখছি।', en: 'Sto solo guardando = I am just looking.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"la taglia" অর্থ কী?', en: 'What does "la taglia" mean?' },
      options: ['Price', 'Size', 'Colour', 'Receipt'],
      localizedOptions: {
        bn: ['দাম', 'সাইজ', 'রং', 'রসিদ'],
        en: ['Price', 'Size', 'Colour', 'Receipt'],
        it: ['Prezzo', 'Taglia', 'Colore', 'Scontrino'],
      },
      answer: 1,
      explanation: { bn: 'la taglia = পোশাকের সাইজ।', en: 'la taglia = clothing size.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"এক জোড়া কালো প্যান্ট" কোনটি?', en: 'Which is "black trousers"?' },
      options: ['i pantaloni nero', 'i pantaloni neri', 'la pantaloni nera', 'le pantaloni nere'],
      answer: 1,
      explanation: { bn: 'pantaloni পুংলিঙ্গ বহুবচন: i pantaloni neri।', en: 'i pantaloni is masculine plural → neri.' },
    },
  ],
  tip: {
    bn: 'দোকানে কর্মী সাধারণত আপনাকে "Lei" (Posso aiutarLa?) বলে সম্বোধন করবেন।',
    en: 'Shop assistants normally address customers with polite "Lei" (Posso aiutarLa?).',
  },
};

const lesson3: Lesson = {
  id: 'a1-u6-l3',
  number: 3,
  title: 'Pagare e chiedere aiuto',
  subtitle: { bn: 'দাম পরিশোধ, তারিখ ও জরুরি সহায়তা', en: 'Paying, dates and asking for help' },
  minutes: 12,
  objectives: [
    { bn: 'নগদ বা কার্ডে টাকা দিতে এবং রসিদ চাইতে পারবেন', en: 'Pay by cash or card and ask for a receipt' },
    { bn: 'বড় সংখ্যা, মাস ও তারিখ বলতে পারবেন', en: 'Use months, dates and larger numbers' },
  ],
  phrases: [
    { id: 'contanti-carta', it: 'Pago in contanti o con il bancomat.', tr: { bn: 'আমি নগদে বা ডেবিট কার্ডে দিচ্ছি।', en: 'I am paying in cash or by debit card.' } },
    { id: 'cassa', it: "Dov'è la cassa, per favore?", tr: { bn: 'ক্যাশ কাউন্টার কোথায়, প্লিজ?', en: 'Where is the checkout, please?' } },
    { id: 'ripetere-lento', it: 'Può parlare più lentamente, per favore?', tr: { bn: 'আরও ধীরে কথা বলতে পারবেন, প্লিজ?', en: 'Could you speak more slowly, please?' } },
    { id: 'compleanno-data', it: 'Il mio compleanno è il venticinque novembre.', tr: { bn: 'আমার জন্মদিন পঁচিশে নভেম্বর।', en: 'My birthday is November twenty-fifth.' } },
    { id: 'grazie-aiuto', it: 'Grazie mille per il Suo aiuto!', tr: { bn: 'আপনার সাহায্যের জন্য অসংখ্য ধন্যবাদ!', en: 'Thank you very much for your help!' } },
  ],
  grammar: [
    {
      id: 'ripasso-a1',
      title: { bn: 'A1 সমাপ্তি: বাক্য গঠন ও ভদ্র ভাষা', en: 'A1 synthesis: word order and polite forms' },
      explanation: {
        bn: 'আপনি এখন বর্তমান কাল (-are, -ere, -ire ও অনিয়মিত), essere/avere, আর্টিকেল, বিশেষণ, অব্যয়, সময়-তারিখ এবং ভদ্র প্রশ্ন করতে পারেন। স্পষ্টভাবে বলার জন্য সর্বনাম প্রায়ই বাদ দিন এবং ক্রিয়ার পরে sempre/mai বসান।',
        en: 'You now combine present verbs, essere/avere, articles, adjectives, prepositions, dates and polite requests. Keep word order clear: (Subject) + Verb + Object + Place/Time.',
      },
      examples: [
        { id: 'u6-g3-e1', it: 'Domani compro un regalo per il compleanno di mia madre.', tr: { bn: 'আগামীকাল আমি মায়ের জন্মদিনের জন্য একটা উপহার কিনবো।', en: 'Tomorrow I am buying a gift for my mother’s birthday.' } },
        { id: 'u6-g3-e2', it: 'Parlo ancora poco italiano, ma capisco quasi tutto.', tr: { bn: 'আমি এখনো কম ইতালিয়ান বলি, কিন্তু প্রায় সবই বুঝি।', en: 'I still speak little Italian, but I understand almost everything.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'জন্মদিনের উপহার কেনা', en: 'Buying a birthday gift' },
    context: { bn: 'রাহিম ক্যাশ কাউন্টারে টাকা দিচ্ছে ও উপহারের রসিদ নিচ্ছে।', en: 'Rahim pays at the checkout for a birthday present.' },
    lines: [
      { speaker: 'Rahim', it: 'Buongiorno! Quanto viene questo libro con lo sconto?', tr: { bn: 'শুভ সকাল! ছাড়ের পর এই বইটার দাম কত হলো?', en: 'Good morning! How much is this book with the discount?' } },
      { speaker: 'Cassiere', it: 'Viene diciotto euro. Paga in contanti o con la carta?', tr: { bn: 'আঠারো ইউরো। নগদে দেবেন না কার্ডে?', en: 'It is eighteen euros. Are you paying in cash or by card?' } },
      { speaker: 'Rahim', it: 'Con la carta, grazie. Mi può fare un pacchetto regalo?', tr: { bn: 'কার্ডে, ধন্যবাদ। একটু গিফট র‍্যাপ করে দিতে পারবেন?', en: 'By card, thanks. Could you gift-wrap it for me?' } },
      { speaker: 'Cassiere', it: 'Volentieri! Ecco lo scontrino e buon compleanno al Suo amico!', tr: { bn: 'অবশ্যই! এই যে রসিদ আর আপনার বন্ধুকে জন্মদিনের শুভেচ্ছা!', en: 'Gladly! Here is the receipt and happy birthday to your friend!' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"নগদে পরিশোধ করা" কোনটি?', en: 'How do you say "pay in cash"?' },
      options: ['pagare con la carta', 'pagare in contanti', 'pagare lo sconto', 'pagare la cassa'],
      answer: 1,
      explanation: { bn: 'in contanti = নগদে।', en: 'in contanti = in cash.' },
    },
    {
      id: 'q2',
      prompt: { bn: '"১লা মে" ইতালিয়ানে কীভাবে লেখা হয়?', en: 'How do you write "May 1st" in Italian?' },
      options: ['il uno maggio', 'il primo maggio', 'uno maggio', 'il prima maggio'],
      answer: 1,
      explanation: { bn: 'প্রতি মাসের ১ তারিখে il primo ব্যবহার হয়।', en: 'The 1st of any month uses il primo.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"আরও ধীরে" কোনটি?', en: 'Which means "more slowly"?' },
      options: ['più velocemente', 'più lentamente', 'più caro', 'più grande'],
      answer: 1,
      explanation: { bn: 'lentamente = ধীরে।', en: 'lentamente = slowly.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"lo scontrino" অর্থ কী?', en: 'What does "lo scontrino" mean?' },
      options: ['Price', 'Receipt', 'Bag', 'Discount'],
      localizedOptions: {
        bn: ['দাম', 'রসিদ', 'ব্যাগ', 'ছাড়'],
        en: ['Price', 'Receipt', 'Bag', 'Discount'],
        it: ['Prezzo', 'Scontrino', 'Borsa', 'Sconto'],
      },
      answer: 1,
      explanation: { bn: 'lo scontrino = দোকানের রসিদ।', en: 'lo scontrino = shop receipt.' },
    },
  ],
  tip: {
    bn: 'ইতালিতে দোকান থেকে বের হওয়ার সময় "Grazie, arrivederci!" বলা সুন্দর সৌজন্য।',
    en: 'Always say "Grazie, arrivederci!" when leaving an Italian shop.',
  },
};

export const a1Unit6: Unit = {
  id: 'a1-u6',
  number: 6,
  title: 'Fare la spesa',
  subtitle: { bn: 'কেনাকাটা, দাম ও A1 সমাপ্তি', en: 'Shopping, prices and A1 wrap-up' },
  lessons: [lesson1, lesson2, lesson3],
};
