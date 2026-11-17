import type { AcademyExamQuestion, AcademyModuleId } from '../academy/types';
import type { Tr } from '../types';

export type A2CommunicationModuleId =
  | 'a2-housing'
  | 'a2-health'
  | 'a2-travel'
  | 'a2-work-social'
  | 'a2-functional-comm';

export interface A2CommExpression {
  id: string;
  it: string;
  meaning: Tr;
  phoneticBn: string;
  exampleIt: string;
  exampleTr: Tr;
}

export interface A2CommDialogueLine {
  speaker: string;
  it: string;
  tr: Tr;
}

export interface A2CommDialogue {
  id: string;
  title: Tr;
  setting: Tr;
  lines: A2CommDialogueLine[];
  checkQuestion: Tr;
  checkOptions: Tr[];
  checkAnswer: number;
}

export interface A2FunctionalFrame {
  id: string;
  situation: Tr;
  phrases: { it: string; tr: Tr }[];
}

export interface A2CommunicationModuleData {
  id: A2CommunicationModuleId;
  expressions: A2CommExpression[];
  dialogues: A2CommDialogue[];
  functionalFrames: A2FunctionalFrame[];
  questions: AcademyExamQuestion[];
}

function q(
  id: string,
  prompt: Tr,
  it: string | undefined,
  options: [string, string, string, string],
  answer: number,
  explanation: Tr,
  localizedOptions?: { bn: string[]; en: string[]; it: string[] },
): AcademyExamQuestion {
  const prefix = id.split('-')[2];
  const moduleId: AcademyModuleId =
    prefix === 'h'
      ? 'a2-housing'
      : prefix === 'm'
        ? 'a2-health'
        : prefix === 't'
          ? 'a2-travel'
          : prefix === 'w'
            ? 'a2-work-social'
            : 'a2-functional-comm';
  return { id, moduleId, prompt, it, options, localizedOptions, answer, explanation };
}

export const A2_HOUSING_DATA: A2CommunicationModuleData = {
  id: 'a2-housing',
  expressions: [
    {
      id: 'h-exp-1',
      it: 'cercare casa in affitto',
      meaning: { bn: 'ভাড়ার জন্য বাসা খোঁজা', en: 'to look for a flat to rent' },
      phoneticBn: 'চেরকারে কাজা ইন আফফিত্তো',
      exampleIt: 'Cerco una casa in affitto vicino alla stazione.',
      exampleTr: { bn: 'আমি স্টেশনের কাছে ভাড়ার জন্য একটি বাসা খুঁজছি।', en: 'I am looking for a flat to rent near the station.' },
    },
    {
      id: 'h-exp-2',
      it: 'le spese condominiali',
      meaning: { bn: 'ভবনের রক্ষণাবেক্ষণ খরচ', en: 'building / condominium service charges' },
      phoneticBn: 'লে স্পেজে কোনদোমিনিয়ালি',
      exampleIt: 'Le spese condominiali sono incluse nell’affitto mensile?',
      exampleTr: { bn: 'মাসিক ভাড়ার মধ্যে কি ভবনের সার্ভিস চার্জ অন্তর্ভুক্ত?', en: 'Are building charges included in the monthly rent?' },
    },
    {
      id: 'h-exp-3',
      it: 'il deposito cauzionale',
      meaning: { bn: 'নিরাপত্তা জামানত (সিকিউরিটি ডিপোজিট)', en: 'security deposit' },
      phoneticBn: 'ইল দেপোজিতো কাউৎসিওনালে',
      exampleIt: 'Il proprietario chiede due mesi di deposito cauzionale.',
      exampleTr: { bn: 'বাড়িওয়ালা দুই মাসের জামানত চেয়েছেন।', en: 'The landlord asks for a two-month security deposit.' },
    },
    {
      id: 'h-exp-4',
      it: 'la bolletta della luce e del gas',
      meaning: { bn: 'বিদ্যুৎ ও গ্যাসের বিল', en: 'electricity and gas bill' },
      phoneticBn: 'লা বোল্লেত্তা দেল্লা লুচে এ দেল গাস',
      exampleIt: 'Questo mese la bolletta della luce è arrivata puntuale.',
      exampleTr: { bn: 'এই মাসে বিদ্যুৎ বিল সময়মতো এসেছে।', en: 'This month the electricity bill arrived on time.' },
    },
    {
      id: 'h-exp-5',
      it: 'la caldaia non funziona',
      meaning: { bn: 'বয়লার / গরম পানির হিটার কাজ করছে না', en: 'the boiler is not working' },
      phoneticBn: 'লা কালদাইয়া নন ফুনৎসিওনা',
      exampleIt: 'Scusi, la caldaia non funziona e non esce acqua calda.',
      exampleTr: { bn: 'মাফ করবেন, বয়লার কাজ করছে না এবং গরম পানি আসছে না।', en: 'Excuse me, the boiler isn’t working and no hot water comes out.' },
    },
    {
      id: 'h-exp-6',
      it: 'il rubinetto che perde',
      meaning: { bn: 'পানির কল থেকে ফোঁটা ফোঁটা পানি পড়া', en: 'a dripping / leaking tap' },
      phoneticBn: 'ইল রুবিনেত্তো কে পেরদে',
      exampleIt: 'Dobbiamo chiamare l’idraulico per il rubinetto che perde.',
      exampleTr: { bn: 'পানি পড়া কলের জন্য আমাদের মিস্ত্রি ডাকতে হবে।', en: 'We have to call the plumber for the leaking tap.' },
    },
    {
      id: 'h-exp-7',
      it: 'arredato / non arredato',
      meaning: { bn: 'আসবাবপত্রসহ / আসবাবপত্র ছাড়া', en: 'furnished / unfurnished' },
      phoneticBn: 'আররেদাতো / নন আররেদাতো',
      exampleIt: 'L’appartamento è completamente arredato con lavatrice.',
      exampleTr: { bn: 'ফ্ল্যাটটি ওয়াশিং মেশিনসহ সম্পূর্ণ আসবাবপত্রে সাজানো।', en: 'The flat is fully furnished with a washing machine.' },
    },
    {
      id: 'h-exp-8',
      it: 'fare la raccolta differenziata',
      meaning: { bn: 'বর্জ্য আলাদা করে ফেলা', en: 'to sort recycling' },
      phoneticBn: 'ফারে লা রাক্কোলতা দিফ্ফেরেনৎসিয়াতা',
      exampleIt: 'Nel nostro cortile si fa la raccolta differenziata ogni giorno.',
      exampleTr: { bn: 'আমাদের আঙিনায় প্রতিদিন আলাদাভাবে বর্জ্য ফেলা হয়।', en: 'In our courtyard recycling is sorted every day.' },
    },
    {
      id: 'h-exp-9',
      it: 'la pulizia delle scale',
      meaning: { bn: 'সিঁড়ি পরিষ্কার-পরিচ্ছন্নতা', en: 'staircase cleaning' },
      phoneticBn: 'লা পুলিৎসিয়া দেল্লে স্কালে',
      exampleIt: 'A turno facciamo la pulizia delle scale il sabato mattina.',
      exampleTr: { bn: 'শনিবার সকালে আমরা পালা করে সিঁড়ি পরিষ্কার করি।', en: 'We take turns cleaning the stairs on Saturday morning.' },
    },
    {
      id: 'h-exp-10',
      it: 'abbassare la voce dopo le ventidue',
      meaning: { bn: 'রাত দশটার পর আস্তে কথা বলা', en: 'to keep voices down after 10 p.m.' },
      phoneticBn: 'আব্বাসসারে লা ভোচে দোপো লে ভেন্তিদুয়ে',
      exampleIt: 'Per rispetto dei vicini, abbassiamo la musica dopo le ventidue.',
      exampleTr: { bn: 'প্রতিবেশীদের সম্মানে রাত দশটার পর আমরা গান কমিয়ে দিই।', en: 'Out of respect for neighbours, we turn music down after 10 p.m.' },
    },
    {
      id: 'h-exp-11',
      it: 'firmare il contratto di locazione',
      meaning: { bn: 'ভাড়া চুক্তিতে স্বাক্ষর করা', en: 'to sign the rental contract' },
      phoneticBn: 'ফিরমারে ইল কোনত্রাত্তো দি লোকাৎসিওনে',
      exampleIt: 'Domattina firmiamo il contratto di locazione in agenzia.',
      exampleTr: { bn: 'কাল সকালে আমরা এজেন্সিতে ভাড়া চুক্তি সই করব।', en: 'Tomorrow morning we will sign the lease at the agency.' },
    },
    {
      id: 'h-exp-12',
      it: 'dare il preavviso',
      meaning: { bn: 'বাসা ছাড়ার আগাম নোটিশ দেওয়া', en: 'to give advance notice (moving out)' },
      phoneticBn: 'দারে ইল প্রেআভভিজো',
      exampleIt: 'Devo dare tre mesi di preavviso prima di lasciare la stanza.',
      exampleTr: { bn: 'ঘর ছাড়ার আগে আমাকে তিন মাসের আগাম নোটিশ দিতে হবে।', en: 'I must give three months’ notice before leaving the room.' },
    },
  ],
  dialogues: [
    {
      id: 'h-dlg-1',
      title: { bn: 'এজেন্সিতে ফ্ল্যাট দেখা', en: 'Viewing a flat with an agent' },
      setting: { bn: 'রিয়েল এস্টেট এজেন্সি', en: 'Real estate viewing' },
      lines: [
        { speaker: 'Inquilino', it: 'Buongiorno, questo bilocale al terzo piano è molto luminoso! L’affitto include le spese condominiali?', tr: { bn: 'শুভ সকাল, তিনতলার এই দুই রুমের ফ্ল্যাটটি খুব আলোকিত! ভাড়ার মধ্যে কি সার্ভিস চার্জ আছে?', en: 'Good morning, this third-floor one-bedroom flat is very bright! Does rent include building charges?' } },
        { speaker: 'Agente', it: 'L’affitto è di settecento euro al mese, più ottanta euro di condominio con l’acqua inclusa.', tr: { bn: 'মাসিক ভাড়া ৭০০ ইউরো, সাথে পানি বিলসহ ৮০ ইউরো সার্ভিস চার্জ।', en: 'Rent is 700 euros a month, plus 80 euros for building fees including water.' } },
        { speaker: 'Inquilino', it: 'Capisco. Il riscaldamento è autonomo o centralizzato?', tr: { bn: 'বুঝেছি। হিটিং ব্যবস্থা কি নিজস্ব নাকি কেন্দ্রীয়?', en: 'I see. Is heating independent or central?' } },
        { speaker: 'Agente', it: 'È autonomo, quindi paga solo quello che consuma.', tr: { bn: 'নিজস্ব, তাই যতটুকু ব্যবহার করবেন শুধু ততটুকুরই বিল দেবেন।', en: 'It is independent, so you only pay for what you use.' } },
      ],
      checkQuestion: { bn: 'ফ্ল্যাটের হিটিং ব্যবস্থা কেমন?', en: 'What kind of heating does the flat have?' },
      checkOptions: [
        { bn: 'কেন্দ্রীয় হিটিং', en: 'Central heating' },
        { bn: 'নিজস্ব হিটিং (autonomo)', en: 'Independent heating' },
        { bn: 'কোনো হিটিং নেই', en: 'No heating' },
        { bn: 'ভাড়ার সাথে পুরো ফ্রি', en: 'Completely free' },
      ],
      checkAnswer: 1,
    },
    {
      id: 'h-dlg-2',
      title: { bn: 'বয়লার নষ্ট হওয়ায় বাড়িওয়ালাকে ফোন', en: 'Calling the landlord about a broken boiler' },
      setting: { bn: 'ফোন আলাপ', en: 'Phone call' },
      lines: [
        { speaker: 'Inquilino', it: 'Pronto signor Verdi? Mi scusi, stamattina la caldaia non parte e non abbiamo acqua calda.', tr: { bn: 'হ্যালো জনাব ভার্দি? মাফ করবেন, আজ সকালে বয়লার চালু হচ্ছে না এবং গরম পানি নেই।', en: 'Hello Mr Verdi? Excuse me, this morning the boiler won’t start and we have no hot water.' } },
        { speaker: 'Proprietario', it: 'Sul display vede qualche codice di errore rosso?', tr: { bn: 'ডিসপ্লেতে কি কোনো লাল এরর কোড দেখাচ্ছে?', en: 'Do you see any red error code on the display?' } },
        { speaker: 'Inquilino', it: 'Sì, lampeggia la scritta E04 e la pressione è a zero.', tr: { bn: 'হ্যাঁ, E04 লেখাটি জ্বলছে-নিভছে এবং প্রেশার শূন্যে আছে।', en: 'Yes, E04 is flashing and pressure is at zero.' } },
        { speaker: 'Proprietario', it: 'Va bene, chiamo subito il tecnico e Le faccio sapere l’orario esatto.', tr: { bn: 'ঠিক আছে, আমি এখনই টেকনিশিয়ানকে ফোন করছি এবং সঠিক সময় জানাচ্ছি।', en: 'Okay, I’ll call the technician right now and let you know the exact time.' } },
      ],
      checkQuestion: { bn: 'বাড়িওয়ালা কী করবেন?', en: 'What will the landlord do?' },
      checkOptions: [
        { bn: 'সাথে সাথে টেকনিশিয়ানকে ডাকবেন', en: 'Call the technician immediately' },
        { bn: 'বাসা ছাড়তে বলবেন', en: 'Ask them to move out' },
        { bn: 'পরের সপ্তাহে আসবেন', en: 'Come next week' },
        { bn: 'ভাড়া বাড়িয়ে দেবেন', en: 'Increase the rent' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'h-dlg-3',
      title: { bn: 'বর্জ্য পৃথকীকরণের নিয়ম জানা', en: 'Learning building recycling rules' },
      setting: { bn: 'প্রতিবেশীর সাথে কথা', en: 'Building courtyard' },
      lines: [
        { speaker: 'Nuovo vicino', it: 'Scusa, mi sono trasferito ieri: dove si butta la carta e quando passa il camion?', tr: { bn: 'মাফ কোরো, আমি গতকাল উঠেছি: কাগজ কোথায় ফেলা হয় এবং ট্রাক কবে আসে?', en: 'Excuse me, I moved in yesterday: where does paper go and when is collection?' } },
        { speaker: 'Vicina', it: 'Nel bidone blu in fondo al cortile! La carta si ritira ogni martedì mattina.', tr: { bn: 'আঙিনার শেষ মাথার নীল ডাস্টবিনে! কাগজ প্রতি মঙ্গলবার সকালে সংগ্রহ করা হয়।', en: 'In the blue bin at the end of the courtyard! Paper is collected every Tuesday morning.' } },
        { speaker: 'Nuovo vicino', it: 'E per il vetro e la plastica?', tr: { bn: 'আর কাচ ও প্লাস্টিক?', en: 'And for glass and plastic?' } },
        { speaker: 'Vicina', it: 'Il vetro va nella campana verde in piazza, mentre la plastica va nel sacco giallo il giovedì.', tr: { bn: 'কাচ চত্বরের সবুজ পাত্রে, আর প্লাস্টিক বৃহস্পতিবার হলুদ ব্যাগে।', en: 'Glass goes in the green container on the square, and plastic in the yellow bag on Thursday.' } },
      ],
      checkQuestion: { bn: 'কাগজ কোন রঙের বিনে এবং কবে সংগ্রহ হয়?', en: 'Where and when is paper collected?' },
      checkOptions: [
        { bn: 'নীল বিন, মঙ্গলবার সকালে', en: 'Blue bin, Tuesday morning' },
        { bn: 'সবুজ পাত্র, বৃহস্পতিবার', en: 'Green container, Thursday' },
        { bn: 'হলুদ ব্যাগ, রবিবার', en: 'Yellow bag, Sunday' },
        { bn: 'সাদা বিন, শুক্রবার', en: 'White bin, Friday' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'h-dlg-4',
      title: { bn: 'শেয়ার্ড ফ্ল্যাটে বাজারের তালিকা', en: 'Grocery & chores list with flatmates' },
      setting: { bn: 'শেয়ার্ড রান্নাঘর', en: 'Shared flat kitchen' },
      lines: [
        { speaker: 'Sara', it: 'Ragazzi, abbiamo finito il detersivo per i piatti e la carta igienica.', tr: { bn: 'বন্ধুরা, আমাদের ডিশওয়াশিং সাবান ও টিস্যু শেষ হয়ে গেছে।', en: 'Guys, we have run out of dish soap and toilet paper.' } },
        { speaker: 'Tariq', it: 'Vado io al supermercato verso le cinque, poi dividiamo lo scontrino in tre.', tr: { bn: 'আমি পাঁচটার দিকে সুপারমার্কেটে যাব, পরে রসিদটা তিন ভাগে ভাগ করব।', en: 'I’ll go to the supermarket around five, then we’ll split the receipt three ways.' } },
        { speaker: 'Sara', it: 'Perfetto! Ricordati anche il sale grosso e l’olio d’oliva, se non è troppo pesante.', tr: { bn: 'দারুণ! ভারী না হলে মোটা লবণ আর অলিভ অয়েলও মনে করে আনো।', en: 'Perfect! Remember coarse salt and olive oil too, if it’s not too heavy.' } },
      ],
      checkQuestion: { bn: 'তারিক বাজারের খরচ কীভাবে ভাগ করবেন?', en: 'How will Tariq divide the shopping cost?' },
      checkOptions: [
        { bn: 'পুরোটা নিজেই দেবেন', en: 'Pay it all himself' },
        { bn: 'রসিদ তিনজনের মধ্যে ভাগ করবেন', en: 'Split the receipt three ways' },
        { bn: 'শুধু সারা দেবেন', en: 'Only Sara pays' },
        { bn: 'মালিক দেবেন', en: 'The landlord pays' },
      ],
      checkAnswer: 1,
    },
    {
      id: 'h-dlg-5',
      title: { bn: 'পানির পাইপ মেরামতের অ্যাপয়েন্টমেন্ট', en: 'Scheduling a plumber repair' },
      setting: { bn: 'টেলিফোন কল', en: 'Plumber call' },
      lines: [
        { speaker: 'Cliente', it: 'Buongiorno, sotto il lavello della cucina perde un tubo e bagna tutto il pavimento.', tr: { bn: 'শুভ সকাল, রান্নাঘরের সিঙ্কের নিচের একটি পাইপ থেকে পানি পড়ছে এবং মেঝে ভিজে যাচ্ছে।', en: 'Good morning, a pipe under the kitchen sink is leaking and wetting the floor.' } },
        { speaker: 'Idraulico', it: 'Posso passare oggi pomeriggio tra le quindici e le sedici, va bene?', tr: { bn: 'আমি আজ বিকেলে তিনটা থেকে চারটার মধ্যে আসতে পারি, চলবে?', en: 'I can drop by this afternoon between 3 and 4 p.m., is that okay?' } },
        { speaker: 'Cliente', it: 'Sì, grazie! Chiudo intanto il rubinetto generale dell’acqua?', tr: { bn: 'হ্যাঁ, ধন্যবাদ! ইতিমধ্যে আমি কি মূল পানির চাবি বন্ধ করে রাখব?', en: 'Yes, thanks! Should I shut off the main water valve in the meantime?' } },
        { speaker: 'Idraulico', it: 'Sì, è molto meglio così non fa danni.', tr: { bn: 'হ্যাঁ, তা করলেই ভালো যাতে ক্ষতি না হয়।', en: 'Yes, that’s much better so it causes no damage.' } },
      ],
      checkQuestion: { bn: 'মিস্ত্রি আসার আগে গ্রাহক কী করবেন?', en: 'What will the caller do before the plumber arrives?' },
      checkOptions: [
        { bn: 'মূল পানির ভাল্ব বন্ধ করবেন', en: 'Turn off the main water valve' },
        { bn: 'নতুন সিঙ্ক কিনবেন', en: 'Buy a new sink' },
        { bn: 'বাসা তালা দিয়ে চলে যাবেন', en: 'Lock up and leave' },
        { bn: 'রাত দশটায় ডাকবেন', en: 'Call at 10 p.m.' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'h-dlg-6',
      title: { bn: 'প্রতিবেশীর সাথে শব্দের ব্যাপারে ভদ্র কথা', en: 'Politely asking a neighbour to lower noise' },
      setting: { bn: 'অ্যাপার্টমেন্টের করিডোর', en: 'Apartment corridor' },
      lines: [
        { speaker: 'Vicino A', it: 'Buonasera, mi scusi il disturbo: domani mi sveglio alle cinque per lavoro e sento la televisione molto alta.', tr: { bn: 'শুভ সন্ধ্যা, বিরক্ত করার জন্য মাফ করবেন: কাল কাজের জন্য আমাকে ভোর পাঁচটায় উঠতে হবে আর টিভির শব্দ খুব জোরে আসছে।', en: 'Good evening, excuse me for bothering you: tomorrow I wake up at 5 for work and hear the TV very loudly.' } },
        { speaker: 'Vicino B', it: 'Oh, mi dispiace tantissimo! Non mi sono accorto dell’ora, abbasso subito il volume.', tr: { bn: 'ওহ, আমি খুবই দুঃখিত! সময়ের খেয়াল ছিল না, এখনই শব্দ কমিয়ে দিচ্ছি।', en: 'Oh, I am so sorry! I didn’t notice the time, I’ll turn down the volume right away.' } },
        { speaker: 'Vicino A', it: 'Grazie mille della comprensione, buona notte!', tr: { bn: 'বুঝতে পারার জন্য অনেক ধন্যবাদ, শুভ রাত্রি!', en: 'Thank you very much for understanding, good night!' } },
      ],
      checkQuestion: { bn: 'প্রতিবেশী B কেমন প্রতিক্রিয়া জানালেন?', en: 'How did Neighbour B react?' },
      checkOptions: [
        { bn: 'দুঃখ প্রকাশ করে সাথে সাথে শব্দ কমালেন', en: 'Apologised and lowered the volume immediately' },
        { bn: 'দরজা বন্ধ করে দিলেন', en: 'Slammed the door' },
        { bn: 'শব্দ আরও বাড়ালেন', en: 'Turned it up louder' },
        { bn: 'পুলিশ ডাকলেন', en: 'Called the police' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'h-dlg-7',
      title: { bn: 'ইন্টারনেট ও ওয়াই-ফাই সংযোগ চালু করা', en: 'Activating home Wi-Fi internet' },
      setting: { bn: 'কাস্টমার সার্ভিস', en: 'Internet provider desk' },
      lines: [
        { speaker: 'Cliente', it: 'Salve, mi sono appena trasferito in via Mazzini 14 e vorrei attivare la fibra a casa.', tr: { bn: 'নমস্কার, আমি সবেমাত্র ভিয়া মাজ্জিনি ১৪-তে উঠেছি এবং বাসায় ফাইবার ইন্টারনেট চালু করতে চাই।', en: 'Hello, I just moved to 14 Via Mazzini and would like to activate home fibre.' } },
        { speaker: 'Operatore', it: 'Controllo subito la copertura... Sì, l’edificio è già collegato! Ha con sé il documento e il codice fiscale?', tr: { bn: 'আমি এখনই কভারেজ দেখছি... হ্যাঁ, ভবনটি ইতিমধ্যে সংযুক্ত! আপনার কাছে কি আইডি ও ট্যাক্স কোড আছে?', en: 'Checking coverage right now... Yes, the building is already connected! Do you have your ID and tax code with you?' } },
        { speaker: 'Cliente', it: 'Eccoli qui. Tra quanti giorni viene il tecnico per il modem?', tr: { bn: 'এই যে নিন। মডেমের জন্য টেকনিশিয়ান কত দিনের মধ্যে আসবেন?', en: 'Here they are. In how many days will the technician come for the router?' } },
        { speaker: 'Operatore', it: 'Entro quattro giorni lavorativi riceverà un SMS con la data.', tr: { bn: 'চার কার্যদিবসের মধ্যে আপনি তারিখসহ একটি এসএমএস পাবেন।', en: 'Within four working days you will receive an SMS with the date.' } },
      ],
      checkQuestion: { bn: 'গ্রাহক কবে টেকনিশিয়ানের তারিখ জানতে পারবেন?', en: 'How will the customer learn the installation date?' },
      checkOptions: [
        { bn: 'চার কার্যদিবসের মধ্যে এসএমএসের মাধ্যমে', en: 'Via SMS within four working days' },
        { bn: 'এক মাস পরে চিঠিতে', en: 'By letter a month later' },
        { bn: 'নিজেই অফিসে গিয়ে', en: 'In person next year' },
        { bn: 'ভবনে ফাইবার নেই', en: 'There is no fibre available' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'h-dlg-8',
      title: { bn: 'ভাড়ার রুম ছেড়ে দেওয়ার নোটিশ দেওয়া', en: 'Giving notice to leave a rented room' },
      setting: { bn: 'বাড়িওয়ালার সাথে সাক্ষাৎ', en: 'Meeting landlord' },
      lines: [
        { speaker: 'Inquilina', it: 'Buongiorno signora, ho trovato un lavoro a Verona e purtroppo devo lasciare la stanza fra tre mesi.', tr: { bn: 'শুভ সকাল ম্যাডাম, আমি ভেরোনায় একটি চাকরি পেয়েছি এবং দুর্ভাগ্যবশত তিন মাস পর রুমটি ছাড়তে হবে।', en: 'Good morning madam, I found a job in Verona and unfortunately have to leave the room in three months.' } },
        { speaker: 'Proprietaria', it: 'Peccato, ma capisco! Mi mandi una raccomandata o una PEC così rispettiamo i termini del contratto.', tr: { bn: 'দুঃখজনক, তবে বুঝতে পারছি! চুক্তির নিয়ম মেনে আমাকে একটি রেজিস্টার্ড চিঠি বা PEC পাঠিয়ে দেবেন।', en: 'A pity, though I understand! Send me a registered letter or PEC so we follow the contract terms.' } },
        { speaker: 'Inquilina', it: 'Certamente, gliela mando oggi pomeriggio. La caparra torna l’ultimo giorno?', tr: { bn: 'অবশ্যই, আজ বিকেলেই পাঠিয়ে দেব। জামানত কি শেষ দিন ফেরত পাব?', en: 'Certainly, I’ll send it this afternoon. Does the deposit come back on the last day?' } },
        { speaker: 'Proprietaria', it: 'Sì, dopo il controllo dell’inventario Le restituisco tutto il deposito.', tr: { bn: 'হ্যাঁ, আসবাবপত্র পরীক্ষা করার পর আপনার পুরো জামানত ফেরত দিয়ে দেব।', en: 'Yes, after checking the inventory I will return the full deposit.' } },
      ],
      checkQuestion: { bn: 'জামানত ফেরত পাওয়ার শর্ত কী?', en: 'When is the deposit returned?' },
      checkOptions: [
        { bn: 'শেষ দিন আসবাবপত্র/রুম পরীক্ষার পর', en: 'After the final inventory check' },
        { bn: 'চাকরি পাওয়ার সাথে সাথে', en: 'Before moving in' },
        { bn: 'কখনোই ফেরত পাওয়া যায় না', en: 'Never returned' },
        { bn: 'এক বছর পর', en: 'One year later' },
      ],
      checkAnswer: 0,
    },
  ],
  functionalFrames: [
    {
      id: 'h-frm-1',
      situation: { bn: 'বাড়ি/রুম ভাড়ার বিষয়ে প্রশ্ন করা', en: 'Asking about rent & bills' },
      phrases: [
        { it: 'Le spese condominiali e il riscaldamento sono inclusi?', tr: { bn: 'সার্ভিস চার্জ এবং হিটিং কি অন্তর্ভুক্ত?', en: 'Are building fees and heating included?' } },
        { it: 'Quanti mesi di deposito cauzionale servono?', tr: { bn: 'কয় মাসের সিকিউরিটি ডিপোজিট লাগবে?', en: 'How many months of security deposit are needed?' } },
      ],
    },
    {
      id: 'h-frm-2',
      situation: { bn: 'বাসার কোনো সমস্যা জানানো', en: 'Reporting a home repair issue' },
      phrases: [
        { it: 'Mi scusi, in bagno perde un tubo sotto il lavandino.', tr: { bn: 'মাফ করবেন, বাথরুমের বেসিনের নিচের পাইপ থেকে পানি পড়ছে।', en: 'Excuse me, a pipe under the bathroom sink is leaking.' } },
        { it: 'Potrebbe mandare un tecnico domani mattina?', tr: { bn: 'কাল সকালে কি একজন টেকনিশিয়ান পাঠাতে পারবেন?', en: 'Could you send a technician tomorrow morning?' } },
      ],
    },
  ],
  questions: [
    q('q-a2-h-1', { bn: 'ভাড়ার বাসায় গরম পানির হিটার নষ্ট হলে কী বলবেন?', en: 'How do you report a broken boiler?' }, 'Scusi, ___ e non c’è acqua calda.', ['la caldaia non funziona', 'la bolletta è pagata', 'il letto è comodo', 'la finestra è pulita'], 0, { bn: 'la caldaia non funziona = বয়লার কাজ করছে না।', en: 'la caldaia non funziona.' }),
    q('q-a2-h-2', { bn: 'নিরাপত্তা জামানতের সঠিক ইতালিয়ান কোনটি?', en: 'Which means "security deposit"?' }, undefined, ['il deposito cauzionale', 'la raccolta differenziata', 'lo scontrino fiscale', 'il secondo piano'], 0, { bn: 'il deposito cauzionale বা la caparra।', en: 'il deposito cauzionale.' }),
    q('q-a2-h-3', { bn: 'বাসায় পানি পড়া কল ঠিক করতে কাকে ডাকবেন?', en: 'Whom do you call for a leaking tap?' }, 'Per il rubinetto che perde chiamo ___.', ['l’idraulico', 'il farmacista', 'il cameriere', 'il postino'], 0, { bn: 'পানির মিস্ত্রি = l’idraulico।', en: 'Plumber = l’idraulico.' }),
    q('q-a2-h-4', { bn: 'বাসায় আসবাবপত্র আছে কিনা জানতে:', en: 'Asking if a flat is furnished:' }, 'Scusi, l’appartamento è ___?', ['arredato', 'scaduto', 'bagnato', 'ritardato'], 0, { bn: 'আসবাবপত্রসহ = arredato।', en: 'arredato = furnished.' }),
    q('q-a2-h-5', { bn: 'বর্জ্য আলাদা করে ফেলাকে কী বলে?', en: 'What is sorting recycling called?' }, undefined, ['fare la raccolta differenziata', 'fare il preavviso', 'firmare la delega', 'accendere la luce'], 0, { bn: 'বর্জ্য পৃথকীকরণ = la raccolta differenziata।', en: 'la raccolta differenziata.' }),
    q('q-a2-h-6', { bn: 'রুম ছাড়ার আগে নোটিশ দেওয়াকে বলে:', en: 'Giving advance notice to leave a flat:' }, 'Devo dare tre mesi di ___ prima di partire.', ['preavviso', 'affitto', 'condominio', 'lavello'], 0, { bn: 'আগাম নোটিশ = il preavviso।', en: 'Advance notice = preavviso.' }),
    q(
      'q-a2-h-7',
      { bn: '“riscaldamento autonomo” অর্থ কী?', en: 'What does "riscaldamento autonomo" mean?', it: 'Che cosa significa «riscaldamento autonomo»?' },
      undefined,
      ['Independent heating paid per household', 'No heating in the home', 'City-wide district heating', 'Air conditioning only'],
      0,
      { bn: 'নিজস্ব হিটিং যা নিজের মিটারে চলে।', en: 'Independent heating paid per household use.', it: 'Impianto di riscaldamento indipendente gestito dal singolo appartamento.' },
      {
        bn: ['নিজস্ব নিয়ন্ত্রিত হিটিং (নিজের খরচ অনুযায়ী)', 'বাসায় কোনো হিটিং নেই', 'পুরো শহরের হিটিং', 'শীতাতপ নিয়ন্ত্রণ'],
        en: ['Independent heating paid per household', 'No heating in the home', 'City-wide district heating', 'Air conditioning only'],
        it: ['Riscaldamento indipendente con contatore proprio', 'Assenza di riscaldamento in casa', 'Riscaldamento centrale cittadino', 'Solo aria condizionata'],
      },
    ),
    q('q-a2-h-8', { bn: 'বিদ্যুৎ-গ্যাস বিলকে কী বলে?', en: 'Electricity and gas bills are called:', it: 'Come si chiamano le fatture di luce e gas?' }, undefined, ['le bollette', 'le scale', 'le chiavi', 'le tendine'], 0, { bn: 'বিল = la bolletta / le bollette।', en: 'Utility bills = le bollette.', it: 'Le utenze domestiche si pagano con «le bollette».' }),
    q('q-a2-h-9', { bn: 'রাত দশটার পর প্রতিবেশীর সাথে ভদ্র আচরণ:', en: 'Polite rule after 10 p.m.:', it: 'Comportamento educato dopo le 22:00:' }, 'Dopo le ventidue bisogna ___ la musica.', ['abbassare', 'alzare', 'comprare', 'aprire'], 0, { bn: 'আওয়াজ কমানো = abbassare।', en: 'Turn down = abbassare.', it: '«Abbassare» significa ridurre il volume.' }),
    q(
      'q-a2-h-10',
      { bn: '“bilocale” বলতে কেমন ফ্ল্যাট বোঝায়?', en: 'What is a "bilocale"?', it: 'Che tipo di appartamento è un «bilocale»?' },
      undefined,
      ['Two-room flat (living room + 1 bedroom)', 'Six-storey building', 'Only a garage', 'Three-floor shop'],
      0,
      { bn: 'দুই কক্ষের ফ্ল্যাট (বসার ঘর + ১ বেডরুম)।', en: 'Two main rooms: living/kitchen + 1 bedroom.', it: 'Appartamento composto da soggiorno con angolo cottura e una camera da letto.' },
      {
        bn: ['লিভিং রুমসহ ১ বেডরুম (দুই কক্ষের ফ্ল্যাট)', 'ছয় তলা বাড়ি', 'শুধু একটি গ্যারেজ', 'তিন তলা দোকান'],
        en: ['Two-room flat (living room + 1 bedroom)', 'Six-storey building', 'Only a garage', 'Three-floor shop'],
        it: ['Appartamento con soggiorno e una camera da letto', 'Edificio di sei piani', 'Solo un garage', 'Negozio su tre piani'],
      },
    ),
    q('q-a2-h-11', { bn: 'রুম দেখতে সময় চাইতে ভদ্র প্রশ্ন:', en: 'Asking politely to view a flat:' }, 'Quando ___ venire a visitare la casa?', ['potrei', 'potrò fare', 'posso stare', 'sono potuto'], 0, { bn: 'ভদ্র অনুরোধ = Quando potrei venire…?', en: 'Polite request uses potrei.' }),
    q('q-a2-h-12', { bn: 'রুম ছাড়ার আগে আনুষ্ঠানিক চিঠি বা ডিজিটাল মেইল:', en: 'Official notice channel in Italy:' }, 'Mandi una ___ per confermare la disdetta.', ['raccomandata o PEC', 'ricetta medica', 'carta d’imbarco', 'tessera del bus'], 0, { bn: 'সরকারি/চুক্তিভিত্তিক নোটিশে raccomandata বা PEC।', en: 'Registered post (raccomandata) or certified email (PEC).' }),
    q('q-a2-h-13', { bn: 'ভাড়ার রুম শেয়ার করলে খরচ ভাগ করতে বলবেন:', en: 'Splitting bills among flatmates:' }, 'Alla fine del mese ___ le bollette in tre.', ['dividiamo', 'chiudiamo', 'buttiamo', 'fermiamo'], 0, { bn: 'ভাগ করা = dividere (dividiamo)।', en: 'dividiamo = we split.' }),
    q('q-a2-h-14', { bn: 'চুক্তিতে স্বাক্ষর করা:', en: 'To sign a rental contract:' }, 'Domani ___ il contratto di locazione.', ['firmiamo', 'perdiamo', 'paghiamo la multa', 'salutiamo'], 0, { bn: 'সই করা = firmare।', en: 'firmare = to sign.' }),
  ],
};

export const A2_HEALTH_DATA: A2CommunicationModuleData = {
  id: 'a2-health',
  expressions: [
    {
      id: 'm-exp-1',
      it: 'prenotare una visita medica',
      meaning: { bn: 'ডাক্তারের অ্যাপয়েন্টমেন্ট বুক করা', en: 'to book a medical appointment' },
      phoneticBn: 'প্রেনোতারে উনা ভিজিতা মেদিকা',
      exampleIt: 'Devo prenotare una visita dal medico di base.',
      exampleTr: { bn: 'আমার ফ্যামিলি ডাক্তারের অ্যাপয়েন্টমেন্ট নিতে হবে।', en: 'I need to book a visit with the GP.' },
    },
    {
      id: 'm-exp-2',
      it: 'avere la febbre alta',
      meaning: { bn: 'বেশি জ্বর থাকা', en: 'to have a high fever' },
      phoneticBn: 'আভেরে লা ফেবব্রে আলতা',
      exampleIt: 'Da stanotte ho la febbre alta a trentanove.',
      exampleTr: { bn: 'গত রাত থেকে আমার ৩৯ ডিগ্রি বেশি জ্বর।', en: 'Since last night I have had a high fever of 39.' },
    },
    {
      id: 'm-exp-3',
      it: 'mi fa male la schiena',
      meaning: { bn: 'আমার পিঠ / কোমর ব্যথা করছে', en: 'my back hurts' },
      phoneticBn: 'মি ফা মালে লা স্কিয়েনা',
      exampleIt: 'Dopo il lavoro mi fa molto male la schiena.',
      exampleTr: { bn: 'কাজের পর আমার কোমরে খুব ব্যথা করে।', en: 'After work my back hurts a lot.' },
    },
    {
      id: 'm-exp-4',
      it: 'la ricetta medica',
      meaning: { bn: 'ডাক্তারের প্রেসক্রিপশন', en: 'medical prescription' },
      phoneticBn: 'লা রিচেত্তা মেদিকা',
      exampleIt: 'Per questo antibiotico serve la ricetta medica.',
      exampleTr: { bn: 'এই অ্যান্টিবায়োটিকের জন্য প্রেসক্রিপশন লাগে।', en: 'A medical prescription is needed for this antibiotic.' },
    },
    {
      id: 'm-exp-5',
      it: 'la tessera sanitaria',
      meaning: { bn: 'স্বাস্থ্য কার্ড (হেলথ কার্ড)', en: 'Italian health card' },
      phoneticBn: 'লা তেসসেরা সানিতারিয়া',
      exampleIt: 'In farmacia porto sempre la mia tessera sanitaria.',
      exampleTr: { bn: 'ফার্মেসিতে আমি সবসময় আমার হেলথ কার্ড নিয়ে যাই।', en: 'I always take my health card to the pharmacy.' },
    },
    {
      id: 'm-exp-6',
      it: 'lo sciroppo per la tosse',
      meaning: { bn: 'কাশির সিরাপ', en: 'cough syrup' },
      phoneticBn: 'লো শিরোপ্পো পের লা তোসসে',
      exampleIt: 'Prendi un cucchiaio di sciroppo per la tosse prima di dormire.',
      exampleTr: { bn: 'ঘুমানোর আগে এক চামচ কাশির সিরাপ খাও।', en: 'Take a spoonful of cough syrup before sleeping.' },
    },
    {
      id: 'm-exp-7',
      it: 'l’antibiotico e l’antidolorifico',
      meaning: { bn: 'অ্যান্টিবায়োটিক ও ব্যথানাশক ওষুধ', en: 'antibiotic and painkiller' },
      phoneticBn: 'লান্তিবিওতিকো এ লান্তিদোলোরিফিকো',
      exampleIt: 'Non prendere l’antibiotico a stomaco vuoto.',
      exampleTr: { bn: 'খালি পেটে অ্যান্টিবায়োটিক খেয়ো না।', en: 'Do not take the antibiotic on an empty stomach.' },
    },
    {
      id: 'm-exp-8',
      it: 'il pronto soccorso',
      meaning: { bn: 'জরুরি বিভাগ (ইমারজেন্সি)', en: 'hospital emergency room (A&E)' },
      phoneticBn: 'ইল প্রোন্তো সোক্কোরসো',
      exampleIt: 'Se il dolore non passa, andiamo subito al pronto soccorso.',
      exampleTr: { bn: 'ব্যথা না কমলে আমরা এখনই জরুরি বিভাগে যাব।', en: 'If the pain doesn’t stop, let’s go to the ER straight away.' },
    },
    {
      id: 'm-exp-9',
      it: 'sono allergico/a a…',
      meaning: { bn: 'আমার …-এ অ্যালার্জি আছে', en: 'I am allergic to…' },
      phoneticBn: 'সোনো আল্লেরজিকো আ',
      exampleIt: 'Dottore, sono allergico alla penicillina.',
      exampleTr: { bn: 'ডাক্তার, পেনিসিলিনে আমার অ্যালার্জি আছে।', en: 'Doctor, I am allergic to penicillin.' },
    },
    {
      id: 'm-exp-10',
      it: 'il certificato di malattia',
      meaning: { bn: 'চিকিৎসা ছুটির সনদ (অসুস্থতা সনদ)', en: 'medical sick note' },
      phoneticBn: 'ইল চেরতিফিকাতো দি মালাত্তিয়া',
      exampleIt: 'Il medico invia il certificato di malattia al mio datore di lavoro.',
      exampleTr: { bn: 'ডাক্তার আমার নিয়োগকর্তার কাছে অসুস্থতার সনদ পাঠান।', en: 'The doctor sends the sick note to my employer.' },
    },
    {
      id: 'm-exp-11',
      it: 'misurare la pressione',
      meaning: { bn: 'রক্তচাপ মাপা', en: 'to measure blood pressure' },
      phoneticBn: 'মিজুরারে লা প্রেসসিওনে',
      exampleIt: 'In farmacia posso misurare la pressione in cinque minuti.',
      exampleTr: { bn: 'ফার্মেসিতে পাঁচ মিনিটে আমি রক্তচাপ মাপাতে পারি।', en: 'At the pharmacy I can get my blood pressure checked in five minutes.' },
    },
    {
      id: 'm-exp-12',
      it: 'riposarsi e bere molta acqua',
      meaning: { bn: 'বিশ্রাম নেওয়া ও প্রচুর পানি পান করা', en: 'to rest and drink plenty of water' },
      phoneticBn: 'রিপোজারসি এ বেরে মোলতা আকুয়া',
      exampleIt: 'Con l’influenza bisogna riposarsi e bere molta acqua.',
      exampleTr: { bn: 'ফ্লু হলে বিশ্রাম নিতে হবে এবং প্রচুর পানি খেতে হবে।', en: 'With the flu you must rest and drink plenty of water.' },
    },
  ],
  dialogues: [
    {
      id: 'm-dlg-1',
      title: { bn: 'ফ্যামিলি ডাক্তারের চেম্বারে', en: 'At the GP consultation' },
      setting: { bn: 'ডাক্তারের চেম্বার', en: 'Doctor’s office' },
      lines: [
        { speaker: 'Medico', it: 'Buongiorno, si accomodi. Che cosa si sente oggi?', tr: { bn: 'শুভ সকাল, বসুন। আজ আপনার কী সমস্যা হচ্ছে?', en: 'Good morning, take a seat. How are you feeling today?' } },
        { speaker: 'Paziente', it: 'Da due giorni ho mal di gola forte, tosse secca e ieri sera avevo trentotto e mezzo di febbre.', tr: { bn: 'দুই দিন ধরে প্রচণ্ড গলা ব্যথা, শুকনো কাশি এবং গতকাল রাতে ৩৮.৫ জ্বর ছিল।', en: 'For two days I’ve had a bad sore throat, dry cough, and last night I had a 38.5 fever.' } },
        { speaker: 'Medico', it: 'Apra la bocca e faccia un respiro profondo... È una bronchite leggera. Ha allergie a qualche farmaco?', tr: { bn: 'মুখ খুলুন আর লম্বা শ্বাস নিন... হালকা ব্রঙ্কাইটিস হয়েছে। কোনো ওষুধে অ্যালার্জি আছে?', en: 'Open your mouth and take a deep breath... It’s mild bronchitis. Are you allergic to any medication?' } },
        { speaker: 'Paziente', it: 'No dottore, nessuna allergia. Mi serve anche il certificato per il lavoro per tre giorni.', tr: { bn: 'না ডাক্তার, কোনো অ্যালার্জি নেই। আমার অফিসের জন্য তিন দিনের অসুস্থতার সনদও লাগবে।', en: 'No doctor, no allergies. I also need a sick note for work for three days.' } },
      ],
      checkQuestion: { bn: 'রোগীর কী সমস্যা হয়েছে?', en: 'What is the patient’s diagnosis?' },
      checkOptions: [
        { bn: 'হালকা ব্রঙ্কাইটিস (প্রায় ৩ দিন বিশ্রাম লাগবে)', en: 'Mild bronchitis' },
        { bn: 'পা ভাঙা', en: 'Broken leg' },
        { bn: 'ওষুধে অ্যালার্জি', en: 'Drug allergy' },
        { bn: 'দাঁতের ব্যথা', en: 'Toothache' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'm-dlg-2',
      title: { bn: 'ফার্মেসি থেকে ওষুধ কেনা', en: 'Buying medicine at the pharmacy' },
      setting: { bn: 'ফার্মেসি', en: 'Local pharmacy' },
      lines: [
        { speaker: 'Cliente', it: 'Buongiorno, ecco la ricetta elettronica e la mia tessera sanitaria.', tr: { bn: 'শুভ সকাল, এই যে ই-প্রেসক্রিপশন ও আমার হেলথ কার্ড।', en: 'Good morning, here is the e-prescription and my health card.' } },
        { speaker: 'Farmacista', it: 'Perfetto. Deve prendere questa compressa due volte al giorno, sempre dopo i pasti.', tr: { bn: 'চমৎকার। এই ট্যাবলেটটি দিনে দুইবার সবসময় খাওয়ার পর খাবেন।', en: 'Perfect. Take this tablet twice a day, always after meals.' } },
        { speaker: 'Cliente', it: 'Posso guidare dopo aver preso questo farmaco?', tr: { bn: 'এই ওষুধ খাওয়ার পর কি গাড়ি চালাতে পারব?', en: 'Can I drive after taking this medicine?' } },
        { speaker: 'Farmacista', it: 'Sì, questo non provoca sonnolenza. Le serve anche uno spray per il naso?', tr: { bn: 'হ্যাঁ, এতে ঘুম আসে না। আপনার কি নাকের স্প্রেও লাগবে?', en: 'Yes, this doesn’t cause drowsiness. Do you also need a nasal spray?' } },
      ],
      checkQuestion: { bn: 'ট্যাবলেটটি কখন ও কয়বার খেতে হবে?', en: 'How should the patient take the tablet?' },
      checkOptions: [
        { bn: 'দিনে দুইবার, খাওয়ার পর', en: 'Twice a day, after meals' },
        { bn: 'দিনে একবার, খালি পেটে', en: 'Once a day, on an empty stomach' },
        { bn: 'সপ্তাহে একবার', en: 'Once a week' },
        { bn: 'গাড়ি চালানোর সময়', en: 'While driving' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'm-dlg-3',
      title: { bn: 'ফোনে চেম্বারের অ্যাপয়েন্টমেন্ট নেওয়া', en: 'Booking a medical checkup by phone' },
      setting: { bn: 'ক্লিনিকের রিসেপশন', en: 'Clinic reception call' },
      lines: [
        { speaker: 'Segretaria', it: 'Studio medico Sant’Anna, buongiorno!', tr: { bn: 'সান্তআন্না মেডিকেল ক্লিনিক, শুভ সকাল!', en: 'Sant’Anna medical clinic, good morning!' } },
        { speaker: 'Paziente', it: 'Buongiorno, vorrei prenotare un esame del sangue per la settimana prossima, possibilmente la mattina presto.', tr: { bn: 'শুভ সকাল, আগামী সপ্তাহের জন্য একটি রক্ত পরীক্ষা বুক করতে চাই, সম্ভব হলে খুব সকালে।', en: 'Good morning, I’d like to book a blood test for next week, possibly early morning.' } },
        { speaker: 'Segretaria', it: 'Abbiamo posto mercoledì alle sette e trenta. Si ricordi che deve venire a digiuno!', tr: { bn: 'বুধবার সকাল ৭:৩০-এ খালি সময় আছে। মনে রাখবেন, খালি পেটে আসতে হবে!', en: 'We have a slot on Wednesday at 7:30. Remember you must come fasting!' } },
        { speaker: 'Paziente', it: 'Certo, posso bere un bicchiere d’acqua prima di uscire?', tr: { bn: 'অবশ্যই, বের হওয়ার আগে এক গ্লাস পানি খেতে পারি?', en: 'Sure, can I drink a glass of water before leaving?' } },
        { speaker: 'Segretaria', it: 'Sì, acqua naturale sì, ma niente caffè né colazione.', tr: { bn: 'হ্যাঁ, সাধারণ পানি চলবে, কিন্তু কফি বা নাস্তা একদমই নয়।', en: 'Yes, still water is fine, but no coffee or breakfast.' } },
      ],
      checkQuestion: { bn: 'রক্ত পরীক্ষার আগে কী পান করা যাবে?', en: 'What may the patient drink before the blood test?' },
      checkOptions: [
        { bn: 'শুধু সাধারণ পানি', en: 'Only plain water' },
        { bn: 'দুধ ও কফি', en: 'Coffee with milk' },
        { bn: 'কমলার রস ও ক্রোয়াসাঁ', en: 'Orange juice and breakfast' },
        { bn: 'গরম চা ও বিস্কুট', en: 'Hot tea and biscuits' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'm-dlg-4',
      title: { bn: 'জরুরি বিভাগে (Pronto Soccorso) প্রাথমিক তথ্য', en: 'Triage at the emergency room' },
      setting: { bn: 'হাসপাতাল ট্রায়াজ', en: 'Hospital triage' },
      lines: [
        { speaker: 'Infermiera', it: 'Salve, mi dica che cosa è successo.', tr: { bn: 'নমস্কার, কী হয়েছে আমাকে বলুন।', en: 'Hello, tell me what happened.' } },
        { speaker: 'Paziente', it: 'Sono caduto dalle scale un’ora fa e mi fa molto male la caviglia destra. Non riesco a camminare.', tr: { bn: 'এক ঘণ্টা আগে আমি সিঁড়ি থেকে পড়ে গেছি এবং ডান গোড়ালিতে খুব ব্যথা। হাঁটতে পারছি না।', en: 'I fell down the stairs an hour ago and my right ankle hurts badly. I cannot walk.' } },
        { speaker: 'Infermiera', it: 'Capisco. È gonfia, quindi facciamo subito una radiografia. Ha la tessera sanitaria o il passaporto?', tr: { bn: 'বুঝেছি। ফুলে গেছে, তাই এখনই এক্স-রে করব। আপনার কাছে হেলথ কার্ড বা পাসপোর্ট আছে?', en: 'I see. It’s swollen, so we’ll do an X-ray right away. Do you have your health card or passport?' } },
        { speaker: 'Paziente', it: 'Sì, ecco entrambi i documenti.', tr: { bn: 'হ্যাঁ, এই যে দুটো কাগজই আছে।', en: 'Yes, here are both documents.' } },
      ],
      checkQuestion: { bn: 'রোগীর কোন অঙ্গ আঘাত পেয়েছে?', en: 'Where is the patient injured?' },
      checkOptions: [
        { bn: 'ডান গোড়ালি', en: 'Right ankle' },
        { bn: 'বাম কাঁধ', en: 'Left shoulder' },
        { bn: 'পেট', en: 'Stomach' },
        { bn: 'চোখ', en: 'Eye' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'm-dlg-5',
      title: { bn: 'দাঁতের ডাক্তারের কাছে অ্যাপয়েন্টমেন্ট', en: 'At the dentist’s office' },
      setting: { bn: 'ডেন্টাল ক্লিনিক', en: 'Dental clinic' },
      lines: [
        { speaker: 'Paziente', it: 'Dottoressa, da ieri ho un forte mal di denti sul lato sinistro quando bevo qualcosa di freddo.', tr: { bn: 'ডাক্তার ম্যাডাম, গতকাল থেকে ঠান্ডা কিছু খেলে আমার বাম দিকের দাঁতে তীব্র ব্যথা করে।', en: 'Doctor, since yesterday I’ve had bad toothache on the left side when I drink something cold.' } },
        { speaker: 'Dentista', it: 'Controlliamo subito quel molare. Sente dolore anche quando mastica?', tr: { bn: 'এখনই ঐ মাড়ির দাঁতটা দেখছি। চিবানোর সময়ও কি ব্যথা লাগে?', en: 'Let’s check that molar right away. Does it also hurt when you chew?' } },
        { speaker: 'Paziente', it: 'Un pochino, sì.', tr: { bn: 'হ্যাঁ, একটু একটু ব্যথা করে।', en: 'A little bit, yes.' } },
        { speaker: 'Dentista', it: 'È una piccola carie, la curiamo oggi stesso in venti minuti senza dolore.', tr: { bn: 'ছোট একটা গর্ত হয়েছে, আজকেই ব্যথা ছাড়াই বিশ মিনিটে ঠিক করে দেব।', en: 'It is a small cavity; we’ll treat it today in twenty minutes without pain.' } },
      ],
      checkQuestion: { bn: 'কখন রোগীর দাঁতে বেশি ব্যথা হয়?', en: 'When does the tooth hurt?' },
      checkOptions: [
        { bn: 'ঠান্ডা কিছু পান করলে ও চিবানোর সময়', en: 'When drinking something cold or chewing' },
        { bn: 'শুধু রাতে ঘুমালে', en: 'Only when sleeping' },
        { bn: 'হাঁটার সময়', en: 'While walking' },
        { bn: 'চোখ বন্ধ করলে', en: 'When closing eyes' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'm-dlg-6',
      title: { bn: 'রাতের জরুরি ফার্মেসি (Farmacia di turno) খোঁজা', en: 'Finding an open night pharmacy' },
      setting: { bn: 'রাস্তায় / ফোন', en: 'Evening pharmacy visit' },
      lines: [
        { speaker: 'Cliente', it: 'Buonasera, mio figlio ha trentanove di febbre e abbiamo finito la tachipirina!', tr: { bn: 'শুভ সন্ধ্যা, আমার ছেলের ৩৯ জ্বর এবং আমাদের জ্বরের ওষুধ শেষ হয়ে গেছে!', en: 'Good evening, my son has a 39 fever and we’ve run out of paracetamol!' } },
        { speaker: 'Farmacista', it: 'Non si preoccupi, siamo noi la farmacia di turno stanotte. Quanti anni ha il bambino?', tr: { bn: 'চিন্তা করবেন না, আজ রাতে আমরাই ডিউটি ফার্মেসি। বাচ্চার বয়স কত?', en: 'Don’t worry, we’re the duty pharmacy tonight. How old is the child?' } },
        { speaker: 'Cliente', it: 'Ha otto anni e pesa circa ventisei chili.', tr: { bn: 'বয়স আট বছর এবং ওজন প্রায় ২৬ কেজি।', en: 'He is eight and weighs around 26 kilos.' } },
        { speaker: 'Farmacista', it: 'Allora Le do lo sciroppo pediatrico con il misurino adatto.', tr: { bn: 'তাহলে সঠিক মাপার চামচসহ শিশুদের সিরাপ দিচ্ছি।', en: 'Then I’ll give you the paediatric syrup with the right measuring cup.' } },
      ],
      checkQuestion: { bn: '“farmacia di turno” বলতে কী বোঝায়?', en: 'What is a "farmacia di turno"?' },
      checkOptions: [
        { bn: 'রাত বা ছুটির দিনে খোলা জরুরি ডিউটি ফার্মেসি', en: 'On-duty pharmacy open at night/holidays' },
        { bn: 'শুধু সকালে খোলা দোকান', en: 'A morning-only shop' },
        { bn: 'হাসপাতালের ক্যান্টিন', en: 'Hospital canteen' },
        { bn: 'দন্ত চিকিৎসকের চেম্বার', en: 'Dental surgery' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'm-dlg-7',
      title: { bn: 'রক্তচাপ মাপা ও জীবনযাত্রার পরামর্শ', en: 'Blood pressure check at the pharmacy' },
      setting: { bn: 'ফার্মেসির কোণ', en: 'Pharmacy health corner' },
      lines: [
        { speaker: 'Cliente', it: 'Scusi, stamattina mi gira un po’ la testa: posso misurare la pressione?', tr: { bn: 'মাফ করবেন, আজ সকালে মাথা একটু ঘুরছে: রক্তচাপ মাপাতে পারি?', en: 'Excuse me, I feel a bit dizzy this morning: can I check my blood pressure?' } },
        { speaker: 'Farmacista', it: 'Si sieda un paio di minuti e appoggi il braccio qui. Beve abbastanza acqua con questo caldo?', tr: { bn: 'দুই মিনিট বসুন এবং হাতটি এখানে রাখুন। এই গরমে পর্যাপ্ত পানি পান করছেন কি?', en: 'Sit for a couple of minutes and rest your arm here. Are you drinking enough water in this heat?' } },
        { speaker: 'Cliente', it: 'Forse troppo poco oggi, sono uscito di corsa.', tr: { bn: 'হয়তো আজ খুব কম খেয়েছি, তাড়াহুড়ো করে বেরিয়েছি।', en: 'Maybe too little today, I left in a rush.' } },
        { speaker: 'Farmacista', it: 'Infatti è un po’ bassa. Beva subito acqua fresca e si riposi all’ombra.', tr: { bn: 'হ্যাঁ, প্রেশার একটু কম। এখনই ঠান্ডা পানি খান এবং ছায়ায় বিশ্রাম নিন।', en: 'Indeed it’s a little low. Drink cool water right away and rest in the shade.' } },
      ],
      checkQuestion: { bn: 'রোগীর রক্তচাপ কেমন ছিল ও কী পরামর্শ পেলেন?', en: 'What was the result and advice?' },
      checkOptions: [
        { bn: 'রক্তচাপ একটু কম ছিল; পানি খাওয়া ও ছায়ায় বিশ্রামের পরামর্শ', en: 'Slightly low; drink water and rest in shade' },
        { bn: 'খুব বেশি ছিল; দৌড়ানোর পরামর্শ', en: 'Too high; go running' },
        { bn: 'মেশিন নষ্ট ছিল', en: 'Machine was broken' },
        { bn: 'অ্যান্টিবায়োটিক নেওয়ার পরামর্শ', en: 'Take antibiotics' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'm-dlg-8',
      title: { bn: 'CUP কাউন্টারে বিশেষজ্ঞ ডাক্তার বুকিং', en: 'Booking a specialist via CUP' },
      setting: { bn: 'হাসপাতাল CUP ডেস্ক', en: 'CUP booking desk' },
      lines: [
        { speaker: 'Impiegata', it: 'Buongiorno, ha l’impegnativa del medico di base?', tr: { bn: 'শুভ সকাল, আপনার কাছে কি ফ্যামিলি ডাক্তারের রেফারেল আছে?', en: 'Good morning, do you have your GP’s referral?' } },
        { speaker: 'Paziente', it: 'Sì, eccola: devo fare una visita oculistica.', tr: { bn: 'হ্যাঁ, এই যে: আমার চোখের ডাক্তার দেখাতে হবে।', en: 'Yes, here it is: I need an eye examination.' } },
        { speaker: 'Impiegata', it: 'Abbiamo un posto disponibile il diciotto novembre alle dieci al Poliambulatorio Centrale.', tr: { bn: 'সেন্ট্রাল পলিক্লিনিকে ১৮ই নভেম্বর সকাল দশটায় খালি আছে।', en: 'We have a slot on 18 November at 10 a.m. at Central Clinic.' } },
        { speaker: 'Paziente', it: 'Perfetto, confermi pure quello e mi dia la ricevuta per il ticket.', tr: { bn: 'দারুণ, ওটাই নিশ্চিত করুন এবং ফির রসিদটি দিন।', en: 'Perfect, please confirm that and give me the payment slip.' } },
      ],
      checkQuestion: { bn: 'রোগী কোন ধরনের চিকিৎসা সেবা বুক করছেন?', en: 'Which specialist visit is being booked?' },
      checkOptions: [
        { bn: 'চোখের পরীক্ষা (visita oculistica)', en: 'Eye examination (visita oculistica)' },
        { bn: 'দাঁতের এক্স-রে', en: 'Dental X-ray' },
        { bn: 'হার্টের অপারেশন', en: 'Heart surgery' },
        { bn: 'ড্রাইভিং টেস্ট', en: 'Driving test' },
      ],
      checkAnswer: 0,
    },
  ],
  functionalFrames: [
    {
      id: 'm-frm-1',
      situation: { bn: 'শারীরিক উপসর্গ বর্ণনা করা', en: 'Describing symptoms clearly' },
      phrases: [
        { it: 'Da due giorni ho mal di testa e mi gira la testa.', tr: { bn: 'দুই দিন ধরে আমার মাথাব্যথা এবং মাথা ঘুরছে।', en: 'For two days I’ve had a headache and felt dizzy.' } },
        { it: 'Mi fa male qui quando respiro o tocco.', tr: { bn: 'শ্বাস নিলে বা স্পর্শ করলে আমার এখানে ব্যথা করে।', en: 'It hurts here when I breathe or press.' } },
      ],
    },
    {
      id: 'm-frm-2',
      situation: { bn: 'ডাক্তার ও ফার্মেসিতে প্রশ্ন করা', en: 'Checking dosage & allergies' },
      phrases: [
        { it: 'Quante volte al giorno devo prendere questa medicina?', tr: { bn: 'দিনে কয়বার এই ওষুধটা খেতে হবে?', en: 'How many times a day should I take this medicine?' } },
        { it: 'Serve la ricetta del medico oppure posso prenderlo subito?', tr: { bn: 'ডাক্তারের প্রেসক্রিপশন লাগবে নাকি এখনই নিতে পারি?', en: 'Do I need a prescription or can I buy it over the counter?' } },
      ],
    },
  ],
  questions: [
    q('q-a2-m-1', { bn: '“আমার মাথা ঘুরছে” — ইতালিয়ানে কীভাবে বলবেন?', en: 'How do you say "I feel dizzy"?' }, undefined, ['Mi gira la testa.', 'Ho mal di denti.', 'Ho la ricetta.', 'Prendo il treno.'], 0, { bn: 'Mi gira la testa = আমার মাথা ঘুরছে।', en: 'Mi gira la testa.' }),
    q('q-a2-m-2', { bn: 'অ্যান্টিবায়োটিক কিনতে ফার্মেসিতে কী প্রয়োজন?', en: 'What is required to buy an antibiotic?' }, 'Per l’antibiotico serve ___.', ['la ricetta medica', 'il biglietto del bus', 'la raccomandata', 'il contratto'], 0, { bn: 'প্রেসক্রিপশন = la ricetta medica।', en: 'la ricetta medica.' }),
    q('q-a2-m-3', { bn: 'অবস্থানের উপসর্গ: “তিন দিন ধরে পিঠ ব্যথা করছে”', en: '"My back has been hurting for three days":' }, 'Da tre giorni ___ la schiena.', ['mi fa male', 'faccio male', 'sono male', 'porto male'], 0, { bn: 'শরীরের অংশে ব্যথা = mi fa male + শরীরের অংশ।', en: 'mi fa male + body part.' }),
    q('q-a2-m-4', { bn: 'ওষুধে অ্যালার্জি জানাতে কী বলবেন?', en: 'State a medication allergy:' }, 'Dottore, ___ alla penicillina.', ['sono allergico', 'ho febbre', 'mi riposo', 'prenoto'], 0, { bn: 'সঠিক প্রকাশ: sono allergico/a a… (আমার …-তে অ্যালার্জি আছে)।', en: 'sono allergico/a a…' }),
    q('q-a2-m-5', { bn: 'রক্ত পরীক্ষার জন্য “খালি পেটে” শব্দগুচ্ছ কোনটি?', en: 'Which phrase means "fasting / on an empty stomach"?' }, 'Per l’esame del sangue bisogna venire ___.', ['a digiuno', 'dopo cena', 'in ritardo', 'al pronto soccorso'], 0, { bn: 'a digiuno = খালি পেটে / না খেয়ে।', en: 'a digiuno = fasting.' }),
    q('q-a2-m-6', { bn: 'ইতালিতে সরকারি স্বাস্থ্য কার্ডকে কী বলে?', en: 'What is the Italian public health card called?' }, undefined, ['la tessera sanitaria', 'la patente di guida', 'la carta d’imbarco', 'la ricevuta fiscal'], 0, { bn: 'সরকারি স্বাস্থ্য কার্ড = la tessera sanitaria।', en: 'la tessera sanitaria.' }),
    q('q-a2-m-7', { bn: 'রাতের খোলা ফার্মেসিকে কী বলে?', en: 'What is the on-duty overnight pharmacy called?' }, undefined, ['farmacia di turno', 'pronto albergo', 'visita privata', 'bolletta mensile'], 0, { bn: 'রাতের/পালাক্রমে খোলা ফার্মেসি = farmacia di turno।', en: 'farmacia di turno.' }),
    q('q-a2-m-8', { bn: 'জরুরি আঘাতে হাসপাতালের কোন বিভাগে যাবেন?', en: 'Where do you go for urgent medical emergencies?' }, undefined, ['al pronto soccorso', 'all’ufficio postale', 'in biglietteria', 'in segreteria'], 0, { bn: 'al pronto soccorso = জরুরি বিভাগে।', en: 'al pronto soccorso.' }),
    q('q-a2-m-9', { bn: 'ফার্মাসিস্টের নির্দেশ: “খাওয়ার পর খান”', en: 'Pharmacist instruction: "after meals":' }, 'Prenda la compressa due volte al giorno ___.', ['dopo i pasti', 'a stomaco vuoto', 'durante la doccia', 'prima di guidare'], 0, { bn: 'dopo i pasti = খাওয়ার পর।', en: 'dopo i pasti = after meals.' }),
    q('q-a2-m-10', { bn: 'অফিসের জন্য অসুস্থতার সনদ চাইলে:', en: 'Asking the doctor for a work sick note:' }, 'Mi può fare ___ per il lavoro?', ['il certificato di malattia', 'il deposito cauzionale', 'la multa stradale', 'l’abbonamento'], 0, { bn: 'অসুস্থতার সনদ = il certificato di malattia।', en: 'il certificato di malattia.' }),
    q('q-a2-m-11', { bn: 'কাশির জন্য সাধারণ ওষুধ:', en: 'Common medicine for a cough:' }, 'In farmacia compro ___ per la tosse.', ['lo sciroppo', 'il rubinetto', 'il binario', 'lo scontrino'], 0, { bn: 'কাশির সিরাপ = lo sciroppo।', en: 'lo sciroppo = syrup.' }),
    q('q-a2-m-12', { bn: 'ফ্যামিলি ডাক্তারের রেফারেলকে বলে:', en: 'GP referral form for specialist care:' }, 'Allo sportello CUP serve ___ del medico.', ['l’impegnativa', 'la valigia', 'la ricevuta', 'il riscaldamento'], 0, { bn: 'l’impegnativa (ডাক্তারি রেফারেল)।', en: 'l’impegnativa = medical referral.' }),
    q('q-a2-m-13', { bn: 'ডাক্তারের পরামর্শ: প্রচুর পানি ও বিশ্রাম:', en: 'Doctor’s advice: rest and drink water:' }, 'Con l’influenza bisogna ___ e bere molto.', ['riposarsi', 'correre', 'lavorare tardi', 'aprire la porta'], 0, { bn: 'বিশ্রাম নেওয়া = riposarsi।', en: 'riposarsi = to rest.' }),
    q('q-a2-m-14', { bn: 'রক্তচাপ মাপাকে ইতালিয়ানে কী বলে?', en: 'Which means "to measure blood pressure"?' }, undefined, ['misurare la pressione', 'cambiare il biglietto', 'firmare il contratto', 'dare il preavviso'], 0, { bn: 'রক্তচাপ মাপা = misurare la pressione।', en: 'misurare la pressione.' }),
  ],
};

export const A2_TRAVEL_DATA: A2CommunicationModuleData = {
  id: 'a2-travel',
  expressions: [
    {
      id: 't-exp-1',
      it: 'fare il cambio / la coincidenza',
      meaning: { bn: 'ট্রেন বা বাস বদল / কানেক্টিং যাত্রা করা', en: 'to transfer / catch a connection' },
      phoneticBn: 'ফারে ইল কামবিও / লা কোইনচিদেনৎসা',
      exampleIt: 'Dobbiamo fare il cambio a Bologna per prendere il treno per Firenze.',
      exampleTr: { bn: 'ফ্লোরেন্সের ট্রেন ধরতে আমাদের বোলোনিয়ায় ট্রেন বদল করতে হবে।', en: 'We have to change at Bologna to catch the train to Florence.' },
    },
    {
      id: 't-exp-2',
      it: 'convalidare il biglietto',
      meaning: { bn: 'টিকিট মেশিনে পাঞ্চ / সক্রিয় করা', en: 'to validate / stamp a ticket' },
      phoneticBn: 'কোনভালিদারে ইল বিলিয়েত্তো',
      exampleIt: 'Prima di salire sul regionale, ricordati di convalidare il biglietto!',
      exampleTr: { bn: 'লোকাল ট্রেনে ওঠার আগে টিকিট পাঞ্চ করতে ভুলো না!', en: 'Before boarding the regional train, remember to validate your ticket!' },
    },
    {
      id: 't-exp-3',
      it: 'il treno porta venti minuti di ritardo',
      meaning: { bn: 'ট্রেনটি ২০ মিনিট দেরিতে চলছে', en: 'the train is 20 minutes late' },
      phoneticBn: 'ইল ত্রেনো পোরতা ভেন্তি মিনুতি দি রিতারদো',
      exampleIt: 'Purtroppo l’Intercity porta venti minuti di ritardo.',
      exampleTr: { bn: 'দুর্ভাগ্যবশত ইন্টারসিটি ট্রেনটি ২০ মিনিট দেরি করছে।', en: 'Unfortunately the Intercity train is running 20 minutes late.' },
    },
    {
      id: 't-exp-4',
      it: 'il binario e la carrozza',
      meaning: { bn: 'প্ল্যাটফর্ম নম্বর এবং ট্রেনের বগি', en: 'the platform and carriage' },
      phoneticBn: 'ইল বিনারিও এ লা কাররোৎসা',
      exampleIt: 'Il nostro posto è nella carrozza quattro al binario otto.',
      exampleTr: { bn: 'আমাদের সিট আট নম্বর প্ল্যাটফর্মের চার নম্বর বগিতে।', en: 'Our seat is in carriage four on platform eight.' },
    },
    {
      id: 't-exp-5',
      it: 'imbarcare il bagaglio in stiva',
      meaning: { bn: 'লাগেজ বিমানের কার্গোতে জমা দেওয়া', en: 'to check in hold luggage' },
      phoneticBn: 'ইমবারকারে ইল বাগালিয়ো ইন স্তিভা',
      exampleIt: 'Questa valigia è grande, devo imbarcarla in stiva.',
      exampleTr: { bn: 'এই সুটকেসটা বড়, এটি কার্গোতে জমা দিতে হবে।', en: 'This suitcase is large, I have to check it into the hold.' },
    },
    {
      id: 't-exp-6',
      it: 'la carta d’imbarco e l’uscita (gate)',
      meaning: { bn: 'বোর্ডিং পাস ও গেট', en: 'boarding pass and departure gate' },
      phoneticBn: 'লা কারতা দিমবারকো এ লুশিতা',
      exampleIt: 'Mostri la carta d’imbarco al controllo prima di andare all’uscita B12.',
      exampleTr: { bn: 'গেট B12-এ যাওয়ার আগে চেকপয়েন্টে বোর্ডিং পাস দেখান।', en: 'Show your boarding pass at security before heading to gate B12.' },
    },
    {
      id: 't-exp-7',
      it: 'andata e ritorno / solo andata',
      meaning: { bn: 'যাওয়া-আসা টিকিট / শুধু যাওয়ার টিকিট', en: 'return ticket / one-way ticket' },
      phoneticBn: 'আন্দাতা এ রিতোরনো / সোলো আন্দাতা',
      exampleIt: 'Vorrei due biglietti di andata e ritorno per Padova.',
      exampleTr: { bn: 'পাদোয়ার জন্য দুটি যাওয়া-আসা টিকিট চাই।', en: 'I would like two return tickets to Padua.' },
    },
    {
      id: 't-exp-8',
      it: 'l’abbonamento mensile dei mezzi',
      meaning: { bn: 'গণপরিবহনের মাসিক পাস', en: 'monthly public transport pass' },
      phoneticBn: 'লাব্বোনামেন্তো মেনসিলে দেই মেৎসি',
      exampleIt: 'Conviene fare l’abbonamento mensile per metro e autobus.',
      exampleTr: { bn: 'মেট্রো ও বাসের জন্য মাসিক পাস করা লাভজনক।', en: 'Getting a monthly pass for the metro and bus is cost-effective.' },
    },
    {
      id: 't-exp-9',
      it: 'chiedere il rimborso per cancellazione',
      meaning: { bn: 'বাতিল হওয়ার কারণে টাকা ফেরত চাওয়া', en: 'to request a cancellation refund' },
      phoneticBn: 'কিয়েদেরে ইল রিমবোরসো',
      exampleIt: 'Il volo è stato cancellato, quindi chiedo il rimborso totale.',
      exampleTr: { bn: 'ফ্লাইট বাতিল হয়েছে, তাই আমি পুরো টাকা ফেরত চাইছি।', en: 'The flight was cancelled, so I am requesting a full refund.' },
    },
    {
      id: 't-exp-10',
      it: 'c’è uno sciopero dei trasporti',
      meaning: { bn: 'পরিবহন ধর্মঘট চলছে', en: 'there is a transport strike' },
      phoneticBn: 'চে উনো শো্পেরো দেই ত্রাসপোরতি',
      exampleIt: 'Domani c’è uno sciopero dei treni dalle nove alle diciassette.',
      exampleTr: { bn: 'আগামীকাল সকাল নয়টা থেকে বিকেল পাঁচটা পর্যন্ত ট্রেন ধর্মঘট আছে।', en: 'Tomorrow there is a train strike from 9 a.m. to 5 p.m.' },
    },
    {
      id: 't-exp-11',
      it: 'il deposito bagagli in stazione',
      meaning: { bn: 'স্টেশনে লাগেজ রাখার লকার/ঘর', en: 'left-luggage office at the station' },
      phoneticBn: 'ইল দেপোজিতো বাগালয়ি',
      exampleIt: 'Lasciamo gli zaini al deposito bagagli mentre visitiamo il duomo.',
      exampleTr: { bn: 'দুওমো ঘোরার সময় আমরা ব্যাকপ্যাকগুলো লাগেজ কাউন্টারে রাখি।', en: 'Let’s leave our backpacks at left luggage while we visit the cathedral.' },
    },
    {
      id: 't-exp-12',
      it: 'fare il pieno di benzina',
      meaning: { bn: 'গাড়িতে ফুল ট্যাঙ্ক জ্বালানি ভরা', en: 'to fill up the tank with petrol' },
      phoneticBn: 'ফারে ইল পিয়েনো দি বেনৎসিনা',
      exampleIt: 'Prima di entrare in autostrada facciamo il pieno di benzina.',
      exampleTr: { bn: 'হাইওয়েতে ওঠার আগে গাড়ির ট্যাঙ্ক ভরে নিই।', en: 'Before entering the motorway let’s fill up the tank.' },
    },
  ],
  dialogues: [
    {
      id: 't-dlg-1',
      title: { bn: 'স্টেশনের কাউন্টারে ট্রেন বদলের তথ্য', en: 'Checking train transfers at the ticket desk' },
      setting: { bn: 'রেলস্টেশন কাউন্টার', en: 'Station ticket office' },
      lines: [
        { speaker: 'Viaggiatore', it: 'Buongiorno, vorrei andare a Venezia oggi pomeriggio: c’è un treno diretto?', tr: { bn: 'শুভ সকাল, আজ বিকেলে ভেনিস যেতে চাই: সরাসরি কোনো ট্রেন আছে কি?', en: 'Good morning, I’d like to go to Venice this afternoon: is there a direct train?' } },
        { speaker: 'Impiegato', it: 'Diretto parte alle quindici e venti. Altrimenti alle quattordici deve fare un cambio a Bologna.', tr: { bn: 'সরাসরি ট্রেন ৩:২০-এ ছাড়বে। নাহলে ২:০০-টায় বোলোনিয়ায় ট্রেন বদল করতে হবে।', en: 'Direct leaves at 15:20. Otherwise at 14:00 you have to change at Bologna.' } },
        { speaker: 'Viaggiatore', it: 'Preferisco quello diretto delle quindici e venti. Quanto costa solo andata in seconda classe?', tr: { bn: 'আমি ৩:২০-এর সরাসরিটাই নেব। দ্বিতীয় শ্রেণিতে শুধু যাওয়ার ভাড়া কত?', en: 'I prefer the 15:20 direct one. How much is one-way in second class?' } },
        { speaker: 'Impiegato', it: 'Ventiquattro euro. Ecco il biglietto: non serve convalidarlo perché ha il posto prenotato.', tr: { bn: '২৪ ইউরো। এই যে টিকিট: সিট বুক করা থাকায় পাঞ্চ করতে হবে না।', en: '24 euros. Here is the ticket: no need to validate as it has a reserved seat.' } },
      ],
      checkQuestion: { bn: '৩:২০-এর টিকিট কেন পাঞ্চ করতে হবে না?', en: 'Why doesn’t the 15:20 ticket need validation?' },
      checkOptions: [
        { bn: 'কারণ সিট নম্বর আগে থেকেই বুক করা আছে', en: 'Because it has a reserved seat' },
        { bn: 'কারণ এটি বিনামূল্যে', en: 'Because it is free' },
        { bn: 'কারণ মেশিন নষ্ট', en: 'Because the machine is broken' },
        { bn: 'কারণ এটি মেট্রোর টিকিট', en: 'Because it is a metro pass' },
      ],
      checkAnswer: 0,
    },
    {
      id: 't-dlg-2',
      title: { bn: 'ট্রেন দেরি ও কানেকশন মিস হওয়ার সমাধান', en: 'Missed connection due to delay' },
      setting: { bn: 'সহায়তা ডেস্ক (Assistenza)', en: 'Rail customer assistance' },
      lines: [
        { speaker: 'Passeggero', it: 'Scusi, il mio Frecciarossa aveva quarantacinque minuti di ritardo e ho perso la coincidenza per Pisa!', tr: { bn: 'মাফ করবেন, আমার ফ্রেচ্চারোস্সা ৪৫ মিনিট দেরি করায় পিসার কানেক্টিং ট্রেন মিস করেছি!', en: 'Excuse me, my Frecciarossa was 45 minutes late and I missed my connection to Pisa!' } },
        { speaker: 'Addetto', it: 'Mi mostri i biglietti, per favore. Nessun problema: la riproteggiamo gratuitamente sul prossimo treno tra venti minuti.', tr: { bn: 'অনুগ্রহ করে টিকিটগুলো দেখান। সমস্যা নেই: ২০ মিনিট পরের ট্রেনে আপনাকে বিনামূল্যে তুলে দিচ্ছি।', en: 'Show me your tickets, please. No problem: we’ll rebook you free of charge on the next train in 20 minutes.' } },
        { speaker: 'Passeggero', it: 'Grazie! Da quale binario parte il prossimo?', tr: { bn: 'ধন্যবাদ! পরের ট্রেনটি কোন প্ল্যাটফর্ম থেকে ছাড়বে?', en: 'Thanks! Which platform does the next one leave from?' } },
        { speaker: 'Addetto', it: 'Dal binario dodici ovest.', tr: { bn: '১২ নম্বর পশ্চিম প্ল্যাটফর্ম থেকে।', en: 'From platform 12 west.' } },
      ],
      checkQuestion: { bn: 'কানেকশন মিস হওয়ায় যাত্রীকে নতুন টিকিটের টাকা দিতে হবে কি?', en: 'Does the passenger have to pay again?' },
      checkOptions: [
        { bn: 'না, বিনামূল্যে পরের ট্রেনে ব্যবস্থা করে দেওয়া হবে', en: 'No, rebooked free on the next train' },
        { bn: 'হ্যাঁ, দ্বিগুণ ভাড়া দিতে হবে', en: 'Yes, pay double' },
        { bn: 'বাসে যেতে হবে', en: 'Must take a taxi' },
        { bn: 'পরদিন যেতে হবে', en: 'Wait until next day' },
      ],
      checkAnswer: 0,
    },
    {
      id: 't-dlg-3',
      title: { bn: 'বিমানবন্দরে চেক-ইন ও লাগেজ জমা', en: 'Airport check-in and hold luggage' },
      setting: { bn: 'বিমানবন্দর চেক-ইন ডেস্ক', en: 'Airport check-in' },
      lines: [
        { speaker: 'Operatrice', it: 'Buongiorno! Passaporto e carta d’imbarco, per favore. Ha bagagli da imbarcare in stiva?', tr: { bn: 'শুভ সকাল! পাসপোর্ট ও বোর্ডিং পাস দিন। কার্গোতে জমা দেওয়ার মতো লাগেজ আছে?', en: 'Good morning! Passport and boarding pass, please. Do you have bags to check in?' } },
        { speaker: 'Passeggera', it: 'Sì, questa valigia grigia e ho anche uno zaino piccolo come bagaglio a mano.', tr: { bn: 'হ্যাঁ, এই ধূসর সুটকেসটি এবং হাতে নেওয়ার জন্য ছোট একটি ব্যাকপ্যাক আছে।', en: 'Yes, this grey suitcase, and I have a small backpack as hand luggage.' } },
        { speaker: 'Operatrice', it: 'Perfetto, pesa diciotto chili: va benissimo. L’imbarco inizia alle dieci al gate A09.', tr: { bn: 'দারুণ, ওজন ১৮ কেজি: একদম ঠিক আছে। দশটায় গেট A09 থেকে বোর্ডিং শুরু হবে।', en: 'Perfect, it weighs 18 kg: totally fine. Boarding starts at 10 at gate A09.' } },
      ],
      checkQuestion: { bn: 'বোর্ডিং কখন এবং কোন গেট থেকে শুরু হবে?', en: 'When and where does boarding start?' },
      checkOptions: [
        { bn: 'দশটায়, গেট A09 থেকে', en: 'At 10, gate A09' },
        { bn: 'আটটায়, গেট B12 থেকে', en: 'At 8, gate B12' },
        { bn: 'বারোটায়, গেট C04 থেকে', en: 'At 12, gate C04' },
        { bn: 'ল্যাগেজ ওজন বেশি হওয়ায় বাতিল', en: 'Cancelled due to excess weight' },
      ],
      checkAnswer: 0,
    },
    {
      id: 't-dlg-4',
      title: { bn: 'বিমানবন্দরে হারিয়ে যাওয়া লাগেজ অভিযোগ', en: 'Reporting lost luggage at arrivals' },
      setting: { bn: 'ব্যাগেজ ক্লেইম অফিস', en: 'Lost & found airport desk' },
      lines: [
        { speaker: 'Passeggero', it: 'Mi scusi, tutti gli altri bagagli sono usciti sul nastro tre, ma la mia valigia blu non è arrivata!', tr: { bn: 'মাফ করবেন, অন্য সব লাগেজ ৩ নম্বর বেল্টে এসেছে, কিন্তু আমার নীল সুটকেস আসেনি!', en: 'Excuse me, all other bags came out on belt three, but my blue suitcase hasn’t arrived!' } },
        { speaker: 'Impiegata', it: 'Mi dia l’etichetta del bagaglio. Compiliamo subito il modulo PIR con il Suo indirizzo in Italia.', tr: { bn: 'লাগেজের ট্যাগ দিন। ইতালিতে আপনার ঠিকানাসহ এখনই PIR ফর্ম পূরণ করছি।', en: 'Give me your baggage tag. Let’s fill out the PIR form right away with your Italian address.' } },
        { speaker: 'Passeggero', it: 'Quando arriva me la portano direttamente in albergo?', tr: { bn: 'খুঁজে পেলে কি সরাসরি আমার হোটেলে পৌঁছে দেওয়া হবে?', en: 'When it arrives, will they deliver it straight to my hotel?' } },
        { speaker: 'Impiegata', it: 'Sì, un corriere gliela consegna entro ventiquattro ore appena la troviamo.', tr: { bn: 'হ্যাঁ, খুঁজে পাওয়া মাত্রই কুরিয়ার ২৪ ঘণ্টার মধ্যে পৌঁছে দেবে।', en: 'Yes, a courier delivers it within 24 hours as soon as we find it.' } },
      ],
      checkQuestion: { bn: 'সুটকেসটি পাওয়া গেলে কীভাবে ফেরত দেওয়া হবে?', en: 'How will the missing suitcase be returned?' },
      checkOptions: [
        { bn: 'কুরিয়ার সরাসরি হোটেলে পৌঁছে দেবে', en: 'Delivered to the hotel by courier' },
        { bn: 'যাত্রীকে আবার বিমানবন্দরে আসতে হবে', en: 'Passenger must fly back' },
        { bn: 'ডাকঘর থেকে নিতে হবে', en: 'Picked up at a post office' },
        { bn: 'এক মাস অপেক্ষা করতে হবে', en: 'Wait a month' },
      ],
      checkAnswer: 0,
    },
    {
      id: 't-dlg-5',
      title: { bn: 'শহরের গণপরিবহনের মাসিক পাস করা', en: 'Buying a monthly city transit pass' },
      setting: { bn: 'মেট্রো ও বাস অফিস', en: 'Transit pass desk' },
      lines: [
        { speaker: 'Studente', it: 'Buongiorno, vorrei fare l’abbonamento mensile urbano per autobus e metropolitana.', tr: { bn: 'শুভ সকাল, বাস ও মেট্রোর জন্য শহরের মাসিক পাস করতে চাই।', en: 'Good morning, I would like a monthly urban pass for bus and metro.' } },
        { speaker: 'Operatore', it: 'Ha già la tessera elettronica o è la prima volta?', tr: { bn: 'আপনার কাছে কি আগে থেকেই ইলেকট্রনিক কার্ড আছে নাকি প্রথমবার?', en: 'Do you already have the smart card or is this your first time?' } },
        { speaker: 'Studente', it: 'È la prima volta. Ho portato una fototessera e il documento d’identità.', tr: { bn: 'প্রথমবার। আমি একটি পাসপোর্ট সাইজ ছবি ও পরিচয়পত্র এনেছি।', en: 'First time. I brought a passport photo and my ID.' } },
        { speaker: 'Operatore', it: 'Benissimo, con i cinque euro della tessera il totale per il mese è di quaranta euro.', tr: { bn: 'দারুণ, কার্ড ফি ৫ ইউরোসহ এই মাসের মোট খরচ ৪০ ইউরো।', en: 'Great, with the 5 euro card fee the total for the month is 40 euros.' } },
      ],
      checkQuestion: { bn: 'মাসিক পাস বানাতে শিক্ষার্থী কী কী এনেছেন?', en: 'What did the student bring to get the transit pass?' },
      checkOptions: [
        { bn: 'পাসপোর্ট ছবি এবং পরিচয়পত্র', en: 'A passport photo and ID' },
        { bn: 'শুধু বাসের পুরোনো টিকিট', en: 'Only old bus tickets' },
        { bn: 'প্লেনের বোর্ডিং পাস', en: 'Plane boarding pass' },
        { bn: 'ডাক্তারি সনদ', en: 'Medical certificate' },
      ],
      checkAnswer: 0,
    },
    {
      id: 't-dlg-6',
      title: { bn: 'ধর্মঘটের দিনে বাস-মেট্রোর খোঁজ নেওয়া', en: 'Navigating a transport strike day' },
      setting: { bn: 'সহকর্মীদের সাথে কথাবার্তা', en: 'Office lobby' },
      lines: [
        { speaker: 'Marco', it: 'Hai letto l’avviso? Oggi c’è sciopero dei mezzi pubblici fino alle cinque del pomeriggio.', tr: { bn: 'নোটিশ পড়েছ? আজ বিকেল পাঁচটা পর্যন্ত গণপরিবহনের ধর্মঘট।', en: 'Did you read the notice? Today there is a public transport strike until 5 p.m.' } },
        { speaker: 'Rafi', it: 'Davvero? Ma come torno a casa alle tre? Gli autobus sono proprio fermi?', tr: { bn: 'সত্যি? কিন্তু তিনটায় আমি বাসায় ফিরব কীভাবে? বাসগুলো কি পুরোই বন্ধ?', en: 'Really? How do I get home at three? Are buses completely stopped?' } },
        { speaker: 'Marco', it: 'Alcune linee passano ogni trenta minuti nelle fasce garantite, altrimenti possiamo dividere un taxi.', tr: { bn: 'নিরাপদ সময়ে কিছু রুটে ৩০ মিনিট পরপর বাস চলে, নাহলে আমরা ট্যাক্সি ভাগ করে নিতে পারি।', en: 'Some lines run every 30 minutes in guaranteed windows, otherwise we can share a taxi.' } },
      ],
      checkQuestion: { bn: 'ধর্মঘটের মধ্যে বিকল্প সমাধান কী বলা হয়েছে?', en: 'What options are mentioned during the strike?' },
      checkOptions: [
        { bn: 'নিরাপদ সময়ের বাস অথবা ট্যাক্সি শেয়ার করা', en: 'Guaranteed-window lines or sharing a taxi' },
        { bn: 'সারা দিন স্টেশনে ঘুমানো', en: 'Sleeping at the station' },
        { bn: 'আগামীকাল ট্রেনে ফেরা', en: 'Returning tomorrow' },
        { bn: 'প্লেনে যাওয়া', en: 'Taking a flight' },
      ],
      checkAnswer: 0,
    },
    {
      id: 't-dlg-7',
      title: { bn: 'হোটেল থেকে সাইকেল বা গাড়ি ভাড়া', en: 'Renting a city bike or car' },
      setting: { bn: 'রেন্টাল ডেস্ক', en: 'Rental desk' },
      lines: [
        { speaker: 'Turista', it: 'Salve, vorrei noleggiare due biciclette elettriche per tutta la giornata.', tr: { bn: 'নমস্কার, সারাদিনের জন্য দুটি ইলেকট্রিক সাইকেল ভাড়া নিতে চাই।', en: 'Hello, I would like to rent two electric bikes for the whole day.' } },
        { speaker: 'Addetta', it: 'Certo! Ecco i caschi e il lucchetto. Bisogna riconsegnarle entro le diciannove e trenta.', tr: { bn: 'অবশ্যই! এই যে হেলমেট ও তালা। সন্ধ্যা ৭:৩০-এর মধ্যে ফেরত দিতে হবে।', en: 'Certainly! Here are helmets and a lock. They must be returned by 19:30.' } },
        { speaker: 'Turista', it: 'Se c’è un problema alla ruota, c’è un numero di assistenza?', tr: { bn: 'চাকায় কোনো সমস্যা হলে কি সহায়তার নম্বর আছে?', en: 'If there is a wheel problem, is there an assistance number?' } },
        { speaker: 'Addetta', it: 'Sì, è scritto sullo scontrino e sul manubrio.', tr: { bn: 'হ্যাঁ, রসিদ ও হ্যান্ডেলবারে লেখা আছে।', en: 'Yes, it’s printed on the receipt and on the handlebar.' } },
      ],
      checkQuestion: { bn: 'কয়টার মধ্যে সাইকেল ফেরত দিতে হবে?', en: 'By what time must the bikes be returned?' },
      checkOptions: [
        { bn: 'সন্ধ্যা ৭:৩০-এর মধ্যে', en: 'By 19:30' },
        { bn: 'দুপুর ১২:০০-টার আগে', en: 'Before 12:00' },
        { bn: 'পরদিন সকালে', en: 'Next morning' },
        { bn: 'রাত ১১:০০-টায়', en: 'At 23:00' },
      ],
      checkAnswer: 0,
    },
    {
      id: 't-dlg-8',
      title: { bn: 'আবহাওয়া দেখে ট্রেন যাত্রার পরিকল্পনা বদলানো', en: 'Adjusting travel plans for bad weather' },
      setting: { bn: 'বন্ধুদের মধ্যে আলোচনা', en: 'Planning a day trip' },
      lines: [
        { speaker: 'Elena', it: 'Ho visto le previsioni del tempo: domenica pomeriggio è previsto un temporale forte in montagna.', tr: { bn: 'আবহাওয়ার পূর্বাভাস দেখলাম: রবিবার বিকেলে পাহাড়ে ভারী ঝড়-বৃষ্টির সম্ভাবনা আছে।', en: 'I checked the weather forecast: on Sunday afternoon a heavy storm is expected in the mountains.' } },
        { speaker: 'Luca', it: 'Allora meglio non salire con il sentiero! Cambiamo programma e visitiamo i musei di Torino?', tr: { bn: 'তাহলে পাহাড়ি পথে না ওঠাই ভালো! পরিকল্পনা বদলে তুরিনের জাদুঘর ঘুরে আসব?', en: 'Then better not hike the trail! Shall we change plans and visit Turin’s museums?' } },
        { speaker: 'Elena', it: 'Ottima idea! Prenoto i biglietti del museo online così non facciamo la fila.', tr: { bn: 'দারুণ বুদ্ধি! আমি অনলাইনে জাদুঘরের টিকিট বুক করে রাখি যাতে লাইনে দাঁড়াতে না হয়।', en: 'Great idea! I’ll book the museum tickets online so we don’t queue.' } },
      ],
      checkQuestion: { bn: 'কেন তারা পাহাড়ে যাওয়ার পরিকল্পনা বাতিল করল?', en: 'Why did they cancel the mountain hike?' },
      checkOptions: [
        { bn: 'বিকেলে ঝড়-বৃষ্টির পূর্বাভাস থাকায়', en: 'Because a heavy storm was forecast' },
        { bn: 'টিকিটের দাম বেশি হওয়ায়', en: 'Because tickets cost too much' },
        { bn: 'রেল ধর্মঘট থাকায়', en: 'Because of a train strike' },
        { bn: 'গাইড অসুস্থ হওয়ায়', en: 'Because the guide was ill' },
      ],
      checkAnswer: 0,
    },
  ],
  functionalFrames: [
    {
      id: 't-frm-1',
      situation: { bn: 'ট্রেনে ও স্টেশনে সাহায্য চাওয়া', en: 'Getting help at stations' },
      phrases: [
        { it: 'Scusi, devo convalidare questo biglietto prima di salire?', tr: { bn: 'মাফ করবেন, ওঠার আগে কি এই টিকিট পাঞ্চ করতে হবে?', en: 'Excuse me, must I validate this ticket before boarding?' } },
        { it: 'Il treno precedente era in ritardo e ho perso la coincidenza.', tr: { bn: 'আগের ট্রেন দেরি করায় আমি কানেক্টিং ট্রেন মিস করেছি।', en: 'The earlier train was late and I missed my connection.' } },
      ],
    },
    {
      id: 't-frm-2',
      situation: { bn: 'বিমানবন্দর ও লাগেজ সংক্রান্ত কথা', en: 'Airport check-in & baggage issues' },
      phrases: [
        { it: 'Vorrei imbarcare questa valigia e tenere lo zaino come bagaglio a mano.', tr: { bn: 'আমি এই সুটকেসটি কার্গোতে দিতে চাই আর ব্যাকপ্যাকটি হাতে রাখতে চাই।', en: 'I would like to check this suitcase and keep my backpack as carry-on.' } },
        { it: 'La mia valigia non è arrivata sul nastro.', tr: { bn: 'বেল্টে আমার সুটকেসটি আসেনি।', en: 'My suitcase hasn’t arrived on the belt.' } },
      ],
    },
  ],
  questions: [
    q('q-a2-t-1', { bn: 'লোকাল ট্রেনে ওঠার আগে টিকিট কী করতে হয়?', en: 'Before boarding a regional train, you must:' }, 'Prima di salire sul treno regionale bisogna ___ il biglietto.', ['convalidare', 'firmare', 'buttare', 'dividere'], 0, { bn: 'convalidare = পাঞ্চ/যাচাই করা।', en: 'convalidare = validate.' }),
    q('q-a2-t-2', { bn: '“কানেক্টিং ট্রেন মিস করা” — ইতালিয়ানে:', en: 'How to say "I missed the connection":' }, undefined, ['Ho perso la coincidenza.', 'Ho pagato l’affitto.', 'Ho aperto il conto.', 'Ho spento la luce.'], 0, { bn: 'la coincidenza = কানেক্টিং যাত্রা।', en: 'perdere la coincidenza.' }),
    q('q-a2-t-3', { bn: 'বিমানবন্দরের বোর্ডিং পাস কোনটি?', en: 'Which is "boarding pass"?' }, undefined, ['la carta d’imbarco', 'la marca da bollo', 'la bolletta del gas', 'la tessera del bar'], 0, { bn: 'বোর্ডিং পাস = la carta d’imbarco।', en: 'la carta d’imbarco.' }),
    q('q-a2-t-4', { bn: '“ট্রেনটি ১০ মিনিট দেরি করছে” কীভাবে বলবেন?', en: 'Say "The train is 10 minutes late":' }, 'Il treno ___ dieci minuti di ritardo.', ['porta', 'compra', 'salta', 'firma'], 0, { bn: 'portare / avere ritardo ব্যবহার হয়।', en: 'porta / ha dieci minuti di ritardo.' }),
    q('q-a2-t-5', { bn: 'প্ল্যাটফর্ম ও বগির ইতালিয়ান শব্দ দুটি:', en: 'Words for "platform" and "carriage":' }, undefined, ['binario e carrozza', 'sciopero e dogana', 'rubinetto e lavello', 'farmacia e ricetta'], 0, { bn: 'binario (প্ল্যাটফর্ম), carrozza (বগি)।', en: 'binario and carrozza.' }),
    q(
      'q-a2-t-6',
      { bn: 'যাতায়াতে ধর্মঘটকে কী বলে?', en: 'What does "sciopero" mean?', it: 'Che cosa indica la parola «sciopero» nei trasporti?' },
      undefined,
      ['Transport strike', 'Extra discount', 'Winter timetable', 'High-speed train'],
      0,
      { bn: 'sciopero = ধর্মঘট।', en: 'Strike.', it: 'Interruzione collettiva del servizio lavorativo o dei trasporti.' },
      {
        bn: ['ধর্মঘট', 'অতিরিক্ত ছাড়', 'শীতকালীন সময়সূচি', 'দ্রুতগতির ট্রেন'],
        en: ['Transport strike', 'Extra discount', 'Winter timetable', 'High-speed train'],
        it: ['Sospensione del servizio per protesta sindacale', 'Sconto aggiuntivo', 'Orario invernale', 'Treno ad alta velocità'],
      },
    ),
    q('q-a2-t-7', { bn: 'হাতে রাখার ছোট ব্যাগকে বিমানবন্দরে বলে:', en: 'Carry-on baggage is called:' }, undefined, ['il bagaglio a mano', 'il bagaglio in stiva', 'il deposito cauzionale', 'il rimborso'], 0, { bn: 'হাতে রাখার ব্যাগ = il bagaglio a mano।', en: 'Carry-on luggage.' }),
    q('q-a2-t-8', { bn: 'যাওয়া ও ফিরে আসা উভয় দিকের টিকিট:', en: 'A round-trip ticket:' }, 'Vorrei un biglietto di ___ per Firenze.', ['andata e ritorno', 'solo ritorno', 'scadenza mensile', 'prima classe vuoto'], 0, { bn: 'যাওয়া-আসা টিকিট = andata e ritorno।', en: 'Return ticket.' }),
    q('q-a2-t-9', { bn: 'মাসিক পরিবহন পাসের নাম:', en: 'Monthly transit pass:' }, 'Conviene fare ___ mensile.', ['l’abbonamento', 'l’appartamento', 'il contratto', 'il pronto soccorso'], 0, { bn: 'l’abbonamento = মাসিক/বার্ষিক পাস।', en: 'l’abbonamento.' }),
    q('q-a2-t-10', { bn: 'স্টেশনে কিছুক্ষণের জন্য ব্যাগ রাখার জায়গা:', en: 'Where to store luggage at a train station:' }, undefined, ['al deposito bagagli', 'al pronto soccorso', 'in autostrada', 'al semaforo'], 0, { bn: 'ব্যাগ রাখার স্থান = deposito bagagli।', en: 'Left-luggage office.' }),
    q('q-a2-t-11', { bn: 'বিমানে সুটকেস কার্গোতে জমা দেওয়া:', en: 'Checking luggage into the aircraft hold:' }, 'Devo ___ questa valigia grande in stiva.', ['imbarcare', 'abbassare', 'spegnere', 'leggere'], 0, { bn: 'imbarcare = কার্গোতে/বোর্ডে তোলা।', en: 'imbarcare.' }),
    q('q-a2-t-12', { bn: 'আগাম আবহাওয়ার খবরকে কী বলে?', en: 'Weather forecast in Italian:' }, 'Controlliamo ___ prima di partire.', ['le previsioni del tempo', 'le spese condominiali', 'le ricette mediche', 'le offerte di lavoro'], 0, { bn: 'আবহাওয়ার পূর্বাভাস = le previsioni del tempo।', en: 'Weather forecast.' }),
    q('q-a2-t-13', { bn: 'গাড়িতে তেল ভরতে গেলে বলবেন:', en: 'At the petrol station:' }, 'Buongiorno, vorrei ___ di benzina, per favore.', ['fare il pieno', 'dare il preavviso', 'fare il colloquio', 'chiudere la strada'], 0, { bn: 'fare il pieno = ফুল ট্যাঙ্ক।', en: 'Fill up the tank.' }),
    q('q-a2-t-14', { bn: 'ট্রেন বাতিল হলে টাকা ফেরত চাইতে:', en: 'Asking for a refund when a trip is cancelled:' }, 'Visto che il volo è cancellato, chiedo ___.', ['il rimborso', 'il cambio lavoro', 'la raccolta', 'l’orario di chiusura'], 0, { bn: 'il rimborso = টাকা ফেরত।', en: 'Refund = il rimborso.' }),
  ],
};

export const A2_WORK_SOCIAL_DATA: A2CommunicationModuleData = {
  id: 'a2-work-social',
  expressions: [
    {
      id: 'w-exp-1',
      it: 'inviare il curriculum vitae (CV)',
      meaning: { bn: 'জীবনবৃত্তান্ত (সিভি) পাঠানো', en: 'to send a CV / résumé' },
      phoneticBn: 'ইনভিয়ারে ইল কুররিকুলাম ভিতে',
      exampleIt: 'Ho inviato il curriculum vitae per un posto in magazzino.',
      exampleTr: { bn: 'গুদামের একটি পদের জন্য আমি সিভি পাঠিয়েছি।', en: 'I sent my CV for a warehouse position.' },
    },
    {
      id: 'w-exp-2',
      it: 'sostenere un colloquio di lavoro',
      meaning: { bn: 'চাকরির সাক্ষাৎকার দেওয়া', en: 'to attend a job interview' },
      phoneticBn: 'সোস্তেনেরে উন কোল্লোকুইও দি লাভোরো',
      exampleIt: 'Giovedì sosterrò un colloquio di lavoro a Milano.',
      exampleTr: { bn: 'বৃহস্পতিবার আমি মিলানে একটি চাকরির সাক্ষাৎকার দেব।', en: 'On Thursday I will attend a job interview in Milan.' },
    },
    {
      id: 'w-exp-3',
      it: 'il contratto a tempo determinato / indeterminato',
      meaning: { bn: 'অস্থায়ী চুক্তি / স্থায়ী চুক্তি', en: 'fixed-term / permanent contract' },
      phoneticBn: 'আ তেমপো দেতেরমিনাতো / ইনদেতেরমিনাতো',
      exampleIt: 'Dopo sei mesi di prova, il contratto diventa a tempo indeterminato.',
      exampleTr: { bn: 'ছয় মাসের শিক্ষানবিশ কাল শেষে চাকরিটি স্থায়ী হয়।', en: 'After six months of probation, the contract becomes permanent.' },
    },
    {
      id: 'w-exp-4',
      it: 'lavorare su turni / part-time',
      meaning: { bn: 'শিফটে কাজ করা / খণ্ডকালীন কাজ', en: 'to work in shifts / part-time' },
      phoneticBn: 'লাভোরারে সু তুরনি / পার্ত-তাইম',
      exampleIt: 'In ristorante lavoriamo su turni, la mattina o la sera.',
      exampleTr: { bn: 'রেস্তোরাঁয় আমরা সকালে অথবা সন্ধ্যায় শিফটে কাজ করি।', en: 'At the restaurant we work in shifts, morning or evening.' },
    },
    {
      id: 'w-exp-5',
      it: 'chiedere un giorno di permesso / ferie',
      meaning: { bn: 'এক দিনের ছুটি বা বার্ষিক ছুটি চাওয়া', en: 'to ask for leave / annual holiday' },
      phoneticBn: 'কিয়েদেরে উন জোরনো দি পেরমেসসো / ফেরিয়ে',
      exampleIt: 'Venerdì vorrei chiedere un giorno di permesso per motivi familiari.',
      exampleTr: { bn: 'পারিবারিক কারণে শুক্রবার আমি এক দিনের ছুটি চাইতে চাই।', en: 'On Friday I would like to ask for a day of leave for family reasons.' },
    },
    {
      id: 'w-exp-6',
      it: 'la riunione di lavoro',
      meaning: { bn: 'অফিসের মিটিং', en: 'work meeting' },
      phoneticBn: 'লা রিউনিওনে দি লাভোরো',
      exampleIt: 'Alle undici abbiamo una riunione breve con il responsabile.',
      exampleTr: { bn: 'এগারোটায় ম্যানেজারের সাথে আমাদের একটি ছোট মিটিং আছে।', en: 'At eleven we have a short meeting with the manager.' },
    },
    {
      id: 'w-exp-7',
      it: 'iscriversi a un corso serale',
      meaning: { bn: 'সান্ধ্যকালীন কোর্সে ভর্তি হওয়া', en: 'to enrol in an evening course' },
      phoneticBn: 'ইস্ক্রিভেরসি আ উন কোরসো সেরালে',
      exampleIt: 'Mi sono iscritto a un corso serale di informatica.',
      exampleTr: { bn: 'আমি একটি সান্ধ্যকালীন কম্পিউটার কোর্সে ভর্তি হয়েছি।', en: 'I enrolled in an evening IT course.' },
    },
    {
      id: 'w-exp-8',
      it: 'fare un tirocinio / uno stage',
      meaning: { bn: 'ইন্টার্নশিপ করা', en: 'to do an internship / placement' },
      phoneticBn: 'ফারে উন তিরোচিনিও / উনো স্তাজ',
      exampleIt: 'Dopo il diploma ha fatto uno stage di tre mesi in banca.',
      exampleTr: { bn: 'ডিপ্লোমার পর সে ব্যাংকে তিন মাসের ইন্টার্নশিপ করেছে।', en: 'After the diploma she did a three-month internship at a bank.' },
    },
    {
      id: 'w-exp-9',
      it: 'accettare o rifiutare un invito',
      meaning: { bn: 'আমন্ত্রণ গ্রহণ করা বা ভদ্রভাবে প্রত্যাখ্যান করা', en: 'to accept or decline an invitation' },
      phoneticBn: 'আচ্চেত্তারে ও রিফিউতারে উন ইনভিতো',
      exampleIt: 'Accetto volentieri il vostro invito per cena!',
      exampleTr: { bn: 'রাতের খাবারের আপনাদের আমন্ত্রণ আমি আনন্দের সাথে গ্রহণ করছি!', en: 'I gladly accept your dinner invitation!' },
    },
    {
      id: 'w-exp-10',
      it: 'organizzare una festa a sorpresa',
      meaning: { bn: 'সারপ্রাইজ পার্টির আয়োজন করা', en: 'to organise a surprise party' },
      phoneticBn: 'অর্গানিজ্জারে উনা ফেস্তা আ সোরপ্রেজা',
      exampleIt: 'Sabato organizziamo una cena per il compleanno di Giulia.',
      exampleTr: { bn: 'শনিবার জুলিয়ার জন্মদিন উপলক্ষে আমরা একটি ডিনারের আয়োজন করছি।', en: 'On Saturday we are organising a dinner for Giulia’s birthday.' },
    },
    {
      id: 'w-exp-11',
      it: 'la busta paga e le tasse',
      meaning: { bn: 'বেতন স্লিপ (পে-স্লিপ) ও কর', en: 'payslip and taxes' },
      phoneticBn: 'লা বুস্তা পাগা এ লে তাসসে',
      exampleIt: 'Ogni dieci del mese riceviamo la busta paga in ufficio.',
      exampleTr: { bn: 'প্রতি মাসের দশ তারিখে আমরা অফিসে বেতনের স্লিপ পাই।', en: 'Every 10th of the month we receive our payslip at the office.' },
    },
    {
      id: 'w-exp-12',
      it: 'tenersi in contatto con gli amici',
      meaning: { bn: 'বন্ধুদের সাথে যোগাযোগ রাখা', en: 'to keep in touch with friends' },
      phoneticBn: 'তেনেরসি ইন কোন্তাত্তো',
      exampleIt: 'Anche se abitiamo lontano, ci teniamo spesso in contatto.',
      exampleTr: { bn: 'আমরা দূরে থাকলেও প্রায়ই যোগাযোগ রাখি।', en: 'Even though we live far apart, we keep in touch often.' },
    },
  ],
  dialogues: [
    {
      id: 'w-dlg-1',
      title: { bn: 'চাকরির সাক্ষাৎকার: অভিজ্ঞতা ও সময়সূচি', en: 'Job interview: experience and hours' },
      setting: { bn: 'অফিসের মিটিং রুম', en: 'HR interview room' },
      lines: [
        { speaker: 'Direttore', it: 'Buongiorno, grazie per essere venuto. Mi racconti brevemente il Suo ultimo lavoro.', tr: { bn: 'শুভ সকাল, আসার জন্য ধন্যবাদ। আপনার শেষ কাজের ব্যাপারে সংক্ষেপে বলুন।', en: 'Good morning, thanks for coming. Briefly tell me about your last job.' } },
        { speaker: 'Candidato', it: 'Ho lavorato per due anni in un supermercato come commesso e mi occupavo anche del magazzino.', tr: { bn: 'আমি দুই বছর একটি সুপারমার্কেটে বিক্রয়কর্মী হিসেবে কাজ করেছি এবং গুদামের দায়িত্বও দেখেছি।', en: 'I worked for two years in a supermarket as a sales assistant and also looked after the stockroom.' } },
        { speaker: 'Direttore', it: 'Ottimo! È disponibile a lavorare anche su turni nel fine settimana?', tr: { bn: 'দারুণ! সপ্তাহান্তেও শিফটে কাজ করতে আপনি কি প্রস্তুত আছেন?', en: 'Great! Are you also available to work shifts on weekends?' } },
        { speaker: 'Candidato', it: 'Sì, nessun problema. Quando potrei iniziare?', tr: { bn: 'হ্যাঁ, কোনো সমস্যা নেই। আমি কবে থেকে শুরু করতে পারি?', en: 'Yes, no problem. When could I start?' } },
      ],
      checkQuestion: { bn: 'প্রার্থীর আগের অভিজ্ঞতা কী?', en: 'What was the candidate’s previous job?' },
      checkOptions: [
        { bn: 'সুপারমার্কেটে বিক্রয়কর্মী ও গুদামের কাজ (২ বছর)', en: 'Supermarket assistant and stockroom (2 years)' },
        { bn: 'হাসপাতালে ডাক্তার', en: 'Hospital doctor' },
        { bn: 'বাস চালক', en: 'Bus driver' },
        { bn: 'এখনো কোনো কাজ করেননি', en: 'No prior work experience' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'w-dlg-2',
      title: { bn: 'ম্যানেজারের কাছে ছুটির আবেদন', en: 'Asking a manager for a day off' },
      setting: { bn: 'অফিস ডেস্ক', en: 'Office desk' },
      lines: [
        { speaker: 'Dipendente', it: 'Scusi Marco, posso chiederLe un giorno di permesso venerdì prossimo? Devo andare in questura.', tr: { bn: 'মাফ করবেন মার্কো, আগামী শুক্রবার কি এক দিনের ছুটি চাইতে পারি? আমাকে কোয়েস্তুরায় যেতে হবে।', en: 'Excuse me Marco, may I ask for a day of leave next Friday? I need to go to the immigration office.' } },
        { speaker: 'Marco', it: 'Venerdì mattina abbiamo pochi clienti, quindi va bene. Compili il modulo sul portale interno.', tr: { bn: 'শুক্রবার সকালে গ্রাহক কম থাকে, তাই চলবে। অফিসের পোর্টালে ফর্মটি পূরণ করে দিন।', en: 'Friday morning we have few clients, so that’s fine. Fill out the form on the internal portal.' } },
        { speaker: 'Dipendente', it: 'Grazie mille! Se serve, posso recuperare due ore lunedì sera.', tr: { bn: 'অনেক ধন্যবাদ! দরকার হলে সোমবার সন্ধ্যায় দুই ঘণ্টা অতিরিক্ত কাজ করে দেব।', en: 'Thank you! If needed, I can make up two hours on Monday evening.' } },
      ],
      checkQuestion: { bn: 'ছুটি নিতে কর্মীকে কী করতে হবে?', en: 'What must the employee do to confirm the leave?' },
      checkOptions: [
        { bn: 'অফিসের পোর্টালে ফর্ম পূরণ করতে হবে', en: 'Fill out the form on the internal portal' },
        { bn: 'আরেকজনকে দিয়ে কাজ করাতে হবে', en: 'Send a relative instead' },
        { bn: 'ডাক্তারের সনদ আনতে হবে', en: 'Bring a sick note' },
        { bn: 'শুক্রবারের ছুটি বাতিল করতে হবে', en: 'Cancel the appointment' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'w-dlg-3',
      title: { bn: 'ভাষা বা কারিগরি কোর্সে ভর্তি', en: 'Enrolling in an evening course' },
      setting: { bn: 'কোর্সের সচিবালয়', en: 'Course secretariat' },
      lines: [
        { speaker: 'Iscritto', it: 'Salve, vorrei iscrivermi al corso serale di preparazione B1 che comincia a ottobre.', tr: { bn: 'নমস্কার, অক্টোবরে শুরু হওয়া সান্ধ্যকালীন বি১ প্রস্তুতি কোর্সে ভর্তি হতে চাই।', en: 'Hello, I would like to enrol in the evening B1 prep course starting in October.' } },
        { speaker: 'Segretaria', it: 'Le lezioni sono il lunedì e il mercoledì dalle diciotto e trenta alle venti e trenta.', tr: { bn: 'ক্লাসগুলো সোমবার ও বুধবার সন্ধ্যা ৬:৩০ থেকে রাত ৮:৩০ পর্যন্ত।', en: 'Classes are on Mondays and Wednesdays from 18:30 to 20:30.' } },
        { speaker: 'Iscritto', it: 'Perfetto dopo il lavoro! È previsto un test d’ingresso?', tr: { bn: 'কাজের পর একদম সময়মতো! ভর্তির আগে কি কোনো প্লেসমেন্ট টেস্ট আছে?', en: 'Perfect after work! Is there a placement test?' } },
        { speaker: 'Segretaria', it: 'Sì, un breve test orale e scritto mercoledì alle diciotto.', tr: { bn: 'হ্যাঁ, বুধবার সন্ধ্যা ছয়টায় ছোট একটি মৌখিক ও লিখিত পরীক্ষা হবে।', en: 'Yes, a short written and oral placement test on Wednesday at six.' } },
      ],
      checkQuestion: { bn: 'কোর্সের ক্লাস সপ্তাহে কয়দিন ও কোন কোন বারে?', en: 'Which days are the evening classes?' },
      checkOptions: [
        { bn: 'সোমবার ও বুধবার সন্ধ্যায়', en: 'Monday and Wednesday evenings' },
        { bn: 'শুধু রবিবার সকালে', en: 'Sunday mornings only' },
        { bn: 'প্রতিদিন দুপুরে', en: 'Every afternoon' },
        { bn: 'শনিবার রাতে', en: 'Saturday nights' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'w-dlg-4',
      title: { bn: 'অফিসের সহকর্মীর সাথে মিটিংয়ের সময় ঠিক করা', en: 'Scheduling a meeting with a colleague' },
      setting: { bn: 'সহকর্মীদের চ্যাট', en: 'Office corridor' },
      lines: [
        { speaker: 'Chiara', it: 'Ciao Samir, quando possiamo rivedere insieme i dati del progetto?', tr: { bn: 'হ্যালো সামির, প্রকল্পের তথ্যগুলো আমরা একসাথে কখন দেখতে পারি?', en: 'Hi Samir, when can we review the project data together?' } },
        { speaker: 'Samir', it: 'Stamattina sono occupato fino alle dodici, ma dopo pranzo sono libero dalle quattordici in poi.', tr: { bn: 'আজ সকালে বারোটা পর্যন্ত ব্যস্ত আছি, তবে দুপুরের খাবারের পর দুইটা থেকে আমি ফ্রি আছি।', en: 'This morning I am busy until 12, but after lunch I am free from 14:00 onwards.' } },
        { speaker: 'Chiara', it: 'Allora ci vediamo alle quattordici e trenta nella sala riunioni al secondo piano.', tr: { bn: 'তাহলে দোতলার মিটিং রুমে ২:৩০-এ দেখা হচ্ছে।', en: 'Then let’s meet at 14:30 in the second-floor meeting room.' } },
      ],
      checkQuestion: { bn: 'মিটিং কখন এবং কোথায় ঠিক হলো?', en: 'When and where is the meeting set?' },
      checkOptions: [
        { bn: 'দুপুর ২:৩০-এ, দোতলার মিটিং রুমে', en: '14:30, second-floor meeting room' },
        { bn: 'সকাল ১০টায় ক্যাফেতে', en: '10:00 at the café' },
        { bn: 'সন্ধ্যা ৬টায় স্টেশনে', en: '18:00 at the station' },
        { bn: 'আগামী সপ্তাহে অনলাইনে', en: 'Online next week' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'w-dlg-5',
      title: { bn: 'নৈশভোজের দাওয়াত গ্রহণ ও প্রত্যাখ্যান', en: 'Accepting and declining an invitation politely' },
      setting: { bn: 'বন্ধুর ফোন/বার্তা', en: 'Friendly chat' },
      lines: [
        { speaker: 'Giulia', it: 'Ciao! Sabato sera organizziamo una pizzata a casa mia: ti va di venire?', tr: { bn: 'হ্যালো! শনিবার রাতে আমার বাসায় পিজ্জা পার্টি করছি: তোমার কি আসতে ভালো লাগবে?', en: 'Hi! On Saturday night we’re having a pizza night at my place: do you fancy coming?' } },
        { speaker: 'Nadia', it: 'Mi farebbe davvero piacere, però sabato ho il turno di sera fino alle ventidue!', tr: { bn: 'আমার খুব ভালো লাগত, কিন্তু শনিবার রাত দশটা পর্যন্ত আমার কাজের শিফট আছে!', en: 'I would really love to, yet on Saturday I have an evening shift until 22:00!' } },
        { speaker: 'Giulia', it: 'Peccato! Allora che ne dici di domenica a pranzo al parco?', tr: { bn: 'ইশ! তাহলে রবিবার দুপুরে পার্কে লাঞ্চ করলে কেমন হয়?', en: 'A pity! What about Sunday lunch at the park instead?' } },
        { speaker: 'Nadia', it: 'Domenica ci sono sicuro! Porto io il dolce.', tr: { bn: 'রবিবার আমি অবশ্যই থাকব! মিষ্টিটা আমি নিয়ে আসব।', en: 'On Sunday I’m definitely in! I’ll bring dessert.' } },
      ],
      checkQuestion: { bn: 'নাদিয়া কেন শনিবার রাতে আসতে পারবে না?', en: 'Why can’t Nadia come on Saturday night?' },
      checkOptions: [
        { bn: 'রাত দশটা পর্যন্ত কাজের শিফট থাকায়', en: 'She works an evening shift until 22:00' },
        { bn: 'সে শহর ছেড়ে চলে গেছে', en: 'She left town' },
        { bn: 'তার পিজ্জা পছন্দ নয়', en: 'She dislikes pizza' },
        { bn: 'তার জ্বর এসেছে', en: 'She has a fever' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'w-dlg-6',
      title: { bn: 'সহকর্মীকে জন্মদিনের উপহার কেনা', en: 'Organising a colleague’s birthday gift' },
      setting: { bn: 'অফিসের বিরতি', en: 'Coffee break' },
      lines: [
        { speaker: 'Paolo', it: 'La settimana prossima è il compleanno di Anna: raccogliamo cinque euro a testa per un regalo?', tr: { bn: 'আগামী সপ্তাহে আন্নার জন্মদিন: উপহারের জন্য কি জনপ্রতি পাঁচ ইউরো করে তুলব?', en: 'Next week is Anna’s birthday: shall we collect 5 euros each for a gift?' } },
        { speaker: 'Mina', it: 'Volentieri! Che cosa le piace? Un buono per la libreria o una bella pianta?', tr: { bn: 'অবশ্যই! তার কী পছন্দ? বইয়ের দোকানের ভাউচার নাকি সুন্দর একটি গাছ?', en: 'Gladly! What does she like? A bookshop voucher or a nice plant?' } },
        { speaker: 'Paolo', it: 'Legge sempre romanzi gialli in treno, quindi un buono libreria è perfetto!', tr: { bn: 'সে ট্রেনে সবসময় গোয়েন্দা উপন্যাস পড়ে, তাই বইয়ের ভাউচারটাই সেরা হবে!', en: 'She always reads mystery novels on the train, so a bookshop voucher will be ideal!' } },
      ],
      checkQuestion: { bn: 'আন্নার জন্য কী উপহার ঠিক করা হলো?', en: 'What gift did they choose for Anna?' },
      checkOptions: [
        { bn: 'বইয়ের দোকানের ভাউচার (buono libreria)', en: 'A bookshop voucher' },
        { bn: 'একটি সাইকেল', en: 'A bicycle' },
        { bn: 'কফি মেশিন', en: 'A coffee machine' },
        { bn: 'শুধু একটি কেক', en: 'Only a cake' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'w-dlg-7',
      title: { bn: 'ব্যাংকে বেতনের অ্যাকাউন্ট খোলা', en: 'Opening a bank account for salary' },
      setting: { bn: 'ব্যাংক শাখা', en: 'Bank branch' },
      lines: [
        { speaker: 'Cliente', it: 'Buongiorno, ho appena firmato un contratto di lavoro e vorrei aprire un conto corrente per lo stipendio.', tr: { bn: 'শুভ সকাল, আমি সবেমাত্র একটি চাকরির চুক্তি সই করেছি এবং বেতনের জন্য একটি ব্যাংক অ্যাকাউন্ট খুলতে চাই।', en: 'Good morning, I just signed a job contract and want to open a current account for my salary.' } },
        { speaker: 'Impiegato', it: 'Benissimo! Servono il documento d’identità, il codice fiscale e il contratto di lavoro.', tr: { bn: 'দারুণ! পরিচয়পত্র, ট্যাক্স কোড এবং চাকরির চুক্তিপত্র লাগবে।', en: 'Great! We need your ID, tax code, and work contract.' } },
        { speaker: 'Cliente', it: 'Subito dopo avrò già l’IBAN da dare all’azienda?', tr: { bn: 'সাথে সাথেই কি কোম্পানিকে দেওয়ার জন্য IBAN পেয়ে যাব?', en: 'Will I have the IBAN right away to give my company?' } },
        { speaker: 'Impiegato', it: 'Sì, lo stampiamo oggi stesso; il bancomat invece arriva a casa per posta in una settimana.', tr: { bn: 'হ্যাঁ, আজকেই প্রিন্ট করে দেব; তবে এটিএম কার্ড এক সপ্তাহের মধ্যে বাসায় ডাকযোগে পৌঁছাবে।', en: 'Yes, we print it today; the debit card arrives at home by post in a week.' } },
      ],
      checkQuestion: { bn: 'গ্রাহক কবে এটিএম কার্ড (bancomat) হাতে পাবেন?', en: 'When will the customer receive the debit card?' },
      checkOptions: [
        { bn: 'এক সপ্তাহের মধ্যে ডাকযোগে বাসায়', en: 'In one week at home by post' },
        { bn: 'সাথে সাথে কাউন্টার থেকে', en: 'Immediately at the desk' },
        { bn: 'এক মাস পরে', en: 'One month later' },
        { bn: 'অ্যাকাউন্টে এটিএম কার্ড নেই', en: 'No debit card is included' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'w-dlg-8',
      title: { bn: 'পড়াশোনা ও শখ নিয়ে বন্ধুত্বপূর্ণ আলাপ', en: 'Talking about studies and hobbies' },
      setting: { bn: 'লাইব্রেরির ক্যাফে', en: 'University café' },
      lines: [
        { speaker: 'Andrea', it: 'Che cosa studi quest’anno oltre all’italiano?', tr: { bn: 'ইতালিয়ান ছাড়া এ বছর তুমি আর কী পড়ছ?', en: 'What are you studying this year besides Italian?' } },
        { speaker: 'Farah', it: 'Faccio un corso professionale di contabilità la mattina e nel tempo libero gioco a pallavolo.', tr: { bn: 'সকালে আমি অ্যাকাউন্টিংয়ের একটি পেশাদার কোর্স করছি এবং অবসর সময়ে ভলিবল খেলি।', en: 'I’m taking a vocational accounting course in the morning and in my free time I play volleyball.' } },
        { speaker: 'Andrea', it: 'Davvero? Anche noi cerchiamo giocatori per il torneo di quartiere di domenica!', tr: { bn: 'সত্যি? রবিবারের পাড়ার টুর্নামেন্টের জন্য আমরাও খেলোয়াড় খুঁজছি!', en: 'Really? We are also looking for players for Sunday’s neighbourhood tournament!' } },
      ],
      checkQuestion: { bn: 'ফারাহ অবসর সময়ে কী করে?', en: 'What does Farah do in her free time?' },
      checkOptions: [
        { bn: 'ভলিবল খেলে', en: 'Plays volleyball' },
        { bn: 'রাতের শিফটে কাজ করে', en: 'Works night shifts' },
        { bn: 'গাড়ি চালায়', en: 'Drives a taxi' },
        { bn: 'ছবি আঁকে', en: 'Paints' },
      ],
      checkAnswer: 0,
    },
  ],
  functionalFrames: [
    {
      id: 'w-frm-1',
      situation: { bn: 'সাক্ষাৎকারে নিজের দক্ষতা বলা', en: 'Presenting experience in an interview' },
      phrases: [
        { it: 'Ho lavorato per due anni nel settore della ristorazione / logistica.', tr: { bn: 'আমি রেস্তোরাঁ / লজিস্টিক্স খাতে দুই বছর কাজ করেছি।', en: 'I worked for two years in hospitality / logistics.' } },
        { it: 'Imparo velocemente e lavoro bene in squadra.', tr: { bn: 'আমি দ্রুত শিখতে পারি এবং দলগতভাবে ভালো কাজ করি।', en: 'I learn quickly and work well in a team.' } },
      ],
    },
    {
      id: 'w-frm-2',
      situation: { bn: 'দাওয়াত গ্রহণ ও ভদ্রভাবে না বলা', en: 'Accepting or declining invitations' },
      phrases: [
        { it: 'Grazie dell’invito, vengo molto volentieri!', tr: { bn: 'আমন্ত্রণের জন্য ধন্যবাদ, আমি খুব খুশি হয়ে আসব!', en: 'Thanks for the invitation, I’d gladly come!' } },
        { it: 'Mi dispiace molto, ma purtroppo ho già un impegno.', tr: { bn: 'খুব দুঃখিত, কিন্তু দুর্ভাগ্যবশত আমার আগে থেকেই একটি কাজ আছে।', en: 'I’m really sorry, unfortunately I already have plans.' } },
      ],
    },
  ],
  questions: [
    q('q-a2-w-1', { bn: 'স্থায়ী চাকরির চুক্তিকে কী বলে?', en: 'What is a permanent employment contract called?' }, undefined, ['contratto a tempo indeterminato', 'contratto di affitto', 'bolletta mensile', 'permesso orario'], 0, { bn: 'tempo indeterminato = অনির্দিষ্ট/স্থায়ী মেয়াদ।', en: 'a tempo indeterminato.' }),
    q('q-a2-w-2', { bn: 'চাকরির সাক্ষাৎকারের সঠিক ইতালিয়ান:', en: 'Which means "job interview"?' }, undefined, ['il colloquio di lavoro', 'lo sciroppo', 'la coincidenza', 'il deposito'], 0, { bn: 'চাকরির সাক্ষাৎকার = il colloquio di lavoro।', en: 'il colloquio di lavoro.' }),
    q('q-a2-w-3', { bn: 'কর্মক্ষেত্রে “বেতন স্লিপ”-কে কী বলে?', en: 'What is a "payslip" in Italian?' }, undefined, ['la busta paga', 'la carta d’imbarco', 'la ricetta medica', 'la raccolta'], 0, { bn: 'বেতন স্লিপ = la busta paga।', en: 'la busta paga.' }),
    q('q-a2-w-4', { bn: 'ভদ্রভাবে কোনো আমন্ত্রণ প্রত্যাখ্যান করতে বলবেন:', en: 'Politely decline an invitation:' }, 'Grazie dell’invito, ma ___ sabato lavoro.', ['purtroppo', 'finalmente', 'dappertutto', 'subito'], 0, { bn: 'দুর্ভাগ্যবশত = purtroppo।', en: 'purtroppo = unfortunately.' }),
    q('q-a2-w-5', { bn: '“সাক্ষাৎকার দেওয়া” ক্রিয়াগুচ্ছ কোনটি?', en: 'Verb phrase for taking an interview:' }, 'Domani devo ___ un colloquio importante.', ['sostenere', 'convalidare', 'spegnere', 'buttare'], 0, { bn: 'সাক্ষাৎকার দেওয়া = sostenere / fare un colloquio।', en: 'sostenere un colloquio.' }),
    q('q-a2-w-6', { bn: 'কাজের মাঝখানে “শিফট”-কে কী বলে?', en: 'Word for "work shift":' }, 'Questa settimana faccio ___ di mattina.', ['il turno', 'il binario', 'il rubinetto', 'l’affitto'], 0, { bn: 'il turno = শিফট।', en: 'il turno.' }),
    q('q-a2-w-7', { bn: 'বস/ম্যানেজারের কাছে এক দিনের ছুটি চাইলে:', en: 'Asking for a single day of leave:' }, 'Posso chiedere un giorno di ___ per venerdì?', ['permesso', 'preavviso', 'sciopero', 'ricetta'], 0, { bn: 'এক দিনের অনুমতি/ছুটি = un giorno di permesso।', en: 'un giorno di permesso.' }),
    q('q-a2-w-8', { bn: 'ইন্টার্নশিপ বা প্রশিক্ষণকালীন কাজকে বলে:', en: 'An internship in Italian:' }, undefined, ['un tirocinio / uno stage', 'un temporale', 'un bilocale', 'un biglietto'], 0, { bn: 'tirocinio বা stage।', en: 'tirocinio / stage.' }),
    q('q-a2-w-9', { bn: '“আমি আনন্দের সাথে আসব” — ইতালিয়ানে:', en: '"I will gladly come":' }, 'Sabato sera vengo ___!', ['molto volentieri', 'mal di gola', 'in ritardo', 'a digiuno'], 0, { bn: 'molto volentieri = খুব খুশি মনে।', en: 'molto volentieri.' }),
    q('q-a2-w-10', { bn: 'ব্যাংকে বেতনের জন্য কোন অ্যাকাউন্ট খোলা হয়?', en: 'Bank account to receive salary:' }, 'Vorrei aprire ___ per ricevere lo stipendio.', ['un conto corrente', 'una carta d’imbarco', 'una visita oculistica', 'un corso serale'], 0, { bn: 'চলতি হিসাব = un conto corrente।', en: 'un conto corrente.' }),
    q('q-a2-w-11', { bn: 'সান্ধ্যকালীন কোর্সে ভর্তি হতে:', en: 'To enrol in a course:' }, 'Mi sono ___ a un corso di italiano B1.', ['iscritto', 'scaricato', 'fermato', 'perso'], 0, { bn: 'ভর্তি হওয়া = iscriversi (mi sono iscritto)।', en: 'iscriversi.' }),
    q('q-a2-w-12', { bn: 'সহকর্মীদের দলীয় সভার নাম:', en: 'A team meeting:' }, 'Alle undici abbiamo una ___ in ufficio.', ['riunione', 'bolletta', 'farmacia', 'valigia'], 0, { bn: 'la riunione = মিটিং।', en: 'la riunione.' }),
    q('q-a2-w-13', { bn: '“আমাদের যোগাযোগ রাখা উচিত”:', en: '"We should keep in touch":' }, 'Dobbiamo ___ in contatto anche dopo il corso!', ['tenerci', 'spegnerci', 'perderci', 'lavarci'], 0, { bn: 'যোগাযোগ রাখা = tenersi in contatto → tenerci।', en: 'tenersi in contatto.' }),
    q('q-a2-w-14', { bn: 'উপহারের দোকানে কার্ডের বদলে কমন ভাউচার:', en: 'Gift voucher at a shop:' }, 'Compriamo un ___ per la libreria.', ['buono regalo', 'deposito bagagli', 'permesso di soggiorno', 'certificato'], 0, { bn: 'buono regalo = গিফট ভাউচার।', en: 'Gift voucher.' }),
  ],
};

export const A2_FUNCTIONAL_COMM_DATA: A2CommunicationModuleData = {
  id: 'a2-functional-comm',
  expressions: [
    {
      id: 'f-exp-1',
      it: 'Chiedo scusa, c’è stato un malinteso.',
      meaning: { bn: 'ক্ষমা করবেন, এখানে একটি ভুল বোঝাবুঝি হয়েছে।', en: 'I apologise, there has been a misunderstanding.' },
      phoneticBn: 'কিয়েদো স্কুজা, চে স্তাতো উন মালিনতেজো',
      exampleIt: 'Chiedo scusa, c’è stato un malinteso sull’orario della consegna.',
      exampleTr: { bn: 'দুঃখিত, ডেলিভারির সময় নিয়ে একটি ভুল বোঝাবুঝি হয়েছে।', en: 'I apologise, there was a misunderstanding about the delivery time.' },
    },
    {
      id: 'f-exp-2',
      it: 'Può ripetere un po’ più lentamente, per favore?',
      meaning: { bn: 'দয়া করে কি আরেকটু ধীরে পুনরায় বলবেন?', en: 'Could you repeat a bit more slowly, please?' },
      phoneticBn: 'পুও রিপেতেরে উন পো পিউ লেন্তামেন্তে',
      exampleIt: 'Non ho capito bene l’ultima parte: può ripetere più lentamente?',
      exampleTr: { bn: 'শেষের অংশটা ঠিক বুঝিনি: আরেকটু ধীরে বলবেন কি?', en: 'I didn’t quite catch the last part: could you repeat more slowly?' },
    },
    {
      id: 'f-exp-3',
      it: 'Potrebbe darmi una mano con…?',
      meaning: { bn: '…-এ আমাকে কি একটু সাহায্য করতে পারবেন?', en: 'Could you give me a hand with…?' },
      phoneticBn: 'পোত্রেব্বে দারমি উনা মানো কন',
      exampleIt: 'Scusi, potrebbe darmi una mano a compilare questo modulo?',
      exampleTr: { bn: 'মাফ করবেন, এই ফর্মটি পূরণ করতে একটু সাহায্য করতে পারবেন?', en: 'Excuse me, could you give me a hand filling out this form?' },
    },
    {
      id: 'f-exp-4',
      it: 'Sono d’accordo / Non sono molto convinto/a.',
      meaning: { bn: 'আমি একমত / আমি পুরোপুরি নিশ্চিত নই।', en: 'I agree / I am not entirely convinced.' },
      phoneticBn: 'সোনো দাক্কোরদো / নন সোনো কোনভিন্তো',
      exampleIt: 'Sono d’accordo con te: conviene prenotare in anticipo.',
      exampleTr: { bn: 'আমি তোমার সাথে একমত: আগেভাগে বুক করা ভালো।', en: 'I agree with you: it’s best to book ahead.' },
    },
    {
      id: 'f-exp-5',
      it: 'Sullo scontrino c’è un errore di prezzo.',
      meaning: { bn: 'রসিদে দামের একটি ভুল হয়েছে।', en: 'There is a price error on the receipt.' },
      phoneticBn: 'সুল্লো স্কোনত্রিনো চে উন এররোরে',
      exampleIt: 'Scusi, sullo scontrino hanno calcolato due bottiglie invece di una.',
      exampleTr: { bn: 'মাফ করবেন, রসিদে একটার জায়গায় দুইটা বোতলের দাম ধরা হয়েছে।', en: 'Excuse me, on the receipt two bottles were charged instead of one.' },
    },
    {
      id: 'f-exp-6',
      it: 'Vorrei cambiare questo articolo o avere un buono.',
      meaning: { bn: 'আমি এই পণ্যটি বদলাতে চাই অথবা ভাউচার চাই।', en: 'I’d like to exchange this item or get a voucher.' },
      phoneticBn: 'ভোররেই কামবিয়ারে কুয়েস্তো আরতিকোলো',
      exampleIt: 'La taglia è stretta: posso cambiarla con una più grande?',
      exampleTr: { bn: 'সাইজটা ছোট হচ্ছে: বড় সাইজের সাথে কি বদলাতে পারি?', en: 'The size is tight: can I exchange it for a larger one?' },
    },
    {
      id: 'f-exp-7',
      it: 'Non è colpa Sua, ma dobbiamo trovare una soluzione.',
      meaning: { bn: 'এটা আপনার দোষ নয়, তবে আমাদের একটি সমাধান বের করতে হবে।', en: 'It’s not your fault, yet we need to find a solution.' },
      phoneticBn: 'নন এ কোলপা সুয়া, মা দোব্বিয়ামো ত্রোভারে উনা সোলুৎসিওনে',
      exampleIt: 'Capisco il problema, vediamo come trovare una soluzione oggi.',
      exampleTr: { bn: 'সমস্যাটি বুঝতে পারছি, আজই কীভাবে সমাধান করা যায় দেখি।', en: 'I understand the issue, let’s see how to find a solution today.' },
    },
    {
      id: 'f-exp-8',
      it: 'Che cosa intende dire con questa frase?',
      meaning: { bn: 'এই বাক্যটি দিয়ে আপনি কী বোঝাতে চাচ্ছেন?', en: 'What do you mean by this sentence?' },
      phoneticBn: 'কে কোজা ইনতেন্দে দিরে কন কুয়েস্তা ফ্রাজে',
      exampleIt: 'Mi scusi, che cosa significa esattamente “marca da bollo”?',
      exampleTr: { bn: 'মাফ করবেন, “marca da bollo” বলতে ঠিক কী বোঝায়?', en: 'Excuse me, what does “marca da bollo” mean exactly?' },
    },
    {
      id: 'f-exp-9',
      it: 'Secondo me è meglio fare così…',
      meaning: { bn: 'আমার মতে এভাবে করা ভালো…', en: 'In my opinion it’s better to do this…' },
      phoneticBn: 'সেকোন্দো মে এ মেলিয়ো ফারে কোজি',
      exampleIt: 'Secondo me è meglio partire presto per evitare il traffico.',
      exampleTr: { bn: 'আমার মতে যানজট এড়াতে ভোরে রওনা হওয়া ভালো।', en: 'In my opinion it’s better to leave early to avoid traffic.' },
    },
    {
      id: 'f-exp-10',
      it: 'La ringrazio davvero per la Sua disponibilità.',
      meaning: { bn: 'আপনার সহযোগিতার জন্য আন্তরিক ধন্যবাদ।', en: 'Thank you very much indeed for your helpfulness.' },
      phoneticBn: 'লা রিনগ্রাৎসিও দাভভেরো পের লা সুয়া দিস্পোনিবিলিতা',
      exampleIt: 'La ringrazio davvero per la pazienza e la disponibilità!',
      exampleTr: { bn: 'আপনার ধৈর্য ও সহযোগিতার জন্য অসংখ্য ধন্যবাদ!', en: 'Thank you really for your patience and helpfulness!' },
    },
    {
      id: 'f-exp-11',
      it: 'Ho smarrito il portafoglio / il cellulare.',
      meaning: { bn: 'আমি মানিব্যাগ / মোবাইল ফোন হারিয়ে ফেলেছি।', en: 'I have lost my wallet / mobile phone.' },
      phoneticBn: 'ও স্মাররিতো ইল পোরতাফোলিয়ো',
      exampleIt: 'Ho smarrito la borsa sull’autobus ventiquattro.',
      exampleTr: { bn: 'আমি ২৪ নম্বর বাসে ব্যাগটি হারিয়ে ফেলেছি।', en: 'I lost my bag on bus 24.' },
    },
    {
      id: 'f-exp-12',
      it: 'Potremmo spostare l’appuntamento a giovedì?',
      meaning: { bn: 'আমরা কি অ্যাপয়েন্টমেন্টটা বৃহস্পতিবারে সরাতে পারি?', en: 'Could we move the appointment to Thursday?' },
      phoneticBn: 'পোত্রেমমো স্পোস্তারে লাপ্পুনতামেন্তো আ জোভেদি',
      exampleIt: 'Se non Le crea disturbo, potremmo spostare l’incontro a giovedì?',
      exampleTr: { bn: 'আপনার অসুবিধা না হলে কি দেখা করার সময়টা বৃহস্পতিবারে নেওয়া যায়?', en: 'If it’s no trouble, could we move the meeting to Thursday?' },
    },
  ],
  dialogues: [
    {
      id: 'f-dlg-1',
      title: { bn: 'দোকানে রসিদের ভুল সংশোধন', en: 'Fixing a receipt overcharge politely' },
      setting: { bn: 'সুপারমার্কেটের ক্যাশ ডেস্ক', en: 'Supermarket customer desk' },
      lines: [
        { speaker: 'Cliente', it: 'Mi scusi, ho appena controllato lo scontrino: qui risultano due pacchi di caffè, ma ne ho preso solo uno.', tr: { bn: 'মাফ করবেন, আমি এইমাত্র রসিদ দেখলাম: এখানে দুই প্যাকেট কফির দাম আছে, অথচ আমি শুধু একটা নিয়েছি।', en: 'Excuse me, I just checked the receipt: two packs of coffee are listed here, yet I only took one.' } },
        { speaker: 'Cassiera', it: 'Ha ragione, mi scusi tanto! Controllo subito il codice nella busta.', tr: { bn: 'আপনি ঠিক বলেছেন, খুবই দুঃখিত! এখনই ব্যাগে থাকা পণ্যটি মিলিয়ে দেখছি।', en: 'You’re right, I am so sorry! Let me check the item in the bag right away.' } },
        { speaker: 'Cliente', it: 'Nessun problema, capita!', tr: { bn: 'কোনো সমস্যা নেই, এমনটা হতেই পারে!', en: 'No problem, it happens!' } },
        { speaker: 'Cassiera', it: 'Ecco i tre euro e cinquanta di differenza in contanti. Buona giornata!', tr: { bn: 'এই যে বাড়তি ৩.৫০ ইউরো নগদ ফেরত নিন। দিনটি ভালো কাটুক!', en: 'Here are the 3.50 euros difference in cash. Have a nice day!' } },
      ],
      checkQuestion: { bn: 'রসিদে কী ভুল হয়েছিল?', en: 'What error happened on the receipt?' },
      checkOptions: [
        { bn: 'একটি কফির বদলে দুটি কফির দাম ধরা হয়েছিল', en: 'Two coffee packs were charged instead of one' },
        { bn: 'তারিখ ভুল লেখা ছিল', en: 'Wrong date' },
        { bn: 'ক্যাশিয়ার কার্ড নেননি', en: 'Card was declined' },
        { bn: 'দোকান বন্ধ হয়ে গিয়েছিল', en: 'Shop was closed' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'f-dlg-2',
      title: { bn: 'দোকানে জামার সাইজ বদলানো', en: 'Exchanging an item for a different size' },
      setting: { bn: 'পোশাকের দোকান', en: 'Clothing store' },
      lines: [
        { speaker: 'Cliente', it: 'Buongiorno, ho comprato questa giacca ieri, ma a casa ho visto che è un po’ stretta. Posso cambiarla?', tr: { bn: 'শুভ সকাল, গতকাল এই জ্যাকেটটি কিনেছিলাম, তবে বাসায় গিয়ে দেখলাম একটু টাইট। বদলে নিতে পারি?', en: 'Good morning, I bought this jacket yesterday, yet at home I saw it’s a bit tight. May I exchange it?' } },
        { speaker: 'Commessa', it: 'Certo, ha conservato lo scontrino e l’etichetta sul capo?', tr: { bn: 'অবশ্যই, আপনার কাছে কি রসিদ ও পোশাকের ট্যাগ আছে?', en: 'Certainly, did you keep the receipt and the tag on it?' } },
        { speaker: 'Cliente', it: 'Sì, eccoli qui. Avete la taglia L dello stesso colore blu?', tr: { bn: 'হ্যাঁ, এই যে নিন। একই নীল রঙের এল (L) সাইজ হবে কি?', en: 'Yes, here they are. Do you have size L in the same blue colour?' } },
        { speaker: 'Commessa', it: 'Controllo subito in magazzino... Sì, eccola! La provi pure.', tr: { bn: 'গুদামে এখনই দেখছি... হ্যাঁ, এই যে! পরে দেখতে পারেন।', en: 'Checking the stockroom right now... Yes, here it is! Feel free to try it on.' } },
      ],
      checkQuestion: { bn: 'জ্যাকেট বদলাতে কী কী থাকতে হবে?', en: 'What is required to exchange the jacket?' },
      checkOptions: [
        { bn: 'রসিদ এবং পোশাকের মূল ট্যাগ', en: 'Receipt and original clothing tag' },
        { bn: 'আরেকজন ক্রেতা', en: 'Another customer' },
        { bn: 'নতুন করে অর্ধেক দাম দেওয়া', en: 'Paying half price again' },
        { bn: 'পাসপোর্টের কপি', en: 'Passport copy' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'f-dlg-3',
      title: { bn: 'অফিসে ভুল বোঝাবুঝি পরিষ্কার করা', en: 'Clarifying a scheduling misunderstanding' },
      setting: { bn: 'পৌরসভা / অফিস', en: 'Municipal office' },
      lines: [
        { speaker: 'Utente', it: 'Mi scusi, pensavo che il mio appuntamento fosse alle dieci, ma forse ho letto male l’email?', tr: { bn: 'মাফ করবেন, ভেবেছিলাম আমার অ্যাপয়েন্টমেন্ট দশটায়, নাকি ইমেইলটা ভুল পড়েছি?', en: 'Excuse me, I thought my appointment was at 10, or did I misread the email?' } },
        { speaker: 'Impiegata', it: 'Vediamo dal codice... Qui risulta per domani alle dieci, mercoledì quattordici!', tr: { bn: 'কোড দেখে বলি... এখানে দেখাচ্ছে আগামীকাল বুধবার ১৪ তারিখ সকাল দশটায়!', en: 'Let’s check the code... Here it shows tomorrow at 10, Wednesday the 14th!' } },
        { speaker: 'Utente', it: 'Oh, chiedo scusa per la confusione! Posso comunque chiedere quali documenti portare domani?', tr: { bn: 'ওহ, বিভ্রান্তির জন্য ক্ষমাপ্রার্থী! কাল কী কী কাগজ আনতে হবে তা কি এখনই জেনে নিতে পারি?', en: 'Oh, sorry for the confusion! May I still ask which documents to bring tomorrow?' } },
        { speaker: 'Impiegata', it: 'Certo! Porti solo la carta d’identità vecchia e due fototessere.', tr: { bn: 'অবশ্যই! শুধু পুরোনো পরিচয়পত্র এবং দুই কপি পাসপোর্ট সাইজ ছবি নিয়ে আসবেন।', en: 'Of course! Just bring your old ID card and two passport photos.' } },
      ],
      checkQuestion: { bn: 'আসল অ্যাপয়েন্টমেন্টটি আসলে কবে?', en: 'When was the appointment actually booked?' },
      checkOptions: [
        { bn: 'আগামীকাল বুধবার সকাল দশটায়', en: 'Tomorrow (Wednesday) at 10:00' },
        { bn: 'গত সপ্তাহে', en: 'Last week' },
        { bn: 'আজ দুপুর দুইটায়', en: 'Today at 14:00' },
        { bn: 'বাতিল করা হয়েছে', en: 'It was cancelled' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'f-dlg-4',
      title: { bn: 'ধীরে ও স্পষ্ট বলতে অনুরোধ করা', en: 'Asking someone to clarify a word or phrase' },
      setting: { bn: 'ডাকঘরের কাউন্টার', en: 'Post office desk' },
      lines: [
        { speaker: 'Impiegato', it: 'Per ritirare la raccomandata serve la delega firmata con la fotocopia del documento del titolare.', tr: { bn: 'রেজিস্টার্ড চিঠি তুলতে মালিকের আইডির ফটোকপিসহ স্বাক্ষরিত ক্ষমতা-পত্র লাগবে।', en: 'To collect the registered letter you need a signed authorisation with the holder’s ID copy.' } },
        { speaker: 'Cliente', it: 'Mi scusi, sto ancora imparando l’italiano: può ripetere più lentamente che cos’è la “delega”?', tr: { bn: 'মাফ করবেন, আমি এখনো ইতালিয়ান শিখছি: “delega” মানে কী আরেকটু ধীরে বলবেন?', en: 'Excuse me, I’m still learning Italian: could you repeat more slowly what a “delega” is?' } },
        { speaker: 'Impiegato', it: 'Certo! La delega è un foglio scritto in cui Suo fratello scrive che Lei può prendere la lettera al posto suo.', tr: { bn: 'অবশ্যই! দেলেগা হলো একটি লেখা কাগজ যেখানে আপনার ভাই লিখে দেবেন যে তার বদলে আপনি চিঠি নিতে পারেন।', en: 'Sure! A delega is a written note where your brother states you may collect the letter for him.' } },
        { speaker: 'Cliente', it: 'Ah, adesso è chiarissimo! La ringrazio molto della pazienza.', tr: { bn: 'আহ, এখন একদম পরিষ্কার! ধৈর্য ধরে বোঝানোর জন্য অনেক ধন্যবাদ।', en: 'Ah, now it’s crystal clear! Thank you very much for your patience.' } },
      ],
      checkQuestion: { bn: '“delega” বলতে কী বোঝায়?', en: 'What is a "delega"?' },
      checkOptions: [
        { bn: 'অন্যের হয়ে কাজ বা চিঠি নেওয়ার লিখিত অনুমতিপত্র', en: 'Written authorisation to act/collect on someone’s behalf' },
        { bn: 'ডাকঘরের স্ট্যাম্প', en: 'Postage stamp' },
        { bn: 'জামানতের টাকা', en: 'Security deposit' },
        { bn: 'বিমানের টিকিট', en: 'Plane ticket' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'f-dlg-5',
      title: { bn: 'হারিয়ে যাওয়া জিনিসের জিডি / রিপোর্ট', en: 'Reporting a lost wallet at Lost & Found' },
      setting: { bn: 'থানা / বস্তু সংরক্ষণ অফিস', en: 'Lost property desk' },
      lines: [
        { speaker: 'Cittadino', it: 'Buongiorno, purtroppo stamattina ho smarrito il mio portafoglio vicino alla stazione centrale.', tr: { bn: 'শুভ সকাল, দুর্ভাগ্যবশত আজ সকালে সেন্ট্রাল স্টেশনের কাছে আমার মানিব্যাগ হারিয়ে ফেলেছি।', en: 'Good morning, unfortunately this morning I lost my wallet near the central station.' } },
        { speaker: 'Agente', it: 'Che cosa c’era dentro oltre ai contanti?', tr: { bn: 'নগদ টাকা ছাড়া ভেতরে আর কী কী ছিল?', en: 'What was inside besides cash?' } },
        { speaker: 'Cittadino', it: 'La carta d’identità, la tessera sanitaria e il bancomat, che ho già bloccato per telefono.', tr: { bn: 'পরিচয়পত্র, হেলথ কার্ড এবং এটিএম কার্ড — যা আমি ইতিমধ্যে ফোনে ব্লক করে দিয়েছি।', en: 'My ID card, health card, and debit card, which I have already blocked by phone.' } },
        { speaker: 'Agente', it: 'Ha fatto benissimo a bloccarlo subito. Ora facciamo la denuncia così può rifare i documenti.', tr: { bn: 'সাথে সাথে ব্লক করে খুব ভালো করেছেন। এখন রিপোর্ট লিখে দিচ্ছি যাতে নতুন কাগজ বানাতে পারেন।', en: 'You did right to block it immediately. Now we’ll file the report so you can remake your documents.' } },
      ],
      checkQuestion: { bn: 'কার্ড হারানোর সাথে সাথে নাগরিক কী করেছেন?', en: 'What had the person already done before arriving?' },
      checkOptions: [
        { bn: 'ফোন করে এটিএম কার্ড ব্লক করে দিয়েছেন', en: 'Blocked the debit card by phone' },
        { bn: 'নতুন মানিব্যাগ কিনেছেন', en: 'Bought a new wallet' },
        { bn: 'হোটেলে ফিরে গেছেন', en: 'Went back to the hotel' },
        { bn: 'বন্ধুকে টাকা পাঠিয়েছেন', en: 'Sent money to a friend' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'f-dlg-6',
      title: { bn: 'ভদ্রভাবে পরামর্শ ও মতামত দেওয়া', en: 'Giving polite advice and opinions' },
      setting: { bn: 'দুপুরের বিরতির আড্ডা', en: 'Lunch break discussion' },
      lines: [
        { speaker: 'Lina', it: 'Non so se comprare la bici usata o fare l’abbonamento annuale dell’autobus. Che mi consigli?', tr: { bn: 'পুরোনো সাইকেল কিনব নাকি বাসের বার্ষিক পাস করব বুঝতে পারছি না। তুমি কী পরামর্শ দাও?', en: 'I don’t know whether to buy a used bike or get the annual bus pass. What do you advise?' } },
        { speaker: 'Tommaso', it: 'Secondo me dipende dal meteo: in inverno piove spesso e la sera fa buio presto.', tr: { bn: 'আমার মতে এটা আবহাওয়ার ওপর নির্ভর করে: শীতে প্রায়ই বৃষ্টি হয় এবং সন্ধ্যায় তাড়াতাড়ি অন্ধকার হয়ে যায়।', en: 'In my opinion it depends on the weather: in winter it rains often and gets dark early.' } },
        { speaker: 'Lina', it: 'Hai ragione! Forse l’abbonamento è più sicuro per tutto l’anno.', tr: { bn: 'তুমি ঠিকই বলেছ! পুরো বছরের জন্য বাসের পাসই হয়তো বেশি নিরাপদ।', en: 'You’re right! Maybe the transit pass is safer for the whole year.' } },
      ],
      checkQuestion: { bn: 'তোম্মাসো কেন বাসের পাসের দিকে যুক্তি দিলেন?', en: 'Why did Tommaso point out winter weather?' },
      checkOptions: [
        { bn: 'শীতে বৃষ্টি ও তাড়াতাড়ি সন্ধ্যা হওয়ায় সাইকেল চালানো কঠিন', en: 'Rain and early darkness in winter make cycling harder' },
        { bn: 'সাইকেল শহরে নিষিদ্ধ', en: 'Bikes are banned in the city' },
        { bn: 'বাস একদম ফ্রি', en: 'Buses are completely free' },
        { bn: 'রাস্তায় কোনো দোকান নেই', en: 'There are no shops' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'f-dlg-7',
      title: { bn: 'অনলাইন অর্ডার দেরিতে পৌঁছানো নিয়ে সমাধান', en: 'Resolving a late online parcel' },
      setting: { bn: 'কাস্টমার সাপোর্ট চ্যাট / কল', en: 'Customer support call' },
      lines: [
        { speaker: 'Cliente', it: 'Salve, il mio ordine numero 458 doveva arrivare martedì scorso, ma è ancora fermo in deposito.', tr: { bn: 'নমস্কার, আমার ৪৫৮ নম্বর অর্ডারটি গত মঙ্গলবার আসার কথা ছিল, কিন্তু এখনো ডিপোতে আটকে আছে।', en: 'Hello, my order 458 was supposed to arrive last Tuesday, yet it’s still stuck at the depot.' } },
        { speaker: 'Operatore', it: 'Mi scusi per il ritardo! Controllo il tracking... Domattina il corriere ha già la consegna programmata tra le nove e le tredici.', tr: { bn: 'দেরির জন্য ক্ষমা চাইছি! ট্র্যাকিং দেখছি... কাল সকাল নয়টা থেকে একটার মধ্যে কুরিয়ারের ডেলিভারি নির্ধারিত আছে।', en: 'Sorry for the delay! Checking tracking... Tomorrow morning the courier already has delivery scheduled between 9 and 13.' } },
        { speaker: 'Cliente', it: 'Va bene, però se non arriva domani vorrei annullare l’ordine e chiedere il rimborso.', tr: { bn: 'ঠিক আছে, তবে কাল না এলে আমি অর্ডার বাতিল করে টাকা ফেরত চাইব।', en: 'Okay, yet if it doesn’t arrive tomorrow I’d like to cancel and ask for a refund.' } },
        { speaker: 'Operatore', it: 'Assolutamente sì, inserisco subito una nota prioritaria per il corriere.', tr: { bn: 'অবশ্যই, আমি এখনই কুরিয়ারের জন্য জরুরি নোট দিয়ে দিচ্ছি।', en: 'Absolutely, I’m adding a priority note for the courier right now.' } },
      ],
      checkQuestion: { bn: 'অর্ডারটি কবে ডেলিভারি হওয়ার কথা রয়েছে?', en: 'When is the parcel scheduled to arrive?' },
      checkOptions: [
        { bn: 'কাল সকাল ৯টা থেকে দুপুর ১টার মধ্যে', en: 'Tomorrow between 9:00 and 13:00' },
        { bn: 'আগামী সপ্তাহের শুক্রবার', en: 'Next Friday' },
        { bn: 'আজ মধ্যরাতে', en: 'At midnight tonight' },
        { bn: 'গ্রাহককে নিজে ডিপোতে যেতে হবে', en: 'Customer must collect at depot' },
      ],
      checkAnswer: 0,
    },
    {
      id: 'f-dlg-8',
      title: { bn: 'ডাক্তারি বা সরকারি অ্যাপয়েন্টমেন্টের সময় বদলানো', en: 'Rescheduling an appointment politely' },
      setting: { bn: 'ফোন কল', en: 'Rescheduling phone call' },
      lines: [
        { speaker: 'Signor Ali', it: 'Buongiorno, ho un appuntamento domani alle quindici, ma ho avuto un imprevisto al lavoro. È possibile spostarlo?', tr: { bn: 'শুভ সকাল, কাল বিকেল তিনটায় আমার অ্যাপয়েন্টমেন্ট আছে, তবে অফিসে জরুরি কাজ পড়েছে। সময়টা কি বদলানো যাবে?', en: 'Good morning, I have an appointment tomorrow at 15:00, yet something unexpected came up at work. Can we move it?' } },
        { speaker: 'Segretaria', it: 'Nessun problema, grazie di averci avvisato in anticipo! Le va bene lunedì prossimo alla stessa ora?', tr: { bn: 'আগে থেকে জানানোয় কোনো সমস্যা নেই! আগামী সোমবার একই সময়ে কি আপনার সুবিধা হবে?', en: 'No problem since you let us know ahead! Does next Monday at the same time suit you?' } },
        { speaker: 'Signor Ali', it: 'Sì, lunedì alle quindici è perfetto. Grazie mille per la disponibilità!', tr: { bn: 'হ্যাঁ, সোমবার বিকেল তিনটা একদম ঠিক আছে। সহযোগিতার জন্য অনেক ধন্যবাদ!', en: 'Yes, Monday at 15:00 is perfect. Thank you very much for your help!' } },
      ],
      checkQuestion: { bn: 'নতুন অ্যাপয়েন্টমেন্ট কবে নির্ধারিত হলো?', en: 'When is the rescheduled appointment?' },
      checkOptions: [
        { bn: 'আগামী সোমবার বিকেল তিনটায়', en: 'Next Monday at 15:00' },
        { bn: 'কাল সকাল নয়টায়', en: 'Tomorrow at 9:00' },
        { bn: 'রবিবার দুপুরে', en: 'Sunday at noon' },
        { bn: 'সময় বদলানো যায়নি', en: 'Could not be rescheduled' },
      ],
      checkAnswer: 0,
    },
  ],
  functionalFrames: [
    {
      id: 'f-frm-1',
      situation: { bn: 'কথা পরিষ্কারভাবে বোঝা না গেলে', en: 'Asking for clarification politely' },
      phrases: [
        { it: 'Scusi, non ho capito bene: potrebbe parlare un po’ più lentamente?', tr: { bn: 'মাফ করবেন, ঠিক বুঝতে পারিনি: একটু ধীরে বলতে পারবেন কি?', en: 'Excuse me, I didn’t catch that: could you speak a bit slower?' } },
        { it: 'Che cosa significa esattamente questa parola?', tr: { bn: 'এই শব্দটির সঠিক অর্থ কী?', en: 'What does this word mean exactly?' } },
      ],
    },
    {
      id: 'f-frm-2',
      situation: { bn: 'ভুল ও সমস্যা ভদ্রভাবে সমাধান করা', en: 'Handling mistakes & requests smoothly' },
      phrases: [
        { it: 'C’è stato un piccolo errore sullo scontrino, può controllare?', tr: { bn: 'রসিদে একটু ভুল হয়েছে, দয়া করে দেখে দেবেন?', en: 'There’s a small mistake on the receipt, could you check?' } },
        { it: 'Avrei bisogno di spostare l’appuntamento a un altro giorno.', tr: { bn: 'অ্যাপয়েন্টমেন্টটা অন্য একটি দিনে সরানো দরকার।', en: 'I’d need to reschedule the appointment for another day.' } },
      ],
    },
  ],
  questions: [
    q('q-a2-f-1', { bn: 'কেউ দ্রুত কথা বললে ভদ্রভাবে কী বলবেন?', en: 'Ask someone politely to slow down:' }, 'Mi scusi, può parlare ___?', ['più lentamente', 'senza biglietto', 'dopo le dieci', 'a tempo determinato'], 0, { bn: 'più lentamente = আরও ধীরে।', en: 'più lentamente.' }),
    q('q-a2-f-2', { bn: 'কোনো কিছু বদলানোর সময় দোকানে কী দেখাতে হয়?', en: 'What must you show in a shop to exchange an item?' }, 'Per cambiare la maglia serve ___.', ['lo scontrino', 'la patente', 'l’impegnativa', 'la bolletta'], 0, { bn: 'রসিদ = lo scontrino।', en: 'lo scontrino = receipt.' }),
    q('q-a2-f-3', { bn: 'অপ্রত্যাশিত জরুরি কাজকে ইতালিয়ানে কী বলে?', en: 'Word for an "unexpected event":' }, 'Ho avuto ___ al lavoro e devo spostare l’orario.', ['un imprevisto', 'uno sconto', 'un binario', 'un rubinetto'], 0, { bn: 'un imprevisto = আকস্মিক ঝামেলা/অপ্রত্যাশিত কাজ।', en: 'un imprevisto.' }),
    q('q-a2-f-4', { bn: 'কাউকে ধৈর্য ধরে সাহায্য করার জন্য ধন্যবাদ দিতে:', en: 'Thanking someone for being helpful:' }, 'La ringrazio davvero per la Sua ___.', ['disponibilità', 'scadenza', 'febbre', 'multa'], 0, { bn: 'la disponibilità = সহযোগিতার মনোভাব।', en: 'la disponibilità.' }),
    q('q-a2-f-5', { bn: 'কারও সাথে একমত হলে বলবেন:', en: 'How to say "I agree with you":' }, undefined, ['Sono d’accordo con te.', 'Non ho capito niente.', 'Ho perso le chiavi.', 'Porta ritardo.'], 0, { bn: 'Sono d’accordo = আমি একমত।', en: 'Sono d’accordo.' }),
    q('q-a2-f-6', { bn: 'ভুল বোঝাবুঝিকে ইতালিয়ানে বলে:', en: '"Misunderstanding" in Italian:' }, 'Chiedo scusa, c’è stato ___.', ['un malinteso', 'un deposito', 'un tirocinio', 'un abbonamento'], 0, { bn: 'ভুল বোঝাবুঝি = un malinteso।', en: 'un malinteso.' }),
    q('q-a2-f-7', { bn: 'পোশাক ছোট হলে বদলে বড়টা চাইতে:', en: 'When clothes are too tight:' }, 'Questa camicia è stretta: avete ___ più grande?', ['una taglia', 'una carrozza', 'una ricetta', 'una caldaia'], 0, { bn: 'জামার মাপ = la taglia।', en: 'la taglia = size.' }),
    q('q-a2-f-8', { bn: 'অন্যের হয়ে কাগজপত্র তোলার লিখিত অনুমতি:', en: 'Written authorisation for someone to pick up documents:' }, 'Serve ___ firmata dal titolare.', ['la delega', 'la tosse', 'la valigia', 'la busta paga'], 0, { bn: 'লিখিত ক্ষমতাপত্র = la delega।', en: 'la delega.' }),
    q('q-a2-f-9', { bn: '“মানিব্যাগ হারিয়ে ফেলেছি” বলতে:', en: '"I have lost my wallet":' }, 'Stamattina ho ___ il portafoglio.', ['smarrito', 'convalidato', 'riposato', 'abbassato'], 0, { bn: 'smarrire (হারিয়ে ফেলা) → smarrito।', en: 'smarrito.' }),
    q('q-a2-f-10', { bn: 'হারানো ডকুমেন্ট নতুন করে বানাতে থানায় কী করবেন?', en: 'File a lost property report:' }, 'Devo fare ___ ai carabinieri.', ['la denuncia', 'il preavviso', 'il colloquio', 'la coincidenza'], 0, { bn: 'আনুষ্ঠানিক অভিযোগ/জিডি = la denuncia।', en: 'la denuncia.' }),
    q('q-a2-f-11', { bn: 'অ্যাপয়েন্টমেন্টের সময় অন্য দিনে নিতে চাইলে:', en: 'To move an appointment to another day:' }, 'È possibile ___ l’appuntamento a giovedì?', ['spostare', 'inquinare', 'dividere', 'imbarcare'], 0, { bn: 'সময় পরিবর্তন/সরানো = spostare।', en: 'spostare = move/reschedule.' }),
    q('q-a2-f-12', { bn: 'শব্দের অর্থ বুঝতে না পারলে জিজ্ঞেস করবেন:', en: 'Ask what a word means:' }, 'Che cosa ___ questa parola?', ['significa', 'costa', 'pesa', 'ritarda'], 0, { bn: 'অর্থ বোঝাতে: significare → che cosa significa?।', en: 'che cosa significa?' }),
    q('q-a2-f-13', { bn: 'কাউকে ভদ্রভাবে সাহায্য চাইতে:', en: 'Ask politely for a hand:' }, 'Scusi, potrebbe darmi ___ con questa valigia?', ['una mano', 'una scusa', 'una festa', 'una bolletta'], 0, { bn: 'dare una mano = হাত বাড়িয়ে সাহায্য করা।', en: 'dare una mano.' }),
    q('q-a2-f-14', { bn: 'নিজের মতামত শুরু করার ভদ্র বাক্যাংশ:', en: 'Polite phrase to start giving an opinion:' }, '___, è meglio prendere il treno delle otto.', ['Secondo me', 'A digiuno', 'In stiva', 'Dopo i pasti'], 0, { bn: 'Secondo me = আমার মতে।', en: 'Secondo me.' }),
  ],
};

export const A2_COMMUNICATION_MODULES_DATA: Record<
  A2CommunicationModuleId,
  A2CommunicationModuleData
> = {
  'a2-housing': A2_HOUSING_DATA,
  'a2-health': A2_HEALTH_DATA,
  'a2-travel': A2_TRAVEL_DATA,
  'a2-work-social': A2_WORK_SOCIAL_DATA,
  'a2-functional-comm': A2_FUNCTIONAL_COMM_DATA,
};

export function isA2CommunicationModuleId(id: string): id is A2CommunicationModuleId {
  return id in A2_COMMUNICATION_MODULES_DATA;
}

export function getA2CommunicationRequiredIds(id: A2CommunicationModuleId): string[] {
  const data = A2_COMMUNICATION_MODULES_DATA[id];
  return [
    ...data.expressions.map((e) => e.id),
    ...data.dialogues.map((d) => d.id),
  ];
}

export function getAllA2CommunicationDialoguesCount(): number {
  return Object.values(A2_COMMUNICATION_MODULES_DATA).reduce(
    (sum, mod) => sum + mod.dialogues.length,
    0,
  );
}
