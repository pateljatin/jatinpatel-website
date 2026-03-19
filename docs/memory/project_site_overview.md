---
name: Site Architecture & State
description: jatinpatel.ai — Next.js 16 + Framer Motion personal site, deployed on Vercel with custom domain
type: project
---

**Stack**: Next.js 16.1.3, React 19.2.3, TypeScript 5.9.3, Framer Motion 12.26.2, Tailwind CSS 4.1.18, Lucide React icons
**Deployment**: Vercel (auto-deploy from GitHub main branch)
**Domain**: jatinpatel.ai (custom domain configured)
**Analytics**: @vercel/analytics + @vercel/speed-insights integrated
**SEO**: JSON-LD Person schema, Google/Bing webmaster verification, robots.txt (blocks AI crawlers), sitemap.xml

**Sections** (rendered in app/page.tsx as client component):
1. Navigation — fixed header, 7 nav items, mobile hamburger
2. Hero — name, role, tagline, location, animated gradient orb (min-h-[90vh] to tease next section)
3. About — "Currently" (4 lines incl. Copilot Chat), "Why I'm Different" narrative, profile photo, 4 principles
4. Experience — 7-role timeline (Bell Labs 2001 → Microsoft present), incl. Copilot Chat achievement
5. Projects — 3 showcase cards: Civic Brief (open source civic AI), PeopleBuilt.ai (AI app discovery), Stealth (fintech/AI)
6. Skills — 4 categories grid + stats bar; Domain Expertise leads with Generative AI + LLM Product Design
7. Education — Stevens + 9 career highlights (incl. Civic Brief, PeopleBuilt.ai, Copilot Chat Launch 2025)
8. Contact — LinkedIn CTA + availability status

**Design**: Dark theme (#0F1117), electric gradient accents (purple/blue/cyan), glassmorphism cards

**Why**: Site positions Jatin for Director/VP Product at top AI companies. Not a portfolio — a strategic positioning document.
**How to apply**: Every content change should reinforce the "Builder PM with pre-LLM AI credibility" narrative.

**Last updated**: 2026-03-18 (Session 00 — all handoff doc updates complete)
