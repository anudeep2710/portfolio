import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Research from '../components/Research';
import TechStack from '../components/TechStack';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 dark:from-slate-950 dark:via-indigo-950 dark:to-slate-900 light:from-slate-50 light:via-indigo-50 light:to-slate-100 transition-colors duration-500">
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
          opacity
        }}
      />
      
      <Header />
      <Hero />
      <About />
      <Projects />
      <Research />
      <TechStack />
      <Connect />
      <Footer />
    </div>
  );
};

export default Portfolio;