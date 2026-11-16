import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const A1_STORIES_2: StoryItem[] = [
  buildStory({
    id: 'st-a1-13',
    level: 'A1',
    titleIt: 'Niente caffè la sera',
    title: { bn: 'রাতে কফি নয়', en: 'No coffee in the evening' },
    topic: { bn: 'অভ্যাস ও না-বাচক বাক্য', en: 'Habits & negation' },
    difficulty: 1,
    grammarIds: ['negazione', 'struttura-frase'],
    vocabKeys: ['w:A1:mai', 'w:A1:dormire', 'w:A1:la camomilla'].filter((k) => k !== 'w:A1:la camomilla'),
    paragraphs: [
      {
        it: 'Paolo ama il caffè italiano. La mattina beve sempre un espresso dopo la colazione.',
        tr: { bn: 'পাওলো ইতালিয়ান কফি ভালোবাসে। সকালে নাস্তার পর সে সবসময় একটি এস্প্রেসো খায়।', en: 'Paolo loves Italian coffee. In the morning he always drinks an espresso after breakfast.' },
      },
      {
        it: 'Però la sera non beve mai caffè, perché dopo non riesce a dormire bene.',
        tr: { bn: 'কিন্তু সন্ধ্যায় সে কখনো কফি খায় না, কারণ পরে আর ভালো ঘুম হয় না।', en: 'However in the evening he never drinks coffee, because afterwards he cannot sleep well.' },
        grammarNote: { bn: 'দ্বিগুণ না-বাচক: non + ক্রিয়া + mai।', en: 'Double negative: non + verb + mai.' },
      },
      {
        it: 'Dopo cena preferisce una tisana calda o un bicchiere d’acqua senza zucchero.',
        tr: { bn: 'রাতের খাবারের পর সে গরম ভেষজ চা বা চিনি ছাড়া এক গ্লাস পানি পছন্দ করে।', en: 'After dinner he prefers a warm herbal tea or a glass of water without sugar.' },
      },
    ],
    wordGlossary: [
      { word: 'ama', base: 'amare', tr: { bn: 'ভালোবাসে', en: 'loves' }, pos: 'verb' },
      { word: 'tisana', base: 'la tisana', tr: { bn: 'ভেষজ চা', en: 'herbal tea' }, pos: 'noun' },
      { word: 'riesce', base: 'riuscire', tr: { bn: 'পারে / সক্ষম হয়', en: 'manages to' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'La sera non beve mai caffè.',
        ruleTitle: { bn: 'non ... mai গঠন', en: 'non ... mai construction' },
        explanation: { bn: 'ইতালিয়ানে "কখনো না" বলতে ক্রিয়ার আগে non এবং ক্রিয়ার পরে mai দিতেই হয়।', en: 'Always pair non before the verb with mai after it.' },
        grammarId: 'negazione',
      },
    ],
    mcq: [
      { id: 'st13-q1', prompt: { bn: 'কেন পাওলো সন্ধ্যায় কফি খায় না?', en: 'Why doesn’t Paolo drink coffee in the evening?' }, options: ['দাম বেশি তাই', 'ভালো ঘুমাতে পারে না তাই', 'সময় নেই তাই', 'ডাক্তার বারণ করেছে'], answer: 1, explanation: { bn: 'non riesce a dormire bene = ভালো ঘুমাতে পারে না।', en: 'Because he cannot sleep well.' } },
    ],
    trueFalse: [
      { id: 'st13-tf1', statementIt: 'Paolo beve caffè tre volte ogni notte.', statement: { bn: 'পাওলো প্রতি রাতে তিনবার কফি খায়।', en: 'Paolo drinks coffee three times every night.' }, answer: false, explanation: { bn: 'সে রাতে কখনো কফি খায় না (non beve mai)।', en: 'He never drinks coffee in the evening.' } },
    ],
    fillBlank: [
      { id: 'st13-fb1', sentence: 'Io ___ mangio ___ dolci prima di dormire.', options: ['non / mai', 'mai / non', 'non / sempre', 'sempre / non'], answer: 0, explanation: { bn: 'non ক্রিয়ার আগে, mai ক্রিয়ার পরে।', en: 'non before the verb, mai after it.' } },
    ],
    shortAnswer: [
      { id: 'st13-sa1', question: { bn: 'রাতের খাবারের পর পাওলো কী পছন্দ করে?', en: 'What does Paolo prefer after dinner?' }, sampleAnswerIt: 'Una tisana calda o un bicchiere d’acqua.', keywords: ['tisana', 'acqua'] },
    ],
    practice: {
      retellPrompt: { bn: 'পাওলোর কফি ও রাতের অভ্যাস বলুন।', en: 'Describe Paolo’s coffee habits.' },
      completeMissing: { promptIt: 'La mattina ___ sempre tè, ma la sera non ___ mai.', hint: { bn: 'পান করা ক্রিয়া', en: 'verb bere' }, sampleIt: 'La mattina bevo sempre tè, ma la sera non bevo mai.' },
      buildSimilar: { patternIt: 'Non bevo mai caffè la sera.', prompt: { bn: 'আপনি কখনো করেন না এমন একটি কাজ লিখুন।', en: 'Write something you never do.' }, sampleIt: 'Non guardo mai la TV la mattina.' },
      altEndingPrompt: { bn: 'ভালো ঘুমের জন্য আপনি কী পান করেন?', en: 'What do you drink for a good sleep?' },
    },
  }),

  buildStory({
    id: 'st-a1-14',
    level: 'A1',
    titleIt: 'Mille domande al corso',
    title: { bn: 'ক্লাসে হাজারো প্রশ্ন', en: 'A thousand questions in class' },
    topic: { bn: 'প্রশ্ন করা ও শেখা', en: 'Asking questions & learning' },
    difficulty: 1,
    grammarIds: ['domande', 'essere'],
    vocabKeys: ['w:A1:la domanda', 'w:A1:la risposta', "w:A1:l'insegnante"],
    paragraphs: [
      {
        it: 'Oggi in classe c’è una nuova insegnante. Si chiama Chiara e viene da Torino.',
        tr: { bn: 'আজ ক্লাসে একজন নতুন শিক্ষক আছেন। তাঁর নাম কিয়ারা এবং তিনি তুরিন থেকে এসেছেন।', en: 'Today in class there is a new teacher. Her name is Chiara and she comes from Turin.' },
      },
      {
        it: 'Gli studenti fanno molte domande: "Dove abita, professoressa? Quanti anni ha? Qual è il Suo piatto preferito?"',
        tr: { bn: 'ছাত্ররা অনেক প্রশ্ন করে: "ম্যাম, আপনি কোথায় থাকেন? আপনার বয়স কত? আপনার প্রিয় খাবার কী?"', en: 'The students ask many questions: "Where do you live, teacher? How old are you? What is your favourite dish?"' },
        grammarNote: { bn: 'ভদ্র Lei-তে প্রশ্ন: Dove abita? Qual è? (অ্যাপস্ট্রফি ছাড়া)।', en: 'Formal Lei questions; Qual è has no apostrophe.' },
      },
      {
        it: 'Chiara risponde con un sorriso: "Abito vicino al centro e amo la pasta alla carbonara!"',
        tr: { bn: 'কিয়ারা হেসে উত্তর দেন: "আমি শহরের কেন্দ্রের কাছে থাকি আর কার্বোনারা পাস্তা আমার খুব প্রিয়!"', en: 'Chiara answers with a smile: "I live near the centre and I love pasta alla carbonara!"' },
      },
    ],
    wordGlossary: [
      { word: 'professoressa', base: 'la professoressa', tr: { bn: 'শিক্ষিকা / প্রফেসর', en: 'female teacher / professor' }, pos: 'noun' },
      { word: 'risponde', base: 'rispondere', tr: { bn: 'উত্তর দেয়', en: 'answers' }, pos: 'verb' },
      { word: 'sorriso', base: 'il sorriso', tr: { bn: 'হাসি', en: 'smile' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Qual è il Suo piatto preferito?',
        ruleTitle: { bn: 'Qual è লেখার নিয়ম', en: 'Spelling of Qual è' },
        explanation: { bn: 'quale + è একসাথে হলে e বাদ যায় এবং কোনো অ্যাপস্ট্রফি বসে না: Qual è।', en: 'qual è drops the -e of quale without an apostrophe.' },
        grammarId: 'domande',
      },
    ],
    mcq: [
      { id: 'st14-q1', prompt: { bn: 'শিক্ষিকা কিয়ারা কোন শহর থেকে এসেছেন?', en: 'Which city is Chiara from?' }, options: ['রোম', 'তুরিন', 'ভেনিস', 'নাপোলি'], answer: 1, explanation: { bn: 'viene da Torino = তুরিন থেকে।', en: 'From Turin.' } },
    ],
    trueFalse: [
      { id: 'st14-tf1', statementIt: 'Chiara abita lontano dal centro.', statement: { bn: 'কিয়ারা শহরের কেন্দ্র থেকে দূরে থাকেন।', en: 'Chiara lives far from the centre.' }, answer: false, explanation: { bn: 'তিনি কেন্দ্রের কাছে থাকেন (vicino al centro)।', en: 'She lives near the centre.' } },
    ],
    fillBlank: [
      { id: 'st14-fb1', sentence: '___ è il tuo numero di telefono?', options: ["Qual'è", 'Qual è', 'Chi è', 'Dove è'], answer: 1, explanation: { bn: 'Qual è সঠিক বানান।', en: 'Qual è without an apostrophe.' } },
    ],
    shortAnswer: [
      { id: 'st14-sa1', question: { bn: 'শিক্ষিকার প্রিয় খাবার কী?', en: 'What is the teacher’s favourite dish?' }, sampleAnswerIt: 'La pasta alla carbonara.', keywords: ['pasta', 'carbonara'] },
    ],
    practice: {
      retellPrompt: { bn: 'ক্লাসে নতুন শিক্ষিকার সাথে কথোপকথন বলুন।', en: 'Retell the Q&A with the new teacher.' },
      completeMissing: { promptIt: '___ si chiama e ___ viene?', hint: { bn: 'কীভাবে + কোথা থেকে', en: 'how + from where' }, sampleIt: 'Come si chiama e da dove viene?' },
      buildSimilar: { patternIt: 'Qual è il tuo piatto preferito?', prompt: { bn: 'বন্ধুর প্রিয় রং বা বই জিজ্ঞেস করুন।', en: 'Ask a friend’s favourite colour or book.' }, sampleIt: 'Qual è il tuo colore preferito?' },
      altEndingPrompt: { bn: 'আপনি কিয়ারাকে আরও কী প্রশ্ন করবেন?', en: 'What else would you ask Chiara?' },
    },
  }),

  buildStory({
    id: 'st-a1-15',
    level: 'A1',
    titleIt: 'Una cartolina dall’Italia',
    title: { bn: 'ইতালি থেকে একটি পোস্টকার্ড', en: 'A postcard from Italy' },
    topic: { bn: 'ভ্রমণ ও অব্যয়', en: 'Travel & prepositions' },
    difficulty: 2,
    grammarIds: ['preposizioni', 'ora-data'],
    vocabKeys: ['w:A1:il mare', 'w:A1:il sole', 'w:A1:agosto'],
    paragraphs: [
      {
        it: 'Cara sorella, oggi è il dieci agosto e ti scrivo da Rimini, sul mare Adriatico.',
        tr: { bn: 'প্রিয় বোন, আজ দশই আগস্ট এবং আমি অ্যাড্রিয়াটিক সাগরের তীরের রিমিনি থেকে তোমাকে লিখছি।', en: 'Dear sister, today is August 10th and I am writing to you from Rimini, on the Adriatic Sea.' },
      },
      {
        it: 'Qui in Italia fa molto caldo e c’è sempre il sole. La mattina vado in spiaggia con i miei amici di Roma.',
        tr: { bn: 'এখানে ইতালিতে খুব গরম আর সবসময় রোদ থাকে। সকালে আমি রোমের বন্ধুদের সাথে সমুদ্র সৈকতে যাই।', en: 'Here in Italy it is very hot and always sunny. In the morning I go to the beach with my friends from Rome.' },
      },
      {
        it: 'Torno a casa lunedì prossimo in aereo. Porto un bel regalo per te e per mamma!',
        tr: { bn: 'আমি আগামী সোমবার বিমানে করে বাড়ি ফিরছি। তোমার আর আম্মুর জন্য সুন্দর উপহার নিয়ে আসছি!', en: 'I am returning home next Monday by plane. I am bringing a nice gift for you and Mum!' },
      },
    ],
    wordGlossary: [
      { word: 'cartolina', base: 'la cartolina', tr: { bn: 'পোস্টকার্ড', en: 'postcard' }, pos: 'noun' },
      { word: 'spiaggia', base: 'la spiaggia', tr: { bn: 'সমুদ্র সৈকত', en: 'beach' }, pos: 'noun' },
      { word: 'prossimo', base: 'prossimo', tr: { bn: 'আগামী', en: 'next' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Ti scrivo da Rimini, in Italia.',
        ruleTitle: { bn: 'শহরে da/a, দেশে in', en: 'da/a for cities, in for countries' },
        explanation: { bn: 'রিমিনি শহর থেকে তাই "da Rimini", আর দেশ বোঝাতে "in Italia"।', en: 'From a city takes da; inside a country takes in.' },
        grammarId: 'preposizioni',
      },
    ],
    mcq: [
      { id: 'st15-q1', prompt: { bn: 'বক্তা কীভাবে বাড়ি ফিরবে?', en: 'How will the writer return home?' }, options: ['ট্রেনে', 'বাসে', 'বিমানে', 'গাড়িতে'], answer: 2, explanation: { bn: 'in aereo = বিমানে।', en: 'By plane.' } },
    ],
    trueFalse: [
      { id: 'st15-tf1', statementIt: 'A Rimini piove molto in agosto.', statement: { bn: 'আগস্টে রিমিনিতে প্রচুর বৃষ্টি হয়।', en: 'It rains a lot in Rimini in August.' }, answer: false, explanation: { bn: 'সেখানে রোদ ও গরম (fa molto caldo e c’è sempre il sole)।', en: 'It is hot and sunny.' } },
    ],
    fillBlank: [
      { id: 'st15-fb1', sentence: 'Quest’estate vado ___ vacanza ___ Italia.', options: ['in / in', 'a / in', 'da / a', 'con / per'], answer: 0, explanation: { bn: 'in vacanza ও in Italia দুটোই in নেয়।', en: 'Both take in.' } },
    ],
    shortAnswer: [
      { id: 'st15-sa1', question: { bn: 'পোস্টকার্ডটি কোন তারিখে লেখা হয়েছে?', en: 'On what date is the postcard written?' }, sampleAnswerIt: 'Il dieci agosto.', keywords: ['dieci', 'agosto'] },
    ],
    practice: {
      retellPrompt: { bn: 'পোস্টকার্ডের মূল কথাগুলো বলুন।', en: 'Summarise the postcard.' },
      completeMissing: { promptIt: 'Ti scrivo ___ Milano. Torno ___ treno.', hint: { bn: 'থেকে + যানবাহন', en: 'from + transport' }, sampleIt: 'Ti scrivo da Milano. Torno in treno.' },
      buildSimilar: { patternIt: 'Porto un bel regalo per te.', prompt: { bn: 'বন্ধুর জন্য কী আনছেন লিখুন।', en: 'Write what you bring for a friend.' }, sampleIt: 'Porto dei dolci per i miei amici.' },
      altEndingPrompt: { bn: 'বন্ধুর জন্য কী উপহার হতে পারে?', en: 'What gift could it be?' },
    },
  }),

  buildStory({
    id: 'st-a1-16',
    level: 'A1',
    titleIt: 'La giacca nuova',
    title: { bn: 'নতুন জ্যাকেট', en: 'The new jacket' },
    topic: { bn: 'পোশাক ও রং', en: 'Clothes & colours' },
    difficulty: 1,
    grammarIds: ['aggettivi', 'dimostrativi'],
    vocabKeys: ['w:A1:la giacca', 'w:A1:la taglia', 'w:A1:verde'],
    paragraphs: [
      {
        it: 'Oggi fa freddo e tira vento. Sofia entra in un negozio di vestiti in centro perché vuole comprare una giacca calda.',
        tr: { bn: 'আজ ঠান্ডা ও বাতাস বইছে। সোফিয়া শহরের কেন্দ্রের একটি পোশাকের দোকানে ঢোকে কারণ সে একটি গরম জ্যাকেট কিনতে চায়।', en: 'Today it is cold and windy. Sofia enters a clothes shop in the centre because she wants to buy a warm jacket.' },
      },
      {
        it: 'Vede una giacca verde molto elegante, ma quel modello è troppo caro. Poi prova una giacca blu più economica.',
        tr: { bn: 'সে একটি খুব মার্জিত সবুজ জ্যাকেট দেখে, কিন্তু ঐ মডেলটির দাম অনেক বেশি। এরপর সে অপেক্ষাকৃত সস্তা একটি নীল জ্যাকেট পরে দেখে।', en: 'She sees a very elegant green jacket, but that model is too expensive. Then she tries on a cheaper blue jacket.' },
        grammarNote: { bn: 'la giacca স্ত্রীলিঙ্গ, তাই calda, verde, economica; কিন্তু blu অপরিবর্তিত।', en: 'calda/economica agree with giacca; blu is invariable.' },
      },
      {
        it: 'La taglia è perfetta! Sofia è contenta e paga quaranta euro in contanti.',
        tr: { bn: 'সাইজ একদম ঠিকঠাক! সোফিয়া খুশি এবং নগদে চল্লিশ ইউরো পরিশোধ করে।', en: 'The size is perfect! Sofia is happy and pays forty euros in cash.' },
      },
    ],
    wordGlossary: [
      { word: 'tira vento', base: 'tirare vento', tr: { bn: 'বাতাস বওয়া', en: 'to be windy' }, pos: 'phrase' },
      { word: 'modello', base: 'il modello', tr: { bn: 'মডেল / ডিজাইন', en: 'model / style' }, pos: 'noun' },
      { word: 'economica', base: 'economico', tr: { bn: 'সস্তা / সাশ্রয়ী', en: 'affordable / cheap' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Prova una giacca blu più economica.',
        ruleTitle: { bn: 'অপরিবর্তিত রং blu', en: 'Invariable colour blu' },
        explanation: { bn: 'economico স্ত্রীলিঙ্গে economica হয়েছে, কিন্তু blu কখনো *blua হয় না।', en: 'economico becomes economica, while blu never changes.' },
        grammarId: 'aggettivi',
      },
    ],
    mcq: [
      { id: 'st16-q1', prompt: { bn: 'সোফিয়া কোন রঙের জ্যাকেট কেনে?', en: 'Which colour jacket does Sofia buy?' }, options: ['সবুজ', 'কালো', 'নীল', 'লাল'], answer: 2, explanation: { bn: 'সে নীল জ্যাকেটটা পরে দেখে এবং কিনে নেয়।', en: 'She buys the blue jacket.' } },
    ],
    trueFalse: [
      { id: 'st16-tf1', statementIt: 'Sofia paga con la carta di credito.', statement: { bn: 'সোফিয়া ক্রেডিট কার্ডে টাকা দেয়।', en: 'Sofia pays by credit card.' }, answer: false, explanation: { bn: 'সে নগদে টাকা দেয় (in contanti)।', en: 'She pays in cash.' } },
    ],
    fillBlank: [
      { id: 'st16-fb1', sentence: 'Queste scarpe sono molto ___.', options: ['economico', 'economica', 'economici', 'economiche'], answer: 3, explanation: { bn: 'scarpe স্ত্রীলিঙ্গ বহুবচন → economiche।', en: 'scarpe is feminine plural → economiche.' } },
    ],
    shortAnswer: [
      { id: 'st16-sa1', question: { bn: 'জ্যাকেটের দাম কত ছিল?', en: 'How much did the jacket cost?' }, sampleAnswerIt: 'Quaranta euro.', keywords: ['quaranta', 'euro'] },
    ],
    practice: {
      retellPrompt: { bn: 'সোফিয়ার জ্যাকেট কেনার গল্পটি বলুন।', en: 'Retell Sofia’s jacket shopping story.' },
      completeMissing: { promptIt: 'Cerco una camicia ___ e dei pantaloni ___.', hint: { bn: 'দুটি রং বসান', en: 'Insert two colours' }, sampleIt: 'Cerco una camicia bianca e dei pantaloni neri.' },
      buildSimilar: { patternIt: 'La giacca blu costa quaranta euro.', prompt: { bn: 'আপনার পছন্দের কোনো পোশাকের দাম নিয়ে বাক্য লিখুন।', en: 'Write a price sentence about a clothing item.' }, sampleIt: 'La maglietta rossa costa quindici euro.' },
      altEndingPrompt: { bn: 'দোকান থেকে বেরিয়ে সোফিয়া কোথায় যাবে?', en: 'Where will Sofia go after leaving the shop?' },
    },
  }),

  buildStory({
    id: 'st-a1-17',
    level: 'A1',
    titleIt: 'Musica e sport nel parco',
    title: { bn: 'পার্কে গান ও খেলাধুলা', en: 'Music and sport in the park' },
    topic: { bn: 'পছন্দ ও শখ', en: 'Likes & hobbies' },
    difficulty: 1,
    grammarIds: ['piacere', 'presente-are'],
    vocabKeys: ['w:A1:il parco', 'w:A1:giocare', 'w:A1:ascoltare'],
    paragraphs: [
      {
        it: 'In primavera il parco è pieno di persone. A Luca piace correre la mattina presto.',
        tr: { bn: 'বসন্তকালে পার্ক মানুষে ভরা থাকে। সকালবেলা দৌড়াতে লুকার ভালো লাগে।', en: 'In spring the park is full of people. Luca likes running early in the morning.' },
        grammarNote: { bn: '"A Luca piace + ক্রিয়া" — একবচন ক্রিয়া রূপ।', en: '"A Luca piace + infinitive" takes singular piace.' },
      },
      {
        it: 'A Giulia invece non piace lo sport, ma le piacciono molto i concerti all’aperto.',
        tr: { bn: 'অন্যদিকে জুলিয়ার খেলাধুলা ভালো লাগে না, তবে খোলা আকাশের নিচে কনসার্ট তার খুব ভালো লাগে।', en: 'Giulia on the other hand does not like sport, but she really likes outdoor concerts.' },
      },
      {
        it: 'Nel pomeriggio ci incontriamo sotto un grande albero, suoniamo la chitarra e mangiamo un gelato.',
        tr: { bn: 'বিকেলে আমরা একটি বড় গাছের নিচে দেখা করি, গিটার বাজাই আর আইসক্রিম খাই।', en: 'In the afternoon we meet under a big tree, play guitar and eat ice cream.' },
      },
    ],
    wordGlossary: [
      { word: 'primavera', base: 'la primavera', tr: { bn: 'বসন্তকাল', en: 'spring' }, pos: 'noun' },
      { word: 'invece', base: 'invece', tr: { bn: 'বরং / অন্যদিকে', en: 'instead / on the other hand' }, pos: 'adv' },
      { word: 'all’aperto', base: 'all’aperto', tr: { bn: 'খোলা জায়গায় / বাইরে', en: 'outdoors' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Le piacciono molto i concerti.',
        ruleTitle: { bn: 'le (তার-স্ত্রী) + piacciono', en: 'le (to her) + piacciono' },
        explanation: { bn: 'জুলিয়ার (স্ত্রী) বোঝাতে le এবং i concerti বহুবচন হওয়ায় piacciono।', en: 'le refers to Giulia; i concerti is plural so piacciono.' },
        grammarId: 'piacere',
      },
    ],
    mcq: [
      { id: 'st17-q1', prompt: { bn: 'লুকার কী ভালো লাগে?', en: 'What does Luca like?' }, options: ['গিটার বাজাতে', 'সকালে দৌড়াতে', 'টিভি দেখতে', 'রান্না করতে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সকালে দৌড়াতে — পাঠ্যাংশে বলা হয়েছে: «বসন্তকালে পার্ক মানুষে ভরা থাকে। সকালবেলা দৌড়াতে লুকার ভালো লাগে।» (correre la mattina presto)।', en: 'Running early in the morning.' } },
    ],
    trueFalse: [
      { id: 'st17-tf1', statementIt: 'A Giulia piace molto lo sport.', statement: { bn: 'জুলিয়ার খেলাধুলা খুব ভালো লাগে।', en: 'Giulia really likes sport.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «অন্যদিকে জুলিয়ার খেলাধুলা ভালো লাগে না, তবে খোলা আকাশের নিচে কনসার্ট তার খুব ভালো লাগে।» (non piace lo sport)।', en: 'She does not like sport.' } },
    ],
    fillBlank: [
      { id: 'st17-fb1', sentence: 'A Marco ___ gli sport di squadra.', options: ['piace', 'piacciono', 'piaci', 'piaciamo'], answer: 1, explanation: { bn: 'gli sport বহুবচন → piacciono।', en: 'gli sport is plural → piacciono.' } },
    ],
    shortAnswer: [
      { id: 'st17-sa1', question: { bn: 'বিকেলে বন্ধুরা গাছের নিচে কী খায়?', en: 'What do the friends eat under the tree?' }, sampleAnswerIt: 'Mangiano un gelato.', keywords: ['gelato'] },
    ],
    practice: {
      retellPrompt: { bn: 'বসন্তে পার্কের এই গল্পটি ৩ বাক্যে বলুন।', en: 'Retell the spring afternoon in the park.' },
      completeMissing: { promptIt: 'A me ___ la musica e mi ___ i libri italiani.', hint: { bn: 'একবচনে piace এবং বহুবচনে piacciono ব্যবহার করুন', en: 'singular / plural' }, sampleIt: 'A me piace la musica e mi piacciono i libri italiani.' },
      buildSimilar: { patternIt: 'La domenica ci incontriamo nel parco.', prompt: { bn: 'বন্ধুদের সাথে কোথায় দেখা করেন লিখুন।', en: 'Write where you meet your friends.' }, sampleIt: 'Il sabato ci incontriamo al bar centrale.' },
      altEndingPrompt: { bn: 'কোন ফ্লেভারের জেলাটো তাদের পছন্দ?', en: 'Which gelato flavours might they choose?' },
    },
  }),

  buildStory({
    id: 'st-a1-18',
    level: 'A1',
    titleIt: 'Devo prendere l’aereo',
    title: { bn: 'বিমান ধরতে হবে', en: 'I have to catch the plane' },
    topic: { bn: 'মডাল ক্রিয়া ও বিমানবন্দর', en: 'Modal verbs & airport' },
    difficulty: 2,
    grammarIds: ['modali', 'ora-data'],
    vocabKeys: ["w:A1:l'aeroporto", "w:A1:l'aereo", 'w:A1:presto'],
    paragraphs: [
      {
        it: 'Domani devo partire presto per andare all’aeroporto. Il mio volo parte alle sette di mattina.',
        tr: { bn: 'আগামীকাল বিমানবন্দরে যাওয়ার জন্য আমাকে তাড়াতাড়ি বের হতে হবে। আমার ফ্লাইট সকাল সাতটায় ছাড়ে।', en: 'Tomorrow I have to leave early to go to the airport. My flight leaves at seven in the morning.' },
      },
      {
        it: 'Stasera non posso uscire con gli amici perché devo preparare la valigia e controllare il passaporto.',
        tr: { bn: 'আজ রাতে আমি বন্ধুদের সাথে বের হতে পারব না কারণ আমাকে স্যুটকেস গোছাতে ও পাসপোর্ট পরীক্ষা করতে হবে।', en: 'Tonight I cannot go out with friends because I have to pack my suitcase and check my passport.' },
      },
      {
        it: 'Voglio dormire alle dieci, così domani mattina non avrò sonno sul taxi.',
        tr: { bn: 'আমি দশটায় ঘুমাতে চাই, যাতে কাল সকালে ট্যাক্সিতে ঘুম না পায়।', en: 'I want to sleep at ten, so tomorrow morning I will not feel sleepy in the taxi.' },
      },
    ],
    wordGlossary: [
      { word: 'volo', base: 'il volo', tr: { bn: 'ফ্লাইট', en: 'flight' }, pos: 'noun' },
      { word: 'valigia', base: 'la valigia', tr: { bn: 'স্যুটকেস / লাগেজ', en: 'suitcase' }, pos: 'noun' },
      { word: 'passaporto', base: 'il passaporto', tr: { bn: 'পাসপোর্ট', en: 'passport' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Devo preparare la valigia.',
        ruleTitle: { bn: 'dovere + ইনফিনিটিভ', en: 'dovere + infinitive' },
        explanation: { bn: 'বাধ্যবাধকতা বোঝাতে dovere (devo) সরাসরি অপরিবর্তিত ক্রিয়া নেয়।', en: 'dovere expresses obligation and takes a bare infinitive.' },
        verbForm: 'dovere: io devo',
        grammarId: 'modali',
      },
    ],
    mcq: [
      { id: 'st18-q1', prompt: { bn: 'ফ্লাইট কয়টায় ছাড়ে?', en: 'What time does the flight leave?' }, options: ['ছয়টায়', 'সাতটায়', 'আটটায়', 'দশটায়'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সাতটায় — পাঠ্যাংশে বলা হয়েছে: «আগামীকাল বিমানবন্দরে যাওয়ার জন্য আমাকে তাড়াতাড়ি বের হতে হবে। আমার ফ্লাইট সকাল সাতটায় ছাড়ে।» (alle sette di mattina)।', en: 'At 7 AM.' } },
    ],
    trueFalse: [
      { id: 'st18-tf1', statementIt: 'Stasera esce con gli amici.', statement: { bn: 'আজ রাতে সে বন্ধুদের সাথে বের হচ্ছে।', en: 'Tonight they are going out with friends.' }, answer: false, explanation: { bn: 'non posso uscire = বের হতে পারব না।', en: 'They cannot go out.' } },
    ],
    fillBlank: [
      { id: 'st18-fb1', sentence: 'Prima di partire ___ controllare i documenti.', options: ['devo', 'posso di', 'voglio a', 'sono'], answer: 0, explanation: { bn: 'অবশ্যই করতে হবে = devo + ইনফিনিটিভ।', en: 'devo + infinitive.' } },
    ],
    shortAnswer: [
      { id: 'st18-sa1', question: { bn: 'কীভাবে সে বিমানবন্দরে যাবে?', en: 'How will they go to the airport?' }, sampleAnswerIt: 'In taxi.', keywords: ['taxi'] },
    ],
    practice: {
      retellPrompt: { bn: 'ভ্রমণের আগের রাতের প্রস্তুতি বলুন।', en: 'Retell the night before the flight.' },
      completeMissing: { promptIt: 'Domani ___ partire presto, quindi oggi non ___ uscire.', hint: { bn: 'মডাল ক্রিয়া dovere (বাধ্যবাধকতা) এবং potere (সামর্থ্য) ব্যবহার করুন', en: 'must + can' }, sampleIt: 'Domani devo partire presto, quindi oggi non posso uscire.' },
      buildSimilar: { patternIt: 'Stasera devo preparare la valigia.', prompt: { bn: 'আজ আপনাকে কী করতে হবে লিখুন।', en: 'Write something you must do today.' }, sampleIt: 'Oggi devo comprare un biglietto del treno.' },
      altEndingPrompt: { bn: 'বিমানবন্দরে পৌঁছে সে প্রথমে কী করবে?', en: 'What will they do upon arriving at the airport?' },
    },
  }),

  buildStory({
    id: 'st-a1-19',
    level: 'A1',
    titleIt: 'La casa dei nonni',
    title: { bn: 'দাদা-দাদির বাড়ি', en: 'Grandparents’ house' },
    topic: { bn: 'বাড়ি ও পরিবার', en: 'Home & family' },
    difficulty: 1,
    grammarIds: ['possessivi-a1', 'ce'],
    vocabKeys: ['w:A1:il nonno', 'w:A1:la nonna', 'w:A1:la cucina'],
    paragraphs: [
      {
        it: 'I miei nonni abitano in una casa bianca con un piccolo giardino. La loro casa è molto accogliente.',
        tr: { bn: 'আমার দাদা-দাদি একটি ছোট বাগানসহ সাদা বাড়িতে থাকেন। তাঁদের বাড়িটা খুব আরামদায়ক ও আন্তরিক।', en: 'My grandparents live in a white house with a small garden. Their house is very welcoming.' },
      },
      {
        it: 'Nella cucina della nonna c’è sempre un buon profumo di pane caldo e sugo di pomodoro.',
        tr: { bn: 'দাদির রান্নাঘরে সবসময় গরম রুটি আর টমেটো সসের সুন্দর গন্ধ থাকে।', en: 'In Grandma’s kitchen there is always a lovely smell of warm bread and tomato sauce.' },
      },
      {
        it: 'Mio nonno cura i fiori e racconta storie divertenti a tutti i nipoti.',
        tr: { bn: 'আমার দাদা ফুলের যত্ন নেন এবং সব নাতি-নাতনিকে মজার গল্প শোনান।', en: 'My grandfather tends the flowers and tells funny stories to all the grandchildren.' },
      },
    ],
    wordGlossary: [
      { word: 'accogliente', base: 'accogliente', tr: { bn: 'আন্তরিক / আরামদায়ক', en: 'welcoming / cosy' }, pos: 'adj' },
      { word: 'profumo', base: 'il profumo', tr: { bn: 'সুগন্ধ', en: 'aroma / scent' }, pos: 'noun' },
      { word: 'nipoti', base: 'il/la nipote', tr: { bn: 'নাতি-নাতনি', en: 'grandchildren' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'La loro casa è accogliente.',
        ruleTitle: { bn: 'loro সবসময় অপরিবর্তিত ও আর্টিকেলসহ', en: 'loro never changes and keeps the article' },
        explanation: { bn: 'mio/tuo/suo বদলালেও loro কখনো *lora/*lori হয় না এবং এর আগে আর্টিকেল বসেই।', en: 'Unlike mio/tuo/suo, loro never changes endings and always keeps the article.' },
        grammarId: 'possessivi-a1',
      },
    ],
    mcq: [
      { id: 'st19-q1', prompt: { bn: 'দাদা কী কাজ করেন?', en: 'What does Grandfather do?' }, options: ['গাড়ি চালান', 'ফুলের যত্ন নেন ও গল্প বলেন', 'পত্রিকা বিক্রি করেন', 'অফিসে যান'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ফুলের যত্ন নেন ও গল্প বলেন — পাঠ্যাংশে বলা হয়েছে: «আমার দাদা ফুলের যত্ন নেন এবং সব নাতি-নাতনিকে মজার গল্প শোনান।» (cura i fiori e racconta storie)।', en: 'He tends flowers and tells stories.' } },
    ],
    trueFalse: [
      { id: 'st19-tf1', statementIt: 'La casa dei nonni è rossa.', statement: { bn: 'দাদা-দাদির বাড়ির রং লাল।', en: 'The grandparents’ house is red.' }, answer: false, explanation: { bn: 'বাড়িটি সাদা (una casa bianca)।', en: 'It is white.' } },
    ],
    fillBlank: [
      { id: 'st19-fb1', sentence: '___ nonni abitano in campagna.', options: ['Miei', 'I miei', 'Il mio', 'Le mie'], answer: 1, explanation: { bn: 'বহুবচন nonni → I miei nonni।', en: 'Plural family noun requires article: I miei.' } },
    ],
    shortAnswer: [
      { id: 'st19-sa1', question: { bn: 'রান্নাঘরে কীসের গন্ধ থাকে?', en: 'What smells are in the kitchen?' }, sampleAnswerIt: 'Di pane caldo e sugo di pomodoro.', keywords: ['pane', 'pomodoro'] },
    ],
    practice: {
      retellPrompt: { bn: 'দাদা-দাদির বাড়িটি ৩ বাক্যে বর্ণনা করুন।', en: 'Describe the grandparents’ house in 3 sentences.' },
      completeMissing: { promptIt: 'La ___ casa ha un giardino e ___ cucina è grande.', hint: { bn: 'সম্বন্ধসূচক ও আর্টিকেল', en: 'possessive + article' }, sampleIt: 'La loro casa ha un giardino e la cucina è grande.' },
      buildSimilar: { patternIt: 'Nella cucina c’è un buon profumo di pane.', prompt: { bn: 'আপনার পছন্দের একটি গন্ধ নিয়ে বাক্য লিখুন।', en: 'Write a sentence about a nice smell at home.' }, sampleIt: 'In cucina c’è un buon profumo di caffè.' },
      altEndingPrompt: { bn: 'নাতি-নাতনিরা দাদাকে কোন গল্প শুনতে বলে?', en: 'What kind of story do the grandchildren ask for?' },
    },
  }),

  buildStory({
    id: 'st-a1-20',
    level: 'A1',
    titleIt: 'Al mercato del sabato',
    title: { bn: 'শনিবারের বাজারে কেনাকাটা', en: 'Shopping at the Saturday market' },
    topic: { bn: 'বাজার ও নির্দেশক', en: 'Market & demonstratives' },
    difficulty: 1,
    grammarIds: ['dimostrativi', 'aggettivi'],
    vocabKeys: ['w:A1:il mercato', 'w:A1:la mela', 'w:A1:il pomodoro'],
    paragraphs: [
      {
        it: 'Sabato mattina vado al mercato con il mio sacchetto di tela. Ci sono banchi pieni di frutta fresca.',
        tr: { bn: 'শনিবার সকালে আমি আমার কাপড়ের ব্যাগ নিয়ে বাজারে যাই। সেখানে তাজা ফলে ভরা স্টল আছে।', en: 'Saturday morning I go to the market with my cloth bag. There are stalls full of fresh fruit.' },
      },
      {
        it: 'Chiedo al venditore: "Quanto costano queste mele rosse?" — "Due euro al chilo. E vuole anche quei pomodori?"',
        tr: { bn: 'আমি বিক্রেতাকে জিজ্ঞেস করি: "এই লাল আপেলগুলোর দাম কত?" — "কেজি দুই ইউরো। আর ঐ টমেটোগুলোও কি নেবেন?"', en: 'I ask the seller: "How much are these red apples?" — "Two euros a kilo. And do you want those tomatoes too?"' },
        grammarNote: { bn: 'কাছে: queste mele; দূরে: quei pomodori।', en: 'Near: queste mele; far: quei pomodori.' },
      },
      {
        it: 'Prendo un chilo di mele, un po’ di formaggio e quel pane caldo appena sfornato.',
        tr: { bn: 'আমি এক কেজি আপেল, একটু পনির আর ঐ সদ্য বেক করা গরম রুটি নিই।', en: 'I take a kilo of apples, some cheese and that warm freshly baked bread.' },
      },
    ],
    wordGlossary: [
      { word: 'banchi', base: 'il banco', tr: { bn: 'দোকানের স্টল / কাউন্টার', en: 'market stalls' }, pos: 'noun' },
      { word: 'venditore', base: 'il venditore', tr: { bn: 'বিক্রেতা', en: 'seller' }, pos: 'noun' },
      { word: 'appena sfornato', base: 'sfornato', tr: { bn: 'সদ্য ওভেন থেকে বের করা', en: 'freshly baked' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Vuole anche quei pomodori?',
        ruleTitle: { bn: 'quello বহুবচনে quei', en: 'Plural of quel is quei' },
        explanation: { bn: 'সাধারণ পুংলিঙ্গ বহুবচনে i-এর মতো quello → quei হয় (quei pomodori)।', en: 'Before regular masculine consonants, quello pluralises to quei.' },
        grammarId: 'dimostrativi',
      },
    ],
    mcq: [
      { id: 'st20-q1', prompt: { bn: 'আপেলের দাম কত ছিল?', en: 'How much were the apples?' }, options: ['১ ইউরো', '২ ইউরো', '৩ ইউরো', '৪ ইউরো'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ২ ইউরো — পাঠ্যাংশে বলা হয়েছে: «আমি বিক্রেতাকে জিজ্ঞেস করি: "এই লাল আপেলগুলোর দাম কত?" — "কেজি দুই ইউরো। আর ঐ টমেটোগুলোও কি নেবেন?"» (Due euro al chilo)।', en: 'Two euros a kilo.' } },
    ],
    trueFalse: [
      { id: 'st20-tf1', statementIt: 'Il mercato è domenica sera.', statement: { bn: 'বাজারটি রবিবার সন্ধ্যায় বসে।', en: 'The market is on Sunday evening.' }, answer: false, explanation: { bn: 'এটি শনিবার সকালে (Sabato mattina)।', en: 'It is Saturday morning.' } },
    ],
    fillBlank: [
      { id: 'st20-fb1', sentence: 'Mi dia ___ pane caldo lì dietro.', options: ['quel', 'quello', 'quei', 'quella'], answer: 0, explanation: { bn: 'সঠিক রূপান্তর: «il pane» থেকে পরিবর্তিত হয়ে «quel pane» ব্যবহৃত হয়।', en: 'il pane pattern → quel pane.' } },
    ],
    shortAnswer: [
      { id: 'st20-sa1', question: { bn: 'বক্তা বাজার থেকে কী কী কেনেন?', en: 'What does the speaker buy at the market?' }, sampleAnswerIt: 'Mele, formaggio e pane caldo.', keywords: ['mele', 'formaggio', 'pane'] },
    ],
    practice: {
      retellPrompt: { bn: 'শনিবারের বাজারের অভিজ্ঞতা ৩ বাক্যে বলুন।', en: 'Retell the Saturday market trip.' },
      completeMissing: { promptIt: 'Quanto costano ___ banane e ___ arance?', hint: { bn: 'কাছের বহুবচনে queste এবং দূরের বহুবচনে quelle বসান', en: 'these / those' }, sampleIt: 'Quanto costano queste banane e quelle arance?' },
      buildSimilar: { patternIt: 'Prendo un chilo di mele rosse.', prompt: { bn: 'সবজি বা ফল কেনার একটি বাক্য লিখুন।', en: 'Write a sentence buying fruit or vegetables.' }, sampleIt: 'Prendo mezzo chilo di patate fresche.' },
      altEndingPrompt: { bn: 'বাড়ি ফিরে এই বাজার দিয়ে কী রান্না হবে?', en: 'What will they cook at home with these groceries?' },
    },
  }),

  buildStory({
    id: 'st-a1-21',
    level: 'A1',
    titleIt: 'L’appuntamento dal medico',
    title: { bn: 'ডাক্তারের অ্যাপয়েন্টমেন্ট', en: 'The doctor’s appointment' },
    topic: { bn: 'সময়, তারিখ ও স্বাস্থ্য', en: 'Time, dates & health' },
    difficulty: 2,
    grammarIds: ['ora-data', 'avere-espressioni'],
    vocabKeys: ["w:A1:l'appuntamento", 'w:A1:il medico', 'w:A1:la data'],
    paragraphs: [
      {
        it: 'Oggi è lunedì tre novembre. Karim ha mal di gola e chiama lo studio del medico per un appuntamento.',
        tr: { bn: 'আজ সোমবার তিনই নভেম্বর। করিমের গলা ব্যথা এবং সে অ্যাপয়েন্টমেন্টের জন্য ডাক্তারের চেম্বারে ফোন করে।', en: 'Today is Monday November 3rd. Karim has a sore throat and calls the doctor’s office for an appointment.' },
      },
      {
        it: 'La segretaria controlla il calendario: "Può venire domani, martedì quattro novembre, alle tre e mezza?"',
        tr: { bn: 'সেক্রেটারি ক্যালেন্ডার দেখে বলেন: "আপনি কি আগামীকাল মঙ্গলবার চারই নভেম্বর সাড়ে তিনটায় আসতে পারবেন?"', en: 'The secretary checks the calendar: "Can you come tomorrow, Tuesday November 4th, at three thirty?"' },
      },
      {
        it: 'Karim guarda il suo orologio e risponde: "Sì, alle quindici e trenta va benissimo. A domani!"',
        tr: { bn: 'করিম তার ঘড়ি দেখে উত্তর দেয়: "হ্যাঁ, তিনটা ত্রিশে একদম ঠিক আছে। কাল দেখা হবে!"', en: 'Karim looks at his watch and replies: "Yes, 15:30 works great. See you tomorrow!"' },
      },
    ],
    wordGlossary: [
      { word: 'mal di gola', base: 'il mal di gola', tr: { bn: 'গলা ব্যথা', en: 'sore throat' }, pos: 'noun' },
      { word: 'studio', base: 'lo studio', tr: { bn: 'চেম্বার / অফিস', en: 'practice / office' }, pos: 'noun' },
      { word: 'segretaria', base: 'la segretaria', tr: { bn: 'সেক্রেটারি', en: 'secretary' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Martedì quattro novembre, alle tre e mezza.',
        ruleTitle: { bn: 'তারিখ ও ২৪/১২ ঘণ্টার সময়', en: 'Dates and 12h/24h time' },
        explanation: { bn: 'কথা বলার সময় "alle tre e mezza" এবং আনুষ্ঠানিক সময়ে "alle quindici e trenta" দুটোই বিকেল ৩:৩০।', en: 'Spoken "alle tre e mezza" equals 24-hour "alle quindici e trenta".' },
        grammarId: 'ora-data',
      },
    ],
    mcq: [
      { id: 'st21-q1', prompt: { bn: 'অ্যাপয়েন্টমেন্ট কবে ও কয়টায়?', en: 'When is the appointment?' }, options: ['সোমবার ৩টায়', 'মঙ্গলবার সাড়ে ৩টায়', 'বুধবার ৪টায়', 'শুক্রবার ১০টায়'], answer: 1, explanation: { bn: 'সঠিক উত্তর: মঙ্গলবার সাড়ে ৩টায় — পাঠ্যাংশে বলা হয়েছে: «সেক্রেটারি ক্যালেন্ডার দেখে বলেন: "আপনি কি আগামীকাল মঙ্গলবার চারই নভেম্বর সাড়ে তিনটায় আসতে পারবেন?"» (martedì quattro novembre, alle tre e mezza)।', en: 'Tuesday November 4 at 3:30.' } },
    ],
    trueFalse: [
      { id: 'st21-tf1', statementIt: 'Karim ha mal di denti.', statement: { bn: 'করিমের দাঁত ব্যথা।', en: 'Karim has a toothache.' }, answer: false, explanation: { bn: 'তার গলা ব্যথা (mal di gola)।', en: 'He has a sore throat.' } },
    ],
    fillBlank: [
      { id: 'st21-fb1', sentence: 'L’appuntamento è ___ quattro e un quarto.', options: ['a', 'alle', 'nell’', 'sono'], answer: 1, explanation: { bn: 'নির্দিষ্ট সময়ে কাজ হলে alle বসে।', en: '"At" a time uses alle.' } },
    ],
    shortAnswer: [
      { id: 'st21-sa1', question: { bn: 'সেক্রেটারি কী পরীক্ষা করেন?', en: 'What does the secretary check?' }, sampleAnswerIt: 'Controlla il calendario.', keywords: ['calendario'] },
    ],
    practice: {
      retellPrompt: { bn: 'ফোনে অ্যাপয়েন্টমেন্ট নেওয়ার ঘটনাটি বলুন।', en: 'Retell booking the doctor’s appointment.' },
      completeMissing: { promptIt: 'Vorrei un ___ per giovedì alle ___.', hint: { bn: 'অ্যাপয়েন্টমেন্ট + সময়', en: 'appointment + time' }, sampleIt: 'Vorrei un appuntamento per giovedì alle cinque.' },
      buildSimilar: { patternIt: 'Oggi è lunedì tre novembre.', prompt: { bn: 'আজকের বার ও তারিখ ইতালিয়ানে লিখুন।', en: 'Write today’s day and date in Italian.' }, sampleIt: 'Oggi è mercoledì dodici marzo.' },
      altEndingPrompt: { bn: 'ডাক্তার করিমকে কী পরামর্শ দেবেন?', en: 'What advice might the doctor give Karim?' },
    },
  }),

  buildStory({
    id: 'st-a1-22',
    level: 'A1',
    titleIt: 'Dov’è l’ufficio postale?',
    title: { bn: 'পোস্ট অফিস কোথায়?', en: 'Where is the post office?' },
    topic: { bn: 'শহরে দিকনির্দেশনা', en: 'Directions in town' },
    difficulty: 1,
    grammarIds: ['preposizioni-luogo', 'domande'],
    vocabKeys: ['w:A1:la posta', 'w:A1:dritto', 'w:A1:a destra'],
    paragraphs: [
      {
        it: 'Nadia deve spedire una lettera importante, ma non conosce la strada. Ferma un signore davanti alla chiesa.',
        tr: { bn: 'নাদিয়াকে একটি গুরুত্বপূর্ণ চিঠি পাঠাতে হবে, কিন্তু সে রাস্তা চেনে না। গির্জার সামনে সে একজন ভদ্রলোককে থামায়।', en: 'Nadia has to send an important letter, but she does not know the way. She stops a gentleman in front of the church.' },
      },
      {
        it: '"Mi scusi, dov’è l’ufficio postale?" chiede. "È vicino al teatro, tra la banca e una libreria."',
        tr: { bn: '"মাফ করবেন, পোস্ট অফিস কোথায়?" সে জিজ্ঞেস করে। "এটি থিয়েটারের কাছে, ব্যাংক ও একটি বইয়ের দোকানের মাঝখানে।"', en: '"Excuse me, where is the post office?" she asks. "It is near the theatre, between the bank and a bookshop."' },
      },
      {
        it: '"Vada sempre dritto per duecento metri, poi giri a destra." Nadia ringrazia ed arriva subito.',
        tr: { bn: '"দুইশ মিটার সোজা যান, তারপর ডানে ঘুরুন।" নাদিয়া ধন্যবাদ জানায় এবং তাড়াতাড়ি পৌঁছে যায়।', en: '"Go straight for two hundred metres, then turn right." Nadia thanks him and arrives quickly.' },
      },
    ],
    wordGlossary: [
      { word: 'ufficio postale', base: "l'ufficio postale", tr: { bn: 'পোস্ট অফিস', en: 'post office' }, pos: 'noun' },
      { word: 'conosce', base: 'conoscere', tr: { bn: 'চেনে / জানে', en: 'knows' }, pos: 'verb' },
      { word: 'ringrazia', base: 'ringraziare', tr: { bn: 'ধন্যবাদ জানায়', en: 'thanks' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'È vicino al teatro, tra la banca e una libreria.',
        ruleTitle: { bn: 'স্থানের অব্যয়', en: 'Place prepositions' },
        explanation: { bn: 'vicino al (কাছে) এবং tra ... e ... (মাঝখানে) ব্যবহার করে নিখুঁত অবস্থান বোঝানো হয়েছে।', en: 'vicino al (near) and tra ... e ... (between) give exact location.' },
        grammarId: 'preposizioni-luogo',
      },
    ],
    mcq: [
      { id: 'st22-q1', prompt: { bn: 'পোস্ট অফিস কোন দুটির মাঝখানে?', en: 'What is the post office between?' }, options: ['পার্ক ও স্কুল', 'ব্যাংক ও বইয়ের দোকান', 'স্টেশন ও ক্যাফে', 'গির্জা ও হাসপাতাল'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ব্যাংক ও বইয়ের দোকান — পাঠ্যাংশে বলা হয়েছে: «"মাফ করবেন, পোস্ট অফিস কোথায়?" সে জিজ্ঞেস করে। "এটি থিয়েটারের কাছে, ব্যাংক ও একটি বইয়ের দোকানের মাঝখানে।"» (tra la banca e una libreria)।', en: 'Between the bank and a bookshop.' } },
    ],
    trueFalse: [
      { id: 'st22-tf1', statementIt: 'Nadia deve girare a sinistra.', statement: { bn: 'নাদিয়াকে বামে ঘুরতে হবে।', en: 'Nadia has to turn left.' }, answer: false, explanation: { bn: 'তাকে ডানে ঘুরতে হবে (giri a destra)।', en: 'She must turn right.' } },
    ],
    fillBlank: [
      { id: 'st22-fb1', sentence: 'Il bar è ___ alla stazione.', options: ['davanti', 'dietro di', 'tra', 'lontano'], answer: 0, explanation: { bn: 'davanti + alla = সামনে।', en: 'davanti alla = in front of.' } },
    ],
    shortAnswer: [
      { id: 'st22-sa1', question: { bn: 'নাদিয়া কাকে রাস্তা জিজ্ঞেস করে?', en: 'Who does Nadia ask for directions?' }, sampleAnswerIt: 'Un signore davanti alla chiesa.', keywords: ['signore', 'chiesa'] },
    ],
    practice: {
      retellPrompt: { bn: 'নাদিয়ার পোস্ট অফিস খোঁজার ঘটনাটি বলুন।', en: 'Retell how Nadia finds the post office.' },
      completeMissing: { promptIt: 'La scuola è ___ il parco e ___ alla farmacia.', hint: { bn: 'মাঝখানে + সামনে', en: 'between + in front of' }, sampleIt: 'La scuola è tra il parco e davanti alla farmacia.' },
      buildSimilar: { patternIt: 'Vada sempre dritto, poi giri a destra.', prompt: { bn: 'বাসা থেকে কাছের দোকান যাওয়ার দিকনির্দেশনা লিখুন।', en: 'Give directions to a nearby shop.' }, sampleIt: 'Esca di casa, vada dritto e giri a sinistra.' },
      altEndingPrompt: { bn: 'পোস্ট অফিসে গিয়ে নাদিয়া কী বলবে?', en: 'What will Nadia say inside the post office?' },
    },
  }),

  buildStory({
    id: 'st-a1-23',
    level: 'A1',
    titleIt: 'La mattina di Giulia',
    title: { bn: 'জুলিয়ার সকালবেলা', en: 'Giulia’s morning' },
    topic: { bn: 'প্রতিফলক ক্রিয়া ও রুটিন', en: 'Reflexive verbs & routine' },
    difficulty: 2,
    grammarIds: ['riflessivi-a1', 'struttura-frase'],
    vocabKeys: ['w:A1:la mattina', 'w:A1:la giacca', 'w:A1:presto'],
    paragraphs: [
      {
        it: 'La sveglia suona alle sei e mezza. Giulia si sveglia subito, si alza e si lava la faccia con acqua fresca.',
        tr: { bn: 'সকাল সাড়ে ছয়টায় অ্যালার্ম বাজে। জুলিয়া সাথে সাথে ঘুম থেকে জাগে, ওঠে এবং ঠান্ডা পানি দিয়ে মুখ ধোয়।', en: 'The alarm rings at six thirty. Giulia wakes up right away, gets up and washes her face with cool water.' },
        grammarNote: { bn: 'lei-এর সাথে প্রতিফলক সর্বনাম si: si sveglia, si alza, si lava।', en: 'Reflexive pronoun si for lei: si sveglia, si alza, si lava.' },
      },
      {
        it: 'Poi si veste velocemente: mette una camicia bianca e i pantaloni neri. Si guarda allo specchio e sorride.',
        tr: { bn: 'তারপর সে দ্রুত পোশাক পরে: একটি সাদা শার্ট ও কালো প্যান্ট পরে। আয়নায় নিজেকে দেখে হাসে।', en: 'Then she gets dressed quickly: she puts on a white shirt and black trousers. She looks at herself in the mirror and smiles.' },
      },
      {
        it: 'Prima di uscire saluta il suo gatto e prende l’autobus delle sette e venti.',
        tr: { bn: 'বের হওয়ার আগে সে তার বিড়ালকে বিদায় জানায় এবং সাতটা বিশের বাস ধরে।', en: 'Before leaving she says goodbye to her cat and catches the 7:20 bus.' },
      },
    ],
    wordGlossary: [
      { word: 'sveglia', base: 'la sveglia', tr: { bn: 'অ্যালার্ম ঘড়ি', en: 'alarm clock' }, pos: 'noun' },
      { word: 'si veste', base: 'vestirsi', tr: { bn: 'পোশাক পরে', en: 'gets dressed' }, pos: 'verb' },
      { word: 'specchio', base: 'lo specchio', tr: { bn: 'আয়না', en: 'mirror' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Giulia si sveglia subito e si alza.',
        ruleTitle: { bn: 'তৃতীয় পুরুষে প্রতিফলক si', en: 'Reflexive si for third person' },
        explanation: { bn: 'svegliarsi, alzarsi, lavarsi, vestirsi ক্রিয়ার আগে si বসেছে কারণ কাজটি জুলিয়া নিজের জন্য করছে।', en: 'si precedes each reflexive verb because Giulia performs the actions on herself.' },
        grammarId: 'riflessivi-a1',
      },
    ],
    mcq: [
      { id: 'st23-q1', prompt: { bn: 'অ্যালার্ম কয়টায় বাজে?', en: 'What time does the alarm ring?' }, options: ['৬:০০', '৬:৩০', '৭:০০', '৭:২০'], answer: 1, explanation: { bn: 'alle sei e mezza = ৬:৩০।', en: 'At 6:30.' } },
    ],
    trueFalse: [
      { id: 'st23-tf1', statementIt: 'Giulia prende il treno delle sette e venti.', statement: { bn: 'জুলিয়া সাতটা বিশের ট্রেন ধরে।', en: 'Giulia catches the 7:20 train.' }, answer: false, explanation: { bn: 'সে বাস ধরে (l’autobus)।', en: 'She catches the bus.' } },
    ],
    fillBlank: [
      { id: 'st23-fb1', sentence: 'La mattina io ___ alzo alle sette.', options: ['mi', 'ti', 'si', 'ci'], answer: 0, explanation: { bn: 'সঠিক রূপান্তর: «io» থেকে পরিবর্তিত হয়ে «mi alzo» ব্যবহৃত হয়।', en: 'io takes mi.' } },
    ],
    shortAnswer: [
      { id: 'st23-sa1', question: { bn: 'জুলিয়া কী রঙের শার্ট ও প্যান্ট পরে?', en: 'What colour shirt and trousers does Giulia wear?' }, sampleAnswerIt: 'Una camicia bianca e i pantaloni neri.', keywords: ['bianca', 'neri'] },
    ],
    practice: {
      retellPrompt: { bn: 'জুলিয়ার সকালের কাজগুলো পরপর বলুন।', en: 'Retell Giulia’s morning steps in order.' },
      completeMissing: { promptIt: 'Mi ___ alle sette, mi ___ la faccia e poi ___ vesto.', hint: { bn: 'জাগা, ধোয়া, পোশাক পরা', en: 'wake, wash, dress' }, sampleIt: 'Mi sveglio alle sette, mi lavo la faccia e poi mi vesto.' },
      buildSimilar: { patternIt: 'Prendo l’autobus delle sette e venti.', prompt: { bn: 'আপনি কয়টায় বাস বা ট্রেন ধরেন লিখুন।', en: 'Write what time you catch a bus or train.' }, sampleIt: 'Prendo il treno delle otto e dieci.' },
      altEndingPrompt: { bn: 'বাসে বসে জুলিয়া কী করে?', en: 'What does Giulia do on the bus?' },
    },
  }),

  buildStory({
    id: 'st-a1-24',
    level: 'A1',
    titleIt: 'Una giornata di pioggia',
    title: { bn: 'বৃষ্টির একটি দিন', en: 'A rainy day' },
    topic: { bn: 'আবহাওয়া ও avere অভিব্যক্তি', en: 'Weather & avere expressions' },
    difficulty: 2,
    grammarIds: ['avere-espressioni', 'essere'],
    vocabKeys: ['w:A1:la pioggia', 'w:A1:freddo', 'w:A1:la paura'],
    paragraphs: [
      {
        it: 'Oggi c’è il cielo grigio e piove forte. Io e mio fratello restiamo in casa perché abbiamo freddo.',
        tr: { bn: 'আজ আকাশ ধূসর আর জোরে বৃষ্টি পড়ছে। আমি আর আমার ভাই বাড়িতেই থাকছি কারণ আমাদের ঠান্ডা লাগছে।', en: 'Today the sky is grey and it is raining heavily. My brother and I stay home because we feel cold.' },
        grammarNote: { bn: '"abbiamo freddo" = আমাদের ঠান্ডা লাগছে (essere নয়, avere)।', en: '"abbiamo freddo" uses avere, not essere.' },
      },
      {
        it: 'Il nostro gattino ha paura del tuono e si nasconde sotto il letto, ma mio fratello lo calma subito.',
        tr: { bn: 'আমাদের ছোট বিড়ালটি বজ্রপাতের ভয় পেয়ে বিছানার নিচে লুকিয়ে পড়ে, কিন্তু আমার ভাই সাথে সাথে ওকে শান্ত করে।', en: 'Our little kitten is afraid of thunder and hides under the bed, but my brother calms it right away.' },
      },
      {
        it: 'Verso le cinque abbiamo fame! Prepariamo cioccolata calda e biscotti e siamo molto contenti.',
        tr: { bn: 'পাঁচটার দিকে আমাদের খিদে পায়! আমরা গরম চকলেট ও বিস্কুট তৈরি করি এবং খুব খুশি হই।', en: 'Around five o’clock we get hungry! We make hot chocolate and biscuits and are very happy.' },
      },
    ],
    wordGlossary: [
      { word: 'tuono', base: 'il tuono', tr: { bn: 'বজ্রপাত', en: 'thunder' }, pos: 'noun' },
      { word: 'si nasconde', base: 'nascondersi', tr: { bn: 'লুকিয়ে পড়ে', en: 'hides' }, pos: 'verb' },
      { word: 'cioccolata calda', base: 'la cioccolata calda', tr: { bn: 'হট চকলেট', en: 'hot chocolate' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      {
        sentenceIt: 'Il gattino ha paura e noi abbiamo fame.',
        ruleTitle: { bn: 'avere + অনুভূতি', en: 'avere + feelings' },
        explanation: { bn: 'ঠান্ডা, ভয় ও খিদে — তিনটিই avere দিয়ে প্রকাশিত হয়েছে (abbiamo freddo, ha paura, abbiamo fame)।', en: 'Cold, fear, and hunger all use avere (freddo, paura, fame).' },
        grammarId: 'avere-espressioni',
      },
    ],
    mcq: [
      { id: 'st24-q1', prompt: { bn: 'বিড়ালটি কোথায় লুকিয়ে পড়ে?', en: 'Where does the kitten hide?' }, options: ['টেবিলের নিচে', 'বিছানার নিচে', 'দরজার পেছনে', 'ব্যাগটার ভেতরে'], answer: 1, explanation: { bn: 'sotto il letto = বিছানার নিচে।', en: 'Under the bed.' } },
    ],
    trueFalse: [
      { id: 'st24-tf1', statementIt: 'Oggi splende il sole e fa caldo.', statement: { bn: 'আজ সূর্য জ্বলছে ও গরম পড়েছে।', en: 'Today the sun is shining and it is hot.' }, answer: false, explanation: { bn: 'আজ বৃষ্টি পড়ছে ও ঠান্ডা (piove forte / abbiamo freddo)।', en: 'It is raining and cold.' } },
    ],
    fillBlank: [
      { id: 'st24-fb1', sentence: 'Quando ___ fame, cuciniamo la pasta.', options: ['siamo', 'abbiamo', 'facciamo', 'stiamo'], answer: 1, explanation: { bn: 'খিদে পাওয়া = avere fame → abbiamo fame।', en: 'To be hungry = avere fame.' } },
    ],
    shortAnswer: [
      { id: 'st24-sa1', question: { bn: 'পাঁচটায় তারা কী তৈরি করে?', en: 'What do they make at five o’clock?' }, sampleAnswerIt: 'Cioccolata calda e biscotti.', keywords: ['cioccolata', 'biscotti'] },
    ],
    practice: {
      retellPrompt: { bn: 'বৃষ্টির দিনের গল্পটি নিজের ভাষায় বলুন।', en: 'Retell the rainy day story.' },
      completeMissing: { promptIt: 'Oggi piove: io ___ freddo e il gatto ___ paura.', hint: { bn: 'avere ক্রিয়া', en: 'verb avere' }, sampleIt: 'Oggi piove: io ho freddo e il gatto ha paura.' },
      buildSimilar: { patternIt: 'Quando fa freddo bevo una cioccolata calda.', prompt: { bn: 'বৃষ্টির দিনে আপনি কী খান বা করেন লিখুন।', en: 'Write what you eat or do on a rainy day.' }, sampleIt: 'Quando piove leggo un libro e bevo il tè.' },
      altEndingPrompt: { bn: 'বৃষ্টি থামলে তারা কী করতে পারে?', en: 'What might they do once the rain stops?' },
    },
  }),
];
