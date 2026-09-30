export const siteConfig = {
  name: "ECUARAW",
  tagline: "Nature and Photography Tours",
  description:
    "ECUARAW is an Ecuador-based nature and photography travel company offering wildlife photography, birdwatching and biodiversity expeditions across the Andes, cloud forest, Amazon, dry forest and Galápagos Islands.",
  url: "https://www.ecuaraw.com",
  email: "hello@ecuaraw.com",
  whatsapp: "+593 99 123 4567",
  whatsappHref: "https://wa.me/593991234567",
  location: "Quito, Ecuador",
  social: {
    instagram: "https://instagram.com/ecuaraw",
    facebook: "https://facebook.com/ecuaraw",
    youtube: "https://youtube.com/@ecuaraw",
  },
};

export const mainNav = [
  { label: "Main", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tours", href: "/tours" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = {
  main: mainNav,
  destinations: [
    { label: "Mindo", href: "/tours/mindo-cloud-forest" },
    { label: "Cloud Forest", href: "/tours/mindo-cloud-forest" },
    { label: "Andes & Páramo", href: "/tours/andes-paramo" },
    { label: "Amazon", href: "/tours/ecuador-amazon" },
    { label: "Dry Forest", href: "/tours/dry-forest" },
    { label: "Galápagos", href: "/tours/galapagos" },
    { label: "Ecuadorian Endemics", href: "/tours/ecuadorian-endemics" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/legal/terms" },
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Cancellation Policy", href: "/legal/cancellation" },
    { label: "Payment & Refund Policy", href: "/legal/payments" },
  ],
};

// Editable through the CMS. Ranges are used deliberately in place of
// unverified precise figures — see /about for sourcing notes.
export const stats = [
  { value: "4", label: "Major natural regions", detail: "Andes, Amazon, Coast & Galápagos" },
  { value: "Top 20", label: "Global biodiversity ranking", detail: "Among the world's most biodiverse countries" },
  { value: "1,600+", label: "Bird species recorded", detail: "Roughly one in six of all bird species on Earth" },
  { value: "Extraordinary", label: "Endemism", detail: "Especially concentrated in the Galápagos and Chocó" },
];
