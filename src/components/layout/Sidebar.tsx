'use client';

import React, { useState, useEffect } from 'react';
import { LayoutDashboard, User, History, FolderCode, Bolt, Mail, Github, Linkedin, AtSign } from 'lucide-react';
import { PERSONAL_INFO, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import Link from 'next/link';

export const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-10% 0px -70% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'home': return <LayoutDashboard size={18} />;
      case 'about': return <User size={18} />;
      case 'experience': return <History size={18} />;
      case 'projects': return <FolderCode size={18} />;
      case 'skills': return <Bolt size={18} />;
      case 'contact': return <Mail size={18} />;
      default: return <LayoutDashboard size={18} />;
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r border-zinc-900 bg-black p-8 shrink-0">
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-cyan-500 rounded-[2px] flex items-center justify-center">
            <span className="text-black font-mono font-bold text-xs">
              {PERSONAL_INFO.name.charAt(0)}
            </span>
          </div>
          <span className="font-bold tracking-tight text-xl">{PERSONAL_INFO.name}</span>
        </div>
        <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{PERSONAL_INFO.title.split(' ')[0]} Engineer</p>
      </div>

      <nav className="flex-1 space-y-1">
        <div className="text-[10px] font-mono text-zinc-600 mb-4 tracking-tighter uppercase">Documentation</div>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3 py-2 text-sm transition-colors duration-200 ${activeSection === link.href.replace('#', '')
              ? 'text-cyan-500 font-medium'
              : 'text-zinc-400 hover:text-white'
              }`}
          >
            {getIcon(link.name)}
            {link.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-zinc-900">
        <div className="flex gap-4 text-zinc-500">
          {SOCIAL_LINKS.map((social) => {
            const Icon = social.name === 'GitHub' ? Github : social.name === 'LinkedIn' ? Linkedin : AtSign;
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                className="hover:text-cyan-400 transition-colors"
                aria-label={social.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};
