import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Landscaping & Garden Maintenance",
  description: "Landscaping and garden maintenance: lawns, hedges, patios, planting and garden clearances.",
};

export default function Page() {
  return <ServicePage service={getService("garden")} />;
}
