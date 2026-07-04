'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skills } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll('.skill-label'),
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, stagger: 0.15, scrollTrigger: { trigger: el, start: 'top 80%' } }
    );

    gsap.fromTo(
      el.querySelectorAll('.skill-row'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, scrollTrigger: { trigger: el, start: 'top 75%' } }
    );
  }, []);

  const categories = [
    { key: 'frontend' as const, label: 'Frontend' },
    { key: 'backend' as const, label: 'Backend' },
    { key: 'tools' as const, label: 'Tools & Platforms' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="relative z-10 py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="skill-label text-3xl font-bold mb-10 relative inline-block text-center w-full block text-white">
          Skills
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-accent rounded" />
        </h2>
        {categories.map((cat, idx) => (
          <div key={cat.key} className="mb-12 last:mb-0">
            <div className="skill-label text-xs font-semibold uppercase tracking-[3px] text-accent mb-5 pl-10">
              {cat.label}
            </div>
            <div
              className="skill-row overflow-hidden"
              style={{
                maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
              }}
            >
              <div
                className={`flex gap-5 w-max ${
                  idx % 2 !== 0 ? 'marquee-track reverse' : 'marquee-track'
                }`}
              >
                {[...skills[cat.key], ...skills[cat.key]].map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 px-6 py-3.5 bg-white/[0.05] border border-white/[0.1] rounded-xl min-w-[160px] transition-all hover:border-accent hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(2,175,188,0.1)] hover:-translate-y-0.5 shrink-0"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
