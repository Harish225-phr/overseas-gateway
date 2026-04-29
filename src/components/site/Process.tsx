import { MessageCircle, FileSearch, Send, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Consultation", desc: "Free expert assessment of your profile and goals." },
  { icon: FileSearch, title: "Document Review", desc: "Thorough review and preparation of all paperwork." },
  { icon: Send, title: "Application Submission", desc: "Accurate filing with embassy or immigration office." },
  { icon: CheckCircle2, title: "Visa Approval", desc: "Receive your visa and start your journey abroad." },
];

const Process = () => {
  return (
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Our Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            A Simple 4-Step Path to Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Clear, structured and stress-free — from start to approval.
          </p>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent via-accent to-accent opacity-30" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative text-center group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both" }}
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="absolute inset-0 gradient-gold rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-smooth" />
                  <div className="relative w-24 h-24 rounded-full bg-card border-2 border-accent shadow-card flex items-center justify-center group-hover:scale-110 transition-bounce">
                    <s.icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-9 h-9 rounded-full gradient-primary text-primary-foreground font-display font-bold flex items-center justify-center shadow-soft">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm px-4">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
