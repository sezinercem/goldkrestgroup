import Image from "next/image";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import { services, site } from "@/lib/site";

const reasons = [
  { title: "Free quotes", text: "Clear, no-obligation pricing before any work begins." },
  { title: "Quality workmanship", text: "Careful, tidy work finished to a high standard." },
  { title: "One team, three trades", text: "Brickwork, gardens and cleaning — all from one trusted contact." },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-12 pb-16 sm:px-6 md:pt-20 md:pb-24 lg:grid-cols-[1.1fr_1fr] lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-gold-light px-4 py-1.5 text-sm font-semibold text-forest">
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              Brickwork · Landscaping · Pressure Washing
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-6xl">
              Quality work for your home, <span className="text-gold">inside the walls and out.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
              {site.name} delivers reliable brickwork, landscaping and garden maintenance, and professional
              pressure washing — helping your property look its best.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-forest px-7 py-3.5 text-center font-semibold text-white transition-colors hover:bg-forest-light"
              >
                Get a free quote
              </Link>
              <a
                href="#services"
                className="rounded-full border-2 border-gold px-7 py-3 text-center font-semibold text-forest transition-colors hover:bg-gold-light"
              >
                Our services
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -right-4 hidden h-full w-full rounded-3xl bg-gold/30 sm:block" aria-hidden="true" />
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-gold-light shadow-xl shadow-forest/10 lg:aspect-4/5">
              <Image
                src="https://picsum.photos/seed/goldkrest-home-hero/1200/1400"
                alt="A finished Goldkrest Group project"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 bg-gold-light/60 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">What we do</p>
            <h2 className="mt-3 font-display text-3xl text-forest sm:text-4xl">Our services</h2>
          </div>
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/5 transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-3/2 overflow-hidden bg-gold-light">
                    <Image
                      src={service.heroImage.src}
                      alt={service.heroImage.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t-4 border-gold p-6">
                    <h3 className="font-display text-2xl text-forest">{service.title}</h3>
                    <p className="mt-3 flex-1 leading-relaxed text-neutral-600">{service.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 font-semibold text-forest group-hover:text-gold-dark">
                      Learn more
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16 sm:px-6 md:pt-24 lg:px-8">
        <h2 className="text-center font-display text-3xl text-forest sm:text-4xl">Why choose {site.name}?</h2>
        <ul className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <li key={reason.title} className="text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-forest text-gold" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12l5 5L19 7" />
                </svg>
              </span>
              <h3 className="mt-4 text-lg font-semibold text-forest">{reason.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-neutral-600">{reason.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <CtaBanner />
    </>
  );
}
