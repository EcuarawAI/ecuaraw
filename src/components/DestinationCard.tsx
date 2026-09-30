import Image from "next/image";
import Link from "next/link";
import { Destination } from "@/lib/destinations";

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={destination.href}
      className="group relative block aspect-[4/5] overflow-hidden bg-charcoal-900"
    >
      <Image
        src={destination.photo.src}
        alt={destination.photo.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/10 to-transparent" />

      {destination.coords && (
        <p className="field-data absolute left-4 top-4 text-offwhite/60">
          {destination.coords}
        </p>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-serif-display text-xl text-offwhite">
          {destination.name}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-beige-200/90 opacity-0 transition-all duration-500 ease-out group-hover:max-h-32 group-hover:opacity-100">
          {destination.description}
        </p>
      </div>
    </Link>
  );
}
