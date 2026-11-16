import type { Lesson, Unit } from '../types';

const lesson1: Lesson = {
  id: 'b2-u2-l1',
  number: 1,
  title: 'I documenti sono andati perduti',
  subtitle: { bn: 'উন্নত কর্মবাচ্য, নৈর্ব্যক্তিক ci si ও অসমাপিকা খণ্ডবাক্য', en: 'Advanced passives, impersonal ci si & implicit clauses' },
  minutes: 16,
  objectives: [
    { bn: 'বাধ্যবাধকতা (va compilato) ও দুর্ঘটনাজনিত ক্ষতি (sono andati perduti) প্রকাশে andare-র কর্মবাচ্য ব্যবহার করবেন', en: 'Distinguish andare for obligation vs accidental loss in compound tenses' },
    { bn: 'প্রতিফলক ক্রিয়ায় ci si (ci si è resi conto) এবং সমাপিকা থেকে অসমাপিকা খণ্ডবাক্যে (subordinate implicite) রূপান্তর করবেন', en: 'Apply ci si in compound tenses and condense finite clauses into implicit structures' },
  ],
  phrases: [
    { id: 'b2u2l1-p1', it: 'Durante l’alluvione molti manoscritti miniati sono andati perduti.', tr: { bn: 'বন্যার সময় অনেক অলংকৃত প্রাচীন পাণ্ডুলিপি নষ্ট হয়ে গেছে।', en: 'During the flood many illuminated manuscripts were lost.' } },
    { id: 'b2u2l1-p2', it: 'Solo dopo la crisi ci si è resi conto della gravità del dissesto idrogeologico.', tr: { bn: 'কেবল সংকটের পরেই ভূমিধস ও বন্যা ঝুঁকির ভয়াবহতা উপলব্ধি করা গেছে।', en: 'Only after the crisis did people realise the severity of the hydrogeological instability.' } },
    { id: 'b2u2l1-p3', it: 'L’imputato nega di aver preso parte all’illecito contestato.', tr: { bn: 'অভিযুক্ত ব্যক্তি অভিযোগকৃত বেআইনি কাজে অংশ নেওয়ার কথা অস্বীকার করেছেন।', en: 'The defendant denies having taken part in the alleged unlawful act.' } },
    { id: 'b2u2l1-p4', it: 'Pur condividendo la premessa, il sindacato contesta le modalità attuative.', tr: { bn: 'মূল কথার সাথে একমত হলেও শ্রমিক ইউনিয়ন বাস্তবায়নের পদ্ধতি নিয়ে আপত্তি জানিয়েছে।', en: 'While sharing the premise, the union contests the implementation methods.' } },
  ],
  grammar: [
    {
      id: 'passivo-avanzato',
      title: { bn: 'উন্নত কর্মবাচ্য ও ci si', en: 'Advanced passive & impersonal ci si' },
      explanation: {
        bn: 'andare + পাস্ট পার্টিসিপল সরল কালে বাধ্যবাধকতা (va firmato) বোঝায়, আর যৌগিক কালে (è andato perduto/distrutto) অনিচ্ছাকৃত ধ্বংস বা ক্ষতি বোঝায়। প্রতিফলক ক্রিয়ার সাথে নৈর্ব্যক্তিক si যুক্ত হলে ci si হয় এবং যৌগিক কালে essere + বহুবচন পার্টিসিপল নেয়।',
        en: 'andare + participle expresses necessity in simple tenses and loss/destruction in compound tenses. Impersonal + reflexive si becomes ci si and uses plural masculine agreement.',
      },
      table: [
        { label: 'andare (obbligo)', it: 'Il ricorso va presentato entro trenta giorni', tr: { bn: 'আপিল ত্রিশ দিনের মধ্যে জমা দিতে হবে', en: 'The appeal must be filed within 30 days' } },
        { label: 'andare (perdita)', it: 'I reperti sono andati distrutti nell’incendio', tr: { bn: 'নিদর্শনগুলো আগুনে ধ্বংস হয়ে গেছে', en: 'The artefacts were destroyed in the fire' } },
        { label: 'ci si (composto)', it: 'Ci si è accorti subito dell’irregolarità', tr: { bn: 'সাথে সাথেই অনিয়ম ধরা পড়েছে', en: 'People immediately noticed the irregularity' } },
      ],
      examples: [
        { id: 'b2u2l1-e1', it: 'Incentivando le fonti rinnovabili, ridurremmo la dipendenza energetica.', tr: { bn: 'নবায়নযোগ্য জ্বালানিতে প্রণোদনা দিলে আমরা শক্তির নির্ভরতা কমাতাম।', en: 'By incentivising renewable sources, we would reduce energy dependence.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'বন্যা-পরবর্তী আর্কাইভ পরিদর্শন', en: 'Post-flood archive inspection' },
    context: { bn: 'সংরক্ষক মারিয়া ও পরিদর্শক করিম মহাফেজখানার ক্ষয়ক্ষতি নিরূপণ করছেন।', en: 'Archivist Maria and inspector Karim assess flood damage at the State Archives.' },
    lines: [
      { speaker: 'Karim', it: 'Maria, quanti faldoni del fondo ottocentesco sono andati perduti dopo l’alluvione?', tr: { bn: 'মারিয়া, বন্যার পর উনিশ শতকের সংগ্রহের কতগুলো নথি নষ্ট হয়ে গেছে?', en: 'Maria, how many folders from the nineteenth-century collection were lost after the flood?' } },
      { speaker: 'Maria', it: 'Per fortuna pochi: intervenendo con tempestività, siamo riusciti a salvare quasi tutti i manoscritti.', tr: { bn: 'সৌভাগ্যবশত খুব কম: দ্রুত পদক্ষেপ নেওয়ায় আমরা প্রায় সব পাণ্ডুলিপি বাঁচাতে পেরেছি।', en: 'Fortunately very few: by intervening promptly, we managed to save almost all manuscripts.' } },
      { speaker: 'Karim', it: 'Meno male. Ormai ci si è resi conto che la prevenzione antisismica e idraulica va finanziata ogni anno.', tr: { bn: 'যাক বাঁচা গেল। এখন বোঝা যাচ্ছে যে ভূমিকম্প ও বন্যা প্রতিরোধ প্রতি বছর অর্থায়ন করা উচিত।', en: 'Thank goodness. By now people have realised that seismic and flood prevention must be funded every year.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'অতীতে নষ্ট হয়ে যাওয়া বোঝাতে সঠিক কর্মবাচ্য:', en: 'Express accidental loss in a compound passive:' }, it: 'Molti archivi ___ distrutti durante l’incendio.', options: ['sono andati', 'sono venuti', 'hanno andato', 'vengono stati'], answer: 0, explanation: { bn: 'ক্ষতি বা ধ্বংস বোঝাতে essere + andato/i + distrutto/i বসে।', en: 'Accidental destruction uses essere + andato + past participle.' } },
    { id: 'q2', prompt: { bn: 'নৈর্ব্যক্তিক + প্রতিফলক ক্রিয়া যৌগিক কালে:', en: 'Impersonal reflexive in compound tense:' }, it: 'Dopo il guasto ___ accorti della vulnerabilità della rete.', options: ['si si è', 'ci si è', 'ci si ha', 'si sono'], answer: 1, explanation: { bn: 'ci si è + পুং বহুবচন পার্টিসিপল (accorti)।', en: 'ci si takes auxiliary essere and plural agreement.' } },
    { id: 'q3', prompt: { bn: 'Pur + জেরুন্ড দিয়ে ছাড়বাচক অর্থ পূরণ করুন:', en: 'Complete the concessive gerund clause:' }, it: 'Pur ___ la normativa, alcune aziende chiedono una proroga.', options: ['condividere', 'condividendo', 'condivisa', 'condividono'], answer: 1, explanation: { bn: 'Pur + gerundio (condividendo) = স্বীকার করা সত্ত্বেও।', en: 'Pur is followed by the gerund condividendo.' } },
    { id: 'q4', prompt: { bn: 'একই কর্তা হলে che-এর বদলে অসমাপিকা কাঠামো:', en: 'Convert to implicit infinitive clause:' }, it: 'Il consulente dichiara ___ verificato tutte le fatture.', options: ['di aver', 'che abbia', 'avendo', 'per aver'], answer: 0, explanation: { bn: 'একই কর্তা থাকায় dichiarare + di + infinito passato।', en: 'Same subject uses di aver + past participle.' } },
  ],
  tip: { bn: 'গুরুত্বপূর্ণ নিয়ম: যৌগিক কালে (passato prossimo ইত্যাদি) venire কখনো সহায়ক কর্মবাচ্য হয় না — সর্বদা essere (বা ক্ষতি অর্থে andare) বসবে।', en: 'Key rule: venire cannot be used as the passive auxiliary in compound tenses — always use essere (or andare for loss/destruction).' },
};

const lesson2: Lesson = {
  id: 'b2-u2-l2',
  number: 2,
  title: 'Approvata la legge, cambiò il mercato',
  subtitle: { bn: 'বর্তমান ও পাস্ট পার্টিসিপল, বিশেষ্যরূপী ইনফিনিটিভ ও মুক্ত পরোক্ষ উক্তি', en: 'Present/absolute participles, nominalised infinitive & free indirect speech' },
  minutes: 16,
  objectives: [
    { bn: 'আইনি ও প্রশাসনিক লেখায় -ante/-ente যুক্ত বর্তমান পার্টিসিপল এবং স্বাধীন পাস্ট পার্টিসিপল (participio assoluto) প্রয়োগ করবেন', en: 'Use formal present participles and absolute past participle clauses' },
    { bn: 'বিশেষ্যরূপী ইনফিনিটিভ (il persistere, l’aver taciuto) এবং সাহিত্যে মুক্ত পরোক্ষ উক্তি (discorso indiretto libero) চিনবেন', en: 'Use nominalised infinitives and recognise free indirect speech in fiction' },
  ],
  phrases: [
    { id: 'b2u2l2-p1', it: 'Possono candidarsi i cittadini aventi diritto e conformi ai requisiti del bando.', tr: { bn: 'বিজ্ঞপ্তির শর্তাবলি পূরণকারী যোগ্য নাগরিকেরা আবেদন করতে পারবেন।', en: 'Eligible citizens meeting the requirements of the call may apply.' } },
    { id: 'b2u2l2-p2', it: 'Accertata la violazione dei dati, il Garante ha inflitto una sanzione amministrativa.', tr: { bn: 'তথ্য ফাঁসের বিষয়টি প্রমাণিত হওয়ায় তদারকি কর্তৃপক্ষ প্রশাসনিক জরিমানা আরোপ করেছে।', en: 'Once the data breach was ascertained, the Authority imposed an administrative penalty.' } },
    { id: 'b2u2l2-p3', it: 'L’aver sottovalutato i segnali d’allarme ha aggravato il dissesto finanziario.', tr: { bn: 'সতর্ক সংকেতগুলোকে অবমূল্যায়ন করার ফলে আর্থিক সংকট আরও গুরুতর হয়েছে।', en: 'Having underestimated the warning signs worsened the financial instability.' } },
    { id: 'b2u2l2-p4', it: 'Marco fissò la lettera sul tavolo. Come avrebbe affrontato quel processo da solo?', tr: { bn: 'মার্কো টেবিলের ওপর থাকা চিঠির দিকে তাকিয়ে রইল। একা সে কীভাবে এই মামলার মুখোমুখি হবে?', en: 'Marco stared at the letter on the table. How would he face that trial alone?' } },
  ],
  grammar: [
    {
      id: 'participio-assoluto-b2',
      title: { bn: 'স্বাধীন পার্টিসিপল ও বিশেষ্যরূপী ইনফিনিটিভ', en: 'Absolute participles & nominalised infinitive' },
      explanation: {
        bn: 'বাক্যের শুরুতে পাস্ট পার্টিসিপল সরাসরি বিশেষ্যের লিঙ্গ ও বচনের সাথে মেলে (Approvata la legge / Conclusi i lavori)। আর পুং একবচন আর্টিকেল (il / l’) দিয়ে যেকোনো ইনফিনিটিভকে বিমূর্ত বিশেষ্যে পরিণত করা যায় (Il prolungarsi della siccità)।',
        en: 'Absolute past participles agree with their noun without an auxiliary. Masculine singular article il/l’ nominalises present or past infinitives.',
      },
      table: [
        { label: 'Participio pres.', it: 'i soci aventi diritto / una circolare contenente', tr: { bn: 'অধিকারপ্রাপ্ত অংশীদার / সংবলিত পরিপত্র', en: 'entitled partners / circular containing' } },
        { label: 'Participio assol.', it: 'Esaminati i ricorsi, la Corte deliberò', tr: { bn: 'আপিল পরীক্ষা শেষে আদালত সিদ্ধান্ত নিলেন', en: 'Having examined the appeals, the Court ruled' } },
        { label: 'Infinito sostant.', it: 'L’aver taciuto la verità ha complicato l’indagine', tr: { bn: 'সত্য গোপন করা তদন্তকে জটিল করেছে', en: 'Having concealed the truth complicated the inquiry' } },
      ],
      examples: [
        { id: 'b2u2l2-e1', it: 'L’amministratore precisò che il verbale era stato firmato il giorno precedente.', tr: { bn: 'ব্যবস্থাপক স্পষ্ট করেন যে আগের দিন কার্যবিবরণীতে স্বাক্ষর করা হয়েছিল।', en: 'The administrator clarified that the minutes had been signed the previous day.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'বিধান ও সময় পরিবর্তনের পাঠ', en: 'Drafting legal minutes and reported speech' },
    context: { bn: 'আইন উপদেষ্টা লুকা ও সহকর্মী সামিরা একটি সংবাদ বিজ্ঞপ্তির খসড়া সংশোধন করছেন।', en: 'Legal counsel Luca and colleague Samira revise a press briefing.' },
    lines: [
      { speaker: 'Samira', it: 'Luca, va bene scrivere «Firmato l’intesa, i sindacati uscirono» nel comunicato?', tr: { bn: 'লুকা, বিবৃতিতে কি «Firmato l’intesa...» লেখা ঠিক হবে?', en: 'Luca, is it fine to write "Firmato l’intesa…" in the press release?' } },
      { speaker: 'Luca', it: 'Attenta: «l’intesa» è femminile, quindi nel participio assoluto devi scrivere «Firmata l’intesa».', tr: { bn: 'সতর্ক হও: «l’intesa» স্ত্রীলিঙ্গ, তাই স্বাধীন পার্টিসিপলে লিখতে হবে «Firmata l’intesa»।', en: 'Careful: "l’intesa" is feminine, so in the absolute participle you must write "Firmata l’intesa".' } },
      { speaker: 'Samira', it: 'Giusto! E per riportare le parole di ieri sul futuro, scriverò che l’accordo sarebbe entrato in vigore l’indomani.', tr: { bn: 'ঠিক! আর গতকালের ভবিষ্যৎ বক্তব্য উদ্ধৃত করতে লিখব যে চুক্তিটি পরদিন কার্যকর হওয়ার কথা ছিল।', en: 'Right! And to report yesterday’s statement about the next day, I’ll write that the agreement would come into force l’indomani.' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'সঠিক বহুবচন বর্তমান পার্টিসিপল বেছে নিন:', en: 'Choose the plural present participle:' }, it: 'Tutti i candidati ___ i requisiti possono iscriversi.', options: ['avente', 'aventi', 'avendo', 'avuti'], answer: 1, explanation: { bn: 'i candidati বহুবচন হওয়ায় aventi বসে।', en: 'Plural i candidati takes aventi.' } },
    { id: 'q2', prompt: { bn: 'স্বাধীন পাস্ট পার্টিসিপলে লিঙ্গ-বচনের মিল:', en: 'Agreement in an absolute participle clause:' }, it: '___ le trattative, i delegati sottoscrissero il patto.', options: ['Concluso', 'Concluse', 'Conclusi', 'Concludendo'], answer: 1, explanation: { bn: 'le trattative স্ত্রী বহুবচন → Concluse।', en: 'Feminine plural le trattative requires Concluse.' } },
    { id: 'q3', prompt: { bn: 'বিশেষ্যরূপী ইনফিনিটিভের সঠিক আর্টিকেল:', en: 'Article for a nominalised infinitive:' }, it: '___ della siccità minaccia i raccolti estivi.', options: ['La persistere', 'Il persistere', 'I persistere', 'Una persistere'], answer: 1, explanation: { bn: 'বিমূর্ত ইনফিনিটিভ সর্বদা পুং একবচন (Il persistere)।', en: 'Nominalised infinitives are always masculine singular (Il).' } },
    { id: 'q4', prompt: { bn: 'অতীত পরোক্ষ উক্তিতে "domani"-র পরিবর্তন:', en: 'Deictic shift of "domani" in past reported speech:' }, it: 'Il notaio disse che avrebbe consegnato l’atto ___.', options: ['domani', 'l’indomani', 'ieri', 'poc’anzi'], answer: 1, explanation: { bn: 'অতীত পরোক্ষ উক্তিতে domani → l’indomani হয়।', en: 'domani becomes l’indomani in past reported speech.' } },
  ],
  tip: { bn: 'দাপ্তরিক অনুবাদে «Firmata la delibera / Conclusi i lavori» সংক্ষিপ্ত ও অতি মার্জিত কাঠামো তৈরি করে।', en: 'Opening formal summaries with agreed past participles (Approvata la riforma…) instantly gives prose authentic B2 conciseness.' },
};

const lesson3: Lesson = {
  id: 'b2-u2-l3',
  number: 3,
  title: 'È sulla prevenzione che bisogna investire',
  subtitle: { bn: 'বাক্যের জোর (dislocazione ও frase scissa), কর্তার বিপর্যয় ও বিশেষ্যীকরণ', en: 'Marked syntax, subject inversion & nominalisation' },
  minutes: 16,
  objectives: [
    { bn: 'বামে ও ডানে কর্ম স্থানান্তর (dislocazione a sinistra/destra) এবং বিভক্ত বাক্য (frase scissa) সঠিকভাবে গঠন করবেন', en: 'Use left/right dislocation and cleft/pseudo-cleft sentences to structure focus' },
    { bn: 'ক্রিয়ার পরে কর্তা স্থাপন (inversione del soggetto) এবং ক্রিয়াকে বিমূর্ত বিশেষ্যে রূপান্তর (nominalizzazione) করবেন', en: 'Apply post-verbal subject agreement and formal nominalisation' },
  ],
  phrases: [
    { id: 'b2u2l3-p1', it: 'La perizia tecnica l’abbiamo depositata in cancelleria ieri mattina.', tr: { bn: 'কারিগরি প্রতিবেদনটি আমরা গতকাল সকালে আদালত দপ্তরে জমা দিয়েছি।', en: 'The technical report, we filed it at the clerk’s office yesterday morning.' } },
    { id: 'b2u2l3-p2', it: 'È sulla prevenzione sismica che lo Stato dovrebbe investire con continuità.', tr: { bn: 'ভূমিকম্প প্রতিরোধের ওপরই রাষ্ট্রের ধারাবাহিকভাবে বিনিয়োগ করা উচিত।', en: 'It is in seismic prevention that the State should invest continuously.' } },
    { id: 'b2u2l3-p3', it: 'Dall’inchiesta sono emerse gravi irregolarità nella gestione dei fondi.', tr: { bn: 'তদন্ত থেকে তহবিল ব্যবস্থাপনায় গুরুতর অনিয়ম উঠে এসেছে।', en: 'Serious irregularities in fund management emerged from the inquiry.' } },
    { id: 'b2u2l3-p4', it: 'La digitalizzazione degli archivi ha agevolato il rilascio dei certificati.', tr: { bn: 'আর্কাইভগুলোর ডিজিটাল রূপান্তর সনদপত্র প্রদানকে সহজতর করেছে।', en: 'The digitisation of archives has facilitated the issuing of certificates.' } },
  ],
  grammar: [
    {
      id: 'nominalizzazione-b2',
      title: { bn: 'চিহ্নিত বাক্যগঠন (sintassi marcata) ও বিশেষ্যীকরণ', en: 'Marked syntax & B2 nominalisation' },
      explanation: {
        bn: 'বামে আনা কর্মের জন্য ক্রিয়ার আগে সর্বনাম ও পার্টিসিপল মিল (Le clausole le abbiamo contestate) বাধ্যতামূলক। বিভক্ত বাক্যে কর্তাকে জোর দিতে È + কর্তা + a + ইনফিনিটিভ বসে। প্রাতিষ্ঠানিক লেখায় সমাপিকা খণ্ডবাক্যকে বিমূর্ত বিশেষ্যে রূপান্তর করা হয়।',
        en: 'Left dislocation requires a resumptive clitic with past participle agreement. Cleft sentences focusing a subject use a + infinitive. Nominalisation packs clauses into action nouns.',
      },
      table: [
        { label: 'Dislocazione sin.', it: 'I fondi europei li abbiamo già stanziati', tr: { bn: 'ইউরোপীয় তহবিল আমরা বরাদ্দ করেছি', en: 'The EU funds, we’ve already allocated them' } },
        { label: 'Frase scissa', it: 'Sono stati i giovani a proporre il progetto', tr: { bn: 'তরুণরাই প্রকল্পটি প্রস্তাব করেছে', en: 'It was the young people who proposed it' } },
        { label: 'Nominalizzazione', it: 'Lo scioglimento dei ghiacciai preoccupa gli esperti', tr: { bn: 'হিমবাহ গলে যাওয়া বিজ্ঞানীদের ভাবাচ্ছে', en: 'The melting of glaciers worries experts' } },
      ],
      examples: [
        { id: 'b2u2l3-e1', it: 'L’abrogazione della norma ha comportato una semplificazione delle procedure.', tr: { bn: 'বিধানটি বাতিল করার ফলে প্রক্রিয়াগুলোর সরলীকরণ ঘটেছে।', en: 'The repeal of the rule entailed a simplification of procedures.' } },
      ],
    },
  ],
  dialogue: {
    title: { bn: 'গবেষণা প্রবন্ধের ভাষা মার্জনা', en: 'Polishing an academic paper' },
    context: { bn: 'অধ্যাপিকা বিয়ানকা ও ডক্টরাল গবেষক রাফি প্রবন্ধের গদ্যশৈলী উন্নত করছেন।', en: 'Professor Bianca and PhD candidate Rafi refine the academic style of a paper.' },
    lines: [
      { speaker: 'Rafi', it: 'Professoressa, ho scritto: «Poiché le temperature aumentano, i ghiacciai si sciolgono velocemente».', tr: { bn: 'অধ্যাপিকা, আমি লিখেছি: «তাপমাত্রা বাড়ায় হিমবাহ দ্রুত গলছে»।', en: 'Professor, I wrote: "Because temperatures rise, glaciers are melting fast".' } },
      { speaker: 'Bianca', it: 'Chiaro, ma per un articolo B2/accademico prova la nominalizzazione: «L’aumento delle temperature accelera lo scioglimento dei ghiacciai».', tr: { bn: 'স্পষ্ট, তবে একাডেমিক শৈলীর জন্য বিশেষ্যীকরণ ব্যবহার করো: «তাপমাত্রা বৃদ্ধি হিমবাহ গলে যাওয়াকে ত্বরান্বিত করে»।', en: 'Clear, but for academic prose try nominalisation: "The rise in temperatures accelerates the melting of glaciers".' } },
      { speaker: 'Rafi', it: 'Capisco! E nella conclusione aggiungerò una frase scissa: «Sono proprio i dati empirici a confermare questa tendenza».', tr: { bn: 'বুঝেছি! আর উপসংহারে একটি বিভক্ত বাক্য যোগ করব: «অভিজ্ঞতালব্ধ তথ্যই এই প্রবণতাকে নিশ্চিত করে»।', en: 'I see! And in the conclusion I’ll add a cleft sentence: "It is precisely empirical data that confirm this trend".' } },
    ],
  },
  quiz: [
    { id: 'q1', prompt: { bn: 'বামে কর্ম স্থানান্তরে সঠিক পুনরাবৃত্তি ও মিল:', en: 'Complete left dislocation with agreement:' }, it: 'Le clausole vessatorie ___ contestate subito dall’avvocato.', options: ['li abbiamo', 'le abbiamo', 'ne ha', 'abbiamo'], answer: 1, explanation: { bn: 'Le clausole স্ত্রী বহুবচন হওয়ায় le এবং contestate বসে।', en: 'Feminine plural Le clausole takes clitic le.' } },
    { id: 'q2', prompt: { bn: 'কর্তা জোর দেওয়া অসমাপিকা বিভক্ত বাক্য:', en: 'Complete the subject-focus cleft sentence:' }, it: 'Sono state le piccole imprese ___ trainare l’export.', options: ['che a', 'a', 'di', 'per'], answer: 1, explanation: { bn: 'অসমাপিকা বিভক্ত বাক্যে Essere + কর্তা + a + ইনফিনিটিভ বসে।', en: 'Implicit cleft uses a + infinitive.' } },
    { id: 'q3', prompt: { bn: 'ক্রিয়ার পরে থাকা বহুবচন কর্তার সাথে মিল:', en: 'Verb agreement with post-verbal plural subject:' }, it: 'Dalla ricerca ___ dati molto significativi.', options: ['è emerso', 'sono emersi', 'ha emerso', 'emerse'], answer: 1, explanation: { bn: 'dati পুং বহুবচন হওয়ায় sono emersi বসে।', en: 'Post-verbal plural dati triggers sono emersi.' } },
    { id: 'q4', prompt: { bn: '«Quando entrò in vigore la legge»-এর সঠিক বিশেষ্যীকরণ:', en: 'Nominalise "Quando entrò in vigore la legge":' }, it: '___ cambiò le regole del mercato.', options: ['L’entrata in vigore della legge', 'Il entrare in vigore', 'Entrando la legge', 'Che la legge entri'], answer: 0, explanation: { bn: 'entrare ক্রিয়ার বিশেষ্য রূপ l’entrata।', en: 'The nominalised form is L’entrata in vigore della legge.' } },
  ],
  tip: { bn: 'বাক্যের শেষে থাকা কর্তার দিকে খেয়াল রাখুন: যদি সেটি বহুবচন হয় (sono emerse gravi irregolarità), ক্রিয়াও অবশ্যই বহুবচন হবে।', en: 'Always check the number of a post-verbal subject — Italian verbs must agree with it in plural (sono emersi nuovi indizi).' },
};

export const b2Unit2: Unit = {
  id: 'b2-u2',
  number: 2,
  title: 'Sintassi avanzata e stile formale',
  subtitle: { bn: 'কর্মবাচ্য, অসমাপিকা বাক্য, চিহ্নিত কাঠামো ও বিশেষ্যীকরণ', en: 'Passives, implicit clauses, marked syntax & nominalisation' },
  lessons: [lesson1, lesson2, lesson3],
};
