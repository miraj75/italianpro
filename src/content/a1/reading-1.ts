import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const A1_READING_1: ReadingPassage[] = [
  buildReading({
    id: 'rd-a1-01',
    level: 'A1',
    kind: 'story',
    titleIt: 'Il primo giorno a Roma',
    title: { bn: 'রোমে প্রথম দিন (পাঠ)', en: 'The first day in Rome (Reader)' },
    storyId: 'st-a1-01',
    paragraphs: [
      {
        it: 'Buongiorno! Mi chiamo Rahim e sono di Dhaka. Oggi è il mio primo giorno a Roma. La città è grande, luminosa e molto antica.',
        tr: { bn: 'শুভ সকাল! আমার নাম রাহিম এবং আমি ঢাকার। আজ রোমে আমার প্রথম দিন। শহরটি বড়, উজ্জ্বল ও প্রাচীন।', en: 'Good morning! My name is Rahim and I am from Dhaka. Today is my first day in Rome. The city is big, bright, and very ancient.' },
      },
      {
        it: 'Io sono uno studente di architettura. Davanti alla stazione incontro Marco. Lui è italiano e siamo subito amici.',
        tr: { bn: 'আমি স্থাপত্যবিদ্যার ছাত্র। স্টেশনের সামনে মার্কোর সাথে দেখা হয়। সে ইতালীয় এবং আমরা সাথে সাথে বন্ধু হয়ে যাই।', en: 'I am an architecture student. In front of the station I meet Marco. He is Italian and we immediately become friends.' },
      },
    ],
    vocabHighlights: [
      { it: 'luminosa', tr: { bn: 'উজ্জ্বল', en: 'bright' } },
      { it: 'davanti alla stazione', tr: { bn: 'স্টেশনের সামনে', en: 'in front of the station' } },
      { it: 'subito', tr: { bn: 'সাথে সাথে', en: 'immediately' } },
    ],
    grammarHighlights: [
      { excerpt: 'sono di Dhaka', note: { bn: 'উৎস বা শহর বোঝাতে essere + di + শহর।', en: 'Origin uses essere + di + city.' }, grammarId: 'essere' },
      { excerpt: 'siamo subito amici', note: { bn: 'noi-এর সাথে essere = siamo।', en: 'noi uses siamo.' }, grammarId: 'essere' },
    ],
    relatedGrammarIds: ['essere', 'aggettivi'],
    questions: [
      { id: 'rd-a1-01-q1', prompt: { bn: 'রাহিমের সাথে কার দেখা হয়?', en: 'Who does Rahim meet?' }, options: ['Luca', 'Marco', 'Paolo', 'Sara'], answer: 1, explanation: { bn: 'স্টেশনের সামনে মার্কোর সাথে দেখা হয়।', en: 'He meets Marco in front of the station.' } },
      { id: 'rd-a1-01-q2', prompt: { bn: 'রাহিম কী পড়ে?', en: 'What does Rahim study?' }, options: ['আইন', 'স্থাপত্যবিদ্যা', 'চিকিৎসা', 'সাহিত্য'], answer: 1, explanation: { bn: 'studente di architettura।', en: 'Architecture student.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-02',
    level: 'A1',
    kind: 'message',
    titleIt: 'Un messaggio su WhatsApp',
    title: { bn: 'হোয়াটসঅ্যাপ মেসেজ', en: 'A WhatsApp message' },
    paragraphs: [
      {
        it: 'Ciao Sara! Come stai? Oggi pomeriggio vado al supermercato alle cinque per comprare pane, latte e frutta.',
        tr: { bn: 'হ্যালো সারা! কেমন আছো? আজ বিকেল পাঁচটায় আমি রুটি, দুধ আর ফল কিনতে সুপারমার্কেটে যাচ্ছি।', en: 'Hi Sara! How are you? This afternoon I am going to the supermarket at five to buy bread, milk, and fruit.' },
      },
      {
        it: 'Vuoi venire con me? Poi possiamo prendere un gelato al bar vicino alla piazza. Fammi sapere!',
        tr: { bn: 'আমার সাথে আসতে চাও? পরে চত্বরের কাছের ক্যাফেতে আমরা আইসক্রিম খেতে পারি। জানিও!', en: 'Do you want to come with me? Then we can get an ice cream at the café near the square. Let me know!' },
      },
    ],
    vocabHighlights: [
      { it: 'oggi pomeriggio', tr: { bn: 'আজ বিকেলে', en: 'this afternoon' } },
      { it: 'fammi sapere', tr: { bn: 'আমাকে জানিও', en: 'let me know' } },
      { it: 'vicino alla piazza', tr: { bn: 'চত্বরের কাছে', en: 'near the square' } },
    ],
    grammarHighlights: [
      { excerpt: 'vado al supermercato', note: { bn: 'andare অনিয়মিত ক্রিয়া: io vado।', en: 'andare is irregular: io vado.' }, grammarId: 'irregolari' },
      { excerpt: 'Vuoi venire con me?', note: { bn: 'মডাল volere + infinito (venire)।', en: 'Modal volere + infinitive.' }, grammarId: 'modali' },
    ],
    relatedGrammarIds: ['irregolari', 'modali', 'ora-data'],
    questions: [
      { id: 'rd-a1-02-q1', prompt: { bn: 'বার্তাপ্রেরক কয়টায় সুপারমার্কেটে যাবে?', en: 'What time is the sender going to the supermarket?' }, options: ['তিনটায়', 'চারটায়', 'পাঁচটায়', 'ছয়টায়'], answer: 2, explanation: { bn: 'alle cinque = পাঁচটায়।', en: 'alle cinque = at 5.' } },
      { id: 'rd-a1-02-q2', prompt: { bn: 'কেনাকাটার পর তারা কী খেতে চায়?', en: 'What do they suggest getting afterwards?' }, options: ['পিজ্জা', 'আইসক্রিম', 'চা', 'স্যুপ'], answer: 1, explanation: { bn: 'prendere un gelato = আইসক্রিম খাওয়া।', en: 'An ice cream (gelato).' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-03',
    level: 'A1',
    kind: 'notice',
    titleIt: 'Orari della biblioteca comunale',
    title: { bn: 'পৌর লাইব্রেরির সময়সূচি', en: 'Municipal library hours' },
    paragraphs: [
      {
        it: 'AVVISO AGLI STUDENTI: La biblioteca comunale è aperta dal lunedì al venerdì dalle ore 8:30 alle ore 19:30.',
        tr: { bn: 'ছাত্রদের জন্য বিজ্ঞপ্তি: পৌর লাইব্রেরি সোমবার থেকে শুক্রবার সকাল ৮:৩০ থেকে সন্ধ্যা ১৯:৩০ পর্যন্ত খোলা থাকে।', en: 'NOTICE TO STUDENTS: The municipal library is open Monday to Friday from 8:30 AM to 7:30 PM.' },
      },
      {
        it: 'Il sabato la sala lettura apre alle 9:00 e chiude alle 13:00. La domenica la biblioteca rimane chiusa.',
        tr: { bn: 'শনিবার পাঠকক্ষ সকাল ৯:০০-টায় খোলে এবং দুপুর ১:০০-টায় বন্ধ হয়। রবিবার লাইব্রেরি বন্ধ থাকে।', en: 'On Saturday the reading room opens at 9:00 AM and closes at 1:00 PM. On Sunday the library remains closed.' },
      },
    ],
    vocabHighlights: [
      { it: 'avviso', tr: { bn: 'বিজ্ঞপ্তি', en: 'notice' } },
      { it: 'sala lettura', tr: { bn: 'পাঠকক্ষ', en: 'reading room' } },
      { it: 'rimane chiusa', tr: { bn: 'বন্ধ থাকে', en: 'remains closed' } },
    ],
    grammarHighlights: [
      { excerpt: 'è aperta / rimane chiusa', note: { bn: 'biblioteca স্ত্রীলিঙ্গ বলে aperta ও chiusa হয়েছে।', en: 'biblioteca is feminine, so aperta/chiusa agree.' }, grammarId: 'aggettivi' },
      { excerpt: 'dalle ore 8:30 alle ore 19:30', note: { bn: 'সময়সীমা বোঝাতে da ... a ব্যবহার হয়।', en: 'Time range uses da ... a.' }, grammarId: 'ora-data' },
    ],
    relatedGrammarIds: ['ora-data', 'aggettivi'],
    questions: [
      { id: 'rd-a1-03-q1', prompt: { bn: 'শনিবার লাইব্রেরি কয়টায় বন্ধ হয়?', en: 'When does the library close on Saturday?' }, options: ['৯:০০', '১৩:০০', '১৯:৩০', 'সারাদিন খোলা'], answer: 1, explanation: { bn: 'chiude alle 13:00।', en: 'Closes at 13:00 (1:00 PM).' } },
      { id: 'rd-a1-03-q2', prompt: { bn: 'কোন দিন লাইব্রেরি পুরো বন্ধ থাকে?', en: 'Which day is the library completely closed?' }, options: ['সোমবার', 'শনিবার', 'রবিবার', 'শুক্রবার'], answer: 2, explanation: { bn: 'La domenica rimane chiusa।', en: 'Closed on Sunday.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-04',
    level: 'A1',
    kind: 'email',
    titleIt: 'Email al professore',
    title: { bn: 'অধ্যাপককে ইমেইল', en: 'An email to the professor' },
    paragraphs: [
      {
        it: 'Gentile Professore, mi chiamo Nadia e frequento il Suo corso di lingua italiana il martedì mattina.',
        tr: { bn: 'শ্রদ্ধেয় অধ্যাপক, আমার নাম নাদিয়া এবং আমি মঙ্গলবার সকালে আপনার ইতালীয় ভাষার ক্লাসে আসি।', en: 'Dear Professor, my name is Nadia and I attend your Italian language course on Tuesday mornings.' },
      },
      {
        it: 'Purtroppo domani non posso venire a lezione perché ho la febbre e devo andare dal medico. Grazie mille, cordiali saluti, Nadia.',
        tr: { bn: 'দুর্ভাগ্যবশত আগামীকাল আমি ক্লাসে আসতে পারব না কারণ আমার জ্বর হয়েছে এবং ডাক্তারের কাছে যেতে হবে। অনেক ধন্যবাদ, শুভেচ্ছান্তে, নাদিয়া।', en: 'Unfortunately tomorrow I cannot come to class because I have a fever and must go to the doctor. Thank you very much, kind regards, Nadia.' },
      },
    ],
    vocabHighlights: [
      { it: 'gentile', tr: { bn: 'শ্রদ্ধেয় / প্রিয় (আনুষ্ঠানিক)', en: 'dear (formal)' } },
      { it: 'purtroppo', tr: { bn: 'দুর্ভাগ্যবশত', en: 'unfortunately' } },
      { it: 'cordiali saluti', tr: { bn: 'আন্তরিক শুভেচ্ছা / ইতি', en: 'kind regards' } },
    ],
    grammarHighlights: [
      { excerpt: 'non posso venire', note: { bn: 'না-বাচক non মডাল ক্রিয়ার আগে বসে।', en: 'non goes before the modal verb.' }, grammarId: 'negazione' },
      { excerpt: 'devo andare dal medico', note: { bn: 'পেশাজীবীর কাছে যাওয়া বোঝাতে da + আর্টিকেল (dal)।', en: 'Going to a professional uses da (dal medico).' }, grammarId: 'preposizioni' },
    ],
    relatedGrammarIds: ['modali', 'negazione', 'preposizioni'],
    questions: [
      { id: 'rd-a1-04-q1', prompt: { bn: 'নাদিয়া কেন ক্লাসে আসতে পারছে না?', en: 'Why cannot Nadia attend class?' }, options: ['ট্রেন মিস করেছে', 'তার জ্বর হয়েছে', 'সে ছুটিতে আছে', 'লাইব্রেরিতে কাজ আছে'], answer: 1, explanation: { bn: 'ho la febbre = তার জ্বর হয়েছে।', en: 'She has a fever.' } },
      { id: 'rd-a1-04-q2', prompt: { bn: 'কোর্সটি সপ্তাহের কোন দিন সকালে হয়?', en: 'Which morning is the course held?' }, options: ['সোমবার', 'মঙ্গলবার', 'বৃহস্পতিবার', 'শনিবার'], answer: 1, explanation: { bn: 'il martedì mattina = মঙ্গলবার সকালে।', en: 'Tuesday morning.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-05',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Al bar della stazione',
    title: { bn: 'স্টেশনের ক্যাফেতে', en: 'At the station café' },
    paragraphs: [
      {
        it: 'Cliente: Buongiorno! Vorrei un cappuccino caldo e un cornetto alla crema, per favore. Quanto costa il succo d’arancia?',
        tr: { bn: 'গ্রাহক: শুভ সকাল! অনুগ্রহ করে একটি গরম ক্যাপুচিনো ও একটি ক্রিম কর্নেত্তো দিন। কমলার জুসের দাম কত?', en: 'Customer: Good morning! I would like a hot cappuccino and a cream croissant, please. How much is the orange juice?' },
      },
      {
        it: 'Barista: Il succo costa tre euro. In totale fanno sei euro e cinquanta. Paga alla cassa o qui con la carta?',
        tr: { bn: 'বারিস্তা: জুসের দাম তিন ইউরো। মোট ছয় ইউরো পঞ্চাশ সেন্ট। ক্যাশে দেবেন নাকি এখানে কার্ডে?', en: 'Barista: The juice costs three euros. In total that is six euros fifty. Are you paying at the cash desk or here by card?' },
      },
    ],
    vocabHighlights: [
      { it: 'cornetto alla crema', tr: { bn: 'ক্রিমযুক্ত ক্রোয়াসাঁ', en: 'cream croissant' } },
      { it: 'in totale', tr: { bn: 'মোট', en: 'in total' } },
      { it: 'alla cassa', tr: { bn: 'ক্যাশ কাউন্টারে', en: 'at the cash desk' } },
    ],
    grammarHighlights: [
      { excerpt: 'Quanto costa...?', note: { bn: 'একটি জিনিসের দাম জানতে Quanto costa ব্যবহার হয়।', en: 'Ask singular price with Quanto costa.' }, grammarId: 'domande' },
      { excerpt: 'un cappuccino caldo', note: { bn: 'caldo বিশেষণ cappuccino-র সাথে পুংলিঙ্গ একবচনে মিলেছে।', en: 'caldo agrees masculine singular with cappuccino.' }, grammarId: 'aggettivi' },
    ],
    relatedGrammarIds: ['domande', 'articoli', 'aggettivi'],
    questions: [
      { id: 'rd-a1-05-q1', prompt: { bn: 'কমলার জুসের দাম কত?', en: 'How much does the orange juice cost?' }, options: ['২ ইউরো', '৩ ইউরো', '৬.৫০ ইউরো', '১.৫০ ইউরো'], answer: 1, explanation: { bn: 'Il succo costa tre euro।', en: 'Three euros.' } },
      { id: 'rd-a1-05-q2', prompt: { bn: 'গ্রাহক কেমন কর্নেত্তো চেয়েছেন?', en: 'What kind of cornetto does the customer ask for?' }, options: ['চকলেট', 'জ্যাম', 'ক্রিম', 'সাদা'], answer: 2, explanation: { bn: 'un cornetto alla crema।', en: 'A cream cornetto.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-06',
    level: 'A1',
    kind: 'letter',
    titleIt: 'Una cartolina da Firenze',
    title: { bn: 'ফ্লোরেন্স থেকে পোস্টকার্ড', en: 'A postcard from Florence' },
    paragraphs: [
      {
        it: 'Cara mamma, caro papà, vi scrivo da Firenze! Questa città è bellissima e l’albergo è proprio vicino al fiume Arno.',
        tr: { bn: 'প্রিয় মা, প্রিয় বাবা, আমি ফ্লোরেন্স থেকে লিখছি! এই শহরটি দারুণ সুন্দর আর হোটেলটি আর্নো নদীর একদম কাছে।', en: 'Dear Mum and Dad, I am writing to you from Florence! This city is gorgeous and the hotel is right near the Arno river.' },
      },
      {
        it: 'Ogni mattina cammino per le strade del centro e visito i musei. Il cibo toscano è buono e non fa troppo freddo. Vi abbraccio forte, Karim.',
        tr: { bn: 'প্রতিদিন সকালে আমি কেন্দ্রের রাস্তা দিয়ে হাঁটি আর জাদুঘর দেখি। তুস্কান খাবার বেশ ভালো আর খুব ঠান্ডাও নেই। অনেক ভালোবাসা, করিম।', en: 'Every morning I walk through the streets of the centre and visit museums. Tuscan food is good and it is not too cold. Big hug, Karim.' },
      },
    ],
    vocabHighlights: [
      { it: 'cartolina', tr: { bn: 'পোস্টকার্ড', en: 'postcard' } },
      { it: 'proprio vicino', tr: { bn: 'একদম কাছে', en: 'right near' } },
      { it: 'non fa troppo freddo', tr: { bn: 'খুব বেশি ঠান্ডা নয়', en: 'it is not too cold' } },
    ],
    grammarHighlights: [
      { excerpt: 'Questa città', note: { bn: 'কাছের স্ত্রীলিঙ্গ বিশেষ্যের সাথে questo → questa।', en: 'Feminine singular demonstrative questa.' }, grammarId: 'dimostrativi' },
      { excerpt: 'cammino / visito', note: { bn: '-are ক্রিয়ার io রূপ (-o)।', en: 'Regular -are verb io form.' }, grammarId: 'presente-are' },
    ],
    relatedGrammarIds: ['dimostrativi', 'presente-are', 'preposizioni-luogo'],
    questions: [
      { id: 'rd-a1-06-q1', prompt: { bn: 'করিমের হোটেল কোথায় অবস্থিত?', en: 'Where is Karim’s hotel located?' }, options: ['স্টেশনের ভেতরে', 'আর্নো নদীর কাছে', 'সমুদ্রের পাশে', 'পাহাড়ের উপরে'], answer: 1, explanation: { bn: 'vicino al fiume Arno।', en: 'Near the Arno river.' } },
      { id: 'rd-a1-06-q2', prompt: { bn: 'করিম কাকে চিঠিটি লিখেছে?', en: 'Who did Karim write to?' }, options: ['তার বন্ধুকে', 'তার মা-বাবাকে', 'তার শিক্ষককে', 'তার বোনকে'], answer: 1, explanation: { bn: 'Cara mamma, caro papà।', en: 'His mother and father.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-07',
    level: 'A1',
    kind: 'travel',
    titleIt: 'Un biglietto per Venezia',
    title: { bn: 'ভেনিসের ট্রেন যাত্রা', en: 'A train trip to Venice' },
    paragraphs: [
      {
        it: 'Sabato mattina Paolo prende il treno veloce da Milano a Venezia. Il treno parte alle otto e dieci e arriva alle dieci e quaranta.',
        tr: { bn: 'শনিবার সকালে পাওলো মিলান থেকে ভেনিস যাওয়ার দ্রুতগতির ট্রেন ধরে। ট্রেন ৮টা ১০-এ ছাড়ে এবং ১০টা ৪০-এ পৌঁছায়।', en: 'Saturday morning Paolo takes the fast train from Milan to Venice. The train departs at 8:10 and arrives at 10:40.' },
      },
      {
        it: 'Sul treno ci sono molti turisti. Paolo legge un libro sul suo telefono e guarda fuori dal finestrino il verde della campagna.',
        tr: { bn: 'ট্রেনে অনেক পর্যটক আছে। পাওলো ফোনে একটি বই পড়ে এবং জানালার বাইরে গ্রামাঞ্চলের সবুজ দৃশ্য দেখে।', en: 'There are many tourists on the train. Paolo reads a book on his phone and looks out the window at the green countryside.' },
      },
    ],
    vocabHighlights: [
      { it: 'treno veloce', tr: { bn: 'দ্রুতগতির ট্রেন', en: 'fast train' } },
      { it: 'finestrino', tr: { bn: 'ট্রেন/গাড়ির জানালা', en: 'train/car window' } },
      { it: 'campagna', tr: { bn: 'গ্রামাঞ্চল', en: 'countryside' } },
    ],
    grammarHighlights: [
      { excerpt: 'ci sono molti turisti', note: { bn: 'বহুবচন বিশেষ্য turisti-র জন্য ci sono।', en: 'Plural nouns use ci sono.' }, grammarId: 'ce' },
      { excerpt: 'il suo telefono', note: { bn: 'পুংলিঙ্গ একবচন সম্বন্ধসূচক il suo।', en: 'Masculine singular possessive il suo.' }, grammarId: 'possessivi-a1' },
    ],
    relatedGrammarIds: ['ce', 'ora-data', 'possessivi-a1'],
    questions: [
      { id: 'rd-a1-07-q1', prompt: { bn: 'ভেনিসের ট্রেন কয়টায় ছাড়ে?', en: 'What time does the train depart?' }, options: ['৭:৪০', '৮:১০', '১০:৪০', '১২:০০'], answer: 1, explanation: { bn: 'parte alle otto e dieci (৮:১০)।', en: 'Departs at 8:10.' } },
      { id: 'rd-a1-07-q2', prompt: { bn: 'পাওলো ট্রেনে বসে কী করে?', en: 'What does Paolo do on the train?' }, options: ['রান্না করে', 'ফোনে বই পড়ে', 'গান গায়', 'ফুটবল খেলে'], answer: 1, explanation: { bn: 'legge un libro sul suo telefono।', en: 'He reads a book on his phone.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-08',
    level: 'A1',
    kind: 'story',
    titleIt: 'La domenica in famiglia',
    title: { bn: 'পরিবারের সাথে রবিবার (পাঠ)', en: 'Sunday with the family (Reader)' },
    storyId: 'st-a1-02',
    paragraphs: [
      {
        it: 'Oggi è domenica e tutta la famiglia Rossi è a casa. Mio padre prepara il caffè in cucina mentre mia madre apparecchia la tavola.',
        tr: { bn: 'আজ রবিবার এবং পুরো রোসি পরিবার বাড়িতে আছে। আমার বাবা রান্নাঘরে কফি তৈরি করেন আর আমার মা টেবিল সাজান।', en: 'Today is Sunday and the whole Rossi family is at home. My father makes coffee in the kitchen while my mother sets the table.' },
      },
      {
        it: 'Mio fratello minore gioca con il cane in giardino e mia sorella ascolta musica. A mezzogiorno mangiamo insieme la pasta al forno della nonna.',
        tr: { bn: 'আমার ছোট ভাই বাগানে কুকুরের সাথে খেলে এবং আমার বোন গান শোনে। দুপুরে আমরা একসাথে দাদির তৈরি ওভেন পাস্তা খাই।', en: 'My younger brother plays with the dog in the garden and my sister listens to music. At noon we eat grandmother’s baked pasta together.' },
      },
    ],
    vocabHighlights: [
      { it: 'apparecchia la tavola', tr: { bn: 'খাবার টেবিল সাজায়', en: 'sets the table' } },
      { it: 'insieme', tr: { bn: 'একসাথে', en: 'together' } },
      { it: 'a mezzogiorno', tr: { bn: 'দুপুর ১২টায়', en: 'at noon' } },
    ],
    grammarHighlights: [
      { excerpt: 'mio padre / mia madre', note: { bn: 'একবচন পরিবারের সদস্যের আগে আর্টিকেল বসে না।', en: 'Drop article before singular family members.' }, grammarId: 'possessivi-a1' },
      { excerpt: 'mangiamo insieme', note: { bn: 'noi রূপের শেষে -iamo।', en: 'noi ending -iamo.' }, grammarId: 'presente-are' },
    ],
    relatedGrammarIds: ['possessivi-a1', 'presente-are'],
    questions: [
      { id: 'rd-a1-08-q1', prompt: { bn: 'বাবা রান্নাঘরে কী তৈরি করেন?', en: 'What does the father make in the kitchen?' }, options: ['চা', 'কফি', 'জুস', 'স্যুপ'], answer: 1, explanation: { bn: 'prepara il caffè।', en: 'He makes coffee.' } },
      { id: 'rd-a1-08-q2', prompt: { bn: 'দুপুরের খাবার কখন খাওয়া হয়?', en: 'When do they have lunch?' }, options: ['সকাল ১০টায়', 'দুপুর ১২টায় (mezzogiorno)', 'বিকেল ৪টায়', 'রাত ৮টায়'], answer: 1, explanation: { bn: 'A mezzogiorno।', en: 'At noon.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-09',
    level: 'A1',
    kind: 'notice',
    titleIt: 'Offerte della settimana al mercato',
    title: { bn: 'বাজারের সাপ্তাহিক ছাড়', en: 'Weekly market offers' },
    paragraphs: [
      {
        it: 'MERCATO CENTRALE — Solo questa settimana: mele rosse fresche a 1,50 euro al chilo e pomodori maturi a 2,00 euro al chilo.',
        tr: { bn: 'কেন্দ্রীয় বাজার — শুধু এই সপ্তাহে: তাজা লাল আপেল কেজি ১.৫০ ইউরো এবং পাকা টমেটো কেজি ২.০০ ইউরো।', en: 'CENTRAL MARKET — This week only: fresh red apples at €1.50 per kilo and ripe tomatoes at €2.00 per kilo.' },
      },
      {
        it: 'Ogni mattina dalle 7:30 alle 13:30 trovate anche pane caldo, formaggio locale e uova fresche. Non accettiamo carte sotto i cinque euro.',
        tr: { bn: 'প্রতিদিন সকাল ৭:৩০ থেকে দুপুর ১:৩০ পর্যন্ত গরম রুটি, স্থানীয় পনির ও তাজা ডিমও পাবেন। পাঁচ ইউরোর নিচে কার্ড গ্রহণ করা হয় না।', en: 'Every morning from 7:30 to 13:30 you also find warm bread, local cheese, and fresh eggs. We do not accept cards under five euros.' },
      },
    ],
    vocabHighlights: [
      { it: 'al chilo', tr: { bn: 'প্রতি কেজিতে', en: 'per kilo' } },
      { it: 'maturi', tr: { bn: 'পাকা', en: 'ripe' } },
      { it: 'non accettiamo', tr: { bn: 'আমরা গ্রহণ করি না', en: 'we do not accept' } },
    ],
    grammarHighlights: [
      { excerpt: 'mele rosse / uova fresche', note: { bn: 'স্ত্রীলিঙ্গ বহুবচন -e দিয়ে বিশেষণ মেলে।', en: 'Feminine plural nouns match -e adjectives.' }, grammarId: 'genere-numero' },
      { excerpt: 'Non accettiamo carte', note: { bn: 'non ক্রিয়ার ঠিক আগে বসে।', en: 'non directly precedes the verb.' }, grammarId: 'negazione' },
    ],
    relatedGrammarIds: ['genere-numero', 'negazione'],
    questions: [
      { id: 'rd-a1-09-q1', prompt: { bn: 'টমেটোর কেজি কত?', en: 'How much are tomatoes per kilo?' }, options: ['১.৫০ ইউরো', '২.০০ ইউরো', '৫.০০ ইউরো', '৩.০০ ইউরো'], answer: 1, explanation: { bn: 'pomodori maturi a 2,00 euro al chilo।', en: '€2.00 per kilo.' } },
      { id: 'rd-a1-09-q2', prompt: { bn: 'কার্ডে পেমেন্ট করতে কমপক্ষে কত ইউরোর কেনাকাটা করতে হবে?', en: 'What is the minimum spend to pay by card?' }, options: ['২ ইউরো', '৩ ইউরো', '৫ ইউরো', '১০ ইউরো'], answer: 2, explanation: { bn: 'Non accettiamo carte sotto i cinque euro।', en: 'Not under €5.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-10',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'In farmacia',
    title: { bn: 'ফার্মেসিতে কথোপকথন', en: 'At the pharmacy' },
    paragraphs: [
      {
        it: 'Cliente: Buonasera, dottore. Ho mal di testa e ho un po’ di febbre da ieri sera. Che medicina posso prendere?',
        tr: { bn: 'গ্রাহক: শুভ সন্ধ্যা, ডাক্তার। গতকাল সন্ধ্যা থেকে আমার মাথাব্যথা আর একটু জ্বর আছে। আমি কোন ওষুধ খেতে পারি?', en: 'Customer: Good evening, doctor. I have a headache and a slight fever since yesterday evening. What medicine can I take?' },
      },
      {
        it: 'Farmacista: Può prendere queste compresse dopo cena con un bicchiere d’acqua. Se la febbre non passa, chiami il Suo medico.',
        tr: { bn: 'ফার্মাসিস্ট: আপনি রাতের খাবারের পর এক গ্লাস পানির সাথে এই ট্যাবলেট খেতে পারেন। জ্বর না কমলে আপনার ডাক্তারকে ফোন করবেন।', en: 'Pharmacist: You can take these tablets after dinner with a glass of water. If the fever does not go away, call your doctor.' },
      },
    ],
    vocabHighlights: [
      { it: 'mal di testa', tr: { bn: 'মাথাব্যথা', en: 'headache' } },
      { it: 'compresse', tr: { bn: 'ট্যাবলেট', en: 'tablets' } },
      { it: 'dopo cena', tr: { bn: 'রাতের খাবারের পর', en: 'after dinner' } },
    ],
    grammarHighlights: [
      { excerpt: 'Ho mal di testa / ho la febbre', note: { bn: 'শারীরিক উপসর্গে avere ব্যবহৃত হয়।', en: 'Physical symptoms use avere.' }, grammarId: 'avere-espressioni' },
      { excerpt: 'queste compresse', note: { bn: 'স্ত্রীলিঙ্গ বহুবচন নির্দেশক queste।', en: 'Feminine plural demonstrative queste.' }, grammarId: 'dimostrativi' },
    ],
    relatedGrammarIds: ['avere-espressioni', 'modali', 'dimostrativi'],
    questions: [
      { id: 'rd-a1-10-q1', prompt: { bn: 'ট্যাবলেটগুলো কখন খেতে বলা হয়েছে?', en: 'When should the tablets be taken?' }, options: ['সকালের আগে', 'দুপুরের আগে', 'রাতের খাবারের পর', 'ঘুমানোর ঠিক আগে নয়'], answer: 2, explanation: { bn: 'dopo cena = রাতের খাবারের পর।', en: 'After dinner.' } },
      { id: 'rd-a1-10-q2', prompt: { bn: 'গ্রাহকের কী কী সমস্যা হয়েছে?', en: 'What symptoms does the customer have?' }, options: ['দাঁতব্যথা', 'মাথাব্যথা ও জ্বর', 'পায়ে ব্যথা', 'কাশি ও সর্দি'], answer: 1, explanation: { bn: 'mal di testa e febbre।', en: 'Headache and fever.' } },
    ],
  }),

  buildReading({
    id: 'rd-a1-11',
    level: 'A1',
    kind: 'email',
    titleIt: 'Un invito per sabato sera',
    title: { bn: 'শনিবার সন্ধ্যার আমন্ত্রণ', en: 'An invitation for Saturday night' },
    paragraphs: [
      {
        it: 'Ciao Luca, sabato è il compleanno di Giulia! Facciamo una piccola festa a casa mia in via Verdi numero dodici, alle otto di sera.',
        tr: { bn: 'হ্যালো লুকা, শনিবার জুলিয়ার জন্মদিন! ভিয়া ভের্দি ১২ নম্বরে আমার বাসায় সন্ধ্যা আটটায় ছোট একটি পার্টি করছি।', en: 'Hi Luca, Saturday is Giulia’s birthday! We are having a small party at my place at 12 Via Verdi at 8 PM.' },
      },
      {
        it: 'Cuciniamo una bella pizza fatta in casa e ascoltiamo un po’ di musica. Non portare regali costosi, basta una bottiglia di succo!',
        tr: { bn: 'আমরা বাড়িতে বানানো পিজ্জা রান্না করব আর একটু গান শুনব। দামি উপহার আনার দরকার নেই, এক বোতল জুস হলেই যথেষ্ট!', en: 'We are baking a nice homemade pizza and listening to some music. Don’t bring expensive gifts, a bottle of juice is enough!' },
      },
    ],
    vocabHighlights: [
      { it: 'fatta in casa', tr: { bn: 'বাড়িতে তৈরি', en: 'homemade' } },
      { it: 'regali costosi', tr: { bn: 'দামি উপহার', en: 'expensive gifts' } },
      { it: 'basta', tr: { bn: 'যথেষ্ট', en: 'is enough' } },
    ],
    grammarHighlights: [
      { excerpt: 'il compleanno di Giulia', note: { bn: 'মালিকানা বা কার জন্মদিন বোঝাতে di।', en: 'Possession uses di.' }, grammarId: 'preposizioni' },
      { excerpt: 'alle otto di sera', note: { bn: 'নির্দিষ্ট সময়ে অনুষ্ঠান: alle + সংখ্যা।', en: 'Event time uses alle.' }, grammarId: 'ora-data' },
    ],
    relatedGrammarIds: ['preposizioni', 'ora-data', 'presente-are'],
    questions: [
      { id: 'rd-a1-11-q1', prompt: { bn: 'পার্টি কার বাড়িতে হচ্ছে?', en: 'Whose house is the party at?' }, options: ['লুকার বাড়িতে', 'চিঠি লেখকের বাড়িতে', 'একটি রেস্টুরেন্টে', 'পার্কে'], answer: 1, explanation: { bn: 'a casa mia = আমার বাড়িতে।', en: 'At the writer’s house.' } },
      { id: 'rd-a1-11-q2', prompt: { bn: 'অতিথিকে কী আনতে বলা হয়েছে?', en: 'What is the guest asked to bring?' }, options: ['দামি ঘড়ি', 'কেক', 'এক বোতল জুস', 'ফুল'], answer: 2, explanation: { bn: 'basta una bottiglia di succo।', en: 'Just a bottle of juice.' } },
    ],
  }),
];
