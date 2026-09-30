// All photography is sourced from Wikimedia Commons (freely licensed, real
// Ecuadorian wildlife and landscapes) and credited to the original
// photographer. These are resolved, stable thumbnail/original CDN URLs
// (upload.wikimedia.org / thumb.wikimedia.org) rather than the
// Special:FilePath redirect, so pages load without an extra redirect hop
// and without risk of Wikimedia's rate limiting on that endpoint.

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
};

function photo(src: string, filename: string, alt: string, credit: string): Photo {
  return {
    src,
    alt,
    credit,
    creditUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(
      filename
    )}`,
  };
}

export const media = {
  cotopaxi: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Volc%C3%A1n_Cotopaxi%2C_Ecuador.JPG/1920px-Volc%C3%A1n_Cotopaxi%2C_Ecuador.JPG",
    "Volcán Cotopaxi, Ecuador.JPG",
    "Snow-capped Cotopaxi volcano rising above the Andean páramo, Ecuador",
    "Diego Delso"
  ),
  cotopaxiAlt: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Cotopaxi_02.jpg/1920px-Cotopaxi_02.jpg",
    "Cotopaxi 02.jpg",
    "Cotopaxi volcano and highland grassland in the Ecuadorian Andes",
    "Wikimedia Commons contributor"
  ),
  chimborazoBanner: photo(
    "https://upload.wikimedia.org/wikipedia/commons/4/41/Chimborazo%2C_aspecto_suroeste%2C_Ecuador_%2826354503712%29_%28banner%29.jpg",
    "Chimborazo, aspecto suroeste, Ecuador (26354503712) (banner).jpg",
    "Chimborazo, Ecuador's highest peak, seen across the páramo",
    "Diego Delso"
  ),
  chimborazoSanJuan: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Chimborazo_desde_San_Juan.jpg/1920px-Chimborazo_desde_San_Juan.jpg",
    "Chimborazo desde San Juan.jpg",
    "Chimborazo volcano viewed from San Juan, Ecuadorian highlands",
    "Wikimedia Commons contributor"
  ),
  vicunaChimborazo: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Vicu%C3%B1a_-_Chimborazo%2C_Ecuador.jpg/1920px-Vicu%C3%B1a_-_Chimborazo%2C_Ecuador.jpg",
    "Vicuña - Chimborazo, Ecuador.jpg",
    "Vicuña grazing on the high-altitude páramo below Chimborazo",
    "Wikimedia Commons contributor"
  ),
  mindoForest12: photo(
    "https://upload.wikimedia.org/wikipedia/commons/9/9e/Mindo-Cloud-Forest-12.jpg",
    "Mindo-Cloud-Forest-12.jpg",
    "Misty cloud forest canopy near Mindo, Ecuador",
    "Ayacop"
  ),
  mindoForest05: photo(
    "https://upload.wikimedia.org/wikipedia/commons/6/67/Mindo-Cloud-Forest-05.jpg",
    "Mindo-Cloud-Forest-05.jpg",
    "Layers of cloud forest vegetation near Mindo, Ecuador",
    "Ayacop"
  ),
  mindoHillScene: photo(
    "https://upload.wikimedia.org/wikipedia/commons/4/45/Ecuador_Mindo_Hill_Scene.jpg",
    "Ecuador Mindo Hill Scene.jpg",
    "Rolling cloud forest hills around Mindo, Ecuador",
    "Wikimedia Commons contributor"
  ),
  cockOfTheRock: photo(
    "https://upload.wikimedia.org/wikipedia/commons/9/91/Andean_Cock-of-the-rock%2C_Mindo%2C_Ecuador.jpg",
    "Andean Cock-of-the-rock, Mindo, Ecuador.jpg",
    "Male Andean cock-of-the-rock (Rupicola peruvianus) near Mindo, Ecuador",
    "Wikimedia Commons contributor"
  ),
  swordBilledHummingbird: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1d/Sword-billed_Hummingbird_%28Ensifera_ensifera%29_%2810831881775%29.jpg/1920px-Sword-billed_Hummingbird_%28Ensifera_ensifera%29_%2810831881775%29.jpg",
    "Sword-billed Hummingbird (Ensifera ensifera) (10831881775).jpg",
    "Sword-billed hummingbird (Ensifera ensifera), Ecuadorian Andes",
    "Wikimedia Commons contributor"
  ),
  swordBilledGuango: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Sword-billed_hummingbird_%28male%29_at_Guango_Lodge%2C_Ecuador_%2821310837273%29.jpg/1920px-Sword-billed_hummingbird_%28male%29_at_Guango_Lodge%2C_Ecuador_%2821310837273%29.jpg",
    "Sword-billed hummingbird (male) at Guango Lodge, Ecuador (21310837273).jpg",
    "Sword-billed hummingbird at Guango Lodge, Ecuadorian Andes",
    "Wikimedia Commons contributor"
  ),
  amazonTena: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Amazon_Rainforest_in_Tena%2C_Ecuador.jpg/1920px-Amazon_Rainforest_in_Tena%2C_Ecuador.jpg",
    "Amazon Rainforest in Tena, Ecuador.jpg",
    "Amazon rainforest canopy near Tena, Ecuador",
    "Wikimedia Commons contributor"
  ),
  amazonBanner: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Amazon_Ecuador_WV_Banner.jpg/1920px-Amazon_Ecuador_WV_Banner.jpg",
    "Amazon Ecuador WV Banner.jpg",
    "Amazon basin rainforest, Ecuadorian Oriente",
    "Wikimedia Commons contributor"
  ),
  dryForestTumbesino: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/92/Bosque_Seco_Ecuatorial_Tumbesino.jpg/1920px-Bosque_Seco_Ecuatorial_Tumbesino.jpg",
    "Bosque Seco Ecuatorial Tumbesino.jpg",
    "Tropical dry forest of the Ecuadorian Pacific coast",
    "Wikimedia Commons contributor"
  ),
  dryForestTumbes: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0a/Bosque_Seco_Ecuatorial_Tumbes.jpg/1920px-Bosque_Seco_Ecuatorial_Tumbes.jpg",
    "Bosque Seco Ecuatorial Tumbes.jpg",
    "Seasonal dry forest of the Tumbesian region, Ecuador",
    "Wikimedia Commons contributor"
  ),
  bartolomePinnacle: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Bartolom%C3%A9_Island_Pinnacle_Rock.jpg/1920px-Bartolom%C3%A9_Island_Pinnacle_Rock.jpg",
    "Bartolomé Island Pinnacle Rock.jpg",
    "Pinnacle Rock on Bartolomé Island, Galápagos",
    "Wikimedia Commons contributor"
  ),
  marineIguanaSantaCruz: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/The_marine_iguana_%28Amblyrhynchus_cristatus%29_Gal%C3%A1pagos_Islands_Santa_Cruz.JPG/1920px-The_marine_iguana_%28Amblyrhynchus_cristatus%29_Gal%C3%A1pagos_Islands_Santa_Cruz.JPG",
    "The marine iguana (Amblyrhynchus cristatus) Galápagos Islands Santa Cruz.JPG",
    "Marine iguana (Amblyrhynchus cristatus), Santa Cruz Island, Galápagos",
    "Wikimedia Commons contributor"
  ),
  marineIguanaTortuga: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Marine_Iguana_%28Amblyrhynchus_cristatus%29_on_the_beach_at_Tortuga_Bay_-_Galapagos_-_Santa_Cruz_Island.JPG/1920px-Marine_Iguana_%28Amblyrhynchus_cristatus%29_on_the_beach_at_Tortuga_Bay_-_Galapagos_-_Santa_Cruz_Island.JPG",
    "Marine Iguana (Amblyrhynchus cristatus) on the beach at Tortuga Bay - Galapagos - Santa Cruz Island.JPG",
    "Marine iguana on the beach at Tortuga Bay, Galápagos",
    "Wikimedia Commons contributor"
  ),
  blueFootedBoobyRWD1: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Blue-footed_Booby_Galapagos_RWD1.jpg/1920px-Blue-footed_Booby_Galapagos_RWD1.jpg",
    "Blue-footed Booby Galapagos RWD1.jpg",
    "Blue-footed booby (Sula nebouxii), Galápagos Islands",
    "Wikimedia Commons contributor"
  ),
  blueFootedBoobySantaCruz: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Blue-footed_booby_%28Sula_nebouxii%29_on_Santa_Cruz%2C_Gal%C3%A1pagos_Islands.JPG/1920px-Blue-footed_booby_%28Sula_nebouxii%29_on_Santa_Cruz%2C_Gal%C3%A1pagos_Islands.JPG",
    "Blue-footed booby (Sula nebouxii) on Santa Cruz, Galápagos Islands.JPG",
    "Blue-footed booby on Santa Cruz Island, Galápagos",
    "Wikimedia Commons contributor"
  ),
  giantTortoise: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/20180809-Gal%C3%A1pagos_giant_tortoise_eating_leaves_%289960%29.jpg/1920px-20180809-Gal%C3%A1pagos_giant_tortoise_eating_leaves_%289960%29.jpg",
    "20180809-Galápagos giant tortoise eating leaves (9960).jpg",
    "Galápagos giant tortoise (Chelonoidis spp.) feeding",
    "Wikimedia Commons contributor"
  ),
  frigatebirdGenovesa: photo(
    "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Great_Frigatebird_at_Genovesa.JPG/1920px-Great_Frigatebird_at_Genovesa.JPG",
    "Great Frigatebird at Genovesa.JPG",
    "Great frigatebird displaying at Genovesa Island, Galápagos",
    "Wikimedia Commons contributor"
  ),
} as const;

export type MediaKey = keyof typeof media;
