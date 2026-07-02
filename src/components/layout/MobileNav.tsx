'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-cyan-500 rounded-[2px] flex items-center justify-center">
            <span className="text-black font-mono font-bold text-[10px]">{PERSONAL_INFO.name.charAt(0)}</span>
          </div>
          <span className="font-bold tracking-tight text-sm">{PERSONAL_INFO.name}</span>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-white transition-colors">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-black"
          >
            <div className="py-6 space-y-4">
              {NAV_LINKS.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-mono text-zinc-400 hover:text-cyan-500 transition-colors"
                >
                  <span className="text-zinc-700 mr-4">0{idx + 1}.</span>
                  {link.name}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
