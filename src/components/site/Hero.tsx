import heroImg from "@/assets/hero-airport.jpg";
import { ArrowRight, CheckCircle2, Award, Zap } from "lucide-react";

const badges = [
  { icon: CheckCircle2, label: "1000+ Successful Visa Cases" },
  { icon: Award, label: "Expert Legal Guidance" },
  { icon: Zap, label: "Fast Processing" },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Travelers at airport with airplane taking off at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 gradient-hero" />

      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/40 backdrop-blur-sm text-accent-glow px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-gold" />
            Trusted Immigration Experts Since 2010
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
            Your Trusted Partner for{" "}
            <span className="text-gradient-gold">Visa & Immigration</span> Services
          </h1>

          <p className="text-lg sm:text-xl text-white/85 mb-8 max-w-2xl">
            Student Visa <span className="text-accent">•</span> Work Visa{" "}
            <span className="text-accent">•</span> Tourist Visa{" "}
            <span className="text-accent">•</span> Passport Services
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#consultation"
              className="group inline-flex items-center gap-2 gradient-gold text-accent-foreground px-7 py-4 rounded-full font-semibold shadow-gold hover:scale-105 transition-bounce"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition-smooth"
            >
              Get Free Consultation
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {badges.map((b, i) => (
              <div
                key={b.label}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 animate-fade-in"
                style={{ animationDelay: `${0.3 + i * 0.15}s`, animationFillMode: "both" }}
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
