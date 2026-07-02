'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-anchor mb-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Technical Stack</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">STACK.JSON</span>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-950/50 border border-zinc-900 p-8 rounded-[2px] font-mono text-sm leading-relaxed"
      >
        <div className="text-zinc-600 mb-4">{'{'}</div>
        <div className="pl-6 space-y-6">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div key={category}>
              <span className="text-cyan-400">"{category.replace(/ & /g, '_').replace(/ /g, '_')}":</span> [
              <div className="pl-6 flex flex-wrap gap-x-4 gap-y-1 mt-1">
                {skills.map((skill, idx) => (
                  <span key={skill} className="text-zinc-400">
                    "{skill}"{idx < skills.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
              ],
            </div>
          ))}
        </div>
        <div className="text-zinc-600 mt-4">{'}'}</div>
      </motion.div>
    </section>
  );
};
