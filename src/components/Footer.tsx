import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/zuma.baku/";

  return (
    <footer className="relative py-8 sm:py-12 px-4 border-t border-border/30">
      {/* Subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[80px] sm:h-[100px] bg-neon-purple/5 rounded-full blur-[40px] sm:blur-[60px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <h3 className="font-display text-2xl sm:text-3xl text-gradient mb-3 sm:mb-4">ZUMA</h3>
          
          {/* Divider */}
          <div className="w-16 sm:w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-4 sm:mb-6" />
          
          {/* Instagram Link */}
          <motion.div
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="glass"
              size="lg"
              className="group"
              asChild
            >
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{t.footer.followUs}</span>
              </a>
            </Button>
          </motion.div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-xs sm:text-sm tracking-wider px-4 break-words">
            Zuma Night Club — {t.footer.copyright} © {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
