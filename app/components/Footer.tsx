const columns = [
  ["Product", "Platform Overview", "Core Modules", "Architecture", "Trust & Compliance"],
  ["Solutions", "By Role", "By Use Case", "By Industry"],
  ["Developers", "APIs", "SDKs", "Documentation"],
  ["Resources", "Whitepapers", "Case Studies", "Blog"],
  ["Company", "About Us", "Careers", "Contact"]
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#061935] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_80%_20%,rgba(31,138,138,0.4),transparent_42%),radial-gradient(circle_at_20%_90%,rgba(31,93,153,0.35),transparent_40%)]" />
      <div className="relative mx-auto grid w-full max-w-[1240px] gap-12 px-8 py-[120px] md:grid-cols-[220px_1fr]">
        <div>
          <p className="text-[34px] font-semibold tracking-tight">
            <span className="text-white">Lumko</span>
            <span className="text-teal">MDX</span>
          </p>
          <p className="mt-4 text-sm text-white/70">Sovereign by design</p>
          <p className="mt-8 text-sm text-white/60">© 2025 LumkoMDX. All rights reserved.</p>
    <footer className="border-t border-muted-gray bg-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[220px_1fr]">
        <div>
          <p className="text-5xl font-semibold tracking-tight text-charcoal">
            <span>Lumko</span>
            <span className="text-teal">MDX</span>
          </p>
          <p className="mt-6 text-sm text-charcoal/70">© 2025 LumkoMDX. All rights reserved.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map(([title, ...items]) => (
            <div key={title}>
              <p className="text-sm font-semibold text-white">{title}</p>
              <ul className="mt-3 space-y-2 text-sm text-white/65">
              <p className="text-sm font-semibold text-charcoal">{title}</p>
              <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="relative border-t border-white/10 py-5">
        <div className="mx-auto flex w-full max-w-[1240px] justify-end gap-10 px-8 text-sm text-white/60">
      <div className="border-t border-muted-gray py-4">
        <div className="mx-auto flex w-full max-w-[1240px] justify-end gap-10 px-6 text-sm text-charcoal/60">
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Compliance</p>
        </div>
      </div>
    </footer>
  );
}
