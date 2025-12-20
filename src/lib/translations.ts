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
    },
    footer: {
      copyright: 'Bütün Hüquqlar Qorunur',
    },
    meta: {
      title: 'Zuma Night Club - Premium Gecə Həyatı Təcrübəsi',
      description: 'Zuma Night Club-da ən yaxşı gecə həyatını yaşayın. Musiqi, enerji və unudulmaz gecələr. VIP masanızı indi rezerv edin.',
      keywords: 'gecə klubu, klub, gecə həyatı, VIP, musiqi, partiya, əyləncə',
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
    },
    footer: {
      copyright: 'All Rights Reserved',
    },
    meta: {
      title: 'Zuma Night Club - Premium Nightlife Experience',
      description: 'Experience the ultimate nightlife at Zuma Night Club. Music, energy, and unforgettable nights. Reserve your VIP table now.',
      keywords: 'nightclub, club, nightlife, VIP, music, party, entertainment',
    },
  },
};

export type TranslationKey = keyof typeof translations.az;

