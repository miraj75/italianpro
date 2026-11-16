import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'a2-u1-l1',
  number: 1,
  title: 'Cosa hai fatto ieri?',
  subtitle: { bn: 'নিকট অতীত — avere সহ ক্রিয়া', en: 'Passato prossimo with avere' },
  minutes: 12,
  objectives: [
    { bn: 'avere + পাস্ট পার্টিসিপল দিয়ে অতীতের কাজ বলতে পারবেন', en: 'Talk about completed past actions with avere + past participle' },
    { bn: '-are, -ere, -ire এবং অনিয়মিত পার্টিসিপল চিনবেন', en: 'Use regular (-ato/-uto/-ito) and key irregular participles' },
  ],
  phrases: [
    { id: 'ieri-ho-lavorato', it: 'Ieri ho lavorato fino alle sette.', tr: { bn: 'গতকাল আমি সাতটা পর্যন্ত কাজ করেছি।', en: 'Yesterday I worked until seven.' } },
    { id: 'ho-comprato', it: 'Ho comprato due biglietti online.', tr: { bn: 'আমি অনলাইনে দুটি টিকিট কিনেছি।', en: 'I bought two tickets online.' } },
    { id: 'ho-fatto', it: 'Che cosa hai fatto stamattina?', tr: { bn: 'আজ সকালে তুমি কী করেছো?', en: 'What did you do this morning?' } },
    { id: 'ho-visto', it: 'Abbiamo visto un bel film al cinema.', tr: { bn: 'আমরা সিনেমা হলে একটা সুন্দর ছবি দেখেছি।', en: 'We watched a great film at the cinema.' } },
    { id: 'non-ho-capito', it: 'Scusi, non ho capito l’ultima domanda.', tr: { bn: 'মাফ করবেন, শেষ প্রশ্নটা বুঝিনি।', en: 'Sorry, I didn’t understand the last question.' } },
  ],
  grammar: [
    {
      id: 'passato-prossimo',
      title: { bn: 'নিকট অতীত কাল: Passato prossimo (avere সহায়ক ক্রিয়া যোগে)', en: 'Passato prossimo with avere' },
      explanation: {
        bn: 'সম্পন্ন অতীত কাজ বোঝাতে avere (বর্তমান রূপ: ho, hai, ha, abbiamo, avete, hanno) + পাস্ট পার্টিসিপল বসে। -are → -ato, -ere → -uto, -ire → -ito। অনিয়মিত রূপ: fare→fatto, leggere→letto, scrivere→scritto, vedere→visto, prendere→preso।',
        en: 'Form passato prossimo with present avere + past participle (-ato, -uto, -ito). Common irregulars: fatto, letto, scritto, visto, preso.',
      },
      table: [
        { label: 'parlare', it: 'ho parlato', tr: { bn: 'আমি কথা বলেছি', en: 'I spoke / have spoken' } },
        { label: 'ricevere', it: 'hai ricevuto', tr: { bn: 'তুমি পেয়েছো', en: 'you received' } },
        { label: 'finire', it: 'ha finito', tr: { bn: 'সে শেষ করেছে', en: 'he/she finished' } },
        { label: 'fare (irr.)', it: 'abbiamo fatto', tr: { bn: 'আমরা করেছি', en: 'we did / made' } },
      ],
      examples: [
        { id: 'a2u1l1-e1', it: 'Ho scritto una mail al mio capo.', tr: { bn: 'আমি আমার বসকে একটি ইমেইল লিখেছি।', en: 'I wrote an email to my boss.' } },
        { id: 'a2u1l1-e2', it: 'Avete già preso il caffè?', tr: { bn: 'তোমরা কি ইতিমধ্যে কফি খেয়েছো?', en: 'Have you already had coffee?' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'সপ্তাহান্তের গল্প', en: 'Weekend catch-up' },
    context: { bn: 'রাহিম ও জুলিয়া সোমবার সকালে অফিসে কথা বলছে।', en: 'Rahim and Giulia chat on Monday morning at work.' },
    lines: [
      { speaker: 'Giulia', it: 'Ciao Rahim! Com’è andato il fine settimana? Che cosa hai fatto?', tr: { bn: 'হ্যালো রাহিম! সপ্তাহান্ত কেমন গেল? কী করেছো?', en: 'Hi Rahim! How was your weekend? What did you do?' } },
      { speaker: 'Rahim', it: 'Sabato ho pulito casa e poi ho cucinato per alcuni amici.', tr: { bn: 'শনিবার ঘর পরিষ্কার করেছি, তারপর কয়েকজন বন্ধুর জন্য রান্না করেছি।', en: 'On Saturday I cleaned the flat and then cooked for some friends.' } },
      { speaker: 'Giulia', it: 'Che bello! E domenica avete visto il concerto in piazza?', tr: { bn: 'দারুণ! আর রবিবারে তোমরা কি চত্বরের কনসার্ট দেখেছো?', en: 'Lovely! And on Sunday did you watch the concert in the square?' } },
      { speaker: 'Rahim', it: 'Sì, abbiamo ascoltato ottima musica e abbiamo preso un gelato.', tr: { bn: 'হ্যাঁ, চমৎকার গান শুনেছি আর আইসক্রিম খেয়েছি।', en: 'Yes, we listened to great music and had ice cream.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'leggere-এর সঠিক পাস্ট পার্টিসিপল কোনটি?', en: 'What is the past participle of leggere?' }, options: ['leggeto', 'legguto', 'letto', 'leggito'], answer: 2, explanation: { bn: 'ব্যাকরণ সূত্র: leggere → letto — leggere একটি অনিয়মিত ক্রিয়া, যার রূপ: letto।', en: 'leggere is irregular: letto.' } },
    { id: 'q2', prompt: { bn: 'শূন্যস্থান পূরণ করুন:', en: 'Complete:' }, it: 'Ieri noi ___ un buon libro.', options: ['abbiamo letto', 'siamo letti', 'ho letto', 'avete letto'], answer: 0, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «noi + abbiamo letto» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'noi uses abbiamo.' } },
    { id: 'q3', prompt: { bn: 'scrivere-এর অতীত রূপ:', en: 'Past participle of scrivere:' }, it: 'Hai ___ il messaggio?', options: ['scrivuto', 'scritto', 'scrivito', 'scrito'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «scrivere» থেকে পরিবর্তিত হয়ে «scritto» ব্যবহৃত হয়।', en: 'scrivere → scritto.' } },
    { id: 'q4', prompt: { bn: 'fare-এর অতীত রূপ:', en: 'Past participle of fare:' }, it: 'Che cosa avete ___ ieri?', options: ['fatto', 'fato', 'facuto', 'farito'], answer: 0, explanation: { bn: 'সঠিক রূপান্তর: «fare» থেকে পরিবর্তিত হয়ে «fatto» ব্যবহৃত হয়।', en: 'fare → fatto.' } },
  ],
  tip: { bn: 'già (ইতিমধ্যে), ancora (এখনো), appena (এইমাত্র) সাধারণত সহায়ক ক্রিয়া ও পার্টিসিপলের মাঝখানে বসে: Ho già mangiato।', en: 'Adverbs già, ancora, appena normally sit between avere/essere and the participle: Ho già mangiato.' },
};

const lesson2: Lesson = {
  id: 'a2-u1-l2',
  number: 2,
  title: 'Siamo partiti presto',
  subtitle: { bn: 'essere সহ অতীত ও লিঙ্গ-বচন মিল', en: 'Passato prossimo with essere & agreement' },
  minutes: 12,
  objectives: [
    { bn: 'কোন ক্রিয়াগুলোর সাথে essere বসে তা চিনবেন', en: 'Know which verbs take essere in the past tense' },
    { bn: 'পার্টিসিপলের শেষে -o/-a/-i/-e ঠিকভাবে মেলাতে পারবেন', en: 'Agree past participles in gender and number with essere' },
  ],
  phrases: [
    { id: 'sono-andato', it: 'Sono andato al comune alle nove.', tr: { bn: 'আমি নয়টায় পৌরসভায় গিয়েছিলাম।', en: 'I went to the town hall at nine.' } },
    { id: 'siamo-partiti', it: 'Siamo partiti con il treno delle otto.', tr: { bn: 'আমরা আটটার ট্রেনে রওনা দিয়েছি।', en: 'We left on the eight o’clock train.' } },
    { id: 'maria-arrivata', it: 'Maria è arrivata in anticipo.', tr: { bn: 'মারিয়া সময়ের আগেই পৌঁছেছে।', en: 'Maria arrived early.' } },
    { id: 'si-sono-alzate', it: 'Le mie amiche si sono alzate presto.', tr: { bn: 'আমার বান্ধবীরা তাড়াতাড়ি উঠেছে।', en: 'My friends got up early.' } },
  ],
  grammar: [
    {
      id: 'passato-essere',
      title: { bn: 'essere + পার্টিসিপলের মিল', en: 'essere + participle agreement' },
      explanation: {
        bn: 'যাওয়া-আসা (andare, venire, arrivare, partire, tornare, entrare, uscire), অবস্থান/পরিবর্তন (stare, restare, rimanere, nascere, diventare, morire) ও সব প্রতিফলক ক্রিয়া essere নেয়। কর্তা অনুযায়ী শেষ অক্ষর বদলায়: -o, -a, -i, -e।',
        en: 'Motion, state-change, and reflexive verbs take essere; the participle matches the subject (-o, -a, -i, -e).',
      },
      table: [
        { label: 'io (m / f)', it: 'sono andato / andata', tr: { bn: 'আমি গিয়েছি', en: 'I went' } },
        { label: 'lei', it: 'è rimasta', tr: { bn: 'সে থেকে গেছে', en: 'she stayed' } },
        { label: 'noi (m)', it: 'siamo venuti', tr: { bn: 'আমরা এসেছি', en: 'we came' } },
        { label: 'loro (f)', it: 'sono partite', tr: { bn: 'তারা রওনা হয়েছে', en: 'they left (f.)' } },
      ],
      examples: [
        { id: 'a2u1l2-e1', it: 'Sara e Nadia sono uscite insieme.', tr: { bn: 'সারা ও নাদিয়া একসাথে বের হয়েছে।', en: 'Sara and Nadia went out together.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ট্রেন থেকে নেমে', en: 'Arriving at the station' },
    context: { bn: 'তারিক বোলোনিয়ায় মারিয়ার সাথে দেখা করছে।', en: 'Tariq meets Maria at Bologna station.' },
    lines: [
      { speaker: 'Tariq', it: 'Ciao Maria! Quando sei arrivata?', tr: { bn: 'হ্যালো মারিয়া! কখন পৌঁছেছো?', en: 'Hi Maria! When did you arrive?' } },
      { speaker: 'Maria', it: 'Sono arrivata dieci minuti fa. Il treno è arrivato puntuale.', tr: { bn: 'দশ মিনিট আগে পৌঁছেছি। ট্রেন ঠিক সময়েই এসেছে।', en: 'I arrived ten minutes ago. The train came on time.' } },
      { speaker: 'Tariq', it: 'Ottimo! Anche i nostri amici sono già usciti di casa.', tr: { bn: 'দারুণ! আমাদের বন্ধুরাও বাড়ি থেকে বেরিয়ে পড়েছে।', en: 'Great! Our friends have also left home already.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'সঠিক রূপ বেছে নিন (স্ত্রীলিঙ্গ):', en: 'Pick the feminine form:' }, it: 'Giulia ___ a Milano ieri.', options: ['ha andato', 'è andato', 'è andata', 'ha andata'], answer: 2, explanation: { bn: 'andare essere নেয় এবং Giulia স্ত্রীলিঙ্গ → è andata।', en: 'andare takes essere + feminine -a.' } },
    { id: 'q2', prompt: { bn: 'প্রতিফলক ক্রিয়া অতীতে কী সহায়ক নেয়?', en: 'Which auxiliary do reflexives take in the past?' }, it: 'Noi ___ svegliati alle sette.', options: ['abbiamo', 'ci abbiamo', 'ci siamo', 'siamo ci'], answer: 2, explanation: { bn: 'প্রতিফলক ক্রিয়া সবসময় ci siamo…।', en: 'Always ci siamo + agreed participle.' } },
    { id: 'q3', prompt: { bn: 'নিচের কোন ক্রিয়াটি avere নেয়?', en: 'Which verb takes avere?' }, options: ['partire', 'venire', 'viaggiare', 'nascere'], answer: 2, explanation: { bn: 'viaggiare (ভ্রমণ করা) কার্যকলাপ হওয়ায় avere নেয়।', en: 'viaggiare uses avere (ho viaggiato).' } },
    { id: 'q4', prompt: { bn: 'স্ত্রীলিঙ্গ বহুবচন মিল:', en: 'Feminine plural agreement:' }, it: 'Le ragazze sono ___ presto.', options: ['partito', 'partita', 'partiti', 'partite'], answer: 3, explanation: { bn: 'le ragazze (স্ত্রী বহুবচন) → partite।', en: 'Feminine plural subject requires -e.' } },
  ],
  tip: { bn: 'প্রত্যক্ষ সর্বনাম lo/la/li/le আগে বসলে avere-সহ পার্টিসিপলও বদলায়: Le chiavi? Le ho trovate!।', en: 'When lo/la/li/le precedes avere, the participle agrees with the pronoun: Le ho trovate!' },
};

const lesson3: Lesson = {
  id: 'a2-u1-l3',
  number: 3,
  title: 'Quando ero piccolo…',
  subtitle: { bn: 'imperfetto ও অতীতের গল্প বলা', en: 'The imperfect & past narration' },
  minutes: 12,
  objectives: [
    { bn: 'imperfetto দিয়ে অতীতের অভ্যাস ও বর্ণনা দিতে পারবেন', en: 'Describe past habits and scenes with the imperfect' },
    { bn: 'গল্পে imperfetto ও passato prossimo একসাথে ব্যবহার করবেন', en: 'Combine imperfetto and passato prossimo naturally' },
  ],
  phrases: [
    { id: 'da-bambino', it: 'Da bambino giocavo sempre nel cortile.', tr: { bn: 'ছোটবেলায় আমি সবসময় উঠানে খেলতাম।', en: 'As a child I always played in the courtyard.' } },
    { id: 'faceva-freddo', it: 'Faceva freddo e pioveva forte.', tr: { bn: 'ঠান্ডা ছিল এবং জোরে বৃষ্টি হচ্ছিল।', en: 'It was cold and raining heavily.' } },
    { id: 'mentre-dormivo', it: 'Mentre studiavo, è suonato il telefono.', tr: { bn: 'আমি যখন পড়ছিলাম, তখন ফোন বেজে উঠল।', en: 'While I was studying, the phone rang.' } },
  ],
  grammar: [
    {
      id: 'imperfetto',
      title: { bn: 'imperfetto রূপ ও ব্যবহার', en: 'Imperfetto forms & contrast' },
      explanation: {
        bn: 'মূল ধাতু + -vo, -vi, -va, -vamo, -vate, -vano (parlavo, scrivevo, dormivo)। essere অনিয়মিত: ero, eri, era, eravamo, eravate, erano। পটভূমি ও অভ্যাস imperfetto-তে, হঠাৎ বা সমাপ্ত ঘটনা passato prossimo-তে।',
        en: 'Endings -vo, -vi, -va, -vamo, -vate, -vano. essere is ero..erano. Background/habits = imperfetto; bounded events = passato prossimo.',
      },
      table: [
        { label: 'essere', it: 'ero, eri, era, eravamo, eravate, erano', tr: { bn: 'ছিলাম / ছিল', en: 'was / were' } },
        { label: 'fare', it: 'facevo, facevi, faceva…', tr: { bn: 'করতাম / করছিলাম', en: 'used to do / was doing' } },
        { label: 'dire', it: 'dicevo, dicevi, diceva…', tr: { bn: 'বলতাম / বলছিলাম', en: 'used to say' } },
      ],
      examples: [
        { id: 'a2u1l3-e1', it: 'Ogni estate andavamo al mare con i nonni.', tr: { bn: 'প্রতি গ্রীষ্মে আমরা দাদা-দাদির সাথে সমুদ্রে যেতাম।', en: 'Every summer we went to the sea with our grandparents.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'শৈশবের স্মৃতি', en: 'Childhood memories' },
    context: { bn: 'নাদিয়া ও মার্কো শৈশবের কথা মনে করছে।', en: 'Nadia and Marco talk about growing up.' },
    lines: [
      { speaker: 'Marco', it: 'Nadia, cosa facevi d’estate quando eri piccola?', tr: { bn: 'নাদিয়া, ছোটবেলায় গ্রীষ্মকালে তুমি কী করতে?', en: 'Nadia, what did you use to do in summer when you were little?' } },
      { speaker: 'Nadia', it: 'Ogni anno andavamo in campagna dai miei nonni. Era bellissimo!', tr: { bn: 'প্রতি বছর আমরা দাদা-দাদির কাছে গ্রামে যেতাম। খুব সুন্দর ছিল!', en: 'Every year we went to my grandparents in the countryside. It was wonderful!' } },
      { speaker: 'Marco', it: 'Anch’io! Una volta mentre giocavamo in giardino, è arrivato un temporale improvviso.', tr: { bn: 'আমিও! একবার আমরা যখন বাগানে খেলছিলাম, হঠাৎ ঝড় এলো।', en: 'Me too! Once while we were playing in the garden, a sudden storm arrived.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'হঠাৎ ঘটে যাওয়া কাজের কাল:', en: 'Tense for a sudden interrupting event:' }, it: 'Mentre cenavo, ___ il mio amico.', options: ['arrivava', 'è arrivato', 'arriverà', 'arriva'], answer: 1, explanation: { bn: 'হঠাৎ আগমন সম্পন্ন ঘটনা → è arrivato।', en: 'Single interruption uses passato prossimo.' } },
    { id: 'q2', prompt: { bn: 'noi-এর সাথে essere imperfetto:', en: 'Imperfect of essere for noi:' }, options: ['siamo stati', 'eravamo', 'eravate', 'erano'], answer: 1, explanation: { bn: 'সঠিক উত্তর ও ব্যাকরণ সূত্র: «noi eravamo» (noi eravamo)।', en: 'noi eravamo.' } },
    { id: 'q3', prompt: { bn: 'আবহাওয়া বর্ণনায়:', en: 'Setting a weather scene in the past:' }, it: 'Ieri mattina ___ molto caldo.', options: ['ha fatto', 'faceva', 'fa', 'fece'], answer: 1, explanation: { bn: 'পটভূমি বর্ণনায় imperfetto (faceva)।', en: 'Scene description uses faceva.' } },
    { id: 'q4', prompt: { bn: 'অতীতের নিয়মিত অভ্যাস:', en: 'Habitual action in childhood:' }, it: 'Da bambino ___ sempre in giardino.', options: ['ho giocato', 'giocavo', 'giocherò', 'gioco'], answer: 1, explanation: { bn: 'অতীতের অভ্যাসে giocavo (imperfetto)।', en: 'Past habits use giocavo.' } },
  ],
  tip: { bn: 'mentre (যখন একই সময়ে) শব্দটি দেখলে সাধারণত এর পর imperfetto বসে।', en: 'After mentre ("while"), Italian almost always uses the imperfetto.' },
};

export const a2Unit1: Unit = {
  id: 'a2-u1',
  number: 1,
  title: 'Il passato prossimo e i ricordi',
  subtitle: { bn: 'অতীত কাল ও শৈশবের গল্প', en: 'Past tenses and memories' },
  lessons: [lesson1, lesson2, lesson3],
};
