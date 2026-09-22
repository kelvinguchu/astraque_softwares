import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import type { ServicePageData } from "@/lib/services-data";
import {
  IconArrowLeft,
  IconCloud,
  IconGitBranch,
  IconTerminal2,
  IconServer,
  IconRefresh,
  IconLock,
  IconArrowUpRight,
  IconCpu,
} from "@tabler/icons-react";

const featureIcons = [
  IconCloud,
  IconGitBranch,
  IconTerminal2,
  IconServer,
  IconRefresh,
  IconLock,
];

export default function CloudDevOpsPage({
  data,
}: Readonly<{ data: ServicePageData }>) {
  return (
    <div className='min-h-screen bg-black text-white selection:bg-violet-500/30'>
      {/* Hero */}
      <section className='relative min-h-[80vh] flex flex-col items-center justify-center pt-32 pb-16 px-6 lg:px-8 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_50%)]' />

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

            {/* Glowing CI/CD Terminal Virtualization */}
            <motion.div
              className='flex-1 relative w-full h-80 sm:h-96 lg:h-125 max-w-lg flex justify-center items-center perspective-[1000px] shrink-0 origin-center lg:origin-right'
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}>
              {/* Back Cloud Node */}
              <motion.div
                animate={{ y: ["-2%", "2%", "-2%"], rotateZ: [-5, 5, -5] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='absolute -right-4 -top-8 w-48 h-48 bg-linear-to-bl from-violet-500/10 to-transparent rounded-[3rem] border border-violet-500/20 backdrop-blur-md -z-10 flex items-center justify-center -translate-z-12'>
                <IconCloud className='w-24 h-24 text-violet-500/30' />
              </motion.div>

              {/* Main Terminal Window */}
              <motion.div
                animate={{
                  y: ["1%", "-1%", "1%"],
                  rotateX: [2, -2, 2],
                  rotateY: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className='relative w-full max-w-md bg-linear-to-b from-[#0a0a10] to-[#050510] rounded-2xl border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.15)] overflow-hidden backdrop-blur-3xl z-10'>
                {/* Window Controls */}
                <div className='flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/2'>
                  <div className='flex gap-2'>
                    <div className='w-3 h-3 rounded-full bg-red-500/50' />
                    <div className='w-3 h-3 rounded-full bg-yellow-500/50' />
                    <div className='w-3 h-3 rounded-full bg-green-500/50' />
                  </div>
                  <div className='text-[10px] text-gray-500 font-mono flex items-center gap-2'>
                    <IconTerminal2 className='w-3 h-3' /> deploy@production:~
                  </div>
                </div>

                {/* Pipeline UI */}
                <div className='p-6 font-mono text-sm'>
                  <div className='mb-6'>
                    <div className='flex items-center gap-2 text-violet-400 mb-2'>
                      <IconGitBranch className='w-4 h-4' />
                      <span>Deploying to production...</span>
                    </div>
                    <div className='h-1 w-full bg-white/5 rounded-full overflow-hidden'>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "75%" }}
                        transition={{ duration: 3, delay: 1, ease: "easeOut" }}
                        className='h-full bg-violet-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]'
                      />
                    </div>
                  </div>

                  {/* Steps */}
                  <div className='space-y-4'>
                    {[
                      { step: "Pull branch", status: "success", time: "2s" },
                      { step: "Build image", status: "success", time: "45s" },
                      { step: "Run tests", status: "success", time: "12s" },
                      {
                        step: "Push to registry",
                        status: "success",
                        time: "8s",
                      },
                      {
                        step: "Update servers",
                        status: "running",
                        time: "...",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 1 + i * 0.4 }}
                        className='flex items-center justify-between'>
                        <div className='flex items-center gap-3'>
                          {item.status === "success" ? (
                            <div className='text-green-400'>[OK]</div>
                          ) : (
                            <IconRefresh className='w-4 h-4 text-violet-400 animate-spin' />
                          )}
                          <span className='text-gray-300'>{item.step}</span>
                        </div>
                        <span className='text-gray-600 text-xs'>
                          {item.time}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 3 }}
                    className='mt-4 w-2 h-4 bg-violet-500'
                  />
                </div>
              </motion.div>

              {/* Server Nodes */}
              <motion.div
                animate={{ y: ["0%", "10%", "0%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className='absolute -left-6 top-1/3 w-16 h-16 rounded-2xl bg-black border border-violet-500/30 flex items-center justify-center z-20 shadow-[-10px_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-xl'>
                <IconCpu className='w-8 h-8 text-violet-400' />
              </motion.div>

              <motion.div
                animate={{ y: ["0%", "-10%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className='absolute -right-8 bottom-1/4 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xl z-20 shadow-2xl flex items-center gap-2'>
                <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
                <span className='text-xs font-mono text-gray-300'>
                  All systems optimal
                </span>
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
            <IconCloud className='w-12 h-12 mx-auto text-violet-500/50 mb-8' />
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
              Infrastructure & Automation
            </h2>
            <div className='w-24 h-1 bg-linear-to-r from-violet-500/50 to-transparent mx-auto rounded-full' />
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
                  <div className='group relative h-full p-8 rounded-3xl bg-linear-to-b from-white/5 to-black border border-white/10 hover:border-violet-500/30 transition-all duration-500 overflow-hidden'>
                    <div className='absolute inset-0 bg-linear-to-br from-violet-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='relative z-10'>
                      <div className='mb-6 inline-flex p-3 rounded-2xl bg-white/5 group-hover:bg-violet-500/10 transition-colors duration-500'>
                        <Icon className='w-6 h-6 text-white/70 group-hover:text-violet-500 transition-colors duration-500' />
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(167,139,250,0.03),transparent_70%)]' />
        <div className='max-w-5xl mx-auto relative z-10'>
          <div className='text-center mb-16'>
            <h2 className='text-sm font-mono tracking-widest text-violet-400/80 uppercase mb-3'>
              Toolkit
            </h2>
            <h3 className='text-3xl font-semibold text-white/90'>
              Cloud & DevOps Tools
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
                <div className='absolute -inset-0.5 bg-violet-500/30 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='absolute inset-0 bg-linear-to-br from-violet-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500' />
                <div className='relative px-6 py-3 lg:px-8 lg:py-4 bg-[#0a0a0a] border border-white/10 rounded-2xl group-hover:border-violet-500/50 group-hover:-translate-y-1 transition-all duration-500 flex items-center justify-center'>
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
            How We Work
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
                  <div className='hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-linear-to-r from-violet-500/20 to-transparent' />
                )}

                <div className='relative z-10 w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-xl font-bold text-violet-500 mb-6 group-hover:scale-110 group-hover:bg-violet-500/10 group-hover:border-violet-500/30 transition-all duration-300'>
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
                  <span className='text-violet-500/50 mt-1'>Q.</span>
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
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.1),transparent_50%)]' />
        <div className='max-w-3xl mx-auto text-center relative z-10'>
          <h2 className='text-4xl sm:text-6xl font-semibold mb-6 tracking-tight'>
            Ship faster, scale bigger
          </h2>
          <p className='text-xl text-gray-400 mb-10 font-light'>
            Modern infrastructure that grows with your business.
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
