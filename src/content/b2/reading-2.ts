import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const B2_READING_2: ReadingPassage[] = [
  buildReading({
    id: 'rd-b2-27', level: 'B2', kind: 'essay', titleIt: 'Strutturare un saggio sulla transizione ecologica', title: { bn: 'পরিবেশগত রূপান্তর নিয়ে প্রবন্ধ গঠন', en: 'Structuring an essay on green transition' },
    storyId: 'st-b2-27',
    paragraphs: [
      { it: 'In primo luogo la transizione ecologica richiede investimenti nelle reti elettriche; pertanto occorrono piani pubblici stabili nel tempo.', tr: { bn: 'প্রথমত, পরিবেশগত রূপান্তরের জন্য বিদ্যুৎ গ্রিডে বিনিয়োগ প্রয়োজন; অতএব সময়ের সাথে স্থিতিশীল সরকারি পরিকল্পনা দরকার।', en: 'First of all, the green transition requires investment in power grids; therefore stable long-term public plans are needed.' } },
      { it: 'Tant’è vero che in ultima analisi il benessere economico e la coesione sociale procedono di pari passo con la tutela ambientale.', tr: { bn: 'বস্তুত, চূড়ান্ত বিচারে অর্থনৈতিক কল্যাণ এবং সামাজিক সংহতি পরিবেশ সুরক্ষার সাথেই সমান তালে এগোয়।', en: 'So much so that in the final analysis economic well-being and social cohesion go hand in hand with environmental protection.' } },
    ],
    vocabHighlights: [{ it: 'in primo luogo', tr: { bn: 'প্রথমত', en: 'first of all' } }, { it: 'pertanto', tr: { bn: 'অতএব', en: 'therefore' } }],
    grammarHighlights: [{ excerpt: 'In primo luogo… pertanto… in ultima analisi', note: { bn: 'প্রবন্ধের ক্রম, ফলাফল ও উপসংহার সংযোজক।', en: 'Argumentative markers organise thesis, consequence, and conclusion.' }, grammarId: 'connettivi-argomentativi' }],
    relatedGrammarIds: ['connettivi-argomentativi'],
    questions: [
      { id: 'rd-b2-27-q1', prompt: { bn: 'পরিবেশগত রূপান্তরের জন্য প্রথমে কী প্রয়োজন?', en: 'What is needed first for the green transition?' }, options: ['বিদ্যুৎ গ্রিডে বিনিয়োগ', 'সব ট্রেন বন্ধ', 'নতুন ট্যাক্স বাতিল', 'কাগজ আমদানি'], answer: 0, explanation: { bn: 'সঠিক উত্তর: বিদ্যুৎ গ্রিডে বিনিয়োগ — পাঠ্যাংশে বলা হয়েছে: «প্রথমত, পরিবেশগত রূপান্তরের জন্য বিদ্যুৎ গ্রিডে বিনিয়োগ প্রয়োজন; অতএব সময়ের সাথে স্থিতিশীল সরকারি পরিকল্পনা দরকার।» (investimenti nelle reti elettriche)।', en: 'Investment in power grids.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-28', level: 'B2', kind: 'article', titleIt: 'Spiegare l’inflazione con chiarezza', title: { bn: 'মুদ্রাস্ফীতি সহজভাবে ব্যাখ্যা করা', en: 'Explaining inflation clearly' },
    storyId: 'st-b2-28',
    paragraphs: [
      { it: 'Quando i prezzi crescono più dei salari si verifica un calo del potere d’acquisto, vale a dire la possibilità reale di comprare beni essenziali.', tr: { bn: 'মজুরির চেয়ে দাম বেশি বাড়লে ক্রয়ক্ষমতা হ্রাস পায়, অর্থাৎ নিত্যপ্রয়োজনীয় পণ্য কেনার প্রকৃত সামর্থ্য কমে যায়।', en: 'When prices grow faster than wages, purchasing power falls, that is to say the real ability to buy essential goods.' } },
      { it: 'In altri termini, se l’aliquota fiscale non viene calibrata, le famiglie vedono diminuire i propri risparmi mensili.', tr: { bn: 'অন্য ভাষায়, করের হার সমন্বয় না করলে পরিবারগুলোর মাসিক সঞ্চয় কমে যায়।', en: 'In other words, if the tax rate is not calibrated, households see their monthly savings shrink.' } },
    ],
    vocabHighlights: [{ it: 'potere d’acquisto', tr: { bn: 'ক্রয়ক্ষমতা', en: 'purchasing power' } }, { it: 'l’aliquota', tr: { bn: 'করের হার', en: 'tax rate' } }],
    grammarHighlights: [{ excerpt: 'vale a dire / In altri termini', note: { bn: 'পুনর্ব্যাখ্যা সংযোজক জটিল অর্থনীতি সহজ করে।', en: 'Reformulation markers unpack technical terms.' }, grammarId: 'connettivi-riformulazione' }],
    relatedGrammarIds: ['connettivi-riformulazione'],
    questions: [
      { id: 'rd-b2-28-q1', prompt: { bn: 'করের হার সমন্বয় না করলে কী কমে যায়?', en: 'What shrinks if tax rates are not calibrated?' }, options: ['পরিবারগুলোর মাসিক সঞ্চয়', 'জনসংখ্যা', 'সূর্যালোক', 'সমুদ্রতট'], answer: 0, explanation: { bn: 'সঠিক উত্তর: পরিবারগুলোর মাসিক সঞ্চয় — পাঠ্যাংশে বলা হয়েছে: «অন্য ভাষায়, করের হার সমন্বয় না করলে পরিবারগুলোর মাসিক সঞ্চয় কমে যায়।» (i propri risparmi mensili)।', en: 'Monthly savings.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-29', level: 'B2', kind: 'notice', titleIt: 'Tutele salariali e responsabilità d’impresa', title: { bn: 'বেতন সুরক্ষা ও প্রাতিষ্ঠানিক দায়বদ্ধতা', en: 'Pay safeguards and corporate responsibility' },
    storyId: 'st-b2-29',
    paragraphs: [
      { it: 'Alla luce dei regolamenti europei, il trattamento di fine rapporto deve essere liquidato in conformità con le tabelle vigenti.', tr: { bn: 'ইউরোপীয় বিধিমালার আলোকে, চাকরি সমাপ্তিকালীন ভাতা প্রচলিত তালিকা অনুসারে পরিশোধ করতে হবে।', en: 'In light of European rules, severance pay must be settled in accordance with current schedules.' } },
      { it: 'A prescindere dalla forma societaria, nessuna azienda può ridurre costi a scapito della sicurezza sul lavoro.', tr: { bn: 'কোম্পানির ধরন নির্বিশেষে, কোনো প্রতিষ্ঠানই কর্মক্ষেত্রের নিরাপত্তাকে ক্ষতিগ্রস্ত করে ব্যয় কমাতে পারে না।', en: 'Regardless of corporate form, no business may cut costs at the expense of workplace safety.' } },
    ],
    vocabHighlights: [{ it: 'in conformità con', tr: { bn: 'সামঞ্জস্য রেখে', en: 'in accordance with' } }, { it: 'a scapito di', tr: { bn: 'ক্ষতির বিনিময়ে', en: 'at the expense of' } }],
    grammarHighlights: [{ excerpt: 'Alla luce dei / in conformità con / A prescindere da / a scapito della', note: { bn: 'আইনি-নীতিগত পদান্বয়ী অব্যয়গুচ্ছ।', en: 'Formal prepositional phrases define exact scope.' }, grammarId: 'locuzioni-preposizionali-b2' }],
    relatedGrammarIds: ['locuzioni-preposizionali-b2'],
    questions: [
      { id: 'rd-b2-29-q1', prompt: { bn: 'কোন জিনিসের বিনিময়ে ব্যয় কমানো নিষিদ্ধ?', en: 'At the expense of what may costs never be cut?' }, options: ['কর্মক্ষেত্রের নিরাপত্তা', 'বিজ্ঞাপন', 'কফির মেশিন', 'রং'], answer: 0, explanation: { bn: 'সঠিক উত্তর: কর্মক্ষেত্রের নিরাপত্তা — পাঠ্যাংশে বলা হয়েছে: «কোম্পানির ধরন নির্বিশেষে, কোনো প্রতিষ্ঠানই কর্মক্ষেত্রের নিরাপত্তাকে ক্ষতিগ্রস্ত করে ব্যয় কমাতে পারে না।» (della sicurezza sul lavoro)।', en: 'Workplace safety.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-30', level: 'B2', kind: 'story', titleIt: 'Venire a capo di un malinteso', title: { bn: 'ভুল বোঝাবুঝির কূলকিনারা করা', en: 'Getting to the bottom of a misunderstanding' },
    storyId: 'st-b2-30',
    paragraphs: [
      { it: 'All’inizio sembrava impossibile venirne a capo, perché entrambe le parti temevano un nuovo malinteso sui preventivi.', tr: { bn: 'শুরুতে বিষয়টি সমাধান করা অসম্ভব মনে হচ্ছিল, কারণ উভয় পক্ষই প্রাক্কলন নিয়ে নতুন ভুল বোঝাবুঝির আশঙ্কা করছিল।', en: 'At first it seemed impossible to get to the bottom of it, because both sides feared a fresh misunderstanding over estimates.' } },
      { it: 'Quando però i responsabili si sono parlati apertamente, nessuno se l’è presa e tutti ce l’hanno messa tutta per trovare l’intesa.', tr: { bn: 'তবে দায়িত্বপ্রাপ্ত ব্যক্তিরা খোলামেলা কথা বলার পর কেউই মনে কষ্ট নেননি এবং সবাই সমঝোতায় পৌঁছাতে সর্বাত্মক চেষ্টা করেছেন।', en: 'Yet once the managers spoke openly, no one took offence and everyone gave it their all to reach agreement.' } },
    ],
    vocabHighlights: [{ it: 'il malinteso', tr: { bn: 'ভুল বোঝাবুঝি', en: 'misunderstanding' } }],
    grammarHighlights: [{ excerpt: 'venirne a capo / se l’è presa / ce l’hanno messa tutta', note: { bn: 'দৈনন্দিন ও পেশাদার আলোচনায় বাগধারাগত প্রোনোমিনাল ক্রিয়া।', en: 'Idiomatic pronominal verbs convey attitude and effort.' }, grammarId: 'verbi-procomplementari' }],
    relatedGrammarIds: ['verbi-procomplementari'],
    questions: [
      { id: 'rd-b2-30-q1', prompt: { bn: 'খোলামেলা আলোচনার ফলে কী ঘটেছিল?', en: 'What happened after managers spoke openly?' }, options: ['কেউ মনে কষ্ট নেয়নি ও সমঝোতায় পৌঁছেছে', 'চুক্তি বাতিল হয়েছে', 'সভা ভেঙে গেছে', 'মামলা হয়েছে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: কেউ মনে কষ্ট নেয়নি ও সমঝোতায় পৌঁছেছে — পাঠ্যাংশে বলা হয়েছে: «তবে দায়িত্বপ্রাপ্ত ব্যক্তিরা খোলামেলা কথা বলার পর কেউই মনে কষ্ট নেননি এবং সবাই সমঝোতায় পৌঁছাতে সর্বাত্মক চেষ্টা করেছেন।» (nessuno se l’è presa e tutti ce l’hanno messa tutta)।', en: 'Nobody took offence and they worked towards agreement.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-31', level: 'B2', kind: 'travel', titleIt: 'Traversata alpina e scelta dell’ausiliare', title: { bn: 'আলপাইন যাত্রা ও সহায়ক ক্রিয়ার ব্যবহার', en: 'Alpine crossing and auxiliary choice' },
    storyId: 'st-b2-31',
    paragraphs: [
      { it: 'Il gruppo ha salito il colle all’alba per fotografare la vallata, poi è sceso rapidamente quando il vento ha cominciato a persistere.', tr: { bn: 'উপত্যকার ছবি তুলতে দলটি ভোরবেলায় গিরিপথে উঠেছে, তারপর বাতাস বইতে থাকায় দ্রুত নিচে নেমে এসেছে।', en: 'The group climbed the pass at dawn to photograph the valley, then came down swiftly when the wind began to persist.' } },
      { it: 'Lunghe tappe hanno corso lungo la cresta e hanno vissuto una giornata memorabile tra i rifugi.', tr: { bn: 'চূড়ার পথ ধরে তাঁরা দীর্ঘ পথ দৌড়েছেন এবং পাহাড়ি আশ্রয়কেন্দ্রগুলোর মাঝে এক স্মরণীয় দিন কাটিয়েছেন।', en: 'They ran long stages along the ridge and lived a memorable day among the mountain refuges.' } },
    ],
    vocabHighlights: [{ it: 'persistere', tr: { bn: 'অব্যাহত থাকা / লেগে থাকা', en: 'to persist' } }],
    grammarHighlights: [{ excerpt: 'ha salito il colle / è sceso / hanno corso', note: { bn: 'সরাসরি কর্মের উপস্থিতি অনুসারে essere ও avere নির্বাচন।', en: 'Transitive objects select avere; intransitive destination motion selects essere.' }, grammarId: 'verbi-doppio-ausiliare' }],
    relatedGrammarIds: ['verbi-doppio-ausiliare'],
    questions: [
      { id: 'rd-b2-31-q1', prompt: { bn: 'দলটি কেন দ্রুত নিচে নেমে এসেছিল?', en: 'Why did the group descend rapidly?' }, options: ['কারণ বাতাস একটানা বইতে শুরু করেছিল', 'কারণ অন্ধকার হয়ে গিয়েছিল', 'কারণ ক্যামেরা ভেঙে গিয়েছিল', 'কারণ রাস্তা ধসে পড়েছিল'], answer: 0, explanation: { bn: 'সঠিক উত্তর: কারণ বাতাস একটানা বইতে শুরু করেছিল — পাঠ্যাংশে বলা হয়েছে: «উপত্যকার ছবি তুলতে দলটি ভোরবেলায় গিরিপথে উঠেছে, তারপর বাতাস বইতে থাকায় দ্রুত নিচে নেমে এসেছে।» (quando il vento ha cominciato a persistere)।', en: 'When the wind began to persist.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-32', level: 'B2', kind: 'story', titleIt: 'Gestire la cartella clinica prima del ricovero', title: { bn: 'ভর্তির আগে চিকিৎসা নথি প্রস্তুত করা', en: 'Arranging medical files before admission' },
    storyId: 'st-b2-32',
    paragraphs: [
      { it: 'Prima dell’intervento chirurgico, la paziente si è fatta stampare la cartella clinica completa per consultare un secondo specialista.', tr: { bn: 'অস্ত্রোপচারের আগে রোগী দ্বিতীয় একজন বিশেষজ্ঞের পরামর্শ নিতে সম্পূর্ণ চিকিৎসা নথি প্রিন্ট করিয়ে নিয়েছেন।', en: 'Before the surgical procedure, the patient had her complete medical file printed out to consult a second specialist.' } },
      { it: 'Non si è lasciata scoraggiare dall’attesa e ha verificato personalmente ogni referto diagnostico.', tr: { bn: 'অপেক্ষায় তিনি নিরুৎসাহিত হননি এবং নিজে প্রতিটি রোগনির্ণয় প্রতিবেদন যাচাই করেছেন।', en: 'She did not let herself be discouraged by the wait and personally checked every diagnostic report.' } },
    ],
    vocabHighlights: [{ it: 'cartella clinica', tr: { bn: 'চিকিৎসা নথি', en: 'medical file' } }, { it: 'intervento chirurgico', tr: { bn: 'অস্ত্রোপচার', en: 'surgical operation' } }],
    grammarHighlights: [{ excerpt: 'si è fatta stampare / si è lasciata scoraggiare', note: { bn: 'farsi ও lasciarsi যুক্ত আত্মবাচক প্রযোজক বাক্যে essere বসে।', en: 'Reflexive causatives always take auxiliary essere.' }, grammarId: 'causativi-riflessivi' }],
    relatedGrammarIds: ['causativi-riflessivi'],
    questions: [
      { id: 'rd-b2-32-q1', prompt: { bn: 'রোগী কেন সম্পূর্ণ চিকিৎসা নথি প্রিন্ট করিয়েছিলেন?', en: 'Why did the patient have the full file printed?' }, options: ['দ্বিতীয় বিশেষজ্ঞের পরামর্শ নিতে', 'ভ্রমণ বীমার জন্য', 'ব্যাংকে জমা দিতে', 'প্রেস বিজ্ঞপ্তির জন্য'], answer: 0, explanation: { bn: 'সঠিক উত্তর: দ্বিতীয় বিশেষজ্ঞের পরামর্শ নিতে — পাঠ্যাংশে বলা হয়েছে: «অস্ত্রোপচারের আগে রোগী দ্বিতীয় একজন বিশেষজ্ঞের পরামর্শ নিতে সম্পূর্ণ চিকিৎসা নথি প্রিন্ট করিয়ে নিয়েছেন।» (per consultare un secondo specialista)।', en: 'To consult a second specialist.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-33', level: 'B2', kind: 'article', titleIt: 'Clausole di attesa prima di ratificare un trattato', title: { bn: 'চুক্তি অনুমোদনের আগে সতর্ক অবস্থান', en: 'Waiting clauses before ratifying a treaty' },
    storyId: 'st-b2-33',
    paragraphs: [
      { it: 'L’accordo commerciale è molto più complesso di quanto non appaia nei brevi comunicati stampa.', tr: { bn: 'বাণিজ্য চুক্তিটি সংক্ষিপ্ত প্রেস বিজ্ঞপ্তিতে যতটা মনে হয় তার চেয়েও অনেক বেশি জটিল।', en: 'The trade agreement is much more complex than it appears in brief press releases.' } },
      { it: 'Finché i parlamenti nazionali non ratifichino il testo definitivo, l’intesa non potrà produrre effetti vincolanti.', tr: { bn: 'জাতীয় সংসদগুলো চূড়ান্ত পাঠ অনুমোদন না করা পর্যন্ত সমঝোতাটি বাধ্যতামূলক প্রভাব তৈরি করতে পারবে না।', en: 'Until national parliaments ratify the final text, the agreement cannot produce binding effects.' } },
    ],
    vocabHighlights: [{ it: 'ratificare', tr: { bn: 'আনুষ্ঠানিকভাবে অনুমোদন করা', en: 'to ratify' } }],
    grammarHighlights: [{ excerpt: 'più complesso di quanto non appaia / Finché… non ratifichino', note: { bn: 'তুলনা ও সময়সীমায় শৈলীগত non (pleonastica)।', en: 'Expletive non in formal comparisons and until-clauses.' }, grammarId: 'negazione-pleonastica' }],
    relatedGrammarIds: ['negazione-pleonastica'],
    questions: [
      { id: 'rd-b2-33-q1', prompt: { bn: 'চুক্তি বাধ্যতামূলক হওয়ার শর্ত কী?', en: 'What is required for the agreement to take binding effect?' }, options: ['জাতীয় সংসদগুলোর অনুমোদন', 'সংবাদপত্রের প্রশংসা', 'একটি প্রদর্শনী', 'জরিমানা পরিশোধ'], answer: 0, explanation: { bn: 'সঠিক উত্তর: জাতীয় সংসদগুলোর অনুমোদন — পাঠ্যাংশে বলা হয়েছে: «জাতীয় সংসদগুলো চূড়ান্ত পাঠ অনুমোদন না করা পর্যন্ত সমঝোতাটি বাধ্যতামূলক প্রভাব তৈরি করতে পারবে না।» (Finché i parlamenti nazionali non ratifichino il testo)।', en: 'Ratification by national parliaments.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-34', level: 'B2', kind: 'opinion', titleIt: 'Equilibrio tra stile e profondità narrativa', title: { bn: 'রচনাশৈলী ও বর্ণনার গভীরতার ভারসাম্য', en: 'Balance between style and narrative depth' },
    storyId: 'st-b2-34',
    paragraphs: [
      { it: 'La voce narrante di quest’opera è tanto sobria nella forma quanto incisiva nell’analizzare i conflitti familiari.', tr: { bn: 'এই রচনার বর্ণনাকারীর কণ্ঠ গঠনে যতটা সংযত, পারিবারিক দ্বন্দ্ব বিশ্লেষণে ঠিক ততটাই তীক্ষ্ণ।', en: 'The narrative voice of this work is as restrained in form as it is incisive in analysing family conflicts.' } },
      { it: 'Più il lettore si sofferma sulle scelte lessicali, più scopre risonanze sottili tra i vari capitoli.', tr: { bn: 'পাঠক শব্দচয়নের ওপর যত বেশি মনোযোগ দেন, বিভিন্ন অধ্যায়ের মধ্যে সূক্ষ্ম অনুরণন ততই বেশি আবিষ্কার করেন।', en: 'The more the reader pauses over lexical choices, the more subtle resonances they uncover across chapters.' } },
    ],
    vocabHighlights: [{ it: 'voce narrante', tr: { bn: 'বর্ণনাকারীর কণ্ঠ', en: 'narrative voice' } }],
    grammarHighlights: [{ excerpt: 'tanto sobria… quanto incisiva / Più…, più scopre', note: { bn: 'সাদৃশ্য ও সমানুপাতিক তুলনা কাঠামো।', en: 'Analogical tanto… quanto and correlative più… più.' }, grammarId: 'comparativi-analogici' }],
    relatedGrammarIds: ['comparativi-analogici'],
    questions: [
      { id: 'rd-b2-34-q1', prompt: { bn: 'পাঠকেরা শব্দচয়ন লক্ষ্য করলে কী খুঁজে পান?', en: 'What do readers discover by noticing lexical choices?' }, options: ['অধ্যায়গুলোর মধ্যে সূক্ষ্ম অনুরণন', 'অতিরিক্ত পাদটীকা', 'বানান ভুল', 'সংক্ষিপ্তসারের অভাব'], answer: 0, explanation: { bn: 'সঠিক উত্তর: অধ্যায়গুলোর মধ্যে সূক্ষ্ম অনুরণন — পাঠ্যাংশে বলা হয়েছে: «পাঠক শব্দচয়নের ওপর যত বেশি মনোযোগ দেন, বিভিন্ন অধ্যায়ের মধ্যে সূক্ষ্ম অনুরণন ততই বেশি আবিষ্কার করেন।» (risonanze sottili tra i vari capitoli)।', en: 'Subtle resonances between chapters.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-35', level: 'B2', kind: 'article', titleIt: 'Dal minimo dettaglio alla massima chiarezza', title: { bn: 'ন্যূনতম খুঁটিনাটি থেকে সর্বোচ্চ স্পষ্টতা', en: 'From minimal detail to maximum clarity' },
    storyId: 'st-b2-35',
    paragraphs: [
      { it: 'Anche in una pubblicazione accademica celeberrima, un margine d’errore ritenuto minimo può modificare le conclusioni.', tr: { bn: 'অত্যন্ত বিখ্যাত কোনো একাডেমিক প্রকাশনাতেও ন্যূনতম বিবেচিত একটি ত্রুটির সীমা উপসংহারকে বদলে দিতে পারে।', en: 'Even in a most renowned academic publication, an error margin deemed minimal can alter conclusions.' } },
      { it: 'Per questo gli editori considerano trascurabile nessun controllo e applicano verifiche rigorosissime prima della stampa.', tr: { bn: 'তাই সম্পাদকেরা কোনো যাচাইকেই তুচ্ছ মনে করেন না এবং মুদ্রণের আগে অত্যন্ত কঠোর পরীক্ষা প্রয়োগ করেন।', en: 'For this reason editors deem no check negligible and apply very strict verifications before printing.' } },
    ],
    vocabHighlights: [{ it: 'pubblicazione accademica', tr: { bn: 'একাডেমিক প্রকাশনা', en: 'academic publication' } }, { it: 'trascurabile', tr: { bn: 'তুচ্ছ / নগণ্য', en: 'negligible' } }],
    grammarHighlights: [{ excerpt: 'celeberrima / minimo / rigorosissime', note: { bn: 'সংশ্লেষী পরম শ্রেষ্ঠ (superlativo sintetico) রূপ।', en: 'Irregular and -issimo synthetic superlatives.' }, grammarId: 'superlativo-sintetico' }],
    relatedGrammarIds: ['superlativo-sintetico'],
    questions: [
      { id: 'rd-b2-35-q1', prompt: { bn: 'মুদ্রণের আগে সম্পাদকেরা কী প্রয়োগ করেন?', en: 'What do editors apply before printing?' }, options: ['অত্যন্ত কঠোর যাচাই-বাছাই', 'সংক্ষিপ্ত প্রচ্ছদ', 'অনুবাদ বাদ দেওয়া', 'বিজ্ঞাপন'], answer: 0, explanation: { bn: 'সঠিক উত্তর: অত্যন্ত কঠোর যাচাই-বাছাই — পাঠ্যাংশে বলা হয়েছে: «তাই সম্পাদকেরা কোনো যাচাইকেই তুচ্ছ মনে করেন না এবং মুদ্রণের আগে অত্যন্ত কঠোর পরীক্ষা প্রয়োগ করেন।» (verifiche rigorosissime)।', en: 'Very rigorous checks.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-36', level: 'B2', kind: 'opinion', titleIt: 'Sfumature dell’aggettivo nel racconto pubblico', title: { bn: 'জনসংলাপে বিশেষণের অবস্থানের সূক্ষ্ম অর্থভেদ', en: 'Adjective nuances in public discourse' },
    storyId: 'st-b2-36',
    paragraphs: [
      { it: 'Ascoltare un grande studioso non significa soltanto incontrare una persona alta, bensì riconoscere una mente autorevole nel proprio campo.', tr: { bn: 'একজন মহান গবেষকের কথা শোনা মানে কেবল লম্বা কাউকে দেখা নয়, বরং নিজ ক্ষেত্রে নির্ভরযোগ্য একটি মনকে চেনা।', en: 'Listening to a great scholar does not merely mean meeting a tall person, rather recognising an authoritative mind in their field.' } },
      { it: 'Allo stesso modo, diverse proposte indicano più soluzioni, mentre proposte diverse sottolineano idee davvero originali e distinte.', tr: { bn: 'একইভাবে, “diverse proposte” মানে একাধিক প্রস্তাব, আর “proposte diverse” মানে সত্যিই ভিন্নধর্মী ও স্বতন্ত্র প্রস্তাব।', en: 'Likewise, diverse proposte means several proposals, whereas proposte diverse highlights genuinely distinct ideas.' } },
    ],
    vocabHighlights: [{ it: 'autorevole', tr: { bn: 'নির্ভরযোগ্য / কর্তৃত্বপূর্ণ', en: 'authoritative' } }],
    grammarHighlights: [{ excerpt: 'diverse proposte vs proposte diverse', note: { bn: 'বিশেষ্য-পূর্ব ও বিশেষ্য-পরবর্তী বিশেষণের অর্থভেদ।', en: 'Pre- vs post-nominal adjective placement shifts meaning.' }, grammarId: 'aggettivo-posizione-b2' }],
    relatedGrammarIds: ['aggettivo-posizione-b2'],
    questions: [
      { id: 'rd-b2-36-q1', prompt: { bn: '“proposte diverse” বিশেষ্যের পরে বসলে কী বোঝায়?', en: 'What does post-nominal “proposte diverse” mean?' }, options: ['ভিন্নধর্মী ও স্বতন্ত্র প্রস্তাব', 'মাত্র দুটি প্রস্তাব', 'পুরনো প্রস্তাব', 'বাতিল প্রস্তাব'], answer: 0, explanation: { bn: 'সঠিক উত্তর: ভিন্নধর্মী ও স্বতন্ত্র প্রস্তাব — পাঠ্যাংশে বলা হয়েছে: «একইভাবে, “diverse proposte” মানে একাধিক প্রস্তাব, আর “proposte diverse” মানে সত্যিই ভিন্নধর্মী ও স্বতন্ত্র প্রস্তাব।» (idee davvero originali e distinte)।', en: 'Different/distinct proposals.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-37', level: 'B2', kind: 'article', titleIt: 'Invecchiamento attivo e stime demografiche', title: { bn: 'সক্রিয় বার্ধক্য ও জনমিতিক অনুমান', en: 'Active ageing and demographic estimates' },
    storyId: 'st-b2-37',
    paragraphs: [
      { it: 'L’aumento dell’aspettativa di vita deve dipendere dalla combinazione tra medicina preventiva e stili alimentari equilibrati.', tr: { bn: 'গড় আয়ু বৃদ্ধি নিশ্চয়ই প্রতিরোধমূলক চিকিৎসা ও সুষম খাদ্যাভ্যাসের সমন্বয়ের ওপর নির্ভরশীল।', en: 'The rise in life expectancy must depend on combining preventive medicine with balanced diets.' } },
      { it: 'Secondo gli analisti, un sostegno più deciso alle famiglie potrebbe compensare il rallentamento delle nascite nei prossimi anni.', tr: { bn: 'বিশ্লেষকদের মতে, পরিবারগুলোর প্রতি আরও জোরালো সহায়তা আগামী বছরগুলোতে জন্মহারের ধীরগতি পুষিয়ে দিতে পারে।', en: 'According to analysts, stronger support for families could offset the birth-rate slowdown in coming years.' } },
    ],
    vocabHighlights: [{ it: 'aspettativa di vita', tr: { bn: 'গড় আয়ু', en: 'life expectancy' } }, { it: 'compensare', tr: { bn: 'পুষিয়ে নেওয়া', en: 'to offset' } }],
    grammarHighlights: [{ excerpt: 'deve dipendere / potrebbe compensare', note: { bn: 'যুক্তিগত নিশ্চয়তা (deve) ও সম্ভাবনা (potrebbe)।', en: 'Epistemic modals express deduction vs possibility.' }, grammarId: 'modali-epistemici' }],
    relatedGrammarIds: ['modali-epistemici'],
    questions: [
      { id: 'rd-b2-37-q1', prompt: { bn: 'জন্মহারের ধীরগতি কী পুষিয়ে দিতে পারে?', en: 'What might offset the birth-rate slowdown?' }, options: ['পরিবারগুলোর প্রতি আরও জোরালো সহায়তা', 'ছুটি কমানো', 'পরিবহন বন্ধ করা', 'নতুন টोल'], answer: 0, explanation: { bn: 'সঠিক উত্তর: পরিবারগুলোর প্রতি আরও জোরালো সহায়তা — পাঠ্যাংশে বলা হয়েছে: «বিশ্লেষকদের মতে, পরিবারগুলোর প্রতি আরও জোরালো সহায়তা আগামী বছরগুলোতে জন্মহারের ধীরগতি পুষিয়ে দিতে পারে।» (un sostegno più deciso alle famiglie)।', en: 'Stronger support for families.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-38', level: 'B2', kind: 'email', titleIt: 'Indicazioni formali per il reclamo al gestore', title: { bn: 'সেবা প্রতিষ্ঠানে আনুষ্ঠানিক অভিযোগের নির্দেশনা', en: 'Formal guidelines for complaints to the provider' },
    storyId: 'st-b2-38',
    paragraphs: [
      { it: 'Gentile cliente, qualora riscontri un errore in fattura, si attenga alle istruzioni allegate e ci trasmetta il reclamo formale per iscritto.', tr: { bn: 'মাননীয় গ্রাহক, বিলে কোনো ভুল দেখলে সংযুক্ত নির্দেশনা মেনে চলুন এবং লিখিতভাবে আমাদের কাছে আনুষ্ঠানিক অভিযোগ পাঠান।', en: 'Dear customer, should you find a billing error, please abide by the attached instructions and send us the formal complaint in writing.' } },
      { it: 'Le raccomandiamo inoltre: non ce lo comunichi soltanto a voce, ma ce lo invii anche via posta elettronica certificata.', tr: { bn: 'আমরা আরও অনুরোধ করছি: এটি কেবল মৌখিকভাবে জানাবেন না, বরং প্রত্যয়িত ইমেইলেও আমাদের পাঠান।', en: 'We also recommend: do not notify us merely by voice, rather send it to us via certified email as well.' } },
    ],
    vocabHighlights: [{ it: 'attenersi', tr: { bn: 'মেনে চলা', en: 'to abide by' } }, { it: 'reclamo formale', tr: { bn: 'আনুষ্ঠানিক অভিযোগ', en: 'formal complaint' } }],
    grammarHighlights: [{ excerpt: 'si attenga / ci trasmetta / non ce lo comunichi', note: { bn: 'Lei আদেশসূচকে সর্বনাম সর্বদা ক্রিয়ার আগে থাকে।', en: 'Clitic pronouns precede formal Lei imperatives.' }, grammarId: 'imperativo-formale-pronomi' }],
    relatedGrammarIds: ['imperativo-formale-pronomi'],
    questions: [
      { id: 'rd-b2-38-q1', prompt: { bn: 'অভিযোগ কীভাবে পাঠাতে বলা হয়েছে?', en: 'How should the complaint be sent?' }, options: ['লিখিতভাবে ও প্রত্যয়িত ইমেইলে', 'কেবল ফোনে', 'মুখে বলে', 'সংবাদপত্রে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: লিখিতভাবে ও প্রত্যয়িত ইমেইলে — পাঠ্যাংশে বলা হয়েছে: «মাননীয় গ্রাহক, বিলে কোনো ভুল দেখলে সংযুক্ত নির্দেশনা মেনে চলুন এবং লিখিতভাবে আমাদের কাছে আনুষ্ঠানিক অভিযোগ পাঠান।» (per iscritto e via posta elettronica certificata)।', en: 'In writing and via certified email.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-39', level: 'B2', kind: 'notice', titleIt: 'Criteri per la ripartizione delle spese', title: { bn: 'ব্যয় বণ্টনের নৈর্ব্যক্তিক বিধি', en: 'Criteria for expense allocation' },
    storyId: 'st-b2-39',
    paragraphs: [
      { it: 'Sembra opportuno che la ripartizione delle spese straordinarie venga illustrata con chiarezza prima di votare i lavori.', tr: { bn: 'কাজের ওপর ভোট দেওয়ার আগে বিশেষ খরচের বণ্টন স্পষ্টভাবে ব্যাখ্যা করা সমীচীন বলে মনে হয়।', en: 'It seems appropriate that the allocation of extraordinary expenses be clearly illustrated before voting on the works.' } },
      { it: 'Conviene inoltre che ogni residente riceva il prospetto dettagliato almeno sette giorni prima dell’assemblea.', tr: { bn: 'তা ছাড়া সাধারণ সভার অন্তত সাত দিন আগে প্রতিটি বাসিন্দা যেন বিস্তারিত হিসাবপত্র পান তা-ই সমীচীন।', en: 'Furthermore it is advisable that every resident receive the detailed statement at least seven days before the assembly.' } },
    ],
    vocabHighlights: [{ it: 'ripartizione delle spese', tr: { bn: 'ব্যয়ের বণ্টন', en: 'allocation of expenses' } }],
    grammarHighlights: [{ excerpt: 'Sembra opportuno che… venga / Conviene… che… riceva', note: { bn: 'নৈর্ব্যক্তিক বাক্যাংশের পরে congiuntivo।', en: 'Impersonal predicates require subjunctive.' }, grammarId: 'costrutti-impersonali-b2' }],
    relatedGrammarIds: ['costrutti-impersonali-b2'],
    questions: [
      { id: 'rd-b2-39-q1', prompt: { bn: 'বাসিন্দাদের কাছে সভার কত দিন আগে হিসাবপত্র পৌঁছানো উচিত?', en: 'How many days before the assembly should residents get the statement?' }, options: ['অন্তত ৭ দিন আগে', 'সভার পরদিন', '১ দিন আগে', '১ মাস পর'], answer: 0, explanation: { bn: 'সঠিক উত্তর: অন্তত ৭ দিন আগে — পাঠ্যাংশে বলা হয়েছে: «তা ছাড়া সাধারণ সভার অন্তত সাত দিন আগে প্রতিটি বাসিন্দা যেন বিস্তারিত হিসাবপত্র পান তা-ই সমীচীন।» (almeno sette giorni prima)।', en: 'At least seven days before.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-40', level: 'B2', kind: 'article', titleIt: 'Adempimenti tecnici e conformità ambientale', title: { bn: 'কারিগরি পরিপালন ও পরিবেশগত সামঞ্জস্য', en: 'Technical compliance and environmental standards' },
    storyId: 'st-b2-40',
    paragraphs: [
      { it: 'Tutte le imprese interessate devono ottemperare alla normativa vigente e rinunciare a materiali obsoleti entro l’anno.', tr: { bn: 'সংশ্লিষ্ট সব প্রতিষ্ঠানকে বছরের মধ্যেই প্রচলিত বিধিমালা মেনে চলতে হবে এবং পুরনো উপকরণ বর্জন করতে হবে।', en: 'All businesses concerned must comply with current regulations and renounce obsolete materials within the year.' } },
      { it: 'Chi aspira a ottenere finanziamenti pubblici dovrà provvedere al collaudo certificato degli impianti.', tr: { bn: 'যাঁরা সরকারি অর্থায়ন পেতে আগ্রহী তাঁদের যন্ত্রপাতির সনদপ্রাপ্ত পরীক্ষার ব্যবস্থা করতে হবে।', en: 'Those aspiring to obtain public funding will have to see to certified testing of the plants.' } },
    ],
    vocabHighlights: [{ it: 'ottemperare', tr: { bn: 'বিধি পরিপালন করা', en: 'to comply with' } }, { it: 'normativa', tr: { bn: 'বিধিমালা', en: 'regulations' } }],
    grammarHighlights: [{ excerpt: 'ottemperare a / rinunciare a / provvedere a', note: { bn: 'অব্যয়-নিয়ন্ত্রিত ক্রিয়া (reggenze verbali)।', en: 'Fixed verb-preposition pairings.' }, grammarId: 'reggenze-verbali-b2' }],
    relatedGrammarIds: ['reggenze-verbali-b2'],
    questions: [
      { id: 'rd-b2-40-q1', prompt: { bn: 'সরকারি অর্থায়ন পেতে চাইলে প্রতিষ্ঠানকে কী ব্যবস্থা করতে হবে?', en: 'What must firms arrange to qualify for public funds?' }, options: ['যন্ত্রপাতির সনদপ্রাপ্ত পরীক্ষা', 'বিজ্ঞাপন প্রচার', 'দপ্তর স্থানান্তর', 'লটারি'], answer: 0, explanation: { bn: 'সঠিক উত্তর: যন্ত্রপাতির সনদপ্রাপ্ত পরীক্ষা — পাঠ্যাংশে বলা হয়েছে: «যাঁরা সরকারি অর্থায়ন পেতে আগ্রহী তাঁদের যন্ত্রপাতির সনদপ্রাপ্ত পরীক্ষার ব্যবস্থা করতে হবে।» (provvedere al collaudo certificato degli impianti)।', en: 'Provide certified plant testing.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-41', level: 'B2', kind: 'story', titleIt: 'Il fascino discreto del paesello antico', title: { bn: 'প্রাচীন ছোট্ট গ্রামের স্নিগ্ধ আকর্ষণ', en: 'The quiet charm of the old little village' },
    storyId: 'st-b2-41',
    paragraphs: [
      { it: 'In un paesello silenzioso affacciato sulle colline, una vecchia librona rilegata in tela raccoglie le memorie della comunità.', tr: { bn: 'পাহাড়ের দিকে মুখ করে থাকা এক নীরব ছোট্ট গ্রামে কাপড়ে বাঁধানো এক বিশাল বই সম্প্রদায়ের স্মৃতি ধারণ করে আছে।', en: 'In a silent little village overlooking the hills, a hefty old cloth-bound tome preserves the community’s memories.' } },
      { it: 'Senza fretta e con grande serenità d’animo, i visitatori scoprono stradine ordinate anziché grandi alberghi anonimi.', tr: { bn: 'তাড়াহুড়ো ছাড়া এবং মনের গভীর প্রশান্তি নিয়ে দর্শনার্থীরা বিশাল অপরিচিত হোটেলের বদলে পরিপাটি ছোট গলিগুলো আবিষ্কার করেন।', en: 'Unhurried and with great peace of mind, visitors discover neat little lanes instead of huge impersonal hotels.' } },
    ],
    vocabHighlights: [{ it: 'serenità d’animo', tr: { bn: 'মনের প্রশান্তি', en: 'peace of mind' } }],
    grammarHighlights: [{ excerpt: 'paesello / librona / stradine', note: { bn: 'মূল্যায়নসূচক প্রত্যয় আকার ও আবেগ প্রকাশ করে।', en: 'Evaluative suffixes add size and affective nuance.' }, grammarId: 'suffissi-alterativi-b2' }],
    relatedGrammarIds: ['suffissi-alterativi-b2'],
    questions: [
      { id: 'rd-b2-41-q1', prompt: { bn: 'প্রাচীন গ্রামটির বড় বইটিতে কী সংরক্ষিত আছে?', en: 'What is preserved in the big old book?' }, options: ['সম্প্রদায়ের স্মৃতি', 'ট্যাক্সের ফর্ম', 'আবহাওয়ার চার্ট', 'বাসের সময়সূচি'], answer: 0, explanation: { bn: 'সঠিক উত্তর: সম্প্রদায়ের স্মৃতি — পাঠ্যাংশে বলা হয়েছে: «পাহাড়ের দিকে মুখ করে থাকা এক নীরব ছোট্ট গ্রামে কাপড়ে বাঁধানো এক বিশাল বই সম্প্রদায়ের স্মৃতি ধারণ করে আছে।» (le memorie della comunità)।', en: 'The memories of the community.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-42', level: 'B2', kind: 'essay', titleIt: 'Prefissi e precisione concettuale', title: { bn: 'উপসর্গ ও ধারণার সূক্ষ্ম স্পষ্টতা', en: 'Prefixes and conceptual precision' },
    storyId: 'st-b2-42',
    paragraphs: [
      { it: 'Saper distinguere un dettaglio irrilevante da un elemento imprescindibile accelera qualsiasi decisione amministrativa.', tr: { bn: 'একটি অপ্রাসঙ্গিক বিবরণকে একটি অপরিহার্য উপাদান থেকে আলাদা করতে পারা যেকোনো প্রশাসনিক সিদ্ধান্তকে ত্বরান্বিত করে।', en: 'Knowing how to distinguish an irrelevant detail from an indispensable element speeds up any administrative decision.' } },
      { it: 'Inoltre, la rilettura critica dei testi evita che una semplice imprecisione diventi un ostacolo duraturo.', tr: { bn: 'অধিকন্তু, পাঠ্যের সমালোচনামূলক পুনর্পাঠ সামান্য অস্পষ্টতাকে দীর্ঘস্থায়ী বাধায় পরিণত হওয়া থেকে রক্ষা করে।', en: 'Moreover, critical re-reading of texts prevents a mere inaccuracy from becoming a lasting obstacle.' } },
    ],
    vocabHighlights: [{ it: 'irrilevante', tr: { bn: 'অপ্রাসঙ্গিক', en: 'irrelevant' } }, { it: 'imprescindibile', tr: { bn: 'অপরিহার্য', en: 'indispensable' } }],
    grammarHighlights: [{ excerpt: 'ir-rilevante / im-prescindibile / ri-lettura / im-precisione', note: { bn: 'না-বাচক ও পুনরাবৃত্তিমূলক উপসর্গে শব্দগঠন।', en: 'Prefixes ir-/im- negate and ri- indicates repetition.' }, grammarId: 'formazione-parole-b2' }],
    relatedGrammarIds: ['formazione-parole-b2'],
    questions: [
      { id: 'rd-b2-42-q1', prompt: { bn: 'পাঠ্যের সমালোচনামূলক পুনর্পাঠ কী প্রতিরোধ করে?', en: 'What does critical re-reading prevent?' }, options: ['অস্পষ্টতার দীর্ঘস্থায়ী বাধা হওয়া', 'সব প্রকল্প বন্ধ হওয়া', 'শব্দভাণ্ডার কমে যাওয়া', 'বই নষ্ট হওয়া'], answer: 0, explanation: { bn: 'সঠিক উত্তর: অস্পষ্টতার দীর্ঘস্থায়ী বাধা হওয়া — পাঠ্যাংশে বলা হয়েছে: «অধিকন্তু, পাঠ্যের সমালোচনামূলক পুনর্পাঠ সামান্য অস্পষ্টতাকে দীর্ঘস্থায়ী বাধায় পরিণত হওয়া থেকে রক্ষা করে।» (che una semplice imprecisione diventi un ostacolo duraturo)।', en: 'An inaccuracy becoming a lasting obstacle.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-43', level: 'B2', kind: 'notice', titleIt: 'Responsabilità contrattuale e ruolo della procura', title: { bn: 'চুক্তিগত দায় ও প্রসিকিউশন দপ্তরের ভূমিকা', en: 'Contractual liability and prosecutor’s office role' },
    storyId: 'st-b2-43',
    paragraphs: [
      { it: 'Qualora emerga un grave inadempimento nella fornitura pubblica, l’ente può applicare una sanzione amministrativa proporzionata al danno.', tr: { bn: 'সরকারি সরবরাহে গুরুতর চুক্তিভঙ্গ দেখা দিলে প্রতিষ্ঠানটি ক্ষতির আনুপাতিক প্রশাসনিক জরিমানা আরোপ করতে পারে।', en: 'Should a serious breach occur in public supply, the body may impose an administrative penalty proportionate to the damage.' } },
      { it: 'Se i fatti integrano un illecito penale, gli atti vengono trasmessi tempestivamente alla procura competente.', tr: { bn: 'ঘটনাগুলো ফৌজদারি অপরাধের শামিল হলে নথিপত্র দ্রুত সংশ্লিষ্ট প্রসিকিউশন দপ্তরে পাঠানো হয়।', en: 'If the facts constitute a criminal offence, the files are promptly forwarded to the competent prosecutor’s office.' } },
    ],
    vocabHighlights: [{ it: 'inadempimento', tr: { bn: 'চুক্তি পালনে ব্যর্থতা', en: 'breach / default' } }, { it: 'sanzione amministrativa', tr: { bn: 'প্রশাসনিক জরিমানা', en: 'administrative fine' } }],
    grammarHighlights: [{ excerpt: 'inadempimento / sanzione amministrativa / illecito / procura', note: { bn: 'প্রশাসনিক ও ফৌজদারি আইনের সুনির্দিষ্ট পরিভাষা।', en: 'Precise legal distinctions between administrative and criminal terms.' }, grammarId: 'lessico-giuridico-burocratico' }],
    relatedGrammarIds: ['lessico-giuridico-burocratico'],
    questions: [
      { id: 'rd-b2-43-q1', prompt: { bn: 'ঘটনাগুলো ফৌজদারি অপরাধের শামিল হলে নথি কোথায় পাঠানো হয়?', en: 'Where are files sent if facts constitute a criminal offence?' }, options: ['সংশ্লিষ্ট প্রসিকিউশন দপ্তরে', 'পর্যটন বোর্ডে', 'পৌর গ্রন্থাগারে', 'ব্যাংক কাউন্টারে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: সংশ্লিষ্ট প্রসিকিউশন দপ্তরে — পাঠ্যাংশে বলা হয়েছে: «ঘটনাগুলো ফৌজদারি অপরাধের শামিল হলে নথিপত্র দ্রুত সংশ্লিষ্ট প্রসিকিউশন দপ্তরে পাঠানো হয়।» (alla procura competente)।', en: 'To the competent prosecutor’s office.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-44', level: 'B2', kind: 'article', titleIt: 'Solidità finanziaria e contrasto all’evasione', title: { bn: 'আর্থিক দৃঢ়তা ও কর ফাঁকি প্রতিরোধ', en: 'Financial soundness and tackling tax evasion' },
    storyId: 'st-b2-44',
    paragraphs: [
      { it: 'Una ripresa economica duratura poggia sia sulla diversificazione del portafoglio d’investimento sia su imprese dal fatturato annuo trasparente.', tr: { bn: 'একটি টেকসই অর্থনৈতিক পুনরুদ্ধার বিনিয়োগ পোর্টফোলিওর বৈচিত্র্যায়ন এবং স্বচ্ছ বার্ষিক আয়বিশিষ্ট প্রতিষ্ঠান উভয়ের ওপরই নির্ভর করে।', en: 'A lasting economic recovery rests both on investment portfolio diversification and on firms with transparent annual turnover.' } },
      { it: 'Combattere l’evasione fiscale consente di finanziare scuole e ospedali senza aumentare la pressione sui contribuenti onesti.', tr: { bn: 'কর ফাঁকি প্রতিরোধ করলে সৎ করদাতাদের ওপর চাপ না বাড়িয়েই স্কুল ও হাসপাতালে অর্থায়ন করা সম্ভব হয়।', en: 'Fighting tax evasion makes it possible to fund schools and hospitals without raising pressure on honest taxpayers.' } },
    ],
    vocabHighlights: [{ it: 'ripresa economica', tr: { bn: 'অর্থনৈতিক পুনরুদ্ধার', en: 'economic recovery' } }, { it: 'evasione fiscale', tr: { bn: 'কর ফাঁকি', en: 'tax evasion' } }],
    grammarHighlights: [{ excerpt: 'diversificazione / portafoglio d’investimento / fatturato annuo / evasione fiscale', note: { bn: 'অর্থনৈতিক ও রাজস্ব আলোচনার পরিভাষা।', en: 'Key economics and fiscal policy vocabulary.' }, grammarId: 'lessico-economico-finanziario' }],
    relatedGrammarIds: ['lessico-economico-finanziario'],
    questions: [
      { id: 'rd-b2-44-q1', prompt: { bn: 'কর ফাঁকি রোধ করার প্রত্যক্ষ সুফল কী?', en: 'What is a direct benefit of fighting tax evasion?' }, options: ['সৎ করদাতাদের ওপর চাপ না বাড়িয়ে জনসেবায় অর্থায়ন', 'রপ্তানি বন্ধ হওয়া', 'টাকা ছাপানো কমানো', 'ব্যাংক বন্ধ হওয়া'], answer: 0, explanation: { bn: 'সঠিক উত্তর: সৎ করদাতাদের ওপর চাপ না বাড়িয়ে জনসেবায় অর্থায়ন — পাঠ্যাংশে বলা হয়েছে: «কর ফাঁকি প্রতিরোধ করলে সৎ করদাতাদের ওপর চাপ না বাড়িয়েই স্কুল ও হাসপাতালে অর্থায়ন করা সম্ভব হয়।» (finanziare scuole e ospedali senza aumentare la pressione sui contribuenti onesti)।', en: 'Funding schools and hospitals without burdening honest taxpayers.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-45', level: 'B2', kind: 'essay', titleIt: 'Dal nesso causale alla pubblicazione scientifica', title: { bn: 'কার্যকারণ সম্পর্ক থেকে বৈজ্ঞানিক প্রকাশনা', en: 'From causal link to scientific publication' },
    storyId: 'st-b2-45',
    paragraphs: [
      { it: 'In ogni seminario interdisciplinare si ribadisce che un’ipotesi scientifica acquisisce credibilità solo dopo ripetute verifiche empiriche.', tr: { bn: 'প্রতিটি আন্তঃবিভাগীয় সেমিনারে জোর দিয়ে বলা হয় যে একটি বৈজ্ঞানিক অনুমান কেবল বারবার অভিজ্ঞতালব্ধ যাচাইয়ের পরই বিশ্বাসযোগ্যতা অর্জন করে।', en: 'In every interdisciplinary seminar it is reiterated that a scientific hypothesis gains credibility only after repeated empirical tests.' } },
      { it: 'Dimostrare un nesso causale richiede controlli indipendenti e attenzione scrupolosa all’attendibilità dei dati.', tr: { bn: 'একটি কার্যকারণ সম্পর্ক প্রমাণ করতে স্বাধীন নিয়ন্ত্রণ এবং তথ্যের নির্ভরযোগ্যতার প্রতি সূক্ষ্ম মনোযোগ প্রয়োজন।', en: 'Demonstrating a causal link requires independent controls and scrupulous attention to data reliability.' } },
    ],
    vocabHighlights: [{ it: 'nesso causale', tr: { bn: 'কার্যকারণ সম্পর্ক', en: 'causal link' } }, { it: 'attendibilità dei dati', tr: { bn: 'তথ্যের নির্ভরযোগ্যতা', en: 'data reliability' } }],
    grammarHighlights: [{ excerpt: 'ipotesi scientifica / verifiche empiriche / nesso causale / attendibilità dei dati', note: { bn: 'গবেষণা ও একাডেমিক লেখার মূল শব্দগুচ্ছ।', en: 'Academic collocations for method and evidence.' }, grammarId: 'lessico-scientifico-accademico' }],
    relatedGrammarIds: ['lessico-scientifico-accademico'],
    questions: [
      { id: 'rd-b2-45-q1', prompt: { bn: 'কার্যকারণ সম্পর্ক প্রমাণে কী প্রয়োজন?', en: 'What is needed to prove a causal link?' }, options: ['স্বাধীন নিয়ন্ত্রণ ও তথ্যের নির্ভরযোগ্যতা', 'সুন্দর প্রচ্ছদ', 'সংক্ষিপ্ত শিরোনাম', 'জনপ্রিয় মত'], answer: 0, explanation: { bn: 'সঠিক উত্তর: স্বাধীন নিয়ন্ত্রণ ও তথ্যের নির্ভরযোগ্যতা — পাঠ্যাংশে বলা হয়েছে: «একটি কার্যকারণ সম্পর্ক প্রমাণ করতে স্বাধীন নিয়ন্ত্রণ এবং তথ্যের নির্ভরযোগ্যতার প্রতি সূক্ষ্ম মনোযোগ প্রয়োজন।» (controlli indipendenti e attenzione all’attendibilità dei dati)।', en: 'Independent controls and reliable data.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-46', level: 'B2', kind: 'news', titleIt: 'La verifica delle fonti contro la disinformazione', title: { bn: 'অপতথ্যের বিরুদ্ধে সূত্র যাচাই', en: 'Source verification against disinformation' },
    storyId: 'st-b2-46',
    paragraphs: [
      { it: 'Nell’ecosistema digitale una notizia infondata può sembrare credibile se viene rilanciata da profili apparentemente autorevoli.', tr: { bn: 'ডিজিটাল পরিবেশে আপাতদৃষ্টিতে নির্ভরযোগ্য প্রোফাইল থেকে শেয়ার হলে একটি ভিত্তিহীন খবরও বিশ্বাসযোগ্য মনে হতে পারে।', en: 'In the digital ecosystem an unfounded story can seem credible if amplified by seemingly authoritative profiles.' } },
      { it: 'Ecco perché il giornalismo d’inchiesta approfondito difende concretamente la libertà di stampa attraverso prove documentali.', tr: { bn: 'এ কারণেই গভীর অনুসন্ধানী সাংবাদিকতা দালিলিক প্রমাণের মাধ্যমে সংবাদপত্রের স্বাধীনতাকে বাস্তবে রক্ষা করে।', en: 'That is why in-depth investigative journalism concretely defends press freedom through documentary evidence.' } },
    ],
    vocabHighlights: [{ it: 'notizia infondata', tr: { bn: 'ভিত্তিহীন সংবাদ', en: 'unfounded news' } }, { it: 'approfondito', tr: { bn: 'গভীর / বিশদ', en: 'in-depth' } }],
    grammarHighlights: [{ excerpt: 'notizia infondata / autorevoli / giornalismo d’inchiesta approfondito', note: { bn: 'সংবাদ ও গণমাধ্যম বিশ্লেষণের পরিভাষা।', en: 'Media criticism and journalism collocations.' }, grammarId: 'lessico-giornalistico' }],
    relatedGrammarIds: ['lessico-giornalistico'],
    questions: [
      { id: 'rd-b2-46-q1', prompt: { bn: 'গভীর অনুসন্ধানী সাংবাদিকতা কীসের মাধ্যমে স্বাধীনতা রক্ষা করে?', en: 'Through what does investigative journalism defend press freedom?' }, options: ['দালিলিক প্রমাণের মাধ্যমে', 'সংক্ষিপ্ত পোস্টের মাধ্যমে', 'শিরোনাম লুকিয়ে', 'গুজব ছড়িয়ে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: দালিলিক প্রমাণের মাধ্যমে — পাঠ্যাংশে বলা হয়েছে: «এ কারণেই গভীর অনুসন্ধানী সাংবাদিকতা দালিলিক প্রমাণের মাধ্যমে সংবাদপত্রের স্বাধীনতাকে বাস্তবে রক্ষা করে।» (attraverso prove documentali)।', en: 'Through documentary evidence.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-47', level: 'B2', kind: 'essay', titleIt: 'Metafora e allusione nel teatro musicale', title: { bn: 'সঙ্গীতনাট্যে রূপক ও প্রচ্ছন্ন ইঙ্গিত', en: 'Metaphor and allusion in musical theatre' },
    storyId: 'st-b2-47',
    paragraphs: [
      { it: 'Nel libretto d’opera ottocentesco gli autori ricorrevano spesso a un’allusione velata per superare la censura dell’epoca.', tr: { bn: 'উনিশ শতকের অপেরার পাণ্ডুলিপিতে লেখকেরা প্রায়ই তৎকালীন সেন্সরশিপ এড়াতে প্রচ্ছন্ন ইঙ্গিতের আশ্রয় নিতেন।', en: 'In nineteenth-century opera librettos authors often resorted to veiled allusion to bypass the censorship of the time.' } },
      { it: 'Un’aria che inizia come un sussurro e culmina in un grido corale crea un ossimoro emotivo di grande intensità.', tr: { bn: 'ফিসফিসানি দিয়ে শুরু হয়ে সমবেত আর্তনাদে পৌঁছানো একটি আরিয়া প্রবল তীব্রতার এক আবেগীয় বিরোধাভাস সৃষ্টি করে।', en: 'An aria that begins as a whisper and culminates in a choral cry creates an emotional oxymoron of great intensity.' } },
    ],
    vocabHighlights: [{ it: 'allusione velata', tr: { bn: 'প্রচ্ছন্ন ইঙ্গিত', en: 'veiled allusion' } }, { it: 'libretto d’opera', tr: { bn: 'অপেরার পাণ্ডুলিপি', en: 'opera libretto' } }],
    grammarHighlights: [{ excerpt: 'allusione velata / ossimoro emotivo', note: { bn: 'ইঙ্গিত ও বিরোধাভাসের মতো সাহিত্যিক অলংকার।', en: 'Literary figures amplify expressive depth.' }, grammarId: 'figure-retoriche-b2' }],
    relatedGrammarIds: ['figure-retoriche-b2'],
    questions: [
      { id: 'rd-b2-47-q1', prompt: { bn: 'উনিশ শতকের পাণ্ডুলিপিকারেরা কেন প্রচ্ছন্ন ইঙ্গিত ব্যবহার করতেন?', en: 'Why did 19th-century librettists use veiled allusion?' }, options: ['তৎকালীন সেন্সরশিপ এড়াতে', 'গান ছোট করতে', 'শব্দ সংখ্যা বাড়াতে', 'টিকিটের দাম কমাতে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: তৎকালীন সেন্সরশিপ এড়াতে — পাঠ্যাংশে বলা হয়েছে: «উনিশ শতকের অপেরার পাণ্ডুলিপিতে লেখকেরা প্রায়ই তৎকালীন সেন্সরশিপ এড়াতে প্রচ্ছন্ন ইঙ্গিতের আশ্রয় নিতেন।» (per superare la censura dell’epoca)।', en: 'To bypass censorship.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-48', level: 'B2', kind: 'essay', titleIt: 'Punteggiatura logica e coesione anaforica', title: { bn: 'যৌক্তিক বিরামচিহ্ন ও অনুসারী পাঠ্যসংহতি', en: 'Logical punctuation and anaphoric cohesion' },
    storyId: 'st-b2-48',
    paragraphs: [
      { it: 'Saper collocare i due punti prima di una spiegazione guida immediatamente chi legge; il punto e virgola, invece, coordina proposizioni autonome affini.', tr: { bn: 'ব্যাখ্যার আগে কোলন বসাতে জানা পাঠককে তাৎক্ষণিক নির্দেশনা দেয়; অন্যদিকে সেমিকোলন সমধর্মী স্বাধীন বাক্যাংশকে যুক্ত করে।', en: 'Knowing how to place a colon before an explanation guides the reader at once; the semicolon, meanwhile, coordinates closely related independent clauses.' } },
      { it: 'Questo meccanismo stilistico evita frammentazioni eccessive: esso garantisce continuità e rafforza la coesione interna del testo.', tr: { bn: 'এই শৈলীগত কৌশল অতিরিক্ত খণ্ডিত হওয়া এড়ায়: এটি ধারাবাহিকতা নিশ্চিত করে এবং পাঠ্যের অভ্যন্তরীণ সংহতি জোরদার করে।', en: 'This stylistic mechanism avoids excessive fragmentation: it ensures continuity and strengthens internal text cohesion.' } },
    ],
    vocabHighlights: [{ it: 'sottolineare', tr: { bn: 'গুরুত্ব আরোপ করা', en: 'to emphasise' } }],
    grammarHighlights: [{ excerpt: 'Questo meccanismo stilistico… esso', note: { bn: 'আনাফোরিক সর্বনাম ও কোলন-সেমিকোলনের ব্যবহার।', en: 'Anaphoric esso and purposeful punctuation unify prose.' }, grammarId: 'punteggiatura-stilistica' }],
    relatedGrammarIds: ['punteggiatura-stilistica', 'coesione-anaforica'],
    questions: [
      { id: 'rd-b2-48-q1', prompt: { bn: 'ব্যাখ্যার আগে কোলন ব্যবহারের সুবিধা কী?', en: 'What is the benefit of placing a colon before an explanation?' }, options: ['পাঠককে তাৎক্ষণিকভাবে পথ দেখায়', 'পৃষ্ঠা কমায়', 'সর্বনাম বাদ দেয়', 'বাক্য অস্পষ্ট করে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: পাঠককে তাৎক্ষণিকভাবে পথ দেখায় — পাঠ্যাংশে বলা হয়েছে: «ব্যাখ্যার আগে কোলন বসাতে জানা পাঠককে তাৎক্ষণিক নির্দেশনা দেয়; অন্যদিকে সেমিকোলন সমধর্মী স্বাধীন বাক্যাংশকে যুক্ত করে।» (guida immediatamente chi legge)।', en: 'It immediately guides the reader.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-49', level: 'B2', kind: 'article', titleIt: 'Dalla lingua parlata al registro accademico', title: { bn: 'কথ্য ভাষা থেকে একাডেমিক রীতিতে উত্তরণ', en: 'From spoken Italian to academic register' },
    storyId: 'st-b2-49',
    paragraphs: [
      { it: 'Un parlante di livello avanzato adatta spontaneamente lessico e sintassi al contesto, passando dal registro informale al colloquio orale professionale.', tr: { bn: 'একজন উন্নত স্তরের বক্তা স্বতঃস্ফূর্তভাবে পরিবেশ অনুযায়ী শব্দভাণ্ডার ও বাক্যগঠন মানিয়ে নেন—অনানুষ্ঠানিক রীতি থেকে পেশাদার মৌখিক সাক্ষাৎকারে রূপান্তর করেন।', en: 'An advanced speaker spontaneously adapts vocabulary and syntax to context, shifting from informal register to a professional oral interview.' } },
      { it: 'Allo stesso modo, tradurre formule burocratiche opache in un italiano istituzionale limpido rende i diritti più accessibili.', tr: { bn: 'একইভাবে, জটিল আমলাতান্ত্রিক ফর্মুলাগুলোকে স্বচ্ছ প্রাতিষ্ঠানিক ইতালীয়তে রূপান্তর করলে অধিকারগুলো আরও সহজলভ্য হয়।', en: 'Likewise, translating opaque bureaucratic formulas into clear institutional Italian makes rights more accessible.' } },
    ],
    vocabHighlights: [{ it: 'colloquio orale', tr: { bn: 'মৌখিক পরীক্ষা/সাক্ষাৎকার', en: 'oral interview' } }],
    grammarHighlights: [{ excerpt: 'registro informale / italiano istituzionale limpido', note: { bn: 'ইতালীয় ভাষার সামাজিক ও ব্যবহারিক স্তরবৈচিত্র্য।', en: 'Registers vary along formality and communicative purpose.' }, grammarId: 'varieta-italiano' }],
    relatedGrammarIds: ['varieta-italiano'],
    questions: [
      { id: 'rd-b2-49-q1', prompt: { bn: 'জটিল আমলাতান্ত্রিক ভাষাকে স্বচ্ছ প্রাতিষ্ঠানিক ইতালীয়তে রূপান্তর করলে কী লাভ হয়?', en: 'What is gained by turning opaque bureaucratic language into clear Italian?' }, options: ['অধিকারগুলো আরও সহজলভ্য হয়', 'কাগজ বাড়ে', 'নথি গোপন থাকে', 'সাক্ষাৎকার বাতিল হয়'], answer: 0, explanation: { bn: 'সঠিক উত্তর: অধিকারগুলো আরও সহজলভ্য হয় — পাঠ্যাংশে বলা হয়েছে: «একইভাবে, জটিল আমলাতান্ত্রিক ফর্মুলাগুলোকে স্বচ্ছ প্রাতিষ্ঠানিক ইতালীয়তে রূপান্তর করলে অধিকারগুলো আরও সহজলভ্য হয়।» (rende i diritti più accessibili)।', en: 'It makes rights more accessible.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-50', level: 'B2', kind: 'dialogue', titleIt: 'L’arte della mitigazione nei negoziati', title: { bn: 'আলোচনায় ভদ্র প্রশমনের কৌশল', en: 'The art of mitigation in negotiations' },
    storyId: 'st-b2-50',
    paragraphs: [
      { it: 'In una trattativa delicata, evitare toni perentori aiuta a agevolare il consenso senza osteggiare apertamente l’interlocutore.', tr: { bn: 'সংবেদনশীল আলোচনায় কঠোর ও একগুঁয়ে সুর এড়িয়ে চলা প্রতিপক্ষের প্রকাশ্য বিরোধিতা না করেই ঐকমত্য সহজ করতে সাহায্য করে।', en: 'In a delicate negotiation, avoiding peremptory tones helps facilitate consensus without openly opposing one’s counterpart.' } },
      { it: 'Espressioni come “se non vado errato” o “mi permetto di osservare” attenuano la critica pur mantenendo fermezza nel merito.', tr: { bn: '“আমি যদি ভুল না করি” বা “বিনীতভাবে লক্ষ্য করতে চাই”-এর মতো অভিব্যক্তিগুলো মূল অবস্থানে দৃঢ় থেকেও সমালোচনার ধার কমায়।', en: 'Expressions like “if I am not mistaken” or “allow me to note” soften criticism while remaining firm on substance.' } },
    ],
    vocabHighlights: [{ it: 'agevolare', tr: { bn: 'সহজতর করা', en: 'to facilitate' } }, { it: 'osteggiare', tr: { bn: 'বিরোধিতা করা', en: 'to oppose' } }],
    grammarHighlights: [{ excerpt: 'se non vado errato / mi permetto di osservare', note: { bn: 'ভদ্র প্রশমন (mitigazione) ও পেশাদার সৌজন্য।', en: 'Pragmatic mitigation builds cooperation in disagreement.' }, grammarId: 'pragmatica-mitigazione' }],
    relatedGrammarIds: ['pragmatica-mitigazione'],
    questions: [
      { id: 'rd-b2-50-q1', prompt: { bn: 'প্রশমনসূচক অভিব্যক্তিগুলোর ভূমিকা কী?', en: 'What is the role of mitigating expressions?' }, options: ['মূল বক্তব্যে দৃঢ় থেকে সমালোচনাকে নমনীয় করা', 'মূল যুক্তি পরিত্যাগ করা', 'আলোচনা শেষ করা', 'সময় নষ্ট করা'], answer: 0, explanation: { bn: 'সঠিক উত্তর: মূল বক্তব্যে দৃঢ় থেকে সমালোচনাকে নমনীয় করা — পাঠ্যাংশে বলা হয়েছে: «“আমি যদি ভুল না করি” বা “বিনীতভাবে লক্ষ্য করতে চাই”-এর মতো অভিব্যক্তিগুলো মূল অবস্থানে দৃঢ় থেকেও সমালোচনার ধার কমায়।» (attenuano la critica pur mantenendo fermezza nel merito)।', en: 'Soften criticism while keeping firm on substance.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-51', level: 'B2', kind: 'essay', titleIt: 'Costruire una confutazione rigorosa', title: { bn: 'সুদৃঢ় যুক্তিখণ্ডন ও প্রবন্ধ রচনা', en: 'Building a rigorous refutation' },
    storyId: 'st-b2-51',
    paragraphs: [
      { it: 'Un saggio persuasivo espone con onestà gli argomenti contrari prima di svilupparne una confutazione fondata su dati verificabili.', tr: { bn: 'একটি জোরালো প্রবন্ধ যাচাইযোগ্য তথ্যের ওপর ভিত্তি করে যুক্তিখণ্ডন উপস্থাপনের আগে সততার সাথে বিপরীত যুক্তিগুলো তুলে ধরে।', en: 'A persuasive essay honestly states opposing arguments before developing a refutation grounded in verifiable data.' } },
      { it: 'Senza un’argomentazione logica trasparente, anche la tesi più nobile rischia di sembrare un’affermazione arbitraria.', tr: { bn: 'স্বচ্ছ যৌক্তিক যুক্তিবিন্যাস ছাড়া সবচেয়ে মহৎ তত্ত্বও খেয়ালখুশিমতো বক্তব্য বলে মনে হওয়ার ঝুঁকি থাকে।', en: 'Without transparent logical argumentation, even the noblest thesis risks sounding like an arbitrary claim.' } },
    ],
    vocabHighlights: [{ it: 'confutazione', tr: { bn: 'যুক্তিখণ্ডন', en: 'refutation' } }, { it: 'argomentazione logica', tr: { bn: 'যৌক্তিক যুক্তিবিন্যাস', en: 'logical argumentation' } }],
    grammarHighlights: [{ excerpt: 'espone… prima di svilupparne una confutazione', note: { bn: 'যুক্তি-পাল্টাযুক্তি ও খণ্ডনের একাডেমিক বিন্যাস।', en: 'Academic structure balances concession with evidence-backed rebuttal.' }, grammarId: 'argomentazione-saggio-b2' }],
    relatedGrammarIds: ['argomentazione-saggio-b2'],
    questions: [
      { id: 'rd-b2-51-q1', prompt: { bn: 'স্বচ্ছ যৌক্তিক যুক্তিবিন্যাস না থাকলে কোন ঝুঁকি থাকে?', en: 'What risk arises without transparent logical argumentation?' }, options: ['তত্ত্বটি খেয়ালখুশিমতো বক্তব্য মনে হতে পারে', 'প্রবন্ধ অনেক লম্বা হবে', 'ভাষা বেশি সহজ হবে', 'সবাই একমত হবে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: তত্ত্বটি খেয়ালখুশিমতো বক্তব্য মনে হতে পারে — পাঠ্যাংশে বলা হয়েছে: «স্বচ্ছ যৌক্তিক যুক্তিবিন্যাস ছাড়া সবচেয়ে মহৎ তত্ত্বও খেয়ালখুশিমতো বক্তব্য বলে মনে হওয়ার ঝুঁকি থাকে।» (rischia di sembrare un’affermazione arbitraria)।', en: 'It risks sounding like an arbitrary claim.' } },
    ],
  }),
  buildReading({
    id: 'rd-b2-52', level: 'B2', kind: 'essay', titleIt: 'Sintesi B2: cittadinanza critica e linguaggio complesso', title: { bn: 'B2 সারসংক্ষেপ: সমালোচনামূলক নাগরিকত্ব ও উচ্চতর ভাষা', en: 'B2 synthesis: critical citizenship and complex language' },
    storyId: 'st-b2-52',
    paragraphs: [
      { it: 'Padroneggiare l’italiano di livello B2 significa saper leggere criticamente norme, bilanci e reportage senza farsi ingannare da formule ambigue.', tr: { bn: 'B2 স্তরের ইতালীয় আয়ত্ত করার অর্থ হলো অস্পষ্ট বাক্যবন্ধে বিভ্রান্ত না হয়ে বিধিমালা, বাজেট ও প্রতিবেদন সমালোচনামূলকভাবে পড়তে পারা।', en: 'Mastering B2 Italian means being able to critically read regulations, budgets, and reports without being misled by ambiguous wording.' } },
      { it: 'Qualora un cittadino sappia articolare le proprie ragioni con chiarezza e rispetto, il confronto pubblico diventa strumento di progresso condiviso.', tr: { bn: 'কোনো নাগরিক যদি স্পষ্টতা ও সম্মানের সাথে নিজের যুক্তি তুলে ধরতে জানেন, তবে জনআলোচনা সম্মিলিত অগ্রগতির হাতিয়ার হয়ে ওঠে।', en: 'Whenever a citizen can articulate their reasons with clarity and respect, public debate becomes an instrument of shared progress.' } },
    ],
    vocabHighlights: [{ it: 'qualora', tr: { bn: 'যদি কোনো ক্ষেত্রে', en: 'whenever / should' } }, { it: 'la coesione sociale', tr: { bn: 'সামাজিক সংহতি', en: 'social cohesion' } }],
    grammarHighlights: [{ excerpt: 'Qualora un cittadino sappia articolare', note: { bn: 'সমাপনী B2 অনুচ্ছেদে কৌশলগত সংযোজক, congiuntivo এবং যুক্তিশৈলীর সমন্বয়।', en: 'Integrates subjunctive conditionals with B2 civic discourse.' }, grammarId: 'argomentazione-saggio-b2' }],
    relatedGrammarIds: ['argomentazione-saggio-b2', 'congiuntivo-condizionale-b2'],
    questions: [
      { id: 'rd-b2-52-q1', prompt: { bn: 'লেখকের মতে জনআলোচনা কখন সম্মিলিত অগ্রগতির হাতিয়ার হয়?', en: 'When does public debate become an instrument of shared progress?' }, options: ['নাগরিক স্পষ্টতা ও সম্মানের সাথে যুক্তি তুলে ধরলে', 'কেউ কথা না বললে', 'সব আইন বাতিল হলে', 'খবর বন্ধ থাকলে'], answer: 0, explanation: { bn: 'সঠিক উত্তর: নাগরিক স্পষ্টতা ও সম্মানের সাথে যুক্তি তুলে ধরলে — পাঠ্যাংশে বলা হয়েছে: «কোনো নাগরিক যদি স্পষ্টতা ও সম্মানের সাথে নিজের যুক্তি তুলে ধরতে জানেন, তবে জনআলোচনা সম্মিলিত অগ্রগতির হাতিয়ার হয়ে ওঠে।» (sappia articolare le proprie ragioni con chiarezza e rispetto)।', en: 'When citizens articulate reasons with clarity and respect.' } },
    ],
  }),
];
