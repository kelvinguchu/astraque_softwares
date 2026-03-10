# Astraque Softwares — Full SEO Revamp Strategy

> **Target Market:** Kenya (Nairobi & nationwide), East Africa, and global clients searching for Kenya-based tech agencies  
> **Domain:** https://www.astraque.com  
> **Stack:** Next.js (App Router), React, TypeScript, Vercel

---

## Table of Contents

1. [Current SEO Audit — What's Missing](#1-current-seo-audit--whats-missing)
2. [Kenya-Specific Keyword Research](#2-kenya-specific-keyword-research)
3. [Per-Service Page Keywords](#3-per-service-page-keywords)
4. [Next.js SEO Implementation Guide](#4-nextjs-seo-implementation-guide)
5. [JSON-LD Structured Data](#5-json-ld-structured-data)
6. [Sitemap & Robots.txt Overhaul](#6-sitemap--robotstxt-overhaul)
7. [Core Web Vitals & Performance](#7-core-web-vitals--performance)
8. [On-Page SEO Checklist](#8-on-page-seo-checklist)
9. [Local SEO (Google Business Profile)](#9-local-seo-google-business-profile)
10. [Content Strategy & Blog Plan](#10-content-strategy--blog-plan)
11. [Technical SEO Tasks](#11-technical-seo-tasks)
12. [Implementation Roadmap](#12-implementation-roadmap)

---

## 1. Current SEO Audit — What's Missing

### What you have (good):

- ✅ `metadataBase` set to `https://www.astraque.com`
- ✅ Title template with `%s | Astraque Softwares`
- ✅ Basic OpenGraph & Twitter cards on root layout
- ✅ Google Analytics (G-X2F0X3PXRQ) installed
- ✅ robots.txt & sitemap.xml exist
- ✅ `generateStaticParams` for service pages
- ✅ `generateMetadata` for dynamic service pages
- ✅ Canonical URL set on root layout

### Critical gaps:

- ❌ **Service pages have bare-minimum metadata** — only `title` and `description` from `generateMetadata`. No keywords, no OpenGraph images, no per-page canonical URLs, no structured data.
- ❌ **No JSON-LD structured data** on any page (Organization, Service, FAQ, BreadcrumbList, WebSite).
- ❌ **Sitemap is static and incomplete** — only lists homepage sections with hash fragments (#services, #about, etc.). Does NOT list the 12 individual service pages (`/services/ui-ux-design`, etc.) or `/projects`. Google cannot discover service pages from sitemap.
- ❌ **No Kenya-specific keywords** — current keywords are generic ("website development", "software development") with zero geo-targeting ("in Kenya", "in Nairobi", "Kenyan").
- ❌ **No per-service OpenGraph images** — all pages fall back to the root OG image.
- ❌ **No breadcrumb structured data** for service pages.
- ❌ **No FAQ structured data** — you have FAQ data in `services-data.ts` but it's not marked up as schema.org FAQ.
- ❌ **No `manifest.json`** (PWA manifest for add-to-homescreen).
- ❌ **Service pages are client components (`"use client"`)** — all content is rendered client-side, which is worse for SEO. Googlebot can execute JS but prefers server-rendered HTML.
- ❌ **`Crawl-delay: 10`** in robots.txt — Google ignores `Crawl-delay` but other crawlers (Bing) may slow crawl. Not needed.
- ❌ **No `hreflang`** (not critical since single language, but worth noting).
- ❌ **No blog/content pages** — zero organic content funnel.
- ❌ **Google Search Console** verification exists (`google64fe4d4aec885e03.html`) but no structured verification in metadata.

---

## 2. Kenya-Specific Keyword Research

### High-Intent Keywords (People Looking to Hire)

These are the exact phrases Kenyans and East Africans type into Google when looking for tech services:

#### Web Development

| Keyword                              | Search Intent | Priority    |
| ------------------------------------ | ------------- | ----------- |
| web development company in Kenya     | Hire          | 🔴 Critical |
| website developer Nairobi            | Hire          | 🔴 Critical |
| best web design company in Kenya     | Hire          | 🔴 Critical |
| website design Kenya                 | Hire          | 🔴 Critical |
| affordable website development Kenya | Hire          | 🔴 Critical |
| website development services Nairobi | Hire          | 🟠 High     |
| custom website development Kenya     | Hire          | 🟠 High     |
| Next.js developer Kenya              | Hire          | 🟡 Medium   |
| React developer Nairobi              | Hire          | 🟡 Medium   |
| professional web developer Kenya     | Hire          | 🟠 High     |
| website redesign services Kenya      | Hire          | 🟡 Medium   |
| corporate website design Kenya       | Hire          | 🟠 High     |
| WordPress developer Kenya            | Hire          | 🟠 High     |
| web application development Kenya    | Hire          | 🟠 High     |
| business website Kenya               | Hire          | 🟠 High     |

#### Software Development

| Keyword                             | Search Intent | Priority    |
| ----------------------------------- | ------------- | ----------- |
| software development company Kenya  | Hire          | 🔴 Critical |
| custom software development Nairobi | Hire          | 🔴 Critical |
| software developers in Kenya        | Hire          | 🔴 Critical |
| best software company in Kenya      | Hire          | 🟠 High     |
| SaaS development Kenya              | Hire          | 🟡 Medium   |
| enterprise software Kenya           | Hire          | 🟡 Medium   |
| software outsourcing Kenya          | Hire          | 🟠 High     |
| API development Kenya               | Hire          | 🟡 Medium   |

#### Mobile App Development

| Keyword                          | Search Intent | Priority    |
| -------------------------------- | ------------- | ----------- |
| mobile app development Kenya     | Hire          | 🔴 Critical |
| app developer Nairobi            | Hire          | 🔴 Critical |
| Android app development Kenya    | Hire          | 🟠 High     |
| iOS app development Kenya        | Hire          | 🟠 High     |
| Flutter developer Kenya          | Hire          | 🟡 Medium   |
| React Native developer Kenya     | Hire          | 🟡 Medium   |
| mobile app company Nairobi       | Hire          | 🟠 High     |
| M-Pesa integration app developer | Hire          | 🟠 High     |

#### E-commerce

| Keyword                             | Search Intent | Priority    |
| ----------------------------------- | ------------- | ----------- |
| ecommerce website development Kenya | Hire          | 🔴 Critical |
| online store development Kenya      | Hire          | 🟠 High     |
| Shopify developer Kenya             | Hire          | 🟠 High     |
| WooCommerce developer Kenya         | Hire          | 🟡 Medium   |
| M-Pesa payment integration Kenya    | Hire          | 🔴 Critical |
| ecommerce solutions Nairobi         | Hire          | 🟠 High     |
| online shop website Kenya           | Hire          | 🟠 High     |

#### SEO & Digital Marketing

| Keyword                            | Search Intent | Priority    |
| ---------------------------------- | ------------- | ----------- |
| SEO services Kenya                 | Hire          | 🔴 Critical |
| SEO company Nairobi                | Hire          | 🔴 Critical |
| digital marketing agency Kenya     | Hire          | 🔴 Critical |
| Google Ads management Kenya        | Hire          | 🟠 High     |
| social media marketing Kenya       | Hire          | 🟠 High     |
| SEO expert Kenya                   | Hire          | 🟠 High     |
| search engine optimization Nairobi | Hire          | 🟠 High     |
| local SEO services Kenya           | Hire          | 🟡 Medium   |

#### UI/UX Design

| Keyword                         | Search Intent | Priority    |
| ------------------------------- | ------------- | ----------- |
| UI/UX design company Kenya      | Hire          | 🔴 Critical |
| graphic design services Nairobi | Hire          | 🟠 High     |
| UI designer Kenya               | Hire          | 🟠 High     |
| Figma designer Kenya            | Hire          | 🟡 Medium   |
| website design services Kenya   | Hire          | 🔴 Critical |
| user experience design Kenya    | Hire          | 🟡 Medium   |

#### Cloud & IT Services

| Keyword                     | Search Intent | Priority    |
| --------------------------- | ------------- | ----------- |
| cloud services Kenya        | Hire          | 🟠 High     |
| IT support company Kenya    | Hire          | 🔴 Critical |
| managed IT services Nairobi | Hire          | 🟠 High     |
| cloud hosting Kenya         | Hire          | 🟠 High     |
| DevOps services Kenya       | Hire          | 🟡 Medium   |
| cybersecurity company Kenya | Hire          | 🟠 High     |
| data analytics Kenya        | Hire          | 🟠 High     |
| web hosting Kenya           | Hire          | 🟠 High     |
| server management Kenya     | Hire          | 🟡 Medium   |

#### Business Systems

| Keyword                           | Search Intent | Priority  |
| --------------------------------- | ------------- | --------- |
| CRM development Kenya             | Hire          | 🟠 High   |
| ERP system Kenya                  | Hire          | 🟠 High   |
| Odoo implementation Kenya         | Hire          | 🟡 Medium |
| custom business software Kenya    | Hire          | 🟠 High   |
| inventory management system Kenya | Hire          | 🟡 Medium |
| HR management system Kenya        | Hire          | 🟡 Medium |

### Long-Tail Keywords (Higher Conversion Rate)

| Keyword                               | Est. Monthly Searches |
| ------------------------------------- | --------------------- |
| how much does a website cost in Kenya | 500+                  |
| best tech companies in Kenya 2025     | 300+                  |
| affordable web developer in Nairobi   | 200+                  |
| M-Pesa integration for website        | 200+                  |
| how to build an online store in Kenya | 150+                  |
| top software companies in Nairobi     | 200+                  |
| website maintenance services Kenya    | 100+                  |
| cloud migration services Kenya        | 50+                   |
| data protection compliance Kenya      | 50+                   |

---

## 3. Per-Service Page Keywords

Each service page should have its own targeted keywords in metadata. Here are the recommended keywords for each:

### `/services/ui-ux-design`

```
Primary: "UI/UX design company Kenya", "UI/UX design services Nairobi"
Secondary: "user interface design Kenya", "UX designer Kenya", "Figma design services Kenya", "website design Kenya", "mobile app design Kenya", "user experience design Nairobi", "graphic design services Kenya"
Title: "UI/UX Design Services in Kenya | Astraque Softwares"
Description: "Professional UI/UX design company in Kenya. We create beautiful, user-centered interfaces using Figma — from wireframes to high-fidelity prototypes. Based in Nairobi."
```

### `/services/web-software-development`

```
Primary: "web development company Kenya", "software development services Nairobi"
Secondary: "React developer Kenya", "Next.js development Kenya", "custom web application Kenya", "full-stack developer Nairobi", "Node.js developer Kenya", "TypeScript developer Kenya", "SaaS development Kenya"
Title: "Web & Software Development in Kenya | Astraque Softwares"
Description: "Leading web and software development company in Kenya. We build custom web apps, SaaS platforms & APIs using React, Next.js, and Node.js. Based in Nairobi."
```

### `/services/mobile-app-development`

```
Primary: "mobile app development Kenya", "app developer Nairobi"
Secondary: "Flutter developer Kenya", "React Native app Kenya", "iOS app development Kenya", "Android app development Nairobi", "cross-platform app Kenya", "M-Pesa app integration Kenya"
Title: "Mobile App Development in Kenya | Astraque Softwares"
Description: "Top mobile app development company in Kenya. We build native & cross-platform apps for iOS and Android using Flutter & React Native, with M-Pesa integration."
```

### `/services/ecommerce-solutions`

```
Primary: "ecommerce website development Kenya", "online store Kenya"
Secondary: "Shopify developer Kenya", "WooCommerce Kenya", "M-Pesa payment integration", "ecommerce solutions Nairobi", "online shop development Kenya", "Stripe integration Kenya"
Title: "E-commerce Development in Kenya | Astraque Softwares"
Description: "Build your online store with Kenya's trusted ecommerce development company. M-Pesa, Stripe & PayPal integration. Shopify, WooCommerce & custom stores in Nairobi."
```

### `/services/business-systems`

```
Primary: "CRM development Kenya", "ERP system Kenya"
Secondary: "custom business software Kenya", "Odoo implementation Nairobi", "inventory management system Kenya", "HR system Kenya", "workflow automation Kenya", "business management software Nairobi"
Title: "Business Systems & CRM Development in Kenya | Astraque Softwares"
Description: "Custom CRM, ERP & business management systems for Kenyan businesses. We build internal tools, dashboards & workflow automation. Odoo experts in Nairobi."
```

### `/services/cloud-devops`

```
Primary: "cloud services Kenya", "DevOps services Nairobi"
Secondary: "AWS consulting Kenya", "cloud infrastructure Kenya", "CI/CD pipeline setup Kenya", "Docker Kubernetes Kenya", "cloud architecture Nairobi", "infrastructure as code Kenya"
Title: "Cloud & DevOps Services in Kenya | Astraque Softwares"
Description: "Expert cloud infrastructure & DevOps consulting in Kenya. AWS, Azure, GCP, Docker & Kubernetes. CI/CD pipelines, monitoring & cloud cost optimization in Nairobi."
```

### `/services/quick-launch-platforms`

```
Primary: "WordPress developer Kenya", "website builder Kenya"
Secondary: "Webflow designer Kenya", "WordPress website Nairobi", "small business website Kenya", "affordable website Kenya", "company website design Kenya", "CMS website Kenya"
Title: "WordPress & Webflow Website Development in Kenya | Astraque Softwares"
Description: "Get a professional website launched fast in Kenya. WordPress, Webflow & CMS development. SEO-ready, mobile-responsive business websites from Nairobi."
```

### `/services/digital-growth-seo`

```
Primary: "SEO services Kenya", "SEO company Nairobi"
Secondary: "search engine optimization Kenya", "local SEO Kenya", "Google ranking Kenya", "technical SEO audit Kenya", "content strategy Kenya", "digital marketing Nairobi", "SEO expert Kenya"
Title: "SEO & Digital Marketing Services in Kenya | Astraque Softwares"
Description: "Boost your Google rankings with Kenya's trusted SEO company. Technical SEO audits, on-page optimization, local SEO & content strategy. Based in Nairobi."
```

### `/services/cybersecurity-compliance`

```
Primary: "cybersecurity company Kenya", "data protection Kenya"
Secondary: "penetration testing Kenya", "security audit Nairobi", "GDPR compliance Kenya", "Kenya Data Protection Act compliance", "SSL setup Kenya", "website security Kenya"
Title: "Cybersecurity & Compliance Services in Kenya | Astraque Softwares"
Description: "Protect your business with expert cybersecurity services in Kenya. Security audits, penetration testing & Kenya Data Protection Act compliance. Based in Nairobi."
```

### `/services/it-support-maintenance`

```
Primary: "IT support company Kenya", "managed IT services Nairobi"
Secondary: "website maintenance Kenya", "IT outsourcing Kenya", "24/7 IT support Nairobi", "server monitoring Kenya", "bug fixes and patches Kenya", "IT helpdesk Kenya"
Title: "IT Support & Maintenance Services in Kenya | Astraque Softwares"
Description: "Reliable IT support and website maintenance in Kenya. 24/7 monitoring, bug fixes, software updates & help desk. Your outsourced IT team in Nairobi."
```

### `/services/data-analytics`

```
Primary: "data analytics Kenya", "business intelligence Nairobi"
Secondary: "Power BI consultant Kenya", "custom dashboards Kenya", "data visualization Kenya", "data pipeline Kenya", "predictive analytics Nairobi", "reporting tools Kenya"
Title: "Data Analytics & Business Intelligence in Kenya | Astraque Softwares"
Description: "Turn data into decisions with custom analytics solutions in Kenya. Dashboards, data pipelines, Power BI & predictive analytics. Based in Nairobi."
```

### `/services/cloud-hosting-migration`

```
Primary: "cloud hosting Kenya", "website hosting Nairobi"
Secondary: "server migration Kenya", "cloud migration Kenya", "managed hosting Kenya", "website migration Nairobi", "domain management Kenya", "CDN setup Kenya"
Title: "Cloud Hosting & Migration Services in Kenya | Astraque Softwares"
Description: "Reliable cloud hosting & zero-downtime migration in Kenya. Managed servers, auto-scaling, CDN setup & domain management. Based in Nairobi."
```

---

## 4. Next.js SEO Implementation Guide

### 4.1. Enhanced `generateMetadata` for Service Pages

**File: `app/services/[slug]/page.tsx`**

The current `generateMetadata` only returns `title` and `description`. It should include:

```typescript
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  // Get the per-service SEO data (see seo-data.ts below)
  const seo = getServiceSEO(slug);

  return {
    title: seo.title, // "Web & Software Development in Kenya | Astraque Softwares"
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
      images: [
        {
          url: `/og/services/${slug}.png`, // Per-service OG image
          width: 1200,
          height: 630,
          alt: `${service.title} - Astraque Softwares Kenya`,
        },
      ],
      locale: "en_KE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      site: "@astraque_kenya",
      creator: "@astraque_kenya",
      images: [`/og/services/${slug}.png`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
```

### 4.2. Create SEO Data File

**File: `lib/seo-data.ts`**

Create a centralized file with all Kenya-targeted SEO metadata per service page:

```typescript
export interface ServiceSEO {
  title: string;
  description: string;
  keywords: string[];
}

export const serviceSEOData: Record<string, ServiceSEO> = {
  "ui-ux-design": {
    title: "UI/UX Design Services in Kenya",
    description:
      "Professional UI/UX design company in Kenya. We create beautiful, user-centered interfaces using Figma — wireframes to high-fidelity prototypes. Based in Nairobi.",
    keywords: [
      "UI/UX design company Kenya",
      "UI/UX design services Nairobi",
      "user interface design Kenya",
      "UX designer Kenya",
      "Figma design services Kenya",
      "website design Kenya",
      "mobile app design Kenya",
      "user experience design Nairobi",
      "graphic design services Kenya",
    ],
  },
  // ... repeat for all 12 services (use keywords from Section 3)
};

export function getServiceSEO(slug: string): ServiceSEO {
  return (
    serviceSEOData[slug] ?? {
      title: "Services",
      description:
        "Professional technology services from Astraque Softwares Kenya.",
      keywords: [],
    }
  );
}
```

### 4.3. Update Root Layout Keywords

**File: `app/layout.tsx`**

Add comprehensive Kenya-targeted keywords to the root layout:

```typescript
keywords: [
  // Geo-targeted (critical)
  "web development company in Kenya",
  "software development company Kenya",
  "website developer Nairobi",
  "best web design company Kenya",
  "mobile app development Kenya",
  "SEO services Kenya",
  "ecommerce website development Kenya",
  "IT support company Kenya",
  "cloud services Kenya",
  "cybersecurity company Kenya",
  "digital marketing agency Kenya",
  "UI/UX design company Kenya",
  "tech company Nairobi",
  "software developers Nairobi",
  "app developer Kenya",

  // Generic service keywords
  "website development",
  "software development",
  "mobile app development",
  "ecommerce development",
  "SEO services",
  "cloud hosting",
  "IT support",
  "cybersecurity",
  "data analytics",
  "business systems",
  "CRM development",
  "ERP systems",

  // Brand
  "Astraque Softwares",
  "Astraque",

  // Technology keywords
  "React developer Kenya",
  "Next.js developer Kenya",
  "Flutter developer Kenya",
  "WordPress developer Kenya",
  "M-Pesa integration",
],
```

> **Note:** Google has stated they don't use the `keywords` meta tag for ranking. However, other search engines (Bing, Yandex) and internal search tools still reference them. Keep them relevant and not stuffed.

### 4.4. Dynamic OG Images (Optional but Powerful)

**File: `app/services/[slug]/opengraph-image.tsx`**

Next.js can generate OG images at build time:

```typescript
import { ImageResponse } from "next/og";
import { getServiceBySlug } from "@/lib/services-data";

export const runtime = "edge";
export const alt = "Astraque Softwares Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ color: "#fff", fontSize: 60, fontWeight: 700 }}>
          {service?.title ?? "Our Services"}
        </div>
        <div style={{ color: "#999", fontSize: 28, marginTop: 20 }}>
          {service?.subtitle ?? ""}
        </div>
        <div style={{ color: "#7c3aed", fontSize: 24, marginTop: 40 }}>
          Astraque Softwares — Nairobi, Kenya
        </div>
      </div>
    ),
    { ...size }
  );
}
```

---

## 5. JSON-LD Structured Data

This is **the single biggest SEO improvement** you can make. Google uses structured data to create rich snippets in search results (FAQ dropdowns, breadcrumbs, star ratings, etc.).

### 5.1. Organization Schema (Root Layout)

Add to `app/layout.tsx` or a shared component:

```typescript
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Astraque Softwares",
  alternateName: "Astraque",
  url: "https://www.astraque.com",
  logo: "https://www.astraque.com/favicon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+254-XXX-XXX-XXX", // Add your phone
    contactType: "customer service",
    areaServed: ["KE", "UG", "TZ", "RW"],
    availableLanguage: ["English", "Swahili"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://twitter.com/astraque_kenya",
    // Add LinkedIn, Facebook, Instagram, GitHub URLs
  ],
};
```

```tsx
<script
  type='application/ld+json'
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
  }}
/>
```

### 5.2. WebSite Schema (Homepage)

Add to `app/page.tsx`:

```typescript
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Astraque Softwares",
  url: "https://www.astraque.com",
  description:
    "Professional web development, software development, and digital services company in Kenya",
  publisher: {
    "@type": "Organization",
    name: "Astraque Softwares",
  },
};
```

### 5.3. Service Schema + FAQ Schema (Each Service Page)

This is the **most impactful** — it can show FAQ rich results in Google and a Service listing.

Add to each service page component (or the dynamic `page.tsx`):

```typescript
function getServiceJsonLd(data: ServicePageData, slug: string) {
  return [
    // Service schema
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
    // FAQ schema (this creates FAQ rich snippets in Google!)
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
    // Breadcrumb schema
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
```

Render in the page:

```tsx
{
  getServiceJsonLd(data, slug).map((schema, i) => (
    <script
      key={i}
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  ));
}
```

### 5.4. LocalBusiness Schema (Optional — if you have a physical office)

```typescript
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Astraque Softwares",
  image: "https://www.astraque.com/og-image.png",
  url: "https://www.astraque.com",
  telephone: "+254-XXX-XXX-XXX",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Street Address",
    addressLocality: "Nairobi",
    addressRegion: "Nairobi County",
    postalCode: "00100",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -1.286389, // Nairobi coordinates
    longitude: 36.817223,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  priceRange: "$$",
};
```

---

## 6. Sitemap & Robots.txt Overhaul

### 6.1. Dynamic Sitemap (Critical Fix!)

Your current sitemap **does not include any service pages**. Switch to a dynamic sitemap.

**Option A: Create `app/sitemap.ts`** (Next.js will auto-generate):

```typescript
import { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.astraque.com";

  // Service pages
  const servicePages = getAllServiceSlugs().map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...servicePages,
  ];
}
```

> **Important:** Delete the static `public/sitemap.xml` once you add `app/sitemap.ts`. Next.js will generate `/sitemap.xml` automatically.

### 6.2. Updated robots.txt

**Option A: Create `app/robots.ts`** (programmatic):

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://www.astraque.com/sitemap.xml",
  };
}
```

> **Remove `Crawl-delay: 10`** — Google ignores it and Bing may unnecessarily slow crawl.

---

## 7. Core Web Vitals & Performance

Google uses **Core Web Vitals** as a ranking signal. The three metrics:

| Metric                              | What it Measures    | Target  |
| ----------------------------------- | ------------------- | ------- |
| **LCP** (Largest Contentful Paint)  | Loading performance | ≤ 2.5s  |
| **INP** (Interaction to Next Paint) | Interactivity       | ≤ 200ms |
| **CLS** (Cumulative Layout Shift)   | Visual stability    | ≤ 0.1   |

### Performance Fixes for Astraque:

1. **Convert service pages from client to server components** — Currently all pages use `"use client"` which means the entire page is rendered client-side. The hero section with `motion/react` needs client rendering, but the rest (FAQ, features, process) can be server-rendered. **Split into Server Component wrapper + Client animated sections.**

2. **Lazy load below-fold animations** — `framer-motion` animations on FAQ, process steps, etc. don't need to load immediately. Use `next/dynamic` with `ssr: false` for heavy animated components below the fold.

3. **Image Optimization** — Use `next/image` for all images with proper `width`, `height`, and `alt` attributes. Add `priority` to hero images only.

4. **Font Optimization** — Use `next/font` to self-host fonts and prevent layout shift from font loading.

5. **Reduce JavaScript Bundle** —
   - The `@tabler/icons-react` library is large. Import individual icons, not the entire package: `import { IconArrowLeft } from "@tabler/icons-react"` (you already do this — good).
   - Use `optimizePackageImports` in `next.config.mjs` for icon libraries.

6. **Set explicit dimensions on all containers** — You already use `minHeight` on sections (good for CLS). Ensure all images and dynamic content have dimensions.

7. **Preconnect to external origins**:

```tsx
<link rel="preconnect" href="https://www.googletagmanager.com" />
<link rel="dns-prefetch" href="https://www.googletagmanager.com" />
```

---

## 8. On-Page SEO Checklist

### For Every Service Page:

- [ ] **Unique, descriptive `<title>`** — Include primary keyword + "Kenya" + brand. Max 60 chars.
  - ✅ `"Web & Software Development in Kenya | Astraque Softwares"`
  - ❌ `"Web & Software Development"` (too generic)

- [ ] **Unique meta description** — Include primary keyword, city, value proposition. 150-160 chars.
  - ✅ `"Leading web and software development company in Kenya. We build custom web apps, SaaS platforms & APIs using React, Next.js, and Node.js. Based in Nairobi."`

- [ ] **Proper heading hierarchy** — Each page should have exactly **one `<h1>`** (the service title). Use `<h2>` for sections (Features, Process, FAQ), `<h3>` for sub-items.

- [ ] **Keyword in first 100 words** — The hero description should naturally include the primary keyword.

- [ ] **Internal linking** — Each service page should link to 2-3 related service pages. E.g., "Web Development" links to "UI/UX Design" and "E-commerce Solutions".

- [ ] **External authority links** — Link to official tech docs (React docs, AWS, etc.) where relevant.

- [ ] **Image alt text** — Every image and icon should have descriptive alt text including the keyword context.

- [ ] **URL structure** — Already good! `/services/web-software-development` is descriptive. Keep slugs as-is.

- [ ] **Canonical URL** — Each service page needs `<link rel="canonical" href="https://www.astraque.com/services/{slug}" />`.

- [ ] **FAQ section with schema markup** — Already have FAQ data. Add JSON-LD (see Section 5.3).

### Content Enhancements for Each Service Page:

- [ ] Add a **"Why Choose Astraque for [Service] in Kenya?"** section — naturally includes geo-keywords.
- [ ] Add **client testimonials** specific to each service — social proof + more keyword-rich content.
- [ ] Add a **CTA section** with text like "Ready to start your [service] project in Kenya? Contact us today."
- [ ] Add **pricing tiers or "Starting from"** — people search "how much does a website cost in Kenya". Consider adding structured data for this.

---

## 9. Local SEO (Google Business Profile)

This is **critical for ranking in Kenya-specific searches**:

1. **Create/Claim Google Business Profile** at business.google.com
   - Category: "Software Company" + "Web Designer" + "IT Services"
   - Add Nairobi address, phone, hours, website URL
   - Add service descriptions with keywords
   - Upload photos of your team, office, work

2. **Get Listed on Kenya Business Directories:**
   - Kenya Yellow Pages (yellowpageskenya.com)
   - BizKenya
   - Kenyaplex
   - Google Maps
   - Bing Places for Business

3. **Encourage Google Reviews** — Ask satisfied clients to leave reviews mentioning specific services ("Great web development team in Nairobi").

4. **NAP Consistency** — Ensure your business Name, Address, Phone are identical across all directories and your website.

---

## 10. Content Strategy & Blog Plan

Adding a blog is the **#1 way to increase organic traffic** long-term. Create an `app/blog` section.

### Recommended Blog Topics (Kenya-focused):

| Topic                                                                  | Target Keyword                        | Type        |
| ---------------------------------------------------------------------- | ------------------------------------- | ----------- |
| "How Much Does a Website Cost in Kenya (2025 Guide)"                   | how much does a website cost in Kenya | Educational |
| "Top 10 Web Development Companies in Kenya"                            | best web development company Kenya    | Listicle    |
| "M-Pesa Integration Guide for Websites & Apps"                         | M-Pesa integration for website        | Technical   |
| "Why Your Kenyan Business Needs a Website in 2025"                     | website for business Kenya            | Educational |
| "WordPress vs Custom Website: Which is Right for Your Kenya Business?" | WordPress vs custom website Kenya     | Comparison  |
| "SEO Guide for Kenyan Businesses"                                      | SEO for business in Kenya             | Educational |
| "Best Ecommerce Platforms for Kenya"                                   | ecommerce platform Kenya              | Listicle    |
| "How to Build an Online Store in Kenya"                                | how to build online store Kenya       | Tutorial    |
| "Cloud Hosting vs Shared Hosting for Kenyan Websites"                  | cloud hosting Kenya                   | Comparison  |
| "Data Protection Act Kenya — What Businesses Need to Know"             | data protection Kenya                 | Educational |
| "Cost of Mobile App Development in Kenya"                              | mobile app cost Kenya                 | Educational |
| "Why React & Next.js Are the Best Choice in 2025"                      | React Next.js web development         | Technical   |

### Blog Implementation in Next.js:

```
app/
  blog/
    page.tsx          (blog listing page)
    [slug]/
      page.tsx        (individual blog post)
    layout.tsx        (blog layout)
```

Use MDX or a headless CMS (Sanity, Contentful) for blog content. Each blog post should have:

- Unique metadata with `generateMetadata`
- JSON-LD Article schema
- Internal links to service pages
- Author schema
- Social sharing buttons

---

## 11. Technical SEO Tasks

### 11.1. Add Google Search Console Verification to Metadata

```typescript
// In app/layout.tsx metadata
verification: {
  google: "google64fe4d4aec885e03", // Your existing verification
},
```

### 11.2. Add Web Manifest

**File: `app/manifest.ts`**

```typescript
import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Astraque Softwares",
    short_name: "Astraque",
    description: "Professional web & software development company in Kenya",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#7c3aed",
    icons: [
      { src: "/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
```

### 11.3. Security Headers (in `next.config.mjs`)

```javascript
async headers() {
  return [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
  ];
},
```

### 11.4. Programmatic Robots with `app/robots.ts`

See Section 6.2.

### 11.5. 404 Page with SEO

**File: `app/not-found.tsx`**

Create a custom 404 page that:

- Has proper metadata
- Links back to services and homepage
- Maintains brand consistency
- Helps users find what they were looking for

### 11.6. `loading.tsx` for Service Pages

Add `app/services/[slug]/loading.tsx` with a skeleton UI to improve perceived performance.

---

## 12. Implementation Roadmap

### Phase 1 — Critical (Do First) 🔴

| #   | Task                                                                                   | Impact   | Effort |
| --- | -------------------------------------------------------------------------------------- | -------- | ------ |
| 1   | Create `lib/seo-data.ts` with per-service Kenya-targeted keywords                      | High     | Small  |
| 2   | Update `generateMetadata` in `app/services/[slug]/page.tsx` with full metadata         | High     | Small  |
| 3   | Add JSON-LD structured data (Organization, Service, FAQ, Breadcrumb)                   | High     | Medium |
| 4   | Replace static `sitemap.xml` with dynamic `app/sitemap.ts` including all service pages | Critical | Small  |
| 5   | Replace static `robots.txt` with `app/robots.ts` (remove Crawl-delay)                  | Medium   | Small  |
| 6   | Update root layout keywords with Kenya-focused terms                                   | Medium   | Small  |
| 7   | Add canonical URLs to all service pages                                                | High     | Small  |

### Phase 2 — High Value 🟠

| #   | Task                                                   | Impact | Effort |
| --- | ------------------------------------------------------ | ------ | ------ |
| 8   | Generate per-service OG images (`opengraph-image.tsx`) | Medium | Medium |
| 9   | Add Google Search Console verification to metadata     | Medium | Small  |
| 10  | Create Google Business Profile (Nairobi)               | High   | Medium |
| 11  | Add `app/manifest.ts` for PWA                          | Low    | Small  |
| 12  | Add security headers in `next.config.mjs`              | Low    | Small  |
| 13  | Add internal cross-links between related service pages | Medium | Small  |
| 14  | Create custom 404 page                                 | Low    | Small  |

### Phase 3 — Growth 🟡

| #   | Task                                                              | Impact | Effort |
| --- | ----------------------------------------------------------------- | ------ | ------ |
| 15  | Set up blog (`app/blog/`) with CMS                                | High   | Large  |
| 16  | Write first 5 Kenya-focused blog posts                            | High   | Large  |
| 17  | Convert service pages from `"use client"` to hybrid server/client | Medium | Large  |
| 18  | Optimize Core Web Vitals (LCP, INP, CLS)                          | Medium | Medium |
| 19  | Get listed on Kenya business directories                          | Medium | Medium |
| 20  | Implement web-vitals tracking for monitoring                      | Low    | Small  |

### Phase 4 — Ongoing 🟢

| #   | Task                                                         | Frequency |
| --- | ------------------------------------------------------------ | --------- |
| 21  | Publish 2-4 blog posts per month                             | Ongoing   |
| 22  | Monitor Google Search Console for crawl errors               | Weekly    |
| 23  | Track keyword rankings (use Ahrefs, SEMrush, or Ubersuggest) | Monthly   |
| 24  | Update sitemap `lastModified` dates when content changes     | As needed |
| 25  | Collect and respond to Google Reviews                        | Ongoing   |
| 26  | A/B test meta descriptions for CTR optimization              | Monthly   |
| 27  | Audit and fix broken links                                   | Monthly   |
| 28  | Update blog content and service page copy seasonally         | Quarterly |

---

## Quick Reference: Next.js SEO Files

| File                                      | Purpose                                 |
| ----------------------------------------- | --------------------------------------- |
| `app/layout.tsx`                          | Root metadata, Organization JSON-LD     |
| `app/page.tsx`                            | Homepage metadata, WebSite JSON-LD      |
| `app/sitemap.ts`                          | Dynamic sitemap generation              |
| `app/robots.ts`                           | Robots directives                       |
| `app/manifest.ts`                         | PWA manifest                            |
| `app/not-found.tsx`                       | Custom 404 page                         |
| `app/services/[slug]/page.tsx`            | Per-service metadata + JSON-LD          |
| `app/services/[slug]/opengraph-image.tsx` | Dynamic OG image generation             |
| `lib/seo-data.ts`                         | Centralized SEO keywords & descriptions |
| `next.config.mjs`                         | Security headers, image config          |

---

## Google's Key Advice (Summary)

From the **Google SEO Starter Guide** (developers.google.com/search):

1. **Create compelling, useful content** — This matters more than any technical trick.
2. **Use descriptive titles** — Each page should have a unique, descriptive `<title>`.
3. **Write good meta descriptions** — Short, unique, includes relevant points of the page.
4. **Use descriptive URLs** — `/services/web-software-development` > `/services/1`.
5. **Add structured data (JSON-LD)** — Enables rich snippets in search results.
6. **Use descriptive alt text for images** — Helps Google understand your images.
7. **Link to relevant resources** — Internal and external links add context.
8. **Submit a sitemap** — Helps Google discover your pages.
9. **Don't worry about keyword stuffing** — Write naturally, don't repeat keywords excessively.
10. **Google doesn't use `<meta name="keywords">`** for ranking — but other engines do.
11. **Content length doesn't matter** for ranking — quality over quantity.
12. **E-E-A-T is NOT a ranking factor** — but helpful, reliable content is.
13. **Focus on mobile** — Google uses mobile-first indexing.

---

## Estimated Impact

After implementing Phases 1-2 (2-3 weeks of work):

- Service pages will appear in Google's index (currently they may not be found via sitemap)
- Rich FAQ snippets will appear in search results (3-6 months to show)
- Kenya-specific searches will start matching your pages
- Click-through rates will improve from better titles and descriptions

After Phases 3-4 (3-6 months):

- Blog content will capture informational searches
- Google Business Profile will capture local intent
- Core Web Vitals improvements will boost ranking signals
- Organic traffic should increase significantly

---

_Document created: March 2026_  
_For: Astraque Softwares (astraque.com)_
