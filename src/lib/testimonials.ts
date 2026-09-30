export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  location: string;
  tour: string;
};

// CMS-editable: add, remove or reorder testimonials here.
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Four days in Mindo and I came home with more usable hummingbird images than three prior trips to Central America combined. The guide knew exactly which perch each species favored.",
    name: "Laura M.",
    location: "Netherlands",
    tour: "Mindo Cloud Forest",
  },
  {
    id: "t2",
    quote:
      "What stood out wasn't just the wildlife, it was the pace. Nobody rushed us off a sighting. The Chimborazo vicuña morning alone was worth the trip.",
    name: "David K.",
    location: "United States",
    tour: "Andes & Páramo",
  },
  {
    id: "t3",
    quote:
      "Our guide's knowledge of the Napo River ecosystem was extraordinary — he could call out a bird from a silhouette in bad light. Genuinely humbling few days in the rainforest.",
    name: "Sofía R.",
    location: "Spain",
    tour: "Ecuadorian Amazon",
  },
  {
    id: "t4",
    quote:
      "Galápagos exceeded what I expected from the photos I'd seen a hundred times before. Being at eye level with a marine iguana, with a licensed guide making sure we never crossed a line, changed how I think about wildlife travel.",
    name: "Tom H.",
    location: "United Kingdom",
    tour: "Galápagos Islands",
  },
];
