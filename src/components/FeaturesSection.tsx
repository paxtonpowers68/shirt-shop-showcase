import { motion } from "framer-motion";
import { Scissors, Leaf, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Scissors,
    title: "Master Tailoring",
    description: "Precision-cut by expert craftsmen with decades of heritage.",
    number: "01",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description: "Ethically sourced fabrics from certified sustainable farms.",
    number: "02",
  },
  {
    icon: Award,
    title: "Lifetime Quality",
    description: "We stand behind every stitch. Free repairs for life.",
    number: "03",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary express delivery on orders over $150.",
    number: "04",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-28 lg:py-40 bg-secondary/50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent text-xs font-semibold tracking-[0.4em] uppercase">
            Why Us
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mt-3">
            Crafted with <span className="italic">purpose</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-300"
            >
              <span className="text-muted-foreground/30 text-xs font-mono mb-8 block">
                {feature.number}
              </span>
              <div className="w-12 h-12 mb-6 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-medium text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
