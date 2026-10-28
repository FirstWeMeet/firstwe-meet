// Made-up profiles for the dating-app prop page (/props/dating-profiel/<slug>/).
// Photos: drop generated images in public/props/ under the names listed below
// (portrait, roughly 4:5). Missing files fall back to a coloured placeholder.

export interface PropProfile {
  slug: string;
  name: string;
  age: number;
  city: string;
  distance: string;
  job: string;
  school: string;
  height: string;
  drinks: string;
  smokes: string;
  bio: string;
  interests: string[];
  prompts: { q: string; a: string }[];
  photos: string[];
}

export const profiles: PropProfile[] = [
  {
    slug: 'daan',
    name: 'Daan',
    age: 31,
    city: 'Rotterdam',
    distance: '2 km verderop',
    job: 'Architect',
    school: 'TU Delft',
    height: '1,88 m',
    drinks: 'Soms',
    smokes: 'Nee',
    bio: 'Fietst overal heen, ook als het regent. Op zoek naar iemand om nieuwe koffietentjes mee af te strepen en op zondag de krant mee door te nemen.',
    interests: ['Architectuur', 'Koffie', 'Wielrennen', 'Jazz', 'Koken', 'Musea'],
    prompts: [
      { q: 'Mijn ideale eerste date', a: 'Een rondje over de Markthal en dan ergens een natuurwijn.' },
      { q: 'Ik ben stiekem goed in', a: 'Risotto. Ik roer met overgave.' },
      { q: 'Wat je moet weten', a: 'Mijn plantenverzameling is groter dan mijn sokkenla.' },
    ],
    photos: ['/props/daan-1.jpg', '/props/daan-2.jpg', '/props/daan-3.jpg'],
  },
  {
    slug: 'youssef',
    name: 'Youssef',
    age: 28,
    city: 'Rotterdam',
    distance: '5 km verderop',
    job: 'Fysiotherapeut',
    school: 'Hogeschool Rotterdam',
    height: '1,82 m',
    drinks: 'Nee',
    smokes: 'Nee',
    bio: 'Zaterdag voetbal, zondag uitslapen. Ik maak de beste muntthee van Zuid en ik ben altijd te vroeg.',
    interests: ['Voetbal', 'Reizen', 'Fotografie', 'Hiphop', 'Strand', 'Bordspellen'],
    prompts: [
      { q: 'Mijn grootste red flag', a: 'Ik ga bij elk restaurant voor het menu twintig minuten twijfelen.' },
      { q: 'Ik val voor', a: 'Iemand die me uitlacht als ik verlies met Catan.' },
      { q: 'Een perfecte zondag', a: 'Ontbijt bij mijn moeder, daarna naar Hoek van Holland.' },
    ],
    photos: ['/props/youssef-1.jpg', '/props/youssef-2.jpg', '/props/youssef-3.jpg'],
  },
  {
    slug: 'thijs',
    name: 'Thijs',
    age: 34,
    city: 'Schiedam',
    distance: '7 km verderop',
    job: 'Kok',
    school: 'ROC Mondriaan',
    height: '1,79 m',
    drinks: 'Ja',
    smokes: 'Soms',
    bio: 'Ik kook de hele week voor anderen, dus jij mag me meenemen naar de snackbar. Hondenvader van Bram (de hond, niet mijn zoon).',
    interests: ['Honden', 'Festivals', 'Vinyl', 'Vissen', 'Eten', 'Darts'],
    prompts: [
      { q: 'Mijn ideale eerste date', a: 'Kroketten halen en op een bankje aan de Schie zitten.' },
      { q: 'Ik zoek iemand die', a: 'Bram ook leuk vindt. Dit is niet onderhandelbaar.' },
      { q: 'Mijn guilty pleasure', a: 'De Toppers. Elk jaar. Vooraan.' },
    ],
    photos: ['/props/thijs-1.jpg', '/props/thijs-2.jpg', '/props/thijs-3.jpg'],
  },
];
