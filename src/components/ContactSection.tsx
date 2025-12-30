import { motion } from "framer-motion";
import { Phone, MapPin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// TikTok Logo SVG - Simple TikTok icon
const TikTokLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);
import wazeLogo from "@/assets/waze_app_icon-logo_brandlogos.net_l82da.png";

// Waze Logo Component - Using real logo image
const WazeLogo = ({ className }: { className?: string }) => (
  <img 
    src={wazeLogo} 
    alt="Waze" 
    className={className}
    style={{ objectFit: 'contain' }}
  />
);

const ContactSection = () => {
  const { t } = useLanguage();
  const phoneNumber = "0517779778";
  const instagramUrl = "https://www.instagram.com/zuma.baku/";
  const tiktokUrl = "https://www.tiktok.com/@menklov?_r=1&_t=ZS-92YKGDXMUFk";
  
  // Location - Baku, Azerbaijan
  const location = {
    address: "Baku, Azerbaijan",
    lat: "40.3736650",
    lng: "49.8455310",
    placeId: "ChIJd8BlQ2A" // Placeholder
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      {/* Glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px]"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient-blue mb-3 sm:mb-4 px-2">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg px-4">
            {t.contact.description}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Contact Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 sm:p-8 text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-neon-purple to-neon-pink flex items-center justify-center">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">{t.contact.callUs}</h3>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full"
              asChild
            >
              <a href={`tel:${phoneNumber}`}>
                {t.contact.phoneNumber}
              </a>
            </Button>
          </motion.div>

          {/* Address Card */}
          <motion.div
            variants={itemVariants}
            className="glass rounded-2xl p-6 sm:p-8 text-center"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-foreground" />
            </div>
            <h3 className="font-display text-xl sm:text-2xl text-foreground mb-3 sm:mb-4">{t.contact.findUs}</h3>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 px-2">{location.address}</p>
          </motion.div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            variant="glass" 
            size="lg"
            className="flex-1 sm:flex-initial text-sm sm:text-base"
            asChild
          >
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.contact.googleMaps}
            </a>
          </Button>
          
          <Button 
            variant="glass" 
            size="lg"
            className="flex-1 sm:flex-initial text-sm sm:text-base"
            asChild
          >
            <a href={wazeUrl} target="_blank" rel="noopener noreferrer">
              <WazeLogo className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.contact.waze}
            </a>
          </Button>
          
          <Button 
            variant="glass" 
            size="lg"
            className="flex-1 sm:flex-initial text-sm sm:text-base"
            asChild
          >
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.contact.instagram}
            </a>
          </Button>
          
          <Button 
            variant="glass" 
            size="lg"
            className="flex-1 sm:flex-initial text-sm sm:text-base"
            asChild
          >
            <a href={tiktokUrl} target="_blank" rel="noopener noreferrer">
              <TikTokLogo className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.contact.tiktok}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
