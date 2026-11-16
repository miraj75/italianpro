import type { ListeningExercise } from '../academyTypes';
import { buildListening } from '../builders';

export const A1_LISTENING_1: ListeningExercise[] = [
  buildListening({
    id: 'ls-a1-01',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Primo incontro all’università',
    title: { bn: 'বিশ্ববিদ্যালয়ে প্রথম পরিচয়', en: 'First meeting at university' },
    topic: { bn: 'পরিচয় ও অভিবাদন', en: 'Greetings & introductions' },
    lines: [
      { speaker: 'Chiara', it: 'Ciao! Sei uno studente nuovo?', tr: { bn: 'হ্যালো! তুমি কি নতুন ছাত্র?', en: 'Hi! Are you a new student?' } },
      { speaker: 'Tariq', it: 'Sì, mi chiamo Tariq. Vengo dal Bangladesh.', tr: { bn: 'হ্যাঁ, আমার নাম তারেক। আমি বাংলাদেশ থেকে এসেছি।', en: 'Yes, my name is Tariq. I come from Bangladesh.' } },
      { speaker: 'Chiara', it: 'Piacere, io sono Chiara. Cosa studi qui?', tr: { bn: 'পরিচিত হয়ে ভালো লাগলো, আমি কিয়ারা। এখানে কী পড়ো?', en: 'Nice to meet you, I am Chiara. What do you study here?' } },
      { speaker: 'Tariq', it: 'Studio informatica. E tu?', tr: { bn: 'আমি কম্পিউটার সায়েন্স পড়ি। আর তুমি?', en: 'I study computer science. And you?' } },
      { speaker: 'Chiara', it: 'Studio architettura al secondo anno.', tr: { bn: 'আমি দ্বিতীয় বর্ষে স্থাপত্যবিদ্যা পড়ি।', en: 'I study architecture in my second year.' } },
    ],
    explanation: {
      bn: 'সমবয়সী ছাত্রদের মধ্যে অনানুষ্ঠানিক "tu" ব্যবহার হয়: Sei nuovo?, E tu?।',
      en: 'University peers use informal "tu": Sei nuovo?, E tu?.',
    },
    vocabList: [
      { it: 'studente nuovo', tr: { bn: 'নতুন ছাত্র', en: 'new student' } },
      { it: 'informatica', tr: { bn: 'কম্পিউটার সায়েন্স', en: 'computer science' } },
      { it: 'secondo anno', tr: { bn: 'দ্বিতীয় বর্ষ', en: 'second year' } },
    ],
    vocabKeys: ['w:A1:lo studente', "w:A1:l'università", 'w:A1:studiare'],
    grammarIds: ['essere', 'riflessivi-a1'],
    questions: [
      { id: 'ls1-q1', prompt: { bn: 'তারেক কী বিষয়ে পড়ে?', en: 'What does Tariq study?' }, options: ['স্থাপত্যবিদ্যা', 'কম্পিউটার সায়েন্স', 'ইতিহাস', 'অর্থনীতি'], answer: 1, explanation: { bn: 'Studio informatica = কম্পিউটার সায়েন্স।', en: 'informatica = computer science.' } },
      { id: 'ls1-q2', prompt: { bn: 'কিয়ারা কোন বর্ষে পড়ে?', en: 'Which year is Chiara in?' }, options: ['প্রথম বর্ষ', 'দ্বিতীয় বর্ষ', 'তৃতীয় বর্ষ', 'চতুর্থ বর্ষ'], answer: 1, explanation: { bn: 'al secondo anno = দ্বিতীয় বর্ষ।', en: 'second year.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-02',
    level: 'A1',
    kind: 'announcement',
    titleIt: 'Annuncio in stazione',
    title: { bn: 'ট্রেন স্টেশনের ঘোষণা', en: 'Train station announcement' },
    topic: { bn: 'যাতায়াত ও সময়', en: 'Transport & time' },
    lines: [
      { speaker: 'Altoparlante', it: 'Attenzione, prego! Il treno regionale per Bologna delle dieci e quindici è in arrivo al binario quattro.', tr: { bn: 'দয়া করে মনোযোগ দিন! দশটা পনেরোর বোলোনিয়াগামী আঞ্চলিক ট্রেন চার নম্বর প্ল্যাটফর্মে আসছে।', en: 'Attention please! The 10:15 regional train to Bologna is arriving at platform four.' } },
      { speaker: 'Altoparlante', it: 'Si ricorda ai signori passeggeri di convalidare il biglietto prima di salire a bordo.', tr: { bn: 'যাত্রীদের ট্রেনে ওঠার আগে টিকিট ভ্যালিডেট করার কথা মনে করিয়ে দেওয়া হচ্ছে।', en: 'Passengers are reminded to validate their ticket before boarding.' } },
    ],
    explanation: {
      bn: 'স্টেশনের ঘোষণায় সময় ও প্ল্যাটফর্ম নম্বর (binario) মন দিয়ে শুনতে হয়।',
      en: 'Station announcements highlight destination, departure time and binario (platform).',
    },
    vocabList: [
      { it: 'in arrivo', tr: { bn: 'আসছে', en: 'arriving' } },
      { it: 'binario', tr: { bn: 'প্ল্যাটফর্ম', en: 'platform' } },
      { it: 'convalidare', tr: { bn: 'টিকিট পাঞ্চ/ভ্যালিডেট করা', en: 'to validate' } },
    ],
    vocabKeys: ['w:A1:il treno', 'w:A1:il biglietto', 'w:A1:la stazione'],
    grammarIds: ['ora-data', 'preposizioni'],
    questions: [
      { id: 'ls2-q1', prompt: { bn: 'ট্রেনটি কোথায় যাচ্ছে?', en: 'Where is the train going?' }, options: ['মিলান', 'রোম', 'বোলোনিয়া', 'ভেনিস'], answer: 2, explanation: { bn: 'সঠিক উত্তর: বোলোনিয়া — পাঠ্যাংশে বলা হয়েছে: «দয়া করে মনোযোগ দিন! দশটা পনেরোর বোলোনিয়াগামী আঞ্চলিক ট্রেন চার নম্বর প্ল্যাটফর্মে আসছে।» (per Bologna)।', en: 'To Bologna.' } },
      { id: 'ls2-q2', prompt: { bn: 'কত নম্বর প্ল্যাটফর্মে ট্রেন আসছে?', en: 'Which platform is it arriving at?' }, options: ['২', '৪', '৬', '৮'], answer: 1, explanation: { bn: 'al binario quattro = ৪ নম্বর প্ল্যাটফর্ম।', en: 'Platform 4.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-03',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Ordinare al bar',
    title: { bn: 'ক্যাফেতে অর্ডার', en: 'Ordering at the café' },
    topic: { bn: 'খাবার ও পানীয়', en: 'Food & drink' },
    lines: [
      { speaker: 'Barista', it: 'Buongiorno signora, cosa desidera?', tr: { bn: 'শুভ সকাল ম্যাডাম, কী নেবেন?', en: 'Good morning madam, what would you like?' } },
      { speaker: 'Nadia', it: 'Buongiorno! Vorrei un caffè macchiato caldo e un cornetto alla crema.', tr: { bn: 'শুভ সকাল! আমি একটি গরম ম্যাকিয়াতো কফি আর একটি ক্রিম করনেত্তো চাই।', en: 'Good morning! I would like a hot macchiato and a cream croissant.' } },
      { speaker: 'Barista', it: 'Desidera anche dell’acqua?', tr: { bn: 'সাথে কি একটু পানি নেবেন?', en: 'Would you also like some water?' } },
      { speaker: 'Nadia', it: 'Sì, un bicchiere d’acqua naturale, grazie. Quant’è?', tr: { bn: 'হ্যাঁ, এক গ্লাস সাধারণ পানি, ধন্যবাদ। কত হলো?', en: 'Yes, a glass of still water, thanks. How much is it?' } },
      { speaker: 'Barista', it: 'Sono tre euro e venti alla cassa.', tr: { bn: 'ক্যাশ কাউন্টারে তিন ইউরো বিশ সেন্ট দিন।', en: 'Three euros twenty at the checkout.' } },
    ],
    explanation: {
      bn: 'ক্যাফেতে আনুষ্ঠানিক Lei (cosa desidera?) ও ভদ্র অনুরোধ (vorrei) ব্যবহৃত হয়।',
      en: 'Café service uses formal Lei (desidera) and polite vorrei.',
    },
    vocabList: [
      { it: 'caffè macchiato', tr: { bn: 'দুধ মেশানো এস্প্রেসো', en: 'espresso with a dash of milk' } },
      { it: 'alla crema', tr: { bn: 'ক্রিম ভরা', en: 'custard-filled' } },
    ],
    vocabKeys: ['w:A1:il bar', 'w:A1:il caffè', 'w:A1:la cassa'],
    grammarIds: ['modali', 'articoli'],
    questions: [
      { id: 'ls3-q1', prompt: { bn: 'নাদিয়া কত ইউরো দেয়?', en: 'How much does Nadia pay?' }, options: ['২.৫০ ইউরো', '৩.২০ ইউরো', '৪.১০ ইউরো', '৫.০০ ইউরো'], answer: 1, explanation: { bn: 'tre euro e venti = ৩.২০ ইউরো।', en: '€3.20.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-04',
    level: 'A1',
    kind: 'phone',
    titleIt: 'Una telefonata per l’affitto',
    title: { bn: 'রুম ভাড়ার জন্য ফোন কল', en: 'Phone call about renting a room' },
    topic: { bn: 'বাসা ভাড়া', en: 'Housing' },
    lines: [
      { speaker: 'Proprietario', it: 'Pronto, chi parla?', tr: { bn: 'হ্যালো, কে বলছেন?', en: 'Hello, who is speaking?' } },
      { speaker: 'Rahim', it: 'Buonasera signore, mi chiamo Rahim. Chiamo per la stanza in affitto.', tr: { bn: 'শুভ সন্ধ্যা স্যার, আমার নাম রাহিম। আমি ভাড়ার রুমটির জন্য ফোন করছি।', en: 'Good evening sir, my name is Rahim. I am calling about the room for rent.' } },
      { speaker: 'Proprietario', it: 'Ah sì! La stanza è libera da maggio. L’affitto è quattrocento euro al mese.', tr: { bn: 'ওহ হ্যাঁ! রুমটি মে মাস থেকে খালি আছে। ভাড়া মাসে চারশ ইউরো।', en: 'Ah yes! The room is free from May. The rent is 400 euros per month.' } },
      { speaker: 'Rahim', it: 'Le spese sono incluse?', tr: { bn: 'বিলগুলো কি এর মধ্যে অন্তর্ভুক্ত?', en: 'Are utilities included?' } },
      { speaker: 'Proprietario', it: 'Sì, acqua e luce sono incluse. Può venire a vedere la casa giovedì alle cinque?', tr: { bn: 'হ্যাঁ, পানি ও বিদ্যুৎ অন্তর্ভুক্ত। আপনি কি বৃহস্পতিবার পাঁচটায় বাসা দেখতে আসতে পারবেন?', en: 'Yes, water and electricity are included. Can you come see the flat on Thursday at five?' } },
    ],
    explanation: {
      bn: 'ইতালিয়ানে ফোনে কথা শুরু হয় "Pronto!" দিয়ে।',
      en: 'Italian phone calls always open with "Pronto!".',
    },
    vocabList: [
      { it: 'Pronto', tr: { bn: 'হ্যালো (ফোনে)', en: 'Hello (on phone)' } },
      { it: 'affitto', tr: { bn: 'ভাড়া', en: 'rent' } },
      { it: 'spese incluse', tr: { bn: 'বিলসহ', en: 'bills included' } },
    ],
    vocabKeys: ['w:A1:la stanza', 'w:A1:la luce', 'w:A1:maggio'],
    grammarIds: ['domande', 'ora-data'],
    questions: [
      { id: 'ls4-q1', prompt: { bn: 'মাসিক ভাড়া কত?', en: 'What is the monthly rent?' }, options: ['৩০০ ইউরো', '৪০০ ইউরো', '৪৫০ ইউরো', '৫০০ ইউরো'], answer: 1, explanation: { bn: 'quattrocento euro al mese = ৪০০ ইউরো।', en: '400 euros.' } },
      { id: 'ls4-q2', prompt: { bn: 'বাসা দেখার সময় কবে?', en: 'When is the viewing?' }, options: ['বুধবার ৪টায়', 'বৃহস্পতিবার ৫টায়', 'শুক্রবার ৬টায়', 'শনিবার ১০টায়'], answer: 1, explanation: { bn: 'সঠিক উত্তর: বৃহস্পতিবার ৫টায় — পাঠ্যাংশে বলা হয়েছে: «হ্যাঁ, পানি ও বিদ্যুৎ অন্তর্ভুক্ত। আপনি কি বৃহস্পতিবার পাঁচটায় বাসা দেখতে আসতে পারবেন?» (giovedì alle cinque)।', en: 'Thursday at five.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-05',
    level: 'A1',
    kind: 'formal',
    titleIt: 'Allo sportello del Comune',
    title: { bn: 'Comune অফিসে কথোপকথন', en: 'At the Comune desk' },
    topic: { bn: 'সরকারি অফিস ও কাগজপত্র', en: 'Public office & documents' },
    lines: [
      { speaker: 'Impiegato', it: 'Buongiorno, ha preso il numero?', tr: { bn: 'শুভ সকাল, আপনি কি টোকেন নম্বর নিয়েছেন?', en: 'Good morning, did you take a ticket number?' } },
      { speaker: 'Ayesha', it: 'Sì, ho il numero ventiquattro. Vorrei chiedere la residenza.', tr: { bn: 'হ্যাঁ, আমার নম্বর চব্বিশ। আমি রেসিডেন্সি নিবন্ধনের জন্য আবেদন করতে চাই।', en: 'Yes, I have number twenty-four. I would like to apply for residency.' } },
      { speaker: 'Impiegato', it: 'Bene. Mi dia il passaporto, il codice fiscale e il contratto di affitto.', tr: { bn: 'বেশ। আমাকে পাসপোর্ট, কোদিচে ফিসকালে ও বাসা ভাড়ার চুক্তিপত্র দিন।', en: 'Good. Give me your passport, tax code and rental contract.' } },
      { speaker: 'Ayesha', it: 'Ecco tutti i documenti. Quando arriva la conferma?', tr: { bn: 'এই যে সব কাগজপত্র। নিশ্চিতকরণ কবে আসবে?', en: 'Here are all the documents. When does confirmation arrive?' } },
      { speaker: 'Impiegato', it: 'Riceverà una email fra due settimane.', tr: { bn: 'দুই সপ্তাহের মধ্যে একটি ইমেইল পাবেন।', en: 'You will receive an email in two weeks.' } },
    ],
    explanation: {
      bn: 'ইতালিতে সরকারি অফিসে টোকেন নম্বর, passaporto ও codice fiscale চাওয়া হয়।',
      en: 'Municipal offices ask for a queue number, passport and codice fiscale.',
    },
    vocabList: [
      { it: 'codice fiscale', tr: { bn: 'ট্যাক্স কোড', en: 'Italian tax ID' } },
      { it: 'contratto', tr: { bn: 'চুক্তিপত্র', en: 'contract' } },
    ],
    vocabKeys: ['w:A1:la settimana', "w:A1:l'email", "w:A1:l'ufficio"],
    grammarIds: ['modali', 'preposizioni'],
    questions: [
      { id: 'ls5-q1', prompt: { bn: 'আয়েশার টোকেন নম্বর কত?', en: 'What is Ayesha’s number?' }, options: ['১৪', '২৪', '৩৪', '৪২'], answer: 1, explanation: { bn: 'numero ventiquattro = ২৪।', en: '24.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-06',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Alla farmacia di turno',
    title: { bn: 'ফার্মেসিতে ওষুধ কেনা', en: 'Buying medicine at the pharmacy' },
    topic: { bn: 'স্বাস্থ্য ও শরীর', en: 'Health & body' },
    lines: [
      { speaker: 'Marco', it: 'Buonasera dottore, non mi sento molto bene.', tr: { bn: 'শুভ সন্ধ্যা, আমার শরীরটা খুব ভালো লাগছে না।', en: 'Good evening, I do not feel very well.' } },
      { speaker: 'Farmacista', it: 'Che sintomi ha?', tr: { bn: 'কী কী উপসর্গ আছে?', en: 'What symptoms do you have?' } },
      { speaker: 'Marco', it: 'Ho mal di testa e un po’ di febbre da stamattina.', tr: { bn: 'সকাল থেকে আমার মাথা ব্যথা আর একটু জ্বর আছে।', en: 'I have a headache and a slight fever since this morning.' } },
      { speaker: 'Farmacista', it: 'Prenda queste compresse due volte al giorno dopo i pasti e beva molta acqua.', tr: { bn: 'খাবারের পর দিনে দুবার এই ট্যাবলেট খান এবং প্রচুর পানি পান করুন।', en: 'Take these tablets twice a day after meals and drink plenty of water.' } },
    ],
    explanation: {
      bn: 'উপসর্গ বলতে "Ho mal di testa / Ho la febbre" ব্যবহার করুন।',
      en: 'Use "Ho mal di…" and "Ho la febbre" for symptoms.',
    },
    vocabList: [
      { it: 'compresse', tr: { bn: 'ট্যাবলেট', en: 'tablets' } },
      { it: 'dopo i pasti', tr: { bn: 'খাবারের পরে', en: 'after meals' } },
    ],
    vocabKeys: ['w:A1:la testa', 'w:A1:la febbre', 'w:A1:la medicina'],
    grammarIds: ['avere-espressioni', 'avere'],
    questions: [
      { id: 'ls6-q1', prompt: { bn: 'মার্কোকে দিনে কয়বার ট্যাবলেট খেতে বলা হয়েছে?', en: 'How many times a day should Marco take the tablets?' }, options: ['একবার', 'দুবার', 'তিনবার', 'চারবার'], answer: 1, explanation: { bn: 'due volte al giorno = দিনে দুবার।', en: 'Twice a day.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-07',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Al supermercato con Elena',
    title: { bn: 'এলেনার সাথে সুপারমার্কেটে', en: 'At the supermarket with Elena' },
    topic: { bn: 'সুপারমার্কেট', en: 'Supermarket' },
    lines: [
      { speaker: 'Elena', it: 'Prendo il carrello. Cosa dobbiamo comprare oggi?', tr: { bn: 'আমি ট্রলি নিচ্ছি। আজ আমাদের কী কী কিনতে হবে?', en: 'I am taking the trolley. What do we have to buy today?' } },
      { speaker: 'Luca', it: 'Serve il latte, il burro, una scatola di biscotti e della farina.', tr: { bn: 'দুধ, মাখন, এক বাক্স বিস্কুট আর কিছু ময়দা দরকার।', en: 'We need milk, butter, a box of biscuits and some flour.' } },
      { speaker: 'Elena', it: 'Non dimentichiamo due bottiglie d’acqua e le mele!', tr: { bn: 'দুই বোতল পানি আর আপেল নিতে ভুলো না!', en: 'Let’s not forget two bottles of water and apples!' } },
      { speaker: 'Luca', it: 'Perfetto. La cassa numero tre è libera, andiamo lì.', tr: { bn: 'দারুণ। তিন নম্বর ক্যাশ কাউন্টার খালি আছে, ওখানে যাই।', en: 'Perfect. Checkout number three is free, let’s go there.' } },
    ],
    explanation: {
      bn: 'সুপারমার্কেটের দৈনন্দিন শব্দ: carrello, scatola, bottiglia, cassa।',
      en: 'Key supermarket nouns: carrello, scatola, bottiglia, cassa.',
    },
    vocabList: [
      { it: 'serve', tr: { bn: 'প্রয়োজন / লাগে', en: 'is needed' } },
      { it: 'non dimentichiamo', tr: { bn: 'চলো না ভুলি', en: 'let us not forget' } },
    ],
    vocabKeys: ['w:A1:il carrello', 'w:A1:il burro', 'w:A1:la cassa'],
    grammarIds: ['modali', 'articoli'],
    questions: [
      { id: 'ls7-q1', prompt: { bn: 'তারা কত নম্বর ক্যাশ কাউন্টারে যায়?', en: 'Which checkout do they go to?' }, options: ['১', '২', '৩', '৪'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ৩ — পাঠ্যাংশে বলা হয়েছে: «দারুণ। তিন নম্বর ক্যাশ কাউন্টার খালি আছে, ওখানে যাই।» (La cassa numero tre)।', en: 'Checkout 3.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-08',
    level: 'A1',
    kind: 'story',
    titleIt: 'La mia famiglia numerosa',
    title: { bn: 'আমার বড় পরিবার', en: 'My big family' },
    topic: { bn: 'পরিবার', en: 'Family' },
    lines: [
      { speaker: 'Narratore', it: 'Ciao, sono Matteo e vengo da Napoli. La mia famiglia è molto grande.', tr: { bn: 'হ্যালো, আমি মাত্তেও এবং আমি নাপোলির। আমার পরিবার খুব বড়।', en: 'Hi, I am Matteo and I come from Naples. My family is very big.' } },
      { speaker: 'Narratore', it: 'Mio padre è cuoco e mia madre insegna musica a scuola. Ho due sorelle e un fratello piccolo.', tr: { bn: 'আমার বাবা রাঁধুনি আর আমার মা স্কুলে সংগীত শেখান। আমার দুই বোন ও এক ছোট ভাই আছে।', en: 'My father is a cook and my mother teaches music at school. I have two sisters and a younger brother.' } },
      { speaker: 'Narratore', it: 'I nostri nonni abitano vicino a noi e mangiamo spesso insieme la domenica.', tr: { bn: 'আমাদের দাদা-দাদি আমাদের কাছেই থাকেন এবং রবিবারে আমরা প্রায়ই একসাথে খাই।', en: 'Our grandparents live near us and we often eat together on Sundays.' } },
    ],
    explanation: {
      bn: 'পরিবারের বর্ণনায় mio padre / mia madre (একবচন) বনাম i nostri nonni (বহুবচন) খেয়াল করুন।',
      en: 'Notice singular mio padre vs plural i nostri nonni.',
    },
    vocabList: [
      { it: 'numerosa', tr: { bn: 'বড় / বহু সদস্যের', en: 'large (family)' } },
      { it: 'cuoco', tr: { bn: 'রাঁধুনি / শেফ', en: 'cook / chef' } },
    ],
    vocabKeys: ['w:A1:la famiglia', 'w:A1:il padre', 'w:A1:la scuola'],
    grammarIds: ['possessivi-a1', 'presente-are'],
    questions: [
      { id: 'ls8-q1', prompt: { bn: 'মাত্তেওর মা কী করেন?', en: 'What does Matteo’s mother do?' }, options: ['ডাক্তার', 'সংগীত শিক্ষিকা', 'ব্যাংকার', 'শেফ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সংগীত শিক্ষিকা — পাঠ্যাংশে বলা হয়েছে: «আমার বাবা রাঁধুনি আর আমার মা স্কুলে সংগীত শেখান। আমার দুই বোন ও এক ছোট ভাই আছে।» (insegna musica a scuola)।', en: 'She teaches music at school.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-09',
    level: 'A1',
    kind: 'announcement',
    titleIt: 'Avviso dell’autobus urbano',
    title: { bn: 'শহরের বাসের ঘোষণা', en: 'City bus announcement' },
    topic: { bn: 'শহর ও যাতায়াত', en: 'City & transport' },
    lines: [
      { speaker: 'Voce', it: 'Prossima fermata: Piazza Garibaldi. Coincidenza con la linea rossa della metropolitana e con i treni per il centro.', tr: { bn: 'পরবর্তী স্টপ: পিয়াজ্জা গ্যারিবালদি। এখান থেকে মেট্রোর লাল লাইন ও কেন্দ্রগামী ট্রেন বদল করা যাবে।', en: 'Next stop: Piazza Garibaldi. Connection with the red metro line and trains to the centre.' } },
      { speaker: 'Voce', it: 'Si prega di preparare il biglietto e di lasciare libero lo spazio vicino alle porte.', tr: { bn: 'অনুগ্রহ করে টিকিট প্রস্তুত রাখুন এবং দরজার কাছের জায়গা খালি রাখুন।', en: 'Please have your ticket ready and keep the space near the doors clear.' } },
    ],
    explanation: {
      bn: '"Prossima fermata" শুনে বাস বা মেট্রোতে নিজের নামার স্টপ চিনতে হয়।',
      en: '"Prossima fermata" signals the upcoming stop on buses and metros.',
    },
    vocabList: [
      { it: 'coincidenza', tr: { bn: 'সংযোগ / ট্রান্সফার', en: 'transfer / connection' } },
      { it: 'linea rossa', tr: { bn: 'লাল লাইন', en: 'red line' } },
    ],
    vocabKeys: ['w:A1:la fermata', 'w:A1:la metropolitana', 'w:A1:la piazza'],
    grammarIds: ['aggettivi', 'preposizioni'],
    questions: [
      { id: 'ls9-q1', prompt: { bn: 'পরের স্টপের নাম কী?', en: 'What is the next stop?' }, options: ['Piazza Venezia', 'Piazza Garibaldi', 'Stazione Centrale', 'Via Roma'], answer: 1, explanation: { bn: 'পাঠ্যাংশের তথ্যানুযায়ী: «পরবর্তী স্টপ: পিয়াজ্জা গ্যারিবালদি। এখান থেকে মেট্রোর লাল লাইন ও কেন্দ্রগামী ট্রেন বদল করা যাবে।» (সঠিক উত্তর: Piazza Garibaldi)।', en: 'Piazza Garibaldi.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-10',
    level: 'A1',
    kind: 'interview',
    titleIt: 'Intervista per la strada: il tempo libero',
    title: { bn: 'রাস্তায় সাক্ষাৎকার: অবসর সময়', en: 'Street interview: free time' },
    topic: { bn: 'পছন্দ ও শখ', en: 'Likes & hobbies' },
    lines: [
      { speaker: 'Giornalista', it: 'Scusi, cosa Le piace fare nel tempo libero?', tr: { bn: 'মাফ করবেন, অবসর সময়ে আপনি কী করতে ভালোবাসেন?', en: 'Excuse me, what do you like doing in your free time?' } },
      { speaker: 'Sofia', it: 'Mi piace molto camminare nel parco e leggere romanzi brevi.', tr: { bn: 'পার্কে হাঁটতে ও ছোট উপন্যাস পড়তে আমার খুব ভালো লাগে।', en: 'I really like walking in the park and reading short novels.' } },
      { speaker: 'Giornalista', it: 'E le piace cucinare?', tr: { bn: 'আর রান্না করতে ভালো লাগে?', en: 'And do you like cooking?' } },
      { speaker: 'Sofia', it: 'Sì, soprattutto i dolci! La domenica preparo sempre una torta.', tr: { bn: 'হ্যাঁ, বিশেষ করে মিষ্টি! রবিবারে আমি সবসময় একটা কেক বানাই।', en: 'Yes, especially desserts! On Sundays I always make a cake.' } },
    ],
    explanation: {
      bn: 'অপরিচিতদের সাক্ষাৎকারে "Le piace…?" (আপনার ভালো লাগে?) ব্যবহৃত হয়।',
      en: 'Formal "Le piace…?" is used when interviewing a stranger.',
    },
    vocabList: [
      { it: 'tempo libero', tr: { bn: 'অবসর সময়', en: 'free time' } },
      { it: 'romanzi brevi', tr: { bn: 'ছোট উপন্যাস', en: 'short novels' } },
    ],
    vocabKeys: ['w:A1:piacere', 'w:A1:leggere', 'w:A1:cucinare'],
    grammarIds: ['piacere', 'struttura-frase'],
    questions: [
      { id: 'ls10-q1', prompt: { bn: 'রবিবারে সোফিয়া কী বানায়?', en: 'What does Sofia make on Sundays?' }, options: ['পাস্তা', 'পিৎজা', 'একটা কেক', 'স্যুপ'], answer: 2, explanation: { bn: 'una torta = একটা কেক।', en: 'A cake.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-11',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Chiedere indicazioni stradali',
    title: { bn: 'রাস্তার দিকনির্দেশনা চাওয়া', en: 'Asking for street directions' },
    topic: { bn: 'শহরে দিকনির্দেশনা', en: 'Directions' },
    lines: [
      { speaker: 'Turista', it: 'Mi scusi, cerco il museo nazionale. È vicino?', tr: { bn: 'মাফ করবেন, আমি জাতীয় জাদুঘর খুঁজছি। এটি কি কাছে?', en: 'Excuse me, I am looking for the national museum. Is it nearby?' } },
      { speaker: 'Signora', it: 'Sì, è a dieci minuti. Vada sempre dritto fino alla chiesa.', tr: { bn: 'হ্যাঁ, দশ মিনিটের পথ। গির্জা পর্যন্ত সোজা যান।', en: 'Yes, it is ten minutes away. Go straight as far as the church.' } },
      { speaker: 'Turista', it: 'E dopo la chiesa?', tr: { bn: 'আর গির্জার পরে?', en: 'And after the church?' } },
      { speaker: 'Signora', it: 'Giri a sinistra. Il museo è tra la banca e il bar.', tr: { bn: 'বামে ঘুরুন। জাদুঘরটি ব্যাংক ও ক্যাফের মাঝখানে।', en: 'Turn left. The museum is between the bank and the café.' } },
    ],
    explanation: {
      bn: 'দিকনির্দেশনা বুঝতে dritto, a sinistra, a destra, tra চিনে রাখা জরুরি।',
      en: 'Key direction markers: dritto, a sinistra, a destra, tra.',
    },
    vocabList: [
      { it: 'fino a', tr: { bn: 'পর্যন্ত', en: 'up to / until' } },
      { it: 'giri', tr: { bn: 'ঘুরুন (আনুষ্ঠানিক)', en: 'turn (formal)' } },
    ],
    vocabKeys: ['w:A1:il museo', 'w:A1:dritto', 'w:A1:a sinistra'],
    grammarIds: ['preposizioni-luogo', 'domande'],
    questions: [
      { id: 'ls11-q1', prompt: { bn: 'গির্জার পর কোন দিকে ঘুরতে হবে?', en: 'Which way should the tourist turn after the church?' }, options: ['ডানে', 'বামে', 'পেছনে', 'সোজা'], answer: 1, explanation: { bn: 'Giri a sinistra = বামে।', en: 'Turn left.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-12',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Comprare un biglietto in negozio',
    title: { bn: 'পোশাকের দোকানে কেনাকাটা', en: 'Shopping in a clothes store' },
    topic: { bn: 'পোশাক ও দাম', en: 'Clothes & prices' },
    lines: [
      { speaker: 'Cliente', it: 'Buonasera, quanto costa questa camicia gialla?', tr: { bn: 'শুভ সন্ধ্যা, এই হলুদ শার্টটির দাম কত?', en: 'Good evening, how much does this yellow shirt cost?' } },
      { speaker: 'Commesso', it: 'Costa trenta euro, ma oggi c’è lo sconto del dieci per cento.', tr: { bn: 'দাম ত্রিশ ইউরো, তবে আজ দশ শতাংশ ছাড় আছে।', en: 'It costs thirty euros, but today there is a 10% discount.' } },
      { speaker: 'Cliente', it: 'Benissimo! Avete la taglia M?', tr: { bn: 'খুব ভালো! আপনাদের কাছে M সাইজ আছে?', en: 'Great! Do you have size M?' } },
      { speaker: 'Commesso', it: 'Sì, eccola. I camerini sono a destra.', tr: { bn: 'হ্যাঁ, এই যে। ট্রায়াল রুম ডানে।', en: 'Yes, here it is. The fitting rooms are on the right.' } },
    ],
    explanation: {
      bn: 'দোকানে মূল্য, ছাড় (sconto) ও সাইজ (taglia) নিয়ে স্বাভাবিক সংলাপ।',
      en: 'Everyday shopping dialogue covering price, discount and size.',
    },
    vocabList: [
      { it: 'camerini', tr: { bn: 'ট্রায়াল রুম', en: 'fitting rooms' } },
      { it: 'per cento', tr: { bn: 'শতাংশ (%)', en: 'percent' } },
    ],
    vocabKeys: ['w:A1:la camicia', 'w:A1:lo sconto', 'w:A1:la taglia'],
    grammarIds: ['dimostrativi', 'aggettivi'],
    questions: [
      { id: 'ls12-q1', prompt: { bn: 'শার্টের আসল দাম কত?', en: 'What is the original price of the shirt?' }, options: ['২০ ইউরো', '৩০ ইউরো', '৪০ ইউরো', '৫০ ইউরো'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ৩০ ইউরো — পাঠ্যাংশে বলা হয়েছে: «দাম ত্রিশ ইউরো, তবে আজ দশ শতাংশ ছাড় আছে।» (Costa trenta euro)।', en: '30 euros.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-13',
    level: 'A1',
    kind: 'phone',
    titleIt: 'Invito al compleanno al telefono',
    title: { bn: 'ফোনে জন্মদিনের আমন্ত্রণ', en: 'Phone invitation to a birthday' },
    topic: { bn: 'তারিখ ও আমন্ত্রণ', en: 'Dates & invitations' },
    lines: [
      { speaker: 'Paolo', it: 'Pronto Luca! Sabato venti aprile faccio una piccola festa a casa.', tr: { bn: 'হ্যালো লুকা! শনিবার বিশে এপ্রিল আমি বাসায় ছোট্ট একটা পার্টি দিচ্ছি।', en: 'Hello Luca! On Saturday April 20th I am having a small party at home.' } },
      { speaker: 'Luca', it: 'Che bello! A che ora inizia?', tr: { bn: 'দারুণ! কয়টায় শুরু হবে?', en: 'How nice! What time does it start?' } },
      { speaker: 'Paolo', it: 'Alle sette e mezza di sera. Vieni con tua sorella?', tr: { bn: 'সন্ধ্যা সাড়ে সাতটায়। তোমার বোনকে নিয়ে আসবে?', en: 'At 7:30 PM. Are you coming with your sister?' } },
      { speaker: 'Luca', it: 'Sì, volentieri! Portiamo noi i succhi di frutta.', tr: { bn: 'হ্যাঁ, আনন্দের সাথে! আমরা ফলের জুস নিয়ে আসবো।', en: 'Yes, gladly! We will bring the fruit juices.' } },
    ],
    explanation: {
      bn: 'সম্মতি জানাতে "volontieri" (আনন্দের সাথে / অবশ্যই) খুব সুন্দর শব্দ।',
      en: '"Volentieri" means gladly/with pleasure when accepting an invitation.',
    },
    vocabList: [
      { it: 'volentieri', tr: { bn: 'আনন্দের সাথে', en: 'gladly' } },
      { it: 'aprile', tr: { bn: 'এপ্রিল', en: 'April' } },
    ],
    vocabKeys: ['w:A1:la festa', 'w:A1:aprile', 'w:A1:il succo'],
    grammarIds: ['ora-data', 'irregolari'],
    questions: [
      { id: 'ls13-q1', prompt: { bn: 'পার্টি কয়টায় শুরু হবে?', en: 'What time does the party start?' }, options: ['৬:৩০', '৭:০০', '৭:৩০', '৮:০০'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ৭:৩০ — পাঠ্যাংশে বলা হয়েছে: «সন্ধ্যা সাড়ে সাতটায়। তোমার বোনকে নিয়ে আসবে?» (Alle sette e mezza di sera)।', en: '7:30 PM.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-14',
    level: 'A1',
    kind: 'story',
    titleIt: 'Il clima in Italia nelle quattro stagioni',
    title: { bn: 'ইতালির চার ঋতুর আবহাওয়া', en: 'Italy’s weather across four seasons' },
    topic: { bn: 'আবহাওয়া ও ঋতু', en: 'Weather & seasons' },
    lines: [
      { speaker: 'Guida', it: 'In Italia le quattro stagioni sono molto diverse tra loro.', tr: { bn: 'ইতালিতে চারটি ঋতু পরস্পরের থেকে বেশ আলাদা।', en: 'In Italy the four seasons are very different from one another.' } },
      { speaker: 'Guida', it: 'In inverno fa freddo e sulle montagne c’è la neve. In primavera invece ci sono fiori ovunque.', tr: { bn: 'শীতে ঠান্ডা পড়ে এবং পাহাড়ে তুষার থাকে। অন্যদিকে বসন্তে চারদিকে ফুল থাকে।', en: 'In winter it is cold and there is snow in the mountains. In spring there are flowers everywhere.' } },
      { speaker: 'Guida', it: 'L’estate è calda e soleggiata, perfetta per il mare. In autunno tira vento e piove un po’.', tr: { bn: 'গ্রীষ্মকাল গরম ও রোদেলা, সমুদ্রের জন্য দারুণ। শরতে বাতাস বয় ও একটু বৃষ্টি হয়।', en: 'Summer is hot and sunny, perfect for the sea. In autumn it is windy and rains a bit.' } },
    ],
    explanation: {
      bn: 'আবহাওয়ায় fa freddo / fa caldo এবং অস্তিত্বে c’è la neve লক্ষ করুন।',
      en: 'Note fa freddo/caldo for weather and c’è la neve for presence.',
    },
    vocabList: [
      { it: 'stagioni', tr: { bn: 'ঋতুগুলো', en: 'seasons' } },
      { it: 'soleggiata', tr: { bn: 'রোদেলা', en: 'sunny' } },
    ],
    vocabKeys: ["w:A1:l'inverno", "w:A1:l'estate", 'w:A1:la neve'],
    grammarIds: ['ce', 'irregolari'],
    questions: [
      { id: 'ls14-q1', prompt: { bn: 'কোন ঋতুতে পাহাড়ে তুষার থাকে?', en: 'In which season is there snow on the mountains?' }, options: ['বসন্তে', 'গ্রীষ্মে', 'শরতে', 'শীতে'], answer: 3, explanation: { bn: 'সঠিক উত্তর: শীতে — পাঠ্যাংশে বলা হয়েছে: «শীতে ঠান্ডা পড়ে এবং পাহাড়ে তুষার থাকে। অন্যদিকে বসন্তে চারদিকে ফুল থাকে।» (In inverno sulle montagne c’è la neve)।', en: 'In winter.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-15',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Ordinare la cena al ristorante',
    title: { bn: 'রেস্টুরেন্টে রাতের খাবার অর্ডার', en: 'Ordering dinner at a restaurant' },
    topic: { bn: 'রেস্টুরেন্ট', en: 'Restaurant' },
    lines: [
      { speaker: 'Cameriere', it: 'Siete pronti per ordinare?', tr: { bn: 'আপনারা কি অর্ডার করার জন্য প্রস্তুত?', en: 'Are you ready to order?' } },
      { speaker: 'Sara', it: 'Sì! Io prendo gli spaghetti al pomodoro e un’insalata verde.', tr: { bn: 'হ্যাঁ! আমি টমেটো সসের স্প্যাগেটি আর একটা সবুজ সালাদ নিচ্ছি।', en: 'Yes! I will have spaghetti with tomato sauce and a green salad.' } },
      { speaker: 'Marco', it: 'Per me invece il pesce alla griglia con le patate.', tr: { bn: 'আমার জন্য বরং আলুসহ গ্রিলড মাছ।', en: 'For me, grilled fish with potatoes.' } },
      { speaker: 'Cameriere', it: 'Da bere?', tr: { bn: 'পান করার জন্য?', en: 'To drink?' } },
      { speaker: 'Sara', it: 'Una bottiglia d’acqua frizzante, per favore.', tr: { bn: 'এক বোতল স্পার্কলিং পানি, প্লিজ।', en: 'A bottle of sparkling water, please.' } },
    ],
    explanation: {
      bn: 'খাবার অর্ডারের সময় "Io prendo…" ও "Per me…" অত্যন্ত প্রচলিত।',
      en: '"Io prendo…" and "Per me…" are the most natural restaurant phrasing.',
    },
    vocabList: [
      { it: 'alla griglia', tr: { bn: 'গ্রিল করা', en: 'grilled' } },
      { it: 'acqua frizzante', tr: { bn: 'স্পার্কলিং পানি', en: 'sparkling water' } },
    ],
    vocabKeys: ['w:A1:il ristorante', 'w:A1:il pesce', 'w:A1:la patata'],
    grammarIds: ['presente-ere-ire', 'articoli'],
    questions: [
      { id: 'ls15-q1', prompt: { bn: 'মার্কো কী অর্ডার করে?', en: 'What does Marco order?' }, options: ['স্প্যাগেটি', 'গ্রিলড মাছ ও আলু', 'মাংস', 'স্যুপ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: গ্রিলড মাছ ও আলু — পাঠ্যাংশে বলা হয়েছে: «আমার জন্য বরং আলুসহ গ্রিলড মাছ।» (il pesce alla griglia con le patate)।', en: 'Grilled fish with potatoes.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-16',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Problemi con il wifi a casa',
    title: { bn: 'বাসায় ওয়াইফাই সমস্যা', en: 'Wi-Fi trouble at home' },
    topic: { bn: 'প্রযুক্তি ও বাসা', en: 'Technology & home' },
    lines: [
      { speaker: 'Karim', it: 'Luca, internet non funziona sul mio cellulare.', tr: { bn: 'লুকা, আমার মোবাইল ফোনে ইন্টারনেট কাজ করছে না।', en: 'Luca, the internet is not working on my phone.' } },
      { speaker: 'Luca', it: 'Hai scritto bene la password?', tr: { bn: 'তুমি কি পাসওয়ার্ডটা ঠিক লিখেছো?', en: 'Did you type the password right?' } },
      { speaker: 'Karim', it: 'Penso di sì, ma sullo schermo c’è un errore.', tr: { bn: 'মনে হয় হ্যাঁ, কিন্তু স্ক্রিনে একটা এরর দেখাচ্ছে।', en: 'I think so, but there is an error on the screen.' } },
      { speaker: 'Luca', it: 'Aspetta, ti mando la nuova password per messaggio!', tr: { bn: 'অপেক্ষা করো, আমি মেসেজে তোমাকে নতুন পাসওয়ার্ড পাঠাচ্ছি!', en: 'Wait, I am sending you the new password by message!' } },
    ],
    explanation: {
      bn: 'প্রযুক্তির শব্দ: internet, password, schermo, cellulare, messaggio।',
      en: 'Everyday tech nouns: internet, password, schermo, cellulare, messaggio.',
    },
    vocabList: [
      { it: 'non funziona', tr: { bn: 'কাজ করছে না', en: 'is not working' } },
      { it: 'errore', tr: { bn: 'ত্রুটি / এরর', en: 'error' } },
    ],
    vocabKeys: ['w:A1:internet', 'w:A1:la password', 'w:A1:lo schermo'],
    grammarIds: ['negazione', 'ce'],
    questions: [
      { id: 'ls16-q1', prompt: { bn: 'লুকা কীভাবে নতুন পাসওয়ার্ড পাঠায়?', en: 'How does Luca send the new password?' }, options: ['ইমেইলে', 'মেসেজে', 'কাগজে লিখে', 'বলে দেয়'], answer: 1, explanation: { bn: 'per messaggio = মেসেজের মাধ্যমে।', en: 'By message.' } },
    ],
  }),
];
