"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Tour, TourCategory, tourCategories } from "@/lib/tours";
import { TourCard } from "./TourCard";

function isTourCategory(value: string | null): value is TourCategory {
  return !!value && (tourCategories as readonly string[]).includes(value);
}

function ToursExplorerInner({ tours }: { tours: Tour[] }) {
  const searchParams = useSearchParams();
  const preset = searchParams.get("category");
  const [active, setActive] = useState<TourCategory | "All">(
    isTourCategory(preset) ? preset : "All"
  );
  const [prevPreset, setPrevPreset] = useState(preset);

  if (preset !== prevPreset) {
    setPrevPreset(preset);
    setActive(isTourCategory(preset) ? preset : "All");
  }

  const filtered = useMemo(() => {
    if (active === "All") return tours;
    return tours.filter((t) => t.categories.includes(active));
  }, [active, tours]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {(["All", ...tourCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`eyebrow border px-4 py-2.5 transition-colors ${
              active === cat
                ? "border-forest-900 bg-forest-900 text-offwhite"
                : "border-charcoal-900/20 text-charcoal-700 hover:border-forest-900 hover:text-forest-900"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="mt-6 text-sm text-charcoal-500">
        {filtered.length} {filtered.length === 1 ? "tour" : "tours"}
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </div>
  );
}

export function ToursExplorer({ tours }: { tours: Tour[] }) {
  return (
    <Suspense fallback={null}>
      <ToursExplorerInner tours={tours} />
    </Suspense>
  );
}
