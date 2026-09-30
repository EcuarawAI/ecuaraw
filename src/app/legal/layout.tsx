import Link from "next/link";
import { Container } from "@/components/Container";
import { footerNav } from "@/lib/site";

export default function LegalLayout({ children }: LayoutProps<"/legal">) {
  return (
    <div className="pt-28">
      <Container className="max-w-3xl py-16 md:py-20">
        <nav className="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-charcoal-900/10 pb-6 text-xs">
          {footerNav.legal.map((item) => (
            <Link key={item.href} href={item.href} className="eyebrow text-charcoal-500 hover:text-forest-800">
              {item.label}
            </Link>
          ))}
        </nav>
        <article className="space-y-6 text-sm leading-relaxed text-charcoal-700 [&_h1]:font-serif-display [&_h1]:text-4xl [&_h1]:text-charcoal-900 [&_h1]:mb-4 [&_h2]:font-serif-display [&_h2]:text-xl [&_h2]:text-forest-900 [&_h2]:mt-10 [&_h2]:mb-2">
          {children}
        </article>
      </Container>
    </div>
  );
}
