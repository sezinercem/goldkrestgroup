import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brickwork & Stone Restoration",
  description: "Heritage brickwork, stone restoration and lime pointing in Essex, from a team with 15 years of experience on landmark buildings.",
};

export default function Page() {
  return <ServicePage service={getService("brickwork")} />;
}
