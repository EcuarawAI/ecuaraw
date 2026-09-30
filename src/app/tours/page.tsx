import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PhotoCredit } from "@/components/PhotoCredit";
import { ToursExplorer } from "@/components/ToursExplorer";
import { tours } from "@/lib/tours";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Nature, photography, birdwatching and wildlife tours across Ecuador — Mindo cloud forest, the Andes & páramo, the Amazon, dry forest, Galápagos and custom endemics expeditions.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <div>
      <section className="relative flex h-[55vh] min-h-[420px] items-end overflow-hidden bg-charcoal-950">
        <Image
          src={media.frigatebirdGenovesa.src}
          alt={media.frigatebirdGenovesa.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/25 to-charcoal-950/10" />
        <PhotoCredit photo={media.frigatebirdGenovesa} light />
        <Container className="relative z-10 pb-16 pt-28">
          <h1 className="max-w-xl font-serif-display text-5xl leading-tight text-offwhite md:text-6xl">
            Nature & photography tours across Ecuador
          </h1>
        </Container>
      </section>

      <section className="bg-offwhite py-20 md:py-24">
        <Container>
          <ToursExplorer tours={tours} />
        </Container>
      </section>
    </div>
  );
}
