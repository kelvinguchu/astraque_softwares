import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (localStorage.getItem("theme") === null) {
      setTheme("dark");
    }
  }, [setTheme]);

  if (!mounted) return null;

  return (
    <div className='relative flex w-fit items-center rounded-full'>
      <button
        className={`${TOGGLE_CLASSES} ${theme === "light" ? "text-slate-800" : "text-slate-300"}`}
        onClick={() => setTheme("light")}>
        <IconSun className='relative z-10 text-lg md:text-sm w-4 h-4' />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${theme === "dark" ? "text-white" : "text-slate-800"}`}
        onClick={() => setTheme("dark")}>
        <IconMoon className='relative z-10 text-lg md:text-sm w-4 h-4' />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${theme === "dark" ? "justify-end" : "justify-start"}`}>
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-linear-to-r from-violet-600 to-indigo-600'
        />
      </div>
    </div>
  );
}
