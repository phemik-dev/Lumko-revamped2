import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://gitsensei.clodhost.com/lumko-revamped";

export const metadata: Metadata = {
  title: {
    default: "LumkoMDX — Sovereign Healthcare Data Infrastructure",
    template: "%s | LumkoMDX",
  },
  description:
    "LumkoMDX unlocks the power of healthcare data while protecting patient identity. A federated platform for clinical collaboration, cohort discovery, and population health — built for POPIA compliance.",
  keywords: [
    "healthcare data platform",
    "patient data sovereignty",
    "POPIA compliance",
    "clinical cohort browser",
    "federated healthcare data",
    "population health",
    "healthcare data privacy",
    "FHIR",
    "OpenEHR",
    "South African healthcare",
  ],
  authors: [{ name: "LumkoMDX" }],
  creator: "LumkoMDX",
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteUrl,
    siteName: "LumkoMDX",
    title: "LumkoMDX — Sovereign Healthcare Data Infrastructure",
    description:
      "Unlock the power of healthcare data while patient identity never leaves its source. Federated, compliant, structurally private.",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "LumkoMDX — Sovereign Healthcare Data Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LumkoMDX — Sovereign Healthcare Data Infrastructure",
    description:
      "Unlock the power of healthcare data while patient identity never leaves its source.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "LumkoMDX",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  description:
    "Sovereign healthcare data infrastructure for clinical collaboration, cohort discovery, and population health — with structural privacy and POPIA compliance.",
  url: siteUrl,
  provider: {
    "@type": "Organization",
    name: "LumkoMDX",
    url: siteUrl,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "ZAR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
