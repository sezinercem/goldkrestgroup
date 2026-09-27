import Image from "next/image";
import Link from "next/link";
import crest from "@/public/logo-crest.png";

// Designed for the dark green (#303A1C) background used by the header and footer.
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Goldkrest Group, home">
      <Image src={crest} alt="" priority className="h-11 w-auto sm:h-12" />
      <span className="font-logo text-[15px] leading-[1.05] font-bold tracking-wide text-gold uppercase sm:text-base">
        Goldkrest
        <br />
        Group
      </span>
    </Link>
  );
}
