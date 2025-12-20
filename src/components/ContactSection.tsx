import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

// Waze Logo SVG - Waze icon with brand colors
const WazeLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#33CCFF"/>
    <circle cx="9" cy="9" r="1.5" fill="white"/>
    <circle cx="15" cy="9" r="1.5" fill="white"/>
    <path d="M8 14c0 2 1.5 3 4 3s4-1 4-3" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
  </svg>
);

// Bolt Logo SVG - Lightning bolt with brand color
const BoltLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#FFD700"/>
  </svg>
);

const ContactSection = () => {
  const { t } = useLanguage();
  const phoneNumber = "0517779778";
  
  // Generic location - easily changeable
  const location = {
    address: "123 Party Street, Entertainment District",
    lat: "-26.2041",
    lng: "28.0473",
    placeId: "ChIJd8BlQ2A" // Placeholder
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`;
  const wazeUrl = `https://waze.com/ul?ll=${location.lat},${location.lng}&navigate=yes`;
  const boltUrl = `https://m.bolt.eu/pickup/${location.lat},${location.lng}`;

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
            <a href={boltUrl} target="_blank" rel="noopener noreferrer">
              <BoltLogo className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.contact.bolt}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
