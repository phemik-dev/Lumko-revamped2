"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layout,
  Puzzle,
  Layers,
  Shield,
  Users,
  Target,
  Building2,
  Code2,
  Plug,
  BookOpen,
  GraduationCap,
  BadgeCheck,
  TrendingUp,
  Info,
  type LucideIcon,
} from "lucide-react";
import Button from "./Button";

type MenuKey = "product" | "solutions" | "developers" | "resources" | "company";

const links: { key: MenuKey; label: string }[] = [
  { key: "product", label: "Product" },
  { key: "solutions", label: "Solutions" },
  { key: "developers", label: "Developers" },
  { key: "resources", label: "Resources" },
  { key: "company", label: "Company" }
];

type PanelColumn = { heading: string; icon: LucideIcon; items: string[][] };

const menuPanels: Record<MenuKey, { columns: PanelColumn[]; cta: { headline: string; body: string; button: string; bg: string } }> = {
  product: {
    columns: [
      {
        heading: "Platform",
        icon: Layout,
        items: [
          ["Overview", "Why LumkoMDX is built for this moment"],
          ["Why it exists", "The problem of fragmented, risk-heavy data"],
        ],
      },
      {
        heading: "Core Modules",
        icon: Puzzle,
        items: [
          ["Cohort Browser", "Explore patient groups without exposing identity"],
          ["Insight Studio", "Ask clinical questions and get answers"],
          ["Federation", "Query across facilities without moving data"],
          ["Audit & Consent", "Full traceability and compliance by design"],
        ],
      },
      {
        heading: "Architecture",
        icon: Layers,
        items: [
          ["Three-Boundary Model", "Identity, orchestration, and insight—separated by design"],
          ["Data Flow", "How data moves without exposure"],
          ["Pseudonymisation", "Privacy preserved structurally, not procedurally"],
        ],
      },
      {
        heading: "Trust & Compliance",
        icon: Shield,
        items: [
          ["POPIA Compliance", "Built for South African regulation"],
          ["Security Model", "Zero-trust, never-identity architecture"],
          ["Standards", "FHIR, HL7, OpenEHR alignment"],
        ],
      },
    ],
    cta: {
      headline: "See the platform in action.",
      body: "Explore a sample clinical cohort in minutes.",
      button: "Request demo",
      bg: "bg-[#eaf4f8]",
    },
  },
  solutions: {
    columns: [
      {
        heading: "By Role",
        icon: Users,
        items: [
          ["Clinicians", "Faster cohort discovery, safer collaboration"],
          ["Researchers", "Compliant access to population insights"],
          ["Executives", "System-wide visibility without risk"],
        ],
      },
      {
        heading: "By Use Case",
        icon: Target,
        items: [
          ["Clinical Research", "Accelerate studies with real-world data"],
          ["Population Health", "Understand trends and improve outcomes"],
          ["Claims & Insurance", "Make accurate, data-driven decisions"],
        ],
      },
      {
        heading: "By Industry",
        icon: Building2,
        items: [
          ["Private Hospital Groups", "Connect facilities and improve care"],
          ["Mutual Insurers", "Better risk assessment and member outcomes"],
          ["Research Institutions", "Secure data for breakthrough research"],
        ],
      },
    ],
    cta: {
      headline: "Solve real problems with real data.",
      body: "Request a walkthrough tailored to your role.",
      button: "Request demo",
      bg: "bg-[#f8f1df]",
    },
  },
  developers: {
    columns: [
      {
        heading: "Build",
        icon: Code2,
        items: [
          ["Fetch API Access", "Structured clinical data endpoints"],
          ["SDKs", "Tools for rapid integration"],
        ],
      },
      {
        heading: "Integrate",
        icon: Plug,
        items: [
          ["EMR Integration", "Seamless connection to your systems"],
          ["Data Pipelines", "Reliable, secure data pipelines"],
          ["Federation Setup", "Easy-to-deploy federation layer"],
        ],
      },
      {
        heading: "Learn",
        icon: BookOpen,
        items: [
          ["Documentation", "Guides and tutorials to get started"],
          ["API Reference", "Complete technical reference"],
          ["Architecture Guides", "Deep dives into our architecture"],
        ],
      },
    ],
    cta: {
      headline: "Start building with confidence.",
      body: "Full API access and SDKs ready to go.",
      button: "Explore docs",
      bg: "bg-[#eaf4f8]",
    },
  },
  resources: {
    columns: [
      {
        heading: "Learn",
        icon: GraduationCap,
        items: [
          ["Whitepapers", "Deep dives into data sovereignty"],
          ["Compliance Guides", "POPIA, AI frameworks and more"],
        ],
      },
      {
        heading: "Proof",
        icon: BadgeCheck,
        items: [
          ["Case Studies", "Real-world implementations and outcomes"],
          ["Platform Demos", "Experience LumkoMDX in action"],
        ],
      },
      {
        heading: "Insights",
        icon: TrendingUp,
        items: [
          ["Blog", "Latest updates and announcements"],
          ["Industry Analysis", "Trends shaping the future of healthcare"],
        ],
      },
    ],
    cta: {
      headline: "Download the report.",
      body: "Deep dives into data sovereignty and compliance.",
      button: "Get the report",
      bg: "bg-[#f8f1df]",
    },
  },
  company: {
    columns: [
      {
        heading: "About",
        icon: Info,
        items: [
          ["About Us", "Our mission to unlock healthcare data safely"],
          ["Careers", "Join the team building sovereign infrastructure"],
          ["Contact", "Get in touch with our team"],
        ],
      },
    ],
    cta: {
      headline: "Let\u2019s start a conversation.",
      body: "Whether you\u2019re exploring or ready to deploy.",
      button: "Contact us",
      bg: "bg-[#eaf4f8]",
    },
  },
};

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-muted-gray bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-8 py-5">
        <Link href="/" className="text-2xl leading-none font-semibold tracking-tight text-charcoal">
          <span className="text-charcoal">Lumko</span>
          <span className="text-blue">MDX</span>
        </Link>
        <div className="hidden items-center gap-10 lg:flex">
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <button
                className="flex items-center gap-2 text-sm font-semibold text-charcoal"
                key={link.key}
                onClick={() => setOpenMenu(openMenu === link.key ? null : link.key)}
                onMouseEnter={() => setOpenMenu(link.key)}
                type="button"
              >
                {link.label}
                <span className="text-xs text-charcoal/70">▾</span>
              </button>
            ))}
          </nav>
          <Button href="#demo" variant="primary">
            Request demo
          </Button>
        </div>
      </div>

      {openMenu && (
        <div className="hidden border-t border-muted-gray bg-white lg:block" onMouseLeave={() => setOpenMenu(null)}>
          <div className="mx-auto w-full max-w-[1440px] px-8 py-6">
            <div className={`grid gap-7 ${menuPanels[openMenu].columns.length >= 4 ? "grid-cols-[1fr_1fr_1fr_1fr_280px]" : "grid-cols-[1fr_1fr_1fr_280px]"}`}>
              {menuPanels[openMenu].columns.map((col) => (
                <div className="space-y-6 border-r border-muted-gray pr-5 last:border-r-0" key={col.heading}>
                  <div className="flex items-center gap-2">
                    <col.icon className="h-4 w-4 text-blue/70" />
                    <h3 className="text-base font-semibold text-charcoal">{col.heading}</h3>
                  </div>
                  {col.items.map(([title, desc]) => (
                    <div key={title}>
                      <p className="text-sm font-semibold text-charcoal">{title}</p>
                      <p className="mt-1 text-sm text-charcoal/70">{desc}</p>
                    </div>
                  ))}
                </div>
              ))}
              <div className={`rounded-lg p-7 ${menuPanels[openMenu].cta.bg}`}>
                <p className="text-2xl font-medium leading-tight text-charcoal">{menuPanels[openMenu].cta.headline}</p>
                <p className="mt-4 text-sm text-charcoal/75">{menuPanels[openMenu].cta.body}</p>
                <div className="mt-6">
                  <Button href="#demo">{menuPanels[openMenu].cta.button} →</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
