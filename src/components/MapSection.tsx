import { motion } from "framer-motion";

const MapSection = () => {
  // Coordinates for the map - Baku, Azerbaijan
  const lat = "40.3736650";
  const lng = "49.8455310";

  return (
    <section id="map" className="relative py-8 sm:py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="relative rounded-xl sm:rounded-2xl overflow-hidden neon-border"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Map Container */}
          <div className="relative aspect-video md:aspect-[21/9] w-full">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1234567890123!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzI1LjIiTiA0OcKwNTAnNDMuOSJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zuma Gecə Klubu Ünvanı"
              className="absolute inset-0"
            />
            {/* Overlay gradient for visual integration */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/50 via-transparent to-transparent" />
          </div>

          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute top-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 border-r-2 border-b-2 border-primary/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default MapSection;
