import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";
import { IconPhone } from "@tabler/icons-react";

const navItems = [
  { label: "Services", to: "/", hash: "services", sectionId: "services" },
  { label: "About", to: "/", hash: "about", sectionId: "about" },
  { label: "Recent Projects", to: "/projects", hash: undefined, sectionId: null },
  { label: "Contact", to: "/", hash: "contact", sectionId: "contact" },
] as const;

export default function Navbar({
  className,
}: Readonly<{ className?: string }>) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = useLocation({ select: (location) => location.pathname });
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  // Scroll-based active section detection
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sectionIds = navItems
      .map((item) => item.sectionId)
      .filter(Boolean) as string[];

    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const match = navItems.find(
              (item) => item.sectionId === entry.target.id,
            );
            if (match) setActiveSection(match.label);
          }
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [pathname]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Highlight "Recent Projects" when on /projects
  useEffect(() => {
    if (pathname === "/projects") {
      setActiveSection("Recent Projects");
    }
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn("fixed top-4 inset-x-4 z-50 font-sans", className)}>
      <div className='mx-auto max-w-7xl'>
        <div
          className={cn(
            "relative rounded-full transition-all duration-300",
            scrolled
              ? "bg-white/7 backdrop-blur-md border border-white/5"
              : "bg-transparent",
          )}>
          {/* Glow */}
          <div className='absolute inset-0 rounded-full [background:radial-gradient(circle_at_top,rgba(138,124,255,0.08),transparent_70%)]' />

          <div className='relative px-4 py-3'>
            <div className='flex items-center justify-between'>
              {/* Logo */}
              <Link to='/' className='relative flex items-center'>
                <img
                  src='/logo.png'
                  width={130}
                  height={45}
                  alt='Astraque logo'
                  className='w-32.5 h-11.25 object-contain'
                  fetchPriority='high'
                />
              </Link>

              {/* Desktop nav */}
              <nav className='hidden md:flex items-center'>
                <div className='flex items-center bg-white/5 rounded-full backdrop-blur-sm'>
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      hash={item.hash}
                      className={cn(
                        "relative px-5 py-2 text-[15px] text-gray-300 transition-colors hover:text-white",
                        activeSection === item.label && "text-white",
                      )}>
                      {item.label}
                      {activeSection === item.label && (
                        <motion.div
                          layoutId='navIndicator'
                          className='absolute inset-0 rounded-full bg-white/8'
                          transition={{
                            type: "spring",
                            bounce: 0.25,
                            duration: 0.5,
                          }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Right section */}
              <div className='flex items-center gap-2'>
                <div className='hidden lg:flex items-center'>
                  <a
                    href='tel:+254792554525'
                    className='group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/8 transition-colors'>
                    <IconPhone className='w-4 h-4 text-[#8A7CFF]' />
                    <span className='text-[15px] text-gray-300 group-hover:text-white'>
                      0792 554525
                    </span>
                  </a>
                </div>

                <div className='md:hidden'>
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
