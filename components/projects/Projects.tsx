import { memo } from "react";
import { motion } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "ums-pos",
    title: "UMS POS",
    description: "Stock Management System",
    imgSrc: "/projects/umspos.png",
    link: "https://umskenya.com/",
  },
  {
    id: "aquatreat-pos",
    title: "Aquatreat Solutions POS",
    description: "Stock Management System",
    imgSrc: "/projects/aquapos.png",
    link: "https://aquatreat.co.ke/",
  },
  {
    id: "astraque-portal",
    title: "Astraque Client Portal",
    description: "Client Portal",
    imgSrc: "/projects/astraqueclient.png",
    link: "https://astraque.com/",
  },
  {
    id: "ums-kenya",
    title: "UMS Kenya",
    description: "Website",
    imgSrc: "/projects/umskenya.webp",
    link: "https://umskenya.com/",
  },
  {
    id: "aquatreat",
    title: "Aquatreat Solutions Limited",
    description: "Water Treatment Solutions",
    imgSrc: "/projects/aquatreat.png",
    link: "https://aquatreat.co.ke/",
  },
  {
    id: "scapethru",
    title: "Scapethru Springs Limited",
    description: "Water Supply Solutions",
    imgSrc: "/projects/scapethru.webp",
    link: "https://scapethrusprings.co.ke/",
  },
  {
    id: "njenga-farm",
    title: "Njenga Farm",
    description: "Agricultural Solutions",
    imgSrc: "/projects/njengafarm.webp",
    link: "https://astraque.com/",
  },
  {
    id: "steele-n-allied",
    title: "Steel N Allied",
    description: "Corporate Website",
    imgSrc: "/projects/steelnallied.png",
    link: "https://steelnallied.vercel.app/",
  },
  {
    id: "galactic-electricals",
    title: "Galactic Electricals",
    description: "E-Commerce Solution",
    imgSrc: "/projects/galacticelectricals.png",
    link: "https://galacticelectricals.com/",
  },
  {
    id: "kensmart",
    title: "Kensmart",
    description: "Corporate Website",
    imgSrc: "/projects/kensmart.png",
    link: "https://www.ksmart.co.ke/",
  },
] as const;

function ProjectCard({
  project,
  index,
}: Readonly<{
  project: (typeof projects)[number];
  index: number;
}>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
      viewport={{ once: true }}
      className='h-full'>
      <a
        href={project.link}
        target='_blank'
        rel='noopener noreferrer'
        className='group relative block aspect-video rounded-3xl overflow-hidden bg-[#0d1117] border border-white/10 hover:border-violet-500/40 transition-all duration-500'>
        {/* Gradients */}
        <div className='absolute inset-0 bg-linear-to-b from-transparent via-black/40 to-black z-10 opacity-90 group-hover:opacity-70 transition-opacity duration-500' />
        <div className='absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay' />

        {/* Image */}
        <img
          src={project.imgSrc}
          alt={project.title}
          className='absolute inset-0 w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 z-0'
          loading={index < 4 ? "eager" : "lazy"}
          decoding='async'
        />

        {/* Content */}
        <div className='absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
          <p className='text-violet-400 text-xs font-mono tracking-wider uppercase mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75'>
            {project.description}
          </p>
          <div className='flex items-center justify-between gap-3'>
            <h2 className='text-base sm:text-lg lg:text-xl font-medium text-white/90 tracking-tight whitespace-nowrap min-w-0'>
              {project.title}
            </h2>
            <div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:rotate-45 group-hover:bg-violet-500 group-hover:border-violet-500 transition-all duration-500 shrink-0'>
              <IconArrowUpRight className='w-5 h-5 sm:w-6 sm:h-6 text-white' />
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function Projects() {
  return (
    <section
      id='projects'
      className={cn(
        "min-h-[80vh] pt-36 pb-24 relative overflow-hidden backdrop-blur-sm selection:bg-violet-500/30",
      )}>
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.08),transparent_70%)] pointer-events-none' />
      <div className='w-full relative z-10'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          {/* Header */}
          <div className='text-center mb-20'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='flex flex-col items-center'>
              <h1 className='text-4xl sm:text-6xl font-bold text-white/95 mb-6 tracking-tight'>
                Recent Projects
              </h1>
              <p className='max-w-2xl mx-auto text-lg text-gray-400 font-light leading-relaxed'>
                Explore our portfolio of successful projects, digital
                transformations, and innovative solutions tailored for industry
                leaders.
              </p>
            </motion.div>
          </div>

          {/* Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
