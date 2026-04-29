import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does the visa process take?",
    a: "Processing time depends on the visa type and destination country. Tourist visas typically take 5–15 working days, student visas 4–8 weeks, and work or PR visas 2–6 months. We provide accurate timelines after your initial consultation.",
  },
  {
    q: "What documents are required?",
    a: "Standard documents include a valid passport, photographs, financial statements, educational certificates and purpose-specific documents (admission letter, employment contract, invitation letter, etc.). Our team gives you a personalized checklist.",
  },
  {
    q: "What is your visa success rate?",
    a: "We maintain a 98% visa approval rate across all categories — backed by our experienced legal team, thorough documentation and personalized application strategy.",
  },
  {
    q: "Do you charge for the initial consultation?",
    a: "No — your first consultation is completely FREE. We assess your profile, recommend the best visa pathway and provide a transparent fee structure before you commit to anything.",
  },
  {
    q: "Do you handle rejected visa cases?",
    a: "Yes. We specialize in re-applications and appeals. Our legal team analyzes the rejection reasons and builds a stronger case for resubmission.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Quick answers to the questions we hear most often.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-xl px-6 shadow-soft hover:shadow-card transition-smooth data-[state=open]:border-accent"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-primary hover:text-accent hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
