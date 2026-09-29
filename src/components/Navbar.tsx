"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";
import { primaryNav } from "@/lib/site";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  // trailingSlash is on, so the pathname can arrive as "/about/" while the
  // nav links are "/about" — compare them normalised.
  const current = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  const isActive = (href: string) => current === href;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-deep/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.jpg"
            alt="Valley of Peace SDA Academy logo"
            width={40}
            height={40}
            priority
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden sm:block">
            <span className="block text-sm font-semibold text-blue-deep leading-tight tracking-tight">
              Valley of Peace
            </span>
            <span className="block text-[11px] text-gray uppercase tracking-widest">
              SDA Academy
            </span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {primaryNav.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 after:absolute after:left-3 after:right-3 after:bottom-0.5 after:h-0.5 after:rounded-full after:bg-gold after:transition-transform after:duration-200 ${
                    active
                      ? "text-blue-deep font-semibold after:scale-x-100"
                      : "text-charcoal hover:text-blue-deep hover:bg-blue-deep/5 after:scale-x-0"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/admissions"
          className="hidden lg:inline-flex items-center px-5 py-2.5 bg-gold text-charcoal text-sm font-semibold rounded-lg hover:bg-gold-light transition-colors duration-200 active:scale-[0.98]"
        >
          Apply Now
        </Link>

        <button
          type="button"
          className="lg:hidden p-2 text-charcoal hover:text-blue-deep transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-blue-deep/10 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {primaryNav.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center gap-3 block px-4 py-3 text-sm rounded-lg transition-colors ${
                      active
                        ? "bg-blue-deep/5 text-blue-deep font-semibold"
                        : "text-charcoal hover:text-blue-deep hover:bg-blue-deep/5"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-4 w-1 rounded-full transition-colors ${
                        active ? "bg-gold" : "bg-transparent"
                      }`}
                    />
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/admissions"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 px-4 py-3 bg-gold text-charcoal text-sm font-semibold rounded-lg text-center hover:bg-gold-light transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
