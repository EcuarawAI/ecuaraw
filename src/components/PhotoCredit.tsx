import { Photo } from "@/lib/media";

export function PhotoCredit({ photo, light = false }: { photo: Photo; light?: boolean }) {
  return (
    <a
      href={photo.creditUrl}
      target="_blank"
      rel="noreferrer"
      className={`absolute bottom-3 right-3 z-10 text-[10px] tracking-wide opacity-0 transition-opacity duration-300 hover:opacity-100 group-hover:opacity-70 ${
        light ? "text-offwhite" : "text-charcoal-900"
      }`}
    >
      Photo: {photo.credit} / Wikimedia
    </a>
  );
}
