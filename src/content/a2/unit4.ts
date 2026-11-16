import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a2-u4-l1',
  number: 1,
  title: 'Salute, emergenze e sportello',
  subtitle: { bn: 'ডাক্তার দেখানো, অতীত মডাল ও sap/conoscere', en: 'Health, past modals & sapere vs conoscere' },
  minutes: 12,
  objectives: [
    { bn: 'উপসর্গ, ব্যথা ও ফার্মেসির প্রয়োজন স্পষ্টভাবে বলবেন', en: 'Describe symptoms and pharmacy needs clearly' },
    { bn: 'ho dovuto / sono dovuto এবং sapere বনাম conoscere পার্থক্য বুঝবেন', en: 'Use past modals and contrast sapere vs conoscere' },
  ],
  phrases: [
    { id: 'sono-dovuto', it: 'Ieri sono dovuto andare al pronto soccorso.', tr: { bn: 'গতকাল আমাকে জরুরি বিভাগে যেতে হয়েছে।', en: 'Yesterday I had to go to A&E.' } },
    { id: 'non-ho-potuto', it: 'Non ho potuto dormire per la tosse.', tr: { bn: 'কাশির কারণে আমি ঘুমাতে পারিনি।', en: 'I couldn’t sleep because of the cough.' } },
    { id: 'conosci-dentista', it: 'Conosci un buon dentista in zona?', tr: { bn: 'এই এলাকায় তুমি কি কোনো ভালো দাঁতের ডাক্তারকে চেনো?', en: 'Do you know a good dentist in the area?' } },
    { id: 'sai-ora', it: 'Sai a che ora apre la farmacia di turno?', tr: { bn: 'ডিউটি ফার্মেসি কয়টায় খোলে তুমি কি জানো?', en: 'Do you know what time the on-duty pharmacy opens?' } },
  ],
  grammar: [
    {
      id: 'modali-passato',
      title: { bn: 'অতীতে মডাল ও sapere / conoscere', en: 'Past modals & sapere vs conoscere' },
      explanation: {
        bn: 'অতীতে dovere/potere/volere পরের ক্রিয়ার সহায়ক নেয়: ho potuto chiamare (avere), sono dovuto andare (essere)। sapere = তথ্য/দক্ষতা জানা; conoscere = ব্যক্তি/স্থান/বই চেনা।',
        en: 'Past modals take the infinitive’s auxiliary (ho potuto finire, siamo dovuti uscire). sapere = facts/skills; conoscere = people/places.',
      },
      table: [
        { label: 'dovere + essere', it: 'sono dovuto / dovuta partire', tr: { bn: 'রওনা হতে হয়েছে', en: 'had to leave' } },
        { label: 'sapere', it: 'So dove si trova l’ospedale', tr: { bn: 'আমি জানি হাসপাতাল কোথায়', en: 'I know where it is' } },
        { label: 'conoscere', it: 'Conosco quel medico', tr: { bn: 'আমি ঐ ডাক্তারকে চিনি', en: 'I know that doctor' } },
      ],
      examples: [
        { id: 'a2u4l1-e1', it: 'Alla fine siamo potuti rientrare presto.', tr: { bn: 'শেষ পর্যন্ত আমরা তাড়াতাড়ি বাড়ি ফিরতে পেরেছি।', en: 'In the end we managed to get home early.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ডাক্তারের চেম্বারে', en: 'At the doctor’s' },
    context: { bn: 'নাদিয়া সর্দি-জ্বর নিয়ে ডাক্তার দেখাতে এসেছে।', en: 'Nadia visits her GP with flu symptoms.' },
    lines: [
      { speaker: 'Medico', it: 'Buongiorno, cosa è successo? Come si sente oggi?', tr: { bn: 'শুভ সকাল, কী হয়েছে? আজ কেমন লাগছে?', en: 'Good morning, what happened? How are you feeling today?' } },
      { speaker: 'Nadia', it: 'Da due giorni ho mal di gola e tosse. Ieri non ho potuto lavorare.', tr: { bn: 'দুই দিন ধরে আমার গলা ব্যথা আর কাশি। গতকাল কাজ করতে পারিনি।', en: 'For two days I’ve had a sore throat and a cough. Yesterday I couldn’t work.' } },
      { speaker: 'Medico', it: 'Capisco. Le scrivo una ricetta per lo sciroppo e deve riposarsi tre giorni.', tr: { bn: 'বুঝেছি। আমি সিরাপের প্রেসক্রিপশন লিখে দিচ্ছি, আর তিন দিন বিশ্রাম নিতে হবে।', en: 'I understand. I’ll write a prescription for syrup and you need three days’ rest.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'সঠিক ক্রিয়া বাছাই:', en: 'sapere or conoscere:' }, it: '___ bene questa città perché ci vivo da cinque anni.', options: ['So', 'Conosco', 'Sai', 'Sapete'], answer: 1, explanation: { bn: 'শহরের সাথে পরিচিতি বোঝাতে conoscere।', en: 'Familiarity with a place uses conoscere.' } },
    { id: 'q2', prompt: { bn: 'অতীতে মডাল (স্ত্রীলিঙ্গ):', en: 'Past modal (feminine):' }, it: 'Maria ___ rimanere in ufficio fino alle sette.', options: ['ha dovuta', 'è dovuta', 'è dovuto', 'ha potuta'], answer: 1, explanation: { bn: 'rimanere essere নেয় → Maria è dovuta rimanere।', en: 'rimanere takes essere + feminine -a.' } },
    { id: 'q3', prompt: { bn: 'প্রেসক্রিপশন-এর ইতালিয়ান:', en: 'Italian for prescription:' }, options: ['la pastiglia', 'la tessera', 'la ricetta', 'la ferita'], answer: 2, explanation: { bn: 'la ricetta = প্রেসক্রিপশন (ও রেসিপি)।', en: 'la ricetta = prescription.' } },
    { id: 'q4', prompt: { bn: 'দক্ষতা জানা বোঝাতে কোন ক্রিয়া বসে?', en: 'Which verb expresses knowing how to do something?' }, it: 'Mio fratello ___ nuotare molto bene.', options: ['conosce', 'sa', 'è', 'fa'], answer: 1, explanation: { bn: 'sapere (sa) + infinito = করতে জানা।', en: 'sapere + infinitive expresses a skill.' } },
  ],
  tip: { bn: 'ইতালিতে রাত বা ছুটির দিনেও "farmacia di turno" (পালাক্রমে খোলা ফার্মেসি) সবসময় পাওয়া যায়।', en: 'Look for signs saying "farmacia di turno" for 24h / holiday pharmacies in Italy.' },
};

const lesson2: Lesson = {
  id: 'a2-u4-l2',
  number: 2,
  title: 'Stampa, acquisti e reclami',
  subtitle: { bn: 'খবর, অনলাইন কেনাকাটা, অভিযোগ ও ক্রিয়াবিশেষণ', en: 'News, online orders, complaints & adverbs' },
  minutes: 12,
  objectives: [
    { bn: 'ডেলিভারি দেরি হলে বা ফেরতের জন্য ভদ্রভাবে অভিযোগ/যোগাযোগ করবেন', en: 'Handle delivery delays, refunds, and complaints politely' },
    { bn: '-mente ক্রিয়াবিশেষণ ও সাম্প্রতিক সময়ের শব্দ (appena, già, ancora) ব্যবহার করবেন', en: 'Use -mente manner adverbs and time adverbs smoothly' },
  ],
  phrases: [
    { id: 'spedizione-ritardo', it: 'La spedizione è arrivata con tre giorni di ritardo.', tr: { bn: 'পার্সেল তিন দিন দেরিতে এসেছে।', en: 'The delivery arrived three days late.' } },
    { id: 'chiedere-rimborso', it: 'Vorrei chiedere il rimborso perché il pacco era danneggiato.', tr: { bn: 'প্যাকেট নষ্ট ছিল বলে আমি টাকা ফেরত চাইতে চাই।', en: 'I would like to ask for a refund because the parcel was damaged.' } },
    { id: 'letto-attentamente', it: 'Ho letto attentamente le condizioni dell’assicurazione.', tr: { bn: 'আমি বীমার শর্তগুলো মনোযোগ দিয়ে পড়েছি।', en: 'I read the insurance conditions carefully.' } },
  ],
  grammar: [
    {
      id: 'avverbi-a2',
      title: { bn: '-mente ক্রিয়াবিশেষণ ও সাম্প্রতিক কাজ', en: '-mente adverbs & recency markers' },
      explanation: {
        bn: 'বিশেষণের স্ত্রীলিঙ্গ রূপে -mente যোগ করুন: chiaramente, rapidamente, fortunatamente (-le/-re-তে e বাদ: facilmente, gentilmente)। সাম্প্রতিক কাজে appena (এইমাত্র), già (ইতিমধ্যে), non … ancora (এখনো না)।',
        en: 'Add -mente to the feminine singular adjective (drop -e after -l/-r: facilmente, gentilmente). Mark timing with appena, già, non… ancora.',
      },
      table: [
        { label: 'chiaro →', it: 'chiaramente', tr: { bn: 'স্পষ্টভাবে', en: 'clearly' } },
        { label: 'facile →', it: 'facilmente', tr: { bn: 'সহজেই', en: 'easily' } },
        { label: 'gentile →', it: 'gentilmente', tr: { bn: 'ভদ্রভাবে', en: 'kindly' } },
      ],
      examples: [
        { id: 'a2u4l2-e1', it: 'L’impiegata ci ha risposto gentilmente e rapidamente.', tr: { bn: 'কর্মকর্তা আমাদের ভদ্রভাবে ও দ্রুত উত্তর দিয়েছেন।', en: 'The clerk replied politely and quickly.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'কুরিয়ার অফিসে', en: 'Checking on a delivery' },
    context: { bn: 'মার্কো গ্রাহক সেবায় তার পার্সেল নিয়ে কথা বলছে।', en: 'Marco calls customer support about a delayed parcel.' },
    lines: [
      { speaker: 'Operatrice', it: 'Servizio clienti, buongiorno. Come posso aiutarla?', tr: { bn: 'গ্রাহক সেবা, শুভ সকাল। কীভাবে সাহায্য করতে পারি?', en: 'Customer service, good morning. How can I help you?' } },
      { speaker: 'Marco', it: 'Buongiorno, ho ordinato un libro cinque giorni fa ma il corriere non è ancora passato.', tr: { bn: 'শুভ সকাল, পাঁচ দিন আগে একটি বই অর্ডার করেছিলাম কিন্তু কুরিয়ার এখনো আসেনি।', en: 'Good morning, I ordered a book five days ago but the courier has not come yet.' } },
      { speaker: 'Operatrice', it: 'Controllo subito. Vedo che il pacco è appena arrivato in città e sarà consegnato domani mattina.', tr: { bn: 'এখনই দেখছি। দেখছি পার্সেলটি এইমাত্র শহরে পৌঁছেছে এবং কাল সকালে ডেলিভারি হবে।', en: 'Checking right away. I see the parcel just arrived in town and will be delivered tomorrow morning.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'regolare থেকে ক্রিয়াবিশেষণ:', en: 'Adverb from regolare:' }, options: ['regolaremente', 'regolarmente', 'regolaramente', 'regolariamente'], answer: 1, explanation: { bn: '-re থাকলে শেষের e বাদ যায়: regolarmente।', en: 'Drop -e after -r: regolarmente.' } },
    { id: 'q2', prompt: { bn: '"আমি এইমাত্র খবরের কাগজটা পড়েছি":', en: '"I just read the newspaper":' }, it: 'Ho ___ letto il giornale.', options: ['ancora', 'mai', 'appena', 'sempre'], answer: 2, explanation: { bn: 'appena = এইমাত্র।', en: 'appena = just.' } },
    { id: 'q3', prompt: { bn: 'টাকা ফেরতের শব্দ:', en: 'Word for refund:' }, options: ['il rimborso', 'il prestito', 'la rata', 'la multa'], answer: 0, explanation: { bn: 'il rimborso = টাকা ফেরত।', en: 'il rimborso = refund.' } },
    { id: 'q4', prompt: { bn: 'facile থেকে ক্রিয়াবিশেষণ:', en: 'Adverb formed from facile:' }, options: ['facilemente', 'facilmente', 'facilamente', 'facilimente'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «facile» থেকে পরিবর্তিত হয়ে «facilmente» ব্যবহৃত হয়।', en: 'Drop final -e: facilmente.' } },
  ],
  tip: { bn: 'ইতালীয় ইমেইল বা অভিযোগে সর্বদা প্রথমে শান্ত ও ভদ্র সম্বোধন ("Gentile Servizio Clienti") দিলে দ্রুত সাড়া পাওয়া যায়।', en: 'Polite greetings like "Gentile Servizio Clienti" are standard in Italian support emails.' },
};

const lesson3: Lesson = {
  id: 'a2-u4-l3',
  number: 3,
  title: 'Storia, cultura e vita sociale',
  subtitle: { bn: 'সম্পর্ক, মতবিনিময় ও A2-র সম্পূর্ণ সংযোজন', en: 'Social life, invitations & A2 synthesis' },
  minutes: 12,
  objectives: [
    { bn: 'আমন্ত্রণ জানানো, গ্রহণ বা বিনয়ের সাথে না বলা শিখবেন', en: 'Extend, accept, or politely decline invitations' },
    { bn: 'অতীত, বর্তমান ও ভবিষ্যৎ একসাথে যুক্ত করে গল্প বলবেন', en: 'Blend past, present, and future naturally in conversation' },
  ],
  phrases: [
    { id: 'ti-va-di', it: 'Ti va di andare alla mostra sabato pomeriggio?', tr: { bn: 'শনিবার বিকেলে প্রদর্শনীতে যেতে তোমার ইচ্ছে করছে?', en: 'Do you feel like going to the exhibition on Saturday afternoon?' } },
    { id: 'mi-dispiace', it: 'Mi dispiace molto, ma ho già un impegno.', tr: { bn: 'খুব দুঃখিত, তবে আমার ইতিমধ্যে একটা কাজ আছে।', en: 'I’m very sorry, but I already have plans.' } },
    { id: 'festeggiamo', it: 'Festeggeremo la laurea di Sara al ristorante!', tr: { bn: 'আমরা রেস্টুরেন্টে সারার গ্র্যাজুয়েশন উদযাপন করব!', en: 'We’ll celebrate Sara’s graduation at the restaurant!' } },
  ],
  grammar: [
    {
      id: 'connettivi',
      title: { bn: 'সংযোজক ও আমন্ত্রণ ফ্রেম', en: 'Connectors & social invitations' },
      explanation: {
        bn: 'কথোপকথনে ধারণা সাজাতে perché, quindi, però, invece, comunque, anche se ব্যবহার করুন। আমন্ত্রণে Ti/Le va di…? বা Ti andrebbe di…? খুবই স্বাভাবিক।',
        en: 'Link stories smoothly with perché, quindi, però, invece, comunque, anche se; invite naturally with Ti/Le va di…? or Ti andrebbe di…?',
      },
      table: [
        { label: 'আমন্ত্রণ', it: 'Ti va di uscire stasera?', tr: { bn: 'আজ রাতে বাইরে যেতে ইচ্ছে করছে?', en: 'Feel like going out tonight?' } },
        { label: 'স্বীকৃতি', it: 'Volentieri! A che ora ci vediamo?', tr: { bn: 'আনন্দে! কয়টায় দেখা হচ্ছে?', en: 'Gladly! What time do we meet?' } },
        { label: 'বিনয়ী না', it: 'Purtroppo non posso, sarà per la prossima volta.', tr: { bn: 'দুর্ভাগ্যবশত পারছি না, পরের বার হবে।', en: 'Unfortunately I can’t, next time.' } },
      ],
      examples: [
        { id: 'a2u4l3-e1', it: 'Anche se pioveva un po’, la festa è riuscita benissimo!', tr: { bn: 'একটু বৃষ্টি হলেও পার্টিটা দারুণ হয়েছে!', en: 'Even though it rained a bit, the party went really well!' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সপ্তাহান্তের দাওয়াত', en: 'Weekend invitation' },
    context: { bn: 'বন্ধুরা একসাথে জন্মদিন উদযাপনের পরিকল্পনা করছে।', en: 'Friends plan a birthday dinner together.' },
    lines: [
      { speaker: 'Rahim', it: 'Ciao Elena! Ti va di venire a cena da noi domenica sera?', tr: { bn: 'হ্যালো এলেনা! রবিবারে সন্ধ্যায় আমাদের বাসায় রাতের খাবারে আসতে চাও?', en: 'Hi Elena! Feel like coming to dinner at ours on Sunday evening?' } },
      { speaker: 'Elena', it: 'Volentieri! Cosa devo portare? Un dolce o delle bevande?', tr: { bn: 'আনন্দের সাথে! কী নিয়ে আসব? মিষ্টি নাকি পানীয়?', en: 'Gladly! What should I bring? Dessert or drinks?' } },
      { speaker: 'Rahim', it: 'Niente, abbiamo già preparato tutto. Porta solo il tuo buon umore!', tr: { bn: 'কিছুই না, আমরা সবই তৈরি করেছি। শুধু তোমার হাসিখুশি মনটা নিয়ে এসো!', en: 'Nothing, we have already prepared everything. Just bring your good mood!' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'সঠিক আমন্ত্রণ:', en: 'Natural invitation:' }, it: '___ prendere un tè insieme dopo la lezione?', options: ['Ti vai di', 'Ti va di', 'Sei di', 'Fai di'], answer: 1, explanation: { bn: 'ti va di + infinito সবসময় ৩য় পুরুষ একবচন।', en: 'Always ti va di + infinitive.' } },
    { id: 'q2', prompt: { bn: '"যদিও" অর্থের সংযোজক:', en: 'Connector meaning "even though":' }, it: '___ fa freddo, usciamo a fare una passeggiata.', options: ['Quindi', 'Anche se', 'Perché', 'Invece'], answer: 1, explanation: { bn: 'anche se = যদিও।', en: 'anche se = even though.' } },
    { id: 'q3', prompt: { bn: '"বরং / পরিবর্তে":', en: '"Instead":' }, it: 'Non prendo il bus; ___ vado a piedi.', options: ['invece', 'mentre', 'appena', 'già'], answer: 0, explanation: { bn: 'invece = পরিবর্তে / বরং।', en: 'invece = instead.' } },
    { id: 'q4', prompt: { bn: 'ফলাফল বা "অতএব" বোঝাতে:', en: 'Connector meaning "therefore / so":' }, it: 'Pioveva forte, ___ siamo rimasti a casa.', options: ['però', 'quindi', 'mentre', 'benché'], answer: 1, explanation: { bn: 'quindi = তাই / অতএব।', en: 'quindi = therefore / so.' } },
  ],
  tip: { bn: 'ইতালিয়ানে কেউ দাওয়াত দিলে "Cosa posso portare?" (কী আনতে পারি?) জিজ্ঞেস করা খুব সুন্দর ভদ্রতা।', en: 'Asking "Cosa posso portare?" when invited to someone’s home is great Italian etiquette.' },
};

export const a2Unit4: Unit = {
  id: 'a2-u4',
  number: 4,
  title: 'Salute, società e cultura',
  subtitle: { bn: 'স্বাস্থ্য, সংবাদ ও সামাজিক যোগাযোগ', en: 'Health, media & social life' },
  lessons: [lesson1, lesson2, lesson3],
};
