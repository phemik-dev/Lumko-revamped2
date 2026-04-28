import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "LumkoMDX terms of use — conditions governing access to and use of the LumkoMDX platform.",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or using LumkoMDX (\u201cthe platform\u201d), you agree to be bound by these Terms of Use. If you do not agree, do not access or use the platform. These terms apply to all users, including clinicians, researchers, administrators, and any authorised personnel accessing LumkoMDX through an affiliated institution.",
  },
  {
    heading: "2. Purpose of the Platform",
    body: "LumkoMDX is a sovereign healthcare data infrastructure designed to enable clinical collaboration, cohort discovery, and population health analytics. It operates as a federated query layer \u2014 data is queried where it exists, and only aggregated, compliant insights are returned. LumkoMDX does not store, process, or transmit personally identifiable information.",
  },
  {
    heading: "3. Eligibility and Access",
    body: "Access to LumkoMDX is restricted to authorised personnel affiliated with registered healthcare institutions, research organisations, or insured entities. Access is granted through institutional agreements and is subject to role-based permissions. Users must not share credentials, bypass access controls, or use the platform for purposes outside their authorised scope.",
  },
  {
    heading: "4. Acceptable Use",
    body: "You agree to use LumkoMDX only for lawful purposes and in accordance with these terms. You must not: attempt to re-identify patients or reverse pseudonymisation; introduce malicious code or attempt unauthorised access; use the platform to discriminate against individuals or groups; redistribute or sell platform outputs without authorisation; or interfere with the platform\u2019s operation or other users\u2019 access.",
  },
  {
    heading: "5. Intellectual Property",
    body: "The platform, its architecture, software, and documentation are the intellectual property of LumkoMDX. These terms do not grant you any rights to use our trademarks, logos, or brand elements without written permission. Data processed through the platform remains the property of the originating institution.",
  },
  {
    heading: "6. Data Ownership and Responsibility",
    body: "Data controllers at originating healthcare facilities retain full ownership and responsibility for all data processed through LumkoMDX. LumkoMDX acts as a data processing layer and does not take ownership of, or responsibility for, the accuracy, completeness, or legality of data held by originating institutions.",
  },
  {
    heading: "7. Limitation of Liability",
    body: "LumkoMDX is provided \u201cas is\u201d and \u201cas available.\u201d We make no warranties regarding uninterrupted access, accuracy of insights, or fitness for a particular purpose. To the maximum extent permitted by law, LumkoMDX shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the platform.",
  },
  {
    heading: "8. Indemnification",
    body: "You agree to indemnify and hold LumkoMDX harmless from any claims, losses, or damages arising from your use of the platform, your violation of these terms, or your violation of any applicable law or regulation.",
  },
  {
    heading: "9. Modifications to Terms",
    body: "We reserve the right to modify these Terms of Use at any time. Material changes will be communicated through official channels. Continued use of the platform after changes constitutes acceptance of the modified terms.",
  },
  {
    heading: "10. Governing Law",
    body: "These Terms of Use are governed by the laws of the Republic of South Africa. Any disputes shall be resolved in the courts of South Africa, unless otherwise specified in an institutional agreement.",
  },
  {
    heading: "11. Contact",
    body: "For questions about these Terms of Use, contact us at legal@lumkomdx.com.",
  },
];

export default function TermsOfUsePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-semibold tracking-tight text-charcoal">
              Terms of Use
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
