import type {
  AcademyDrillItem,
  AcademyExamQuestion,
  AcademyTheoryConfig,
} from './types';
import type { Tr } from '../types';

export type PronounPossCategoryId =
  | 'subject-pronouns'
  | 'possessive-forms'
  | 'family-exception'
  | 'contrast-examples';

export interface A1PronounPossItem {
  id: string;
  it: string;
  formsDisplay: string;
  category: PronounPossCategoryId;
  categoryLabel: Tr;
  meaning: Tr;
  phoneticBn: string;
  phoneticEn: string;
  exampleIt: string;
  exampleTr: Tr;
  note?: Tr;
}

export const A1_PRONOUN_POSS_CATEGORIES: { id: PronounPossCategoryId; title: Tr; subtitle: Tr }[] = [
  {
    id: 'subject-pronouns',
    title: { bn: '১. ব্যক্তিবাচক সর্বনাম ও বাদ দেওয়ার নিয়ম (Subject Pronouns)', en: '1. Subject Pronouns & Optional Omission (10 Items)' },
    subtitle: { bn: 'io, tu, lui, lei, Lei, noi, voi, loro ও কখন সর্বনাম উহ্য থাকে', en: 'All 8 subject forms plus when Italians drop or keep pronouns' },
  },
  {
    id: 'possessive-forms',
    title: { bn: '২. অধিকারসূচক বিশেষণ (Possessive Adjectives)', en: '2. Possessives & Gender/Number Agreement (14 Items)' },
    subtitle: { bn: 'mio, tuo, suo, nostro, vostro, loro (সবসময় বস্তুর লিঙ্গ-বচন মানে!)', en: 'Forms agree with the thing possessed—not the owner—plus definite article' },
  },
  {
    id: 'family-exception',
    title: { bn: '৩. পরিবারের সদস্য ও আর্টিকেল ব্যতিক্রম (Family Rule)', en: '3. Singular Family-Member Rule & Exceptions (10 Items)' },
    subtitle: { bn: 'একবচন পরিবারের সদস্যের আগে আর্টিকেল বসে না (কিন্তু loro-তে বসে!)', en: 'Drop article before unmodified singular family nouns; keep article with plural, loro, and adjectives' },
  },
  {
    id: 'contrast-examples',
    title: { bn: '৪. ব্যক্তিবাচক বনাম অধিকারসূচক তুলনা (Contrasts)', en: '4. Personal vs. Possessive Contrast Examples (8 Items)' },
    subtitle: { bn: 'একই বাক্যে সঠিক রূপ বাছাই ও বিভ্রান্তি দূর করা', en: 'Side-by-side contrasts preventing common A1 mistakes' },
  },
];

function pp(
  id: string,
  category: PronounPossCategoryId,
  categoryLabel: Tr,
  it: string,
  formsDisplay: string,
  bn: string,
  en: string,
  phoneticBn: string,
  phoneticEn: string,
  exampleIt: string,
  exBn: string,
  exEn: string,
  note?: Tr,
): A1PronounPossItem {
  return {
    id,
    category,
    categoryLabel,
    it,
    formsDisplay,
    meaning: { bn, en },
    phoneticBn,
    phoneticEn,
    exampleIt,
    exampleTr: { bn: exBn, en: exEn },
    note,
  };
}

// 42 structured items (>= 40 required)
export const A1_PRONOUNS_POSSESSIVES_LIST: A1PronounPossItem[] = [
  // 1. Subject pronouns + omission (10)
  pp('pp-io', 'subject-pronouns', { bn: 'সর্বনাম', en: 'Subject Pronoun' }, 'io', 'io (১ম একবচন)', 'আমি', 'I', 'ই-ও', 'EE-oh', 'Io studio italiano ogni mattina.', 'আমি প্রতিদিন সকালে ইতালিয়ান পড়ি।', 'I study Italian every morning.', { bn: 'কথা বলার সময় সাধারণত io বাদ দিয়ে শুধু "Studio italiano." বলা হয়।', en: 'Often omitted unless emphasizing "I": Studio italiano.' }),
  pp('pp-tu', 'subject-pronouns', { bn: 'সর্বনাম', en: 'Subject Pronoun' }, 'tu', 'tu (২য় একবচন)', 'তুমি (অনানুষ্ঠানিক)', 'you (singular informal)', 'তু', 'TOO', 'Tu abiti vicino al centro?', 'তুমি কি শহরের কেন্দ্রের কাছে থাকো?', 'Do you live near the center?'),
  pp('pp-lui', 'subject-pronouns', { bn: 'সর্বনাম', en: 'Subject Pronoun' }, 'lui', 'lui (৩য় পুং একবচন)', 'সে / তিনি (পুরুষ)', 'he', 'লুই', 'LOO-ee', 'Lui è il mio compagno di classe.', 'সে আমার সহপাঠী।', 'He is my classmate.'),
  pp('pp-lei-f', 'subject-pronouns', { bn: 'সর্বনাম', en: 'Subject Pronoun' }, 'lei', 'lei (৩য় স্ত্রী একবচন)', 'সে / তিনি (নারী)', 'she', 'লেই', 'LEY', 'Lei lavora in farmacia.', 'তিনি ফার্মেসিতে কাজ করেন।', 'She works at a pharmacy.'),
  pp('pp-lei-formal', 'subject-pronouns', { bn: 'আনুষ্ঠানিক Lei', en: 'Formal Address' }, 'Lei', 'Lei (বড় অক্ষর L)', 'আপনি (আনুষ্ঠানিক একবচন)', 'you (formal singular)', 'লেই', 'LEY', 'Scusi, Lei parla inglese?', 'মাফ করবেন, আপনি কি ইংরেজি বলেন?', 'Excuse me, do you speak English?', { bn: 'সম্মানসূচক Lei পুং ও স্ত্রী উভয়ের জন্যই ৩য় পুরুষ একবচনের ক্রিয়া নেয়!', en: 'Formal Lei works for both men and women with 3rd-person singular verbs.' }),
  pp('pp-noi', 'subject-pronouns', { bn: 'সর্বনাম', en: 'Subject Pronoun' }, 'noi', 'noi (১ম বহুবচন)', 'আমরা', 'we', 'নয়', 'NOY', 'Noi andiamo al mercato insieme.', 'আমরা একসাথে বাজারে যাচ্ছি।', 'We are going to the market together.'),
  pp('pp-voi', 'subject-pronouns', { bn: 'সর্বনাম', en: 'Subject Pronoun' }, 'voi', 'voi (২য় বহুবচন)', 'তোমরা / আপনারা', 'you (plural)', 'ভয়', 'VOY', 'Voi prendete il treno delle otto?', 'তোমরা কি আটটার ট্রেন নেবে?', 'Are you all taking the eight o’clock train?'),
  pp('pp-loro', 'subject-pronouns', { bn: 'সর্বনাম', en: 'Subject Pronoun' }, 'loro', 'loro (৩য় বহুবচন)', 'তারা', 'they', 'লো-রো', 'LOH-roh', 'Loro arrivano stasera da Napoli.', 'তারা আজ সন্ধ্যায় নেপলস থেকে আসছে।', 'They are arriving tonight from Naples.'),
  pp('pp-omission-1', 'subject-pronouns', { bn: 'সর্বনাম উহ্য নিয়ম', en: 'Pro-drop Rule' }, '(io) Parlo · (tu) Parli', 'Pronoun Omission', 'সর্বনাম ছাড়া ক্রিয়া ব্যবহার', 'Omitted subject pronouns in daily speech', 'পার-লো · পার-লি', 'PAHR-loh · PAHR-lee', 'Parlo italiano e abito a Bologna.', 'আমি ইতালিয়ান বলি এবং বোলোনিয়ায় থাকি।', 'I speak Italian and I live in Bologna.', { bn: 'ক্রিয়ার শেষ অক্ষর (-o, -i, -iamo) দেখেই কে কাজ করছে বোঝা যায়, তাই io/tu সাধারণত উহ্য থাকে।', en: 'Verb endings clearly identify the subject, so Italians naturally drop pronouns.' }),
  pp('pp-emphasis-1', 'subject-pronouns', { bn: 'জোর দিতে সর্বনাম', en: 'Contrastive Emphasis' }, 'Io sì, lui no', 'Emphasis / Contrast', 'জোর বা তুলনায় সর্বনাম রাখা', 'Keep pronoun for emphasis or contrast', 'ই-ও সি, লুই নো', 'EE-oh SEE, LOO-ee NOH', 'Io prendo un caffè, mentre lui prende un tè.', 'আমি একটি কফি নিচ্ছি, আর সে নিচ্ছে একটি চা।', 'I am having a coffee, whereas he is having tea.'),

  // 2. Possessives + agreement (14)
  pp('pp-mio-m', 'possessive-forms', { bn: 'পুং একবচন', en: 'Masc. Sg.' }, 'il mio', 'il mio libro', 'আমার (পুং একবচন)', 'my (masc. sg.)', 'ইল মি-ও', 'eel MEE-oh', 'Ecco il mio passaporto e il mio zaino.', 'এই যে আমার পাসপোর্ট আর আমার ব্যাকপ্যাক।', 'Here is my passport and my backpack.'),
  pp('pp-mia-f', 'possessive-forms', { bn: 'স্ত্রী একবচন', en: 'Fem. Sg.' }, 'la mia', 'la mia casa', 'আমার (স্ত্রী একবচন)', 'my (fem. sg.)', 'লা মি-আ', 'lah MEE-ah', 'La mia città è molto vivace.', 'আমার শহরটি খুব প্রাণবন্ত।', 'My city is very lively.'),
  pp('pp-miei-mpl', 'possessive-forms', { bn: 'পুং বহুবচন', en: 'Masc. Pl.' }, 'i miei', 'i miei amici', 'আমার (পুং বহুবচন — অনিয়মিত রূপ!)', 'my (masc. pl.)', 'ই মিয়েই', 'ee MYEY', 'Questi sono i miei libri di storia.', 'এগুলো আমার ইতিহাসের বই।', 'These are my history books.', { bn: 'mio-র পুং বহুবচন "mioi" নয়, বরং "i miei"!', en: 'Note the irregular masculine plural: i miei (never mioi).' }),
  pp('pp-mie-fpl', 'possessive-forms', { bn: 'স্ত্রী বহুবচন', en: 'Fem. Pl.' }, 'le mie', 'le mie chiavi', 'আমার (স্ত্রী বহুবচন)', 'my (fem. pl.)', 'লে মি-এ', 'leh MEE-eh', 'Ho perso le mie chiavi in autobus!', 'আমি বাসে আমার চাবিগুলো হারিয়ে ফেলেছি!', 'I lost my keys on the bus!'),
  pp('pp-tuo-forms', 'possessive-forms', { bn: 'তোমার (৪ রূপ)', en: 'Your (tu)' }, 'il tuo / la tua', 'i tuoi / le tue', 'তোমার (বস্তুর লিঙ্গ-বচন অনুযায়ী)', 'your (sg. informal)', 'ইল তু-ও / ই তু-অই', 'eel TOO-oh / ee TWOH-ee', 'Il tuo cellulare è sul tavolo; dove sono le tue scarpe?', 'তোমার মোবাইল টেবিলে; তোমার জুতাগুলো কোথায়?', 'Your phone is on the table; where are your shoes?', { bn: 'লক্ষ্য করুন: পুং বহুবচন "i tuoi" এবং স্ত্রী বহুবচন "le tue"।', en: 'Masculine plural is i tuoi; feminine plural is le tue.' }),
  pp('pp-suo-forms', 'possessive-forms', { bn: 'তার / আপনার (৪ রূপ)', en: 'His / Her / Formal Your' }, 'il suo / la sua', 'i suoi / le sue', 'তার (ছেলে/মেয়ে) অথবা আপনার (Suo)', 'his / her / formal your', 'ইল সু-ও / ই সু-অই', 'eel SOO-oh / ee SWOH-ee', 'Marco cerca i suoi occhiali e la sua borsa.', 'মার্কো তার চশমা আর তার ব্যাগ খুঁজছে।', 'Marco is looking for his glasses and his bag.', { bn: 'খুব জরুরি: ছেলে হোক বা মেয়ে, "la sua borsa" হয় (borse/borsa-র লিঙ্গ অনুযায়ী suo/sua হয়, মালিকের নয়)!', en: 'CRITICAL: suo/sua agrees with the object (borsa = f. → la sua), not whether the owner is Marco or Maria!' }),
  pp('pp-suo-formal', 'possessive-forms', { bn: 'আনুষ্ঠানিক Suo', en: 'Formal Your (Suo)' }, 'il Suo / la Sua', 'i Suoi / le Sue', 'আপনার (আনুষ্ঠানিক Lei-এর অধিকার)', 'your (formal singular)', 'ইল সু-ও', 'eel SOO-oh', 'Signora, ecco il Suo biglietto e la Sua ricevuta.', 'ম্যাডাম, এই যে আপনার টিকিট ও আপনার রসিদ।', 'Madam, here is your ticket and your receipt.'),
  pp('pp-nostro-m', 'possessive-forms', { bn: 'আমাদের (পুং)', en: 'Our (Masc.)' }, 'il nostro / i nostri', 'il nostro · i nostri', 'আমাদের (পুং একবচন / বহুবচন)', 'our (masc. sg. / pl.)', 'ইল নোস্-ত্রো / ত্রাই', 'eel NOHS-troh / tree', 'Il nostro corso finisce alle dodici; i nostri amici aspettano fuori.', 'আমাদের ক্লাস বারোটায় শেষ হয়; আমাদের বন্ধুরা বাইরে অপেক্ষা করছে।', 'Our course ends at twelve; our friends wait outside.'),
  pp('pp-nostra-f', 'possessive-forms', { bn: 'আমাদের (স্ত্রী)', en: 'Our (Fem.)' }, 'la nostra / le nostre', 'la nostra · le nostre', 'আমাদের (স্ত্রী একবচন / বহুবচন)', 'our (fem. sg. / pl.)', 'লা নোস্-ত্রা / ত্রে', 'lah NOHS-trah / treh', 'La nostra scuola ha aule grandi e luminose.', 'আমাদের স্কুলের শ্রেণিকক্ষগুলো বড় ও আলোকিত।', 'Our school has large, bright classrooms.'),
  pp('pp-vostro-m', 'possessive-forms', { bn: 'তোমাদের (পুং)', en: 'Your Pl. (Masc.)' }, 'il vostro / i vostri', 'il vostro · i vostri', 'তোমাদের (পুং একবচন / বহুবচন)', 'your (pl. masc.)', 'ইল ভোস্-ত্রো / ত্রি', 'eel VOHS-troh / tree', 'Ragazzi, qual è il vostro numero di stanza?', 'বন্ধুরা, তোমাদের রুম নম্বর কত?', 'Guys, what is your room number?'),
  pp('pp-vostra-f', 'possessive-forms', { bn: 'তোমাদের (স্ত্রী)', en: 'Your Pl. (Fem.)' }, 'la vostra / le vostre', 'la vostra · le vostre', 'তোমাদের (স্ত্রী একবচন / বহুবচন)', 'your (pl. fem.)', 'লা ভোস্-ত্রা / ত্রে', 'lah VOHS-trah / treh', 'La vostra pizza è pronta! Ecco le vostre bibite.', 'তোমাদের পিৎজা তৈরি! এই নাও তোমাদের পানীয়।', 'Your pizza is ready! Here are your drinks.'),
  pp('pp-loro-invar', 'possessive-forms', { bn: 'তাদের (অপরিবর্তিত)', en: 'Their (Invariable)' }, 'il / la / i / le loro', 'loro (কখনো বদলায় না!)', 'তাদের (সব লিঙ্গ ও বচনে "loro")', 'their (invariable form)', 'ইল লো-রো', 'eel LOH-roh', 'La loro casa è nuova, e i loro figli studiano qui.', 'তাদের বাড়িটি নতুন, এবং তাদের সন্তানেরা এখানে পড়ে।', 'Their house is new, and their children study here.', { bn: 'অধিকারসূচক "loro"-র শেষ অক্ষর কখনো বদলায় না—শুধু আগের আর্টিকেল বদলায়।', en: 'Unlike mio/tuo/suo/nostro/vostro, possessive loro NEVER changes ending!' }),
  pp('pp-article-rule', 'possessive-forms', { bn: 'আর্টিকেল নিয়ম', en: 'With Definite Article' }, 'il mio amico', 'Articolo + Possessivo', 'সাধারণ বস্তুর আগে আর্টিকেল বাধ্যতামূলক', 'Always keep the article before non-family nouns', 'ইল মি-ও আ-মি-কো', 'eel MEE-oh ah-MEE-koh', 'Vado in stazione con il mio amico Karim.', 'আমি আমার বন্ধু করিমের সাথে স্টেশনে যাচ্ছি।', 'I am going to the station with my friend Karim.'),
  pp('pp-object-agreement', 'possessive-forms', { bn: 'বস্তু অনুযায়ী মিল', en: 'Object Gender Match' }, 'la sua macchina / il suo libro', 'Maria → il suo libro', 'মালিক নয়, জিনিসের লিঙ্গ অনুযায়ী রূপ', 'Match the possessed noun gender, not owner', 'লা সু-আ / ইল সু-ও', 'lah SOO-ah / eel SOO-oh', 'Giulia prende il suo zaino; Luca prende la sua giacca.', 'জুলিয়া তার ব্যাগ নিচ্ছে; লুকা তার জ্যাকেট নিচ্ছে।', 'Giulia takes her backpack; Luca takes his jacket.'),

  // 3. Family member singular no-article rule & exceptions (10)
  pp('pp-fam-padre', 'family-exception', { bn: 'পরিবার (একবচন)', en: 'No Article Rule' }, 'mio padre', 'mio padre (NOT il mio padre)', 'আমার বাবা (আর্টিকেল নেই)', 'my father', 'মি-ও পা-দ্রে', 'MEE-oh PAH-dreh', 'Mio padre vive in Bangladesh.', 'আমার বাবা বাংলাদেশে থাকেন।', 'My father lives in Bangladesh.', { bn: 'একবচন পরিবারের সদস্যের আগে বিশেষণ না থাকলে আর্টিকেল বাদ পড়ে!', en: 'Drop the article before singular, unmodified family members!' }),
  pp('pp-fam-madre', 'family-exception', { bn: 'পরিবার (একবচন)', en: 'No Article Rule' }, 'mia madre', 'mia madre (NOT la mia madre)', 'আমার মা (আর্টিকেল নেই)', 'my mother', 'মি-আ মা-দ্রে', 'MEE-ah MAH-dreh', 'Mia madre cucina molto bene.', 'আমার মা খুব ভালো রান্না করেন।', 'My mother cooks very well.'),
  pp('pp-fam-fratello', 'family-exception', { bn: 'পরিবার (একবচন)', en: 'No Article Rule' }, 'tuo fratello', 'tuo fratello / mio fratello', 'তোমার ভাই (আর্টিকেল নেই)', 'your brother', 'তু-ও ফ্রা-তেল-লো', 'TOO-oh frah-TEHL-loh', 'Tuo fratello lavora a Milano?', 'তোমার ভাই কি মিলানে কাজ করে?', 'Does your brother work in Milan?'),
  pp('pp-fam-sorella', 'family-exception', { bn: 'পরিবার (একবচন)', en: 'No Article Rule' }, 'mia sorella', 'mia sorella / sua sorella', 'আমার বোন (আর্টিকেল নেই)', 'my sister', 'মি-আ সো-রেল-লা', 'MEE-ah soh-REHL-lah', 'Mia sorella ha venti anni.', 'আমার বোনের বয়স বিশ বছর।', 'My sister is twenty years old.'),
  pp('pp-fam-marito-moglie', 'family-exception', { bn: 'পরিবার (একবচন)', en: 'No Article Rule' }, 'mio marito / mia moglie', 'no article in singular', 'আমার স্বামী / আমার স্ত্রী', 'my husband / my wife', 'মি-ও মা-রি-তো', 'MEE-oh mah-REE-toh', 'Mia moglie arriva domani mattina.', 'আমার স্ত্রী আগামীকাল সকালে আসছেন।', 'My wife arrives tomorrow morning.'),
  pp('pp-fam-nonno', 'family-exception', { bn: 'পরিবার (একবচন)', en: 'No Article Rule' }, 'mio nonno / mia nonna', 'singular unmodified', 'আমার দাদা-নানা / দাদি-নানি', 'my grandfather / grandmother', 'মি-ও নন-নো', 'MEE-oh NOHN-noh', 'Ogni domenica chiamo mia nonna.', 'প্রতি রবিবার আমি আমার দাদি/নানিকে ফোন করি।', 'Every Sunday I call my grandmother.'),
  pp('pp-fam-plural-exception', 'family-exception', { bn: 'ব্যতিক্রম ১: বহুবচন', en: 'Exception: Plural' }, 'i miei fratelli / le mie sorelle', 'Plural → Keep Article!', 'বহুবচন পরিবারের আগে আর্টিকেল বাধ্যতামূলক!', 'Keep the article for PLURAL family members', 'ই মিয়েই ফ্রা-তেল-লি', 'ee MYEY frah-TEHL-lee', 'I miei genitori vivono lontano.', 'আমার বাবা-মা দূরে থাকেন।', 'My parents live far away.', { bn: 'পরিবারের শব্দ বহুবচন হলেই (i miei genitori, le tue sorelle) আর্টিকেল ফিরিয়ে আনতে হবে!', en: 'Plural family members ALWAYS keep the definite article.' }),
  pp('pp-fam-loro-exception', 'family-exception', { bn: 'ব্যতিক্রম ২: loro', en: 'Exception: loro' }, 'il loro padre / la loro madre', 'loro ALWAYS takes article!', 'একবচন হলেও loro-র সাথে আর্টিকেল বসে!', 'Always use the article with loro (even singular!)', 'ইল লো-রো পা-দ্রে', 'eel LOH-roh PAH-dreh', 'Il loro nonno ha ottant’anni.', 'তাদের দাদার বয়স আশি বছর।', 'Their grandfather is eighty years old.', { bn: 'খুব জরুরি ব্যতিক্রম: "loro padre" ভুল, সঠিক হলো "il loro padre"!', en: 'Even before singular family members, loro ALWAYS requires the article!' }),
  pp('pp-fam-adjective-exception', 'family-exception', { bn: 'ব্যতিক্রম ৩: বিশেষণ যুক্ত হলে', en: 'Exception: Modified' }, 'il mio caro fratello', 'Adjective → Keep Article!', 'বিশেষণ (caro/piccolo/sympatico) যোগ হলে আর্টিকেল বসে!', 'Keep the article if an adjective describes the family noun', 'ইল মি-ও কা-রো', 'eel MEE-oh KAH-roh', 'La mia sorella minore va al liceo.', 'আমার ছোট বোন হাই স্কুলে পড়ে।', 'My younger sister goes to high school.'),
  pp('pp-fam-mamma-papa', 'family-exception', { bn: 'ব্যতিক্রম ৪: আদরের ডাক', en: 'Affectionate Terms' }, 'la mia mamma / il mio papà', 'Affectionate forms', 'mamma / papà সাধারণত আর্টিকেলসহ বসে', 'Affectionate mamma/papà normally keep the article', 'লা মি-আ মাম-মা', 'lah MEE-ah MAHM-mah', 'La mia mamma prepara sempre il caffè.', 'আমার আম্মু সবসময় কফি তৈরি করেন।', 'My mum always makes coffee.'),

  // 4. Personal vs Possessive contrast (8)
  pp('pp-con-io-mio', 'contrast-examples', { bn: 'তুলনা: io vs mio', en: 'io vs. il mio' }, 'Io vs. Il mio', 'io (আমি) · il mio (আমার)', 'আমি (কর্তা) বনাম আমার (অধিকার)', 'I (subject) vs. my (possessive)', 'ই-ও / ইল মি-ও', 'EE-oh / eel MEE-oh', 'Io leggo il mio libro in giardino.', 'আমি বাগানে আমার বই পড়ছি।', 'I am reading my book in the garden.'),
  pp('pp-con-tu-tuo', 'contrast-examples', { bn: 'তুলনা: tu vs tuo', en: 'tu vs. la tua' }, 'Tu vs. La tua', 'tu (তুমি) · la tua (তোমার)', 'তুমি (কর্তা) বনাম তোমার (অধিকার)', 'you (subject) vs. your (possessive)', 'তু / লা তু-আ', 'TOO / lah TOO-ah', 'Tu hai la tua chiave nello zaino?', 'তোমার ব্যাগে কি তোমার চাবি আছে?', 'Do you have your key in your backpack?'),
  pp('pp-con-lui-suo', 'contrast-examples', { bn: 'তুলনা: lui vs suo', en: 'lui vs. il suo' }, 'Lui vs. La sua', 'lui = সে · la sua = তার', 'পুরুষ মালিক হলেও la sua (যদি জিনিসটি স্ত্রীলিঙ্গ হয়!)', 'Owner is "he", object feminine → la sua', 'লুই / লা সু-আ', 'LOO-ee / lah SOO-ah', 'Lui cerca la sua macchina rossa.', 'সে তার লাল গাড়িটি খুঁজছে।', 'He is looking for his red car.'),
  pp('pp-con-lei-suo', 'contrast-examples', { bn: 'তুলনা: lei vs suo', en: 'lei vs. il suo' }, 'Lei vs. Il suo', 'lei = সে (নারী) · il suo = তার', 'নারী মালিক হলেও il suo (যদি জিনিসটি পুংলিঙ্গ হয়!)', 'Owner is "she", object masculine → il suo', 'লেই / ইল সু-ও', 'LEY / eel SOO-oh', 'Lei ascolta il suo professore.', 'সে তার প্রফেসরের কথা শুনছে।', 'She is listening to her professor.'),
  pp('pp-con-noi-nostro', 'contrast-examples', { bn: 'তুলনা: noi vs nostro', en: 'noi vs. il nostro' }, 'Noi vs. La nostra', 'noi (আমরা) · la nostra (আমাদের)', 'আমরা (কর্তা) বনাম আমাদের (অধিকার)', 'we (subject) vs. our (possessive)', 'নয় / লা নোস্-ত্রা', 'NOY / lah NOHS-trah', 'Noi amiamo la nostra città.', 'আমরা আমাদের শহরকে ভালোবাসি।', 'We love our city.'),
  pp('pp-con-voi-vostro', 'contrast-examples', { bn: 'তুলনা: voi vs vostro', en: 'voi vs. i vostri' }, 'Voi vs. I vostri', 'voi (তোমরা) · i vostri (তোমাদের)', 'তোমরা (কর্তা) বনাম তোমাদের (অধিকার)', 'you (pl.) vs. your (pl.)', 'ভয় / ই ভোস্-ত্রি', 'VOY / ee VOHS-tree', 'Voi avete già i vostri biglietti?', 'তোমাদের কাছে কি ইতিমধ্যে তোমাদের টিকিট আছে?', 'Do you already have your tickets?'),
  pp('pp-con-loro-loro', 'contrast-examples', { bn: 'তুলনা: loro vs il loro', en: 'loro vs. il loro' }, 'Loro vs. I loro', 'Loro = তারা · i loro = তাদের', 'আর্টিকেল না থাকলে "তারা", আর্টিকেল থাকলে "তাদের"', 'Without article = "they"; with article = "their"', 'লো-রো / ই লো-রো', 'LOH-roh / ee LOH-roh', 'Loro aiutano i loro amici.', 'তারা তাদের বন্ধুদের সাহায্য করে।', 'They help their friends.'),
  pp('pp-con-formal-lei-suo', 'contrast-examples', { bn: 'তুলনা: Lei vs Suo', en: 'Formal Lei vs. il Suo' }, 'Lei vs. La Sua', 'Lei = আপনি · La Sua = আপনার', 'আনুষ্ঠানিক আলাপে বড় অক্ষরের Lei ও Suo', 'Formal polite address uses Lei and Suo/Sua', 'লেই / লা সু-আ', 'LEY / lah SOO-ah', 'Signore, Lei dimentica la Sua valigia!', 'স্যার, আপনি আপনার স্যুটকেস ভুলে যাচ্ছেন!', 'Sir, you are forgetting your suitcase!'),
];

export const A1_PRONOUNS_POSSESSIVES_REQUIRED_IDS: string[] = A1_PRONOUNS_POSSESSIVES_LIST.map((x) => x.id);

export const PRONOUNS_POSSESSIVES_THEORY_CONFIG: AcademyTheoryConfig = {
  moduleId: 'pronouns-possessives',
  title: {
    bn: 'ব্যক্তিবাচক ও অধিকারসূচক সর্বনাম (Pronomi e Possessivi)',
    en: 'Personal & Possessive Pronouns',
  },
  subtitle: {
    bn: 'io, tu, lui, lei, Lei, noi, voi, loro এবং mio/tuo/suo/nostro/vostro/loro-র সম্পূর্ণ ব্যবহার',
    en: 'Subject pronouns, omission rules, possessive agreement, and singular family-member exceptions',
  },
  intro: {
    bn: 'ইতালিয়ানে সর্বনাম ও অধিকারসূচক শব্দ শেখার সবচেয়ে বড় দুটি রহস্য হলো: (১) ক্রিয়ার রূপ স্পষ্ট হওয়ায় কর্তা সর্বনাম (io, tu...) প্রায়ই উহ্য রাখা যায়, এবং (২) অধিকারসূচক শব্দ (mio, tuo, suo...) মালিক নয়—বরং যে জিনিস বা মানুষটির কথা বলা হচ্ছে তার লিঙ্গ ও বচন অনুযায়ী বদলায়!',
    en: 'Two core rules unlock Italian pronouns and possessives: (1) Subject pronouns (io, tu...) are usually dropped because verb endings identify the speaker, and (2) Possessives agree in gender and number with the noun possessed—never the owner!',
  },
  highlights: [
    { label: 'io → loro', caption: { bn: '৮টি ব্যক্তিবাচক রূপ', en: 'Subject Pronouns' } },
    { label: 'mio / miei', caption: { bn: 'বস্তুর লিঙ্গ-বচন মিল', en: 'Noun Agreement' } },
    { label: 'mio padre', caption: { bn: 'একবচন পরিবারে আর্টিকেল নেই', en: 'Family Rule' } },
    { label: 'il loro padre', caption: { bn: 'loro সবসময় আর্টিকেল নেয়', en: 'loro Keeps Article' } },
  ],
  sections: [
    {
      id: 'pp-sec-table',
      heading: { bn: '১. অধিকারসূচক শব্দের সম্পূর্ণ চার্ট', en: '1. Complete Possessive Adjective Reference Chart' },
      summary: {
        bn: 'সাধারণ বিশেষ্যের আগে প্রায় সবসময় নির্দিষ্ট আর্টিকেল (il/la/i/le) + অধিকারসূচক শব্দ বসে। কেবল loro কখনো রূপ বদলায় না।',
        en: 'Before normal nouns, always include the definite article + possessive. Notice irregular masculine plurals: miei, tuoi, suoi.',
      },
      table: {
        headers: [
          { bn: 'সর্বনাম', en: 'Subject' },
          { bn: 'পুং একবচন', en: 'Masc. Sg.' },
          { bn: 'স্ত্রী একবচন', en: 'Fem. Sg.' },
          { bn: 'পুং বহুবচন', en: 'Masc. Pl.' },
          { bn: 'স্ত্রী বহুবচন', en: 'Fem. Pl.' },
        ],
        rows: [
          { cells: ['io (আমার)', 'il mio', 'la mia', 'i miei', 'le mie'], audioIt: 'il mio, la mia, i miei, le mie' },
          { cells: ['tu (তোমার)', 'il tuo', 'la tua', 'i tuoi', 'le tue'], audioIt: 'il tuo, la tua, i tuoi, le tue' },
          { cells: ['lui/lei/Lei (তার/আপনার)', 'il suo', 'la sua', 'i suoi', 'le sue'], audioIt: 'il suo, la sua, i suoi, le sue' },
          { cells: ['noi (আমাদের)', 'il nostro', 'la nostra', 'i nostri', 'le nostre'], audioIt: 'il nostro, la nostra, i nostri, le nostre' },
          { cells: ['voi (তোমাদের)', 'il vostro', 'la vostra', 'i vostri', 'le vostre'], audioIt: 'il vostro, la vostra, i vostri, le vostre' },
          { cells: ['loro (তাদের)', 'il loro', 'la loro', 'i loro', 'le loro'], audioIt: 'il loro, la loro, i loro, le loro' },
        ],
      },
    },
    {
      id: 'pp-sec-family',
      heading: { bn: '২. পরিবারের সদস্যের আগে আর্টিকেল বনাম ব্যতিক্রম', en: '2. The Family Member Rule & 3 Exceptions' },
      summary: {
        bn: 'একবচন ও বিশেষণহীন পরিবারের সদস্যের আগে আর্টিকেল বাদ পড়ে (mia madre, tuo fratello); কিন্তু ৩টি ক্ষেত্রে আর্টিকেল ফিরে আসে!',
        en: 'Drop the definite article before singular unmodified family nouns (mia madre), but KEEP the article in 3 clear cases!',
      },
      rules: [
        {
          id: 'pp-rule-3-exceptions',
          title: { bn: 'কখন পরিবারের আগেও আর্টিকেল বসাতে হয়?', en: 'The 3 Exceptions Where Family Nouns Keep the Article' },
          badge: { bn: 'অতি জরুরি', en: 'High-Yield Rule' },
          body: {
            bn: '• সাধারণ একবচন পরিবার: mio padre, mia sorella, tuo zio (আর্টিকেল নেই)।\n১) বহুবচন হলে: i miei fratelli, le mie sorelle, i nostri genitori।\n২) অধিকারসূচক শব্দ "loro" হলে (একবচন হলেও!): il loro padre, la loro madre।\n৩) বিশেষণ বা আদরের নাম যোগ হলে: il mio caro fratello, la mia sorella minore, la mia mamma।',
            en: '• Singular unmodified: mio padre, mia sorella, tuo zio (NO article).\n1) Plural family nouns: i miei fratelli, le mie sorelle.\n2) Possessive "loro" (even singular!): il loro padre, la loro zia.\n3) Modified by an adjective or diminutive: il mio caro zio, la mia mamma.',
          },
          examples: [
            { it: 'Mio fratello abita a Roma, ma i miei genitori vivono a Dhaka.', phoneticBn: 'মি-ও ফ্রা-তেল-লো / ই মিয়েই জে-নি-তো-রি', phoneticEn: 'MEE-oh frah-TEHL-loh / ee MYEY jeh-nee-TOH-ree', tr: { bn: 'আমার ভাই রোমে থাকে, কিন্তু আমার বাবা-মা ঢাকায় থাকেন।', en: 'My brother lives in Rome, but my parents live in Dhaka.' } },
            { it: 'Il loro padre lavora in centro.', phoneticBn: 'ইল লো-রো পা-দ্রে', phoneticEn: 'eel LOH-roh PAH-dreh', tr: { bn: 'তাদের বাবা শহরের কেন্দ্রে কাজ করেন।', en: 'Their father works downtown.' } },
          ],
        },
      ],
      mistakes: [
        {
          wrong: 'il mio padre / la mia sorella',
          right: 'mio padre / mia sorella',
          explanation: { bn: 'একবচন ও বিশেষণহীন পরিবারের সদস্যের আগে আর্টিকেল বসে না।', en: 'Singular unmodified family nouns drop the definite article.' },
        },
        {
          wrong: 'miei fratelli / loro padre',
          right: 'i miei fratelli / il loro padre',
          explanation: { bn: 'বহুবচন (miei fratelli) এবং "loro"-র আগে আর্টিকেল বাধ্যতামূলক।', en: 'Always include the article for plural family members and for loro.' },
        },
        {
          wrong: 'Marco chiama la suo madre / i mio libri',
          right: 'Marco chiama sua madre / i miei libri',
          explanation: { bn: 'suo/sua পরিবারের একবচনে আর্টিকেল ছাড়া এবং mio-র পুং বহুবচন সর্বদা i miei।', en: 'Use sua madre (no article, fem. match) and i miei libri (masc. pl. miei).' },
        },
      ],
    },
  ],
};

export const A1_PRONOUNS_POSSESSIVES_DRILL_ITEMS: AcademyDrillItem[] = [
  {
    id: 'pp-dr-01',
    drillKind: 'mcq',
    audioIt: 'Mia sorella studia medicina.',
    primaryLabel: 'Mia sorella',
    secondaryLabel: 'No article',
    secondaryLabelTr: { bn: 'একবচন পরিবার (আর্টিকেল নেই)', en: 'singular family (no article)' },
    promptOverride: { bn: '«আমার বোন» বলতে সঠিক কোনটি?', en: 'How do you say "My sister" correctly?' },
    promptIt: '___ studia medicina a Padova.',
    explicitOptions: [
      { id: 'd1', primaryLabel: 'La mia sorella', secondaryLabel: '', secondaryLabelTr: { bn: 'অপ্রয়োজনীয় আর্টিকেল', en: 'extra article' } },
      { id: 'd2', primaryLabel: 'Il mio sorella', secondaryLabel: '', secondaryLabelTr: { bn: 'ভুল লিঙ্গ', en: 'wrong gender' } },
      { id: 'd3', primaryLabel: 'Le mie sorella', secondaryLabel: '', secondaryLabelTr: { bn: 'বচন ভুল', en: 'plural/sg mismatch' } },
    ],
    cueBn: 'একবচন ও বিশেষণহীন পরিবারের সদস্য',
    cueEn: 'Singular unmodified family member',
    feedbackDetail: { bn: 'একবচন বিশেষণহীন পরিবার (sorella) হলে আর্টিকেল ছাড়াই "Mia sorella" বসে।', en: 'Singular unmodified family members drop the article: Mia sorella.' },
  },
  {
    id: 'pp-dr-02',
    drillKind: 'fill-blank',
    audioIt: 'I miei amici arrivano oggi.',
    primaryLabel: 'I miei',
    secondaryLabel: 'masc. pl. of mio',
    secondaryLabelTr: { bn: 'mio-র পুং বহুবচন', en: 'masc. pl. of mio' },
    promptOverride: { bn: 'সঠিক বহুবচন অধিকারসূচক বেছে নিন:', en: 'Pick the right masculine plural form:' },
    promptIt: '___ amici arrivano da Torino oggi.',
    explicitOptions: [
      { id: 'd1', primaryLabel: 'I mio', secondaryLabel: '', secondaryLabelTr: { bn: 'একবচন রূপ', en: 'singular' } },
      { id: 'd2', primaryLabel: 'Le mie', secondaryLabel: '', secondaryLabelTr: { bn: 'স্ত্রী বহুবচন', en: 'fem. plural' } },
      { id: 'd3', primaryLabel: 'Gli miei', secondaryLabel: '', secondaryLabelTr: { bn: 'ভুল আর্টিকেল', en: 'wrong article' } },
    ],
    cueBn: 'amici = পুংলিঙ্গ বহুবচন (আর্টিকেল miei-এর m অনুযায়ী i)',
    cueEn: 'amici = masc. plural (article agrees with m- of miei)',
    feedbackDetail: { bn: 'i + miei + amici: যখন "miei" মাঝে আসে তখন আর্টিকেল m অনুযায়ী "i" বসে (gli নয়)!', en: 'Correct: I miei amici (article agrees with miei, so i instead of gli).' },
  },
  {
    id: 'pp-dr-03',
    drillKind: 'matching',
    audioIt: 'il nostro, la loro, i tuoi, le sue',
    primaryLabel: 'Possessive Match',
    secondaryLabel: 'Match forms',
    cueBn: 'অধিকারসূচক রূপের সাথে বাংলা/ইংরেজি অর্থ মিলান',
    cueEn: 'Match each Italian possessive to its English/Bengali meaning',
    matchingPairs: [
      { id: 'p1', leftIt: 'i miei fratelli', rightTr: { bn: 'আমার ভাইয়েরা (আর্টিকেলসহ)', en: 'my brothers (keeps article)' } },
      { id: 'p2', leftIt: 'il loro padre', rightTr: { bn: 'তাদের বাবা (loro আর্টিকেল নেয়)', en: 'their father (loro keeps article)' } },
      { id: 'p3', leftIt: 'nostra madre', rightTr: { bn: 'আমাদের মা', en: 'our mother' } },
      { id: 'p4', leftIt: 'le tue chiavi', rightTr: { bn: 'তোমার চাবিগুলো', en: 'your keys' } },
    ],
    feedbackDetail: { bn: 'বহুবচন পরিবার (i miei fratelli) ও loro (il loro padre) আর্টিকেল ধরে রাখে।', en: 'Plural family nouns and loro always take the definite article.' },
  },
  {
    id: 'pp-dr-04',
    drillKind: 'sentence-builder',
    audioIt: 'Il loro padre lavora in centro.',
    primaryLabel: 'Il loro padre lavora in centro.',
    secondaryLabel: 'loro family exception',
    cueBn: 'বাক্য তৈরি করুন: "তাদের বাবা শহরের কেন্দ্রে কাজ করেন।"',
    cueEn: 'Build: "Their father works downtown."',
    sentenceTokens: ['lavora', 'padre', 'Il', 'centro.', 'loro', 'in'],
    acceptedSentences: ['Il loro padre lavora in centro.', 'Il loro padre lavora in centro'],
    feedbackDetail: { bn: 'মনে রাখুন: একবচন পরিবার হলেও loro সর্বদা আর্টিকেল নেয় → Il loro padre।', en: 'Even for singular family members, loro keeps the article: Il loro padre.' },
  },
  {
    id: 'pp-dr-05',
    drillKind: 'fill-blank',
    audioIt: 'Marco prende la sua borsa.',
    primaryLabel: 'la sua',
    secondaryLabel: 'agrees with borsa',
    secondaryLabelTr: { bn: 'borsa (স্ত্রী) অনুযায়ী', en: 'agrees with borsa (f.)' },
    promptOverride: { bn: '«মার্কো তার ব্যাগ নিচ্ছে» — সঠিক রূপ কোনটি?', en: 'Pick the right possessive for «Marco takes his bag»:' },
    promptIt: 'Marco prende ___ borsa prima di uscire.',
    explicitOptions: [
      { id: 'd1', primaryLabel: 'il suo', secondaryLabel: '', secondaryLabelTr: { bn: 'পুরুষ মালিক ভেবে ভুল', en: 'wrong gender match' } },
      { id: 'd2', primaryLabel: 'i suoi', secondaryLabel: '', secondaryLabelTr: { bn: 'বহুবচন', en: 'plural' } },
      { id: 'd3', primaryLabel: 'sua', secondaryLabel: '', secondaryLabelTr: { bn: 'বস্তুর আগে আর্টিকেল দরকার', en: 'missing article' } },
    ],
    cueBn: 'la borsa স্ত্রীলিঙ্গ একবচন',
    cueEn: 'la borsa is feminine singular',
    feedbackDetail: { bn: 'মালিক মার্কো (পুরুষ) হলেও ব্যাগ (la borsa) স্ত্রীলিঙ্গ, তাই "la sua borsa"।', en: 'Possessives agree with the object (la borsa → la sua), not the owner!' },
  },
  {
    id: 'pp-dr-06',
    drillKind: 'listening',
    audioIt: 'Signora, ecco il Suo biglietto.',
    primaryLabel: 'il Suo biglietto',
    secondaryLabel: 'formal your',
    secondaryLabelTr: { bn: 'আপনার টিকিট (আনুষ্ঠানিক)', en: 'your ticket (formal)' },
    promptOverride: { bn: 'শুনুন এবং আনুষ্ঠানিক «আপনার টিকিট» নির্বাচন করুন:', en: 'Listen and choose formal "your ticket":' },
    explicitOptions: [
      { id: 'd1', primaryLabel: 'il tuo biglietto', secondaryLabel: '', secondaryLabelTr: { bn: 'অনানুষ্ঠানিক (তোমার)', en: 'informal (tu)' } },
      { id: 'd2', primaryLabel: 'la Sua biglietto', secondaryLabel: '', secondaryLabelTr: { bn: 'লিঙ্গ ভুল', en: 'wrong gender' } },
      { id: 'd3', primaryLabel: 'i Suoi biglietto', secondaryLabel: '', secondaryLabelTr: { bn: 'বচন ভুল', en: 'wrong number' } },
    ],
    cueBn: 'il biglietto (পুং একবচন) + আনুষ্ঠানিক Lei',
    cueEn: 'il biglietto (masc. sg.) + formal Lei',
    feedbackDetail: { bn: 'আনুষ্ঠানিক আপনার = il Suo / la Sua (এখানে il biglietto তাই il Suo biglietto)।', en: 'Formal your agrees with masc. sg. biglietto → il Suo biglietto.' },
  },
  {
    id: 'pp-dr-07',
    drillKind: 'sentence-builder',
    audioIt: 'Noi andiamo a trovare i nostri nonni.',
    primaryLabel: 'Noi andiamo a trovare i nostri nonni.',
    secondaryLabel: 'Pronoun + plural family',
    cueBn: 'বাক্য তৈরি করুন: "আমরা আমাদের দাদা-দাদিকে দেখতে যাচ্ছি।"',
    cueEn: 'Build: "We are going to visit our grandparents."',
    sentenceTokens: ['trovare', 'Noi', 'nostri', 'andiamo', 'nonni.', 'a', 'i'],
    acceptedSentences: ['Noi andiamo a trovare i nostri nonni.', 'Noi andiamo a trovare i nostri nonni'],
    feedbackDetail: { bn: 'i nostri nonni বহুবচন হওয়ায় আর্টিকেল "i" বসে।', en: 'i nostri nonni is plural, so it keeps the definite article.' },
  },
  {
    id: 'pp-dr-08',
    drillKind: 'mcq',
    audioIt: 'Lei lavora all’università.',
    primaryLabel: 'Lei lavora',
    secondaryLabel: 'she / formal you',
    secondaryLabelTr: { bn: 'সে (নারী) / আপনি', en: 'she / formal you' },
    promptOverride: { bn: 'সঠিক ব্যক্তিবাচক সর্বনাম ও ক্রিয়ার মিল কোনটি?', en: 'Which subject pronoun matches «___ prendiamo il treno»?' },
    promptIt: '___ prendiamo il treno alle nove.',
    explicitOptions: [
      { id: 'd1', primaryLabel: 'Voi', secondaryLabel: '', secondaryLabelTr: { bn: 'তোমরা (prendete)', en: 'prendete' } },
      { id: 'd2', primaryLabel: 'Loro', secondaryLabel: '', secondaryLabelTr: { bn: 'তারা (prendono)', en: 'prendono' } },
      { id: 'd3', primaryLabel: 'Io', secondaryLabel: '', secondaryLabelTr: { bn: 'আমি (prendo)', en: 'prendo' } },
    ],
    cueBn: '-iamo = আমরা (১ম বহুবচন)',
    cueEn: '-iamo ending = we (1st plural)',
    feedbackDetail: { bn: 'prendiamo হলো noi-এর রূপ: Noi prendiamo il treno.', en: '-iamo always corresponds to the pronoun noi (we).' },
  },
];

// 28 Exam questions (>= 25 required)
export const A1_PRONOUNS_POSSESSIVES_EXAM_POOL: AcademyExamQuestion[] = [
  {
    id: 'exam-pp-01',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«তোমরা (Voi)» সর্বনামের সাথে «parlare» ক্রিয়ার কোন রূপ বসে?', en: 'Which verb form matches the pronoun «voi»?' },
    audioIt: 'Voi parlate italiano.',
    options: ['parlate', 'parliamo', 'parlano', 'parli'],
    answer: 0,
    explanation: { bn: 'voi → parlate (-ate); আমরা = parliamo, তারা = parlano।', en: 'voi takes the -ate ending: Voi parlate.' },
  },
  {
    id: 'exam-pp-02',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'কারো সাথে আনুষ্ঠানিকভাবে "আপনি" বলে কথা বলতে কোন সর্বনাম ব্যবহার করবেন?', en: 'Which pronoun means formal singular "you" in Italian?' },
    audioIt: 'Lei è molto gentile.',
    options: ['Lei', 'Voi', 'Tu', 'Loro'],
    answer: 0,
    explanation: { bn: 'একজন অপরিচিত বা সম্মানিত ব্যক্তিকে "আপনি" বলতে বড় অক্ষরের "Lei" (৩য় পুরুষ একবচন ক্রিয়া) বসে।', en: 'Formal singular "you" is Lei (capitalized, with 3rd-person sg. verbs).' },
  },
  {
    id: 'exam-pp-03',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«mio»-র পুংলিঙ্গ বহুবচন রূপ কোনটি?', en: 'What is the masculine plural form of «mio»?' },
    audioIt: 'i miei amici',
    options: ['i miei', 'i mioi', 'i mii', 'le mie'],
    answer: 0,
    explanation: { bn: 'mio → পুং বহুবচন i miei, স্ত্রী বহুবচন le mie।', en: 'The masculine plural of il mio is the irregular i miei.' },
  },
  {
    id: 'exam-pp-04',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «___ fratello vive a Bologna.»', en: 'Choose the correct phrase for "My brother lives in Bologna":' },
    audioIt: 'Mio fratello vive a Bologna.',
    options: ['Mio fratello', 'Il mio fratello', 'La mia fratello', 'I miei fratello'],
    answer: 0,
    explanation: { bn: 'একবচন ও বিশেষণহীন পরিবারের সদস্য (fratello) হওয়ায় আর্টিকেল ছাড়াই "Mio fratello" হবে।', en: 'Singular unmodified family nouns drop the article: Mio fratello.' },
  },
  {
    id: 'exam-pp-05',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «___ sorelle abitano a Roma.»', en: 'Choose the correct phrase for "My sisters live in Rome":' },
    audioIt: 'Le mie sorelle abitano a Roma.',
    options: ['Le mie sorelle', 'Mie sorelle', 'La mia sorelle', 'I miei sorelle'],
    answer: 0,
    explanation: { bn: 'পরিবারের শব্দ বহুবচন (sorelle) হলে আর্টিকেল বাধ্যতামূলক: Le mie sorelle।', en: 'Plural family members always keep the article: Le mie sorelle.' },
  },
  {
    id: 'exam-pp-06',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«তাদের বাবা» বলতে কোন রূপটি সঠিক?', en: 'How do you say "their father" in Italian?' },
    audioIt: 'il loro padre',
    options: ['il loro padre', 'loro padre', 'la loro padre', 'i loro padre'],
    answer: 0,
    explanation: { bn: 'অধিকারসূচক "loro" একবচন পরিবারের আগেও সবসময় আর্টিকেল নেয়: il loro padre।', en: 'loro ALWAYS takes the definite article, even with singular family nouns.' },
  },
  {
    id: 'exam-pp-07',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «Marco ha dimenticato ___ chiave.»', en: 'Complete: «Marco forgot his key.»' },
    audioIt: 'Marco ha dimenticato la sua chiave.',
    options: ['la sua', 'il suo', 'i suoi', 'le sue'],
    answer: 0,
    explanation: { bn: 'মালিক মার্কো পুরুষ হলেও chiave স্ত্রীলিঙ্গ একবচন, তাই la sua chiave।', en: 'la chiave is feminine singular, so suo agrees as la sua.' },
  },
  {
    id: 'exam-pp-08',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«তার প্রিয় ভাই» (বিশেষণসহ পরিবার) — সঠিক রূপ কোনটি?', en: 'How do you say "my dear brother" (modified family noun)?' },
    audioIt: 'il mio caro fratello',
    options: ['il mio caro fratello', 'mio caro fratello', 'la mia caro fratello', 'i miei caro fratello'],
    answer: 0,
    explanation: { bn: 'পরিবারের সদস্যের সাথে বিশেষণ (caro) যুক্ত হলে আর্টিকেল বসে: il mio caro fratello।', en: 'When modified by an adjective (caro), keep the article: il mio caro fratello.' },
  },
  {
    id: 'exam-pp-09',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«tuo»-র স্ত্রীলিঙ্গ বহুবচন রূপ কোনটি? (যেমন: তোমার চাবিগুলো)', en: 'What is the feminine plural of «tuo»?' },
    audioIt: 'le tue chiavi',
    options: ['le tue', 'i tuoi', 'la tua', 'le tu'],
    answer: 0,
    explanation: { bn: 'tuo / tua / tuoi / tue — স্ত্রীলিঙ্গ বহুবচন হলো le tue।', en: 'Feminine plural of il tuo is le tue.' },
  },
  {
    id: 'exam-pp-10',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'অধিকারসূচক «loro» সম্পর্কে কোনটি সত্য?', en: 'Which rule applies to the possessive «loro» (their)?' },
    audioIt: 'i loro libri e le loro case',
    options: [
      'loro never changes ending; only the article changes',
      'loro changes to lora and lore',
      'loro never uses a definite article',
      'loro becomes lori in masculine plural',
    ],
    localizedOptions: {
      bn: [
        'loro কখনো শেষ অক্ষর বদলায় না; শুধু আগের আর্টিকেল বদলায়',
        'loro স্ত্রীলিঙ্গে lora ও বহুবচনে lore হয়ে যায়',
        'loro-র আগে কখনোই আর্টিকেল বসে না',
        'loro পুং বহুবচনে lori হয়ে যায়',
      ],
      en: [
        'loro never changes ending; only the article changes',
        'loro changes to lora and lore',
        'loro never uses a definite article',
        'loro becomes lori in masculine plural',
      ],
    },
    answer: 0,
    explanation: { bn: 'il loro, la loro, i loro, le loro — loro অপরিবর্তিত থাকে।', en: 'loro is invariable across gender and number.' },
  },
  {
    id: 'exam-pp-11',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'কথা বলার সময় কেন ইতালিয়ানরা প্রায়ই «io, tu, noi» বাদ দেন?', en: 'Why are Italian subject pronouns (io, tu, noi) frequently omitted?' },
    audioIt: 'Abitiamo a Firenze.',
    options: [
      'Because verb endings clearly show who the subject is',
      'Because subject pronouns are forbidden in writing',
      'Because all verbs share the same ending',
      'Only formal speech drops pronouns',
    ],
    localizedOptions: {
      bn: [
        'কারণ ক্রিয়ার শেষ অক্ষর দেখেই স্পষ্ট বোঝা যায় কর্তা কে',
        'কারণ লেখায় সর্বনাম ব্যবহার করা নিষিদ্ধ',
        'কারণ সব সর্বনামের ক্রিয়ার রূপ এক',
        'শুধু আনুষ্ঠানিক ভাষায় সর্বনাম বাদ দেওয়া হয়',
      ],
      en: [
        'Because verb endings clearly show who the subject is',
        'Because subject pronouns are forbidden in writing',
        'Because all verbs share the same ending',
        'Only formal speech drops pronouns',
      ],
    },
    answer: 0,
    explanation: { bn: 'যেমন Abitiamo অর্থ কেবল "আমরা থাকি"-ই হতে পারে, তাই noi ছাড়াও অর্থ স্পষ্ট।', en: 'Unique endings like -o, -i, -iamo identify the subject unambiguously.' },
  },
  {
    id: 'exam-pp-12',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «___ amici di Luca sono molto simpatici.»', en: 'Pick the correct possessive for "Luca’s (his) friends":' },
    audioIt: 'I suoi amici sono molto simpatici.',
    options: ['I suoi', 'Il suo', 'Le sue', 'Gli suoi'],
    answer: 0,
    explanation: { bn: 'suo-র পুং বহুবচন হলো I suoi।', en: 'Masculine plural of suo is i suoi.' },
  },
  {
    id: 'exam-pp-13',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«আপনার (আনুষ্ঠানিক) বই» বলতে কোনটি সঠিক?', en: 'How do you say formal "your book"?' },
    audioIt: 'il Suo libro',
    options: ['il Suo libro', 'tuo libro', 'il vostro libro', 'la Sua libro'],
    answer: 0,
    explanation: { bn: 'আনুষ্ঠানিক Lei-এর অধিকারসূচক হলো il Suo / la Sua (বস্তু libro পুং তাই il Suo)।', en: 'Formal your + masc. sg. libro = il Suo libro.' },
  },
  {
    id: 'exam-pp-14',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «Dove sono ___ occhiali?» (আমার চশমা — পুং বহুবচন)', en: 'Fill in: «Where are my glasses?» (occhiali = masc. pl.)' },
    audioIt: 'Dove sono i miei occhiali?',
    options: ['i miei', 'le mie', 'il mio', 'miei'],
    answer: 0,
    explanation: { bn: 'occhiali (চশমা) পুং বহুবচন এবং সাধারণ বস্তু তাই আর্টিকেলসহ "i miei"।', en: 'Non-family nouns keep the article: i miei occhiali.' },
  },
  {
    id: 'exam-pp-15',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'কোন বাক্যটি পরিবারের সদস্যের নিয়মে সঠিক?', en: 'Which sentence follows the family-member article rule correctly?' },
    audioIt: 'Mia madre cucina bene, ma il loro padre cucina ancora meglio.',
    options: [
      'Mia madre e il loro padre parlano italiano.',
      'La mia madre e loro padre parlano italiano.',
      'Mia madre e loro padre parlano italiano.',
      'Miei fratelli e mia madre vivono qui.',
    ],
    answer: 0,
    explanation: { bn: 'mia madre (আর্টিকেল ছাড়া) কিন্তু il loro padre (loro-তে আর্টিকেলসহ)।', en: 'mia madre drops the article, while loro always retains il.' },
  },
  {
    id: 'exam-pp-16',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«আমাদের শহর» (la città = স্ত্রী) বলতে কোনটি লিখবেন?', en: 'How do you say "our city"?' },
    audioIt: 'la nostra città',
    options: ['la nostra città', 'nostra città', 'il nostro città', 'le nostre città'],
    answer: 0,
    explanation: { bn: 'città পরিবারের সদস্য নয় এবং স্ত্রী একবচন, তাই la nostra città।', en: 'città is feminine singular and non-family, so use la nostra città.' },
  },
  {
    id: 'exam-pp-17',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«তোমাদের (voi) শিক্ষকেরা» (masc. pl.) — সঠিক কোনটি?', en: 'How do you say "your teachers" when addressing a group (voi)?' },
    audioIt: 'i vostri insegnanti',
    options: ['i vostri insegnanti', 'il vostro insegnanti', 'i tuoi insegnanti', 'le vostre insegnante'],
    answer: 0,
    explanation: { bn: 'তোমাদের = vostro/a/i/e; পুং বহুবচনে i vostri insegnanti।', en: 'Multiple owners (you pl.) + masc. pl. teachers = i vostri insegnanti.' },
  },
  {
    id: 'exam-pp-18',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'নিচের কোন সর্বনামটির অর্থ "তারা"?', en: 'Which subject pronoun means "they"?' },
    audioIt: 'Loro lavorano insieme.',
    options: ['loro', 'noi', 'voi', 'lui'],
    answer: 0,
    explanation: { bn: 'loro = তারা; noi = আমরা; voi = তোমরা।', en: 'loro means "they".' },
  },
  {
    id: 'exam-pp-19',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «Giulia parla con ___ nonna al telefono.»', en: 'Complete: «Giulia speaks with her grandmother on the phone.»' },
    audioIt: 'Giulia parla con sua nonna al telefono.',
    options: ['sua nonna', 'la sua nonna', 'il suo nonna', 'le sue nonna'],
    answer: 0,
    explanation: { bn: 'nonna একবচন ও বিশেষণহীন পরিবারের সদস্য, তাই con sua nonna (আর্টিকেল নেই)।', en: 'nonna is singular unmodified family, so drop the article: sua nonna.' },
  },
  {
    id: 'exam-pp-20',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'কোন জুটি ভুলভাবে মিলানো হয়েছে?', en: 'Which subject pronoun + possessive pair does NOT match?' },
    audioIt: 'noi → il nostro, voi → il vostro',
    options: ['noi → il vostro', 'io → il mio', 'tu → il tuo', 'loro → il loro'],
    answer: 0,
    explanation: { bn: 'noi-এর অধিকারসূচক হলো il nostro (আমারদের), il vostro নয় (তোমাদের)।', en: 'noi corresponds to il nostro (our), while voi takes il vostro.' },
  },
  {
    id: 'exam-pp-21',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «Elena e Sofia cercano ___ borse.»', en: 'Complete: «Elena and Sofia are looking for their bags.»' },
    audioIt: 'Elena e Sofia cercano le loro borse.',
    options: ['le loro borse', 'la loro borse', 'le sue borse', 'loro borse'],
    answer: 0,
    explanation: { bn: 'দুইজন মালিক (তারা) = loro এবং স্ত্রী বহুবচন le borse → le loro borse।', en: 'Two owners (they) + feminine plural bags = le loro borse.' },
  },
  {
    id: 'exam-pp-22',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«আব্বু / আম্মু» (la mamma / il papà) সম্পর্কে কোনটি সঠিক?', en: 'Which is natural with affectionate terms like "mamma" or "papà"?' },
    audioIt: 'La mia mamma prepara la pasta.',
    options: ['La mia mamma', 'Mio mamma', 'I miei mamma', 'Sua papà'],
    answer: 0,
    explanation: { bn: 'আদরের ডাক mamma ও papà-র সাথে সাধারণত আর্টিকেল রাখা হয় (la mia mamma)।', en: 'Affectionate family terms like mamma and papà normally keep the article.' },
  },
  {
    id: 'exam-pp-23',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'বাক্যে জোর বা তুলনা বোঝাতে কোন ব্যবহারটি সঠিক?', en: 'Which sentence uses subject pronouns for natural contrast?' },
    audioIt: 'Io prendo un tè, ma lui prende un caffè.',
    options: [
      'Io prendo un tè, ma lui prende un caffè.',
      'Mio prendo un tè, ma suo prende un caffè.',
      'Io prendi un tè, ma lei prendete un caffè.',
      'Me prendo un tè, ma lui prendono un caffè.',
    ],
    answer: 0,
    explanation: { bn: 'তুলনার সময় কর্তা সর্বনাম Io ও lui ব্যবহার করা হয়েছে।', en: 'Contrastive subjects use Io (I) and lui (he) with matching verb endings.' },
  },
  {
    id: 'exam-pp-24',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «Domani visito ___ zia.» (তোমার খালা/চাচি)', en: 'Fill in: «Tomorrow I am visiting your aunt.» (informal)' },
    audioIt: 'Domani visito tua zia.',
    options: ['tua zia', 'la tua zia', 'tuo zia', 'i tuoi zia'],
    answer: 0,
    explanation: { bn: 'zia একবচন পরিবারের সদস্য তাই আর্টিকেল ছাড়াই tua zia।', en: 'zia is singular unmodified family → tua zia (no article).' },
  },
  {
    id: 'exam-pp-25',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'শূন্যস্থান পূরণ করুন: «Questi sono ___ compagni di corso.» (আমাদের সহপাঠীরা)', en: 'Complete: «These are our classmates.»' },
    audioIt: 'Questi sono i nostri compagni di corso.',
    options: ['i nostri', 'il nostro', 'la nostra', 'nostri'],
    answer: 0,
    explanation: { bn: 'compagni পুং বহুবচন এবং বন্ধু/সহপাঠী পরিবারের সদস্য নয় → আর্টিকেলসহ i nostri।', en: 'compagni is non-family masculine plural → i nostri.' },
  },
  {
    id: 'exam-pp-26',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«tu» এবং «lei» ক্রিয়া রূপ কোনটি সঠিক?', en: 'Which verb pairing is completely accurate?' },
    audioIt: 'Tu studi molto e lei lavora in ufficio.',
    options: [
      'Tu studi e lei lavora.',
      'Tu studio e lei lavori.',
      'Tu lavora e lei studiano.',
      'Tu studiamo e lei lavorate.',
    ],
    answer: 0,
    explanation: { bn: 'সঠিক ক্রিয়া রূপ: tu → -i (studi), lei → -a (lavora)।', en: 'tu takes -i (studi) and lei takes -a (lavora).' },
  },
  {
    id: 'exam-pp-27',
    moduleId: 'pronouns-possessives',
    prompt: { bn: '«আমার বন্ধুটি» (পুরুষ বন্ধু = amico) বলতে কোনটি লিখবেন?', en: 'Pick the correct phrase for "my friend" (male):' },
    audioIt: 'il mio amico',
    options: ['il mio amico', 'mio amico', 'l’amico mio senza articolo', 'la mia amico'],
    answer: 0,
    explanation: { bn: 'amico পরিবারের সদস্য নয়, তাই আর্টিকেল লাগবে: il mio amico।', en: 'amico is not a family member, so keep the article: il mio amico.' },
  },
  {
    id: 'exam-pp-28',
    moduleId: 'pronouns-possessives',
    prompt: { bn: 'কোন বাক্যে আনুষ্ঠানিক «আপনি» এবং «আপনার» সঠিকভাবে ব্যবহৃত হয়েছে?', en: 'Which sentence uses both formal subject Lei and formal possessive correctly?' },
    audioIt: 'Signore, Lei ha il Suo passaporto?',
    options: [
      'Signore, Lei ha il Suo passaporto?',
      'Signore, tu ha il Suo passaporto?',
      'Signore, Lei hai il tuo passaporto?',
      'Signore, loro ha la Sua passaporto?',
    ],
    answer: 0,
    explanation: { bn: 'Lei (আপনি) + ha + il Suo passaporto (আপনার পাসপোর্ট)।', en: 'Formal Lei pairs with 3rd-sg. verb ha and il Suo passaporto.' },
  },
];
