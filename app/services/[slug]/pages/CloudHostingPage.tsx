"use client";

import { motion } from "motion/react";
import Link from "next/link";
import type { ServicePageData } from "@/lib/services-data";
import {
  IconArrowLeft,
  IconCloud,
  IconServer2,
  IconArrowsTransferUp,
  IconNetwork,
  IconWorldUpload,
  IconDatabase,
  IconArrowUpRight,
  IconActivity,
} from "@tabler/icons-react";

const featureIcons = [
  IconCloud,
  IconServer2,
  IconArrowsTransferUp,
  IconNetwork,
  IconWorldUpload,
  IconDatabase,
];

export default function CloudHostingPage({
  data,
}: Readonly<{ data: ServicePageData }>) {
  return (
    <div className='min-h-screen bg-black text-white selection:bg-sky-500/30'>
      {/* Hero */}
      <section className='relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.15),transparent_50%)]' />

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
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-500/10 mb-6'>
                <IconCloud className='w-4 h-4 text-sky-400' />
                <span className='text-sm text-sky-400 font-medium tracking-wide uppercase'>
                  Cloud Architecture
                </span>
              </div>
              <h1 className='max-md:text-[clamp(1.5rem,7vw,3rem)] max-md:whitespace-nowrap text-5xl sm:text-7xl font-bold tracking-tight mb-6 pb-2 text-transparent bg-clip-text bg-linear-to-b from-white to-white/60'>
                {data.title}
              </h1>
              <p className='text-xl text-gray-400 leading-relaxed font-light'>
                {data.subtitle}
              </p>
            </motion.div>

            {/* Glowing 3D Cloud Server Visualization */}
            <motion.div
              className='flex-1 relative w-full h-80 sm:h-96 lg:h-125 max-w-lg flex justify-center items-center perspective-distant mb-8 lg:mb-0 scale-75 sm:scale-90 lg:scale-100 origin-center lg:origin-right'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {/* Back ambient node */}
              <div className='absolute inset-0 bg-sky-500/20 blur-[100px] rounded-full z-0' />

              {/* Main Cluster Container */}
              <motion.div
                animate={{
                  y: ["-2%", "2%", "-2%"],
                  rotateX: [4, -4, 4],
                  rotateY: [-6, 6, -6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative w-full max-w-md bg-linear-to-b from-[#020b14] to-[#01050a] rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(14,165,233,0.15)] overflow-hidden backdrop-blur-xl z-10 p-8'>
                {/* Header */}
                <div className='flex items-center justify-between mb-8 pb-4 border-b border-white/5'>
                  <div className='flex items-center gap-3'>
                    <div className='p-2 rounded-lg bg-sky-500/20'>
                      <IconCloud className='w-5 h-5 text-sky-400' />
                    </div>
                    <div className='flex flex-col'>
                      <span className='text-sm font-bold text-white'>
                        Global Edge Cluster
                      </span>
                      <span className='text-[10px] text-gray-500 uppercase tracking-wider'>
                        eu-west-1 • us-east-1
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full'>
                    <div className='w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]' />
                    <span className='text-xs text-emerald-400 font-mono'>
                      ONLINE
                    </span>
                  </div>
                </div>

                {/* Network Nodes */}
                <div className='relative h-40 mb-6 flex items-center justify-between'>
                  {/* Connecting Line */}
                  <div className='absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-sky-500/30 to-transparent -translate-y-1/2' />

                  {/* Traffic Pulses */}
                  <motion.div
                    animate={{ left: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className='absolute top-1/2 w-16 h-px bg-linear-to-r from-transparent via-sky-400 to-transparent -translate-y-1/2 z-0'
                  />
                  <motion.div
                    animate={{ right: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 1,
                    }}
                    className='absolute top-1/2 w-16 h-px bg-linear-to-l from-transparent via-indigo-400 to-transparent -translate-y-1/2 z-0'
                  />

                  {/* Nodes */}
                  {[
                    {
                      id: "n1",
                      icon: IconDatabase,
                      name: "Database",
                      size: "h-16",
                      color: "sky",
                    },
                    {
                      id: "n2",
                      icon: IconServer2,
                      name: "Compute",
                      size: "h-24",
                      color: "indigo",
                    },
                    {
                      id: "n3",
                      icon: IconWorldUpload,
                      name: "Storage",
                      size: "h-16",
                      color: "sky",
                    },
                  ].map((node, i) => (
                    <motion.div
                      key={node.id}
                      animate={{ y: ["-5%", "5%", "-5%"] }}
                      transition={{
                        duration: 4,
                        delay: i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`relative z-10 w-20 ${node.size} rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 overflow-hidden`}>
                      <div
                        className={`absolute inset-0 bg-${node.color}-500/10 opacity-50`}
                      />
                      <node.icon
                        className={`w-6 h-6 text-${node.color}-400 relative z-10`}
                      />
                      <span className='text-[10px] text-gray-400 relative z-10'>
                        {node.name}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className='flex items-center justify-between px-4 py-3 bg-white/5 rounded-xl border border-white/5'>
                  <div className='flex flex-col'>
                    <span className='text-[10px] text-gray-500 uppercase'>
                      Data Migrated
                    </span>
                    <span className='text-sm text-white font-mono'>
                      18.4 TB
                    </span>
                  </div>
                  <div className='h-8 w-px bg-white/10' />
                  <div className='flex flex-col text-right'>
                    <span className='text-[10px] text-gray-500 uppercase'>
                      Avg Latency
                    </span>
                    <span className='text-sm text-sky-400 font-mono'>12ms</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Element 1 - Threat Blocked */}
              <motion.div
                animate={{ y: ["0%", "-10%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className='absolute -right-6 top-1/4 px-4 py-3 rounded-2xl bg-[#0a0a0a] border border-sky-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20 flex items-center gap-3'>
                <div className='p-2 rounded-xl bg-sky-500/20 border border-sky-500/30'>
                  <IconArrowsTransferUp className='w-5 h-5 text-sky-400' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-gray-400 uppercase tracking-wider'>
                    Auto-Scaling
                  </span>
                  <span className='text-sm font-bold text-white'>Enabled</span>
                </div>
              </motion.div>

              {/* Floating Element 2 - Active Ticket */}
              <motion.div
                animate={{ y: ["0%", "10%", "0%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute -left-8 bottom-1/4 px-4 py-3 rounded-2xl bg-[#0a0a0a] border border-indigo-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20 flex items-center gap-3'>
                <div className='w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20'>
                  <IconActivity className='w-5 h-5 text-indigo-400' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-gray-400 uppercase tracking-wider'>
                    Reliability
                  </span>
                  <span className='text-sm font-bold text-indigo-400'>
                    99.99%
                  </span>
                </div>
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
            <IconCloud className='w-12 h-12 mx-auto text-sky-500/50 mb-8' />
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
              Cloud Services
            </h2>
            <div className='w-24 h-1 bg-linear-to-r from-sky-500/50 to-transparent mx-auto rounded-full' />
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
                  <div className='group relative h-full p-8 rounded-3xl bg-linear-to-b from-white/5 to-black border border-white/10 hover:border-sky-500/30 transition-all duration-500 overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-sky-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='relative z-10'>
                      <div className='mb-6 inline-flex p-3 rounded-2xl bg-white/5 group-hover:bg-sky-500/10 transition-colors duration-500'>
                        <Icon className='w-6 h-6 text-white/70 group-hover:text-sky-400 transition-colors duration-500' />
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

      {/* Tech Stack */}
      <section className='py-24 px-6 lg:px-8 relative overflow-hidden bg-white/2 border-y border-white/5'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.03),transparent_70%)]' />
        <div className='max-w-5xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-mono tracking-widest text-sky-400/80 uppercase mb-3'>
              Toolkit
            </h2>
            <h3 className='text-3xl font-semibold text-white/90'>
              Cloud Providers & Tools
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
                <div className='absolute -inset-0.5 bg-sky-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='absolute inset-0 bg-linear-to-br from-sky-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='relative px-6 py-3 lg:px-8 lg:py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl group-hover:border-sky-500/50 group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center'>
                  <span className='text-base lg:text-lg font-medium text-gray-400 group-hover:text-white transition-colors duration-500 font-mono'>
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
            Migration Process
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
                  <div className='hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-linear-to-r from-sky-500/20 to-transparent' />
                )}

                <div className='relative z-10 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-sky-500 mb-6 group-hover:scale-110 group-hover:bg-sky-500/10 group-hover:border-sky-500/30 transition-all duration-300'>
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
                  <span className='text-sky-500/50 mt-1'>Q.</span>
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.1),transparent_50%)]' />
        <div className='max-w-3xl mx-auto text-center relative z-10'>
          <h2 className='text-4xl sm:text-6xl font-semibold mb-6 tracking-tight'>
            Move to the cloud with confidence
          </h2>
          <p className='text-xl text-gray-400 mb-10 font-light'>
            Zero-downtime migration. Optimized costs. Enterprise reliability.
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
