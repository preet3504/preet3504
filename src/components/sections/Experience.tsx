'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '@/lib/constants';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-anchor mb-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">GIT_LOG --ONELINE</span>
      </div>

      <div className="relative pl-8 border-l border-zinc-900 ml-2 space-y-20">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-cyan-500 bg-black"></div>

            <div className="mb-4 flex flex-wrap items-center gap-4">
              <span className="font-mono text-xs text-cyan-500 bg-cyan-500/10 px-2 py-0.5 rounded-[2px] tracking-tight">
                {/* Fixed hash for consistency or dynamic but stable */}
                {exp.company.toLowerCase().replace(/\s/g, '').substring(0, 8)}
              </span>
              <span className="font-mono text-xs text-zinc-600">{exp.duration}</span>
            </div>

            <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
            <div className="text-cyan-500 font-mono text-sm mb-6 flex items-center">
              {exp.company}
              <span className="text-zinc-800 mx-3">|</span>
              <span className="text-zinc-500">{exp.location}</span>
            </div>

            <ul className="space-y-4 max-w-3xl">
              {exp.achievements.map((achievement, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex gap-3 text-zinc-400 font-light leading-relaxed text-base"
                >
                  <span className="text-cyan-500 font-mono flex-shrink-0">+</span>
                  <span>{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
