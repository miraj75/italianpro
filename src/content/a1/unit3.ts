import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a1-u3-l1',
  number: 1,
  title: 'Colazione al bar',
  subtitle: { bn: 'ইতালিয়ান ক্যাফেতে নাস্তা অর্ডার করা', en: 'Ordering breakfast at an Italian café' },
  minutes: 10,
  objectives: [
    { bn: 'ভদ্রভাবে কফি ও নাস্তা অর্ডার করতে পারবেন', en: 'Politely order coffee and pastries' },
    { bn: 'vorrei এবং prendere ব্যবহার করতে পারবেন', en: 'Use vorrei and prendere' },
  ],
  phrases: [
    { id: 'vorrei-caffe', it: 'Vorrei un caffè, per favore.', tr: { bn: 'আমি একটি কফি নেব, প্লিজ।', en: 'I would like a coffee, please.' } },
    { id: 'prendo-cappuccino', it: 'Prendo un cappuccino e un cornetto.', tr: { bn: 'আমি একটি ক্যাপুচিনো ও একটি করনেত্তো নিচ্ছি।', en: 'I will have a cappuccino and a croissant.' } },
    { id: 'senza-zucchero', it: 'Senza zucchero, grazie.', tr: { bn: 'চিনি ছাড়া, ধন্যবাদ।', en: 'Without sugar, thanks.' } },
    { id: 'succo-arancia', it: "Mi scusi, avete succo d'arancia?", tr: { bn: 'মাফ করবেন, আপনাদের কাছে কমলার জুস আছে?', en: 'Excuse me, do you have orange juice?' } },
    { id: 'quanto-viene', it: 'Quant’è in tutto?', tr: { bn: 'সব মিলিয়ে কত হলো?', en: 'How much is it altogether?' } },
    { id: 'scontrino', it: 'Ecco lo scontrino, grazie!', tr: { bn: 'এই যে রসিদ, ধন্যবাদ!', en: 'Here is the receipt, thank you!' } },
  ],
  grammar: [
    {
      id: 'vorrei-bar',
      title: { bn: 'ভদ্র অনুরোধে vorrei', en: 'Polite requests with vorrei' },
      explanation: {
        bn: 'দোকান বা ক্যাফেতে "আমি চাই" বলার সবচেয়ে ভদ্র ও স্বাভাবিক উপায় হলো "vorrei" (আমি চাইব / আমার দরকার)। সরাসরি "voglio" বললে কিছুটা রূঢ় শোনায়।',
        en: 'At a café or shop, "vorrei" (I would like) is polite and natural, whereas "voglio" (I want) can sound abrupt.',
      },
      examples: [
        { id: 'u3-g1-e1', it: "Vorrei un bicchiere d'acqua.", tr: { bn: 'আমি এক গ্লাস পানি নেব।', en: 'I would like a glass of water.' } },
        { id: 'u3-g1-e2', it: 'Prendo un tè caldo.', tr: { bn: 'আমি এক কাপ গরম চা নিচ্ছি।', en: 'I will take a hot tea.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সকালের ক্যাফে', en: 'Morning at the café' },
    context: { bn: 'আয়েশা ও লুকা সকালের নাস্তা অর্ডার করছে।', en: 'Ayesha and Luca order breakfast at the counter.' },
    lines: [
      { speaker: 'Barista', it: 'Buongiorno! Cosa prendete?', tr: { bn: 'শুভ সকাল! আপনারা কী নেবেন?', en: 'Good morning! What are you having?' } },
      { speaker: 'Ayesha', it: "Buongiorno, vorrei un tè verde e un cornetto alla marmellata.", tr: { bn: 'শুভ সকাল, আমি একটি গ্রিন টি আর একটি জ্যাম করনেত্তো চাই।', en: 'Good morning, I would like a green tea and a jam croissant.' } },
      { speaker: 'Luca', it: 'Per me un caffè macchiato, per favore.', tr: { bn: 'আমার জন্য একটি ম্যাকিয়াতো কফি, প্লিজ।', en: 'For me a macchiato coffee, please.' } },
      { speaker: 'Barista', it: 'Subito! Sono quattro euro e cinquanta.', tr: { bn: 'এখনই দিচ্ছি! চার ইউরো পঞ্চাশ সেন্ট।', en: 'Right away! That is four euros fifty.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'ক্যাফেতে ভদ্রভাবে অর্ডার করতে কোন শব্দ ব্যবহার করবেন?', en: 'Which word is most polite for ordering?' },
      options: ['Voglio', 'Vorrei', 'Devo', 'Faccio'],
      answer: 1,
      explanation: { bn: 'Vorrei সবচেয়ে ভদ্র ও স্বাভাবিক।', en: 'Vorrei means "I would like".' },
    },
    {
      id: 'q2',
      prompt: { bn: '"চিনি ছাড়া" ইতালিয়ানে কী?', en: 'How do you say "without sugar"?' },
      options: ['con zucchero', 'senza zucchero', 'poco zucchero', 'molto zucchero'],
      answer: 1,
      explanation: { bn: 'senza = ছাড়া।', en: 'senza means without.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"Quant’è in tutto?" অর্থ কী?', en: 'What does "Quant’è in tutto?" mean?' },
      options: ['What time is it?', 'How much is it in total?', 'Which one is better?', 'Where should we sit?'],
      localizedOptions: {
        bn: ['কয়টা বাজে?', 'সব মিলিয়ে কত হলো?', 'কোনটা ভালো?', 'কোথায় বসবো?'],
        en: ['What time is it?', 'How much is it in total?', 'Which one is better?', 'Where should we sit?'],
        it: ['Che ore sono?', 'Quanto costa in totale?', 'Qual è migliore?', 'Dove ci sediamo?'],
      },
      answer: 1,
      explanation: { bn: 'দাম জিজ্ঞেস করতে Quant’è in tutto? ব্যবহৃত হয়।', en: 'It asks for the total price.' },
    },
    {
      id: 'q4',
      prompt: { bn: 'ইতালিতে "un caffè" বলতে সাধারণত কী বোঝায়?', en: 'What does "un caffè" normally refer to in Italy?' },
      options: ['A large mug of coffee', 'One shot of espresso', 'Iced coffee', 'Milk tea'],
      localizedOptions: {
        bn: ['এক মগ বড় কফি', 'একটি এস্প্রেসো', 'ঠান্ডা কফি', 'দুধ চা'],
        en: ['A large mug of coffee', 'One shot of espresso', 'Iced coffee', 'Milk tea'],
        it: ['Una tazza grande di caffè', 'Un espresso', 'Un caffè freddo', 'Un tè al latte'],
      },
      answer: 1,
      explanation: { bn: 'ইতালিতে un caffè মানে এক শট এস্প্রেসো।', en: 'In Italy, un caffè means an espresso.' },
    },
  ],
  tip: {
    bn: 'ইতালির অনেক বারে আগে ক্যাশ কাউন্টারে (la cassa) টাকা দিয়ে রসিদ (lo scontrino) দেখিয়ে কফি নিতে হয়।',
    en: 'In many Italian bars you pay at la cassa first and show lo scontrino at the counter.',
  },
};

const lesson2: Lesson = {
  id: 'a1-u3-l2',
  number: 2,
  title: 'Mi piace molto!',
  subtitle: { bn: 'পছন্দ ও অপছন্দ বলা — piacere', en: 'Expressing likes and dislikes' },
  minutes: 10,
  objectives: [
    { bn: 'mi piace ও mi piacciono-এর পার্থক্য বুঝবেন', en: 'Distinguish mi piace and mi piacciono' },
    { bn: 'খাবার ও শখ নিয়ে নিজের পছন্দ বলবেন', en: 'Talk about food and hobby preferences' },
  ],
  phrases: [
    { id: 'piace-pizza', it: 'Mi piace molto la pizza margherita.', tr: { bn: 'আমার মারগেরিতা পিৎজা খুব ভালো লাগে।', en: 'I really like Margherita pizza.' } },
    { id: 'piacciono-dolci', it: 'Ti piacciono i dolci italiani?', tr: { bn: 'তোমার কি ইতালিয়ান মিষ্টি ভালো লাগে?', en: 'Do you like Italian desserts?' } },
    { id: 'non-piace', it: 'Non mi piace il caffè amaro.', tr: { bn: 'আমার তেতো কফি ভালো লাগে না।', en: 'I do not like bitter coffee.' } },
    { id: 'piace-cucinare', it: 'Ci piace cucinare insieme.', tr: { bn: 'একসাথে রান্না করতে আমাদের ভালো লাগে।', en: 'We like cooking together.' } },
    { id: 'preferisco', it: 'Preferisco il tè al limone.', tr: { bn: 'আমি লেবু চা বেশি পছন্দ করি।', en: 'I prefer lemon tea.' } },
  ],
  grammar: [
    {
      id: 'piacere-u3',
      title: { bn: 'piace বনাম piacciono', en: 'piace vs piacciono' },
      explanation: {
        bn: 'যা ভালো লাগে তা একবচন বিশেষ্য বা ক্রিয়া হলে piace; বহুবচন বিশেষ্য হলে piacciono। কার ভালো লাগে তা mi, ti, gli, le, ci দিয়ে বোঝানো হয়।',
        en: 'Use piace with singular nouns or infinitive verbs, and piacciono with plural nouns. Indirect pronouns show who likes it: mi, ti, gli, le, ci.',
      },
      table: [
        { label: 'একবচন', it: 'Mi piace la pasta.', tr: { bn: 'আমার পাস্তা ভালো লাগে।', en: 'I like pasta.' } },
        { label: 'ক্রিয়া', it: 'Mi piace leggere.', tr: { bn: 'আমার পড়তে ভালো লাগে।', en: 'I like reading.' } },
        { label: 'বহুবচন', it: 'Mi piacciono le mele.', tr: { bn: 'আমার আপেলগুলো ভালো লাগে।', en: 'I like apples.' } },
      ],
      examples: [
        { id: 'u3-g2-e1', it: 'A Sara piace la musica classica.', tr: { bn: 'সারার ক্লাসিক্যাল সংগীত ভালো লাগে।', en: 'Sara likes classical music.' } },
        { id: 'u3-g2-e2', it: 'Non ci piacciono le giornate fredde.', tr: { bn: 'ঠান্ডা দিনগুলো আমাদের ভালো লাগে না।', en: 'We do not like cold days.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'পছন্দের খাবার', en: 'Favourite food' },
    context: { bn: 'মার্কো আর নাদিয়া দুপুরের খাবার নিয়ে কথা বলছে।', en: 'Marco and Nadia chat about what they like to eat.' },
    lines: [
      { speaker: 'Marco', it: 'Nadia, ti piace la cucina italiana?', tr: { bn: 'নাদিয়া, তোমার কি ইতালীয় খাবার ভালো লাগে?', en: 'Nadia, do you like Italian cuisine?' } },
      { speaker: 'Nadia', it: 'Sì, tantissimo! Mi piace soprattutto la pasta al pomodoro.', tr: { bn: 'হ্যাঁ, ভীষণ! বিশেষ করে টমেটো সসের পাস্তা আমার খুব ভালো লাগে।', en: 'Yes, very much! I especially like pasta with tomato sauce.' } },
      { speaker: 'Marco', it: 'E ti piacciono i formaggi?', tr: { bn: 'আর পনির কি ভালো লাগে?', en: 'And do you like cheeses?' } },
      { speaker: 'Nadia', it: 'Sì, ma preferisco la mozzarella fresca.', tr: { bn: 'হ্যাঁ, তবে আমি তাজা মোৎজারেলা বেশি পছন্দ করি।', en: 'Yes, but I prefer fresh mozzarella.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Fill in the blank:' },
      it: 'Mi ___ molto questi biscotti.',
      options: ['piace', 'piacciono', 'piaci', 'piaciamo'],
      answer: 1,
      explanation: { bn: 'questi biscotti বহুবচন, তাই piacciono।', en: 'questi biscotti is plural → piacciono.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'সঠিক বাক্য কোনটি?', en: 'Which sentence is correct?' },
      options: ['Mi piacciono viaggiare.', 'Mi piace viaggiare.', 'Io piace viaggiare.', 'Io piaccio viaggiare.'],
      answer: 1,
      explanation: { bn: 'ক্রিয়ার (infinito) সাথে সবসময় একবচন piace বসে।', en: 'Infinitives always take singular piace.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"তার চা ভালো লাগে" (মেয়ে হলে):', en: '"She likes tea":' },
      options: ['Gli piace il tè.', 'Le piace il tè.', 'Ci piace il tè.', 'Ti piace il tè.'],
      answer: 1,
      explanation: { bn: 'মেয়ের জন্য পরোক্ষ সর্বনাম le।', en: 'For "her", the indirect pronoun is le.' },
    },
    {
      id: 'q4',
      prompt: { bn: 'preferire-এর io রূপ কোনটি?', en: 'What is the io form of preferire?' },
      options: ['prefero', 'preferisco', 'preferisci', 'preferiamo'],
      answer: 1,
      explanation: { bn: 'preferire একটি -isc- ক্রিয়া: preferisco।', en: 'preferire takes -isc-: preferisco.' },
    },
  ],
  tip: {
    bn: '"mi piace" এর পরে কখনো io লিখবেন না; "আমার কাছে" জোর দিতে হলে "A me piace" বলুন।',
    en: 'Never say "Io mi piace". To emphasise "I", say "A me piace".',
  },
};

const lesson3: Lesson = {
  id: 'a1-u3-l3',
  number: 3,
  title: 'Al ristorante',
  subtitle: { bn: 'রেস্টুরেন্টে টেবিল ও খাবার চাওয়া', en: 'Booking a table and ordering dinner' },
  minutes: 12,
  objectives: [
    { bn: 'রেস্টুরেন্টে টেবিল, মেনু ও বিল চাইতে পারবেন', en: 'Ask for a table, menu, and the bill' },
    { bn: 'খাবারে অ্যালার্জি বা পছন্দ জানাতে পারবেন', en: 'State dietary preferences' },
  ],
  phrases: [
    { id: 'tavolo-due', it: 'Un tavolo per due, per favore.', tr: { bn: 'দুজনের জন্য একটি টেবিল, প্লিজ।', en: 'A table for two, please.' } },
    { id: 'menu-fav', it: 'Possiamo vedere il menù?', tr: { bn: 'আমরা কি মেনুটা দেখতে পারি?', en: 'Could we see the menu?' } },
    { id: 'non-carne', it: 'Non mangio carne, sono vegetariano.', tr: { bn: 'আমি মাংস খাই না, আমি নিরামিষভোজী।', en: 'I do not eat meat, I am vegetarian.' } },
    { id: 'acqua-nat', it: "Una bottiglia d'acqua naturale.", tr: { bn: 'এক বোতল সাধারণ পানি (গ্যাস ছাড়া)।', en: 'A bottle of still water.' } },
    { id: 'tutto-buono', it: 'È tutto molto buono!', tr: { bn: 'সবকিছু খুব সুস্বাদু!', en: 'Everything is delicious!' } },
    { id: 'conto-carta', it: 'Il conto, per favore. Possiamo pagare con la carta?', tr: { bn: 'বিলটা দিন, প্লিজ। আমরা কি কার্ডে দিতে পারি?', en: 'The bill, please. Can we pay by card?' } },
  ],
  grammar: [
    {
      id: 'modali-u3',
      title: { bn: 'রেস্টুরেন্টে potere / volere', en: 'potere and volere at a restaurant' },
      explanation: {
        bn: 'অনুমতি বা অনুরোধে potere (Posso avere…? Possiamo pagare…?) এবং পছন্দে volere/vorrei ব্যবহার হয়। মূলের সাথে সরাসরি অপরিবর্তিত ক্রিয়া বসে।',
        en: 'Use potere (Posso avere…? Possiamo pagare…?) for requests and vorrei/volere for choices, always followed directly by an infinitive.',
      },
      examples: [
        { id: 'u3-g3-e1', it: 'Posso prendere la zuppa di verdure?', tr: { bn: 'আমি কি সবজির স্যুপ নিতে পারি?', en: 'Can I have the vegetable soup?' } },
        { id: 'u3-g3-e2', it: 'Vogliamo provare il pesce fresco.', tr: { bn: 'আমরা তাজা মাছ চেখে দেখতে চাই।', en: 'We want to try the fresh fish.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'রাতের খাবার', en: 'Dinner at a trattoria' },
    context: { bn: 'রাহিম ও জুলিয়া একটি ছোট ইতালীয় রেস্টুরেন্টে অর্ডার করছে।', en: 'Rahim and Giulia order dinner at a local trattoria.' },
    lines: [
      { speaker: 'Cameriere', it: 'Buonasera! Avete prenotato?', tr: { bn: 'শুভ সন্ধ্যা! আপনারা কি বুক করেছেন?', en: 'Good evening! Have you booked?' } },
      { speaker: 'Giulia', it: 'No, c’è un tavolo per due?', tr: { bn: 'না, দুজনের জন্য কি একটা টেবিল আছে?', en: 'No, is there a table for two?' } },
      { speaker: 'Cameriere', it: 'Certo, accomodatevi qui. Cosa vi porto da bere?', tr: { bn: 'অবশ্যই, এখানে বসুন। পান করার জন্য কী আনব?', en: 'Of course, have a seat here. What can I bring you to drink?' } },
      { speaker: 'Rahim', it: "Una bottiglia d'acqua naturale, per favore. E io non mangio carne.", tr: { bn: 'এক বোতল সাধারণ পানি, প্লিজ। আর আমি মাংস খাই না।', en: 'A bottle of still water, please. And I do not eat meat.' } },
    ],
  },
  quiz: [
    {
      id: 'q1',
      prompt: { bn: '"গ্যাস ছাড়া সাধারণ পানি" কী?', en: 'What is "still water" in Italian?' },
      options: ['acqua frizzante', 'acqua naturale', 'acqua calda', 'acqua dolce'],
      answer: 1,
      explanation: { bn: 'acqua naturale = সাধারণ পানি; frizzante = গ্যাসযুক্ত/স্পার্কলিং।', en: 'naturale is still; frizzante is sparkling.' },
    },
    {
      id: 'q2',
      prompt: { bn: 'কার্ডে বিল দিতে চাইলে কী বলবেন?', en: 'How do you ask to pay by card?' },
      options: ['Posso pagare con la carta?', 'Posso pagare con i biglietti?', 'Devo pagare il menù?', 'Voglio il tavolo.'],
      answer: 0,
      explanation: { bn: 'pagare con la carta = কার্ডে পরিশোধ করা।', en: 'pagare con la carta = pay by card.' },
    },
    {
      id: 'q3',
      prompt: { bn: '"il piatto" অর্থ কী?', en: 'What does "il piatto" mean?' },
      options: ['Spoon', 'Plate / dish', 'Glass', 'Bill'],
      localizedOptions: {
        bn: ['চামচ', 'প্লেট / পদ', 'গ্লাস', 'বিল'],
        en: ['Spoon', 'Plate / dish', 'Glass', 'Bill'],
        it: ['Cucchiaio', 'Piatto / pietanza', 'Bicchiere', 'Conto'],
      },
      answer: 1,
      explanation: { bn: 'il piatto মানে প্লেট বা খাবারের পদ।', en: 'il piatto means plate or dish.' },
    },
    {
      id: 'q4',
      prompt: { bn: '"আমরা মেনু দেখতে চাই" — কোনটি সঠিক?', en: '"We want to see the menu" — which is right?' },
      options: ['Vogliamo di vedere il menù.', 'Vogliamo vedere il menù.', 'Vogliamo vediamo il menù.', 'Voglio vedere il menù.'],
      answer: 1,
      explanation: { bn: 'মডাল ক্রিয়ার পরে সরাসরি infinito বসে, di নয়।', en: 'Modals take a bare infinitive without di.' },
    },
  ],
  tip: {
    bn: 'ইতালীয় রেস্টুরেন্টে বিলে "coperto" লেখা থাকতে পারে — এটি টেবিল ও রুটির জন্য ছোট সার্ভিস চার্জ।',
    en: 'On Italian restaurant bills, "coperto" is a standard small cover charge per person.',
  },
};

export const a1Unit3: Unit = {
  id: 'a1-u3',
  number: 3,
  title: 'Al bar',
  subtitle: { bn: 'ক্যাফে ও রেস্টুরেন্টে কথা বলা', en: 'Ordering at a café and restaurant' },
  lessons: [lesson1, lesson2, lesson3],
};
