import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "link";
};

export default function Button({ children, href, variant = "secondary" }: ButtonProps) {
  const base = "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";

  const styleByVariant = {
    primary: "bg-gold text-charcoal hover:bg-[#BE912A]",
    secondary: "border border-blue/30 bg-white text-blue hover:border-blue hover:bg-blue/5",
    link: "px-0 py-0 text-blue hover:text-blue/70"
  };

  return (
    <a className={`${base} ${styleByVariant[variant]}`} href={href}>
      {children}
    </a>
  );
}
