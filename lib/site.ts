import type { StaticImageData } from "next/image";
import gardenHedgeDriveway from "@/public/images/garden/laurel-hedge-driveway.jpg";
import gardenHedgeFrontGarden from "@/public/images/garden/laurel-hedge-front-garden.jpg";
import gardenHedgeTrimmed from "@/public/images/garden/laurel-hedge-trimmed.jpg";
import gardenRaisedBed from "@/public/images/garden/raised-sleeper-bed.jpg";

export const site = {
  name: "Goldkrest Group",
  email: "info@goldkrest.group",
  phoneDisplay: "07394 633885",
  phoneHref: "tel:+447394633885",
  whatsappHref: "https://wa.me/447394633885",
  area: "Essex",
};

export const navLinks = [
  { href: "/", label: "Homepage" },
  { href: "/brickwork", label: "Brickwork" },
  { href: "/garden", label: "Garden" },
  { href: "/pressure-washing", label: "Pressure Washing" },
  { href: "/contact", label: "Contact Us" },
];

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
  // CSS object-position used where the photo is cropped (e.g. hero images).
  position?: string;
};

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

// Real photos live in /public/images/<service>/ and are imported above.
// Placeholder photos (picsum.photos) fill the gaps until real ones arrive.
const placeholder = (seed: string, width = 1200, height = 900): StaticImageData => ({
  src: `https://picsum.photos/seed/goldkrest-${seed}/${width}/${height}`,
  width,
  height,
});

export const services: Service[] = [
  {
    slug: "brickwork",
    href: "/brickwork",
    title: "Brickwork & Stone Restoration",
    eyebrow: "Our Specialism",
    summary:
      "Heritage brickwork, stone restoration and lime pointing, backed by 15 years of experience on landmark buildings.",
    heroImage: { src: placeholder("brick-hero", 1600, 1000), alt: "Brickwork and stone restoration" },
    intro: [
      "Brickwork is where Goldkrest Group began. Our team brings 15 years of hands-on experience, including restoring delicate stone and heritage brickwork on sites such as St Paul's Cathedral and the Houses of Parliament.",
      "We bring that same care to homes and properties across Essex. From a period façade that needs sympathetic repair to a new garden wall, every job gets careful attention and pride in detail, finished to a golden standard.",
    ],
    offerings: [
      {
        title: "Heritage brickwork",
        text: "Sympathetic repair and rebuilding of older and period brickwork, matching bricks, bond and finish.",
      },
      {
        title: "Stone restoration",
        text: "Careful cleaning, repair and restoration of delicate and decorative stonework.",
      },
      {
        title: "Lime pointing",
        text: "Traditional lime mortar pointing that lets older walls breathe and protects them for years to come.",
      },
      {
        title: "New brickwork & repairs",
        text: "Garden walls, boundary walls, piers and general repairs, built neatly and built to last.",
      },
    ],
    gallery: [
      { src: placeholder("brick-1"), alt: "Heritage brickwork" },
      { src: placeholder("brick-2"), alt: "Lime pointing" },
      { src: placeholder("brick-3"), alt: "Stone restoration" },
      { src: placeholder("brick-4"), alt: "Restored brick façade" },
      { src: placeholder("brick-5"), alt: "Brick garden wall" },
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
    heroImage: {
      src: gardenHedgeTrimmed,
      alt: "Laurel hedge cut back to a neat, flat-topped shape",
      position: "50% 55%",
    },
    intro: [
      "Your garden should be a space you enjoy, not a chore. Across Essex, we create new outdoor spaces and keep existing gardens neat, healthy and under control.",
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
      { src: gardenHedgeTrimmed, alt: "Laurel hedge cut back to a neat, flat-topped shape" },
      { src: gardenRaisedBed, alt: "Tidied raised sleeper bed with shaped laurel trees" },
      { src: gardenHedgeFrontGarden, alt: "Trimmed laurel hedge along a gravel front garden" },
      { src: gardenHedgeDriveway, alt: "Dense laurel hedge beside a gravel driveway" },
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
      "Years of dirt, moss, algae and weather can make hard surfaces look tired and slippery. Professional pressure washing brings them back to life and makes them safer underfoot, for homes and businesses across Essex.",
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
