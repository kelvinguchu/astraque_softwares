import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.astraque.com"),
  title: {
    default: "Astraque Softwares | Website & Software Development Solutions",
    template: "%s | Astraque Softwares",
  },
  description:
    "Astraque Softwares — Nairobi-based web development, mobile apps, UI/UX design, SEO & cloud solutions. Trusted by businesses across Kenya.",
  keywords: [
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
  ],
  authors: [{ name: "Astraque Softwares" }],
  creator: "Astraque Softwares",
  publisher: "Astraque Softwares",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Astraque Softwares",
    title: "Astraque Softwares | Web & Software Development Solutions",
    description:
      "Astraque Softwares — Nairobi-based web development, mobile apps, UI/UX design, SEO & cloud solutions. Trusted by businesses across Kenya.",
    locale: "en_KE",
    url: "https://www.astraque.com",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Astraque Softwares - Professional Web & Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Astraque Softwares | Web & Software Development Solutions",
    description:
      "Professional web design, web development, software development, and graphic design services.",
    site: "@astraque_kenya",
    creator: "@astraque_kenya",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Astraque Softwares - Professional Web & Software Development",
      },
    ],
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
  alternates: {
    canonical: "https://www.astraque.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Astraque Softwares",
              url: "https://www.astraque.com",
              logo: "https://www.astraque.com/favicon.png",
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
            }).replaceAll("<", String.raw`\u003c`),
          }}
        />
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-X2F0X3PXRQ'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-X2F0X3PXRQ');
          `}
        </Script>
      </body>
    </html>
  );
}
