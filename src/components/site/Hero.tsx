import heroImg from "@/assets/hero-airport.jpg";
import { ArrowRight, CheckCircle2, Award, Zap, Plane } from "lucide-react";
import { useEffect, useState } from "react";

const badges = [
  { icon: CheckCircle2, label: "1000+ Successful Visa Cases" },
  { icon: Award, label: "Expert Legal Guidance" },
  { icon: Zap, label: "Fast Processing" },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${scrollY * 0.35}px, 0)` }}
      >
        <img
          src={heroImg}
          alt="Travelers at airport with airplane taking off at sunset"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* floating decorative blobs */}
      <div className="blob bg-accent w-96 h-96 -top-20 -right-20 animate-blob" />
      <div className="blob bg-primary-glow w-80 h-80 bottom-10 -left-20 animate-blob" style={{ animationDelay: "3s" }} />

      {/* floating plane */}
      <Plane
        className="absolute text-accent/70 w-10 h-10 hidden md:block animate-float"
        style={{ top: "22%", right: "12%", transform: `translateY(${scrollY * -0.15}px)` }}
      />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 backdrop-blur-sm text-accent-glow px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-gold" />
            Trusted Immigration Experts Since 2010
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-in-up">
            Your Trusted Partner for{" "}
            <span className="text-shimmer">Visa & Immigration</span> Services
          </h1>

          <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
            Student Visa <span className="text-accent">•</span> Work Visa{" "}
            <span className="text-accent">•</span> Tourist Visa{" "}
            <span className="text-accent">•</span> Passport Services
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.35s", animationFillMode: "both" }}>
            <a
              href="#consultation"
              className="group inline-flex items-center gap-2 gradient-gold text-accent-foreground px-7 py-4 rounded-full font-semibold shadow-gold hover:scale-105 hover:shadow-elegant transition-bounce animate-pulse-gold"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-primary hover:scale-105 transition-bounce"
            >
              Get Free Consultation
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {badges.map((b, i) => (
              <div
                key={b.label}
                className="card-shine flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 hover:border-accent/60 hover:-translate-y-1 transition-bounce animate-fade-in-up"
                style={{ animationDelay: `${0.5 + i * 0.15}s`, animationFillMode: "both" }}
              >
                <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-accent-foreground" />
                </div>
                <span className="text-white font-medium text-sm">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-accent animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
