import type { StaticImageData } from "next/image";
import gardenBorderPatio from "@/public/images/garden/planted-border-patio.jpg";
import gardenBorderPhotinia from "@/public/images/garden/border-cypress-photinia.jpg";
import gardenBedBrickWalls from "@/public/images/garden/planted-bed-brick-walls.jpg";
import gardenBedCorner from "@/public/images/garden/planted-bed-corner.jpg";
import gardenLawnSleeperBed from "@/public/images/garden/lawn-curved-sleeper-bed.jpg";
import gardenStripedLawnSleeperBed from "@/public/images/garden/striped-lawn-sleeper-bed.jpg";
import gardenStripedLawnFront from "@/public/images/garden/striped-lawn-front.jpg";
import gardenStripedLawnBack from "@/public/images/garden/striped-lawn-back-garden.jpg";
import gardenTurfLaying from "@/public/images/garden/turf-laying.jpg";
import gardenTurfHalfLaid from "@/public/images/garden/turf-half-laid.jpg";
import gardenRaisedBedBefore from "@/public/images/garden/raised-bed-before.jpg";
import gardenRaisedBed from "@/public/images/garden/raised-sleeper-bed.jpg";
import gardenHedgeTrimmed from "@/public/images/garden/laurel-hedge-trimmed.jpg";
import gardenHedgeDriveway from "@/public/images/garden/laurel-hedge-driveway.jpg";
import gardenVergeStrimming from "@/public/images/garden/verge-strimming.jpg";

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

// Only for genuine pairs: both photos must show the same job.
export type BeforeAfterPair = {
  title: string;
  text: string;
  before: GalleryImage;
  after: GalleryImage;
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
  beforeAfter?: BeforeAfterPair[];
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
      "New planting, turfing and hedge work, plus regular upkeep to keep outdoor spaces looking great all year.",
    heroImage: {
      src: gardenBedBrickWalls,
      alt: "Freshly planted bed set into a patio, with brick walls and railings",
    },
    intro: [
      "Your garden should be a space you enjoy, not a chore. Across Essex, we create new outdoor spaces and keep existing gardens neat, healthy and under control.",
      "Choose a one-off project or regular maintenance visits — whatever suits your garden and your schedule.",
    ],
    offerings: [
      {
        title: "Landscaping & planting",
        text: "New borders, planted beds and garden layouts designed to suit your space and bring it to life.",
      },
      {
        title: "Turfing & lawns",
        text: "Ground preparation, levelling and new turf, plus mowing and striping to keep lawns looking sharp.",
      },
      {
        title: "Hedges & shrubs",
        text: "Hedge trimming, shaping and cutting back overgrown laurels, shrubs and trees.",
      },
      {
        title: "Garden maintenance",
        text: "Regular or one-off visits for mowing, edging, weeding, strimming and general tidying.",
      },
    ],
    beforeAfter: [
      {
        title: "Raised sleeper bed tidy-up",
        text: "Overgrown laurels cut back and shaped into standards, with the bed weeded and cleared.",
        before: { src: gardenRaisedBedBefore, alt: "Overgrown laurels spilling out of a raised sleeper bed" },
        after: { src: gardenRaisedBed, alt: "Raised sleeper bed tidied, with laurels shaped into standards" },
      },
      {
        title: "Laurel hedge cut back",
        text: "A dense, overgrown laurel hedge trimmed back into a neat, flat-topped shape.",
        before: { src: gardenHedgeDriveway, alt: "Dense, overgrown laurel hedge beside a gravel driveway" },
        after: { src: gardenHedgeTrimmed, alt: "The same laurel hedge cut back to a neat, flat-topped shape" },
      },
    ],
    gallery: [
      { src: gardenBorderPatio, alt: "Planted border with cypress trees beside a striped lawn and patio" },
      { src: gardenBorderPhotinia, alt: "New border planting with standard photinia trees and cypresses" },
      { src: gardenBedBrickWalls, alt: "Freshly planted bed set into a patio, with brick walls and railings" },
      { src: gardenBedCorner, alt: "Corner bed planted with shrubs, grasses and euphorbia" },
      { src: gardenLawnSleeperBed, alt: "Lawn beside a curved timber-edged raised border" },
      { src: gardenStripedLawnSleeperBed, alt: "Striped lawn alongside a raised timber border" },
      { src: gardenStripedLawnFront, alt: "Freshly striped front lawn on a new-build development" },
      { src: gardenStripedLawnBack, alt: "Striped back garden lawn" },
      { src: gardenTurfLaying, alt: "New turf being laid over a levelled soil base" },
      { src: gardenTurfHalfLaid, alt: "Large garden part-way through re-turfing" },
      { src: gardenVergeStrimming, alt: "Overgrown verge being strimmed back" },
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
