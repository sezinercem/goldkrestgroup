import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Goldkrest Group about brickwork, stone restoration, landscaping or pressure washing in Essex.",
};

const details = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: <path d="M4 6h16v12H4zM4 7l8 6 8-6" />,
  },
  {
    label: "Phone",
    value: site.phoneDisplay,
    href: site.phoneHref,
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    ),
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsappHref,
    external: true,
    icon: <path d="M3 21l1.7-5A9 9 0 1 1 8 19.3L3 21" />,
  },
  {
    label: "Instagram",
    value: `@${site.instagramHandle}`,
    href: site.instagramHref,
    external: true,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-12 pb-20 sm:px-6 md:pt-16 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">Contact Us</p>
      <h1 className="mt-3 font-display text-4xl text-forest sm:text-5xl">Let&apos;s talk about your project</h1>
      <div className="mt-4 h-1 w-16 rounded-full bg-gold" aria-hidden="true" />
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600">
        Send us a message using the form, or contact us directly by email, phone or WhatsApp. You can also see our latest work on Instagram. We cover Essex and
        will get back to you as soon as we can.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <ul className="space-y-4">
          {details.map((d) => (
            <li key={d.label}>
              <a
                href={d.href}
                {...(d.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-4 rounded-2xl border border-forest/10 p-5 transition-colors hover:border-gold hover:bg-gold-light/50"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-gold">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {d.icon}
                  </svg>
                </span>
                <span>
                  <span className="block text-sm font-medium text-neutral-500">{d.label}</span>
                  <span className="block text-lg font-semibold break-all text-forest">{d.value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="rounded-3xl border-t-4 border-gold bg-white p-6 shadow-xl shadow-forest/10 ring-1 ring-forest/5 sm:p-10">
          <h2 className="font-display text-2xl text-forest sm:text-3xl">Send us a message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
