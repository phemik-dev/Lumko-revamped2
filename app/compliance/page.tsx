import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Compliance",
  description:
    "LumkoMDX compliance framework — POPIA, zero-trust security, FHIR standards, and structural privacy.",
};

const frameworks = [
  {
    heading: "POPIA — Protection of Personal Information Act",
    body: "LumkoMDX is designed for compliance with South Africa\u2019s POPIA. Our architecture addresses POPIA\u2019s requirements at the structural level: because patient identity never enters the platform, the obligations related to personal information processing are handled by data controllers at originating facilities. LumkoMDX operates as a data processor that never sees the data subject\u2019s identity.",
    points: [
      "Identity is never processed, stored, or transmitted",
      "Data controllers retain full responsibility for consent management",
      "Pseudonymisation occurs at the source, before data enters the federation layer",
      "Audit trails provide full traceability of every data access event",
    ],
  },
  {
    heading: "Zero-Trust Security Model",
    body: "LumkoMDX operates on a zero-trust security model. No component, user, or service is trusted by default, regardless of network position. Every access request is authenticated, authorised, and audited.",
    points: [
      "Every query is authenticated and authorised individually",
      "Role-based access control enodes least-privilege principles",
      "All data access is logged with immutable audit trails",
      "Network position does not grant implicit trust",
    ],
  },
  {
    heading: "FHIR and HL7 Alignment",
    body: "LumkoMDX aligns with Fast Healthcare Interoperability Resources (FHIR) and Health Level Seven (HL7) standards to ensure interoperability with existing healthcare systems.",
    points: [
      "FHIR-compatible data structures for clinical data exchange",
      "HL7 messaging support for EMR integration",
      "Standardised terminology and coding systems",
      "OpenEHR archetypes for clinical data modelling",
    ],
  },
  {
    heading: "Structural Privacy",
    body: "Unlike traditional privacy approaches that rely on policies and procedures, LumkoMDX enforces privacy through architecture. Certain categories of data breaches are structurally impossible because the data required for re-identification simply does not exist within the platform.",
    points: [
      "Pseudonymisation at the source — not a policy, but a process",
      "Three-boundary architecture separates identity, orchestration, and insight",
      "Only aggregated, compliant results are returned to authorised users",
      "No raw data storage — queries run where data lives",
    ],
  },
];

export default function CompliancePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
              Compliance
            </h1>
            <p className="mt-4 text-base text-charcoal/70">
              How LumkoMDX addresses regulatory and security requirements through architecture.
            </p>
            <div className="mt-12 space-y-16">
              {frameworks.map((framework) => (
                <section key={framework.heading}>
                  <h2 className="text-xl font-semibold text-charcoal">
                    {framework.heading}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                    {framework.body}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {framework.points.map((point) => (
                      <li
                        className="flex items-start gap-3 text-base text-charcoal/75"
                        key={point}
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
