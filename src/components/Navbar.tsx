import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Collections", "New Arrivals", "Tailoring", "About"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-6 lg:px-8">
        <a href="#" className="font-display text-3xl font-light tracking-tight text-foreground">
          thread<span className="text-accent font-bold">&</span>co
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full relative">
            <ShoppingBag className="h-4 w-4" />
            <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-accent-foreground text-[10px] rounded-full flex items-center justify-center font-bold">
              2
            </span>
          </Button>
          <Button variant="hero" size="sm" className="ml-2 rounded-full px-6">
            Shop Now
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-5">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <Button variant="hero" size="sm" className="w-fit rounded-full px-6">
                Shop Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
