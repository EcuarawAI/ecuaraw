import { media, type Photo } from "./media";

export type TourCategory =
  | "Nature Tours"
  | "Photography Tours"
  | "Birdwatching"
  | "Wildlife"
  | "Custom Expeditions"
  | "Galápagos";

export type ItineraryDay = {
  day: number;
  title: string;
  description: string;
};

export type Tour = {
  slug: string;
  name: string;
  tagline: string;
  categories: TourCategory[];
  location: string;
  coords?: string;
  elevation?: string;
  duration: string;
  difficulty: "Easy" | "Easy to Moderate" | "Moderate" | "Challenging";
  bestSeason: string;
  groupSize: string;
  photographyLevel: string;
  priceFrom: number;
  hero: Photo;
  gallery: Photo[];
  overview: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  included: string[];
  excluded: string[];
  accommodation: string;
  transportation: string;
  meals: string;
  photographyOpportunities: string[];
  wildlifeExpected: string[];
  responsibleTravel: string;
  guideInfo: string;
};

export const tours: Tour[] = [
  {
    slug: "mindo-cloud-forest",
    name: "Mindo Cloud Forest",
    tagline: "Birds, Orchids & Cloud Forest",
    categories: ["Nature Tours", "Photography Tours", "Birdwatching"],
    location: "Mindo, Pichincha Province",
    coords: "0°02′S 78°46′W",
    elevation: "1,250 m",
    duration: "4 days / 3 nights",
    difficulty: "Easy",
    bestSeason: "Year-round; driest Jun–Sep",
    groupSize: "2–6 travelers",
    photographyLevel: "Beginner to advanced, hide and feeder photography",
    priceFrom: 890,
    hero: media.mindoForest12,
    gallery: [media.cockOfTheRock, media.mindoForest05, media.swordBilledHummingbird, media.mindoHillScene],
    overview:
      "An immersive four-day journey into one of the world's great cloud forests, just ninety minutes from Quito. Mindo's cloud-fed slopes hold an outsized share of Ecuador's bird diversity, and this tour is built around unhurried mornings at hummingbird feeders, quiet forest trails and golden-hour light through the canopy.",
    highlights: [
      "Hummingbird feeder photography with a dozen or more species in a single session",
      "Dawn search for the male Andean cock-of-the-rock lek",
      "Guided walks focused on tanagers, toucans and antpittas",
      "Macro sessions with orchids, epiphytes and cloud-forest butterflies",
      "Small-group pace with flexible stops for photographers",
    ],
    itinerary: [
      { day: 1, title: "Quito to Mindo", description: "Morning departure from Quito along the old Nono–Mindo road, stopping at highland viewpoints. Afternoon arrival and orientation walk near the lodge." },
      { day: 2, title: "Hummingbird feeders & forest trails", description: "Early session at private hummingbird feeders, followed by a mid-morning forest walk for tanagers, toucans and antpittas. Afternoon free for processing images or an optional butterfly farm visit." },
      { day: 3, title: "Cock-of-the-rock lek & waterfalls", description: "Pre-dawn hike to a known lek site for the Andean cock-of-the-rock. Afternoon visit to the Nambillo waterfalls area for landscape and macro photography." },
      { day: 4, title: "Orchids & return to Quito", description: "Morning visit to an orchid reserve, then a relaxed drive back to Quito with a final highland viewpoint stop." },
    ],
    included: [
      "3 nights accommodation in a cloud-forest lodge",
      "All ground transportation from Quito",
      "Private naturalist and photography guide",
      "Entrance fees to reserves and hummingbird feeders",
      "Daily breakfast, lunch and dinner",
    ],
    excluded: [
      "International and domestic flights",
      "Travel insurance",
      "Alcoholic beverages",
      "Personal photography equipment",
      "Gratuities",
    ],
    accommodation: "A locally owned cloud-forest lodge with private cabins bordering the reserve, chosen for direct trail access and low light pollution.",
    transportation: "Private 4x4 vehicle for the group, with roof access for scenic stops along the Nono–Mindo road.",
    meals: "Full board throughout, featuring regional Andean and coastal-influenced cuisine, with vegetarian options available.",
    photographyOpportunities: [
      "Feeder photography with fill-flash and natural-light setups",
      "Lek photography for the Andean cock-of-the-rock at safe, ethical distances",
      "Macro work on orchids and understorey flora",
      "Long-exposure waterfall and forest-stream compositions",
    ],
    wildlifeExpected: [
      "Andean cock-of-the-rock",
      "Booted racket-tail and other hummingbirds",
      "Toucan barbet and plate-billed mountain toucan",
      "Multiple tanager species",
      "Glasswing and morpho butterflies",
    ],
    responsibleTravel:
      "This tour partners with community-run reserves and feeder stations, keeping group sizes small and following ethical distances at wildlife leks and nests.",
    guideInfo:
      "Led by ECUARAW naturalist guides with regional certification and years of field experience in the Chocó–Andean cloud forest, trained in photography-group logistics.",
  },
  {
    slug: "andes-paramo",
    name: "Ecuadorian Andes & Páramo",
    tagline: "Highlands, Volcanoes & Mountain Wildlife",
    categories: ["Nature Tours", "Photography Tours", "Wildlife"],
    location: "Cotopaxi & Chimborazo, Central Highlands",
    coords: "0°40′S 78°26′W",
    elevation: "3,800 m avg.",
    duration: "5 days / 4 nights",
    difficulty: "Moderate",
    bestSeason: "Jun–Sep for clearest volcano views",
    groupSize: "2–6 travelers",
    photographyLevel: "Intermediate, landscape and high-altitude wildlife",
    priceFrom: 1150,
    hero: media.chimborazoBanner,
    gallery: [media.cotopaxi, media.vicunaChimborazo, media.cotopaxiAlt, media.chimborazoSanJuan],
    overview:
      "A five-day traverse of Ecuador's volcanic spine, from the glaciated cone of Cotopaxi to the páramo grasslands beneath Chimborazo, the point on Earth's surface farthest from its center. Built for landscape photographers and those drawn to high-altitude wildlife and dramatic light.",
    highlights: [
      "Sunrise photography of Cotopaxi from Limpiopungo lagoon",
      "Vicuña herds on the Chimborazo reserve páramo",
      "High-Andean hummingbirds at specialist feeding stations",
      "Volcanic landscapes, crater lakes and páramo light",
      "Visits to small highland communities and markets",
    ],
    itinerary: [
      { day: 1, title: "Quito to Cotopaxi National Park", description: "Drive south to Cotopaxi National Park with an afternoon session at Limpiopungo lagoon for landscape and waterfowl photography." },
      { day: 2, title: "Cotopaxi sunrise & highland hummingbirds", description: "Pre-dawn shoot for Cotopaxi's sunrise light, followed by an afternoon at a highland hummingbird lodge with more than a dozen high-altitude species." },
      { day: 3, title: "Quilotoa route", description: "Scenic drive along the Quilotoa loop, stopping at indigenous markets and highland viewpoints." },
      { day: 4, title: "Chimborazo páramo", description: "Full day on the Chimborazo Fauna Reserve, tracking vicuña herds and photographing the páramo landscape beneath Ecuador's highest peak." },
      { day: 5, title: "Return to Quito", description: "Final highland stops before returning to Quito by early evening." },
    ],
    included: [
      "4 nights accommodation, mixed haciendas and highland lodges",
      "Private 4x4 transportation throughout",
      "Naturalist and photography guide",
      "All park and reserve entrance fees",
      "Daily breakfast, lunch and dinner",
    ],
    excluded: [
      "International and domestic flights",
      "Travel insurance",
      "Alcoholic beverages",
      "Optional horseback excursions",
      "Gratuities",
    ],
    accommodation: "Traditional Andean haciendas and a highland ecolodge, chosen for proximity to shoot locations and warm, high-altitude-appropriate rooms.",
    transportation: "Private 4x4 vehicle, essential for unpaved páramo tracks and pre-dawn departures.",
    meals: "Full board with hearty highland cuisine suited to altitude and early starts.",
    photographyOpportunities: [
      "Wide-angle volcano and páramo landscapes",
      "Wildlife photography of vicuña at a respectful distance",
      "High-altitude hummingbird feeder photography",
      "Golden-hour and blue-hour highland light",
    ],
    wildlifeExpected: [
      "Vicuña",
      "Andean gull and highland waterfowl",
      "Giant hummingbird and other high-Andean hummingbirds",
      "Andean fox (occasional sighting)",
      "Possible condor sighting near cliff faces",
    ],
    responsibleTravel:
      "This route supports community-run haciendas and market visits, and follows reserve guidelines that keep vehicles and groups at a safe distance from grazing vicuña herds.",
    guideInfo:
      "Guided by ECUARAW highland specialists experienced in altitude logistics, weather-window planning and Andean natural history interpretation.",
  },
  {
    slug: "ecuador-amazon",
    name: "Ecuadorian Amazon",
    tagline: "Amazon Rainforest Wildlife Expedition",
    categories: ["Nature Tours", "Photography Tours", "Wildlife", "Custom Expeditions"],
    location: "Napo River & Yasuní Region",
    coords: "0°59′S 77°49′W",
    elevation: "510 m",
    duration: "6 days / 5 nights",
    difficulty: "Moderate",
    bestSeason: "Year-round; driest Dec–Feb",
    groupSize: "2–8 travelers",
    photographyLevel: "Intermediate to advanced, low-light rainforest work",
    priceFrom: 1690,
    hero: media.amazonBanner,
    gallery: [media.amazonTena, media.amazonBanner],
    overview:
      "A six-day expedition into the Napo River basin bordering Yasuní, one of the most biodiverse places measured on Earth. Days are built around river travel, canopy towers and guided night walks, balancing wildlife photography with genuine immersion in primary rainforest.",
    highlights: [
      "Canopy tower sessions for macaws, toucans and mixed-species flocks",
      "Napo River boat travel with river dolphin and caiman spotting",
      "Guided night walks for amphibians, reptiles and invertebrates",
      "Visits to a clay lick with wild parrots and parakeets",
      "Cultural exchange with a local indigenous community",
    ],
    itinerary: [
      { day: 1, title: "Quito to Napo River", description: "Flight or drive to the gateway town, then motorized canoe transfer to the lodge along the Napo River." },
      { day: 2, title: "Canopy tower & mixed flocks", description: "Dawn session on a canopy tower for macaws and toucans, afternoon forest trail focused on understorey birds and primates." },
      { day: 3, title: "Clay lick & river dolphins", description: "Early departure to a parrot clay lick, afternoon boat excursion scouting for pink river dolphins and caiman." },
      { day: 4, title: "Night walk & lagoon", description: "Daytime lagoon paddle for hoatzins and herons, guided night walk for frogs, snakes and insects." },
      { day: 5, title: "Community visit & forest trails", description: "Morning visit to a local indigenous community, afternoon forest walk focused on macro subjects and plant diversity." },
      { day: 6, title: "Return journey", description: "Morning transfer back along the river and on to Quito." },
    ],
    included: [
      "5 nights at a rainforest lodge",
      "All river and ground transportation",
      "Bilingual naturalist guide plus local indigenous guide",
      "All park and community-area entrance fees",
      "Daily breakfast, lunch and dinner",
    ],
    excluded: [
      "International and domestic flights",
      "Travel insurance",
      "Rubber boots (available for rent at the lodge)",
      "Alcoholic beverages",
      "Gratuities",
    ],
    accommodation: "A community-linked rainforest lodge with screened rooms, chosen for its canopy tower and proximity to primary forest trails.",
    transportation: "Motorized canoe along the Napo River, with forest trails covered on foot.",
    meals: "Full board, with fresh Amazonian ingredients and vegetarian options on request.",
    photographyOpportunities: [
      "Canopy-level bird photography from a stable tower platform",
      "Low-light and flash technique for night-walk subjects",
      "River and reflection landscapes at dawn",
      "Documentary-style cultural photography, with community consent",
    ],
    wildlifeExpected: [
      "Scarlet and blue-and-yellow macaws",
      "Squirrel and capuchin monkeys",
      "Pink river dolphin (Amazon river dolphin)",
      "Caiman species",
      "Wide diversity of frogs, insects and reptiles on night walks",
    ],
    responsibleTravel:
      "This expedition is run in partnership with a local indigenous community, with a share of proceeds supporting the community and forest conservation. Wildlife is observed without baiting or handling.",
    guideInfo:
      "Paired guiding model: an ECUARAW bilingual naturalist alongside a community-based local guide with generations of forest knowledge.",
  },
  {
    slug: "dry-forest",
    name: "Pacific Dry Forest",
    tagline: "Pacific Dry Forest Biodiversity",
    categories: ["Nature Tours", "Photography Tours", "Birdwatching", "Wildlife"],
    location: "Cerro Blanco & Tumbesian Region, Guayas",
    coords: "2°10′S 80°09′W",
    elevation: "50–540 m",
    duration: "3 days / 2 nights",
    difficulty: "Easy",
    bestSeason: "Jun–Dec, dry season",
    groupSize: "2–6 travelers",
    photographyLevel: "Beginner to intermediate",
    priceFrom: 690,
    hero: media.dryForestTumbes,
    gallery: [media.dryForestTumbesino, media.dryForestTumbes],
    overview:
      "A short, focused trip into Ecuador's Pacific dry forest, a seasonal ecosystem that turns from dust-dry to briefly green with the rains. It shelters range-restricted Tumbesian birds and reptiles found in few other places, and offers a striking visual contrast to Ecuador's wetter regions.",
    highlights: [
      "Tumbesian specialty birds in low, open dry-forest canopy",
      "Reptile spotting along dry riverbeds and rocky outcrops",
      "Golden, high-contrast light characteristic of dry-forest photography",
      "Short, easy trails suited to relaxed-paced groups",
    ],
    itinerary: [
      { day: 1, title: "Guayaquil to Cerro Blanco", description: "Short transfer from Guayaquil, afternoon orientation walk into the dry forest reserve." },
      { day: 2, title: "Full day birding & photography", description: "Early start for Tumbesian specialty birds, midday break during peak heat, late-afternoon session for light and reptile activity." },
      { day: 3, title: "Final walk & departure", description: "Sunrise walk for remaining target species, then transfer back to Guayaquil." },
    ],
    included: [
      "2 nights accommodation near the reserve",
      "All ground transportation from Guayaquil",
      "Local naturalist guide",
      "Reserve entrance fees",
      "Daily breakfast, lunch and dinner",
    ],
    excluded: [
      "International and domestic flights",
      "Travel insurance",
      "Alcoholic beverages",
      "Gratuities",
    ],
    accommodation: "A simple, comfortable lodge bordering the dry forest reserve.",
    transportation: "Private vehicle from Guayaquil, with all forest travel on foot.",
    meals: "Full board with coastal Ecuadorian cuisine.",
    photographyOpportunities: [
      "High-contrast dry-forest light, especially at golden hour",
      "Perched-bird photography in relatively open canopy",
      "Reptile and invertebrate macro work",
    ],
    wildlifeExpected: [
      "Ecuadorian trogon and other Tumbesian specialties",
      "Pacific parrotlet",
      "Iguanas and other dry-forest reptiles",
      "Howler monkey troops (seasonal)",
    ],
    responsibleTravel:
      "Cerro Blanco is a community and NGO-managed protected area; your visit directly supports dry-forest conservation and reforestation efforts in one of Ecuador's most threatened ecosystems.",
    guideInfo:
      "Local guides trained in Tumbesian bird identification and dry-forest ecology, with deep knowledge of seasonal wildlife movement.",
  },
  {
    slug: "galapagos",
    name: "Galápagos Islands",
    tagline: "Evolution, Wildlife & Photography",
    categories: ["Galápagos", "Photography Tours", "Wildlife", "Nature Tours"],
    location: "Galápagos Archipelago",
    coords: "0°44′S 90°19′W",
    elevation: "Sea level",
    duration: "7 days / 6 nights",
    difficulty: "Easy to Moderate",
    bestSeason: "Year-round; each season favors different species",
    groupSize: "2–10 travelers",
    photographyLevel: "All levels, close-range wildlife photography",
    priceFrom: 3450,
    hero: media.blueFootedBoobySantaCruz,
    gallery: [media.bartolomePinnacle, media.marineIguanaTortuga, media.blueFootedBoobyRWD1, media.giantTortoise, media.frigatebirdGenovesa],
    overview:
      "A seven-day photography-focused itinerary across the Galápagos, combining a small-group island-hopping route with dedicated time on Santa Cruz's highlands for giant tortoises. Galápagos wildlife shows little fear of humans, making this one of the world's most rewarding destinations for close-range, ethical wildlife photography.",
    highlights: [
      "Blue-footed booby courtship display photography",
      "Giant tortoises in the wild Santa Cruz highlands",
      "Marine iguanas and Sally Lightfoot crabs on lava shoreline",
      "Snorkeling with sea lions, rays and reef fish",
      "Landscape photography at Bartolomé's Pinnacle Rock",
    ],
    itinerary: [
      { day: 1, title: "Arrival on Baltra / Santa Cruz", description: "Flight to Baltra, transfer to Santa Cruz, afternoon orientation at a coastal reserve." },
      { day: 2, title: "Santa Cruz highlands", description: "Full day in the Santa Cruz highlands photographing wild giant tortoises and highland vegetation zones." },
      { day: 3, title: "North Seymour or Plaza Sur", description: "Day excursion by boat to a nearby islet for frigatebirds, blue-footed boobies and land iguanas." },
      { day: 4, title: "Bartolomé Island", description: "Early boat departure to Bartolomé for Pinnacle Rock landscape photography and an afternoon snorkel with Galápagos penguins possible." },
      { day: 5, title: "Española or Genovesa (seasonal)", description: "Full-day excursion to one of the outer islands, seasonal booby and frigatebird colonies, snorkeling with sea lions." },
      { day: 6, title: "Tortuga Bay & San Cristóbal transfer", description: "Morning walk at Tortuga Bay for marine iguanas and shoreline birds, afternoon inter-island transfer." },
      { day: 7, title: "Departure", description: "Final morning at leisure before flying back to the mainland." },
    ],
    included: [
      "6 nights accommodation, land-based itinerary",
      "All inter-island boat and ground transportation",
      "Naturalist guide certified by the Galápagos National Park",
      "National park entrance fee",
      "Daily breakfast, lunch and dinner",
      "Snorkeling equipment",
    ],
    excluded: [
      "International flights to Ecuador",
      "Domestic flights to Galápagos",
      "Galápagos transit control card",
      "Travel insurance",
      "Alcoholic beverages and gratuities",
    ],
    accommodation: "Locally owned boutique hotels on Santa Cruz and San Cristóbal, chosen for proximity to key wildlife sites.",
    transportation: "Small-group tourist boats for inter-island excursions, private vehicles on land.",
    meals: "Full board throughout, with fresh seafood and Ecuadorian coastal cuisine.",
    photographyOpportunities: [
      "Close-range wildlife photography, often within a few meters under park guidelines",
      "Underwater and snorkel photography opportunities",
      "Volcanic landscape photography at Bartolomé and Sullivan Bay",
      "Behavioral photography during courtship and nesting season",
    ],
    wildlifeExpected: [
      "Galápagos giant tortoise",
      "Blue-footed booby and, seasonally, Nazca booby",
      "Marine iguana",
      "Galápagos sea lion",
      "Magnificent and great frigatebirds",
      "Galápagos penguin (seasonal, weather-dependent)",
    ],
    responsibleTravel:
      "This itinerary follows Galápagos National Park visitor rules strictly: marked trails only, minimum wildlife distances, no feeding or touching, and licensed naturalist guides on every excursion, supporting the park's conservation fee structure.",
    guideInfo:
      "Led by naturalist guides certified by the Galápagos National Park Directorate, trained specifically in visitor-impact management and wildlife photography etiquette.",
  },
  {
    slug: "ecuadorian-endemics",
    name: "Ecuadorian Endemics",
    tagline: "Photograph Ecuador's Unique Wildlife",
    categories: ["Custom Expeditions", "Photography Tours", "Birdwatching", "Wildlife"],
    location: "Multi-region: Andes, Chocó & Galápagos options",
    duration: "8–12 days (customized)",
    difficulty: "Moderate",
    bestSeason: "Depends on itinerary; advised at booking",
    groupSize: "1–4 travelers (private/custom)",
    photographyLevel: "Advanced, target-species focused",
    priceFrom: 2450,
    hero: media.cockOfTheRock,
    gallery: [media.swordBilledHummingbird, media.marineIguanaSantaCruz, media.cockOfTheRock],
    overview:
      "A custom-built expedition for photographers and birders chasing Ecuador's endemic and range-restricted species. Because true national endemics are concentrated in specific micro-regions and elevations, this itinerary is tailored per group around confirmed target species, season and mobility. Every route is planned with a specialist guide before booking.",
    highlights: [
      "Itinerary custom-built around your target species list",
      "Access to specialist reserves and private feeding stations",
      "Small, private groups for patient, targeted fieldcraft",
      "Option to combine mainland endemics with Galápagos endemics",
      "Pre-trip planning call with a specialist guide",
    ],
    itinerary: [
      { day: 1, title: "Planning consultation", description: "Before travel, a specialist guide reviews your target list and builds a day-by-day route across the regions most likely to deliver it." },
      { day: 2, title: "Itinerary begins", description: "Exact routing depends on targets, but typically opens in the Andes or Chocó cloud forest for elevation-restricted specialties." },
      { day: 3, title: "Regional transfer", description: "Travel to a second focus region, such as the dry forest or Amazon foothills, depending on your target list." },
      { day: 4, title: "Optional Galápagos extension", description: "Groups may add a Galápagos segment to pursue island endemics such as marine iguana and flightless cormorant." },
    ],
    included: [
      "Private planning consultation",
      "Accommodation matched to itinerary regions",
      "Private specialist guide throughout",
      "All relevant park and reserve fees",
      "Ground transportation for the full route",
      "Daily breakfast, lunch and dinner",
    ],
    excluded: [
      "International and domestic flights",
      "Travel insurance",
      "Alcoholic beverages",
      "Optional Galápagos extension costs (quoted separately)",
      "Gratuities",
    ],
    accommodation: "Selected per itinerary from ECUARAW's regional lodge partners, prioritizing proximity to target-species habitat.",
    transportation: "Private vehicle and, where an itinerary includes Galápagos, inter-island transport as required.",
    meals: "Full board throughout, adapted to remote-lodge locations where needed.",
    photographyOpportunities: [
      "Targeted hide and feeder setups for specific species",
      "Extended time-in-field for difficult or shy species",
      "Combination of forest, highland and island photography styles",
    ],
    wildlifeExpected: [
      "Andean cock-of-the-rock and other Chocó-Andean specialties",
      "Regionally range-restricted hummingbirds",
      "Galápagos-endemic reptiles and birds, on itineraries that include the islands",
      "Exact species vary by itinerary and are confirmed during planning",
    ],
    responsibleTravel:
      "Custom itineraries are built to minimize repeat pressure on sensitive sites, using licensed guides and reserves with established conservation programs.",
    guideInfo:
      "Matched to a senior ECUARAW guide with specific expertise in your target regions and species group.",
  },
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find((t) => t.slug === slug);
}

export const tourCategories: TourCategory[] = [
  "Nature Tours",
  "Photography Tours",
  "Birdwatching",
  "Wildlife",
  "Custom Expeditions",
  "Galápagos",
];

// Note on species claims: only the Galápagos marine iguana is presented as an
// Ecuador endemic on this site. Elsewhere "endemic" and "range-restricted"
// are used carefully and are not interchangeable — see /wildlife.
