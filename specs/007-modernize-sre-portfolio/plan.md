# Implementation Plan: Modernize SRE Portfolio

**Branch**: `007-modernize-sre-portfolio` | **Date**: 2026-08-04 | **Spec**: [spec.md](./spec.md)

**Input**: Approved portfolio modernization specification and implementation constraints.

## Summary

Modernize the static single-page portfolio without changing verified professional content or the delivery model. Consolidate the design system into semantic dark/light tokens; rebuild experience as an explicit two-column timeline with five company markers and eight independent role disclosures; standardize asset, certification, navigation, contact, and footer treatments; conditionally omit unverified Projects; and expand automated validation.

The plan reuses the existing Next.js, TypeScript, React, CSS-variable, Framer Motion, Lucide, Simple Icons, Vitest, and Playwright foundation. No UI framework or backend is required.

## Technical Context

**Language/Version**: TypeScript 5.7; React 19; Next.js 15.1

**Primary Dependencies**: Next.js, React, Framer Motion, Lucide React, Simple Icons, Tailwind utility processing with authored global CSS, Vitest with Testing Library, and Playwright.

**Storage**: Versioned static content modules and local public assets; no runtime database or service.

**Testing**: Vitest component/unit tests; Playwright browser, responsive, screenshot, keyboard, reduced-motion, asset, and overflow tests; manual accessibility and Lighthouse review.

**Target Platform**: Static GitHub Pages deployment, current evergreen desktop and mobile browsers, from 320px-wide viewports upward.

**Project Type**: Static single-page web application.

**Performance Goals**: Preserve static delivery; reserve logo/image dimensions to avoid layout shift; keep primary content usable without nonessential assets; target strong Lighthouse performance, accessibility, best-practices, and SEO scores.

**Constraints**: No backend, tracking, secrets, public phone number, unsupported professional claims, or unverified project content. No large UI framework. Required widths: 375px, 768px, 1024px, and 1440px, with 320px retained as a constitution baseline. Accessible dark/light themes and reduced-motion behavior are mandatory.

**Scale/Scope**: One route; nine always-rendered sections plus conditionally rendered Projects; five company groups, eight roles/disclosures, existing certification inventory, and a local brand-asset registry.

## Constitution Check

*GATE: Passed before Phase 0 research and re-checked after Phase 1 design.*

- [x] Responsive design covers 320px through desktop without horizontal overflow; automated coverage explicitly includes 375px, 768px, 1024px, and 1440px.
- [x] Themes, accessibility, performance, TypeScript, content evidence, privacy, deployment, SEO, and applicable automated validation comply with the constitution.
- [x] Resume-backed content, conditional project publication, static-delivery limits, local asset provenance, and GitHub Pages/GitHub Actions impacts are recorded.

### Design decisions and implementation order

1. Establish semantic tokens and responsive layout rules in existing global styling; give both themes equivalent roles for background, surface, text, muted text, primary teal, secondary accent, border, shadow, radius, spacing, typography, and motion, including focus-visible and hover states.
2. Add stable content identifiers and publication filtering; make Expertise a standalone navigable section and derive Projects navigation from publishable projects.
3. Add `ExperienceTimeline`, `CompanyExperienceCard`, and `ExperienceAccordion`. Render rail/marker columns as explicit siblings of cards, retain normal-flow Grid/Flex interiors, and use no absolute positioning inside cards.
4. Consolidate local asset rendering into a reusable `Logo`, add `CertificationCard`, audit the brand registry, and add local-asset validation.
5. Refine Hero CTA hierarchy, Expertise, Header, Contact, and Footer through the shared tokens and components.
6. Add focused unit/component tests, browser snapshots, all-eight-open checks, accessibility/performance validation, then update screenshot baselines only after human review.

### Migration and compatibility

- Preserve all existing `ExperienceCompany` and role content. Add a stable company ID for deterministic disclosure IDs and test selectors; no professional text migration is required.
- Replace the experience-only generic `Accordion` after consumers move to `ExperienceAccordion`; remove it only when unused.
- Keep the brand registry as the single source of truth. Approved records must have local paths and provenance; all other records retain monogram fallbacks.
- Keep local SVGs fixed-dimensioned and static. Static export has no runtime optimizer, so use framework image handling only for supported raster assets where it adds value.
- Version screenshot baselines and approve every update through visual review.

### Risks and rollback

| Risk | Mitigation | Rollback |
|---|---|---|
| Marker drift after expansion | Explicit marker column; all-eight-open browser test | Restore prior timeline styling while retaining IDs/tests |
| Asset provenance or SVG rendering incomplete | Registry audit, local-file/SVG test, monogram fallback | Switch record to fallback and remove asset reference |
| Disclosure animation jumps | 220–280ms normal-flow transition; reduced-motion test | Disable transition while retaining semantic control |
| Refined tokens reduce readability | Theme contrast and screenshot checks | Revert token values independently |
| Filtered projects leave stale navigation | Derive section and link from the same filtered result | Restore only verified records, never the placeholder |

## Project Structure

### Documentation (this feature)

```text
specs/007-modernize-sre-portfolio/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/portfolio-ui.md
└── tasks.md                 # Generated later by /speckit-tasks
```

### Source Code (repository root)

```text
app/page.tsx
components/profile/{experience-timeline,company-experience-card,experience-accordion,certification-section,certification-card}.tsx
components/ui/{logo,company-logo,issuer-logo}.tsx
components/layout/site-header.tsx
config/{brand-assets,design-tokens}.ts
content/{experience,navigation,projects}.ts
styles/globals.css
tests/components/{experience-accordion,experience-timeline}.test.tsx
tests/e2e/{experience-timeline,responsive,accessibility-refinement}.spec.ts
tests/unit/brand-assets.test.ts
public/assets/brands/{companies,issuers}/
```

**Structure Decision**: Retain the single Next.js application and current content/config/component separation. Add only small reusable components for timeline, disclosure, logo, certification card, and nonbreaking footer technology groups.

## Complexity Tracking

No constitution violations or unjustified complexity additions.
