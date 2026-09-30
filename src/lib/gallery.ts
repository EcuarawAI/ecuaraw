import { media } from "./media";

export type GalleryCategory =
  | "Birds"
  | "Mammals"
  | "Reptiles"
  | "Amphibians"
  | "Plants"
  | "Landscapes"
  | "Amazon"
  | "Andes"
  | "Cloud Forest"
  | "Dry Forest"
  | "Galápagos";

export type GalleryImage = {
  id: string;
  photo: (typeof media)[keyof typeof media];
  species?: string;
  location: string;
  region: string;
  categories: GalleryCategory[];
};

export const galleryImages: GalleryImage[] = [
  {
    id: "sword-billed-hummingbird",
    photo: media.swordBilledHummingbird,
    species: "Ensifera ensifera — sword-billed hummingbird",
    location: "Andean highlands",
    region: "Andes",
    categories: ["Birds", "Andes"],
  },
  {
    id: "cock-of-the-rock",
    photo: media.cockOfTheRock,
    species: "Rupicola peruvianus — Andean cock-of-the-rock",
    location: "Mindo, Pichincha",
    region: "Cloud Forest",
    categories: ["Birds", "Cloud Forest"],
  },
  {
    id: "blue-footed-booby",
    photo: media.blueFootedBoobyRWD1,
    species: "Sula nebouxii — blue-footed booby",
    location: "Galápagos Islands",
    region: "Galápagos",
    categories: ["Birds", "Galápagos"],
  },
  {
    id: "frigatebird",
    photo: media.frigatebirdGenovesa,
    species: "Fregata minor — great frigatebird",
    location: "Genovesa Island, Galápagos",
    region: "Galápagos",
    categories: ["Birds", "Galápagos"],
  },
  {
    id: "vicuna",
    photo: media.vicunaChimborazo,
    species: "Vicugna vicugna — vicuña",
    location: "Chimborazo Fauna Reserve",
    region: "Andes",
    categories: ["Mammals", "Andes"],
  },
  {
    id: "marine-iguana-tortuga",
    photo: media.marineIguanaTortuga,
    species: "Amblyrhynchus cristatus — marine iguana",
    location: "Tortuga Bay, Santa Cruz",
    region: "Galápagos",
    categories: ["Reptiles", "Galápagos"],
  },
  {
    id: "giant-tortoise",
    photo: media.giantTortoise,
    species: "Chelonoidis spp. — Galápagos giant tortoise",
    location: "Santa Cruz highlands, Galápagos",
    region: "Galápagos",
    categories: ["Reptiles", "Galápagos"],
  },
  {
    id: "mindo-canopy",
    photo: media.mindoForest05,
    location: "Mindo cloud forest",
    region: "Cloud Forest",
    categories: ["Plants", "Cloud Forest", "Landscapes"],
  },
  {
    id: "cotopaxi",
    photo: media.cotopaxi,
    location: "Cotopaxi National Park",
    region: "Andes",
    categories: ["Landscapes", "Andes"],
  },
  {
    id: "chimborazo",
    photo: media.chimborazoSanJuan,
    location: "Chimborazo, central highlands",
    region: "Andes",
    categories: ["Landscapes", "Andes"],
  },
  {
    id: "amazon-tena",
    photo: media.amazonTena,
    location: "Amazon rainforest, Tena",
    region: "Amazon",
    categories: ["Landscapes", "Amazon", "Plants"],
  },
  {
    id: "amazon-banner",
    photo: media.amazonBanner,
    location: "Ecuadorian Amazon basin",
    region: "Amazon",
    categories: ["Landscapes", "Amazon"],
  },
  {
    id: "cotopaxi-paramo",
    photo: media.cotopaxiAlt,
    location: "Cotopaxi páramo",
    region: "Andes",
    categories: ["Landscapes", "Andes"],
  },
  {
    id: "mindo-canopy-2",
    photo: media.mindoForest12,
    location: "Mindo cloud forest",
    region: "Cloud Forest",
    categories: ["Landscapes", "Cloud Forest"],
  },
  {
    id: "dry-forest",
    photo: media.dryForestTumbesino,
    location: "Cerro Blanco, Guayas",
    region: "Dry Forest",
    categories: ["Landscapes", "Dry Forest"],
  },
  {
    id: "bartolome",
    photo: media.bartolomePinnacle,
    location: "Bartolomé Island, Galápagos",
    region: "Galápagos",
    categories: ["Landscapes", "Galápagos"],
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Birds",
  "Mammals",
  "Reptiles",
  "Amphibians",
  "Plants",
  "Landscapes",
  "Amazon",
  "Andes",
  "Cloud Forest",
  "Dry Forest",
  "Galápagos",
];
