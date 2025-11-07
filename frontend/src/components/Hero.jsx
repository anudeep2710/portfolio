import React from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const handleViewWork = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-10"
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-fuchsia-400" />
            <span className="text-sm text-slate-300 font-medium">Full Stack Developer & AI Researcher</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              Turning Ideas into
            </span>
            <br />
            <span className="text-white">Impactful Realities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed"
          >
            I create immersive applications that blend{' '}
            <span className="text-fuchsia-400 font-semibold">functionality</span>,{' '}
            <span className="text-indigo-400 font-semibold">intelligence</span>, and{' '}
            <span className="text-purple-400 font-semibold">emotion</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button
              onClick={handleViewWork}
              className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 hover:from-indigo-600 hover:via-fuchsia-600 hover:to-purple-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition-all duration-300"
            >
              View My Work
            </Button>
            
            <Button
              onClick={() => window.open('https://customer-assets.emergentagent.com/job_a283dc4d-6464-48a5-bc20-04017544be0c/artifacts/ikr81qr0_yhh%20%281%29.pdf', '_blank')}
              variant="outline"
              className="border-2 border-indigo-500/50 hover:border-indigo-500 bg-transparent hover:bg-indigo-500/10 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            className="relative w-80 h-80 md:w-96 md:h-96"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* Glowing rings */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 opacity-20 blur-2xl" />
            <div className="absolute inset-4 rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-fuchsia-500 opacity-30 blur-xl" />
          </motion.div>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-2xl shadow-fuchsia-500/50">
              <img
                src="https://customer-assets.emergentagent.com/job_a283dc4d-6464-48a5-bc20-04017544be0c/artifacts/p0ejpckr_Profile.jpg"
                alt="Anudeep Batchu"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;