import {
  getAllServiceSlugs,
  getServiceBySlug,
  type ServicePageData,
} from "@/lib/services-data";
import { getServiceSEO } from "@/lib/seo-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import UiUxDesignPage from "./pages/UiUxDesignPage";
import WebSoftwarePage from "./pages/WebSoftwarePage";
import MobileAppPage from "./pages/MobileAppPage";
import EcommercePage from "./pages/EcommercePage";
import BusinessSystemsPage from "./pages/BusinessSystemsPage";
import CloudDevOpsPage from "./pages/CloudDevOpsPage";
import QuickLaunchPage from "./pages/QuickLaunchPage";
import SeoPage from "./pages/SeoPage";
import CybersecurityPage from "./pages/CybersecurityPage";
import ItSupportPage from "./pages/ItSupportPage";
import DataAnalyticsPage from "./pages/DataAnalyticsPage";
import CloudHostingPage from "./pages/CloudHostingPage";

// Map slugs to their unique page components
const pageComponents: Record<
  string,
  React.ComponentType<{
    data: NonNullable<ReturnType<typeof getServiceBySlug>>;
  }>
> = {
  "ui-ux-design": UiUxDesignPage,
  "web-software-development": WebSoftwarePage,
  "mobile-app-development": MobileAppPage,
  "ecommerce-solutions": EcommercePage,
  "business-systems": BusinessSystemsPage,
  "cloud-devops": CloudDevOpsPage,
  "quick-launch-platforms": QuickLaunchPage,
  "digital-growth-seo": SeoPage,
  "cybersecurity-compliance": CybersecurityPage,
  "it-support-maintenance": ItSupportPage,
  "data-analytics": DataAnalyticsPage,
  "cloud-hosting-migration": CloudHostingPage,
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const seo = getServiceSEO(slug);

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `https://www.astraque.com/services/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `https://www.astraque.com/services/${slug}`,
      siteName: "Astraque Softwares",
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      site: "@astraque_kenya",
      creator: "@astraque_kenya",
    },
  };
}

/** JSON-LD structured data for service pages */
function getServiceJsonLd(data: ServicePageData, slug: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.title,
      description: data.description,
      provider: {
        "@type": "Organization",
        name: "Astraque Softwares",
        url: "https://www.astraque.com",
      },
      areaServed: {
        "@type": "Country",
        name: "Kenya",
      },
      url: `https://www.astraque.com/services/${slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.astraque.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: "https://www.astraque.com/#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.title,
          item: `https://www.astraque.com/services/${slug}`,
        },
      ],
    },
  ];
}

export default async function ServicePage({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>;
}>) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const PageComponent = pageComponents[slug];
  if (!PageComponent) notFound();

  const jsonLdSchemas = getServiceJsonLd(service, slug);

  return (
    <>
      {jsonLdSchemas.map((schema) => (
        <script
          key={schema["@type"]}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replaceAll("<", String.raw`\u003c`),
          }}
        />
      ))}
      <PageComponent data={service} />
    </>
  );
}
