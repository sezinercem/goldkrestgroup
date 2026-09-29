"use client";

import Image from "next/image";
import { useState } from "react";
import type { BeforeAfterPair } from "@/lib/site";
import Lightbox, { type LightboxImage } from "./Lightbox";

export default function BeforeAfter({ pairs }: { pairs: BeforeAfterPair[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Flattened as before, after, before, after… so the lightbox steps through each pair in order.
  const photos: LightboxImage[] = pairs.flatMap((pair) => [
    { ...pair.before, label: "Before" },
    { ...pair.after, label: "After" },
  ]);

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-8">
        {pairs.map((pair, pairIndex) => (
          <li
            key={pair.title}
            className="w-full rounded-3xl bg-white p-4 shadow-sm ring-1 ring-forest/10 sm:p-5 lg:w-[calc(50%-1rem)]"
          >
            <div className="grid grid-cols-2 gap-3">
              {(["before", "after"] as const).map((side, sideIndex) => {
                const photo = pair[side];
                const index = pairIndex * 2 + sideIndex;
                return (
                  <button
                    key={side}
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    aria-label={`View larger: ${side}, ${photo.alt}`}
                    className="group relative block aspect-4/5 w-full cursor-zoom-in overflow-hidden rounded-2xl bg-gold-light focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold"
                  >
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      placeholder={photo.src.blurDataURL ? "blur" : "empty"}
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span
                      className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase shadow ${
                        side === "before" ? "bg-white text-forest" : "bg-gold text-forest"
                      }`}
                    >
                      {side === "before" ? "Before" : "After"}
                    </span>
                  </button>
                );
              })}
            </div>
            <h3 className="mt-4 text-lg font-semibold text-forest">{pair.title}</h3>
            <p className="mt-1 leading-relaxed text-neutral-600">{pair.text}</p>
          </li>
        ))}
      </ul>
      <Lightbox images={photos} index={openIndex} onIndexChange={setOpenIndex} />
    </>
  );
}
