# 📐 PROJECT STRUCTURE & FLOW DIAGRAM

## 🏗️ Complete Project Structure

```
p-website/
│
├── 📂 public/                          # Static files
│   ├── Preet-resume.pdf               ⭐ Your resume (MOVE HERE)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── 📂 src/
│   │
│   ├── 📂 app/                         # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── fonts/
│   │   │   ├── GeistVF.woff
│   │   │   └── GeistMonoVF.woff
│   │   ├── globals.css                ⭐ UPDATE THIS
│   │   ├── layout.tsx                 ⭐ UPDATE THIS
│   │   └── page.tsx                   ⭐ UPDATE THIS
│   │
│   ├── 📂 components/
│   │   │
│   │   ├── 📂 ui/                     # Reusable UI components
│   │   │   ├── Button.tsx             ⭐ CREATE
│   │   │   ├── Card.tsx               ⭐ CREATE
│   │   │   ├── Badge.tsx              ⭐ CREATE
│   │   │   └── SectionTitle.tsx       ⭐ CREATE
│   │   │
│   │   ├── 📂 layout/                 # Layout components
│   │   │   ├── Header.tsx             ⭐ CREATE
│   │   │   └── Footer.tsx             ⭐ CREATE
│   │   │
│   │   └── 📂 sections/               # Page sections
│   │       ├── Hero.tsx               ⭐ CREATE
│   │       ├── About.tsx              ⭐ CREATE
│   │       ├── Experience.tsx         ⭐ CREATE
│   │       ├── Skills.tsx             ⭐ CREATE
│   │       ├── Education.tsx          ⭐ CREATE
│   │       └── Contact.tsx            ⭐ CREATE
│   │
│   ├── 📂 lib/                         # Utilities & constants
│   │   ├── constants.ts               ⭐ CREATE (Your data)
│   │   └── utils.ts                   ⭐ CREATE
│   │
│   └── 📂 types/                       # TypeScript types
│       └── index.ts                   ⭐ CREATE
│
├── 📄 .gitignore
├── 📄 eslint.config.mjs
├── 📄 next-env.d.ts
├── 📄 next.config.ts
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 postcss.config.mjs
├── 📄 README.md
├── 📄 tsconfig.json
│
└── 📄 GUIDES/                          # Documentation
    ├── MASTER_GUIDE.md                ✅ Overview
    ├── STEP_BY_STEP_GUIDE.md          ✅ Part 1
    ├── STEP_BY_STEP_GUIDE_PART2.md    ✅ Part 2
    ├── STEP_BY_STEP_GUIDE_PART3.md    ✅ Part 3
    ├── QUICK_REFERENCE.md             ✅ Quick ref
    └── PROJECT_STRUCTURE.md           ✅ This file
```

---

## 🔄 Component Dependency Flow

```
┌─────────────────────────────────────────────────────────────┐
│                        layout.tsx                            │
│                    (Root Layout)                             │
│  ┌────────────┐  ┌──────────────┐  ┌────────────┐          │
│  │   Header   │  │   page.tsx   │  │   Footer   │          │
│  └────────────┘  └──────────────┘  └────────────┘          │
└─────────────────────────────────────────────────────────────┘
                           │
                           ├─── Hero Section
                           │     └─── Button, Badge
                           │
                           ├─── About Section
                           │     └─── SectionTitle, Card, Badge
                           │
                           ├─── Experience Section
                           │     └─── SectionTitle, Card, Badge
                           │
                           ├─── Skills Section
                           │     └─── SectionTitle, Card, Badge
                           │
                           ├─── Education Section
                           │     └─── SectionTitle, Card
                           │
                           └─── Contact Section
                                 └─── SectionTitle, Card, Button
```

---

## 📊 Data Flow Diagram

```
┌──────────────────┐
│  constants.ts    │  ← Your personal data stored here
└────────┬─────────┘
         │
         ├──→ PERSONAL_INFO ──→ Hero, About, Contact, Header, Footer
         │
         ├──→ EXPERIENCE ──→ Experience Section
         │
         ├──→ EDUCATION ──→ Education Section
         │
         ├──→ SKILLS ──→ Skills Section
         │
         ├──→ FOCUS_AREAS ──→ About Section
         │
         ├──→ SOCIAL_LINKS ──→ Contact, Footer
         │
         └──→ NAV_LINKS ──→ Header
```

---

## 🎨 Styling Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    globals.css                           │
│  • Base styles                                           │
│  • CSS variables (colors)                                │
│  • Utility classes (.text-gradient, .card-hover)         │
│  • Animations (@keyframes)                               │
└────────────────────┬────────────────────────────────────┘
                     │
                     ├──→ Tailwind Classes (in components)
                     │     • Layout: flex, grid, container
                     │     • Spacing: p-6, m-4, gap-6
                     │     • Colors: bg-[#111], text-blue-400
                     │     • Effects: hover:, transition-all
                     │
                     └──→ Framer Motion (animations)
                           • initial, animate, whileInView
                           • transition, variants
```

---

## 🔌 Import/Export Flow

### utils.ts
```typescript
export function cn() { ... }
         ↓
Used by: All UI components (Button, Card, Badge)
```

### types/index.ts
```typescript
export interface Experience { ... }
export interface Education { ... }
         ↓
Used by: constants.ts, Section components
```

### constants.ts
```typescript
export const PERSONAL_INFO = { ... }
export const EXPERIENCE = [ ... ]
         ↓
Used by: All section components
```

### UI Components
```typescript
export const Button = () => { ... }
export const Card = () => { ... }
         ↓
Used by: Section components
```

---

## 🎯 Page Rendering Flow

```
1. User visits site
   ↓
2. layout.tsx loads
   ├─ Loads fonts
   ├─ Sets metadata
   ├─ Renders Header
   ├─ Renders children (page.tsx)
   └─ Renders Footer
   ↓
3. page.tsx renders
   ├─ Hero Section (viewport)
   ├─ About Section (scroll)
   ├─ Experience Section (scroll)
   ├─ Skills Section (scroll)
   ├─ Education Section (scroll)
   └─ Contact Section (scroll)
   ↓
4. Animations trigger
   ├─ On mount (Hero)
   └─ On scroll (other sections)
   ↓
5. User interactions
   ├─ Click nav links → Smooth scroll
   ├─ Click buttons → Actions
   ├─ Hover cards → Animations
   └─ Submit form → Email client
```

---

## 📱 Responsive Behavior Flow

```
Screen Size Detection
         │
         ├─── Mobile (< 640px)
         │    ├─ Single column layout
         │    ├─ Mobile menu (hamburger)
         │    ├─ Stacked sections
         │    └─ Larger touch targets
         │
         ├─── Tablet (640px - 1024px)
         │    ├─ 2-column grid
         │    ├─ Visible navigation
         │    └─ Medium spacing
         │
         └─── Desktop (> 1024px)
              ├─ 3-column grid
              ├─ Full navigation
              ├─ Hover effects
              └─ Maximum spacing
```

---

## 🚀 Build & Deploy Flow

```
Development
   │
   ├─ npm run dev
   │   └─ Hot reload on changes
   │
   ↓
Build
   │
   ├─ npm run build
   │   ├─ TypeScript compilation
   │   ├─ Tailwind CSS processing
   │   ├─ Code optimization
   │   └─ Static generation
   │
   ↓
Deploy
   │
   ├─ vercel --prod
   │   ├─ Upload build
   │   ├─ Configure routes
   │   ├─ Set environment
   │   └─ Generate URL
   │
   ↓
Live Site
   └─ https://your-site.vercel.app
```

---

## 🎨 Color System Hierarchy

```
Background Layers
   │
   ├─ Layer 1: #0a0a0a (Page background)
   │
   ├─ Layer 2: #111111 (Card background)
   │
   └─ Layer 3: #1a1a1a (Elevated elements)

Accent Colors
   │
   ├─ Primary: #3b82f6 (Blue - CTAs, links)
   │
   ├─ Secondary: #8b5cf6 (Purple - Highlights)
   │
   └─ Tertiary: #06b6d4 (Cyan - Accents)

Text Hierarchy
   │
   ├─ Primary: #f9fafb (Headings, important text)
   │
   ├─ Secondary: #d1d5db (Body text)
   │
   └─ Muted: #9ca3af (Captions, labels)
```

---

## 🔧 Component Reusability Map

```
Button Component
   ├─ Used in: Hero (2x), Contact (1x), Header (1x)
   └─ Variants: primary, secondary, outline, ghost

Card Component
   ├─ Used in: About (4x), Experience (1x), Skills (5x), Education (1x), Contact (2x)
   └─ Props: hover, gradient

Badge Component
   ├─ Used in: About (3x), Experience (1x), Skills (25x)
   └─ Variants: default, accent, success, purple

SectionTitle Component
   ├─ Used in: All sections (6x)
   └─ Props: title, subtitle, align
```

---

## 📦 Package Dependencies Graph

```
Next.js 16.1.6
   ├─ React 19.2.3
   ├─ React-DOM 19.2.3
   └─ Provides: Routing, SSR, Image optimization

Tailwind CSS 4.x
   ├─ PostCSS
   └─ Provides: Utility classes, responsive design

Framer Motion 11.x
   └─ Provides: Animations, transitions

Lucide React
   └─ Provides: Icons (50+ used)

TypeScript 5.x
   └─ Provides: Type safety, IntelliSense

clsx + tailwind-merge
   └─ Provides: Class name merging (cn utility)
```

---

## 🎯 User Journey Map

```
Landing (Hero)
   │
   ├─ Read introduction
   ├─ See availability badge
   └─ Click "Get In Touch" or "View Resume"
   │
   ↓
Scroll Down (About)
   │
   ├─ Read professional summary
   ├─ View achievement stats
   └─ Learn about focus areas
   │
   ↓
Continue (Experience)
   │
   ├─ See work history
   ├─ Read achievements
   └─ Understand impact
   │
   ↓
Explore (Skills)
   │
   ├─ View technical skills
   ├─ See skill categories
   └─ Understand expertise
   │
   ↓
Learn (Education)
   │
   ├─ See academic background
   └─ View qualifications
   │
   ↓
Connect (Contact)
   │
   ├─ View contact options
   ├─ Fill contact form
   ├─ Click social links
   └─ Download resume
```

---

## 🔍 SEO Structure

```
HTML Structure
   │
   ├─ <html lang="en">
   │
   ├─ <head>
   │   ├─ <title>Preet Patel | Full Stack Developer</title>
   │   ├─ <meta name="description" content="...">
   │   ├─ <meta name="keywords" content="...">
   │   └─ <meta property="og:..." content="...">
   │
   └─ <body>
       ├─ <header> (Navigation)
       ├─ <main>
       │   ├─ <section id="home">
       │   ├─ <section id="about">
       │   ├─ <section id="experience">
       │   ├─ <section id="skills">
       │   ├─ <section id="education">
       │   └─ <section id="contact">
       └─ <footer>
```

---

## 💾 State Management

```
Component State (useState)
   │
   ├─ Header
   │   ├─ isScrolled (boolean)
   │   └─ isMobileMenuOpen (boolean)
   │
   └─ Contact
       └─ formData (object)
           ├─ name
           ├─ email
           └─ message

No Global State Needed
   └─ All data is static (from constants.ts)
```

---

## 🎬 Animation Timeline

```
Page Load
   │
   ├─ 0.0s: Hero fades in
   ├─ 0.1s: Name appears
   ├─ 0.2s: Title appears
   ├─ 0.3s: Description appears
   └─ 0.4s: Buttons appear
   │
   ↓
Scroll Events
   │
   ├─ Section enters viewport
   ├─ SectionTitle fades in (0.5s)
   ├─ Cards stagger in (0.1s delay each)
   └─ Content animates (0.3s)
   │
   ↓
Hover Events
   │
   ├─ Button: scale(1.05)
   ├─ Card: scale(1.02) + shadow
   └─ Icon: scale(1.1) + color change
```

---

## 📊 Performance Optimization

```
Next.js Optimizations
   ├─ Automatic code splitting
   ├─ Image optimization
   ├─ Font optimization
   └─ Static generation

Tailwind Optimizations
   ├─ Purge unused CSS
   ├─ Minification
   └─ Compression

Framer Motion Optimizations
   ├─ GPU acceleration
   ├─ viewport: { once: true }
   └─ Lazy animation loading
```

---

**Use this diagram to understand how everything connects! 🎯**

*Visual Guide v1.0*
