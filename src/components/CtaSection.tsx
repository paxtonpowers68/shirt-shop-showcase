import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-gold-light text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Limited Time
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get 20% Off Your
            <br />
            <span className="italic font-normal">First Order</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg mb-10 max-w-lg mx-auto">
            Join our community of well-dressed individuals and receive an
            exclusive welcome offer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-5 py-3.5 rounded bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 text-sm focus:outline-none focus:border-accent"
            />
            <Button variant="hero" size="lg" className="px-8 py-3.5 w-full sm:w-auto">
              Claim Offer
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
