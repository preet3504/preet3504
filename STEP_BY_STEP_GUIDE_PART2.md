# 🚀 Step-by-Step Guide - PART 2: Section Components

> **Continue from Part 1. Create these section components in order.**

---

## STEP 10: Create Section Components

### ✅ File 11: `src/components/sections/Hero.tsx`

**Purpose:** Eye-catching hero section with animated introduction

```typescript
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Greeting Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8"
          >
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient">
              {PERSONAL_INFO.name}
            </span>
          </motion.h1>

          {/* Title with Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Code2 className="text-blue-400" size={32} />
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-medium">
              {PERSONAL_INFO.title}
            </h2>
            <Rocket className="text-purple-400" size={32} />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {PERSONAL_INFO.heroDescription}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('/Preet-resume.pdf', '_blank')}
              className="w-full sm:w-auto"
            >
              View Resume
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
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
```

### ✅ File 12: `src/components/sections/About.tsx`

**Purpose:** About section with focus areas

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Network, Award, TrendingUp } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export const About: React.FC = () => {
  const iconMap: Record<string, any> = {
    Brain,
    Network,
  };

  const stats = [
    { icon: Award, label: 'Award Winner', value: '2024' },
    { icon: TrendingUp, label: 'Performance Boost', value: '40%' },
    { icon: Code2, label: 'Projects Delivered', value: '10+' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Passionate about building scalable solutions"
        />

        <div className="max-w-4xl mx-auto">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Card gradient>
              <p className="text-lg text-gray-300 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </Card>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Current Focus Areas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FOCUS_AREAS.map((area, index) => {
                const Icon = iconMap[area.icon];
                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card gradient>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="text-blue-400" size={24} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {area.title}
                          </h4>
                          <p className="text-gray-400 leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
```

### ✅ File 13: `src/components/sections/Experience.tsx`

**Purpose:** Professional experience with timeline

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Professional Experience"
          subtitle="Building impactful solutions in production environments"
        />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card gradient className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-500 rounded-full border-4 border-[#0a0a0a] hidden md:block" />

                {/* Header */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-400 text-lg font-semibold mb-2">
                        <Briefcase size={20} />
                        {exp.company}
                      </div>
                    </div>
                    <Badge variant="accent">{exp.type}</Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <CheckCircle2
                        size={20}
                        className="text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      />
                      <p className="text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### ✅ File 14: `src/components/sections/Skills.tsx`

**Purpose:** Technical skills showcase with categories

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Users } from 'lucide-react';
import { SKILLS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';

export const Skills: React.FC = () => {
  const categoryIcons: Record<string, any> = {
    'Frontend Development': Code,
    'Backend Development': Server,
    'Databases & Caching': Database,
    'Cloud & DevOps': Cloud,
    'Soft Skills': Users,
  };

  const categoryColors: Record<string, 'accent' | 'purple' | 'success' | 'default'> = {
    'Frontend Development': 'accent',
    'Backend Development': 'purple',
    'Databases & Caching': 'success',
    'Cloud & DevOps': 'accent',
    'Soft Skills': 'default',
  };

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Technical Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, skills], index) => {
              const Icon = categoryIcons[category] || Code;
              const colorVariant = categoryColors[category] || 'default';

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Icon className="text-blue-400" size={20} />
                      </div>
                      <h3 className="text-lg font-semibold text-white">
                        {category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge key={skill} variant={colorVariant}>
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
```

### ✅ File 15: `src/components/sections/Education.tsx`

**Purpose:** Education details

```typescript
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { EDUCATION } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-32 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="Academic background and qualifications"
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card gradient className="text-center md:text-left">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 animate-glow">
                  <GraduationCap size={40} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {EDUCATION.degree}
                  </h3>
                  <p className="text-xl text-blue-400 font-semibold mb-4">
                    {EDUCATION.institution}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {EDUCATION.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {EDUCATION.duration}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
```

### ✅ File 16: `src/components/sections/Contact.tsx`

**Purpose:** Contact section with social links

```typescript
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:${PERSONAL_INFO.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
    { icon: Phone, label: 'Phone', value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
    { icon: MapPin, label: 'Location', value: PERSONAL_INFO.location, href: null },
  ];

  const iconMap: Record<string, any> = {
    Linkedin,
    Github,
    Mail,
    Phone,
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's discuss your next project or opportunity"
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card gradient className="h-full">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-8">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-blue-400" size={20} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-white hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-white">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">
                    Connect on Social Media
                  </h4>
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

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card gradient>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Name
                    </label>
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
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Your Email
                    </label>
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
                    <label className="block text-gray-300 mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#27272a] rounded-lg text-white focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    icon={<Send size={20} />}
                  >
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
```

---

**Continue to Part 3 for Final Assembly...**

This is Part 2. Would you like me to continue with Part 3 (Final Assembly & Deployment)?
