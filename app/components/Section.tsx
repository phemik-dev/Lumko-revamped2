import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="border-b border-muted-gray bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="text-2xl font-semibold tracking-tight text-charcoal sm:text-3xl">{title}</h2>
        <div className="mt-6 max-w-3xl text-base leading-relaxed text-charcoal/80 sm:text-lg">{children}</div>
      </div>
    </section>
  );
}
