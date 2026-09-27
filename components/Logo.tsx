import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Goldkrest Group — home">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 20h18M5 20V10l7-6 7 6v10" stroke="#BDB04C" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 20v-5h6v5" stroke="#BDB04C" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      </span>
      <span className={`font-display text-xl leading-none ${light ? "text-white" : "text-forest"}`}>
        Goldkrest <span className="text-gold">Group</span>
      </span>
    </Link>
  );
}
