'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, CheckCircle2, ExternalLink } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Key Projects" subtitle="Showcasing technical depth and innovation" />

        <div className="max-w-4xl mx-auto space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card gradient className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500" />
                
                <div className="mb-6">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <FolderGit2 className="text-blue-400" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight">{project.title}</h3>
                    </div>
                    {/* @ts-ignore */}
                    {project.liveUrl && (
                      <a 
                        // @ts-ignore
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors flex-shrink-0"
                      >
                        <ExternalLink size={18} />
                        <span className="hidden sm:inline">Live Demo</span>
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="accent">{tech}</Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  {project.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2 size={20} className="text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-gray-300 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
