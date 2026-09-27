import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { getService } from "@/lib/site";

export const metadata: Metadata = {
  title: "Brickwork",
  description: "Professional brickwork: garden walls, extensions, repointing and repairs.",
};

export default function Page() {
  return <ServicePage service={getService("brickwork")} />;
}
