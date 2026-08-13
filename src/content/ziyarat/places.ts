/**
 * Location data for Ziyarat places — the single source of truth.
 *
 * ZERO translatable prose lives here. Names and descriptions stay in the
 * per-locale guide files (`src/content/ziyarat/<locale>.ts`) and are looked up
 * by `id`, so all 11 languages stay in sync automatically.
 *
 * `id` MATCHES THE EXISTING GUIDE HEADING ID (the `h3` block id), not a new
 * slug. That is what makes the lookup work without touching the content files.
 *
 * COORDINATES: supplied and treated as verified-approximate. Anything not
 * supplied is absent from this list rather than guessed — see MISSING_COORDS.
 */

export type ZiyaratCity = 'makkah' | 'madinah' | 'taif' | 'jeddah';

export type ZiyaratPlace = {
  /** Stable id — must equal the guide's h3 heading id. */
  id: string;
  city: ZiyaratCity;
  /**
   * `null` when no verified coordinates exist. In that case the map links fall
   * back to a name query, which Google/Apple resolve to the real place — far
   * safer than inventing a pin that would send a pilgrim somewhere wrong.
   * Only places WITH coords emit geo JSON-LD.
   */
  coords: { lat: number; lng: number } | null;
  googleMapsUrl: string;
  appleMapsUrl: string;
  /**
   * STRAIGHT-LINE km from Masjid al-Haram (Makkah/Taif) or Masjid an-Nabawi
   * (Madinah), computed from `coords`. This is deliberately NOT road distance —
   * road distance is always longer and was not supplied. Renamed in the UI as
   * "distance", never presented as a driving figure. `null` when the place has
   * no coordinates to compute from.
   */
  distanceFromHaramKm: number | null;
  /**
   * Typical non-peak drive time in minutes. `null` = not yet supplied.
   * NOT estimated: Al-Saleem drives these routes daily and has better data
   * than any public source. The card omits the row when this is null.
   */
  driveTimeMin: number | null;
  /** Message key under `ziyaratLocation.bestTime.*`, never raw prose. */
  bestTimeToVisit?: string;
  /** Other place ids on the same practical driving route. */
  nearby?: string[];
};

const REFERENCE = {
  makkah: { lat: 21.4225, lng: 39.8262 }, // Masjid al-Haram
  taif: { lat: 21.4225, lng: 39.8262 }, // referenced to Haram; Taif is a day trip
  madinah: { lat: 24.4672, lng: 39.6112 }, // Masjid an-Nabawi
  jeddah: { lat: 21.4225, lng: 39.8262 },
} as const;

/**
 * Map links. With coordinates we pin exactly; without, we hand the map app a
 * name query and let it resolve the real place.
 *
 * `searchName` is a map query string, not display copy — it is never shown to a
 * reader, so it does not belong in the locale files. English + city is what
 * Google and Apple resolve most reliably for these sites.
 */
function mapsUrls(
  id: string,
  coords: { lat: number; lng: number } | null,
  searchName?: string,
) {
  if (coords) {
    const { lat, lng } = coords;
    return {
      googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
      appleMapsUrl: `https://maps.apple.com/?ll=${lat},${lng}&q=${encodeURIComponent(id)}`,
    };
  }
  const q = encodeURIComponent(searchName ?? id);
  return {
    googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${q}`,
    appleMapsUrl: `https://maps.apple.com/?q=${q}`,
  };
}

function haversineKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
): number {
  const R = 6371.0088;
  const toRad = (d: number) => (d * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(h)) * 10) / 10;
}

type Seed = {
  id: string;
  city: ZiyaratCity;
  /** Omit both when there are no verified coordinates; give `searchName` instead. */
  lat?: number;
  lng?: number;
  /** Map query string used when coordinates are unknown. Not display copy. */
  searchName?: string;
  driveTimeMin?: number;
  bestTimeToVisit?: string;
  nearby?: string[];
};

const seed: Seed[] = [
  // ---------------------------------------------------------------- Makkah
  { id: 'kabah', city: 'makkah', lat: 21.4225, lng: 39.8262, nearby: ['masjid-jinn', 'jannat-mualla'] },
  { id: 'masjid-jinn', city: 'makkah', lat: 21.4297, lng: 39.8283, nearby: ['jannat-mualla', 'kabah'] },
  { id: 'jannat-mualla', city: 'makkah', lat: 21.4306, lng: 39.8319, bestTimeToVisit: 'earlyMorning', nearby: ['masjid-jinn', 'jabal-noor'] },
  { id: 'masjid-taneem', city: 'makkah', lat: 21.4356, lng: 39.7861, nearby: ['kabah'] },
  { id: 'jabal-noor', city: 'makkah', lat: 21.4577, lng: 39.8595, bestTimeToVisit: 'earlyMorning', nearby: ['jannat-mualla', 'mina'] },
  { id: 'jabal-thawr', city: 'makkah', lat: 21.3739, lng: 39.8567, bestTimeToVisit: 'earlyMorning', nearby: ['kabah'] },
  { id: 'mina', city: 'makkah', lat: 21.4133, lng: 39.8933, nearby: ['muzdalifah', 'jabal-rehmat'] },
  { id: 'muzdalifah', city: 'makkah', lat: 21.3833, lng: 39.9333, nearby: ['mina', 'jabal-rehmat'] },
  { id: 'jabal-rehmat', city: 'makkah', lat: 21.3547, lng: 39.9843, nearby: ['muzdalifah', 'mina'] },
  { id: 'masjid-hudaibiyah', city: 'makkah', lat: 21.4167, lng: 39.6167, nearby: ['masjid-taneem'] },
  // --- researched Aug 2026, sources recorded in the handover notes ---
  { id: 'masjid-nimra', city: 'makkah', lat: 21.35385, lng: 39.9662, nearby: ['jabal-rehmat', 'muzdalifah'] },
  { id: 'masjid-khaif', city: 'makkah', lat: 21.41527, lng: 39.8778, nearby: ['mina', 'jamarat'] },
  { id: 'jamarat', city: 'makkah', lat: 21.42139, lng: 39.87278, nearby: ['mina', 'masjid-khaif'] },
  // MEDIUM confidence — see LOW_CONFIDENCE_COORDS
  { id: 'masjid-jiranah', city: 'makkah', lat: 21.567, lng: 39.95, nearby: ['masjid-taneem'] },

  // --------------------------------------------------------------- Madinah
  { id: 'riyaz-jannah', city: 'madinah', lat: 24.4672, lng: 39.6112, nearby: ['jannat-baqi', 'masjid-ghamamah'] },
  { id: 'jannat-baqi', city: 'madinah', lat: 24.4664, lng: 39.6142, bestTimeToVisit: 'afterFajr', nearby: ['riyaz-jannah'] },
  { id: 'masjid-ghamamah', city: 'madinah', lat: 24.4678, lng: 39.61, nearby: ['riyaz-jannah'] },
  { id: 'jabal-khandaq', city: 'madinah', lat: 24.4836, lng: 39.5936, nearby: ['masjid-qiblatain', 'jabal-uhud'] },
  { id: 'masjid-qiblatain', city: 'madinah', lat: 24.4842, lng: 39.5786, nearby: ['jabal-khandaq'] },
  { id: 'masjid-quba', city: 'madinah', lat: 24.4392, lng: 39.6172, bestTimeToVisit: 'morning', nearby: ['riyaz-jannah'] },
  { id: 'jabal-uhud', city: 'madinah', lat: 24.5083, lng: 39.6142, bestTimeToVisit: 'earlyMorning', nearby: ['jabal-khandaq'] },
  // MEDIUM confidence — two sources ~500 m apart; see LOW_CONFIDENCE_COORDS
  { id: 'martyrs-uhud', city: 'madinah', lat: 24.5014, lng: 39.6128, bestTimeToVisit: 'earlyMorning', nearby: ['jabal-uhud'] },

  // ------------------------------------------------------------------ Taif
  { id: 'ibn-abbas', city: 'taif', lat: 21.2703, lng: 40.4158, nearby: ['al-shafa'] },
  { id: 'qarn-manazil', city: 'taif', lat: 21.62639, lng: 40.41528, nearby: ['ibn-abbas'] },

  // ==================================================================
  // NAME-QUERY ONLY — no verified coordinates.
  // These resolve by name in Google/Apple Maps. Replace `searchName` with
  // `lat`/`lng` as soon as a real pin is captured on site; nothing else needs
  // to change. Listed in NAME_QUERY_ONLY below.
  // ==================================================================

  // ---------------------------------------------------------------- Makkah
  { id: 'wadi-muhassir', city: 'makkah', searchName: 'Wadi Muhassir Muzdalifah Mina Makkah', nearby: ['muzdalifah', 'mina'] },
  { id: 'masjid-bayah', city: 'makkah', searchName: 'Masjid Al Bay’ah Mina Makkah', nearby: ['jamarat', 'mina'] },
  { id: 'masjid-shajar', city: 'makkah', searchName: 'Masjid Al Shajarah Makkah', nearby: ['masjid-jinn'] },
  { id: 'masjid-fath', city: 'makkah', searchName: 'Masjid Al Rayah Al Fath Makkah', nearby: ['jannat-mualla'] },
  { id: 'masjid-hijaba', city: 'makkah', searchName: 'Masjid Al Hijabah Makkah', nearby: ['kabah'] },
  { id: 'masjid-mawlid', city: 'makkah', searchName: 'Birthplace of Prophet Muhammad Library Makkah', nearby: ['kabah', 'jannat-mualla'] },
  { id: 'qasr-saqf', city: 'makkah', searchName: 'Qasr Al Saqifah Makkah', nearby: ['kabah'] },
  { id: 'maqbarat-adl', city: 'makkah', searchName: 'Maqbarat Al Adl Cemetery Makkah', nearby: ['jannat-mualla'] },
  { id: 'martyrs-cemetery-makkah', city: 'makkah', searchName: 'Martyrs Cemetery Makkah', nearby: ['jannat-mualla'] },
  { id: 'jabal-khandama', city: 'makkah', searchName: 'Jabal Khandama Makkah', nearby: ['kabah', 'jannat-mualla'] },
  { id: 'kiswah-museum', city: 'makkah', searchName: 'Kiswah Factory Kaaba Umm Al Joud Makkah', nearby: ['masjid-taneem'] },
  { id: 'zubaida-aqueduct', city: 'makkah', searchName: 'Ain Zubaidah Aqueduct Makkah', nearby: ['jabal-rehmat'] },

  // --------------------------------------------------------------- Madinah
  { id: 'masjid-abubakr', city: 'madinah', searchName: 'Masjid Abu Bakr Al Siddiq Madinah', nearby: ['masjid-ghamamah', 'riyaz-jannah'] },
  { id: 'masjid-bilal', city: 'madinah', searchName: 'Masjid Bilal Madinah', nearby: ['masjid-ghamamah'] },
  { id: 'masjid-ali-madinah', city: 'madinah', searchName: 'Masjid Ali ibn Abi Talib Madinah', nearby: ['masjid-ghamamah'] },
  { id: 'masjid-jumah', city: 'madinah', searchName: 'Masjid Al Jumuah Madinah', nearby: ['masjid-quba'] },
  { id: 'ring-well', city: 'madinah', searchName: 'Bir Al Khatam Ring Well Madinah', nearby: ['masjid-quba'] },
  { id: 'bir-ruma', city: 'madinah', searchName: 'Bir Uthman Bir Ruma Madinah', nearby: ['jabal-uhud'] },
  { id: 'bir-ghars', city: 'madinah', searchName: 'Bir Ghars Madinah', nearby: ['masjid-quba'] },
  { id: 'bustan-mustaqbal', city: 'madinah', searchName: 'Bustan Al Mustaqbal Madinah', nearby: ['masjid-quba'] },
  { id: 'cave-uhud', city: 'madinah', searchName: 'Cave of Uhud Mount Uhud Madinah', nearby: ['jabal-uhud', 'martyrs-uhud'] },
  { id: 'house-fatima', city: 'madinah', searchName: 'House of Fatimah Madinah', nearby: ['jannat-baqi'] },

  // ------------------------------------------------------------------ Taif
  { id: 'wadi-mathna', city: 'taif', searchName: 'Wadi Mathna Taif', nearby: ['ibn-abbas'] },
  { id: 'masjid-addas', city: 'taif', searchName: 'Masjid Addas Taif', nearby: ['ibn-abbas'] },
  { id: 'masjid-ali-taif', city: 'taif', searchName: 'Masjid Ali ibn Abi Talib Taif', nearby: ['ibn-abbas'] },
  { id: 'masjid-rasool-taif', city: 'taif', searchName: 'Masjid Al Rasool Taif', nearby: ['ibn-abbas'] },
  { id: 'masjid-wadi-rahmah', city: 'taif', searchName: 'Masjid Wadi Al Rahmah Taif', nearby: ['ibn-abbas'] },
  { id: 'al-shafa', city: 'taif', searchName: 'Al Shafa Taif', bestTimeToVisit: 'morning', nearby: ['ibn-abbas'] },
  { id: 'souq-okaz', city: 'taif', searchName: 'Souq Okaz Taif', nearby: ['ibn-abbas'] },
  { id: 'bab-al-raye', city: 'taif', searchName: 'Bab Al Rayi Taif', nearby: ['ibn-abbas'] },
  { id: 'taif-rose', city: 'taif', searchName: 'Taif Rose Farm Al Hada', bestTimeToVisit: 'morning', nearby: ['al-shafa'] },

  // ------------------------------------------------------------------ Badr
  { id: 'masjid-areesh', city: 'madinah', searchName: 'Masjid Al Areesh Badr', nearby: ['martyrs-badr'] },
  { id: 'martyrs-badr', city: 'madinah', searchName: 'Martyrs of Badr Cemetery Badr', nearby: ['masjid-areesh'] },
];

export const ziyaratPlaces: ZiyaratPlace[] = seed.map((s) => {
  const coords =
    s.lat !== undefined && s.lng !== undefined ? { lat: s.lat, lng: s.lng } : null;
  return {
    id: s.id,
    city: s.city,
    coords,
    ...mapsUrls(s.id, coords, s.searchName),
    distanceFromHaramKm: coords ? haversineKm(REFERENCE[s.city], coords) : null,
    driveTimeMin: s.driveTimeMin ?? null,
    bestTimeToVisit: s.bestTimeToVisit,
    nearby: s.nearby,
  };
});

const byId = new Map(ziyaratPlaces.map((p) => [p.id, p]));

export function getPlace(id: string): ZiyaratPlace | undefined {
  return byId.get(id);
}

export function placesByCity(city: ZiyaratCity): ZiyaratPlace[] {
  return ziyaratPlaces.filter((p) => p.city === city);
}

/**
 * Maps a chapter's block list to "which place section ends at this index".
 *
 * A place section runs from its `h3` until the next `h3` (or the end of the
 * chapter), so the card belongs after the last block of that run. Returns a
 * Map of block index -> { id, name } for indices that close a known place.
 */
export function locationSlotsForBlocks(
  blocks: { type: string; id?: string; text?: string }[],
): Map<number, { id: string; name: string }> {
  const slots = new Map<number, { id: string; name: string }>();
  let current: { id: string; name: string } | null = null;

  blocks.forEach((block, i) => {
    if (block.type === 'h3') {
      current =
        block.id && byId.has(block.id)
          ? // strip the leading "5.14 " numbering so the WhatsApp prefill and
            // aria labels read as a clean place name
            { id: block.id, name: (block.text ?? '').replace(/^[\d.]+\s*/, '').trim() }
          : null;
      return;
    }
    const next = blocks[i + 1];
    const isLastOfSection = !next || next.type === 'h3';
    if (current && isLastOfSection) {
      slots.set(i, current);
      current = null;
    }
  });

  return slots;
}

/**
 * Guide headings that are real, visitable places but have no coordinates yet.
 * Deliberately listed rather than guessed — a wrong pin sends a pilgrim to the
 * wrong place. Add each to `seed` once its coordinates are confirmed.
 */
export type PlaceEntry = {
  place: ZiyaratPlace;
  /** Localised name, from the guide heading with its numbering stripped. */
  name: string;
  /** Localised first paragraph of the section, for schema `description`. */
  description?: string;
};

/**
 * Pairs every located place with its localised name and lead paragraph, in the
 * order the guide presents them. Used by both the JSON-LD builder and the
 * locations index so the two can never drift apart.
 *
 * Reads the guide as data — it does not modify a single character of the
 * religious content.
 */
export function extractPlaceEntries(
  chapters: { blocks: { type: string; id?: string; text?: string }[] }[],
): PlaceEntry[] {
  const entries: PlaceEntry[] = [];

  for (const chapter of chapters) {
    let current: PlaceEntry | null = null;
    for (const block of chapter.blocks) {
      if (block.type === 'h3') {
        const place = block.id ? byId.get(block.id) : undefined;
        current = place
          ? { place, name: (block.text ?? '').replace(/^[\d.]+\s*/, '').trim() }
          : null;
        if (current) entries.push(current);
        continue;
      }
      // first paragraph after the heading becomes the description
      if (current && !current.description && block.type === 'p' && block.text) {
        current.description = block.text.length > 300
          ? `${block.text.slice(0, 297).trimEnd()}…`
          : block.text;
      }
    }
  }

  return entries;
}

/** Places whose map links resolve by NAME because no verified pin exists yet. */
export const NAME_QUERY_ONLY: string[] = ziyaratPlaces
  .filter((p) => p.coords === null)
  .map((p) => p.id);

/** @deprecated superseded by NAME_QUERY_ONLY — every place now has a map link. */
export const MISSING_COORDS: string[] = [
  // Makkah
  'wadi-muhassir', 'masjid-bayah', 'masjid-shajar', 'masjid-fath',
  'masjid-hijaba', 'masjid-mawlid', 'qasr-saqf', 'maqbarat-adl',
  'martyrs-cemetery-makkah', 'jabal-khandama', 'kiswah-museum',
  'zubaida-aqueduct',
  // Taif
  'wadi-mathna', 'masjid-addas', 'masjid-ali-taif', 'masjid-rasool-taif',
  'masjid-wadi-rahmah', 'al-shafa', 'souq-okaz', 'bab-al-raye', 'taif-rose',
  // Madinah
  'masjid-abubakr', 'masjid-bilal', 'masjid-ali-madinah', 'masjid-jumah',
  'ring-well', 'bir-ruma', 'bir-ghars', 'bustan-mustaqbal', 'cave-uhud',
  'house-fatima',
  // Badr
  'masjid-areesh', 'martyrs-badr',
];

/**
 * Coordinates that resolved, but not to a standard worth trusting blindly.
 * These render a card like any other — verify before relying on them.
 *
 * masjid-jiranah   one source gave 21.4298,39.8327, which is ~1 km from the
 *                  Haram and contradicts its own "26 km north-east" text; that
 *                  value was discarded. The kept figure is degree-minute
 *                  precision only (~±1 km).
 * martyrs-uhud     two sources ~500 m apart (24.5014,39.6128 vs
 *                  24.5065,39.6150). The first is used.
 */
export const LOW_CONFIDENCE_COORDS: string[] = ['masjid-jiranah', 'martyrs-uhud'];
