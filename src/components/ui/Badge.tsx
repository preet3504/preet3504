import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'accent' | 'success' | 'purple';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default', 
  className 
}) => {
  const variants = {
    default: 'bg-[#1a1a1a] text-gray-300 border-[#3f3f46] hover:border-gray-500',
    accent: 'bg-blue-500/10 text-blue-400 border-blue-500/30 hover:border-blue-500/50',
    success: 'bg-green-500/10 text-green-400 border-green-500/30 hover:border-green-500/50',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30 hover:border-purple-500/50',
  };
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-300',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
