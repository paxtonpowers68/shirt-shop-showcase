import { motion } from "framer-motion";
import shirtCasual from "@/assets/shirt-casual.jpg";
import shirtFormal from "@/assets/shirt-formal.jpg";
import shirtPattern from "@/assets/shirt-pattern.jpg";

const collections = [
  {
    title: "Casual Elegance",
    description: "Relaxed fits in premium linen and cotton for effortless style.",
    image: shirtCasual,
    alt: "Casual white linen shirt on wooden hanger",
    price: "From $89",
  },
  {
    title: "Formal Edit",
    description: "Tailored precision for the boardroom and beyond.",
    image: shirtFormal,
    alt: "Navy blue formal dress shirt folded on marble",
    price: "From $129",
  },
  {
    title: "Pattern Play",
    description: "Bold prints and textures that make a statement.",
    image: shirtPattern,
    alt: "Plaid flannel shirts on minimalist rack",
    price: "From $99",
  },
];

const CollectionSection = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Curated For You
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Our Collections
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded">
                    Shop Now
                  </span>
                </div>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
              <p className="text-accent font-semibold text-sm">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
