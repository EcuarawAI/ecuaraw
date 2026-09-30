import { media } from "./media";

export type Destination = {
  slug: string;
  name: string;
  description: string;
  photo: (typeof media)[keyof typeof media];
  href: string;
  coords?: string;
};

export const destinations: Destination[] = [
  {
    slug: "mindo",
    name: "Mindo",
    description:
      "A cloud forest village an hour from Quito, alive with hummingbirds, tanagers and one of the highest concentrations of bird species on the planet.",
    photo: media.mindoForest05,
    href: "/tours/mindo-cloud-forest",
    coords: "0°02′S 78°46′W",
  },
  {
    slug: "cloud-forest",
    name: "Cloud Forest",
    description:
      "Moss-draped canopies suspended in mist, where orchids, ferns and hummingbirds thrive in one of Ecuador's most biodiverse ecosystems.",
    photo: media.cockOfTheRock,
    href: "/tours/mindo-cloud-forest",
    coords: "0°02′S 78°46′W",
  },
  {
    slug: "andes-paramo",
    name: "Andes & Páramo",
    description:
      "Volcanoes, high-altitude lakes and windswept grassland home to condors, hummingbirds and Ecuador's dramatic highland light.",
    photo: media.chimborazoBanner,
    href: "/tours/andes-paramo",
    coords: "0°40′S 78°26′W",
  },
  {
    slug: "amazon",
    name: "Ecuadorian Amazon",
    description:
      "Rivers, primary rainforest and extraordinary wildlife density in the Yasuní region, one of the most biodiverse places on Earth.",
    photo: media.amazonTena,
    href: "/tours/ecuador-amazon",
    coords: "0°59′S 77°49′W",
  },
  {
    slug: "dry-forest",
    name: "Dry Forest",
    description:
      "A seasonal, sun-bleached ecosystem on Ecuador's Pacific coast, home to range-restricted birds and reptiles found almost nowhere else.",
    photo: media.dryForestTumbesino,
    href: "/tours/dry-forest",
    coords: "2°10′S 80°09′W",
  },
  {
    slug: "galapagos",
    name: "Galápagos Islands",
    description:
      "Volcanic islands where wildlife shows no fear of humans, and evolution can be observed and photographed at arm's length.",
    photo: media.bartolomePinnacle,
    href: "/tours/galapagos",
    coords: "0°44′S 90°19′W",
  },
  {
    slug: "endemics",
    name: "Ecuadorian Endemics",
    description:
      "Focused expeditions to photograph species found only, or almost only, within Ecuador's borders and island archipelago.",
    photo: media.marineIguanaSantaCruz,
    href: "/tours/ecuadorian-endemics",
  },
  {
    slug: "birdwatching",
    name: "Birdwatching & Wildlife",
    description:
      "With over 1,600 recorded bird species, Ecuador rewards patient observation and quiet fieldcraft in equal measure.",
    photo: media.swordBilledGuango,
    href: "/tours",
  },
];
