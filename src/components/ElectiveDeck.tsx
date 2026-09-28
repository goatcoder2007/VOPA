"use client";

import Image from "next/image";
import { useRef } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

type Elective = {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
  photoAlt?: string;
  photoLabel?: string;
};

type ElectiveDeckProps = {
  title: string;
  subtitle: string;
  accent?: "blue" | "gold";
  electives: Elective[];
};

export function ElectiveDeck({
  title,
  subtitle,
  accent = "blue",
  electives,
}: ElectiveDeckProps) {
  const scroller = useRef<HTMLDivElement>(null);

  function scroll(delta: number) {
    scroller.current?.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-blue-deep/10 bg-white">
      <div
        className={`px-7 py-5 flex items-center justify-between gap-4 ${
          accent === "blue" ? "bg-blue-deep" : "bg-gold"
        }`}
      >
        <div>
          <h3
            className={`font-bold tracking-tight ${
              accent === "blue" ? "text-white" : "text-charcoal"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-sm ${
              accent === "blue" ? "text-white/70" : "text-charcoal/70"
            }`}
          >
            {subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scroll(-340)}
            aria-label={`Previous ${title.toLowerCase()} elective`}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 ${
              accent === "blue"
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-charcoal/20 text-charcoal hover:bg-charcoal/5"
            }`}
          >
            <CaretLeft size={18} weight="bold" />
          </button>
          <button
            type="button"
            onClick={() => scroll(340)}
            aria-label={`Next ${title.toLowerCase()} elective`}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-200 active:scale-95 ${
              accent === "blue"
                ? "border-white/25 text-white hover:bg-white/10"
                : "border-charcoal/20 text-charcoal hover:bg-charcoal/5"
            }`}
          >
            <CaretRight size={18} weight="bold" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-7 py-7 scrollbar-none"
      >
        {electives.map((elective, i) => (
          <article
            key={elective.title}
            className={`relative snap-center shrink-0 w-[85%] sm:w-[70%] lg:w-[62%] overflow-hidden rounded-2xl shadow-md shadow-blue-deep/10 ${
              i === 0 ? "" : "ring-1 ring-blue-deep/10"
            }`}
          >
            <div className="relative aspect-[16/10]">
              {elective.image ? (
                <Image
                  src={elective.image}
                  alt={elective.photoAlt ?? elective.title}
                  fill
                  sizes="(max-width: 1024px) 85vw, 40vw"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-blue-deep to-blue-mid" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-deep/95 via-blue-deep/30 to-transparent" />

              <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-gold/90 flex items-center justify-center text-charcoal shadow-sm">
                {elective.icon}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5">
                <h4 className="text-lg font-bold text-white tracking-tight mb-1">
                  {elective.title}
                </h4>
                <p className="text-sm text-white/80 leading-relaxed">
                  {elective.description}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}