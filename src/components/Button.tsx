import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-800 text-offwhite hover:bg-forest-700 border border-forest-800",
  secondary:
    "bg-transparent text-forest-900 border border-forest-900/30 hover:border-forest-900 hover:bg-forest-900/5",
  ghost: "bg-transparent text-charcoal-900 hover:text-forest-800",
  "outline-light":
    "bg-transparent text-offwhite border border-offwhite/50 hover:border-offwhite hover:bg-offwhite/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `eyebrow inline-flex items-center justify-center gap-2 px-7 py-3.5 transition-colors duration-300 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
