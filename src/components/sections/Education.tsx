'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION } from '@/lib/constants';

export const Education: React.FC = () => {
  return (
    <section id="education" className="section-anchor mb-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Education</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">ACADEMIC_RECORDS.sh</span>
      </div>

      <div className="relative pl-8 border-l border-zinc-900 ml-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-zinc-700 bg-black"></div>
          
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="font-mono text-xs text-zinc-500">{EDUCATION.duration}</span>
          </div>

          <h3 className="text-2xl font-bold mb-1">{EDUCATION.degree}</h3>
          <div className="text-zinc-400 font-mono text-sm mb-4">
            {EDUCATION.institution} 
            <span className="text-zinc-800 mx-3">|</span> 
            <span className="text-zinc-600">{EDUCATION.location}</span>
          </div>
          
          <p className="text-zinc-500 text-sm font-light italic">
            Specializing in distributed systems and scalable software engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
