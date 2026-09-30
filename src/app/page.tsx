import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { DestinationCard } from "@/components/DestinationCard";
import { TourCard } from "@/components/TourCard";
import { Testimonials } from "@/components/Testimonials";
import { destinations } from "@/lib/destinations";
import { tours } from "@/lib/tours";
import { media } from "@/lib/media";
import { testimonials } from "@/lib/testimonials";

export default function Home() {
  const featuredTours = tours.filter((t) =>
    ["mindo-cloud-forest", "galapagos", "ecuador-amazon"].includes(t.slug)
  );

  return (
    <div>
      {/* Hero — the one orchestrated motion moment on the site. The
          equator hairline below is a literal, brand-true device: Ecuador
          is named for the line it sits on. */}
      <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-charcoal-950">
        <Image
          src="/images/hero-andes.webp"
          alt="Snow-capped Andean peaks rising above forested foothills and a highland valley in Ecuador"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/35 to-charcoal-950/10" />

        <Container className="relative z-10 pb-24 pt-40 md:pb-28">
          <p className="eyebrow hero-fade text-offwhite/80" style={{ animationDelay: "0.5s" }}>
            Nature &amp; Photography Tours
          </p>
          <div className="mt-6 overflow-hidden">
            <h1 className="hero-rise max-w-3xl font-serif-display text-5xl leading-[1.05] text-offwhite sm:text-6xl md:text-7xl">
              Discover Ecuador.
              <br />
              Photograph the Wild.
            </h1>
          </div>
          <p className="hero-fade mt-6 max-w-xl text-lg text-beige-100/90" style={{ animationDelay: "0.65s" }}>
            Explore Ecuador&apos;s extraordinary biodiversity, from the Andes
            and cloud forests to the Amazon rainforest, dry forests and the
            Galápagos Islands.
          </p>

          <div className="hero-fade mt-10 flex items-center gap-4" style={{ animationDelay: "0.8s" }}>
            <span className="hero-line block h-px w-16 bg-offwhite/50" />
            <p className="field-data text-offwhite/70">0°00′00″ · QUITO, ECUADOR</p>
          </div>

          <div className="hero-fade mt-8 flex flex-wrap gap-4" style={{ animationDelay: "0.95s" }}>
            <Button href="/tours" variant="primary">
              Explore Tours
            </Button>
            <Button href="/gallery" variant="outline-light">
              View Gallery
            </Button>
          </div>
        </Container>
      </section>

      {/* Intro */}
      <section className="bg-offwhite py-24 md:py-32">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <h2 className="font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
              One country.
              <br />
              Four worlds of biodiversity.
            </h2>
            <div className="flex flex-col justify-center">
              <p className="text-base leading-relaxed text-charcoal-700">
                Few places on Earth compress so much ecological range into so
                small an area. Within a few hours&apos; drive, Ecuador moves
                from Andean páramo and volcanic peaks through cloud forest and
                lowland rainforest to Pacific dry forest and coastline — and,
                a short flight away, the singular wildlife of the Galápagos
                Islands.
              </p>
              <p className="mt-4 text-base leading-relaxed text-charcoal-700">
                That concentration of ecosystems is what makes Ecuador one of
                the most rewarding countries on Earth for nature photography,
                birdwatching and quiet, attentive travel.
              </p>
              <Link href="/about" className="mt-6 inline-block w-fit border-b border-forest-800 pb-0.5 text-forest-800">
                Our philosophy
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Destinations grid */}
      <section className="bg-beige-100 py-24 md:py-32">
        <Container>
          <div className="max-w-xl">
            <h2 className="font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
              Where we take you
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal-700">
              Eight ways into Ecuador&apos;s wild places, each built around a
              distinct ecosystem, season and photography opportunity.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <DestinationCard key={destination.slug} destination={destination} />
            ))}
          </div>
        </Container>
      </section>

      {/* Featured tours */}
      <section className="bg-offwhite py-24 md:py-32">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-xl font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
              Signature tours
            </h2>
            <Button href="/tours" variant="secondary">
              View All Tours
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredTours.map((tour) => (
              <TourCard key={tour.slug} tour={tour} />
            ))}
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="bg-forest-950 py-24 text-beige-100 md:py-28">
        <Container>
          <div className="grid gap-10 border-t border-beige-100/15 pt-10 md:grid-cols-4">
            {[
              { title: "Expert Local Knowledge", body: "Guides born and trained in the regions we visit." },
              { title: "Small Groups", body: "Private and small-group departures, never mass tourism." },
              { title: "Responsible Travel", body: "Built in partnership with local and indigenous communities." },
              { title: "Photography-First", body: "Itineraries designed around light, access and patience." },
            ].map((item) => (
              <div key={item.title}>
                <p className="font-serif-display text-xl text-offwhite">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-beige-300/75">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-beige-100 py-24 md:py-32">
        <Container>
          <h2 className="max-w-xl font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
            What it&apos;s like in the field
          </h2>
          <div className="mt-14">
            <Testimonials items={testimonials} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-charcoal-950 py-28 text-center">
        <Image
          src={media.bartolomePinnacle.src}
          alt={media.bartolomePinnacle.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-charcoal-950/60" />
        <Container className="relative z-10">
          <h2 className="font-serif-display text-4xl text-offwhite md:text-5xl">
            Ready to photograph Ecuador?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-beige-100/85">
            Tell us what you want to see, and we&apos;ll design the journey
            around it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="outline-light">
              Book Your Tour
            </Button>
            <Button href="/tours" variant="outline-light">
              Browse Tours
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
