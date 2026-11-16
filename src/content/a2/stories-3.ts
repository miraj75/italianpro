import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const A2_STORIES_3: StoryItem[] = [
  buildStory({
    id: 'st-a2-23', level: 'A2', titleIt: 'Il quartiere che preferisco',
    title: { bn: 'আমার প্রিয় পাড়া', en: 'The neighbourhood I like best' },
    topic: { bn: 'সম্বন্ধবাচক (che, dove, in cui)', en: 'Basic relative clauses' },
    grammarIds: ['pronomi-relativi-a2', 'aggettivi'],
    vocabKeys: ['w:A2:il condominio', 'w:A2:la libreria', 'w:A2:tranquillo'],
    paragraphs: [
      { it: 'Il quartiere in cui abito si chiama San Salvario ed è molto vivace. La casa dove vivo ha un cortile silenzioso con molti fiori.', tr: { bn: 'আমি যে পাড়ায় থাকি তার নাম সান সালভারিও এবং এটি খুব প্রাণবন্ত। আমি যে বাড়িতে থাকি সেখানে ফুল ভরা একটা নীরব উঠান আছে।', en: 'The neighbourhood I live in is called San Salvario and is very lively. The building where I live has a quiet courtyard with many flowers.' } },
      { it: 'La libreria che visito ogni settimana si trova proprio all’angolo. Il proprietario è una persona con cui si può parlare di tutto.', tr: { bn: 'যে বইয়ের দোকানটায় আমি প্রতি সপ্তাহে যাই তা ঠিক মোড়েই অবস্থিত। মালিক এমন একজন মানুষ যাঁর সাথে সব বিষয়ে কথা বলা যায়।', en: 'The bookshop I visit every week is right on the corner. The owner is someone with whom you can talk about anything.' } },
      { it: 'C’è anche un mercato all’aperto dove i vicini comprano pane caldo, frutta fresca e legumi.', tr: { bn: 'সেখানে একটি খোলা বাজারও আছে যেখানে প্রতিবেশীরা গরম রুটি, তাজা ফল ও ডাল কিনতে পারে।', en: 'There is also an open-air market where neighbours buy warm bread, fresh fruit, and pulses.' } },
    ],
    wordGlossary: [
      { word: 'all’angolo', base: 'l’angolo', tr: { bn: 'মোড়ে / কোণায়', en: 'on the corner' }, pos: 'phrase' },
      { word: 'all’aperto', base: 'aperto', tr: { bn: 'খোলা আকাশের নিচে', en: 'open-air' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Il quartiere in cui abito / La persona con cui parlo.', ruleTitle: { bn: 'che বনাম অব্যয় + cui', en: 'che vs preposition + cui' }, explanation: { bn: 'সরাসরি কর্ম/কর্তা che; কোনো অব্যয়ের পর সবসময় cui (কখনো che নয়)।', en: 'Use che for direct subjects/objects; always use cui after prepositions.' }, grammarId: 'pronomi-relativi-a2' },
    ],
    mcq: [
      { id: 'st2-23-q1', prompt: { bn: 'পাড়াটির বৈশিষ্ট্য কেমন?', en: 'What is the neighbourhood like?' }, options: ['বিপজ্জনক', 'খুব প্রাণবন্ত', 'পুরোপুরি ফাঁকা', 'ব্যয়বহুল'], answer: 1, explanation: { bn: 'molto vivace = খুব প্রাণবন্ত।', en: 'Very lively.' } },
    ],
    trueFalse: [
      { id: 'st2-23-tf1', statementIt: 'Il quartiere non ha nessun mercato.', statement: { bn: 'পাড়াটিতে কোনো বাজার নেই।', en: 'The neighbourhood has no market.' }, answer: false, explanation: { bn: 'সেখানে একটি খোলা বাজার আছে (un mercato all’aperto)।', en: 'There is an open-air market.' } },
    ],
    fillBlank: [
      { id: 'st2-23-fb1', sentence: 'Ecco il collega ___ lavoro ogni mattina.', options: ['che', 'con che', 'con cui', 'dove'], answer: 2, explanation: { bn: 'অব্যয় con-এর পর cui বসে: con cui।', en: 'Preposition con requires cui.' } },
    ],
    shortAnswer: [
      { id: 'st2-23-sa1', question: { bn: 'বইয়ের দোকানটি কোথায় অবস্থিত?', en: 'Where is the bookshop located?' }, sampleAnswerIt: 'Si trova proprio all’angolo.', keywords: ['angolo'] },
    ],
    practice: {
      retellPrompt: { bn: 'che, dove, in cui ব্যবহার করে আপনার এলাকার বর্ণনা ৩ বাক্যে লিখুন।', en: 'Describe your area in 3 sentences using che, dove, and in cui.' },
      completeMissing: { promptIt: 'La città ___ sono nato è sul mare.', hint: { bn: 'স্থান নির্দেশক সম্বন্ধবাচক সর্বনাম dove অথবা in cui বসান', en: 'place relative' }, sampleIt: 'La città in cui sono nato è sul mare.' },
      buildSimilar: { patternIt: 'Il libro che leggo è molto interessante.', prompt: { bn: 'che দিয়ে একটি বাক্য লিখুন।', en: 'Write a relative sentence with che.' }, sampleIt: 'Il bar che preferisco è vicino alla piazza.' },
      altEndingPrompt: { bn: 'শনিবার সকালে এই পাড়ায় কী করা যায় লিখুন।', en: 'What can you do in this neighbourhood on Saturday morning?' },
    },
  }),

  buildStory({
    id: 'st-a2-24', level: 'A2', titleIt: 'Una sera silenziosa in ufficio',
    title: { bn: 'অফিসে নীরব এক সন্ধ্যা', en: 'A quiet evening at the office' },
    topic: { bn: 'অনির্দিষ্ট শব্দ ও দ্বৈত না-বাচক', en: 'Indefinites & double negatives' },
    grammarIds: ['indefiniti-a2', 'doppia-negazione'],
    vocabKeys: ['w:A2:lo straordinario', 'w:A2:spegnere', 'w:A2:la password'],
    paragraphs: [
      { it: 'Venerdì alle sette di sera non c’era più nessuno in ufficio: tutti i colleghi erano già usciti per il fine settimana.', tr: { bn: 'শুক্রবার সন্ধ্যা সাতটায় অফিসে আর কেউ ছিল না: সব সহকর্মী ইতিমধ্যেই সপ্তাহান্তের জন্য বেরিয়ে গেছে।', en: 'On Friday at 7 PM nobody was left in the office: all colleagues had already left for the weekend.' } },
      { it: 'Io sono rimasto qualche minuto in più per finire alcuni controlli sul progetto e non lasciare niente in sospeso.', tr: { bn: 'প্রকল্পের কিছু পরীক্ষা শেষ করতে এবং কোনো কিছু বাকি না রাখতে আমি আরও কয়েক মিনিট থাকলাম।', en: 'I stayed a few extra minutes to finish some checks on the project and leave nothing pending.' } },
      { it: 'Prima di chiudere la porta, ho spento tutte le luci: non avevo dimenticato nessun documento sulla scrivania.', tr: { bn: 'দরজা বন্ধ করার আগে সব আলো নিভিয়ে দিলাম: ডেস্কের ওপর কোনো নথিই ফেলে আসিনি।', en: 'Before locking up, I turned off all lights: I hadn’t left any document on the desk.' } },
    ],
    wordGlossary: [
      { word: 'in sospeso', base: 'sospeso', tr: { bn: 'অমীমাংসিত / বাকি', en: 'pending' }, pos: 'phrase' },
      { word: 'controlli', base: 'il controllo', tr: { bn: 'পরীক্ষা / যাচাই', en: 'checks' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Non c’era più nessuno / Qualche minuto / Alcuni controlli.', ruleTitle: { bn: 'দ্বৈত না-বাচক ও qualche/alcuni', en: 'Double negatives & qualche vs alcuni' }, explanation: { bn: 'non + verb + più nessuno; qualche + একবচন minuto; alcuni + বহুবচন controlli।', en: 'Double negatives use non + negative word; qualche is singular, alcuni plural.' }, grammarId: 'doppia-negazione' },
    ],
    mcq: [
      { id: 'st2-24-q1', prompt: { bn: 'সাতটায় অফিসে কতজন সহকর্মী ছিল?', en: 'How many colleagues were in the office at 7 PM?' }, options: ['অনেক', 'দুজন', 'কেউ না', 'বস'], answer: 2, explanation: { bn: 'non c’era più nessuno = কেউ ছিল না।', en: 'Nobody was there.' } },
    ],
    trueFalse: [
      { id: 'st2-24-tf1', statementIt: 'Ha lasciato le luci accese e molti moduli sul tavolo.', statement: { bn: 'সে আলো জ্বালিয়ে ও অনেক ফর্ম টেবিলে ফেলে রেখে গেছে।', en: 'He left lights on and forms on the desk.' }, answer: false, explanation: { bn: 'সব আলো নিভিয়েছে এবং কোনো নথি ফেলে আসেনি।', en: 'He turned off all lights and left no documents.' } },
    ],
    fillBlank: [
      { id: 'st2-24-fb1', sentence: 'Oggi ___ ho visto ___ davanti alla banca.', options: ['non / nessuno', 'non / qualcuno', 'mai / nessuno', 'non / ogni'], answer: 0, explanation: { bn: 'non … nessuno = কাউকে না।', en: 'Double negative: non … nessuno.' } },
    ],
    shortAnswer: [
      { id: 'st2-24-sa1', question: { bn: 'দরজা বন্ধ করার আগে সে কী করেছে?', en: 'What did he do before closing the door?' }, sampleAnswerIt: 'Ha spento tutte le luci.', keywords: ['spento', 'luci'] },
    ],
    practice: {
      retellPrompt: { bn: 'qualche, alcuni এবং non… niente দিয়ে ৩টি বাক্য লিখুন।', en: 'Write 3 sentences using qualche, alcuni, and non… niente.' },
      completeMissing: { promptIt: 'Non voglio ___ di dolce dopo cena.', hint: { bn: 'নেতিবাচক বাক্যে কিছু না অর্থে niente ব্যবহার করুন', en: 'nothing' }, sampleIt: 'Non voglio niente di dolce dopo cena.' },
      buildSimilar: { patternIt: 'Tutti i giorni controlliamo le mail.', prompt: { bn: 'ogni বা tutti দিয়ে প্রতিদিনের একটি অভ্যাসের কথা লিখুন।', en: 'Write a daily habit using ogni or tutti.' }, sampleIt: 'Ogni sera spengo il computer prima di dormire.' },
      altEndingPrompt: { bn: 'অফিস থেকে বের হয়ে বাসায় গিয়ে সে কী করবে লিখুন।', en: 'What will he do after leaving the office?' },
    },
  }),

  buildStory({
    id: 'st-a2-25', level: 'A2', titleIt: 'La nuova collega spiega chiaramente',
    title: { bn: 'নতুন সহকর্মী খুব স্পষ্টভাবে বোঝান', en: 'The new colleague explains clearly' },
    topic: { bn: 'ক্রিয়াবিশেষণ (-mente ও সময়)', en: 'Adverbs of manner & time' },
    grammarIds: ['avverbi-a2', 'passato-prossimo'],
    vocabKeys: ['w:A2:spiegare', 'w:A2:velocemente', 'w:A2:lentamente'],
    paragraphs: [
      { it: 'Abbiamo appena assunto una nuova collega molto preparata. Si chiama Chiara e lavora sempre attentamente ma rapidamente.', tr: { bn: 'আমরা এইমাত্র একজন খুবই দক্ষ নতুন সহকর্মী নিয়োগ দিয়েছি। তার নাম কিয়ারা এবং সে সবসময় মনোযোগী কিন্তু দ্রুত কাজ করে।', en: 'We have just hired a very capable new colleague. Her name is Chiara and she always works carefully yet quickly.' } },
      { it: 'Quando qualcuno non capisce un programma nuovo, lei risponde gentilmente e spiega ogni passaggio lentamente e chiaramente.', tr: { bn: 'কেউ নতুন সফটওয়্যার না বুঝলে সে ভদ্রভাবে উত্তর দেয় এবং প্রতিটি ধাপ ধীরে ও স্পষ্টভাবে বুঝিয়ে দেয়।', en: 'When someone doesn’t understand a new programme, she answers kindly and explains every step slowly and clearly.' } },
      { it: 'Fortunatamente grazie a lei abbiamo finito il lavoro della settimana facilmente e senza stress.', tr: { bn: 'সৌভাগ্যবশত তার কারণে আমরা সপ্তাহের কাজ সহজেই এবং কোনো চাপ ছাড়াই শেষ করেছি।', en: 'Fortunately thanks to her we finished the week’s work easily and without stress.' } },
    ],
    wordGlossary: [
      { word: 'preparata', base: 'preparato', tr: { bn: 'দক্ষ / প্রস্তুত', en: 'capable / well-prepared' }, pos: 'adj' },
      { word: 'passaggio', base: 'il passaggio', tr: { bn: 'ধাপ', en: 'step' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Gentilmente, facilmente, rapidamente, chiaramente.', ruleTitle: { bn: '-mente ক্রিয়াবিশেষণ', en: 'Manner adverbs in -mente' }, explanation: { bn: 'gentile ও facile-এর -le-এর পরে e বাদ দিয়ে -mente যোগ হয়েছে।', en: 'Drop final -e after -l/-r: gentilmente, facilmente.' }, grammarId: 'avverbi-a2' },
    ],
    mcq: [
      { id: 'st2-25-q1', prompt: { bn: 'কিয়ারা কীভাবে ধাপগুলো বোঝায়?', en: 'How does Chiara explain the steps?' }, options: ['অস্পষ্টভাবে', 'ধীরে ও স্পষ্টভাবে', 'রেগে গিয়ে', 'দ্রুত ও অমনোযোগী হয়ে'], answer: 1, explanation: { bn: 'lentamente e chiaramente = ধীরে ও স্পষ্টভাবে।', en: 'Slowly and clearly.' } },
    ],
    trueFalse: [
      { id: 'st2-25-tf1', statementIt: 'Chiara lavora in azienda da cinque anni.', statement: { bn: 'কিয়ারা পাঁচ বছর ধরে এই কোম্পানিতে কাজ করে।', en: 'Chiara has worked at the company for five years.' }, answer: false, explanation: { bn: 'এইমাত্র নিয়োগ হয়েছে (appena assunto)।', en: 'She was just hired.' } },
    ],
    fillBlank: [
      { id: 'st2-25-fb1', sentence: 'Ho trovato ___ la strada grazie alla cartina.', options: ['facile', 'facilmente', 'facilemente', 'facilità'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «facile» থেকে পরিবর্তিত হয়ে «facilmente» ব্যবহৃত হয়।', en: 'Adverb of facile is facilmente.' } },
    ],
    shortAnswer: [
      { id: 'st2-25-sa1', question: { bn: 'তার কারণে সপ্তাহের কাজ কীভাবে শেষ হয়েছে?', en: 'How was the week’s work finished thanks to her?' }, sampleAnswerIt: 'L’hanno finito facilmente e senza stress.', keywords: ['facilmente', 'stress'] },
    ],
    practice: {
      retellPrompt: { bn: 'chiaramente, facilmente, velocemente ব্যবহার করে ৩ বাক্য লিখুন।', en: 'Write 3 sentences using chiaramente, facilmente, and velocemente.' },
      completeMissing: { promptIt: 'Abbiamo ___ ricevuto il pacco dal corriere.', hint: { bn: 'সময়বাচক ক্রিয়াবিশেষণ appena (মাত্রই) বা già (ইতিমধ্যে) বসান', en: 'time adverb' }, sampleIt: 'Abbiamo appena ricevuto il pacco dal corriere.' },
      buildSimilar: { patternIt: 'Fortunatamente il treno è arrivato in orario.', prompt: { bn: 'fortunatamente বা purtroppo দিয়ে একটি বাক্য লিখুন।', en: 'Start a sentence with fortunatamente or purtroppo.' }, sampleIt: 'Purtroppo oggi fa molto vento.' },
      altEndingPrompt: { bn: 'অফিসের সবাই মিলে কিয়ারাকে কীভাবে স্বাগত জানাতে পারে লিখুন।', en: 'How might the team celebrate welcoming Chiara?' },
    },
  }),

  buildStory({
    id: 'st-a2-26', level: 'A2', titleIt: 'La patente e le prime guide',
    title: { bn: 'ড্রাইভিং লাইসেন্স ও প্রথম গাড়ি চালানো', en: 'The driving licence and first drives' },
    topic: { bn: 'ক্রিয়ার পর a বনাম di', en: 'Verbs + a or di' },
    grammarIds: ['preposizioni-verbi', 'passato-prossimo'],
    vocabKeys: ['w:A2:la patente', 'w:A2:provare a', 'w:A2:riuscire a'],
    paragraphs: [
      { it: 'Sei mesi fa ho deciso di prendere la patente di guida. All’inizio avevo paura del traffico, ma ho cominciato a studiare le regole ogni sera.', tr: { bn: 'ছয় মাস আগে আমি ড্রাইভিং লাইসেন্স নেওয়ার সিদ্ধান্ত নিলাম। শুরুতে যানজটের ভয় পেতাম, কিন্তু প্রতিদিন সন্ধ্যায় নিয়মগুলো পড়তে শুরু করলাম।', en: 'Six months ago I decided to get my driving licence. At first I was scared of traffic, yet I started studying the rules every evening.' } },
      { it: 'Dopo l’esame di teoria, ho iniziato a fare pratica con un istruttore paziente. Non dimenticavo mai di guardare gli specchietti!', tr: { bn: 'লিখিত পরীক্ষার পর একজন ধৈর্যশীল প্রশিক্ষকের সাথে প্র্যাকটিস শুরু করলাম। কখনোই আয়না দেখতে ভুলতাম না!', en: 'After the theory test, I started practising with a patient instructor. I never forgot to check the mirrors!' } },
      { it: 'Ieri sono finalmente riuscito a superare l’esame pratico e spero di comprare una piccola macchina usata fra un mese.', tr: { bn: 'গতকাল অবশেষে ব্যবহারিক পরীক্ষায় পাস করতে পেরেছি এবং আশা করি এক মাস পর একটা ছোট ব্যবহৃত গাড়ি কিনব।', en: 'Yesterday I finally managed to pass the practical test and I hope to buy a small used car in a month.' } },
    ],
    wordGlossary: [
      { word: 'istruttore', base: 'l’istruttore', tr: { bn: 'প্রশিক্ষক', en: 'instructor' }, pos: 'noun' },
      { word: 'specchietti', base: 'lo specchietto', tr: { bn: 'গাড়ির সাইড/রিয়ার মিরর', en: 'car mirrors' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Deciso di / cominciato a / riuscito a / spero di.', ruleTitle: { bn: 'ক্রিয়ার সাথে অব্যয় (a বনাম di)', en: 'Verbs taking a vs di' }, explanation: { bn: 'decidere di, dimenticare di, sperare di; আর iniziare/cominciare a, riuscire a।', en: 'Learn fixed verb+preposition pairs before infinitives.' }, grammarId: 'preposizioni-verbi' },
    ],
    mcq: [
      { id: 'st2-26-q1', prompt: { bn: 'ব্যবহারিক পরীক্ষায় সে কবে পাস করেছে?', en: 'When did he pass the practical exam?' }, options: ['ছয় মাস আগে', 'গত সপ্তাহে', 'গতকাল', 'আগামী মাসে'], answer: 2, explanation: { bn: 'Ieri = গতকাল।', en: 'Yesterday.' } },
    ],
    trueFalse: [
      { id: 'st2-26-tf1', statementIt: 'Vuole comprare una macchina nuova molto cara.', statement: { bn: 'সে খুব দামি একটা নতুন গাড়ি কিনতে চায়।', en: 'He wants to buy an expensive new car.' }, answer: false, explanation: { bn: 'una piccola macchina usata (ছোট ব্যবহৃত গাড়ি)।', en: 'A small used car.' } },
    ],
    fillBlank: [
      { id: 'st2-26-fb1', sentence: 'Ho provato ___ chiamare l’ufficio, ma era chiuso.', options: ['di', 'a', 'per', 'in'], answer: 1, explanation: { bn: 'provare a + infinito = চেষ্টা করা।', en: 'provare takes a.' } },
    ],
    shortAnswer: [
      { id: 'st2-26-sa1', question: { bn: 'শুরুতে তার কিসের ভয় ছিল?', en: 'What was he afraid of at first?' }, sampleAnswerIt: 'Aveva paura del traffico.', keywords: ['traffico'] },
    ],
    practice: {
      retellPrompt: { bn: 'decidere di, iniziare a, riuscire a দিয়ে নতুন কিছু শেখার গল্প লিখুন।', en: 'Write about learning a new skill using decidere di, iniziare a, riuscire a.' },
      completeMissing: { promptIt: 'Spero ___ finire il corso prima dell’estate.', hint: { bn: 'সঠিক প্রিপোজিশন di ব্যবহার করুন', en: 'preposition' }, sampleIt: 'Spero di finire il corso prima dell’estate.' },
      buildSimilar: { patternIt: 'Ho cominciato a studiare ogni sera.', prompt: { bn: 'cominciare a বা iniziare a দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with iniziare/cominciare a.' }, sampleIt: 'Ho iniziato a correre al parco la mattina.' },
      altEndingPrompt: { bn: 'নতুন গাড়ি কিনলে সে প্রথম কোথায় ঘুরতে যাবে লিখুন।', en: 'Where might he drive first once he buys the car?' },
    },
  }),

  buildStory({
    id: 'st-a2-27', level: 'A2', titleIt: 'La maratona della burocrazia',
    title: { bn: 'দাপ্তরিক কাজের দৌড়ঝাঁপ', en: 'The paperwork marathon' },
    topic: { bn: 'সর্বনামযুক্ত ক্রিয়া (farcela, andarsene, volerci)', en: 'Pronominal verbs' },
    grammarIds: ['verbi-pronominali-a2', 'tempo'],
    vocabKeys: ['w:A2:la marca da bollo', 'w:A2:il certificato', 'w:A2:la fila'],
    paragraphs: [
      { it: 'Stamattina dovevo fare tre documenti in un solo giorno: prima alla tabaccheria per la marca da bollo, poi alla posta e infine all’ufficio universitario.', tr: { bn: 'আজ সকালে আমাকে একদিনেই তিনটি কাগজের কাজ করতে হতো: প্রথমে রাজস্ব স্ট্যাম্পের জন্য তামাকের দোকানে, তারপর ডাকঘরে এবং শেষে বিশ্ববিদ্যালয়ের অফিসে।', en: 'This morning I had to handle three documents in one day: first the tobacconist for a revenue stamp, then the post office, and finally the university desk.' } },
      { it: 'Alle dieci pensavo: "Non ce la faccio! Ci vogliono almeno due ore solo alla posta." Infatti davanti a me c’erano dodici persone.', tr: { bn: 'দশটায় ভাবছিলাম: "আমি পারব না! শুধু ডাকঘরেই অন্তত দুই ঘণ্টা লাগবে।" সত্যিই আমার সামনে বারোজন মানুষ ছিল।', en: 'At ten I thought: "I won’t make it! It takes at least two hours just at the post office." Indeed there were twelve people ahead of me.' } },
      { it: 'Invece la fila è andata velocissima! Alle dodici e mezza avevo già tutte le ricevute e me ne sono andato al bar a festeggiare.', tr: { bn: 'কিন্তু লাইন খুব দ্রুত এগোলো! সাড়ে বারোটায় আমার কাছে সব রসিদ চলে এলো এবং আমি উদযাপন করতে ক্যাফেতে চলে গেলাম।', en: 'Instead the queue moved super fast! By 12:30 I already had all receipts and headed off to the café to celebrate.' } },
    ],
    wordGlossary: [
      { word: 'maratona', base: 'la maratona', tr: { bn: 'ম্যারাথন / দীর্ঘ দৌড়', en: 'marathon' }, pos: 'noun' },
      { word: 'ce la faccio', base: 'farcela', tr: { bn: 'আমি সামলে উঠতে পারছি', en: 'I can manage' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Non ce la faccio / Ci vogliono due ore / Me ne sono andato.', ruleTitle: { bn: 'প্রাত্যহিক সর্বনামযুক্ত ক্রিয়া (farcela, volerci, andarsene)', en: 'Everyday clitic verbs' }, explanation: { bn: 'farcela = পারা; volerci = সময়/জিনিস লাগা (ci vuole / ci vogliono); andarsene = চলে যাওয়া।', en: 'Three essential idiomatic pronominal verbs in action.' }, grammarId: 'verbi-pronominali-a2' },
    ],
    mcq: [
      { id: 'st2-27-q1', prompt: { bn: 'রাজস্ব স্ট্যাম্প সে কোথা থেকে কিনেছে?', en: 'Where did he buy the revenue stamp?' }, options: ['ব্যাংকে', 'তামাক/টিকিটের দোকানে (tabaccheria)', 'লাইব্রেরিতে', 'পৌরসভায়'], answer: 1, explanation: { bn: 'সঠিক উত্তর: তামাক/টিকিটের দোকানে (tabaccheria) — পাঠ্যাংশে বলা হয়েছে: «আজ সকালে আমাকে একদিনেই তিনটি কাগজের কাজ করতে হতো: প্রথমে রাজস্ব স্ট্যাম্পের জন্য তামাকের দোকানে, তারপর ডাকঘরে এবং শেষে বিশ্ববিদ্যালয়ের অফিসে।» (alla tabaccheria per la marca da bollo)।', en: 'At the tabaccheria.' } },
    ],
    trueFalse: [
      { id: 'st2-27-tf1', statementIt: 'Alla posta ha aspettato tre ore.', statement: { bn: 'ডাকঘরে সে তিন ঘণ্টা অপেক্ষা করেছে।', en: 'He waited three hours at the post office.' }, answer: false, explanation: { bn: 'লাইন খুব দ্রুত ছিল (la fila è andata velocissima)।', en: 'The queue moved very quickly.' } },
    ],
    fillBlank: [
      { id: 'st2-27-fb1', sentence: 'È tardissimo, noi ___ andiamo subito.', options: ['ce ne', 'se ne', 'ci ne', 'ne ci'], answer: 0, explanation: { bn: 'noi-এর জন্য andarsene → ce ne andiamo।', en: 'noi form of andarsene is ce ne andiamo.' } },
    ],
    shortAnswer: [
      { id: 'st2-27-sa1', question: { bn: 'কাজ শেষে সে কোথায় গেল?', en: 'Where did he go once everything was done?' }, sampleAnswerIt: 'Se ne è andato al bar a festeggiare.', keywords: ['bar'] },
    ],
    practice: {
      retellPrompt: { bn: 'ci vogliono ও ce l’ho fatta ব্যবহার করে ব্যস্ত দিনের গল্প লিখুন।', en: 'Write 3 sentences using ci vogliono and ce l’ho fatta.' },
      completeMissing: { promptIt: 'Non è facile, ma con impegno ___ faremo!', hint: { bn: 'সফল হওয়া অর্থে farcela ক্রিয়ার সর্বনাম অংশ ce la বসান', en: 'farcela' }, sampleIt: 'Con impegno ce la faremo!' },
      buildSimilar: { patternIt: 'Ci vogliono venti minuti in bicicletta.', prompt: { bn: 'আপনার যাতায়াতে কত সময় লাগে লিখুন।', en: 'Write how long your commute takes.' }, sampleIt: 'Ci vogliono quindici minuti in metropolitana.' },
      altEndingPrompt: { bn: 'ক্যাফেতে বসে সে কী অর্ডার করবে লিখুন।', en: 'What might he order at the café?' },
    },
  }),

  buildStory({
    id: 'st-a2-28', level: 'A2', titleIt: 'La prima volta a teatro',
    title: { bn: 'প্রথমবার থিয়েটারে', en: 'First time at the theatre' },
    topic: { bn: 'ক্রমবাচক সংখ্যা ও সংস্কৃতি', en: 'Ordinal numbers & culture' },
    grammarIds: ['numerali-ordinali', 'imperfetto'],
    vocabKeys: ['w:A2:il teatro', 'w:A2:emozionato', 'w:A2:il concerto'],
    paragraphs: [
      { it: 'Ieri sera sono andato a teatro per la prima volta nella mia vita. L’edificio risale al diciannovesimo secolo ed era tutto illuminato.', tr: { bn: 'গতকাল সন্ধ্যায় জীবনের প্রথমবারের মতো আমি থিয়েটারে গিয়েছি। ভবনটি উনিশ শতকের এবং পুরোটা আলোকিত ছিল।', en: 'Last night I went to the theatre for the first time in my life. The building dates to the nineteenth century and was brightly lit.' } },
      { it: 'I nostri posti erano alla quarta fila della seconda galleria: da lì vedevamo benissimo tutto il palcoscenico.', tr: { bn: 'আমাদের আসন ছিল দ্বিতীয় গ্যালারির চতুর্থ সারিতে: সেখান থেকে পুরো মঞ্চ খুব ভালো দেখা যাচ্ছিল।', en: 'Our seats were in the fourth row of the second gallery: from there we had a great view of the whole stage.' } },
      { it: 'La commedia aveva tre atti e alla fine del terzo atto il pubblico ha applaudito per cinque minuti!', tr: { bn: 'নাটকটিতে তিনটি অঙ্ক ছিল এবং তৃতীয় অঙ্কের শেষে দর্শকেরা পাঁচ মিনিট ধরে করতালি দিয়েছে!', en: 'The play had three acts and at the end of the third act the audience applauded for five minutes!' } },
    ],
    wordGlossary: [
      { word: 'palcoscenico', base: 'il palcoscenico', tr: { bn: 'মঞ্চ', en: 'stage' }, pos: 'noun' },
      { word: 'applaudito', base: 'applaudire', tr: { bn: 'করতালি দেওয়া', en: 'applauded' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'La prima volta / Al diciannovesimo secolo / Del terzo atto.', ruleTitle: { bn: 'ক্রমবাচক সংখ্যা (ordinali)', en: 'Ordinal numbers' }, explanation: { bn: '১ম-১০ম বিশেষ রূপ (primo..decimo), ১১+ শেষে -esimo; এবং লিঙ্গ-বচন মেনে চলে।', en: 'Special forms 1st-10th, -esimo for 11th+; agree in gender/number.' }, grammarId: 'numerali-ordinali' },
    ],
    mcq: [
      { id: 'st2-28-q1', prompt: { bn: 'নাটকটিতে কয়টি অঙ্ক (atto) ছিল?', en: 'How many acts did the play have?' }, options: ['১টি', '২টি', '৩টি', '৪টি'], answer: 2, explanation: { bn: 'tre atti = ৩টি।', en: 'Three acts.' } },
    ],
    trueFalse: [
      { id: 'st2-28-tf1', statementIt: 'Non riuscivano a vedere bene il palcoscenico.', statement: { bn: 'তারা মঞ্চ ভালো দেখতে পাচ্ছিল না।', en: 'They couldn’t see the stage well.' }, answer: false, explanation: { bn: 'vedevamo benissimo (খুব ভালো দেখছিলাম)।', en: 'They saw it clearly.' } },
    ],
    fillBlank: [
      { id: 'st2-28-fb1', sentence: 'Lo studio medico si trova al ___ piano.', options: ['quattro', 'quarto', 'quarta', 'quattresimo'], answer: 1, explanation: { bn: 'il piano পুংলিঙ্গ → al quarto piano।', en: 'il piano is masculine → quarto.' } },
    ],
    shortAnswer: [
      { id: 'st2-28-sa1', question: { bn: 'তাদের আসন কোন সারিতে ছিল?', en: 'Which row were their seats in?' }, sampleAnswerIt: 'Erano alla quarta fila della seconda galleria.', keywords: ['quarta', 'fila'] },
    ],
    practice: {
      retellPrompt: { bn: 'primo, secondo, terzo ব্যবহার করে একটি সাংস্কৃতিক অনুষ্ঠানের গল্প লিখুন।', en: 'Write 3 sentences using primo, secondo, and terzo.' },
      completeMissing: { promptIt: 'È la ___ lezione della settimana.', hint: { bn: 'স্ত্রীলিঙ্গ ক্রমবাচক বিশেষণ prima / terza / ultima ব্যবহার করুন', en: 'feminine ordinal' }, sampleIt: 'È la terza lezione della settimana.' },
      buildSimilar: { patternIt: 'Sono andato al concerto per la prima volta.', prompt: { bn: 'প্রথমবার করা কোনো অভিজ্ঞতা লিখুন।', en: 'Write about something you did for the first time.' }, sampleIt: 'Ho visitato Venezia per la prima volta.' },
      altEndingPrompt: { bn: 'থিয়েটার শেষে বাইরে বের হয়ে তারা কী বলল লিখুন।', en: 'What might they say leaving the theatre?' },
    },
  }),

  buildStory({
    id: 'st-a2-29', level: 'A2', titleIt: 'Il miglior caffè del quartiere',
    title: { bn: 'এলাকার সেরা কফি', en: 'The best coffee in the neighbourhood' },
    topic: { bn: 'অনিয়মিত তুলনা (migliore/meglio)', en: 'Irregular comparatives' },
    grammarIds: ['comparativi-irregolari', 'comparativi'],
    vocabKeys: ['w:A2:saporito', 'w:A2:il cliente', 'w:A2:amaro'],
    paragraphs: [
      { it: 'Vicino alla stazione ci sono due pasticcerie. La prima è moderna ma ha un servizio pessimo: bisogna aspettare tantissimo.', tr: { bn: 'স্টেশনের কাছে দুটি পেস্ট্রি শপ আছে। প্রথমটি আধুনিক কিন্তু সেবা খুবই খারাপ: অনেকক্ষণ অপেক্ষা করতে হয়।', en: 'Near the station there are two pastry shops. The first is modern yet has terrible service: you have to wait ages.' } },
      { it: 'La seconda, invece, è piccola ma prepara il migliore cappuccino della zona e i suoi cornetti caldi sono ottimi.', tr: { bn: 'অন্যদিকে দ্বিতীয়টি ছোট কিন্তু এলাকার সেরা ক্যাপুচিনো বানায় এবং তাদের গরম ক্রোয়াঁগুলো চমৎকার।', en: 'The second, however, is small yet makes the best cappuccino in the area and its warm croissants are excellent.' } },
      { it: 'Dopo una colazione così buona, tutti i clienti iniziano la giornata molto meglio e tornano sempre volentieri!', tr: { bn: 'এত ভালো নাস্তার পর সব গ্রাহক দিনটা অনেক ভালোভাবে শুরু করে এবং সবসময় আনন্দে ফিরে আসে!', en: 'After such a good breakfast, all customers start their day much better and always come back gladly!' } },
    ],
    wordGlossary: [
      { word: 'pasticcerie', base: 'la pasticceria', tr: { bn: 'মিষ্টান্ন/পেস্ট্রি দোকান', en: 'pastry shops' }, pos: 'noun' },
      { word: 'bisogna', base: 'bisognare', tr: { bn: 'প্রয়োজন হয় / করতে হয়', en: 'one has to' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Il migliore cappuccino / Iniziano la giornata meglio.', ruleTitle: { bn: 'migliore (বিশেষণ) বনাম meglio (ক্রিয়াবিশেষণ)', en: 'migliore vs meglio' }, explanation: { bn: 'বিশেষ্যের গুণ বোঝালে migliore; ক্রিয়ার ধরণ বোঝালে meglio।', en: 'migliore modifies nouns; meglio modifies verbs.' }, grammarId: 'comparativi-irregolari' },
    ],
    mcq: [
      { id: 'st2-29-q1', prompt: { bn: 'প্রথম পেস্ট্রি শপের সমস্যা কী?', en: 'What is the problem with the first pastry shop?' }, options: ['কফি ঠান্ডা', 'সেবা খুব খারাপ/ধীর', 'বন্ধ থাকে', 'দূরে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সেবা খুব খারাপ/ধীর — পাঠ্যাংশে বলা হয়েছে: «স্টেশনের কাছে দুটি পেস্ট্রি শপ আছে। প্রথমটি আধুনিক কিন্তু সেবা খুবই খারাপ: অনেকক্ষণ অপেক্ষা করতে হয়।» (ha un servizio pessimo)।', en: 'It has terrible service.' } },
    ],
    trueFalse: [
      { id: 'st2-29-tf1', statementIt: 'La seconda pasticceria fa un caffè pessimo.', statement: { bn: 'দ্বিতীয় পেস্ট্রি শপের কফি খুব খারাপ।', en: 'The second shop makes terrible coffee.' }, answer: false, explanation: { bn: 'prepara il migliore cappuccino (সেরা ক্যাপুচিনো)।', en: 'It makes the best cappuccino.' } },
    ],
    fillBlank: [
      { id: 'st2-29-fb1', sentence: 'Questo ristorante offre un servizio ___ dell’altro.', options: ['meglio', 'migliore', 'più bene', 'bene'], answer: 1, explanation: { bn: 'servizio বিশেষ্য → migliore।', en: 'Noun servizio requires adjective migliore.' } },
    ],
    shortAnswer: [
      { id: 'st2-29-sa1', question: { bn: 'দ্বিতীয় দোকানের ক্রোয়াঁ কেমন?', en: 'What are the croissants at the second shop like?' }, sampleAnswerIt: 'Sono caldi e ottimi.', keywords: ['ottimi', 'caldi'] },
    ],
    practice: {
      retellPrompt: { bn: 'migliore, ottimo, meglio ব্যবহার করে দুটো জায়গার তুলনা লিখুন।', en: 'Compare two cafés or shops using migliore, ottimo, and meglio.' },
      completeMissing: { promptIt: 'Oggi mi sento ___ di ieri!', hint: { bn: 'ভালো অর্থে ক্রিয়াবিশেষণ meglio ব্যবহার করুন', en: 'adverb' }, sampleIt: 'Oggi mi sento meglio di ieri!' },
      buildSimilar: { patternIt: 'I suoi cornetti sono ottimi.', prompt: { bn: 'ottimo বা pessimo দিয়ে মতামত দিন।', en: 'Write a quick review with ottimo or pessimo.' }, sampleIt: 'La zuppa di verdure era ottima!' },
      altEndingPrompt: { bn: 'এই ক্যাফেতে সকালে কার কার সাথে দেখা হয় লিখুন।', en: 'Who do locals meet at this café each morning?' },
    },
  }),

  buildStory({
    id: 'st-a2-30', level: 'A2', titleIt: 'Regole del mercato rionale',
    title: { bn: 'স্থানীয় বাজারের নিয়মকানুন', en: 'Local market habits & rules' },
    topic: { bn: 'নৈর্ব্যক্তিক si ও কেনাকাটা', en: 'Impersonal si' },
    grammarIds: ['si-impersonale-a2', 'verbi-servizio-a2'],
    vocabKeys: ['w:A2:il resto', 'w:A2:il sacchetto', 'w:A2:il bancomat'],
    paragraphs: [
      { it: 'Ogni sabato mattina nel nostro quartiere si apre il grande mercato rionale. Qui si comprano formaggi, verdure di stagione e fiori colorati.', tr: { bn: 'প্রতি শনিবার সকালে আমাদের পাড়ায় বড় স্থানীয় বাজার বসে। এখানে পনির, মৌসুমি সবজি ও রঙিন ফুল কেনা হয়।', en: 'Every Saturday morning the big local market opens in our area. Here people buy cheeses, seasonal vegetables, and colourful flowers.' } },
      { it: 'All’ingresso c’è un cartello: "Non si tocca la frutta con le mani, si chiede prima al venditore!" Molti studenti stranieri non lo sanno subito.', tr: { bn: 'প্রবেশপথে একটা বোর্ড আছে: "হাত দিয়ে ফল স্পর্শ করবেন না, আগে বিক্রেতাকে বলুন!" অনেক বিদেশি ছাত্র তাড়াতাড়ি এটা জানে না।', en: 'At the entrance there is a sign: "Don’t touch the fruit by hand, ask the seller first!" Many foreign students don’t know this at first.' } },
      { it: 'Ormai in quasi tutti i banchi si può pagare sia in contanti sia con il bancomat, e si riceve sempre lo scontrino.', tr: { bn: 'এখন প্রায় সব স্টলেই নগদে ও ডেবিট কার্ডে টাকা দেওয়া যায়, এবং সবসময় রসিদ পাওয়া যায়।', en: 'Nowadays at almost every stall one can pay both cash and debit card, and you always receive a receipt.' } },
    ],
    wordGlossary: [
      { word: 'rionale', base: 'rionale', tr: { bn: 'স্থানীয় / পাড়ার', en: 'neighbourhood' }, pos: 'adj' },
      { word: 'banchi', base: 'il banco', tr: { bn: 'বাজারের স্টল / দোকান', en: 'market stalls' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Si comprano formaggi / Si chiede al venditore.', ruleTitle: { bn: 'si impersonale একবচন ও বহুবচন', en: 'Singular & plural impersonal si' }, explanation: { bn: 'কর্ম একবচন/অনির্দিষ্ট হলে si chiede; কর্ম বহুবচন (formaggi) হলে ক্রিয়াও বহুবচন (si comprano)।', en: 'Plural object triggers plural verb after si.' }, grammarId: 'si-impersonale-a2' },
    ],
    mcq: [
      { id: 'st2-30-q1', prompt: { bn: 'বাজারের বোর্ডে কী নিষেধ করা হয়েছে?', en: 'What does the market sign forbid?' }, options: ['কার্ডে পেমেন্ট', 'হাত দিয়ে ফল ছোঁয়া', 'ছবি তোলা', 'ব্যাগ আনা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: হাত দিয়ে ফল ছোঁয়া — পাঠ্যাংশে বলা হয়েছে: «প্রবেশপথে একটা বোর্ড আছে: "হাত দিয়ে ফল স্পর্শ করবেন না, আগে বিক্রেতাকে বলুন!" অনেক বিদেশি ছাত্র তাড়াতাড়ি এটা জানে না।» (Non si tocca la frutta con le mani)।', en: 'Touching fruit by hand.' } },
    ],
    trueFalse: [
      { id: 'st2-30-tf1', statementIt: 'Al mercato si può pagare solo in contanti.', statement: { bn: 'বাজারে শুধু নগদ টাকায় কেনা যায়।', en: 'You can only pay cash at the market.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «এখন প্রায় সব স্টলেই নগদে ও ডেবিট কার্ডে টাকা দেওয়া যায়, এবং সবসময় রসিদ পাওয়া যায়।» (sia in contanti sia con il bancomat)।', en: 'Both cash and card work.' } },
    ],
    fillBlank: [
      { id: 'st2-30-fb1', sentence: 'In Italia si ___ moltissimi gelati in estate.', options: ['mangia', 'mangiano', 'mangiamo', 'mangi'], answer: 1, explanation: { bn: 'moltissimi gelati বহুবচন → mangiano।', en: 'Plural object takes mangiano.' } },
    ],
    shortAnswer: [
      { id: 'st2-30-sa1', question: { bn: 'কবে এই স্থানীয় বাজার বসে?', en: 'When does this local market open?' }, sampleAnswerIt: 'Si apre ogni sabato mattina.', keywords: ['sabato', 'mattina'] },
    ],
    practice: {
      retellPrompt: { bn: 'ইতালিতে বা বাংলাদেশে কী কী প্রচলিত নিয়ম আছে si দিয়ে ৩ বাক্যে লিখুন।', en: 'Write 3 sentences describing local habits using impersonal si.' },
      completeMissing: { promptIt: 'Come si ___ per andare in centro?', hint: { bn: 'নৈর্ব্যক্তিক ক্রিয়ার রূপ fa অথবা arriva বসান', en: 'impersonal verb' }, sampleIt: 'Come si arriva al museo?' },
      buildSimilar: { patternIt: 'In biblioteca si studia in silenzio.', prompt: { bn: 'কোনো স্থানের নিয়ম si দিয়ে লিখুন।', en: 'State a public rule with si.' }, sampleIt: 'Sul treno si convalida sempre il biglietto.' },
      altEndingPrompt: { bn: 'বাজার থেকে কেনাকাটা শেষে তারা কী রান্না করবে লিখুন।', en: 'What might they cook from the market ingredients?' },
    },
  }),

  buildStory({
    id: 'st-a2-31', level: 'A2', titleIt: 'Il pacco arrivato in ritardo',
    title: { bn: 'দেরিতে আসা পার্সেল ও সমাধান', en: 'The delayed parcel and its refund' },
    topic: { bn: 'অতীতে মডাল ও গ্রাহক সেবা', en: 'Past modals & complaints' },
    grammarIds: ['modali-passato', 'doppia-negazione'],
    vocabKeys: ['w:A2:il corriere', 'w:A2:il reclamo', 'w:A2:il rimborso'],
    paragraphs: [
      { it: 'La settimana scorsa ho ordinato una giacca invernale online, ma il corriere non ha suonato al campanello e non ho ricevuto niente per quattro giorni.', tr: { bn: 'গত সপ্তাহে অনলাইনে একটি শীতের জ্যাকেট অর্ডার করেছিলাম, কিন্তু কুরিয়ার কলিং বেল বাজায়নি এবং চার দিন ধরে কিছুই পাইনি।', en: 'Last week I ordered a winter jacket online, yet the courier never rang the bell and I received nothing for four days.' } },
      { it: 'Alla fine ho dovuto scrivere un reclamo al servizio clienti perché la spedizione doveva arrivare in quarantotto ore.', tr: { bn: 'শেষ পর্যন্ত গ্রাহক সেবায় অভিযোগ লিখতে হয়েছে কারণ ডেলিভারি আটচল্লিশ ঘণ্টার মধ্যে আসার কথা ছিল।', en: 'Eventually I had to write a complaint to customer support because delivery was meant to arrive within 48 hours.' } },
      { it: 'Non ho potuto parlare con nessuno al telefono, però via mail mi hanno risposto subito e ho ottenuto il rimborso delle spese di spedizione.', tr: { bn: 'ফোনে কারও সাথে কথা বলতে পারিনি, তবে ইমেইলে সাথে সাথেই উত্তর দিয়েছে এবং আমি ডেলিভারি চার্জের টাকা ফেরত পেয়েছি।', en: 'I couldn’t speak to anyone on the phone, yet by email they replied straight away and refunded the shipping fee.' } },
    ],
    wordGlossary: [
      { word: 'campanello', base: 'il campanello', tr: { bn: 'দরজার কলিং বেল', en: 'doorbell' }, pos: 'noun' },
      { word: 'ottenuto', base: 'ottenere', tr: { bn: 'পাওয়া / অর্জন করা', en: 'obtained' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ho dovuto scrivere / Non ho potuto parlare.', ruleTitle: { bn: 'অতীতে মডাল (dovere/potere)', en: 'Modals in passato prossimo' }, explanation: { bn: 'scrivere ও parlare উভয়ই avere নেয়, তাই ho dovuto ও ho potuto হয়েছে।', en: 'Both infinitives take avere → ho dovuto / ho potuto.' }, grammarId: 'modali-passato' },
    ],
    mcq: [
      { id: 'st2-31-q1', prompt: { bn: 'গ্রাহক শেষ পর্যন্ত কী ফেরত পেল?', en: 'What refund did the customer receive?' }, options: ['পুরো জ্যাকেটের দাম', 'ডেলিভারি খরচ', 'নতুন জুতা', 'কিছুই না'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ডেলিভারি খরচ — পাঠ্যাংশে বলা হয়েছে: «ফোনে কারও সাথে কথা বলতে পারিনি, তবে ইমেইলে সাথে সাথেই উত্তর দিয়েছে এবং আমি ডেলিভারি চার্জের টাকা ফেরত পেয়েছি।» (il rimborso delle spese di spedizione)।', en: 'Refund of shipping costs.' } },
    ],
    trueFalse: [
      { id: 'st2-31-tf1', statementIt: 'Il servizio clienti ha risposto subito via mail.', statement: { bn: 'গ্রাহক সেবা ইমেইলে সাথে সাথে উত্তর দিয়েছে।', en: 'Customer service replied promptly by email.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «ফোনে কারও সাথে কথা বলতে পারিনি, তবে ইমেইলে সাথে সাথেই উত্তর দিয়েছে এবং আমি ডেলিভারি চার্জের টাকা ফেরত পেয়েছি।» (via mail mi hanno risposto subito)।', en: 'Directly stated in paragraph 3.' } },
    ],
    fillBlank: [
      { id: 'st2-31-fb1', sentence: 'Ieri pioveva troppo e non ___ potuti uscire.', options: ['abbiamo', 'siamo', 'avete', 'fummo'], answer: 1, explanation: { bn: 'uscire essere নেয় → siamo potuti uscire।', en: 'uscire takes essere.' } },
    ],
    shortAnswer: [
      { id: 'st2-31-sa1', question: { bn: 'ডেলিভারি কত ঘণ্টার মধ্যে আসার কথা ছিল?', en: 'Within how many hours was the parcel supposed to arrive?' }, sampleAnswerIt: 'Doveva arrivare in quarantotto ore.', keywords: ['quarantotto', '48'] },
    ],
    practice: {
      retellPrompt: { bn: 'অতীতে করতে হয়েছে এমন ৩টি কাজ ho dovuto / sono dovuto দিয়ে লিখুন।', en: 'Write 3 things you had to do recently using ho/sono dovuto.' },
      completeMissing: { promptIt: 'Ieri non ho ___ finire il lavoro in tempo.', hint: { bn: 'potere ক্রিয়ার অতীত পার্টিসিপল potuto ব্যবহার করুন', en: 'past participle of potere' }, sampleIt: 'Ieri non ho potuto chiamarti.' },
      buildSimilar: { patternIt: 'Ho dovuto scrivere un reclamo al servizio.', prompt: { bn: 'ho dovuto দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with ho dovuto.' }, sampleIt: 'Ho dovuto aspettare trenta minuti in fila.' },
      altEndingPrompt: { bn: 'জ্যাকেট হাতে পাওয়ার পর রিভিউয়ে কী লিখবেন লিখুন।', en: 'What might you write in a store review?' },
    },
  }),

  buildStory({
    id: 'st-a2-32', level: 'A2', titleIt: 'Una serata di cucina insieme',
    title: { bn: 'একসাথে রান্নার সন্ধ্যা', en: 'An evening cooking together' },
    topic: { bn: 'ভদ্র প্রস্তাব ও সামাজিকতা', en: 'Offers, hospitality & review' },
    grammarIds: ['volere-piacere-cortesia', 'connettivi'],
    vocabKeys: ['w:A2:invitare', 'w:A2:la padella', 'w:A2:la gioia'],
    paragraphs: [
      { it: '"Ciao Matteo, sabato sera ti va di venire a cena da noi? Vorremmo preparare sia pasta fresca sia un piatto bengalese speziato!"', tr: { bn: '"হ্যালো মাত্তেও, শনিবার সন্ধ্যায় আমাদের বাসায় ডিনারে আসতে ইচ্ছে করছে? আমরা তাজা পাস্তা আর একটি মশলাদার বাংলাদেশি পদ বানাতে চাই!"', en: '"Hi Matteo, feel like coming to dinner at ours on Saturday evening? We’d love to make both fresh pasta and a spiced Bengali dish!"' } },
      { it: 'Matteo accetta con entusiasmo: "Volentieri! Mi farebbe piacere imparare a cucinare con voi. Vi dispiace se porto il dolce?"', tr: { bn: 'মাত্তেও উৎসাহের সাথে রাজি হলো: "আনন্দের সাথে! তোমাদের সাথে রান্না শিখতে পারলে দারুণ লাগবে। আমি মিষ্টি নিয়ে এলে কি তোমাদের আপত্তি আছে?"', en: 'Matteo accepts eagerly: "Gladly! I’d love to learn to cook with you. Do you mind if I bring dessert?"' } },
      { it: 'La sera tagliamo le verdure, mescoliamo le spezie in padella e ridiamo fino a tardi: cucinare insieme è sempre la ricetta migliore per l’amicizia.', tr: { bn: 'সন্ধ্যায় আমরা সবজি কাটি, কড়াইয়ে মশলা মেশাই আর রাত অবধি হাসাহাসি করি: একসাথে রান্না করা বন্ধুত্বের জন্য সবসময় সেরা রেসিপি।', en: 'In the evening we chop vegetables, mix spices in the pan, and laugh till late: cooking together is always the best recipe for friendship.' } },
    ],
    wordGlossary: [
      { word: 'entusiasmo', base: 'l’entusiasmo', tr: { bn: 'উৎসাহ', en: 'enthusiasm' }, pos: 'noun' },
      { word: 'speziato', base: 'speziato', tr: { bn: 'মশলাদার', en: 'spiced' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ti va di venire? / Vi dispiace se porto il dolce?', ruleTitle: { bn: 'ভদ্র প্রস্তাব ও অনুমতি', en: 'Warm invitations & polite offers' }, explanation: { bn: 'ti va di + infinito (ইচ্ছে আছে?), ti/vi dispiace se + presente (আপত্তি আছে কি?)।', en: 'ti va di…? invites warmly; dispiace se…? checks politely.' }, grammarId: 'volere-piacere-cortesia' },
    ],
    mcq: [
      { id: 'st2-32-q1', prompt: { bn: 'মাত্তেও ডিনারে কী নিয়ে আসতে চেয়েছে?', en: 'What did Matteo offer to bring to dinner?' }, options: ['সালাদ', 'পাস্তা', 'মিষ্টি/ডেজার্ট', 'রুটি'], answer: 2, explanation: { bn: 'porto il dolce = ডেজার্ট নিয়ে আসব।', en: 'Dessert.' } },
    ],
    trueFalse: [
      { id: 'st2-32-tf1', statementIt: 'Matteo ha rifiutato l’invito perché era stanco.', statement: { bn: 'মাত্তেও ক্লান্ত ছিল বলে দাওয়াত ফিরিয়ে দিয়েছে।', en: 'Matteo turned down the invitation.' }, answer: false, explanation: { bn: 'accetta con entusiasmo (উৎসাহের সাথে রাজি হয়েছে)।', en: 'He accepted eagerly.' } },
    ],
    fillBlank: [
      { id: 'st2-32-fb1', sentence: 'Scusi professore, ___ dispiace se faccio una domanda?', options: ['La', 'Le', 'Lo', 'Ci'], answer: 1, explanation: { bn: 'আনুষ্ঠানিক Lei-তে Le dispiace।', en: 'Formal indirect pronoun is Le.' } },
    ],
    shortAnswer: [
      { id: 'st2-32-sa1', question: { bn: 'তারা কোন দুটি পদ বানাতে চেয়েছে?', en: 'Which two dishes did they want to cook?' }, sampleAnswerIt: 'Pasta fresca e un piatto bengalese speziato.', keywords: ['pasta', 'bengalese'] },
    ],
    practice: {
      retellPrompt: { bn: 'একজন বন্ধুকে ডিনারে দাওয়াত দিয়ে ৩ বাক্যের বার্তা লিখুন।', en: 'Write a 3-sentence dinner invitation to a friend.' },
      completeMissing: { promptIt: 'Sabato sera ___ va di andare al cinema insieme?', hint: { bn: 'পরোক্ষ সর্বনাম ti (তোমাকে) অথবা vi (তোমাদেরকে) বসান', en: 'indirect pronoun' }, sampleIt: 'Sabato sera ti va di guardare un film?' },
      buildSimilar: { patternIt: 'Ti dispiace se apro la finestra?', prompt: { bn: 'Ti dispiace se… ব্যবহার করে একটি প্রশ্ন লিখুন।', en: 'Ask politely with Ti/Le dispiace se…' }, sampleIt: 'Le dispiace se mi siedo qui?' },
      altEndingPrompt: { bn: 'পরের ডিনারে মাত্তেও বন্ধুদের কী ইতালীয় পদ রান্না করে খাওয়াবে লিখুন।', en: 'What Italian dish might Matteo cook next time?' },
    },
  }),
];
