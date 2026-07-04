import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import LeetCode from '@/components/LeetCode';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AIChat from '@/components/AIChat';

const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), { ssr: false });

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <LeetCode />
      <Contact />
      <Footer />
      <AIChat />
    </>
  );
}
