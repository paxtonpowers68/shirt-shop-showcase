import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-shirts.jpg";

const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroImage}
          alt="Premium shirt collection flat lay on dark background"
          className="w-full h-[120%] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col justify-center px-6 lg:px-0"
      >
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-accent" />
              <span className="text-accent text-xs font-semibold tracking-[0.4em] uppercase">
                Spring / Summer 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="font-display text-6xl md:text-8xl lg:text-[10rem] font-light text-primary-foreground leading-[0.85] mb-8 tracking-tight"
            >
              The Art
              <br />
              <span className="italic text-accent">of Shirts</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-primary-foreground/50 text-base md:text-lg max-w-md mb-12 leading-relaxed font-light"
            >
              Meticulously crafted from the world's finest fabrics.
              Each piece tells a story of heritage and modern elegance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="hero" size="lg" className="rounded-full px-10 py-6">
                Explore Collection
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full px-10 py-6 text-primary-foreground/70 hover:text-primary-foreground hover:bg-primary-foreground/5 text-xs tracking-[0.2em] uppercase font-medium"
              >
                Watch Film →
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-primary-foreground/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-primary-foreground/30" />
        </motion.div>
      </motion.div>

      {/* Side branding */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden xl:block">
        <p className="text-primary-foreground/20 text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">
          Established 2019 — London
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
