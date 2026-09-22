import { createFileRoute } from "@tanstack/react-router";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import Projects from "@/components/projects/Projects";
import { cn } from "@/lib/utils";
import { SITE_URL, canonical, pageTitle } from "@/lib/seo";

const description =
  "Explore our portfolio of web apps, mobile apps, and software projects delivered for businesses in Kenya and beyond.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: pageTitle("Our Projects | Web & Software Portfolio") },
      { name: "description", content: description },
      {
        property: "og:title",
        content: "Our Projects | Astraque Softwares Portfolio",
      },
      { property: "og:description", content: description },
      { property: "og:url", content: `${SITE_URL}/projects` },
    ],
    links: [canonical("/projects")],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
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
}
