import type { StaticImageData } from "next/image";
import landscapingArtificialLawn from "@/public/images/landscaping/artificial-lawn-garden-room.jpg";
import landscapingBorderCurvedLawn from "@/public/images/landscaping/border-curved-lawn.jpg";
import landscapingBorderPhotinia from "@/public/images/landscaping/border-cypress-photinia.jpg";
import brickConcreteBase from "@/public/images/brickwork/concrete-base.jpg";
import landscapingFenceGateBuild from "@/public/images/landscaping/fence-gate-build.jpg";
import landscapingFenceGateFrame from "@/public/images/landscaping/fence-gate-frame.jpg";
import landscapingFrontPath from "@/public/images/landscaping/front-path-gravel-garden.jpg";
import landscapingDrivewayLawns from "@/public/images/landscaping/gravel-driveway-striped-lawns.jpg";
import landscapingIvyOvergrown from "@/public/images/landscaping/ivy-hedge-overgrown.jpg";
import landscapingHedgeBoxTrim from "@/public/images/landscaping/laurel-hedge-box-trim.jpg";
import landscapingHedgeDriveway from "@/public/images/landscaping/laurel-hedge-driveway.jpg";
import landscapingHedgeTrimmed from "@/public/images/landscaping/laurel-hedge-trimmed.jpg";
import landscapingHedgeTrimmedStreet from "@/public/images/landscaping/laurel-hedge-trimmed-street.jpg";
import landscapingLawnSleeperBed from "@/public/images/landscaping/lawn-curved-sleeper-bed.jpg";
import landscapingLawnTennisCourt from "@/public/images/landscaping/lawn-tennis-court.jpg";
import brickRetainingWallsGarden from "@/public/images/brickwork/new-build-dig-out.jpg";
import landscapingNewBuildDigger from "@/public/images/landscaping/new-build-digger.jpg";
import brickRetainingWallsGroundworks from "@/public/images/brickwork/new-build-excavation.jpg";
import brickRetainingWallSleeperBed from "@/public/images/brickwork/new-build-sleeper-bed.jpg";
import brickRetainingWallDetail from "@/public/images/brickwork/oak-sleeper-edging.jpg";
import landscapingPatioAfter from "@/public/images/landscaping/patio-after.jpg";
import landscapingPatioBefore from "@/public/images/landscaping/patio-before.jpg";
import landscapingPatioSubBase from "@/public/images/landscaping/patio-sub-base.jpg";
import landscapingPavingReady from "@/public/images/landscaping/paving-ready-to-lay.jpg";
import brickPlanterWalls from "@/public/images/brickwork/planted-bed-brick-walls.jpg";
import brickCurvedPlanter from "@/public/images/brickwork/planted-bed-corner.jpg";
import landscapingBorderPatio from "@/public/images/landscaping/planted-border-patio.jpg";
import landscapingRaisedBedBefore from "@/public/images/landscaping/raised-bed-before.jpg";
import landscapingRaisedBed from "@/public/images/landscaping/raised-sleeper-bed.jpg";
import landscapingStripedLawnBack from "@/public/images/landscaping/striped-lawn-back-garden.jpg";
import landscapingStripedLawnFront from "@/public/images/landscaping/striped-lawn-front.jpg";
import landscapingStripedLawnSleeperBed from "@/public/images/landscaping/striped-lawn-sleeper-bed.jpg";
import landscapingTurfGroundPrep from "@/public/images/landscaping/turf-ground-prep.jpg";
import landscapingTurfHalfLaid from "@/public/images/landscaping/turf-half-laid.jpg";
import landscapingTurfLaying from "@/public/images/landscaping/turf-laying.jpg";
import landscapingVergeStrimming from "@/public/images/landscaping/verge-strimming.jpg";

export const site = {
  name: "Goldkrest Group",
  email: "info@goldkrest.group",
  phoneDisplay: "07394 633885",
  phoneHref: "tel:+447394633885",
  whatsappHref: "https://wa.me/447394633885",
  instagramHref: "https://www.instagram.com/goldkrestgroup/",
  area: "Essex",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/brickwork", label: "Brickwork" },
  { href: "/landscaping", label: "Landscaping" },
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

export const services: Service[] = [
  {
    slug: "brickwork",
    href: "/brickwork",
    title: "Brickwork & Stone Restoration",
    eyebrow: "Our Specialism",
    summary:
      "Heritage brickwork, stone restoration and lime pointing, backed by 15 years of experience on landmark buildings.",
    heroImage: { src: brickPlanterWalls, alt: "Brick planter walls with railings around a newly planted bed" },
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
        title: "New brickwork & retaining walls",
        text: "Retaining walls, raised planters, garden and boundary walls, piers and repairs, built neatly and built to last.",
      },
    ],
    gallery: [
      { src: brickPlanterWalls, alt: "Brick planter walls with railings around a newly planted bed" },
      { src: brickCurvedPlanter, alt: "Curved brick planter wall around a corner bed" },
      { src: brickRetainingWallsGroundworks, alt: "Stepped brick retaining walls with fencing above, during groundworks" },
      { src: brickRetainingWallsGarden, alt: "Brick retaining walls around a new-build garden, ready for landscaping" },
      { src: brickRetainingWallSleeperBed, alt: "Brick retaining wall with an oak sleeper bed along its base" },
      { src: brickRetainingWallDetail, alt: "Close-up of a brick retaining wall with oak sleeper edging" },
      { src: brickConcreteBase, alt: "New concrete base laid in a back garden" },
    ],
  },
  {
    slug: "landscaping",
    href: "/landscaping",
    title: "Landscaping",
    eyebrow: "Gardens & Outdoor Spaces",
    summary:
      "New planting, turfing and hedge work, plus regular upkeep to keep outdoor spaces looking great all year.",
    heroImage: {
      src: landscapingBorderPatio,
      alt: "Planted border with cypress trees beside a striped lawn and patio",
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
        title: "New patio",
        text: "Ground dug out beside the house, then a sub-base and new stone-effect patio laid around the heat pump.",
        before: { src: landscapingPatioBefore, alt: "Ground dug out beside a new-build house, ready for a patio" },
        after: { src: landscapingPatioAfter, alt: "The same area with a new stone-effect patio laid" },
      },
      {
        title: "Raised sleeper bed tidy-up",
        text: "Overgrown laurels cut back and shaped into standards, with the bed weeded and cleared.",
        before: { src: landscapingRaisedBedBefore, alt: "Overgrown laurels spilling out of a raised sleeper bed" },
        after: { src: landscapingRaisedBed, alt: "Raised sleeper bed tidied, with laurels shaped into standards" },
      },
      {
        title: "Laurel hedge cut back",
        text: "A dense, overgrown laurel hedge trimmed back into a neat, flat-topped shape.",
        before: { src: landscapingHedgeDriveway, alt: "Dense, overgrown laurel hedge beside a gravel driveway" },
        after: { src: landscapingHedgeTrimmed, alt: "The same laurel hedge cut back to a neat, flat-topped shape" },
      },
    ],
    gallery: [
      { src: landscapingDrivewayLawns, alt: "Gravel driveway with steel edging between freshly striped lawns" },
      { src: landscapingBorderPatio, alt: "Planted border with cypress trees beside a striped lawn and patio" },
      { src: landscapingBorderPhotinia, alt: "New border planting with standard photinia trees and cypresses" },
      { src: landscapingBorderCurvedLawn, alt: "Established border planting along a curved lawn and brick piers" },
      { src: landscapingArtificialLawn, alt: "Striped artificial lawn with decking and a garden room" },
      { src: landscapingLawnTennisCourt, alt: "Lawn and planted bed beside a tennis court" },
      { src: landscapingFrontPath, alt: "Front path and gravel garden with picket fencing" },
      { src: landscapingLawnSleeperBed, alt: "Lawn beside a curved timber-edged raised border" },
      { src: landscapingStripedLawnSleeperBed, alt: "Striped lawn alongside a raised timber border" },
      { src: landscapingStripedLawnFront, alt: "Freshly striped front lawn on a new-build development" },
      { src: landscapingStripedLawnBack, alt: "Striped back garden lawn" },
      { src: landscapingHedgeBoxTrim, alt: "Laurel hedge trimmed into a clean, box shape" },
      { src: landscapingHedgeTrimmedStreet, alt: "Freshly trimmed laurel hedge along a front garden" },
      { src: landscapingIvyOvergrown, alt: "Overgrown ivy along a yard wall, ready to be cut back" },
      { src: landscapingVergeStrimming, alt: "Overgrown verge being strimmed back" },
      { src: landscapingTurfGroundPrep, alt: "Large garden levelled and prepared for new turf" },
      { src: landscapingTurfLaying, alt: "New turf being laid over a levelled soil base" },
      { src: landscapingTurfHalfLaid, alt: "Large garden part-way through re-turfing" },
      { src: landscapingNewBuildDigger, alt: "Mini digger clearing a new-build garden, with sleeper beds in place" },
      { src: landscapingPatioSubBase, alt: "Sub-base laid for a new patio and path" },
      { src: landscapingPavingReady, alt: "Paving slabs stacked on a prepared sub-base, ready to lay" },
      { src: landscapingFenceGateBuild, alt: "New fence and gate being built beside a gravel area" },
      { src: landscapingFenceGateFrame, alt: "Frame for a new fence and gate going up" },
    ],
  },
];

export function getService(slug: string): Service {
  const service = services.find((s) => s.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
