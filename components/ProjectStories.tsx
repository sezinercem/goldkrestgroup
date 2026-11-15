"use client";

import Image from "next/image";
import { useState } from "react";
import type { ProjectStory } from "@/lib/site";
import Lightbox from "./Lightbox";

function Story({ story }: { story: ProjectStory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <article className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-forest/10 sm:p-6">
      <h3 className="font-display text-2xl text-forest">{story.title}</h3>
      <p className="mt-2 max-w-3xl leading-relaxed text-neutral-600">{story.text}</p>
      <ol className={`mt-6 grid gap-5 sm:grid-cols-2 ${story.steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
        {story.steps.map((photo, index) => (
          <li key={photo.src.src} className="min-w-0">
            <div className="mb-3 flex min-h-10 items-center gap-2 text-sm font-semibold text-forest">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-xs" aria-hidden="true">{index + 1}</span>
              <span>{photo.label}</span>
              {index < story.steps.length - 1 && <span aria-hidden="true" className="ml-auto text-xl text-gold-dark">→</span>}
            </div>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View ${story.title}: ${photo.label}`}
              className="group relative block aspect-4/3 w-full cursor-zoom-in overflow-hidden rounded-2xl bg-gold-light focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-gold"
            >
              <Image src={photo.src} alt={photo.alt} fill placeholder={photo.src.blurDataURL ? "blur" : "empty"}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </button>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">{photo.caption}</p>
          </li>
        ))}
      </ol>
      <Lightbox images={story.steps} index={openIndex} onIndexChange={setOpenIndex} />
    </article>
  );
}

export default function ProjectStories({ stories }: { stories: ProjectStory[] }) {
  return <div className="space-y-8">{stories.map((story) => <Story key={story.title} story={story} />)}</div>;
}
