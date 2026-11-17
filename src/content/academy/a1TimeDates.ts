import type {
  AcademyDrillItem,
  AcademyExamQuestion,
  AcademyTheoryConfig,
} from './types';
import type { Tr } from '../types';

export type TimeDateCategoryId =
  | 'telling-time'
  | 'days-parts'
  | 'months-seasons'
  | 'dates-birthdays'
  | 'relative-time'
  | 'schedules-hours';

export interface A1TimeDateItem {
  id: string;
  it: string;
  subLabel: string;
  category: TimeDateCategoryId;
  categoryLabel: Tr;
  meaning: Tr;
  phoneticBn: string;
  phoneticEn: string;
  exampleIt: string;
  exampleTr: Tr;
  note?: Tr;
}

export interface A1TimeDialogueLine {
  speaker: string;
  it: string;
  tr: Tr;
}

export interface A1TimeDialogue {
  id: string;
  title: Tr;
  context: Tr;
  lines: A1TimeDialogueLine[];
}

export const A1_TIME_DATE_CATEGORIES: { id: TimeDateCategoryId; title: Tr; subtitle: Tr }[] = [
  {
    id: 'telling-time',
    title: { bn: '১. ঘড়ির সময় বলা (Telling Time)', en: '1. Asking & Telling the Time (20 Items)' },
    subtitle: {
      bn: "সময় বলা: Che ora è?, È l'una, Sono le due, e mezza, meno un quarto, mezzogiorno",
      en: 'Exact hours, half hours, quarters, morning/evening & 24h clock',
    },
  },
  {
    id: 'days-parts',
    title: { bn: '২. সপ্তাহের দিন ও দিনের অংশ (Days & Parts of Day)', en: '2. Days of the Week & Parts of Day (14 Items)' },
    subtitle: {
      bn: 'lunedì থেকে domenica পর্যন্ত সপ্তাহের ৭ দিন ও সকাল-রাত',
      en: 'Monday through Sunday plus mattina, pomeriggio, sera, notte',
    },
  },
  {
    id: 'months-seasons',
    title: { bn: '৩. মাস ও ঋতু (Months & Seasons)', en: '3. All 12 Months & 4 Seasons (16 Items)' },
    subtitle: {
      bn: 'gennaio–dicembre এবং primavera, estate, autunno, inverno',
      en: 'Calendar months and seasonal weather/holiday context',
    },
  },
  {
    id: 'dates-birthdays',
    title: { bn: '৪. পূর্ণ তারিখ ও জন্মদিন (Full Dates & Birthdays)', en: '4. Writing Dates, Years & Birthdays (10 Items)' },
    subtitle: {
      bn: 'il + সংখ্যা + মাস (ব্যতিক্রম: il primo) ও জন্মদিনের প্রশ্ন-উত্তর',
      en: 'Che giorno è oggi?, Il primo maggio, Quando sei nato?',
    },
  },
  {
    id: 'relative-time',
    title: { bn: '৫. আপেক্ষিক সময় (Relative Time Expressions)', en: '5. Relative Time: Today, Tomorrow & Streaks (12 Items)' },
    subtitle: {
      bn: 'সময়ের শব্দ: oggi, ieri, domani, dopodomani, scorso, prossimo, fa, tra',
      en: 'Navigating past, present, and upcoming days or weeks at A1',
    },
  },
  {
    id: 'schedules-hours',
    title: { bn: '৬. সময়সূচি ও খোলার সময় (Schedules & Opening Hours)', en: '6. Schedules, Opening Hours & Time Phrases (10 Items)' },
    subtitle: {
      bn: 'খোলার সময়: dalle... alle..., aperto, chiuso, puntuale, in ritardo, in anticipo',
      en: 'Real-world shop, train, office, and appointment time language',
    },
  },
];

function td(
  id: string,
  category: TimeDateCategoryId,
  categoryLabel: Tr,
  it: string,
  subLabel: string,
  bn: string,
  en: string,
  phoneticBn: string,
  phoneticEn: string,
  exampleIt: string,
  exBn: string,
  exEn: string,
  note?: Tr,
): A1TimeDateItem {
  return {
    id,
    category,
    categoryLabel,
    it,
    subLabel,
    meaning: { bn, en },
    phoneticBn,
    phoneticEn,
    exampleIt,
    exampleTr: { bn: exBn, en: exEn },
    note,
  };
}

// 82 structured time & date items (>= 80 required)
export const A1_TIME_DATES_ITEMS: A1TimeDateItem[] = [
  // 1. Telling Time (20)
  td('td-t-01', 'telling-time', { bn: 'সময় জিজ্ঞাসা', en: 'Asking Time' }, 'Che ora è? / Che ore sono?', 'Polite & common', 'কয়টা বাজে?', 'What time is it?', 'কে ও-রা এ / কে ও-রে সো-নো', 'keh OH-rah EH / keh OH-reh SOH-noh', 'Scusi, che ore sono adesso?', 'মাফ করবেন, এখন কয়টা বাজে?', 'Excuse me, what time is it now?', {
    bn: 'Che ora è? (একবচন) এবং Che ore sono? (বহুবচন)—দুটোই সমানভাবে প্রচলিত।',
    en: 'Both "Che ora è?" and "Che ore sono?" are completely natural everywhere in Italy.',
  }),
  td('td-t-02', 'telling-time', { bn: '১টা বাজলে', en: '1:00 Singular' }, "È l'una.", '1:00 (singular)', 'এখন ১টা বাজে।', 'It is 1:00.', 'এ লু-না', 'eh LOO-nah', "È l'una del pomeriggio, andiamo a pranzo.", 'দুপুর ১টা বাজে, চলো দুপুরের খাবার খাই।', 'It is 1:00 PM, let us go have lunch.', {
    bn: '১টা, দুপুর ১২টা (mezzogiorno) এবং রাত ১২টা (mezzanotte) হলে "È..." বসে; বাকি সব ঘণ্টায় "Sono le..."।',
    en: 'Use singular "È..." for 1:00, noon, and midnight; use plural "Sono le..." for all other hours.',
  }),
  td('td-t-03', 'telling-time', { bn: 'পূর্ণ ঘণ্টা', en: '2:00' }, 'Sono le due.', '2:00 (plural)', 'এখন ২টা বাজে।', 'It is 2:00.', 'সো-নো লে দু-এ', 'SOH-noh leh DOO-eh', 'La riunione inizia quando sono le due.', 'দুপুর ২টা বাজলে মিটিং শুরু হয়।', 'The meeting starts when it is two o clock.'),
  td('td-t-04', 'telling-time', { bn: 'নির্দিষ্ট সময়', en: 'At what time' }, 'A che ora?', 'Event time question', 'কয়টার সময়?', 'At what time?', 'আ কে ও-রা', 'ah keh OH-rah', 'A che ora parte il treno per Roma?', 'রোমের ট্রেন কয়টায় ছাড়ে?', 'At what time does the train to Rome leave?'),
  td('td-t-05', 'telling-time', { bn: '১টায়', en: 'At 1:00' }, "All'una", '1:00 target time', '১:০০ টায়', 'At 1:00', 'আল-লু-না', 'ahl-LOO-nah', "L'appuntamento dal medico è all'una.", 'ডাক্তারের অ্যাপয়েন্টমেন্ট ১টায়।', 'The doctor appointment is at one o clock.'),
  td('td-t-06', 'telling-time', { bn: 'বাকি ঘণ্টায়', en: 'At 3:00 / 8:00' }, 'Alle tre / Alle otto', 'alle + hour', '৩টায় / ৮টায়', 'At 3:00 / At 8:00', 'আল-লে ত্রে / আল-লে অৎ-তো', 'ahl-leh TREH / ahl-leh OHT-toh', 'La lezione comincia alle nove in punto.', 'ক্লাস ঠিক ৯টায় শুরু হয়।', 'The lesson begins at nine o clock sharp.'),
  td('td-t-07', 'telling-time', { bn: 'মিনিট যোগ', en: 'Minutes Past' }, 'Sono le quattro e dieci.', '4:10', '৪টা ১০ বাজে।', 'It is 4:10.', 'সো-নো লে কুয়াত-ত্রো এ দিয়ে-চি', 'SOH-noh leh KWAHT-troh eh DYEH-chee', 'Sono le quattro e dieci, prendo un tè.', '৪টা ১০ বাজে, আমি এক কাপ চা নেব।', 'It is 4:10, I will take a tea.'),
  td('td-t-08', 'telling-time', { bn: 'সোয়া', en: 'Quarter Past' }, 'Sono le cinque e un quarto.', '5:15', '৫টা ১৫ (সোয়া পাঁচটা) বাজে।', 'It is quarter past five (5:15).', 'সো-নো লে চিন-কুয়ে এ উন কুয়ার-তো', 'SOH-noh leh CHEEN-kweh eh oon KWAHR-toh', 'Il negozio apre alle cinque e un quarto.', 'দোকান ৫টা ১৫-তে খোলে।', 'The shop opens at quarter past five.'),
  td('td-t-09', 'telling-time', { bn: 'সাড়ে', en: 'Half Past' }, 'Sono le sei e mezza.', '6:30', '৬টা ৩০ (সাড়ে ছয়টা) বাজে।', 'It is half past six (6:30).', 'সো-নো লে সেই এ মেজ-জা', 'SOH-noh leh SEH-ee eh MEHD-zah', 'Torno a casa verso le sei e mezza.', 'আমি সন্ধ্যা সাড়ে ছয়টার দিকে বাড়ি ফিরি।', 'I come home around half past six.', {
    bn: '"e mezza" এবং "e mezzo" দুটোই শুদ্ধ; ইতালিতে "e mezza" বেশি শোনা যায়।',
    en: 'Both "e mezza" and "e mezzo" are grammatically accepted.',
  }),
  td('td-t-10', 'telling-time', { bn: 'পৌনে', en: 'Quarter To' }, 'Sono le sette meno un quarto.', '6:45', '৬টা ৪৫ (পৌনে সাতটা) বাজে।', 'It is quarter to seven (6:45).', 'সো-নো লে সেৎ-তে মে-নো উন কুয়ার-তো', 'SOH-noh leh SEHT-teh MEH-noh oon KWAHR-toh', 'Sono le sette meno un quarto di mattina.', 'সকাল ৬টা ৪৫ বাজে।', 'It is quarter to seven in the morning.'),
  td('td-t-11', 'telling-time', { bn: 'বাকি মিনিট', en: 'Minutes To' }, 'Sono le otto meno dieci.', '7:50', '৭টা ৫০ (আটটা বাজতে দশ মিনিট বাকি)।', 'It is ten to eight (7:50).', 'সো-নো লে অৎ-তো মে-নো দিয়ে-চি', 'SOH-noh leh OHT-toh MEH-noh DYEH-chee', 'Sbrigati! Sono le otto meno dieci!', 'তাড়াতাড়ি করো! ৭টা ৫০ বাজে!', 'Hurry up! It is ten to eight!'),
  td('td-t-12', 'telling-time', { bn: 'দুপুর ১২টা', en: 'Noon' }, 'È mezzogiorno.', '12:00 PM', 'দুপুর ১২টা (মধ্যাহ্ন)।', 'It is noon (12:00 PM).', 'এ মেজ-জো-জোর-নো', 'eh mehd-zoh-JOR-noh', 'A mezzogiorno chiudono molti uffici.', 'দুপুর ১২টায় অনেক অফিস বন্ধ হয়।', 'At noon many offices close.'),
  td('td-t-13', 'telling-time', { bn: 'রাত ১২টা', en: 'Midnight' }, 'È mezzanotte.', '12:00 AM', 'রাত ১২টা (মধ্যরাত)।', 'It is midnight (12:00 AM).', 'এ মেজ-জা-নৎ-তে', 'eh mehd-zah-NOHT-teh', 'Il film finisce dopo mezzanotte.', 'সিনেমাটি মধ্যরাতের পরে শেষ হয়।', 'The movie finishes after midnight.'),
  td('td-t-14', 'telling-time', { bn: 'সকাল', en: 'In the morning (AM)' }, 'di mattina', 'AM time phrase', 'সকালে / সকালের সময়', 'in the morning (AM)', 'দি মাৎ-তি-না', 'dee maht-TEE-nah', 'Faccio colazione alle sette di mattina.', 'আমি সকাল ৭টায় নাশতা করি।', 'I have breakfast at 7 in the morning.'),
  td('td-t-15', 'telling-time', { bn: 'বিকেল', en: 'In the afternoon' }, 'del pomeriggio', 'PM afternoon phrase', 'দুপুর/বিকেলে', 'in the afternoon (PM)', 'দেল পো-মে-রিজ-জো', 'dehl poh-meh-REEJ-joh', 'Ho lezione alle tre del pomeriggio.', 'বিকেল ৩টায় আমার ক্লাস আছে।', 'I have a lesson at 3 in the afternoon.'),
  td('td-t-16', 'telling-time', { bn: 'সন্ধ্যা ও রাত', en: 'Evening & Night' }, 'di sera / di notte', 'Evening / Night', 'সন্ধ্যায় / রাতে', 'in the evening / at night', 'দি সে-রা / দি নৎ-তে', 'dee SEH-rah / dee NOHT-teh', 'Ceniamo sempre alle otto di sera.', 'আমরা সবসময় রাত ৮টায় রাতের খাবার খাই।', 'We always have dinner at 8 in the evening.'),
  td('td-t-17', 'telling-time', { bn: '২৪ ঘণ্টা ঘড়ি', en: '24-Hour Clock' }, 'Sono le sedici e trenta.', '16:30 (24h clock)', '১৬:৩০ (বিকেল সাড়ে ৪টা)।', 'It is 16:30 (4:30 PM).', 'সো-নো লে সে-দি-চি এ ত্রেন-তা', 'SOH-noh leh SEH-dee-chee eh TREHN-tah', 'Il treno parte alle diciotto e quarantacinque.', 'ট্রেন ১৮:৪৫-এ (সন্ধ্যা ৬:৪৫) ছাড়ে।', 'The train departs at 18:45 (6:45 PM).'),
  td('td-t-18', 'telling-time', { bn: 'ঠিক সময়', en: 'Sharp / On the dot' }, 'in punto', 'Exact hour', 'ঠিক কাঁটায় কাঁটায়', 'sharp / on the dot', 'ইন পুন-তো', 'een POON-toh', 'La banca apre alle nove in punto.', 'ব্যাংক ঠিক ৯টায় খোলে।', 'The bank opens at nine sharp.'),
  td('td-t-19', 'telling-time', { bn: 'প্রায়', en: 'Around / About' }, 'verso le...', 'Approximate hour', 'প্রায় ...টার দিকে', 'around / about...', 'ভের-সো লে', 'VEHR-soh leh', 'Arrivo a casa verso le sette.', 'আমি প্রায় ৭টার দিকে বাড়ি পৌঁছাব।', 'I arrive home around seven o clock.'),
  td('td-t-20', 'telling-time', { bn: 'সময়ের একক', en: 'Hour, Minute, Second' }, "l'ora / il minuto / il secondo", 'Time units', 'ঘণ্টা / মিনিট / সেকেন্ড', 'the hour / minute / second', 'লো-রা / ইল মি-নু-তো / ইল সে-কোন-দো', 'LOH-rah / eel mee-NOO-toh / eel seh-KOHN-doh', 'Aspetta cinque minuti, per favore.', 'দয়া করে পাঁচ মিনিট অপেক্ষা করুন।', 'Wait five minutes, please.'),

  // 2. Days & Parts of Day (14)
  td('td-d-01', 'days-parts', { bn: 'সোমবার', en: 'Monday' }, 'lunedì', 'Day 1 (m.)', 'সোমবার', 'Monday', 'লু-নে-দি', 'loo-neh-DEE', 'Lunedì inizio il nuovo corso di italiano.', 'সোমবার আমি নতুন ইতালিয়ান কোর্স শুরু করছি।', 'On Monday I start the new Italian course.', {
    bn: 'ইতালিতে সপ্তাহের দিনগুলো সাধারণত ছোট হাতের অক্ষরে লেখা হয় এবং দিন বোঝাতে কোনো প্রিপোজিশন ছাড়াই বসে (Lunedì vado...)।',
    en: 'Italian days of the week are lowercase and do not take a preposition when referring to a single day.',
  }),
  td('td-d-02', 'days-parts', { bn: 'মঙ্গলবার', en: 'Tuesday' }, 'martedì', 'Day 2 (m.)', 'মঙ্গলবার', 'Tuesday', 'মার-তে-দি', 'mahr-teh-DEE', 'Martedì ho una visita medica.', 'মঙ্গলবার আমার ডাক্তার দেখানো আছে।', 'On Tuesday I have a medical visit.'),
  td('td-d-03', 'days-parts', { bn: 'বুধবার', en: 'Wednesday' }, 'mercoledì', 'Day 3 (m.)', 'বুধবার', 'Wednesday', 'মের-কো-লে-দি', 'mehr-koh-leh-DEE', 'Mercoledì facciamo la spesa al mercato.', 'বুধবার আমরা বাজারে কেনাকাটা করি।', 'On Wednesday we shop at the market.'),
  td('td-d-04', 'days-parts', { bn: 'বৃহস্পতিবার', en: 'Thursday' }, 'giovedì', 'Day 4 (m.)', 'বৃহস্পতিবার', 'Thursday', 'জো-ভে-দি', 'joh-veh-DEE', 'Giovedì sera ceno con gli amici.', 'বৃহস্পতিবার সন্ধ্যায় আমি বন্ধুদের সাথে রাতের খাবার খাই।', 'On Thursday evening I have dinner with friends.'),
  td('td-d-05', 'days-parts', { bn: 'শুক্রবার', en: 'Friday' }, 'venerdì', 'Day 5 (m.)', 'শুক্রবার', 'Friday', 'ভে-নের-দি', 'veh-nehr-DEE', 'Venerdì finiamo di lavorare alle cinque.', 'শুক্রবার আমরা ৫টায় কাজ শেষ করি।', 'On Friday we finish working at five.'),
  td('td-d-06', 'days-parts', { bn: 'শনিবার', en: 'Saturday' }, 'sabato', 'Day 6 (m.)', 'শনিবার', 'Saturday', 'সা-বা-তো', 'SAH-bah-toh', 'Il sabato mattina vado in palestra.', 'প্রতি শনিবার সকালে আমি জিমে যাই।', 'On Saturdays (every Saturday morning) I go to the gym.', {
    bn: '"il + দিন" মানে প্রতি সপ্তাহে ওই দিনে (every Saturday)।',
    en: 'Adding "il" before a day (il sabato) means "every Saturday / on Saturdays".',
  }),
  td('td-d-07', 'days-parts', { bn: 'রবিবার', en: 'Sunday' }, 'domenica', 'Day 7 (f.)', 'রবিবার', 'Sunday', 'দো-মে-নি-কা', 'doh-MEH-nee-kah', 'La domenica pranziamo in famiglia.', 'প্রতি রবিবার আমরা পরিবারের সাথে দুপুরের খাবার খাই।', 'On Sundays we have lunch as a family.', {
    bn: 'সপ্তাহের ৬ দিন পুংলিঙ্গ (il lunedì), কেবল domenica স্ত্রীলিঙ্গ (la domenica)।',
    en: 'Monday–Saturday are masculine (il); domenica is the only feminine day (la domenica).',
  }),
  td('td-d-08', 'days-parts', { bn: 'সাপ্তাহিক ছুটি', en: 'Weekend' }, 'il fine settimana / il weekend', 'Sat & Sun', 'সাপ্তাহিক ছুটি (উইকএন্ড)', 'the weekend', 'ইল ফি-নে সেৎ-তি-মা-না', 'eel FEE-neh seht-tee-MAH-nah', 'Cosa fai nel fine settimana?', 'উইকএন্ডে তুমি কী করছ?', 'What are you doing this weekend?'),
  td('td-d-09', 'days-parts', { bn: 'কাজের দিন', en: 'Weekday' }, 'il giorno feriale', 'Working day', 'কাজের দিন / কর্মদিবস', 'the weekday / working day', 'ইল জোর-নো ফে-রিয়া-লে', 'eel JOR-noh feh-RYAH-leh', 'L’ufficio è aperto nei giorni feriali.', 'অফিসটি কাজের দিনগুলোতে খোলা থাকে।', 'The office is open on weekdays.'),
  td('td-d-10', 'days-parts', { bn: 'ভোর ও সকাল', en: 'Dawn & Morning' }, "l'alba / la mattina", 'Early day', 'ভোর / সকাল', 'the dawn / the morning', 'লাল-বা / লা মাৎ-তি-না', 'LAHL-bah / lah maht-TEE-nah', 'Mi sveglio presto la mattina.', 'আমি সকালে তাড়াতাড়ি ঘুম থেকে উঠি।', 'I wake up early in the morning.'),
  td('td-d-11', 'days-parts', { bn: 'বিকেল', en: 'Afternoon' }, 'il pomeriggio', 'Mid-day to 5 PM', 'বিকেল', 'the afternoon', 'ইল পো-মে-রিজ-জো', 'eel poh-meh-REEJ-joh', 'Nel pomeriggio studio in biblioteca.', 'বিকেলে আমি লাইব্রেরিতে পড়াশোনা করি।', 'In the afternoon I study in the library.'),
  td('td-d-12', 'days-parts', { bn: 'সন্ধ্যা', en: 'Evening' }, 'la sera', 'Early night', 'সন্ধ্যা', 'the evening', 'লা সে-রা', 'lah SEH-rah', 'Questa sera usciamo a mangiare una pizza.', 'আজ সন্ধ্যায় আমরা পিৎজা খেতে বের হব।', 'Tonight we are going out to eat pizza.'),
  td('td-d-13', 'days-parts', { bn: 'রাত', en: 'Night' }, 'la notte', 'Late night', 'রাত', 'the night', 'লা নৎ-তে', 'lah NOHT-teh', 'Buonanotte, dormi bene!', 'শুভ রাত্রি, ভালো ঘুমাও!', 'Good night, sleep well!'),
  td('td-d-14', 'days-parts', { bn: 'সপ্তাহ ও দিন', en: 'Day & Week' }, 'il giorno / la settimana', 'Calendar basics', 'দিন / সপ্তাহ', 'the day / the week', 'ইল জোর-নো / লা সেৎ-তি-মা-না', 'eel JOR-noh / lah seht-tee-MAH-nah', 'Che giorno è oggi?', 'আজ কী বার?', 'What day is today?'),

  // 3. Months & Seasons (16)
  td('td-m-01', 'months-seasons', { bn: 'মাস ১', en: 'Month 1' }, 'gennaio', '01 · Winter', 'জানুয়ারি', 'January', 'জেন-না-ইয়ো', 'jehn-NAH-yoh', 'Il nuovo anno inizia a gennaio.', 'নতুন বছর জানুয়ারিতে শুরু হয়।', 'The new year begins in January.', {
    bn: 'মাসের নামও ইতালিতে ছোট হাতের অক্ষরে লেখা হয় এবং মাসের আগে "a" বা "in" বসে (a gennaio / in gennaio)।',
    en: 'Months are written lowercase in Italian and follow "a" or "in" (a gennaio / in gennaio).',
  }),
  td('td-m-02', 'months-seasons', { bn: 'মাস ২', en: 'Month 2' }, 'febbraio', '02 · Winter', 'ফেব্রুয়ারি', 'February', 'ফেব-ব্রা-ইয়ো', 'fehb-BRAH-yoh', 'Febbraio è il mese più corto.', 'ফেব্রুয়ারি সবচেয়ে ছোট মাস।', 'February is the shortest month.'),
  td('td-m-03', 'months-seasons', { bn: 'মাস ৩', en: 'Month 3' }, 'marzo', '03 · Spring', 'মার্চ', 'March', 'মার-ৎসো', 'MAHR-tsoh', 'A marzo inizia la primavera.', 'মার্চে বসন্ত শুরু হয়।', 'Spring begins in March.'),
  td('td-m-04', 'months-seasons', { bn: 'মাস ৪', en: 'Month 4' }, 'aprile', '04 · Spring', 'এপ্রিল', 'April', 'আ-প্রি-লে', 'ah-PREE-leh', 'In aprile piove spesso in Italia.', 'এপ্রিলে ইতালিতে প্রায়ই বৃষ্টি হয়।', 'In April it often rains in Italy.'),
  td('td-m-05', 'months-seasons', { bn: 'মাস ৫', en: 'Month 5' }, 'maggio', '05 · Spring', 'মে', 'May', 'মাজ-জো', 'MAHJ-joh', 'Il mio compleanno è a maggio.', 'আমার জন্মদিন মে মাসে।', 'My birthday is in May.'),
  td('td-m-06', 'months-seasons', { bn: 'মাস ৬', en: 'Month 6' }, 'giugno', '06 · Summer', 'জুন', 'June', 'জুন-ইয়ো', 'JOO-nyoh', 'A giugno finisce la scuola.', 'জুন মাসে স্কুল শেষ হয়।', 'School ends in June.'),
  td('td-m-07', 'months-seasons', { bn: 'মাস ৭', en: 'Month 7' }, 'luglio', '07 · Summer', 'জুলাই', 'July', 'লুল-ইয়ো', 'LOO-lyoh', 'In luglio fa molto caldo.', 'জুলাই মাসে খুব গরম পড়ে।', 'In July it is very hot.'),
  td('td-m-08', 'months-seasons', { bn: 'মাস ৮', en: 'Month 8' }, 'agosto', '08 · Summer', 'আগস্ট', 'August', 'আ-গোস-তো', 'ah-GOHS-toh', 'Ad agosto molti negozi sono chiusi per ferie.', 'আগস্টে ছুটির কারণে অনেক দোকান বন্ধ থাকে।', 'In August many shops are closed for holidays.'),
  td('td-m-09', 'months-seasons', { bn: 'মাস ৯', en: 'Month 9' }, 'settembre', '09 · Autumn', 'সেপ্টেম্বর', 'September', 'সেৎ-তেম-ব্রে', 'seht-TEHM-breh', 'A settembre ricominciano le lezioni.', 'সেপ্টেম্বরে ক্লাস আবার শুরু হয়।', 'Lessons resume in September.'),
  td('td-m-10', 'months-seasons', { bn: 'মাস ১০', en: 'Month 10' }, 'ottobre', '10 · Autumn', 'অক্টোবর', 'October', 'অৎ-তো-ব্রে', 'oht-TOH-breh', 'In ottobre cadono le foglie dagli alberi.', 'অক্টোবরে গাছ থেকে পাতা ঝরে।', 'In October leaves fall from the trees.'),
  td('td-m-11', 'months-seasons', { bn: 'মাস ১১', en: 'Month 11' }, 'novembre', '11 · Autumn', 'নভেম্বর', 'November', 'নো-ভেম-ব্রে', 'noh-VEHM-breh', 'A novembre fa fresco la sera.', 'নভেম্বরে সন্ধ্যায় ঠান্ডা লাগে।', 'In November it is cool in the evening.'),
  td('td-m-12', 'months-seasons', { bn: 'মাস ১২', en: 'Month 12' }, 'dicembre', '12 · Winter', 'ডিসেম্বর', 'December', 'দি-চেম-ব্রে', 'dee-CHEHM-breh', 'A dicembre festeggiamo il Natale.', 'ডিসেম্বরে আমরা ক্রিসমাস উদযাপন করি।', 'In December we celebrate Christmas.'),
  td('td-m-13', 'months-seasons', { bn: 'বসন্ত', en: 'Spring' }, 'la primavera', 'Season (f.)', 'বসন্তকাল', 'spring', 'লা প্রি-মা-ভে-রা', 'lah pree-mah-VEH-rah', 'In primavera ci sono molti fiori.', 'বসন্তকালে অনেক ফুল ফোটে।', 'In spring there are many flowers.'),
  td('td-m-14', 'months-seasons', { bn: 'গ্রীষ্ম', en: 'Summer' }, "l'estate", 'Season (f.)', 'গ্রীষ্মকাল', 'summer', 'লেস-তা-তে', 'lehs-TAH-teh', 'In estate andiamo al mare.', 'গ্রীষ্মকালে আমরা সমুদ্রসৈকতে যাই।', 'In summer we go to the seaside.'),
  td('td-m-15', 'months-seasons', { bn: 'শরৎ', en: 'Autumn / Fall' }, "l'autunno", 'Season (m.)', 'শরৎকাল', 'autumn / fall', 'লা-উ-তুন-নো', 'low-TOON-noh', "L'autunno porta giorni più brevi.", 'শরৎকাল ছোট দিন নিয়ে আসে।', 'Autumn brings shorter days.'),
  td('td-m-16', 'months-seasons', { bn: 'শীত', en: 'Winter' }, "l'inverno", 'Season (m.)', 'শীতকাল', 'winter', 'লিন-ভের-নো', 'leen-VEHR-noh', 'In inverno nevica sulle Alpi.', 'শীতকালে আল্পস পর্বতমালায় তুষারপাত হয়।', 'In winter it snows in the Alps.'),

  // 4. Full Dates & Birthdays (10)
  td('td-dt-01', 'dates-birthdays', { bn: 'আজকের তারিখ', en: 'Today Date' }, 'Quanti ne abbiamo oggi?', 'Asking the date', 'আজ কয় তারিখ?', 'What is the date today?', 'কুয়ান-তি নে আব-বিয়া-মো অজ-জি', 'KWAHN-tee neh ahb-BYAH-moh OHJ-jee', 'Oggi è il quindici ottobre.', 'আজ পনেরোই অক্টোবর।', 'Today is the fifteenth of October.', {
    bn: 'তারিখ বলার দুটি সাধারণ প্রশ্ন: "Che giorno è oggi?" বা "Quanti ne abbiamo oggi?"।',
    en: 'Ask the date with "Che giorno è oggi?" or idiomatic "Quanti ne abbiamo oggi?".',
  }),
  td('td-dt-02', 'dates-birthdays', { bn: 'মাসের ১ তারিখ', en: '1st of the Month' }, 'il primo + mese', '1st of the month', 'মাসের ১লা তারিখ (ব্যতিক্রম)', 'the first of the month', 'ইল প্রি-মো', 'eel PREE-moh', 'Oggi è il primo gennaio.', 'আজ পহেলা জানুয়ারি।', 'Today is the first of January.', {
    bn: 'শুধু মাসের ১ তারিখে ক্রমবাচক "primo" বসে; ২ থেকে ৩১ তারিখ পর্যন্ত সাধারণ সংখ্যা বসে!',
    en: 'Only the 1st uses an ordinal number (il primo); days 2–31 all use regular cardinal numbers!',
  }),
  td('td-dt-03', 'dates-birthdays', { bn: '২–৩১ তারিখ', en: 'Cardinal Dates' }, 'il + numero + mese', 'Days 2–31', 'মাসের ২ থেকে ৩১ তারিখ', 'the [number] of [month]', 'ইল ভেন-তি-চিঙ্কুয়ে মাগ-জো', 'eel vehn-tee-CHEEN-kweh', 'La festa è il venticinque aprile.', 'উৎসবটি পঁচিশে এপ্রিল।', 'The holiday is on April 25th.'),
  td('td-dt-04', 'dates-birthdays', { bn: 'সাল ও বছর', en: 'Years' }, 'nel + anno', 'nel + year', '... সালে', 'in [year]', 'নেল দু-এ-মি-লা ভেন-তি-সেই', 'nehl doo-eh-MEE-lah', 'Sono arrivato in Italia nel duemilaventiquattro.', 'আমি ২০২৪ সালে ইতালিতে এসেছি।', 'I arrived in Italy in 2024.'),
  td('td-dt-05', 'dates-birthdays', { bn: 'জন্মদিনের তারিখ', en: 'Birthday' }, 'Quando è il tuo compleanno?', 'Birthday question', 'তোমার জন্মদিন কবে?', 'When is your birthday?', 'কুয়ান-দো এ ইল তু-ও কোম-প্লে-আন-নো', 'KWAHN-doh eh eel TOO-oh kohm-pleh-AHN-noh', 'Il mio compleanno è il dodici marzo.', 'আমার জন্মদিন বারোই মার্চ।', 'My birthday is March 12th.'),
  td('td-dt-06', 'dates-birthdays', { bn: 'জন্মসাল', en: 'Date of Birth' }, 'Quando sei nato / nata?', 'Birth date question', 'তুমি কবে জন্মগ্রহণ করেছ?', 'When were you born?', 'কুয়ান-দো সেই না-তো', 'KWAHN-doh seh-ee NAH-toh', 'Sono nato il tre luglio millenovecentonovantacinque.', 'আমি ৩রা জুলাই ১৯৯৫ সালে জন্মগ্রহণ করেছি।', 'I was born on July 3rd, 1995.'),
  td('td-dt-07', 'dates-birthdays', { bn: 'জন্মদিনের শুভেচ্ছা', en: 'Happy Birthday' }, 'Buon compleanno! / Tanti auguri!', 'Birthday wish', 'শুভ জন্মদিন! / অনেক শুভেচ্ছা!', 'Happy birthday! / Best wishes!', 'বু-ওন কোম-প্লে-আন-নো', 'bwohn kohm-pleh-AHN-noh', 'Tanti auguri per i tuoi trent’anni!', 'তোমার ৩০তম জন্মদিনের অনেক শুভেচ্ছা!', 'Best wishes on your thirtieth birthday!'),
  td('td-dt-08', 'dates-birthdays', { bn: 'তারিখ লেখা', en: 'DD/MM/YYYY' }, 'gg/mm/aaaa', 'Day / Month / Year', 'দিন / মাস / বছর বিন্যাস', 'Italian date format (DD/MM/YYYY)', 'জোর-নো / মে-জে / আন-নো', 'JOR-noh / MEH-zeh / AHN-noh', 'Roma, 14/09/2026', 'রোম, ১৪/০৯/২০২৬', 'Rome, 14/09/2026', {
    bn: 'ইতালিতে তারিখ আগে দিন, পরে মাস, তারপর বছর লেখা হয় (দিন/মাস/বছর)।',
    en: 'Italian numerical dates strictly follow Day/Month/Year order (14/09/2026 = Sept 14).',
  }),
  td('td-dt-09', 'dates-birthdays', { bn: 'ক্যালেন্ডার', en: 'Date & Calendar' }, 'la data / il calendario', 'Date & Calendar', 'তারিখ / ক্যালেন্ডার', 'the date / the calendar', 'লা দা-তা / ইল কা-লেন-দা-রিও', 'lah DAH-tah / eel kah-lehn-DAH-ryoh', 'Scrivi la data di oggi sul modulo.', 'ফর্মে আজকের তারিখটি লিখুন।', 'Write today’s date on the form.'),
  td('td-dt-10', 'dates-birthdays', { bn: 'ছুটির দিন', en: 'Public Holiday' }, 'il giorno festivo', 'Public holiday', 'সরকারি ছুটির দিন', 'the public holiday', 'ইল জোর-নো ফেস-তি-ভো', 'eel JOR-noh fehs-TEE-voh', 'Il primo maggio è un giorno festivo in Italia.', 'পহেলা মে ইতালিতে একটি সরকারি ছুটির দিন।', 'May 1st is a public holiday in Italy.'),

  // 5. Relative Time (12)
  td('td-r-01', 'relative-time', { bn: 'আজ', en: 'Today' }, 'oggi', 'Present day', 'আজ', 'today', 'অজ-জি', 'OHJ-jee', 'Oggi è una bellissima giornata.', 'আজ খুব সুন্দর একটি দিন।', 'Today is a very beautiful day.'),
  td('td-r-02', 'relative-time', { bn: 'গতকাল', en: 'Yesterday' }, 'ieri', 'Past (-1 day)', 'গতকাল', 'yesterday', 'ইয়ে-রি', 'YEH-ree', 'Ieri ho comprato un libro nuovo.', 'গতকাল আমি একটি নতুন বই কিনেছি।', 'Yesterday I bought a new book.'),
  td('td-r-03', 'relative-time', { bn: 'গত পরশু', en: 'Day Before Yesterday' }, "l'altro ieri", 'Past (-2 days)', 'গত পরশু', 'the day before yesterday', 'লাল-ত্রো ইয়ে-রি', 'LAHL-troh YEH-ree', "L'altro ieri siamo andati al museo.", 'গত পরশু আমরা জাদুঘরে গিয়েছিলাম।', 'The day before yesterday we went to the museum.'),
  td('td-r-04', 'relative-time', { bn: 'আগামীকাল', en: 'Tomorrow' }, 'domani', 'Future (+1 day)', 'আগামীকাল', 'tomorrow', 'দো-মা-নি', 'doh-MAH-nee', 'Domani mattina parto per Bologna.', 'আগামীকাল সকালে আমি বোলোনিয়ার উদ্দেশ্যে রওনা হচ্ছি।', 'Tomorrow morning I leave for Bologna.'),
  td('td-r-05', 'relative-time', { bn: 'আগামী পরশু', en: 'Day After Tomorrow' }, 'dopodomani', 'Future (+2 days)', 'আগামী পরশু', 'the day after tomorrow', 'দো-পো-দো-মা-নি', 'doh-poh-doh-MAH-nee', 'Dopodomani c’è l’esame di italiano.', 'আগামী পরশু ইতালিয়ান পরীক্ষা আছে।', 'The day after tomorrow there is the Italian exam.'),
  td('td-r-06', 'relative-time', { bn: 'আজকের অংশ', en: 'This morning / Tonight' }, 'stamattina / stasera', 'Today AM / PM', 'আজ সকালে / আজ সন্ধ্যায়', 'this morning / tonight', 'স্তা-মাৎ-তি-না / স্তা-সে-রা', 'stah-maht-TEE-nah / stah-SEH-rah', 'Stasera restiamo a casa a riposare.', 'আজ সন্ধ্যায় আমরা বিশ্রাম নিতে বাসায় থাকছি।', 'Tonight we are staying home to rest.'),
  td('td-r-07', 'relative-time', { bn: 'গত সপ্তাহ', en: 'Last week / month' }, 'la settimana scorsa / il mese scorso', 'Past period', 'গত সপ্তাহ / গত মাস', 'last week / last month', 'লা সেৎ-তি-মা-না স্কোর-সা', 'seht-tee-MAH-nah SKOHR-sah', 'La settimana scorsa ho visitato Milano.', 'গত সপ্তাহে আমি মিলান ঘুরে দেখেছি।', 'Last week I visited Milan.'),
  td('td-r-08', 'relative-time', { bn: 'আগামী সপ্তাহ', en: 'Next week / month' }, 'la settimana prossima / il mese prossimo', 'Upcoming period', 'আগামী সপ্তাহ / আগামী মাস', 'next week / next month', 'লা সেৎ-তি-মা-না প্রোস-সি-মা', 'seht-tee-MAH-nah PROHS-see-mah', 'La settimana prossima comincio a lavorare.', 'আগামী সপ্তাহে আমি কাজ শুরু করছি।', 'Next week I start working.'),
  td('td-r-09', 'relative-time', { bn: 'এই মুহূর্তে', en: 'Now / Right now' }, 'adesso / ora', 'Present moment', 'এখন / এই মুহূর্তে', 'now / right now', 'আ-দেস-সো / ও-রা', 'ah-DEHS-soh / OH-rah', 'Adesso non posso parlare, ti richiamo.', 'এখন আমি কথা বলতে পারছি না, তোমাকে পরে কল করছি।', 'Right now I cannot talk, I will call you back.'),
  td('td-r-10', 'relative-time', { bn: 'পরে ও আগে', en: 'Before & After' }, 'prima / dopo', 'Sequence', 'আগে / পরে', 'before / after', 'প্রি-মা / দো-পো', 'PREE-mah / DOH-poh', 'Ci vediamo dopo la lezione di italiano.', 'ইতালিয়ান ক্লাসের পরে আমাদের দেখা হবে।', 'See you after the Italian lesson.'),
  td('td-r-11', 'relative-time', { bn: 'আগে (অতীত)', en: 'Ago' }, 'fa (due giorni fa)', 'Time ago', 'আগে (যেমন: ২ দিন আগে)', 'ago (e.g. two days ago)', 'ফা (দু-এ জোর-নি ফা)', 'fah (DOO-eh JOR-nee fah)', 'Sono arrivato tre settimane fa.', 'আমি তিন সপ্তাহ আগে এসেছি।', 'I arrived three weeks ago.'),
  td('td-r-12', 'relative-time', { bn: 'পরে (ভবিষ্যৎ)', en: 'In (time from now)' }, 'tra / fra (tra dieci minuti)', 'Time from now', 'পরে (যেমন: ১০ মিনিট পর)', 'in / within (time from now)', 'ত্রা / ফ্রা', 'trah / frah', 'Il treno arriva tra cinque minuti.', 'ট্রেনটি পাঁচ মিনিট পর আসবে।', 'The train arrives in five minutes.'),

  // 6. Schedules & Opening Hours (10)
  td('td-s-01', 'schedules-hours', { bn: 'সময়ের ব্যাপ্তি', en: 'From... To...' }, 'dalle... alle...', 'Hour span', '...টা থেকে ...টা পর্যন্ত', 'from ... to ... (hours)', 'দাল-লে ... আল-লে ...', 'DAHL-leh ... AHL-leh ...', 'Il museo è aperto dalle nove alle diciotto.', 'জাদুঘরটি সকাল ৯টা থেকে সন্ধ্যা ৬টা পর্যন্ত খোলা থাকে।', 'The museum is open from 9:00 to 18:00.'),
  td('td-s-02', 'schedules-hours', { bn: 'দিন থেকে দিন', en: 'Day Span' }, 'dal... al...', 'Day span', 'সোম থেকে শুক্র (দিন থেকে দিন)', 'from ... to ... (days)', 'দাল ... আল ...', 'dahl ... ahl ...', 'La biblioteca è aperta dal lunedì al venerdì.', 'লাইব্রেরিটি সোমবার থেকে শুক্রবার পর্যন্ত খোলা থাকে।', 'The library is open from Monday to Friday.'),
  td('td-s-03', 'schedules-hours', { bn: 'খোলার সময়', en: 'Opening Hours' }, "l'orario di apertura", 'Opening hours', 'খোলার সময়সূচি', 'the opening hours', 'লো-রা-রিও দি আ-পের-তু-রা', 'loh-RAH-ryoh dee ah-pehr-TOO-rah', "Qual è l'orario di apertura della farmacia?", 'ফার্মেসি খোলার সময়সূচি কী?', 'What are the pharmacy opening hours?'),
  td('td-s-04', 'schedules-hours', { bn: 'বন্ধের সময়', en: 'Closing Time' }, "l'orario di chiusura", 'Closing time', 'বন্ধ হওয়ার সময়', 'the closing time', 'লো-রা-রিও দি কিউ-জু-রা', 'loh-RAH-ryoh dee kyoo-ZOO-rah', "Qual è l'orario di chiusura del supermercato?", 'সুপারমার্কেট কয়টায় বন্ধ হয়?', 'What is the supermarket closing time?'),
  td('td-s-05', 'schedules-hours', { bn: 'বিরতিহীন সময়', en: 'Non-stop Hours' }, 'orario continuato', 'All-day open', 'বিরতি ছাড়া খোলা', 'continuous / non-stop opening hours', 'ও-রা-রিও কোন-তি-নু-আ-তো', 'oh-RAH-ryoh kohn-tee-NWAH-toh', 'Il centro commerciale fa orario continuato.', 'শপিং মলটি বিরতি ছাড়াই সারাদিন খোলা থাকে।', 'The shopping mall stays open continuously all day.'),
  td('td-s-06', 'schedules-hours', { bn: 'ঠিক সময়ে', en: 'On Time' }, 'in orario / puntuale', 'Punctual', 'সময়মতো / নিয়মানুবর্তী', 'on time / punctual', 'ইন ও-রা-রিও / পুন-তু-আ-লে', 'een oh-RAH-ryoh / poon-TWAH-leh', 'Il treno regionale oggi è in orario.', 'আঞ্চলিক ট্রেনটি আজ সময়মতো চলছে।', 'The regional train is on time today.'),
  td('td-s-07', 'schedules-hours', { bn: 'দেরিতে', en: 'Late / Delayed' }, 'in ritardo', 'Delayed', 'দেরিতে / বিলম্বিত', 'late / delayed', 'ইন রি-তার-দো', 'een ree-TAHR-doh', 'Scusi, sono in ritardo di dieci minuti.', 'মাফ করবেন, আমার দশ মিনিট দেরি হয়ে গেছে।', 'Sorry, I am ten minutes late.'),
  td('td-s-08', 'schedules-hours', { bn: 'সময়ের আগে', en: 'Early' }, 'in anticipo', 'Ahead of schedule', 'নির্ধারিত সময়ের আগে', 'early / ahead of time', 'ইন আন-তি-চি-পো', 'een ahn-TEE-chee-poh', 'Preferisco arrivare in stazione in anticipo.', 'আমি সময়ের আগেই স্টেশনে পৌঁছাতে পছন্দ করি।', 'I prefer to arrive at the station early.'),
  td('td-s-09', 'schedules-hours', { bn: 'প্রতিদিন', en: 'Every day' }, 'tutti i giorni / ogni giorno', 'Daily frequency', 'প্রতিদিন', 'every day', 'তুৎ-তি ই জোর-নি', 'TOOT-tee ee JOR-nee', 'Studio italiano per venti minuti ogni giorno.', 'আমি প্রতিদিন বিশ মিনিট ইতালিয়ান পড়ি।', 'I study Italian for twenty minutes every day.'),
  td('td-s-10', 'schedules-hours', { bn: 'কখনো / প্রতি সপ্তাহ', en: 'Weekly / Monthly' }, 'ogni settimana / ogni mese', 'Recurring interval', 'প্রতি সপ্তাহে / প্রতি মাসে', 'every week / every month', 'অন-ইয়ে সেৎ-তি-মা-না', 'OH-nyeh seht-tee-MAH-nah', 'Paghiamo l’affitto ogni mese.', 'আমরা প্রতি মাসে বাড়িভাড়া পরিশোধ করি।', 'We pay the rent every month.'),
];

export const A1_TIME_DATES_DIALOGUES: A1TimeDialogue[] = [
  {
    id: 'tdd-01',
    title: { bn: '১. রাস্তায় সময় জিজ্ঞাসা', en: '1. Asking the Time on the Street' },
    context: { bn: 'একজন পথচারীর কাছে সময় জানতে চাওয়া', en: 'Checking the time with a passerby' },
    lines: [
      { speaker: 'A', it: 'Scusi, sa dirmi che ore sono?', tr: { bn: 'মাফ করবেন, এখন কয়টা বাজে বলতে পারেন?', en: 'Excuse me, can you tell me what time it is?' } },
      { speaker: 'B', it: 'Sì, sono le dieci e venti.', tr: { bn: 'হ্যাঁ, এখন ১০টা ২০ বাজে।', en: 'Yes, it is twenty past ten.' } },
      { speaker: 'A', it: 'Grazie mille, buona giornata!', tr: { bn: 'অনেক ধন্যবাদ, আপনার দিনটি শুভ হোক!', en: 'Thank you very much, have a great day!' } },
    ],
  },
  {
    id: 'tdd-02',
    title: { bn: '২. ১টা ও ১২টার ব্যতিক্রম', en: '2. Lunch Meeting Around Noon & 1:00' },
    context: { bn: 'সহকর্মীদের মধ্যে দুপুরের খাবারের সময় ঠিক করা', en: 'Colleagues coordinating lunch time' },
    lines: [
      { speaker: 'Sara', it: 'Che ora è? Ho molta fame.', tr: { bn: 'কয়টা বাজে? আমার খুব খিদে পেয়েছে।', en: 'What time is it? I am very hungry.' } },
      { speaker: 'Luca', it: "È mezzogiorno e mezza. Pranziamo all'una?", tr: { bn: '১২টা ৩০ বাজে। আমরা কি ১টায় খাব?', en: 'It is 12:30. Shall we have lunch at 1:00?' } },
      { speaker: 'Sara', it: "Perfetto, ci vediamo all'una davanti al bar.", tr: { bn: 'দারুণ, ১টায় ক্যাফের সামনে দেখা হবে।', en: 'Perfect, see you at 1:00 in front of the café.' } },
    ],
  },
  {
    id: 'tdd-03',
    title: { bn: '৩. ডাক্তারের অ্যাপয়েন্টমেন্ট', en: '3. Booking a Doctor Appointment' },
    context: { bn: 'ক্লিনিকের রিসেপশনে দিন ও সময় ঠিক করা', en: 'Scheduling day and hour at reception' },
    lines: [
      { speaker: 'Paziente', it: 'Buongiorno, vorrei un appuntamento questa settimana.', tr: { bn: 'শুভ সকাল, আমি এই সপ্তাহে একটি অ্যাপয়েন্টমেন্ট চাই।', en: 'Good morning, I would like an appointment this week.' } },
      { speaker: 'Segretaria', it: 'Va bene giovedì alle sedici e trenta?', tr: { bn: 'বৃহস্পতিবার বিকেল ৪:৩০-এ কি চলবে?', en: 'Is Thursday at 16:30 okay?' } },
      { speaker: 'Paziente', it: 'Sì, giovedì alle quattro e mezza va benissimo.', tr: { bn: 'হ্যাঁ, বৃহস্পতিবার সাড়ে চারটায় খুব ভালো হয়।', en: 'Yes, Thursday at half past four works very well.' } },
    ],
  },
  {
    id: 'tdd-04',
    title: { bn: '৪. সুপারমার্কেট খোলার সময়', en: '4. Checking Supermarket Opening Hours' },
    context: { bn: 'রবিবার দোকান খোলা থাকে কিনা জানা', en: 'Asking about Sunday schedule' },
    lines: [
      { speaker: 'Cliente', it: 'A che ora chiude il supermercato stasera?', tr: { bn: 'আজ সন্ধ্যায় সুপারমার্কেট কয়টায় বন্ধ হয়?', en: 'What time does the supermarket close tonight?' } },
      { speaker: 'Commesso', it: 'Dal lunedì al sabato siamo aperti fino alle ventuno.', tr: { bn: 'সোম থেকে শনিবার আমরা রাত ৯টা পর্যন্ত খোলা থাকি।', en: 'Monday to Saturday we are open until 21:00.' } },
      { speaker: 'Cliente', it: 'E la domenica?', tr: { bn: 'আর রবিবার?', en: 'And on Sunday?' } },
      { speaker: 'Commesso', it: 'La domenica solo la mattina, dalle nove alle tredici.', tr: { bn: 'রবিবার শুধু সকালে, ৯টা থেকে দুপুর ১টা পর্যন্ত।', en: 'On Sunday only in the morning, from 9:00 to 13:00.' } },
    ],
  },
  {
    id: 'tdd-05',
    title: { bn: '৫. ট্রেন স্টেশনের সময়সূচি', en: '5. Train Departure & Arrival' },
    context: { bn: 'টিকিট কাউন্টারে ট্রেনের সময় নিশ্চিত করা', en: 'Confirming departure and delay status' },
    lines: [
      { speaker: 'Viaggiatore', it: 'A che ora parte il prossimo treno per Firenze?', tr: { bn: 'ফ্লোরেন্সের পরবর্তী ট্রেন কয়টায় ছাড়ে?', en: 'What time does the next train to Florence leave?' } },
      { speaker: 'Impiegato', it: 'Parte alle quattordici e quindici dal binario quattro.', tr: { bn: '১৪:১৫-তে ৪ নম্বর প্ল্যাটফর্ম থেকে ছাড়ে।', en: 'It departs at 14:15 from platform four.' } },
      { speaker: 'Viaggiatore', it: 'È in orario?', tr: { bn: 'এটি কি সময়মতো আছে?', en: 'Is it on time?' } },
      { speaker: 'Impiegato', it: 'Sì, oggi è perfettamente in orario.', tr: { bn: 'হ্যাঁ, আজ একদম সময়মতো আছে।', en: 'Yes, today it is completely on time.' } },
    ],
  },
  {
    id: 'tdd-06',
    title: { bn: '৬. জন্মদিন ও তারিখ জিজ্ঞাসা', en: '6. Sharing Birthdays & Dates' },
    context: { bn: 'ক্লাসে সহপাঠীদের সাথে জন্মদিনের তারিখ নিয়ে কথা', en: 'Classmates talking about birthdays' },
    lines: [
      { speaker: 'Elena', it: 'Quando è il tuo compleanno, Tariq?', tr: { bn: 'তারিক, তোমার জন্মদিন কবে?', en: 'When is your birthday, Tariq?' } },
      { speaker: 'Tariq', it: 'Il mio compleanno è il primo dicembre. E il tuo?', tr: { bn: 'আমার জন্মদিন পহেলা ডিসেম্বর। আর তোমার?', en: 'My birthday is December 1st. And yours?' } },
      { speaker: 'Elena', it: 'Il ventidue agosto! In piena estate.', tr: { bn: 'বাইশে আগস্ট! ভরা গ্রীষ্মে।', en: 'August 22nd! Right in the middle of summer.' } },
    ],
  },
  {
    id: 'tdd-07',
    title: { bn: '৭. আজকের তারিখ পূরণ করা', en: '7. Writing the Date on a Form' },
    context: { bn: 'ইউনিভার্সিটি অফিসে ফর্ম পূরণ', en: 'Filling in date at a university desk' },
    lines: [
      { speaker: 'Studente', it: 'Scusi, quanti ne abbiamo oggi?', tr: { bn: 'মাফ করবেন, আজ কয় তারিখ?', en: 'Excuse me, what is the date today?' } },
      { speaker: 'Impiegata', it: 'Oggi è il quattordici maggio.', tr: { bn: 'আজ চৌদ্দই মে।', en: 'Today is the fourteenth of May.' } },
      { speaker: 'Studente', it: 'Grazie, lo scrivo subito sul modulo.', tr: { bn: 'ধন্যবাদ, আমি এখনই ফর্মে লিখে নিচ্ছি।', en: 'Thanks, I will write it on the form right away.' } },
    ],
  },
  {
    id: 'tdd-08',
    title: { bn: '৮. ক্লাসের সময়সূচি', en: '8. Italian Course Timetable' },
    context: { bn: 'নতুন শিক্ষার্থীকে ক্লাসের দিন ও সময় জানানো', en: 'Explaining course days and hours' },
    lines: [
      { speaker: 'Marco', it: 'In quali giorni abbiamo lezione di italiano?', tr: { bn: 'কোন কোন দিন আমাদের ইতালিয়ান ক্লাস আছে?', en: 'Which days do we have Italian class?' } },
      { speaker: 'Insegnante', it: 'Il lunedì, il mercoledì e il venerdì.', tr: { bn: 'সোমবার, বুধবার এবং শুক্রবার।', en: 'On Mondays, Wednesdays, and Fridays.' } },
      { speaker: 'Marco', it: 'Dalle nove alle undici di mattina?', tr: { bn: 'সকাল ৯টা থেকে ১১টা পর্যন্ত?', en: 'From 9:00 to 11:00 in the morning?' } },
      { speaker: 'Insegnante', it: 'Esatto, dalle nove alle undici in punto.', tr: { bn: 'ঠিক তাই, ৯টা থেকে ঠিক ১১টা পর্যন্ত।', en: 'Exactly, from nine to eleven sharp.' } },
    ],
  },
  {
    id: 'tdd-09',
    title: { bn: '৯. দেরি হওয়ার জন্য ক্ষমা চাওয়া', en: '9. Apologizing for Being Late' },
    context: { bn: 'বাস মিস করায় ক্লাসে সামান্য দেরি', en: 'Arriving late due to traffic' },
    lines: [
      { speaker: 'Nadia', it: 'Buongiorno professoressa, scusi per il ritardo!', tr: { bn: 'শুভ সকাল ম্যাডাম, দেরির জন্য মাফ করবেন!', en: 'Good morning professor, sorry for being late!' } },
      { speaker: 'Professoressa', it: 'Non si preoccupi, è in ritardo di soli cinque minuti.', tr: { bn: 'চিন্তা করবেন না, মাত্র পাঁচ মিনিট দেরি হয়েছে।', en: 'Do not worry, you are only five minutes late.' } },
    ],
  },
  {
    id: 'tdd-10',
    title: { bn: '১০. সপ্তাহান্তের পরিকল্পনা', en: '10. Planning the Weekend' },
    context: { bn: 'শনি ও রবিবারের পরিকল্পনা আলোচনা', en: 'Two friends planning Saturday and Sunday' },
    lines: [
      { speaker: 'Giulia', it: 'Cosa fai questo fine settimana?', tr: { bn: 'এই উইকএন্ডে তুমি কী করছ?', en: 'What are you doing this weekend?' } },
      { speaker: 'Paolo', it: 'Sabato vado a Milano e domenica pomeriggio studio.', tr: { bn: 'শনিবার আমি মিলান যাচ্ছি আর রবিবার বিকেলে পড়াশোনা করব।', en: 'On Saturday I go to Milan and Sunday afternoon I study.' } },
      { speaker: 'Giulia', it: 'Allora ci vediamo lunedì mattina a scuola.', tr: { bn: 'তাহলে সোমবার সকালে স্কুলে দেখা হবে।', en: 'Then see you Monday morning at school.' } },
    ],
  },
  {
    id: 'tdd-11',
    title: { bn: '১১. জাদুঘর পরিদর্শন', en: '11. Museum Visiting Hours' },
    context: { bn: 'ছুটির দিনে জাদুঘরের সময় জানা', en: 'Checking holiday and lunch closure' },
    lines: [
      { speaker: 'Turista', it: 'Il museo fa orario continuato oggi?', tr: { bn: 'আজ কি জাদুঘর বিরতিহীন খোলা আছে?', en: 'Does the museum stay open all day today?' } },
      { speaker: 'Guida', it: 'Sì, dalle dieci alle diciannove, ma lunedì è chiuso.', tr: { bn: 'হ্যাঁ, সকাল ১০টা থেকে সন্ধ্যা ৭টা পর্যন্ত, তবে সোমবার বন্ধ।', en: 'Yes, from 10:00 to 19:00, though it is closed on Monday.' } },
    ],
  },
  {
    id: 'tdd-12',
    title: { bn: '১২. ইতালিতে আসার সময়', en: '12. Talking About Past Arrival' },
    context: { bn: 'ago (fa) এবং গত মাস ব্যবহার', en: 'Using "fa" and "scorso"' },
    lines: [
      { speaker: 'Anna', it: 'Da quanto tempo vivi a Napoli?', tr: { bn: 'কতদিন ধরে তুমি নেপলসে থাকছ?', en: 'How long have you lived in Naples?' } },
      { speaker: 'Rafi', it: 'Sono arrivato il mese scorso, tre settimane fa.', tr: { bn: 'আমি গত মাসে এসেছি, তিন সপ্তাহ আগে।', en: 'I arrived last month, three weeks ago.' } },
      { speaker: 'Anna', it: 'Il mese prossimo inizierà il caldo!', tr: { bn: 'আগামী মাসে গরম শুরু হয়ে যাবে!', en: 'Next month the warm weather will begin!' } },
    ],
  },
  {
    id: 'tdd-13',
    title: { bn: '১৩. রেস্তোরাঁয় টেবিল বুকিং', en: '13. Reserving a Dinner Table' },
    context: { bn: 'ফোনে রাতের খাবারের সময় ঠিক করা', en: 'Booking for 8:15 PM on Friday' },
    lines: [
      { speaker: 'Cliente', it: 'Buonasera, vorrei prenotare per venerdì sera alle otto e un quarto.', tr: { bn: 'শুভ সন্ধ্যা, আমি শুক্রবার রাত ৮:১৫-এর জন্য বুকিং দিতে চাই।', en: 'Good evening, I would like to book for Friday evening at 8:15.' } },
      { speaker: 'Cameriere', it: 'Certo! Tavolo per quante persone alle venti e quindici?', tr: { bn: 'অবশ্যই! ২০:১৫-তে কতজনের জন্য টেবিল?', en: 'Of course! A table for how many people at 20:15?' } },
      { speaker: 'Cliente', it: 'Per quattro persone, grazie.', tr: { bn: 'চারজনের জন্য, ধন্যবাদ।', en: 'For four people, thank you.' } },
    ],
  },
  {
    id: 'tdd-14',
    title: { bn: '১৪. প্রিয় ঋতু নিয়ে কথা', en: '14. Talking About Seasons & Months' },
    context: { bn: 'আবহাওয়া ও পছন্দের ঋতু নিয়ে আলোচনা', en: 'Comparing Italian seasons' },
    lines: [
      { speaker: 'Chiara', it: 'Qual è la tua stagione preferita?', tr: { bn: 'তোমার প্রিয় ঋতু কোনটি?', en: 'What is your favorite season?' } },
      { speaker: 'Omar', it: 'Amo la primavera, soprattutto aprile e maggio.', tr: { bn: 'আমি বসন্তকাল ভালোবাসি, বিশেষ করে এপ্রিল ও মে মাস।', en: 'I love spring, especially April and May.' } },
      { speaker: 'Chiara', it: "Io preferisco l'autunno, a ottobre si sta benissimo.", tr: { bn: 'আমার শরৎকাল পছন্দ, অক্টোবরে খুব আরামদায়ক আবহাওয়া থাকে।', en: 'I prefer autumn, in October the weather is wonderful.' } },
    ],
  },
  {
    id: 'tdd-15',
    title: { bn: '১৫. আগামী সপ্তাহের পরীক্ষা', en: '15. Upcoming Exam Reminder' },
    context: { bn: 'আগামীকাল ও পরশুর প্রস্তুতি', en: 'Using domani, dopodomani, tra' },
    lines: [
      { speaker: 'Amico', it: 'Quando abbiamo l’esame di italiano?', tr: { bn: 'আমাদের ইতালিয়ান পরীক্ষা কবে?', en: 'When is our Italian exam?' } },
      { speaker: 'Sofia', it: 'Dopodomani, mercoledì diciotto novembre, alle nove meno un quarto.', tr: { bn: 'আগামী পরশু, বুধবার ১৮ই নভেম্বর, সকাল ৮:৪৫-এ।', en: 'The day after tomorrow, Wednesday November 18th, at 8:45.' } },
      { speaker: 'Amico', it: 'Allora ripassiamo insieme domani pomeriggio!', tr: { bn: 'তাহলে চলো আগামীকাল বিকেলে একসাথে রিভিশন দিই!', en: 'Then let us review together tomorrow afternoon!' } },
    ],
  },
];

export const TIME_DATES_THEORY_CONFIG: AcademyTheoryConfig = {
  moduleId: 'time-dates',
  title: { bn: 'সময়, বার, মাস ও তারিখ', en: 'Time, Days, Months & Dates' },
  subtitle: {
    bn: 'দৈনন্দিন জীবন, ট্রেনের সময়সূচি, অ্যাপয়েন্টমেন্ট এবং ক্যালেন্ডারের অপরিহার্য নিয়ম',
    en: 'Complete A1 guide to clock time, calendar dates, seasons, and real schedules',
  },
  intro: {
    bn: 'ইতালিতে সময় ও তারিখ বলা খুবই নিয়মমাফিক। মাত্র তিনটি মূল নিয়ম মনে রাখলেই ভুল হবে না: (১) শুধু ১টা, দুপুর ১২টা ও রাত ১২টায় "È...", বাকি সব ঘণ্টায় "Sono le..."; (২) সপ্তাহের দিন ও মাস ছোট হাতের অক্ষরে হয়; এবং (৩) মাসের ১ তারিখে "il primo", বাকি ২–৩১ তারিখে সাধারণ সংখ্যা বসে।',
    en: 'Telling time and dates in Italian follows three clear anchor rules: (1) use singular "È" only for 1:00, noon, and midnight, and plural "Sono le" for everything else; (2) days and months are lowercase; and (3) use ordinal "il primo" only on the 1st of the month.',
  },
  highlights: [
    { label: 'È / Sono le', caption: { bn: '১টায় একবচন, বাকি সব ঘণ্টায় বহুবচন', en: 'Singular for 1:00 / noon / midnight; plural for 2–24' } },
    { label: 'il primo', caption: { bn: 'শুধু ১ তারিখে primo, ২–৩১ এ সাধারণ সংখ্যা', en: 'Ordinal only on the 1st; cardinal numbers 2–31' } },
    { label: '82 + 15', caption: { bn: '৮২টি আইটেম ও ১৫টি বাস্তব সংলাপ', en: '82 time/date items + 15 real dialogues' } },
  ],
  sections: [
    {
      id: 'td-clock-rules',
      heading: { bn: '১. ঘড়ির সময় বলার সঠিক নিয়ম', en: '1. Clock Time Grammar & Quarters' },
      summary: {
        bn: 'কয়টা বাজে (Che ora è? / Che ore sono?) এবং কয়টায় (A che ora?) — প্রিপোজিশনের পার্থক্য দেখুন।',
        en: 'Contrast telling the current time vs. stating the hour of an event.',
      },
      table: {
        headers: [
          { bn: 'সময়', en: 'Time' },
          { bn: 'এখন কয়টা বাজে', en: 'Current Time' },
          { bn: 'কয়টায় (ঘটনা)', en: 'At what time' },
        ],
        rows: [
          { cells: ['1:00', "È l'una.", "All'una"], audioIt: "È l'una. Arrivo all'una." },
          { cells: ['2:15', 'Sono le due e un quarto.', 'Alle due e un quarto'], audioIt: 'Sono le due e un quarto.' },
          { cells: ['6:30', 'Sono le sei e mezza.', 'Alle sei e mezza'], audioIt: 'Sono le sei e mezza.' },
          { cells: ['7:45', 'Sono le otto meno un quarto.', 'Alle otto meno un quarto'], audioIt: 'Sono le otto meno un quarto.' },
          { cells: ['12:00 / 00:00', 'È mezzogiorno. / È mezzanotte.', 'A mezzogiorno / A mezzanotte'], audioIt: 'È mezzogiorno.' },
        ],
      },
    },
    {
      id: 'td-calendar-rules',
      heading: { bn: '২. সপ্তাহ, মাস ও তারিখ লেখার নিয়ম', en: '2. Days, Months & Dates Without English Mistakes' },
      summary: {
        bn: 'ইংরেজির সাথে ইতালিয়ান তারিখের প্রধান পার্থক্যগুলো স্পষ্টভাবে জানুন।',
        en: 'Avoid the top calendar traps when switching from English to Italian.',
      },
      rules: [
        {
          id: 'td-rule-days',
          title: { bn: 'দিন ও মাসের আগে আর্টিকেল বা প্রিপোজিশন', en: 'Days & Months: Prepositions Matter' },
          body: {
            bn: 'একটি নির্দিষ্ট দিনে বোঝাতে প্রিপোজিশন ছাড়াই বলুন: "Venerdì lavoro." প্রতি সপ্তাহে বোঝাতে আর্টিকেল যোগ করুন: "Il venerdì lavoro." (প্রতি শুক্রবার)। মাসের আগে সবসময় "a" বা "in" বসে।',
            en: 'For a single day, use no preposition ("Venerdì parto"). For a recurring weekly habit, add "il" / "la" ("Il lunedì studio", "La domenica riposo"). Months take "a" or "in".',
          },
          examples: [
            { it: 'Sabato vado a Roma.', phoneticBn: 'সা-বা-তো ভা-দো আ রো-মা', phoneticEn: 'SAH-bah-toh VAH-doh ah ROH-mah', tr: { bn: 'এই শনিবার আমি রোমে যাচ্ছি।', en: 'This Saturday I am going to Rome.' } },
            { it: 'A luglio andiamo al mare.', phoneticBn: 'আ লুল-ইয়ো আন-দিয়া-মো আল মা-রে', phoneticEn: 'ah LOO-lyoh ahn-DYAH-moh ahl MAH-reh', tr: { bn: 'জুলাই মাসে আমরা সমুদ্রে যাই।', en: 'In July we go to the sea.' } },
          ],
        },
        {
          id: 'td-rule-dates',
          title: { bn: 'তারিখে শুধু ১লা-তে "il primo"', en: 'Only the 1st Uses "il primo"' },
          body: {
            bn: 'ইংরেজিতে "May second, May fifth" বললেও ইতালিতে ২ থেকে ৩১ তারিখ সবই সাধারণ সংখ্যায় হয় (il due maggio, il cinque maggio)। ব্যতিক্রম শুধু পহেলা তারিখ: il primo maggio।',
            en: 'Unlike English ordinals (2nd, 5th, 20th), Italian uses cardinal numbers for days 2 through 31. Only day 1 uses the ordinal "il primo".',
          },
          examples: [
            { it: 'Il primo gennaio è Capodanno.', phoneticBn: 'ইল প্রি-মো জেন-না-ইয়ো', phoneticEn: 'eel PREE-moh jehn-NAH-yoh', tr: { bn: 'পহেলা জানুয়ারি নববর্ষ।', en: 'January 1st is New Year’s Day.' } },
            { it: 'Il venti settembre iniziamo.', phoneticBn: 'ইল ভেন-তি সেৎ-তেম-ব্রে', phoneticEn: 'eel VEHN-tee seht-TEHM-breh', tr: { bn: 'বিশে সেপ্টেম্বর আমরা শুরু করছি।', en: 'We start on September 20th.' } },
          ],
        },
      ],
      mistakes: [
        {
          wrong: "Sono l'una / Alle uno",
          right: "È l'una / All'una",
          explanation: {
            bn: '১টা সবসময় স্ত্রীলিঙ্গ একবচন ("l’ora una"): তাই "È l’una" এবং "all’una" হয়।',
            en: '1:00 is always feminine singular: say "È l’una" and "all’una".',
          },
        },
        {
          wrong: 'Il secondo maggio',
          right: 'Il due maggio',
          explanation: {
            bn: 'শুধু ১ তারিখে "primo" হয়; ২ তারিখ থেকে সাধারণ সংখ্যা "due, tre..." ব্যবহার করুন।',
            en: 'Only the 1st uses an ordinal number; from day 2 onward always use cardinal numbers.',
          },
        },
      ],
    },
  ],
};

export const A1_TIME_DATES_REQUIRED_IDS: string[] = [
  ...A1_TIME_DATES_ITEMS.map((item) => item.id),
  ...A1_TIME_DATES_DIALOGUES.map((d) => d.id),
];

export const A1_TIME_DATES_DRILL_ITEMS: AcademyDrillItem[] = [
  {
    id: 'td-dr-1',
    drillKind: 'mcq',
    audioIt: "È l'una e mezza.",
    primaryLabel: "È l'una",
    secondaryLabel: '১:০০ / ১:৩০ (একবচন)',
    secondaryLabelTr: { bn: '১টার সময় একবচন "È l’una"', en: 'Singular "È l’una" for 1:00' },
    promptOverride: { bn: '১:৩০ বাজে—ইতালিয়ানে সঠিক কোনটি?', en: 'Which is grammatically correct for 1:30?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: "È l'una e mezza." },
      { id: 'o2', primaryLabel: "Sono l'una e mezza." },
      { id: 'o3', primaryLabel: 'È uno e mezza.' },
      { id: 'o4', primaryLabel: 'Sono le una e mezza.' },
    ],
    cueBn: 'এ লু-না এ মেজ-জা',
    cueEn: "1:00 is feminine singular: È l'una.",
    feedbackDetail: {
      bn: "১টার ক্ষেত্রে সবসময় 'È l’una' বসে, কখনো 'Sono' বা 'uno' নয়।",
      en: "Always use feminine singular \"È l'una\" for 1 o'clock.",
    },
  },
  {
    id: 'td-dr-2',
    drillKind: 'mcq',
    audioIt: 'Il primo maggio',
    primaryLabel: 'il primo maggio',
    secondaryLabel: 'পহেলা মে',
    secondaryLabelTr: { bn: 'শুধু ১লা তারিখে primo', en: 'Ordinal only on the 1st' },
    promptOverride: { bn: '“পহেলা মে” ইতালিয়ানে কীভাবে লিখবেন?', en: 'How do you say "May 1st" in Italian?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'il primo maggio' },
      { id: 'o2', primaryLabel: 'il uno maggio' },
      { id: 'o3', primaryLabel: 'la prima maggio' },
      { id: 'o4', primaryLabel: 'a uno maggio' },
    ],
    cueBn: 'ইল প্রি-মো মাজ-জো',
    cueEn: 'Day 1 of every month takes masculine ordinal "il primo".',
    feedbackDetail: {
      bn: 'মাসের ১ তারিখে ব্যতিক্রম হিসেবে "il primo + মাস" বসে।',
      en: 'The 1st of any month uniquely takes "il primo".',
    },
  },
  {
    id: 'td-dr-3',
    drillKind: 'matching',
    audioIt: 'oggi, ieri, domani, dopodomani',
    primaryLabel: 'Relative Days',
    secondaryLabel: 'সময়ের শব্দ মেলান',
    promptOverride: { bn: 'ইতালিয়ান সময়ের শব্দগুলোর সাথে সঠিক অর্থ মেলান:', en: 'Match each Italian time expression to its meaning:' },
    matchingPairs: [
      { id: 'p1', leftIt: 'ieri', rightTr: { bn: 'গতকাল', en: 'yesterday' } },
      { id: 'p2', leftIt: 'oggi', rightTr: { bn: 'আজ', en: 'today' } },
      { id: 'p3', leftIt: 'domani', rightTr: { bn: 'আগামীকাল', en: 'tomorrow' } },
      { id: 'p4', leftIt: 'dopodomani', rightTr: { bn: 'আগামী পরশু', en: 'day after tomorrow' } },
    ],
    cueBn: 'ইয়ে-রি / অজ-জি / দো-মা-নি',
    cueEn: 'Match yesterday, today, tomorrow, day after tomorrow.',
    feedbackDetail: {
      bn: 'ieri (গতকাল), oggi (আজ), domani (আগামীকাল), dopodomani (আগামী পরশু)।',
      en: 'Core daily timeline: ieri → oggi → domani → dopodomani.',
    },
  },
  {
    id: 'td-dr-4',
    drillKind: 'listening',
    audioIt: 'Sono le sette meno un quarto.',
    primaryLabel: '6:45 (পৌনে সাতটা)',
    secondaryLabel: 'Sono le sette meno un quarto.',
    promptOverride: { bn: 'অডিওটি শুনে সঠিক সময়টি বেছে নিন:', en: 'Listen carefully and choose the spoken clock time:' },
    explicitOptions: [
      { id: 'o1', primaryLabel: '6:45', secondaryLabel: 'meno un quarto' },
      { id: 'o2', primaryLabel: '7:15', secondaryLabel: 'e un quarto' },
      { id: 'o3', primaryLabel: '7:45', secondaryLabel: 'otto meno un quarto' },
      { id: 'o4', primaryLabel: '6:30', secondaryLabel: 'e mezza' },
    ],
    cueBn: 'সেৎ-তে মে-নো উন কুয়ার-তো',
    cueEn: '"sette meno un quarto" = 15 minutes before 7.',
    feedbackDetail: {
      bn: 'meno un quarto মানে পরের ঘণ্টা থেকে ১৫ মিনিট কম (৬:৪৫)।',
      en: 'meno un quarto means quarter to the hour (6:45).',
    },
  },
  {
    id: 'td-dr-5',
    drillKind: 'sentence-builder',
    audioIt: 'Il museo è aperto dalle nove alle diciotto.',
    primaryLabel: 'Schedule Sentence',
    secondaryLabel: 'সময়ের ব্যাপ্তি',
    promptOverride: { bn: '“জাদুঘরটি ৯টা থেকে ১৮টা পর্যন্ত খোলা” — শব্দ সাজিয়ে বাক্য বানান:', en: 'Build: "The museum is open from 9:00 to 18:00."' },
    sentenceTokens: ['dalle', 'è', 'Il', 'nove', 'aperto', 'museo', 'alle', 'diciotto.'],
    acceptedSentences: ['Il museo è aperto dalle nove alle diciotto.'],
    cueBn: 'দাল-লে নো-ভে আল-লে দি-চোৎ-তো',
    cueEn: 'Use "dalle ... alle ..." for hour ranges.',
    feedbackDetail: {
      bn: 'ঘণ্টার ব্যাপ্তি বোঝাতে "dalle [শুরু] alle [শেষ]" ব্যবহৃত হয়।',
      en: 'Opening hour spans use "dalle <start> alle <end>".',
    },
  },
  {
    id: 'td-dr-6',
    drillKind: 'fill-blank',
    audioIt: 'La domenica pranziamo in famiglia.',
    primaryLabel: 'La domenica',
    secondaryLabel: 'সপ্তাহের একমাত্র স্ত্রীলিঙ্গ দিন',
    promptOverride: { bn: 'শূন্যস্থান পূরণ করুন: ___ domenica pranziamo sempre insieme.', en: 'Fill in the blank: ___ domenica pranziamo sempre insieme.' },
    promptIt: '___ domenica pranziamo sempre insieme.',
    explicitOptions: [
      { id: 'o1', primaryLabel: 'La' },
      { id: 'o2', primaryLabel: 'Il' },
      { id: 'o3', primaryLabel: 'Lo' },
      { id: 'o4', primaryLabel: 'Le' },
    ],
    cueBn: 'লা দো-মে-নি-কা',
    cueEn: 'Unlike lunedì–sabato (masculine), domenica is feminine.',
    feedbackDetail: {
      bn: 'domenica স্ত্রীলিঙ্গ তাই প্রতি রবিবার বোঝাতে "La domenica" বসে।',
      en: 'domenica is the only feminine day of the week ("La domenica").',
    },
  },
  {
    id: 'td-dr-7',
    drillKind: 'matching',
    audioIt: 'primavera, estate, autunno, inverno',
    primaryLabel: 'Four Seasons',
    secondaryLabel: 'চার ঋতু মেলান',
    promptOverride: { bn: 'ইতালিয়ান চারটি ঋতুর সাথে সঠিক অর্থ মেলান:', en: 'Match each Italian season with its translation:' },
    matchingPairs: [
      { id: 's1', leftIt: 'la primavera', rightTr: { bn: 'বসন্তকাল', en: 'spring' } },
      { id: 's2', leftIt: "l'estate", rightTr: { bn: 'গ্রীষ্মকাল', en: 'summer' } },
      { id: 's3', leftIt: "l'autunno", rightTr: { bn: 'শরৎকাল', en: 'autumn' } },
      { id: 's4', leftIt: "l'inverno", rightTr: { bn: 'শীতকাল', en: 'winter' } },
    ],
    cueBn: 'প্রি-মা-ভে-রা / লেস-তা-তে',
    cueEn: 'Match the 4 seasons of the year.',
    feedbackDetail: {
      bn: 'primavera (বসন্ত), estate (গ্রীষ্ম), autunno (শরৎ), inverno (শীত)।',
      en: 'Notice estate and autunno/inverno take l’ before vowels.',
    },
  },
  {
    id: 'td-dr-8',
    drillKind: 'sentence-builder',
    audioIt: 'Il mio compleanno è il dodici marzo.',
    primaryLabel: 'Birthday Date',
    secondaryLabel: 'জন্মদিনের তারিখ',
    promptOverride: { bn: '“আমার জন্মদিন ১২ই মার্চ” — বাক্যটি সাজান:', en: 'Order the words: "My birthday is March 12th."' },
    sentenceTokens: ['è', 'marzo.', 'mio', 'Il', 'il', 'dodici', 'compleanno'],
    acceptedSentences: ['Il mio compleanno è il dodici marzo.'],
    cueBn: 'ইল মি-ও কোম-প্লে-আন-নো',
    cueEn: 'Month day 12 uses cardinal "il dodici marzo".',
    feedbackDetail: {
      bn: '২–৩১ তারিখে "il + সাধারণ সংখ্যা + মাস" বসে: il dodici marzo।',
      en: 'Days 2–31 always use cardinal numbers after "il".',
    },
  },
];

function tq(
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
    moduleId: 'time-dates',
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
export const A1_TIME_DATES_EXAM_POOL: AcademyExamQuestion[] = [
  tq('tdq-01', '১টা বাজলে ইতালিয়ানে কী বলতে হয়?', 'How do you say "It is 1:00" in Italian?', undefined, ["È l'una.", "Sono l'una.", 'È uno.', 'Sono le una.'], 0, '১টার ক্ষেত্রে সবসময় স্ত্রীলিঙ্গ একবচন "È l’una" ব্যবহৃত হয়।', '1:00 is always feminine singular: "È l’una."', "È l'una."),
  tq('tdq-02', 'রাত ৮:৩০ (সাড়ে আটটা) কীভাবে বলবেন?', 'How do you say "It is 8:30"?', undefined, ['Sono le otto e un quarto.', 'Sono le otto e mezza.', 'Sono le nove meno un quarto.', 'È le otto e mezza.'], 1, '"e mezza" অর্থ সাড়ে (৩০ মিনিট)।', '"e mezza" means half past the hour.', 'Sono le otto e mezza.'),
  tq('tdq-03', '"Il treno parte ___ nove" — কয়টায় বোঝাতে কী বসবে?', 'Complete: "Il treno parte ___ nove." (at 9:00)', 'Il treno parte ___ nove.', ['a le', 'alle', "all'", 'dalle'], 1, '১টা বাদে বাকি সব ঘণ্টার আগে "alle" বসে।', 'All hours except 1:00, noon, and midnight use "alle".', 'Il treno parte alle nove.'),
  tq('tdq-04', '"Sono le cinque meno un quarto" মানে কয়টা বাজে?', 'What time is "Sono le cinque meno un quarto"?', 'Sono le cinque meno un quarto.', ['5:15', '4:45', '5:45', '4:15'], 1, '"cinque meno un quarto" মানে ৫টা বাজতে ১৫ মিনিট বাকি (৪:৪৫)।', 'Quarter to five equals 4:45.', 'Sono le cinque meno un quarto.'),
  tq('tdq-05', '“পহেলা অক্টোবর” ইতালিয়ানে কোনটি সঠিক?', 'How do you say "October 1st" in Italian?', undefined, ['il uno ottobre', 'il primo ottobre', 'la prima ottobre', 'uno d’ottobre'], 1, 'মাসের ১ তারিখে শুধু "il primo + মাস" বসে।', 'The 1st of any month uniquely takes "il primo".', 'il primo ottobre'),
  tq('tdq-06', '“পনেরোই জুন” ইতালিয়ানে কীভাবে লিখবেন?', 'How do you say "June 15th" in Italian?', undefined, ['il quindici giugno', 'il quindicesimo giugno', 'a quindici giugno', 'quindici di giugno'], 0, '২–৩১ তারিখে সাধারণ সংখ্যা ব্যবহার হয়: il quindici giugno।', 'Days 2–31 take "il" + cardinal number + month.', 'il quindici giugno'),
  tq('tdq-07', 'সপ্তাহের কোন দিনটি ইতালিয়ানে স্ত্রীলিঙ্গ?', 'Which day of the week is feminine in Italian?', undefined, ['lunedì', 'mercoledì', 'sabato', 'domenica'], 3, 'lunedì থেকে sabato পর্যন্ত ৬ দিন পুংলিঙ্গ, শুধু domenica স্ত্রীলিঙ্গ।', 'Monday–Saturday are masculine; only domenica is feminine.', 'la domenica'),
  tq('tdq-08', '“প্রতি সোমবার আমি জিম যাই” — সঠিক কোনটি?', 'How do you say "Every Monday I go to the gym"?', undefined, ['Lunedì vado in palestra.', 'Il lunedì vado in palestra.', 'In lunedì vado in palestra.', 'Al lunedì vado sempre.'], 1, 'আর্টিকেল "Il lunedì" মানে প্রতি সোমবার।', 'Using the article ("il lunedì") indicates a recurring weekly routine.', 'Il lunedì vado in palestra.'),
  tq('tdq-09', '“dopodomani” শব্দটির অর্থ কী?', 'What does "dopodomani" mean?', 'dopodomani', ['day before yesterday', 'yesterday', 'day after tomorrow', 'next week'], 2, '"dopodomani" মানে আগামীকালের পরদিন (আগামী পরশু)।', '"dopodomani" means the day after tomorrow.', 'dopodomani', {
    bn: ['গত পরশু', 'গতকাল', 'আগামী পরশু', 'আগামী সপ্তাহ'],
    en: ['day before yesterday', 'yesterday', 'day after tomorrow', 'next week'],
  }),
  tq('tdq-10', '“দুপুর ১২টা” বোঝাতে কোন শব্দ ব্যবহার হয়?', 'Which word means "noon (12:00 PM)"?', undefined, ['mezzanotte', 'mezzogiorno', 'mattina', 'pomeriggio'], 1, 'mezzogiorno = দুপুর ১২টা, আর mezzanotte = রাত ১২টা।', 'mezzogiorno means noon; mezzanotte means midnight.', 'È mezzogiorno.'),
  tq('tdq-11', '“La settimana scorsa” অর্থ কী?', 'What does "la settimana scorsa" mean?', 'La settimana scorsa ho studiato molto.', ['this week', 'last week', 'next week', 'every week'], 1, '"scorso/scorsa" মানে গত (last)।', '"scorso/scorsa" means "last".', undefined, {
    bn: ['এই সপ্তাহ', 'গত সপ্তাহ', 'আগামী সপ্তাহ', 'প্রতি সপ্তাহ'],
    en: ['this week', 'last week', 'next week', 'every week'],
  }),
  tq('tdq-12', '“তিন দিন আগে” ইতালিয়ানে কী হবে?', 'How do you say "three days ago"?', undefined, ['tra tre giorni', 'tre giorni fa', 'tre giorni prima', 'scorsi tre giorni'], 1, '"[সময়] + fa" মানে অতীতের "... আগে" (ago)।', 'Italian expresses "ago" with "<time> fa".', 'tre giorni fa'),
  tq('tdq-13', '“৫ মিনিট পর” বোঝাতে কোনটি ঠিক?', 'How do you say "in 5 minutes" (future)?', undefined, ['cinque minuti fa', 'tra cinque minuti', 'prima cinque minuti', 'da cinque minuti'], 1, '"tra" বা "fra" ভবিষ্যতে "... পর" বোঝায়।', '"tra/fra + <duration>" means "in <duration>" from now.', 'tra cinque minuti'),
  tq('tdq-14', 'ইতালিয়ান ফর্মে 14/09/2026 কোন তারিখ নির্দেশ করে?', 'In Italy, what date is written as 14/09/2026?', '14/09/2026', ['April 9, 2026', 'September 14, 2026', 'October 14, 2026', 'September 9, 2026'], 1, 'ইতালিয়ান তারিখ বিন্যাস সবসময় দিন/মাস/বছর (DD/MM/YYYY)।', 'Italian dates always put day first, then month: 14 September 2026.', undefined, {
    bn: ['৯ই এপ্রিল ২০২৬', '১৪ই সেপ্টেম্বর ২০২৬', '১৪ই অক্টোবর ২০২৬', '৯ই সেপ্টেম্বর ২০২৬'],
    en: ['April 9, 2026', 'September 14, 2026', 'October 14, 2026', 'September 9, 2026'],
  }),
  tq('tdq-15', 'দোকানের সময় "dalle 9 alle 13" মানে কী?', 'What does "dalle 9 alle 13" mean on a shop sign?', 'Aperto dalle 9 alle 13', ['at 9:00 only', 'from 9:00 AM to 1:00 PM', 'after 13:00', 'before 9:00 AM'], 1, '"dalle ... alle ..." মানে ... থেকে ... পর্যন্ত; ১৩:০০ মানে দুপুর ১টা।', '"dalle ... alle ..." states opening-to-closing hours (9:00 AM to 1:00 PM).', undefined, {
    bn: ['শুধু ৯টায়', '৯টা থেকে দুপুর ১টা পর্যন্ত', '১৩টার পর', 'সকাল ৯টার আগে'],
    en: ['at 9:00 only', 'from 9:00 AM to 1:00 PM', 'after 13:00', 'before 9:00 AM'],
  }),
  tq('tdq-16', '"orario continuato" বলতে কী বোঝায়?', 'What does "orario continuato" mean?', 'orario continuato', ['closed for holidays', 'open continuously without lunch break', 'open at night only', 'reservation required'], 1, 'অনেক দোকান দুপুরে বন্ধ থাকে, কিন্তু "orario continuato" হলে বিরতি ছাড়াই খোলা থাকে।', '"orario continuato" means open continuously without a midday break.', undefined, {
    bn: ['সাপ্তাহিক বন্ধ', 'দুপুরের বিরতি ছাড়াই সারাদিন খোলা', 'শুধু রাতে খোলা', 'আগাম বুকিং প্রয়োজন'],
    en: ['closed for holidays', 'open continuously without lunch break', 'open at night only', 'reservation required'],
  }),
  tq('tdq-17', '“মে” মাসের পর কোন মাস আসে?', 'Which month comes directly after "maggio"?', undefined, ['aprile', 'giugno', 'luglio', 'agosto'], 1, 'maggio (মে)-এর পর giugno (জুন) আসে।', 'giugno (June) immediately follows maggio (May).', 'giugno'),
  tq('tdq-18', '“জানুয়ারি” থেকে “ডিসেম্বর”—সঠিক ক্রম কোনটি?', 'Which sequence shows Summer → Autumn → Winter?', undefined, ['estate → autunno → inverno', 'primavera → inverno → estate', 'autunno → estate → inverno', 'inverno → estate → primavera'], 0, 'estate (গ্রীষ্ম) → autunno (শরৎ) → inverno (শীত)।', 'Summer (estate) leads to autumn (autunno) and then winter (inverno).'),
  tq('tdq-19', '“রাত ১টায়” বোঝাতে কোনটি সঠিক?', 'Complete: "La festa finisce ___." (at 1:00)', undefined, ['alle una', "all'una", 'a una', 'dall’una'], 1, '১টায় বোঝাতে সবসময় "all’una" (a + l’una) বসে।', 'Combine a + l’una = "all’una".', "all'una"),
  tq('tdq-20', '“আগস্ট” মাসে ইতালিতে কী প্রায়ই দেখা যায়?', 'Which sentence matches Italian month grammar?', undefined, ['In Agosto fa freddo.', 'Ad agosto fa molto caldo.', 'Al agosto parto.', 'Di agosto è estate.'], 1, 'মাস ছোট হাতের অক্ষরে হয় এবং অগাস্ট (স্বরবর্ণ)-এর আগে "ad" বা "in" বসে; আগস্ট গ্রীষ্মকাল।', 'Months are lowercase and August is hot in summer ("Ad agosto fa molto caldo").', 'Ad agosto fa molto caldo.'),
  tq('tdq-21', '“গতকাল বিকেলে” ইতালিয়ানে কীভাবে বলবেন?', 'How do you say "yesterday afternoon"?', undefined, ['domani pomeriggio', 'ieri pomeriggio', 'stamattina', 'dopodomani sera'], 1, 'ieri = গতকাল + pomeriggio = বিকেল।', 'ieri (yesterday) + pomeriggio (afternoon).', 'ieri pomeriggio'),
  tq('tdq-22', '“Quanti ne abbiamo oggi?” প্রশ্নের অর্থ কী?', 'What does "Quanti ne abbiamo oggi?" ask?', 'Quanti ne abbiamo oggi?', ['How old are you?', 'What is today’s date?', 'What time is it?', 'How much is it?'], 1, 'তারিখ জানতে এটি একটি বহুল ব্যবহৃত ইতালিয়ান প্রশ্ন।', 'This idiomatic question asks for today’s date.', 'Quanti ne abbiamo oggi?', {
    bn: ['তোমার বয়স কত?', 'আজ কয় তারিখ?', 'এখন কয়টা বাজে?', 'দাম কত?'],
    en: ['How old are you?', 'What is today’s date?', 'What time is it?', 'How much is it?'],
  }),
  tq('tdq-23', '“Il mese ___ vado a Napoli” (আগামী মাসে)—শূন্যস্থানে কী বসবে?', 'Fill in "next": "Il mese ___ vado a Napoli."', 'Il mese ___ vado a Napoli.', ['scorso', 'prossimo', 'prima', 'fa'], 1, 'আগামী বোঝাতে "prossimo/prossima" বসে।', 'Use "prossimo" (m.) or "prossima" (f.) to say "next".', 'Il mese prossimo vado a Napoli.'),
  tq('tdq-24', '“বৃহস্পতিবার” ইতালিয়ান শব্দ কোনটি?', 'Which word means "Thursday"?', undefined, ['martedì', 'mercoledì', 'giovedì', 'venerdì'], 2, 'giovedì = বৃহস্পতিবার; মঙ্গলবার = martedì; বুধবার = mercoledì।', 'giovedì = Thursday; martedì = Tuesday; mercoledì = Wednesday.', 'giovedì'),
  tq('tdq-25', 'অ্যাপয়েন্টমেন্টের ১০ মিনিট পর পৌঁছানোর জন্য কোন বাক্যটি সঠিক?', 'Which phrase means "ten minutes late"?', undefined, ['in orario di dieci minuti', 'in ritardo di dieci minuti', 'in anticipo di dieci minuti', 'dopo dieci ore'], 1, '"in ritardo" অর্থ দেরিতে।', '"in ritardo di + time" means late by that amount of time.', 'Sono in ritardo di dieci minuti.'),
];
