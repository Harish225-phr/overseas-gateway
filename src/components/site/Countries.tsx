import Reveal from "./Reveal";
  { name: "Canada", flag: "🇨🇦", desc: "PR, Study & Work" },
  { name: "Australia", flag: "🇦🇺", desc: "Skilled Migration" },
  { name: "United Kingdom", flag: "🇬🇧", desc: "Student & Work" },
  { name: "United States", flag: "🇺🇸", desc: "F1, H1B & B1/B2" },
  { name: "Europe", flag: "🇪🇺", desc: "Schengen & Settlement" },
];

const Countries = () => {
  return (
    <section id="countries" className="py-20 md:py-28 bg-secondary/50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Destinations
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Countries We Serve
          </h2>
          <p className="text-muted-foreground text-lg">
            We help you reach the world's top destinations with confidence.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
          {countries.map((c, i) => (
            <div
              key={c.name}
              className="group relative bg-card rounded-2xl p-6 text-center border border-border hover:border-accent shadow-soft hover:shadow-elegant transition-bounce hover:-translate-y-2 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
            >
              <div className="text-6xl mb-4 group-hover:scale-125 transition-bounce inline-block">
                {c.flag}
              </div>
              <h3 className="font-display font-semibold text-primary mb-1">{c.name}</h3>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
              <div className="mt-3 h-0.5 w-8 mx-auto gradient-gold rounded-full group-hover:w-full transition-smooth" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
