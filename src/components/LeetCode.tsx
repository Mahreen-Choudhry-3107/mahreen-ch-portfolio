'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LeetCode() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.fromTo(
      sectionRef.current.querySelectorAll('.lc-animate'),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } }
    );
  }, []);

  return (
    <section id="leetcode" ref={sectionRef} className="relative z-10 py-20">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="lc-animate text-3xl font-bold mb-10 relative inline-block text-white">
          LeetCode
          <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-accent rounded" />
        </h2>

        <div className="lc-animate bg-white/[0.03] border border-white/[0.06] rounded-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                I actively solve Data Structures & Algorithms problems on LeetCode to sharpen my problem-solving skills.
                I enjoy tackling challenges across arrays, trees, graphs, dynamic programming, and more.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['DSA', 'Problem Solving', 'Algorithms', 'Data Structures', 'Competitive Programming'].map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://leetcode.com/u/mahreen_ch24/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold px-5 py-2.5 rounded-md bg-accent text-black transition-all hover:bg-accent-hover hover:-translate-y-0.5"
              >
                View LeetCode Profile
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <div className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="block text-xs font-semibold text-accent uppercase tracking-wider mb-1">Focus</span>
                <span className="text-sm text-gray-400">Consistent Problem Solver</span>
              </div>
              <div className="px-5 py-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <span className="block text-xs font-semibold text-accent uppercase tracking-wider mb-1">Strength</span>
                <span className="text-sm text-gray-400">Strong DSA Fundamentals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
