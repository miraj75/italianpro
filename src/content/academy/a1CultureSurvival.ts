import type {
  AcademyDrillItem,
  AcademyExamQuestion,
  AcademyTheoryConfig,
} from './types';
import type { Tr } from '../types';

export type CultureCategoryId =
  | 'etiquette-social'
  | 'bar-restaurant'
  | 'transport-tickets'
  | 'supermarket-shops'
  | 'public-offices'
  | 'signs-emergencies';

export interface CultureSurvivalPhrase {
  id: string;
  category: CultureCategoryId;
  it: string;
  phoneticBn: string;
  phoneticEn: string;
  meaning: Tr;
  contextNote: Tr;
}

export interface CultureSituationGuide {
  id: string;
  order: number;
  category: CultureCategoryId;
  title: Tr;
  summary: Tr;
  checklist: Tr[];
  variabilityNote: Tr;
}

export interface CultureComprehensionExercise {
  id: string;
  situationTitle: Tr;
  scenario: Tr;
  itCue?: string;
  question: Tr;
  options: Tr[];
  answer: number;
  explanation: Tr;
}

export const A1_CULTURE_CATEGORIES: { id: CultureCategoryId; title: Tr; subtitle: Tr }[] = [
  { id: 'etiquette-social', title: { bn: '১. সামাজিক শিষ্টাচার ও সৌজন্য', en: '1. Social Etiquette & Greetings (17)' }, subtitle: { bn: 'Ciao vs Buongiorno, Lei, দোকানে প্রবেশ ও ধন্যবাদ', en: 'Entering shops, tu vs. Lei & daily politeness norms' } },
  { id: 'bar-restaurant', title: { bn: '২. ক্যাফে, কফি ও রেস্তোরাঁ নিয়ম', en: '2. Café & Restaurant Culture (17)' }, subtitle: { bn: 'al banco বনাম al tavolo, coperto, রসিদ ও খাবারের সময়', en: 'Counter vs. table pricing, coperto & ordering etiquette' } },
  { id: 'transport-tickets', title: { bn: '৩. পরিবহন ও টিকিট নিয়ম', en: '3. Transit & Ticket Validation (17)' }, subtitle: { bn: 'convalida, মেশিন পাঞ্চ, জরিমানা এড়ানো ও ট্রেন', en: 'Where to buy tickets, validating on board & fines' } },
  { id: 'supermarket-shops', title: { bn: '৪. সুপারমার্কেট ও বাজারের নিয়ম', en: '4. Supermarket, Weighing & Shop Hours (17)' }, subtitle: { bn: 'ফল-সবজির গ্লাভস ও ওজন, দুপুরে বিরতি (pausa pranzo)', en: 'Produce gloves/scales, reusable bags & midday closures' } },
  { id: 'public-offices', title: { bn: '৫. পাবলিক অফিস ও সাধারণ সেবা', en: '5. Public Offices, Posta & Tabaccheria (17)' }, subtitle: { bn: 'কিউ নম্বর (numerino), ফর্ম, বোলো ও ভদ্র ভাষা', en: 'Queue tickets, tabaccheria services & polite office basics' } },
  { id: 'signs-emergencies', title: { bn: '৬. সাইনবোর্ড ও জরুরি অবস্থা', en: '6. Street Signs & Emergencies (17)' }, subtitle: { bn: 'Aperto/Chiuso, Entrata/Uscita, Vietato ও ১১২ সাহায্য', en: 'Essential public signs, pharmacy duty & 112 emergency help' } },
];

function cp(
  id: string,
  category: CultureCategoryId,
  it: string,
  phoneticBn: string,
  phoneticEn: string,
  bn: string,
  en: string,
  noteBn: string,
  noteEn: string,
): CultureSurvivalPhrase {
  return {
    id,
    category,
    it,
    phoneticBn,
    phoneticEn,
    meaning: { bn, en },
    contextNote: { bn: noteBn, en: noteEn },
  };
}

// 102 useful phrases (17 × 6 categories >= 100 required)
export const A1_CULTURE_PHRASES: CultureSurvivalPhrase[] = [
  // 1. Etiquette & Social (17)
  cp('cs-et-01', 'etiquette-social', 'Buongiorno a tutti!', 'বু-ওন-জোর-নো আ তুৎ-তি', 'bwohn-JOR-noh ah TOOT-tee', 'সবাইকে শুভ সকাল!', 'Good morning everyone!', 'ছোট দোকান বা অফিসে ঢোকার সময় সবাইকে সম্ভাষণ জানানো ভদ্রতা।', 'Polite custom when entering a small shop or waiting room.'),
  cp('cs-et-02', 'etiquette-social', 'Permesso? Posso entrare?', 'পের-মেস-সো পোস-সো এন-ত্রা-রে', 'pehr-MEHS-soh POHS-soh ehn-TRAH-reh', 'মাফ করবেন? ভেতরে আসতে পারি?', 'Excuse me? May I come in?', 'অফিসের দরজা খোলা থাকলেও নক করে অনুমতি নেওয়া ভালো অভ্যাস।', 'Say "Permesso?" before crossing into someone’s office or home.'),
  cp('cs-et-03', 'etiquette-social', 'Mi scusi, posso disturbarla un attimo?', 'মি স্কু-জি পোস-সো', 'mee SKOO-zee POHS-soh', 'মাফ করবেন, এক মুহূর্ত সময় নিতে পারি?', 'Excuse me, may I bother you a moment?', 'অপরিচিত কারো কাছে রাস্তা বা তথ্য জানার আগে ভদ্র শুরু।', 'Ideal formal opener with strangers or staff.'),
  cp('cs-et-04', 'etiquette-social', 'Possiamo darci del tu?', 'পোস-সিয়া-মো দার-চি দেল তু', 'pohs-SYAH-moh DAHR-chee dehl too', 'আমরা কি “তুমি” (tu) করে বলতে পারি?', 'May we use informal "tu"?', 'অপরিচিত প্রাপ্তবয়স্ককে প্রথমে Lei বলুন, তারপর প্রয়োজনে tu জিজ্ঞাসা করুন।', 'Always ask before switching from formal Lei to informal tu.'),
  cp('cs-et-05', 'etiquette-social', 'Prego, si figuri!', 'প্রে-গো সি ফি-গু-রি', 'PREH-goh see fee-GOO-ree', 'কিছু না, কোনো সমস্যাই না!', 'You are welcome / Think nothing of it!', 'কেউ দুঃখ প্রকাশ করলে বা ধন্যবাদ দিলে উষ্ণ উত্তর।', 'Warm Italian reply to apologies or thanks.'),
  cp('cs-et-06', 'etiquette-social', 'Non c’è problema, tranquillo!', 'নোন চে প্রো-ব্লে-মা', 'nohn cheh proh-BLEH-mah', 'কোনো সমস্যা নেই, নিশ্চিন্ত থাকুন!', 'No problem, relax!', 'সচরাচর বন্ধুত্বপূর্ণ কথোপকথনে আশ্বস্ত করতে ব্যবহৃত হয়।', 'Casual reassurance in everyday speech.'),
  cp('cs-et-07', 'etiquette-social', 'Buon appetito!', 'বু-ওন আপ-পে-তি-তো', 'bwohn ahp-peh-TEE-toh', 'খাবার উপভোগ করুন! (শুভ আহার)', 'Enjoy your meal!', 'খাবার শুরু করার আগে সবাই পরস্পরকে বলে।', 'Always said before starting a shared meal.'),
  cp('cs-et-08', 'etiquette-social', 'Salute! / Cin cin!', 'সা-লু-তে / চিন চিন', 'sah-LOO-teh / cheen cheen', 'চিয়ার্স / সুস্বাস্থ্য কামনা!', 'Cheers / To your health!', 'একসাথে পানীয় তোলার সময় এবং কেউ হাঁচি দিলে "Salute!" বলে।', 'Used when toasting (avoid saying cin cin formally) or after a sneeze.'),
  cp('cs-et-09', 'etiquette-social', 'Buona giornata e buon lavoro!', 'বু-ও-না জোর-না-তা', 'BWOH-nah jor-NAH-tah', 'দিনটি শুভ হোক ও কাজ ভালো কাটুক!', 'Have a good day and good work!', 'সকালে দোকান বা ক্যাফে থেকে বের হওয়ার সময় বলা হয়।', 'Friendly farewell to shopkeepers and staff during daytime.'),
  cp('cs-et-10', 'etiquette-social', 'Buona serata e buon fine settimana!', 'বু-ও-না সে-রা-তা', 'BWOH-nah seh-RAH-tah', 'সন্ধ্যাটি শুভ হোক ও শুভ উইকএন্ড!', 'Have a nice evening and good weekend!', 'বিকেল ও শুক্রবার বিদায় নেওয়ার আদর্শ বাক্য।', 'Used in late afternoon or Fridays when parting.'),
  cp('cs-et-11', 'etiquette-social', 'È stato un vero piacere conoscerla.', 'এ স্তা-তো উন ভে-রো', 'eh STAH-toh oon VEH-roh', 'আপনার সাথে পরিচিত হয়ে সত্যিই ভালো লাগল।', 'It was a real pleasure meeting you.', 'আনুষ্ঠানিক সাক্ষাৎ শেষে ভদ্র বিদায়।', 'Polite formal closing after a first meeting.'),
  cp('cs-et-12', 'etiquette-social', 'Mi raccomando!', 'মি রাক-কো-মান-দো', 'mee rahk-koh-MAHN-doh', 'ভালোভাবে খেয়াল রেখো / অনুরোধ রইল!', 'Please make sure / Take good care!', 'গুরুত্বপূর্ণ উপদেশ বা অনুরোধে জোর দিতে ব্যবহৃত হয়।', 'Expressive phrase meaning "I’m counting on you / be careful."'),
  cp('cs-et-13', 'etiquette-social', 'Faccia pure, prima Lei!', 'ফাচ-চা পু-রে প্রি-মা লে-ই', 'FAHCH-chah POO-reh PREE-mah leh-ee', 'অবশ্যই আপনি আগে যান!', 'Please go ahead, after you!', 'দরজা খুলে দেওয়া বা লাইনে কাউকে আগে যেতে দেওয়ার ভদ্রতা।', 'Polite way to yield the doorway or counter spot.'),
  cp('cs-et-14', 'etiquette-social', 'Mi dispiace molto per il ritardo.', 'মি দিস-পিয়া-চে মোল-তো', 'mee dees-PYAH-cheh MOHL-toh', 'দেরির জন্য আমি আন্তরিকভাবে দুঃখিত।', 'I am very sorry for being late.', '১০–১৫ মিনিট দেরি হলে প্রথমেই দুঃখ প্রকাশ করা উচিত।', 'Italian social life tolerates small delays, yet an apology is valued.'),
  cp('cs-et-15', 'etiquette-social', 'Grazie dell’ospitalità!', 'গ্রা-ৎসিয়ে দেল-লোস-পি-তা-লি-তা', 'GRAH-tsyeh dehl-lohs-pee-tah-lee-TAH', 'আতিথেয়তার জন্য ধন্যবাদ!', 'Thank you for your hospitality!', 'কারো বাসায় দাওয়াতে গেলে বিদায়ের সময় বলুন।', 'Thanking a host after visiting their home.'),
  cp('cs-et-16', 'etiquette-social', 'Magari la prossima volta!', 'মা-গা-রি লা প্রোস-সি-মা ভোল-তা', 'mah-GAH-ree lah PROHS-see-mah VOHL-tah', 'হয়তো পরের বার!', 'Maybe next time!', 'ভদ্রভাবে আমন্ত্রণ এড়াতে বা আশা প্রকাশ করতে ব্যবহৃত।', 'Warm, polite phrase when declining or hoping for another meetup.'),
  cp('cs-et-17', 'etiquette-social', 'In bocca al lupo! — Crepi!', 'ইন বোক-কা আল লু-পো', 'een BOHK-kah ahl LOO-poh', 'শুভকামনা! — ধন্যবাদ!', 'Good luck! — Thank you!', 'পরীক্ষা বা ইন্টারভিউয়ের আগে ইতালিয়ানরা "In bocca al lupo" বলে, উত্তরে "Crepi!" বা "Grazie!" বলবেন।', 'Traditional Italian good-luck wish before exams or interviews.'),

  // 2. Bar & Restaurant (17)
  cp('cs-bar-01', 'bar-restaurant', 'Un caffè al banco, grazie.', 'উন কাফ-ফে আল বান-কো', 'oon kahf-FEH ahl BAHN-koh', 'কাউন্টারে একটি এসপ্রেসো কফি, ধন্যবাদ।', 'One espresso at the counter, thanks.', 'ইতালিতে শুধু "un caffè" বললে ছোট এসপ্রেসো বোঝায়।', 'In Italy "un caffè" means a single espresso shot.'),
  cp('cs-bar-02', 'bar-restaurant', 'Si paga prima alla cassa o dopo?', 'সি পা-গা প্রি-মা আল-লা কাস-সা', 'see PAH-gah PREE-mah ahl-lah KAHS-sah', 'কি আগে ক্যাশে টাকা দিতে হয় নাকি পরে?', 'Do we pay at the register first or after?', 'অনেক বারে আগে ক্যাশে পেমেন্ট করে রসিদ বারিস্তাকে দিতে হয়।', 'Some busy cafés require paying at the register first, then handing the receipt to the barista.'),
  cp('cs-bar-03', 'bar-restaurant', 'Il cappuccino solo la mattina!', 'ইল কাপ-পুচ-চি-নো সো-লো লা মাৎ-তি-না', 'eel kahp-pooch-CHEE-noh', 'কাপুচ্চিনো সাধারণত সকালে খাওয়া হয়!', 'Cappuccino is typically a morning drink!', 'সাংস্কৃতিক অভ্যাস: দুপুরের খাবারের পর সাধারণত দুধের কফি এড়িয়ে শুধু এসপ্রেসো নেওয়া হয়।', 'Cultural habit: locals rarely order milky coffee after lunch.'),
  cp('cs-bar-04', 'bar-restaurant', 'Al banco costa meno che al tavolo.', 'আল বান-কো কোস-তা মে-নো', 'ahl BAHN-koh KOHS-tah MEH-noh', 'কাউন্টারে খেলে টেবিলের চেয়ে দাম কম পড়ে।', 'At the counter it costs less than at a table.', 'বাইরের টেবিলে বসলে সার্ভিস চার্জ যোগ হতে পারে।', 'Standing at the bar avoids table-service surcharges.'),
  cp('cs-bar-05', 'bar-restaurant', 'Che cosa significa “coperto”?', 'কে কো-জা সিন-ই-ফি-কা কো-পের-তো', 'keh KOH-zah koh-PEHR-toh', '“কোপের্তো” (কভার চার্জ) মানে কী?', 'What does "coperto" mean?', 'অনেক রেস্তোরাঁয় প্রতি জনের জন্য ১.৫–৩ ইউরো কোপের্তো (রুটি/টেবিল সেটআপ ফি) থাকে।', 'Many sit-down restaurants charge a fixed per-person bread/table fee ("coperto") listed on the menu.'),
  cp('cs-bar-06', 'bar-restaurant', 'La mancia non è obbligatoria, ma gradita.', 'লা মান-চা নোন এ অব-ব্লি-গা-তো-রিয়া', 'lah MAHN-chah', 'টিপস (বকশিশ) বাধ্যতামূলক নয়।', 'Tipping is not mandatory, though appreciated.', 'বিলের ওপর কয়েন বা সামান্য টিপস রেখে দেওয়া ঐচ্ছিক।', 'Unlike the US, Italian service does not require 15–20% tips.'),
  cp('cs-bar-07', 'bar-restaurant', 'Posso avere un caffè macchiato caldo?', 'পোস-সো আ-ভে-রে উন কাফ-ফে মাক-কিয়া-তো', 'mahk-KYAH-toh KAHL-doh', 'গরম দুধের ফোঁটাসহ একটি কফি পেতে পারি?', 'Can I have an espresso with a dash of hot milk?', 'হালকা দুধ চাইলে "caffè macchiato" দারুণ পছন্দ।', 'Espresso stained with a splash of steamed milk.'),
  cp('cs-bar-08', 'bar-restaurant', 'Un decaffeinato, per favore.', 'উন দে-কাফ-ফেই-না-তো', 'deh-kahf-feh-ee-NAH-toh', 'ক্যাফেইনমুক্ত কফি, দয়া করে।', 'A decaf coffee, please.', 'সন্ধ্যায় ক্যাফেইন ছাড়া কফি খেতে চাইলে বলুন।', 'Common evening choice if avoiding caffeine.'),
  cp('cs-bar-09', 'bar-restaurant', 'Acqua in caraffa o in bottiglia?', 'আক-কুয়া ইন কা-রাফ-ফা', 'AHK-kwah een kah-RAHF-fah', 'জাগে (ট্যাপ) নাকি বোতলের পানি?', 'Carafe water or bottled water?', 'ইতালিতে রেস্তোরাঁয় সাধারণত বোতলের পানি দেওয়া হয়।', 'Restaurants generally bring sealed bottles unless carafe tap water is available.'),
  cp('cs-bar-10', 'bar-restaurant', 'Vorrei solo un primo piatto.', 'ভোর-রেই সো-লো উন প্রি-মো পিয়াত-তো', 'PREE-moh PYAHT-toh', 'আমি শুধু প্রথম পদ (পাস্তা/রিসোতো) চাই।', 'I would just like a first course.', 'পূর্ণ মেনু মানে Antipasto, Primo, Secondo, Dolce—সব অর্ডার করা বাধ্যতামূলক নয়।', 'You do not have to order every course of a full menu.'),
  cp('cs-bar-11', 'bar-restaurant', 'Sono allergico alle noci / al lattosio.', 'সো-নো আল-লের-জি-কো', 'ahl-LEHR-jee-koh', 'বাদাম / দুধের ল্যাকটোজে আমার অ্যালার্জি আছে।', 'I am allergic to nuts / lactose.', 'খাবার অর্ডার করার আগেই অ্যালার্জি জানিয়ে দিন।', 'Always mention food allergies before ordering.'),
  cp('cs-bar-12', 'bar-restaurant', 'C’è un piatto senza glutine?', 'চে উন পিয়াত-তো সেন-ৎসা গ্লু-তি-নে', 'SEHN-tsah GLOO-tee-neh', 'গ্লুটেন-মুক্ত কোনো খাবার আছে কি?', 'Is there a gluten-free dish?', 'ইতালিতে গ্লুটেন-মুক্ত খাবারের ভালো সচেতনতা রয়েছে।', 'Italy has strong celiac awareness; ask "senza glutine".'),
  cp('cs-bar-13', 'bar-restaurant', 'Non bevo alcolici, avete analcolici?', 'নোন বে-ভো আল-কো-লি-চি', 'nohn BEH-voh ahl-KOH-lee-chee', 'আমি অ্যালকোহল পান করি না, নন-অ্যালকোহলিক পানীয় আছে?', 'I do not drink alcohol, do you have non-alcoholic drinks?', 'সুপারমার্কেট বা ক্যাফেতে "analcolico" (যেমন Crodino বা সোডা/জুস) চাইতে পারেন।', 'Ask for "qualcosa di analcolico" or fruit juice/sparkling water.'),
  cp('cs-bar-14', 'bar-restaurant', 'La cucina apre alle diciannove e trenta.', 'লা কু-চি-না আ-প্রে', 'lah koo-CHEE-nah AH-preh', 'রান্নাঘর সন্ধ্যা ৭:৩০-এ খোলে।', 'The kitchen opens at 7:30 PM.', 'অনেক ইতালিয়ান রেস্তোরাঁ রাত ৭:৩০–৮:০০-এর আগে রাতের খাবার শুরু করে না।', 'Traditional trattorias often open dinner service around 19:30.'),
  cp('cs-bar-15', 'bar-restaurant', 'Lo prendo da asporto, grazie.', 'লো প্রেন-দো দা আস-পোর-তো', 'dah ahs-POHR-toh', 'আমি এটি সাথে নিয়ে যাব (টেকঅ্যাওয়ে)।', 'I will take it to go / takeaway, thanks.', '"da asporto" অথবা "portare via" মানে পার্সেল বা টেকঅ্যাওয়ে।', 'Use "da asporto" for takeout food or pizza.'),
  cp('cs-bar-16', 'bar-restaurant', 'È possibile fare il bis?', 'এ পোস-সি-বি-লে ফা-রে ইল বিস', 'FAH-reh eel bees', 'আরও একবার নেওয়া কি সম্ভব?', 'Is it possible to have seconds?', 'বন্ধুত্বপূর্ণ বা পারিবারিক খাবারে দ্বিতীয়বার নেওয়ার ভদ্র বাক্য।', 'Used warmly at family meals or informal gatherings.'),
  cp('cs-bar-17', 'bar-restaurant', 'Lo scontrino fiscale alla cassa!', 'লো স্কোন-ত্রি-নো ফিস-কা-লে', 'eel skohn-TREE-noh', 'ক্যাশে রসিদ অবশ্যই নেবেন!', 'Keep your tax receipt from the cashier!', 'দোকান বা ক্যাফে থেকে বের হওয়ার সময় কেনাকাটার রসিদ সাথে রাখুন।', 'Good everyday habit to take your receipt when exiting cafés and shops.'),

  // 3. Transport & Tickets (17)
  cp('cs-trn-01', 'transport-tickets', 'Compro il biglietto prima di salire.', 'কোম-প্রো ইল বিল-ইয়েৎ-তো প্রি-মা', 'KOHM-proh eel bee-LYEHT-toh', 'বাসে ওঠার আগে টিকিট কিনব।', 'I buy the ticket before getting on.', 'বাসে সবসময় চালকের কাছে টিকিট নাও থাকতে পারে; তাই আগেই কিনুন।', 'Buy city transit tickets beforehand at a tabaccheria, kiosk, or transit app.'),
  cp('cs-trn-02', 'transport-tickets', 'Alla tabaccheria con la “T” blu.', 'আল-লা তা-বাক-কে-রিয়া', 'tah-bahk-keh-REE-ah', 'নীল “T” সাইনওয়ালা তাবাক্কেরিয়াতে।', 'At the tobacco shop with the blue "T" sign.', 'তাবাক্কেরিয়ায় বাসের টিকিট, ডাকটিকিট ও রিভেন্যু স্ট্যাম্প পাওয়া যায়।', 'Tabaccherie sell bus tickets, postage stamps, and tax stamps.'),
  cp('cs-trn-03', 'transport-tickets', 'Inserisci il biglietto nella macchinetta!', 'ইন-সে-রি-শি ইল বিল-ইয়েৎ-তো', 'een-seh-REE-shee', 'টিকিট পাঞ্চ করার মেশিনে কার্ড ঢোকান!', 'Insert the ticket into the validation machine!', 'পাঞ্চ না করলে টিকিট অবৈধ ধরা হতে পারে এবং জরিমানা হতে পারে।', 'Unvalidated paper tickets are treated as invalid during inspections.'),
  cp('cs-trn-04', 'transport-tickets', 'Anche sui treni regionali si convalida!', 'আন-কে সুই ত্রে-নি রে-জো-না-লি', 'TREH-nee reh-joh-NAH-lee', 'আঞ্চলিক ট্রেনের কাগজের টিকিটও পাঞ্চ করতে হয়!', 'Paper tickets on regional trains must also be validated!', 'প্ল্যাটফর্মে যাওয়ার আগে সবুজ/হলুদ ভ্যালিডেটর মেশিনে টিকিট ছাপ নিন।', 'Stamp paper regional train tickets in the station validator before boarding.'),
  cp('cs-trn-05', 'transport-tickets', 'Attenzione alla multa sul bus!', 'আৎ-তেন-ৎসি-ও-নে আল-লা মুল-তা', 'aht-tehn-TSYOH-neh ahl-lah MOOL-tah', 'বাসে জরিমানা থেকে সাবধান থাকুন!', 'Watch out for fines on the bus!', 'টিকিট পরিদর্শক (controllore) যেকোনো সময় টিকিট দেখতে পারেন।', 'Inspectors conduct random ticket checks across transit networks.'),
  cp('cs-trn-06', 'transport-tickets', 'Biglietto digitale sul telefono.', 'বিল-ইয়েৎ-তো দি-জি-তা-লে', 'bee-LYEHT-toh dee-jee-TAH-leh', 'ফোনে ডিজিটাল টিকিট।', 'Digital ticket on your phone.', 'অনেক শহরে এসএমএস, এনএফসি কার্ড বা অফিসিয়াল অ্যাপ দিয়েও টিকিট কাটা যায়।', 'Contactless bank card tap or official transit apps work in many major cities.'),
  cp('cs-trn-07', 'transport-tickets', 'Controlla il tabellone delle partenze.', 'কোন-ত্রোল-লা ইল তা-বেল-লো-নে', 'eel tah-behl-LOH-neh', 'ট্রেন ছাড়ার ডিসপ্লে বোর্ডটি দেখুন।', 'Check the departures board.', 'বোর্ডে সময় ও প্ল্যাটফর্ম নম্বর (Binario) দেখা যায়।', '"Partenze" = departures; "Arrivi" = arrivals.'),
  cp('cs-trn-08', 'transport-tickets', 'Il binario può cambiare all’ultimo minuto.', 'ইল বি-না-রিও পু-ও কাম-বিয়া-রে', 'eel bee-NAH-ryoh', 'শেষ মুহূর্তে প্ল্যাটফর্ম বদলাতে পারে।', 'The platform may change at the last minute.', 'ট্রেন আসার ১০ মিনিট আগে আবার ডিসপ্লে দেখে নিশ্চিত হোন।', 'Always double-check the binario notice 5–10 minutes prior.'),
  cp('cs-trn-09', 'transport-tickets', 'Premi il pulsante rosso per prenotare la fermata.', 'প্রে-মি ইল পুল-সান-তে রোস-সো', 'eel pool-SAHN-teh ROHS-soh', 'বাস থামাতে লাল বোতাম চাপুন।', 'Press the red stop button to request your stop.', 'বোতাম না চাপলে খালি স্টপে বাস নাও থামতে পারে!', 'Italian buses do not stop if nobody requests the stop or waits outside.'),
  cp('cs-trn-10', 'transport-tickets', 'Si sale dalla porta anteriore o posteriore?', 'সি সা-লে দাল-লা পোর-তা', 'see SAH-leh', 'সামনের দরজা না পেছনের দরজা দিয়ে উঠতে হয়?', 'Do you board from the front or back door?', 'শহরভেদে নিয়ম আলাদা; দরজার তীর চিহ্ন বা Salita/Discesa লেখা দেখুন।', 'Signs on bus doors indicate "Salita" (board) and "Discesa" (exit).'),
  cp('cs-trn-11', 'transport-tickets', 'Ceda il posto alle persone anziane.', 'চে-দা ইল পোস-তো', 'CHEH-dah eel POHS-toh', 'বয়স্ক ও গর্ভবতী যাত্রীদের আসন ছেড়ে দিন।', 'Give up your seat to elderly passengers.', 'বাস/মেট্রোর নীল বা চিহ্নিত সিট অগ্রাধিকার যাত্রীদের জন্য।', 'Priority seats are reserved for seniors, pregnant women, and disabled riders.'),
  cp('cs-trn-12', 'transport-tickets', 'Il taxi si prende alla piazzola o si chiama.', 'ইল তাক-সি সি প্রেন-দে', 'eel TAHK-see', 'ট্যাক্সি স্ট্যান্ড থেকে নিতে হয় বা ফোন করে ডাকতে হয়।', 'Take taxis at a taxi rank or call dispatch.', 'ইতালিতে রাস্তায় হাত তুলে ট্যাক্সি থামানোর চেয়ে স্ট্যান্ড বা কল বেশি প্রচলিত।', 'Generally hail licensed white taxis at designated ranks (Posteggio Taxi) or via radio taxi.'),
  cp('cs-trn-13', 'transport-tickets', 'Lo sciopero dei trasporti venerdì.', 'লো শো-পে-রো দেই ত্রাস-পোর-তি', 'loh SHOH-peh-roh', 'শুক্রবার পরিবহন ধর্মঘট।', 'Public transit strike on Friday.', 'মাঝে মাঝে পরিবহন ধর্মঘট (sciopero) হয়, তবে নির্দিষ্ট ব্যস্ত সময়ে ("fasce di garanzia") সেবা চালু থাকে।', 'During strikes ("sciopero"), peak commuter hours remain guaranteed.'),
  cp('cs-trn-14', 'transport-tickets', 'Frecciarossa / Regionale / Intercity.', 'ফ্রেচ-চা-রোস-সা / রে-জো-না-লে', 'frehch-chah-ROHS-sah', 'হাই-স্পিড / লোকাল / ইন্টারসিটি ট্রেন।', 'High-speed / Regional / Intercity trains.', 'হাই-স্পিড ট্রেনে নির্দিষ্ট সিট বুকিং বাধ্যতামূলক; লোকাল ট্রেনে যেকোনো আসনে বসা যায়।', 'High-speed trains require reserved seats; regional trains have open seating.'),
  cp('cs-trn-15', 'transport-tickets', 'Attenti alle borse nelle stazioni affollate!', 'আৎ-তেন-তি আল-লে বোর-সে', 'aht-TEHN-tee', 'ভিড় স্টেশনে ব্যাগ ও মানিব্যাগ সাবধানে রাখুন!', 'Watch your bags in crowded stations!', 'বড় শহরের ভিড় এলাকায় পকেটমারের ব্যাপারে সতর্ক থাকা ভালো।', 'Keep backpacks zipped and phones secure in crowded metro hubs.'),
  cp('cs-trn-16', 'transport-tickets', 'Tenga il biglietto fino all’uscita della metro!', 'তেন-গা ইল বিল-ইয়েৎ-তো', 'TEHN-gah eel bee-LYEHT-toh', 'মেট্রো থেকে বের না হওয়া পর্যন্ত টিকিট হাতে রাখুন!', 'Keep your ticket until you exit the metro!', 'বের হওয়ার সময়ও টিকিট গেটে স্ক্যান করতে হতে পারে।', 'Many metro stations require scanning the ticket again at exit turnstiles.'),
  cp('cs-trn-17', 'transport-tickets', 'Sottopassaggio per i binari.', 'সৎ-তো-পাস-সাজ-জো', 'soht-toh-pahs-SAHJ-joh', 'প্ল্যাটফর্মে যাওয়ার আন্ডারপাস (পাতাল পথ)।', 'Underpass to train platforms.', 'স্টেশনে কখনো রেললাইন হেঁটে পার হবেন না; আন্ডারপাস ব্যবহার করুন।', 'Always cross tracks via the pedestrian underpass ("sottopassaggio").'),

  // 4. Supermarket & Shops (17)
  cp('cs-sup-01', 'supermarket-shops', 'Metti i guanti monouso per la frutta!', 'মেৎ-তি ই গুয়ান-তি', 'MEHT-tee ee GWAHN-tee', 'ফল ধরার আগে প্লাস্টিকের গ্লাভস পরুন!', 'Put on disposable gloves for produce!', 'ইতালিয়ান সুপারমার্কেটে খালি হাতে খোলা ফল ও সবজি ধরা নিষেধ।', 'In Italian supermarkets, wear the free gloves provided at produce bins.'),
  cp('cs-sup-02', 'supermarket-shops', 'Pesa la verdura e attacca l’etichetta!', 'পে-জা লা ভের-দু-রা', 'PEH-zah lah vehr-DOO-rah', 'সবজি ওজন করে প্রিন্টেড স্টিকার লাগান!', 'Weigh the vegetables and attach the sticker!', 'অনেক দোকানে ক্রেতাকেই ওজন মেশিনে কোড টিপে স্টিকার বের করতে হয়।', 'Often customers weigh produce themselves and stick the barcode label on the bag.'),
  cp('cs-sup-03', 'supermarket-shops', 'Porta una borsa riutilizzabile da casa.', 'পোর-তা উ-না বোর-সা', 'POHR-tah OO-nah BOHR-sah', 'বাসা থেকে পুনঃব্যবহারযোগ্য ব্যাগ আনুন।', 'Bring a reusable shopping bag from home.', 'দোকানে প্রতিটি ব্যাগের জন্য সামান্য টাকা (প্রায় ১০ সেন্ট) দিতে হয়।', 'Stores charge a small fee for every single-use compostable bag.'),
  cp('cs-sup-04', 'supermarket-shops', 'Alcuni negozi chiudono per pausa pranzo.', 'আল-কু-নি নে-গোট-সি কিউ-দো-নো', 'ahl-KOO-nee neh-GOH-tsee', 'কিছু দোকান দুপুরে বিরতির জন্য বন্ধ থাকে।', 'Some shops close for a midday break.', 'ছোট দোকানগুলো সাধারণত দুপুর ১টা থেকে ৩:৩০/৪:০০ পর্যন্ত বন্ধ থাকতে পারে।', 'Small family shops often close from ~13:00 to 15:30/16:00 (region-dependent).'),
  cp('cs-sup-05', 'supermarket-shops', 'Il mercato rionale della mattina.', 'ইল মের-কা-তো রিও-না-লে', 'eel mehr-KAH-toh', 'সকালের পাড়ার খোলা বাজার।', 'The morning neighborhood open-air market.', 'তাজা ফল, সবজি ও মাছ কেনার জন্য সকালের খোলা বাজার দারুণ জায়গা।', 'Local outdoor markets typically operate mornings until ~13:00.'),
  cp('cs-sup-06', 'supermarket-shops', 'Posso avere una fetta per assaggiare?', 'পোস-সো আ-ভে-রে উ-না ফেৎ-তা', 'OO-nah FEHT-tah', 'স্বাদ দেখার জন্য এক টুকরো পেতে পারি?', 'May I have a slice to taste?', 'বাজারে পনির বা ফল কেনার আগে বিক্রেতা প্রায়ই স্বাদ নিতে দেন।', 'Local market vendors sometimes offer a sample before you buy.'),
  cp('cs-sup-07', 'supermarket-shops', 'Non toccare la merce al mercato, chiedi al venditore!', 'নোন তোক-কা-রে লা মের-চে', 'nohn tohk-KAH-reh lah MEHR-cheh', 'খোলা বাজারে নিজে ফল ধরবেন না, বিক্রেতাকে বলুন!', 'Do not touch produce at street markets—ask the vendor!', 'খোলা বাজারে বিক্রেতা নিজে ব্যাগে ফল বা সবজি বেছে দেন।', 'At traditional street stalls, point and let the vendor pick and weigh items.'),
  cp('cs-sup-08', 'supermarket-shops', 'I negozi ad agosto fanno chiusura estiva.', 'কিউ-জু-রা এস-তি-ভা', 'kyoo-ZOO-rah ehs-TEE-vah', 'আগস্টে অনেক দোকান গ্রীষ্মকালীন ছুটিতে বন্ধ থাকে।', 'In August many shops close for summer break.', 'বিশেষ করে ১৫ই আগস্ট (Ferragosto)-এর আশেপাশে ছোট দোকান বন্ধ থাকতে পারে।', 'Around mid-August (Ferragosto), independent shops may close for vacation.'),
  cp('cs-sup-09', 'supermarket-shops', 'Serve una moneta da 1 euro per il carrello.', 'সের-ভে উ-না মো-নে-তা', 'OO-nah moh-NEH-tah', 'ট্রলি আনলক করতে ১ ইউরো কয়েন লাগে।', 'You need a 1-euro coin for the shopping cart.', 'টাকাটি ফেরত পাওয়া যায় যখন ট্রলি আবার ফেরত রাখেন।', 'Many supermarket carts take a 50c/1€/2€ coin (refunded upon return).'),
  cp('cs-sup-10', 'supermarket-shops', 'I saldi invernali ed estivi.', 'ই সাল-দি ইন-ভের-না-লি', 'ee SAHL-dee', 'শীতকালীন ও গ্রীষ্মকালীন ডিসকাউন্ট সেল।', 'Winter and summer official sales.', 'সাধারণত জানুয়ারি ও জুলাই মাসে পোশাকের দোকানে বড় সেল শুরু হয়।', 'Regulated seasonal sales generally begin around early January and early July.'),
  cp('cs-sup-11', 'supermarket-shops', 'Cassa automatica / Fai-da-te.', 'কাস-সা আ-উ-তো-মা-তি-কা', 'KAHS-sah ow-toh-MAH-tee-kah', 'সেলফ-চেকআউট কাউন্টার।', 'Self-checkout register.', 'অল্প জিনিস থাকলে নিজে স্ক্যান করে কার্ডে পেমেন্ট করা যায়।', 'Self-checkout lanes save time when you have a small basket.'),
  cp('cs-sup-12', 'supermarket-shops', 'Prodotti biologici ea chilometro zero.', 'আ কি-লো-মে-ত্রো জে-রো', 'ah kee-LOH-meh-troh DZEH-roh', 'জৈব ও স্থানীয়ভাবে উৎপাদিত পণ্য।', 'Organic and locally sourced products.', '“Km 0” মানে কাছাকাছি অঞ্চলের তাজা ফসল।', '"Km 0" marks regional food produced locally.'),
  cp('cs-sup-13', 'supermarket-shops', 'Ha bisogno del sacchetto per il pane?', 'আ বি-জোন-ইয়ো দেল সাক-কেৎ-তো', 'eel sahk-KEHT-toh', 'রুটির জন্য কাগজের ব্যাগ লাগবে কি?', 'Do you need a paper bag for the bread?', 'বেকারিতে (panificio) তাজা রুটি কাগজের প্যাকেটে দেওয়া হয়।', 'Bakeries wrap fresh loaves in paper bags.'),
  cp('cs-sup-14', 'supermarket-shops', 'La raccolta differenziata dei rifiuti.', 'লা রাক-কোল-তা দিফ-ফে-রেন-ৎসিয়া-তা', 'rahk-KOHL-tah deef-feh-rehn-TSYAH-tah', 'আবর্জনা আলাদা করে রিসাইক্লিং।', 'Mandatory waste sorting & recycling.', 'ইতালিতে প্লাস্টিক, কাগজ, কাচ, জৈব (umido) ও সাধারণ বর্জ্য আলাদা ডাস্টবিনে ফেলতে হয়।', 'Sorting recycling into paper, plastic/metal, glass, organic, and general bins is widely enforced.'),
  cp('cs-sup-15', 'supermarket-shops', 'Prezzo al chilo (€/kg) vs al pezzo.', 'প্রেৎ-সো আল কি-লো', 'PREHT-soh ahl KEE-loh', 'প্রতি কেজির দাম বনাম প্রতি পিসের দাম।', 'Price per kilogram vs. per item.', 'দামের ট্যাগে লেখা থাকে এটি কেজি দরে নাকি পিস দরে বিক্রি হচ্ছে।', 'Always check labels to see whether price is per kilo or per piece.'),
  cp('cs-sup-16', 'supermarket-shops', 'Si può pagare con il bancomat?', 'সি পু-ও পা-গা-রে কোন ইল বান-কো-মাত', 'eel BAHN-koh-maht', 'এখানে কি কার্ডে পেমেন্ট করা যায়?', 'Can I pay by card?', 'অনেক দোকানে ও ট্যাক্সিতে কার্ড পেমেন্ট নেওয়া হয়; তবে ছোট ক্যাফেতে কিছু কয়েন রাখা ভালো।', 'Cards are widely accepted, though carrying a little cash for small bars is handy.'),
  cp('cs-sup-17', 'supermarket-shops', 'Buoni pasto per la spesa o il pranzo.', 'বু-ও-নি পাস-তো', 'BWOH-nee PAHS-toh', 'খাবারের ভাউচার (মিল টিকিট)।', 'Meal vouchers used for lunch or groceries.', 'ইতালিতে কর্মজীবীরা অনেক সময় কোম্পানি থেকে লাঞ্চ ভাউচার পান।', 'Workers often receive electronic meal vouchers accepted at cafés and supermarkets.'),

  // 5. Public Offices (17)
  cp('cs-pub-01', 'public-offices', 'Prenda il numerino per la fila!', 'প্রেন-দা ইল নু-মে-রি-নো', 'eel noo-meh-REE-noh', 'লাইনের জন্য টোকেন নম্বর নিন!', 'Take a queue ticket number!', 'পোস্ট অফিস বা সিটি অফিসে ঢুকে মেশিন থেকে নম্বর টিকিট নিতে হয়।', 'Take a paper number at post offices and public desks before waiting.'),
  cp('cs-pub-02', 'public-offices', 'Qual è l’ultimo numero chiamato?', 'কুয়াল এ লুল-তি-মো নু-মে-রো', 'LOOL-tee-moh NOO-meh-roh', 'সবশেষ কোন নম্বর ডাকা হয়েছে?', 'What was the last number called?', 'অপেক্ষার সময় বোর্ডের দিকে নজর রাখুন বা পাশের জনকে জিজ্ঞাসা করুন।', 'Check the overhead screen for your letter+number and counter ("sportello").'),
  cp('cs-pub-03', 'public-offices', 'Vada allo sportello numero tre.', 'ভা-দা আল-লো স্পোর-তেল-লো', 'spohr-TEHL-loh', 'তিন নম্বর কাউন্টারে যান।', 'Go to counter number three.', '“Sportello” মানে ব্যাংক বা অফিসের সার্ভিস উইন্ডো।', '"Sportello" refers to the numbered service window.'),
  cp('cs-pub-04', 'public-offices', 'Serve una marca da bollo da sedici euro.', 'সের-ভে উ-না মার-কা দা বোল-লো', 'MAHR-kah dah BOHL-loh', '১৬ ইউরোর রেভিনিউ স্ট্যাম্প লাগবে।', 'You need a 16-euro revenue tax stamp.', 'রেসিডেন্স পারমিট বা অফিসিয়াল কাগজপত্রে "marca da bollo" লাগে যা তাবাক্কেরিয়ায় পাওয়া যায়।', 'Official applications often require a "marca da bollo" bought in cash at a tabaccheria.'),
  cp('cs-pub-05', 'public-offices', 'Mi serve il codice fiscale.', 'মি সের-ভে ইল কো-দি-চে ফিস-কা-লে', 'KOH-dee-cheh fees-KAH-leh', 'আমার কোদিচে ফিসকালে (ট্যাক্স আইডি) দরকার।', 'I need my Italian tax code (Codice Fiscale).', 'ব্যাংক অ্যাকাউন্ট, সিম কার্ড, ডাক্তার বা বাড়ি ভাড়ার চুক্তিতে এটি প্রয়োজন হয়।', 'An essential alphanumeric tax ID used for contracts, SIMs, banking, and healthcare.'),
  cp('cs-pub-06', 'public-offices', 'Porto la fotocopia del passaporto.', 'পোর-তো লা ফো-তো-কো-পিয়া', 'foh-toh-KOH-pyah', 'আমি পাসপোর্টের ফটোকপি নিয়ে আসছি।', 'I am bringing a photocopy of my passport.', 'দাপ্তরিক কাজে গেলে সবসময় মূল কপির সাথে ১–২টি ফটোকপি রাখুন।', 'Always bring paper photocopies of your ID/permit to municipal or university offices.'),
  cp('cs-pub-07', 'public-offices', 'Devo fare l’appuntamento online prima.', 'দে-ভো ফা-রে লাপ-পুন-তা-মেন-তো', 'ahp-poon-tah-MEHN-toh', 'আগে অনলাইনে অ্যাপয়েন্টমেন্ট নিতে হবে।', 'I have to book an appointment online first.', 'পোস্ট অফিসের অ্যাপ বা অফিসিয়াল ওয়েবসাইট থেকে আগে সময় বুক করা সহজ।', 'Many public offices require advance online booking rather than walk-ins.'),
  cp('cs-pub-08', 'public-offices', 'Poste Italiane e le lettere raccomandate.', 'পোস-তে ই-তা-লিয়া-নে', 'POHS-teh ee-tah-LYAH-neh', 'পোস্ট অফিস ও রেজিস্টার্ড চিঠি।', 'Italian Post & registered mail.', 'পোস্ট অফিসে পার্সেল, বিল পেমেন্ট, রেসিডেন্স কিট ও রেজিস্টার্ড চিঠি ("raccomandata") পাঠানো যায়।', 'Poste Italiane handles mail, bills, SPID, and residence permit kits.'),
  cp('cs-pub-09', 'public-offices', 'Compili questo modulo in stampatello.', 'কোম-পি-লি কুয়েস-তো মো-দু-লো', 'een stahm-pah-TEHL-loh', 'এই ফর্মটি বড় হাতের ছাপার অক্ষরে পূরণ করুন।', 'Fill out this form in block/capital letters.', 'হাতের লেখার বদলে স্পষ্ট ব্লক লেটার (STAMPATELLO) চাওয়া হয়।', '"In stampatello" means legible printed BLOCK LETTERS.'),
  cp('cs-pub-10', 'public-offices', 'Firmi qui in fondo alla pagina.', 'ফির-মি কুই ইন ফোন-দো', 'FEER-mee kwee', 'পাতার নিচে এখানে স্বাক্ষর করুন।', 'Sign here at the bottom of the page.', 'স্বাক্ষরের আগে তারিখ ও শহরের নাম (Luogo e data) লিখতে হয়।', 'Look for "Firma" (signature) and "Luogo e data" (city & date).'),
  cp('cs-pub-11', 'public-offices', 'Dove si trova il Comune / l’Anagrafe?', 'দো-ভে সি ত্রো-ভা ইল কো-মু-নে', 'eel koh-MOO-neh', 'সিটি হল / রেজিস্ট্রি অফিস কোথায়?', 'Where is the Town Hall / Civil Registry?', 'বাসস্থানের নিবন্ধনের (residenza) জন্য Comune-এর Anagrafe অফিসে যেতে হয়।', 'The Comune manages local municipal services and residency registration.'),
  cp('cs-pub-12', 'public-offices', 'Il permesso di soggiorno.', 'ইল পের-মেস-সো দি সোজ-জোর-নো', 'pehr-MEHS-soh dee sohj-JOHR-noh', 'ইতালিতে বসবাসের অনুমতিপত্র।', 'Residence permit.', 'নন-ইইউ নাগরিকদের জন্য স্টাডি বা কাজের রেসিডেন্স কার্ড।', 'Official stay permit handled via Post Office kit and Questura.'),
  cp('cs-pub-13', 'public-offices', 'Gli uffici pubblici aprono di solito la mattina.', 'লি উফ-ফি-চি পুব-ব্লি-চি', 'OO-fee-chee POOB-blee-chee', 'সরকারি অফিস সাধারণত সকালে খোলে।', 'Public offices usually open in the morning.', 'অনেক অফিস দুপুর ১টার দিকে বন্ধ হয়, তাই সকালে যাওয়াই ভালো।', 'Most municipal offices run morning hours (~8:30–13:00), plus limited afternoon days.'),
  cp('cs-pub-14', 'public-offices', 'Può rilasciarmi una ricevuta?', 'পু-ও রি-লা-শার-মি উ-না রি-চে-ভু-তা', 'OO-nah ree-cheh-VOO-tah', 'আমাকে একটি জমা রসিদ দেবেন কি?', 'Can you issue me a receipt / slip?', 'কাগজ জমা দেওয়ার পর সবসময় রসিদ ("ricevuta") যত্নে রাখবেন।', 'Keep every "ricevuta" when submitting official applications.'),
  cp('cs-pub-15', 'public-offices', 'Nome e Cognome nell’ordine italiano.', 'নো-মে এ কোন-ইও-মে', 'NOH-meh eh koh-NYOH-meh', 'প্রথম নাম (Nome) ও পারিবারিক পদবি (Cognome)।', 'First name (Nome) and Surname (Cognome).', 'ফর্মে অনেক সময় Cognome (পদবি) প্রথমে এবং Nome পরে লেখা থাকে।', 'Check whether forms list Cognome (last name) before Nome (first name).'),
  cp('cs-pub-16', 'public-offices', 'Data e luogo di nascita.', 'দা-তা এ লু-ও-গো দি না-শি-তা', 'DAH-tah eh LWOH-goh dee NAH-shee-tah', 'জন্মতারিখ ও জন্মস্থান।', 'Date and place of birth.', 'তারিখ দিন/মাস/বছর ক্রমে লিখুন।', 'Always check DD/MM/YYYY format for birth dates.'),
  cp('cs-pub-17', 'public-offices', 'Grazie, buona continuazione!', 'গ্রা-ৎসিয়ে বু-ও-না কোন-তি-নু-আ-ৎসি-ও-নে', 'bwoh-nah kohn-tee-nwah-TSYOH-neh', 'ধন্যবাদ, বাকি দিনটি ভালো কাটুক!', 'Thank you, enjoy the rest of your day!', 'দোকান, অফিস বা ক্যাফে থেকে বের হওয়ার সুন্দর অভিব্যক্তি।', 'Polite catch-all farewell any time of day.'),

  // 6. Signs & Emergencies (17)
  cp('cs-sgn-01', 'signs-emergencies', 'APERTO / CHIUSO', 'আ-পের-তো / কিউ-জো', 'ah-PEHR-toh / KYOO-zoh', 'খোলা / বন্ধ', 'OPEN / CLOSED', 'দোকানের দরজায় ঝোলানো সবচেয়ে সাধারণ সাইন।', 'The two basic signs on every shop door.'),
  cp('cs-sgn-02', 'signs-emergencies', 'ENTRATA / USCITA', 'এন-ত্রা-তা / উ-শি-তা', 'ehn-TRAH-tah / oo-SHEE-tah', 'প্রবেশ পথ / বহির্গমন পথ', 'ENTRANCE / EXIT', 'স্টেশন, সুপারমার্কেট ও ভবনে দিকনির্দেশ।', 'Look for "Uscita di emergenza" for emergency exits.'),
  cp('cs-sgn-03', 'signs-emergencies', 'SPINGERE / TIRARE', 'স্পিন-জে-রে / তি-রা-রে', 'SPEEN-jeh-reh / tee-RAH-reh', 'ধাক্কা দিন / টানুন', 'PUSH / PULL', 'দরজার হাতলের ওপর লেখা থাকে।', 'Printed on café, bank, and office doors.'),
  cp('cs-sgn-04', 'signs-emergencies', 'VIETATO L’INGRESSO / VIETATO FUMARE', 'ভিয়ে-তা-তো লিন-গ্রেস-সো', 'vyeh-TAH-toh', 'প্রবেশ নিষেধ / ধূমপান নিষেধ', 'NO ENTRY / NO SMOKING', '"Vietato..." মানে আইনগতভাবে নিষিদ্ধ।', 'Any sign starting with "Vietato" means forbidden/prohibited.'),
  cp('cs-sgn-05', 'signs-emergencies', 'ATTENZIONE! PAVIMENTO BAGNATO', 'আৎ-তেন-ৎসি-ও-নে', 'pah-vee-MEHN-toh bah-NYAH-toh', 'সাবধান! মেঝে ভেজা', 'CAUTION! WET FLOOR', 'হলুদ সতর্কতা বোর্ডে লেখা থাকে।', 'Common yellow caution sign inside buildings.'),
  cp('cs-sgn-06', 'signs-emergencies', 'GUASTO / FUORI SERVIZIO', 'গুয়াস-তো / ফু-ও-রি সের-ভি-ৎসিও', 'GWAHS-toh / FWOH-ree sehr-VEE-tsyoh', 'নষ্ট / সার্ভিস বন্ধ', 'BROKEN / OUT OF ORDER', 'লিফট বা টিকিট মেশিন কাজ না করলে এই সাইন থাকে।', 'Means an elevator, machine, or restroom is out of service.'),
  cp('cs-sgn-07', 'signs-emergencies', 'OCCUPATO / LIBERO', 'ওক-কু-পা-তো / লি-বে-রো', 'ohk-koo-PAH-toh / LEE-beh-roh', 'ব্যস্ত (ভর্তি) / খালি', 'OCCUPIED / FREE', 'ট্রেনের টয়লেট বা পার্কিংয়ের দরজায় দেখা যায়।', 'Shown on restroom doors, trains, and lockers.'),
  cp('cs-sgn-08', 'signs-emergencies', 'SCADUTO / IN SCADENZA', 'স্কা-দু-তো', 'skah-DOO-toh', 'মেয়াদ উত্তীর্ণ / মেয়াদ শেষ হতে চলেছে', 'EXPIRED / EXPIRING SOON', 'খাবার, টিকিট বা কার্ডের ক্ষেত্রে।', 'Check expiration labels carefully.'),
  cp('cs-sgn-09', 'signs-emergencies', 'SCONTI / SALDI / OFFERTA', 'স্কোন-তি / সাল-দি', 'SKOHN-tee / SAHL-dee', 'ছাড় / সেল / অফার', 'DISCOUNTS / SALE / OFFER', 'দোকানের জানালায় লাল/হলুদ বিজ্ঞাপনে লেখা থাকে।', 'Look out for these signs in shop windows.'),
  cp('cs-sgn-10', 'signs-emergencies', 'ZONA A TRAFFICO LIMITATO (ZTL)', 'জো-না আ ত্রাফ-ফি-কো লি-মি-তা-তো', 'TSOH-nah ZTL', 'সীমিত যানবাহন এলাকা (অনুমতি ছাড়া গাড়ি প্রবেশ নিষেধ)', 'Restricted traffic zone', 'শহরের ঐতিহাসিক কেন্দ্রে ক্যামেরা থাকে; হেঁটে প্রবেশ মুক্ত।', 'Drivers need a permit to enter ZTL zones; pedestrians walk freely.'),
  cp('cs-sgn-11', 'signs-emergencies', 'PRONTO SOCCORSO', 'প্রোন-তো সোক-কোর-সো', 'PROHN-toh sohk-KOHR-soh', 'হাসপাতালের জরুরি বিভাগ (ER)', 'Hospital Emergency Room', 'গুরুতর অসুস্থতা বা দুর্ঘটনায় সরাসরি জরুরি বিভাগে যান।', 'Follow red cross hospital signs for urgent medical care.'),
  cp('cs-sgn-12', 'signs-emergencies', '112 — Numero Unico di Emergenza', 'চেন-তো দো-দি-চি', 'chehn-toh DOH-dee-chee', '১১২ — জরুরি নম্বর (পুলিশ, ফায়ার, অ্যাম্বুলেন্স)', '112 — Unified Emergency Number', 'ইতালিসহ পুরো ইউরোপীয় ইউনিয়নে বিনামূল্যে ২৪ ঘণ্টা চালু।', 'Free 24/7 across Italy for police, medical, and fire emergencies.'),
  cp('cs-sgn-13', 'signs-emergencies', 'Chiamate i Carabinieri / la Polizia!', 'কিয়া-মা-তে ই কা-রা-বি-নিয়ে-রি', 'kah-rah-bee-NYEH-ree', 'কারাবিনিয়েঁরি / পুলিশ ডাকুন!', 'Call the Carabinieri / Police!', 'ইতালিতে Carabinieri এবং Polizia di Stato উভয়ই প্রধান আইন-শৃঙ্খলা বাহিনী।', 'Both forces respond to public safety incidents and theft reports.'),
  cp('cs-sgn-14', 'signs-emergencies', 'Ho bisogno di un medico subito!', 'ও বি-জোন-ইয়ো দি উন মে-দি-কো', 'oon MEH-dee-koh SOO-bee-toh', 'আমার এখনই একজন ডাক্তার দরকার!', 'I need a doctor right away!', 'জরুরি শারীরিক অসুস্থতায় স্পষ্ট বাক্য।', 'Clear emergency request in urgent illness.'),
  cp('cs-sgn-15', 'signs-emergencies', 'Dov’è l’ambasciata / il consolato?', 'দো-ভে লাম-বা-শা-তা', 'lahm-bah-SHAH-tah', 'দূতাবাস / কনস্যুলেট কোথায়?', 'Where is the embassy / consulate?', 'পাসপোর্ট হারিয়ে গেলে নিজের দেশের দূতাবাস/কনস্যুলেটে যোগাযোগ করতে হয়।', 'Contact your embassy or consulate if your passport is lost or stolen.'),
  cp('cs-sgn-16', 'signs-emergencies', 'Questa persona ha bisogno di aiuto.', 'কুয়েস-তা পের-সো-না', 'KWEHS-tah pehr-SOH-nah', 'এই ব্যক্তির সাহায্য দরকার।', 'This person needs help.', 'অন্য কেউ অসুস্থ হলে বা পড়ে গেলে সাহায্য চাইতে বলুন।', 'Useful phrase to summon help for someone else.'),
  cp('cs-sgn-17', 'signs-emergencies', 'Resti calmo, stanno arrivando i soccorsi.', 'রেস-তি কাল-মো', 'REHS-tee KAHL-moh', 'শান্ত থাকুন, সাহায্যকারী দল আসছে।', 'Stay calm, help is on the way.', 'সঙ্কটময় মুহূর্তে আশ্বস্ত করার সহজ বাক্য।', 'Reassuring someone while waiting for medical help.'),
];

// 15 practical survival guides with explicit variability disclaimer note
export const A1_CULTURE_GUIDES: CultureSituationGuide[] = [
  {
    id: 'cg-01',
    order: 1,
    category: 'etiquette-social',
    title: { bn: '১. দোকানে ও অফিসে ঢোকার শিষ্টাচার', en: '1. Greeting Upon Entering Small Shops' },
    summary: {
      bn: 'ছোট পাড়ার দোকান বা ওয়েটিং রুমে ঢুকে প্রথমবার সবাইকে "Buongiorno / Buonasera" বলা ইতালিয়ান সংস্কৃতির গুরুত্বপূর্ণ অংশ।',
      en: 'In Italy, saying a quick "Buongiorno" or "Buonasera" upon entering small shops and clinics sets a warm, respectful tone.',
    },
    checklist: [
      { bn: 'সকাল/দুপুর: Buongiorno! — বিকেল/সন্ধ্যা: Buonasera!', en: 'Morning/early afternoon: Buongiorno! — Late afternoon/evening: Buonasera!' },
      { bn: 'অপরিচিতদের সাথে সবসময় সম্মানসূচক "Lei" ব্যবহার করুন', en: 'Use formal "Lei" (Scusi, Può...) with strangers and staff' },
      { bn: 'বের হওয়ার সময় বলুন: Grazie, arrivederci!', en: 'When leaving: Grazie, buona giornata / arrivederci!' },
    ],
    variabilityNote: { bn: 'সাধারণ নির্দেশনা: বড় সুপারমার্কেটে ক্যাশে শুভেচ্ছা জানানো হয়।', en: 'General orientation: in big supermarkets, greet mainly at checkout.' },
  },
  {
    id: 'cg-02',
    order: 2,
    category: 'bar-restaurant',
    title: { bn: '২. বার / ক্যাফেতে কফি খাওয়ার নিয়ম', en: '2. Bar Counter vs. Table Pricing' },
    summary: {
      bn: 'ইতালিয়ান "bar" মানে সকাল থেকে রাত পর্যন্ত কফি ও হালকা নাশতার ক্যাফে। কাউন্টারে দাঁড়িয়ে খেলে দাম সাধারণত কম থাকে।',
      en: 'An Italian "bar" is a neighborhood espresso café. Standing "al banco" is quick and cheaper than full table service ("al tavolo").',
    },
    checklist: [
      { bn: 'কিছু বারে আগে ক্যাশে পেমেন্ট করে রসিদ কাউন্টারে দিতে হয়', en: 'Check whether you pay at the register ("alla cassa") before ordering' },
      { bn: '"Un caffè" মানেই এসপ্রেসো; বড় দুধ-কফি চাইলে "caffè latte" বলুন', en: '"Un caffè" = espresso; ask for "caffè macchiato" or "latte macchiato" if preferred' },
    ],
    variabilityNote: { bn: 'শহর ও ক্যাফে ভেদে টেবিল সার্ভিস ফি ভিন্ন হতে পারে; সর্বদা মেনুতে মূল্য দেখে নিন।', en: 'General orientation: prices and counter/table policies vary by café and city.' },
  },
  {
    id: 'cg-03',
    order: 3,
    category: 'bar-restaurant',
    title: { bn: '৩. রেস্তোরাঁয় Coperto ও খাবার অর্ডার', en: '3. Understanding Coperto & Courses' },
    summary: {
      bn: 'বসে খাওয়ার রেস্তোরাঁর মেনুতে "coperto" লেখা থাকতে পারে—এটি রুটি ও টেবিল সেটআপের নির্দিষ্ট ফি। টিপস বাধ্যতামূলক নয়।',
      en: 'Sit-down restaurants often list "coperto" (a per-person table/bread fee) on the menu. Tipping extra is optional.',
    },
    checklist: [
      { bn: 'Antipasto (শুরু) → Primo (পাস্তা) → Secondo (মূল পদ) → Dolce (মিষ্টি)', en: 'Ordering all courses is optional—one dish like a Primo or Pizza is normal' },
      { bn: 'পানি অর্ডারে "naturale" (সাধারণ) বা "frizzante" (গ্যাসযুক্ত) নির্দিষ্ট করুন', en: 'Specify "acqua naturale" (still) or "frizzante" (sparkling)' },
    ],
    variabilityNote: { bn: 'অঞ্চল ও রেস্তোরাঁভেদে কোপের্তো চার্জ ভিন্ন হয়; মেনুর নিচে যাচাই করুন।', en: 'General orientation: coperto amounts and kitchen hours vary by region and venue.' },
  },
  {
    id: 'cg-04',
    order: 4,
    category: 'transport-tickets',
    title: { bn: '৪. বাস ও ট্রামের টিকিট কেনা এবং পাঞ্চ করা', en: '4. Buying & Validating City Transit Tickets' },
    summary: {
      bn: 'কাগজের বাস বা ট্রাম টিকিট কেনার পর যানবাহনে উঠেই হলুদ/সবুজ মেশিনে অবশ্যই "convalidare" (পাঞ্চ/স্ট্যাম্প) করতে হয়।',
      en: 'Buy tickets at a tabaccheria (blue "T"), newsstand, kiosk, or official app, and always validate paper tickets immediately upon boarding.',
    },
    checklist: [
      { bn: 'পাঞ্চ না করা টিকিটসহ ধরা পড়লে জরিমানা হতে পারে', en: 'Unvalidated paper tickets can trigger fines during inspections' },
      { bn: 'নামার স্টপ আসলে লাল স্টপ বোতাম চাপুন', en: 'Press the red button on board before your stop' },
    ],
    variabilityNote: { bn: 'শহর ও পরিবহন সংস্থা ভেদে টিকিটের মেয়াদ, জোন ও কন্ট্যাক্টলেস ট্যাপ নিয়ম ভিন্ন হতে পারে।', en: 'General orientation: validity durations, fares, and tap-to-pay rules vary by city transit authority.' },
  },
  {
    id: 'cg-05',
    order: 5,
    category: 'transport-tickets',
    title: { bn: '৫. রেলস্টেশন ও ট্রেন ভ্রমণ নিয়ম', en: '5. Navigating Train Stations & Binari' },
    summary: {
      bn: 'স্টেশনের Partenze বোর্ডে ট্রেনের সময় ও Binario (প্ল্যাটফর্ম) নম্বর দেখুন। কাগজের লোকাল টিকিট ট্রেনে ওঠার আগে প্ল্যাটফর্মে পাঞ্চ করুন।',
      en: 'Check departures ("Partenze") for your track ("Binario"). Paper regional tickets must be stamped in platform validators before boarding.',
    },
    checklist: [
      { bn: 'লাইন পার হওয়ার জন্য আন্ডারপাস (Sottopassaggio) ব্যবহার করুন', en: 'Use pedestrian underpasses rather than crossing tracks' },
      { bn: 'কোনো পরিবর্তন হলে উচ্চ-গতির ট্রেন ও লোকাল ট্রেনের নিয়ম আলাদা', en: 'Digital QR tickets often have different check-in rules than paper tickets' },
    ],
    variabilityNote: { bn: 'ট্রেন অপারেটর ও টিকিটের ধরন অনুযায়ী রিফান্ড ও চেক-ইন নীতি সময়ে সময়ে পরিবর্তিত হয়।', en: 'General orientation: operator check-in and exchange rules depend on carrier and ticket class.' },
  },
  {
    id: 'cg-06',
    order: 6,
    category: 'supermarket-shops',
    title: { bn: '৬. সুপারমার্কেটে ফল ও সবজি কেনা', en: '6. Gloves & Weighing Produce in Supermarkets' },
    summary: {
      bn: 'সুপারমার্কেটের ফল-সবজি অংশে সবসময় প্লাস্টিকের গ্লাভস (guanti) পরে ফল ধরুন এবং অনেক দোকানে নিজেরাই ওজন করে স্টিকার লাগান।',
      en: 'Always wear the disposable gloves near produce bins, place fruit in a bag, weigh it on the digital scale if self-service, and attach the price barcode.',
    },
    checklist: [
      { bn: 'প্যাকেটের নম্বরটি ওজন মেশিনে টিপুন → প্রিন্টেড স্টিকার ব্যাগে লাগান', en: 'Enter the bin number on the scale → stick the printed barcode on the bag' },
      { bn: 'খোলা বাজারে বিক্রেতাকে বলে ফল ওজন করিয়ে নিন', en: 'At outdoor street markets, point and ask the vendor instead of grabbing fruit' },
    ],
    variabilityNote: { bn: 'কিছু সুপারমার্কেটে ক্যাশ কাউন্টারেও ওজন করা হয়—চিহ্ন দেখে নিশ্চিত হোন।', en: 'General orientation: some chains weigh items directly at the register instead of self-service scales.' },
  },
  {
    id: 'cg-07',
    order: 7,
    category: 'supermarket-shops',
    title: { bn: '৭. দোকানের সময়সূচি ও Pausa Pranzo', en: '7. Midday Closures & Holiday Seasons' },
    summary: {
      bn: 'বড় শপিং মল সারাদিন খোলা থাকলেও ছোট দোকান, ফার্মেসি বা অফিস দুপুরে ১–৩ ঘণ্টা বিরতি (pausa pranzo) নিতে পারে।',
      en: 'While big malls often stay open continuously ("orario continuato"), smaller local shops frequently close for a midday lunch break.',
    },
    checklist: [
      { bn: 'দরজায় "Orari di apertura" দেখে নিন', en: 'Check the posted "Orari di apertura" on the shop door' },
      { bn: 'আগস্ট মাসে অনেক ছোট ব্যবসা গ্রীষ্মকালীন ছুটিতে বন্ধ থাকে', en: 'Many independent businesses close for days or weeks in mid-August' },
    ],
    variabilityNote: { bn: 'উত্তর ও দক্ষিণ ইতালির শহরভেদে দোকানের খোলার সময় ও রবিবারের নিয়ম আলাদা হয়।', en: 'General orientation: Sunday openings and midday breaks vary significantly by town and region.' },
  },
  {
    id: 'cg-08',
    order: 8,
    category: 'public-offices',
    title: { bn: '৮. পোস্ট অফিস, ব্যাংক ও কিউ নম্বর', en: '8. Using Queue Tickets at Offices & Posta' },
    summary: {
      bn: 'পোস্ট অফিস বা মিউনিসিপ্যাল অফিসে ঢুকে প্রথমেই কিউ মেশিন থেকে নম্বর ("numerino") নিন এবং বোর্ডে নিজের নম্বর ডাকের অপেক্ষা করুন।',
      en: 'Upon entering Italian post offices or public counters, select your service on the ticket kiosk and watch the display for your counter ("sportello").',
    },
    checklist: [
      { bn: 'কাগজের ফর্ম "in stampatello" (ব্লক লেটারে) পূরণ করুন', en: 'Complete paper forms cleanly in printed BLOCK LETTERS' },
      { bn: 'মূল আইডির সাথে ১–২ কপি ফটোকপি রাখুন', en: 'Carry paper photocopies alongside original IDs' },
    ],
    variabilityNote: { bn: 'অফিস ও শহরভেদে অনলাইন অ্যাপয়েন্টমেন্ট ব্যবস্থা ও সার্ভিস আওয়ার ভিন্ন হতে পারে।', en: 'General orientation: online appointment portals and branch hours vary by municipality.' },
  },
  {
    id: 'cg-09',
    order: 9,
    category: 'public-offices',
    title: { bn: '৯. Tabaccheria-তে দৈনন্দিন সেবা', en: '9. What a Tabaccheria Offers Beyond Tobacco' },
    summary: {
      bn: 'নীল “T” চিহ্নযুক্ত Tabaccheria-তে শহরের বাস টিকিট, ডাকটিকিট, ফোন রিচার্জ এবং সরকারি কাগজের জন্য Marca da Bollo পাওয়া যায়।',
      en: 'Shops marked with a blue "T" (Tabaccheria) are everyday hubs for city transit tickets, postage stamps, utility bills, and revenue stamps ("marca da bollo").',
    },
    checklist: [
      { bn: 'বাস টিকিট: "Vorrei un biglietto dell’autobus"', en: 'Bus ticket: "Vorrei un biglietto dell’autobus"' },
      { bn: 'রেভিনিউ স্ট্যাম্প: "Una marca da bollo da sedici euro"', en: 'Tax stamp: "Una marca da bollo da 16 euro"' },
    ],
    variabilityNote: { bn: 'নির্দিষ্ট ফি ও উপলব্ধ সেবা শহর ও শাখাভেদে ভিন্ন হতে পারে।', en: 'General orientation: available services and statutory stamp fees can vary over time.' },
  },
  {
    id: 'cg-10',
    order: 10,
    category: 'public-offices',
    title: { bn: '১০. আবর্জনা আলাদা করা (Raccolta Differenziata)', en: '10. Recycling & Waste Sorting Habits' },
    summary: {
      bn: 'ইতালির প্রায় সব শহরে কাগজ (carta), প্লাস্টিক/ধাতু (plastica), কাচ (vetro), জৈব (umido) ও সাধারণ বর্জ্য আলাদা বিনে ফেলা হয়।',
      en: 'Waste sorting ("raccolta differenziata") separates paper, plastic/packaging, glass, organic food waste, and non-recyclable trash.',
    },
    checklist: [
      { bn: 'ভবনের নোটিশ বোর্ডে সংগ্রহের দিন-তারিখ দেখে নিন', en: 'Check your building or street bin labels before throwing away bags' },
    ],
    variabilityNote: { bn: 'প্রতিটি শহর (Comune)-এর রঙের কোড ও সংগ্রহের নিয়ম আলাদা; স্থানীয় গাইড দেখে নিন।', en: 'General orientation: bin colors and door-to-door pickup schedules are set locally by each Comune.' },
  },
  {
    id: 'cg-11',
    order: 11,
    category: 'signs-emergencies',
    title: { bn: '১১. শহরের সাধারণ দরকারি সাইনবোর্ড', en: '11. Reading Common Public & Door Signs' },
    summary: {
      bn: 'দরজা, অফিস ও স্টেশনের মূল শব্দ যেমন Spingere/Tirare, Aperto/Chiuso, Vietato এবং Fuori Servizio চিনে নিন।',
      en: 'Recognizing basic public sign pairs immediately saves confusion at stations, restrooms, offices, and stores.',
    },
    checklist: [
      { bn: 'Spingere = ধাক্কা দিন | Tirare = টানুন', en: 'Spingere = Push | Tirare = Pull' },
      { bn: 'Libero = খালি | Occupato = ব্যস্ত | Guasto = নষ্ট', en: 'Libero = Free | Occupato = Busy | Guasto = Out of order' },
    ],
    variabilityNote: { bn: 'বিমানবন্দর ও বড় স্টেশনে দ্বিভাষিক চিহ্ন থাকলেও ছোট শহরে শুধু ইতালিয়ান সাইন থাকে।', en: 'General orientation: smaller towns rarely post English translations on signs.' },
  },
  {
    id: 'cg-12',
    order: 12,
    category: 'signs-emergencies',
    title: { bn: '১২. ফার্মেসি ও রাত/ছুটির দিনের ডিউটি', en: '12. Pharmacies & After-Hours Duty' },
    summary: {
      bn: 'ফার্মেসির বাইরে সবসময় সবুজ ক্রস চিহ্ন থাকে। রাতে বা রবিবারে বন্ধ ফার্মেসির দরজায় নিকটস্থ "farmacia di turno" তালিকা দেওয়া থাকে।',
      en: 'Pharmacies carry a green cross sign. Outside opening hours, any closed pharmacy posts a notice listing the nearest rotating on-duty pharmacy ("farmacia di turno").',
    },
    checklist: [
      { bn: 'সবুজ ক্রস জ্বলজ্বল করলে ফার্মেসি খোলা আছে', en: 'A lit green cross usually signals the pharmacy is open' },
      { bn: 'ছোট সমস্যায় ফার্মাসিস্টকে লক্ষণ বললে প্রাথমিক পরামর্শ দেন', en: 'Pharmacists can advise on mild symptoms and over-the-counter options' },
    ],
    variabilityNote: { bn: 'রাতের ডিউটির সময় ও নিয়ম এলাকাভেদে পরিবর্তিত হয়।', en: 'General orientation: rotating duty schedules change weekly by municipality.' },
  },
  {
    id: 'cg-13',
    order: 13,
    category: 'signs-emergencies',
    title: { bn: '১৩. জরুরি যোগাযোগ ও নিরাপত্তা (১১২)', en: '13. Emergency Contacts & Reporting Theft' },
    summary: {
      bn: 'যেকোনো জরুরি অবস্থায় ১১২ নম্বরে কল করুন। চিকিৎসা ও দুর্ঘটনার জন্য হাসপাতালের জরুরি বিভাগ "Pronto Soccorso"-তে যেতে হয়।',
      en: 'In urgent danger, medical crisis, or fire, dial 112 (free EU emergency number). If you lose an ID or wallet, file a report ("denuncia") with Carabinieri or Polizia.',
    },
    checklist: [
      { bn: '১১২ — পুলিশ, অ্যাম্বুলেন্স ও ফায়ার সার্ভিস', en: '112 — Unified emergency dispatch (English/Italian support available)' },
      { bn: 'অল্প ব্যস্ত ভিড়ে ব্যাগ সামনে রাখুন ও জরুরি কপি সংরক্ষণ করুন', en: 'Keep digital copies of passport and important documents stored safely' },
    ],
    variabilityNote: { bn: 'স্থানীয় স্বাস্থ্যসেবা ও জরুরি নির্দেশনা প্রাদেশিক স্বাস্থ্য সংস্থার অধীনে প্রযোজ্য।', en: 'General orientation: non-urgent medical lines and regional services vary by Italian region.' },
  },
  {
    id: 'cg-14',
    order: 14,
    category: 'etiquette-social',
    title: { bn: '১৪. ইতালিতে যোগাযোগ ও কথা বলার ধরন', en: '14. Expressive Tone & Speaking Slowly' },
    summary: {
      bn: 'ইতালিয়ানরা হাত নেড়ে আবেগের সাথে দ্রুত কথা বলেন—এটি রাগ নয়, স্বাভাবিক প্রাণবন্ততা! আপনি শেখার পর্যায়ে থাকলে নির্দ্বিধায় ধীরে বলতে অনুরোধ করুন।',
      en: 'Animated tone and hand gestures reflect warmth and emphasis, not anger. Never hesitate to politely ask locals to speak slowly.',
    },
    checklist: [
      { bn: 'বলুন: "Sto imparando l’italiano, può parlare più lentamente?"', en: 'Say: "I am learning Italian, could you speak more slowly?"' },
    ],
    variabilityNote: { bn: 'আঞ্চলিক উচ্চারণ (dialect/accent) উত্তর থেকে দক্ষিণে ভিন্ন হতে পারে।', en: 'General orientation: local accents and regional expressions differ across Italy.' },
  },
  {
    id: 'cg-15',
    order: 15,
    category: 'public-offices',
    title: { bn: '১৫. গুরুত্বপূর্ণ সরকারি নথির প্রাথমিক ধারণা', en: '15. Practical Documents Orientation' },
    summary: {
      bn: 'ইতালিতে পড়াশোনা বা কাজের জন্য সাধারণত পাসপোর্ট, কোদিচে ফিসকালে, ব্যাংক/পোস্ট অফিসের তথ্য, এবং প্রযোজ্য ক্ষেত্রে রেসিডেন্স পারমিট ও হেলথ কার্ড লাগে।',
      en: 'Everyday administrative life commonly centers around a valid ID/passport, Codice Fiscale, health coverage ("tessera sanitaria"), and municipal residency where applicable.',
    },
    checklist: [
      { bn: 'Codice Fiscale = ট্যাক্স ও পরিচয় কোড', en: 'Codice Fiscale = personal tax code for contracts, SIM & health' },
      { bn: 'হেলথ কার্ড = Tessera Sanitaria', en: 'Tessera Sanitaria = Italian health insurance card' },
    ],
    variabilityNote: { bn: 'আইন, ফি এবং ডকুমেন্টের শর্ত সময় ও শহরভেদে বদলাতে পারে—সর্বদা সরকারি সূত্র যাচাই করুন।', en: 'General orientation: legal requirements, fees, and portal steps are subject to change—confirm with official offices.' },
  },
];

// 20 comprehension exercises (>= 20 required)
export const A1_CULTURE_EXERCISES: CultureComprehensionExercise[] = [
  {
    id: 'ce-01',
    situationTitle: { bn: 'পরিস্থিতি ১: সকালে ক্যাফেতে প্রবেশ', en: 'Situation 1: Entering a Neighborhood Café' },
    scenario: { bn: 'আপনি সকাল ৯টায় একটি ছোট ইতালিয়ান কফির দোকানে ঢুকছেন।', en: 'You walk into a small local café at 9:00 AM.' },
    question: { bn: 'প্রথমে সবচেয়ে স্বাভাবিক কী বলা উচিত?', en: 'What is the most natural greeting as you enter?' },
    options: [
      { bn: 'Buongiorno! (শুভ সকাল / শুভ দিন)', en: 'Buongiorno!' },
      { bn: 'Buonanotte! (শুভ রাত্রি)', en: 'Buonanotte!' },
      { bn: 'Arrivederci! (বিদায়)', en: 'Arrivederci!' },
    ],
    answer: 0,
    explanation: { bn: 'দোকান বা অফিসে ঢোকার সময় "Buongiorno" বলা স্বাভাবিক শিষ্টাচার।', en: 'Saying "Buongiorno!" on arrival is standard politeness.' },
  },
  {
    id: 'ce-02',
    situationTitle: { bn: 'পরিস্থিতি ২: ক্যাফেতে দামের পার্থক্য', en: 'Situation 2: Espresso Price Difference' },
    scenario: { bn: 'তালিকায় দেখা যাচ্ছে "Caffè al banco €1,20" এবং "al tavolo €2,50"।', en: 'The price board shows "Caffè al banco €1.20" and "al tavolo €2.50".' },
    question: { bn: '€1,20 দামে কফি খেতে চাইলে কী করবেন?', en: 'What should you do to pay the €1.20 price?' },
    options: [
      { bn: 'কাউন্টারে দাঁড়িয়ে দ্রুত কফি পান করবেন', en: 'Stand and drink the espresso at the bar counter' },
      { bn: 'বাইরের টেবিলে বসে খাবেন', en: 'Sit down at an outdoor table' },
      { bn: 'ওয়েক-আউট চার্জ দেবেন না', en: 'Ask for waiter table service' },
    ],
    answer: 0,
    explanation: { bn: '"al banco" মানে কাউন্টারে দাঁড়িয়ে খাওয়া, যেখানে টেবিল সার্ভিস চার্জ থাকে না।', en: '"Al banco" means standing at the counter with no table service fee.' },
  },
  {
    id: 'ce-03',
    situationTitle: { bn: 'পরিস্থিতি ৩: বাসে ওঠার আগে ও পরে', en: 'Situation 3: Riding a City Bus' },
    scenario: { bn: 'আপনি তাবাক্কেরিয়া থেকে একটি কাগজের বাস টিকিট কিনলেন এবং বাসে উঠলেন।', en: 'You bought a paper bus ticket at a tabaccheria and stepped onto the bus.' },
    question: { bn: 'জরিমানা এড়াতে বাসে উঠেই কী করতে হবে?', en: 'What must you do immediately upon boarding?' },
    options: [
      { bn: 'মেশিনে টিকিট পাঞ্চ / ভ্যালিডেট (convalidare) করা', en: 'Insert the ticket into the validation machine (convalidare)' },
      { bn: 'টিকিট পকেটে ভাঁজ করে রাখা', en: 'Fold it untouched in your pocket' },
      { bn: 'চালকের হাতে টিকিট দেওয়া', en: 'Hand it permanently to the driver' },
    ],
    answer: 0,
    explanation: { bn: 'পাঞ্চ না করলে টিকিট বৈধ গণ্য হয় না।', en: 'Paper tickets must be stamped in the onboard validator to be valid.' },
  },
  {
    id: 'ce-04',
    situationTitle: { bn: 'পরিস্থিতি ৪: সুপারমার্কেটে আপেল কেনা', en: 'Situation 4: Buying Apples at a Supermarket' },
    scenario: { bn: 'আপনি সুপারমার্কেটে খোলা আপেলের ঝুড়ির সামনে দাঁড়িয়ে আছেন।', en: 'You are in the produce aisle in front of loose apples.' },
    question: { bn: 'আপেল ব্যাগে ভরার আগে কী করা বাধ্যতামূলক?', en: 'What should you put on before touching the apples?' },
    options: [
      { bn: 'পাশে রাখা প্লাস্টিকের গ্লাভস (guanti)', en: 'The disposable plastic gloves nearby' },
      { bn: 'নিজের শীতের মোজা', en: 'Your winter scarf' },
      { bn: 'কোনো কিছুর দরকার নেই', en: 'Grab them with bare hands directly' },
    ],
    answer: 0,
    explanation: { bn: 'খোলা ফল-সবজি ধরার জন্য পাশেই রাখা গ্লাভস পরতে হয়।', en: 'Wear the disposable produce gloves provided by the bins.' },
  },
  {
    id: 'ce-05',
    situationTitle: { bn: 'পরিস্থিতি ৫: দরজার সাইন "TIRARE"', en: 'Situation 5: Door Sign Reads "TIRARE"' },
    scenario: { bn: 'একটি ব্যাংকের দরজায় লেখা আছে "TIRARE"।', en: 'The glass door of a bank says "TIRARE".' },
    question: { bn: 'দরজা খুলতে আপনি কী করবেন?', en: 'How do you open the door?' },
    options: [
      { bn: 'দরজাটি নিজের দিকে টানবেন (Pull)', en: 'Pull the door toward you' },
      { bn: 'ভেতরের দিকে ধাক্কা দেবেন (Push)', en: 'Push the door inward' },
      { bn: 'বেল বাজিয়ে অপেক্ষা করবেন', en: 'Wait for a remote unlock' },
    ],
    answer: 0,
    explanation: { bn: 'Tirare = টানুন (Pull); Spingere = ধাক্কা দিন (Push)।', en: 'Tirare means Pull; Spingere means Push.' },
  },
  {
    id: 'ce-06',
    situationTitle: { bn: 'পরিস্থিতি ৬: পোস্ট অফিসে প্রবেশ', en: 'Situation 6: Entering Poste Italiane' },
    scenario: { bn: 'আপনি পোস্ট অফিসে ঢুকে দেখলেন অনেকেই বসে অপেক্ষা করছেন।', en: 'You walk into Poste Italiane and see people seated.' },
    question: { bn: 'প্রথমে আপনার কী করা উচিত?', en: 'What should you do first?' },
    options: [
      { bn: 'কিউ মেশিন থেকে নিজের সার্ভিস অনুযায়ী টোকেন নম্বর (numerino) নেওয়া', en: 'Take a queue ticket number from the kiosk' },
      { bn: 'সবাইকে পাশ কাটিয়ে কাউন্টারে চলে যাওয়া', en: 'Walk straight past everyone to the window' },
      { bn: 'চিৎকার করে প্রশ্ন করা', en: 'Call out across the room' },
    ],
    answer: 0,
    explanation: { bn: 'অধিকাংশ পোস্ট অফিস ও সরকারি ডেস্কে নম্বর টিকিট অনুযায়ী ডাক পড়ে।', en: 'Post offices serve customers sequentially by queue ticket number.' },
  },
  {
    id: 'ce-07',
    situationTitle: { bn: 'পরিস্থিতি ৭: বাস থেকে নামা', en: 'Situation 7: Getting Off the Bus' },
    scenario: { bn: 'আপনার গন্তব্য স্টপ সামনে আসছে।', en: 'Your bus stop is coming up next.' },
    question: { bn: 'বাস যেন স্টপে থামে সেজন্য কী করবেন?', en: 'How do you signal the driver to stop?' },
    options: [
      { bn: 'পিলারের লাল স্টপ বোতাম চাপবেন', en: 'Press the red stop button inside the bus' },
      { bn: 'বাস থামার আশা করে চুপ থাকবেন', en: 'Wait silently hoping the driver guesses' },
      { bn: 'দরজায় টোকা দেবেন', en: 'Knock on the rear window' },
    ],
    answer: 0,
    explanation: { bn: 'কেউ বোতাম না চাপলে বা স্টপে না থাকলে বাস নাও থামতে পারে।', en: 'Buses do not stop unless the stop button is pressed or passengers wait outside.' },
  },
  {
    id: 'ce-08',
    situationTitle: { bn: 'পরিস্থিতি ৮: দোকানে "CHIUSO"', en: 'Situation 8: Sign Reads "CHIUSO PER FERIE"' },
    scenario: { bn: 'আগস্ট মাসের মাঝামাঝি একটি ছোট দোকানের দরজায় "CHIUSO PER FERIE" লেখা।', en: 'In mid-August, a neighborhood shop sign says "CHIUSO PER FERIE".' },
    question: { bn: 'এর অর্থ কী?', en: 'What does this notice mean?' },
    options: [
      { bn: 'দোকানটি ছুটির জন্য সাময়িকভাবে বন্ধ আছে', en: 'The shop is closed for holidays' },
      { bn: 'দোকানটি ২৪ ঘণ্টা খোলা', en: 'The shop is open 24 hours' },
      { bn: 'শুধু কার্ড পেমেন্ট চালু', en: 'Card payment only' },
    ],
    answer: 0,
    explanation: { bn: '"Chiuso per ferie" মানে ছুটি (vacation)-র কারণে বন্ধ।', en: '"Chiuso per ferie" means closed for vacation.' },
  },
  {
    id: 'ce-09',
    situationTitle: { bn: 'পরিস্থিতি ৯: রেস্তোরাঁর রসিদে "Coperto €2"', en: 'Situation 9: "Coperto €2" on a Receipt' },
    scenario: { bn: 'রেস্তোরাঁর বিলে খাবার ছাড়াও প্রতি জনের পাশে "Coperto €2" লেখা দেখলেন।', en: 'Your dinner bill lists "Coperto €2" per person alongside the food.' },
    question: { bn: 'এটি কী?', en: 'What is "coperto"?' },
    options: [
      { bn: 'বসে খাওয়ার স্বাভাবিক টেবিল ও রুটির নির্দিষ্ট চার্জ (যা মেনুতে উল্লেখ থাকে)', en: 'The standard per-person table/bread cover fee listed on the menu' },
      { bn: 'একটি ভুল বা জরিমানা', en: 'An accidental fine' },
      { bn: 'বাড়তি পানির দাম', en: 'Extra sparkling water fee' },
    ],
    answer: 0,
    explanation: { bn: 'ইতালিতে রেস্তোরাঁয় বসে খাওয়ার ক্ষেত্রে "coperto" প্রচলিত একটি নির্দিষ্ট ফি।', en: 'Coperto is a standard published cover charge in sit-down Italian venues.' },
  },
  {
    id: 'ce-10',
    situationTitle: { bn: 'পরিস্থিতি ১০: রাত ১১টায় ওষুধ প্রয়োজন', en: 'Situation 10: Needing Medicine at 11 PM' },
    scenario: { bn: 'রাত ১১টায় হঠাৎ জ্বরের ওষুধ দরকার, বাড়ির পাশের ফার্মেসি বন্ধ।', en: 'You need fever medicine at 11:00 PM and the local pharmacy is shut.' },
    question: { bn: 'কীভাবে খোলা ফার্মেসি খুঁজে পাবেন?', en: 'How do you find an open pharmacy?' },
    options: [
      { bn: 'বন্ধ ফার্মেসির দরজায় ঝোলানো "farmacia di turno" তালিকা দেখবেন', en: 'Check the "farmacia di turno" (on-duty) list posted on the pharmacy door' },
      { bn: 'সকাল পর্যন্ত অপেক্ষা ছাড়া কোনো পথ নেই', en: 'No pharmacy ever operates at night' },
      { bn: 'পোস্ট অফিসে যাবেন', en: 'Go to the post office' },
    ],
    answer: 0,
    explanation: { bn: 'বন্ধ ফার্মেসির দরজায় সর্বদা বর্তমান রাতের ডিউটি ফার্মেসির ঠিকানা থাকে।', en: 'Closed pharmacies post the address of the active on-duty pharmacy.' },
  },
  {
    id: 'ce-11',
    situationTitle: { bn: 'পরিস্থিতি ১১: "Vietato fumare"', en: 'Situation 11: Public Sign "Vietato fumare"' },
    scenario: { bn: 'রেলস্টেশনের ভেতরের একটি হলে বড় করে "Vietato fumare" লেখা।', en: 'An indoor station hall displays a sign reading "Vietato fumare".' },
    question: { bn: 'সাইনটির অর্থ কী?', en: 'What does this sign mean?' },
    options: [
      { bn: 'ধূমপান নিষেধ (No smoking)', en: 'No smoking' },
      { bn: 'ফ্রি ওয়াইফাই জোন', en: 'Free Wi-Fi zone' },
      { bn: 'বিনামূল্যে প্রবেশ', en: 'Free entry' },
    ],
    answer: 0,
    explanation: { bn: 'Vietato = নিষিদ্ধ, fumare = ধূমপান করা।', en: '"Vietato" means forbidden; "fumare" means to smoke.' },
  },
  {
    id: 'ce-12',
    situationTitle: { bn: 'পরিস্থিতি ১২: তাবাক্কেরিয়া খোঁজা', en: 'Situation 12: Where to Buy a Marca da Bollo' },
    scenario: { bn: 'অফিস থেকে আপনাকে একটি ১৬ ইউরোর "marca da bollo" আনতে বলা হয়েছে।', en: 'An office asks you to bring a 16-euro "marca da bollo" tax stamp.' },
    question: { bn: 'এটি সাধারণত কোন দোকানে পাবেন?', en: 'Where do you usually purchase it?' },
    options: [
      { bn: 'নীল "T" সাইনযুক্ত তাবাক্কেরিয়া (Tabaccheria)-তে', en: 'At a Tabaccheria marked with a blue "T" sign' },
      { bn: 'বেকারিতে (Panificio)', en: 'At a bakery' },
      { bn: 'পোশাকের দোকানে', en: 'At a clothing boutique' },
    ],
    answer: 0,
    explanation: { bn: 'তাবাক্কেরিয়া হলো বাসের টিকিট ও বোলো স্ট্যাম্প কেনার প্রধান জায়গা।', en: 'Tabaccherie issue revenue stamps ("marche da bollo") and transit tickets.' },
  },
  {
    id: 'ce-13',
    situationTitle: { bn: 'পরিস্থিতি ১৩: ফর্ম পূরণ "In stampatello"', en: 'Situation 13: Form Instructions' },
    scenario: { bn: 'একটি কাগজের ফর্মের ওপরে লেখা "Compilare in stampatello"।', en: 'A printed form states "Compilare in stampatello".' },
    question: { bn: 'কীভাবে লিখতে হবে?', en: 'How should you fill it in?' },
    options: [
      { bn: 'স্পষ্ট বড় হাতের ছাপার অক্ষরে (BLOCK LETTERS)', en: 'In clear printed CAPITAL / BLOCK LETTERS' },
      { bn: 'টানা কার্সিভ হাতের লেখায়', en: 'In quick cursive handwriting' },
      { bn: 'শুধু সংখ্যা দিয়ে', en: 'With numbers only' },
    ],
    answer: 0,
    explanation: { bn: '“in stampatello” অর্থ ছাপার মতো আলাদা আলাদা ক্যাপিটাল অক্ষরে লেখা।', en: '"In stampatello" means legible printed block letters.' },
  },
  {
    id: 'ce-14',
    situationTitle: { bn: 'পরিস্থিতি ১৪: জরুরি নম্বর ১১২', en: 'Situation 14: Emergency Call' },
    scenario: { bn: 'রাস্তায় কোনো জরুরি দুর্ঘটনা দেখলে অ্যাম্বুলেন্স বা পুলিশ দরকার।', en: 'You witness a street emergency requiring police or an ambulance.' },
    question: { bn: 'ইতালিতে কোন একটি নম্বর সব জরুরি সেবার জন্য চালু?', en: 'Which single number connects to all emergency services in Italy?' },
    options: [
      { bn: '১১২ (112 — একক জরুরি নম্বর)', en: '112' },
      { bn: '৮৮৮ (888)', en: '888' },
      { bn: '৫৫৫ (555)', en: '555' },
    ],
    answer: 0,
    explanation: { bn: '১১২ হলো ইতালি ও ইউরোপের ইউনিফাইড জরুরি হেল্পলাইন।', en: '112 is the unified 24/7 emergency number across Italy.' },
  },
  {
    id: 'ce-15',
    situationTitle: { bn: 'পরিস্থিতি ১৫: অপরিচিত প্রফেসরের সাথে কথা', en: 'Situation 15: Formal vs Informal Register' },
    scenario: { bn: 'আপনি প্রথমবার আপনার বিশ্ববিদ্যালয় প্রফেসরকে প্রশ্ন করছেন।', en: 'You are speaking with your university professor for the first time.' },
    question: { bn: 'কোন প্রশ্নটি উপযুক্ত ও ভদ্র?', en: 'Which question shows the right polite register?' },
    options: [
      { bn: 'Scusi, può ripetere per favore? (মাফ করবেন, দয়া করে আবার বলবেন?)', en: 'Scusi, può ripetere per favore?' },
      { bn: 'Ehi, ripeti! (এই, আবার বল!)', en: 'Ehi, ripeti!' },
      { bn: 'Tu parli troppo veloce! (তুমি খুব দ্রুত বলছো!)', en: 'Tu parli troppo veloce!' },
    ],
    answer: 0,
    explanation: { bn: '"Scusi" এবং "può" আনুষ্ঠানিক Lei সম্বোধনের সঠিক রূপ।', en: '"Scusi, può..." properly uses formal "Lei".' },
  },
  {
    id: 'ce-16',
    situationTitle: { bn: 'পরিস্থিতি ১৬: টিকিট মেশিনে লেখা "Fuori servizio"', en: 'Situation 16: Machine Sign "Fuori servizio"' },
    scenario: { bn: 'স্টেশনে একটি টিকিট ভেন্ডিং মেশিনের পর্দায় "Fuori servizio" লেখা।', en: 'A station ticket machine displays "Fuori servizio".' },
    question: { bn: 'আপনি কী বুঝবেন?', en: 'What does it mean?' },
    options: [
      { bn: 'মেশিনটি এখন কাজ করছে না (অচল); অন্য মেশিন ব্যবহার করতে হবে', en: 'The machine is out of service; try another machine or counter' },
      { bn: 'টিকিট বিনামূল্যে পাওয়া যাচ্ছে', en: 'Tickets are free today' },
      { bn: 'ট্রেন বাতিল হয়েছে', en: 'All trains are canceled' },
    ],
    answer: 0,
    explanation: { bn: 'Fuori servizio বা Guasto অর্থ সাময়িকভাবে অচল বা নষ্ট।', en: '"Fuori servizio" means temporarily out of order.' },
  },
  {
    id: 'ce-17',
    situationTitle: { bn: 'পরিস্থিতি ১৭: খোলা বাজারে কেনাকাটা', en: 'Situation 17: Open-Air Street Market' },
    scenario: { bn: 'সকালের পাড়ার খোলা বাজারে (mercato rionale) আপনি টমেটো কিনবেন।', en: 'You want to buy tomatoes at an outdoor neighborhood street stall.' },
    question: { bn: 'সাধারণত কীভাবে কেনা সবচেয়ে ভদ্র?', en: 'What is the polite custom at outdoor stalls?' },
    options: [
      { bn: 'বিক্রেতাকে দেখিয়ে দিন (যেমন: "Vorrei un chilo di pomodori") যেন তিনি ব্যাগে ভরে দেন', en: 'Ask the vendor so they pick and weigh the produce for you' },
      { bn: 'নিজেই খালি হাতে ঝুড়ি উল্টে দেখুন', en: 'Grab through the crates bare-handed yourself' },
      { bn: 'ওজন না করেই চলে যান', en: 'Put them straight into your backpack' },
    ],
    answer: 0,
    explanation: { bn: 'পাড়ার খোলা বাজারে বিক্রেতাকে বলে দিলে তিনি নিজে পছন্দমতো বাছাই ও ওজন করে দেন।', en: 'At traditional market stalls, ask the vendor rather than handling unpackaged produce.' },
  },
  {
    id: 'ce-18',
    situationTitle: { bn: 'পরিস্থিতি ১৮: স্টেশনে প্ল্যাটফর্ম পারাপার', en: 'Situation 18: Reaching Binario 6' },
    scenario: { bn: 'আপনার ট্রেন ৬ নম্বর প্ল্যাটফর্ম থেকে ছাড়বে, আর আপনি ১ নম্বরে আছেন।', en: 'Your train departs from Binario 6 while you are on Binario 1.' },
    question: { bn: 'কোন সাইন দেখে নিরাপদে ৬ নম্বরে যাবেন?', en: 'Which sign leads you safely to platform 6?' },
    options: [
      { bn: 'Sottopassaggio (আন্ডারপাস)', en: 'Sottopassaggio (pedestrian underpass)' },
      { bn: 'Vietato l’ingresso (প্রবেশ নিষেধ)', en: 'Vietato l’ingresso' },
      { bn: 'Deposito bagagli (লাগেজ রাখার স্থান)', en: 'Deposito bagagli' },
    ],
    answer: 0,
    explanation: { bn: 'স্টেশনে সবসময় Sottopassaggio (পাতাল পথ) দিয়ে এক প্ল্যাটফর্ম থেকে অন্য প্ল্যাটফর্মে যেতে হয়।', en: 'Always follow "Sottopassaggio" signs to switch train tracks safely.' },
  },
  {
    id: 'ce-19',
    situationTitle: { bn: 'পরিস্থিতি ১৯: আবর্জনা ফেলার নিয়ম', en: 'Situation 19: Waste Sorting' },
    scenario: { bn: 'রান্নাঘরের খাবারের খোসা ও ফলের উচ্ছিষ্ট ফেলতে হবে।', en: 'You have fruit peels and kitchen food scraps to throw away.' },
    question: { bn: 'ইতালিতে এটি কোন নামের বিনে ফেলা হয়?', en: 'Which recycling category takes organic food scraps?' },
    options: [
      { bn: 'Umido / Organico (জৈব/খাবারের বর্জ্য)', en: 'Umido / Organico (organic waste)' },
      { bn: 'Vetro (কাঁচের বর্জ্য)', en: 'Vetro (glass)' },
      { bn: 'Carta (কাগজের বর্জ্য)', en: 'Carta (paper)' },
    ],
    answer: 0,
    explanation: { bn: 'Umido বা Organico অর্থ জৈব/পচনশীল বর্জ্য।', en: '"Umido / Organico" is for organic food scraps.' },
  },
  {
    id: 'ce-20',
    situationTitle: { bn: 'পরিস্থিতি ২০: রেস্তোরাঁর খাবারে পর্ক না খাওয়া', en: 'Situation 20: Dietary Preferences' },
    scenario: { bn: 'আপনি রেস্তোরাঁয় খাবারে শূকরের মাংস ছাড়া নিরামিষ বা হালাল উপযোগী বিকল্প খুঁজছেন।', en: 'At a restaurant you want to make sure your dish has no pork or meat.' },
    question: { bn: 'স্পষ্টভাবে কোন বাক্যটি জিজ্ঞাসা করবেন?', en: 'Which clear Italian phrase should you use?' },
    options: [
      { bn: 'Scusi, questo piatto è senza carne / senza maiale? (মাফ করবেন, এই খাবারে কি মাংস/শূকরের মাংস নেই?)', en: 'Scusi, questo piatto è senza carne / senza maiale?' },
      { bn: 'Quanto costa il binario? (প্ল্যাটফর্মের দাম কত?)', en: 'Quanto costa il binario?' },
      { bn: 'Dov’è il sottoscala? (সিঁড়ির নিচ কোথায়?)', en: 'Dov’è il sottoscala?' },
    ],
    answer: 0,
    explanation: { bn: '"senza..." অর্থ ছাড়া (without)। তাই "senza carne / senza maiale" খুবই স্পষ্ট।', en: 'Use "senza carne" (without meat) or "senza maiale" (without pork).' },
  },
];

export const CULTURE_SURVIVAL_THEORY_CONFIG: AcademyTheoryConfig = {
  moduleId: 'culture-survival',
  title: { bn: 'ইতালিয়ান সংস্কৃতি ও দৈনন্দিন টিকে থাকা', en: 'Italian Culture & Everyday Survival' },
  subtitle: {
    bn: 'সামাজিক শিষ্টাচার, ক্যাফে-রেস্তোরাঁ নিয়ম, টিকিট ভ্যালিডেশন, বাজার, সরকারি অফিস ও সাইনবোর্ড',
    en: '102 survival phrases, 15 practical orientation guides & 20 scenario checks',
  },
  intro: {
    bn: 'ইতালিতে ভাষা জানার পাশাপাশি দৈনন্দিন নিয়ম জানা থাকলে অপ্রয়োজনীয় ভুল, জরিমানা ও বিব্রতকর পরিস্থিতি সহজেই এড়ানো যায়। এখানে দেওয়া তথ্যগুলো সাধারণ ও ব্যবহারিক নির্দেশনা হিসেবে সাজানো হয়েছে—নির্দিষ্ট শহর বা সংস্থাভেদে নিয়ম কিছুটা আলাদা হতে পারে।',
    en: 'Knowing everyday Italian social customs prevents unnecessary fines and awkward moments—from counter coffee etiquette to stamping transit tickets and taking queue numbers. Note that local hours and municipal rules can vary across Italian cities.',
  },
  highlights: [
    { label: '102 Phrases', caption: { bn: '৬টি ব্যবহারিক বিভাগে অডিওসহ ১০২টি বাক্য', en: '102 categorized survival phrases with TTS' } },
    { label: '15 Guides', caption: { bn: 'ক্যাফে, বাস, সুপারমার্কেট ও অফিসের বাস্তব গাইড', en: '15 real-world guides with regional notes' } },
    { label: '20 Scenarios', caption: { bn: '২০টি পরিস্থিতিভিত্তিক বোধগম্যতা অনুশীলন', en: '20 interactive scenario checks' } },
  ],
  sections: [
    {
      id: 'cs-golden-rules',
      heading: { bn: '১. ইতালিতে প্রথম সপ্তাহের ৫টি অপরিহার্য নিয়ম', en: '1. Five Must-Know Practical Habits' },
      summary: {
        bn: 'নতুন আগত শিক্ষার্থী বা ভ্রমণকারীদের জন্য সবচেয়ে বেশি কাজে আসা বাস্তব নিয়ম।',
        en: 'Core cultural rules that protect your wallet and make daily interactions smooth.',
      },
      table: {
        headers: [
          { bn: 'পরিস্থিতি', en: 'Situation' },
          { bn: 'কী করবেন', en: 'What to Do' },
          { bn: 'কেন গুরুত্বপূর্ণ', en: 'Why It Matters' },
        ],
        rows: [
          { cells: [{ bn: 'বাস/লোকাল ট্রেন', en: 'Bus / Regional Train' }, 'Convalidare il biglietto', { bn: 'জরিমানা এড়াতে', en: 'Avoid fines on board' }], audioIt: 'Ricorda di convalidare il biglietto.' },
          { cells: [{ bn: 'ক্যাফে (Bar)', en: 'Café (Bar)' }, 'Al banco vs. Al tavolo', { bn: 'দাম আলাদা হতে পারে', en: 'Counter is cheaper than table' }], audioIt: 'Prendo un caffè al banco.' },
          { cells: [{ bn: 'সুপারমার্কেট ফল', en: 'Produce aisle' }, 'Indossare i guanti', { bn: 'খালি হাতে ধরা নিষেধ', en: 'Gloves required for loose produce' }], audioIt: 'Metti i guanti per la frutta.' },
          { cells: [{ bn: 'পোস্ট অফিস / অফিস', en: 'Public Offices' }, 'Prendere il numerino', { bn: 'লাইনের ক্রম মানতে', en: 'Required queue ticket' }], audioIt: 'Prenda il numerino per la fila.' },
          { cells: [{ bn: 'জরুরি অবস্থা', en: 'Emergencies' }, 'Chiamare il 112', { bn: 'পুলিশ/অ্যাম্বুলেন্স/ফায়ার', en: 'Unified free EU hotline' }], audioIt: 'Il numero di emergenza è il 112.' },
        ],
      },
    },
    {
      id: 'cs-signs-overview',
      heading: { bn: '২. শহরের দরকারি সাইনবোর্ড ও সাধারণ সতর্কতা', en: '2. Essential Street & Door Signs' },
      summary: {
        bn: 'প্রতিদিন চোখে পড়া বিপরীত অর্থবোধক শব্দজোড়গুলো একসাথে মনে রাখুন।',
        en: 'Memorize these high-frequency contrasting sign pairs.',
      },
      rules: [
        {
          id: 'cs-rule-pairs',
          title: { bn: 'বিপরীত সাইনবোর্ড জোড়া', en: 'High-Frequency Sign Pairs' },
          body: {
            bn: 'Aperto (খোলা) ↔ Chiuso (বন্ধ); Entrata (প্রবেশ) ↔ Uscita (বাহির); Spingere (ধাক্কা) ↔ Tirare (টান); Libero (খালি) ↔ Occupato (ভর্তি)।',
            en: 'Aperto (Open) ↔ Chiuso (Closed); Entrata (Entrance) ↔ Uscita (Exit); Spingere (Push) ↔ Tirare (Pull); Libero (Free) ↔ Occupato (Occupied).',
          },
          examples: [
            { it: 'Spingere la porta per entrare.', phoneticBn: 'স্পিন-জে-রে লা পোর-তা', phoneticEn: 'SPEEN-jeh-reh lah POHR-tah', tr: { bn: 'ভেতরে ঢুকতে দরজাটি ধাক্কা দিন।', en: 'Push the door to enter.' } },
            { it: 'Vietato fumare all’interno.', phoneticBn: 'ভিয়ে-তা-তো ফু-মা-রে', phoneticEn: 'vyeh-TAH-toh foo-MAH-reh', tr: { bn: 'ভেতরে ধূমপান নিষেধ।', en: 'No smoking inside.' } },
          ],
        },
      ],
      mistakes: [
        {
          wrong: 'Ignoring paper bus ticket validation',
          right: 'Stamp in the machine immediately upon boarding',
          explanation: {
            bn: 'কাগজের টিকিট শুধু কিনলেই হয় না, বাসে বা প্ল্যাটফর্মে পাঞ্চ না করলে বৈধ গণ্য হয় না।',
            en: 'Buying a paper ticket is not enough; you must validate it before riding.',
          },
        },
      ],
    },
  ],
};

export const A1_CULTURE_SURVIVAL_REQUIRED_IDS: string[] = [
  ...A1_CULTURE_PHRASES.map((p) => p.id),
  ...A1_CULTURE_GUIDES.map((g) => g.id),
  ...A1_CULTURE_EXERCISES.map((e) => e.id),
];

export const A1_CULTURE_SURVIVAL_DRILL_ITEMS: AcademyDrillItem[] = [
  {
    id: 'cs-dr-01',
    drillKind: 'mcq',
    audioIt: 'Prendo un caffè al banco.',
    primaryLabel: 'al banco',
    secondaryLabel: 'কাউন্টারে দাঁড়িয়ে',
    promptOverride: { bn: 'ইতালিয়ান ক্যাফেতে "al banco" বলতে কী বোঝায়?', en: 'In an Italian café, what does "al banco" mean?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Standing at the bar counter' },
      { id: 'o2', primaryLabel: 'Seated at an outdoor table' },
      { id: 'o3', primaryLabel: 'Paying at a bank ATM' },
      { id: 'o4', primaryLabel: 'Delivery at home' },
    ],
    cueBn: 'আল বান-কো',
    cueEn: '"al banco" = standing at the espresso bar counter.',
    feedbackDetail: {
      bn: 'কাউন্টারে দাঁড়িয়ে খেলে সাধারণত বাড়তি টেবিল সার্ভিস ফি দিতে হয় না।',
      en: 'Standing at the counter is fast and avoids table surcharges.',
    },
  },
  {
    id: 'cs-dr-02',
    drillKind: 'matching',
    audioIt: 'Spingere, Tirare, Aperto, Chiuso',
    primaryLabel: 'Public Signs',
    secondaryLabel: 'সাইনবোর্ড মেলান',
    promptOverride: { bn: 'ইতালিয়ান সাইনবোর্ডের শব্দের সাথে সঠিক অর্থ মেলান:', en: 'Match each public Italian sign to its meaning:' },
    matchingPairs: [
      { id: 'sg1', leftIt: 'Spingere', rightTr: { bn: 'ধাক্কা দিন (Push)', en: 'Push' } },
      { id: 'sg2', leftIt: 'Tirare', rightTr: { bn: 'টানুন (Pull)', en: 'Pull' } },
      { id: 'sg3', leftIt: 'Uscita', rightTr: { bn: 'বাইরে যাওয়ার পথ (Exit)', en: 'Exit' } },
      { id: 'sg4', leftIt: 'Fuori servizio', rightTr: { bn: 'নষ্ট / অচল (Out of order)', en: 'Out of order' } },
    ],
    cueBn: 'স্পিন-জে-রে / তি-রা-রে',
    cueEn: 'Everyday door and station signs.',
    feedbackDetail: {
      bn: 'দরজায় স্পিনজেরে = ধাক্কা, তিরারে = টান, উশিতা = বাহির, ফুওরি সেরভিৎসিও = অচল।',
      en: 'Essential door and facility signs across Italy.',
    },
  },
  {
    id: 'cs-dr-03',
    drillKind: 'listening',
    audioIt: 'Bisogna convalidare il biglietto prima di partire.',
    primaryLabel: 'Validate your ticket',
    secondaryLabel: 'টিকিট পাঞ্চ/ভ্যালিডেট করা',
    promptOverride: { bn: 'অডিও শুনে নির্দেশনাটি কী তা বেছে নিন:', en: 'Listen and select the rule stated in the audio:' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Validate your ticket before departing', secondaryLabel: 'convalidare il biglietto' },
      { id: 'o2', primaryLabel: 'Show your passport to the bus driver', secondaryLabel: 'passaporto' },
      { id: 'o3', primaryLabel: 'Bring a coin for the shopping cart', secondaryLabel: 'carrello' },
      { id: 'o4', primaryLabel: 'Press the red button to exit', secondaryLabel: 'pulsante rosso' },
    ],
    cueBn: 'কোন-ভা-লি-দা-রে ইল বিল-ইয়েৎ-তো',
    cueEn: '"convalidare" = validate/stamp a paper ticket.',
    feedbackDetail: {
      bn: 'বাস ও আঞ্চলিক ট্রেনে কাগজের টিকিট মেশিনে ভ্যালিডেট করা জরুরি।',
      en: 'Always stamp paper tickets in the validator machine.',
    },
  },
  {
    id: 'cs-dr-04',
    drillKind: 'sentence-builder',
    audioIt: 'Scusi, dov’è la farmacia di turno?',
    primaryLabel: 'On-duty Pharmacy',
    secondaryLabel: 'ডিউটি ফার্মেসি খোঁজা',
    promptOverride: { bn: '“মাফ করবেন, ডিউটি ফার্মেসি কোথায়?” — শব্দ সাজান:', en: 'Build: "Excuse me, where is the on-duty pharmacy?"' },
    sentenceTokens: ['di', 'farmacia', 'dov’è', 'Scusi,', 'la', 'turno?'],
    acceptedSentences: ["Scusi, dov'è la farmacia di turno?", 'Scusi, dov’è la farmacia di turno?'],
    cueBn: 'লা ফার-মা-চিয়া দি তুর-নো',
    cueEn: '"farmacia di turno" = after-hours rotating pharmacy.',
    feedbackDetail: {
      bn: 'রাতে বা ছুটির দিনে খোলা থাকা ফার্মেসিকে "farmacia di turno" বলে।',
      en: 'Ask for the "farmacia di turno" when seeking an open after-hours pharmacy.',
    },
  },
  {
    id: 'cs-dr-05',
    drillKind: 'mcq',
    audioIt: 'Metti i guanti monouso per la frutta!',
    primaryLabel: 'Use disposable gloves',
    secondaryLabel: 'প্লাস্টিকের গ্লাভস ব্যবহার',
    promptOverride: { bn: 'সুপারমার্কেটে খোলা ফল-সবজি ধরতে কী করতে হয়?', en: 'What custom applies when selecting loose produce in an Italian supermarket?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Put on the disposable gloves provided nearby' },
      { id: 'o2', primaryLabel: 'Wash fruit at the register' },
      { id: 'o3', primaryLabel: 'Take only pre-opened boxes' },
      { id: 'o4', primaryLabel: 'Ask for a coperto fee' },
    ],
    cueBn: 'ই গুয়ান-তি মো-নু-ও-জো',
    cueEn: '"guanti" = gloves.',
    feedbackDetail: {
      bn: 'ইতালির সুপারমার্কেটে হাইজিনের জন্য খোলা ফল ধরতে গ্লাভস পরতে হয়।',
      en: 'Wearing disposable gloves in the produce section is standard hygiene.',
    },
  },
  {
    id: 'cs-dr-06',
    drillKind: 'fill-blank',
    audioIt: 'In caso di emergenza chiama il 112.',
    primaryLabel: '112',
    secondaryLabel: 'ইউরোপীয় জরুরি নম্বর',
    promptOverride: { bn: 'ইতালির একক জরুরি হেল্পলাইন নম্বর কোনটি? In emergenza chiama il ___.', en: 'Fill in Italy’s unified emergency number: In emergenza chiama il ___.' },
    promptIt: 'In caso di emergenza chiama il ___.',
    explicitOptions: [
      { id: 'o1', primaryLabel: '112' },
      { id: 'o2', primaryLabel: '911' },
      { id: 'o3', primaryLabel: '404' },
      { id: 'o4', primaryLabel: '000' },
    ],
    cueBn: 'চেন-তো দো-দি-চি',
    cueEn: 'Unified EU emergency dispatch is 112.',
    feedbackDetail: {
      bn: '১১২ কল করলে পুলিশ, অ্যাম্বুলেন্স বা ফায়ার সার্ভিস—সবই যুক্ত হয়।',
      en: '112 connects police, medical emergency, and fire brigade.',
    },
  },
  {
    id: 'cs-dr-07',
    drillKind: 'matching',
    audioIt: 'Tabaccheria, Poste, Coperto, Numerino',
    primaryLabel: 'Daily Institutions',
    secondaryLabel: 'স্থান ও নিয়ম মেলান',
    promptOverride: { bn: 'ইতালীয় প্রতিষ্ঠান/শব্দগুলোর সঠিক কাজের সাথে মেলান:', en: 'Match each Italian term to its everyday role:' },
    matchingPairs: [
      { id: 'd1', leftIt: 'Tabaccheria (T)', rightTr: { bn: 'বাস টিকিট ও বোলো স্ট্যাম্প', en: 'Bus tickets & revenue stamps' } },
      { id: 'd2', leftIt: 'Numerino', rightTr: { bn: 'পোস্ট অফিস/অফিসের লাইনের টোকেন', en: 'Queue ticket number at offices' } },
      { id: 'd3', leftIt: 'Coperto', rightTr: { bn: 'রেস্তোরাঁয় বসে খাওয়ার টেবিল ফি', en: 'Sit-down restaurant cover fee' } },
      { id: 'd4', leftIt: 'Sottopassaggio', rightTr: { bn: 'স্টেশনে প্ল্যাটফর্ম পারাপারের পাতাল পথ', en: 'Station platform underpass' } },
    ],
    cueBn: 'তা-বাক-কে-রিয়া / নু-মে-রি-নো',
    cueEn: 'Practical survival terms across daily life.',
    feedbackDetail: {
      bn: 'তাবাক্কেরিয়া, নুমেরিনো, কোপের্তো এবং সোত্তোপাসসাজ্জো ইতালির দৈনন্দিন জীবনের অংশ।',
      en: 'Knowing these four terms makes transport, meals, and errands effortless.',
    },
  },
  {
    id: 'cs-dr-08',
    drillKind: 'mcq',
    audioIt: 'Prenda il numerino per la fila!',
    primaryLabel: 'Take a queue number',
    secondaryLabel: 'লাইন টোকেন',
    promptOverride: { bn: 'পোস্ট অফিসে ঢুকে "Prenda il numerino!" বললে কী করবেন?', en: 'Inside a post office, what does "Prenda il numerino" tell you?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Take a waiting number from the ticket kiosk' },
      { id: 'o2', primaryLabel: 'Write your phone number on a letter' },
      { id: 'o3', primaryLabel: 'Stand in the produce line' },
      { id: 'o4', primaryLabel: 'Order two espressos' },
    ],
    cueBn: 'প্রেন-দা ইল নু-মে-রি-নো',
    cueEn: '"numerino" = small queue number.',
    feedbackDetail: {
      bn: 'অপেক্ষা করার আগে মেশিন থেকে নম্বর টিকিট নিলে তবেই কাউন্টারে ডাকা হবে।',
      en: 'Select a number on the kiosk and wait for your counter to appear on screen.',
    },
  },
];

function csq(
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
    moduleId: 'culture-survival',
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
export const A1_CULTURE_SURVIVAL_EXAM_POOL: AcademyExamQuestion[] = [
  csq('csq-01', 'ছোট পাড়ার দোকানে ঢোকার সময় কোন অভিব্যক্তি স্বাভাবিক শিষ্টাচার?', 'Which greeting is customary when entering a small neighborhood shop?', undefined, ['Buongiorno! / Buonasera!', 'Silenzio totale', 'Arrivederci subito!', 'Dammi tutto!'], 0, 'প্রবেশের সময় কর্মী ও উপস্থিতদের উদ্দেশ্যে "Buongiorno" বা "Buonasera" বলা ভদ্রতা।', 'Saying "Buongiorno" or "Buonasera" upon entering is standard etiquette.', 'Buongiorno a tutti!'),
  csq('csq-02', 'ইতালিয়ান ক্যাফেতে সাধারণত কোথায় দাঁড়িয়ে কফি খেলে দাম কম হয়?', 'Where is coffee typically cheaper at an Italian café?', undefined, ['al banco (at the counter)', 'al tavolo (at a table)', 'from home', 'on a terrace'], 0, 'কাউন্টারে দাঁড়িয়ে ("al banco") খেলে টেবিল সার্ভিস চার্জ যোগ হয় না।', 'Standing at the counter ("al banco") avoids sit-down service charges.', 'Un caffè al banco, per favore.', { bn: ['al banco (কাউন্টারে দাঁড়িয়ে)', 'al tavolo (টেবিলে বসে)', 'বাসা থেকে', 'বাগানে বসে'], en: ['al banco (at the counter)', 'al tavolo (at a table)', 'from home', 'on a terrace'] }),
  csq('csq-03', 'রেস্তোরাঁয় "coperto" চার্জ কী বোঝায়?', 'What does "coperto" on an Italian restaurant bill represent?', 'Coperto €2,00', ['Published per-person table & bread fee', 'A billing error', 'A police fine', 'A taxi charge'], 0, 'মেনুতে উল্লিখিত প্রতিটি বসার আসনের নির্দিষ্ট কভার চার্জকে কোপের্তো বলে।', '"Coperto" is a published per-person table/bread cover charge.', undefined, { bn: ['বসে খাওয়ার নির্দিষ্ট টেবিল ও রুটির ফি', 'রসিদের ভুল হিসাব', 'পুলিশ জরিমানা', 'ট্যাক্সি ভাড়া'], en: ['Published per-person table & bread fee', 'A billing error', 'A police fine', 'A taxi charge'] }),
  csq('csq-04', 'বাস বা ট্রামের কাগজের টিকিট কিনে ওঠার পর কী করা জরুরি?', 'After buying and boarding with a paper bus ticket, what must you do?', undefined, ['Validate it in the machine immediately', 'Tear it in half', 'Keep it unvalidated', 'Validate it after getting off'], 0, 'ওঠার সাথে সাথেই মেশিনে টিকিট ভ্যালিডেট না করলে জরিমানা হতে পারে।', 'You must validate ("convalidare") the paper ticket right away on board.', 'Bisogna convalidare il biglietto.', { bn: ['মেশিনে টিকিটটি convalidare (পাঞ্চ) করা', 'টিকিট ছিঁড়ে ফেলা', 'না ছুঁয়ে পকেটে রাখা', 'বাস থেকে নামার পর পাঞ্চ করা'], en: ['Validate it in the machine immediately', 'Tear it in half', 'Keep it unvalidated', 'Validate it after getting off'] }),
  csq('csq-05', 'নীল “T” চিহ্নযুক্ত দোকান (Tabaccheria)-তে সাধারণত কী কেনা যায়?', 'Which items can you commonly buy at a Tabaccheria (blue "T")?', undefined, ['Transit tickets & revenue stamps', 'Fresh seafood', 'Prescription antibiotics', 'Tailored shoes'], 0, 'তাবাক্কেরিয়ায় পরিবহন টিকিট, ডাকটিকিট এবং দাপ্তরিক বোলো স্ট্যাম্প পাওয়া যায়।', 'Tabaccherie sell transit tickets, postage, and revenue stamps ("marche da bollo").', undefined, { bn: ['বাসের টিকিট ও Marca da Bollo স্ট্যাম্প', 'তাজা মাছ ও মাংস', 'ডাক্তারের প্রেসক্রিপশন ওষুধ', 'জুতোর মাপ'], en: ['Transit tickets & revenue stamps', 'Fresh seafood', 'Prescription antibiotics', 'Tailored shoes'] }),
  csq('csq-06', 'সুপারমার্কেটে খোলা ফল ও সবজি ধরার আগে কী ব্যবহার করতে হয়?', 'What should you wear before picking loose fruit in an Italian supermarket?', undefined, ['Disposable gloves (guanti monouso)', 'A loyalty card', 'Winter mittens', 'Coins'], 0, 'হাইজিনের জন্য ফল-সবজির পাশেই বিনামূল্যে গ্লাভস রাখা থাকে।', 'Disposable produce gloves ("guanti monouso") are required by law/custom.', 'Metti i guanti per la frutta.', { bn: ['guanti monouso (প্লাস্টিকের গ্লাভস)', 'সেলফ-চেকআউট কার্ড', 'বড় কোট', 'কয়েন'], en: ['Disposable gloves (guanti monouso)', 'A loyalty card', 'Winter mittens', 'Coins'] }),
  csq('csq-07', 'দোকানের দরজায় "TIRARE" লেখা থাকলে কী করবেন?', 'If a door says "TIRARE", what action opens it?', 'TIRARE', ['Pull', 'Push', 'Knock', 'Door locked'], 0, 'Tirare = Pull (টানা); Spingere = Push (ধাক্কা দেওয়া)।', 'Tirare means Pull; Spingere means Push.', 'Tirare', { bn: ['নিজের দিকে টানুন (Pull)', 'সামনে ধাক্কা দিন (Push)', 'নক করুন', 'দরজা বন্ধ'], en: ['Pull', 'Push', 'Knock', 'Door locked'] }),
  csq('csq-08', 'সাইনবোর্ডে "VIETATO L’INGRESSO" লেখা মানে কী?', 'What does the sign "VIETATO L’INGRESSO" mean?', 'VIETATO L’INGRESSO', ['No Entry', 'Free Entrance', 'Smoking Area', 'Free Parking'], 0, '"Vietato" অর্থ নিষিদ্ধ।', '"Vietato l’ingresso" means No Entry / Do Not Enter.', undefined, { bn: ['প্রবেশ নিষেধ (No Entry)', 'প্রবেশ খোলা', 'ধূমপান এলাকা', 'ফ্রি পার্কিং'], en: ['No Entry', 'Free Entrance', 'Smoking Area', 'Free Parking'] }),
  csq('csq-09', 'রেলস্টেশনে "Partenze" বোর্ড কী দেখায়?', 'At an Italian train station, what does the "Partenze" board display?', 'Partenze', ['Departures', 'Arrivals', 'Restrooms', 'Ticket prices'], 0, 'Partenze = যাত্রা/প্রস্থান (Departures); Arrivi = আগমন (Arrivals)।', '"Partenze" lists departing trains and their platform numbers.', undefined, { bn: ['ছেড়ে যাওয়া ট্রেনের তালিকা (Departures)', 'আগত ট্রেন', 'বাথরুমের দিক', 'টিকিটের দাম'], en: ['Departures', 'Arrivals', 'Restrooms', 'Ticket prices'] }),
  csq('csq-10', 'ইতালিতে জরুরি সাহায্য নম্বর কত?', 'What is the unified 24/7 emergency number in Italy?', undefined, ['112', '211', '991', '333'], 0, '১১২ নম্বরে কল করলে পুলিশ, অ্যাম্বুলেন্স ও ফায়ার সার্ভিস যুক্ত হয়।', '112 connects all emergency services in Italy and the EU.', 'Chiama il 112.'),
  csq('csq-11', 'পোস্ট অফিসের মতো জায়গায় "Prenda il numerino" মানে কী?', 'What does "Prenda il numerino" mean in an office or post office?', 'Prenda il numerino!', ['Take a queue ticket number', 'Wait outside', 'Count your cash', 'Sign immediately'], 0, 'লাইন ব্যবস্থাপনার জন্য মেশিন থেকে কাগজের নম্বর নিতে হয়।', 'Take a paper queue ticket number from the machine.', 'Prenda il numerino per la fila!', { bn: ['কিউ মেশিন থেকে অপেক্ষার টোকেন নম্বর নিন', 'বাইরে গিয়ে দাঁড়ান', 'টাকা গুনে দিন', 'ফর্মে সই করুন'], en: ['Take a queue ticket number', 'Wait outside', 'Count your cash', 'Sign immediately'] }),
  csq('csq-12', 'দোকানে "CHIUSO PER PAUSA PRANZO" দেখলে কী বুঝবেন?', 'A sign reads "CHIUSO PER PAUSA PRANZO". What does it mean?', 'Chiuso dalle 13 alle 16', ['Temporarily closed for lunch break', 'Permanently closed', 'Credit card only', 'Grand opening'], 0, 'অনেক ছোট দোকান দুপুর ১টা থেকে ৩/৪টা পর্যন্ত বিরতিতে বন্ধ থাকে।', 'Many independent shops close for a midday lunch break ("pausa pranzo").', undefined, { bn: ['দুপুরের খাবারের বিরতির জন্য সাময়িকভাবে বন্ধ', 'চিরতরে বন্ধ', 'শুধু ক্রেডিট কার্ড', 'নতুন দোকান খোলা'], en: ['Temporarily closed for lunch break', 'Permanently closed', 'Credit card only', 'Grand opening'] }),
  csq('csq-13', 'ফর্ম পূরণে "in stampatello" নির্দেশনার অর্থ কী?', 'On a form, what does "Compilare in stampatello" instruct?', 'in stampatello', ['Write in clear BLOCK LETTERS', 'Use green ink', 'Use initials only', 'Leave blank'], 0, 'সহজে পড়ার জন্য আলাদা আলাদা ক্যাপিটাল অক্ষরে (BLOCK LETTERS) লিখতে বলা হয়।', '"In stampatello" means legible printed BLOCK LETTERS.', undefined, { bn: ['স্পষ্ট বড় হাতের ছাপার অক্ষরে লেখা', 'সবুজ কলমে লেখা', 'সংক্ষিপ্ত নাম লেখা', 'ফাঁকা রাখা'], en: ['Write in clear BLOCK LETTERS', 'Use green ink', 'Use initials only', 'Leave blank'] }),
  csq('csq-14', 'ইতালির শহরের কেন্দ্রে "ZTL" সাইন দেখলে মূল নিয়ম কী?', 'What does a "ZTL (Zona a Traffico Limitato)" sign mean in historic city centers?', 'ZTL attiva', ['No unauthorized cars (pedestrians welcome)', 'Free parking for all cars', 'Highway speed limit', 'Train crossing'], 0, 'ZTL এলাকায় অনুমতিহীন গাড়ি ঢুকলে ক্যামেরায় জরিমানা হয়; পথচারীরা স্বাভাবিকভাবে হাঁটতে পারেন।', 'ZTL zones restrict unauthorized vehicle entry while welcoming pedestrians.', undefined, { bn: ['অনুমতি ছাড়া গাড়ি প্রবেশ নিষেধ (হাঁটা মুক্ত)', 'সবার জন্য ফ্রি গাড়ি পার্কিং', 'হাই-স্পিড রাস্তা', 'শুধু ট্রেনের রাস্তা'], en: ['No unauthorized cars (pedestrians welcome)', 'Free parking for all cars', 'Highway speed limit', 'Train crossing'] }),
  csq('csq-15', 'রাতের বেলা খোলা ফার্মেসিকে ইতালিয়ানে কী বলে?', 'What do Italians call an on-duty after-hours pharmacy?', undefined, ['farmacia di turno', 'farmacia chiusa', 'tabaccheria', 'sala d’attesa'], 0, 'পালাক্রমে রাতে ও ছুটির দিনে খোলা ফার্মেসি = "farmacia di turno"।', '"Farmacia di turno" rotates night and holiday pharmacy coverage.', 'Dov’è la farmacia di turno?'),
  csq('csq-16', 'কোন শব্দটি "Out of order / Broken" বোঝায়?', 'Which Italian sign means "Out of order"?', undefined, ['Fuori servizio / Guasto', 'Aperto tutto il giorno', 'Orario continuato', 'Libero sempre'], 0, 'যন্ত্রপাতি বা লিফট নষ্ট থাকলে "Fuori servizio" বা "Guasto" লেখা থাকে।', '"Fuori servizio" and "Guasto" warn that something is broken or out of order.', 'Fuori servizio'),
  csq('csq-17', 'আবর্জনা রিসাইক্লিংয়ে "Umido / Organico" বলতে কী বোঝায়?', 'In waste sorting, what goes into "Umido / Organico"?', 'Umido', ['Food scraps / organic waste', 'Glass bottles', 'Newspapers', 'Metal cans'], 0, 'Umido বা Organico-তে পচনশীল জৈব খাদ্য বর্জ্য ফেলা হয়।', 'Organic food scraps go into the "Umido / Organico" bin.', undefined, { bn: ['রান্নার খোসা ও জৈব খাবারের বর্জ্য', 'কাচের বোতল', 'খবরের কাগজ', 'ধাতব ক্যান'], en: ['Food scraps / organic waste', 'Glass bottles', 'Newspapers', 'Metal cans'] }),
  csq('csq-18', 'রেস্তোরাঁয় "un caffè" অর্ডার করলে ওয়েটার কী আনবেন?', 'If you simply ask for "un caffè" at an Italian bar, what are you served?', undefined, ['A single shot of espresso', 'A large mug of iced coffee', 'A pint of steamed milk', 'Ground coffee beans'], 0, 'ইতালিতে ডিফল্ট "un caffè" মানে এক শট গাঢ় এসপ্রেসো।', 'By default, "un caffè" in Italy is a single shot of espresso.', 'Vorrei un caffè, per favore.', { bn: ['একটি ছোট এসপ্রেসো শট', 'এক মগ আইসড কফি', 'দুধ ও চিনি মেশানো বড় গ্লাস', 'কফি পাউডার প্যাকেট'], en: ['A single shot of espresso', 'A large mug of iced coffee', 'A pint of steamed milk', 'Ground coffee beans'] }),
  csq('csq-19', 'হাসপাতালের জরুরি বিভাগকে ইতালিয়ানে কী বলে?', 'What is the Italian sign for the Hospital Emergency Room?', undefined, ['Pronto Soccorso', 'Deposito Bagagli', 'Uscita Sicurezza', 'Piano Terra'], 0, '"Pronto Soccorso" অর্থ জরুরি চিকিৎসা বিভাগ (ER)।', '"Pronto Soccorso" is the Emergency Department.', 'Dov’è il Pronto Soccorso?'),
  csq('csq-20', 'রেলস্টেশনে এক প্ল্যাটফর্ম থেকে অন্য প্ল্যাটফর্মে যেতে কোন পথ ব্যবহার করবেন?', 'How should pedestrians switch platforms at an Italian train station?', undefined, ['Via the Sottopassaggio (underpass)', 'Walking directly over the rails', 'Behind ticket kiosks', 'Through the locomotive'], 0, 'সবসময় নিরাপদ আন্ডারপাস বা ওভারব্রিজ ("sottopassaggio") ব্যবহার করুন।', 'Always cross via the pedestrian underpass ("sottopassaggio").', 'Dov’è il sottopassaggio?', { bn: ['Sottopassaggio (আন্ডারপাস)', 'রেললাইনের ওপর দিয়ে দৌড়ে', 'টিকিট মেশিনের পেছন দিয়ে', 'চালকের কেবিন দিয়ে'], en: ['Via the Sottopassaggio (underpass)', 'Walking directly over the rails', 'Behind ticket kiosks', 'Through the locomotive'] }),
  csq('csq-21', 'ইতালিতে সাধারণত টিপস (mancia) দেওয়ার প্রথা কেমন?', 'What is the tipping norm ("la mancia") in Italy?', undefined, ['Not mandatory; small optional rounding is appreciated', 'Mandatory 25% surcharge', 'Strictly illegal everywhere', 'Bank wire only'], 0, 'বাইরের অনেক দেশের মতো ইতালিতে বড় শতাংশের টিপস বাধ্যতামূলক নয়।', 'Tipping is optional in Italy; rounding up slightly for great service is appreciated.', undefined, { bn: ['বাধ্যতামূলক নয়; ভালো লাগলে সামান্য কয়েন বা কিছু ইউরো রাখা ঐচ্ছিক', 'প্রতিবার বাধ্যতামূলক ২৫% টিপস', 'টিপস দিলে আইনত জরিমানা', 'শুধু ব্যাংক ট্রান্সফারে'], en: ['Not mandatory; small optional rounding is appreciated', 'Mandatory 25% surcharge', 'Strictly illegal everywhere', 'Bank wire only'] }),
  csq('csq-22', 'রাস্তায় কোনো পরিচয়পত্র বা মানিব্যাগ হারিয়ে গেলে রিপোর্ট ("denuncia") কোথায় করবেন?', 'Where should you go to file a loss/theft report ("denuncia")?', undefined, ['Carabinieri or Polizia station', 'Supermarket checkout', 'Post office kiosk', 'Clothing boutique'], 0, 'আইনি রিপোর্টের জন্য কারাবিনিয়েঁরি বা পোলিৎসিয়া স্টেশনে যেতে হয়।', 'File official theft or loss reports with the Carabinieri or Polizia.', undefined, { bn: ['Carabinieri বা Polizia', 'সুপারমার্কেট ক্যাশ কাউন্টার', 'পোস্ট অফিসের কিউ মেশিন', 'কাপড়ের দোকান'], en: ['Carabinieri or Polizia station', 'Supermarket checkout', 'Post office kiosk', 'Clothing boutique'] }),
  csq('csq-23', 'বাসে নিজের গন্তব্যে নামতে হলে কী চাপতে হয়?', 'What inside a bus alerts the driver to stop at the upcoming bus stop?', undefined, ['il pulsante rosso / STOP', 'la tessera fedeltà', 'la ricevuta', 'il passaporto'], 0, 'বাসের ভেতরের পিলারে থাকা স্টপ বোতাম চাপলে সামনে "Fermata prenotata" আলো জ্বলে ওঠে।', 'Press the red stop button inside the bus before the stop.', 'Premi il pulsante per fermare.'),
  csq('csq-24', 'সুপারমার্কেটের ট্রলি (carrello) নিতে অনেক সময় কী লাগে?', 'What do many supermarkets require to unlock a shopping cart ("carrello")?', undefined, ['A refundable coin (50c / 1€)', 'A passport copy', 'A revenue stamp', 'A train ticket'], 0, 'ট্রলি ফিরিয়ে লক লাগালে কয়েনটি আবার ফেরত আসে।', 'Insert a small coin (50c/1€) which is returned when you lock the cart back.', undefined, { bn: ['একটি ৫০ সেন্ট / ১ ইউরো কয়েন (যা ফেরত পাওয়া যায়)', 'পাসপোর্টের কপি', 'ট্যাক্স স্ট্যাম্প', 'রেলওয়ে টিকিট'], en: ['A refundable coin (50c / 1€)', 'A passport copy', 'A revenue stamp', 'A train ticket'] }),
  csq('csq-25', 'অফিস বা দোকান থেকে বের হওয়ার সময় সবচেয়ে সুন্দর সৌজন্য বাক্য কোনটি?', 'Which polite farewell fits almost any daytime departure from a shop or office?', undefined, ['Grazie, buona giornata!', 'Spingere qui!', 'Ha sbagliato!', 'Vietato entrare!'], 0, '“Grazie, buona giornata!” (ধন্যবাদ, আপনার দিনটি শুভ হোক!) খুব উষ্ণ ও প্রচলিত।', '"Grazie, buona giornata!" is polite and warm anywhere during the day.', 'Grazie, buona giornata!'),
];
