import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { Card } from './ui/card';

const About = () => {
  const achievements = [
    {
      icon: Trophy,
      title: 'NASA Space Apps Winner',
      description: 'Best Engineering Solution Award',
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Briefcase,
      title: 'Flutter Developer Intern',
      description: '@ Capovex Research & Analytics',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
      icon: Award,
      title: 'AI & Cloud Researcher',
      description: '2 Publications at ICCNT 2025',
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      icon: GraduationCap,
      title: 'B.Tech CSE',
      description: 'Amrita Vishwa Vidyapeetham',
      gradient: 'from-indigo-500 to-fuchsia-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A passionate <span className="text-fuchsia-400 font-semibold">Computer Science student</span> with expertise in{' '}
            <span className="text-indigo-400 font-semibold">Full Stack Development</span> and{' '}
            <span className="text-purple-400 font-semibold">Flutter App Development</span>.
            I thrive on creating impactful tech solutions through analytical thinking, cross-functional collaboration,
            and continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="relative h-full bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden group">
                  {/* Glowing effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative p-6 space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} p-3 shadow-lg`}
                    >
                      <Icon className="w-full h-full text-white" />
                    </motion.div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                      <p className="text-slate-400">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;