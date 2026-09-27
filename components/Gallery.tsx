import Image from "next/image";
import type { GalleryImage } from "@/lib/site";

export default function Gallery({ images }: { images: GalleryImage[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <li key={image.src} className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-gold-light">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </li>
      ))}
    </ul>
  );
}
