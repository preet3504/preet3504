'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-anchor mb-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">./LIST_REPOS.sh</span>
      </div>

      <div className="space-y-12">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border border-zinc-900 hover:border-zinc-700 transition-all duration-300 rounded-[2px] overflow-hidden bg-black"
          >
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 p-8 bg-zinc-950/50 border-b lg:border-b-0 lg:border-r border-zinc-900">
                <div className="font-mono text-[10px] text-zinc-600 mb-4 uppercase tracking-widest">Repository_0{project.id}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5 border border-zinc-800 text-zinc-500 uppercase"
                    >
                      {tech.replace('.', '_')}
                    </span>
                  ))}
                </div>
                {/* @ts-ignore */}
                {project.liveUrl && (
                  <a
                    // @ts-ignore
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-cyan-500 hover:gap-3 transition-all"
                  >
                    RUN_DEPLOY <ArrowRight size={14} />
                  </a>
                )}
              </div>
              <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                <p className="text-zinc-400 font-light mb-6 leading-relaxed">
                  {project.achievements[0]}
                </p>
                <div className="space-y-3">
                  {project.achievements.slice(1, 3).map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                      <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-green-500' : 'bg-cyan-500'}`}></span>
                      <span className="leading-relaxed flex-1">{achievement.split(',')[0]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
