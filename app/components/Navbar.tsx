"use client";

import { useState } from "react";
import Button from "./Button";

type MenuKey = "product" | "solutions" | "developers" | "resources" | "company";

const links: { key: MenuKey; label: string }[] = [
  { key: "product", label: "Product" },
  { key: "solutions", label: "Solutions" },
  { key: "developers", label: "Developers" },
  { key: "resources", label: "Resources" },
  { key: "company", label: "Company" }
];

const primaryColumns = [
  {
    heading: "Platform",
    items: [
      ["Overview", "Why LumkoMDX is built for this moment"],
      ["Why it exists", "The problem of fragmented, risk-heavy data"]
    ]
  },
  {
    heading: "Core Modules",
    items: [
      ["Cohort Browser", "Explore patient groups without exposing identity"],
      ["Insight Studio", "Ask clinical questions and get answers"],
      ["Federation", "Query across facilities without moving data"],
      ["Audit & Consent", "Full traceability and compliance by design"]
    ]
  },
  {
    heading: "Architecture",
    items: [
      ["Three-Boundary Model", "Identity, orchestration, and insight—separated by design"],
      ["Data Flow", "How data moves without exposure"],
      ["Pseudonymisation", "Privacy preserved structurally, not procedurally"]
    ]
  },
  {
    heading: "Trust & Compliance",
    items: [
      ["POPIA Compliance", "Built for South African regulation"],
      ["Security Model", "Zero-trust, never-identity architecture"],
      ["Standards", "FHIR, HL7, OpenEHR alignment"]
    ]
  }
];

const lowerRows = [
  {
    cols: [
      {
        heading: "By Role",
        items: [
          ["Clinicians", "Faster cohort discovery, safer collaboration"],
          ["Researchers", "Compliant access to population insights"],
          ["Executives", "System-wide visibility without risk"]
        ]
      },
      {
        heading: "By Use Case",
        items: [
          ["Clinical Research", "Accelerate studies with real-world data"],
          ["Population Health", "Understand trends and improve outcomes"],
          ["Claims & Insurance", "Make accurate, data-driven decisions"]
        ]
      },
      {
        heading: "By Industry",
        items: [
          ["Private Hospital Groups", "Connect facilities and improve care"],
          ["Mutual Insurers", "Better risk assessment and member outcomes"],
          ["Research Institutions", "Secure data for breakthrough research"]
        ]
      }
    ],
    cta: ["Solve real problems with real data.", "Request demo"]
  },
  {
    cols: [
      {
        heading: "Build",
        items: [
          ["Fetch API Access", "Structured clinical data endpoints"],
          ["SDKs", "Tools for rapid integration"]
        ]
      },
      {
        heading: "Integrate",
        items: [
          ["EMR Integration", "Seamless connection to your systems"],
          ["Data Pipelines", "Reliable, secure data pipelines"],
          ["Federation Setup", "Easy-to-deploy federation layer"]
        ]
      },
      {
        heading: "Learn",
        items: [
          ["Documentation", "Guides and tutorials to get started"],
          ["API Reference", "Complete technical reference"],
          ["Architecture Guides", "Deep dives into our architecture"]
        ]
      }
    ],
    cta: ["Start building with confidence.", "Explore docs"]
  },
  {
    cols: [
      {
        heading: "Learn",
        items: [
          ["Whitepapers", "Deep dives into data sovereignty"],
          ["Compliance Guides", "POPIA, AI frameworks and more"]
        ]
      },
      {
        heading: "Proof",
        items: [
          ["Case Studies", "Real-world implementations and outcomes"],
          ["Platform Demos", "Experience LumkoMDX in action"]
        ]
      },
      {
        heading: "Insights",
        items: [
          ["Blog", "Latest updates and announcements"],
          ["Industry Analysis", "Trends shaping the future of healthcare"]
        ]
      }
    ],
    cta: ["Download the report", "Get the report"]
  }
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-muted-gray bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-5">
        <p className="text-[48px] leading-none font-semibold tracking-tight text-charcoal sm:text-[42px]">
          <span className="text-charcoal">Lumko</span>
          <span className="text-teal">MDX</span>
        </p>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <button
              className="flex items-center gap-2 text-sm font-semibold text-charcoal"
              key={link.key}
              onClick={() => setOpenMenu(openMenu === link.key ? null : link.key)}
              onMouseEnter={() => setOpenMenu(link.key)}
              type="button"
            >
              {link.label}
              <span className="text-xs text-charcoal/60">▾</span>
            </button>
          ))}
        </nav>
        <Button href="#demo" variant="primary">
          Request demo
        </Button>
      </div>

      {openMenu && (
        <div className="hidden border-t border-muted-gray bg-white lg:block" onMouseLeave={() => setOpenMenu(null)}>
          <div className="mx-auto w-full max-w-[1240px] px-6 py-6">
            <div className="grid grid-cols-[1fr_1fr_1fr_1fr_280px] gap-7 border-b border-muted-gray pb-7">
              {primaryColumns.map((col) => (
                <div className="space-y-6 border-r border-muted-gray pr-5 last:border-r-0" key={col.heading}>
                  <h3 className="text-base font-semibold text-charcoal">{col.heading}</h3>
                  {col.items.map(([title, desc]) => (
                    <div key={title}>
                      <p className="text-sm font-semibold text-charcoal">{title}</p>
                      <p className="mt-1 text-sm text-charcoal/70">{desc}</p>
                    </div>
                  ))}
                </div>
              ))}
              <div className="rounded-lg bg-[#eaf4f8] p-7">
                <p className="text-2xl font-medium leading-tight text-charcoal">See the platform in action.</p>
                <p className="mt-4 text-sm text-charcoal/75">Explore a sample clinical cohort in minutes.</p>
                <div className="mt-6">
                  <Button href="#demo">Request demo →</Button>
                </div>
              </div>
            </div>

            <div className="space-y-6 pt-7">
              {lowerRows.map((row) => (
                <div className="grid grid-cols-[1fr_1fr_1fr_280px] gap-7" key={row.cta[0]}>
                  {row.cols.map((col) => (
                    <div className="space-y-4 border-r border-muted-gray pr-5 last:border-r-0" key={col.heading}>
                      <h3 className="text-base font-semibold text-charcoal">{col.heading}</h3>
                      {col.items.map(([title, desc]) => (
                        <div key={title}>
                          <p className="text-sm font-semibold text-charcoal">{title}</p>
                          <p className="mt-1 text-sm text-charcoal/70">{desc}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="rounded-lg bg-[#f8f1df] p-7">
                    <p className="text-2xl font-medium leading-tight text-charcoal">{row.cta[0]}</p>
                    <div className="mt-6">
                      <Button href="#demo" variant="primary">
                        {row.cta[1]} →
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
