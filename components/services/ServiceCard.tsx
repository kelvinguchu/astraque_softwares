"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
  slug: string;
  className?: string;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  icon,
  visual,
  slug,
  className,
  index,
}: Readonly<ServiceCardProps>) {
  return (
    <Link href={`/services/${slug}`} className='block h-full outline-none'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className='h-full'>
        <div
          className={cn(
            "group relative h-full rounded-4xl bg-linear-to-b from-white/4 to-black border border-white/10 overflow-hidden transition-all duration-500",
            "hover:border-violet-500/30 hover:shadow-[0_0_3rem_-1rem_rgba(139,92,246,0.25)] hover:-translate-y-1",
            className,
          )}>
          {/* Animated gradient background on hover */}
          <div className='absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />

          {/* Subtle top/bottom edge highlights */}
          <div className='absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:via-violet-500/50 transition-all duration-500' />
          <div className='absolute inset-x-0 -bottom-px h-px bg-linear-to-r from-transparent via-white/10 to-transparent opacity-30 group-hover:via-violet-500/40 transition-all duration-500' />

          {/* Content Container */}
          <div className='relative flex flex-col h-full z-10'>
            {/* Visual wrapper with scale effect */}
            <div className='relative shrink-0'>
              <div className='transition-transform duration-700 ease-out group-hover:scale-[1.03]'>
                {visual}
              </div>
            </div>

            {/* Text and Icon Content */}
            <div className='relative flex flex-col flex-1 p-6 md:p-8 pt-6'>
              {/* Title and Icon */}
              <div className='flex items-center gap-3 mb-4'>
                <div className='text-violet-400 group-hover:text-violet-300 transition-colors duration-500 group-hover:scale-110 group-hover:-rotate-3'>
                  {icon}
                </div>
                <h3 className='text-xl font-bold text-white/95 tracking-tight transition-colors duration-500 group-hover:text-violet-50'>
                  {title}
                </h3>
              </div>

              <p className='text-[0.9375rem] text-[#8A8A8E] leading-relaxed font-light transition-colors duration-500 group-hover:text-gray-300'>
                {description}
              </p>

              {/* Bottom CTA footer */}
              <div className='mt-auto pt-8'>
                <div className='flex items-center justify-between border-t border-white/5 pt-4 transition-colors duration-500 group-hover:border-violet-500/20'>
                  <span className='text-[0.8rem] font-semibold tracking-widest text-white/40 transition-colors duration-500 group-hover:text-violet-300 uppercase'>
                    Explore service
                  </span>
                  <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-500 group-hover:bg-violet-600 group-hover:border-violet-500 group-hover:scale-110 group-hover:rotate-12'>
                    <IconArrowUpRight className='w-4 h-4 text-white/60 transition-colors duration-500 group-hover:text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
