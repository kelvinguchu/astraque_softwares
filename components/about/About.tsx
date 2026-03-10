"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import CodeEditorVisual from "@/components/shared/CodeEditorVisual";
import {
  IconRocket,
  IconTargetArrow,
  IconUsers,
  IconTrendingUp,
} from "@tabler/icons-react";

function AgencyVisual() {
  return (
    <CodeEditorVisual fileName='astraque.config.ts'>
      <div className='text-gray-500'>{`// Astraque — Agency Configuration`}</div>
      <div className='mt-2'>
        <span className='text-violet-400'>export const</span>{" "}
        <span className='text-indigo-400'>agency</span>{" "}
        <span className='text-white'>=</span>{" "}
        <span className='text-white'>{`{`}</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>name:</span>{" "}
        <span className='text-emerald-400'>&quot;Astraque Softwares&quot;</span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>focus:</span>{" "}
        <span className='text-emerald-400'>
          &quot;Web &amp; Software Development&quot;
        </span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>stack:</span>{" "}
        <span className='text-violet-400'>[</span>
      </div>
      <div className='ml-8'>
        <span className='text-emerald-400'>
          &quot;React&quot;, &quot;Next.js&quot;, &quot;Node.js&quot;,
        </span>
      </div>
      <div className='ml-8'>
        <span className='text-emerald-400'>
          &quot;Flutter&quot;, &quot;PostgreSQL&quot;, &quot;AWS&quot;
        </span>
      </div>
      <div className='ml-4'>
        <span className='text-violet-400'>]</span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>approach:</span>{" "}
        <span className='text-emerald-400'>
          &quot;Ship fast. Iterate often.&quot;
        </span>
        <span className='text-white'>,</span>
      </div>
      <div className='ml-4'>
        <span className='text-pink-400'>status:</span>{" "}
        <span className='text-emerald-400'>
          &quot;Building what&apos;s next&quot;
        </span>
      </div>
      <div>
        <span className='text-white'>{`};`}</span>
      </div>
    </CodeEditorVisual>
  );
}

const highlights = [
  {
    icon: IconRocket,
    title: "Built for Speed",
    description:
      "We move fast without cutting corners. From concept to launch, our streamlined process delivers production-ready solutions on tight timelines.",
  },
  {
    icon: IconTargetArrow,
    title: "Results-Driven",
    description:
      "Every line of code serves a purpose. We build software that solves real problems, drives growth, and delivers measurable business value.",
  },
  {
    icon: IconUsers,
    title: "Client-First Approach",
    description:
      "Your vision leads the way. We collaborate closely with every client, ensuring transparent communication and solutions tailored to your goals.",
  },
  {
    icon: IconTrendingUp,
    title: "Scalable by Design",
    description:
      "We architect systems that grow with you. Clean code, modern infrastructure, and forward-thinking design ensure your product evolves seamlessly.",
  },
];

export default function About() {
  return (
    <section
      id='about'
      className={cn(
        "min-h-screen py-6 md:py-8 relative overflow-hidden flex items-center",
      )}>
      <div className='w-full'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex flex-col items-center text-center mb-16'>
            <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
              About Astraque
            </h2>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-px bg-linear-to-r from-transparent to-violet-500/50' />
              <div className='w-20 h-1 bg-linear-to-r from-violet-500 to-indigo-500 rounded-full' />
              <div className='w-8 h-px bg-linear-to-l from-transparent to-indigo-500/50' />
            </div>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch'>
            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative h-105'>
              <AgencyVisual />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative flex flex-col justify-center'>
              <p className='text-lg text-gray-400/90 leading-relaxed mb-10'>
                Astraque Softwares is a digital agency that designs, builds, and
                ships software products for businesses of all sizes. We combine
                modern engineering with sharp design to deliver web apps, mobile
                apps, and custom platforms that actually move the needle.
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {highlights.map((item) => (
                  <div key={item.title} className='group'>
                    <div className='flex items-center gap-3 mb-2'>
                      <div className='p-2 rounded-lg bg-white/5 border border-white/5 group-hover:border-violet-500/20 transition-colors duration-300'>
                        <item.icon className='w-4 h-4 text-violet-400' />
                      </div>
                      <h3 className='text-base font-medium text-white/90'>
                        {item.title}
                      </h3>
                    </div>
                    <p className='text-sm text-gray-500 leading-relaxed pl-11'>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
