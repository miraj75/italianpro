import type { LevelAssessment } from '../academyTypes';

export const B2_ASSESSMENTS: LevelAssessment[] = [
  {
    id: 'assess-b2-u1',
    level: 'B2',
    unitNumber: 1,
    title: { bn: 'B2 ইউনিট ১ মূল্যায়ন: উন্নত congiuntivo, মিশ্র শর্ত ও ঐতিহাসিক কাল', en: 'B2 Unit 1 Assessment: Subjunctive Mastery & Conditionals' },
    passScore: 0.7,
    questions: [
      { id: 'b2u1q1', prompt: { bn: 'Vorrei che-র পরে সঠিক congiuntivo:', en: 'Subjunctive sequence after Vorrei che:' }, it: 'Avrei preferito che la commissione ___ valutato il ricorso con calma.', options: ['abbia', 'avesse', 'avrebbe', 'ha'], answer: 1, explanation: { bn: 'Avrei preferito che-র পরে পূর্ববর্তী কাজে congiuntivo trapassato (avesse valutato) বসে।', en: 'Past conditional main verb + prior action takes avesse valutato.' } },
      { id: 'b2u1q2', prompt: { bn: 'মিশ্র শর্তসাপেক্ষ বাক্য (অতীত → বর্তমান):', en: 'Mixed conditional (past condition → present result):' }, it: 'Se avessi accettato quell’incarico allora, oggi ___ a Milano.', options: ['avrei vissuto', 'vivrei', 'vivevo', 'vivessi'], answer: 1, explanation: { bn: 'oggi বর্তমান ফলাফল নির্দেশ করায় condizionale presente (vivrei) বসে।', en: 'oggi requires present conditional vivrei.' } },
      { id: 'b2u1q3', prompt: { bn: 'স্বাধীন বাক্যে অতীতের আক্ষেপ:', en: 'Independent subjunctive of past regret:' }, it: 'Se solo ___ il backup prima dell’attacco informatico!', options: ['avremmo fatto', 'avessimo fatto', 'facessimo', 'facciamo'], answer: 1, explanation: { bn: 'Se solo + congiuntivo trapassato।', en: 'Se solo takes pluperfect subjunctive for past regret.' } },
      { id: 'b2u1q4', prompt: { bn: 'সংবাদপত্রে অসমর্থিত অভিযোগ (condizionale giornalistico):', en: 'Journalistic conditional of unverified report:' }, it: 'Secondo la procura, la società ___ i bilanci.', options: ['ha falsificato', 'avrebbe falsificato', 'falsificava', 'falsifichi'], answer: 1, explanation: { bn: 'তদন্তাধীন তথ্যে avrebbe falsificato ব্যবহৃত হয়।', en: 'Journalistic distancing uses past conditional.' } },
    ],
  },
  {
    id: 'assess-b2-u2',
    level: 'B2',
    unitNumber: 2,
    title: { bn: 'B2 ইউনিট ২ মূল্যায়ন: কর্মবাচ্য, অসমাপিকা খণ্ডবাক্য ও বিশেষ্যীকরণ', en: 'B2 Unit 2 Assessment: Passives, Marked Syntax & Nominalisation' },
    passScore: 0.7,
    questions: [
      { id: 'b2u2q1', prompt: { bn: 'যৌগিক কালে ক্ষতি অর্থে কর্মবাচ্য:', en: 'Compound passive expressing accidental loss:' }, it: 'Durante l’alluvione molti volumi antichi sono ___ perduti.', options: ['andati', 'venuti', 'fatti', 'stati venuti'], answer: 0, explanation: { bn: 'ক্ষতি/নষ্ট হওয়া বোঝাতে sono andati perduti বসে।', en: 'Accidental loss uses andare + participle.' } },
      { id: 'b2u2q2', prompt: { bn: 'প্রতিফলক ক্রিয়ায় নৈর্ব্যক্তিক অতীত:', en: 'Impersonal past with reflexive verb:' }, it: 'Solo dopo la crisi ___ resi conto dei rischi.', options: ['si si è', 'ci si è', 'ci si ha', 'si sono'], answer: 1, explanation: { bn: 'si + si → ci si è resi conto।', en: 'Impersonal reflexive takes ci si è + plural participle.' } },
      { id: 'b2u2q3', prompt: { bn: 'বামে কর্ম স্থানান্তরে পুনরাবৃত্তি:', en: 'Resumptive clitic in left dislocation:' }, it: 'La perizia tecnica ___ depositata ieri in tribunale.', options: ['l’abbiamo', 'lo abbiamo', 'ne abbiamo', 'abbiamo'], answer: 0, explanation: { bn: 'la perizia স্ত্রী একবচন হওয়ায় l’abbiamo + depositata।', en: 'Feminine singular object takes l’ and feminine agreement.' } },
      { id: 'b2u2q4', prompt: { bn: 'স্বাধীন পাস্ট পার্টিসিপল খণ্ডবাক্যে মিল:', en: 'Agreement in absolute participle clause:' }, it: '___ la legge, i mercati hanno reagito subito.', options: ['Promulgato', 'Promulgata', 'Promulgate', 'Promulgati'], answer: 1, explanation: { bn: 'la legge স্ত্রী একবচন হওয়ায় Promulgata হবে।', en: 'Participle agrees with feminine singular la legge.' } },
    ],
  },
  {
    id: 'assess-b2-u3',
    level: 'B2',
    unitNumber: 3,
    title: { bn: 'B2 ইউনিট ৩ মূল্যায়ন: সংযোজক, দ্বি-সহায়ক ক্রিয়া, মডাল ও প্রিপোজিশন', en: 'B2 Unit 3 Assessment: Connectors, Modals & Verbal Government' },
    passScore: 0.7,
    questions: [
      { id: 'b2u3q1', prompt: { bn: 'বাস্তব প্রমাণ সূচক সংযোজক:', en: 'Connector introducing confirming evidence:' }, it: 'La siccità dura da mesi, ___ le riserve idriche sono ai minimi.', options: ['qualora', 'tant’è vero che', 'a meno che', 'sebbene'], answer: 1, explanation: { bn: 'tant’è vero che আগের বক্তব্যের বাস্তব প্রমাণ দেয়।', en: 'tant’è vero che provides empirical proof.' } },
      { id: 'b2u3q2', prompt: { bn: 'অকর্মক পরিবর্তন অর্থে সহায়ক:', en: 'Intransitive change auxiliary:' }, it: 'Negli ultimi mesi i costi dell’energia sono ___.', options: ['aumentato', 'aumentati', 'aumentate', 'avuto aumentati'], answer: 1, explanation: { bn: 'i costi পুং বহুবচন অকর্মক হওয়ায় sono aumentati।', en: 'Masculine plural i costi takes sono aumentati.' } },
      { id: 'b2u3q3', prompt: { bn: 'আনুষ্ঠানিক Lei অনুজ্ঞা:', en: 'Formal Lei imperative with clitics:' }, it: 'Avvocato, ___ pure via PEC entro venerdì.', options: ['inviamelo', 'me lo invii', 'me lo mandi tu', 'lo inviami'], answer: 1, explanation: { bn: 'Lei অনুজ্ঞায় সর্বনাম ক্রিয়ার আগে বসে: me lo invii।', en: 'Formal Lei puts pronouns before the verb.' } },
      { id: 'b2u3q4', prompt: { bn: 'ক্রিয়ার নির্দিষ্ট প্রিপোজিশন:', en: 'Preposition governed by attenersi:' }, it: 'Tutti gli operatori devono attenersi ___ protocollo.', options: ['col', 'al', 'nel', 'dal'], answer: 1, explanation: { bn: 'attenersi সর্বদা a নেয় → al protocollo।', en: 'attenersi takes preposition a.' } },
    ],
  },
  {
    id: 'assess-b2-u4',
    level: 'B2',
    unitNumber: 4,
    title: { bn: 'B2 ইউনিট ৪ মূল্যায়ন: পরিভাষা, অলংকার, সংহতি ও কূটনৈতিক বিতর্ক', en: 'B2 Unit 4 Assessment: Registers, Rhetoric & Essay Craft' },
    passScore: 0.7,
    questions: [
      { id: 'b2u4q1', prompt: { bn: 'অর্থনৈতিক পরিভাষায় সঠিক ক্রিয়া:', en: 'Economic collocation for allocating funds:' }, it: 'Il consiglio ha deliberato di ___ fondi per la transizione.', options: ['stanziare', 'abrogare', 'stagionare', 'confutare'], answer: 0, explanation: { bn: 'তহবিল বরাদ্দ = stanziare fondi।', en: 'stanziare means to allocate funds.' } },
      { id: 'b2u4q2', prompt: { bn: 'লিটোটেসের প্রকৃত অর্থ:', en: 'True meaning of the litotes "non trascurabile":' }, it: 'Un impatto finanziario non trascurabile significa:', options: ['del tutto nullo', 'molto rilevante', 'vietato dalla legge', 'provvisorio'], answer: 1, explanation: { bn: 'নগণ্য নয় = অত্যন্ত উল্লেখযোগ্য।', en: 'Negated minimal adjective intensifies meaning.' } },
      { id: 'b2u4q3', prompt: { bn: 'যৌগিক প্রিপোজিশনাল পদগুচ্ছ:', en: 'Complex preposition meaning "at the expense of":' }, it: 'Non si può tagliare la qualità ___ sicurezza.', options: ['alla luce della', 'a scapito della', 'a beneficio della', 'ai sensi della'], answer: 1, explanation: { bn: 'a scapito di = ক্ষতি বা বিনিময়ে।', en: 'a scapito di means at the expense of.' } },
      { id: 'b2u4q4', prompt: { bn: 'বিতর্কে ভদ্রভাবে দ্বিমত পোষণ (mitigazione):', en: 'Diplomatic hedging in debate:' }, it: 'Quale apertura attenua una critica professionale?', options: ['Mi permetterei di osservare che…', 'Sbaglia completamente…', 'Questi dati sono falsi…', 'È evidente che non capisce…'], answer: 0, explanation: { bn: 'Mi permetterei di osservare che... ভদ্র ও কূটনৈতিক রীতি।', en: 'Conditional hedging softens disagreement professionally.' } },
    ],
  },
  {
    id: 'assess-b2-final',
    level: 'B2',
    title: { bn: 'B2 চূড়ান্ত পরীক্ষা (সম্পূর্ণ আপার-ইন্টারমিডিয়েট মূল্যায়ন)', en: 'B2 Final Comprehensive Upper-Intermediate Assessment' },
    passScore: 0.75,
    questions: [
      { id: 'b2f1', prompt: { bn: 'কালের সামঞ্জস্য (concordanza avanzata):', en: 'Advanced sequence of tenses:' }, it: 'Avrei preferito che i soci ___ esaminato il bilancio prima del voto.', options: ['abbiano', 'avessero', 'avrebbero', 'ebbero'], answer: 1, explanation: { bn: 'Avrei preferito che + পূর্ববর্তী কাজ → congiuntivo trapassato (avessero esaminato)।', en: 'Prior event after conditional main verb takes avessero.' } },
      { id: 'b2f2', prompt: { bn: 'মিশ্র শর্তসাপেক্ষ বাক্য:', en: 'Mixed conditional (present trait → past action):' }, it: 'Se tu fossi meno impulsivo, ieri non ___ rotto l’intesa.', options: ['avresti', 'avessi', 'avevi', 'avrai'], answer: 0, explanation: { bn: 'গতকালের ফলাফলে condizionale passato (avresti rotto)।', en: 'Past outcome takes condizionale passato.' } },
      { id: 'b2f3', prompt: { bn: 'সাংবাদিকতায় অসমর্থিত তথ্য:', en: 'Journalistic conditional:' }, it: 'Secondo indiscrezioni, il decreto ___ approvato entro venerdì.', options: ['sarebbe', 'fosse', 'sarà stato', 'era'], answer: 0, explanation: { bn: 'অনিশ্চিত সরকারি খবরে sarebbe approvato।', en: 'Unconfirmed current news uses present conditional sarebbe.' } },
      { id: 'b2f4', prompt: { bn: 'বিশেষ্যীকরণ (nominalizzazione):', en: 'Formal nominalisation:' }, it: 'Trasforma «Poiché sono aumentate le aliquote»:', options: ['A causa dell’aumento delle aliquote', 'Per l’aumentare le aliquote', 'Aumentando le aliquote', 'Che le aliquote aumentino'], answer: 0, explanation: { bn: 'বিমূর্ত বিশেষ্য পদ A causa dell’aumento delle aliquote।', en: 'Nominal phrase uses l’aumento.' } },
      { id: 'b2f5', prompt: { bn: 'কর্তা জোর দেওয়া বিভক্ত বাক্য:', en: 'Subject cleft sentence:' }, it: 'Sono state le associazioni dei consumatori ___ presentare il reclamo.', options: ['che a', 'a', 'di', 'per'], answer: 1, explanation: { bn: 'অসমাপিকা বিভক্ত বাক্যে a + ইনফিনিটিভ।', en: 'Subject cleft uses a + infinitive.' } },
      { id: 'b2f6', prompt: { bn: 'অলংকারিক negazione + congiuntivo:', en: 'Pleonastic negation with comparison:' }, it: 'Il negoziato è più complesso di quanto non ___ a prima vista.', options: ['appare', 'appaia', 'apparirà', 'apparisse ieri'], answer: 1, explanation: { bn: 'di quanto non-এর পরে congiuntivo (appaia)।', en: 'Clausal comparison takes subjunctive appaia.' } },
      { id: 'b2f7', prompt: { bn: 'বিশেষণের অবস্থান ভেদে অর্থ:', en: 'Pre-nominal vs post-nominal adjective:' }, it: '«Un alto magistrato» indica:', options: ['un magistrato di statura alta', 'un magistrato di grado elevato', 'un magistrato molto giovane', 'un magistrato in pensione'], answer: 1, explanation: { bn: 'বিশেষ্যের আগে alto পদমর্যাদায় উচ্চ বোঝায়।', en: 'Pre-nominal alto means high-ranking.' } },
      { id: 'b2f8', prompt: { bn: 'অ্যানাফোরিক সংহতি (incapsulatore):', en: 'Anaphoric encapsulator:' }, it: 'I costi energetici sono raddoppiati; ___ ha ridotto i margini.', options: ['tale rialzo', 'quest’ultima', 'costei', 'tuttavia'], answer: 0, explanation: { bn: 'পূর্বের ঘটনাকে সংক্ষেপে ধরে রাখতে tale rialzo বসে।', en: 'tale rialzo encapsulates the doubling of costs.' } },
    ],
  },
];
