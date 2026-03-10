"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ServicePageData } from "@/lib/services-data";
import {
  IconArrowLeft,
  IconDeviceMobile,
  IconBrandApple,
  IconBrandAndroid,
  IconWifi,
  IconBell,
  IconCreditCard,
  IconArrowUpRight,
} from "@tabler/icons-react";

const featureIcons = [
  IconDeviceMobile,
  IconBrandApple,
  IconWifi,
  IconBell,
  IconBrandAndroid,
  IconCreditCard,
];

export default function MobileAppPage({
  data,
}: Readonly<{ data: ServicePageData }>) {
  return (
    <div className='min-h-screen bg-black text-white selection:bg-[#34D399]/30'>
      {/* Hero */}
      <section className='relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.15),transparent_50%)]' />

        <div className='max-w-7xl mx-auto relative z-10 w-full'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <Link
              href='/#services'
              className='inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-12 group'>
              <IconArrowLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />{" "}
              Back to Services
            </Link>
          </motion.div>

          <div className='flex flex-col-reverse lg:flex-row gap-4 sm:gap-8 lg:gap-16 items-center w-full'>
            <motion.div
              className='flex-1 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20 w-full'
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <h1 className='max-md:text-[clamp(1.5rem,7vw,3rem)] max-md:whitespace-nowrap text-5xl sm:text-7xl font-bold tracking-tight mb-6 pb-2 text-transparent bg-clip-text bg-linear-to-b from-white to-white/60'>
                {data.title}
              </h1>
              <p className='text-xl text-gray-400 leading-relaxed font-light'>
                {data.subtitle}
              </p>
            </motion.div>

            {/* Glowing Floating Phone Visual */}
            <motion.div
              className='flex-1 relative w-full h-80 sm:h-96 lg:h-125 max-w-md flex justify-center items-center perspective-[1000px] shrink-0 mt-6 lg:mt-0 origin-center lg:origin-right'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {/* Outer Phone Frame */}
              <motion.div
                animate={{ y: ["-2%", "2%", "-2%"], rotateY: [-5, 5, -5] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative w-72 h-120 rounded-[3rem] border border-white/10 bg-linear-to-b from-[#111] to-black shadow-[0_0_80px_rgba(52,211,153,0.1)] p-2 backdrop-blur-3xl overflow-hidden'>
                {/* Screen Surface */}
                <div className='relative w-full h-full rounded-[2.5rem] bg-[#050505] border border-white/5 overflow-hidden flex flex-col'>
                  {/* Dynamic Island / Notch */}
                  <div className='absolute top-3 inset-x-0 flex justify-center z-20'>
                    <div className='w-24 h-6 rounded-full bg-black border border-white/5 flex items-center justify-between px-2'>
                      <div className='w-2 h-2 rounded-full bg-[#34D399] animate-pulse blur-[1px]' />
                      <div className='w-12 h-1 rounded-full bg-white/10' />
                    </div>
                  </div>

                  {/* App Content Simulation */}
                  <div className='flex-1 p-5 pt-12 flex flex-col gap-4 relative z-10'>
                    {/* Header */}
                    <div className='flex justify-between items-center mb-2'>
                      <div className='w-20 h-5 rounded-full bg-white/10' />
                      <div className='w-8 h-8 rounded-full bg-[#34D399]/20 flex items-center justify-center border border-[#34D399]/30'>
                        <IconBell className='w-4 h-4 text-[#34D399]' />
                      </div>
                    </div>
                    {/* Hero Widget */}
                    <div className='w-full h-32 rounded-2xl bg-linear-to-br from-[#34D399]/20 to-transparent border border-[#34D399]/10 relative overflow-hidden'>
                      <div className='absolute top-4 left-4 w-12 h-12 rounded-full bg-[#34D399]/30 blur-xl' />
                      <div className='absolute bottom-4 left-4 space-y-2'>
                        <div className='w-24 h-3 rounded-full bg-white/40' />
                        <div className='w-16 h-2 rounded-full bg-white/20' />
                      </div>
                    </div>
                    {/* Grid */}
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='h-24 rounded-2xl bg-white/5 border border-white/5' />
                      <div className='h-24 rounded-2xl bg-white/5 border border-white/5' />
                    </div>
                    {/* List */}
                    <div className='flex-1 space-y-3 mt-2'>
                      <div className='w-full h-12 rounded-xl bg-white/5 flex items-center px-4 gap-3'>
                        <div className='w-6 h-6 rounded-full bg-white/10' />
                        <div className='flex-1 h-2 rounded-full bg-white/5' />
                      </div>
                      <div className='w-full h-12 rounded-xl bg-white/5 flex items-center px-4 gap-3'>
                        <div className='w-6 h-6 rounded-full bg-white/10' />
                        <div className='flex-1 h-2 rounded-full bg-white/5' />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav */}
                  <div className='absolute bottom-0 inset-x-0 h-20 bg-linear-to-t from-black via-black to-transparent flex items-end justify-center pb-8 z-20'>
                    <div className='flex gap-8 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl'>
                      <div className='w-5 h-5 rounded bg-[#34D399]/50' />
                      <div className='w-5 h-5 rounded-full bg-white/20' />
                      <div className='w-5 h-5 rounded-sm bg-white/20' />
                    </div>
                  </div>

                  {/* Ambient Screen Glow */}
                  <div className='absolute inset-0 bg-[#34D399]/5 mix-blend-overlay' />
                </div>

                {/* Edge Highlights */}
                <div className='absolute -left-px top-20 w-px h-12 bg-linear-to-b from-transparent via-white/40 to-transparent' />
                <div className='absolute -left-px top-36 w-px h-16 bg-linear-to-b from-transparent via-white/40 to-transparent' />
                <div className='absolute -right-px top-24 w-px h-20 bg-linear-to-b from-transparent via-white/40 to-transparent' />
              </motion.div>

              {/* Floating notification bubbles */}
              <motion.div
                animate={{ y: ["0%", "-10%", "0%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute top-1/4 -right-4 w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg'>
                <IconBrandApple className='w-6 h-6 text-white/70' />
              </motion.div>
              <motion.div
                animate={{ y: ["0%", "10%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className='absolute bottom-1/3 -left-6 w-14 h-14 rounded-2xl bg-[#34D399]/10 border border-[#34D399]/20 backdrop-blur-md flex items-center justify-center shadow-lg'>
                <IconBrandAndroid className='w-7 h-7 text-[#34D399]' />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className='py-24 px-6 lg:px-8 relative'>
        <div className='max-w-4xl mx-auto text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <IconDeviceMobile className='w-12 h-12 mx-auto text-[#34D399]/50 mb-8' />
            <h2 className='text-3xl sm:text-4xl font-light leading-snug text-white/90'>
              {data.description}
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className='py-20 px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-semibold mb-4 tracking-tight'>
              Capabilities
            </h2>
            <div className='w-24 h-1 bg-linear-to-r from-[#34D399]/50 to-transparent mx-auto rounded-full' />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.features.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className='h-full'>
                  <div className='group relative h-full p-8 rounded-3xl bg-linear-to-b from-white/5 to-black border border-white/10 hover:border-[#34D399]/30 transition-all duration-500 overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-[#34D399]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='relative z-10'>
                      <div className='mb-6 inline-flex p-3 rounded-2xl bg-white/5 group-hover:bg-[#34D399]/10 transition-colors duration-500'>
                        <Icon className='w-6 h-6 text-white/70 group-hover:text-[#34D399] transition-colors duration-500' />
                      </div>
                      <h3 className='text-xl font-medium text-white/90 mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-400 leading-relaxed font-light'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className='py-24 px-6 lg:px-8 relative overflow-hidden bg-white/2 border-y border-white/5'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.03),transparent_70%)]' />
        <div className='max-w-5xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-mono tracking-widest text-[#34D399]/80 uppercase mb-3'>
              Toolkit
            </h2>
            <h3 className='text-3xl font-semibold text-white/90'>
              Technologies
            </h3>
          </div>
          <div className='flex flex-wrap items-center justify-center gap-4 lg:gap-6'>
            {data.techStack.map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className='group relative cursor-default'>
                <div className='absolute -inset-0.5 bg-[#34D399]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='absolute inset-0 bg-linear-to-br from-[#34D399]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='relative px-6 py-3 lg:px-8 lg:py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl group-hover:border-[#34D399]/50 group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center'>
                  <span className='text-base lg:text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-500'>
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className='py-24 px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <h2 className='text-3xl sm:text-4xl font-semibold mb-16 text-center tracking-tight'>
            Our Process
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {data.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='relative group flex flex-col'>
                {/* Connector Line (Desktop) */}
                {i < data.process.length - 1 && (
                  <div className='hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-linear-to-r from-[#34D399]/20 to-transparent' />
                )}

                <div className='relative z-10 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-[#34D399] mb-6 group-hover:scale-110 group-hover:bg-[#34D399]/10 group-hover:border-[#34D399]/30 transition-all duration-300'>
                  {step.step}
                </div>
                <h3 className='text-xl font-medium text-white/90 mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-400 font-light leading-relaxed'>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='py-24 px-6 lg:px-8 bg-black relative'>
        <div className='absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent' />
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl sm:text-4xl font-semibold tracking-tight'>
              FAQ
            </h2>
          </div>
          <div className='grid gap-4'>
            {data.faq.map((item, i) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='p-6 md:p-8 rounded-3xl bg-white/2 border border-white/5 hover:bg-white/4 transition-colors'>
                <h3 className='text-lg font-medium text-white/90 mb-3 flex items-start gap-4'>
                  <span className='text-[#34D399]/50 mt-1'>Q.</span>
                  {item.question}
                </h3>
                <p className='text-gray-400 leading-relaxed font-light pl-8 md:pl-10'>
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='py-32 px-6 lg:px-8 relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(52,211,153,0.1),transparent_50%)]' />
        <div className='max-w-3xl mx-auto text-center relative z-10'>
          <h2 className='text-4xl sm:text-6xl font-semibold mb-6 tracking-tight'>
            Have an app idea?
          </h2>
          <p className='text-xl text-gray-400 mb-10 font-light'>
            We&apos;ll help you turn it into a product your users love.
          </p>
          <Link
            href='/#contact'
            className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors'>
            Get a Free Quote <IconArrowUpRight className='w-5 h-5' />
          </Link>
        </div>
      </section>
    </div>
  );
}
