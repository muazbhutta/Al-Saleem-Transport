import type { Guide } from './types';
import { uhudMartyrsTable, badrMartyrsTable } from './shared';

/**
 * Panduan Ziyarat bahasa Indonesia - DRAF BERBANTUAN MESIN, menunggu tinjauan
 * ulama. Ayat Al-Qur'an dan hadis berbahasa Arab dipertahankan apa adanya;
 * hanya penjelasan/terjemahan yang dalam bahasa Indonesia. Nama para syuhada
 * memakai tabel Latin bersama (shared).
 */
const guide: Guide = {
  title: 'Panduan Lengkap Ziyarat',
  intro:
    'Pendamping perjalanan Anda ke tempat-tempat suci - situs-situs mulia di Makkah dan Madinah, tahapan Umrah dan Haji, serta situs bersejarah yang didambakan setiap peziarah. Bacalah sebelum berangkat dan simpanlah di perjalanan.',
  chapters: [
    // ── Bab 1 - Makkah ──
    {
      id: 'makkah',
      title: 'Bab 1 · Makkah Al-Mukarramah - Pengantar',
      intro:
        'Makkah Al-Mukarramah adalah kota tersuci dalam Islam. Di sinilah Ka’bah berada, yang dijadikan Allah Ta’ala sebagai pusat ibadah bagi seluruh umat manusia. Makkah bukan sekadar sebuah kota, melainkan sebuah sistem tauhid, kedamaian, dan hidayah yang lengkap.',
      blocks: [
        { type: 'h3', id: 'kabah', text: '1.1 Ka’bah - Rumah Ibadah Pertama' },
        {
          type: 'verse',
          arabic:
            'إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ ۝ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا',
          translation:
            'Sesungguhnya rumah pertama yang dibangun untuk manusia adalah yang di Bakkah (Makkah), yang diberkahi dan menjadi petunjuk bagi seluruh alam. Padanya terdapat tanda-tanda yang jelas: maqam Ibrahim. Dan barang siapa memasukinya, ia menjadi aman.',
          reference: 'Surah Ali ‘Imran (3:96-97)',
        },
        {
          type: 'list',
          items: [
            'Ka’bah adalah tempat ibadah pertama',
            '“Bakkah” adalah nama kuno Makkah',
            'Makkah adalah tempat kedamaian dan keamanan',
            'Hidayah bukan hanya untuk bangsa Arab, tetapi untuk seluruh umat manusia',
          ],
        },
        { type: 'h3', id: 'greatness-city', text: '1.2 Keagungan Kota Ini' },
        {
          type: 'verse',
          arabic: 'لَا أُقْسِمُ بِهَذَا الْبَلَدِ ۝ وَأَنتَ حِلٌّ بِهَذَا الْبَلَدِ',
          translation:
            'Aku bersumpah dengan negeri ini (Makkah), dan engkau (wahai Nabi ﷺ) bertempat tinggal di negeri ini.',
          reference: 'Surah Al-Balad (90:1-2)',
        },
        { type: 'h3', id: 'prayer-ibrahim', text: '1.3 Doa Ibrahim AS untuk Makkah' },
        {
          type: 'verse',
          arabic:
            'وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ اجْعَلْ هَذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ',
          translation:
            'Dan ketika Ibrahim AS berdoa: Ya Tuhanku, jadikanlah negeri ini negeri yang aman, dan berilah rezeki penduduknya berupa buah-buahan.',
          reference: 'Surah Al-Baqarah (2:126)',
        },
        { type: 'h3', id: 'reward-haram', text: '1.4 Pahala Shalat di Masjidil Haram' },
        {
          type: 'hadith',
          arabic:
            'صَلَاةٌ فِي مَسْجِدِي هَذَا أَفْضَلُ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ، وَصَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ',
          text:
            'Satu shalat di masjidku ini (Masjid Nabawi ﷺ) lebih utama daripada seribu shalat di masjid lain, kecuali Masjidil Haram. Dan satu shalat di Masjidil Haram lebih utama daripada seratus ribu shalat di masjid lain.',
          source: 'Sunan Ibnu Majah, 1406',
        },
        { type: 'h3', id: 'love-prophet-makkah', text: '1.5 Kecintaan Nabi ﷺ kepada Makkah' },
        {
          type: 'hadith',
          text:
            'Demi Allah! Engkau adalah negeri Allah yang terbaik dan yang paling dicintai Allah di antara seluruh negeri. Seandainya aku tidak dipaksa keluar darimu, aku tidak akan pernah meninggalkanmu.',
          source: 'Jami‘ at-Tirmizi, 3925 / Sunan Ibnu Majah, 3108',
        },
      ],
    },

    // ── Bab 2 - Umrah ──
    {
      id: 'umrah',
      title: 'Bab 2 · Umrah',
      blocks: [
        { type: 'h3', id: 'what-is-umrah', text: '2.1 Apa itu Umrah?' },
        {
          type: 'p',
          text:
            'Umrah adalah ibadah yang dilaksanakan di Masjidil Haram (Makkah). Karena tujuannya, Umrah juga disebut “haji kecil”.',
        },
        { type: 'h3', id: 'benefits-umrah', text: '2.2 Apa Keutamaan Umrah?' },
        {
          type: 'hadith',
          text:
            'Dari satu Umrah ke Umrah berikutnya menjadi penghapus dosa di antara keduanya, dan haji yang mabrur tiada balasan baginya selain surga.',
          source: 'Sahih Bukhari, 1773 / Sahih Muslim, 1349a',
        },
        { type: 'h3', id: 'pillars-umrah', text: '2.4 Rukun-rukun Umrah' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Niat dan pakaian ihram di Miqat' },
            { title: 'Tawaf', text: '7 putaran mengelilingi Ka’bah' },
            { title: 'Sa’i', text: '7 kali perjalanan antara Shafa-Marwah' },
            { title: 'Tahallul (Halq/Qashr)', text: 'Mencukur atau memendekkan rambut' },
          ],
        },
        { type: 'h3', id: 'method-umrah', text: '2.5 Tata Cara Umrah yang Benar' },
        { type: 'h4', text: 'Ihram' },
        {
          type: 'list',
          items: [
            'Mandi di Miqat (sunnah)',
            'Laki-laki: dua kain putih tanpa jahitan',
            'Perempuan: pakaian sopan, wajah terbuka',
            'Niat dari dalam hati',
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
            '7 putaran mengelilingi Ka’bah (dimulai dari Hajar Aswad)',
            'Laki-laki: berjalan cepat pada 3 putaran pertama (Ramal)',
            'Mencium Hajar Aswad (jika memungkinkan) atau memberi isyarat kepadanya',
            'Dari Rukun Yamani ke Hajar Aswad: Rabbana atina fid-dunya hasanatan…',
            'Shalat 2 rakaat (dekat Maqam Ibrahim)',
          ],
        },
        { type: 'h4', text: 'Sa’i (Shafa-Marwah)' },
        {
          type: 'verse',
          arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
          translation: 'Sesungguhnya Shafa dan Marwah adalah sebagian dari syiar-syiar Allah.',
          reference: 'Surah Al-Baqarah (2:158)',
        },
        {
          type: 'list',
          items: [
            'Mulai dari Shafa, berakhir di Marwah - 7 kali perjalanan',
            'Di antara lampu hijau: laki-laki berjalan cepat, perempuan dengan langkah biasa',
          ],
        },
        { type: 'h3', id: 'supplications-umrah', text: '2.7 Doa-doa Penting Umrah' },
        {
          type: 'hadith',
          badge: 'Doa',
          arabic:
            'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
          text:
            'Ya Allah! Berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka.',
          source: 'Sahih Bukhari, 6389',
        },
      ],
    },

    // ── Bab 3 - Haji ──
    {
      id: 'hajj',
      title: 'Bab 3 · Haji',
      blocks: [
        { type: 'h3', id: 'what-is-hajj', text: '3.1 Apa itu Haji?' },
        {
          type: 'verse',
          arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
          translation:
            'Dan kewajiban manusia terhadap Allah adalah melaksanakan haji ke Baitullah, yaitu bagi orang yang mampu mengadakan perjalanan ke sana.',
          reference: 'Surah Ali ‘Imran (3:97)',
        },
        {
          type: 'list',
          items: [
            'Haji adalah rukun Islam yang kelima',
            'Hanya wajib bagi mereka yang mampu secara fisik dan finansial',
            'Wajib hanya sekali seumur hidup',
          ],
        },
        { type: 'h3', id: 'pillars-hajj', text: '3.4 Rukun-rukun Haji' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Niat dan pakaian ihram' },
            { title: 'Wukuf di Arafah', text: '9 Zulhijah - Rukun wajib' },
            { title: 'Tawaf Ifadah', text: 'Tawaf wajib' },
            { title: 'Sa’i', text: 'Shafa-Marwah' },
          ],
        },
        { type: 'h3', id: 'method-hajj', text: '3.5 Tata Cara Haji yang Benar (Langkah demi Langkah)' },
        {
          type: 'infocard',
          title: '8 Zulhijah (Hari Tarwiyah) - Mina',
          blocks: [
            {
              type: 'list',
              items: ['Tiba di Mina, laksanakan 5 shalat', 'Bermalam di Mina (sunnah)'],
            },
          ],
        },
        {
          type: 'infocard',
          title: '9 Zulhijah (Hari Arafah) - Wukuf di Arafah',
          blocks: [
            { type: 'note', variant: 'warning', text: 'Haji tidak sah tanpa Arafah!' },
            {
              type: 'list',
              items: [
                'Wukuf di Arafah dari Zuhur hingga Maghrib - inilah rukun haji yang paling agung',
                'Berdoa, memohon ampun, berzikir',
                'Kemudian menuju Muzdalifah - menjamak shalat Maghrib dan Isya',
                'Bermalam di Muzdalifah (malam 9-10 Zulhijah)',
                'Mengumpulkan 70 batu kerikil',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '10 Zulhijah (Hari Nahr/Kurban) - 4 Amalan',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Melempar - hanya Jamrah Aqabah (tiang besar) - 7 batu',
                'Menyembelih kurban',
                'Mencukur atau memendekkan rambut',
                'Tawaf Ifadah + Sa’i',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '11-13 Zulhijah (Hari Tasyrik) - Melempar Jamrah',
          blocks: [
            { type: 'p', text: 'Melempar ketiga jamrah setiap hari:' },
            {
              type: 'table',
              columns: ['Jamrah', 'Ukuran', 'Batu'],
              rows: [
                ['Jamrah Ula', 'Kecil', '7 batu'],
                ['Jamrah Wustha', 'Tengah', '7 batu'],
                ['Jamrah Aqabah', 'Besar', '7 batu'],
              ],
            },
            { type: 'note', text: 'Minimal wajib = 49 batu | Sunnah penuh = 70 batu' },
          ],
        },
      ],
    },

    // ── Bab 4 - Rincian Haji ──
    {
      id: 'hajj-details',
      title: 'Bab 4 · Rincian Haji dan Situs-situs Suci',
      blocks: [
        { type: 'h3', id: 'masjid-nimra', text: '4.1 Masjid Namirah - Pengantar' },
        {
          type: 'p',
          text:
            'Masjid Namirah terletak dekat Makkah Al-Mukarramah di padang Arafah. Di sinilah Nabi ﷺ menyampaikan khutbah bersejarah pada Haji Wada‘, yang menegaskan ajaran-ajaran pokok Islam dengan jelas.',
        },
        {
          type: 'note',
          variant: 'warning',
          text:
            'Penting: Masjid Namirah hanya dibuka pada 9 Zulhijah (Hari Arafah) - tertutup sepanjang tahun. Hanya pada hari ini azan, khutbah, serta shalat jamak Zuhur + Asar dilaksanakan.',
        },
        { type: 'h3', id: 'jabal-rehmat', text: '4.2 Jabal Rahmah - Pengantar' },
        {
          type: 'p',
          text:
            'Jabal Rahmah adalah bukit kecil yang terletak di tengah Arafah, dikenal juga sebagai “Bukit Kasih Sayang”. Di sinilah Nabi Adam AS dan Hawa (alaihas salam) pertama kali bertemu setelah turun ke bumi.',
        },
        { type: 'h3', id: 'muzdalifah', text: '4.3 Muzdalifah - Pengantar' },
        {
          type: 'p',
          text:
            'Muzdalifah adalah nama sebuah lembah yang terletak antara Arafah dan Mina. Dalam Al-Qur’an ia disebut “Masy‘aril Haram”.',
        },
        {
          type: 'list',
          items: [
            'Setelah Arafah, jamak shalat Maghrib dan Isya di Muzdalifah',
            'Malam 9-10 Zulhijah (malam Muzdalifah) - bermalam dalam ibadah',
            'Menetap hingga Fajar hukumnya wajib',
            'Mengumpulkan 70 batu kerikil untuk melempar jamrah',
          ],
        },
        { type: 'h3', id: 'wadi-muhassir', text: '4.4 Wadi Muhassir - Pengantar' },
        {
          type: 'p',
          text:
            'Wadi Muhassir adalah lembah yang terletak antara Muzdalifah dan Mina - mengingatkan pada peristiwa Pasukan Gajah, ketika Allah menurunkan azab melalui burung-burung Ababil. Ini adalah tempat pelajaran dan perenungan.',
        },
        { type: 'h3', id: 'mina', text: '4.5 Mina - Pengantar' },
        {
          type: 'p',
          text:
            'Mina adalah lembah suci Makkah tempat banyak amalan penting haji dilaksanakan: melempar jamrah, menyembelih kurban, mencukur/memendekkan rambut, dan Hari Tasyrik.',
        },
        { type: 'h3', id: 'masjid-khaif', text: '4.6 Masjid Al-Khaif (Mina)' },
        {
          type: 'p',
          text:
            'Masjid Al-Khaif adalah salah satu masjid tertua dan tersuci di Mina. Disebut juga “Masjid Para Nabi” karena 70 atau 100 nabi pernah shalat di sini.',
        },
        { type: 'h3', id: 'jamarat', text: '4.8 Jamarat - Pengantar' },
        {
          type: 'p',
          text:
            'Jamarat adalah tiga lokasi di Mina tempat para jamaah melempar batu ke tiang-tiang yang melambangkan setan - sebagai peringatan atas amalan Nabi Ibrahim AS.',
        },
        {
          type: 'table',
          columns: ['Jamrah', 'Keterangan'],
          rows: [
            ['Jamrah Ula', 'Tiang terkecil'],
            ['Jamrah Wustha', 'Tiang tengah'],
            ['Jamrah Aqabah', 'Tiang terbesar'],
          ],
        },
        { type: 'h3', id: 'masjid-bayah', text: '4.9 Masjid Al-Bai‘ah (Aqabah) - Pengantar' },
        {
          type: 'p',
          text:
            'Masjid Al-Bai‘ah terletak dekat Mina, di dekat Jamrah Aqabah. Di sinilah kaum Ansar Madinah membaiat Nabi ﷺ dalam dua baiat besar (pada tahun ke-12 dan ke-13 kenabian).',
        },
      ],
    },

    // ── Bab 5 - Pemakaman dan Masjid ──
    {
      id: 'graves-mosques',
      title: 'Bab 5 · Pemakaman dan Masjid - Situs-situs Suci',
      blocks: [
        {
          type: 'hadith',
          badge: 'Hadis - Ziarah Kubur',
          text: 'Dahulu aku melarang kalian menziarahi kubur, maka sekarang ziarahilah. - Nabi ﷺ',
          source: 'Sahih Muslim, 977',
        },
        { type: 'h3', id: 'jannat-mualla', text: '5.1 Jannatul Mu‘alla' },
        {
          type: 'p',
          text:
            'Jannatul Mu‘alla adalah pemakaman tertua dan tersuci di Makkah Al-Mukarramah. Di sini dimakamkan: Sayyidah Khadijah RA, Abu Thalib, Abdullah bin Zubair RA, Ummu Hani RA, dan para pemuka Quraisy.',
        },
        { type: 'h3', id: 'masjid-jinn', text: '5.2 Masjid Jin' },
        {
          type: 'p',
          text:
            'Di sini serombongan jin mendengarkan bacaan Nabi ﷺ lalu memeluk Islam dan berjanji melindunginya - masjid ini dibangun untuk mengenang peristiwa tersebut.',
        },
        { type: 'h3', id: 'masjid-shajar', text: '5.3 Masjid Syajar' },
        {
          type: 'p',
          text:
            'Di sini sebatang pohon mengenali Nabi ﷺ, membungkuk memberi salam, dan bersaksi atas kenabiannya - masjid ini dibangun di tempat peristiwa mukjizat tersebut.',
        },
        { type: 'h3', id: 'masjid-fath', text: '5.4 Masjid Al-Fath (Masjid Ar-Rayah)' },
        {
          type: 'p',
          text: 'Terletak di Jabal Al-Fath - bendera Islam dikibarkan di sini pada Fathu Makkah.',
        },
        { type: 'h3', id: 'masjid-hijaba', text: '5.5 Masjid Al-Hijabah' },
        {
          type: 'p',
          text:
            'Masjid ini dinamai dari “Hijabah” - yaitu tanggung jawab membuka, menutup, dan menjaga Ka’bah. Pada hari Fathu Makkah, Nabi ﷺ bersabda: “Mulai hari ini, tugas pemegang kunci Ka’bah tetap pada kalian; ia akan tetap di tangan kalian sampai Hari Kiamat.”',
        },
        { type: 'h3', id: 'masjid-mawlid', text: '5.6 Tempat Kelahiran Nabi ﷺ - Masjid Al-Mawlid' },
        {
          type: 'p',
          text:
            'Nabi ﷺ dilahirkan di rumah Bani Hasyim di Makkah Al-Mukarramah. Kelahiran: 12 Rabiul Awal, Tahun Gajah - sekitar 570 M.',
        },
        { type: 'h3', id: 'qasr-saqf', text: '5.7 Qashr As-Saqif (قَصْرُ السَّقِيفِ)' },
        {
          type: 'p',
          text:
            'Situs bersejarah kuno di Makkah Al-Mukarramah - terkait dengan rumah-rumah lama Bani Hasyim. “Saqf” berarti atap atau naungan.',
        },
        { type: 'h3', id: 'maqbarat-adl', text: '5.8 Maqbarat Al-‘Adl' },
        {
          type: 'p',
          text:
            'Pemakaman bersejarah di Makkah tempat hukuman-hukuman Islam pernah dilaksanakan. Nama kawasan ini berasal dari “Al-‘Adl” (keadilan).',
        },
        { type: 'h3', id: 'martyrs-cemetery-makkah', text: '5.9 Pemakaman Para Syuhada' },
        {
          type: 'p',
          text: 'Terletak dekat jalan Al-Ji‘ranah di Makkah - para syuhada dari berbagai peperangan dimakamkan di sini.',
        },
        { type: 'h3', id: 'wad-ul-banat', text: '5.10 Wa’dul Banat - Mengubur Anak Perempuan Hidup-hidup' },
        {
          type: 'verse',
          arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ۝ بِأَيِّ ذَنبٍ قُتِلَتْ',
          translation: 'Dan apabila bayi perempuan yang dikubur hidup-hidup ditanya: karena dosa apa ia dibunuh?',
          reference: 'Surah At-Takwir (81:8-9)',
        },
        {
          type: 'p',
          text:
            'Pada masa Jahiliah, sebagian kabilah Arab mengubur anak-anak perempuan mereka hidup-hidup. Setelah datangnya Nabi ﷺ, praktik ini dinyatakan haram, dan anak perempuan disebut sebagai rahmat.',
        },
        { type: 'h3', id: 'masjid-taneem', text: '5.11 Masjid Tan‘im (Masjid Aisyah RA)' },
        {
          type: 'p',
          text:
            'Miqat terdekat dari Makkah - orang yang tinggal di dalam Makkah berihram untuk Umrah dari sini.',
        },
        { type: 'h3', id: 'masjid-jiranah', text: '5.12 Masjid Al-Ji‘ranah' },
        {
          type: 'p',
          text: 'Miqat penting di Makkah - miqat yang paling terkenal setelah Masjid Tan‘im.',
        },
        { type: 'h3', id: 'masjid-hudaibiyah', text: '5.13 Masjid Sulh Hudaibiyah' },
        {
          type: 'p',
          text:
            'Tempat Perjanjian Hudaibiyah antara Nabi ﷺ dan Quraisy pada 6 H - di sinilah pula terjadi Baiat Ridwan.',
        },
        {
          type: 'verse',
          arabic:
            'لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ',
          translation: 'Sungguh Allah telah rida terhadap orang-orang mukmin ketika mereka berbaiat kepadamu di bawah pohon.',
          reference: 'Surah Al-Fath (48:18)',
        },
        { type: 'h3', id: 'jabal-noor', text: '5.14 Jabal Nur + Gua Hira' },
        {
          type: 'p',
          text: 'Di sini wahyu pertama turun - Surah Al-‘Alaq (96:1-5). Islam bermula di tempat ini.',
        },
        { type: 'h3', id: 'jabal-thawr', text: '5.15 Jabal Tsur + Gua Tsur' },
        {
          type: 'p',
          text:
            'Pada peristiwa Hijrah, Nabi ﷺ dan Abu Bakar Ash-Shiddiq RA bermalam tiga malam di sini. Dalam perlindungan khusus Allah - peristiwa mukjizat sarang laba-laba dan telur burung merpati.',
        },
        {
          type: 'verse',
          arabic: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
          translation: 'Ketika ia berkata kepada sahabatnya: Jangan bersedih, sesungguhnya Allah bersama kita.',
          reference: 'Surah At-Taubah (9:40)',
        },
        { type: 'h3', id: 'jabal-khandama', text: '5.16 Jabal Khandamah' },
        {
          type: 'p',
          text:
            'Gunung bersejarah di Makkah - pada Fathu Makkah, Nabi ﷺ memilih jalan di dekatnya untuk memasuki kota.',
        },
        { type: 'h3', id: 'kiswah-museum', text: '5.17 Museum Kiswah' },
        {
          type: 'p',
          text:
            'Museum megah yang didedikasikan untuk Kiswah (kain sutra hitam penutup Ka’bah). Setiap tahun pada 9 Zulhijah, Kiswah lama diganti dengan yang baru - dihiasi ayat-ayat Al-Qur’an yang disulam dengan benang emas dan perak.',
        },
        { type: 'h3', id: 'zubaida-aqueduct', text: '5.18 Saluran Air Zubaidah' },
        {
          type: 'p',
          text:
            'Sayyidah Zubaidah binti Ja‘far (istri Khalifah Abbasiyah Harun Ar-Rasyid) secara pribadi mendanai pembangunan saluran air megah dari pegunungan Taif ke Makkah - untuk melayani para jamaah haji. Proyek kesejahteraan umum terbesar pada masanya.',
        },
      ],
    },

    // ── Bab 6 - Taif ──
    {
      id: 'taif',
      title: 'Bab 6 · Taif - Situs-situs Suci',
      blocks: [
        { type: 'h3', id: 'taif-intro', text: '6.1 Pengantar tentang Taif' },
        {
          type: 'p',
          text:
            'Taif adalah kota terkenal dan bersejarah di Arab Saudi - terletak di sebelah timur Makkah di Pegunungan Sarawat. Pada tahun kesepuluh kenabian, Nabi ﷺ melakukan perjalanan ke Taif. Penduduk Taif melempari beliau dengan batu - namun Nabi ﷺ tidak mengutuk mereka, melainkan mendoakan rahmat bagi mereka.',
        },
        {
          type: 'callout',
          text:
            '“Taif adalah kota tempat batu-batu dilemparkan, namun sebagai balasannya doa-doa pun naik - tempat penderitaan diberikan, namun dari sanalah bermula era rahmat yang baru.”',
        },
        { type: 'h3', id: 'ibn-abbas', text: '6.2 Sayyidina Abdullah bin Abbas RA - Pengantar' },
        {
          type: 'p',
          text:
            'Sepupu Nabi ﷺ - dikenal dalam Islam sebagai “Turjumanul Qur’an” (Penafsir Al-Qur’an). Beliau wafat di Taif pada 68 H dan dimakamkan di sana - kemudian dibangun makam dan masjid di tempat itu.',
        },
        {
          type: 'hadith',
          badge: 'Doa Nabi',
          arabic: 'اللَّهُمَّ عَلِّمْهُ الْحِكْمَةَ وَتَأْوِيلَ الْكِتَابِ',
          text: 'Ya Allah! Berilah ia pemahaman agama dan ajarilah ia takwil (penafsiran) Al-Qur’an.',
          source: 'Sunan Ibnu Majah, 166',
        },
        { type: 'h3', id: 'wadi-mathna', text: '6.3 Wadi Matsna' },
        {
          type: 'p',
          text:
            'Inilah lembah tempat Nabi ﷺ beristirahat setelah cobaan berat di Taif dan memanjatkan doa masyhur ini kepada Allah:',
        },
        {
          type: 'hadith',
          badge: 'Doa Taif',
          arabic:
            'اللَّهُمَّ إِلَيْكَ أَشْكُو ضَعْفَ قُوَّتِي وَقِلَّةَ حِيلَتِي وَهَوَانِي عَلَى النَّاسِ',
          text: 'Ya Allah! Hanya kepada-Mu aku mengadukan kelemahan kekuatanku, keterbatasan dayaku, dan kehinaanku di hadapan manusia.',
          source: 'Ath-Thabrani',
        },
        { type: 'h3', id: 'masjid-addas', text: '6.4 Masjid Addas' },
        {
          type: 'p',
          text:
            'Di sini Addas RA (seorang pelayan) menyuguhkan anggur kepada Nabi ﷺ dan, setelah mendengar “Bismillah”, ia memeluk Islam - momen yang lembut namun sangat berpengaruh dalam sejarah dakwah Islam.',
        },
        { type: 'h3', id: 'masjid-ali-taif', text: '6.5 Masjid Ali RA (Taif)' },
        {
          type: 'p',
          text: 'Terletak dekat Kota Tua Taif - dikaitkan dengan Sayyidina Ali bin Abi Thalib RA.',
        },
        { type: 'h3', id: 'masjid-rasool-taif', text: '6.6 Masjid Rasul ﷺ' },
        {
          type: 'p',
          text: 'Terletak dekat Kota Tua - situs yang terkait dengan perjalanan Nabi ﷺ ke Taif.',
        },
        { type: 'h3', id: 'masjid-wadi-rahmah', text: '6.7 Masjid Wadi Rahmah' },
        {
          type: 'p',
          text:
            'Terletak di Wadi Rahmah yang masyhur di Taif - tempat rahmat Allah mendatangkan ketenangan bagi Nabi ﷺ.',
        },
        { type: 'h3', id: 'qarn-manazil', text: '6.8 Masjid Qarnul Manazil (Miqat Najd)' },
        {
          type: 'p',
          text:
            'Terletak dekat Taif - miqat yang ditetapkan bagi penduduk Najd (batas untuk berihram haji atau umrah).',
        },
        { type: 'h3', id: 'al-shafa', text: '6.9 Al-Syafa' },
        {
          type: 'p',
          text:
            'Al-Syafa adalah dataran tinggi tertinggi dan termasyhur di Taif - bagian dari Pegunungan Sarawat. Terkenal dengan iklimnya yang sejuk dan keindahan alamnya.',
        },
        { type: 'h3', id: 'souq-okaz', text: '6.10 Pasar Ukaz' },
        {
          type: 'p',
          text:
            'Pasar kuno dan masyhur di dunia Arab - pusat perdagangan, sastra, syair, dan penyelesaian hukum.',
        },
        { type: 'h3', id: 'bab-al-raye', text: '6.11 Bab Al-Rai‘ (باب الريع)' },
        {
          type: 'p',
          text: 'Gerbang kota masyhur di Taif kuno - dahulu merupakan bagian dari Tembok Kota Taif.',
        },
        { type: 'h3', id: 'taif-rose', text: '6.12 Taman Mawar Taif (ورد الطائف)' },
        {
          type: 'p',
          text:
            'Ward Taif (Mawar Taif) - varietas mawar yang terkenal di seluruh dunia. Dibudidayakan di sekitar Syafa dan Hada - selama berabad-abad ditanam untuk pembuatan parfum dan wewangian.',
        },
      ],
    },

    // ── Bab 7 - Madinah ──
    {
      id: 'madinah',
      title: 'Bab 7 · Madinah Al-Munawwarah - Situs-situs Suci',
      blocks: [
        { type: 'h3', id: 'madinah-intro', text: '7.1 Madinah Al-Munawwarah' },
        {
          type: 'p',
          text:
            'Kota tersuci kedua dalam Islam - di sinilah Nabi ﷺ meletakkan dasar masyarakat Islam. Nama lamanya adalah Yatsrib; setelah Hijrah disebut “Madinatun Nabi ﷺ” (Kota Nabi).',
        },
        {
          type: 'hadith',
          arabic: 'اللَّهُمَّ حَبِّبْ إِلَيْنَا الْمَدِينَةَ كَحُبِّنَا مَكَّةَ أَوْ أَشَدَّ',
          text:
            'Ya Allah! Jadikanlah kami mencintai Madinah sebagaimana kami mencintai Makkah, atau bahkan lebih.',
          source: 'Sahih Bukhari, 1889',
        },
        { type: 'h3', id: 'riyaz-jannah', text: '7.2 Raudhah' },
        {
          type: 'hadith',
          text:
            'Di antara rumahku (kamar) dan mimbarku terdapat sebuah taman dari taman-taman surga, dan mimbarku berada di atas telagaku. - Nabi ﷺ',
          source: 'Sahih Muslim, 1391',
        },
        { type: 'h3', id: 'jannat-baqi', text: '7.3 Jannatul Baqi' },
        {
          type: 'p',
          text: 'Pemakaman suci yang berada tepat di samping Masjid Nabawi - di sini dimakamkan:',
        },
        {
          type: 'infocard',
          title: 'Ummahatul Mukminin RA (di Jannatul Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Sayyidah Aisyah RA',
                'Sayyidah Hafshah RA',
                'Sayyidah Ummu Salamah RA',
                'Sayyidah Zainab binti Jahsy RA',
                'Sayyidah Zainab binti Khuzaimah RA',
                'Sayyidah Juwairiyah RA',
                'Sayyidah Shafiyyah RA',
                'Sayyidah Ummu Habibah RA',
                'Sayyidah Saudah RA',
              ],
            },
            {
              type: 'note',
              text:
                'Sayyidah Khadijah RA - dimakamkan di Makkah (Jannatul Mu‘alla) | Sayyidah Maimunah RA - dimakamkan di Sarif (dekat Makkah)',
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
                'Sayyidah Fatimah RA (putri Nabi ﷺ)',
                'Sayyidina Hasan bin Ali RA',
                'Sayyidina Abbas RA (paman Nabi ﷺ)',
                'Sayyidina Ali Zainal Abidin (rahimahullah)',
                'Sayyidina Muhammad Al-Baqir (rahimahullah)',
                'Sayyidina Ja‘far Ash-Shadiq (rahimahullah)',
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
                'Sayyidina Utsman bin Affan RA (Khalifah Ketiga)',
                'Sayyidina Sa‘d bin Abi Waqqash RA',
                'Sayyidina Abdurrahman bin Auf RA',
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
            'Terletak dekat Masjid Nabawi - Nabi ﷺ melaksanakan shalat Id dan Istisqa (shalat minta hujan) di sini. Karena berkumpulnya awan untuk hujan, ia dinamai “Ghamamah” (yang berarti: awan).',
        },
        { type: 'h3', id: 'masjid-abubakr', text: '7.5 Masjid Abu Bakar RA' },
        {
          type: 'p',
          text:
            'Terletak dekat Masjid Al-Ghamamah - setelah Nabi ﷺ, Sayyidina Abu Bakar RA mengimami shalat Id di sini.',
        },
        { type: 'h3', id: 'masjid-bilal', text: '7.6 Masjid Bilal RA' },
        {
          type: 'p',
          text:
            'Dikaitkan dengan Sayyidina Bilal bin Rabah RA, muazin pertama dalam Islam - setelah wafatnya Nabi ﷺ, mengumandangkan azan menjadi sangat menyakitkan baginya.',
        },
        { type: 'h3', id: 'masjid-ali-madinah', text: '7.7 Masjid Ali RA (Madinah)' },
        {
          type: 'p',
          text:
            'Dikaitkan dengan Sayyidina Ali bin Abi Thalib RA - sepupu Nabi ﷺ, menantunya, dan Khalifah Rasyidin keempat.',
        },
        { type: 'h3', id: 'masjid-jumah', text: '7.8 Masjid Jum‘ah' },
        {
          type: 'p',
          text:
            'Setelah Hijrah, Nabi ﷺ melaksanakan shalat Jumat pertama di sini - dalam perjalanan dari Quba ke Madinah.',
        },
        { type: 'h3', id: 'masjid-quba', text: '7.9 Masjid Quba' },
        {
          type: 'p',
          text:
            'Masjid pertama dalam Islam - setelah Hijrah, Nabi ﷺ terlebih dahulu meletakkan dasar masjid ini.',
        },
        {
          type: 'hadith',
          badge: 'Hadis - Keutamaan',
          text:
            'Barang siapa berwudu di rumahnya lalu datang ke Masjid Quba dan shalat di sana, ia memperoleh pahala setara Umrah.',
          source: 'Sunan Ibnu Majah, 1412',
        },
        { type: 'h3', id: 'ring-well', text: '7.10 Sumur Cincin (Bir Al-Khatam)' },
        {
          type: 'p',
          text:
            'Dikaitkan dengan cincin perak Nabi ﷺ (yang bertuliskan “Muhammad Rasulullah”). Menurut riwayat, cincin itu jatuh ke sumur ini pada masa Sayyidina Utsman RA.',
        },
        { type: 'h3', id: 'bir-ruma', text: '7.11 Bir Ruma' },
        {
          type: 'p',
          text:
            'Sayyidina Utsman bin Affan RA membeli sumur ini dan mewakafkannya di jalan Allah - amal sedekah jariah terbesar dalam sejarah Islam.',
        },
        { type: 'h3', id: 'bir-ghars', text: '7.12 Bir Ghars' },
        {
          type: 'p',
          text:
            'Sumber air favorit Nabi ﷺ - beliau berwasiat agar setelah wafatnya, jenazahnya dimandikan dengan air dari Bir Ghars.',
        },
        { type: 'h3', id: 'bustan-mustaqbal', text: '7.13 Bustan Al-Mustaqbal' },
        {
          type: 'p',
          text:
            'Taman publik modern di Madinah - lingkungan ramah keluarga dengan area bermain anak dan jalur pejalan kaki. Bukan situs keagamaan, melainkan taman rekreasi modern kota.',
        },
        { type: 'h3', id: 'masjid-qiblatain', text: '7.14 Masjid Qiblatain' },
        {
          type: 'p',
          text:
            'Tempat kiblat diubah di tengah shalat - dari Baitul Maqdis ke Ka’bah. “Qiblatain” berarti: dua kiblat.',
        },
        {
          type: 'note',
          text:
            'Di dalamnya terdapat dua mihrab - kiblat lama dan baru. Sekitar 5 km dari Masjid Nabawi ﷺ.',
        },
        { type: 'h3', id: 'jabal-khandaq', text: '7.15 Jabal Khandaq + Tujuh Masjid' },
        {
          type: 'p',
          text:
            'Perang Khandaq (Ahzab) - pada 5 H, pasukan musuh lebih dari 10.000 orang menghadapi 3.000 kaum muslimin - atas saran Salman Al-Farisi RA, sebuah parit digali. Allah menolong kaum muslimin melalui badai angin dan para malaikat.',
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
          text: 'Uhud adalah gunung yang mencintai kita dan kita mencintainya. - Nabi ﷺ',
          source: 'Sahih Muslim, 1393',
        },
        {
          type: 'p',
          text:
            '3 H - 3.000 pasukan di bawah Abu Sufyan melawan 700 kaum muslimin. Ketika para pemanah meninggalkan posisi mereka, musuh menyerang dari belakang - jalannya perang pun berbalik. Nabi ﷺ terluka namun tidak mengutuk, beliau hanya berdoa: “Ya Allah! Berilah petunjuk kepada kaumku.”',
        },
        { type: 'h3', id: 'martyrs-uhud', text: '7.20 Pemakaman Para Syuhada Uhud' },
        {
          type: 'p',
          text: '70 sahabat RA gugur syahid dalam Perang Uhud - mereka dimakamkan di sini.',
        },
        {
          type: 'infocard',
          title: 'Sayyidus Syuhada - Sayyidina Hamzah bin Abdul Muththalib RA',
          blocks: [
            {
              type: 'p',
              text:
                'Paman Nabi ﷺ - syahid terbesar dalam perang ini - gelar “Sayyidus Syuhada” (Penghulu Para Syuhada) dianugerahkan kepadanya oleh Nabi ﷺ.',
            },
          ],
        },
        uhudMartyrsTable(['#', 'Nama', 'Kelompok'], 'Para Syuhada Uhud'),
        {
          type: 'note',
          text:
            'Tidak ada kesepakatan ulama atas seluruh 70 nama - riwayat-riwayat berbeda - namun mereka semua adalah para syuhada besar Islam.',
        },
        { type: 'h3', id: 'cave-uhud', text: '7.18 Gua Uhud + 7.19 Masjid Al-Fasih' },
        {
          type: 'p',
          text:
            'Setelah Perang Uhud, Nabi ﷺ beristirahat di gua kecil (Gua Uhud) di Jabal Uhud - sementara para sahabat RA berjaga. Masjid Al-Fasih berada di bawah gua ini - dibangun kemudian - menandai tempat Nabi ﷺ shalat.',
        },
        { type: 'h3', id: 'house-fatima', text: '7.21 Rumah Sayyidah Fatimah RA' },
        {
          type: 'p',
          text:
            'Di sisi timur Masjid Nabawi ﷺ - kini termasuk dalam perluasan Masjid Nabawi. Sebuah rumah yang sangat kecil dan sederhana - di sinilah Imam Hasan RA dan Imam Husain RA dibesarkan.',
        },
      ],
    },

    // ── Bab 8 - Badar ──
    {
      id: 'badr',
      title: 'Bab 8 · Badar - Situs-situs Suci',
      blocks: [
        { type: 'h3', id: 'battle-badr', text: '8.1 Perang Badar' },
        {
          type: 'p',
          text:
            '17 Ramadan, 2 H - perang pertama dan penentu dalam Islam. Sekitar 130 km barat daya Madinah. Kaum muslimin: 313 (2 kuda, 70 unta) melawan Quraisy: 1.000.',
        },
        {
          type: 'callout',
          text:
            'Tujuannya adalah kafilah dagang, bukan peperangan - tetapi Quraisy memaksakan perang. Allah mengirim 1.000 malaikat sebagai pertolongan - 70 orang kafir terbunuh, 70 tertawan, dan 14 kaum muslimin gugur syahid.',
        },
        { type: 'h3', id: 'masjid-areesh', text: '8.2 Masjid Al-Arisy' },
        {
          type: 'p',
          text:
            'Terletak dekat medan perang Badar - di mana Nabi ﷺ berdoa dengan begitu khusyuk pada hari Badar hingga selendangnya terjatuh dari pundaknya - Sayyidina Abu Bakar RA menghiburnya: “Wahai Rasulullah ﷺ, Allah pasti menepati janji-Nya.”',
        },
        { type: 'h3', id: 'descent-angels', text: '8.3 Turunnya Para Malaikat (Pertolongan Ilahi)' },
        {
          type: 'verse',
          arabic:
            'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
          translation:
            'Ketika kalian memohon pertolongan kepada Tuhan kalian, lalu Dia mengabulkannya: Sesungguhnya Aku akan menolong kalian dengan seribu malaikat yang datang berturut-turut.',
          reference: 'Surah Al-Anfal (8:9)',
        },
        { type: 'h3', id: 'martyrs-badr', text: '8.4 Pemakaman Para Syuhada Badar' },
        {
          type: 'p',
          text: 'Terletak dekat medan perang Badar - 14 sahabat RA dimakamkan di sini.',
        },
        badrMartyrsTable(['#', 'Nama', 'Kelompok'], 'Para Syuhada Badar'),
      ],
    },

    // ── Lampiran - Istri dan Anak ──
    {
      id: 'family',
      title: 'Lampiran · Istri dan Anak Nabi ﷺ',
      blocks: [
        {
          type: 'h3',
          id: 'wives',
          text: 'Istri-istri Nabi ﷺ (Ummahatul Mukminin) - 11 Istri',
        },
        {
          type: 'note',
          text: 'Pada saat Nabi ﷺ wafat, 9 istri masih hidup.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Sayyidah Khadijah binti Khuwailid RA',
              text:
                'Pernikahan: Nabi ﷺ usia 25 | Khadijah RA usia 40 | Pernikahan pertama dan terlama (25 tahun) | Orang pertama yang memeluk Islam',
            },
            {
              title: 'Sayyidah Saudah binti Zam‘ah RA',
              text: 'Pernikahan: Nabi ﷺ usia 50 | Beliau seorang janda yang tidak memiliki sandaran',
            },
            {
              title: 'Sayyidah Aisyah binti Abu Bakar RA',
              text: 'Pertunangan: usia 6 | Pernikahan disempurnakan: usia 9 | Usia Nabi ﷺ: sekitar 53',
            },
            {
              title: 'Sayyidah Hafshah binti Umar RA',
              text: 'Pernikahan: Nabi ﷺ usia 54 | Janda seorang syuhada',
            },
            {
              title: 'Sayyidah Zainab binti Khuzaimah RA',
              text: 'Pernikahan: usia 55 | Gelar: Ummul Masakin (Ibu kaum miskin) | Wafat: 8 bulan kemudian',
            },
            {
              title: 'Sayyidah Ummu Salamah RA',
              text: 'Pernikahan: usia 56 | Janda dengan anak-anak',
            },
            {
              title: 'Sayyidah Zainab binti Jahsy RA',
              text: 'Pernikahan: usia 57 | Catatan khusus: atas perintah Allah dalam Al-Qur’an (Surah Ahzab)',
            },
            {
              title: 'Sayyidah Juwairiyah binti Harits RA',
              text: 'Pernikahan: usia 58 | Dampak: seluruh kabilahnya dibebaskan',
            },
            {
              title: 'Sayyidah Ummu Habibah RA',
              text: 'Pernikahan: usia 59 | Akad nikah berlangsung di Habasyah',
            },
            {
              title: 'Sayyidah Shafiyyah binti Huyay RA',
              text: 'Pernikahan: usia 59 | Nasab: dari keluarga Yahudi',
            },
            {
              title: 'Sayyidah Maimunah binti Harits RA',
              text: 'Pernikahan: usia 60 | Pernikahan terakhir',
            },
          ],
        },
        { type: 'h3', id: 'children', text: 'Anak-anak Nabi ﷺ - Total 7' },
        {
          type: 'table',
          columns: ['#', 'Nama', 'Ibu', 'Wafat'],
          rows: [
            ['1', 'Sayyidina Qasim RA', 'Sayyidah Khadijah RA', 'Masa kanak-kanak (di bawah 2 tahun)'],
            ['2', 'Sayyidina Abdullah RA', 'Sayyidah Khadijah RA', 'Masa kanak-kanak'],
            ['3', 'Sayyidah Zainab RA', 'Sayyidah Khadijah RA', 'Pada usia 31'],
            ['4', 'Sayyidah Ruqayyah RA', 'Sayyidah Khadijah RA', 'Pada usia 22'],
            ['5', 'Sayyidah Ummu Kultsum RA', 'Sayyidah Khadijah RA', 'Pada usia 29'],
            ['6', 'Sayyidah Fatimah RA', 'Sayyidah Khadijah RA', 'Usia 29 - 6 bulan setelah wafatnya Nabi ﷺ'],
            ['7', 'Sayyidina Ibrahim RA', 'Mariyah Al-Qibtiyah RA', 'Pada usia 18 bulan'],
          ],
        },
        { type: 'h3', id: 'children-details', text: 'Anak-anak dari Para Istri (Rincian)' },
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
              text: 'Suami: Sayyidina Utsman bin Affan RA | Anak: Abdullah RA (wafat semasa kecil)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Sayyidah Ummu Kultsum RA',
          blocks: [{ type: 'p', text: 'Suami: Sayyidina Utsman RA | Tidak memiliki anak' }],
        },
        {
          type: 'infocard',
          title: 'Sayyidah Fatimah RA',
          blocks: [
            {
              type: 'p',
              text:
                'Suami: Sayyidina Ali bin Abi Thalib RA | Anak: Hasan RA, Husain RA, Muhsin RA (wafat), Zainab RA, Ummu Kultsum RA',
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
            'Panduan ini tidak ditulis untuk pamer atau menunjukkan diri, melainkan disusun semata-mata untuk bimbingan yang benar bagi umat Islam.',
        },
        {
          type: 'p',
          text:
            'Seluruh ziarah, peristiwa, dan situs suci yang disebutkan di dalamnya telah disajikan dalam sinaran Al-Qur’an, hadis sahih, dan riwayat-riwayat yang tepercaya.',
        },
        {
          type: 'p',
          text:
            'Upaya kami adalah agar perjalanan ini bukan sekadar wisata tempat, melainkan perjalanan iman, perenungan, dan keyakinan - di mana pada setiap langkah terasa ajaran Nabi ﷺ, pengorbanan para sahabat RA, dan ruh Islam.',
        },
        { type: 'callout', text: 'آمِيْن يَا رَبَّ الْعَالَمِيْن' },
      ],
    },
  ],
};

export default guide;
