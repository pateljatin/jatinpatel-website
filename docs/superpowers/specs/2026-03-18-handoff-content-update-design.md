# Design: Handoff Document Content Update

> **Date**: 2026-03-18
> **Source**: JatinPatelAI_Site_Handoff.md
> **Scope**: Content updates to align live site with handoff doc; no visual/design changes

---

## Problem

The site at jatinpatel.ai was built to position Jatin for Director/VP Product roles at top AI companies. Since launch, Jatin's narrative has evolved: two public side projects (Civic Brief, PeopleBuilt.ai) now exist as concrete proof of the "Builder PM" identity. The current Projects section shows corporate achievements only. The handoff doc specifies new content across 5 sections.

## Approach

Rework content in existing components. No new components, no design system changes, no structural refactoring. Delete one unused component. Projects.tsx card JSX will need new icon imports (`ExternalLink`, `Github` from lucide-react) and link elements for live URLs and GitHub.

## Constraint

Before each edit, read the current file and produce a current-vs-new diff for review. No blind edits.

---

## Changes by File

### 1. `components/Projects.tsx` — REWORK

**Current**: 4 cards showing corporate achievements (Teams platform, Pypestream AI, iPhone UC client, 48Bricks social commerce). Section heading is "Featured Work" — keep this heading (matches handoff doc naming).

**New**: 3 cards matching handoff doc order:

1. **Civic Brief** (Open Source Civic AI Platform)
   - Status: Live, 2025-Present
   - URL: https://civic-brief.vercel.app
   - GitHub: https://github.com/pateljatin/civic-brief (MIT License)
   - One-liner: Open-source AI platform converting government documents into plain-language civic summaries in any community language
   - Short description: Conceived and launched solo using Claude Code and Claude API. Converts government budgets, zoning amendments, legislation, and meeting minutes into plain-language summaries in the languages communities actually speak.
   - Core innovation: Four-layer civic trust architecture (source grounding, LLM-as-Judge factuality scoring, community review, user feedback loops). "Getting civic information wrong is a democratic harm, not a quality issue. The verification architecture is the product."
   - Problem stats: 3,500+ local newspapers closed in 20 years; 213 US counties with zero local news; 50M+ Americans with limited civic access; 4B+ citizens in non-dominant languages
   - Stack: Next.js, TypeScript, Supabase, Claude API, Vercel
   - Impact line: 213 US counties with zero local news, 4B+ citizens in non-dominant languages

2. **PeopleBuilt.ai** (AI App Discovery Platform)
   - Status: Live, 2025-Present
   - URL: https://peoplebuilt.ai
   - One-liner: Live discovery platform for apps created with AI coding tools; conceived, designed, and launched solo as a technical PM using Claude and Claude Code
   - Short description: Curated directory of apps built with AI tools like Claude, Cursor, ChatGPT, and v0, where creators can discover, submit, and claim ownership of their apps. Built from concept to production in weekend sprint sessions.
   - Core innovation: Social claiming verification (tweet @PeopleBuiltAI to verify ownership, every verification = free marketing tweet)
   - Zero-cost data pipeline: Replaced $300/month Apify with Reddit JSON API, Nitter RSS, YouTube Data API
   - Stack: Next.js, TypeScript, Supabase, Vercel, OpenAI API
   - Metrics: 500+ apps seeded, 116+ creators, 7 AI tools tracked

3. **Multiple AI-Native Products (Stealth)**
   - Status: Active development, 2025-Present
   - Public framing only: "Building multiple AI-native consumer products in stealth using Claude Code, GitHub Copilot, and modern full-stack development"
   - No names, no specifics, no tech details

**Card design**: Keep existing card grid structure and animation patterns. Update content, links, and tech stack pills. Add external link icons for live URLs and GitHub.

### 2. `components/About.tsx` — ADD LINES

**Current "Currently" section** lists Teams strategy and AI focus.

**Add two lines**:
- "Driving launch of Copilot Chat in Teams consumer product"
- "Built AI PM toolbox using Claude Code and GitHub Copilot"

No other changes. Three Chapter Arc and "Why I'm Different" remain intact.

### 3. `components/Experience.tsx` — ADD LINE

**Current Microsoft role** lists 4 achievements.

**Add**:
- "Driving launch of Copilot Chat in Teams consumer product"

Do NOT reveal FY27 strategy specifics. Keep all other roles as-is.

### 4. `components/Skills.tsx` — ADD ITEMS

**Current Domain Expertise** lists: Conversational AI, Communication Platforms, Mobile Commerce, Real-time Systems, Social Graph Analysis, Multi-modal Experiences.

**Add**: "Generative AI" and "LLM Product Design" to this category.

### 5. `components/Education.tsx` — ADD HIGHLIGHTS

**Current career highlights**: 6 items (patents, iPhone UC, AI pioneer, MAU, startups, leadership).

**Add 3 items**:
- Civic Brief — Open Source Civic AI Platform (2025)
- PeopleBuilt.ai — AI App Discovery Platform (2025)
- Copilot Chat Launch, Microsoft Teams (2025)

### 6. `components/FeaturedWork.tsx` — DELETE

Unused component with placeholder content. Not wired into page.tsx. Remove to avoid confusion.

### 7. `README.md` — CLEANUP

- Update "Next.js 14" → "Next.js 16" (appears in title and Built With section)
- Fill in author links: GitHub (@pateljatin), LinkedIn (linkedin.com/in/jatin1patel), Portfolio (jatinpatel.ai)

---

## Out of Scope

- No visual/design changes (colors, animations, layout structure)
- No new components or pages
- No dependency changes
- No SEO/metadata updates in this pass (may revisit after content lands)
- No changes to Navigation, Hero, or Contact sections

## Voice Rules (from handoff doc)

- No emdashes — use commas or semicolons
- Oxford comma always
- Executive verbs: led, launched, conceived, architected, drove, shipped
- No AI filler phrases
- Never imply Jatin lacks engineering background
- Never use "genuinely," "honestly," or "straightforward"
- Frame as Builder PM — strategic leader who builds
- Pre-LLM AI credibility (Pypestream, SlamAd) is a genuine differentiator — always frame as "8+ years before ChatGPT"

## Implementation Order

1. Projects.tsx (biggest change, highest impact)
2. About.tsx
3. Experience.tsx
4. Skills.tsx
5. Education.tsx
6. Delete FeaturedWork.tsx
7. README.md cleanup
