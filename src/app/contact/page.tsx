import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Plan your Ecuador nature and photography trip. Reach ECUARAW by email, WhatsApp or the inquiry form for tours, custom expeditions and availability.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <Container className="py-16 md:py-20">
        <h1 className="max-w-2xl font-serif-display text-5xl leading-tight text-charcoal-900 md:text-6xl">
          Let&apos;s plan your Ecuador adventure.
        </h1>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />

          <div className="flex flex-col gap-10">
            <div>
              <p className="eyebrow text-charcoal-500">Email</p>
              <a href={`mailto:${siteConfig.email}`} className="mt-2 block font-serif-display text-xl text-forest-900">
                {siteConfig.email}
              </a>
            </div>
            <div>
              <p className="eyebrow text-charcoal-500">WhatsApp</p>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-serif-display text-xl text-forest-900"
              >
                {siteConfig.whatsapp}
              </a>
            </div>
            <div>
              <p className="eyebrow text-charcoal-500">Office</p>
              <p className="mt-2 text-base text-charcoal-900">{siteConfig.location}</p>
            </div>
            <div>
              <p className="eyebrow text-charcoal-500">Follow</p>
              <div className="mt-2 flex gap-4 text-sm text-charcoal-900">
                <a href={siteConfig.social.instagram} target="_blank" rel="noreferrer" className="hover:text-forest-800">
                  Instagram
                </a>
                <a href={siteConfig.social.facebook} target="_blank" rel="noreferrer" className="hover:text-forest-800">
                  Facebook
                </a>
                <a href={siteConfig.social.youtube} target="_blank" rel="noreferrer" className="hover:text-forest-800">
                  YouTube
                </a>
              </div>
            </div>

            <div className="aspect-[4/3] w-full overflow-hidden border border-charcoal-900/10 grayscale hover:grayscale-0 transition-[filter] duration-500">
              <iframe
                title="Map of Ecuador"
                src="https://maps.google.com/maps?q=Quito,Ecuador&z=6&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
