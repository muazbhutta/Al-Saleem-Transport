import type { Guide } from './types';

/**
 * English Ziyarat guide — "Complete Guide to Sacred Places".
 *
 * Content transcribed from the client-provided source, with Qur'anic verses
 * kept verbatim in Arabic and every hadith/verse citation preserved. Please
 * keep a scholar review in the loop before major edits.
 */
const guide: Guide = {
  title: 'Complete Guide to Sacred Places',
  intro:
    'Makkah · Taif · Madinah · Badr — a companion for your journey through the sacred places, in the light of the Qur’an, authentic Hadith and reliable narrations.',
  chapters: [
    // ── CHAPTER 1 — MAKKAH ──────────────────────────────
    {
      id: 'makkah',
      title: 'Chapter 1 · Makkah Mukarramah — Introduction',
      intro:
        'Makkah Mukarramah is the holiest city in Islam. This is the place where the Ka’bah is located, which Allah Almighty has made the center of worship for all of humanity. Makkah is not merely a city, but rather a complete system of monotheism, peace, and guidance.',
      blocks: [
        { type: 'h3', id: 'kabah', text: '1.1 Ka’bah — The First House of Worship' },
        {
          type: 'verse',
          arabic:
            'إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ ۝ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا',
          translation:
            '“Indeed, the first House established for mankind was that at Bakkah (Makkah) — blessed and a guidance for the worlds. In it are clear signs: the standing place of Ibrahim. And whoever enters it shall be safe.”',
          reference: 'Surah Aal-e-Imran (3:96–97)',
        },
        {
          type: 'list',
          items: [
            'The Ka’bah is the first place of worship',
            '“Bakkah” is the ancient name of Makkah',
            'Makkah is a place of peace and safety',
            'The guidance is not only for Arabs, but for all of humanity',
          ],
        },
        { type: 'h3', id: 'greatness-city', text: '1.2 The Greatness of the City' },
        {
          type: 'verse',
          arabic: 'لَا أُقْسِمُ بِهَذَا الْبَلَدِ ۝ وَأَنتَ حِلٌّ بِهَذَا الْبَلَدِ',
          translation:
            '“I swear by this city (Makkah), and you (O Prophet ﷺ!) are free in this city.”',
          reference: 'Surah Al-Balad (90:1–2)',
        },
        { type: 'h3', id: 'prayer-ibrahim', text: '1.3 The Prayer of Ibrahim (AS) for Makkah' },
        {
          type: 'verse',
          arabic:
            'وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ اجْعَلْ هَذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ',
          translation:
            '“And recall when Ibrahim (AS) prayed: ‘O my Lord! Make this city secure, and provide its people with fruits.’”',
          reference: 'Surah Al-Baqarah (2:126)',
        },
        { type: 'h3', id: 'reward-haram', text: '1.4 The Reward of Prayer in Masjid-ul-Haram' },
        {
          type: 'hadith',
          arabic:
            'صَلَاةٌ فِي مَسْجِدِي هَذَا أَفْضَلُ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ، وَصَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ',
          text:
            '“A prayer in my mosque (Masjid-e-Nabawi ﷺ) is better than a thousand prayers in any other mosque, except Masjid-ul-Haram. And a prayer in Masjid-ul-Haram is better than one hundred thousand prayers in any other mosque.”',
          source: 'Sunan Ibn Majah, 1406',
        },
        { type: 'h3', id: 'love-prophet-makkah', text: '1.5 The Love of the Prophet ﷺ for Makkah' },
        {
          type: 'hadith',
          text:
            '“By Allah! You are the best land of Allah, and the most beloved of all lands to Allah. Had I not been forced to leave you, I would never have left.”',
          source: 'Jami‘ at-Tirmidhi, 3925 / Sunan Ibn Majah, 3108',
        },
      ],
    },

    // ── CHAPTER 2 — UMRAH ───────────────────────────────
    {
      id: 'umrah',
      title: 'Chapter 2 · Umrah',
      blocks: [
        { type: 'h3', id: 'what-is-umrah', text: '2.1 What is Umrah?' },
        {
          type: 'p',
          text:
            'Umrah is an act of worship performed at Masjid-ul-Haram (Makkah). Umrah is also referred to as the “minor Hajj” in terms of its purpose.',
        },
        { type: 'h3', id: 'benefits-umrah', text: '2.2 What are the Benefits of Umrah?' },
        {
          type: 'hadith',
          text:
            '“From one Umrah to the next is an expiation for the sins committed between them, and an accepted Hajj (Hajj-e-Mabroor) has no reward except Paradise.”',
          source: 'Sahih al-Bukhari, 1773 / Sahih Muslim, 1349a',
        },
        { type: 'h3', id: 'pillars-umrah', text: '2.4 The Pillars of Umrah' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Intention and garment at the Miqat' },
            { title: 'Tawaf', text: '7 circuits around the Ka’bah' },
            { title: 'Sa’i', text: '7 trips between Safa–Marwah' },
            { title: 'Halaq / Qasr', text: 'Shaving or cutting of hair' },
          ],
        },
        { type: 'h3', id: 'method-umrah', text: '2.5 The Correct Method of Umrah' },
        { type: 'h4', text: 'Ihram' },
        {
          type: 'list',
          items: [
            'Bathing at the Miqat (Sunnah)',
            'Men: 2 white unstitched sheets',
            'Women: modest clothing, face uncovered',
            'Intention from the heart',
          ],
        },
        { type: 'h4', text: 'Talbiyah' },
        {
          type: 'hadith',
          badge: 'Talbiyah',
          arabic:
            'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
          source: 'Sahih Muslim, 1184',
        },
        { type: 'h4', text: 'Tawaf' },
        {
          type: 'list',
          items: [
            '7 circuits around the Ka’bah (starting from the Black Stone)',
            'Men: first 3 circuits at a brisk pace (Ramal)',
            'Kiss the Black Stone (if possible) or gesture toward it',
            'From Rukn-e-Yamani to the Black Stone: Rabbana atina fid-dunya hasanatan…',
            '2 Rak‘at prayer (near Maqam-e-Ibrahim)',
          ],
        },
        { type: 'h4', text: 'Sa’i (Safa–Marwah)' },
        {
          type: 'verse',
          arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
          reference: 'Surah Al-Baqarah (2:158)',
        },
        {
          type: 'list',
          items: [
            'Start at Safa, end at Marwah — 7 trips',
            'Between the green lights: Men walk briskly, Women at normal pace',
          ],
        },
        { type: 'h3', id: 'supplications-umrah', text: '2.7 Important Supplications of Umrah' },
        {
          type: 'hadith',
          badge: 'Du‘a',
          arabic:
            'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
          text:
            '“O Allah! Grant us goodness in this world and goodness in the Hereafter, and protect us from the punishment of Hell.”',
          source: 'Sahih al-Bukhari, 6389',
        },
      ],
    },

    // ── CHAPTER 3 — HAJJ ────────────────────────────────
    {
      id: 'hajj',
      title: 'Chapter 3 · Hajj',
      blocks: [
        { type: 'h3', id: 'what-is-hajj', text: '3.1 What is Hajj?' },
        {
          type: 'verse',
          arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
          translation:
            '“And upon humanity is a duty to Allah to perform Hajj at this House — for whoever is able to find a way there.”',
          reference: 'Surah Aal-e-Imran (3:97)',
        },
        {
          type: 'list',
          items: [
            'Hajj is the 5th pillar of Islam',
            'It is obligatory only for those who are physically and financially capable',
            'It is obligatory only once in a lifetime',
          ],
        },
        { type: 'h3', id: 'pillars-hajj', text: '3.4 The Pillars of Hajj' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Intention and garment' },
            { title: 'Wuquf-e-Arafah', text: '9 Dhul Hijjah — Obligatory pillar' },
            { title: 'Tawaf-e-Ifadah', text: 'Obligatory Tawaf' },
            { title: 'Sa’i', text: 'Safa–Marwah' },
          ],
        },
        { type: 'h3', id: 'method-hajj', text: '3.5 The Correct Method of Hajj (Step by Step)' },
        {
          type: 'infocard',
          title: '8 Dhul Hijjah (Day of Tarwiyah) — Mina',
          blocks: [
            {
              type: 'list',
              items: ['Arrive in Mina, offer 5 prayers', 'Spend the night in Mina (Sunnah)'],
            },
          ],
        },
        {
          type: 'infocard',
          title: '9 Dhul Hijjah (Day of Arafah) — Wuquf-e-Arafah',
          blocks: [
            { type: 'note', variant: 'warning', text: 'Hajj is invalid without Arafah!' },
            {
              type: 'list',
              items: [
                'Staying in Arafah from Zuhr to Maghrib — this is the greatest pillar of Hajj',
                'Supplication, seeking forgiveness, glorification',
                'Then proceed to Muzdalifah — combine Maghrib and Isha prayers',
                'Spend the night in Muzdalifah (night of 9–10 Dhul Hijjah)',
                'Collect 70 pebbles',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '10 Dhul Hijjah (Day of Sacrifice) — 4 Acts',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Rami — Only Jamrat al-Aqabah (large pillar) — 7 stones',
                'Sacrifice',
                'Shaving or cutting of hair',
                'Tawaf-e-Ifadah + Sa’i',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '11–13 Dhul Hijjah (Days of Tashreeq) — Rami',
          blocks: [
            { type: 'p', text: 'Stoning all three Jamarat, each day:' },
            {
              type: 'table',
              columns: ['Jamrah', 'Size', 'Stones'],
              rows: [
                ['Jamrat al-Ula', 'Small', '7 stones'],
                ['Jamrat al-Wusta', 'Middle', '7 stones'],
                ['Jamrat al-Aqabah', 'Large', '7 stones'],
              ],
            },
            {
              type: 'note',
              text: 'Minimum required = 49 stones | Full Sunnah = 70 stones',
            },
          ],
        },
      ],
    },

    // ── CHAPTER 4 — HAJJ DETAILS ────────────────────────
    {
      id: 'hajj-details',
      title: 'Chapter 4 · Hajj Details and Sacred Sites',
      blocks: [
        { type: 'h3', id: 'masjid-nimra', text: '4.1 Masjid Nimra — Introduction' },
        {
          type: 'p',
          text:
            'Masjid Nimra is located near Makkah Mukarramah in the plain of Arafat. This is the place where the Prophet ﷺ delivered a historic sermon during the Farewell Hajj, which clearly outlined the fundamental teachings of Islam.',
        },
        {
          type: 'note',
          variant: 'warning',
          text:
            'Important: Masjid Nimra is only open on 9 Dhul Hijjah (Day of Arafah) — it remains closed throughout the year. Only on this day are the Adhan, sermon, and combined Zuhr + Asr prayers offered.',
        },
        { type: 'h3', id: 'jabal-rehmat', text: '4.2 Jabal-e-Rehmat — Introduction' },
        {
          type: 'p',
          text:
            'Jabal-e-Rehmat is a small hill located in the middle of Arafat, also known as the “Mount of Mercy.” This is the place where Prophet Adam (AS) and Hawwa (AS) first met after their descent to earth.',
        },
        { type: 'h3', id: 'muzdalifah', text: '4.3 Muzdalifah — Introduction' },
        {
          type: 'p',
          text:
            'Muzdalifah is the name of a valley located between Arafat and Mina. In the Quran, it is referred to as “Mash‘ar al-Haram.”',
        },
        {
          type: 'list',
          items: [
            'After Arafat, combine Maghrib and Isha prayers in Muzdalifah',
            'The night of 9–10 Dhul Hijjah (Night of Muzdalifah) — spend the night in worship',
            'Remaining until Fajr is obligatory',
            'Collect 70 pebbles for the stoning ritual',
          ],
        },
        { type: 'h3', id: 'wadi-muhassir', text: '4.4 Wadi-e-Muhassir — Introduction' },
        {
          type: 'p',
          text:
            'Wadi-e-Muhassir is a valley located between Muzdalifah and Mina — it is a reminder of the event of the People of the Elephant, where Allah sent punishment through flocks of birds (Ababeel). This is a place of great lesson and reflection.',
        },
        { type: 'h3', id: 'mina', text: '4.5 Mina — Introduction' },
        {
          type: 'p',
          text:
            'Mina is the sacred valley of Makkah where many important acts of Hajj are performed: the Stoning of the Jamarat, Sacrifice, Shaving/Cutting of hair, and the Days of Tashreeq.',
        },
        { type: 'h3', id: 'masjid-khaif', text: '4.6 Masjid al-Khaif (Mina)' },
        {
          type: 'p',
          text:
            'Masjid al-Khaif is one of the oldest and most sacred mosques in Mina. It is also called “Masjid of the Prophets” because 70 or 100 Prophets prayed here.',
        },
        { type: 'h3', id: 'jamarat', text: '4.8 Jamarat — Introduction' },
        {
          type: 'p',
          text:
            'The Jamarat are three locations in Mina where pilgrims throw stones at the pillars representing Satan — a commemoration of the practice of Prophet Ibrahim (AS).',
        },
        {
          type: 'table',
          columns: ['Jamrah', 'Description'],
          rows: [
            ['Jamrat al-Ula', 'The smallest pillar'],
            ['Jamrat al-Wusta', 'The middle pillar'],
            ['Jamrat al-Aqabah', 'The largest pillar'],
          ],
        },
        { type: 'h3', id: 'masjid-bayah', text: '4.9 Masjid al-Bay‘ah (Aqabah) — Introduction' },
        {
          type: 'p',
          text:
            'Masjid al-Bay‘ah is located near Mina, close to Jamrat al-Aqabah. This is the place where the Ansar of Madinah pledged two great oaths of allegiance to the Prophet ﷺ (in the 12th and 13th years of Prophethood).',
        },
      ],
    },

    // ── CHAPTER 5 — GRAVEYARDS & MOSQUES ────────────────
    {
      id: 'graves-mosques',
      title: 'Chapter 5 · Graveyards and Mosques — Sacred Sites',
      blocks: [
        {
          type: 'hadith',
          badge: 'Hadith — Visiting Graves',
          text: '“I had forbidden you from visiting graves, but now visit them.” — Prophet ﷺ',
          source: 'Sahih Muslim, 977',
        },
        { type: 'h3', id: 'jannat-mualla', text: '5.1 Jannat-ul-Mu‘alla' },
        {
          type: 'p',
          text:
            'Jannat-ul-Mu‘alla is the oldest and most sacred cemetery of Makkah Mukarramah. Buried here are: Hazrat Khadijah (RA), Abu Talib, Abdullah bin Zubair (RA), Umm-e-Hani (RA), and the great elders of the Quraysh.',
        },
        { type: 'h3', id: 'masjid-jinn', text: '5.2 Masjid al-Jinn' },
        {
          type: 'p',
          text:
            'Here a group of Jinn listened to the recitation of the Prophet ﷺ and embraced Islam, pledging to protect him — this mosque was built in memory of that event.',
        },
        { type: 'h3', id: 'masjid-shajar', text: '5.3 Masjid Shajar' },
        {
          type: 'p',
          text:
            'Here a tree recognized the Prophet ﷺ, bowed in greeting, and bore witness to his Prophethood — this mosque was built at the site of that miraculous event.',
        },
        { type: 'h3', id: 'masjid-fath', text: '5.4 Masjid al-Fath (Masjid al-Rayah)' },
        {
          type: 'p',
          text:
            'Located on Jabal al-Fath — the flag of Islam was raised here during the Conquest of Makkah.',
        },
        { type: 'h3', id: 'masjid-hijaba', text: '5.5 Masjid al-Hijaba' },
        {
          type: 'p',
          text:
            'This mosque takes its name from “Hijabah” — the responsibility of opening, closing, and guarding the Ka’bah. On the day of the Conquest of Makkah, the Prophet ﷺ said: “From today, the custodianship (key-keeping) of the Ka’bah will remain with you; it shall remain in your hands until the Day of Judgment.”',
        },
        { type: 'h3', id: 'masjid-mawlid', text: '5.6 Birthplace of the Prophet ﷺ — Masjid al-Mawlid' },
        {
          type: 'p',
          text:
            'The Prophet ﷺ was born in the house of Banu Hashim in Makkah Mukarramah. Birth: 12 Rabi‘ al-Awwal, Year of the Elephant — approximately 570 CE.',
        },
        { type: 'h3', id: 'qasr-saqf', text: '5.7 Qasr-e-Saqf (قَصْرُ السَّقِيفِ)' },
        {
          type: 'p',
          text:
            'An ancient historical site in Makkah Mukarramah — associated with the old houses of Banu Hashim. “Saqf” means roof or shelter.',
        },
        { type: 'h3', id: 'maqbarat-adl', text: '5.8 Maqbarat al-‘Adl' },
        {
          type: 'p',
          text:
            'A historic cemetery of Makkah where Islamic punishments were carried out. The area’s name is derived from “Al-‘Adl” (Justice).',
        },
        { type: 'h3', id: 'martyrs-cemetery-makkah', text: '5.9 Martyrs’ Cemetery' },
        {
          type: 'p',
          text:
            'Located near the Al-Ji‘ranah road in Makkah — martyrs from various battles are buried here.',
        },
        { type: 'h3', id: 'wad-ul-banat', text: '5.10 Wa’d ul-Banat — Burying Daughters Alive' },
        {
          type: 'verse',
          arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ۝ بِأَيِّ ذَنبٍ قُتِلَتْ',
          translation:
            '“And when the girl who was buried alive is asked: for what sin was she killed?”',
          reference: 'Surah At-Takwir (81:8–9)',
        },
        {
          type: 'p',
          text:
            'During the Age of Ignorance (Jahiliyyah), some Arab tribes would bury their daughters alive. After the coming of the Prophet ﷺ, this practice was declared forbidden (haraam), and daughters were called a blessing.',
        },
        { type: 'h3', id: 'masjid-taneem', text: '5.11 Masjid Tan‘eem (Masjid Aishah RA)' },
        {
          type: 'p',
          text:
            'The nearest Miqat to Makkah — Ihram for Umrah is donned here by those already residing within Makkah.',
        },
        { type: 'h3', id: 'masjid-jiranah', text: '5.12 Masjid al-Ji‘ranah' },
        {
          type: 'p',
          text:
            'An important Miqat of Makkah — the most well-known Miqat after Masjid Tan‘eem.',
        },
        { type: 'h3', id: 'masjid-hudaibiyah', text: '5.13 Masjid Sulh-e-Hudaibiyah' },
        {
          type: 'p',
          text:
            'The site of the Treaty of Hudaibiyah between the Prophet ﷺ and the Quraysh in 6 AH — this is also where the Bay‘at-ur-Ridwan (Pledge of Satisfaction) took place.',
        },
        {
          type: 'verse',
          arabic:
            'لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ',
          reference: 'Surah Al-Fath (48:18)',
        },
        { type: 'h3', id: 'jabal-noor', text: '5.14 Jabal-e-Noor + Cave of Hira' },
        {
          type: 'p',
          text:
            'Here the first revelation descended — Surah Al-‘Alaq (96:1–5). Islam began at this very place.',
        },
        { type: 'h3', id: 'jabal-thawr', text: '5.15 Jabal-e-Thawr + Cave of Thawr' },
        {
          type: 'p',
          text:
            'During the Migration (Hijra), the Prophet ﷺ and Abu Bakr Siddiq (RA) spent three nights here. Under Allah’s special protection — the miraculous events of the spider’s web and the dove’s eggs.',
        },
        {
          type: 'verse',
          arabic: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
          reference: 'Surah At-Tawbah (9:40)',
        },
        { type: 'h3', id: 'jabal-khandama', text: '5.16 Jabal-e-Khandama' },
        {
          type: 'p',
          text:
            'A historic mountain of Makkah — during the Conquest of Makkah, the Prophet ﷺ chose a path near it to enter the city.',
        },
        { type: 'h3', id: 'kiswah-museum', text: '5.17 Kiswah Museum' },
        {
          type: 'p',
          text:
            'A magnificent museum dedicated to the Kiswah (the black silk covering of the Ka’bah). Each year on 9 Dhul Hijjah, the old Kiswah is removed and a new one is draped — adorned with Quranic verses embroidered in gold and silver threads.',
        },
        { type: 'h3', id: 'zubaida-aqueduct', text: '5.18 Zubaida’s Aqueduct' },
        {
          type: 'p',
          text:
            'Sayyida Zubaida bint Ja‘far (wife of Abbasid Caliph Harun al-Rashid) personally funded the construction of a magnificent water channel from the mountains of Taif to Makkah — for the service of Hajj pilgrims. The largest public welfare project of her era.',
        },
      ],
    },

    // ── CHAPTER 6 — TAIF ────────────────────────────────
    {
      id: 'taif',
      title: 'Chapter 6 · Taif — Sacred Sites',
      blocks: [
        { type: 'h3', id: 'taif-intro', text: '6.1 Introduction to Taif' },
        {
          type: 'p',
          text:
            'Taif is a famous and historic city of Saudi Arabia — located east of Makkah in the Sarawat Mountains. In the tenth year of Prophethood, the Prophet ﷺ traveled to Taif. The people of Taif pelted him with stones — yet the Prophet ﷺ did not curse them, but instead prayed for mercy upon them.',
        },
        {
          type: 'callout',
          text:
            '“Taif is the city where stones were thrown, but prayers rose in response — and where pain was given, yet from it a new era of mercy began.”',
        },
        { type: 'h3', id: 'ibn-abbas', text: '6.2 Hazrat Abdullah bin Abbas RA — Introduction' },
        {
          type: 'p',
          text:
            'The cousin of the Prophet ﷺ — famously known in Islam as “Tarjuman-ul-Qur’an” (Interpreter of the Quran). He passed away in Taif in 68 AH and was buried there — a tomb and mosque were later built at the site.',
        },
        {
          type: 'hadith',
          badge: 'Prophetic Supplication',
          arabic: 'اللَّهُمَّ عَلِّمْهُ الْحِكْمَةَ وَتَأْوِيلَ الْكِتَابِ',
          text:
            '“O Allah! Grant him understanding of the religion and teach him the interpretation of the Quran.”',
          source: 'Sunan Ibn Majah, 166',
        },
        { type: 'h3', id: 'wadi-mathna', text: '6.3 Wadi-e-Mathna' },
        {
          type: 'p',
          text:
            'This is the valley where the Prophet ﷺ rested after the severe trial of Taif and offered this famous supplication to Allah:',
        },
        {
          type: 'hadith',
          badge: 'Du‘a of Taif',
          arabic:
            'اللَّهُمَّ إِلَيْكَ أَشْكُو ضَعْفَ قُوَّتِي وَقِلَّةَ حِيلَتِي وَهَوَانِي عَلَى النَّاسِ',
          text:
            '“O Allah! I complain to You alone of my weakness, my helplessness, and my lowliness before people.”',
          source: 'Al-Tabarani',
        },
        { type: 'h3', id: 'masjid-addas', text: '6.4 Masjid-e-Addas' },
        {
          type: 'p',
          text:
            'Where Addas RA (a servant) offered grapes to the Prophet ﷺ and, upon hearing “Bismillah,” embraced Islam — a delicate yet deeply impactful moment in the history of Islamic da‘wah.',
        },
        { type: 'h3', id: 'masjid-ali-taif', text: '6.5 Masjid-e-Ali RA (Taif)' },
        {
          type: 'p',
          text: 'Located near the Old City of Taif — attributed to Hazrat Ali bin Abi Talib RA.',
        },
        { type: 'h3', id: 'masjid-rasool-taif', text: '6.6 Masjid-e-Rasool ﷺ' },
        {
          type: 'p',
          text: 'Located near the Old City — a site associated with the Prophet’s ﷺ journey to Taif.',
        },
        { type: 'h3', id: 'masjid-wadi-rahmah', text: '6.7 Masjid Wadi-e-Rahmah' },
        {
          type: 'p',
          text:
            'Located in the famous Wadi-e-Rahmah of Taif — the place where Allah’s mercy brought solace to the Prophet ﷺ.',
        },
        { type: 'h3', id: 'qarn-manazil', text: '6.8 Masjid Qarn al-Manazil (Miqat of Najd)' },
        {
          type: 'p',
          text:
            'Located near Taif — the designated Miqat for the people of Najd (the boundary for donning Ihram for Hajj or Umrah).',
        },
        { type: 'h3', id: 'al-shafa', text: '6.9 Al-Shafa' },
        {
          type: 'p',
          text:
            'Al-Shafa is the highest and most famous highland area of Taif — part of the Sarawat Mountains. Renowned for its pleasant climate and natural beauty.',
        },
        { type: 'h3', id: 'souq-okaz', text: '6.10 Souq Okaz' },
        {
          type: 'p',
          text:
            'The ancient and famous marketplace of the Arab world — a center for trade, literature, poetry, and legal arbitration.',
        },
        { type: 'h3', id: 'bab-al-raye', text: '6.11 Bab Al-Raye (باب الريع)' },
        {
          type: 'p',
          text: 'The famous city gate of ancient Taif — once part of the Taif City Wall.',
        },
        { type: 'h3', id: 'taif-rose', text: '6.12 Taif Rose Gardens (ورد الطائف)' },
        {
          type: 'p',
          text:
            'Ward Taif (Taif Rose) — a world-famous variety of rose. Cultivated around Shafa and Hada — grown for centuries for its use in perfume and fragrance.',
        },
      ],
    },

    // ── CHAPTER 7 — MADINAH ─────────────────────────────
    {
      id: 'madinah',
      title: 'Chapter 7 · Madinah Munawwarah — Sacred Sites',
      blocks: [
        { type: 'h3', id: 'madinah-intro', text: '7.1 Madinah Munawwarah' },
        {
          type: 'p',
          text:
            'The second holiest city of Islam — here the Prophet ﷺ laid the foundation of Islamic society. Its old name was Yathrib; after the Migration it was called “Madinah an-Nabi ﷺ” (City of the Prophet).',
        },
        {
          type: 'hadith',
          arabic: 'اللَّهُمَّ حَبِّبْ إِلَيْنَا الْمَدِينَةَ كَحُبِّنَا مَكَّةَ أَوْ أَشَدَّ',
          text:
            '“O Allah! Grant us love for Madinah as You granted us love for Makkah, or even more.”',
          source: 'Sahih al-Bukhari, 1889',
        },
        { type: 'h3', id: 'riyaz-jannah', text: '7.2 Riyaz-ul-Jannah' },
        {
          type: 'hadith',
          text:
            '“Between my house (chamber) and my pulpit is one of the gardens of Paradise, and my pulpit will be at my Hauz (Pool).” — Prophet ﷺ',
          source: 'Sahih Muslim, 1391',
        },
        { type: 'h3', id: 'jannat-baqi', text: '7.3 Jannat-ul-Baqi' },
        {
          type: 'p',
          text:
            'The sacred cemetery right next to Masjid an-Nabawi — buried here are:',
        },
        {
          type: 'infocard',
          title: 'Mothers of the Believers RA (in Jannat-ul-Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hazrat Aisha RA',
                'Hazrat Hafsa RA',
                'Hazrat Umm-e-Salama RA',
                'Hazrat Zaynab bint Jahsh RA',
                'Hazrat Zaynab bint Khuzaima RA',
                'Hazrat Juwairiya RA',
                'Hazrat Safiyya RA',
                'Hazrat Umm-e-Habiba RA',
                'Hazrat Saudah RA',
              ],
            },
            {
              type: 'note',
              text:
                'Hazrat Khadijah RA — buried in Makkah (Jannat-ul-Mu‘alla) | Hazrat Maymunah RA — buried in Sarif (near Makkah)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Ahl-e-Bait RA (in Jannat-ul-Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hazrat Fatima RA (daughter of the Prophet ﷺ)',
                'Hazrat Hasan bin Ali RA',
                'Hazrat Abbas RA (uncle of the Prophet ﷺ)',
                'Hazrat Ali Zain-ul-Abidin (RA)',
                'Hazrat Muhammad al-Baqir (RA)',
                'Hazrat Jafar al-Sadiq (RA)',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Famous Companions RA (in Jannat-ul-Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hazrat Usman bin Affan RA (Third Caliph)',
                'Hazrat Sa‘d bin Abi Waqqas RA',
                'Hazrat Abdur-Rehman bin Awf RA',
                'Hazrat As‘ad bin Zurara RA (First Ansari)',
                'Hazrat Abdullah bin Mas‘ud RA',
              ],
            },
          ],
        },
        { type: 'h3', id: 'masjid-ghamamah', text: '7.4 Masjid al-Ghamāmah' },
        {
          type: 'p',
          text:
            'Located near Masjid an-Nabawi — the Prophet ﷺ offered Eid prayers and Istisqa (prayer for rain) here. Due to the gathering of clouds for rain, it was named “Ghamāmah” (meaning: cloud).',
        },
        { type: 'h3', id: 'masjid-abubakr', text: '7.5 Masjid Abu Bakr RA' },
        {
          type: 'p',
          text:
            'Located near Masjid al-Ghamāmah — after the Prophet ﷺ, Hazrat Abu Bakr RA led the Eid prayers here.',
        },
        { type: 'h3', id: 'masjid-bilal', text: '7.6 Masjid Bilal RA' },
        {
          type: 'p',
          text:
            'Associated with Hazrat Bilal bin Rabah RA, the first Mu’azzin (caller to prayer) of Islam — after the passing of the Prophet ﷺ, the act of giving the Adhan became deeply painful for him.',
        },
        { type: 'h3', id: 'masjid-ali-madinah', text: '7.7 Masjid Ali RA (Madinah)' },
        {
          type: 'p',
          text:
            'Associated with Hazrat Ali bin Abi Talib RA — the cousin of the Prophet ﷺ, his son-in-law, and the Fourth Rightly-Guided Caliph.',
        },
        { type: 'h3', id: 'masjid-jumah', text: '7.8 Masjid-e-Jum‘ah' },
        {
          type: 'p',
          text:
            'After the Migration, the Prophet ﷺ offered the first Friday (Jum‘ah) prayer here — on his way from Quba to Madinah.',
        },
        { type: 'h3', id: 'masjid-quba', text: '7.9 Masjid-e-Quba' },
        {
          type: 'p',
          text:
            'The first mosque of Islam — after the Migration, the Prophet ﷺ laid the foundation of this mosque first.',
        },
        {
          type: 'hadith',
          badge: 'Hadith — Virtue',
          text:
            '“Whoever performs ablution at home and then comes to Masjid-e-Quba and offers prayer there, shall receive the reward equivalent to Umrah.”',
          source: 'Sunan Ibn Majah, 1412',
        },
        { type: 'h3', id: 'ring-well', text: '7.10 Ring Well (Bir al-Khatam)' },
        {
          type: 'p',
          text:
            'Associated with the silver ring of the Prophet ﷺ (on which “Muhammad Rasool Allah” was inscribed). According to narrations, it fell into this well during the era of Hazrat Usman RA.',
        },
        { type: 'h3', id: 'bir-ruma', text: '7.11 Bir-e-Ruma' },
        {
          type: 'p',
          text:
            'Hazrat Usman bin Affan RA purchased this well and dedicated it as a charitable endowment (waqf) for the sake of Allah — the greatest act of ongoing charity (Sadaqa Jariyah) in Islamic history.',
        },
        { type: 'h3', id: 'bir-ghars', text: '7.12 Bir-e-Ghars' },
        {
          type: 'p',
          text:
            'The Prophet’s ﷺ favourite water source — he left a bequest that after his passing, his ritual bath (ghusl) should be performed using water from Bir-e-Ghars.',
        },
        { type: 'h3', id: 'bustan-mustaqbal', text: '7.13 Bustan al-Mustaqbal' },
        {
          type: 'p',
          text:
            'A modern public park of Madinah — family-friendly environment with children’s play areas and walking tracks. Not a religious site, but rather the city’s modern recreational park.',
        },
        { type: 'h3', id: 'masjid-qiblatain', text: '7.14 Masjid-e-Qiblatain' },
        {
          type: 'p',
          text:
            'The place where the Qibla (direction of prayer) was changed during the prayer itself — from Bait-ul-Maqdis to the Ka’bah. “Qiblatain” means: two Qiblas.',
        },
        {
          type: 'note',
          text:
            'Inside are two mihrabs — the old and the new Qibla. Approximately 5 km from Masjid an-Nabawi ﷺ.',
        },
        { type: 'h3', id: 'jabal-khandaq', text: '7.15 Jabal-e-Khandaq + The Seven Mosques' },
        {
          type: 'p',
          text:
            'The Battle of the Trench (Ahzab) — in 5 AH, an enemy force of over 10,000 faced 3,000 Muslims — on the advice of Salman al-Farsi RA, a trench was dug. Allah aided the Muslims through a windstorm and angels.',
        },
        {
          type: 'infocard',
          title: 'Masajid-e-Sab‘a (7 Mosques)',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Masjid al-Fath (the most well-known)',
                'Masjid Salman al-Farsi',
                'Masjid Abu Bakr',
                'Masjid Umar',
                'Masjid Ali',
                'Masjid Sa‘d bin Mu‘adh RA',
                'Masjid Sa‘d bin ‘Ubadah RA',
              ],
            },
          ],
        },
        { type: 'h3', id: 'jabal-uhud', text: '7.17 Jabal-e-Uhud / Battle of Uhud' },
        {
          type: 'hadith',
          text: '“Uhud is a mountain that loves us and we love it.” — Prophet ﷺ',
          source: 'Sahih Muslim, 1393',
        },
        {
          type: 'p',
          text:
            '3 AH — 3,000 troops under Abu Sufyan vs 700 Muslims. When the archers abandoned their positions, the enemy attacked from behind — the tide of the battle turned. The Prophet ﷺ was wounded but offered no curse, only prayed: “O Allah! Guide my people.”',
        },
        { type: 'h3', id: 'martyrs-uhud', text: '7.20 Cemetery of the Martyrs of Uhud' },
        {
          type: 'p',
          text: '70 Companions RA were martyred in the Battle of Uhud — they are buried here.',
        },
        {
          type: 'infocard',
          title: 'Master of the Martyrs — Hazrat Hamza bin Abdul-Muttalib RA',
          blocks: [
            {
              type: 'p',
              text:
                'The uncle of the Prophet ﷺ — the greatest martyr of this battle — the title “Sayyid-ush-Shuhada” (Master of the Martyrs) was bestowed upon him by the Prophet ﷺ.',
            },
          ],
        },
        {
          type: 'table',
          caption: 'Martyrs of Uhud',
          columns: ['#', 'Name', 'Group'],
          rows: [
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
            ['11', 'Sa‘d bin Rabi‘', 'Ansar — Bani Aws'],
            ['12', 'Anas bin Nadr', 'Ansar — Bani Aws'],
            ['13', 'Hanzala bin Abi ‘Aamir (Ghasil-ul-Malaika)', 'Ansar — Bani Aws'],
            ['14', 'Abdullah bin Amr bin Haram', 'Ansar — Bani Aws'],
            ['15', 'Harith bin Atik', 'Ansar — Bani Aws'],
            ['16', 'Rifa‘ah bin Waqsh', 'Ansar — Bani Aws'],
            ['17', 'Malik bin Sinan', 'Ansar — Bani Aws'],
            ['18', 'Ziyad bin Sakan', 'Ansar — Bani Aws'],
            ['19', 'Yazid bin Sakan', 'Ansar — Bani Aws'],
            ['20', 'Amr bin Mu‘adh', 'Ansar — Bani Aws'],
            ['21', 'Harith bin Suhaib', 'Ansar — Bani Aws'],
            ['22', 'Sahl bin Qais', 'Ansar — Bani Aws'],
            ['23', 'Thabit bin Waqsh', 'Ansar — Bani Aws'],
            ['24', 'Nu‘man bin Malik', 'Ansar — Bani Aws'],
            ['25', 'Qais bin Rabi‘', 'Ansar — Bani Aws'],
            ['26', 'Mas‘ud bin Aws', 'Ansar — Bani Aws'],
            ['27', 'Abdullah bin Sahl', 'Ansar — Bani Khazraj'],
            ['28', 'Ubaid bin Ta‘labah', 'Ansar — Bani Khazraj'],
            ['29', 'Abdullah bin Jabir', 'Ansar — Bani Khazraj'],
            ['30', 'Rafi‘ bin Malik', 'Ansar — Bani Khazraj'],
            ['31', 'Hubab bin Munzir', 'Ansar — Bani Khazraj'],
            ['32', 'Harith bin ‘Adi', 'Ansar — Bani Khazraj'],
            ['33', 'Abdullah bin Qais', 'Ansar — Bani Khazraj'],
            ['34', 'Amir bin Ziyad', 'Ansar — Bani Khazraj'],
            ['35', 'Habbab bin Qais', 'Ansar — Bani Khazraj'],
            ['36', 'Jabir bin Atiq', 'Ansar — Bani Khazraj'],
            ['37', 'Qais bin Malik', 'Ansar — Bani Khazraj'],
            ['38', 'Amr bin Zaid', 'Ansar — Bani Khazraj'],
            ['39', 'Salim bin Umair', 'Ansar — Bani Khazraj'],
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
          ],
        },
        {
          type: 'note',
          text:
            'There is no scholarly consensus on all 70 names — different narrations vary — but all of them are the great martyrs of Islam.',
        },
        { type: 'h3', id: 'cave-uhud', text: '7.18 Cave of Uhud + 7.19 Masjid al-Fasih' },
        {
          type: 'p',
          text:
            'After the Battle of Uhud, the Prophet ﷺ rested in the small cave (Ghar-e-Uhud) on Jabal-e-Uhud — while the Companions RA stood guard. Masjid al-Fasih is below this cave — built later — marking the spot where the Prophet ﷺ offered prayer.',
        },
        { type: 'h3', id: 'house-fatima', text: '7.21 House of Hazrat Fatima RA' },
        {
          type: 'p',
          text:
            'On the eastern side of Masjid-e-Nabawi ﷺ — now incorporated into the expansion of Masjid-e-Nabawi. A very small and simple home — here Imam Hasan RA and Imam Husayn RA were raised.',
        },
      ],
    },

    // ── CHAPTER 8 — BADR ────────────────────────────────
    {
      id: 'badr',
      title: 'Chapter 8 · Badr — Sacred Sites',
      blocks: [
        { type: 'h3', id: 'battle-badr', text: '8.1 The Battle of Badr' },
        {
          type: 'p',
          text:
            '17 Ramadan, 2 AH — Islam’s first and decisive battle. Approximately 130 km south-west of Madinah. Muslims: 313 (2 horses, 70 camels) vs Quraysh: 1,000.',
        },
        {
          type: 'callout',
          text:
            'The goal was the caravan, not battle — but the Quraysh imposed war. Allah sent 1,000 angels for aid — 70 disbelievers were killed, 70 taken captive, and 14 Muslims were martyred.',
        },
        { type: 'h3', id: 'masjid-areesh', text: '8.2 Masjid al-Areesh' },
        {
          type: 'p',
          text:
            'Located near the battlefield of Badr — where the Prophet ﷺ prayed with such intensity on the day of Badr that his cloak slipped from his shoulders — Hazrat Abu Bakr RA comforted him: “O Messenger of Allah ﷺ, Allah will fulfil His promise.”',
        },
        { type: 'h3', id: 'descent-angels', text: '8.3 Descent of Angels (Divine Aid)' },
        {
          type: 'verse',
          arabic:
            'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
          translation:
            '“When you were calling upon your Lord for help, He responded to you: I will reinforce you with a thousand angels, one following another.”',
          reference: 'Surah Al-Anfal (8:9)',
        },
        { type: 'h3', id: 'martyrs-badr', text: '8.4 Cemetery of the Martyrs of Badr' },
        {
          type: 'p',
          text: 'Located near the battlefield of Badr — 14 Companions RA are buried here.',
        },
        {
          type: 'table',
          caption: 'Martyrs of Badr',
          columns: ['#', 'Name', 'Group'],
          rows: [
            ['1', 'Umair bin Abi Waqqas RA', 'Muhajireen'],
            ['2', 'Safwan bin Al-Bayda RA', 'Muhajireen'],
            ['3', 'Rafi‘ bin Al-Mu‘alla RA', 'Ansar — Bani Khazraj'],
            ['4', 'Sa‘d bin Khaythama RA', 'Ansar — Bani Aws'],
            ['5', 'Mubashshir bin Abdul Munzir RA', 'Ansar — Bani Aws'],
            ['6', 'Harith bin ‘Ateek RA', 'Ansar — Bani Aws'],
            ['7', 'Mu‘az bin Afra RA', 'Ansar — Bani Aws'],
            ['8', 'Yazid bin Al-Harith RA', 'Ansar — Bani Khazraj'],
            ['9', 'Suhayl bin Al-Bayda RA', 'Ansar — Bani Khazraj'],
            ['10', '‘Auf bin Afra RA', 'Ansar — Bani Khazraj'],
            ['11', 'Mu‘awwiz bin Afra RA', 'Ansar — Bani Khazraj'],
            ['12', 'Harith bin Suraqa RA', 'Ansar — Bani Khazraj'],
            ['13', 'Harith bin ‘Auf RA', 'Ansar — Bani Khazraj'],
            ['14', 'Dhakwan bin Abd Qais RA', 'Ansar'],
          ],
        },
      ],
    },

    // ── APPENDIX — WIVES & CHILDREN ─────────────────────
    {
      id: 'family',
      title: 'Appendix · Wives and Children of the Prophet ﷺ',
      blocks: [
        {
          type: 'h3',
          id: 'wives',
          text: 'Wives of the Prophet ﷺ (Mothers of the Believers) — 11 Wives',
        },
        {
          type: 'note',
          text: 'At the time of the Prophet’s ﷺ passing, 9 wives were alive.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Hazrat Khadijah bint Khuwaylid RA',
              text:
                'Marriage: Prophet ﷺ age 25 | Khadijah RA age 40 | First and longest marriage (25 years) | The first person to embrace Islam',
            },
            {
              title: 'Hazrat Saudah bint Zam‘ah RA',
              text: 'Marriage: Prophet ﷺ age 50 | She was a widow with no support',
            },
            {
              title: 'Hazrat Aisha bint Abi Bakr RA',
              text: 'Betrothal: age 6 | Marriage consummated: age 9 | Prophet ﷺ age: approximately 53',
            },
            {
              title: 'Hazrat Hafsa bint Umar RA',
              text: 'Marriage: Prophet ﷺ age 54 | Widow of a martyr',
            },
            {
              title: 'Hazrat Zainab bint Khuzaymah RA',
              text:
                'Marriage: age 55 | Title: Umm-ul-Masakeen (Mother of the Poor) | Passed away: 8 months later',
            },
            {
              title: 'Hazrat Umm Salama RA',
              text: 'Marriage: age 56 | Widow with children',
            },
            {
              title: 'Hazrat Zainab bint Jahsh RA',
              text: 'Marriage: age 57 | Special note: commanded by Allah in the Quran (Surah Ahzab)',
            },
            {
              title: 'Hazrat Juwayriya bint Harith RA',
              text: 'Marriage: age 58 | Impact: Her entire tribe was freed',
            },
            {
              title: 'Hazrat Umm Habiba RA',
              text: 'Marriage: age 59 | Marriage ceremony took place in Abyssinia',
            },
            {
              title: 'Hazrat Safiyya bint Huyayy RA',
              text: 'Marriage: age 59 | Lineage: From a Jewish family',
            },
            {
              title: 'Hazrat Maymunah bint Harith RA',
              text: 'Marriage: age 60 | The last marriage',
            },
          ],
        },
        { type: 'h3', id: 'children', text: 'Children of the Prophet ﷺ — Total 7' },
        {
          type: 'table',
          columns: ['#', 'Name', 'Mother', 'Passing'],
          rows: [
            ['1', 'Hazrat Qasim RA', 'Hazrat Khadijah RA', 'Childhood (under 2 years)'],
            ['2', 'Hazrat Abdullah RA', 'Hazrat Khadijah RA', 'Childhood'],
            ['3', 'Hazrat Zainab RA', 'Hazrat Khadijah RA', 'At the age of 31'],
            ['4', 'Hazrat Ruqayyah RA', 'Hazrat Khadijah RA', 'At the age of 22'],
            ['5', 'Hazrat Umm Kulthum RA', 'Hazrat Khadijah RA', 'At the age of 29'],
            ['6', 'Hazrat Fatimah RA', 'Hazrat Khadijah RA', 'Age 29 — 6 months after the Prophet’s ﷺ passing'],
            ['7', 'Hazrat Ibrahim RA', 'Maria al-Qibtiyya RA', 'At 18 months of age'],
          ],
        },
        { type: 'h3', id: 'children-details', text: 'Children of the Wives (Details)' },
        {
          type: 'infocard',
          title: 'Hazrat Zainab RA',
          blocks: [
            {
              type: 'p',
              text: 'Husband: Abul Aas bin Rabi‘ | Children: Ali RA (died in childhood), Umamah RA',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Hazrat Ruqayyah RA',
          blocks: [
            {
              type: 'p',
              text: 'Husband: Hazrat Usman bin Affan RA | Child: Abdullah RA (died in childhood)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Hazrat Umm Kulthum RA',
          blocks: [{ type: 'p', text: 'Husband: Hazrat Usman RA | No children' }],
        },
        {
          type: 'infocard',
          title: 'Hazrat Fatimah RA',
          blocks: [
            {
              type: 'p',
              text:
                'Husband: Hazrat Ali bin Abi Talib RA | Children: Hasan RA, Husayn RA, Muhsin RA (deceased), Zainab RA, Umm Kulthum RA',
            },
          ],
        },
      ],
    },

    // ── CONCLUSION ──────────────────────────────────────
    {
      id: 'conclusion',
      title: 'Conclusion',
      blocks: [
        {
          type: 'p',
          text:
            'This guide was not written for any claim of show, but was prepared solely and entirely for the correct guidance of the Muslim Ummah.',
        },
        {
          type: 'p',
          text:
            'All the visits, events, and sacred sites mentioned herein have been presented in light of the Quran, authentic Hadith, and reliable narrations.',
        },
        {
          type: 'p',
          text:
            'Our effort has been that this journey be not merely a tour of places, but a journey of faith, reflection, and conviction — where at every step, the teachings of the Prophet ﷺ, the sacrifices of the Companions RA, and the spirit of Islam are felt.',
        },
        {
          type: 'callout',
          text: 'آمِيْن يَا رَبَّ الْعَالَمِيْن',
        },
      ],
    },
  ],
};

export default guide;
