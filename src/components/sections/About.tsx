'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '@/lib/constants';

export const About: React.FC = () => {
  const iconMap: Record<string, any> = { Brain, Network };

  return (
    <section id="about" className="section-anchor mb-32">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-3xl font-bold tracking-tight">About</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
        <span className="font-mono text-xs text-zinc-600">/PREET/README.md</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6 text-zinc-400 leading-relaxed text-lg font-light">
          <p>
            {PERSONAL_INFO.summary}
          </p>
          <p>
            Proven ability in the design of robust backend API systems, optimization of database systems, and integrating production-quality <span className="text-cyan-500 font-mono text-base font-medium">Generative AI pipelines</span>.
          </p>
          
          <div className="flex gap-8 py-4 border-y border-zinc-900 mt-8">
            <div>
              <div className="text-2xl font-bold text-white">99.9%</div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Availability Focus</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">40%</div>
              <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider">Latency Reduction</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="p-6 border border-zinc-900 rounded-[2px] bg-zinc-950/50 h-full">
            <div className="font-mono text-[10px] text-zinc-600 mb-6 uppercase tracking-widest">CURRENT_FOCUS</div>
            <ul className="space-y-6">
              {FOCUS_AREAS.map((area) => {
                const Icon = iconMap[area.icon];
                return (
                  <li key={area.title} className="flex gap-3">
                    <Icon className="text-cyan-500 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <div className="text-sm font-bold text-zinc-200">{area.title}</div>
                      <div className="text-xs text-zinc-500 mt-1 leading-relaxed">{area.description}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
