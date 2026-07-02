'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-anchor mb-32">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Contact</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
        <span className="font-mono text-xs text-zinc-600 uppercase tracking-widest">SYSTEM.HALT()</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl font-bold mb-6">Let's build something scalable.</h3>
          <p className="text-zinc-400 font-light mb-10 leading-relaxed text-lg">
            I'm currently looking for new opportunities in AI Engineering and Full-Stack development. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="space-y-6 font-mono text-sm">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-zinc-500 hover:text-cyan-400 transition-colors">
              <Mail size={18} className="text-cyan-500" />
              {PERSONAL_INFO.email}
            </a>
            <div className="flex items-center gap-3 text-zinc-500">
              <MapPin size={18} className="text-cyan-500" />
              {PERSONAL_INFO.location}
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-zinc-600 uppercase tracking-widest">input_name</label>
              <input
                type="text"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-900 p-4 rounded-[2px] text-sm focus:border-cyan-500 focus:outline-none transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-zinc-600 uppercase tracking-widest">input_email</label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-900 p-4 rounded-[2px] text-sm focus:border-cyan-500 focus:outline-none transition-colors text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="block font-mono text-[10px] text-zinc-600 uppercase tracking-widest">message_body</label>
              <textarea
                rows={4}
                placeholder="Hello..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-900 p-4 rounded-[2px] text-sm focus:border-cyan-500 focus:outline-none transition-colors text-white resize-none"
              ></textarea>
            </div>
            <Button 
              type="submit" 
              className="w-full py-4" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : submitStatus === 'success' ? 'SENT_SUCCESSFULLY' : 'SEND_MESSAGE'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
