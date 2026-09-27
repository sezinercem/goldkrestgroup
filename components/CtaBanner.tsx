import Link from "next/link";
import { site } from "@/lib/site";

export default function CtaBanner({
  title = "Ready to get started?",
  text = "Tell us about your project and we'll get back to you to talk it through.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-forest px-6 py-12 text-center sm:px-12 sm:py-16">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-gold" aria-hidden="true" />
        <h2 className="font-display text-3xl text-white sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="w-full rounded-full bg-gold px-7 py-3.5 font-semibold text-forest transition-colors hover:bg-white sm:w-auto"
          >
            Get in touch
          </Link>
          <a
            href={site.phoneHref}
            className="w-full rounded-full border border-white/30 px-7 py-3.5 font-semibold text-white transition-colors hover:border-gold hover:text-gold sm:w-auto"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
