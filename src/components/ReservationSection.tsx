import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ReservationSection = () => {
  const { t } = useLanguage();
  const phoneNumber = "0517779778";
  const whatsappNumber = "994517779778"; // International format for WhatsApp (+994 51 777 9778)

  return (
    <section id="reservation" className="relative py-12 sm:py-16 md:py-24 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Glow effects */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-purple/10 rounded-full blur-[100px]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gradient mb-3 sm:mb-4 px-2">
            {t.reservation.title}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 sm:mb-12 max-w-xl mx-auto px-4">
            {t.reservation.description}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Button 
            variant="neon" 
            size="xl"
            className="w-full sm:w-auto min-w-[200px] sm:min-w-[250px] animate-glow-pulse text-sm sm:text-base"
            asChild
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(t.reservation.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.reservation.whatsappButton}
            </a>
          </Button>
          
          <Button 
            variant="call" 
            size="xl"
            className="w-full sm:w-auto min-w-[200px] sm:min-w-[250px] text-sm sm:text-base"
            asChild
          >
            <a href={`tel:${phoneNumber}`}>
              <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
              {t.reservation.callButton}
            </a>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="mt-16 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary/50"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
