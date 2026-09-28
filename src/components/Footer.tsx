"use client";
import Image from "next/image";
import Link from "next/link";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/academics", label: "Academics" },
  { href: "/faculty", label: "Faculty" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-blue-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.jpg"
                alt="Valley of Peace SDA Academy logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <span className="block text-sm font-semibold leading-tight">
                  Valley of Peace
                </span>
                <span className="block text-[11px] text-white/60 uppercase tracking-widest">
                  SDA Academy
                </span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs">
              Nurturing minds, building character, and fostering faith-based
              excellence in education since 2006.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5 shrink-0" />
                <address className="not-italic">
                  <Link
                    href="/contact/"
                    className="text-sm text-white/80 hover:text-gold transition-colors"
                  >
                    {site.address.street}
                    <br />
                    {site.address.locality}, {site.address.countryName}
                  </Link>
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <a
                  href={`tel:${site.phoneE164}`}
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeSimple size={18} className="text-gold shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-white/80 hover:text-gold transition-colors"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Valley of Peace SDA Academy. All
            rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Nurturing Minds. Building Character. Living Faith.
          </p>
        </div>
      </div>
    </footer>
  );
}
