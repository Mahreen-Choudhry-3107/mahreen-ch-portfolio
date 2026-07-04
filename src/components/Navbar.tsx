'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-10 md:px-14 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled
          ? 'py-3 bg-black/95 backdrop-blur-md'
          : 'py-5 bg-black/80 backdrop-blur-md'
      }`}
    >
      <div className="text-xl font-bold text-accent tracking-tight">Mahreen.</div>

      <ul className="hidden md:flex list-none gap-2">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-gray-400 text-sm font-medium px-4 py-2 rounded-md transition-all hover:text-white hover:bg-white/5"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-3">
        <a
          href="/Mahreen_CV.pdf"
          download
          className="text-accent text-sm font-semibold px-5 py-2.5 border border-accent rounded-md transition-all hover:bg-accent hover:text-black"
        >
          Resume
        </a>
      </div>

      <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
        <span className="w-7 h-0.5 bg-white rounded" />
        <span className="w-7 h-0.5 bg-white rounded" />
        <span className="w-7 h-0.5 bg-white rounded" />
      </div>
    </nav>
  );
}
