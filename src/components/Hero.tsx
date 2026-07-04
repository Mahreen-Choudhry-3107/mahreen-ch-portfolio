'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = typingRef.current;
    if (!el) return;
    const text = 'Software Engineer & Full Stack Developer';
    let i = 0;
    const type = () => {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(type, 50 + Math.random() * 30);
      }
    };
    const timer = setTimeout(type, 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const els = Array.from(contentRef.current.children) as HTMLElement[];
    gsap.fromTo(
      els,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center text-center px-10"
    >
      <div ref={contentRef} className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
          Hi, I&apos;m <span className="text-accent">Mahreen Choudhry</span>
        </h1>
        <p className="text-lg text-gray-400 mb-5 min-h-[1.5em]">
          <span ref={typingRef} />
          <span className="text-accent font-light animate-[blink_0.8s_step-end_infinite]">|</span>
        </p>
        <p className="text-base text-gray-400 leading-relaxed mb-8">
          I build modern, scalable, and high-performance full-stack web applications that combine clean code, intuitive user experiences, and reliable backend architecture. From designing responsive interfaces to developing secure APIs and deploying cloud-ready solutions, I focus on creating products that are both functional and impactful.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="bg-accent text-black font-semibold text-sm px-7 py-3 rounded-md transition-all hover:bg-accent-hover hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-600 text-white font-semibold text-sm px-7 py-3 rounded-md transition-all hover:border-accent hover:text-accent"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
