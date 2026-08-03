import type { GuideBlock } from './types';

/**
 * Shared reference tables reused across every language's guide.
 *
 * The martyr lists are proper nouns, so the row VALUES (names + group) are kept
 * in Latin transliteration across all locales; only the caption + column
 * headers are translated per language. Machine-assisted drafts are flagged
 * "pending scholar review" - a reviewer can localise the names to the target
 * script at that stage.
 */

const UHUD_ROWS: string[][] = [
  ['1', 'Hazrat Hamza bin Abdul-Muttalib RA (Sayyid-ush-Shuhada)', 'Muhajireen'],
  ['2', 'Mus‘ab bin Umair', 'Muhajireen'],
  ['3', 'Abdullah bin Jahsh', 'Muhajireen'],
  ['4', 'Amir bin Abi Waqqas', 'Muhajireen'],
  ['5', 'Safwan bin Bayda', 'Muhajireen'],
  ['6', 'Suhayl bin Bayda', 'Muhajireen'],
  ['7', 'Aqil bin Bukair', 'Muhajireen'],
  ['8', 'Aamir bin Bukair', 'Muhajireen'],
  ['9', 'Rafi‘ bin Mu‘alla', 'Muhajireen'],
  ['10', 'Abu Huzayfah bin Utbah', 'Muhajireen'],
  ['11', 'Sa‘d bin Rabi‘', 'Ansar - Bani Aws'],
  ['12', 'Anas bin Nadr', 'Ansar - Bani Aws'],
  ['13', 'Hanzala bin Abi ‘Aamir (Ghasil-ul-Malaika)', 'Ansar - Bani Aws'],
  ['14', 'Abdullah bin Amr bin Haram', 'Ansar - Bani Aws'],
  ['15', 'Harith bin Atik', 'Ansar - Bani Aws'],
  ['16', 'Rifa‘ah bin Waqsh', 'Ansar - Bani Aws'],
  ['17', 'Malik bin Sinan', 'Ansar - Bani Aws'],
  ['18', 'Ziyad bin Sakan', 'Ansar - Bani Aws'],
  ['19', 'Yazid bin Sakan', 'Ansar - Bani Aws'],
  ['20', 'Amr bin Mu‘adh', 'Ansar - Bani Aws'],
  ['21', 'Harith bin Suhaib', 'Ansar - Bani Aws'],
  ['22', 'Sahl bin Qais', 'Ansar - Bani Aws'],
  ['23', 'Thabit bin Waqsh', 'Ansar - Bani Aws'],
  ['24', 'Nu‘man bin Malik', 'Ansar - Bani Aws'],
  ['25', 'Qais bin Rabi‘', 'Ansar - Bani Aws'],
  ['26', 'Mas‘ud bin Aws', 'Ansar - Bani Aws'],
  ['27', 'Abdullah bin Sahl', 'Ansar - Bani Khazraj'],
  ['28', 'Ubaid bin Ta‘labah', 'Ansar - Bani Khazraj'],
  ['29', 'Abdullah bin Jabir', 'Ansar - Bani Khazraj'],
  ['30', 'Rafi‘ bin Malik', 'Ansar - Bani Khazraj'],
  ['31', 'Hubab bin Munzir', 'Ansar - Bani Khazraj'],
  ['32', 'Harith bin ‘Adi', 'Ansar - Bani Khazraj'],
  ['33', 'Abdullah bin Qais', 'Ansar - Bani Khazraj'],
  ['34', 'Amir bin Ziyad', 'Ansar - Bani Khazraj'],
  ['35', 'Habbab bin Qais', 'Ansar - Bani Khazraj'],
  ['36', 'Jabir bin Atiq', 'Ansar - Bani Khazraj'],
  ['37', 'Qais bin Malik', 'Ansar - Bani Khazraj'],
  ['38', 'Amr bin Zaid', 'Ansar - Bani Khazraj'],
  ['39', 'Salim bin Umair', 'Ansar - Bani Khazraj'],
  ['40', 'Abdullah bin Atiq', 'Riwayati'],
  ['41', 'Thabit bin Dakhsh', 'Riwayati'],
  ['42', 'Harith bin Qais', 'Riwayati'],
  ['43', 'Abdullah bin Qatadah', 'Riwayati'],
  ['44', 'Mas‘ud bin Rabi‘', 'Riwayati'],
  ['45', 'Zaid bin Harithah (ikhtilaf)', 'Riwayati'],
  ['46', 'Amr bin Sakan', 'Riwayati'],
  ['47', 'Abdullah bin Thabit', 'Riwayati'],
  ['48', 'Malik bin Qais', 'Riwayati'],
  ['49', 'Numan bin Thabit', 'Riwayati'],
];

const BADR_ROWS: string[][] = [
  ['1', 'Umair bin Abi Waqqas RA', 'Muhajireen'],
  ['2', 'Safwan bin Al-Bayda RA', 'Muhajireen'],
  ['3', 'Rafi‘ bin Al-Mu‘alla RA', 'Ansar - Bani Khazraj'],
  ['4', 'Sa‘d bin Khaythama RA', 'Ansar - Bani Aws'],
  ['5', 'Mubashshir bin Abdul Munzir RA', 'Ansar - Bani Aws'],
  ['6', 'Harith bin ‘Ateek RA', 'Ansar - Bani Aws'],
  ['7', 'Mu‘az bin Afra RA', 'Ansar - Bani Aws'],
  ['8', 'Yazid bin Al-Harith RA', 'Ansar - Bani Khazraj'],
  ['9', 'Suhayl bin Al-Bayda RA', 'Ansar - Bani Khazraj'],
  ['10', '‘Auf bin Afra RA', 'Ansar - Bani Khazraj'],
  ['11', 'Mu‘awwiz bin Afra RA', 'Ansar - Bani Khazraj'],
  ['12', 'Harith bin Suraqa RA', 'Ansar - Bani Khazraj'],
  ['13', 'Harith bin ‘Auf RA', 'Ansar - Bani Khazraj'],
  ['14', 'Dhakwan bin Abd Qais RA', 'Ansar'],
];

export function uhudMartyrsTable(columns: string[], caption: string): GuideBlock {
  return { type: 'table', caption, columns, rows: UHUD_ROWS };
}

export function badrMartyrsTable(columns: string[], caption: string): GuideBlock {
  return { type: 'table', caption, columns, rows: BADR_ROWS };
}
