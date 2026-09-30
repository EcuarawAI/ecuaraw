import Link from "next/link";
import { Container } from "./Container";
import { footerNav, siteConfig } from "@/lib/site";

const payments = [
  { label: "Visa", href: "https://www.visa.com" },
  { label: "Mastercard", href: "https://www.mastercard.com" },
  { label: "Amex", href: "https://www.americanexpress.com" },
  { label: "PayPal", href: "https://www.paypal.com" },
  { label: "Stripe", href: "https://stripe.com" },
];

export function Footer() {
  return (
    <footer className="bg-forest-950 text-beige-200">
      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <p className="font-serif-display text-2xl tracking-[0.14em] text-offwhite">
              ECUARAW
            </p>
            <p className="eyebrow mt-2 text-beige-300/80">{siteConfig.tagline}</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-beige-200/70">
              A nature and photography travel company based in Ecuador,
              designing small-group journeys across the Andes, cloud forest,
              Amazon, dry forest and Galápagos.
            </p>
            <div className="mt-6 flex gap-5 text-sm">
              <a href={siteConfig.social.instagram} className="hover:text-offwhite" target="_blank" rel="noreferrer">Instagram</a>
              <a href={siteConfig.social.facebook} className="hover:text-offwhite" target="_blank" rel="noreferrer">Facebook</a>
              <a href={siteConfig.social.youtube} className="hover:text-offwhite" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-beige-300/60">Navigation</p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerNav.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-offwhite">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="hover:text-offwhite">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/wildlife" className="hover:text-offwhite">
                  Wildlife of Ecuador
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-beige-300/60">Destinations</p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerNav.destinations.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-offwhite">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-beige-300/60">Contact</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-offwhite">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsappHref} className="hover:text-offwhite" target="_blank" rel="noreferrer">
                  WhatsApp: {siteConfig.whatsapp}
                </a>
              </li>
              <li className="text-beige-200/70">{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-beige-200/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-xs text-beige-300/60">
            {footerNav.legal.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-offwhite">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {payments.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-beige-200/20 px-2.5 py-1 text-[10px] tracking-wide text-beige-300/70 transition-colors hover:border-beige-200/50 hover:text-offwhite"
              >
                {p.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-beige-300/50">
          © {new Date().getFullYear()} ECUARAW. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
