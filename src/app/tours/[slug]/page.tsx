import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { PhotoCredit } from "@/components/PhotoCredit";
import { TourCard } from "@/components/TourCard";
import { getTourBySlug, tours } from "@/lib/tours";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(
  props: PageProps<"/tours/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return {
    title: tour.name,
    description: `${tour.tagline} — ${tour.duration} in ${tour.location}. ${tour.overview.slice(0, 140)}...`,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title: `${tour.name} — ${siteConfig.name}`,
      description: tour.tagline,
      images: [{ url: tour.hero.src }],
    },
  };
}

const factGrid = (tour: NonNullable<ReturnType<typeof getTourBySlug>>) => [
  { label: "Location", value: tour.location },
  { label: "Duration", value: tour.duration },
  { label: "Difficulty", value: tour.difficulty },
  { label: "Best season", value: tour.bestSeason },
  { label: "Group size", value: tour.groupSize },
  { label: "Photography level", value: tour.photographyLevel },
];

export default async function TourDetailPage(
  props: PageProps<"/tours/[slug]">
) {
  const { slug } = await props.params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);
  const bookHref = `/contact?tour=${encodeURIComponent(tour.name)}`;

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: tour.name,
            description: tour.overview,
            touristType: tour.categories,
            offers: {
              "@type": "Offer",
              priceCurrency: "USD",
              price: tour.priceFrom,
              availability: "https://schema.org/InStock",
            },
            provider: {
              "@type": "TravelAgency",
              name: siteConfig.name,
              url: siteConfig.url,
            },
          }),
        }}
      />

      <section className="relative flex h-[75vh] min-h-[520px] items-end overflow-hidden bg-charcoal-950">
        <Image
          src={tour.hero.src}
          alt={tour.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-charcoal-950/10" />
        <PhotoCredit photo={tour.hero} light />
        <Container className="relative z-10 pb-16 pt-28">
          <div className="flex flex-wrap gap-2">
            {tour.categories.map((c) => (
              <Link
                key={c}
                href={`/tours?category=${encodeURIComponent(c)}`}
                className="eyebrow bg-offwhite/90 px-3 py-1 text-[10px] text-forest-900 transition-colors hover:bg-offwhite"
              >
                {c}
              </Link>
            ))}
          </div>
          <h1 className="mt-5 max-w-2xl font-serif-display text-5xl leading-tight text-offwhite md:text-6xl">
            {tour.name}
          </h1>
          <p className="mt-3 text-lg italic text-beige-100/90">{tour.tagline}</p>
          {tour.coords && (
            <p className="field-data mt-4 text-beige-100/60">
              {tour.coords}
              {tour.elevation ? ` · ${tour.elevation}` : ""}
            </p>
          )}
        </Container>
      </section>

      <section className="bg-offwhite py-16">
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-y border-charcoal-900/10 py-8 sm:grid-cols-3 lg:grid-cols-6">
            {factGrid(tour).map((f) => (
              <div key={f.label}>
                <p className="eyebrow text-charcoal-500">{f.label}</p>
                <p className="mt-2 text-sm text-charcoal-900">{f.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-offwhite pb-20">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
            <div>
              <p className="eyebrow text-charcoal-500">Overview</p>
              <p className="mt-5 text-base leading-relaxed text-charcoal-700">
                {tour.overview}
              </p>

              <div className="mt-14">
                <p className="eyebrow text-charcoal-500">Highlights</p>
                <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm leading-relaxed text-charcoal-700">
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-700" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <p className="eyebrow text-charcoal-500">Itinerary</p>
                <ol className="mt-6 space-y-6">
                  {tour.itinerary.map((day) => (
                    <li key={day.day} className="flex gap-5 border-l-2 border-forest-800 pl-5">
                      <div>
                        <p className="field-data text-forest-700">Day {String(day.day).padStart(2, "0")}</p>
                        <h3 className="mt-1 font-serif-display text-lg text-charcoal-900">
                          {day.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                          {day.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-charcoal-500">What&apos;s Included</p>
                  <ul className="mt-4 space-y-2 text-sm text-charcoal-700">
                    {tour.included.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-forest-700">✓</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-500">Not Included</p>
                  <ul className="mt-4 space-y-2 text-sm text-charcoal-700">
                    {tour.excluded.map((i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-charcoal-500">–</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
                {[
                  { label: "Accommodation", value: tour.accommodation },
                  { label: "Transportation", value: tour.transportation },
                  { label: "Meals", value: tour.meals },
                ].map((f) => (
                  <div key={f.label}>
                    <p className="eyebrow text-charcoal-500">{f.label}</p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                      {f.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
                <div>
                  <p className="eyebrow text-charcoal-500">Photography Opportunities</p>
                  <ul className="mt-4 space-y-2 text-sm text-charcoal-700">
                    {tour.photographyOpportunities.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-charcoal-500">Wildlife Expected</p>
                  <ul className="mt-4 space-y-2 text-sm text-charcoal-700">
                    {tour.wildlifeExpected.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 bg-beige-100 p-8">
                <p className="eyebrow text-charcoal-500">Conservation &amp; Responsible Travel</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
                  {tour.responsibleTravel}
                </p>
              </div>

              <div className="mt-8">
                <p className="eyebrow text-charcoal-500">Your Guide</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-700">
                  {tour.guideInfo}
                </p>
              </div>

              {tour.gallery.length > 0 && (
                <div className="mt-16 grid grid-cols-2 gap-3">
                  {tour.gallery.map((photo) => (
                    <div key={photo.src} className="group relative aspect-[4/3] overflow-hidden bg-charcoal-900">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <PhotoCredit photo={photo} light />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Booking sidebar */}
            <aside className="h-fit lg:sticky lg:top-28">
              <div className="border border-charcoal-900/10 bg-beige-100 p-8">
                <p className="eyebrow text-charcoal-500">Starting from</p>
                <p className="mt-2 font-serif-display text-4xl text-forest-900">
                  ${tour.priceFrom.toLocaleString()}
                  <span className="ml-1 text-sm text-charcoal-500">/ person</span>
                </p>
                <p className="mt-3 text-xs leading-relaxed text-charcoal-500">
                  Final pricing depends on group size, season and any custom
                  requests. Online booking and secure payment are coming
                  soon — for now, every trip is confirmed directly with our
                  team.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Button href={bookHref} className="w-full">
                    Enquire About This Tour
                  </Button>
                  <Button href="/tours" variant="secondary" className="w-full">
                    Back to All Tours
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-beige-100 py-20 md:py-24">
        <Container>
          <h2 className="font-serif-display text-3xl text-charcoal-900 md:text-4xl">
            More Ecuador journeys
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {related.map((t) => (
              <TourCard key={t.slug} tour={t} />
            ))}
          </div>
          <div className="mt-10">
            <Link href="/tours" className="border-b border-forest-800/40 text-sm text-forest-800 hover:border-forest-800">
              View all tours
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
