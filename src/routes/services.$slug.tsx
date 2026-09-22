import { createFileRoute, notFound } from "@tanstack/react-router";
import type { ComponentType } from "react";
import { getServiceBySlug, type ServicePageData } from "@/lib/services-data";
import { getServiceSEO } from "@/lib/seo-data";
import {
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  canonical,
  pageTitle,
  serializeJsonLd,
} from "@/lib/seo";

import UiUxDesignPage from "@/components/services/pages/UiUxDesignPage";
import WebSoftwarePage from "@/components/services/pages/WebSoftwarePage";
import MobileAppPage from "@/components/services/pages/MobileAppPage";
import EcommercePage from "@/components/services/pages/EcommercePage";
import BusinessSystemsPage from "@/components/services/pages/BusinessSystemsPage";
import CloudDevOpsPage from "@/components/services/pages/CloudDevOpsPage";
import QuickLaunchPage from "@/components/services/pages/QuickLaunchPage";
import SeoPage from "@/components/services/pages/SeoPage";
import CybersecurityPage from "@/components/services/pages/CybersecurityPage";
import ItSupportPage from "@/components/services/pages/ItSupportPage";
import DataAnalyticsPage from "@/components/services/pages/DataAnalyticsPage";
import CloudHostingPage from "@/components/services/pages/CloudHostingPage";

// Map slugs to their unique page components
const pageComponents: Record<
  string,
  ComponentType<{ data: ServicePageData }>
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

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service || !pageComponents[params.slug]) throw notFound();
    return { slug: params.slug, service, seo: getServiceSEO(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { slug, seo } = loaderData;
    const url = `${SITE_URL}/services/${slug}`;
    return {
      meta: [
        { title: pageTitle(seo.title) },
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords.join(", ") },
        { property: "og:title", content: seo.title },
        { property: "og:description", content: seo.description },
        { property: "og:url", content: url },
        { property: "og:site_name", content: SITE_NAME },
        { name: "twitter:title", content: seo.title },
        { name: "twitter:description", content: seo.description },
        { name: "twitter:site", content: TWITTER_HANDLE },
        { name: "twitter:creator", content: TWITTER_HANDLE },
      ],
      links: [canonical(`/services/${slug}`)],
    };
  },
  component: ServicePage,
});

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
        name: SITE_NAME,
        url: SITE_URL,
      },
      areaServed: {
        "@type": "Country",
        name: "Kenya",
      },
      url: `${SITE_URL}/services/${slug}`,
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
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: `${SITE_URL}/#services`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: data.title,
          item: `${SITE_URL}/services/${slug}`,
        },
      ],
    },
  ];
}

function ServicePage() {
  const { slug, service } = Route.useLoaderData();
  const PageComponent = pageComponents[slug];

  return (
    <>
      {getServiceJsonLd(service, slug).map((schema) => (
        <script
          key={schema["@type"]}
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
        />
      ))}
      <PageComponent data={service} />
    </>
  );
}
