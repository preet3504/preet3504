'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null },
  ];

  const iconMap: Record<string, any> = { Linkedin, Github, Mail, Phone };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Let's discuss your next project or opportunity" />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card gradient className="h-full">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-blue-400" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-white hover:text-blue-400 transition-colors">{info.value}</a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Connect on Social Media</h4>
                  <div className="flex gap-3">
                    {SOCIAL_LINKS.map((social) => {
                      const Icon = iconMap[social.icon];
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="w-12 h-12 bg-[#1a1a1a] border border-[#27272a] rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/50 transition-all"
                        >
                          <Icon size={20} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card gradient>
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#27272a] rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Your Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#27272a] rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#27272a] rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full" icon={<Send size={20} />}>
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
