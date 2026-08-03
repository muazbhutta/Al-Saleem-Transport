import type { Guide } from './types';
import { uhudMartyrsTable, badrMartyrsTable } from './shared';

/**
 * Panduan Ziarah bahasa Melayu - DRAF BERBANTUKAN MESIN, menunggu semakan
 * ulama. Ayat Al-Quran dan hadis berbahasa Arab dikekalkan tanpa perubahan;
 * hanya penjelasan/terjemahan dalam bahasa Melayu. Nama para syuhada
 * menggunakan jadual Latin kongsi (shared).
 */
const guide: Guide = {
  title: 'Panduan Lengkap Ziarah',
  intro:
    'Teman perjalanan anda ke tempat-tempat suci - lokasi mulia di Makkah dan Madinah, peringkat Umrah dan Haji, serta tapak bersejarah yang didambakan setiap penziarah. Bacalah sebelum berangkat dan simpanlah sepanjang perjalanan.',
  chapters: [
    // ── Bab 1 - Makkah ──
    {
      id: 'makkah',
      title: 'Bab 1 · Makkah Al-Mukarramah - Pengenalan',
      intro:
        'Makkah Al-Mukarramah ialah kota tersuci dalam Islam. Di sinilah Kaabah terletak, yang dijadikan Allah Taala sebagai pusat ibadah bagi seluruh umat manusia. Makkah bukan sekadar sebuah kota, malah merupakan satu sistem tauhid, keamanan, dan hidayah yang lengkap.',
      blocks: [
        { type: 'h3', id: 'kabah', text: '1.1 Kaabah - Rumah Ibadah Pertama' },
        {
          type: 'verse',
          arabic:
            'إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ ۝ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا',
          translation:
            'Sesungguhnya rumah pertama yang dibina untuk manusia ialah yang di Bakkah (Makkah), yang diberkati dan menjadi petunjuk bagi seluruh alam. Padanya terdapat tanda-tanda yang jelas: maqam Ibrahim. Dan sesiapa yang memasukinya, dia berada dalam keadaan aman.',
          reference: 'Surah Ali ‘Imran (3:96-97)',
        },
        {
          type: 'list',
          items: [
            'Kaabah ialah tempat ibadah pertama',
            '“Bakkah” ialah nama purba Makkah',
            'Makkah ialah tempat keamanan dan keselamatan',
            'Hidayah bukan hanya untuk bangsa Arab, tetapi untuk seluruh umat manusia',
          ],
        },
        { type: 'h3', id: 'greatness-city', text: '1.2 Keagungan Kota Ini' },
        {
          type: 'verse',
          arabic: 'لَا أُقْسِمُ بِهَذَا الْبَلَدِ ۝ وَأَنتَ حِلٌّ بِهَذَا الْبَلَدِ',
          translation:
            'Aku bersumpah dengan negeri ini (Makkah), dan engkau (wahai Nabi ﷺ) menetap di negeri ini.',
          reference: 'Surah Al-Balad (90:1-2)',
        },
        { type: 'h3', id: 'prayer-ibrahim', text: '1.3 Doa Ibrahim AS untuk Makkah' },
        {
          type: 'verse',
          arabic:
            'وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ اجْعَلْ هَذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ',
          translation:
            'Dan ketika Ibrahim AS berdoa: Wahai Tuhanku, jadikanlah negeri ini negeri yang aman, dan kurniakanlah rezeki kepada penduduknya berupa buah-buahan.',
          reference: 'Surah Al-Baqarah (2:126)',
        },
        { type: 'h3', id: 'reward-haram', text: '1.4 Ganjaran Solat di Masjidil Haram' },
        {
          type: 'hadith',
          arabic:
            'صَلَاةٌ فِي مَسْجِدِي هَذَا أَفْضَلُ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ، وَصَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ',
          text:
            'Satu solat di masjidku ini (Masjid Nabawi ﷺ) lebih utama daripada seribu solat di masjid lain, kecuali Masjidil Haram. Dan satu solat di Masjidil Haram lebih utama daripada seratus ribu solat di masjid lain.',
          source: 'Sunan Ibnu Majah, 1406',
        },
        { type: 'h3', id: 'love-prophet-makkah', text: '1.5 Kecintaan Nabi ﷺ terhadap Makkah' },
        {
          type: 'hadith',
          text:
            'Demi Allah! Engkau ialah bumi Allah yang terbaik dan yang paling dicintai Allah antara seluruh bumi. Sekiranya aku tidak dipaksa keluar daripadamu, nescaya aku tidak akan pernah meninggalkanmu.',
          source: 'Jami‘ at-Tirmizi, 3925 / Sunan Ibnu Majah, 3108',
        },
      ],
    },

    // ── Bab 2 - Umrah ──
    {
      id: 'umrah',
      title: 'Bab 2 · Umrah',
      blocks: [
        { type: 'h3', id: 'what-is-umrah', text: '2.1 Apakah Umrah?' },
        {
          type: 'p',
          text:
            'Umrah ialah ibadah yang dilaksanakan di Masjidil Haram (Makkah). Kerana tujuannya, Umrah turut disebut “haji kecil”.',
        },
        { type: 'h3', id: 'benefits-umrah', text: '2.2 Apakah Kelebihan Umrah?' },
        {
          type: 'hadith',
          text:
            'Dari satu Umrah ke Umrah berikutnya menjadi penghapus dosa antara keduanya, dan haji yang mabrur tiada balasan baginya selain syurga.',
          source: 'Sahih Bukhari, 1773 / Sahih Muslim, 1349a',
        },
        { type: 'h3', id: 'pillars-umrah', text: '2.4 Rukun-rukun Umrah' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Niat dan pakaian ihram di Miqat' },
            { title: 'Tawaf', text: '7 pusingan mengelilingi Kaabah' },
            { title: 'Saie', text: '7 kali perjalanan antara Safa-Marwah' },
            { title: 'Tahalul (Halaq/Qasar)', text: 'Mencukur atau memendekkan rambut' },
          ],
        },
        { type: 'h3', id: 'method-umrah', text: '2.5 Cara Umrah yang Betul' },
        { type: 'h4', text: 'Ihram' },
        {
          type: 'list',
          items: [
            'Mandi di Miqat (sunat)',
            'Lelaki: dua helai kain putih tidak berjahit',
            'Wanita: pakaian sopan, wajah terbuka',
            'Niat dari dalam hati',
          ],
        },
        { type: 'h4', text: 'Talbiah' },
        {
          type: 'hadith',
          badge: 'Talbiah',
          arabic:
            'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
          source: 'Sahih Muslim, 1184',
        },
        { type: 'h4', text: 'Tawaf' },
        {
          type: 'list',
          items: [
            '7 pusingan mengelilingi Kaabah (bermula dari Hajar Aswad)',
            'Lelaki: berjalan pantas pada 3 pusingan pertama (Ramal)',
            'Mencium Hajar Aswad (jika mampu) atau memberi isyarat kepadanya',
            'Dari Rukun Yamani ke Hajar Aswad: Rabbana atina fid-dunya hasanatan…',
            'Solat 2 rakaat (berhampiran Maqam Ibrahim)',
          ],
        },
        { type: 'h4', text: 'Saie (Safa-Marwah)' },
        {
          type: 'verse',
          arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
          translation: 'Sesungguhnya Safa dan Marwah adalah sebahagian daripada syiar-syiar Allah.',
          reference: 'Surah Al-Baqarah (2:158)',
        },
        {
          type: 'list',
          items: [
            'Bermula di Safa, berakhir di Marwah - 7 kali perjalanan',
            'Antara lampu hijau: lelaki berjalan pantas, wanita dengan langkah biasa',
          ],
        },
        { type: 'h3', id: 'supplications-umrah', text: '2.7 Doa-doa Penting Umrah' },
        {
          type: 'hadith',
          badge: 'Doa',
          arabic:
            'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
          text:
            'Ya Allah! Kurniakanlah kami kebaikan di dunia dan kebaikan di akhirat, dan peliharalah kami daripada azab neraka.',
          source: 'Sahih Bukhari, 6389',
        },
      ],
    },

    // ── Bab 3 - Haji ──
    {
      id: 'hajj',
      title: 'Bab 3 · Haji',
      blocks: [
        { type: 'h3', id: 'what-is-hajj', text: '3.1 Apakah Haji?' },
        {
          type: 'verse',
          arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
          translation:
            'Dan kewajipan manusia terhadap Allah ialah mengerjakan haji ke Baitullah, iaitu bagi sesiapa yang mampu mengadakan perjalanan ke sana.',
          reference: 'Surah Ali ‘Imran (3:97)',
        },
        {
          type: 'list',
          items: [
            'Haji ialah rukun Islam yang kelima',
            'Hanya wajib bagi mereka yang mampu dari segi fizikal dan kewangan',
            'Wajib hanya sekali seumur hidup',
          ],
        },
        { type: 'h3', id: 'pillars-hajj', text: '3.4 Rukun-rukun Haji' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Niat dan pakaian ihram' },
            { title: 'Wukuf di Arafah', text: '9 Zulhijjah - Rukun wajib' },
            { title: 'Tawaf Ifadah', text: 'Tawaf wajib' },
            { title: 'Saie', text: 'Safa-Marwah' },
          ],
        },
        { type: 'h3', id: 'method-hajj', text: '3.5 Cara Haji yang Betul (Langkah demi Langkah)' },
        {
          type: 'infocard',
          title: '8 Zulhijjah (Hari Tarwiah) - Mina',
          blocks: [
            {
              type: 'list',
              items: ['Tiba di Mina, laksanakan 5 solat', 'Bermalam di Mina (sunat)'],
            },
          ],
        },
        {
          type: 'infocard',
          title: '9 Zulhijjah (Hari Arafah) - Wukuf di Arafah',
          blocks: [
            { type: 'note', variant: 'warning', text: 'Haji tidak sah tanpa Arafah!' },
            {
              type: 'list',
              items: [
                'Wukuf di Arafah dari Zohor hingga Maghrib - inilah rukun haji yang paling agung',
                'Berdoa, memohon keampunan, bertasbih',
                'Kemudian menuju Muzdalifah - jamak solat Maghrib dan Isyak',
                'Bermalam di Muzdalifah (malam 9-10 Zulhijjah)',
                'Mengutip 70 biji batu kerikil',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '10 Zulhijjah (Hari Nahar/Korban) - 4 Amalan',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Melontar - hanya Jamrah Aqabah (tiang besar) - 7 biji batu',
                'Menyembelih korban',
                'Mencukur atau memendekkan rambut',
                'Tawaf Ifadah + Saie',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '11-13 Zulhijjah (Hari Tasyrik) - Melontar Jamrah',
          blocks: [
            { type: 'p', text: 'Melontar ketiga-tiga jamrah setiap hari:' },
            {
              type: 'table',
              columns: ['Jamrah', 'Saiz', 'Batu'],
              rows: [
                ['Jamrah Ula', 'Kecil', '7 biji batu'],
                ['Jamrah Wusta', 'Tengah', '7 biji batu'],
                ['Jamrah Aqabah', 'Besar', '7 biji batu'],
              ],
            },
            { type: 'note', text: 'Minimum wajib = 49 biji batu | Sunat penuh = 70 biji batu' },
          ],
        },
      ],
    },

    // ── Bab 4 - Perincian Haji ──
    {
      id: 'hajj-details',
      title: 'Bab 4 · Perincian Haji dan Tapak-tapak Suci',
      blocks: [
        { type: 'h3', id: 'masjid-nimra', text: '4.1 Masjid Namirah - Pengenalan' },
        {
          type: 'p',
          text:
            'Masjid Namirah terletak berhampiran Makkah Al-Mukarramah di padang Arafah. Di sinilah Nabi ﷺ menyampaikan khutbah bersejarah pada Haji Wida‘, yang menegaskan ajaran-ajaran asas Islam dengan jelas.',
        },
        {
          type: 'note',
          variant: 'warning',
          text:
            'Penting: Masjid Namirah hanya dibuka pada 9 Zulhijjah (Hari Arafah) - tertutup sepanjang tahun. Hanya pada hari ini azan, khutbah, serta solat jamak Zohor + Asar dilaksanakan.',
        },
        { type: 'h3', id: 'jabal-rehmat', text: '4.2 Jabal Rahmah - Pengenalan' },
        {
          type: 'p',
          text:
            'Jabal Rahmah ialah sebuah bukit kecil yang terletak di tengah Arafah, dikenali juga sebagai “Bukit Rahmat”. Di sinilah Nabi Adam AS dan Hawa (alaihas salam) buat pertama kali bertemu selepas turun ke bumi.',
        },
        { type: 'h3', id: 'muzdalifah', text: '4.3 Muzdalifah - Pengenalan' },
        {
          type: 'p',
          text:
            'Muzdalifah ialah nama sebuah lembah yang terletak antara Arafah dan Mina. Dalam Al-Quran ia disebut “Masy‘aril Haram”.',
        },
        {
          type: 'list',
          items: [
            'Selepas Arafah, jamak solat Maghrib dan Isyak di Muzdalifah',
            'Malam 9-10 Zulhijjah (malam Muzdalifah) - bermalam dengan ibadah',
            'Menetap hingga Fajar adalah wajib',
            'Mengutip 70 biji batu kerikil untuk melontar jamrah',
          ],
        },
        { type: 'h3', id: 'wadi-muhassir', text: '4.4 Wadi Muhassir - Pengenalan' },
        {
          type: 'p',
          text:
            'Wadi Muhassir ialah lembah yang terletak antara Muzdalifah dan Mina - mengingatkan peristiwa Tentera Bergajah, ketika Allah menurunkan azab melalui burung-burung Ababil. Ini merupakan tempat pengajaran dan renungan.',
        },
        { type: 'h3', id: 'mina', text: '4.5 Mina - Pengenalan' },
        {
          type: 'p',
          text:
            'Mina ialah lembah suci Makkah tempat banyak amalan penting haji dilaksanakan: melontar jamrah, menyembelih korban, bercukur/memendekkan rambut, dan Hari Tasyrik.',
        },
        { type: 'h3', id: 'masjid-khaif', text: '4.6 Masjid Al-Khaif (Mina)' },
        {
          type: 'p',
          text:
            'Masjid Al-Khaif ialah salah satu masjid tertua dan tersuci di Mina. Ia turut dikenali sebagai “Masjid Para Nabi” kerana 70 atau 100 nabi pernah bersolat di sini.',
        },
        { type: 'h3', id: 'jamarat', text: '4.8 Jamarat - Pengenalan' },
        {
          type: 'p',
          text:
            'Jamarat ialah tiga lokasi di Mina tempat para jemaah melontar batu ke tiang-tiang yang melambangkan syaitan - sebagai peringatan atas amalan Nabi Ibrahim AS.',
        },
        {
          type: 'table',
          columns: ['Jamrah', 'Keterangan'],
          rows: [
            ['Jamrah Ula', 'Tiang terkecil'],
            ['Jamrah Wusta', 'Tiang tengah'],
            ['Jamrah Aqabah', 'Tiang terbesar'],
          ],
        },
        { type: 'h3', id: 'masjid-bayah', text: '4.9 Masjid Al-Bai‘ah (Aqabah) - Pengenalan' },
        {
          type: 'p',
          text:
            'Masjid Al-Bai‘ah terletak berhampiran Mina, berdekatan Jamrah Aqabah. Di sinilah kaum Ansar Madinah membaiah Nabi ﷺ dalam dua baiah besar (pada tahun ke-12 dan ke-13 kenabian).',
        },
      ],
    },

    // ── Bab 5 - Perkuburan dan Masjid ──
    {
      id: 'graves-mosques',
      title: 'Bab 5 · Perkuburan dan Masjid - Tapak-tapak Suci',
      blocks: [
        {
          type: 'hadith',
          badge: 'Hadis - Ziarah Kubur',
          text: 'Dahulu aku melarang kamu menziarahi kubur, maka sekarang ziarahilah ia. - Nabi ﷺ',
          source: 'Sahih Muslim, 977',
        },
        { type: 'h3', id: 'jannat-mualla', text: '5.1 Jannatul Mualla' },
        {
          type: 'p',
          text:
            'Jannatul Mualla ialah perkuburan tertua dan tersuci di Makkah Al-Mukarramah. Di sini disemadikan: Sayyidah Khadijah RA, Abu Talib, Abdullah bin Zubair RA, Ummu Hani RA, dan para pembesar Quraisy.',
        },
        { type: 'h3', id: 'masjid-jinn', text: '5.2 Masjid Jin' },
        {
          type: 'p',
          text:
            'Di sini sekumpulan jin mendengar bacaan Nabi ﷺ lalu memeluk Islam dan berjanji melindunginya - masjid ini dibina untuk mengenang peristiwa tersebut.',
        },
        { type: 'h3', id: 'masjid-shajar', text: '5.3 Masjid Syajar' },
        {
          type: 'p',
          text:
            'Di sini sebatang pokok mengenali Nabi ﷺ, tunduk memberi salam, dan menjadi saksi atas kenabiannya - masjid ini dibina di tapak peristiwa mukjizat tersebut.',
        },
        { type: 'h3', id: 'masjid-fath', text: '5.4 Masjid Al-Fath (Masjid Ar-Rayah)' },
        {
          type: 'p',
          text: 'Terletak di Jabal Al-Fath - bendera Islam dinaikkan di sini pada Pembukaan Kota Makkah.',
        },
        { type: 'h3', id: 'masjid-hijaba', text: '5.5 Masjid Al-Hijabah' },
        {
          type: 'p',
          text:
            'Masjid ini dinamakan daripada “Hijabah” - iaitu tanggungjawab membuka, menutup, dan menjaga Kaabah. Pada hari Pembukaan Kota Makkah, Nabi ﷺ bersabda: “Mulai hari ini, tugas penjaga kunci Kaabah kekal pada kalian; ia akan kekal di tangan kalian hingga Hari Kiamat.”',
        },
        { type: 'h3', id: 'masjid-mawlid', text: '5.6 Tempat Kelahiran Nabi ﷺ - Masjid Al-Mawlid' },
        {
          type: 'p',
          text:
            'Nabi ﷺ dilahirkan di rumah Bani Hasyim di Makkah Al-Mukarramah. Kelahiran: 12 Rabiulawal, Tahun Gajah - kira-kira 570 Masihi.',
        },
        { type: 'h3', id: 'qasr-saqf', text: '5.7 Qasr As-Saqif (قَصْرُ السَّقِيفِ)' },
        {
          type: 'p',
          text:
            'Tapak bersejarah purba di Makkah Al-Mukarramah - dikaitkan dengan rumah-rumah lama Bani Hasyim. “Saqf” bermaksud bumbung atau perlindungan.',
        },
        { type: 'h3', id: 'maqbarat-adl', text: '5.8 Maqbarat Al-‘Adl' },
        {
          type: 'p',
          text:
            'Perkuburan bersejarah di Makkah tempat hukuman-hukuman Islam pernah dilaksanakan. Nama kawasan ini berasal daripada “Al-‘Adl” (keadilan).',
        },
        { type: 'h3', id: 'martyrs-cemetery-makkah', text: '5.9 Perkuburan Para Syuhada' },
        {
          type: 'p',
          text: 'Terletak berhampiran jalan Al-Ji‘ranah di Makkah - para syuhada daripada pelbagai peperangan disemadikan di sini.',
        },
        { type: 'h3', id: 'wad-ul-banat', text: '5.10 Wa’dul Banat - Menanam Anak Perempuan Hidup-hidup' },
        {
          type: 'verse',
          arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ۝ بِأَيِّ ذَنبٍ قُتِلَتْ',
          translation: 'Dan apabila bayi perempuan yang ditanam hidup-hidup ditanya: atas dosa apakah ia dibunuh?',
          reference: 'Surah At-Takwir (81:8-9)',
        },
        {
          type: 'p',
          text:
            'Pada zaman Jahiliah, sebahagian kabilah Arab menanam anak-anak perempuan mereka hidup-hidup. Selepas kedatangan Nabi ﷺ, amalan ini diharamkan, dan anak perempuan disebut sebagai rahmat.',
        },
        { type: 'h3', id: 'masjid-taneem', text: '5.11 Masjid Tanaim (Masjid Aisyah RA)' },
        {
          type: 'p',
          text:
            'Miqat terdekat dari Makkah - mereka yang menetap di dalam Makkah berihram untuk Umrah dari sini.',
        },
        { type: 'h3', id: 'masjid-jiranah', text: '5.12 Masjid Al-Ji‘ranah' },
        {
          type: 'p',
          text: 'Miqat penting di Makkah - miqat yang paling terkenal selepas Masjid Tanaim.',
        },
        { type: 'h3', id: 'masjid-hudaibiyah', text: '5.13 Masjid Sulh Hudaibiyah' },
        {
          type: 'p',
          text:
            'Tapak Perjanjian Hudaibiyah antara Nabi ﷺ dan Quraisy pada 6 H - di sinilah juga berlangsungnya Baiah Ridwan.',
        },
        {
          type: 'verse',
          arabic:
            'لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ',
          translation: 'Sesungguhnya Allah telah reda terhadap orang-orang mukmin ketika mereka berbaiah kepadamu di bawah pohon.',
          reference: 'Surah Al-Fath (48:18)',
        },
        { type: 'h3', id: 'jabal-noor', text: '5.14 Jabal Nur + Gua Hira' },
        {
          type: 'p',
          text: 'Di sini wahyu pertama turun - Surah Al-‘Alaq (96:1-5). Islam bermula di tempat inilah.',
        },
        { type: 'h3', id: 'jabal-thawr', text: '5.15 Jabal Thaur + Gua Thaur' },
        {
          type: 'p',
          text:
            'Pada peristiwa Hijrah, Nabi ﷺ dan Abu Bakar As-Siddiq RA bermalam tiga malam di sini. Dalam perlindungan khusus Allah - peristiwa mukjizat sarang labah-labah dan telur burung merpati.',
        },
        {
          type: 'verse',
          arabic: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
          translation: 'Ketika dia berkata kepada sahabatnya: Jangan bersedih, sesungguhnya Allah bersama kita.',
          reference: 'Surah At-Taubah (9:40)',
        },
        { type: 'h3', id: 'jabal-khandama', text: '5.16 Jabal Khandamah' },
        {
          type: 'p',
          text:
            'Sebuah gunung bersejarah di Makkah - pada Pembukaan Kota Makkah, Nabi ﷺ memilih laluan berhampirannya untuk memasuki kota.',
        },
        { type: 'h3', id: 'kiswah-museum', text: '5.17 Muzium Kiswah' },
        {
          type: 'p',
          text:
            'Muzium megah yang didedikasikan untuk Kiswah (kain sutera hitam penutup Kaabah). Setiap tahun pada 9 Zulhijjah, Kiswah lama ditanggalkan dan yang baharu disarungkan - dihiasi ayat-ayat Al-Quran yang disulam dengan benang emas dan perak.',
        },
        { type: 'h3', id: 'zubaida-aqueduct', text: '5.18 Terusan Air Zubaidah' },
        {
          type: 'p',
          text:
            'Sayyidah Zubaidah binti Ja‘far (isteri Khalifah Abbasiyah Harun Ar-Rasyid) secara peribadi membiayai pembinaan sebuah terusan air megah dari pergunungan Taif ke Makkah - untuk khidmat para jemaah haji. Projek kebajikan awam terbesar pada zamannya.',
        },
      ],
    },

    // ── Bab 6 - Taif ──
    {
      id: 'taif',
      title: 'Bab 6 · Taif - Tapak-tapak Suci',
      blocks: [
        { type: 'h3', id: 'taif-intro', text: '6.1 Pengenalan tentang Taif' },
        {
          type: 'p',
          text:
            'Taif ialah sebuah kota terkenal dan bersejarah di Arab Saudi - terletak di sebelah timur Makkah di Pergunungan Sarawat. Pada tahun kesepuluh kenabian, Nabi ﷺ mengadakan perjalanan ke Taif. Penduduk Taif membaling batu ke arah baginda - namun Nabi ﷺ tidak melaknat mereka, sebaliknya mendoakan rahmat untuk mereka.',
        },
        {
          type: 'callout',
          text:
            '“Taif ialah kota tempat batu-batu dibaling, namun sebagai balasannya doa-doa pula dipanjatkan - tempat kesakitan diberikan, namun daripadanya bermula suatu era rahmat yang baharu.”',
        },
        { type: 'h3', id: 'ibn-abbas', text: '6.2 Sayyidina Abdullah bin Abbas RA - Pengenalan' },
        {
          type: 'p',
          text:
            'Sepupu Nabi ﷺ - dikenali dalam Islam sebagai “Turjumanul Quran” (Pentafsir Al-Quran). Beliau wafat di Taif pada 68 H dan disemadikan di sana - kemudian dibina makam dan masjid di tapak itu.',
        },
        {
          type: 'hadith',
          badge: 'Doa Nabi',
          arabic: 'اللَّهُمَّ عَلِّمْهُ الْحِكْمَةَ وَتَأْوِيلَ الْكِتَابِ',
          text: 'Ya Allah! Kurniakanlah dia kefahaman agama dan ajarkanlah dia takwil (tafsiran) Al-Quran.',
          source: 'Sunan Ibnu Majah, 166',
        },
        { type: 'h3', id: 'wadi-mathna', text: '6.3 Wadi Mathna' },
        {
          type: 'p',
          text:
            'Inilah lembah tempat Nabi ﷺ berehat selepas ujian berat di Taif dan memanjatkan doa masyhur ini kepada Allah:',
        },
        {
          type: 'hadith',
          badge: 'Doa Taif',
          arabic:
            'اللَّهُمَّ إِلَيْكَ أَشْكُو ضَعْفَ قُوَّتِي وَقِلَّةَ حِيلَتِي وَهَوَانِي عَلَى النَّاسِ',
          text: 'Ya Allah! Hanya kepada-Mu aku mengadu kelemahan kekuatanku, kekurangan dayaku, dan kehinaanku di hadapan manusia.',
          source: 'Ath-Thabrani',
        },
        { type: 'h3', id: 'masjid-addas', text: '6.4 Masjid Addas' },
        {
          type: 'p',
          text:
            'Di sini Addas RA (seorang khadam) menghidangkan anggur kepada Nabi ﷺ dan, setelah mendengar “Bismillah”, dia memeluk Islam - saat yang halus namun sangat mendalam kesannya dalam sejarah dakwah Islam.',
        },
        { type: 'h3', id: 'masjid-ali-taif', text: '6.5 Masjid Ali RA (Taif)' },
        {
          type: 'p',
          text: 'Terletak berhampiran Kota Lama Taif - dikaitkan dengan Sayyidina Ali bin Abi Talib RA.',
        },
        { type: 'h3', id: 'masjid-rasool-taif', text: '6.6 Masjid Rasul ﷺ' },
        {
          type: 'p',
          text: 'Terletak berhampiran Kota Lama - tapak yang berkaitan dengan perjalanan Nabi ﷺ ke Taif.',
        },
        { type: 'h3', id: 'masjid-wadi-rahmah', text: '6.7 Masjid Wadi Rahmah' },
        {
          type: 'p',
          text:
            'Terletak di Wadi Rahmah yang masyhur di Taif - tempat rahmat Allah membawa ketenangan kepada Nabi ﷺ.',
        },
        { type: 'h3', id: 'qarn-manazil', text: '6.8 Masjid Qarnul Manazil (Miqat Najd)' },
        {
          type: 'p',
          text:
            'Terletak berhampiran Taif - miqat yang ditetapkan bagi penduduk Najd (had untuk berihram haji atau umrah).',
        },
        { type: 'h3', id: 'al-shafa', text: '6.9 Al-Syafa' },
        {
          type: 'p',
          text:
            'Al-Syafa ialah kawasan tanah tinggi tertinggi dan termasyhur di Taif - sebahagian daripada Pergunungan Sarawat. Terkenal dengan iklimnya yang nyaman dan keindahan alam semula jadinya.',
        },
        { type: 'h3', id: 'souq-okaz', text: '6.10 Pasar Ukaz' },
        {
          type: 'p',
          text:
            'Pasar purba dan masyhur di dunia Arab - pusat perdagangan, kesusasteraan, puisi, dan timbang tara undang-undang.',
        },
        { type: 'h3', id: 'bab-al-raye', text: '6.11 Bab Al-Rai‘ (باب الريع)' },
        {
          type: 'p',
          text: 'Pintu gerbang kota masyhur di Taif purba - dahulu merupakan sebahagian daripada Tembok Kota Taif.',
        },
        { type: 'h3', id: 'taif-rose', text: '6.12 Taman Mawar Taif (ورد الطائف)' },
        {
          type: 'p',
          text:
            'Ward Taif (Mawar Taif) - varieti mawar yang terkenal di seluruh dunia. Ditanam di sekitar Syafa dan Hada - selama berabad-abad diusahakan untuk pembuatan minyak wangi dan haruman.',
        },
      ],
    },

    // ── Bab 7 - Madinah ──
    {
      id: 'madinah',
      title: 'Bab 7 · Madinah Al-Munawwarah - Tapak-tapak Suci',
      blocks: [
        { type: 'h3', id: 'madinah-intro', text: '7.1 Madinah Al-Munawwarah' },
        {
          type: 'p',
          text:
            'Kota tersuci kedua dalam Islam - di sinilah Nabi ﷺ meletakkan asas masyarakat Islam. Nama lamanya ialah Yathrib; selepas Hijrah ia disebut “Madinatun Nabi ﷺ” (Kota Nabi).',
        },
        {
          type: 'hadith',
          arabic: 'اللَّهُمَّ حَبِّبْ إِلَيْنَا الْمَدِينَةَ كَحُبِّنَا مَكَّةَ أَوْ أَشَدَّ',
          text:
            'Ya Allah! Jadikanlah kami mencintai Madinah sebagaimana kami mencintai Makkah, atau lebih daripada itu.',
          source: 'Sahih Bukhari, 1889',
        },
        { type: 'h3', id: 'riyaz-jannah', text: '7.2 Raudah' },
        {
          type: 'hadith',
          text:
            'Antara rumahku (bilik) dan mimbarku terdapat sebuah taman daripada taman-taman syurga, dan mimbarku berada di atas telagaku. - Nabi ﷺ',
          source: 'Sahih Muslim, 1391',
        },
        { type: 'h3', id: 'jannat-baqi', text: '7.3 Jannatul Baqi' },
        {
          type: 'p',
          text: 'Perkuburan suci yang terletak betul-betul di sebelah Masjid Nabawi - di sini disemadikan:',
        },
        {
          type: 'infocard',
          title: 'Ummahatul Mukminin RA (di Jannatul Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Sayyidah Aisyah RA',
                'Sayyidah Hafsah RA',
                'Sayyidah Ummu Salamah RA',
                'Sayyidah Zainab binti Jahsy RA',
                'Sayyidah Zainab binti Khuzaimah RA',
                'Sayyidah Juwairiyah RA',
                'Sayyidah Safiyyah RA',
                'Sayyidah Ummu Habibah RA',
                'Sayyidah Saudah RA',
              ],
            },
            {
              type: 'note',
              text:
                'Sayyidah Khadijah RA - disemadikan di Makkah (Jannatul Mualla) | Sayyidah Maimunah RA - disemadikan di Sarif (berhampiran Makkah)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Ahlul Bait RA (di Jannatul Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Sayyidah Fatimah RA (puteri Nabi ﷺ)',
                'Sayyidina Hasan bin Ali RA',
                'Sayyidina Abbas RA (bapa saudara Nabi ﷺ)',
                'Sayyidina Ali Zainal Abidin (rahimahullah)',
                'Sayyidina Muhammad Al-Baqir (rahimahullah)',
                'Sayyidina Ja‘far As-Sadiq (rahimahullah)',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Sahabat Termasyhur RA (di Jannatul Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Sayyidina Uthman bin Affan RA (Khalifah Ketiga)',
                'Sayyidina Sa‘d bin Abi Waqqas RA',
                'Sayyidina Abdul Rahman bin Auf RA',
                'Sayyidina As‘ad bin Zurarah RA (Ansar pertama)',
                'Sayyidina Abdullah bin Mas‘ud RA',
              ],
            },
          ],
        },
        { type: 'h3', id: 'masjid-ghamamah', text: '7.4 Masjid Al-Ghamamah' },
        {
          type: 'p',
          text:
            'Terletak berhampiran Masjid Nabawi - Nabi ﷺ menunaikan solat Hari Raya dan Istisqa (solat memohon hujan) di sini. Kerana berkumpulnya awan untuk hujan, ia dinamakan “Ghamamah” (yang bermaksud: awan).',
        },
        { type: 'h3', id: 'masjid-abubakr', text: '7.5 Masjid Abu Bakar RA' },
        {
          type: 'p',
          text:
            'Terletak berhampiran Masjid Al-Ghamamah - selepas Nabi ﷺ, Sayyidina Abu Bakar RA mengimamkan solat Hari Raya di sini.',
        },
        { type: 'h3', id: 'masjid-bilal', text: '7.6 Masjid Bilal RA' },
        {
          type: 'p',
          text:
            'Dikaitkan dengan Sayyidina Bilal bin Rabah RA, muazin pertama dalam Islam - selepas kewafatan Nabi ﷺ, melaungkan azan menjadi amat memilukan baginya.',
        },
        { type: 'h3', id: 'masjid-ali-madinah', text: '7.7 Masjid Ali RA (Madinah)' },
        {
          type: 'p',
          text:
            'Dikaitkan dengan Sayyidina Ali bin Abi Talib RA - sepupu Nabi ﷺ, menantunya, dan Khalifah Ar-Rasyidin keempat.',
        },
        { type: 'h3', id: 'masjid-jumah', text: '7.8 Masjid Jumaat' },
        {
          type: 'p',
          text:
            'Selepas Hijrah, Nabi ﷺ menunaikan solat Jumaat pertama di sini - dalam perjalanan dari Quba ke Madinah.',
        },
        { type: 'h3', id: 'masjid-quba', text: '7.9 Masjid Quba' },
        {
          type: 'p',
          text:
            'Masjid pertama dalam Islam - selepas Hijrah, Nabi ﷺ terlebih dahulu meletakkan asas masjid ini.',
        },
        {
          type: 'hadith',
          badge: 'Hadis - Kelebihan',
          text:
            'Sesiapa yang berwuduk di rumahnya lalu datang ke Masjid Quba dan bersolat di sana, dia memperoleh ganjaran setara Umrah.',
          source: 'Sunan Ibnu Majah, 1412',
        },
        { type: 'h3', id: 'ring-well', text: '7.10 Perigi Cincin (Bir Al-Khatam)' },
        {
          type: 'p',
          text:
            'Dikaitkan dengan cincin perak Nabi ﷺ (yang tertulis “Muhammad Rasulullah”). Menurut riwayat, ia terjatuh ke dalam perigi ini pada zaman Sayyidina Uthman RA.',
        },
        { type: 'h3', id: 'bir-ruma', text: '7.11 Bir Ruma' },
        {
          type: 'p',
          text:
            'Sayyidina Uthman bin Affan RA membeli perigi ini dan mewakafkannya di jalan Allah - amalan sedekah jariah terbesar dalam sejarah Islam.',
        },
        { type: 'h3', id: 'bir-ghars', text: '7.12 Bir Ghars' },
        {
          type: 'p',
          text:
            'Sumber air kegemaran Nabi ﷺ - baginda berwasiat agar selepas kewafatannya, jenazahnya dimandikan dengan air dari Bir Ghars.',
        },
        { type: 'h3', id: 'bustan-mustaqbal', text: '7.13 Bustan Al-Mustaqbal' },
        {
          type: 'p',
          text:
            'Taman awam moden di Madinah - persekitaran mesra keluarga dengan kawasan permainan kanak-kanak dan laluan pejalan kaki. Bukan tapak keagamaan, sebaliknya taman rekreasi moden kota ini.',
        },
        { type: 'h3', id: 'masjid-qiblatain', text: '7.14 Masjid Qiblatain' },
        {
          type: 'p',
          text:
            'Tempat kiblat diubah di tengah-tengah solat - dari Baitulmaqdis ke Kaabah. “Qiblatain” bermaksud: dua kiblat.',
        },
        {
          type: 'note',
          text:
            'Di dalamnya terdapat dua mihrab - kiblat lama dan baharu. Kira-kira 5 km dari Masjid Nabawi ﷺ.',
        },
        { type: 'h3', id: 'jabal-khandaq', text: '7.15 Jabal Khandaq + Tujuh Masjid' },
        {
          type: 'p',
          text:
            'Perang Khandaq (Ahzab) - pada 5 H, tentera musuh melebihi 10,000 orang menentang 3,000 umat Islam - atas cadangan Salman Al-Farisi RA, sebuah parit digali. Allah membantu umat Islam melalui ribut angin dan para malaikat.',
        },
        {
          type: 'infocard',
          title: 'Masajid Sab‘ah (7 Masjid)',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Masjid Al-Fath (yang paling terkenal)',
                'Masjid Salman Al-Farisi',
                'Masjid Abu Bakar',
                'Masjid Umar',
                'Masjid Ali',
                'Masjid Sa‘d bin Mu‘adz RA',
                'Masjid Sa‘d bin Ubadah RA',
              ],
            },
          ],
        },
        { type: 'h3', id: 'jabal-uhud', text: '7.17 Jabal Uhud / Perang Uhud' },
        {
          type: 'hadith',
          text: 'Uhud ialah gunung yang mencintai kita dan kita mencintainya. - Nabi ﷺ',
          source: 'Sahih Muslim, 1393',
        },
        {
          type: 'p',
          text:
            '3 H - 3,000 tentera di bawah Abu Sufyan menentang 700 umat Islam. Apabila para pemanah meninggalkan kedudukan mereka, musuh menyerang dari belakang - arah peperangan pun berbalik. Nabi ﷺ tercedera namun tidak melaknat, baginda hanya berdoa: “Ya Allah! Berilah petunjuk kepada kaumku.”',
        },
        { type: 'h3', id: 'martyrs-uhud', text: '7.20 Perkuburan Para Syuhada Uhud' },
        {
          type: 'p',
          text: '70 sahabat RA gugur syahid dalam Perang Uhud - mereka disemadikan di sini.',
        },
        {
          type: 'infocard',
          title: 'Sayyidus Syuhada - Sayyidina Hamzah bin Abdul Muttalib RA',
          blocks: [
            {
              type: 'p',
              text:
                'Bapa saudara Nabi ﷺ - syahid terbesar dalam peperangan ini - gelaran “Sayyidus Syuhada” (Penghulu Para Syuhada) dianugerahkan kepadanya oleh Nabi ﷺ.',
            },
          ],
        },
        uhudMartyrsTable(['#', 'Nama', 'Kumpulan'], 'Para Syuhada Uhud'),
        {
          type: 'note',
          text:
            'Tiada kata sepakat ulama atas kesemua 70 nama - riwayat-riwayat berbeza - namun mereka semua adalah para syuhada besar Islam.',
        },
        { type: 'h3', id: 'cave-uhud', text: '7.18 Gua Uhud + 7.19 Masjid Al-Fasih' },
        {
          type: 'p',
          text:
            'Selepas Perang Uhud, Nabi ﷺ berehat di gua kecil (Gua Uhud) di Jabal Uhud - sementara para sahabat RA berkawal. Masjid Al-Fasih terletak di bawah gua ini - dibina kemudian - menandakan tempat Nabi ﷺ bersolat.',
        },
        { type: 'h3', id: 'house-fatima', text: '7.21 Rumah Sayyidah Fatimah RA' },
        {
          type: 'p',
          text:
            'Di sebelah timur Masjid Nabawi ﷺ - kini termasuk dalam perluasan Masjid Nabawi. Sebuah rumah yang amat kecil dan sederhana - di sinilah Imam Hasan RA dan Imam Husain RA dibesarkan.',
        },
      ],
    },

    // ── Bab 8 - Badar ──
    {
      id: 'badr',
      title: 'Bab 8 · Badar - Tapak-tapak Suci',
      blocks: [
        { type: 'h3', id: 'battle-badr', text: '8.1 Perang Badar' },
        {
          type: 'p',
          text:
            '17 Ramadan, 2 H - perang pertama dan penentu dalam Islam. Kira-kira 130 km barat daya Madinah. Umat Islam: 313 (2 ekor kuda, 70 ekor unta) menentang Quraisy: 1,000.',
        },
        {
          type: 'callout',
          text:
            'Matlamatnya ialah kafilah dagang, bukan peperangan - tetapi Quraisy memaksakan perang. Allah menghantar 1,000 malaikat sebagai bantuan - 70 orang kafir terbunuh, 70 ditawan, dan 14 umat Islam gugur syahid.',
        },
        { type: 'h3', id: 'masjid-areesh', text: '8.2 Masjid Al-Arisy' },
        {
          type: 'p',
          text:
            'Terletak berhampiran medan perang Badar - tempat Nabi ﷺ berdoa dengan begitu bersungguh-sungguh pada hari Badar sehingga selendangnya terjatuh dari bahunya - Sayyidina Abu Bakar RA menenangkannya: “Wahai Rasulullah ﷺ, Allah pasti menepati janji-Nya.”',
        },
        { type: 'h3', id: 'descent-angels', text: '8.3 Penurunan Para Malaikat (Bantuan Ilahi)' },
        {
          type: 'verse',
          arabic:
            'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
          translation:
            'Ketika kamu memohon pertolongan kepada Tuhan kamu, lalu Dia memperkenankannya: Sesungguhnya Aku akan membantu kamu dengan seribu malaikat yang datang berturut-turut.',
          reference: 'Surah Al-Anfal (8:9)',
        },
        { type: 'h3', id: 'martyrs-badr', text: '8.4 Perkuburan Para Syuhada Badar' },
        {
          type: 'p',
          text: 'Terletak berhampiran medan perang Badar - 14 sahabat RA disemadikan di sini.',
        },
        badrMartyrsTable(['#', 'Nama', 'Kumpulan'], 'Para Syuhada Badar'),
      ],
    },

    // ── Lampiran - Isteri dan Anak ──
    {
      id: 'family',
      title: 'Lampiran · Isteri dan Anak Nabi ﷺ',
      blocks: [
        {
          type: 'h3',
          id: 'wives',
          text: 'Isteri-isteri Nabi ﷺ (Ummahatul Mukminin) - 11 Isteri',
        },
        {
          type: 'note',
          text: 'Ketika Nabi ﷺ wafat, 9 orang isteri masih hidup.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Sayyidah Khadijah binti Khuwailid RA',
              text:
                'Perkahwinan: Nabi ﷺ berusia 25 | Khadijah RA berusia 40 | Perkahwinan pertama dan terlama (25 tahun) | Orang pertama yang memeluk Islam',
            },
            {
              title: 'Sayyidah Saudah binti Zam‘ah RA',
              text: 'Perkahwinan: Nabi ﷺ berusia 50 | Beliau seorang balu yang tidak mempunyai sandaran',
            },
            {
              title: 'Sayyidah Aisyah binti Abu Bakar RA',
              text: 'Pertunangan: usia 6 | Perkahwinan disempurnakan: usia 9 | Usia Nabi ﷺ: kira-kira 53',
            },
            {
              title: 'Sayyidah Hafsah binti Umar RA',
              text: 'Perkahwinan: Nabi ﷺ berusia 54 | Balu seorang syuhada',
            },
            {
              title: 'Sayyidah Zainab binti Khuzaimah RA',
              text: 'Perkahwinan: usia 55 | Gelaran: Ummul Masakin (Ibu golongan miskin) | Wafat: 8 bulan kemudian',
            },
            {
              title: 'Sayyidah Ummu Salamah RA',
              text: 'Perkahwinan: usia 56 | Balu yang mempunyai anak',
            },
            {
              title: 'Sayyidah Zainab binti Jahsy RA',
              text: 'Perkahwinan: usia 57 | Catatan khusus: atas perintah Allah dalam Al-Quran (Surah Ahzab)',
            },
            {
              title: 'Sayyidah Juwairiyah binti Harith RA',
              text: 'Perkahwinan: usia 58 | Kesan: seluruh kabilahnya dibebaskan',
            },
            {
              title: 'Sayyidah Ummu Habibah RA',
              text: 'Perkahwinan: usia 59 | Akad nikah berlangsung di Habsyah',
            },
            {
              title: 'Sayyidah Safiyyah binti Huyay RA',
              text: 'Perkahwinan: usia 59 | Keturunan: daripada keluarga Yahudi',
            },
            {
              title: 'Sayyidah Maimunah binti Harith RA',
              text: 'Perkahwinan: usia 60 | Perkahwinan terakhir',
            },
          ],
        },
        { type: 'h3', id: 'children', text: 'Anak-anak Nabi ﷺ - Jumlah 7' },
        {
          type: 'table',
          columns: ['#', 'Nama', 'Ibu', 'Wafat'],
          rows: [
            ['1', 'Sayyidina Qasim RA', 'Sayyidah Khadijah RA', 'Zaman kanak-kanak (bawah 2 tahun)'],
            ['2', 'Sayyidina Abdullah RA', 'Sayyidah Khadijah RA', 'Zaman kanak-kanak'],
            ['3', 'Sayyidah Zainab RA', 'Sayyidah Khadijah RA', 'Pada usia 31'],
            ['4', 'Sayyidah Ruqayyah RA', 'Sayyidah Khadijah RA', 'Pada usia 22'],
            ['5', 'Sayyidah Ummu Kalthum RA', 'Sayyidah Khadijah RA', 'Pada usia 29'],
            ['6', 'Sayyidah Fatimah RA', 'Sayyidah Khadijah RA', 'Usia 29 - 6 bulan selepas kewafatan Nabi ﷺ'],
            ['7', 'Sayyidina Ibrahim RA', 'Mariyah Al-Qibtiyah RA', 'Pada usia 18 bulan'],
          ],
        },
        { type: 'h3', id: 'children-details', text: 'Anak-anak daripada Para Isteri (Perincian)' },
        {
          type: 'infocard',
          title: 'Sayyidah Zainab RA',
          blocks: [
            {
              type: 'p',
              text: 'Suami: Abul Ash bin Rabi‘ | Anak: Ali RA (wafat semasa kecil), Umamah RA',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Sayyidah Ruqayyah RA',
          blocks: [
            {
              type: 'p',
              text: 'Suami: Sayyidina Uthman bin Affan RA | Anak: Abdullah RA (wafat semasa kecil)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Sayyidah Ummu Kalthum RA',
          blocks: [{ type: 'p', text: 'Suami: Sayyidina Uthman RA | Tiada anak' }],
        },
        {
          type: 'infocard',
          title: 'Sayyidah Fatimah RA',
          blocks: [
            {
              type: 'p',
              text:
                'Suami: Sayyidina Ali bin Abi Talib RA | Anak: Hasan RA, Husain RA, Muhsin RA (wafat), Zainab RA, Ummu Kalthum RA',
            },
          ],
        },
      ],
    },

    // ── Penutup ──
    {
      id: 'conclusion',
      title: 'Penutup',
      blocks: [
        {
          type: 'p',
          text:
            'Panduan ini tidak ditulis untuk berlagak atau menunjuk-nunjuk, sebaliknya disusun semata-mata untuk bimbingan yang benar bagi umat Islam.',
        },
        {
          type: 'p',
          text:
            'Seluruh ziarah, peristiwa, dan tapak suci yang disebut di dalamnya telah dikemukakan dalam sinaran Al-Quran, hadis sahih, dan riwayat-riwayat yang boleh dipercayai.',
        },
        {
          type: 'p',
          text:
            'Usaha kami adalah agar perjalanan ini bukan sekadar lawatan tempat, sebaliknya perjalanan iman, renungan, dan keyakinan - di mana pada setiap langkah terasa ajaran Nabi ﷺ, pengorbanan para sahabat RA, dan roh Islam.',
        },
        { type: 'callout', text: 'آمِيْن يَا رَبَّ الْعَالَمِيْن' },
      ],
    },
  ],
};

export default guide;
