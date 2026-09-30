export function StatBlock({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="border-t border-beige-200/20 pt-6">
      <p className="font-serif-display text-4xl text-offwhite md:text-5xl">
        {value}
      </p>
      <p className="eyebrow mt-3 text-beige-200">{label}</p>
      <p className="mt-2 text-sm text-beige-300/70">{detail}</p>
    </div>
  );
}
