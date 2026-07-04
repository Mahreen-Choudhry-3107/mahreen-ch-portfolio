'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    gsap.fromTo(
      el.querySelectorAll('.contact-animate'),
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, scrollTrigger: { trigger: el, start: 'top 80%' } }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative z-10 py-20">
      <div className="max-w-5xl mx-auto px-10">
        <h2 className="contact-animate text-3xl font-bold mb-10 relative inline-block text-white">
          Contact
          <span className="absolute -bottom-2 left-0 w-12 h-[3px] bg-accent rounded" />
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="contact-animate text-xl font-bold mb-3 text-white">Let&apos;s work together</h3>
            <p className="contact-animate text-sm text-gray-400 leading-relaxed mb-7">
              Have a project in mind or just want to chat? Feel free to reach out.
              I&apos;m always open to new opportunities and interesting conversations.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="contact-animate flex items-center gap-3 text-sm text-gray-400 no-underline transition-colors hover:text-accent"
              >
                <span className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/email.png" alt="Email" className="w-5 h-5 object-contain" />
                </span>
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-animate flex items-center gap-3 text-sm text-gray-400 no-underline transition-colors hover:text-accent"
              >
                <span className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                </span>
                LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-animate flex items-center gap-3 text-sm text-gray-400 no-underline transition-colors hover:text-accent"
              >
                <span className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/github.png" alt="GitHub" className="w-5 h-5 object-contain" />
                </span>
                GitHub
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="contact-animate flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                required
                className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="contact-animate flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                required
                className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <div className="contact-animate flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Message
              </label>
              <textarea
                placeholder="Your message"
                required
                rows={5}
                className="px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm outline-none transition-colors focus:border-accent resize-vertical"
              />
            </div>
            <button
              type="submit"
              className="contact-animate self-start px-8 py-3 rounded-md border-none text-sm font-semibold cursor-pointer transition-all hover:-translate-y-0.5"
              style={{
                background: sent ? '#22c55e' : '#02AFBC',
                color: sent ? '#fff' : '#000',
              }}
            >
              {sent ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
