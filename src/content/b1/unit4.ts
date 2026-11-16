import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b1-u4-l1',
  number: 1,
  title: 'Vedrai che te la caverai benissimo!',
  subtitle: { bn: 'সর্বনামযুক্ত ক্রিয়া (verbi pronominali) ও ci/ne বাগধারা', en: 'Pronominal verbs (cavarsela, sentirsela, prendersela) & idioms' },
  minutes: 14,
  objectives: [
    { bn: 'cavarsela, sentirsela, prendersela, farcela, averne abbastanza স্বাভাবিকভাবে ব্যবহার করবেন', en: 'Use idiomatic pronominal verbs like cavarsela, sentirsela, prendersela, farcela' },
    { bn: 'ci ও ne যুক্ত প্রচলিত বাগধারা (tenerci, metterci, valere la pena) চিনবেন ও প্রয়োগ করবেন', en: 'Master high-frequency ci/ne idioms in everyday conversation' },
  ],
  phrases: [
    { id: 'b1u4l1-p1', it: 'Non ti preoccupare per l’esame: vedrai che te la caverai benissimo!', tr: { bn: 'পরীক্ষা নিয়ে চিন্তা কোরো না: দেখবে তুমি দারুণভাবে সামলে নেবে!', en: 'Do not worry about the exam: you will see you will manage very well!' } },
    { id: 'b1u4l1-p2', it: 'Sono stanco, stasera non me la sento di guidare nella nebbia.', tr: { bn: 'আমি ক্লান্ত, আজ রাতে কুয়াশায় গাড়ি চালানোর সাহস পাচ্ছি না।', en: 'I am tired, tonight I do not feel up to driving in the fog.' } },
    { id: 'b1u4l1-p3', it: 'Non te la prendere per una battuta: non voleva offenderti.', tr: { bn: 'একটা রসিকতার জন্য মন খারাপ কোরো না: সে তোমাকে আঘাত করতে চায়নি।', en: 'Do not take offence at a joke: he did not mean to offend you.' } },
    { id: 'b1u4l1-p4', it: 'Ci tengo molto che tu venga alla mia festa di laurea.', tr: { bn: 'তুমি আমার স্নাতক উৎসবে আসো এটা আমি খুব চাই।', en: 'It means a lot to me that you come to my graduation party.' } },
  ],
  grammar: [
    {
      id: 'verbi-pronominali-b1',
      title: { bn: 'সর্বনামযুক্ত বাগধারা ক্রিয়া: Verbi pronominali (cavarsela, sentirsela, prendersela, farcela)', en: 'Idiomatic pronominal verbs & ci/ne expressions' },
      explanation: {
        bn: 'ইতালিয়ানে কিছু ক্রিয়ার সাথে সর্বনাম (ci, la, ne, si) স্থায়ীভাবে যুক্ত হয়ে নতুন বাগধারামূলক অর্থ তৈরি করে: cavarsela (সামলে নেওয়া), sentirsela di (মানসিক/শারীরিক শক্তি পাওয়া), prendersela (মন খারাপ করা/রাগ করা), farcela (সফল হওয়া), metterci (সময় লাগানো), tenerci (গুরুত্ব দেওয়া)।',
        en: 'Pronominal verbs combine a verb with fixed clitics (si, ci, la, ne) to create idiomatic meanings: cavarsela (get by/manage), sentirsela (feel up to), prendersela (take offence), farcela (succeed), tenerci (care deeply).',
      },
      table: [
        { label: 'cavarsela', it: 'me la cavo, te la cavi, se la cava…', tr: { bn: 'সামলে নিই / নাও / নেয়', en: 'I/you/he manage(s)' } },
        { label: 'sentirsela (passato)', it: 'non me la sono sentita', tr: { bn: 'সাহস/শক্তি পাইনি', en: 'I did not feel up to it' } },
        { label: 'farcela', it: 'ce la faccio / ce l’abbiamo fatta!', tr: { bn: 'আমি পারব / আমরা পেরেছি!', en: 'I can do it / we made it!' } },
      ],
      examples: [
        { id: 'b1u4l1-e1', it: 'Quanto ci mette il treno regionale per arrivare a Firenze?', tr: { bn: 'আঞ্চলিক ট্রেনে ফ্লোরেন্স পৌঁছাতে কতক্ষণ লাগে?', en: 'How long does the regional train take to reach Florence?' } },
        { id: 'b1u4l1-e2', it: 'Dopo tre ore di fila allo sportello, non ne potevo davvero più.', tr: { bn: 'কাউন্টারে তিন ঘণ্টা লাইনে দাঁড়ানোর পর আমার আর ধৈর্য ছিল না।', en: 'After three hours in line at the counter, I really could not take it anymore.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'থিসিস উপস্থাপনার আগে', en: 'Before the thesis defence' },
    context: { bn: 'জুলিয়া তার বন্ধু রাহিমকে থিসিস উপস্থাপনার আগে সাহস জোগাচ্ছে।', en: 'Giulia encourages her friend Rahim before his thesis defence.' },
    lines: [
      { speaker: 'Rahim', it: 'Giulia, tra venti minuti tocca a me discutere la tesi. Ho un’ansia incredibile, quasi non me la sento di entrare!', tr: { bn: 'জুলিয়া, বিশ মিনিট পর আমার থিসিস উপস্থাপনের পালা। ভীষণ দুশ্চিন্তা হচ্ছে, ভেতরে ঢোকার প্রায় সাহসই পাচ্ছি না!', en: 'Giulia, in twenty minutes it is my turn to defend my thesis. I am incredibly anxious, I almost do not feel up to going in!' } },
      { speaker: 'Giulia', it: 'Stai tranquillo, Rahim! Hai lavorato per mesi a questa ricerca: vedrai che ce la farai alla grande.', tr: { bn: 'শান্ত থাকো, রাহিম! তুমি মাসের পর মাস এই গবেষণায় কাজ করেছ: দেখবে দারুণভাবে সফল হবে।', en: 'Stay calm, Rahim! You have worked for months on this research: you will see you will do great.' } },
      { speaker: 'Rahim', it: 'E se la commissione mi facesse una domanda difficilissima?', tr: { bn: 'আর কমিশন যদি আমাকে খুব কঠিন কোনো প্রশ্ন করে?', en: 'And what if the committee asks me a really hard question?' } },
      { speaker: 'Giulia', it: 'Conosci l’argomento meglio di chiunque altro: te la caverai benissimo. E non dimenticare che ci tengo a festeggiare insieme dopo!', tr: { bn: 'তুমি বিষয়টা অন্য যে কারো চেয়ে ভালো জানো: চমৎকারভাবে সামলে নেবে। আর ভুলে যেয়ো না পরে একসাথে উদযাপন করাটা আমার কাছে খুব গুরুত্বপূর্ণ!', en: 'You know the topic better than anyone else: you will handle it really well. And do not forget it means a lot to me to celebrate together afterwards!' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '«দেখবে তুমি দারুণভাবে সামলে নেবে» (tu + cavarsela):', en: '«You will see you will manage very well»:' }, it: 'Vedrai che ___ caverai benissimo!', options: ['te la', 'ti lo', 'se la', 'ce la'], answer: 0, explanation: { bn: 'সঠিক রূপান্তর: «tu» থেকে পরিবর্তিত হয়ে «te la caverai» ব্যবহৃত হয়।', en: 'tu takes te la caverai.' } },
    { id: 'q2', prompt: { bn: '«আজ রাতে আমার বের হতে ইচ্ছে/শক্তি হচ্ছে না»:', en: '«Tonight I don’t feel up to going out»:' }, it: 'Stasera non ___ di uscire.', options: ['me la sento', 'me ne vado', 'ce l’ho', 'me la cavo'], answer: 0, explanation: { bn: 'sentirsela di + infinito = মানসিক/শারীরিক শক্তি পাওয়া।', en: 'non me la sento di = I don’t feel up to.' } },
    { id: 'q3', prompt: { bn: '«আমরা সফল হয়েছি!» (farcela অতীতে):', en: '«We made it / succeeded!»:' }, it: 'È stato difficile, ma alla fine ___ fatta!', options: ['ce l’abbiamo', 'ci la siamo', 'se l’hanno', 'me la sono'], answer: 0, explanation: { bn: 'farcela avere সহায়ক নেয়: ce l’abbiamo fatta!।', en: 'farcela takes avere: ce l’abbiamo fatta!' } },
    { id: 'q4', prompt: { bn: '«এটা আমার কাছে খুব গুরুত্বপূর্ণ»:', en: '«I care a lot about it»:' }, it: '___ molto che tu sia presente.', options: ['Ci tengo', 'Ci metto', 'Ne posso', 'Me ne vado'], answer: 0, explanation: { bn: 'tenerci (ci tengo) = খুব গুরুত্ব দেওয়া।', en: 'tenerci means to care deeply about something.' } },
  ],
  tip: { bn: 'cavarsela, sentirsela ও prendersela যৌগিক কালে essere নেয় (me la sono cavata), কিন্তু farcela ও metterci নেয় avere (ce l’ho fatta, ci ho messo)!', en: 'cavarsela, sentirsela, and prendersela take essere in past tenses, whereas farcela and metterci take avere!' },
};

const lesson2: Lesson = {
  id: 'b1-u4-l2',
  number: 2,
  title: 'Appena avrò finito, ti chiamerò',
  subtitle: { bn: 'ভবিষ্যৎ পূর্বকাল (futuro anteriore), অনুমান ও দূর অতীত (passato remoto)', en: 'Future perfect, future of probability & historical past' },
  minutes: 15,
  objectives: [
    { bn: 'appena, quando, dopo che-এর পরে futuro anteriore ব্যবহার করতে পারবেন', en: 'Use the future perfect (futuro anteriore) for prior future actions and conjecture' },
    { bn: 'ইতিহাস, সাহিত্য ও খবরে ব্যবহৃত passato remoto চিনতে ও বুঝতে পারবেন', en: 'Recognise and interpret the historical past (passato remoto) in narratives' },
  ],
  phrases: [
    { id: 'b1u4l2-p1', it: 'Appena avrò ricevuto il bonifico, ti manderò la ricevuta.', tr: { bn: 'ব্যাংক ট্রান্সফার পাওয়া মাত্রই তোমাকে রসিদ পাঠাব।', en: 'As soon as I have received the bank transfer, I will send you the receipt.' } },
    { id: 'b1u4l2-p2', it: 'Marco non risponde; avrà lasciato il telefono in borsa.', tr: { bn: 'মার্কো উত্তর দিচ্ছে না; নিশ্চয়ই ব্যাগে ফোন ফেলে রেখেছে।', en: 'Marco is not answering; he must have left his phone in his bag.' } },
    { id: 'b1u4l2-p3', it: 'Dante nacque a Firenze nel 1265 e scrisse la Divina Commedia.', tr: { bn: 'দান্তে ১২৬৫ সালে ফ্লোরেন্সে জন্মগ্রহণ করেন এবং দিভিনা কোম্মেদিয়া লেখেন।', en: 'Dante was born in Florence in 1265 and wrote the Divine Comedy.' } },
    { id: 'b1u4l2-p4', it: 'Nel 1861 l’Italia divenne uno Stato unitario.', tr: { bn: '১৮৬১ সালে ইতালি একটি ঐক্যবদ্ধ রাষ্ট্রে পরিণত হয়।', en: 'In 1861 Italy became a unified state.' } },
  ],
  grammar: [
    {
      id: 'futuro-anteriore',
      title: { bn: 'Futuro anteriore, অনুমান ও Passato remoto', en: 'Future perfect, probability & passato remoto' },
      explanation: {
        bn: 'avere/essere-এর ভবিষ্যৎ রূপ (avrò, sarò…) + participio passato দিয়ে futuro anteriore গঠিত হয়। এটি দুটি কাজে ব্যবহৃত হয়: ১) ভবিষ্যতে অন্য কাজের আগে সম্পন্ন হবে এমন কাজ (Quando avrò finito, uscirò), ২) অতীত ঘটনা সম্পর্কে বর্তমান অনুমান (Sarà partito)। আর ইতিহাস ও সাহিত্যে দূর অতীত বোঝাতে passato remoto (nacque, scrisse, fu, ebbe) ব্যবহৃত হয়।',
        en: 'Form futuro anteriore with future avere/essere + past participle. Use it after quando/appena for a future action completed before another, or for present conjecture about the past. Recognise passato remoto in history and literature.',
      },
      table: [
        { label: 'futuro anteriore', it: 'avrò finito / sarò arrivato', tr: { bn: 'শেষ করে ফেলব / পৌঁছে যাব', en: 'will have finished / arrived' } },
        { label: 'অনুমান (conjecture)', it: 'Saranno le dieci. / Avrà capito male.', tr: { bn: 'হয়ত দশটা বাজে। / নিশ্চয়ই ভুল বুঝেছে।', en: 'It must be ten. / He must have misunderstood.' } },
        { label: 'passato remoto', it: 'fu, ebbe, fece, disse, scrisse, nacque, venne', tr: { bn: 'হলো, পেল, করল, বলল, লিখল, জন্মাল, এল', en: 'was, had, did, said, wrote, was born, came' } },
      ],
      examples: [
        { id: 'b1u4l2-e1', it: 'Quando avremo chiuso le valigie, chiameremo il taxi.', tr: { bn: 'স্যুটকেস বন্ধ করা শেষ হলে আমরা ট্যাক্সি ডাকব।', en: 'When we have closed the suitcases, we will call the taxi.' } },
        { id: 'b1u4l2-e2', it: 'Il romanzo ebbe un successo straordinario.', tr: { bn: 'উপন্যাসটি অসাধারণ সাফল্য পেয়েছিল।', en: 'The novel had extraordinary success.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'ফ্লোরেন্সের জাদুঘর ভ্রমণ', en: 'Visiting a museum in Florence' },
    context: { bn: 'তারিক ও এলেনা ফ্লোরেন্সে গ্যালিলিও জাদুঘরের বাইরে কথা বলছে।', en: 'Tariq and Elena chat outside the Galileo Museum in Florence.' },
    lines: [
      { speaker: 'Elena', it: 'Guarda questa targa: qui Galileo costruì i suoi primi strumenti astronomici nel Seicento.', tr: { bn: 'এই ফলকটি দেখো: সপ্তদশ শতাব্দীতে এখানে গ্যালিলিও তাঁর প্রথম জ্যোতির্বিজ্ঞান যন্ত্রগুলো তৈরি করেছিলেন।', en: 'Look at this plaque: here Galileo built his first astronomical instruments in the seventeenth century.' } },
      { speaker: 'Tariq', it: 'Incredibile! A proposito, dov’è Luca? Doveva raggiungerci alle dieci.', tr: { bn: 'অবিশ্বাস্য! যা হোক, লুকা কোথায়? দশটায় আমাদের সাথে যোগ দেওয়ার কথা ছিল।', en: 'Incredible! By the way, where is Luca? He was supposed to join us at ten.' } },
      { speaker: 'Elena', it: 'Conoscendolo, avrà perso l’autobus e starà arrivando a piedi dalla stazione.', tr: { bn: 'ওকে যা চিনি, নিশ্চয়ই বাস মিস করেছে এবং স্টেশন থেকে হেঁটে আসছে।', en: 'Knowing him, he must have missed the bus and must be walking from the station.' } },
      { speaker: 'Tariq', it: 'Allora entriamo pure; appena sarà arrivato anche lui, gli daremo il suo biglietto.', tr: { bn: 'তাহলে চলো ভেতরে ঢুকি; সে-ও পৌঁছে যাওয়া মাত্রই তাকে তার টিকিট দেব।', en: 'Then let us go on in; as soon as he has arrived too, we will give him his ticket.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'ভবিষ্যতে একটি কাজ শেষ হওয়ার পর আরেকটি কাজ:', en: 'Future action completed before another future action:' }, it: 'Appena ___ compilato il modulo, potrai prenotare.', options: ['avrai', 'avresti', 'avevi', 'abbia'], answer: 0, explanation: { bn: 'ব্যাকরণ সূত্র: Appena + futuro anteriore (avrai compilato) — Appena ভবিষ্যতের পূর্ববর্তী কাজ বোঝাতে futuro anteriore গ্রহণ করে।', en: 'Appena takes futuro anteriore.' } },
    { id: 'q2', prompt: { bn: 'অতীত ঘটনা সম্পর্কে বর্তমান অনুমান:', en: 'Present conjecture about a past event:' }, it: 'Non trovo le chiavi; le ___ lasciate in ufficio.', options: ['avrò', 'avrei', 'avevo', 'ebbi'], answer: 0, explanation: { bn: 'হয়ত অফিসে ফেলে এসেছি = le avrò lasciate।', en: 'Future perfect expresses conjecture about the past.' } },
    { id: 'q3', prompt: { bn: '«nascere» ক্রিয়ার ৩য় পুরুষ একবচন passato remoto:', en: '3rd-person singular passato remoto of nascere:' }, it: 'Leonardo da Vinci ___ nel 1452.', options: ['nascette', 'nacque', 'nato', 'nasceva'], answer: 1, explanation: { bn: 'ব্যাকরণ সূত্র: nascere → nacque — ক্রিয়ার ঐতিহাসিক অতীত (passato remoto) রূপ হলো: nascere is nacque।', en: 'The passato remoto of nascere is nacque.' } },
    { id: 'q4', prompt: { bn: '«essere» ক্রিয়ার ৩য় পুরুষ একবচন passato remoto:', en: '3rd-person singular passato remoto of essere:' }, it: 'Il concerto ___ un grande successo.', options: ['fu', 'fosse', 'sarà', 'sia'], answer: 0, explanation: { bn: 'ব্যাকরণ সূত্র: essere → fu — ক্রিয়ার ঐতিহাসিক অতীত (passato remoto) রূপ হলো: essere is fu।', en: 'The passato remoto of essere is fu.' } },
  ],
  tip: { bn: 'উত্তর ও মধ্য ইতালিতে দৈনন্দিন কথোপকথনে passato prossimo-ই বেশি চলে, কিন্তু বই, সংবাদপত্র ও দক্ষিণ ইতালিতে passato remoto খুব ঘন ঘন ব্যবহৃত হয়।', en: 'While northern/central spoken Italian favours passato prossimo, books, history, news, and southern Italian use passato remoto extensively.' },
};

const lesson3: Lesson = {
  id: 'b1-u4-l3',
  number: 3,
  title: 'Avresti dovuto avvisarmi prima!',
  subtitle: { bn: 'অতীত মডাল (avrei dovuto/potuto) ও সংক্ষিপ্ত অসমাপিকা বাক্য', en: 'Past modals (should/could have) & non-finite clauses' },
  minutes: 15,
  objectives: [
    { bn: 'avrei dovuto, avresti potuto, avrebbe voluto দিয়ে অতীতের অনুশোচনা বা সমালোচনা প্রকাশ করবেন', en: 'Express past regret, advice, and unfulfilled possibility with past modals' },
    { bn: 'infinito passato (dopo aver fatto), gerundio composto (avendo fatto) ও participio assoluto ব্যবহার করবেন', en: 'Condense complex clauses using past infinitives, compound gerunds, and absolute participles' },
  ],
  phrases: [
    { id: 'b1u4l3-p1', it: 'Avresti dovuto controllare la scadenza prima di partire.', tr: { bn: 'রওনা দেওয়ার আগে তোমার মেয়াদ দেখে নেওয়া উচিত ছিল।', en: 'You should have checked the expiry date before leaving.' } },
    { id: 'b1u4l3-p2', it: 'Dopo aver controllato il saldo, ho pagato la bolletta.', tr: { bn: 'ব্যালেন্স পরীক্ষা করার পর আমি বিল পরিশোধ করেছি।', en: 'After checking the balance, I paid the bill.' } },
    { id: 'b1u4l3-p3', it: 'Avendo prenotato in anticipo, abbiamo speso molto meno.', tr: { bn: 'আগেভাগে বুকিং করায় আমাদের খরচ অনেক কম হয়েছে।', en: 'Having booked in advance, we spent much less.' } },
    { id: 'b1u4l3-p4', it: 'Finita la conferenza, siamo andati a cena insieme.', tr: { bn: 'সম্মেলন শেষ হলে আমরা একসাথে রাতের খাবার খেতে গেলাম।', en: 'Once the conference had ended, we went to dinner together.' } },
  ],
  grammar: [
    {
      id: 'modali-condizionale-passato',
      title: { bn: 'অতীত মডাল ও অসমাপিকা বাক্যগঠন (Infinito, Gerundio, Participio)', en: 'Past modals & non-finite subordinate clauses' },
      explanation: {
        bn: 'অতীতে কোনো কাজ করা উচিত ছিল কিন্তু করা হয়নি বোঝাতে condizionale passato di dovere + infinito (avrei dovuto studiare) বসে; করার সুযোগ ছিল বোঝাতে avrei potuto; ইচ্ছা ছিল বোঝাতে avrei voluto। আর বাক্য সংক্ষিপ্ত করতে dopo + infinito passato (dopo aver letto / dopo essere uscito), gerundio composto (avendo visto / essendo arrivato) এবং participio assoluto (Finito il lavoro…) ব্যবহৃত হয়।',
        en: 'Use condizionale passato of dovere/potere/volere + infinitive for "should/could/would have done". Use dopo + past infinitive, compound gerund, and absolute past participle to write concise, natural B1–B2 Italian.',
      },
      table: [
        { label: 'উচিত ছিল (should have)', it: 'avrei dovuto + infinito', tr: { bn: 'আমার করা উচিত ছিল', en: 'I should have done' } },
        { label: 'dopo + inf. passato', it: 'dopo aver firmato / dopo essere partiti', tr: { bn: 'সই করার পর / রওনা হওয়ার পর', en: 'after signing / after leaving' } },
        { label: 'gerundio / participio', it: 'Avendo capito… / Risolto il guasto…', tr: { bn: 'বুঝতে পারায়… / ত্রুটি মিটে গেলে…', en: 'Having understood… / Once the fault was fixed…' } },
      ],
      examples: [
        { id: 'b1u4l3-e1', it: 'Con un po’ di pazienza avremmo potuto evitare l’errore.', tr: { bn: 'একটু ধৈর্য ধরলে আমরা ভুলটি এড়াতে পারতাম।', en: 'With a bit of patience we could have avoided the mistake.' } },
        { id: 'b1u4l3-e2', it: 'Consegnati i moduli allo sportello, abbiamo atteso la ricevuta.', tr: { bn: 'কাউন্টারে ফর্ম জমা দেওয়ার পর আমরা রসিদের অপেক্ষা করেছি।', en: 'Once the forms were handed in, we waited for the receipt.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'প্রকল্পের মূল্যায়ন সভা', en: 'Project retrospective meeting' },
    context: { bn: 'প্রকল্প শেষ হওয়ার পর দলনেতা পাওলো ও মিনা কী কী ভালো হতে পারত তা বিশ্লেষণ করছে।', en: 'After finishing a project, Paolo and Mina review what could have gone better.' },
    lines: [
      { speaker: 'Paolo', it: 'Finita la consegna del portale, facciamo un bilancio. Secondo te che cosa avremmo potuto gestire meglio?', tr: { bn: 'পোর্টাল হস্তান্তর শেষ হওয়ায় চলো হিসাব মিলিয়ে দেখি। তোমার মতে আমরা কোনটা আরও ভালোভাবে সামলাতে পারতাম?', en: 'Now that the portal delivery is finished, let us take stock. In your view, what could we have managed better?' } },
      { speaker: 'Mina', it: 'Avremmo dovuto fare i test di sicurezza una settimana prima, invece di aspettare l’ultimo giorno.', tr: { bn: 'শেষ দিনের অপেক্ষা না করে আমাদের এক সপ্তাহ আগেই নিরাপত্তা পরীক্ষাগুলো করা উচিত ছিল।', en: 'We should have run the security tests a week earlier, instead of waiting until the last day.' } },
      { speaker: 'Paolo', it: 'Verissimo. Però, avendo lavorato in squadra con grande impegno, abbiamo risolto ogni imprevisto.', tr: { bn: 'একদম সত্যি। তবে দলবদ্ধভাবে প্রবল নিষ্ঠার সাথে কাজ করায় আমরা প্রতিটি অপ্রত্যাশিত সমস্যা সমাধান করেছি।', en: 'Very true. However, having worked as a team with great commitment, we solved every unexpected issue.' } },
      { speaker: 'Mina', it: 'Sì, dopo aver superato questa sfida, il prossimo progetto sarà molto più semplice!', tr: { bn: 'হ্যাঁ, এই চ্যালেঞ্জ পার করার পর আগামী প্রকল্পটি অনেক সহজ হবে!', en: 'Yes, after overcoming this challenge, the next project will be much simpler!' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: '«তোমার আমাকে আগে জানানো উচিত ছিল»:', en: '«You should have warned me earlier»:' }, it: '___ avvisarmi prima!', options: ['Avresti dovuto', 'Dovresti avere', 'Avevi dovuto', 'Avrai dovuto'], answer: 0, explanation: { bn: 'অতীতের অনুশোচনা/উপদেশ = Avresti dovuto + infinito।', en: 'Should have done = Avresti dovuto + infinitive.' } },
    { id: 'q2', prompt: { bn: 'dopo-র পরে অতীত ইনফিনিটিভ (essere সহ):', en: 'Past infinitive with essere after dopo:' }, it: 'Dopo ___ arrivati in albergo, abbiamo fatto una doccia.', options: ['aver', 'essere', 'essendo', 'stati'], answer: 1, explanation: { bn: 'arrivare essere নেয় → dopo essere arrivati।', en: 'arrivare takes essere → dopo essere arrivati.' } },
    { id: 'q3', prompt: { bn: 'কারণ অর্থে যৌগিক জেরুন্ড:', en: 'Compound gerund expressing cause:' }, it: '___ perso il treno, abbiamo preso l’autobus.', options: ['Avendo', 'Essendo', 'Avere', 'Avuto'], answer: 0, explanation: { bn: 'perdere avere নেয় → Avendo perso il treno।', en: 'Compound gerund of perdere is Avendo perso.' } },
    { id: 'q4', prompt: { bn: 'নিরপেক্ষ অতীত পার্টিসিপল (participio assoluto) ও লিঙ্গ-বচন মিল:', en: 'Absolute past participle agreement:' }, it: '___ la conferenza, il pubblico ha applaudito.', options: ['Finito', 'Finita', 'Finiti', 'Finite'], answer: 1, explanation: { bn: 'la conferenza স্ত্রীলিঙ্গ একবচন → Finita la conferenza।', en: 'Participle agrees with la conferenza → Finita.' } },
  ],
  tip: { bn: 'Participio assoluto-তে পার্টিসিপলটি সবসময় তার পরের বিশেষ্যের লিঙ্গ ও বচন অনুযায়ী মেলে: Pagata la bolletta / Pagati i conti।', en: 'In an absolute participle clause, the participle always agrees in gender and number with its noun: Pagata la bolletta / Pagati i conti.' },
};

export const b1Unit4: Unit = {
  id: 'b1-u4',
  number: 4,
  title: 'Espressioni idiomatiche, futuro anteriore e sintassi',
  subtitle: { bn: 'বাগধারা, ভবিষ্যৎ পূর্বকাল, দূর অতীত ও সংক্ষিপ্ত বাক্যগঠন', en: 'Idiomatic verbs, future perfect, historical past & advanced syntax' },
  lessons: [lesson1, lesson2, lesson3],
};
