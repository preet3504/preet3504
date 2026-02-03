# 📋 QUICK REFERENCE CARD

> Keep this handy while building your portfolio!

---

## 🚀 Essential Commands

```bash
# Install dependencies
npm install framer-motion lucide-react react-intersection-observer clsx tailwind-merge

# Create all folders at once
mkdir -p src/components/{ui,sections,layout} src/lib src/types

# Move resume file
mv src/Preet-resume.pdf public/Preet-resume.pdf

# Start development
npm run dev

# Build for production
npm run build

# Deploy to Vercel
vercel --prod
```

---

## 📁 File Creation Order

### 1️⃣ Core Files (Create First)
```
src/lib/utils.ts
src/types/index.ts
src/lib/constants.ts
src/app/globals.css (UPDATE)
```

### 2️⃣ UI Components
```
src/components/ui/Button.tsx
src/components/ui/Card.tsx
src/components/ui/Badge.tsx
src/components/ui/SectionTitle.tsx
```

### 3️⃣ Layout Components
```
src/components/layout/Header.tsx
src/components/layout/Footer.tsx
```

### 4️⃣ Section Components
```
src/components/sections/Hero.tsx
src/components/sections/About.tsx
src/components/sections/Experience.tsx
src/components/sections/Skills.tsx
src/components/sections/Education.tsx
src/components/sections/Contact.tsx
```

### 5️⃣ Main Files (Update Last)
```
src/app/page.tsx (UPDATE)
src/app/layout.tsx (UPDATE)
```

---

## 🎨 Color Codes (Copy-Paste Ready)

```css
/* Background Colors */
#0a0a0a  /* Main background */
#111111  /* Card background */
#1a1a1a  /* Elevated elements */

/* Accent Colors */
#3b82f6  /* Blue - Primary */
#8b5cf6  /* Purple - Secondary */
#06b6d4  /* Cyan - Tertiary */
#10b981  /* Green - Success */

/* Text Colors */
#f9fafb  /* Primary text */
#d1d5db  /* Secondary text */
#9ca3af  /* Muted text */

/* Border Colors */
#27272a  /* Default border */
#3f3f46  /* Light border */
```

---

## 📦 Import Statements (Copy-Paste Ready)

### For UI Components
```typescript
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
```

### For Section Components
```typescript
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '@/lib/constants';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Card } from '@/components/ui/Card';
```

### For Icons
```typescript
import { 
  Mail, Phone, MapPin, Github, Linkedin,
  Code, Server, Database, Cloud, Users,
  Briefcase, Calendar, CheckCircle2,
  GraduationCap, Award, TrendingUp
} from 'lucide-react';
```

---

## 🎯 Tailwind Classes (Most Used)

### Layout
```
container mx-auto px-4 sm:px-6 lg:px-8
max-w-4xl mx-auto
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
```

### Spacing
```
py-20 md:py-32          /* Section padding */
mb-12                   /* Section title margin */
gap-6                   /* Grid gap */
```

### Text
```
text-4xl md:text-5xl font-bold
text-gray-400
text-gradient
```

### Colors
```
bg-[#0a0a0a]           /* Background */
bg-[#111111]           /* Card */
border-[#27272a]       /* Border */
text-blue-400          /* Accent text */
```

### Effects
```
hover:scale-105 transition-all duration-300
rounded-xl
shadow-xl shadow-blue-500/10
```

---

## 🔧 Common Framer Motion Props

### Fade In
```typescript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
```

### Hover Effect
```typescript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### Stagger Children
```typescript
initial="hidden"
animate="visible"
variants={{
  visible: {
    transition: { staggerChildren: 0.1 }
  }
}}
```

---

## 📱 Responsive Breakpoints

```
sm:  640px   /* Mobile landscape */
md:  768px   /* Tablet */
lg:  1024px  /* Desktop */
xl:  1280px  /* Large desktop */
2xl: 1536px  /* Extra large */
```

### Usage Example
```typescript
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
className="px-4 sm:px-6 lg:px-8"
```

---

## 🐛 Quick Fixes

### Module not found
```bash
npm install
```

### Tailwind not working
```bash
npm run dev
# Restart dev server
```

### TypeScript errors
```bash
npm run build
# Check error messages
```

### Icons not showing
```bash
npm install lucide-react
```

---

## 📊 Testing Checklist

### Desktop (1920px)
- [ ] All sections visible
- [ ] Navigation works
- [ ] Hover effects work
- [ ] Resume downloads

### Tablet (768px)
- [ ] Grid adjusts to 2 columns
- [ ] Text readable
- [ ] Images scale

### Mobile (375px)
- [ ] Single column layout
- [ ] Mobile menu works
- [ ] Buttons tappable
- [ ] Text readable

---

## 🎨 Component Props Quick Reference

### Button
```typescript
<Button 
  variant="primary | secondary | outline | ghost"
  size="sm | md | lg"
  icon={<Icon />}
>
  Text
</Button>
```

### Card
```typescript
<Card 
  hover={true}
  gradient={true}
  className="custom-class"
>
  Content
</Card>
```

### Badge
```typescript
<Badge variant="default | accent | success | purple">
  Text
</Badge>
```

### SectionTitle
```typescript
<SectionTitle
  title="Title"
  subtitle="Subtitle"
  align="left | center"
/>
```

---

## 🔗 Important URLs

### Development
- Local: `http://localhost:3000`
- Docs: `https://nextjs.org/docs`

### Icons
- Lucide: `https://lucide.dev`
- Search: Type icon name

### Colors
- Generator: `https://coolors.co`
- Tailwind: `https://tailwindcss.com/docs/customizing-colors`

### Deployment
- Vercel: `https://vercel.com`
- Netlify: `https://netlify.com`

---

## 📝 Personal Info (Update in constants.ts)

```typescript
// src/lib/constants.ts
export const PERSONAL_INFO = {
  name: "Preet Patel",
  title: "Full Stack Developer",
  email: "preetpatel3504@gmail.com",
  phone: "+91 9023350676",
  linkedin: "https://linkedin.com/in/preet3504",
  github: "https://github.com/preet3504",
};
```

---

## ⚡ Performance Targets

- Lighthouse Performance: **> 90**
- First Contentful Paint: **< 1.5s**
- Time to Interactive: **< 3.5s**
- Cumulative Layout Shift: **< 0.1**

---

## 🎯 Deployment Steps

### Vercel
```bash
vercel login
vercel
vercel --prod
```

### Netlify
```bash
npm run build
netlify deploy
netlify deploy --prod
```

---

## 📞 Emergency Contacts

### If Something Breaks

1. **Check console** - F12 in browser
2. **Restart dev server** - Ctrl+C, then `npm run dev`
3. **Clear cache** - Delete `.next` folder
4. **Reinstall** - Delete `node_modules`, run `npm install`
5. **Check file paths** - Verify all imports

---

## ✅ Pre-Launch Checklist

- [ ] All personal info correct
- [ ] Resume PDF in public folder
- [ ] All links work
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Tested on Chrome, Firefox, Safari
- [ ] Spell-checked content

---

## 🎉 Quick Start (Copy-Paste)

```bash
# Complete setup in one go
npm install framer-motion lucide-react react-intersection-observer clsx tailwind-merge && \
mkdir -p src/components/{ui,sections,layout} src/lib src/types && \
mv src/Preet-resume.pdf public/Preet-resume.pdf && \
npm run dev
```

Then create files following the guides!

---

**Print this page and keep it next to you while coding! 📄**

*Quick Reference v1.0*
