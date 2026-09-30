import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { StatBlock } from "@/components/StatBlock";
import { Button } from "@/components/Button";
import { PhotoCredit } from "@/components/PhotoCredit";
import { media } from "@/lib/media";
import { stats } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "ECUARAW is a nature and photography travel company based in Ecuador, built around local knowledge, small groups, wildlife photography and responsible tourism.",
  alternates: { canonical: "/about" },
};

const philosophy = [
  {
    title: "Local knowledge",
    body: "Every itinerary is built by people who grew up in, or have spent years working within, the ecosystems we visit — not adapted from a generic template.",
  },
  {
    title: "Nature interpretation",
    body: "Our guides don't just find wildlife, they explain it: behavior, ecology and the conservation story behind what you're seeing.",
  },
  {
    title: "Small groups",
    body: "Most departures run with two to eight travelers. Smaller groups move quieter, get closer, and see more.",
  },
  {
    title: "Customized itineraries",
    body: "Standard departures exist, but many trips are shaped around a traveler's specific target species, fitness level or photography goals.",
  },
];

const guides = [
  {
    name: "Field naturalists",
    body: "Trained in regional bird and wildlife identification, with years of trail-specific experience across the Andes, Chocó and Amazon.",
  },
  {
    name: "Photography-literate guiding",
    body: "Comfortable with hide etiquette, light timing and the pace a photography group actually needs — not a checklist tour.",
  },
  {
    name: "Community-based local guides",
    body: "On Amazon and dry-forest routes, ECUARAW guides work alongside local and indigenous community guides with generations of forest knowledge.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[480px] items-end overflow-hidden bg-charcoal-950">
        <Image
          src={media.mindoHillScene.src}
          alt={media.mindoHillScene.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-charcoal-950/10" />
        <PhotoCredit photo={media.mindoHillScene} light />
        <Container className="relative z-10 pb-20 pt-32">
          <h1 className="max-w-2xl font-serif-display text-5xl leading-tight text-offwhite md:text-6xl">
            Travel with curiosity.
            <br />
            Photograph with purpose.
          </h1>
        </Container>
      </section>

      <section className="bg-offwhite py-24 md:py-28">
        <Container>
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-charcoal-700">
            ECUARAW is a nature and photography travel company based in
            Ecuador, created for travelers, photographers, birdwatchers and
            nature enthusiasts who want to experience Ecuador&apos;s
            biodiversity through meaningful, carefully designed journeys —
            not a checklist of stops, but time spent well in extraordinary
            places.
          </p>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="bg-beige-100 py-24 md:py-28">
        <Container>
          <h2 className="max-w-xl font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
            Slow travel, close observation
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {philosophy.map((item) => (
              <div key={item.title} className="border-t border-charcoal-900/15 pt-6">
                <h3 className="font-serif-display text-xl text-forest-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Guides */}
      <section className="bg-offwhite py-24 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <h2 className="font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
                People who know these places
              </h2>
              <p className="mt-5 text-base leading-relaxed text-charcoal-700">
                Guiding quality is the single biggest variable in a nature
                trip. Ours are chosen for field skill first, and for their
                ability to teach and to work at a photographer&apos;s pace.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              {guides.map((g) => (
                <div key={g.name} className="border-l-2 border-forest-800 pl-6">
                  <h3 className="font-serif-display text-lg text-charcoal-900">
                    {g.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal-700">
                    {g.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Responsible travel */}
      <section className="relative overflow-hidden bg-charcoal-950 py-28 text-offwhite">
        <Image
          src={media.amazonTena.src}
          alt={media.amazonTena.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-charcoal-950/50" />
        <Container className="relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif-display text-4xl leading-tight md:text-5xl">
              Conservation and community, not just scenery
            </h2>
            <p className="mt-6 text-base leading-relaxed text-beige-100/85">
              We work directly with local and indigenous communities, favor
              conservation-linked reserves and lodges, keep groups small to
              limit our footprint, and follow strict ethical distances around
              nesting sites, leks and sensitive wildlife. A portion of trip
              proceeds supports the reserves and communities we visit.
            </p>
          </div>
        </Container>
      </section>

      {/* Why Ecuador */}
      <section className="bg-beige-100 py-24 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <h2 className="font-serif-display text-4xl leading-tight text-charcoal-900 md:text-5xl">
              Pacific Ocean to Amazon rainforest, in one country
            </h2>
            <div className="flex flex-col justify-center gap-4 text-base leading-relaxed text-charcoal-700">
              <p>
                Ecuador packs four major natural regions — Andes, Amazon,
                Pacific coast and Galápagos — into a country roughly the size
                of the U.S. state of Nevada. Elevation does the rest: a two
                or three hour drive can move you between ecological zones
                that, elsewhere, would take days to cross.
              </p>
              <p>
                That compression is why Ecuador consistently ranks among the
                world&apos;s most biodiverse countries per unit area, and why
                a two-week trip here can realistically include cloud forest
                hummingbirds, Amazon macaws, Andean condors and Galápagos
                marine iguanas.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="bg-forest-950 py-24 text-beige-100 md:py-28">
        <Container>
          <h2 className="max-w-xl font-serif-display text-4xl leading-tight text-offwhite md:text-5xl">
            A small country, an outsized share of life
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {stats.map((s) => (
              <StatBlock key={s.label} {...s} />
            ))}
          </div>
          <p className="mt-12 max-w-2xl text-xs leading-relaxed text-beige-300/60">
            Figures are presented as informative ranges rather than exact
            counts, since biodiversity totals are periodically revised as new
            species are described and taxonomy is updated. Sources: Ecuador
            Ministry of Environment, Aves de Ecuador checklists and IUCN
            regional assessments. This section is CMS-editable so figures can
            be kept current.
          </p>
        </Container>
      </section>

      <section className="bg-offwhite py-24 text-center md:py-28">
        <Container>
          <h2 className="font-serif-display text-3xl text-charcoal-900 md:text-4xl">
            Curious what a trip built around your interests looks like?
          </h2>
          <div className="mt-8">
            <Button href="/contact">Start Planning</Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
