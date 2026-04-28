import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export default function Button({ children, href, variant = "secondary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors duration-200";

  const styles =
    variant === "primary"
      ? "bg-gold text-white hover:bg-[#9e7728]"
      : "border border-blue/40 bg-white text-blue hover:border-blue hover:bg-blue/5";

  return (
    <a className={`${base} ${styles}`} href={href}>
      {children}
    </a>
  );
}
