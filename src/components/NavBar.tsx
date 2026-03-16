"use client";

import { useEffect, useState } from "react";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 md:py-5 ${
        scrolled
          ? "backdrop-blur-md bg-white/55 border-b border-slate-300/80"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="font-old-english text-sm tracking-[0.28em] uppercase text-slate-700">
        ✳ YOUR&nbsp;NAME
      </div>
      <nav className="flex items-center gap-6 text-[0.7rem] md:text-xs tracking-[0.28em] uppercase text-slate-700">
        <a
          href="#projects"
          className="relative pb-1 transition-colors hover:text-black"
        >
          <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-slate-500 after:transition-all after:duration-200 hover:after:w-full">
            Projects
          </span>
        </a>
        <span className="asterisk text-xs md:text-sm">✳</span>
        <a
          href="#contact"
          className="relative pb-1 transition-colors hover:text-black"
        >
          <span className="after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-slate-500 after:transition-all after:duration-200 hover:after:w-full">
            Contact
          </span>
        </a>
      </nav>
    </header>
  );
}

