import type { Guide } from './types';
import { uhudMartyrsTable, badrMartyrsTable } from './shared';

/**
 * Türkçe Ziyaret rehberi - MAKİNE DESTEKLİ TASLAK, âlim incelemesini
 * beklemektedir. Arapça Kur'an ayetleri ve hadisler olduğu gibi korunmuştur;
 * yalnızca açıklama/çeviri Türkçedir. Şehit isimleri ortak (shared) Latin
 * tablodan gelir.
 */
const guide: Guide = {
  title: 'Kutsal Mekânlar İçin Tam Rehber',
  intro:
    'Kutsal mekânlara yolculuğunuzda bir yol arkadaşı - Mekke ve Medine’nin mübarek mekânları, Umre ve Hac’cın aşamaları ve her ziyaretçinin görmeyi arzuladığı tarihî mekânlar. Yola çıkmadan önce okuyun ve yolda yanınızda bulundurun.',
  chapters: [
    // ── Bölüm 1 - Mekke ──
    {
      id: 'makkah',
      title: 'Bölüm 1 · Mekke-i Mükerreme - Giriş',
      intro:
        'Mekke-i Mükerreme, İslam’ın en kutsal şehridir. Kâbe’nin bulunduğu yer burasıdır; Allah Teâlâ onu tüm insanlık için ibadet merkezi kılmıştır. Mekke yalnızca bir şehir değil, aksine tevhid, barış ve hidayetin eksiksiz bir düzenidir.',
      blocks: [
        { type: 'h3', id: 'kabah', text: '1.1 Kâbe - İbadet İçin Kurulan İlk Ev' },
        {
          type: 'verse',
          arabic:
            'إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ ۝ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا',
          translation:
            'Şüphesiz insanlar için kurulan ilk ev, âlemlere bir hidayet ve bereket kaynağı olan Bekke’deki (Mekke’deki) evdir. Onda apaçık deliller, İbrahim’in makamı vardır. Kim oraya girerse güven içinde olur.',
          reference: 'Âl-i İmrân Suresi (3:96-97)',
        },
        {
          type: 'list',
          items: [
            'Kâbe, ibadet için kurulan ilk mekândır',
            '“Bekke”, Mekke’nin kadim adıdır',
            'Mekke, barış ve güven yeridir',
            'Hidayet yalnızca Araplara değil, tüm insanlığa yöneliktir',
          ],
        },
        { type: 'h3', id: 'greatness-city', text: '1.2 Bu Şehrin Yüceliği' },
        {
          type: 'verse',
          arabic: 'لَا أُقْسِمُ بِهَذَا الْبَلَدِ ۝ وَأَنتَ حِلٌّ بِهَذَا الْبَلَدِ',
          translation:
            'Bu şehre (Mekke’ye) yemin ederim ki, ey Peygamber ﷺ, sen bu şehirde ikamet etmektesin.',
          reference: 'Beled Suresi (90:1-2)',
        },
        { type: 'h3', id: 'prayer-ibrahim', text: '1.3 İbrahim aleyhisselamın Mekke İçin Duası' },
        {
          type: 'verse',
          arabic:
            'وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ اجْعَلْ هَذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ',
          translation:
            'İbrahim aleyhisselam şöyle dua etmişti: Rabbim! Bu şehri güvenli kıl ve halkını çeşitli ürünlerle rızıklandır.',
          reference: 'Bakara Suresi (2:126)',
        },
        { type: 'h3', id: 'reward-haram', text: '1.4 Mescid-i Haram’da Namazın Sevabı' },
        {
          type: 'hadith',
          arabic:
            'صَلَاةٌ فِي مَسْجِدِي هَذَا أَفْضَلُ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ، وَصَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ',
          text:
            'Benim şu mescidimde (Mescid-i Nebevî ﷺ) kılınan bir namaz, Mescid-i Haram hariç, başka mescitlerde kılınan bin namazdan üstündür. Mescid-i Haram’da kılınan bir namaz ise başka mescitlerde kılınan yüz bin namazdan üstündür.',
          source: 'Sünen-i İbn Mâce, 1406',
        },
        { type: 'h3', id: 'love-prophet-makkah', text: '1.5 Peygamber ﷺ’in Mekke’ye Sevgisi' },
        {
          type: 'hadith',
          text:
            'Allah’a yemin olsun ki sen Allah’ın en hayırlı toprağısın ve Allah’a en sevimli olan yersin. Şayet çıkmaya zorlanmasaydım seni asla terk etmezdim.',
          source: 'Câmiu’t-Tirmizî, 3925 / Sünen-i İbn Mâce, 3108',
        },
      ],
    },

    // ── Bölüm 2 - Umre ──
    {
      id: 'umrah',
      title: 'Bölüm 2 · Umre',
      blocks: [
        { type: 'h3', id: 'what-is-umrah', text: '2.1 Umre Nedir?' },
        {
          type: 'p',
          text:
            'Umre, Mescid-i Haram’da (Mekke) yerine getirilen bir ibadettir. Amacı bakımından Umre’ye “küçük hac” da denir.',
        },
        { type: 'h3', id: 'benefits-umrah', text: '2.2 Umre’nin Faziletleri Nelerdir?' },
        {
          type: 'hadith',
          text:
            'Bir umre, kendisiyle diğer umre arasında işlenen günahlara kefarettir. Mebrur (kabul edilmiş) haccın ise cennetten başka bir karşılığı yoktur.',
          source: 'Sahih-i Buhârî, 1773 / Sahih-i Müslim, 1349a',
        },
        { type: 'h3', id: 'pillars-umrah', text: '2.4 Umre’nin Rükünleri' },
        {
          type: 'steps',
          items: [
            { title: 'İhram', text: 'Mîkatta niyet ve ihram elbisesi' },
            { title: 'Tavaf', text: 'Kâbe’nin etrafında 7 şavt' },
            { title: 'Sa’y', text: 'Safâ-Merve arasında 7 gidiş-geliş' },
            { title: 'Tıraş (Halk/Kasr)', text: 'Saçı tıraş etmek veya kısaltmak' },
          ],
        },
        { type: 'h3', id: 'method-umrah', text: '2.5 Umre’nin Doğru Yapılışı' },
        { type: 'h4', text: 'İhram' },
        {
          type: 'list',
          items: [
            'Mîkatta gusül (sünnet)',
            'Erkekler: dikişsiz iki beyaz örtü',
            'Kadınlar: örtülü kıyafet, yüz açık',
            'Kalpten niyet',
          ],
        },
        { type: 'h4', text: 'Telbiye' },
        {
          type: 'hadith',
          badge: 'Telbiye',
          arabic:
            'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
          source: 'Sahih-i Müslim, 1184',
        },
        { type: 'h4', text: 'Tavaf' },
        {
          type: 'list',
          items: [
            'Kâbe’nin etrafında 7 şavt (Hacerü’l-Esved’den başlanır)',
            'Erkekler: ilk 3 şavtta hızlı adımlarla yürümek (Reml)',
            'Hacerü’l-Esved’i öpmek (mümkünse) ya da ona işaret etmek',
            'Rükn-i Yemânî’den Hacerü’l-Esved’e: Rabbenâ âtinâ fi’d-dünyâ haseneten…',
            '2 rekât namaz (Makam-ı İbrahim yakınında)',
          ],
        },
        { type: 'h4', text: 'Sa’y (Safâ-Merve)' },
        {
          type: 'verse',
          arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
          translation: 'Şüphesiz Safâ ile Merve, Allah’ın (dininin) nişanelerindendir.',
          reference: 'Bakara Suresi (2:158)',
        },
        {
          type: 'list',
          items: [
            'Safâ’dan başlanır, Merve’de biter - 7 gidiş-geliş',
            'Yeşil ışıklar arasında: erkekler hızlı yürür, kadınlar normal adımla',
          ],
        },
        { type: 'h3', id: 'supplications-umrah', text: '2.7 Umre’nin Önemli Duaları' },
        {
          type: 'hadith',
          badge: 'Dua',
          arabic:
            'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
          text:
            'Ey Allah’ım! Bize dünyada iyilik, ahirette de iyilik ver ve bizi ateşin azabından koru.',
          source: 'Sahih-i Buhârî, 6389',
        },
      ],
    },

    // ── Bölüm 3 - Hac ──
    {
      id: 'hajj',
      title: 'Bölüm 3 · Hac',
      blocks: [
        { type: 'h3', id: 'what-is-hajj', text: '3.1 Hac Nedir?' },
        {
          type: 'verse',
          arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
          translation:
            'Yoluna gücü yeten herkesin o Ev’i (Kâbe’yi) haccetmesi, Allah’ın insanlar üzerindeki bir hakkıdır.',
          reference: 'Âl-i İmrân Suresi (3:97)',
        },
        {
          type: 'list',
          items: [
            'Hac, İslam’ın beşinci şartıdır',
            'Yalnızca bedenen ve malen gücü yetenlere farzdır',
            'Ömürde yalnızca bir kez farzdır',
          ],
        },
        { type: 'h3', id: 'pillars-hajj', text: '3.4 Hac’cın Rükünleri' },
        {
          type: 'steps',
          items: [
            { title: 'İhram', text: 'Niyet ve ihram elbisesi' },
            { title: 'Arafat’ta Vakfe', text: '9 Zilhicce - Farz rükün' },
            { title: 'Ziyaret Tavafı (İfâza)', text: 'Farz tavaf' },
            { title: 'Sa’y', text: 'Safâ-Merve' },
          ],
        },
        { type: 'h3', id: 'method-hajj', text: '3.5 Hac’cın Doğru Yapılışı (Adım Adım)' },
        {
          type: 'infocard',
          title: '8 Zilhicce (Terviye Günü) - Mina',
          blocks: [
            {
              type: 'list',
              items: ['Mina’ya varış, 5 vakit namaz kılınır', 'Mina’da gecelemek (sünnet)'],
            },
          ],
        },
        {
          type: 'infocard',
          title: '9 Zilhicce (Arefe Günü) - Arafat’ta Vakfe',
          blocks: [
            { type: 'note', variant: 'warning', text: 'Arafat olmadan hac geçerli olmaz!' },
            {
              type: 'list',
              items: [
                'Öğleden akşama kadar Arafat’ta durmak - bu, haccın en büyük rüknüdür',
                'Dua, istiğfar, tesbih',
                'Ardından Müzdelife’ye hareket - akşam ve yatsı namazları birleştirilir',
                'Müzdelife’de gecelemek (9-10 Zilhicce gecesi)',
                '70 çakıl taşı toplamak',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '10 Zilhicce (Kurban Günü) - 4 Amel',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Şeytan taşlama - yalnızca Akabe Cemresi (büyük sütun) - 7 taş',
                'Kurban kesmek',
                'Saçı tıraş etmek veya kısaltmak',
                'Ziyaret Tavafı (İfâza) + Sa’y',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '11-13 Zilhicce (Teşrik Günleri) - Şeytan Taşlama',
          blocks: [
            { type: 'p', text: 'Her gün üç cemreyi de taşlamak:' },
            {
              type: 'table',
              columns: ['Cemre', 'Boyut', 'Taş'],
              rows: [
                ['Küçük Cemre (Ûlâ)', 'Küçük', '7 taş'],
                ['Orta Cemre (Vustâ)', 'Orta', '7 taş'],
                ['Akabe Cemresi', 'Büyük', '7 taş'],
              ],
            },
            { type: 'note', text: 'Asgari zorunlu = 49 taş | Tam sünnet = 70 taş' },
          ],
        },
      ],
    },

    // ── Bölüm 4 - Hac Ayrıntıları ──
    {
      id: 'hajj-details',
      title: 'Bölüm 4 · Hac Ayrıntıları ve Kutsal Mekânlar',
      blocks: [
        { type: 'h3', id: 'masjid-nimra', text: '4.1 Nemire Mescidi - Giriş' },
        {
          type: 'p',
          text:
            'Nemire Mescidi, Mekke-i Mükerreme yakınında Arafat ovasında bulunur. Peygamber ﷺ, Vedâ Haccı sırasında İslam’ın temel öğretilerini açıkça ortaya koyan tarihî hutbeyi burada irad etmiştir.',
        },
        {
          type: 'note',
          variant: 'warning',
          text:
            'Önemli: Nemire Mescidi yalnızca 9 Zilhicce’de (Arefe Günü) açıktır - yıl boyunca kapalıdır. Ezan, hutbe ve öğle + ikindi cem namazı yalnızca bu gün eda edilir.',
        },
        { type: 'h3', id: 'jabal-rehmat', text: '4.2 Cebel-i Rahmet - Giriş' },
        {
          type: 'p',
          text:
            'Cebel-i Rahmet, Arafat’ın ortasında yer alan küçük bir tepedir; “Rahmet Dağı” olarak da bilinir. Âdem aleyhisselam ile Havvâ’nın (aleyhâsselâm) yeryüzüne inişlerinden sonra ilk kez buluştukları yer burasıdır.',
        },
        { type: 'h3', id: 'muzdalifah', text: '4.3 Müzdelife - Giriş' },
        {
          type: 'p',
          text:
            'Müzdelife, Arafat ile Mina arasında bulunan bir vadinin adıdır. Kur’an’da “Meş’ar-i Haram” olarak anılır.',
        },
        {
          type: 'list',
          items: [
            'Arafat’tan sonra Müzdelife’de akşam ve yatsı namazları birleştirilerek kılınır',
            '9-10 Zilhicce gecesi (Müzdelife gecesi) - geceyi ibadetle geçirmek',
            'Fecre kadar kalmak vaciptir',
            'Taşlama için 70 çakıl taşı toplamak',
          ],
        },
        { type: 'h3', id: 'wadi-muhassir', text: '4.4 Muhassir Vadisi - Giriş' },
        {
          type: 'p',
          text:
            'Muhassir Vadisi, Müzdelife ile Mina arasında yer alan bir vadidir - Allah’ın Ebâbil kuşlarıyla azap gönderdiği Fil Ordusu olayını hatırlatır. Büyük bir ibret ve tefekkür yeridir.',
        },
        { type: 'h3', id: 'mina', text: '4.5 Mina - Giriş' },
        {
          type: 'p',
          text:
            'Mina, haccın birçok önemli amelinin yerine getirildiği kutsal Mekke vadisidir: cemrelerin taşlanması, kurban, tıraş/kısaltma ve Teşrik Günleri.',
        },
        { type: 'h3', id: 'masjid-khaif', text: '4.6 Hayf Mescidi (Mina)' },
        {
          type: 'p',
          text:
            'Hayf Mescidi, Mina’nın en eski ve en kutsal mescitlerinden biridir. 70 veya 100 peygamberin burada namaz kıldığı rivayet edildiği için “Peygamberler Mescidi” de denir.',
        },
        { type: 'h3', id: 'jamarat', text: '4.8 Cemreler - Giriş' },
        {
          type: 'p',
          text:
            'Cemreler, hacıların şeytanı temsil eden sütunlara taş attıkları Mina’daki üç yerdir - İbrahim aleyhisselamın amelinin bir anısıdır.',
        },
        {
          type: 'table',
          columns: ['Cemre', 'Açıklama'],
          rows: [
            ['Küçük Cemre (Ûlâ)', 'En küçük sütun'],
            ['Orta Cemre (Vustâ)', 'Orta sütun'],
            ['Akabe Cemresi', 'En büyük sütun'],
          ],
        },
        { type: 'h3', id: 'masjid-bayah', text: '4.9 Biat Mescidi (Akabe) - Giriş' },
        {
          type: 'p',
          text:
            'Biat Mescidi, Mina yakınında, Akabe Cemresi’nin bitişiğinde yer alır. Medineli Ensar’ın Peygamber ﷺ’e iki büyük biat verdiği yer burasıdır (peygamberliğin 12. ve 13. yıllarında).',
        },
      ],
    },

    // ── Bölüm 5 - Kabristanlar ve Mescitler ──
    {
      id: 'graves-mosques',
      title: 'Bölüm 5 · Kabristanlar ve Mescitler - Kutsal Mekânlar',
      blocks: [
        {
          type: 'hadith',
          badge: 'Hadis - Kabir Ziyareti',
          text: 'Size kabir ziyaretini yasaklamıştım, artık onları ziyaret edin. - Peygamber ﷺ',
          source: 'Sahih-i Müslim, 977',
        },
        { type: 'h3', id: 'jannat-mualla', text: '5.1 Cennetü’l-Muallâ' },
        {
          type: 'p',
          text:
            'Cennetü’l-Muallâ, Mekke-i Mükerreme’nin en eski ve en kutsal kabristanıdır. Burada medfun olanlar: Hz. Hatice r.a., Ebû Tâlib, Abdullah bin Zübeyr r.a., Ümmü Hâni r.a. ve Kureyş’in ileri gelenleri.',
        },
        { type: 'h3', id: 'masjid-jinn', text: '5.2 Cin Mescidi' },
        {
          type: 'p',
          text:
            'Burada bir grup cin, Peygamber ﷺ’in tilavetini dinleyip İslam’ı kabul etti ve onu korumaya söz verdi - bu mescit o olayın anısına inşa edildi.',
        },
        { type: 'h3', id: 'masjid-shajar', text: '5.3 Şecere Mescidi' },
        {
          type: 'p',
          text:
            'Burada bir ağaç Peygamber ﷺ’i tanıdı, selam vermek için eğildi ve onun peygamberliğine şahitlik etti - bu mescit o mucizevî olayın yerinde inşa edildi.',
        },
        { type: 'h3', id: 'masjid-fath', text: '5.4 Feth Mescidi (Râye Mescidi)' },
        {
          type: 'p',
          text: 'Cebel-i Feth üzerinde yer alır - Mekke’nin Fethi sırasında İslam’ın sancağı burada yükseltildi.',
        },
        { type: 'h3', id: 'masjid-hijaba', text: '5.5 Hicâbe Mescidi' },
        {
          type: 'p',
          text:
            'Bu mescit adını “Hicâbe”den alır - yani Kâbe’yi açma, kapama ve koruma sorumluluğundan. Mekke’nin Fethi günü Peygamber ﷺ şöyle buyurdu: “Bugünden itibaren Kâbe’nin anahtar emaneti sizde kalacaktır; kıyamete kadar sizin elinizde olacaktır.”',
        },
        { type: 'h3', id: 'masjid-mawlid', text: '5.6 Peygamber ﷺ’in Doğduğu Yer - Mevlid Mescidi' },
        {
          type: 'p',
          text:
            'Peygamber ﷺ, Mekke-i Mükerreme’de Benî Hâşim’in evinde doğdu. Doğum: 12 Rebîülevvel, Fil Yılı - yaklaşık MS 570.',
        },
        { type: 'h3', id: 'qasr-saqf', text: '5.7 Kasrü’s-Sakîf (قَصْرُ السَّقِيفِ)' },
        {
          type: 'p',
          text:
            'Mekke-i Mükerreme’de kadim bir tarihî mekân - Benî Hâşim’in eski evleriyle ilişkilidir. “Sakf” çatı veya sığınak anlamına gelir.',
        },
        { type: 'h3', id: 'maqbarat-adl', text: '5.8 Adl Kabristanı' },
        {
          type: 'p',
          text:
            'Mekke’de İslam cezalarının uygulandığı tarihî bir kabristan. Bölgenin adı “el-Adl” (adalet) kelimesinden gelir.',
        },
        { type: 'h3', id: 'martyrs-cemetery-makkah', text: '5.9 Şehitler Kabristanı' },
        {
          type: 'p',
          text: 'Mekke’de Ci‘râne yolu yakınında yer alır - çeşitli gazvelerin şehitleri burada medfundur.',
        },
        { type: 'h3', id: 'wad-ul-banat', text: '5.10 Ve’dü’l-Benât - Kız Çocuklarını Diri Diri Gömmek' },
        {
          type: 'verse',
          arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ۝ بِأَيِّ ذَنبٍ قُتِلَتْ',
          translation: 'Diri diri gömülen kız çocuğuna, hangi günah sebebiyle öldürüldüğü sorulduğunda…',
          reference: 'Tekvir Suresi (81:8-9)',
        },
        {
          type: 'p',
          text:
            'Cahiliye döneminde bazı Arap kabileleri kız çocuklarını diri diri gömerdi. Peygamber ﷺ’in gelişinden sonra bu uygulama haram kılındı ve kız çocukları bir rahmet olarak anıldı.',
        },
        { type: 'h3', id: 'masjid-taneem', text: '5.11 Ten’îm Mescidi (Âişe Mescidi r.a.)' },
        {
          type: 'p',
          text:
            'Mekke’ye en yakın mîkat - Mekke içinde bulunanlar Umre ihramına buradan girer.',
        },
        { type: 'h3', id: 'masjid-jiranah', text: '5.12 Ci‘râne Mescidi' },
        {
          type: 'p',
          text: 'Mekke’nin önemli bir mîkatı - Ten’îm Mescidi’nden sonra en tanınmış mîkat.',
        },
        { type: 'h3', id: 'masjid-hudaibiyah', text: '5.13 Hudeybiye Antlaşması Mescidi' },
        {
          type: 'p',
          text:
            'Hicrî 6’da Peygamber ﷺ ile Kureyş arasındaki Hudeybiye Antlaşması’nın yapıldığı yer - Rıdvan Biatı da burada gerçekleşti.',
        },
        {
          type: 'verse',
          arabic:
            'لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ',
          translation: 'Andolsun, ağaç altında sana biat ederlerken Allah, o müminlerden razı olmuştur.',
          reference: 'Fetih Suresi (48:18)',
        },
        { type: 'h3', id: 'jabal-noor', text: '5.14 Cebel-i Nur + Hira Mağarası' },
        {
          type: 'p',
          text: 'İlk vahiy burada nazil oldu - Alak Suresi (96:1-5). İslam tam da bu yerde başladı.',
        },
        { type: 'h3', id: 'jabal-thawr', text: '5.15 Cebel-i Sevr + Sevr Mağarası' },
        {
          type: 'p',
          text:
            'Hicret sırasında Peygamber ﷺ ile Ebû Bekir es-Sıddîk r.a. burada üç gece kaldı. Allah’ın özel koruması altında - örümcek ağı ve güvercin yumurtaları mucizesi.',
        },
        {
          type: 'verse',
          arabic: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
          translation: 'Hani arkadaşına: Üzülme, şüphesiz Allah bizimledir, diyordu.',
          reference: 'Tevbe Suresi (9:40)',
        },
        { type: 'h3', id: 'jabal-khandama', text: '5.16 Cebel-i Handeme' },
        {
          type: 'p',
          text:
            'Mekke’nin tarihî bir dağı - Mekke’nin Fethi sırasında Peygamber ﷺ şehre girmek için yakınındaki bir yolu seçti.',
        },
        { type: 'h3', id: 'kiswah-museum', text: '5.17 Kisve Müzesi' },
        {
          type: 'p',
          text:
            'Kisve’ye (Kâbe’nin siyah ipek örtüsü) adanmış muhteşem bir müze. Her yıl 9 Zilhicce’de eski kisve indirilir ve yenisi örtülür - altın ve gümüş ipliklerle işlenmiş Kur’an ayetleriyle süslüdür.',
        },
        { type: 'h3', id: 'zubaida-aqueduct', text: '5.18 Zübeyde Su Kanalı' },
        {
          type: 'p',
          text:
            'Zübeyde bint Câfer (Abbâsî Halifesi Hârûn Reşîd’in eşi), hacılara hizmet için Taif dağlarından Mekke’ye muhteşem bir su kanalının yapımını bizzat finanse etti - döneminin en büyük kamu yararı projesi.',
        },
      ],
    },

    // ── Bölüm 6 - Taif ──
    {
      id: 'taif',
      title: 'Bölüm 6 · Taif - Kutsal Mekânlar',
      blocks: [
        { type: 'h3', id: 'taif-intro', text: '6.1 Taif’e Giriş' },
        {
          type: 'p',
          text:
            'Taif, Suudi Arabistan’ın ünlü ve tarihî bir şehridir - Mekke’nin doğusunda Serevât Dağları’nda yer alır. Peygamberliğin onuncu yılında Peygamber ﷺ Taif’e gitti. Taif halkı ona taş attı - yine de Peygamber ﷺ onlara beddua etmedi, aksine onlara rahmet için dua etti.',
        },
        {
          type: 'callout',
          text:
            '“Taif, taşların atıldığı ama karşılığında duaların yükseldiği şehirdir - acı verilen, ama ondan yeni bir rahmet döneminin başladığı yerdir.”',
        },
        { type: 'h3', id: 'ibn-abbas', text: '6.2 Hz. Abdullah bin Abbas r.a. - Giriş' },
        {
          type: 'p',
          text:
            'Peygamber ﷺ’in amcasının oğlu - İslam’da “Tercümânü’l-Kur’an” (Kur’an’ın Tercümanı) olarak tanınır. Hicrî 68’de Taif’te vefat etti ve orada defnedildi - daha sonra o yerde bir türbe ve mescit inşa edildi.',
        },
        {
          type: 'hadith',
          badge: 'Peygamber Duası',
          arabic: 'اللَّهُمَّ عَلِّمْهُ الْحِكْمَةَ وَتَأْوِيلَ الْكِتَابِ',
          text: 'Ey Allah’ım! Ona dinde derin anlayış ver ve Kur’an’ın tevilini öğret.',
          source: 'Sünen-i İbn Mâce, 166',
        },
        { type: 'h3', id: 'wadi-mathna', text: '6.3 Mesnâ Vadisi' },
        {
          type: 'p',
          text:
            'Bu, Peygamber ﷺ’in Taif’teki ağır imtihandan sonra dinlendiği ve Allah’a şu meşhur duayı ettiği vadidir:',
        },
        {
          type: 'hadith',
          badge: 'Taif Duası',
          arabic:
            'اللَّهُمَّ إِلَيْكَ أَشْكُو ضَعْفَ قُوَّتِي وَقِلَّةَ حِيلَتِي وَهَوَانِي عَلَى النَّاسِ',
          text: 'Ey Allah’ım! Gücümün zayıflığını, çaresizliğimi ve insanlar önünde hor görülmemi yalnızca sana şikâyet ediyorum.',
          source: 'Taberânî',
        },
        { type: 'h3', id: 'masjid-addas', text: '6.4 Addâs Mescidi' },
        {
          type: 'p',
          text:
            'Addâs r.a. (bir hizmetkâr) Peygamber ﷺ’e üzüm ikram etti ve “Bismillah” sözünü duyunca İslam’ı kabul etti - İslam davetinin tarihinde ince ama derin etkili bir andır.',
        },
        { type: 'h3', id: 'masjid-ali-taif', text: '6.5 Ali Mescidi r.a. (Taif)' },
        {
          type: 'p',
          text: 'Taif’in Eski Şehri yakınında yer alır - Hz. Ali bin Ebî Tâlib r.a. ile ilişkilendirilir.',
        },
        { type: 'h3', id: 'masjid-rasool-taif', text: '6.6 Rasûl ﷺ Mescidi' },
        {
          type: 'p',
          text: 'Eski Şehir yakınında yer alır - Peygamber ﷺ’in Taif yolculuğuyla ilişkili bir mekân.',
        },
        { type: 'h3', id: 'masjid-wadi-rahmah', text: '6.7 Rahmet Vadisi Mescidi' },
        {
          type: 'p',
          text:
            'Taif’in meşhur Rahmet Vadisi’nde yer alır - Allah’ın rahmetinin Peygamber ﷺ’e huzur getirdiği yer.',
        },
        { type: 'h3', id: 'qarn-manazil', text: '6.8 Karnü’l-Menâzil Mescidi (Necid Mîkatı)' },
        {
          type: 'p',
          text:
            'Taif yakınında yer alır - Necidliler için belirlenmiş mîkat (hac ya da umre ihramına girme sınırı).',
        },
        { type: 'h3', id: 'al-shafa', text: '6.9 eş-Şefâ' },
        {
          type: 'p',
          text:
            'eş-Şefâ, Taif’in en yüksek ve en meşhur yayla bölgesidir - Serevât Dağları’nın bir parçası. Serin iklimi ve doğal güzelliğiyle ünlüdür.',
        },
        { type: 'h3', id: 'souq-okaz', text: '6.10 Ukaz Panayırı' },
        {
          type: 'p',
          text:
            'Arap dünyasının kadim ve ünlü pazarı - ticaret, edebiyat, şiir ve hukukî hakemlik merkezi.',
        },
        { type: 'h3', id: 'bab-al-raye', text: '6.11 Bâbü’r-Rey‘ (باب الريع)' },
        {
          type: 'p',
          text: 'Kadim Taif’in ünlü şehir kapısı - bir zamanlar Taif Şehir Suru’nun parçasıydı.',
        },
        { type: 'h3', id: 'taif-rose', text: '6.12 Taif Gül Bahçeleri (ورد الطائف)' },
        {
          type: 'p',
          text:
            'Verd-i Taif (Taif Gülü) - dünyaca ünlü bir gül çeşidi. Şefâ ve Hada çevresinde yetiştirilir - yüzyıllardır parfüm ve koku için ekilir.',
        },
      ],
    },

    // ── Bölüm 7 - Medine ──
    {
      id: 'madinah',
      title: 'Bölüm 7 · Medine-i Münevvere - Kutsal Mekânlar',
      blocks: [
        { type: 'h3', id: 'madinah-intro', text: '7.1 Medine-i Münevvere' },
        {
          type: 'p',
          text:
            'İslam’ın ikinci en kutsal şehri - Peygamber ﷺ İslam toplumunun temelini burada attı. Eski adı Yesrib’ti; Hicret’ten sonra “Medînetü’n-Nebî ﷺ” (Peygamber Şehri) olarak anıldı.',
        },
        {
          type: 'hadith',
          arabic: 'اللَّهُمَّ حَبِّبْ إِلَيْنَا الْمَدِينَةَ كَحُبِّنَا مَكَّةَ أَوْ أَشَدَّ',
          text:
            'Ey Allah’ım! Mekke’yi sevdirdiğin gibi, hatta daha fazla, bize Medine’yi de sevdir.',
          source: 'Sahih-i Buhârî, 1889',
        },
        { type: 'h3', id: 'riyaz-jannah', text: '7.2 Ravza-i Mutahhara' },
        {
          type: 'hadith',
          text:
            'Evimle (odamla) minberimin arası, cennet bahçelerinden bir bahçedir ve minberim havzımın üzerindedir. - Peygamber ﷺ',
          source: 'Sahih-i Müslim, 1391',
        },
        { type: 'h3', id: 'jannat-baqi', text: '7.3 Cennetü’l-Bakî' },
        {
          type: 'p',
          text: 'Mescid-i Nebevî’nin hemen bitişiğindeki kutsal kabristan - burada medfun olanlar:',
        },
        {
          type: 'infocard',
          title: 'Müminlerin Anneleri r.a. (Cennetü’l-Bakî’de)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hz. Âişe r.a.',
                'Hz. Hafsa r.a.',
                'Hz. Ümmü Seleme r.a.',
                'Hz. Zeyneb bint Cahş r.a.',
                'Hz. Zeyneb bint Huzeyme r.a.',
                'Hz. Cüveyriye r.a.',
                'Hz. Safiyye r.a.',
                'Hz. Ümmü Habîbe r.a.',
                'Hz. Sevde r.a.',
              ],
            },
            {
              type: 'note',
              text:
                'Hz. Hatice r.a. - Mekke’de (Cennetü’l-Muallâ) medfun | Hz. Meymûne r.a. - Serif’te (Mekke yakını) medfun',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Ehl-i Beyt r.a. (Cennetü’l-Bakî’de)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hz. Fâtıma r.a. (Peygamber ﷺ’in kızı)',
                'Hz. Hasan bin Ali r.a.',
                'Hz. Abbas r.a. (Peygamber ﷺ’in amcası)',
                'Hz. Ali Zeynelâbidîn (rahimehullah)',
                'Hz. Muhammed el-Bâkır (rahimehullah)',
                'Hz. Câfer es-Sâdık (rahimehullah)',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Meşhur Sahabeler r.a. (Cennetü’l-Bakî’de)',
          blocks: [
            {
              type: 'list',
              items: [
                'Hz. Osman bin Affan r.a. (Üçüncü Halife)',
                'Hz. Sa‘d bin Ebî Vakkâs r.a.',
                'Hz. Abdurrahman bin Avf r.a.',
                'Hz. Es‘ad bin Zürâre r.a. (İlk Ensarî)',
                'Hz. Abdullah bin Mes‘ûd r.a.',
              ],
            },
          ],
        },
        { type: 'h3', id: 'masjid-ghamamah', text: '7.4 Gamâme Mescidi' },
        {
          type: 'p',
          text:
            'Mescid-i Nebevî yakınında yer alır - Peygamber ﷺ bayram ve yağmur duası (istiskâ) namazını burada kıldı. Yağmur için bulutların toplanması sebebiyle “Gamâme” (yani: bulut) adı verildi.',
        },
        { type: 'h3', id: 'masjid-abubakr', text: '7.5 Ebû Bekir Mescidi r.a.' },
        {
          type: 'p',
          text:
            'Gamâme Mescidi yakınında yer alır - Peygamber ﷺ’den sonra Hz. Ebû Bekir r.a. bayram namazlarını burada kıldırdı.',
        },
        { type: 'h3', id: 'masjid-bilal', text: '7.6 Bilâl Mescidi r.a.' },
        {
          type: 'p',
          text:
            'İslam’ın ilk müezzini Hz. Bilâl bin Rebâh r.a. ile ilişkilidir - Peygamber ﷺ’in vefatından sonra ezan okumak onun için son derece acı verici oldu.',
        },
        { type: 'h3', id: 'masjid-ali-madinah', text: '7.7 Ali Mescidi r.a. (Medine)' },
        {
          type: 'p',
          text:
            'Hz. Ali bin Ebî Tâlib r.a. ile ilişkilidir - Peygamber ﷺ’in amcasının oğlu, damadı ve dördüncü Râşid Halife.',
        },
        { type: 'h3', id: 'masjid-jumah', text: '7.8 Cuma Mescidi' },
        {
          type: 'p',
          text:
            'Hicret’ten sonra Peygamber ﷺ ilk Cuma namazını burada kıldı - Kubâ’dan Medine’ye giderken.',
        },
        { type: 'h3', id: 'masjid-quba', text: '7.9 Kubâ Mescidi' },
        {
          type: 'p',
          text:
            'İslam’ın ilk mescidi - Hicret’ten sonra Peygamber ﷺ önce bu mescidin temelini attı.',
        },
        {
          type: 'hadith',
          badge: 'Hadis - Fazilet',
          text:
            'Kim evinde abdest alır, sonra Kubâ Mescidi’ne gelip orada namaz kılarsa, ona umre sevabı vardır.',
          source: 'Sünen-i İbn Mâce, 1412',
        },
        { type: 'h3', id: 'ring-well', text: '7.10 Yüzük Kuyusu (Bi’rü’l-Hâtem)' },
        {
          type: 'p',
          text:
            'Peygamber ﷺ’in gümüş yüzüğüyle ilişkilidir (üzerinde “Muhammed Rasûlullah” yazılıydı). Rivayete göre Hz. Osman r.a. döneminde bu kuyuya düştü.',
        },
        { type: 'h3', id: 'bir-ruma', text: '7.11 Rûme Kuyusu (Bi’r-i Rûme)' },
        {
          type: 'p',
          text:
            'Hz. Osman bin Affan r.a. bu kuyuyu satın alıp Allah yolunda vakfetti - İslam tarihinin en büyük sadaka-i câriye amelidir.',
        },
        { type: 'h3', id: 'bir-ghars', text: '7.12 Gars Kuyusu (Bi’r-i Gars)' },
        {
          type: 'p',
          text:
            'Peygamber ﷺ’in en sevdiği su kaynağı - vefatından sonra gaslinin Gars Kuyusu’nun suyuyla yapılmasını vasiyet etti.',
        },
        { type: 'h3', id: 'bustan-mustaqbal', text: '7.13 Bustânü’l-Müstakbel' },
        {
          type: 'p',
          text:
            'Medine’nin modern bir kamu parkı - çocuk oyun alanları ve yürüyüş yollarıyla aile dostu bir ortam. Dinî bir mekân değil, şehrin modern rekreasyon parkıdır.',
        },
        { type: 'h3', id: 'masjid-qiblatain', text: '7.14 Kıbleteyn Mescidi' },
        {
          type: 'p',
          text:
            'Kıblenin namaz esnasında değiştirildiği yer - Beytü’l-Makdis’ten Kâbe’ye. “Kıbleteyn” iki kıble demektir.',
        },
        {
          type: 'note',
          text:
            'İçinde iki mihrap vardır - eski ve yeni kıble. Mescid-i Nebevî ﷺ’den yaklaşık 5 km uzaklıkta.',
        },
        { type: 'h3', id: 'jabal-khandaq', text: '7.15 Hendek Dağı + Yedi Mescit' },
        {
          type: 'p',
          text:
            'Hendek Savaşı (Ahzâb) - Hicrî 5’te 10.000’i aşkın düşman ordusu 3.000 Müslüman ile karşı karşıya geldi - Selmân-ı Fârisî r.a.’ın tavsiyesiyle bir hendek kazıldı. Allah, bir fırtına ve meleklerle Müslümanlara yardım etti.',
        },
        {
          type: 'infocard',
          title: 'Mesâcid-i Seb‘a (7 Mescit)',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Feth Mescidi (en tanınmışı)',
                'Selmân-ı Fârisî Mescidi',
                'Ebû Bekir Mescidi',
                'Ömer Mescidi',
                'Ali Mescidi',
                'Sa‘d bin Muâz Mescidi r.a.',
                'Sa‘d bin Ubâde Mescidi r.a.',
              ],
            },
          ],
        },
        { type: 'h3', id: 'jabal-uhud', text: '7.17 Uhud Dağı / Uhud Savaşı' },
        {
          type: 'hadith',
          text: 'Uhud, bizi seven ve bizim de sevdiğimiz bir dağdır. - Peygamber ﷺ',
          source: 'Sahih-i Müslim, 1393',
        },
        {
          type: 'p',
          text:
            'Hicrî 3 - Ebû Süfyân komutasında 3.000 asker, 700 Müslüman’a karşı. Okçular yerlerini terk edince düşman arkadan saldırdı - savaşın seyri tersine döndü. Peygamber ﷺ yaralandı ama beddua etmedi, yalnızca dua etti: “Ey Allah’ım! Kavmime hidayet ver.”',
        },
        { type: 'h3', id: 'martyrs-uhud', text: '7.20 Uhud Şehitleri Kabristanı' },
        {
          type: 'p',
          text: 'Uhud Savaşı’nda 70 sahabe r.a. şehit oldu - burada medfundurlar.',
        },
        {
          type: 'infocard',
          title: 'Şehitlerin Efendisi - Hz. Hamza bin Abdülmuttalib r.a.',
          blocks: [
            {
              type: 'p',
              text:
                'Peygamber ﷺ’in amcası - bu savaşın en büyük şehidi - “Seyyidü’ş-Şühedâ” (Şehitlerin Efendisi) unvanı Peygamber ﷺ tarafından ona verildi.',
            },
          ],
        },
        uhudMartyrsTable(['#', 'İsim', 'Grup'], 'Uhud Şehitleri'),
        {
          type: 'note',
          text:
            '70 ismin tamamı üzerinde âlimler arasında ittifak yoktur - rivayetler farklıdır - ancak hepsi İslam’ın büyük şehitleridir.',
        },
        { type: 'h3', id: 'cave-uhud', text: '7.18 Uhud Mağarası + 7.19 Fasîh Mescidi' },
        {
          type: 'p',
          text:
            'Uhud Savaşı’ndan sonra Peygamber ﷺ, Uhud Dağı’ndaki küçük mağarada (Uhud Mağarası) dinlendi - sahabeler r.a. nöbet tuttu. Fasîh Mescidi bu mağaranın altındadır - sonradan inşa edilmiştir - Peygamber ﷺ’in namaz kıldığı yeri işaret eder.',
        },
        { type: 'h3', id: 'house-fatima', text: '7.21 Hz. Fâtıma r.a.’ın Evi' },
        {
          type: 'p',
          text:
            'Mescid-i Nebevî ﷺ’in doğu tarafında - bugün Mescid-i Nebevî’nin genişletmesine dâhil edilmiştir. Çok küçük ve sade bir ev - Hz. Hasan r.a. ve Hz. Hüseyin r.a. burada büyütüldü.',
        },
      ],
    },

    // ── Bölüm 8 - Bedir ──
    {
      id: 'badr',
      title: 'Bölüm 8 · Bedir - Kutsal Mekânlar',
      blocks: [
        { type: 'h3', id: 'battle-badr', text: '8.1 Bedir Savaşı' },
        {
          type: 'p',
          text:
            '17 Ramazan, Hicrî 2 - İslam’ın ilk ve belirleyici savaşı. Medine’nin yaklaşık 130 km güneybatısında. Müslümanlar: 313 (2 at, 70 deve), Kureyş: 1.000.',
        },
        {
          type: 'callout',
          text:
            'Amaç kervandı, savaş değil - ama Kureyş savaşı dayattı. Allah yardım için 1.000 melek gönderdi - 70 kâfir öldürüldü, 70’i esir alındı ve 14 Müslüman şehit oldu.',
        },
        { type: 'h3', id: 'masjid-areesh', text: '8.2 Arîş Mescidi' },
        {
          type: 'p',
          text:
            'Bedir savaş meydanı yakınında yer alır - Peygamber ﷺ Bedir günü öyle bir yoğunlukla dua etti ki ridası omuzlarından kaydı - Hz. Ebû Bekir r.a. onu teselli etti: “Ey Allah’ın Rasûlü ﷺ, Allah sana verdiği sözü mutlaka yerine getirecektir.”',
        },
        { type: 'h3', id: 'descent-angels', text: '8.3 Meleklerin İnişi (İlahî Yardım)' },
        {
          type: 'verse',
          arabic:
            'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
          translation:
            'Hani Rabbinizden yardım diliyordunuz da: Ben size birbiri ardınca gelen bin melekle yardım edeceğim, diye duanızı kabul etmişti.',
          reference: 'Enfâl Suresi (8:9)',
        },
        { type: 'h3', id: 'martyrs-badr', text: '8.4 Bedir Şehitleri Kabristanı' },
        {
          type: 'p',
          text: 'Bedir savaş meydanı yakınında yer alır - 14 sahabe r.a. burada medfundur.',
        },
        badrMartyrsTable(['#', 'İsim', 'Grup'], 'Bedir Şehitleri'),
      ],
    },

    // ── Ek - Eşleri ve Çocukları ──
    {
      id: 'family',
      title: 'Ek · Peygamber ﷺ’in Eşleri ve Çocukları',
      blocks: [
        {
          type: 'h3',
          id: 'wives',
          text: 'Peygamber ﷺ’in Eşleri (Müminlerin Anneleri) - 11 Eş',
        },
        {
          type: 'note',
          text: 'Peygamber ﷺ vefat ettiğinde 9 eşi hayattaydı.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Hz. Hatice bint Huveylid r.a.',
              text:
                'Evlilik: Peygamber ﷺ 25 yaşında | Hatice r.a. 40 yaşında | İlk ve en uzun evlilik (25 yıl) | İslam’ı kabul eden ilk kişi',
            },
            {
              title: 'Hz. Sevde bint Zem‘a r.a.',
              text: 'Evlilik: Peygamber ﷺ 50 yaşında | Desteği olmayan bir dul idi',
            },
            {
              title: 'Hz. Âişe bint Ebî Bekir r.a.',
              text: 'Nişan: 6 yaş | Evliliğin tamamlanması: 9 yaş | Peygamber ﷺ’in yaşı: yaklaşık 53',
            },
            {
              title: 'Hz. Hafsa bint Ömer r.a.',
              text: 'Evlilik: Peygamber ﷺ 54 yaşında | Bir şehidin dulu',
            },
            {
              title: 'Hz. Zeyneb bint Huzeyme r.a.',
              text: 'Evlilik: 55 yaş | Unvanı: Ümmü’l-Mesâkîn (Yoksulların Annesi) | Vefat: 8 ay sonra',
            },
            {
              title: 'Hz. Ümmü Seleme r.a.',
              text: 'Evlilik: 56 yaş | Çocuklu bir dul',
            },
            {
              title: 'Hz. Zeyneb bint Cahş r.a.',
              text: 'Evlilik: 57 yaş | Özel not: Kur’an’da Allah’ın emriyle (Ahzâb Suresi)',
            },
            {
              title: 'Hz. Cüveyriye bint Hâris r.a.',
              text: 'Evlilik: 58 yaş | Etki: Bütün kabilesi hürriyete kavuştu',
            },
            {
              title: 'Hz. Ümmü Habîbe r.a.',
              text: 'Evlilik: 59 yaş | Nikâh töreni Habeşistan’da yapıldı',
            },
            {
              title: 'Hz. Safiyye bint Huyey r.a.',
              text: 'Evlilik: 59 yaş | Soy: Yahudi bir aileden',
            },
            {
              title: 'Hz. Meymûne bint Hâris r.a.',
              text: 'Evlilik: 60 yaş | Son evlilik',
            },
          ],
        },
        { type: 'h3', id: 'children', text: 'Peygamber ﷺ’in Çocukları - Toplam 7' },
        {
          type: 'table',
          columns: ['#', 'İsim', 'Anne', 'Vefat'],
          rows: [
            ['1', 'Hz. Kâsım r.a.', 'Hz. Hatice r.a.', 'Çocukluk (2 yaşından küçük)'],
            ['2', 'Hz. Abdullah r.a.', 'Hz. Hatice r.a.', 'Çocukluk'],
            ['3', 'Hz. Zeyneb r.a.', 'Hz. Hatice r.a.', '31 yaşında'],
            ['4', 'Hz. Rukayye r.a.', 'Hz. Hatice r.a.', '22 yaşında'],
            ['5', 'Hz. Ümmü Külsûm r.a.', 'Hz. Hatice r.a.', '29 yaşında'],
            ['6', 'Hz. Fâtıma r.a.', 'Hz. Hatice r.a.', '29 yaş - Peygamber ﷺ’in vefatından 6 ay sonra'],
            ['7', 'Hz. İbrahim r.a.', 'Mâriye el-Kıbtiyye r.a.', '18 aylıkken'],
          ],
        },
        { type: 'h3', id: 'children-details', text: 'Eşlerin Çocukları (Ayrıntılar)' },
        {
          type: 'infocard',
          title: 'Hz. Zeyneb r.a.',
          blocks: [
            {
              type: 'p',
              text: 'Eşi: Ebü’l-Âs bin Rebî‘ | Çocukları: Ali r.a. (çocukken vefat etti), Ümâme r.a.',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Hz. Rukayye r.a.',
          blocks: [
            {
              type: 'p',
              text: 'Eşi: Hz. Osman bin Affan r.a. | Çocuğu: Abdullah r.a. (çocukken vefat etti)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Hz. Ümmü Külsûm r.a.',
          blocks: [{ type: 'p', text: 'Eşi: Hz. Osman r.a. | Çocuğu yok' }],
        },
        {
          type: 'infocard',
          title: 'Hz. Fâtıma r.a.',
          blocks: [
            {
              type: 'p',
              text:
                'Eşi: Hz. Ali bin Ebî Tâlib r.a. | Çocukları: Hasan r.a., Hüseyin r.a., Muhsin r.a. (vefat etti), Zeyneb r.a., Ümmü Külsûm r.a.',
            },
          ],
        },
      ],
    },

    // ── Sonuç ──
    {
      id: 'conclusion',
      title: 'Sonuç',
      blocks: [
        {
          type: 'p',
          text:
            'Bu rehber, gösteriş iddiasıyla yazılmadı; yalnızca ve tamamen Müslüman ümmetinin doğru şekilde yönlendirilmesi için hazırlandı.',
        },
        {
          type: 'p',
          text:
            'İçinde zikredilen bütün ziyaretler, olaylar ve kutsal mekânlar; Kur’an, sahih hadis ve güvenilir rivayetler ışığında sunulmuştur.',
        },
        {
          type: 'p',
          text:
            'Gayretimiz, bu yolculuğun yalnızca mekânların gezisi değil, aksine iman, tefekkür ve yakîn yolculuğu olması yönündedir - her adımda Peygamber ﷺ’in öğretileri, sahabelerin r.a. fedakârlıkları ve İslam’ın ruhu hissedilsin.',
        },
        { type: 'callout', text: 'آمِيْن يَا رَبَّ الْعَالَمِيْن' },
      ],
    },
  ],
};

export default guide;
