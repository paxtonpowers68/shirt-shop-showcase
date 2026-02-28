import { Instagram, Twitter } from "lucide-react";

const footerLinks = {
  Shop: ["All Shirts", "Casual", "Formal", "Limited Editions"],
  Company: ["Our Story", "Sustainability", "Careers", "Press"],
  Support: ["Contact Us", "Size Guide", "Shipping & Returns", "FAQ"],
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground/50 pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-16">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-light text-primary-foreground mb-4">
              thread<span className="text-accent font-bold">&</span>co
            </h3>
            <p className="text-sm leading-relaxed max-w-xs font-light mb-6">
              Premium shirts crafted for the modern individual. 
              Quality, sustainability, and timeless style since 2019.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-accent/50 hover:text-accent transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-primary-foreground/10 flex items-center justify-center hover:border-accent/50 hover:text-accent transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-primary-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm font-light hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-light">
            © 2026 Thread & Co. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs font-light">
            <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
