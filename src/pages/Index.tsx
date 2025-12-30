import { Helmet } from "react-helmet-async";
import { useLanguage } from "@/contexts/LanguageContext";
import HeroSection from "@/components/HeroSection";
import ReservationSection from "@/components/ReservationSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { t } = useLanguage();
  
  return (
    <>
      <Helmet>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta name="keywords" content={t.meta.keywords} />
        <meta name="author" content="Zuma Night Club" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="AZ" />
        <meta name="geo.placename" content="Baku" />
        <meta name="geo.position" content="40.3736650;49.8455310" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zumaa.netlify.app/" />
        <meta property="og:image" content={`https://zumaa.netlify.app/logo.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Zuma Night Club Logo" />
        <meta property="og:locale" content={t.meta.title.includes('Bakı') || t.meta.title.includes('Baku') ? 'az_AZ' : 'en_US'} />
        <meta property="og:site_name" content="Zuma Night Club" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t.meta.title} />
        <meta name="twitter:description" content={t.meta.description} />
        <meta name="twitter:image" content={`https://zumaa.netlify.app/logo.png`} />
        <meta name="twitter:image:alt" content="Zuma Night Club Logo" />
        <meta name="twitter:site" content="@zuma.baku" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://zumaa.netlify.app/" />
      </Helmet>
      
      <main className="min-h-screen bg-background" style={{ backgroundColor: 'hsl(var(--background))' }}>
        <HeroSection />
        <ReservationSection />
        <ContactSection />
        <MapSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
