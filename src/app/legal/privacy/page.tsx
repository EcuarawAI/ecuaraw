import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        ECUARAW collects only the information needed to respond to inquiries
        and plan tours: your name, contact details, and any trip preferences
        you share with us through the contact form or direct communication.
      </p>
      <h2>How We Use Your Information</h2>
      <p>
        Information you provide is used solely to respond to your inquiry,
        plan your trip, and communicate booking details. We do not sell or
        share your information with third parties for marketing purposes.
      </p>
      <h2>Payment Information</h2>
      <p>
        ECUARAW does not currently process online payments or store payment
        card information. When online payment is introduced, it will be
        handled through PCI-compliant, tokenized processors such as Stripe
        and PayPal — card details will never be stored on our servers.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about this policy can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`} className="underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </>
  );
}
