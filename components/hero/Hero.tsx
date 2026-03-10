"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconChevronDown } from "@tabler/icons-react";

const IconsCloud = dynamic(() => import("./IconsCloud"), {
  ssr: false,
  loading: () => <div className='w-full h-70 md:h-137.5' />,
});

const rotatingWords = ["experiences", "platforms", "products", "solutions"];

export default function Hero() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const measuringRef = useRef<HTMLSpanElement>(null);
  const widthMv = useMotionValue(0);
  const smoothWidth = useSpring(widthMv, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (measuringRef.current) {
      const w = measuringRef.current.offsetWidth;
      widthMv.set(w);
    }
  }, [wordIndex, widthMv]);

  const handleScroll = useCallback(() => {
    setHasScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={cn(
        "relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start md:-mt-10 mt-0 px-4 sm:px-6 lg:px-8 min-h-[calc(100vh-80px)]",
        "font-sans",
      )}>
      {/* Ambient glows */}
      <div className='absolute top-1/4 left-1/4 w-125 h-125 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none' />
      <div className='absolute bottom-1/3 right-1/4 w-100 h-100 bg-indigo-500/8 rounded-full blur-[100px] pointer-events-none' />

      {/* Left Content */}
      <div className='w-full md:w-1/2 pt-16 pb-12 md:pt-20 md:pb-0 relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:mr-10 min-h-100'>
        <h1 className='text-[2.75rem] md:text-[4.5rem] font-semibold tracking-[-0.02em] leading-[1.1] text-white'>
          {isLoaded ? (
            <>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='inline-block mr-[0.3em]'>
                We
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className='inline-block mr-[0.3em]'>
                craft
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className='inline-block mr-[0.3em]'>
                digital
              </motion.span>
              {/* Width-measuring hidden span */}
              <span
                className='absolute invisible whitespace-nowrap text-[2.75rem] md:text-[4.5rem] font-semibold tracking-[-0.02em]'
                ref={measuringRef}
                aria-hidden='true'>
                {rotatingWords[wordIndex]}
              </span>
              <motion.span
                style={{ width: smoothWidth }}
                className='inline-flex overflow-hidden align-bottom'>
                <AnimatePresence mode='wait'>
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                    transition={{ duration: 0.4 }}
                    className='inline-block whitespace-nowrap text-transparent bg-clip-text bg-linear-to-r from-violet-400 via-purple-400 to-indigo-400'>
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
                className='inline-block mr-[0.3em]'>
                that
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className='inline-block'>
                inspire
              </motion.span>
            </>
          ) : (
            <span className='invisible'>
              We build digital experiences that inspire
            </span>
          )}
        </h1>

        {isLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className='space-y-6 mt-6'>
            <p className='text-base md:text-lg text-[#8A8A8E] max-w-xl tracking-[-0.01em] leading-relaxed'>
              Transforming ideas into powerful websites, applications, and
              software solutions for forward-thinking businesses.
            </p>

            <div className='mt-10'>
              <Link
                href='#contact'
                className='group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-linear-to-b from-violet-500 to-violet-600 text-white font-medium shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-200'>
                Let&apos;s Talk
                <svg
                  className='w-5 h-5 transition-transform duration-200 group-hover:translate-x-1'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      {/* Right Content — Icon Cloud */}
      {isLoaded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='md:w-1/2 w-full relative z-10 flex justify-center md:justify-end pb-6 md:py-0 min-h-70'>
          <div className='relative w-full h-87.5 md:h-137.5 max-w-150'>
            {/* Orbital rings behind cloud */}
            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
              <div className='w-72 h-72 md:w-96 md:h-96 rounded-full border border-violet-500/10 animate-[spin_30s_linear_infinite]' />
            </div>
            <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
              <div className='w-56 h-56 md:w-80 md:h-80 rounded-full border border-indigo-500/5 animate-[spin_20s_linear_infinite_reverse]' />
            </div>
            <IconsCloud />
          </div>
        </motion.div>
      )}

      {/* Scroll indicator */}
      <AnimatePresence>
        {!hasScrolled && isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className='absolute bottom-22.5 md:-bottom-4 left-1/2 -translate-x-1/2 z-50'>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className='flex flex-col items-center gap-2'>
              <div className='relative p-2 rounded-full bg-black/30 backdrop-blur-sm border border-violet-500/20 shadow-[0_0_15px_-3px_rgba(139,92,246,0.3)]'>
                <div className='absolute inset-0 rounded-full bg-linear-to-b from-violet-500/10 to-transparent' />
                <IconChevronDown className='w-5 h-5 text-violet-400/90 relative z-10' />
              </div>
              <div className='h-8 w-0.5 bg-linear-to-b from-violet-500/40 via-violet-500/20 to-transparent' />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
