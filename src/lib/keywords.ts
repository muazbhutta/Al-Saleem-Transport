/**
 * SEO keyword sets for Al-Saleem Transport.
 *
 * These are RELEVANT, transport-framed keywords — every entry describes a
 * service this company provides or a destination it drives customers to
 * (airports, hotels, Ziyarat sites, masjids, malls/markets/perfume souqs and
 * restaurants across Saudi Arabia).
 *
 * NOTE: the `<meta name="keywords">` tag is no longer emitted. Google ignores
 * it outright, and shipping ~120 terms on every page read as keyword stuffing.
 * `knownPlaces` below still feeds the `knowsAbout` structured data in
 * `schema.ts`, which search engines DO consume.
 *
 * The keyword sets themselves are kept as a content/SEO reference — the terms
 * worth ranking for belong in real page copy, titles and descriptions.
 */

/** Core services + brand terms. */
export const serviceKeywords = [
  'Al-Saleem Transport',
  'Ziyarat transport Saudi Arabia',
  'Ziyarat taxi',
  'Ziyarat tour transport',
  'Umrah transport service',
  'Hajj transport service',
  'pick and drop Saudi Arabia',
  'private car with driver Saudi Arabia',
  'chauffeur service Makkah Madinah',
  'family transport Umrah',
  'AC car rental with driver',
  'GMC Yukon with driver',
  'Toyota Hiace van transfer',
  'Camry sedan taxi',
  'coaster bus rental Saudi Arabia',
  'licensed transport company Saudi Arabia',
  '24/7 transport Makkah Madinah Jeddah Taif',
];

/** Airport transfer keywords. */
export const airportKeywords = [
  'Jeddah airport transfer',
  'Jeddah airport taxi',
  'King Abdulaziz International Airport pickup',
  'KAIA airport transfer',
  'Jeddah airport to Makkah taxi',
  'Jeddah airport to Madinah car',
  'Madinah airport transfer',
  'Prince Mohammad bin Abdulaziz Airport taxi',
  'Madinah airport to hotel transfer',
  'airport meet and greet Saudi Arabia',
  'flight pickup and drop off',
  'Taif airport transfer',
  'Makkah airport pick and drop',
];

/** Hotel transfer & pick-and-drop keywords. */
export const hotelKeywords = [
  'hotel transfer Makkah',
  'hotel to Haram transfer',
  'hotel pick and drop Madinah',
  'hotel taxi Jeddah',
  'hotel to Masjid an-Nabawi transfer',
  'Clock Tower hotel transfer',
  'Makkah hotel shuttle',
  'Madinah hotel shuttle',
  'hotel to airport drop off',
  'inter-hotel transfer',
];

/** Ziyarat & pilgrimage keywords. */
export const ziyaratKeywords = [
  'Ziyarat Makkah',
  'Ziyarat Madinah',
  'Ziyarat tour Makkah Madinah',
  'historical sites tour Saudi Arabia',
  'Umrah Ziyarat package transport',
  'holy sites visit transport',
  'religious tour Saudi Arabia',
  'Ziyarat guide',
];

/** Makkah places served. */
export const makkahPlaceKeywords = [
  'Masjid al-Haram transport',
  'Kaaba Haram Sharif transfer',
  'Jabal al-Noor Cave of Hira tour',
  'Jabal Thawr Cave of Thawr tour',
  'Jannat al-Mualla cemetery visit',
  'Masjid Aisha Taneem miqat transport',
  'Masjid Jiranah miqat transport',
  'Hudaibiyah mosque visit',
  'Mina Arafat Muzdalifah transport',
  'Jamarat transport',
  'Jabal Rahmah Arafat tour',
  'Masjid Nimra visit',
  'Kiswah factory museum Makkah tour',
];

/** Madinah places served. */
export const madinahPlaceKeywords = [
  'Masjid an-Nabawi transport',
  'Rawdah Riyadh ul Jannah visit',
  'Quba Mosque transport',
  'Masjid Qiblatain visit',
  'Mount Uhud martyrs tour',
  'Jannat al-Baqi cemetery visit',
  'Seven Mosques Sab a Masajid tour',
  'Masjid Ghamamah visit',
  'Bir Uthman Well of Uthman visit',
  'Dates market Madinah transfer',
];

/** Taif places served. */
export const taifPlaceKeywords = [
  'Taif tour from Makkah',
  'Al-Hada Taif transport',
  'Al-Shafa Taif tour',
  'Taif rose gardens tour',
  'Taif rose perfume market visit',
  'Souq Okaz Taif visit',
  'Abdullah bin Abbas Mosque Taif',
  'Taif cable car transfer',
  'Shubra Palace Taif tour',
];

/** Badr places served. */
export const badrPlaceKeywords = [
  'Badr battlefield tour',
  'Ziyarat Badr from Madinah',
  'Martyrs of Badr cemetery visit',
  'Masjid al-Areesh Badr',
  'Badr historical site transport',
];

/** Masjid / mosque keywords. */
export const masjidKeywords = [
  'Masjid al-Haram',
  'Masjid an-Nabawi',
  'Masjid Quba',
  'Masjid Qiblatain',
  'Masjid al-Khaif Mina',
  'Masjid Nimra Arafat',
  'Masjid al-Jinn',
  'Masjid al-Bayah',
  'mosque tour transport Saudi Arabia',
];

/** Shopping, markets, perfumes & restaurants — as transport destinations. */
export const shoppingDiningKeywords = [
  'shopping mall transfer Jeddah',
  'shopping mall transfer Makkah',
  'Balad Jeddah old market transport',
  'market souq transfer Saudi Arabia',
  'gold souq transfer',
  'oud and perfume market transport',
  'Taif rose perfume shopping tour',
  'restaurant transfer Makkah Madinah',
  'family shopping trip transport',
  'Red Sea Mall Jeddah transfer',
  'Corniche Jeddah tour transport',
];

/** Cities / regions served across Saudi Arabia. */
export const cityKeywords = [
  'transport Makkah',
  'transport Madinah',
  'transport Jeddah',
  'transport Taif',
  'transport Badr',
  'Makkah to Madinah taxi',
  'Madinah to Makkah car',
  'Jeddah to Makkah transfer',
  'Makkah to Taif taxi',
  'intercity transfer Saudi Arabia',
  'transport across Saudi Arabia',
];

/** Everything, de-duplicated — the default site keyword set. */
export const siteKeywords: string[] = Array.from(
  new Set([
    ...serviceKeywords,
    ...airportKeywords,
    ...hotelKeywords,
    ...ziyaratKeywords,
    ...makkahPlaceKeywords,
    ...madinahPlaceKeywords,
    ...taifPlaceKeywords,
    ...badrPlaceKeywords,
    ...masjidKeywords,
    ...shoppingDiningKeywords,
    ...cityKeywords,
  ]),
);

/** Distinct real-world places the company drives to — feeds `knowsAbout`. */
export const knownPlaces: string[] = [
  'Masjid al-Haram, Makkah',
  'Kaaba',
  'Jabal al-Noor and Cave of Hira',
  'Jabal Thawr',
  'Jannat al-Mualla',
  'Mina',
  'Arafat',
  'Muzdalifah',
  'Masjid an-Nabawi, Madinah',
  'Al-Rawdah al-Sharifah',
  'Masjid Quba',
  'Masjid Qiblatain',
  'Mount Uhud',
  'Jannat al-Baqi',
  'Badr',
  'Taif',
  'Al-Hada, Taif',
  'Al-Shafa, Taif',
  'King Abdulaziz International Airport, Jeddah',
  'Prince Mohammad bin Abdulaziz Airport, Madinah',
];
