import { media, type Photo } from "./media";

export type BlogCategory =
  | "Ecuador Wildlife"
  | "Bird Photography"
  | "Ecuador Travel"
  | "Conservation"
  | "Nature Guide"
  | "Photography Tips";

export type BlogPost = {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  date: string;
  author: string;
  cover: Photo;
  paragraphs: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "photographing-hummingbirds-mindo",
    title: "Photographing Hummingbirds in Mindo: A Field Guide",
    category: "Bird Photography",
    excerpt:
      "Feeder stations in Mindo put a dozen hummingbird species within arm's reach. Here's how to plan your settings, timing and etiquette.",
    date: "2026-06-02",
    author: "ECUARAW Guides",
    cover: media.swordBilledHummingbird,
    paragraphs: [
      "Mindo's cloud forest feeder stations are one of the most reliable places on Earth to photograph hummingbirds at close range. Because feeding activity is constant through daylight hours, the challenge shifts from finding subjects to controlling light and motion.",
      "Early morning and late afternoon light is softer and more directional, which helps separate a bird from a busy green background. A fast shutter speed, at minimum 1/2000s, is usually needed to freeze wingbeats without flash; with flash, high-speed sync opens up slower ambient exposures for richer color.",
      "Patience pays off more than gear. Pick one or two flowers or perches, pre-focus, and wait for a species to return to the same spot rather than chasing movement across the whole feeder line.",
    ],
  },
  {
    slug: "when-to-visit-galapagos",
    title: "When to Visit Galápagos for Photography",
    category: "Ecuador Travel",
    excerpt:
      "Galápagos rewards visitors year-round, but different seasons favor different species and light. Here's how to match your trip to your subject list.",
    date: "2026-04-18",
    author: "ECUARAW Guides",
    cover: media.blueFootedBoobySantaCruz,
    paragraphs: [
      "The Galápagos archipelago sits on the equator, so seasonal change is driven more by ocean currents than by temperature swings. The warm, wet season (roughly December to May) brings calmer seas and courtship displays in many seabird species. The cooler, dry garúa season (June to November) brings livelier water and is favored by divers and underwater photographers.",
      "Rather than chasing a single 'best' month, we plan Galápagos trips around a traveler's specific target species and comfort with sea conditions, then match the itinerary and island route accordingly.",
    ],
  },
  {
    slug: "understanding-ecuador-endemism",
    title: "Endemic, Range-Restricted or Migratory? Understanding Ecuador's Wildlife Labels",
    category: "Ecuador Wildlife",
    excerpt:
      "Not every iconic Ecuadorian species is technically endemic to Ecuador. Here's why the distinction matters, and how we label it across our site.",
    date: "2026-02-27",
    author: "ECUARAW Guides",
    cover: media.marineIguanaSantaCruz,
    paragraphs: [
      "\"Endemic\" is a precise scientific term: a species found in the wild nowhere else. Galápagos marine iguanas and giant tortoises meet that bar. Many of Ecuador's most photographed species, like the Andean cock-of-the-rock or sword-billed hummingbird, are range-restricted to the Andean cloud forest belt but are also found in neighboring countries — so we describe them as range-restricted rather than endemic.",
      "We take this distinction seriously across our tour pages and wildlife guide, because overstating endemism does a disservice to both travelers and the species themselves. Where we're not certain, we say so.",
    ],
  },
  {
    slug: "responsible-wildlife-photography",
    title: "Five Rules We Follow for Responsible Wildlife Photography",
    category: "Photography Tips",
    excerpt:
      "Great wildlife images and ethical fieldcraft are not in tension. Here's the working code our guides follow on every trip.",
    date: "2026-01-14",
    author: "ECUARAW Guides",
    cover: media.cockOfTheRock,
    paragraphs: [
      "1. Distance first, lens second. If getting the shot means closing a distance a guide hasn't cleared, the shot waits. 2. No baiting or calling to alter natural behavior beyond established feeder stations. 3. Flash is used only where local guidelines and species tolerance allow it. 4. Nests and leks are treated as off-limits beyond designated hides. 5. Groups stay small, quiet and briefed before every outing.",
      "These rules occasionally cost a photograph. They consistently protect the places and animals that make the photograph possible in the first place.",
    ],
  },
];

export const blogCategories: BlogCategory[] = [
  "Ecuador Wildlife",
  "Bird Photography",
  "Ecuador Travel",
  "Conservation",
  "Nature Guide",
  "Photography Tips",
];
