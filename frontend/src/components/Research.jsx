import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Award, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

const Research = () => {
  const publications = [
    {
      title: 'CrossEmbedUID: Cross-Platform User Identification',
      conference: '16th ICCNT 2025',
      description:
        'Developed a novel multi-modal framework achieving 87% F1-score in identifying users across platforms, outperforming baseline models by 11.5%.',
      achievement: '87% F1-Score',
      gradient: 'from-indigo-500 to-purple-500',
      link: 'https://www.linkedin.com/posts/anudeep-batchu-48687b267_crossembeduid-activity-7355587608229392384-KQX1',
    },
    {
      title: 'Multi-Modal Phishing Detection with GNNs and BERT',
      conference: '16th ICCNT 2025',
      description:
        'Architected a robust, multi-modal system using Graph Neural Networks and BERT, attaining 94.2% accuracy on a dataset of over 549,000 URLs.',
      achievement: '94.2% Accuracy',
      gradient: 'from-fuchsia-500 to-pink-500',
      link: 'https://www.linkedin.com/posts/anudeep-batchu-48687b267_phishing-detection-with-gnns-bert-user-activity-7355595473807708162-Fk01',
    },
  ];

  const otherAchievements = [
    {
      title: 'OLabs Hackathon Winner',
      organization: 'Amrita Vishwa Vidyapeetham',
      description:
        'Led a team of 5 to develop an AI-powered chatbot, increasing engagement by 35% and reducing latency by 25%. Secured victory among 194 teams.',
      icon: Award,
      link: 'https://www.linkedin.com/posts/rohith-varma-datla-0736b2281_olabshackathon-edtech-ai-ugcPost-7301984657703608321-w1Q5',
    },
    {
      title: 'NASA Space Apps Challenge Winner',
      organization: 'Best Engineering Solution Award',
      description:
        'Led a team of 6 to develop an innovative 3D Orrery web application with real-time asteroid tracking. Engineered scalable visualizations enhancing user engagement by 40%.',
      icon: FileText,
      link: 'https://www.linkedin.com/posts/amritacomputing_amritaproud-hackathonwinners-nasachallenge-activity-7248903608304316416-utvV',
      demo: 'https://space-apps-teal.vercel.app/',
    },
  ];

  return (
    <section id="research" className="relative py-20 px-6">
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
              Research & Achievements
            </span>
          </h2>
          <p className="text-lg text-slate-400">Published research and notable accomplishments</p>
        </motion.div>

        {/* Publications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-indigo-500/50 transition-all duration-300 overflow-hidden group">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${pub.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                <div className="relative p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${pub.gradient} p-3 shadow-lg flex-shrink-0`}
                    >
                      <FileText className="w-full h-full text-white" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                      <Badge variant="outline" className="border-indigo-500/50 text-indigo-400 bg-indigo-500/10 mb-2">
                        {pub.conference}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed">{pub.description}</p>

                  <div className="flex items-center gap-2 pt-2">
                    <Badge className={`bg-gradient-to-r ${pub.gradient} text-white border-0`}>
                      {pub.achievement}
                    </Badge>
                  </div>

                  {pub.link && (
                    <motion.a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Post</span>
                    </motion.a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {otherAchievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-900/30 backdrop-blur-sm border-slate-800 hover:border-purple-500/50 transition-all duration-300">
                  <div className="p-6 space-y-3">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 p-2.5 flex-shrink-0">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white mb-1">{achievement.title}</h4>
                        <p className="text-sm text-indigo-400 font-medium mb-2">{achievement.organization}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
                        
                        {achievement.link && (
                          <motion.a
                            href={achievement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 text-sm text-fuchsia-400 hover:text-fuchsia-300 transition-colors mt-3"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>View Post</span>
                          </motion.a>
                        )}
                        
                        {achievement.demo && (
                          <motion.a
                            href={achievement.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors mt-3 ml-4"
                          >
                            <ExternalLink className="w-4 h-4" />
                            <span>Live Demo</span>
                          </motion.a>
                        )}
                      </div>
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

export default Research;