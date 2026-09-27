"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { GalleryImage } from "@/lib/site";

export type LightboxImage = GalleryImage & { label?: string };

// Full-screen, uncropped photo viewer shared by the gallery and before/after sections.
export default function Lightbox({
  images,
  index,
  onIndexChange,
}: {
  images: LightboxImage[];
  index: number | null;
  onIndexChange: (index: number | null) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const step = (delta: number) => {
    if (index !== null) onIndexChange((index + delta + images.length) % images.length);
  };

  const current = index !== null ? images[index] : null;

  return (
    <dialog
      ref={dialogRef}
      onClose={() => onIndexChange(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
      className="m-auto max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/85"
    >
      {current && (
        <div
          onClick={(e) => e.target === e.currentTarget && onIndexChange(null)}
          className="relative flex h-dvh w-screen items-center justify-center p-4 sm:p-12"
        >
          <figure className="relative flex max-h-full max-w-full flex-col items-center">
            <Image
              src={current.src}
              alt={current.alt}
              sizes="100vw"
              className="h-auto max-h-[calc(100dvh-7rem)] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 flex items-center gap-2 text-center text-sm text-white/85">
              {current.label && (
                <span className="rounded-full bg-gold px-2.5 py-0.5 text-xs font-bold tracking-wide text-forest uppercase">
                  {current.label}
                </span>
              )}
              {current.alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={() => onIndexChange(null)}
            aria-label="Close"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:left-4"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M15 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 sm:right-4"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </dialog>
  );
}
