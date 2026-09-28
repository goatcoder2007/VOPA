import type { Metadata } from "next";
import { site } from "./site";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width: number; height: number; alt: string };
};

export function buildMetadata({
  title,
  description,
  path,
  image = site.ogImage,
}: PageMeta): Metadata {
  const socialTitle = `${title} | ${site.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      url: path,
      title: socialTitle,
      description,
      images: [
        { url: image.url, width: image.width, height: image.height, alt: image.alt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}

export const pageImages = {
  about: {
    url: "/community.jpg",
    width: 1600,
    height: 720,
    alt: "Valley of Peace SDA Academy students together",
  },
  academics: {
    url: "/sports.jpg",
    width: 2000,
    height: 934,
    alt: "Valley of Peace students in athletics",
  },
  faculty: {
    url: "/community.jpg",
    width: 1600,
    height: 720,
    alt: "Valley of Peace SDA Academy faculty and students",
  },
  admissions: {
    url: "/community.jpg",
    width: 1600,
    height: 720,
    alt: "Valley of Peace SDA Academy students together",
  },
  contact: {
    url: "/community.jpg",
    width: 1600,
    height: 720,
    alt: "Valley of Peace SDA Academy campus",
  },
} as const;
