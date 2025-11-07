import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Zomato Data Analysis',
      subtitle: 'Python Data Analysis Project',
      description:
        'Performed exploratory data analysis on the Zomato dataset using Python to determine optimal restaurant type, best location, and preferred services for a new business setup. Utilized NumPy, Pandas, Matplotlib, and Seaborn for actionable insights.',
      tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn'],
      gradient: 'from-indigo-500 to-purple-600',
      glowColor: 'indigo',
      year: '2025',
      github: 'https://github.com/anudeep2710/Zomato-Data-Analysis-Using-Python.git',
    },
    {
      title: 'HealthConnect',
      subtitle: 'AI Telemedicine Platform',
      description:
        'Co-developed a full-stack, cloud-native telemedicine platform to tackle healthcare inaccessibility. Architected a scalable backend with Spring Boot deployed on Google Cloud Platform with real-time chat and digital prescriptions.',
      tech: ['Angular', 'Spring Boot', 'GCP', 'WebSocket'],
      gradient: 'from-fuchsia-500 to-pink-600',
      glowColor: 'fuchsia',
      year: '2025',
    },
    {
      title: 'TalkToYourDocument',
      subtitle: 'AI Document Analyzer',
      description:
        'Architected a full-stack platform allowing users to interact with documents using natural language. Integrated Gemini AI with FastAPI backend, reducing information retrieval time by 90% and boosting productivity by 40%.',
      tech: ['Flutter', 'FastAPI', 'Gemini AI', 'GCP', 'Firebase'],
      gradient: 'from-purple-500 to-indigo-600',
      glowColor: 'purple',
      year: '2025',
      github: 'https://github.com/anudeep2710/text_summarizer',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-6">
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
              Signature Projects
            </span>
          </h2>
          <p className="text-lg text-slate-400">
            Innovative solutions powered by AI and cutting-edge technology
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -15,
                  transition: { duration: 0.3 },
                }}
                className="h-full"
              >
                <Card className="relative h-full bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden group">
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  />

                  {/* Glowing orb effect */}
                  <motion.div
                    className={`absolute -top-20 -right-20 w-40 h-40 bg-${project.glowColor}-500 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  />

                  <div className="relative p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                        <p className="text-sm text-slate-400 font-medium">{project.subtitle}</p>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-indigo-500/50 text-indigo-400 bg-indigo-500/10"
                      >
                        {project.year}
                      </Badge>
                    </div>

                    <p className="text-slate-300 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <motion.div
                      className="flex gap-4 pt-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                          <Code className="w-4 h-4" />
                          <span>View Code</span>
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;