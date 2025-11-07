import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <motion.p
            className="text-slate-400 flex items-center justify-center gap-2 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span>© 2025 Anudeep Batchu — Designed with</span>
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <Heart className="w-5 h-5 text-fuchsia-500 fill-fuchsia-500 inline" />
            </motion.span>
            <span>
              <span className="text-purple-400 font-semibold">Passion</span>,{' '}
              <span className="text-fuchsia-400 font-semibold">Creativity</span> &{' '}
              <span className="text-indigo-400 font-semibold">React</span>
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 text-sm text-slate-500"
          >
            <motion.a
              href="#about"
              className="hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              About
            </motion.a>
            <motion.a
              href="#projects"
              className="hover:text-fuchsia-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#research"
              className="hover:text-purple-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Research
            </motion.a>
            <motion.a
              href="#connect"
              className="hover:text-indigo-400 transition-colors duration-300"
              whileHover={{ y: -2 }}
            >
              Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated bottom gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          backgroundSize: '200% 100%',
        }}
      />
    </footer>
  );
};

export default Footer;