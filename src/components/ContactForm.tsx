"use client";

import { FormEvent, Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { siteConfig } from "@/lib/site";
import { tours } from "@/lib/tours";

function ContactFormInner() {
  const searchParams = useSearchParams();
  const presetTour = searchParams.get("tour") ?? "";
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Country: ${data.get("country")}`,
      `WhatsApp / Phone: ${data.get("phone")}`,
      `Tour of interest: ${data.get("tour")}`,
      `Preferred travel dates: ${data.get("dates")}`,
      `Number of travelers: ${data.get("travelers")}`,
      `Photography experience: ${data.get("experience")}`,
      "",
      `Message:`,
      `${data.get("message")}`,
    ].join("\n");

    const subject = encodeURIComponent(
      `Tour inquiry${presetTour || data.get("tour") ? ` — ${data.get("tour")}` : ""}`
    );
    const body = encodeURIComponent(lines);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-forest-800/30 bg-beige-100 p-8 text-center">
        <p className="font-serif-display text-2xl text-forest-900">
          Thank you — your email app should now be open.
        </p>
        <p className="mt-3 text-sm text-charcoal-700">
          If it didn&apos;t open automatically, write to us directly at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline">
            {siteConfig.email}
          </a>{" "}
          or message us on{" "}
          <a href={siteConfig.whatsappHref} className="underline" target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          .
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="eyebrow mt-6 text-forest-800 underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <Field label="Name" name="name" required />
      <Field label="Email" name="email" type="email" required />
      <Field label="Country" name="country" />
      <Field label="WhatsApp / Phone" name="phone" />
      <div className="flex flex-col gap-2 sm:col-span-1">
        <label className="eyebrow text-charcoal-700" htmlFor="tour">
          Tour of Interest
        </label>
        <select
          id="tour"
          name="tour"
          defaultValue={presetTour}
          className="border border-charcoal-900/20 bg-offwhite px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-forest-800"
        >
          <option value="">Not sure yet</option>
          {tours.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
          <option value="Custom / Private Expedition">Custom / Private Expedition</option>
        </select>
      </div>
      <Field label="Preferred Travel Dates" name="dates" placeholder="e.g. March 2027" />
      <Field label="Number of Travelers" name="travelers" type="number" min={1} />
      <div className="flex flex-col gap-2 sm:col-span-1">
        <label className="eyebrow text-charcoal-700" htmlFor="experience">
          Photography Experience
        </label>
        <select
          id="experience"
          name="experience"
          className="border border-charcoal-900/20 bg-offwhite px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-forest-800"
        >
          <option value="None / not a photographer">None / not a photographer</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced / professional">Advanced / professional</option>
        </select>
      </div>

      <div className="flex flex-col gap-2 sm:col-span-2">
        <label className="eyebrow text-charcoal-700" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us what you'd like to see and photograph in Ecuador..."
          className="border border-charcoal-900/20 bg-offwhite px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-forest-800"
        />
      </div>

      <button
        type="submit"
        className="eyebrow inline-flex w-fit items-center justify-center bg-forest-800 px-8 py-3.5 text-offwhite transition-colors hover:bg-forest-700 sm:col-span-2"
      >
        Send Inquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="eyebrow text-charcoal-700" htmlFor={name}>
        {label}
        {required && <span className="text-forest-700"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        min={min}
        className="border border-charcoal-900/20 bg-offwhite px-4 py-3 text-sm text-charcoal-900 outline-none focus:border-forest-800"
      />
    </div>
  );
}

export function ContactForm() {
  return (
    <Suspense fallback={null}>
      <ContactFormInner />
    </Suspense>
  );
}
