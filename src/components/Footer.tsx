'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;
    const el = footerRef.current;

    gsap.fromTo(
      el.querySelectorAll('.footer-animate'),
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 95%' } }
    );
  }, []);

  return (
    <footer ref={footerRef} className="relative z-10 border-t border-white/5 pt-10">
      <div className="max-w-5xl mx-auto px-10">
        <div className="flex flex-col items-center gap-3 pb-8">
          <div className="footer-animate text-2xl font-bold text-accent">Mahreen</div>
          <p className="footer-animate text-sm text-gray-400">
            Designed &amp; Built by Mahreen Choudhry
          </p>
          <div className="footer-animate flex gap-6">
            <a
              href="https://github.com/mahreen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 no-underline transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/mahreen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 no-underline transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mahreen@example.com"
              className="text-sm text-gray-400 no-underline transition-colors hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
        <div className="footer-animate border-t border-white/5 py-4 text-center">
          <span className="text-xs text-gray-600">&copy; 2026 Mahreen Choudhry. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
