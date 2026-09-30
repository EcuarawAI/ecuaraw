import Image from "next/image";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { media } from "@/lib/media";

export default function NotFound() {
  return (
    <div className="relative flex h-[100svh] min-h-[560px] items-center overflow-hidden bg-charcoal-950">
      <Image
        src={media.dryForestTumbes.src}
        alt={media.dryForestTumbes.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-charcoal-950/50" />
      <Container className="relative z-10 text-center">
        <p className="field-data text-beige-100/60">404 — NOT FOUND</p>
        <h1 className="mt-6 font-serif-display text-5xl text-offwhite md:text-6xl">
          This trail doesn&apos;t lead anywhere.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-beige-100/85">
          The page you&apos;re looking for may have moved. Let&apos;s get you
          back on the trail.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="outline-light">
            Back to Home
          </Button>
          <Button href="/tours" variant="outline-light">
            Browse Tours
          </Button>
        </div>
      </Container>
    </div>
  );
}
