"use client";

import Image from "next/image";
import { useState } from "react";
import type { GalleryImage } from "@/lib/site";
import Lightbox from "./Lightbox";

const INITIAL_COUNT = 12;

// Uniform square tiles suit a mix of portrait and landscape photos;
// clicking a tile opens the full, uncropped photo.
export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? images : images.slice(0, INITIAL_COUNT);

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {visible.map((image, index) => (
          <li key={image.src.src}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View larger: ${image.alt}`}
              className="group relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-2xl bg-gold-light focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                placeholder={image.src.blurDataURL ? "blur" : "empty"}
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>
      {images.length > visible.length && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="rounded-full border-2 border-gold px-7 py-3 font-semibold text-forest transition-colors hover:bg-gold-light"
          >
            Show all {images.length} photos
          </button>
        </div>
      )}
      <Lightbox images={images} index={openIndex} onIndexChange={setOpenIndex} />
    </>
  );
}
