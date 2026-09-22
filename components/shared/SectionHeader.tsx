import { motion } from "motion/react";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
}

export default function SectionHeader({
  badge,
  title,
  description,
}: Readonly<SectionHeaderProps>) {
  return (
    <div className='text-center mb-16'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='flex flex-col items-center'>
        <div className='inline-block mb-4'>
          <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/8 bg-white/2 backdrop-blur-sm'>
            <div className='w-1 h-1 rounded-full bg-violet-500' />
            <span className='text-[0.9375rem] font-light tracking-wide text-white/70'>
              {badge}
            </span>
            <div className='w-1 h-1 rounded-full bg-indigo-500' />
          </div>
        </div>

        <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
          {title}
        </h2>

        <p className='max-w-2xl mx-auto text-base text-gray-400 font-light'>
          {description}
        </p>

        <div className='mt-6 flex items-center gap-2'>
          <div className='w-8 h-px bg-linear-to-r from-transparent to-violet-500/50' />
          <div className='w-20 h-1 bg-linear-to-r from-violet-500 to-indigo-500 rounded-full' />
          <div className='w-8 h-px bg-linear-to-l from-transparent to-indigo-500/50' />
        </div>
      </motion.div>
    </div>
  );
}
