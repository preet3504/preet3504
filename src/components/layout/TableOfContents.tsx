'use client';

import React, { useState, useEffect, useCallback } from 'react';
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

      // Keep the URL hash in sync with the visible section
      if (window.location.hash !== `#${currentSection}`) {
        window.history.replaceState(null, '', `#${currentSection}`);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${sectionId}`);
    }
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
      <div className="text-[11px] font-mono text-zinc-400 mb-6 tracking-tighter uppercase">On this page</div>
      <ul className="space-y-3 text-xs">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`transition-colors duration-200 cursor-pointer ${activeSection === item.id ? 'text-white font-medium' : 'text-zinc-500 hover:text-zinc-300'
                }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-8 p-5 bg-cyan-500/5 border border-cyan-500/20 rounded-md">
        <div className="flex items-center gap-2.5 mb-3 text-cyan-400">
          <Info size={16} />
          <span className="text-xs font-mono font-bold uppercase tracking-wide">Status</span>
        </div>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">Available</span>
        </div>
        <p className="text-xs leading-relaxed text-zinc-400">
          Currently open to new opportunities in AI Engineering &amp; Full-Stack Development.
        </p>
      </div>
    </aside>
  );
};
