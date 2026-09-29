import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    // trailingSlash is on, so the sitemap must list the same URLs the
    // canonicals point at — otherwise every entry costs a redirect
    url: absoluteUrl(route.path === "/" ? "/" : `${route.path}/`),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
