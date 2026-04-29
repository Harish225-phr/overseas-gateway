import aboutImg from "@/assets/about-consultation.jpg";
import { ShieldCheck, TrendingUp, Globe2 } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "98%", label: "Success Rate" },
  { icon: Globe2, value: "25+", label: "Countries" },
  { icon: ShieldCheck, value: "15+", label: "Years Experience" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative animate-fade-in">
          <div className="absolute -top-6 -left-6 w-32 h-32 gradient-gold rounded-2xl opacity-20 blur-2xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={aboutImg}
              alt="Immigration consultant reviewing visa documents with client"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1280}
              height={896}
            />
          </div>
          <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-card shadow-elegant rounded-2xl p-5 border border-border max-w-[220px]">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl text-primary">1000+</div>
                <div className="text-xs text-muted-foreground">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in-up">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            About Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
            Guiding Your Journey to a{" "}
            <span className="text-gradient-gold">Brighter Future</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            At <span className="text-primary font-semibold">NINE OVERSEAS DK Immigration</span>, we
            provide expert guidance for visa applications, immigration processes and travel
            documentation with high success rates. Our team of certified consultants and immigration
            lawyers work tirelessly to make your global dreams a reality.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From your first consultation to final visa approval, we handle every step with
            precision, transparency and care.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="text-center p-4 rounded-xl bg-secondary border border-border hover:border-accent hover:shadow-card transition-smooth"
              >
                <s.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <div className="font-display font-bold text-2xl text-primary">{s.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
