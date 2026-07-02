'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="section-anchor mb-32 pt-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-cyan-500 text-sm mb-6 tracking-tight flex items-center gap-2"
      >
        <span className="opacity-50">01.</span>
        <span>const introduction = async () =&gt; {'{'}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-tighter mb-8 text-white leading-[0.9] uppercase"
      >
        Engineering <br /> <span className="text-zinc-700">Intelligent</span> <br /> Systems.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mb-12"
      >
        <p className="text-xl text-zinc-400 leading-relaxed font-light">
          Hi, I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>. {PERSONAL_INFO.heroDescription}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 font-mono"
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-black text-sm font-bold rounded-[2px] hover:bg-cyan-500 transition-all duration-300"
        >
          View_Projects()
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-zinc-800 text-zinc-400 text-sm hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 rounded-[2px]"
        >
          ./contact_me.sh
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-mono text-cyan-500 text-sm mt-8 opacity-50"
      >
        <span>{'}'}</span>
      </motion.div>
    </section>
  );
};
