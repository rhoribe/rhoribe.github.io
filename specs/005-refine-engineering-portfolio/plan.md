# Implementation Plan: Refine Engineering Portfolio

**Branch**: `005-refine-engineering-portfolio` | **Date**: 2026-08-04 | **Spec**: [spec.md](./spec.md)

**Input**: Complete visual refinement of the existing static engineering portfolio, including shared visual primitives, local theme-aware brand assets, cleaner experience and certification surfaces, and responsive/accessibility validation. No code is implemented by this plan.

## Summary

Refine the existing portfolio into a compact, premium engineering presentation without changing its architecture, publishing model, verified content, theme capability, or motion coverage. Establish a small token-driven visual system; add reusable layout, card, badge, disclosure, logo, and contact-action primitives; move company and issuer branding to locally stored official SVG assets with provenance and safe initials fallbacks; then migrate the existing page sections onto those primitives. Validate desktop and mobile layouts, both themes, keyboard operation, reduced motion, content preservation, asset provenance, and static export.

## Technical Context

**Language/Version**: TypeScript 5.7 with strict checking; React 19 and Next.js 15.1 static export

**Primary Dependencies**: Existing Next.js, React, Tailwind CSS, Framer Motion, Lucide React, Simple Icons, Vitest, Testing Library, and Playwright. No new runtime dependency is planned.

**Storage**: Version-controlled local content modules and local static SVG brand assets; no database, API, backend, analytics, or visitor data collection.

**Testing**: Existing ESLint, Prettier, TypeScript, Vitest, and Playwright suites; extend unit and end-to-end coverage for design primitives, asset mapping/fallbacks, accordion semantics, theme treatment, certification display limits, and target viewport regressions.

**Target Platform**: Static GitHub Pages site in current evergreen desktop and mobile browsers; supported CSS viewport widths: 320, 375, 768, 1024, 1440, and 1920 pixels.

**Project Type**: Single Next.js static web application.

**Performance Goals**: Preserve static export; prevent logo-related layout shift; render primary content immediately; defer only non-critical decorative visual work; ship only the brand assets referenced by content.

**Constraints**: Preserve verified public content and existing architectural/deployment choices; local official assets only, no hotlinks; WCAG 2.1 AA principles; dark/light theme support; keyboard and reduced-motion support; no horizontal overflow; no backend or new tracking.

**Scale/Scope**: One existing single-page portfolio, five approved company marks, all issuers in the existing certification inventory, and four contact actions. Design primitives are reusable only within this portfolio.

## Constitution Check

*GATE: Passed before Phase 0 research and re-checked after Phase 1 design.*

- [x] Responsive design covers 320px through desktop without horizontal overflow. The grid, typography, spacing, badge, and logo rules name six validation widths and require content-first reflow.
- [x] Themes, accessibility, performance, TypeScript, content evidence, privacy, deployment, SEO, and applicable automated validation comply with the constitution. The plan preserves current mechanisms and records explicit checks for additions.
- [x] Resume evidence, static-delivery limits, and GitHub Pages/GitHub Actions impacts are recorded. Existing profile modules remain the public-content source; all new visual assets are local and provenance-reviewed.

## Phase 0: Research Decisions

Research is complete. See [research.md](./research.md) for rationale, alternatives, and implementation-boundary decisions.

## Phase 1: Design

### 1. Design-system foundation

1. Define semantic design tokens for backgrounds, surfaces, text, muted text, borders, accent, focus, shadow, and logo treatment in both supported themes.
2. Define a compact spacing scale and apply it to page gutters, section rhythm, groups, cards, headings, badges, controls, and disclosure content.
3. Define responsive typography tokens for display, section, card, metadata, body, caption, and badge text. Add maximum text-width utilities for reading copy (targeting roughly 70 characters).
4. Create shared section-container, grid, and card-layout primitives. Their defaults must be content-sized, have no forced tall height, and use controlled elevation rather than large gradients or decoration.
5. Centralize hover, focus, press, and motion variants: a small card lift, soft shadow, restrained border emphasis, accessible focus ring, and no-bounce/reduced-motion alternatives.

### 2. Asset and logo system

1. Add a static asset taxonomy: `public/assets/brands/companies/`, `public/assets/brands/issuers/`, and `public/assets/icons/`. Keep SVG source assets optimized and version-controlled; do not use remote image URLs.
2. Record each asset's brand, public filename, source URL, acquisition/review date, theme mode, alternative text, and fallback initials in a typed asset manifest adjacent to content/configuration.
3. Define one logo-resolution rule: use a local, approved official SVG when present and compatible with the active theme; otherwise render initials in the same reserved logo frame. Never stretch, recolor, or create unofficial composites.
4. Create reusable CompanyLogo and IssuerLogo presentation components over the same resolution and sizing foundation. CompanyLogo serves the five approved employers; IssuerLogo serves every issuer already represented in certification content.
5. Preserve company/issuer text in the semantic UI even when a mark is decorative, so a logo never becomes the only identifier.

### 3. Section migrations

1. Migrate the page shell and hero to the new section container, typography, max-measure, spacing, and stagger variants while preserving existing content and navigation.
2. Rebalance About expertise cards with appropriate existing icon semantics, compact card layouts, and wrapping content.
3. Refactor experience entries onto CompanyLogo, a scan-order role layout, metadata treatment, responsive technology badges, and an accessible accordion for responsibilities. Keep the role icon secondary and retain all verified role content.
4. Replace the current certification controls and administrative-card fields with a compact responsive gallery of IssuerLogo plus certification name only. Retain the underlying verified inventory; do not render dates, status, IDs, skills, or verification links.
5. Convert the contact list to shared contact-action buttons with recognizable official/brand iconography, labels, external-link safety, minimum target size, and common interaction states. Keep only approved destinations and use the existing resume destination when available.
6. Migrate remaining education and project card surfaces to the shared layouts only where this improves consistency without changing content scope.

### 4. Responsive, accessibility, and performance rules

1. Apply mobile-first one-column defaults. Promote grids only when available width preserves readable card widths; badges wrap rather than shrink below readability.
2. Use fluid type and spacing within bounded minimum/maximum values. Preserve readable hierarchy at 320px and avoid oversized desktop whitespace at 1440px and 1920px.
3. Use semantic headings, lists, `time` elements, buttons or native disclosure semantics, visible focus, coherent landmark navigation, text alternatives, and explicit expanded/collapsed state.
4. Ensure hover polish is supplemental: touch, keyboard, and reduced-motion visitors receive equivalent access and feedback.
5. Reserve logo dimensions, prevent client-only visual-state shifts, avoid shipping unused assets, and preserve current static export behavior.

### 5. Testing strategy

1. Unit-test token/asset metadata, local-path-only resolution, company and issuer fallback behavior, and certification rendering selection.
2. Component-test logo alternatives, compact certification-card content, contact action labels, badge wrapping classes, and accordion semantics/state.
3. Extend end-to-end tests for target widths in dark and light modes; overflow; focus visibility and keyboard expansion; reduced motion; exact certification visible fields; and contact target behavior.
4. Run formatting, linting, strict type checks, unit tests, end-to-end tests, and production build before release. Review static output for absent remote-logo dependencies and stable logo dimensions.

### 6. Migration strategy

1. Add tokens, shared utilities, and primitives alongside the existing styles and components; do not delete current behavior first.
2. Add approved asset folders and manifest entries with provenance before wiring any section to brand marks. Unresolved marks remain initials fallbacks.
3. Migrate one section at a time: shell/hero, About, experience, certifications, contact, then remaining shared card consumers.
4. After each migration, retain content parity, validate both themes and 320px layout, and remove superseded local styling only after its replacement is verified.
5. Complete a final site-wide visual and automated regression pass before merging. No content-data migration, external service migration, or deployment migration is required.

## Project Structure

### Documentation (this feature)

```text
specs/005-refine-engineering-portfolio/
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
├── ui/                     # shared section, card, badge, accordion, contact and logo primitives
└── visuals/

config/                     # tokens, icon configuration, logo/asset manifest
content/                    # verified profile, experience, certification and contact records
public/assets/
├── brands/
│   ├── companies/          # official local company SVGs
│   └── issuers/            # official local issuer SVGs
└── icons/                  # optimized non-brand SVG assets, if required

styles/
└── globals.css

tests/
├── e2e/
└── unit/
```

**Structure Decision**: Retain the current single-application layout. Add only reusable portfolio UI primitives, typed configuration/manifest entries, and locally served assets; do not introduce a service layer, API, or new application boundary.

## Complexity Tracking

No constitution violations or complexity exceptions require justification.
