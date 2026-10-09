import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garden Maintenance",
  description: "Reliable garden maintenance across Essex: lawn mowing and striping, hedge trimming, and cutting back overgrown gardens.",
};

export default function Page() {
  return <ServicePage service={getService("garden-maintenance")} />;
}
