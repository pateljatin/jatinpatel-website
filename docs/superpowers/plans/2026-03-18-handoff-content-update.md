# Handoff Content Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update jatinpatel.ai to reflect the handoff doc — replace corporate project cards with Civic Brief and PeopleBuilt.ai, add Copilot Chat references, and add Generative AI skills.

**Architecture:** Content-only edits to 5 existing components. Each component holds its data as inline TypeScript arrays/objects at the top of the file. No new components. One component deleted (FeaturedWork.tsx). No design, animation, or layout changes.

**Tech Stack:** Next.js 16, TypeScript, Framer Motion, Tailwind CSS, lucide-react icons

---

## File Map

| File | Change Type | What Changes |
|------|-------------|-------------|
| `components/Projects.tsx` | Rework | Data array (4 → 3 cards), add `ExternalLink`+`Github` icon imports, add link elements to card JSX |
| `components/About.tsx` | Add lines | 2 new `<p>` tags in "Currently" section (lines 59-66) |
| `components/Experience.tsx` | Add line | 1 new string in Microsoft `achievements` array (line 17) |
| `components/Skills.tsx` | Add items | 2 new strings in Domain Expertise `skills` array (line 26-30) |
| `components/Education.tsx` | Add items | 3 new strings in `achievements` array (line 22-29) |
| `components/FeaturedWork.tsx` | Delete | Unused component, not in page.tsx |
| `README.md` | Cleanup | Next.js version, author links |

---

## Voice Rules (enforce throughout)

- No emdashes — use commas or semicolons
- Oxford comma always
- Executive verbs: led, launched, conceived, architected, drove, shipped
- Never imply Jatin lacks engineering background
- Frame as Builder PM — strategic leader who builds
- Pre-LLM AI credibility is a differentiator — "8+ years before ChatGPT" framing

---

## Task 1: Rework Projects.tsx

**Files:**
- Modify: `components/Projects.tsx`

**Current state (lines 7-40):** 4-item `projects` array with corporate achievements (Teams, Pypestream, iPhone UC, 48Bricks). No external links. No `ExternalLink` or `Github` imports.

**New state:** 3-item array (Civic Brief, PeopleBuilt.ai, Stealth). Cards for public projects get live URL + GitHub links. Stealth card has no links.

- [ ] **Step 1: Read the current file**

  ```bash
  # Confirm current content before editing
  ```
  Open `components/Projects.tsx` and verify lines 1-40 match the expected current state (4 projects array, imports from framer-motion and react only — no lucide-react).

- [ ] **Step 2: Replace ONLY the import block and data array (lines 1-40)**

  Using the Edit tool, make two targeted replacements:

  **Replace the import block** (lines 1-5):
  ```
  OLD:
  'use client';

  import { motion } from 'framer-motion';
  import { useInView } from 'framer-motion';
  import { useRef, useState } from 'react';

  NEW:
  'use client';

  import { motion } from 'framer-motion';
  import { useInView } from 'framer-motion';
  import { useRef, useState } from 'react';
  import { ExternalLink, Github } from 'lucide-react';
  ```

  **Replace the entire `projects` array** (lines 7-40) with:
  ```tsx
  const projects = [
    {
      title: "Civic Brief",
      subtitle: "Open Source Civic AI Platform",
      description: "Conceived and launched solo using Claude Code and Claude API. Converts government budgets, zoning amendments, legislation, and meeting minutes into plain-language summaries in the languages communities actually speak.",
      tech: ["Next.js", "TypeScript", "Supabase", "Claude API", "Vercel"],
      image: "🏛️",
      color: "from-electric-purple to-electric-blue",
      impact: "213 US counties with zero local news • 4B+ citizens in non-dominant languages",
      liveUrl: "https://civic-brief.vercel.app",
      githubUrl: "https://github.com/pateljatin/civic-brief"
    },
    {
      title: "PeopleBuilt.ai",
      subtitle: "AI App Discovery Platform",
      description: "Curated directory of apps built with AI tools like Claude, Cursor, ChatGPT, and v0, where creators can discover, submit, and claim ownership of their apps. Built from concept to production in weekend sprint sessions.",
      tech: ["Next.js", "TypeScript", "Supabase", "Vercel", "OpenAI API"],
      image: "🤖",
      color: "from-electric-blue to-electric-cyan",
      impact: "500+ apps seeded • 116+ creators • 7 AI tools tracked",
      liveUrl: "https://peoplebuilt.ai",
      githubUrl: null
    },
    {
      title: "Multiple AI-Native Products",
      subtitle: "Stealth, Active Development",
      description: "Building multiple AI-native consumer products in stealth using Claude Code, GitHub Copilot, and modern full-stack development.",
      tech: ["Claude Code", "GitHub Copilot", "Full-Stack"],
      image: "🔬",
      color: "from-electric-cyan to-electric-purple",
      impact: "Active development, 2025-Present",
      liveUrl: null,
      githubUrl: null
    }
  ];
  ```

- [ ] **Step 3: Update the JSX content section to render subtitle and links**

  The current content section block starts at line 104 with `{/* Content Section */}`. Replace this exact block:

  ```tsx
  {/* Content Section */}
  <div className="p-6 flex-1 flex flex-col">
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-electric-cyan transition-colors">
      {project.title}
    </h3>
    <p className="text-gray-400 mb-4 flex-1 leading-relaxed">
      {project.description}
    </p>

    {/* Impact Metrics */}
    <div className="mb-4 pb-4 border-b border-white/5">
      <p className="text-xs font-semibold text-electric-cyan uppercase tracking-wide mb-1">Impact</p>
      <p className="text-sm text-white font-medium">{project.impact}</p>
    </div>

    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
          className="px-3 py-1 text-xs font-semibold bg-white/5 hover:bg-white/10 rounded-full text-slate-400 border border-white/10 transition-colors"
        >
          {tech}
        </motion.span>
      ))}
    </div>
  </div>
  ```

  With this updated block (adds subtitle line, renames Tech Stack comment, appends link buttons after tech pills):

  ```tsx
  {/* Content Section */}
  <div className="p-6 flex-1 flex flex-col">
    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">
      {project.title}
    </h3>
    <p className="text-electric-cyan text-sm font-medium mb-3">{project.subtitle}</p>
    <p className="text-gray-400 mb-4 flex-1 leading-relaxed">
      {project.description}
    </p>

    {/* Impact Metrics */}
    <div className="mb-4 pb-4 border-b border-white/5">
      <p className="text-xs font-semibold text-electric-cyan uppercase tracking-wide mb-1">Impact</p>
      <p className="text-sm text-white font-medium">{project.impact}</p>
    </div>

    {/* Tech Stack + Links */}
    <div className="flex flex-wrap gap-2 items-center">
      {project.tech.map((tech, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
          className="px-3 py-1 text-xs font-semibold bg-white/5 hover:bg-white/10 rounded-full text-slate-400 border border-white/10 transition-colors"
        >
          {tech}
        </motion.span>
      ))}
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex items-center gap-1 px-3 py-1 text-xs font-semibold text-electric-cyan border border-electric-cyan/30 rounded-full hover:bg-electric-cyan/10 transition-colors"
        >
          <ExternalLink className="w-3 h-3" />
          Live
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-3 py-1 text-xs font-semibold text-slate-400 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
        >
          <Github className="w-3 h-3" />
          GitHub
        </a>
      )}
    </div>
  </div>
  ```

- [ ] **Step 4: Update the subtitle text in the section header**

  Change line 62 (section subtitle):
  ```tsx
  // FROM:
  <p className="text-slate-400 text-lg mb-6">Pioneering platforms that shaped the future of communication</p>
  // TO:
  <p className="text-slate-400 text-lg mb-6">Building AI-native products from concept to production</p>
  ```

- [ ] **Step 5: Verify TypeScript compiles**

  ```bash
  npm run build
  ```
  Expected: No TypeScript errors. If errors appear, check that `liveUrl: null` and `githubUrl: null` are accepted by the conditional renders.

- [ ] **Step 6: Commit**

  ```bash
  git add components/Projects.tsx
  git commit -m "feat: replace corporate projects with Civic Brief, PeopleBuilt.ai, stealth"
  ```

---

## Task 2: Update About.tsx — Add "Currently" lines

**Files:**
- Modify: `components/About.tsx:59-66`

**Current state (lines 59-66):**
```tsx
<div className="space-y-3 text-slate-300">
  <p className="text-lg">
    Leading Microsoft Teams consumer strategy and AI integration
  </p>
  <p className="text-lg">
    Driving multi-modal experiences, monetization, and responsible AI features
  </p>
</div>
```

**New state:** 2 additional `<p>` tags appended inside the same `div`.

- [ ] **Step 1: Add the two new lines to the Currently section**

  Replace the `<div className="space-y-3 text-slate-300">` block with:

  ```tsx
  <div className="space-y-3 text-slate-300">
    <p className="text-lg">
      Leading Microsoft Teams consumer strategy and AI integration
    </p>
    <p className="text-lg">
      Driving multi-modal experiences, monetization, and responsible AI features
    </p>
    <p className="text-lg">
      Driving launch of Copilot Chat in Teams consumer product
    </p>
    <p className="text-lg">
      Built AI PM toolbox using Claude Code and GitHub Copilot
    </p>
  </div>
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: Clean build.

- [ ] **Step 3: Commit**

  ```bash
  git add components/About.tsx
  git commit -m "feat: add Copilot Chat and AI toolbox lines to About currently section"
  ```

---

## Task 3: Update Experience.tsx — Add Copilot Chat achievement

**Files:**
- Modify: `components/Experience.tsx:16-21`

**Current state (lines 16-21) — Microsoft achievements array:**
```tsx
achievements: [
  "Scaled platform to 60M+ MAU with 3B+ monthly minutes",
  "Led Windows 11 integration and AI strategy roadmap",
  "Drove 9M+ paid user conversions and monetization strategy",
  "Filed 4 patents in communication and AI integration"
],
```

**New state:** Add one line (do NOT reveal FY27 specifics).

- [ ] **Step 1: Add the Copilot Chat achievement**

  Replace the Microsoft `achievements` array:

  ```tsx
  achievements: [
    "Scaled platform to 60M+ MAU with 3B+ monthly minutes",
    "Led Windows 11 integration and AI strategy roadmap",
    "Drove 9M+ paid user conversions and monetization strategy",
    "Filed 4 patents in communication and AI integration",
    "Driving launch of Copilot Chat in Teams consumer product"
  ],
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: Clean build.

- [ ] **Step 3: Commit**

  ```bash
  git add components/Experience.tsx
  git commit -m "feat: add Copilot Chat launch to Microsoft experience achievements"
  ```

---

## Task 4: Update Skills.tsx — Add Generative AI and LLM Product Design

**Files:**
- Modify: `components/Skills.tsx:26-30`

**Current state (Domain Expertise skills array, lines 26-30):**
```tsx
skills: [
  "Conversational AI", "Communication Platforms", "Mobile Commerce",
  "Real-time Systems", "Social Graph Analysis", "Multi-modal Experiences",
  "Windows Integration", "Enterprise Architecture"
]
```

**New state:** Prepend Generative AI and LLM Product Design (most relevant to target audience).

- [ ] **Step 1: Add the two skills to Domain Expertise**

  Replace the Domain Expertise `skills` array:

  ```tsx
  skills: [
    "Generative AI", "LLM Product Design", "Conversational AI",
    "Communication Platforms", "Mobile Commerce",
    "Real-time Systems", "Social Graph Analysis", "Multi-modal Experiences",
    "Windows Integration", "Enterprise Architecture"
  ]
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: Clean build.

- [ ] **Step 3: Commit**

  ```bash
  git add components/Skills.tsx
  git commit -m "feat: add Generative AI and LLM Product Design to domain expertise skills"
  ```

---

## Task 5: Update Education.tsx — Add 3 career highlights

**Files:**
- Modify: `components/Education.tsx:22-29`

**Current state (achievements array, lines 22-29):**
```tsx
const achievements = [
  "5+ Patents in Communication & AI",
  "First iPhone Enterprise UC Client (2009)",
  "Conversational AI Pioneer (2015, pre-ChatGPT)",
  "60M+ MAU Platform Scale at Microsoft",
  "4 Startups Founded in Commerce & AI",
  "20+ Years Platform Leadership"
];
```

**New state:** Append 3 new items.

- [ ] **Step 1: Add the 3 new career highlights**

  Replace the `achievements` array:

  ```tsx
  const achievements = [
    "5+ Patents in Communication & AI",
    "First iPhone Enterprise UC Client (2009)",
    "Conversational AI Pioneer (2015, pre-ChatGPT)",
    "60M+ MAU Platform Scale at Microsoft",
    "4 Startups Founded in Commerce & AI",
    "20+ Years Platform Leadership",
    "Civic Brief — Open Source Civic AI Platform (2025)",
    "PeopleBuilt.ai — AI App Discovery Platform (2025)",
    "Copilot Chat Launch, Microsoft Teams (2025)"
  ];
  ```

- [ ] **Step 2: Verify build**

  ```bash
  npm run build
  ```
  Expected: Clean build.

- [ ] **Step 3: Commit**

  ```bash
  git add components/Education.tsx
  git commit -m "feat: add Civic Brief, PeopleBuilt.ai, and Copilot Chat to career highlights"
  ```

---

## Task 6: Delete FeaturedWork.tsx

**Files:**
- Delete: `components/FeaturedWork.tsx`

**Verification:** Confirm this file is NOT imported in `app/page.tsx` before deleting.

- [ ] **Step 1: Confirm not imported**

  ```bash
  grep -r "FeaturedWork" app/ components/ --include="*.tsx"
  ```
  Expected output: only `components/FeaturedWork.tsx` itself (no imports found elsewhere).

- [ ] **Step 2: Delete the file**

  ```bash
  git rm components/FeaturedWork.tsx
  ```

- [ ] **Step 3: Verify build**

  ```bash
  npm run build
  ```
  Expected: Clean build with no missing module errors.

- [ ] **Step 4: Commit**

  ```bash
  git commit -m "chore: remove unused FeaturedWork component"
  ```

---

## Task 7: Clean up README.md

**Files:**
- Modify: `README.md`

**Current state:**
- Line 49: `**[Next.js 14](https://nextjs.org/)** - React framework with App Router`
- Lines 129-131: placeholder author links (`[Your Website]`, `[@yourusername]`, `[Your LinkedIn]`)

- [ ] **Step 1: Update Next.js version reference**

  Replace:
  ```markdown
  - **[Next.js 14](https://nextjs.org/)** - React framework with App Router
  ```
  With:
  ```markdown
  - **[Next.js 16](https://nextjs.org/)** - React framework with App Router
  ```

- [ ] **Step 2: Fill in author links**

  Replace:
  ```markdown
  - Portfolio: [Your Website]
  - GitHub: [@yourusername]
  - LinkedIn: [Your LinkedIn]
  ```
  With:
  ```markdown
  - Portfolio: [jatinpatel.ai](https://jatinpatel.ai)
  - GitHub: [@pateljatin](https://github.com/pateljatin)
  - LinkedIn: [jatin1patel](https://linkedin.com/in/jatin1patel)
  ```

- [ ] **Step 3: Commit**

  ```bash
  git add README.md
  git commit -m "chore: update README with Next.js 16 and author links"
  ```

---

## Final Verification

- [ ] **Run full build one last time**

  ```bash
  npm run build
  ```
  Expected: Zero errors, zero warnings.

- [ ] **Start dev server and visually inspect**

  ```bash
  npm run dev
  ```
  Check in browser:
  - Featured Work section shows 3 cards: Civic Brief, PeopleBuilt.ai, Stealth
  - Civic Brief card has Live + GitHub buttons
  - PeopleBuilt.ai card has Live button (no GitHub)
  - Stealth card has no buttons
  - About "Currently" shows 4 bullet lines
  - Experience Microsoft role shows 5 achievements
  - Skills Domain Expertise shows Generative AI and LLM Product Design
  - Education career highlights shows 9 items (6 original + 3 new)

- [ ] **Final commit if any fixes were needed, then push**

  ```bash
  git push origin main
  ```
  Vercel will auto-deploy from main.
