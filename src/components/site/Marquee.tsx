const items = [
  "🇨🇦 Canada PR",
  "🇦🇺 Australia Skilled Migration",
  "🇬🇧 UK Student Visa",
  "🇺🇸 USA F1 / H1B",
  "🇩🇪 Germany Work Permit",
  "🇳🇿 New Zealand PR",
  "🇸🇬 Singapore EP",
  "🇦🇪 UAE Golden Visa",
  "🇮🇪 Ireland Study",
  "🇫🇷 France Schengen",
];

const Marquee = () => {
  const row = [...items, ...items];
  return (
    <div className="bg-primary py-5 border-y border-accent/20 overflow-hidden marquee-mask">
      <div className="marquee-track gap-12">
        {row.map((it, i) => (
          <div key={i} className="flex items-center gap-3 whitespace-nowrap">
            <span className="font-display text-primary-foreground font-semibold text-lg">{it}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
