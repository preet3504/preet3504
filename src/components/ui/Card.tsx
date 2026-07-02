'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false,
  gradient = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={cn(
        'bg-zinc-950/50 border border-zinc-900 rounded-[2px] p-6',
        hover && 'hover:border-zinc-700 transition-colors duration-300',
        gradient && 'border-cyan-500/20 bg-cyan-500/[0.02]',
        className
      )}
    >
      {children}
    </motion.div>
  );
};
