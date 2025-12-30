import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

// TikTok Logo SVG - Simple TikTok icon
const TikTokLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const instagramUrl = "https://www.instagram.com/zuma.baku/";
  const tiktokUrl = "https://www.tiktok.com/@menklov?_r=1&_t=ZS-92YKGDXMUFk";

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
          
          {/* Social Media Links */}
          <motion.div
            className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-3 justify-center items-center"
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
                <span>Instagram</span>
              </a>
            </Button>
            
            <Button
              variant="glass"
              size="lg"
              className="group"
              asChild
            >
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <TikTokLogo className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>TikTok</span>
              </a>
            </Button>
          </motion.div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-xs sm:text-sm tracking-wider px-4 break-words mb-2">
            Zuma Night Club — {t.footer.copyright} © {currentYear}
          </p>
          
          {/* Made by */}
          <p className="text-muted-foreground/70 text-xs tracking-wider px-4">
            {t.footer.madeBy}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
