const columns = [
  ["Product", "Platform Overview", "Core Modules", "Architecture", "Trust & Compliance"],
  ["Solutions", "By Role", "By Use Case", "By Industry"],
  ["Developers", "APIs", "SDKs", "Documentation"],
  ["Resources", "Whitepapers", "Case Studies", "Blog"],
  ["Company", "About Us", "Careers", "Contact"]
];

export default function Footer() {
  return (
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
