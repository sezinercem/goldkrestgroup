import Image from "next/image";
import Link from "next/link";
import { site, type Service } from "@/lib/site";
import BeforeAfter from "./BeforeAfter";
import CtaBanner from "./CtaBanner";
import Gallery from "./Gallery";
import InstagramIcon from "./InstagramIcon";

export default function ServicePage({ service }: { service: Service }) {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-16 sm:px-6 md:pt-16 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">{service.eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-forest sm:text-5xl">{service.title}</h1>
          <div className="mt-4 h-1 w-16 rounded-full bg-gold" aria-hidden="true" />
          {service.intro.map((p) => (
            <p key={p} className="mt-5 text-lg leading-relaxed text-neutral-600">
              {p}
            </p>
          ))}
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-forest px-7 py-3.5 font-semibold text-white transition-colors hover:bg-forest-light"
          >
            Request a quote
          </Link>
        </div>
        <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-gold-light shadow-xl shadow-forest/10">
          <Image
            src={service.heroImage.src}
            alt={service.heroImage.alt}
            style={{ objectPosition: service.heroImage.position }}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-gold-light/60 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl text-forest sm:text-4xl">What we offer</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {service.offerings.map((item) => (
              <li key={item.title} className="rounded-2xl border-t-4 border-gold bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-forest">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.beforeAfter && service.beforeAfter.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Results</p>
          <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">Before &amp; after</h2>
          <p className="mt-3 text-neutral-600">The same jobs, photographed before we started and once we&apos;d finished.</p>
          <div className="mt-10">
            <BeforeAfter pairs={service.beforeAfter} />
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Our work</p>
        <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">Gallery</h2>
        <p className="mt-3 text-neutral-600">
          A selection of recent {service.title.toLowerCase()} work. Tap any photo to see it in full.
        </p>
        <div className="mt-10">
          <Gallery images={service.gallery} />
        </div>
        <p className="mt-8 text-center text-neutral-600">
          See more of our latest projects on{" "}
          <a
            href={site.instagramHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-forest underline decoration-gold decoration-2 underline-offset-4 hover:text-gold-dark"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
        </p>
      </section>

      <CtaBanner title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}
