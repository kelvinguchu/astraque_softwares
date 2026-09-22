import { createFileRoute } from "@tanstack/react-router";
import { getAllServiceSlugs } from "@/lib/services-data";
import { SITE_URL } from "@/lib/seo";

type SitemapEntry = {
  url: string;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

function buildSitemap() {
  const lastModified = new Date().toISOString();
  const entries: SitemapEntry[] = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/projects`, changeFrequency: "weekly", priority: 0.7 },
    ...getAllServiceSlugs().map((slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const urls = entries
    .map(
      (e) =>
        `<url><loc>${e.url}</loc><lastmod>${lastModified}</lastmod><changefreq>${e.changeFrequency}</changefreq><priority>${e.priority}</priority></url>`,
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(buildSitemap(), {
          headers: { "Content-Type": "application/xml" },
        }),
    },
  },
});
