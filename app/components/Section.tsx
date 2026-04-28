import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  tone?: "white" | "soft";
};

export default function Section({ id, title, subtitle, children, tone = "white" }: SectionProps) {
  return (
    <section className={`${tone === "soft" ? "bg-soft-gray" : "bg-white"} border-b border-muted-gray`} id={id}>
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 sm:py-[120px]">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-charcoal">{title}</h2>
          {subtitle && <p className="mt-3 text-xl text-teal">{subtitle}</p>}
        </div>
        <div className="mt-12">{children}</div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
