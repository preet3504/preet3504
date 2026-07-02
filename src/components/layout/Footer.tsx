'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/lib/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="pt-12 border-t border-zinc-900 text-center font-mono text-[10px] text-zinc-700 uppercase tracking-[0.2em] pb-12">
      Built with intentionality & restraint. <br />
      &copy; {new Date().getFullYear()} {PERSONAL_INFO.name.toUpperCase()} // EOF
    </footer>
  );
};
