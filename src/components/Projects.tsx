'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projects } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.project-animate'),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' } }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="relative z-10 py-20">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="project-animate text-3xl font-bold mb-10 relative inline-block text-white">
          Projects
          <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-accent rounded" />
        </h2>
        <div className="flex flex-col gap-5">
          {projects.map((project, i) => (
            <div
              key={i}
              className="project-animate bg-white/[0.05] border border-white/[0.1] rounded-xl p-7 transition-all hover:border-accent/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_rgba(2,175,188,0.12)]"
            >
              <h3 className="text-lg font-bold text-white mb-2.5">{project.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{project.desc}</p>
              <div
                className="overflow-hidden mb-5"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                }}
              >
                <div className="flex gap-2.5 w-max tech-scroll">
                  {[...project.tags, ...project.tags].map((tag, j) => (
                    <span
                      key={j}
                      className="shrink-0 text-[11px] font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-2 rounded-md bg-accent text-black transition-all hover:bg-accent-hover"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-2 rounded-md border border-gray-600 text-white transition-all hover:border-accent hover:text-accent"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
