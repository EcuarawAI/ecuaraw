"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { GalleryCategory, GalleryImage, galleryCategories } from "@/lib/gallery";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState<GalleryCategory | "All">("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (active === "All") return images;
    return images.filter((img) => img.categories.includes(active));
  }, [active, images]);

  const current = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  function close() {
    setLightboxIndex(null);
  }
  function next(e?: React.MouseEvent) {
    e?.stopPropagation();
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));
  }
  function prev(e?: React.MouseEvent) {
    e?.stopPropagation();
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {(["All", ...galleryCategories] as const).map((cat) => (
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

      <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {filtered.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setLightboxIndex(i)}
            className="group relative block w-full overflow-hidden bg-charcoal-900 text-left"
          >
            <Image
              src={img.photo.src}
              alt={img.photo.alt}
              width={900}
              height={700}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              {img.species && (
                <p className="font-serif-display text-sm italic text-offwhite">
                  {img.species}
                </p>
              )}
              <p className="text-xs text-beige-200/80">{img.location}</p>
            </div>
          </button>
        ))}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal-950/95 p-4 md:p-10"
          onClick={close}
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 text-3xl font-light text-offwhite/80 hover:text-offwhite"
          >
            ×
          </button>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-offwhite/70 hover:text-offwhite md:left-8"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-offwhite/70 hover:text-offwhite md:right-8"
          >
            ›
          </button>

          <div
            className="flex max-h-[85vh] w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] w-full">
              <Image
                src={current.photo.src}
                alt={current.photo.alt}
                width={1600}
                height={1200}
                className="mx-auto max-h-[70vh] w-auto object-contain"
              />
            </div>
            <div className="mt-5 text-center">
              {current.species && (
                <p className="font-serif-display text-lg italic text-offwhite">
                  {current.species}
                </p>
              )}
              <p className="mt-1 text-sm text-beige-200/80">
                {current.location} · {current.region}
              </p>
              <a
                href={current.photo.creditUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-xs text-beige-300/60 hover:text-beige-200"
              >
                Photo: {current.photo.credit} / Wikimedia Commons
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
