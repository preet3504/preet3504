'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Professional Experience" subtitle="Building impactful solutions in production environments" />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card gradient className="relative">
                <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-500 rounded-full border-4 border-[#0a0a0a] hidden md:block" />

                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-blue-400 text-lg font-semibold mb-2">
                        <Briefcase size={20} />
                        {exp.company}
                      </div>
                    </div>
                    <Badge variant="accent">{exp.type}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
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
