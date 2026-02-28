import { motion } from "framer-motion";

const MarqueeStrip = () => {
  const words = [
    "Premium Cotton",
    "✦",
    "Italian Linen",
    "✦",
    "Japanese Selvedge",
    "✦",
    "Egyptian Silk",
    "✦",
    "Swiss Voile",
    "✦",
    "Organic Hemp",
    "✦",
  ];

  return (
    <section className="py-5 bg-primary text-primary-foreground overflow-hidden border-y border-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="mx-6 text-xs tracking-[0.3em] uppercase font-light"
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
};

export default MarqueeStrip;
