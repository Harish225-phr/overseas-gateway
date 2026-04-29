import { Star, Quote } from "lucide-react";
import Reveal from "./Reveal";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Canada PR — Toronto",
    text: "NINE OVERSEAS made my Canada PR dream come true. The team handled everything professionally and I got my approval in record time!",
    rating: 5,
    initials: "PS",
  },
  {
    name: "Rahul Mehta",
    role: "UK Student Visa",
    text: "Excellent guidance from start to finish. They reviewed every document and prepared me thoroughly for my visa interview. Highly recommended!",
    rating: 5,
    initials: "RM",
  },
  {
    name: "Anjali Patel",
    role: "Australia Work Visa",
    text: "Transparent process, no hidden fees and constant updates. Got my Australia work visa approved on the first attempt. Truly trustworthy team.",
    rating: 5,
    initials: "AP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
              Testimonials
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Success Stories from Our Clients
            </h2>
            <p className="text-muted-foreground text-lg">
              Real people. Real visas. Real success.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant={i === 0 ? "left" : i === 2 ? "right" : "up"} delay={i * 150}>
              <div className="card-shine relative bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-elegant hover:border-accent hover:-translate-y-2 transition-bounce h-full">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/15" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-display font-semibold text-primary">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
