import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const A2_STORIES_1: StoryItem[] = [
  buildStory({
    id: 'st-a2-01', level: 'A2', titleIt: 'Una gita a Firenze',
    title: { bn: 'ফ্লোরেন্সে একদিনের ভ্রমণ', en: 'A day trip to Florence' },
    topic: { bn: 'ভ্রমণ ও passato prossimo', en: 'Travel & past tense' },
    grammarIds: ['passato-prossimo', 'preposizioni-articolate'],
    vocabKeys: ['w:A2:la gita', 'w:A2:la prenotazione', 'w:A2:il ricordo'],
    paragraphs: [
      { it: 'Sabato scorso io e mio fratello abbiamo fatto una gita a Firenze. Abbiamo comprato i biglietti del treno su internet una settimana prima.', tr: { bn: 'গত শনিবার আমি ও আমার ভাই ফ্লোরেন্সে একদিনের ভ্রমণে গিয়েছিলাম। এক সপ্তাহ আগেই ইন্টারনেটে ট্রেনের টিকিট কিনেছিলাম।', en: 'Last Saturday my brother and I took a day trip to Florence. We bought train tickets online a week earlier.' } },
      { it: 'La mattina abbiamo visitato la galleria degli Uffizi e abbiamo scattato molte fotografie dal Ponte Vecchio.', tr: { bn: 'সকালে আমরা উফিৎসি গ্যালারি ঘুরে দেখেছি এবং পোন্তে ভেকিও থেকে অনেক ছবি তুলেছি।', en: 'In the morning we visited the Uffizi gallery and took many photos from Ponte Vecchio.' } },
      { it: 'Prima di tornare, abbiamo mangiato un ottimo gelato artigianale vicino al Duomo. È stato un ricordo indimenticabile.', tr: { bn: 'ফেরার আগে দুওমোর কাছে চমৎকার হাতে তৈরি আইসক্রিম খেয়েছি। এটি একটি অবিস্মরণীয় স্মৃতি হয়ে আছে।', en: 'Before heading back, we ate an excellent artisan gelato near the Duomo. It was an unforgettable memory.' } },
    ],
    wordGlossary: [
      { word: 'gita', base: 'la gita', tr: { bn: 'ছোট ভ্রমণ', en: 'day trip' }, pos: 'noun' },
      { word: 'scattato', base: 'scattare', tr: { bn: 'ছবি তোলা (পার্টিসিপল)', en: 'snapped (photos)' }, pos: 'verb' },
      { word: 'artigianale', base: 'artigianale', tr: { bn: 'হাতে তৈরি / কারুশিল্পজাত', en: 'artisan' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Abbiamo visitato la galleria degli Uffizi.', ruleTitle: { bn: 'avere + পার্টিসিপল', en: 'avere + participle' }, explanation: { bn: 'সম্পন্ন কাজ বোঝাতে abbiamo visitato এবং di + gli = degli ব্যবহৃত হয়েছে।', en: 'Completed past uses abbiamo visitato and di + gli = degli.' }, grammarId: 'passato-prossimo' },
    ],
    mcq: [
      { id: 'st2-1-q1', prompt: { bn: 'তারা কবে টিকিট কিনেছিল?', en: 'When did they buy the tickets?' }, options: ['সেদিন সকালে', 'এক সপ্তাহ আগে', 'এক মাস আগে', 'স্টেশনে গিয়ে'], answer: 1, explanation: { bn: 'una settimana prima = এক সপ্তাহ আগে।', en: 'One week before.' } },
      { id: 'st2-1-q2', prompt: { bn: 'ফেরার আগে তারা কী খেয়েছে?', en: 'What did they eat before returning?' }, options: ['পিৎজা', 'স্যুপ', 'আইসক্রিম', 'কেক'], answer: 2, explanation: { bn: 'সঠিক উত্তর: আইসক্রিম — পাঠ্যাংশে বলা হয়েছে: «ফেরার আগে দুওমোর কাছে চমৎকার হাতে তৈরি আইসক্রিম খেয়েছি। এটি একটি অবিস্মরণীয় স্মৃতি হয়ে আছে।» (un ottimo gelato artigianale)।', en: 'Artisan gelato.' } },
    ],
    trueFalse: [
      { id: 'st2-1-tf1', statementIt: 'Sono andati a Firenze domenica scorsa.', statement: { bn: 'তারা গত রবিবার ফ্লোরেন্সে গিয়েছিল।', en: 'They went to Florence last Sunday.' }, answer: false, explanation: { bn: 'শনিবার (Sabato scorso) গিয়েছিল।', en: 'They went on Saturday.' } },
    ],
    fillBlank: [
      { id: 'st2-1-fb1', sentence: 'La mattina ___ visitato gli Uffizi.', options: ['siamo', 'abbiamo', 'avete', 'hanno'], answer: 1, explanation: { bn: 'visitare avere নেয় → abbiamo।', en: 'visitare takes avere.' } },
    ],
    shortAnswer: [
      { id: 'st2-1-sa1', question: { bn: 'তারা কোন সেতু থেকে ছবি তুলেছিল?', en: 'From which bridge did they take photos?' }, sampleAnswerIt: 'Hanno scattato fotografie dal Ponte Vecchio.', keywords: ['ponte', 'vecchio'] },
    ],
    practice: {
      retellPrompt: { bn: 'ফ্লোরেন্স ভ্রমণটি ৩টি অতীত কালের বাক্যে লিখুন।', en: 'Retell the trip to Florence in 3 past-tense sentences.' },
      completeMissing: { promptIt: 'Sabato scorso ___ visitato ___ città bellissima.', hint: { bn: 'সহায়ক ক্রিয়া (ho/abbiamo) এবং অনির্দিষ্ট আর্টিকেল (una) বসান', en: 'auxiliary + article' }, sampleIt: 'Sabato scorso abbiamo visitato una città bellissima.' },
      buildSimilar: { patternIt: 'Abbiamo comprato i biglietti su internet.', prompt: { bn: 'আপনি অনলাইনে কী কিনেছেন তা লিখুন।', en: 'Write something you bought online.' }, sampleIt: 'Ho comprato una valigia nuova su internet.' },
      altEndingPrompt: { bn: 'ট্রেনে ফেরার সময় কী হতে পারে লিখুন।', en: 'Write 1–2 sentences about their train ride back.' },
    },
  }),

  buildStory({
    id: 'st-a2-02', level: 'A2', titleIt: 'Arrivo a Bologna sotto la pioggia',
    title: { bn: 'বৃষ্টির মধ্যে বোলোনিয়ায় আগমন', en: 'Arriving in Bologna in the rain' },
    topic: { bn: 'গতিশীল ক্রিয়া ও লিঙ্গ-বচন মিল', en: 'essere verbs & agreement' },
    grammarIds: ['passato-essere', 'accordo-participio'],
    vocabKeys: ['w:A2:la partenza', "w:A2:l'arrivo", 'w:A2:la valigia'],
    paragraphs: [
      { it: 'Le mie due sorelle sono partite da Roma alle sette di mattina. Il treno veloce è arrivato a Bologna alle nove e un quarto.', tr: { bn: 'আমার দুই বোন সকাল সাতটায় রোম থেকে রওনা হয়েছে। দ্রুতগামী ট্রেন নয়টা পনেরোয় বোলোনিয়ায় পৌঁছেছে।', en: 'My two sisters left Rome at seven in the morning. The fast train arrived in Bologna at 9:15.' } },
      { it: 'Quando sono uscite dalla stazione, pioveva molto forte. Fortunatamente sono entrate subito in un bar per ripararsi.', tr: { bn: 'যখন তারা স্টেশন থেকে বের হলো, তখন খুব জোরে বৃষ্টি হচ্ছিল। সৌভাগ্যবশত তারা আশ্রয় নিতে সাথে সাথে একটা ক্যাফেতে ঢুকে পড়ে।', en: 'When they exited the station, it was raining hard. Fortunately they stepped straight into a café for shelter.' } },
      { it: 'Poi io sono andato a prenderle con le mie valigie piccole e siamo tornati a casa insieme in autobus.', tr: { bn: 'তারপর আমি তাদের নিতে গিয়েছি এবং আমরা একসাথে বাসে বাড়ি ফিরেছি।', en: 'Then I went to pick them up and we returned home together by bus.' } },
    ],
    wordGlossary: [
      { word: 'ripararsi', base: 'ripararsi', tr: { bn: 'আশ্রয় নেওয়া', en: 'to take shelter' }, pos: 'verb' },
      { word: 'velocemente', base: 'veloce', tr: { bn: 'দ্রুত', en: 'quickly' }, pos: 'adv' },
      { word: 'prenderle', base: 'prendere + le', tr: { bn: 'তাদের (মেয়েদের) আনতে', en: 'to pick them (f.) up' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Le mie due sorelle sono partite.', ruleTitle: { bn: 'স্ত্রীলিঙ্গ বহুবচনে মিল', en: 'Feminine plural agreement' }, explanation: { bn: 'partire essere নেয়; sorelle স্ত্রীলিঙ্গ বহুবচন বলে partite হয়েছে।', en: 'sorelle is feminine plural, so partite ends in -e.' }, grammarId: 'passato-essere' },
    ],
    mcq: [
      { id: 'st2-2-q1', prompt: { bn: 'বোনরা কয়টায় বোলোনিয়ায় পৌঁছেছে?', en: 'What time did the sisters reach Bologna?' }, options: ['৭:০০', '৮:৩০', '৯:১৫', '১০:০০'], answer: 2, explanation: { bn: 'alle nove e un quarto = ৯:১৫।', en: '9:15.' } },
    ],
    trueFalse: [
      { id: 'st2-2-tf1', statementIt: 'Il tempo a Bologna era soleggiato.', statement: { bn: 'বোলোনিয়ার আবহাওয়া রৌদ্রোজ্জ্বল ছিল।', en: 'The weather in Bologna was sunny.' }, answer: false, explanation: { bn: 'pioveva molto forte (জোরে বৃষ্টি হচ্ছিল)।', en: 'It was raining heavily.' } },
    ],
    fillBlank: [
      { id: 'st2-2-fb1', sentence: 'Quando le ragazze ___ uscite, pioveva.', options: ['hanno', 'sono', 'siamo', 'è'], answer: 1, explanation: { bn: 'ব্যাকরণগত সংযোজন: loro + essere = sono uscite নিয়ম অনুসারে সঠিক রূপটি গঠিত হয়েছে।', en: 'loro uses sono.' } },
    ],
    shortAnswer: [
      { id: 'st2-2-sa1', question: { bn: 'তারা বৃষ্টি থেকে বাঁচতে কোথায় ঢুকল?', en: 'Where did they shelter from the rain?' }, sampleAnswerIt: 'Sono entrate in un bar.', keywords: ['bar'] },
    ],
    practice: {
      retellPrompt: { bn: 'বোনদের বোলোনিয়া আগমন ৩ বাক্যে লিখুন।', en: 'Summarise their arrival in Bologna in 3 sentences.' },
      completeMissing: { promptIt: 'Mia madre è ___ a casa presto.', hint: { bn: 'স্ত্রী একবচন tornata/arrivata', en: 'feminine singular participle' }, sampleIt: 'Mia madre è tornata a casa presto.' },
      buildSimilar: { patternIt: 'Siamo tornati a casa insieme in autobus.', prompt: { bn: 'আপনি কীভাবে বাড়ি ফিরেছেন লিখুন।', en: 'Write how you got home.' }, sampleIt: 'Sono tornato a casa in treno.' },
      altEndingPrompt: { bn: 'বাড়িতে পৌঁছে তারা কী করতে পারে লিখুন।', en: 'What might they do once home?' },
    },
  }),

  buildStory({
    id: 'st-a2-03', level: 'A2', titleIt: 'Una mattina di fretta',
    title: { bn: 'তাড়াহুড়োর সকাল', en: 'A rushed morning' },
    topic: { bn: 'প্রতিফলক ক্রিয়া ও রুটিন', en: 'Reflexive verbs & routine' },
    grammarIds: ['riflessivi', 'passato-essere'],
    vocabKeys: ['w:A2:la sveglia', 'w:A2:svegliarsi', 'w:A2:farsi la doccia'],
    paragraphs: [
      { it: 'Stamattina la sveglia non ha suonato e mi sono svegliato alle otto invece delle sette.', tr: { bn: 'আজ সকালে অ্যালার্ম বাজেনি আর আমি সাতটার বদলে আটটায় ঘুম থেকে উঠেছি।', en: 'This morning the alarm didn’t ring and I woke up at eight instead of seven.' } },
      { it: 'Mi sono alzato di corsa, mi sono fatto una doccia velocissima e mi sono vestito in cinque minuti.', tr: { bn: 'আমি দৌড়ে উঠলাম, খুব দ্রুত গোসল করলাম আর পাঁচ মিনিটে পোশাক পরলাম।', en: 'I jumped up, took a super quick shower, and got dressed in five minutes.' } },
      { it: 'Non ho avuto tempo di pettinarmi bene, ma sono riuscito a prendere il treno in orario!', tr: { bn: 'ভালোভাবে চুল আঁচড়ানোর সময় পাইনি, তবে ঠিক সময়েই ট্রেন ধরতে পেরেছি!', en: 'I didn’t have time to comb my hair properly, yet I managed to catch the train on time!' } },
    ],
    wordGlossary: [
      { word: 'di corsa', base: 'corsa', tr: { bn: 'দৌড়ে / তাড়াতাড়ি', en: 'in a rush' }, pos: 'phrase' },
      { word: 'in orario', base: 'orario', tr: { bn: 'সময়মতো', en: 'on time' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Mi sono fatto una doccia.', ruleTitle: { bn: 'প্রতিফলক ক্রিয়া অতীতে', en: 'Reflexive in passato prossimo' }, explanation: { bn: 'mi + sono + পার্টিসিপল (fatto/fatta কর্তা ভেদে)।', en: 'Always uses essere + subject agreement.' }, grammarId: 'riflessivi' },
    ],
    mcq: [
      { id: 'st2-3-q1', prompt: { bn: 'সে কয়টায় ঘুম থেকে উঠেছে?', en: 'What time did he wake up?' }, options: ['৬টায়', '৭টায়', '৮টায়', '৯টায়'], answer: 2, explanation: { bn: 'alle otto = আটটায়।', en: 'At eight.' } },
    ],
    trueFalse: [
      { id: 'st2-3-tf1', statementIt: 'Ha perso il treno della mattina.', statement: { bn: 'সে সকালের ট্রেন মিস করেছে।', en: 'He missed the morning train.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «ভালোভাবে চুল আঁচড়ানোর সময় পাইনি, তবে ঠিক সময়েই ট্রেন ধরতে পেরেছি!» (è riuscito a prendere il treno in orario)।', en: 'He caught it on time.' } },
    ],
    fillBlank: [
      { id: 'st2-3-fb1', sentence: 'Oggi mi ___ svegliato tardissimo.', options: ['ho', 'sono', 'ero', 'sto'], answer: 1, explanation: { bn: 'svegliarsi essere নেয় → sono।', en: 'Reflexives always take essere.' } },
    ],
    shortAnswer: [
      { id: 'st2-3-sa1', question: { bn: 'কেন সে দেরিতে উঠেছে?', en: 'Why did he wake up late?' }, sampleAnswerIt: 'Perché la sveglia non ha suonato.', keywords: ['sveglia', 'suonato'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপনার তাড়াহুড়োর কোনো সকালের বর্ণনা দিন।', en: 'Describe a rushed morning you had.' },
      completeMissing: { promptIt: 'Stamattina mi sono ___ presto.', hint: { bn: 'alzato/a বা svegliato/a', en: 'past participle' }, sampleIt: 'Stamattina mi sono alzato presto.' },
      buildSimilar: { patternIt: 'Mi sono vestito in cinque minuti.', prompt: { bn: 'পাঁচ বা দশ মিনিটে আপনি কী করেছেন লিখুন।', en: 'Write something you did in 5 or 10 minutes.' }, sampleIt: 'Mi sono preparato in dieci minuti.' },
      altEndingPrompt: { bn: 'ট্রেনে ওঠার পর কী হলো লিখুন।', en: 'What happened once he got on the train?' },
    },
  }),

  buildStory({
    id: 'st-a2-04', level: 'A2', titleIt: 'L’estate in campagna dai nonni',
    title: { bn: 'দাদা-দাদির গ্রামে গ্রীষ্মকাল', en: 'Summer in the countryside with grandparents' },
    topic: { bn: 'শৈশব ও imperfetto', en: 'Childhood & imperfect' },
    grammarIds: ['imperfetto', 'imperfetto-vs-passato'],
    vocabKeys: ['w:A2:la campagna', "w:A2:l'infanzia", 'w:A2:il cavallo'],
    paragraphs: [
      { it: 'Quando ero piccolo, trascorrevo sempre il mese di luglio in campagna con i miei nonni. La loro casa aveva un grande giardino pieno di alberi.', tr: { bn: 'ছোটবেলায় আমি সবসময় জুলাই মাস দাদা-দাদির সাথে গ্রামে কাটাতাম। তাদের বাড়িতে গাছে ভরা একটা বড় বাগান ছিল।', en: 'When I was little, I always spent July in the countryside with my grandparents. Their house had a big garden full of trees.' } },
      { it: 'Ogni mattina mi alzavo presto, aiutavo il nonno nell’orto e poi giocavo vicino al bosco. Non c’era traffico e l’aria era freschissima.', tr: { bn: 'প্রতিদিন সকালে তাড়াতাড়ি উঠতাম, সবজি বাগানে দাদাকে সাহায্য করতাম আর তারপর বনের পাশে খেলতাম। কোনো যানজট ছিল না আর বাতাস ছিল খুব তাজা।', en: 'Every morning I woke early, helped granddad in the vegetable patch, then played near the woods. There was no traffic and the air was crisp.' } },
      { it: 'Un pomeriggio, mentre osservavamo gli uccelli, abbiamo visto un cavallo bianco correre sulla collina!', tr: { bn: 'এক বিকেলে আমরা যখন পাখি দেখছিলাম, তখন পাহাড়ি টিলার ওপর একটি সাদা ঘোড়াকে দৌড়াতে দেখলাম!', en: 'One afternoon, while we were watching birds, we saw a white horse running on the hill!' } },
    ],
    wordGlossary: [
      { word: 'trascorrevo', base: 'trascorrere', tr: { bn: 'কাটাতাম (সময়)', en: 'I used to spend (time)' }, pos: 'verb' },
      { word: 'orto', base: 'l’orto', tr: { bn: 'সবজি বাগান', en: 'vegetable garden' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Mentre osservavamo gli uccelli, abbiamo visto un cavallo.', ruleTitle: { bn: 'imperfetto ও passato একত্রে', en: 'Imperfect + passato prossimo' }, explanation: { bn: 'চলমান কাজ osservavamo, হঠাৎ দেখা abbiamo visto।', en: 'Ongoing watching vs single sighting.' }, grammarId: 'imperfetto-vs-passato' },
    ],
    mcq: [
      { id: 'st2-4-q1', prompt: { bn: 'কোন মাসে সে দাদা-দাদির কাছে যেত?', en: 'Which month did he spend with his grandparents?' }, options: ['জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর'], answer: 1, explanation: { bn: 'il mese di luglio = জুলাই।', en: 'July.' } },
    ],
    trueFalse: [
      { id: 'st2-4-tf1', statementIt: 'In campagna c’era molto rumore di macchine.', statement: { bn: 'গ্রামে গাড়ির অনেক শব্দ ছিল।', en: 'There was lots of car noise in the countryside.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «প্রতিদিন সকালে তাড়াতাড়ি উঠতাম, সবজি বাগানে দাদাকে সাহায্য করতাম আর তারপর বনের পাশে খেলতাম। কোনো যানজট ছিল না আর বাতাস ছিল খুব তাজা।» (Non c’era traffico)।', en: 'There was no traffic.' } },
    ],
    fillBlank: [
      { id: 'st2-4-fb1', sentence: 'Da bambino ___ sempre in giardino.', options: ['ho giocato', 'giocavo', 'giocherò', 'gioca'], answer: 1, explanation: { bn: 'অভ্যাসগত অতীতে giocavo।', en: 'Habitual past takes imperfetto.' } },
    ],
    shortAnswer: [
      { id: 'st2-4-sa1', question: { bn: 'টিলার ওপর তারা কী দেখেছিল?', en: 'What did they see on the hill?' }, sampleAnswerIt: 'Hanno visto un cavallo bianco.', keywords: ['cavallo', 'bianco'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপনার শৈশবের একটি গ্রীষ্মের ছুটির বর্ণনা দিন।', en: 'Describe a childhood summer memory.' },
      completeMissing: { promptIt: 'Quando ero piccolo ___ spesso con gli amici.', hint: { bn: 'imperfetto ক্রিয়া', en: 'imperfetto verb' }, sampleIt: 'Quando ero piccolo giocavo spesso con gli amici.' },
      buildSimilar: { patternIt: 'Ogni mattina aiutavo il nonno.', prompt: { bn: 'ছোটবেলায় আপনি কী করতেন লিখুন।', en: 'Write what you used to do as a child.' }, sampleIt: 'Ogni sabato leggevo i fumetti in giardino.' },
      altEndingPrompt: { bn: 'সাদা ঘোড়াটি দেখে তারা কী করল লিখুন।', en: 'What did they do after seeing the white horse?' },
    },
  }),

  buildStory({
    id: 'st-a2-05', level: 'A2', titleIt: 'La prima esperienza lavorativa',
    title: { bn: 'প্রথম কাজের অভিজ্ঞতা', en: 'First work experience' },
    topic: { bn: 'কর্মক্ষেত্র ও নথি', en: 'Workplace & contracts' },
    grammarIds: ['passato-prossimo', 'tempo'],
    vocabKeys: ['w:A2:il colloquio', 'w:A2:il contratto', 'w:A2:il tirocinio'],
    paragraphs: [
      { it: 'Tre mesi fa ho mandato il mio curriculum a cinque aziende di Milano. Dopo una settimana ho ricevuto una telefonata per un colloquio.', tr: { bn: 'তিন মাস আগে আমি মিলানের পাঁচটি কোম্পানিতে আমার সিভি পাঠিয়েছি। এক সপ্তাহ পর সাক্ষাৎকারের জন্য ফোন পেলাম।', en: 'Three months ago I sent my CV to five Milan companies. A week later I got a call for an interview.' } },
      { it: 'Durante il colloquio ero un po’ nervoso, ma il direttore è stato molto paziente e mi ha spiegato tutti i dettagli del tirocinio.', tr: { bn: 'সাক্ষাৎকারের সময় আমি একটু অস্থির ছিলাম, তবে পরিচালক খুব ধৈর্যশীল ছিলেন এবং ইন্টার্নশিপের সব খুঁটিনাটি বুঝিয়ে দিলেন।', en: 'During the interview I was a bit nervous, yet the director was very patient and explained all internship details.' } },
      { it: 'Alla fine hanno scelto me! Ho firmato il contratto venerdì e lavoro qui da due settimane con colleghi simpatici.', tr: { bn: 'শেষ পর্যন্ত তারা আমাকেই বেছে নিয়েছে! শুক্রবার আমি চুক্তি স্বাক্ষর করেছি আর দুই সপ্তাহ ধরে মজার সহকর্মীদের সাথে এখানে কাজ করছি।', en: 'In the end they chose me! I signed the contract on Friday and have worked here for two weeks with friendly colleagues.' } },
    ],
    wordGlossary: [
      { word: 'scelto', base: 'scegliere', tr: { bn: 'বেছে নেওয়া (পার্টিসিপল)', en: 'chosen' }, pos: 'verb' },
      { word: 'dettagli', base: 'il dettaglio', tr: { bn: 'বিস্তারিত / খুঁটিনাটি', en: 'details' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Lavoro qui da due settimane.', ruleTitle: { bn: 'এখনো চলমান সময়কাল (da)', en: 'Ongoing duration with da' }, explanation: { bn: 'বর্তমান কাল + da + সময় বোঝায় কাজটি এখনো চলছে।', en: 'Present + da indicates ongoing duration.' }, grammarId: 'tempo' },
    ],
    mcq: [
      { id: 'st2-5-q1', prompt: { bn: 'সে কয়টি কোম্পানিতে সিভি পাঠিয়েছিল?', en: 'To how many companies did he send his CV?' }, options: ['তিনটি', 'পাঁচটি', 'সাতটি', 'দশটি'], answer: 1, explanation: { bn: 'cinque aziende = পাঁচটি কোম্পানি।', en: 'Five companies.' } },
    ],
    trueFalse: [
      { id: 'st2-5-tf1', statementIt: 'Il colloquio è andato male.', statement: { bn: 'সাক্ষাৎকারটা খারাপ হয়েছিল।', en: 'The interview went badly.' }, answer: false, explanation: { bn: 'Alla fine hanno scelto me! (তাকে বেছে নিয়েছে)।', en: 'They chose him!' } },
    ],
    fillBlank: [
      { id: 'st2-5-fb1', sentence: 'Studio informatica ___ due anni e mezzo.', options: ['fa', 'fra', 'da', 'a'], answer: 2, explanation: { bn: 'এখনো পড়ছে তাই da।', en: 'Ongoing study takes da.' } },
    ],
    shortAnswer: [
      { id: 'st2-5-sa1', question: { bn: 'শুক্রবার সে কী স্বাক্ষর করেছে?', en: 'What did he sign on Friday?' }, sampleAnswerIt: 'Ha firmato il contratto.', keywords: ['contratto'] },
    ],
    practice: {
      retellPrompt: { bn: 'একটি চাকরির সাক্ষাৎকারের অভিজ্ঞতা ৩ বাক্যে লিখুন।', en: 'Write 3 sentences about a job interview.' },
      completeMissing: { promptIt: 'Un anno ___ ho firmato il mio primo contratto.', hint: { bn: 'অতীত সময় নির্দেশ করতে fa (আগে) ব্যবহার করুন', en: 'ago' }, sampleIt: 'Un anno fa ho firmato il mio primo contratto.' },
      buildSimilar: { patternIt: 'Ho mandato il curriculum a cinque aziende.', prompt: { bn: 'আপনি কাকে ইমেইল বা সিভি পাঠিয়েছেন লিখুন।', en: 'Write about sending an email or CV.' }, sampleIt: 'Ho mandato una mail al professore.' },
      altEndingPrompt: { bn: 'প্রথম মাসের বেতন পেলে সে কী করবে লিখুন।', en: 'What might he do with his first salary?' },
    },
  }),

  buildStory({
    id: 'st-a2-06', level: 'A2', titleIt: 'Progetti per il prossimo anno',
    title: { bn: 'আগামী বছরের পরিকল্পনা', en: 'Plans for next year' },
    topic: { bn: 'ভবিষ্যৎ কাল ও স্বপ্ন', en: 'Simple future & goals' },
    grammarIds: ['futuro', 'tempo'],
    vocabKeys: ['w:A2:il futuro', 'w:A2:la laurea', 'w:A2:traslocare'],
    paragraphs: [
      { it: 'Fra sei mesi finirò tutti gli esami all’università e discuterò la mia tesi di laurea in economia.', tr: { bn: 'ছয় মাস পর আমি বিশ্ববিদ্যালয়ের সব পরীক্ষা শেষ করব এবং অর্থনীতিতে আমার থিসিস উপস্থাপন করব।', en: 'In six months I will finish all university exams and defend my economics thesis.' } },
      { it: 'Poi cercherò un appartamento più comodo vicino al centro e traslocherò con la mia migliore amica.', tr: { bn: 'তারপর কেন্দ্রের কাছে আরও আরামদায়ক একটা ফ্ল্যাট খুঁজব এবং আমার সেরা বান্ধবীর সাথে বাসা বদলাব।', en: 'Then I will look for a more comfortable flat near the centre and move in with my best friend.' } },
      { it: 'Sarà un anno pieno di novità, ma siamo sicure che faremo un ottimo lavoro insieme!', tr: { bn: 'এটি নতুনত্বে ভরা একটি বছর হবে, তবে আমরা নিশ্চিত যে একসাথে দারুণ করব!', en: 'It will be a year full of new things, and we are sure we will do great together!' } },
    ],
    wordGlossary: [
      { word: 'discuterò', base: 'discutere', tr: { bn: 'উপস্থাপন/বিতর্ক করব', en: 'I will defend (thesis)' }, pos: 'verb' },
      { word: 'novità', base: 'la novità', tr: { bn: 'নতুন বিষয়', en: 'new things / news' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Traslocherò con la mia amica.', ruleTitle: { bn: '-care ক্রিয়ার বানান (ch)', en: 'Hard c in future tense' }, explanation: { bn: 'cercare→cercherò, traslocare→traslocherò: "ক" শব্দ রাখতে h যোগ হয়।', en: 'Verbs in -care insert h before e: cercherò, traslocherò.' }, grammarId: 'futuro' },
    ],
    mcq: [
      { id: 'st2-6-q1', prompt: { bn: 'সে কোন বিষয়ে থিসিস লিখছে?', en: 'In which subject is her thesis?' }, options: ['আইন', 'অর্থনীতি', 'প্রকৌশল', 'ইতিহাস'], answer: 1, explanation: { bn: 'সঠিক উত্তর: অর্থনীতি — পাঠ্যাংশে বলা হয়েছে: «ছয় মাস পর আমি বিশ্ববিদ্যালয়ের সব পরীক্ষা শেষ করব এবং অর্থনীতিতে আমার থিসিস উপস্থাপন করব।» (tesi di laurea in economia)।', en: 'Economics.' } },
    ],
    trueFalse: [
      { id: 'st2-6-tf1', statementIt: 'Vuole vivere completamente da sola.', statement: { bn: 'সে পুরোপুরি একা থাকতে চায়।', en: 'She wants to live completely alone.' }, answer: false, explanation: { bn: 'সেরা বান্ধবীর সাথে থাকবে (con la mia migliore amica)।', en: 'She will move in with her best friend.' } },
    ],
    fillBlank: [
      { id: 'st2-6-fb1', sentence: 'L’anno prossimo noi ___ una grande festa.', options: ['faremo', 'abbiamo fatto', 'facciamo', 'facevamo'], answer: 0, explanation: { bn: 'ভবিষ্যতে noi faremo।', en: 'Future noi of fare is faremo.' } },
    ],
    shortAnswer: [
      { id: 'st2-6-sa1', question: { bn: 'কত মাস পর তার পরীক্ষা শেষ হবে?', en: 'In how many months will her exams finish?' }, sampleAnswerIt: 'Finirà fra sei mesi.', keywords: ['sei', 'mesi'] },
    ],
    practice: {
      retellPrompt: { bn: 'আগামী বছরের জন্য আপনার ৩টি পরিকল্পনা futuro-তে লিখুন।', en: 'Write 3 personal plans for next year using futuro.' },
      completeMissing: { promptIt: 'Il prossimo anno ___ una nuova lingua.', hint: { bn: 'ভবিষৎ কালের উত্তম পুরুষ (io) রূপ imparerò / studierò বসান', en: 'future io form' }, sampleIt: 'Il prossimo anno imparerò il francese.' },
      buildSimilar: { patternIt: 'Sarà un anno pieno di novità.', prompt: { bn: 'আগামী গ্রীষ্ম কেমন হবে লিখুন।', en: 'Describe what next summer will be like.' }, sampleIt: 'Sarà un’estate caldissima e divertente.' },
      altEndingPrompt: { bn: 'নতুন ফ্ল্যাটে উঠে তারা প্রথম কী করবে লিখুন।', en: 'What will they do first in the new flat?' },
    },
  }),

  buildStory({
    id: 'st-a2-07', level: 'A2', titleIt: 'La lista della spesa perduta',
    title: { bn: 'হারিয়ে যাওয়া বাজারের তালিকা', en: 'The lost shopping list' },
    topic: { bn: 'প্রত্যক্ষ সর্বনাম ও সুপারমার্কেট', en: 'Direct pronouns & shopping' },
    grammarIds: ['pronomi-diretti', 'accordo-participio'],
    vocabKeys: ['w:A2:il carrello', 'w:A2:la cassa', 'w:A2:dimenticare'],
    paragraphs: [
      { it: 'Stamattina ho scritto la lista della spesa, ma poi l’ho lasciata sul tavolo della cucina!', tr: { bn: 'আজ সকালে বাজারের তালিকা লিখেছিলাম, কিন্তু পরে ওটা রান্নাঘরের টেবিলে ফেলে এসেছি!', en: 'This morning I wrote the shopping list, then left it on the kitchen table!' } },
      { it: 'Al supermercato ho cercato le zucchine fresche e le ho messe subito nel carrello. Poi ho visto i pomodori rossi e li ho pesati.', tr: { bn: 'সুপারমার্কেটে তাজা জুকিনি খুঁজে সরাসরি ট্রলিতে রাখলাম। তারপর লাল টমেটো দেখে সেগুলো ওজন করলাম।', en: 'At the supermarket I looked for fresh courgettes and put them in the trolley. Then I saw red tomatoes and weighed them.' } },
      { it: 'Alla cassa ho chiamato mia moglie per chiedere dello zucchero: "Non preoccuparti, l’ho già comprato ieri!"', tr: { bn: 'ক্যাশ কাউন্টারে চিনির কথা জানতে স্ত্রীকে ফোন দিলাম: "চিন্তা কোরো না, ওটা আমি গতকালই কিনেছি!"', en: 'At the checkout I called my wife about sugar: "Don’t worry, I already bought it yesterday!"' } },
    ],
    wordGlossary: [
      { word: 'zucchine', base: 'la zucchina', tr: { bn: 'জুকিনি (সবজি)', en: 'courgettes' }, pos: 'noun' },
      { word: 'pesati', base: 'pesare', tr: { bn: 'ওজন করা', en: 'weighed' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ho visto i pomodori e li ho pesati.', ruleTitle: { bn: 'অতীতে lo/la/li/le-এর মিল', en: 'Pronoun-participle agreement' }, explanation: { bn: 'li (পুং বহুবচন pomodori) আগে আসায় pesati হয়েছে।', en: 'li matches masculine plural pomodori → pesati.' }, grammarId: 'accordo-participio' },
    ],
    mcq: [
      { id: 'st2-7-q1', prompt: { bn: 'বাজারের তালিকা সে কোথায় ফেলে এসেছে?', en: 'Where did he leave the shopping list?' }, options: ['গাড়িতে', 'পকেটে', 'রান্নাঘরের টেবিলে', 'অফিসে'], answer: 2, explanation: { bn: 'সঠিক উত্তর: রান্নাঘরের টেবিলে — পাঠ্যাংশে বলা হয়েছে: «আজ সকালে বাজারের তালিকা লিখেছিলাম, কিন্তু পরে ওটা রান্নাঘরের টেবিলে ফেলে এসেছি!» (sul tavolo della cucina)।', en: 'On the kitchen table.' } },
    ],
    trueFalse: [
      { id: 'st2-7-tf1', statementIt: 'Dovevano ancora comprare lo zucchero.', statement: { bn: 'তাদের তখনো চিনি কেনার বাকি ছিল।', en: 'They still needed to buy sugar.' }, answer: false, explanation: { bn: 'স্ত্রী গতকালই কিনে রেখেছিল (l’ho già comprato ieri)।', en: 'His wife already bought it yesterday.' } },
    ],
    fillBlank: [
      { id: 'st2-7-fb1', sentence: 'Dove sono le mele? ___ ho lavate prima.', options: ['Li', 'Le', 'Lo', 'Ci'], answer: 1, explanation: { bn: 'le mele স্ত্রীলিঙ্গ বহুবচন → Le।', en: 'le mele takes Le.' } },
    ],
    shortAnswer: [
      { id: 'st2-7-sa1', question: { bn: 'ট্রলিতে সে কোন দুটি সবজি রেখেছে?', en: 'Which two vegetables did he get?' }, sampleAnswerIt: 'Ha preso le zucchine e i pomodori.', keywords: ['zucchine', 'pomodori'] },
    ],
    practice: {
      retellPrompt: { bn: 'lo/la/li/le ব্যবহার করে আপনার শেষ বাজারের ৩টি বাক্য লিখুন।', en: 'Write 3 sentences about your last grocery shop using lo/la/li/le.' },
      completeMissing: { promptIt: 'Il pane fresco? ___ ho comprato al panificio.', hint: { bn: 'স্বরবর্ণ বা h-এর আগে প্রত্যক্ষ সর্বনাম lo সংক্ষিপ্ত হয়ে L’ হয়', en: 'Direct pronoun lo + h → L’' }, sampleIt: 'Il pane fresco? L’ho comprato al panificio.' },
      buildSimilar: { patternIt: 'Ho visto i pomodori e li ho comprati.', prompt: { bn: 'দুটি জিনিস কেনার একটি বাক্য লিখুন।', en: 'Write a sentence about buying items.' }, sampleIt: 'Ho trovato le scarpe nere e le ho comprate.' },
      altEndingPrompt: { bn: 'বাড়ি ফিরে রান্নার জন্য কী হবে লিখুন।', en: 'What will they cook once home?' },
    },
  }),

  buildStory({
    id: 'st-a2-08', level: 'A2', titleIt: 'Un favore a una vicina',
    title: { bn: 'প্রতিবেশীকে একটু সাহায্য', en: 'A favour for a neighbour' },
    topic: { bn: 'পরোক্ষ সর্বনাম ও sapere/conoscere', en: 'Indirect pronouns & politeness' },
    grammarIds: ['pronomi-indiretti', 'verbi-servizio-a2'],
    vocabKeys: ['w:A2:il vicino di casa', 'w:A2:aiutare', 'w:A2:prestare'],
    paragraphs: [
      { it: 'La signora Conti abita al quarto piano del nostro condominio. Io e mia sorella la conosciamo bene perché è sempre gentile.', tr: { bn: 'মিসেস কন্তি আমাদের ভবনের চারতলায় থাকেন। আমি ও আমার বোন তাঁকে ভালো চিনি কারণ তিনি সবসময় ভদ্র।', en: 'Mrs Conti lives on the fourth floor of our building. My sister and I know her well because she is always kind.' } },
      { it: 'Ieri pomeriggio aveva molte borse pesanti e non poteva usare l’ascensore rotto. Le abbiamo dato subito una mano.', tr: { bn: 'গতকাল বিকেলে তাঁর হাতে অনেক ভারী ব্যাগ ছিল এবং ভাঙা লিফট ব্যবহার করতে পারছিলেন না। আমরা সাথে সাথে তাঁকে সাহায্য করেছি।', en: 'Yesterday afternoon she had many heavy bags and couldn’t use the broken lift. We immediately gave her a hand.' } },
      { it: 'Stamattina ci ha ringraziato e ci ha portato una torta fatta in casa. Non sapevo che cucinasse così bene!', tr: { bn: 'আজ সকালে তিনি আমাদের ধন্যবাদ জানিয়েছেন এবং বাড়িতে বানানো একটা কেক এনে দিয়েছেন। আমি জানতাম না তিনি এত ভালো রান্না করেন!', en: 'This morning she thanked us and brought us a homemade cake. I didn’t know she baked so well!' } },
    ],
    wordGlossary: [
      { word: 'dare una mano', base: 'mano', tr: { bn: 'সাহায্য করা', en: 'to lend a hand' }, pos: 'phrase' },
      { word: 'rotto', base: 'rompere', tr: { bn: 'ভাঙা / নষ্ট', en: 'broken' }, pos: 'adj' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Le abbiamo dato una mano.', ruleTitle: { bn: 'পরোক্ষ সর্বনাম le (তাঁকে-স্ত্রী)', en: 'Indirect le (to her)' }, explanation: { bn: 'একজন মহিলাকে সাহায্য বোঝাতে ক্রিয়ার আগে le বসে; avere-এর পার্টিসিপল dato অপরিবর্তিত থাকে।', en: 'Indirect le precedes the verb; participle stays -o.' }, grammarId: 'pronomi-indiretti' },
    ],
    mcq: [
      { id: 'st2-8-q1', prompt: { bn: 'লিফটে কী সমস্যা ছিল?', en: 'What was wrong with the lift?' }, options: ['ছোট ছিল', 'বন্ধ ছিল / নষ্ট ছিল', 'অন্ধকার ছিল', 'ধীরগতির ছিল'], answer: 1, explanation: { bn: 'l’ascensore rotto = নষ্ট লিফট।', en: 'It was broken.' } },
    ],
    trueFalse: [
      { id: 'st2-8-tf1', statementIt: 'La signora Conti abita al primo piano.', statement: { bn: 'মিসেস কন্তি প্রথম তলায় (১ম তলায়) থাকেন।', en: 'Mrs Conti lives on the first floor.' }, answer: false, explanation: { bn: 'al quarto piano (চারতলায়)।', en: 'She lives on the fourth floor.' } },
    ],
    fillBlank: [
      { id: 'st2-8-fb1', sentence: 'La nostra vicina è gentile: domani ___ portiamo i fiori.', options: ['la', 'le', 'gli', 'ne'], answer: 1, explanation: { bn: 'তাঁকে (মহিলাকে) দিতে → le।', en: 'To her = le.' } },
    ],
    shortAnswer: [
      { id: 'st2-8-sa1', question: { bn: 'প্রতিবেশী তাদের কী উপহার এনে দিলেন?', en: 'What did the neighbour bring them?' }, sampleAnswerIt: 'Ha portato una torta fatta in casa.', keywords: ['torta'] },
    ],
    practice: {
      retellPrompt: { bn: 'প্রতিবেশীকে সাহায্য করার ঘটনা ৩ বাক্যে লিখুন।', en: 'Retell helping the neighbour in 3 sentences.' },
      completeMissing: { promptIt: '___ bene il mio quartiere, ma non ___ tutti gli orari.', hint: { bn: 'স্থান বা ব্যক্তি চেনা বোঝাতে conosco এবং তথ্য জানা বোঝাতে so বসান', en: 'place vs fact' }, sampleIt: 'Conosco bene il mio quartiere, ma non so tutti gli orari.' },
      buildSimilar: { patternIt: 'Le abbiamo dato subito una mano.', prompt: { bn: 'কাউকে সাহায্য করার একটি বাক্য লিখুন।', en: 'Write about helping someone.' }, sampleIt: 'Gli ho prestato il mio dizionario.' },
      altEndingPrompt: { bn: 'কেক খেতে খেতে তারা কী কথা বলতে পারে লিখুন।', en: 'What might they chat about over cake?' },
    },
  }),

  buildStory({
    id: 'st-a2-09', level: 'A2', titleIt: 'Il trasloco di sabato',
    title: { bn: 'শনিবারের বাসা বদল', en: 'Moving house on Saturday' },
    topic: { bn: 'বাসস্থান ও আসবাবপত্র', en: 'Home & moving house' },
    grammarIds: ['passato-essere', 'preposizioni-articolate'],
    vocabKeys: ['w:A2:traslocare', 'w:A2:il divano', 'w:A2:il balcone'],
    paragraphs: [
      { it: 'Sabato scorso siamo finalmente traslocati nel nuovo appartamento vicino alla stazione. Tre amici sono venuti ad aiutarci con gli scatoloni.', tr: { bn: 'গত শনিবার আমরা অবশেষে স্টেশনের কাছের নতুন অ্যাপার্টমেন্টে উঠেছি। বাক্স-পেঁটরা নিয়ে সাহায্য করতে তিনজন বন্ধু এসেছিল।', en: 'Last Saturday we finally moved into our new flat near the station. Three friends came to help with the boxes.' } },
      { it: 'Abbiamo portato il divano, lo specchio grande e l’armadio fino al secondo piano per le scale.', tr: { bn: 'আমরা সিঁড়ি দিয়ে দোতলা পর্যন্ত সোফা, বড় আয়না আর আলমারি নিয়ে এসেছি।', en: 'We carried the sofa, large mirror, and wardrobe up the stairs to the second floor.' } },
      { it: 'La sera eravamo stanchi ma felici: dal balcone si vede un bellissimo giardino pieno di alberi.', tr: { bn: 'সন্ধ্যায় আমরা ক্লান্ত কিন্তু খুশি ছিলাম: বারান্দা থেকে গাছে ভরা একটা সুন্দর বাগান দেখা যায়।', en: 'In the evening we were tired yet happy: from the balcony you can see a lovely garden full of trees.' } },
    ],
    wordGlossary: [
      { word: 'scatoloni', base: 'lo scatolone', tr: { bn: 'বড় কার্ডবোর্ডের বাক্স', en: 'moving boxes' }, pos: 'noun' },
      { word: 'si vede', base: 'vedere', tr: { bn: 'দেখা যায়', en: 'can be seen' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Sono venuti ad aiutarci.', ruleTitle: { bn: 'andare/venire + a + ইনফিনিটিভ', en: 'Motion verbs + a + infinitive' }, explanation: { bn: 'উদ্দেশ্য বোঝাতে venire/andare-এর পর a + infinito (ব্যঞ্জন বা স্বর সামনে ad) বসে।', en: 'Use a (ad before vowel) + infinitive after venire.' }, grammarId: 'passato-essere' },
    ],
    mcq: [
      { id: 'st2-9-q1', prompt: { bn: 'নতুন ফ্ল্যাটটি কত তলায়?', en: 'Which floor is the new flat on?' }, options: ['নিচতলা', 'দোতলা', 'তিনতলা', 'পাঁচতলা'], answer: 1, explanation: { bn: 'al secondo piano = দোতলায়।', en: 'Second floor.' } },
    ],
    trueFalse: [
      { id: 'st2-9-tf1', statementIt: 'Hanno usato l’ascensore per il divano.', statement: { bn: 'সোফা তুলতে তারা লিফট ব্যবহার করেছে।', en: 'They used the lift for the sofa.' }, answer: false, explanation: { bn: 'per le scale (সিঁড়ি দিয়ে তুলেছে)।', en: 'They carried it up the stairs.' } },
    ],
    fillBlank: [
      { id: 'st2-9-fb1', sentence: 'I nostri amici ___ venuti presto sabato.', options: ['hanno', 'sono', 'siamo', 'avete'], answer: 1, explanation: { bn: 'venire essere নেয় → sono venuti।', en: 'venire takes essere.' } },
    ],
    shortAnswer: [
      { id: 'st2-9-sa1', question: { bn: 'বারান্দা থেকে কী দেখা যায়?', en: 'What can be seen from the balcony?' }, sampleAnswerIt: 'Si vede un bellissimo giardino.', keywords: ['giardino'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপনার পছন্দের একটি বাসার বর্ণনা ৩ বাক্যে দিন।', en: 'Describe your ideal flat in 3 sentences.' },
      completeMissing: { promptIt: 'Siamo ___ a trovare il nuovo quartiere.', hint: { bn: 'বহুবচন কর্তার সাথে সঙ্গতি রেখে পার্টিসিপল andati / venuti বসান', en: 'plural participle' }, sampleIt: 'Siamo andati a trovare i nostri amici.' },
      buildSimilar: { patternIt: 'Dal balcone si vede un bel giardino.', prompt: { bn: 'আপনার জানালা বা বারান্দা থেকে কী দেখা যায় লিখুন।', en: 'Write what you see from your window.' }, sampleIt: 'Dalla finestra si vede la piazza.' },
      altEndingPrompt: { bn: 'পরদিন সকালে তারা নতুন ফ্ল্যাট কীভাবে সাজাবে লিখুন।', en: 'How might they decorate the flat the next day?' },
    },
  }),

  buildStory({
    id: 'st-a2-10', level: 'A2', titleIt: 'Treno o autobus per Venezia?',
    title: { bn: 'ভেনিস যেতে ট্রেন নাকি বাস?', en: 'Train or bus to Venice?' },
    topic: { bn: 'তুলনা ও যাতায়াত', en: 'Comparatives & travel' },
    grammarIds: ['comparativi', 'comparativi-irregolari'],
    vocabKeys: ['w:A2:il volo', 'w:A2:comodo', 'w:A2:il ritardo'],
    paragraphs: [
      { it: 'Dobbiamo andare a Venezia per un convegno venerdì prossimo. Secondo me il treno è più comodo e più veloce dell’autobus.', tr: { bn: 'আগামী শুক্রবার এক সম্মেলনের জন্য আমাদের ভেনিস যেতে হবে। আমার মতে ট্রেন বাসের চেয়ে বেশি আরামদায়ক ও দ্রুত।', en: 'We need to go to Venice for a conference next Friday. In my view the train is more comfortable and faster than the bus.' } },
      { it: 'Marco però dice che l’autobus è meno caro del treno alta velocità e parte esattamente vicino a casa nostra.', tr: { bn: 'তবে মার্কো বলে যে বাস হাই-স্পিড ট্রেনের চেয়ে কম দামি এবং আমাদের বাড়ির একদম কাছ থেকে ছাড়ে।', en: 'Marco says, however, that the bus is cheaper than the high-speed train and departs right near our house.' } },
      { it: 'Alla fine scegliamo il treno regionale: dura quanto l’autobus, ma non c’è mai traffico sui binari!', tr: { bn: 'শেষ পর্যন্ত আমরা আঞ্চলিক ট্রেন বেছে নিয়েছি: এতে বাসের সমানই সময় লাগে, কিন্তু রেললাইনে কখনো যানজট থাকে না!', en: 'In the end we choose the regional train: it takes as long as the bus, yet there is never traffic on the tracks!' } },
    ],
    wordGlossary: [
      { word: 'convegno', base: 'il convegno', tr: { bn: 'সম্মেলন / সেমিনার', en: 'conference' }, pos: 'noun' },
      { word: 'alta velocità', base: 'velocità', tr: { bn: 'উচ্চগতি (হাই-স্পিড)', en: 'high speed' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Dura quanto l’autobus.', ruleTitle: { bn: 'সমান তুলনা (quanto)', en: 'Equality comparison (quanto)' }, explanation: { bn: 'দুটি কাজের সময় বা পরিমাণ সমান বোঝাতে quanto বসে।', en: 'quanto compares equal degree or duration.' }, grammarId: 'comparativi' },
    ],
    mcq: [
      { id: 'st2-10-q1', prompt: { bn: 'শেষ পর্যন্ত তারা কোন যানে যাওয়ার সিদ্ধান্ত নিল?', en: 'Which transport did they pick in the end?' }, options: ['বিমান', 'বাস', 'আঞ্চলিক ট্রেন', 'গাড়ি'], answer: 2, explanation: { bn: 'সঠিক উত্তর: আঞ্চলিক ট্রেন — পাঠ্যাংশে বলা হয়েছে: «শেষ পর্যন্ত আমরা আঞ্চলিক ট্রেন বেছে নিয়েছি: এতে বাসের সমানই সময় লাগে, কিন্তু রেললাইনে কখনো যানজট থাকে না!» (il treno regionale)।', en: 'The regional train.' } },
    ],
    trueFalse: [
      { id: 'st2-10-tf1', statementIt: 'L’autobus è più caro del treno alta velocità.', statement: { bn: 'বাস হাই-স্পিড ট্রেনের চেয়ে বেশি দামি।', en: 'The bus is more expensive than the high-speed train.' }, answer: false, explanation: { bn: 'meno caro (কম দামি)।', en: 'It is less expensive.' } },
    ],
    fillBlank: [
      { id: 'st2-10-fb1', sentence: 'Questo viaggio è ___ lungo di quello scorso.', options: ['più', 'come', 'migliore', 'quanto di'], answer: 0, explanation: { bn: 'più … di = চেয়ে বেশি।', en: 'More … than = più … di.' } },
    ],
    shortAnswer: [
      { id: 'st2-10-sa1', question: { bn: 'তারা কেন ট্রেন পছন্দ করল?', en: 'Why did they prefer the train?' }, sampleAnswerIt: 'Perché non c’è mai traffico sui binari.', keywords: ['traffico'] },
    ],
    practice: {
      retellPrompt: { bn: 'ট্রেন বনাম বাসের তুলনা করে ৩ বাক্য লিখুন।', en: 'Compare train vs bus in 3 sentences.' },
      completeMissing: { promptIt: 'Il treno è ___ veloce dell’autobus.', hint: { bn: 'তুলনামূলক বিশেষণে più (বেশি) অথবা meno (কম) বসান', en: 'comparative' }, sampleIt: 'Il treno è più veloce dell’autobus.' },
      buildSimilar: { patternIt: 'Questo bar è meno caro di quello in piazza.', prompt: { bn: 'দুটো দোকানের বা শহরের তুলনা করুন।', en: 'Compare two shops or cities.' }, sampleIt: 'Milano è più grande di Pisa.' },
      altEndingPrompt: { bn: 'ভেনিসে পৌঁছে তারা প্রথমে কোথায় যাবে লিখুন।', en: 'Where will they go upon reaching Venice?' },
    },
  }),

  buildStory({
    id: 'st-a2-11', level: 'A2', titleIt: 'Una telefonata dal supermercato',
    title: { bn: 'সুপারমার্কেট থেকে ফোন', en: 'A phone call from the supermarket' },
    topic: { bn: 'চলমান কাজ (stare + gerundio)', en: 'Actions in progress' },
    grammarIds: ['gerundio', 'pronomi-diretti'],
    vocabKeys: ['w:A2:gli ingredienti', "w:A2:l'offerta", 'w:A2:la cassa'],
    paragraphs: [
      { it: 'Mentre sto cucinando gli spaghetti, mi accorgo che manca l’olio d’oliva. Chiamo subito mio fratello che sta facendo la spesa.', tr: { bn: 'আমি যখন স্প্যাগেটি রান্না করছি, তখন খেয়াল করলাম অলিভ অয়েল নেই। সাথে সাথে ভাইকে ফোন দিলাম, যে তখন বাজার করছে।', en: 'While I am cooking spaghetti, I notice we are out of olive oil. I immediately call my brother who is doing the shopping.' } },
      { it: '"Ciao, dove sei?" "Sto guardando le offerte vicino alle casse, ci sono anche le bottiglie d’olio in sconto!"', tr: { bn: '"হ্যালো, কোথায় তুমি?" "ক্যাশ কাউন্টারের কাছে অফারগুলো দেখছি, ছাড়ে অলিভ অয়েলের বোতলও আছে!"', en: '"Hi, where are you?" "I am looking at the offers near the tills—there are oil bottles on discount too!"' } },
      { it: '"Perfetto, prendine una bottiglia grande! Intanto io sto preparando l’insalata."', tr: { bn: '"দারুণ, একটা বড় বোতল নিও! এর ফাঁকে আমি সালাদ তৈরি করছি।"', en: '"Perfect, grab a big bottle! Meanwhile I am making the salad."' } },
    ],
    wordGlossary: [
      { word: 'mi accorgo', base: 'accorgersi', tr: { bn: 'খেয়াল করা / বুঝতে পারা', en: 'I notice' }, pos: 'verb' },
      { word: 'in sconto', base: 'sconto', tr: { bn: 'ছাড়ে', en: 'on discount' }, pos: 'phrase' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Sto guardando le offerte.', ruleTitle: { bn: 'ঘটমান বর্তমান কাল (stare + gerundio)', en: 'Present continuous' }, explanation: { bn: 'চলমান কাজ বোঝাতে sto + -ando / -endo বসে।', en: 'stare + -ando/-endo shows ongoing action.' }, grammarId: 'gerundio' },
    ],
    mcq: [
      { id: 'st2-11-q1', prompt: { bn: 'রান্নার সময় কোন উপকরণ কম ছিল?', en: 'Which ingredient was missing?' }, options: ['লবণ', 'অলিভ অয়েল', 'রসুন', 'ময়দা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: অলিভ অয়েল — পাঠ্যাংশে বলা হয়েছে: «আমি যখন স্প্যাগেটি রান্না করছি, তখন খেয়াল করলাম অলিভ অয়েল নেই। সাথে সাথে ভাইকে ফোন দিলাম, যে তখন বাজার করছে।» (manca l’olio d’oliva)।', en: 'Olive oil.' } },
    ],
    trueFalse: [
      { id: 'st2-11-tf1', statementIt: 'Il fratello è già tornato a casa.', statement: { bn: 'ভাই ইতিমধ্যে বাড়িতে ফিরে এসেছে।', en: 'The brother is already back home.' }, answer: false, explanation: { bn: 'সুপারমার্কেটে বাজার করছে (sta facendo la spesa)।', en: 'He is still shopping.' } },
    ],
    fillBlank: [
      { id: 'st2-11-fb1', sentence: 'Noi ___ aspettando la conferma dal corriere.', options: ['siamo', 'stiamo', 'abbiamo', 'facciamo'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «stare + gerundio» থেকে পরিবর্তিত হয়ে «stiamo aspettando» ব্যবহৃত হয়।', en: 'stare + gerund takes stiamo.' } },
    ],
    shortAnswer: [
      { id: 'st2-11-sa1', question: { bn: 'ভাইয়ের সাথে কথা বলার সময় সে কী তৈরি করছিল?', en: 'What was the caller making while phoning?' }, sampleAnswerIt: 'Stava preparando gli spaghetti e l’insalata.', keywords: ['spaghetti', 'insalata'] },
    ],
    practice: {
      retellPrompt: { bn: 'পরিবারের সবাই এখন কী করছে তা stare + gerundio দিয়ে লিখুন।', en: 'Write what your family/friends are doing right now using stare + gerundio.' },
      completeMissing: { promptIt: 'Scusa, non posso parlare: ___ lavorando.', hint: { bn: 'io কর্তার সাথে ঘটমান বর্তমান গঠনে sto ব্যবহার করুন', en: 'stare for io' }, sampleIt: 'Scusa, non posso parlare: sto guidando.' },
      buildSimilar: { patternIt: 'Intanto sto preparando l’insalata.', prompt: { bn: 'এই মুহূর্তে আপনি কী করছেন লিখুন।', en: 'Write what you are doing right now.' }, sampleIt: 'Adesso sto studiando italiano sul telefono.' },
      altEndingPrompt: { bn: 'ভাই বাসায় ফিরে এলে ডিনারে কী হবে লিখুন।', en: 'What happens at dinner when the brother arrives?' },
    },
  }),
];
