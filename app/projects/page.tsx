import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Projects from "@/components/projects/Projects";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Web & Software Portfolio",
  description:
    "Explore our portfolio of web apps, mobile apps, and software projects delivered for businesses in Kenya and beyond.",
  alternates: {
    canonical: "https://www.astraque.com/projects",
  },
  openGraph: {
    title: "Our Projects | Astraque Softwares Portfolio",
    description:
      "Explore our portfolio of web apps, mobile apps, and software projects delivered for businesses in Kenya and beyond.",
    url: "https://www.astraque.com/projects",
    siteName: "Astraque Softwares",
    locale: "en_KE",
    type: "website",
  },
};

const ProjectsPage = () => {
  return (
    <div className='-mt-10'>
      <AnimatedGridPattern
        id='projects-grid'
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "mask-[radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-full skew-y-12",
        )}
      />
      <Projects />
    </div>
  );
};

export default ProjectsPage;
