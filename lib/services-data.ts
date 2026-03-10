export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  features: { title: string; description: string }[];
  techStack: string[];
  process: { step: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

export const servicesData: Record<string, ServicePageData> = {
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Beautiful interfaces that users love",
    description:
      "We craft pixel-perfect, user-centered designs that look stunning and convert. From wireframes to high-fidelity prototypes, our design process ensures every interaction feels intuitive and every screen tells your brand story.",
    accentColor: "#F24E1E",
    features: [
      {
        title: "User Research & Personas",
        description:
          "We study your target audience to design interfaces that match real user behavior and expectations.",
      },
      {
        title: "Wireframing & Prototyping",
        description:
          "Interactive prototypes in Figma that let you experience the product before a single line of code is written.",
      },
      {
        title: "Design Systems",
        description:
          "Scalable component libraries and style guides that keep your product visually consistent as it grows.",
      },
      {
        title: "Responsive Design",
        description:
          "Layouts that look and work perfectly across all devices — desktop, tablet, and mobile.",
      },
      {
        title: "Usability Testing",
        description:
          "We validate designs with real users to catch friction points early and iterate fast.",
      },
      {
        title: "Brand Identity Integration",
        description:
          "Your visual identity woven into every screen — colors, typography, iconography, and tone.",
      },
    ],
    techStack: ["Figma", "Adobe XD", "Framer", "Principle", "Miro", "FigJam"],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "Understand your brand, users, and business goals through research and stakeholder interviews.",
      },
      {
        step: "02",
        title: "Wireframes",
        description:
          "Map out the information architecture and user flows with low-fidelity wireframes.",
      },
      {
        step: "03",
        title: "Visual Design",
        description:
          "Create high-fidelity mockups with your brand colors, typography, and imagery.",
      },
      {
        step: "04",
        title: "Prototype & Test",
        description:
          "Build interactive prototypes, test with users, and iterate until it feels right.",
      },
    ],
    faq: [
      {
        question: "How long does a typical design project take?",
        answer:
          "Most projects take 2–6 weeks depending on scope. A simple landing page design might be 1 week, while a full app design system can take 4–6 weeks.",
      },
      {
        question: "Do you provide the source Figma files?",
        answer:
          "Yes, you get full ownership of all design files, components, and assets we produce.",
      },
      {
        question: "Can you redesign an existing product?",
        answer:
          "Absolutely. We do both greenfield designs and redesigns of existing products with a fresh perspective.",
      },
    ],
  },

  "web-software-development": {
    slug: "web-software-development",
    title: "Web & Software Development",
    subtitle: "Full-stack solutions built with modern tech",
    description:
      "From landing pages to complex SaaS platforms, we build production-grade software using React, Next.js, Node.js, and modern cloud infrastructure. Clean code, fast performance, and scalable architecture — every time.",
    accentColor: "#61DAFB",
    features: [
      {
        title: "Custom Web Applications",
        description:
          "Tailored web apps built from scratch to match your exact business requirements and workflows.",
      },
      {
        title: "API Development & Integration",
        description:
          "RESTful and GraphQL APIs that connect your systems, third-party services, and data sources seamlessly.",
      },
      {
        title: "Progressive Web Apps",
        description:
          "Web apps that feel native — offline support, push notifications, and installable on any device.",
      },
      {
        title: "Database Architecture",
        description:
          "Optimized database design using PostgreSQL, MongoDB, or Supabase for reliable data management.",
      },
      {
        title: "Performance Optimization",
        description:
          "Sub-second load times through code splitting, caching, CDN setup, and server-side rendering.",
      },
      {
        title: "Testing & QA",
        description:
          "Comprehensive testing with Jest, Cypress, and manual QA to ensure rock-solid reliability.",
      },
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Supabase",
      "Prisma",
      "Docker",
      "AWS",
      "Vercel",
    ],
    process: [
      {
        step: "01",
        title: "Requirements",
        description:
          "Deep-dive into your requirements, user stories, and technical constraints.",
      },
      {
        step: "02",
        title: "Architecture",
        description:
          "Design the system architecture, database schema, and API contracts.",
      },
      {
        step: "03",
        title: "Development",
        description:
          "Agile sprints with regular demos — you see progress every week.",
      },
      {
        step: "04",
        title: "Launch & Support",
        description:
          "Deploy to production, monitor performance, and provide ongoing support.",
      },
    ],
    faq: [
      {
        question: "What technologies do you use?",
        answer:
          "Our primary stack is React/Next.js with TypeScript on the frontend and Node.js with PostgreSQL on the backend. We adapt based on project needs.",
      },
      {
        question: "Do you work with existing codebases?",
        answer:
          "Yes. We can pick up existing projects, refactor legacy code, or add new features to your current platform.",
      },
      {
        question: "How do you handle project management?",
        answer:
          "We use agile methodologies with weekly sprints, standups, and transparent progress tracking via tools like Linear or Jira.",
      },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Apps your users will love to open",
    description:
      "We build native and cross-platform mobile apps for iOS and Android that are fast, reliable, and beautiful. Using Flutter and React Native, we deliver apps that feel native on both platforms from a single codebase.",
    accentColor: "#34D399",
    features: [
      {
        title: "Cross-Platform Development",
        description:
          "One codebase, two platforms. Flutter and React Native let us ship to iOS and Android simultaneously.",
      },
      {
        title: "Native Performance",
        description:
          "Optimized rendering, smooth animations, and platform-specific behaviors for a truly native feel.",
      },
      {
        title: "Offline-First Architecture",
        description:
          "Apps that work without internet using local storage, sync queues, and background synchronization.",
      },
      {
        title: "Push Notifications",
        description:
          "Targeted push notifications via Firebase Cloud Messaging to keep users engaged and informed.",
      },
      {
        title: "App Store Deployment",
        description:
          "Full handling of Apple App Store and Google Play Store submissions, reviews, and updates.",
      },
      {
        title: "In-App Payments",
        description:
          "Secure payment integration with Stripe, M-Pesa, Google Pay, and Apple Pay.",
      },
    ],
    techStack: [
      "Flutter",
      "React Native",
      "Dart",
      "Firebase",
      "Supabase",
      "Expo",
      "Swift",
      "Kotlin",
    ],
    process: [
      {
        step: "01",
        title: "Concept & Design",
        description:
          "Define the app concept, user flows, and create high-fidelity mobile UI designs.",
      },
      {
        step: "02",
        title: "Development",
        description:
          "Build the app with a focus on performance, smooth UX, and platform guidelines.",
      },
      {
        step: "03",
        title: "Testing",
        description:
          "Device testing across multiple screen sizes, OS versions, and network conditions.",
      },
      {
        step: "04",
        title: "Launch",
        description:
          "Submit to app stores, handle review processes, and plan your launch strategy.",
      },
    ],
    faq: [
      {
        question: "Flutter or React Native — which should I choose?",
        answer:
          "Flutter is great for complex UIs with custom animations. React Native is ideal if you already have a React web app. We'll recommend the best fit.",
      },
      {
        question: "Can you maintain the app after launch?",
        answer:
          "Yes. We offer ongoing maintenance plans for bug fixes, OS updates, new features, and performance improvements.",
      },
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "A typical MVP takes 6–12 weeks. More complex apps with advanced features can take 3–6 months.",
      },
    ],
  },

  "ecommerce-solutions": {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    subtitle: "Online stores that drive sales",
    description:
      "We build complete e-commerce platforms tailored to your business — from product catalogs and cart systems to payment gateways and order management. Whether it's a boutique shop or a large-scale marketplace, we deliver stores that convert.",
    accentColor: "#FF5733",
    features: [
      {
        title: "Custom Storefronts",
        description:
          "Bespoke shopping experiences designed to showcase your products and maximize conversions.",
      },
      {
        title: "Payment Integration",
        description:
          "Secure payment processing with M-Pesa, Stripe, PayPal, credit cards, and local payment methods.",
      },
      {
        title: "Inventory Management",
        description:
          "Real-time stock tracking, automated reorder alerts, and multi-warehouse support.",
      },
      {
        title: "Order & Shipping",
        description:
          "Automated order processing, shipping calculators, tracking numbers, and delivery notifications.",
      },
      {
        title: "Product Analytics",
        description:
          "Sales dashboards, conversion tracking, and customer behavior insights to optimize your store.",
      },
      {
        title: "Multi-Channel Selling",
        description:
          "Sell across your website, social media, and marketplaces from a single management dashboard.",
      },
    ],
    techStack: [
      "Next.js",
      "Shopify",
      "WooCommerce",
      "Stripe",
      "M-Pesa",
      "Supabase",
      "Sanity CMS",
    ],
    process: [
      {
        step: "01",
        title: "Store Planning",
        description:
          "Define your product catalog, pricing strategy, and customer journey.",
      },
      {
        step: "02",
        title: "Design & Build",
        description:
          "Create a branded storefront with smooth checkout flow and mobile optimization.",
      },
      {
        step: "03",
        title: "Payment Setup",
        description:
          "Integrate payment gateways, configure taxes, and set up shipping rules.",
      },
      {
        step: "04",
        title: "Launch & Grow",
        description:
          "Go live, set up analytics, and implement strategies to drive traffic and sales.",
      },
    ],
    faq: [
      {
        question: "Do you build custom stores or use platforms like Shopify?",
        answer:
          "Both. We build fully custom stores for unique requirements, and also work with Shopify/WooCommerce for faster launches.",
      },
      {
        question: "Can you integrate M-Pesa?",
        answer:
          "Yes, M-Pesa integration is one of our core offerings for East African businesses.",
      },
      {
        question: "Do you help with product photography?",
        answer:
          "We can guide you on product photography best practices and recommend partners for professional shoots.",
      },
    ],
  },

  "business-systems": {
    slug: "business-systems",
    title: "Business Systems",
    subtitle: "Software that runs your operations",
    description:
      "We build custom CRM, ERP, and internal tools that automate your business processes. From inventory management to HR systems, our solutions eliminate manual work and give you real-time visibility into your operations.",
    accentColor: "#EAB308",
    features: [
      {
        title: "Custom CRM Solutions",
        description:
          "Manage leads, clients, and sales pipelines with a CRM tailored to your business workflow.",
      },
      {
        title: "ERP Systems",
        description:
          "Unified systems for finance, inventory, HR, procurement, and project management.",
      },
      {
        title: "Workflow Automation",
        description:
          "Automate repetitive tasks — approvals, notifications, report generation, and data entry.",
      },
      {
        title: "Real-Time Dashboards",
        description:
          "Live dashboards that give leadership instant visibility into KPIs and operational metrics.",
      },
      {
        title: "Role-Based Access",
        description:
          "Granular permission systems that control who sees and does what across your organization.",
      },
      {
        title: "Integration Hub",
        description:
          "Connect your business systems with accounting software, banks, email, and third-party APIs.",
      },
    ],
    techStack: [
      "Odoo",
      "Next.js",
      "PostgreSQL",
      "Python",
      "Node.js",
      "Supabase",
      "Power BI",
    ],
    process: [
      {
        step: "01",
        title: "Process Audit",
        description:
          "Map your current business processes and identify bottlenecks and automation opportunities.",
      },
      {
        step: "02",
        title: "System Design",
        description:
          "Design the system architecture, data models, and user roles.",
      },
      {
        step: "03",
        title: "Build & Configure",
        description:
          "Develop the system with iterative feedback loops and staff training.",
      },
      {
        step: "04",
        title: "Deploy & Optimize",
        description:
          "Roll out the system, migrate data, and continuously optimize based on usage.",
      },
    ],
    faq: [
      {
        question: "Can you customize Odoo for our business?",
        answer:
          "Yes, we're experienced Odoo implementers. We customize modules, build new ones, and handle full deployments.",
      },
      {
        question: "How do you handle data migration?",
        answer:
          "We plan and execute data migration carefully — mapping fields, cleaning data, and running test imports before going live.",
      },
      {
        question: "Do you provide staff training?",
        answer:
          "Absolutely. We train your team on the new system and provide documentation and video guides.",
      },
    ],
  },

  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    subtitle: "Infrastructure that scales with you",
    description:
      "We set up and manage cloud infrastructure, CI/CD pipelines, and deployment automation so your team can ship faster and sleep better. AWS, Azure, GCP, Docker, Kubernetes — we handle the ops so you can focus on the product.",
    accentColor: "#A78BFA",
    features: [
      {
        title: "Cloud Architecture",
        description:
          "Design and implement scalable, cost-effective infrastructure on AWS, Azure, or GCP.",
      },
      {
        title: "CI/CD Pipelines",
        description:
          "Automated build, test, and deploy pipelines that ship code to production safely and quickly.",
      },
      {
        title: "Container Orchestration",
        description:
          "Docker and Kubernetes setups for consistent, portable deployments across environments.",
      },
      {
        title: "Infrastructure as Code",
        description:
          "Terraform and Pulumi configurations that make your entire infrastructure versioned and reproducible.",
      },
      {
        title: "Monitoring & Alerting",
        description:
          "Real-time monitoring with Grafana, Datadog, or CloudWatch — know about issues before your users do.",
      },
      {
        title: "Cost Optimization",
        description:
          "Right-sizing instances, reserved capacity, and architecture reviews to cut your cloud bill.",
      },
    ],
    techStack: [
      "AWS",
      "Azure",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Grafana",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description:
          "Audit your current infrastructure, identify risks, and define scalability requirements.",
      },
      {
        step: "02",
        title: "Architecture",
        description:
          "Design a cloud-native architecture with high availability and disaster recovery.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Set up infrastructure, pipelines, and monitoring with zero-downtime migration.",
      },
      {
        step: "04",
        title: "Handoff & Support",
        description:
          "Document everything, train your team, and provide ongoing support.",
      },
    ],
    faq: [
      {
        question: "We're on a VPS — should we move to cloud?",
        answer:
          "It depends on your scale. We can assess your needs and recommend the most cost-effective approach, whether that's staying on a VPS or migrating to cloud.",
      },
      {
        question: "Can you manage our infrastructure ongoing?",
        answer:
          "Yes, we offer managed infrastructure services with 24/7 monitoring and incident response.",
      },
      {
        question: "Do you support multi-cloud setups?",
        answer:
          "Yes. We can architect solutions that span multiple cloud providers for redundancy and vendor flexibility.",
      },
    ],
  },

  "quick-launch-platforms": {
    slug: "quick-launch-platforms",
    title: "Quick-Launch Platforms",
    subtitle: "Professional websites, launched fast",
    description:
      "Need a professional website without months of development? We build polished sites using WordPress, Webflow, and other platforms that get you online quickly without compromising on quality or design.",
    accentColor: "#0073AA",
    features: [
      {
        title: "WordPress Development",
        description:
          "Custom WordPress themes and plugins tailored to your brand and content needs.",
      },
      {
        title: "Webflow Sites",
        description:
          "Visually designed, CMS-powered websites with clean code and fast performance.",
      },
      {
        title: "Content Management",
        description:
          "Easy-to-use CMS setup so your team can update content without developer help.",
      },
      {
        title: "SEO-Ready Setup",
        description:
          "On-page SEO, meta tags, sitemaps, and structured data configured from day one.",
      },
      {
        title: "Contact & Lead Forms",
        description:
          "Built-in forms with email notifications, CRM integration, and spam protection.",
      },
      {
        title: "Analytics Integration",
        description:
          "Google Analytics, Search Console, and conversion tracking set up and ready to go.",
      },
    ],
    techStack: [
      "WordPress",
      "Webflow",
      "Elementor",
      "WooCommerce",
      "Yoast SEO",
      "Google Analytics",
    ],
    process: [
      {
        step: "01",
        title: "Content & Goals",
        description:
          "Gather your content, define your goals, and choose the right platform.",
      },
      {
        step: "02",
        title: "Design",
        description:
          "Create a custom design that matches your brand on your chosen platform.",
      },
      {
        step: "03",
        title: "Build & Content",
        description:
          "Develop the site, populate content, and configure all integrations.",
      },
      {
        step: "04",
        title: "Launch",
        description:
          "Test everything, optimize speed, and go live with confidence.",
      },
    ],
    faq: [
      {
        question: "WordPress or Webflow — which is better?",
        answer:
          "WordPress is better for blogs, WooCommerce stores, and extensibility. Webflow is great for design-heavy marketing sites. We'll help you choose.",
      },
      {
        question: "How fast can you build a site?",
        answer:
          "A standard business website can be live in 1–2 weeks. More complex sites take 3–4 weeks.",
      },
      {
        question: "Can I update the site myself?",
        answer:
          "Yes, that's the whole point. We set up an intuitive CMS and train you on how to manage your content.",
      },
    ],
  },

  "digital-growth-seo": {
    slug: "digital-growth-seo",
    title: "Digital Growth & SEO",
    subtitle: "Get found. Get traffic. Get results.",
    description:
      "We optimize your digital presence for search engines and growth. From technical SEO and content strategy to performance audits and analytics, we help you rank higher, attract more visitors, and convert them into customers.",
    accentColor: "#4285F4",
    features: [
      {
        title: "Technical SEO Audit",
        description:
          "Deep-dive into your site's technical health — crawlability, indexing, speed, and structured data.",
      },
      {
        title: "On-Page Optimization",
        description:
          "Keyword research, meta tags, heading structure, and content optimization for target queries.",
      },
      {
        title: "Performance Tuning",
        description:
          "Core Web Vitals optimization — LCP, FID, CLS improvements for better rankings and UX.",
      },
      {
        title: "Content Strategy",
        description:
          "Data-driven content plans that target high-intent keywords your audience is searching for.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Custom dashboards with traffic, rankings, conversions, and ROI tracking.",
      },
      {
        title: "Local SEO",
        description:
          "Google Business Profile optimization, local citations, and map pack visibility for local businesses.",
      },
    ],
    techStack: [
      "Google Search Console",
      "Google Analytics",
      "Ahrefs",
      "Screaming Frog",
      "Lighthouse",
      "Schema.org",
    ],
    process: [
      {
        step: "01",
        title: "Audit",
        description:
          "Comprehensive technical and content audit to identify gaps and opportunities.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "Build a prioritized roadmap of optimizations ranked by impact and effort.",
      },
      {
        step: "03",
        title: "Implement",
        description:
          "Execute technical fixes, content updates, and on-page optimizations.",
      },
      {
        step: "04",
        title: "Track & Iterate",
        description:
          "Monitor rankings, traffic, and conversions — adjust strategy based on data.",
      },
    ],
    faq: [
      {
        question: "How long before I see SEO results?",
        answer:
          "SEO is a long game. You'll typically see improvements in 3–6 months, with significant results in 6–12 months.",
      },
      {
        question: "Do you guarantee first page rankings?",
        answer:
          "No honest SEO provider can guarantee rankings. We focus on best practices that consistently produce results.",
      },
      {
        question: "Do you handle content writing?",
        answer:
          "We can create content briefs and optimize existing content. For writing, we work with trusted copywriters or your team.",
      },
    ],
  },

  "cybersecurity-compliance": {
    slug: "cybersecurity-compliance",
    title: "Cybersecurity & Compliance",
    subtitle: "Protect your business and your users",
    description:
      "We secure your applications, infrastructure, and data with industry-standard practices. From security audits and penetration testing to compliance consulting, we make sure your systems are hardened against threats.",
    accentColor: "#22D3EE",
    features: [
      {
        title: "Security Audits",
        description:
          "Comprehensive reviews of your codebase, infrastructure, and configurations for vulnerabilities.",
      },
      {
        title: "Penetration Testing",
        description:
          "Simulated attacks on your systems to discover and fix weaknesses before bad actors do.",
      },
      {
        title: "SSL & Encryption",
        description:
          "End-to-end encryption setup, SSL certificate management, and secure data storage.",
      },
      {
        title: "Access Control",
        description:
          "Implement robust authentication (OAuth, 2FA, SSO) and role-based access control.",
      },
      {
        title: "Compliance Consulting",
        description:
          "Guidance on GDPR, PCI-DSS, SOC 2, and data protection regulations relevant to your business.",
      },
      {
        title: "Incident Response",
        description:
          "Security incident playbooks, logging, and response procedures to minimize damage from breaches.",
      },
    ],
    techStack: [
      "OWASP",
      "Burp Suite",
      "SonarQube",
      "Cloudflare",
      "Auth0",
      "Vault",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description:
          "Evaluate your current security posture and identify critical vulnerabilities.",
      },
      {
        step: "02",
        title: "Remediation Plan",
        description:
          "Prioritize fixes based on risk severity and create a detailed remediation roadmap.",
      },
      {
        step: "03",
        title: "Implement Fixes",
        description:
          "Patch vulnerabilities, harden configurations, and implement security controls.",
      },
      {
        step: "04",
        title: "Ongoing Monitoring",
        description:
          "Set up continuous security monitoring, alerts, and regular reassessments.",
      },
    ],
    faq: [
      {
        question: "Do we really need a security audit?",
        answer:
          "If you handle user data, payments, or sensitive information — yes. A breach is far more expensive than prevention.",
      },
      {
        question: "What compliance standards do you cover?",
        answer:
          "We help with GDPR, PCI-DSS, SOC 2, and Kenya's Data Protection Act. We can advise on what applies to you.",
      },
      {
        question: "Can you secure an existing application?",
        answer:
          "Yes. We audit and remediate existing applications regardless of the tech stack.",
      },
    ],
  },

  "it-support-maintenance": {
    slug: "it-support-maintenance",
    title: "IT Support & Maintenance",
    subtitle: "Keep your systems running smoothly",
    description:
      "We provide ongoing technical support, system monitoring, bug fixes, and software updates so your business never misses a beat. Think of us as your outsourced IT team — always on, always responsive.",
    accentColor: "#FB923C",
    features: [
      {
        title: "24/7 System Monitoring",
        description:
          "Round-the-clock monitoring of your servers, applications, and services with automated alerting.",
      },
      {
        title: "Bug Fixes & Patches",
        description:
          "Rapid diagnosis and resolution of software bugs, security patches, and performance issues.",
      },
      {
        title: "Software Updates",
        description:
          "Keep your dependencies, CMS, plugins, and frameworks up to date and secure.",
      },
      {
        title: "Backup & Recovery",
        description:
          "Automated backups with tested recovery procedures so you never lose critical data.",
      },
      {
        title: "Performance Monitoring",
        description:
          "Track response times, uptime, and resource usage to catch problems before they affect users.",
      },
      {
        title: "Help Desk Support",
        description:
          "Dedicated support channels for your team with SLA-backed response times.",
      },
    ],
    techStack: [
      "Uptime Robot",
      "Grafana",
      "Sentry",
      "PagerDuty",
      "GitHub",
      "Linux",
    ],
    process: [
      {
        step: "01",
        title: "Onboarding",
        description:
          "Audit your systems, document architecture, and set up monitoring and access.",
      },
      {
        step: "02",
        title: "Support Plan",
        description:
          "Define SLAs, communication channels, and escalation procedures.",
      },
      {
        step: "03",
        title: "Active Support",
        description:
          "Ongoing monitoring, ticket resolution, and proactive maintenance.",
      },
      {
        step: "04",
        title: "Reporting",
        description:
          "Monthly reports on uptime, incidents resolved, and system health.",
      },
    ],
    faq: [
      {
        question: "What are your support hours?",
        answer:
          "We offer flexible plans — business hours (Mon–Fri) or 24/7 support depending on your needs.",
      },
      {
        question: "Do you support systems you didn't build?",
        answer:
          "Yes. We take over maintenance of existing systems regardless of who built them.",
      },
      {
        question: "How fast do you respond to issues?",
        answer:
          "Critical issues are acknowledged within 1 hour. Standard requests within 4 business hours.",
      },
    ],
  },

  "data-analytics": {
    slug: "data-analytics",
    title: "Data & Analytics",
    subtitle: "Turn data into decisions",
    description:
      "We build custom dashboards, reporting tools, and data pipelines that transform raw data into clear, actionable insights. Whether it's sales metrics, user behavior, or operational KPIs — we make your data work for you.",
    accentColor: "#E879F9",
    features: [
      {
        title: "Custom Dashboards",
        description:
          "Interactive, real-time dashboards built with your specific KPIs and metrics in mind.",
      },
      {
        title: "Data Pipelines",
        description:
          "Automated ETL pipelines that collect, transform, and load data from multiple sources.",
      },
      {
        title: "Business Intelligence",
        description:
          "Reports and visualizations that help leadership make informed, data-driven decisions.",
      },
      {
        title: "User Analytics",
        description:
          "Track user behavior, engagement funnels, and conversion paths across your digital products.",
      },
      {
        title: "Predictive Analytics",
        description:
          "Machine learning models for forecasting trends, churn prediction, and demand planning.",
      },
      {
        title: "Data Visualization",
        description:
          "Clear, compelling charts and interactive graphics that make complex data easy to understand.",
      },
    ],
    techStack: [
      "Python",
      "Power BI",
      "Metabase",
      "PostgreSQL",
      "BigQuery",
      "Apache Airflow",
      "Pandas",
    ],
    process: [
      {
        step: "01",
        title: "Data Audit",
        description:
          "Assess your existing data sources, quality, and current reporting capabilities.",
      },
      {
        step: "02",
        title: "Pipeline Design",
        description:
          "Design data flows, transformations, and the analytics architecture.",
      },
      {
        step: "03",
        title: "Build Dashboards",
        description:
          "Create interactive dashboards and reports tailored to each stakeholder group.",
      },
      {
        step: "04",
        title: "Train & Iterate",
        description:
          "Train your team to use the tools and refine based on feedback.",
      },
    ],
    faq: [
      {
        question: "What tools do you use for dashboards?",
        answer:
          "Depends on your needs — Power BI for enterprise, Metabase for open-source, or custom-built dashboards with React and D3.",
      },
      {
        question: "Can you work with our existing data?",
        answer:
          "Yes. We connect to databases, APIs, spreadsheets, and third-party services to unify your data.",
      },
      {
        question: "Do you build AI/ML models?",
        answer:
          "Yes, we build practical ML models for forecasting, classification, and recommendation systems.",
      },
    ],
  },

  "cloud-hosting-migration": {
    slug: "cloud-hosting-migration",
    title: "Cloud Hosting & Migration",
    subtitle: "Reliable hosting, seamless migrations",
    description:
      "We provide managed cloud hosting and handle seamless migrations from legacy infrastructure to modern cloud platforms. Zero downtime, better performance, and reduced costs — that's the promise.",
    accentColor: "#38BDF8",
    features: [
      {
        title: "Managed Hosting",
        description:
          "Fully managed cloud servers with automated backups, SSL, and security updates.",
      },
      {
        title: "Zero-Downtime Migration",
        description:
          "Move your websites, apps, and databases to new infrastructure without any service interruption.",
      },
      {
        title: "Domain & DNS Management",
        description:
          "Domain transfers, DNS configuration, and email routing handled professionally.",
      },
      {
        title: "Auto-Scaling",
        description:
          "Infrastructure that automatically scales up during traffic spikes and scales down to save costs.",
      },
      {
        title: "CDN Setup",
        description:
          "Global content delivery networks for fast load times regardless of visitor location.",
      },
      {
        title: "Disaster Recovery",
        description:
          "Multi-region backups and failover configurations to keep your business online no matter what.",
      },
    ],
    techStack: [
      "AWS",
      "Vercel",
      "DigitalOcean",
      "Cloudflare",
      "Nginx",
      "Docker",
      "Let's Encrypt",
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description:
          "Evaluate your current hosting, traffic patterns, and performance requirements.",
      },
      {
        step: "02",
        title: "Migration Plan",
        description:
          "Create a detailed migration plan with rollback procedures and timeline.",
      },
      {
        step: "03",
        title: "Execute Migration",
        description:
          "Migrate data, configure servers, and switch DNS with zero downtime.",
      },
      {
        step: "04",
        title: "Optimize & Monitor",
        description:
          "Fine-tune performance, set up monitoring, and ensure everything runs smoothly.",
      },
    ],
    faq: [
      {
        question: "Will my site go down during migration?",
        answer:
          "No. We use techniques like DNS pre-propagation and parallel environments to ensure zero downtime.",
      },
      {
        question: "What hosting providers do you work with?",
        answer:
          "AWS, DigitalOcean, Vercel, Hetzner, and more. We recommend the best fit based on your needs and budget.",
      },
      {
        question: "Can you migrate from shared hosting?",
        answer:
          "Yes, migrating from shared hosting to cloud is one of our most common services. We handle everything.",
      },
    ],
  },
};

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return servicesData[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
