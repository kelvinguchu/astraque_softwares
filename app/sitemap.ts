import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services-data";

const BASE_URL = "https://www.astraque.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...serviceUrls,
  ];
}
