# Implementation Plan: Refine SRE Portfolio

**Branch**: `008-refine-sre-portfolio` | **Date**: 2026-08-04 | **Spec**: [spec.md](./spec.md)

**Input**: Approved portfolio refinement covering permanent dark theme, reliable Expertise navigation, accessible experience scroll reveal, consistent icons, certification clarity, and expanded expertise content.

## Summary

Remove the dual-theme surface and make the existing refined dark design the only rendered experience. Repair the header's Expertise target and use a section scroll offset so its heading remains visible. Replace the timeline's continuous progress behavior with a reusable, reduced-motion-aware viewport observer that reveals each company card once and maps the currently visible card to only its matching marker and rail segment. Replace company brand components with one accessible teal briefcase treatment; normalize metadata and certification icon treatments; then expand expertise data and validate the full responsive interaction set.

## Technical Context

**Language/Version**: TypeScript 5.7 with React 19 and Next.js 15.1

**Primary Dependencies**: Next.js, React, lucide-react, framer-motion (existing header and general motion), Playwright, Vitest, Testing Library

**Storage**: Static TypeScript content modules; remove browser storage used solely for theme preference

**Testing**: Vitest component/unit tests and Playwright end-to-end, viewport, screenshot, accessibility, and interaction tests

**Target Platform**: Static GitHub Pages portfolio in modern evergreen desktop and mobile browsers

**Project Type**: Static frontend web application

**Performance Goals**: Timeline state changes use browser-native intersection events, avoid per-frame work and layout-changing animation, reveal each card at most once, and preserve a stable initial layout.

**Constraints**: WCAG 2.1 AA; 320px through desktop responsiveness; one marker per company group; no company logos in Professional Experience; no light-theme rendering, persistence, or control; no backend or visitor data collection.

**Scale/Scope**: One page, five verified company groups, eight independently operable role accordions, 24 certification cards, and eight Core Expertise cards after the update.

## Constitution Check

### Pre-design gate

- [x] Responsive design covers 320px through desktop without horizontal overflow; implementation and validation explicitly cover 375px, 768px, 1024px, and 1440px.
- [x] Accessibility, performance, TypeScript, content evidence, privacy, deployment, SEO, and automated validation remain covered. The approved permanent-dark decision is an explicit exception to the current dual-theme rule and requires its documented Principle II amendment before release.
- [x] Verified experience and certification content remain unchanged; new AI-tool expertise is subject to content confirmation before public release. Static delivery and GitHub Pages/GitHub Actions behavior are unchanged.

### Post-design gate

- [x] The chosen design uses native observer notifications rather than a scroll loop, gives reduced-motion users complete static content, and keeps the marker and rail outside company-card internals.
- [x] Theme code removal is scoped to the header control, pre-render script, light token override, tests, and any resulting unused imports/files; it does not affect dark theme accessibility.
- [x] Contracts and quickstart specify keyboard, pointer, scroll, viewport, overflow, contrast, and all-accordion validation.

## Project Structure

### Documentation (this feature)

```text
specs/008-refine-sre-portfolio/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
└── contracts/
    └── portfolio-ui-contract.md
```

### Source Code (repository root)

```text
app/
├── layout.tsx                         # remove theme preference script
└── page.tsx                           # restore #expertise target and render data-driven cards
components/
├── icons/
│   ├── app-icon.tsx                   # shared icon semantics and sizing
│   ├── briefcase-icon.tsx             # new reusable company identity icon
│   └── index.ts                       # export new icon
├── layout/
│   └── site-header.tsx                # remove theme control; preserve navigation behavior
├── motion/
│   └── timeline-reveal.tsx            # new reusable observer-driven timeline state
├── profile/
│   ├── experience-timeline.tsx        # marker/rail map and reveal wiring
│   ├── company-experience-card.tsx    # briefcase and normalized metadata icons
│   └── certification-card.tsx         # accessible high-contrast issuer treatment
└── ui/
    ├── issuer-logo.tsx                # issuer fallback policy and semantics
    └── logo*.tsx                      # remove only company-logo paths made dead
content/
├── expertise.ts                       # eight requested expertise categories
├── experience.ts                      # remove unused company brand reference if no longer needed
└── navigation.ts                      # #expertise remains canonical header target
styles/
└── globals.css                        # dark-only tokens, scroll margin, timeline, icon and card states
tests/
├── components/
│   └── experience-timeline.test.tsx   # observer state and one-marker structure
├── e2e/
│   ├── navigation.spec.ts              # Expertise target and sticky-header visibility
│   ├── experience-timeline.spec.ts     # scroll states, accordions, reduced motion, marker count
│   ├── responsive.spec.ts              # dark-only viewport overflow checks
│   └── certification-gallery.spec.ts   # issuer icon clarity and accessible naming
└── unit/
    └── theme.test.ts                   # remove because theme switching no longer exists
```

**Structure Decision**: Retain the existing single Next.js application. Add one focused motion component for reusable observer state and one focused BriefcaseIcon component; keep content data independent from presentation and preserve the timeline/card component boundary.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Constitution Principle II dual-theme requirement | The user explicitly approved a permanent dark-only product direction. | Retaining the toggle or a dormant light state contradicts the approved feature and creates dead code. An owner-approved documented amendment is required before release. |
