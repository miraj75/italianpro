import type {
  AcademyDrillItem,
  AcademyExamQuestion,
  AcademyTheoryConfig,
} from './types';
import type { Tr } from '../types';

export interface A1ReadingPassage {
  id: string;
  order: number;
  genre: Tr;
  title: Tr;
  it: string;
  translation: Tr;
  glossary: { it: string; tr: Tr }[];
  question: Tr;
  options: Tr[];
  answer: number;
  explanation: Tr;
}

export interface A1WritingCriterionSpec {
  id: string;
  label: Tr;
  pattern: RegExp;
}

export interface A1WritingTask {
  id: string;
  order: number;
  category: Tr;
  title: Tr;
  prompt: Tr;
  minWords: number;
  minSentences: number;
  requiredStructures: A1WritingCriterionSpec[];
  thematicKeywords: string[];
  minKeywordHits: number;
  usefulVocab: string[];
  modelAnswerIt: string;
  modelAnswerTr: Tr;
}

export interface WritingCriterionResult {
  id: string;
  label: Tr;
  met: boolean;
}

export interface WritingEvaluationResult {
  passed: boolean;
  wordCount: number;
  sentenceCount: number;
  uniqueWordCount: number;
  keywordHits: string[];
  criteria: WritingCriterionResult[];
  feedback: Tr;
}

function rp(
  id: string,
  order: number,
  gBn: string,
  gEn: string,
  tBn: string,
  tEn: string,
  it: string,
  trBn: string,
  trEn: string,
  glossary: [string, string, string][],
  qBn: string,
  qEn: string,
  opts: [string, string][],
  answer: number,
  expBn: string,
  expEn: string,
): A1ReadingPassage {
  return {
    id,
    order,
    genre: { bn: gBn, en: gEn },
    title: { bn: tBn, en: tEn },
    it,
    translation: { bn: trBn, en: trEn },
    glossary: glossary.map(([word, bn, en]) => ({ it: word, tr: { bn, en } })),
    question: { bn: qBn, en: qEn },
    options: opts.map(([bn, en]) => ({ bn, en })),
    answer,
    explanation: { bn: expBn, en: expEn },
  };
}

// 20 short A1 reading passages (>= 20 required)
export const A1_READING_PASSAGES: A1ReadingPassage[] = [
  rp('rw-r-01', 1, 'প্রোফাইল', 'Student Profile', '১. তারিকের পরিচয়', '1. Tariq’s Profile',
    'Ciao! Mi chiamo Tariq e ho ventitré anni. Sono del Bangladesh, ma adesso abito a Padova per studiare ingegneria. Parlo bengalese, inglese e studio italiano ogni mattina per trenta minuti.',
    'হ্যালো! আমার নাম তারিক এবং আমার বয়স ২৩ বছর। আমি বাংলাদেশের, তবে এখন ইঞ্জিনিয়ারিং পড়ার জন্য পাদোয়াতে থাকি। আমি বাংলা ও ইংরেজি বলি এবং প্রতিদিন সকালে ত্রিশ মিনিট ইতালিয়ান পড়ি।',
    'Hi! My name is Tariq and I am 23 years old. I am from Bangladesh, and now I live in Padua to study engineering. I speak Bengali and English and study Italian for 30 minutes every morning.',
    [['ingegneria', 'প্রকৌশল / ইঞ্জিনিয়ারিং', 'engineering'], ['ogni mattina', 'প্রতিদিন সকালে', 'every morning']],
    'তারিক কেন পাদোয়াতে থাকেন?', 'Why does Tariq live in Padua?',
    [['ইঞ্জিনিয়ারিং পড়াশোনা করার জন্য', 'To study engineering'], ['একটি হোটেলে কাজ করতে', 'To work in a hotel'], ['শুধু ছুটিতে বেড়াতে', 'For a weekend trip']], 0,
    '"abito a Padova per studiare ingegneria" থেকে স্পষ্ট বোঝা যায়।', 'Text explicitly states "per studiare ingegneria".'),
  rp('rw-r-02', 2, 'দৈনন্দিন রুটিন', 'Daily Routine', '২. সোফিয়ার দিন', '2. Sofia’s Weekday',
    'Dal lunedì al venerdì Sofia si sveglia alle sette. Prende un caffè con pane e marmellata, poi prende il tram alle otto meno dieci. Lavora in una libreria in centro fino alle diciassette.',
    'সোম থেকে শুক্রবার সোফিয়া সকাল ৭টায় ঘুম থেকে ওঠে। সে রুটি ও জ্যামসহ এক কাপ কফি খায়, এরপর ৭:৫০-এ ট্রাম ধরে। সে শহরের কেন্দ্রের একটি বইয়ের দোকানে বিকেল ৫টা পর্যন্ত কাজ করে।',
    'Monday through Friday, Sofia wakes up at seven. She has coffee with bread and jam, then catches the tram at 7:50. She works in a downtown bookstore until 17:00.',
    [['marmellata', 'জ্যাম / জেলি', 'jam'], ['libreria', 'বইয়ের দোকান', 'bookstore']],
    'সোফিয়া কয়টায় ট্রাম ধরেন?', 'At what time does Sofia take the tram?',
    [['সকাল ৭:৫০-এ (otto meno dieci)', 'At 7:50 AM'], ['সকাল ৭টায়', 'At 7:00 AM'], ['বিকেল ৫টায়', 'At 5:00 PM']], 0,
    '"alle otto meno dieci" অর্থ ৮টা বাজতে ১০ মিনিট বাকি (৭:৫০)।', '"otto meno dieci" equals 7:50 AM.'),
  rp('rw-r-03', 3, 'পরিবার', 'Family', '৩. আমার পরিবার', '3. Family Description',
    'La mia famiglia è molto unita. I miei genitori abitano ancora a Dhaka, mentre mia sorella maggiore lavora come medico a Milano. Il nostro cane si chiama Leo ed è molto allegro.',
    'আমার পরিবার খুব আন্তরিক। আমার বাবা-মা এখনো ঢাকায় থাকেন, আর আমার বড় বোন মিলানে ডাক্তার হিসেবে কাজ করেন। আমাদের কুকুরের নাম লিও এবং সে খুব হাসিখুশি।',
    'My family is very close. My parents still live in Dhaka, while my older sister works as a doctor in Milan. Our dog is named Leo and is very cheerful.',
    [['genitori', 'বাবা-মা', 'parents'], ['sorella maggiore', 'বড় বোন', 'older sister']],
    'বড় বোন কী পেশায় আছেন ও কোথায় থাকেন?', 'What does the older sister do and where does she live?',
    [['মিলানে ডাক্তার হিসেবে কাজ করেন', 'She works as a doctor in Milan'], ['ঢাকায় পড়াশোনা করেন', 'She studies in Dhaka'], ['বইয়ের দোকানে কাজ করেন', 'She works in a bookstore']], 0,
    '"mia sorella maggiore lavora come medico a Milano"।', 'Stated directly: doctor in Milan.'),
  rp('rw-r-04', 4, 'দোকানের বিজ্ঞপ্তি', 'Shop Notice', '৪. বেকারির সাইনবোর্ড', '4. Bakery Hours Notice',
    'PANIFICIO SOLE — Aperto dal lunedì al sabato: 07:30–13:00 e 16:00–19:30. Chiuso la domenica e giovedì pomeriggio. Pane fresco ogni mattina!',
    'পানিফিচিও সোলে — খোলা সোম থেকে শনি: ০৭:৩০–১৩:০০ এবং ১৬:০০–১৯:৩০। রবিবার ও বৃহস্পতিবার বিকেলে বন্ধ। প্রতিদিন সকালে তাজা রুটি!',
    'Sole Bakery — Open Monday to Saturday: 07:30–13:00 and 16:00–19:30. Closed Sunday and Thursday afternoon. Fresh bread every morning!',
    [['panificio', 'বেকারি / রুটির দোকান', 'bakery'], ['chiuso', 'বন্ধ', 'closed']],
    'বৃহস্পতিবার বিকেলে বেকারিটি কি খোলা থাকে?', 'Is the bakery open on Thursday afternoon?',
    [['না, বৃহস্পতিবার বিকেলে বন্ধ থাকে', 'No, it is closed Thursday afternoon'], ['হ্যাঁ, রাত ১০টা পর্যন্ত খোলা', 'Yes, open until 10 PM'], ['শুধু অনলাইনে খোলা', 'Open online only']], 0,
    'বিজ্ঞপ্তিতে স্পষ্ট লেখা আছে: "Chiuso la domenica e giovedì pomeriggio."', '"Chiuso la domenica e giovedì pomeriggio" excludes Thursday afternoon.'),
  rp('rw-r-05', 5, 'এসএমএস বার্তা', 'SMS Message', '৫. বন্ধুর মেসেজ', '5. Friend’s Text Message',
    'Ciao Amir! Il treno da Torino ha quindici minuti di ritardo. Non arrivo alle sei, arrivo alle sei e un quarto al bar della stazione. Aspettami lì! — Luca',
    'হ্যালো আমির! তুরিন থেকে আসা ট্রেনটি ১৫ মিনিট দেরি করছে। আমি ৬টায় পৌঁছাব না, স্টেশনের ক্যাফেতে ৬টা ১৫-তে পৌঁছাব। ওখানে আমার জন্য অপেক্ষা করো! — লুকা',
    'Hi Amir! The train from Turin is 15 minutes delayed. I will not arrive at 6:00, I will arrive at 6:15 at the station café. Wait for me there! — Luca',
    [['ritardo', 'দেরি / বিলম্ব', 'delay'], ['aspettami', 'আমার জন্য অপেক্ষা করো', 'wait for me']],
    'লুকা আমিরকে কোথায় ও কয়টার জন্য অপেক্ষা করতে বলেছেন?', 'Where and when should Amir meet Luca?',
    [['স্টেশনের ক্যাফেতে ৬:১৫-তে', 'At the station café at 6:15'], ['৬:০০টায় বাড়ির সামনে', 'At 6:00 at home'], ['৭:৩০-এ প্ল্যাটফর্ম ২-এ', 'At 7:30 on platform 2']], 0,
    '"arrivo alle sei e un quarto al bar della stazione."', 'Clear meeting point and delayed time.'),
  rp('rw-r-06', 6, 'ইমেইল', 'Basic Email', '৬. ক্লাস বিষয়ক ইমেইল', '6. Email to Teacher',
    'Gentile Professoressa Rossi, mi chiamo Nadia Rahman e frequento il corso A1 del mattino. Purtroppo domani non posso venire a lezione perché ho una visita medica. Cordiali saluti, Nadia.',
    'শ্রদ্ধেয় প্রফেসর রসি, আমার নাম নাদিয়া রহমান এবং আমি সকালের A1 কোর্সে পড়ি। দুর্ভাগ্যবশত আগামীকাল আমি ক্লাসে আসতে পারব না কারণ আমার ডাক্তারের ভিজিট আছে। বিনীত, নাদিয়া।',
    'Dear Professor Rossi, my name is Nadia Rahman and I attend the morning A1 course. Unfortunately tomorrow I cannot come to class because I have a medical appointment. Kind regards, Nadia.',
    [['frequento', 'আমি ক্লাস করি / অংশ নিই', 'I attend'], ['cordiali saluti', 'বিনীত শুভেচ্ছা', 'kind regards']],
    'নাদিয়া কেন আগামীকাল ক্লাসে যেতে পারছেন না?', 'Why will Nadia miss tomorrow’s class?',
    [['তাঁর ডাক্তারের অ্যাপয়েন্টমেন্ট আছে', 'She has a medical appointment'], ['তাঁর ট্রেন বাতিল হয়েছে', 'Her train was canceled'], ['তিনি ছুটিতে যাচ্ছেন', 'She is on holiday']], 0,
    '"perché ho una visita medica" কারণ হিসেবে লেখা হয়েছে।', '"perché ho una visita medica" explains her absence.'),
  rp('rw-r-07', 7, 'সময়সূচি', 'Timetable', '৭. ট্রেনের সময়সূচি', '7. Station Timetable',
    'TRENO REGIONALE 2410: Partenza Bologna 09:12 (Binario 3) → Ferrara 09:44 → Padova 10:28 → Arrivo Venezia S. Lucia 10:56. Validare il biglietto prima della partenza.',
    'আঞ্চলিক ট্রেন ২৪১০: যাত্রা বোলোনিয়া ০৯:১২ (প্ল্যাটফর্ম ৩) → ফেরারা ০৯:৪৪ → পাদোয়া ১০:২৮ → গন্তব্য ভেনিস এস. লুচিয়া ১০:৫৬। ছাড়ার আগে টিকিট পাঞ্চ করুন।',
    'Regional Train 2410: Departs Bologna 09:12 (Platform 3) → Ferrara 09:44 → Padua 10:28 → Arrives Venice S. Lucia 10:56. Validate ticket before departure.',
    [['partenza', 'যাত্রা / ছাড়ার সময়', 'departure'], ['arrivo', 'পৌঁছানোর সময়', 'arrival']],
    'বোলোনিয়া থেকে ছাড়া ট্রেনটি পাদোয়াতে কখন পৌঁছায়?', 'When does this train arrive in Padua (Padova)?',
    [['সকাল ১০:২৮-এ', 'At 10:28'], ['সকাল ০৯:৪৪-এ', 'At 09:44'], ['সকাল ১০:৫৬-তে', 'At 10:56']], 0,
    'তালিকা অনুযায়ী Padova 10:28।', 'Timetable reads "Padova 10:28".'),
  rp('rw-r-08', 8, 'সুপারমার্কেট ফ্লায়ার', 'Flyer', '৮. সুপারমার্কেট অফার', '8. Supermarket Weekly Offer',
    'OFFERTA DELLA SETTIMANA: Arance rosse €1,40/kg! Olio extra vergine d’oliva €5,90 (invece di €7,50). Solo dal 10 al 16 ottobre con carta fedeltà.',
    'সপ্তাহের অফার: লাল কমলা €1,40/কেজি! এক্সট্রা ভার্জিন অলিভ অয়েল €5,90 (€7,50-এর পরিবর্তে)। শুধু ১০ থেকে ১৬ই অক্টোবর মেম্বার কার্ডের সাথে।',
    'Offer of the Week: Blood oranges €1.40/kg! Extra virgin olive oil €5.90 (instead of €7.50). Only Oct 10–16 with loyalty card.',
    [['invece di', 'এর পরিবর্তে', 'instead of'], ['carta fedeltà', 'মেম্বার কার্ড', 'loyalty card']],
    'ডিসকাউন্ট ছাড়া অলিভ অয়েলের আসল দাম কত ছিল?', 'What was the regular price of the olive oil before the discount?',
    [['€7,50', '€7.50'], ['€5,90', '€5.90'], ['€1,40', '€1.40']], 0,
    '"€5,90 (invece di €7,50)" মানে আগের দাম €7,50 ছিল।', '"invece di €7,50" shows the regular price.'),
  rp('rw-r-09', 9, 'আবাসন', 'Room Ad', '৯. রুম ভাড়ার বিজ্ঞাপন', '9. Student Room Notice',
    'Affittasi camera singola luminosa vicino all’università. L’appartamento ha cucina condivisa, Wi-Fi e lavatrice. €380 al mese, spese incluse. No fumatori. Telefonare dopo le 17:00.',
    'বিশ্ববিদ্যালয়ের কাছে আলোকিত সিঙ্গেল রুম ভাড়া দেওয়া হবে। ফ্ল্যাটে শেয়ার করা রান্নাঘর, ওয়াইফাই ও ওয়াশিং মেশিন আছে। মাসে €380, খরচ অন্তর্ভুক্ত। ধূমপায়ী নয়। বিকেল ৫টার পর কল করুন।',
    'Bright single room for rent near the university. Apartment has shared kitchen, Wi-Fi, and washing machine. €380/month, bills included. Non-smokers. Call after 17:00.',
    [['affittasi', 'ভাড়া দেওয়া হবে', 'for rent'], ['spese incluse', 'বিল অন্তর্ভুক্ত', 'utilities included']],
    'বিজ্ঞাপনের মালিক কখন ফোন করতে বলেছেন?', 'When does the landlord ask callers to phone?',
    [['বিকেল ৫টার পরে', 'After 17:00 (5 PM)'], ['সকাল ৭টার আগে', 'Before 7 AM'], ['শুধু রবিবারে', 'Sundays only']], 0,
    'শেষ লাইনে আছে: "Telefonare dopo le 17:00."', '"Telefonare dopo le 17:00" = call after 5 PM.'),
  rp('rw-r-10', 10, 'রেস্তোরাঁ মেনু', 'Menu Card', '১০. দুপুরের মেনু', '10. Café Lunch Menu',
    'MENÙ DEL GIORNO (€12): Primo a scelta: Pasta al pesto o Zuppa di verdure. Secondo: Frittata con insalata. Inclusi: acqua e caffè al banco.',
    'আজকের মেনু (€12): প্রথম পদ (যেকোনো একটি): পেস্তো পাস্তা বা সবজি স্যুপ। দ্বিতীয় পদ: সালাদসহ ফ্রিতাতা। অন্তর্ভুক্ত: পানি ও কাউন্টারে কফি।',
    'Daily Menu (€12): Choice of first course: Pesto pasta or Vegetable soup. Second: Omelet with salad. Included: water and coffee at the bar.',
    [['a scelta', 'পছন্দমতো', 'your choice of'], ['inclusi', 'অন্তর্ভুক্ত', 'included']],
    '১২ ইউরোর মেনুতে পানীয় হিসেবে কী অন্তর্ভুক্ত?', 'Which drinks are included in the €12 menu?',
    [['পানি এবং কফি', 'Water and coffee'], ['জুস এবং চা', 'Orange juice and tea'], ['শুধু সোডা', 'Soda only']], 0,
    '"Inclusi: acqua e caffè al banco."', 'Water and espresso are included.'),
  rp('rw-r-11', 11, 'বিশ্ববিদ্যালয় নোটিশ', 'Campus Notice', '১১. লাইব্রেরি নির্দেশনা', '11. Campus Library Notice',
    'AVVISO AGLI STUDENTI: Venerdì 20 novembre la biblioteca chiude alle ore 15:00 per manutenzione. Sabato mattina riapre normalmente alle 09:00.',
    'শিক্ষার্থীদের জন্য বিজ্ঞপ্তি: শুক্রবার ২০শে নভেম্বর রক্ষণাবেক্ষণের জন্য লাইব্রেরি দুপুর ৩টায় বন্ধ হবে। শনিবার সকালে স্বাভাবিকভাবে ৯টায় পুনরায় খুলবে।',
    'Notice to Students: On Friday Nov 20 the library closes at 15:00 for maintenance. Saturday morning it reopens normally at 09:00.',
    [['manutenzione', 'রক্ষণাবেক্ষণ', 'maintenance'], ['riapre', 'আবার খোলে', 'reopens']],
    'শুক্রবার ২০শে নভেম্বর লাইব্রেরি কয়টায় বন্ধ হবে?', 'When does the library close on Friday Nov 20?',
    [['দুপুর ৩টায় (১৫:০০)', 'At 15:00 (3:00 PM)'], ['সকাল ৯টায়', 'At 09:00'], ['রাত ১০টায়', 'At 22:00']], 0,
    'বিজ্ঞপ্তি অনুযায়ী শুক্রবার ১৫:০০-তে বন্ধ হয়।', 'Notice specifies closing at 15:00.'),
  rp('rw-r-12', 12, 'শহর বর্ণনা', 'City Description', '১২. আমার শহর বোলোনিয়া', '12. Living in Bologna',
    'Bologna è una città molto viva con tanti studenti giovani. Ha lunghi portici che proteggono dalla pioggia e dal sole. In centro ci sono mercati antichi, librerie e ottimi bar.',
    'বোলোনিয়া অনেক তরুণ শিক্ষার্থীসহ খুব প্রাণবন্ত একটি শহর। এখানে দীর্ঘ আচ্ছাদিত বারান্দা (portici) আছে যা বৃষ্টি ও রোদ থেকে রক্ষা করে। কেন্দ্রে প্রাচীন বাজার, বইয়ের দোকান ও চমৎকার ক্যাফে রয়েছে।',
    'Bologna is a very lively city with many young students. It has long covered arcades that protect from rain and sun. Downtown there are old markets, bookshops, and great cafés.',
    [['portici', 'আচ্ছাদিত স্তম্ভযুক্ত বারান্দা', 'covered arcades'], ['viva', 'প্রাণবন্ত', 'lively']],
    'বোলোনিয়ার "portici" মানুষকে কী থেকে রক্ষা করে?', 'What do Bologna’s arcades protect pedestrians from?',
    [['বৃষ্টি এবং রোদ থেকে', 'From rain and sun'], ['শুধু ট্রাফিক থেকে', 'Only from trains'], ['তুষারঝড় থেকে', 'Only blizzards']], 0,
    '"proteggono dalla pioggia e dal sole" — বৃষ্টি ও রোদ।', 'Text notes "dalla pioggia e dal sole".'),
  rp('rw-r-13', 13, 'ডায়েরি', 'Weekend Diary', '十三. রবিবারের ডায়েরি', '13. Sunday Plans Note',
    'Oggi è domenica e finalmente non lavoro! La mattina dormo fino alle nove, poi preparo un piatto di riso con pollo e verdure. Nel pomeriggio leggo un libro nuovo e chiamo mia madre.',
    'আজ রবিবার এবং অবশেষে আমার কাজ নেই! সকালে ৯টা পর্যন্ত ঘুমাই, তারপর মুরগি ও সবজি দিয়ে ভাত রান্না করি। বিকেলে একটি নতুন বই পড়ি এবং মায়ের সাথে ফোনে কথা বলি।',
    'Today is Sunday and finally I do not work! In the morning I sleep until nine, then prepare a dish of rice with chicken and vegetables. In the afternoon I read a new book and call my mother.',
    [['finalmente', 'অবশেষে', 'finally'], ['preparo', 'আমি তৈরি/রান্না করি', 'I prepare']],
    'বিকেলে লেখক কী করেন?', 'What does the writer do in the afternoon?',
    [['একটি নতুন বই পড়েন এবং মাকে ফোন করেন', 'Reads a new book and calls their mother'], ['কাজে যান', 'Goes to work'], ['বাজারে যান', 'Goes shopping']], 0,
    '"Nel pomeriggio leggo un libro nuovo e chiamo mia madre."', 'Reads a new book and calls mom.'),
  rp('rw-r-14', 14, 'আমন্ত্রণ', 'Invitation Card', '১৪. জন্মদিনের দাওয়াত', '14. Birthday Invitation',
    'Carissimi amici, sabato 8 giugno compio venticinque anni! Vi invito a cena alle 20:00 alla Pizzeria Napoli in Via Garibaldi 14. Fatemi sapere entro giovedì!',
    'প্রিয় বন্ধুরা, শনিবার ৮ই জুন আমার ২৫তম জন্মদিন! আমি তোমাদের রাত ৮:০০টায় ভিয়া গারিবালদি ১৪-তে পিৎজেরিয়া নাপোলিতে রাতের খাবারের দাওয়াত দিচ্ছি। বৃহস্পতিবারের মধ্যে জানিও!',
    'Dear friends, on Saturday June 8th I turn 25! I invite you to dinner at 20:00 at Pizzeria Napoli on Via Garibaldi 14. Let me know by Thursday!',
    [['compio ... anni', 'আমার ... বছর পূর্ণ হচ্ছে', 'I turn ... years old'], ['entro giovedì', 'বৃহস্পতিবারের মধ্যে', 'by Thursday']],
    'কবে পর্যন্ত বন্ধুদের উপস্থিতি জানাতে বলা হয়েছে?', 'By what day should friends RSVP?',
    [['বৃহস্পতিবারের মধ্যে (entro giovedì)', 'By Thursday'], ['শনিবার রাতে', 'Saturday night'], ['জুলাই মাসে', 'In July']], 0,
    '"Fatemi sapere entro giovedì!" অর্থ বৃহস্পতিবারের মধ্যে জানাও।', '"entro giovedì" means by Thursday.'),
  rp('rw-r-15', 15, 'ডাক্তার রসিদ', 'Clinic Note', '১৫. ক্লিনিক নির্দেশনা', '15. Clinic Instructions',
    'PROMEMORIA VISITA: Paziente Karim Hasan — Giovedì 12 marzo ore 10:15, Ambulatorio 2 (Piano Terra). Portare tessera sanitaria e documento d’identità.',
    'ভিজিট রিমাইন্ডার: রোগী করিম হাসান — বৃহস্পতিবার ১২ই মার্চ সকাল ১০:১৫, কক্ষ ২ (নিচতলা)। হেলথ কার্ড ও পরিচয়পত্র সাথে আনুন।',
    'Visit Reminder: Patient Karim Hasan — Thursday March 12 at 10:15, Room 2 (Ground Floor). Bring health card and ID document.',
    [['piano terra', 'নিচতলা', 'ground floor'], ['ambulatorio', 'ডাক্তারের চেম্বার', 'exam room']],
    'কোন দুটি কাগজ সাথে আনতে বলা হয়েছে?', 'Which two documents should the patient bring?',
    [['হেলথ কার্ড এবং পরিচয়পত্র', 'Health card and ID document'], ['শুধু ট্রেনের টিকিট', 'Train ticket only'], ['পাসপোর্ট ছবি ও বই', 'Passport photos and textbook']], 0,
    '"Portare tessera sanitaria e documento d’identità."', 'Bring "tessera sanitaria" and "documento d’identità".'),
  rp('rw-r-16', 16, 'কেনাকাটা', 'Store Policy', '১৬. পোশাক বদলানোর নিয়ম', '16. Store Exchange Note',
    'NEGOZIO MODA: I capi acquistati in saldo non possono essere cambiati. Per gli altri articoli, il cambio è possibile entro 14 giorni presentando lo scontrino.',
    'ফ্যাশন স্টোর: সেল ডিসকাউন্টে কেনা পোশাক বদলানো যাবে না। অন্যান্য পণ্যের ক্ষেত্রে রসিদ দেখিয়ে ১৪ দিনের মধ্যে বদলানো সম্ভব।',
    'Moda Shop: Items bought on sale cannot be exchanged. For other items, exchange is possible within 14 days by showing the receipt.',
    [['capi', 'পোশাক', 'garments'], ['scontrino', 'রসিদ', 'receipt']],
    'সাধারণ (নন-সেল) পোশাক বদলাতে কী দেখানো দরকার?', 'What is required to exchange regular non-sale items within 14 days?',
    [['কেনাকাটার রসিদ (lo scontrino)', 'The receipt (lo scontrino)'], ['পাসপোর্ট', 'A passport'], ['অন্য ক্রেতাকে', 'Another customer']], 0,
    '"presentando lo scontrino" অর্থ রসিদ দেখিয়ে।', 'Store requires presenting the receipt ("lo scontrino").'),
  rp('rw-r-17', 17, 'খাবার', 'Recipe Intro', '১৭. সহজ পাস্তা রেসিপি', '17. Quick Pasta Steps',
    'Ingredienti per due persone: 200g di spaghetti, pomodori freschi, aglio, olio d’oliva, sale e basilico. Cuocere la pasta in acqua salata per dieci minuti.',
    'দুইজনের উপকরণ: ২০০ গ্রাম স্প্যাগেটি, তাজা টমেটো, রসুন, অলিভ অয়েল, লবণ ও পুদিনা/তুলসী (ব্যাসিল)। লবণ পানিতে পাস্তা দশ মিনিট সেদ্ধ করুন।',
    'Ingredients for two: 200g spaghetti, fresh tomatoes, garlic, olive oil, salt, and basil. Cook pasta in salted water for ten minutes.',
    [['aglio', 'রসুন', 'garlic'], ['cuocere', 'রান্না/সেদ্ধ করা', 'to cook']],
    'পাস্তা কত মিনিট রান্না করতে বলা হয়েছে?', 'For how many minutes should the pasta cook?',
    [['দশ মিনিট (dieci minuti)', '10 minutes'], ['২০ মিনিট', '20 minutes'], ['১ ঘণ্টা', '1 hour']], 0,
    '"per dieci minuti" = ১০ মিনিট।', 'Instructions state "dieci minuti".'),
  rp('rw-r-18', 18, 'চাকরি ও অফিস', 'Work Schedule', '১৮. কাজের সময় তালিকা', '18. Weekly Shift Schedule',
    'ORARIO DI LAVORO — Rina: Lunedì, Martedì e Mercoledì dalle 09:00 alle 13:00. Giovedì riposo. Venerdì e Sabato pomeriggio dalle 14:00 alle 19:00.',
    'কাজের সময়সূচি — রিনা: সোম, মঙ্গল ও বুধ সকাল ০৯:০০–১৩:০০। বৃহস্পতিবার ছুটি। শুক্র ও শনি বিকেল ১৪:০০–১৯:০০।',
    'Work Schedule — Rina: Monday, Tuesday & Wednesday 09:00–13:00. Thursday off. Friday & Saturday afternoons 14:00–19:00.',
    [['riposo', 'ছুটি / বিশ্রাম', 'day off'], ['orario di lavoro', 'কাজের সময়সূচি', 'work schedule']],
    'রিনার সাপ্তাহিক ছুটির দিন কোনটি?', 'Which day is Rina off from work?',
    [['বৃহস্পতিবার (Giovedì)', 'Thursday'], ['শনিবার', 'Saturday'], ['সোমবার', 'Monday']], 0,
    '"Giovedì riposo" অর্থ বৃহস্পতিবার ছুটি।', 'Thursday ("Giovedì") is marked "riposo".'),
  rp('rw-r-19', 19, 'হোটেল বার্তা', 'Hotel Welcome', '১৯. হোটেল স্বাগতম নোট', '19. Hotel Welcome Card',
    'Benvenuti all’Hotel Stella! La colazione è servita al piano terra dalle 7:30 alle 10:00. Il Wi-Fi si chiama “HotelStella” e la password è “estate2026”. Check-out entro le 10:30.',
    'হোটেল স্তেল্লায় স্বাগতম! সকালের নাশতা নিচতলায় ৭:৩০ থেকে ১০:০০টা পর্যন্ত পরিবেশন করা হয়। ওয়াই-ফাই নাম “HotelStella” এবং পাসওয়ার্ড “estate2026”। ১০:৩০-এর মধ্যে চেক-আউট।',
    'Welcome to Hotel Stella! Breakfast is served on the ground floor from 7:30 to 10:00. Wi-Fi is "HotelStella" with password "estate2026". Check-out by 10:30.',
    [['servita', 'পরিবেশিত', 'served'], ['entro le', '... এর মধ্যে', 'by / before']],
    'সকালের নাশতা কোন তলায় এবং কখন পর্যন্ত দেওয়া হয়?', 'On which floor and until what time is breakfast served?',
    [['নিচতলায়, সকাল ১০:০০টা পর্যন্ত', 'Ground floor, until 10:00'], ['দ্বিতীয় তলায়, ১০:৩০ পর্যন্ত', '2nd floor, until 10:30'], ['ছাদে, দুপুর ১২টা পর্যন্ত', 'Rooftop, until 12:00']], 0,
    '"al piano terra dalle 7:30 alle 10:00"।', 'Ground floor from 7:30 to 10:00.'),
  rp('rw-r-20', 20, 'সংক্ষিপ্ত ইমেইল', 'Appointment Email', '২০. অ্যাপয়েন্টমেন্ট নিশ্চিতকরণ', '20. Confirming by Email',
    'Buongiorno Signor Hasan, confermiamo il Suo appuntamento per mercoledì 4 novembre alle ore 11:00 presso il nostro ufficio in Via Dante 8. Se non può venire, ci avvisi un giorno prima.',
    'শুভ সকাল জনাব হাসান, আমরা আমাদের অফিস ভিয়া দান্তে ৮-এ বুধবার ৪ঠা নভেম্বর সকাল ১১:০০টায় আপনার অ্যাপয়েন্টমেন্ট নিশ্চিত করছি। আসতে না পারলে একদিন আগে জানাবেন।',
    'Good morning Mr. Hasan, we confirm your appointment for Wednesday, November 4 at 11:00 AM at our office on Via Dante 8. If you cannot attend, please notify us one day in advance.',
    [['confermiamo', 'আমরা নিশ্চিত করছি', 'we confirm'], ['ci avvisi', 'আমাদের জানাবেন', 'notify us']],
    'অ্যাপয়েন্টমেন্টটি কোন ঠিকানায় এবং কখন নির্ধারিত হয়েছে?', 'Where and when is the confirmed appointment?',
    [['ভিয়া দান্তে ৮, বুধবার ৪ঠা নভেম্বর সকাল ১১:০০টায়', 'Via Dante 8, Wednesday Nov 4 at 11:00'], ['ভিয়া রোমা ৮, বৃহস্পতিবার ১১টায়', 'Via Roma 8, Thursday at 11:00'], ['অনলাইন ভিডিও কলে', 'Online video call']], 0,
    'সমস্ত তথ্য শেষ অংশে স্পষ্টভাবে উল্লেখ আছে।', 'Date, time, and address match directly.'),
];

// 15 guided writing tasks (>= 15 required)
export const A1_WRITING_TASKS: A1WritingTask[] = [
  {
    id: 'rw-w-01',
    order: 1,
    category: { bn: 'পরিচয়', en: 'Self-Introduction' },
    title: { bn: '১. নিজের সংক্ষিপ্ত পরিচয় লিখুন', en: '1. Write a Short Self-Introduction' },
    prompt: {
      bn: 'ইতালিয়ানে ৩–৪টি বাক্যে নিজের নাম, বয়স, দেশ ও আপনি কোথায় থাকেন তা লিখুন।',
      en: 'Write 3–4 Italian sentences giving your name, age, country, and where you live.',
    },
    minWords: 16,
    minSentences: 3,
    requiredStructures: [
      { id: 'greeting', label: { bn: 'সম্ভাষণ (Ciao / Buongiorno / Salve)', en: 'Greeting (Ciao / Buongiorno / Salve)' }, pattern: /\b(ciao|buongiorno|buonasera|salve)\b/i },
      { id: 'name-clause', label: { bn: 'নাম ও পরিচয় (Mi chiamo / Sono...)', en: 'Name & identity (Mi chiamo / Sono...)' }, pattern: /\b(mi chiamo|sono)\b/i },
      { id: 'age-residence', label: { bn: 'বয়স বা বাসস্থান (ho ... anni / abito / vivo)', en: 'Age or residence (ho ... anni / abito / vivo)' }, pattern: /\b(ho\s+\w+\s+anni|abito|vivo)\b/i },
    ],
    thematicKeywords: ['chiamo', 'sono', 'anni', 'abito', 'vivo', 'parlo', 'studio', 'italia', 'bangladesh'],
    minKeywordHits: 3,
    usefulVocab: ['Ciao!', 'Mi chiamo...', 'Ho ... anni', 'Sono di...', 'Abito a...', 'Studio italiano'],
    modelAnswerIt: 'Ciao! Mi chiamo Rafi e ho ventiquattro anni. Sono del Bangladesh, ma adesso abito a Milano. Studio italiano ogni giorno.',
    modelAnswerTr: {
      bn: 'হ্যালো! আমার নাম রাফি এবং আমার বয়স ২৪ বছর। আমি বাংলাদেশের, তবে এখন মিলানে থাকি। আমি প্রতিদিন ইতালিয়ান শিখি।',
      en: 'Hi! My name is Rafi and I am 24 years old. I am from Bangladesh, and now I live in Milan. I study Italian every day.',
    },
  },
  {
    id: 'rw-w-02',
    order: 2,
    category: { bn: 'পরিবার', en: 'Family' },
    title: { bn: '২. আপনার পরিবার সম্পর্কে লিখুন', en: '2. Describe Your Family' },
    prompt: {
      bn: 'পরিবারে কে কে আছেন (genitori, madre, padre, fratello, sorella) এবং তাঁরা কোথায় থাকেন বা কী করেন তা ৩টি বাক্যে লিখুন।',
      en: 'Write 3 Italian sentences describing your family members and where they live or what they do.',
    },
    minWords: 16,
    minSentences: 2,
    requiredStructures: [
      { id: 'family-noun', label: { bn: 'পরিবারের সদস্য (famiglia/madre/padre/fratello/sorella)', en: 'Family noun (famiglia/genitori/madre/padre/fratello/sorella)' }, pattern: /\b(famiglia|genitori|madre|mamma|padre|papà|papa|fratello|sorella|moglie|marito)\b/i },
      { id: 'possessive-or-have', label: { bn: 'possessive বা ho (mio/mia/i miei/ho)', en: 'Possessive or "ho" (mio/mia/ho)' }, pattern: /\b(mio|mia|miei|mie|ho|abbiamo)\b/i },
      { id: 'action-verb', label: { bn: 'ক্রিয়া ব্যবহার (abita/lavora/studia/sono/si chiama)', en: 'Action verb (abita/lavora/studia/si chiama)' }, pattern: /\b(abita|abitano|lavora|lavorano|studia|studiano|si chiama|sono|è|e')\b/i },
    ],
    thematicKeywords: ['famiglia', 'genitori', 'madre', 'padre', 'fratello', 'sorella', 'abita', 'lavora', 'chiama'],
    minKeywordHits: 3,
    usefulVocab: ['la mia famiglia', 'i miei genitori', 'mia madre', 'mio padre', 'ho un fratello / una sorella', 'abita a...'],
    modelAnswerIt: 'La mia famiglia è grande e unita. I miei genitori abitano a Dhaka e mia sorella lavora in una scuola. Mio fratello studia matematica.',
    modelAnswerTr: {
      bn: 'আমার পরিবার বড় ও একতাবদ্ধ। আমার বাবা-মা ঢাকায় থাকেন এবং আমার বোন একটি স্কুলে কাজ করেন। আমার ভাই গণিত পড়ে।',
      en: 'My family is large and close. My parents live in Dhaka and my sister works in a school. My brother studies math.',
    },
  },
  {
    id: 'rw-w-03',
    order: 3,
    category: { bn: 'দৈনন্দিন জীবন', en: 'Daily Routine' },
    title: { bn: '৩. আপনার সকাল বা দৈনন্দিন রুটিন লিখুন', en: '3. Describe Your Daily Routine' },
    prompt: {
      bn: 'ঘুম থেকে ওঠা, নাশতা এবং কাজ/পড়াশোনা নিয়ে ৩টি বাক্য লিখুন (সময়ের উল্লেখসহ: alle...).',
      en: 'Write 3 sentences about waking up, breakfast, and work or study including clock times (alle...).',
    },
    minWords: 18,
    minSentences: 3,
    requiredStructures: [
      { id: 'morning-verb', label: { bn: 'সকালের কাজ (mi sveglio / faccio colazione / esco)', en: 'Routine verb (mi sveglio / faccio colazione / esco)' }, pattern: /\b(sveglio|colazione|esco|prendo|mangio|lavoro|studio)\b/i },
      { id: 'time-marker', label: { bn: 'সময়ের ব্যবহার (alle ... / mattina / sera)', en: 'Time marker (alle ... / mattina / sera)' }, pattern: /\b(alle|all'|mattina|pomeriggio|sera|sempre|poi)\b/i },
      { id: 'connector', label: { bn: 'সংযোজক (e / poi / ma / dopo)', en: 'Connector (e / poi / dopo)' }, pattern: /\b(poi|dopo|e|ma|quindi|perché)\b/i },
    ],
    thematicKeywords: ['sveglio', 'colazione', 'alle', 'mattina', 'lavoro', 'studio', 'poi', 'sera', 'caffè'],
    minKeywordHits: 3,
    usefulVocab: ['Mi sveglio alle...', 'Faccio colazione con...', 'Poi vado a...', 'La sera...', 'Vado a dormire alle...'],
    modelAnswerIt: 'La mattina mi sveglio alle sette. Faccio colazione con pane e tè, poi vado all’università alle otto. La sera studio e riposo.',
    modelAnswerTr: {
      bn: 'সকালে আমি ৭টায় ঘুম থেকে উঠি। রুটি ও চা দিয়ে নাশতা করি, এরপর ৮টায় বিশ্ববিদ্যালয়ে যাই। সন্ধ্যায় পড়ি ও বিশ্রাম নিই।',
      en: 'In the morning I wake up at seven. I have bread and tea for breakfast, then go to university at eight. In the evening I study and rest.',
    },
  },
  {
    id: 'rw-w-04',
    order: 4,
    category: { bn: 'মেসেজ', en: 'Short Message' },
    title: { bn: '৪. বন্ধুকে হোয়াটসঅ্যাপ/এসএমএস বার্তা লিখুন', en: '4. Write a Short Message to a Friend' },
    prompt: {
      bn: 'বন্ধুকে আজ বা আগামীকাল দেখা করার আমন্ত্রণ জানিয়ে ২–৩ বাক্যের একটি ছোট মেসেজ লিখুন।',
      en: 'Write a 2–3 sentence text message inviting a friend to meet today or tomorrow (place & time).',
    },
    minWords: 14,
    minSentences: 2,
    requiredStructures: [
      { id: 'casual-greet', label: { bn: 'বন্ধুসুলভ সম্ভাষণ (Ciao...)', en: 'Casual greeting (Ciao...)' }, pattern: /\b(ciao|ehi|caro|cara)\b/i },
      { id: 'time-or-place', label: { bn: 'দিন ও সময় (oggi / domani / stasera / alle...)', en: 'Day or time (oggi / domani / alle...)' }, pattern: /\b(oggi|domani|stasera|sabato|alle|verso)\b/i },
      { id: 'meet-invite', label: { bn: 'দেখা করার ক্রিয়া (ci vediamo / andiamo / vieni)', en: 'Meeting phrase (ci vediamo / andiamo / vieni)' }, pattern: /\b(vediamo|andiamo|vieni|prendiamo|usciamo|puoi)\b/i },
    ],
    thematicKeywords: ['ciao', 'oggi', 'domani', 'stasera', 'vediamo', 'alle', 'bar', 'pizza', 'caffè', 'a presto'],
    minKeywordHits: 3,
    usefulVocab: ['Ciao Marco!', 'Sei libero oggi?', 'Ci vediamo alle...', 'Prendiamo un caffè?', 'Fammi sapere!'],
    modelAnswerIt: 'Ciao Sara! Sei libera domani pomeriggio? Andiamo a prendere un caffè al bar alle cinque. Fammi sapere!',
    modelAnswerTr: {
      bn: 'হ্যালো সারা! আগামীকাল বিকেলে কি তুমি ফ্রি? চলো ৫টায় ক্যাফেতে এক কাপ কফি খাই। আমাকে জানিও!',
      en: 'Hi Sara! Are you free tomorrow afternoon? Let us grab a coffee at the café at five. Let me know!',
    },
  },
  {
    id: 'rw-w-05',
    order: 5,
    category: { bn: 'ইমেইল', en: 'Basic Email' },
    title: { bn: '৫. শিক্ষক বা অফিসে ভদ্র ইমেইল লিখুন', en: '5. Write a Polite Basic Email' },
    prompt: {
      bn: 'ক্লাসে না আসার কারণ জানিয়ে বা অ্যাপয়েন্টমেন্ট চেয়ে শিক্ষক/অফিসকে একটি ভদ্র ৩–৪ লাইনের ইমেইল লিখুন (সম্ভাষণ ও সমাপ্তিসহ)।',
      en: 'Write a polite 3–4 sentence email to a teacher or office asking for an appointment or explaining an absence, with formal opening and closing.',
    },
    minWords: 18,
    minSentences: 3,
    requiredStructures: [
      { id: 'formal-open', label: { bn: 'ভদ্র সম্ভাষণ (Gentile / Buongiorno...)', en: 'Formal opening (Gentile / Buongiorno...)' }, pattern: /\b(gentile|egregio|buongiorno|buonasera|salve)\b/i },
      { id: 'polite-reason', label: { bn: 'উদ্দেশ্য বা বিনীত অনুরোধ (vorrei / non posso / scusi)', en: 'Purpose/request (vorrei / non posso / scusi)' }, pattern: /\b(vorrei|posso|chiedo|scusi|mi chiamo|appuntamento|lezione)\b/i },
      { id: 'formal-close', label: { bn: 'ইমেইল সমাপ্তি (Cordiali saluti / Grazie)', en: 'Closing (Cordiali saluti / Grazie)' }, pattern: /\b(cordiali saluti|grazie|arrivederci|distinti saluti)\b/i },
    ],
    thematicKeywords: ['buongiorno', 'gentile', 'chiamo', 'domani', 'lezione', 'appuntamento', 'vorrei', 'grazie', 'saluti'],
    minKeywordHits: 3,
    usefulVocab: ['Gentile Professoressa,', 'Mi chiamo...', 'Vorrei fissare...', 'Purtroppo non posso...', 'Cordiali saluti,'],
    modelAnswerIt: 'Buongiorno Professoressa, mi chiamo Tariq. Domani non posso venire a lezione perché ho un appuntamento medico. Grazie mille e cordiali saluti, Tariq.',
    modelAnswerTr: {
      bn: 'শুভ সকাল ম্যাডাম, আমার নাম তারিক। আগামীকাল আমি ক্লাসে আসতে পারব না কারণ আমার ডাক্তারের অ্যাপয়েন্টমেন্ট আছে। ধন্যবাদ ও বিনীত, তারিক।',
      en: 'Good morning Professor, my name is Tariq. Tomorrow I cannot attend class because I have a medical appointment. Many thanks and kind regards, Tariq.',
    },
  },
  {
    id: 'rw-w-06',
    order: 6,
    category: { bn: 'ব্যক্তিগত ফর্ম', en: 'Personal Info Form' },
    title: { bn: '৬. ব্যক্তিগত তথ্য বিবরণী লিখুন', en: '6. Write Complete Personal Info Details' },
    prompt: {
      bn: 'একটি ফর্মের মতো করে পূর্ণ বাক্যে লিখুন: আপনার নাম, জাতীয়তা, জন্মতারিখ, ঠিকানা বা শহর এবং জানা ভাষাগুলো।',
      en: 'Write in complete Italian sentences your full name, nationality, birth month/date, current city, and languages spoken.',
    },
    minWords: 16,
    minSentences: 3,
    requiredStructures: [
      { id: 'id-name', label: { bn: 'নাম (Nome / Mi chiamo)', en: 'Name (Nome / Mi chiamo)' }, pattern: /\b(nome|chiamo|cognome)\b/i },
      { id: 'origin-birth', label: { bn: 'জাতীয়তা/জন্ম (nazionalità / nato / compleanno / sono di)', en: 'Origin/birthday (nazionalità / nato / compleanno / sono)' }, pattern: /\b(nato|nata|compleanno|nazionalità|nazionalita|bengalese|sono)\b/i },
      { id: 'lang-city', label: { bn: 'শহর বা ভাষা (abito / vivo / parlo / città)', en: 'City or language (abito / vivo / parlo)' }, pattern: /\b(abito|vivo|parlo|città|citta|indirizzo)\b/i },
    ],
    thematicKeywords: ['nome', 'chiamo', 'sono', 'nato', 'compleanno', 'abito', 'parlo', 'bengalese', 'italiano'],
    minKeywordHits: 3,
    usefulVocab: ['Il mio nome è...', 'La mia nazionalità è...', 'Il mio compleanno è il...', 'Abito a...', 'Parlo...'],
    modelAnswerIt: 'Mi chiamo Nadia Rahman e sono bengalese. Il mio compleanno è il cinque aprile. Adesso abito a Bologna e parlo bengalese, inglese e italiano.',
    modelAnswerTr: {
      bn: 'আমার নাম নাদিয়া রহমান এবং আমি বাংলাদেশি। আমার জন্মদিন ৫ই এপ্রিল। এখন আমি বোলোনিয়ায় থাকি এবং বাংলা, ইংরেজি ও ইতালিয়ান বলি।',
      en: 'My name is Nadia Rahman and I am Bengali/Bangladeshi. My birthday is April 5th. Now I live in Bologna and speak Bengali, English, and Italian.',
    },
  },
  {
    id: 'rw-w-07',
    order: 7,
    category: { bn: 'শহর', en: 'City Description' },
    title: { bn: '৭. আপনার বর্তমান বা প্রিয় শহর বর্ণনা করুন', en: '7. Describe a City You Like' },
    prompt: {
      bn: 'একটি শহর নিয়ে ৩টি বাক্য লিখুন: এটি কেমন (grande/bella/tranquilla), সেখানে কী কী আছে (c’è / ci sono) এবং কেন পছন্দ করেন।',
      en: 'Write 3 sentences describing a city: its character (bella/grande), what exists there (c’è / ci sono), and why you like it.',
    },
    minWords: 16,
    minSentences: 3,
    requiredStructures: [
      { id: 'city-adj', label: { bn: 'বর্ণনামূলক বিশেষণ (bella / grande / piccola / tranquilla / moderna)', en: 'Descriptive adjective (bella/grande/piccola/viva)' }, pattern: /\b(bella|bello|grande|piccola|tranquilla|viva|moderna|antica)\b/i },
      { id: 'existence', label: { bn: "C'è বা Ci sono এর ব্যবহার", en: "Use of c'è or ci sono" }, pattern: /\b(c'è|c’è|ce|ci sono|ha)\b/i },
      { id: 'opinion', label: { bn: 'পছন্দ প্রকাশ (mi piace / adoro / amo)', en: 'Preference (mi piace / amo)' }, pattern: /\b(piace|adoro|amo|preferisco)\b/i },
    ],
    thematicKeywords: ['città', 'bella', 'grande', 'ci sono', 'parchi', 'musei', 'piace', 'centro', 'stazione'],
    minKeywordHits: 3,
    usefulVocab: ['La città è molto bella.', 'In centro ci sono...', 'C’è un grande parco.', 'Mi piace perché...'],
    modelAnswerIt: 'Firenze è una città antica e molto bella. In centro ci sono molti musei, piazze e buoni ristoranti. Mi piace tantissimo passeggiare vicino al fiume.',
    modelAnswerTr: {
      bn: 'ফ্লোরেন্স একটি প্রাচীন ও খুব সুন্দর শহর। কেন্দ্রে অনেক জাদুঘর, চত্বর ও ভালো রেস্তোরাঁ আছে। নদীর ধারে হাঁটতে আমার খুব ভালো লাগে।',
      en: 'Florence is an ancient and very beautiful city. Downtown there are many museums, squares, and good restaurants. I love walking by the river.',
    },
  },
  {
    id: 'rw-w-08',
    order: 8,
    category: { bn: 'খাবার', en: 'Food & Preferences' },
    title: { bn: '৮. আপনার পছন্দের খাবার ও পানীয় লিখুন', en: '8. Write About Your Food Preferences' },
    prompt: {
      bn: 'আপনি কী খেতে ও পান করতে ভালোবাসেন এবং কী অপছন্দ করেন তা ৩টি বাক্যে লিখুন।',
      en: 'Write 3 sentences about foods and drinks you like or dislike.',
    },
    minWords: 16,
    minSentences: 3,
    requiredStructures: [
      { id: 'like-dislike', label: { bn: 'পছন্দ/অপছন্দ (mi piace / non mi piace / preferisco / adoro)', en: 'Preference (mi piace / preferisco)' }, pattern: /\b(mi piace|mi piacciono|preferisco|adoro|amo|mangio|bevo)\b/i },
      { id: 'food-nouns', label: { bn: 'খাবারের শব্দ (pizza/pasta/riso/pollo/verdure/frutta/acqua/tè)', en: 'Food/drink nouns' }, pattern: /\b(pizza|pasta|riso|pane|pollo|pesce|carne|verdure|frutta|acqua|caffè|caffe|tè|te)\b/i },
      { id: 'negation-or-contrast', label: { bn: 'বাক্য সংযোগ বা না-বোধক (non / ma / invece)', en: 'Contrast or negation (non / ma)' }, pattern: /\b(non|ma|invece|però|anche)\b/i },
    ],
    thematicKeywords: ['mangio', 'bevo', 'piace', 'pizza', 'pasta', 'riso', 'acqua', 'frutta', 'non'],
    minKeywordHits: 3,
    usefulVocab: ['Mi piace molto...', 'Non mangio...', 'La mattina bevo...', 'Il mio piatto preferito è...'],
    modelAnswerIt: 'Il mio piatto preferito è il riso con pollo e spezie. Adoro anche la pizza margherita e la frutta fresca. Non bevo caffè la sera, preferisco il tè.',
    modelAnswerTr: {
      bn: 'আমার প্রিয় খাবার মশলাদার মুরগি-ভাত। আমি মার্গেরিটা পিৎজা ও তাজা ফলও ভালোবাসি। রাতে আমি কফি খাই না, চা পছন্দ করি।',
      en: 'My favorite dish is spiced chicken with rice. I also love Margherita pizza and fresh fruit. In the evening I do not drink coffee, I prefer tea.',
    },
  },
  {
    id: 'rw-w-09',
    order: 9,
    category: { bn: 'পরিকল্পনা', en: 'Weekend Plans' },
    title: { bn: '৯. সপ্তাহান্তের পরিকল্পনা লিখুন', en: '9. Describe Your Weekend Plans' },
    prompt: {
      bn: 'শনিবার এবং রবিবার আপনি কী করবেন তা ৩টি বাক্যে লিখুন (sabato, domenica ও সময় উল্লেখ করে)।',
      en: 'Write 3 sentences describing what you will do on Saturday and Sunday.',
    },
    minWords: 16,
    minSentences: 2,
    requiredStructures: [
      { id: 'weekend-days', label: { bn: 'শনি/রবিবার (sabato / domenica / fine settimana)', en: 'Weekend day words' }, pattern: /\b(sabato|domenica|fine settimana|weekend)\b/i },
      { id: 'action-plan', label: { bn: 'কাজের ক্রিয়া (vado / studio / cucino / riposo / esco)', en: 'Action verbs' }, pattern: /\b(vado|studio|cucino|riposo|esco|vedo|incontro|compro)\b/i },
    ],
    thematicKeywords: ['sabato', 'domenica', 'vado', 'amici', 'casa', 'riposo', 'studio', 'pomeriggio', 'sera'],
    minKeywordHits: 3,
    usefulVocab: ['Sabato mattina vado...', 'Con gli amici...', 'Domenica resto a casa.', 'La sera guardo un film.'],
    modelAnswerIt: 'Sabato mattina faccio la spesa al mercato e pulisco casa. Nel pomeriggio esco con gli amici al parco. Domenica riposo e preparo un pranzo buono.',
    modelAnswerTr: {
      bn: 'শনিবার সকালে আমি বাজারে কেনাকাটা করি ও ঘর পরিষ্কার করি। বিকেলে বন্ধুদের সাথে পার্কে বের হই। রবিবার বিশ্রাম নিই এবং ভালো দুপুরের খাবার রান্না করি।',
      en: 'Saturday morning I shop at the market and clean home. In the afternoon I go out to the park with friends. Sunday I rest and cook a nice lunch.',
    },
  },
  {
    id: 'rw-w-10',
    order: 10,
    category: { bn: 'কেনাকাটা', en: 'Shopping Request' },
    title: { bn: '১০. দোকানে কেনাকাটার সংলাপ বা নোট লিখুন', en: '10. Write a Short Shopping Exchange' },
    prompt: {
      bn: 'আপনি দোকানে একটি পোশাক বা খাবার কিনছেন—কী চান, দাম কত জিজ্ঞাসা ও পেমেন্ট নিয়ে ৩টি বাক্য লিখুন।',
      en: 'Write 3 sentences for buying an item: polite request (Vorrei), asking price (Quanto costa), and paying.',
    },
    minWords: 15,
    minSentences: 3,
    requiredStructures: [
      { id: 'request', label: { bn: 'ভদ্র অনুরোধ (Buongiorno / Vorrei / Cerco)', en: 'Polite request (Buongiorno / Vorrei / Cerco)' }, pattern: /\b(vorrei|cerco|prendo|scusi|buongiorno)\b/i },
      { id: 'price-check', label: { bn: 'দাম প্রশ্ন (Quanto costa / costano / prezzo)', en: 'Asking price (Quanto costa...)' }, pattern: /\b(quanto costa|quanto costano|prezzo|quanto viene)\b/i },
      { id: 'payment', label: { bn: 'পেমেন্ট (pago / carta / contanti / grazie)', en: 'Payment or thanks' }, pattern: /\b(pago|carta|bancomat|contanti|grazie)\b/i },
    ],
    thematicKeywords: ['vorrei', 'quanto', 'costa', 'taglia', 'colore', 'pago', 'carta', 'grazie'],
    minKeywordHits: 3,
    usefulVocab: ['Buongiorno, vorrei...', 'Quanto costa questo?', 'Avete la taglia media?', 'Pago con la carta, grazie.'],
    modelAnswerIt: 'Buongiorno, cerco una camicia bianca in taglia media. Quanto costa questa qui? Perfetto, la prendo e pago con la carta, grazie.',
    modelAnswerTr: {
      bn: 'শুভ সকাল, আমি মিডিয়াম সাইজের একটি সাদা শার্ট খুঁজছি। এটির দাম কত? দারুণ, আমি এটি নিচ্ছি এবং কার্ডে পেমেন্ট করব, ধন্যবাদ।',
      en: 'Good morning, I am looking for a white shirt in size medium. How much is this one? Great, I will take it and pay by card, thanks.',
    },
  },
  {
    id: 'rw-w-11',
    order: 11,
    category: { bn: 'হোটেল বুকিং', en: 'Hotel Message' },
    title: { bn: '১১. হোটেল রুম বুকিংয়ের অনুরোধ লিখুন', en: '11. Write a Hotel Reservation Request' },
    prompt: {
      bn: 'দুই রাতের জন্য একটি সিঙ্গেল/ডাবল রুম চেয়ে, তারিখ ও নাশতা অন্তর্ভুক্ত কিনা জানতে চেয়ে একটি ছোট বার্তা লিখুন।',
      en: 'Write a short booking request for a single or double room, stating dates and asking if breakfast is included.',
    },
    minWords: 16,
    minSentences: 3,
    requiredStructures: [
      { id: 'booking-verb', label: { bn: 'বুকিং অনুরোধ (vorrei prenotare / camera)', en: 'Booking phrase (vorrei prenotare / camera)' }, pattern: /\b(prenotare|camera|singola|doppia|notte|notti)\b/i },
      { id: 'breakfast-or-wifi', label: { bn: 'প্রশ্ন (colazione / prezzo / inclusa / Wi-Fi)', en: 'Question (colazione / prezzo / inclusa)' }, pattern: /\b(colazione|inclusa|prezzo|costa|wi-fi|wifi)\b/i },
      { id: 'closing', label: { bn: 'ধন্যবাদ / শুভেচ্ছা', en: 'Polite closing' }, pattern: /\b(grazie|saluti|buonasera|buongiorno)\b/i },
    ],
    thematicKeywords: ['buongiorno', 'prenotare', 'camera', 'notti', 'colazione', 'inclusa', 'prezzo', 'grazie'],
    minKeywordHits: 3,
    usefulVocab: ['Vorrei prenotare una camera...', 'Per due notti...', 'La colazione è inclusa?', 'Cordiali saluti'],
    modelAnswerIt: 'Buongiorno, vorrei prenotare una camera singola per due notti, dal dieci al dodici ottobre. La colazione è inclusa nel prezzo? Grazie mille, cordiali saluti.',
    modelAnswerTr: {
      bn: 'শুভ সকাল, আমি ১০ থেকে ১২ই অক্টোবর দুই রাতের জন্য একটি সিঙ্গেল রুম বুক করতে চাই। নাশতা কি দামের মধ্যে অন্তর্ভুক্ত? অনেক ধন্যবাদ, বিনীত।',
      en: 'Good morning, I would like to book a single room for two nights, October 10–12. Is breakfast included in the price? Thank you, kind regards.',
    },
  },
  {
    id: 'rw-w-12',
    order: 12,
    category: { bn: 'বাসা ও ঘর', en: 'My Home' },
    title: { bn: '১২. আপনার বাড়ি বা ঘর বর্ণনা করুন', en: '12. Describe Your Home or Room' },
    prompt: {
      bn: 'আপনার বাড়ি বা ফ্ল্যাটে কয়টি ঘর আছে (cucina, bagno, camera) এবং আপনার প্রিয় জায়গা কোনটি তা ৩টি বাক্যে লিখুন।',
      en: 'Write 3 sentences describing the rooms in your house/apartment and your favorite spot.',
    },
    minWords: 16,
    minSentences: 3,
    requiredStructures: [
      { id: 'home-noun', label: { bn: 'বাড়ির শব্দ (casa / appartamento / stanza / camera)', en: 'Home nouns' }, pattern: /\b(casa|appartamento|stanza|camera|cucina|bagno|balcone|salotto)\b/i },
      { id: 'count-or-exists', label: { bn: 'বর্ণনা (ha / ci sono / è grande / luminosa)', en: 'Description (ha / ci sono / è...)' }, pattern: /\b(ha|ci sono|c'è|c’è|grande|piccola|luminosa|comoda)\b/i },
    ],
    thematicKeywords: ['casa', 'appartamento', 'camera', 'cucina', 'bagno', 'balcone', 'luminosa', 'vicino', 'piace'],
    minKeywordHits: 3,
    usefulVocab: ['Abito in un appartamento.', 'Ci sono due camere...', 'La cucina è piccola ma bella.', 'La mia stanza preferita è...'],
    modelAnswerIt: 'Abito in un piccolo appartamento vicino alla stazione. Ha due camere, una cucina luminosa e un bagno. Mi piace molto studiare sul balcone la mattina.',
    modelAnswerTr: {
      bn: 'আমি স্টেশনের কাছে একটি ছোট ফ্ল্যাটে থাকি। এতে দুটি ঘর, একটি আলোকিত রান্নাঘর এবং একটি বাথরুম আছে। সকালে বারান্দায় বসে পড়তে আমার খুব ভালো লাগে।',
      en: 'I live in a small apartment near the station. It has two bedrooms, a bright kitchen, and a bathroom. I really like studying on the balcony in the morning.',
    },
  },
  {
    id: 'rw-w-13',
    order: 13,
    category: { bn: 'ভ্রমণ', en: 'Travel Note' },
    title: { bn: '১৩. ট্রেন বা শহর ভ্রমণের ছোট অনুচ্ছেদ লিখুন', en: '13. Write About a Short Trip' },
    prompt: {
      bn: 'কখন, কোথায়, কীভাবে (in treno / in autobus) এবং কার সাথে বেড়াতে যাচ্ছেন তা ৩টি বাক্যে লিখুন।',
      en: 'Write 3 sentences saying where you are going, how you travel (in treno / in autobus), and with whom.',
    },
    minWords: 16,
    minSentences: 2,
    requiredStructures: [
      { id: 'travel-verb', label: { bn: 'যাত্রা ক্রিয়া (vado / parto / viaggio / visito)', en: 'Travel verb' }, pattern: /\b(vado|andiamo|parto|viaggio|visito|prendo)\b/i },
      { id: 'transport-mode', label: { bn: 'যানবাহন (in treno / in autobus / in aereo / con)', en: 'Transport or companion' }, pattern: /\b(treno|autobus|bus|aereo|macchina|binario|stazione)\b/i },
    ],
    thematicKeywords: ['vado', 'parto', 'treno', 'domani', 'sabato', 'roma', 'venezia', 'milano', 'amici', 'biglietto'],
    minKeywordHits: 3,
    usefulVocab: ['Domani parto per...', 'Prendo il treno alle...', 'Viaggio con...', 'Visito il centro storico.'],
    modelAnswerIt: 'Domani mattina parto per Venezia con due amici. Prendiamo il treno regionale alle nove e arriviamo in centro per pranzo.',
    modelAnswerTr: {
      bn: 'আগামীকাল সকালে আমি দুই বন্ধুর সাথে ভেনিসে যাচ্ছি। আমরা ৯টায় আঞ্চলিক ট্রেন ধরব এবং দুপুরের খাবারের সময় কেন্দ্রে পৌঁছাব।',
      en: 'Tomorrow morning I leave for Venice with two friends. We take the regional train at nine and arrive downtown for lunch.',
    },
  },
  {
    id: 'rw-w-14',
    order: 14,
    category: { bn: 'অ্যাপয়েন্টমেন্ট', en: 'Appointment Message' },
    title: { bn: '১৪. অ্যাপয়েন্টমেন্ট পরিবর্তন বা নিশ্চিতকরণ বার্তা', en: '14. Confirm or Reschedule an Appointment' },
    prompt: {
      bn: 'একটি অ্যাপয়েন্টমেন্টের তারিখ বদলানোর অনুরোধ করে ৩টি ভদ্র বাক্য লিখুন।',
      en: 'Write 3 polite sentences asking to reschedule an appointment to a new day and time.',
    },
    minWords: 16,
    minSentences: 3,
    requiredStructures: [
      { id: 'polite-start', label: { bn: 'ভদ্র শুরু (Buongiorno / Scusi)', en: 'Polite opener' }, pattern: /\b(buongiorno|buonasera|gentile|salve|scusi)\b/i },
      { id: 'appt-action', label: { bn: 'অ্যাপয়েন্টমেন্ট (appuntamento / spostare / confermare / posso)', en: 'Appointment action' }, pattern: /\b(appuntamento|spostare|confermare|disdire|visita|disponibile)\b/i },
      { id: 'new-time', label: { bn: 'নতুন দিন/সময় (lunedì..domenica / domani / alle...)', en: 'Proposed day/time' }, pattern: /\b(lunedì|lunedi|martedì|martedi|mercoledì|mercoledi|giovedì|giovedi|venerdì|venerdi|domani|alle)\b/i },
    ],
    thematicKeywords: ['buongiorno', 'appuntamento', 'spostare', 'posso', 'lavoro', 'giovedì', 'venerdì', 'alle', 'grazie'],
    minKeywordHits: 3,
    usefulVocab: ['Scusi, purtroppo domani non posso.', 'Possiamo spostare l’appuntamento?', 'Va bene giovedì alle dieci?', 'Grazie mille!'],
    modelAnswerIt: 'Buongiorno, mi scusi ma domani mattina lavoro. Possiamo spostare l’appuntamento a venerdì alle dieci e mezza? Grazie mille!',
    modelAnswerTr: {
      bn: 'শুভ সকাল, মাফ করবেন তবে আগামীকাল সকালে আমার কাজ আছে। আমরা কি অ্যাপয়েন্টমেন্ট শুক্রবার সকাল ১০:৩০-এ সরাতে পারি? অনেক ধন্যবাদ!',
      en: 'Good morning, sorry but tomorrow morning I am working. Can we move the appointment to Friday at 10:30? Thank you very much!',
    },
  },
  {
    id: 'rw-w-15',
    order: 15,
    category: { bn: 'ভাষা শেখা', en: 'Study Goals' },
    title: { bn: '১৫. কেন ইতালিয়ান শিখছেন তা নিয়ে অনুচ্ছেদ লিখুন', en: '15. Why Are You Learning Italian?' },
    prompt: {
      bn: 'আপনি কেন ইতালিয়ান শিখছেন (perché...), কীভাবে অনুশীলন করেন এবং আপনার লক্ষ্য কী তা ৩–৪ বাক্যে লিখুন।',
      en: 'Write 3–4 Italian sentences explaining why you are learning Italian, how you practice, and your goal.',
    },
    minWords: 18,
    minSentences: 3,
    requiredStructures: [
      { id: 'reason-perche', label: { bn: 'কারণ (perché / voglio / per lavorare / per studiare)', en: 'Reason clause (perché / per + verb)' }, pattern: /\b(perché|perche|voglio|desidero|per studiare|per lavorare|per vivere)\b/i },
      { id: 'practice-verb', label: { bn: 'অধ্যয়ন (studio / imparo / leggo / ascolto / parlo)', en: 'Study verb (studio / imparo / leggo / ascolto)' }, pattern: /\b(studio|imparo|leggo|ascolto|scrivo|parlo|ripasso)\b/i },
    ],
    thematicKeywords: ['italiano', 'studio', 'imparo', 'perché', 'ogni', 'giorno', 'leggo', 'parlo', 'italia'],
    minKeywordHits: 3,
    usefulVocab: ['Studio italiano perché...', 'Ogni giorno ascolto...', 'Voglio parlare bene...', 'L’italiano è una bella lingua!'],
    modelAnswerIt: 'Studio italiano ogni giorno perché vivo in Italia e voglio parlare con le persone. Ascolto i dialoghi, leggo testi semplici e scrivo frasi nuove.',
    modelAnswerTr: {
      bn: 'আমি প্রতিদিন ইতালিয়ান পড়ি কারণ আমি ইতালিতে থাকি এবং মানুষের সাথে কথা বলতে চাই। আমি সংলাপ শুনি, সহজ পাঠ পড়ি এবং নতুন বাক্য লিখি।',
      en: 'I study Italian every day because I live in Italy and want to speak with people. I listen to dialogues, read simple texts, and write new sentences.',
    },
  },
];

/**
 * Multi-criteria deterministic A1 writing evaluator.
 * Rejects single-keyword inputs, gibberish, or under-length fragments, and checks:
 * 1) Word count threshold + unique word diversity (prevents repeated single-word padding)
 * 2) Sentence count & punctuation (. ! ?)
 * 3) ALL structural clause requirements for the task
 * 4) Minimum thematic Italian vocabulary hits
 */
export function evaluateA1WritingTask(
  task: A1WritingTask,
  rawText: string,
): WritingEvaluationResult {
  const cleaned = rawText.trim();
  const words = cleaned
    .split(/\s+/)
    .map((w) => w.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '').toLowerCase())
    .filter((w) => w.length > 0);

  const uniqueWordCount = new Set(words).size;
  const wordCount = words.length;

  // Count distinct terminated or newline-separated sentences
  const sentenceSegments = cleaned
    .split(/[.!?]+|\n+/)
    .map((s) => s.trim())
    .filter((s) => s.split(/\s+/).filter(Boolean).length >= 2);
  const hasTerminalPunctuation = /[.!?]$/.test(cleaned);
  const sentenceCount = sentenceSegments.length;

  const lower = cleaned.toLowerCase();
  const keywordHits = task.thematicKeywords.filter((kw) =>
    lower.includes(kw.toLowerCase()),
  );

  const wordGateMet = wordCount >= task.minWords && uniqueWordCount >= Math.max(8, Math.floor(task.minWords * 0.6));
  const sentenceGateMet = sentenceCount >= task.minSentences && hasTerminalPunctuation;
  const keywordGateMet = keywordHits.length >= task.minKeywordHits;

  const structuralResults: WritingCriterionResult[] = task.requiredStructures.map((req) => ({
    id: req.id,
    label: req.label,
    met: req.pattern.test(cleaned),
  }));

  const criteria: WritingCriterionResult[] = [
    {
      id: 'word-count',
      label: {
        bn: `ন্যূনতম ${task.minWords}টি শব্দ (আপনার: ${wordCount}টি)`,
        en: `At least ${task.minWords} words (yours: ${wordCount})`,
      },
      met: wordGateMet,
    },
    {
      id: 'sentences',
      label: {
        bn: `কমপক্ষে ${task.minSentences}টি পূর্ণ বাক্য ও যতিচিহ্ন (. ! ?)`,
        en: `At least ${task.minSentences} complete sentences ending with punctuation (. ! ?)`,
      },
      met: sentenceGateMet,
    },
    ...structuralResults,
    {
      id: 'keywords',
      label: {
        bn: `বিষয়ভিত্তিক ইতালিয়ান শব্দ (${keywordHits.length}/${task.minKeywordHits})`,
        en: `Topical Italian vocabulary (${keywordHits.length}/${task.minKeywordHits} required hits)`,
      },
      met: keywordGateMet,
    },
  ];

  const allMet = criteria.every((c) => c.met);
  const passedCount = criteria.filter((c) => c.met).length;

  const feedback: Tr = allMet
    ? {
        bn: 'চমৎকার! আপনার লেখাটি দৈর্ঘ্য, বাক্য গঠন এবং প্রাসঙ্গিক ইতালিয়ান শব্দের সব শর্ত পূরণ করেছে।',
        en: 'Well done! Your writing meets all word-count, sentence-structure, and Italian vocabulary requirements.',
      }
    : {
        bn: `এখনো সব শর্ত পূরণ হয়নি (${passedCount}/${criteria.length})। অনুগ্রহ করে প্রতিটি লাল চিহ্নিত পয়েন্ট দেখে পূর্ণ ইতালিয়ান বাক্য যোগ করুন।`,
        en: `Not quite ready yet (${passedCount}/${criteria.length} checks met). Review the unchecked items below and expand your Italian sentences.`,
      };

  return {
    passed: allMet,
    wordCount,
    sentenceCount,
    uniqueWordCount,
    keywordHits,
    criteria,
    feedback,
  };
}

export const READING_WRITING_THEORY_CONFIG: AcademyTheoryConfig = {
  moduleId: 'reading-writing',
  title: { bn: 'পঠন ও লিখন দক্ষতা (Reading & Writing)', en: 'Reading & Writing Skills' },
  subtitle: {
    bn: '২০টি ব্যবহারিক A1 পাঠ্যাংশ এবং ১৫টি বহু-মানদণ্ডে মূল্যায়িত লিখন অনুশীলন',
    en: '20 short Italian reading passages & 15 multi-criteria guided writing tasks',
  },
  intro: {
    bn: 'ইতালিয়ান পড়তে পারা এবং ছোট স্পষ্ট বার্তা বা ইমেইল লিখতে পারা A1 স্তরের শেষ ধাপ। Study-তে দুটি আলাদা ট্যাব আছে: Reading (২০টি বিজ্ঞপ্তি, প্রোফাইল, এসএমএস, ইমেইল ও সময়সূচি) এবং Writing (১৫টি লেখা—যেখানে শব্দসংখ্যা, পূর্ণ বাক্য, ব্যাকরণ কাঠামো ও মূল শব্দ যাচাই করা হয়)।',
    en: 'Reading practical signs and writing short clear notes completes your A1 foundation. Inside Study, explore two clean tabs: Reading (20 authentic texts with vocabulary glossaries & comprehension checks) and Writing (15 guided writing prompts evaluated on length, complete sentences, grammatical clauses, and Italian vocabulary).',
  },
  highlights: [
    { label: '20 Readings', caption: { bn: 'প্রোফাইল, বিজ্ঞপ্তি, মেনু, এসএমএস ও ইমেইল', en: 'Profiles, flyers, schedules, SMS & emails' } },
    { label: '15 Writings', caption: { bn: 'স্বয়ংক্রিয় বহু-মানদণ্ড যাচাইসহ লিখন অনুশীলন', en: '15 tasks with multi-criteria feedback' } },
    { label: 'Real Rubrics', caption: { bn: 'একটি শব্দে নয়—পূর্ণ বাক্য ও কাঠামোতে মূল্যায়ন', en: 'Checked by length, clauses, punctuation & vocab' } },
  ],
  sections: [
    {
      id: 'rw-reading-tips',
      heading: { bn: '১. দ্রুত পাঠ বোঝা ও লেখার ব্যবহারিক কৌশল', en: '1. Reading & Writing Strategies at CEFR A1' },
      summary: {
        bn: 'অজানা শব্দ থাকলেও কীভাবে মূল অর্থ ধরবেন এবং নির্ভুল ছোট অনুচ্ছেদ লিখবেন।',
        en: 'How to extract key meaning from Italian notices and structure clear A1 paragraphs.',
      },
      rules: [
        {
          id: 'rw-rule-scan',
          title: { bn: 'পড়ার সময় মূল তথ্য স্ক্যান করুন', en: 'Scanning Notices, Emails & Timetables' },
          body: {
            bn: 'বিজ্ঞপ্তি বা ইমেইল পড়ার সময় প্রথমে সময় (alle...), দিন (lunedì..domenica), মূল্য (€...) এবং বিশেষ শব্দ (aperto, chiuso, incluso, entro) খুঁজে বের করুন।',
            en: 'When reading schedules or notices, scan first for clock times ("alle"), days, prices ("€"), and key status words ("aperto", "chiuso", "entro", "incluso").',
          },
          examples: [
            { it: 'Chiuso per manutenzione dalle 15:00.', phoneticBn: 'কিউ-জো পের মা-নু-তেন-ৎসি-ও-নে', phoneticEn: 'KYOO-zoh pehr mah-noo-tehn-TSYOH-neh', tr: { bn: 'রক্ষণাবেক্ষণের জন্য বিকেল ৩টা থেকে বন্ধ।', en: 'Closed for maintenance from 15:00.' } },
          ],
        },
        {
          id: 'rw-rule-write',
          title: { bn: 'পরিচ্ছন্ন A1 ইতালিয়ান লেখার ৩টি ধাপ', en: '3 Steps to Clear A1 Writing' },
          body: {
            bn: 'প্রতিটি ছোট লেখায় (১) উপযুক্ত সম্ভাষণ ("Ciao!" বা "Buongiorno,") ব্যবহার করুন, (২) স্পষ্ট কর্তা+ক্রিয়া রেখে ছোট বাক্যে লিখুন, এবং (৩) যতিচিহ্ন (. ! ?) ও সুন্দর বিদায় দিয়ে শেষ করুন।',
            en: 'In every short note or email: (1) open with a natural greeting, (2) keep sentences short with clear conjugated verbs, and (3) end every sentence with punctuation plus a polite closing.',
          },
          examples: [
            { it: 'Gentile Professoressa, purtroppo oggi non posso venire. Cordiali saluti, Tariq.', phoneticBn: 'জেন-তি-লে প্রো-ফেস-সো-রেস-সা', phoneticEn: 'jehn-TEE-leh proh-fehs-soh-REHS-sah', tr: { bn: 'শ্রদ্ধেয় ম্যাডাম, দুর্ভাগ্যবশত আজ আসতে পারছি না। বিনীত, তারিক।', en: 'Dear Professor, unfortunately today I cannot attend. Kind regards, Tariq.' } },
          ],
        },
      ],
    },
  ],
};

export const A1_READING_WRITING_REQUIRED_IDS: string[] = [
  ...A1_READING_PASSAGES.map((p) => p.id),
  ...A1_WRITING_TASKS.map((w) => w.id),
];

export const A1_READING_WRITING_DRILL_ITEMS: AcademyDrillItem[] = [
  {
    id: 'rw-dr-01',
    drillKind: 'mcq',
    audioIt: 'Chiuso la domenica e giovedì pomeriggio.',
    primaryLabel: 'Closed Thu afternoon & Sun',
    secondaryLabel: 'বৃহস্পতি বিকেল ও রবিবার বন্ধ',
    promptOverride: { bn: 'বিজ্ঞপ্তিতে লেখা "Chiuso la domenica e giovedì pomeriggio" অর্থ কী?', en: 'What does "Chiuso la domenica e giovedì pomeriggio" mean on a sign?' },
    promptIt: 'ORARIO: Chiuso la domenica e giovedì pomeriggio.',
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Closed on Sunday and Thursday afternoon' },
      { id: 'o2', primaryLabel: 'Open only on Thursday afternoon' },
      { id: 'o3', primaryLabel: 'Open 24 hours on Sunday' },
      { id: 'o4', primaryLabel: 'Closed every morning' },
    ],
    cueBn: 'কিউ-জো লা দো-মে-নি-কা',
    cueEn: '"Chiuso" = closed.',
    feedbackDetail: {
      bn: 'chiuso অর্থ বন্ধ; তাই রবিবার এবং বৃহস্পতিবার বিকেলে দোকান বন্ধ।',
      en: '"Chiuso" specifies both Sunday and Thursday afternoon closures.',
    },
  },
  {
    id: 'rw-dr-02',
    drillKind: 'matching',
    audioIt: 'Cordiali saluti, Entro giovedì, Spese incluse, Affittasi',
    primaryLabel: 'Written Terms',
    secondaryLabel: 'লিখিত শব্দ মেলান',
    promptOverride: { bn: 'ইতালিয়ান বিজ্ঞপ্তি ও ইমেইলের শব্দগুলোর সাথে সঠিক অর্থ মেলান:', en: 'Match each common written Italian phrase to its meaning:' },
    matchingPairs: [
      { id: 'rwm1', leftIt: 'Cordiali saluti', rightTr: { bn: 'বিনীত শুভেচ্ছা (ইমেইল সমাপ্তি)', en: 'Kind regards (email closing)' } },
      { id: 'rwm2', leftIt: 'Spese incluse', rightTr: { bn: 'বিল/খরচ অন্তর্ভুক্ত', en: 'Utilities/bills included' } },
      { id: 'rwm3', leftIt: 'Entro venerdì', rightTr: { bn: 'শুক্রবারের মধ্যে (ডেডলাইন)', en: 'By Friday (deadline)' } },
      { id: 'rwm4', leftIt: 'Affittasi camera', rightTr: { bn: 'রুম ভাড়া দেওয়া হবে', en: 'Room for rent' } },
    ],
    cueBn: 'কোর-দিয়া-লি সা-লু-তি / এন-ত্রো',
    cueEn: 'Common words in emails, ads, and announcements.',
    feedbackDetail: {
      bn: 'ইমেইল ও ভাড়ার বিজ্ঞাপন পড়তে এই চারটি শব্দ খুবই কাজে আসে।',
      en: 'High-frequency written expressions across emails and housing ads.',
    },
  },
  {
    id: 'rw-dr-03',
    drillKind: 'sentence-builder',
    audioIt: 'Gentile professoressa, domani non posso venire a lezione.',
    primaryLabel: 'Email Line',
    secondaryLabel: 'ইমেইলের বাক্য',
    promptOverride: { bn: 'শিক্ষককে লেখার জন্য বাক্যটি সাজান: “শ্রদ্ধেয় ম্যাডাম, আগামীকাল আমি ক্লাসে আসতে পারব না।”', en: 'Build the email line: "Dear professor, tomorrow I cannot come to class."' },
    sentenceTokens: ['non', 'Gentile', 'domani', 'venire', 'posso', 'professoressa,', 'a', 'lezione.'],
    acceptedSentences: ['Gentile professoressa, domani non posso venire a lezione.'],
    cueBn: 'জেন-তি-লে প্রো-ফেস-সো-রেস-সা',
    cueEn: 'Gentile <title>, + reason.',
    feedbackDetail: {
      bn: 'আনুষ্ঠানিক ইমেইলের শুরুতে "Gentile..." এবং শেষে "Cordiali saluti" লিখতে হয়।',
      en: '"Gentile..." opens a formal academic/office email politely.',
    },
  },
  {
    id: 'rw-dr-04',
    drillKind: 'fill-blank',
    audioIt: 'La colazione è inclusa nel prezzo.',
    primaryLabel: 'inclusa',
    secondaryLabel: 'স্ত্রীলিঙ্গ একবচন মিল',
    promptOverride: { bn: 'লিঙ্গ অনুযায়ী সঠিক শব্দ বসান: La colazione è ___ nel prezzo.', en: 'Complete agreement: La colazione è ___ nel prezzo.' },
    promptIt: 'La colazione è ___ nel prezzo.',
    explicitOptions: [
      { id: 'o1', primaryLabel: 'inclusa' },
      { id: 'o2', primaryLabel: 'incluso' },
      { id: 'o3', primaryLabel: 'inclusi' },
      { id: 'o4', primaryLabel: 'includere' },
    ],
    cueBn: 'লা কো-লা-ৎসি-ও-নে এ ইন-ক্লু-জা',
    cueEn: '"colazione" is feminine singular, so "-a".',
    feedbackDetail: {
      bn: 'la colazione স্ত্রীলিঙ্গ একবচন, তাই "inclusa" হবে।',
      en: '"la colazione" is feminine singular -> "inclusa".',
    },
  },
  {
    id: 'rw-dr-05',
    drillKind: 'mcq',
    audioIt: 'Confermiamo il Suo appuntamento per mercoledì alle undici.',
    primaryLabel: 'Wednesday at 11:00',
    secondaryLabel: 'বুধবার সকাল ১১টা',
    promptOverride: { bn: 'ইমেইল বাক্যটি পড়ুন—অ্যাপয়েন্টমেন্ট কবে নিশ্চিত করা হয়েছে?', en: 'Read the confirmation line—when is the appointment?' },
    promptIt: 'Confermiamo il Suo appuntamento per mercoledì alle undici.',
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Wednesday at 11:00 AM' },
      { id: 'o2', primaryLabel: 'Tuesday at 11:00 AM' },
      { id: 'o3', primaryLabel: 'Wednesday at 1:00 PM' },
      { id: 'o4', primaryLabel: 'Friday at 10:00 AM' },
    ],
    cueBn: 'মের-কো-লে-দি আল-লে উন-দি-চি',
    cueEn: 'mercoledì = Wednesday; undici = 11.',
    feedbackDetail: {
      bn: 'mercoledì = বুধবার, alle undici = ১১টায়।',
      en: '"mercoledì alle undici" = Wednesday at 11:00.',
    },
  },
  {
    id: 'rw-dr-06',
    drillKind: 'listening',
    audioIt: 'Fatemi sapere entro giovedì!',
    primaryLabel: 'Let me know by Thursday',
    secondaryLabel: 'বৃহস্পতিবারের মধ্যে জানিও',
    promptOverride: { bn: 'আমন্ত্রণপত্রের শেষ লাইনটি শুনুন ও অর্থ বেছে নিন:', en: 'Listen and choose what this invitation note asks:' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Let me know by Thursday' },
      { id: 'o2', primaryLabel: 'Bring food on Thursday' },
      { id: 'o3', primaryLabel: 'The party was canceled Thursday' },
      { id: 'o4', primaryLabel: 'Meet outside on Sunday' },
    ],
    cueBn: 'ফা-তে-মি সা-পে-রে এন-ত্রো জো-ভে-দি',
    cueEn: '"fatemi sapere" = let me know; "entro" = by.',
    feedbackDetail: {
      bn: '"Fatemi sapere entro giovedì" মানে বৃহস্পতিবারের মধ্যে নিশ্চিত করে জানিও।',
      en: 'Useful SMS/invitation closing to ask for an RSVP by a deadline.',
    },
  },
  {
    id: 'rw-dr-07',
    drillKind: 'sentence-builder',
    audioIt: 'Studio italiano perché vivo in Italia.',
    primaryLabel: 'Reason Clause',
    secondaryLabel: 'কারণ যুক্ত বাক্য',
    promptOverride: { bn: '“আমি ইতালিয়ান পড়ি কারণ আমি ইতালিতে থাকি” — বাক্য লিখুন:', en: 'Order: "I study Italian because I live in Italy."' },
    sentenceTokens: ['in', 'Studio', 'Italia.', 'perché', 'italiano', 'vivo'],
    acceptedSentences: ['Studio italiano perché vivo in Italia.'],
    cueBn: 'স্তু-দিও ই-তা-লিয়া-নো পের-কে',
    cueEn: 'Connect verb + "perché" + reason.',
    feedbackDetail: {
      bn: 'কারণ বোঝাতে "perché" ব্যবহার করে সহজ দুই অংশের বাক্য বানান।',
      en: 'Use "perché" cleanly to join reason clauses in writing.',
    },
  },
  {
    id: 'rw-dr-08',
    drillKind: 'mcq',
    audioIt: 'I capi in saldo non possono essere cambiati.',
    primaryLabel: 'Sale items cannot be exchanged',
    secondaryLabel: 'সেলের পণ্য বদলানো যাবে না',
    promptOverride: { bn: 'দোকানের এই লিখিত শর্তের অর্থ কী?', en: 'What does this store sign state?' },
    promptIt: 'I capi acquistati in saldo non possono essere cambiati.',
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Items bought on sale cannot be exchanged' },
      { id: 'o2', primaryLabel: 'All shirts are 50% off today' },
      { id: 'o3', primaryLabel: 'Fitting rooms are upstairs' },
      { id: 'o4', primaryLabel: 'Cash payment gets a discount' },
    ],
    cueBn: 'ইন সাল-দো / নোন পোস-সো-নো এস-সে-রে কাম-বিয়া-তি',
    cueEn: '"non possono essere cambiati" = cannot be exchanged.',
    feedbackDetail: {
      bn: 'সেল (in saldo)-এ কেনা পোশাক সাধারণত ফেরত বা বদলানো যায় না।',
      en: 'Clear store policy forbidding returns/exchanges on sale stock.',
    },
  },
];

function rwq(
  id: string,
  bnPrompt: string,
  enPrompt: string,
  it: string | undefined,
  options: string[],
  answer: number,
  bnExp: string,
  enExp: string,
  audioIt?: string,
  localizedOptions?: { bn: string[]; en: string[] },
): AcademyExamQuestion {
  return {
    id,
    moduleId: 'reading-writing',
    prompt: { bn: bnPrompt, en: enPrompt },
    it,
    audioIt,
    options,
    localizedOptions,
    answer,
    explanation: { bn: bnExp, en: enExp },
  };
}

// 25 exam questions
export const A1_READING_WRITING_EXAM_POOL: AcademyExamQuestion[] = [
  rwq('rwq-01', 'ইতালিয়ানে আনুষ্ঠানিক ইমেইল শুরু করার সবচেয়ে উপযুক্ত সম্ভাষণ কোনটি?', 'Which opening is best for a formal email to a teacher or office?', undefined, ['Gentile Professoressa / Buongiorno,', 'Ehi tu!', 'Ciao ragazzi!', 'Arrivederci subito!'], 0, 'প্রফেসর বা অফিসকে "Gentile..." বা "Buongiorno..." দিয়ে শুরু করতে হয়।', '"Gentile..." or "Buongiorno..." sets a formal polite tone.', 'Gentile Professoressa,'),
  rwq('rwq-02', 'ইমেইলের শেষে “বিনীত শুভেচ্ছা” বোঝাতে কোনটি লিখবেন?', 'Which phrase closes a polite email as "Kind regards"?', undefined, ['Cordiali saluti,', 'Buon appetito!', 'Aperto dalle nove,', 'Spingere qui!'], 0, 'ইমেইল সমাপ্তিতে "Cordiali saluti" বা "Distinti saluti" প্রচলিত।', '"Cordiali saluti" is the standard polite email closing.', 'Cordiali saluti'),
  rwq('rwq-03', 'ভাড়ার বিজ্ঞাপনে "€400 spese incluse" লেখা থাকলে অর্থ কী?', 'In a room ad, what does "€400 spese incluse" mean?', 'Camera €400 al mese, spese incluse.', ['৪০০ ইউরোর মধ্যেই পানি/বিদ্যুৎ/গ্যাস বিল অন্তর্ভুক্ত', 'বিল আলাদাভাবে ৪০০ ইউরো', 'শুধু কক্ষের দরজা আছে', 'জরিমানা দিতে হবে'], 0, '"spese incluse" মানে ইউটিলিটি খরচ ভাড়ার সাথেই অন্তর্ভুক্ত।', '"spese incluse" means utility bills are included in the €400.', undefined, { bn: ['৪০০ ইউরোর মধ্যেই পানি/বিদ্যুৎ/গ্যাস বিল অন্তর্ভুক্ত', 'বিল আলাদাভাবে ৪০০ ইউরো', 'শুধু কক্ষের দরজা আছে', 'জরিমানা দিতে হবে'], en: ['Utilities are included in the €400', 'Bills cost an extra €400', 'No utilities exist', 'Deposit is forbidden'] }),
  rwq('rwq-04', 'পাঠ্যাংশ পড়ুন: "Domani vado in biblioteca perché devo studiare." — কারণ কী?', 'Read: "Domani vado in biblioteca perché devo studiare." Why are they going?', undefined, ['কারণ তাঁকে পড়াশোনা করতে হবে', 'কারণ কফি খেতে হবে', 'কারণ ট্রেন ধরতে হবে', 'কারণ ডাক্তার দেখাতে হবে'], 0, '"perché devo studiare" = কারণ আমাকে পড়তে হবে।', '"perché devo studiare" states the study reason.', 'Domani vado in biblioteca perché devo studiare.', { bn: ['কারণ তাঁকে পড়াশোনা করতে হবে', 'কারণ কফি খেতে হবে', 'কারণ ট্রেন ধরতে হবে', 'কারণ ডাক্তার দেখাতে হবে'], en: ['Because they need to study', 'For a coffee break', 'To catch a train', 'For a doctor visit'] }),
  rwq('rwq-05', '“বৃহস্পতিবারের মধ্যে জানিও” — এটি ইতালিয়ানে কীভাবে লেখা হয়?', 'How do you write "Let me know by Thursday"?', undefined, ['Fammi sapere entro giovedì!', 'Fammi sapere da giovedì!', 'Non sapere mai giovedì!', 'Dopo giovedì!'], 0, 'সময়সীমা বোঝাতে "entro + দিন" (by Thursday) ব্যবহৃত হয়।', 'Use "entro + day" to express a deadline.', 'Fatemi sapere entro giovedì!'),
  rwq('rwq-06', 'বিজ্ঞপ্তি: "Aperto dal lunedì al sabato 9:00–19:00. Chiuso la domenica." — কখন বন্ধ?', 'Read the sign: when is the place closed?', 'Chiuso la domenica.', ['রবিবার সারাদিন', 'সোমবার সকালে', 'শনিবার বিকেলে', 'শুক্রবার রাতে'], 0, 'রবিবার বন্ধ লেখা আছে।', 'Notice states "Chiuso la domenica".', undefined, { bn: ['রবিবার সারাদিন', 'সোমবার সকালে', 'শনিবার বিকেলে', 'শুক্রবার রাতে'], en: ['All day Sunday', 'Monday morning', 'Saturday afternoon', 'Friday night'] }),
  rwq('rwq-07', 'ফর্মে "Luogo e data di nascita" ঘরে কী লিখতে হবে?', 'On a form, what goes under "Luogo e data di nascita"?', 'Luogo e data di nascita', ['জন্মস্থান ও জন্মতারিখ', 'বর্তমান বেতন', 'পছন্দের খাবার', 'ট্রেন নম্বর'], 0, 'luogo = স্থান, data di nascita = জন্মতারিখ।', '"Luogo e data di nascita" means Place and Date of Birth.', undefined, { bn: ['জন্মস্থান ও জন্মতারিখ', 'বর্তমান বেতন', 'পছন্দের খাবার', 'ট্রেন নম্বর'], en: ['Place & date of birth', 'Monthly salary', 'Favorite food', 'Train number'] }),
  rwq('rwq-08', '“এই শব্দটির মানে রক্ষণাবেক্ষণের জন্য বন্ধ” — কোন ইতালিয়ান শব্দটি দেখবেন?', 'Which Italian word on a notice means "maintenance"?', undefined, ['manutenzione', 'colazione', 'scadenza', 'fermata'], 0, '"chiuso per manutenzione" অর্থ রক্ষণাবেক্ষণের জন্য বন্ধ।', '"manutenzione" = maintenance.', 'Chiuso per manutenzione.'),
  rwq('rwq-09', 'বিজ্ঞাপনে "Affittasi appartamento per studenti" অর্থ কী?', 'What does "Affittasi appartamento per studenti" mean?', undefined, ['শিক্ষার্থীদের জন্য ফ্ল্যাট ভাড়া দেওয়া হবে', 'শুধু পর্যটকদের হোটেল', 'বই বিক্রি করা হবে', 'অফিস বন্ধ'], 0, '"Affittasi" মানে ভাড়া দেওয়ার জন্য।', '"Affittasi" means "For rent / To let".', 'Affittasi appartamento per studenti.', { bn: ['শিক্ষার্থীদের জন্য ফ্ল্যাট ভাড়া দেওয়া হবে', 'শুধু পর্যটকদের হোটেল', 'বই বিক্রি করা হবে', 'অফিস বন্ধ'], en: ['Apartment for rent for students', 'Tourist hotel', 'Books for sale', 'Closed office'] }),
  rwq('rwq-10', 'নিজের লেখা শুদ্ধ রাখতে কোনটি সবসময় ঠিক থাকা দরকার?', 'In Italian writing, what makes "La mia città è bell___" correct?', 'La mia città è ___', ['bella', 'bello', 'belli', 'belle'], 0, 'città একটি স্ত্রীলিঙ্গ একবচন শব্দ, তাই বিশেষণ "bella" হবে।', '"città" is feminine singular, requiring "bella".', 'La mia città è bella.'),
  rwq('rwq-11', 'পাঠ্যাংশ: "Il treno parte alle 09:12 e arriva alle 10:56." — যাত্রায় কত সময় লাগে?', 'Read: departs 09:12 and arrives 10:56. How long is the trip?', undefined, ['১ ঘণ্টা ৪৪ মিনিট', '২ ঘণ্টা', '৩০ মিনিট', '৩ ঘণ্টা'], 0, '০৯:১২ থেকে ১০:৫৬ = ১ ঘণ্টা ৪৪ মিনিট।', '09:12 to 10:56 is 1 hour and 44 minutes.', undefined, { bn: ['১ ঘণ্টা ৪৪ মিনিট', '২ ঘণ্টা', '৩০ মিনিট', '৩ ঘণ্টা'], en: ['1 hour 44 minutes', '2 hours', '30 minutes', '3 hours'] }),
  rwq('rwq-12', '“আমি প্রতিদিন সকাল ৭টায় ঘুম থেকে উঠি” — লিখতে কোন ক্রিয়া লাগবে?', 'Which reflexive phrase writes "I wake up at 7"?', undefined, ['Mi sveglio alle sette.', 'Mi chiamo alle sette.', 'Mi sento male alle sette.', 'Mi fermo alle sette.'], 0, 'svegliarsi = ঘুম থেকে ওঠা; "Mi sveglio..."।', '"Mi sveglio" = I wake up.', 'Mi sveglio alle sette.'),
  rwq('rwq-13', 'সুপারমার্কেটের অফার: "€5,90 invece di €7,50" — আপনি কত ইউরো সাশ্রয় করছেন?', 'Offer reads "€5,90 invece di €7,50". How much do you save?', undefined, ['€1,60', '€2,40', '€0,50', '€5,90'], 0, '7,50 − 5,90 = 1,60 ইউরো সাশ্রয়।', '€7.50 minus €5.90 saves €1.60.'),
  rwq('rwq-14', 'ইতালিয়ান ফর্মে "Cognome" বলতে কী বোঝায়?', 'What should you write in the "Cognome" box on a form?', 'Cognome / Nome', ['পারিবারিক শেষ নাম / পদবি (Surname)', 'নামের প্রথম অংশ', 'দেশের নাম', 'পিন কোড'], 0, 'Cognome = Surname / Last name, আর Nome = First name।', '"Cognome" is your family surname; "Nome" is first name.', undefined, { bn: ['পারিবারিক শেষ নাম / পদবি (Surname)', 'নামের প্রথম অংশ', 'দেশের নাম', 'পিন কোড'], en: ['Surname / last name', 'Given first name', 'Country name', 'Postal code'] }),
  rwq('rwq-15', 'হোটেলের নোটিশ: "Check-out entro le 10:30" অর্থ কী?', 'What does "Check-out entro le 10:30" mean?', 'Check-out entro le 10:30', ['সকাল ১০:৩০-এর মধ্যে রুম ছেড়ে দিতে হবে', 'সকাল ১০:৩০-এ পৌঁছাতে হবে', 'সন্ধ্যা পর্যন্ত থাকা যাবে', 'নাশতা ১০:৩০-এ শুরু'], 0, '"entro le 10:30" = ১০:৩০-এর আগে বা মধ্যে।', '"entro le 10:30" means no later than 10:30 AM.', undefined, { bn: ['সকাল ১০:৩০-এর মধ্যে রুম ছেড়ে দিতে হবে', 'সকাল ১০:৩০-এ পৌঁছাতে হবে', 'সন্ধ্যা পর্যন্ত থাকা যাবে', 'নাশতা ১০:৩০-এ শুরু'], en: ['Must check out by 10:30 AM', 'Check in at 10:30', 'Stay until midnight', 'Breakfast starts at 10:30'] }),
  rwq('rwq-16', 'ইমেইলে "Purtroppo domani non posso venire" লিখলে কী বোঝায়?', 'What does "Purtroppo domani non posso venire" communicate?', undefined, ['দুর্ভাগ্যবশত আগামীকাল আমি আসতে পারব না', 'আগামীকাল অবশ্যই আসব', 'ক্লাস খুব সহজ', 'আমি এখনই আসছি'], 0, 'purtroppo = দুর্ভাগ্যবশত; non posso venire = আসতে পারছি না।', '"Purtroppo" = unfortunately; "non posso venire" = I cannot come.', 'Purtroppo domani non posso venire.', { bn: ['দুর্ভাগ্যবশত আগামীকাল আমি আসতে পারব না', 'আগামীকাল অবশ্যই আসব', 'ক্লাস খুব সহজ', 'আমি এখনই আসছি'], en: ['Unfortunately tomorrow I cannot come', 'I will definitely come', 'The class is easy', 'I am coming now'] }),
  rwq('rwq-17', 'বাক্য শুদ্ধতা যাচাই: “আমার দুইজন ভাই ও একজন বোন আছে” — সঠিক বানান কোনটি?', 'Which written sentence is grammatically accurate?', undefined, ['Ho due fratelli e una sorella.', 'Ho due fratello e una sorelle.', 'Sono due fratelli e uno sorella.', 'Ho due fratella e una sorello.'], 0, 'fratello → বহুবচন fratelli; বোন একবচন → una sorella।', 'Masculine plural "due fratelli" + feminine singular "una sorella".', 'Ho due fratelli e una sorella.'),
  rwq('rwq-18', 'পড়ার অংশ: "In estate vado al mare, mentre in inverno preferisco restare a casa." — শীতে লেখক কী পছন্দ করেন?', 'Read: what does the author prefer in winter?', undefined, ['বাসায় থাকতে পছন্দ করেন', 'সমুদ্রে সাঁতার কাটতে', 'অফিসে কাজ করতে', 'ট্রেন চালাতে'], 0, '"in inverno preferisco restare a casa" = শীতে বাসায় থাকতে পছন্দ করি।', 'In winter they prefer staying at home.', undefined, { bn: ['বাসায় থাকতে পছন্দ করেন', 'সমুদ্রে সাঁতার কাটতে', 'অফিসে কাজ করতে', 'ট্রেন চালাতে'], en: ['Prefer staying at home', 'Swimming in the sea', 'Working overtime', 'Driving trains'] }),
  rwq('rwq-19', '“সবুজ পাস্তা বা সবজি স্যুপ — পছন্দমতো একটি” বোঝাতে মেনুতে কী লেখা থাকে?', 'On an Italian menu, what means "your choice of"?', undefined, ['a scelta', 'in ritardo', 'fuori servizio', 'di turno'], 0, '"a scelta" অর্থ নিজের পছন্দ অনুযায়ী।', '"a scelta" = your choice of.', 'Primo piatto a scelta.'),
  rwq('rwq-20', 'লিখন অনুশীলন: কোন বাক্যে প্রিপোজিশনের ব্যবহার সম্পূর্ণ শুদ্ধ?', 'Which written sentence uses the city preposition correctly?', undefined, ['Vivo a Bologna e vado in biblioteca.', 'Vivo in Bologna e vado a biblioteca.', 'Vivo da Bologna e vado su biblioteca.', 'Vivo su Bologna e vado per biblioteca.'], 0, 'শহরের আগে "a" (a Bologna) এবং স্থানের সাধারণ ধরনে "in biblioteca" বসে।', 'Cities use "a" ("a Bologna"); library takes "in biblioteca".', 'Vivo a Bologna e vado in biblioteca.'),
  rwq('rwq-21', 'এসএমএস: "Arrivo tra dieci minuti, aspettami davanti all’ingresso!" — বার্তাটি কী বলছে?', 'SMS: "Arrivo tra dieci minuti, aspettami davanti all’ingresso!" What should the reader do?', undefined, ['প্রবেশপথের সামনে ১০ মিনিট অপেক্ষা করতে', 'বাড়ি ফিরে যেতে', 'বাস ধরে চলে যেতে', 'পুলিশে কল করতে'], 0, '"davanti all’ingresso" = প্রবেশপথের সামনে।', 'Wait in front of the entrance for ten minutes.', undefined, { bn: ['প্রবেশপথের সামনে ১০ মিনিট অপেক্ষা করতে', 'বাড়ি ফিরে যেতে', 'বাস ধরে চলে যেতে', 'পুলিশে কল করতে'], en: ['Wait by the entrance for 10 minutes', 'Go back home', 'Catch the next bus', 'Call the police'] }),
  rwq('rwq-22', 'রসিদের অর্থ: "Totale: €14,50 — Pagamento con Bancomat" — কীভাবে পেমেন্ট করা হয়েছে?', 'Receipt reads "Pagamento con Bancomat". How was it paid?', undefined, ['ডেবিট কার্ড দিয়ে', 'নগদ কয়েন দিয়ে', 'ভাউচার দিয়ে', 'বাকি রেখে'], 0, 'ইতালিতে ডেবিট কার্ড সিস্টেমকে "Bancomat" বলা হয়।', 'Bancomat = debit card payment.', undefined, { bn: ['ডেবিট কার্ড দিয়ে', 'নগদ কয়েন দিয়ে', 'ভাউচার দিয়ে', 'বাকি রেখে'], en: ['By debit card', 'In cash coins', 'With a voucher', 'Unpaid'] }),
  rwq('rwq-23', 'কোন বাক্যটি একটি সম্পূর্ণ ও যথাযথ A1 সমাপ্তি চিহ্নসহ লিখিত বাক্য?', 'Which option is a complete, properly punctuated Italian sentence?', undefined, ['Ciao! Mi chiamo Kabir e studio italiano a Roma.', 'Ciao kabir studio', 'Roma italiano perché', 'Abito a'], 0, 'সম্ভাষণ, কর্তা, ক্রিয়া, যতিচিহ্নসহ এটি একটি পূর্ণাঙ্গ বাক্য।', 'Contains greeting, complete subject+verb clauses, and proper punctuation.', 'Ciao! Mi chiamo Kabir e studio italiano a Roma.'),
  rwq('rwq-24', 'ক্যাম্পাস নোটিশ: "Le lezioni riprendono lunedì 7 settembre" — এর অর্থ কী?', 'Notice: "Le lezioni riprendono lunedì 7 settembre." What happens on Sept 7?', undefined, ['ক্লাস আবার শুরু হবে', 'পরীক্ষা বাতিল হবে', 'ভবন ভেঙে ফেলা হবে', 'গ্রীষ্ম ছুটি শুরু'], 0, '"riprendono" অর্থ পুনরায় শুরু হয়।', '"riprendono" means classes resume.', 'Le lezioni riprendono lunedì 7 settembre.', { bn: ['ক্লাস আবার শুরু হবে', 'পরীক্ষা বাতিল হবে', 'ভবন ভেঙে ফেলা হবে', 'গ্রীষ্ম ছুটি শুরু'], en: ['Classes resume', 'Exams are canceled', 'Building closes', 'Summer holiday starts'] }),
  rwq('rwq-25', '“পাপড়ি/ভাজা রুটি ও ফলের জ্যাম”—সহজ নাশতা বোঝাতে কোন বানানটি শুদ্ধ?', 'Which Italian breakfast sentence is spelled accurately?', undefined, ['Prendo pane e marmellata con un tè caldo.', 'Prendo panno e mermelata con un te caldi.', 'Prendo pani e marmellate con una tè.', 'Prendo pane e marmelata con il tè calda.'], 0, 'un tè caldo (পুংলিঙ্গ একবচন), pane e marmellata (শুদ্ধ বানান)।', 'Accurate spelling and masculine singular agreement: "un tè caldo".', 'Prendo pane e marmellata con un tè caldo.'),
];
