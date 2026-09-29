import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Landscaping",
  description: "Landscaping and garden maintenance: lawns, hedges, patios, planting, turfing and garden maintenance across Essex.",
};

export default function Page() {
  return <ServicePage service={getService("landscaping")} />;
}
