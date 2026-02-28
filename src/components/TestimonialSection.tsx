import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "Creative Director, Studio M",
    text: "The quality is unmatched. I've replaced my entire wardrobe with Thread & Co shirts. The fit is perfect every single time.",
    rating: 5,
    initials: "JM",
  },
  {
    name: "Sarah Chen",
    role: "Principal Architect",
    text: "Finally, shirts that transition seamlessly from the studio to dinner. The fabrics are extraordinary — you can feel the difference.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "David Okonkwo",
    role: "Founder, Apex Ventures",
    text: "I've been a customer for three years. The consistency and attention to detail keep me coming back. Best investment in my wardrobe.",
    rating: 5,
    initials: "DO",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-28 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-accent text-xs font-semibold tracking-[0.4em] uppercase">
            Testimonials
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-light text-foreground mt-3">
            Loved by <span className="italic">many</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-card rounded-2xl p-8 lg:p-10 border border-border hover:border-accent/20 transition-colors duration-300 group"
            >
              <Quote className="w-8 h-8 text-accent/20 mb-6 group-hover:text-accent/40 transition-colors duration-300" />

              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-8 text-sm font-light">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="text-accent text-xs font-semibold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
