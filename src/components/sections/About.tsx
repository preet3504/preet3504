'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Award, TrendingUp, Code2 } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export const About: React.FC = () => {
  const iconMap: Record<string, any> = { Brain, Network };
  const stats = [
    { icon: Award, label: 'Award Winner', value: '2024' },
    { icon: TrendingUp, label: 'Performance Boost', value: '40%' },
    { icon: Code2, label: 'Projects Delivered', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Passionate about building scalable solutions" />

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card gradient>
              <p className="text-lg text-gray-300 leading-relaxed">{PERSONAL_INFO.summary}</p>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Current Focus Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOCUS_AREAS.map((area, index) => {
                const Icon = iconMap[area.icon];
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card gradient>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-blue-400" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">{area.title}</h4>
                          <p className="text-gray-400 leading-relaxed">{area.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
