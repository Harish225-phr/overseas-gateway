import { GraduationCap, Briefcase, Plane, Home, FileText, MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: GraduationCap,
    title: "Student Visa",
    desc: "Pursue your dream education abroad with end-to-end student visa support and university guidance.",
  },
  {
    icon: Briefcase,
    title: "Work Visa",
    desc: "Skilled worker, employer-sponsored and professional work permits for top global destinations.",
  },
  {
    icon: Plane,
    title: "Tourist Visa",
    desc: "Hassle-free tourist and visitor visas with quick processing for leisure and family travel.",
  },
  {
    icon: Home,
    title: "PR / Immigration",
    desc: "Permanent residency and citizenship pathways with complete legal documentation support.",
  },
  {
    icon: FileText,
    title: "Passport Services",
    desc: "New passport application, renewal, re-issue and urgent travel documents made simple.",
  },
  {
    icon: MapPin,
    title: "Travel Assistance",
    desc: "Flight booking, accommodation and complete travel planning for a smooth journey.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
              Our Services
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Complete Visa & Immigration Solutions
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive services tailored to your goals — handled by certified experts.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={i * 100}>
              <div className="card-shine group relative bg-card rounded-2xl p-7 border border-border hover:border-accent shadow-soft hover:shadow-elegant transition-bounce hover:-translate-y-2 h-full">
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-bounce">
                  <ArrowUpRight className="w-5 h-5 text-accent" />
                </div>
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-bounce shadow-soft">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-smooth">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                <div className="mt-5 h-1 w-12 gradient-gold rounded-full group-hover:w-full transition-smooth" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
