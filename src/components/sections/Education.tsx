'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { EDUCATION } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education" subtitle="Academic background and qualifications" />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card gradient className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 animate-glow">
                  <GraduationCap size={40} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{EDUCATION.degree}</h3>
                  <p className="text-xl text-blue-400 font-semibold mb-4">{EDUCATION.institution}</p>

                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {EDUCATION.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {EDUCATION.duration}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
