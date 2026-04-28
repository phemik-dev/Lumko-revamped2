import Link from "next/link";

type FooterLink = { label: string; href: string };

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Product",
    links: [
      { label: "Platform Overview", href: "/#how-it-works" },
      { label: "Core Modules", href: "/#modules" },
      { label: "Architecture", href: "/#privacy" },
      { label: "Trust & Compliance", href: "/compliance" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "By Role", href: "/#roles" },
      { label: "By Use Case", href: "/#roles" },
      { label: "By Industry", href: "/#roles" },
    ],
  },
  {
    heading: "Developers",
    links: [
      { label: "APIs", href: "/#modules" },
      { label: "SDKs", href: "/#modules" },
      { label: "Documentation", href: "/#modules" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Whitepapers", href: "/#privacy" },
      { label: "Case Studies", href: "/#roles" },
      { label: "Blog", href: "/#demo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/#demo" },
      { label: "Careers", href: "/#demo" },
      { label: "Contact", href: "/#demo" },
    ],
  },
];

const bottomLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Compliance", href: "/compliance" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#061935]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-8 py-14 md:grid-cols-[220px_1fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-tight text-white">
            <span>Lumko</span>
            <span className="text-blue">MDX</span>
          </Link>
          <p className="mt-3 text-sm text-white/70">Sovereign by design</p>
          <p className="mt-6 text-sm text-white/40">
            © 2026 LumkoMDX. All rights reserved.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-sm font-semibold text-white">{col.heading}</p>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="transition-colors hover:text-white"
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="mx-auto flex w-full max-w-[1440px] justify-end gap-10 px-8 text-sm text-white/40">
          {bottomLinks.map((link) => (
            <Link
              className="transition-colors hover:text-white/70"
              key={link.label}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
