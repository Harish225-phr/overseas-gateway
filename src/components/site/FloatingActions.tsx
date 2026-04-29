import { MessageCircle, Phone } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919723955604"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] text-white shadow-elegant flex items-center justify-center hover:scale-110 transition-bounce animate-pulse-gold"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+919723955604"
        aria-label="Call us"
        className="w-14 h-14 rounded-full gradient-primary text-primary-foreground shadow-elegant flex items-center justify-center hover:scale-110 transition-bounce"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default FloatingActions;
