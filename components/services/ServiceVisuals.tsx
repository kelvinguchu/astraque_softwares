import {
  IconBrandWordpress,
  IconBrandGoogle,
  IconCode,
  IconDatabase,
  IconShoppingCart,
  IconBrandFigma,
  IconDeviceMobile,
  IconCloud,
  IconBrandGithub,
  IconHeadset,
  IconShieldCheck,
  IconChartBar,
} from "@tabler/icons-react";

/* ------------------------------------------------------------------ */
/* Service visual components — each renders a mini dashboard preview  */
/* ------------------------------------------------------------------ */

export function CodeVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#1a1a1a] to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 flex'>
        <div className='w-full h-full flex flex-col'>
          <div className='flex items-center px-4 py-2 bg-black/20 border-b border-white/5'>
            <div className='flex space-x-2'>
              <div className='w-3 h-3 rounded-full bg-[#FF5F56]' />
              <div className='w-3 h-3 rounded-full bg-[#FFBD2E]' />
              <div className='w-3 h-3 rounded-full bg-[#27C93F]' />
            </div>
            <div className='ml-4 px-3 py-1 rounded-md bg-black/20 text-[10px] text-gray-400'>
              App.tsx
            </div>
          </div>
          <pre className='p-4 text-[10px] md:text-xs font-mono text-gray-300/75 overflow-hidden'>
            <code className='flex flex-col gap-1'>
              <span className='text-blue-400'>
                {"import React from 'react';"}
              </span>
              <span className='text-gray-400'>{"const App = () => {"}</span>
              <span className='text-violet-400 pl-2'>
                {"  const [data, setData] = useState<Data[]>([])"}
              </span>
              <span className='text-emerald-400 pl-2'>
                {"  // Fetch & process data"}
              </span>
              <span className='text-orange-400 pl-2'>
                {"  return <Layout>{/* ... */}</Layout>"}
              </span>
              <span className='text-gray-400'>{"}"}</span>
            </code>
          </pre>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function WordPressVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#0073AA]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3 px-3 py-2 bg-white/5 rounded-lg'>
            <div className='flex items-center space-x-3'>
              <IconBrandWordpress className='w-4 h-4 text-[#0073AA]/50' />
              <div className='text-[10px] text-gray-400'>
                WordPress Dashboard
              </div>
            </div>
            <div className='flex space-x-2'>
              <div className='w-4 h-4 rounded bg-white/10' />
              <div className='w-4 h-4 rounded bg-[#0073AA]/20' />
            </div>
          </div>
          <div className='flex-1 grid grid-cols-4 gap-3'>
            <div className='col-span-1 flex flex-col space-y-2'>
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={`wp-sidebar-${i}`}
                  className='h-6 bg-white/5 rounded'
                />
              ))}
            </div>
            <div className='col-span-3 bg-linear-to-br from-white/5 to-transparent rounded-lg p-3'>
              <div className='grid grid-cols-2 gap-2 h-full'>
                <div className='bg-white/5 rounded-lg' />
                <div className='grid grid-rows-2 gap-2'>
                  <div className='bg-[#0073AA]/10 rounded-lg' />
                  <div className='bg-white/5 rounded-lg' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function DatabaseVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#EAB308]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3 px-3 py-2 bg-white/5 rounded-t-lg border-b border-white/5'>
            <div className='text-[10px] text-gray-400'>Database Schema</div>
            <div className='flex items-center space-x-2'>
              <div className='w-4 h-4 rounded bg-[#EAB308]/20' />
              <div className='w-4 h-4 rounded bg-white/10' />
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-3'>
            <div className='flex flex-col space-y-1'>
              <div className='h-6 bg-white/5 rounded' />
              {Array.from({ length: 4 }, (_, i) => (
                <div key={`db-left-${i}`} className='h-4 bg-white/3 rounded' />
              ))}
            </div>
            <div className='flex flex-col space-y-1'>
              <div className='h-6 bg-[#EAB308]/10 rounded' />
              {Array.from({ length: 4 }, (_, i) => (
                <div key={`db-right-${i}`} className='h-4 bg-white/3 rounded' />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function EcommerceVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#FF5733]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-3'>
              <IconShoppingCart className='w-4 h-4 text-[#FF5733]/50' />
              <div className='text-[10px] text-gray-400'>Store Dashboard</div>
            </div>
            <div className='px-2 py-1 rounded bg-[#FF5733]/20 text-[10px] text-[#FF5733]'>
              Live
            </div>
          </div>
          <div className='flex-1 grid grid-cols-3 gap-3'>
            <div className='col-span-2 grid grid-rows-2 gap-3'>
              <div className='bg-white/5 rounded-lg p-2'>
                <div className='w-1/3 h-2 bg-white/10 rounded mb-2' />
                <div className='w-1/2 h-2 bg-[#FF5733]/20 rounded' />
              </div>
              <div className='grid grid-cols-2 gap-3'>
                <div className='bg-white/5 rounded-lg' />
                <div className='bg-white/5 rounded-lg' />
              </div>
            </div>
            <div className='bg-linear-to-br from-white/5 to-transparent rounded-lg' />
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function SEOVisual() {
  const barHeights = [65, 80, 45, 90, 60, 75];

  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#4285F4]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-3'>
              <IconBrandGoogle className='w-4 h-4 text-[#4285F4]/50' />
              <div className='text-[10px] text-gray-400'>
                Analytics Dashboard
              </div>
            </div>
            <div className='px-2 py-1 rounded bg-[#4285F4]/20 text-[10px] text-[#4285F4]'>
              Live
            </div>
          </div>
          <div className='flex-1 grid grid-rows-2 gap-3'>
            <div className='grid grid-cols-3 gap-3'>
              {Array.from({ length: 3 }, (_, i) => (
                <div
                  key={`seo-stat-${i}`}
                  className='bg-white/5 rounded-lg p-2'>
                  <div className='w-1/2 h-2 bg-white/10 rounded mb-2' />
                  <div className='w-2/3 h-2 bg-[#4285F4]/20 rounded' />
                </div>
              ))}
            </div>
            <div className='bg-white/5 rounded-lg p-3'>
              <div className='h-full flex items-end space-x-2'>
                {barHeights.map((height) => (
                  <div
                    key={`seo-bar-${height}`}
                    className='w-full bg-[#4285F4]/20 rounded-t'
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function FigmaVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#F24E1E]/20 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3 px-3 py-1.5 bg-white/5 rounded-lg'>
            <div className='flex items-center space-x-2'>
              <div className='w-2 h-2 rounded-full bg-[#F24E1E]' />
              <div className='text-[10px] text-gray-400'>Main</div>
            </div>
            <div className='flex items-center space-x-2'>
              <div className='w-4 h-4 rounded bg-white/10' />
              <div className='w-4 h-4 rounded bg-white/10' />
            </div>
          </div>
          <div className='flex-1 grid grid-cols-12 gap-2'>
            <div className='col-span-3 bg-white/5 rounded-lg' />
            <div className='col-span-6 grid grid-rows-3 gap-2'>
              <div className='bg-white/10 rounded-lg' />
              <div className='bg-[#F24E1E]/20 rounded-lg' />
              <div className='bg-white/5 rounded-lg' />
            </div>
            <div className='col-span-3 grid grid-rows-2 gap-2'>
              <div className='bg-white/5 rounded-lg' />
              <div className='bg-white/10 rounded-lg' />
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function MobileAppVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#34D399]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4 flex items-center justify-center'>
        <div className='w-24 h-full flex flex-col bg-white/5 rounded-2xl border border-white/10 overflow-hidden'>
          <div className='h-2 w-10 mx-auto mt-2 bg-white/10 rounded-full' />
          <div className='flex-1 p-2 flex flex-col gap-1.5 mt-1'>
            <div className='h-12 bg-[#34D399]/15 rounded-lg' />
            <div className='h-3 w-3/4 bg-white/10 rounded' />
            <div className='h-3 w-1/2 bg-white/8 rounded' />
            <div className='flex-1 grid grid-cols-2 gap-1.5 mt-1'>
              <div className='bg-white/5 rounded-lg' />
              <div className='bg-[#34D399]/10 rounded-lg' />
            </div>
          </div>
          <div className='h-6 flex items-center justify-around px-2 border-t border-white/5'>
            <div className='w-3 h-3 rounded-full bg-white/10' />
            <div className='w-3 h-3 rounded-full bg-[#34D399]/30' />
            <div className='w-3 h-3 rounded-full bg-white/10' />
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function CloudVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#38BDF8]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-3'>
              <IconCloud className='w-4 h-4 text-[#38BDF8]/50' />
              <div className='text-[10px] text-gray-400'>
                Cloud Infrastructure
              </div>
            </div>
            <div className='px-2 py-1 rounded bg-[#38BDF8]/20 text-[10px] text-[#38BDF8]'>
              Active
            </div>
          </div>
          <div className='flex-1 grid grid-cols-3 gap-2'>
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={`cloud-node-${i}`}
                className='bg-white/5 rounded-lg p-2 flex flex-col items-center justify-center gap-1'>
                <div
                  className={`w-5 h-5 rounded-full ${i % 2 === 0 ? "bg-[#38BDF8]/20" : "bg-white/10"}`}
                />
                <div className='w-full h-1.5 bg-white/8 rounded' />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function DevOpsVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#A78BFA]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-3'>
              <IconBrandGithub className='w-4 h-4 text-[#A78BFA]/50' />
              <div className='text-[10px] text-gray-400'>CI/CD Pipeline</div>
            </div>
            <div className='px-2 py-1 rounded bg-emerald-500/20 text-[10px] text-emerald-400'>
              Passing
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-2'>
            {["Build", "Test", "Deploy"].map((stage, i) => (
              <div
                key={stage}
                className='flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2'>
                <div
                  className={`w-2.5 h-2.5 rounded-full ${i <= 1 ? "bg-emerald-400" : "bg-[#A78BFA]/50"}`}
                />
                <div className='text-[10px] text-gray-400 flex-1'>{stage}</div>
                <div
                  className={`w-12 h-1.5 rounded-full ${i <= 1 ? "bg-emerald-400/30" : "bg-[#A78BFA]/20"}`}
                />
              </div>
            ))}
            <div className='flex-1 bg-white/3 rounded-lg p-2'>
              <div className='flex gap-1'>
                {Array.from({ length: 12 }, (_, i) => (
                  <div
                    key={`commit-${i}`}
                    className={`flex-1 h-full rounded-sm ${i % 3 === 0 ? "bg-[#A78BFA]/20" : "bg-white/5"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function SupportVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#FB923C]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-3'>
              <IconHeadset className='w-4 h-4 text-[#FB923C]/50' />
              <div className='text-[10px] text-gray-400'>Support Tickets</div>
            </div>
            <div className='px-2 py-1 rounded bg-[#FB923C]/20 text-[10px] text-[#FB923C]'>
              3 Open
            </div>
          </div>
          <div className='flex-1 flex flex-col gap-2'>
            {[
              { status: "Resolved", color: "bg-emerald-400" },
              { status: "In Progress", color: "bg-[#FB923C]" },
              { status: "Open", color: "bg-white/30" },
            ].map((ticket) => (
              <div
                key={ticket.status}
                className='flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2'>
                <div className={`w-2 h-2 rounded-full ${ticket.color}`} />
                <div className='flex-1 h-2 bg-white/8 rounded' />
                <div className='text-[9px] text-gray-500'>{ticket.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function CybersecurityVisual() {
  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#22D3EE]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-3'>
              <IconShieldCheck className='w-4 h-4 text-[#22D3EE]/50' />
              <div className='text-[10px] text-gray-400'>Security Audit</div>
            </div>
            <div className='px-2 py-1 rounded bg-emerald-500/20 text-[10px] text-emerald-400'>
              Secure
            </div>
          </div>
          <div className='flex-1 grid grid-cols-2 gap-2'>
            <div className='flex flex-col gap-2'>
              {["SSL/TLS", "Firewall", "Auth"].map((item) => (
                <div
                  key={item}
                  className='flex items-center gap-2 bg-white/5 rounded-lg px-2 py-1.5'>
                  <div className='w-2 h-2 rounded-full bg-emerald-400' />
                  <div className='text-[9px] text-gray-400'>{item}</div>
                </div>
              ))}
            </div>
            <div className='bg-white/5 rounded-lg p-2 flex flex-col items-center justify-center'>
              <div className='w-10 h-10 rounded-full border-2 border-[#22D3EE]/30 flex items-center justify-center'>
                <div className='text-[10px] font-semibold text-[#22D3EE]'>
                  98%
                </div>
              </div>
              <div className='text-[8px] text-gray-500 mt-1'>Score</div>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

export function AnalyticsVisual() {
  const barData = [30, 55, 40, 70, 85, 60, 90, 75];

  return (
    <div className='relative w-full aspect-video rounded-t-3xl overflow-hidden bg-linear-to-br from-[#E879F9]/10 to-black/40 backdrop-blur-sm'>
      <div className='absolute inset-0 p-4'>
        <div className='h-full flex flex-col'>
          <div className='flex items-center justify-between mb-3'>
            <div className='flex items-center space-x-3'>
              <IconChartBar className='w-4 h-4 text-[#E879F9]/50' />
              <div className='text-[10px] text-gray-400'>Data Analytics</div>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-2 mb-2'>
            <div className='bg-white/5 rounded-lg p-2'>
              <div className='text-[9px] text-gray-500'>Conversions</div>
              <div className='text-sm font-semibold text-[#E879F9]'>+24%</div>
            </div>
            <div className='bg-white/5 rounded-lg p-2'>
              <div className='text-[9px] text-gray-500'>Users</div>
              <div className='text-sm font-semibold text-white/80'>12.4k</div>
            </div>
          </div>
          <div className='flex-1 bg-white/5 rounded-lg p-2'>
            <div className='h-full flex items-end gap-1'>
              {barData.map((h) => (
                <div
                  key={`analytics-bar-${h}`}
                  className='flex-1 bg-[#E879F9]/20 rounded-t'
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent' />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Service item data                                                   */
/* ------------------------------------------------------------------ */

export const serviceItems = [
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Professional interface design using Figma and modern design tools. We create beautiful, intuitive designs that enhance user experience and align with your brand identity.",
    visual: <FigmaVisual />,
    icon: <IconBrandFigma className='h-5 w-5 text-[#F24E1E]' />,
  },
  {
    slug: "web-software-development",
    title: "Web & Software Development",
    description:
      "Full-stack development using modern technologies like React, Next.js, Node.js, and more. We build complete digital solutions from simple websites to complex web applications.",
    visual: <CodeVisual />,
    icon: <IconCode className='h-5 w-5 text-[#61DAFB]' />,
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android. We use Flutter, React Native, and native SDKs to deliver performant apps your users will love.",
    visual: <MobileAppVisual />,
    icon: <IconDeviceMobile className='h-5 w-5 text-[#34D399]' />,
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description:
      "Complete online store setups with everything you need to sell online. From product management to secure payments, we build e-commerce experiences that drive sales.",
    visual: <EcommerceVisual />,
    icon: <IconShoppingCart className='h-5 w-5 text-[#FF5733]' />,
  },
  {
    slug: "business-systems",
    title: "Business Systems",
    description:
      "Custom business software, CRM, and ERP solutions that streamline your operations. Automate workflows, manage data, and boost productivity with tailored software solutions.",
    visual: <DatabaseVisual />,
    icon: <IconDatabase className='h-5 w-5 text-[#EAB308]' />,
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup, CI/CD pipelines, and deployment automation. We help you scale reliably with AWS, Azure, GCP, Docker, and Kubernetes.",
    visual: <DevOpsVisual />,
    icon: <IconBrandGithub className='h-5 w-5 text-[#A78BFA]' />,
  },
  {
    slug: "quick-launch-platforms",
    title: "Quick-Launch Platforms",
    description:
      "Fast, professional website solutions using WordPress and other platforms. Ideal for businesses needing a strong online presence quickly without compromising on quality.",
    visual: <WordPressVisual />,
    icon: <IconBrandWordpress className='h-5 w-5 text-[#0073AA]' />,
  },
  {
    slug: "digital-growth-seo",
    title: "Digital Growth & SEO",
    description:
      "Comprehensive digital presence optimization including SEO, performance tuning, and analytics. Get more visibility, better performance, and data-driven insights.",
    visual: <SEOVisual />,
    icon: <IconBrandGoogle className='h-5 w-5 text-[#4285F4]' />,
  },
  {
    slug: "cybersecurity-compliance",
    title: "Cybersecurity & Compliance",
    description:
      "Security audits, penetration testing, SSL setup, and compliance consulting. We protect your applications and data with industry-standard security practices.",
    visual: <CybersecurityVisual />,
    icon: <IconShieldCheck className='h-5 w-5 text-[#22D3EE]' />,
  },
  {
    slug: "it-support-maintenance",
    title: "IT Support & Maintenance",
    description:
      "Ongoing technical support, bug fixes, server monitoring, and software updates. We keep your systems running smoothly so you can focus on your business.",
    visual: <SupportVisual />,
    icon: <IconHeadset className='h-5 w-5 text-[#FB923C]' />,
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "Custom dashboards, reporting tools, and data pipelines. Turn your raw data into actionable business insights with our analytics and visualization solutions.",
    visual: <AnalyticsVisual />,
    icon: <IconChartBar className='h-5 w-5 text-[#E879F9]' />,
  },
  {
    slug: "cloud-hosting-migration",
    title: "Cloud Hosting & Migration",
    description:
      "Reliable hosting solutions and seamless migration services. We move your existing systems to modern cloud infrastructure with zero downtime.",
    visual: <CloudVisual />,
    icon: <IconCloud className='h-5 w-5 text-[#38BDF8]' />,
  },
] as const;
