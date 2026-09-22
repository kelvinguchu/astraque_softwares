import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { IconQuote } from "@tabler/icons-react";
import { motion } from "motion/react";

const reviews = [
  {
    id: "isaac",
    name: "C.E.O, Aquatreat Solutions Limited",
    username: "@Isaac Njenga",
    body: "The web development services provided were top-notch. The delivery was timely and exceeded our expectations.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    id: "laban",
    name: "C.E.O, Steel & Allied",
    username: "@Laban Mwangi",
    body: "Outstanding work on our company website! The attention to detail and professional approach were impressive.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    id: "julius",
    name: "Director, Scapethru Springs Limited",
    username: "@Julius Syanda",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    id: "gideon",
    name: "C.E.O, Switchways Enterprises Limited",
    username: "@Gideon Mwangi",
    body: "Our new website looks fantastic and functions perfectly. The project was completed on time with excellent communication throughout.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    id: "jane",
    name: "Member, Chelco Limited",
    username: "@Jane Mugambi",
    body: "Implemented the Odoo CRM to our company flawlessly, everything is just smooth. Highly recommend!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    id: "elishiba",
    name: "Owner, Kariuki Farm",
    username: "@Elishiba Njambi",
    body: "Wonderfully made farm management system, very useful and reliable. Thank you!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    id: "wilson",
    name: "Manager, UMS Kenya",
    username: "@Wilson Kamau",
    body: "The stock management system has revolutionized our inventory control. Excellent work and great support!",
    img: "https://avatar.vercel.sh/wilson",
  },
] as const;

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

function ReviewCard({
  img,
  name,
  username,
  body,
}: Readonly<{
  img: string;
  name: string;
  username: string;
  body: string;
}>) {
  return (
    <div className='relative h-full w-[320px] mx-4'>
      <div className='relative h-full rounded-xl overflow-hidden backdrop-blur-sm border border-white/8 bg-black/30'>
        {/* Gradient backgrounds */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-linear-to-br from-violet-500/5 via-transparent to-indigo-500/5' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(124,58,237,0.1),transparent_50%)]' />
        </div>

        <div className='relative p-6 flex flex-col h-full'>
          <div className='absolute top-4 right-4 text-violet-500/30'>
            <IconQuote size={24} />
          </div>

          <div className='flex items-center gap-4 mb-4'>
            <div className='relative w-12 h-12'>
              <img
                src={img}
                alt={name}
                className='absolute inset-0 w-full h-full object-cover rounded-full border border-white/8'
                loading='lazy'
                decoding='async'
              />
            </div>
            <div>
              <p className='text-sm font-medium text-white/90'>{name}</p>
              <p className='text-sm text-gray-400'>{username}</p>
            </div>
          </div>

          <p className='text-gray-300/90 text-sm leading-relaxed grow'>
            {body}
          </p>

          <div className='absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/8 to-transparent' />
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id='testimonials'
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
              What Our Clients Say
            </h2>
            <div className='flex items-center gap-2'>
              <div className='w-8 h-px bg-linear-to-r from-transparent to-violet-500/50' />
              <div className='w-20 h-1 bg-linear-to-r from-violet-500 to-indigo-500 rounded-full' />
              <div className='w-8 h-px bg-linear-to-l from-transparent to-indigo-500/50' />
            </div>
          </motion.div>

          {/* Desktop marquee */}
          <div className='hidden md:block relative'>
            <Marquee pauseOnHover className='[--duration:50s] py-4'>
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>

            <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r from-black' />
            <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l from-black' />
          </div>

          {/* Mobile vertical marquee */}
          <div className='md:hidden relative'>
            <Marquee pauseOnHover vertical className='[--duration:40s] h-150'>
              {reviews.map((review) => (
                <ReviewCard key={review.id} {...review} />
              ))}
            </Marquee>
            <div className='pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-black via-black/80 to-transparent' />
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black via-black/80 to-transparent' />
          </div>
        </div>
      </div>
    </section>
  );
}
