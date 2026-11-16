import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const A1_STORIES_1: StoryItem[] = [
  buildStory({
    id: 'st-a1-01',
    level: 'A1',
    titleIt: 'Il primo giorno a Roma',
    title: { bn: 'রোমে প্রথম দিন', en: 'The first day in Rome' },
    topic: { bn: 'পরিচয় ও অভিবাদন', en: 'Introductions & greetings' },
    difficulty: 1,
    grammarIds: ['essere', 'pronuncia'],
    vocabKeys: ['w:A1:buongiorno', 'w:A1:la città', 'w:A1:lo studente'],
    paragraphs: [
      {
        it: 'Buongiorno! Mi chiamo Rahim e sono di Dhaka. Oggi è il mio primo giorno a Roma.',
        tr: { bn: 'শুভ সকাল! আমার নাম রাহিম এবং আমি ঢাকার। আজ রোমে আমার প্রথম দিন।', en: 'Good morning! My name is Rahim and I am from Dhaka. Today is my first day in Rome.' },
        grammarNote: { bn: 'পরিচয় ও উৎস বোঝাতে "sono di + শহর" ব্যবহার হয়েছে।', en: '"sono di + city" states origin.' },
      },
      {
        it: 'La città è grande, luminosa e molto antica. Io sono uno studente di architettura.',
        tr: { bn: 'শহরটি বড়, উজ্জ্বল এবং খুব প্রাচীন। আমি স্থাপত্যবিদ্যার একজন ছাত্র।', en: 'The city is big, bright and very ancient. I am an architecture student.' },
        grammarNote: { bn: 'la città স্ত্রীলিঙ্গ, তাই বিশেষণ grande, luminosa, antica স্ত্রীলিঙ্গ রূপ নিয়েছে।', en: 'la città is feminine, so adjectives agree in feminine singular.' },
      },
      {
        it: 'Davanti alla stazione incontro Marco. Lui è italiano e siamo subito amici.',
        tr: { bn: 'স্টেশনের সামনে মার্কোর সাথে দেখা হয়। সে ইতালীয় এবং আমরা সাথে সাথে বন্ধু হয়ে যাই।', en: 'In front of the station I meet Marco. He is Italian and we immediately become friends.' },
        grammarNote: { bn: 'noi-এর সাথে essere-র রূপ "siamo" ব্যবহৃত হয়েছে।', en: '"siamo" is the noi form of essere.' },
      },
    ],
    wordGlossary: [
      { word: 'primo', base: 'primo', tr: { bn: 'প্রথম', en: 'first' }, pos: 'adj', grammarHint: { bn: 'পুংলিঙ্গ একবচন', en: 'masc. sing.' } },
      { word: 'luminosa', base: 'luminoso', tr: { bn: 'উজ্জ্বল / আলোকিত', en: 'bright' }, pos: 'adj' },
      { word: 'incontro', base: 'incontrare', tr: { bn: 'দেখা করা (আমি)', en: 'I meet' }, pos: 'verb', grammarHint: { bn: 'presente io রূপ', en: 'present tense io' } },
      { word: 'subito', base: 'subito', tr: { bn: 'সাথে সাথে', en: 'immediately' }, pos: 'adv' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Sono di Dhaka.',
        ruleTitle: { bn: 'essere + di + শহর', en: 'essere + di + city' },
        explanation: { bn: 'কোনো শহর থেকে এসেছেন বোঝাতে "essere di" ব্যবহার হয়; io সর্বনাম বাদ দেওয়া স্বাভাবিক।', en: 'Use "essere di" + city for origin; dropping "io" is natural.' },
        verbForm: 'essere: io sono',
        grammarId: 'essere',
      },
      {
        sentenceIt: 'La città è grande.',
        ruleTitle: { bn: 'c ও অ্যাকসেন্ট উচ্চারণ', en: 'Soft c and accented endings' },
        explanation: { bn: 'città-তে c+i নরম "চ" (চিত্তা) উচ্চারিত হয়।', en: 'c before i sounds like "ch": chitta.' },
        grammarId: 'pronuncia',
      },
    ],
    mcq: [
      { id: 'st1-q1', prompt: { bn: 'রাহিম কী বিষয়ে পড়ে?', en: 'What does Rahim study?' }, options: ['মেডিকেল', 'স্থাপত্যবিদ্যা', 'সংগীত', 'ইতিহাস'], answer: 1, explanation: { bn: 'গল্পে বলা আছে: uno studente di architettura।', en: 'The story says: uno studente di architettura.' } },
      { id: 'st1-q2', prompt: { bn: 'রাহিমের সাথে কার দেখা হয়?', en: 'Who does Rahim meet?' }, options: ['Giulia', 'Marco', 'Luca', 'Sara'], answer: 1, explanation: { bn: 'স্টেশনের সামনে মার্কোর সাথে দেখা হয়।', en: 'He meets Marco in front of the station.' } },
    ],
    trueFalse: [
      { id: 'st1-tf1', statementIt: 'Marco è di Dhaka.', statement: { bn: 'মার্কো ঢাকার।', en: 'Marco is from Dhaka.' }, answer: false, explanation: { bn: 'রাহিম ঢাকার; মার্কো ইতালীয়।', en: 'Rahim is from Dhaka; Marco is Italian.' } },
      { id: 'st1-tf2', statementIt: 'Roma è una città antica.', statement: { bn: 'রোম একটি প্রাচীন শহর।', en: 'Rome is an ancient city.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «শহরটি বড়, উজ্জ্বল এবং খুব প্রাচীন। আমি স্থাপত্যবিদ্যার একজন ছাত্র।» (La città è grande, luminosa e molto antica)।', en: 'Directly stated in paragraph 2.' } },
    ],
    fillBlank: [
      { id: 'st1-fb1', sentence: 'Io ___ uno studente di architettura.', options: ['sei', 'è', 'sono', 'siete'], answer: 2, explanation: { bn: 'io-এর সাথে sono।', en: 'io takes sono.' } },
    ],
    shortAnswer: [
      { id: 'st1-sa1', question: { bn: 'রাহিম কোথা থেকে এসেছে? (ইতালিয়ানে লিখুন)', en: 'Where is Rahim from? (Answer in Italian)' }, sampleAnswerIt: 'Rahim è di Dhaka.', keywords: ['dhaka', 'è'] },
    ],
    practice: {
      retellPrompt: { bn: 'রাহিমের রোমে প্রথম দিনটি ৩টি ছোট বাক্যে বলুন।', en: 'Retell Rahim’s first day in Rome in 3 short sentences.' },
      completeMissing: { promptIt: 'Buongiorno! Mi chiamo ___ e sono di ___.', hint: { bn: 'নিজের নাম ও শহর বসান', en: 'Insert your name and city' }, sampleIt: 'Buongiorno! Mi chiamo Tariq e sono di Sylhet.' },
      buildSimilar: { patternIt: 'La città è grande e antica.', prompt: { bn: 'আপনার নিজের শহর সম্পর্কে এমন একটি বাক্য লিখুন।', en: 'Write a similar sentence about your own city.' }, sampleIt: 'La mia città è grande e vivace.' },
      altEndingPrompt: { bn: 'রাহিম ও মার্কো এরপর কোথায় যেতে পারে? ১–২ বাক্য লিখুন।', en: 'Where could Rahim and Marco go next? Write 1–2 sentences.' },
    },
  }),

  buildStory({
    id: 'st-a1-02',
    level: 'A1',
    titleIt: 'La domenica in famiglia',
    title: { bn: 'পরিবারের সাথে রবিবার', en: 'Sunday with the family' },
    topic: { bn: 'পরিবার ও সম্বন্ধসূচক', en: 'Family & possessives' },
    difficulty: 1,
    grammarIds: ['possessivi-a1', 'essere'],
    vocabKeys: ['w:A1:la famiglia', 'w:A1:domenica', 'w:A1:cucinare'],
    paragraphs: [
      {
        it: 'Oggi è domenica e siamo tutti a casa. Mio padre legge il giornale in soggiorno.',
        tr: { bn: 'আজ রবিবার এবং আমরা সবাই বাড়িতে আছি। আমার বাবা বসার ঘরে পত্রিকা পড়ছেন।', en: 'Today is Sunday and we are all at home. My father is reading the newspaper in the living room.' },
        grammarNote: { bn: 'একবচন "mio padre"-তে আর্টিকেল নেই।', en: 'Singular "mio padre" omits the article.' },
      },
      {
        it: 'Mia madre e mia sorella cucinano la pasta con i pomodori freschi.',
        tr: { bn: 'আমার মা এবং আমার বোন তাজা টমেটো দিয়ে পাস্তা রান্না করছেন।', en: 'My mother and my sister are cooking pasta with fresh tomatoes.' },
        grammarNote: { bn: 'দুজন কর্তা হওয়ায় ক্রিয়া বহুবচন "cucinano"।', en: 'Two subjects take the plural verb "cucinano".' },
      },
      {
        it: 'Nel pomeriggio arrivano i miei zii e i nostri cugini per il caffè.',
        tr: { bn: 'বিকেলে আমাদের চাচা-চাচি ও কাজিনরা কফির জন্য আসেন।', en: 'In the afternoon my aunt, uncle and cousins arrive for coffee.' },
        grammarNote: { bn: 'বহুবচনে আর্টিকেল ফিরে এসেছে: i miei zii, i nostri cugini।', en: 'Plurals restore the definite article: i miei, i nostri.' },
      },
    ],
    wordGlossary: [
      { word: 'tutti', base: 'tutto', tr: { bn: 'সবাই', en: 'everyone / all' }, pos: 'pron' },
      { word: 'soggiorno', base: 'il soggiorno', tr: { bn: 'বসার ঘর', en: 'living room' }, pos: 'noun' },
      { word: 'freschi', base: 'fresco', tr: { bn: 'তাজা', en: 'fresh' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Mio padre legge il giornale.',
        ruleTitle: { bn: 'একবচন পরিবারে আর্টিকেল বাদ', en: 'No article before singular family nouns' },
        explanation: { bn: 'padre, madre, sorella একবচন হলে il/la বাদ যায়।', en: 'Singular unmodified family nouns drop il/la.' },
        grammarId: 'possessivi-a1',
      },
      {
        sentenceIt: 'Arrivano i miei zii.',
        ruleTitle: { bn: 'বহুবচন পরিবারে আর্টিকেল আবশ্যক', en: 'Plural family nouns require the article' },
        explanation: { bn: 'zii বহুবচন হওয়ায় i miei zii বলতে হয়।', en: 'Plural zii requires i before miei.' },
        grammarId: 'possessivi-a1',
      },
    ],
    mcq: [
      { id: 'st2-q1', prompt: { bn: 'বাবা কোথায় পত্রিকা পড়ছেন?', en: 'Where is father reading the newspaper?' }, options: ['রান্নাঘরে', 'বসার ঘরে', 'পার্কে', 'বাগানে'], answer: 1, explanation: { bn: 'in soggiorno = বসার ঘরে।', en: 'in soggiorno = in the living room.' } },
      { id: 'st2-q2', prompt: { bn: 'বিকেলে কারা আসে?', en: 'Who arrives in the afternoon?' }, options: ['বন্ধুরা', 'সহকর্মীরা', 'চাচা-চাচি ও কাজিনরা', 'শিক্ষকেরা'], answer: 2, explanation: { bn: 'সঠিক উত্তর: চাচা-চাচি ও কাজিনরা — পাঠ্যাংশে বলা হয়েছে: «বিকেলে আমাদের চাচা-চাচি ও কাজিনরা কফির জন্য আসেন।» (i miei zii e i nostri cugini)।', en: 'Aunts, uncles and cousins arrive.' } },
    ],
    trueFalse: [
      { id: 'st2-tf1', statementIt: 'Oggi è lunedì.', statement: { bn: 'আজ সোমবার।', en: 'Today is Monday.' }, answer: false, explanation: { bn: 'গল্পে বলা হয়েছে Oggi è domenica।', en: 'It is Sunday.' } },
    ],
    fillBlank: [
      { id: 'st2-fb1', sentence: 'Nel pomeriggio arrivano ___ miei zii.', options: ['il', 'lo', 'i', 'le'], answer: 2, explanation: { bn: 'zii-র বহুবচন আর্টিকেল i (miei থেকে i আসে, কারণ miei m-দিয়ে শুরু)।', en: 'Before miei, the plural article is i.' } },
    ],
    shortAnswer: [
      { id: 'st2-sa1', question: { bn: 'মা ও বোন কী রান্না করছে?', en: 'What are mother and sister cooking?' }, sampleAnswerIt: 'Cucinano la pasta con i pomodori freschi.', keywords: ['pasta', 'pomodori'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপনার পরিবারের ছুটির দিন সম্পর্কে ৩টি বাক্য বলুন।', en: 'Describe a Sunday with your family in 3 sentences.' },
      completeMissing: { promptIt: 'La domenica ___ madre cucina e ___ fratelli giocano.', hint: { bn: 'সঠিক সম্বন্ধসূচক বসান', en: 'Insert possessives' }, sampleIt: 'La domenica mia madre cucina e i miei fratelli giocano.' },
      buildSimilar: { patternIt: 'Mio padre legge il giornale in soggiorno.', prompt: { bn: 'আপনার ভাই বা বোন ঘরে কী করে লিখুন।', en: 'Write what your brother or sister does at home.' }, sampleIt: 'Mia sorella studia italiano in camera.' },
      altEndingPrompt: { bn: 'সন্ধ্যায় পরিবারটি একসাথে কী করতে পারে? ১ বাক্য লিখুন।', en: 'What might the family do in the evening? Write 1 sentence.' },
    },
  }),

  buildStory({
    id: 'st-a1-03',
    level: 'A1',
    titleIt: 'Un caffè al bar centrale',
    title: { bn: 'সেন্ট্রাল ক্যাফেতে এক কাপ কফি', en: 'A coffee at the central café' },
    topic: { bn: 'খাবার ও ক্যাফে', en: 'Food & café' },
    difficulty: 1,
    grammarIds: ['avere', 'modali'],
    vocabKeys: ['w:A1:il bar', 'w:A1:il caffè', 'w:A1:lo scontrino'],
    paragraphs: [
      {
        it: 'Sono le otto di mattina. Elena ha molta fretta perché ha una lezione alle otto e mezza.',
        tr: { bn: 'সকাল আটটা বাজে। এলেনার খুব তাড়া আছে কারণ সাড়ে আটটায় তার ক্লাস আছে।', en: 'It is eight in the morning. Elena is in a hurry because she has a class at eight thirty.' },
        grammarNote: { bn: 'তাড়া থাকা = avere fretta; ক্লাস থাকা = avere una lezione।', en: 'avere fretta (be in a hurry) and avere una lezione.' },
      },
      {
        it: 'Entra al bar e dice: "Buongiorno! Posso avere un cappuccino e un cornetto, per favore?"',
        tr: { bn: 'সে ক্যাফেতে ঢুকে বলে: "শুভ সকাল! আমি কি একটি ক্যাপুচিনো ও একটি করনেত্তো পেতে পারি, প্লিজ?"', en: 'She enters the café and says: "Good morning! Can I have a cappuccino and a croissant, please?"' },
        grammarNote: { bn: 'Posso + avere (মডাল + ইনফিনিটিভ)।', en: 'Posso + bare infinitive avere.' },
      },
      {
        it: 'Il barista sorride e dà lo scontrino. Elena paga tre euro e corre all’università.',
        tr: { bn: 'বারিস্তা হাসেন ও রসিদ দেন। এলেনা তিন ইউরো পরিশোধ করে বিশ্ববিদ্যালয়ের দিকে দৌড়ায়।', en: 'The barista smiles and gives the receipt. Elena pays three euros and runs to university.' },
      },
    ],
    wordGlossary: [
      { word: 'fretta', base: 'la fretta', tr: { bn: 'তাড়া', en: 'hurry' }, pos: 'noun' },
      { word: 'cornetto', base: 'il cornetto', tr: { bn: 'ইতালীয় ক্রোঁয়াসা / পেস্ট্রি', en: 'croissant' }, pos: 'noun' },
      { word: 'sorride', base: 'sorridere', tr: { bn: 'হাসে', en: 'smiles' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Elena ha molta fretta.',
        ruleTitle: { bn: 'avere দিয়ে অবস্থা', en: 'States with avere' },
        explanation: { bn: 'তাড়া বোঝাতে avere fretta ব্যবহৃত হয়; অনেক তাড়া হলে molta fretta।', en: 'avere fretta means to be in a hurry; molta agrees with feminine fretta.' },
        verbForm: 'avere: lei ha',
        grammarId: 'avere',
      },
      {
        sentenceIt: 'Posso avere un cappuccino?',
        ruleTitle: { bn: 'potere + ইনফিনিটিভ', en: 'potere + infinitive' },
        explanation: { bn: 'মডাল ক্রিয়া potere সরাসরি অপরিবর্তিত ক্রিয়া নেয়।', en: 'Modal potere takes a bare infinitive directly.' },
        grammarId: 'modali',
      },
    ],
    mcq: [
      { id: 'st3-q1', prompt: { bn: 'এলেনার ক্লাস কয়টায়?', en: 'What time is Elena’s class?' }, options: ['আটটায়', 'সাড়ে আটটায়', 'নয়টায়', 'দশটায়'], answer: 1, explanation: { bn: 'alle otto e mezza = সাড়ে আটটায়।', en: 'alle otto e mezza = 8:30.' } },
      { id: 'st3-q2', prompt: { bn: 'নাস্তার দাম কত ছিল?', en: 'How much did breakfast cost?' }, options: ['দুই ইউরো', 'তিন ইউরো', 'চার ইউরো', 'পাঁচ ইউরো'], answer: 1, explanation: { bn: 'সঠিক উত্তর: তিন ইউরো — পাঠ্যাংশে বলা হয়েছে: «বারিস্তা হাসেন ও রসিদ দেন। এলেনা তিন ইউরো পরিশোধ করে বিশ্ববিদ্যালয়ের দিকে দৌড়ায়।» (Elena paga tre euro)।', en: 'She pays three euros.' } },
    ],
    trueFalse: [
      { id: 'st3-tf1', statementIt: 'Elena ha molto tempo stamattina.', statement: { bn: 'আজ সকালে এলেনার হাতে অনেক সময় আছে।', en: 'Elena has plenty of time this morning.' }, answer: false, explanation: { bn: 'তার খুব তাড়া আছে (ha molta fretta)।', en: 'She is in a great hurry.' } },
    ],
    fillBlank: [
      { id: 'st3-fb1', sentence: 'Posso ___ un cornetto al cioccolato?', options: ['ho', 'avere', 'avete', 'hai'], answer: 1, explanation: { bn: 'Posso-র পরে ইনফিনিটিভ avere বসে।', en: 'After Posso, use the infinitive avere.' } },
    ],
    shortAnswer: [
      { id: 'st3-sa1', question: { bn: 'এলেনা ক্যাফেতে কী অর্ডার করেছে?', en: 'What did Elena order at the café?' }, sampleAnswerIt: 'Un cappuccino e un cornetto.', keywords: ['cappuccino', 'cornetto'] },
    ],
    practice: {
      retellPrompt: { bn: 'এলেনার সকালের ক্যাফে যাওয়ার ঘটনাটি বলুন।', en: 'Retell Elena’s quick morning stop at the café.' },
      completeMissing: { promptIt: 'Ho ___ perché ho ___ alle nove.', hint: { bn: 'তাড়া ও ক্লাস লিখুন', en: 'hurry + class' }, sampleIt: 'Ho fretta perché ho lezione alle nove.' },
      buildSimilar: { patternIt: 'Posso avere un cappuccino, per favore?', prompt: { bn: 'আপনার পছন্দের কোনো পানীয় অর্ডার করে বাক্য লিখুন।', en: 'Order your favourite drink.' }, sampleIt: 'Posso avere un succo d’arancia, per favore?' },
      altEndingPrompt: { bn: 'এলেনা কি সময়মতো ক্লাসে পৌঁছাবে? ১টি বাক্য লিখুন।', en: 'Does Elena reach class on time? Write 1 sentence.' },
    },
  }),

  buildStory({
    id: 'st-a1-04',
    level: 'A1',
    titleIt: 'Lo zaino smarrito',
    title: { bn: 'হারানো ব্যাকপ্যাক', en: 'The lost backpack' },
    topic: { bn: 'দৈনন্দিন বস্তু ও আর্টিকেল', en: 'Everyday objects & articles' },
    difficulty: 1,
    grammarIds: ['avere', 'articoli'],
    vocabKeys: ['w:A1:la chiave', 'w:A1:il cellulare', 'w:A1:il libro'],
    paragraphs: [
      {
        it: 'Luca è preoccupato: non trova lo zaino blu. Dentro ci sono il cellulare, le chiavi di casa e il quaderno.',
        tr: { bn: 'লুকা চিন্তিত: সে নীল ব্যাকপ্যাকটি খুঁজে পাচ্ছে না। ভেতরে মোবাইল ফোন, বাড়ির চাবি আর খাতা আছে।', en: 'Luca is worried: he cannot find the blue backpack. Inside are his mobile phone, house keys and notebook.' },
        grammarNote: { bn: 'z দিয়ে শুরু হওয়ায় "lo zaino", আর "le chiavi" স্ত্রীলিঙ্গ বহুবচন।', en: '"lo zaino" because of z-; "le chiavi" is feminine plural.' },
      },
      {
        it: 'Chiama il suo amico Paolo: "Hai visto il mio zaino in biblioteca?"',
        tr: { bn: 'সে তার বন্ধু পাওলোকে ফোন করে: "তুমি কি লাইব্রেরিতে আমার ব্যাকপ্যাকটা দেখেছো?"', en: 'He calls his friend Paolo: "Have you seen my backpack in the library?"' },
      },
      {
        it: 'Paolo ride: "Sì! È sotto la sedia vicino alla finestra. Puoi prenderlo adesso."',
        tr: { bn: 'পাওলো হেসে বলে: "হ্যাঁ! জানালার পাশের চেয়ারের নিচে আছে। এখনই নিতে পারো।"', en: 'Paolo laughs: "Yes! It is under the chair near the window. You can pick it up now."' },
      },
    ],
    wordGlossary: [
      { word: 'smarrito', base: 'smarrito', tr: { bn: 'হারানো / হারিয়ে যাওয়া', en: 'misplaced / lost' }, pos: 'adj' },
      { word: 'trova', base: 'trovare', tr: { bn: 'খুঁজে পায়', en: 'finds' }, pos: 'verb' },
      { word: 'ride', base: 'ridere', tr: { bn: 'হাসে', en: 'laughs' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Non trova lo zaino blu.',
        ruleTitle: { bn: 'lo আর্টিকেল', en: 'Article lo before z-' },
        explanation: { bn: 'z দিয়ে শুরু পুংলিঙ্গ শব্দের আগে il নয়, lo বসে।', en: 'Masculine nouns starting with z take lo.' },
        grammarId: 'articoli',
      },
    ],
    mcq: [
      { id: 'st4-q1', prompt: { bn: 'ব্যাকপ্যাকের ভেতরে কী ছিল না?', en: 'Which item was NOT inside the backpack?' }, options: ['মোবাইল ফোন', 'বাড়ির চাবি', 'ছাতা', 'খাতা'], answer: 2, explanation: { bn: 'ভেতরে ছিল cellulare, chiavi, quaderno।', en: 'Umbrella is not mentioned.' } },
      { id: 'st4-q2', prompt: { bn: 'ব্যাকপ্যাকটি কোথায় ছিল?', en: 'Where was the backpack?' }, options: ['টেবিলের উপরে', 'চেয়ারের নিচে', 'বাসের ভেতরে', 'দরজার সামনে'], answer: 1, explanation: { bn: 'sotto la sedia = চেয়ারের নিচে।', en: 'sotto la sedia = under the chair.' } },
    ],
    trueFalse: [
      { id: 'st4-tf1', statementIt: 'Lo zaino è rosso.', statement: { bn: 'ব্যাকপ্যাকটির রং লাল।', en: 'The backpack is red.' }, answer: false, explanation: { bn: 'ব্যাকপ্যাকটি নীল (lo zaino blu)।', en: 'It is blue.' } },
    ],
    fillBlank: [
      { id: 'st4-fb1', sentence: 'Dentro ci sono ___ chiavi di casa.', options: ['i', 'gli', 'le', 'la'], answer: 2, explanation: { bn: 'সঠিক রূপান্তর: «la chiave» থেকে পরিবর্তিত হয়ে «le chiavi» ব্যবহৃত হয়।', en: 'Feminine plural → le chiavi.' } },
    ],
    shortAnswer: [
      { id: 'st4-sa1', question: { bn: 'পাওলো ব্যাকপ্যাকটি কোথায় দেখেছে?', en: 'Where did Paolo see the backpack?' }, sampleAnswerIt: 'Sotto la sedia vicino alla finestra.', keywords: ['sotto', 'sedia'] },
    ],
    practice: {
      retellPrompt: { bn: 'লুকার ব্যাকপ্যাক হারানোর গল্পটি সংক্ষেপে বলুন।', en: 'Retell the story of Luca’s lost backpack.' },
      completeMissing: { promptIt: 'Nello zaino ho ___ libro, ___ penna e ___ chiavi.', hint: { bn: 'সঠিক আর্টিকেল বসান', en: 'Add articles' }, sampleIt: 'Nello zaino ho il libro, la penna e le chiavi.' },
      buildSimilar: { patternIt: 'Il cellulare è sul tavolo vicino alla lampada.', prompt: { bn: 'আপনার ঘরের কোনো জিনিস কোথায় আছে লিখুন।', en: 'Write where an object is in your room.' }, sampleIt: 'La mia borsa è sulla sedia vicino alla porta.' },
      altEndingPrompt: { bn: 'লুকা পাওলোকে ধন্যবাদ জানিয়ে কী বলবে?', en: 'What will Luca say to thank Paolo?' },
    },
  }),

  buildStory({
    id: 'st-a1-05',
    level: 'A1',
    titleIt: 'Le cose sulla scrivania',
    title: { bn: 'পড়ার টেবিলের জিনিসপত্র', en: 'Things on the desk' },
    topic: { bn: 'লিঙ্গ ও বহুবচন', en: 'Gender & plurals' },
    difficulty: 1,
    grammarIds: ['articoli', 'genere-numero'],
    vocabKeys: ['w:A1:la penna', 'w:A1:il quaderno', 'w:A1:il computer'],
    paragraphs: [
      {
        it: 'Nella mia stanza c’è una scrivania grande. Sul tavolo ci sono tre libri di italiano e due quaderni gialli.',
        tr: { bn: 'আমার রুমে একটা বড় পড়ার টেবিল আছে। টেবিলের উপরে তিনটি ইতালিয়ান বই ও দুটি হলুদ খাতা আছে।', en: 'In my room there is a big desk. On the table there are three Italian books and two yellow notebooks.' },
        grammarNote: { bn: '-o থেকে -i বহুবচন: libro → libri, quaderno → quaderni।', en: 'Masculine -o plurals to -i.' },
      },
      {
        it: 'Accanto al computer ci sono le penne nere, le matite e gli occhiali da lettura.',
        tr: { bn: 'কম্পিউটারের পাশে কালো কলমগুলো, পেন্সিলগুলো এবং পড়ার চশমা আছে।', en: 'Next to the computer are the black pens, the pencils and reading glasses.' },
      },
      {
        it: 'Ogni sera studio le parole nuove e scrivo cinque frasi semplici.',
        tr: { bn: 'প্রতিদিন সন্ধ্যায় আমি নতুন শব্দগুলো পড়ি এবং পাঁচটি সহজ বাক্য লিখি।', en: 'Every evening I study the new words and write five simple sentences.' },
      },
    ],
    wordGlossary: [
      { word: 'scrivania', base: 'la scrivania', tr: { bn: 'পড়ার টেবিল / ডেস্ক', en: 'desk' }, pos: 'noun' },
      { word: 'accanto', base: 'accanto a', tr: { bn: 'পাশে', en: 'next to' }, pos: 'adv' },
      { word: 'semplici', base: 'semplice', tr: { bn: 'সহজ', en: 'simple' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Scrivo cinque frasi semplici.',
        ruleTitle: { bn: '-e দিয়ে শেষ শব্দের বহুবচন', en: 'Plurals of -e nouns and adjectives' },
        explanation: { bn: 'la frase → le frasi এবং semplice → semplici (-e সবসময় বহুবচনে -i হয়)।', en: 'Both -e nouns and -e adjectives turn to -i in the plural.' },
        grammarId: 'genere-numero',
      },
    ],
    mcq: [
      { id: 'st5-q1', prompt: { bn: 'টেবিলে কয়টি বই আছে?', en: 'How many books are on the table?' }, options: ['দুটি', 'তিনটি', 'চারটি', 'পাঁচটি'], answer: 1, explanation: { bn: 'tre libri = তিনটি বই।', en: 'tre libri = three books.' } },
    ],
    trueFalse: [
      { id: 'st5-tf1', statementIt: 'Le penne sono rosse.', statement: { bn: 'কলমগুলো লাল রঙের।', en: 'The pens are red.' }, answer: false, explanation: { bn: 'গল্পে বলা আছে le penne nere (কালো)।', en: 'The pens are black (nere).' } },
    ],
    fillBlank: [
      { id: 'st5-fb1', sentence: 'Studio le ___ nuove ogni sera.', options: ['parola', 'parole', 'paroli', 'parolo'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «la parola» থেকে পরিবর্তিত হয়ে «le parole» ব্যবহৃত হয়।', en: 'Feminine -a → -e: le parole.' } },
    ],
    shortAnswer: [
      { id: 'st5-sa1', question: { bn: 'বক্তা প্রতিদিন সন্ধ্যায় কী লেখে?', en: 'What does the speaker write every evening?' }, sampleAnswerIt: 'Scrive cinque frasi semplici.', keywords: ['cinque', 'frasi'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপনার নিজের পড়ার টেবিলে কী কী আছে ইতালিয়ানে বলুন।', en: 'Describe what is on your own desk.' },
      completeMissing: { promptIt: 'Sul mio tavolo ci sono due ___ e una ___.', hint: { bn: 'বহুবচন ও একবচন শব্দ দিন', en: 'plural + singular' }, sampleIt: 'Sul mio tavolo ci sono due quaderni e una lampada.' },
      buildSimilar: { patternIt: 'Ogni sera studio le parole nuove.', prompt: { bn: 'প্রতিদিন আপনি কী অনুশীলন করেন লিখুন।', en: 'Write what you practise daily.' }, sampleIt: 'Ogni mattina ascolto i dialoghi italiani.' },
      altEndingPrompt: { bn: 'পড়া শেষে সে কী করবে?', en: 'What will they do after studying?' },
    },
  }),

  buildStory({
    id: 'st-a1-06',
    level: 'A1',
    titleIt: 'L’amico di famiglia',
    title: { bn: 'পরিবারের বন্ধু', en: 'The family friend' },
    topic: { bn: 'বন্ধু ও অতিথি', en: 'Friends & guests' },
    difficulty: 1,
    grammarIds: ['articoli', 'possessivi-a1'],
    vocabKeys: ["w:A1:l'amico", 'w:A1:la cena', 'w:A1:il regalo'],
    paragraphs: [
      {
        it: 'Stasera viene a cena un amico di mio fratello, Davide. Porta un regalo per mia madre: dei fiori gialli.',
        tr: { bn: 'আজ রাতে আমার ভাইয়ের এক বন্ধু দাভিদে রাতের খাবারে আসছে। সে আমার মায়ের জন্য উপহার নিয়ে আসছে: হলুদ ফুল।', en: 'Tonight a friend of my brother, Davide, is coming for dinner. He brings a gift for my mother: yellow flowers.' },
      },
      {
        it: 'Davide è un ragazzo molto simpatico. Lavora come fotografo e fa bellissime foto della città.',
        tr: { bn: 'দাভিদে খুব মজার ছেলে। সে ফটোগ্রাফার হিসেবে কাজ করে এবং শহরের দারুণ ছবি তোলে।', en: 'Davide is a very likeable guy. He works as a photographer and takes wonderful photos of the city.' },
      },
      {
        it: 'Dopo cena beviamo il tè e guardiamo le sue foto sullo schermo del computer.',
        tr: { bn: 'রাতের খাবারের পর আমরা চা খাই এবং কম্পিউটারের স্ক্রিনে তার ছবিগুলো দেখি।', en: 'After dinner we drink tea and look at his photos on the computer screen.' },
      },
    ],
    wordGlossary: [
      { word: 'stasera', base: 'stasera', tr: { bn: 'আজ রাতে / আজ সন্ধ্যায়', en: 'tonight' }, pos: 'adv' },
      { word: 'fotografo', base: 'il fotografo', tr: { bn: 'ফটোগ্রাফার', en: 'photographer' }, pos: 'noun' },
      { word: 'schermo', base: 'lo schermo', tr: { bn: 'স্ক্রিন / পর্দা', en: 'screen' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Un amico di mio fratello.',
        ruleTitle: { bn: 'un বনাম un’', en: 'un vs un’' },
        explanation: { bn: 'amico পুংলিঙ্গ, তাই অ্যাপস্ট্রফি ছাড়া "un amico" লেখা হয়।', en: 'amico is masculine, so write "un amico" with no apostrophe.' },
        grammarId: 'articoli',
      },
    ],
    mcq: [
      { id: 'st6-q1', prompt: { bn: 'দাভিদে মায়ের জন্য কী উপহার আনে?', en: 'What gift does Davide bring?' }, options: ['বই', 'হলুদ ফুল', 'চকলেট', 'কমলা'], answer: 1, explanation: { bn: 'dei fiori gialli = হলুদ ফুল।', en: 'He brings yellow flowers.' } },
    ],
    trueFalse: [
      { id: 'st6-tf1', statementIt: 'Davide lavora come medico.', statement: { bn: 'দাভিদে ডাক্তার হিসেবে কাজ করে।', en: 'Davide works as a doctor.' }, answer: false, explanation: { bn: 'সে ফটোগ্রাফার (lavora come fotografo)।', en: 'He works as a photographer.' } },
    ],
    fillBlank: [
      { id: 'st6-fb1', sentence: 'Guardiamo ___ foto sullo schermo.', options: ['la sua', 'le sue', 'i suoi', 'il suo'], answer: 1, explanation: { bn: 'la foto → বহুবচন le foto, তাই le sue।', en: 'foto is feminine plural → le sue.' } },
    ],
    shortAnswer: [
      { id: 'st6-sa1', question: { bn: 'রাতের খাবারের পর তারা কী পান করে?', en: 'What do they drink after dinner?' }, sampleAnswerIt: 'Bevono il tè.', keywords: ['tè'] },
    ],
    practice: {
      retellPrompt: { bn: 'দাভিদের আসার গল্পটি নিজের ভাষায় বলুন।', en: 'Retell Davide’s dinner visit.' },
      completeMissing: { promptIt: 'Un ___ di mia sorella porta un ___ per la festa.', hint: { bn: 'বন্ধু + উপহার', en: 'friend + gift' }, sampleIt: 'Un amico di mia sorella porta un regalo per la festa.' },
      buildSimilar: { patternIt: 'Lavora come fotografo e fa belle foto.', prompt: { bn: 'একজন বন্ধুর পেশা নিয়ে লিখুন।', en: 'Write about a friend’s job.' }, sampleIt: 'Lavora come insegnante e legge molti libri.' },
      altEndingPrompt: { bn: 'দাভিদে বিদায় নেওয়ার সময় কী বলবে?', en: 'What will Davide say when leaving?' },
    },
  }),

  buildStory({
    id: 'st-a1-07',
    level: 'A1',
    titleIt: 'Il quartiere nuovo',
    title: { bn: 'নতুন এলাকা', en: 'The new neighbourhood' },
    topic: { bn: 'শহর ও দোকানপাট', en: 'Town & places' },
    difficulty: 1,
    grammarIds: ['ce', 'preposizioni-luogo'],
    vocabKeys: ['w:A1:il supermercato', 'w:A1:la farmacia', 'w:A1:il parco'],
    paragraphs: [
      {
        it: 'Abito in un quartiere tranquillo di Bologna. Sotto casa c’è un piccolo supermercato aperto fino alle otto.',
        tr: { bn: 'আমি বোলোনিয়ার একটি শান্ত এলাকায় থাকি। বাসার নিচেই একটি ছোট সুপারমার্কেট আছে, যা আটটা পর্যন্ত খোলা থাকে।', en: 'I live in a quiet neighbourhood in Bologna. Downstairs there is a small supermarket open until eight.' },
      },
      {
        it: 'Davanti al supermercato c’è una farmacia, e dietro la strada ci sono molti alberi e un parco verde.',
        tr: { bn: 'সুপারমার্কেটের সামনে একটি ফার্মেসি আছে, আর রাস্তার পেছনে অনেক গাছ ও একটি সবুজ পার্ক আছে।', en: 'In front of the supermarket there is a pharmacy, and behind the street there are many trees and a green park.' },
        grammarNote: { bn: "একবচন = c'è, বহুবচন (molti alberi) = ci sono।", en: "Singular uses c'è; plural (molti alberi) uses ci sono." },
      },
      {
        it: 'Non c’è molto traffico e la fermata dell’autobus è a due minuti a piedi.',
        tr: { bn: 'এখানে তেমন যানজট নেই এবং বাস স্টপেজ হেঁটে মাত্র দুই মিনিটের পথ।', en: 'There is not much traffic and the bus stop is two minutes on foot.' },
      },
    ],
    wordGlossary: [
      { word: 'quartiere', base: 'il quartiere', tr: { bn: 'এলাকা / মহল্লা', en: 'neighbourhood' }, pos: 'noun' },
      { word: 'tranquillo', base: 'tranquillo', tr: { bn: 'শান্ত', en: 'quiet' }, pos: 'adj' },
      { word: 'traffico', base: 'il traffico', tr: { bn: 'যানজট', en: 'traffic' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Ci sono molti alberi.',
        ruleTitle: { bn: "c'è এবং ci sono-এর পার্থক্য", en: "Choosing c'è vs ci sono" },
        explanation: { bn: 'একটি জিনিস থাকলে c’è, একাধিক জিনিস থাকলে ci sono।', en: 'Use c’è for singular, ci sono for plural.' },
        grammarId: 'ce',
      },
    ],
    mcq: [
      { id: 'st7-q1', prompt: { bn: 'সুপারমার্কেট কয়টা পর্যন্ত খোলা থাকে?', en: 'Until when is the supermarket open?' }, options: ['ছয়টা', 'সাতটা', 'আটটা', 'নয়টা'], answer: 2, explanation: { bn: 'aperto fino alle otto = আটটা পর্যন্ত খোলা।', en: 'Open until 8:00.' } },
    ],
    trueFalse: [
      { id: 'st7-tf1', statementIt: 'La fermata è molto lontana da casa.', statement: { bn: 'বাস স্টপ বাসা থেকে অনেক দূরে।', en: 'The bus stop is very far from home.' }, answer: false, explanation: { bn: 'মাত্র দুই মিনিটের পথ (a due minuti a piedi)।', en: 'It is only two minutes on foot.' } },
    ],
    fillBlank: [
      { id: 'st7-fb1', sentence: 'Nel parco ___ molti fiori colorati.', options: ["c'è", 'ci sono', 'è', 'ha'], answer: 1, explanation: { bn: 'molti fiori বহুবচন, তাই ci sono।', en: 'molti fiori is plural → ci sono.' } },
    ],
    shortAnswer: [
      { id: 'st7-sa1', question: { bn: 'সুপারমার্কেটের সামনে কী আছে?', en: 'What is in front of the supermarket?' }, sampleAnswerIt: "C'è una farmacia.", keywords: ['farmacia'] },
    ],
    practice: {
      retellPrompt: { bn: 'বোলোনিয়ার এই এলাকাটি সম্পর্কে ৩ বাক্যে বলুন।', en: 'Describe this Bologna neighbourhood in 3 sentences.' },
      completeMissing: { promptIt: 'Vicino a casa mia ___ un bar e ___ due negozi.', hint: { bn: "c'è এবং ci sono বসান", en: "Use c'è and ci sono" }, sampleIt: "Vicino a casa mia c'è un bar e ci sono due negozi." },
      buildSimilar: { patternIt: 'Abito in un quartiere tranquillo.', prompt: { bn: 'আপনার নিজের এলাকা কেমন তা লিখুন।', en: 'Describe your own neighbourhood.' }, sampleIt: 'Abito in un quartiere vivace ma comodo.' },
      altEndingPrompt: { bn: 'এই এলাকায় হাঁটতে কেমন লাগবে? ১ বাক্য লিখুন।', en: 'What is it like to walk in this area?' },
    },
  }),

  buildStory({
    id: 'st-a1-08',
    level: 'A1',
    titleIt: 'La routine di Matteo',
    title: { bn: 'মাত্তেওর প্রতিদিনের রুটিন', en: 'Matteo’s daily routine' },
    topic: { bn: 'দৈনন্দিন কাজ', en: 'Daily routine' },
    difficulty: 1,
    grammarIds: ['presente-are', 'struttura-frase'],
    vocabKeys: ['w:A1:lavorare', 'w:A1:la mattina', 'w:A1:la sera'],
    paragraphs: [
      {
        it: 'Matteo lavora in un ristorante vicino al centro. Ogni mattina prepara i tavoli e controlla il menù.',
        tr: { bn: 'মাত্তেও শহরের কেন্দ্রের কাছে একটি রেস্টুরেন্টে কাজ করে। প্রতিদিন সকালে সে টেবিল সাজায় এবং মেনু পরীক্ষা করে।', en: 'Matteo works in a restaurant near the centre. Every morning he sets the tables and checks the menu.' },
      },
      {
        it: 'A pranzo arrivano molti clienti. Matteo parla italiano e inglese con i turisti e ascolta le loro richieste.',
        tr: { bn: 'দুপুরে অনেক অতিথি আসেন। মাত্তেও পর্যটকদের সাথে ইতালিয়ান ও ইংরেজিতে কথা বলে এবং তাদের অনুরোধ শোনে।', en: 'At lunch many customers arrive. Matteo speaks Italian and English with tourists and listens to their requests.' },
      },
      {
        it: 'La sera torna a casa stanco, ma cucina sempre qualcosa di caldo per sé.',
        tr: { bn: 'সন্ধ্যায় সে ক্লান্ত হয়ে বাড়ি ফেরে, কিন্তু নিজের জন্য সবসময় গরম কিছু রান্না করে।', en: 'In the evening he returns home tired, but always cooks something hot for himself.' },
      },
    ],
    wordGlossary: [
      { word: 'controlla', base: 'controllare', tr: { bn: 'পরীক্ষা করে', en: 'checks' }, pos: 'verb' },
      { word: 'clienti', base: 'il cliente', tr: { bn: 'গ্রাহক / অতিথি', en: 'customers' }, pos: 'noun' },
      { word: 'richieste', base: 'la richiesta', tr: { bn: 'অনুরোধ', en: 'requests' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Cucina sempre qualcosa di caldo.',
        ruleTitle: { bn: 'ক্রিয়ার পরে sempre', en: 'Adverb sempre after the verb' },
        explanation: { bn: '-are ক্রিয়ার lui রূপ "cucina", আর "sempre" ক্রিয়ার ঠিক পরেই বসেছে।', en: 'lui form "cucina", followed directly by sempre.' },
        grammarId: 'struttura-frase',
      },
    ],
    mcq: [
      { id: 'st8-q1', prompt: { bn: 'মাত্তেও কোন দুটি ভাষায় কথা বলে?', en: 'Which two languages does Matteo speak?' }, options: ['ইতালিয়ান ও ফরাসি', 'ইতালিয়ান ও ইংরেজি', 'স্প্যানিশ ও বাংলা', 'জার্মান ও ইংরেজি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ইতালিয়ান ও ইংরেজি — পাঠ্যাংশে বলা হয়েছে: «দুপুরে অনেক অতিথি আসেন। মাত্তেও পর্যটকদের সাথে ইতালিয়ান ও ইংরেজিতে কথা বলে এবং তাদের অনুরোধ শোনে।» (parla italiano e inglese)।', en: 'Italian and English.' } },
    ],
    trueFalse: [
      { id: 'st8-tf1', statementIt: 'Matteo lavora in una banca.', statement: { bn: 'মাত্তেও একটি ব্যাংকে কাজ করে।', en: 'Matteo works in a bank.' }, answer: false, explanation: { bn: 'সে রেস্টুরেন্টে কাজ করে।', en: 'He works in a restaurant.' } },
    ],
    fillBlank: [
      { id: 'st8-fb1', sentence: 'La sera Matteo ___ a casa stanco.', options: ['torno', 'torni', 'torna', 'torniamo'], answer: 2, explanation: { bn: 'সঠিক রূপান্তর: «lui (Matteo)» থেকে পরিবর্তিত হয়ে «torna» ব্যবহৃত হয়।', en: 'lui takes -a: torna.' } },
    ],
    shortAnswer: [
      { id: 'st8-sa1', question: { bn: 'প্রতিদিন সকালে মাত্তেও কী করে?', en: 'What does Matteo do every morning?' }, sampleAnswerIt: 'Prepara i tavoli e controlla il menù.', keywords: ['prepara', 'tavoli'] },
    ],
    practice: {
      retellPrompt: { bn: 'মাত্তেওর সকাল, দুপুর ও সন্ধ্যার কাজ বলুন।', en: 'Summarise Matteo’s morning, lunch and evening.' },
      completeMissing: { promptIt: 'Ogni giorno ___ alle otto e ___ fino alle cinque.', hint: { bn: 'ইনজিয়ারে + লাভারারে', en: 'iniziare + lavorare' }, sampleIt: 'Ogni giorno inizio alle otto e lavoro fino alle cinque.' },
      buildSimilar: { patternIt: 'La sera torna a casa e cucina la cena.', prompt: { bn: 'আপনার সন্ধ্যার রুটিন লিখুন।', en: 'Write your evening routine.' }, sampleIt: 'La sera torno a casa e studio italiano.' },
      altEndingPrompt: { bn: 'রবিবার ছুটির দিনে মাত্তেও কী করতে পারে?', en: 'What might Matteo do on his day off?' },
    },
  }),

  buildStory({
    id: 'st-a1-09',
    level: 'A1',
    titleIt: 'La festa di compleanno',
    title: { bn: 'জন্মদিনের পার্টি', en: 'The birthday party' },
    topic: { bn: 'সামাজিক জীবন ও আমন্ত্রণ', en: 'Social life & invitations' },
    difficulty: 1,
    grammarIds: ['presente-are', 'ora-data'],
    vocabKeys: ['w:A1:il compleanno', 'w:A1:la festa', "w:A1:l'invito"],
    paragraphs: [
      {
        it: 'Sabato sedici maggio è il compleanno di Sara. Lei manda un invito a tutti i suoi amici.',
        tr: { bn: 'শনিবার ষোলোই মে সারার জন্মদিন। সে তার সব বন্ধুকে আমন্ত্রণ পাঠায়।', en: 'Saturday May 16th is Sara’s birthday. She sends an invitation to all her friends.' },
      },
      {
        it: 'La festa inizia alle sette di sera nel giardino di casa sua. Noi portiamo musica, succhi di frutta e una torta grande.',
        tr: { bn: 'পার্টি সন্ধ্যা সাতটায় তার বাড়ির বাগানে শুরু হয়। আমরা গান, ফলের জুস ও একটি বড় কেক নিয়ে যাই।', en: 'The party starts at seven in the evening in her garden. We bring music, fruit juices and a big cake.' },
      },
      {
        it: 'Cantiamo insieme "Tanti auguri" e scattiamo tante foto piene di gioia.',
        tr: { bn: 'আমরা একসাথে "শুভ জন্মদিন" গাই এবং আনন্দে ভরা অনেক ছবি তুলি।', en: 'Together we sing "Happy birthday" and take lots of joyful photos.' },
      },
    ],
    wordGlossary: [
      { word: 'manda', base: 'mandare', tr: { bn: 'পাঠায়', en: 'sends' }, pos: 'verb' },
      { word: 'torta', base: 'la torta', tr: { bn: 'কেক', en: 'cake' }, pos: 'noun' },
      { word: 'scattiamo', base: 'scattare', tr: { bn: 'তুলি (ছবি)', en: 'we take (photos)' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Sabato sedici maggio è il compleanno di Sara.',
        ruleTitle: { bn: 'তারিখ ও মাস ছোট হাতের অক্ষরে', en: 'Dates and lowercase months' },
        explanation: { bn: 'ইতালিয়ানে sabato ও maggio ছোট হাতের অক্ষরে লেখা হয়।', en: 'Days and months are lowercase in Italian.' },
        grammarId: 'ora-data',
      },
    ],
    mcq: [
      { id: 'st9-q1', prompt: { bn: 'সারার জন্মদিন কবে?', en: 'When is Sara’s birthday?' }, options: ['১৪ মার্চ', '১৬ মে', '১০ আগস্ট', '২০ সেপ্টেম্বর'], answer: 1, explanation: { bn: 'sedici maggio = ১৬ মে।', en: 'May 16th.' } },
    ],
    trueFalse: [
      { id: 'st9-tf1', statementIt: 'La festa è al ristorante.', statement: { bn: 'পার্টিটা রেস্টুরেন্টে হচ্ছে।', en: 'The party is at a restaurant.' }, answer: false, explanation: { bn: 'পার্টি তার বাড়ির বাগানে (nel giardino di casa sua)।', en: 'It is in her home garden.' } },
    ],
    fillBlank: [
      { id: 'st9-fb1', sentence: 'Noi ___ una torta grande per Sara.', options: ['porto', 'porti', 'portiamo', 'portano'], answer: 2, explanation: { bn: 'সঠিক রূপান্তর: «noi» থেকে পরিবর্তিত হয়ে «portiamo» ব্যবহৃত হয়।', en: 'noi takes -iamo.' } },
    ],
    shortAnswer: [
      { id: 'st9-sa1', question: { bn: 'বন্ধুরা পার্টিতে কী কী নিয়ে যায়?', en: 'What do the friends bring to the party?' }, sampleAnswerIt: 'Portano musica, succhi di frutta e una torta.', keywords: ['torta', 'musica'] },
    ],
    practice: {
      retellPrompt: { bn: 'সারার জন্মদিনের পার্টির গল্পটি সংক্ষেপে বলুন।', en: 'Summarise Sara’s birthday party.' },
      completeMissing: { promptIt: 'Il mio compleanno è il ___ ___.', hint: { bn: 'আপনার জন্মতারিখ ও মাস লিখুন', en: 'Write your birthday date' }, sampleIt: 'Il mio compleanno è il dieci ottobre.' },
      buildSimilar: { patternIt: 'La festa inizia alle sette di sera.', prompt: { bn: 'একটি অনুষ্ঠানের শুরুর সময় লিখুন।', en: 'Write when an event starts.' }, sampleIt: 'La cena inizia alle otto di sera.' },
      altEndingPrompt: { bn: 'কেক কাটার পর বন্ধুরা কী করে?', en: 'What do the friends do after cutting the cake?' },
    },
  }),

  buildStory({
    id: 'st-a1-10',
    level: 'A1',
    titleIt: 'Un pomeriggio in biblioteca',
    title: { bn: 'লাইব্রেরিতে একটি বিকেল', en: 'An afternoon at the library' },
    topic: { bn: 'পড়াশোনা ও বিশ্ববিদ্যালয়', en: 'Study & university' },
    difficulty: 1,
    grammarIds: ['presente-ere-ire', 'negazione'],
    vocabKeys: ['w:A1:la biblioteca', 'w:A1:capire', 'w:A1:leggere'],
    paragraphs: [
      {
        it: 'Ogni mercoledì pomeriggio vado in biblioteca con la mia compagna di corso, Beatrice.',
        tr: { bn: 'প্রতি বুধবার বিকেলে আমি আমার কোর্স-সঙ্গী বিয়াত্রিচের সাথে লাইব্রেরিতে যাই।', en: 'Every Wednesday afternoon I go to the library with my classmate Beatrice.' },
      },
      {
        it: 'Leggiamo un testo facile, ma io non capisco tutte le parole nuove. Beatrice spiega tutto con pazienza.',
        tr: { bn: 'আমরা একটা সহজ পাঠ পড়ি, কিন্তু আমি সব নতুন শব্দ বুঝতে পারি না। বিয়াত্রিচে ধৈর্য ধরে সব বুঝিয়ে দেয়।', en: 'We read an easy text, but I do not understand all the new words. Beatrice patiently explains everything.' },
        grammarNote: { bn: 'capire → io capisco (-isc- ক্রিয়া); non ক্রিয়ার আগে বসে।', en: 'capire takes -isc- (capisco); non precedes the verb.' },
      },
      {
        it: 'Finiamo di studiare alle sei, chiudiamo i libri e prendiamo un tè caldo insieme.',
        tr: { bn: 'আমরা ছয়টায় পড়া শেষ করি, বই বন্ধ করি এবং একসাথে এক কাপ গরম চা খাই।', en: 'We finish studying at six, close our books and have a hot tea together.' },
      },
    ],
    wordGlossary: [
      { word: 'compagna', base: 'la compagna', tr: { bn: 'সহপাঠী (মেয়ে)', en: 'classmate (f.)' }, pos: 'noun' },
      { word: 'spiega', base: 'spiegare', tr: { bn: 'ব্যাখ্যা করে / বোঝায়', en: 'explains' }, pos: 'verb' },
      { word: 'pazienza', base: 'la pazienza', tr: { bn: 'ধৈর্য', en: 'patience' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Non capisco tutte le parole nuove.',
        ruleTitle: { bn: '-isc- যুক্ত -ire ক্রিয়া', en: '-isc- type -ire verbs' },
        explanation: { bn: 'capire, finire উভয়েই io/tu/lui/loro রূপে -isc- নেয় (capisco), তবে noi-তে নয় (finiamo)।', en: 'capire and finire add -isc- in singular/3pl (capisco), not in noi (finiamo).' },
        grammarId: 'presente-ere-ire',
      },
    ],
    mcq: [
      { id: 'st10-q1', prompt: { bn: 'তারা কয়টায় পড়া শেষ করে?', en: 'What time do they finish studying?' }, options: ['চারটায়', 'পাঁচটায়', 'ছয়টায়', 'সাতটায়'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ছয়টায় — পাঠ্যাংশে বলা হয়েছে: «আমরা ছয়টায় পড়া শেষ করি, বই বন্ধ করি এবং একসাথে এক কাপ গরম চা খাই।» (Finiamo di studiare alle sei)।', en: 'At six o’clock.' } },
    ],
    trueFalse: [
      { id: 'st10-tf1', statementIt: 'Beatrice e il narratore vanno al cinema mercoledì.', statement: { bn: 'বিয়াত্রিচে ও বক্তা বুধবার সিনেমায় যায়।', en: 'They go to the cinema on Wednesday.' }, answer: false, explanation: { bn: 'তারা লাইব্রেরিতে যায় (in biblioteca)।', en: 'They go to the library.' } },
    ],
    fillBlank: [
      { id: 'st10-fb1', sentence: 'Noi ___ di studiare alle sei.', options: ['finisco', 'finisci', 'finiamo', 'finiscono'], answer: 2, explanation: { bn: 'noi রূপে -isc- থাকে না: finiamo।', en: 'noi drops -isc-: finiamo.' } },
    ],
    shortAnswer: [
      { id: 'st10-sa1', question: { bn: 'পড়া শেষে তারা কী পান করে?', en: 'What do they drink after studying?' }, sampleAnswerIt: 'Prendono un tè caldo.', keywords: ['tè'] },
    ],
    practice: {
      retellPrompt: { bn: 'বুধবার বিকেলের লাইব্রেরি অভিজ্ঞতাটি ৩ বাক্যে বলুন।', en: 'Retell the Wednesday afternoon study session.' },
      completeMissing: { promptIt: 'Quando non ___ una parola, ___ al mio amico.', hint: { bn: 'বোঝা (capire) এবং জিজ্ঞেস করা (chiedere) ক্রিয়ার সঠিক রূপ বসান', en: 'understand + ask' }, sampleIt: 'Quando non capisco una parola, chiedo al mio amico.' },
      buildSimilar: { patternIt: 'Finiamo di studiare alle sei.', prompt: { bn: 'আপনি কখন কাজ বা পড়া শেষ করেন লিখুন।', en: 'Write when you finish work or study.' }, sampleIt: 'Finisco di lavorare alle cinque.' },
      altEndingPrompt: { bn: 'চা খাওয়ার পর তারা কোথায় যায়?', en: 'Where do they go after tea?' },
    },
  }),

  buildStory({
    id: 'st-a1-11',
    level: 'A1',
    titleIt: 'La lettera di Karim',
    title: { bn: 'করিমের চিঠি', en: 'Karim’s letter' },
    topic: { bn: 'পরিবার ও যোগাযোগ', en: 'Family & communication' },
    difficulty: 2,
    grammarIds: ['presente-ere-ire', 'preposizioni'],
    vocabKeys: ['w:A1:scrivere', 'w:A1:il messaggio', "w:A1:l'email"],
    paragraphs: [
      {
        it: 'Karim vive a Milano per lavoro, ma la sua famiglia abita lontano, a Dhaka.',
        tr: { bn: 'করিম কাজের জন্য মিলানে থাকে, কিন্তু তার পরিবার দূরে ঢাকায় বাস করে।', en: 'Karim lives in Milan for work, but his family lives far away in Dhaka.' },
      },
      {
        it: 'Ogni domenica sera scrive una lunga email a sua madre e manda foto del parco e della città.',
        tr: { bn: 'প্রতি রবিবার সন্ধ্যায় সে তার মাকে একটি লম্বা ইমেইল লেখে এবং পার্ক ও শহরের ছবি পাঠায়।', en: 'Every Sunday evening he writes a long email to his mother and sends photos of the park and city.' },
      },
      {
        it: 'Scrive: "Cara mamma, sto bene. A Milano fa fresco e i colleghi sono molto gentili con me."',
        tr: { bn: 'সে লেখে: "প্রিয় আম্মু, আমি ভালো আছি। মিলানে হালকা ঠান্ডা আর সহকর্মীরা আমার প্রতি খুব ভদ্র।"', en: 'He writes: "Dear Mum, I am fine. In Milan it is cool and my colleagues are very kind to me."' },
      },
    ],
    wordGlossary: [
      { word: 'lontano', base: 'lontano', tr: { bn: 'দূরে', en: 'far away' }, pos: 'adv' },
      { word: 'lunga', base: 'lungo', tr: { bn: 'লম্বা / দীর্ঘ', en: 'long' }, pos: 'adj' },
      { word: 'colleghi', base: 'il collega', tr: { bn: 'সহকর্মীরা', en: 'colleagues' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Vive a Milano, ma la sua famiglia abita a Dhaka.',
        ruleTitle: { bn: 'শহরের আগে a', en: 'Preposition a before cities' },
        explanation: { bn: 'Milano ও Dhaka দুটোই শহর, তাই উভয়ের আগে "a" বসেছে।', en: 'Both Milano and Dhaka are cities, so both take a.' },
        grammarId: 'preposizioni',
      },
    ],
    mcq: [
      { id: 'st11-q1', prompt: { bn: 'করিম কখন মাকে ইমেইল লেখে?', en: 'When does Karim write to his mother?' }, options: ['সোমবার সকালে', 'রবিবার সন্ধ্যায়', 'শুক্রবার রাতে', 'শনিবার দুপুরে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: রবিবার সন্ধ্যায় — পাঠ্যাংশে বলা হয়েছে: «প্রতি রবিবার সন্ধ্যায় সে তার মাকে একটি লম্বা ইমেইল লেখে এবং পার্ক ও শহরের ছবি পাঠায়।» (Ogni domenica sera)।', en: 'Every Sunday evening.' } },
    ],
    trueFalse: [
      { id: 'st11-tf1', statementIt: 'A Milano fa molto caldo nell’email di Karim.', statement: { bn: 'করিমের ইমেইলে মিলানে খুব গরম পড়েছে বলে লেখা।', en: 'Karim writes it is very hot in Milan.' }, answer: false, explanation: { bn: 'সে লিখেছে A Milano fa fresco (হালকা ঠান্ডা/সতেজ আবহাওয়া)।', en: 'He writes it is cool (fa fresco).' } },
    ],
    fillBlank: [
      { id: 'st11-fb1', sentence: 'Karim scrive una email ___ sua madre.', options: ['a', 'in', 'da', 'su'], answer: 0, explanation: { bn: 'কাউকে লিখতে হলে scrivere a ব্যবহৃত হয়।', en: 'Write to someone = scrivere a.' } },
    ],
    shortAnswer: [
      { id: 'st11-sa1', question: { bn: 'করিমের সহকর্মীরা কেমন?', en: 'What are Karim’s colleagues like?' }, sampleAnswerIt: 'Sono molto gentili.', keywords: ['gentili'] },
    ],
    practice: {
      retellPrompt: { bn: 'করিমের ইমেইলের মূল কথাগুলো বলুন।', en: 'Summarise Karim’s email to his mother.' },
      completeMissing: { promptIt: 'Caro amico, ___ bene. Qui ___ bel tempo.', hint: { bn: 'থাকা (stare) এবং করা (fare) ক্রিয়ার বর্তমান রূপ বসান', en: 'stare + fare' }, sampleIt: 'Caro amico, sto bene. Qui fa bel tempo.' },
      buildSimilar: { patternIt: 'Ogni domenica scrivo un messaggio alla mia famiglia.', prompt: { bn: 'আপনি কবে পরিবার বা বন্ধুকে মেসেজ পাঠান লিখুন।', en: 'Write when you message family or friends.' }, sampleIt: 'Ogni sera mando un messaggio a mio fratello.' },
      altEndingPrompt: { bn: 'করিমের মা উত্তরে কী লিখবেন?', en: 'What will Karim’s mother write back?' },
    },
  }),

  buildStory({
    id: 'st-a1-12',
    level: 'A1',
    titleIt: 'Il viaggio a Firenze',
    title: { bn: 'ফ্লোরেন্স যাত্রা', en: 'The trip to Florence' },
    topic: { bn: 'ভ্রমণ ও ট্রেন', en: 'Travel & trains' },
    difficulty: 2,
    grammarIds: ['irregolari', 'preposizioni'],
    vocabKeys: ['w:A1:il treno', 'w:A1:il biglietto', 'w:A1:il museo'],
    paragraphs: [
      {
        it: 'Oggi è sabato. Io e Nadia andiamo a Firenze in treno per visitare un museo famoso.',
        tr: { bn: 'আজ শনিবার। আমি আর নাদিয়া একটি বিখ্যাত জাদুঘর দেখতে ট্রেনে করে ফ্লোরেন্সে যাচ্ছি।', en: 'Today is Saturday. Nadia and I are going to Florence by train to visit a famous museum.' },
        grammarNote: { bn: 'andare-এর noi রূপ "andiamo"; যানবাহনে "in treno"।', en: 'noi form of andare is "andiamo"; transport uses "in".' },
      },
      {
        it: 'Facciamo colazione presto e arriviamo alla stazione alle otto. Il treno parte dal binario sette.',
        tr: { bn: 'আমরা তাড়াতাড়ি নাস্তা করি এবং আটটায় স্টেশনে পৌঁছাই। ট্রেন সাত নম্বর প্ল্যাটফর্ম থেকে ছাড়ে।', en: 'We have breakfast early and arrive at the station at eight. The train leaves from platform seven.' },
      },
      {
        it: 'Da Firenze vengono anche i nostri amici di Pisa. Così passiamo una bella giornata insieme!',
        tr: { bn: 'পিসা থেকে আমাদের বন্ধুরাও আসছে। এভাবে আমরা একসাথে একটি সুন্দর দিন কাটাই!', en: 'Our friends from Pisa are coming too. So we spend a lovely day together!' },
      },
    ],
    wordGlossary: [
      { word: 'visitare', base: 'visitare', tr: { bn: 'ভ্রমণ/পরিদর্শন করা', en: 'to visit' }, pos: 'verb' },
      { word: 'binario', base: 'il binario', tr: { bn: 'প্ল্যাটফর্ম', en: 'platform' }, pos: 'noun' },
      { word: 'passiamo', base: 'passare', tr: { bn: 'কাটাই (সময়)', en: 'we spend (time)' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Facciamo colazione presto.',
        ruleTitle: { bn: 'fare ক্রিয়ার অনিয়মিত রূপ', en: 'Irregular verb fare' },
        explanation: { bn: 'fare-এর noi রূপ হলো facciamo (দ্বিত্ব c)।', en: 'The noi form of fare is facciamo (double c).' },
        verbForm: 'fare: noi facciamo',
        grammarId: 'irregolari',
      },
    ],
    mcq: [
      { id: 'st12-q1', prompt: { bn: 'ট্রেন কত নম্বর প্ল্যাটফর্ম থেকে ছাড়ে?', en: 'Which platform does the train leave from?' }, options: ['৩', '৫', '৭', '৯'], answer: 2, explanation: { bn: 'dal binario sette = ৭ নম্বর।', en: 'Platform 7.' } },
    ],
    trueFalse: [
      { id: 'st12-tf1', statementIt: 'Vanno a Firenze in autobus.', statement: { bn: 'তারা বাসে করে ফ্লোরেন্সে যাচ্ছে।', en: 'They go to Florence by bus.' }, answer: false, explanation: { bn: 'তারা ট্রেনে যাচ্ছে (in treno)।', en: 'They go by train.' } },
    ],
    fillBlank: [
      { id: 'st12-fb1', sentence: 'Io e Nadia ___ a Firenze insieme.', options: ['vado', 'vai', 'andiamo', 'vanno'], answer: 2, explanation: { bn: 'সঠিক রূপান্তর: «Io e Nadia = noi» থেকে পরিবর্তিত হয়ে «andiamo» ব্যবহৃত হয়।', en: 'Io e Nadia = noi → andiamo.' } },
    ],
    shortAnswer: [
      { id: 'st12-sa1', question: { bn: 'পিসা থেকে কারা আসছে?', en: 'Who is coming from Pisa?' }, sampleAnswerIt: 'I nostri amici di Pisa.', keywords: ['amici', 'pisa'] },
    ],
    practice: {
      retellPrompt: { bn: 'ফ্লোরেন্স ভ্রমণের পরিকল্পনাটি ৩ বাক্যে বলুন।', en: 'Retell the trip to Florence in 3 sentences.' },
      completeMissing: { promptIt: 'Sabato ___ a Venezia ___ treno.', hint: { bn: 'যাওয়া + অব্যয়', en: 'go + preposition' }, sampleIt: 'Sabato andiamo a Venezia in treno.' },
      buildSimilar: { patternIt: 'Il treno parte dal binario sette.', prompt: { bn: 'স্টেশনের প্ল্যাটফর্ম নিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence about a train platform.' }, sampleIt: 'Il treno per Roma parte dal binario due.' },
      altEndingPrompt: { bn: 'ফ্লোরেন্সে পৌঁছে তারা প্রথমে কী দেখবে?', en: 'What will they see first in Florence?' },
    },
  }),
];
