import { Plane, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Countries", href: "#countries" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className={`w-10 h-10 rounded-lg gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-bounce`}>
            <Plane className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className={`font-display font-bold text-base ${scrolled ? "text-primary" : "text-white"}`}>
              NINE OVERSEAS DK
            </div>
            <div className={`text-[10px] uppercase tracking-widest ${scrolled ? "text-accent" : "text-accent-glow"}`}>
              Immigration
            </div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-smooth hover:text-accent relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+919723955604"
          className="hidden md:inline-flex items-center gap-2 gradient-gold text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-gold hover:scale-105 transition-bounce"
        >
          <Phone className="w-4 h-4" />
          +91 97239 55604
        </a>

        <button
          onClick={() => setOpen(!open)}
          className={`lg:hidden p-2 ${scrolled ? "text-primary" : "text-white"}`}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-smooth ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-smooth ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-smooth ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-background border-t border-border mt-3 animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-foreground hover:text-accent hover:bg-secondary rounded-lg transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:+919723955604"
              className="mt-2 inline-flex items-center justify-center gap-2 gradient-gold text-accent-foreground px-5 py-3 rounded-full font-semibold"
            >
              <Phone className="w-4 h-4" /> +91 97239 55604
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
