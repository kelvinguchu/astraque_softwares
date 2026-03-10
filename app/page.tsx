import HeroReload from "@/components/hero/HeroReload";
import Services from "@/components/services/Services";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Testimonials from "@/components/testimonials/Testimonials";
import Divider from "@/components/shared/Divider";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Astraque Softwares",
  url: "https://www.astraque.com",
  description:
    "Nairobi-based web development, mobile apps, UI/UX design, SEO & cloud solutions.",
  publisher: {
    "@type": "Organization",
    name: "Astraque Softwares",
  },
};

export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between pt-24'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd).replaceAll(
            "<",
            String.raw`\u003c`,
          ),
        }}
      />
      <div className='w-full' style={{ contentVisibility: "auto" }}>
        <HeroReload />
        <section id='services' style={{ minHeight: "100vh" }}>
          <Services />
        </section>
        <Divider />
        <section id='about' style={{ minHeight: "100vh" }}>
          <About />
        </section>
        <Divider />
        <section id='contact' style={{ minHeight: "100vh" }}>
          <Contact />
        </section>
        <Divider />
        <section style={{ minHeight: "100vh" }}>
          <Testimonials />
        </section>
      </div>
    </main>
  );
}
