"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Icon } from "@/components/Icon";
import { googleMapsUrl, site } from "@/lib/site";

const CampusMapInner = dynamic(() => import("./CampusMapInner"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-blue-deep/5 animate-pulse" aria-hidden="true" />
  ),
});

export function CampusMap() {
  const [interactive, setInteractive] = useState(false);
  const [layer, setLayer] = useState<"street" | "satellite">("satellite");

  return (
    <div>
      <div className="relative aspect-[16/7] rounded-2xl overflow-hidden shadow-lg shadow-blue-deep/5 border border-blue-deep/10 bg-gray-100">
        <div
          className={`absolute inset-0 transition-[pointer-events] duration-200 ${
            interactive ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-hidden={!interactive}
        >
          <CampusMapInner interactive={interactive} layer={layer} />
        </div>

        <div className="absolute left-3 top-3 z-10 flex overflow-hidden rounded-lg border border-blue-deep/10 bg-white shadow-sm">
          {(
            [
              { id: "satellite", label: "Satellite" },
              { id: "street", label: "Street" },
            ] as const
          ).map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setLayer(option.id)}
              aria-pressed={layer === option.id}
              className={`px-3 py-2 text-xs font-semibold transition-colors ${
                layer === option.id
                  ? "bg-blue-deep text-white"
                  : "text-gray hover:bg-gray-50 hover:text-blue-deep"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="absolute right-3 top-3 z-10">
          {interactive ? (
            <button
              type="button"
              onClick={() => setInteractive(false)}
              className="inline-flex items-center gap-1.5 rounded-lg border border-blue-deep/10 bg-white px-3 py-2 text-xs font-semibold text-blue-deep shadow-sm hover:bg-gray-50 transition-colors"
            >
              <Icon name="X" size={14} />
              Done
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setInteractive(true)}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-deep px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-mid transition-colors"
            >
              <Icon name="HandTap" size={14} />
              Tap to explore
            </button>
          )}
        </div>

        {!interactive && (
          <p className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-blue-deep/85 to-transparent px-4 pb-3 pt-8 text-center text-xs text-white/90">
            Scrolling passes straight through the map until you tap to explore
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
        <a
          href={googleMapsUrl("dir")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-deep text-white text-sm font-semibold rounded-lg hover:bg-blue-mid transition-colors duration-200"
        >
          <Icon name="NavigationArrow" size={16} />
          Get directions
        </a>
        <a
          href={googleMapsUrl("search")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-blue-deep/20 text-blue-deep text-sm font-semibold rounded-lg hover:border-gold/60 hover:text-gold transition-colors duration-200"
        >
          <Icon name="MapPin" size={16} />
          Open in Google Maps
        </a>
      </div>
      <p className="sr-only">
        {site.name} is at {site.address.street}, {site.address.locality},{" "}
        {site.address.region}, {site.address.countryName}. Directions links
        above open Google Maps.
      </p>
    </div>
  );
}
