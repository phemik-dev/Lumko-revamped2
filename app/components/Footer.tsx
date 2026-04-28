import Link from "next/link";
import {
  Package,
  Lightbulb,
  Code2,
  BookOpen,
  Building2,
  type LucideIcon,
} from "lucide-react";

type FooterLink = { label: string; href: string };

const columns: { heading: string; icon: LucideIcon; links: FooterLink[] }[] = [
  {
    heading: "Product",
    icon: Package,
    links: [
      { label: "Platform Overview", href: "/#how-it-works" },
      { label: "Core Modules", href: "/#modules" },
      { label: "Architecture", href: "/#privacy" },
      { label: "Trust & Compliance", href: "/compliance" },
    ],
  },
  {
    heading: "Solutions",
    icon: Lightbulb,
    links: [
      { label: "By Role", href: "/#roles" },
      { label: "By Use Case", href: "/#roles" },
      { label: "By Industry", href: "/#roles" },
    ],
  },
  {
    heading: "Developers",
    icon: Code2,
    links: [
      { label: "APIs", href: "/#modules" },
      { label: "SDKs", href: "/#modules" },
      { label: "Documentation", href: "/#modules" },
    ],
  },
  {
    heading: "Resources",
    icon: BookOpen,
    links: [
      { label: "Whitepapers", href: "/#privacy" },
      { label: "Case Studies", href: "/#roles" },
      { label: "Blog", href: "/#demo" },
    ],
  },
  {
    heading: "Company",
    icon: Building2,
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
    <footer className="border-t border-muted-gray bg-white">
      <div className="mx-auto grid w-full max-w-[1240px] gap-10 px-6 py-14 md:grid-cols-[220px_1fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-tight text-charcoal">
            <span>Lumko</span>
            <span className="text-teal">MDX</span>
          </Link>
          <p className="mt-6 text-sm text-charcoal/70">
            © 2026 LumkoMDX. All rights reserved.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {columns.map((col) => (
            <div key={col.heading}>
              <div className="flex items-center gap-2">
                <col.icon className="h-4 w-4 text-teal" />
                <p className="text-sm font-semibold text-charcoal">{col.heading}</p>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-charcoal/70">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="transition-colors hover:text-teal"
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
      <div className="border-t border-muted-gray py-4">
        <div className="mx-auto flex w-full max-w-[1240px] justify-end gap-10 px-6 text-sm text-charcoal/70">
          {bottomLinks.map((link) => (
            <Link
              className="transition-colors hover:text-teal"
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
