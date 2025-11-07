import React from 'react';
import { motion } from 'framer-motion';
import {
  Code,
  Database,
  Smartphone,
  Cloud,
  GitBranch,
  BarChart3,
  Shield,
  Brain,
} from 'lucide-react';

const TechStack = () => {
  const skills = [
    {
      category: 'Languages',
      icon: Code,
      items: ['Python', 'Java', 'C++', 'Dart', 'JavaScript', 'HTML/CSS'],
      gradient: 'from-indigo-500 to-blue-500',
    },
    {
      category: 'Frameworks',
      icon: Smartphone,
      items: ['Flutter', 'FastAPI', 'Angular', 'Spring Boot', 'Streamlit'],
      gradient: 'from-fuchsia-500 to-pink-500',
    },
    {
      category: 'Databases',
      icon: Database,
      items: ['SQL', 'Firebase', 'MongoDB', 'PostgreSQL'],
      gradient: 'from-purple-500 to-indigo-500',
    },
    {
      category: 'Cloud & Tools',
      icon: Cloud,
      items: ['Google Cloud Platform', 'Git', 'Linux', 'Jira', 'Docker'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      category: 'AI/ML',
      icon: Brain,
      items: ['TensorFlow', 'Scikit-learn', 'BERT', 'GNN', 'Gemini AI'],
      gradient: 'from-pink-500 to-fuchsia-500',
    },
    {
      category: 'Specializations',
      icon: Shield,
      items: ['Full Stack Dev', 'App Development', 'Machine Learning', 'Data Analysis'],
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="relative py-20 px-6">
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
              Tech Stack & Skills
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Cutting-edge technologies I work with to build exceptional solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skills.map((skillGroup, index) => {
            const Icon = skillGroup.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: { duration: 0.5 },
                }}
                className="relative group"
              >
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 overflow-hidden hover:border-indigo-500/50 transition-all duration-300">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${skillGroup.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  />

                  <div className="relative space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillGroup.gradient} p-2.5 shadow-lg`}
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((item, itemIndex) => (
                        <motion.span
                          key={itemIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: itemIndex * 0.05 }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: 'rgba(139, 92, 246, 0.2)',
                          }}
                          className="px-3 py-1.5 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-200 cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Animated floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;