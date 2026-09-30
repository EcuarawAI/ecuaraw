import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <>
      <h1>Terms & Conditions</h1>
      <p>
        These terms govern the use of the ECUARAW website and the booking of
        tours through ECUARAW. By enquiring about or booking a tour, you
        agree to the terms outlined here, which will be confirmed in full
        detail in your booking agreement.
      </p>
      <h2>Bookings</h2>
      <p>
        Tour bookings are confirmed directly with our team following an
        inquiry, itinerary review and deposit. Availability and final
        pricing are confirmed at the time of booking.
      </p>
      <h2>Traveler Responsibilities</h2>
      <p>
        Travelers are responsible for arriving with valid travel documents,
        appropriate insurance, and any required vaccinations or health
        precautions for the regions visited.
      </p>
      <h2>Changes to Itineraries</h2>
      <p>
        Weather, wildlife behavior and local conditions in Ecuador&apos;s
        wild places can require itinerary adjustments. Guides will always
        prioritize safety and animal welfare over a fixed schedule.
      </p>
      <p className="text-xs text-charcoal-500">
        This is a template summary and does not constitute a complete legal
        agreement. Full terms will be provided at time of booking.
      </p>
    </>
  );
}
