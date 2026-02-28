import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import fabricTexture from "@/assets/fabric-texture.jpg";

const CtaSection = () => {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={fabricTexture} alt="" className="w-full h-full object-cover scale-110" aria-hidden="true" />
        <div className="absolute inset-0 bg-charcoal/92" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-accent text-xs font-semibold tracking-[0.4em] uppercase mb-6 inline-block">
            Exclusive Offer
          </span>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground mb-6 leading-[0.9]">
            20% Off Your
            <br />
            <span className="italic text-accent">First Order</span>
          </h2>

          <p className="text-primary-foreground/40 text-sm md:text-base mb-12 max-w-md mx-auto leading-relaxed font-light">
            Join our community and receive an exclusive welcome offer. 
            Be the first to know about new collections.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-6 py-4 rounded-full bg-primary-foreground/5 border border-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/30 text-sm focus:outline-none focus:border-accent/50 transition-colors"
            />
            <Button variant="hero" size="lg" className="rounded-full px-8 py-4 w-full sm:w-auto whitespace-nowrap">
              Get 20% Off
            </Button>
          </div>

          <p className="text-primary-foreground/20 text-xs mt-6">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
