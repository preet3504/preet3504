'use client';

import React, { useState, useEffect } from 'react';
import { Info } from 'lucide-react';

export const TableOfContents: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If at the bottom of the page, activate the last section
      if (scrollY + windowHeight >= documentHeight - 50) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Find the section whose top is closest to (but not past) the viewport top area
      let currentSection = sectionIds[0];
      const offset = windowHeight * 0.3;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset) {
            currentSection = id;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tocItems = [
    { id: 'home', label: 'Introduction' },
    { id: 'about', label: 'Technical Summary' },
    { id: 'experience', label: 'Git History' },
    { id: 'projects', label: 'Repositories' },
    { id: 'skills', label: 'Tech Stack' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <aside className="hidden xl:flex flex-col w-64 h-screen sticky top-0 p-8 pt-20 border-l border-zinc-900">
      <div className="text-[10px] font-mono text-zinc-600 mb-6 tracking-tighter uppercase">On this page</div>
      <ul className="space-y-3 text-xs">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`transition-colors duration-200 ${activeSection === item.id ? 'text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-12 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-[2px]">
        <div className="flex items-center gap-2 mb-2 text-cyan-400">
          <Info size={14} />
          <span className="text-[10px] font-mono font-bold uppercase">Status</span>
        </div>
        <p className="text-[10px] leading-relaxed text-zinc-500">
          Currently available for remote opportunities in AI/Full-Stack Engineering.
        </p>
      </div>
    </aside>
  );
};
