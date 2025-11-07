import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Twitter, Send } from 'lucide-react';
import { Button } from './ui/button';

const Connect = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/anudeep-batchu-48687b267',
      gradient: 'from-indigo-500 to-blue-500',
      hoverColor: 'hover:text-indigo-400',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/anudeep2710',
      gradient: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:text-purple-400',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:anudeepbatchu10@gmail.com',
      gradient: 'from-fuchsia-500 to-pink-500',
      hoverColor: 'hover:text-fuchsia-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/anudeep.batchu',
      gradient: 'from-pink-500 to-rose-500',
      hoverColor: 'hover:text-pink-400',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/anudeepbatchu',
      gradient: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="connect" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                Let's Connect & Collaborate
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              I'm always excited to work on innovative projects and connect with like-minded individuals.
              Let's create something amazing together!
            </p>
          </div>

          {/* Glowing CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            
            <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 md:p-12 space-y-6">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="inline-flex"
              >
                <Send className="w-12 h-12 text-fuchsia-400" />
              </motion.div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Ready to bring your ideas to life?
              </h3>
              
              <p className="text-slate-400 max-w-xl mx-auto">
                Whether it's a groundbreaking app, an AI solution, or a full-stack platform,
                I'm here to turn vision into reality.
              </p>

              <Button
                onClick={() => window.location.href = 'mailto:anudeepbatchu10@gmail.com'}
                className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 hover:from-indigo-600 hover:via-fuchsia-600 hover:to-purple-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-fuchsia-500/30 hover:shadow-fuchsia-500/50 transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="pt-8"
          >
            <p className="text-slate-500 mb-6 text-sm uppercase tracking-wider">Connect with me on</p>
            
            <div className="flex flex-wrap justify-center items-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 },
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r ${social.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    
                    <div className={`relative w-14 h-14 rounded-full bg-slate-900/50 border border-slate-800 group-hover:border-indigo-500/50 flex items-center justify-center transition-all duration-300`}>
                      <Icon className={`w-6 h-6 text-slate-400 ${social.hoverColor} transition-colors duration-300`} />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;