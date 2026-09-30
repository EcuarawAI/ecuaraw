import { Testimonial } from "@/lib/testimonials";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {items.map((t) => (
        <figure key={t.id} className="h-full border border-charcoal-900/10 bg-offwhite p-8">
          <span className="font-serif-display text-4xl leading-none text-forest-700/40">
            &ldquo;
          </span>
          <blockquote className="-mt-3 text-base leading-relaxed text-charcoal-800">
            {t.quote}
          </blockquote>
          <figcaption className="mt-6 border-t border-charcoal-900/10 pt-4">
            <p className="text-sm font-medium text-charcoal-900">
              {t.name} <span className="text-charcoal-500">· {t.location}</span>
            </p>
            <p className="eyebrow mt-1 text-forest-700">{t.tour}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
