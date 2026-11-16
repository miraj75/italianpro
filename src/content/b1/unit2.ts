import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b1-u2-l1',
  number: 1,
  title: 'Ha detto che sarebbe arrivato presto',
  subtitle: { bn: 'পরোক্ষ উক্তি ও অতীতের ভবিষ্যৎ (condizionale passato)', en: 'Indirect speech & future-in-the-past' },
  minutes: 14,
  objectives: [
    { bn: 'প্রত্যক্ষ উক্তিকে বর্তমান ও অতীতের পরোক্ষ উক্তিতে রূপান্তর করতে পারবেন', en: 'Transform direct speech into present and past indirect speech' },
    { bn: 'অতীতে দেওয়া প্রতিশ্রুতি বা ভবিষ্যদ্বাণী বোঝাতে condizionale passato ব্যবহার করবেন', en: 'Use the past conditional (condizionale passato) for future-in-the-past' },
  ],
  phrases: [
    { id: 'b1u2l1-p1', it: 'Marco mi ha assicurato che avrebbe inviato il preventivo.', tr: { bn: 'মার্কো আমাকে আশ্বস্ত করেছে যে সে প্রাক্কলনটি পাঠাবে।', en: 'Marco assured me that he would send the quote.' } },
    { id: 'b1u2l1-p2', it: 'La segretaria disse che il direttore era partito il giorno prima.', tr: { bn: 'সচিব বললেন যে পরিচালক আগের দিন রওনা হয়েছেন।', en: 'The secretary said the director had left the day before.' } },
    { id: 'b1u2l1-p3', it: 'Mi hanno chiesto se avessi già firmato il verbale.', tr: { bn: 'তারা আমাকে জিজ্ঞেস করেছে আমি ইতিমধ্যে কার্যবিবরণীতে সই করেছি কি না।', en: 'They asked me whether I had already signed the minutes.' } },
    { id: 'b1u2l1-p4', it: 'Il medico mi ha consigliato di riposare per qualche giorno.', tr: { bn: 'চিকিৎসক আমাকে কয়েক দিন বিশ্রাম নিতে পরামর্শ দিয়েছেন।', en: 'The doctor advised me to rest for a few days.' } },
  ],
  grammar: [
    {
      id: 'discorso-indiretto-passato',
      title: { bn: 'অতীতে পরোক্ষ উক্তি ও condizionale passato', en: 'Past indirect speech & condizionale passato' },
      explanation: {
        bn: 'Ha detto / Disse che-র পরে কাল পরিবর্তন হয়: presente → imperfetto; passato prossimo → trapassato prossimo; futuro semplice → condizionale passato (avrebbe fatto / sarebbe andato)। আর আদেশ বা অনুরোধ বোঝাতে di + infinito বসে।',
        en: 'When the reporting verb is in the past, present shifts to imperfect, past shifts to pluperfect, and future shifts to the past conditional (avrebbe + participle / sarebbe + participle). Imperatives become di + infinitive.',
      },
      table: [
        { label: '«Vengo domani»', it: 'Disse che sarebbe venuto il giorno dopo.', tr: { bn: 'বলল যে পরের দিন আসবে।', en: 'He said he would come the next day.' } },
        { label: '«Ho già pagato»', it: 'Spiegò che aveva già pagato.', tr: { bn: 'ব্যাখ্যা করল যে সে আগেই পরিশোধ করেছে।', en: 'He explained that he had already paid.' } },
        { label: '«Firma qui!»', it: 'Mi chiese di firmare lì.', tr: { bn: 'আমাকে সেখানে সই করতে বলল।', en: 'He asked me to sign there.' } },
      ],
      examples: [
        { id: 'b1u2l1-e1', it: 'Giulia promise che ci avrebbe chiamato appena arrivata.', tr: { bn: 'জুলিয়া কথা দিয়েছিল যে পৌঁছানো মাত্রই আমাদের কল করবে।', en: 'Giulia promised she would call us as soon as she arrived.' } },
        { id: 'b1u2l1-e2', it: 'Volevano sapere quanto tempo avremmo impiegato.', tr: { bn: 'আমাদের কত সময় লাগবে তা তারা জানতে চেয়েছিল।', en: 'They wanted to know how long it would take us.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'গ্রাহকের সাথে ফোনালাপের সারাংশ', en: 'Summarising a client call' },
    context: { bn: 'রাহিম তার সহকর্মী পাওলোকে গ্রাহকের ফোন কলের কথা জানাচ্ছে।', en: 'Rahim updates his colleague Paolo on a client phone call.' },
    lines: [
      { speaker: 'Paolo', it: 'Rahim, hai sentito l’ingegner Conti? Che cosa ti ha detto?', tr: { bn: 'রাহিম, প্রকৌশলী কন্তির সাথে কি কথা হয়েছে? উনি কী বললেন?', en: 'Rahim, did you hear from Engineer Conti? What did he tell you?' } },
      { speaker: 'Rahim', it: 'Sì, mi ha chiamato un’ora fa. Ha detto che aveva controllato il progetto e che gli piaceva molto.', tr: { bn: 'হ্যাঁ, এক ঘণ্টা আগে ফোন করেছিলেন। বললেন যে তিনি প্রকল্পটি দেখেছেন এবং তাঁর খুব পছন্দ হয়েছে।', en: 'Yes, he called me an hour ago. He said he had checked the project and liked it very much.' } },
      { speaker: 'Paolo', it: 'Ottima notizia! E quando firmeranno il contratto definitivo?', tr: { bn: 'দারুণ খবর! আর তারা চূড়ান্ত চুক্তিতে কবে সই করবেন?', en: 'Great news! And when will they sign the final contract?' } },
      { speaker: 'Rahim', it: 'Mi ha assicurato che ci avrebbe mandato il contratto firmato entro venerdì prossimo.', tr: { bn: 'তিনি আমাকে আশ্বস্ত করেছেন যে আগামী শুক্রবারের মধ্যে স্বাক্ষরিত চুক্তি আমাদের পাঠিয়ে দেবেন।', en: 'He assured me that he would send us the signed contract by next Friday.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'অতীতে ভবিষ্যতের প্রতিশ্রুতি প্রকাশে কোন কাল বসে?', en: 'Which tense expresses a future promise reported in the past?' }, it: 'Luca ha promesso che ___ puntuale.', options: ['sarà arrivato', 'sarebbe arrivato', 'fosse arrivato', 'era arrivato'], answer: 1, explanation: { bn: 'অতীতের পরোক্ষ উক্তিতে ভবিষ্যৎ বোঝাতে condizionale passato (sarebbe arrivato) বসে।', en: 'Future-in-the-past takes condizionale passato.' } },
    { id: 'q2', prompt: { bn: 'পরোক্ষ আদেশে রূপান্তর করুন: «Compila il modulo!»', en: 'Report the imperative: «Compila il modulo!»' }, it: 'L’impiegato mi ha chiesto ___ il modulo.', options: ['che compilo', 'di compilare', 'a compilare', 'compilando'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: chiedere / dire + di + infinito — পরোক্ষ অনুজ্ঞায় ব্যবহৃত হয় di + infinitive।', en: 'Reported imperatives use di + infinitive.' } },
    { id: 'q3', prompt: { bn: '«domani» পরোক্ষ উক্তিতে কী হয়?', en: 'How does «domani» shift in past indirect speech?' }, options: ['ieri', 'il giorno seguente', 'due giorni fa', 'stasera'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: domani → il giorno seguente / il giorno dopo — domani পরিবর্তিত হয়ে হয় il giorno seguente।', en: 'domani shifts to il giorno seguente.' } },
    { id: 'q4', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete the sentence:' }, it: 'Ci dissero che ___ già spedito la raccomandata.', options: ['avevano', 'hanno', 'avranno', 'abbiano'], answer: 0, explanation: { bn: 'Ci dissero (অতীত) + পূর্ববর্তী কাজ = trapassato prossimo (avevano spedito)।', en: 'Prior action in past reported speech uses trapassato prossimo.' } },
  ],
  tip: { bn: 'ইতালিয়ানে অতীতের পরোক্ষ উক্তিতে ভবিষ্যৎ বোঝাতে ইংরেজি would-এর মতো একক condizionale presente না বসে সবসময় যৌগিক condizionale passato (avrebbe detto, sarebbe venuto) বসে।', en: 'Unlike English "would go", Italian always uses the compound past conditional (sarebbe andato) for future-in-the-past.' },
};

const lesson2: Lesson = {
  id: 'b1-u2-l2',
  number: 2,
  title: 'L’azienda per la quale lavoro',
  subtitle: { bn: 'উন্নত সম্বন্ধবাচক সর্বনাম (cui, il quale, il cui, ciò che)', en: 'Advanced relative pronouns (cui, il quale, il cui, ciò che)' },
  minutes: 14,
  objectives: [
    { bn: 'অব্যয় + cui এবং il quale / la quale সঠিকভাবে ব্যবহার করতে পারবেন', en: 'Use preposition + cui and inflected il quale / la quale accurately' },
    { bn: 'সম্বন্ধসূচক il cui এবং chi / quello che / ciò che দিয়ে জটিল বাক্য গড়বেন', en: 'Build complex sentences with possessive il cui and chi / ciò che' },
  ],
  phrases: [
    { id: 'b1u2l2-p1', it: 'La banca presso la quale abbiamo aperto il conto è molto efficiente.', tr: { bn: 'যে ব্যাংকে আমরা হিসাব খুলেছি সেটি অত্যন্ত দক্ষ।', en: 'The bank at which we opened the account is very efficient.' } },
    { id: 'b1u2l2-p2', it: 'È un’azienda i cui prodotti sono conosciuti in tutto il mondo.', tr: { bn: 'এটি এমন এক প্রতিষ্ঠান যার পণ্য সারা বিশ্বে পরিচিত।', en: 'It is a company whose products are known worldwide.' } },
    { id: 'b1u2l2-p3', it: 'Ciò che conta davvero è la trasparenza.', tr: { bn: 'যা সত্যিই গুরুত্বপূর্ণ তা হলো স্বচ্ছতা।', en: 'What really matters is transparency.' } },
    { id: 'b1u2l2-p4', it: 'Chi desidera iscriversi al bando deve presentare domanda online.', tr: { bn: 'যারা বিজ্ঞপ্তিতে নিবন্ধন করতে চায় তাদের অনলাইনে আবেদন করতে হবে।', en: 'Whoever wishes to register for the call must apply online.' } },
  ],
  grammar: [
    {
      id: 'relativi-il-quale-cui',
      title: { bn: 'il quale, il cui এবং ciò che', en: 'il quale, possessive cui, and ciò che' },
      explanation: {
        bn: 'অব্যয়ের পরে cui (con cui, per cui) অথবা লিঙ্গ-বচনভেদে il quale / la quale / i quali / le quali (con il quale, per la quale) বসে। মালিকানা বোঝাতে আর্টিকেল + cui + বিশেষ্য বসে (il cui autore = যাঁর লেখক)। আর "যা" বোঝাতে quello che বা আনুষ্ঠানিক ciò che বসে।',
        en: 'After prepositions use cui or the inflected il quale series. Express "whose" with article + cui + noun (matched to the possessed noun). Use quello che or ciò che for "what / that which".',
      },
      table: [
        { label: 'অব্যয় + cui / quale', it: 'il progetto a cui (al quale) lavoro', tr: { bn: 'যে প্রকল্পে আমি কাজ করি', en: 'the project on which I work' } },
        { label: 'মালিকানা (whose)', it: 'la collega la cui auto / i cui figli', tr: { bn: 'যাঁর গাড়ি / যাঁর সন্তানেরা', en: 'whose car / whose children' } },
        { label: 'যা (what)', it: 'quello che / ciò che dici', tr: { bn: 'তুমি যা বলছ', en: 'what you say' } },
      ],
      examples: [
        { id: 'b1u2l2-e1', it: 'I motivi per i quali abbiamo accettato sono chiari.', tr: { bn: 'যে কারণগুলোর জন্য আমরা গ্রহণ করেছি তা স্পষ্ট।', en: 'The reasons for which we accepted are clear.' } },
        { id: 'b1u2l2-e2', it: 'Dimmi quello di cui hai bisogno per l’ufficio.', tr: { bn: 'অফিসের জন্য তোমার কী দরকার তা আমাকে বলো।', en: 'Tell me what you need for the office.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'গবেষণা বৃত্তির সাক্ষাৎকার', en: 'Scholarship interview preparation' },
    context: { bn: 'মিনা ও প্রফেসর রসি বিশ্ববিদ্যালয়ের গবেষণা প্রকল্প নিয়ে আলোচনা করছেন।', en: 'Mina and Professor Rossi discuss a university research project.' },
    lines: [
      { speaker: 'Mina', it: 'Professore, ho letto il bando di concorso di cui mi aveva parlato ieri.', tr: { bn: 'প্রফেসর, আপনি গতকাল যে প্রতিযোগিতার বিজ্ঞপ্তির কথা বলেছিলেন সেটি আমি পড়েছি।', en: 'Professor, I read the competition notice you told me about yesterday.' } },
      { speaker: 'Prof. Rossi', it: 'Bene! Il laboratorio presso il quale svolgerai lo stage collabora con tre università europee.', tr: { bn: 'ভালো! যে ল্যাবরেটরিতে তুমি ইন্টার্নশিপ করবে সেটি তিনটি ইউরোপীয় বিশ্ববিদ্যালয়ের সাথে কাজ করে।', en: 'Good! The laboratory at which you will do your internship collaborates with three European universities.' } },
      { speaker: 'Mina', it: 'Ciò che mi interessa di più è la parte dedicata alle energie rinnovabili.', tr: { bn: 'নবায়নযোগ্য শক্তিবিষয়ক অংশটিই আমাকে সবচেয়ে বেশি আকর্ষণ করছে।', en: 'What interests me most is the section dedicated to renewable energy.' } },
      { speaker: 'Prof. Rossi', it: 'Allora ti presenterò la ricercatrice i cui studi hanno ispirato questo progetto.', tr: { bn: 'তাহলে যাঁর গবেষণা এই প্রকল্পকে অনুপ্রাণিত করেছে সেই গবেষকের সাথে তোমাকে পরিচয় করিয়ে দেব।', en: 'Then I will introduce you to the researcher whose studies inspired this project.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '«যাঁর উপন্যাসটি» — সঠিক সম্বন্ধসূচক রূপ:', en: 'How do you say «whose novel» (masc. sg.)?' }, it: 'Lo scrittore ___ romanzo ha vinto il premio è italiano.', options: ['che il', 'il cui', 'di chi', 'quale'], answer: 1, explanation: { bn: 'il romanzo পুংলিঙ্গ একবচন → il cui romanzo।', en: 'Article matches il romanzo → il cui romanzo.' } },
    { id: 'q2', prompt: { bn: 'অব্যয়সহ সম্বন্ধবাচক সর্বনাম:', en: 'Relative pronoun after preposition:' }, it: 'Le ragioni per ___ abbiamo protestato sono giuste.', options: ['che', 'le quali', 'chi', 'quello'], answer: 1, explanation: { bn: 'le ragioni (স্ত্রী বহুবচন) → per le quali (বা per cui)।', en: 'Feminine plural antecedent takes per le quali.' } },
    { id: 'q3', prompt: { bn: '«যা সত্যিই গুরুত্বপূর্ণ»:', en: '«What really matters»:' }, it: '___ conta davvero è la fiducia reciproca.', options: ['Chi', 'Ciò che', 'Cui', 'Il quale'], answer: 1, explanation: { bn: 'Ciò che / Quello che = যা।', en: 'Ciò che means what / that which.' } },
    { id: 'q4', prompt: { bn: '«যারা অংশ নিতে চায়» (একবচন ক্রিয়া):', en: '«Whoever wishes to participate»:' }, it: '___ vuole partecipare deve compilare il modulo.', options: ['Chi', 'Che', 'Cui', 'Quali'], answer: 0, explanation: { bn: 'Chi + ৩য় পুরুষ একবচন ক্রিয়া = যে কেউ / যারা।', en: 'Chi takes a 3rd-person singular verb.' } },
  ],
  tip: { bn: 'il cui / la cui / i cui / le cui-তে আর্টিকেলটি সবসময় পরের বিশেষ্যের লিঙ্গ ও বচন অনুযায়ী বসে, মালিকের লিঙ্গ অনুযায়ী নয়!', en: 'In il/la/i/le cui, the article always agrees with the noun that follows cui, never with the owner!' },
};

const lesson3: Lesson = {
  id: 'b1-u2-l3',
  number: 3,
  title: 'Me l’ha inviata stamattina',
  subtitle: { bn: 'যৌগিক সর্বনাম ও আনুষ্ঠানিক চিঠিপত্র', en: 'Combined pronouns & formal correspondence' },
  minutes: 14,
  objectives: [
    { bn: 'যৌগিক সর্বনাম (me lo, te la, glieli, ce ne) অতীত কালে লিঙ্গ-বচন মিলসহ ব্যবহার করবেন', en: 'Use combined pronouns in the past tense with participle agreement' },
    { bn: 'আনুষ্ঠানিক ইমেইল ও দাপ্তরিক চিঠির আদর্শ ভাষা (Le invio, In attesa di riscontro) প্রয়োগ করবেন', en: 'Write and understand formal Italian emails and official letters' },
  ],
  phrases: [
    { id: 'b1u2l3-p1', it: 'La ricevuta? Me l’ha consegnata stamattina l’impiegata.', tr: { bn: 'রসিদটি? আজ সকালে কর্মচারী আমাকে সেটি দিয়েছেন।', en: 'The receipt? The clerk handed it to me this morning.' } },
    { id: 'b1u2l3-p2', it: 'I moduli erano pronti e glieli abbiamo spediti per email.', tr: { bn: 'ফর্মগুলো প্রস্তুত ছিল এবং আমরা সেগুলো তাকে ইমেইলে পাঠিয়েছি।', en: 'The forms were ready and we sent them to him/her by email.' } },
    { id: 'b1u2l3-p3', it: 'In allegato trasmetto copia del contratto firmato.', tr: { bn: 'সংযুক্তিতে স্বাক্ষরিত চুক্তির অনুলিপি পাঠাচ্ছি।', en: 'Attached herewith I send a copy of the signed contract.' } },
    { id: 'b1u2l3-p4', it: 'In attesa di un Suo cortese riscontro, Le porgo distinti saluti.', tr: { bn: 'আপনার সদয় উত্তরের অপেক্ষায় রইলাম এবং সশ্রদ্ধ শুভেচ্ছা জানাচ্ছি।', en: 'Awaiting your kind reply, I send my best regards.' } },
  ],
  grammar: [
    {
      id: 'pronomi-doppi-passato',
      title: { bn: 'যৌগিক সর্বনাম অতীতে ও আনুষ্ঠানিক নিবেদন', en: 'Combined pronouns in the past & formal register' },
      explanation: {
        bn: 'পরোক্ষ সর্বনাম (mi, ti, ci, vi) প্রত্যক্ষ সর্বনামের (lo, la, li, le, ne) আগে বসলে -i বদলে -e হয়: me lo, te la, ce li, ve ne। gli ও le উভয়েই glie- হয়ে যুক্ত হয়: glielo, gliela, glieli, gliele, gliene। অতীতে পার্টিসিপলটি lo/la/li/le অনুযায়ী মেলে: me l’ha data, glieli ho mandati।',
        en: 'Indirect mi/ti/ci/vi become me/te/ce/ve before lo/la/li/le/ne; gli/le combine into glielo/gliela/glieli/gliele/gliene. In compound tenses, the participle agrees with lo/la/li/le.',
      },
      table: [
        { label: 'mi + la (passato)', it: 'me l’ha mandata', tr: { bn: 'আমাকে সেটি (স্ত্রী) পাঠিয়েছে', en: 'sent it (f.) to me' } },
        { label: 'gli/le + li (passato)', it: 'glieli ho portati', tr: { bn: 'তাকে সেগুলো নিয়ে দিয়েছি', en: 'brought them (m.) to him/her' } },
        { label: 'আনুষ্ঠানিক Lei', it: 'Le confermo / La ringrazio / Suo riscontro', tr: { bn: 'আপনাকে নিশ্চিত করছি / ধন্যবাদ জানাচ্ছি', en: 'I confirm to you / thank you' } },
      ],
      examples: [
        { id: 'b1u2l3-e1', it: 'Le chiavi di riserva? Ce le ha lasciate il proprietario.', tr: { bn: 'অতিরিক্ত চাবিগুলো? মালিক আমাদের কাছে সেগুলো রেখে গেছেন।', en: 'The spare keys? The owner left them with us.' } },
        { id: 'b1u2l3-e2', it: 'Resto a disposizione per qualsiasi ulteriore chiarimento.', tr: { bn: 'পরবর্তী যেকোনো স্পষ্টীকরণের জন্য আমি প্রস্তুত আছি।', en: 'I remain available for any further clarification.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'দাপ্তরিক নথি পাঠানো', en: 'Sending official documents' },
    context: { bn: 'ফারহানা হিসাবরক্ষকের দপ্তরে ফোনে কথা বলছে।', en: 'Farhana speaks on the phone with the accountant’s office.' },
    lines: [
      { speaker: 'Farhana', it: 'Buongiorno, chiamo per sapere se avete ricevuto le fatture del trimestre.', tr: { bn: 'শুভ সকাল, ত্রৈমাসিকের বিলগুলো আপনারা পেয়েছেন কি না জানতে ফোন করেছি।', en: 'Good morning, I am calling to know whether you received the quarterly invoices.' } },
      { speaker: 'Segretario', it: 'Buongiorno signora! Sì, ce le ha inoltrate stamattina la Sua collega.', tr: { bn: 'শুভ সকাল ম্যাডাম! হ্যাঁ, আজ সকালে আপনার সহকর্মী সেগুলো আমাদের ফরোয়ার্ড করেছেন।', en: 'Good morning madam! Yes, your colleague forwarded them to us this morning.' } },
      { speaker: 'Farhana', it: 'Perfetto. E il modello firmato per l’agenzia delle entrate?', tr: { bn: 'চমৎকার। আর রাজস্ব সংস্থার জন্য স্বাক্ষরিত ফর্মটি?', en: 'Perfect. And the signed form for the revenue agency?' } },
      { speaker: 'Segretario', it: 'Gliel’abbiamo appena inviato via PEC. Le arriverà tra pochi minuti.', tr: { bn: 'আমরা এইমাত্র সেটি আপনাকে প্রত্যয়িত ইমেইলে পাঠিয়েছি। কয়েক মিনিটের মধ্যেই পেয়ে যাবেন।', en: 'We have just sent it to you via certified email. It will reach you in a few minutes.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '«আমি সেগুলো (i biglietti) তাকে কিনে দিয়েছি»:', en: '«I bought them (i biglietti) for her»:' }, it: 'I biglietti? ___ ho comprati ieri.', options: ['Gli li', 'Glieli', 'Gliele', 'Le li'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: le + li = glieli (+ comprati) — le + li যুক্ত হয়ে গঠিত হয় glieli।', en: 'le + li combines into glieli.' } },
    { id: 'q2', prompt: { bn: 'অতীতে যৌগিক সর্বনামের সাথে পার্টিসিপল মিল:', en: 'Participle agreement with combined pronoun:' }, it: 'La raccomandata era urgente, perciò te l’abbiamo ___ subito.', options: ['spedito', 'spedita', 'spediti', 'spedite'], answer: 1, explanation: { bn: 'l’ = la raccomandata (স্ত্রী একবচন) → spedita।', en: 'la raccomandata is feminine singular → spedita.' } },
    { id: 'q3', prompt: { bn: 'আনুষ্ঠানিক চিঠিতে «সংযুক্তিতে» কীভাবে লেখা হয়?', en: 'How do you write «Attached herewith» in a formal email?' }, options: ['In allegato', 'Qui dentro', 'Con ciao', 'Per te'], answer: 0, explanation: { bn: 'আনুষ্ঠানিক ইমেইলে In allegato ব্যবহৃত হয়।', en: 'In allegato is the standard formal phrase.' } },
    { id: 'q4', prompt: { bn: '«তারা আমাদের দুটি পাঠিয়েছে» (ne):', en: '«They sent two of them to us»:' }, it: 'Servivano due copie e ___ hanno mandate subito.', options: ['ci ne', 'ce ne', 'ce le', 'me ne'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: ci + ne = ce ne — ci পরিবর্তিত হয়ে হয় ce before ne: ce ne।', en: 'ci changes to ce before ne: ce ne.' } },
  ],
  tip: { bn: 'glielo/gliela/glieli/gliele পুরুষ ("তাকে"), স্ত্রী ("তাকে") এবং আনুষ্ঠানিক Lei ("আপনাকে") — তিন ক্ষেত্রেই একই রূপে ব্যবহৃত হয়!', en: 'glielo/gliela/glieli/gliele serves for "to him", "to her", and formal "to you (Lei)" alike!' },
};

export const b1Unit2: Unit = {
  id: 'b1-u2',
  number: 2,
  title: 'Lavoro, discorso indiretto e registro formale',
  subtitle: { bn: 'কর্মজীবন, পরোক্ষ উক্তি ও আনুষ্ঠানিক যোগাযোগ', en: 'Work, indirect speech, relative clauses & formal register' },
  lessons: [lesson1, lesson2, lesson3],
};
