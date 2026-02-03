'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Users } from 'lucide-react';
import { SKILLS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, any> = {
    'Frontend Development': Code,
    'Backend Development': Server,
    'Databases & Caching': Database,
    'Cloud & DevOps': Cloud,
    'Soft Skills': Users,
  };

  const categoryColors: Record<string, 'accent' | 'purple' | 'success' | 'default'> = {
    'Frontend Development': 'accent',
    'Backend Development': 'purple',
    'Databases & Caching': 'success',
    'Cloud & DevOps': 'accent',
    'Soft Skills': 'default',
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="Technologies and tools I work with" />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, skills], index) => {
              const Icon = categoryIcons[category] || Code;
              const colorVariant = categoryColors[category] || 'default';

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-blue-400" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant={colorVariant}>{skill}</Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
