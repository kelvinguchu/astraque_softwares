import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import type { ServicePageData } from "@/lib/services-data";
import {
  IconArrowLeft,
  IconShoppingCart,
  IconCreditCard,
  IconPackage,
  IconTruck,
  IconChartLine,
  IconWorld,
  IconTrendingUp,
  IconArrowUpRight,
} from "@tabler/icons-react";

const featureIcons = [
  IconShoppingCart,
  IconCreditCard,
  IconPackage,
  IconTruck,
  IconChartLine,
  IconWorld,
];

export default function EcommercePage({
  data,
}: Readonly<{ data: ServicePageData }>) {
  return (
    <div className='min-h-screen bg-black text-white selection:bg-[#FF5733]/30'>
      {/* Hero */}
      <section className='relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,87,51,0.15),transparent_50%)]' />

        <div className='max-w-7xl mx-auto relative z-10 w-full'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}>
            <Link
              to='/'
              hash='services'
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

            {/* Glowing E-commerce Dashboard Visual */}
            <motion.div
              className='flex-1 relative w-full h-80 sm:h-96 lg:h-125 max-w-lg flex justify-center items-center perspective-[1000px] shrink-0 origin-center lg:origin-right'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {/* Main Dashboard Window */}
              <motion.div
                animate={{
                  y: ["-2%", "2%", "-2%"],
                  rotateX: [2, -2, 2],
                  rotateY: [-2, 2, -2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative w-full max-w-md bg-linear-to-b from-[#111] to-black rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(255,87,51,0.15)] overflow-hidden backdrop-blur-3xl z-10'>
                {/* Top Bar */}
                <div className='flex items-center px-4 py-3 border-b border-white/5 bg-white/2'>
                  <div className='flex gap-1.5'>
                    <div className='w-3 h-3 rounded-full bg-red-500/50' />
                    <div className='w-3 h-3 rounded-full bg-yellow-500/50' />
                    <div className='w-3 h-3 rounded-full bg-green-500/50' />
                  </div>
                  <div className='mx-auto px-4 py-1 rounded-md bg-black/50 border border-white/5 flex items-center gap-2'>
                    <IconShoppingCart className='w-3 h-3 text-[#FF5733]' />
                    <span className='text-xs text-gray-400 font-mono'>
                      admin.store.com
                    </span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className='p-6 space-y-6'>
                  {/* Stats Row */}
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='p-4 rounded-2xl bg-white/5 border border-white/5'>
                      <div className='text-gray-400 text-xs mb-1'>
                        Total Revenue
                      </div>
                      <div className='text-xl font-bold text-white mb-2'>
                        $128,450
                      </div>
                      <div className='flex items-center gap-1 text-[#FF5733] text-xs'>
                        <IconTrendingUp className='w-3 h-3' /> +14.5%
                      </div>
                    </div>
                    <div className='p-4 rounded-2xl bg-white/5 border border-white/5'>
                      <div className='text-gray-400 text-xs mb-1'>
                        Active Orders
                      </div>
                      <div className='text-xl font-bold text-white mb-2'>
                        842
                      </div>
                      <div className='flex items-center gap-1 text-[#FF5733] text-xs'>
                        <IconTrendingUp className='w-3 h-3' /> +5.2%
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className='w-full h-32 rounded-2xl bg-white/5 border border-white/5 p-4 flex flex-col justify-end relative overflow-hidden'>
                    <div className='absolute top-4 left-4 text-xs text-gray-400'>
                      Sales Overview
                    </div>
                    <div className='flex items-end gap-2 h-16 w-full mt-auto'>
                      {[30, 45, 25, 60, 40, 75, 55, 90, 65, 100].map((h, i) => (
                        <motion.div
                          key={`chart-bar-${i}-${h}`}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                          className='flex-1 rounded-t-sm bg-linear-to-t from-[#FF5733]/80 to-[#FF5733]/20 opacity-80'
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: ["0%", "-10%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute -right-8 top-1/4 w-40 p-3 rounded-2xl bg-[#FF5733]/10 border border-[#FF5733]/20 backdrop-blur-xl z-20 shadow-2xl'>
                <div className='flex gap-3 items-center'>
                  <div className='w-10 h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center'>
                    <IconPackage className='w-5 h-5 text-[#FF5733]' />
                  </div>
                  <div>
                    <div className='text-xs text-gray-300'>Order #892</div>
                    <div className='text-[10px] text-emerald-400'>
                      Delivered
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: ["0%", "10%", "0%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className='absolute -left-10 bottom-1/3 w-36 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl z-20 shadow-2xl'>
                <div className='flex gap-3 items-center'>
                  <div className='w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center'>
                    <IconCreditCard className='w-4 h-4 text-emerald-400' />
                  </div>
                  <div>
                    <div className='text-[10px] text-gray-300'>
                      Payment received
                    </div>
                    <div className='text-xs font-bold text-white'>+$299.00</div>
                  </div>
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
            <IconShoppingCart className='w-12 h-12 mx-auto text-[#FF5733]/50 mb-8' />
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
              Everything You Need to Sell Online
            </h2>
            <div className='w-24 h-1 bg-linear-to-r from-[#FF5733]/50 to-transparent mx-auto rounded-full' />
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
                  <div className='group relative h-full p-8 rounded-3xl bg-linear-to-b from-white/5 to-black border border-white/10 hover:border-[#FF5733]/30 transition-all duration-500 overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-[#FF5733]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='relative z-10'>
                      <div className='mb-6 inline-flex p-3 rounded-2xl bg-white/5 group-hover:bg-[#FF5733]/10 transition-colors duration-500'>
                        <Icon className='w-6 h-6 text-white/70 group-hover:text-[#FF5733] transition-colors duration-500' />
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,87,51,0.03),transparent_70%)]' />
        <div className='max-w-5xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-mono tracking-widest text-[#FF5733]/80 uppercase mb-3'>
              Toolkit
            </h2>
            <h3 className='text-3xl font-semibold text-white/90'>
              Platforms & Integrations
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
                <div className='absolute -inset-0.5 bg-[#FF5733]/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='absolute inset-0 bg-linear-to-br from-[#FF5733]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='relative px-6 py-3 lg:px-8 lg:py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl group-hover:border-[#FF5733]/50 group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center'>
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
            From Idea to Launch
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
                  <div className='hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-linear-to-r from-[#FF5733]/20 to-transparent' />
                )}

                <div className='relative z-10 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-[#FF5733] mb-6 group-hover:scale-110 group-hover:bg-[#FF5733]/10 group-hover:border-[#FF5733]/30 transition-all duration-300'>
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
                  <span className='text-[#FF5733]/50 mt-1'>Q.</span>
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,87,51,0.1),transparent_50%)]' />
        <div className='max-w-3xl mx-auto text-center relative z-10'>
          <h2 className='text-4xl sm:text-6xl font-semibold mb-6 tracking-tight'>
            Ready to start selling online?
          </h2>
          <p className='text-xl text-gray-400 mb-10 font-light'>
            Let&apos;s build a store that converts visitors into customers.
          </p>
          <Link
            to='/'
            hash='contact'
            className='inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors'>
            Get a Free Quote <IconArrowUpRight className='w-5 h-5' />
          </Link>
        </div>
      </section>
    </div>
  );
}
