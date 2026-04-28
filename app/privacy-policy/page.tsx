import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "LumkoMDX privacy policy — how we protect patient identity and healthcare data through structural design.",
};

const sections = [
  {
    heading: "1. Introduction",
    body: "LumkoMDX (\u201cwe\u201d, \u201cur platform\u201d) is a sovereign healthcare data infrastructure built to enable clinical collaboration, cohort discovery, and population health analytics without exposing patient identity. This Privacy Policy explains how we handle data, and more importantly, how our architecture makes certain categories of data exposure structurally impossible.",
  },
  {
    heading: "2. The Core Principle: Identity Never Enters the Platform",
    body: "LumkoMDX is designed around a single architectural commitment: patient identity never leaves the originating system. All data that enters the LumkoMDX federation layer is pseudonymised at the source. This means we do not collect, store, process, or transmit personally identifiable information (PII) or protected health information (PHI) in identifiable form. This is not a policy choice \u2014 it is a structural property of the system.",
  },
  {
    heading: "3. Data We Process",
    body: "LumkoMDX processes pseudonymised clinical data for the purpose of cohort discovery, aggregated analytics, and clinical insight generation. This data includes de-identified clinical markers, demographic categories (age ranges, not dates of birth), and treatment outcomes. At no point does LumkoMDX hold names, identification numbers, contact details, or any data that could reasonably be used to re-identify a patient.",
  },
  {
    heading: "4. How We Protect Data",
    body: "Our three-boundary architecture separates identity, orchestration, and insight layers by design. Data is pseudonymised before it enters the federation layer. All queries return only aggregated results. Audit trails are maintained for every data access event. The system enforces zero-trust principles: no component, user, or service is trusted by default, regardless of network position.",
  },
  {
    heading: "5. POPIA Compliance",
    body: "LumkoMDX is built for compliance with the South African Protection of Personal Information Act (POPIA). Because we never process identifiable information, the obligations related to personal information processing under POPIA are addressed at the architectural level. Data controllers at originating facilities retain full responsibility for patient consent and identity management. LumkoMDX operates as a data processor that never sees the data subject\u2019s identity.",
  },
  {
    heading: "6. Data Sharing and Third Parties",
    body: "LumkoMDX does not share data with third parties. The platform operates as a query layer \u2014 data does not move to LumkoMDX servers for processing. Instead, queries are sent to the data, and only aggregated, compliant insights are returned. No raw data, pseudonymised or otherwise, is transferred to external parties.",
  },
  {
    heading: "7. Data Retention",
    body: "LumkoMDX retains pseudonymised operational data only for the duration required to serve active queries and maintain audit compliance. Aggregated analytics are retained in accordance with the contractual agreements with data controllers. No identifiable data is retained because no identifiable data is ever processed.",
  },
  {
    heading: "8. Your Rights",
    body: "As LumkoMDX does not process personally identifiable information, traditional data subject rights (access, rectification, erasure) are not applicable to our platform. These rights remain the responsibility of the data controllers at the originating healthcare facilities. If you have concerns about how your data is used, we encourage you to contact the healthcare institution that holds your records.",
  },
  {
    heading: "9. Changes to This Policy",
    body: "We may update this Privacy Policy to reflect changes in our platform or regulatory requirements. Any material changes will be communicated through our official channels. The latest version is always available at this URL.",
  },
  {
    heading: "10. Contact",
    body: "For questions about this Privacy Policy or our data practices, contact us at privacy@lumkomdx.com.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-charcoal/70">
              Effective date: 1 January 2026
            </p>
            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-semibold text-charcoal">
                    {section.heading}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-charcoal/75">
                    {section.body}
                  </p>
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
