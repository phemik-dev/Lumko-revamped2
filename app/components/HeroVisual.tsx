export default function HeroVisual() {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-2xl border border-[#e6edf3] bg-[#f8fbff]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(31,93,153,0.12),transparent_44%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_65%,rgba(31,138,138,0.08),transparent_42%)]" />
      <div className="absolute left-12 top-24 h-60 w-60 rounded-full border border-blue/15" />
      <div className="absolute right-12 top-14 h-72 w-72 rounded-full border border-teal/15" />
      <div className="absolute left-[18%] top-[38%] h-px w-52 bg-blue/50" />
      <div className="absolute left-[44%] top-[44%] h-px w-44 bg-gold/70" />
      <div className="absolute left-[34%] top-[52%] h-px w-60 bg-teal/40" />
      <div className="absolute left-[30%] top-[34%] h-3 w-3 rounded-full bg-blue" />
      <div className="absolute left-[56%] top-[45%] h-3 w-3 rounded-full bg-gold" />
      <div className="absolute left-[48%] top-[58%] h-3 w-3 rounded-full bg-teal" />
      <div className="absolute left-[28%] top-[20%] h-64 w-64 rounded-[40%] border border-[#d5e3f2] bg-white/50" />
      <div className="absolute bottom-8 left-8 text-xs uppercase tracking-[0.22em] text-teal">contained intelligence visual</div>
    </div>
  );
}
