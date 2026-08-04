# Implementation Plan: Premium Engineering Portfolio

**Branch**: `006-premium-engineering-portfolio` | **Date**: 2026-08-04 | **Spec**: [spec.md](./spec.md)

**Input**: Complete visual refinement of the existing static engineering portfolio. The work establishes a coherent premium design system, stronger brand presentation, compact content surfaces, and verifiable responsive accessibility. No code is implemented by this plan.

## Summary

Refine the current single-page portfolio rather than redesigning or replatforming it. Consolidate the existing partial primitives into one token-driven visual system; strengthen local, theme-aware company and issuer logo handling; migrate experience, certifications, About, and contact surfaces to compact reusable layouts; and centralize responsive, motion, hover, and accessibility rules. Preserve the existing Next.js static export, GitHub Pages delivery, verified content, light/dark themes, and motion coverage.

## Technical Context

**Language/Version**: TypeScript 5.7 with strict checking; React 19 and Next.js 15.1 static export.

**Primary Dependencies**: Existing Next.js, React, Tailwind CSS, Framer Motion, Lucide React, Simple Icons, Vitest, Testing Library, and Playwright. No new runtime dependency is planned.

**Storage**: Version-controlled content/configuration modules and locally served SVG assets; no database, API, backend, analytics, or visitor data collection.

**Testing**: ESLint, Prettier, TypeScript, Vitest, and Playwright. Extend coverage for token/asset mapping, logo fallback, disclosure semantics, theme treatment, gallery field limits, and viewport regressions.

**Target Platform**: Static GitHub Pages site in current evergreen desktop and mobile browsers. Validation widths: 320, 375, 768, 1024, 1440, and 1920 CSS pixels.

**Project Type**: Single Next.js static web application.

**Performance Goals**: Preserve static export; avoid logo-related layout shift; show primary content without waiting on non-critical visuals; defer only decorative work; and ship only assets referenced by portfolio content.

**Constraints**: Preserve verified content and existing architecture/deployment; use local official assets only; support dark/light themes; meet WCAG 2.1 AA principles; preserve keyboard and reduced-motion behavior; avoid horizontal overflow; do not add backend or tracking.

**Scale/Scope**: One existing single-page portfolio, five approved companies, all issuers in the existing certification inventory, four contact actions, and reusable primitives limited to this portfolio.

## Constitution Check

*GATE: Passed before Phase 0 research and re-checked after Phase 1 design.*

- [x] Responsive design covers 320px through desktop without horizontal overflow. The grid, type, spacing, badge, and logo rules define six validation widths and content-first reflow.
- [x] Themes, accessibility, performance, TypeScript, content evidence, privacy, deployment, SEO, and automated validation comply with the constitution. The plan preserves current mechanisms and specifies checks for every changed surface.
- [x] Resume evidence, static-delivery limits, and GitHub Pages/GitHub Actions impacts are recorded. Existing content modules remain the professional-content source; all brand assets are local and provenance-reviewed.

## Phase 0: Research Decisions

Research is complete. See [research.md](./research.md) for token, layout, asset, interaction, and validation decisions. No unresolved clarifications remain.

## Phase 1: Design

### 1. Design tokens and shared visual system

1. Consolidate semantic color tokens for page background, surfaces, raised surfaces, primary/muted text, borders, accent, focus, shadows, and logo treatment in both themes.
2. Define one ordered spacing scale for page gutters, section rhythm, groups, cards, controls, badges, and disclosure content. Use responsive bounds for page/section spacing so mobile density remains intentional and wide screens do not become sparse.
3. Define responsive typography tokens for display, section, card, metadata, body, caption, and badge text. Provide shared maximum-text-width utilities targeting approximately 70 characters for reading copy.
4. Define shared card styles: content-sized height, compact padding, common border/radius/surface treatment, optional density, and no decorative gradient dependency.
5. Define shared hover, focus, press, and motion variants: small elevation, soft shadow, restrained border emphasis, visible focus ring, short easing, no bounce, and an equivalent no-motion state.

### 2. Layout and reusable primitives

1. Evolve `SectionContainer` into the shared section rhythm, gutter, landmark, heading-gap, and maximum-measure primitive.
2. Define a mobile-first responsive grid system for expertise, certification, and other card groups. It begins as one column and adds columns only when the minimum usable card width, mark proportions, and readable title wrapping are preserved.
3. Standardize reusable card layouts for expertise, experience, certification, and contact contexts. Each layout uses content-sized height and shared states while allowing context-specific density.
4. Improve `Badge` to accept a text label and optional supporting icon while preserving logical wrapping, contrast, compact spacing, and non-interactive semantics unless a use case explicitly requires interaction.
5. Improve `Accordion` around native disclosure behavior: visible summary, keyboard operation, exposed expanded/collapsed state, clear focus, transition as enhancement only, and no hidden technology metadata required for initial scanning.
6. Improve `ContactAction` with recognizable GitHub, LinkedIn, email, and resume iconography, label-first accessible naming, generous targets, safe external-link treatment, and shared micro-interactions.

### 3. Brand asset and logo system

1. Maintain a version-controlled SVG asset taxonomy under `public/assets/`: `brands/companies/`, `brands/issuers/`, and `icons/` for optimized non-brand SVGs when needed. Do not add remote image URLs.
2. Extend the typed brand manifest with stable ID, kind, display name, local path, official source URL, review date, theme mode, text alternative policy, fallback initials, and approval status.
3. Apply one resolution rule: an approved local official SVG is used only when valid and legible for the active theme; otherwise the reserved logo frame renders initials. Never stretch, recolor, or create unofficial mark composites.
4. Keep `LogoFrame` as the shared resolution/sizing foundation while exposing `CompanyLogo` and `IssuerLogo` as purpose-specific components with context-appropriate default sizing and semantic expectations.
5. Add official-source candidates and review records for Zup Innovation, PHI Pagamentos, Digipix, iTFLEX Tecnologia, GSP Loteamentos, and every issuer represented in existing certification records. Entries without a usable official source remain approved initials fallbacks until reviewed.
6. Preserve visible company/issuer text adjacent to or associated with each mark so branding is never the sole identifier.

### 4. Section migration plan

1. Migrate the shell and hero to shared spacing, responsive typography, maximum-measure, section-container, and stagger variants while preserving content and navigation.
2. Rebalance About expertise cards using the responsive grid, compact shared card treatment, appropriate existing icons, and content-first height.
3. Migrate experience entries to CompanyLogo, scan-order layout (company, role, period, summary, responsibilities, technologies), compact metadata, naturally wrapping badges, and the accessible responsibilities accordion. Keep role icons subordinate and retain verified content.
4. Migrate certifications to a compact gallery of IssuerLogo plus certification title only. The source inventory remains unchanged, but issue dates, expiration, IDs, skills, verification links, categories, and status labels are not rendered in this surface.
5. Migrate contact controls to improved contact actions with shared hover/motion rules. Keep the existing approved GitHub, LinkedIn, email, and resume destinations and privacy boundaries.
6. Apply shared card and spacing styles to remaining page surfaces only where this improves consistency without expanding content scope.

### 5. Responsive, accessibility, and performance rules

1. Use mobile-first layouts and natural wrapping. Promote a grid only when it does not compromise readable title width, badge wrapping, or logo proportions.
2. Use bounded fluid typography and spacing. At 320px preserve hierarchy and touch targets; at 1440px and 1920px preserve readable measure and avoid oversized empty space.
3. Preserve semantic headings, lists, `time` semantics, landmarks, native disclosure or equivalent accessible state, text alternatives, and high-visibility focus indicators.
4. Treat hover and motion as enhancement: touch, keyboard, and reduced-motion visitors receive equivalent access and feedback, and information is never communicated only by color, motion, hover, or a mark.
5. Reserve mark frame dimensions, optimize SVGs, avoid client-only visual-state changes, and keep non-critical assets from blocking comprehension or creating layout shifts.

### 6. Testing strategy

1. Unit-test design-token and asset metadata, local-path-only logo resolution, approved/fallback behavior, and certification display selection.
2. Component-test text alternatives, visible company/issuer identity, logo frames, compact gallery fields, badge wrapping, contact labels/targets, and disclosure semantics.
3. Extend end-to-end coverage for the six target widths in both themes; page-level overflow; long labels; focus visibility; keyboard expansion; reduced motion; exact certification visible fields; contact destinations; and no remote brand-asset dependency.
4. Run format checking, linting, strict type checking, unit tests, end-to-end tests, and the production build. Review static output for stable dimensions, local brand assets, and GitHub Pages compatibility.

### 7. Migration strategy

1. Establish/normalize tokens and shared utilities alongside current primitives; do not remove behavior before its replacement is verified.
2. Establish the asset folders and manifest provenance before wiring new brand marks. Unresolved marks use initials fallback.
3. Migrate incrementally: shell/hero, About, experience, certifications, contact, then remaining shared-card consumers.
4. After every section migration, validate content parity, both themes, keyboard behavior, reduced motion, and 320px reflow. Remove superseded local styling only after the replacement passes those checks.
5. Finish with a site-wide visual audit and automated regression pass. No content-data, external-service, or deployment migration is required.

## Project Structure

### Documentation (this feature)

```text
specs/006-premium-engineering-portfolio/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── visual-ui-contract.md
└── tasks.md                # Created later by /speckit-tasks
```

### Source Code (repository root)

```text
app/
├── layout.tsx
└── page.tsx

components/
├── icons/
├── layout/
├── motion/
├── profile/
├── ui/                     # section, cards, badges, accordion, contact and logo primitives
└── visuals/

config/                     # design tokens, icon configuration, brand-asset manifest
content/                    # verified profile, experience, certification and contact records
public/assets/
├── brands/
│   ├── companies/          # local official company SVGs
│   └── issuers/            # local official issuer SVGs
└── icons/                  # optimized non-brand SVGs, if required

styles/
└── globals.css

tests/
├── e2e/
└── unit/
```

**Structure Decision**: Retain the current single static application. Refine existing reusable primitives and add only local asset/configuration coverage; do not introduce an API, service layer, backend, or new application boundary.

## Complexity Tracking

No constitution violations or complexity exceptions require justification.
