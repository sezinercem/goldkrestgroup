import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site";
import CtaBanner from "./CtaBanner";
import Gallery from "./Gallery";

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

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-forest sm:text-4xl">Our work</h2>
        <p className="mt-3 text-neutral-600">A selection of recent {service.title.toLowerCase()} projects.</p>
        <div className="mt-10">
          <Gallery images={service.gallery} />
        </div>
      </section>

      <CtaBanner title={`Need ${service.title.toLowerCase()}?`} />
    </>
  );
}
