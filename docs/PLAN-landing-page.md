# PLAN-landing-page-standalone.md

## Overview
**INDEPENDENT PROJECT**: This plan describes the creation of a **standalone Landing Page** for AFK Trade.
This project will exist separately from the main `WebApp` (Members Area). It will serve as the marketing front-end (`www.afktrade.com`) while the existing app serves the sub-path or subdomain (`app.afktrade.com`).

## Project Type
**NEW WEB PROJECT** (React + Vite + TailwindCSS)
*This is a clean slate initialization.*

## Goals & Success Criteria
1.  **Isolation**: Zero code dependency on the main WebApp to allow rapid marketing iterations without risking the core product.
2.  **Performance**: 95+ PageSpeed score (easier to achieve in a lightweight standalone repo).
3.  **Aesthetics**: "Institutional Fintech" + "SaaS Automation" hybrid look.
4.  **Conversion**: Clear CTAs linking to the main WebApp Login/Register URLs.

## Strategy (Hybrid)
-   **Hero**: "Freedom to Profit" (SaaS vibe)
-   **Product**: Interactive mocks of the Dashboard (Visual only)
-   **Community**: Educational teasers
-   **Partners**: Affiliate program info

## Tech Stack
-   **Framework**: React 19 (via Vite)
-   **Styling**: TailwindCSS v4
-   **Icons**: Lucide React
-   **Animations**: Framer Motion (Critical for the "Premium" feel)
-   **Deployment**: Vercel/Netlify (Separate from main app)

## File Structure (New Repo)
```
afk-landing/
├── src/
│   ├── assets/           # High-res marketing assets (GLB models, MP4s)
│   ├── components/
│   │   ├── ui/           # Button, Card, Section (Design System)
│   │   ├── blocks/       # Hero, Features, Pricing, Footer
│   │   └── layout/       # Navbar (Links to Main App)
│   ├── styles/
│   │   └── index.css     # Tailwind Directives & Animations
│   └── App.tsx           # Single Page Scroll Layout
├── public/               # Static SEO assets
└── vite.config.ts
```

## Task Breakdown

### Phase 1: Initialization
-   **Agent**: `app-builder`
-   **Task**:
    -   Initialize new project `afk-landing`.
    -   Install dependencies: `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`.
    -   Setup TailwindCSS with "AFK Brand" colors (Dark Slate, Emerald Green, Gold).

### Phase 2: Design System & Layout
-   **Agent**: `frontend-design`
-   **Task**:
    -   Create `Navbar`: Glassmorphism, fixed top. Links: "Product", "Academy", "Partners", "Login" (External Link).
    -   Create `Button`: Primary (Green glow), Secondary (Outline).
    -   Setup typography (Inter/Outfit).

### Phase 3: Content Implementation
-   **Agent**: `frontend-specialist`
-   **Task**:
    -   **Hero Section**: Headline, Subheadline, 2 CTAs, 3D/Video visual.
    -   **Social Proof**: Marquee of broker logos.
    -   **Features**: Bento grid layout.
    -   **Academy**: Cards showing "Recent Articles" (Hardcoded or fetched from public Supabase API).
    -   **Footer**: Legal links.

### Phase 4: Polish & SEO
-   **Agent**: `seo-fundamentals`
-   **Task**:
    -   Add `react-helmet-async` for SEO management.
    -   Generate `sitemap.xml`.
    -   Optimize images (WebP).

## Verification Checklist
-   [ ] Project initializes without errors.
-   [ ] No shared code with main `WebApp` repo.
-   [ ] "Login" button correctly redirects to the live Members Area URL.
-   [ ] Mobile responsive (Hamburger menu works).
-   [ ] Light house performance score > 90.
