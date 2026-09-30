"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PhotoCredit } from "./PhotoCredit";
import { EndemismStatus, Species, wildlifeGroups } from "@/lib/wildlife";

const statusStyles: Record<EndemismStatus, string> = {
  "Ecuador endemic": "bg-forest-800 text-offwhite",
  "Range-restricted species": "bg-clay text-offwhite",
  "Migratory / wide-ranging": "bg-charcoal-700 text-offwhite",
};

type Group = (typeof wildlifeGroups)[number];

function isGroup(value: string | null): value is Group {
  return !!value && (wildlifeGroups as readonly string[]).includes(value);
}

function WildlifeExplorerInner({ species }: { species: Species[] }) {
  const searchParams = useSearchParams();
  const preset = searchParams.get("group");
  const [active, setActive] = useState<Group | "All">(
    isGroup(preset) ? preset : "All"
  );
  const [prevPreset, setPrevPreset] = useState(preset);

  if (preset !== prevPreset) {
    setPrevPreset(preset);
    setActive(isGroup(preset) ? preset : "All");
  }

  const filtered = useMemo(() => {
    if (active === "All") return species;
    return species.filter((s) => s.group === active);
  }, [active, species]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {(["All", ...wildlifeGroups] as const).map((g) => (
          <button
            key={g}
            onClick={() => setActive(g)}
            className={`eyebrow border px-4 py-2.5 transition-colors ${
              active === g
                ? "border-forest-900 bg-forest-900 text-offwhite"
                : "border-charcoal-900/20 text-charcoal-700 hover:border-forest-900 hover:text-forest-900"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <article key={s.slug} className="group border border-charcoal-900/10 bg-offwhite">
            <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
              <Link href={`/wildlife/${s.slug}`} className="absolute inset-0 z-0">
                <Image
                  src={s.photo.src}
                  alt={s.photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <PhotoCredit photo={s.photo} light />
              <span className={`eyebrow pointer-events-none absolute left-4 top-4 z-10 px-3 py-1 text-[10px] ${statusStyles[s.status]}`}>
                {s.status}
              </span>
            </div>
            <div className="p-6">
              <button
                onClick={() => setActive(s.group)}
                className="eyebrow text-charcoal-500 hover:text-forest-800"
              >
                {s.group}
              </button>
              <Link href={`/wildlife/${s.slug}`}>
                <h2 className="mt-2 font-serif-display text-xl text-charcoal-900 transition-colors group-hover:text-forest-800">
                  {s.commonName}
                </h2>
              </Link>
              <p className="taxon text-sm text-charcoal-500">{s.scientificName}</p>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-700">
                {s.statusNote}
              </p>
              <Link
                href={`/wildlife/${s.slug}`}
                className="mt-4 inline-block border-b border-forest-800/40 text-sm text-forest-800 group-hover:border-forest-800"
              >
                View full profile
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export function WildlifeExplorer({ species }: { species: Species[] }) {
  return (
    <Suspense fallback={null}>
      <WildlifeExplorerInner species={species} />
    </Suspense>
  );
}
