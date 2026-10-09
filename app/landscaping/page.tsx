import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Landscaping",
  description: "Landscaping across Essex: planting and borders, turfing, patios, paths, driveways and fencing.",
};

export default function Page() {
  return <ServicePage service={getService("landscaping")} />;
}
