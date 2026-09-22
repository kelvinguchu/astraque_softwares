import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import type { ServicePageData } from "@/lib/services-data";
import {
  IconArrowLeft,
  IconBrandWordpress,
  IconRocket,
  IconPalette,
  IconPlugConnected,
  IconDeviceLaptop,
  IconClock,
  IconArrowUpRight,
  IconTemplate,
} from "@tabler/icons-react";

const featureIcons = [
  IconBrandWordpress,
  IconRocket,
  IconPalette,
  IconPlugConnected,
  IconDeviceLaptop,
  IconClock,
];

export default function QuickLaunchPage({
  data,
}: Readonly<{ data: ServicePageData }>) {
  return (
    <div className='min-h-screen bg-black text-white selection:bg-cyan-500/30'>
      {/* Hero */}
      <section className='relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_50%)]' />

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
              <div className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 mb-6'>
                <IconRocket className='w-4 h-4 text-cyan-400' />
                <span className='text-sm text-cyan-400 font-medium tracking-wide uppercase'>
                  Rapid Deployment
                </span>
              </div>
              <h1 className='max-md:text-[clamp(1.5rem,7vw,3rem)] max-md:whitespace-nowrap text-5xl sm:text-7xl font-bold tracking-tight mb-6 pb-2 text-transparent bg-clip-text bg-linear-to-b from-white to-white/60'>
                {data.title}
              </h1>
              <p className='text-xl text-gray-400 leading-relaxed font-light'>
                {data.subtitle}
              </p>
            </motion.div>

            {/* Glowing "Site in a Box" Assembly Graphic */}
            <motion.div
              className='flex-1 relative w-full h-80 sm:h-96 lg:h-125 max-w-lg flex justify-center items-center perspective-distant shrink-0 mb-6 lg:mb-0 origin-center lg:origin-right'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {/* Back ambient node */}
              <div className='absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full z-0' />

              {/* Main Browser Assembly Window */}
              <motion.div
                animate={{
                  y: ["2%", "-2%", "2%"],
                  rotateX: [4, -4, 4],
                  rotateY: [-4, 4, -4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative w-full max-w-sm bg-linear-to-b from-[#060b11] to-[#02050a] rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(6,182,212,0.15)] overflow-hidden backdrop-blur-xl z-10'>
                {/* Browser Controls */}
                <div className='flex items-center px-4 py-3 border-b border-white/10 bg-white/5'>
                  <div className='flex gap-1.5'>
                    <div className='w-2.5 h-2.5 rounded-full bg-white/20' />
                    <div className='w-2.5 h-2.5 rounded-full bg-white/20' />
                    <div className='w-2.5 h-2.5 rounded-full bg-white/20' />
                  </div>
                  <div className='flex-1 mx-4 h-5 bg-black/50 rounded-full flex items-center px-3 border border-white/5'>
                    <div className='w-1/2 h-1.5 bg-cyan-500/50 rounded-full relative overflow-hidden'>
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className='absolute inset-0 bg-white/40 w-1/2 blur-[2px]'
                      />
                    </div>
                  </div>
                </div>

                {/* Simulated Wireframe Build */}
                <div className='p-4 space-y-4 h-72 flex flex-col'>
                  {/* Nav Header */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='w-full h-10 rounded-xl border border-white/10 bg-white/5 flex items-center px-4 gap-3'>
                    <div className='w-8 h-4 bg-cyan-400/30 rounded-md' />
                    <div className='ml-auto flex gap-2'>
                      <div className='w-6 h-1.5 bg-white/20 rounded-full' />
                      <div className='w-6 h-1.5 bg-white/20 rounded-full' />
                      <div className='w-6 h-1.5 bg-cyan-500 rounded-full' />
                    </div>
                  </motion.div>

                  {/* Hero Block */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    className='w-full flex-1 rounded-xl border border-cyan-500/30 bg-cyan-500/10 flex flex-col items-center justify-center p-5 relative overflow-hidden'>
                    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.2),transparent_70%)]' />
                    <motion.div
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className='w-4/5 h-6 bg-cyan-400/80 rounded-lg mb-3 relative z-10'
                    />
                    <div className='w-2/3 h-3 bg-cyan-400/40 rounded-full mb-5 relative z-10' />
                    <div className='px-4 py-1.5 bg-cyan-500 text-[10px] flex items-center justify-center text-black font-bold rounded-lg shadow-lg relative z-10'>
                      LAUNCH LIVE
                    </div>
                  </motion.div>

                  {/* Grid Cards */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className='grid grid-cols-3 gap-3 h-20'>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className='rounded-xl border border-white/10 bg-white/5 p-2.5 flex flex-col gap-1.5'>
                        <div className='w-full h-5 bg-white/10 rounded-md mb-1' />
                        <div className='w-full h-1.5 bg-white/5 rounded-full' />
                        <div className='w-4/5 h-1.5 bg-white/5 rounded-full' />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Status Widgets */}
              <motion.div
                animate={{ y: ["0%", "-10%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className='absolute -right-8 top-1/4 px-4 py-3 rounded-2xl bg-[#0a0a0a] border border-cyan-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20 flex items-center gap-3'>
                <div className='p-2 rounded-xl bg-cyan-500/20'>
                  <IconClock className='w-5 h-5 text-cyan-400' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-gray-400 uppercase tracking-wider'>
                    Turnaround
                  </span>
                  <span className='text-sm font-bold text-white'>48 Hours</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: ["0%", "10%", "0%"] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute -left-10 bottom-1/3 px-4 py-3 rounded-2xl bg-[#0a0a0a] border border-emerald-500/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl z-20 flex items-center gap-3'>
                <div className='w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20'>
                  <div className='w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]' />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[10px] text-gray-400 uppercase tracking-wider'>
                    Status
                  </span>
                  <span className='text-sm font-bold text-white'>Deployed</span>
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
            <IconTemplate className='w-12 h-12 mx-auto text-cyan-500/50 mb-8' />
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
              What You Get
            </h2>
            <div className='w-24 h-1 bg-linear-to-r from-cyan-500/50 to-transparent mx-auto rounded-full' />
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
                  <div className='group relative h-full p-8 rounded-3xl bg-linear-to-b from-white/5 to-black border border-white/10 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='relative z-10'>
                      <div className='mb-6 inline-flex p-3 rounded-2xl bg-white/5 group-hover:bg-cyan-500/10 transition-colors duration-500'>
                        <Icon className='w-6 h-6 text-white/70 group-hover:text-cyan-400 transition-colors duration-500' />
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.03),transparent_70%)]' />
        <div className='max-w-5xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-mono tracking-widest text-cyan-400/80 uppercase mb-3'>
              Toolkit
            </h2>
            <h3 className='text-3xl font-semibold text-white/90'>
              Platforms & Tools
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
                <div className='absolute -inset-0.5 bg-cyan-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='absolute inset-0 bg-linear-to-br from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='relative px-6 py-3 lg:px-8 lg:py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl group-hover:border-cyan-500/50 group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center'>
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
            Launch in 4 Steps
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
                  <div className='hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-linear-to-r from-cyan-500/20 to-transparent' />
                )}

                <div className='relative z-10 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300'>
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
                  <span className='text-cyan-500/50 mt-1'>Q.</span>
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.1),transparent_50%)]' />
        <div className='max-w-3xl mx-auto text-center relative z-10'>
          <h2 className='text-4xl sm:text-6xl font-semibold mb-6 tracking-tight'>
            Need a website fast?
          </h2>
          <p className='text-xl text-gray-400 mb-10 font-light'>
            Go live in as little as 48 hours with a professionally built site.
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
