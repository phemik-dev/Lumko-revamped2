import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LumkoMDX",
  description: "Sovereign by design"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
