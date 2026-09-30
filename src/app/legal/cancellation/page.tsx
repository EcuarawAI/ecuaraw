import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  robots: { index: false },
};

export default function CancellationPage() {
  return (
    <>
      <h1>Cancellation Policy</h1>
      <p>
        Because our tours involve small groups, reserved lodging and, in
        several regions, community-based guiding arrangements, cancellations
        affect our partners directly. General guidelines are outlined below
        and will be confirmed in writing at booking.
      </p>
      <h2>Traveler-Initiated Cancellations</h2>
      <p>
        Deposits are typically non-refundable, with remaining balances
        subject to a sliding scale depending on how close to departure the
        cancellation occurs. Exact terms are provided per tour at booking.
      </p>
      <h2>ECUARAW-Initiated Changes</h2>
      <p>
        In the rare event we must cancel a departure — for safety, weather,
        or insufficient group size — travelers will be offered a full
        refund or the option to rebook a future departure.
      </p>
    </>
  );
}
