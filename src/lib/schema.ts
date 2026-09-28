import { absoluteUrl, site } from "./site";

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  ...(site.address.postalCode
    ? { postalCode: site.address.postalCode }
    : {}),
  addressCountry: site.address.country,
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        telephone: site.phoneE164,
        foundingDate: site.founded,
        logo: absoluteUrl("/logo.jpg"),
        image: absoluteUrl(site.ogImage.url),
        address: postalAddress,
      },
      {
        "@type": "School",
        "@id": `${site.url}/#school`,
        name: site.name,
        alternateName: site.legalName,
        url: site.url,
        description: site.description,
        email: site.email,
        telephone: site.phoneE164,
        foundingDate: site.founded,
        address: postalAddress,
        areaServed: [
          { "@type": "Place", name: `${site.address.locality}, ${site.address.countryName}` },
        ],
        parentOrganization: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "en-BZ",
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    ],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
