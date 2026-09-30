import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment & Refund Policy",
  robots: { index: false },
};

export default function PaymentsPage() {
  return (
    <>
      <h1>Payment & Refund Policy</h1>
      <p>
        ECUARAW is preparing secure online payment through Stripe and
        PayPal, supporting major credit and debit cards. Until that system
        is live, bookings are confirmed and paid through direct arrangement
        with our team.
      </p>
      <h2>Planned Payment Methods</h2>
      <p>
        Visa, Mastercard, American Express (where available), Apple Pay and
        Google Pay via Stripe, and PayPal. No card details will ever be
        stored directly on ecuaraw.com — all card processing will run
        through Stripe and PayPal&apos;s secure, tokenized infrastructure.
      </p>
      <h2>Refunds</h2>
      <p>
        Refunds are handled per our{" "}
        <a href="/legal/cancellation" className="underline">
          Cancellation Policy
        </a>{" "}
        and are returned to the original payment method once online payment
        is enabled.
      </p>
    </>
  );
}
