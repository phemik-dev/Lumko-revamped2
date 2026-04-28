export default function HeroVisual() {
  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-muted-gray bg-white shadow-card sm:h-80">
      <div className="absolute inset-6 rounded-xl border border-blue/20" />
      <div className="absolute inset-x-10 top-10 h-10 rounded-md bg-soft-gray" />
      <div className="absolute left-10 right-10 top-28 h-px bg-muted-gray" />
      <div className="absolute left-10 top-36 h-24 w-[42%] rounded-lg bg-soft-gray" />
      <div className="absolute right-10 top-36 h-24 w-[42%] rounded-lg border border-teal/25 bg-white" />
      <div className="absolute left-[48%] top-[42%] h-10 w-10 -translate-x-1/2 rounded-full border-2 border-blue bg-white" />
      <div className="absolute left-1/2 top-[46%] h-px w-24 -translate-x-1/2 bg-teal/60" />
      <p className="absolute bottom-6 left-6 text-xs font-medium uppercase tracking-[0.2em] text-teal">
        contained intelligence
      </p>
    </div>
  );
}
