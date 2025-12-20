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
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://zumanightclub.com" />
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
