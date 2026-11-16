import type { StoryItem } from '../academyTypes';
import { buildStory } from '../builders';

export const B1_STORIES_2: StoryItem[] = [
  buildStory({
    id: 'st-b1-15', level: 'B1', titleIt: 'Il preventivo del consulente',
    title: { bn: 'পরামর্শদাতার প্রাক্কলন ও সংযোগ ট্রেন', en: 'The consultant’s quote and the missed connection' },
    topic: { bn: 'ব্যবসায়িক ভ্রমণ ও congiuntivo passato', en: 'Business travel & past subjunctive' },
    grammarIds: ['congiuntivo-passato'],
    vocabKeys: ['w:B1:il consulente', 'w:B1:il preventivo', 'w:B1:la coincidenza persa'],
    paragraphs: [
      { it: 'Oggi pomeriggio aspettiamo in sede il nuovo consulente finanziario da Firenze. Penso che abbia già inviato il preventivo dettagliato alla nostra amministrazione.', tr: { bn: 'আজ বিকেলে আমরা কার্যালয়ে ফ্লোরেন্স থেকে নতুন আর্থিক পরামর্শদাতার অপেক্ষা করছি। আমার মনে হয় তিনি ইতিমধ্যে আমাদের প্রশাসনের কাছে বিস্তারিত প্রাক্কলন পাঠিয়েছেন।', en: 'This afternoon we are expecting the new financial consultant from Florence at our office. I think he has already sent the detailed quote to our administration.' } },
      { it: 'Sono le quindici e non è ancora arrivato: temiamo che abbia avuto un imprevisto in stazione e che sia rimasto bloccato per una coincidenza persa.', tr: { bn: 'এখন তিনটে বাজে এবং তিনি এখনো পৌঁছাননি: আমরা আশঙ্কা করছি স্টেশনে তাঁর হঠাৎ কোনো সমস্যা হয়েছে এবং সংযোগ ট্রেন মিস করায় আটকে পড়েছেন।', en: 'It is three o’clock and he has not arrived yet: we fear he has had an unexpected issue at the station and got stuck due to a missed connection.' } },
      { it: 'Fortunatamente ci ha appena scritto che ha preso il treno successivo e che arriverà tra venti minuti.', tr: { bn: 'সৌভাগ্যবশত তিনি এইমাত্র আমাদের লিখেছেন যে পরের ট্রেনটি ধরেছেন এবং বিশ মিনিটের মধ্যে পৌঁছাবেন।', en: 'Fortunately he has just texted us that he caught the next train and will arrive in twenty minutes.' } },
    ],
    wordGlossary: [
      { word: 'consulente', base: 'il consulente', tr: { bn: 'পরামর্শদাতা', en: 'consultant' }, pos: 'noun' },
      { word: 'preventivo', base: 'il preventivo', tr: { bn: 'খরচের প্রাক্কলন / কোটেশন', en: 'quote / estimate' }, pos: 'noun' },
      { word: 'coincidenza persa', base: 'la coincidenza persa', tr: { bn: 'মিস হওয়া সংযোগ ট্রেন', en: 'missed connection' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Penso che abbia già inviato il preventivo.', ruleTitle: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «Congiuntivo passato (abbia inviato / sia rimasto)» (Past subjunctive)।', en: 'Past subjunctive' }, explanation: { bn: 'বর্তমানের চিন্তা (Penso / temiamo) কিন্তু কাজটি ইতিমধ্যে ঘটে গেছে বোঝাতে abbia inviato ও sia rimasto বসেছে।', en: 'Present main verb + prior completed event uses present subjunctive of avere/essere + participle.' }, grammarId: 'congiuntivo-passato' },
    ],
    mcq: [
      { id: 'stb1-15-q1', prompt: { bn: 'পরামর্শদাতা কোথা থেকে আসছিলেন?', en: 'Where was the consultant travelling from?' }, options: ['রোম', 'ফ্লোরেন্স', 'নেপলস', 'ভেনিস'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ফ্লোরেন্স — পাঠ্যাংশে বলা হয়েছে: «আজ বিকেলে আমরা কার্যালয়ে ফ্লোরেন্স থেকে নতুন আর্থিক পরামর্শদাতার অপেক্ষা করছি। আমার মনে হয় তিনি ইতিমধ্যে আমাদের প্রশাসনের কাছে বিস্তারিত প্রাক্কলন পাঠিয়েছেন।» (da Firenze)।', en: 'From Florence.' } },
    ],
    trueFalse: [
      { id: 'stb1-15-tf1', statementIt: 'Il consulente ha annullato l’incontro.', statement: { bn: 'পরামর্শদাতা সাক্ষাৎটি বাতিল করেছেন।', en: 'The consultant cancelled the meeting.' }, answer: false, explanation: { bn: 'তিনি পরের ট্রেন ধরেছেন এবং বিশ মিনিটে পৌঁছাবেন।', en: 'He caught the next train.' } },
    ],
    fillBlank: [
      { id: 'stb1-15-fb1', sentence: 'Spero che voi ___ ricevuto il preventivo.', options: ['avete', 'abbiate', 'aveste', 'avrete'], answer: 1, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «Spero che + voi abbiate ricevuto» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'abbiate ricevuto.' } },
    ],
    shortAnswer: [
      { id: 'stb1-15-sa1', question: { bn: 'পরামর্শদাতা প্রশাসনের কাছে কী পাঠিয়েছেন বলে ধারণা করা হচ্ছে?', en: 'What is the consultant thought to have sent to administration?' }, sampleAnswerIt: 'Penso che abbia inviato il preventivo dettagliato.', keywords: ['preventivo'] },
    ],
    practice: {
      retellPrompt: { bn: 'পরামর্শদাতার দেরি হওয়ার ঘটনাটি ৩ বাক্যে লিখুন।', en: 'Summarise the consultant’s delay in 3 sentences.' },
      completeMissing: { promptIt: 'Credo che il treno ___ già partito.', hint: { bn: 'essere ক্রিয়ার বর্তমান সাবজাংক্টিভ রূপ sia ব্যবহার করুন', en: 'sia' }, sampleIt: 'Credo che il treno sia già partito.' },
      buildSimilar: { patternIt: 'Penso che abbia già inviato il preventivo.', prompt: { bn: 'Spero che abbia/sia... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with Spero che abbia/sia...' }, sampleIt: 'Spero che tu abbia trovato facilmente l’ufficio.' },
      altEndingPrompt: { bn: 'পরামর্শদাতা পৌঁছানোর পর সভায় কী আলোচনা হলো লিখুন।', en: 'Write what happened once the consultant arrived.' },
    },
  }),

  buildStory({
    id: 'st-b1-16', level: 'B1', titleIt: 'Iscrizione al nuovo semestre',
    title: { bn: 'নতুন সেমিস্টারে নিবন্ধন ও চুক্তির ধারা', en: 'Enrolling in the new semester' },
    topic: { bn: 'বিশ্ববিদ্যালয় ও congiuntivo trapassato', en: 'University & pluperfect subjunctive' },
    grammarIds: ['congiuntivo-trapassato'],
    vocabKeys: ['w:B1:il semestre', 'w:B1:la clausola'],
    paragraphs: [
      { it: 'Lunedì scorso sono andato in segreteria studenti perché temevo che avessero già chiuso le liste per i laboratori del secondo semestre.', tr: { bn: 'গত সোমবার আমি শিক্ষার্থী দপ্তরে গিয়েছিলাম কারণ ভয় পাচ্ছিলাম দ্বিতীয় সেমিস্টারের ল্যাবরেটরির তালিকা হয়ত তারা ইতিমধ্যে বন্ধ করে দিয়েছে।', en: 'Last Monday I went to the student office because I was afraid they had already closed the lists for the second-semester labs.' } },
      { it: 'La mia amica Nadia credeva che io mi fossi iscritto online la settimana prima, ma non avevo notato una piccola clausola sul bando che richiedeva la consegna del piano di studi cartaceo.', tr: { bn: 'আমার বান্ধবী নাদিয়া ভেবেছিল আমি আগের সপ্তাহেই অনলাইনে নিবন্ধন করেছি, কিন্তু বিজ্ঞপ্তির একটি ছোট ধারা আমার চোখে পড়েনি যেখানে কাগুজে পাঠ্যপরিকল্পনা জমা দেওয়ার কথা বলা ছিল।', en: 'My friend Nadia thought I had registered online the week before, but I had not noticed a small clause in the notice requiring submission of the paper study plan.' } },
      { it: 'Per fortuna l’impiegata ha accettato il modulo e mi ha inserito nell’ultimo gruppo disponibile.', tr: { bn: 'ভাগ্যক্রমে কর্মচারী ফর্মটি গ্রহণ করেছেন এবং আমাকে সর্বশেষ উপলব্ধ দলে অন্তর্ভুক্ত করেছেন।', en: 'Luckily the clerk accepted the form and placed me in the last available group.' } },
    ],
    wordGlossary: [
      { word: 'semestre', base: 'il semestre', tr: { bn: 'সেমিস্টার / অর্ধবার্ষিকী', en: 'semester' }, pos: 'noun' },
      { word: 'clausola', base: 'la clausola', tr: { bn: 'চুক্তির ধারা / শর্ত', en: 'clause' }, pos: 'noun' },
      { word: 'piano di studi', base: 'il piano di studi', tr: { bn: 'পাঠ্যপরিকল্পনা', en: 'study plan' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Temevo che avessero già chiuso le liste.', ruleTitle: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «Congiuntivo trapassato (avessero chiuso / mi fossi iscritto)» (Pluperfect subjunctive)।', en: 'Pluperfect subjunctive' }, explanation: { bn: 'অতীতের ক্রিয়া (Temevo / credeva)-র আগে ঘটে যাওয়া কাজ বোঝাতে avessero chiuso ও mi fossi iscritto বসেছে।', en: 'Past main verb + earlier action takes pluperfect subjunctive.' }, grammarId: 'congiuntivo-trapassato' },
    ],
    mcq: [
      { id: 'stb1-16-q1', prompt: { bn: 'বিজ্ঞপ্তির ধারা অনুযায়ী কী জমা দেওয়া দরকার ছিল?', en: 'What did the clause in the notice require?' }, options: ['পাসপোর্ট', 'কাগুজে পাঠ্যপরিকল্পনা', 'চিকিৎসা সনদ', 'ব্যাংক কার্ড'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কাগুজে পাঠ্যপরিকল্পনা — পাঠ্যাংশে বলা হয়েছে: «আমার বান্ধবী নাদিয়া ভেবেছিল আমি আগের সপ্তাহেই অনলাইনে নিবন্ধন করেছি, কিন্তু বিজ্ঞপ্তির একটি ছোট ধারা আমার চোখে পড়েনি যেখানে কাগুজে পাঠ্যপরিকল্পনা জমা দেওয়ার কথা বলা ছিল।» (la consegna del piano di studi cartaceo)।', en: 'The paper study plan.' } },
    ],
    trueFalse: [
      { id: 'stb1-16-tf1', statementIt: 'Lo studente non ha trovato posto nel laboratorio.', statement: { bn: 'শিক্ষার্থীটি ল্যাবরেটরিতে জায়গা পায়নি।', en: 'The student did not get a place in the lab.' }, answer: false, explanation: { bn: 'শেষ দলে তাকে অন্তর্ভুক্ত করা হয়েছে।', en: 'He was placed in the last available group.' } },
    ],
    fillBlank: [
      { id: 'stb1-16-fb1', sentence: 'Nadia credeva che io mi ___ già iscritto.', options: ['sono', 'sia', 'fossi', 'ero'], answer: 2, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «credeva che + io mi fossi iscritto» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'mi fossi iscritto.' } },
    ],
    shortAnswer: [
      { id: 'stb1-16-sa1', question: { bn: 'শিক্ষার্থী কেন দপ্তরে গিয়েছিল?', en: 'Why did the student go to the office?' }, sampleAnswerIt: 'Temeva che avessero già chiuso le liste per i laboratori.', keywords: ['liste', 'laboratori'] },
    ],
    practice: {
      retellPrompt: { bn: 'সেমিস্টার নিবন্ধনের অভিজ্ঞতাটি ৩ বাক্যে লিখুন।', en: 'Retell the semester enrolment story in 3 sentences.' },
      completeMissing: { promptIt: 'Speravamo che tu ___ letto tutte le clausole.', hint: { bn: 'avere ক্রিয়ার ইমপারফেক্ট সাবজাংক্টিভ রূপ avessi বসান', en: 'avessi' }, sampleIt: 'Speravamo che tu avessi letto tutte le clausole.' },
      buildSimilar: { patternIt: 'Credevo che avessero già chiuso le iscrizioni.', prompt: { bn: 'Credevo che avessi/fossi... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with Credevo che avessi/fossi...' }, sampleIt: 'Credevo che tu avessi già compilato il piano di studi.' },
      altEndingPrompt: { bn: 'প্রথম ল্যাবরেটরি ক্লাসে কী হলো তা লিখুন।', en: 'Write what happened on the first day of the lab.' },
    },
  }),

  buildStory({
    id: 'st-b1-17', level: 'B1', titleIt: 'Pianificare le ferie in squadra',
    title: { bn: 'দলে ছুটির পরিকল্পনা ও কালের সামঞ্জস্য', en: 'Planning team holidays' },
    topic: { bn: 'কর্মক্ষেত্র ও concordanza dei tempi', en: 'Workplace & sequence of tenses' },
    grammarIds: ['concordanza-congiuntivo'],
    vocabKeys: ['w:B1:dubitare', 'w:B1:risolvere', 'w:B1:le ferie pagate'],
    paragraphs: [
      { it: 'Ogni primavera nel nostro reparto organizziamo il calendario dei turni estivi. Il responsabile vuole che ciascuno indichi in anticipo quando desidera prendere le ferie pagate.', tr: { bn: 'প্রতি বসন্তে আমাদের বিভাগে গ্রীষ্মকালীন শিফটের সূচি সাজানো হয়। দায়িত্বপ্রাপ্ত কর্মকর্তা চান প্রত্যেকে যেন আগেভাগেই জানিয়ে দেয় কখন সবেতন ছুটি নিতে চায়।', en: 'Every spring in our department we organise the summer shift calendar. The manager wants each person to indicate in advance when they wish to take paid leave.' } },
      { it: 'Ieri alcuni colleghi dubitavano che fosse possibile accontentare tutti a luglio, ma stamattina penso che abbiamo trovato un equilibrio perfetto.', tr: { bn: 'গতকাল কয়েকজন সহকর্মী সন্দেহ প্রকাশ করেছিলেন জুলাই মাসে সবাইকে খুশি করা সম্ভব হবে কি না, কিন্তু আজ সকালে আমার মনে হয় আমরা নিখুঁত ভারসাম্য খুঁজে পেয়েছি।', en: 'Yesterday some colleagues doubted whether it would be possible to satisfy everyone in July, but this morning I think we have found a perfect balance.' } },
      { it: 'Speravo che si potesse risolvere la questione senza discussioni, e infatti siamo rimasti tutti soddisfatti.', tr: { bn: 'আমি আশা করেছিলাম তর্কাতর্কি ছাড়াই বিষয়টির সমাধান করা যাবে, এবং সত্যিই আমরা সবাই সন্তুষ্ট হয়েছি।', en: 'I hoped the issue could be resolved without arguments, and indeed we were all satisfied.' } },
    ],
    wordGlossary: [
      { word: 'dubitare', base: 'dubitare', tr: { bn: 'সন্দেহ করা', en: 'to doubt' }, pos: 'verb' },
      { word: 'risolvere', base: 'risolvere', tr: { bn: 'সমাধান করা', en: 'to resolve' }, pos: 'verb' },
      { word: 'ferie pagate', base: 'le ferie pagate', tr: { bn: 'সবেতন ছুটি', en: 'paid holiday / leave' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Vuole che ciascuno indichi… dubitavano che fosse possibile.', ruleTitle: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «Concordanza dei tempi nel congiuntivo» (Sequence of tenses in the subjunctive)।', en: 'Sequence of tenses in the subjunctive' }, explanation: { bn: 'বর্তমান ক্রিয়ার (Vuole) পরে বর্তমান সংযোজক (indichi) এবং অতীত ক্রিয়ার (dubitavano / Speravo) পরে অতীত সংযোজক (fosse / potesse) বসেছে।', en: 'Present main verb takes present subjunctive; past main verb takes imperfect subjunctive.' }, grammarId: 'concordanza-congiuntivo' },
    ],
    mcq: [
      { id: 'stb1-17-q1', prompt: { bn: 'কোন মাসে সবাই ছুটি পাবে কি না তা নিয়ে সন্দেহ ছিল?', en: 'Which month did colleagues doubt everyone could take off?' }, options: ['মে', 'জুলাই', 'অক্টোবর', 'ডিসেম্বর'], answer: 1, explanation: { bn: 'সঠিক উত্তর: জুলাই — পাঠ্যাংশে বলা হয়েছে: «গতকাল কয়েকজন সহকর্মী সন্দেহ প্রকাশ করেছিলেন জুলাই মাসে সবাইকে খুশি করা সম্ভব হবে কি না, কিন্তু আজ সকালে আমার মনে হয় আমরা নিখুঁত ভারসাম্য খুঁজে পেয়েছি।» (accontentare tutti a luglio)।', en: 'In July.' } },
    ],
    trueFalse: [
      { id: 'stb1-17-tf1', statementIt: 'I colleghi hanno litigato a lungo per i turni.', statement: { bn: 'শিফট নিয়ে সহকর্মীরা দীর্ঘক্ষণ ঝগড়া করেছে।', en: 'The colleagues argued at length over the shifts.' }, answer: false, explanation: { bn: 'সবার সন্তুষ্টিতে শান্তভাবে সমাধান হয়েছে।', en: 'Everyone was satisfied without arguments.' } },
    ],
    fillBlank: [
      { id: 'stb1-17-fb1', sentence: 'Il capo vuole che noi ___ le date entro venerdì.', options: ['indichiamo', 'indicassimo', 'indicheremo', 'indicato'], answer: 0, explanation: { bn: 'vuole (বর্তমান) → indichiamo।', en: 'Present main verb takes indichiamo.' } },
    ],
    shortAnswer: [
      { id: 'stb1-17-sa1', question: { bn: 'কর্মকর্তা কর্মীদের কী আগেভাগে জানাতে বলেছেন?', en: 'What does the manager want staff to indicate in advance?' }, sampleAnswerIt: 'Vuole che indichino quando desiderano prendere le ferie pagate.', keywords: ['ferie', 'pagate'] },
    ],
    practice: {
      retellPrompt: { bn: 'অফিসের ছুটির সূচি তৈরির ঘটনাটি ৩ বাক্যে লিখুন।', en: 'Summarise how the team planned their summer leave in 3 sentences.' },
      completeMissing: { promptIt: 'So che oggi lavori, ma speravo che domani tu ___ libero.', hint: { bn: 'সঠিক রূপান্তর: «essere» থেকে পরিবর্তিত হয়ে «fossi» ব্যবহৃত হয়।', en: 'fossi' }, sampleIt: 'So che oggi lavori, ma speravo che domani tu fossi libero.' },
      buildSimilar: { patternIt: 'Speravo che si potesse risolvere il problema.', prompt: { bn: 'Speravo che... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Speravo che...' }, sampleIt: 'Speravo che approvassero subito le mie ferie.' },
      altEndingPrompt: { bn: 'গ্রীষ্মের ছুটিতে বক্তা কোথায় যাবেন তা লিখুন।', en: 'Write where the narrator plans to go during paid leave.' },
    },
  }),

  buildStory({
    id: 'st-b1-18', level: 'B1', titleIt: 'Manutenzione prima dell’inverno',
    title: { bn: 'শীতের আগে রক্ষণাবেক্ষণ ও ব্যাংক সুদ', en: 'Maintenance before winter' },
    topic: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «prima che, senza che, a meno che» (Subjunctive triggers: prima che, senza che, a meno che)।', en: 'Subjunctive triggers: prima che, senza che, a meno che' },
    grammarIds: ['senza-che-prima-che'],
    vocabKeys: ['w:B1:a meno che', 'w:B1:il guasto tecnico', "w:B1:il tasso d'interesse"],
    paragraphs: [
      { it: 'Ogni autunno facciamo controllare l’impianto di riscaldamento prima che arrivi il freddo intenso, per evitare un improvviso guasto tecnico a dicembre.', tr: { bn: 'ডিসেম্বরে হঠাৎ যান্ত্রিক ত্রুটি এড়াতে প্রতি শরতে তীব্র শীত আসার আগেই আমরা হিটিং সিস্টেম পরীক্ষা করাই।', en: 'Every autumn we have the heating system checked before the intense cold arrives, to avoid a sudden technical fault in December.' } },
      { it: 'L’anno scorso il tecnico ha sostituito una valvola usurata senza che noi dovessimo spendere una cifra esagerata.', tr: { bn: 'গত বছর আমাদের অতিরিক্ত অর্থ খরচ করা ছাড়াই টেকনিশিয়ান একটি ক্ষয়প্রাপ্ত ভালভ বদলে দিয়েছিলেন।', en: 'Last year the technician replaced a worn valve without our having to spend an excessive sum.' } },
      { it: 'Quest’anno vorremmo anche installare nuovi infissi termici con un piccolo prestito, a meno che il tasso d’interesse non salga ulteriormente.', tr: { bn: 'এ বছর ছোট একটি ঋণ নিয়ে আমরা নতুন তাপরোধী জানালাও বসাতে চাই, যদি না সুদের হার আরও বেড়ে যায়।', en: 'This year we would also like to install new thermal windows with a small loan, unless the interest rate rises further.' } },
    ],
    wordGlossary: [
      { word: 'a meno che', base: 'a meno che', tr: { bn: 'যদি না', en: 'unless' }, pos: 'conj' },
      { word: 'guasto tecnico', base: 'il guasto tecnico', tr: { bn: 'যান্ত্রিক ত্রুটি', en: 'technical fault' }, pos: 'noun' },
      { word: 'tasso d’interesse', base: "il tasso d'interesse", tr: { bn: 'সুদের হার', en: 'interest rate' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Controlliamo l’impianto prima che arrivi il freddo.', ruleTitle: { bn: 'prima che, senza che ও a meno che-এর পরে সাবজাংক্টিভ ব্যবহার', en: 'Subjunctive after prima che, senza che, a meno che' }, explanation: { bn: 'এই তিনটি সংযোজকের পরে সর্বদা congiuntivo (arrivi, dovessimo, salga) বসে।', en: 'These conjunctions always trigger the subjunctive.' }, grammarId: 'senza-che-prima-che' },
    ],
    mcq: [
      { id: 'stb1-18-q1', prompt: { bn: 'গত বছর টেকনিশিয়ান কী বদলে দিয়েছিলেন?', en: 'What did the technician replace last year?' }, options: ['পুরো বয়লার', 'একটি ক্ষয়প্রাপ্ত ভালভ', 'বৈদ্যুতিক তার', 'জানালা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: একটি ক্ষয়প্রাপ্ত ভালভ — পাঠ্যাংশে বলা হয়েছে: «গত বছর আমাদের অতিরিক্ত অর্থ খরচ করা ছাড়াই টেকনিশিয়ান একটি ক্ষয়প্রাপ্ত ভালভ বদলে দিয়েছিলেন।» (una valvola usurata)।', en: 'A worn valve.' } },
    ],
    trueFalse: [
      { id: 'stb1-18-tf1', statementIt: 'Fanno controllare il riscaldamento a fine inverno.', statement: { bn: 'তারা শীতের শেষে হিটিং পরীক্ষা করায়।', en: 'They have the heating checked at the end of winter.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «ডিসেম্বরে হঠাৎ যান্ত্রিক ত্রুটি এড়াতে প্রতি শরতে তীব্র শীত আসার আগেই আমরা হিটিং সিস্টেম পরীক্ষা করাই।» (Ogni autunno… prima che arrivi il freddo)।', en: 'Every autumn before the cold arrives.' } },
    ],
    fillBlank: [
      { id: 'stb1-18-fb1', sentence: 'Firmeremo il prestito a meno che non ___ i tassi.', options: ['aumentano', 'aumentino', 'aumenteranno', 'aumentavano'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: a meno che non + congiuntivo (aumentino) — a meno che non এর পরে সাবজাংক্টিভ রূপ বসে aumentino।', en: 'a meno che non takes subjunctive aumentino.' } },
    ],
    shortAnswer: [
      { id: 'stb1-18-sa1', question: { bn: 'এ বছর তারা বাসায় নতুন কী বসাতে চায়?', en: 'What do they want to install at home this year?' }, sampleAnswerIt: 'Vorrebbero installare nuovi infissi termici.', keywords: ['infissi', 'termici'] },
    ],
    practice: {
      retellPrompt: { bn: 'শীতের আগের রক্ষণাবেক্ষণের পরিকল্পনাটি ৩ বাক্যে লিখুন।', en: 'Summarise the pre-winter maintenance plan in 3 sentences.' },
      completeMissing: { promptIt: 'Chiudi le finestre prima che ___ a piovere.', hint: { bn: 'cominciare ক্রিয়ার বর্তমান সাবজাংক্টিভ রূপ cominci বসান', en: 'cominci' }, sampleIt: 'Chiudi le finestre prima che cominci a piovere.' },
      buildSimilar: { patternIt: 'Usciremo a meno che non piova.', prompt: { bn: 'prima che বা a meno che non দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with prima che or a meno che non.' }, sampleIt: 'Prenotiamo il treno prima che finiscano i posti.' },
      altEndingPrompt: { bn: 'নতুন জানালা বসানোর পর শীতে কতটা সাশ্রয় হলো লিখুন।', en: 'Write how much the new thermal windows saved in winter.' },
    },
  }),

  buildStory({
    id: 'st-b1-19', level: 'B1', titleIt: 'Mobilità sostenibile e nuove imprese',
    title: { bn: 'টেকসই যাতায়াত ও নতুন উদ্যোগ', en: 'Sustainable mobility and new enterprises' },
    topic: { bn: 'নগর পরিকল্পনা ও ২য় প্রকার শর্তমূলক বাক্য', en: 'Urban mobility & 2nd conditional' },
    grammarIds: ['periodo-ipotetico-2'],
    vocabKeys: ['w:B1:la pista ciclabile', 'w:B1:puntuale', "w:B1:l'impresa"],
    paragraphs: [
      { it: 'Se ogni quartiere fosse collegato al centro da una pista ciclabile sicura e illuminata, migliaia di pendolari lascerebbero l’auto in garage.', tr: { bn: 'প্রতিটি পাড়া যদি নিরাপদ ও আলোকিত সাইকেল লেন দিয়ে কেন্দ্রের সাথে যুক্ত থাকত, তবে হাজার হাজার নিত্যযাত্রী গ্যারেজে গাড়ি রেখে আসত।', en: 'If every neighbourhood were connected to the centre by a safe, lit cycle lane, thousands of commuters would leave their cars in the garage.' } },
      { it: 'Inoltre, se il servizio degli autobus periferici fosse sempre puntuale, anche gli studenti e i lavoratori turnisti si sposterebbero con maggiore facilità.', tr: { bn: 'তাছাড়া শহরতলির বাস সেবা যদি সবসময় সময়নিষ্ঠ হতো, তবে শিক্ষার্থী ও শিফটে কাজ করা কর্মীরাও আরও সহজে যাতায়াত করতে পারত।', en: 'Moreover, if the suburban bus service were always punctual, students and shift workers would also get around much more easily.' } },
      { it: 'Due giovani ingegneri del posto hanno pensato che, se ricevessero un piccolo finanziamento pubblico, aprirebbero un’impresa di riparazione e noleggio di bici elettriche.', tr: { bn: 'স্থানীয় দুই তরুণ প্রকৌশলী ভেবেছেন যে তাঁরা যদি ছোট একটি সরকারি অনুদান পেতেন, তবে বৈদ্যুতিক সাইকেল মেরামত ও ভাড়ার একটি ব্যবসায়িক উদ্যোগ খুলতেন।', en: 'Two young local engineers thought that if they received a small public grant, they would open an e-bike repair and rental business.' } },
    ],
    wordGlossary: [
      { word: 'pista ciclabile', base: 'la pista ciclabile', tr: { bn: 'সাইকেল লেন', en: 'cycle lane' }, pos: 'noun' },
      { word: 'puntuale', base: 'puntuale', tr: { bn: 'সময়নিষ্ঠ', en: 'punctual' }, pos: 'adj' },
      { word: 'impresa', base: "l'impresa", tr: { bn: 'ব্যবসায়িক প্রতিষ্ঠান / উদ্যোগ', en: 'enterprise / business' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Se ogni quartiere fosse collegato, i pendolari lascerebbero l’auto.', ruleTitle: { bn: 'Periodo ipotetico della possibilità (২য় প্রকার)', en: '2nd conditional' }, explanation: { bn: 'Se + congiuntivo imperfetto (fosse, ricevessero) এবং প্রধান বাক্যে condizionale presente (lascerebbero, aprirebbero)।', en: 'Se + imperfect subjunctive followed by present conditional.' }, grammarId: 'periodo-ipotetico-2' },
    ],
    mcq: [
      { id: 'stb1-19-q1', prompt: { bn: 'দুই তরুণ প্রকৌশলী কিসের প্রতিষ্ঠান খুলতে চান?', en: 'What kind of business would the two young engineers open?' }, options: ['বইয়ের দোকান', 'ই-বাইক মেরামত ও ভাড়া', 'রেস্তোরাঁ', 'সফটওয়্যার কোম্পানি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ই-বাইক মেরামত ও ভাড়া — পাঠ্যাংশে বলা হয়েছে: «স্থানীয় দুই তরুণ প্রকৌশলী ভেবেছেন যে তাঁরা যদি ছোট একটি সরকারি অনুদান পেতেন, তবে বৈদ্যুতিক সাইকেল মেরামত ও ভাড়ার একটি ব্যবসায়িক উদ্যোগ খুলতেন।» (riparazione e noleggio di bici elettriche)।', en: 'E-bike repair and rental.' } },
    ],
    trueFalse: [
      { id: 'stb1-19-tf1', statementIt: 'Le piste ciclabili servono solo ai turisti.', statement: { bn: 'সাইকেল লেন কেবল পর্যটকদের কাজে লাগে।', en: 'Cycle lanes are only useful for tourists.' }, answer: false, explanation: { bn: 'নিত্যযাত্রী, শিক্ষার্থী ও কর্মীদেরও কাজে লাগে।', en: 'They serve commuters, students, and workers.' } },
    ],
    fillBlank: [
      { id: 'stb1-19-fb1', sentence: 'Se i mezzi ___ puntuali, ci sarebbe meno traffico.', options: ['sono', 'fossero', 'sarebbero', 'saranno'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Se + fossero — Se এর পরে ইমপারফেক্ট সাবজাংক্টিভ (congiuntivo imperfetto) বসে fossero।', en: 'Se takes imperfect subjunctive fossero.' } },
    ],
    shortAnswer: [
      { id: 'stb1-19-sa1', question: { bn: 'নিরাপদ সাইকেল লেন থাকলে নিত্যযাত্রীরা কী করত?', en: 'What would commuters do if there were safe cycle lanes?' }, sampleAnswerIt: 'Lascerebbero l’auto in garage.', keywords: ['auto', 'garage'] },
    ],
    practice: {
      retellPrompt: { bn: 'আপনার শহরে যাতায়াত উন্নত করতে ৩টি কাল্পনিক প্রস্তাব (Se...) লিখুন।', en: 'Write 3 hypothetical proposals (Se...) to improve transport in your city.' },
      completeMissing: { promptIt: 'Se ___ un finanziamento, apriremmo una cooperativa.', hint: { bn: 'ricevere ক্রিয়ার ইমপারফেক্ট সাবজাংক্টিভ রূপ ricevessimo বসান', en: 'ricevessimo' }, sampleIt: 'Se ricevessimo un finanziamento, apriremmo una cooperativa.' },
      buildSimilar: { patternIt: 'Se il bus fosse puntuale, lo prenderei ogni giorno.', prompt: { bn: 'Se ci fossero... দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence starting with Se ci fossero...' }, sampleIt: 'Se ci fossero più treni serali, torneremmo più tardi.' },
      altEndingPrompt: { bn: 'প্রকৌশলীরা অনুদান পেলে কী করবেন তা লিখুন।', en: 'Write what happens when the engineers receive the grant.' },
    },
  }),

  buildStory({
    id: 'st-b1-20', level: 'B1', titleIt: 'L’ingorgo in tangenziale e il salvataggio dei file',
    title: { bn: 'রিং রোডের যানজট ও ফাইলের ব্যাকআপ', en: 'The ring-road traffic jam and the file backup' },
    topic: { bn: 'অতীতের অবাস্তব শর্ত (৩য় প্রকার)', en: 'Past counterfactuals (3rd conditional)' },
    grammarIds: ['periodo-ipotetico-3'],
    vocabKeys: ["w:B1:l'ingorgo", 'w:B1:il file'],
    paragraphs: [
      { it: 'Ieri mattina dovevamo presentare il progetto in provincia alle nove, ma siamo rimasti bloccati per un’ora a causa di un enorme ingorgo sulla tangenziale.', tr: { bn: 'গতকাল সকালে আমাদের নয়টায় প্রাদেশিক দপ্তরে প্রকল্পটি উপস্থাপন করার কথা ছিল, কিন্তু রিং রোডে বিশাল যানজটের কারণে আমরা এক ঘণ্টা আটকে ছিলাম।', en: 'Yesterday morning we were supposed to present the project at the provincial office at nine, but we got stuck for an hour due to a huge traffic jam on the ring road.' } },
      { it: 'Se avessimo ascoltato il notiziario sul traffico prima di partire, avremmo preso il treno regionale e saremmo arrivati in perfetto orario.', tr: { bn: 'রওনা দেওয়ার আগে আমরা যদি ট্রাফিক সংবাদ শুনতাম, তবে আঞ্চলিক ট্রেন ধরতাম এবং একদম সময়মতো পৌঁছাতাম।', en: 'If we had listened to the traffic news before leaving, we would have taken the regional train and arrived right on time.' } },
      { it: 'Per fortuna la sera prima avevo salvato ogni file nella nuvola digitale: se non l’avessi fatto, non avrei potuto inviare la presentazione dal telefono ai colleghi già presenti in sala!', tr: { bn: 'ভাগ্যক্রমে আগের রাতে আমি প্রতিটি ফাইল ক্লাউডে সেভ করে রেখেছিলাম: তা না করলে মিলনায়তনে উপস্থিত সহকর্মীদের কাছে ফোন থেকে উপস্থাপনাটি পাঠাতে পারতাম না!', en: 'Fortunately the night before I had saved every file to the cloud: if I had not done so, I could not have sent the presentation from my phone to the colleagues already in the hall!' } },
    ],
    wordGlossary: [
      { word: 'ingorgo', base: "l'ingorgo", tr: { bn: 'তীব্র যানজট', en: 'traffic jam / gridlock' }, pos: 'noun' },
      { word: 'file', base: 'il file', tr: { bn: 'ফাইল', en: 'file' }, pos: 'noun' },
      { word: 'tangenziale', base: 'la tangenziale', tr: { bn: 'শহরের বাইপাস / রিং রোড', en: 'ring road / bypass' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Se avessimo ascoltato il notiziario, saremmo arrivati in orario.', ruleTitle: { bn: 'Periodo ipotetico dell’irrealtà (৩য় প্রকার)', en: '3rd conditional (past counterfactual)' }, explanation: { bn: 'অতীতে যা ঘটেনি: Se + congiuntivo trapassato (avessimo ascoltato) এবং ফলাফলে condizionale passato (avremmo preso, saremmo arrivati)।', en: 'Se + pluperfect subjunctive → past conditional.' }, grammarId: 'periodo-ipotetico-3' },
    ],
    mcq: [
      { id: 'stb1-20-q1', prompt: { bn: 'বক্তা কীভাবে সহকর্মীদের কাছে উপস্থাপনাটি পাঠাতে পেরেছিলেন?', en: 'How was the narrator able to send the presentation to colleagues?' }, options: ['পেনড্রাইভে করে', 'ক্লাউডে ফাইল সেভ করা থাকায় ফোন থেকে', 'ফ্যাক্স করে', 'কুরিয়ারে'], answer: 1, explanation: { bn: 'আগের রাতে ক্লাউডে প্রতিটি ফাইল সেভ করে রেখেছিলেন।', en: 'He had saved every file to the cloud the night before.' } },
    ],
    trueFalse: [
      { id: 'stb1-20-tf1', statementIt: 'Sono andati in provincia con il treno regionale.', statement: { bn: 'তারা আঞ্চলিক ট্রেনে প্রাদেশিক দপ্তরে গিয়েছিল।', en: 'They went to the provincial office by regional train.' }, answer: false, explanation: { bn: 'তারা গাড়িতে গিয়ে রিং রোডে যানজটে আটকে পড়েছিল।', en: 'They drove and got stuck on the ring road.' } },
    ],
    fillBlank: [
      { id: 'stb1-20-fb1', sentence: 'Se ___ partiti prima, non avremmo trovato coda.', options: ['saremmo', 'fossimo', 'eravamo', 'siamo'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: Se + fossimo partiti — Se এর পরে পুরাঘটিত সাবজাংক্টিভ (congiuntivo trapassato) বসে fossimo।', en: 'Se takes pluperfect subjunctive fossimo.' } },
    ],
    shortAnswer: [
      { id: 'stb1-20-sa1', question: { bn: 'তারা কোথায় এক ঘণ্টা আটকে ছিল?', en: 'Where were they stuck for an hour?' }, sampleAnswerIt: 'Sono rimasti bloccati in un ingorgo sulla tangenziale.', keywords: ['ingorgo', 'tangenziale'] },
    ],
    practice: {
      retellPrompt: { bn: 'যানজট ও ক্লাউড ব্যাকআপের ঘটনাটি ৩ বাক্যে লিখুন।', en: 'Retell the traffic jam and cloud backup story in 3 sentences.' },
      completeMissing: { promptIt: 'Se mi ___ chiamato, ti avrei aspettato.', hint: { bn: 'avere ক্রিয়ার ইমপারফেক্ট সাবজাংক্টিভ রূপ avessi বসান', en: 'avessi' }, sampleIt: 'Se mi avessi chiamato, ti avrei aspettato.' },
      buildSimilar: { patternIt: 'Se avessimo preso il treno, saremmo arrivati in orario.', prompt: { bn: 'Se avessi... দিয়ে অতীতের একটি শর্তমূলক বাক্য লিখুন।', en: 'Write a 3rd conditional sentence starting with Se avessi...' }, sampleIt: 'Se avessi controllato il meteo, avrei portato l’ombrello.' },
      altEndingPrompt: { bn: 'তারা মিলনায়তনে পৌঁছানোর পর কী ঘটল লিখুন।', en: 'Write what happened when they finally reached the hall.' },
    },
  }),

  buildStory({
    id: 'st-b1-21', level: 'B1', titleIt: 'Pronti per il trasloco e la tesi',
    title: { bn: 'বাসা বদল ও থিসিসের প্রস্তুতি', en: 'Ready for moving house and the thesis' },
    topic: { bn: 'ভবিষ্যৎ পরিকল্পনা ও futuro anteriore', en: 'Future plans & future perfect' },
    grammarIds: ['futuro-anteriore'],
    vocabKeys: ["w:B1:il contratto d'affitto", 'w:B1:il trasloco', 'w:B1:il relatore'],
    paragraphs: [
      { it: 'Questo mese è pieno di scadenze importanti per me e mia sorella. Domani mattina firmeremo il nuovo contratto d’affitto; appena lo avremo registrato, fisseremo la data per il trasloco.', tr: { bn: 'এই মাসটি আমার ও আমার বোনের জন্য গুরুত্বপূর্ণ সময়সীমায় ভরা। আগামীকাল সকালে আমরা নতুন ভাড়ার চুক্তিতে সই করব; সেটি নিবন্ধন করা মাত্রই বাসা বদলের তারিখ নির্ধারণ করব।', en: 'This month is full of important deadlines for my sister and me. Tomorrow morning we will sign the new rental contract; as soon as we have registered it, we will set the date for moving house.' } },
      { it: 'Nel frattempo sto completando l’ultimo capitolo della tesi. Quando il relatore avrà corretto la bozza finale, potrò caricare il documento sul portale dell’università.', tr: { bn: 'ইতিমধ্যে আমি থিসিসের শেষ অধ্যায়টি শেষ করছি। তত্ত্বাবধায়ক চূড়ান্ত খসড়াটি সংশোধন করার পর আমি বিশ্ববিদ্যালয়ের পোর্টালে নথিটি আপলোড করতে পারব।', en: 'Meanwhile I am completing the final chapter of my thesis. When my supervisor has corrected the final draft, I will be able to upload the document to the university portal.' } },
      { it: 'Solo dopo che avremo sistemato tutti gli scatoloni nella casa nuova, organizzeremo una grande cena per festeggiare insieme.', tr: { bn: 'কেবল নতুন বাসায় সব কার্টন গুছিয়ে রাখার পরই আমরা একসাথে উদযাপন করতে বড় নৈশভোজের আয়োজন করব।', en: 'Only after we have unpacked all the boxes in the new house will we organise a big dinner to celebrate together.' } },
    ],
    wordGlossary: [
      { word: 'contratto d’affitto', base: "il contratto d'affitto", tr: { bn: 'ভাড়ার চুক্তি', en: 'rental contract / lease' }, pos: 'noun' },
      { word: 'trasloco', base: 'il trasloco', tr: { bn: 'বাসা বদল', en: 'moving house' }, pos: 'noun' },
      { word: 'relatore', base: 'il relatore', tr: { bn: 'থিসিস তত্ত্বাবধায়ক / বক্তা', en: 'thesis supervisor' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Quando il relatore avrà corretto la bozza, potrò caricare il documento.', ruleTitle: { bn: 'সময়সূচক খণ্ডবাক্যে পুরাঘটিত ভবিষ্যৎ কাল (futuro anteriore)', en: 'Future perfect in time clauses' }, explanation: { bn: 'ভবিষ্যতে একটি কাজ সম্পন্ন হওয়ার পর আরেকটি কাজ ঘটবে বোঝাতে avrà corretto ও avremo sistemato বসেছে।', en: 'The action completed first in the future takes futuro anteriore.' }, grammarId: 'futuro-anteriore' },
    ],
    mcq: [
      { id: 'stb1-21-q1', prompt: { bn: 'কখন বিশ্ববিদ্যালয়ের পোর্টালে থিসিস আপলোড করা যাবে?', en: 'When can the thesis be uploaded to the university portal?' }, options: ['আজ রাতেই', 'তত্ত্বাবধায়ক চূড়ান্ত খসড়া সংশোধন করার পর', 'বাসা বদলের আগে', 'আগামী বছর'], answer: 1, explanation: { bn: 'সঠিক উত্তর: তত্ত্বাবধায়ক চূড়ান্ত খসড়া সংশোধন করার পর — পাঠ্যাংশে বলা হয়েছে: «ইতিমধ্যে আমি থিসিসের শেষ অধ্যায়টি শেষ করছি। তত্ত্বাবধায়ক চূড়ান্ত খসড়াটি সংশোধন করার পর আমি বিশ্ববিদ্যালয়ের পোর্টালে নথিটি আপলোড করতে পারব।» (Quando il relatore avrà corretto la bozza finale)।', en: 'After the supervisor has corrected the final draft.' } },
    ],
    trueFalse: [
      { id: 'stb1-21-tf1', statementIt: 'Hanno già fatto il trasloco la settimana scorsa.', statement: { bn: 'তারা গত সপ্তাহেই বাসা বদল করে ফেলেছে।', en: 'They already moved house last week.' }, answer: false, explanation: { bn: 'চুক্তি নিবন্ধনের পর তারিখ নির্ধারণ করবে।', en: 'They will set the moving date after registering the lease.' } },
    ],
    fillBlank: [
      { id: 'stb1-21-fb1', sentence: 'Appena ___ finito il trasloco, vi inviteremo a cena.', options: ['abbiamo', 'avremo', 'avremmo', 'avevamo'], answer: 1, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «Appena + futuro anteriore (avremo finito)» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'avremo finito.' } },
    ],
    shortAnswer: [
      { id: 'stb1-21-sa1', question: { bn: 'আগামীকাল সকালে তারা কিসে সই করবে?', en: 'What will they sign tomorrow morning?' }, sampleAnswerIt: 'Firmeranno il nuovo contratto d’affitto.', keywords: ['contratto', 'affitto'] },
    ],
    practice: {
      retellPrompt: { bn: 'বাসা বদল ও থিসিসের ধাপগুলো futuro anteriore ব্যবহার করে ৩ বাক্যে লিখুন।', en: 'Describe the upcoming steps for the move and thesis in 3 sentences.' },
      completeMissing: { promptIt: 'Quando ___ arrivato a Roma, ti manderò un messaggio.', hint: { bn: 'essere ভবিষ্যৎ: sarò', en: 'sarò' }, sampleIt: 'Quando sarò arrivato a Roma, ti manderò un messaggio.' },
      buildSimilar: { patternIt: 'Appena avrò ricevuto la conferma, prenoterò il volo.', prompt: { bn: 'Appena avrò... দিয়ে একটি ভবিষ্যৎ পরিকল্পনার বাক্য লিখুন।', en: 'Write a sentence starting with Appena avrò...' }, sampleIt: 'Appena avrò superato l’ultimo esame, farò un viaggio.' },
      altEndingPrompt: { bn: 'নতুন বাসার নৈশভোজে কারা আসবে তা লিখুন।', en: 'Write about the celebration dinner in the new flat.' },
    },
  }),

  buildStory({
    id: 'st-b1-22', level: 'B1', titleIt: 'Perché Nadia è così felice?',
    title: { bn: 'নাদিয়া আজ এত খুশি কেন?', en: 'Why is Nadia so happy?' },
    topic: { bn: 'পরীক্ষার সেশন ও অনুমানের ভবিষ্যৎ (futuro di probabilità)', en: 'Exam sessions & future of probability' },
    grammarIds: ['futuro-probabilita'],
    vocabKeys: ["w:B1:l'appello", 'w:B1:la deviazione'],
    paragraphs: [
      { it: 'Stamattina ho incontrato Nadia nel cortile della facoltà: aveva un grande sorriso e stringeva in mano il libretto universitario. Avrà sicuramente superato l’ultimo appello di diritto del lavoro!', tr: { bn: 'আজ সকালে অনুষদের উঠানে নাদিয়ার সাথে দেখা হলো: তার মুখে চওড়া হাসি ছিল এবং হাতে বিশ্ববিদ্যালয়ের বুকলেট ধরা ছিল। সে নিশ্চয়ই শ্রম আইনের শেষ পরীক্ষার সেশনে উত্তীর্ণ হয়েছে!', en: 'This morning I met Nadia in the faculty courtyard: she had a big smile and was holding her university record book. She must surely have passed the last sitting of the labour law exam!' } },
      { it: 'Il suo amico Lorenzo invece non si vede ancora. Che ore saranno? Saranno quasi le undici; probabilmente il suo autobus avrà trovato coda per la deviazione vicino al ponte.', tr: { bn: 'অন্যদিকে তার বন্ধু লরেনৎসোকে এখনো দেখা যাচ্ছে না। কয়টা বাজে এখন? হয়ত প্রায় এগারোটা বাজে; সম্ভবত সেতুর কাছে রাস্তা ঘুরিয়ে দেওয়ায় তার বাস জ্যামে পড়েছে।', en: 'Her friend Lorenzo, however, is still nowhere to be seen. What time could it be? It must be almost eleven; his bus has probably hit traffic because of the diversion near the bridge.' } },
      { it: 'Ecco, squilla il telefono di Nadia: sarà proprio Lorenzo che chiama per congratularsi con lei.', tr: { bn: 'এই তো, নাদিয়ার ফোন বাজছে: নিশ্চয়ই লরেনৎসোই তাকে অভিনন্দন জানাতে ফোন করছে।', en: 'There, Nadia’s phone is ringing: it must be Lorenzo calling to congratulate her.' } },
    ],
    wordGlossary: [
      { word: 'appello', base: "l'appello", tr: { bn: 'পরীক্ষার সেশন / ডাক', en: 'exam sitting / roll call' }, pos: 'noun' },
      { word: 'deviazione', base: 'la deviazione', tr: { bn: 'বিকল্প পথ / ডাইভারশন', en: 'diversion / detour' }, pos: 'noun' },
      { word: 'congratularsi', base: 'congratularsi', tr: { bn: 'অভিনন্দন জানানো', en: 'to congratulate' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Avrà superato l’appello! Sarà Lorenzo che chiama.', ruleTitle: { bn: 'Futuro di probabilità (বর্তমান ও অতীত অনুমান)', en: 'Future of probability' }, explanation: { bn: 'বর্তমানের অনুমানে futuro semplice (Saranno le undici, sarà Lorenzo) এবং অতীত ঘটনার অনুমানে futuro anteriore (Avrà superato, avrà trovato) বসেছে।', en: 'Simple future guesses about the present; future perfect guesses about a past event.' }, grammarId: 'futuro-probabilita' },
    ],
    mcq: [
      { id: 'stb1-22-q1', prompt: { bn: 'নাদিয়া কোন বিষয়ের পরীক্ষায় পাস করেছে বলে ধারণা করা হচ্ছে?', en: 'Which exam is Nadia thought to have passed?' }, options: ['ইতিহাস', 'শ্রম আইন (diritto del lavoro)', 'গণিত', 'রসায়ন'], answer: 1, explanation: { bn: 'সঠিক উত্তর: শ্রম আইন (diritto del lavoro) — পাঠ্যাংশে বলা হয়েছে: «আজ সকালে অনুষদের উঠানে নাদিয়ার সাথে দেখা হলো: তার মুখে চওড়া হাসি ছিল এবং হাতে বিশ্ববিদ্যালয়ের বুকলেট ধরা ছিল। সে নিশ্চয়ই শ্রম আইনের শেষ পরীক্ষার সেশনে উত্তীর্ণ হয়েছে!» (l’ultimo appello di diritto del lavoro)।', en: 'Labour law.' } },
    ],
    trueFalse: [
      { id: 'stb1-22-tf1', statementIt: 'Lorenzo era già nel cortile alle nove.', statement: { bn: 'লরেনৎসো নয়টাতেই উঠানে উপস্থিত ছিল।', en: 'Lorenzo was already in the courtyard at nine.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «অন্যদিকে তার বন্ধু লরেনৎসোকে এখনো দেখা যাচ্ছে না। কয়টা বাজে এখন? হয়ত প্রায় এগারোটা বাজে; সম্ভবত সেতুর কাছে রাস্তা ঘুরিয়ে দেওয়ায় তার বাস জ্যামে পড়েছে।» (non si vede ancora)।', en: 'He had not arrived yet.' } },
    ],
    fillBlank: [
      { id: 'stb1-22-fb1', sentence: 'Marco ha gli occhi stanchi: ___ studiato fino a tardi.', options: ['avrà', 'sarà', 'avrebbe', 'aveva'], answer: 0, explanation: { bn: 'studiare avere নেয় → avrà studiato।', en: 'avrà studiato.' } },
    ],
    shortAnswer: [
      { id: 'stb1-22-sa1', question: { bn: 'লরেনৎসোর বাস কেন জ্যামে পড়েছে বলে অনুমান করা হচ্ছে?', en: 'Why is Lorenzo’s bus thought to have hit traffic?' }, sampleAnswerIt: 'Avrà trovato coda per la deviazione vicino al ponte.', keywords: ['deviazione', 'ponte'] },
    ],
    practice: {
      retellPrompt: { bn: 'নাদিয়া ও লরেনৎসোকে নিয়ে ৩টি অনুমানমূলক বাক্য লিখুন।', en: 'Write 3 sentences using the future of probability about Nadia and Lorenzo.' },
      completeMissing: { promptIt: 'Suonano alla porta: ___ il corriere con il pacco.', hint: { bn: 'essere ভবিষ্যৎ: sarà', en: 'sarà' }, sampleIt: 'Suonano alla porta: sarà il corriere con il pacco.' },
      buildSimilar: { patternIt: 'Non risponde: avrà lasciato il telefono in borsa.', prompt: { bn: 'Avrà... বা Sarà... দিয়ে একটি অনুমানের বাক্য লিখুন।', en: 'Write a conjecture using Avrà... or Sarà...' }, sampleIt: 'I negozi sono chiusi: saranno ormai le otto.' },
      altEndingPrompt: { bn: 'লরেনৎসো ফোনে নাদিয়াকে কী বলল তা লিখুন।', en: 'Write what Lorenzo said on the phone.' },
    },
  }),

  buildStory({
    id: 'st-b1-23', level: 'B1', titleIt: 'Firenze e la nascita del Rinascimento',
    title: { bn: 'ফ্লোরেন্স ও রেনেসাঁসের জন্ম', en: 'Florence and the birth of the Renaissance' },
    topic: { bn: 'ইতালির শিল্প-ইতিহাস ও passato remoto', en: 'Italian art history & passato remoto' },
    grammarIds: ['passato-remoto-b1'],
    vocabKeys: ['w:B1:il Rinascimento', "w:B1:l'architettura", 'w:B1:lo scrittore'],
    paragraphs: [
      { it: 'Nel Quattrocento Firenze divenne il cuore pulsante del Rinascimento italiano. In pochi decenni pittori, scultori e studiosi rinnovarono profondamente la cultura europea.', tr: { bn: 'পঞ্চদশ শতাব্দীতে ফ্লোরেন্স ইতালীয় রেনেসাঁসের প্রাণকেন্দ্রে পরিণত হয়। কয়েক দশকের মধ্যে চিত্রশিল্পী, ভাস্কর ও পণ্ডিতেরা ইউরোপীয় সংস্কৃতিকে গভীরভাবে নবায়ন করেন।', en: 'In the fifteenth century Florence became the beating heart of the Italian Renaissance. Within a few decades painters, sculptors, and scholars deeply renewed European culture.' } },
      { it: 'Filippo Brunelleschi progettò la straordinaria cupola del Duomo, che trasformò per sempre la storia dell’architettura moderna.', tr: { bn: 'ফিলিপ্পো ব্রুনেলেস্কি দুওমোর অসাধারণ গম্বুজটির নকশা করেছিলেন, যা আধুনিক স্থাপত্যের ইতিহাস চিরতরে বদলে দিয়েছিল।', en: 'Filippo Brunelleschi designed the extraordinary dome of the Cathedral, which transformed the history of modern architecture forever.' } },
      { it: 'Già nel secolo precedente, ogni grande scrittore toscano — da Dante a Petrarca e Boccaccio — diede un contributo decisivo alla nascita della lingua italiana comune.', tr: { bn: 'এর আগের শতাব্দীতেই দান্তে থেকে পেত্রার্কা ও বোক্কাচ্চো পর্যন্ত প্রতিটি মহান তোস্কান লেখক সাধারণ ইতালিয়ান ভাষার জন্মে নির্ধারক অবদান রেখেছিলেন।', en: 'Already in the preceding century, every great Tuscan writer — from Dante to Petrarch and Boccaccio — made a decisive contribution to the birth of the common Italian language.' } },
    ],
    wordGlossary: [
      { word: 'Rinascimento', base: 'il Rinascimento', tr: { bn: 'রেনেসাঁস / নবজাগরণ', en: 'Renaissance' }, pos: 'noun' },
      { word: 'architettura', base: "l'architettura", tr: { bn: 'স্থাপত্যবিদ্যা', en: 'architecture' }, pos: 'noun' },
      { word: 'scrittore', base: 'lo scrittore', tr: { bn: 'লেখক', en: 'writer / author' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Firenze divenne il cuore del Rinascimento; Brunelleschi progettò la cupola.', ruleTitle: { bn: 'ঐতিহাসিক অতীত কাল: Passato remoto (divenne, rinnovarono, progettò, diede)', en: 'Historical past (passato remoto)' }, explanation: { bn: 'ঐতিহাসিক ঘটনা বর্ণনায় ৩য় পুরুষ passato remoto রূপ ব্যবহৃত হয়েছে: divenire → divenne, progettare → progettò, dare → diede।', en: 'Historical narratives use passato remoto: divenne, progettò, diede.' }, grammarId: 'passato-remoto-b1' },
    ],
    mcq: [
      { id: 'stb1-23-q1', prompt: { bn: 'দুওমোর বিখ্যাত গম্বুজটির নকশা কে করেছিলেন?', en: 'Who designed the famous dome of the Florence Cathedral?' }, options: ['দান্তে', 'ব্রুনেলেস্কি', 'পেত্রার্কা', 'গ্যালিলিও'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ব্রুনেলেস্কি — পাঠ্যাংশে বলা হয়েছে: «ফিলিপ্পো ব্রুনেলেস্কি দুওমোর অসাধারণ গম্বুজটির নকশা করেছিলেন, যা আধুনিক স্থাপত্যের ইতিহাস চিরতরে বদলে দিয়েছিল।» (Filippo Brunelleschi progettò la cupola)।', en: 'Filippo Brunelleschi.' } },
    ],
    trueFalse: [
      { id: 'stb1-23-tf1', statementIt: 'Gli scrittori toscani diedero un contributo decisivo alla lingua italiana.', statement: { bn: 'তোস্কান লেখকেরা ইতালিয়ান ভাষায় নির্ধারক অবদান রেখেছিলেন।', en: 'Tuscan writers made a decisive contribution to the Italian language.' }, answer: true, explanation: { bn: 'বাক্যটি সত্য — গল্পের তথ্যানুযায়ী: «এর আগের শতাব্দীতেই দান্তে থেকে পেত্রার্কা ও বোক্কাচ্চো পর্যন্ত প্রতিটি মহান তোস্কান লেখক সাধারণ ইতালিয়ান ভাষার জন্মে নির্ধারক অবদান রেখেছিলেন।» (diede un contributo decisivo)।', en: 'True.' } },
    ],
    fillBlank: [
      { id: 'stb1-23-fb1', sentence: 'Nel Quattrocento Firenze ___ il centro dell’arte.', options: ['divenne', 'diventa', 'diventerà', 'divenisse'], answer: 0, explanation: { bn: 'ঐতিহাসিক অতীত: divenne।', en: 'Passato remoto divenne.' } },
    ],
    shortAnswer: [
      { id: 'stb1-23-sa1', question: { bn: 'ব্রুনেলেস্কির গম্বুজ কিসের ইতিহাস বদলে দিয়েছিল?', en: 'What did Brunelleschi’s dome transform?' }, sampleAnswerIt: 'Trasformò per sempre la storia dell’architettura moderna.', keywords: ['architettura', 'storia'] },
    ],
    practice: {
      retellPrompt: { bn: 'রেনেসাঁস ও ফ্লোরেন্স সম্পর্কে ৩ বাক্যে লিখুন।', en: 'Write 3 sentences about Florence and the Renaissance.' },
      completeMissing: { promptIt: 'Dante ___ la Divina Commedia nel Trecento.', hint: { bn: 'scrivere ক্রিয়ার ঐতিহাসিক অতীত (passato remoto) রূপ scrisse বসান', en: 'scrisse' }, sampleIt: 'Dante scrisse la Divina Commedia nel Trecento.' },
      buildSimilar: { patternIt: 'Brunelleschi progettò la cupola del Duomo.', prompt: { bn: 'ইতিহাসের কোনো ঘটনা passato remoto বা passato prossimo দিয়ে লিখুন।', en: 'Write a sentence about a historical figure or monument.' }, sampleIt: 'Galileo osservò le stelle con il cannocchiale.' },
      altEndingPrompt: { bn: 'আজ কেন পর্যটকেরা ফ্লোরেন্সে যান তা লিখুন।', en: 'Write why visitors still admire Florence today.' },
    },
  }),

  buildStory({
    id: 'st-b1-24', level: 'B1', titleIt: 'I certificati dell’anagrafe e la raccomandata',
    title: { bn: 'নাগরিক নিবন্ধন সনদ ও রেজিস্টার্ড চিঠি', en: 'Registry certificates and the registered letter' },
    topic: { bn: 'পৌর দপ্তর ও অতীতে যৌগিক সর্বনাম', en: 'Municipal office & past combined pronouns' },
    grammarIds: ['pronomi-doppi-passato'],
    vocabKeys: ["w:B1:l'anagrafe", 'w:B1:la raccomandata', 'w:B1:il certificato'],
    paragraphs: [
      { it: 'Per completare la pratica del mutuo, la banca ci aveva chiesto lo stato di famiglia e il certificato di residenza. Ieri mattina siamo andati all’anagrafe e l’impiegato ce li ha rilasciati in dieci minuti.', tr: { bn: 'গৃহঋণের ফাইল সম্পন্ন করার জন্য ব্যাংক আমাদের কাছে পারিবারিক অবস্থার সনদ ও বসবাসের সনদ চেয়েছিল। গতকাল সকালে আমরা নাগরিক নিবন্ধন অফিসে গিয়েছিলাম এবং কর্মচারী দশ মিনিটে আমাদের সেগুলো প্রদান করেছেন।', en: 'To complete the mortgage application, the bank had asked us for the family status and residence certificate. Yesterday morning we went to the registry office and the clerk issued them to us in ten minutes.' } },
      { it: 'Mancava soltanto la copia della perizia tecnica: il geometra aveva promesso di mandarla per posta e infatti il postino me l’ha consegnata poco fa con una raccomandata.', tr: { bn: 'বাকি ছিল কেবল কারিগরি মূল্যায়নের কপিটি: জরিপকারী ডাকযোগে তা পাঠানোর কথা দিয়েছিলেন এবং সত্যিই কিছুক্ষণ আগে ডাকপিয়ন রেজিস্টার্ড চিঠিতে আমাকে সেটি পৌঁছে দিয়েছেন।', en: 'Only the copy of the technical valuation was missing: the surveyor had promised to send it by post and indeed the postman delivered it to me just now by registered mail.' } },
      { it: 'Avevo preparato anche due fotocopie dei documenti d’identità e gliele ho lasciate direttamente sulla scrivania del direttore.', tr: { bn: 'আমি পরিচয়পত্রের দুটি ফটোকপিও প্রস্তুত করে রেখেছিলাম এবং সেগুলো সরাসরি ব্যাংক পরিচালকের ডেস্কে রেখে এসেছি।', en: 'I had also prepared two photocopies of our ID documents and left them directly on the bank manager’s desk.' } },
    ],
    wordGlossary: [
      { word: 'anagrafe', base: "l'anagrafe", tr: { bn: 'নাগরিক নিবন্ধন দপ্তর', en: 'civil registry office' }, pos: 'noun' },
      { word: 'raccomandata', base: 'la raccomandata', tr: { bn: 'রেজিস্টার্ড চিঠি', en: 'registered letter' }, pos: 'noun' },
      { word: 'certificato', base: 'il certificato', tr: { bn: 'সনদপত্র', en: 'certificate' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'L’impiegato ce li ha rilasciati; il postino me l’ha consegnata.', ruleTitle: { bn: 'যুক্ত সর্বনামের সাথে অতীত পার্টিসিপলের লিঙ্গ-বচন সঙ্গতি', en: 'Combined pronouns with past participle agreement' }, explanation: { bn: 'ce li (পুং বহুবচন) → rilasciati; me l’ (la copia, স্ত্রী একবচন) → consegnata; gliele (স্ত্রী বহুবচন) → lasciate।', en: 'Participle agrees in gender and number with the direct object pronoun.' }, grammarId: 'pronomi-doppi-passato' },
    ],
    mcq: [
      { id: 'stb1-24-q1', prompt: { bn: 'ডাকপিয়ন রেজিস্টার্ড চিঠিতে কী পৌঁছে দিয়েছেন?', en: 'What did the postman deliver by registered mail?' }, options: ['ব্যাংক কার্ড', 'কারিগরি মূল্যায়নের কপি', 'বিদ্যুৎ বিল', 'ট্রেনের টিকিট'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কারিগরি মূল্যায়নের কপি — পাঠ্যাংশে বলা হয়েছে: «বাকি ছিল কেবল কারিগরি মূল্যায়নের কপিটি: জরিপকারী ডাকযোগে তা পাঠানোর কথা দিয়েছিলেন এবং সত্যিই কিছুক্ষণ আগে ডাকপিয়ন রেজিস্টার্ড চিঠিতে আমাকে সেটি পৌঁছে দিয়েছেন।» (la copia della perizia tecnica)।', en: 'The copy of the technical valuation.' } },
    ],
    trueFalse: [
      { id: 'stb1-24-tf1', statementIt: 'All’anagrafe hanno dovuto aspettare tre giorni per i certificati.', statement: { bn: 'সনদের জন্য নিবন্ধন অফিসে তাদের তিন দিন অপেক্ষা করতে হয়েছে।', en: 'At the registry office they had to wait three days for the certificates.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «গৃহঋণের ফাইল সম্পন্ন করার জন্য ব্যাংক আমাদের কাছে পারিবারিক অবস্থার সনদ ও বসবাসের সনদ চেয়েছিল। গতকাল সকালে আমরা নাগরিক নিবন্ধন অফিসে গিয়েছিলাম এবং কর্মচারী দশ মিনিটে আমাদের সেগুলো প্রদান করেছেন।» (ce li ha rilasciati in dieci minuti)।', en: 'Issued in ten minutes.' } },
    ],
    fillBlank: [
      { id: 'stb1-24-fb1', sentence: 'Le fotocopie? ___ ho lasciate al direttore.', options: ['Glieli', 'Gliele', 'Gli le', 'Ce lo'], answer: 1, explanation: { bn: 'ব্যাকরণগত সংযোজন: gli + le (le fotocopie) = gliele নিয়ম অনুসারে সঠিক রূপটি গঠিত হয়েছে।', en: 'gli + le = gliele.' } },
    ],
    shortAnswer: [
      { id: 'stb1-24-sa1', question: { bn: 'ব্যাংক তাদের কাছে কোন দুটি সনদ চেয়েছিল?', en: 'Which two certificates had the bank asked them for?' }, sampleAnswerIt: 'Aveva chiesto lo stato di famiglia e il certificato di residenza.', keywords: ['famiglia', 'residenza', 'certificato'] },
    ],
    practice: {
      retellPrompt: { bn: 'ব্যাংকের নথি সংগ্রহের ঘটনাটি ৩ বাক্যে লিখুন।', en: 'Retell how the documents were collected in 3 sentences.' },
      completeMissing: { promptIt: 'La raccomandata? Me l’hanno ___ stamattina.', hint: { bn: 'consegnare স্ত্রী একবচন: consegnata', en: 'consegnata' }, sampleIt: 'La raccomandata? Me l’hanno consegnata stamattina.' },
      buildSimilar: { patternIt: 'I certificati? Ce li hanno rilasciati ieri.', prompt: { bn: 'me l’ha বা ce li hanno দিয়ে একটি অতীত বাক্য লিখুন।', en: 'Write a past-tense sentence with me l’ha or ce li hanno.' }, sampleIt: 'Le chiavi nuove? Me le ha date il proprietario.' },
      altEndingPrompt: { bn: 'সব নথি পাওয়ার পর ব্যাংক পরিচালক কী বললেন লিখুন।', en: 'Write what the bank manager said after receiving all documents.' },
    },
  }),

  buildStory({
    id: 'st-b1-25', level: 'B1', titleIt: 'Vita da pendolare sull’alta velocità',
    title: { bn: 'উচ্চগতির ট্রেনে নিত্যযাত্রীর জীবন', en: 'Commuter life on the high-speed train' },
    topic: { bn: 'যাতায়াত ও ci/ne বাগধারা', en: 'Commuting & ci/ne idioms' },
    grammarIds: ['ci-ne-idiomatici'],
    vocabKeys: ["w:B1:l'alta velocità", 'w:B1:il pendolare', 'w:B1:la fatica'],
    paragraphs: [
      { it: 'Da due anni vivo a Reggio Emilia ma lavoro in uno studio di architettura a Milano. Ogni mattina prendo il treno dell’alta velocità: con questa linea ci si mette appena quaranta minuti da una stazione all’altra.', tr: { bn: 'দুই বছর ধরে আমি রেজ্জো এমিলিয়ায় থাকি কিন্তু মিলানের একটি স্থাপত্য স্টুডিওতে কাজ করি। প্রতিদিন সকালে আমি উচ্চগতির ট্রেন ধরি: এই লাইনে এক স্টেশন থেকে অন্য স্টেশনে যেতে মাত্র চল্লিশ মিনিট লাগে।', en: 'For two years I have lived in Reggio Emilia while working at an architecture studio in Milan. Every morning I take the high-speed train: on this line it takes barely forty minutes from station to station.' } },
      { it: 'Certo, fare il pendolare richiede organizzazione e a volte la sera si sente la fatica, ma con l’abbonamento annuale ne vale davvero la pena.', tr: { bn: 'অবশ্যই নিত্যযাত্রী হতে হলে গোছানো থাকতে হয় এবং মাঝে মাঝে সন্ধ্যায় ক্লান্তি লাগে, কিন্তু বার্ষিক পাসের কারণে এটি সত্যিই সার্থক।', en: 'Of course, commuting requires organisation and sometimes in the evening you feel the tiredness, but with an annual pass it is really worth it.' } },
      { it: 'In treno ci tengo a sfruttare il tempo leggendo o preparando i disegni tecnici, così quando arrivo in studio sono già pronto per la giornata.', tr: { bn: 'ট্রেনে পড়ে বা কারিগরি নকশা প্রস্তুত করে সময়টা কাজে লাগাতে আমি খুব গুরুত্ব দিই, ফলে স্টুডিওতে পৌঁছেই দিনের কাজের জন্য প্রস্তুত থাকি।', en: 'On the train I make a point of using the time to read or prepare technical drawings, so when I reach the studio I am already ready for the day.' } },
    ],
    wordGlossary: [
      { word: 'alta velocità', base: "l'alta velocità", tr: { bn: 'উচ্চগতির রেল সেবা', en: 'high-speed rail' }, pos: 'noun' },
      { word: 'pendolare', base: 'il pendolare', tr: { bn: 'নিত্যযাত্রী', en: 'commuter' }, pos: 'noun' },
      { word: 'fatica', base: 'la fatica', tr: { bn: 'পরিশ্রম / ক্লান্তি', en: 'effort / fatigue' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ci si mette quaranta minuti… ne vale davvero la pena.', ruleTitle: { bn: 'ci এবং ne-যুক্ত বাগধারা ক্রিয়া (metterci, tenerci, valerne la pena)', en: 'Idiomatic verbs with ci and ne' }, explanation: { bn: 'সময় লাগাতে metterci (ci si mette), সার্থক হওয়া বোঝাতে valerne la pena এবং গুরুত্ব দিতে tenerci (ci tengo) ব্যবহৃত হয়েছে।', en: 'metterci expresses time taken, valerne la pena means worth it, and tenerci means to care about.' }, grammarId: 'ci-ne-idiomatici' },
    ],
    mcq: [
      { id: 'stb1-25-q1', prompt: { bn: 'উচ্চগতির ট্রেনে রেজ্জো এমিলিয়া থেকে মিলান যেতে কত সময় লাগে?', en: 'How long does it take by high-speed train from Reggio Emilia to Milan?' }, options: ['২০ মিনিট', '৪০ মিনিট', '২ ঘণ্টা', '৩ ঘণ্টা'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ৪০ মিনিট — পাঠ্যাংশে বলা হয়েছে: «দুই বছর ধরে আমি রেজ্জো এমিলিয়ায় থাকি কিন্তু মিলানের একটি স্থাপত্য স্টুডিওতে কাজ করি। প্রতিদিন সকালে আমি উচ্চগতির ট্রেন ধরি: এই লাইনে এক স্টেশন থেকে অন্য স্টেশনে যেতে মাত্র চল্লিশ মিনিট লাগে।» (appena quaranta minuti)।', en: 'Barely forty minutes.' } },
    ],
    trueFalse: [
      { id: 'stb1-25-tf1', statementIt: 'Durante il viaggio in treno il narratore dorme sempre.', statement: { bn: 'ট্রেন যাত্রায় বক্তা সবসময় ঘুমান।', en: 'During the train journey the narrator always sleeps.' }, answer: false, explanation: { bn: 'তিনি বই পড়েন বা কারিগরি নকশা প্রস্তুত করেন।', en: 'He reads or prepares technical drawings.' } },
    ],
    fillBlank: [
      { id: 'stb1-25-fb1', sentence: 'L’abbonamento costa, ma ___ vale davvero la pena.', options: ['ci', 'ne', 'lo', 'si'], answer: 1, explanation: { bn: 'পাঠ্যাংশের তথ্যানুযায়ী: «অবশ্যই নিত্যযাত্রী হতে হলে গোছানো থাকতে হয় এবং মাঝে মাঝে সন্ধ্যায় ক্লান্তি লাগে, কিন্তু বার্ষিক পাসের কারণে এটি সত্যিই সার্থক।» (সঠিক উত্তর: ne)।', en: 'ne vale la pena.' } },
    ],
    shortAnswer: [
      { id: 'stb1-25-sa1', question: { bn: 'বক্তা মিলানে কোথায় কাজ করেন?', en: 'Where does the narrator work in Milan?' }, sampleAnswerIt: 'Lavora in uno studio di architettura a Milano.', keywords: ['studio', 'architettura'] },
    ],
    practice: {
      retellPrompt: { bn: 'নিত্যযাত্রীর সকালের রুটিন ৩ বাক্যে লিখুন।', en: 'Describe the commuter’s morning routine in 3 sentences.' },
      completeMissing: { promptIt: 'Da casa mia al centro ___ metto venti minuti in bici.', hint: { bn: 'স্থান বা বাগধারা সর্বনাম হিসেবে ci ব্যবহার করুন', en: 'ci' }, sampleIt: 'Da casa mia al centro ci metto venti minuti in bici.' },
      buildSimilar: { patternIt: 'Con l’alta velocità ci si mette poco tempo.', prompt: { bn: 'ci metto বা ne vale la pena দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence with ci metto or ne vale la pena.' }, sampleIt: 'Questo corso è impegnativo, ma ne vale davvero la pena.' },
      altEndingPrompt: { bn: 'শুক্রবার সন্ধ্যায় ট্রেনে ফেরার অনুভূতি কেমন হয় লিখুন।', en: 'Write how the Friday evening train ride home feels.' },
    },
  }),

  buildStory({
    id: 'st-b1-26', level: 'B1', titleIt: 'Regole per la dichiarazione dei redditi',
    title: { bn: 'আয়কর বিবরণী ও রসিদ সংরক্ষণের নিয়ম', en: 'Rules for tax returns and keeping receipts' },
    topic: { bn: 'কর ব্যবস্থাপনা ও কর্মবাচ্য (venire / andare)', en: 'Tax documents & passive with venire/andare' },
    grammarIds: ['passivo-venire-andare'],
    vocabKeys: ['w:B1:la ricevuta fiscale', 'w:B1:la scadenza fiscale', 'w:B1:conservare'],
    paragraphs: [
      { it: 'Ogni primavera milioni di contribuenti preparano la dichiarazione dei redditi con l’aiuto del CAF o del commercialista. Per ottenere le detrazioni mediche, ogni ricevuta fiscale va conservata con cura.', tr: { bn: 'প্রতি বসন্তে লক্ষ লক্ষ করদাতা সহায়তা কেন্দ্র (CAF) বা হিসাবরক্ষকের সাহায্যে আয়কর বিবরণী প্রস্তুত করেন। চিকিৎসা খরচে কর ছাড় পেতে প্রতিটি কর রসিদ যত্নসহকারে সংরক্ষণ করতে হবে।', en: 'Every spring millions of taxpayers prepare their tax returns with the help of a tax assistance centre or accountant. To obtain medical deductions, every tax receipt must be carefully kept.' } },
      { it: 'Inoltre, i pagamenti delle visite specialistiche e dei farmaci vengono accettati per la detrazione solo se effettuati con carta o bonifico tracciabile.', tr: { bn: 'তাছাড়া বিশেষজ্ঞ চিকিৎসকের সাক্ষাৎ ও ওষুধের পেমেন্ট কেবল তখনই কর ছাড়ের জন্য গৃহীত হয় যদি তা কার্ড বা শনাক্তযোগ্য ব্যাংক ট্রান্সফারের মাধ্যমে করা হয়।', en: 'Furthermore, payments for specialist visits and medicines are accepted for deduction only if made by card or traceable bank transfer.' } },
      { it: 'Il modello finale va inviato telematicamente prima della scadenza fiscale di settembre, altrimenti vengono applicate delle sanzioni.', tr: { bn: 'চূড়ান্ত ফর্মটি সেপ্টেম্বরের কর সময়সীমার আগে অনলাইনে পাঠাতে হবে, নতুবা জরিমানা প্রয়োগ করা হয়।', en: 'The final form must be sent electronically before the September tax deadline, otherwise penalties are applied.' } },
    ],
    wordGlossary: [
      { word: 'ricevuta fiscale', base: 'la ricevuta fiscale', tr: { bn: 'কর রসিদ', en: 'tax receipt' }, pos: 'noun' },
      { word: 'scadenza fiscale', base: 'la scadenza fiscale', tr: { bn: 'করের শেষ সময়সীমা', en: 'tax deadline' }, pos: 'noun' },
      { word: 'conservare', base: 'conservare', tr: { bn: 'সংরক্ষণ করা', en: 'to keep / preserve' }, pos: 'verb' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Ogni ricevuta fiscale va conservata; i pagamenti vengono accettati.', ruleTitle: { bn: 'Andare + participio (আবশ্যকতা) ও Venire + participio', en: 'Obligation passive (andare) & dynamic passive (venire)' }, explanation: { bn: 'va conservata / va inviato = সংরক্ষণ/প্রেরণ করতে হবে; vengono accettati / vengono applicate = গৃহীত/প্রয়োগ করা হয়।', en: 'va + participle expresses necessity; vengono + participle expresses regular passive action.' }, grammarId: 'passivo-venire-andare' },
    ],
    mcq: [
      { id: 'stb1-26-q1', prompt: { bn: 'চিকিৎসা খরচে কর ছাড় পেতে কীভাবে পেমেন্ট করতে হয়?', en: 'How must medical payments be made to qualify for tax deduction?' }, options: ['নগদ টাকায়', 'কার্ড বা শনাক্তযোগ্য ব্যাংক ট্রান্সফারে', 'ডাকটিকিটে', 'বিদেশি মুদ্রায়'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কার্ড বা শনাক্তযোগ্য ব্যাংক ট্রান্সফারে — পাঠ্যাংশে বলা হয়েছে: «তাছাড়া বিশেষজ্ঞ চিকিৎসকের সাক্ষাৎ ও ওষুধের পেমেন্ট কেবল তখনই কর ছাড়ের জন্য গৃহীত হয় যদি তা কার্ড বা শনাক্তযোগ্য ব্যাংক ট্রান্সফারের মাধ্যমে করা হয়।» (con carta o bonifico tracciabile)।', en: 'By card or traceable bank transfer.' } },
    ],
    trueFalse: [
      { id: 'stb1-26-tf1', statementIt: 'Le ricevute fiscali si possono buttare subito dopo la visita.', statement: { bn: 'চিকিৎসক দেখানোর পরপরই কর রসিদ ফেলে দেওয়া যায়।', en: 'Tax receipts can be thrown away right after the visit.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «প্রতি বসন্তে লক্ষ লক্ষ করদাতা সহায়তা কেন্দ্র (CAF) বা হিসাবরক্ষকের সাহায্যে আয়কর বিবরণী প্রস্তুত করেন। চিকিৎসা খরচে কর ছাড় পেতে প্রতিটি কর রসিদ যত্নসহকারে সংরক্ষণ করতে হবে।» (ogni ricevuta fiscale va conservata con cura)।', en: 'Every tax receipt must be kept carefully.' } },
    ],
    fillBlank: [
      { id: 'stb1-26-fb1', sentence: 'Il modello ___ inviato prima della scadenza di settembre.', options: ['va', 'sta', 'ha', 'fa'], answer: 0, explanation: { bn: 'আবশ্যকতা অর্থে va inviato।', en: 'va inviato = must be sent.' } },
    ],
    shortAnswer: [
      { id: 'stb1-26-sa1', question: { bn: 'সময়সীমার পর ফর্ম পাঠালে কী হয়?', en: 'What happens if the form is sent after the deadline?' }, sampleAnswerIt: 'Vengono applicate delle sanzioni.', keywords: ['sanzioni', 'applicate'] },
    ],
    practice: {
      retellPrompt: { bn: 'কর বিবরণীর নিয়মগুলো va/vengono ব্যবহার করে ৩ বাক্যে লিখুন।', en: 'Summarise the tax return rules in 3 sentences using va and vengono.' },
      completeMissing: { promptIt: 'I documenti originali ___ conservati per cinque anni.', hint: { bn: 'andare বহুবচন: vanno', en: 'vanno' }, sampleIt: 'I documenti originali vanno conservati per cinque anni.' },
      buildSimilar: { patternIt: 'La ricevuta fiscale va conservata con cura.', prompt: { bn: 'va + participio দিয়ে একটি নিয়মের বাক্য লিখুন।', en: 'Write a rule using va + past participle.' }, sampleIt: 'La domanda va firmata in fondo alla pagina.' },
      altEndingPrompt: { bn: 'কর ফেরত (rimborso) অ্যাকাউন্টে কবে জমা হয় তা লিখুন।', en: 'Write when the tax refund is credited to the account.' },
    },
  }),

  buildStory({
    id: 'st-b1-27', level: 'B1', titleIt: 'Un dibattito sul futuro verde della città',
    title: { bn: 'শহরের সবুজ ভবিষ্যৎ নিয়ে বিতর্ক', en: 'A debate on the city’s green future' },
    topic: { bn: 'পরিবেশ ও বিভিন্ন কালে si passivante', en: 'Environment & passive si across tenses' },
    grammarIds: ['si-passivante-tempi'],
    vocabKeys: ['w:B1:il dibattito', 'w:B1:ambientale', 'w:B1:la soluzione'],
    paragraphs: [
      { it: 'Venerdì scorso nell’aula magna dell’università si è svolto un interessante dibattito pubblico sulla transizione ambientale nelle città medie italiane.', tr: { bn: 'গত শুক্রবার বিশ্ববিদ্যালয়ের মূল মিলনায়তনে ইতালির মাঝারি শহরগুলোতে পরিবেশগত রূপান্তর নিয়ে একটি আকর্ষণীয় উন্মুক্ত বিতর্ক অনুষ্ঠিত হয়েছে।', en: 'Last Friday in the university’s main hall an interesting public debate took place on environmental transition in medium-sized Italian cities.' } },
      { it: 'Durante la serata si sono analizzate diverse proposte: negli ultimi cinque anni si sono piantati tremila nuovi alberi, ma in passato si costruivano troppi parcheggi di cemento.', tr: { bn: 'সন্ধ্যাটি চলাকালীন বিভিন্ন প্রস্তাব বিশ্লেষণ করা হয়েছে: গত পাঁচ বছরে তিন হাজার নতুন গাছ লাগানো হয়েছে, কিন্তু অতীতে অতিরিক্ত কংক্রিটের পার্কিং তৈরি করা হতো।', en: 'During the evening several proposals were analysed: over the last five years three thousand new trees have been planted, whereas in the past too many concrete car parks used to be built.' } },
      { it: 'Alla fine si è trovata una soluzione condivisa tra docenti, studenti e assessori per creare corridoi ecologici lungo il fiume.', tr: { bn: 'শেষে নদীর ধারে পরিবেশগত করিডোর তৈরির জন্য শিক্ষক, শিক্ষার্থী ও কাউন্সিলরদের মধ্যে একটি সর্বসম্মত সমাধান খুঁজে পাওয়া গেছে।', en: 'In the end a shared solution was found among lecturers, students, and councillors to create ecological corridors along the river.' } },
    ],
    wordGlossary: [
      { word: 'dibattito', base: 'il dibattito', tr: { bn: 'বিতর্ক / আলোচনা', en: 'debate' }, pos: 'noun' },
      { word: 'ambientale', base: 'ambientale', tr: { bn: 'পরিবেশগত', en: 'environmental' }, pos: 'adj' },
      { word: 'soluzione', base: 'la soluzione', tr: { bn: 'সমাধান', en: 'solution' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Si sono analizzate diverse proposte; si è trovata una soluzione.', ruleTitle: { bn: 'অতীত ও ইমপারফেক্ট কালে কর্মবাচ্যমূলক si (si passivante)', en: 'Passive si in past tenses' }, explanation: { bn: 'একবচন বিশেষ্যে si è trovata এবং বহুবচন বিশেষ্যে si sono analizzate / si sono piantati / si costruivano বসেছে।', en: 'Passive si agrees in number and gender with the grammatical subject in compound tenses.' }, grammarId: 'si-passivante-tempi' },
    ],
    mcq: [
      { id: 'stb1-27-q1', prompt: { bn: 'গত পাঁচ বছরে কয়টি নতুন গাছ লাগানো হয়েছে?', en: 'How many new trees have been planted over the last five years?' }, options: ['৩০০টি', '১,০০০টি', '৩,০০০টি', '১০,০০০টি'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ৩,০০০টি — পাঠ্যাংশে বলা হয়েছে: «সন্ধ্যাটি চলাকালীন বিভিন্ন প্রস্তাব বিশ্লেষণ করা হয়েছে: গত পাঁচ বছরে তিন হাজার নতুন গাছ লাগানো হয়েছে, কিন্তু অতীতে অতিরিক্ত কংক্রিটের পার্কিং তৈরি করা হতো।» (tremila nuovi alberi)।', en: 'Three thousand new trees.' } },
    ],
    trueFalse: [
      { id: 'stb1-27-tf1', statementIt: 'Il dibattito si è svolto in uno stadio.', statement: { bn: 'বিতর্কটি একটি স্টেডিয়ামে অনুষ্ঠিত হয়েছে।', en: 'The debate took place in a stadium.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «গত শুক্রবার বিশ্ববিদ্যালয়ের মূল মিলনায়তনে ইতালির মাঝারি শহরগুলোতে পরিবেশগত রূপান্তর নিয়ে একটি আকর্ষণীয় উন্মুক্ত বিতর্ক অনুষ্ঠিত হয়েছে।» (nell’aula magna dell’università)।', en: 'In the university’s main hall.' } },
    ],
    fillBlank: [
      { id: 'stb1-27-fb1', sentence: 'Durante l’incontro si ___ discusse molte idee.', options: ['è', 'sono', 'hanno', 'ha'], answer: 1, explanation: { bn: 'molte idee (স্ত্রী বহুবচন) → si sono discusse।', en: 'si sono discusse.' } },
    ],
    shortAnswer: [
      { id: 'stb1-27-sa1', question: { bn: 'নদীর ধারে কী তৈরি করার সমাধান পাওয়া গেছে?', en: 'What did they agree to create along the river?' }, sampleAnswerIt: 'Hanno deciso di creare corridoi ecologici lungo il fiume.', keywords: ['corridoi', 'ecologici', 'fiume'] },
    ],
    practice: {
      retellPrompt: { bn: 'বিশ্ববিদ্যালয়ের পরিবেশ বিতর্কটি ৩ বাক্যে লিখুন।', en: 'Summarise the university environmental debate in 3 sentences.' },
      completeMissing: { promptIt: 'Negli ultimi anni si ___ aperti nuovi parchi urbani.', hint: { bn: 'essere বহুবচন: sono', en: 'sono' }, sampleIt: 'Negli ultimi anni si sono aperti nuovi parchi urbani.' },
      buildSimilar: { patternIt: 'Alla fine si è trovata una soluzione condivisa.', prompt: { bn: 'Si è... বা Si sono... দিয়ে একটি অতীত বাক্য লিখুন।', en: 'Write a past sentence with Si è... or Si sono...' }, sampleIt: 'Nel nostro comune si sono ridotti gli sprechi idrici.' },
      altEndingPrompt: { bn: 'নদীর ধারের পার্কটি তৈরি হলে মানুষ কী করবে লিখুন।', en: 'Write how citizens will use the new river corridor.' },
    },
  }),

  buildStory({
    id: 'st-b1-28', level: 'B1', titleIt: 'Superare la burocrazia con il sorriso',
    title: { bn: 'হাসিমুখে দাপ্তরিক জটিলতা জয়', en: 'Overcoming bureaucracy with a smile' },
    topic: { bn: 'আমলাতন্ত্র ও সর্বনামযুক্ত ক্রিয়া (cavarsela, arrangiarsi)', en: 'Bureaucracy & pronominal verbs' },
    grammarIds: ['verbi-pronominali-b1'],
    vocabKeys: ['w:B1:cavarsela', 'w:B1:arrangiarsi', 'w:B1:la burocrazia'],
    paragraphs: [
      { it: 'Quando si apre una piccola attività artigianale in Italia, all’inizio la burocrazia può sembrare una montagna insuperabile tra moduli, timbri e permessi sanitari.', tr: { bn: 'ইতালিতে যখন একটি ছোট কারুশিল্প ব্যবসা খোলা হয়, শুরুতে ফর্ম, সিল ও স্বাস্থ্য অনুমোদনের ভিড়ে আমলাতন্ত্রকে এক দুর্লঙ্ঘ্য পাহাড় মনে হতে পারে।', en: 'When opening a small artisan business in Italy, at first bureaucracy can seem like an insurmountable mountain of forms, stamps, and health permits.' } },
      { it: 'Quando mia sorella Yasmin ha inaugurato la sua pasticceria a Modena, non aveva un grande budget per i consulenti e ha dovuto arrangiarsi leggendo le guide della Camera di Commercio.', tr: { bn: 'আমার বোন ইয়াসমিন যখন মোদেনায় তার পেস্ট্রির দোকান উদ্বোধন করে, তখন পরামর্শদাতাদের জন্য তার বড় বাজেট ছিল না এবং চেম্বার অব কমার্সের গাইড পড়ে নিজেকেই চালিয়ে নিতে হয়েছে।', en: 'When my sister Yasmin opened her pastry shop in Modena, she did not have a big budget for consultants and had to manage on her own by reading the Chamber of Commerce guides.' } },
      { it: 'Senza mai prendersela per i ritardi, se l’è cavata egregiamente e oggi il suo laboratorio dà lavoro a quattro persone.', tr: { bn: 'দেরির জন্য কখনো মন খারাপ না করে সে চমৎকারভাবে সব সামলে নিয়েছে এবং আজ তার কারখানায় চারজন মানুষ কাজ করে।', en: 'Without ever getting upset over delays, she managed admirably and today her workshop employs four people.' } },
    ],
    wordGlossary: [
      { word: 'cavarsela', base: 'cavarsela', tr: { bn: 'সামলে নেওয়া / উতরে যাওয়া', en: 'to get by / manage well' }, pos: 'verb' },
      { word: 'arrangiarsi', base: 'arrangiarsi', tr: { bn: 'নিজের চেষ্টায় চালিয়ে নেওয়া', en: 'to make do / manage on one’s own' }, pos: 'verb' },
      { word: 'burocrazia', base: 'la burocrazia', tr: { bn: 'আমলাতন্ত্র / দাপ্তরিক প্রক্রিয়া', en: 'bureaucracy' }, pos: 'noun' },
    ],
    grammarBreakdown: [
      { sentenceIt: 'Senza prendersela, se l’è cavata egregiamente.', ruleTitle: { bn: 'অতীত ও ইনফিনিটিভ রূপে সর্বনামযুক্ত ক্রিয়া (cavarsela, prendersela, arrangiarsi)', en: 'Pronominal verbs in past and infinitive' }, explanation: { bn: 'cavarsela অতীতে essere সহায়ক নেয় এবং পার্টিসিপল la অনুযায়ী মেলে: se l’è cavata।', en: 'In compound tenses cavarsela takes essere and agrees feminine singular with la: se l’è cavata.' }, grammarId: 'verbi-pronominali-b1' },
    ],
    mcq: [
      { id: 'stb1-28-q1', prompt: { bn: 'ইয়াসমিন মোদেনায় কিসের দোকান খুলেছে?', en: 'What kind of shop did Yasmin open in Modena?' }, options: ['ফুলের দোকান', 'পেস্ট্রির দোকান (pasticceria)', 'দর্জির দোকান', 'বইয়ের দোকান'], answer: 1, explanation: { bn: 'সঠিক উত্তর: পেস্ট্রির দোকান (pasticceria) — পাঠ্যাংশে বলা হয়েছে: «আমার বোন ইয়াসমিন যখন মোদেনায় তার পেস্ট্রির দোকান উদ্বোধন করে, তখন পরামর্শদাতাদের জন্য তার বড় বাজেট ছিল না এবং চেম্বার অব কমার্সের গাইড পড়ে নিজেকেই চালিয়ে নিতে হয়েছে।» (la sua pasticceria a Modena)।', en: 'A pastry shop.' } },
    ],
    trueFalse: [
      { id: 'stb1-28-tf1', statementIt: 'Oggi Yasmin lavora completamente da sola nel laboratorio.', statement: { bn: 'আজ ইয়াসমিন কারখানায় সম্পূর্ণ একা কাজ করে।', en: 'Today Yasmin works completely alone in the workshop.' }, answer: false, explanation: { bn: 'বাক্যটি মিথ্যা — গল্পে আসলে বলা হয়েছে: «দেরির জন্য কখনো মন খারাপ না করে সে চমৎকারভাবে সব সামলে নিয়েছে এবং আজ তার কারখানায় চারজন মানুষ কাজ করে।» (il suo laboratorio dà lavoro a quattro persone)।', en: 'Her workshop employs four people.' } },
    ],
    fillBlank: [
      { id: 'stb1-28-fb1', sentence: 'Era un esame difficile, ma noi ___ siamo cavata bene.', options: ['ce la', 'se la', 'me la', 've la'], answer: 0, explanation: { bn: 'সঠিক রূপান্তর: «noi» থেকে পরিবর্তিত হয়ে «ce la siamo cavata» ব্যবহৃত হয়।', en: 'noi ce la siamo cavata.' } },
    ],
    shortAnswer: [
      { id: 'stb1-28-sa1', question: { bn: 'ইয়াসমিন কীভাবে দাপ্তরিক নিয়মগুলো শিখেছিল?', en: 'How did Yasmin learn the bureaucratic rules?' }, sampleAnswerIt: 'Ha letto le guide della Camera di Commercio.', keywords: ['guide', 'camera', 'commercio'] },
    ],
    practice: {
      retellPrompt: { bn: 'ইয়াসমিনের দোকান খোলার সাফল্য ৩ বাক্যে লিখুন।', en: 'Retell Yasmin’s story of opening her pastry shop in 3 sentences.' },
      completeMissing: { promptIt: 'Con l’italiano parlato ormai ___ la cavo piuttosto bene.', hint: { bn: 'যুক্ত সর্বনামে io-এর পরোক্ষ রূপ পরিবর্তিত হয়ে me হয়', en: 'me' }, sampleIt: 'Con l’italiano parlato ormai me la cavo piuttosto bene.' },
      buildSimilar: { patternIt: 'Senza prendersela, se l’è cavata benissimo.', prompt: { bn: 'cavarsela বা arrangiarsi দিয়ে একটি বাক্য লিখুন।', en: 'Write a sentence using cavarsela or arrangiarsi.' }, sampleIt: 'Anche senza navigatore ce la siamo cavata benissimo.' },
      altEndingPrompt: { bn: 'ইয়াসমিনের দোকানের সবচেয়ে জনপ্রিয় মিষ্টি সম্পর্কে লিখুন।', en: 'Write about the most popular pastry in Yasmin’s shop.' },
    },
  }),
];
