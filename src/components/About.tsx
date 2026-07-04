'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    const animEls = el.querySelectorAll('.about-animate');
    gsap.fromTo(
      animEls,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: el, start: 'top 80%' } }
    );

    const statEls = el.querySelectorAll('.stat-animate');
    gsap.fromTo(
      statEls,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'back.out(1.7)', delay: 0.3, scrollTrigger: { trigger: el, start: 'top 80%' } }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative z-10 py-24">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="about-animate text-3xl font-bold mb-10 relative inline-block text-white">
          About Me
          <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-accent rounded" />
        </h2>
        <div className="grid md:grid-cols-[2fr_1fr] gap-14 items-start">
          <div>
            {personalInfo.about.map((p, i) => (
              <p key={i} className="about-animate text-sm text-gray-400 leading-relaxed mb-5">
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            {personalInfo.stats.map((s, i) => (
              <div
                key={i}
                className="stat-animate text-center py-6 px-5 border border-accent/15 rounded-lg bg-white/[0.03]"
              >
                <span className="block text-3xl font-bold text-accent mb-1">{s.number}</span>
                <span className="text-xs text-gray-400 uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
