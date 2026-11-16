import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { RICH_WORDS, bankItem, findGlossaryBankKey } from '../src/content/bank';
import { loadAllBundles } from '../src/content/registry';
import { getSpeechSessionId, isSpeechSessionActive, speakItalian, startSpeechSession, stopSpeaking } from '../src/lib/speech';
import { isValidStorySentenceOrder, shuffleStorySentences } from '../src/screens/practice/StoriesScreen';

function walkTsFiles(dir: string): string[] {
  let out: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out = out.concat(walkTsFiles(full));
    else if (entry.name.endsWith('.ts')) out.push(full);
  }
  return out;
}

describe('P1 Quality & Functional Polish Regression Suite', () => {
  it('P1-1: all .bn fields across src/content contain natural Bengali Unicode and preserve English translations', () => {
    const files = walkTsFiles(path.resolve(__dirname, '../src/content'));
    const regex = /bn:\s*(['"`])((?:\\.|(?!\1).)*)\1(\s*,\s*en:\s*(['"`])((?:\\.|(?!\4).)*)\4)?/g;
    const missingBengali: string[] = [];
    const emptyEn: string[] = [];

    for (const file of files) {
      const txt = fs.readFileSync(file, 'utf8');
      let m: RegExpExecArray | null;
      while ((m = regex.exec(txt)) !== null) {
        const bn = m[2]!;
        const en = m[5];
        if (!/[\u0980-\u09FF]/.test(bn)) {
          missingBengali.push(`${path.relative(process.cwd(), file)}: ${bn}`);
        }
        if (en !== undefined && en.trim().length === 0) {
          emptyEn.push(`${path.relative(process.cwd(), file)}: ${bn}`);
        }
      }
    }

    expect(missingBengali).toEqual([]);
    expect(emptyEn).toEqual([]);
  });

  it('P1-2: vocabMeta classifies POS accurately, removes non-noun plurals, and pluralizes -ca/-ga, -co/-go, -cia/-gia, and compounds properly', () => {
    const allRich = Object.values(RICH_WORDS).flat();
    expect(allRich.length).toBeGreaterThanOrEqual(2100);

    // 1. Non-nouns must never have plural or masculine/feminine gender
    const nonNounsWithPlural = allRich.filter((w) => w.pos !== 'noun' && w.plural !== undefined);
    expect(nonNounsWithPlural).toEqual([]);
    const nonNounsWithGender = allRich.filter((w) => w.pos !== 'noun' && w.gender !== 'none');
    expect(nonNounsWithGender).toEqual([]);

    // 2. Check POS classification of previously misclassified words
    const byIt = new Map(allRich.map((w) => [w.it.toLowerCase(), w]));
    expect(byIt.get('proporre')?.pos).toBe('verb');
    expect(byIt.get('ridurre')?.pos).toBe('verb');
    expect(byIt.get('malato')?.pos).toBe('adjective');
    expect(byIt.get('rosso')?.pos).toBe('adjective');
    expect(byIt.get('arrabbiato')?.pos).toBe('adjective');
    expect(byIt.get('sostenibile')?.pos).toBe('adjective');
    expect(byIt.get('biologico')?.pos).toBe('adjective');
    expect(byIt.get('oggi')?.pos).toBe('adverb');
    expect(byIt.get('domani')?.pos).toBe('adverb');
    expect(byIt.get('durante')?.pos).toBe('preposition');
    expect(byIt.get('nonostante')?.pos).toBe('preposition');
    expect(byIt.get('mentre')?.pos).toBe('conjunction');
    expect(byIt.get('sebbene')?.pos).toBe('conjunction');
    expect(byIt.get('affinché')?.pos).toBe('conjunction');
    expect(byIt.get('chiunque')?.pos).toBe('pronoun');
    expect(byIt.get('a destra')?.pos).toBe('phrase');
    expect(byIt.get('per quanto riguarda')?.pos).toBe('phrase');

    // 3. -ca / -ga pluralization
    expect(byIt.get('la biblioteca')?.plural).toBe('le biblioteche');
    expect(byIt.get('la giacca')?.plural).toBe('le giacche');
    expect(byIt.get('la bocca')?.plural).toBe('le bocche');
    expect(byIt.get('la delega')?.plural).toBe('le deleghe');
    expect(byIt.get('il collega')?.plural).toBe('i colleghi');
    expect(byIt.get("l'etica professionale")?.gender).toBe('f');
    expect(byIt.get("l'etica professionale")?.plural).toBe('le etiche professionali');
    expect(byIt.get('la politica monetaria')?.plural).toBe('le politiche monetarie');
    expect(byIt.get('la marca da bollo')?.plural).toBe('le marche da bollo');

    // 4. -co / -go masculine pluralization
    expect(byIt.get('il medico')?.plural).toBe('i medici');
    expect(byIt.get('il sindaco')?.plural).toBe('i sindaci');
    expect(byIt.get('il farmaco equivalente')?.plural).toBe('i farmaci equivalenti');
    expect(byIt.get('il bonifico')?.plural).toBe('i bonifici');
    expect(byIt.get("l'elettrodomestico")?.plural).toBe('gli elettrodomestici');
    expect(byIt.get("l'albergo")?.plural).toBe('gli alberghi');
    expect(byIt.get('il lago')?.plural).toBe('i laghi');
    expect(byIt.get('il cuoco')?.plural).toBe('i cuochi');
    expect(byIt.get('il pacco')?.plural).toBe('i pacchi');
    expect(byIt.get('il bosco')?.plural).toBe('i boschi');
    expect(byIt.get('lo spreco')?.plural).toBe('gli sprechi');
    expect(byIt.get('il trasloco')?.plural).toBe('i traslochi');
    expect(byIt.get("l'ingorgo")?.plural).toBe('gli ingorghi');
    expect(byIt.get("l'imbarco")?.plural).toBe('gli imbarchi');
    expect(byIt.get("l'attacco informatico")?.plural).toBe('gli attacchi informatici');
    expect(byIt.get('il borgo storico')?.plural).toBe('i borghi storici');

    // 5. -cia / -gia pluralization
    expect(byIt.get("l'arancia")?.plural).toBe('le arance');
    expect(byIt.get('la pioggia')?.plural).toBe('le piogge');
    expect(byIt.get('la spiaggia')?.plural).toBe('le spiagge');
    expect(byIt.get('la camicia')?.plural).toBe('le camicie');
    expect(byIt.get('la valigia')?.plural).toBe('le valigie');
    expect(byIt.get('la farmacia')?.plural).toBe('le farmacie');

    // 6. Zero generic meta-boilerplate examples
    const metaBoilerplate = allRich.filter(
      (w) =>
        w.example.it.startsWith('Usiamo il verbo') ||
        w.example.it.startsWith('È una cosa molto') ||
        w.example.it.startsWith('In italiano diciamo:'),
    );
    expect(metaBoilerplate).toEqual([]);
  });

  it('P1-3: all story glossary words across A1-B2 resolve to canonical bank keys and exist in bankItem()', async () => {
    const bundles = await loadAllBundles();
    const unresolved: string[] = [];

    for (const level of ['A1', 'A2', 'B1', 'B2'] as const) {
      for (const story of bundles[level].stories) {
        for (const g of story.wordGlossary) {
          const key = findGlossaryBankKey(g, story.level);
          if (!key || !bankItem(key)) {
            unresolved.push(`${story.id}:${g.word}(${g.base})`);
          }
        }
      }
    }

    expect(unresolved).toEqual([]);
  });

  it('P1-4: speech sessions cancel cleanly when stopped or superseded', async () => {
    const s1 = startSpeechSession();
    expect(isSpeechSessionActive(s1)).toBe(true);
    expect(getSpeechSessionId()).toBe(s1);

    const s2 = startSpeechSession();
    expect(isSpeechSessionActive(s1)).toBe(false);
    expect(isSpeechSessionActive(s2)).toBe(true);

    // Calling speakItalian with a stale session ID rejects immediately
    await expect(speakItalian('Ciao!', 1, s1)).rejects.toThrow('speech-cancelled');

    await stopSpeaking();
    expect(isSpeechSessionActive(s2)).toBe(false);
  });

  it('P1-5: all 148 story sentence-ordering puzzles (including the 17 previously sorted stories) are shuffled and never in solved order', async () => {
    const bundles = await loadAllBundles();
    const previouslySortedIds = [
      'st-a1-07',
      'st-a1-11',
      'st-a1-15',
      'st-a1-18',
      'st-a1-23',
      'st-a2-06',
      'st-b1-02',
      'st-b1-05',
      'st-b1-30',
      'st-b1-38',
      'st-b1-39',
      'st-b2-15',
      'st-b2-16',
      'st-b2-17',
      'st-b2-28',
      'st-b2-31',
      'st-b2-50',
    ];

    const alreadySolved: string[] = [];
    for (const level of ['A1', 'A2', 'B1', 'B2'] as const) {
      for (const story of bundles[level].stories) {
        const orig = story.comprehension.orderSentences;
        if (orig.length > 1) {
          const shuffled = shuffleStorySentences(orig, story.id);
          expect(shuffled).toHaveLength(orig.length);
          expect([...shuffled].sort()).toEqual([...orig].sort());
          if (shuffled.every((s, idx) => s === orig[idx])) {
            alreadySolved.push(story.id);
          }
          expect(isValidStorySentenceOrder(orig, orig)).toBe(true);
          expect(isValidStorySentenceOrder(shuffled, orig)).toBe(false);
        }
      }
    }

    expect(alreadySolved).toEqual([]);
    for (const id of previouslySortedIds) {
      expect(alreadySolved).not.toContain(id);
    }
  });

  it('P1-6: dead LessonIndexScreen.tsx is removed and AboutScreen reflects v2.0 A1-B2 curriculum', () => {
    const deadPath = path.resolve(__dirname, '../src/screens/practice/LessonIndexScreen.tsx');
    expect(fs.existsSync(deadPath)).toBe(false);

    const infoPath = path.resolve(__dirname, '../src/screens/InfoScreens.tsx');
    const infoTxt = fs.readFileSync(infoPath, 'utf8');
    expect(infoTxt).toContain('A1–B2');
    expect(infoTxt).not.toContain('Only A1 Unit 1 is built right now');
  });
});
