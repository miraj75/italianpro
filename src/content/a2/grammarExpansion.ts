import type { GrammarDetailEntry } from '../grammarDetailsA2';
import type { GrammarTopic } from '../grammar';
import type { QuizQuestion, Tr } from '../types';

const P = ['io', 'tu', 'lui/lei', 'noi', 'voi', 'loro'];
const conj = (forms: string[]): [string, string][] => forms.map((f, i) => [P[i]!, f]);

/**
 * 42 additional granular CEFR A2 grammar topics spanning:
 * - Module 1 (a2-tenses): 24 topics -> 32 total topics in Module 1
 * - Module 2 (a2-verbs): 2 topics
 * - Module 3 (a2-pronouns-prep): 5 topics
 * - Module 4 (a2-modifiers): 4 topics
 * - Module 5 (a2-grammar-expansion): 7 topics
 * Combined with the existing 32 A2 topics = 74 A2 grammar explanations.
 */
export const A2_EXTRA_GRAMMAR_TOPICS: GrammarTopic[] = [
  // ---------- Module 1: a2-tenses (+24 topics = 32 total in Module 1) ----------
  {
    id: 'pp-verbi-movimento-stato',
    level: 'A2',
    title: 'Passato prossimo: movimento e stato',
    name: { bn: 'গতি ও অবস্থার পরিবর্তনের ক্রিয়া (essere)', en: 'Motion & change-of-state verbs with essere' },
    explanation: {
      bn: 'গন্তব্যমুখী গতি (arrivare, partire, tornare, entrare, uscire, salire, scendere) ও অবস্থান-অবস্থার পরিবর্তন (nascere, diventare, crescere, restare, rimanere) সবসময় essere নেয় এবং পার্টিসিপল কর্তার লিঙ্গ-বচন মেনে চলে।',
      en: 'Directional motion verbs (arrivare, partire, tornare, entrare, uscire, salire, scendere) and state-change verbs (nascere, diventare, crescere, restare) always take essere and agree with the subject.',
    },
    table: [['arrivare / partire', 'è arrivato/a, è partito/a'], ['entrare / uscire', 'sono entrati/e, sono usciti/e'], ['salire / scendere', 'è salito/a, è sceso/a'], ['diventare / restare', 'è diventato/a, è rimasto/a']],
  },
  {
    id: 'pp-verbi-attivita-avere',
    level: 'A2',
    title: 'Passato prossimo: camminare, viaggiare, nuotare',
    name: { bn: 'গতিশীল কাজ কিন্তু avere (camminare, viaggiare)', en: 'Activity verbs taking avere' },
    explanation: {
      bn: 'camminare, passeggiare, viaggiare, ballare, nuotare, sciare, dormire, lavorare শারীরিক বা চলাচলের কাজ বোঝালেও নির্দিষ্ট শুরু-শেষের গন্তব্য না থাকায় avere নেয়: Ho camminato un’ora, Abbiamo viaggiato molto।',
      en: 'Activity and sport verbs like camminare, passeggiare, viaggiare, ballare, nuotare, and sciare take avere because they describe the activity itself rather than reaching a destination.',
    },
    table: [['camminare', 'ho camminato due chilometri'], ['viaggiare', 'abbiamo viaggiato in treno'], ['nuotare', 'hai nuotato al mare'], ['passeggiare', 'hanno passeggiato in centro']],
  },
  {
    id: 'pp-verbi-atmosferici-cambiamento',
    level: 'A2',
    title: 'Verbi atmosferici e doppio ausiliare',
    name: { bn: 'আবহাওয়া ও শুরু-শেষের ক্রিয়া (piovere, finire)', en: 'Weather & dual-auxiliary verbs' },
    explanation: {
      bn: 'আবহাওয়ার ক্রিয়ায় (piovere, nevicare) আধুনিক ইতালিয়ানে essere ও avere দুটোই চলে (È piovuto / Ha piovuto)। cominciare ও finire-এর পরে কর্ম থাকলে avere (Ho finito il lavoro), আর কর্ম না থাকলে essere (La lezione è finita) বসে।',
      en: 'Weather verbs (piovere, nevicare) accept both essere and avere (È piovuto / Ha piovuto). Verbs like cominciare and finire take avere with a direct object (Ho finito la cena) and essere without one (Il film è finito).',
    },
    table: [['con oggetto (avere)', 'Ho finito i compiti'], ['senza oggetto (essere)', 'Il corso è finito'], ['meteo', 'È piovuto / Ha piovuto']],
  },
  {
    id: 'pp-essere-piacere-sembrare',
    level: 'A2',
    title: 'Piacere, bastare, succedere al passato',
    name: { bn: 'piacere, bastare, succedere-এর অতীত রূপ', en: 'piacere, bastare & succedere in the past' },
    explanation: {
      bn: 'piacere, bastare, sembrare, succedere, mancare অতীতে সবসময় essere সহায়ক নেয় এবং পার্টিসিপল আসল কর্তার (পছন্দ বা ঘটা জিনিসের) সাথে মেলে: Il film mi è piaciuto, Le scarpe mi sono piaciute, Che cosa è successo?',
      en: 'piacere, bastare, sembrare, succedere, and mancare always use essere in the passato prossimo, agreeing with the grammatical subject: Il concerto mi è piaciuto; Le fotografie ci sono piaciute.',
    },
    table: [['il film (m.sg.)', 'mi è piaciuto'], ['la pizza (f.sg.)', 'mi è piaciuta'], ['i dolci (m.pl.)', 'ci sono piaciuti'], ['succedere', 'è successo / è successa']],
  },
  {
    id: 'pp-negazione-avverbi',
    level: 'A2',
    title: 'Ordine di non, già, appena, mai',
    name: { bn: 'অতীতে non, già, appena, mai-এর অবস্থান', en: 'Word order: non, già, appena, mai' },
    explanation: {
      bn: 'passato prossimo-তে non সহায়ক ক্রিয়ার আগে বসে (Non ho visto)। আর ছোট ক্রিয়াবিশেষণ già, appena, ancora, sempre, mai সাধারণত সহায়ক ক্রিয়া ও পার্টিসিপলের মাঝখানে বসে: Ho già finito, Non sono mai stato a Napoli।',
      en: 'Place non before the auxiliary (Non ho chiamato). Short adverbs già, appena, ancora, sempre, and mai sit directly between the auxiliary and the past participle: Ho appena finito, Non è mai uscito.',
    },
    table: [['già / appena', 'Ho già mangiato / È appena arrivato'], ['non … ancora', 'Non ho ancora risposto'], ['non … mai', 'Non siamo mai andati lì']],
  },
  {
    id: 'pp-irregolari-sto-rto',
    level: 'A2',
    title: 'Participi irregolari: -sto, -rto, -lto, -nto',
    name: { bn: 'অনিয়মিত পার্টিসিপল দল ২ (-sto, -rto, -lto, -nto)', en: 'Irregular participles: -sto, -rto, -lto, -nto' },
    explanation: {
      bn: 'দ্বিতীয় প্রধান অনিয়মিত দল: chiedere→chiesto, rispondere→risposto, vedere→visto, rimanere→rimasto; aprire→aperto, offrire→offerto, coprire→coperto, scoprire→scoperto; scegliere→scelto, togliere→tolto; spegnere→spento, vincere→vinto।',
      en: 'Key irregular families: -sto (chiesto, risposto, visto, rimasto), -rto (aperto, offerto, coperto), -lto (scelto, tolto, raccolto), and -nto (spento, vinto, dipinto).',
    },
    table: [['chiedere / rispondere', 'chiesto / risposto'], ['aprire / offrire', 'aperto / offerto'], ['scegliere / spegnere', 'scelto / spento'], ['vincere / rimanere', 'vinto / rimasto']],
  },
  {
    id: 'pp-irregolari-doppie-s',
    level: 'A2',
    title: 'Participi irregolari: -so e -sso',
    name: { bn: 'অনিয়মিত পার্টিসিপল দল ৩ (-so ও -sso)', en: 'Irregular participles: -so and -sso' },
    explanation: {
      bn: 'তৃতীয় প্রধান দল (-so / -sso): prendere→preso, spendere→speso, decidere→deciso, chiudere→chiuso, accendere→acceso, perdere→perso, scendere→sceso; mettere→messo, promettere→promesso, permettere→permesso, succedere→successo।',
      en: 'High-frequency -so and -sso participles: preso, speso, deciso, chiuso, acceso, perso, sceso, and messo, promesso, permesso, successo.',
    },
    table: [['prendere / spendere', 'preso / speso'], ['chiudere / accendere', 'chiuso / acceso'], ['decidere / perdere', 'deciso / perso'], ['mettere / succedere', 'messo / successo']],
  },
  {
    id: 'accordo-participio-ne',
    level: 'A2',
    title: 'Accordo del participio con ne e clitici',
    name: { bn: 'ne ও কর্ম-সর্বনামের সাথে পার্টিসিপলের মিল', en: 'Participle agreement with ne and clitics' },
    explanation: {
      bn: 'যখন ne দ্বারা কোনো গণনাযোগ্য বহুবচন বা একবচন বস্তুর অংশ বোঝানো হয়, তখন পাস্ট পার্টিসিপল সেই বিশেষ্যের লিঙ্গ ও বচন অনুযায়ী মেলে: Quante pagine hai letto? Ne ho lette venti। সরাসরি সর্বনাম lo/la/li/le-এর সাথেও মিল বাধ্যতামূলক।',
      en: 'When ne stands in for a countable quantity, the past participle agrees with the implied noun: Quanti caffè hai preso? Ne ho presi due. Le mele? Ne ho comprate quattro.',
    },
    table: [['quanti biglietti?', 'Ne ho comprati tre'], ['quante mail?', 'Ne ho scritte cinque'], ['il contratto?', 'L’ho già firmato']],
  },
  {
    id: 'imperfetto-essere-fare-bere-dire',
    level: 'A2',
    title: 'Imperfetto dei verbi irregolari',
    name: { bn: 'অনিয়মিত imperfetto (essere, fare, dire, bere)', en: 'Irregular stems in the imperfetto' },
    explanation: {
      bn: 'imperfetto ইতালিয়ানের সবচেয়ে নিয়মিত কাল, তবে মাত্র কয়েকটি ক্রিয়া মনে রাখতে হয়: essere→ero, eri, era, eravamo, eravate, erano; fare→facevo; dire→dicevo; bere→bevevo; tradurre→traducevo। dare এবং stare নিয়মিত (davo, stavo)।',
      en: 'Imperfetto has very few irregulars: essere (ero, eri, era, eravamo, eravate, erano) plus Latin-stem verbs fare (facevo), dire (dicevo), bere (bevevo), and tradurre (traducevo).',
    },
    table: conj(['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano']),
  },
  {
    id: 'imperfetto-descrizioni-eta-meteo',
    level: 'A2',
    title: 'Imperfetto per età, meteo e stati',
    name: { bn: 'অতীতের বয়স, সময়, আবহাওয়া ও অনুভূতি বর্ণনা', en: 'Imperfetto for age, time, weather & states' },
    explanation: {
      bn: 'অতীতে কারও বয়স কত ছিল (Avevo vent’anni), কয়টা বাজে (Erano le otto), আবহাওয়া কেমন ছিল (Faceva freddo, pioveva), বা শরীর-মন কেমন ছিল (Ero stanco, avevo fame) তা বলতে সবসময় imperfetto বসে।',
      en: 'In Italian, age (Avevo dodici anni), clock time (Era mezzogiorno), weather (C’era nebbia), and physical or emotional states in the past (Avevo sonno) take the imperfetto.',
    },
    table: [['età', 'Avevo otto anni'], ['ora', 'Erano le sette di sera'], ['meteo', 'C’era vento e faceva fresco'], ['stato d’animo', 'Ero molto emozionato']],
  },
  {
    id: 'imperfetto-abitudini-ripetute',
    level: 'A2',
    title: 'Imperfetto: abitudini del passato',
    name: { bn: 'অতীতের নিয়মিত অভ্যাস ও শৈশবের রুটিন', en: 'Imperfetto for repeated past routines' },
    explanation: {
      bn: 'অতীতে যে কাজ বারবার বা নিয়মিত হতো ("করতাম, যেতাম") সেখানে di solito, sempre, ogni estate, tutti i giorni, da piccolo-এর সাথে imperfetto ব্যবহার করুন: Ogni domenica andavamo al parco।',
      en: 'Use the imperfetto ("used to / would") whenever an action happened habitually over an unspecified time frame in the past, especially with ogni giorno, sempre, di solito, or da bambino.',
    },
    table: [['da piccolo', 'giocavo in cortile'], ['ogni mattina', 'prendevamo il bus'], ['tutti gli anni', 'partivano ad agosto']],
  },
  {
    id: 'imperfetto-azioni-simultanee',
    level: 'A2',
    title: 'Mentre + imperfetto: azioni parallele',
    name: { bn: 'একই সময়ে দুটি চলমান কাজ (mentre + imperfetto)', en: 'Parallel ongoing actions with mentre' },
    explanation: {
      bn: 'অতীতে একই সময়ে দুটি কাজ চলছিল বোঝাতে mentre-এর সাথে উভয় অংশে imperfetto বসে: Mentre io preparavo il caffè, mia sorella leggeva il giornale।',
      en: 'When two ongoing past actions unfolded side by side at the same time, use mentre with the imperfetto in both clauses: Mentre studiavo, pioveva fuori.',
    },
    table: [['mentre + imp. + imp.', 'Mentre cucinavo, ascoltavo la radio'], ['durante la lezione', 'Gli studenti prendevano appunti']],
  },
  {
    id: 'passato-vs-imperfetto-contrasti',
    level: 'A2',
    title: 'Sapere, conoscere, volere nei due passati',
    name: { bn: 'কালভেদে অর্থের সূক্ষ্ম পার্থক্য (sapere, conoscere)', en: 'Tense contrasts: sapere, conoscere, potere' },
    explanation: {
      bn: 'কয়েকটি ক্রিয়ার ক্ষেত্রে imperfetto অবস্থা বোঝায় আর passato prossimo নির্দিষ্ট ঘটনা: sapevo = আগে থেকেই জানতাম, ho saputo = খবরটি জানলাম; conoscevo = আগে চিনতাম, ho conosciuto = প্রথম পরিচিত হলাম; volevo = ইচ্ছে ছিল।',
      en: 'With stative verbs, imperfetto describes an existing state while passato prossimo marks the moment of change: conoscevo (knew) vs ho conosciuto (met for the first time); sapevo (knew) vs ho saputo (found out).',
    },
    table: [['conoscere', 'lo conoscevo già / l’ho conosciuto ieri'], ['sapere', 'lo sapevo / l’ho saputo stamattina'], ['dovere', 'dovevo studiare / ho dovuto studiare']],
  },
  {
    id: 'futuro-variazioni-care-gare',
    level: 'A2',
    title: 'Futuro: verbi in -care/-gare e -ciare/-giare',
    name: { bn: 'ভবিষ্যৎ কালে বানান বদল (-care/-gare, -ciare/-giare)', en: 'Future spelling rules (-care/-gare, -ciare/-giare)' },
    explanation: {
      bn: 'ভবিষ্যৎ কালে -are ক্রিয়ার ধাতু -er- হয়। শক্ত ধ্বনি রাখতে -care/-gare-এ h যোগ হয় (cercare→cercherò, pagare→pagherò)। আর -ciare/-giare-এ অপ্রয়োজনীয় i বাদ যায় (cominciare→comincerò, mangiare→mangerò)।',
      en: 'In futuro semplice, -care and -gare verbs insert an h before -er- (cercherò, pagherai), while -ciare and -giare verbs drop the i (comincerò, viaggeremo).',
    },
    table: [['cercare / pagare', 'cercherò, pagherò'], ['dimenticare / spiegare', 'dimenticherai, spiegherà'], ['mangiare / cominciare', 'mangeremo, comincerò'], ['viaggiare', 'viaggerete, viaggeranno']],
  },
  {
    id: 'futuro-irregolari-radice',
    level: 'A2',
    title: 'Futuro semplice: radici irregolari',
    name: { bn: 'ভবিষ্যৎ কালের অনিয়মিত ধাতু (sarò, andrò, verrò)', en: 'Irregular future stems' },
    explanation: {
      bn: 'সবচেয়ে জরুরি অনিয়মিত ভবিষ্যৎ রূপ — ১ম দল (স্বর লোপ): essere→sarò, avere→avrò, andare→andrò, fare→farò, dare→darò, stare→starò, vedere→vedrò, potere→potrò, dovere→dovrò; ২য় দল (-rr-): venire→verrò, rimanere→rimarrò, tenere→terrò, volere→vorrò।',
      en: 'Memorize irregular future stems in two groups: dropped vowels (sarò, avrò, andrò, vedrò, potrò, dovrò, saprò) and doubled -rr- stems (verrò, rimarrò, terrò, vorrò).',
    },
    table: [['essere / avere', 'sarò, sarai… / avrò, avrai…'], ['andare / vedere', 'andrò / vedrò'], ['venire / volere', 'verrò / vorrò'], ['potere / dovere / sapere', 'potrò / dovrò / saprò']],
  },
  {
    id: 'futuro-piani-promesse',
    level: 'A2',
    title: 'Futuro per piani, promesse e impegni',
    name: { bn: 'ভবিষ্যৎ পরিকল্পনা, প্রতিশ্রুতি ও অ্যাপয়েন্টমেন্ট', en: 'Future for plans, promises & schedules' },
    explanation: {
      bn: 'নির্দিষ্ট ভবিষ্যৎ তারিখ, ভ্রমণ পরিকল্পনা, প্রতিশ্রুতি ও সংকল্প প্রকাশে futuro semplice স্বাভাবিক: Tra due mesi cambierò casa; Ti prometto che ti aiuterò; Quando inizierà il corso? খুব কাছের কাজে বর্তমান কালও ব্যবহার হয়।',
      en: 'Use futuro semplice for upcoming schedules, personal goals, commitments, and promises: L’anno prossimo mi iscriverò all’università; Ti chiamerò appena arrivo.',
    },
    table: [['piano', 'A settembre comincerò un nuovo lavoro'], ['promessa', 'Ti prometto che non arriverò tardi'], ['domanda', 'Quando partirai per Milano?']],
  },
  {
    id: 'futuro-ipotesi-probabilita',
    level: 'A2',
    title: 'Futuro epistemico (supposizioni)',
    name: { bn: 'সম্ভাবনা ও অনুমান বোঝাতে ভবিষ্যৎ কাল', en: 'Future tense for present guesses' },
    explanation: {
      bn: 'ইতালিয়ানে বর্তমান সময়ের কোনো বিষয় নিশ্চিত না হয়ে অনুমান করলে futuro semplice বসে: "Quanti anni ha Luca? Avrà trent’anni" ("সম্ভবত ৩০ হবে"); "Dov’è Sara? Sarà già in stazione"।',
      en: 'Italian regularly uses the futuro semplice to make a reasonable guess about the present ("probably / must be"): Che ore sono? Saranno le sei; Non risponde, sarà stanco.',
    },
    table: [['età stimata', 'Avrà circa venticinque anni'], ['luogo stimato', 'Sarà già a casa'], ['motivo stimato', 'Avrà perso l’autobus']],
  },
  {
    id: 'espressioni-tempo-passato',
    level: 'A2',
    title: 'Indicatori temporali del passato',
    name: { bn: 'অতীতের সময়বাচক শব্দ (ieri, fa, scorso vs sempre)', en: 'Past time expressions (ieri, fa vs sempre)' },
    explanation: {
      bn: 'নির্দিষ্ট সমাপ্ত সময়ের সাথে (ieri, l’altro ieri, stamattina, la settimana scorsa, tre giorni fa, nel 2023) passato prossimo বসে। আর অভ্যাসবাচক সময়ের সাথে (sempre, di solito, ogni mattina, da bambino, un tempo) imperfetto বসে।',
      en: 'Specific past markers (ieri, l’altro ieri, la settimana scorsa, cinque anni fa, nel 2021) trigger passato prossimo; habitual markers (sempre, di solito, ogni estate, da piccolo) trigger imperfetto.',
    },
    table: [['passato prossimo', 'ieri, tre giorni fa, il mese scorso'], ['imperfetto', 'ogni giorno, sempre, da bambino']],
  },
  {
    id: 'espressioni-tempo-futuro',
    level: 'A2',
    title: 'Indicatori temporali del futuro',
    name: { bn: 'ভবিষ্যতের সময়বাচক শব্দ (fra, prossimo, dopodomani)', en: 'Future time expressions (fra, prossimo)' },
    explanation: {
      bn: 'ভবিষ্যতের জন্য ব্যবহৃত হয়: domani, dopodomani (পরশু), stasera, tra/fra + সময় ("পরে": fra mezz’ora, tra due settimane), la settimana prossima, il prossimo mese, entro lunedì (সোমবারের মধ্যে), un giorno।',
      en: 'Key future expressions: domani, dopodomani (day after tomorrow), tra/fra + duration (tra dieci minuti = in 10 minutes), prossimo/a, entro venerdì (by Friday).',
    },
    table: [['fra / tra + durata', 'tra cinque minuti, fra un anno'], ['prossimo/a', 'la settimana prossima, il prossimo luglio'], ['scadenza', 'entro la fine del mese']],
  },
  {
    id: 'sequenza-narrativa-inizio',
    level: 'A2',
    title: 'Sequenza narrativa: iniziare il racconto',
    name: { bn: 'গল্প ও বিবরণের শুরু করার বাক্য-সংযোজক', en: 'Narrative sequencing: opening a story' },
    explanation: {
      bn: 'অতীতের অভিজ্ঞতা বা গল্প সুন্দরভাবে শুরু করতে ব্যবহার করুন: Prima di tutto (সবার আগে), All’inizio (শুরুতে), Un giorno / Una mattina, La scorsa estate, Innanzitutto। প্রথমে পটভূমি imperfetto-তে বলে ঘটনা শুরু করুন।',
      en: 'Open a past narrative cleanly with starters like All’inizio, Prima di tutto, Un giorno, Quella mattina, and Innanzitutto, setting the scene in imperfetto before introducing main events.',
    },
    table: [['all’inizio', 'শুরুতে'], ['prima di tutto', 'সবার আগে'], ['quella mattina', 'সেই সকালে'], ['un giorno', 'একদিন']],
  },
  {
    id: 'sequenza-narrativa-sviluppo',
    level: 'A2',
    title: 'Sequenza narrativa: sviluppo e svolta',
    name: { bn: 'গল্প এগিয়ে নেওয়া ও হঠাৎ ঘটনা (poi, all’improvviso)', en: 'Narrative sequencing: turning points' },
    explanation: {
      bn: 'ধারাবাহিক ঘটনা সাজাতে: Poi / Dopo (তারপর), Subito dopo (তার ঠিক পরেই), Più tardi (কিছুক্ষণ পর), Nel frattempo (ইতোমধ্যে), Proprio in quel momento / All’improvviso (হঠাৎ) + passato prossimo।',
      en: 'Connect unfolding actions in chronological order using poi, dopo, subito dopo, più tardi, nel frattempo, and mark sudden turning points with all’improvviso + passato prossimo.',
    },
    table: [['poi / subito dopo', 'তারপর / ঠিক তার পরই'], ['nel frattempo', 'ইতোমধ্যে'], ['all’improvviso', 'হঠাৎ করে']],
  },
  {
    id: 'sequenza-narrativa-conclusione',
    level: 'A2',
    title: 'Sequenza narrativa: concludere la storia',
    name: { bn: 'গল্প ও অভিজ্ঞতার সমাপ্তি (alla fine, per fortuna)', en: 'Narrative sequencing: concluding clearly' },
    explanation: {
      bn: 'বিবরণ শেষ করতে: Alla fine (অবশেষে), Finalmente (অবশেষে স্বস্তির সাথে), In conclusione, Per fortuna (ভাগ্যিস / সৌভাগ্যক্রমে), Purtroppo (দুর্ভাগ্যবশত)। মনে রাখুন: finalmente তখনই বসে যখন অপেক্ষার পর ভালো ফল আসে।',
      en: 'Wrap up past stories with Alla fine (in the end), Finalmente (finally, after a wait), Per fortuna (luckily), and Purtroppo (unfortunately).',
    },
    table: [['alla fine', 'অবশেষে / শেষ পর্যন্ত'], ['finalmente', 'অবশেষে (স্বস্তির সাথে)'], ['per fortuna / purtroppo', 'সৌভাগ্যক্রমে / দুর্ভাগ্যক্রমে']],
  },
  {
    id: 'azioni-compiute-durata-finita',
    level: 'A2',
    title: 'Durata: da, per e in',
    name: { bn: 'সময়কালের পার্থক্য (da, per, in)', en: 'Duration contrast: da, per, and in' },
    explanation: {
      bn: 'da + বর্তমান: অতীতে শুরু হয়ে এখনো চলছে (Vivo qui da due anni)। per + passato prossimo: অতীতে নির্দিষ্ট সময় ধরে চলে শেষ হয়েছে (Ho vissuto lì per due anni)। in + সময়: কোনো কাজ শেষ করতে মোট সময় লাগা (Ho finito in venti minuti)।',
      en: 'Use da + present for actions still continuing now; per + passato prossimo for completed durations; in + time span for how fast something was completed.',
    },
    table: [['ancora in corso', 'Studio qui da sei mesi'], ['durata conclusa', 'Ho studiato lì per sei mesi'], ['velocità', 'Ho cucinato la cena in mezz’ora']],
  },
  {
    id: 'racconto-biografico-a2',
    level: 'A2',
    title: 'Collegare passato, presente e futuro',
    name: { bn: 'অতীত, বর্তমান ও ভবিষ্যৎ কাল একসাথে ব্যবহার', en: 'Combining past, present & future in one story' },
    explanation: {
      bn: 'একটি সম্পূর্ণ A2 জীবনবৃত্তান্ত বা ভ্রমণ-বিবরণে তিন কাল স্বাভাবিকভাবে বদলায়: অতীতের পটভূমি (imperfetto) → প্রধান ঘটনা (passato prossimo) → বর্তমান অবস্থা (presente + da) → আগামী লক্ষ্য (futuro semplice)।',
      en: 'Fluent A2 storytelling weaves all four frames together: childhood/scene in imperfetto, milestones in passato prossimo, current habits in presente (+ da), and next steps in futuro semplice.',
    },
    table: [['background (imp.)', 'Nel 2019 abitavo a Dacca'], ['milestone (p.p.)', 'Nel 2022 mi sono trasferito'], ['attuale + futuro', 'Ora lavoro qui e presto viaggerò']],
  },

  // ---------- Module 2: a2-verbs (7 grammar topics + 66 verbs) ----------
  {
    id: 'verbi-modali-futuro-imperfetto',
    level: 'A2',
    title: 'Modali in più tempi verbali',
    name: { bn: 'মডাল ক্রিয়া বহু কালে (imperfetto, futuro, condizionale)', en: 'Modal verbs across multiple tenses' },
    explanation: {
      bn: 'dovere, potere, volere শুধু বর্তমান নয়, বিভিন্ন কালে ব্যবহার হয়: imperfetto (প্রয়োজন বা ইচ্ছা ছিল, কিন্তু নিশ্চিত না শেষ হয়েছে কিনা: dovevo uscire), passato prossimo (সফল বা বাধ্য হওয়া: ho dovuto pagare), futuro (করতে হবে: dovrò partire), condizionale (উচিত/পারতাম: dovrei/potrei)।',
      en: 'Modals shift shade across tenses: imperfetto (dovevo/volevo = had planned or wanted to), passato prossimo (ho dovuto/ho potuto = actually had/managed to), futuro (dovrò/potrò), and condizionale (dovrei/potrei).',
    },
    table: [['presente', 'devo / posso / voglio'], ['imperfetto', 'dovevo / potevo / volevo'], ['futuro', 'dovrò / potrò / vorrò'], ['condizionale', 'dovrei / potrei / vorrei']],
  },
  {
    id: 'verbi-combinazioni-comuni',
    level: 'A2',
    title: 'Combinazioni verbali essenziali (fare, prendere, dare)',
    name: { bn: 'প্রচলিত ক্রিয়া-বিশেষ্য সংযোগ (fare la spesa, prendere)', en: 'Essential verb + noun combinations' },
    explanation: {
      bn: 'ইতালিয়ানে fare, prendere, dare, stare নির্দিষ্ট শব্দের সাথে জুড়ে স্বাভাবিক বাক্যাংশ তৈরি করে: fare la spesa (বাজার করা), fare colazione (নাস্তা করা), fare attenzione (মনোযোগ দেওয়া), prendere un appuntamento (অ্যাপয়েন্টমেন্ট নেওয়া), dare una mano (সাহায্য করা), avere bisogno di (দরকার হওয়া)।',
      en: 'High-frequency Italian verb collocations: fare la spesa (grocery shopping), fare attenzione (pay attention), fare una passeggiata, prendere una decisione, prendere il treno, dare una mano (lend a hand).',
    },
    table: [['fare', 'la spesa, colazione, una domanda, attenzione'], ['prendere', 'il treno, un caffè, una pausa, un’aspirina'], ['dare / avere', 'dare una mano / avere bisogno di']],
  },

  // ---------- Module 3: a2-pronouns-prep (+5 topics) ----------
  {
    id: 'pronomi-diretti-infinito',
    level: 'A2',
    title: 'Pronomi diretti con l’infinito',
    name: { bn: 'ইনফিনিটিভের সাথে প্রত্যক্ষ সর্বনাম (Voglio vederlo)', en: 'Direct pronouns with infinitives' },
    explanation: {
      bn: 'বাক্যে মডাল ক্রিয়া (volere, potere, dovere) বা ক্রিয়া + ইনফিনিটিভ থাকলে প্রত্যক্ষ সর্বনাম মূল ক্রিয়ার আগে অথবা ইনফিনিটিভের শেষে-e বাদ দিয়ে জোড়া লাগতে পারে: Lo voglio comprare = Voglio comprarlo।',
      en: 'With modal verbs + infinitive, a direct object pronoun can stand before the conjugated verb or attach directly to the end of the infinitive (dropping final -e): Ti posso aiutare? = Posso aiutarti?',
    },
    table: [['prima del verbo', 'Lo devo leggere oggi'], ['attaccato all’infinito', 'Devo leggerlo oggi'], ['femminile plurale', 'Le posso chiamare / Posso chiamarle']],
  },
  {
    id: 'pronomi-indiretti-verbi',
    level: 'A2',
    title: 'Verbi con pronome indiretto',
    name: { bn: 'পরোক্ষ কর্ম সর্বনাম নেওয়া ক্রিয়া (servire, mancare, rispondere)', en: 'Key verbs requiring indirect object pronouns' },
    explanation: {
      bn: 'কিছু গুরুত্বপূর্ণ ক্রিয়া সরাসরি কর্ম নয় বরং "a qualcuno" চায়: piacere (ভালো লাগা), servire (দরকার হওয়া: Mi serve una penna), mancare (মিস করা/কম থাকা), sembrare (মনে হওয়া), bastare (যথেষ্ট হওয়া), telefonare, rispondere, chiedere, scrivere, dare, prestare।',
      en: 'Master verbs that take indirect pronouns (mi/ti/gli/le/ci/vi/gli): servire (Mi serve un modulo), sembrare (Mi sembra giusto), mancare (Ci manca il tempo), rispondere (Gli ho risposto).',
    },
    table: [['servire / bastare', 'Mi serve un foglio / Ti basta?'], ['rispondere / telefonare', 'Le ho risposto / Gli telefono dopo'], ['sembrare / mancare', 'Mi sembra caro / Mi manchi']],
  },
  {
    id: 'pronomi-combinati-a2',
    level: 'A2',
    title: 'Pronomi combinati (introduzione)',
    name: { bn: 'যুক্ত সর্বনামের প্রাথমিক ব্যবহার (me lo, te la, glielo)', en: 'Combined pronouns (introductory)' },
    explanation: {
      bn: 'যখন পরোক্ষ সর্বনাম (কাকে) ও প্রত্যক্ষ সর্বনাম (কী) একসাথে বসে, তখন প্রথমটির -i বদলে -e হয়: mi + lo → me lo, ti + la → te la, ci + li → ce li, vi + le → ve le; আর gli/le/Le সবসময় glie- হয়ে জোড়া লাগে: glielo, gliela, glieli, gliele।',
      en: 'When combining indirect + direct pronouns, mi/ti/ci/vi become me/te/ce/ve before lo/la/li/le/ne (me lo dai? = will you give it to me?), while gli/le/Le merge into glielo, gliela, glieli, gliele.',
    },
    table: [['mi + lo / la', 'me lo / me la'], ['ti + lo / li', 'te lo / te li'], ['gli/le + lo / la', 'glielo / gliela'], ['ci + ne', 'ce ne']],
  },
  {
    id: 'pronomi-riflessivi-a2',
    level: 'A2',
    title: 'Riflessivi reciproci e con modali',
    name: { bn: 'পারস্পরিক প্রতিফলক ও মডালসহ অবস্থান', en: 'Reciprocal reflexives & infinitive placement' },
    explanation: {
      bn: 'বহুবচনে ci, vi, si পারস্পরিক কাজ বোঝায় ("একে অপরকে"): Ci vediamo domani (কাল দেখা হবে), Vi sentite spesso? (তোমরা কি প্রায়ই যোগাযোগ করো?)। মডালের সাথে সর্বনাম শুরুতে বা শেষে বসে: Mi voglio riposare = Voglio riposarmi।',
      en: 'Plural reflexive pronouns express mutual actions ("each other"): Ci sentiamo stasera, Si scrivono ogni settimana. With modals, place the pronoun before the modal or attach it to the infinitive (Voglio riposarmi).',
    },
    table: [['reciproci', 'Ci vediamo alle sette / Si salutano'], ['prima del modale', 'Mi devo svegliare presto'], ['dopo l’infinito', 'Devo svegliarmi presto']],
  },
  {
    id: 'connettivi-logici-a2',
    level: 'A2',
    title: 'Connettivi di causa, contrasto e sequenza',
    name: { bn: 'কারণ, বৈপরীত্য, ক্রম ও ফলাফলের সংযোজক', en: 'Connectors for reason, contrast, sequence & result' },
    explanation: {
      bn: 'বাক্যকে যুক্তিশীল করতে: কারণ (perché, siccome, dato che — siccome সাধারণত বাক্যের শুরুতে বসে); ফলাফল (quindi, allora, per questo); বৈপরীত্য (ma, però, invece, anche se, purtroppo); ক্রম (prima, poi, inoltre, infine)।',
      en: 'Structure explanations cleanly: Cause (perché, siccome at sentence start), Result (quindi, perciò, per questo), Contrast (ma, però, invece, anche se), Sequence/Addition (prima, poi, inoltre, alla fine).',
    },
    table: [['causa', 'Siccome piove, resto in casa'], ['contrasto', 'È caro, però funziona bene / invece'], ['conseguenza', 'Ero malato, perciò sono rimasto a letto']],
  },

  // ---------- Module 4: a2-modifiers (+4 topics) ----------
  {
    id: 'comparativi-uguaglianza',
    level: 'A2',
    title: 'Comparativi di uguaglianza',
    name: { bn: 'সমান তুলনা (tanto … quanto / così … come)', en: 'Comparisons of equality' },
    explanation: {
      bn: 'দুটি জিনিস বা গুণ সমান বোঝাতে (tanto) … quanto অথবা (così) … come ব্যবহার হয়: Marco è alto come Luca; Questo corso è tanto interessante quanto utile। প্রথম অংশ (tanto / così) প্রায়ই বাদ দেওয়া যায়।',
      en: 'Express equality ("as … as") with (tanto) + adjective/adverb + quanto, or (così) … come. The first word (tanto/così) is optional in everyday speech: Il treno è comodo quanto veloce.',
    },
    table: [['aggettivo', 'è (tanto) chiaro quanto utile'], ['nome / pronome', 'è (così) simpatico come te'], ['quantità (nomi)', 'Ho tanti amici quanti ne hai tu']],
  },
  {
    id: 'superlativo-relativo',
    level: 'A2',
    title: 'Il superlativo relativo (il più / il meno)',
    name: { bn: 'সাপেক্ষ শ্রেষ্ঠত্ব (সবচেয়ে বেশি / কম: il più… di)', en: 'Relative superlative (il più / il meno)' },
    explanation: {
      bn: 'একটি দলের মধ্যে সেরা বা সর্বনিম্ন বোঝাতে নির্দিষ্ট আর্টিকেল + (বিশেষ্য) + più / meno + বিশেষণ + di + দল: È il ristorante più buono del quartiere; Questa è la strada meno rumorosa della città।',
      en: 'Form relative superlatives ("the most / least … in …") with definite article + (noun) + più/meno + adjective + di: È la piazza più famosa d’Italia; È lo zaino meno caro del negozio.',
    },
    table: [['m.sg.', 'il museo più grande della città'], ['f.sg.', 'la spiaggia più pulita della costa'], ['m.pl.', 'i treni più veloci del Paese']],
  },
  {
    id: 'superlativo-assoluto',
    level: 'A2',
    title: 'Il superlativo assoluto (-issimo)',
    name: { bn: 'অতিশয় গুণ (-issimo, molto, davvero)', en: 'Absolute superlative (-issimo)' },
    explanation: {
      bn: 'কারও সাথে তুলনা না করে "খুবই / অত্যন্ত" বোঝাতে বিশেষণের শেষ স্বর বাদ দিয়ে -issimo / -issima / -issimi / -issime যোগ হয়: bello→bellissimo, buona→buonissima, utili→utilissimi। অনেক-co/-go বিশেষণে h লাগে: lungo→lunghissimo, antico→antichissimo।',
      en: 'Express "very / extremely" without comparing by dropping the final vowel of an adjective and adding -issimo/a/i/e (caro→carissima). Add h after -co/-go where needed (ricco→ricchissimo).',
    },
    table: [['bello / grande', 'bellissimo / grandissima'], ['fresco / lungo', 'freschissimo / lunghissimo'], ['avverbi', 'benissimo, prestissimo, tardissimo']],
  },
  {
    id: 'avverbi-tempo-luogo-a2',
    level: 'A2',
    title: 'Avverbi di tempo, luogo e intensità',
    name: { bn: 'সময়, স্থান ও মাত্রার ক্রিয়াবিশেষণ', en: 'Adverbs of time, place & degree' },
    explanation: {
      bn: 'গুরুত্বপূর্ণ সময় ও স্থানের ক্রিয়াবিশেষণ: presto, tardi, subito, appena, ormai, ancora, già; qui/qua, lì/là, vicino, lontano, sopra, sotto, fuori, dentro, dappertutto। মাত্রা বোঝাতে: molto, poco, troppo, abbastanza, quasi, davvero।',
      en: 'Core A2 time, place, and degree adverbs: subito (right away), presto (early), appena (just/as soon as), ormai (by now), dappertutto (everywhere), abbastanza (quite/enough), quasi (almost).',
    },
    table: [['tempo', 'subito, presto, tardi, ancora, ormai'], ['luogo', 'qui, lì, fuori, dentro, dappertutto'], ['intensità', 'abbastanza, piuttosto, davvero, quasi']],
  },

  // ---------- Module 5: a2-grammar-expansion (7 new + existing imperative/conditional/gerundio/indefinites) ----------
  {
    id: 'imperativo-voi-lei',
    level: 'A2',
    title: 'Imperativo formale (Lei) e plurale (voi)',
    name: { bn: 'আনুষ্ঠানিক (Lei) ও বহুবচন (voi) আদেশ-নির্দেশ', en: 'Formal (Lei) and plural (voi) imperatives' },
    explanation: {
      bn: 'অপরিচিত বা বয়স্ক কারও প্রতি ভদ্র নির্দেশে Lei রূপ লাগে (স্বর উল্টে যায়: -are→-i, -ere/-ire→-a): Entri pure!, Prenda il biglietto!, Mi scusi! বহুবচনে (voi) বর্তমান কালের মতোই: Entrate!, Prendete!, Venite! এবং সর্বনাম আনুষ্ঠানিক আদেশে আগে বসে (Mi dica!), tu/voi-তে শেষে (Dimmi!, Ditemi!)।',
      en: 'For formal Lei commands, flip endings (-are→-i, -ere/-ire→-a): Aspetti un attimo!, Scusi! Plural voi commands match present voi forms (Prendete l’autobus!). Formal pronouns precede the verb (Mi scusi), while tu/voi pronouns attach to the end (Scusami!).',
    },
    table: [['tu vs Lei (-are)', 'Parla! / Parli! (Scusa / Scusi)'], ['tu vs Lei (-ere/-ire)', 'Prendi! / Prenda! · Apri! / Apra!'], ['voi', 'Ascoltate!, Scrivete!, Venite!'], ['irregolari Lei', 'Sia, Abbia, Vada, Faccia, Dica']],
  },
  {
    id: 'imperativo-negativo',
    level: 'A2',
    title: 'Imperativo negativo (tu, voi, Lei)',
    name: { bn: 'না-বাচক আদেশ ও নিষেধাজ্ঞা (Non fare!)', en: 'Negative imperative forms' },
    explanation: {
      bn: 'tu না-বাচক আদেশ সবচেয়ে সহজ: non + ইনফিনিটিভ (Non correre!, Non avere paura!, Non dimenticarti!)। voi এবং Lei-তে শুধু সাধারণ আদেশের আগে non বসে: Non parlate forte! Signora, non si preoccupi! পাবলিক নোটিশেও ইনফিনিটিভ দেখা যায় (Non toccare)।',
      en: 'Negative tu imperatives always use non + infinitive (Non preoccuparti!, Non uscire!). Negative voi and Lei imperatives simply add non before the positive command: Non aprite!, Non vada via!',
    },
    table: [['tu negativo', 'Non parlare!, Non prendere!, Non andare!'], ['voi negativo', 'Non parlate!, Non dimenticate!'], ['Lei negativo', 'Non si preoccupi!, Non firmi qui!'], ['cartelli pubblici', 'Non calpestare l’erba / Vietato fumare']],
  },
  {
    id: 'quantificatori-tutto-ogni-alcuni',
    level: 'A2',
    title: 'Tutto, ogni, qualche, alcuni, troppo, abbastanza',
    name: { bn: 'পরিমাণবাচক শব্দ (tutto, ogni, qualche, alcuni, abbastanza)', en: 'Quantifiers: tutto, ogni, qualche, alcuni, abbastanza' },
    explanation: {
      bn: 'ogni ও qualche রূপ বদলায় না এবং পরে একবচন বিশেষ্য আসে (ogni giorno, qualche amico)। alcuni/alcune-এর পরে বহুবচন আসে (alcuni amici)। tutto/a/i/e + আর্টিকেল + বিশেষ্য (tutta la giornata, tutti i colleghi)। troppo বিশেষ্যের সাথে মেলে (troppi errori), কিন্তু ক্রিয়া/বিশেষণের সাথে অপরিবর্তিত থাকে (lavora troppo, abbastanza chiaro)।',
      en: 'ogni and qualche are invariable + singular noun; alcuni/e + plural noun; tutto/a/i/e + definite article + noun. troppo and molto agree before nouns (troppi biglietti, molta acqua) but stay invariable before adjectives/verbs (troppo caro, abbastanza facile).',
    },
    table: [['ogni / qualche', 'ogni settimana, qualche domanda (sg.)'], ['alcuni / alcune', 'alcuni colleghi, alcune città (pl.)'], ['tutto + art.', 'tutto il giorno, tutte le stanze'], ['molto / troppo + nome', 'molti turisti, troppa gente, abbastanza tempo']],
  },
  {
    id: 'indefiniti-negativi-composti',
    level: 'A2',
    title: 'Qualcuno, nessuno, qualcosa, niente e parecchio',
    name: { bn: 'ব্যক্তি ও বস্তুর অনির্দিষ্ট সর্বনাম (qualcuno, nessuno, parecchio)', en: 'Someone, no one, something & quite a lot' },
    explanation: {
      bn: 'হ্যাঁ/প্রশ্ন: qualcuno (কেউ), qualcosa (কিছু)। না-বাচক: non… nessuno (কেউ না), non… niente/nulla (কিছুই না)। বিশেষণের আগে + di + পুং একবচন লাগে: qualcosa di caldo, niente di grave। parecchio/a/i/e = বেশ খানিকটা বা বেশ কিছু: Ho aspettato parecchio tempo।',
      en: 'Pair qualcuno/nessuno (people) and qualcosa/niente (things). Use + di + masculine singular adjective after qualcosa/niente (qualcosa di interessante, niente di nuovo). parecchio means "quite a lot / several".',
    },
    table: [['qualcosa + di + agg.', 'Voglio bere qualcosa di fresco'], ['niente + di + agg.', 'Non è successo niente di grave'], ['nessuno (inizio frase)', 'Nessuno ha risposto al telefono'], ['parecchio', 'C’erano parecchie persone in fila']],
  },
  {
    id: 'dimostrativi-a2',
    level: 'A2',
    title: 'Questo e quello nei dialoghi reali',
    name: { bn: 'দৈনন্দিন আলাপে questo ও quello-এর ব্যবহার', en: 'Demonstratives in everyday contrast' },
    explanation: {
      bn: 'বিশেষ্যের আগে quello নির্দিষ্ট আর্টিকেলের নিয়ম মেনে চলে: quel posto, quell’ufficio, quello sportello, quei treni, quegli sconti; quella casa, quell’ora, quelle scarpe। একা সর্বনাম হিসেবে বসলে সাধারণ রূপ: quello (সেটি), quella (সেটি-স্ত্রী), quelli, quelle — যেমন: Prendo quello lì in vetrina।',
      en: 'Before nouns, quello follows definite-article endings (quel treno, quell’anno, quello zaino, quegli autobus, quei negozi). When standing alone as a pronoun, it uses regular endings: quello, quella, quelli, quelle (Vorrei quello blu).',
    },
    table: [['prima del nome (m.)', 'quel libro, quell’hotel, quello zaino'], ['plurale (m.)', 'quei libri, quegli hotel, quegli zaini'], ['pronome autonomo', 'Quale prendi? Prendo quello grande!']],
  },
  {
    id: 'congiunzioni-a2',
    level: 'A2',
    title: 'Congiunzioni temporali e modali (appena, finché, senza)',
    name: { bn: 'সময় ও শর্তের সংযোজক (appena, finché, prima di, dopo)', en: 'Conjunction patterns (appena, finché, prima di, senza)' },
    explanation: {
      bn: 'দৈনন্দিন বাক্য জোড়া দিতে: appena (মাত্রই: Appena arrivi, scrivimi), finché (যতক্ষণ না / যতক্ষণ পর্যন্ত: Aspetta qui finché torno), prima di + ইনফিনিটিভ (আগে: Prima di uscire, chiudi il gas), dopo aver/essere + পার্টিসিপল (পরে), senza + ইনফিনিটিভ (না করে: È uscito senza salutare)।',
      en: 'Connect everyday clauses naturally: appena (as soon as), finché (until / while), prima di + infinitive (before doing), senza + infinitive (without doing), dopo aver/essere + past participle (after doing).',
    },
    table: [['appena + indicativo', 'Appena finisco, ti chiamo'], ['finché', 'Restiamo qui finché smette di piovere'], ['prima di / senza + inf.', 'Prima di pagare, controlla lo scontrino']],
  },
  {
    id: 'condizionale-reale-se-a2',
    level: 'A2',
    title: 'Periodo ipotetico reale (Se + presente)',
    name: { bn: 'বাস্তব শর্তবাক্য (Se + বর্তমান → বর্তমান / ভবিষ্যৎ / আদেশ)', en: 'Real conditional sentences (Se + present)' },
    explanation: {
      bn: 'সম্ভাব্য বা বাস্তব শর্ত বোঝাতে Se + presente ব্যবহার হয়; পরের অংশে presente (সাধারণ নিয়ম), futuro (পরিকল্পনা) অথবা imperativo (পরামর্শ/নির্দেশ) বসতে পারে। মনে রাখবেন: ইংরেজির মতো ভবিষ্যৎ পরিকল্পনা থাকলেও se-এর পরে বর্তমান কালই সাধারণ।',
      en: 'Use se + present tense for real or likely conditions, paired with present (habit), future (plan), or imperative (instruction): Se hai tempo, andiamo al bar; Se pioverà/piove domani, prenderemo il bus; Se hai dubbi, chiedi!',
    },
    table: [['Se + pres. → pres.', 'Se studi bene, impari in fretta'], ['Se + pres. → futuro', 'Se trovo i biglietti, partiremo sabato'], ['Se + pres. → imperativo', 'Se fa freddo, metti la sciarpa!']],
  },
];

/**
 * Enrichment entries for ALL 32 existing entries in GRAMMAR_DETAILS_A2
 * so every existing topic gains additional authentic examples (reaching 4+ each)
 * and additional exercises (reaching 3 each).
 */
export const A2_EXISTING_DETAILS_BOOST: Record<
  string,
  { extraExamples: { it: string; tr: Tr }[]; extraExercises: QuizQuestion[] }
> = {
  'passato-prossimo': {
    extraExamples: [
      { it: 'Hai preparato la valigia per il viaggio di domani?', tr: { bn: 'কালকের ভ্রমণের জন্য কি সুটকেস গুছিয়েছো?', en: 'Did you pack your suitcase for tomorrow’s trip?' } },
      { it: 'Non ho capito bene l’orario dell’ufficio postale.', tr: { bn: 'ডাকঘরের সময়সূচি আমি ঠিক বুঝতে পারিনি।', en: 'I did not quite understand the post office opening hours.' } },
      { it: 'Ho già firmato e inviato il contratto via email.', tr: { bn: 'আমি ইতিমধ্যে ইমেইলের মাধ্যমে চুক্তিটি সই করে পাঠিয়েছি।', en: 'I have already signed and sent the contract by email.' } },
      { it: 'Ieri sera abbiamo cucinato la pasta con i funghi.', tr: { bn: 'গতকাল রাতে আমরা মাশরুম দিয়ে পাস্তা রান্না করেছি।', en: 'Last night we cooked pasta with mushrooms.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pp-2', prompt: { bn: 'সঠিক অতীত রূপ:', en: 'Choose the right past form:' }, it: 'Ieri sera noi ___ una pizza in centro.', options: ['abbiamo mangiato', 'siamo mangiati', 'abbiamo mangiati', 'avete mangiato'], answer: 0, explanation: { bn: 'mangiare avere নেয় এবং পার্টিসিপল -ato থাকে।', en: 'mangiare takes avere with invariable -ato.' } },
      { id: 'ex-a2-pp-3', prompt: { bn: 'তুমি কি পেয়েছো?', en: 'Have you received?' }, it: '___ già ricevuto il mio messaggio?', options: ['Sei', 'Hai', 'Ho', 'Ha'], answer: 1, explanation: { bn: 'tu সর্বনামে সঠিক রূপ → Hai ricevuto।', en: 'tu takes Hai ricevuto.' } },
    ],
  },
  'passato-essere': {
    extraExamples: [
      { it: 'Mia sorella è partita alle sette con il primo treno.', tr: { bn: 'আমার বোন সকাল সাতটায় প্রথম ট্রেনে রওনা হয়েছে।', en: 'My sister left at seven on the first train.' } },
      { it: 'Siete già stati al Museo Egizio di Torino?', tr: { bn: 'তোমরা কি আগে তুরিনের মিশরীয় জাদুঘরে গিয়েছো?', en: 'Have you already been to the Egyptian Museum in Turin?' } },
      { it: 'I miei amici sono arrivati in Italia tre mesi fa.', tr: { bn: 'আমার বন্ধুরা তিন মাস আগে ইতালিতে এসেছে।', en: 'My friends arrived in Italy three months ago.' } },
      { it: 'Noi ragazze siamo rimaste in biblioteca fino alle sette.', tr: { bn: 'আমরা মেয়েরা সাতটা পর্যন্ত লাইব্রেরিতে ছিলাম।', en: 'We girls stayed in the library until seven.' } },
      { it: 'Il treno regionale è arrivato in perfetto orario.', tr: { bn: 'আঞ্চলিক ট্রেনটি একদম সঠিক সময়ে পৌঁছেছে।', en: 'The regional train arrived right on time.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pe-2', prompt: { bn: 'স্ত্রীলিঙ্গ একবচন:', en: 'Feminine singular:' }, it: 'Chiara ___ tornata dall’università tardi.', options: ['ha', 'è', 'sono', 'siamo'], answer: 1, explanation: { bn: 'Chiara (স্ত্রী একবচন) → è tornata।', en: 'Chiara takes è tornata.' } },
      { id: 'ex-a2-pe-3', prompt: { bn: 'স্ত্রীলিঙ্গ বহুবচন:', en: 'Feminine plural:' }, it: 'Le ragazze sono ___ a casa verso le dieci.', options: ['uscito', 'uscita', 'usciti', 'uscite'], answer: 3, explanation: { bn: 'le ragazze (স্ত্রী বহুবচন) → uscite।', en: 'Feminine plural subject takes -e (uscite).' } },
    ],
  },
  riflessivi: {
    extraExamples: [
      { it: 'Ogni mattina mi lavo la faccia con l’acqua fredda.', tr: { bn: 'প্রতিদিন সকালে আমি ঠান্ডা পানি দিয়ে মুখ ধুই।', en: 'Every morning I wash my face with cold water.' } },
      { it: 'Domenica scorsa ci siamo riposati tutto il pomeriggio.', tr: { bn: 'গত রবিবার আমরা পুরো বিকেল বিশ্রাম নিয়েছি।', en: 'Last Sunday we rested all afternoon.' } },
      { it: 'A che ora vi siete alzati stamattina?', tr: { bn: 'আজ সকালে তোমরা কয়টায় ঘুম থেকে উঠেছো?', en: 'What time did you get up this morning?' } },
    ],
    extraExercises: [
      { id: 'ex-a2-rif-2', prompt: { bn: 'বহুবচন প্রতিফলক (আমরা):', en: 'Plural reflexive (noi):' }, it: 'Stamattina noi ___ svegliati alle sei.', options: ['ci abbiamo', 'ci siamo', 'si siamo', 'vi siete'], answer: 1, explanation: { bn: 'আমরা = ci siamo svegliati।', en: 'noi requires ci siamo + -i.' } },
      { id: 'ex-a2-rif-3', prompt: { bn: 'বর্তমান কাল (tu):', en: 'Present tense (tu):' }, it: 'Marco, a che ora ___ vesti di solito?', options: ['mi', 'si', 'ti', 'vi'], answer: 2, explanation: { bn: 'tu সর্বনামের সাথে ti বসে।', en: 'tu takes reflexive ti.' } },
    ],
  },
  imperfetto: {
    extraExamples: [
      { it: 'Da ragazza mia madre lavorava in una scuola elementare.', tr: { bn: 'তরুণ বয়সে আমার মা একটি প্রাথমিক বিদ্যালয়ে কাজ করতেন।', en: 'As a young woman my mother worked in a primary school.' } },
      { it: 'Alle cinque del mattino le strade erano ancora vuote.', tr: { bn: 'ভোর পাঁচটায় রাস্তাগুলো তখনো ফাঁকা ছিল।', en: 'At five in the morning the streets were still empty.' } },
      { it: 'Mentre tornavamo a casa, ascoltavamo sempre la radio.', tr: { bn: 'বাড়ি ফেরার সময় আমরা সবসময় রেডিও শুনতাম।', en: 'On the way home, we always listened to the radio.' } },
      { it: 'D’inverno in montagna faceva freddo e nevicava spesso.', tr: { bn: 'শীতকালে পাহাড়ে ঠান্ডা পড়ত এবং প্রায়ই তুষারপাত হতো।', en: 'In winter it was cold in the mountains and snowed often.' } },
      { it: 'Quando studiavo all’università prendevo sempre il tram.', tr: { bn: 'বিশ্ববিদ্যালয়ে পড়ার সময় আমি সবসময় ট্রামে যেতাম।', en: 'When I was at university I always took the tram.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-imp-2', prompt: { bn: 'অতীতের অভ্যাস (noi):', en: 'Past habit (noi):' }, it: 'Negli anni Novanta non ___ il cellulare.', options: ['avevamo', 'abbiamo avuto', 'avremo', 'ebbi'], answer: 0, explanation: { bn: 'দীর্ঘ অতীত অবস্থায় imperfetto (avevamo)।', en: 'Past ongoing state uses avevamo.' } },
      { id: 'ex-a2-imp-3', prompt: { bn: 'স্ত্রীলিঙ্গ/একবচন (lui/lei):', en: 'Imperfect 3rd singular:' }, it: 'Ogni giovedì Laura ___ al mercato con la nonna.', options: ['è andata', 'andava', 'andrà', 'va'], answer: 1, explanation: { bn: 'Ogni giovedì (অতীত অভ্যাস) → andava।', en: 'Repeated past routine uses andava.' } },
    ],
  },
  futuro: {
    extraExamples: [
      { it: 'Domattina parlerò con il responsabile dell’ufficio.', tr: { bn: 'কাল সকালে আমি অফিসের দায়িত্বপ্রাপ্ত কর্মকর্তার সাথে কথা বলব।', en: 'Tomorrow morning I will speak with the office manager.' } },
      { it: 'Fra tre settimane finirà finalmente questo corso intensivo.', tr: { bn: 'তিন সপ্তাহ পর অবশেষে এই নিবিড় কোর্সটি শেষ হবে।', en: 'In three weeks this intensive course will finally end.' } },
      { it: 'Secondo le previsioni, domenica pioverà tutto il giorno.', tr: { bn: 'আবহাওয়ার পূর্বাভাস অনুযায়ী, রবিবার সারাদিন বৃষ্টি হবে।', en: 'According to the forecast, it will rain all day Sunday.' } },
      { it: 'Tra qualche mese ci trasferiremo vicino alla stazione.', tr: { bn: 'কয়েক মাস পর আমরা স্টেশনের কাছাকাছি বাসা বদলাব।', en: 'In a few months we will move near the station.' } },
      { it: 'Appena avrò la risposta, ti chiamerò subito al telefono.', tr: { bn: 'উত্তর পাওয়া মাত্রই তোমাকে ফোনে কল দেব।', en: 'As soon as I have the answer, I will call you straight away.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-fut-2', prompt: { bn: 'অনিয়মিত ভবিষ্যৎ:', en: 'Irregular future:' }, it: 'L’anno prossimo voi ___ in un’altra città.', options: ['viverete', 'vivrete', 'vivete', 'avete vissuto'], answer: 1, explanation: { bn: 'ভবিষ্যৎ ধাতু: vivere → vivrò, vivrete।', en: 'vivere contracts to vivrete.' } },
      { id: 'ex-a2-fut-3', prompt: { bn: 'ভবিষ্যৎ অনুমান:', en: 'Future probability:' }, it: 'Non vedo la borsa di Paolo: dove ___?', options: ['sarà', 'è stata', 'era', 'fu'], answer: 0, explanation: { bn: 'অনুমান করতে sarà (কোথায় থাকতে পারে?)।', en: 'Probability uses sarà.' } },
    ],
  },
  'pronomi-diretti': {
    extraExamples: [
      { it: 'Cerchi il modulo blu? Lo trovi sul tavolo dell’ingresso.', tr: { bn: 'নীল ফর্মটা খুঁজছো? প্রবেশদ্বারের টেবিলে পাবে।', en: 'Looking for the blue form? You will find it on the entrance table.' } },
      { it: 'Questi pantaloni sono comodi, li compro subito!', tr: { bn: 'এই প্যান্টগুলো আরামদায়ক, এখনই কিনে নিচ্ছি!', en: 'These trousers are comfortable, I’m buying them right away!' } },
      { it: 'Puoi accompagnarci alla stazione verso le otto?', tr: { bn: 'আটটার দিকে আমাদের স্টেশনে পৌঁছে দিতে পারবে?', en: 'Can you walk us to the station around eight?' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pd-2', prompt: { bn: 'পুং একবচন সর্বনাম:', en: 'Masc. singular direct pronoun:' }, it: 'Quando prepari il caffè? ___ preparo adesso.', options: ['La', 'Lo', 'Li', 'Le'], answer: 1, explanation: { bn: 'il caffè (পুং একবচন) → Lo।', en: 'il caffè is masculine singular → Lo.' } },
      { id: 'ex-a2-pd-3', prompt: { bn: 'পুং বহুবচন সর্বনাম:', en: 'Masc. plural direct pronoun:' }, it: 'I documenti sono pronti: ___ porto domani.', options: ['lo', 'la', 'li', 'le'], answer: 2, explanation: { bn: 'i documenti (পুং বহুবচন) → li।', en: 'i documenti is masculine plural → li.' } },
    ],
  },
  'pronomi-indiretti': {
    extraExamples: [
      { it: 'Scusi signor Bianchi, posso farLe una domanda veloce?', tr: { bn: 'মাফ করবেন জনাব বিয়ানকি, আপনাকে কি একটি দ্রুত প্রশ্ন করতে পারি?', en: 'Excuse me Mr Bianchi, may I ask you a quick question?' } },
      { it: 'Marco cerca casa: gli diamo il numero dell’agenzia.', tr: { bn: 'মার্কো বাসা খুঁজছে: আমরা তাকে এজেন্সির নম্বর দিচ্ছি।', en: 'Marco is looking for a flat: we are giving him the agency’s number.' } },
      { it: 'Ci hanno inviato l’orario aggiornato per email.', tr: { bn: 'তারা আমাদের ইমেইলে হালনাগাদ সময়সূচি পাঠিয়েছে।', en: 'They sent us the updated timetable by email.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pi-2', prompt: { bn: 'তাকে (ছেলে) বলা:', en: 'Telling him:' }, it: 'Vedo Davide oggi e ___ spiego tutto.', options: ['lo', 'gli', 'la', 'ne'], answer: 1, explanation: { bn: 'spiegare a qualcuno (ছেলে) → gli।', en: 'to him = gli.' } },
      { id: 'ex-a2-pi-3', prompt: { bn: 'আনুষ্ঠানিক Lei:', en: 'Formal Lei:' }, it: 'Signora, ___ porto subito il menu.', options: ['Le', 'La', 'ti', 'ci'], answer: 0, explanation: { bn: 'আনুষ্ঠানিক "আপনাকে" = Le (বড় হাতের L)।', en: 'Formal "to you" = Le.' } },
    ],
  },
  comparativi: {
    extraExamples: [
      { it: 'Questo quartiere è meno caro ma più silenzioso del centro.', tr: { bn: 'এই পাড়াটা কেন্দ্রের চেয়ে কম দামি কিন্তু বেশি শান্ত।', en: 'This neighbourhood is less expensive yet quieter than the centre.' } },
      { it: 'Il treno ad alta velocità è più puntuale dell’autobus.', tr: { bn: 'হাই-স্পিড ট্রেন বাসের চেয়ে বেশি সময়নিষ্ঠ।', en: 'The high-speed train is more punctual than the bus.' } },
      { it: 'Studiare la sera è utile quanto studiare al mattino.', tr: { bn: 'সকালে পড়ার মতোই সন্ধ্যায় পড়াও উপকারী।', en: 'Studying in the evening is as useful as studying in the morning.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-cmp-2', prompt: { bn: 'দুটি ক্রিয়া তুলনা:', en: 'Comparing two actions:' }, it: 'È più facile leggere ___ scrivere in italiano.', options: ['di', 'che', 'del', 'come'], answer: 1, explanation: { bn: 'দুটি ইনফিনিটিভ ক্রিয়ার তুলনায় che বসে।', en: 'Comparisons between verbs use che.' } },
      { id: 'ex-a2-cmp-3', prompt: { bn: 'সমতা:', en: 'Equality:' }, it: 'La mia stanza è grande ___ la tua.', options: ['quanto', 'di', 'più', 'del'], answer: 0, explanation: { bn: 'সমান বোঝাতে quanto / come।', en: 'Equality uses quanto or come.' } },
    ],
  },
  gerundio: {
    extraExamples: [
      { it: 'Non disturbate, i ragazzi stanno facendo l’esame.', tr: { bn: 'বিরক্ত কোরো না, ছেলেমেয়েরা এখন পরীক্ষা দিচ্ছে।', en: 'Do not disturb, the students are taking the exam.' } },
      { it: 'Ieri alle cinque stavo aspettando il tram sotto la pioggia.', tr: { bn: 'গতকাল পাঁচটায় আমি বৃষ্টির মধ্যে ট্রামের জন্য অপেক্ষা করছিলাম।', en: 'Yesterday at five I was waiting for the tram in the rain.' } },
      { it: 'Cosa stai dicendo? Non riesco a sentirti bene!', tr: { bn: 'তুমি কী বলছো? আমি ঠিকমতো শুনতে পাচ্ছি না!', en: 'What are you saying? I cannot hear you well!' } },
    ],
    extraExercises: [
      { id: 'ex-a2-ger-2', prompt: { bn: 'অনিয়মিত জেরান্ড:', en: 'Irregular gerund:' }, it: 'In questo momento sto ___ un caffè al bar.', options: ['bevere', 'bevendo', 'bevuto', 'bevo'], answer: 1, explanation: { bn: 'অনিয়মিত জেরান্ড: bere → bevendo।', en: 'The gerund of bere is bevendo.' } },
      { id: 'ex-a2-ger-3', prompt: { bn: 'অতীতে চলমান:', en: 'Past continuous:' }, it: 'Mentre ___ dormendo, ha bussato il postino.', options: ['stavo', 'sono', 'faccio', 'sarò'], answer: 0, explanation: { bn: 'অতীত চলমান = imperfetto of stare (stavo)।', en: 'Past continuous uses stavo + gerund.' } },
    ],
  },
  'ci-ne': {
    extraExamples: [
      { it: 'Quanto tempo ci vuole per arrivare all’aeroporto?', tr: { bn: 'বিমানবন্দরে পৌঁছাতে কতক্ষণ সময় লাগে?', en: 'How long does it take to get to the airport?' } },
      { it: 'Hai bisogno di biglietti? Sì, ne devo comprare tre.', tr: { bn: 'তোমার কি টিকিট দরকার? হ্যাঁ, তিনটা কিনতে হবে।', en: 'Do you need tickets? Yes, I have to buy three.' } },
      { it: 'Domani c’è una mostra in centro: ci andiamo insieme?', tr: { bn: 'কাল শহরে একটি প্রদর্শনী আছে: আমরা কি একসাথে সেখানে যাব?', en: 'Tomorrow there is an exhibition downtown: shall we go there together?' } },
    ],
    extraExercises: [
      { id: 'ex-a2-cn-2', prompt: { bn: 'স্থানের বদলে:', en: 'Replacing a place:' }, it: 'Vieni anche tu in biblioteca? Sì, ___ vengo subito!', options: ['ne', 'ci', 'lo', 'le'], answer: 1, explanation: { bn: 'in biblioteca ("সেখানে") → ci।', en: 'A place phrase ("there") is replaced by ci.' } },
      { id: 'ex-a2-cn-3', prompt: { bn: 'কোনো বিষয়ে কথা বলা (di):', en: 'Speaking about it:' }, it: 'È un problema serio, ___ parliamo domani in riunione.', options: ['ci', 'lo', 'ne', 'li'], answer: 2, explanation: { bn: 'কোনো বিষয়ে বলা: parlare di qualcosa → ne।', en: 'di + topic is replaced by ne.' } },
    ],
  },
  'preposizioni-articolate': {
    extraExamples: [
      { it: 'Le chiavi della macchina sono sulla scrivania.', tr: { bn: 'গাড়ির চাবিগুলো ডেস্কের উপর আছে।', en: 'The car keys are on the desk.' } },
      { it: 'Ogni mattina scendo dal treno alla stazione centrale.', tr: { bn: 'প্রতিদিন সকালে আমি কেন্দ্রীয় স্টেশনে ট্রেন থেকে নামি।', en: 'Every morning I get off the train at the central station.' } },
      { it: 'Questo libro appartiene agli studenti del corso serale.', tr: { bn: 'এই বইটি সান্ধ্যকালীন কোর্সের শিক্ষার্থীদের।', en: 'This book belongs to the students of the evening course.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pa-2', prompt: { bn: 'যৌগিক রূপ: su + il = ?', en: 'Contract su + il:' }, it: 'Il pacco è ___ tavolo della cucina.', options: ['sul', 'su il', 'nel', 'al'], answer: 0, explanation: { bn: 'যৌগিক অব্যয়: su + il = sul।', en: 'su + il contracts to sul.' } },
      { id: 'ex-a2-pa-3', prompt: { bn: 'যৌগিক রূপ: da + l’ = ?', en: 'Contract da + l’:' }, it: 'Usciamo ___ ufficio alle diciotto.', options: ['dal', 'dall’', 'nell’', 'all’'], answer: 1, explanation: { bn: 'ufficio স্বরবর্ণ দিয়ে শুরু → dall’।', en: 'Before a vowel, da + l’ = dall’.' } },
    ],
  },
  imperativo: {
    extraExamples: [
      { it: 'Gira a destra al semaforo e poi prosegui dritto!', tr: { bn: 'সিগন্যালে ডানে ঘোরো এবং তারপর সোজা এগিয়ে যাও!', en: 'Turn right at the traffic light and then go straight!' } },
      { it: 'Dimmi la verità: che cosa è successo stamattina?', tr: { bn: 'আমাকে সত্যিটা বলো: আজ সকালে কী হয়েছে?', en: 'Tell me the truth: what happened this morning?' } },
      { it: 'Ascoltate bene le istruzioni prima di rispondere.', tr: { bn: 'উত্তর দেওয়ার আগে নির্দেশনাগুলো মনোযোগ দিয়ে শুনুন।', en: 'Listen carefully to the instructions before answering.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-im-2', prompt: { bn: 'tu -are আদেশ:', en: 'Informal tu imperative:' }, it: 'Paolo, ___ con attenzione questa ricevuta!', options: ['controlli', 'controlla', 'controllare', 'controllato'], answer: 1, explanation: { bn: 'তুমি (tu) -are ক্রিয়া → controlla!', en: 'tu -are imperative ends in -a.' } },
      { id: 'ex-a2-im-3', prompt: { bn: 'আনুষ্ঠানিক Lei আদেশ:', en: 'Formal Lei imperative:' }, it: 'Signora, ___ pure questa sedia!', options: ['prendi', 'prenda', 'prendete', 'prendere'], answer: 1, explanation: { bn: 'আনুষ্ঠানিক Lei -ere ক্রিয়ায় -a নেয় → prenda।', en: 'Formal Lei imperative for -ere takes -a.' } },
    ],
  },
  condizionale: {
    extraExamples: [
      { it: 'Potrebbe parlare un po’ più lentamente, per favore?', tr: { bn: 'দয়া করে কি একটু ধীরে কথা বলতে পারবেন?', en: 'Could you speak a little more slowly, please?' } },
      { it: 'Avrei bisogno di cambiare questo biglietto per domani.', tr: { bn: 'আগামীকালের জন্য আমার এই টিকিটটি বদলানো দরকার।', en: 'I would need to change this ticket for tomorrow.' } },
      { it: 'Secondo me dovresti accettare questa offerta di lavoro.', tr: { bn: 'আমার মতে তোমার এই চাকরির প্রস্তাবটা গ্রহণ করা উচিত।', en: 'In my view you should accept this job offer.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-con-2', prompt: { bn: 'ভদ্রভাবে চাওয়া:', en: 'Polite wish:' }, it: 'Buongiorno, ___ due biglietti per Firenze.', options: ['voglio', 'vorrei', 'volevo', 'vorrò'], answer: 1, explanation: { bn: 'ভদ্র অনুরোধে vorrei।', en: 'Polite request uses vorrei.' } },
      { id: 'ex-a2-con-3', prompt: { bn: 'আনুষ্ঠানিক প্রশ্ন:', en: 'Polite formal request:' }, it: 'Scusi dottore, ___ aiutarmi con questo modulo?', options: ['potresti', 'potrebbe', 'puoi', 'potrà'], answer: 1, explanation: { bn: 'দাক্তার/অপরিচিত = Lei → potrebbe।', en: 'Formal Lei takes potrebbe.' } },
    ],
  },
  possessivi: {
    extraExamples: [
      { it: 'Mia madre prepara sempre la pasta fresca la domenica.', tr: { bn: 'আমার মা প্রতি রবিবার তাজা পাস্তা তৈরি করেন।', en: 'My mother always makes fresh pasta on Sundays.' } },
      { it: 'Hai visto dove ho messo il mio cellulare?', tr: { bn: 'তুমি কি দেখেছো আমি আমার মোবাইলটা কোথায় রেখেছি?', en: 'Have you seen where I put my mobile phone?' } },
      { it: 'Il loro appartamento è luminoso e vicino alla metro.', tr: { bn: 'তাদের ফ্ল্যাটটি আলোকিত এবং মেট্রোর কাছাকাছি।', en: 'Their apartment is bright and near the metro.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pos-2', prompt: { bn: 'loro + পরিবার:', en: 'loro + singular family noun:' }, it: '___ zio abita in Svizzera da dieci anni.', options: ['Loro', 'Il loro', 'I loro', 'La loro'], answer: 1, explanation: { bn: 'loro সবসময় আর্টিকেলসহ বসে: Il loro zio।', en: 'loro always keeps the article even with singular family nouns.' } },
      { id: 'ex-a2-pos-3', prompt: { bn: 'একবচন বোন:', en: 'Singular sister:' }, it: 'Domani accompagno ___ sorella in stazione.', options: ['la mia', 'mia', 'mie', 'le mie'], answer: 1, explanation: { bn: 'একবচন ঘনিষ্ঠ আত্মীয়: আর্টিকেল ছাড়াই mia sorella।', en: 'Drop the article before unmodified singular sorella.' } },
    ],
  },
  tempo: {
    extraExamples: [
      { it: 'Mi sono trasferito a Bologna sei mesi fa.', tr: { bn: 'আমি ছয় মাস আগে বোলোনিয়ায় চলে এসেছি।', en: 'I moved to Bologna six months ago.' } },
      { it: 'Imparo l’italiano da quasi due anni e mi piace molto.', tr: { bn: 'আমি প্রায় দুই বছর ধরে ইতালিয়ান শিখছি এবং এটি আমার খুব ভালো লাগে।', en: 'I have been learning Italian for almost two years and love it.' } },
      { it: 'Ho aspettato il medico per quaranta minuti in sala d’attesa.', tr: { bn: 'আমি অপেক্ষাগারে চল্লিশ মিনিট ধরে ডাক্তারের জন্য অপেক্ষা করেছি।', en: 'I waited for the doctor for forty minutes in the waiting room.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-tmp-2', prompt: { bn: 'আগে (অতীত):', en: 'Ago (past):' }, it: 'Il corso è iniziato due settimane ___.', options: ['da', 'fra', 'fa', 'per'], answer: 2, explanation: { bn: 'নির্দিষ্ট সময় "আগে" বোঝাতে fa।', en: '"Two weeks ago" = due settimane fa.' } },
      { id: 'ex-a2-tmp-3', prompt: { bn: 'ভবিষ্যতে (পরে):', en: 'In (future time):' }, it: 'Il treno partirà ___ dieci minuti.', options: ['fra', 'fa', 'da', 'per'], answer: 0, explanation: { bn: '"১০ মিনিট পর" বোঝাতে fra/tra।', en: '"In 10 minutes" = fra/tra dieci minuti.' } },
    ],
  },
  connettivi: {
    extraExamples: [
      { it: 'Non sono uscito stamattina perché avevo la febbre alta.', tr: { bn: 'আমার প্রচণ্ড জ্বর ছিল বলে আজ সকালে বাইরে বের হইনি।', en: 'I did not go out this morning because I had a high fever.' } },
      { it: 'Anche se era tardi, siamo riusciti a trovare una farmacia aperta.', tr: { bn: 'দেরি হয়ে যাওয়া সত্ত্বেও আমরা একটি খোলা ফার্মেসি খুঁজে পেয়েছি।', en: 'Even though it was late, we managed to find an open pharmacy.' } },
      { it: 'Io preferisco il treno, invece mio fratello viaggia sempre in autobus.', tr: { bn: 'আমি ট্রেন পছন্দ করি, অন্যদিকে আমার ভাই সবসময় বাসে যাতায়াত করে।', en: 'I prefer the train, whereas my brother always travels by bus.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-cnn-2', prompt: { bn: 'কারণ জানানো:', en: 'Giving a reason:' }, it: 'Studio molto ___ voglio passare l’esame A2.', options: ['perché', 'quindi', 'però', 'mentre'], answer: 0, explanation: { bn: 'কারণ জানাতে perché।', en: 'Use perché to state a reason.' } },
      { id: 'ex-a2-cnn-3', prompt: { bn: 'বৈপরীত্য:', en: 'Contrast:' }, it: 'Il lavoro è faticoso, ___ è molto interessante.', options: ['perché', 'quindi', 'però', 'mentre'], answer: 2, explanation: { bn: 'বিপরীত দিক যোগ করতে però (তবে)।', en: 'Contrast takes però.' } },
    ],
  },
  'passato-irregolari': {
    extraExamples: [
      { it: 'Avete già visto il nuovo film italiano al cinema?', tr: { bn: 'তোমরা কি সিনেমা হলে নতুন ইতালিয়ান সিনেমাটা ইতিমধ্যে দেখেছো?', en: 'Have you already seen the new Italian film at the cinema?' } },
      { it: 'Ho chiesto informazioni allo sportello e mi hanno risposto subito.', tr: { bn: 'আমি কাউন্টারে তথ্য চেয়েছি এবং তারা সাথে সাথে উত্তর দিয়েছেন।', en: 'I asked for information at the desk and they answered straight away.' } },
      { it: 'Che cosa hai fatto ieri dopo la lezione?', tr: { bn: 'গতকাল ক্লাসের পর তুমি কী করেছো?', en: 'What did you do yesterday after class?' } },
    ],
    extraExercises: [
      { id: 'ex-a2-ppi-2', prompt: { bn: 'dire-এর পাস্ট পার্টিসিপল:', en: 'Past participle of dire:' }, it: 'Che cosa ha ___ il medico?', options: ['dicito', 'detto', 'diciuto', 'dito'], answer: 1, explanation: { bn: 'অনিয়মিত পার্টিসিপল: dire → detto।', en: 'dire → detto.' } },
      { id: 'ex-a2-ppi-3', prompt: { bn: 'aprire-এর পাস্ট পার্টিসিপল:', en: 'Past participle of aprire:' }, it: 'Ho ___ la finestra perché faceva caldo.', options: ['aprito', 'aperto', 'apriato', 'apreso'], answer: 1, explanation: { bn: 'অনিয়মিত পার্টিসিপল: aprire → aperto।', en: 'aprire → aperto.' } },
    ],
  },
  'accordo-participio': {
    extraExamples: [
      { it: 'La lettera della banca? L’ho letta attentamente ieri sera.', tr: { bn: 'ব্যাংকের চিঠিটা? গতকাল রাতে মন দিয়ে পড়েছি।', en: 'The bank letter? I read it carefully last night.' } },
      { it: 'I biglietti del concerto? Li abbiamo prenotati online.', tr: { bn: 'কনসার্টের টিকিটগুলো? আমরা অনলাইনে বুক করেছি।', en: 'The concert tickets? We booked them online.' } },
      { it: 'Queste fotografie sono bellissime! Chi le ha scattate?', tr: { bn: 'এই ছবিগুলো অসাধারণ! এগুলো কে তুলেছে?', en: 'These photos are wonderful! Who took them?' } },
    ],
    extraExercises: [
      { id: 'ex-a2-acc-2', prompt: { bn: 'স্ত্রী একবচন l’:', en: 'Agreement with l’ (la):' }, it: 'La tua borsa? L’ho ___ in macchina.', options: ['lasciato', 'lasciata', 'lasciati', 'lasciate'], answer: 1, explanation: { bn: 'la borsa (স্ত্রী একবচন) → L’ho lasciata।', en: 'Feminine singular direct pronoun requires -a.' } },
      { id: 'ex-a2-acc-3', prompt: { bn: 'স্ত্রী বহুবচন le:', en: 'Agreement with le:' }, it: 'Le scarpe nuove? Le ho ___ stamattina.', options: ['messo', 'messa', 'messi', 'messe'], answer: 3, explanation: { bn: 'স্ত্রী বহুবচন সর্বনাম: le scarpe → Le ho messe।', en: 'Feminine plural pronoun le takes -e.' } },
    ],
  },
  'imperfetto-vs-passato': {
    extraExamples: [
      { it: 'Dormivo profondamente quando è suonata la sveglia.', tr: { bn: 'আমি গভীর ঘুমে ছিলাম যখন অ্যালার্ম বেজে উঠল।', en: 'I was sleeping deeply when the alarm rang.' } },
      { it: 'Avevo molta fame, così ho comprato un panino caldo.', tr: { bn: 'আমার খুব খিদে পেয়েছিল, তাই একটা গরম স্যান্ডউইচ কিনেছি।', en: 'I was very hungry, so I bought a hot sandwich.' } },
      { it: 'Mentre cercavo le chiavi nella borsa, è arrivato l’autobus.', tr: { bn: 'আমি ব্যাগে চাবি খুঁজছিলাম, ঠিক তখনই বাস চলে এলো।', en: 'While I was looking for the keys in my bag, the bus arrived.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-ivp-2', prompt: { bn: 'হঠাৎ বাধা:', en: 'Interrupting event:' }, it: 'Mentre pranzavamo, il direttore ___ in ufficio.', options: ['entrava', 'è entrato', 'entrano', 'entrerà'], answer: 1, explanation: { bn: 'হঠাৎ ঘটা ঘটনা = passato prossimo (è entrato)।', en: 'A sudden completed interruption uses passato prossimo.' } },
      { id: 'ex-a2-ivp-3', prompt: { bn: 'পটভূমি বনাম ঘটনা:', en: 'Background + action:' }, it: '___ tardi e tutti i negozi erano chiusi, così siamo tornati a casa.', options: ['È stato', 'Era', 'Sarà', 'Fosse'], answer: 1, explanation: { bn: 'সময় ও পরিবেশের পটভূমি = Era।', en: 'Time background takes imperfetto (Era).' } },
    ],
  },
  'stare-per': {
    extraExamples: [
      { it: 'Sbrigati! Il treno sta per partire dal binario quattro.', tr: { bn: 'তাড়াতাড়ি করো! চার নম্বর প্ল্যাটফর্ম থেকে ট্রেন এইমাত্র ছাড়তে যাচ্ছে।', en: 'Hurry up! The train is about to leave from platform four.' } },
      { it: 'Stavo per chiudere il negozio quando è entrato un cliente.', tr: { bn: 'আমি দোকানটা বন্ধ করতে যাচ্ছিলাম, ঠিক তখনই একজন গ্রাহক ঢুকল।', en: 'I was about to close the shop when a customer came in.' } },
      { it: 'Non spegnere il computer, sto per salvare il documento!', tr: { bn: 'কম্পিউটার বন্ধ কোরো না, আমি ডকুমেন্টটা সেভ করতে যাচ্ছি!', en: 'Do not switch off the computer, I am about to save the file!' } },
    ],
    extraExercises: [
      { id: 'ex-a2-stp-2', prompt: { bn: 'অতীতে প্রায় করছিলাম:', en: 'Was about to:' }, it: 'Quando hai chiamato, ___ per uscire di casa.', options: ['sono', 'stavo', 'faccio', 'ero'], answer: 1, explanation: { bn: 'stavo per uscire = বের হতে যাচ্ছিলাম।', en: 'Was about to = imperfetto of stare (stavo) + per.' } },
      { id: 'ex-a2-stp-3', prompt: { bn: 'এখনই শুরু হচ্ছে:', en: 'About to start:' }, it: 'Sediamoci subito: il film sta ___ cominciare.', options: ['a', 'di', 'per', 'in'], answer: 2, explanation: { bn: 'আসন্ন কাজের গঠন: stare + per + infinito।', en: 'The structure is stare + per + infinitive.' } },
    ],
  },
  'pronomi-relativi-a2': {
    extraExamples: [
      { it: 'Il corso che seguo il martedì è molto pratico.', tr: { bn: 'মঙ্গলবারে আমি যে কোর্সটি করি তা খুবই বাস্তবমুখী।', en: 'The course that I take on Tuesdays is very practical.' } },
      { it: 'L’ospedale in cui lavoro si trova vicino al parco.', tr: { bn: 'আমি যে হাসপাতালে কাজ করি সেটি পার্কের কাছে।', en: 'The hospital where I work is near the park.' } },
      { it: 'Ecco l’amica di cui ti ho parlato ieri sera.', tr: { bn: 'এই সেই বান্ধবী যার কথা তোমাকে গতকাল রাতে বলেছিলাম।', en: 'Here is the friend I told you about last night.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pr-2', prompt: { bn: 'সঠিক সর্বনাম:', en: 'Pick the pronoun:' }, it: 'Questo è il treno ___ parte per Venezia.', options: ['che', 'cui', 'chi', 'quale'], answer: 0, explanation: { bn: 'অব্যয় ছাড়া কর্তা = che।', en: 'Subject relative pronoun without preposition is che.' } },
      { id: 'ex-a2-pr-3', prompt: { bn: 'অব্যয়ের পরে (con):', en: 'After preposition (con):' }, it: 'Il collega con ___ viaggio ogni giorno è molto simpatico.', options: ['che', 'cui', 'chi', 'dove'], answer: 1, explanation: { bn: 'অব্যয়ের পরে সর্বদা cui বসে।', en: 'Prepositions always take cui.' } },
    ],
  },
  'indefiniti-a2': {
    extraExamples: [
      { it: 'Ho mangiato qualcosa di leggero prima di prendere il treno.', tr: { bn: 'ট্রেন ধরার আগে আমি হালকা কিছু খেয়েছি।', en: 'I ate something light before catching the train.' } },
      { it: 'Qualcuno ha lasciato un ombrello vicino alla porta.', tr: { bn: 'কেউ একজন দরজার পাশে একটি ছাতা রেখে গেছে।', en: 'Someone left an umbrella near the door.' } },
      { it: 'Ogni mattina controllo le email prima della riunione.', tr: { bn: 'প্রতিদিন সকালে মিটিংয়ের আগে আমি ইমেইল দেখি।', en: 'Every morning I check emails before the meeting.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-ind-2', prompt: { bn: 'qualche-এর পর বচন:', en: 'Noun after qualche:' }, it: 'Ho bisogno di qualche ___ per capire la strada.', options: ['indicazioni', 'indicazione', 'indicazioni tue', 'indicato'], answer: 1, explanation: { bn: 'qualche-এর পর বিশেষ্য একবচন হয় (qualche indicazione)।', en: 'qualche takes a singular noun.' } },
      { id: 'ex-a2-ind-3', prompt: { bn: 'qualcosa + বিশেষণ:', en: 'qualcosa + adjective:' }, it: 'Vuoi bere qualcosa ___?', options: ['caldo', 'di caldo', 'calda', 'a caldo'], answer: 1, explanation: { bn: 'qualcosa + di + পুং একবচন বিশেষণ = qualcosa di caldo।', en: 'qualcosa takes di + masculine singular adjective.' } },
    ],
  },
  'avverbi-a2': {
    extraExamples: [
      { it: 'Spiega il problema chiaramente al medico di turno.', tr: { bn: 'দায়িত্বরত ডাক্তারকে সমস্যাটি স্পষ্টভাবে বুঝিয়ে বলো।', en: 'Explain the problem clearly to the doctor on duty.' } },
      { it: 'Questa linea di autobus funziona regolarmente anche la domenica.', tr: { bn: 'এই বাস রুটটি রবিবারও নিয়মিত চলে।', en: 'This bus line runs regularly even on Sundays.' } },
      { it: 'Di solito faccio la spesa il sabato mattina, quasi mai di sera.', tr: { bn: 'সাধারণত আমি শনিবার সকালে বাজার করি, সন্ধ্যায় প্রায় করি না বললেই চলে।', en: 'Usually I do the shopping on Saturday morning, almost never in the evening.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-av-2', prompt: { bn: 'facile থেকে ক্রিয়াবিশেষণ:', en: 'Adverb from facile:' }, it: 'Con la mappa troviamo la via ___.', options: ['facilemente', 'facilmente', 'facila', 'facili'], answer: 1, explanation: { bn: '-le-এর পর শেষের e বাদ যায়: facilmente।', en: 'Drop final -e after -l: facilmente.' } },
      { id: 'ex-a2-av-3', prompt: { bn: 'অনিয়মিত ক্রিয়াবিশেষণ:', en: 'Irregular adverb:' }, it: 'Hai guidato molto ___ nonostante la pioggia.', options: ['buono', 'bene', 'buonamente', 'migliore'], answer: 1, explanation: { bn: 'ক্রিয়াকে বিশেষিত করতে bene বসে।', en: 'The adverb corresponding to buono is bene.' } },
    ],
  },
  'preposizioni-verbi': {
    extraExamples: [
      { it: 'A settembre comincio a lavorare in un nuovo ristorante.', tr: { bn: 'সেপ্টেম্বরে আমি একটি নতুন রেস্তোরাঁয় কাজ করা শুরু করছি।', en: 'In September I am starting to work in a new restaurant.' } },
      { it: 'Spero di superare l’esame con un buon punteggio.', tr: { bn: 'আমি আশা করি ভালো নম্বর নিয়ে পরীক্ষায় উত্তীর্ণ হব।', en: 'I hope to pass the exam with a good score.' } },
      { it: 'Ho provato a chiamarti due volte ma era occupato.', tr: { bn: 'তোমাকে দুবার ফোন করার চেষ্টা করেছি কিন্তু ব্যস্ত ছিল।', en: 'I tried to call you twice, but the line was busy.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-pv-2', prompt: { bn: 'riuscire-এর সাথে অব্যয়:', en: 'riuscire + ?:' }, it: 'Non riesco ___ aprire questa bottiglia.', options: ['di', 'a', 'per', 'in'], answer: 1, explanation: { bn: 'riuscire সবসময় a নেয়: riuscire a + inf.।', en: 'riuscire always takes a + infinitive.' } },
      { id: 'ex-a2-pv-3', prompt: { bn: 'finire-এর সাথে অব্যয়:', en: 'finire + ?:' }, it: 'Quando finisci ___ studiare, usciamo insieme.', options: ['a', 'di', 'per', 'con'], answer: 1, explanation: { bn: 'সঠিক অব্যয়: finire di + infinitive।', en: 'finire takes di + infinitive.' } },
    ],
  },
  'verbi-pronominali-a2': {
    extraExamples: [
      { it: 'Dai, studia con calma: vedrai che ce la farai!', tr: { bn: 'সাহস রাখো, শান্তভাবে পড়ো: দেখবে তুমি পারবে!', en: 'Come on, study calmly: you’ll see that you’ll make it!' } },
      { it: 'Scusate, è molto tardi e me ne devo andare adesso.', tr: { bn: 'মাফ করবেন, অনেক দেরি হয়ে গেছে এবং আমাকে এখন চলে যেতে হবে।', en: 'Excuse me, it is very late and I have to leave now.' } },
      { it: 'Quanto tempo ci vuole in treno da Milano a Venezia?', tr: { bn: 'মিলান থেকে ভেনিস ট্রেনে যেতে কত সময় লাগে?', en: 'How long does it take by train from Milan to Venice?' } },
    ],
    extraExercises: [
      { id: 'ex-a2-vp-2', prompt: { bn: 'আমি আর পারছি না:', en: 'I can’t manage anymore:' }, it: 'Questa borsa è pesantissima, non ___ faccio più!', options: ['ci ne', 'ce la', 'me ne', 'se la'], answer: 1, explanation: { bn: 'প্রনোমিনাল ক্রিয়া: farcela → non ce la faccio।', en: 'farcela conjugates as ce la + fare.' } },
      { id: 'ex-a2-vp-3', prompt: { bn: 'একবচন সময় লাগা:', en: 'Singular time required:' }, it: '___ un’ora di autobus per arrivare al lago.', options: ['Ci vogliono', 'Ci vuole', 'Ce la vuole', 'Si vuole'], answer: 1, explanation: { bn: 'un’ora একবচন → Ci vuole।', en: 'Singular time takes Ci vuole.' } },
    ],
  },
  'numerali-ordinali': {
    extraExamples: [
      { it: 'Il nostro appartamento è al quarto piano senza ascensore.', tr: { bn: 'আমাদের ফ্ল্যাটটি লিফট ছাড়া পাঁচতলায় (ইতালিয়ান চতুর্থ তলা)।', en: 'Our apartment is on the fourth floor without a lift.' } },
      { it: 'Gira alla prima strada a sinistra dopo la farmacia.', tr: { bn: 'ফার্মেসির পর প্রথম রাস্তায় বামে ঘোরো।', en: 'Turn at the first street on the left after the pharmacy.' } },
      { it: 'Il dodicesimo capitolo del libro spiega il futuro semplice.', tr: { bn: 'বইটির দ্বাদশ অধ্যায় ভবিষ্যৎ কাল ব্যাখ্যা করে।', en: 'The twelfth chapter of the book explains the simple future.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-ord-2', prompt: { bn: '৫ম তলা:', en: '5th floor:' }, it: 'L’ufficio si trova al ___ piano.', options: ['cinque', 'quinto', 'quinta', 'cinquesimo'], answer: 1, explanation: { bn: '৫ম (পুং একবচন) = quinto।', en: '5th masculine singular = quinto.' } },
      { id: 'ex-a2-ord-3', prompt: { bn: '১ম তারিখ:', en: '1st of the month:' }, it: 'Il contratto parte dal ___ ottobre.', options: ['uno', 'primo', 'prima', 'unesimo'], answer: 1, explanation: { bn: 'মাসের ১ তারিখে primo বসে।', en: 'The 1st of any month uses primo.' } },
    ],
  },
  'comparativi-irregolari': {
    extraExamples: [
      { it: 'Questo ospedale offre un servizio migliore dell’altro.', tr: { bn: 'এই হাসপাতালটি অন্যটির চেয়ে ভালো সেবা দেয়।', en: 'This hospital offers a better service than the other one.' } },
      { it: 'Ho dormito otto ore e stamattina mi sento decisamente meglio.', tr: { bn: 'আমি আট ঘণ্টা ঘুমিয়েছি এবং আজ সকালে অনেক ভালো অনুভব করছি।', en: 'I slept eight hours and this morning I feel decidedly better.' } },
      { it: 'Il gelato di quella gelateria artigianale è ottimo!', tr: { bn: 'ঐ হস্তনির্মিত আইসক্রিমের দোকানের আইসক্রিম দারুণ!', en: 'The ice cream at that artisan gelateria is excellent!' } },
    ],
    extraExercises: [
      { id: 'ex-a2-cir-2', prompt: { bn: 'বিশেষ্যকে বিশেষিত করা:', en: 'Modifying a noun:' }, it: 'Abbiamo trovato una soluzione ___ per tutti.', options: ['meglio', 'migliore', 'peggio', 'benissimo'], answer: 1, explanation: { bn: 'una soluzione বিশেষ্যের সাথে migliore বসে।', en: 'Noun modification uses the adjective migliore.' } },
      { id: 'ex-a2-cir-3', prompt: { bn: 'সবচেয়ে খারাপ (ক্রিয়াবিশেষণ):', en: 'Worse adverb:' }, it: 'Oggi il traffico va ancora ___ di ieri.', options: ['peggiore', 'peggio', 'più male', 'cattivo'], answer: 1, explanation: { bn: 'andare ক্রিয়ার সাথে peggio (আরও খারাপভাবে)।', en: 'Modifying a verb uses peggio.' } },
    ],
  },
  'si-impersonale-a2': {
    extraExamples: [
      { it: 'In Italia si cena spesso intorno alle venti o ventuno.', tr: { bn: 'ইতালিতে প্রায়ই রাত আটটা বা নয়টার দিকে রাতের খাবার খাওয়া হয়।', en: 'In Italy people often have dinner around eight or nine p.m.' } },
      { it: 'Come si pronuncia questa parola difficile?', tr: { bn: 'এই কঠিন শব্দটি কীভাবে উচ্চারণ করা হয়?', en: 'How is this difficult word pronounced?' } },
      { it: 'In questa biglietteria si vendono anche abbonamenti mensili.', tr: { bn: 'এই টিকিট কাউন্টারে মাসিক পাসও বিক্রি করা হয়।', en: 'Monthly passes are also sold at this ticket office.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-si-2', prompt: { bn: 'সাধারণ অনুমতি:', en: 'General permission:' }, it: 'Scusi, ___ entrare con lo zaino?', options: ['si può', 'si possono', 'posso si', 'si puote'], answer: 0, explanation: { bn: 'ইনফিনিটিভের আগে একবচন si può।', en: 'With an infinitive use singular si può.' } },
      { id: 'ex-a2-si-3', prompt: { bn: 'বহুবচন বিশেষ্য:', en: 'Plural noun:' }, it: 'In questa regione ___ due lingue diverse.', options: ['si parla', 'si parlano', 'si parli', 'si parlare'], answer: 1, explanation: { bn: 'due lingue বহুবচন → si parlano।', en: 'Plural subject due lingue takes si parlano.' } },
    ],
  },
  'modali-passato': {
    extraExamples: [
      { it: 'Siamo dovuti correre per non perdere il traghetto.', tr: { bn: 'ফেরি মিস না করার জন্য আমাদের দৌড়াতে হয়েছিল।', en: 'We had to run so as not to miss the ferry.' } },
      { it: 'Ieri ho voluto provare la ricetta della pizza fatta in casa.', tr: { bn: 'গতকাল আমি ঘরে তৈরি পিজ্জার রেসিপি চেষ্টা করতে চেয়েছিলাম।', en: 'Yesterday I wanted to try the homemade pizza recipe.' } },
      { it: 'Le mie sorelle non sono potute venire alla festa per lavoro.', tr: { bn: 'কাজের কারণে আমার বোনেরা পার্টিতে আসতে পারেনি।', en: 'My sisters could not come to the party because of work.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-mp-2', prompt: { bn: 'andare (essere) সহ:', en: 'With essere verb:' }, it: 'Ieri Marco ___ dovuto tornare subito dal lavoro.', options: ['ha', 'è', 'siamo', 'aveva'], answer: 1, explanation: { bn: 'tornare essere নেয় → Marco è dovuto tornare।', en: 'tornare takes essere → è dovuto.' } },
      { id: 'ex-a2-mp-3', prompt: { bn: 'স্ত্রীলিঙ্গ বহুবচন + partire:', en: 'Feminine plural + partire:' }, it: 'Sara e Anna sono ___ partire prima del previsto.', options: ['dovuto', 'dovuta', 'dovuti', 'dovute'], answer: 3, explanation: { bn: 'স্ত্রী বহুবচন + essere → dovute।', en: 'Feminine plural agrees as dovute.' } },
    ],
  },
  'volere-piacere-cortesia': {
    extraExamples: [
      { it: 'Mi farebbe un gran favore controllando questo indirizzo?', tr: { bn: 'এই ঠিকানাটি যাচাই করে দিয়ে কি আমাকে একটি বড় উপকার করবেন?', en: 'Would you do me a big favour by checking this address?' } },
      { it: 'Vi va di fare una passeggiata dopo cena?', tr: { bn: 'রাতের খাবারের পর তোমাদের কি একটু হাঁটতে যেতে ইচ্ছে করছে?', en: 'Do you feel like going for a walk after dinner?' } },
      { it: 'Potrei pagare con la carta invece che in contanti?', tr: { bn: 'নগদের বদলে কি কার্ডে পেমেন্ট করতে পারি?', en: 'Could I pay by card instead of cash?' } },
    ],
    extraExercises: [
      { id: 'ex-a2-cor-2', prompt: { bn: 'ভদ্র অনুমতি:', en: 'Polite permission:' }, it: 'Scusi signora, ___ aprire un po’ la finestra?', options: ['Le dispiace se', 'Ti va di', 'Posso se', 'Le piace se'], answer: 0, explanation: { bn: 'আপত্তি আছে কি? = Le dispiace se…?', en: '"Do you mind if…?" = Le dispiace se…?' } },
      { id: 'ex-a2-cor-3', prompt: { bn: 'উপকার চাওয়া:', en: 'Asking a favour:' }, it: 'Mi ___ un favore urgente, per favore?', options: ['fa', 'farebbe', 'fai', 'fareste'], answer: 1, explanation: { bn: 'আনুষ্ঠানিক ভদ্র অনুরোধ = Mi farebbe un favore?', en: 'Polite Lei request uses farebbe.' } },
    ],
  },
  'verbi-servizio-a2': {
    extraExamples: [
      { it: 'Sai dov’è la fermata del tram numero quattordici?', tr: { bn: '১৪ নম্বর ট্রামের স্টপেজ কোথায় তা কি তুমি জানো?', en: 'Do you know where the number 14 tram stop is?' } },
      { it: 'Conosci già qualcuno nel tuo nuovo ufficio?', tr: { bn: 'তোমার নতুন অফিসে কি ইতিমধ্যে কাউকে চেনো?', en: 'Do you already know anyone in your new office?' } },
      { it: 'Non so cucinare piatti complicati, ma faccio ottimi sughi.', tr: { bn: 'আমি জটিল রান্না জানি না, তবে দারুণ সস তৈরি করতে পারি।', en: 'I don’t know how to cook complicated dishes, but I make great sauces.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-vs-2', prompt: { bn: 'দক্ষতা বা তথ্য জানা:', en: 'Knowing how to / facts:' }, it: 'Mio figlio ___ già nuotare molto bene.', options: ['conosce', 'sa', 'conoscono', 'sanno'], answer: 1, explanation: { bn: 'দক্ষতা (+ ইনফিনিটিভ) বোঝাতে sapere → sa।', en: 'Knowing how to (+ infinitive) takes sapere (sa).' } },
      { id: 'ex-a2-vs-3', prompt: { bn: 'মানুষকে চেনা:', en: 'Knowing a person:' }, it: '___ tua sorella? Sì, siamo colleghe!', options: ['Sai', 'Conosci', 'Sa', 'Sapete'], answer: 1, explanation: { bn: 'মানুষকে চেনা = conoscere (Conosci)।', en: 'Being acquainted with a person uses conoscere.' } },
    ],
  },
  'doppia-negazione': {
    extraExamples: [
      { it: 'Non c’è niente di urgente da firmare oggi.', tr: { bn: 'আজ সই করার মতো জরুরি কিছুই নেই।', en: 'There is nothing urgent to sign today.' } },
      { it: 'Nessuno sapeva che il treno aveva trenta minuti di ritardo.', tr: { bn: 'ট্রেন যে ত্রিশ মিনিট দেরিতে ছিল তা কেউ জানত না।', en: 'Nobody knew that the train was thirty minutes late.' } },
      { it: 'Non vado mai in centro in macchina perché non trovo mai parcheggio.', tr: { bn: 'আমি কখনো গাড়িতে শহরে যাই না কারণ পার্কিং পাই না।', en: 'I never drive downtown because I never find parking.' } },
    ],
    extraExercises: [
      { id: 'ex-a2-dn-2', prompt: { bn: 'বস্তু না-বাচক:', en: 'Negative object:' }, it: 'Ho cercato dappertutto, ma non trovo ___.', options: ['qualcosa', 'niente', 'nessuno', 'mai'], answer: 1, explanation: { bn: 'বস্তুর ক্ষেত্রে non … niente।', en: '"Nothing" after non + verb = niente.' } },
      { id: 'ex-a2-dn-3', prompt: { bn: 'বাক্যের শুরুতে কেউ না:', en: 'Pre-verbal nobody:' }, it: '___ ha aperto la porta quando ho suonato.', options: ['Non nessuno', 'Nessuno', 'Niente', 'Non niente'], answer: 1, explanation: { bn: 'বাক্যের শুরুতে nessuno বসলে non বসে না।', en: 'When nessuno opens the sentence before the verb, omit non.' } },
    ],
  },
};

/**
 * Complete GrammarDetailEntry records for all 42 NEW A2 grammar topics.
 */
export const A2_NEW_GRAMMAR_DETAILS: Record<string, GrammarDetailEntry> = {
  'pp-verbi-movimento-stato': {
    rule: {
      bn: 'গতি (arrivare, partire, entrare, uscire, tornare, salire, scendere) ও অবস্থান-অবস্থা পরিবর্তন (nascere, diventare, crescere, restare, rimanere) সবসময় essere নেয় এবং কর্তার লিঙ্গ-বচনের সাথে মেলে।',
      en: 'Motion verbs with a destination/origin and state-change verbs always take essere in compound tenses, agreeing in gender and number with the subject.',
    },
    exceptions: {
      bn: 'salire, scendere, cambiare যদি সরাসরি কর্ম নেয় ("সিঁড়ি চড়া" বা "টাকা বদলানো"), তখন avere নেয়: Ho salito le scale।',
      en: 'salire and scendere take avere when used with a direct object noun: Ho sceso le scale di corsa.',
    },
    commonMistakes: [
      { wrong: 'Le mie amiche hanno partite ieri.', right: 'Le mie amiche sono partite ieri.', note: { bn: 'partire গতির ক্রিয়া হওয়ায় essere নেয় ও -e হয়।', en: 'partire requires essere and plural agreement.' } },
    ],
    examples: [
      { it: 'Mia cugina è diventata medico l’anno scorso.', tr: { bn: 'আমার চাচাতো বোন গত বছর ডাক্তার হয়েছে।', en: 'My cousin became a doctor last year.' } },
      { it: 'Siamo saliti al quarto piano a piedi.', tr: { bn: 'আমরা হেঁটে চারতলায় উঠেছি।', en: 'We walked up to the fourth floor.' } },
      { it: 'I treni sono arrivati tutti in perfetto orario.', tr: { bn: 'সবগুলো ট্রেনই ঠিক সময়ে পৌঁছেছে।', en: 'All the trains arrived right on schedule.' } },
      { it: 'Marta è rimasta a casa tutto il fine settimana.', tr: { bn: 'মার্তা পুরো সপ্তাহান্তে বাসায় থেকেছে।', en: 'Marta stayed at home all weekend.' } },
    ],
    exercises: [
      { id: 'ex-a2-ms-1', prompt: { bn: 'সঠিক সহায়ক ও মিল:', en: 'Pick the auxiliary & agreement:' }, it: 'I miei colleghi ___ usciti dall’ufficio alle sei.', options: ['hanno', 'sono', 'è', 'avete'], answer: 1, explanation: { bn: 'uscire essere নেয়; i colleghi (বহুবচন) → sono usciti।', en: 'uscire takes essere with plural agreement.' } },
      { id: 'ex-a2-ms-2', prompt: { bn: 'rimanere-এর অতীত রূপ:', en: 'Past of rimanere:' }, it: 'Chiara è ___ in città per studiare.', options: ['rimasto', 'rimasta', 'rimasti', 'rimanuta'], answer: 1, explanation: { bn: 'Chiara (স্ত্রী একবচন) → è rimasta।', en: 'Irregular participle rimasto agrees as rimasta.' } },
    ],
    storyIds: ['st-a2-02', 'st-a2-09'],
    vocabKeys: ['w:A1:arrivare', 'w:A2:la partenza', 'w:A2:restare'],
  },
  'pp-verbi-attivita-avere': {
    rule: {
      bn: 'নির্দিষ্ট গন্তব্য না বুঝিয়ে শুধু কাজ বা শরীরচর্চা বোঝাতে camminare, passeggiare, viaggiare, ballare, nuotare, sciare, correre (অনেক সময়) avere নেয়।',
      en: 'In-place movement and sport/activity verbs without a stated destination (camminare, passeggiare, viaggiare, nuotare, ballare, sciare) take avere.',
    },
    commonMistakes: [
      { wrong: 'Siamo camminati per due ore nel parco.', right: 'Abbiamo camminato per due ore nel parco.', note: { bn: 'camminare গন্তব্যহীন হাঁটা, তাই avere নেয়।', en: 'camminare uses avere, not essere.' } },
    ],
    examples: [
      { it: 'Abbiamo camminato lungo il fiume per tutto il pomeriggio.', tr: { bn: 'আমরা পুরো বিকেল নদীর ধার দিয়ে হেঁটেছি।', en: 'We walked along the river all afternoon.' } },
      { it: 'Da giovani i miei genitori hanno viaggiato molto in Europa.', tr: { bn: 'তরুণ বয়সে আমার বাবা-মা ইউরোপে অনেক ভ্রমণ করেছেন।', en: 'When young, my parents travelled a lot in Europe.' } },
      { it: 'Ieri sera abbiamo ballato fino a mezzanotte.', tr: { bn: 'গতকাল রাতে আমরা মধ্যরাত পর্যন্ত নেচেছি।', en: 'Last night we danced until midnight.' } },
      { it: 'Ho nuotato mezz’ora in piscina prima di andare al lavoro.', tr: { bn: 'কাজে যাওয়ার আগে আমি সুইমিং পুলে আধঘণ্টা সাঁতার কেটেছি।', en: 'I swam for half an hour in the pool before going to work.' } },
    ],
    exercises: [
      { id: 'ex-a2-act-1', prompt: { bn: 'সঠিক সহায়ক:', en: 'Choose the auxiliary:' }, it: 'Domenica scorsa ___ passeggiato in centro.', options: ['siamo', 'abbiamo', 'eravamo', 'avremo'], answer: 1, explanation: { bn: 'হাঁটাহাঁটি করা: passeggiare = avere সহায়ক।', en: 'passeggiare always takes avere.' } },
      { id: 'ex-a2-act-2', prompt: { bn: 'ভ্রমণ করা:', en: 'Travelling:' }, it: 'L’estate scorsa Luca ___ viaggiato in treno.', options: ['è', 'ha', 'stato', 'era'], answer: 1, explanation: { bn: 'viaggiare কার্যকলাপ বোঝায় → ha viaggiato।', en: 'viaggiare takes avere.' } },
    ],
    storyIds: ['st-a2-01', 'st-a2-10'],
    vocabKeys: ['w:A2:camminare', 'w:A2:viaggiare', 'w:A2:nuotare'],
  },
  'pp-verbi-atmosferici-cambiamento': {
    rule: {
      bn: 'piovere ও nevicare-তে è piovuto / ha piovuto দুটোই শুদ্ধ। আর cominciare, finire, cambiare-এ কর্ম থাকলে avere (Ho cominciato la lezione), কর্ম না থাকলে essere (La lezione è cominciata) বসে।',
      en: 'Weather verbs allow both essere and avere (È piovuto / Ha piovuto). Dual-use verbs like cominciare, finire, and cambiare take avere + object, and essere when intransitive.',
    },
    commonMistakes: [
      { wrong: 'La riunione ha finita alle cinque.', right: 'La riunione è finita alle cinque.', note: { bn: 'এখানে কর্ম নেই (মিটিং নিজে শেষ হয়েছে), তাই è finita।', en: 'No direct object → use essere + agreement (è finita).' } },
    ],
    examples: [
      { it: 'La lezione di italiano è cominciata in perfetto orario.', tr: { bn: 'ইতালিয়ান ক্লাস ঠিক সময়ে শুরু হয়েছে।', en: 'The Italian class started right on time.' } },
      { it: 'Ho cominciato a studiare il capitolo nuovo stamattina.', tr: { bn: 'আজ সকালে আমি নতুন অধ্যায় পড়া শুরু করেছি।', en: 'I started studying the new chapter this morning.' } },
      { it: 'Durante la notte è nevicato molto sulle montagne.', tr: { bn: 'রাতে পাহাড়গুলোতে প্রচুর তুষারপাত হয়েছে।', en: 'During the night it snowed heavily in the mountains.' } },
      { it: 'Il tempo è cambiato subito dopo pranzo.', tr: { bn: 'দুপুরের খাবারের পরপরই আবহাওয়া বদলে গেছে।', en: 'The weather changed right after lunch.' } },
    ],
    exercises: [
      { id: 'ex-a2-atm-1', prompt: { bn: 'কর্ম ছাড়া সমাপ্তি:', en: 'Without direct object:' }, it: 'Il film ___ finito alle undici di sera.', options: ['ha', 'è', 'hanno', 'sono'], answer: 1, explanation: { bn: 'il film নিজেই শেষ হয়েছে (কর্ম নেই) → è finito।', en: 'Intransitive finire takes essere.' } },
      { id: 'ex-a2-atm-2', prompt: { bn: 'কর্ম সহ সমাপ্তি:', en: 'With direct object:' }, it: 'Finalmente Giulia ___ finito il suo lavoro.', options: ['è', 'ha', 'sono', 'siamo'], answer: 1, explanation: { bn: 'il suo lavoro কর্ম আছে → ha finito।', en: 'Transitive finire with an object takes avere.' } },
    ],
    storyIds: ['st-a2-21'],
    vocabKeys: ['w:A2:piovere', 'w:A2:il temporale', 'w:A2:cambiare'],
  },
  'pp-essere-piacere-sembrare': {
    rule: {
      bn: 'piacere, bastare, sembrare, succedere, mancare, costare অতীতে essere নেয় এবং পার্টিসিপল আসল কর্তার (পছন্দের বস্তু বা ঘটা ঘটনার) সাথে লিঙ্গ-বচনে মেলে।',
      en: 'Verbs like piacere, bastare, sembrare, succedere, mancare, and costare take essere in compound tenses, agreeing with the grammatical subject.',
    },
    commonMistakes: [
      { wrong: 'La cena mi ha piaciuto molto.', right: 'La cena mi è piaciuta molto.', note: { bn: 'piacere সবসময় essere নেয় ও la cena-এর সাথে piaciuta হয়।', en: 'piacere always uses essere and agrees with la cena.' } },
    ],
    examples: [
      { it: 'Ti è piaciuta la mostra d’arte moderna?', tr: { bn: 'আধুনিক শিল্প প্রদর্শনীটি কি তোমার ভালো লেগেছে?', en: 'Did you like the modern art exhibition?' } },
      { it: 'I biglietti ci sono costati trenta euro in tutto.', tr: { bn: 'টিকিটগুলোর দাম সব মিলিয়ে আমাদের ত্রিশ ইউরো পড়েছে।', en: 'The tickets cost us thirty euros in total.' } },
      { it: 'Che cosa è successo in stazione stamattina?', tr: { bn: 'আজ সকালে স্টেশনে কী ঘটেছে?', en: 'What happened at the station this morning?' } },
      { it: 'Venticinque euro non sono bastati per tutta la spesa.', tr: { bn: 'পুরো বাজারের জন্য পঁচিশ ইউরো যথেষ্ট হয়নি।', en: 'Twenty-five euros was not enough for all the groceries.' } },
    ],
    exercises: [
      { id: 'ex-a2-ps-1', prompt: { bn: 'ভালো লেগেছে:', en: 'Liked plural items:' }, it: 'Le lasagne della nonna mi ___ piaciute tantissimo!', options: ['hanno', 'sono', 'è', 'ho'], answer: 1, explanation: { bn: 'le lasagne স্ত্রী বহুবচন → sono piaciute।', en: 'Plural subject requires sono piaciute.' } },
      { id: 'ex-a2-ps-2', prompt: { bn: 'কী ঘটেছে?:', en: 'What happened?:' }, it: 'Scusa, non ho sentito: che cosa ___?', options: ['ha successo', 'è successo', 'è succeduto', 'ha succeduto'], answer: 1, explanation: { bn: 'ঘটা বোঝাতে: succedere → è successo।', en: 'succedere uses essere + successo.' } },
    ],
    storyIds: ['st-a2-08', 'st-a2-27'],
    vocabKeys: ['w:A2:succedere', 'w:A2:la mostra', 'w:A1:il biglietto'],
  },
  'pp-negazione-avverbi': {
    rule: {
      bn: 'অতীত কালের না-বাচক শব্দ non সহায়ক ক্রিয়ার আগে বসে (Non sono uscito)। কিন্তু già, appena, sempre, ancora, mai, più সাধারণত সহায়ক ও পার্টিসিপলের মাঝখানে বসে।',
      en: 'Place non before the auxiliary verb. Adverbs of frequency and timing (già, appena, mai, sempre, ancora, più) go between the auxiliary and the past participle.',
    },
    commonMistakes: [
      { wrong: 'Ho finito già la lettera.', right: 'Ho già finito la lettera.', note: { bn: 'già সাধারণত সহায়ক ও পার্টিসিপলের মাঝে বসে।', en: 'Place già between ho and finito.' } },
    ],
    examples: [
      { it: 'Il treno è appena partito dal binario tre.', tr: { bn: 'ট্রেনটি এইমাত্র তিন নম্বর প্ল্যাটফর্ম থেকে ছেড়ে গেছে।', en: 'The train has just departed from platform three.' } },
      { it: 'Non ho ancora ricevuto la conferma della prenotazione.', tr: { bn: 'আমি এখনো বুকিংয়ের নিশ্চিতকরণ পাইনি।', en: 'I have not received the booking confirmation yet.' } },
      { it: 'Non siamo mai stati in Sicilia prima d’ora.', tr: { bn: 'আমরা এর আগে কখনো সিসিলিতে যাইনি।', en: 'We have never been to Sicily before.' } },
      { it: 'Anna ha già spedito tutti i documenti richiesti.', tr: { bn: 'আন্না ইতিমধ্যে প্রয়োজনীয় সব কাগজপত্র পাঠিয়ে দিয়েছে।', en: 'Anna has already sent all the requested documents.' } },
    ],
    exercises: [
      { id: 'ex-a2-pna-1', prompt: { bn: 'সঠিক শব্দক্রম:', en: 'Pick natural word order:' }, it: '___ arrivato a casa cinque minuti fa.', options: ['Appena sono', 'Sono appena', 'Sono arrivato appena', 'Ho appena'], answer: 1, explanation: { bn: 'ব্যাকরণগত গঠন: এখানে «Sono + appena + arrivato» কাঠামোটি অনুসরণ করা হয়েছে।', en: 'Place appena between sono and arrivato.' } },
      { id: 'ex-a2-pna-2', prompt: { bn: 'কখনো করিনি:', en: 'Never done:' }, it: 'Io ___ guidato una macchina elettrica.', options: ['non ho mai', 'mai non ho', 'ho non mai', 'non sono mai'], answer: 0, explanation: { bn: 'সঠিক শব্দক্রম: non ho mai + participle।', en: 'non + auxiliary + mai + participle.' } },
    ],
    storyIds: ['st-a2-07', 'st-a2-17'],
    vocabKeys: ['w:A2:appena', 'w:A2:già', 'w:A2:ancora'],
  },
  'pp-irregolari-sto-rto': {
    rule: {
      bn: 'অনিয়মিত পার্টিসিপল: chiedere→chiesto, rispondere→risposto, vedere→visto, rimanere→rimasto; aprire→aperto, offrire→offerto, coprire→coperto; scegliere→scelto, spegnere→spento, vincere→vinto।',
      en: 'Memorize by ending family: -sto (chiesto, risposto, visto, rimasto), -rto (aperto, offerto, coperto, scoperto), -lto (scelto, tolto), -nto (spento, vinto).',
    },
    commonMistakes: [
      { wrong: 'Ho rispostato alla tua domanda.', right: 'Ho risposto alla tua domanda.', note: { bn: 'সঠিক পার্টিসিপল: rispondere → risposto।', en: 'rispondere has irregular participle risposto.' } },
    ],
    examples: [
      { it: 'Marco ci ha offerto un caffè dopo il colloquio.', tr: { bn: 'সাক্ষাৎকারের পর মার্কো আমাদের কফি খাইয়েছে।', en: 'Marco bought us a coffee after the interview.' } },
      { it: 'Quale vestito hai scelto per la cerimonia?', tr: { bn: 'অনুষ্ঠানের জন্য কোন পোশাকটা বেছে নিয়েছো?', en: 'Which outfit did you choose for the ceremony?' } },
      { it: 'La nostra squadra ha vinto la partita due a zero.', tr: { bn: 'আমাদের দল দুই-শূন্য গোলে ম্যাচ জিতেছে।', en: 'Our team won the match two-nil.' } },
      { it: 'Hai spento tutte le luci prima di uscire di casa?', tr: { bn: 'বাসা থেকে বের হওয়ার আগে সব বাতি নিভিয়েছো কি?', en: 'Did you turn off all the lights before leaving home?' } },
    ],
    exercises: [
      { id: 'ex-a2-sr-1', prompt: { bn: 'scegliere-এর পার্টিসিপল:', en: 'Participle of scegliere:' }, it: 'Abbiamo ___ il tavolo vicino alla finestra.', options: ['sceglito', 'scelto', 'scelso', 'sceliuto'], answer: 1, explanation: { bn: 'সঠিক পার্টিসিপল: scegliere → scelto।', en: 'scegliere → scelto.' } },
      { id: 'ex-a2-sr-2', prompt: { bn: 'chiedere-এর পার্টিসিপল:', en: 'Participle of chiedere:' }, it: 'Ho ___ uno sconto al commesso.', options: ['chieduto', 'chieso', 'chiesto', 'chiedito'], answer: 2, explanation: { bn: 'সঠিক পার্টিসিপল: chiedere → chiesto।', en: 'chiedere → chiesto.' } },
    ],
    storyIds: ['st-a2-19', 'st-a2-29'],
    vocabKeys: ['w:A2:scegliere', 'w:A2:spegnere', 'w:A2:chiedere'],
  },
  'pp-irregolari-doppie-s': {
    rule: {
      bn: '-so এবং -sso অনিয়মিত দল: prendere→preso, spendere→speso, decidere→deciso, chiudere→chiuso, accendere→acceso, perdere→perso; mettere→messo, promettere→promesso, succedere→successo।',
      en: '-so / -sso family: prendere→preso, spendere→speso, decidere→deciso, chiudere→chiuso, accendere→acceso, perdere→perso, mettere→messo, promettere→promesso.',
    },
    commonMistakes: [
      { wrong: 'Ho mettuto il passaporto nello zaino.', right: 'Ho messo il passaporto nello zaino.', note: { bn: 'সঠিক পার্টিসিপল: mettere → messo।', en: 'mettere uses messo.' } },
    ],
    examples: [
      { it: 'Ho acceso il riscaldamento perché faceva troppo freddo.', tr: { bn: 'খুব ঠান্ডা ছিল বলে আমি হিটিং চালু করেছি।', en: 'I turned on the heating because it was too cold.' } },
      { it: 'Abbiamo speso meno del previsto per la spesa settimanale.', tr: { bn: 'সাপ্তাহিক বাজারে আমাদের ধারণার চেয়ে কম খরচ হয়েছে।', en: 'We spent less than expected on weekly groceries.' } },
      { it: 'Luca ha perso l’ombrello sul treno regionale.', tr: { bn: 'লুকা লোকাল ট্রেনে তার ছাতা হারিয়ে ফেলেছে।', en: 'Luca lost his umbrella on the regional train.' } },
      { it: 'Ieri sera abbiamo chiuso presto l’ufficio.', tr: { bn: 'গতকাল সন্ধ্যায় আমরা তাড়াতাড়ি অফিস বন্ধ করেছি।', en: 'Last night we closed the office early.' } },
    ],
    exercises: [
      { id: 'ex-a2-ds-1', prompt: { bn: 'spendere-এর পার্টিসিপল:', en: 'Participle of spendere:' }, it: 'Quanto avete ___ per il biglietto aereo?', options: ['spenduto', 'speso', 'spesso', 'spendo'], answer: 1, explanation: { bn: 'সঠিক পার্টিসিপল: spendere → speso।', en: 'spendere → speso.' } },
      { id: 'ex-a2-ds-2', prompt: { bn: 'accendere-এর পার্টিসিপল:', en: 'Participle of accendere:' }, it: 'Hai ___ il computer per controllare la mail?', options: ['accenduto', 'acceso', 'accesso', 'acciso'], answer: 1, explanation: { bn: 'সঠিক পার্টিসিপল: accendere → acceso।', en: 'accendere → acceso.' } },
    ],
    storyIds: ['st-a2-19', 'st-a2-31'],
    vocabKeys: ['w:A2:accendere', 'w:A2:spendere', 'w:A2:perdere'],
  },
  'accordo-participio-ne': {
    rule: {
      bn: 'যখন ne দ্বারা নির্দিষ্ট সংখ্যা বা অংশ বোঝানো হয়, তখন পাস্ট পার্টিসিপল সেই উহ্য বিশেষ্যের লিঙ্গ-বচন অনুযায়ী বদলায় (-o/-a/-i/-e)।',
      en: 'When ne replaces a quantified noun, the past participle agrees in gender and number with the noun represented by ne.',
    },
    commonMistakes: [
      { wrong: 'Quante fragole hai mangiato? Ne ho mangiato dieci.', right: 'Quante fragole hai mangiato? Ne ho mangiate dieci.', note: { bn: 'le fragole স্ত্রী বহুবচন → mangiate।', en: 'ne referring to plural fragole triggers mangiate.' } },
    ],
    examples: [
      { it: 'Quanti panini hai comprato? Ne ho comprati quattro.', tr: { bn: 'কয়টি স্যান্ডউইচ কিনেছো? চারটি কিনেছি।', en: 'How many sandwiches did you buy? I bought four.' } },
      { it: 'Quante pagine hai già letto? Ne ho lette trenta.', tr: { bn: 'কয় পাতা ইতিমধ্যে পড়েছো? ত্রিশ পাতা পড়েছি।', en: 'How many pages have you already read? I read thirty.' } },
      { it: 'Di queste bottiglie d’acqua, ne abbiamo bevute solo due.', tr: { bn: 'এই পানির বোতলগুলোর মধ্যে আমরা মাত্র দুটি পান করেছি।', en: 'Of these water bottles, we have drunk only two.' } },
      { it: 'Quanti caffè hai preso oggi? Ne ho preso uno solo.', tr: { bn: 'আজ কয় কাপ কফি খেয়েছো? মাত্র এক কাপ খেয়েছি।', en: 'How many coffees did you have today? I had just one.' } },
    ],
    exercises: [
      { id: 'ex-a2-ane-1', prompt: { bn: 'ne-এর সাথে মিল:', en: 'Agreement with ne:' }, it: 'Quante email hai inviato oggi? Ne ho ___ cinque.', options: ['inviato', 'inviata', 'inviati', 'inviate'], answer: 3, explanation: { bn: 'le email স্ত্রী বহুবচন → inviate।', en: 'le email is feminine plural → inviate.' } },
      { id: 'ex-a2-ane-2', prompt: { bn: 'পুং বহুবচন ne:', en: 'Masc. plural ne:' }, it: 'Quanti biglietti hai preso? Ne ho ___ tre.', options: ['preso', 'presa', 'presi', 'prese'], answer: 2, explanation: { bn: 'i biglietti পুং বহুবচন → presi।', en: 'i biglietti is masculine plural → presi.' } },
    ],
    storyIds: ['st-a2-12', 'st-a2-20'],
    vocabKeys: ['w:A1:il biglietto', 'w:A2:il giornale'],
  },
  'imperfetto-essere-fare-bere-dire': {
    rule: {
      bn: 'অনিয়মিত imperfetto: essere (ero, eri, era, eravamo, eravate, erano), fare (facevo, facevi...), dire (dicevo...), bere (bevevo...), tradurre (traducevo...)। প্রত্যয় সবার ক্ষেত্রে একই।',
      en: 'Only essere (ero..erano) and a small set of Latin-stem verbs (facevo, dicevo, bevevo, traducevo) are irregular in the imperfetto.',
    },
    commonMistakes: [
      { wrong: 'Ieri fcevo i compiti (fare → favo).', right: 'Ieri facevo i compiti.', note: { bn: 'fare-এর imperfetto ধাতু fac- → facevo।', en: 'fare uses the stem facev-.' } },
    ],
    examples: [
      { it: 'Da bambino mio fratello beveva sempre il latte caldo la sera.', tr: { bn: 'ছোটবেলায় আমার ভাই প্রতিদিন রাতে গরম দুধ খেত।', en: 'As a child my brother always drank warm milk in the evening.' } },
      { it: 'La nostra insegnante diceva sempre di parlare con calma.', tr: { bn: 'আমাদের শিক্ষিকা সবসময় শান্তভাবে কথা বলতে বলতেন।', en: 'Our teacher always told us to speak calmly.' } },
      { it: 'Eravamo molto contenti del nostro primo lavoro estivo.', tr: { bn: 'আমাদের প্রথম গ্রীষ্মকালীন কাজ নিয়ে আমরা খুব খুশি ছিলাম।', en: 'We were very happy with our first summer job.' } },
      { it: 'Ogni sabato mia nonna faceva una torta alle mele.', tr: { bn: 'প্রতি শনিবার আমার দাদি একটি আপেল কেক বানাতেন।', en: 'Every Saturday my grandmother used to bake an apple cake.' } },
    ],
    exercises: [
      { id: 'ex-a2-ief-1', prompt: { bn: 'fare-এর অসম্পূর্ণ অতীত:', en: 'Imperfetto of fare:' }, it: 'Da piccoli ___ molti disegni a scuola.', options: ['favamo', 'facevamo', 'farevamo', 'fummo'], answer: 1, explanation: { bn: 'সঠিক অসম্পূর্ণ অতীত রূপ: noi facevamo।', en: 'The stem is facev- → facevamo.' } },
      { id: 'ex-a2-ief-2', prompt: { bn: 'dire-এর অসম্পূর্ণ অতীত:', en: 'Imperfetto of dire:' }, it: 'Mio padre ___ sempre la stessa frase.', options: ['diva', 'diceva', 'direva', 'disse'], answer: 1, explanation: { bn: 'অনিয়মিত ধাতু: dire → dicevo, diceva।', en: 'dire uses stem dicev-.' } },
    ],
    storyIds: ['st-a2-04'],
    vocabKeys: ['w:A2:la torta', 'w:A1:la nonna'],
  },
  'imperfetto-descrizioni-eta-meteo': {
    rule: {
      bn: 'অতীতে বয়স (Avevo dieci anni), ঘড়ির সময় (Erano le cinque), আবহাওয়া (Pioveva / C’era il sole) ও মানসিক-শারীরিক অবস্থা বর্ণনায় সবসময় imperfetto ব্যবহার হয়।',
      en: 'Describing past age, clock time, weather, scenery, and physical/mental states requires the imperfetto.',
    },
    commonMistakes: [
      { wrong: 'Quando ho avuto dieci anni, ho vissuto a Pisa.', right: 'Quando avevo dieci anni, vivevo a Pisa.', note: { bn: 'বয়স ও থাকা পটভূমি হওয়ায় imperfetto লাগে।', en: 'Past age and ongoing residence take imperfetto.' } },
    ],
    examples: [
      { it: 'Quando è iniziato il concerto, erano già le nove.', tr: { bn: 'কনসার্ট শুরু হওয়ার সময় রাত নয়টা বেজে গিয়েছিল।', en: 'When the concert started, it was already nine o’clock.' } },
      { it: 'Avevo sedici anni quando ho visitato Venezia per la prima volta.', tr: { bn: 'প্রথমবার ভেনিস দেখার সময় আমার বয়স ছিল ষোলো বছর।', en: 'I was sixteen when I visited Venice for the first time.' } },
      { it: 'La mattina c’era molta nebbia lungo tutta l’autostrada.', tr: { bn: 'সকালে পুরো হাইওয়ে জুড়ে ঘন কুয়াশা ছিল।', en: 'In the morning there was thick fog all along the motorway.' } },
      { it: 'Ero davvero esausto dopo dieci ore di viaggio.', tr: { bn: 'দশ ঘণ্টা ভ্রমণের পর আমি সত্যিই ভীষণ ক্লান্ত ছিলাম।', en: 'I was really exhausted after ten hours of travel.' } },
    ],
    exercises: [
      { id: 'ex-a2-iem-1', prompt: { bn: 'বয়স বর্ণনা:', en: 'Describing past age:' }, it: 'Quando ___ otto anni, ho imparato a nuotare.', options: ['ho avuto', 'avevo', 'avrò', 'ebbi'], answer: 1, explanation: { bn: 'অতীতের বয়স = avevo।', en: 'Past age always uses avevo.' } },
      { id: 'ex-a2-iem-2', prompt: { bn: 'আবহাওয়া বর্ণনা:', en: 'Describing weather:' }, it: 'Non siamo usciti perché ___ freddo e tirava vento.', options: ['ha fatto', 'faceva', 'farà', 'faccia'], answer: 1, explanation: { bn: 'অতীতের আবহাওয়া = faceva freddo।', en: 'Past weather background uses imperfetto.' } },
    ],
    storyIds: ['st-a2-21'],
    vocabKeys: ['w:A2:la nebbia', 'w:A2:preoccupato'],
  },
  'imperfetto-abitudini-ripetute': {
    rule: {
      bn: 'অতীতের পুনরাবৃত্ত অভ্যাস বা রুটিন বোঝাতে ogni estate, di solito, sempre, tutti i giovedì-এর সাথে imperfetto বসে।',
      en: 'Repeated habits across an open period in the past take imperfetto, especially with ogni giorno, di solito, sempre, and tutti i sabati.',
    },
    commonMistakes: [
      { wrong: 'Da bambino ogni giorno ho preso l’autobus per la scuola.', right: 'Da bambino ogni giorno prendevo l’autobus per la scuola.', note: { bn: 'প্রতিদিন ঘটা অতীত অভ্যাস = imperfetto।', en: 'Repeated past habits take imperfetto.' } },
    ],
    examples: [
      { it: 'Quando studiavo all’università, andavo in biblioteca tutti i giorni.', tr: { bn: 'বিশ্ববিদ্যালয়ে পড়ার সময় আমি প্রতিদিন লাইব্রেরিতে যেতাম।', en: 'When I was at university, I went to the library every day.' } },
      { it: 'Di solito mio zio ci portava un dolce ogni domenica.', tr: { bn: 'সাধারণত আমার চাচা প্রতি রবিবার আমাদের জন্য মিষ্টি আনতেন।', en: 'Usually my uncle brought us a pastry every Sunday.' } },
      { it: 'Prima di cambiare lavoro, pranzavo sempre alle tredici.', tr: { bn: 'চাকরি বদলানোর আগে আমি সবসময় একটায় দুপুরের খাবার খেতাম।', en: 'Before changing jobs, I always had lunch at 1 p.m.' } },
      { it: 'In estate i negozi del centro chiudevano per tre ore al pomeriggio.', tr: { bn: 'গ্রীষ্মে কেন্দ্রের দোকানগুলো বিকেলে তিন ঘণ্টা বন্ধ থাকত।', en: 'In summer downtown shops closed for three hours in the afternoon.' } },
    ],
    exercises: [
      { id: 'ex-a2-iar-1', prompt: { bn: 'নিয়মিত অভ্যাস:', en: 'Repeated routine:' }, it: 'Ogni sabato mattina i miei nonni ___ al mercato rionale.', options: ['sono andati', 'andavano', 'andranno', 'vanno'], answer: 1, explanation: { bn: 'Ogni sabato (অতীত রুটিন) → andavano।', en: 'Repeated past Saturdays take andavano.' } },
      { id: 'ex-a2-iar-2', prompt: { bn: 'অতীতে রুটিন:', en: 'Past routine:' }, it: 'Cinque anni fa ___ sempre il treno regionale delle sette.', options: ['ho preso', 'prendevo', 'prenderò', 'presi'], answer: 1, explanation: { bn: 'sempre দ্বারা বারবার ঘটা অভ্যাস বোঝায় → prendevo।', en: 'sempre in the past triggers imperfetto.' } },
    ],
    storyIds: ['st-a2-04'],
    vocabKeys: ['w:A1:il mercato', 'w:A2:di solito'],
  },
  'imperfetto-azioni-simultanee': {
    rule: {
      bn: 'অতীতে দুটি কাজ একই সাথে চলমান থাকলে mentre-এর সাথে দুটি বাক্যাংশেই imperfetto বসে।',
      en: 'When two ongoing past actions take place simultaneously, both verbs take the imperfetto after mentre.',
    },
    commonMistakes: [
      { wrong: 'Mentre ho letto il giornale, Maria preparava il tè.', right: 'Mentre leggevo il giornale, Maria preparava il tè.', note: { bn: 'দুটিই চলমান কাজ হওয়ায় mentre-এর অংশে leggevo বসবে।', en: 'Two parallel ongoing actions require imperfetto in both clauses.' } },
    ],
    examples: [
      { it: 'Mentre io lavavo i piatti, Luca apparecchiava la tavola.', tr: { bn: 'আমি যখন থালাবাসন ধুচ্ছিলাম, লুকা তখন টেবিল সাজাচ্ছিল।', en: 'While I was washing the dishes, Luca was setting the table.' } },
      { it: 'Mentre l’insegnante spiegava la regola, tutti prendevano appunti.', tr: { bn: 'শিক্ষিকা যখন নিয়মটা বোঝাচ্ছিলেন, সবাই নোট নিচ্ছিল।', en: 'While the teacher was explaining the rule, everyone was taking notes.' } },
      { it: 'Mentre viaggiavamo verso Napoli, ammiravamo il paesaggio dal finestrino.', tr: { bn: 'আমরা যখন নেপলসের দিকে যাচ্ছিলাম, জানালার বাইরে দৃশ্য উপভোগ করছিলাম।', en: 'While travelling towards Naples, we admired the view from the window.' } },
      { it: 'Ascoltavo un podcast italiano mentre correvo al parco.', tr: { bn: 'পার্কে দৌড়ানোর সময় আমি একটি ইতালিয়ান পডকাস্ট শুনছিলাম।', en: 'I listened to an Italian podcast while jogging in the park.' } },
    ],
    exercises: [
      { id: 'ex-a2-ias-1', prompt: { bn: 'সমান্তরাল চলমান কাজ:', en: 'Simultaneous past actions:' }, it: 'Mentre Marco cucinava, Sara ___ la spesa.', options: ['ha sistemato', 'sistemava', 'sistemerà', 'sistema'], answer: 1, explanation: { bn: 'একই সময়ে চলা দুটি কাজ = উভয়ই imperfetto।', en: 'Simultaneous ongoing activity uses sistemava.' } },
      { id: 'ex-a2-ias-2', prompt: { bn: 'mentre-এর পর:', en: 'After mentre:' }, it: '___ aspettavamo l’autobus, guardavamo le vetrine.', options: ['Mentre', 'Dopo', 'Appena', 'All’improvviso'], answer: 0, explanation: { bn: 'চলমান সমান্তরাল সময়ে Mentre বসে।', en: 'Use Mentre for parallel ongoing actions.' } },
    ],
    storyIds: ['st-a2-18', 'st-a2-21'],
    vocabKeys: ['w:A2:mentre', 'w:A2:lavarsi'],
  },
  'passato-vs-imperfetto-contrasti': {
    rule: {
      bn: 'sapere, conoscere, volere, potere ক্রিয়ার অর্থ কালভেদে বদলায়: imperfetto = আগে থেকেই অবস্থা ছিল; passato prossimo = সেই মুহূর্তে জানা/পরিচিত হওয়া/সিদ্ধান্ত বা ফলাফল ঘটা।',
      en: 'Stative verbs change nuance between imperfetto and passato prossimo: sapevo (knew) vs ho saputo (learned/found out); conoscevo (knew) vs ho conosciuto (met).',
    },
    commonMistakes: [
      { wrong: 'Ho conosciuto Giulia già da cinque anni nel 2020.', right: 'Conoscevo Giulia già da cinque anni nel 2020.', note: { bn: 'আগে থেকেই পরিচিত থাকা বোঝাতে conoscevo লাগে।', en: 'Already knowing someone uses imperfetto (conoscevo).' } },
    ],
    examples: [
      { it: 'Ho conosciuto il mio migliore amico durante il primo giorno di corso.', tr: { bn: 'কোর্সের প্রথম দিনেই আমার সবচেয়ে ভালো বন্ধুর সাথে পরিচয় হয়েছিল।', en: 'I met my best friend on the first day of the course.' } },
      { it: 'Conoscevo già bene il quartiere perché ci abitavo da piccolo.', tr: { bn: 'আমি পাড়াটা আগে থেকেই ভালো চিনতাম কারণ ছোটবেলায় ওখানে থাকতাম।', en: 'I already knew the neighbourhood well because I lived there as a child.' } },
      { it: 'Ieri mattina ho saputo che l’ufficio resta aperto anche il sabato.', tr: { bn: 'গতকাল সকালে জানতে পারলাম অফিস শনিবারও খোলা থাকে।', en: 'Yesterday morning I found out the office stays open on Saturdays too.' } },
      { it: 'Volevo prendere il treno delle otto, ma non ho potuto comprare il biglietto in tempo.', tr: { bn: 'আমি আটটার ট্রেন ধরতে চেয়েছিলাম, কিন্তু সময়মতো টিকিট কিনতে পারিনি।', en: 'I wanted to catch the eight o’clock train, but could not buy the ticket in time.' } },
    ],
    exercises: [
      { id: 'ex-a2-pvc-1', prompt: { bn: 'প্রথম পরিচয়:', en: 'Meeting for the first time:' }, it: 'Dove hai ___ tua moglie?', options: ['conoscevi', 'conosciuto', 'saputo', 'sapevi'], answer: 1, explanation: { bn: 'প্রথম দেখা/পরিচয় = ho conosciuto।', en: 'Meeting someone uses passato prossimo: conosciuto.' } },
      { id: 'ex-a2-pvc-2', prompt: { bn: 'খবরটি জানা:', en: 'Finding out news:' }, it: 'Come hai ___ questa bella notizia?', options: ['sapevi', 'saputo', 'conosciuto', 'conoscevi'], answer: 1, explanation: { bn: 'সংবাদ "জানতে পারা" = ho saputo।', en: 'Finding out news uses ho saputo.' } },
    ],
    storyIds: ['st-a2-08', 'st-a2-27'],
    vocabKeys: ['w:A2:conoscere', 'w:A2:la notizia'],
  },
  'futuro-variazioni-care-gare': {
    rule: {
      bn: 'ভবিষ্যৎ কালে -care/-gare ক্রিয়ার e-এর আগে h বসে (cercherò, pagherò)। আর -ciare/-giare ক্রিয়ায় অপ্রয়োজনীয় i বাদ যায় (mangerò, comincerò, viaggerò)।',
      en: 'Keep the hard sound in -care/-gare futures by adding h (cercherò, pagherò). Drop redundant i in -ciare/-giare futures (comincerò, mangerò, viaggerò).',
    },
    commonMistakes: [
      { wrong: 'Domani cercerò un lavoro migliore.', right: 'Domani cercherò un lavoro migliore.', note: { bn: 'k ধ্বনি রাখতে h লাগবে: cercherò।', en: 'Add h after c to preserve the hard k sound.' } },
    ],
    examples: [
      { it: 'Tra poco pagheremo il conto alla cassa.', tr: { bn: 'কিছুক্ষণের মধ্যেই আমরা ক্যাশে বিল পরিশোধ করব।', en: 'In a moment we will pay the bill at the till.' } },
      { it: 'L’insegnante spiegherà il congiuntivo la settimana prossima.', tr: { bn: 'শিক্ষক আগামী সপ্তাহে কনজুনতিভো বোঝাবেন।', en: 'The teacher will explain the subjunctive next week.' } },
      { it: 'Comincerò il tirocinio lunedì mattina alle nove.', tr: { bn: 'আমি সোমবার সকাল নয়টায় ইন্টার্নশিপ শুরু করব।', en: 'I will start the internship Monday morning at nine.' } },
      { it: 'Non dimenticherò mai il mio primo giorno a Roma.', tr: { bn: 'রোমে আমার প্রথম দিনের কথা কখনো ভুলব না।', en: 'I will never forget my first day in Rome.' } },
    ],
    exercises: [
      { id: 'ex-a2-fcg-1', prompt: { bn: 'pagare ভবিষ্যৎ রূপ:', en: 'Future of pagare:' }, it: 'Stasera ___ io la cena per tutti.', options: ['pagerò', 'pagherò', 'pagarò', 'pagherò io a'], answer: 1, explanation: { bn: 'ভবিষ্যৎ বানান: pagare → pagherò।', en: 'pagare inserts h: pagherò.' } },
      { id: 'ex-a2-fcg-2', prompt: { bn: 'viaggiare ভবিষ্যৎ রূপ:', en: 'Future of viaggiare:' }, it: 'Ad agosto ___ in treno attraverso il Nord Italia.', options: ['viaggieremo', 'viaggeremo', 'viaggiaremo', 'viaggiò'], answer: 1, explanation: { bn: '-giare-এ i বাদ যায় → viaggeremo।', en: 'viaggiare drops i: viaggeremo.' } },
    ],
    storyIds: ['st-a2-06'],
    vocabKeys: ['w:A1:pagare', 'w:A2:spiegare', 'w:A2:cominciare'],
  },
  'futuro-irregolari-radice': {
    rule: {
      bn: 'অনিয়মিত ভবিষ্যৎ রূপ — স্বর লোপ: sarò, avrò, andrò, farò, vedrò, potrò, dovrò, saprò, vivrò; দ্বিত্ব r (-rr-): verrò, vorrò, rimarrò, terrò।',
      en: 'Learn two irregular stem patterns: contracted vowels (sarò, avrò, andrò, vedrò, potrò, dovrò, saprò) and doubled -rr- stems (verrò, vorrò, rimarrò, terrò).',
    },
    commonMistakes: [
      { wrong: 'Quando venirai a trovarci?', right: 'Quando verrai a trovarci?', note: { bn: 'venire-এর ভবিষ্যৎ ধাতু verr- → verrai।', en: 'venire has the irregular stem verr- (verrai).' } },
    ],
    examples: [
      { it: 'I miei cugini verranno a trovarci il mese prossimo.', tr: { bn: 'আমার কাজিনরা আগামী মাসে আমাদের সাথে দেখা করতে আসবে।', en: 'My cousins will come to visit us next month.' } },
      { it: 'Domani dovrò alzarmi alle sei per prendere il primo treno.', tr: { bn: 'প্রথম ট্রেন ধরতে কাল আমাকে ছয়টায় উঠতে হবে।', en: 'Tomorrow I will have to get up at six to catch the first train.' } },
      { it: 'Rimarremo a Firenze per tre giorni prima di tornare a casa.', tr: { bn: 'বাড়ি ফেরার আগে আমরা ফ্লোরেন্সে তিন দিন থাকব।', en: 'We will stay in Florence for three days before returning home.' } },
      { it: 'Presto sapremo i risultati dell’esame finale.', tr: { bn: 'শীঘ্রই আমরা চূড়ান্ত পরীক্ষার ফলাফল জানতে পারব।', en: 'Soon we will know the final exam results.' } },
    ],
    exercises: [
      { id: 'ex-a2-fir-1', prompt: { bn: 'venire ভবিষ্যৎ (noi):', en: 'Future of venire (noi):' }, it: 'Sabato ___ anche noi alla festa!', options: ['veniremo', 'verremo', 'veneremo', 'veniamo'], answer: 1, explanation: { bn: 'অনিয়মিত ভবিষ্যৎ: venire → verremo।', en: 'venire uses stem verr- → verremo.' } },
      { id: 'ex-a2-fir-2', prompt: { bn: 'dovere ভবিষ্যৎ (tu):', en: 'Future of dovere (tu):' }, it: 'Per aprire il conto ___ portare il passaporto.', options: ['doverai', 'dovrai', 'dovresti', 'devi'], answer: 1, explanation: { bn: 'সংক্ষিপ্ত ধাতু: dovere → dovrai।', en: 'dovere contracts to dovrai.' } },
    ],
    storyIds: ['st-a2-06'],
    vocabKeys: ['w:A2:restare', 'w:A2:il voto'],
  },
  'futuro-piani-promesse': {
    rule: {
      bn: 'ভবিষ্যতের প্রকল্প, প্রতিশ্রুতি ও আসন্ন অনুষ্ঠানের কথা বলতে futuro semplice সবচেয়ে স্পষ্ট ও প্রাকৃতিক।',
      en: 'Use futuro semplice to state upcoming plans, schedules, promises, and medium/long-term goals clearly.',
    },
    commonMistakes: [
      { wrong: 'Tra un anno voglio aprire un negozio (unmarked).', right: 'Tra un anno aprirò un negozio.', note: { bn: 'নির্দিষ্ট ভবিষ্যৎ পরিকল্পনায় সরাসরি ভবিষ্যৎ রূপ বেশি স্পষ্ট।', en: 'Direct future forms sound natural for stated plans.' } },
    ],
    examples: [
      { it: 'Tra due mesi ci trasferiremo in un appartamento più luminoso.', tr: { bn: 'দুই মাস পর আমরা আরও আলোকিত একটি ফ্ল্যাটে উঠে যাব।', en: 'In two months we will move into a brighter apartment.' } },
      { it: 'Ti prometto che leggerò tutta la relazione prima di venerdì.', tr: { bn: 'আমি কথা দিচ্ছি শুক্রবারের আগে পুরো প্রতিবেদনটি পড়ব।', en: 'I promise you I will read the whole report before Friday.' } },
      { it: 'Quando finirai l’università quest’anno?', tr: { bn: 'তুমি এ বছর কবে বিশ্ববিদ্যালয় শেষ করবে?', en: 'When will you finish university this year?' } },
      { it: 'L’estate prossima faremo un giro in treno in Toscana.', tr: { bn: 'আগামী গ্রীষ্মে আমরা ট্রেনে তুসকানি ঘুরে দেখব।', en: 'Next summer we will do a train tour in Tuscany.' } },
    ],
    exercises: [
      { id: 'ex-a2-fpp-1', prompt: { bn: 'প্রতিশ্রুতি প্রকাশ:', en: 'Making a promise:' }, it: 'Non preoccuparti, ti ___ appena arrivo in hotel.', options: ['chiamavo', 'chiamerò', 'ho chiamato', 'chiamai'], answer: 1, explanation: { bn: 'প্রতিশ্রুতিতে ভবিষ্যৎ রূপ (chiamerò) স্বাভাবিক।', en: 'Promises take the futuro semplice.' } },
      { id: 'ex-a2-fpp-2', prompt: { bn: 'ভবিষ্যৎ পরিকল্পনা:', en: 'Future plan:' }, it: 'Nel 2027 Marco ___ il suo esame di laurea.', options: ['sosteneva', 'sosterrà', 'ha sostenuto', 'sostiene'], answer: 1, explanation: { bn: 'ভবিষ্যতের সালের জন্য sosterrà।', en: 'Future year requires future tense sosterrà.' } },
    ],
    storyIds: ['st-a2-06'],
    vocabKeys: ['w:A2:augurare', 'w:A2:traslocare'],
  },
  'futuro-ipotesi-probabilita': {
    rule: {
      bn: 'কোনো বর্তমান পরিস্থিতি অনুমান করতে ("সম্ভবত … হবে") futuro semplice ব্যবহার হয় — একে futuro epistemico বলা হয়।',
      en: 'Express present-time probability or reasonable guesses using the futuro semplice ("must be / probably is").',
    },
    commonMistakes: [
      { wrong: 'È stato forse a casa (for past guesses without evidence).', right: 'Sarà a casa adesso (or Avrà molto lavoro).', note: { bn: 'বর্তমান অনুমানে সরাসরি sarà / avrà বসে।', en: 'Use future tense directly for present-time supposition.' } },
    ],
    examples: [
      { it: 'Non risponde al telefono: sarà ancora in riunione.', tr: { bn: 'সে ফোন ধরছে না: হয়তো এখনো মিটিংয়ে আছে।', en: 'He isn’t answering the phone: he must still be in a meeting.' } },
      { it: 'Quanti anni ha il nuovo direttore? Avrà circa quarant’anni.', tr: { bn: 'নতুন পরিচালকের বয়স কত? সম্ভবত চল্লিশের মতো হবে।', en: 'How old is the new manager? He must be around forty.' } },
      { it: 'Bussa qualcuno alla porta: chi sarà a quest’ora?', tr: { bn: 'দরজায় কেউ নক করছে: এই সময়ে কে হতে পারে?', en: 'Someone is knocking at the door: who could that be at this hour?' } },
      { it: 'La valigia pesa tanto: ci saranno almeno venti chili di libri!', tr: { bn: 'সুটকেসটা বেশ ভারী: ভেতরে কমপক্ষে বিশ কেজি বই আছে মনে হয়!', en: 'The suitcase is heavy: there must be at least twenty kilos of books inside!' } },
    ],
    exercises: [
      { id: 'ex-a2-fip-1', prompt: { bn: 'সম্ভাব্য বয়স অনুমান:', en: 'Guessing age:' }, it: 'Quella studentessa sembra giovane: ___ ventidue anni.', options: ['ha avuto', 'avrà', 'aveva', 'abbia'], answer: 1, explanation: { bn: 'অনুমান করতে ভবিষ্যৎ রূপ avrà।', en: 'Present probability uses avrà.' } },
      { id: 'ex-a2-fip-2', prompt: { bn: 'অনুমান করা:', en: 'Guessing cause:' }, it: 'Laura è molto pallida: ___ la febbre.', options: ['aveva', 'avrà', 'ebbe', 'avrà avuto'], answer: 1, explanation: { bn: 'এখনকার অনুমান = avrà।', en: 'Present guess takes simple future avrà.' } },
    ],
    storyIds: ['st-a2-06'],
    vocabKeys: ['w:A2:forse', 'w:A2:la riunione'],
  },
  'espressioni-tempo-passato': {
    rule: {
      bn: 'নির্দিষ্ট এককালীন অতীত চিহ্ন (ieri, l’altro ieri, ieri sera, una settimana fa, il mese scorso) → passato prossimo; অভ্যাসবাচক অতীত চিহ্ন (ogni volta, sempre, da piccolo, a quei tempi) → imperfetto।',
      en: 'Point-in-time past markers take passato prossimo (ieri, l’altro ieri, due anni fa, il mese scorso), while habitual frames (sempre, da bambino, ogni sera) take imperfetto.',
    },
    commonMistakes: [
      { wrong: 'La settimana scorsa andavo sempre a Roma una volta.', right: 'La settimana scorsa sono andato a Roma.', note: { bn: 'la settimana scorsa নির্দিষ্ট সময়, তাই sono andato।', en: 'la settimana scorsa is a closed time frame → passato prossimo.' } },
    ],
    examples: [
      { it: 'L’altro ieri ho consegnato i documenti in segreteria.', tr: { bn: 'পরশু আমি সেক্রেটারি অফিসে কাগজপত্র জমা দিয়েছি।', en: 'The day before yesterday I handed the documents in to the office.' } },
      { it: 'Ai tempi della scuola giocavamo a pallavolo ogni venerdì.', tr: { bn: 'স্কুলের দিনগুলোতে আমরা প্রতি শুক্রবার ভলিবল খেলতাম।', en: 'Back in school days we used to play volleyball every Friday.' } },
      { it: 'Due anni fa mio fratello ha aperto una piccola libreria.', tr: { bn: 'দুই বছর আগে আমার ভাই একটি ছোট বইয়ের দোকান খুলেছে।', en: 'Two years ago my brother opened a small bookshop.' } },
      { it: 'Durante quell’inverno nevicava quasi tutte le settimane.', tr: { bn: 'সেই শীতকালে প্রায় প্রতি সপ্তাহেই তুষারপাত হতো।', en: 'During that winter it snowed almost every week.' } },
    ],
    exercises: [
      { id: 'ex-a2-etp-1', prompt: { bn: 'গত মাসে নির্দিষ্ট ঘটনা:', en: 'Last month event:' }, it: 'Il mese scorso ___ un corso di cucina italiana.', options: ['ho iniziato', 'iniziavo', 'inizierò', 'inizio'], answer: 0, explanation: { bn: 'il mese scorso একটি নির্দিষ্ট অতীত → ho iniziato।', en: 'Closed time marker → passato prossimo.' } },
      { id: 'ex-a2-etp-2', prompt: { bn: 'সেই সময়ে অভ্যাস:', en: 'Past habit marker:' }, it: 'A quei tempi non ___ internet a casa.', options: ['abbiamo avuto', 'avevamo', 'avremo', 'avemmo'], answer: 1, explanation: { bn: 'A quei tempi (দীর্ঘ অবস্থা) → avevamo।', en: 'Open past period → imperfetto.' } },
    ],
    storyIds: ['st-a2-17'],
    vocabKeys: ["w:A2:l'altro ieri", 'w:A2:fa'],
  },
  'espressioni-tempo-futuro': {
    rule: {
      bn: 'ভবিষ্যৎ সময় নির্দেশক: domani, dopodomani, la prossima settimana, tra/fra + সময় ("কত সময় পরে"), entro + তারিখ ("নির্দিষ্ট তারিখের মধ্যে"), presto।',
      en: 'Future time markers: domani, dopodomani (day after tomorrow), tra/fra + duration (in X time), prossimo/a (next), entro + deadline (by).',
    },
    commonMistakes: [
      { wrong: 'Partiamo dopo due giorni (to mean "two days from now").', right: 'Partiamo fra due giorni (or tra due giorni).', note: { bn: '"এখন থেকে ২ দিন পর" বলতে fra/tra বসে, dopo নয়।', en: 'Counted from now, "in two days" is fra/tra due giorni.' } },
    ],
    examples: [
      { it: 'Dopodomani andrò in banca per ritirare la nuova carta.', tr: { bn: 'পরশু আমি নতুন কার্ড আনতে ব্যাংকে যাব।', en: 'The day after tomorrow I will go to the bank to collect the new card.' } },
      { it: 'Il seminario comincerà fra quindici minuti nell’aula magna.', tr: { bn: 'সেমিনারটি পনেরো মিনিট পর প্রধান হলে শুরু হবে।', en: 'The seminar will start in fifteen minutes in the main hall.' } },
      { it: 'Bisogna pagare la bolletta entro il trenta del mese.', tr: { bn: 'মাসের ত্রিশ তারিখের মধ্যে বিলটি পরিশোধ করতে হবে।', en: 'The bill must be paid by the thirtieth of the month.' } },
      { it: 'Il mese prossimo inizieranno i lavori di restauro in piazza.', tr: { bn: 'আগামী মাসে চত্বরে সংস্কার কাজ শুরু হবে।', en: 'Next month restoration work will start in the square.' } },
    ],
    exercises: [
      { id: 'ex-a2-etf-1', prompt: { bn: 'সময়সীমা ("মধ্যে"):', en: 'Deadline ("by"):' }, it: 'Devi inviare il modulo ___ venerdì alle cinque.', options: ['fa', 'entro', 'da', 'scorsa'], answer: 1, explanation: { bn: 'শেষ সময়সীমা বোঝাতে entro।', en: '"By Friday" = entro venerdì.' } },
      { id: 'ex-a2-etf-2', prompt: { bn: 'এক সপ্তাহ পরে:', en: 'In a week:' }, it: 'I risultati arriveranno ___ una settimana.', options: ['fra', 'fa', 'dopo', 'prima'], answer: 0, explanation: { bn: 'এখন থেকে ভবিষ্যতের সময় = fra / tra।', en: 'Future offset from now uses fra/tra.' } },
    ],
    storyIds: ['st-a2-17'],
    vocabKeys: ['w:A2:dopodomani', 'w:A2:la scadenza'],
  },
  'sequenza-narrativa-inizio': {
    rule: {
      bn: 'অতীত গল্প শুরু করার ধাপ: ১) শুরু/প্রেক্ষাপট (All’inizio, Quella mattina, Un giorno) ২) imperfetto দিয়ে পরিবেশ, সময় ও আবহাওয়া বলা ৩) প্রথম ঘটনা দিয়ে গল্প এগোনো।',
      en: 'Structure past stories clearly from the first line: open with All’inizio / Un giorno / Quella mattina + imperfetto scene-setting before introducing actions.',
    },
    commonMistakes: [
      { wrong: 'Primo ho preso il treno, poi arrivavo...', right: 'Prima di tutto ho preso il treno, poi sono arrivato...', note: { bn: 'ক্রমের শুরুতে "সবার আগে" বলতে prima বা prima di tutto বসে (primo বিশেষণ)।', en: 'Use prima / prima di tutto (adverb), not adjective primo, for sequence.' } },
    ],
    examples: [
      { it: 'All’inizio sembrava una giornata tranquilla e senza imprevisti.', tr: { bn: 'শুরুতে দিনটি খুব শান্ত ও ঝামেলামুক্ত মনে হচ্ছিল।', en: 'At the beginning it seemed a quiet day with no surprises.' } },
      { it: 'Prima di tutto abbiamo controllato gli orari dei treni sul sito.', tr: { bn: 'সবার আগে আমরা ওয়েবসাইটে ট্রেনের সময়সূচি যাচাই করেছি।', en: 'First of all we checked the train timetable on the website.' } },
      { it: 'Quella domenica mattina c’era un sole meraviglioso in tutta la valle.', tr: { bn: 'সেই রবিবার সকালে পুরো উপত্যকায় চমৎকার রোদ ছিল।', en: 'That Sunday morning there was wonderful sunshine across the valley.' } },
      { it: 'Un giorno ho ricevuto una telefonata inaspettata dal mio vecchio amico.', tr: { bn: 'একদিন আমি আমার পুরনো বন্ধুর কাছ থেকে একটি অপ্রত্যাশিত ফোন কল পেলাম।', en: 'One day I received an unexpected phone call from my old friend.' } },
    ],
    exercises: [
      { id: 'ex-a2-sni-1', prompt: { bn: 'গল্পের শুরুতে "সবার আগে":', en: '"First of all" in sequence:' }, it: '___ ho preparato lo zaino, poi sono uscito.', options: ['Primo', 'Prima di tutto', 'Alla fine', 'Purtroppo'], answer: 1, explanation: { bn: 'ক্রমের প্রথম ধাপ = Prima di tutto / Prima।', en: 'Use Prima di tutto / Prima for step one.' } },
      { id: 'ex-a2-sni-2', prompt: { bn: 'শুরুর অবস্থা:', en: 'Opening state:' }, it: '___ ero un po’ nervoso, ma poi mi sono calmato.', options: ['All’inizio', 'Alla fine', 'Finalmente', 'Tra poco'], answer: 0, explanation: { bn: 'গল্পের শুরু বোঝাতে All’inizio।', en: '"At the beginning" = All’inizio.' } },
    ],
    storyIds: ['st-a2-01', 'st-a2-21'],
    vocabKeys: ["w:A2:all'improvviso", 'w:A2:stamattina'],
  },
  'sequenza-narrativa-sviluppo': {
    rule: {
      bn: 'ঘটনার ধারাবাহিকতা এগিয়ে নিতে: poi, dopo, subito dopo, più tardi, nel frattempo। আর হঠাৎ বাঁক নিতে: all’improvviso, proprio in quel momento + passato prossimo।',
      en: 'Move a story forward with poi, dopo, subito dopo, nel frattempo, and signal sudden events with all’improvviso or proprio in quel momento.',
    },
    commonMistakes: [
      { wrong: 'Dopo ho mangiato, sono uscito.', right: 'Dopo aver mangiato (o Dopo che ho mangiato / Poi), sono uscito.', note: { bn: 'সরাসরি পরের বাক্যে এককভাবে Poi/Subito dopo ব্যবহার সবচেয়ে পরিচ্ছন্ন; মূল বাক্যে ক্রিয়া থাকলে che লাগে।', en: 'Use Poi or Dopo che + clause (avoid bare dopo + finite verb without che).' } },
    ],
    examples: [
      { it: 'Siamo arrivati in stazione e subito dopo è cominciato il temporale.', tr: { bn: 'আমরা স্টেশনে পৌঁছালাম এবং ঠিক তার পরপরই ঝড় শুরু হলো।', en: 'We arrived at the station and immediately afterwards the storm began.' } },
      { it: 'All’improvviso si è spenta la luce in tutto il condominio.', tr: { bn: 'হঠাৎ করে পুরো ভবনে বিদ্যুৎ চলে গেল।', en: 'Suddenly the power went out across the whole apartment block.' } },
      { it: 'Nel frattempo l’impiegata ha preparato tutte le fotocopie necessarie.', tr: { bn: 'ইতোমধ্যে কর্মচারী প্রয়োজনীয় সব ফটোকপি তৈরি করে দিয়েছেন।', en: 'In the meantime the clerk prepared all the necessary photocopies.' } },
      { it: 'Più tardi abbiamo deciso di cenare in una trattoria vicino al ponte.', tr: { bn: 'কিছুক্ষণ পর আমরা সেতুর কাছে একটি স্থানীয় রেস্তোরাঁয় রাতের খাবার খাওয়ার সিদ্ধান্ত নিলাম।', en: 'Later on we decided to have dinner at a trattoria near the bridge.' } },
    ],
    exercises: [
      { id: 'ex-a2-sns-1', prompt: { bn: 'হঠাৎ ঘটা:', en: 'Sudden event:' }, it: 'Camminavamo tranquilli quando ___ è apparso un cane.', options: ['prima di tutto', 'all’improvviso', 'ogni volta', 'in conclusione'], answer: 1, explanation: { bn: '"হঠাৎ" বোঝাতে all’improvviso।', en: '"Suddenly" = all’improvviso.' } },
      { id: 'ex-a2-sns-2', prompt: { bn: 'ইতোমধ্যে:', en: 'In the meantime:' }, it: 'Io parcheggiavo e ___ Luca comprava i biglietti.', options: ['nel frattempo', 'purtroppo', 'alla fine', 'scorsa'], answer: 0, explanation: { bn: '"ইতোমধ্যে" = nel frattempo।', en: '"In the meantime" = nel frattempo.' } },
    ],
    storyIds: ['st-a2-09', 'st-a2-21'],
    vocabKeys: ['w:A2:il temporale', 'w:A2:il prosciutto'],
  },
  'sequenza-narrativa-conclusione': {
    rule: {
      bn: 'বিবরণ বা গল্পের উপসংহার টানতে: alla fine (শেষ পর্যন্ত), finalmente (দীর্ঘ প্রতীক্ষার পর স্বস্তিদায়ক সমাপ্তি), per fortuna (ভাগ্যিস), purtroppo (দুর্ভাগ্যবশত)।',
      en: 'Close narratives effectively with Alla fine, Finalmente (relief after waiting), Per fortuna, and Purtroppo.',
    },
    commonMistakes: [
      { wrong: 'Finalmente il mio treno è stato cancellato.', right: 'Alla fine / Purtroppo il mio treno è stato cancellato.', note: { bn: 'Finalmente ইতিবাচক অপেক্ষার পর বসে; খারাপ খবরে Purtroppo/Alla fine।', en: 'Finalmente expresses relief for good outcomes; use Purtroppo for bad news.' } },
    ],
    examples: [
      { it: 'Dopo due ore di coda allo sportello, finalmente abbiamo risolto il problema.', tr: { bn: 'কাউন্টারে দুই ঘণ্টা লাইনে দাঁড়ানোর পর অবশেষে আমরা সমস্যাটি সমাধান করলাম।', en: 'After two hours queueing at the desk, we finally solved the problem.' } },
      { it: 'Per fortuna avevo portato l’ombrello nello zaino!', tr: { bn: 'ভাগ্যিস আমি ব্যাকপ্যাকে ছাতা নিয়েছিলাম!', en: 'Luckily I had brought the umbrella in my backpack!' } },
      { it: 'Alla fine della giornata eravamo stanchi ma molto soddisfatti.', tr: { bn: 'দিনের শেষে আমরা ক্লান্ত ছিলাম কিন্তু খুব সন্তুষ্ট ছিলাম।', en: 'At the end of the day we were tired but very satisfied.' } },
      { it: 'Purtroppo non siamo arrivati in tempo per visitare il giardino.', tr: { bn: 'দুর্ভাগ্যবশত বাগানটি ঘোরার জন্য আমরা সময়মতো পৌঁছাতে পারিনি।', en: 'Unfortunately we did not arrive in time to visit the garden.' } },
    ],
    exercises: [
      { id: 'ex-a2-snc-1', prompt: { bn: 'সৌভাগ্যক্রমে:', en: 'Luckily:' }, it: '___ abbiamo trovato un tavolo libero anche senza prenotazione.', options: ['Purtroppo', 'Per fortuna', 'Prima di tutto', 'Mentre'], answer: 1, explanation: { bn: 'ভালো সুযোগ পাওয়ায় Per fortuna।', en: '"Luckily" = Per fortuna.' } },
      { id: 'ex-a2-snc-2', prompt: { bn: 'অবশেষে (ইতিবাচক):', en: 'Finally (relief):' }, it: 'Dopo tanti mesi di studio, ___ ho superato l’esame!', options: ['finalmente', 'purtroppo', 'invece', 'appena'], answer: 0, explanation: { bn: 'অপেক্ষিত সাফল্যে finalmente।', en: 'Desired success after effort takes finalmente.' } },
    ],
    storyIds: ['st-a2-27', 'st-a2-31'],
    vocabKeys: ['w:A2:finalmente', 'w:A2:soddisfatto'],
  },
  'azioni-compiute-durata-finita': {
    rule: {
      bn: 'সময়কালের তিনটি ভিন্ন প্রিপোজিশন: da + বর্তমান (এখনো চলছে); per + passato prossimo (অতীতে সম্পূর্ণ শেষ হয়েছে); in + সময় (কত দ্রুত কাজটি সম্পন্ন হয়েছে)।',
      en: 'Contrast three duration prepositions: da + present (still ongoing), per + passato prossimo (finished duration), and in + time (time taken to finish).',
    },
    commonMistakes: [
      { wrong: 'Ho studiato italiano da cinque anni a Milano e ora vivo a Roma.', right: 'Ho studiato italiano per cinque anni a Milano e ora vivo a Roma.', note: { bn: 'অতীতে শেষ হয়ে যাওয়া সময়কালে per লাগে।', en: 'A finished past duration takes per.' } },
    ],
    examples: [
      { it: 'Ho lavorato in quell’albergo per tutta l’estate del 2024.', tr: { bn: '২০২৪ সালের পুরো গ্রীষ্মে আমি ঐ হোটেলে কাজ করেছিলাম।', en: 'I worked in that hotel for the whole summer of 2024.' } },
      { it: 'Lavoro in questo ospedale da quattro anni e mi trovo bene.', tr: { bn: 'আমি চার বছর ধরে এই হাসপাতালে কাজ করছি এবং ভালো আছি।', en: 'I have been working in this hospital for four years and like it.' } },
      { it: 'Il tecnico ha riparato la caldaia in meno di mezz’ora.', tr: { bn: 'টেকনিশিয়ান আধঘণ্টারও কম সময়ে বয়লারটি মেরামত করেছেন।', en: 'The technician repaired the boiler in less than half an hour.' } },
      { it: 'I miei genitori hanno aspettato l’aereo per tre ore.', tr: { bn: 'আমার বাবা-মা তিন ঘণ্টা বিমানের জন্য অপেক্ষা করেছেন।', en: 'My parents waited for the plane for three hours.' } },
    ],
    exercises: [
      { id: 'ex-a2-acd-1', prompt: { bn: 'সমাপ্ত সময়কাল:', en: 'Completed past span:' }, it: 'Ho abitato a Padova ___ tre anni prima di trasferirmi qui.', options: ['da', 'per', 'fra', 'fa'], answer: 1, explanation: { bn: 'পাদোয়ায় থাকা শেষ হয়ে গেছে → per।', en: 'Completed duration takes per.' } },
      { id: 'ex-a2-acd-2', prompt: { bn: 'কত দ্রুত শেষ হয়েছে:', en: 'Time to complete:' }, it: 'Abbiamo finito tutto l’esercizio ___ dieci minuti.', options: ['in', 'da', 'fa', 'tra'], answer: 0, explanation: { bn: 'কাজ সম্পন্ন করতে লাগা মোট সময় = in।', en: 'Completion speed uses in.' } },
    ],
    storyIds: ['st-a2-17'],
    vocabKeys: ['w:A2:il riscaldamento', 'w:A2:cambiare'],
  },
  'racconto-biografico-a2': {
    rule: {
      bn: 'অতীত ও ভবিষ্যৎ একত্রিত করে সম্পূর্ণ গল্প বলা: শৈশব/পটভূমি (imperfetto) → নির্দিষ্ট ঘটনা (passato prossimo) → বর্তমান (presente + da) → লক্ষ্য (futuro semplice)।',
      en: 'Weave past, present, and future into one coherent life story: scene in imperfetto, events in passato prossimo, ongoing state in presente + da, and goals in futuro.',
    },
    commonMistakes: [
      { wrong: 'Nel 2022 abito a Roma, poi nel 2026 lavoravo lì.', right: 'Nel 2022 sono arrivato a Roma e nel 2026 ci lavorerò.', note: { bn: 'প্রতিটি সময়-সংকেতের সাথে সঠিক কাল মেলাতে হবে।', en: 'Match each date/frame with its tense: passato, presente, futuro.' } },
    ],
    examples: [
      { it: 'Quando ero giovane abitavo al sud, poi nel 2023 mi sono trasferito a Milano.', tr: { bn: 'তরুণ বয়সে আমি দক্ষিণে থাকতাম, তারপর ২০২৩ সালে মিলানে চলে আসি।', en: 'When I was young I lived in the south, then in 2023 I moved to Milan.' } },
      { it: 'Oggi lavoro in un ufficio tecnico da due anni e presto prenderò la patente.', tr: { bn: 'আজ দুই বছর ধরে আমি একটি কারিগরি অফিসে কাজ করছি এবং শীঘ্রই ড্রাইভিং লাইসেন্স নেব।', en: 'Today I have been working in a technical office for two years and will soon get my driving licence.' } },
      { it: 'Ieri pioveva forte, perciò siamo rimasti a casa e domani usciremo al parco.', tr: { bn: 'গতকাল জোরে বৃষ্টি হচ্ছিল, তাই আমরা বাসায় ছিলাম এবং কাল পার্কে যাব।', en: 'Yesterday it was raining hard, so we stayed home and tomorrow we will go to the park.' } },
      { it: 'Da bambino sognavo di viaggiare e l’anno prossimo visiterò finalmente Roma.', tr: { bn: 'ছোটবেলায় আমি ভ্রমণের স্বপ্ন দেখতাম এবং আগামী বছর অবশেষে রোম ঘুরব।', en: 'As a child I dreamed of travelling and next year I will finally visit Rome.' } },
    ],
    exercises: [
      { id: 'ex-a2-rba-1', prompt: { bn: 'সঠিক তিন কালের বিন্যাস:', en: 'Choose mixed tense flow:' }, it: 'Da piccolo ___ in paese, poi ___ qui e presto ___ un’auto.', options: ['abitavo / sono venuto / comprerò', 'ho abitato / venivo / compravo', 'abito / verrò / ho comprato', 'abiterò / vengo / compravo'], answer: 0, explanation: { bn: 'শৈশব (abitavo) → আগমন (sono venuto) → ভবিষ্যৎ (comprerò)।', en: 'Childhood (imperfetto) → move (passato prossimo) → plan (futuro).' } },
      { id: 'ex-a2-rba-2', prompt: { bn: 'অভ্যাস থেকে পরিবর্তন:', en: 'From habit to change:' }, it: 'Prima ___ sempre tardi, ma da un mese mi sveglio alle sette.', options: ['mi sono svegliato', 'mi svegliavo', 'mi sveglierò', 'sveglio'], answer: 1, explanation: { bn: 'আগের অভ্যাস = mi svegliavo।', en: 'Previous repeated habit uses imperfetto.' } },
    ],
    storyIds: ['st-a2-04', 'st-a2-06'],
    vocabKeys: ['w:A2:la patente', 'w:A2:sognare'],
  },

  // ---------- Module 2 New Topics ----------
  'verbi-modali-futuro-imperfetto': {
    rule: {
      bn: 'মডাল ক্রিয়াগুলো বিভিন্ন কালে আলাদা অর্থ দেয়: imperfetto (dovevo/potevo/volevo = পরিকল্পনা বা পরিস্থিতি ছিল), passato prossimo (ho dovuto/potuto/voluto = বাস্তবে ঘটেছে), futuro (dovrò/potrò/vorrò = ভবিষ্যৎ বাধ্যবাধকতা/সুযোগ)।',
      en: 'Use modal verbs across tenses cleanly: imperfetto describes ongoing need or intention (dovevo, volevo), passato prossimo reports completed fact (ho dovuto, ho potuto), and futuro expresses upcoming obligation/possibility (dovrò, potrò).',
    },
    commonMistakes: [
      { wrong: 'Domani posso finire presto? → Sì, poto.', right: 'Domani potrai finire presto? → Sì, potrò.', note: { bn: 'potere ও dovere ভবিষ্যতে স্বর হারায়: potrò, dovrò।', en: 'Future stems contract: potrò, dovrò, vorrò.' } },
    ],
    examples: [
      { it: 'Ieri dovevo partire alle nove, ma ho dovuto aspettare il tecnico.', tr: { bn: 'গতকাল আমার নয়টায় রওনা হওয়ার কথা ছিল, কিন্তু টেকনিশিয়ানের জন্য অপেক্ষা করতে হয়েছে।', en: 'Yesterday I was supposed to leave at nine, but I had to wait for the technician.' } },
      { it: 'Quando ero studente potevo dormire fino alle dieci ogni domenica.', tr: { bn: 'ছাত্র থাকাকালীন প্রতি রবিবার দশটা পর্যন্ত ঘুমাতে পারতাম।', en: 'When I was a student I could sleep until ten every Sunday.' } },
      { it: 'La settimana prossima dovremo rinnovare i documenti dell’auto.', tr: { bn: 'আগামী সপ্তাহে আমাদের গাড়ির কাগজপত্র নবায়ন করতে হবে।', en: 'Next week we will have to renew the car documents.' } },
      { it: 'Quando imparerai bene l’italiano, potrai lavorare con più sicurezza.', tr: { bn: 'তুমি যখন ভালোভাবে ইতালিয়ান শিখবে, তখন আরও আত্মবিশ্বাসের সাথে কাজ করতে পারবে।', en: 'When you learn Italian well, you will be able to work with greater confidence.' } },
    ],
    exercises: [
      { id: 'ex-a2-vmf-1', prompt: { bn: 'ভবিষ্যৎ বাধ্যবাধকতা:', en: 'Future obligation:' }, it: 'Venerdì prossimo io ___ lavorare fino alle otto.', options: ['devo', 'dovrò', 'dovevo', 'ho dovuto'], answer: 1, explanation: { bn: 'ভবিষ্যৎ সময়সূচি: Venerdì prossimo → dovrò।', en: 'Next Friday uses future dovrò.' } },
      { id: 'ex-a2-vmf-2', prompt: { bn: 'অতীতের ইচ্ছা বনাম ঘটনা:', en: 'Past desire:' }, it: 'Da bambino ___ diventare pilota d’aereo.', options: ['volevo', 'vorrò', 'voglio', 'vorrei'], answer: 0, explanation: { bn: 'ছোটবেলার ইচ্ছা = volevo।', en: 'Childhood ongoing desire uses imperfetto.' } },
    ],
    storyIds: ['st-a2-31'],
    vocabKeys: ['w:A2:il dipendente', 'w:A2:rinnovare'],
  },
  'verbi-combinazioni-comuni': {
    rule: {
      bn: 'ইতালিয়ান দৈনন্দিন কথোপকথনে ক্রিয়া-বিশেষ্যের নির্দিষ্ট জুটি আছে: fare colazione / la spesa / attenzione / una passeggiata / una domanda; prendere il treno / una decisione / un’aspirina; dare una mano / un consiglio; avere bisogno di / fretta / ragione।',
      en: 'Common A2 verb-noun collocations sound far more natural than word-for-word translation: fare attenzione (pay attention), fare la spesa (shop for groceries), prendere una decisione (decide), dare una mano (help), avere bisogno di (need).',
    },
    commonMistakes: [
      { wrong: 'Devo fare una decisione oggi.', right: 'Devo prendere una decisione oggi.', note: { bn: 'সিদ্ধান্ত নেওয়ায় prendere বসে, fare নয়।', en: 'Italian says prendere una decisione, not fare.' } },
    ],
    examples: [
      { it: 'Fai attenzione quando attraversi la strada vicino al semaforo!', tr: { bn: 'সিগন্যালের কাছে রাস্তা পার হওয়ার সময় সাবধান থেকো!', en: 'Be careful when crossing the road near the traffic light!' } },
      { it: 'Mi puoi dare una mano a portare queste valigie su per le scale?', tr: { bn: 'এই সুটকেসগুলো সিঁড়ি বেয়ে উপরে তুলতে একটু সাহায্য করবে?', en: 'Can you give me a hand carrying these suitcases up the stairs?' } },
      { it: 'Ho bisogno di fare una pausa di dieci minuti prima della lezione.', tr: { bn: 'ক্লাসের আগে আমার দশ মিনিটের একটা বিরতি দরকার।', en: 'I need to take a ten-minute break before the lesson.' } },
      { it: 'Sabato pomeriggio andiamo a fare la spesa al mercato rionale.', tr: { bn: 'শনিবার বিকেলে আমরা স্থানীয় বাজারে বাজার করতে যাচ্ছি।', en: 'On Saturday afternoon we are going grocery shopping at the neighbourhood market.' } },
    ],
    exercises: [
      { id: 'ex-a2-vcc-1', prompt: { bn: 'সিদ্ধান্ত নেওয়া:', en: 'Make a decision:' }, it: 'Entro domani dobbiamo ___ una decisione importante.', options: ['fare', 'prendere', 'dare', 'stare'], answer: 1, explanation: { bn: 'সিদ্ধান্ত নেওয়ায় prendere una decisione।', en: 'Collocation is prendere una decisione.' } },
      { id: 'ex-a2-vcc-2', prompt: { bn: 'মনোযোগ দেওয়া:', en: 'Pay attention:' }, it: 'Ragazzi, ___ attenzione alle scadenze!', options: ['prendete', 'date', 'fate', 'avete'], answer: 2, explanation: { bn: 'fare attenzione = মনোযোগ দেওয়া।', en: 'Collocation is fare attenzione.' } },
    ],
    storyIds: ['st-a2-25', 'st-a2-26'],
    vocabKeys: ['w:A2:il carrello', 'w:A2:la riunione', 'w:A2:la pausa'],
  },

  // ---------- Module 3 New Topics ----------
  'pronomi-diretti-infinito': {
    rule: {
      bn: 'মডাল ক্রিয়া (dovere, potere, volere) + ইনফিনিটিভ থাকলে প্রত্যক্ষ সর্বনাম আগে বসতে পারে অথবা ইনফিনিটিভের শেষ -e ফেলে দিয়ে পেছনে যুক্ত হতে পারে: Lo voglio vedere = Voglio vederlo।',
      en: 'With a modal verb + infinitive, direct object pronouns may stand before the modal or attach to the infinitive (dropping final -e): La posso aiutare? = Posso aiutarla?',
    },
    commonMistakes: [
      { wrong: 'Voglio vedere-lo (hyphen or keeping -e).', right: 'Voglio vederlo (oppure Lo voglio vedere).', note: { bn: 'হাইফেন নয় ও শেষের e বাদ: vederlo।', en: 'Drop final -e and attach cleanly: vederlo.' } },
    ],
    examples: [
      { it: 'Questo libro è bellissimo, devi leggerlo assolutamente!', tr: { bn: 'এই বইটা চমৎকার, তোমার অবশ্যই পড়া উচিত!', en: 'This book is wonderful, you absolutely must read it!' } },
      { it: 'Le scarpe sono in saldo: le vuoi comprare oggi?', tr: { bn: 'জুতাগুলোতে ছাড় চলছে: তুমি কি আজ এগুলো কিনতে চাও?', en: 'The shoes are on sale: do you want to buy them today?' } },
      { it: 'Scusa, non posso accompagnarti alla stazione stamattina.', tr: { bn: 'দুঃখিত, আজ সকালে আমি তোমাকে স্টেশনে পৌঁছে দিতে পারব না।', en: 'Sorry, I cannot walk you to the station this morning.' } },
      { it: 'Questi moduli vanno firmati subito: possiamo compilarli insieme.', tr: { bn: 'এই ফর্মগুলোতে এখনই সই করতে হবে: আমরা একসাথে পূরণ করতে পারি।', en: 'These forms need signing now: we can fill them in together.' } },
    ],
    exercises: [
      { id: 'ex-a2-pdi-1', prompt: { bn: 'ইনফিনিটিভে সর্বনাম যোগ:', en: 'Attach pronoun to infinitive:' }, it: 'La valigia è pesante: posso ___?', options: ['portarela', 'portarla', 'portarlo', 'portarle'], answer: 1, explanation: { bn: 'portare-এর e বাদ + la = portarla।', en: 'portare drops -e + la → portarla.' } },
      { id: 'ex-a2-pdi-2', prompt: { bn: 'বহুবচন বই:', en: 'Plural books:' }, it: 'Ecco i biglietti: devi ___ sul tavolo.', options: ['metterlo', 'metterli', 'metterle', 'metterla'], answer: 1, explanation: { bn: 'i biglietti পুং বহুবচন → metterli।', en: 'Masc. plural attaches as -li.' } },
    ],
    storyIds: ['st-a2-07'],
    vocabKeys: ['w:A2:i saldi', 'w:A2:il modulo'],
  },
  'pronomi-indiretti-verbi': {
    rule: {
      bn: 'a + ব্যক্তি বোঝাতে অনেক জরুরি ক্রিয়া পরোক্ষ সর্বনাম (mi, ti, gli, le, Le, ci, vi, gli) চায়: piacere, servire, bastare, sembrare, mancare, telefonare, rispondere, scrivere, chiedere, dare, prestare, regalare।',
      en: 'Indirect object verbs encode "to/for someone": piacere, servire (to need), bastare (to be enough), sembrare (to seem), mancare (to miss/lack), rispondere, telefonare, chiedere, prestare.',
    },
    commonMistakes: [
      { wrong: 'Ho chiesto lui l’indirizzo.', right: 'Gli ho chiesto l’indirizzo.', note: { bn: 'তাকে (ছেলে) জিজ্ঞেস করেছি → Gli ho chiesto।', en: '"Asked him" requires indirect pronoun gli before the verb.' } },
    ],
    examples: [
      { it: 'Mi serve una penna blu per compilare la ricevuta.', tr: { bn: 'রসিদটা পূরণ করতে আমার একটি নীল কলম দরকার।', en: 'I need a blue pen to fill out the receipt.' } },
      { it: 'I genitori di Paolo vivono lontano e gli mancano molto.', tr: { bn: 'পাওলোর বাবা-মা দূরে থাকেন এবং সে তাদের খুব মিস করে।', en: 'Paolo’s parents live far away and he misses them a lot.' } },
      { it: 'Questo prezzo ci sembra davvero conveniente!', tr: { bn: 'এই দামটা আমাদের কাছে সত্যিই বেশ সাশ্রয়ী মনে হচ্ছে!', en: 'This price seems really reasonable to us!' } },
      { it: 'Le ho già mandato il contratto via email stamattina.', tr: { bn: 'আমি আজ সকালেই আপনাকে (বা তাকে-স্ত্রী) ইমেইলে চুক্তিপত্র পাঠিয়েছি।', en: 'I already sent her (or formal you) the contract by email this morning.' } },
    ],
    exercises: [
      { id: 'ex-a2-piv-1', prompt: { bn: 'দরকার হওয়া (servire):', en: 'Needing something:' }, it: '___ servono altri dieci euro per il biglietto.', options: ['Io', 'Mi', 'Lo', 'Me'], answer: 1, explanation: { bn: 'আমার দরকার = Mi servono।', en: 'Indirect "to me" is Mi.' } },
      { id: 'ex-a2-piv-2', prompt: { bn: 'তাদের উত্তর দেওয়া:', en: 'Replying to them:' }, it: 'I clienti hanno scritto ieri e ___ ho risposto subito.', options: ['li', 'gli', 'le', 'lo'], answer: 1, explanation: { bn: 'তাদের (a loro) জন্যও কথ্য ও প্রচলিত পরোক্ষ সর্বনাম gli।', en: '"To them" uses gli before the verb.' } },
    ],
    storyIds: ['st-a2-08'],
    vocabKeys: ['w:A2:aiutare', 'w:A2:incontrare', 'w:A2:conveniente'],
  },
  'pronomi-combinati-a2': {
    rule: {
      bn: 'পরোক্ষ সর্বনাম + প্রত্যক্ষ সর্বনাম (lo, la, li, le, ne): mi→me, ti→te, ci→ce, vi→ve (me lo, te la, ce li, ve le); এবং gli/le/Le সর্বদা glie- হয়ে জোড়া লাগে (glielo, gliela, glieli, gliele, gliene)।',
      en: 'Combined pronouns put indirect before direct: mi/ti/ci/vi shift i→e (me lo, te la, ce li, ve ne). Meanwhile gli, le, and formal Le all merge as glie- (glielo, gliela, glieli, gliele).',
    },
    commonMistakes: [
      { wrong: 'Hai il mio numero? Sì, ti lo mando dopo.', right: 'Hai il mio numero? Sì, te lo mando dopo.', note: { bn: 'lo-এর আগে ti বদলে te হয় → te lo।', en: 'ti shifts to te before lo/la/li/le/ne.' } },
    ],
    examples: [
      { it: 'Hai bisogno del dizionario? Te lo presto volentieri!', tr: { bn: 'তোমার কি অভিধানটা দরকার? আমি খুশি মনে তোমাকে ধার দেব!', en: 'Do you need the dictionary? I’ll gladly lend it to you!' } },
      { it: 'Quanto costa questo orologio? Me lo può far vedere?', tr: { bn: 'এই ঘড়িটির দাম কত? আমাকে কি একটু দেখাতে পারবেন?', en: 'How much is this watch? Can you show it to me?' } },
      { it: 'Anna cercava le sue chiavi e gliele ho portate io.', tr: { bn: 'আন্না তার চাবিগুলো খুঁজছিল এবং আমি সেগুলো তাকে এনে দিয়েছি।', en: 'Anna was looking for her keys and I brought them to her.' } },
      { it: 'Volete provare queste olive? Ve ne do un po’.', tr: { bn: 'তোমরা কি এই জলপাইগুলো চেখে দেখতে চাও? তোমাদের একটু দিচ্ছি।', en: 'Do you want to try these olives? I’ll give you some.' } },
    ],
    exercises: [
      { id: 'ex-a2-pca-1', prompt: { bn: 'তোমাকে এটি (la penna) দিচ্ছি:', en: 'Giving it (f.) to you:' }, it: 'La tua penna? ___ do subito!', options: ['Ti la', 'Te la', 'La ti', 'Gliela'], answer: 1, explanation: { bn: 'যৌগিক সর্বনাম: ti + la → Te la।', en: 'ti + la combines into Te la.' } },
      { id: 'ex-a2-pca-2', prompt: { bn: 'তাকে এটি (il libro) বলি:', en: 'Telling it to him:' }, it: 'Marco non lo sa ancora: ___ spiego domani.', options: ['gli lo', 'glielo', 'le lo', 'me lo'], answer: 1, explanation: { bn: 'gli + lo এক শব্দে glielo হয়।', en: 'gli + lo merges into glielo.' } },
    ],
    storyIds: ['st-a2-07', 'st-a2-08'],
    vocabKeys: ['w:A2:prestare', 'w:A2:naturalmente'],
  },
  'pronomi-riflessivi-a2': {
    rule: {
      bn: 'বহুবচনে ci/vi/si পারস্পরিক কাজ বোঝায় ("একে অপরের সাথে": Ci sentiamo stasera, Si aiutano)। মডালের সাথে প্রতিফলক সর্বনাম আগে বসতে পারে অথবা ইনফিনিটিভের শেষে যুক্ত হতে পারে (Voglio alzarmi)।',
      en: 'Plural reflexives convey reciprocal actions ("each other"): Ci vediamo alle sei, Si scrivono spesso. With modals, place the pronoun before or attach it to the infinitive (Devo sbrigarmi).',
    },
    commonMistakes: [
      { wrong: 'Voglio svegliaremi presto domani.', right: 'Voglio svegliarmi presto domani (o Mi voglio svegliare).', note: { bn: 'ইনফিনিটিভে সর্বনাম যোগের সময় শেষের -e বাদ যায়।', en: 'Drop final -e before attaching -mi to svegliare.' } },
    ],
    examples: [
      { it: 'Ci vediamo domani mattina davanti alla fermata del tram.', tr: { bn: 'আগামীকাল সকালে ট্রাম স্টপেজের সামনে আমাদের দেখা হবে।', en: 'We’ll see each other tomorrow morning in front of the tram stop.' } },
      { it: 'Anche se abitiamo lontano, ci telefoniamo ogni settimana.', tr: { bn: 'আমরা দূরে থাকলেও প্রতি সপ্তাহে একে অপরকে ফোন করি।', en: 'Even though we live far apart, we phone each other every week.' } },
      { it: 'Stasera sono stanco e voglio andare a riposarmi presto.', tr: { bn: 'আজ রাতে আমি ক্লান্ত এবং তাড়াতাড়ি গিয়ে বিশ্রাম নিতে চাই।', en: 'Tonight I am tired and want to go rest early.' } },
      { it: 'Domani dovete prepararvi in fretta perché il treno parte alle sette.', tr: { bn: 'কাল তোমাদের তাড়াতাড়ি তৈরি হতে হবে কারণ ট্রেন সাতটায় ছাড়বে।', en: 'Tomorrow you must get ready quickly because the train leaves at seven.' } },
    ],
    exercises: [
      { id: 'ex-a2-pra-1', prompt: { bn: 'পারস্পরিক দেখা:', en: 'Seeing each other:' }, it: 'Quando ___ vediamo per prendere un caffè?', options: ['mi', 'ci', 'vi', 'lo'], answer: 1, explanation: { bn: 'আমরা একে অপরের সাথে → ci vediamo।', en: '"See each other" (we) uses ci vediamo.' } },
      { id: 'ex-a2-pra-2', prompt: { bn: 'মডালের সাথে প্রতিফলক:', en: 'Reflexive + modal:' }, it: 'Domani mattina devo ___ alle sei e mezza.', options: ['alzaremi', 'alzarmi', 'alzarsi', 'mi alzarsi'], answer: 1, explanation: { bn: 'সঠিক রূপ: io + devo + alzarmi।', en: 'Attach -mi after dropping -e → alzarmi.' } },
    ],
    storyIds: ['st-a2-03'],
    vocabKeys: ['w:A2:sbrigarsi', 'w:A2:riposarsi'],
  },
  'connettivi-logici-a2': {
    rule: {
      bn: 'যুক্তি সাজানোর চার দল — কারণ: perché, siccome (শুরুতে); ফলাফল: quindi, perciò, per questo; বৈপরীত্য: ma, però, invece, anche se; ক্রম/সংযোজন: inoltre, prima, poi, infine।',
      en: 'Connect ideas cleanly: Cause (perché, siccome at sentence start), Consequence (quindi, perciò, per questo), Contrast (ma, però, invece, anche se), Sequence/Addition (inoltre, infine).',
    },
    commonMistakes: [
      { wrong: 'Siccome non piove, però porto l’ombrello.', right: 'Non piove, però porto l’ombrello (o Anche se non piove...).', note: { bn: 'একই বাক্যে siccome এবং però একসাথে বসে না।', en: 'Do not pair siccome with però in the same two-clause structure.' } },
    ],
    examples: [
      { it: 'Siccome c’era uno sciopero dei treni, siamo andati in autobus.', tr: { bn: 'যেহেতু ট্রেনের ধর্মঘট ছিল, তাই আমরা বাসে গেছি।', en: 'Since there was a train strike, we went by bus.' } },
      { it: 'L’affitto è un po’ alto, invece le spese condominiali sono basse.', tr: { bn: 'ভাড়াটা একটু বেশি, অন্যদিকে ভবনের রক্ষণাবেক্ষণ খরচ কম।', en: 'The rent is a bit high, on the other hand the building fees are low.' } },
      { it: 'Ho dimenticato i guanti a casa, perciò ho avuto molto freddo alle mani.', tr: { bn: 'আমি বাসায় দস্তানা ভুলে গিয়েছিলাম, তাই হাতে খুব ঠান্ডা লেগেছে।', en: 'I left my gloves at home, therefore my hands got very cold.' } },
      { it: 'La casa è vicina alla metro; inoltre ha un grande balcone luminoso.', tr: { bn: 'বাসাটি মেট্রোর কাছে; তাছাড়া এর একটি বড় আলোকিত বারান্দা আছে।', en: 'The house is near the metro; moreover, it has a big bright balcony.' } },
    ],
    exercises: [
      { id: 'ex-a2-cla-1', prompt: { bn: 'বাক্যের শুরুতে "যেহেতু":', en: '"Since" at start of sentence:' }, it: '___ il museo è chiuso di lunedì, ci andremo martedì.', options: ['Siccome', 'Quindi', 'Invece', 'Però'], answer: 0, explanation: { bn: 'কারণ দিয়ে বাক্য শুরু = Siccome।', en: 'Siccome introduces a reason at the start.' } },
      { id: 'ex-a2-cla-2', prompt: { bn: 'বৈপরীত্য বা তুলনা ("অন্যদিকে"):', en: '"Instead / on the other hand":' }, it: 'Marco beve sempre tè; io, ___, preferisco il caffè.', options: ['siccome', 'perciò', 'invece', 'infine'], answer: 2, explanation: { bn: 'দুটি পছন্দের বৈপরীত্য = invece।', en: 'Contrast between subjects uses invece.' } },
    ],
    storyIds: ['st-a2-18'],
    vocabKeys: ['w:A2:comunque', 'w:A2:invece', 'w:A2:il ritardo'],
  },

  // ---------- Module 4 New Topics ----------
  'comparativi-uguaglianza': {
    rule: {
      bn: 'দুটি জিনিস, ব্যক্তি বা গুণ সমান বোঝাতে (così) … come অথবা (tanto) … quanto ব্যবহার হয়। দুটি ক্রিয়ার সমান পরিমাণেও tanto … quanto বসে।',
      en: 'Express "as … as" using (così) … come or (tanto) … quanto. With nouns ("as much/many … as"), tanto/a/i/e agrees with the noun: tanta pazienza quanta.',
    },
    commonMistakes: [
      { wrong: 'Roma è così bella di Firenze.', right: 'Roma è bella come Firenze (o tanto bella quanto Firenze).', note: { bn: 'সমান তুলনায় di নয়, come বা quanto বসে।', en: 'Equality uses come or quanto, never di.' } },
    ],
    examples: [
      { it: 'Questo zaino è tanto leggero quanto resistente.', tr: { bn: 'এই ব্যাকপ্যাকটি যেমন হালকা তেমনই মজবুত।', en: 'This backpack is as light as it is durable.' } },
      { it: 'Lucia parla italiano bene come una madrelingua.', tr: { bn: 'লুচিয়া একজন মাতৃভাষীর মতোই ভালো ইতালিয়ান বলে।', en: 'Lucia speaks Italian as well as a native speaker.' } },
      { it: 'Il treno regionale è comodo quanto l’autobus, ma più puntuale.', tr: { bn: 'লোকাল ট্রেন বাসের মতোই আরামদায়ক, তবে বেশি সময়নিষ্ঠ।', en: 'The regional train is as comfortable as the bus, yet more punctual.' } },
      { it: 'Oggi in centro ci sono tanti turisti quanti ieri.', tr: { bn: 'গতকালের মতো আজও শহরে অনেক পর্যটক আছে।', en: 'Today there are as many tourists downtown as yesterday.' } },
    ],
    exercises: [
      { id: 'ex-a2-cu-1', prompt: { bn: 'সমান তুলনা:', en: 'Comparison of equality:' }, it: 'Questo esercizio è difficile ___ quello di ieri.', options: ['di', 'quanto', 'più', 'meno'], answer: 1, explanation: { bn: 'সমান বোঝাতে quanto / come।', en: 'Equality takes quanto or come.' } },
      { id: 'ex-a2-cu-2', prompt: { bn: 'সমতা জোড়া:', en: 'Equality pair:' }, it: 'Il corso è ___ utile quanto divertente.', options: ['tanto', 'più', 'meno', 'molto'], answer: 0, explanation: { bn: 'tanto … quanto একটি জোড়া।', en: 'Pair tanto … quanto.' } },
    ],
    storyIds: ['st-a2-10'],
    vocabKeys: ['w:A2:leggero', 'w:A2:comodo'],
  },
  'superlativo-relativo': {
    rule: {
      bn: 'নির্দিষ্ট দলের ভেতরে "সবচেয়ে বেশি / কম": আর্টিকেল + (বিশেষ্য) + più / meno + বিশেষণ + di / tra। উদাহরণ: È il palazzo più antico della piazza।',
      en: 'Form the relative superlative ("the most / least … in …") with definite article + (noun) + più/meno + adjective + di (or tra/fra for a group).',
    },
    commonMistakes: [
      { wrong: 'È il più grande ristorante nella città.', right: 'È il ristorante più grande della città.', note: { bn: 'সাপেক্ষ শ্রেষ্ঠত্বে in-এর বদলে di (+ আর্টিকেল: della) বসে।', en: 'Relative superlatives take di (della), not in.' } },
    ],
    examples: [
      { it: 'Questa è la biblioteca più fornita dell’università.', tr: { bn: 'এটি বিশ্ববিদ্যালয়ের সবচেয়ে সমৃদ্ধ গ্রন্থাগার।', en: 'This is the best-stocked library at the university.' } },
      { it: 'Gennaio è spesso il mese più freddo dell’anno.', tr: { bn: 'জানুয়ারি মাস প্রায়ই বছরের সবচেয়ে শীতল মাস।', en: 'January is often the coldest month of the year.' } },
      { it: 'Questi sono gli esercizi meno difficili di tutto il capitolo.', tr: { bn: 'এগুলো পুরো অধ্যায়ের সবচেয়ে সহজ (কম কঠিন) অনুশীলনী।', en: 'These are the least difficult exercises in the whole chapter.' } },
      { it: 'Anna è la collega più gentile del nostro reparto.', tr: { bn: 'আন্না আমাদের বিভাগের সবচেয়ে অমায়িক সহকর্মী।', en: 'Anna is the kindest colleague in our department.' } },
    ],
    exercises: [
      { id: 'ex-a2-srp-1', prompt: { bn: 'সাপেক্ষ শ্রেষ্ঠত্ব:', en: 'Relative superlative:' }, it: 'Il treno delle sette è ___ veloce della mattina.', options: ['il più', 'più', 'un più', 'molto più'], answer: 0, explanation: { bn: 'নির্দিষ্ট তুলনায় আর্টিকেল লাগে: il più veloce।', en: 'Relative superlative requires the definite article (il più).' } },
      { id: 'ex-a2-srp-2', prompt: { bn: 'দলের সাথে অব্যয়:', en: 'Preposition before group:' }, it: 'È la piazza più famosa ___ Italia.', options: ['in', 'd’', 'con', 'per'], answer: 1, explanation: { bn: 'সাপেক্ষ শ্রেষ্ঠত্বে di (d’Italia) বসে।', en: 'Use di (d’Italia) with superlatives.' } },
    ],
    storyIds: ['st-a2-29'],
    vocabKeys: ['w:A2:antico', 'w:A2:il centro commerciale'],
  },
  'superlativo-assoluto': {
    rule: {
      bn: 'অন্য কারও সাথে তুলনা না করে গুণ বাড়িয়ে বলতে -issimo/-issima/-issimi/-issime ব্যবহার করুন (bellissimo, facilissimo, moltissimo)। বিকল্পে molto, davvero, proprio বা estremamente বসতে পারে।',
      en: 'Express "extremely / very" without a comparison using -issimo/a/i/e (drop final vowel: bravo→bravissimo, stanca→stanchissima). Can also use molto/davvero + adjective.',
    },
    exceptions: {
      bn: 'কোনো বানানে -c-/-g- এর শক্ত উচ্চারণ রাখতে h লাগে: fresco→freschissimo, largo→larghissimo।',
      en: 'Insert h in -co/-go adjectives to keep the hard sound: fresco→freschissimo, lungo→lunghissimo.',
    },
    commonMistakes: [
      { wrong: 'Quest’acqua è frescissima.', right: 'Quest’acqua è freschissima.', note: { bn: 'c-এর শক্ত উচ্চারণ রাখতে অবশ্যই ch → freschissima লিখতে হবে।', en: 'fresco requires -ch- before -issima.' } },
    ],
    examples: [
      { it: 'Complimenti, la vostra presentazione è stata chiarissima!', tr: { bn: 'অভিনন্দন, আপনাদের উপস্থাপনা অত্যন্ত স্পষ্ট ছিল!', en: 'Congratulations, your presentation was crystal clear!' } },
      { it: 'Questo pane appena sfornato è freschissimo e profumato.', tr: { bn: 'এইমাত্র বেক করা রুটিটা দারুণ তাজা ও সুগন্ধি।', en: 'This freshly baked bread is super fresh and fragrant.' } },
      { it: 'Stamattina l’autobus era pienissimo all’ora di punta.', tr: { bn: 'আজ সকালে ব্যস্ত সময়ে বাসটি একেবারে ঠাসা ছিল।', en: 'This morning the bus was packed during rush hour.' } },
      { it: 'Vi ringraziamo moltissimo per la vostra pazienza!', tr: { bn: 'আপনাদের ধৈর্যের জন্য অসংখ্য ধন্যবাদ!', en: 'Thank you very much indeed for your patience!' } },
    ],
    exercises: [
      { id: 'ex-a2-sa-1', prompt: { bn: 'পিজ্জা অত্যন্ত সুস্বাদু:', en: 'Very tasty pizza:' }, it: 'Questa pizza margherita è ___!', options: ['buonissimo', 'buonissima', 'più buona', 'ottimo'], answer: 1, explanation: { bn: 'la pizza স্ত্রীলিঙ্গ একবচন → buonissima।', en: 'la pizza is feminine singular → buonissima.' } },
      { id: 'ex-a2-sa-2', prompt: { bn: 'lungo-এর অতিশয় রূপ:', en: 'Absolute superlative of lungo:' }, it: 'Il viaggio in nave è stato ___.', options: ['lungissimo', 'lunghissimo', 'più lungo', 'lungamente'], answer: 1, explanation: { bn: 'শক্ত g ধ্বনি রাখতে h → lunghissimo।', en: 'lungo keeps hard g with -h-: lunghissimo.' } },
    ],
    storyIds: ['st-a2-29'],
    vocabKeys: ['w:A2:la fila', 'w:A2:soleggiato'],
  },
  'avverbi-tempo-luogo-a2': {
    rule: {
      bn: 'সময়: subito, presto, tardi, ancora, già, ormai, appena। স্থান: qui/qua, lì/là, vicino, lontano, sopra, sotto, dentro, fuori, dappertutto। মাত্রা: molto, poco, troppo, abbastanza, quasi, davvero।',
      en: 'Adverbs are invariable and clarify when (subito, presto, ormai, appena), where (fuori, dentro, dappertutto), or how much (abbastanza, quasi, piuttosto, davvero).',
    },
    commonMistakes: [
      { wrong: 'Questo esercizio è abbastanzi facile.', right: 'Questo esercizio è abbastanza facile.', note: { bn: 'ক্রিয়াবিশেষণ কখনো লিঙ্গ-বচনে বদলায় না: abbastanza অপরিবর্তিত থাকে।', en: 'Adverbs like abbastanza are invariable.' } },
    ],
    examples: [
      { it: 'Ho cercato le chiavi dappertutto, ma erano sopra il tavolo!', tr: { bn: 'আমি সব জায়গায় চাবি খুঁজেছি, অথচ ওগুলো টেবিলের উপরেই ছিল!', en: 'I looked everywhere for the keys, yet they were on top of the table!' } },
      { it: 'L’esame era abbastanza lungo, però siamo riusciti a finirlo.', tr: { bn: 'পরীক্ষাটা বেশ দীর্ঘ ছিল, তবুও আমরা শেষ করতে পেরেছি।', en: 'The exam was fairly long, yet we managed to finish it.' } },
      { it: 'Ormai è tardi per prendere il treno diretto delle otto.', tr: { bn: 'আটটার সরাসরি ট্রেন ধরার জন্য এখন আর সময় নেই।', en: 'By now it is too late to catch the eight o’clock direct train.' } },
      { it: 'Aspetta un momento qui fuori, torno subito con il modulo!', tr: { bn: 'একটু এখানে বাইরে অপেক্ষা করো, আমি ফর্ম নিয়ে এখনই আসছি!', en: 'Wait a moment out here, I’ll be right back with the form!' } },
    ],
    exercises: [
      { id: 'ex-a2-atl-1', prompt: { bn: 'সব জায়গায়:', en: 'Everywhere:' }, it: 'In primavera ci sono fiori ___.', options: ['abbastanza', 'dappertutto', 'ormai', 'subito'], answer: 1, explanation: { bn: '"সব জায়গায়" = dappertutto।', en: '"Everywhere" = dappertutto.' } },
      { id: 'ex-a2-atl-2', prompt: { bn: 'যথেষ্ট / মোটামুটি:', en: 'Fairly / enough:' }, it: 'La spiegazione è ___ chiara per tutti.', options: ['abbastanza', 'appena', 'fuori', 'dappertutto'], answer: 0, explanation: { bn: 'মাত্রা বোঝাতে abbastanza।', en: '"Clear enough / fairly clear" = abbastanza chiara.' } },
    ],
    storyIds: ['st-a2-25'],
    vocabKeys: ['w:A2:quasi', 'w:A2:abbastanza', 'w:A2:finalmente'],
  },

  // ---------- Module 5 New Topics (A2 Grammar Expansion) ----------
  'imperativo-voi-lei': {
    rule: {
      bn: 'বহুবচন আদেশ (voi): -ate, -ete, -ite (বর্তমান কালের মতোই)। আনুষ্ঠানিক আদেশ (Lei): স্বর বদলায় (-are→-i, -ere/-ire→-a; অনিয়মিত: Sia, Abbia, Vada, Faccia, Dica, Stia)। সর্বনাম tu/voi-তে শেষে (Dimmi!), আর Lei-তে আগে (Mi dica!) বসে।',
      en: 'Plural voi commands use present forms (-ate/-ete/-ite). Formal Lei commands swap endings (-are→-i, -ere/-ire→-a; irregular: Sia, Vada, Faccia, Dica). Pronouns attach after tu/voi (Scusatemi!) and precede Lei (Mi scusi!).',
    },
    commonMistakes: [
      { wrong: 'Signore, parla più piano, per favore!', right: 'Signore, parli più piano, per favore!', note: { bn: 'Signore আনুষ্ঠানিক Lei সম্ভাষণ, তাই -are ক্রিয়ায় parli হবে।', en: 'Formal address requires Lei imperative (-i for -are verbs).' } },
    ],
    examples: [
      { it: 'Signora, entri pure e si accomodi su questa sedia!', tr: { bn: 'ম্যাডাম, দয়া করে ভেতরে আসুন এবং এই চেয়ারে বসুন!', en: 'Madam, please come in and have a seat on this chair!' } },
      { it: 'Mi scusi, può dirmi da quale binario parte il treno per Torino?', tr: { bn: 'মাফ করবেন, তুরিনগামী ট্রেনটি কোন প্ল্যাটফর্ম থেকে ছাড়বে বলতে পারবেন?', en: 'Excuse me, can you tell me which platform the train to Turin leaves from?' } },
      { it: 'Ragazzi, aprite i libri a pagina ventiquattro e leggete insieme!', tr: { bn: 'সবাই, বইয়ের ২৪ পৃষ্ঠা খোলো এবং একসাথে পড়ো!', en: 'Everyone, open your books to page twenty-four and read together!' } },
      { it: 'Dica pure: come posso esserLe utile oggi?', tr: { bn: 'বলুন: আজ কীভাবে আপনাকে সাহায্য করতে পারি?', en: 'Go ahead please: how may I assist you today?' } },
    ],
    exercises: [
      { id: 'ex-a2-ivl-1', prompt: { bn: 'আনুষ্ঠানিক Lei আদেশ:', en: 'Formal Lei command:' }, it: 'Signore, ___ questo modulo prima di consegnarlo.', options: ['compila', 'compili', 'compilate', 'compilare'], answer: 1, explanation: { bn: 'আনুষ্ঠানিক আদেশ: compilare (-are) + Lei → compili।', en: 'Formal Lei swaps -are ending to -i: compili.' } },
      { id: 'ex-a2-ivl-2', prompt: { bn: 'আনুষ্ঠানিক ভদ্র অনুমতি:', en: 'Formal polite excuse:' }, it: '___, signora: ha l’ora esatta?', options: ['Scusami', 'Mi scusi', 'Scusati', 'Scusare'], answer: 1, explanation: { bn: 'Lei-তে সর্বনাম আগে বসে: Mi scusi।', en: 'Pronouns precede formal Lei commands: Mi scusi.' } },
    ],
    storyIds: ['st-a2-14'],
    vocabKeys: ['w:A2:accomodarsi', 'w:A2:compilare'],
  },
  'imperativo-negativo': {
    rule: {
      bn: 'না-বাচক আদেশ — tu: non + ইনফিনিটিভ (Non partire!, Non ti preoccupare! / Non preoccuparti!); voi: non + আদেশ (Non dimenticate!); Lei: non + Lei আদেশ (Non si preoccupi!, Non esca!)।',
      en: 'Negative tu uses non + infinitive (Non correre!, Non dimenticarti!). Negative voi and Lei put non before the affirmative form: Non aprite!, Non vada via!',
    },
    commonMistakes: [
      { wrong: 'Marco, non prendi quella strada!', right: 'Marco, non prendere quella strada!', note: { bn: 'tu না-বাচক আদেশে non + infinitive বসে।', en: 'Negative tu imperative always takes non + infinitive.' } },
    ],
    examples: [
      { it: 'Non dimenticare di portare la tessera sanitaria dal medico!', tr: { bn: 'ডাক্তারের কাছে হেলথ কার্ড নিতে ভুলো না!', en: 'Don’t forget to bring your health card to the doctor!' } },
      { it: 'Ragazzi, non fate tardi stasera perché domani abbiamo scuola.', tr: { bn: 'ছেলেমেয়েরা, আজ রাতে দেরি কোরো না কারণ কাল আমাদের স্কুল আছে।', en: 'Kids, don’t be late tonight because we have school tomorrow.' } },
      { it: 'Signore, non si preoccupi: il Suo pacco arriverà domani mattina.', tr: { bn: 'জনাব, চিন্তা করবেন না: আপনার পার্সেল কাল সকালেই পৌঁছে যাবে।', en: 'Sir, do not worry: your parcel will arrive tomorrow morning.' } },
      { it: 'Non toccare i vetri caldi del forno senza guanti!', tr: { bn: 'গ্লাভস ছাড়া ওভেনের গরম কাঁচ স্পর্শ কোরো না!', en: 'Do not touch the hot glass of the oven without gloves!' } },
    ],
    exercises: [
      { id: 'ex-a2-impn-1', prompt: { bn: 'tu না-বাচক:', en: 'Negative tu:' }, it: 'Luca, non ___ la finestra perché entra vento!', options: ['apri', 'apra', 'aprire', 'aprite'], answer: 2, explanation: { bn: 'tu না-বাচক = non + infinito (aprire)।', en: 'Negative tu uses non + infinitive.' } },
      { id: 'ex-a2-impn-2', prompt: { bn: 'Lei না-বাচক:', en: 'Negative formal Lei:' }, it: 'Signora, ___ preoccupi, c’è ancora tempo!', options: ['non ti', 'non si', 'non', 'non vi'], answer: 1, explanation: { bn: 'Lei প্রতিফলক সর্বনাম si আগে বসে: non si preoccupi।', en: 'Formal reflexive imperative takes non si + subjunctive/command.' } },
    ],
    storyIds: ['st-a2-14'],
    vocabKeys: ['w:A2:la tessera sanitaria', 'w:A2:preoccuparsi'],
  },
  'quantificatori-tutto-ogni-alcuni': {
    rule: {
      bn: 'ogni / qualche (অপরিবর্তিত) + একবচন বিশেষ্য; alcuni/alcune + বহুবচন বিশেষ্য; tutto/a/i/e + নির্দিষ্ট আর্টিকেল + বিশেষ্য। molto, poco, troppo, parecchio বিশেষ্যের আগে লিঙ্গ-বচনে মেলে, কিন্তু বিশেষণ/ক্রিয়ার আগে অপরিবর্তিত থাকে।',
      en: 'ogni & qualche + singular noun; alcuni/e + plural noun; tutto/a/i/e + article + noun. Variable quantifiers (molto, poco, troppo, parecchio) agree with nouns, whereas abbastanza and adjectives-modifying adverbs stay invariable.',
    },
    commonMistakes: [
      { wrong: 'Ho studiato tutto giorno.', right: 'Ho studiato tutto il giorno.', note: { bn: 'tutto-এর পর আর্টিকেল অবশ্যই থাকে: tutto il giorno।', en: 'tutto requires a definite article before the noun.' } },
    ],
    examples: [
      { it: 'Abbiamo fatto tutte le domande necessarie allo sportello.', tr: { bn: 'আমরা কাউন্টারে প্রয়োজনীয় সবগুলো প্রশ্ন করেছি।', en: 'We asked all the necessary questions at the counter.' } },
      { it: 'C’è abbastanza spazio in cucina per un tavolo più grande.', tr: { bn: 'রান্নাঘরে আরও বড় একটি টেবিলের জন্য যথেষ্ট জায়গা আছে।', en: 'There is enough space in the kitchen for a bigger table.' } },
      { it: 'Alcuni colleghi lavorano da casa il lunedì e il venerdì.', tr: { bn: 'কিছু সহকর্মী সোমবার ও শুক্রবার বাসা থেকে কাজ করেন।', en: 'Some colleagues work from home on Mondays and Fridays.' } },
      { it: 'C’era troppa gente in metropolitana alle otto del mattino.', tr: { bn: 'সকাল আটটায় মেট্রোতে অতিরিক্ত ভিড় ছিল।', en: 'There were too many people on the metro at eight in the morning.' } },
    ],
    exercises: [
      { id: 'ex-a2-qta-1', prompt: { bn: 'tutto + আর্টিকেল:', en: 'tutto + article:' }, it: 'Ho camminato per ___ la mattina.', options: ['tutta', 'ogni', 'qualche', 'alcuna'], answer: 0, explanation: { bn: 'la mattina (স্ত্রী একবচন) → tutta la mattina।', en: 'Use tutta before la mattina.' } },
      { id: 'ex-a2-qta-2', prompt: { bn: 'troppo + পুং বহুবচন বিশেষ্য:', en: 'troppo + masc. pl. noun:' }, it: 'Ci sono ___ errori in questo modulo, rifacciamolo.', options: ['troppo', 'troppi', 'troppe', 'ogni'], answer: 1, explanation: { bn: 'gli errori (পুং বহুবচন) → troppi errori।', en: 'Agreement before plural errori: troppi.' } },
    ],
    storyIds: ['st-a2-24'],
    vocabKeys: ['w:A2:il balcone', 'w:A2:il cittadino'],
  },
  'indefiniti-negativi-composti': {
    rule: {
      bn: 'qualcuno (কেউ) ↔ nessuno (কেউ না); qualcosa (কিছু) ↔ niente/nulla (কিছুই না); parecchio/a/i/e (বেশ কিছু / অনেকক্ষণ)। মনে রাখুন: qualcosa ও niente-এর পর বিশেষণ এলে di + পুং একবচন লাগে।',
      en: 'Pair someone/no one (qualcuno/nessuno) and something/nothing (qualcosa/niente). Adjectives modifying qualcosa/niente require di + masculine singular. parecchio/a/i/e conveys "quite a lot / several".',
    },
    commonMistakes: [
      { wrong: 'C’è qualcosa bella in vetrina.', right: 'C’è qualcosa di bello in vetrina.', note: { bn: 'qualcosa + di + পুং একবচন বিশেষণ (di bello)।', en: 'qualcosa always uses di + masculine singular adjective.' } },
    ],
    examples: [
      { it: 'Vuoi mangiare qualcosa di dolce dopo pranzo?', tr: { bn: 'দুপুরের খাবারের পর মিষ্টি কিছু খেতে চাও?', en: 'Do you want to eat something sweet after lunch?' } },
      { it: 'Non preoccuparti, il medico ha detto che non è niente di serio.', tr: { bn: 'চিন্তা কোরো না, ডাক্তার বলেছেন গুরুতর কিছু নয়।', en: 'Do not worry, the doctor said it is nothing serious.' } },
      { it: 'Abbiamo aspettato parecchie ore in aeroporto per colpa della nebbia.', tr: { bn: 'কুয়াশার কারণে বিমানবন্দরে আমাদের বেশ কয়েক ঘণ্টা অপেক্ষা করতে হয়েছে।', en: 'We waited several hours at the airport because of the fog.' } },
      { it: 'Qualcuno sa a che ora apre la segreteria oggi?', tr: { bn: 'আজ সেক্রেটারি অফিস কয়টায় খোলে তা কি কেউ জানে?', en: 'Does anyone know what time the office opens today?' } },
    ],
    exercises: [
      { id: 'ex-a2-inc-1', prompt: { bn: 'গুরুতর কিছু নয়:', en: 'Nothing serious:' }, it: 'Stai tranquillo, non è successo niente ___.', options: ['grave', 'di grave', 'a grave', 'grava'], answer: 1, explanation: { bn: 'niente + di + পুং একবচন বিশেষণ = niente di grave।', en: 'niente requires di + masculine singular adjective.' } },
      { id: 'ex-a2-inc-2', prompt: { bn: 'বেশ কিছু বই:', en: 'Several books:' }, it: 'Ho letto ___ libri interessanti quest’anno.', options: ['parecchio', 'parecchi', 'nessuno', 'qualcuno'], answer: 1, explanation: { bn: 'libri পুং বহুবচন → parecchi।', en: 'Plural libri agrees with parecchi.' } },
    ],
    storyIds: ['st-a2-24'],
    vocabKeys: ['w:A2:la ferita', "w:A1:l'aeroporto"],
  },
  'dimostrativi-a2': {
    rule: {
      bn: 'বিশেষ্যের আগে quello নির্দিষ্ট আর্টিকেলের নিয়ম মেনে চলে: quel, quell’, quello, quella, quei, quegli, quelle। আর একাকী সর্বনাম হলে সবসময় সাধারণ রূপ বসে: questo/a/i/e এবং quello/a/i/e।',
      en: 'Adjectival quello takes definite-article endings before nouns (quel palazzo, quello sconto, quegli uffici). As a standalone pronoun, use quello/quella/quelli/quelle.',
    },
    commonMistakes: [
      { wrong: 'Guarda quel studenti laggiù!', right: 'Guarda quegli studenti laggiù!', note: { bn: 'studenti (s+ব্যঞ্জন বহুবচন) → quegli studenti।', en: 's+consonant plural takes quegli (matching gli).' } },
    ],
    examples: [
      { it: 'In quell’ufficio al piano terra consegnano le tessere dei trasporti.', tr: { bn: 'নিচতলার ঐ অফিসে পরিবহন পাস দেওয়া হয়।', en: 'In that office on the ground floor they issue transport passes.' } },
      { it: 'Quale maglione preferisci, questo verde o quello blu in vetrina?', tr: { bn: 'কোন সোয়েটারটা তোমার বেশি পছন্দ, এই সবুজটা নাকি দোকানের সামনের ঐ নীলটা?', en: 'Which jumper do you prefer, this green one or that blue one in the window?' } },
      { it: 'Quegli appartamenti vicino al parco costano molto di più.', tr: { bn: 'পার্কের কাছের ঐ ফ্ল্যাটগুলোর ভাড়া অনেক বেশি।', en: 'Those apartments near the park cost much more.' } },
      { it: 'Preferisco questi biscotti artigianali a quelli confezionati.', tr: { bn: 'প্যাকেটজাতগুলোর চেয়ে এই হাতে তৈরি বিস্কুটগুলো আমার বেশি পছন্দ।', en: 'I prefer these artisan biscuits to those packaged ones.' } },
    ],
    exercises: [
      { id: 'ex-a2-dim-1', prompt: { bn: 'বিশেষ্যের আগে quello:', en: 'quello before noun:' }, it: 'Mi piace molto ___ zaino nero sullo scaffale.', options: ['quel', 'quello', 'quell’', 'quegli'], answer: 1, explanation: { bn: 'zaino z দিয়ে শুরু → quello zaino।', en: 'z- initial takes quello (like lo zaino).' } },
      { id: 'ex-a2-dim-2', prompt: { bn: 'একাকী সর্বনাম:', en: 'Standalone pronoun:' }, it: 'Le scarpe nere? Preferisco ___ marroni.', options: ['quelli', 'quelle', 'quei', 'quel'], answer: 1, explanation: { bn: 'le scarpe (স্ত্রী বহুবচন সর্বনাম) → quelle।', en: 'Pronoun form matching le scarpe is quelle.' } },
    ],
    storyIds: ['st-a2-19'],
    vocabKeys: ['w:A2:lo scaffale', "w:A2:l'offerta"],
  },
  'congiunzioni-a2': {
    rule: {
      bn: 'দৈনন্দিন জটিলতা ছাড়াই বাক্য জুড়তে: appena + ক্রিয়া ("মাত্রই"); finché + ক্রিয়া ("যতক্ষণ পর্যন্ত/না"); prima di + ইনফিনিটিভ; senza + ইনফিনিটিভ; dopo + পার্টিসিপল (dopo aver/essere + p.p.)।',
      en: 'Everyday A2 clause patterns: appena (as soon as), finché (as long as / until), prima di + infinitive (before), senza + infinitive (without), dopo aver/essere + past participle (after).',
    },
    commonMistakes: [
      { wrong: 'È partito senza salutare nessuno? → Sì, senza ha salutato.', right: 'È partito senza salutare nessuno.', note: { bn: 'senza-এর পর সরাসরি ইনফিনিটিভ বসে।', en: 'senza takes a bare infinitive directly.' } },
    ],
    examples: [
      { it: 'Appena finisco il turno di lavoro, ti mando un messaggio vocale.', tr: { bn: 'কাজের শিফট শেষ হওয়া মাত্রই তোমাকে একটি ভয়েস মেসেজ পাঠাব।', en: 'As soon as I finish my work shift, I’ll send you a voice message.' } },
      { it: 'Aspettiamo al bar qui vicino finché smette di piovere.', tr: { bn: 'বৃষ্টি থামা পর্যন্ত আমরা কাছের এই ক্যাফেতে অপেক্ষা করি।', en: 'Let’s wait at the café nearby until it stops raining.' } },
      { it: 'Prima di firmare il contratto, leggi con attenzione tutte le pagine.', tr: { bn: 'চুক্তিটি সই করার আগে সবগুলো পাতা মনোযোগ দিয়ে পড়ো।', en: 'Before signing the contract, read all pages carefully.' } },
      { it: 'È uscito di corsa dall’appartamento senza prendere le chiavi.', tr: { bn: 'চাবি না নিয়েই সে তাড়াহুড়ো করে ফ্ল্যাট থেকে বের হয়ে গেছে।', en: 'He rushed out of the flat without taking the keys.' } },
    ],
    exercises: [
      { id: 'ex-a2-cnj-1', prompt: { bn: 'না করে (senza + ?):', en: 'Without doing:' }, it: 'Sono andato al lavoro ___ fare colazione.', options: ['senza', 'prima', 'finché', 'appena'], answer: 0, explanation: { bn: 'senza + infinito = নাস্তা না করেই।', en: 'senza + infinitive means "without doing".' } },
      { id: 'ex-a2-cnj-2', prompt: { bn: 'মাত্রই (appena):', en: 'As soon as:' }, it: '___ arrivi a Milano, fammi uno squillo!', options: ['Finché', 'Appena', 'Senza', 'Prima di'], answer: 1, explanation: { bn: 'পৌঁছানো মাত্রই = Appena arrivi।', en: '"As soon as" = Appena.' } },
    ],
    storyIds: ['st-a2-25'],
    vocabKeys: ['w:A2:il turno', 'w:A2:firmare'],
  },
  'condizionale-reale-se-a2': {
    rule: {
      bn: 'A2 স্তরের বাস্তব ও সম্ভাব্য শর্তবাক্য: Se + বর্তমান কাল → মূল অংশে বর্তমান, ভবিষ্যৎ অথবা অনুজ্ঞা (imperativo) বসে। মনে রাখবেন: ইংরেজির "If it rains, I will stay" = Se piove, resterò / resto a casa।',
      en: 'First-type real conditional (strictly A2): Se + present tense → main clause in present (general truth), future (plan), or imperative (advice/instruction).',
    },
    commonMistakes: [
      { wrong: 'Se avrai tempo domani, andremo al mare.', right: 'Se hai tempo domani, andremo al mare.', note: { bn: 'সাধারণ কথাবার্তায় se-এর অংশে বর্তমান কাল সবচেয়ে প্রাকৃতিক।', en: 'Present tense after se is standard in everyday Italian.' } },
    ],
    examples: [
      { it: 'Se domani c’è il sole, facciamo una gita al lago di Garda.', tr: { bn: 'আগামীকাল রোদ থাকলে আমরা গার্দা হ্রদে ঘুরতে যাব।', en: 'If it is sunny tomorrow, we will go on a trip to Lake Garda.' } },
      { it: 'Se hai bisogno di aiuto con i documenti, chiedi pure allo sportello!', tr: { bn: 'কাগজপত্রে সাহায্যের দরকার হলে কাউন্টারে নির্দ্বিধায় জিজ্ঞেস করো!', en: 'If you need help with the paperwork, just ask at the desk!' } },
      { it: 'Se perdi il treno delle otto, dovrai aspettare quello delle nove.', tr: { bn: 'আটটার ট্রেন মিস করলে তোমাকে নয়টার ট্রেনের জন্য অপেক্ষা করতে হবে।', en: 'If you miss the eight o’clock train, you will have to wait for the nine o’clock one.' } },
      { it: 'Se prendi questo sciroppo la sera, dormirai molto meglio.', tr: { bn: 'সন্ধ্যায় এই সিরাপটি খেলে তুমি অনেক ভালো ঘুমাতে পারবে।', en: 'If you take this syrup in the evening, you will sleep much better.' } },
    ],
    exercises: [
      { id: 'ex-a2-crs-1', prompt: { bn: 'বাস্তব শর্ত + ভবিষ্যৎ:', en: 'Real condition + future:' }, it: 'Se studi ogni giorno, ___ presto l’italiano.', options: ['parli', 'parlerai', 'parlavi', 'parlassi'], answer: 1, explanation: { bn: 'বাস্তব শর্ত: Se + presente → futuro (parlerai)।', en: 'Real condition pairs present with future parlerai.' } },
      { id: 'ex-a2-crs-2', prompt: { bn: 'বাস্তব শর্ত + নির্দেশ:', en: 'Real condition + command:' }, it: 'Se fa freddo stasera, ___ il riscaldamento!', options: ['accenderò', 'accendi', 'accendevi', 'accendessi'], answer: 1, explanation: { bn: 'নির্দেশ বোঝাতে imperativo (accendi!)।', en: 'Instruction in main clause uses imperative accendi!' } },
    ],
    storyIds: ['st-a2-14', 'st-a2-22'],
    vocabKeys: ['w:A2:la gita', 'w:A2:il riscaldamento'],
  },
};
