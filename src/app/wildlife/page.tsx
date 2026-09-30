import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { WildlifeExplorer } from "@/components/WildlifeExplorer";
import { species } from "@/lib/wildlife";

export const metadata: Metadata = {
  title: "Wildlife of Ecuador",
  description:
    "A field guide to Ecuador's wildlife, with scientific names, distribution, habitat, conservation status and photography tips — clearly distinguishing endemic, range-restricted and migratory species.",
  alternates: { canonical: "/wildlife" },
};

export default function WildlifePage() {
  return (
    <div className="pt-28">
      <Container className="py-16 md:py-20">
        <h1 className="max-w-2xl font-serif-display text-5xl leading-tight text-charcoal-900 md:text-6xl">
          A field guide to what you might see
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal-700">
          We label every species by its real status rather than defaulting
          to &quot;endemic&quot; for anything striking. An{" "}
          <strong className="text-forest-900">Ecuador endemic</strong>{" "}
          exists nowhere else in the wild. A{" "}
          <strong className="text-clay">range-restricted species</strong> is
          confined to a small region that may span national borders. A{" "}
          <strong className="text-charcoal-900">migratory or
          wide-ranging</strong> species moves across a much larger area,
          Ecuador being one part of its range.
        </p>

        <div className="mt-14">
          <WildlifeExplorer species={species} />
        </div>

        <p className="mt-14 max-w-2xl text-xs leading-relaxed text-charcoal-500">
          Sources: IUCN Red List species assessments, and regional field
          guides for Ecuador and the Neotropics. This page is intended as a
          general field reference, not a definitive taxonomic authority —
          always confirm current status through IUCN or a specialist field
          guide before publishing elsewhere.
        </p>
      </Container>
    </div>
  );
}
