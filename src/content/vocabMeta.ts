import type { Gender, PartOfSpeech, RichSentenceItem, RichVocabItem } from './academyTypes';
import type { BankSentence, BankWord } from './bank';
import type { Tr } from './types';

const IRREGULAR_PLURALS: Record<string, string> = {
  "l'uomo": 'gli uomini',
  'la mano': 'le mani',
  "l'uovo": 'le uova',
  'il dito': 'le dita',
  'il braccio': 'le braccia',
  'il ginocchio': 'le ginocchia',
  'il labbro': 'le labbra',
  'il paio': 'le paia',
  'il migliaio': 'le migliaia',
  'il centinaio': 'le centinaia',
  "l'amico": 'gli amici',
  "l'amica": 'le amiche',
  'il medico': 'i medici',
  'la banca': 'le banche',
  'la farmacia': 'le farmacie',
  'il parco': 'i parchi',
  'il sacchetto': 'i sacchetti',
  'la città': 'le città',
  'il caffè': 'i caffè',
  'il tè': 'i tè',
  'il menù': 'i menù',
  'la foto': 'le foto',
  'la radio': 'le radio',
  'la moto': 'le moto',
  "l'auto": 'le auto',
  'la bici': 'le bici',
  'la serie': 'le serie',
  'la specie': 'le specie',
  "l'università": 'le università',
  "l'euro": 'gli euro',
  'il film': 'i film',
  'il computer': 'i computer',
  'il bar': 'i bar',
  "l'autobus": 'gli autobus',
  'il taxi': 'i taxi',
  'il problema': 'i problemi',
  'il sistema': 'i sistemi',
  'il programma': 'i programmi',
  'il tema': 'i temi',
  'il clima': 'i climi',
  'il dramma': 'i drammi',
  'il dilemma': 'i dilemmi',
  'il trauma': 'i traumi',
  'il diploma': 'i diplomi',
  'il panorama': 'i panorami',
  'il paradigma': 'i paradigmi',
  "l'assioma": 'gli assiomi',
  "l'ecosistema": 'gli ecosistemi',
  'il sintomo': 'i sintomi',
  'il cinema': 'i cinema',
  'il vaglia': 'i vaglia',
  'il gorilla': 'i gorilla',
  'il sosia': 'i sosia',
  'il boa': 'i boa',
  'la crisi': 'le crisi',
  "l'analisi": 'le analisi',
  'la tesi': 'le tesi',
  'la sintesi': 'le sintesi',
  "l'ipotesi": 'le ipotesi',
  'la diagnosi': 'le diagnosi',
  'la prognosi': 'le prognosi',
  'la metropoli': 'le metropoli',
  'la prassi': 'le prassi',
  "l'enfasi": 'le enfasi',
  "l'oasi": 'le oasi',
  'lo zio': 'gli zii',
  'il dio': 'gli dei',
  'il tempio': 'i templi',
  'il bue': 'i buoi',
  'la moglie': 'le mogli',
  'il re': 'i re',
  'il papa': 'i papi',
  'il papà': 'i papà',
  'il fine settimana': 'i fine settimana',
  'la busta paga': 'le buste paga',
  'il punto vendita': 'i punti vendita',
  "l'effetto serra": 'gli effetti serra',
  'il programma fedeltà': 'i programmi fedeltà',
  "l'interfaccia utente": 'le interfacce utente',
  'lo stato membro': 'gli stati membri',
  'il capoluogo': 'i capoluoghi',
  'la ferrovia': 'le ferrovie',
  'la metropolitana': 'le metropolitane',
};

/** Masculine nouns ending in -co or -go that form their plural in -ci / -gi (palatal) rather than -chi / -ghi (velar). */
const CO_GO_PALATAL_PLURALS = new Set<string>([
  'amico',
  'nemico',
  'medico',
  'sindaco',
  'traffico',
  'stomaco',
  'bonifico',
  'pubblico',
  'elettrodomestico',
  'farmaco',
  'palcoscenico',
  'greco',
  'porco',
  'laico',
  'chierico',
  'monaco',
  'canonico',
  'storico',
  'critico',
  'politico',
  'tecnico',
  'musico',
  'fisico',
  'chimico',
  'matematico',
  'economico',
  'accademico',
  'meccanico',
  'idraulico',
  'elettrico',
  'classico',
  'romantico',
  'domestico',
  'rustico',
  'plastico',
  'elastico',
  'automatico',
  'informatico',
  'sistematico',
  'problematico',
  'democratico',
  'burocratico',
  'diplomatico',
  'tematico',
  'climatico',
  'drammatico',
  'traumatico',
  'sintomatico',
  'pragmatico',
  'dogmatico',
  'carismatico',
  'enigmatico',
  'emblematico',
  'scolastico',
  'ecclesiastico',
  'entusiastico',
  'sarcastico',
  'fantastico',
  'ginnastico',
  'artistico',
  'turistico',
  'giornalistico',
  'linguistico',
  'statistico',
  'logistico',
  'umanistico',
  'urbanistico',
  'ambientalistico',
  'specialistico',
  'realistico',
  'idealistico',
  'capitalistico',
  'socialistico',
  'nazionalistico',
  'individualistico',
  'materialistico',
  'formalistico',
  'opportunistico',
  'ottimistico',
  'pessimistico',
  'pacifico',
  'scientifico',
  'magnifico',
  'specifico',
  'benefico',
  'malefico',
  'onorifico',
  'prolifico',
  'traffico',
  'psicologo',
  'sociologo',
  'archeologo',
  'biologo',
  'ecologo',
  'teologo',
  'filologo',
  'antropologo',
  'geologo',
  'astrologo',
  'neurologo',
  'cardiologo',
  'dermatologo',
  'ginecologo',
  'oncologo',
  'pedagogista',
  'asparago',
]);

/** Masculine nouns ending in -co or -go that explicitly take -chi / -ghi even if longer than 2 syllables. */
const CO_GO_VELAR_PLURALS = new Set<string>([
  'parco',
  'succo',
  'albergo',
  'lago',
  'cuoco',
  'pacco',
  'bosco',
  'spreco',
  'trasloco',
  'ingorgo',
  'imbarco',
  'attacco',
  'affresco',
  'borgo',
  'banco',
  'carico',
  'incarico',
  'scarico',
  'obbligo',
  'catalogo',
  'dialogo',
  'riepilogo',
  'monologo',
  'prologo',
  'epilogo',
  'decalogo',
  'chirurgo',
  'fuoco',
  'gioco',
  'luogo',
  'capoluogo',
  'fungo',
  'palco',
  'fiocco',
  'blocco',
  'sbocco',
  'ritocco',
  'stocco',
  'trucco',
  'stucco',
  'buco',
  'bruco',
  'fico',
  'antico',
  'pudico',
  'arco',
  'varco',
  'barco',
  'sbarco',
  'solco',
  'palco',
  'falco',
  'talco',
  'calco',
  'becco',
  'secco',
  'stecco',
  'saccco',
  'sacco',
  'tacco',
  'distacco',
  'ricco',
  'picco',
  'spicco',
  'ticco',
  'zocco',
  'rocco',
  'scacco',
  'fianco',
  'branco',
  'francesco',
  'tedesco',
  'fresco',
  'pesco',
  'vescovo',
  'casco',
  'fiasco',
  'disco',
  'fisco',
  'rischio',
  'musco',
  'rusco',
  'ago',
  'mago',
  'spago',
  'svago',
  'drago',
  'vago',
  'pago',
  'rigo',
  'intrigo',
  'castigo',
  'frigo',
  'rogo',
  'sfogo',
  'giogo',
  'luogo',
  'sugo',
  'fungo',
  'lungo',
  'albergo',
  'borgo',
  'gorgo',
  'ingorgo',
  'letargo',
  'largo',
  'cargo',
  'embargo',
  'gergo',
  'tergo',
  'chirurgo',
  'drammaturgo',
  'demiurgo',
  'metallurgo',
  'taumaturgo',
]);

/** Feminine nouns with article l' that end in -e (not -zione/-sione/-tà). */
const FEMININE_L_APOSTROPHE_NOUNS = new Set<string>([
  'arte',
  'estate',
  'immagine',
  'origine',
  'abitudine',
  'indagine',
  'igiene',
  'analisi',
  'ipotesi',
  'oasi',
  'enfasi',
  'ellissi',
  'attrice',
  'autrice',
  'imperatrice',
  'appendice',
  'alluvione',
  'opinione',
]);

/** Masculine Greek-origin nouns ending in -ma that take article l'. */
const MASCULINE_MA_NOUNS = new Set<string>([
  'assioma',
  'ecosistema',
  'idioma',
  'emblema',
  'enzima',
  'edema',
  'aroma',
  'ologramma',
  'organigramma',
  'istogramma',
  'anagramma',
  'epigramma',
  'melodramma',
  'psicodramma',
]);

/** Invariable second words in Noun + Noun compounds where the second word does not inflect. */
const INVARIABLE_COMPOUND_TAILS = new Set<string>([
  'base',
  'fedeltà',
  'utente',
  'serra',
  'vendita',
  'paga',
  'settimana',
  'membro',
  'chiave',
  'pilota',
  'modello',
  'limite',
  'simbolo',
  'guida',
  'quadro',
  'record',
  'standard',
  'leader',
  'partner',
  'web',
  'online',
  'extra',
  'gratis',
  'clou',
]);

const EXPLICIT_PREPOSITIONS = new Set<string>([
  'di',
  'a',
  'da',
  'in',
  'con',
  'su',
  'per',
  'tra',
  'fra',
  'senza',
  'durante',
  'nonostante',
  'malgrado',
  'contro',
  'verso',
  'secondo',
  'oltre',
  'entro',
  'mediante',
  'lungo',
  'presso',
  'escluso',
  'eccetto',
  'salvo',
  'tramite',
]);

const EXPLICIT_CONJUNCTIONS = new Set<string>([
  'e',
  'ed',
  'o',
  'od',
  'ma',
  'però',
  'quindi',
  'perché',
  'se',
  'mentre',
  'quando',
  'come',
  'che',
  'sebbene',
  'benché',
  'affinché',
  'purché',
  'siccome',
  'poiché',
  'giacché',
  'qualora',
  'cioè',
  'oppure',
  'anzi',
  'dunque',
  'pertanto',
  'eppure',
  'tuttavia',
  'né',
  'ossia',
  'ovvero',
  'nonché',
  'allorché',
  'finché',
  'dacché',
  'laddove',
  'cosicché',
]);

const EXPLICIT_PRONOUNS = new Set<string>([
  'io',
  'tu',
  'lui',
  'lei',
  'noi',
  'voi',
  'loro',
  'chi',
  'che cosa',
  'cosa',
  'quale',
  'quanto',
  'chiunque',
  'qualsiasi',
  'qualunque',
  'qualcuno',
  'qualcosa',
  'nessuno',
  'niente',
  'nulla',
  'tutto',
  'tutti',
  'ogni',
  'ognuno',
  'ciascuno',
  'questo',
  'quello',
  'stesso',
  'altro',
  'alcuni',
  'molto',
  'poco',
  'troppo',
  'tanto',
  'parecchio',
  'alcuno',
  'coloro',
  'costui',
  'ciò',
  'cui',
]);

const EXPLICIT_ADVERBS = new Set<string>([
  'dove',
  'eccome',
  'oggi',
  'domani',
  'dopodomani',
  'ieri',
  'stamattina',
  'stasera',
  'stanotte',
  'adesso',
  'ora',
  'sempre',
  'mai',
  'spesso',
  'presto',
  'tardi',
  'prima',
  'dopo',
  'poi',
  'infine',
  'fa',
  'già',
  'ancora',
  'appena',
  'subito',
  'insieme',
  'forse',
  'quasi',
  'abbastanza',
  'davvero',
  'proprio',
  'solo',
  'soltanto',
  'anche',
  'neanche',
  'nemmeno',
  'neppure',
  'più',
  'meno',
  'bene',
  'male',
  'meglio',
  'peggio',
  'piano',
  'forte',
  'dritto',
  'vicino',
  'lontano',
  'qui',
  'qua',
  'lì',
  'là',
  'giù',
  'dentro',
  'fuori',
  'sopra',
  'sotto',
  'davanti',
  'dietro',
  'intorno',
  'altrimenti',
  'inoltre',
  'comunque',
  'ovviamente',
  'purtroppo',
  'fortunatamente',
  'specialmente',
  'soprattutto',
  'almeno',
  'circa',
  'ovunque',
  'altrove',
  'invano',
  'volentieri',
  'piuttosto',
  'addirittura',
  'persino',
  'perfino',
  'mica',
  'pure',
  'magari',
  'allora',
  'intanto',
  'frattanto',
  'invece',
  'infatti',
  'effettivamente',
  'praticamente',
  'sinceramente',
  'chiaramente',
  'certamente',
  'sicuramente',
  'probabilmente',
  'possibilmente',
  'eventualmente',
  'generalmente',
  'normalmente',
  'solitamente',
  'abitualmente',
  'raramente',
  'frequentemente',
  'immediatamente',
  'improvvisamente',
  'recentemente',
  'attualmente',
  'precedentemente',
  'successivamente',
  'contemporaneamente',
  'definitivamente',
  'assolutamente',
  'completamente',
  'totalmente',
  'parzialmente',
  'relativamente',
  'particolarmente',
  'estremamente',
  'notevolmente',
  'sensibilmente',
  'leggermente',
  'esattamente',
  'precisamente',
  'direttamente',
  'indirettamente',
  'personalmente',
  'ufficialmente',
  'pubblicamente',
  'segretamente',
  'gratuitamente',
  'liberamente',
  'facilmente',
  'difficilmente',
  'velocemente',
  'lentamente',
  'attentamente',
  'tranquillamente',
  'felicemente',
  'tristemente',
  'seriamente',
  'onestamente',
  'francamente',
  'apertamente',
  'cordialmente',
  'gentilmente',
  'cortesemente',
]);

/** Bare nouns in the vocabulary bank that appear without an article (days, months, uncountables). */
const BARE_NOUNS = new Set<string>([
  'lunedì',
  'martedì',
  'mercoledì',
  'giovedì',
  'venerdì',
  'sabato',
  'domenica',
  'gennaio',
  'febbraio',
  'marzo',
  'aprile',
  'maggio',
  'giugno',
  'luglio',
  'agosto',
  'settembre',
  'ottobre',
  'novembre',
  'dicembre',
  'internet',
  'mezzogiorno',
  'mezzanotte',
  'primavera',
  'estate',
  'autunno',
  'inverno',
]);

const EXPLICIT_ADJECTIVES = new Set<string>([
  'malato',
  'sano',
  'rosso',
  'blu',
  'verde',
  'giallo',
  'nero',
  'bianco',
  'grigio',
  'marrone',
  'rosa',
  'viola',
  'arancione',
  'azzurro',
  'arrabbiato',
  'preoccupato',
  'straniero',
  'nervoso',
  'geloso',
  'orgoglioso',
  'deluso',
  'imbarazzato',
  'sorpreso',
  'spaventato',
  'annoiato',
  'entusiasta',
  'curioso',
  'timido',
  'coraggioso',
  'sincero',
  'bugiardo',
  'egoista',
  'generoso',
  'paziente',
  'impaziente',
  'saporito',
  'insipido',
  'piccante',
  'amaro',
  'acido',
  'crudo',
  'cotto',
  'fritto',
  'bollito',
  'arrosto',
  'vegetariano',
  'vegano',
  'nuvoloso',
  'soleggiato',
  'piovoso',
  'ventoso',
  'nebbioso',
  'umido',
  'secco',
  'gelido',
  'scorso',
  'prossimo',
  'vietato',
  'obbligatorio',
  'sostenibile',
  'commosso',
  'stressato',
  'rilassato',
  'ansioso',
  'depresso',
  'euforico',
  'nostalgico',
  'storico',
  'arredato',
  'luminoso',
  'spazioso',
  'rumoroso',
  'silenzioso',
  'accogliente',
  'cancellato',
  'empatico',
  'solidale',
  'indifferente',
  'ostile',
  'diffidente',
  'comprensivo',
  'tollerante',
  'intollerante',
  'biologico',
  'compostabile',
  'equilibrato',
  'sereno',
  'consapevole',
  'gratuito',
  'disponibile',
  'necessario',
  'possibile',
  'impossibile',
  'utile',
  'inutile',
  'facile',
  'difficile',
  'importante',
  'interessante',
  'divertente',
  'noioso',
  'stanco',
  'felice',
  'triste',
  'contento',
  'pronto',
  'sicuro',
  'libero',
  'occupato',
  'aperto',
  'chiuso',
  'pieno',
  'vuoto',
  'nuovo',
  'vecchio',
  'giovane',
  'grande',
  'piccolo',
  'bello',
  'brutto',
  'buono',
  'cattivo',
  'caldo',
  'freddo',
  'fresco',
  'dolce',
  'salato',
  'leggero',
  'pesante',
  'veloce',
  'lento',
  'alto',
  'basso',
  'lungo',
  'corto',
  'largo',
  'stretto',
  'pulito',
  'sporco',
  'ricco',
  'povero',
  'caro',
  'economico',
  'vero',
  'falso',
  'giusto',
  'sbagliato',
  'chiaro',
  'scuro',
  'debole',
  'gentile',
  'cortese',
  'educato',
  'maleducato',
  'simpatico',
  'antipatico',
  'intelligente',
  'stupido',
  'pigro',
  'attivo',
  'famoso',
  'popolare',
  'moderno',
  'antico',
  'tradizionale',
  'internazionale',
  'nazionale',
  'locale',
  'pubblico',
  'privato',
  'sociale',
  'politico',
  'culturale',
  'naturale',
  'ambientale',
  'digitale',
  'virtuale',
  'reale',
  'globale',
  'personale',
  'professionale',
  'ufficiale',
  'legale',
  'illegale',
  'normale',
  'speciale',
  'particolare',
  'principale',
  'centrale',
  'finale',
  'iniziale',
  'totale',
  'attuale',
  'futuro',
  'passato',
  'presente',
  'quotidiano',
  'settimanale',
  'mensile',
  'annuale',
]);

const POS_BY_TOPIC_EN: Record<string, PartOfSpeech> = {
  'Common verbs': 'verb',
  'More key verbs': 'verb',
  'Verbs of opinion & reasoning': 'verb',
  'More verbs': 'verb',
  'B2 verbs of analysis & debate': 'verb',
  'B2 verbs of governance & action': 'verb',
  'Additional B2 verbs & expressions': 'verb',
  'Adjectives': 'adjective',
  'More adjectives': 'adjective',
  'B1 adjectives': 'adjective',
  'B2 advanced adjectives': 'adjective',
  'Numbers': 'number',
  'Greetings & courtesy': 'phrase',
  'Expressing reactions': 'phrase',
};

/** Produces a clean Italian phonetic/stress guide for Bengali & English learners. */
export function italianPronunciation(it: string): string {
  return it
    .replace(/gn/gi, 'ny')
    .replace(/gli(?=[aeiou]|$)/gi, 'lyi')
    .replace(/sci/gi, 'shi')
    .replace(/sce/gi, 'she')
    .replace(/sch/gi, 'sk')
    .replace(/ch/gi, 'k')
    .replace(/gh/gi, 'g')
    .replace(/ci(?=[aou])/gi, 'ch')
    .replace(/ce/gi, 'che')
    .replace(/ci/gi, 'chi')
    .replace(/ge/gi, 'je')
    .replace(/gi(?=[aou])/gi, 'j')
    .replace(/gi/gi, 'ji')
    .replace(/qu/gi, 'kw')
    .replace(/z/gi, 'ts');
}

function splitArticle(it: string): { article?: string; base: string } {
  const lower = it.trim().replace(/[’‘]/g, "'");
  const slashArt = lower.match(/^(il\/la|un\/una)\s+(.+)$/i);
  if (slashArt) return { article: slashArt[1]!.toLowerCase(), base: slashArt[2]! };
  const apostrophe = lower.match(/^(l'|un')(.+)$/i);
  if (apostrophe) return { article: apostrophe[1]!.toLowerCase(), base: apostrophe[2]! };
  const space = lower.match(/^(il|lo|la|i|gli|le|un|uno|una)\s+(.+)$/i);
  if (space) return { article: space[1]!.toLowerCase(), base: space[2]! };
  return { base: lower };
}

function inferGender(article: string | undefined, base: string, pos: PartOfSpeech): Gender {
  if (pos !== 'noun') return 'none';
  if (article === 'il/la' || article === 'un/una') return 'mf';
  if (article === 'il' || article === 'lo' || article === 'i' || article === 'gli' || article === 'un' || article === 'uno') return 'm';
  if (article === 'la' || article === 'le' || article === 'una' || article === "un'") return 'f';

  const firstWord = base.split(' ')[0]!.toLowerCase();
  if (article === "l'") {
    if (MASCULINE_MA_NOUNS.has(firstWord)) return 'm';
    if (FEMININE_L_APOSTROPHE_NOUNS.has(firstWord)) return 'f';
    if (
      firstWord.endsWith('a') ||
      firstWord.endsWith('zione') ||
      firstWord.endsWith('sione') ||
      firstWord.endsWith('gione') ||
      firstWord.endsWith('tà') ||
      firstWord.endsWith('tù') ||
      firstWord.endsWith('ite') ||
      firstWord.endsWith('isi') ||
      firstWord.endsWith('esi') ||
      firstWord.endsWith('asi') ||
      firstWord.endsWith('osi')
    ) {
      return 'f';
    }
    return 'm';
  }
  if (firstWord === 'domenica' || firstWord === 'primavera' || firstWord === 'estate') return 'f';
  if (firstWord.endsWith('o') || firstWord.endsWith('ì')) return 'm';
  if (firstWord.endsWith('a') || firstWord.endsWith('zione') || firstWord.endsWith('sione') || firstWord.endsWith('tà')) return 'f';
  return 'mf';
}

function pluralArt(article: string | undefined, gender: Gender, pluralBase: string): string {
  if (!article) return '';
  if (article === 'il/la' || article === 'un/una') return 'i/le ';
  if (article === 'il') return 'i ';
  if (article === 'lo') return 'gli ';
  if (article === 'la') return 'le ';
  if (article === "l'") return gender === 'f' ? 'le ' : 'gli ';
  if (article === 'i' || article === 'gli' || article === 'le') return `${article} `;
  if (/^[aeiouàèéìòù]|^s[^aeiou]|^z|^ps|^pn|^gn|^x|^y/i.test(pluralBase)) return gender === 'f' ? 'le ' : 'gli ';
  return gender === 'f' ? 'le ' : 'i ';
}

/** Pluralizes a single Italian noun or adjective word according to its gender and morphological class. */
function pluralizeWord(word: string, gender: Gender, isAdjective = false): string {
  const w = word.toLowerCase();

  // Invariable endings: accented vowels, monosyllables, consonant endings, -i, -ie (except moglie)
  if (
    /[àèéìòù]$/i.test(w) ||
    w.length <= 2 ||
    !/[aeiou]$/i.test(w) ||
    w.endsWith('i') ||
    (!isAdjective && (w === 'foto' || w === 'radio' || w === 'moto' || w === 'auto' || w === 'bici' || w === 'cinema' || w === 'euro' || w === 'serie' || w === 'specie'))
  ) {
    return word;
  }

  if (w === 'moglie') return 'mogli';
  if (w === 'uomo') return 'uomini';
  if (w === 'mano') return 'mani';
  if (w === 'dio') return 'dei';
  if (w === 'tempio') return 'templi';

  // Feminine -ca / -ga -> -che / -ghe (always preserves velar sound with h)
  if (w.endsWith('ca') && gender === 'f') {
    return `${word.slice(0, -2)}che`;
  }
  if (w.endsWith('ga') && gender === 'f') {
    return `${word.slice(0, -2)}ghe`;
  }

  // Masculine -ca / -ga -> -chi / -ghi (except belga -> belgi)
  if (w.endsWith('ca') && gender !== 'f') {
    return `${word.slice(0, -2)}chi`;
  }
  if (w.endsWith('ga') && gender !== 'f') {
    return w === 'belga' ? 'belgi' : `${word.slice(0, -2)}ghi`;
  }

  // Feminine -cia / -gia:
  // If preceded by a vowel (or stressed -ìa like farmacia, energia, bugia, allergia, tecnologia, nostalgia, regia), keep -cie / -gie.
  // If preceded by a consonant (arancia, pioggia, spiaggia, pancia, provincia, borraccia, interfaccia, bilancia, fascia, traccia, tasca), drop 'i' -> -ce / -ge.
  if (w.endsWith('cia') && gender === 'f') {
    const before = w.charAt(w.length - 4);
    if (/[aeiou]/i.test(before) || w === 'farmacia') {
      return `${word.slice(0, -1)}e`;
    }
    return `${word.slice(0, -3)}ce`;
  }
  if (w.endsWith('gia') && gender === 'f') {
    const before = w.charAt(w.length - 4);
    if (
      /[aeiou]/i.test(before) ||
      w.endsWith('logia') ||
      w.endsWith('rgia') ||
      w === 'bugia' ||
      w === 'regia' ||
      w === 'nostalgia' ||
      w === 'franchigia'
    ) {
      return `${word.slice(0, -1)}e`;
    }
    return `${word.slice(0, -3)}ge`;
  }

  // Masculine/Adjective -co / -go
  if (w.endsWith('co') && gender !== 'f') {
    if (CO_GO_VELAR_PLURALS.has(w)) {
      return `${word.slice(0, -2)}chi`;
    }
    if (CO_GO_PALATAL_PLURALS.has(w) || (isAdjective && /(ico|aco)$/i.test(w) && w !== 'antico' && w !== 'pudico')) {
      return `${word.slice(0, -2)}ci`;
    }
    // Default rule: 2-syllable words (<= 5 chars) take -chi, longer -ico words take -ci, other -co words take -chi
    if (w.endsWith('ico') && w.length > 5) {
      return `${word.slice(0, -2)}ci`;
    }
    return `${word.slice(0, -2)}chi`;
  }

  if (w.endsWith('go') && gender !== 'f') {
    if (CO_GO_VELAR_PLURALS.has(w)) {
      return `${word.slice(0, -2)}ghi`;
    }
    if (CO_GO_PALATAL_PLURALS.has(w) || w.endsWith('logo') || w.endsWith('fago')) {
      return `${word.slice(0, -2)}gi`;
    }
    return `${word.slice(0, -2)}ghi`;
  }

  // Words ending in -io:
  // Stressed -ìo (zio, invio, rinvio, avvio, addio, mormorio, fruscio, pendio, oblio) -> -ii
  // Unstressed -io (studio, figlio, viaggio, orologio, ufficio, negozio, specchietto, passaggio, ecc.) -> -i
  if (w.endsWith('io')) {
    if (w === 'zio' || w === 'invio' || w === 'rinvio' || w === 'avvio' || w === 'pendio' || w === 'oblio') {
      return `${word.slice(0, -1)}i`;
    }
    return `${word.slice(0, -2)}i`;
  }

  if (w.endsWith('o')) {
    return `${word.slice(0, -1)}i`;
  }
  if (w.endsWith('a')) {
    return gender === 'm' ? `${word.slice(0, -1)}i` : `${word.slice(0, -1)}e`;
  }
  if (w.endsWith('e')) {
    return `${word.slice(0, -1)}i`;
  }

  return word;
}

function inferPlural(it: string, article: string | undefined, base: string, gender: Gender, pos: PartOfSpeech): string | undefined {
  if (pos !== 'noun') return undefined;
  const key = it.toLowerCase().trim().replace(/[’‘]/g, "'");
  if (IRREGULAR_PLURALS[key]) return IRREGULAR_PLURALS[key];
  if (article === 'i' || article === 'gli' || article === 'le') return it;
  if (key === 'internet') return undefined;

  const parts = base.trim().split(/\s+/);
  const firstWord = parts[0]!;
  const pluralFirst = pluralizeWord(firstWord, gender, false);

  if (parts.length === 1) {
    return `${pluralArt(article, gender, pluralFirst)}${pluralFirst}`.trim();
  }

  const secondWord = parts[1]!.toLowerCase();
  // If the remainder starts with a preposition or contraction (e.g., "da bollo", "di base", "dei cervelli", "del mutuo", "a distanza"),
  // only the head noun pluralizes.
  if (/^(di|del|dello|della|dell'|dei|degli|delle|da|dal|dallo|dalla|dalle|a|al|allo|alla|alle|in|nel|nella|con|su|sul|sulla|per)$/i.test(secondWord)) {
    const rest = parts.slice(1).join(' ');
    return `${pluralArt(article, gender, pluralFirst)}${pluralFirst} ${rest}`.trim();
  }

  // If the second word is an invariable noun apposition (e.g., "fedeltà", "utente", "serra"), keep tail invariable
  if (parts.length === 2 && INVARIABLE_COMPOUND_TAILS.has(secondWord)) {
    return `${pluralArt(article, gender, pluralFirst)}${pluralFirst} ${parts[1]}`.trim();
  }

  // Otherwise pluralize modifying adjectives in the compound noun (e.g., "la politica monetaria" -> "le politiche monetarie", "la pratica commerciale scorretta" -> "le pratiche commerciali scorrette")
  const pluralRest = parts
    .slice(1)
    .map((w) => pluralizeWord(w, gender, true))
    .join(' ');

  return `${pluralArt(article, gender, pluralFirst)}${pluralFirst} ${pluralRest}`.trim();
}

export function inferPos(word: BankWord): PartOfSpeech {
  const it = word.it.trim().toLowerCase().replace(/[’‘]/g, "'");
  const { article } = splitArticle(it);
  if (article) return 'noun';

  // Exact single-word or fixed-form lookups for prepositions, conjunctions, pronouns, adverbs, and bare nouns
  if (EXPLICIT_PREPOSITIONS.has(it)) return 'preposition';
  if (EXPLICIT_CONJUNCTIONS.has(it)) return 'conjunction';
  if (EXPLICIT_PRONOUNS.has(it)) return 'pronoun';
  if (EXPLICIT_ADVERBS.has(it)) return 'adverb';
  if (BARE_NOUNS.has(it)) return 'noun';
  if (EXPLICIT_ADJECTIVES.has(it)) return 'adjective';

  // Verbs: standard infinitives (-are, -ere, -ire), reflexives (-rsi, -rci, -rla, -rle, -rlo, -rli), and syncopated -rre verbs (proporre, ridurre, tradurre, porre, trarre)
  if (
    /^(essere|avere|stare|fare|dare|dire|bere|porre|trarre|tradurre|proporre|ridurre|produrre|condurre|introdurre|dedurre|indurre|comporre|esporre|imporre|supporre|opporsi|farcela)$/.test(it) ||
    (!it.includes(' ') && /(are|ere|ire|rsi|rre)$/.test(it))
  ) {
    return 'verb';
  }

  // Verb + preposition / clitic / object collocations in verb topics
  if (/^(riuscire a|consigliare \+ ci|prendere \+ le|andare d'accordo|tirare vento|fare la doccia|fare colazione|fare la spesa|fare una passeggiata|fare sport|fare tardi|fare attenzione|fare bella figura|fare finta|fare a meno di|avere bisogno|avere fame|avere sete|avere ragione|avere torto|avere paura|avere fretta|avere sonno|avere voglia|mettere in discussione|mettere in pratica|mettere a disposizione|prendere in considerazione|prendere atto|prendere parte|tenere conto|tenere presente|dare per scontato|venire a capo|portare a termine|entrare in vigore|scendere a compromessi)$/.test(it)) {
    return it.includes(' ') ? 'phrase' : 'verb';
  }

  // Multi-word expressions without an article are phrases (connectors, prepositional locutions, adverbial phrases, greetings)
  if (it.includes(' ')) {
    if (word.topic.en === 'Numbers') return 'number';
    return 'phrase';
  }

  if (/(mente)$/.test(it)) return 'adverb';

  const byTopic = POS_BY_TOPIC_EN[word.topic.en];
  if (byTopic) {
    if (byTopic === 'verb' && !/(are|ere|ire|rsi|rre|re)$/.test(it)) return 'phrase';
    return byTopic;
  }

  // Remaining article-less single words ending in typical adjective suffixes
  if (/(oso|osa|osi|ose|bile|bili|ale|ali|are|ari|ivo|iva|ivi|ive|ico|ica|ici|iche|ato|ata|ito|ita|uto|uta|ente|ante)$/.test(it)) {
    return 'adjective';
  }

  return 'adjective';
}

/**
 * Builds a natural, level-appropriate, topic-contextual Italian example sentence with accurate Bengali and English translations
 * so that vocabulary items never fall back to generic meta-boilerplate ("Usiamo il verbo...", "È una cosa molto...", etc.).
 */
function buildExample(w: BankWord, pos: PartOfSpeech, gender: Gender): { it: string; tr: Tr } {
  const it = w.it.trim();
  const bn = w.tr.bn.trim();
  const en = w.tr.en.trim();
  const topicEn = w.topic.en;
  const level = w.level;

  if (pos === 'verb') {
    const cleanEn = en.replace(/^to\s+/i, '');
    if (level === 'A1') {
      return {
        it: `Oggi voglio ${it} con i miei amici.`,
        tr: {
          bn: `আজ আমি আমার বন্ধুদের সাথে ${bn} চাই।`,
          en: `Today I want to ${cleanEn} with my friends.`,
        },
      };
    }
    if (level === 'A2') {
      return {
        it: `Prima di uscire, dobbiamo ${it} con calma.`,
        tr: {
          bn: `বাইরে যাওয়ার আগে আমাদের শান্তভাবে ${bn} দরকার।`,
          en: `Before going out, we need to ${cleanEn} calmly.`,
        },
      };
    }
    if (level === 'B1') {
      return {
        it: `In questa situazione è fondamentale saper ${it} al momento giusto.`,
        tr: {
          bn: `এই পরিস্থিতিতে সঠিক সময়ে ${bn} পারা অত্যন্ত জরুরি।`,
          en: `In this situation it is essential to know how to ${cleanEn} at the right time.`,
        },
      };
    }
    return {
      it: `La commissione ha deciso di ${it} per affrontare la questione in modo efficace.`,
      tr: {
        bn: `কমিটি বিষয়টি কার্যকরভাবে মোকাবিলা করার জন্য ${bn} করার সিদ্ধান্ত নিয়েছে।`,
        en: `The committee decided to ${cleanEn} to address the issue effectively.`,
      },
    };
  }

  if (pos === 'adjective') {
    const femForm = it.endsWith('o') ? `${it.slice(0, -1)}a` : it;
    if (topicEn.includes('Food') || topicEn.includes('Gastronomy')) {
      return {
        it: `Questo piatto tradizionale è fresco e davvero ${it}.`,
        tr: {
          bn: `এই ঐতিহ্যবাহী খাবারটি তাজা এবং সত্যিই ${bn}।`,
          en: `This traditional dish is fresh and truly ${en}.`,
        },
      };
    }
    if (topicEn.includes('Emotion') || topicEn.includes('Feeling') || topicEn.includes('Mind') || topicEn.includes('Psychology')) {
      return {
        it: `Dopo la notizia, Marco si è sentito subito ${it}.`,
        tr: {
          bn: `খবরটি শোনার পর মার্কো সাথে সাথে ${bn} অনুভব করল।`,
          en: `After the news, Marco immediately felt ${en}.`,
        },
      };
    }
    if (level === 'A1' || level === 'A2') {
      return {
        it: `La nuova casa di Giulia è molto ${femForm} e accogliente.`,
        tr: {
          bn: `জুলিয়ার নতুন বাড়িটি খুব ${bn} এবং মনোরম।`,
          en: `Giulia's new home is very ${en} and welcoming.`,
        },
      };
    }
    return {
      it: `Si tratta di una scelta ${femForm} per lo sviluppo del progetto.`,
      tr: {
        bn: `প্রকল্পটির উন্নয়নের জন্য এটি একটি ${bn} সিদ্ধান্ত।`,
        en: `This is a ${en} choice for the development of the project.`,
      },
    };
  }

  if (pos === 'number') {
    return {
      it: `Ci sono ${it} partecipanti iscritti al corso di italiano.`,
      tr: {
        bn: `ইতালিয়ান কোর্সে ${bn} জন অংশগ্রহণকারী নিবন্ধিত আছেন।`,
        en: `There are ${en} participants enrolled in the Italian course.`,
      },
    };
  }

  if (pos === 'preposition' || pos === 'conjunction') {
    return {
      it: `Nel dialogo usiamo «${it}» per collegare le idee con chiarezza.`,
      tr: {
        bn: `সংলাপে ধারণাগুলো স্পষ্টভাবে যুক্ত করতে আমরা «${it}» (${bn}) ব্যবহার করি।`,
        en: `In dialogue we use "${it}" (${en}) to connect ideas clearly.`,
      },
    };
  }

  if (pos === 'pronoun') {
    return {
      it: `Dimmi pure ${it} preferisci scegliere per la lezione di oggi.`,
      tr: {
        bn: `আজকের পাঠের জন্য তুমি ${bn} বেছে নিতে পছন্দ করো তা আমাকে বলো।`,
        en: `Tell me freely ${en} you prefer to choose for today's lesson.`,
      },
    };
  }

  if (pos === 'adverb' || pos === 'phrase' || pos === 'interjection') {
    if (level === 'A1' || level === 'A2') {
      return {
        it: `${it.charAt(0).toUpperCase() + it.slice(1)}, ci incontriamo in piazza alle cinque.`,
        tr: {
          bn: `${bn}, আমরা বিকেল পাঁচটায় চত্বরে দেখা করব।`,
          en: `${en.charAt(0).toUpperCase() + en.slice(1)}, we meet in the square at five o'clock.`,
        },
      };
    }
    return {
      it: `${it.charAt(0).toUpperCase() + it.slice(1)}, è opportuno valutare tutte le alternative disponibili.`,
      tr: {
        bn: `${bn}, উপলব্ধ সব বিকল্পগুলো মূল্যায়ন করা সমীচীন।`,
        en: `${en.charAt(0).toUpperCase() + en.slice(1)}, it is appropriate to evaluate all available alternatives.`,
      },
    };
  }

  // Noun examples tailored by level and topic
  const cleanEnNoun = en.replace(/^(the|a|an)\s+/i, '');
  const verbTakesSingular = gender === 'f' ? 'è pronta' : 'è importante';

  if (topicEn.includes('Food') || topicEn.includes('Gastronomy')) {
    return {
      it: `Al mercato rionale compro sempre ${it} di ottima qualità.`,
      tr: {
        bn: `স্থানীয় বাজার থেকে আমি সবসময় উন্নত মানের ${bn} কিনি।`,
        en: `At the local market I always buy top-quality ${cleanEnNoun}.`,
      },
    };
  }
  if (topicEn.includes('Travel') || topicEn.includes('Transport') || topicEn.includes('City')) {
    return {
      it: `Per arrivare in centro, controlliamo prima ${it}.`,
      tr: {
        bn: `শহরের কেন্দ্রে পৌঁছাতে আমরা আগে ${bn} দেখে নিই।`,
        en: `To get downtown, we check the ${cleanEnNoun} first.`,
      },
    };
  }
  if (topicEn.includes('Work') || topicEn.includes('Career') || topicEn.includes('Economy') || topicEn.includes('Finance') || topicEn.includes('Law') || topicEn.includes('Politics')) {
    return {
      it: `Durante la riunione abbiamo analizzato ${it} in ogni dettaglio.`,
      tr: {
        bn: `বৈঠকের সময় আমরা প্রতিটি খুঁটিনাটিসহ ${bn} বিশ্লেষণ করেছি।`,
        en: `During the meeting we analyzed the ${cleanEnNoun} in every detail.`,
      },
    };
  }
  if (topicEn.includes('Health') || topicEn.includes('Body') || topicEn.includes('Science') || topicEn.includes('Environment') || topicEn.includes('Nature')) {
    return {
      it: `Gli esperti spiegano perché ${it} svolge un ruolo essenziale.`,
      tr: {
        bn: `বিশেষজ্ঞরা ব্যাখ্যা করেন কেন ${bn} একটি অপরিহার্য ভূমিকা পালন করে।`,
        en: `Experts explain why the ${cleanEnNoun} plays an essential role.`,
      },
    };
  }
  if (level === 'A1' || level === 'A2') {
    return {
      it: `Nella vita quotidiana usiamo spesso ${it} (${verbTakesSingular}).`,
      tr: {
        bn: `দৈনন্দিন জীবনে আমাদের প্রায়ই ${bn} প্রয়োজন হয়।`,
        en: `In everyday life we often need the ${cleanEnNoun}.`,
      },
    };
  }
  return {
    it: `Il dibattito attuale riguarda ${it} e le sue conseguenze sociali.`,
    tr: {
      bn: `বর্তমান বিতর্কটি ${bn} এবং এর সামাজিক ফলাফল নিয়ে।`,
      en: `The current debate concerns the ${cleanEnNoun} and its social consequences.`,
    },
  };
}

export function enrichWord(w: BankWord, sentenceIndex?: Map<string, { it: string; tr: Tr; grammar: string }>): RichVocabItem {
  const pos = inferPos(w);
  const { article, base } = splitArticle(w.it);
  const gender = inferGender(article, base, pos);
  const plural = inferPlural(w.it, article, base, gender, pos);
  const normBase = base.toLowerCase().replace(/[’‘]/g, "'");
  const normIt = w.it.toLowerCase().replace(/[’‘]/g, "'");
  const firstToken = normBase.split(/\s+/)[0] ?? normBase;
  const matchedSentence =
    sentenceIndex?.get(normBase) ??
    sentenceIndex?.get(normIt) ??
    (firstToken.length >= 4 ? sentenceIndex?.get(firstToken) : undefined);
  const slug = w.it
    .toLowerCase()
    .replace(/[^a-z0-9àèéìòù]+/gi, '-')
    .replace(/^-|-$/g, '');

  return {
    id: `v-${w.level.toLowerCase()}-${slug}`,
    key: w.key,
    level: w.level,
    it: w.it,
    baseWord: base,
    article,
    gender,
    plural,
    pos,
    pronunciation: italianPronunciation(w.it),
    tr: w.tr,
    topic: w.topic,
    example: matchedSentence ? { it: matchedSentence.it, tr: matchedSentence.tr } : buildExample(w, pos, gender),
    grammarIds: matchedSentence ? [matchedSentence.grammar] : pos === 'noun' ? ['articoli', 'genere-numero'] : pos === 'verb' ? ['presente-are'] : ['struttura-frase'],
  };
}

export function enrichSentence(s: BankSentence, idx: number): RichSentenceItem {
  const slug = `${s.level.toLowerCase()}-${String(idx + 1).padStart(3, '0')}`;
  return {
    id: `s-${slug}`,
    key: s.key,
    level: s.level,
    it: s.it,
    tr: s.tr,
    pronunciation: italianPronunciation(s.it),
    grammar: s.grammar,
    grammarIds: [s.grammar],
    vocabKeys: [],
    context: {
      bn: `${s.level} দৈনন্দিন ব্যবহার (${s.grammar})`,
      en: `${s.level} everyday usage (${s.grammar})`,
    },
  };
}
