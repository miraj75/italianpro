import type {
  AcademyDrillItem,
  AcademyExamQuestion,
  AcademyTheoryConfig,
} from './types';
import type { Tr } from '../types';

export type EverydayTopicId =
  | 'restaurant'
  | 'supermarket'
  | 'shopping'
  | 'directions'
  | 'transport'
  | 'stations'
  | 'hotel'
  | 'pharmacy'
  | 'doctor'
  | 'university'
  | 'workplace'
  | 'help'
  | 'telephone'
  | 'appointments';

export interface EverydayTopicMeta {
  id: EverydayTopicId;
  order: number;
  title: Tr;
  subtitle: Tr;
}

export interface EverydayExpression {
  id: string;
  topicId: EverydayTopicId;
  it: string;
  phoneticBn: string;
  phoneticEn: string;
  meaning: Tr;
  exampleIt: string;
  exampleTr: Tr;
}

export interface EverydayDialogue {
  id: string;
  topicId: EverydayTopicId;
  title: Tr;
  setting: Tr;
  lines: { speaker: string; it: string; tr: Tr }[];
  checkQuestion: Tr;
  checkOptions: Tr[];
  checkAnswer: number;
}

export const EVERYDAY_COMM_TOPICS: EverydayTopicMeta[] = [
  { id: 'restaurant', order: 1, title: { bn: '১. রেস্তোরাঁ ও ক্যাফে', en: '1. Restaurant & Café' }, subtitle: { bn: 'কফি, খাবার অর্ডার ও বিল পরিশোধ', en: 'Ordering coffee, meals, water & asking for the bill' } },
  { id: 'supermarket', order: 2, title: { bn: '২. সুপারমার্কেট', en: '2. Supermarket' }, subtitle: { bn: 'পণ্য খোঁজা, ওজন, ব্যাগ ও ক্যাশ কাউন্টার', en: 'Aisles, weighing produce, bags & checkout' } },
  { id: 'shopping', order: 3, title: { bn: '৩. কেনাকাটা ও দাম', en: '3. Shopping & Prices' }, subtitle: { bn: 'দাম জিজ্ঞাসা, মাপ, রঙ ও পেমেন্ট', en: 'Asking prices, sizes, colors & paying by card/cash' } },
  { id: 'directions', order: 4, title: { bn: '৪. রাস্তা ও দিকনির্দেশনা', en: '4. Asking Directions' }, subtitle: { bn: 'ডান, বাম, সোজা ও দূরত্ব জিজ্ঞাসা', en: 'Left, right, straight ahead & nearby landmarks' } },
  { id: 'transport', order: 5, title: { bn: '৫. গণপরিবহন', en: '5. Public Transportation' }, subtitle: { bn: 'বাস, মেট্রো, ট্রাম ও টিকিট পাঞ্চ করা', en: 'Bus, metro, tram stops & ticket validation' } },
  { id: 'stations', order: 6, title: { bn: '৬. ট্রেন ও বাস স্টেশন', en: '6. Train & Bus Stations' }, subtitle: { bn: 'টিকিট, প্ল্যাটফর্ম, সময়সূচি ও পরিবর্তন', en: 'Tickets, binario, departure time & transfers' } },
  { id: 'hotel', order: 7, title: { bn: '৭. হোটেল ও আবাসন', en: '7. Hotel & Accommodation' }, subtitle: { bn: 'চেক-ইন, রুম, ওয়াইফাই ও চেক-আউট', en: 'Check-in, room keys, breakfast & check-out' } },
  { id: 'pharmacy', order: 8, title: { bn: '৮. ফার্মেসি', en: '8. Pharmacy' }, subtitle: { bn: 'জ্বর, মাথাব্যথা, সর্দি ও সাধারণ ওষুধ', en: 'Minor discomforts, pharmacist advice & instructions' } },
  { id: 'doctor', order: 9, title: { bn: '৯. ডাক্তার অ্যাপয়েন্টমেন্ট (মৌলিক)', en: '9. Doctor Appointment (Basic)' }, subtitle: { bn: 'ভিজিট বুকিং, স্বাস্থ্য কার্ড ও সাধারণ লক্ষণ', en: 'Booking a visit, tessera sanitaria & stating symptoms' } },
  { id: 'university', order: 10, title: { bn: '১০. বিশ্ববিদ্যালয় ও ক্লাসরুম', en: '10. University & Classroom' }, subtitle: { bn: 'অফিস, ক্লাসরুম, পরীক্ষা ও প্রফেসরের সাথে কথা', en: 'Segreteria, classroom, slow repetition & exam dates' } },
  { id: 'workplace', order: 11, title: { bn: '১১. কর্মক্ষেত্র (মৌলিক)', en: '11. Workplace (Basic)' }, subtitle: { bn: 'সহকর্মী, শিফট, বিরতি ও কাজের ইমেইল', en: 'Shifts, breaks, colleagues & polite workplace phrases' } },
  { id: 'help', order: 12, title: { bn: '১২. সাহায্য চাওয়া', en: '12. Asking for Help' }, subtitle: { bn: 'ভদ্র অনুরোধ, হারিয়ে যাওয়া ও জরুরি যোগাযোগ', en: 'Polite help requests, lost items & language barriers' } },
  { id: 'telephone', order: 13, title: { bn: '১৩. ফোনালাপ', en: '13. Telephone Conversations' }, subtitle: { bn: 'Pronto?, লাইন ধরা, স্পষ্ট শোনা ও নম্বর বলা', en: 'Answering Pronto, asking to hold & spelling numbers' } },
  { id: 'appointments', order: 14, title: { bn: '১৪. অ্যাপয়েন্টমেন্ট নির্ধারণ', en: '14. Making Appointments' }, subtitle: { bn: 'সময় ঠিক করা, পরিবর্তন বা বাতিল করা', en: 'Scheduling, confirming, rescheduling & canceling' } },
];

function ex(
  id: string,
  topicId: EverydayTopicId,
  it: string,
  phoneticBn: string,
  phoneticEn: string,
  bn: string,
  en: string,
  exampleIt: string,
  exBn: string,
  exEn: string,
): EverydayExpression {
  return {
    id,
    topicId,
    it,
    phoneticBn,
    phoneticEn,
    meaning: { bn, en },
    exampleIt,
    exampleTr: { bn: exBn, en: exEn },
  };
}

// 154 functional expressions (11 per topic × 14 topics >= 150 required)
export const EVERYDAY_COMM_EXPRESSIONS: EverydayExpression[] = [
  // 1. Restaurant & café (11)
  ex('ec-res-01', 'restaurant', 'Un tavolo per due, per favore.', 'উন তা-ভো-লো পের দু-এ', 'oon TAH-voh-loh pehr DOO-eh', 'দয়া করে দুইজনের জন্য একটি টেবিল দিন।', 'A table for two, please.', 'Buonasera, un tavolo per due, per favore.', 'শুভ সন্ধ্যা, দুইজনের জন্য একটি টেবিল দিন।', 'Good evening, a table for two, please.'),
  ex('ec-res-02', 'restaurant', 'Posso avere il menù?', 'পোস-সো আ-ভে-রে ইল মে-নু', 'POHS-soh ah-VEH-reh eel meh-NOO', 'আমি কি মেনুটা পেতে পারি?', 'May I have the menu?', 'Scusi, posso avere il menù in italiano?', 'মাফ করবেন, ইতালিয়ান মেনুটা কি পেতে পারি?', 'Excuse me, may I have the Italian menu?'),
  ex('ec-res-03', 'restaurant', 'Prendo un caffè al banco.', 'প্রেন-দো উন কাফ-ফে আল বান-কো', 'PREHN-doh oon kahf-FEH ahl BAHN-koh', 'আমি কাউন্টারে দাঁড়িয়ে এক কাপ কফি নিচ্ছি।', 'I will have a coffee at the counter.', 'La mattina prendo sempre un caffè al banco.', 'সকালে আমি সবসময় কাউন্টারে এক কাপ কফি খাই।', 'In the morning I always have coffee at the bar.'),
  ex('ec-res-04', 'restaurant', 'Vorrei un bicchiere d’acqua naturale.', 'ভোর-রেই উন বিক-কিয়ে-রে দাক-কুয়া', 'vohr-REH-ee oon beek-KYEH-reh DAHK-kwah', 'আমি এক গ্লাস সাধারণ (গ্যাস ছাড়া) পানি চাই।', 'I would like a glass of still water.', 'Per me un bicchiere d’acqua naturale, grazie.', 'আমার জন্য এক গ্লাস সাধারণ পানি, ধন্যবাদ।', 'A glass of still water for me, thanks.'),
  ex('ec-res-05', 'restaurant', 'Acqua frizzante o naturale?', 'আক-কুয়া ফ্রিৎ-সান-তে ও না-তু-রা-লে', 'AHK-kwah freet-SAHN-teh oh nah-too-RAH-leh', 'গ্যাসযুক্ত না সাধারণ পানি?', 'Sparkling or still water?', 'Preferisce acqua frizzante o naturale?', 'আপনি গ্যাসযুক্ত না সাধারণ পানি পছন্দ করেন?', 'Do you prefer sparkling or still water?'),
  ex('ec-res-06', 'restaurant', 'Sono vegetariano / vegetariana.', 'সো-নো ভে-জে-তা-রিয়া-নো', 'SOH-noh veh-jeh-tah-RYAH-noh', 'আমি নিরামিষাশী।', 'I am vegetarian.', 'Non mangio carne, sono vegetariano.', 'আমি মাংস খাই না, আমি নিরামিষাশী।', 'I do not eat meat, I am vegetarian.'),
  ex('ec-res-07', 'restaurant', 'Senza carne di maiale, per favore.', 'সেন-ৎসা কার-নে দি মাই-য়া-লে', 'SEHN-tsah KAHR-neh dee mah-YAH-leh', 'দয়া করে শূকরের মাংস ছাড়া দিন।', 'Without pork, please.', 'Questo panino è senza carne di maiale?', 'এই স্যান্ডউইচটি কি পর্ক ছাড়া?', 'Is this sandwich without pork?'),
  ex('ec-res-08', 'restaurant', 'È tutto molto buono!', 'এ তুৎ-তো মোল-তো বু-ও-নো', 'eh TOOT-toh MOHL-toh BWOH-noh', 'সবকিছু খুবই সুস্বাদু!', 'Everything is delicious!', 'Complimenti, la pasta è molto buona!', 'দারুণ হয়েছে, পাস্তা খুবই সুস্বাদু!', 'Compliments, the pasta is very delicious!'),
  ex('ec-res-09', 'restaurant', 'Il conto, per favore.', 'ইল কোন-তো পের ফা-ভো-রে', 'eel KOHN-toh pehr fah-VOH-reh', 'দয়া করে বিলটা দিন।', 'The bill, please.', 'Quando può, ci porta il conto, per favore?', 'সময় হলে দয়া করে আমাদের বিলটা আনবেন?', 'When you can, could you bring us the bill?'),
  ex('ec-res-10', 'restaurant', 'Possiamo pagare separati?', 'পোস-সিয়া-মো পা-গা-রে সে-পা-রা-তি', 'pohs-SYAH-moh pah-GAH-reh seh-pah-RAH-tee', 'আমরা কি আলাদা আলাদা পেমেন্ট করতে পারি?', 'Can we pay separately?', 'Scusi, possiamo pagare separati alla cassa?', 'মাফ করবেন, ক্যাশে আমরা কি আলাদাভাবে দিতে পারি?', 'Excuse me, can we pay separately at the register?'),
  ex('ec-res-11', 'restaurant', 'Il coperto è incluso?', 'ইল কো-পের-তো এ ইন-ক্লু-জো', 'eel koh-PEHR-toh eh een-KLOO-zoh', 'কোপের্তো (টেবিল চার্জ) কি অন্তর্ভুক্ত?', 'Is the table cover charge included?', 'Vedo due euro di coperto sullo scontrino.', 'রসিদে দুই ইউরো টেবিল চার্জ দেখছি।', 'I see two euros cover charge on the receipt.'),

  // 2. Supermarket (11)
  ex('ec-sup-01', 'supermarket', 'Dov’è il reparto frutta e verdura?', 'দো-ভে ইল রে-পার-তো ফ্রুৎ-তা', 'doh-VEH eel reh-PAHR-toh FROOT-tah', 'ফল ও সবজির অংশটি কোথায়?', 'Where is the fruit and vegetable section?', 'Scusi, dov’è il reparto pane fresco?', 'মাফ করবেন, তাজা রুটির অংশটি কোথায়?', 'Excuse me, where is the fresh bread section?'),
  ex('ec-sup-02', 'supermarket', 'Serve una busta per la spesa?', 'সের-ভে উ-না বুস-তা', 'SEHR-veh OO-nah BOOS-tah', 'কেনাকাটার জন্য ব্যাগ লাগবে?', 'Do you need a shopping bag?', 'Sì, vorrei due buste biodegradabili, grazie.', 'হ্যাঁ, আমার দুটি বায়োডিগ্রেডেবল ব্যাগ লাগবে।', 'Yes, I would like two biodegradable bags, thanks.'),
  ex('ec-sup-03', 'supermarket', 'Devo pesare la frutta prima?', 'দে-ভো পে-জা-রে লা ফ্রুৎ-তা', 'DEH-voh peh-ZAH-reh lah FROOT-tah', 'আমাকে কি আগে ফলের ওজন করতে হবে?', 'Do I need to weigh the fruit first?', 'Ricorda di mettere i guanti per la verdura.', 'সবজির জন্য গ্লাভস পরতে মনে রেখো।', 'Remember to wear gloves for the vegetables.'),
  ex('ec-sup-04', 'supermarket', 'Vorrei tre etti di formaggio.', 'ভোর-রেই ত্রে এৎ-তি দি ফোর-মাজ-জো', 'vohr-REH-ee treh EHT-tee dee for-MAHJ-joh', 'আমি ৩০০ গ্রাম (৩ এত্তি) পনির চাই।', 'I would like 300 grams of cheese.', 'Un etto equivale a cento grammi.', 'এক এত্তো মানে একশো গ্রাম।', 'One "etto" equals one hundred grams.'),
  ex('ec-sup-05', 'supermarket', 'Avete questo prodotto in offerta?', 'আ-ভে-তে কুয়েস-তো প্রো-দোৎ-তো', 'ah-VEH-teh KWEHS-toh proh-DOHT-toh', 'আপনাদের কাছে এই পণ্যটি ডিসকাউন্টে আছে?', 'Is this product on sale?', 'L’olio d’oliva oggi è in offerta.', 'আজ অলিভ অয়েলে ডিসকাউন্ট চলছে।', 'Olive oil is on sale today.'),
  ex('ec-sup-06', 'supermarket', 'Dov’è la cassa rapida?', 'দো-ভে লা কাস-সা রা-পি-দা', 'doh-VEH lah KAHS-sah RAH-pee-dah', 'এক্সপ্রেস ক্যাশ কাউন্টার কোথায়?', 'Where is the express checkout?', 'Ho solo tre articoli, uso la cassa rapida.', 'আমার কাছে মাত্র তিনটি জিনিস, আমি দ্রুত কাউন্টার ব্যবহার করব।', 'I have only three items, I will use the express checkout.'),
  ex('ec-sup-07', 'supermarket', 'Posso avere un carrello o un cestino?', 'পোস-সো আ-ভে-রে উন কার-রেল-লো', 'POHS-soh ah-VEH-reh oon kahr-REHL-loh', 'আমি কি একটি ট্রলি বা ঝুড়ি পেতে পারি?', 'Can I get a cart or a basket?', 'Prendo un cestino perché compro poche cose.', 'আমি অল্প কিছু কিনব তাই একটি ঝুড়ি নিচ্ছি।', 'I will take a basket since I am buying just a few things.'),
  ex('ec-sup-08', 'supermarket', 'Qual è la data di scadenza?', 'কুয়াল এ লা দা-তা দি স্কা-দেন-ৎসা', 'kwahl EH lah DAH-tah dee skah-DEHN-tsah', 'মেয়াদ উত্তীর্ণের তারিখ কবে?', 'What is the expiration date?', 'Controllo sempre la data di scadenza sul latte.', 'আমি সবসময় দুধের প্যাকেটে মেয়াদের তারিখ দেখি।', 'I always check the expiration date on the milk.'),
  ex('ec-sup-09', 'supermarket', 'Ha la tessera fedeltà?', 'আ লা তেস-সে-রা ফে-দেল-তা', 'ah lah TEHS-seh-rah feh-dehl-TAH', 'আপনার কি লয়ালটি কার্ড আছে?', 'Do you have a loyalty card?', 'No, non ho la carta fedeltà, grazie.', 'না, আমার লয়ালটি কার্ড নেই, ধন্যবাদ।', 'No, I do not have a loyalty card, thanks.'),
  ex('ec-sup-10', 'supermarket', 'Pago con il bancomat.', 'পা-গো কোন ইল বান-কো-মাত', 'PAH-goh kohn eel BAHN-koh-maht', 'আমি ডেবিট কার্ড দিয়ে পেমেন্ট করব।', 'I will pay with my debit card.', 'Accettate il pagamento contactless?', 'আপনারা কি কন্ট্যাক্টলেস পেমেন্ট নেন?', 'Do you accept contactless payment?'),
  ex('ec-sup-11', 'supermarket', 'Mi dà lo scontrino, per favore?', 'মি দা লো স্কোন-ত্রি-নো', 'mee dah loh skohn-TREE-noh', 'আমাকে রসিদটি দেবেন, দয়া করে?', 'Can you give me the receipt, please?', 'Tengo sempre lo scontrino dopo la spesa.', 'কেনাকাটার পর আমি সবসময় রসিদ রাখি।', 'I always keep the receipt after shopping.'),

  // 3. Shopping & prices (11)
  ex('ec-shp-01', 'shopping', 'Quanto costa questo?', 'কুয়ান-তো কোস-তা কুয়েস-তো', 'KWAHN-toh KOHS-tah KWEHS-toh', 'এটির দাম কত?', 'How much does this cost?', 'Scusi, quanto costa questa giacca blu?', 'মাফ করবেন, এই নীল জ্যাকেটটির দাম কত?', 'Excuse me, how much does this blue jacket cost?'),
  ex('ec-shp-02', 'shopping', 'Quanto costano in totale?', 'কুয়ান-তো কোস-তা-নো ইন তো-তা-লে', 'KWAHN-toh KOHS-tah-noh een toh-TAH-leh', 'মোট দাম কত হলো?', 'How much do they cost in total?', 'Due magliette costano trenta euro in totale.', 'দুটো টি-শার্টের মোট দাম ত্রিশ ইউরো।', 'Two t-shirts cost thirty euros in total.'),
  ex('ec-shp-03', 'shopping', 'Posso provarlo / provarla?', 'পোস-সো প্রো-ভার-লো', 'POHS-soh proh-VAHR-loh', 'আমি কি এটি পরে দেখতে পারি?', 'Can I try it on?', 'Dov’è il camerino? Vorrei provarla.', 'চেঞ্জিং রুম কোথায়? আমি এটি পরে দেখতে চাই।', 'Where is the fitting room? I would like to try it on.'),
  ex('ec-shp-04', 'shopping', 'Che taglia porta?', 'কে তাল-ইয়া পোর-তা', 'keh TAH-lyah POHR-tah', 'আপনি কোন সাইজ পরেন?', 'What size do you wear?', 'Porto la taglia media o il quarantadue.', 'আমি মিডিয়াম বা ৪২ সাইজ পরি।', 'I wear medium or size 42.'),
  ex('ec-shp-05', 'shopping', 'Avete una taglia più grande / più piccola?', 'আ-ভে-তে উ-না তাল-ইয়া পিউ গ্রান-দে', 'ah-VEH-teh OO-nah TAH-lyah pyoo GRAHN-deh', 'আপনাদের কাছে এর চেয়ে বড় বা ছোট সাইজ আছে?', 'Do you have a bigger / smaller size?', 'Questa è stretta, avete una taglia più grande?', 'এটি টাইট, এর চেয়ে বড় সাইজ কি আছে?', 'This one is tight, do you have a larger size?'),
  ex('ec-shp-06', 'shopping', 'Lo avete in un altro colore?', 'লো আ-ভে-তে ইন উন আল-ত্রো কো-লো-রে', 'loh ah-VEH-teh een oon AHL-troh koh-LOH-reh', 'এটি কি অন্য কোনো রঙে আছে?', 'Do you have it in another color?', 'Mi piace molto, lo avete in nero?', 'আমার খুব পছন্দ হয়েছে, কালো রঙে কি আছে?', 'I like it a lot, do you have it in black?'),
  ex('ec-shp-07', 'shopping', 'Do solo un’occhiata, grazie.', 'দো সো-লো উন ওক-কিয়া-তা', 'doh SOH-loh oon ohk-KYAH-tah', 'আমি শুধু ঘুরে দেখছি, ধন্যবাদ।', 'I am just looking, thank you.', 'Se ha bisogno, mi chiami. — Do solo un’occhiata!', 'দরকার হলে ডাকবেন। — আমি শুধু দেখছি!', 'Call me if you need anything. — I am just browsing!'),
  ex('ec-shp-08', 'shopping', 'È troppo caro per me.', 'এ ত্রোপ-পো কা-রো পের মে', 'eh TROHP-poh KAH-roh pehr meh', 'এটি আমার জন্য বেশি দামি।', 'It is too expensive for me.', 'Questo cappotto è bello ma è troppo caro.', 'এই কোটটি সুন্দর কিন্তু খুব দামি।', 'This coat is nice, but it is too expensive.'),
  ex('ec-shp-09', 'shopping', 'C’è uno sconto o sono in saldo?', 'চে উ-নো স্কোন-তো', 'cheh OO-noh SKOHN-toh', 'এখানে কি কোনো ডিসকাউন্ট বা সেল চলছে?', 'Is there a discount or sale?', 'A gennaio molti negozi fanno i saldi.', 'জানুয়ারি মাসে অনেক দোকানে সেল চলে।', 'In January many stores hold sales.'),
  ex('ec-shp-10', 'shopping', 'Posso cambiare questo articolo?', 'পোস-সো কাম-বিয়া-রে কুয়েস-তো', 'POHS-soh kahm-BYAH-reh KWEHS-toh', 'আমি কি এই জিনিসটি বদলাতে পারি?', 'Can I exchange this item?', 'Se la taglia è sbagliata, posso cambiarlo entro sette giorni?', 'সাইজ ভুল হলে আমি কি সাত দিনের মধ্যে বদলাতে পারব?', 'If the size is wrong, can I exchange it within seven days?'),
  ex('ec-shp-11', 'shopping', 'Posso pagare in contanti o con carta?', 'পোস-সো পা-গা-রে ইন কোন-তান-তি', 'POHS-soh pah-GAH-reh een kohn-TAHN-tee', 'আমি কি নগদ টাকায় না কার্ডে দেব?', 'Can I pay in cash or by card?', 'Preferisco pagare con la carta.', 'আমি কার্ড দিয়ে পেমেন্ট করতে পছন্দ করি।', 'I prefer to pay by card.'),

  // 4. Asking directions (11)
  ex('ec-dir-01', 'directions', 'Scusi, mi sono perso / persa.', 'স্কু-জি মি সো-নো পের-সো', 'SKOO-zee mee SOH-noh PEHR-soh', 'মাফ করবেন, আমি রাস্তা হারিয়ে ফেলেছি।', 'Excuse me, I am lost.', 'Mi scusi, mi sono perso e cerco il centro.', 'মাফ করবেন, আমি পথ হারিয়েছি এবং শহরের কেন্দ্র খুঁজছি।', 'Excuse me, I got lost and am looking for the city center.'),
  ex('ec-dir-02', 'directions', 'Dov’è la stazione centrale?', 'দো-ভে লা স্তা-ৎসি-ও-নে', 'doh-VEH lah stah-TSYOH-neh', 'সেন্ট্রাল স্টেশন কোথায়?', 'Where is the central station?', 'Scusi, sa dov’è la fermata più vicina?', 'মাফ করবেন, সবচেয়ে কাছের স্টপ কোথায় জানেন?', 'Excuse me, do you know where the nearest stop is?'),
  ex('ec-dir-03', 'directions', 'Vada sempre dritto.', 'ভা-দা সেম-প্রে দ্রিত-তো', 'VAH-dah SEHM-preh DREET-toh', 'একদম সোজা যান।', 'Go straight ahead.', 'Vada sempre dritto per cento metri.', 'একশো মিটার সোজা এগিয়ে যান।', 'Go straight ahead for a hundred meters.'),
  ex('ec-dir-04', 'directions', 'Giri a destra al semaforo.', 'জি-রি আ দেস-ত্রা', 'JEE-ree ah DEHS-trah', 'ট্রাফিক সিগন্যালে ডানে ঘুরুন।', 'Turn right at the traffic light.', 'Dopo la piazza giri a destra.', 'চত্বরের পর ডান দিকে ঘুরুন।', 'After the square turn right.'),
  ex('ec-dir-05', 'directions', 'Giri a sinistra all’angolo.', 'জি-রি আ সি-নিস-ত্রা', 'JEE-ree ah see-NEES-trah', 'মোড়ে বামে ঘুরুন।', 'Turn left at the corner.', 'La farmacia è subito dopo l’angolo a sinistra.', 'মোড়ের ঠিক পরই বাম দিকে ফার্মেসি।', 'The pharmacy is right around the corner on the left.'),
  ex('ec-dir-06', 'directions', 'È vicino o lontano a piedi?', 'এ ভি-চি-নো ও লোন-তা-নো', 'eh vee-CHEE-noh oh lohn-TAH-noh', 'হেঁটে গেলে কি কাছে নাকি দূরে?', 'Is it near or far on foot?', 'No, è vicinissimo: cinque minuti a piedi!', 'না, একদম কাছেই: হেঁটে পাঁচ মিনিট!', 'No, it is very close: five minutes on foot!'),
  ex('ec-dir-07', 'directions', 'Attraversi la strada sulle strisce.', 'আত-ত্রা-ভের-সি লা স্ত্রা-দা', 'aht-trah-VEHR-see lah STRAH-dah', 'জেব্রা ক্রসিং দিয়ে রাস্তা পার হোন।', 'Cross the street at the crosswalk.', 'Attraversi la piazza e trova il museo davanti a sé.', 'চত্বর পার হলেই সামনে জাদুঘরটি পাবেন।', 'Cross the square and you will find the museum ahead.'),
  ex('ec-dir-08', 'directions', 'È di fronte alla banca.', 'এ দি ফ্রোন-তে আল-লা বান-কা', 'eh dee FROHN-teh AHL-lah BAHN-kah', 'এটি ব্যাংকের ঠিক বিপরীতে।', 'It is across from the bank.', 'La posta è proprio di fronte alla banca.', 'পোস্ট অফিসটি ঠিক ব্যাংকের বিপরীতে।', 'The post office is right opposite the bank.'),
  ex('ec-dir-09', 'directions', 'È accanto al supermercato.', 'এ আক-কান-তো আল সু-পের-মের-কা-তো', 'eh ahk-KAHN-toh ahl soo-pehr-mehr-KAH-toh', 'এটি সুপারমার্কেটের পাশে।', 'It is next to the supermarket.', 'Il bar è accanto alla farmacia.', 'ক্যাফেটি ফার্মেসির পাশেই।', 'The café is next to the pharmacy.'),
  ex('ec-dir-10', 'directions', 'Come arrivo in Piazza Duomo?', 'কো-মে আর-রি-ভো ইন পিয়াত-সা দু-ও-মো', 'KOH-meh ahr-REE-voh een PYAHT-sah DWOH-moh', 'পিয়াতসা দুওমোতে কীভাবে যাব?', 'How do I get to Piazza Duomo?', 'Come arrivo al centro con l’autobus?', 'বাসে করে কীভাবে শহরের কেন্দ্রে যাব?', 'How do I get to the center by bus?'),
  ex('ec-dir-11', 'directions', 'Può indicarlo sulla mappa?', 'পু-ও ইন-দি-কার-লো সু-ল-লা মাপ-পা', 'pwoh een-dee-KAHR-loh SOOL-lah MAHP-pah', 'ম্যাপে একটু দেখিয়ে দিতে পারেন?', 'Can you point it out on the map?', 'Scusi, può mostrarmi la strada sulla mappa?', 'মাফ করবেন, ম্যাপে রাস্তাটা দেখিয়ে দেবেন?', 'Excuse me, can you show me the street on the map?'),

  // 5. Public transportation (11)
  ex('ec-trn-01', 'transport', 'Dove compro i biglietti dell’autobus?', 'দো-ভে কোম-প্রো ই বিল-ইয়েৎ-তি', 'DOH-veh KOHM-proh ee bee-LYEHT-tee', 'বাসের টিকিট কোথায় কিনব?', 'Where do I buy bus tickets?', 'Può comprare il biglietto in tabaccheria.', 'আপনি তাবাক্কেরিয়াতে টিকিট কিনতে পারেন।', 'You can buy the ticket at a tobacco shop.'),
  ex('ec-trn-02', 'transport', 'Bisogna convalidare il biglietto.', 'বি-জোন-ইয়া কোন-ভা-লি-দা-রে', 'bee-ZOH-nyah kohn-vah-lee-DAH-reh', 'টিকিটটি মেশিনে পাঞ্চ (বৈধ) করতে হবে।', 'You must validate the ticket.', 'Convalidi il biglietto appena sale sul tram.', 'ট্রামে ওঠার সাথে সাথে টিকিটটি ভ্যালিডেট করুন।', 'Validate the ticket as soon as you board the tram.'),
  ex('ec-trn-03', 'transport', 'Quale autobus va in centro?', 'কুয়া-লে আ-উ-তো-বুস ভা ইন চেন-ত্রো', 'KWAH-leh OW-toh-boos vah een CHEHN-troh', 'কোন বাস শহরের কেন্দ্রে যায়?', 'Which bus goes to the city center?', 'Scusi, l’autobus numero dodici va in centro?', 'মাফ করবেন, ১২ নম্বর বাস কি কেন্দ্রে যায়?', 'Excuse me, does bus number 12 go to the center?'),
  ex('ec-trn-04', 'transport', 'Devo scendere alla prossima fermata.', 'দে-ভো শেন-দে-রে আল-লা প্রোস-সি-মা', 'DEH-voh SHEHN-deh-reh AHL-lah PROHS-see-mah', 'আমাকে পরের স্টপে নামতে হবে।', 'I need to get off at the next stop.', 'Scusi, devo scendere alla prossima fermata!', 'মাফ করবেন, আমাকে পরের স্টপে নামতে হবে!', 'Excuse me, I need to get off at the next stop!'),
  ex('ec-trn-05', 'transport', 'Quante fermate mancano?', 'কুয়ান-তে ফের-মা-তে মান-কা-নো', 'KWAHN-teh fehr-MAH-teh MAHN-kah-noh', 'আর কয়টি স্টপ বাকি আছে?', 'How many stops are left?', 'Mancano ancora tre fermate per arrivare.', 'পৌঁছাতে এখনো তিনটি স্টপ বাকি আছে।', 'There are still three stops to go.'),
  ex('ec-trn-06', 'transport', 'Dov’è la stazione della metropolitana?', 'দো-ভে লা স্তা-ৎসি-ও-নে দেল-লা মে-ত্রো', 'doh-VEH lah meh-troh-poh-lee-TAH-nah', 'মেট্রো স্টেশন কোথায়?', 'Where is the metro station?', 'Prendo la linea rossa della metropolitana.', 'আমি মেট্রোর লাল লাইন নিচ্ছি।', 'I take the red line of the metro.'),
  ex('ec-trn-07', 'transport', 'Ogni quanto passa il tram?', 'অন-ইয়ে কুয়ান-তো পাস-সা ইল ত্রাম', 'OH-nyeh KWAHN-toh PAHS-sah eel trahm', 'কত মিনিট পর পর ট্রাম আসে?', 'How often does the tram pass?', 'Il tram passa ogni dieci minuti.', 'প্রতি দশ মিনিট পর পর ট্রাম আসে।', 'The tram comes every ten minutes.'),
  ex('ec-trn-08', 'transport', 'Quanto dura il biglietto?', 'কুয়ান-তো দু-রা ইল বিল-ইয়েৎ-তো', 'KWAHN-toh DOO-rah eel bee-LYEHT-toh', 'টিকিটের মেয়াদ কতক্ষণ থাকে?', 'How long is the ticket valid?', 'Il biglietto urbano vale novanta minuti.', 'শহরের টিকিট নব্বই মিনিট কার্যকর থাকে।', 'The city ticket is valid for ninety minutes.'),
  ex('ec-trn-09', 'transport', 'Vorrei un abbonamento mensile.', 'ভোর-রেই উন আব-বো-না-মেন-তো', 'vohr-REH-ee oon ahb-boh-nah-MEHN-toh', 'আমি একটি মাসিক পাস নিতে চাই।', 'I would like a monthly pass.', 'Con l’abbonamento spendo meno ogni mese.', 'মাসিক পাস নিলে প্রতি মাসে খরচ কম হয়।', 'With the monthly pass I spend less each month.'),
  ex('ec-trn-10', 'transport', 'Permesso, devo passare.', 'পের-মেস-সো দে-ভো পাস-সা-রে', 'pehr-MEHS-soh DEH-voh pahs-SAH-reh', 'মাফ করবেন, একটু পাশ দেবেন?', 'Excuse me, I need to get through.', 'Permesso, posso sedermi qui?', 'মাফ করবেন, আমি কি এখানে বসতে পারি?', 'Excuse me, may I sit here?'),
  ex('ec-trn-11', 'transport', 'L’autobus è in ritardo oggi.', 'লা-উ-তো-বুস এ ইন রি-তার-দো', 'LOW-toh-boos eh een ree-TAHR-doh', 'আজ বাস দেরিতে চলছে।', 'The bus is delayed today.', 'C’è molto traffico e l’autobus è in ritardo.', 'অনেক জ্যাম এবং বাস দেরি করছে।', 'There is heavy traffic and the bus is delayed.'),

  // 6. Train & bus stations (11)
  ex('ec-stn-01', 'stations', 'Un biglietto di andata per Bologna.', 'উন বিল-ইয়েৎ-তো দি আন-দা-তা', 'oon bee-LYEHT-toh dee ahn-DAH-tah', 'বোলোনিয়ার জন্য একটি ওয়ান-ওয়ে টিকিট।', 'A one-way ticket to Bologna.', 'Vorrei un biglietto di sola andata in seconda classe.', 'আমি সেকেন্ড ক্লাসে একটি ওয়ান-ওয়ে টিকিট চাই।', 'I would like a second-class one-way ticket.'),
  ex('ec-stn-02', 'stations', 'Andata e ritorno, per favore.', 'আন-দা-তা এ রি-তোর-নো', 'ahn-DAH-tah eh ree-TOHR-noh', 'যাওয়া-আসা (রিটার্ন) টিকিট, দয়া করে।', 'Round trip (return ticket), please.', 'Un biglietto di andata e ritorno per Venezia.', 'ভেনিসের জন্য একটি রিটার্ন টিকিট দিন।', 'A round-trip ticket to Venice.'),
  ex('ec-stn-03', 'stations', 'Da quale binario parte il treno?', 'দা কুয়া-লে বি-না-রিও পার-তে', 'dah KWAH-leh bee-NAH-ryoh PAHR-teh', 'ট্রেনটি কত নম্বর প্ল্যাটফর্ম থেকে ছাড়বে?', 'From which platform does the train depart?', 'Il treno per Milano parte dal binario cinque.', 'মিলানের ট্রেন ৫ নম্বর প্ল্যাটফর্ম থেকে ছাড়ে।', 'The train to Milan leaves from platform five.'),
  ex('ec-stn-04', 'stations', 'È un treno diretto o devo cambiare?', 'এ উন ত্রে-নো দি-রেৎ-তো', 'eh oon TREH-noh dee-REHT-toh', 'এটি কি সরাসরি ট্রেন নাকি বদলাতে হবে?', 'Is it a direct train or do I have to change?', 'Devo cambiare treno a Firenze.', 'আমাকে ফ্লোরেন্সে ট্রেন বদলাতে হবে।', 'I have to change trains in Florence.'),
  ex('ec-stn-05', 'stations', 'Questo posto è libero?', 'কুয়েস-তো পোস-তো এ লি-বে-রো', 'KWEHS-toh POHS-toh eh LEE-beh-roh', 'এই আসনটি কি খালি?', 'Is this seat free?', 'Scusi, questo posto vicino al finestrino è libero?', 'মাফ করবেন, জানালার পাশের এই সিটটি কি খালি?', 'Excuse me, is this window seat free?'),
  ex('ec-stn-06', 'stations', 'Ho prenotato il posto in carrozza quattro.', 'ও প্রে-নো-তা-তো ইল পোস-তো', 'oh preh-noh-TAH-toh eel POHS-toh', '৪ নম্বর কোচে আমার আসন বুক করা আছে।', 'I reserved a seat in coach four.', 'La mia carrozza è all’inizio del treno.', 'আমার কোচটি ট্রেনের সামনের দিকে।', 'My coach is at the front of the train.'),
  ex('ec-stn-07', 'stations', 'Dov’è la biglietteria automatica?', 'দো-ভে লা বিল-ইয়েৎ-তে-রিয়া', 'doh-VEH lah bee-lyeht-teh-REE-ah', 'স্বয়ংক্রিয় টিকিট মেশিন কোথায়?', 'Where is the ticket vending machine?', 'Compro il biglietto alla macchinetta.', 'আমি টিকিট মেশিন থেকে টিকিট কিনছি।', 'I am buying the ticket from the machine.'),
  ex('ec-stn-08', 'stations', 'Dov’è il deposito bagagli?', 'দো-ভে ইল দে-পো-জি-তো বা-গাল-ই', 'doh-VEH eel deh-POH-zee-toh bah-GAH-lyee', 'লাগেজ রাখার জায়গা কোথায়?', 'Where is the luggage storage?', 'Lascio la valigia al deposito bagagli per due ore.', 'আমি দুই ঘণ্টার জন্য লাগেজ স্টোরেজে সুটকেস রাখছি।', 'I am leaving the suitcase at luggage storage for two hours.'),
  ex('ec-stn-09', 'stations', 'Ho perso il treno!', 'ও পের-সো ইল ত্রে-নো', 'oh PEHR-soh eel TREH-noh', 'আমি ট্রেনটি মিস করেছি!', 'I missed the train!', 'Ho perso il treno, quando c’è il prossimo?', 'আমি ট্রেন মিস করেছি, পরেরটা কখন?', 'I missed the train, when is the next one?'),
  ex('ec-stn-10', 'stations', 'Quanto dura il viaggio?', 'কুয়ান-তো দু-রা ইল ভিয়াজ-জো', 'KWAHN-toh DOO-rah eel VYAHJ-joh', 'ভ্রমণে কত সময় লাগে?', 'How long does the journey take?', 'Da Roma a Napoli il viaggio dura un’ora e dieci.', 'রোম থেকে নেপলস যেতে এক ঘণ্টা দশ মিনিট লাগে।', 'From Rome to Naples the trip takes an hour and ten.'),
  ex('ec-stn-11', 'stations', 'Il treno ha venti minuti di ritardo.', 'ইল ত্রে-নো আ ভেন-তি মি-নু-তি', 'eel TREH-noh ah VEHN-tee mee-NOO-tee', 'ট্রেনটি বিশ মিনিট দেরি করছে।', 'The train is twenty minutes delayed.', 'Guardo il tabellone delle partenze.', 'আমি ডিপার্চার বোর্ড দেখছি।', 'I am checking the departure board.'),

  // 7. Hotel & accommodation (11)
  ex('ec-hot-01', 'hotel', 'Ho una prenotazione a nome...', 'ও উ-না প্রে-নো-তা-ৎসি-ও-নে', 'oh OO-nah preh-noh-tah-TSYOH-neh', 'আমার ... নামে একটি বুকিং আছে।', 'I have a reservation under the name...', 'Buonasera, ho una prenotazione a nome Hasan.', 'শুভ সন্ধ্যা, হাসান নামে আমার একটি বুকিং আছে।', 'Good evening, I have a reservation under Hasan.'),
  ex('ec-hot-02', 'hotel', 'Vorrei una camera singola / doppia.', 'ভোর-রেই উ-না কা-মে-রা', 'vohr-REH-ee OO-nah KAH-meh-rah', 'আমি একটি সিঙ্গেল / ডাবল রুম চাই।', 'I would like a single / double room.', 'Avete una camera doppia con bagno privato?', 'ব্যক্তিগত বাথরুমসহ ডাবল রুম আছে কি?', 'Do you have a double room with private bath?'),
  ex('ec-hot-03', 'hotel', 'Ecco il mio passaporto.', 'এক-কো ইল মি-ও পাস-সা-পোর-তো', 'EHK-koh eel MEE-oh pahs-sah-POHR-toh', 'এই নিন আমার পাসপোর্ট।', 'Here is my passport.', 'Per il check-in serve un documento d’identità.', 'চেক-ইনের জন্য পরিচয়পত্র বা পাসপোর্ট দরকার।', 'An ID document is needed for check-in.'),
  ex('ec-hot-04', 'hotel', 'La colazione è inclusa nel prezzo?', 'লা কো-লা-ৎসি-ও-নে এ ইন-ক্লু-জা', 'lah koh-lah-TSYOH-neh eh een-KLOO-zah', 'নাশতা কি ভাড়ার মধ্যে অন্তর্ভুক্ত?', 'Is breakfast included in the price?', 'Sì, serviamo la colazione dalle sette alle dieci.', 'হ্যাঁ, ৭টা থেকে ১০টা পর্যন্ত নাশতা দেওয়া হয়।', 'Yes, breakfast is served from 7:00 to 10:00.'),
  ex('ec-hot-05', 'hotel', 'Qual è la password del Wi-Fi?', 'কুয়াল এ লা পাস-ওয়ার্ড দেল ওয়াই-ফাই', 'kwahl eh lah PAHS-word dehl wy-fy', 'ওয়াই-ফাই পাসওয়ার্ড কী?', 'What is the Wi-Fi password?', 'La password del Wi-Fi è scritta sulla tessera.', 'ওয়াই-ফাই পাসওয়ার্ডটি রুম কার্ডে লেখা আছে।', 'The Wi-Fi password is written on the key card.'),
  ex('ec-hot-06', 'hotel', 'Ecco la chiave della camera.', 'এক-কো লা কিয়া-ভে দেল-লা কা-মে-রা', 'EHK-koh lah KYAH-veh DEHL-lah KAH-meh-rah', 'এই নিন রুমের চাবি।', 'Here is the room key.', 'La sua camera è al secondo piano, numero duecentoquattro.', 'আপনার রুম দ্বিতীয় তলায়, ২৪ নম্বর।', 'Your room is on the second floor, number 204.'),
  ex('ec-hot-07', 'hotel', 'L’ascensore è in fondo al corridoio.', 'লা-শেন-সো-রে এ ইন ফোন-দো', 'lah-shehn-SOH-reh eh een FOHN-doh', 'লিফট করিডোরের শেষ প্রান্তে।', 'The elevator is at the end of the hall.', 'Prendo l’ascensore perché ho due valigie.', 'আমার দুটো সুটকেস আছে তাই আমি লিফট ব্যবহার করছি।', 'I am taking the elevator because I have two suitcases.'),
  ex('ec-hot-08', 'hotel', 'A che ora è il check-out?', 'আ কে ও-রা এ ইল চেক-আউট', 'ah keh OH-rah eh eel chehk-OWT', 'চেক-আউট করার সময় কখন?', 'What time is check-out?', 'Il check-out è entro le undici di mattina.', 'সকাল ১১টার মধ্যে চেক-আউট করতে হবে।', 'Check-out is by 11:00 AM.'),
  ex('ec-hot-09', 'hotel', 'Manca un asciugamano in bagno.', 'মান-কা উন আ-শু-গা-মা-নো', 'MAHN-kah oon ah-shoo-gah-MAH-noh', 'বাথরুমে একটি তোয়ালে কম আছে।', 'A towel is missing in the bathroom.', 'Scusi, può mandare degli asciugamani puliti?', 'মাফ করবেন, কিছু পরিষ্কার তোয়ালে পাঠাতে পারবেন?', 'Excuse me, can you send some clean towels?'),
  ex('ec-hot-10', 'hotel', 'Il riscaldamento non funziona bene.', 'ইল রিস-কাল-দা-মেন-তো নোন ফুন-ৎসি-ও-না', 'eel rees-kahl-dah-MEHN-toh nohn foon-TSYOH-nah', 'হিটার ঠিকমতো কাজ করছে না।', 'The heating is not working well.', 'In camera fa freddo, può controllare?', 'ঘরে বেশ ঠান্ডা, একটু দেখবেন?', 'It is cold in the room, could you check it?'),
  ex('ec-hot-11', 'hotel', 'Cerco una stanza in affitto.', 'চের-কো উ-না স্তান-ৎসা ইন আফ-ফিত-তো', 'CHEHR-koh OO-nah STAHN-tsah een ahf-FEET-toh', 'আমি একটি ভাড়া ঘর খুঁজছি।', 'I am looking for a room to rent.', 'Quanto costa l’affitto mensile con le spese?', 'খরচসহ মাসিক ভাড়া কত?', 'How much is the monthly rent including utilities?'),

  // 8. Pharmacy (11)
  ex('ec-phr-01', 'pharmacy', 'Non mi sento bene.', 'নোন মি সেন-তো বে-নে', 'nohn mee SEHN-toh BEH-neh', 'আমার শরীর ভালো লাগছে না।', 'I do not feel well.', 'Buongiorno, non mi sento tanto bene oggi.', 'শুভ সকাল, আজ আমার শরীরটা ভালো লাগছে না।', 'Good morning, I am not feeling well today.'),
  ex('ec-phr-02', 'pharmacy', 'Ho mal di testa.', 'ও মাল দি তেস-তা', 'oh mahl dee TEHS-tah', 'আমার মাথা ব্যথা করছে।', 'I have a headache.', 'Ho un forte mal di testa da stamattina.', 'সকাল থেকে আমার প্রচণ্ড মাথাব্যথা হচ্ছে।', 'I have had a strong headache since this morning.'),
  ex('ec-phr-03', 'pharmacy', 'Ho la febbre e il raffreddore.', 'ও লা ফেব-ব্রে এ ইল রাফ-ফ্রেদ-দো-রে', 'oh lah FEHB-breh eh eel rahf-frehd-DOH-reh', 'আমার জ্বর ও সর্দি হয়েছে।', 'I have a fever and a cold.', 'Ha qualcosa per la febbre?', 'জ্বরের জন্য আপনার কাছে কোনো ওষুধ আছে?', 'Do you have something for a fever?'),
  ex('ec-phr-04', 'pharmacy', 'Ho mal di gola e tosse.', 'ও মাল দি গো-লা এ তোস-সে', 'oh mahl dee GOH-lah eh TOHS-seh', 'আমার গলাব্যথা ও কাশি হচ্ছে।', 'I have a sore throat and a cough.', 'Vorrei delle pastiglie per il mal di gola.', 'আমি গলাব্যথার লজেন্স চাই।', 'I would like some throat lozenges.'),
  ex('ec-phr-05', 'pharmacy', 'Ho mal di stomaco.', 'ও মাল দি স্তো-মা-কো', 'oh mahl dee STOH-mah-koh', 'আমার পেটে ব্যথা করছে।', 'I have a stomachache.', 'Che cosa mi consiglia per il mal di stomaco?', 'পেট ব্যথার জন্য আপনি কী পরামর্শ দেবেন?', 'What do you recommend for a stomachache?'),
  ex('ec-phr-06', 'pharmacy', 'Serve la ricetta medica?', 'সের-ভে লা রি-চেৎ-তা মে-দি-কা', 'SEHR-veh lah ree-CHEHT-tah MEH-dee-kah', 'এর জন্য কি ডাক্তারের প্রেসক্রিপশন লাগবে?', 'Does this require a doctor prescription?', 'Per questo antibiotico serve la ricetta medica.', 'এই অ্যান্টিবায়োটিকের জন্য প্রেসক্রিপশন দরকার।', 'A prescription is needed for this antibiotic.'),
  ex('ec-phr-07', 'pharmacy', 'Quante volte al giorno devo prenderlo?', 'কুয়ান-তে ভোল-তে আল জোর-নো', 'KWAHN-teh VOHL-teh ahl JOR-noh', 'দিনে কতবার এটি খেতে হবে?', 'How many times a day should I take it?', 'Prenda una compressa dopo i pasti.', 'খাবারের পর একটি করে ট্যাবলেট খাবেন।', 'Take one tablet after meals.'),
  ex('ec-phr-08', 'pharmacy', 'Prima o dopo mangiato?', 'প্রি-মা ও দো-পো মান-জা-তো', 'PREE-mah oh DOH-poh mahn-JAH-toh', 'খাবারের আগে না পরে?', 'Before or after eating?', 'Questa medicina si prende dopo mangiato.', 'এই ওষুধটি খাওয়ার পরে খেতে হয়।', 'This medicine is taken after eating.'),
  ex('ec-phr-09', 'pharmacy', 'Sono allergico / allergica a...', 'সো-নো আল-লের-জি-কো', 'SOH-noh ahl-LEHR-jee-koh', 'আমার ... তে অ্যালার্জি আছে।', 'I am allergic to...', 'Non sono allergico ai farmaci.', 'ওষুধে আমার কোনো অ্যালার্জি নেই।', 'I am not allergic to medicines.'),
  ex('ec-phr-10', 'pharmacy', 'Avete dei cerotti e un termometro?', 'আ-ভে-তে দেই চে-রোৎ-তি', 'ah-VEH-teh deh-ee cheh-ROHT-tee', 'আপনাদের কাছে ব্যান্ডেজ ও থার্মোমিটার আছে?', 'Do you have band-aids and a thermometer?', 'Mi dà una scatola di cerotti, per favore?', 'দয়া করে এক বাক্স ব্যান্ডেজ দেবেন?', 'Can you give me a box of band-aids, please?'),
  ex('ec-phr-11', 'pharmacy', 'Qual è la farmacia di turno?', 'কুয়াল এ লা ফার-মা-চিয়া দি তুর-নো', 'kwahl eh lah fahr-mah-CHEE-ah dee TOOR-noh', 'আজকের ডিউটি (২৪ ঘণ্টা/রাতের) ফার্মেসি কোনটি?', 'Which pharmacy is on night/weekend duty?', 'Di notte vado alla farmacia di turno.', 'রাতে আমি ডিউটি ফার্মেসিতে যাই।', 'At night I go to the on-duty pharmacy.'),

  // 9. Doctor appointment basic (11)
  ex('ec-doc-01', 'doctor', 'Vorrei fissare una visita medica.', 'ভোর-রেই ফিস-সা-রে উ-না ভি-জি-তা', 'vohr-REH-ee fees-SAH-reh OO-nah VEE-zee-tah', 'আমি একটি ডাক্তার দেখানোর সময় নিতে চাই।', 'I would like to schedule a medical visit.', 'Buongiorno, vorrei prendere un appuntamento con il dottore.', 'শুভ সকাল, ডাক্তারের সাথে একটি অ্যাপয়েন্টমেন্ট চাই।', 'Good morning, I would like an appointment with the doctor.'),
  ex('ec-doc-02', 'doctor', 'Ecco la mia tessera sanitaria.', 'এক-কো লা মিয়া তেস-সে-রা সা-নি-তা-রিয়া', 'EHK-koh lah MEE-ah TEHS-seh-rah sah-nee-TAH-ryah', 'এই নিন আমার হেলথ কার্ড।', 'Here is my Italian health card.', 'Ho portato la tessera sanitaria e il documento.', 'আমি আমার হেলথ কার্ড ও পরিচয়পত্র এনেছি।', 'I brought my health card and ID document.'),
  ex('ec-doc-03', 'doctor', 'Ho dolore qui.', 'ও দো-লো-রে কুই', 'oh doh-LOH-reh kwee', 'আমার এখানে ব্যথা করছে।', 'It hurts here.', 'Mi fa male qui alla schiena da due giorni.', 'দুই দিন ধরে আমার পিঠের এখানে ব্যথা করছে।', 'My back hurts right here for two days.'),
  ex('ec-doc-04', 'doctor', 'Mi fa male il dente / l’orecchio.', 'মি ফা মা-লে ইল দেন-তে', 'mee fah MAH-leh eel DEHN-teh', 'আমার দাঁত / কান ব্যথা করছে।', 'My tooth / ear hurts.', 'Devo andare dal dentista perché mi fa male un dente.', 'আমার একটি দাঁত ব্যথা করছে তাই ডেন্টিস্টের কাছে যেতে হবে।', 'I have to go to the dentist because my tooth hurts.'),
  ex('ec-doc-05', 'doctor', 'Sono molto stanco e ho freddo.', 'সো-নো মোল-তো স্তান-কো', 'SOH-noh MOHL-toh STAHN-koh', 'আমি খুব ক্লান্ত এবং আমার শীত লাগছে।', 'I am very tired and feel cold.', 'Da ieri sono stanco e non ho appetito.', 'গতকাল থেকে আমি ক্লান্ত এবং ক্ষুধা নেই।', 'Since yesterday I have been tired with no appetite.'),
  ex('ec-doc-06', 'doctor', 'Da quanto tempo ha questo sintomo?', 'দা কুয়ান-তো তেম-পো আ কুয়েস-তো', 'dah KWAHN-toh TEHM-poh ah KWEHS-toh', 'কতদিন ধরে আপনার এই লক্ষণ?', 'How long have you had this symptom?', 'Ho questo dolore da lunedì.', 'সোমবার থেকে আমার এই ব্যথা আছে।', 'I have had this pain since Monday.'),
  ex('ec-doc-07', 'doctor', 'Prendo già una medicina?', 'প্রেন-দো জা উ-না মে-দি-চি-না', 'PREHN-doh jah OO-nah meh-dee-CHEE-nah', 'আমি ইতিমধ্যে একটি ওষুধ খাচ্ছি কি না?', 'Are you already taking a medicine?', 'Non prendo nessuna medicina al momento.', 'এই মুহূর্তে আমি কোনো ওষুধ খাচ্ছি না।', 'I am not taking any medicine at the moment.'),
  ex('ec-doc-08', 'doctor', 'Devo fare le analisi del sangue.', 'দে-ভো ফা-রে লে আ-না-লি-জি', 'DEH-voh FAH-reh leh ah-NAH-lee-zee', 'আমাকে রক্ত পরীক্ষা করাতে হবে।', 'I need to do blood tests.', 'Il medico ha prescritto le analisi.', 'ডাক্তার পরীক্ষা লিখে দিয়েছেন।', 'The doctor prescribed the lab tests.'),
  ex('ec-doc-09', 'doctor', 'Mi serve un certificato medico.', 'মি সের-ভে উন চের-তি-ফি-কা-তো', 'mee SEHR-veh oon chehr-tee-fee-KAH-toh', 'আমার একটি মেডিকেল সার্টিফিকেট লাগবে।', 'I need a medical certificate.', 'Mi serve il certificato medico per la palestra.', 'জিমের জন্য আমার একটি মেডিকেল সার্টিফিকেট দরকার।', 'I need a medical certificate for the gym.'),
  ex('ec-doc-10', 'doctor', 'La sala d’attesa è al primo piano.', 'লা সা-লা দাত-তে-জা এ আল প্রি-মো', 'lah SAH-lah daht-TEH-zah eh ahl PREE-moh', 'অপেক্ষার ঘর দ্বিতীয় তলায় (ইউরোপীয় প্রথম)।', 'The waiting room is on the first floor.', 'Si accomodi in sala d’attesa, la chiamiamo subito.', 'অপেক্ষার ঘরে বসুন, আমরা এখনই ডাকব।', 'Have a seat in the waiting room, we will call you shortly.'),
  ex('ec-doc-11', 'doctor', 'Riposi per due giorni e beva molta acqua.', 'রি-পো-জি পের দু-এ জোর-নি', 'ree-POH-zee pehr DOO-eh JOR-nee', 'দুই দিন বিশ্রাম নিন এবং প্রচুর পানি পান করুন।', 'Rest for two days and drink lots of water.', 'Grazie dottore, seguirò le sue indicazioni.', 'ধন্যবাদ ডাক্তার, আমি আপনার নির্দেশনা মেনে চলব।', 'Thank you doctor, I will follow your instructions.'),

  // 10. University & classroom (11)
  ex('ec-uni-01', 'university', 'Dov’è l’aula magna?', 'দো-ভে লা-উ-লা মান-ইয়া', 'doh-VEH LOW-lah MAH-nyah', 'প্রধান লেকচার হল কোথায়?', 'Where is the main lecture hall?', 'La lezione è nell’aula tre al secondo piano.', 'ক্লাসটি দোতলায় তিন নম্বর রুমে।', 'The class is in room three on the second floor.'),
  ex('ec-uni-02', 'university', 'Può ripetere, per favore?', 'পু-ও রি-পে-তে-রে', 'pwoh ree-PEH-teh-reh', 'দয়া করে আবার বলবেন?', 'Could you repeat that, please?', 'Scusi professore, può ripetere l’ultima frase?', 'মাফ করবেন প্রফেসর, শেষ বাক্যটি কি আবার বলবেন?', 'Excuse me professor, could you repeat the last sentence?'),
  ex('ec-uni-03', 'university', 'Può parlare più lentamente?', 'পু-ও পার-লা-রে পিউ লেন-তা-মেন-তে', 'pwoh pahr-LAH-reh pyoo lehn-tah-MEHN-teh', 'একটু ধীরে কথা বলবেন, দয়া করে?', 'Could you speak more slowly?', 'Sto imparando l’italiano, parli più piano per favore.', 'আমি ইতালিয়ান শিখছি, দয়া করে একটু ধীরে বলুন।', 'I am learning Italian, please speak more slowly.'),
  ex('ec-uni-04', 'university', 'Che cosa significa questa parola?', 'কে কো-জা সিন-ই-ফি-কা', 'keh KOH-zah see-NYEE-fee-kah', 'এই শব্দটির অর্থ কী?', 'What does this word mean?', 'Non capisco, cosa significa “scadenza”?', 'আমি বুঝছি না, “scadenza” শব্দের অর্থ কী?', 'I do not understand, what does "scadenza" mean?'),
  ex('ec-uni-05', 'university', 'Come si scrive in italiano?', 'কো-মে সি স্ক্রি-ভে ইন ই-তা-লিয়া-নো', 'KOH-meh see SKREE-veh een ee-tah-LYAH-noh', 'ইতালিয়ানে এটি কীভাবে বানান করে?', 'How do you spell/write it in Italian?', 'Come si scrive il suo cognome?', 'আপনার শেষ নাম কীভাবে বানান হয়?', 'How is your surname spelled?'),
  ex('ec-uni-06', 'university', 'Dov’è la segreteria studenti?', 'দো-ভে লা সে-গ্রে-তে-রিয়া', 'doh-VEH lah seh-greh-teh-REE-ah', 'স্টুডেন্ট অ্যাডমিন অফিস কোথায়?', 'Where is the student administration office?', 'Devo consegnare un documento in segreteria.', 'আমাকে স্টুডেন্ট অফিসে একটি ডকুমেন্ট জমা দিতে হবে।', 'I need to submit a document at the student office.'),
  ex('ec-uni-07', 'university', 'Studio all’università e frequento i corsi.', 'স্তু-দিও আল-লু-নি-ভের-সি-তা', 'STOO-dyoh ahl-loo-nee-vehr-see-TAH', 'আমি বিশ্ববিদ্যালয়ে পড়ি ও ক্লাস করি।', 'I study at the university and attend classes.', 'Studio medicina da un anno.', 'আমি এক বছর ধরে মেডিসিন পড়ছি।', 'I have been studying medicine for one year.'),
  ex('ec-uni-08', 'university', 'Quando è l’appello d’esame?', 'কুয়ান-দো এ লাপ-পেল-লো দে-জা-মে', 'KWAHN-doh eh lahp-PEHL-loh deh-ZAH-meh', 'পরীক্ষার তারিখ কবে?', 'When is the exam session?', 'Mi iscrivo all’esame sul sito dell’università.', 'আমি বিশ্ববিদ্যালয়ের ওয়েবসাইটে পরীক্ষার জন্য নাম নিবন্ধন করছি।', 'I register for the exam on the university portal.'),
  ex('ec-uni-09', 'university', 'Posso fare una domanda?', 'পোস-সো ফা-রে উ-না দো-মান-দা', 'POHS-soh FAH-reh OO-nah doh-MAHN-dah', 'আমি কি একটি প্রশ্ন করতে পারি?', 'May I ask a question?', 'Scusi, ho una domanda sull’esercizio quattro.', 'মাফ করবেন, চার নম্বর অনুশীলন নিয়ে আমার একটি প্রশ্ন আছে।', 'Excuse me, I have a question about exercise four.'),
  ex('ec-uni-10', 'university', 'Abbiamo un compito per domani?', 'আব-বিয়া-মো উন কোম-পি-তো', 'ahb-BYAH-moh oon KOHM-pee-toh', 'আগামীকালের জন্য কি কোনো হোমওয়ার্ক আছে?', 'Do we have homework for tomorrow?', 'Leggete pagina dieci per la prossima lezione.', 'পরবর্তী ক্লাসের জন্য দশ নম্বর পৃষ্ঠা পড়ে আসুন।', 'Read page ten for the next class.'),
  ex('ec-uni-11', 'university', 'Ho bisogno della tessera della biblioteca.', 'ও বি-জোন-ইয়ো দেল-লা তেস-সে-রা', 'oh bee-ZOH-nyoh dehl-lah TEHS-seh-rah', 'আমার লাইব্রেরি কার্ড দরকার।', 'I need the library card.', 'Studio in biblioteca perché c’è silenzio.', 'আমি লাইব্রেরিতে পড়ি কারণ সেখানে নীরবতা আছে।', 'I study in the library because it is quiet.'),

  // 11. Workplace basic (11)
  ex('ec-wrk-01', 'workplace', 'A che ora inizia il mio turno?', 'আ কে ও-রা ই-নি-ৎসিয়া', 'ah keh OH-rah ee-NEE-tsyah', 'আমার কাজের শিফট কয়টায় শুরু হয়?', 'What time does my shift start?', 'Domani ho il turno di mattina dalle otto.', 'আগামীকাল সকাল ৮টা থেকে আমার সকালের শিফট।', 'Tomorrow I have the morning shift from 8:00.'),
  ex('ec-wrk-02', 'workplace', 'Quando facciamo la pausa pranzo?', 'কুয়ান-দো ফাচ-চা-মো লা পা-উ-জা', 'KWAHN-doh fahch-CHAH-moh lah POW-zah', 'আমরা কখন দুপুরের খাবারের বিরতি নেব?', 'When do we take the lunch break?', 'La pausa è dalle tredici alle quattordici.', 'বিরতি দুপুর ১টা থেকে ২টা পর্যন্ত।', 'The break is from 13:00 to 14:00.'),
  ex('ec-wrk-03', 'workplace', 'Lavoro in ufficio / in un negozio.', 'লা-ভো-রো ইন উফ-ফি-চো', 'lah-VOH-roh een oof-FEE-choh', 'আমি অফিসে / একটি দোকানে কাজ করি।', 'I work in an office / in a shop.', 'I miei colleghi sono molto gentili.', 'আমার সহকর্মীরা খুব ভদ্র ও সহায়ক।', 'My colleagues are very kind.'),
  ex('ec-wrk-04', 'workplace', 'Parlo italiano un po’, ma capisco bene.', 'পার-লো ই-তা-লিয়া-নো উন পো', 'PAHR-loh ee-tah-LYAH-noh oon poh', 'আমি একটু ইতালিয়ান বলি, কিন্তু ভালো বুঝি।', 'I speak a little Italian, and I understand well.', 'Miglioro ogni giorno al lavoro.', 'কাজে প্রতিদিন আমার উন্নতি হচ্ছে।', 'I improve every day at work.'),
  ex('ec-wrk-05', 'workplace', 'Che cosa devo fare adesso?', 'কে কো-জা দে-ভো ফা-রে আ-দেস-সো', 'keh KOH-zah DEH-voh FAH-reh ah-DEHS-soh', 'এখন আমাকে কী করতে হবে?', 'What do I need to do now?', 'Mi può spiegare come funziona questa macchina?', 'এই মেশিনটি কীভাবে কাজ করে একটু বুঝিয়ে দেবেন?', 'Could you explain how this machine works?'),
  ex('ec-wrk-06', 'workplace', 'Ho finito questo lavoro.', 'ও ফি-নি-তো কুয়েস-তো লা-ভো-রো', 'oh fee-NEE-toh KWEHS-toh lah-VOH-roh', 'আমি এই কাজটি শেষ করেছি।', 'I finished this task.', 'Ho finito, c’è altro da fare?', 'আমি শেষ করেছি, আর কিছু কি করার আছে?', 'I am done, is there anything else to do?'),
  ex('ec-wrk-07', 'workplace', 'Devo mandare un’email al responsabile.', 'দে-ভো মান-দা-রে উ-নে-মেইল', 'DEH-voh mahn-DAH-reh oo-neh-MEHL', 'আমাকে ম্যানেজারকে একটি ইমেইল পাঠাতে হবে।', 'I need to send an email to the manager.', 'Controllo la posta elettronica ogni mattina.', 'আমি প্রতিদিন সকালে ইমেইল চেক করি।', 'I check my email every morning.'),
  ex('ec-wrk-08', 'workplace', 'Domani ho un giorno di riposo.', 'দো-মা-নি ও উন জোর-নো দি রি-পো-জো', 'doh-MAH-nee oh oon JOR-noh dee ree-POH-zoh', 'আগামীকাল আমার সাপ্তাহিক ছুটির দিন।', 'Tomorrow I have a day off.', 'Il mercoledì è il mio giorno libero.', 'বুধবার আমার ছুটির দিন।', 'Wednesday is my day off.'),
  ex('ec-wrk-09', 'workplace', 'Firmare il contratto di lavoro.', 'ফির-মা-রে ইল কোন-ত্রাত-তো', 'feer-MAH-reh eel kohn-TRAHT-toh', 'কাজের চুক্তিপত্রে স্বাক্ষর করা।', 'To sign the employment contract.', 'Porto i documenti per il contratto.', 'চুক্তিপত্রের জন্য আমি কাগজপত্র নিয়ে আসছি।', 'I am bringing the documents for the contract.'),
  ex('ec-wrk-10', 'workplace', 'Scusi il ritardo, c’era traffico.', 'স্কু-জি ইল রি-তার-দো', 'SKOO-zee eel ree-TAHR-doh', 'দেরির জন্য মাফ করবেন, রাস্তায় জ্যাম ছিল।', 'Sorry for being late, there was traffic.', 'Cerco sempre di arrivare puntuale.', 'আমি সবসময় সময়মতো পৌঁছাতে চেষ্টা করি।', 'I always try to arrive on time.'),
  ex('ec-wrk-11', 'workplace', 'Buon lavoro e a domani!', 'বু-ওন লা-ভো-রো এ আ দো-মা-নি', 'bwohn lah-VOH-roh eh ah doh-MAH-nee', 'ভালো কাজ করুন, আগামীকাল দেখা হবে!', 'Have a good workday and see you tomorrow!', 'Grazie, buon lavoro anche a Lei!', 'ধন্যবাদ, আপনারও কাজের দিন ভালো কাটুক!', 'Thank you, have a good workday too!'),

  // 12. Asking for help (11)
  ex('ec-hlp-01', 'help', 'Mi può aiutare, per favore?', 'মি পু-ও আ-ইউ-তা-রে', 'mee pwoh ah-yoo-TAH-reh', 'দয়া করে আমাকে একটু সাহায্য করতে পারেন?', 'Can you help me, please?', 'Scusi signora, mi può aiutare con questa borsa?', 'মাফ করবেন ম্যাডাম, এই ব্যাগটি নিয়ে একটু সাহায্য করবেন?', 'Excuse me madam, can you help me with this bag?'),
  ex('ec-hlp-02', 'help', 'Ho bisogno di aiuto.', 'ও বি-জোন-ইয়ো দি আ-ইউ-তো', 'oh bee-ZOH-nyoh dee ah-YOO-toh', 'আমার সাহায্য দরকার।', 'I need help.', 'Ho bisogno di un’informazione, per favore.', 'আমার একটি তথ্য জানা দরকার, দয়া করে।', 'I need some information, please.'),
  ex('ec-hlp-03', 'help', 'Non capisco bene l’italiano.', 'নোন কা-পিস-কো বে-নে', 'nohn kah-PEES-koh BEH-neh', 'আমি ইতালিয়ান পুরোপুরি বুঝতে পারছি না।', 'I do not understand Italian well.', 'Può scrivere l’indirizzo su questo foglio?', 'এই কাগজে ঠিকানাটা লিখে দেবেন কি?', 'Could you write the address on this paper?'),
  ex('ec-hlp-04', 'help', 'Ho dimenticato la password / la chiave.', 'ও দি-মেন-তি-কা-তো', 'oh dee-mehn-tee-KAH-toh', 'আমি পাসওয়ার্ড / চাবি ভুলে গেছি।', 'I forgot the password / the key.', 'Ho chiuso la porta e ho dimenticato le chiavi dentro!', 'দরজা বন্ধ করেছি আর চাবি ভেতরে রেখে এসেছি!', 'I locked the door and left the keys inside!'),
  ex('ec-hlp-05', 'help', 'Ho perso il portafoglio / il telefono.', 'ও পের-সো ইল পোর-তা-ফল-ইয়ো', 'oh PEHR-soh eel pohr-tah-FOHL-yoh', 'আমার মানিব্যাগ / ফোন হারিয়ে গেছে।', 'I lost my wallet / phone.', 'Devo fare denuncia ai carabinieri o alla polizia.', 'আমাকে কারাবিনিয়েঁরি বা পুলিশে রিপোর্ট করতে হবে।', 'I have to report it to the Carabinieri or police.'),
  ex('ec-hlp-06', 'help', 'Aiuto! Chiamate un’ambulanza!', 'আ-ইউ-তো কিয়া-মা-তে', 'ah-YOO-toh kyah-MAH-teh', 'বাঁচান! অ্যাম্বুলেন্স ডাকুন!', 'Help! Call an ambulance!', 'In caso di emergenza, il numero unico è il 112.', 'জরুরি অবস্থায় ইউনিভার্সাল নম্বর হলো ১১২।', 'In an emergency, the unified EU number is 112.'),
  ex('ec-hlp-07', 'help', 'Dov’è l’ufficio informazioni?', 'দো-ভে লুফ-ফি-চো ইন-ফোর-মা-ৎসি-ও-নি', 'doh-VEH loof-FEE-choh een-for-mah-TSYOH-nee', 'তথ্য কেন্দ্র কোথায়?', 'Where is the information desk?', 'Chiediamo all’ufficio informazioni in stazione.', 'চলুন স্টেশনের তথ্য কেন্দ্রে জিজ্ঞাসা করি।', 'Let us ask at the information office in the station.'),
  ex('ec-hlp-08', 'help', 'C’è qualcuno che parla inglese?', 'চে কুয়াল-কু-নো কে পার-লা ইন-গ্লে-জে', 'cheh kwahl-KOO-noh keh PAHR-lah een-GLEH-zeh', 'এখানে কি কেউ ইংরেজি বলেন?', 'Is there anyone who speaks English?', 'Mi scusi, parla inglese per caso?', 'মাফ করবেন, আপনি কি ইংরেজি জানেন?', 'Excuse me, do you happen to speak English?'),
  ex('ec-hlp-09', 'help', 'Non funziona il telefono / la carta.', 'নোন ফুন-ৎসি-ও-না', 'nohn foon-TSYOH-nah', 'ফোন / কার্ড কাজ করছে না।', 'The phone / card is not working.', 'Il mio telefono non ha batteria!', 'আমার ফোনের চার্জ শেষ হয়ে গেছে!', 'My phone battery is dead!'),
  ex('ec-hlp-10', 'help', 'Può indicarmi l’uscita?', 'পু-ও ইন-দি-কার-মি লু-শি-তা', 'pwoh een-dee-KAHR-mee loo-SHEE-tah', 'বাইরে যাওয়ার পথটি দেখিয়ে দেবেন?', 'Can you show me the exit?', 'L’uscita è laggiù a destra.', 'বাইরে যাওয়ার দরজা ওদিকে ডানে।', 'The exit is down there on the right.'),
  ex('ec-hlp-11', 'help', 'Grazie infinite per il suo aiuto!', 'গ্রা-ৎসিয়ে ইন-ফি-নি-তে', 'GRAH-tsyeh een-fee-NEE-teh', 'আপনার সাহায্যের জন্য অশেষ ধন্যবাদ!', 'Thank you so much for your help!', 'È stato gentilissimo, grazie infinite!', 'আপনি খুব দয়ালু, অসংখ্য ধন্যবাদ!', 'You have been very kind, thank you endlessly!'),

  // 13. Telephone conversations (11)
  ex('ec-tel-01', 'telephone', 'Pronto? Chi parla?', 'প্রোন-তো কি পার-লা', 'PROHN-toh kee PAHR-lah', 'হ্যালো? কে বলছেন?', 'Hello (on phone)? Who is speaking?', 'Pronto, buongiorno! Parlo con il signor Rossi?', 'হ্যালো, শুভ সকাল! আমি কি জনাব রসির সাথে কথা বলছি?', 'Hello, good morning! Am I speaking with Mr. Rossi?'),
  ex('ec-tel-02', 'telephone', 'Sono Nadia, ciao!', 'সো-নো না-দিয়া চা-ও', 'SOH-noh NAH-dyah chow', 'আমি নাদিয়া বলছি, হ্যালো!', 'This is Nadia speaking, hi!', 'Ciao Marco, sono Nadia! Hai due minuti?', 'হ্যালো মার্কো, আমি নাদিয়া! তোমার কি দুই মিনিট সময় আছে?', 'Hi Marco, it is Nadia! Do you have two minutes?'),
  ex('ec-tel-03', 'telephone', 'Un attimo, glielo passo subito.', 'উন আৎ-তি-মো', 'oon AHT-tee-moh', 'এক মুহূর্ত, আমি এখনই তাঁকে ফোন দিচ্ছি।', 'One moment, I will put him right through to you.', 'Rimanga in linea, la passo all’ufficio giusto.', 'লাইনে থাকুন, আমি সঠিক অফিসে সংযোগ দিচ্ছি।', 'Stay on the line, I will transfer you to the right office.'),
  ex('ec-tel-04', 'telephone', 'Non si sente bene, la linea cade.', 'নোন সি সেন-তে বে-নে', 'nohn see SEHN-teh BEH-neh', 'ভালো শোনা যাচ্ছে না, সংযোগ কেটে যাচ্ছে।', 'I cannot hear well, the line is breaking up.', 'Scusi, non sento nulla, può richiamare?', 'মাফ করবেন, কিছু শুনতে পাচ্ছি না, আবার কল করবেন?', 'Sorry, I hear nothing, can you call back?'),
  ex('ec-tel-05', 'telephone', 'Ha sbagliato numero.', 'আ জবাল-ইয়া-তো নু-মে-রো', 'ah zbah-LYAH-toh NOO-meh-roh', 'আপনি ভুল নম্বরে কল করেছেন।', 'You dialed the wrong number.', 'Mi dispiace, qui non c’è nessun Paolo, ha sbagliato numero.', 'দুঃখিত, এখানে কোনো পাওলো নেই, ভুল নম্বর।', 'Sorry, there is no Paolo here, wrong number.'),
  ex('ec-tel-06', 'telephone', 'Qual è il tuo numero di telefono?', 'কুয়াল এ ইল তু-ও নু-মে-রো', 'kwahl eh eel TOO-oh NOO-meh-roh', 'তোমার ফোন নম্বর কত?', 'What is your phone number?', 'Il mio numero inizia con tre quattro zero.', 'আমার নম্বর ৩৪০ দিয়ে শুরু হয়।', 'My number starts with 340.'),
  ex('ec-tel-07', 'telephone', 'Posso lasciare un messaggio?', 'পোস-সো লা-শা-রে উন মেস-সাজ-জো', 'POHS-soh lah-SHAH-reh oon mehs-SAHJ-joh', 'আমি কি একটি বার্তা রেখে যেতে পারি?', 'Can I leave a message?', 'Al momento è occupato, gli dica di richiamarmi.', 'তিনি এখন ব্যস্ত, আমাকে আবার কল করতে বলবেন।', 'He is busy right now, tell him to call me back.'),
  ex('ec-tel-08', 'telephone', 'Ti mando un messaggio su WhatsApp.', 'তি মান-দো উন মেস-সাজ-জো', 'tee MAHN-doh oon mehs-SAHJ-joh', 'আমি তোমাকে হোয়াটসঅ্যাপে মেসেজ পাঠাচ্ছি।', 'I will send you a message on WhatsApp.', 'Ti mando la posizione esatta su WhatsApp.', 'আমি তোমাকে সঠিক লোকেশন পাঠাচ্ছি।', 'I am sending you the exact location on WhatsApp.'),
  ex('ec-tel-09', 'telephone', 'La chiamo più tardi.', 'লা কিয়া-মো পিউ তার-দি', 'lah KYAH-moh pyoo TAHR-dee', 'আমি আপনাকে পরে ফোন দেব।', 'I will call you later.', 'Ora sono in treno, la chiamo fra mezz’ora.', 'এখন আমি ট্রেনে আছি, আধা ঘণ্টা পর ফোন দেব।', 'Right now I am on a train, I will call in half an hour.'),
  ex('ec-tel-10', 'telephone', 'La segreteria telefonica è attiva.', 'লা সে-গ্রে-তে-রিয়া তে-লে-ফো-নি-কা', 'lah seh-greh-teh-REE-ah teh-leh-FOH-nee-kah', 'ভয়েসমেইল চালু আছে।', 'The voicemail is on.', 'Lascia un messaggio dopo il segnale acustico.', 'বিপ শব্দের পর বার্তা দিন।', 'Leave a message after the tone.'),
  ex('ec-tel-11', 'telephone', 'Grazie per aver chiamato, arrivederci!', 'গ্রা-ৎসিয়ে পের আ-ভের কিয়া-মা-তো', 'GRAH-tsyeh pehr ah-VEHR kyah-MAH-toh', 'কল করার জন্য ধন্যবাদ, বিদায়!', 'Thanks for calling, goodbye!', 'A presto e buona giornata!', 'শীঘ্রই দেখা হবে, দিনটি শুভ হোক!', 'See you soon and have a good day!'),

  // 14. Making appointments (11)
  ex('ec-apt-01', 'appointments', 'Vorrei fissare un appuntamento.', 'ভোর-রেই ফিস-সা-রে উন আপ-পুন-তা-মেন-তো', 'vohr-REH-ee fees-SAH-reh oon ahp-poon-tah-MEHN-toh', 'আমি একটি অ্যাপয়েন্টমেন্ট ঠিক করতে চাই।', 'I would like to schedule an appointment.', 'Buongiorno, vorrei fissare un appuntamento per martedì.', 'শুভ সকাল, আমি মঙ্গলবারের জন্য একটি অ্যাপয়েন্টমেন্ট চাই।', 'Good morning, I would like to book an appointment for Tuesday.'),
  ex('ec-apt-02', 'appointments', 'Quando è disponibile?', 'কুয়ান-দো এ দিস-পো-নি-বি-লে', 'KWAHN-doh eh dees-poh-NEE-bee-leh', 'আপনি কখন ফ্রি / সহজলভ্য আছেন?', 'When are you available?', 'È disponibile giovedì mattina alle dieci?', 'বৃহস্পতিবার সকাল ১০টায় কি আপনি ফ্রি আছেন?', 'Are you available Thursday morning at ten?'),
  ex('ec-apt-03', 'appointments', 'Va bene domani alle undici?', 'ভা বে-নে দো-মা-নি', 'vah BEH-neh doh-MAH-nee', 'আগামীকাল ১১টায় কি চলবে?', 'Is tomorrow at 11:00 okay?', 'Sì, per me va benissimo!', 'হ্যাঁ, আমার জন্য একদম ঠিক আছে!', 'Yes, that works great for me!'),
  ex('ec-apt-04', 'appointments', 'Purtroppo a quell’ora non posso.', 'পুর-ত্রোপ-পো আ কুয়েল-লো-রা নোন পোস-সো', 'poor-TROHP-poh ah kwehl-LOH-rah nohn POHS-soh', 'দুর্ভাগ্যবশত ওই সময় আমি পারব না।', 'Unfortunately I cannot make that time.', 'A quell’ora lavoro, possiamo fare nel pomeriggio?', 'ওই সময় আমি কাজ করি, বিকেলে কি করা যায়?', 'I work at that hour, can we do the afternoon?'),
  ex('ec-apt-05', 'appointments', 'Possiamo spostare l’appuntamento?', 'পোস-সিয়া-মো স্পোস-তা-রে', 'pohs-SYAH-moh spohs-TAH-reh', 'আমরা কি অ্যাপয়েন্টমেন্টের সময় বদলাতে পারি?', 'Can we reschedule the appointment?', 'Devo spostare l’appuntamento alla prossima settimana.', 'আমাকে অ্যাপয়েন্টমেন্ট পরের সপ্তাহে সরাতে হবে।', 'I need to move the appointment to next week.'),
  ex('ec-apt-06', 'appointments', 'Devo disdire l’appuntamento.', 'দে-ভো দিস-দি-রে', 'DEH-voh dees-DEE-reh', 'আমাকে অ্যাপয়েন্টমেন্ট বাতিল করতে হবে।', 'I have to cancel the appointment.', 'Mi dispiace, devo disdire la visita di domani.', 'দুঃখিত, আগামীকালের ভিজিটটি আমাকে বাতিল করতে হবে।', 'Sorry, I have to cancel tomorrow’s visit.'),
  ex('ec-apt-07', 'appointments', 'Confermo l’appuntamento per venerdì.', 'কোন-ফের-মো লাপ-পুন-তা-মেন-তো', 'kohn-FEHR-moh lahp-poon-tah-MEHN-toh', 'আমি শুক্রবারের অ্যাপয়েন্টমেন্ট নিশ্চিত করছি।', 'I confirm the appointment for Friday.', 'Le scrivo per confermare l’incontro di oggi.', 'আজকের মিটিং নিশ্চিত করতে লিখছি।', 'I am writing to confirm today’s meeting.'),
  ex('ec-apt-08', 'appointments', 'Dove ci incontriamo?', 'দো-ভে চি ইন-কোন-ত্রিয়া-মো', 'DOH-veh chee een-kohn-TRYAH-moh', 'আমরা কোথায় দেখা করব?', 'Where shall we meet?', 'Ci vediamo davanti all’ingresso principale.', 'আমরা প্রধান প্রবেশপথের সামনে দেখা করব।', 'We will meet in front of the main entrance.'),
  ex('ec-apt-09', 'appointments', 'Ci vediamo alle cinque precise!', 'চি ভে-দিয়া-মো আল-লে চিন-কুয়ে', 'chee veh-DYAH-moh ahl-leh CHEEN-kweh', 'ঠিক ৫টায় দেখা হচ্ছে!', 'See you at five sharp!', 'Non mancare, ti aspetto alle cinque!', 'মিস কোরো না, আমি ৫টায় তোমার জন্য অপেক্ষা করব!', 'Do not miss it, I will wait for you at five!'),
  ex('ec-apt-10', 'appointments', 'Cosa devo portare con me?', 'কো-জা দে-ভো পোর-তা-রে', 'KOH-zah DEH-voh pohr-TAH-reh', 'আমার সাথে কী নিয়ে আসতে হবে?', 'What do I need to bring with me?', 'Porti il passaporto e due fototessere.', 'পাসপোর্ট ও দুই কপি পাসপোর্ট সাইজ ছবি নিয়ে আসবেন।', 'Bring your passport and two ID photos.'),
  ex('ec-apt-11', 'appointments', 'Arrivo tra dieci minuti, mi scusi!', 'আর-রি-ভো ত্রা দিয়ে-চি মি-নু-তি', 'ahr-REE-voh trah DYEH-chee mee-NOO-tee', 'দশ মিনিটের মধ্যে আসছি, মাফ করবেন!', 'I will arrive in ten minutes, sorry!', 'Grazie per la pazienza, sono quasi arrivato.', 'ধৈর্য ধরার জন্য ধন্যবাদ, প্রায় পৌঁছে গেছি।', 'Thank you for your patience, I have almost arrived.'),
];

// 28 realistic dialogues (2 per topic × 14 topics >= 28 required)
export const EVERYDAY_COMM_DIALOGUES: EverydayDialogue[] = [
  // 1. Restaurant (2)
  {
    id: 'ec-dlg-res-1',
    topicId: 'restaurant',
    title: { bn: '১এ. সকালে ক্যাফেতে কফি অর্ডার', en: '1A. Ordering Morning Coffee at a Café' },
    setting: { bn: 'ইতালিয়ান বার (ক্যাফে) কাউন্টার', en: 'Italian bar counter in the morning' },
    lines: [
      { speaker: 'Cliente', it: 'Buongiorno! Un caffè e un cornetto alla crema, per favore.', tr: { bn: 'শুভ সকাল! দয়া করে এক কাপ কফি ও একটি ক্রিম ক্রোয়াসাঁ দিন।', en: 'Good morning! A coffee and a cream croissant, please.' } },
      { speaker: 'Barista', it: 'Subito! Prende al banco o al tavolo?', tr: { bn: 'এখনই দিচ্ছি! কাউন্টারে খাবেন নাকি টেবিলে বসবেন?', en: 'Right away! At the counter or at a table?' } },
      { speaker: 'Cliente', it: 'Al banco, grazie. Quanto viene?', tr: { bn: 'কাউন্টারেই, ধন্যবাদ। কত হলো?', en: 'At the counter, thanks. How much is it?' } },
      { speaker: 'Barista', it: 'Sono tre euro e cinquanta.', tr: { bn: '৩ ইউরো ৫০ সেন্ট হয়েছে।', en: 'That is three euros fifty.' } },
    ],
    checkQuestion: { bn: 'গ্রাহক কোথায় বসে/দাঁড়িয়ে কফি খাচ্ছেন?', en: 'Where is the customer having breakfast?' },
    checkOptions: [
      { bn: 'কাউন্টারে দাঁড়িয়ে (al banco)', en: 'At the bar counter (al banco)' },
      { bn: 'বাইরের টেবিলে (al tavolo)', en: 'Seated at a table (al tavolo)' },
      { bn: 'বাসায় নিয়ে যাচ্ছেন', en: 'Taking it home' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-res-2',
    topicId: 'restaurant',
    title: { bn: '১বি. রেস্তোরাঁয় খাবার ও বিল', en: '1B. Dinner & Paying the Bill' },
    setting: { bn: 'রাতের খাবারের রেস্তোরাঁ', en: 'Local trattoria at dinner' },
    lines: [
      { speaker: 'Cameriere', it: 'Siete pronti per ordinare?', tr: { bn: 'আপনারা কি অর্ডার করার জন্য প্রস্তুত?', en: 'Are you ready to order?' } },
      { speaker: 'Ospite', it: 'Sì! Vorrei una pizza margherita e acqua naturale.', tr: { bn: 'হ্যাঁ! আমি একটি মার্গেরিটা পিৎজা ও সাধারণ পানি চাই।', en: 'Yes! I would like a Margherita pizza and still water.' } },
      { speaker: 'Ospite', it: 'Dopo mangiato: Scusi, ci porta il conto, per favore?', tr: { bn: 'খাওয়ার পর: মাফ করবেন, আমাদের বিলটা এনে দেবেন?', en: 'After eating: Excuse me, could you bring us the bill?' } },
      { speaker: 'Cameriere', it: 'Certamente, portate pure alla cassa o pago qui?', tr: { bn: 'অবশ্যই, ক্যাশে দেবেন নাকি এখানেই কার্ড আনব?', en: 'Certainly, are you paying at the register or here?' } },
    ],
    checkQuestion: { bn: 'অতিথি কী ধরনের পানি চেয়েছেন?', en: 'What kind of water did the guest order?' },
    checkOptions: [
      { bn: 'সাধারণ পানি (acqua naturale)', en: 'Still water (acqua naturale)' },
      { bn: 'গ্যাসযুক্ত পানি (frizzante)', en: 'Sparkling water (frizzante)' },
      { bn: 'কমলার জুস', en: 'Orange juice' },
    ],
    checkAnswer: 0,
  },

  // 2. Supermarket (2)
  {
    id: 'ec-dlg-sup-1',
    topicId: 'supermarket',
    title: { bn: '২এ. পনির কাউন্টারে অর্ডার', en: '2A. Ordering at the Deli Counter' },
    setting: { bn: 'সুপারমার্কেটের ফ্রেস কাউন্টার', en: 'Supermarket cheese & deli counter' },
    lines: [
      { speaker: 'Cliente', it: 'Buongiorno, vorrei due etti di mozzarella fresca.', tr: { bn: 'শুভ সকাল, আমি ২০০ গ্রাম তাজা মোৎজারেলা চাই।', en: 'Good morning, I would like 200 grams of fresh mozzarella.' } },
      { speaker: 'Commesso', it: 'Ecco due etti. Desidera qualcos’altro?', tr: { bn: 'এই নিন ২০০ গ্রাম। আর কিছু কি লাগবে?', en: 'Here is 200 grams. Anything else?' } },
      { speaker: 'Cliente', it: 'Sì, dov’è il reparto pasta e sughi?', tr: { bn: 'হ্যাঁ, পাস্তা ও সসের বিভাগটি কোথায়?', en: 'Yes, where is the pasta and sauces aisle?' } },
      { speaker: 'Commesso', it: 'Alla corsia quattro, a sinistra.', tr: { bn: 'চার নম্বর আইলে, বাম দিকে।', en: 'In aisle four, on the left.' } },
    ],
    checkQuestion: { bn: 'গ্রাহক কত গ্রাম মোৎজারেলা কিনলেন?', en: 'How much mozzarella did the customer ask for?' },
    checkOptions: [
      { bn: '২০০ গ্রাম (due etti)', en: '200 grams (due etti)' },
      { bn: '১০০ গ্রাম (un etto)', en: '100 grams (un etto)' },
      { bn: '১ কেজি', en: '1 kilogram' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-sup-2',
    topicId: 'supermarket',
    title: { bn: '২বি. ক্যাশ কাউন্টারে পেমেন্ট', en: '2B. Paying at Checkout' },
    setting: { bn: 'সুপারমার্কেটের ক্যাশ কাউন্টার', en: 'Supermarket checkout lane' },
    lines: [
      { speaker: 'Cassiera', it: 'Ha la tessera fedeltà del supermercato?', tr: { bn: 'আপনার কি সুপারমার্কেটের মেম্বার কার্ড আছে?', en: 'Do you have the supermarket loyalty card?' } },
      { speaker: 'Cliente', it: 'No, non ce l’ho. Mi serve anche una busta, per favore.', tr: { bn: 'না, নেই। আমার একটি ব্যাগও লাগবে, দয়া করে।', en: 'No, I do not. I also need a bag, please.' } },
      { speaker: 'Cassiera', it: 'Sono diciotto euro e quaranta. Come paga?', tr: { bn: '১৮ ইউরো ৪০ সেন্ট হয়েছে। কীভাবে পেমেন্ট করবেন?', en: 'That is 18.40 euros. How are you paying?' } },
      { speaker: 'Cliente', it: 'Con il bancomat. Ecco lo scontrino, grazie!', tr: { bn: 'ডেবিট কার্ডে। রসিদ নেব, ধন্যবাদ!', en: 'With debit card. I will take the receipt, thanks!' } },
    ],
    checkQuestion: { bn: 'গ্রাহক কীভাবে বিল পরিশোধ করলেন?', en: 'How did the customer pay?' },
    checkOptions: [
      { bn: 'ডেবিট কার্ডে (con il bancomat)', en: 'By debit card (bancomat)' },
      { bn: 'নগদ টাকায়', en: 'In cash' },
      { bn: 'লয়ালটি পয়েন্টে', en: 'With loyalty points' },
    ],
    checkAnswer: 0,
  },

  // 3. Shopping (2)
  {
    id: 'ec-dlg-shp-1',
    topicId: 'shopping',
    title: { bn: '৩এ. পোশাকের দোকানে সাইজ খোঁজা', en: '3A. Finding the Right Size' },
    setting: { bn: 'কাপড়ের দোকান', en: 'Clothing store' },
    lines: [
      { speaker: 'Commessa', it: 'Buongiorno, posso aiutarla?', tr: { bn: 'শুভ সকাল, আমি কি আপনাকে সাহায্য করতে পারি?', en: 'Good morning, may I help you?' } },
      { speaker: 'Cliente', it: 'Sì, cerco un maglione blu, taglia media. Posso provarlo?', tr: { bn: 'হ্যাঁ, আমি মিডিয়াম সাইজের নীল সোয়েটার খুঁজছি। পরে দেখতে পারি?', en: 'Yes, I am looking for a blue sweater, medium. Can I try it on?' } },
      { speaker: 'Commessa', it: 'Certo! Il camerino è laggiù a destra.', tr: { bn: 'অবশ্যই! চেঞ্জিং রুম ওদিকে ডান পাশে।', en: 'Of course! The fitting room is down on the right.' } },
    ],
    checkQuestion: { bn: 'চেঞ্জিং রুম কোথায় অবস্থিত?', en: 'Where is the fitting room?' },
    checkOptions: [
      { bn: 'ওদিকে ডান পাশে', en: 'Over there on the right' },
      { bn: 'বাম পাশে ক্যাশের কাছে', en: 'On the left by the register' },
      { bn: 'দ্বিতীয় তলায়', en: 'On the second floor' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-shp-2',
    topicId: 'shopping',
    title: { bn: '৩বি. জুতার দাম ও বদলানো নিয়ম', en: '3B. Shoe Price & Exchange Policy' },
    setting: { bn: 'জুতার দোকান', en: 'Shoe shop' },
    lines: [
      { speaker: 'Cliente', it: 'Quanto costano queste scarpe nere?', tr: { bn: 'এই কালো জুতাগুলোর দাম কত?', en: 'How much are these black shoes?' } },
      { speaker: 'Commesso', it: 'Costano sessanta euro, ma oggi sono in saldo a quaranta!', tr: { bn: 'দাম ৬০ ইউরো, তবে আজ সেলে ৪০ ইউরোতে পাওয়া যাচ্ছে!', en: 'They cost 60 euros, but today they are on sale for 40!' } },
      { speaker: 'Cliente', it: 'Perfetto, le prendo! Se è un regalo posso cambiarle?', tr: { bn: 'দারুণ, আমি নিচ্ছি! উপহার হলে বদলানো যাবে তো?', en: 'Perfect, I will take them! If it is a gift can I exchange them?' } },
      { speaker: 'Commesso', it: 'Sì, con lo scontrino entro quindici giorni.', tr: { bn: 'হ্যাঁ, রসিদসহ পনেরো দিনের মধ্যে বদলানো যাবে।', en: 'Yes, with the receipt within fifteen days.' } },
    ],
    checkQuestion: { bn: 'সেল ডিসকাউন্টের পর জুতার দাম কত?', en: 'What is the sale price of the shoes?' },
    checkOptions: [
      { bn: '৪০ ইউরো (quaranta euro)', en: '40 euros' },
      { bn: '৬০ ইউরো', en: '60 euros' },
      { bn: '১৫ ইউরো', en: '15 euros' },
    ],
    checkAnswer: 0,
  },

  // 4. Directions (2)
  {
    id: 'ec-dlg-dir-1',
    topicId: 'directions',
    title: { bn: '৪এ. ফার্মেসির রাস্তা জিজ্ঞাসা', en: '4A. Finding the Nearest Pharmacy' },
    setting: { bn: 'রাস্তার মোড়', en: 'Street corner downtown' },
    lines: [
      { speaker: 'Passante', it: 'Mi scusi, c’è una farmacia qui vicino?', tr: { bn: 'মাফ করবেন, এখানে কাছে কোনো ফার্মেসি আছে কি?', en: 'Excuse me, is there a pharmacy nearby?' } },
      { speaker: 'Signora', it: 'Sì! Vada sempre dritto, poi giri a sinistra al semaforo.', tr: { bn: 'হ্যাঁ! একদম সোজা যান, তারপর সিগন্যালে বামে ঘুরুন।', en: 'Yes! Go straight ahead, then turn left at the traffic light.' } },
      { speaker: 'Passante', it: 'È lontano a piedi?', tr: { bn: 'হেঁটে গেলে কি দূরে?', en: 'Is it far on foot?' } },
      { speaker: 'Signora', it: 'No, è proprio di fronte alla banca, tre minuti a piedi.', tr: { bn: 'না, ঠিক ব্যাংকের বিপরীতে, হেঁটে তিন মিনিট।', en: 'No, it is right across from the bank, three minutes on foot.' } },
    ],
    checkQuestion: { bn: 'সিগন্যালে কোন দিকে ঘুরতে হবে?', en: 'Which way should you turn at the traffic light?' },
    checkOptions: [
      { bn: 'বাম দিকে (a sinistra)', en: 'Left (a sinistra)' },
      { bn: 'ডান দিকে (a destra)', en: 'Right (a destra)' },
      { bn: 'পেছনে ফিরতে হবে', en: 'Turn back' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-dir-2',
    topicId: 'directions',
    title: { bn: '৪বি. ম্যাপে পোস্ট অফিস দেখা', en: '4B. Pointing on the Map' },
    setting: { bn: 'সিটি সেন্টার চত্বর', en: 'City square' },
    lines: [
      { speaker: 'Rafi', it: 'Scusi, mi sono perso. Come arrivo all’ufficio postale?', tr: { bn: 'মাফ করবেন, আমি পথ হারিয়েছি। পোস্ট অফিসে কীভাবে যাব?', en: 'Excuse me, I am lost. How do I reach the post office?' } },
      { speaker: 'Locale', it: 'Attraversi questa piazza e prenda la seconda strada a destra.', tr: { bn: 'এই চত্বর পার হয়ে ডান দিকের দ্বিতীয় রাস্তাটি নিন।', en: 'Cross this square and take the second street on the right.' } },
      { speaker: 'Rafi', it: 'Può indicarlo sulla mappa? Grazie mille!', tr: { bn: 'ম্যাপে একটু দেখিয়ে দেবেন? অনেক ধন্যবাদ!', en: 'Could you point it out on the map? Thanks!' } },
    ],
    checkQuestion: { bn: 'চত্বর পার হয়ে কোন রাস্তা নিতে হবে?', en: 'Which turn after crossing the square?' },
    checkOptions: [
      { bn: 'ডানের দ্বিতীয় রাস্তা', en: 'The second street on the right' },
      { bn: 'বামের প্রথম রাস্তা', en: 'The first street on the left' },
      { bn: 'তৃতীয় মোড়', en: 'The third corner' },
    ],
    checkAnswer: 0,
  },

  // 5. Public transportation (2)
  {
    id: 'ec-dlg-trn-1',
    topicId: 'transport',
    title: { bn: '৫এ. বাসের টিকিট কেনা ও পাঞ্চ করা', en: '5A. Buying & Validating a Bus Ticket' },
    setting: { bn: 'তাবাক্কেরিয়া ও বাস স্টপ', en: 'Tobacco shop & bus stop' },
    lines: [
      { speaker: 'Passeggero', it: 'Buongiorno, vorrei due biglietti dell’autobus, per favore.', tr: { bn: 'শুভ সকাল, দয়া করে দুটি বাসের টিকিট দিন।', en: 'Good morning, I would like two bus tickets, please.' } },
      { speaker: 'Tabaccaio', it: 'Ecco, sono tre euro. Ricordi di convalidare il biglietto a bordo!', tr: { bn: 'এই নিন, ৩ ইউরো। বাসে উঠে টিকিটটি পাঞ্চ করতে ভুলবেন না!', en: 'Here you go, three euros. Remember to validate the ticket on board!' } },
      { speaker: 'Passeggero', it: 'Certo! Quanto dura un biglietto?', tr: { bn: 'অবশ্যই! একটি টিকিটের মেয়াদ কতক্ষণ?', en: 'Sure! How long does one ticket last?' } },
      { speaker: 'Tabaccaio', it: 'Vale novanta minuti dalla convalida.', tr: { bn: 'পাঞ্চ করার পর থেকে নব্বই মিনিট বৈধ থাকে।', en: 'It is valid for ninety minutes from validation.' } },
    ],
    checkQuestion: { bn: 'পাঞ্চ করার পর একটি টিকিট কতক্ষণ বৈধ থাকে?', en: 'How long is the ticket valid once validated?' },
    checkOptions: [
      { bn: '৯০ মিনিট (novanta minuti)', en: '90 minutes' },
      { bn: '১৫ মিনিট', en: '15 minutes' },
      { bn: 'সারাদিন', en: 'All week' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-trn-2',
    topicId: 'transport',
    title: { bn: '৫বি. বাসে স্টপ জিজ্ঞাসা', en: '5B. Asking Where to Get Off' },
    setting: { bn: 'শহরের বাসের ভেতর', en: 'Inside a city bus' },
    lines: [
      { speaker: 'Viaggiatrice', it: 'Scusi, questo autobus ferma davanti all’ospedale?', tr: { bn: 'মাফ করবেন, এই বাস কি হাসপাতালের সামনে থামে?', en: 'Excuse me, does this bus stop in front of the hospital?' } },
      { speaker: 'Passeggero', it: 'Sì, ma mancano ancora quattro fermate.', tr: { bn: 'হ্যাঁ, তবে এখনো চারটি স্টপ বাকি আছে।', en: 'Yes, though there are still four stops left.' } },
      { speaker: 'Viaggiatrice', it: 'Grazie! Quando ci siamo, devo scendere alla fermata giusta.', tr: { bn: 'ধন্যবাদ! পৌঁছালে আমাকে সঠিক স্টপে নামতে হবে।', en: 'Thanks! When we are there, I need to get off at the right stop.' } },
    ],
    checkQuestion: { bn: 'হাসপাতালে পৌঁছাতে আর কয়টি স্টপ বাকি?', en: 'How many stops remain until the hospital?' },
    checkOptions: [
      { bn: '৪টি স্টপ', en: '4 stops' },
      { bn: '১টি স্টপ', en: '1 stop' },
      { bn: '১০টি স্টপ', en: '10 stops' },
    ],
    checkAnswer: 0,
  },

  // 6. Stations (2)
  {
    id: 'ec-dlg-stn-1',
    topicId: 'stations',
    title: { bn: '৬এ. ট্রেনের টিকিট কাউন্টার', en: '6A. At the Train Ticket Window' },
    setting: { bn: 'রেলস্টেশন টিকিট কাউন্টার', en: 'Railway ticket desk' },
    lines: [
      { speaker: 'Cliente', it: 'Un biglietto di andata e ritorno per Padova, per favore.', tr: { bn: 'দয়া করে পাদোয়ার জন্য একটি রিটার্ন টিকিট দিন।', en: 'A round-trip ticket to Padua, please.' } },
      { speaker: 'Impiegato', it: 'Parte adesso? Il prossimo regionale parte alle dieci e mezza dal binario due.', tr: { bn: 'এখনই যাবেন? পরের লোকাল ট্রেন ১০:৩০-এ ২ নম্বর প্ল্যাটফর্ম থেকে ছাড়বে।', en: 'Leaving now? The next regional train leaves at 10:30 from platform two.' } },
      { speaker: 'Cliente', it: 'È un treno diretto o devo cambiare?', tr: { bn: 'এটি কি সরাসরি ট্রেন নাকি বদলাতে হবে?', en: 'Is it a direct train or must I change?' } },
      { speaker: 'Impiegato', it: 'È diretto, dura solo trenta minuti!', tr: { bn: 'সরাসরি, মাত্র ত্রিশ মিনিট লাগে!', en: 'It is direct, only takes thirty minutes!' } },
    ],
    checkQuestion: { bn: 'ট্রেনটি কোন প্ল্যাটফর্ম থেকে ছাড়বে?', en: 'Which platform does the train depart from?' },
    checkOptions: [
      { bn: '২ নম্বর প্ল্যাটফর্ম (binario due)', en: 'Platform 2 (binario due)' },
      { bn: '৫ নম্বর প্ল্যাটফর্ম', en: 'Platform 5' },
      { bn: '১ নম্বর প্ল্যাটফর্ম', en: 'Platform 1' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-stn-2',
    topicId: 'stations',
    title: { bn: '৬বি. ট্রেনে আসন ও ট্রেন পরিবর্তন', en: '6B. Finding Your Seat on the Train' },
    setting: { bn: 'হাই-স্পিড ট্রেন', en: 'Aboard an Italian train' },
    lines: [
      { speaker: 'Passeggero', it: 'Scusi, questo posto vicino al finestrino è libero?', tr: { bn: 'মাফ করবেন, জানালার পাশের এই সিটটি কি খালি?', en: 'Excuse me, is this window seat free?' } },
      { speaker: 'Donna', it: 'No, mi dispiace, è occupato dal mio collega. Quello accanto è libero!', tr: { bn: 'না, দুঃখিত, এটি আমার সহকর্মীর। পাশেরটি খালি আছে!', en: 'No, sorry, my colleague is sitting there. The one next to it is free!' } },
      { speaker: 'Passeggero', it: 'Nessun problema, grazie mille!', tr: { bn: 'কোনো সমস্যা নেই, অনেক ধন্যবাদ!', en: 'No problem, thank you very much!' } },
    ],
    checkQuestion: { bn: 'জানালার পাশের সিটটি কেমন ছিল?', en: 'What was the status of the window seat?' },
    checkOptions: [
      { bn: 'দখল করা (occupato)', en: 'Already taken (occupato)' },
      { bn: 'খালি ছিল (libero)', en: 'Completely free' },
      { bn: 'ভাঙা ছিল', en: 'Out of order' },
    ],
    checkAnswer: 0,
  },

  // 7. Hotel (2)
  {
    id: 'ec-dlg-hot-1',
    topicId: 'hotel',
    title: { bn: '৭এ. হোটেলে চেক-ইন', en: '7A. Checking In at the Hotel' },
    setting: { bn: 'হোটেল রিসেপশন', en: 'Hotel reception desk' },
    lines: [
      { speaker: 'Ospite', it: 'Buonasera, ho una prenotazione a nome Kabir per tre notti.', tr: { bn: 'শুভ সন্ধ্যা, কবির নামে আমার তিন রাতের বুকিং আছে।', en: 'Good evening, I have a booking under Kabir for three nights.' } },
      { speaker: 'Receptionist', it: 'Benvenuto! Mi dà il passaporto per registrare il check-in?', tr: { bn: 'স্বাগতম! চেক-ইন রেজিস্টার করার জন্য পাসপোর্টটা দেবেন?', en: 'Welcome! May I have your passport to register check-in?' } },
      { speaker: 'Ospite', it: 'Ecco il passaporto. La colazione è inclusa?', tr: { bn: 'এই নিন পাসপোর্ট। নাশতা কি অন্তর্ভুক্ত?', en: 'Here is my passport. Is breakfast included?' } },
      { speaker: 'Receptionist', it: 'Sì, dalle sette alle dieci al primo piano. Ecco la chiave!', tr: { bn: 'হ্যাঁ, ৭টা থেকে ১০টা পর্যন্ত দোতলায়। এই নিন চাবি!', en: 'Yes, from 7 to 10 on the first floor. Here is your key!' } },
    ],
    checkQuestion: { bn: 'কবির কত রাতের জন্য হোটেল বুক করেছেন?', en: 'How many nights did Kabir book?' },
    checkOptions: [
      { bn: 'তিন রাত (tre notti)', en: 'Three nights' },
      { bn: 'এক রাত', en: 'One night' },
      { bn: 'সাত রাত', en: 'Seven nights' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-hot-2',
    topicId: 'hotel',
    title: { bn: '৭বি. ওয়াইফাই ও চেক-আউটের সময়', en: '7B. Wi-Fi & Check-Out Time' },
    setting: { bn: 'হোটেল লবি', en: 'Hotel lobby' },
    lines: [
      { speaker: 'Ospite', it: 'Scusi, qual è la password del Wi-Fi e a che ora è il check-out?', tr: { bn: 'মাফ করবেন, ওয়াই-ফাই পাসওয়ার্ড কী এবং চেক-আউট কয়টায়?', en: 'Excuse me, what is the Wi-Fi password and check-out time?' } },
      { speaker: 'Receptionist', it: 'La password è “Roma2026” e il check-out è entro le undici.', tr: { bn: 'পাসওয়ার্ড হলো “Roma2026” আর ১১টার মধ্যে চেক-আউট।', en: 'The password is "Roma2026" and check-out is by 11:00.' } },
      { speaker: 'Ospite', it: 'Posso lasciare le valigie qui dopo il check-out?', tr: { bn: 'চেক-আউটের পর কি এখানে ব্যাগ রাখতে পারব?', en: 'Can I leave my luggage here after check-out?' } },
      { speaker: 'Receptionist', it: 'Certo, abbiamo il deposito bagagli gratuito!', tr: { bn: 'অবশ্যই, আমাদের বিনামূল্যে লাগেজ রাখার সুবিধা আছে!', en: 'Certainly, we have free luggage storage!' } },
    ],
    checkQuestion: { bn: 'চেক-আউটের সময়সীমা কখন পর্যন্ত?', en: 'By what time is hotel check-out?' },
    checkOptions: [
      { bn: 'সকাল ১১টা (entro le undici)', en: 'By 11:00 AM' },
      { bn: 'দুপুর ২টা', en: 'By 2:00 PM' },
      { bn: 'সকাল ৭টা', en: 'By 7:00 AM' },
    ],
    checkAnswer: 0,
  },

  // 8. Pharmacy (2)
  {
    id: 'ec-dlg-phr-1',
    topicId: 'pharmacy',
    title: { bn: '৮এ. মাথাব্যথা ও জ্বরের ওষুধ', en: '8A. Asking for Fever & Headache Medicine' },
    setting: { bn: 'পাড়ার ফার্মেসি', en: 'Neighborhood pharmacy' },
    lines: [
      { speaker: 'Cliente', it: 'Buongiorno, ho mal di testa e un po’ di febbre.', tr: { bn: 'শুভ সকাল, আমার মাথাব্যথা ও হালকা জ্বর আছে।', en: 'Good morning, I have a headache and a mild fever.' } },
      { speaker: 'Farmacista', it: 'Le consiglio questo paracetamolo. Ha allergie a qualche farmaco?', tr: { bn: 'আমি এই প্যারাসিটামল খাওয়ার পরামর্শ দিচ্ছি। কোনো ওষুধে অ্যালার্জি আছে কি?', en: 'I recommend this paracetamol. Are you allergic to any medication?' } },
      { speaker: 'Cliente', it: 'No, nessuna allergia. Quante volte al giorno devo prenderlo?', tr: { bn: 'না, কোনো অ্যালার্জি নেই। দিনে কতবার খেতে হবে?', en: 'No, no allergies. How many times a day do I take it?' } },
      { speaker: 'Farmacista', it: 'Una compressa ogni otto ore, dopo mangiato.', tr: { bn: 'প্রতি আট ঘণ্টা পর পর একটি ট্যাবলেট, খাওয়ার পরে।', en: 'One tablet every eight hours, after eating.' } },
    ],
    checkQuestion: { bn: 'ওষুধটি কখন খেতে বলা হয়েছে?', en: 'When should the medicine be taken?' },
    checkOptions: [
      { bn: 'খাওয়ার পরে (dopo mangiato)', en: 'After meals (dopo mangiato)' },
      { bn: 'খালি পেটে সকালে', en: 'On an empty stomach' },
      { bn: 'শুধু ঘুমানোর আগে', en: 'Only before sleep' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-phr-2',
    topicId: 'pharmacy',
    title: { bn: '৮বি. গলাব্যথা ও ব্যান্ডেজ কেনা', en: '8B. Sore Throat & First-Aid Supplies' },
    setting: { bn: 'ফার্মেসি কাউন্টার', en: 'Pharmacy counter' },
    lines: [
      { speaker: 'Cliente', it: 'Salve, ho mal di gola e tosse da ieri. Serve la ricetta?', tr: { bn: 'সালাম, গতকাল থেকে আমার গলাব্যথা ও কাশি। প্রেসক্রিপশন কি লাগবে?', en: 'Hello, I have had a sore throat and cough since yesterday. Do I need a prescription?' } },
      { speaker: 'Farmacista', it: 'Per queste pastiglie no, non serve ricetta. Vuole altro?', tr: { bn: 'এই লজেন্সের জন্য প্রেসক্রিপশন লাগবে না। আর কিছু লাগবে?', en: 'Not for these lozenges, no prescription needed. Anything else?' } },
      { speaker: 'Cliente', it: 'Sì, una scatola di cerotti per favore.', tr: { bn: 'হ্যাঁ, এক বাক্স ব্যান্ডেজ দিন, দয়া করে।', en: 'Yes, a box of band-aids please.' } },
    ],
    checkQuestion: { bn: 'লজেন্সের জন্য কি প্রেসক্রিপশন লেগেছে?', en: 'Was a prescription required for the throat lozenges?' },
    checkOptions: [
      { bn: 'না (non serve ricetta)', en: 'No (non serve ricetta)' },
      { bn: 'হ্যাঁ, জরুরি প্রেসক্রিপশন লেগেছে', en: 'Yes, mandatory' },
      { bn: 'শুধু পাসপোর্ট লেগেছে', en: 'Only passport needed' },
    ],
    checkAnswer: 0,
  },

  // 9. Doctor (2)
  {
    id: 'ec-dlg-doc-1',
    topicId: 'doctor',
    title: { bn: '৯এ. ক্লিনিকে ভিজিট বুকিং', en: '9A. Booking a Clinic Visit' },
    setting: { bn: 'ডাক্তার রিসেপশন', en: 'Medical clinic reception' },
    lines: [
      { speaker: 'Paziente', it: 'Buongiorno, vorrei fissare una visita medica con il dottore.', tr: { bn: 'শুভ সকাল, আমি ডাক্তারের সাথে ভিজিট বুক করতে চাই।', en: 'Good morning, I would like to book a visit with the doctor.' } },
      { speaker: 'Segretaria', it: 'Certamente. Ha la tessera sanitaria con sé?', tr: { bn: 'অবশ্যই। আপনার সাথে হেলথ কার্ড আছে কি?', en: 'Certainly. Do you have your health card with you?' } },
      { speaker: 'Paziente', it: 'Sì, eccola. Quando c’è posto?', tr: { bn: 'হ্যাঁ, এই নিন। কখন খালি সময় আছে?', en: 'Yes, here it is. When is there an opening?' } },
      { speaker: 'Segretaria', it: 'Domani mattina alle nove e trenta, in sala d’attesa.', tr: { bn: 'আগামীকাল সকাল ৯:৩০-এ, অপেক্ষার ঘরে বসবেন।', en: 'Tomorrow morning at 9:30, in the waiting room.' } },
    ],
    checkQuestion: { bn: 'রিসেপশনে কোন কার্ডটি দেখতে চাওয়া হয়েছে?', en: 'Which card did the receptionist ask for?' },
    checkOptions: [
      { bn: 'হেলথ কার্ড (tessera sanitaria)', en: 'Italian health card (tessera sanitaria)' },
      { bn: 'বাস পাস', en: 'Monthly bus pass' },
      { bn: 'লাইব্রেরি কার্ড', en: 'Library card' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-doc-2',
    topicId: 'doctor',
    title: { bn: '৯বি. ডাক্তারের কাছে সাধারণ লক্ষণ বলা', en: '9B. Explaining Simple Symptoms' },
    setting: { bn: 'ডাক্তারের চেম্বার', en: 'Doctor consultation room' },
    lines: [
      { speaker: 'Dottore', it: 'Buongiorno, che problema ha oggi?', tr: { bn: 'শুভ সকাল, আজ আপনার কী সমস্যা হচ্ছে?', en: 'Good morning, what problem do you have today?' } },
      { speaker: 'Paziente', it: 'Mi fa male qui alla schiena e sono molto stanco da tre giorni.', tr: { bn: 'তিন দিন ধরে আমার পিঠের এখানে ব্যথা করছে এবং খুব ক্লান্ত লাগছে।', en: 'My back hurts here and I have been very tired for three days.' } },
      { speaker: 'Dottore', it: 'Capisco. Riposi per due giorni, beva acqua e prenda questo.', tr: { bn: 'বুঝতে পেরেছি। দুই দিন বিশ্রাম নিন, পানি পান করুন এবং এটি খান।', en: 'I understand. Rest for two days, drink water, and take this.' } },
    ],
    checkQuestion: { bn: 'রোগী কতদিন ধরে ব্যথা অনুভব করছেন?', en: 'How long has the patient had the pain?' },
    checkOptions: [
      { bn: 'তিন দিন ধরে (da tre giorni)', en: 'For three days' },
      { bn: 'এক মাস ধরে', en: 'For one month' },
      { bn: 'আজ সকাল থেকে', en: 'Since this morning only' },
    ],
    checkAnswer: 0,
  },

  // 10. University (2)
  {
    id: 'ec-dlg-uni-1',
    topicId: 'university',
    title: { bn: '১০এ. ক্লাসরুমে সাহায্য ও পুনরাবৃত্তি', en: '10A. Asking the Teacher to Repeat' },
    setting: { bn: 'ইতালিয়ান ভাষার ক্লাসরুম', en: 'University language classroom' },
    lines: [
      { speaker: 'Studente', it: 'Scusi professoressa, può parlare più lentamente per favore?', tr: { bn: 'মাফ করবেন ম্যাডাম, দয়া করে একটু ধীরে বলবেন?', en: 'Excuse me professor, could you speak more slowly please?' } },
      { speaker: 'Professoressa', it: 'Certo! Cosa non hai capito?', tr: { bn: 'অবশ্যই! কোন অংশটি বোঝোনি?', en: 'Of course! What did you not understand?' } },
      { speaker: 'Studente', it: 'Che cosa significa “frequenza obbligatoria” e come si scrive?', tr: { bn: '“frequenza obbligatoria” অর্থ কী এবং বানান কেমন?', en: 'What does "mandatory attendance" mean and how is it spelled?' } },
    ],
    checkQuestion: { bn: 'শিক্ষার্থী কী অনুরোধ করেছেন?', en: 'What did the student politely request?' },
    checkOptions: [
      { bn: 'ধীরে কথা বলা ও শব্দের অর্থ/বানান', en: 'Speaking slower + word meaning & spelling' },
      { bn: 'ক্লাস বাতিল করা', en: 'Canceling the lesson' },
      { bn: 'পরীক্ষার নম্বর বাড়ানো', en: 'Changing grades' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-uni-2',
    topicId: 'university',
    title: { bn: '১০বি. স্টুডেন্ট অফিস ও পরীক্ষার তারিখ', en: '10B. Segreteria & Exam Registration' },
    setting: { bn: 'বিশ্ববিদ্যালয় অ্যাডমিন অফিস', en: 'University student office' },
    lines: [
      { speaker: 'Studente', it: 'Buongiorno, dov’è l’aula cinque per l’esame di oggi?', tr: { bn: 'শুভ সকাল, আজকের পরীক্ষার জন্য ৫ নম্বর রুম কোথায়?', en: 'Good morning, where is room five for today’s exam?' } },
      { speaker: 'Impiegata', it: 'Al secondo piano a sinistra. Si è già iscritto all’appello?', tr: { bn: 'দোতলায় বাম পাশে। আপনি কি পরীক্ষায় নাম নিবন্ধন করেছেন?', en: 'On the second floor to the left. Have you already registered for the session?' } },
      { speaker: 'Studente', it: 'Sì, mi sono iscritto ieri online sul portale!', tr: { bn: 'হ্যাঁ, গতকাল অনলাইনে পোর্টালে নিবন্ধন করেছি!', en: 'Yes, I registered online on the portal yesterday!' } },
    ],
    checkQuestion: { bn: 'শিক্ষার্থী কোথায় পরীক্ষার নাম নিবন্ধন করেছেন?', en: 'Where did the student register for the exam?' },
    checkOptions: [
      { bn: 'অনলাইনে পোর্টালে', en: 'Online on the university portal' },
      { bn: 'কাগজের ফর্মে ক্লাসে', en: 'On paper in the hallway' },
      { bn: 'এখনো করেননি', en: 'Has not registered yet' },
    ],
    checkAnswer: 0,
  },

  // 11. Workplace (2)
  {
    id: 'ec-dlg-wrk-1',
    topicId: 'workplace',
    title: { bn: '১১এ. কাজের শিফট ও বিরতি', en: '11A. Checking Shift & Lunch Break' },
    setting: { bn: 'অফিস / দোকান কর্মক্ষেত্র', en: 'Shop / office break room' },
    lines: [
      { speaker: 'Nuovo', it: 'Buongiorno! A che ora inizia il mio turno domani?', tr: { bn: 'শুভ সকাল! আগামীকাল আমার শিফট কয়টায় শুরু হবে?', en: 'Good morning! What time does my shift start tomorrow?' } },
      { speaker: 'Collega', it: 'Domani inizi alle nove. La pausa pranzo è all’una.', tr: { bn: 'আগামীকাল ৯টায় শুরু করবে। দুপুরের বিরতি ১টায়।', en: 'Tomorrow you start at nine. Lunch break is at one.' } },
      { speaker: 'Nuovo', it: 'Perfetto, grazie! E giovedì è il mio giorno di riposo?', tr: { bn: 'দারুণ, ধন্যবাদ! আর বৃহস্পতিবার কি আমার ছুটির দিন?', en: 'Perfect, thanks! And is Thursday my day off?' } },
      { speaker: 'Collega', it: 'Sì esatto, giovedì sei libero!', tr: { bn: 'হ্যাঁ ঠিক তাই, বৃহস্পতিবার তোমার ছুটি!', en: 'Yes exactly, Thursday you are off!' } },
    ],
    checkQuestion: { bn: 'সহকর্মীর মতে আগামীকালের বিরতি কখন?', en: 'When is the lunch break tomorrow?' },
    checkOptions: [
      { bn: 'দুপুর ১টায় (all’una)', en: 'At 1:00 PM (all’una)' },
      { bn: 'সকাল ৯টায়', en: 'At 9:00 AM' },
      { bn: 'বৃহস্পতিবার সারাদিন', en: 'All Thursday' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-wrk-2',
    topicId: 'workplace',
    title: { bn: '১১বি. কাজ শেষ ও নতুন নির্দেশনা', en: '11B. Finishing a Task Politely' },
    setting: { bn: 'ওয়ার্কপ্লেস কাউন্টার', en: 'Workplace desk' },
    lines: [
      { speaker: 'Lavoratore', it: 'Scusi, ho finito questo lavoro. Cosa devo fare adesso?', tr: { bn: 'মাফ করবেন, আমি এই কাজটি শেষ করেছি। এখন কী করতে হবে?', en: 'Excuse me, I finished this job. What should I do now?' } },
      { speaker: 'Responsabile', it: 'Ottimo lavoro! Adesso mandi un’email al cliente per confermare.', tr: { bn: 'দারুণ কাজ! এখন নিশ্চিত করতে ক্লায়েন্টকে একটি ইমেইল পাঠান।', en: 'Great work! Now send an email to the client to confirm.' } },
      { speaker: 'Lavoratore', it: 'Subito! Buon lavoro anche a Lei.', tr: { bn: 'এখনই পাঠাচ্ছি! আপনারও কাজ ভালো হোক।', en: 'Right away! Have a good workday too.' } },
    ],
    checkQuestion: { bn: 'কাজ শেষে ম্যানেজার কী করতে বললেন?', en: 'What did the manager ask next?' },
    checkOptions: [
      { bn: 'ক্লায়েন্টকে নিশ্চিতকরণ ইমেইল পাঠাতে', en: 'Send a confirmation email to the client' },
      { bn: 'বাড়ি চলে যেতে', en: 'Go home early' },
      { bn: 'দোকান বন্ধ করতে', en: 'Close the shop' },
    ],
    checkAnswer: 0,
  },

  // 12. Help (2)
  {
    id: 'ec-dlg-hlp-1',
    topicId: 'help',
    title: { bn: '১২এ. ফোনের চার্জ শেষ, সাহায্য চাওয়া', en: '12A. Dead Phone & Asking Directions' },
    setting: { bn: 'ট্রেন স্টেশনের বাইরে', en: 'Outside a station' },
    lines: [
      { speaker: 'Ragazzo', it: 'Scusi, ho bisogno di aiuto! Il mio telefono non ha batteria.', tr: { bn: 'মাফ করবেন, আমার সাহায্য দরকার! আমার ফোনের চার্জ শেষ।', en: 'Excuse me, I need help! My phone has no battery.' } },
      { speaker: 'Signora', it: 'Mi dica pure! Come posso aiutarla?', tr: { bn: 'অবশ্যই বলুন! কীভাবে সাহায্য করতে পারি?', en: 'Tell me! How can I help you?' } },
      { speaker: 'Ragazzo', it: 'Cerco Via Roma dieci. Può scrivere la strada su questo foglio?', tr: { bn: 'আমি ১০ ভিয়া রোমা খুঁজছি। কাগজে রাস্তাটা একটু লিখে দেবেন?', en: 'I am looking for Via Roma 10. Can you write the street on this paper?' } },
    ],
    checkQuestion: { bn: 'তরুণের ফোনের কী সমস্যা হয়েছে?', en: 'What happened to the young man’s phone?' },
    checkOptions: [
      { bn: 'চার্জ শেষ হয়ে গেছে', en: 'The battery ran out' },
      { bn: 'ফোন হারিয়ে গেছে', en: 'It was stolen' },
      { bn: 'সিম কার্ড ভেঙে গেছে', en: 'SIM card broke' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-hlp-2',
    topicId: 'help',
    title: { bn: '১২বি. মানিব্যাগ হারানো', en: '12B. Reporting a Lost Wallet' },
    setting: { bn: 'তথ্য কেন্দ্র', en: 'Station help desk' },
    lines: [
      { speaker: 'Turista', it: 'Mi aiuti per favore! Ho perso il mio portafoglio sul treno.', tr: { bn: 'দয়া করে আমাকে সাহায্য করুন! ট্রেনে আমার মানিব্যাগ হারিয়ে গেছে।', en: 'Please help me! I lost my wallet on the train.' } },
      { speaker: 'Agente', it: 'Calma, c’è l’ufficio oggetti smarriti qui accanto, e poi può andare alla polizia.', tr: { bn: 'শান্ত হোন, পাশেই লস্ট-অ্যান্ড-ফাউন্ড অফিস আছে, এরপর পুলিশে রিপোর্ট করতে পারবেন।', en: 'Stay calm, the lost-and-found office is right next door, and then you can go to the police.' } },
      { speaker: 'Turista', it: 'Grazie infinite per il suo aiuto!', tr: { bn: 'আপনার সাহায্যের জন্য অশেষ ধন্যবাদ!', en: 'Thank you so much for your help!' } },
    ],
    checkQuestion: { bn: 'অফিসার প্রথমে কোথায় যেতে বললেন?', en: 'Where did the officer point first?' },
    checkOptions: [
      { bn: 'লস্ট-অ্যান্ড-ফাউন্ড অফিসে (oggetti smarriti)', en: 'Lost-and-found office (oggetti smarriti)' },
      { bn: 'বিমানবন্দরে', en: 'To the airport' },
      { bn: 'সুপারমার্কেটে', en: 'To the supermarket' },
    ],
    checkAnswer: 0,
  },

  // 13. Telephone (2)
  {
    id: 'ec-dlg-tel-1',
    topicId: 'telephone',
    title: { bn: '১৩এ. অফিসে ফোন কল', en: '13A. Calling an Office by Phone' },
    setting: { bn: 'দাপ্তরিক ফোনালাপ', en: 'Formal office telephone call' },
    lines: [
      { speaker: 'Segretaria', it: 'Pronto, Studio Conti, buongiorno!', tr: { bn: 'হ্যালো, কন্তি অফিস, শুভ সকাল!', en: 'Hello, Conti Office, good morning!' } },
      { speaker: 'Chiamante', it: 'Buongiorno, sono Amir. Parlo con il dottor Conti?', tr: { bn: 'শুভ সকাল, আমি আমির। আমি কি ডক্টর কন্তির সাথে কথা বলছি?', en: 'Good morning, this is Amir. Am I speaking with Dr. Conti?' } },
      { speaker: 'Segretaria', it: 'Un attimo in linea, glielo passo subito.', tr: { bn: 'এক মুহূর্ত লাইনে থাকুন, এখনই তাঁকে দিচ্ছি।', en: 'One moment on the line, I will put him right through.' } },
    ],
    checkQuestion: { bn: 'ফোন ধরার পর প্রথমে ইতালিয়ানে কী বলা হয়?', en: 'What greeting opens an Italian phone call?' },
    checkOptions: [
      { bn: 'Pronto! (হ্যালো — ফোনে)', en: 'Pronto!' },
      { bn: 'Arrivederci! (বিদায়)', en: 'Arrivederci!' },
      { bn: 'Prego! (স্বাগতম / দয়া করে)', en: 'Prego!' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-tel-2',
    topicId: 'telephone',
    title: { bn: '১৩বি. দুর্বল সিগন্যাল ও বার্তা রাখা', en: '13B. Bad Signal & Leaving a Message' },
    setting: { bn: 'মোবাইল ফোনালাপ', en: 'Mobile phone call' },
    lines: [
      { speaker: 'Luca', it: 'Pronto? Non si sente bene, la linea cade!', tr: { bn: 'হ্যালো? ভালো শোনা যাচ্ছে না, লাইন কেটে যাচ্ছে!', en: 'Hello? I cannot hear well, the line is breaking up!' } },
      { speaker: 'Mina', it: 'Ciao Luca, ti sento poco! Ti mando un messaggio su WhatsApp adesso.', tr: { bn: 'হ্যালো লুকা, খুব কম শুনছি! আমি এখনই হোয়াটসঅ্যাপে মেসেজ পাঠাচ্ছি।', en: 'Hi Luca, I barely hear you! I am sending a WhatsApp message now.' } },
      { speaker: 'Luca', it: 'Perfetto, ti richiamo tra dieci minuti quando scendo dal treno.', tr: { bn: 'দারুণ, ট্রেন থেকে নেমে দশ মিনিট পর আবার কল করছি।', en: 'Great, I will call you back in ten minutes off the train.' } },
    ],
    checkQuestion: { bn: 'মিনা কীভাবে যোগাযোগ করতে চাইলেন?', en: 'How did Mina decide to follow up?' },
    checkOptions: [
      { bn: 'হোয়াটসঅ্যাপে মেসেজ পাঠিয়ে', en: 'By sending a WhatsApp message' },
      { bn: 'চিঠি পাঠিয়ে', en: 'By mailing a letter' },
      { bn: 'কথা বলা বন্ধ করে', en: 'By hanging up forever' },
    ],
    checkAnswer: 0,
  },

  // 14. Appointments (2)
  {
    id: 'ec-dlg-apt-1',
    topicId: 'appointments',
    title: { bn: '১৪এ. মিটিংয়ের সময় ঠিক করা', en: '14A. Agreeing on an Appointment Time' },
    setting: { bn: 'অ্যাপয়েন্টমেন্ট নির্ধারণ', en: 'Scheduling a meeting' },
    lines: [
      { speaker: 'A', it: 'Vorrei fissare un appuntamento questa settimana. Quando è disponibile?', tr: { bn: 'আমি এই সপ্তাহে একটি অ্যাপয়েন্টমেন্ট চাই। আপনি কখন ফ্রি আছেন?', en: 'I would like to make an appointment this week. When are you free?' } },
      { speaker: 'B', it: 'Va bene mercoledì alle sedici?', tr: { bn: 'বুধবার বিকেল ৪টায় কি চলবে?', en: 'Is Wednesday at 4:00 PM okay?' } },
      { speaker: 'A', it: 'Purtroppo alle sedici lavoro. Va bene giovedì alle dieci di mattina?', tr: { bn: 'দুর্ভাগ্যবশত ৪টায় আমার কাজ। বৃহস্পতিবার সকাল ১০টায় চলবে?', en: 'Unfortunately I work at 4:00. Does Thursday at 10:00 AM work?' } },
      { speaker: 'B', it: 'Sì, confermo giovedì alle dieci precise. Porti un documento!', tr: { bn: 'হ্যাঁ, বৃহস্পতিবার ঠিক ১০টায় নিশ্চিত। একটি পরিচয়পত্র নিয়ে আসবেন!', en: 'Yes, confirmed for Thursday at ten sharp. Bring an ID!' } },
    ],
    checkQuestion: { bn: 'অ্যাপয়েন্টমেন্টটি শেষ পর্যন্ত কখন নির্ধারিত হলো?', en: 'When was the appointment finally confirmed?' },
    checkOptions: [
      { bn: 'বৃহস্পতিবার সকাল ১০টায়', en: 'Thursday at 10:00 AM' },
      { bn: 'বুধবার বিকেল ৪টায়', en: 'Wednesday at 4:00 PM' },
      { bn: 'শুক্রবার সন্ধ্যা ৬টায়', en: 'Friday at 6:00 PM' },
    ],
    checkAnswer: 0,
  },
  {
    id: 'ec-dlg-apt-2',
    topicId: 'appointments',
    title: { bn: '১৪বি. অ্যাপয়েন্টমেন্ট পিছিয়ে দেওয়া', en: '14B. Rescheduling an Appointment' },
    setting: { bn: 'ফোনে সময় পরিবর্তন', en: 'Rescheduling by phone' },
    lines: [
      { speaker: 'Cliente', it: 'Buongiorno, posso spostare l’appuntamento di domani alle quindici?', tr: { bn: 'শুভ সকাল, আমি কি আগামীকাল বিকেল ৩টার অ্যাপয়েন্টমেন্ট বদলাতে পারি?', en: 'Good morning, can I reschedule tomorrow’s 3:00 PM appointment?' } },
      { speaker: 'Operatore', it: 'Certamente, nessun problema. Preferisce lunedì prossimo?', tr: { bn: 'অবশ্যই, কোনো সমস্যা নেই। আগামী সোমবার কি সুবিধাজনক হবে?', en: 'Certainly, no problem. Would you prefer next Monday?' } },
      { speaker: 'Cliente', it: 'Sì, lunedì alle undici è perfetto. Grazie mille!', tr: { bn: 'হ্যাঁ, সোমবার ১১টায় একদম ঠিক আছে। অনেক ধন্যবাদ!', en: 'Yes, Monday at 11:00 is perfect. Thanks!' } },
    ],
    checkQuestion: { bn: 'নতুন অ্যাপয়েন্টমেন্ট কোন দিন নেওয়া হয়েছে?', en: 'Which day was the rescheduled appointment set for?' },
    checkOptions: [
      { bn: 'আগামী সোমবার ১১টায়', en: 'Next Monday at 11:00' },
      { bn: 'আগামীকাল বিকেল ৩টায়', en: 'Tomorrow at 3:00 PM' },
      { bn: 'বাতিল করা হয়েছে', en: 'Canceled completely' },
    ],
    checkAnswer: 0,
  },
];

export const EVERYDAY_COMM_THEORY_CONFIG: AcademyTheoryConfig = {
  moduleId: 'everyday-communication',
  title: { bn: 'দৈনন্দিন যোগাযোগ (Everyday Communication)', en: 'Everyday Communication Across 14 Situations' },
  subtitle: {
    bn: 'ক্যাফে, সুপারমার্কেট, ভ্রমণ, হোটেল, স্বাস্থ্য, বিশ্ববিদ্যালয়, কাজ, ফোন ও অ্যাপয়েন্টমেন্ট',
    en: '154 real-life expressions and 28 interactive dialogues across 14 essential daily situations',
  },
  intro: {
    bn: 'বাস্তব জীবনে ইতালিয়ান বলার জন্য গ্রামারের পাশাপাশি পরিস্থিতিভিত্তিক ভদ্র ও প্রাকৃতিক বাক্য জানা অপরিহার্য। মনে রাখবেন: অপরিচিত বা স্টাফদের সাথে কথা বলার সময় সবসময় "Scusi" (মাফ করবেন), "Vorrei..." (আমি চাই—চাইতে গেলে ভদ্র উপায়), "Per favore" এবং "Grazie" ব্যবহার করবেন।',
    en: 'Speaking Italian in daily life relies on polite, situation-ready formulas. Remember the golden A1 trio with strangers and staff: "Scusi" (excuse me), "Vorrei..." (I would like—far politer than "Voglio"), and "Per favore / Grazie".',
  },
  highlights: [
    { label: '14 Topics', caption: { bn: 'ক্যাফে থেকে ডাক্তার, ফোন ও অফিস পর্যন্ত', en: 'Café to doctor, phone calls & appointments' } },
    { label: '154 Phrases', caption: { bn: 'অডিওসহ সম্পূর্ণ অনুশীলন বাক্য', en: '154 situational phrases with TTS audio' } },
    { label: '28 Dialogues', caption: { bn: 'প্রতিটি বিষয়ে ২টি করে বাস্তব সংলাপ ও কুইজ', en: '2 realistic dialogues + checks per topic' } },
  ],
  sections: [
    {
      id: 'ec-politeness-core',
      heading: { bn: '১. দোকানে ও অফিসে ভদ্র অনুরোধের মূল কাঠামো', en: '1. Polite Request Patterns Across Every Situation' },
      summary: {
        bn: 'ইতালিতে দোকান, হোটেল, ফার্মেসি বা অফিসে ব্যবহারযোগ্য সবচেয়ে কার্যকর ৫টি বাক্য কাঠামো।',
        en: 'Five high-leverage templates that unlock almost any everyday transaction.',
      },
      table: {
        headers: [
          { bn: 'কাঠামো', en: 'Pattern' },
          { bn: 'ব্যবহার', en: 'Situation' },
          { bn: 'অর্থ', en: 'Meaning' },
        ],
        rows: [
          { cells: ['Vorrei + [জিনিস]...', { bn: 'দোকান/ক্যাফে/বুকিং', en: 'Café / Shop / Booking' }, { bn: 'আমি ... চাই (বিনীত)', en: 'I would like...' }], audioIt: 'Vorrei un caffè, per favore.' },
          { cells: ['Scusi, dov’è...?', { bn: 'রাস্তা/সুপারমার্কেট/স্টেশন', en: 'Street / Store / Station' }, { bn: 'মাফ করবেন, ... কোথায়?', en: 'Excuse me, where is...?' }], audioIt: 'Scusi, dov’è la stazione?' },
          { cells: ['Quanto costa / costano...?', { bn: 'দাম জিজ্ঞাসা', en: 'Prices' }, { bn: 'এটির / এগুলোর দাম কত?', en: 'How much does it/do they cost?' }], audioIt: 'Quanto costa questo?' },
          { cells: ['Posso + [ক্রিয়া]?', { bn: 'অনুমতি/চেক করা', en: 'Permission' }, { bn: 'আমি কি ... করতে পারি?', en: 'May I / Can I...?' }], audioIt: 'Posso pagare con la carta?' },
          { cells: ['Può + [ক্রিয়া]?', { bn: 'অন্যকে অনুরোধ', en: 'Polite favor' }, { bn: 'আপনি কি ... করতে পারবেন?', en: 'Could you...?' }], audioIt: 'Può ripetere, per favore?' },
        ],
      },
    },
    {
      id: 'ec-real-world-tips',
      heading: { bn: '২. ক্যাফে, বাস, ফার্মেসি ও ফোনের গুরুত্বপূর্ণ নিয়ম', en: '2. Key Cultural & Language Rules in Daily Situations' },
      summary: {
        bn: 'অন্য দেশে গিয়ে সাধারণত যেসব বাস্তব বিষয় জানা না থাকলে বিভ্রান্তি হয়।',
        en: 'Practical distinctions that make daily communication effortless.',
      },
      rules: [
        {
          id: 'ec-rule-coffee-ticket',
          title: { bn: 'al banco vs al tavolo এবং টিকিট পাঞ্চ করা', en: 'At the Counter vs. Table & Validating Tickets' },
          body: {
            bn: 'ক্যাফেতে কাউন্টারে দাঁড়িয়ে খেলে ("al banco") দাম কম, আর টেবিলে বসে সার্ভিস নিলে ("al tavolo") দাম বেশি হতে পারে। বাস ও আঞ্চলিক ট্রেনে টিকিট কেনার পর মেশিনে অবশ্যই "convalidare" (পাঞ্চ) করতে হয়।',
            en: 'At bars, drinking at the counter ("al banco") usually costs less than table service ("al tavolo"). On city buses and regional trains, always validate paper tickets in the stamping machine ("convalidare").',
          },
          examples: [
            { it: 'Prendo un caffè al banco.', phoneticBn: 'প্রেন-দো উন কাফ-ফে আল বান-কো', phoneticEn: 'PREHN-doh oon kahf-FEH ahl BAHN-koh', tr: { bn: 'আমি কাউন্টারে এক কাপ কফি নিচ্ছি।', en: 'I am having coffee at the counter.' } },
            { it: 'Convalido il biglietto sull’autobus.', phoneticBn: 'কোন-ভা-লি-দো ইল বিল-ইয়েৎ-তো', phoneticEn: 'kohn-VAH-lee-doh eel bee-LYEHT-toh', tr: { bn: 'আমি বাসে টিকিট পাঞ্চ করছি।', en: 'I am validating the ticket on the bus.' } },
          ],
        },
      ],
      mistakes: [
        {
          wrong: 'Voglio un biglietto!',
          right: 'Vorrei un biglietto, per favore.',
          explanation: {
            bn: 'দোকানদার বা কর্মচারীর কাছে সরাসরি "Voglio" বললে রূঢ় শোনায়; সবসময় "Vorrei" ব্যবহার করুন।',
            en: '"Voglio" (I want) sounds abrupt to staff; always soften requests with "Vorrei" (I would like).',
          },
        },
        {
          wrong: 'Quanto è soldi?',
          right: 'Quanto costa? / Quanto viene?',
          explanation: {
            bn: 'দাম জানতে একবচনে "Quanto costa?" এবং বহুবচনে "Quanto costano?" বলুন।',
            en: 'Ask prices with "Quanto costa?" (singular) or "Quanto viene?" at a café/register.',
          },
        },
      ],
    },
  ],
};

export const A1_EVERYDAY_COMM_REQUIRED_IDS: string[] = [
  ...EVERYDAY_COMM_EXPRESSIONS.map((item) => item.id),
  ...EVERYDAY_COMM_DIALOGUES.map((d) => d.id),
];

export const A1_EVERYDAY_COMM_DRILL_ITEMS: AcademyDrillItem[] = [
  {
    id: 'ec-dr-01',
    drillKind: 'mcq',
    audioIt: 'Vorrei un tavolo per due, per favore.',
    primaryLabel: 'Vorrei...',
    secondaryLabel: 'ভদ্রভাবে চাওয়া',
    promptOverride: { bn: 'রেস্তোরাঁয় ভদ্রভাবে কিছু চাইতে কোনটি সঠিক?', en: 'Which is the polite way to ask in a restaurant or shop?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Vorrei un caffè, per favore.' },
      { id: 'o2', primaryLabel: 'Voglio un caffè adesso.' },
      { id: 'o3', primaryLabel: 'Dammi caffè.' },
      { id: 'o4', primaryLabel: 'Prendi un caffè.' },
    ],
    cueBn: 'ভোর-রেই উন কাফ-ফে',
    cueEn: 'Use "Vorrei..." (I would like) instead of blunt "Voglio".',
    feedbackDetail: {
      bn: 'দোকান ও রেস্তোরাঁয় "Vorrei" সবচেয়ে ভদ্র এবং প্রচলিত।',
      en: '"Vorrei..." is standard polite Italian in shops and restaurants.',
    },
  },
  {
    id: 'ec-dr-02',
    drillKind: 'mcq',
    audioIt: 'Pronto? Chi parla?',
    primaryLabel: 'Pronto?',
    secondaryLabel: 'ফোন ধরার সম্ভাষণ',
    promptOverride: { bn: 'ইতালিতে ফোন কল রিসিভ করে প্রথমে কী বলতে হয়?', en: 'How do Italians greet someone when answering the phone?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Pronto?' },
      { id: 'o2', primaryLabel: 'Benvenuto?' },
      { id: 'o3', primaryLabel: 'Prego?' },
      { id: 'o4', primaryLabel: 'Subito?' },
    ],
    cueBn: 'প্রোন-তো',
    cueEn: 'Phone calls always start with "Pronto?" (Ready/Hello).',
    feedbackDetail: {
      bn: 'ফোন ধরার সময় ইতালিয়ানে সবসময় "Pronto?" বলা হয়।',
      en: '"Pronto?" is the universal Italian telephone greeting.',
    },
  },
  {
    id: 'ec-dr-03',
    drillKind: 'matching',
    audioIt: 'binario, scontrino, ricetta, camerino',
    primaryLabel: 'Daily Words',
    secondaryLabel: 'দৈনন্দিন শব্দ মেলান',
    promptOverride: { bn: 'পরিস্থিতি অনুযায়ী সঠিক শব্দটি মেলান:', en: 'Match each daily Italian term to its meaning:' },
    matchingPairs: [
      { id: 'm1', leftIt: 'il binario', rightTr: { bn: 'ট্রেনের প্ল্যাটফর্ম', en: 'train platform' } },
      { id: 'm2', leftIt: 'lo scontrino', rightTr: { bn: 'দোকানের রসিদ', en: 'store receipt' } },
      { id: 'm3', leftIt: 'la ricetta medica', rightTr: { bn: 'ডাক্তারের প্রেসক্রিপশন', en: 'doctor prescription' } },
      { id: 'm4', leftIt: 'il camerino', rightTr: { bn: 'পোশাক পরার ঘর', en: 'fitting room' } },
    ],
    cueBn: 'বি-না-রিও / স্কোন-ত্রি-নো',
    cueEn: 'Station, checkout, pharmacy, and clothing store vocabulary.',
    feedbackDetail: {
      bn: 'binario = প্ল্যাটফর্ম, scontrino = রসিদ, ricetta = প্রেসক্রিপশন, camerino = ট্রায়াল রুম।',
      en: 'Essential nouns for travel, shopping, and pharmacy visits.',
    },
  },
  {
    id: 'ec-dr-04',
    drillKind: 'listening',
    audioIt: 'Giri a sinistra al semaforo.',
    primaryLabel: 'Turn left at the light',
    secondaryLabel: 'সিগন্যালে বামে ঘুরুন',
    promptOverride: { bn: 'নির্দেশনাটি শুনুন এবং সঠিক অর্থ বেছে নিন:', en: 'Listen to the direction and choose its meaning:' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Turn left at the traffic light', secondaryLabel: 'Giri a sinistra al semaforo' },
      { id: 'o2', primaryLabel: 'Turn right at the corner', secondaryLabel: 'a destra' },
      { id: 'o3', primaryLabel: 'Go straight for 100m', secondaryLabel: 'sempre dritto' },
      { id: 'o4', primaryLabel: 'Cross the square', secondaryLabel: 'attraversi' },
    ],
    cueBn: 'জি-রি আ সি-নিস-ত্রা আল সে-মা-ফো-রো',
    cueEn: '"a sinistra" = to the left; "semaforo" = traffic light.',
    feedbackDetail: {
      bn: 'a sinistra = বামে, a destra = ডানে, sempre dritto = সোজা।',
      en: 'Remember: sinistra = left, destra = right.',
    },
  },
  {
    id: 'ec-dr-05',
    drillKind: 'sentence-builder',
    audioIt: 'Quanto costa questo biglietto?',
    primaryLabel: 'Asking Price',
    secondaryLabel: 'দাম জিজ্ঞাসা করা',
    promptOverride: { bn: '“এই টিকিটের দাম কত?” — শব্দগুলো সাজান:', en: 'Order the words: "How much does this ticket cost?"' },
    sentenceTokens: ['costa', 'biglietto?', 'Quanto', 'questo'],
    acceptedSentences: ['Quanto costa questo biglietto?'],
    cueBn: 'কুয়ান-তো কোস-তা কুয়েস-তো বিল-ইয়েৎ-তো',
    cueEn: 'Quanto costa + singular noun.',
    feedbackDetail: {
      bn: 'একবচনের দাম জানতে "Quanto costa + বিশেষ্য?" ব্যবহার হয়।',
      en: 'Use "Quanto costa" with singular items.',
    },
  },
  {
    id: 'ec-dr-06',
    drillKind: 'fill-blank',
    audioIt: 'Ho mal di testa da stamattina.',
    primaryLabel: 'mal di testa',
    secondaryLabel: 'মাথাব্যথা',
    promptOverride: { bn: '“আমার মাথা ব্যথা করছে” বলতে শূন্যস্থান পূরণ করুন: Ho mal ___ testa.', en: 'Complete: Ho mal ___ testa. (I have a headache)' },
    promptIt: 'Ho mal ___ testa.',
    explicitOptions: [
      { id: 'o1', primaryLabel: 'di' },
      { id: 'o2', primaryLabel: 'in' },
      { id: 'o3', primaryLabel: 'da' },
      { id: 'o4', primaryLabel: 'su' },
    ],
    cueBn: 'ও মাল দি তেস-তা',
    cueEn: 'Body aches always use "mal di + body part".',
    feedbackDetail: {
      bn: 'mal di testa, mal di gola, mal di stomaco — সব ক্ষেত্রে "di" বসে।',
      en: 'Pain expressions take "mal di + body part".',
    },
  },
  {
    id: 'ec-dr-07',
    drillKind: 'matching',
    audioIt: 'disdire, spostare, confermare, fissare',
    primaryLabel: 'Appointments',
    secondaryLabel: 'অ্যাপয়েন্টমেন্ট ক্রিয়া',
    promptOverride: { bn: 'অ্যাপয়েন্টমেন্ট সংক্রান্ত ক্রিয়াগুলোর অর্থ মেলান:', en: 'Match each appointment verb to its meaning:' },
    matchingPairs: [
      { id: 'a1', leftIt: 'fissare', rightTr: { bn: 'সময় ঠিক করা', en: 'to schedule / set' } },
      { id: 'a2', leftIt: 'confermare', rightTr: { bn: 'নিশ্চিত করা', en: 'to confirm' } },
      { id: 'a3', leftIt: 'spostare', rightTr: { bn: 'সময় বদলানো / পেছানো', en: 'to reschedule / move' } },
      { id: 'a4', leftIt: 'disdire', rightTr: { bn: 'বাতিল করা', en: 'to cancel' } },
    ],
    cueBn: 'ফিস-সা-রে / কোন-ফের-মা-রে',
    cueEn: 'Schedule, confirm, move, cancel.',
    feedbackDetail: {
      bn: 'ডাক্তার, অফিস বা মিটিংয়ের জন্য এই চারটি ক্রিয়া খুবই জরুরি।',
      en: 'Essential verbs for appointments and bookings.',
    },
  },
  {
    id: 'ec-dr-08',
    drillKind: 'listening',
    audioIt: 'Il conto, per favore.',
    primaryLabel: 'Il conto, per favore.',
    secondaryLabel: 'বিল চাওয়া',
    promptOverride: { bn: 'অডিওটি শুনে কোন পরিস্থিতির বাক্য তা বেছে নিন:', en: 'Listen and choose what this phrase asks for:' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Asking for the restaurant bill', secondaryLabel: 'Il conto' },
      { id: 'o2', primaryLabel: 'Asking for the fitting room', secondaryLabel: 'Il camerino' },
      { id: 'o3', primaryLabel: 'Asking for a bus stop', secondaryLabel: 'La fermata' },
      { id: 'o4', primaryLabel: 'Asking for the check-out time', secondaryLabel: 'Il check-out' },
    ],
    cueBn: 'ইল কোন-তো পের ফা-ভো-রে',
    cueEn: '"Il conto" = restaurant bill/check.',
    feedbackDetail: {
      bn: 'রেস্তোরাঁয় বিল আনতে বলতে "Il conto, per favore" বলা হয়।',
      en: 'Ask for the check at any restaurant with "Il conto, per favore".',
    },
  },
  {
    id: 'ec-dr-09',
    drillKind: 'sentence-builder',
    audioIt: 'Scusi, può parlare più lentamente?',
    primaryLabel: 'Classroom / Help',
    secondaryLabel: 'ধীরে কথা বলতে বলা',
    promptOverride: { bn: '“মাফ করবেন, আপনি কি আরও ধীরে কথা বলতে পারেন?” — বাক্য বানান:', en: 'Build: "Excuse me, can you speak more slowly?"' },
    sentenceTokens: ['lentamente?', 'può', 'Scusi,', 'parlare', 'più'],
    acceptedSentences: ['Scusi, può parlare più lentamente?'],
    cueBn: 'স্কু-জি পু-ও পার-লা-রে পিউ লেন-তা-মেন-তে',
    cueEn: 'A polite lifesaver for A1 learners everywhere in Italy.',
    feedbackDetail: {
      bn: 'ক্লাসে বা অফিসে বুঝতে কষ্ট হলে এটি সবচেয়ে কার্যকর ভদ্র প্রশ্ন।',
      en: 'Always combine "Scusi" + "può parlare più lentamente?" when someone speaks fast.',
    },
  },
  {
    id: 'ec-dr-10',
    drillKind: 'mcq',
    audioIt: 'Possiamo pagare separati?',
    primaryLabel: 'pagare separati',
    secondaryLabel: 'আলাদাভাবে পেমেন্ট',
    promptOverride: { bn: 'বন্ধুদের সাথে রেস্তোরাঁয় আলাদাভাবে বিল দিতে চাইলে কী বলবেন?', en: 'How do you ask to split/pay the restaurant bill separately?' },
    explicitOptions: [
      { id: 'o1', primaryLabel: 'Possiamo pagare separati?' },
      { id: 'o2', primaryLabel: 'Abbiamo uno sconto?' },
      { id: 'o3', primaryLabel: 'Prende al banco?' },
      { id: 'o4', primaryLabel: 'Serve una busta?' },
    ],
    cueBn: 'পোস-সিয়া-মো পা-গা-রে সে-পা-রা-তি',
    cueEn: '"pagare separati" = to pay separately.',
    feedbackDetail: {
      bn: 'আলাদাভাবে বিল পরিশোধ করতে "Possiamo pagare separati?" বলুন।',
      en: 'Ask "Possiamo pagare separati?" before the cashier rings you up.',
    },
  },
];

function ecq(
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
    moduleId: 'everyday-communication',
    prompt: { bn: bnPrompt, en: enPrompt },
    it,
    audioIt,
    options,
    localizedOptions,
    answer,
    explanation: { bn: bnExp, en: enExp },
  };
}

// 28 exam questions (covering all 14 everyday communication topics)
export const A1_EVERYDAY_COMM_EXAM_POOL: AcademyExamQuestion[] = [
  ecq('ecq-01', 'রেস্তোরাঁয় খাওয়া শেষে বিল চাইতে কী বলবেন?', 'How do you politely ask for the bill at a restaurant?', undefined, ['Il conto, per favore.', 'La ricetta, per favore.', 'Il binario, per favore.', 'Lo scontrino subito!'], 0, '"Il conto, per favore" অর্থ দয়া করে বিলটা দিন।', '"Il conto, per favore" means "The bill, please."', 'Il conto, per favore.'),
  ecq('ecq-02', 'সাধারণ (গ্যাস ছাড়া) পানি চাইলে কোন শব্দটি বেছে নেবেন?', 'How do you order still (non-sparkling) water?', undefined, ['acqua frizzante', 'acqua naturale', 'acqua calda', 'acqua gassata'], 1, 'acqua naturale = সাধারণ পানি, acqua frizzante = গ্যাসযুক্ত পানি।', 'acqua naturale = still water; acqua frizzante = sparkling water.', 'Acqua naturale, per favore.'),
  ecq('ecq-03', 'সুপারমার্কেটে "due etti di prosciutto" অর্থ কত গ্রাম?', 'At a deli counter, how much is "due etti"?', 'Vorrei due etti di formaggio.', ['২০ গ্রাম', '২০০ গ্রাম', '২ কেজি', '৫০ গ্রাম'], 1, 'এক "etto" = ১০০ গ্রাম; তাই "due etti" = ২০০ গ্রাম।', 'One "etto" equals 100 grams, so "due etti" = 200 grams.', undefined, { bn: ['২০ গ্রাম', '২০০ গ্রাম', '২ কেজি', '৫০ গ্রাম'], en: ['20 grams', '200 grams', '2 kilograms', '50 grams'] }),
  ecq('ecq-04', 'প্যাকেটের মেয়াদের তারিখ কোন শব্দ দিয়ে লেখা থাকে?', 'Which phrase means "expiration date" on food?', undefined, ['data di nascita', 'data di scadenza', 'carta fedeltà', 'cassa rapida'], 1, '"data di scadenza" অর্থ মেয়াদ উত্তীর্ণের তারিখ।', '"data di scadenza" means expiration date.', 'Qual è la data di scadenza?'),
  ecq('ecq-05', 'কাপড়ের দোকানে “আমি কি এটি পরে দেখতে পারি?” — সঠিক কোনটি?', 'In a clothing store, how do you ask "Can I try it on?"', undefined, ['Posso provarlo?', 'Posso cambiarlo?', 'Posso spenderlo?', 'Posso fermarlo?'], 0, 'provare = চেষ্টা করা / পরে দেখা।', 'Use "provare" for trying on clothes.', 'Posso provarlo?'),
  ecq('ecq-06', 'জুতোর দোকানে "camerino" বলতে কী বোঝায়?', 'What is "il camerino" in a store?', 'Dov’è il camerino?', ['চেঞ্জিং / ট্রায়াল রুম', 'ক্যাশ কাউন্টার', 'বাইরের দরজা', 'গুদাম ঘর'], 0, 'পোশাক বদলে মাপ দেখার ঘরকে "il camerino" বলে।', '"il camerino" is the fitting room.', undefined, { bn: ['চেঞ্জিং / ট্রায়াল রুম', 'ক্যাশ কাউন্টার', 'বাইরের দরজা', 'গুদাম ঘর'], en: ['fitting room', 'checkout register', 'exit door', 'storage room'] }),
  ecq('ecq-07', '“ডান দিকে ঘুরুন” ইতালিয়ানে কোনটি?', 'How do you say "Turn right"?', undefined, ['Vada sempre dritto.', 'Giri a destra.', 'Giri a sinistra.', 'Attraversi la piazza.'], 1, 'a destra = ডানে, a sinistra = বামে।', 'a destra = right; a sinistra = left.', 'Giri a destra.'),
  ecq('ecq-08', '“ব্যাংকের ঠিক বিপরীতে” বলতে কোন শব্দগুচ্ছ সঠিক?', 'How do you say "across from / opposite the bank"?', undefined, ['di fronte alla banca', 'dentro alla banca', 'lontano dalla banca', 'sotto la banca'], 0, '"di fronte a" অর্থ সামনাসামনি বা বিপরীতে।', '"di fronte a" means opposite / across from.', 'È di fronte alla banca.'),
  ecq('ecq-09', 'বাসে ওঠার পর কাগজের টিকিট নিয়ে কী করতে হয়?', 'What must you do with a paper bus ticket on board?', undefined, ['convalidare il biglietto', 'disdire il biglietto', 'firmare il biglietto', 'cambiare il biglietto'], 0, 'বাস/ট্রামে উঠে মেশিনে টিকিট "convalidare" (পাঞ্চ) করতে হয়।', 'Paper transit tickets must be validated ("convalidare") on board.', 'Bisogna convalidare il biglietto.'),
  ecq('ecq-10', '“আমাকে পরের স্টপে নামতে হবে” — কোন ক্রিয়া ব্যবহৃত হয়?', 'Which sentence means "I need to get off at the next stop"?', undefined, ['Devo salire alla fermata.', 'Devo scendere alla prossima fermata.', 'Devo partire adesso.', 'Devo aspettare molto.'], 1, 'scendere = নেমে যাওয়া (যানবাহন থেকে)।', 'Use "scendere" for getting off a bus, tram, or train.', 'Devo scendere alla prossima fermata.'),
  ecq('ecq-11', 'রেলস্টেশনে "binario 4" বলতে কী বোঝায়?', 'At a train station, what is "binario 4"?', 'Il treno parte dal binario quattro.', ['৪ নম্বর সিট', '৪ নম্বর প্ল্যাটফর্ম/ট্র্যাক', '৪ নম্বর গেট', '৪ ইউরো ভাড়া'], 1, 'ট্রেন যে প্ল্যাটফর্ম থেকে ছাড়ে তাকে "binario" বলে।', '"binario" means train track / platform.', 'Il treno parte dal binario quattro.', { bn: ['৪ নম্বর সিট', '৪ নম্বর প্ল্যাটফর্ম/ট্র্যাক', '৪ নম্বর গেট', '৪ ইউরো ভাড়া'], en: ['Seat 4', 'Platform / track 4', 'Exit 4', '4 euro fare'] }),
  ecq('ecq-12', 'যাওয়া এবং আসা দুটোই একসাথে ট্রেনের টিকিটকে কী বলে?', 'What do you call a round-trip ticket?', undefined, ['sola andata', 'andata e ritorno', 'seconda classe', 'treno diretto'], 1, 'andata = যাওয়া, ritorno = ফিরে আসা।', 'andata e ritorno = round-trip ticket.', 'Un biglietto di andata e ritorno.'),
  ecq('ecq-13', 'হোটেলে চেক-ইন করার সময় কোনটি দেখাতে হয়?', 'What is typically requested for Italian hotel check-in?', undefined, ['tessera biblioteca', 'passaporto o documento', 'ricetta medica', 'biglietto del tram'], 1, 'আইন অনুযায়ী হোটেল চেক-ইনের জন্য পাসপোর্ট বা বৈধ পরিচয়পত্র প্রয়োজন।', 'Hotels require a passport or valid ID for check-in registration.'),
  ecq('ecq-14', '“নাশতা কি দামের মধ্যে অন্তর্ভুক্ত?” — সঠিক কোনটি?', 'How do you ask if breakfast is included?', undefined, ['La colazione è inclusa?', 'Il check-out è tardi?', 'La camera è doppia?', 'L’ascensore funziona?'], 0, 'colazione = সকালের নাশতা, inclusa = অন্তর্ভুক্ত।', '"La colazione è inclusa?" asks if breakfast is included.', 'La colazione è inclusa?'),
  ecq('ecq-15', '“আমার গলাব্যথা” ইতালিয়ানে কীভাবে বলবেন?', 'How do you say "I have a sore throat"?', undefined, ['Ho mal di testa.', 'Ho mal di gola.', 'Ho mal di schiena.', 'Ho mal di pancia.'], 1, 'gola = গলা; testa = মাথা; schiena = পিঠ।', 'gola = throat; testa = head; schiena = back.', 'Ho mal di gola.'),
  ecq('ecq-16', 'ফার্মেসিতে "farmacia di turno" মানে কী?', 'What is a "farmacia di turno"?', 'Cerco la farmacia di turno.', ['সবচেয়ে সস্তা ফার্মেসি', 'রাত বা ছুটির দিনের ডিউটি ফার্মেসি', 'শুধু হাসপাতালের দোকান', 'বন্ধ ফার্মেসি'], 1, 'রাত ও সরকারি ছুটির দিনে পালাক্রমে খোলা থাকা ফার্মেসিকে "di turno" বলে।', 'A pharmacy assigned to remain open during nights or holidays.', undefined, { bn: ['সবচেয়ে সস্তা ফার্মেসি', 'রাত বা ছুটির দিনের ডিউটি ফার্মেসি', 'শুধু হাসপাতালের দোকান', 'বন্ধ ফার্মেসি'], en: ['cheapest pharmacy', 'on-duty night/holiday pharmacy', 'hospital café', 'closed pharmacy'] }),
  ecq('ecq-17', 'ডাক্তার দেখানোর আগে রিসেপশনে কোন কার্ড দেখাতে হতে পারে?', 'Which public health card is used at clinics in Italy?', undefined, ['tessera sanitaria', 'patente di guida', 'carta sconto', 'abbonamento treno'], 0, 'ইতালিতে সরকারি স্বাস্থ্যসেবার জন্য "tessera sanitaria" ব্যবহৃত হয়।', 'The Italian health card is called "tessera sanitaria".', 'Ecco la mia tessera sanitaria.'),
  ecq('ecq-18', 'ডাক্তারের কাছে গিয়ে "Mi fa male qui" বললে কী বোঝায়?', 'What does "Mi fa male qui" tell the doctor?', 'Dottore, mi fa male qui.', ['আমার এখানে ব্যথা করছে', 'আমি এখনই বাড়ি যাব', 'ওষুধ খুব দামি', 'প্রেসক্রিপশন লাগবে না'], 0, 'Mi fa male = আমার ব্যথা করছে, qui = এখানে।', '"Mi fa male qui" literally means "It hurts me here".', 'Mi fa male qui.', { bn: ['আমার এখানে ব্যথা করছে', 'আমি এখনই বাড়ি যাব', 'ওষুধ খুব দামি', 'প্রেসক্রিপশন লাগবে না'], en: ['It hurts right here', 'I want to go home', 'Medicine is expensive', 'No prescription needed'] }),
  ecq('ecq-19', 'ক্লাসরুমে শিক্ষক দ্রুত বললে কী বলবেন?', 'How do you politely ask a teacher to slow down?', undefined, ['Può parlare più lentamente?', 'Può chiudere la porta?', 'Può uscire subito?', 'Quanto costa il corso?'], 0, 'più lentamente = আরও ধীরে।', '"più lentamente" means more slowly.', 'Può parlare più lentamente?'),
  ecq('ecq-20', 'বিশ্ববিদ্যালয়ের শিক্ষার্থী প্রশাসন অফিসকে ইতালিয়ানে কী বলে?', 'What is the university student administration office called?', undefined, ['segreteria studenti', 'deposito bagagli', 'sala d’attesa', 'tabaccheria'], 0, 'সেগ্রেতেরিয়া স্তুদেন্তি (segreteria studenti) = শিক্ষার্থী অফিস।', '"segreteria studenti" is the student administration office.', 'Dov’è la segreteria studenti?'),
  ecq('ecq-21', 'কর্মক্ষেত্রে "giorno di riposo" অর্থ কী?', 'At work, what is "il mio giorno di riposo"?', 'Domani è il mio giorno di riposo.', ['ওভারটাইম কাজের দিন', 'আমার ছুটির দিন (day off)', 'বেতন পাওয়ার দিন', 'অফিস মিটিংয়ের দিন'], 1, 'riposo = বিশ্রাম; কাজের ক্ষেত্রে সপ্তাহের ছুটির দিন।', '"giorno di riposo" means your day off work.', undefined, { bn: ['ওভারটাইম কাজের দিন', 'আমার ছুটির দিন (day off)', 'বেতন পাওয়ার দিন', 'অফিস মিটিংয়ের দিন'], en: ['overtime day', 'day off', 'payday', 'meeting day'] }),
  ecq('ecq-22', 'কাজের বিরতি বোঝাতে "pausa pranzo" মানে কী?', 'What is "la pausa pranzo" at work?', undefined, ['সকালের নাশতা', 'দুপুরের খাবারের বিরতি', 'রাতের শিফট', 'ছুটির আবেদন'], 1, 'pausa = বিরতি, pranzo = দুপুরের খাবার।', '"pausa pranzo" is the lunch break.', 'Quando facciamo la pausa pranzo?'),
  ecq('ecq-23', 'জরুরি প্রয়োজনে "Ho bisogno di aiuto" এর অর্থ কী?', 'What does "Ho bisogno di aiuto" mean?', 'Scusi, ho bisogno di aiuto!', ['আমার সাহায্য দরকার', 'আমি ব্যস্ত আছি', 'আমি বাসায় আছি', 'আমার ক্ষুধা নেই'], 0, 'avere bisogno di = প্রয়োজন হওয়া, aiuto = সাহায্য।', '"Ho bisogno di aiuto" means "I need help."', 'Ho bisogno di aiuto!', { bn: ['আমার সাহায্য দরকার', 'আমি ব্যস্ত আছি', 'আমি বাসায় আছি', 'আমার ক্ষুধা নেই'], en: ['I need help', 'I am busy', 'I am at home', 'I am not hungry'] }),
  ecq('ecq-24', 'ইতালিসহ ইউরোপে জরুরি অবস্থায় একক সাহায্য নম্বর কত?', 'What is the unified emergency phone number in Italy?', undefined, ['999', '112', '800', '411'], 1, 'পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্সের একক জরুরি নম্বর ১১২।', '112 is the unified emergency number in Italy and across the EU.'),
  ecq('ecq-25', 'ফোনে কথা বলার সময় "Rimanga in linea" মানে কী?', 'On the phone, what does "Rimanga in linea" ask you to do?', 'Un attimo, rimanga in linea.', ['ফোন কেটে দিতে', 'লাইনে অপেক্ষা করতে (Hold on)', 'জোরে চিৎকার করতে', 'মেসেজ পাঠাতে'], 1, 'rimanga in linea = লাইনে থাকুন / ধরে রাখুন।', '"Rimanga in linea" means "Please stay on the line / hold on."', undefined, { bn: ['ফোন কেটে দিতে', 'লাইনে অপেক্ষা করতে (Hold on)', 'জোরে চিৎকার করতে', 'মেসেজ পাঠাতে'], en: ['hang up', 'stay on the line / hold', 'speak louder', 'send a text'] }),
  ecq('ecq-26', 'ভুল নম্বরে ফোন চলে গেলে অপারেটর কী বলবেন?', 'Which phrase means "You dialed the wrong number"?', undefined, ['Ha sbagliato numero.', 'Il numero è libero.', 'La linea cade.', 'Ecco la password.'], 0, 'sbagliare numero = ভুল নম্বরে কল করা।', '"Ha sbagliato numero" means "You have the wrong number."', 'Ha sbagliato numero.'),
  ecq('ecq-27', 'অ্যাপয়েন্টমেন্ট বাতিল করতে চাইলে কোন ক্রিয়া ব্যবহার করবেন?', 'Which sentence means "I have to cancel the appointment"?', undefined, ['Devo disdire l’appuntamento.', 'Devo comprare l’appuntamento.', 'Devo pesare l’appuntamento.', 'Devo firmare la chiave.'], 0, 'disdire = কোনো বুকিং বা অ্যাপয়েন্টমেন্ট বাতিল করা।', '"disdire" is the standard verb for canceling a booking or appointment.', 'Devo disdire l’appuntamento.'),
  ecq('ecq-28', 'বুকিংয়ের সময় জিজ্ঞাসা করা হলো "Quando è disponibile?" — অর্থ কী?', 'What does "Quando è disponibile?" ask?', 'Quando è disponibile questa settimana?', ['কত টাকা লাগবে?', 'আপনি কখন ফ্রি / সময় দিতে পারবেন?', 'অফিস কোথায়?', 'আপনার নাম কী?'], 1, 'disponibile = অবসর বা সময় আছে এমন।', '"Quando è disponibile?" asks when someone is available.', 'Quando è disponibile?', { bn: ['কত টাকা লাগবে?', 'আপনি কখন ফ্রি / সময় দিতে পারবেন?', 'অফিস কোথায়?', 'আপনার নাম কী?'], en: ['How much will it cost?', 'When are you available?', 'Where is the office?', 'What is your name?'] }),
];
