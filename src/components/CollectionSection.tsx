import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import shirtCasual from "@/assets/shirt-casual.jpg";
import shirtFormal from "@/assets/shirt-formal.jpg";
import shirtPattern from "@/assets/shirt-pattern.jpg";

const collections = [
  {
    title: "Casual",
    subtitle: "Effortless Style",
    description: "Relaxed fits in premium linen and cotton.",
    image: shirtCasual,
    alt: "Casual white linen shirt on wooden hanger",
    count: "24 pieces",
  },
  {
    title: "Formal",
    subtitle: "Boardroom Ready",
    description: "Tailored precision for commanding presence.",
    image: shirtFormal,
    alt: "Navy blue formal dress shirt folded on marble",
    count: "18 pieces",
  },
  {
    title: "Patterns",
    subtitle: "Make A Statement",
    description: "Bold prints and textures for the daring.",
    image: shirtPattern,
    alt: "Plaid flannel shirts on minimalist rack",
    count: "32 pieces",
  },
];

const CollectionSection = () => {
  return (
    <section id="collections" className="py-28 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent text-xs font-semibold tracking-[0.4em] uppercase">
              Collections
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mt-3 leading-[0.9]">
              Curated
              <br />
              <span className="italic">for you</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm max-w-xs leading-relaxed"
          >
            Three distinct collections, each crafted for a different moment
            in your life. Discover your signature look.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {collections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group cursor-pointer relative"
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-500" />

                {/* Content on image */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <span className="text-primary-foreground/50 text-[10px] tracking-[0.3em] uppercase font-medium block mb-2">
                    {item.count}
                  </span>
                  <h3 className="font-display text-3xl lg:text-4xl font-light text-primary-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary-foreground/60 text-sm font-light">
                    {item.subtitle}
                  </p>
                </div>

                {/* Arrow button */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                  <ArrowUpRight className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
