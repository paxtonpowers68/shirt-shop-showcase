const footerLinks = {
  Shop: ["All Shirts", "Casual", "Formal", "Limited Editions"],
  Company: ["Our Story", "Sustainability", "Careers", "Press"],
  Support: ["Contact Us", "Size Guide", "Shipping", "Returns"],
};

const Footer = () => {
  return (
    <footer className="bg-charcoal text-primary-foreground/70 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-primary-foreground mb-4">
              THREAD<span className="text-accent">&</span>CO
            </h3>
            <p className="text-sm leading-relaxed">
              Premium shirts crafted for the modern individual. Quality,
              sustainability, and timeless style.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-primary-foreground text-sm tracking-wide uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm hover:text-primary-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © 2026 Thread & Co. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
