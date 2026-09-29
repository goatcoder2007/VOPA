import Link from "next/link";
import { primaryNav } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-white min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">
          Error 404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-charcoal tracking-tight leading-tight mb-5">
          We couldn&rsquo;t find that page
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The link may be out of date, or the page may have moved. Try one of
          the pages below, or get in touch and we&rsquo;ll point you the right
          way.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-deep text-white text-sm font-semibold rounded-lg hover:bg-blue-mid transition-colors duration-200"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-charcoal text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors duration-200"
          >
            Contact us
          </Link>
        </div>

        <nav aria-label="Site pages" className="border-t border-gray-200 pt-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {primaryNav
              .filter((link) => link.href !== "/")
              .map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-blue-deep underline underline-offset-4 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
