import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

import wallAngleOne from "@/public/images/brickwork/retaining-wall-angle-1.webp";
import wallAngleTwo from "@/public/images/brickwork/retaining-wall-angle-2.webp";
import wallAngleThree from "@/public/images/brickwork/retaining-wall-angle-3.webp";

const heroImages = [
  { src: wallAngleOne, alt: "Brick retaining wall and coping beside a planted bed, viewed along the white garden building" },
  { src: wallAngleTwo, alt: "The same brick retaining wall during construction, showing the coping and brickwork from above" },
  { src: wallAngleThree, alt: "The same brick retaining wall viewed along the timber garden building towards the far corner" },
];

export const metadata: Metadata = {
  title: "Brickwork & Stone Restoration",
  description: "Heritage brickwork, stone restoration and lime pointing in Essex, from a team with 15 years of experience on landmark buildings.",
};

export default function Page() {
  return <ServicePage service={getService("brickwork")} heroImages={heroImages} />;
}
