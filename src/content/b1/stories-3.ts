import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const B1_STORIES_3: StoryItem[] = [
  buildStory({
    id: 'st-b1-29', level: 'B1', titleIt: 'Ristrutturare casa con il mutuo',
    title: { bn: 'গৃহঋণ নিয়ে বাড়ি সংস্কার', en: 'Renovating a home with a mortgage' },
    topic: { bn: 'আবাসন ও প্রেরণার্থক ক্রিয়া (fare / lasciare)', en: 'Housing & causatives (fare / lasciare)' },
    grammarIds: ['causativi-fare-lasciare'],
    vocabKeys: ['w:B1:riparare', 'w:B1:il mutuo'],
    paragraphs: [
      { it: 'Dopo anni di affitto, abbiamo acceso un mutuo agevolato per acquistare un vecchio appartamento vicino alla stazione. Prima del trasloco, abbiamo fatto riparare l’impianto elettrico da un tecnico qualificato.', tr: { bn: 'বহু বছর ভাড়ায় থাকার পর স্টেশনের কাছে একটি পুরোনো ফ্ল্যাট কেনার জন্য আমরা স্বল্পসুদে গৃহঋণ নিয়েছি। বাসা বদলের আগে একজন দক্ষ টেকনিশিয়ানকে দিয়ে বৈদ্যুতিক সংযোগ মেরামত করিয়েছি।', en: 'After years of renting, we took out a subsidised mortgage to buy an old flat near the station. Before moving in, we had the electrical system repaired by a qualified technician.' } },
      { it: 'Inoltre ci siamo fatti consigliare da un’architetta per sfruttare meglio la luce naturale e abbiamo fatto abbattere una parete divisoria.', tr: { bn: 'তাছাড়া প্রাকৃতিক আলো আরও ভালোভাবে কাজে লাগাতে আমরা একজন স্থপতির পরামর্শ নিয়েছি এবং একটি বিভাজক দেয়াল ভেঙে ফেলিয়েছি।', en: 'Furthermore, we got advice from an architect to make better use of natural light and had a partition wall knocked down.' } },
      { it: 'Il proprietario precedente ci ha lasciato tenere la grande libreria in legno massello che arredava lo studio.', tr: { bn: 'আগের মালিক আমাদের পড়ার ঘরে সাজানো নিরেট কাঠের বড় বুকশেলফটি রেখে দিতে দিয়েছেন।', en: 'The previous owner let us keep the large solid-wood bookcase that furnished the study.' } },
    ],
    wordGlossary: [
      { word: 'riparare', base: 'riparare', tr: { bn: 'মেরামত করা', en: 'to repair' }, pos: 'verb' },
      { word: 'mutuo', base: 'il mutuo', tr: { bn: 'গৃহঋণ / মর্টগেজ', en: 'mortgage' }, pos: 'noun' },
      { word: 'parete divisoria', base: 'la parete divisoria', tr: { bn: 'বিভাজক দেয়াল', en: 'partition wall' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Abbiamo fatto riparare l’impianto; ci ha lasciato tenere la libreria.', ruleTitle: { bn: 'প্রযোজক ক্রিয়ার গঠন (Fare / Farsi / Lasciare + infinito)', en: 'Causative constructions' }, explanation: { bn: 'অন্যকে দিয়ে কাজ করানোতে abbiamo fatto riparare / ci siamo fatti consigliare এবং অনুমতি দেওয়াতে ci ha lasciato tenere ব্যবহৃত হয়েছে।', en: 'fatto riparare = had repaired; lasciato tenere = let us keep.' }, grammarId: 'causativi-fare-lasciare' },
    ],
    mcq: [
      { id: 'stb1-29-q1', prompt: { bn: 'প্রাকৃতিক আলো বাড়াতে তারা কী করিয়েছেন?', en: 'What did they have done to increase natural light?' }, options: ['ছাদ খুলেছেন', 'একটি বিভাজক দেয়াল ভেঙে ফেলিয়েছেন', 'বারান্দা বন্ধ করেছেন', 'কালো পর্দা লাগিয়েছেন'], answer: 1, explanation: { bn: 'সঠিক উত্তর: একটি বিভাজক দেয়াল ভেঙে ফেলিয়েছেন — পাঠ্যাংশে বলা হয়েছে: «বহু বছর ভাড়ায় থাকার পর স্টেশনের কাছে একটি পুরোনো ফ্ল্যাট কেনার জন্য আমরা স্বল্পসুদে গৃহঋণ নিয়েছি। বাসা বদলের আগে একজন দক্ষ টেকনিশিয়ানকে দিয়ে বৈদ্যুতিক সংযোগ মেরামত করিয়েছি।» (abbiamo fatto abbattere una parete divisoria)।', en: 'They had a partition wall knocked down.' } },
    ],
    trueFalse: [
      { id: 'stb1-29-tf1', statementIt: 'Il proprietario precedente ha portato via la libreria in legno.', statement: { bn: 'আগের মালিক কাঠের বুকশেলফটি নিয়ে গেছেন।', en: 'The previous owner took the wooden bookcase away.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «আগের মালিক আমাদের পড়ার ঘরে সাজানো নিরেট কাঠের বড় বুকশেলফটি রেখে দিতে দিয়েছেন।» (ci ha lasciato tenere la grande libreria)।', en: 'He let them keep it.' } },
    ],
    fillBlank: [
      { id: 'stb1-29-fb1', sentence: 'Abbiamo ___ controllare il tetto dal muratore.', options: ['fatto', 'fato', 'facendo', 'fatti'], answer: 0, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «avere + fatto + infinito» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'abbiamo fatto controllare.' } },
    ],
    shortAnswer: [
      { id: 'stb1-29-sa1', question: { bn: 'বাসা বদলের আগে তারা কার মাধ্যমে বৈদ্যুতিক সংযোগ মেরামত করিয়েছেন?', en: 'Who repaired the electrical system before they moved in?' }, sampleAnswerIt: 'Hanno fatto riparare l’impianto da un tecnico qualificato.', keywords: ['tecnico', 'qualificato'] },
    ],
    practice: {
      retellPrompt: { bn: 'ফ্ল্যাট সংস্কারের কাজগুলো fare + infinito দিয়ে ৩ বাক্যে লিখুন।', en: 'Describe the flat renovation in 3 sentences using fare + infinitive.' },
      completeMissing: { promptIt: 'Domani mi ___ tagliare i capelli dal parrucchiere.', hint: { bn: 'প্রযোজক ক্রিয়ার বর্তমান (faccio) বা ভবিষ্যৎ (farò) রূপ বসান', en: 'faccio or farò' }, sampleIt: 'Domani mi farò tagliare i capelli dal parrucchiere.' },
      buildSimilar: { patternIt: 'Abbiamo fatto riparare l’impianto elettrico.', prompt: { bn: 'Ho fatto... দিয়ে অন্যকে দিয়ে করানো একটি কাজের কথা লিখুন।', en: 'Write a sentence starting with Ho fatto...' }, sampleIt: 'Ho fatto controllare il contratto da un avvocato.' },
      altEndingPrompt: { bn: 'সংস্কার শেষে নতুন বসার ঘরটি কেমন দেখাচ্ছে লিখুন।', en: 'Describe how the renovated living room looks now.' },
    },
  }),

  buildStory({
    id: 'st-b1-30', level: 'B1', titleIt: 'La dichiarazione del sindaco sul cantiere',
    title: { bn: 'রাস্তার সংস্কার কাজ নিয়ে মেয়রের ঘোষণা', en: 'The mayor’s statement on the roadworks' },
    topic: { bn: 'নাগরিক সংবাদ ও অতীতে পরোক্ষ উক্তি', en: 'Local news & past reported speech' },
    grammarIds: ['discorso-indiretto-passato'],
    vocabKeys: ['w:B1:il sindaco', 'w:B1:la dichiarazione', 'w:B1:il cantiere stradale'],
    paragraphs: [
      { it: 'Durante la conferenza stampa di ieri, il sindaco ha rilasciato una dichiarazione ufficiale riguardo al grande cantiere stradale davanti alla stazione centrale.', tr: { bn: 'গতকালের সংবাদ সম্মেলনে মেয়র কেন্দ্রীয় স্টেশনের সামনের বড় রাস্তার সংস্কার কাজ সম্পর্কে একটি আনুষ্ঠানিক ঘোষণা দিয়েছেন।', en: 'During yesterday’s press conference, the mayor issued an official statement regarding the major roadworks in front of the central station.' } },
      { it: 'Ha spiegato che i lavori erano iniziati con due settimane di ritardo a causa della pioggia, ma ha assicurato che la ditta avrebbe raddoppiato i turni operativi.', tr: { bn: 'তিনি ব্যাখ্যা করেন যে বৃষ্টির কারণে দুই সপ্তাহ দেরিতে কাজ শুরু হয়েছিল, তবে আশ্বস্ত করেন যে ঠিকাদারি প্রতিষ্ঠান কাজের শিফট দ্বিগুণ করবে।', en: 'He explained that the works had started two weeks late due to rain, but assured everyone that the contractor would double the operating shifts.' } },
      { it: 'Infine ha promesso ai commercianti della zona che la piazza sarebbe stata riaperta al pubblico entro la fine del mese successivo.', tr: { bn: 'সবশেষে তিনি এলাকার ব্যবসায়ীদের কথা দেন যে পরের মাসের শেষ নাগাদ চত্বরটি জনসাধারণের জন্য পুনরায় খুলে দেওয়া হবে।', en: 'Finally he promised local shopkeepers that the square would be reopened to the public by the end of the following month.' } },
    ],
    wordGlossary: [
      { word: 'sindaco', base: 'il sindaco', tr: { bn: 'মেয়র', en: 'mayor' }, pos: 'noun' },
      { word: 'dichiarazione', base: 'la dichiarazione', tr: { bn: 'ঘোষণা / বিবৃতি', en: 'statement / declaration' }, pos: 'noun' },
      { word: 'cantiere stradale', base: 'il cantiere stradale', tr: { bn: 'রাস্তার নির্মাণস্থল', en: 'roadworks site' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ha spiegato che i lavori erano iniziati… ha assicurato che avrebbe raddoppiato i turni.', ruleTitle: { bn: 'অতীত পরোক্ষ উক্তিতে কালের পরিবর্তন (Discorso indiretto al passato)', en: 'Past indirect speech tense shifts' }, explanation: { bn: 'Ha spiegato / ha promesso-র পরে অতীত ঘটনা trapassato (erano iniziati) এবং ভবিষ্যৎ প্রতিশ্রুতি condizionale passato (avrebbe raddoppiato, sarebbe stata riaperta) হয়েছে।', en: 'Prior past becomes pluperfect and future promise becomes past conditional.' }, grammarId: 'discorso-indiretto-passato' },
    ],
    mcq: [
      { id: 'stb1-30-q1', prompt: { bn: 'কেন দুই সপ্তাহ দেরিতে কাজ শুরু হয়েছিল?', en: 'Why had the works started two weeks late?' }, options: ['শ্রমিক ধর্মঘটে', 'বৃষ্টির কারণে', 'নকশা বদলের জন্য', 'উপকরণের অভাবে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: বৃষ্টির কারণে — পাঠ্যাংশে বলা হয়েছে: «তিনি ব্যাখ্যা করেন যে বৃষ্টির কারণে দুই সপ্তাহ দেরিতে কাজ শুরু হয়েছিল, তবে আশ্বস্ত করেন যে ঠিকাদারি প্রতিষ্ঠান কাজের শিফট দ্বিগুণ করবে।» (a causa della pioggia)।', en: 'Because of the rain.' } },
    ],
    trueFalse: [
      { id: 'stb1-30-tf1', statementIt: 'Il cantiere si trova davanti alla stazione centrale.', statement: { bn: 'নির্মাণস্থলটি কেন্দ্রীয় স্টেশনের সামনে অবস্থিত।', en: 'The roadworks site is in front of the central station.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «গতকালের সংবাদ সম্মেলনে মেয়র কেন্দ্রীয় স্টেশনের সামনের বড় রাস্তার সংস্কার কাজ সম্পর্কে একটি আনুষ্ঠানিক ঘোষণা দিয়েছেন।» (davanti alla stazione centrale)।', en: 'In front of the central station.' } },
    ],
    fillBlank: [
      { id: 'stb1-30-fb1', sentence: 'Il sindaco ha promesso che la piazza ___ riaperta presto.', options: ['sarà', 'sarebbe stata', 'sia stata', 'era'], answer: 1, explanation: { bn: 'অতীতের প্রতিশ্রুতির পর কর্মবাচ্যে sarebbe stata riaperta।', en: 'sarebbe stata riaperta.' } },
    ],
    shortAnswer: [
      { id: 'stb1-30-sa1', question: { bn: 'কাজ দ্রুত শেষ করতে ঠিকাদারি প্রতিষ্ঠান কী করবে?', en: 'What would the contractor do to speed up the work?' }, sampleAnswerIt: 'La ditta avrebbe raddoppiato i turni operativi.', keywords: ['raddoppiato', 'turni'] },
    ],
    practice: {
      retellPrompt: { bn: 'মেয়রের ঘোষণাটি পরোক্ষ উক্তিতে ৩ বাক্যে লিখুন।', en: 'Report the mayor’s announcement in 3 sentences.' },
      completeMissing: { promptIt: 'L’ingegnere disse che i lavori ___ finiti a novembre.', hint: { bn: 'পরোক্ষ উক্তিতে ভবিষ্যৎ বোঝাতে অতীত কন্ডিশনাল sarebbero বসান', en: 'sarebbero' }, sampleIt: 'L’ingegnere disse che i lavori sarebbero finiti a novembre.' },
      buildSimilar: { patternIt: 'Ha assicurato che avrebbe risolto il problema.', prompt: { bn: 'Ha promesso che avrebbe... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Ha promesso che avrebbe...' }, sampleIt: 'Ha promesso che avrebbe inviato il verbale entro sera.' },
      altEndingPrompt: { bn: 'চত্বরটি পুনরায় খোলার দিন ব্যবসায়ীরা কী করলেন লিখুন।', en: 'Write what shopkeepers did on the day the square reopened.' },
    },
  }),

  buildStory({
    id: 'st-b1-31', level: 'B1', titleIt: 'Dal laboratorio al tirocinio in azienda',
    title: { bn: 'ল্যাবরেটরি থেকে কোম্পানিতে ইন্টার্নশিপ', en: 'From the laboratory to a company internship' },
    topic: { bn: 'গবেষণা ও অতীত ইনফিনিটিভ (infinito passato)', en: 'Research & past infinitive' },
    grammarIds: ['infinito-passato'],
    vocabKeys: ['w:B1:analizzare', 'w:B1:il riassunto', 'w:B1:il tirocinio'],
    paragraphs: [
      { it: 'Dopo aver completato tutti gli esami del corso magistrale, Samira ha iniziato un tirocinio curricolare presso un centro di ricerca agroalimentare a Parma.', tr: { bn: 'মাস্টার্স কোর্সের সব পরীক্ষা শেষ করার পর সামিরা পার্মার একটি কৃষি-খাদ্য গবেষণা কেন্দ্রে পাঠ্যক্রমভুক্ত ইন্টার্নশিপ শুরু করেছে।', en: 'After completing all her master’s degree exams, Samira started a curricular internship at an agri-food research centre in Parma.' } },
      { it: 'Il suo primo compito consisteva nell’analizzare la qualità dell’olio extravergine prodotto da diverse cooperative locali.', tr: { bn: 'তার প্রথম কাজ ছিল বিভিন্ন স্থানীয় সমবায় কর্তৃক উৎপাদিত এক্সট্রা ভার্জিন জলপাই তেলের মান বিশ্লেষণ করা।', en: 'Her first task consisted in analysing the quality of extra-virgin olive oil produced by various local cooperatives.' } },
      { it: 'Dopo aver raccolto i campioni e aver scritto un riassunto chiaro dei risultati, ha ricevuto i complimenti del direttore scientifico.', tr: { bn: 'নমুনা সংগ্রহ করার এবং ফলাফলের একটি স্পষ্ট সারাংশ লেখার পর সে বৈজ্ঞানিক পরিচালকের প্রশংসা পেয়েছে।', en: 'After collecting the samples and writing a clear summary of the results, she received compliments from the scientific director.' } },
    ],
    wordGlossary: [
      { word: 'analizzare', base: 'analizzare', tr: { bn: 'বিশ্লেষণ করা', en: 'to analyse' }, pos: 'verb' },
      { word: 'riassunto', base: 'il riassunto', tr: { bn: 'সারাংশ / সংক্ষিপ্তসার', en: 'summary' }, pos: 'noun' },
      { word: 'tirocinio', base: 'il tirocinio', tr: { bn: 'ইন্টার্নশিপ / শিক্ষানবিশি', en: 'internship / traineeship' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Dopo aver completato gli esami… dopo aver scritto un riassunto.', ruleTitle: { bn: 'dopo-এর পরে অতীত ইনফিনিটিভ (aver/essere + participio)', en: 'Past infinitive after dopo' }, explanation: { bn: 'একই কর্তা যখন একটি কাজ শেষ করে পরের কাজটি করে, তখন dopo aver completato / dopo aver scritto ব্যবহৃত হয়।', en: 'dopo + aver/essere + past participle expresses a completed prior action by the same subject.' }, grammarId: 'infinito-passato' },
    ],
    mcq: [
      { id: 'stb1-31-q1', prompt: { bn: 'সামিরা কোন শহরে ইন্টার্নশিপ শুরু করেছে?', en: 'In which city did Samira start her internship?' }, options: ['পার্মা', 'ভেরোনা', 'বারি', 'পালের্মো'], answer: 0, explanation: { bn: 'সঠিক উত্তর: পার্মা — পাঠ্যাংশে বলা হয়েছে: «মাস্টার্স কোর্সের সব পরীক্ষা শেষ করার পর সামিরা পার্মার একটি কৃষি-খাদ্য গবেষণা কেন্দ্রে পাঠ্যক্রমভুক্ত ইন্টার্নশিপ শুরু করেছে।» (presso un centro di ricerca a Parma)।', en: 'In Parma.' } },
    ],
    trueFalse: [
      { id: 'stb1-31-tf1', statementIt: 'Samira ha iniziato il tirocinio prima di finire gli esami.', statement: { bn: 'সামিরা পরীক্ষা শেষ করার আগেই ইন্টার্নশিপ শুরু করেছে।', en: 'Samira started her internship before finishing her exams.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «মাস্টার্স কোর্সের সব পরীক্ষা শেষ করার পর সামিরা পার্মার একটি কৃষি-খাদ্য গবেষণা কেন্দ্রে পাঠ্যক্রমভুক্ত ইন্টার্নশিপ শুরু করেছে।» (Dopo aver completato tutti gli esami)।', en: 'After completing all her exams.' } },
    ],
    fillBlank: [
      { id: 'stb1-31-fb1', sentence: 'Dopo ___ analizzato i dati, ha presentato la relazione.', options: ['aver', 'essere', 'avendo', 'avuto'], answer: 0, explanation: { bn: 'analizzare avere নেয় → Dopo aver analizzato।', en: 'Dopo aver analizzato.' } },
    ],
    shortAnswer: [
      { id: 'stb1-31-sa1', question: { bn: 'সামিরার প্রথম কাজ কী বিশ্লেষণ করা ছিল?', en: 'What did Samira have to analyse first?' }, sampleAnswerIt: 'Doveva analizzare la qualità dell’olio extravergine.', keywords: ['qualità', 'olio'] },
    ],
    practice: {
      retellPrompt: { bn: 'সামিরার ইন্টার্নশিপের অভিজ্ঞতাটি dopo aver... ব্যবহার করে ৩ বাক্যে লিখুন।', en: 'Summarise Samira’s internship in 3 sentences using dopo aver...' },
      completeMissing: { promptIt: 'Dopo ___ arrivata in laboratorio, ha acceso gli strumenti.', hint: { bn: 'সহায়ক ক্রিয়া হিসেবে ইনফিনিটিভ রূপ essere ব্যবহার করুন', en: 'essere' }, sampleIt: 'Dopo essere arrivata in laboratorio, ha acceso gli strumenti.' },
      buildSimilar: { patternIt: 'Dopo aver scritto il riassunto, l’ho inviato al professore.', prompt: { bn: 'Dopo aver... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Dopo aver...' }, sampleIt: 'Dopo aver letto il bando, ho preparato il curriculum.' },
      altEndingPrompt: { bn: 'ইন্টার্নশিপ শেষে গবেষণা কেন্দ্র সামিরাকে কী প্রস্তাব দিল লিখুন।', en: 'Write what the research centre offered Samira after the internship.' },
    },
  }),

  buildStory({
    id: 'st-b1-32', level: 'B1', titleIt: 'Disavventura in aeroporto',
    title: { bn: 'বিমানবন্দরে ছোট বিপত্তি ও সমাধান', en: 'A mishap at the airport' },
    topic: { bn: 'ভ্রমণ ও যৌগিক জেরুন্ড (gerundio composto)', en: 'Air travel & compound gerund' },
    grammarIds: ['gerundio-composto'],
    vocabKeys: ['w:B1:smarrire', "w:B1:la carta d'imbarco", 'w:B1:a lungo'],
    paragraphs: [
      { it: 'La settimana scorsa, mentre aspettavo il volo per Catania a Fiumicino, mi sono accorto di non avere più in tasca la carta d’imbarco stampata.', tr: { bn: 'গত সপ্তাহে ফিউমিচিনোতে কাতানিয়ার ফ্লাইটের অপেক্ষায় থাকার সময় টের পেলাম আমার পকেটে প্রিন্ট করা বোর্ডিং পাসটি আর নেই।', en: 'Last week, while waiting for my flight to Catania at Fiumicino, I realised I no longer had my printed boarding pass in my pocket.' } },
      { it: 'Avendo smarrito il tagliando cartaceo poco prima dei controlli, ho cercato a lungo nello zaino ma senza successo.', tr: { bn: 'তল্লাশির ঠিক আগে কাগুজে স্লিপটি হারিয়ে ফেলায় আমি অনেকক্ষণ ব্যাকপ্যাকে খুঁজেছি কিন্তু পাইনি।', en: 'Having lost the paper slip shortly before security, I searched at length in my backpack without success.' } },
      { it: 'Per fortuna, essendomi registrato la sera prima sull’applicazione della compagnia aerea, ho potuto mostrare il codice QR direttamente dallo schermo del telefono.', tr: { bn: 'ভাগ্যক্রমে আগের রাতে বিমান সংস্থার অ্যাপে নিবন্ধন করে রাখায় আমি ফোনের স্ক্রিন থেকেই সরাসরি কিউআর কোড দেখাতে পেরেছি।', en: 'Luckily, having registered the evening before on the airline’s app, I was able to show the QR code directly from my phone screen.' } },
    ],
    wordGlossary: [
      { word: 'smarrire', base: 'smarrire', tr: { bn: 'হারিয়ে ফেলা', en: 'to misplace / lose' }, pos: 'verb' },
      { word: 'carta d’imbarco', base: "la carta d'imbarco", tr: { bn: 'বোর্ডিং পাস', en: 'boarding pass' }, pos: 'noun' },
      { word: 'a lungo', base: 'a lungo', tr: { bn: 'দীর্ঘক্ষণ ধরে', en: 'at length / for a long time' }, pos: 'adv' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Avendo smarrito il tagliando… essendomi registrato la sera prima.', ruleTitle: { bn: 'পূর্ববর্তী কারণ বোঝাতে যৌগিক জেরান্ড (avendo / essendo + participio)', en: 'Compound gerund for prior cause' }, explanation: { bn: 'প্রধান কাজের আগে ঘটে যাওয়া কারণ বোঝাতে Avendo smarrito এবং প্রতিফলক ক্রিয়ায় essendomi registrato ব্যবহৃত হয়েছে।', en: 'Compound gerund expresses a prior cause: Avendo smarrito, essendomi registrato.' }, grammarId: 'gerundio-composto' },
    ],
    mcq: [
      { id: 'stb1-32-q1', prompt: { bn: 'বক্তা শেষ পর্যন্ত কীভাবে বোর্ডিং পাস দেখালেন?', en: 'How did the narrator finally show the boarding pass?' }, options: ['নতুন টিকিট কিনে', 'ফোনের অ্যাপে কিউআর কোড দেখিয়ে', 'পুলিশকে ডেকে', 'ইমেইল প্রিন্ট করে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ফোনের অ্যাপে কিউআর কোড দেখিয়ে — পাঠ্যাংশে বলা হয়েছে: «ভাগ্যক্রমে আগের রাতে বিমান সংস্থার অ্যাপে নিবন্ধন করে রাখায় আমি ফোনের স্ক্রিন থেকেই সরাসরি কিউআর কোড দেখাতে পেরেছি।» (il codice QR direttamente dallo schermo del telefono)।', en: 'Via the QR code on his phone screen.' } },
    ],
    trueFalse: [
      { id: 'stb1-32-tf1', statementIt: 'Il viaggiatore ha perso l’aereo per Catania.', statement: { bn: 'যাত্রীটি কাতানিয়ার বিমান মিস করেছেন।', en: 'The traveller missed the plane to Catania.' }, answer: false, explanation: { bn: 'ফোনের কিউআর কোড দেখিয়ে তিনি বিমানে উঠতে পেরেছেন।', en: 'He boarded using the mobile QR code.' } },
    ],
    fillBlank: [
      { id: 'stb1-32-fb1', sentence: '___ arrivati in anticipo, abbiamo fatto colazione al bar.', options: ['Avendo', 'Essendo', 'Essere', 'Stati'], answer: 1, explanation: { bn: 'arrivare essere নেয় → Essendo arrivati।', en: 'Essendo arrivati.' } },
    ],
    shortAnswer: [
      { id: 'stb1-32-sa1', question: { bn: 'যাত্রীটি কোন শহরের ফ্লাইটের জন্য অপেক্ষা করছিলেন?', en: 'Which city was the traveller flying to?' }, sampleAnswerIt: 'Aspettava il volo per Catania.', keywords: ['Catania'] },
    ],
    practice: {
      retellPrompt: { bn: 'বিমানবন্দরের ঘটনাটি ৩ বাক্যে লিখুন।', en: 'Retell the airport story in 3 sentences.' },
      completeMissing: { promptIt: '___ prenotato online, non abbiamo fatto la fila.', hint: { bn: 'avere জেরুন্ড: Avendo', en: 'Avendo' }, sampleIt: 'Avendo prenotato online, non abbiamo fatto la fila.' },
      buildSimilar: { patternIt: 'Avendo smarrito la ricevuta, ho chiesto un duplicato.', prompt: { bn: 'Avendo... বা Essendo... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Avendo... or Essendo...' }, sampleIt: 'Avendo studiato bene il percorso, non ci siamo persi.' },
      altEndingPrompt: { bn: 'কাতানিয়ায় নেমে বক্তা প্রথমে কী করলেন লিখুন।', en: 'Write what the narrator did upon landing in Catania.' },
    },
  }),

  buildStory({
    id: 'st-b1-33', level: 'B1', titleIt: 'Nuovo inizio e bilancio familiare',
    title: { bn: 'নতুন শুরু ও পারিবারিক বাজেট', en: 'A fresh start and the family budget' },
    topic: { bn: 'কাজের অনুমতি ও participio passato assoluto', en: 'Work permit & absolute past participle' },
    grammarIds: ['participio-passato-assoluto'],
    vocabKeys: ['w:B1:ottenere', 'w:B1:il permesso di lavoro', 'w:B1:le spese condominiali'],
    paragraphs: [
      { it: 'Ottenuto finalmente il permesso di lavoro, Rafiq ha potuto firmare il contratto a tempo indeterminato con l’azienda metalmeccanica di Brescia.', tr: { bn: 'অবশেষে কাজের অনুমতি পাওয়ার পর রফিক ব্রেশিয়ার প্রকৌশল প্রতিষ্ঠানের সাথে স্থায়ী চুক্তিতে সই করতে পেরেছে।', en: 'Once the work permit was finally obtained, Rafiq was able to sign a permanent contract with the engineering company in Brescia.' } },
      { it: 'Superato il periodo di prova di tre mesi, lui e sua moglie hanno preso in affitto un trilocale luminoso vicino alla scuola dei bambini.', tr: { bn: 'তিন মাসের শিক্ষানবিশ কাল পার হওয়ার পর সে ও তার স্ত্রী বাচ্চাদের স্কুলের কাছে একটি আলোকিত তিন কক্ষের ফ্ল্যাট ভাড়া নিয়েছে।', en: 'Once the three-month probationary period was passed, he and his wife rented a bright three-room flat near the children’s school.' } },
      { it: 'Pagate le bollette e le spese condominiali, ogni mese riescono persino a mettere da parte una piccola somma per le vacanze.', tr: { bn: 'বিল এবং ভবনের রক্ষণাবেক্ষণ খরচ পরিশোধ করার পর প্রতি মাসে তারা ছুটির জন্য ছোট একটি অঙ্ক সঞ্চয়ও করতে পারে।', en: 'Once the utility bills and building charges are paid, every month they even manage to set aside a small sum for holidays.' } },
    ],
    wordGlossary: [
      { word: 'ottenere', base: 'ottenere', tr: { bn: 'অর্জন করা / পাওয়া', en: 'to obtain' }, pos: 'verb' },
      { word: 'permesso di lavoro', base: 'il permesso di lavoro', tr: { bn: 'কাজের অনুমতিপত্র', en: 'work permit' }, pos: 'noun' },
      { word: 'spese condominiali', base: 'le spese condominiali', tr: { bn: 'ভবনের যৌথ রক্ষণাবেক্ষণ খরচ', en: 'building maintenance charges' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ottenuto il permesso… Pagate le spese condominiali.', ruleTitle: { bn: 'Participio passato assoluto (লিঙ্গ-বচন মিলসহ)', en: 'Absolute past participle' }, explanation: { bn: 'il permesso (পুং একবচন) → Ottenuto; le spese (স্ত্রী বহুবচন) → Pagate।', en: 'The participle agrees with its noun: Ottenuto il permesso, Pagate le spese.' }, grammarId: 'participio-passato-assoluto' },
    ],
    mcq: [
      { id: 'stb1-33-q1', prompt: { bn: 'রফিকের শিক্ষানবিশ কাল কত দিনের ছিল?', en: 'How long was Rafiq’s probationary period?' }, options: ['১ মাস', '৩ মাস', '৬ মাস', '১ বছর'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ৩ মাস — পাঠ্যাংশে বলা হয়েছে: «তিন মাসের শিক্ষানবিশ কাল পার হওয়ার পর সে ও তার স্ত্রী বাচ্চাদের স্কুলের কাছে একটি আলোকিত তিন কক্ষের ফ্ল্যাট ভাড়া নিয়েছে।» (il periodo di prova di tre mesi)।', en: 'Three months.' } },
    ],
    trueFalse: [
      { id: 'stb1-33-tf1', statementIt: 'Dopo aver pagato le spese, non riescono a risparmiare nulla.', statement: { bn: 'খরচ মেটানোর পর তারা কিছুই সঞ্চয় করতে পারে না।', en: 'After paying expenses, they cannot save anything.' }, answer: false, explanation: { bn: 'তারা প্রতি মাসে ছোট একটি অঙ্ক সঞ্চয় করতে পারে।', en: 'They manage to set aside a small sum every month.' } },
    ],
    fillBlank: [
      { id: 'stb1-33-fb1', sentence: '___ le valigie, siamo scesi in strada.', options: ['Chiuso', 'Chiusa', 'Chiuse', 'Chiusi'], answer: 2, explanation: { bn: 'le valigie (স্ত্রী বহুবচন) → Chiuse।', en: 'Chiuse agrees with le valigie.' } },
    ],
    shortAnswer: [
      { id: 'stb1-33-sa1', question: { bn: 'রফিক কোন শহরের প্রতিষ্ঠানে স্থায়ী চুক্তি সই করেছে?', en: 'In which city did Rafiq sign his permanent contract?' }, sampleAnswerIt: 'Ha firmato il contratto con un’azienda di Brescia.', keywords: ['Brescia'] },
    ],
    practice: {
      retellPrompt: { bn: 'রফিকের নতুন চাকরি ও বাসার কথা ৩ বাক্যে লিখুন।', en: 'Summarise Rafiq’s new job and flat in 3 sentences.' },
      completeMissing: { promptIt: '___ il contratto, abbiamo brindato insieme.', hint: { bn: 'Firmare পুং একবচন: Firmato', en: 'Firmato' }, sampleIt: 'Firmato il contratto, abbiamo brindato insieme.' },
      buildSimilar: { patternIt: 'Superato l’esame, lo studente ha festeggiato.', prompt: { bn: 'Finita... বা Risolto... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Finita... or Risolto...' }, sampleIt: 'Finita la riunione, siamo tornati in ufficio.' },
      altEndingPrompt: { bn: 'সঞ্চিত টাকা দিয়ে গ্রীষ্মে তারা কোথায় যাবে তা লিখুন।', en: 'Write where the family will go with their savings.' },
    },
  }),

  buildStory({
    id: 'st-b1-34', level: 'B1', titleIt: 'L’associazione culturale e la ricerca storica',
    title: { bn: 'সাংস্কৃতিক সংগঠন ও ঐতিহাসিক গবেষণা', en: 'The cultural association and historical research' },
    topic: { bn: 'সমন্বয় ও সম্বন্ধবাচক সর্বনাম (il quale / il cui)', en: 'Integration & relative pronouns (il quale / il cui)' },
    grammarIds: ['relativi-il-quale-cui'],
    vocabKeys: ["w:B1:l'associazione", 'w:B1:lo scopo', 'w:B1:la ricerca'],
    paragraphs: [
      { it: 'Nel nostro comune opera da dieci anni un’associazione culturale il cui scopo principale è favorire il dialogo tra generazioni e culture diverse.', tr: { bn: 'আমাদের পৌরসভায় দশ বছর ধরে একটি সাংস্কৃতিক সংগঠন কাজ করছে যার মূল উদ্দেশ্য ভিন্ন প্রজন্ম ও সংস্কৃতির মধ্যে সংলাপ উৎসাহিত করা।', en: 'In our municipality a cultural association has been operating for ten years whose main purpose is to foster dialogue across generations and cultures.' } },
      { it: 'La settimana scorsa i volontari con i quali collaboro hanno presentato una ricerca sui mestieri artigianali del territorio.', tr: { bn: 'গত সপ্তাহে যে স্বেচ্ছাসেবকদের সাথে আমি কাজ করি তাঁরা অঞ্চলের কারুশিল্প পেশাগুলোর ওপর একটি গবেষণা উপস্থাপন করেছেন।', en: 'Last week the volunteers with whom I collaborate presented a study on traditional crafts in the area.' } },
      { it: 'Gli anziani artigiani, grazie ai quali sono state raccolte testimonianze preziose, sono stati invitati nelle scuole per raccontare la loro esperienza.', tr: { bn: 'যাঁদের কল্যাণে মূল্যবান অভিজ্ঞতা সংগ্রহ করা হয়েছে সেই প্রবীণ কারুশিল্পীদের নিজেদের গল্প শোনাতে স্কুলগুলোতে আমন্ত্রণ জানানো হয়েছে।', en: 'The elderly artisans, thanks to whom precious testimonies were gathered, were invited into schools to share their experience.' } },
    ],
    wordGlossary: [
      { word: 'associazione', base: "l'associazione", tr: { bn: 'সংগঠন / সমিতি', en: 'association' }, pos: 'noun' },
      { word: 'scopo', base: 'lo scopo', tr: { bn: 'উদ্দেশ্য / লক্ষ্য', en: 'purpose / aim' }, pos: 'noun' },
      { word: 'ricerca', base: 'la ricerca', tr: { bn: 'গবেষণা / অনুসন্ধান', en: 'research' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Un’associazione il cui scopo… i volontari con i quali collaboro.', ruleTitle: { bn: 'Il cui (মালিকানা) ও অব্যয় + il quale', en: 'Possessive il cui & preposition + il quale' }, explanation: { bn: 'il cui scopo ("যার উদ্দেশ্য")-তে il বসেছে lo scopo অনুযায়ী (কিন্তু cui-এর আগে il হয়); আর con + i quali ব্যবহৃত হয়েছে।', en: 'il cui precedes scopo, and con i quali refers to i volontari.' }, grammarId: 'relativi-il-quale-cui' },
    ],
    mcq: [
      { id: 'stb1-34-q1', prompt: { bn: 'স্বেচ্ছাসেবকেরা কিসের ওপর গবেষণা উপস্থাপন করেছেন?', en: 'What did the volunteers present research on?' }, options: ['আঞ্চলিক কারুশিল্প পেশা', 'সামুদ্রিক মাছ', 'মহাকাশ বিজ্ঞান', 'ক্রীড়া ইতিহাস'], answer: 0, explanation: { bn: 'সঠিক উত্তর: আঞ্চলিক কারুশিল্প পেশা — পাঠ্যাংশে বলা হয়েছে: «গত সপ্তাহে যে স্বেচ্ছাসেবকদের সাথে আমি কাজ করি তাঁরা অঞ্চলের কারুশিল্প পেশাগুলোর ওপর একটি গবেষণা উপস্থাপন করেছেন।» (sui mestieri artigianali del territorio)।', en: 'Traditional local crafts.' } },
    ],
    trueFalse: [
      { id: 'stb1-34-tf1', statementIt: 'L’associazione è nata il mese scorso.', statement: { bn: 'সংগঠনটি গত মাসে প্রতিষ্ঠিত হয়েছে।', en: 'The association was founded last month.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «আমাদের পৌরসভায় দশ বছর ধরে একটি সাংস্কৃতিক সংগঠন কাজ করছে যার মূল উদ্দেশ্য ভিন্ন প্রজন্ম ও সংস্কৃতির মধ্যে সংলাপ উৎসাহিত করা।» (opera da dieci anni)।', en: 'It has operated for ten years.' } },
    ],
    fillBlank: [
      { id: 'stb1-34-fb1', sentence: 'È un progetto ___ risultati sono molto utili.', options: ['il cui', 'i cui', 'la cui', 'le cui'], answer: 1, explanation: { bn: 'risultati পুং বহুবচন → i cui risultati।', en: 'i cui risultati.' } },
    ],
    shortAnswer: [
      { id: 'stb1-34-sa1', question: { bn: 'প্রবীণ কারুশিল্পীদের কোথায় আমন্ত্রণ জানানো হয়েছে?', en: 'Where were the elderly artisans invited?' }, sampleAnswerIt: 'Sono stati invitati nelle scuole.', keywords: ['scuole'] },
    ],
    practice: {
      retellPrompt: { bn: 'সাংস্কৃতিক সংগঠনটির কাজ ৩ বাক্যে লিখুন।', en: 'Describe the cultural association’s work in 3 sentences.' },
      completeMissing: { promptIt: 'La professoressa con ___ ho parlato è molto gentile.', hint: { bn: 'সম্বন্ধবাচক সর্বনাম la quale অথবা cui ব্যবহার করুন', en: 'la quale or cui' }, sampleIt: 'La professoressa con la quale ho parlato è molto gentile.' },
      buildSimilar: { patternIt: 'È un’associazione il cui scopo è promuovere la cultura.', prompt: { bn: 'il cui বা la cui দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with il cui or la cui.' }, sampleIt: 'Conosco un’azienda i cui dipendenti lavorano da remoto.' },
      altEndingPrompt: { bn: 'স্কুলের শিক্ষার্থীরা কারুশিল্পীদের কাছে কী শিখল লিখুন।', en: 'Write what the schoolchildren learned from the artisans.' },
    },
  }),

  buildStory({
    id: 'st-b1-35', level: 'B1', titleIt: 'Proteggere le risorse idriche',
    title: { bn: 'পানি সম্পদ রক্ষা ও সচেতনতা', en: 'Protecting water resources' },
    topic: { bn: 'পরিবেশ ও chi / quello che / ciò che', en: 'Environment & chi / ciò che' },
    grammarIds: ['chi-quello-che-cio-che'],
    vocabKeys: ['w:B1:lo spreco', 'w:B1:le risorse', 'w:B1:ridurre'],
    paragraphs: [
      { it: 'Negli ultimi estati la siccità ha colpito diverse regioni agricole. Ciò che preoccupa gli esperti è lo spreco quotidiano di acqua potabile nelle reti urbane e nelle case.', tr: { bn: 'সাম্প্রতিক গ্রীষ্মগুলোতে খরা বিভিন্ন কৃষি অঞ্চলে আঘাত হেনেছে। বিশেষজ্ঞদের যা ভাবিয়ে তুলছে তা হলো শহরের পাইপলাইনে ও বাসাবাড়িতে সুপেয় পানির দৈনন্দিন অপচয়।', en: 'In recent summers drought has hit several agricultural regions. What worries experts is the daily waste of drinking water in urban networks and homes.' } },
      { it: 'Chi coltiva la terra sa bene quanto siano preziose le risorse naturali e cerca sistemi di irrigazione a goccia per ridurre i consumi.', tr: { bn: 'যারা জমি চাষ করে তারা ভালোই জানে প্রাকৃতিক সম্পদ কত মূল্যবান এবং খরচ কমাতে ফোঁটা-সেচ পদ্ধতি খোঁজে।', en: 'Those who farm the land know well how precious natural resources are and look for drip-irrigation systems to reduce consumption.' } },
      { it: 'Anche in città possiamo fare molto: quello che serve è una maggiore attenzione ai piccoli gesti di ogni giorno.', tr: { bn: 'শহরেও আমরা অনেক কিছু করতে পারি: যা দরকার তা হলো প্রতিদিনের ছোট কাজগুলোর প্রতি আরও বেশি মনোযোগ।', en: 'In the city too we can do a lot: what is needed is greater attention to everyday habits.' } },
    ],
    wordGlossary: [
      { word: 'spreco', base: 'lo spreco', tr: { bn: 'অপচয়', en: 'waste' }, pos: 'noun' },
      { word: 'risorse', base: 'le risorse', tr: { bn: 'সম্পদ', en: 'resources' }, pos: 'noun' },
      { word: 'ridurre', base: 'ridurre', tr: { bn: 'কমানো / হ্রাস করা', en: 'to reduce' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ciò che preoccupa gli esperti… Chi coltiva la terra sa bene…', ruleTitle: { bn: 'Chi (যে কেউ) ও Ciò che / Quello che (যা)', en: 'Chi and ciò che / quello che' }, explanation: { bn: 'Chi সর্বদা একবচন ক্রিয়া নেয় (coltiva, sa); আর Ciò che এবং quello che দ্বারা "যা কিছু" বোঝায়।', en: 'Chi takes a 3rd singular verb; ciò che and quello che mean "what / that which".' }, grammarId: 'chi-quello-che-cio-che' },
    ],
    mcq: [
      { id: 'stb1-35-q1', prompt: { bn: 'পানির খরচ কমাতে কৃষকেরা কোন সেচ পদ্ধতি ব্যবহার করেন?', en: 'Which irrigation method do farmers use to reduce water use?' }, options: ['বন্যা সেচ', 'ফোঁটা-সেচ (irrigazione a goccia)', 'খাল সেচ', 'কৃত্রিম বৃষ্টি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ফোঁটা-সেচ (irrigazione a goccia) — পাঠ্যাংশে বলা হয়েছে: «যারা জমি চাষ করে তারা ভালোই জানে প্রাকৃতিক সম্পদ কত মূল্যবান এবং খরচ কমাতে ফোঁটা-সেচ পদ্ধতি খোঁজে।» (sistemi di irrigazione a goccia)।', en: 'Drip-irrigation systems.' } },
    ],
    trueFalse: [
      { id: 'stb1-35-tf1', statementIt: 'In città non si può fare nulla per risparmiare acqua.', statement: { bn: 'শহরে পানি বাঁচাতে কিছুই করা সম্ভব নয়।', en: 'Nothing can be done in the city to save water.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «শহরেও আমরা অনেক কিছু করতে পারি: যা দরকার তা হলো প্রতিদিনের ছোট কাজগুলোর প্রতি আরও বেশি মনোযোগ।» (Anche in città possiamo fare molto)।', en: 'We can do a lot in the city too.' } },
    ],
    fillBlank: [
      { id: 'stb1-35-fb1', sentence: '___ rispetta l’ambiente protegge il futuro di tutti.', options: ['Chi', 'Che', 'Cui', 'Quali'], answer: 0, explanation: { bn: 'Chi + ৩য় পুরুষ একবচন (rispetta)।', en: 'Chi rispetta.' } },
    ],
    shortAnswer: [
      { id: 'stb1-35-sa1', question: { bn: 'বিশেষজ্ঞদের কোন বিষয়টি সবচেয়ে বেশি ভাবায়?', en: 'What worries experts the most?' }, sampleAnswerIt: 'Li preoccupa lo spreco quotidiano di acqua potabile.', keywords: ['spreco', 'acqua'] },
    ],
    practice: {
      retellPrompt: { bn: 'পানি সংরক্ষণের গুরুত্ব নিয়ে ৩ বাক্যে লিখুন।', en: 'Write 3 sentences about water conservation using ciò che and chi.' },
      completeMissing: { promptIt: '___ che conta davvero è non sprecare l’acqua.', hint: { bn: 'যাহা অর্থে নির্দেশক সর্বনাম Ciò অথবা Quello বসান', en: 'Ciò or Quello' }, sampleIt: 'Ciò che conta davvero è non sprecare l’acqua.' },
      buildSimilar: { patternIt: 'Chi usa la bici riduce l’inquinamento.', prompt: { bn: 'Chi... দিয়ে একটি সাধারণ সত্য বাক্য লিখুন।', en: 'Write a general statement starting with Chi...' }, sampleIt: 'Chi legge molto impara nuove parole ogni giorno.' },
      altEndingPrompt: { bn: 'বাসায় পানি বাঁচানোর দুটি সহজ উপায় লিখুন।', en: 'Write two simple ways to save water at home.' },
    },
  }),

  buildStory({
    id: 'st-b1-36', level: 'B1', titleIt: 'Domenica ecologica nel centro storico',
    title: { bn: 'ঐতিহাসিক কেন্দ্রে পরিবেশবান্ধব রবিবার', en: 'Green Sunday in the historic centre' },
    topic: { bn: 'শহরের যানবাহন ও কারণবাচক সংযোজক (siccome, dato che)', en: 'Urban traffic & causal connectors' },
    grammarIds: ['connettivi-causali-b1'],
    vocabKeys: ['w:B1:siccome', 'w:B1:dato che', 'w:B1:il centro storico'],
    paragraphs: [
      { it: 'Siccome i livelli di smog erano saliti per tutta la settimana, il comune ha proclamato una domenica ecologica chiudendo alle auto tutto il centro storico.', tr: { bn: 'যেহেতু পুরো সপ্তাহ জুড়ে ধোঁয়াশার মাত্রা বেড়েছিল, পৌরসভা পুরো ঐতিহাসিক কেন্দ্রে গাড়ি চলাচল বন্ধ করে পরিবেশবান্ধব রবিবার ঘোষণা করেছে।', en: 'Since smog levels had risen all week, the municipality declared a green Sunday, closing the entire historic centre to cars.' } },
      { it: 'Dato che i biglietti dell’autobus valevano per l’intera giornata con una sola convalida, tantissime famiglie si sono spostate con i mezzi pubblici.', tr: { bn: 'যেহেতু বাসের টিকিট একবার পাঞ্চ করলেই সারা দিনের জন্য বৈধ ছিল, তাই প্রচুর পরিবার গণপরিবহনে যাতায়াত করেছে।', en: 'Given that bus tickets were valid for the whole day with a single validation, many families travelled by public transport.' } },
      { it: 'Le piazze erano silenziose e sicure; perciò i bambini hanno potuto giocare liberamente e i musei hanno registrato il doppio dei visitatori.', tr: { bn: 'চত্বরগুলো নীরব ও নিরাপদ ছিল; তাই শিশুরা স্বাধীনভাবে খেলতে পেরেছে এবং জাদুঘরগুলোতে দ্বিগুণ দর্শনার্থী হয়েছে।', en: 'The squares were quiet and safe; therefore children could play freely and museums recorded twice as many visitors.' } },
    ],
    wordGlossary: [
      { word: 'siccome', base: 'siccome', tr: { bn: 'যেহেতু', en: 'since / as' }, pos: 'conj' },
      { word: 'dato che', base: 'dato che', tr: { bn: 'যেহেতু / বিবেচনায় যে', en: 'given that / since' }, pos: 'conj' },
      { word: 'centro storico', base: 'il centro storico', tr: { bn: 'ঐতিহাসিক শহর কেন্দ্র', en: 'historic centre' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Siccome i livelli erano saliti… Dato che i biglietti valevano…', ruleTitle: { bn: 'বাক্যের শুরুতে কারণসূচক সংযোজক ও ইন্ডিকেটিভ (Siccome / Dato che / Visto che)', en: 'Causal connectors at sentence start' }, explanation: { bn: 'বাক্যের শুরুতে কারণ উপস্থাপন করতে Siccome এবং Dato che ব্যবহৃত হয়েছে, আর ফলাফলে perciò বসেছে।', en: 'Siccome and Dato che introduce the cause at the start of the sentence; perciò introduces the result.' }, grammarId: 'connettivi-causali-b1' },
    ],
    mcq: [
      { id: 'stb1-36-q1', prompt: { bn: 'রবিবারে বাসের টিকিটের বিশেষ সুবিধা কী ছিল?', en: 'What was special about bus tickets on that Sunday?' }, options: ['একবার পাঞ্চ করলেই সারা দিন বৈধ ছিল', 'কেবল শিশুদের জন্য ছিল', 'দ্বিগুণ দাম ছিল', 'কেবল সকালে চলত'], answer: 0, explanation: { bn: 'সঠিক উত্তর: একবার পাঞ্চ করলেই সারা দিন বৈধ ছিল — পাঠ্যাংশে বলা হয়েছে: «যেহেতু বাসের টিকিট একবার পাঞ্চ করলেই সারা দিনের জন্য বৈধ ছিল, তাই প্রচুর পরিবার গণপরিবহনে যাতায়াত করেছে।» (valevano per l’intera giornata con una sola convalida)।', en: 'Valid all day with a single validation.' } },
    ],
    trueFalse: [
      { id: 'stb1-36-tf1', statementIt: 'I musei sono rimasti vuoti durante la domenica ecologica.', statement: { bn: 'পরিবেশবান্ধব রবিবারে জাদুঘরগুলো ফাঁকা ছিল।', en: 'The museums remained empty during the green Sunday.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «চত্বরগুলো নীরব ও নিরাপদ ছিল; তাই শিশুরা স্বাধীনভাবে খেলতে পেরেছে এবং জাদুঘরগুলোতে দ্বিগুণ দর্শনার্থী হয়েছে।» (hanno registrato il doppio dei visitatori)।', en: 'They recorded twice as many visitors.' } },
    ],
    fillBlank: [
      { id: 'stb1-36-fb1', sentence: '___ pioveva forte, abbiamo preso la metropolitana.', options: ['Siccome', 'Tuttavia', 'Perciò', 'Affinché'], answer: 0, explanation: { bn: 'বাক্যের শুরুতে কারণ: Siccome।', en: 'Siccome = since.' } },
    ],
    shortAnswer: [
      { id: 'stb1-36-sa1', question: { bn: 'কেন পৌরসভা পরিবেশবান্ধব রবিবার ঘোষণা করেছিল?', en: 'Why did the municipality declare a green Sunday?' }, sampleAnswerIt: 'Perché i livelli di smog erano saliti per tutta la settimana.', keywords: ['smog', 'livelli'] },
    ],
    practice: {
      retellPrompt: { bn: 'পরিবেশবান্ধব রবিবারের ঘটনাটি siccome ও perciò দিয়ে ৩ বাক্যে লিখুন।', en: 'Summarise the green Sunday in 3 sentences using siccome and perciò.' },
      completeMissing: { promptIt: '___ che il centro era chiuso, siamo andati a piedi.', hint: { bn: 'কারণ প্রকাশে Visto অথবা Dato ব্যবহার করুন', en: 'Visto or Dato' }, sampleIt: 'Dato che il centro era chiuso, siamo andati a piedi.' },
      buildSimilar: { patternIt: 'Siccome faceva bel tempo, abbiamo pranzato in giardino.', prompt: { bn: 'Siccome... বা Dato che... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Siccome... or Dato che...' }, sampleIt: 'Siccome il treno era in ritardo, ho avvisato l’ufficio.' },
      altEndingPrompt: { bn: 'সন্ধ্যায় চত্বরে কী অনুষ্ঠানের আয়োজন হলো লিখুন।', en: 'Write what event took place in the square in the evening.' },
    },
  }),

  buildStory({
    id: 'st-b1-37', level: 'B1', titleIt: 'Nuove competenze per il mercato del lavoro',
    title: { bn: 'শ্রমবাজারের জন্য নতুন দক্ষতা', en: 'New skills for the job market' },
    topic: { bn: 'পেশাগত দক্ষতা ও স্বীকারোক্তিমূলক সংযোজক (sebbene, benché)', en: 'Professional skills & concessive connectors' },
    grammarIds: ['connettivi-concessivi-b1'],
    vocabKeys: ['w:B1:sebbene', 'w:B1:benché', 'w:B1:la competenza'],
    paragraphs: [
      { it: 'Sebbene avesse già una laurea in economia, a trent’anni Lorenzo ha deciso di frequentare un corso intensivo di analisi dei dati e programmazione.', tr: { bn: 'অর্থনীতিতে ইতিমধ্যে স্নাতক ডিগ্রি থাকা সত্ত্বেও ত্রিশ বছর বয়সে লরেনৎসো ডেটা বিশ্লেষণ ও প্রোগ্রামিংয়ের একটি নিবিড় কোর্সে অংশ নেওয়ার সিদ্ধান্ত নিয়েছে।', en: 'Although he already had a degree in economics, at thirty Lorenzo decided to attend an intensive course in data analysis and programming.' } },
      { it: 'Benché le lezioni serali fossero molto impegnative dopo otto ore di ufficio, non ha perso nemmeno un incontro.', tr: { bn: 'আট ঘণ্টা অফিসের পর সান্ধ্যকালীন ক্লাসগুলো খুব পরিশ্রমের হওয়া সত্ত্বেও সে একটি ক্লাসও মিস করেনি।', en: 'Even though the evening classes were very demanding after eight hours at the office, he did not miss a single session.' } },
      { it: 'Grazie a questa nuova competenza tecnica, dopo sei mesi ha ottenuto una promozione come responsabile dell’innovazione digitale.', tr: { bn: 'এই নতুন কারিগরি দক্ষতার কল্যাণে ছয় মাস পর সে ডিজিটাল উদ্ভাবন বিভাগের প্রধান হিসেবে পদোন্নতি পেয়েছে।', en: 'Thanks to this new technical skill, six months later he earned a promotion as head of digital innovation.' } },
    ],
    wordGlossary: [
      { word: 'sebbene', base: 'sebbene', tr: { bn: 'যদিও / সত্ত্বেও', en: 'although / even though' }, pos: 'conj' },
      { word: 'benché', base: 'benché', tr: { bn: 'যদিও', en: 'although' }, pos: 'conj' },
      { word: 'competenza', base: 'la competenza', tr: { bn: 'দক্ষতা / যোগ্যতা', en: 'skill / competence' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Sebbene avesse una laurea… Benché le lezioni fossero impegnative…', ruleTitle: { bn: 'যদিও/সত্ত্বেও অর্থে সংযোজক অব্যয় + সাবজাংক্টিভ (Sebbene / Benché / Nonostante)', en: 'Concessive conjunctions + subjunctive' }, explanation: { bn: 'Sebbene এবং Benché-র পরে অতীত প্রেক্ষাপটে congiuntivo imperfetto (avesse, fossero) বসেছে।', en: 'Sebbene and Benché require the subjunctive (avesse, fossero).' }, grammarId: 'connettivi-concessivi-b1' },
    ],
    mcq: [
      { id: 'stb1-37-q1', prompt: { bn: 'লরেনৎসোর আগে কোন বিষয়ে স্নাতক ডিগ্রি ছিল?', en: 'What was Lorenzo’s first degree in?' }, options: ['চিকিৎসাবিদ্যা', 'অর্থনীতি', 'আইন', 'ইতিহাস'], answer: 1, explanation: { bn: 'সঠিক উত্তর: অর্থনীতি — পাঠ্যাংশে বলা হয়েছে: «অর্থনীতিতে ইতিমধ্যে স্নাতক ডিগ্রি থাকা সত্ত্বেও ত্রিশ বছর বয়সে লরেনৎসো ডেটা বিশ্লেষণ ও প্রোগ্রামিংয়ের একটি নিবিড় কোর্সে অংশ নেওয়ার সিদ্ধান্ত নিয়েছে।» (una laurea in economia)।', en: 'Economics.' } },
    ],
    trueFalse: [
      { id: 'stb1-37-tf1', statementIt: 'Lorenzo ha lasciato il lavoro per seguire il corso di mattina.', statement: { bn: 'লরেনৎসো সকালে কোর্স করার জন্য চাকরি ছেড়ে দিয়েছিল।', en: 'Lorenzo quit his job to attend the course in the morning.' }, answer: false, explanation: { bn: 'সে আট ঘণ্টা অফিসের পর সান্ধ্যকালীন ক্লাস করত।', en: 'He attended evening classes after eight hours at work.' } },
    ],
    fillBlank: [
      { id: 'stb1-37-fb1', sentence: 'Sebbene il test ___ difficile, tutti lo hanno superato.', options: ['era', 'fosse', 'sarà', 'è'], answer: 1, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «Sebbene + congiuntivo imperfetto (fosse)» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'Sebbene takes fosse.' } },
    ],
    shortAnswer: [
      { id: 'stb1-37-sa1', question: { bn: 'ছয় মাস পর লরেনৎসো কী পেয়েছে?', en: 'What did Lorenzo get after six months?' }, sampleAnswerIt: 'Ha ottenuto una promozione come responsabile dell’innovazione digitale.', keywords: ['promozione', 'responsabile'] },
    ],
    practice: {
      retellPrompt: { bn: 'লরেনৎসোর নতুন দক্ষতা অর্জনের গল্পটি ৩ বাক্যে লিখুন।', en: 'Retell Lorenzo’s upskilling story in 3 sentences.' },
      completeMissing: { promptIt: 'Benché ___ poca esperienza, ha lavorato benissimo.', hint: { bn: 'avere ক্রিয়ার ইমপারফেক্ট সাবজাংক্টিভ রূপ avesse বসান', en: 'avesse' }, sampleIt: 'Benché avesse poca esperienza, ha lavorato benissimo.' },
      buildSimilar: { patternIt: 'Sebbene fosse stanco, ha finito il progetto.', prompt: { bn: 'Sebbene... বা Nonostante... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Sebbene... or Nonostante...' }, sampleIt: 'Sebbene piovesse, siamo andati a correre.' },
      altEndingPrompt: { bn: 'নতুন পদে লরেনৎসো প্রথম কোন প্রকল্প শুরু করল লিখুন।', en: 'Write what project Lorenzo launched in his new role.' },
    },
  }),

  buildStory({
    id: 'st-b1-38', level: 'B1', titleIt: 'Lo sportello unico per le famiglie',
    title: { bn: 'পরিবারগুলোর জন্য একক সেবা কাউন্টার', en: 'The one-stop service desk for families' },
    topic: { bn: 'নাগরিক সেবা ও উদ্দেশ্য/শর্তবাচক সংযোজক (affinché, purché)', en: 'Public services & purpose/conditional connectors' },
    grammarIds: ['connettivi-finali-condizionali'],
    vocabKeys: ['w:B1:affinché', 'w:B1:purché', 'w:B1:lo sportello unico'],
    paragraphs: [
      { it: 'Da quest’anno il nostro municipio ha inaugurato lo sportello unico digitale affinché i genitori possano iscrivere i figli a mensa, scuolabus e asilo nido con una sola domanda.', tr: { bn: 'মা-বাবারা যাতে একটিমাত্র আবেদনের মাধ্যমে সন্তানদের ক্যান্টিন, স্কুলবাস ও ডে-কেয়ারে নিবন্ধন করতে পারেন সেজন্য এ বছর থেকে আমাদের পৌরসভা ডিজিটাল একক কাউন্টার চালু করেছে।', en: 'Starting this year our town hall opened a digital one-stop desk so that parents can register their children for the canteen, school bus, and nursery with a single application.' } },
      { it: 'Il sistema concede automaticamente una riduzione delle tariffe, purché la famiglia alleghi l’attestazione ISEE aggiornata entro il trenta giugno.', tr: { bn: 'সিস্টেমটি স্বয়ংক্রিয়ভাবে ফি ছাড় প্রদান করে, শর্ত থাকে যে পরিবারটি ত্রিশে জুনের মধ্যে হালনাগাদ ISEE সনদ সংযুক্ত করবে।', en: 'The system automatically grants a fee reduction, provided that the family attaches an updated ISEE income certificate by June thirtieth.' } },
      { it: 'Qualora un cittadino non avesse il computer a casa, i volontari della biblioteca offrono assistenza gratuita ogni martedì pomeriggio.', tr: { bn: 'কোনো নাগরিকের বাসায় কম্পিউটার না থাকলে গ্রন্থাগারের স্বেচ্ছাসেবকেরা প্রতি মঙ্গলবার বিকেলে বিনামূল্যে সহায়তা দেন।', en: 'Should a citizen not have a computer at home, library volunteers offer free assistance every Tuesday afternoon.' } },
    ],
    wordGlossary: [
      { word: 'affinché', base: 'affinché', tr: { bn: 'যাতে / যে উদ্দেশ্যে', en: 'so that / in order that' }, pos: 'conj' },
      { word: 'purché', base: 'purché', tr: { bn: 'এই শর্তে যে', en: 'provided that' }, pos: 'conj' },
      { word: 'sportello unico', base: 'lo sportello unico', tr: { bn: 'একক সমন্বিত কাউন্টার', en: 'one-stop service desk' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Affinché i genitori possano iscrivere… purché la famiglia alleghi…', ruleTitle: { bn: 'উদ্দেশ্য ও শর্তসূচক সংযোজক + সাবজাংক্টিভ (Affinché, purché, qualora)', en: 'Purpose and conditional connectors + subjunctive' }, explanation: { bn: 'উদ্দেশ্যবাচক affinché এবং শর্তবাচক purché ও qualora-র পরে সর্বদা সংযোজক ভাব (possano, alleghi, avesse) বসে।', en: 'affinché, purché, and qualora always take the subjunctive.' }, grammarId: 'connettivi-finali-condizionali' },
    ],
    mcq: [
      { id: 'stb1-38-q1', prompt: { bn: 'ফি ছাড় পেতে কোন সনদটি সংযুক্ত করতে হয়?', en: 'Which certificate must be attached to get a fee reduction?' }, options: ['ড্রাইভিং লাইসেন্স', 'হালনাগাদ ISEE সনদ', 'বিয়ের সনদ', 'পাসপোর্ট'], answer: 1, explanation: { bn: 'সঠিক উত্তর: হালনাগাদ ISEE সনদ — পাঠ্যাংশে বলা হয়েছে: «সিস্টেমটি স্বয়ংক্রিয়ভাবে ফি ছাড় প্রদান করে, শর্ত থাকে যে পরিবারটি ত্রিশে জুনের মধ্যে হালনাগাদ ISEE সনদ সংযুক্ত করবে।» (l’attestazione ISEE aggiornata)।', en: 'The updated ISEE certificate.' } },
    ],
    trueFalse: [
      { id: 'stb1-38-tf1', statementIt: 'Chi non ha il computer non può ricevere alcun aiuto.', statement: { bn: 'যাদের কম্পিউটার নেই তারা কোনো সাহায্য পায় না।', en: 'Those without a computer cannot get any help.' }, answer: false, explanation: { bn: 'গ্রন্থাগারের স্বেচ্ছাসেবকেরা প্রতি মঙ্গলবার বিনামূল্যে সহায়তা দেন।', en: 'Library volunteers offer free help every Tuesday.' } },
    ],
    fillBlank: [
      { id: 'stb1-38-fb1', sentence: 'Ti presto il libro ___ tu me lo restituisca lunedì.', options: ['siccome', 'purché', 'perciò', 'tuttavia'], answer: 1, explanation: { bn: 'purché + congiuntivo = এই শর্তে যে।', en: 'purché = provided that.' } },
    ],
    shortAnswer: [
      { id: 'stb1-38-sa1', question: { bn: 'একক কাউন্টারের মাধ্যমে সন্তানদের কোন তিনটি সেবায় নিবন্ধন করা যায়?', en: 'Which three services can children be registered for via the one-stop desk?' }, sampleAnswerIt: 'Si possono iscrivere i figli a mensa, scuolabus e asilo nido.', keywords: ['mensa', 'scuolabus', 'asilo'] },
    ],
    practice: {
      retellPrompt: { bn: 'একক সেবা কাউন্টারের সুবিধাগুলো ৩ বাক্যে লিখুন।', en: 'Describe the benefits of the one-stop desk in 3 sentences.' },
      completeMissing: { promptIt: 'Parlo lentamente affinché tutti ___ capire.', hint: { bn: 'potere ক্রিয়ার বহুবচন সাবজাংক্টিভ রূপ possano বসান', en: 'possano' }, sampleIt: 'Parlo lentamente affinché tutti possano capire.' },
      buildSimilar: { patternIt: 'Accetto l’incarico purché gli orari siano chiari.', prompt: { bn: 'affinché বা purché দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with affinché or purché.' }, sampleIt: 'Inviamo un promemoria affinché nessuno dimentichi la scadenza.' },
      altEndingPrompt: { bn: 'মঙ্গলবার গ্রন্থাগারে কাদের ভিড় হলো তা লিখুন।', en: 'Write about the Tuesday afternoon session at the library.' },
    },
  }),

  buildStory({
    id: 'st-b1-39', level: 'B1', titleIt: 'Lo sport di quartiere unisce la comunità',
    title: { bn: 'পাড়ার খেলাধুলা সম্প্রদায়কে একত্রিত করে', en: 'Neighbourhood sport unites the community' },
    topic: { bn: 'সামাজিক সম্প্রীতি ও আনুপাতিক তুলনা (più… più…)', en: 'Social integration & proportional comparison' },
    grammarIds: ['comparativi-proporzionali'],
    vocabKeys: ["w:B1:l'integrazione", 'w:B1:la comunità', 'w:B1:allenarsi'],
    paragraphs: [
      { it: 'Due anni fa abbiamo fondato una squadra amatoriale di corsa e calcetto nel parco pubblico del nostro rione per favorire l’integrazione tra vecchi e nuovi residenti.', tr: { bn: 'পুরোনো ও নতুন বাসিন্দাদের মধ্যে সমন্বয় বাড়াতে দুই বছর আগে আমরা আমাদের এলাকার পাবলিক পার্কে দৌড় ও ফাইভ-এ-সাইড ফুটবলের একটি অপেশাদার দল গঠন করেছি।', en: 'Two years ago we founded an amateur running and five-a-side football team in our district’s public park to foster integration between old and new residents.' } },
      { it: 'Più ci ritroviamo per allenarci insieme dopo il lavoro, più nascono amicizie sincere e collaborazioni utili anche nella vita quotidiana.', tr: { bn: 'কাজের পর একসাথে অনুশীলন করতে আমরা যত বেশি মিলিত হই, দৈনন্দিন জীবনেও তত বেশি অকৃত্রিম বন্ধুত্ব ও দরকারি সহযোগিতা গড়ে ওঠে।', en: 'The more we meet up to train together after work, the more genuine friendships and useful collaborations arise in daily life too.' } },
      { it: 'Più una comunità investe negli spazi pubblici gratuiti, meno i giovani si sentono soli o isolati.', tr: { bn: 'একটি সম্প্রদায় বিনামূল্যে উন্মুক্ত স্থানে যত বেশি বিনিয়োগ করে, তরুণেরা তত কম একা বা বিচ্ছিন্ন অনুভব করে।', en: 'The more a community invests in free public spaces, the less young people feel lonely or isolated.' } },
    ],
    wordGlossary: [
      { word: 'integrazione', base: "l'integrazione", tr: { bn: 'সমন্বয় / একীভূতকরণ', en: 'integration' }, pos: 'noun' },
      { word: 'comunità', base: 'la comunità', tr: { bn: 'সম্প্রদায় / সমাজ', en: 'community' }, pos: 'noun' },
      { word: 'allenarsi', base: 'allenarsi', tr: { bn: 'অনুশীলন / শরীরচর্চা করা', en: 'to train / work out' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Più ci ritroviamo… più nascono amicizie. Più investe… meno si sentono soli.', ruleTitle: { bn: 'আনুপাতিক তুলনা: যত... তত (Più… più / Più… meno)', en: 'Proportional comparisons' }, explanation: { bn: 'সমান্তরাল বৃদ্ধি বা হ্রাস বোঝাতে আর্টিকেল ছাড়াই Più… più… এবং Più… meno… বসেছে।', en: 'Proportional correlation uses Più… più… and Più… meno… without articles.' }, grammarId: 'comparativi-proporzionali' },
    ],
    mcq: [
      { id: 'stb1-39-q1', prompt: { bn: 'তারা কখন পার্কে অনুশীলন করতে মিলিত হয়?', en: 'When do they meet in the park to train?' }, options: ['ভোরে', 'কাজের পর (dopo il lavoro)', 'দুপুরে', 'কেবল শীতে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কাজের পর (dopo il lavoro) — পাঠ্যাংশে বলা হয়েছে: «কাজের পর একসাথে অনুশীলন করতে আমরা যত বেশি মিলিত হই, দৈনন্দিন জীবনেও তত বেশি অকৃত্রিম বন্ধুত্ব ও দরকারি সহযোগিতা গড়ে ওঠে।» (dopo il lavoro)।', en: 'After work.' } },
    ],
    trueFalse: [
      { id: 'stb1-39-tf1', statementIt: 'La squadra è riservata solo agli atleti professionisti.', statement: { bn: 'দলটি কেবল পেশাদার ক্রীড়াবিদদের জন্য সংরক্ষিত।', en: 'The team is reserved only for professional athletes.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «পুরোনো ও নতুন বাসিন্দাদের মধ্যে সমন্বয় বাড়াতে দুই বছর আগে আমরা আমাদের এলাকার পাবলিক পার্কে দৌড় ও ফাইভ-এ-সাইড ফুটবলের একটি অপেশাদার দল গঠন করেছি।» (una squadra amatoriale)।', en: 'It is an amateur team.' } },
    ],
    fillBlank: [
      { id: 'stb1-39-fb1', sentence: '___ parli in italiano, ___ diventi fluente.', options: ['Più / più', 'Il più / il più', 'Tanto / che', 'Più / di'], answer: 0, explanation: { bn: 'পাঠ্যাংশের তথ্যানুযায়ী: «কাজের পর একসাথে অনুশীলন করতে আমরা যত বেশি মিলিত হই, দৈনন্দিন জীবনেও তত বেশি অকৃত্রিম বন্ধুত্ব ও দরকারি সহযোগিতা গড়ে ওঠে।» (সঠিক উত্তর: Più / più)।', en: 'Più… più…' } },
    ],
    shortAnswer: [
      { id: 'stb1-39-sa1', question: { bn: 'দলটি গঠনের মূল লক্ষ্য কী ছিল?', en: 'What was the main goal of founding the team?' }, sampleAnswerIt: 'Favorire l’integrazione tra vecchi e nuovi residenti.', keywords: ['integrazione', 'residenti'] },
    ],
    practice: {
      retellPrompt: { bn: 'পাড়ার ক্রীড়া দলটির ভূমিকা ৩ বাক্যে লিখুন।', en: 'Describe the neighbourhood sports team in 3 sentences.' },
      completeMissing: { promptIt: '___ ci alleniamo, ___ ci sentiamo in forma.', hint: { bn: 'আনুপাতিক তুলনায় যত... তত বোঝাতে Più ... più বসান', en: 'Più / più' }, sampleIt: 'Più ci alleniamo, più ci sentiamo in forma.' },
      buildSimilar: { patternIt: 'Più leggo, più arricchisco il mio vocabolario.', prompt: { bn: 'Più… più… দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence using Più… più…' }, sampleIt: 'Più conosco questa città, più mi piace viverci.' },
      altEndingPrompt: { bn: 'বসন্তে দলটি কোন টুর্নামেন্টের আয়োজন করল লিখুন।', en: 'Write about the spring tournament organised by the team.' },
    },
  }),

  buildStory({
    id: 'st-b1-40', level: 'B1', titleIt: 'Volontariato alla mensa solidale',
    title: { bn: 'সংহতি ক্যান্টিনে স্বেচ্ছাসেবা', en: 'Volunteering at the community kitchen' },
    topic: { bn: 'স্বেচ্ছাসেবা ও অনির্দিষ্ট সর্বনাম (chiunque, qualsiasi)', en: 'Volunteering & indefinite pronouns with subjunctive' },
    grammarIds: ['indefiniti-negativi-b1'],
    vocabKeys: ['w:B1:il volontariato', 'w:B1:la calma', 'w:B1:sostenere'],
    paragraphs: [
      { it: 'Ogni sabato pomeriggio faccio volontariato presso la mensa solidale vicino alla stazione. Chiunque abbia due ore libere può dare una mano a preparare i pasti caldi.', tr: { bn: 'প্রতি শনিবার বিকেলে আমি স্টেশনের কাছে সংহতি ক্যান্টিনে স্বেচ্ছাসেবা করি। যে কারো দুই ঘণ্টা অবসর থাকলে গরম খাবার তৈরিতে হাত লাগাতে পারে।', en: 'Every Saturday afternoon I volunteer at the solidarity canteen near the station. Anyone who has two hours free can lend a hand preparing hot meals.' } },
      { it: 'La coordinatrice ripete sempre che, qualsiasi imprevisto succeda in cucina, bisogna mantenere la calma e accogliere ogni ospite con rispetto.', tr: { bn: 'সমন্বয়কারী সবসময় বলেন যে রান্নাঘরে যে অপ্রত্যাশিত ঘটনাই ঘটুক না কেন, শান্ত থাকতে হবে এবং প্রতিটি অতিথিকে সম্মানের সাথে স্বাগত জানাতে হবে।', en: 'The coordinator always repeats that whatever unexpected issue happens in the kitchen, we must keep calm and welcome every guest with respect.' } },
      { it: 'Anche i panifici e i mercati rionali donano pane e frutta fresca per sostenere concretamente chi attraversa un momento difficile.', tr: { bn: 'এমনকি এলাকার বেকারি ও বাজারগুলোও কঠিন সময় পার করা মানুষদের বাস্তবভাবে সহায়তা করতে রুটি ও তাজা ফল দান করে।', en: 'Local bakeries and district markets also donate bread and fresh fruit to concretely support those going through a difficult time.' } },
    ],
    wordGlossary: [
      { word: 'volontariato', base: 'il volontariato', tr: { bn: 'স্বেচ্ছাসেবা', en: 'volunteering' }, pos: 'noun' },
      { word: 'calma', base: 'la calma', tr: { bn: 'শান্ত ভাব / ধৈর্য', en: 'calm' }, pos: 'noun' },
      { word: 'sostenere', base: 'sostenere', tr: { bn: 'সমর্থন / সহায়তা করা', en: 'to support' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Chiunque abbia due ore… qualsiasi imprevisto succeda…', ruleTitle: { bn: 'অনির্দিষ্ট সর্বনাম ও বিশেষণের পরে সাবজাংক্টিভ (Chiunque / Qualsiasi / Qualunque)', en: 'Indefinites requiring the subjunctive' }, explanation: { bn: 'chiunque এবং qualsiasi + একবচন বিশেষ্যের পরে গৌণ বাক্যে সর্বদা congiuntivo (abbia, succeda) বসে।', en: 'chiunque and qualsiasi (+ singular noun) trigger the subjunctive.' }, grammarId: 'indefiniti-negativi-b1' },
    ],
    mcq: [
      { id: 'stb1-40-q1', prompt: { bn: 'স্থানীয় বেকারি ও বাজারগুলো ক্যান্টিনে কী দান করে?', en: 'What do local bakeries and markets donate to the canteen?' }, options: ['রুটি ও তাজা ফল', 'কাপড় ও জুতো', 'বই ও খাতা', 'ওষুধ'], answer: 0, explanation: { bn: 'সঠিক উত্তর: রুটি ও তাজা ফল — পাঠ্যাংশে বলা হয়েছে: «এমনকি এলাকার বেকারি ও বাজারগুলোও কঠিন সময় পার করা মানুষদের বাস্তবভাবে সহায়তা করতে রুটি ও তাজা ফল দান করে।» (donano pane e frutta fresca)।', en: 'Bread and fresh fruit.' } },
    ],
    trueFalse: [
      { id: 'stb1-40-tf1', statementIt: 'Per fare volontariato bisogna lavorare tutta la settimana.', statement: { bn: 'স্বেচ্ছাসেবা করতে হলে পুরো সপ্তাহ কাজ করতে হয়।', en: 'To volunteer you have to work the whole week.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «প্রতি শনিবার বিকেলে আমি স্টেশনের কাছে সংহতি ক্যান্টিনে স্বেচ্ছাসেবা করি। যে কারো দুই ঘণ্টা অবসর থাকলে গরম খাবার তৈরিতে হাত লাগাতে পারে।» (Chiunque abbia due ore libere può dare una mano)।', en: 'Anyone with two free hours can help.' } },
    ],
    fillBlank: [
      { id: 'stb1-40-fb1', sentence: 'Qualsiasi decisione tu ___, noi saremo con te.', options: ['prendi', 'prenda', 'prenderai', 'prendevi'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Qualsiasi + congiuntivo (prenda) — Qualsiasi এর পরে সাবজাংক্টিভ রূপ বসে prenda।', en: 'Qualsiasi takes subjunctive prenda.' } },
    ],
    shortAnswer: [
      { id: 'stb1-40-sa1', question: { bn: 'রান্নাঘরে অপ্রত্যাশিত কিছু ঘটলে কী বজায় রাখতে হয়?', en: 'What must be maintained if something unexpected happens in the kitchen?' }, sampleAnswerIt: 'Bisogna mantenere la calma.', keywords: ['calma'] },
    ],
    practice: {
      retellPrompt: { bn: 'সংহতি ক্যান্টিনে স্বেচ্ছাসেবার অভিজ্ঞতাটি ৩ বাক্যে লিখুন।', en: 'Describe volunteering at the community kitchen in 3 sentences.' },
      completeMissing: { promptIt: 'Chiunque ___ partecipare è il benvenuto.', hint: { bn: 'volere ক্রিয়ার বর্তমান সাবজাংক্টিভ রূপ voglia বসান', en: 'voglia' }, sampleIt: 'Chiunque voglia partecipare è il benvenuto.' },
      buildSimilar: { patternIt: 'Qualsiasi problema tu abbia, puoi chiamarmi.', prompt: { bn: 'Chiunque... বা Qualsiasi... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Chiunque... or Qualsiasi...' }, sampleIt: 'Qualsiasi orario tu scelga, per me va bene.' },
      altEndingPrompt: { bn: 'শনিবার সন্ধ্যায় খাবার পরিবেশনের পর স্বেচ্ছাসেবকেরা কী করেন লিখুন।', en: 'Write what the volunteers do together after serving dinner.' },
    },
  }),

  buildStory({
    id: 'st-b1-41', level: 'B1', titleIt: 'Tre preventivi prima di scegliere',
    title: { bn: 'বেছে নেওয়ার আগে তিনটি প্রাক্কলন', en: 'Three quotes before choosing' },
    topic: { bn: 'ভোক্তা সচেতনতা ও অতীত মডাল (avrei dovuto/potuto)', en: 'Consumer advice & past modals' },
    grammarIds: ['modali-condizionale-passato'],
    vocabKeys: ['w:B1:avvertire', 'w:B1:confrontare', 'w:B1:il preventivo'],
    paragraphs: [
      { it: 'Il mese scorso il condizionatore del nostro negozio si è bloccato improvvisamente. Preso dalla fretta, ho chiamato il primo tecnico trovato online senza chiedere prima il costo dell’intervento.', tr: { bn: 'গত মাসে আমাদের দোকানের এয়ার কন্ডিশনার হঠাৎ বন্ধ হয়ে যায়। তাড়াহুড়োয় পড়ে আগে কাজের খরচ না জেনেই অনলাইনে পাওয়া প্রথম টেকনিশিয়ানকে ডেকে ফেলি।', en: 'Last month the air conditioner in our shop suddenly broke down. In a rush, I called the first technician I found online without asking the call-out cost beforehand.' } },
      { it: 'Alla fine la fattura è stata salatissima! Avrei dovuto confrontare almeno tre preventivi diversi e avrei potuto chiedere consiglio al proprietario del bar accanto.', tr: { bn: 'শেষে বিলটি প্রচণ্ড চড়া হলো! আমার অন্তত তিনটি ভিন্ন প্রাক্কলন তুলনা করা উচিত ছিল এবং পাশের ক্যাফের মালিকের কাছে পরামর্শ চাইতে পারতাম।', en: 'In the end the invoice was astronomical! I should have compared at least three different quotes and I could have asked the owner of the café next door for advice.' } },
      { it: 'Anche il tecnico avrebbe dovuto avvertire chiaramente che il pezzo di ricambio non era incluso nella tariffa base.', tr: { bn: 'টেকনিশিয়ানেরও স্পষ্টভাবে সতর্ক করা উচিত ছিল যে খুচরা যন্ত্রাংশটি মূল চার্জের অন্তর্ভুক্ত নয়।', en: 'The technician should also have clearly warned me that the spare part was not included in the base fee.' } },
    ],
    wordGlossary: [
      { word: 'avvertire', base: 'avvertire', tr: { bn: 'সতর্ক করা / জানানো', en: 'to warn / notify' }, pos: 'verb' },
      { word: 'confrontare', base: 'confrontare', tr: { bn: 'তুলনা করা', en: 'to compare' }, pos: 'verb' },
      { word: 'preventivo', base: 'il preventivo', tr: { bn: 'প্রাক্কলন / কোটেশন', en: 'quote / estimate' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Avrei dovuto confrontare tre preventivi e avrei potuto chiedere consiglio.', ruleTitle: { bn: 'মডাল ক্রিয়ার অতীত কন্ডিশনাল রূপ (Condizionale passato dei verbi modali)', en: 'Past conditional of modal verbs' }, explanation: { bn: 'অতীতে করা উচিত ছিল কিন্তু করা হয়নি বোঝাতে avrei dovuto confrontare এবং করার সুযোগ ছিল বোঝাতে avrei potuto chiedere বসেছে।', en: 'avrei dovuto + infinitive = should have done; avrei potuto + infinitive = could have done.' }, grammarId: 'modali-condizionale-passato' },
    ],
    mcq: [
      { id: 'stb1-41-q1', prompt: { bn: 'দোকানের কোন যন্ত্রটি হঠাৎ নষ্ট হয়েছিল?', en: 'Which appliance in the shop broke down?' }, options: ['রেফ্রিজারেটর', 'এয়ার কন্ডিশনার', 'কফি মেশিন', 'কম্পিউটার'], answer: 1, explanation: { bn: 'সঠিক উত্তর: এয়ার কন্ডিশনার — পাঠ্যাংশে বলা হয়েছে: «গত মাসে আমাদের দোকানের এয়ার কন্ডিশনার হঠাৎ বন্ধ হয়ে যায়। তাড়াহুড়োয় পড়ে আগে কাজের খরচ না জেনেই অনলাইনে পাওয়া প্রথম টেকনিশিয়ানকে ডেকে ফেলি।» (il condizionatore del nostro negozio)।', en: 'The air conditioner.' } },
    ],
    trueFalse: [
      { id: 'stb1-41-tf1', statementIt: 'Il pezzo di ricambio era incluso gratuitamente nella tariffa base.', statement: { bn: 'খুচরা যন্ত্রাংশটি মূল চার্জের সাথে বিনামূল্যে অন্তর্ভুক্ত ছিল।', en: 'The spare part was included for free in the base rate.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «টেকনিশিয়ানেরও স্পষ্টভাবে সতর্ক করা উচিত ছিল যে খুচরা যন্ত্রাংশটি মূল চার্জের অন্তর্ভুক্ত নয়।» (non era incluso nella tariffa base)।', en: 'It was not included.' } },
    ],
    fillBlank: [
      { id: 'stb1-41-fb1', sentence: 'Noi ___ dovuto leggere meglio il contratto.', options: ['avremmo', 'abbiamo', 'avremo', 'avevamo'], answer: 0, explanation: { bn: 'avremmo dovuto leggere = আমাদের পড়া উচিত ছিল।', en: 'avremmo dovuto leggere.' } },
    ],
    shortAnswer: [
      { id: 'stb1-41-sa1', question: { bn: 'বক্তার অন্তত কয়টি প্রাক্কলন তুলনা করা উচিত ছিল?', en: 'How many quotes should the narrator have compared?' }, sampleAnswerIt: 'Avrebbe dovuto confrontare almeno tre preventivi diversi.', keywords: ['tre', 'preventivi'] },
    ],
    practice: {
      retellPrompt: { bn: 'দোকানের এসি মেরামতের শিক্ষাটি avrei dovuto ব্যবহার করে ৩ বাক্যে লিখুন।', en: 'Summarise the lesson learned in 3 sentences using avrei dovuto / potuto.' },
      completeMissing: { promptIt: '___ potuto risparmiare molto tempo prenotando online.', hint: { bn: 'উত্তম পুরুষে অতীত কন্ডিশনাল সহায়ক ক্রিয়া Avrei বসান', en: 'Avrei' }, sampleIt: 'Avrei potuto risparmiare molto tempo prenotando online.' },
      buildSimilar: { patternIt: 'Avrei dovuto chiedere un preventivo scritto.', prompt: { bn: 'Avrei dovuto... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Avrei dovuto...' }, sampleIt: 'Avrei dovuto controllare gli orari del treno prima di uscire.' },
      altEndingPrompt: { bn: 'পরের বার যন্ত্র নষ্ট হলে বক্তা কী করবেন লিখুন।', en: 'Write what the narrator will do next time a repair is needed.' },
    },
  }),

  buildStory({
    id: 'st-b1-42', level: 'B1', titleIt: 'Comunicazione formale con l’amministrazione',
    title: { bn: 'প্রশাসনের সাথে আনুষ্ঠানিক চিঠিপত্র', en: 'Formal communication with the administration' },
    topic: { bn: 'দাপ্তরিক ইমেইল ও আনুষ্ঠানিক নিবেদন (registro formale)', en: 'Official emails & formal register' },
    grammarIds: ['registro-formale-b1'],
    vocabKeys: ["w:B1:l'allegato", 'w:B1:la ricevuta digitale', 'w:B1:la collaborazione'],
    paragraphs: [
      { it: 'Gentile Dottoressa Martini, Le scrivo in merito alla richiesta di rimborso per il corso di formazione professionale concluso il mese scorso.', tr: { bn: 'মাননীয় ডক্টর মার্তিনি, গত মাসে সমাপ্ত পেশাগত প্রশিক্ষণ কোর্সের অর্থ ফেরতের আবেদনের বিষয়ে আমি আপনাকে লিখছি।', en: 'Dear Dr Martini, I am writing to you regarding the reimbursement request for the professional training course completed last month.' } },
      { it: 'Come da accordi telefonici, Le trasmetto nell’allegato il certificato di frequenza finale e la ricevuta digitale del bonifico bancario.', tr: { bn: 'ফোনালাপের সিদ্ধান্ত অনুযায়ী সংযুক্তিতে আপনাকে চূড়ান্ত উপস্থিতির সনদ এবং ব্যাংক ট্রান্সফারের ডিজিটাল রসিদ পাঠাচ্ছি।', en: 'As agreed by phone, I am sending you in the attachment the final attendance certificate and the digital receipt of the bank transfer.' } },
      { it: 'La ringrazio anticipatamente per la Sua preziosa collaborazione e, restando in attesa di un Suo cortese riscontro, Le porgo i miei più cordiali saluti.', tr: { bn: 'আপনার মূল্যবান সহযোগিতার জন্য অগ্রিম ধন্যবাদ জানাচ্ছি এবং আপনার সদয় উত্তরের অপেক্ষায় থেকে আমার আন্তরিক শুভেচ্ছা জানাচ্ছি।', en: 'I thank you in advance for your valuable cooperation and, awaiting your kind reply, I send you my warmest regards.' } },
    ],
    wordGlossary: [
      { word: 'allegato', base: "l'allegato", tr: { bn: 'সংযুক্তি / অ্যাটাচমেন্ট', en: 'attachment' }, pos: 'noun' },
      { word: 'ricevuta digitale', base: 'la ricevuta digitale', tr: { bn: 'ডিজিটাল রসিদ', en: 'digital receipt' }, pos: 'noun' },
      { word: 'collaborazione', base: 'la collaborazione', tr: { bn: 'সহযোগিতা', en: 'cooperation / collaboration' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Le scrivo in merito a… La ringrazio per la Sua collaborazione.', ruleTitle: { bn: 'আনুষ্ঠানিক সর্বনাম ব্যবহার (La / Le / Suo)', en: 'Formal pronouns La and Le' }, explanation: { bn: 'আনুষ্ঠানিক Lei-তে পরোক্ষ কর্ম Le (Le scrivo, Le trasmetto, Le porgo) এবং প্রত্যক্ষ কর্ম La (La ringrazio) ব্যবহৃত হয়।', en: 'Formal correspondence uses indirect Le and direct La.' }, grammarId: 'registro-formale-b1' },
    ],
    mcq: [
      { id: 'stb1-42-q1', prompt: { bn: 'সংযুক্তিতে কোন দুটি নথি পাঠানো হয়েছে?', en: 'Which two documents were sent in the attachment?' }, options: ['সিভি ও পাসপোর্ট', 'উপস্থিতির সনদ ও ব্যাংক ট্রান্সফারের ডিজিটাল রসিদ', 'ভাড়ার চুক্তি ও বিদ্যুৎ বিল', 'ট্রেনের টিকিট ও হোটেল রসিদ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: উপস্থিতির সনদ ও ব্যাংক ট্রান্সফারের ডিজিটাল রসিদ — পাঠ্যাংশে বলা হয়েছে: «ফোনালাপের সিদ্ধান্ত অনুযায়ী সংযুক্তিতে আপনাকে চূড়ান্ত উপস্থিতির সনদ এবং ব্যাংক ট্রান্সফারের ডিজিটাল রসিদ পাঠাচ্ছি।» (il certificato di frequenza finale e la ricevuta digitale del bonifico)।', en: 'The attendance certificate and the digital bank transfer receipt.' } },
    ],
    trueFalse: [
      { id: 'stb1-42-tf1', statementIt: 'L’email è scritta in un tono informale tra amici.', statement: { bn: 'ইমেইলটি বন্ধুদের মধ্যে ঘরোয়া সুরে লেখা হয়েছে।', en: 'The email is written in an informal tone between friends.' }, answer: false, explanation: { bn: 'Gentile Dottoressa, Le scrivo, La ringrazio — সম্পূর্ণ আনুষ্ঠানিক রীতি।', en: 'It is written in formal administrative register.' } },
    ],
    fillBlank: [
      { id: 'stb1-42-fb1', sentence: 'In attesa di un Suo riscontro, ___ porgo distinti saluti.', options: ['Ti', 'Le', 'La', 'Vi'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «porgere saluti a Lei» থেকে পরিবর্তিত হয়ে «Le porgo» ব্যবহৃত হয়।', en: 'Le porgo distinti saluti.' } },
    ],
    shortAnswer: [
      { id: 'stb1-42-sa1', question: { bn: 'ইমেইলটি কোন বিষয়ে লেখা হয়েছে?', en: 'What is the email written about?' }, sampleAnswerIt: 'È scritta in merito alla richiesta di rimborso per il corso di formazione.', keywords: ['rimborso', 'corso', 'formazione'] },
    ],
    practice: {
      retellPrompt: { bn: 'আনুষ্ঠানিক ইমেইলের ৩টি মূল অংশ নিজের ভাষায় লিখুন।', en: 'Write a 3-sentence formal email requesting information or a refund.' },
      completeMissing: { promptIt: 'Gentile Direttore, ___ ringrazio per la disponibilità.', hint: { bn: 'প্রত্যক্ষ সর্বনাম: La', en: 'La' }, sampleIt: 'Gentile Direttore, La ringrazio per la disponibilità.' },
      buildSimilar: { patternIt: 'Le invio in allegato la copia del documento.', prompt: { bn: 'Le scrivo per... দিয়ে একটি আনুষ্ঠানিক বাক্য লিখুন।', en: 'Write a formal sentence starting with Le scrivo per...' }, sampleIt: 'Le scrivo per confermare la mia partecipazione al seminario.' },
      altEndingPrompt: { bn: 'ডক্টর মার্তিনি উত্তরে কী জানালেন তা আনুষ্ঠানিক ভাষায় লিখুন।', en: 'Write Dr Martini’s formal reply confirming the refund.' },
    },
  }),
];
