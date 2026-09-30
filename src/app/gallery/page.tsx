import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PhotoCredit } from "@/components/PhotoCredit";
import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/gallery";
import { media } from "@/lib/media";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A photography gallery of Ecuador's wildlife and landscapes — birds, mammals, reptiles, plants and the Andes, Amazon, cloud forest, dry forest and Galápagos.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <div>
      <section className="relative flex h-[55vh] min-h-[420px] items-end overflow-hidden bg-charcoal-950">
        <Image
          src={media.swordBilledGuango.src}
          alt={media.swordBilledGuango.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/25 to-charcoal-950/10" />
        <PhotoCredit photo={media.swordBilledGuango} light />
        <Container className="relative z-10 pb-16 pt-28">
          <h1 className="max-w-xl font-serif-display text-5xl leading-tight text-offwhite md:text-6xl">
            Wild Ecuador, photographed beautifully
          </h1>
        </Container>
      </section>

      <section className="bg-offwhite py-20 md:py-24">
        <Container>
          <GalleryGrid images={galleryImages} />
        </Container>
      </section>
    </div>
  );
}
