export type Language = 'az' | 'en';

export const translations = {
  az: {
    hero: {
      subtitle: 'NIGHT CLUB',
      tagline: 'Gecə Həyatı • Musiqi • Enerji',
      reserveButton: 'İndi Rezerv Et',
      callButton: '051 777 9778',
    },
    reservation: {
      title: 'MASANIZI REZERV EDİN',
      description: 'VIP təcrübənizi təmin edin. Unudulmaz bir gecə üçün indi rezervasiya edin.',
      whatsappButton: 'WhatsApp ilə Rezerv Et',
      callButton: '051 777 9778',
      whatsappMessage: 'Salam, Zuma Night Club-da masa rezerv etmək istəyirəm',
    },
    contact: {
      title: 'ƏLAQƏ & ÜNVAN',
      description: 'Bizi tapın və gecənizi düzgün başlayın',
      callUs: 'BİZİMLƏ ƏLAQƏ',
      phoneNumber: '051 777 9778',
      findUs: 'BİZİ TAPIN',
      googleMaps: 'Google Maps-də aç',
      waze: 'Waze-də aç',
      bolt: 'Bolt-da aç',
      instagram: 'Instagram',
      tiktok: 'TikTok',
    },
    footer: {
      copyright: 'Bütün Hüquqlar Qorunur',
      followUs: 'Bizi izləyin',
    },
    meta: {
      title: 'Zuma Night Club - Premium Gecə Həyatı Təcrübəsi | Bakı',
      description: 'Bakıda Zuma Night Club-da ən yaxşı gecə həyatını yaşayın. Musiqi, enerji və unudulmaz gecələr. VIP masanızı indi rezerv edin. Zəng: 051 777 9778',
      keywords: 'zuma night club, bakı gecə klubu, azərbaycan gecə həyatı, vip klub bakı, gecə klubu bakı, partiya bakı, musiqi klub bakı, nightclub baku, azerbaijan nightlife',
    },
  },
  en: {
    hero: {
      subtitle: 'NIGHT CLUB',
      tagline: 'Nightlife • Music • Energy',
      reserveButton: 'Reserve Now',
      callButton: '051 777 9778',
    },
    reservation: {
      title: 'RESERVE YOUR TABLE',
      description: 'Secure your VIP experience. Book now for an unforgettable night.',
      whatsappButton: 'Reserve via WhatsApp',
      callButton: '051 777 9778',
      whatsappMessage: "Hi, I'd like to reserve a table at Zuma Night Club",
    },
    contact: {
      title: 'CONTACT & LOCATION',
      description: 'Find us and start your night right',
      callUs: 'CALL US',
      phoneNumber: '051 777 9778',
      findUs: 'FIND US',
      googleMaps: 'Open in Google Maps',
      waze: 'Open in Waze',
      bolt: 'Open in Bolt',
      instagram: 'Instagram',
      tiktok: 'TikTok',
    },
    footer: {
      copyright: 'All Rights Reserved',
      followUs: 'Follow Us',
    },
    meta: {
      title: 'Zuma Night Club - Premium Nightlife Experience | Baku',
      description: 'Experience the ultimate nightlife at Zuma Night Club in Baku, Azerbaijan. Music, energy, and unforgettable nights. Reserve your VIP table now. Call 051 777 9778',
      keywords: 'zuma night club, baku nightclub, azerbaijan nightlife, vip club baku, nightclub baku, party baku, music club baku, nightclub, club, nightlife, VIP, music, party, entertainment',
    },
  },
};

export type TranslationKey = keyof typeof translations.az;

