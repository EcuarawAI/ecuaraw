import Image from "next/image";
import Link from "next/link";
import { Tour } from "@/lib/tours";

export function TourCard({ tour }: { tour: Tour }) {
  return (
    <article className="group flex flex-col overflow-hidden border border-charcoal-900/10 bg-offwhite transition-shadow duration-500 hover:shadow-xl hover:shadow-charcoal-900/5">
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal-900">
        <Link href={`/tours/${tour.slug}`} className="absolute inset-0 z-0" aria-label={`View ${tour.name}`}>
          <Image
            src={tour.hero.src}
            alt={tour.hero.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>
        <div className="pointer-events-none absolute left-4 top-4 z-10 flex flex-wrap gap-1.5">
          {tour.categories.slice(0, 2).map((c) => (
            <Link
              key={c}
              href={`/tours?category=${encodeURIComponent(c)}`}
              className="eyebrow pointer-events-auto bg-offwhite/90 px-2.5 py-1 text-[10px] text-forest-900 transition-colors hover:bg-offwhite"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow text-forest-700">{tour.location}</p>
        <Link href={`/tours/${tour.slug}`}>
          <h3 className="mt-2 font-serif-display text-2xl leading-snug text-charcoal-900 transition-colors group-hover:text-forest-800">
            {tour.name}
          </h3>
        </Link>
        <p className="mt-1 text-sm italic text-charcoal-500">{tour.tagline}</p>

        <dl className="mt-5 grid grid-cols-2 gap-y-2.5 text-xs text-charcoal-700">
          <div>
            <dt className="text-charcoal-500">Duration</dt>
            <dd>{tour.duration}</dd>
          </div>
          <div>
            <dt className="text-charcoal-500">Difficulty</dt>
            <dd>{tour.difficulty}</dd>
          </div>
          <div>
            <dt className="text-charcoal-500">Best season</dt>
            <dd>{tour.bestSeason}</dd>
          </div>
          <div>
            <dt className="text-charcoal-500">Group size</dt>
            <dd>{tour.groupSize}</dd>
          </div>
        </dl>

        <p className="mt-4 text-xs uppercase tracking-wide text-charcoal-500">
          Wildlife highlights
        </p>
        <p className="mt-1 text-sm leading-relaxed text-charcoal-700">
          {tour.wildlifeExpected.slice(0, 3).join(" · ")}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-charcoal-900/10 pt-5">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-charcoal-500">
              From
            </p>
            <p className="font-serif-display text-xl text-forest-900">
              ${tour.priceFrom.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/tours/${tour.slug}`}
              className="eyebrow border border-forest-900/30 px-4 py-2.5 text-forest-900 transition-colors hover:border-forest-900"
            >
              View Tour
            </Link>
            <Link
              href={`/contact?tour=${encodeURIComponent(tour.name)}`}
              className="eyebrow bg-forest-800 px-4 py-2.5 text-offwhite transition-colors hover:bg-forest-700"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
