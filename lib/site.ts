export const site = {
  name: "Goldkrest Group",
  email: "info@goldkrest.group",
  phoneDisplay: "07394 633885",
  phoneHref: "tel:+447394633885",
  whatsappHref: "https://wa.me/447394633885",
};

export const navLinks = [
  { href: "/", label: "Homepage" },
  { href: "/brickwork", label: "Brickwork" },
  { href: "/garden", label: "Garden" },
  { href: "/pressure-washing", label: "Pressure Washing" },
  { href: "/contact", label: "Contact Us" },
];

export type GalleryImage = { src: string; alt: string };

export type Service = {
  slug: string;
  href: string;
  title: string;
  eyebrow: string;
  summary: string;
  heroImage: GalleryImage;
  intro: string[];
  offerings: { title: string; text: string }[];
  gallery: GalleryImage[];
};

// Placeholder photos — swap each `src` for real project photos
// (e.g. put files in /public/images and use "/images/your-photo.jpg").
const placeholder = (seed: string, w = 1200, h = 900) =>
  `https://picsum.photos/seed/goldkrest-${seed}/${w}/${h}`;

export const services: Service[] = [
  {
    slug: "brickwork",
    href: "/brickwork",
    title: "Brickwork",
    eyebrow: "Build & Repair",
    summary:
      "Garden walls, extensions, repointing and repairs — solid, tidy brickwork built to last.",
    heroImage: { src: placeholder("brick-hero", 1600, 1000), alt: "Brickwork project" },
    intro: [
      "Good brickwork is the backbone of any property. Whether you need a new garden wall, a small extension or tired mortar brought back to life, we take care to match materials, keep lines straight and leave the site clean.",
      "Every job starts with a clear quote and an honest conversation about what your project needs.",
    ],
    offerings: [
      {
        title: "Walls & boundaries",
        text: "Garden walls, retaining walls, piers and boundary walls built to suit your property.",
      },
      {
        title: "Extensions & new builds",
        text: "Brick and blockwork for extensions, outbuildings and structural projects.",
      },
      {
        title: "Repointing",
        text: "Raking out and repointing worn or crumbling mortar to protect and refresh your brickwork.",
      },
      {
        title: "Repairs & alterations",
        text: "Replacing damaged bricks, rebuilding sections and making alterations that blend in.",
      },
    ],
    gallery: [
      { src: placeholder("brick-1"), alt: "Brick wall" },
      { src: placeholder("brick-2"), alt: "Repointed brickwork" },
      { src: placeholder("brick-3"), alt: "Garden wall" },
      { src: placeholder("brick-4"), alt: "Brick extension" },
      { src: placeholder("brick-5"), alt: "Brick pillars" },
      { src: placeholder("brick-6"), alt: "Brickwork detail" },
    ],
  },
  {
    slug: "garden",
    href: "/garden",
    title: "Landscaping & Garden Maintenance",
    eyebrow: "Garden",
    summary:
      "From complete garden transformations to regular upkeep — outdoor spaces that look great all year.",
    heroImage: { src: placeholder("garden-hero", 1600, 1000), alt: "Landscaped garden" },
    intro: [
      "Your garden should be a space you enjoy, not a chore. We design and build new outdoor spaces and keep existing gardens neat, healthy and under control.",
      "Choose a one-off project or regular maintenance visits — whatever suits your garden and your schedule.",
    ],
    offerings: [
      {
        title: "Landscaping",
        text: "Patios, paths, planting, turfing and layout changes to transform your outdoor space.",
      },
      {
        title: "Garden maintenance",
        text: "Lawn mowing, edging, weeding and general tidying to keep your garden looking its best.",
      },
      {
        title: "Hedges & shrubs",
        text: "Hedge trimming, shrub pruning and cutting back overgrown areas.",
      },
      {
        title: "Garden clearances",
        text: "Clearing overgrown or neglected gardens and removing green waste.",
      },
    ],
    gallery: [
      { src: placeholder("garden-1"), alt: "Landscaped garden" },
      { src: placeholder("garden-2"), alt: "Freshly mown lawn" },
      { src: placeholder("garden-3"), alt: "Trimmed hedges" },
      { src: placeholder("garden-4"), alt: "Garden patio" },
      { src: placeholder("garden-5"), alt: "Planted borders" },
      { src: placeholder("garden-6"), alt: "Garden path" },
    ],
  },
  {
    slug: "pressure-washing",
    href: "/pressure-washing",
    title: "Pressure Washing",
    eyebrow: "Clean & Restore",
    summary:
      "Driveways, patios, decking and more — deep cleaned to remove dirt, moss and staining.",
    heroImage: { src: placeholder("wash-hero", 1600, 1000), alt: "Pressure washing a patio" },
    intro: [
      "Years of dirt, moss, algae and weather can make hard surfaces look tired and slippery. Professional pressure washing brings them back to life and makes them safer underfoot.",
      "We adjust pressure and technique to suit each surface, so your paving, decking and walls get a deep clean without damage.",
    ],
    offerings: [
      {
        title: "Driveways",
        text: "Block paving, concrete and tarmac driveways cleaned of oil, dirt and weeds.",
      },
      {
        title: "Patios & paths",
        text: "Stone, slab and brick paving restored to its original colour.",
      },
      {
        title: "Decking",
        text: "Removing green algae and grime to make decking look better and less slippery.",
      },
      {
        title: "Walls & fencing",
        text: "Cleaning brick walls, render and fences to lift built-up dirt and staining.",
      },
    ],
    gallery: [
      { src: placeholder("wash-1"), alt: "Cleaned driveway" },
      { src: placeholder("wash-2"), alt: "Patio after pressure washing" },
      { src: placeholder("wash-3"), alt: "Decking cleaning" },
      { src: placeholder("wash-4"), alt: "Block paving" },
      { src: placeholder("wash-5"), alt: "Clean garden path" },
      { src: placeholder("wash-6"), alt: "Wall cleaning" },
    ],
  },
];

export function getService(slug: string): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
