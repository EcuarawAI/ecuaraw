import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { PhotoCredit } from "@/components/PhotoCredit";
import { Button } from "@/components/Button";
import { species, EndemismStatus } from "@/lib/wildlife";

export function generateStaticParams() {
  return species.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  props: PageProps<"/wildlife/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const s = species.find((sp) => sp.slug === slug);
  if (!s) return {};
  return {
    title: `${s.commonName} (${s.scientificName})`,
    description: s.statusNote,
    alternates: { canonical: `/wildlife/${s.slug}` },
  };
}

const statusStyles: Record<EndemismStatus, string> = {
  "Ecuador endemic": "bg-forest-800 text-offwhite",
  "Range-restricted species": "bg-clay text-offwhite",
  "Migratory / wide-ranging": "bg-charcoal-700 text-offwhite",
};

export default async function SpeciesDetailPage(
  props: PageProps<"/wildlife/[slug]">
) {
  const { slug } = await props.params;
  const s = species.find((sp) => sp.slug === slug);
  if (!s) notFound();

  const related = species.filter((sp) => sp.slug !== s.slug && sp.group === s.group).slice(0, 3);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Thing",
            name: s.commonName,
            alternateName: s.scientificName,
            description: s.statusNote,
          }),
        }}
      />

      <section className="relative flex h-[60vh] min-h-[440px] items-end overflow-hidden bg-charcoal-950">
        <Image
          src={s.photo.src}
          alt={s.photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-charcoal-950/10" />
        <PhotoCredit photo={s.photo} light />
        <Container className="relative z-10 pb-14 pt-28">
          <span className={`eyebrow inline-block px-3 py-1 text-[10px] ${statusStyles[s.status]}`}>
            {s.status}
          </span>
          <h1 className="mt-5 max-w-2xl font-serif-display text-5xl leading-tight text-offwhite md:text-6xl">
            {s.commonName}
          </h1>
          <p className="taxon mt-2 text-lg text-beige-100/90">{s.scientificName}</p>
        </Container>
      </section>

      <section className="bg-offwhite py-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <p className="eyebrow text-charcoal-500">Status Note</p>
              <p className="mt-4 text-base leading-relaxed text-charcoal-700">
                {s.statusNote}
              </p>

              <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
                {[
                  { label: "Distribution", value: s.distribution },
                  { label: "Habitat", value: s.habitat },
                  { label: "Diet", value: s.diet },
                  { label: "Conservation Status", value: s.conservationStatus },
                  { label: "Behavior", value: s.behavior },
                  { label: "Where to See It", value: s.whereToSee },
                ].map((f) => (
                  <div key={f.label}>
                    <p className="eyebrow text-charcoal-500">{f.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-beige-100 p-8">
                <p className="eyebrow text-charcoal-500">Photography Tips</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
                  {s.photographyTips}
                </p>
              </div>
            </div>

            <aside className="h-fit lg:sticky lg:top-28">
              <div className="border border-charcoal-900/10 bg-beige-100 p-8">
                <p className="eyebrow text-charcoal-500">Group</p>
                <Link
                  href={`/wildlife?group=${encodeURIComponent(s.group)}`}
                  className="mt-2 block font-serif-display text-2xl text-forest-900 hover:underline"
                >
                  {s.group}
                </Link>
                <p className="mt-4 text-xs leading-relaxed text-charcoal-500">
                  Want to photograph this species in the field? Ask us about
                  the tour built around its habitat.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href={`/contact?tour=${encodeURIComponent(s.whereToSee)}`} className="w-full">
                    Ask About This Species
                  </Button>
                  <Button href="/wildlife" variant="secondary" className="w-full">
                    Back to Wildlife Guide
                  </Button>
                </div>
              </div>
            </aside>
          </div>

          {related.length > 0 && (
            <div className="mt-20 border-t border-charcoal-900/10 pt-14">
              <p className="eyebrow text-charcoal-500">More {s.group}</p>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/wildlife/${r.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                      <Image
                        src={r.photo.src}
                        alt={r.photo.alt}
                        fill
                        sizes="33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 font-serif-display text-lg text-charcoal-900 group-hover:text-forest-800">
                      {r.commonName}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
