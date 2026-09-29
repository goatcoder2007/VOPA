export const site = {
  name: "Valley of Peace SDA Academy",
  shortName: "Valley of Peace",
  legalName: "Valley of Peace Seventh-day Adventist Academy",
  // Swap this for the custom domain once it is connected in Cloudflare
  // (Workers > your Worker > Settings > Domains & Routes). Everything SEO
  // related — canonicals, Open Graph, sitemap, robots — derives from here.
  url: "https://valleyofpeacesdaacademy.workers.dev",
  locale: "en_BZ",
  founded: "2006",
  description:
    "Valley of Peace SDA Academy is a Seventh-day Adventist high school in Valley of Peace, Belize, offering Christ-centred education in Forms 1-4 with Business and Science pathways from Form 3.",
  email: "info@vopa.edu",
  phone: "+501 604-1198",
  phoneE164: "+5016041198",
  address: {
    street: "Arias Road",
    locality: "Valley of Peace",
    region: "Cayo District",
    postalCode: "",
    country: "BZ",
    countryName: "Belize",
  },
  themeColor: "#1e3a8a",
  ogImage: {
    url: "/community.jpg",
    width: 1600,
    height: 720,
    alt: "Valley of Peace SDA Academy students together",
  },
} as const;

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/academics", label: "Academics" },
  { href: "/faculty", label: "Faculty" },
  { href: "/admissions", label: "Admissions" },
  { href: "/contact", label: "Contact" },
] as const;

export const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/academics", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/faculty", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/admissions", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
];

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
