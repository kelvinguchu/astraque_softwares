"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import ServiceCard from "./ServiceCard";
import { serviceItems } from "./ServiceVisuals";

export default function Services() {
  return (
    <section
      id='services'
      className={cn("py-6 md:py-8 relative overflow-hidden")}
      style={{
        minHeight: "100vh",
        contentVisibility: "auto",
        containIntrinsicSize: "1px 5000px",
      }}>
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='text-center mb-16' style={{ minHeight: "100px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex flex-col items-center'>
            <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
              Our Services
            </h2>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-px bg-linear-to-r from-transparent to-violet-500/50' />
              <div className='w-20 h-1 bg-linear-to-r from-violet-500 to-indigo-500 rounded-full' />
              <div className='w-8 h-px bg-linear-to-l from-transparent to-indigo-500/50' />
            </div>
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
          {serviceItems.map((item, i) => (
            <ServiceCard
              key={item.title}
              index={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              visual={item.visual}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
