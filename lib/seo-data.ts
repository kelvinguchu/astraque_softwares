/**
 * Centralized SEO metadata for each service page.
 * Mix of 2 geo-targeted + 3 generic keywords per page.
 * Google already knows our location from JSON-LD structured data,
 * so most searchers will find us without needing "Kenya" in every term.
 */

export interface ServiceSEO {
  title: string;
  description: string;
  keywords: string[];
}

export const serviceSEOData: Record<string, ServiceSEO> = {
  "ui-ux-design": {
    title: "UI/UX Design Services in Kenya",
    description:
      "Professional UI/UX design company in Nairobi. We craft user-centered interfaces using Figma — from wireframes to high-fidelity prototypes that convert.",
    keywords: [
      "UI/UX design Kenya",
      "UX designer Nairobi",
      "Figma design services",
      "user interface design",
      "responsive web design",
    ],
  },

  "web-software-development": {
    title: "Web & Software Development in Kenya",
    description:
      "Custom web and software development company in Nairobi. We build web apps, SaaS platforms and APIs using React, Next.js and Node.js.",
    keywords: [
      "web development company Kenya",
      "software development Nairobi",
      "custom web application",
      "React Next.js developer",
      "SaaS development",
    ],
  },

  "mobile-app-development": {
    title: "Mobile App Development in Kenya",
    description:
      "Mobile app development company in Nairobi. We build cross-platform iOS and Android apps using Flutter and React Native, with M-Pesa integration.",
    keywords: [
      "mobile app development Kenya",
      "app developer Nairobi",
      "Flutter development",
      "React Native developer",
      "cross-platform mobile apps",
    ],
  },

  "ecommerce-solutions": {
    title: "E-commerce Website Development in Kenya",
    description:
      "E-commerce development company in Nairobi. Custom online stores with M-Pesa, Stripe and PayPal integration. Shopify, WooCommerce and headless commerce.",
    keywords: [
      "ecommerce development Kenya",
      "online store Nairobi",
      "M-Pesa payment integration",
      "Shopify development",
      "headless commerce",
    ],
  },

  "business-systems": {
    title: "CRM & ERP Business Systems in Kenya",
    description:
      "Custom CRM, ERP and business management systems for Kenyan businesses. Internal tools, dashboards and workflow automation by Astraque Softwares in Nairobi.",
    keywords: [
      "CRM development Kenya",
      "ERP system Nairobi",
      "business management software",
      "workflow automation",
      "custom internal tools",
    ],
  },

  "cloud-devops": {
    title: "Cloud & DevOps Services in Kenya",
    description:
      "Cloud infrastructure and DevOps consulting in Nairobi. AWS, Docker, Kubernetes, CI/CD pipelines and infrastructure-as-code for Kenyan businesses.",
    keywords: [
      "cloud services Kenya",
      "DevOps consulting Nairobi",
      "AWS infrastructure",
      "CI/CD pipeline setup",
      "Docker Kubernetes",
    ],
  },

  "quick-launch-platforms": {
    title: "WordPress & Webflow Development in Kenya",
    description:
      "Professional WordPress and Webflow websites in Nairobi. Fast, SEO-ready, mobile-responsive business websites launched in as little as 1-2 weeks.",
    keywords: [
      "WordPress developer Kenya",
      "Webflow designer Nairobi",
      "business website development",
      "CMS website",
      "affordable web design",
    ],
  },

  "digital-growth-seo": {
    title: "SEO & Digital Marketing in Kenya",
    description:
      "SEO and digital marketing agency in Nairobi. Technical SEO audits, on-page optimization, local SEO and content strategy to grow your organic traffic.",
    keywords: [
      "SEO services Kenya",
      "digital marketing Nairobi",
      "technical SEO audit",
      "search engine optimization",
      "content marketing strategy",
    ],
  },

  "cybersecurity-compliance": {
    title: "Cybersecurity & Compliance in Kenya",
    description:
      "Cybersecurity services in Nairobi. Security audits, penetration testing, SSL setup and Kenya Data Protection Act compliance for businesses.",
    keywords: [
      "cybersecurity services Kenya",
      "penetration testing Nairobi",
      "security audit",
      "data protection compliance",
      "website security",
    ],
  },

  "it-support-maintenance": {
    title: "IT Support & Maintenance in Kenya",
    description:
      "Reliable IT support and website maintenance in Nairobi. 24/7 monitoring, bug fixes, software updates and help desk for Kenyan businesses.",
    keywords: [
      "IT support Kenya",
      "managed IT services Nairobi",
      "website maintenance",
      "server monitoring",
      "IT outsourcing",
    ],
  },

  "data-analytics": {
    title: "Data Analytics & Business Intelligence in Kenya",
    description:
      "Custom data analytics and BI solutions in Nairobi. Dashboards, data pipelines, Power BI consulting and predictive analytics for Kenyan businesses.",
    keywords: [
      "data analytics Kenya",
      "business intelligence Nairobi",
      "Power BI consulting",
      "custom dashboards",
      "data visualization",
    ],
  },

  "cloud-hosting-migration": {
    title: "Cloud Hosting & Migration in Kenya",
    description:
      "Managed cloud hosting and zero-downtime migration in Nairobi. Auto-scaling servers, CDN setup, domain management and disaster recovery.",
    keywords: [
      "cloud hosting Kenya",
      "website migration Nairobi",
      "managed hosting",
      "server migration",
      "CDN setup",
    ],
  },
};

export function getServiceSEO(slug: string): ServiceSEO {
  return (
    serviceSEOData[slug] ?? {
      title: "Professional Technology Services in Kenya",
      description:
        "Technology services from Astraque Softwares, a software development company based in Nairobi, Kenya.",
      keywords: ["software development Kenya", "tech company Nairobi"],
    }
  );
}
