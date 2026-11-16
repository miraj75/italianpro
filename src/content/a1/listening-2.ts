import type { ListeningExercise } from '../academyTypes';
import { buildListening } from '../builders';

export const A1_LISTENING_2: ListeningExercise[] = [
  buildListening({
    id: 'ls-a1-17',
    level: 'A1',
    kind: 'announcement',
    titleIt: 'Orario del museo',
    title: { bn: 'জাদুঘরের সময়সূচি ঘোষণা', en: 'Museum opening hours announcement' },
    topic: { bn: 'সময় ও সংস্কৃতি', en: 'Time & culture' },
    lines: [
      { speaker: 'Avviso', it: 'Gentili visitatori, il museo chiude alle ore diciannove. Il lunedì è sempre chiuso.', tr: { bn: 'সুধী দর্শনার্থীবৃন্দ, জাদুঘর সন্ধ্যা সাতটায় বন্ধ হয়। সোমবার জাদুঘর সবসময় বন্ধ থাকে।', en: 'Dear visitors, the museum closes at 7 PM. It is always closed on Mondays.' } },
      { speaker: 'Avviso', it: 'La biglietteria chiude trenta minuti prima. Grazie della visita.', tr: { bn: 'টিকিট কাউন্টার ত্রিশ মিনিট আগে বন্ধ হয়। ভ্রমণের জন্য ধন্যবাদ।', en: 'The ticket desk closes thirty minutes earlier. Thank you for visiting.' } },
    ],
    explanation: { bn: 'সপ্তাহের দিনের আগে "il lunedì" মানে প্রতি সোমবার।', en: '"il lunedì" means every Monday.' },
    vocabList: [
      { it: 'visitatori', tr: { bn: 'দর্শনার্থীরা', en: 'visitors' } },
      { it: 'biglietteria', tr: { bn: 'টিকিট কাউন্টার', en: 'ticket office' } },
    ],
    vocabKeys: ['w:A1:il museo', 'w:A1:lunedì', 'w:A1:chiuso'],
    grammarIds: ['ora-data', 'presente-ere-ire'],
    questions: [
      { id: 'ls17-q1', prompt: { bn: 'জাদুঘর কোন দিন বন্ধ থাকে?', en: 'Which day is the museum closed?' }, options: ['রবিবার', 'সোমবার', 'শনিবার', 'বুধবার'], answer: 1, explanation: { bn: 'সঠিক উত্তর: সোমবার — পাঠ্যাংশে বলা হয়েছে: «সুধী দর্শনার্থীবৃন্দ, জাদুঘর সন্ধ্যা সাতটায় বন্ধ হয়। সোমবার জাদুঘর সবসময় বন্ধ থাকে।» (Il lunedì è sempre chiuso)।', en: 'Mondays.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-18',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Alla banca',
    title: { bn: 'ব্যাংকে কথা বলা', en: 'At the bank' },
    topic: { bn: 'ব্যাংকিং ও সেবা', en: 'Banking & services' },
    lines: [
      { speaker: 'Rahim', it: 'Buongiorno, vorrei cambiare cento euro in banconote piccole.', tr: { bn: 'শুভ সকাল, আমি একশ ইউরো ছোট নোটে ভাঙাতে চাই।', en: 'Good morning, I would like to change 100 euros into small notes.' } },
      { speaker: 'Impiegata', it: 'Certamente! Preferisce banconote da dieci o da venti euro?', tr: { bn: 'অবশ্যই! আপনি কি দশ না বিশ ইউরোর নোট নেবেন?', en: 'Certainly! Do you prefer 10 or 20 euro notes?' } },
      { speaker: 'Rahim', it: 'Cinque da venti, grazie mille!', tr: { bn: 'বিশ ইউরোর পাঁচটি দিন, অনেক ধন্যবাদ!', en: 'Five twenties, thank you very much!' } },
    ],
    explanation: { bn: 'ব্যাংকে নোট বা মুদ্রা ভাঙাতে "cambiare" ক্রিয়া ব্যবহার হয়।', en: 'Use "cambiare" when exchanging notes or currency.' },
    vocabList: [
      { it: 'banconote', tr: { bn: 'কাগজের নোট', en: 'banknotes' } },
      { it: 'cambiare', tr: { bn: 'বদলানো / ভাঙানো', en: 'to exchange' } },
    ],
    vocabKeys: ['w:A1:la banca', "w:A1:l'euro", 'w:A1:cento'],
    grammarIds: ['modali', 'presente-ere-ire'],
    questions: [
      { id: 'ls18-q1', prompt: { bn: 'রাহিম কোন নোটগুলো পছন্দ করে?', en: 'Which notes does Rahim prefer?' }, options: ['দশ ইউরোর নোট', 'বিশ ইউরোর পাঁচটি নোট', 'পঞ্চাশ ইউরোর নোট', 'খুচরা কয়েন'], answer: 1, explanation: { bn: 'Cinque da venti = বিশ ইউরোর পাঁচটি।', en: 'Five 20-euro notes.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-19',
    level: 'A1',
    kind: 'story',
    titleIt: 'La giornata di un’insegnante',
    title: { bn: 'একজন শিক্ষিকার দিনলিপি', en: 'A teacher’s day' },
    topic: { bn: 'পেশা ও রুটিন', en: 'Work & routine' },
    lines: [
      { speaker: 'Chiara', it: 'Mi alzo alle sei e mezzo, preparo il caffè e vado a scuola in bicicletta.', tr: { bn: 'আমি সাড়ে ছয়টায় উঠি, কফি বানাই এবং সাইকেলে করে স্কুলে যাই।', en: 'I get up at 6:30, make coffee and cycle to school.' } },
      { speaker: 'Chiara', it: 'Le lezioni iniziano alle otto e finiscono all’una.', tr: { bn: 'ক্লাস আটটায় শুরু হয় ও একটা বাজে শেষ হয়।', en: 'Classes start at eight and finish at one.' } },
      { speaker: 'Chiara', it: 'Nel pomeriggio correggo i quaderni e poi cammino con il mio cane.', tr: { bn: 'বিকেলে আমি খাতা দেখি এবং তারপর আমার কুকুরকে নিয়ে হাঁটতে বের হই।', en: 'In the afternoon I mark notebooks and then walk my dog.' } },
    ],
    explanation: { bn: 'দৈনন্দিন রুটিনে riflessivo (mi alzo) ও -isc- (finiscono) ক্রিয়া লক্ষ করুন।', en: 'Notice reflexive mi alzo and -isc- verb finiscono.' },
    vocabList: [
      { it: 'correggo', tr: { bn: 'সংশোধন করি / খাতা দেখি', en: 'I correct / mark' } },
      { it: 'in bicicletta', tr: { bn: 'সাইকেলে করে', en: 'by bicycle' } },
    ],
    vocabKeys: ['w:A1:la scuola', 'w:A1:la bicicletta', 'w:A1:il cane'],
    grammarIds: ['riflessivi-a1', 'presente-ere-ire'],
    questions: [
      { id: 'ls19-q1', prompt: { bn: 'কিয়ারা কীভাবে স্কুলে যান?', en: 'How does Chiara go to school?' }, options: ['বাসে', 'গাড়িতে', 'সাইকেলে', 'ট্রেনে'], answer: 2, explanation: { bn: 'সঠিক উত্তর: সাইকেলে — পাঠ্যাংশে বলা হয়েছে: «আমি সাড়ে ছয়টায় উঠি, কফি বানাই এবং সাইকেলে করে স্কুলে যাই।» (in bicicletta)।', en: 'By bicycle.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-20',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Al mercato della frutta',
    title: { bn: 'ফলের বাজারে', en: 'At the fruit market' },
    topic: { bn: 'বাজার ও সংখ্যা', en: 'Market & numbers' },
    lines: [
      { speaker: 'Cliente', it: 'Buongiorno, vorrei due chili di arance e un chilo di banane.', tr: { bn: 'শুভ সকাল, আমি দুই কেজি কমলা আর এক কেজি কলা চাই।', en: 'Good morning, I would like two kilos of oranges and a kilo of bananas.' } },
      { speaker: 'Venditore', it: 'Ecco qua! Vuole anche delle fragole fresche?', tr: { bn: 'এই যে নিন! তাজা স্ট্রবেরিও কি নেবেন?', en: 'Here you go! Do you want fresh strawberries too?' } },
      { speaker: 'Cliente', it: 'No, grazie, basta così. Quanto costa tutto?', tr: { bn: 'না, ধন্যবাদ, এতেই চলবে। সব মিলিয়ে দাম কত?', en: 'No thanks, that’s enough. How much is everything?' } },
      { speaker: 'Venditore', it: 'Cinque euro e cinquanta.', tr: { bn: 'পাঁচ ইউরো পঞ্চাশ সেন্ট।', en: 'Five euros fifty.' } },
    ],
    explanation: { bn: '"Basta così" মানে "এতেই চলবে, আর কিছু লাগবে না"।', en: '"Basta così" politely declines extra items.' },
    vocabList: [
      { it: 'un chilo', tr: { bn: 'এক কেজি', en: 'one kilo' } },
      { it: 'fragole', tr: { bn: 'স্ট্রবেরি', en: 'strawberries' } },
    ],
    vocabKeys: ["w:A1:l'arancia", 'w:A1:la banana', 'w:A1:il mercato'],
    grammarIds: ['genere-numero', 'domande'],
    questions: [
      { id: 'ls20-q1', prompt: { bn: 'ক্রেতা কয় কেজি কমলা কেনেন?', en: 'How many kilos of oranges does the customer buy?' }, options: ['১ কেজি', '২ কেজি', '৩ কেজি', 'আধা কেজি'], answer: 1, explanation: { bn: 'সঠিক উত্তর: ২ কেজি — পাঠ্যাংশে বলা হয়েছে: «শুভ সকাল, আমি দুই কেজি কমলা আর এক কেজি কলা চাই।» (due chili di arance)।', en: 'Two kilos.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-21',
    level: 'A1',
    kind: 'phone',
    titleIt: 'Prenotare un tavolo al telefono',
    title: { bn: 'ফোনে টেবিল বুকিং', en: 'Booking a table by phone' },
    topic: { bn: 'রেস্টুরেন্ট', en: 'Restaurant' },
    lines: [
      { speaker: 'Ristorante', it: 'Ristorante Da Mario, buonasera!', tr: { bn: 'দা মারিও রেস্টুরেন্ট, শুভ সন্ধ্যা!', en: 'Da Mario Restaurant, good evening!' } },
      { speaker: 'Giulia', it: 'Buonasera, vorrei prenotare un tavolo per quattro persone per venerdì sera.', tr: { bn: 'শুভ সন্ধ্যা, আমি শুক্রবার সন্ধ্যায় চারজনের জন্য একটি টেবিল বুক করতে চাই।', en: 'Good evening, I would like to book a table for four for Friday evening.' } },
      { speaker: 'Ristorante', it: 'A che ora?', tr: { bn: 'কয়টায়?', en: 'For what time?' } },
      { speaker: 'Giulia', it: 'Alle otto e mezza, a nome Giulia Rossi.', tr: { bn: 'সাড়ে আটটায়, জুলিয়া রোসি নামে।', en: 'At 8:30, under the name Giulia Rossi.' } },
      { speaker: 'Ristorante', it: 'Perfetto, venerdì alle venti e trenta per quattro!', tr: { bn: 'দারুণ, শুক্রবার রাত সাড়ে আটটায় চারজনের জন্য!', en: 'Perfect, Friday at 20:30 for four!' } },
    ],
    explanation: { bn: 'বুকিং দেওয়ার সময় "a nome + আপনার নাম" বলুন।', en: 'Say "a nome + your name" when making a reservation.' },
    vocabList: [
      { it: 'prenotare', tr: { bn: 'বুক করা', en: 'to book' } },
      { it: 'a nome', tr: { bn: 'নামে', en: 'under the name of' } },
    ],
    vocabKeys: ['w:A1:il tavolo', 'w:A1:venerdì', 'w:A1:quattro'],
    grammarIds: ['ora-data', 'modali'],
    questions: [
      { id: 'ls21-q1', prompt: { bn: 'কয়জনের জন্য টেবিল বুক করা হয়েছে?', en: 'For how many people is the table booked?' }, options: ['২ জন', '৩ জন', '৪ জন', '৬ জন'], answer: 2, explanation: { bn: 'সঠিক উত্তর: ৪ জন — পাঠ্যাংশে বলা হয়েছে: «শুভ সন্ধ্যা, আমি শুক্রবার সন্ধ্যায় চারজনের জন্য একটি টেবিল বুক করতে চাই।» (per quattro persone)।', en: 'For four people.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-22',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Fame e sete dopo lo sport',
    title: { bn: 'খেলার পর খিদে ও পিপাসা', en: 'Hungry and thirsty after sport' },
    topic: { bn: 'অনুভূতি ও অবস্থা', en: 'Physical states' },
    lines: [
      { speaker: 'Tariq', it: 'Uf, ho molta sete e anche un po’ di fame!', tr: { bn: 'উফ, আমার খুব পিপাসা পেয়েছে আর একটু খিদেও পেয়েছে!', en: 'Phew, I am very thirsty and also a bit hungry!' } },
      { speaker: 'Marco', it: 'Anch’io! Entriamo in questo bar qui davanti.', tr: { bn: 'আমারও! চলো সামনের এই ক্যাফেতে ঢুকি।', en: 'Me too! Let’s go into this café right ahead.' } },
      { speaker: 'Tariq', it: 'Io prendo un succo d’arancia freddo e un panino al formaggio.', tr: { bn: 'আমি ঠান্ডা কমলার জুস আর পনিরের স্যান্ডউইচ নিচ্ছি।', en: 'I am having a cold orange juice and a cheese sandwich.' } },
    ],
    explanation: { bn: 'খিদে ও পিপাসায় "ho fame" ও "ho sete" ব্যবহার হয়।', en: 'Use ho fame / ho sete for hungry / thirsty.' },
    vocabList: [
      { it: 'anch’io', tr: { bn: 'আমিও', en: 'me too' } },
      { it: 'panino', tr: { bn: 'স্যান্ডউইচ', en: 'sandwich' } },
    ],
    vocabKeys: ['w:A1:il succo', 'w:A1:il formaggio', 'w:A1:freddo'],
    grammarIds: ['avere-espressioni', 'dimostrativi'],
    questions: [
      { id: 'ls22-q1', prompt: { bn: 'তারেক কী খায়?', en: 'What does Tariq eat?' }, options: ['পিৎজা', 'পনিরের স্যান্ডউইচ', 'পাস্তা', 'বিস্কুট'], answer: 1, explanation: { bn: 'সঠিক উত্তর: পনিরের স্যান্ডউইচ — পাঠ্যাংশে বলা হয়েছে: «আমি ঠান্ডা কমলার জুস আর পনিরের স্যান্ডউইচ নিচ্ছি।» (un panino al formaggio)।', en: 'A cheese sandwich.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-23',
    level: 'A1',
    kind: 'announcement',
    titleIt: 'Annuncio in aeroporto',
    title: { bn: 'বিমানবন্দরের ঘোষণা', en: 'Airport gate announcement' },
    topic: { bn: 'বিমানবন্দর ও ভ্রমণ', en: 'Airport & travel' },
    lines: [
      { speaker: 'Altoparlante', it: 'Signori passeggeri del volo per Milano, l’imbarco inizia fra dieci minuti alla porta dodici.', tr: { bn: 'মিলানগামী ফ্লাইটের যাত্রীবৃন্দ, দশ মিনিটের মধ্যে বারো নম্বর গেটে বোর্ডিং শুরু হবে।', en: 'Passengers for the flight to Milan, boarding begins in ten minutes at gate twelve.' } },
      { speaker: 'Altoparlante', it: 'Tenete pronti il passaporto e la carta d’imbarco.', tr: { bn: 'পাসপোর্ট ও বোর্ডিং পাস প্রস্তুত রাখুন।', en: 'Keep your passport and boarding pass ready.' } },
    ],
    explanation: { bn: 'সময়ের ক্ষেত্রে "fra dieci minuti" মানে "দশ মিনিট পরে"।', en: '"fra dieci minuti" means "in ten minutes".' },
    vocabList: [
      { it: 'imbarco', tr: { bn: 'বোর্ডিং', en: 'boarding' } },
      { it: 'carta d’imbarco', tr: { bn: 'বোর্ডিং পাস', en: 'boarding pass' } },
    ],
    vocabKeys: ["w:A1:l'aeroporto", 'w:A1:la porta', 'w:A1:dieci'],
    grammarIds: ['preposizioni', 'ora-data'],
    questions: [
      { id: 'ls23-q1', prompt: { bn: 'কত নম্বর গেটে বোর্ডিং হবে?', en: 'Which gate is boarding at?' }, options: ['১০', '১১', '১২', '২০'], answer: 2, explanation: { bn: 'alla porta dodici = ১২ নম্বর।', en: 'Gate 12.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-24',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Parliamo delle nostre cose',
    title: { bn: 'জিনিসপত্র ও রং চেনা', en: 'Talking about belongings & colours' },
    topic: { bn: 'জিনিস ও রং', en: 'Objects & colours' },
    lines: [
      { speaker: 'Anna', it: 'Di chi è questo ombrello rosso?', tr: { bn: 'এই লাল ছাতাটা কার?', en: 'Whose is this red umbrella?' } },
      { speaker: 'Paolo', it: 'Non è mio, il mio ombrello è nero. Forse è di Sara.', tr: { bn: 'আমার নয়, আমার ছাতাটা কালো। হয়তো সারার।', en: 'It is not mine, my umbrella is black. Maybe it is Sara’s.' } },
      { speaker: 'Anna', it: 'Sì, e guarda: anche quella borsa gialla è sua!', tr: { bn: 'হ্যাঁ, আর দেখো: ঐ হলুদ ব্যাগটাও ওর!', en: 'Yes, and look: that yellow bag is hers too!' } },
    ],
    explanation: { bn: '"Di chi è?" মানে "কার?" — মালিকানা জিজ্ঞেস করার সহজ প্রশ্ন।', en: '"Di chi è?" asks "Whose is it?".' },
    vocabList: [
      { it: 'di chi è', tr: { bn: 'কার?', en: 'whose is' } },
      { it: 'forse', tr: { bn: 'হয়তো', en: 'maybe' } },
    ],
    vocabKeys: ['w:A1:rosso', 'w:A1:nero', 'w:A1:la borsa'],
    grammarIds: ['dimostrativi', 'possessivi-a1'],
    questions: [
      { id: 'ls24-q1', prompt: { bn: 'পাওলোর ছাতার রং কী?', en: 'What colour is Paolo’s umbrella?' }, options: ['লাল', 'হলুদ', 'কালো', 'সবুজ'], answer: 2, explanation: { bn: 'সঠিক উত্তর: কালো — পাঠ্যাংশে বলা হয়েছে: «আমার নয়, আমার ছাতাটা কালো। হয়তো সারার।» (il mio ombrello è nero)।', en: 'Black.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-25',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Alla stazione: cambiare treno',
    title: { bn: 'ট্রেন বদলানোর খোঁজ', en: 'Checking train connections' },
    topic: { bn: 'ভ্রমণ', en: 'Travel' },
    lines: [
      { speaker: 'Viaggiatore', it: 'Scusi, questo treno va direttamente a Venezia?', tr: { bn: 'মাফ করবেন, এই ট্রেন কি সরাসরি ভেনিসে যায়?', en: 'Excuse me, does this train go directly to Venice?' } },
      { speaker: 'Controllore', it: 'No, deve scendere a Padova e prendere il treno regionale delle dodici.', tr: { bn: 'না, আপনাকে পাদোভায় নেমে বারোটার আঞ্চলিক ট্রেন ধরতে হবে।', en: 'No, you must get off at Padua and take the 12:00 regional train.' } },
      { speaker: 'Viaggiatore', it: 'Quanto tempo ho per cambiare?', tr: { bn: 'বদলানোর জন্য কত সময় পাবো?', en: 'How much time do I have to change?' } },
      { speaker: 'Controllore', it: 'Quindici minuti. Ha tutto il tempo!', tr: { bn: 'পনেরো মিনিট। আপনার হাতে যথেষ্ট সময় আছে!', en: 'Fifteen minutes. You have plenty of time!' } },
    ],
    explanation: { bn: '"scendere a" মানে কোনো স্টেশনে নামা, আর "cambiare" মানে ট্রেন/বাস বদলানো।', en: '"scendere a" = get off at; "cambiare" = change trains.' },
    vocabList: [
      { it: 'direttamente', tr: { bn: 'সরাসরি', en: 'directly' } },
      { it: 'scendere', tr: { bn: 'নামা', en: 'to get off' } },
    ],
    vocabKeys: ['w:A1:il treno', 'w:A1:il minuto', 'w:A1:il biglietto'],
    grammarIds: ['modali', 'domande'],
    questions: [
      { id: 'ls25-q1', prompt: { bn: 'যাত্রীকে কোন স্টেশনে নামতে হবে?', en: 'At which station must the passenger get off?' }, options: ['ভেনিস', 'পাদোভা', 'রোম', 'মিলান'], answer: 1, explanation: { bn: 'সঠিক উত্তর: পাদোভা — পাঠ্যাংশে বলা হয়েছে: «না, আপনাকে পাদোভায় নেমে বারোটার আঞ্চলিক ট্রেন ধরতে হবে।» (deve scendere a Padova)।', en: 'Padua.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-26',
    level: 'A1',
    kind: 'interview',
    titleIt: 'Conoscere una nuova collega',
    title: { bn: 'নতুন সহকর্মীর সাথে কথা', en: 'Meeting a new colleague' },
    topic: { bn: 'কাজ ও ভাষা', en: 'Work & languages' },
    lines: [
      { speaker: 'Elena', it: 'Ciao Rahim! Parli già molto bene italiano!', tr: { bn: 'হ্যালো রাহিম! তুমি তো এরই মধ্যে বেশ ভালো ইতালিয়ান বলো!', en: 'Hi Rahim! You already speak Italian very well!' } },
      { speaker: 'Rahim', it: 'Grazie! Parlo bengalese e inglese, e studio italiano da quattro mesi.', tr: { bn: 'ধন্যবাদ! আমি বাংলা ও ইংরেজি বলি, আর চার মাস ধরে ইতালিয়ান পড়ছি।', en: 'Thanks! I speak Bengali and English, and I have been studying Italian for four months.' } },
      { speaker: 'Elena', it: 'Che bravo! Se hai bisogno di aiuto in ufficio, chiedi pure a me.', tr: { bn: 'দারুণ! অফিসে কোনো সাহায্যের দরকার হলে নির্দ্বিধায় আমাকে বলবে।', en: 'Well done! If you need help in the office, just ask me.' } },
    ],
    explanation: { bn: 'কাজ বা পড়া কতদিন ধরে চলছে বোঝাতে "presente + da + সময়" ব্যবহৃত হয়।', en: 'Use present tense + da + duration for actions still continuing.' },
    vocabList: [
      { it: 'già', tr: { bn: 'ইতিমধ্যেই', en: 'already' } },
      { it: 'chiedi pure', tr: { bn: 'নিঃসংকোচে জিজ্ঞেস করো', en: 'feel free to ask' } },
    ],
    vocabKeys: ['w:A1:la lingua', "w:A1:l'ufficio", 'w:A1:il mese'],
    grammarIds: ['presente-are', 'avere-espressioni'],
    questions: [
      { id: 'ls26-q1', prompt: { bn: 'রাহিম কত মাস ধরে ইতালিয়ান পড়ছে?', en: 'How long has Rahim been studying Italian?' }, options: ['২ মাস', '৪ মাস', '৬ মাস', '১ বছর'], answer: 1, explanation: { bn: 'da quattro mesi = ৪ মাস।', en: 'Four months.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-27',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Alla libreria in centro',
    title: { bn: 'শহরের বইয়ের দোকানে', en: 'At the bookshop in town' },
    topic: { bn: 'পড়া ও কেনাকাটা', en: 'Reading & shopping' },
    lines: [
      { speaker: 'Nadia', it: 'Scusi, avete un dizionario italiano-inglese piccolo?', tr: { bn: 'মাফ করবেন, আপনাদের কাছে ছোট ইতালিয়ান-ইংরেজি অভিধান আছে?', en: 'Excuse me, do you have a small Italian-English dictionary?' } },
      { speaker: 'Libraio', it: 'Sì, eccolo sullo scaffale a destra, vicino ai libri di grammatica.', tr: { bn: 'হ্যাঁ, ডানের তাকের উপরে ব্যাকরণ বইগুলোর পাশে আছে।', en: 'Yes, there it is on the shelf on the right, near the grammar books.' } },
      { speaker: 'Nadia', it: 'Grazie! Quanto costa?', tr: { bn: 'ধন্যবাদ! দাম কত?', en: 'Thanks! How much is it?' } },
      { speaker: 'Libraio', it: 'Quindici euro. Vuole anche un quaderno?', tr: { bn: 'পনেরো ইউরো। সাথে কি একটা খাতা নেবেন?', en: 'Fifteen euros. Do you also want a notebook?' } },
    ],
    explanation: { bn: 'দোকানে কিছু আছে কি না জিজ্ঞেস করতে "Avete…?" সবচেয়ে স্বাভাবিক।', en: '"Avete…?" is the standard way to ask a shop if they stock something.' },
    vocabList: [
      { it: 'dizionario', tr: { bn: 'অভিধান', en: 'dictionary' } },
      { it: 'scaffale', tr: { bn: 'তাক / শেলফ', en: 'shelf' } },
    ],
    vocabKeys: ['w:A1:il libro', 'w:A1:il quaderno', 'w:A1:a destra'],
    grammarIds: ['preposizioni-luogo', 'avere'],
    questions: [
      { id: 'ls27-q1', prompt: { bn: 'অভিধানটির দাম কত?', en: 'How much does the dictionary cost?' }, options: ['১০ ইউরো', '১২ ইউরো', '১৫ ইউরো', '২০ ইউরো'], answer: 2, explanation: { bn: 'Quindici euro = ১৫ ইউরো।', en: '15 euros.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-28',
    level: 'A1',
    kind: 'story',
    titleIt: 'La mia casa nuova',
    title: { bn: 'আমার নতুন বাসা', en: 'My new flat' },
    topic: { bn: 'বাড়ি ও আসবাব', en: 'Home & furniture' },
    lines: [
      { speaker: 'Sara', it: 'Il mio nuovo appartamento è al secondo piano. Non è grande, ma è molto luminoso.', tr: { bn: 'আমার নতুন অ্যাপার্টমেন্ট দোতলায়। এটি বড় নয়, কিন্তু খুব আলোকিত।', en: 'My new flat is on the second floor. It is not big, but it is very bright.' } },
      { speaker: 'Sara', it: 'Ha una cucina piccola, un soggiorno con un tavolo grande, una camera da letto e un bagno.', tr: { bn: 'এতে একটি ছোট রান্নাঘর, বড় টেবিলসহ একটি বসার ঘর, একটি শোবার ঘর ও একটি বাথরুম আছে।', en: 'It has a small kitchen, a living room with a big table, a bedroom and a bathroom.' } },
      { speaker: 'Sara', it: 'Dalla finestra vedo gli alberi del parco e sento gli uccelli la mattina.', tr: { bn: 'জানালা দিয়ে আমি পার্কের গাছগুলো দেখি আর সকালে পাখির ডাক শুনি।', en: 'From the window I see the park trees and hear the birds in the morning.' } },
    ],
    explanation: { bn: 'ঘরের নাম: cucina, soggiorno, camera da letto, bagno।', en: 'Rooms of a home: cucina, soggiorno, camera da letto, bagno.' },
    vocabList: [
      { it: 'secondo piano', tr: { bn: 'দ্বিতীয় তলা / দোতলা', en: 'second floor' } },
      { it: 'uccelli', tr: { bn: 'পাখিরা', en: 'birds' } },
    ],
    vocabKeys: ["w:A1:l'appartamento", 'w:A1:la cucina', 'w:A1:la finestra'],
    grammarIds: ['aggettivi', 'ce'],
    questions: [
      { id: 'ls28-q1', prompt: { bn: 'অ্যাপার্টমেন্টটি কত তলায়?', en: 'Which floor is the flat on?' }, options: ['নিচতলা', 'দোতলা', 'তিনতলা', 'চারতলা'], answer: 1, explanation: { bn: 'al secondo piano = দোতলায়।', en: 'Second floor.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-29',
    level: 'A1',
    kind: 'dialogue',
    titleIt: 'Scegliere un regalo per la mamma',
    title: { bn: 'মায়ের জন্য উপহার পছন্দ করা', en: 'Choosing a gift for Mum' },
    topic: { bn: 'কেনাকাটা ও পরিবার', en: 'Shopping & family' },
    lines: [
      { speaker: 'Marco', it: 'Domenica è la festa della mamma. Cosa compriamo?', tr: { bn: 'রবিবার মা দিবস। আমরা কী কিনবো?', en: 'Sunday is Mother’s Day. What are we buying?' } },
      { speaker: 'Elena', it: 'A mamma piacciono i fiori e i libri di cucina.', tr: { bn: 'মায়ের ফুল ও রান্নার বই ভালো লাগে।', en: 'Mum likes flowers and cookbooks.' } },
      { speaker: 'Marco', it: 'Allora io compro delle rose rosa e tu prendi un bel libro nuovo!', tr: { bn: 'তাহলে আমি গোলাপি গোলাপ কিনছি আর তুমি সুন্দর একটা নতুন বই নাও!', en: 'Then I will buy pink roses and you get a nice new book!' } },
    ],
    explanation: { bn: 'রং "rosa" কখনো বহুবচনে বদলায় না: rose rosa।', en: 'The colour "rosa" stays invariable even with plural rose.' },
    vocabList: [
      { it: 'festa della mamma', tr: { bn: 'মা দিবস', en: 'Mother’s Day' } },
      { it: 'rose', tr: { bn: 'গোলাপ ফুল', en: 'roses' } },
    ],
    vocabKeys: ['w:A1:il fiore', 'w:A1:rosa', 'w:A1:il regalo'],
    grammarIds: ['piacere', 'aggettivi'],
    questions: [
      { id: 'ls29-q1', prompt: { bn: 'মার্কো কী কিনবে?', en: 'What will Marco buy?' }, options: ['রান্নার বই', 'গোলাপি গোলাপ', 'পারফিউম', 'ব্যাগ'], answer: 1, explanation: { bn: 'সঠিক উত্তর: গোলাপি গোলাপ — পাঠ্যাংশে বলা হয়েছে: «তাহলে আমি গোলাপি গোলাপ কিনছি আর তুমি সুন্দর একটা নতুন বই নাও!» (delle rose rosa)।', en: 'Pink roses.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-30',
    level: 'A1',
    kind: 'phone',
    titleIt: 'Chiamare un taxi',
    title: { bn: 'ট্যাক্সি ডাকা', en: 'Calling a taxi' },
    topic: { bn: 'যাতায়াত', en: 'Transport' },
    lines: [
      { speaker: 'Operatore', it: 'Radiotaxi Roma, buongiorno!', tr: { bn: 'রেডিওট্যাক্সি রোম, শুভ সকাল!', en: 'Radiotaxi Rome, good morning!' } },
      { speaker: 'Ayesha', it: 'Buongiorno, vorrei un taxi in Via Nazionale numero ventidue.', tr: { bn: 'শুভ সকাল, ভিয়া নাজিওনালে বাইশ নম্বরে আমার একটি ট্যাক্সি দরকার।', en: 'Good morning, I would like a taxi at 22 Via Nazionale.' } },
      { speaker: 'Operatore', it: 'Dove deve andare?', tr: { bn: 'কোথায় যেতে হবে?', en: 'Where do you need to go?' } },
      { speaker: 'Ayesha', it: 'Alla stazione Termini. Ho fretta perché il treno parte fra trenta minuti.', tr: { bn: 'তেরমিনি স্টেশনে। আমার তাড়া আছে কারণ ত্রিশ মিনিটের মধ্যে ট্রেন ছাড়বে।', en: 'To Termini station. I am in a hurry because the train leaves in 30 minutes.' } },
      { speaker: 'Operatore', it: 'Il taxi arriva fra cinque minuti. Codice "Milano 4".', tr: { bn: 'পাঁচ মিনিটের মধ্যে ট্যাক্সি আসবে। কোড "মিলানো ৪"।', en: 'The taxi arrives in five minutes. Code "Milano 4".' } },
    ],
    explanation: { bn: 'ইতালিতে রেডিও ট্যাক্সি ডাকলে একটি শহরের নাম + সংখ্যা কোড দেওয়া হয়।', en: 'Italian taxi dispatchers give you a city+number car code.' },
    vocabList: [
      { it: 'via', tr: { bn: 'রাস্তা / সড়ক', en: 'street' } },
      { it: 'fra cinque minuti', tr: { bn: 'পাঁচ মিনিটের মধ্যে', en: 'in five minutes' } },
    ],
    vocabKeys: ['w:A1:il taxi', 'w:A1:la strada', 'w:A1:trenta'],
    grammarIds: ['avere-espressioni', 'modali'],
    questions: [
      { id: 'ls30-q1', prompt: { bn: 'ট্যাক্সি কত মিনিটে আসবে?', en: 'In how many minutes does the taxi arrive?' }, options: ['২ মিনিট', '৫ মিনিট', '১০ মিনিট', '৩০ মিনিট'], answer: 1, explanation: { bn: 'fra cinque minuti = ৫ মিনিটে।', en: '5 minutes.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-31',
    level: 'A1',
    kind: 'conversation',
    titleIt: 'Organizzare una gita domenicale',
    title: { bn: 'রবিবারের ভ্রমণ পরিকল্পনা', en: 'Planning a Sunday outing' },
    topic: { bn: 'প্রকৃতি ও পরিকল্পনা', en: 'Nature & plans' },
    lines: [
      { speaker: 'Paolo', it: 'Cosa facciamo questa domenica? Il tempo è bello!', tr: { bn: 'এই রবিবারে আমরা কী করবো? আবহাওয়া খুব সুন্দর!', en: 'What are we doing this Sunday? The weather is lovely!' } },
      { speaker: 'Sofia', it: 'Possiamo andare al mare o in montagna.', tr: { bn: 'আমরা সমুদ্রে বা পাহাড়ে যেতে পারি।', en: 'We can go to the sea or to the mountains.' } },
      { speaker: 'Paolo', it: 'Preferisco il mare, perché in montagna fa ancora un po’ freddo.', tr: { bn: 'আমি সমুদ্র পছন্দ করি, কারণ পাহাড়ে এখনো একটু ঠান্ডা।', en: 'I prefer the sea, because in the mountains it is still a bit cold.' } },
      { speaker: 'Sofia', it: 'D’accordo! Partiamo alle nove in macchina.', tr: { bn: 'রাজি! আমরা নয়টায় গাড়িতে করে রওনা হবো।', en: 'Agreed! We leave at nine by car.' } },
    ],
    explanation: { bn: 'সম্মতি প্রকাশে "D’accordo!" অত্যন্ত প্রচলিত।', en: '"D’accordo!" means "Agreed!".' },
    vocabList: [
      { it: 'gita', tr: { bn: 'ছোট ভ্রমণ / পিকনিক', en: 'day trip' } },
      { it: 'd’accordo', tr: { bn: 'রাজি / ঠিক আছে', en: 'agreed' } },
    ],
    vocabKeys: ['w:A1:il mare', 'w:A1:la montagna', 'w:A1:la macchina'],
    grammarIds: ['preposizioni', 'modali'],
    questions: [
      { id: 'ls31-q1', prompt: { bn: 'তারা শেষ পর্যন্ত কোথায় যাওয়ার সিদ্ধান্ত নেয়?', en: 'Where do they decide to go?' }, options: ['পাহাড়ে', 'সমুদ্রে', 'জাদুঘরে', 'সুপারমার্কেটে'], answer: 1, explanation: { bn: 'সঠিক রূপান্তর: «Preferisco il mare» থেকে পরিবর্তিত হয়ে «D’accordo!» ব্যবহৃত হয়।', en: 'To the sea.' } },
    ],
  }),

  buildListening({
    id: 'ls-a1-32',
    level: 'A1',
    kind: 'formal',
    titleIt: 'Iscrizione in biblioteca',
    title: { bn: 'লাইব্রেরিতে সদস্যপদ নিবন্ধন', en: 'Registering at the library' },
    topic: { bn: 'শিক্ষা ও নিবন্ধন', en: 'Education & registration' },
    lines: [
      { speaker: 'Bibliotecaria', it: 'Buongiorno! Vuole fare la tessera della biblioteca?', tr: { bn: 'শুভ সকাল! আপনি কি লাইব্রেরির কার্ড বানাতে চান?', en: 'Good morning! Do you want to make a library card?' } },
      { speaker: 'Karim', it: 'Sì, grazie. Come funziona?', tr: { bn: 'হ্যাঁ, ধন্যবাদ। এটা কীভাবে কাজ করে?', en: 'Yes, thanks. How does it work?' } },
      { speaker: 'Bibliotecaria', it: 'È gratuita! Può prendere fino a cinque libri per trenta giorni.', tr: { bn: 'এটি বিনামূল্যে! আপনি ত্রিশ দিনের জন্য সর্বোচ্চ পাঁচটি বই নিতে পারেন।', en: 'It is free! You can borrow up to five books for thirty days.' } },
      { speaker: 'Karim', it: 'Che bello! Scrivo subito il mio nome e il mio indirizzo email.', tr: { bn: 'দারুণ! আমি এখনই আমার নাম আর ইমেইল ঠিকানা লিখছি।', en: 'How nice! I am writing down my name and email address right away.' } },
    ],
    explanation: { bn: '"gratuita" = বিনামূল্যে (ফ্রি)।', en: '"gratuita" means free of charge.' },
    vocabList: [
      { it: 'tessera', tr: { bn: 'সদস্য কার্ড', en: 'membership card' } },
      { it: 'gratuita', tr: { bn: 'বিনামূল্যে', en: 'free of charge' } },
    ],
    vocabKeys: ['w:A1:la biblioteca', 'w:A1:scrivere', 'w:A1:il giorno'],
    grammarIds: ['modali', 'presente-ere-ire'],
    questions: [
      { id: 'ls32-q1', prompt: { bn: 'একসাথে কয়টি বই নেওয়া যায়?', en: 'How many books can be borrowed at once?' }, options: ['২টি', '৩টি', '৫টি', '১০টি'], answer: 2, explanation: { bn: 'fino a cinque libri = সর্বোচ্চ ৫টি।', en: 'Up to 5 books.' } },
    ],
  }),
];
