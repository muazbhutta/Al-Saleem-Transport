import type { Guide } from './types';
import { uhudMartyrsTable, badrMartyrsTable } from './shared';

/**
 * Roman Urdu (ur-Latn) Ziyarat guide - MACHINE-ASSISTED DRAFT, ilmi nazar-sani
 * ke muntazir. Arabi Qur'an ki ayaat aur ahadith bighair tabdeeli ke rakhi gayi
 * hain; sirf shar'h/tarjuma Roman Urdu mein hai. Shohada ke naam shared Latin
 * table se aate hain.
 */
const guide: Guide = {
  title: 'Mukammal Ziyarat Guide',
  intro:
    'Muqaddas maqamaat ke safar ka rafeeq - Makkah o Madinah ke mubarak maqamaat, Umrah o Hajj ke marahil, aur har zaair ki aarzu ke tareekhi maqamaat. Safar se pehle parhein aur raaste mein saath rakhein.',
  chapters: [
    // ── Bab 1 - Makkah ──
    {
      id: 'makkah',
      title: 'Bab 1 · Makkah Mukarramah - Ta‘aruf',
      intro:
        'Makkah Mukarramah Islam ka muqaddas tareen shehar hai. Yahi wo jagah hai jahan Ka‘bah waqe hai, jise Allah Ta‘ala ne tamam insaniyat ke liye ibadat ka markaz banaya hai. Makkah mahaz ek shehar nahi balke tauheed, aman aur hidayat ka mukammal nizaam hai.',
      blocks: [
        { type: 'h3', id: 'kabah', text: '1.1 Ka‘bah - Ibadat ka pehla ghar' },
        {
          type: 'verse',
          arabic:
            'إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ ۝ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا',
          translation:
            'Be shak sab se pehla ghar jo logon ke liye muqarrar kiya gaya wahi hai jo Makkah (Bakkah) mein hai, barkat wala aur saare jahanon ke liye hidayat. Is mein khuli nishaniyan hain, Maqam-e-Ibrahim. Aur jo is mein daakhil hua wo aman mein aa gaya.',
          reference: 'Surah Aal-e-Imran (3:96-97)',
        },
        {
          type: 'list',
          items: [
            'Ka‘bah ibadat ka pehla maqam hai',
            '"Bakkah" Makkah ka qadeem naam hai',
            'Makkah aman o salamati ki jagah hai',
            'Hidayat sirf Arabon ke liye nahi balke poori insaniyat ke liye hai',
          ],
        },
        { type: 'h3', id: 'greatness-city', text: '1.2 Shehar ki azmat' },
        {
          type: 'verse',
          arabic: 'لَا أُقْسِمُ بِهَذَا الْبَلَدِ ۝ وَأَنتَ حِلٌّ بِهَذَا الْبَلَدِ',
          translation:
            'Main is shehar (Makkah) ki qasam khata hoon, aur (aye Nabi ﷺ) aap is shehar mein muqeem hain.',
          reference: 'Surah Al-Balad (90:1-2)',
        },
        { type: 'h3', id: 'prayer-ibrahim', text: '1.3 Makkah ke liye Ibrahim AS ki dua' },
        {
          type: 'verse',
          arabic:
            'وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ اجْعَلْ هَذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ',
          translation:
            'Aur jab Ibrahim AS ne dua ki: Aye mere Rab! Is shehar ko aman wala bana de aur is ke bashindon ko phalon ka rizq ata farma.',
          reference: 'Surah Al-Baqarah (2:126)',
        },
        { type: 'h3', id: 'reward-haram', text: '1.4 Masjid-ul-Haram mein namaz ka ajr' },
        {
          type: 'hadith',
          arabic:
            'صَلَاةٌ فِي مَسْجِدِي هَذَا أَفْضَلُ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ، وَصَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ',
          text:
            'Meri is masjid (Masjid-e-Nabawi ﷺ) mein ek namaz doosri masjidon ki hazar namazon se afzal hai, siwaye Masjid-ul-Haram ke. Aur Masjid-ul-Haram mein ek namaz doosri masjidon ki ek laakh namazon se afzal hai.',
          source: 'Sunan Ibn Majah, 1406',
        },
        { type: 'h3', id: 'love-prophet-makkah', text: '1.5 Nabi ﷺ ki Makkah se muhabbat' },
        {
          type: 'hadith',
          text:
            'Allah ki qasam! Tu Allah ki behtareen sarzameen hai aur Allah ko sab sarzameenon mein sab se ziyada mehboob hai. Agar mujhe (zabardasti) na nikala jata to main tujhe kabhi na chhorta.',
          source: 'Jami Tirmizi, 3925 / Sunan Ibn Majah, 3108',
        },
      ],
    },

    // ── Bab 2 - Umrah ──
    {
      id: 'umrah',
      title: 'Bab 2 · Umrah',
      blocks: [
        { type: 'h3', id: 'what-is-umrah', text: '2.1 Umrah kya hai?' },
        {
          type: 'p',
          text:
            'Umrah ek ibadat hai jo Masjid-ul-Haram (Makkah) mein ada ki jati hai. Maqsad ke aitbaar se Umrah ko "chhota Hajj" bhi kaha jata hai.',
        },
        { type: 'h3', id: 'benefits-umrah', text: '2.2 Umrah ke fawaid kya hain?' },
        {
          type: 'hadith',
          text:
            'Ek Umrah doosre Umrah tak un gunahon ka kaffara hai jo un ke darmiyan hon, aur Hajj-e-Mabroor ka badla Jannat ke siwa kuch nahi.',
          source: 'Sahih Bukhari, 1773 / Sahih Muslim, 1349a',
        },
        { type: 'h3', id: 'pillars-umrah', text: '2.4 Umrah ke arkaan' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Miqat par niyat aur ihram ka libaas' },
            { title: 'Tawaf', text: 'Ka‘bah ke gird saat chakkar' },
            { title: 'Sa‘i', text: 'Safa o Marwah ke darmiyan saat phere' },
            { title: 'Halaq / Qasr', text: 'Sar mundwana ya baal katarwana' },
          ],
        },
        { type: 'h3', id: 'method-umrah', text: '2.5 Umrah ka sahih tareeqa' },
        { type: 'h4', text: 'Ihram' },
        {
          type: 'list',
          items: [
            'Miqat par ghusl (Sunnat)',
            'Mard: do safaid baghair sili chadrein',
            'Khawateen: muhazzab libaas, chehra khula',
            'Dil se niyat',
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
            'Ka‘bah ke gird saat chakkar (Hajr-e-Aswad se shuru)',
            'Mard: pehle teen chakkaron mein tez chaal (Ramal)',
            'Hajr-e-Aswad ko bosa (agar mumkin ho) ya ishara',
            'Rukn-e-Yamani se Hajr-e-Aswad tak: Rabbana atina fid-dunya hasanatan…',
            'Do rak‘at namaz (Maqam-e-Ibrahim ke qareeb)',
          ],
        },
        { type: 'h4', text: 'Sa‘i (Safa-Marwah)' },
        {
          type: 'verse',
          arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
          translation: 'Be shak Safa aur Marwah Allah ki nishaniyon mein se hain.',
          reference: 'Surah Al-Baqarah (2:158)',
        },
        {
          type: 'list',
          items: [
            'Safa se shuru, Marwah par khatam - saat phere',
            'Sabz roshniyon ke darmiyan: Mard tez chalein, Khawateen mamool ki raftaar se',
          ],
        },
        { type: 'h3', id: 'supplications-umrah', text: '2.7 Umrah ki aham duayein' },
        {
          type: 'hadith',
          badge: 'Dua',
          arabic:
            'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
          text:
            'Aye Allah! Humein duniya mein bhalai ata farma aur aakhirat mein bhi bhalai, aur humein aag ke azaab se bacha.',
          source: 'Sahih Bukhari, 6389',
        },
      ],
    },

    // ── Bab 3 - Hajj ──
    {
      id: 'hajj',
      title: 'Bab 3 · Hajj',
      blocks: [
        { type: 'h3', id: 'what-is-hajj', text: '3.1 Hajj kya hai?' },
        {
          type: 'verse',
          arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
          translation:
            'Aur Allah ke liye logon par is ghar ka Hajj farz hai, jo wahan tak pohanchne ki istita‘at rakhta ho.',
          reference: 'Surah Aal-e-Imran (3:97)',
        },
        {
          type: 'list',
          items: [
            'Hajj Islam ka paanchwan rukn hai',
            'Ye sirf un par farz hai jo jismani aur maali taur par istita‘at rakhte hon',
            'Zindagi mein sirf ek baar farz hai',
          ],
        },
        { type: 'h3', id: 'pillars-hajj', text: '3.4 Hajj ke arkaan' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Niyat aur ihram ka libaas' },
            { title: 'Wuquf-e-Arafah', text: '9 Zul-Hijjah - Farz rukn' },
            { title: 'Tawaf-e-Ifadah', text: 'Farz Tawaf' },
            { title: 'Sa‘i', text: 'Safa-Marwah' },
          ],
        },
        { type: 'h3', id: 'method-hajj', text: '3.5 Hajj ka sahih tareeqa (marhala waar)' },
        {
          type: 'infocard',
          title: '8 Zul-Hijjah (Youm-e-Tarwiyah) - Mina',
          blocks: [
            {
              type: 'list',
              items: ['Mina pohanchein, paanch namazein ada karein', 'Mina mein raat guzarein (Sunnat)'],
            },
          ],
        },
        {
          type: 'infocard',
          title: '9 Zul-Hijjah (Youm-e-Arafah) - Wuquf-e-Arafah',
          blocks: [
            { type: 'note', variant: 'warning', text: 'Arafah ke baghair Hajj nahi hota!' },
            {
              type: 'list',
              items: [
                'Zuhr se Maghrib tak Arafat mein qiyaam - ye Hajj ka sab se bara rukn hai',
                'Dua, istighfaar, tasbeeh',
                'Phir Muzdalifah ki taraf rawangi - Maghrib aur Isha ko mila kar parhein',
                'Muzdalifah mein raat guzarein (9-10 Zul-Hijjah ki raat)',
                '70 kankariyan jama karein',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '10 Zul-Hijjah (Youm-e-Qurbani) - 4 A‘maal',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Rami - sirf Jamrat-ul-Aqabah (bara sutoon) - 7 kankariyan',
                'Qurbani',
                'Sar mundwana ya baal katarwana',
                'Tawaf-e-Ifadah + Sa‘i',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '11-13 Zul-Hijjah (Ayyam-e-Tashreeq) - Rami',
          blocks: [
            { type: 'p', text: 'Har roz teenon Jamarat ko kankariyan maarna:' },
            {
              type: 'table',
              columns: ['Jamrah', 'Hajm', 'Kankariyan'],
              rows: [
                ['Jamrat-ul-Ula', 'Chhota', '7 kankariyan'],
                ['Jamrat-ul-Wusta', 'Darmiyana', '7 kankariyan'],
                ['Jamrat-ul-Aqabah', 'Bara', '7 kankariyan'],
              ],
            },
            { type: 'note', text: 'Kam az kam laazmi = 49 kankariyan | Mukammal Sunnat = 70 kankariyan' },
          ],
        },
      ],
    },

    // ── Bab 4 - Hajj ki tafseel ──
    {
      id: 'hajj-details',
      title: 'Bab 4 · Hajj ki tafseel aur muqaddas maqamaat',
      blocks: [
        { type: 'h3', id: 'masjid-nimra', text: '4.1 Masjid Nimra - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Masjid Nimra Makkah Mukarramah ke qareeb maidan-e-Arafat mein waqe hai. Yahi wo jagah hai jahan Nabi ﷺ ne Hajjat-ul-Wida‘ ke mauqe par tareekhi khutba diya, jis mein Islam ki buniyadi ta‘leemaat wazeh taur par bayan hui.',
        },
        {
          type: 'note',
          variant: 'warning',
          text:
            'Aham: Masjid Nimra sirf 9 Zul-Hijjah (Youm-e-Arafah) ko khulti hai - saal bhar band rehti hai. Sirf isi din azaan, khutba aur Zuhr o Asr ki jama namaz ada ki jati hai.',
        },
        { type: 'h3', id: 'jabal-rehmat', text: '4.2 Jabal-e-Rehmat - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Jabal-e-Rehmat Arafat ke wast mein waqe ek chhoti pahari hai, jise "Rehmat ka pahar" bhi kaha jata hai. Yahi wo maqam hai jahan Hazrat Adam AS aur Hawwa (alaiha salam) zameen par utarne ke baad pehli baar mile.',
        },
        { type: 'h3', id: 'muzdalifah', text: '4.3 Muzdalifah - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Muzdalifah Arafat aur Mina ke darmiyan waqe ek wadi ka naam hai. Qur’an mein ise "Mash‘ar-ul-Haram" kaha gaya hai.',
        },
        {
          type: 'list',
          items: [
            'Arafat ke baad Muzdalifah mein Maghrib aur Isha ko mila kar parhein',
            '9-10 Zul-Hijjah ki raat (Shab-e-Muzdalifah) - ibadat mein raat guzarein',
            'Fajr tak thehrna waajib hai',
            'Rami ke liye 70 kankariyan jama karein',
          ],
        },
        { type: 'h3', id: 'wadi-muhassir', text: '4.4 Wadi-e-Muhassir - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Wadi-e-Muhassir Muzdalifah aur Mina ke darmiyan waqe ek wadi hai - ye Ashaab-e-Feel ke waqe ki yaad dilati hai, jahan Allah ne Ababeel parindon ke zariye azaab bheja. Ye ibrat aur ghaur o fikr ka maqam hai.',
        },
        { type: 'h3', id: 'mina', text: '4.5 Mina - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Mina Makkah ki muqaddas wadi hai jahan Hajj ke kai aham a‘maal ada kiye jate hain: Rami-e-Jamarat, Qurbani, Halaq/Qasr aur Ayyam-e-Tashreeq.',
        },
        { type: 'h3', id: 'masjid-khaif', text: '4.6 Masjid-ul-Khaif (Mina)' },
        {
          type: 'p',
          text:
            'Masjid-ul-Khaif Mina ki qadeem aur muqaddas tareen masajid mein se ek hai. Ise "Ambiya ki masjid" bhi kaha jata hai kyunke yahan 70 ya 100 ambiya ne namaz parhi.',
        },
        { type: 'h3', id: 'jamarat', text: '4.8 Jamarat - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Jamarat Mina mein teen maqamaat hain jahan haaji Shaitan ki numaindagi karne wale sutoonon ko kankariyan maarte hain - ye Hazrat Ibrahim AS ke amal ki yaadgaar hai.',
        },
        {
          type: 'table',
          columns: ['Jamrah', 'Tafseel'],
          rows: [
            ['Jamrat-ul-Ula', 'Sab se chhota sutoon'],
            ['Jamrat-ul-Wusta', 'Darmiyana sutoon'],
            ['Jamrat-ul-Aqabah', 'Sab se bara sutoon'],
          ],
        },
        { type: 'h3', id: 'masjid-bayah', text: '4.9 Masjid-ul-Bay‘ah (Aqabah) - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Masjid-ul-Bay‘ah Mina ke qareeb, Jamrat-ul-Aqabah ke paas waqe hai. Yahi wo jagah hai jahan Madinah ke Ansar ne Nabi ﷺ se do azeem bay‘atein ki (Nabuwwat ke 12ven aur 13ven saal).',
        },
      ],
    },

    // ── Bab 5 - Qabristan aur masajid ──
    {
      id: 'graves-mosques',
      title: 'Bab 5 · Qabristan aur masajid - Muqaddas maqamaat',
      blocks: [
        {
          type: 'hadith',
          badge: 'Hadith - Ziyarat-e-Quboor',
          text: 'Main ne tumhein qabron ki ziyarat se roka tha, lekin ab un ki ziyarat karo. - Nabi ﷺ',
          source: 'Sahih Muslim, 977',
        },
        { type: 'h3', id: 'jannat-mualla', text: '5.1 Jannat-ul-Mu‘alla' },
        {
          type: 'p',
          text:
            'Jannat-ul-Mu‘alla Makkah Mukarramah ka qadeem tareen aur muqaddas tareen qabristan hai. Yahan madfoon hain: Hazrat Khadijah RA, Abu Talib, Abdullah bin Zubair RA, Umm-e-Hani RA, aur Quraish ke azeem buzurg.',
        },
        { type: 'h3', id: 'masjid-jinn', text: '5.2 Masjid-ul-Jinn' },
        {
          type: 'p',
          text:
            'Yahan jinnon ke ek giroh ne Nabi ﷺ ki tilawat suni aur Islam qubool kiya, aur aap ki hifazat ka ahad kiya - isi waqe ki yaad mein ye masjid banai gayi.',
        },
        { type: 'h3', id: 'masjid-shajar', text: '5.3 Masjid Shajar' },
        {
          type: 'p',
          text:
            'Yahan ek darakht ne Nabi ﷺ ko pehchana, salaam ke liye jhuka, aur aap ki Nabuwwat ki gawahi di - isi mo‘jizati waqe ke maqam par ye masjid banai gayi.',
        },
        { type: 'h3', id: 'masjid-fath', text: '5.4 Masjid-ul-Fath (Masjid-ur-Rayah)' },
        {
          type: 'p',
          text: 'Jabal-ul-Fath par waqe - Fatah-e-Makkah ke mauqe par yahan Islam ka jhanda buland kiya gaya.',
        },
        { type: 'h3', id: 'masjid-hijaba', text: '5.5 Masjid-ul-Hijabah' },
        {
          type: 'p',
          text:
            'Ye masjid "Hijabah" se mausoom hai - yani Ka‘bah ko kholne, band karne aur us ki hifazat ki zimmedari. Fatah-e-Makkah ke din Nabi ﷺ ne farmaya: "Aaj se Ka‘bah ki kaleed-bardari tumhare paas rahegi; Qiyamat tak tumhare haathon mein rahegi."',
        },
        { type: 'h3', id: 'masjid-mawlid', text: '5.6 Nabi ﷺ ki jaaye paidaish - Masjid-ul-Mawlid' },
        {
          type: 'p',
          text:
            'Nabi ﷺ Makkah Mukarramah mein Banu Hashim ke ghar paida hue. Wiladat: 12 Rabi-ul-Awwal, Aam-ul-Feel - taqreeban 570 Esvi.',
        },
        { type: 'h3', id: 'qasr-saqf', text: '5.7 Qasr-e-Saqf (قَصْرُ السَّقِيفِ)' },
        {
          type: 'p',
          text:
            'Makkah Mukarramah ka ek qadeem tareekhi maqam - Banu Hashim ke puraane gharon se mansoob. "Saqf" ka matlab chhat ya panah hai.',
        },
        { type: 'h3', id: 'maqbarat-adl', text: '5.8 Maqbarat-ul-Adl' },
        {
          type: 'p',
          text:
            'Makkah ka ek tareekhi qabristan jahan Islami sazaayein nafiz ki jati theen. Ilaqe ka naam "Al-Adl" (insaaf) se maakhooz hai.',
        },
        { type: 'h3', id: 'martyrs-cemetery-makkah', text: '5.9 Shohada ka qabristan' },
        {
          type: 'p',
          text: 'Makkah mein Al-Ji‘ranah road ke qareeb waqe - yahan mukhtalif ghazwaat ke shohada madfoon hain.',
        },
        { type: 'h3', id: 'wad-ul-banat', text: '5.10 Wa’d ul-Banat - Betiyon ko zinda dafan karna' },
        {
          type: 'verse',
          arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ۝ بِأَيِّ ذَنبٍ قُتِلَتْ',
          translation: 'Aur jab zinda dafan ki gayi larki se poocha jayega ke wo kis gunah mein maari gayi?',
          reference: 'Surah At-Takwir (81:8-9)',
        },
        {
          type: 'p',
          text:
            'Daur-e-Jahiliyat mein ba‘z Arab qabail apni betiyon ko zinda dafan kar dete the. Nabi ﷺ ki aamad ke baad is amal ko haraam qaraar diya gaya, aur betiyon ko rehmat kaha gaya.',
        },
        { type: 'h3', id: 'masjid-taneem', text: '5.11 Masjid Tan‘eem (Masjid Aishah RA)' },
        {
          type: 'p',
          text:
            'Makkah ke sab se qareeb Miqat - Makkah mein muqeem afraad yahan se Umrah ka ihram baandhte hain.',
        },
        { type: 'h3', id: 'masjid-jiranah', text: '5.12 Masjid-ul-Ji‘ranah' },
        {
          type: 'p',
          text: 'Makkah ka ek aham Miqat - Masjid Tan‘eem ke baad sab se ma‘roof Miqat.',
        },
        { type: 'h3', id: 'masjid-hudaibiyah', text: '5.13 Masjid Sulh-e-Hudaibiyah' },
        {
          type: 'p',
          text:
            '6 Hijri mein Nabi ﷺ aur Quraish ke darmiyan Sulh-e-Hudaibiyah ka maqam - yahin Bay‘at-ur-Ridwan bhi hui.',
        },
        {
          type: 'verse',
          arabic:
            'لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ',
          translation: 'Be shak Allah momineen se raazi ho gaya jab wo darakht ke neeche aap se bay‘at kar rahe the.',
          reference: 'Surah Al-Fath (48:18)',
        },
        { type: 'h3', id: 'jabal-noor', text: '5.14 Jabal-e-Noor + Ghar-e-Hira' },
        {
          type: 'p',
          text: 'Yahan pehli wahi nazil hui - Surah Al-Alaq (96:1-5). Islam ka aaghaz isi jagah hua.',
        },
        { type: 'h3', id: 'jabal-thawr', text: '5.15 Jabal-e-Thawr + Ghar-e-Thawr' },
        {
          type: 'p',
          text:
            'Hijrat ke mauqe par Nabi ﷺ aur Abu Bakr Siddique RA ne yahan teen raatein guzarein. Allah ki khaas hifazat mein - makri ke jaale aur kabootar ke andon ke mo‘jizati waqiaat.',
        },
        {
          type: 'verse',
          arabic: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
          translation: 'Jab wo apne saathi se keh rahe the: Gham na kar, be shak Allah hamare saath hai.',
          reference: 'Surah At-Tawbah (9:40)',
        },
        { type: 'h3', id: 'jabal-khandama', text: '5.16 Jabal-e-Khandama' },
        {
          type: 'p',
          text:
            'Makkah ka ek tareekhi pahar - Fatah-e-Makkah ke mauqe par Nabi ﷺ ne shehar mein daakhil hone ke liye is ke qareeb raasta ikhtiyaar kiya.',
        },
        { type: 'h3', id: 'kiswah-museum', text: '5.17 Kiswah Museum' },
        {
          type: 'p',
          text:
            'Kiswah (Ka‘bah ka siyah reshmi ghilaaf) ke liye makhsoos ek shaandaar museum. Har saal 9 Zul-Hijjah ko puraana Kiswah utaar kar naya charhaya jata hai - jis par sone aur chandi ke taaron se Qur’ani ayaat kandah hoti hain.',
        },
        { type: 'h3', id: 'zubaida-aqueduct', text: '5.18 Zubaida ki nehar' },
        {
          type: 'p',
          text:
            'Sayyida Zubaida bint Ja‘far (Abbasi khalifa Haroon-ur-Rasheed ki ahliya) ne Taif ke paharon se Makkah tak ek shaandaar aabi nehar ki ta‘meer ka zaati kharch uthaya - haajiyon ki khidmat ke liye. Apne daur ka sab se bara falahi mansooba.',
        },
      ],
    },

    // ── Bab 6 - Taif ──
    {
      id: 'taif',
      title: 'Bab 6 · Taif - Muqaddas maqamaat',
      blocks: [
        { type: 'h3', id: 'taif-intro', text: '6.1 Taif ka ta‘aruf' },
        {
          type: 'p',
          text:
            'Taif Saudi Arab ka ek mashhoor aur tareekhi shehar hai - Makkah ke mashriq mein Sarawat paharon mein waqe. Nabuwwat ke daswen saal Nabi ﷺ ne Taif ka safar kiya. Taif ke logon ne aap par patthar barsaye - phir bhi Nabi ﷺ ne un par la‘nat nahi ki balke un ke liye rehmat ki dua ki.',
        },
        {
          type: 'callout',
          text:
            '"Taif wo shehar hai jahan patthar barsaye gaye, magar jawab mein duayein buland hui - aur jahan takleef di gayi, magar isi se rehmat ke ek naye daur ka aaghaz hua."',
        },
        { type: 'h3', id: 'ibn-abbas', text: '6.2 Hazrat Abdullah bin Abbas RA - Ta‘aruf' },
        {
          type: 'p',
          text:
            'Nabi ﷺ ke chachazaad - Islam mein "Tarjuman-ul-Qur’an" ke naam se mashhoor. 68 Hijri mein Taif mein wafaat pai aur wahin madfoon hue - baad mein maqam par maqbara aur masjid banai gayi.',
        },
        {
          type: 'hadith',
          badge: 'Dua-e-Nabawi',
          arabic: 'اللَّهُمَّ عَلِّمْهُ الْحِكْمَةَ وَتَأْوِيلَ الْكِتَابِ',
          text: 'Aye Allah! Ise deen ki samajh ata farma aur Qur’an ki taaweel sikha.',
          source: 'Sunan Ibn Majah, 166',
        },
        { type: 'h3', id: 'wadi-mathna', text: '6.3 Wadi-e-Mathna' },
        {
          type: 'p',
          text:
            'Ye wo wadi hai jahan Nabi ﷺ Taif ki sakht aazmaish ke baad thehre aur Allah se ye mashhoor dua ki:',
        },
        {
          type: 'hadith',
          badge: 'Dua-e-Taif',
          arabic:
            'اللَّهُمَّ إِلَيْكَ أَشْكُو ضَعْفَ قُوَّتِي وَقِلَّةَ حِيلَتِي وَهَوَانِي عَلَى النَّاسِ',
          text: 'Aye Allah! Main sirf tujh se apni kamzori, be-basi aur logon ke saamne apni be-qadri ki shikayat karta hoon.',
          source: 'At-Tabarani',
        },
        { type: 'h3', id: 'masjid-addas', text: '6.4 Masjid-e-Addas' },
        {
          type: 'p',
          text:
            'Jahan Addas RA (ek khadim) ne Nabi ﷺ ko angoor pesh kiye aur "Bismillah" sun kar Islam qubool kiya - Islami da‘wat ki tareekh ka ek naazuk magar gehra asar rakhne wala lamha.',
        },
        { type: 'h3', id: 'masjid-ali-taif', text: '6.5 Masjid-e-Ali RA (Taif)' },
        {
          type: 'p',
          text: 'Taif ke puraane shehar ke qareeb waqe - Hazrat Ali bin Abi Talib RA se mansoob.',
        },
        { type: 'h3', id: 'masjid-rasool-taif', text: '6.6 Masjid-e-Rasool ﷺ' },
        {
          type: 'p',
          text: 'Puraane shehar ke qareeb waqe - Nabi ﷺ ke Safar-e-Taif se mansoob maqam.',
        },
        { type: 'h3', id: 'masjid-wadi-rahmah', text: '6.7 Masjid Wadi-e-Rahmah' },
        {
          type: 'p',
          text:
            'Taif ki mashhoor Wadi-e-Rahmah mein waqe - wo jagah jahan Allah ki rehmat ne Nabi ﷺ ko taskeen bakhshi.',
        },
        { type: 'h3', id: 'qarn-manazil', text: '6.8 Masjid Qarn-ul-Manazil (Miqat-e-Najd)' },
        {
          type: 'p',
          text:
            'Taif ke qareeb waqe - Ahl-e-Najd ke liye muqarrar Miqat (Hajj ya Umrah ke ihram ki hadd).',
        },
        { type: 'h3', id: 'al-shafa', text: '6.9 Al-Shafa' },
        {
          type: 'p',
          text:
            'Al-Shafa Taif ka buland tareen aur mashhoor tareen baalai ilaqa hai - Sarawat paharon ka hissa. Khushgawaar mausam aur qudrati husn ke liye mashhoor.',
        },
        { type: 'h3', id: 'souq-okaz', text: '6.10 Souq Okaz' },
        {
          type: 'p',
          text:
            'Arab dunya ka qadeem aur mashhoor bazaar - tijaarat, adab, shayeri aur qanooni saalsi ka markaz.',
        },
        { type: 'h3', id: 'bab-al-raye', text: '6.11 Bab Al-Raye (باب الريع)' },
        {
          type: 'p',
          text: 'Qadeem Taif ka mashhoor shehri darwaza - kabhi Taif ki faseel ka hissa tha.',
        },
        { type: 'h3', id: 'taif-rose', text: '6.12 Taif ke gulaab ke baghaat (ورد الطائف)' },
        {
          type: 'p',
          text:
            'Ward-e-Taif (Taif ka gulaab) - gulaab ki ek aalmi shohrat yaafta qism. Shafa aur Hada ke gird kaasht - sadiyon se itr aur khushboo ke liye ugaya jata hai.',
        },
      ],
    },

    // ── Bab 7 - Madinah ──
    {
      id: 'madinah',
      title: 'Bab 7 · Madinah Munawwarah - Muqaddas maqamaat',
      blocks: [
        { type: 'h3', id: 'madinah-intro', text: '7.1 Madinah Munawwarah' },
        {
          type: 'p',
          text:
            'Islam ka doosra muqaddas tareen shehar - yahan Nabi ﷺ ne Islami mu‘ashre ki buniyaad rakhi. Is ka puraana naam Yathrib tha; Hijrat ke baad ise "Madinat-un-Nabi ﷺ" (Nabi ka shehar) kaha gaya.',
        },
        {
          type: 'hadith',
          arabic: 'اللَّهُمَّ حَبِّبْ إِلَيْنَا الْمَدِينَةَ كَحُبِّنَا مَكَّةَ أَوْ أَشَدَّ',
          text:
            'Aye Allah! Humein Madinah se aisi muhabbat ata farma jaisi Makkah se hai, ya us se bhi ziyada.',
          source: 'Sahih Bukhari, 1889',
        },
        { type: 'h3', id: 'riyaz-jannah', text: '7.2 Riyaz-ul-Jannah' },
        {
          type: 'hadith',
          text:
            'Mere ghar (hujrah) aur mere mimbar ke darmiyan Jannat ke baaghon mein se ek baagh hai, aur mera mimbar mere Hauz par hoga. - Nabi ﷺ',
          source: 'Sahih Muslim, 1391',
        },
        { type: 'h3', id: 'jannat-baqi', text: '7.3 Jannat-ul-Baqi' },
        {
          type: 'p',
          text: 'Masjid-e-Nabawi ke bilkul saath muqaddas qabristan - yahan madfoon hain:',
        },
        {
          type: 'infocard',
          title: 'Ummahat-ul-Momineen RA (Jannat-ul-Baqi mein)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hazrat Aishah RA',
                'Hazrat Hafsa RA',
                'Hazrat Umm-e-Salama RA',
                'Hazrat Zainab bint Jahsh RA',
                'Hazrat Zainab bint Khuzaima RA',
                'Hazrat Juwairiya RA',
                'Hazrat Safiyya RA',
                'Hazrat Umm-e-Habiba RA',
                'Hazrat Saudah RA',
              ],
            },
            {
              type: 'note',
              text:
                'Hazrat Khadijah RA - Makkah (Jannat-ul-Mu‘alla) mein madfoon | Hazrat Maymunah RA - Sarif (Makkah ke qareeb) mein madfoon',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Ahl-e-Bait RA (Jannat-ul-Baqi mein)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hazrat Fatima RA (Nabi ﷺ ki beti)',
                'Hazrat Hasan bin Ali RA',
                'Hazrat Abbas RA (Nabi ﷺ ke chacha)',
                'Hazrat Ali Zain-ul-Abidin (rahimahullah)',
                'Hazrat Muhammad al-Baqir (rahimahullah)',
                'Hazrat Jafar as-Sadiq (rahimahullah)',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Mashhoor Sahaba RA (Jannat-ul-Baqi mein)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hazrat Usman bin Affan RA (teesre khalifa)',
                'Hazrat Sa‘d bin Abi Waqqas RA',
                'Hazrat Abdur-Rehman bin Awf RA',
                'Hazrat As‘ad bin Zurara RA (pehle Ansari)',
                'Hazrat Abdullah bin Mas‘ud RA',
              ],
            },
          ],
        },
        { type: 'h3', id: 'masjid-ghamamah', text: '7.4 Masjid-ul-Ghamamah' },
        {
          type: 'p',
          text:
            'Masjid-e-Nabawi ke qareeb waqe - Nabi ﷺ ne yahan Eid aur Istisqa (baarish ki dua) ki namaz parhi. Baarish ke liye baadalon ke jama hone ki wajah se ise "Ghamamah" (yani: baadal) kaha gaya.',
        },
        { type: 'h3', id: 'masjid-abubakr', text: '7.5 Masjid Abu Bakr RA' },
        {
          type: 'p',
          text:
            'Masjid-ul-Ghamamah ke qareeb waqe - Nabi ﷺ ke baad Hazrat Abu Bakr RA ne yahan Eid ki namazein parhaein.',
        },
        { type: 'h3', id: 'masjid-bilal', text: '7.6 Masjid Bilal RA' },
        {
          type: 'p',
          text:
            'Islam ke pehle Mu’azzin Hazrat Bilal bin Rabah RA se mansoob - Nabi ﷺ ki wafaat ke baad azaan dena un ke liye nihayat takleef deh ho gaya.',
        },
        { type: 'h3', id: 'masjid-ali-madinah', text: '7.7 Masjid Ali RA (Madinah)' },
        {
          type: 'p',
          text:
            'Hazrat Ali bin Abi Talib RA se mansoob - Nabi ﷺ ke chachazaad, damaad, aur chauthe Khalifa-e-Rashid.',
        },
        { type: 'h3', id: 'masjid-jumah', text: '7.8 Masjid-e-Jum‘ah' },
        {
          type: 'p',
          text:
            'Hijrat ke baad Nabi ﷺ ne pehli Jum‘ah ki namaz yahan parhi - Quba se Madinah jaate hue.',
        },
        { type: 'h3', id: 'masjid-quba', text: '7.9 Masjid-e-Quba' },
        {
          type: 'p',
          text:
            'Islam ki pehli masjid - Hijrat ke baad Nabi ﷺ ne sab se pehle isi masjid ki buniyaad rakhi.',
        },
        {
          type: 'hadith',
          badge: 'Hadith - Fazeelat',
          text:
            'Jo shakhs ghar mein wuzu kare phir Masjid-e-Quba aa kar namaz parhe, use Umrah ke barabar ajr milega.',
          source: 'Sunan Ibn Majah, 1412',
        },
        { type: 'h3', id: 'ring-well', text: '7.10 Angoothi wala kuan (Bir-ul-Khatam)' },
        {
          type: 'p',
          text:
            'Nabi ﷺ ki chandi ki angoothi se mansoob (jis par "Muhammad Rasool Allah" kandah tha). Riwayaat ke mutaabiq ye Hazrat Usman RA ke daur mein is kuen mein gir gayi.',
        },
        { type: 'h3', id: 'bir-ruma', text: '7.11 Bir-e-Ruma' },
        {
          type: 'p',
          text:
            'Hazrat Usman bin Affan RA ne ye kuan khareed kar Allah ki raah mein waqf kar diya - Islami tareekh mein Sadaqa Jariyah ka sab se bara amal.',
        },
        { type: 'h3', id: 'bir-ghars', text: '7.12 Bir-e-Ghars' },
        {
          type: 'p',
          text:
            'Nabi ﷺ ka pasandeeda paani ka zariya - aap ne wasiyat farmai ke wafaat ke baad aap ka ghusl Bir-e-Ghars ke paani se diya jaye.',
        },
        { type: 'h3', id: 'bustan-mustaqbal', text: '7.13 Bustan-ul-Mustaqbal' },
        {
          type: 'p',
          text:
            'Madinah ka ek jadeed awaami park - bachon ke khelne ki jaghon aur walking track ke saath khandani mahaul. Ye koi mazhabi maqam nahi balke shehar ka jadeed tafreehi park hai.',
        },
        { type: 'h3', id: 'masjid-qiblatain', text: '7.14 Masjid-e-Qiblatain' },
        {
          type: 'p',
          text:
            'Wo jagah jahan dauran-e-namaz Qibla tabdeel hua - Bait-ul-Maqdis se Ka‘bah ki taraf. "Qiblatain" ka matlab: do Qible.',
        },
        {
          type: 'note',
          text:
            'Andar do mehraabein hain - puraana aur naya Qibla. Masjid-e-Nabawi ﷺ se taqreeban 5 kilometre.',
        },
        { type: 'h3', id: 'jabal-khandaq', text: '7.15 Jabal-e-Khandaq + Saat masajid' },
        {
          type: 'p',
          text:
            'Ghazwa-e-Khandaq (Ahzaab) - 5 Hijri mein 10,000 se zaaid dushman fauj ne 3,000 musalmanon ka saamna kiya - Hazrat Salman Farsi RA ke mashware par khandaq khodi gayi. Allah ne aandhi aur farishton ke zariye musalmanon ki madad ki.',
        },
        {
          type: 'infocard',
          title: 'Masajid-e-Sab‘a (7 masajid)',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Masjid-ul-Fath (sab se mashhoor)',
                'Masjid Salman Farsi',
                'Masjid Abu Bakr',
                'Masjid Umar',
                'Masjid Ali',
                'Masjid Sa‘d bin Mu‘adh RA',
                'Masjid Sa‘d bin Ubadah RA',
              ],
            },
          ],
        },
        { type: 'h3', id: 'jabal-uhud', text: '7.17 Jabal-e-Uhud / Ghazwa-e-Uhud' },
        {
          type: 'hadith',
          text: 'Uhud ek pahar hai jo hum se muhabbat karta hai aur hum us se muhabbat karte hain. - Nabi ﷺ',
          source: 'Sahih Muslim, 1393',
        },
        {
          type: 'p',
          text:
            '3 Hijri - Abu Sufyan ki qiyadat mein 3,000 lashkar bamuqabla 700 musalman. Jab teerandazon ne apni jaghein chhor deen to dushman ne peeche se hamla kiya - jang ka rukh palat gaya. Nabi ﷺ zakhmi hue magar bad-dua na ki, sirf dua ki: "Aye Allah! Meri qaum ko hidayat de."',
        },
        { type: 'h3', id: 'martyrs-uhud', text: '7.20 Shohada-e-Uhud ka qabristan' },
        {
          type: 'p',
          text: 'Ghazwa-e-Uhud mein 70 Sahaba RA shaheed hue - yahan madfoon hain.',
        },
        {
          type: 'infocard',
          title: 'Sayyid-ush-Shuhada - Hazrat Hamza bin Abdul-Muttalib RA',
          blocks: [
            {
              type: 'p',
              text:
                'Nabi ﷺ ke chacha - is ghazwe ke sab se bare shaheed - Nabi ﷺ ne unhein "Sayyid-ush-Shuhada" ka laqab ata farmaya.',
            },
          ],
        },
        uhudMartyrsTable(['#', 'Naam', 'Giroh'], 'Shohada-e-Uhud'),
        {
          type: 'note',
          text:
            'Tamam 70 naamon par ilmi ittefaq nahi - mukhtalif riwayaat mein farq hai - lekin ye sab Islam ke azeem shohada hain.',
        },
        { type: 'h3', id: 'cave-uhud', text: '7.18 Ghar-e-Uhud + 7.19 Masjid-ul-Fasih' },
        {
          type: 'p',
          text:
            'Ghazwa-e-Uhud ke baad Nabi ﷺ Jabal-e-Uhud ki chhoti ghaar (Ghar-e-Uhud) mein aaram farma hue - jabke Sahaba RA pehra dete rahe. Masjid-ul-Fasih is ghaar ke neeche hai - baad mein banai gayi - us maqam ki nishaandehi karti hai jahan Nabi ﷺ ne namaz parhi.',
        },
        { type: 'h3', id: 'house-fatima', text: '7.21 Hazrat Fatima RA ka ghar' },
        {
          type: 'p',
          text:
            'Masjid-e-Nabawi ﷺ ki mashriqi jaanib - ab Masjid-e-Nabawi ki tause‘ mein shaamil. Ek nihayat chhota aur saada ghar - yahan Imam Hasan RA aur Imam Husain RA ki parwarish hui.',
        },
      ],
    },

    // ── Bab 8 - Badr ──
    {
      id: 'badr',
      title: 'Bab 8 · Badr - Muqaddas maqamaat',
      blocks: [
        { type: 'h3', id: 'battle-badr', text: '8.1 Ghazwa-e-Badr' },
        {
          type: 'p',
          text:
            '17 Ramadan, 2 Hijri - Islam ka pehla aur faisla-kun ghazwa. Madinah se taqreeban 130 kilometre janoob maghrib mein. Musalman: 313 (2 ghore, 70 oont) bamuqabla Quraish: 1,000.',
        },
        {
          type: 'callout',
          text:
            'Maqsad qaafila tha, jang nahi - magar Quraish ne jang musallat kar di. Allah ne madad ke liye 1,000 farishte bheje - 70 kaafir maare gaye, 70 qaid hue, aur 14 musalman shaheed hue.',
        },
        { type: 'h3', id: 'masjid-areesh', text: '8.2 Masjid-ul-Areesh' },
        {
          type: 'p',
          text:
            'Maidan-e-Badr ke qareeb waqe - jahan Nabi ﷺ ne Badr ke din itni shiddat se dua ki ke aap ki chadar kandhon se gir gayi - Hazrat Abu Bakr RA ne tasalli di: "Aye Allah ke Rasool ﷺ, Allah apna waada poora farmayega."',
        },
        { type: 'h3', id: 'descent-angels', text: '8.3 Farishton ka nuzool (Nusrat-e-Ilahi)' },
        {
          type: 'verse',
          arabic:
            'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
          translation:
            'Jab tum apne Rab se faryaad kar rahe the to us ne tumhari dua qubool farmai: Main ek hazar farishton se, pai dar pai, tumhari madad karunga.',
          reference: 'Surah Al-Anfal (8:9)',
        },
        { type: 'h3', id: 'martyrs-badr', text: '8.4 Shohada-e-Badr ka qabristan' },
        {
          type: 'p',
          text: 'Maidan-e-Badr ke qareeb waqe - yahan 14 Sahaba RA madfoon hain.',
        },
        badrMartyrsTable(['#', 'Naam', 'Giroh'], 'Shohada-e-Badr'),
      ],
    },

    // ── Zameema - Azwaj o Aulaad ──
    {
      id: 'family',
      title: 'Zameema · Nabi ﷺ ki Azwaj o Aulaad',
      blocks: [
        {
          type: 'h3',
          id: 'wives',
          text: 'Nabi ﷺ ki Azwaj (Ummahat-ul-Momineen) - 11 Azwaj',
        },
        {
          type: 'note',
          text: 'Nabi ﷺ ki wafaat ke waqt 9 Azwaj hayaat theen.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Hazrat Khadijah bint Khuwaylid RA',
              text:
                'Nikah: Nabi ﷺ ki umr 25 | Khadijah RA ki umr 40 | Pehla aur taweel tareen nikah (25 saal) | Sab se pehle Islam qubool karne wali',
            },
            {
              title: 'Hazrat Saudah bint Zam‘ah RA',
              text: 'Nikah: Nabi ﷺ ki umr 50 | Wo ek beewah theen jin ka koi sahaara na tha',
            },
            {
              title: 'Hazrat Aishah bint Abi Bakr RA',
              text: 'Mangni: umr 6 | Rukhsati: umr 9 | Nabi ﷺ ki umr: taqreeban 53',
            },
            {
              title: 'Hazrat Hafsa bint Umar RA',
              text: 'Nikah: Nabi ﷺ ki umr 54 | Ek shaheed ki beewah',
            },
            {
              title: 'Hazrat Zainab bint Khuzaimah RA',
              text: 'Nikah: umr 55 | Laqab: Umm-ul-Masakeen (miskeenon ki maa) | Wafaat: 8 maah baad',
            },
            {
              title: 'Hazrat Umm Salama RA',
              text: 'Nikah: umr 56 | Bachon wali beewah',
            },
            {
              title: 'Hazrat Zainab bint Jahsh RA',
              text: 'Nikah: umr 57 | Khaas baat: Qur’an mein Allah ka hukm (Surah Ahzaab)',
            },
            {
              title: 'Hazrat Juwayriya bint Harith RA',
              text: 'Nikah: umr 58 | Asar: un ka poora qabeela aazaad hua',
            },
            {
              title: 'Hazrat Umm Habiba RA',
              text: 'Nikah: umr 59 | Nikah ki taqreeb Habsha mein hui',
            },
            {
              title: 'Hazrat Safiyya bint Huyayy RA',
              text: 'Nikah: umr 59 | Nasab: ek Yahudi khaandan se',
            },
            {
              title: 'Hazrat Maymunah bint Harith RA',
              text: 'Nikah: umr 60 | Aakhri nikah',
            },
          ],
        },
        { type: 'h3', id: 'children', text: 'Nabi ﷺ ki Aulaad - kul 7' },
        {
          type: 'table',
          columns: ['#', 'Naam', 'Walida', 'Wafaat'],
          rows: [
            ['1', 'Hazrat Qasim RA', 'Hazrat Khadijah RA', 'Bachpan (2 saal se kam)'],
            ['2', 'Hazrat Abdullah RA', 'Hazrat Khadijah RA', 'Bachpan'],
            ['3', 'Hazrat Zainab RA', 'Hazrat Khadijah RA', '31 saal ki umr mein'],
            ['4', 'Hazrat Ruqayyah RA', 'Hazrat Khadijah RA', '22 saal ki umr mein'],
            ['5', 'Hazrat Umm Kulthum RA', 'Hazrat Khadijah RA', '29 saal ki umr mein'],
            ['6', 'Hazrat Fatimah RA', 'Hazrat Khadijah RA', 'Umr 29 - Nabi ﷺ ki wafaat ke 6 maah baad'],
            ['7', 'Hazrat Ibrahim RA', 'Maria al-Qibtiyya RA', '18 maah ki umr mein'],
          ],
        },
        { type: 'h3', id: 'children-details', text: 'Azwaj ki Aulaad (Tafseel)' },
        {
          type: 'infocard',
          title: 'Hazrat Zainab RA',
          blocks: [
            {
              type: 'p',
              text: 'Shohar: Abul Aas bin Rabi‘ | Aulaad: Ali RA (bachpan mein wafaat), Umamah RA',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Hazrat Ruqayyah RA',
          blocks: [
            {
              type: 'p',
              text: 'Shohar: Hazrat Usman bin Affan RA | Aulaad: Abdullah RA (bachpan mein wafaat)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Hazrat Umm Kulthum RA',
          blocks: [{ type: 'p', text: 'Shohar: Hazrat Usman RA | Koi aulaad nahi' }],
        },
        {
          type: 'infocard',
          title: 'Hazrat Fatimah RA',
          blocks: [
            {
              type: 'p',
              text:
                'Shohar: Hazrat Ali bin Abi Talib RA | Aulaad: Hasan RA, Husain RA, Muhsin RA (faut shuda), Zainab RA, Umm Kulthum RA',
            },
          ],
        },
      ],
    },

    // ── Ikhtitaam ──
    {
      id: 'conclusion',
      title: 'Ikhtitaam',
      blocks: [
        {
          type: 'p',
          text:
            'Ye guide kisi numaish ke da‘we ke liye nahi likhi gayi, balke sirf aur sirf Ummat-e-Muslimah ki durust rehnumai ke liye tayyar ki gayi hai.',
        },
        {
          type: 'p',
          text:
            'Is mein mazkoor tamam ziyaraat, waqiaat aur muqaddas maqamaat Qur’an, Sahih Ahadith aur mo‘tabar riwayaat ki roshni mein pesh kiye gaye hain.',
        },
        {
          type: 'p',
          text:
            'Hamari koshish rahi hai ke ye safar mahaz maqamaat ki sair na ho, balke imaan, ghaur o fikr aur yaqeen ka safar ho - jahan har qadam par Nabi ﷺ ki ta‘leemaat, Sahaba RA ki qurbaniyan, aur Islam ki rooh mehsoos ho.',
        },
        { type: 'callout', text: 'آمِيْن يَا رَبَّ الْعَالَمِيْن' },
      ],
    },
  ],
};

export default guide;
