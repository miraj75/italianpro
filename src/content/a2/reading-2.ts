import type { ReadingPassage } from '../academyTypes';
import { buildReading } from '../builders';

export const A2_READING_2: ReadingPassage[] = [
  buildReading({
    id: 'rd-a2-17', level: 'A2', kind: 'article', titleIt: 'La colazione italiana al bar', title: { bn: 'ইতালীয় ক্যাফেতে সকালের নাস্তা', en: 'Breakfast culture at an Italian bar' },
    paragraphs: [
      { it: 'In Italia tantissime persone fanno colazione al bar prima di andare in ufficio o all’università. Di solito prendono un cappuccino o un espresso insieme a un cornetto dolce.', tr: { bn: 'ইতালিতে অফিস বা বিশ্ববিদ্যালয়ে যাওয়ার আগে বহু মানুষ ক্যাফেতে নাস্তা করে। সাধারণত তারা মিষ্টি করনেত্তোর সাথে ক্যাপুচিনো বা এসপ্রেসো নেয়।', en: 'In Italy lots of people have breakfast at a café before heading to the office or university, usually taking a cappuccino or espresso with a sweet pastry.' } },
      { it: 'Ricordate una curiosità: in piedi al bancone il caffè costa spesso meno che seduti al tavolo!', tr: { bn: 'একটি মজার তথ্য মনে রাখবেন: কাউন্টারে দাঁড়িয়ে খেলে কফির দাম টেবিলে বসে খাওয়ার চেয়ে প্রায়ই কম হয়!', en: 'Remember one detail: standing at the counter, coffee often costs less than sitting at a table!' } },
    ],
    vocabHighlights: [{ it: 'in piedi al bancone', tr: { bn: 'কাউন্টারে দাঁড়িয়ে', en: 'standing at the bar counter' } }],
    grammarHighlights: [{ excerpt: 'costa spesso meno che seduti', note: { bn: 'দুটি অবস্থার তুলনায় meno… che।', en: 'Compare conditions with che.' }, grammarId: 'comparativi' }],
    relatedGrammarIds: ['comparativi', 'avverbi-a2'],
    questions: [
      { id: 'rd-a2-17-q1', prompt: { bn: 'ক্যাফেতে কফির দাম কখন কম হয়?', en: 'When is coffee cheaper at an Italian café?' }, options: ['রাতে', 'কাউন্টারে দাঁড়িয়ে খেলে', 'বাইরে বসলে', 'সাপ্তাহিক ছুটিতে'], answer: 1, explanation: { bn: 'in piedi al bancone।', en: 'Standing at the counter.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-18', level: 'A2', kind: 'story', titleIt: 'L’incontro in biblioteca', title: { bn: 'লাইব্রেরিতে দেখা (পাঠ)', en: 'Library reunion (Reader)' },
    storyId: 'st-a2-21',
    paragraphs: [
      { it: 'Mercoledì pomeriggio pioveva leggermente e io stavo leggendo un articolo per la mia tesi. All’improvviso qualcuno mi ha toccato la spalla: era Tariq!', tr: { bn: 'বুধবার বিকেলে হালকা বৃষ্টি হচ্ছিল এবং আমি থিসিসের জন্য প্রবন্ধ পড়ছিলাম। হঠাৎ কেউ কাঁধে হাত রাখল: তিনি তারিক!', en: 'Wednesday afternoon it drizzled while I read a thesis article. Suddenly someone tapped my shoulder: it was Tariq!' } },
      { it: 'Siamo usciti subito a prendere un caffè e abbiamo parlato per un’ora della nostra amicizia.', tr: { bn: 'আমরা সাথে সাথে কফি খেতে বের হলাম এবং এক ঘণ্টা আমাদের বন্ধুত্ব নিয়ে গল্প করলাম।', en: 'We immediately stepped out for coffee and chatted for an hour about our friendship.' } },
    ],
    vocabHighlights: [{ it: 'leggermente', tr: { bn: 'হালকাভাবে', en: 'lightly' } }],
    grammarHighlights: [{ excerpt: 'stavo leggendo', note: { bn: 'অতীতে চলমান কাজে stare (imperfetto) + gerundio।', en: 'Past continuous uses imperfetto of stare + gerund.' }, grammarId: 'gerundio' }],
    relatedGrammarIds: ['gerundio', 'imperfetto-vs-passato'],
    questions: [
      { id: 'rd-a2-18-q1', prompt: { bn: 'দেখার আগে সে লাইব্রেরিতে কী করছিল?', en: 'What was he doing in the library?' }, options: ['ঘুমাচ্ছিল', 'থিসিসের প্রবন্ধ পড়ছিল', 'ফোন করছিল', 'ইমেইল লিখছিল'], answer: 1, explanation: { bn: 'stavo leggendo un articolo per la mia tesi।', en: 'Reading a thesis article.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-19', level: 'A2', kind: 'notice', titleIt: 'Documenti per la tessera sanitaria', title: { bn: 'স্বাস্থ্য কার্ডের (Tessera Sanitaria) প্রয়োজনীয় নথি', en: 'Documents for the Italian health card' },
    paragraphs: [
      { it: 'Per richiedere la tessera sanitaria presso l’ufficio competente, è necessario presentare il passaporto, il codice fiscale e il permesso di soggiorno valido (oppure la ricevuta della posta).', tr: { bn: 'সংশ্লিষ্ট অফিসে স্বাস্থ্য কার্ডের আবেদন করতে পাসপোর্ট, ট্যাক্স কোড এবং বৈধ রেসিডেন্স পারমিট (অথবা ডাকঘরের রসিদ) জমা দিতে হবে।', en: 'To apply for a health card at the local office, you must present your passport, tax code, and valid residence permit (or postal receipt).' } },
      { it: 'La tessera arriverà gratuitamente per posta al domicilio indicato entro alcune settimane.', tr: { bn: 'কয়েক সপ্তাহের মধ্যে উল্লিখিত ঠিকানায় ডাকযোগে বিনামূল্যে কার্ডটি পৌঁছে যাবে।', en: 'The card will arrive free by post at the indicated address within a few weeks.' } },
    ],
    vocabHighlights: [{ it: 'gratuitamente', tr: { bn: 'বিনামূল্যে', en: 'free of charge' } }, { it: 'domicilio', tr: { bn: 'আবাসিক ঠিকানা', en: 'residence address' } }],
    grammarHighlights: [{ excerpt: 'alcune settimane', note: { bn: 'alcune + স্ত্রীলিঙ্গ বহুবচন বিশেষ্য।', en: 'alcune agrees feminine plural.' }, grammarId: 'indefiniti-a2' }],
    relatedGrammarIds: ['indefiniti-a2', 'futuro'],
    questions: [
      { id: 'rd-a2-19-q1', prompt: { bn: 'কার্ডটি কীভাবে পৌঁছাবে?', en: 'How will the health card arrive?' }, options: ['নিজে গিয়ে আনতে হবে', 'ডাকযোগে ঠিকানায় আসবে', 'ইমেইলে আসবে', 'হাসপাতালে দেবে'], answer: 1, explanation: { bn: 'per posta al domicilio।', en: 'By post.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-20', level: 'A2', kind: 'message', titleIt: 'Messaggio di scuse per il ritardo', title: { bn: 'দেরির জন্য ক্ষমা চেয়ে মেসেজ', en: 'Apology text for running late' },
    paragraphs: [
      { it: 'Ciao Marco! Scusa tantissimo, stavo per uscire di casa alle sei ma ho perso le chiavi e ho dovuto cercarle dappertutto.', tr: { bn: 'হ্যালো মার্কো! খুব দুঃখিত, ছয়টায় বাড়ি থেকে বের হতে যাচ্ছিলাম কিন্তু চাবি হারিয়ে ফেলেছি আর চারদিকে খুঁজতে হয়েছে।', en: 'Hi Marco! So sorry, I was about to leave home at six yet lost my keys and had to look everywhere for them.' } },
      { it: 'Adesso sono sull’autobus e arrivo fra quindici minuti davanti al cinema. Inizia pure a prendere i biglietti!', tr: { bn: 'এখন আমি বাসে আছি আর পনেরো মিনিটের মধ্যে সিনেমা হলের সামনে পৌঁছাব। তুমি টিকিট কেটে ফেলো!', en: 'Now I am on the bus and arrive in 15 minutes outside the cinema. Go ahead and get the tickets!' } },
    ],
    vocabHighlights: [{ it: 'dappertutto', tr: { bn: 'সব জায়গায় / চারদিকে', en: 'everywhere' } }],
    grammarHighlights: [{ excerpt: 'ho dovuto cercarle', note: { bn: 'অতীত মডাল ho dovuto + ইনফিনিটিভ ও সর্বনাম le।', en: 'Past modal + infinitive with attached pronoun.' }, grammarId: 'modali-passato' }],
    relatedGrammarIds: ['stare-per', 'modali-passato'],
    questions: [
      { id: 'rd-a2-20-q1', prompt: { bn: 'দেরি হওয়ার কারণ কী?', en: 'Why is the sender late?' }, options: ['যানজট', 'চাবি হারিয়ে গেছে', 'বৃষ্টি', 'অসুস্থতা'], answer: 1, explanation: { bn: 'ho perso le chiavi।', en: 'Lost keys.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-21', level: 'A2', kind: 'story', titleIt: 'La maratona della burocrazia', title: { bn: 'দাপ্তরিক কাজের দিন (পাঠ)', en: 'Paperwork marathon (Reader)' },
    storyId: 'st-a2-27',
    paragraphs: [
      { it: 'Stamattina dovevo fare tre documenti in un solo giorno. Alle dieci pensavo: "Non ce la faccio! Ci vogliono almeno due ore solo alla posta."', tr: { bn: 'আজ সকালে একদিনে তিনটি নথির কাজ করতে হতো। দশটায় ভাবলাম: "আমি পারব না! শুধু ডাকঘরেই অন্তত দুই ঘণ্টা লাগবে।"', en: 'This morning I had three errands in one day and thought: "I won’t make it! Just the post office takes two hours."' } },
      { it: 'Invece la fila è andata velocissima e alle dodici e mezza avevo già tutte le ricevute!', tr: { bn: 'কিন্তু লাইন খুব দ্রুত এগোল এবং সাড়ে বারোটায় সব রসিদ পেয়ে গেলাম!', en: 'Instead the queue went fast and by 12:30 I had all the receipts!' } },
    ],
    vocabHighlights: [{ it: 'ce la faccio', tr: { bn: 'আমি সামলাতে পারব', en: 'I can manage' } }],
    grammarHighlights: [{ excerpt: 'Ci vogliono almeno due ore', note: { bn: 'বহুবচন সময়ে ci vogliono।', en: 'Plural duration takes ci vogliono.' }, grammarId: 'verbi-pronominali-a2' }],
    relatedGrammarIds: ['verbi-pronominali-a2', 'tempo'],
    questions: [
      { id: 'rd-a2-21-q1', prompt: { bn: 'সব কাজ কখন শেষ হয়ে গিয়েছিল?', en: 'What time was everything finished?' }, options: ['১১:৩০', '১২:০০', '১২:৩০', '১৪:০০'], answer: 2, explanation: { bn: 'alle dodici e mezza।', en: 'At 12:30.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-22', level: 'A2', kind: 'travel', titleIt: 'Scoprire Torino a piedi', title: { bn: 'পায়ে হেঁটে তুরিন দেখা', en: 'Discovering Turin on foot' },
    paragraphs: [
      { it: 'Torino è una città elegante che si visita molto facilmente a piedi grazie ai suoi lunghi portici coperti: anche quando piove, si può passeggiare comodamente senza bagnarsi!', tr: { bn: 'তুরিন একটি চমৎকার শহর যা এর দীর্ঘ আচ্ছাদিত বারান্দার (portici) কারণে পায়ে হেঁটে খুব সহজে ঘোরা যায়: বৃষ্টি হলেও না ভিজেই আরামে হাঁটা যায়!', en: 'Turin is an elegant city easily explored on foot thanks to its long covered arcades: even in rain, you can stroll comfortably without getting wet!' } },
      { it: 'Tra Piazza Castello e il fiume Po ci sono storici caffè, musei importanti e librerie antiche.', tr: { bn: 'পিয়াজ্জা কাস্তেল্লো ও পো নদীর মাঝে ঐতিহাসিক ক্যাফে, গুরুত্বপূর্ণ জাদুঘর ও প্রাচীন বইয়ের দোকান রয়েছে।', en: 'Between Piazza Castello and the Po river lie historic cafés, major museums, and old bookshops.' } },
    ],
    vocabHighlights: [{ it: 'portici coperti', tr: { bn: 'আচ্ছাদিত বারান্দা পথ', en: 'covered arcades' } }, { it: 'senza bagnarsi', tr: { bn: 'না ভিজে', en: 'without getting wet' } }],
    grammarHighlights: [{ excerpt: 'facilmente / comodamente', note: { bn: 'দুটো ধরণসূচক ক্রিয়াবিশেষণ।', en: 'Two manner adverbs in -mente.' }, grammarId: 'avverbi-a2' }],
    relatedGrammarIds: ['avverbi-a2', 'si-impersonale-a2'],
    questions: [
      { id: 'rd-a2-22-q1', prompt: { bn: 'তুরিনে বৃষ্টিতেও কেন সহজে হাঁটা যায়?', en: 'Why is walking comfortable in Turin even when it rains?' }, options: ['বড় ছাতা দেয়', 'দীর্ঘ আচ্ছাদিত বারান্দার (portici) জন্য', 'ভূগর্ভস্থ রাস্তা', 'বৃষ্টি কম হয়'], answer: 1, explanation: { bn: 'grazie ai suoi lunghi portici coperti।', en: 'Covered arcades.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-23', level: 'A2', kind: 'letter', titleIt: 'Lettera al proprietario di casa', title: { bn: 'বাসার মালিককে চিঠি', en: 'Letter to the landlord' },
    paragraphs: [
      { it: 'Gentile Signor Bianchi, Le scrivo per confermare che dal primo ottobre lasceremo l’appartamento di via Dante, come previsto dal contratto.', tr: { bn: 'জনাব বিয়ানকি, চুক্তি অনুযায়ী আগামী ১লা অক্টোবর থেকে আমরা ভিয়া দান্তের অ্যাপার্টমেন্টটি ছেড়ে দিচ্ছি তা নিশ্চিত করতে লিখছি।', en: 'Dear Mr Bianchi, I am writing to confirm that from 1 October we will vacate the Via Dante flat, as stated in the contract.' } },
      { it: 'La casa è stata sempre tenuta con cura e ogni bolletta è già stata pagata. Restiamo disponibili la prossima settimana per restituire le chiavi.', tr: { bn: 'বাসাটি সবসময় যত্নে রাখা হয়েছে এবং সব বিল ইতিমধ্যে পরিশোধ করা হয়েছে। চাবি ফেরত দেওয়ার জন্য পরের সপ্তাহে আমরা সময় দিতে পারব।', en: 'The flat has always been kept carefully and all bills have been paid. We are available next week to return the keys.' } },
    ],
    vocabHighlights: [{ it: 'come previsto', tr: { bn: 'পূর্বনির্ধারিত অনুযায়ী', en: 'as foreseen' } }, { it: 'tenuta con cura', tr: { bn: 'যত্নে রাখা হয়েছে', en: 'kept with care' } }],
    grammarHighlights: [{ excerpt: 'dal primo ottobre', note: { bn: 'মাসের ১ তারিখে ক্রমবাচক primo বসে।', en: '1st of the month uses ordinal primo.' }, grammarId: 'numerali-ordinali' }],
    relatedGrammarIds: ['numerali-ordinali', 'preposizioni-articolate'],
    questions: [
      { id: 'rd-a2-23-q1', prompt: { bn: 'ভাড়াটেরা কবে ফ্ল্যাট ছাড়ছে?', en: 'When are the tenants leaving the flat?' }, options: ['১লা সেপ্টেম্বর', '১লা অক্টোবর', '১৫ই অক্টোবর', '১লা নভেম্বর'], answer: 1, explanation: { bn: 'dal primo ottobre।', en: '1 October.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-24', level: 'A2', kind: 'story', titleIt: 'Una sera silenziosa in ufficio', title: { bn: 'অফিসে নীরব সন্ধ্যা (পাঠ)', en: 'Quiet evening at the office (Reader)' },
    storyId: 'st-a2-24',
    paragraphs: [
      { it: 'Venerdì alle sette di sera non c’era più nessuno in ufficio. Io sono rimasto qualche minuto per non lasciare niente in sospeso.', tr: { bn: 'শুক্রবার সন্ধ্যা সাতটায় অফিসে আর কেউ ছিল না। কোনো কাজ বাকি না রাখতে আমি কয়েক মিনিট থেকে গেলাম।', en: 'On Friday at 7 PM nobody was left at work, so I stayed a few minutes to leave nothing pending.' } },
      { it: 'Prima di chiudere la porta ho spento tutte le luci: non avevo dimenticato nessun documento.', tr: { bn: 'দরজা বন্ধ করার আগে সব আলো নিভিয়ে দিলাম: কোনো নথি ভুলে ফেলে আসিনি।', en: 'Before locking up I turned off all lights and forgot no documents.' } },
    ],
    vocabHighlights: [{ it: 'nessun documento', tr: { bn: 'কোনো নথিই না', en: 'no document' } }],
    grammarHighlights: [{ excerpt: 'non c’era più nessuno', note: { bn: 'ক্রিয়ার আগে non + পরে più nessuno।', en: 'Double negative frame.' }, grammarId: 'doppia-negazione' }],
    relatedGrammarIds: ['doppia-negazione', 'indefiniti-a2'],
    questions: [
      { id: 'rd-a2-24-q1', prompt: { bn: 'কেন সে আরও কয়েক মিনিট অফিসে থাকল?', en: 'Why did he stay a few extra minutes?' }, options: ['বসের অপেক্ষায়', 'কোনো কাজ বাকি না রাখতে', 'বৃষ্টির কারণে', 'চাবি খুঁজতে'], answer: 1, explanation: { bn: 'per non lasciare niente in sospeso।', en: 'To leave nothing pending.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-25', level: 'A2', kind: 'article', titleIt: 'Imparare una lingua con le serie TV', title: { bn: 'টিভি সিরিজ ও পডকাস্ট দিয়ে ভাষা শেখা', en: 'Learning Italian with podcasts & series' },
    paragraphs: [
      { it: 'Molti studenti stranieri migliorano la comprensione ascoltando dieci minuti di podcast italiani ogni mattina mentre vanno all’università.', tr: { bn: 'অনেক বিদেশি ছাত্র প্রতিদিন সকালে বিশ্ববিদ্যালয়ে যাওয়ার সময় দশ মিনিট ইতালিয়ান পডকাস্ট শুনে শোনার দক্ষতা বাড়ায়।', en: 'Many international students improve comprehension by listening to ten minutes of Italian podcasts each morning while commuting to university.' } },
      { it: 'All’inizio è utile attivare i sottotitoli in italiano, poi con un po’ di pratica si capisce chiaramente anche senza leggere.', tr: { bn: 'শুরুতে ইতালিয়ান সাবটাইটেল চালু রাখা উপকারী, তারপর একটু অনুশীলন করলে না পড়েও স্পষ্টভাবে বোঝা যায়।', en: 'At first turning on Italian subtitles helps; with a bit of practice you understand clearly without reading.' } },
    ],
    vocabHighlights: [{ it: 'sottotitoli', tr: { bn: 'সাবটাইটেল', en: 'subtitles' } }, { it: 'comprensione', tr: { bn: 'বোঝার দক্ষতা', en: 'comprehension' } }],
    grammarHighlights: [{ excerpt: 'ascoltando dieci minuti', note: { bn: 'উপায় বা মাধ্যম বোঝাতে gerundio (ascoltando)।', en: 'Gerund expresses means ("by listening").' }, grammarId: 'gerundio' }],
    relatedGrammarIds: ['gerundio', 'avverbi-a2'],
    questions: [
      { id: 'rd-a2-25-q1', prompt: { bn: 'শুরুতে কোন ভাষার সাবটাইটেল ব্যবহার করা ভালো?', en: 'Which subtitles are useful at the start?' }, options: ['বাংলা', 'ইতালিয়ান', 'ফরাসি', 'কোনোটিই নয়'], answer: 1, explanation: { bn: 'sottotitoli in italiano।', en: 'Italian subtitles.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-26', level: 'A2', kind: 'dialogue', titleIt: 'Prenotare una visita in ospedale', title: { bn: 'হাসপাতালে অ্যাপয়েন্টমেন্ট নেওয়া', en: 'Booking a hospital appointment' },
    paragraphs: [
      { it: 'Operatore: "Centro Unico Prenotazioni, buongiorno. Mi dia il Suo codice fiscale per verificare i dati."', tr: { bn: 'কর্মী: "সেন্ট্রাল বুকিং সেন্টার, শুভ সকাল। তথ্য যাচাই করতে আপনার ট্যাক্স কোড দিন।"', en: 'Agent: "Central Booking Desk, good morning. Give me your tax code to check your details."' } },
      { it: 'Paziente: "Ecco il codice. Sa dirmi qual è il primo giorno libero per una visita oculistica?" Operatore: "Martedì 22 alle undici e quindici."', tr: { bn: 'রোগী: "এই যে কোড। চোখের ডাক্তার দেখানোর প্রথম খালি দিন কবে বলতে পারবেন?" কর্মী: "২২ তারিখ মঙ্গলবার সকাল ১১:১৫-এ।"', en: 'Patient: "Here is the code. Can you tell me the earliest open slot for an eye check-up?" Agent: "Tuesday the 22nd at 11:15."' } },
    ],
    vocabHighlights: [{ it: 'visita oculistica', tr: { bn: 'চোখের পরীক্ষা', en: 'eye check-up' } }],
    grammarHighlights: [{ excerpt: 'Sa dirmi qual è', note: { bn: 'তথ্য জানতে sapere (+ dirmi)।', en: 'Knowing/telling facts uses sapere.' }, grammarId: 'verbi-servizio-a2' }],
    relatedGrammarIds: ['verbi-servizio-a2', 'imperativo'],
    questions: [
      { id: 'rd-a2-26-q1', prompt: { bn: 'রোগী কোন বিভাগের অ্যাপয়েন্টমেন্ট চাইছে?', en: 'Which check-up is the patient booking?' }, options: ['দাঁত', 'চোখ', 'হৃদরোগ', 'ত্বক'], answer: 1, explanation: { bn: 'visita oculistica = চোখের পরীক্ষা।', en: 'Eye check-up.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-27', level: 'A2', kind: 'story', titleIt: 'Il miglior caffè del quartiere', title: { bn: 'এলাকার সেরা কফি (পাঠ)', en: 'Best neighbourhood coffee (Reader)' },
    storyId: 'st-a2-29',
    paragraphs: [
      { it: 'Vicino alla stazione ci sono due pasticcerie. La prima ha un servizio pessimo, mentre la seconda prepara il migliore cappuccino della zona.', tr: { bn: 'স্টেশনের কাছে দুটি পেস্ট্রি শপ আছে। প্রথমটির সেবা খুব খারাপ, আর দ্বিতীয়টি এলাকার সেরা ক্যাপুচিনো বানায়।', en: 'Near the station are two pastry shops. The first has poor service, while the second makes the best cappuccino in town.' } },
      { it: 'Dopo una colazione così buona, tutti i clienti iniziano la giornata molto meglio!', tr: { bn: 'এত ভালো নাস্তার পর সব গ্রাহক দিনটা অনেক ভালোভাবে শুরু করে!', en: 'After such a good breakfast, customers start the day far better!' } },
    ],
    vocabHighlights: [{ it: 'pasticceria', tr: { bn: 'মিষ্টান্ন/পেস্ট্রি শপ', en: 'pastry shop' } }],
    grammarHighlights: [{ excerpt: 'servizio pessimo / migliore cappuccino / meglio', note: { bn: 'অনিয়মিত তুলনা বিশেষণ ও ক্রিয়াবিশেষণ।', en: 'Irregular superlative/comparative adjectives & adverb.' }, grammarId: 'comparativi-irregolari' }],
    relatedGrammarIds: ['comparativi-irregolari', 'connettivi'],
    questions: [
      { id: 'rd-a2-27-q1', prompt: { bn: 'দ্বিতীয় দোকানের ক্যাপুচিনো কেমন?', en: 'How is the second shop’s cappuccino?' }, options: ['ঠান্ডা', 'এলাকার সেরা', 'খুব তেতো', 'দামি'], answer: 1, explanation: { bn: 'il migliore cappuccino della zona।', en: 'The best in the area.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-28', level: 'A2', kind: 'email', titleIt: 'Aggiornamento sulla consegna', title: { bn: 'পার্সেল ডেলিভারি আপডেট ইমেইল', en: 'Delivery update email' },
    paragraphs: [
      { it: 'Gentile Cliente, La informiamo che il Suo pacco è stato affidato al corriere questa mattina e verrà consegnato al Suo indirizzo domani tra le 14:00 e le 17:00.', tr: { bn: 'প্রিয় গ্রাহক, জানাচ্ছি যে আজ সকালে আপনার পার্সেলটি কুরিয়ারের হাতে তুলে দেওয়া হয়েছে এবং কাল দুপুর ২টা থেকে ৫টার মধ্যে আপনার ঠিকানায় পৌঁছে দেওয়া হবে।', en: 'Dear Customer, your parcel was handed to the courier this morning and will be delivered tomorrow between 2:00 and 5:00 PM.' } },
      { it: 'Se non ci fosse nessuno in casa, il corriere lascerà il pacco presso il punto di ritiro più vicino.', tr: { bn: 'বাড়িতে কেউ না থাকলে কুরিয়ার সবচেয়ে কাছের পিকআপ পয়েন্টে পার্সেলটি রেখে যাবে।', en: 'If nobody is home, the courier will leave the parcel at the nearest pickup point.' } },
    ],
    vocabHighlights: [{ it: 'punto di ritiro', tr: { bn: 'সংগ্রহ কেন্দ্র / পিকআপ পয়েন্ট', en: 'pickup point' } }],
    grammarHighlights: [{ excerpt: 'verrà consegnato', note: { bn: 'ভবিষ্যতে ডেলিভারি ঘোষণা।', en: 'Future passive notification.' }, grammarId: 'futuro' }],
    relatedGrammarIds: ['futuro', 'doppia-negazione'],
    questions: [
      { id: 'rd-a2-28-q1', prompt: { bn: 'বাসায় কেউ না থাকলে পার্সেল কোথায় রাখা হবে?', en: 'Where will the parcel go if nobody is home?' }, options: ['ফেরত পাঠাবে', 'সবচেয়ে কাছের পিকআপ পয়েন্টে', 'প্রতিবেশীর কাছে', 'দরজার বাইরে'], answer: 1, explanation: { bn: 'punto di ritiro più vicino।', en: 'Nearest pickup point.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-29', level: 'A2', kind: 'travel', titleIt: 'Visitare un museo la prima domenica', title: { bn: 'মাসের প্রথম রবিবারে বিনামূল্যে জাদুঘর', en: 'Free museums on the first Sunday' },
    paragraphs: [
      { it: 'Ogni prima domenica del mese in Italia molti musei statali sono gratuiti per tutti i visitatori! È un’ottima occasione per scoprire opere d’arte famose spendendo zero euro.', tr: { bn: 'প্রতি মাসের প্রথম রবিবারে ইতালির বহু সরকারি জাদুঘর সবার জন্য বিনামূল্যে খোলা থাকে! এক ইউরোও খরচ না করে বিখ্যাত শিল্পকর্ম দেখার এটি দারুণ সুযোগ।', en: 'Every first Sunday of the month many Italian state museums are free for all visitors! It is a great chance to see famous artworks for free.' } },
      { it: 'Tuttavia conviene arrivare presto la mattina perché verso mezzogiorno le file davanti all’ingresso diventano lunghissime.', tr: { bn: 'তবে সকালে তাড়াতাড়ি যাওয়াই ভালো কারণ দুপুরের দিকে প্রবেশপথের লাইন অনেক লম্বা হয়ে যায়।', en: 'However it pays to arrive early in the morning since by noon entrance queues get very long.' } },
    ],
    vocabHighlights: [{ it: 'musei statali', tr: { bn: 'সরকারি জাদুঘর', en: 'state museums' } }, { it: 'conviene', tr: { bn: 'ভালো হয় / লাভজনক', en: 'it is advisable' } }],
    grammarHighlights: [{ excerpt: 'Ogni prima domenica', note: { bn: 'ogni + একবচন এবং স্ত্রীলিঙ্গ ক্রমবাচক prima।', en: 'ogni + singular with feminine ordinal.' }, grammarId: 'indefiniti-a2' }],
    relatedGrammarIds: ['indefiniti-a2', 'numerali-ordinali'],
    questions: [
      { id: 'rd-a2-29-q1', prompt: { bn: 'সরকারি জাদুঘর কবে বিনামূল্যে দেখা যায়?', en: 'When are state museums free?' }, options: ['প্রতি শনিবার', 'মাসের প্রথম রবিবারে', 'মাসের শেষ দিনে', 'শুধু ছুটিতে'], answer: 1, explanation: { bn: 'Ogni prima domenica del mese।', en: 'First Sunday of the month.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-30', level: 'A2', kind: 'story', titleIt: 'Il pacco arrivato in ritardo', title: { bn: 'দেরির পার্সেল ও সমাধান (পাঠ)', en: 'The delayed parcel (Reader)' },
    storyId: 'st-a2-31',
    paragraphs: [
      { it: 'Ho ordinato una giacca invernale online, ma non ho ricevuto niente per quattro giorni. Alla fine ho dovuto scrivere un reclamo.', tr: { bn: 'অনলাইনে শীতের জ্যাকেট অর্ডার করেছিলাম, কিন্তু চার দিন কিছুই পাইনি। শেষে অভিযোগ লিখতে হয়েছে।', en: 'I ordered a winter jacket online yet got nothing for four days and had to file a complaint.' } },
      { it: 'Via mail mi hanno risposto subito e ho ottenuto il rimborso delle spese di spedizione.', tr: { bn: 'ইমেইলে সাথে সাথে উত্তর দিয়েছে এবং ডেলিভারি খরচের টাকা ফেরত পেয়েছি।', en: 'By email they replied right away and refunded the shipping fee.' } },
    ],
    vocabHighlights: [{ it: 'spese di spedizione', tr: { bn: 'ডেলিভারি খরচ', en: 'shipping costs' } }],
    grammarHighlights: [{ excerpt: 'ho dovuto scrivere', note: { bn: 'অতীতে বাধ্যবাধকতা: ho dovuto + inf.।', en: 'Past necessity with dovere.' }, grammarId: 'modali-passato' }],
    relatedGrammarIds: ['modali-passato', 'doppia-negazione'],
    questions: [
      { id: 'rd-a2-30-q1', prompt: { bn: 'কত দিন ধরে পার্সেল আসেনি?', en: 'How long did the parcel fail to arrive?' }, options: ['২ দিন', '৪ দিন', '১ সপ্তাহ', '১০ দিন'], answer: 1, explanation: { bn: 'per quattro giorni।', en: 'Four days.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-31', level: 'A2', kind: 'article', titleIt: 'Fare amicizia in una città nuova', title: { bn: 'নতুন শহরে বন্ধুত্ব গড়ে তোলা', en: 'Making friends in a new city' },
    paragraphs: [
      { it: 'Quando si trasloca in una città straniera, all’inizio ci si può sentire un po’ soli. Un buon modo per conoscere persone nuove è partecipare a scambi linguistici o corsi sportivi serali.', tr: { bn: 'বিদেশের কোনো শহরে এলে শুরুতে একটু একা লাগতে পারে। নতুন মানুষদের চেনার ভালো উপায় হলো ল্যাঙ্গুয়েজ এক্সচেঞ্জ বা সান্ধ্য স্পোর্টস কোর্সে অংশ নেওয়া।', en: 'When moving to a foreign city, you can feel a little lonely at first. A good way to meet new people is joining language exchanges or evening sport classes.' } },
      { it: 'Con un sorriso e qualche domanda semplice nascono facilmente belle amicizie che durano anni.', tr: { bn: 'একটু হাসি আর কয়েকটি সহজ প্রশ্নেই সহজে সুন্দর বন্ধুত্ব গড়ে ওঠে যা বছরের পর বছর টিকে থাকে।', en: 'With a smile and a few simple questions, warm friendships lasting years easily grow.' } },
    ],
    vocabHighlights: [{ it: 'scambi linguistici', tr: { bn: 'ভাষা বিনিময় আড্ডা', en: 'language exchanges' } }],
    grammarHighlights: [{ excerpt: 'conoscere persone nuove', note: { bn: 'নতুন মানুষের সাথে পরিচিত হতে conoscere।', en: 'conoscere is used for meeting/knowing people.' }, grammarId: 'verbi-servizio-a2' }],
    relatedGrammarIds: ['verbi-servizio-a2', 'si-impersonale-a2'],
    questions: [
      { id: 'rd-a2-31-q1', prompt: { bn: 'নতুন মানুষদের চেনার ভালো উপায় কী বলা হয়েছে?', en: 'What helps meet new people in a new city?' }, options: ['টিভি দেখা', 'ল্যাঙ্গুয়েজ এক্সচেঞ্জ ও স্পোর্টস কোর্স', 'ঘরে বসে থাকা', 'বেশি কাজ করা'], answer: 1, explanation: { bn: 'scambi linguistici o corsi sportivi।', en: 'Language exchanges or sport classes.' } },
    ],
  }),
  buildReading({
    id: 'rd-a2-32', level: 'A2', kind: 'story', titleIt: 'Una serata di cucina insieme', title: { bn: 'একসাথে রান্নার সন্ধ্যা (পাঠ)', en: 'Cooking together (Reader)' },
    storyId: 'st-a2-32',
    paragraphs: [
      { it: '"Ciao Matteo, ti va di venire a cena da noi sabato sera?" Matteo accetta con entusiasmo: "Volentieri! Vi dispiace se porto il dolce?"', tr: { bn: '"হ্যালো মাত্তেও, শনিবার সন্ধ্যায় আমাদের বাসায় ডিনারে আসতে চাও?" মাত্তেও আনন্দে রাজি হয়: "অবশ্যই! আমি মিষ্টি আনলে কি আপত্তি আছে?"', en: '"Hi Matteo, feel like coming to dinner Saturday?" Matteo gladly accepts: "Do you mind if I bring dessert?"' } },
      { it: 'Tagliamo le verdure, mescoliamo le spezie in padella e ridiamo fino a tardi insieme.', tr: { bn: 'আমরা সবজি কাটি, কড়াইয়ে মশলা মেশাই আর রাত অবধি একসাথে হাসাহাসি করি।', en: 'We chop vegetables, stir spices in the pan, and laugh together till late.' } },
    ],
    vocabHighlights: [{ it: 'con entusiasmo', tr: { bn: 'উৎসাহের সাথে', en: 'eagerly' } }],
    grammarHighlights: [{ excerpt: 'ti va di venire? / vi dispiace se…?', note: { bn: 'উষ্ণ আমন্ত্রণ ও ভদ্র প্রস্তাবনা ফ্রেম।', en: 'Polite invitation & offer frames.' }, grammarId: 'volere-piacere-cortesia' }],
    relatedGrammarIds: ['volere-piacere-cortesia', 'connettivi'],
    questions: [
      { id: 'rd-a2-32-q1', prompt: { bn: 'তারা কখন পর্যন্ত একসাথে রান্না ও গল্প করেছে?', en: 'Until when did they cook and laugh together?' }, options: ['সন্ধ্যা ৬টা', 'রাত অবধি (fino a tardi)', 'বিকেল', 'দুপুর'], answer: 1, explanation: { bn: 'fino a tardi।', en: 'Until late.' } },
    ],
  }),
];
