import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const B2_READING_1: ReadingPassage[] = [
  buildReading({
    id: 'rd-b2-01', level: 'B2', kind: 'essay', titleIt: 'La concordanza dei tempi negli atti amministrativi', title: { bn: 'প্রশাসনিক নথিতে কালের সামঞ্জস্য', en: 'Tense sequence in administrative deeds' },
    storyId: 'st-b2-01',
    paragraphs: [
      { it: 'Quando un ente respinge una domanda pubblica, i consulenti vorrebbero che la commissione avesse già valutato ogni allegato tecnico con imparzialità. In tali circostanze la normativa impone che gli uffici motivino ogni decisione in modo verificabile.', tr: { bn: 'যখন কোনো প্রতিষ্ঠান একটি সরকারি আবেদন প্রত্যাখ্যান করে, তখন পরামর্শদাতারা চান যে পর্ষদ যেন ইতিমধ্যে প্রতিটি কারিগরি সংযুক্তি নিরপেক্ষভাবে মূল্যায়ন করে থাকে। এমন পরিস্থিতিতে বিধিমালা বাধ্যতামূলক করে যে দপ্তরগুলো প্রতিটি সিদ্ধান্তের যাচাইযোগ্য ব্যাখ্যা দেবে।', en: 'When a body rejects a public application, advisors wish the board had already assessed every technical attachment impartially. In such cases regulations require offices to justify every decision verifiably.' } },
      { it: 'Se il ricorso viene istruito correttamente, chi presenta l’istanza può ottenere una revisione trasparente senza perdere mesi in contestazioni formali.', tr: { bn: 'আপিলটি সঠিকভাবে প্রস্তুত করা হলে আবেদনকারী আনুষ্ঠানিক বিবাদে মাস নষ্ট না করেই স্বচ্ছ পুনর্বিবেচনা পেতে পারেন।', en: 'If the appeal is properly prepared, the applicant can obtain a transparent review without losing months in formal disputes.' } },
    ],
    vocabHighlights: [{ it: 'la normativa', tr: { bn: 'বিধিমালা', en: 'regulations' } }, { it: 'il ricorso', tr: { bn: 'আপিল', en: 'appeal' } }],
    grammarHighlights: [{ excerpt: 'vorrebbero che… avesse già valutato', note: { bn: 'বর্তমান ইচ্ছা/কন্ডিশনালের পর পূর্ববর্তী অপূর্ণ প্রত্যাশায় congiuntivo trapassato।', en: 'Past unfulfilled preference triggers congiuntivo trapassato.' }, grammarId: 'concordanza-avanzata' }],
    relatedGrammarIds: ['concordanza-avanzata', 'lessico-giuridico-burocratico'],
    questions: [
      { id: 'rd-b2-01-q1', prompt: { bn: 'বিধিমালা অনুযায়ী দপ্তরগুলোকে কী করতে হয়?', en: 'What must offices do under the regulations?' }, options: ['সিদ্ধান্তের যাচাইযোগ্য ব্যাখ্যা দিতে হয়', 'আবেদন নষ্ট করতে হয়', 'গোপন রাখতে হয়', 'নতুন ফি নিতে হয়'], answer: 0, explanation: { bn: 'সঠিক উত্তর: সিদ্ধান্তের যাচাইযোগ্য ব্যাখ্যা দিতে হয় — পাঠ্যাংশে বলা হয়েছে: «যখন কোনো প্রতিষ্ঠান একটি সরকারি আবেদন প্রত্যাখ্যান করে, তখন পরামর্শদাতারা চান যে পর্ষদ যেন ইতিমধ্যে প্রতিটি কারিগরি সংযুক্তি নিরপেক্ষভাবে মূল্যায়ন করে থাকে। এমন পরিস্থিতিতে বিধিমালা বাধ্যতামূলক করে যে দপ্তরগুলো প্রতিটি সিদ্ধান্তের যাচাইযোগ্য ব্যাখ্যা দেবে।» (motivino ogni decisione in modo verificabile)।', en: 'Justify every decision in a verifiable manner.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-02', level: 'B2', kind: 'article', titleIt: 'Ristrutturazione energetica e compravendita', title: { bn: 'জ্বালানি সংস্কার ও সম্পত্তি ক্রয়বিক্রয়', en: 'Energy retrofitting and property sales' },
    storyId: 'st-b2-02',
    paragraphs: [
      { it: 'Nel mercato immobiliare contemporaneo, se un edificio fosse stato dotato anni fa di un impianto fotovoltaico efficiente, oggi i costi di gestione risulterebbero notevolmente più contenuti.', tr: { bn: 'সমসাময়িক আবাসন বাজারে কোনো ভবনে যদি বহু বছর আগে একটি দক্ষ সৌরবিদ্যুৎ ব্যবস্থা স্থাপন করা হতো, তবে আজ পরিচালনা ব্যয় উল্লেখযোগ্যভাবে কম থাকত।', en: 'In today’s property market, if a building had been fitted years ago with an efficient solar installation, today running costs would be noticeably lower.' } },
      { it: 'Prima di fissare l’appuntamento dal notaio per il rogito, gli acquirenti chiedono sempre più spesso la certificazione energetica aggiornata.', tr: { bn: 'দলিলে স্বাক্ষরের জন্য নোটরির কাছে সময় নির্ধারণের আগে ক্রেতারা ক্রমশ বেশি করে হালনাগাদ জ্বালানি সনদ চেয়ে থাকেন।', en: 'Before booking the notary appointment for the deed, buyers increasingly ask for the updated energy certificate.' } },
    ],
    vocabHighlights: [{ it: 'il rogito', tr: { bn: 'দাপ্তরিক বিক্রয় দলিল', en: 'notarial deed' } }, { it: 'impianto fotovoltaico', tr: { bn: 'সৌরবিদ্যুৎ প্যানেল', en: 'solar installation' } }],
    grammarHighlights: [{ excerpt: 'se… fosse stato dotato, oggi… risulterebbero', note: { bn: 'অতীত শর্ত ও বর্তমান ফলাফলের মিশ্র শর্তবাক্য।', en: 'Mixed conditional linking past cause to present result.' }, grammarId: 'periodo-ipotetico-misto' }],
    relatedGrammarIds: ['periodo-ipotetico-misto'],
    questions: [
      { id: 'rd-b2-02-q1', prompt: { bn: 'দলিলে স্বাক্ষরের আগে ক্রেতারা কী চান?', en: 'What do buyers ask for before the deed?' }, options: ['হালনাগাদ জ্বালানি সনদ', 'আসবাবপত্রের রসিদ', 'রঙের নমুনা', 'টেলিভিশন'], answer: 0, explanation: { bn: 'সঠিক উত্তর: হালনাগাদ জ্বালানি সনদ — পাঠ্যাংশে বলা হয়েছে: «দলিলে স্বাক্ষরের জন্য নোটরির কাছে সময় নির্ধারণের আগে ক্রেতারা ক্রমশ বেশি করে হালনাগাদ জ্বালানি সনদ চেয়ে থাকেন।» (la certificazione energetica aggiornata)।', en: 'The updated energy certificate.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-03', level: 'B2', kind: 'opinion', titleIt: 'Riflessioni civiche su un emendamento pubblico', title: { bn: 'জনস্বার্থ সংশোধনী নিয়ে নাগরিক ভাবনা', en: 'Civic reflections on a public amendment' },
    storyId: 'st-b2-03',
    paragraphs: [
      { it: 'Sia chiaro fin dall’inizio che ogni emendamento al bilancio locale incide direttamente sui servizi quotidiani dei cittadini. Volesse il cielo che le discussioni consiliari privilegiassero la trasparenza rispetto alle polemiche sterili.', tr: { bn: 'শুরু থেকেই স্পষ্ট হোক যে স্থানীয় বাজেটের প্রতিটি সংশোধনী সরাসরি নাগরিকদের দৈনন্দিন সেবার ওপর প্রভাব ফেলে। আহা, কাউন্সিল আলোচনাগুলো যদি নিষ্ফল বিতর্কের বদলে স্বচ্ছতাকে অগ্রাধিকার দিত!', en: 'Let it be clear from the outset that every amendment to the local budget directly affects citizens’ daily services. If only council debates prioritised transparency over sterile polemics.' } },
      { it: 'Vengano pure presentate critiche rigorose, purché siano accompagnate da proposte sostenibili e numeri verificati.', tr: { bn: 'কঠোর সমালোচনা নিশ্চয়ই পেশ করা হোক, তবে শর্ত হলো সেগুলোর সাথে যেন টেকসই প্রস্তাব ও যাচাইকৃত পরিসংখ্যান থাকে।', en: 'By all means let rigorous criticisms be raised, provided they are accompanied by sustainable proposals and verified figures.' } },
    ],
    vocabHighlights: [{ it: 'l’emendamento', tr: { bn: 'সংশোধনী', en: 'amendment' } }],
    grammarHighlights: [{ excerpt: 'Sia chiaro / Volesse il cielo / Vengano pure', note: { bn: 'প্রধান বাক্যে স্বাধীন congiuntivo আদেশ, কামনা ও ছাড় প্রকাশ করে।', en: 'Independent subjunctive expresses wishes, concessions, or exhortations.' }, grammarId: 'congiuntivo-indipendente' }],
    relatedGrammarIds: ['congiuntivo-indipendente'],
    questions: [
      { id: 'rd-b2-03-q1', prompt: { bn: 'লেখকের মতে কঠোর সমালোচনার সাথে কী থাকা উচিত?', en: 'What should accompany rigorous criticism?' }, options: ['টেকসই প্রস্তাব ও যাচাইকৃত পরিসংখ্যান', 'দীর্ঘ বক্তৃতা', 'মিডিয়া প্রচার', 'গোপন চিঠি'], answer: 0, explanation: { bn: 'সঠিক উত্তর: টেকসই প্রস্তাব ও যাচাইকৃত পরিসংখ্যান — পাঠ্যাংশে বলা হয়েছে: «কঠোর সমালোচনা নিশ্চয়ই পেশ করা হোক, তবে শর্ত হলো সেগুলোর সাথে যেন টেকসই প্রস্তাব ও যাচাইকৃত পরিসংখ্যান থাকে।» (proposte sostenibili e numeri verificati)।', en: 'Sustainable proposals and verified figures.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-04', level: 'B2', kind: 'news', titleIt: 'Difesa digitale contro gli attacchi informatici', title: { bn: 'সাইবার হামলার বিরুদ্ধে ডিজিটাল প্রতিরক্ষা', en: 'Digital defence against cyber attacks' },
    storyId: 'st-b2-04',
    paragraphs: [
      { it: 'Dopo il recente attacco informatico alle reti municipali, le amministrazioni cercano figure professionali che sappiano prevenire ogni violazione dei dati e che abbiano guidato interventi complessi.', tr: { bn: 'পৌর নেটওয়ার্কগুলোতে সাম্প্রতিক সাইবার হামলার পর প্রশাসন এমন পেশাজীবী খুঁজছে যাঁরা যেকোনো তথ্য লঙ্ঘন প্রতিরোধ করতে পারেন এবং জটিল উদ্ধারকাজে নেতৃত্ব দিয়েছেন।', en: 'After the recent cyber attack on municipal networks, administrations seek professionals who know how to prevent any data breach and who have led complex responses.' } },
      { it: 'Non esiste alcun sistema digitale che garantisca sicurezza assoluta senza audit periodici e personale formato.', tr: { bn: 'নিয়মিত নিরীক্ষা এবং প্রশিক্ষিত কর্মী ছাড়া এমন কোনো ডিজিটাল ব্যবস্থা নেই যা সম্পূর্ণ নিরাপত্তা নিশ্চিত করতে পারে।', en: 'There is no digital system that guarantees absolute security without periodic audits and trained staff.' } },
    ],
    vocabHighlights: [{ it: 'attacco informatico', tr: { bn: 'সাইবার হামলা', en: 'cyber attack' } }, { it: 'violazione dei dati', tr: { bn: 'তথ্য লঙ্ঘন', en: 'data breach' } }],
    grammarHighlights: [{ excerpt: 'Non esiste alcun sistema… che garantisca', note: { bn: 'নেতিবাচক বা অনির্দিষ্ট পূর্বপদের পর relative clause-এ congiuntivo।', en: 'Negative antecedent triggers subjunctive in the relative clause.' }, grammarId: 'congiuntivo-relativo' }],
    relatedGrammarIds: ['congiuntivo-relativo'],
    questions: [
      { id: 'rd-b2-04-q1', prompt: { bn: 'নিবন্ধ অনুযায়ী সম্পূর্ণ নিরাপত্তার জন্য কী অপরিহার্য?', en: 'What is essential alongside software for security?' }, options: ['নিয়মিত নিরীক্ষা ও প্রশিক্ষিত কর্মী', 'সব কম্পিউটার বন্ধ রাখা', 'কাগজের চিঠি', 'পাসওয়ার্ড শেয়ার করা'], answer: 0, explanation: { bn: 'সঠিক উত্তর: নিয়মিত নিরীক্ষা ও প্রশিক্ষিত কর্মী — পাঠ্যাংশে বলা হয়েছে: «নিয়মিত নিরীক্ষা এবং প্রশিক্ষিত কর্মী ছাড়া এমন কোনো ডিজিটাল ব্যবস্থা নেই যা সম্পূর্ণ নিরাপত্তা নিশ্চিত করতে পারে।» (audit periodici e personale formato)।', en: 'Periodic audits and trained staff.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-05', level: 'B2', kind: 'article', titleIt: 'Gestire il disavanzo senza tagliare i servizi', title: { bn: 'সেবা না কমিয়ে ঘাটতি ব্যবস্থাপনা', en: 'Managing a deficit without cutting services' },
    storyId: 'st-b2-05',
    paragraphs: [
      { it: 'Per quanto il disavanzo pubblico possa apparire ingente, alcuni comuni dimostrano che una gestione rigorosa dei fondi strutturali permette di proteggere le scuole.', tr: { bn: 'সরকারি ঘাটতি যতই বিশাল মনে হোক না কেন, কিছু পৌরসভা প্রমাণ করে যে কাঠামোগত তহবিলের কঠোর ব্যবস্থাপনা স্কুলগুলোকে রক্ষা করতে সাহায্য করে।', en: 'However large a public deficit may appear, some municipalities show that strict management of structural funds allows schools to be protected.' } },
      { it: 'Malgrado le procedure burocratiche rallentino i rimborsi, i lavori di manutenzione straordinaria vengono avviati prima dell’inverno.', tr: { bn: 'যদিও আমলাতান্ত্রিক প্রক্রিয়াগুলো অর্থ ফেরত দিতে বিলম্ব ঘটায়, তবুও শীতের আগেই বিশেষ রক্ষণাবেক্ষণ কাজ শুরু করা হয়।', en: 'Although bureaucratic procedures slow reimbursements, extraordinary maintenance works are launched before winter.' } },
    ],
    vocabHighlights: [{ it: 'il disavanzo', tr: { bn: 'ঘাটতি', en: 'deficit' } }, { it: 'fondi strutturali', tr: { bn: 'কাঠামোগত তহবিল', en: 'structural funds' } }],
    grammarHighlights: [{ excerpt: 'Per quanto… possa apparire / Malgrado… rallentino', note: { bn: 'Per quanto এবং Malgrado সংযোজক congiuntivo নেয়।', en: 'Per quanto and Malgrado always require the subjunctive.' }, grammarId: 'congiuntivo-concessivo' }],
    relatedGrammarIds: ['congiuntivo-concessivo'],
    questions: [
      { id: 'rd-b2-05-q1', prompt: { bn: 'বিশেষ রক্ষণাবেক্ষণ কাজ কখন শুরু করা হয়?', en: 'When are extraordinary maintenance works launched?' }, options: ['শীতের আগে', 'গ্রীষ্মের শেষে', 'নির্বাচনের পর', 'বসন্তের শেষে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: শীতের আগে — পাঠ্যাংশে বলা হয়েছে: «যদিও আমলাতান্ত্রিক প্রক্রিয়াগুলো অর্থ ফেরত দিতে বিলম্ব ঘটায়, তবুও শীতের আগেই বিশেষ রক্ষণাবেক্ষণ কাজ শুরু করা হয়।» (prima dell’inverno)।', en: 'Before winter.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-06', level: 'B2', kind: 'notice', titleIt: 'Tutela per prodotto difettoso e diritto di recesso', title: { bn: 'ত্রুটিপূর্ণ পণ্যে সুরক্ষা ও প্রত্যাহারের অধিকার', en: 'Defective goods protection and withdrawal rights' },
    storyId: 'st-b2-06',
    paragraphs: [
      { it: 'Qualora un consumatore riceva un prodotto difettoso acquistato a distanza, ha diritto alla sostituzione gratuita oppure al rimborso integrale.', tr: { bn: 'যদি কোনো ভোক্তা দূরবর্তী কেনাকাটায় একটি ত্রুটিপূর্ণ পণ্য পান, তবে তিনি বিনামূল্যে প্রতিস্থাপন অথবা সম্পূর্ণ অর্থ ফেরতের অধিকারী হন।', en: 'Should a consumer receive a defective item bought remotely, they are entitled to free replacement or a full refund.' } },
      { it: 'Il venditore deve rispondere con tempestività, a meno che non dimostri un danneggiamento successivo causato dall’acquirente.', tr: { bn: 'বিক্রেতাকে দ্রুত সাড়া দিতে হবে, যদি না তিনি প্রমাণ করেন যে পরবর্তী ক্ষতি ক্রেতার দ্বারা হয়েছে।', en: 'The seller must respond promptly, unless they prove subsequent damage caused by the buyer.' } },
    ],
    vocabHighlights: [{ it: 'sostituzione gratuita', tr: { bn: 'বিনামূল্যে প্রতিস্থাপন', en: 'free replacement' } }, { it: 'diritto di recesso', tr: { bn: 'প্রত্যাহারের অধিকার', en: 'right of withdrawal' } }],
    grammarHighlights: [{ excerpt: 'Qualora… riceva / a meno che non dimostri', note: { bn: 'শর্তসূচক congiuntivo ব্যবহার।', en: 'Formal conditional conjunctions taking subjunctive.' }, grammarId: 'congiuntivo-condizionale-b2' }],
    relatedGrammarIds: ['congiuntivo-condizionale-b2'],
    questions: [
      { id: 'rd-b2-06-q1', prompt: { bn: 'কোন ক্ষেত্রে বিক্রেতা দায় এড়াতে পারেন?', en: 'When can the seller avoid replacement responsibility?' }, options: ['ক্রেতা পরে ক্ষতি করেছেন তা প্রমাণ করলে', 'দাম কম হলে', 'রসিদ সাদা হলে', 'সপ্তাহান্তে কিনলে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: ক্রেতা পরে ক্ষতি করেছেন তা প্রমাণ করলে — পাঠ্যাংশে বলা হয়েছে: «বিক্রেতাকে দ্রুত সাড়া দিতে হবে, যদি না তিনি প্রমাণ করেন যে পরবর্তী ক্ষতি ক্রেতার দ্বারা হয়েছে।» (a meno che non dimostri un danneggiamento causato dall’acquirente)।', en: 'If they prove damage caused by the buyer.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-07', level: 'B2', kind: 'story', titleIt: 'Le pagine fondative del 1948', title: { bn: '১৯৪৮ সালের ভিত্তিমূলক সংবিধান', en: 'Founding pages of 1948' },
    storyId: 'st-b2-07',
    paragraphs: [
      { it: 'Nel dopoguerra l’Assemblea Costituente lavorò intensamente per dare all’Italia una repubblica parlamentare fondata sul lavoro e sull’uguaglianza.', tr: { bn: 'যুদ্ধোত্তর কালে গণপরিষদ শ্রম ও সাম্যের ওপর ভিত্তি করে ইতালিকে একটি সংসদীয় প্রজাতন্ত্র উপহার দিতে নিবিড়ভাবে কাজ করেছিল।', en: 'After the war the Constituent Assembly worked intensely to give Italy a parliamentary republic founded on labour and equality.' } },
      { it: 'I costituenti scrissero articoli chiari affinché la legge entrasse in vigore e rimanesse comprensibile a ogni cittadina e cittadino.', tr: { bn: 'সংবিধান প্রণেতারা স্পষ্ট অনুচ্ছেদ লিখেছিলেন যাতে আইন কার্যকর হয় এবং প্রতিটি নাগরিকের কাছে বোধগম্য থাকে।', en: 'The framers wrote clear articles so that the law came into force and remained intelligible to every citizen.' } },
    ],
    vocabHighlights: [{ it: 'Assemblea Costituente', tr: { bn: 'গণপরিষদ', en: 'Constituent Assembly' } }],
    grammarHighlights: [{ excerpt: 'lavorò / scrissero', note: { bn: 'ঐতিহাসিক বিবরণে passato remoto-র প্রয়োগ।', en: 'Passato remoto marks historical events.' }, grammarId: 'passato-remoto-irregolari' }],
    relatedGrammarIds: ['passato-remoto-irregolari'],
    questions: [
      { id: 'rd-b2-07-q1', prompt: { bn: 'সংবিধান প্রণেতারা কেন স্পষ্ট ভাষা ব্যবহার করেছিলেন?', en: 'Why did the framers write clear articles?' }, options: ['যাতে প্রতিটি নাগরিক তা বুঝতে পারে', 'কাগজ বাঁচাতে', 'অনুবাদ সহজ করতে', 'বিতর্ক এড়াতে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: যাতে প্রতিটি নাগরিক তা বুঝতে পারে — পাঠ্যাংশে বলা হয়েছে: «সংবিধান প্রণেতারা স্পষ্ট অনুচ্ছেদ লিখেছিলেন যাতে আইন কার্যকর হয় এবং প্রতিটি নাগরিকের কাছে বোধগম্য থাকে।» (rimanesse comprensibile a ogni cittadina e cittadino)।', en: 'So it remained intelligible to every citizen.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-08', level: 'B2', kind: 'story', titleIt: 'Il reperto ritrovato dopo secoli', title: { bn: 'শতাব্দী পর খুঁজে পাওয়া নিদর্শন', en: 'The find recovered after centuries' },
    storyId: 'st-b2-08',
    paragraphs: [
      { it: 'Appena gli studiosi ebbero aperto la cassa sigillata nell’archivio conventuale, scoprirono un manoscritto miniato del Quattrocento insieme a un reperto archeologico.', tr: { bn: 'গবেষকেরা মঠের মহাফেজখানার সিলমোহরকৃত বাক্সটি খোলা মাত্রই একটি প্রত্নতাত্ত্বিক নিদর্শনের সাথে পঞ্চদশ শতকের একটি অলংকৃত পাণ্ডুলিপি আবিষ্কার করলেন।', en: 'As soon as scholars had opened the sealed chest in the convent archive, they discovered a 15th-century illuminated manuscript alongside an archaeological find.' } },
      { it: 'Dopo che i restauratori ebbero terminato le analisi chimiche, l’università pubblicò una monografia molto attesa.', tr: { bn: 'সংস্কারকেরা রাসায়নিক বিশ্লেষণ শেষ করার পর বিশ্ববিদ্যালয়টি বহুল প্রতীক্ষিত একটি মনোগ্রাফ প্রকাশ করল।', en: 'After the restorers had finished chemical analyses, the university published a long-awaited monograph.' } },
    ],
    vocabHighlights: [{ it: 'manoscritto miniato', tr: { bn: 'অলংকৃত পাণ্ডুলিপি', en: 'illuminated manuscript' } }, { it: 'monografia', tr: { bn: 'মনোগ্রাফ', en: 'monograph' } }],
    grammarHighlights: [{ excerpt: 'Appena… ebbero aperto / Dopo che… ebbero terminato', note: { bn: 'তাৎক্ষণিক পূর্ববর্তী ঐতিহাসিক ঘটনা: trapassato remoto + passato remoto।', en: 'Trapassato remoto precedes passato remoto immediately.' }, grammarId: 'trapassato-remoto' }],
    relatedGrammarIds: ['trapassato-remoto'],
    questions: [
      { id: 'rd-b2-08-q1', prompt: { bn: 'রাসায়নিক বিশ্লেষণের পর বিশ্ববিদ্যালয় কী প্রকাশ করল?', en: 'What did the university publish after chemical tests?' }, options: ['একটি মনোগ্রাফ', 'একটি উপন্যাস', 'একটি মানচিত্র', 'একটি পোস্টার'], answer: 0, explanation: { bn: 'সঠিক উত্তর: একটি মনোগ্রাফ — পাঠ্যাংশে বলা হয়েছে: «সংস্কারকেরা রাসায়নিক বিশ্লেষণ শেষ করার পর বিশ্ববিদ্যালয়টি বহুল প্রতীক্ষিত একটি মনোগ্রাফ প্রকাশ করল।» (pubblicò una monografia)।', en: 'It published a monograph.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-09', level: 'B2', kind: 'article', titleIt: 'Stime sul clima alpino', title: { bn: 'আলপাইন জলবায়ু সম্পর্কিত প্রাক্কলন', en: 'Estimates on the Alpine climate' },
    storyId: 'st-b2-09',
    paragraphs: [
      { it: 'Le rilevazioni satellitari mostrano anomalie persistenti: lo scioglimento dei ghiacciai avrà probabilmente superato le previsioni dello scorso decennio.', tr: { bn: 'উপগ্রহের পরিমাপ ধারাবাহিক অস্বাভাবিকতা দেখাচ্ছে: হিমবাহ গলে যাওয়া সম্ভবত গত দশকের পূর্বাভাসকেও ছাড়িয়ে গেছে।', en: 'Satellite readings show persistent anomalies: glacier melting will likely have exceeded last decade’s forecasts.' } },
      { it: 'Alcuni esperti ritengono che la temperatura media sarà già salita oltre la soglia critica in diverse valli alte.', tr: { bn: 'কিছু বিশেষজ্ঞ মনে করেন যে কয়েকটি উঁচু উপত্যকায় গড় তাপমাত্রা ইতিমধ্যেই সংকটজনক সীমা অতিক্রম করে গেছে।', en: 'Some experts believe the average temperature has likely already risen above the critical threshold in several high valleys.' } },
    ],
    vocabHighlights: [{ it: 'scioglimento dei ghiacciai', tr: { bn: 'হিমবাহ গলে যাওয়া', en: 'glacier melting' } }],
    grammarHighlights: [{ excerpt: 'avrà… superato / sarà già salita', note: { bn: 'অতীত ঘটনা সম্পর্কে অনুমান বোঝাতে futuro anteriore epistemico।', en: 'Epistemic future perfect expresses inference about past developments.' }, grammarId: 'futuro-epistemico-b2' }],
    relatedGrammarIds: ['futuro-epistemico-b2'],
    questions: [
      { id: 'rd-b2-09-q1', prompt: { bn: 'উপগ্রহ পরিমাপে কী ধরা পড়েছে?', en: 'What do satellite readings show?' }, options: ['ধারাবাহিক জলবায়ু অস্বাভাবিকতা', 'তুষারপাত দ্বিগুণ হওয়া', 'নতুন হিমবাহ সৃষ্টি', 'বাতাস পুরোপুরি থেমে যাওয়া'], answer: 0, explanation: { bn: 'সঠিক উত্তর: ধারাবাহিক জলবায়ু অস্বাভাবিকতা — পাঠ্যাংশে বলা হয়েছে: «উপগ্রহের পরিমাপ ধারাবাহিক অস্বাভাবিকতা দেখাচ্ছে: হিমবাহ গলে যাওয়া সম্ভবত গত দশকের পূর্বাভাসকেও ছাড়িয়ে গেছে।» (anomalie persistenti)।', en: 'Persistent anomalies.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-10', level: 'B2', kind: 'news', titleIt: 'Cronaca diplomatica dal vertice', title: { bn: 'শীর্ষ সম্মেলন থেকে কূটনৈতিক সংবাদ', en: 'Diplomatic dispatch from the summit' },
    storyId: 'st-b2-10',
    paragraphs: [
      { it: 'Secondo indiscrezioni raccolte a margine dell’incontro, il negoziato di pace sarebbe vicino a una svolta sul corridoio umanitario.', tr: { bn: 'বৈঠকের ফাঁকে পাওয়া তথ্যে জানা যাচ্ছে, মানবিক করিডোর প্রশ্নে শান্তি আলোচনা এক মোড় ঘোরানো অবস্থার কাছাকাছি পৌঁছেছে।', en: 'According to leaks gathered on the sidelines, the peace talks are reportedly close to a breakthrough on the humanitarian corridor.' } },
      { it: 'I ministri avrebbero concordato un calendario di verifiche tecniche prima di annunciare il cessate il fuoco definitivo.', tr: { bn: 'চূড়ান্ত যুদ্ধবিরতি ঘোষণার আগে মন্ত্রীরা কারিগরি যাচাইয়ের একটি সময়সূচিতে একমত হয়েছেন বলে শোনা যাচ্ছে।', en: 'Ministers have reportedly agreed on a timetable of technical checks before announcing the definitive ceasefire.' } },
    ],
    vocabHighlights: [{ it: 'negoziato di pace', tr: { bn: 'শান্তি আলোচনা', en: 'peace negotiations' } }, { it: 'cessate il fuoco', tr: { bn: 'যুদ্ধবিরতি', en: 'ceasefire' } }],
    grammarHighlights: [{ excerpt: 'sarebbe vicino / avrebbero concordato', note: { bn: 'সংবাদ প্রতিবেদনে অনিশ্চিত বা সূত্রনির্ভর তথ্যে কন্ডিশনাল।', en: 'Journalistic conditional signals unverified attributed claims.' }, grammarId: 'condizionale-giornalistico' }],
    relatedGrammarIds: ['condizionale-giornalistico'],
    questions: [
      { id: 'rd-b2-10-q1', prompt: { bn: 'চূড়ান্ত যুদ্ধবিরতির আগে মন্ত্রীরা কী বিষয়ে একমত হয়েছেন বলে শোনা যাচ্ছে?', en: 'What have ministers reportedly agreed on before the ceasefire?' }, options: ['কারিগরি যাচাইয়ের সময়সূচি', 'বাণিজ্য মেলা', 'নির্বাচনের তারিখ', 'শুল্ক বৃদ্ধি'], answer: 0, explanation: { bn: 'সঠিক উত্তর: কারিগরি যাচাইয়ের সময়সূচি — পাঠ্যাংশে বলা হয়েছে: «চূড়ান্ত যুদ্ধবিরতি ঘোষণার আগে মন্ত্রীরা কারিগরি যাচাইয়ের একটি সময়সূচিতে একমত হয়েছেন বলে শোনা যাচ্ছে।» (un calendario di verifiche tecniche)।', en: 'A timetable of technical checks.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-11', level: 'B2', kind: 'notice', titleIt: 'Direttive sulla sicurezza in cantiere', title: { bn: 'নির্মাণস্থলে নিরাপত্তা নির্দেশিকা', en: 'Safety directives on construction sites' },
    storyId: 'st-b2-11',
    paragraphs: [
      { it: 'I dispositivi di protezione individuale vanno indossati senza eccezioni da chiunque acceda alle aree operative.', tr: { bn: 'কার্যক্ষেত্রে প্রবেশকারী প্রত্যেককেই ব্যতিক্রম ছাড়াই ব্যক্তিগত সুরক্ষা সরঞ্জাম পরিধান করতে হবে।', en: 'Personal protective equipment must be worn without exception by anyone entering operational areas.' } },
      { it: 'Ogni settimana le impalcature vengono controllate da ingegneri certificati e i verbali vengono archiviati in sede.', tr: { bn: 'প্রতি সপ্তাহে সনদপ্রাপ্ত প্রকৌশলীদের দ্বারা ভারাগুলো পরীক্ষা করা হয় এবং প্রতিবেদনগুলো অফিসে সংরক্ষণ করা হয়।', en: 'Every week scaffolding is inspected by certified engineers and records are filed on site.' } },
    ],
    vocabHighlights: [{ it: 'sicurezza sul lavoro', tr: { bn: 'কর্মক্ষেত্রের নিরাপত্তা', en: 'workplace safety' } }],
    grammarHighlights: [{ excerpt: 'vanno indossati / vengono controllate', note: { bn: 'বাধ্যবাধকতা (andare) ও নিয়মিত প্রক্রিয়া (venire)।', en: 'andare conveys rule; venire highlights recurring action.' }, grammarId: 'passivo-avanzato' }],
    relatedGrammarIds: ['passivo-avanzato'],
    questions: [
      { id: 'rd-b2-11-q1', prompt: { bn: 'ভারাগুলো কে পরীক্ষা করেন?', en: 'Who inspects the scaffolding weekly?' }, options: ['সনদপ্রাপ্ত প্রকৌশলীরা', 'দর্শনার্থীরা', 'নিরাপত্তারক্ষীরা', 'চালকেরা'], answer: 0, explanation: { bn: 'সঠিক উত্তর: সনদপ্রাপ্ত প্রকৌশলীরা — পাঠ্যাংশে বলা হয়েছে: «প্রতি সপ্তাহে সনদপ্রাপ্ত প্রকৌশলীদের দ্বারা ভারাগুলো পরীক্ষা করা হয় এবং প্রতিবেদনগুলো অফিসে সংরক্ষণ করা হয়।» (da ingegneri certificati)।', en: 'By certified engineers.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-12', level: 'B2', kind: 'article', titleIt: 'Banche dati pubbliche e interoperabilità', title: { bn: 'সরকারি ডেটাবেস ও আন্তঃকার্যকারিতা', en: 'Public databases and interoperability' },
    storyId: 'st-b2-12',
    paragraphs: [
      { it: 'Quando gli archivi comunali si collegano tra loro, si riducono i tempi di attesa e si eliminano i moduli ripetitivi.', tr: { bn: 'পৌর সংরক্ষণাগারগুলো একে অপরের সাথে যুক্ত হলে অপেক্ষার সময় কমে এবং পুনরাবৃত্ত ফর্মগুলো বাদ পড়ে।', en: 'When municipal archives connect with one another, waiting times shrink and repetitive forms are eliminated.' } },
      { it: 'Attraverso l’interoperabilità, i certificati anagrafici si trasmettono automaticamente tra uffici autorizzati.', tr: { bn: 'আন্তঃকার্যকারিতার মাধ্যমে জন্ম-নিবন্ধন বা নাগরিক সনদ অনুমোদিত দপ্তরগুলোর মধ্যে স্বয়ংক্রিয়ভাবে প্রেরিত হয়।', en: 'Through interoperability, civil registry certificates are transmitted automatically among authorised offices.' } },
    ],
    vocabHighlights: [{ it: 'interoperabilità', tr: { bn: 'আন্তঃকার্যকারিতা', en: 'interoperability' } }],
    grammarHighlights: [{ excerpt: 'si collegano / si riducono / si eliminano', note: { bn: 'si collegano পারস্পরিক ক্রিয়া, আর si riducono কর্মবাচ্য।', en: 'Reciprocal vs passive si constructions.' }, grammarId: 'si-passivante-riflessivo' }],
    relatedGrammarIds: ['si-passivante-riflessivo'],
    questions: [
      { id: 'rd-b2-12-q1', prompt: { bn: 'আন্তঃকার্যকারিতার ফলে দপ্তরগুলোর মধ্যে কী ঘটে?', en: 'What happens between authorised offices via interoperability?' }, options: ['সনদ স্বয়ংক্রিয়ভাবে প্রেরিত হয়', 'দপ্তর বন্ধ হয়ে যায়', 'কাগজ বাড়ে', 'ফি দ্বিগুণ হয়'], answer: 0, explanation: { bn: 'সঠিক উত্তর: সনদ স্বয়ংক্রিয়ভাবে প্রেরিত হয় — পাঠ্যাংশে বলা হয়েছে: «আন্তঃকার্যকারিতার মাধ্যমে জন্ম-নিবন্ধন বা নাগরিক সনদ অনুমোদিত দপ্তরগুলোর মধ্যে স্বয়ংক্রিয়ভাবে প্রেরিত হয়।» (si trasmettono automaticamente)।', en: 'Certificates are transmitted automatically.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-13', level: 'B2', kind: 'email', titleIt: 'Istruzioni per delega e autocertificazione', title: { bn: 'ক্ষমতা অর্পণ ও স্ব-প্রত্যয়নের নির্দেশনা', en: 'Instructions for proxy and self-certification' },
    storyId: 'st-b2-13',
    paragraphs: [
      { it: 'Gentile utente, pur avendo già inviato l’autocertificazione telematica, La invitiamo a verificare la correttezza dei codici fiscali inseriti.', tr: { bn: 'প্রিয় ব্যবহারকারী, আপনি ইতিমধ্যে অনলাইন স্ব-প্রত্যয়নপত্র পাঠিয়ে থাকলেও প্রদত্ত কর শনাক্তকরণ কোডের সঠিকতা যাচাই করতে অনুরোধ করছি।', en: 'Dear user, although you have already sent the online self-certification, we invite you to verify the accuracy of the tax codes entered.' } },
      { it: 'Dopo aver compilato la delega, occorre allegare copia di un documento valido prima di confermare la pratica.', tr: { bn: 'ক্ষমতা অর্পণপত্র পূরণ করার পর আবেদন নিশ্চিত করার আগে একটি বৈধ পরিচয়পত্রের অনুলিপি সংযুক্ত করা প্রয়োজন।', en: 'After completing the proxy form, it is necessary to attach a copy of a valid ID before confirming the file.' } },
    ],
    vocabHighlights: [{ it: 'autocertificazione', tr: { bn: 'স্ব-প্রত্যয়নপত্র', en: 'self-certification' } }, { it: 'la delega', tr: { bn: 'ক্ষমতা অর্পণপত্র', en: 'proxy / delegation' } }],
    grammarHighlights: [{ excerpt: 'pur avendo… inviato / Dopo aver compilato', note: { bn: 'যৌগিক জেরুন্ড ও যৌগিক ইনফিনিটিভ দিয়ে সংক্ষিপ্ত উপবাক্য।', en: 'Compound gerund and infinitive form compact subordinate clauses.' }, grammarId: 'subordinate-implicite' }],
    relatedGrammarIds: ['subordinate-implicite'],
    questions: [
      { id: 'rd-b2-13-q1', prompt: { bn: 'ক্ষমতা অর্পণপত্র পূরণের পর কী সংযুক্ত করতে হবে?', en: 'What must be attached after filling in the proxy?' }, options: ['বৈধ পরিচয়পত্রের অনুলিপি', 'বিদ্যুৎ বিল', 'ট্রেনের টিকিট', 'পাসপোর্ট সাইজ স্ট্যাম্প'], answer: 0, explanation: { bn: 'সঠিক উত্তর: বৈধ পরিচয়পত্রের অনুলিপি — পাঠ্যাংশে বলা হয়েছে: «ক্ষমতা অর্পণপত্র পূরণ করার পর আবেদন নিশ্চিত করার আগে একটি বৈধ পরিচয়পত্রের অনুলিপি সংযুক্ত করা প্রয়োজন।» (copia di un documento valido)।', en: 'Copy of a valid ID document.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-14', level: 'B2', kind: 'article', titleIt: 'Prevenzione del territorio e manutenzione fluviale', title: { bn: 'ভূমি সুরক্ষা ও নদী রক্ষণাবেক্ষণ', en: 'Land prevention and river maintenance' },
    storyId: 'st-b2-14',
    paragraphs: [
      { it: 'Investendo costantemente nella pulizia dei corsi d’acqua, molte amministrazioni locali riuscirebbero ad arginare il dissesto idrogeologico.', tr: { bn: 'নদী-নালা পরিষ্কারের কাজে ধারাবাহিকভাবে বিনিয়োগ করলে অনেক স্থানীয় প্রশাসন ভূমিধস ও জলজ অবক্ষয় প্রতিহত করতে সক্ষম হবে।', en: 'By consistently investing in cleaning waterways, many local authorities would succeed in stemming hydrogeological instability.' } },
      { it: 'Avendo sottovalutato per anni la fragilità dei versanti, oggi occorre intervenire prima che una nuova alluvione colpisca i centri abitati.', tr: { bn: 'বছরের পর বছর পাহাড়ের ঢালের ভঙ্গুরতাকে অবমূল্যায়ন করায়, নতুন বন্যা জনবসতিতে আঘাত হানার আগেই আজ পদক্ষেপ নেওয়া জরুরি।', en: 'Having underestimated slope fragility for years, today action is needed before a new flood hits populated centres.' } },
    ],
    vocabHighlights: [{ it: 'dissesto idrogeologico', tr: { bn: 'ভূমিধস ও জলজ অবক্ষয়', en: 'hydrogeological instability' } }, { it: 'arginare', tr: { bn: 'প্রতিহত করা', en: 'to stem' } }],
    grammarHighlights: [{ excerpt: 'Investendo… / Avendo sottovalutato…', note: { bn: 'শর্তসূচক ও কারণসূচক জেরুন্ড।', en: 'Conditional and causal gerunds.' }, grammarId: 'gerundio-causale-ipotetico' }],
    relatedGrammarIds: ['gerundio-causale-ipotetico'],
    questions: [
      { id: 'rd-b2-14-q1', prompt: { bn: 'নদী-নালা পরিষ্কারে ধারাবাহিক বিনিয়োগ কী প্রতিরোধে সাহায্য করে?', en: 'What does consistent investment in cleaning waterways help stem?' }, options: ['ভূমিধস ও জলজ অবক্ষয়', 'টেলিফোন বিল', 'আবাসিক কর', 'রেল ধর্মঘট'], answer: 0, explanation: { bn: 'সঠিক উত্তর: ভূমিধস ও জলজ অবক্ষয় — পাঠ্যাংশে বলা হয়েছে: «নদী-নালা পরিষ্কারের কাজে ধারাবাহিকভাবে বিনিয়োগ করলে অনেক স্থানীয় প্রশাসন ভূমিধস ও জলজ অবক্ষয় প্রতিহত করতে সক্ষম হবে।» (il dissesto idrogeologico)।', en: 'Hydrogeological instability.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-15', level: 'B2', kind: 'notice', titleIt: 'Criteri per la transizione alle fonti rinnovabili', title: { bn: 'নবায়নযোগ্য জ্বালানিতে রূপান্তরের মানদণ্ড', en: 'Criteria for switching to renewable sources' },
    storyId: 'st-b2-15',
    paragraphs: [
      { it: 'I consorzi operanti nella produzione di energia pulita beneficeranno di incentivi dedicati alle fonti rinnovabili.', tr: { bn: 'পরিচ্ছন্ন শক্তি উৎপাদনে নিয়োজিত সমবায়গুলো নবায়নযোগ্য জ্বালানির জন্য নির্ধারিত প্রণোদনা লাভ করবে।', en: 'Consortia operating in clean energy production will benefit from incentives dedicated to renewable sources.' } },
      { it: 'La circolare contenente i parametri tecnici rimane vincolante per tutti gli enti partecipanti al programma.', tr: { bn: 'কারিগরি মানদণ্ডসংবলিত পরিপত্রটি কর্মসূচিতে অংশগ্রহণকারী সব প্রতিষ্ঠানের জন্য বাধ্যতামূলক থাকবে।', en: 'The circular containing the technical parameters remains binding on all bodies participating in the programme.' } },
    ],
    vocabHighlights: [{ it: 'fonti rinnovabili', tr: { bn: 'নবায়নযোগ্য উৎস', en: 'renewable sources' } }],
    grammarHighlights: [{ excerpt: 'operanti / contenente / partecipanti', note: { bn: 'বিশেষণ-স্থানীয় বর্তমান পার্টিসিপল (participio presente)।', en: 'Present participles functioning as compact adjectival clauses.' }, grammarId: 'participio-presente-b2' }],
    relatedGrammarIds: ['participio-presente-b2'],
    questions: [
      { id: 'rd-b2-15-q1', prompt: { bn: 'প্রণোদনাগুলো কোন খাতের সমবায়গুলোর জন্য নির্ধারিত?', en: 'Which consortia benefit from the incentives?' }, options: ['পরিচ্ছন্ন ও নবায়নযোগ্য শক্তি খাত', 'প্লাস্টিক উৎপাদন', 'কয়লা আমদানি', 'তামাক শিল্প'], answer: 0, explanation: { bn: 'সঠিক উত্তর: পরিচ্ছন্ন ও নবায়নযোগ্য শক্তি খাত — পাঠ্যাংশে বলা হয়েছে: «পরিচ্ছন্ন শক্তি উৎপাদনে নিয়োজিত সমবায়গুলো নবায়নযোগ্য জ্বালানির জন্য নির্ধারিত প্রণোদনা লাভ করবে।» (energia pulita e fonti rinnovabili)।', en: 'Clean and renewable energy.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-16', level: 'B2', kind: 'news', titleIt: 'Nuovo piano dopo la fusione aziendale', title: { bn: 'একীভূতকরণের পর নতুন ব্যবসায়িক পরিকল্পনা', en: 'New plan after the corporate merger' },
    storyId: 'st-b2-16',
    paragraphs: [
      { it: 'Completata la fusione aziendale tra i due operatori logistici, il consiglio di amministrazione ha presentato la strategia triennale.', tr: { bn: 'দুটি লজিস্টিক প্রতিষ্ঠানের একীভূতকরণ সম্পন্ন হওয়ার পর পরিচালনা পর্ষদ তিন বছর মেয়াদী কৌশল উপস্থাপন করেছে।', en: 'Once the corporate merger between the two logistics operators was completed, the board of directors presented its three-year strategy.' } },
      { it: 'Analizzato il fatturato annuo, la diversificazione delle rotte ferroviarie rappresenta il pilastro della crescita.', tr: { bn: 'বার্ষিক আয় বিশ্লেষণ করার পর, রেলপথগুলোর বৈচিত্র্যায়নই প্রবৃদ্ধির মূল স্তম্ভ হিসেবে বিবেচিত হয়েছে।', en: 'Having analysed annual turnover, diversification of rail routes represents the pillar of growth.' } },
    ],
    vocabHighlights: [{ it: 'fusione aziendale', tr: { bn: 'কোম্পানি একীভূতকরণ', en: 'corporate merger' } }, { it: 'fatturato annuo', tr: { bn: 'বার্ষিক আয়', en: 'annual turnover' } }],
    grammarHighlights: [{ excerpt: 'Completata la fusione / Analizzato il fatturato', note: { bn: 'লিঙ্গ-বচন মিলিয়ে participio assoluto গঠন।', en: 'Absolute participle phrases mark completed steps.' }, grammarId: 'participio-assoluto-b2' }],
    relatedGrammarIds: ['participio-assoluto-b2'],
    questions: [
      { id: 'rd-b2-16-q1', prompt: { bn: 'নতুন কৌশলে প্রবৃদ্ধির মূল স্তম্ভ কী?', en: 'What is the pillar of growth in the strategy?' }, options: ['রেলপথগুলোর বৈচিত্র্যায়ন', 'রুট বন্ধ করা', 'বিমান বিক্রি', 'নতুন কর'], answer: 0, explanation: { bn: 'সঠিক উত্তর: রেলপথগুলোর বৈচিত্র্যায়ন — পাঠ্যাংশে বলা হয়েছে: «বার্ষিক আয় বিশ্লেষণ করার পর, রেলপথগুলোর বৈচিত্র্যায়নই প্রবৃদ্ধির মূল স্তম্ভ হিসেবে বিবেচিত হয়েছে।» (la diversificazione delle rotte ferroviarie)।', en: 'Diversification of rail routes.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-17', level: 'B2', kind: 'essay', titleIt: 'L’etica del ricercare in ambito accademico', title: { bn: 'একাডেমিক পরিমণ্ডলে গবেষণার নৈতিকতা', en: 'The ethics of researching in academia' },
    storyId: 'st-b2-17',
    paragraphs: [
      { it: 'L’indagare con onestà intellettuale costituisce la base di ogni dottorato di ricerca, ben al di là del semplice accumulare titoli.', tr: { bn: 'বুদ্ধিবৃত্তিক সততার সাথে অনুসন্ধান করাই প্রতিটি পিএইচডি গবেষণার ভিত্তি—যা নিছক ডিগ্রি সঞ্চয়ের চেয়ে অনেক ঊর্ধ্বে।', en: 'Investigating with intellectual honesty forms the basis of every PhD, far beyond simply accumulating credentials.' } },
      { it: 'Il sottoporre i risultati alla revisione paritaria garantisce che la conoscenza cresca attraverso il confronto aperto.', tr: { bn: 'ফলাফলকে পিয়ার-রিভিউয়ের অধীনে উপস্থাপন করা নিশ্চিত করে যে উন্মুক্ত মতবিনিময়ের মধ্য দিয়ে জ্ঞান বিকশিত হয়।', en: 'Submitting findings to peer review ensures that knowledge grows through open scholarly exchange.' } },
    ],
    vocabHighlights: [{ it: 'dottorato di ricerca', tr: { bn: 'পিএইচডি গবেষণা', en: 'doctoral research' } }, { it: 'revisione paritaria', tr: { bn: 'পিয়ার রিভিউ', en: 'peer review' } }],
    grammarHighlights: [{ excerpt: 'L’indagare / l’accumulare / Il sottoporre', note: { bn: 'আর্টিকেলসহ ক্রিয়া (infinito sostantivato) প্রক্রিয়াটিকে ধারণাগত বিশেষ্য করে।', en: 'Nominalised infinitives turn processes into abstract concepts.' }, grammarId: 'infinito-sostantivato' }],
    relatedGrammarIds: ['infinito-sostantivato'],
    questions: [
      { id: 'rd-b2-17-q1', prompt: { bn: 'পিয়ার-রিভিউ কী নিশ্চিত করে?', en: 'What does peer review ensure?' }, options: ['উন্মুক্ত আলোচনার মাধ্যমে জ্ঞানের বিকাশ', 'গবেষণা গোপন রাখা', 'বইয়ের মূল্যবৃদ্ধি', 'সময়সীমা বাতিল'], answer: 0, explanation: { bn: 'সঠিক উত্তর: উন্মুক্ত আলোচনার মাধ্যমে জ্ঞানের বিকাশ — পাঠ্যাংশে বলা হয়েছে: «ফলাফলকে পিয়ার-রিভিউয়ের অধীনে উপস্থাপন করা নিশ্চিত করে যে উন্মুক্ত মতবিনিময়ের মধ্য দিয়ে জ্ঞান বিকশিত হয়।» (che la conoscenza cresca attraverso il confronto aperto)।', en: 'That knowledge grows through open discussion.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-18', level: 'B2', kind: 'news', titleIt: 'Strategia industriale e robotica avanzata', title: { bn: 'শিল্প কৌশল ও উন্নত রোবোটিক্স', en: 'Industrial strategy and advanced robotics' },
    storyId: 'st-b2-18',
    paragraphs: [
      { it: 'Durante la conferenza stampa, l’amministratore delegato ha precisato che il nuovo stabilimento sarebbe diventato operativo entro l’autunno seguente.', tr: { bn: 'সংবাদ সম্মেলনে প্রধান নির্বাহী স্পষ্ট করেছেন যে পরবর্তী শরতের মধ্যেই নতুন কারখানাটি চালু হবে।', en: 'During the press conference, the CEO clarified that the new plant would become operational by the following autumn.' } },
      { it: 'Ha inoltre ricordato che il reparto ingegneria aveva già introdotto la robotica avanzata senza ridurre i livelli occupazionali.', tr: { bn: 'তিনি আরও স্মরণ করিয়ে দেন যে প্রকৌশল বিভাগ কর্মসংস্থান না কমিয়েই ইতিমধ্যে উন্নত রোবোটিক্স চালু করেছিল।', en: 'He also recalled that the engineering department had already introduced advanced robotics without reducing staffing levels.' } },
    ],
    vocabHighlights: [{ it: 'amministratore delegato', tr: { bn: 'প্রধান নির্বাহী কর্মকর্তা', en: 'CEO' } }, { it: 'robotica avanzata', tr: { bn: 'উন্নত রোবোটিক্স', en: 'advanced robotics' } }],
    grammarHighlights: [{ excerpt: 'ha precisato che… sarebbe diventato / aveva già introdotto', note: { bn: 'অতীত পরোক্ষ উক্তিতে কাল পরিবর্তন নিয়ম।', en: 'Sequence of tenses in reported past statements.' }, grammarId: 'discorso-indiretto-complesso' }],
    relatedGrammarIds: ['discorso-indiretto-complesso'],
    questions: [
      { id: 'rd-b2-18-q1', prompt: { bn: 'প্রকৌশল বিভাগ কীভাবে উন্নত রোবোটিক্স চালু করেছিল?', en: 'How did engineering introduce advanced robotics?' }, options: ['কর্মসংস্থান না কমিয়েই', 'সব শ্রমিক ছাঁটাই করে', 'উৎপাদন বন্ধ করে', 'সরকারের অনুমতি ছাড়াই'], answer: 0, explanation: { bn: 'সঠিক উত্তর: কর্মসংস্থান না কমিয়েই — পাঠ্যাংশে বলা হয়েছে: «তিনি আরও স্মরণ করিয়ে দেন যে প্রকৌশল বিভাগ কর্মসংস্থান না কমিয়েই ইতিমধ্যে উন্নত রোবোটিক্স চালু করেছিল।» (senza ridurre i livelli occupazionali)।', en: 'Without reducing staffing levels.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-19', level: 'B2', kind: 'story', titleIt: 'Una scelta difficile per la scuola', title: { bn: 'বিদ্যালয়ের জন্য একটি কঠিন সিদ্ধান্ত', en: 'A difficult decision for the school' },
    storyId: 'st-b2-19',
    paragraphs: [
      { it: 'Il dirigente scolastico osservava le assenze trimestrali in silenzio: davvero la dispersione scolastica era aumentata proprio tra gli studenti più giovani?', tr: { bn: 'প্রধান শিক্ষক নীরবে ত্রৈমাসিক অনুপস্থিতির তালিকা দেখছিলেন: সত্যিই কি সবচেয়ে কমবয়সী শিক্ষার্থীদের মধ্যেই ঝরে পড়ার হার বেড়ে গিয়েছিল?', en: 'The headteacher looked over the quarterly absences in silence: had school dropout really increased precisely among the youngest students?' } },
      { it: 'Non c’era tempo da perdere; avrebbe convocato subito le famiglie per evitare un divario irreversibile.', tr: { bn: 'নষ্ট করার মতো সময় ছিল না; একটি অপরিবর্তনীয় ব্যবধান এড়াতে তিনি এখনই পরিবারগুলোকে ডাকবেন।', en: 'There was no time to lose; he would summon the families immediately to prevent an irreversible gap.' } },
    ],
    vocabHighlights: [{ it: 'dispersione scolastica', tr: { bn: 'শিক্ষার্থী ঝরে পড়া', en: 'school dropout rate' } }, { it: 'irreversibile', tr: { bn: 'অপরিবর্তনীয়', en: 'irreversible' } }],
    grammarHighlights: [{ excerpt: 'davvero la dispersione… era aumentata?', note: { bn: 'উদ্ধৃতি চিহ্ন ছাড়াই চরিত্রের চিন্তাপ্রবাহ (discorso indiretto libero)।', en: 'Free indirect speech captures interior reflection directly.' }, grammarId: 'discorso-indiretto-libero' }],
    relatedGrammarIds: ['discorso-indiretto-libero'],
    questions: [
      { id: 'rd-b2-19-q1', prompt: { bn: 'অপরিবর্তনীয় ব্যবধান এড়াতে প্রধান শিক্ষক কী করার সিদ্ধান্ত নিলেন?', en: 'What did the headteacher decide to do to prevent an irreversible gap?' }, options: ['অবিলম্বে পরিবারগুলোকে ডাকা', 'বিদ্যালয় বন্ধ করা', 'তালিকা মুছে ফেলা', 'নতুন ছুটি ঘোষণা'], answer: 0, explanation: { bn: 'সঠিক উত্তর: অবিলম্বে পরিবারগুলোকে ডাকা — পাঠ্যাংশে বলা হয়েছে: «নষ্ট করার মতো সময় ছিল না; একটি অপরিবর্তনীয় ব্যবধান এড়াতে তিনি এখনই পরিবারগুলোকে ডাকবেন।» (avrebbe convocato subito le famiglie)।', en: 'He would summon the families immediately.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-20', level: 'B2', kind: 'article', titleIt: 'Diritti del lavoro e garanzie formali', title: { bn: 'শ্রম অধিকার ও আনুষ্ঠানিক সুরক্ষা', en: 'Labour rights and formal safeguards' },
    storyId: 'st-b2-20',
    paragraphs: [
      { it: 'Il decreto in base al quale si valuta la legittimità del licenziamento illegittimo tutela anzitutto la dignità professionale.', tr: { bn: 'যে ডিক্রির ভিত্তিতে বেআইনি বরখাস্তের বৈধতা বিচার করা হয়, তা সর্বাগ্রে পেশাগত মর্যাদাকে সুরক্ষা দেয়।', en: 'The decree on the basis of which unfair dismissal is judged protects professional dignity first and foremost.' } },
      { it: 'Inoltre, gli accordi i cui contenuti contengano una clausola vessatoria non approvata espressamente restano privi di effetto.', tr: { bn: 'অধিকন্তু, যে চুক্তির বিষয়বস্তুতে স্পষ্টভাবে অনুমোদিত নয় এমন কোনো অসম ধারা থাকে, সেগুলো কার্যকর হয় না।', en: 'Furthermore, agreements whose contents include an unfair clause not expressly approved remain without effect.' } },
    ],
    vocabHighlights: [{ it: 'licenziamento illegittimo', tr: { bn: 'বেআইনি বরখাস্ত', en: 'unfair dismissal' } }, { it: 'clausola vessatoria', tr: { bn: 'অসম চুক্তি ধারা', en: 'unfair contract clause' } }],
    grammarHighlights: [{ excerpt: 'in base al quale / i cui contenuti', note: { bn: 'আনুষ্ঠানিক লিখিত ভাষায় il quale ও cui।', en: 'Formal relative pronouns ensure unambiguous reference.' }, grammarId: 'relativi-formali-b2' }],
    relatedGrammarIds: ['relativi-formali-b2'],
    questions: [
      { id: 'rd-b2-20-q1', prompt: { bn: 'স্পষ্ট অনুমোদন ছাড়া অসম ধারা থাকলে চুক্তির কী অবস্থা হয়?', en: 'What happens to an agreement with an unapproved unfair clause?' }, options: ['তা অকার্যকর থাকে', 'তা দ্বিগুণ সময় চলে', 'স্বয়ংক্রিয়ভাবে বদলে যায়', 'শুধু মৌখিক হয়'], answer: 0, explanation: { bn: 'সঠিক উত্তর: তা অকার্যকর থাকে — পাঠ্যাংশে বলা হয়েছে: «অধিকন্তু, যে চুক্তির বিষয়বস্তুতে স্পষ্টভাবে অনুমোদিত নয় এমন কোনো অসম ধারা থাকে, সেগুলো কার্যকর হয় না।» (restano privi di effetto)।', en: 'They remain without effect.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-21', level: 'B2', kind: 'essay', titleIt: 'Rigore metodologico e verifica empirica', title: { bn: 'পদ্ধতিগত কঠোরতা ও অভিজ্ঞতালব্ধ যাচাই', en: 'Methodological rigour and empirical verification' },
    storyId: 'st-b2-21',
    paragraphs: [
      { it: 'Chiunque presenti una nuova teoria deve condividere i protocolli sperimentali affinché altri ricercatori possano ripeterli.', tr: { bn: 'যে কেউ নতুন কোনো তত্ত্ব উপস্থাপন করুক না কেন, তাকে পরীক্ষামূলক প্রোটোকল প্রকাশ করতে হবে যাতে অন্যান্য গবেষক তা পুনরাবৃত্তি করতে পারেন।', en: 'Whoever puts forward a new theory must share experimental protocols so that other researchers can replicate them.' } },
      { it: 'Quanto scaturisce dalla verifica empirica rappresenta l’unico fondamento solido su cui costruire il consenso scientifico.', tr: { bn: 'অভিজ্ঞতালব্ধ যাচাই থেকে যা উঠে আসে, সেটিই বৈজ্ঞানিক ঐকমত্য গড়ে তোলার একমাত্র দৃঢ় ভিত্তি।', en: 'What emerges from empirical verification represents the only solid foundation on which to build scientific consensus.' } },
    ],
    vocabHighlights: [{ it: 'verifica empirica', tr: { bn: 'অভিজ্ঞতালব্ধ যাচাই', en: 'empirical verification' } }],
    grammarHighlights: [{ excerpt: 'Chiunque presenti / Quanto scaturisce', note: { bn: 'দ্বৈত সম্বন্ধবাচক সর্বনাম Chiunque ও Quanto।', en: 'Double relative pronouns chiunque and quanto.' }, grammarId: 'doppi-relativi' }],
    relatedGrammarIds: ['doppi-relativi'],
    questions: [
      { id: 'rd-b2-21-q1', prompt: { bn: 'অন্যান্য গবেষক যাতে পরীক্ষা পুনরাবৃত্তি করতে পারেন সেজন্য কী শেয়ার করতে হবে?', en: 'What must be shared so others can replicate experiments?' }, options: ['পরীক্ষামূলক প্রোটোকল', 'ব্যক্তিগত ঠিকানা', 'ব্যাংক বিবরণ', 'স্লাইডের রঙ'], answer: 0, explanation: { bn: 'সঠিক উত্তর: পরীক্ষামূলক প্রোটোকল — পাঠ্যাংশে বলা হয়েছে: «যে কেউ নতুন কোনো তত্ত্ব উপস্থাপন করুক না কেন, তাকে পরীক্ষামূলক প্রোটোকল প্রকাশ করতে হবে যাতে অন্যান্য গবেষক তা পুনরাবৃত্তি করতে পারেন।» (i protocolli sperimentali)।', en: 'Experimental protocols.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-22', level: 'B2', kind: 'dialogue', titleIt: 'Preparazione del bando e della perizia', title: { bn: 'নিয়োগ বিজ্ঞপ্তি ও কারিগরি প্রতিবেদনের প্রস্তুতি', en: 'Preparing the call and technical report' },
    storyId: 'st-b2-22',
    paragraphs: [
      { it: 'Il bando di concorso, gli uffici lo hanno pubblicato stamattina in formato accessibile a tutti i candidati.', tr: { bn: 'নিয়োগ বিজ্ঞপ্তিটা, দপ্তরগুলো আজ সকালে সব প্রার্থীর জন্য সহজলভ্য ফরম্যাটে প্রকাশ করেছে।', en: 'The competition call, the offices published it this morning in an accessible format for all candidates.' } },
      { it: 'Invece la perizia tecnica, l’architetta l’ha già protocollata insieme alle planimetrie originali.', tr: { bn: 'অন্যদিকে কারিগরি প্রতিবেদনটি, স্থপতি ইতিমধ্যে মূল নকশাসহ নিবন্ধন করে ফেলেছেন।', en: 'On the other hand, the technical appraisal, the architect has already logged it together with the original floor plans.' } },
    ],
    vocabHighlights: [{ it: 'bando di concorso', tr: { bn: 'নিয়োগ বিজ্ঞপ্তি', en: 'competition call' } }, { it: 'perizia tecnica', tr: { bn: 'কারিগরি প্রতিবেদন', en: 'technical appraisal' } }],
    grammarHighlights: [{ excerpt: 'Il bando…, lo hanno pubblicato / la perizia…, l’ha… protocollata', note: { bn: 'বামদিকে স্থানান্তরিত কর্ম ও পুনরুল্লিখিত সর্বনাম।', en: 'Left dislocation with matching clitic pronouns.' }, grammarId: 'dislocazione-sinistra' }],
    relatedGrammarIds: ['dislocazione-sinistra'],
    questions: [
      { id: 'rd-b2-22-q1', prompt: { bn: 'স্থপতি কারিগরি প্রতিবেদনের সাথে কী নিবন্ধন করেছেন?', en: 'What did the architect log alongside the appraisal?' }, options: ['মূল নকশাগুলো', 'বিলের রসিদ', 'ভ্রমণ টিকিট', 'অভিনন্দনপত্র'], answer: 0, explanation: { bn: 'সঠিক উত্তর: মূল নকশাগুলো — পাঠ্যাংশে বলা হয়েছে: «অন্যদিকে কারিগরি প্রতিবেদনটি, স্থপতি ইতিমধ্যে মূল নকশাসহ নিবন্ধন করে ফেলেছেন।» (insieme alle planimetrie originali)।', en: 'Together with the original floor plans.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-23', level: 'B2', kind: 'article', titleIt: 'Smontare la bolla informativa', title: { bn: 'তথ্যের বুদবুদ ভাঙা ও সূত্র যাচাই', en: 'Breaking the information bubble' },
    storyId: 'st-b2-23',
    paragraphs: [
      { it: 'L’abbiamo osservato spesso negli ultimi anni quanto rapidamente una notizia infondata possa orientare l’opinione pubblica.', tr: { bn: 'সাম্প্রতিক বছরগুলোতে আমরা প্রায়ই দেখেছি কত দ্রুত একটি ভিত্তিহীন সংবাদ জনমতকে প্রভাবিত করতে পারে।', en: 'We have observed it often in recent years how quickly an unfounded story can steer public opinion.' } },
      { it: 'Per uscire dalla bolla informativa, i lettori attenti la pretendono sempre una seria verifica delle fonti prima di condividere un titolo.', tr: { bn: 'তথ্যের বুদবুদ থেকে বেরোতে সচেতন পাঠকেরা কোনো শিরোনাম শেয়ার করার আগে সর্বদা গম্ভীর সূত্র যাচাই দাবি করেন।', en: 'To step outside the filter bubble, attentive readers always demand proper fact-checking before sharing a headline.' } },
    ],
    vocabHighlights: [{ it: 'bolla informativa', tr: { bn: 'তথ্যের বুদবুদ', en: 'information bubble' } }, { it: 'verifica delle fonti', tr: { bn: 'সূত্র যাচাই', en: 'fact-checking' } }],
    grammarHighlights: [{ excerpt: 'L’abbiamo osservato… quanto / la pretendono… una seria verifica', note: { bn: 'ডানদিকে স্থানান্তরে সর্বনামের আগাম ইঙ্গিত।', en: 'Right dislocation foregrounds the verb before revealing the object.' }, grammarId: 'dislocazione-destra' }],
    relatedGrammarIds: ['dislocazione-destra'],
    questions: [
      { id: 'rd-b2-23-q1', prompt: { bn: 'শিরোনাম শেয়ার করার আগে সচেতন পাঠকেরা কী দাবি করেন?', en: 'What do attentive readers demand before sharing a headline?' }, options: ['সূত্র যাচাই', 'বড় ছবি', 'ভিডিও বিজ্ঞাপন', 'ছোট মন্তব্য'], answer: 0, explanation: { bn: 'সঠিক উত্তর: সূত্র যাচাই — পাঠ্যাংশে বলা হয়েছে: «তথ্যের বুদবুদ থেকে বেরোতে সচেতন পাঠকেরা কোনো শিরোনাম শেয়ার করার আগে সর্বদা গম্ভীর সূত্র যাচাই দাবি করেন।» (una seria verifica delle fonti)।', en: 'Serious source verification.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-24', level: 'B2', kind: 'opinion', titleIt: 'Il ruolo democratico del giornalismo d’inchiesta', title: { bn: 'অনুসন্ধানী সাংবাদিকতার গণতান্ত্রিক ভূমিকা', en: 'Democratic role of investigative journalism' },
    storyId: 'st-b2-24',
    paragraphs: [
      { it: 'È grazie al giornalismo d’inchiesta che molte pratiche opache emergono davanti all’opinione pubblica.', tr: { bn: 'অনুসন্ধানী সাংবাদিকতার কল্যাণেই অনেক অস্বচ্ছ কর্মকাণ্ড জনসমক্ষে প্রকাশ পায়।', en: 'It is thanks to investigative journalism that many opaque practices come to light before the public.' } },
      { it: 'Non è il sensazionalismo che difende la libertà di stampa, bensì il lavoro paziente di verifica sui documenti ufficiali.', tr: { bn: 'চাঞ্চল্য সৃষ্টি নয়, বরং দাপ্তরিক নথিপত্রের ওপর ধৈর্যশীল যাচাইয়ের কাজই সংবাদপত্রের স্বাধীনতাকে রক্ষা করে।', en: 'It is not sensationalism that defends press freedom, rather patient verification work on official documents.' } },
    ],
    vocabHighlights: [{ it: 'giornalismo d’inchiesta', tr: { bn: 'অনুসন্ধানী সাংবাদিকতা', en: 'investigative journalism' } }, { it: 'libertà di stampa', tr: { bn: 'সংবাদপত্রের স্বাধীনতা', en: 'press freedom' } }],
    grammarHighlights: [{ excerpt: 'È grazie al giornalismo… che / Non è il sensazionalismo che', note: { bn: 'খণ্ডিত বাক্যে ইতিবাচক ও বিপরীত ফোকাস।', en: 'Cleft sentences contrast focus cleanly.' }, grammarId: 'frase-scissa' }],
    relatedGrammarIds: ['frase-scissa'],
    questions: [
      { id: 'rd-b2-24-q1', prompt: { bn: 'সংবাদপত্রের স্বাধীনতাকে সত্যিকার অর্থে কী রক্ষা করে?', en: 'What truly defends press freedom?' }, options: ['দাপ্তরিক নথিপত্রের ধৈর্যশীল যাচাই', 'চাঞ্চল্যকর শিরোনাম', 'গুজব ছড়ানো', 'বিজ্ঞাপন বৃদ্ধি'], answer: 0, explanation: { bn: 'সঠিক উত্তর: দাপ্তরিক নথিপত্রের ধৈর্যশীল যাচাই — পাঠ্যাংশে বলা হয়েছে: «চাঞ্চল্য সৃষ্টি নয়, বরং দাপ্তরিক নথিপত্রের ওপর ধৈর্যশীল যাচাইয়ের কাজই সংবাদপত্রের স্বাধীনতাকে রক্ষা করে।» (il lavoro paziente di verifica sui documenti ufficiali)।', en: 'Patient verification of official documents.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-25', level: 'B2', kind: 'article', titleIt: 'Siccità prolungata e mobilità dei ricercatori', title: { bn: 'দীর্ঘস্থায়ী খরা ও গবেষকদের দেশান্তর', en: 'Prolonged drought and researcher mobility' },
    storyId: 'st-b2-25',
    paragraphs: [
      { it: 'Dalla siccità prolungata nascono sfide inedite per l’irrigazione e per l’equilibrio delle falde acquifere.', tr: { bn: 'দীর্ঘস্থায়ী খরা থেকে সেচ ব্যবস্থা ও ভূগর্ভস্থ জলাধারের ভারসাম্যের জন্য নজিরবিহীন চ্যালেঞ্জের সৃষ্টি হচ্ছে।', en: 'From the prolonged drought arise unprecedented challenges for irrigation and groundwater balance.' } },
      { it: 'Allo stesso tempo preoccupa gli atenei la fuga dei cervelli: scelgono l’estero troppi giovani dottori di ricerca.', tr: { bn: 'একই সময়ে বিশ্ববিদ্যালয়গুলোকে উদ্বিগ্ন করছে মেধা পাচার: অনেক তরুণ গবেষক বিদেশ বেছে নিচ্ছেন।', en: 'At the same time universities are worried by brain drain: too many young PhD graduates choose abroad.' } },
    ],
    vocabHighlights: [{ it: 'siccità prolungata', tr: { bn: 'দীর্ঘস্থায়ী খরা', en: 'prolonged drought' } }, { it: 'fuga dei cervelli', tr: { bn: 'মেধা পাচার', en: 'brain drain' } }],
    grammarHighlights: [{ excerpt: 'nascono sfide / preoccupa… la fuga / scelgono l’estero troppi giovani', note: { bn: 'নতুন তথ্য হিসেবে কর্তাকে ক্রিয়ার পরে স্থাপন।', en: 'Subject inversion puts spotlight on the subject.' }, grammarId: 'inversione-soggetto' }],
    relatedGrammarIds: ['inversione-soggetto'],
    questions: [
      { id: 'rd-b2-25-q1', prompt: { bn: 'পাঠ্যে বিশ্ববিদ্যালয়গুলো কী নিয়ে উদ্বিগ্ন?', en: 'What worries universities in the passage?' }, options: ['তরুণ গবেষকদের বিদেশে চলে যাওয়া (মেধা পাচার)', 'পাঠাগারের রং', 'শীতকালীন ছুটি', 'খেলাধুলার মাঠ'], answer: 0, explanation: { bn: 'সঠিক উত্তর: তরুণ গবেষকদের বিদেশে চলে যাওয়া (মেধা পাচার) — পাঠ্যাংশে বলা হয়েছে: «একই সময়ে বিশ্ববিদ্যালয়গুলোকে উদ্বিগ্ন করছে মেধা পাচার: অনেক তরুণ গবেষক বিদেশ বেছে নিচ্ছেন।» (la fuga dei cervelli)।', en: 'Brain drain.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-26', level: 'B2', kind: 'essay', titleIt: 'Nominalizzazione e chiarezza istituzionale', title: { bn: 'বিশেষ্যায়ন ও প্রাতিষ্ঠানিক স্পষ্টতা', en: 'Nominalisation and institutional clarity' },
    storyId: 'st-b2-26',
    paragraphs: [
      { it: 'L’approvazione della riforma, la semplificazione degli sportelli e il potenziamento del trasporto pubblico migliorano l’efficacia amministrativa.', tr: { bn: 'সংস্কারের অনুমোদন, সেবাকেন্দ্রগুলোর সরলীকরণ এবং গণপরিবহনের শক্তিশালীকরণ প্রশাসনিক কার্যকারিতা বাড়ায়।', en: 'Approval of the reform, simplification of service desks, and strengthening of public transport improve administrative effectiveness.' } },
      { it: 'Tuttavia, un eccesso di sostantivi astratti rischia di oscurare le responsabilità concrete di chi attua gli interventi.', tr: { bn: 'তবুও, অতিরিক্ত বিমূর্ত বিশেষ্যের ব্যবহার যাঁরা পদক্ষেপ বাস্তবায়ন করেন তাঁদের সুনির্দিষ্ট দায়িত্বকে আড়াল করার ঝুঁকি রাখে।', en: 'However, an excess of abstract nouns risks obscuring the concrete responsibilities of those implementing actions.' } },
    ],
    vocabHighlights: [{ it: 'l’efficacia', tr: { bn: 'কার্যকারিতা', en: 'effectiveness' } }],
    grammarHighlights: [{ excerpt: 'L’approvazione / la semplificazione / il potenziamento', note: { bn: 'ক্রিয়া থেকে গঠিত বিশেষ্যায়িত পদগুচ্ছ।', en: 'Nominalised nouns condense policies succinctly.' }, grammarId: 'nominalizzazione-b2' }],
    relatedGrammarIds: ['nominalizzazione-b2'],
    questions: [
      { id: 'rd-b2-26-q1', prompt: { bn: 'অতিরিক্ত বিমূর্ত বিশেষ্যের ঝুঁকি কী?', en: 'What is the risk of overusing abstract nouns?' }, options: ['বাস্তবায়নকারীদের সুনির্দিষ্ট দায়িত্ব আড়াল হওয়া', 'বাক্য খুব ছোট হওয়া', 'ব্যাকরণ সহজ হওয়া', 'অনুবাদ কমে যাওয়া'], answer: 0, explanation: { bn: 'সঠিক উত্তর: বাস্তবায়নকারীদের সুনির্দিষ্ট দায়িত্ব আড়াল হওয়া — পাঠ্যাংশে বলা হয়েছে: «তবুও, অতিরিক্ত বিমূর্ত বিশেষ্যের ব্যবহার যাঁরা পদক্ষেপ বাস্তবায়ন করেন তাঁদের সুনির্দিষ্ট দায়িত্বকে আড়াল করার ঝুঁকি রাখে।» (oscurare le responsabilità concrete)।', en: 'Obscuring concrete responsibilities.' } },
    ],
  }),
];
