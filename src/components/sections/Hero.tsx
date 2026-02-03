'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Code2, Rocket } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden mesh-gradient">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="inline-block">
              {PERSONAL_INFO.name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.05,
                    type: "spring",
                    stiffness: 100
                  }}
                  className="inline-block"
                  style={{
                    display: char === ' ' ? 'inline' : 'inline-block',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Code2 className="text-blue-400" size={32} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-medium">{PERSONAL_INFO.title}</h2>
            <Rocket className="text-purple-400" size={32} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {PERSONAL_INFO.heroDescription}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" onClick={scrollToContact} className="w-full sm:w-auto">Get In Touch</Button>
            <Button size="lg" variant="outline" onClick={() => window.open('/Preet-resume.pdf', '_blank')} className="w-full sm:w-auto">View Resume</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 cursor-pointer"
            onClick={scrollToAbout}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
            >
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
