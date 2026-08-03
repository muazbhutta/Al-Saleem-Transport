/**
 * Ziyarat places & indicative visiting timings for the home-page scroller.
 *
 * Locale-keyed with an English fallback (same pattern as the guide), so a new
 * language is added by dropping a block in here — no message-file changes and
 * nothing ever renders a missing-key error. Timings are indicative and should
 * be confirmed locally, especially during the Hajj season.
 */
export type TimingIcon = 'haram' | 'nabawi' | 'mosque' | 'mountain' | 'calendar' | 'cemetery';

export type TimingItem = {
  place: string;
  city: string;
  note: string;
  icon: TimingIcon;
};

export type TimingContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: TimingItem[];
};

const en: TimingContent = {
  eyebrow: 'Plan your visits',
  title: 'Ziyarat Places & Timings',
  subtitle:
    'Indicative visiting times for the blessed sites. Always confirm locally — timings can change, especially during the Hajj season.',
  items: [
    { place: 'Masjid al-Haram', city: 'Makkah', note: 'Open 24 hours, every day', icon: 'haram' },
    { place: 'Masjid an-Nabawi', city: 'Madinah', note: 'Open 24 hours · Rawdah by Nusuk permit', icon: 'nabawi' },
    { place: 'Masjid Quba', city: 'Madinah', note: 'Open daily · reward likened to an Umrah', icon: 'mosque' },
    { place: 'Jabal al-Noor (Cave of Hira)', city: 'Makkah', note: 'Best visited early morning', icon: 'mountain' },
    { place: 'Masjid Nimra', city: 'Arafat', note: 'Open only on 9 Dhul Hijjah', icon: 'calendar' },
    { place: 'Mount Uhud', city: 'Madinah', note: 'Daytime · martyrs of Uhud', icon: 'mountain' },
    { place: 'Masjid al-Qiblatain', city: 'Madinah', note: 'Open daily', icon: 'mosque' },
    { place: 'Jannat al-Baqi', city: 'Madinah', note: 'Men only · after Fajr & Asr', icon: 'cemetery' },
    { place: 'Jannat al-Mu‘alla', city: 'Makkah', note: 'Daytime visiting hours', icon: 'cemetery' },
    { place: 'Masjid Aishah (Tan‘eem)', city: 'Makkah', note: 'Open 24 hours · nearest Miqat', icon: 'mosque' },
  ],
};

const ar: TimingContent = {
  eyebrow: 'خطّط لزياراتك',
  title: 'أماكن الزيارات وأوقاتها',
  subtitle:
    'أوقات إرشادية لزيارة المواقع المباركة. تأكّد دائمًا محليًا — فقد تتغيّر الأوقات، خاصة في موسم الحج.',
  items: [
    { place: 'المسجد الحرام', city: 'مكة', note: 'مفتوح ٢٤ ساعة، كل يوم', icon: 'haram' },
    { place: 'المسجد النبوي', city: 'المدينة', note: 'مفتوح ٢٤ ساعة · الروضة بتصريح نسك', icon: 'nabawi' },
    { place: 'مسجد قباء', city: 'المدينة', note: 'مفتوح يوميًا · أجره كعمرة', icon: 'mosque' },
    { place: 'جبل النور (غار حراء)', city: 'مكة', note: 'يُفضّل زيارته صباحًا', icon: 'mountain' },
    { place: 'مسجد نمرة', city: 'عرفات', note: 'يُفتح فقط في ٩ ذي الحجة', icon: 'calendar' },
    { place: 'جبل أُحد', city: 'المدينة', note: 'نهارًا · شهداء أُحد', icon: 'mountain' },
    { place: 'مسجد القبلتين', city: 'المدينة', note: 'مفتوح يوميًا', icon: 'mosque' },
    { place: 'جنة البقيع', city: 'المدينة', note: 'للرجال · بعد الفجر والعصر', icon: 'cemetery' },
    { place: 'جنة المعلاة', city: 'مكة', note: 'ساعات الزيارة نهارًا', icon: 'cemetery' },
    { place: 'مسجد عائشة (التنعيم)', city: 'مكة', note: 'مفتوح ٢٤ ساعة · أقرب ميقات', icon: 'mosque' },
  ],
};

const ur: TimingContent = {
  eyebrow: 'اپنی زیارات کی منصوبہ بندی کریں',
  title: 'زیارت کے مقامات اور اوقات',
  subtitle:
    'مبارک مقامات کی زیارت کے تخمینی اوقات۔ ہمیشہ مقامی طور پر تصدیق کریں — خاص طور پر حج کے موسم میں اوقات بدل سکتے ہیں۔',
  items: [
    { place: 'مسجد الحرام', city: 'مکہ', note: '۲۴ گھنٹے کھلا، ہر دن', icon: 'haram' },
    { place: 'مسجد نبوی', city: 'مدینہ', note: '۲۴ گھنٹے کھلا · ریاض الجنہ نسک اجازت سے', icon: 'nabawi' },
    { place: 'مسجد قبا', city: 'مدینہ', note: 'روزانہ کھلا · ثواب عمرہ کے برابر', icon: 'mosque' },
    { place: 'جبل النور (غار حرا)', city: 'مکہ', note: 'صبح سویرے بہتر', icon: 'mountain' },
    { place: 'مسجد نمرہ', city: 'عرفات', note: 'صرف ۹ ذوالحجہ کو کھلتا ہے', icon: 'calendar' },
    { place: 'جبل احد', city: 'مدینہ', note: 'دن میں · شہدائے احد', icon: 'mountain' },
    { place: 'مسجد قبلتین', city: 'مدینہ', note: 'روزانہ کھلا', icon: 'mosque' },
    { place: 'جنت البقیع', city: 'مدینہ', note: 'مردوں کے لیے · فجر و عصر کے بعد', icon: 'cemetery' },
    { place: 'جنت المعلیٰ', city: 'مکہ', note: 'دن کے اوقاتِ زیارت', icon: 'cemetery' },
    { place: 'مسجد عائشہ (تنعیم)', city: 'مکہ', note: '۲۴ گھنٹے کھلا · قریب ترین میقات', icon: 'mosque' },
  ],
};

const timings: Partial<Record<string, TimingContent>> = { en, ar, ur };

export function getTimings(locale: string): TimingContent {
  return timings[locale] ?? en;
}
