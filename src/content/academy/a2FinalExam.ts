import type { AcademyExamQuestion } from './types';
import type { Tr } from '../types';
import {
  randomizeQuestionOptions,
  shuffleArray,
  type ExamAnswerRecord,
  type RandomFn,
} from '../../lib/examEngine';

export type A2FinalExamCategory =
  | 'grammar'
  | 'vocabulary'
  | 'reading'
  | 'listening'
  | 'communication';

export interface A2FinalExamQuestion extends AcademyExamQuestion {
  category: A2FinalExamCategory;
}

export const A2_FINAL_EXAM_DISTRIBUTION: Record<A2FinalExamCategory, number> = {
  grammar: 12,
  vocabulary: 8,
  reading: 6,
  listening: 6,
  communication: 8,
};

export const A2_FINAL_EXAM_CATEGORY_LABELS: Record<A2FinalExamCategory, Tr> = {
  grammar: { bn: 'ব্যাকরণ (Grammar)', en: 'Grammar', it: 'Grammatica' },
  vocabulary: { bn: 'শব্দভাণ্ডার (Vocabulary)', en: 'Vocabulary', it: 'Lessico' },
  reading: { bn: 'পঠন (Reading)', en: 'Reading', it: 'Lettura' },
  listening: { bn: 'শ্রবণ (Listening)', en: 'Listening', it: 'Ascolto' },
  communication: { bn: 'ব্যবহারিক যোগাযোগ (Communication)', en: 'Communication', it: 'Comunicazione' },
};

function makeQ(
  id: string,
  category: A2FinalExamCategory,
  prompt: Tr,
  options: [string, string, string, string],
  answer: number,
  explanation: Tr,
  extra?: {
    it?: string;
    audioIt?: string;
    localizedOptions?: { bn: string[]; en: string[]; it?: string[] };
  },
): A2FinalExamQuestion {
  return {
    id,
    moduleId: 'a2-final-exam',
    category,
    prompt,
    ...(extra?.it !== undefined ? { it: extra.it } : {}),
    ...(extra?.audioIt !== undefined ? { audioIt: extra.audioIt } : {}),
    options,
    ...(extra?.localizedOptions ? { localizedOptions: extra.localizedOptions } : {}),
    answer,
    explanation,
  };
}

export const A2_FINAL_EXAM_POOL: A2FinalExamQuestion[] = [
  // =========================================================================
  // 1. GRAMMAR (32 Qs)
  // =========================================================================
  makeQ('a2-fin-001', 'grammar', { bn: 'essere-সহ পাস্ট পার্টিসিপলের মিল নির্বাচন করুন:', en: 'Pick the correct participle agreement with essere:' }, ['partito', 'partita', 'partiti', 'partite'], 3, { bn: '«Le mie sorelle» স্ত্রীলিঙ্গ বহুবচন হওয়ায় পার্টিসিপল শেষে -e (partite) হয়।', en: 'With essere, a feminine plural subject (Le mie sorelle) requires -e: partite.' }, { it: 'Le mie sorelle sono ___ stamattina presto.' }),
  makeQ('a2-fin-002', 'grammar', { bn: 'গতির ক্রিয়া ও সহায়ক ক্রিয়া:', en: 'Choose the right auxiliary for movimento vs attività:' }, ['sono andato / ho camminato', 'ho andato / sono camminato', 'sono andato / sono camminato', 'ho andato / ho camminato'], 0, { bn: 'andare (গন্তব্যসহ গতি) essere নেয়; camminare (কাজ/হাঁটা) avere নেয়।', en: 'andare takes essere (sono andato), while activity verb camminare takes avere (ho camminato).' }, { it: 'Ieri io ___ in centro e poi ___ per due ore.' }),
  makeQ('a2-fin-003', 'grammar', { bn: 'অনিয়মিত পাস্ট পার্টিসিপল (chiedere):', en: 'Irregular past participle of chiedere:' }, ['chieduto', 'chiesto', 'chiedito', 'chieso'], 1, { bn: 'chiedere-এর অনিয়মিত পার্টিসিপল হলো chiesto।', en: 'The irregular past participle of chiedere is chiesto.' }, { it: 'Ho ___ informazioni allo sportello.' }),
  makeQ('a2-fin-004', 'grammar', { bn: 'অনিয়মিত পাস্ট পার্টিসিপল (aprire):', en: 'Irregular past participle of aprire:' }, ['aprito', 'apruto', 'aperto', 'apreso'], 2, { bn: 'aprire → aperto (যেমন: offrire→offerto, coprire→coperto)।', en: 'aprire has the irregular participle aperto.' }, { it: 'Chi ha ___ la finestra della cucina?' }),
  makeQ('a2-fin-005', 'grammar', { bn: 'প্রত্যক্ষ সর্বনামের সাথে পার্টিসিপলের মিল:', en: 'Agreement with preceding direct pronoun:' }, ['comprato', 'comprata', 'comprati', 'comprate'], 3, { bn: 'সর্বনাম «le» (le scarpe = স্ত্রী বহুবচন) আগে থাকায় comprate হয়।', en: 'Preceding feminine plural pronoun le triggers agreement: comprate.' }, { it: 'Le scarpe nere? Le ho ___ ieri in saldo.' }),
  makeQ('a2-fin-006', 'grammar', { bn: 'শৈশবের নিয়মিত অভ্যাসে কোন কাল বসবে?', en: 'Select the tense for childhood repeated habits:' }, ['sono andato', 'andavo', 'andrò', 'vada'], 1, { bn: 'অতীতের অভ্যাস (Da bambino, ogni domenica) সবসময় imperfetto নেয়।', en: 'Repeated past habits take the imperfetto: andavo.' }, { it: 'Da bambino ogni estate ___ dai nonni al mare.' }),
  makeQ('a2-fin-007', 'grammar', { bn: 'চলমান পটভূমির মাঝখানে হঠাৎ ঘটনা:', en: 'Combine background scene and interrupting event:' }, ['cucinavo / è arrivato', 'ho cucinato / arrivava', 'cucinavo / arrivava', 'ho cucinato / è arrivato'], 0, { bn: 'mentre-এর সাথে চলমান পটভূমি imperfetto (cucinavo), হঠাৎ কাজ passato prossimo (è arrivato)।', en: 'Ongoing background (imperfetto: cucinavo) + sudden completed event (passato prossimo: è arrivato).' }, { it: 'Mentre ___, ___ il postino con il pacco.' }),
  makeQ('a2-fin-008', 'grammar', { bn: 'অনিয়মিত ভবিষ্যৎ কাল (venire):', en: 'Irregular future simple of venire:' }, ['venirò', 'verrò', 'venerò', 'vengo'], 1, { bn: 'venire ভবিষ্যতে দ্বিগুণ r নেয়: verrò, verrai, verrà।', en: 'venire contracts to verr- in the future: verrò.' }, { it: 'Domani ___ anch’io alla riunione delle dieci.' }),
  makeQ('a2-fin-009', 'grammar', { bn: 'ভবিষ্যৎ অনুমান (probability in futuro semplice):', en: 'Future of probability:' }, ['erano', 'sono state', 'saranno', 'stanno'], 2, { bn: 'অনুমান করে সময় বা বয়স বলতে futuro (saranno = সম্ভবত … বাজে) বসে।', en: 'Probability about the present uses futuro semplice: saranno le sei.' }, { it: 'Che ore sono? Non ho l’orologio, ma ___ già le sei.' }),
  makeQ('a2-fin-010', 'grammar', { bn: 'এখনো চলমান কাজের সময়কাল:', en: 'Ongoing duration up to the present:' }, ['fa', 'fra', 'da', 'per'], 2, { bn: 'এখনো চলছে বোঝাতে presente + da ব্যবহার হয় (lavoro qui da due anni)।', en: 'Ongoing duration that started in the past uses present tense + da.' }, { it: 'Lavoro in questo ospedale ___ due anni.' }),
  makeQ('a2-fin-011', 'grammar', { bn: 'অতীত ও ভবিষ্যৎ সময়ের চিহ্নিতকারী:', en: 'Choose between fa (ago) and fra (in):' }, ['fa / fra', 'fra / fa', 'da / fa', 'per / da'], 0, { bn: '«এক মাস আগে» = un mese fa; «তিন দিন পর» = fra tre giorni।', en: 'fa = ago (past); fra = in (future).' }, { it: 'Sono arrivato un mese ___ e partirò ___ tre giorni.' }),
  makeQ('a2-fin-012', 'grammar', { bn: 'অতীত গল্পের সূচনা ও উপসংহার সংযোজক:', en: 'Pick the logical narrative conclusion:' }, ['All’improvviso', 'Alla fine', 'Prima di tutto', 'Nel frattempo'], 1, { bn: 'অবশেষে গল্পের শেষ বোঝাতে Alla fine (শেষ পর্যন্ত)।', en: 'Closing a story takes Alla fine ("in the end").' }, { it: 'Dopo molta attesa allo sportello, ___ abbiamo risolto tutto.' }),
  makeQ('a2-fin-013', 'grammar', { bn: 'অতীতে প্রতিফলক ক্রিয়া (svegliarsi, noi):', en: 'Reflexive verb in passato prossimo for noi:' }, ['abbiamo svegliati', 'ci abbiamo svegliato', 'ci siamo svegliati', 'siamo svegliato'], 2, { bn: 'প্রতিফলক ক্রিয়া সর্বদা essere নেয় এবং পার্টিসিপল কর্তার সাথে মেলে: ci siamo svegliati।', en: 'Reflexives take essere and agree with the subject: ci siamo svegliati.' }, { it: 'Stamattina noi ___ alle cinque e mezza.' }),
  makeQ('a2-fin-014', 'grammar', { bn: 'মডাল ক্রিয়া + গতির ক্রিয়া (অতীতে):', en: 'Past modal before a motion verb:' }, ['abbiamo dovuti', 'siamo dovuti', 'ho dovuto', 'dovremo'], 1, { bn: 'partire essere নেয়, তাই বহুবচন পুংলিঙ্গে sono/siamo dovuti partire।', en: 'Before essere verb partire, formal agreement uses siamo dovuti.' }, { it: 'Noi amici ___ partire subito per prendere l’ultimo treno.' }),
  makeQ('a2-fin-015', 'grammar', { bn: 'sapere বনাম conoscere-এর সঠিক ব্যবহার:', en: 'Distinguish sapere vs conoscere:' }, ['sai', 'conosci', 'sapete', 'conosco'], 1, { bn: 'শহর, মানুষ বা স্থানের সাথে পরিচিত থাকা বোঝাতে conoscere বসে।', en: 'Being familiar with people or places uses conoscere (Conosci bene Bologna?).' }, { it: 'Scusa, ___ un buon ristorante vicino al duomo?' }),
  makeQ('a2-fin-016', 'grammar', { bn: 'প্রত্যক্ষ কর্ম সর্বনাম (lo/la/li/le):', en: 'Choose the right direct object pronoun:' }, ['Lo', 'La', 'Li', 'Le'], 2, { bn: 'i documenti পুংলিঙ্গ বহুবচন → Li।', en: 'i documenti is masculine plural → Li.' }, { it: 'Hai preso i documenti? Sì, ___ ho messi nella cartella.' }),
  makeQ('a2-fin-017', 'grammar', { bn: 'পরোক্ষ কর্ম সর্বনাম (a Maria):', en: 'Indirect object pronoun for "to Maria":' }, ['la', 'lo', 'le', 'gli'], 2, { bn: 'একজন নারীকে (a Maria) বোঝাতে পরোক্ষ সর্বনাম le বসে।', en: '"to her" = indirect pronoun le.' }, { it: 'È il compleanno di Maria: ___ telefono stasera.' }),
  makeQ('a2-fin-018', 'grammar', { bn: 'সংযুক্ত সর্বনাম (combinati): me lo / te la:', en: 'Introductory combined pronoun:' }, ['gli lo', 'glielo', 'le lo', 'lo gli'], 1, { bn: 'gli/le + lo যুক্ত হয়ে সবসময় glielo হয়।', en: 'Indirect gli/le + direct lo always combine into glielo.' }, { it: 'Luca vuole il mio numero: ___ scrivo subito su WhatsApp.' }),
  makeQ('a2-fin-019', 'grammar', { bn: 'ci এবং ne-এর সঠিক প্রয়োগ:', en: 'Choose between ci and ne for quantities:' }, ['Ci', 'Ne', 'Li', 'Vi'], 1, { bn: 'সংখ্যা বা পরিমাণ উল্লেখ করলে অংশবাচক ne বসে: Ne prendo quattro।', en: 'Partitive quantities with numbers require ne.' }, { it: 'Quante mele vuoi? ___ prendo due chili.' }),
  makeQ('a2-fin-020', 'grammar', { bn: 'আর্টিকেলযুক্ত অব্যয় (in + l’ufficio):', en: 'Articulated preposition (in + l’):' }, ['nella', 'nell’', 'all’', 'sull’'], 1, { bn: 'in + l’ (স্বরবর্ণ-শুরু পুং একবচন ufficio) = nell’ufficio।', en: 'in + l’ contracts to nell’.' }, { it: 'Il direttore lavora ___ ufficio del terzo piano.' }),
  makeQ('a2-fin-021', 'grammar', { bn: 'স্থান বোঝাতে সম্বন্ধবাচক সর্বনাম:', en: 'Relative pronoun with preposition for places:' }, ['che', 'chi', 'in cui', 'di cui'], 2, { bn: 'অব্যয় (in) এর পরে কখনো che বসে না, তাই in cui (বা dove) বসে।', en: 'After a preposition like in, Italian requires cui (in cui), never che.' }, { it: 'Ecco la biblioteca ___ studio ogni pomeriggio.' }),
  makeQ('a2-fin-022', 'grammar', { bn: 'কারণ ও ফল সংযোজক:', en: 'Pick the result connector:' }, ['perché', 'quindi', 'mentre', 'anche se'], 1, { bn: 'বৃষ্টি ও বিলম্বের ফলাফল বোঝাতে quindi ("তাই")।', en: 'quindi introduces a logical consequence ("so/therefore").' }, { it: 'Pioveva forte, ___ abbiamo deciso di prendere un taxi.' }),
  makeQ('a2-fin-023', 'grammar', { bn: 'দুটি বিশেষ্যের তুলনায় di বনাম che:', en: 'Use di or che when comparing two nouns:' }, ['che', 'di', 'come', 'quanto'], 1, { bn: 'দুটি শহর বা বিশেষ্যের তুলনায় di বসে (Roma è più grande di Pisa)।', en: 'Comparing two nouns takes di.' }, { it: 'Milano è più grande ___ Bologna.' }),
  makeQ('a2-fin-024', 'grammar', { bn: 'ভালো-মন্দের অনিয়মিত তুলনা:', en: 'Choose adjective migliore vs adverb meglio:' }, ['migliore', 'meglio', 'ottimo', 'più bene'], 1, { bn: 'parlare একটি ক্রিয়া; ক্রিয়াকে বিশেষিত করতে ক্রিয়াবিশেষণ meglio বসে।', en: 'Modifying a verb requires the adverb meglio, not migliore.' }, { it: 'Dopo questo corso parlo italiano molto ___!' }),
  makeQ('a2-fin-025', 'grammar', { bn: 'ক্রমবাচক সংখ্যা (ordinali):', en: 'Correct feminine ordinal number:' }, ['quattro', 'quarto', 'quarta', 'quattresima'], 2, { bn: '«la volta» স্ত্রীলিঙ্গ একবচন, তাই quarta হবে।', en: 'la volta is feminine singular → la quarta volta.' }, { it: 'Questa è la ___ volta che visito Venezia.' }),
  makeQ('a2-fin-026', 'grammar', { bn: 'অনানুষ্ঠানিক ও না-বাচক আদেশ (tu):', en: 'Negative tu imperative:' }, ['parli', 'parla', 'parlare', 'parlate'], 2, { bn: 'tu না-বাচক আদেশে non + ক্রিয়ার মূল রূপ (infinito) বসে: Non parlare!।', en: 'Negative tu imperative takes non + infinitive: non parlare.' }, { it: 'Marco, non ___ così forte in biblioteca!' }),
  makeQ('a2-fin-027', 'grammar', { bn: 'আনুষ্ঠানিক Lei আদেশ ও ভদ্র কন্ডিশনাল:', en: 'Formal polite conditional request:' }, ['Vorresti', 'Vorrei', 'Potrebbe', 'Dovrai'], 2, { bn: 'অপরিচিত বা বয়স্ক কারও কাছে আনুষ্ঠানিক Lei অনুরোধে Potrebbe…?', en: 'Formal Lei polite requests take Potrebbe…?' }, { it: 'Scusi signora, ___ ripetere l’orario di apertura?' }),
  makeQ('a2-fin-028', 'grammar', { bn: 'stare + gerundio এবং stare per:', en: 'Choose imminent action (stare + per):' }, ['è', 'fa', 'sta', 'ha'], 2, { bn: '«ঠিক এখনই করতে যাচ্ছে» = stare + per + infinito (sta per partire)।', en: '"About to" requires stare + per + infinitive.' }, { it: 'Sbrigati! Il treno ___ per chiudere le porte.' }),
  makeQ('a2-fin-029', 'grammar', { bn: 'অনিশ্চিত শব্দ (qualche বনাম alcuni):', en: 'Noun number after qualche:' }, ['giorni', 'giorno', 'settimane', 'mesi'], 1, { bn: 'qualche-এর পর বিশেষ্য সবসময় একবচন হয় (qualche giorno = কিছু দিন)।', en: 'qualche always takes a singular noun: qualche giorno.' }, { it: 'Resteremo a Roma per qualche ___.' }),
  makeQ('a2-fin-030', 'grammar', { bn: 'নির্দেশক dimostrativo (quello + s+ব্যঞ্জন/z):', en: 'Demonstrative form before "studente":' }, ['quel', 'quello', 'quell’', 'quei'], 1, { bn: 'st- দিয়ে শুরু পুং একবচনের আগে lo / quello বসে: quello studente।', en: 'Nouns starting with s+consonant take quello: quello studente.' }, { it: 'Conosci ___ studente che parla quattro lingue?' }),
  makeQ('a2-fin-031', 'grammar', { bn: 'নৈর্ব্যক্তিক si এবং বহুবচন কর্ম:', en: 'Impersonal si with a plural object noun:' }, ['parla', 'parlano', 'parliamo', 'parlato'], 1, { bn: 'si-এর পর বহুবচন বিশেষ্য (due lingue) থাকলে ক্রিয়া বহুবচন হয়: si parlano।', en: 'Plural object noun following impersonal si triggers a plural verb: parlano.' }, { it: 'In questo ufficio si ___ inglese e italiano.' }),
  makeQ('a2-fin-032', 'grammar', { bn: 'A2 বাস্তব শর্তবাক্য (Se + presente):', en: 'Real condition with future/imperative result:' }, ['piove / resteremo', 'pioverebbe / restiamo', 'piovesse / resteremo', 'piovuto / restiamo'], 0, { bn: 'বাস্তব শর্ত: Se + বর্তমান কাল (piove), মূল বাক্যে ভবিষ্যৎ (resteremo)।', en: 'Real condition combines Se + present (piove) with future/present/imperative.' }, { it: 'Se domenica ___, ___ a casa a cucinare.' }),

  // =========================================================================
  // 2. VOCABULARY (22 Qs)
  // =========================================================================
  makeQ('a2-fin-033', 'vocabulary', { bn: '“সিকিউরিটি ডিপোজিট / জামানত”-এর ইতালিয়ান শব্দ কোনটি?', en: 'Pick the Italian phrase for "security deposit" (housing):' }, ['la caparra / deposito cauzionale', 'la raccolta differenziata', 'la busta paga', 'la carta d’imbarco'], 0, { bn: 'বাসা ভাড়ার জামানত = la caparra বা il deposito cauzionale।', en: 'Housing security deposit = la caparra / il deposito cauzionale.' }),
  makeQ('a2-fin-034', 'vocabulary', { bn: 'ডাক্তারের “প্রেসক্রিপশন” কোনটি?', en: 'Which word means "medical prescription"?' }, ['la ricevuta', 'la ricetta medica', 'la scadenza', 'la valigia'], 1, { bn: 'ওষুধের প্রেসক্রিপশন = la ricetta medica।', en: 'la ricetta medica = medical prescription.' }),
  makeQ('a2-fin-035', 'vocabulary', { bn: '“il binario” অর্থ কী?', en: 'What does "il binario" mean?' }, ['Train ticket', 'Train platform / track', 'Luggage locker', 'Bus stop'], 1, { bn: 'il binario = রেলের প্ল্যাটফর্ম / ট্র্যাক।', en: 'il binario = train platform / track.' }, { localizedOptions: { bn: ['ট্রেনের টিকিট', 'রেল প্ল্যাটফর্ম / লাইন', 'লাগেজ লকার', 'বাস স্টপেজ'], en: ['Train ticket', 'Train platform / track', 'Luggage locker', 'Bus stop'] } }),
  makeQ('a2-fin-036', 'vocabulary', { bn: 'চাকরির “সাক্ষাৎকার”-এর সঠিক ইতালিয়ান কোনটি?', en: 'Which means "job interview"?' }, ['il colloquio di lavoro', 'il pronto soccorso', 'il riscaldamento', 'l’annuncio'], 0, { bn: 'il colloquio di lavoro = চাকরির সাক্ষাৎকার।', en: 'il colloquio di lavoro.' }),
  makeQ('a2-fin-037', 'vocabulary', { bn: 'কোন শব্দটি “মেয়াদ শেষ হওয়া” বোঝায়?', en: 'Which verb means "to expire" (cards, contracts, food)?' }, ['firmare', 'scadere', 'noleggiare', 'guadagnare'], 1, { bn: 'scadere = মেয়াদ শেষ হওয়া; মেয়াদ তারিখ = la data di scadenza।', en: 'scadere = to expire.' }),
  makeQ('a2-fin-038', 'vocabulary', { bn: 'ব্যাংক থেকে “বেতন”-এর স্লিপকে বলে:', en: 'Monthly payslip in Italian:' }, ['la busta paga', 'la marca da bollo', 'la fermata', 'la febbre'], 0, { bn: 'la busta paga = বেতন স্লিপ।', en: 'la busta paga = payslip.' }),
  makeQ('a2-fin-039', 'vocabulary', { bn: '“যানজট” বোঝাতে কোন শব্দটি বসে?', en: 'Which word means "traffic jam / traffic"?' }, ['il traffico', 'il temporale', 'il turno', 'il tavolo'], 0, { bn: 'il traffico = যানবাহনের ভিড়/জ্যাম।', en: 'il traffico.' }),
  makeQ('a2-fin-040', 'vocabulary', { bn: 'গরম পানির “বয়লার / হিটার”:', en: 'Household boiler / water heater:' }, ['la caldaia', 'la farmacia', 'la cartolina', 'la carrozza'], 0, { bn: 'la caldaia = ঘরের হিটার ও গরম পানির মেশিন।', en: 'la caldaia.' }),
  makeQ('a2-fin-041', 'vocabulary', { bn: 'কোন শব্দটির অর্থ “গলা ব্যথা”?', en: 'Pick the word meaning "sore throat":' }, ['il mal di gola', 'il mal di schiena', 'la caviglia gonfia', 'il mal di testa'], 0, { bn: 'il mal di gola = গলা ব্যথা।', en: 'il mal di gola = sore throat.' }),
  makeQ('a2-fin-042', 'vocabulary', { bn: 'অনলাইন বা দোকানে কেনার পর কাগজের রসিদ:', en: 'Store purchase receipt:' }, ['lo scontrino', 'lo sciopero', 'lo sportello', 'lo scaffale'], 0, { bn: 'lo scontrino = কেনাকাটার রসিদ।', en: 'lo scontrino = receipt.' }),
  makeQ('a2-fin-043', 'vocabulary', { bn: '“আবাসিক ভাড়া” বোঝাতে কোন শব্দ?', en: 'Monthly rent in Italian:' }, ['l’affitto', 'il biglietto', 'il prelievo', 'il risparmio'], 0, { bn: 'l’affitto = বাড়ি/রুম ভাড়া।', en: 'l’affitto = rent.' }),
  makeQ('a2-fin-044', 'vocabulary', { bn: 'পরিবেশবান্ধব “বর্জ্য পৃথকীকরণ”:', en: 'Waste sorting / recycling in Italy:' }, ['la raccolta differenziata', 'la carta d’imbarco', 'la camera singola', 'la visita medica'], 0, { bn: 'বর্জ্য পৃথকীকরণ = la raccolta differenziata।', en: 'la raccolta differenziata.' }),
  makeQ('a2-fin-045', 'vocabulary', { bn: 'পাস বা টিকিটের মেয়াদ “নবায়ন করা”:', en: 'Verb meaning "to renew":' }, ['rinnovare', 'rimborsare', 'ricordare', 'riposare'], 0, { bn: 'rinnovare = নবায়ন করা (যথা: দলিল বা পাস)।', en: 'rinnovare = to renew.' }),
  makeQ('a2-fin-046', 'vocabulary', { bn: 'কোন শব্দটি “কানেক্টিং ট্রেন / সংযোগ”?', en: 'Train/flight connection:' }, ['la coincidenza', 'la condizionata', 'la colazione', 'la comprensione'], 0, { bn: 'la coincidenza = কানেক্টিং ট্রেন/ফ্লাইট।', en: 'la coincidenza = connection.' }),
  makeQ('a2-fin-047', 'vocabulary', { bn: 'অফিসের কাজের “শিফট”:', en: 'Work shift:' }, ['il turno', 'il tirocinio', 'il turismo', 'il terreno'], 0, { bn: 'il turno (যথা: il turno di notte = রাতের শিফট)।', en: 'il turno.' }),
  makeQ('a2-fin-048', 'vocabulary', { bn: 'ক্ষতিপূরণ বা পণ্যের “টাকা ফেরত”:', en: 'Money refund:' }, ['il rimborso', 'il riscaldamento', 'il ritardo', 'il ristorante'], 0, { bn: 'il rimborso = রিফান্ড।', en: 'il rimborso.' }),
  makeQ('a2-fin-049', 'vocabulary', { bn: '“হড়বড় বা তাড়াহুড়ো করে” বোঝাতে কোন ইতালিয়ান বাক্যাংশ বসে?', en: 'Phrase meaning "in a hurry / in a rush":' }, ['di fretta', 'a digiuno', 'd’accordo', 'con calma'], 0, { bn: 'di fretta বা avere fretta = তাড়াহুড়োয় থাকা।', en: 'di fretta = in a rush.' }),
  makeQ('a2-fin-050', 'vocabulary', { bn: 'পোশাকের “মাপ বা সাইজ”:', en: 'Clothing size:' }, ['la taglia', 'la tassa', 'la tenda', 'la tosse'], 0, { bn: 'la taglia = পোশাকের সাইজ (S, M, L)।', en: 'la taglia = size.' }),
  makeQ('a2-fin-051', 'vocabulary', { bn: 'আবহাওয়ার পূর্বাভাস কোনটি?', en: 'Weather forecast:' }, ['le previsioni del tempo', 'le spese condominiali', 'le ore di punta', 'le scarpe comode'], 0, { bn: 'আবহাওয়ার পূর্বাভাস = le previsioni del tempo।', en: 'le previsioni del tempo.' }),
  makeQ('a2-fin-052', 'vocabulary', { bn: 'পানির মিস্ত্রির ইতালিয়ান পেশা:', en: 'Occupation "plumber":' }, ['l’idraulico', 'l’ingegnere', 'l’infermiere', 'l’avvocato'], 0, { bn: 'l’idraulico = প্লাম্বার/পানির মিস্ত্রি।', en: 'l’idraulico.' }),
  makeQ('a2-fin-053', 'vocabulary', { bn: 'অন্য কারও পক্ষে কাজ করার লিখিত অধিকার:', en: 'Written authorisation letter:' }, ['la delega', 'la discesa', 'la dieta', 'la dogana'], 0, { bn: 'la delega = ক্ষমতাপত্র।', en: 'la delega.' }),
  makeQ('a2-fin-054', 'vocabulary', { bn: '“অপ্রত্যাশিত সমস্যা / ঘটনা”:', en: 'An unforeseen event / hitch:' }, ['l’imprevisto', 'l’incrocio', 'l’inventario', 'l’impiegato'], 0, { bn: 'l’imprevisto = অপ্রত্যাশিত বাধা বা ঘটনা।', en: 'l’imprevisto.' }),

  // =========================================================================
  // 3. READING COMPREHENSION (16 Qs — short authentic A2 texts)
  // =========================================================================
  makeQ(
    'a2-fin-055',
    'reading',
    { bn: 'বার্তাটি পড়ে উত্তর দিন: মেরামত কখন হবে?', en: 'Read the notice: when will the water be turned off?' },
    ['Tuesday 9:00–12:00', 'Tuesday afternoon 15:00–18:00', 'Monday morning', 'All week'],
    0,
    { bn: 'নোটিশে লেখা আছে মঙ্গলবার (martedì) সকাল ৯টা থেকে দুপুর ১২টা পর্যন্ত পানি বন্ধ থাকবে।', en: 'The notice states Tuesday (martedì) from 9:00 to 12:00.' },
    {
      it: '«Avviso ai condomini: martedì dalle 9:00 alle 12:00 verrà chiusa l’acqua per lavori urgenti alla caldaia centrale.»',
      localizedOptions: {
        bn: ['মঙ্গলবার সকাল ৯:০০ থেকে দুপুর ১২:০০ পর্যন্ত', 'মঙ্গলবার বিকেল ৩:০০ থেকে সন্ধ্যা ৬:০০ পর্যন্ত', 'সোমবার সকালে', 'পুরো সপ্তাহ'],
        en: ['Tuesday 9:00–12:00', 'Tuesday afternoon 15:00–18:00', 'Monday morning', 'All week'],
      },
    },
  ),
  makeQ(
    'a2-fin-056',
    'reading',
    { bn: 'ইমেইলটি পড়ে বলুন: সারা কেন যেতে পারবে না?', en: 'Read the email: why can’t Sara come to dinner?' },
    ['She works late on Friday', 'She went to Venice', 'She has a fever', 'She missed her bus'],
    0,
    { bn: 'সারা লিখেছে যে শুক্রবার সে সন্ধ্যা সাড়ে নয়টা পর্যন্ত অফিসে কাজ করবে।', en: 'Sara writes she is working until 21:30 on Friday.' },
    {
      it: '«Ciao Marco, grazie dell’invito per venerdì sera! Purtroppo devo finire un progetto e lavorerò fino alle 21:30. Ci vediamo sabato a pranzo?»',
      localizedOptions: {
        bn: ['শুক্রবার রাত ৯:৩০ পর্যন্ত অফিসে কাজ আছে', 'সে ভেনিসে চলে গেছে', 'তার জ্বর হয়েছে', 'সে বাস মিস করেছে'],
        en: ['She works late on Friday', 'She went to Venice', 'She has a fever', 'She missed her bus'],
      },
    },
  ),
  makeQ(
    'a2-fin-057',
    'reading',
    { bn: 'ফার্মেসির সাইনবোর্ড অনুযায়ী রবিবার ওষুধ কোথায় পাবেন?', en: 'According to the sign, where can you get medicine on Sunday?' },
    ['At Farmacia Centrale in Via Roma 18', 'Wait until Monday 8:00', 'Here inside this shop', 'At the train station'],
    0,
    { bn: 'রবিবার এই ফার্মেসি বন্ধ; জরুরি প্রয়োজনে রোমা রোডের ১৮ নম্বরে Farmacia Centrale খোলা আছে।', en: 'This shop is closed on Sunday; Farmacia Centrale at Via Roma 18 is open on duty.' },
    {
      it: '«Chiuso la domenica. Per urgenze, oggi è aperta la Farmacia Centrale di turno in Via Roma 18 (orario continuato).»',
      localizedOptions: {
        bn: ['ভিয়া রোমা ১৮-এর ডিউটি ফার্মেসি চেন্ত্রালে-তে', 'সোমবার সকাল আটটা পর্যন্ত অপেক্ষা করতে হবে', 'এই দোকানের ভেতরেই', 'রেলস্টেশনে'],
        en: ['At Farmacia Centrale in Via Roma 18', 'Wait until Monday 8:00', 'Here inside this shop', 'At the train station'],
      },
    },
  ),
  makeQ(
    'a2-fin-058',
    'reading',
    { bn: 'ট্রেনের মেসেজ পড়ে বলুন: যাত্রীকে কী করতে হবে?', en: 'Read the SMS: what must the passenger do?' },
    ['Board from platform 7 instead of 4', 'Buy a new ticket', 'Wait until tomorrow', 'Go to the airport'],
    0,
    { bn: 'ট্রেনটি ২০ মিনিট পর ছাড়বে এবং ৪ নম্বরের বদলে ৭ নম্বর প্ল্যাটফর্ম থেকে ছাড়বে।', en: 'The train now leaves from platform 7 instead of 4 (20 minutes later).' },
    {
      it: '«Trenitalia avvisa: il treno 2418 per Padova partirà con 20 minuti di ritardo dal binario 7 anziché dal binario 4.»',
      localizedOptions: {
        bn: ['৪ নম্বরের বদলে ৭ নম্বর প্ল্যাটফর্ম থেকে উঠতে হবে', 'নতুন টিকিট কিনতে হবে', 'আগামীকাল পর্যন্ত অপেক্ষা করতে হবে', 'বিমানবন্দরে যেতে হবে'],
        en: ['Board from platform 7 instead of 4', 'Buy a new ticket', 'Wait until tomorrow', 'Go to the airport'],
      },
    },
  ),
  makeQ(
    'a2-fin-059',
    'reading',
    { bn: 'জব অফারটি পড়ে বলুন: চাকরির শর্ত কী?', en: 'Read the job advert: what does this role involve?' },
    ['Fixed-term shifts with weekend availability', 'Night-only remote coding', 'Part-time morning hospital work', 'Unpaid internship only'],
    0,
    { bn: '৬ মাসের অস্থায়ী চুক্তি, শিফটভিত্তিক কাজ এবং শনিবার কাজের সক্ষমতা চাওয়া হয়েছে।', en: '6-month fixed-term contract, shift work, and Saturday availability required.' },
    {
      it: '«Cerchiamo commesso/a per negozio in centro: contratto determinato 6 mesi, lavoro su turni, richiesta disponibilità il sabato. Inviare CV.»',
      localizedOptions: {
        bn: ['৬ মাসের চুক্তি, শিফটভিত্তিক কাজ ও শনিবার কাজ করার সুযোগ', 'শুধু রাতে বাসা থেকে কম্পিউটারের কাজ', 'সকালে হাসপাতালে পার্ট-টাইম কাজ', 'বেতনবিহীন ইন্টার্নশিপ'],
        en: ['Fixed-term shifts with weekend availability', 'Night-only remote coding', 'Part-time morning hospital work', 'Unpaid internship only'],
      },
    },
  ),
  makeQ(
    'a2-fin-060',
    'reading',
    { bn: 'হোটেল বুকিং কনফার্মেশন অনুযায়ী সকালের নাস্তা কি মূল দামে আছে?', en: 'Read the hotel confirmation: is breakfast included in the price?' },
    ['Yes, breakfast is included', 'No, it costs €15 extra', 'Only on Sundays', 'No breakfast is served'],
    0,
    { bn: '«colazione a buffet compresa nel prezzo» মানে নাস্তা দামের মধ্যেই অন্তর্ভুক্ত।', en: 'Buffet breakfast is explicitly included in the price.' },
    {
      it: '«Gentile Ospite, confermiamo la Sua camera doppia dal 12 al 15 giugno (240 € totali, colazione a buffet compresa nel prezzo).»',
      localizedOptions: {
        bn: ['হ্যাঁ, বুফে নাস্তা মূল দামের মধ্যেই অন্তর্ভুক্ত', 'না, বাড়তি ১৫ ইউরো দিতে হবে', 'শুধু রবিবার পাওয়া যাবে', 'হোটেলে কোনো নাস্তা নেই'],
        en: ['Yes, breakfast is included', 'No, it costs €15 extra', 'Only on Sundays', 'No breakfast is served'],
      },
    },
  ),
  makeQ(
    'a2-fin-061',
    'reading',
    { bn: 'ক্লিনিকের নির্দেশ পড়ে উত্তর দিন: পরীক্ষার আগে কী নিষেধ?', en: 'Read the clinic note: what must you avoid before the test?' },
    ['Food and coffee', 'Drinking plain water', 'Bringing the health card', 'Arriving before 8:00'],
    0,
    { bn: 'খালি পেটে (a digiuno) আসতে হবে; সাধারণ পানি খাওয়া যাবে কিন্তু খাবার ও কফি নিষেধ।', en: 'Come fasting: still water is permitted, food and coffee are prohibited.' },
    {
      it: '«Ricordiamo che per le analisi del sangue di domani mattina deve presentarsi a digiuno: può bere acqua naturale, ma niente cibo né caffè.»',
      localizedOptions: {
        bn: ['খাবার এবং কফি খাওয়া নিষেধ', 'সাধারণ পানি পান করা নিষেধ', 'হেলথ কার্ড আনা নিষেধ', 'সকাল আটটার আগে আসা নিষেধ'],
        en: ['Food and coffee', 'Drinking plain water', 'Bringing the health card', 'Arriving before 8:00'],
      },
    },
  ),
  makeQ(
    'a2-fin-062',
    'reading',
    { bn: 'পৌরসভার নোটিশ পড়ে বলুন: নতুন আইডি কার্ডের জন্য কী সাথে আনতে হবে?', en: 'Read the town hall notice: what must you bring to renew your ID?' },
    ['Expired ID, 2 photos, €22', 'Only a passport photo', 'Rental contract only', 'Doctor referral'],
    0,
    { bn: 'মেয়াদোত্তীর্ণ আইডি, দুই কপি ছবি এবং ২২ ইউরো লাগবে।', en: 'Expired ID, two recent photos, and 22 euros (cash or card).' },
    {
      it: '«Rinnovo Carta d’Identità: allo sportello 3 portare il documento scaduto, due fototessere recenti e 22 euro (anche bancomat).»',
      localizedOptions: {
        bn: ['পুরোনো কার্ড, ২টি ছবি এবং ২২ ইউরো', 'শুধু একটি পাসপোর্ট ছবি', 'শুধু বাসা ভাড়ার চুক্তি', 'ডাক্তারের রেফারেল'],
        en: ['Expired ID, 2 photos, €22', 'Only a passport photo', 'Rental contract only', 'Doctor referral'],
      },
    },
  ),
  makeQ(
    'a2-fin-063',
    'reading',
    { bn: 'অনলাইন দোকানের রিটার্ন নীতি অনুযায়ী পোশাক বদলাতে কী দরকার?', en: 'Store return policy: what is required for a refund or exchange?' },
    ['Receipt and original tags within 14 days', 'Only sending an email after 2 months', 'Paying a 10% fee', 'Bringing two friends'],
    0,
    { bn: '১৪ দিনের মধ্যে মূল ট্যাগ ও রসিদসহ ফেরত দিলে টাকা বা অন্য সাইজ পাওয়া যায়।', en: 'Items with original tag and receipt can be exchanged/refunded within 14 days.' },
    {
      it: '«I capi acquistati possono essere cambiati o rimborsati entro 14 giorni presentando lo scontrino e l’etichetta originale intatta.»',
      localizedOptions: {
        bn: ['১৪ দিনের মধ্যে রসিদ ও অক্ষত মূল ট্যাগ দেখানো', 'দুই মাস পর ইমেইল করা', '১০% জরিমানা দেওয়া', 'বন্ধুকে সাথে আনা'],
        en: ['Receipt and original tags within 14 days', 'Only sending an email after 2 months', 'Paying a 10% fee', 'Bringing two friends'],
      },
    },
  ),
  makeQ(
    'a2-fin-064',
    'reading',
    { bn: 'আবাসিক বিজ্ঞাপনটি পড়ে উত্তর দিন: ভাড়ার সাথে হিটিং খরচ কি আলাদা?', en: 'Read the flat listing: how is heating charged?' },
    ['Building fees include central heating', 'No heating in the flat', 'You must install gas yourself', 'Free electricity'],
    0,
    { bn: '«incluse nel condominio» অর্থাৎ ৯০ ইউরো সার্ভিস চার্জের ভেতর কেন্দ্রীয় হিটিং ধরা আছে।', en: 'Central heating is included in the 90€ building service fee.' },
    {
      it: '«Affittasi stanza singola arredata vicino alla metro: 450 € al mese più 90 € di spese condominiali con riscaldamento centralizzato incluso.»',
      localizedOptions: {
        bn: ['৯০ ইউরোর সার্ভিস চার্জের মধ্যেই কেন্দ্রীয় হিটিং অন্তর্ভুক্ত', 'ফ্ল্যাটে কোনো হিটিং নেই', 'আলাদা করে গ্যাস লাইন বসাতে হবে', 'বিদ্যুৎ সম্পূর্ণ ফ্রি'],
        en: ['Building fees include central heating', 'No heating in the flat', 'You must install gas yourself', 'Free electricity'],
      },
    },
  ),
  makeQ(
    'a2-fin-065',
    'reading',
    { bn: 'ডায়ারি অংশটি পড়ে বলুন: আন্নার ভ্রমণ কেমন ছিল?', en: 'Read the short story: how did Anna feel at the end of her trip?' },
    ['Tired yet very happy because the weather cleared', 'Angry the museum was closed all day', 'Scared of the train', 'Lost her ticket'],
    0,
    { bn: 'সকালে বৃষ্টি হলেও দুপুরে আকাশ পরিষ্কার হয়েছিল, তাই দিন শেষে ক্লান্ত হলেও খুব খুশি ছিল।', en: 'Morning rain cleared by midday; despite being tired, she was very happy.' },
    {
      it: '«Stamattina a Firenze pioveva, ma verso mezzogiorno è uscito il sole. Siamo saliti a Piazzale Michelangelo e alla fine eravamo stanchi ma felicissimi.»',
      localizedOptions: {
        bn: ['ক্লান্ত কিন্তু খুব খুশি ছিল কারণ দুপুরে রোদ উঠেছিল', 'সারাদিন জাদুঘর বন্ধ থাকায় রেগে ছিল', 'ট্রেনে উঠতে ভয় পেয়েছিল', 'টিকিট হারিয়ে ফেলেছিল'],
        en: ['Tired yet very happy because the weather cleared', 'Angry the museum was closed all day', 'Scared of the train', 'Lost her ticket'],
      },
    },
  ),
  makeQ(
    'a2-fin-066',
    'reading',
    { bn: 'পার্সেল ডেলিভারির চিরকুট পড়ে বলুন: পার্সেল এখন কোথায়?', en: 'Delivery slip: where is the parcel now?' },
    ['At the post office on Via Verdi from tomorrow 10:00', 'Returned to sender', 'Left outside the street door', 'With the neighbour at flat 1'],
    0,
    { bn: 'ডেলিভারি দেওয়ার সময় কেউ না থাকায় কাল সকাল ১০টা থেকে ভিয়া ভার্দির ডাকঘর থেকে তোলা যাবে।', en: 'No one was home; collect from Via Verdi post office starting tomorrow at 10:00.' },
    {
      it: '«Corriere espresso: non abbiamo trovato nessuno in casa. Il pacco sarà ritirabile da domani ore 10:00 presso l’ufficio postale di Via Verdi con un documento.»',
      localizedOptions: {
        bn: ['আগামীকাল সকাল ১০টা থেকে ভিয়া ভার্দির ডাকঘরে', 'প্রেরকের কাছে ফেরত গেছে', 'রাস্তার দরজার বাইরে পড়ে আছে', 'এক নম্বর ফ্ল্যাটের প্রতিবেশীর কাছে'],
        en: ['At the post office on Via Verdi from tomorrow 10:00', 'Returned to sender', 'Left outside the street door', 'With the neighbour at flat 1'],
      },
    },
  ),
  makeQ(
    'a2-fin-067',
    'reading',
    { bn: 'ধর্মঘটের নোটিশ পড়ে উত্তর দিন: কোন সময়ে বাস চলাচল নিশ্চিত?', en: 'Strike notice: when are buses guaranteed to run?' },
    ['06:00–09:00 and 18:00–21:00', 'All afternoon from 12:00 to 16:00', 'Only after midnight', 'Cancelled all 24 hours'],
    0,
    { bn: 'সকাল ৬–৯ এবং সন্ধ্যা ৬–৯টা নিরাপদ সময়সীমা (fasce di garanzia)।', en: 'Guaranteed windows are 06:00–09:00 and 18:00–21:00.' },
    {
      it: '«Domani sciopero dei trasporti locali: il servizio sarà garantito soltanto nelle fasce orarie 06:00–09:00 e 18:00–21:00.»',
      localizedOptions: {
        bn: ['সকাল ৬:০০–৯:০০ এবং সন্ধ্যা ৬:০০–৯:০০', 'দুপুর ১২:০০ থেকে বিকেল ৪:০০', 'শুধু মধ্যরাতের পর', '২৪ ঘণ্টাই পুরোপুরি বন্ধ'],
        en: ['06:00–09:00 and 18:00–21:00', 'All afternoon from 12:00 to 16:00', 'Only after midnight', 'Cancelled all 24 hours'],
      },
    },
  ),
  makeQ(
    'a2-fin-068',
    'reading',
    { bn: 'কোর্সের বিজ্ঞপ্তি পড়ে উত্তর দিন: সার্টিফিকেটের শর্ত কী?', en: 'Course rule: how do students qualify for the final exam?' },
    ['Attend at least 80% of lessons', 'Attend only the final week', 'Pay double tuition', 'Bring two laptops'],
    0,
    { bn: 'কমপক্ষে ৮০% ক্লাসে উপস্থিত থাকলে চূড়ান্ত পরীক্ষা ও সনদ পাওয়া যায়।', en: 'Minimum 80% attendance is required for the certificate and exam.' },
    {
      it: '«Per ottenere l’attestato finale e accedere all’esame di fine corso è obbligatoria la frequenza ad almeno l’80% delle lezioni.»',
      localizedOptions: {
        bn: ['কমপক্ষে ৮০% ক্লাসে উপস্থিত থাকতে হবে', 'শুধু শেষ সপ্তাহে এলেই হবে', 'দ্বিগুণ ফি দিতে হবে', 'দুটি ল্যাপটপ আনতে হবে'],
        en: ['Attend at least 80% of lessons', 'Attend only the final week', 'Pay double tuition', 'Bring two laptops'],
      },
    },
  ),
  makeQ(
    'a2-fin-069',
    'reading',
    { bn: 'বার্তাটি পড়ে বলুন: আজ কে কী কাজ করবে?', en: 'Read carefully: who will do the cleaning today?' },
    ['Marco cleans the kitchen, Sara buys supplies', 'Nobody is cleaning today', 'Marco goes to school all day', 'Only Sara cleans the stairs'],
    0,
    { bn: 'মার্কো রান্নাঘর পরিষ্কার করবে এবং সারা বিকেলে বাজার করবে।', en: 'Marco cleans the kitchen and Sara shops after 17:00.' },
    {
      it: '«Ragazzi, oggi pulisco io la cucina prima di uscire; Sara, quando torni dal lavoro dopo le 17:00, potresti prendere il detersivo?» — Marco',
      localizedOptions: {
        bn: ['মার্কো রান্নাঘর পরিষ্কার করবে এবং সারা কাজের পর ডিটারজেন্ট আনবে', 'আজ কেউ পরিষ্কার করবে না', 'মার্কো সারাদিন স্কুলে থাকবে', 'শুধু সারা সিঁড়ি পরিষ্কার করবে'],
        en: ['Marco cleans the kitchen, Sara buys supplies', 'Nobody is cleaning today', 'Marco goes to school all day', 'Only Sara cleans the stairs'],
      },
    },
  ),
  makeQ(
    'a2-fin-070',
    'reading',
    { bn: 'ডাক্তারের নোট পড়ে উত্তর দিন: ওষুধটি কত দিন খেতে হবে?', en: 'Doctor’s note: how long must the patient take the antibiotic?' },
    ['Twice a day for 7 days', 'Once a week for a month', 'Only until fever drops', 'On an empty stomach once'],
    0,
    { bn: 'টানা ৭ দিন (per sette giorni) প্রতি ১২ ঘণ্টায় একবার (অর্থাৎ দিনে ২ বার) খেতে হবে।', en: 'Every 12 hours (= twice a day) for seven full days.' },
    {
      it: '«Prendere una compressa ogni 12 ore dopo i pasti per sette giorni interi, anche se la febbre scompare prima.»',
      localizedOptions: {
        bn: ['টানা ৭ দিন, প্রতি ১২ ঘণ্টায় (দিনে ২ বার) খাওয়ার পর', 'মাসে একবার', 'শুধু জ্বর কমা পর্যন্ত', 'খালি পেটে একবার'],
        en: ['Twice a day for 7 days', 'Once a week for a month', 'Only until fever drops', 'On an empty stomach once'],
      },
    },
  ),

  // =========================================================================
  // 4. LISTENING COMPREHENSION (16 Qs — full Italian audioIt transcripts)
  // =========================================================================
  makeQ(
    'a2-fin-071',
    'listening',
    { bn: 'অডিওটি শুনে বলুন: ভেনিসগামী ট্রেনটি কোন প্ল্যাটফর্ম থেকে ছাড়বে এবং কত মিনিট দেরি?', en: 'Listen to the announcement: which platform and how much delay?' },
    ['Platform 5, 15 minutes late', 'Platform 15, 5 minutes late', 'Platform 2, cancelled', 'Platform 8, on time'],
    0,
    { bn: 'ঘোষণায় শোনা গেছে: «quindici minuti di ritardo» (১৫ মিনিট দেরি) এবং «binario cinque» (৫ নম্বর প্ল্যাটফর্ম)।', en: 'The speaker announces 15 minutes delay from platform 5.' },
    {
      audioIt: 'Attenzione: il treno regionale veloce per Venezia Santa Lucia delle quattordici e dieci viaggia con quindici minuti di ritardo e partirà dal binario cinque.',
      localizedOptions: {
        bn: ['৫ নম্বর প্ল্যাটফর্ম, ১৫ মিনিট দেরি', '১৫ নম্বর প্ল্যাটফর্ম, ৫ মিনিট দেরি', '২ নম্বর প্ল্যাটফর্ম, ট্রেন বাতিল', '৮ নম্বর প্ল্যাটফর্ম, সঠিক সময়ে'],
        en: ['Platform 5, 15 minutes late', 'Platform 15, 5 minutes late', 'Platform 2, cancelled', 'Platform 8, on time'],
      },
    },
  ),
  makeQ(
    'a2-fin-072',
    'listening',
    { bn: 'ডাক্তারের অডিও নির্দেশ শুনুন: রোগীর কখন ফিরে আসা উচিত?', en: 'Listen to the doctor: when should the patient return if symptoms stay?' },
    ['After four days if fever stays', 'Tonight at midnight', 'Next month only', 'Never return'],
    0,
    { bn: 'ডাক্তার বলেছেন: ৪ দিন পরও জ্বর থাকলে (se tra quattro giorni ha ancora febbre) আবার আসতে।', en: 'Doctor advises returning in four days if fever persists.' },
    {
      audioIt: 'Si riposi molto a casa per tre giorni, beva tè caldo e, se tra quattro giorni ha ancora la febbre, torni pure qui in ambulatorio.',
      localizedOptions: {
        bn: ['৪ দিন পরও জ্বর থাকলে আবার চেম্বারে আসতে', 'আজ রাতে মধ্যরাতে', 'আগামী মাসে শুধু', 'কখনো না আসতে'],
        en: ['After four days if fever stays', 'Tonight at midnight', 'Next month only', 'Never return'],
      },
    },
  ),
  makeQ(
    'a2-fin-073',
    'listening',
    { bn: 'রিসেপশনিস্টের কথা শুনুন: গেস্টের ঘর কোথায় এবং চেক-আউট কয়টায়?', en: 'Listen to the hotel receptionist: where is the room and when is check-out?' },
    ['Second floor room 208; check-out before 10:30', 'Ground floor room 102; check-out 14:00', 'Third floor; no breakfast', 'Room 208; check-out 18:00'],
    0,
    { bn: 'দোতলার (secondo piano) ২০৮ নম্বর রুম এবং সকাল ১০:৩০-এর মধ্যে চেক-আউট।', en: 'Room 208 on the second floor; check-out by 10:30 a.m.' },
    {
      audioIt: 'Ecco le chiavi della Sua camera 208 al secondo piano. La colazione inizia alle sette e le ricordiamo che il check-out è entro le dieci e trenta.',
      localizedOptions: {
        bn: ['দোতলা রুম ২০৮; চেক-আউট সকাল ১০:৩০-এর মধ্যে', 'নিচতলা রুম ১০২; চেক-আউট দুপুর ২:০০', 'তিনতলা (৩য় তলা); নাস্তা নেই', 'রুম ২০৮; সন্ধ্যা ৬:০০-টায় চেক-আউট'],
        en: ['Second floor room 208; check-out before 10:30', 'Ground floor room 102; check-out 14:00', 'Third floor; no breakfast', 'Room 208; check-out 18:00'],
      },
    },
  ),
  makeQ(
    'a2-fin-074',
    'listening',
    { bn: 'বাড়িওয়ালার ভয়েস মেসেজ শুনুন: টেকনিশিয়ান কখন আসবেন?', en: 'Listen to the landlord’s voicemail: when will the technician visit?' },
    ['Tomorrow between 14:00 and 15:00', 'This morning at 8:00', 'Next Monday evening', 'On Sunday afternoon'],
    0,
    { bn: 'মিস্ত্রি আগামীকাল (domani) দুপুর ২টা থেকে ৩টার মধ্যে আসবেন।', en: 'The technician comes tomorrow between 14:00 and 15:00.' },
    {
      audioIt: 'Buongiorno Marco, ho parlato con l’idraulico per il rubinetto della cucina: passerà domani pomeriggio tra le quattordici e le quindici.',
      localizedOptions: {
        bn: ['আগামীকাল বিকেল ২:০০ থেকে ৩:০০টার মধ্যে', 'আজ সকাল ৮:০০-টায়', 'আগামী সোমবার সন্ধ্যায়', 'রবিবার বিকেলে'],
        en: ['Tomorrow between 14:00 and 15:00', 'This morning at 8:00', 'Next Monday evening', 'On Sunday afternoon'],
      },
    },
  ),
  makeQ(
    'a2-fin-075',
    'listening',
    { bn: 'ব্যাংকের কর্মকর্তার কথা শুনুন: এটিএম কার্ড কখন ও কীভাবে পাবেন?', en: 'Listen to the bank clerk: how will the customer get the debit card?' },
    ['By post to home address within 6 days', 'At the counter right now', 'Must come back next month', 'Online only'],
    0,
    { bn: 'হোম ডেলিভারিতে ডাকযোগে (a casa per posta) ছয় দিনের মধ্যে এটিএম কার্ড পৌঁছাবে।', en: 'The debit card arrives at home by post within six days.' },
    {
      audioIt: 'Il conto corrente è attivo da subito e qui c’è l’IBAN stampato. Invece la tessera bancomat arriverà a casa per posta entro sei giorni.',
      localizedOptions: {
        bn: ['ছয় দিনের মধ্যে ডাকযোগে বাসার ঠিকানায় পৌঁছাবে', 'এখনই কাউন্টার থেকে হাতে পাবেন', 'আগামী মাসে আবার আসতে হবে', 'শুধু ভার্চুয়াল কার্ড'],
        en: ['By post to home address within 6 days', 'At the counter right now', 'Must come back next month', 'Online only'],
      },
    },
  ),
  makeQ(
    'a2-fin-076',
    'listening',
    { bn: 'বিমানবন্দরের ঘোষণা শুনুন: প্যারিসগামী ফ্লাইটের কী পরিবর্তন হয়েছে?', en: 'Listen to the airport announcement: what changed for the Paris flight?' },
    ['Departure gate moved from B04 to B11', 'Flight cancelled today', 'All passengers must return to check-in', 'Flight delayed by 4 hours'],
    0,
    { bn: 'বোর্ডিং গেট B04 থেকে পরিবর্তন করে B11 করা হয়েছে।', en: 'Gate changed from B04 to B11.' },
    {
      audioIt: 'Avviso ai passeggeri del volo AZ322 per Parigi: l’uscita d’imbarco è stata spostata dal gate B04 al gate B11. Ripetiamo: gate B11.',
      localizedOptions: {
        bn: ['বোর্ডিং গেট B04 থেকে সরিয়ে B11 করা হয়েছে', 'ফ্লাইট বাতিল হয়েছে', 'চেক-ইনে ফিরে যেতে বলা হয়েছে', '৪ ঘণ্টা দেরি হবে'],
        en: ['Departure gate moved from B04 to B11', 'Flight cancelled today', 'All passengers must return to check-in', 'Flight delayed by 4 hours'],
      },
    },
  ),
  makeQ(
    'a2-fin-077',
    'listening',
    { bn: 'সহকর্মীর অডিও বার্তা শুনুন: মিটিং কেন সরানো হয়েছে?', en: 'Listen to your colleague’s voice message: why did the meeting move?' },
    ['Client’s train was delayed until 15:00', 'Coffee machine broke', 'Director went home sick', 'Office is closed today'],
    0,
    { bn: 'গ্রাহকের ট্রেন দেরি হওয়ায় মিটিং দুপুর তিনটায় (quindici) সরানো হয়েছে।', en: 'The client’s train arrived late, moving the meeting to 15:00.' },
    {
      audioIt: 'Ciao Lucia, la riunione di stamattina è spostata alle quindici perché il treno del cliente ha portato quasi un’ora di ritardo.',
      localizedOptions: {
        bn: ['গ্রাহকের ট্রেন প্রায় এক ঘণ্টা দেরি হওয়ায় মিটিং বিকেল ৩টায় গেছে', 'কফি মেশিন নষ্ট হওয়ায়', 'পরিচালক অসুস্থ হওয়ায়', 'আজ অফিস বন্ধ থাকায়'],
        en: ['Client’s train was delayed until 15:00', 'Coffee machine broke', 'Director went home sick', 'Office is closed today'],
      },
    },
  ),
  makeQ(
    'a2-fin-078',
    'listening',
    { bn: 'সন্ধ্যা স্কুলের সচিবের কথা শুনুন: কোন দুটি দিনে ক্লাস হবে?', en: 'Listen to the school receptionist: on which days are lessons held?' },
    ['Tuesday and Thursday 19:00–21:00', 'Monday and Friday 09:00–11:00', 'Weekends only', 'Wednesday evening only'],
    0,
    { bn: 'মঙ্গলবার (martedì) এবং বৃহস্পতিবার (giovedì) সন্ধ্যা ৭টা থেকে ৯টা।', en: 'Tuesday and Thursday from 19:00 to 21:00.' },
    {
      audioIt: 'Il corso serale di livello A2 si tiene il martedì e il giovedì dalle diciannove alle ventuno nell’aula quattro al piano terra.',
      localizedOptions: {
        bn: ['মঙ্গলবার ও বৃহস্পতিবার সন্ধ্যা ১৯:০০ থেকে ২১:০০', 'সোম ও শুক্রবার সকাল ৯:০০ থেকে ১১:০০', 'শুধু সাপ্তাহিক ছুটির দিনে', 'শুধু বুধবার সন্ধ্যায়'],
        en: ['Tuesday and Thursday 19:00–21:00', 'Monday and Friday 09:00–11:00', 'Weekends only', 'Wednesday evening only'],
      },
    },
  ),
  makeQ(
    'a2-fin-079',
    'listening',
    { bn: 'সুপারমার্কেটের ঘোষণা শুনুন: কোন পণ্যে ৩০% ছাড় চলছে?', en: 'Listen to the shop announcement: which items have a 30% discount?' },
    ['Fresh fruit and vegetables until 19:30', 'All pasta and rice', 'Electronics and TVs', 'Bakery bread after midnight'],
    0,
    { bn: 'সন্ধ্যা সাড়ে সাতটা পর্যন্ত তাজা ফল ও সবজিতে (frutta e verdura fresca) ৩০% ছাড়।', en: '30% off fresh fruit and vegetables until 19:30.' },
    {
      audioIt: 'Gentili clienti, fino alle diciannove e trenta tutta la frutta e la verdura fresca sono scontate del trenta per cento alla cassa.',
      localizedOptions: {
        bn: ['সন্ধ্যা ১৯:৩০ পর্যন্ত সব তাজা ফল ও সবজিতে', 'সব পাস্তা ও চালে', 'ইলেকট্রনিক্স পণ্যে', 'মধ্যরাতের পর রুটিতে'],
        en: ['Fresh fruit and vegetables until 19:30', 'All pasta and rice', 'Electronics and TVs', 'Bakery bread after midnight'],
      },
    },
  ),
  makeQ(
    'a2-fin-080',
    'listening',
    { bn: 'কফিশপে অর্ডারের অডিও শুনুন: গ্রাহক কী কী অর্ডার করলেন?', en: 'Listen to the café order: what did the customer ask for?' },
    ['Decaf cappuccino and an apricot croissant', 'Two espressos and sparkling water', 'Tea with lemon and a sandwich', 'Hot chocolate only'],
    0,
    { bn: 'একটি ডিক্যাফ ক্যাপাচিনো (cappuccino decaffeinato) এবং এপ্রিকট জ্যাম দেওয়া ক্রোয়াসাঁ (cornetto all’albicocca)।', en: 'One decaf cappuccino and one apricot cornetto.' },
    {
      audioIt: 'Buongiorno, per me un cappuccino decaffeinato non troppo caldo e un cornetto integrale all’albicocca, per favore.',
      localizedOptions: {
        bn: ['একটি ডিক্যাফ ক্যাপাচিনো ও এপ্রিকট ক্রোয়াসাঁ', 'দুটি এসপ্রেসো ও স্পার্কলিং পানি', 'লেবু চা ও স্যান্ডউইচ', 'শুধু হট চকলেট'],
        en: ['Decaf cappuccino and an apricot croissant', 'Two espressos and sparkling water', 'Tea with lemon and a sandwich', 'Hot chocolate only'],
      },
    },
  ),
  makeQ(
    'a2-fin-081',
    'listening',
    { bn: 'পথনির্দেশ শুনুন: ডাকঘর কোথায় অবস্থিত?', en: 'Listen to the directions: where is the post office?' },
    ['Straight past the traffic light, then first left', 'Turn right before the bridge', 'Opposite the hospital on the ring road', 'On the third floor of the station'],
    0,
    { bn: 'সিগন্যাল পর্যন্ত সোজা গিয়ে তারপর বামের প্রথম রাস্তায় ঢুকলেই বাঁ দিকে।', en: 'Go straight until the traffic light, take first left.' },
    {
      audioIt: 'Vada sempre dritto fino al semaforo giallo, poi giri alla prima strada a sinistra: l’ufficio postale è lì davanti alla farmacia.',
      localizedOptions: {
        bn: ['হলুদ সিগন্যাল পর্যন্ত সোজা গিয়ে বামের প্রথম রাস্তায় (ফার্মেসির সামনে)', 'সেতুর আগে ডানে', 'রিং রোডের বিপরীত পাশে', 'স্টেশনের চারতলায়'],
        en: ['Straight past the traffic light, then first left', 'Turn right before the bridge', 'Opposite the hospital on the ring road', 'On the third floor of the station'],
      },
    },
  ),
  makeQ(
    'a2-fin-082',
    'listening',
    { bn: 'বন্ধুর শৈশব স্মৃতি শুনুন: ছুটিতে সে কী করত?', en: 'Listen to the friend’s memory: what did he use to do every August?' },
    ['Went cycling with cousins in the countryside', 'Flew to Japan every week', 'Worked in a factory', 'Stayed indoors playing video games'],
    0,
    { bn: 'প্রতি আগস্টে গ্রামের বাড়িতে কাজিনদের সাথে সাইকেল চালাত।', en: 'Every August he stayed with his grandparents in the countryside and cycled with cousins.' },
    {
      audioIt: 'Quando ero piccolo, ogni agosto passavo due settimane dai nonni in campagna e andavo in bicicletta tutto il pomeriggio con i miei cugini.',
      localizedOptions: {
        bn: ['প্রতি আগস্টে গ্রামে কাজিনদের সাথে সাইকেল চালাত', 'প্রতি সপ্তাহে জাপানে যেত', 'কারখানায় কাজ করত', 'সারাদিন ঘরে থাকত'],
        en: ['Went cycling with cousins in the countryside', 'Flew to Japan every week', 'Worked in a factory', 'Stayed indoors playing video games'],
      },
    },
  ),
  makeQ(
    'a2-fin-083',
    'listening',
    { bn: 'জাদুঘরের বার্তা শুনুন: বিনামূল্যে প্রবেশ কবে পাওয়া যায়?', en: 'Listen to the museum info: when is entry free?' },
    ['Every first Sunday of the month', 'Every Saturday afternoon', 'Only for tour groups of 50', 'Never free'],
    0,
    { bn: 'প্রতি মাসের প্রথম রবিবার (la prima domenica del mese) প্রবেশ সম্পূর্ণ ফ্রি।', en: 'Free entry on the first Sunday of every month.' },
    {
      audioIt: 'Il museo è aperto da martedì a domenica dalle nove alle diciotto. Ricordiamo che la prima domenica del mese l’ingresso è gratuito per tutti.',
      localizedOptions: {
        bn: ['প্রতি মাসের প্রথম রবিবার সবার জন্য ফ্রি', 'প্রতি শনিবার বিকেলে', 'শুধু ৫০ জনের দল হলে', 'কখনোই ফ্রি নয়'],
        en: ['Every first Sunday of the month', 'Every Saturday afternoon', 'Only for tour groups of 50', 'Never free'],
      },
    },
  ),
  makeQ(
    'a2-fin-084',
    'listening',
    { bn: 'চাকরির সাক্ষাৎকার শুনুন: প্রার্থীর কী কাজের অভিজ্ঞতা ও লাইসেন্স আছে?', en: 'Listen to the interview clip: how long has the candidate worked in logistics?' },
    ['Three years in logistics with forklift licence', 'Two months in a bakery', 'Ten years as a bus driver', 'Zero experience'],
    0,
    { bn: 'প্রার্থী তিন বছর গুদাম-লজিস্টিক্সে কাজ করেছেন এবং ফর্কলিফট চালানোর লাইসেন্স আছে।', en: 'Candidate worked three years in logistics and holds a forklift certificate.' },
    {
      audioIt: 'Ho lavorato per tre anni in un magazzino logistico vicino a Parma, so usare il computer per le spedizioni e ho il patentino per il muletto.',
      localizedOptions: {
        bn: ['তিন বছর লজিস্টিক্স গুদামে কাজের অভিজ্ঞতা ও ফর্কলিফট লাইসেন্স আছে', 'দুই মাস বেকারিতে', 'দশ বছর বাস চালানো', 'কোনো অভিজ্ঞতা নেই'],
        en: ['Three years in logistics with forklift licence', 'Two months in a bakery', 'Ten years as a bus driver', 'Zero experience'],
      },
    },
  ),
  makeQ(
    'a2-fin-085',
    'listening',
    { bn: 'পুলিশ/হেল্পডেস্কের কথা শুনুন: হারানো পাসপোর্টের জন্য প্রথমে কী দরকার?', en: 'Listen to the helpdesk: what should you do when documents are stolen/lost?' },
    ['File a loss report at Carabinieri to get a replacement', 'Buy a new train ticket', 'Wait six months without reporting', 'Pay a fine at the pharmacy'],
    0,
    { bn: 'আগে থানায়/কারাবিনিয়েিরিতে জিডি (la denuncia) করতে হবে, তারপর নতুন কার্ডের আবেদন।', en: 'First file the official loss report (la denuncia) so you can apply for duplicates.' },
    {
      audioIt: 'Se ha smarrito la carta d’identità, deve prima fare la denuncia ai Carabinieri; con quel foglio potrà poi richiedere il nuovo documento in Comune.',
      localizedOptions: {
        bn: ['প্রথমে কারাবিনিয়েিরিতে রিপোর্ট (denuncia) করে কাগজটি পৌরসভায় দেখাতে হবে', 'নতুন ট্রেনের টিকিট কিনতে হবে', 'ছয় মাস অপেক্ষা করতে হবে', 'ফার্মেসিতে জরিমানা দিতে হবে'],
        en: ['File a loss report at Carabinieri to get a replacement', 'Buy a new train ticket', 'Wait six months without reporting', 'Pay a fine at the pharmacy'],
      },
    },
  ),
  makeQ(
    'a2-fin-086',
    'listening',
    { bn: 'অভিযোগ সমাধান শুনুন: কুরিয়ার কখন আবার পার্সেল আনবে?', en: 'Listen to customer support: when is the redelivery scheduled?' },
    ['Tomorrow morning between 9:00 and 12:30', 'Friday midnight', 'Next month on the 30th', 'Order was refunded automatically'],
    0,
    { bn: 'আগামীকাল সকাল নয়টা থেকে সাড়ে বারোটার মধ্যে (tra le 9:00 e le 12:30) কুরিয়ার আসবে।', en: 'Courier redelivery is scheduled tomorrow between 9:00 and 12:30.' },
    {
      audioIt: 'Mi scusi per l’inconveniente di ieri: ho già riprogrammato la consegna del Suo pacco per domani mattina tra le nove e le dodici e trenta.',
      localizedOptions: {
        bn: ['আগামীকাল সকাল ৯:০০ থেকে ১২:৩০-এর মধ্যে', 'শুক্রবার মধ্যরাতে', 'আগামী মাসের ৩০ তারিখে', 'অর্ডারটি স্বয়ংক্রিয়ভাবে বাতিল হয়েছে'],
        en: ['Tomorrow morning between 9:00 and 12:30', 'Friday midnight', 'Next month on the 30th', 'Order was refunded automatically'],
      },
    },
  ),

  // =========================================================================
  // 5. PRACTICAL COMMUNICATION (22 Qs)
  // =========================================================================
  makeQ('a2-fin-087', 'communication', { bn: 'বাড়িওয়ালার সাথে ফ্ল্যাট দেখার সময় হিটিং নিয়ে প্রশ্ন করবেন কীভাবে?', en: 'Ask a landlord politely whether heating is included in rent:' }, ['Le spese di riscaldamento sono incluse nell’affitto?', 'Quanti anni ha il Suo cane?', 'Dove posso comprare un treno?', 'A che ora parte l’aereo?'], 0, { bn: 'Le spese di riscaldamento sono incluse? সবচেয়ে স্বাভাবিক ও ভদ্র প্রশ্ন।', en: 'Le spese di riscaldamento sono incluse?' }),
  makeQ('a2-fin-088', 'communication', { bn: 'ডাক্তারকে কীভাবে বলবেন “দুই দিন ধরে গলা ব্যথা ও জ্বর আছে”?', en: 'Tell the doctor you have had a sore throat and fever for two days:' }, ['Da due giorni ho mal di gola e la febbre.', 'Fra due giorni mangio una pizza.', 'Voglio comprare la caldaia.', 'Il binario è al secondo piano.'], 0, { bn: 'চলমান উপসর্গ বলতে Da due giorni + presente।', en: 'Ongoing symptom uses Da due giorni + presente.' }),
  makeQ('a2-fin-089', 'communication', { bn: 'রেলস্টেশনে কানেক্টিং ট্রেন মিস করলে সহায়তা ডেস্কে কী বলবেন?', en: 'At the rail desk after missing a connection due to a delay:' }, ['Il treno era in ritardo e ho perso la coincidenza: posso prendere il prossimo?', 'Vorrei aprire un conto corrente per lo stipendio.', 'Non mi piace questo colore di giacca.', 'Ho lasciato il cane al supermercato.'], 0, { bn: 'ho perso la coincidenza: পরের ট্রেনে তোলার অনুরোধ করার যথাযথ বাক্য।', en: 'Clear explanation of delay and request to board next train.' }),
  makeQ('a2-fin-090', 'communication', { bn: 'চাকরির সাক্ষাৎকারে আপনার কাজের অভিজ্ঞতা বলার সুন্দর সূচনা:', en: 'Best opening to describe prior experience in a job interview:' }, ['Ho lavorato per due anni come commesso e imparo velocemente.', 'Non ho voglia di lavorare la mattina.', 'Quanto guadagna il direttore?', 'Ho perso la tessera dell’autobus ieri.'], 0, { bn: 'পেশাদার ও আত্মবিশ্বাসী উত্তর: কাজের সময়কাল ও দক্ষতা জানানো।', en: 'Professional summary of experience and adaptability.' }),
  makeQ('a2-fin-091', 'communication', { bn: 'দোকানের রসিদে বাড়তি দাম ধরা হলে ভদ্রভাবে কী বলবেন?', en: 'Politely point out an overcharge on a receipt:' }, ['Mi scusi, sullo scontrino risulta un articolo in più: può controllare?', 'Restituisci subito i miei soldi, ladro!', 'Non voglio mai più parlare italiano.', 'Questo autobus va al pronto soccorso?'], 0, { bn: 'Mi scusi + সমস্যা উল্লেখ + può controllare? হলো আদর্শ ভদ্র ভঙ্গি।', en: 'Mi scusi + clear fact + può controllare?' }),
  makeQ('a2-fin-092', 'communication', { bn: 'ফোনে কথা দ্রুত হলে ভদ্রভাবে ধীরে বলতে বলবেন:', en: 'Ask someone on the phone to slow down politely:' }, ['Mi scusi, può parlare un po’ più lentamente, per favore?', 'Parla così veloce che chiudo il telefono!', 'Non so leggere i numeri ordinali.', 'Dammi subito il modulo verde.'], 0, { bn: 'Può parlare un po’ più lentamente? খুবই ভদ্র ও কার্যকর।', en: 'Può parlare un po’ più lentamente, per favore?' }),
  makeQ('a2-fin-093', 'communication', { bn: 'বন্ধুর ডিনারের দাওয়াত গ্রহণ করে সাহায্য করতে চাইলে:', en: 'Warmly accept a friend’s dinner invite and offer to help:' }, ['Grazie dell’invito, vengo molto volentieri! Posso portare qualcosa?', 'No, non mi importa della tua festa.', 'Devo firmare la raccomandata alla posta.', 'A che ora passa il camion della carta?'], 0, { bn: 'vengo molto volentieri + কিছু নিয়ে আসার প্রস্তাব।', en: 'Warm acceptance plus helpful offer.' }),
  makeQ('a2-fin-094', 'communication', { bn: 'অন্য দিন শিফট বা কাজের চাপে দাওয়াতে যেতে না পারলে ভদ্রভাবে কীভাবে বলবেন?', en: 'Politely decline an invitation due to a work shift:' }, ['Mi dispiace tanto, purtroppo sabato lavoro fino a tardi. Facciamo domenica?', 'Non vengo mai a casa tua!', 'Voglio solo un buono libreria.', 'Ho dimenticato di convalidare il biglietto.'], 0, { bn: 'দুঃখ প্রকাশ + কারণ + বিকল্প প্রস্তাব।', en: 'Apologise + state reason + propose alternative.' }),
  makeQ('a2-fin-095', 'communication', { bn: 'ফার্মেসিতে ওষুধের মাত্রা জানতে জিজ্ঞেস করবেন:', en: 'Ask the pharmacist how often to take medicine:' }, ['Quante volte al giorno devo prendere queste compresse?', 'Dove parte il Frecciarossa per Torino?', 'Posso pagare l’affitto qui?', 'A che piano è l’appartamento bilocale?'], 0, { bn: 'Quante volte al giorno…? হলো দৈনিক ডোজ জানার সঠিক প্রশ্ন।', en: 'Quante volte al giorno devo prendere…?' }),
  makeQ('a2-fin-096', 'communication', { bn: 'ব্যাংকে গিয়ে বেতনের অ্যাকাউন্ট খুলতে চাইলে বলবেন:', en: 'At a bank counter opening a salary account:' }, ['Buongiorno, vorrei aprire un conto corrente per ricevere lo stipendio.', 'Vorrei imbarcare due valigie in stiva.', 'Mi fa male il dente da ieri sera.', 'Scusi, il mio volo parte al gate B10?'], 0, { bn: 'ভদ্র অনুরোধ: vorrei aprire un conto corrente।', en: 'Polite request to open a current account.' }),
  makeQ('a2-fin-097', 'communication', { bn: 'পৌরসভায় “delega” শব্দের অর্থ বুঝতে না পারলে জিজ্ঞেস করবেন:', en: 'Ask an official to explain an unfamiliar administrative term:' }, ['Mi scusi, sto ancora imparando l’italiano: che cosa significa “delega”?', 'Non mi interessa nessun documento.', 'Prendo due chili di mele gialle.', 'Chiudi subito la finestra dell’ufficio.'], 0, { bn: 'শব্দের অর্থ বুঝতে che cosa significa «…»? জিজ্ঞেস করতে হয়।', en: 'che cosa significa «…»?' }),
  makeQ('a2-fin-098', 'communication', { bn: 'জরুরি কাজে আগে থেকে নির্ধারিত অ্যাপয়েন্টমেন্ট অন্য দিনে নিতে:', en: 'Reschedule an appointment politely by phone:' }, ['Ho avuto un imprevisto: sarebbe possibile spostare l’appuntamento?', 'Verrò quando ne avrò voglia.', 'La caldaia costa settecento euro.', 'Siamo scesi alla fermata del parco.'], 0, { bn: 'ভদ্র কন্ডিশনাল অনুরোধ: sarebbe possibile spostare l’appuntamento?।', en: 'Polite conditional request to reschedule.' }),
  makeQ('a2-fin-099', 'communication', { bn: 'পোশাক ছোট হওয়ায় বদলে বড় সাইজ নিতে দোকানে কী বলবেন?', en: 'Ask to swap an item for size L in a clothing shop:' }, ['Ho lo scontrino: potrei cambiare questa giacca con una taglia L?', 'Mi può misurare la pressione subito?', 'Devo spedire questa raccomandata a Milano.', 'La scuola inizia alle nove e trenta.'], 0, { bn: 'রসিদ আছে + ভদ্রভাবে taglia L-এ বদলানোর অনুরোধ।', en: 'Mention receipt and ask politely for size L.' }),
  makeQ('a2-fin-100', 'communication', { bn: 'বাসায় পাইপ লিক হলে বাড়িওয়ালাকে দ্রুত কী বলবেন?', en: 'Report a plumbing leak at home:' }, ['Buongiorno, perde acqua sotto il lavello della cucina: può chiamare l’idraulico?', 'Ho passato l’esame con trenta su trenta!', 'Il treno arriva dal binario quattro.', 'Domani organizziamo una festa in ufficio.'], 0, { bn: 'সমস্যার স্থান উল্লেখ করে প্লাম্বার ডাকার অনুরোধ।', en: 'Clear report + request for plumber.' }),
  makeQ('a2-fin-101', 'communication', { bn: 'রাত ১০টার পর প্রতিবেশীর উচ্চ শব্দের টিভি নিয়ে ভদ্র অনুরোধ:', en: 'Politely ask a neighbour to lower the TV late at night:' }, ['Mi scusi il disturbo, domani mi sveglio presto: potrebbe abbassare un po’ il volume?', 'Spegni subito o rompo la porta!', 'Dove si butta la carta nel cortile?', 'Il corso di italiano finisce a giugno.'], 0, { bn: 'ভদ্র ও সম্মানজনকভাবে নিজের কারণ জানিয়ে ভলিউম কমানোর অনুরোধ।', en: 'Polite, respectful request stating reason.' }),
  makeQ('a2-fin-102', 'communication', { bn: 'বাসে ব্যাকপ্যাক ভুলে ফেলে এলে জরুরি রিপোর্টে কীভাবে বলবেন?', en: 'Describe losing a backpack on the bus at Lost & Found:' }, ['Ho dimenticato il mio zaino nero sull’autobus sei vicino alla stazione.', 'Vorrei ordinare un piatto di pasta al ragù.', 'Questa stanza ha una bella vista sul mare.', 'Quando scade il biglietto mensile?'], 0, { bn: 'কোন বাস ও কোথায় হারিয়েছেন তা স্পষ্ট করে বলা।', en: 'Clear details of item, bus line, and stop.' }),
  makeQ('a2-fin-103', 'communication', { bn: 'ফ্যামিলি ডাক্তারের কাছে অফিসের অসুস্থতার ছুটির সনদ চাইতে:', en: 'Request a sick note from your doctor for work:' }, ['Dottore, potrebbe inviarmi il certificato di malattia per il lavoro?', 'Voglio prendere due giorni di ferie al mare.', 'Quante valigie posso portare in cabina?', 'Che ore sono adesso in centro?'], 0, { bn: 'certificato di malattia (অসুস্থতা সনদ)।', en: 'Requesting il certificato di malattia.' }),
  makeQ('a2-fin-104', 'communication', { bn: 'বর্জ্য পৃথকীকরণের নিয়ম প্রতিবেশীর কাছে জানতে চাইলে:', en: 'Ask a neighbour where glass bottles go for recycling:' }, ['Scusa, dove si buttano le bottiglie di vetro in questo condominio?', 'A che piano lavora il medico oculista?', 'Mi presti mille euro per favore?', 'Questo treno ferma anche a Verona?'], 0, { bn: 'কনডোমিনিয়ামে কাচ কোথায় ফেলা হয় তা জিজ্ঞাসা।', en: 'Natural question about glass recycling.' }),
  makeQ('a2-fin-105', 'communication', { bn: 'বিমানবন্দরের ব্যাগেজ ডেস্কে সুটকেস না এলে বলবেন:', en: 'At the airport baggage claim office:' }, ['La mia valigia non è uscita sul nastro: dobbiamo compilare il modulo PIR?', 'Vorrei cambiare posto vicino al finestrino.', 'Quanto costa un caffè e un cornetto?', 'Studio italiano da otto mesi con gli amici.'], 0, { bn: 'বেল্টে সুটকেস না আসার কথা বলে PIR ফর্ম পূরণের অনুরোধ।', en: 'Reporting missing bag and asking for PIR form.' }),
  makeQ('a2-fin-106', 'communication', { bn: 'পড়াশোনা বা কোর্সের তথ্য চাইতে সচিবালয়ে জিজ্ঞেস করবেন:', en: 'Ask a school secretary when the next A2/B1 course starts:' }, ['Buongiorno, quando inizia il prossimo corso serale e come ci si iscrive?', 'Mi scusi, perde un tubo nel bagno.', 'Vorrei tre etti di prosciutto crudo.', 'Ho già fatto il pieno di benzina.'], 0, { bn: 'শুরুর তারিখ ও ভর্তির নিয়ম জানতে চাওয়া।', en: 'Enquiring about start date and registration.' }),
  makeQ('a2-fin-107', 'communication', { bn: 'ম্যানেজারের কাছে এক দিনের ছুটি (permesso) চাইতে বলবেন:', en: 'Politely ask your supervisor for a day off next week:' }, ['Scusi, potrei chiedere un giorno di permesso giovedì per una visita medica?', 'Domani non vengo al lavoro, ciao!', 'Quanto dura il volo per Roma?', 'Ho comprato una sciarpa blu in offerta.'], 0, { bn: 'ভদ্র অনুরোধ + কারণ + নির্দিষ্ট দিন উল্লেখ।', en: 'Polite request with reason and specific date.' }),
  makeQ('a2-fin-108', 'communication', { bn: 'সহকর্মীর প্রস্তাব পছন্দ হলে একমত ও কৃতজ্ঞতা প্রকাশ করবেন:', en: 'Agree constructively and thank a colleague for help:' }, ['Sono d’accordo con te, è un’ottima idea! Grazie per l’aiuto.', 'Secondo me sbagli tutto come sempre.', 'Non conosco nessuno in questo palazzo.', 'Il negozio chiude tra cinque minuti.'], 0, { bn: 'Sono d’accordo con te + ধন্যবাদ।', en: 'Warm agreement and appreciation.' }),
];

/**
 * Generates a randomized 40-question CEFR A2 Final Examination drawn evenly across
 * Grammar (12), Vocabulary (8), Reading (6), Listening (6), and Communication (8)
 * with randomized question and option order. Passing >= 70% (28/40, maxIncorrect 12).
 */
export function buildA2FinalExam(rng: RandomFn = Math.random): A2FinalExamQuestion[] {
  const byCategory: Record<A2FinalExamCategory, A2FinalExamQuestion[]> = {
    grammar: [],
    vocabulary: [],
    reading: [],
    listening: [],
    communication: [],
  };

  for (const q of A2_FINAL_EXAM_POOL) {
    byCategory[q.category].push(q);
  }

  const chosen: A2FinalExamQuestion[] = [];
  for (const cat of Object.keys(A2_FINAL_EXAM_DISTRIBUTION) as A2FinalExamCategory[]) {
    const target = A2_FINAL_EXAM_DISTRIBUTION[cat];
    const picked = shuffleArray(byCategory[cat], rng).slice(0, target);
    chosen.push(...picked);
  }

  return shuffleArray(chosen, rng).map((q) => randomizeQuestionOptions(q, rng) as A2FinalExamQuestion);
}

export interface A2CategoryPerformance {
  category: A2FinalExamCategory;
  label: Tr;
  correct: number;
  total: number;
  percentage: number;
  isWeak: boolean;
}

const POOL_CATEGORY_BY_ID = new Map<string, A2FinalExamCategory>(
  A2_FINAL_EXAM_POOL.map((q) => [q.id, q.category]),
);

export function computeA2CategoryPerformance(
  breakdown: readonly ExamAnswerRecord[],
): A2CategoryPerformance[] {
  const counts: Record<A2FinalExamCategory, { correct: number; total: number }> = {
    grammar: { correct: 0, total: 0 },
    vocabulary: { correct: 0, total: 0 },
    reading: { correct: 0, total: 0 },
    listening: { correct: 0, total: 0 },
    communication: { correct: 0, total: 0 },
  };

  for (const rec of breakdown) {
    const qCat =
      (rec.question as Partial<A2FinalExamQuestion>).category ??
      POOL_CATEGORY_BY_ID.get(rec.question.id) ??
      'grammar';
    counts[qCat].total += 1;
    if (rec.correct) counts[qCat].correct += 1;
  }

  return (Object.keys(A2_FINAL_EXAM_DISTRIBUTION) as A2FinalExamCategory[])
    .filter((cat) => counts[cat].total > 0)
    .map((cat) => {
      const { correct, total } = counts[cat];
      const percentage = Math.round((correct / total) * 100);
      return {
        category: cat,
        label: A2_FINAL_EXAM_CATEGORY_LABELS[cat],
        correct,
        total,
        percentage,
        isWeak: percentage < 70,
      };
    });
}
