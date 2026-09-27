import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pressure Washing",
  description: "Pressure washing for driveways, patios, decking, walls and fencing.",
};

export default function Page() {
  return <ServicePage service={getService("pressure-washing")} />;
}
