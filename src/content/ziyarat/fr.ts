import type { Guide } from './types';
import { uhudMartyrsTable, badrMartyrsTable } from './shared';

/**
 * Guide Ziyarat en français — BROUILLON assisté par machine, en attente de
 * révision savante. Les versets coraniques et les ahadith en arabe sont
 * conservés à l'identique ; seule l'explication/traduction est en français.
 */
const guide: Guide = {
  title: 'Le guide Ziyarat complet',
  intro:
    'Un compagnon pour votre voyage vers les lieux saints — les lieux bénis de La Mecque et de Médine, les étapes de l’Omra et du Hajj, et les sites historiques que chaque pèlerin désire visiter. Lisez-le avant de partir et gardez-le avec vous en chemin.',
  chapters: [
    // ── Chapitre 1 — La Mecque ──
    {
      id: 'makkah',
      title: 'Chapitre 1 · La Mecque (Makkah) — Introduction',
      intro:
        'La Mecque est la ville la plus sainte de l’islam. C’est là que se trouve la Kaaba, qu’Allah le Très-Haut a établie comme centre d’adoration pour toute l’humanité. La Mecque n’est pas simplement une ville, mais un système complet de monothéisme, de paix et de guidance.',
      blocks: [
        { type: 'h3', id: 'kabah', text: '1.1 La Kaaba — la première Maison d’adoration' },
        {
          type: 'verse',
          arabic:
            'إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ لَلَّذِي بِبَكَّةَ مُبَارَكًا وَهُدًى لِلْعَالَمِينَ ۝ فِيهِ آيَاتٌ بَيِّنَاتٌ مَقَامُ إِبْرَاهِيمَ وَمَنْ دَخَلَهُ كَانَ آمِنًا',
          translation:
            '« La première Maison établie pour les gens est bien celle de Bakka (La Mecque), bénie et une guidance pour les mondes. Là sont des signes clairs : la station d’Ibrahim. Et quiconque y entre est en sécurité. »',
          reference: 'Sourate Aal-e-Imran (3:96–97)',
        },
        {
          type: 'list',
          items: [
            'La Kaaba est le premier lieu d’adoration',
            '« Bakka » est l’ancien nom de La Mecque',
            'La Mecque est un lieu de paix et de sécurité',
            'La guidance n’est pas seulement pour les Arabes, mais pour toute l’humanité',
          ],
        },
        { type: 'h3', id: 'greatness-city', text: '1.2 La grandeur de la ville' },
        {
          type: 'verse',
          arabic: 'لَا أُقْسِمُ بِهَذَا الْبَلَدِ ۝ وَأَنتَ حِلٌّ بِهَذَا الْبَلَدِ',
          translation:
            '« Je jure par cette cité (La Mecque), et toi (ô Prophète ﷺ) tu résides dans cette cité. »',
          reference: 'Sourate Al-Balad (90:1–2)',
        },
        { type: 'h3', id: 'prayer-ibrahim', text: '1.3 L’invocation d’Ibrahim (paix sur lui) pour La Mecque' },
        {
          type: 'verse',
          arabic:
            'وَإِذْ قَالَ إِبْرَاهِيمُ رَبِّ اجْعَلْ هَذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ',
          translation:
            '« Et lorsqu’Ibrahim invoqua : “Ô mon Seigneur ! Fais de cette cité un lieu de sécurité et nourris ses habitants de fruits.” »',
          reference: 'Sourate Al-Baqarah (2:126)',
        },
        { type: 'h3', id: 'reward-haram', text: '1.4 La récompense de la prière à Masjid al-Haram' },
        {
          type: 'hadith',
          arabic:
            'صَلَاةٌ فِي مَسْجِدِي هَذَا أَفْضَلُ مِنْ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ إِلَّا الْمَسْجِدَ الْحَرَامَ، وَصَلَاةٌ فِي الْمَسْجِدِ الْحَرَامِ أَفْضَلُ مِنْ مِائَةِ أَلْفِ صَلَاةٍ فِيمَا سِوَاهُ',
          text:
            '« Une prière dans ma mosquée (Masjid an-Nabawi ﷺ) vaut mieux que mille prières ailleurs, sauf à Masjid al-Haram. Et une prière à Masjid al-Haram vaut mieux que cent mille prières ailleurs. »',
          source: 'Sunan Ibn Majah, 1406',
        },
        { type: 'h3', id: 'love-prophet-makkah', text: '1.5 L’amour du Prophète ﷺ pour La Mecque' },
        {
          type: 'hadith',
          text:
            '« Par Allah ! Tu es la meilleure terre d’Allah et la plus aimée d’Allah. Si l’on ne m’avait pas contraint à te quitter, je ne serais jamais parti. »',
          source: 'Jami‘ at-Tirmidhi, 3925 / Sunan Ibn Majah, 3108',
        },
      ],
    },

    // ── Chapitre 2 — Omra ──
    {
      id: 'umrah',
      title: 'Chapitre 2 · La Omra',
      blocks: [
        { type: 'h3', id: 'what-is-umrah', text: '2.1 Qu’est-ce que la Omra ?' },
        {
          type: 'p',
          text:
            'La Omra est un acte d’adoration accompli à Masjid al-Haram (La Mecque). En raison de son objectif, la Omra est aussi appelée le « petit pèlerinage ».',
        },
        { type: 'h3', id: 'benefits-umrah', text: '2.2 Quels sont les mérites de la Omra ?' },
        {
          type: 'hadith',
          text:
            '« D’une Omra à l’autre, c’est une expiation des péchés commis entre les deux, et le Hajj accepté (Hajj Mabrour) n’a d’autre récompense que le Paradis. »',
          source: 'Sahih al-Bukhari, 1773 / Sahih Muslim, 1349a',
        },
        { type: 'h3', id: 'pillars-umrah', text: '2.4 Les piliers de la Omra' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Intention et tenue au Miqat' },
            { title: 'Tawaf', text: '7 tours autour de la Kaaba' },
            { title: 'Sa’i', text: '7 parcours entre Safa et Marwah' },
            { title: 'Halaq / Qasr', text: 'Rasage ou raccourcissement des cheveux' },
          ],
        },
        { type: 'h3', id: 'method-umrah', text: '2.5 La méthode correcte de la Omra' },
        { type: 'h4', text: 'Ihram' },
        {
          type: 'list',
          items: [
            'Bain (ghusl) au Miqat (Sunna)',
            'Hommes : 2 pièces de tissu blanc non cousues',
            'Femmes : vêtement pudique, visage découvert',
            'Intention dans le cœur',
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
            '7 tours autour de la Kaaba (en commençant par la Pierre noire)',
            'Hommes : les 3 premiers tours d’un pas rapide (Ramal)',
            'Embrasser la Pierre noire (si possible) ou la désigner d’un geste',
            'Du Rukn al-Yamani à la Pierre noire : Rabbana atina fid-dunya hasanatan…',
            'Prière de 2 rak‘ah (près de Maqam Ibrahim)',
          ],
        },
        { type: 'h4', text: 'Sa’i (Safa–Marwah)' },
        {
          type: 'verse',
          arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
          translation: '« En vérité, Safa et Marwah font partie des rites d’Allah. »',
          reference: 'Sourate Al-Baqarah (2:158)',
        },
        {
          type: 'list',
          items: [
            'Commencer à Safa, terminer à Marwah — 7 parcours',
            'Entre les lumières vertes : les hommes marchent d’un pas rapide, les femmes à allure normale',
          ],
        },
        { type: 'h3', id: 'supplications-umrah', text: '2.7 Invocations importantes de la Omra' },
        {
          type: 'hadith',
          badge: 'Du‘a',
          arabic:
            'اللَّهُمَّ رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
          text:
            '« Ô Allah ! Accorde-nous un bien dans ce monde et un bien dans l’au-delà, et préserve-nous du châtiment du Feu. »',
          source: 'Sahih al-Bukhari, 6389',
        },
      ],
    },

    // ── Chapitre 3 — Hajj ──
    {
      id: 'hajj',
      title: 'Chapitre 3 · Le Hajj',
      blocks: [
        { type: 'h3', id: 'what-is-hajj', text: '3.1 Qu’est-ce que le Hajj ?' },
        {
          type: 'verse',
          arabic: 'وَلِلَّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا',
          translation:
            '« Et c’est un devoir envers Allah pour les gens d’accomplir le Hajj à cette Maison, pour quiconque en a les moyens. »',
          reference: 'Sourate Aal-e-Imran (3:97)',
        },
        {
          type: 'list',
          items: [
            'Le Hajj est le 5e pilier de l’islam',
            'Il n’est obligatoire que pour ceux qui en ont la capacité physique et financière',
            'Il n’est obligatoire qu’une seule fois dans la vie',
          ],
        },
        { type: 'h3', id: 'pillars-hajj', text: '3.4 Les piliers du Hajj' },
        {
          type: 'steps',
          items: [
            { title: 'Ihram', text: 'Intention et tenue' },
            { title: 'Wuquf à Arafat', text: '9 Dhoul-Hijja — pilier obligatoire' },
            { title: 'Tawaf al-Ifadah', text: 'Tawaf obligatoire' },
            { title: 'Sa’i', text: 'Safa–Marwah' },
          ],
        },
        { type: 'h3', id: 'method-hajj', text: '3.5 La méthode correcte du Hajj (étape par étape)' },
        {
          type: 'infocard',
          title: '8 Dhoul-Hijja (jour de la Tarwiyah) — Mina',
          blocks: [
            {
              type: 'list',
              items: ['Arriver à Mina, accomplir 5 prières', 'Passer la nuit à Mina (Sunna)'],
            },
          ],
        },
        {
          type: 'infocard',
          title: '9 Dhoul-Hijja (jour d’Arafat) — Wuquf à Arafat',
          blocks: [
            { type: 'note', variant: 'warning', text: 'Le Hajj n’est pas valide sans Arafat !' },
            {
              type: 'list',
              items: [
                'Rester à Arafat de Dhouhr au Maghrib — c’est le plus grand pilier du Hajj',
                'Invocation, demande de pardon, glorification',
                'Puis se rendre à Muzdalifah — regrouper les prières du Maghrib et de l’Isha',
                'Passer la nuit à Muzdalifah (nuit du 9 au 10 Dhoul-Hijja)',
                'Ramasser 70 cailloux',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '10 Dhoul-Hijja (jour du Sacrifice) — 4 actes',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Rami — uniquement Jamrat al-Aqabah (grande stèle) — 7 cailloux',
                'Sacrifice',
                'Rasage ou raccourcissement des cheveux',
                'Tawaf al-Ifadah + Sa’i',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: '11–13 Dhoul-Hijja (jours de Tachriq) — Rami',
          blocks: [
            { type: 'p', text: 'Lapider chaque jour les trois Jamarat :' },
            {
              type: 'table',
              columns: ['Jamrah', 'Taille', 'Cailloux'],
              rows: [
                ['Jamrat al-Ula', 'Petite', '7 cailloux'],
                ['Jamrat al-Wusta', 'Moyenne', '7 cailloux'],
                ['Jamrat al-Aqabah', 'Grande', '7 cailloux'],
              ],
            },
            { type: 'note', text: 'Minimum requis = 49 cailloux | Sunna complète = 70 cailloux' },
          ],
        },
      ],
    },

    // ── Chapitre 4 — Détails du Hajj ──
    {
      id: 'hajj-details',
      title: 'Chapitre 4 · Détails du Hajj et lieux saints',
      blocks: [
        { type: 'h3', id: 'masjid-nimra', text: '4.1 Masjid Nimra — Introduction' },
        {
          type: 'p',
          text:
            'Masjid Nimra se trouve près de La Mecque, dans la plaine d’Arafat. C’est là que le Prophète ﷺ prononça un sermon historique lors du Pèlerinage d’adieu, exposant clairement les enseignements fondamentaux de l’islam.',
        },
        {
          type: 'note',
          variant: 'warning',
          text:
            'Important : Masjid Nimra n’ouvre que le 9 Dhoul-Hijja (jour d’Arafat) — elle reste fermée toute l’année. Ce jour-là seulement y sont accomplis l’adhan, le sermon et les prières regroupées de Dhouhr et Asr.',
        },
        { type: 'h3', id: 'jabal-rehmat', text: '4.2 Jabal ar-Rahmah — Introduction' },
        {
          type: 'p',
          text:
            'Jabal ar-Rahmah est une petite colline au centre d’Arafat, aussi appelée le « Mont de la Miséricorde ». C’est là qu’Adam (paix sur lui) et Hawwa (Ève) se retrouvèrent après leur descente sur terre.',
        },
        { type: 'h3', id: 'muzdalifah', text: '4.3 Muzdalifah — Introduction' },
        {
          type: 'p',
          text:
            'Muzdalifah est le nom d’une vallée située entre Arafat et Mina. Dans le Coran, elle est appelée « Mach‘ar al-Haram ».',
        },
        {
          type: 'list',
          items: [
            'Après Arafat, regrouper les prières du Maghrib et de l’Isha à Muzdalifah',
            'La nuit du 9 au 10 Dhoul-Hijja (nuit de Muzdalifah) — la passer en adoration',
            'Rester jusqu’au Fajr est obligatoire',
            'Ramasser 70 cailloux pour la lapidation',
          ],
        },
        { type: 'h3', id: 'wadi-muhassir', text: '4.4 Wadi Muhassir — Introduction' },
        {
          type: 'p',
          text:
            'Wadi Muhassir est une vallée entre Muzdalifah et Mina — elle rappelle l’événement des Gens de l’Éléphant, où Allah envoya un châtiment par des nuées d’oiseaux (Ababil). C’est un lieu de grande leçon et de réflexion.',
        },
        { type: 'h3', id: 'mina', text: '4.5 Mina — Introduction' },
        {
          type: 'p',
          text:
            'Mina est la vallée sacrée de La Mecque où s’accomplissent de nombreux actes du Hajj : la lapidation des Jamarat, le sacrifice, le rasage/raccourcissement des cheveux et les jours de Tachriq.',
        },
        { type: 'h3', id: 'masjid-khaif', text: '4.6 Masjid al-Khaif (Mina)' },
        {
          type: 'p',
          text:
            'Masjid al-Khaif est l’une des mosquées les plus anciennes et les plus sacrées de Mina. On l’appelle aussi « Mosquée des Prophètes » car 70 ou 100 prophètes y ont prié.',
        },
        { type: 'h3', id: 'jamarat', text: '4.8 Les Jamarat — Introduction' },
        {
          type: 'p',
          text:
            'Les Jamarat sont trois emplacements à Mina où les pèlerins lancent des cailloux sur les stèles représentant Satan — en commémoration de l’acte du Prophète Ibrahim (paix sur lui).',
        },
        {
          type: 'table',
          columns: ['Jamrah', 'Description'],
          rows: [
            ['Jamrat al-Ula', 'La plus petite stèle'],
            ['Jamrat al-Wusta', 'La stèle du milieu'],
            ['Jamrat al-Aqabah', 'La plus grande stèle'],
          ],
        },
        { type: 'h3', id: 'masjid-bayah', text: '4.9 Masjid al-Bay‘ah (Aqabah) — Introduction' },
        {
          type: 'p',
          text:
            'Masjid al-Bay‘ah se trouve près de Mina, à proximité de Jamrat al-Aqabah. C’est là que les Ansar de Médine prêtèrent deux grands serments d’allégeance au Prophète ﷺ (aux 12e et 13e années de la prophétie).',
        },
      ],
    },

    // ── Chapitre 5 — Cimetières et mosquées ──
    {
      id: 'graves-mosques',
      title: 'Chapitre 5 · Cimetières et mosquées — Lieux saints',
      blocks: [
        {
          type: 'hadith',
          badge: 'Hadith — Visite des tombes',
          text:
            '« Je vous avais interdit de visiter les tombes, mais désormais visitez-les. » — Prophète ﷺ',
          source: 'Sahih Muslim, 977',
        },
        { type: 'h3', id: 'jannat-mualla', text: '5.1 Jannat al-Mu‘alla' },
        {
          type: 'p',
          text:
            'Jannat al-Mu‘alla est le cimetière le plus ancien et le plus sacré de La Mecque. Y sont enterrés : Khadijah (qu’Allah l’agrée), Abou Talib, Abdullah bin Zubayr, Umm Hani et les grands notables des Quraych.',
        },
        { type: 'h3', id: 'masjid-jinn', text: '5.2 Masjid al-Jinn' },
        {
          type: 'p',
          text:
            'Ici, un groupe de djinns écouta la récitation du Prophète ﷺ, embrassa l’islam et s’engagea à le protéger — cette mosquée fut bâtie en mémoire de cet événement.',
        },
        { type: 'h3', id: 'masjid-shajar', text: '5.3 Masjid ash-Shajar' },
        {
          type: 'p',
          text:
            'Ici, un arbre reconnut le Prophète ﷺ, s’inclina en salutation et témoigna de sa prophétie — cette mosquée fut bâtie sur le lieu de ce miracle.',
        },
        { type: 'h3', id: 'masjid-fath', text: '5.4 Masjid al-Fath (Masjid ar-Rayah)' },
        {
          type: 'p',
          text: 'Située sur Jabal al-Fath — l’étendard de l’islam y fut hissé lors de la conquête de La Mecque.',
        },
        { type: 'h3', id: 'masjid-hijaba', text: '5.5 Masjid al-Hijaba' },
        {
          type: 'p',
          text:
            'Cette mosquée tire son nom de « Hijaba » — la charge d’ouvrir, de fermer et de garder la Kaaba. Le jour de la conquête de La Mecque, le Prophète ﷺ dit : « À partir d’aujourd’hui, la garde des clés de la Kaaba vous revient ; elle restera entre vos mains jusqu’au Jour du Jugement. »',
        },
        { type: 'h3', id: 'masjid-mawlid', text: '5.6 Lieu de naissance du Prophète ﷺ — Masjid al-Mawlid' },
        {
          type: 'p',
          text:
            'Le Prophète ﷺ naquit dans la maison des Banu Hashim à La Mecque. Naissance : 12 Rabi‘ al-Awwal, l’Année de l’Éléphant — environ 570 apr. J.-C.',
        },
        { type: 'h3', id: 'qasr-saqf', text: '5.7 Qasr as-Saqf (قَصْرُ السَّقِيفِ)' },
        {
          type: 'p',
          text:
            'Un ancien site historique de La Mecque — associé aux anciennes maisons des Banu Hashim. « Saqf » signifie toit ou abri.',
        },
        { type: 'h3', id: 'maqbarat-adl', text: '5.8 Maqbarat al-‘Adl' },
        {
          type: 'p',
          text:
            'Un cimetière historique de La Mecque où étaient appliquées les peines. Le nom du lieu vient de « Al-‘Adl » (la Justice).',
        },
        { type: 'h3', id: 'martyrs-cemetery-makkah', text: '5.9 Cimetière des martyrs' },
        {
          type: 'p',
          text: 'Situé près de la route d’al-Ji‘ranah à La Mecque — des martyrs de diverses batailles y sont enterrés.',
        },
        { type: 'h3', id: 'wad-ul-banat', text: '5.10 Wa’d al-Banat — enterrer les filles vivantes' },
        {
          type: 'verse',
          arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ۝ بِأَيِّ ذَنبٍ قُتِلَتْ',
          translation:
            '« Et lorsqu’on demandera à la fillette enterrée vivante pour quel péché elle a été tuée. »',
          reference: 'Sourate At-Takwir (81:8–9)',
        },
        {
          type: 'p',
          text:
            'À l’époque de l’Ignorance (Jahiliyya), certaines tribus arabes enterraient leurs filles vivantes. Après la venue du Prophète ﷺ, cette pratique fut déclarée interdite (haram) et les filles furent appelées une bénédiction.',
        },
        { type: 'h3', id: 'masjid-taneem', text: '5.11 Masjid Tan‘eem (Masjid Aïcha)' },
        {
          type: 'p',
          text:
            'Le Miqat le plus proche de La Mecque — ceux qui résident déjà à La Mecque y prennent l’Ihram pour la Omra.',
        },
        { type: 'h3', id: 'masjid-jiranah', text: '5.12 Masjid al-Ji‘ranah' },
        {
          type: 'p',
          text: 'Un Miqat important de La Mecque — le plus connu après Masjid Tan‘eem.',
        },
        { type: 'h3', id: 'masjid-hudaibiyah', text: '5.13 Masjid Sulh al-Hudaybiyah' },
        {
          type: 'p',
          text:
            'Le lieu du traité de Hudaybiyah entre le Prophète ﷺ et les Quraych en l’an 6 de l’Hégire — c’est aussi là qu’eut lieu la Bay‘at ar-Ridwan (le serment d’agrément).',
        },
        {
          type: 'verse',
          arabic:
            'لَقَدْ رَضِيَ اللَّهُ عَنِ الْمُؤْمِنِينَ إِذْ يُبَايِعُونَكَ تَحْتَ الشَّجَرَةِ',
          translation:
            '« Allah a été satisfait des croyants quand ils te prêtaient serment sous l’arbre. »',
          reference: 'Sourate Al-Fath (48:18)',
        },
        { type: 'h3', id: 'jabal-noor', text: '5.14 Jabal an-Nour + grotte de Hira' },
        {
          type: 'p',
          text: 'C’est ici que descendit la première révélation — Sourate Al-‘Alaq (96:1–5). L’islam commença en ce lieu même.',
        },
        { type: 'h3', id: 'jabal-thawr', text: '5.15 Jabal Thawr + grotte de Thawr' },
        {
          type: 'p',
          text:
            'Lors de l’Hégire, le Prophète ﷺ et Abou Bakr as-Siddiq passèrent trois nuits ici. Sous la protection particulière d’Allah — les miracles de la toile d’araignée et des œufs de la colombe.',
        },
        {
          type: 'verse',
          arabic: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
          translation:
            '« Quand il disait à son compagnon : “Ne t’afflige pas, car Allah est avec nous.” »',
          reference: 'Sourate At-Tawbah (9:40)',
        },
        { type: 'h3', id: 'jabal-khandama', text: '5.16 Jabal Khandama' },
        {
          type: 'p',
          text:
            'Une montagne historique de La Mecque — lors de la conquête, le Prophète ﷺ emprunta un chemin à proximité pour entrer dans la ville.',
        },
        { type: 'h3', id: 'kiswah-museum', text: '5.17 Musée de la Kiswah' },
        {
          type: 'p',
          text:
            'Un magnifique musée dédié à la Kiswah (le voile de soie noire de la Kaaba). Chaque année, le 9 Dhoul-Hijja, l’ancienne Kiswah est retirée et une nouvelle est posée — ornée de versets coraniques brodés de fils d’or et d’argent.',
        },
        { type: 'h3', id: 'zubaida-aqueduct', text: '5.18 L’aqueduc de Zubaida' },
        {
          type: 'p',
          text:
            'Sayyida Zubaida bint Ja‘far (épouse du calife abbasside Haroun ar-Rachid) finança personnellement la construction d’un magnifique canal d’eau depuis les montagnes de Taïf jusqu’à La Mecque — au service des pèlerins. Le plus grand projet d’utilité publique de son époque.',
        },
      ],
    },

    // ── Chapitre 6 — Taïf ──
    {
      id: 'taif',
      title: 'Chapitre 6 · Taïf — Lieux saints',
      blocks: [
        { type: 'h3', id: 'taif-intro', text: '6.1 Introduction à Taïf' },
        {
          type: 'p',
          text:
            'Taïf est une ville célèbre et historique d’Arabie saoudite — à l’est de La Mecque, dans les montagnes du Sarawat. La dixième année de la prophétie, le Prophète ﷺ se rendit à Taïf. Ses habitants le lapidèrent — pourtant le Prophète ﷺ ne les maudit pas, mais invoqua la miséricorde pour eux.',
        },
        {
          type: 'callout',
          text:
            '« Taïf est la ville où des pierres furent lancées, mais où des prières s’élevèrent en réponse — et où, malgré la douleur, commença une nouvelle ère de miséricorde. »',
        },
        { type: 'h3', id: 'ibn-abbas', text: '6.2 Abdullah bin Abbas (qu’Allah l’agrée) — Introduction' },
        {
          type: 'p',
          text:
            'Le cousin du Prophète ﷺ — célèbre en islam sous le nom de « Tarjuman al-Qur’an » (l’interprète du Coran). Il mourut à Taïf en l’an 68 de l’Hégire et y fut enterré — un mausolée et une mosquée furent ensuite édifiés sur le site.',
        },
        {
          type: 'hadith',
          badge: 'Invocation prophétique',
          arabic: 'اللَّهُمَّ عَلِّمْهُ الْحِكْمَةَ وَتَأْوِيلَ الْكِتَابِ',
          text:
            '« Ô Allah ! Accorde-lui la compréhension de la religion et enseigne-lui l’interprétation du Coran. »',
          source: 'Sunan Ibn Majah, 166',
        },
        { type: 'h3', id: 'wadi-mathna', text: '6.3 Wadi Mathna' },
        {
          type: 'p',
          text:
            'C’est la vallée où le Prophète ﷺ se reposa après la dure épreuve de Taïf et adressa cette célèbre invocation à Allah :',
        },
        {
          type: 'hadith',
          badge: 'Invocation de Taïf',
          arabic:
            'اللَّهُمَّ إِلَيْكَ أَشْكُو ضَعْفَ قُوَّتِي وَقِلَّةَ حِيلَتِي وَهَوَانِي عَلَى النَّاسِ',
          text:
            '« Ô Allah ! C’est à Toi seul que je me plains de ma faiblesse, de mon impuissance et de mon peu de considération auprès des gens. »',
          source: 'At-Tabarani',
        },
        { type: 'h3', id: 'masjid-addas', text: '6.4 Masjid Addas' },
        {
          type: 'p',
          text:
            'Là où Addas (un serviteur) offrit des raisins au Prophète ﷺ et, en entendant « Bismillah », embrassa l’islam — un moment délicat mais profondément marquant de l’histoire de la da‘wah.',
        },
        { type: 'h3', id: 'masjid-ali-taif', text: '6.5 Masjid Ali (Taïf)' },
        {
          type: 'p',
          text: 'Située près de la vieille ville de Taïf — attribuée à Ali bin Abi Talib (qu’Allah l’agrée).',
        },
        { type: 'h3', id: 'masjid-rasool-taif', text: '6.6 Masjid ar-Rasool ﷺ' },
        {
          type: 'p',
          text: 'Située près de la vieille ville — un lieu associé au voyage du Prophète ﷺ à Taïf.',
        },
        { type: 'h3', id: 'masjid-wadi-rahmah', text: '6.7 Masjid Wadi ar-Rahmah' },
        {
          type: 'p',
          text:
            'Située dans la célèbre Wadi ar-Rahmah de Taïf — le lieu où la miséricorde d’Allah apporta réconfort au Prophète ﷺ.',
        },
        { type: 'h3', id: 'qarn-manazil', text: '6.8 Masjid Qarn al-Manazil (Miqat du Najd)' },
        {
          type: 'p',
          text:
            'Située près de Taïf — le Miqat désigné pour les gens du Najd (la limite pour prendre l’Ihram du Hajj ou de la Omra).',
        },
        { type: 'h3', id: 'al-shafa', text: '6.9 Al-Shafa' },
        {
          type: 'p',
          text:
            'Al-Shafa est la zone montagneuse la plus haute et la plus célèbre de Taïf — partie des montagnes du Sarawat. Réputée pour son climat agréable et sa beauté naturelle.',
        },
        { type: 'h3', id: 'souq-okaz', text: '6.10 Souq Okaz' },
        {
          type: 'p',
          text:
            'L’ancien et célèbre marché du monde arabe — un centre de commerce, de littérature, de poésie et d’arbitrage.',
        },
        { type: 'h3', id: 'bab-al-raye', text: '6.11 Bab al-Raye (باب الريع)' },
        {
          type: 'p',
          text: 'La célèbre porte de l’ancienne Taïf — jadis partie de la muraille de la ville.',
        },
        { type: 'h3', id: 'taif-rose', text: '6.12 Jardins de roses de Taïf (ورد الطائف)' },
        {
          type: 'p',
          text:
            'Ward Taïf (la rose de Taïf) — une variété de rose de renommée mondiale. Cultivée autour de Shafa et Hada — depuis des siècles pour le parfum et les senteurs.',
        },
      ],
    },

    // ── Chapitre 7 — Médine ──
    {
      id: 'madinah',
      title: 'Chapitre 7 · Médine (Madinah al-Munawwarah) — Lieux saints',
      blocks: [
        { type: 'h3', id: 'madinah-intro', text: '7.1 Médine' },
        {
          type: 'p',
          text:
            'La deuxième ville la plus sainte de l’islam — c’est là que le Prophète ﷺ posa les fondations de la société musulmane. Son ancien nom était Yathrib ; après l’Hégire, elle fut appelée « Madinat an-Nabi ﷺ » (la ville du Prophète).',
        },
        {
          type: 'hadith',
          arabic: 'اللَّهُمَّ حَبِّبْ إِلَيْنَا الْمَدِينَةَ كَحُبِّنَا مَكَّةَ أَوْ أَشَدَّ',
          text:
            '« Ô Allah ! Fais-nous aimer Médine comme Tu nous as fait aimer La Mecque, ou davantage encore. »',
          source: 'Sahih al-Bukhari, 1889',
        },
        { type: 'h3', id: 'riyaz-jannah', text: '7.2 Riyad al-Jannah' },
        {
          type: 'hadith',
          text:
            '« Entre ma maison (chambre) et mon minbar se trouve un des jardins du Paradis, et mon minbar sera sur mon Bassin (Hawd). » — Prophète ﷺ',
          source: 'Sahih Muslim, 1391',
        },
        { type: 'h3', id: 'jannat-baqi', text: '7.3 Jannat al-Baqi' },
        {
          type: 'p',
          text: 'Le cimetière sacré juste à côté de Masjid an-Nabawi — y sont enterrés :',
        },
        {
          type: 'infocard',
          title: 'Les Mères des croyants (à Jannat al-Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Aïcha (qu’Allah l’agrée)',
                'Hafsa',
                'Umm Salama',
                'Zaynab bint Jahsh',
                'Zaynab bint Khuzayma',
                'Juwayriya',
                'Safiyya',
                'Umm Habiba',
                'Sawda',
              ],
            },
            {
              type: 'note',
              text:
                'Khadijah — enterrée à La Mecque (Jannat al-Mu‘alla) | Maymunah — enterrée à Sarif (près de La Mecque)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Ahl al-Bayt (à Jannat al-Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Fatima (la fille du Prophète ﷺ)',
                'Hasan bin Ali',
                'Abbas (l’oncle du Prophète ﷺ)',
                'Ali Zayn al-Abidin',
                'Muhammad al-Baqir',
                'Ja‘far as-Sadiq',
              ],
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Compagnons célèbres (à Jannat al-Baqi)',
          blocks: [
            {
              type: 'list',
              items: [
                'Uthman bin Affan (3e calife)',
                'Sa‘d bin Abi Waqqas',
                'Abdur-Rahman bin Awf',
                'As‘ad bin Zurara (premier Ansari)',
                'Abdullah bin Mas‘ud',
              ],
            },
          ],
        },
        { type: 'h3', id: 'masjid-ghamamah', text: '7.4 Masjid al-Ghamamah' },
        {
          type: 'p',
          text:
            'Près de Masjid an-Nabawi — le Prophète ﷺ y accomplit les prières de l’Aïd et de l’Istisqa (prière pour la pluie). En raison du rassemblement des nuages pour la pluie, elle fut nommée « Ghamamah » (le nuage).',
        },
        { type: 'h3', id: 'masjid-abubakr', text: '7.5 Masjid Abou Bakr' },
        {
          type: 'p',
          text:
            'Près de Masjid al-Ghamamah — après le Prophète ﷺ, Abou Bakr y dirigea les prières de l’Aïd.',
        },
        { type: 'h3', id: 'masjid-bilal', text: '7.6 Masjid Bilal' },
        {
          type: 'p',
          text:
            'Associée à Bilal bin Rabah, le premier muezzin de l’islam — après le décès du Prophète ﷺ, l’appel à la prière lui devint profondément douloureux.',
        },
        { type: 'h3', id: 'masjid-ali-madinah', text: '7.7 Masjid Ali (Médine)' },
        {
          type: 'p',
          text:
            'Associée à Ali bin Abi Talib — le cousin du Prophète ﷺ, son gendre et le quatrième calife bien-guidé.',
        },
        { type: 'h3', id: 'masjid-jumah', text: '7.8 Masjid al-Jumu‘ah' },
        {
          type: 'p',
          text:
            'Après l’Hégire, le Prophète ﷺ y accomplit la première prière du vendredi (Jumu‘ah) — sur le chemin de Quba vers Médine.',
        },
        { type: 'h3', id: 'masjid-quba', text: '7.9 Masjid Quba' },
        {
          type: 'p',
          text:
            'La première mosquée de l’islam — après l’Hégire, le Prophète ﷺ en posa d’abord les fondations.',
        },
        {
          type: 'hadith',
          badge: 'Hadith — Mérite',
          text:
            '« Quiconque fait ses ablutions chez lui puis se rend à Masjid Quba et y prie, obtient une récompense équivalente à celle d’une Omra. »',
          source: 'Sunan Ibn Majah, 1412',
        },
        { type: 'h3', id: 'ring-well', text: '7.10 Le puits de la bague (Bir al-Khatam)' },
        {
          type: 'p',
          text:
            'Associé à la bague d’argent du Prophète ﷺ (sur laquelle était gravé « Muhammad Rasul Allah »). Selon les récits, elle tomba dans ce puits à l’époque d’Uthman.',
        },
        { type: 'h3', id: 'bir-ruma', text: '7.11 Bir Ruma' },
        {
          type: 'p',
          text:
            'Uthman bin Affan acheta ce puits et le dédia comme legs (waqf) pour l’amour d’Allah — le plus grand acte d’aumône continue (Sadaqa Jariyah) de l’histoire de l’islam.',
        },
        { type: 'h3', id: 'bir-ghars', text: '7.12 Bir Ghars' },
        {
          type: 'p',
          text:
            'La source d’eau préférée du Prophète ﷺ — il légua qu’après son décès, son lavage rituel (ghusl) soit fait avec l’eau de Bir Ghars.',
        },
        { type: 'h3', id: 'bustan-mustaqbal', text: '7.13 Bustan al-Mustaqbal' },
        {
          type: 'p',
          text:
            'Un parc public moderne de Médine — un cadre familial avec aires de jeux et pistes de marche. Ce n’est pas un lieu religieux, mais le parc de loisirs moderne de la ville.',
        },
        { type: 'h3', id: 'masjid-qiblatain', text: '7.14 Masjid al-Qiblatayn' },
        {
          type: 'p',
          text:
            'Le lieu où la Qibla (direction de la prière) fut changée pendant la prière elle-même — de Bayt al-Maqdis vers la Kaaba. « Qiblatayn » signifie : deux Qiblas.',
        },
        {
          type: 'note',
          text:
            'À l’intérieur se trouvent deux mihrabs — l’ancienne et la nouvelle Qibla. À environ 5 km de Masjid an-Nabawi ﷺ.',
        },
        { type: 'h3', id: 'jabal-khandaq', text: '7.15 Jabal al-Khandaq + les Sept Mosquées' },
        {
          type: 'p',
          text:
            'La bataille du Fossé (Ahzab) — en l’an 5 de l’Hégire, une armée ennemie de plus de 10 000 hommes affronta 3 000 musulmans — sur le conseil de Salman al-Farisi, un fossé fut creusé. Allah secourut les musulmans par une tempête et des anges.',
        },
        {
          type: 'infocard',
          title: 'Masajid as-Sab‘a (les 7 Mosquées)',
          blocks: [
            {
              type: 'list',
              ordered: true,
              items: [
                'Masjid al-Fath (la plus connue)',
                'Masjid Salman al-Farisi',
                'Masjid Abou Bakr',
                'Masjid Umar',
                'Masjid Ali',
                'Masjid Sa‘d bin Mu‘adh',
                'Masjid Sa‘d bin ‘Ubadah',
              ],
            },
          ],
        },
        { type: 'h3', id: 'jabal-uhud', text: '7.17 Jabal Uhud / bataille d’Uhud' },
        {
          type: 'hadith',
          text: '« Uhud est une montagne qui nous aime et que nous aimons. » — Prophète ﷺ',
          source: 'Sahih Muslim, 1393',
        },
        {
          type: 'p',
          text:
            'An 3 de l’Hégire — 3 000 hommes sous Abou Soufyan contre 700 musulmans. Lorsque les archers abandonnèrent leurs positions, l’ennemi attaqua par-derrière — le cours de la bataille bascula. Le Prophète ﷺ fut blessé mais ne maudit personne, il invoqua seulement : « Ô Allah ! Guide mon peuple. »',
        },
        { type: 'h3', id: 'martyrs-uhud', text: '7.20 Cimetière des martyrs d’Uhud' },
        {
          type: 'p',
          text: '70 Compagnons furent martyrisés à la bataille d’Uhud — ils sont enterrés ici.',
        },
        {
          type: 'infocard',
          title: 'Le Maître des martyrs — Hamza bin Abdul-Muttalib',
          blocks: [
            {
              type: 'p',
              text:
                'L’oncle du Prophète ﷺ — le plus grand martyr de cette bataille — le titre de « Sayyid ash-Shuhada » (Maître des martyrs) lui fut conféré par le Prophète ﷺ.',
            },
          ],
        },
        uhudMartyrsTable(['#', 'Nom', 'Groupe'], 'Martyrs d’Uhud'),
        {
          type: 'note',
          text:
            'Il n’y a pas de consensus savant sur l’ensemble des 70 noms — les récits varient — mais ce sont tous de grands martyrs de l’islam.',
        },
        { type: 'h3', id: 'cave-uhud', text: '7.18 Grotte d’Uhud + 7.19 Masjid al-Fasih' },
        {
          type: 'p',
          text:
            'Après la bataille d’Uhud, le Prophète ﷺ se reposa dans la petite grotte (Ghar Uhud) de Jabal Uhud — tandis que les Compagnons montaient la garde. Masjid al-Fasih se trouve sous cette grotte — bâtie plus tard — marquant l’endroit où le Prophète ﷺ pria.',
        },
        { type: 'h3', id: 'house-fatima', text: '7.21 La maison de Fatima (qu’Allah l’agrée)' },
        {
          type: 'p',
          text:
            'Du côté est de Masjid an-Nabawi ﷺ — aujourd’hui intégrée à l’extension de la mosquée. Une maison très petite et simple — c’est ici que grandirent les imams Hasan et Husayn.',
        },
      ],
    },

    // ── Chapitre 8 — Badr ──
    {
      id: 'badr',
      title: 'Chapitre 8 · Badr — Lieux saints',
      blocks: [
        { type: 'h3', id: 'battle-badr', text: '8.1 La bataille de Badr' },
        {
          type: 'p',
          text:
            '17 Ramadan, an 2 de l’Hégire — la première bataille décisive de l’islam. À environ 130 km au sud-ouest de Médine. Musulmans : 313 (2 chevaux, 70 chameaux) contre les Quraych : 1 000.',
        },
        {
          type: 'callout',
          text:
            'Le but était la caravane, non la bataille — mais les Quraych imposèrent la guerre. Allah envoya 1 000 anges en renfort — 70 mécréants furent tués, 70 faits prisonniers, et 14 musulmans furent martyrisés.',
        },
        { type: 'h3', id: 'masjid-areesh', text: '8.2 Masjid al-Areesh' },
        {
          type: 'p',
          text:
            'Située près du champ de bataille de Badr — où le Prophète ﷺ invoqua avec une telle ferveur le jour de Badr que son manteau glissa de ses épaules — Abou Bakr le réconforta : « Ô Messager d’Allah ﷺ, Allah accomplira Sa promesse. »',
        },
        { type: 'h3', id: 'descent-angels', text: '8.3 La descente des anges (le secours divin)' },
        {
          type: 'verse',
          arabic:
            'إِذْ تَسْتَغِيثُونَ رَبَّكُمْ فَاسْتَجَابَ لَكُمْ أَنِّي مُمِدُّكُم بِأَلْفٍ مِّنَ الْمَلَائِكَةِ مُرْدِفِينَ',
          translation:
            '« Quand vous imploriez le secours de votre Seigneur, Il vous exauça : “Je vais vous renforcer d’un millier d’anges, se succédant les uns aux autres.” »',
          reference: 'Sourate Al-Anfal (8:9)',
        },
        { type: 'h3', id: 'martyrs-badr', text: '8.4 Cimetière des martyrs de Badr' },
        {
          type: 'p',
          text: 'Situé près du champ de bataille de Badr — 14 Compagnons y sont enterrés.',
        },
        badrMartyrsTable(['#', 'Nom', 'Groupe'], 'Martyrs de Badr'),
      ],
    },

    // ── Annexe — épouses et enfants ──
    {
      id: 'family',
      title: 'Annexe · Épouses et enfants du Prophète ﷺ',
      blocks: [
        {
          type: 'h3',
          id: 'wives',
          text: 'Épouses du Prophète ﷺ (Mères des croyants) — 11 épouses',
        },
        {
          type: 'note',
          text: 'Au décès du Prophète ﷺ, 9 épouses étaient en vie.',
        },
        {
          type: 'steps',
          items: [
            {
              title: 'Khadijah bint Khuwaylid',
              text:
                'Mariage : Prophète ﷺ 25 ans | Khadijah 40 ans | Premier et plus long mariage (25 ans) | La première personne à embrasser l’islam',
            },
            {
              title: 'Sawda bint Zam‘a',
              text: 'Mariage : Prophète ﷺ 50 ans | Elle était une veuve sans soutien',
            },
            {
              title: 'Aïcha bint Abi Bakr',
              text: 'Fiançailles : 6 ans | Consommation du mariage : 9 ans | Âge du Prophète ﷺ : environ 53 ans',
            },
            {
              title: 'Hafsa bint Umar',
              text: 'Mariage : Prophète ﷺ 54 ans | Veuve d’un martyr',
            },
            {
              title: 'Zaynab bint Khuzayma',
              text: 'Mariage : 55 ans | Titre : Umm al-Masakin (Mère des pauvres) | Décès : 8 mois plus tard',
            },
            {
              title: 'Umm Salama',
              text: 'Mariage : 56 ans | Veuve avec des enfants',
            },
            {
              title: 'Zaynab bint Jahsh',
              text: 'Mariage : 57 ans | Note particulière : ordonné par Allah dans le Coran (Sourate Al-Ahzab)',
            },
            {
              title: 'Juwayriya bint Harith',
              text: 'Mariage : 58 ans | Impact : toute sa tribu fut libérée',
            },
            {
              title: 'Umm Habiba',
              text: 'Mariage : 59 ans | La cérémonie eut lieu en Abyssinie',
            },
            {
              title: 'Safiyya bint Huyayy',
              text: 'Mariage : 59 ans | Lignée : d’une famille juive',
            },
            {
              title: 'Maymunah bint Harith',
              text: 'Mariage : 60 ans | Le dernier mariage',
            },
          ],
        },
        { type: 'h3', id: 'children', text: 'Enfants du Prophète ﷺ — 7 au total' },
        {
          type: 'table',
          columns: ['#', 'Nom', 'Mère', 'Décès'],
          rows: [
            ['1', 'Qasim', 'Khadijah', 'Enfance (moins de 2 ans)'],
            ['2', 'Abdullah', 'Khadijah', 'Enfance'],
            ['3', 'Zaynab', 'Khadijah', 'À l’âge de 31 ans'],
            ['4', 'Ruqayyah', 'Khadijah', 'À l’âge de 22 ans'],
            ['5', 'Umm Kulthum', 'Khadijah', 'À l’âge de 29 ans'],
            ['6', 'Fatima', 'Khadijah', '29 ans — 6 mois après le décès du Prophète ﷺ'],
            ['7', 'Ibrahim', 'Maria al-Qibtiyya', 'À l’âge de 18 mois'],
          ],
        },
        { type: 'h3', id: 'children-details', text: 'Enfants des épouses (détails)' },
        {
          type: 'infocard',
          title: 'Zaynab',
          blocks: [
            {
              type: 'p',
              text: 'Époux : Abul Aas bin Rabi‘ | Enfants : Ali (mort en bas âge), Umama',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Ruqayyah',
          blocks: [
            {
              type: 'p',
              text: 'Époux : Uthman bin Affan | Enfant : Abdullah (mort en bas âge)',
            },
          ],
        },
        {
          type: 'infocard',
          title: 'Umm Kulthum',
          blocks: [{ type: 'p', text: 'Époux : Uthman | Aucun enfant' }],
        },
        {
          type: 'infocard',
          title: 'Fatima',
          blocks: [
            {
              type: 'p',
              text:
                'Époux : Ali bin Abi Talib | Enfants : Hasan, Husayn, Muhsin (décédé), Zaynab, Umm Kulthum',
            },
          ],
        },
      ],
    },

    // ── Conclusion ──
    {
      id: 'conclusion',
      title: 'Conclusion',
      blocks: [
        {
          type: 'p',
          text:
            'Ce guide n’a pas été écrit par ostentation, mais uniquement et entièrement pour la juste guidance de la Oumma musulmane.',
        },
        {
          type: 'p',
          text:
            'Toutes les visites, événements et lieux saints mentionnés ici ont été présentés à la lumière du Coran, des ahadith authentiques et des récits fiables.',
        },
        {
          type: 'p',
          text:
            'Notre effort a été que ce voyage ne soit pas une simple visite de lieux, mais un voyage de foi, de réflexion et de conviction — où, à chaque pas, se ressentent les enseignements du Prophète ﷺ, les sacrifices des Compagnons et l’esprit de l’islam.',
        },
        { type: 'callout', text: 'آمِيْن يَا رَبَّ الْعَالَمِيْن' },
      ],
    },
  ],
};

export default guide;
