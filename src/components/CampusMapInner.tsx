"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { site } from "@/lib/site";

type Props = {
  interactive: boolean;
  layer: "street" | "satellite";
};

const center: [number, number] = [site.geo.latitude, site.geo.longitude];

// A divIcon avoids the bundler path problems that come with Leaflet's default
// marker images, and matches the site palette.
function useCampusIcon() {
  return useMemo(
    () =>
      L.divIcon({
        className: "bg-transparent border-0",
        html: `<span style="display:block;width:26px;height:26px;border-radius:9999px;background:#eab308;border:3px solid #ffffff;box-shadow:0 2px 6px rgba(0,0,0,.35)"></span>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13],
        popupAnchor: [0, -16],
      }),
    [],
  );
}

export default function CampusMapInner({ interactive, layer }: Props) {
  const icon = useCampusIcon();

  useEffect(() => {
    if (!interactive) return;
    // Invalidate so tiles re-render after a resize from the layout change
    // that switching between the two tile layers can trigger.
    const timer = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 150);
    return () => window.clearTimeout(timer);
  }, [interactive, layer]);

  return (
    <MapContainer
      center={center}
      zoom={17}
      minZoom={3}
      maxZoom={19}
      scrollWheelZoom={interactive}
      dragging={interactive}
      touchZoom={interactive}
      doubleClickZoom={interactive}
      boxZoom={interactive}
      keyboard={interactive}
      zoomControl={interactive}
      attributionControl
      className="h-full w-full bg-gray-100"
    >
      {layer === "satellite" ? (
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener noreferrer">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
          maxZoom={19}
        />
      ) : (
        <TileLayer
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
        />
      )}
      <Marker position={center} icon={icon}>
        <Popup>
          <strong>{site.name}</strong>
          <br />
          {site.address.street}, {site.address.locality}
          <br />
          {site.address.region}, {site.address.countryName}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
