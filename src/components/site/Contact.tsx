import { Phone, MapPin, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  visaType: z.string().min(1, "Please select a visa type"),
  message: z.string().trim().max(1000).optional(),
});

const visaTypes = [
  "Student Visa",
  "Work Visa",
  "Tourist Visa",
  "PR / Immigration",
  "Passport Service",
  "Other",
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", visaType: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! Our team will contact you shortly.");
      setForm({ name: "", phone: "", visaType: "", message: "" });
      setSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-in">
          <span className="inline-block text-accent font-semibold uppercase tracking-widest text-sm mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Start Your Visa Journey Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out for a free consultation — we typically respond within 1 hour.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info + map */}
          <div className="space-y-5 animate-fade-in-up">
            <a
              href="tel:+919723955604"
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent shadow-soft hover:shadow-card transition-smooth group"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-bounce">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Call Us</div>
                <div className="font-display font-semibold text-primary text-lg">+91 97239 55604</div>
              </div>
            </a>

            <a
              href="https://wa.me/919723955604"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-accent shadow-soft hover:shadow-card transition-smooth group"
            >
              <div className="w-14 h-14 rounded-xl bg-[hsl(142_70%_45%)] flex items-center justify-center shrink-0 group-hover:scale-110 transition-bounce">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">WhatsApp</div>
                <div className="font-display font-semibold text-primary text-lg">Chat with us instantly</div>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft">
              <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Office</div>
                <div className="font-display font-semibold text-primary">NINE OVERSEAS DK Immigration</div>
                <div className="text-sm text-muted-foreground">Visit us during business hours</div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-card border border-border h-64">
              <iframe
                title="Office location"
                src="https://www.google.com/maps?q=India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form
            id="consultation"
            onSubmit={onSubmit}
            className="bg-card rounded-2xl p-7 md:p-9 shadow-elegant border border-border animate-fade-in-up"
          >
            <h3 className="font-display text-2xl font-bold text-primary mb-2">
              Get Free Consultation
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Fill the form and our experts will reach out to you.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-smooth"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  maxLength={20}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-smooth"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Visa Type</label>
                <select
                  required
                  value={form.visaType}
                  onChange={(e) => setForm({ ...form, visaType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-smooth"
                >
                  <option value="">Select visa type</option>
                  {visaTypes.map((v) => (
                    <option key={v} value={v}>{v}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-smooth resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full inline-flex items-center justify-center gap-2 gradient-gold text-accent-foreground px-6 py-4 rounded-lg font-semibold shadow-gold hover:scale-[1.02] transition-bounce disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Sending..." : "Get Free Consultation"}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
