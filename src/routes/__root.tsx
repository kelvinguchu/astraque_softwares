import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
  serializeJsonLd,
} from "@/lib/seo";
import appCss from "../styles.css?url";

const GA_ID = "G-X2F0X3PXRQ";

const defaultTitle = `${SITE_NAME} | Website & Software Development Solutions`;
const socialTitle = `${SITE_NAME} | Web & Software Development Solutions`;
const defaultDescription =
  "Astraque Softwares — Nairobi-based web development, mobile apps, UI/UX design, SEO & cloud solutions. Trusted by businesses across Kenya.";
const ogImageAlt =
  "Astraque Softwares - Professional Web & Software Development";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  sameAs: ["https://x.com/astraque_kenya"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "KE",
    availableLanguage: ["English", "Swahili"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: defaultTitle },
      { name: "description", content: defaultDescription },
      {
        name: "keywords",
        content: [
          "web development company Kenya",
          "software development Nairobi",
          "mobile app developers Kenya",
          "UI/UX design Nairobi",
          "SEO services Kenya",
          "ecommerce development Kenya",
          "IT solutions Nairobi",
          "cloud hosting Kenya",
          "cybersecurity Kenya",
          "Astraque Softwares",
        ].join(", "),
      },
      { name: "author", content: SITE_NAME },
      { name: "creator", content: SITE_NAME },
      { name: "publisher", content: SITE_NAME },
      {
        name: "format-detection",
        content: "telephone=no, address=no, email=no",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "googlebot",
        content:
          "index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: socialTitle },
      { property: "og:description", content: defaultDescription },
      { property: "og:locale", content: "en_KE" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/open-graph.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: ogImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: TWITTER_HANDLE },
      { name: "twitter:creator", content: TWITTER_HANDLE },
      { name: "twitter:title", content: socialTitle },
      {
        name: "twitter:description",
        content:
          "Professional web design, web development, software development, and graphic design services.",
      },
      { name: "twitter:image", content: `${SITE_URL}/open-graph.png` },
      { name: "twitter:image:alt", content: ogImageAlt },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-icon.png" },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
    scripts: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
        async: true,
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `,
      },
    ],
  }),
  component: Outlet,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(organizationJsonLd) }}
        />
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

function NotFound() {
  return (
    <main className='flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 pt-24 text-center'>
      <h1 className='text-4xl font-bold'>Page not found</h1>
      <p className='text-muted-foreground'>
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link to='/' className='text-violet-400 underline underline-offset-4'>
        Back to home
      </Link>
    </main>
  );
}
