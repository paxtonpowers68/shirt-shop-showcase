import { motion } from "framer-motion";
import { Scissors, Leaf, Award, Truck } from "lucide-react";
import fabricTexture from "@/assets/fabric-texture.jpg";

const features = [
  {
    icon: Scissors,
    title: "Master Tailoring",
    description: "Every shirt is cut with precision by expert craftsmen with decades of experience.",
  },
  {
    icon: Leaf,
    title: "Sustainable Fabrics",
    description: "Ethically sourced cotton, linen, and silk from certified sustainable farms.",
  },
  {
    icon: Award,
    title: "Lifetime Quality",
    description: "We stand behind every stitch. Free repairs and replacements for life.",
  },
  {
    icon: Truck,
    title: "Free Worldwide",
    description: "Complimentary express shipping on all orders over $150.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src={fabricTexture} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-3">
            Why Thread & Co
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Crafted with Purpose
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-accent/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
