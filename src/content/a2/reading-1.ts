import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const A2_READING_1: ReadingPassage[] = [
  buildReading({
    id: 'rd-a2-01', level: 'A2', kind: 'story', titleIt: 'Una gita a Firenze', title: { bn: 'ফ্লোরেন্স ভ্রমণের পাঠ', en: 'A day trip to Florence (Reader)' },
    storyId: 'st-a2-01',
    paragraphs: [
      { it: 'Sabato scorso io e mio fratello abbiamo fatto una gita a Firenze. Abbiamo comprato i biglietti del treno su internet una settimana prima.', tr: { bn: 'গত শনিবার আমি ও আমার ভাই ফ্লোরেন্স ভ্রমণে গিয়েছিলাম। এক সপ্তাহ আগে ইন্টারনেটে টিকিট কিনেছিলাম।', en: 'Last Saturday my brother and I took a day trip to Florence, buying tickets online a week ahead.' } },
      { it: 'La mattina abbiamo visitato la galleria degli Uffizi e abbiamo mangiato un ottimo gelato vicino al Duomo.', tr: { bn: 'সকালে আমরা উফিৎসি গ্যালারি দেখেছি এবং দুওমোর কাছে দারুণ আইসক্রিম খেয়েছি।', en: 'In the morning we visited the Uffizi gallery and ate excellent gelato near the Duomo.' } },
    ],
    vocabHighlights: [{ it: 'una settimana prima', tr: { bn: 'এক সপ্তাহ আগে', en: 'one week earlier' } }, { it: 'artigianale', tr: { bn: 'হাতে তৈরি', en: 'artisan' } }],
    grammarHighlights: [{ excerpt: 'abbiamo visitato', note: { bn: 'avere + -ato: সম্পন্ন অতীত কাজ।', en: 'avere + -ato marks completed action.' }, grammarId: 'passato-prossimo' }],
    relatedGrammarIds: ['passato-prossimo', 'preposizioni-articolate'],
    questions: [
      { id: 'rd-a2-01-q1', prompt: { bn: 'তারা কবে ফ্লোরেন্সে গিয়েছিল?', en: 'When did they visit Florence?' }, options: ['রবিবার', 'গত শনিবার', 'শুক্রবার', 'মঙ্গলবার'], answer: 1, explanation: { bn: 'Sabato scorso = গত শনিবার।', en: 'Last Saturday.' } },
      { id: 'rd-a2-01-q2', prompt: { bn: 'টিকিট কীভাবে কেনা হয়েছিল?', en: 'How were tickets bought?' }, options: ['স্টেশনে', 'এজেন্সিতে', 'অনলাইনে', 'ফোনে'], answer: 2, explanation: { bn: 'সঠিক উত্তর: অনলাইনে — পাঠ্যাংশে বলা হয়েছে: «গত শনিবার আমি ও আমার ভাই ফ্লোরেন্স ভ্রমণে গিয়েছিলাম। এক সপ্তাহ আগে ইন্টারনেটে টিকিট কিনেছিলাম।» (su internet)।', en: 'Online.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-02', level: 'A2', kind: 'email', titleIt: 'Conferma del colloquio', title: { bn: 'সাক্ষাৎকার নিশ্চিতকরণ ইমেইল', en: 'Interview confirmation email' },
    paragraphs: [
      { it: 'Gentile Signor Begum, siamo lieti di confermare il Suo colloquio per la posizione di assistente progettista venerdì alle ore 10:30 presso i nostri uffici in via Garibaldi 18.', tr: { bn: 'জনাব বেগম, শুক্রবার সকাল ১০:৩০-এ গারিবালদি স্ট্রিট ১৮-এ আমাদের অফিসে অ্যাসিস্ট্যান্ট ডিজাইনার পদের সাক্ষাৎকার নিশ্চিত করতে পেরে আমরা আনন্দিত।', en: 'Dear Begum, we are pleased to confirm your interview for assistant designer on Friday at 10:30 AM at our offices, Via Garibaldi 18.' } },
      { it: 'La preghiamo di portare una copia aggiornata del curriculum e un documento d’identità valido. Se avesse difficoltà a raggiungerci, ci scriva pure.', tr: { bn: 'অনুগ্রহ করে সিভির আপডেট কপি ও বৈধ পরিচয়পত্র সাথে আনবেন। পৌঁছাতে কোনো অসুবিধা হলে আমাদের লিখুন।', en: 'Please bring an updated CV copy and valid ID. Should you have trouble reaching us, feel free to write.' } },
    ],
    vocabHighlights: [{ it: 'siamo lieti di', tr: { bn: 'আমরা আনন্দিত যে', en: 'we are pleased to' } }, { it: 'aggiornata', tr: { bn: 'হালনাগাদ করা', en: 'updated' } }],
    grammarHighlights: [{ excerpt: 'La preghiamo di portare', note: { bn: 'আনুষ্ঠানিক Lei অনুরোধে La + preghiamo di + inf.।', en: 'Formal polite request uses La preghiamo di.' }, grammarId: 'volere-piacere-cortesia' }],
    relatedGrammarIds: ['volere-piacere-cortesia', 'preposizioni-verbi'],
    questions: [
      { id: 'rd-a2-02-q1', prompt: { bn: 'সাক্ষাৎকার কয়টায় হবে?', en: 'What time is the interview?' }, options: ['৯:০০', '১০:০০', '১০:৩০', '১১:৩০'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ১০:৩০ — পাঠ্যাংশে বলা হয়েছে: «জনাব বেগম, শুক্রবার সকাল ১০:৩০-এ গারিবালদি স্ট্রিট ১৮-এ আমাদের অফিসে অ্যাসিস্ট্যান্ট ডিজাইনার পদের সাক্ষাৎকার নিশ্চিত করতে পেরে আমরা আনন্দিত।» (alle ore 10:30)।', en: '10:30 AM.' } },
      { id: 'rd-a2-02-q2', prompt: { bn: 'সাথে কী আনতে বলা হয়েছে?', en: 'What should be brought along?' }, options: ['ছবি ও পাসপোর্ট', 'আপডেট সিভি ও বৈধ পরিচয়পত্র', 'চুক্তিপত্র', 'রেফারেন্স'], answer: 1, explanation: { bn: 'সঠিক উত্তর: আপডেট সিভি ও বৈধ পরিচয়পত্র — পাঠ্যাংশে বলা হয়েছে: «অনুগ্রহ করে সিভির আপডেট কপি ও বৈধ পরিচয়পত্র সাথে আনবেন। পৌঁছাতে কোনো অসুবিধা হলে আমাদের লিখুন।» (copia aggiornata del curriculum e documento valido)।', en: 'Updated CV and valid ID.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-03', level: 'A2', kind: 'notice', titleIt: 'Avviso del condominio: lavori ascensore', title: { bn: 'ভবনের বিজ্ঞপ্তি: লিফট মেরামত', en: 'Building notice: lift maintenance' },
    paragraphs: [
      { it: 'Si informa tutti i condomini che giovedì 14 giugno l’ascensore resterà fermo dalle ore 9:00 alle ore 13:00 per manutenzione ordinaria.', tr: { bn: 'সকল বাসিন্দাকে জানানো যাচ্ছে যে সাধারণ রক্ষণাবেক্ষণের জন্য ১৪ই জুন বৃহস্পতিবার সকাল ৯:০০ থেকে দুপুর ১:০০ পর্যন্ত লিফট বন্ধ থাকবে।', en: 'Residents are informed that on Thursday 14 June the lift will be out of service from 9:00 AM to 1:00 PM for routine maintenance.' } },
      { it: 'Durante questa fascia oraria si prega di utilizzare le scale. Ci scusiamo per il disagio e ringraziamo per la collaborazione.', tr: { bn: 'এই সময়ে অনুগ্রহ করে সিঁড়ি ব্যবহার করবেন। সাময়িক অসুবিধার জন্য আমরা দুঃখিত ও সহযোগিতার জন্য ধন্যবাদ জানাই।', en: 'During these hours please use the stairs. We apologise for the inconvenience and thank you for your cooperation.' } },
    ],
    vocabHighlights: [{ it: 'manutenzione', tr: { bn: 'রক্ষণাবেক্ষণ', en: 'maintenance' } }, { it: 'fascia oraria', tr: { bn: 'সময়সীমা / স্লট', en: 'time window' } }],
    grammarHighlights: [{ excerpt: 'resterà fermo', note: { bn: 'futuro semplice দিয়ে আসন্ন ঘোষণা।', en: 'Notice uses future tense resterà.' }, grammarId: 'futuro' }],
    relatedGrammarIds: ['futuro', 'si-impersonale-a2'],
    questions: [
      { id: 'rd-a2-03-q1', prompt: { bn: 'লিফট কতক্ষণ বন্ধ থাকবে?', en: 'How long will the lift be stopped?' }, options: ['২ ঘণ্টা', '৩ ঘণ্টা', '৪ ঘণ্টা', 'সারাদিন'], answer: 2, explanation: { bn: 'সকাল ৯টা থেকে দুপুর ১টা = ৪ ঘণ্টা।', en: '9 AM to 1 PM = 4 hours.' } },
      { id: 'rd-a2-03-q2', prompt: { bn: 'ঐ সময়ে কী ব্যবহার করতে বলা হয়েছে?', en: 'What should residents use meanwhile?' }, options: ['অন্য লিফট', 'সিঁড়ি', 'ব্যালকনি', 'গ্যারেজ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সিঁড়ি — পাঠ্যাংশে বলা হয়েছে: «এই সময়ে অনুগ্রহ করে সিঁড়ি ব্যবহার করবেন। সাময়িক অসুবিধার জন্য আমরা দুঃখিত ও সহযোগিতার জন্য ধন্যবাদ জানাই।» (utilizzare le scale)।', en: 'The stairs.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-04', level: 'A2', kind: 'travel', titleIt: 'Cinque consigli per viaggiare in treno', title: { bn: 'ইতালিতে ট্রেন ভ্রমণের পাঁচটি টিপস', en: 'Five tips for Italian train travel' },
    paragraphs: [
      { it: 'Viaggiare in treno in Italia è spesso più comodo dell’auto, soprattutto tra le grandi città. Prima di salire su un treno regionale con biglietto cartaceo, ricordate sempre di convalidarlo alle macchinette verdi o gialle.', tr: { bn: 'ইতালিতে বড় শহরগুলোর মধ্যে গাড়ির চেয়ে ট্রেনে ভ্রমণ প্রায়ই বেশি আরামদায়ক। কাগজের টিকিট নিয়ে আঞ্চলিক ট্রেনে ওঠার আগে সবুজ বা হলুদ মেশিনে পাঞ্চ করতে মনে রাখবেন।', en: 'Travelling by train in Italy is often more comfortable than by car between major cities. Before boarding a regional train with a paper ticket, always remember to validate it at the green or yellow machines.' } },
      { it: 'Se invece comprate il biglietto sull’app ufficiale, non serve stampare nulla: basta mostrare il codice QR al controllore.', tr: { bn: 'আর অফিশিয়াল অ্যাপে টিকিট কিনলে কিছুই প্রিন্ট করতে হয় না: শুধু কন্ডাক্টরকে কিউআর কোড দেখালেই যথেষ্ট।', en: 'If instead you buy the ticket on the official app, nothing needs printing: just show the QR code to the inspector.' } },
    ],
    vocabHighlights: [{ it: 'biglietto cartaceo', tr: { bn: 'কাগজের টিকিট', en: 'paper ticket' } }, { it: 'controllore', tr: { bn: 'টিকিট পরীক্ষক', en: 'ticket inspector' } }],
    grammarHighlights: [{ excerpt: 'più comodo dell’auto', note: { bn: 'তুলনামূলক di + l’ = dell’।', en: 'Comparative preposition contracts with article.' }, grammarId: 'comparativi' }],
    relatedGrammarIds: ['comparativi', 'preposizioni-verbi'],
    questions: [
      { id: 'rd-a2-04-q1', prompt: { bn: 'কাগজের টিকিট থাকলে কখন পাঞ্চ করতে হয়?', en: 'When must paper regional tickets be validated?' }, options: ['নামার পর', 'ট্রেনে ওঠার আগে', 'কন্ডাক্টর এলে', 'সপ্তাহ শেষে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ট্রেনে ওঠার আগে — পাঠ্যাংশে বলা হয়েছে: «ইতালিতে বড় শহরগুলোর মধ্যে গাড়ির চেয়ে ট্রেনে ভ্রমণ প্রায়ই বেশি আরামদায়ক। কাগজের টিকিট নিয়ে আঞ্চলিক ট্রেনে ওঠার আগে সবুজ বা হলুদ মেশিনে পাঞ্চ করতে মনে রাখবেন।» (Prima di salire)।', en: 'Before boarding.' } },
      { id: 'rd-a2-04-q2', prompt: { bn: 'অ্যাপের টিকিট থাকলে কী দেখাতে হয়?', en: 'What do you show with an app ticket?' }, options: ['পাসপোর্ট', 'কিউআর কোড', 'রসিদ প্রিন্ট', 'স্লিপ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: কিউআর কোড — পাঠ্যাংশে বলা হয়েছে: «আর অফিশিয়াল অ্যাপে টিকিট কিনলে কিছুই প্রিন্ট করতে হয় না: শুধু কন্ডাক্টরকে কিউআর কোড দেখালেই যথেষ্ট।» (il codice QR)।', en: 'The QR code.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-05', level: 'A2', kind: 'story', titleIt: 'L’estate in campagna', title: { bn: 'গ্রামে গ্রীষ্মকালের স্মৃতি', en: 'Summer in the countryside' },
    storyId: 'st-a2-04',
    paragraphs: [
      { it: 'Quando ero piccolo, trascorrevo sempre il mese di luglio in campagna con i miei nonni. Ogni mattina aiutavo il nonno nell’orto.', tr: { bn: 'ছোটবেলায় প্রতি জুলাই মাসে আমি দাদা-দাদির কাছে গ্রামে কাটাতাম। প্রতিদিন সকালে দাদাকে সবজি বাগানে সাহায্য করতাম।', en: 'When I was little, I always spent July in the countryside with my grandparents and helped granddad in the vegetable garden.' } },
      { it: 'Un pomeriggio, mentre osservavamo gli uccelli, abbiamo visto un cavallo bianco correre sulla collina!', tr: { bn: 'এক বিকেলে পাখি দেখার সময় টিলার ওপর একটি সাদা ঘোড়া দৌড়াতে দেখলাম!', en: 'One afternoon while watching birds, we saw a white horse running on the hill!' } },
    ],
    vocabHighlights: [{ it: 'orto', tr: { bn: 'সবজি বাগান', en: 'vegetable garden' } }, { it: 'collina', tr: { bn: 'পাহাড়ি টিলা', en: 'hill' } }],
    grammarHighlights: [{ excerpt: 'mentre osservavamo… abbiamo visto', note: { bn: 'চলমান কাজ imperfetto ও আকস্মিক দেখা passato prossimo।', en: 'Imperfect background vs completed sighting.' }, grammarId: 'imperfetto-vs-passato' }],
    relatedGrammarIds: ['imperfetto', 'imperfetto-vs-passato'],
    questions: [
      { id: 'rd-a2-05-q1', prompt: { bn: 'দাদাকে সে কোথায় সাহায্য করত?', en: 'Where did he help granddad?' }, options: ['দোকানে', 'সবজি বাগানে', 'শহরে', 'রেলস্টেশনে'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সবজি বাগানে — পাঠ্যাংশে বলা হয়েছে: «ছোটবেলায় প্রতি জুলাই মাসে আমি দাদা-দাদির কাছে গ্রামে কাটাতাম। প্রতিদিন সকালে দাদাকে সবজি বাগানে সাহায্য করতাম।» (nell’orto)।', en: 'In the vegetable garden.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-06', level: 'A2', kind: 'message', titleIt: 'Messaggio sul gruppo dell’ufficio', title: { bn: 'অফিসের গ্রুপ মেসেজ', en: 'Office group chat update' },
    paragraphs: [
      { it: 'Ciao a tutti! La riunione di domani mattina è stata spostata dalle nove alle dieci e mezza perché il direttore arriverà in treno da Roma.', tr: { bn: 'সবাইকে হ্যালো! কাল সকালের মিটিং নয়টার বদলে সাড়ে দশটায় সরানো হয়েছে কারণ পরিচালক রোম থেকে ট্রেনে আসবেন।', en: 'Hi everyone! Tomorrow morning’s meeting has been moved from nine to 10:30 because the director is arriving by train from Rome.' } },
      { it: 'Nel frattempo controllate le slide della presentazione e mandatemi eventuali modifiche entro stasera. Grazie!', tr: { bn: 'এর ফাঁকে প্রেজেন্টেশনের স্লাইডগুলো দেখে নিন এবং কোনো পরিবর্তন থাকলে আজ সন্ধ্যার মধ্যে পাঠিয়ে দিন। ধন্যবাদ!', en: 'Meanwhile check the presentation slides and send me any edits by tonight. Thanks!' } },
    ],
    vocabHighlights: [{ it: 'nel frattempo', tr: { bn: 'ইতিমধ্যে / এর ফাঁকে', en: 'in the meantime' } }, { it: 'entro stasera', tr: { bn: 'আজ সন্ধ্যার মধ্যে', en: 'by tonight' } }],
    grammarHighlights: [{ excerpt: 'mandatemi', note: { bn: 'voi আদেশ + পরোক্ষ সর্বনাম mi।', en: 'Plural imperative + indirect pronoun mi.' }, grammarId: 'imperativo' }],
    relatedGrammarIds: ['imperativo', 'pronomi-indiretti'],
    questions: [
      { id: 'rd-a2-06-q1', prompt: { bn: 'মিটিং কয়টায় সরানো হয়েছে?', en: 'To what time was the meeting moved?' }, options: ['৯:০০', '১০:০০', '১০:৩০', '১১:০০'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ১০:৩০ — পাঠ্যাংশে বলা হয়েছে: «সবাইকে হ্যালো! কাল সকালের মিটিং নয়টার বদলে সাড়ে দশটায় সরানো হয়েছে কারণ পরিচালক রোম থেকে ট্রেনে আসবেন।» (alle dieci e mezza)।', en: '10:30.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-07', level: 'A2', kind: 'letter', titleIt: 'Una cartolina dalla Sicilia', title: { bn: 'সিসিলি থেকে একটি চিঠি/পোস্টকার্ড', en: 'A postcard from Sicily' },
    paragraphs: [
      { it: 'Carissimi genitori, vi scrivo da Catania dopo cinque giorni splendidi in Sicilia. Il mare qui è più caldo di quello del nord e la gente è gentilissima.', tr: { bn: 'প্রিয় মা-বাবা, সিসিলিতে দারুণ পাঁচ দিন কাটানোর পর কাতানিয়া থেকে লিখছি। এখানকার সমুদ্র উত্তরের চেয়ে উষ্ণ আর মানুষজন খুবই ভদ্র।', en: 'Dearest parents, I am writing from Catania after five wonderful days in Sicily. The sea here is warmer than in the north and people are super kind.' } },
      { it: 'Domani prenderemo il traghetto per visitare una piccola isola e torneremo a Milano domenica sera. Un abbraccio grande!', tr: { bn: 'কাল আমরা ছোট্ট একটি দ্বীপে যাওয়ার ফেরি ধরব এবং রবিবার সন্ধ্যায় মিলানে ফিরব। অনেক ভালোবাসা!', en: 'Tomorrow we will take the ferry to visit a small island and return to Milan Sunday evening. A big hug!' } },
    ],
    vocabHighlights: [{ it: 'traghetto', tr: { bn: 'ফেরি / নৌযান', en: 'ferry' } }, { it: 'un abbraccio', tr: { bn: 'আলিঙ্গন / ভালোবাসা', en: 'a big hug' } }],
    grammarHighlights: [{ excerpt: 'più caldo di quello del nord', note: { bn: 'tুলনা করতে quello + del ব্যবহার।', en: 'Pronoun quello stands for il mare in comparison.' }, grammarId: 'comparativi' }],
    relatedGrammarIds: ['comparativi', 'futuro'],
    questions: [
      { id: 'rd-a2-07-q1', prompt: { bn: 'তারা কবে মিলানে ফিরবে?', en: 'When will they return to Milan?' }, options: ['শুক্রবার', 'শনিবার', 'রবিবার সন্ধ্যায়', 'সোমবার'], answer: 2, explanation: { bn: 'সঠিক উত্তর: রবিবার সন্ধ্যায় — পাঠ্যাংশে বলা হয়েছে: «কাল আমরা ছোট্ট একটি দ্বীপে যাওয়ার ফেরি ধরব এবং রবিবার সন্ধ্যায় মিলানে ফিরব। অনেক ভালোবাসা!» (domenica sera)।', en: 'Sunday evening.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-08', level: 'A2', kind: 'article', titleIt: 'La raccolta differenziata in città', title: { bn: 'শহরে বর্জ্য পৃথকীকরণ ব্যবস্থা', en: 'Urban recycling habits' },
    paragraphs: [
      { it: 'In molte città italiane la raccolta differenziata è ormai un’abitudine quotidiana. Carta, vetro, plastica e organico hanno bidoni di colori diversi.', tr: { bn: 'ইতালির বহু শহরে বর্জ্য পৃথকীকরণ এখন দৈনন্দিন অভ্যাসে পরিণত হয়েছে। কাগজ, কাচ, প্লাস্টিক ও জৈব বর্জ্যের জন্য আলাদা রঙের ডাস্টবিন থাকে।', en: 'In many Italian cities waste sorting is now a daily habit. Paper, glass, plastic, and organic waste have differently coloured bins.' } },
      { it: 'Riciclare correttamente riduce l’inquinamento e aiuta tutto il quartiere a restare più pulito e ordinato.', tr: { bn: 'সঠিকভাবে পুনর্ব্যবহার করলে দূষণ কমে এবং পুরো পাড়া আরও পরিষ্কার ও গোছানো থাকে।', en: 'Recycling properly cuts pollution and helps the whole neighbourhood stay cleaner and tidier.' } },
    ],
    vocabHighlights: [{ it: 'abitudine quotidiana', tr: { bn: 'দৈনন্দিন অভ্যাস', en: 'daily habit' } }, { it: 'organico', tr: { bn: 'জৈব বর্জ্য', en: 'food/organic waste' } }],
    grammarHighlights: [{ excerpt: 'Riciclare correttamente', note: { bn: 'বিশেষণ corretto + mente = correttamente।', en: '-mente manner adverb.' }, grammarId: 'avverbi-a2' }],
    relatedGrammarIds: ['avverbi-a2', 'preposizioni-verbi'],
    questions: [
      { id: 'rd-a2-08-q1', prompt: { bn: 'সঠিক রিসাইক্লিং-এর প্রধান সুফল কী?', en: 'What is the main benefit mentioned?' }, options: ['বিদ্যুৎ সাশ্রয়', 'দূষণ কমে ও এলাকা পরিষ্কার থাকে', 'ভাড়া কমে', 'পানি সাশ্রয়'], answer: 1, explanation: { bn: 'সঠিক উত্তর: দূষণ কমে ও এলাকা পরিষ্কার থাকে — পাঠ্যাংশে বলা হয়েছে: «সঠিকভাবে পুনর্ব্যবহার করলে দূষণ কমে এবং পুরো পাড়া আরও পরিষ্কার ও গোছানো থাকে।» (riduce l’inquinamento e aiuta a restare più pulito)।', en: 'Cuts pollution and keeps areas clean.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-09', level: 'A2', kind: 'email', titleIt: 'Richiesta di informazioni per un corso', title: { bn: 'কোর্সের তথ্যের জন্য ইমেইল', en: 'Email asking about a course' },
    paragraphs: [
      { it: 'Buongiorno, mi chiamo Nadia e abito a Torino da otto mesi. Vorrei iscrivermi al vostro corso serale di livello A2 che inizia a ottobre.', tr: { bn: 'শুভ সকাল, আমার নাম নাদিয়া এবং আট মাস ধরে আমি তুরিনে থাকি। অক্টোবরে শুরু হওয়া আপনাদের A2 সান্ধ্য কোর্সে ভর্তি হতে চাই।', en: 'Good morning, my name is Nadia and I have lived in Turin for eight months. I would like to enrol in your evening A2 course starting in October.' } },
      { it: 'Potrebbe dirmi quali giorni ci sono le lezioni e quanto costa l’iscrizione completa? La ringrazio in anticipo!', tr: { bn: 'ক্লাস কোন কোন দিন হয় এবং সম্পূর্ণ ভর্তি ফি কত তা কি জানাবেন? অগ্রিম ধন্যবাদ!', en: 'Could you tell me which days the lessons run and how much full enrolment costs? Thank you in advance!' } },
    ],
    vocabHighlights: [{ it: 'corso serale', tr: { bn: 'সান্ধ্য কোর্স', en: 'evening course' } }, { it: 'in anticipo', tr: { bn: 'অগ্রিম / আগেভাগে', en: 'in advance' } }],
    grammarHighlights: [{ excerpt: 'abito a Torino da otto mesi', note: { bn: 'এখনো বসবাস করছে তাই presente + da।', en: 'Ongoing duration requires present + da.' }, grammarId: 'tempo' }],
    relatedGrammarIds: ['tempo', 'condizionale'],
    questions: [
      { id: 'rd-a2-09-q1', prompt: { bn: 'নাদিয়া কতদিন ধরে তুরিনে থাকে?', en: 'How long has Nadia lived in Turin?' }, options: ['৩ মাস', '৬ মাস', '৮ মাস', '১ বছর'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ৮ মাস — পাঠ্যাংশে বলা হয়েছে: «শুভ সকাল, আমার নাম নাদিয়া এবং আট মাস ধরে আমি তুরিনে থাকি। অক্টোবরে শুরু হওয়া আপনাদের A2 সান্ধ্য কোর্সে ভর্তি হতে চাই।» (da otto mesi)।', en: 'Eight months.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-10', level: 'A2', kind: 'story', titleIt: 'La lista della spesa perduta', title: { bn: 'হারানো বাজারের তালিকা (পাঠ)', en: 'The lost shopping list (Reader)' },
    storyId: 'st-a2-07',
    paragraphs: [
      { it: 'Stamattina ho scritto la lista della spesa, ma poi l’ho lasciata sul tavolo della cucina! Al supermercato ho cercato le zucchine fresche e le ho messe nel carrello.', tr: { bn: 'আজ সকালে বাজারের তালিকা লিখেছিলাম, কিন্তু রান্নাঘরের টেবিলে ফেলে এসেছি! সুপারমার্কেটে তাজা জুকিনি খুঁজে ট্রলিতে রাখলাম।', en: 'This morning I wrote the shopping list, then left it on the kitchen table! At the supermarket I picked fresh courgettes and put them in the trolley.' } },
      { it: 'Alla cassa ho chiamato mia moglie per chiedere dello zucchero: "Non preoccuparti, l’ho già comprato ieri!"', tr: { bn: 'ক্যাশ কাউন্টারে স্ত্রীকে ফোন দিলাম চিনির কথা জানতে: "চিন্তা কোরো না, ওটা গতকালই কিনেছি!"', en: 'At the till I called my wife about sugar: "Don’t worry, I already bought it yesterday!"' } },
    ],
    vocabHighlights: [{ it: 'l’ho lasciata', tr: { bn: 'ওটা (তালিকা) রেখে এসেছি', en: 'I left it' } }],
    grammarHighlights: [{ excerpt: 'le ho messe nel carrello', note: { bn: 'le (zucchine) → messe স্ত্রী বহুবচন মিল।', en: 'Direct pronoun agreement: le … messe.' }, grammarId: 'accordo-participio' }],
    relatedGrammarIds: ['pronomi-diretti', 'accordo-participio'],
    questions: [
      { id: 'rd-a2-10-q1', prompt: { bn: 'চিনি কবে কেনা হয়েছিল?', en: 'When had the sugar been bought?' }, options: ['আজ সকালে', 'গতকাল', 'গত সপ্তাহে', 'কেনাই হয়নি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: গতকাল — পাঠ্যাংশে বলা হয়েছে: «ক্যাশ কাউন্টারে স্ত্রীকে ফোন দিলাম চিনির কথা জানতে: "চিন্তা কোরো না, ওটা গতকালই কিনেছি!"» (l’ho già comprato ieri)।', en: 'Yesterday.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-11', level: 'A2', kind: 'notice', titleIt: 'Orari dell’ufficio postale', title: { bn: 'ডাকঘরের সেবা ও সময়সূচি', en: 'Post office services & hours' },
    paragraphs: [
      { it: 'L’ufficio postale centrale è aperto dal lunedì al venerdì dalle 8:20 alle 19:05 e il sabato fino alle 12:35.', tr: { bn: 'কেন্দ্রীয় ডাকঘর সোমবার থেকে শুক্রবার সকাল ৮:২০ থেকে সন্ধ্যা ১৯:০৫ পর্যন্ত এবং শনিবার ১২:৩৫ পর্যন্ত খোলা থাকে।', en: 'The central post office is open Monday–Friday 8:20 AM–7:05 PM and Saturday until 12:35 PM.' } },
      { it: 'Per evitare la fila allo sportello si consiglia di prenotare il biglietto digitale tramite l’applicazione ufficiale.', tr: { bn: 'কাউন্টারের লাইন এড়াতে অফিশিয়াল অ্যাপের মাধ্যমে ডিজিটাল টোকেন বুক করার পরামর্শ দেওয়া হচ্ছে।', en: 'To avoid queueing at the counter, booking a digital ticket via the official app is recommended.' } },
    ],
    vocabHighlights: [{ it: 'si consiglia di', tr: { bn: 'পরামর্শ দেওয়া হয়', en: 'it is advised to' } }, { it: 'tramite', tr: { bn: 'মাধ্যমে', en: 'via / through' } }],
    grammarHighlights: [{ excerpt: 'si consiglia di prenotare', note: { bn: 'নৈর্ব্যক্তিক si + di + ইনফিনিটিভ।', en: 'Impersonal recommendation.' }, grammarId: 'si-impersonale-a2' }],
    relatedGrammarIds: ['si-impersonale-a2', 'ora-data'],
    questions: [
      { id: 'rd-a2-11-q1', prompt: { bn: 'শনিবার ডাকঘর কয়টা পর্যন্ত খোলা থাকে?', en: 'Until what time is it open on Saturday?' }, options: ['১২:০০', '১২:৩৫', '১৪:০০', '১৯:০৫'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ১২:৩৫ — পাঠ্যাংশে বলা হয়েছে: «কেন্দ্রীয় ডাকঘর সোমবার থেকে শুক্রবার সকাল ৮:২০ থেকে সন্ধ্যা ১৯:০৫ পর্যন্ত এবং শনিবার ১২:৩৫ পর্যন্ত খোলা থাকে।» (fino alle 12:35)।', en: 'Until 12:35.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-12', level: 'A2', kind: 'article', titleIt: 'Il mercato rionale del sabato', title: { bn: 'শনিবারের সাপ্তাহিক বাজার', en: 'Saturday neighbourhood markets' },
    paragraphs: [
      { it: 'In ogni quartiere italiano, almeno una mattina a settimana le strade si riempiono di banchi colorati. Non si compra solo cibo fresco: si trovano anche vestiti, fiori e piccoli oggetti per la casa.', tr: { bn: 'ইতালির প্রতিটি পাড়ায় সপ্তাহে অন্তত একদিন সকালে রাস্তা রঙিন স্টলে ভরে ওঠে। এখানে শুধু তাজা খাবার নয়, পোশাক, ফুল ও ঘরের ছোটখাটো জিনিসও পাওয়া যায়।', en: 'In every Italian neighbourhood, at least one morning a week streets fill with colourful stalls. You buy not only fresh food, but clothes, flowers, and homeware too.' } },
      { it: 'È un luogo sociale dove i vicini si incontrano, scambiano due parole e scelgono insieme i prodotti migliori di stagione.', tr: { bn: 'এটি একটি সামাজিক মিলনস্থল যেখানে প্রতিবেশীদের দেখা হয়, কুশল বিনিময় হয় এবং সবাই মিলে সেরা মৌসুমি পণ্য বেছে নেয়।', en: 'It is a social spot where neighbours meet, chat briefly, and choose the best seasonal produce together.' } },
    ],
    vocabHighlights: [{ it: 'scambiano due parole', tr: { bn: 'দু-একটি কথা বিনিময় করে', en: 'have a quick chat' } }],
    grammarHighlights: [{ excerpt: 'i prodotti migliori', note: { bn: 'buono-র অনিয়মিত তুলনা বহুবচন: migliori।', en: 'Plural of migliore is migliori.' }, grammarId: 'comparativi-irregolari' }],
    relatedGrammarIds: ['comparativi-irregolari', 'si-impersonale-a2'],
    questions: [
      { id: 'rd-a2-12-q1', prompt: { bn: 'সাপ্তাহিক বাজারে খাবারের বাইরে আর কী পাওয়া যায়?', en: 'What else besides food is sold at the market?' }, options: ['গাড়ি', 'পোশাক, ফুল ও ঘরের জিনিস', 'কম্পিউটার', 'ওষুধ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: পোশাক, ফুল ও ঘরের জিনিস — পাঠ্যাংশে বলা হয়েছে: «ইতালির প্রতিটি পাড়ায় সপ্তাহে অন্তত একদিন সকালে রাস্তা রঙিন স্টলে ভরে ওঠে। এখানে শুধু তাজা খাবার নয়, পোশাক, ফুল ও ঘরের ছোটখাটো জিনিসও পাওয়া যায়।» (vestiti, fiori e piccoli oggetti per la casa)।', en: 'Clothes, flowers, and homeware.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-13', level: 'A2', kind: 'story', titleIt: 'Una giornata in comune', title: { bn: 'পৌরসভায় কাজ (পাঠ)', en: 'Town hall visit (Reader)' },
    storyId: 'st-a2-13',
    paragraphs: [
      { it: 'Stamattina sono andato al comune per chiedere il cambio di residenza. Nell’attesa ho controllato tutti i documenti nella mia cartella.', tr: { bn: 'আজ সকালে ঠিকানা বদলের জন্য পৌরসভায় গিয়েছিলাম। অপেক্ষার সময় ফাইলের সব কাগজ পরীক্ষা করেছি।', en: 'This morning I went to the town hall for a residence change and checked all papers in my folder.' } },
      { it: 'L’impiegata allo sportello tre è stata chiarissima e mi ha consegnato la ricevuta ufficiale.', tr: { bn: 'তিন নম্বর কাউন্টারের কর্মকর্তা খুব স্পষ্ট ছিলেন এবং আনুষ্ঠানিক রসিদ দিয়েছেন।', en: 'The clerk at counter 3 was crystal clear and gave me the official receipt.' } },
    ],
    vocabHighlights: [{ it: 'cambio di residenza', tr: { bn: 'বসবাসের ঠিকানা পরিবর্তন', en: 'change of residence' } }],
    grammarHighlights: [{ excerpt: 'allo sportello tre', note: { bn: 'a + lo = allo (sp-র আগে lo)।', en: 'a + lo contracts to allo.' }, grammarId: 'preposizioni-articolate' }],
    relatedGrammarIds: ['preposizioni-articolate', 'passato-essere'],
    questions: [
      { id: 'rd-a2-13-q1', prompt: { bn: 'কত নম্বর কাউন্টারে কাজ হয়েছে?', en: 'Which counter processed the request?' }, options: ['১', '২', '৩', '৫'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ৩ — পাঠ্যাংশে বলা হয়েছে: «তিন নম্বর কাউন্টারের কর্মকর্তা খুব স্পষ্ট ছিলেন এবং আনুষ্ঠানিক রসিদ দিয়েছেন।» (allo sportello tre)।', en: 'Counter 3.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-14', level: 'A2', kind: 'dialogue', titleIt: 'Chiedere un rimborso in negozio', title: { bn: 'দোকানে টাকা ফেরত চাওয়া', en: 'Asking for a store refund' },
    paragraphs: [
      { it: 'Cliente: "Buongiorno, ho comprato queste cuffie due giorni fa ma non funzionano bene. Avrei bisogno del rimborso."', tr: { bn: 'গ্রাহক: "শুভ সকাল, দু-দিন আগে এই হেডফোন কিনেছিলাম কিন্তু ভালো কাজ করছে না। টাকা ফেরত দরকার ছিল।"', en: 'Customer: "Good morning, I bought these headphones two days ago yet they don’t work well. I would need a refund."' } },
      { it: 'Commesso: "Nessun problema! Se ha lo scontrino originale e la scatola intatta, possiamo restituirle subito l’importo sulla carta."', tr: { bn: 'কর্মী: "কোনো সমস্যা নেই! আসল রসিদ ও অক্ষত বাক্স থাকলে সাথে সাথেই আপনার কার্ডে টাকা ফেরত দিয়ে দিতে পারি।"', en: 'Clerk: "No problem! With the original receipt and intact box, we can refund the amount straight back to your card."' } },
    ],
    vocabHighlights: [{ it: 'scatola intatta', tr: { bn: 'অক্ষত বাক্স', en: 'intact box' } }, { it: 'importo', tr: { bn: 'মোট টাকা / পরিমাণ', en: 'amount' } }],
    grammarHighlights: [{ excerpt: 'restituirle subito', note: { bn: 'ইনফিনিটিভ + আনুষ্ঠানিক Le = আপনাকে ফেরত দিতে।', en: 'Formal indirect pronoun Le attached to infinitive.' }, grammarId: 'volere-piacere-cortesia' }],
    relatedGrammarIds: ['volere-piacere-cortesia', 'condizionale'],
    questions: [
      { id: 'rd-a2-14-q1', prompt: { bn: 'টাকা ফেরতের জন্য কী কী লাগবে?', en: 'What is needed for the refund?' }, options: ['পাসপোর্ট', 'আসল রসিদ ও অক্ষত বাক্স', 'ওয়ারেন্টি কার্ড', 'মেইল'], answer: 1, explanation: { bn: 'সঠিক উত্তর: আসল রসিদ ও অক্ষত বাক্স — পাঠ্যাংশে বলা হয়েছে: «কর্মী: "কোনো সমস্যা নেই! আসল রসিদ ও অক্ষত বাক্স থাকলে সাথে সাথেই আপনার কার্ডে টাকা ফেরত দিয়ে দিতে পারি।"» (scontrino originale e scatola intatta)।', en: 'Original receipt and intact box.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-15', level: 'A2', kind: 'story', titleIt: 'La prima volta a teatro', title: { bn: 'থিয়েটারে প্রথমবার (পাঠ)', en: 'First time at the theatre (Reader)' },
    storyId: 'st-a2-28',
    paragraphs: [
      { it: 'Ieri sera sono andato a teatro per la prima volta. L’edificio risale al diciannovesimo secolo e i nostri posti erano alla quarta fila.', tr: { bn: 'গতকাল সন্ধ্যায় প্রথমবার থিয়েটারে গিয়েছিলাম। ভবনটি উনিশ শতকের এবং আমাদের আসন চতুর্থ সারিতে ছিল।', en: 'Last night I went to the theatre for the first time. The 19th-century hall was lit up and our seats were in row 4.' } },
      { it: 'Alla fine del terzo atto tutto il pubblico ha applaudito per cinque minuti!', tr: { bn: 'তৃতীয় অঙ্কের শেষে সব দর্শক পাঁচ মিনিট করতালি দিয়েছে!', en: 'At the end of the third act the whole audience clapped for five minutes!' } },
    ],
    vocabHighlights: [{ it: 'terzo atto', tr: { bn: 'তৃতীয় অঙ্ক', en: 'third act' } }],
    grammarHighlights: [{ excerpt: 'al diciannovesimo secolo', note: { bn: '১০-এর বেশি সংখ্যায় -esimo যোগ হয়।', en: 'Ordinals 11+ end in -esimo.' }, grammarId: 'numerali-ordinali' }],
    relatedGrammarIds: ['numerali-ordinali', 'passato-essere'],
    questions: [
      { id: 'rd-a2-15-q1', prompt: { bn: 'ভবনটি কোন শতকের?', en: 'Which century is the theatre from?' }, options: ['১৭শ', '১৮শ', '১৯শ', '২০শ'], answer: 2, explanation: { bn: 'diciannovesimo secolo = উনিশ শতক।', en: '19th century.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-16', level: 'A2', kind: 'email', titleIt: 'Invito alla festa di laurea', title: { bn: 'গ্র্যাজুয়েশন পার্টির আমন্ত্রণ', en: 'Graduation party invitation' },
    paragraphs: [
      { it: 'Ciao amici! Finalmente venerdì prossimo discuterò la mia tesi in architettura alle quattro del pomeriggio.', tr: { bn: 'হ্যালো বন্ধুরা! অবশেষে আগামী শুক্রবার বিকেল চারটায় স্থাপত্যবিদ্যায় আমার থিসিস উপস্থাপন করব।', en: 'Hi friends! Finally next Friday at 4 PM I will defend my architecture thesis.' } },
      { it: 'Per festeggiare insieme, vi aspetto dalle sette e mezza al ristorante "Da Piero" vicino al ponte vecchio. Fatemi sapere se riuscite a venire!', tr: { bn: 'একসাথে উদযাপন করতে পুরনো সেতুর কাছে "দা পিয়েরো" রেস্টুরেন্টে সাড়ে সাতটা থেকে আপনাদের অপেক্ষায় থাকব। আসতে পারবেন কিনা জানিও!', en: 'To celebrate together, I expect you from 7:30 at "Da Piero" near the old bridge. Let me know if you can make it!' } },
    ],
    vocabHighlights: [{ it: 'discuterò la tesi', tr: { bn: 'থিসিস উপস্থাপন করব', en: 'I will defend my thesis' } }],
    grammarHighlights: [{ excerpt: 'riuscita / riuscite a venire', note: { bn: 'riuscire + a + ইনফিনিটিভ।', en: 'riuscire takes preposition a.' }, grammarId: 'preposizioni-verbi' }],
    relatedGrammarIds: ['preposizioni-verbi', 'futuro'],
    questions: [
      { id: 'rd-a2-16-q1', prompt: { bn: 'পার্টি কয়টায় শুরু হবে?', en: 'What time does the dinner celebration start?' }, options: ['৪:০০', '৬:৩০', '৭:৩০', '৯:০০'], answer: 2, explanation: { bn: 'dalle sette e mezza = ৭:৩০।', en: 'From 7:30.' } },
    ],
  }),
];
