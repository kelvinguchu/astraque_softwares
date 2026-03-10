"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ServicePageData } from "@/lib/services-data";
import {
  IconArrowLeft,
  IconDatabase,
  IconUsers,
  IconFileInvoice,
  IconCalendar,
  IconChartBar,
  IconSettings,
  IconArrowUpRight,
  IconServer,
  IconShieldLock,
} from "@tabler/icons-react";

const featureIcons = [
  IconDatabase,
  IconUsers,
  IconFileInvoice,
  IconCalendar,
  IconChartBar,
  IconSettings,
];

export default function BusinessSystemsPage({
  data,
}: Readonly<{
  data: ServicePageData;
}>) {
  return (
    <div className='min-h-screen bg-black text-white selection:bg-yellow-500/30'>
      {/* Hero */}
      <section className='relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.1),transparent_50%)]' />

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

            {/* Glowing System Data Pipeline Visual */}
            <motion.div
              className='flex-1 relative w-full h-80 sm:h-96 lg:h-125 max-w-lg flex justify-center items-center perspective-distant shrink-0 mb-6 lg:mb-0 origin-center lg:origin-right'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {/* Back Layer Database */}
              <motion.div
                animate={{ y: ["-3%", "3%", "-3%"], rotateX: [10, 15, 10] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='absolute w-64 h-48 bg-linear-to-bl from-yellow-500/10 to-transparent rounded-2xl border border-yellow-500/20 backdrop-blur-sm -z-10 -translate-z-25 flex items-center justify-center'>
                <IconServer className='w-20 h-20 text-yellow-500/30' />
              </motion.div>

              {/* Main ERP Interface Board */}
              <motion.div
                animate={{
                  y: ["2%", "-2%", "2%"],
                  rotateX: [5, 10, 5],
                  rotateY: [-5, -10, -5],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative w-full max-w-md bg-linear-to-b from-[#111] to-[#050505] rounded-3xl border border-white/10 shadow-[0_0_100px_rgba(234,179,8,0.1)] overflow-hidden backdrop-blur-3xl p-6'>
                {/* Header */}
                <div className='flex items-center justify-between mb-8 pb-4 border-b border-white/5'>
                  <div>
                    <div className='text-xs text-gray-500 uppercase tracking-widest mb-1'>
                      System Core
                    </div>
                    <div className='text-xl font-bold text-white flex items-center gap-2'>
                      <div className='w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]' />
                      ERP Running
                    </div>
                  </div>
                  <div className='p-2 rounded-lg bg-yellow-500/10 border border-yellow-500/20'>
                    <IconSettings className='w-5 h-5 text-yellow-500 animate-[spin_4s_linear_infinite]' />
                  </div>
                </div>

                {/* Modules Grid */}
                <div className='grid grid-cols-2 gap-4 mb-6'>
                  {["CRM Sync", "Finance", "HR Data", "Inventory"].map(
                    (mod, i) => (
                      <div
                        key={mod}
                        className='p-3 rounded-xl bg-white/5 border border-white/5 flex items-center gap-3'>
                        <div className='w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center'>
                          {i === 0 && (
                            <IconUsers className='w-4 h-4 text-yellow-400' />
                          )}
                          {i === 1 && (
                            <IconFileInvoice className='w-4 h-4 text-yellow-400' />
                          )}
                          {i === 2 && (
                            <IconCalendar className='w-4 h-4 text-yellow-400' />
                          )}
                          {i === 3 && (
                            <IconDatabase className='w-4 h-4 text-yellow-400' />
                          )}
                        </div>
                        <div>
                          <div className='text-sm text-white'>{mod}</div>
                          <div className='text-[10px] text-green-400'>
                            100% Ok
                          </div>
                        </div>
                      </div>
                    ),
                  )}
                </div>

                {/* Active Data Stream */}
                <div className='w-full rounded-xl bg-black/50 border border-white/5 p-4 relative overflow-hidden'>
                  <div className='absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(250,204,21,0.5)_50%,transparent_100%)] animate-[shimmer_2s_infinite]' />
                  <div className='text-xs text-gray-400 mb-2'>
                    Active Process Stream
                  </div>
                  <div className='space-y-2'>
                    <div className='w-full h-1.5 rounded-full bg-white/10 overflow-hidden'>
                      <div className='w-3/4 h-full bg-yellow-400 rounded-full' />
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-white/10 overflow-hidden'>
                      <div className='w-1/2 h-full bg-yellow-500 rounded-full' />
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-white/10 overflow-hidden'>
                      <div className='w-5/6 h-full bg-yellow-600 rounded-full' />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Shield */}
              <motion.div
                animate={{ y: ["0%", "15%", "0%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute -right-6 top-1/4 w-16 h-16 rounded-2xl bg-black border border-yellow-500/30 flex items-center justify-center z-20 shadow-2xl backdrop-blur-xl'>
                <IconShieldLock className='w-8 h-8 text-yellow-500' />
              </motion.div>

              {/* Data Node Point */}
              <motion.div
                animate={{ y: ["0%", "-15%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className='absolute -left-8 bottom-1/4 w-24 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl z-20 shadow-2xl flex flex-col items-center justify-center'>
                <div className='text-2xl font-bold text-white'>99.9%</div>
                <div className='text-[10px] text-gray-400'>Uptime</div>
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
            <IconDatabase className='w-12 h-12 mx-auto text-yellow-500/50 mb-8' />
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
              Core Modules
            </h2>
            <div className='w-24 h-1 bg-linear-to-r from-yellow-500/50 to-transparent mx-auto rounded-full' />
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
                  <div className='group relative h-full p-8 rounded-3xl bg-linear-to-b from-white/5 to-black border border-white/10 hover:border-yellow-500/30 transition-all duration-500 overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-yellow-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='relative z-10'>
                      <div className='mb-6 inline-flex p-3 rounded-2xl bg-white/5 group-hover:bg-yellow-500/10 transition-colors duration-500'>
                        <Icon className='w-6 h-6 text-white/70 group-hover:text-yellow-500 transition-colors duration-500' />
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03),transparent_70%)]' />
        <div className='max-w-5xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-mono tracking-widest text-yellow-500/80 uppercase mb-3'>
              Toolkit
            </h2>
            <h3 className='text-3xl font-semibold text-white/90'>
              Technologies We Use
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
                <div className='absolute -inset-0.5 bg-yellow-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='absolute inset-0 bg-linear-to-br from-yellow-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='relative px-6 py-3 lg:px-8 lg:py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl group-hover:border-yellow-500/50 group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center'>
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
            Implementation Process
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
                  <div className='hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-linear-to-r from-yellow-500/20 to-transparent' />
                )}

                <div className='relative z-10 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-yellow-500 mb-6 group-hover:scale-110 group-hover:bg-yellow-500/10 group-hover:border-yellow-500/30 transition-all duration-300'>
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
                  <span className='text-yellow-500/50 mt-1'>Q.</span>
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.1),transparent_50%)]' />
        <div className='max-w-3xl mx-auto text-center relative z-10'>
          <h2 className='text-4xl sm:text-6xl font-semibold mb-6 tracking-tight'>
            Streamline your business operations
          </h2>
          <p className='text-xl text-gray-400 mb-10 font-light'>
            Custom systems built around your exact workflow.
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
