import { Plane, Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-6">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center">
                <Plane className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="leading-tight">
                <div className="font-display font-bold">NINE OVERSEAS DK</div>
                <div className="text-[10px] uppercase tracking-widest text-accent">Immigration</div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-5">
              Your trusted partner for visa, immigration and travel services. Expert guidance, proven results.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Home", "About", "Services", "Process", "Countries", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-accent transition-smooth">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Student Visa", "Work Visa", "Tourist Visa", "PR / Immigration", "Passport Services", "Travel Assistance"].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-accent transition-smooth">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:+919723955604" className="hover:text-accent transition-smooth">+91 97239 55604</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:info@nineoverseas.com" className="hover:text-accent transition-smooth">info@nineoverseas.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>NINE OVERSEAS DK Immigration Office</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} NINE OVERSEAS DK Immigration. All rights reserved.</p>
          <p>
            Powered by <span className="text-accent font-semibold">TechHim Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
