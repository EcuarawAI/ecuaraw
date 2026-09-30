import { media, type Photo } from "./media";

export type EndemismStatus =
  | "Ecuador endemic"
  | "Range-restricted species"
  | "Migratory / wide-ranging";

export type Species = {
  slug: string;
  commonName: string;
  scientificName: string;
  group: "Birds" | "Mammals" | "Reptiles" | "Amphibians" | "Plants";
  photo: Photo;
  status: EndemismStatus;
  statusNote: string;
  distribution: string;
  habitat: string;
  diet: string;
  conservationStatus: string;
  behavior: string;
  photographyTips: string;
  whereToSee: string;
};

export const species: Species[] = [
  {
    slug: "marine-iguana",
    commonName: "Marine iguana",
    scientificName: "Amblyrhynchus cristatus",
    group: "Reptiles",
    photo: media.marineIguanaTortuga,
    status: "Ecuador endemic",
    statusNote:
      "Found nowhere in the wild outside the Galápagos Islands, part of Ecuador — a genuine Ecuador endemic.",
    distribution: "Galápagos Islands only.",
    habitat: "Rocky volcanic shoreline and shallow coastal waters.",
    diet: "Marine algae, grazed from submerged and intertidal rocks.",
    conservationStatus: "Vulnerable (IUCN), threatened by introduced predators and El Niño events.",
    behavior: "Basks in large colonies on dark lava rock to regulate body temperature after cold ocean dives.",
    photographyTips: "Shoot low and wide at eye level for scale; midday basking colonies offer the most reliable access.",
    whereToSee: "Tortuga Bay and Fernandina Island, on the Galápagos tour.",
  },
  {
    slug: "galapagos-giant-tortoise",
    commonName: "Galápagos giant tortoise",
    scientificName: "Chelonoidis spp.",
    group: "Reptiles",
    photo: media.giantTortoise,
    status: "Ecuador endemic",
    statusNote:
      "All extant giant tortoise species and subspecies of this genus in the wild are endemic to the Galápagos.",
    distribution: "Several Galápagos islands, with distinct species/subspecies per island or volcano.",
    habitat: "Highland humid zones and lowland dry areas, migrating seasonally between them.",
    diet: "Grasses, fruit, cactus pads and a wide range of vegetation.",
    conservationStatus: "Varies by species, from Vulnerable to Critically Endangered (IUCN).",
    behavior: "Slow-moving grazers; males engage in neck-stretching dominance displays.",
    photographyTips: "Approach quietly at grazing height; the Santa Cruz highlands offer wild, unenclosed encounters.",
    whereToSee: "Santa Cruz highlands, on the Galápagos tour.",
  },
  {
    slug: "blue-footed-booby",
    commonName: "Blue-footed booby",
    scientificName: "Sula nebouxii",
    group: "Birds",
    photo: media.blueFootedBoobyRWD1,
    status: "Migratory / wide-ranging",
    statusNote:
      "Iconic in the Galápagos but not an Ecuador endemic — its range extends along the Pacific coast from California to Peru.",
    distribution: "Pacific coast of the Americas, from the Gulf of California to Peru, including Galápagos.",
    habitat: "Rocky coastal cliffs and offshore islands.",
    diet: "Small schooling fish, caught in spectacular plunge-dives.",
    conservationStatus: "Least Concern (IUCN), though some regional populations have declined.",
    behavior: "Famous for its synchronized, foot-lifting courtship dance during breeding season.",
    photographyTips: "Fast shutter speeds capture plunge-diving; courtship displays reward patience at breeding colonies.",
    whereToSee: "North Seymour and Española Islands, on the Galápagos tour.",
  },
  {
    slug: "andean-cock-of-the-rock",
    commonName: "Andean cock-of-the-rock",
    scientificName: "Rupicola peruvianus",
    group: "Birds",
    photo: media.cockOfTheRock,
    status: "Range-restricted species",
    statusNote:
      "Restricted to Andean cloud forest, but its range spans several countries from Venezuela to Bolivia — not an Ecuador endemic.",
    distribution: "Andean cloud forest from Venezuela and Colombia south to Bolivia.",
    habitat: "Humid montane cloud forest, typically 500–2,400 m elevation.",
    diet: "Fruit, with occasional insects and small vertebrates.",
    conservationStatus: "Least Concern (IUCN).",
    behavior: "Males gather at traditional lek sites to display bright plumage and compete for mates.",
    photographyTips: "Photograph leks at first light from a fixed hide; avoid flash and keep voices low.",
    whereToSee: "Mindo cloud forest, on the Mindo Cloud Forest tour.",
  },
  {
    slug: "sword-billed-hummingbird",
    commonName: "Sword-billed hummingbird",
    scientificName: "Ensifera ensifera",
    group: "Birds",
    photo: media.swordBilledHummingbird,
    status: "Range-restricted species",
    statusNote:
      "The only bird with a bill longer than its body, restricted to high Andean forest from Venezuela to Bolivia — not an Ecuador endemic.",
    distribution: "High Andes from Venezuela and Colombia south to Bolivia.",
    habitat: "Montane and elfin forest, typically 1,700–3,500 m elevation.",
    diet: "Nectar from long, tubular flowers such as Passiflora and Datura, plus small insects.",
    conservationStatus: "Least Concern (IUCN).",
    behavior: "Perches with its bill angled upward, since the bill's length makes normal resting awkward.",
    photographyTips: "High-speed flash sync at feeders freezes wingbeats; natural perches give more elegant compositions.",
    whereToSee: "Highland feeder stations, on the Andes & Páramo tour.",
  },
  {
    slug: "vicuna",
    commonName: "Vicuña",
    scientificName: "Vicugna vicugna",
    group: "Mammals",
    photo: media.vicunaChimborazo,
    status: "Migratory / wide-ranging",
    statusNote:
      "A high-Andean camelid native across the Andean altiplano of Peru, Bolivia, Chile and Argentina, reintroduced to Ecuador's Chimborazo reserve — not an Ecuador endemic.",
    distribution: "High Andean grasslands from Ecuador and Peru south to northern Chile and Argentina.",
    habitat: "Páramo and high-altitude grassland, typically above 3,500 m.",
    diet: "Low, tough páramo grasses.",
    conservationStatus: "Least Concern (IUCN), recovered from historic overhunting through conservation programs.",
    behavior: "Lives in small family groups with a dominant male; highly alert, with excellent long-distance vision.",
    photographyTips: "Use a long lens and stay in the vehicle or at distance; herds are easily disturbed by close approach.",
    whereToSee: "Chimborazo Fauna Reserve, on the Andes & Páramo tour.",
  },
];

export const wildlifeGroups = ["Birds", "Mammals", "Amphibians", "Reptiles", "Plants"] as const;
