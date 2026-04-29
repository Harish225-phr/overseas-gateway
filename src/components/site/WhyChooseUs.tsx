import { Users, Trophy, Scale, Rocket, Eye, Headphones } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Consultants", desc: "15+ years guiding clients to success." },
  { icon: Trophy, title: "High Visa Success Rate", desc: "98% approval rate across all visa types." },
  { icon: Scale, title: "Legal Expertise", desc: "Certified immigration lawyers on team." },
  { icon: Rocket, title: "Fast Processing", desc: "Quick turnaround without compromising quality." },
  { icon: Eye, title: "Transparent Process", desc: "No hidden fees, clear communication always." },
  { icon: Headphones, title: "24/7 Support", desc: "We're here whenever you need us." },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full gradient-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            The Trusted Choice for Your Visa Journey
          </h2>
          <p className="text-primary-foreground/75 text-lg">
            Thousands of clients trust us for one simple reason — we deliver results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group flex gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent hover:bg-white/10 transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s`, animationFillMode: "both" }}
            >
              <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-bounce">
                <r.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-primary-foreground mb-1">
                  {r.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
