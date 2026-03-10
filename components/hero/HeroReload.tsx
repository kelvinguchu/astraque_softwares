"use client";

import Hero from "./Hero";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

export default function HeroReload() {
  return (
    <div className='relative overflow-hidden bg-black'>
      <AnimatedGridPattern
        id='hero-grid'
        numSquares={30}
        maxOpacity={0.15}
        duration={3}
        repeatDelay={0}
        className={cn(
          "mask-[radial-gradient(1500px_circle_at_center,white,transparent)]",
          "absolute inset-x-0 top-[-10%] h-[120%] opacity-75",
        )}
      />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,black_70%)]' />
      <div className='absolute top-0 inset-x-0 h-32 bg-linear-to-b from-black to-transparent' />
      <div className='absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-black to-transparent' />
      <div className='absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent' />
      <div className='absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent' />
      <div className='relative z-10'>
        <Hero />
      </div>
    </div>
  );
}
