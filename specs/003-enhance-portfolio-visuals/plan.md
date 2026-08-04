# Implementation Plan: Enhance Portfolio Visuals

**Branch**: `003-enhance-portfolio-visuals` | **Date**: 2026-08-04 | **Spec**: [spec.md](spec.md)

## Summary

Extend the existing static Next.js portfolio with semantic iconography and refine the installed shared motion system. General icons use Lucide React, approved technology marks use Simple Icons, CSS/Tailwind handles ordinary state changes, and the existing Framer Motion dependency remains limited to coordinated entrances, viewport reveals, timeline progress, and mobile-menu presence. Content records reference semantic identifiers—not React components—so layout remains independent of icon-library imports.

## Technical Context

**Language/Version**: TypeScript 5.7, React 19, Next.js 15 static export

**Primary Dependencies**: Existing Next.js, React, Tailwind CSS, Framer Motion, Lucide React; add Simple Icons for selected approved brand marks only

**Storage**: Existing browser theme preference; no new storage, backend, visitor data, or analytics

**Testing**: Vitest + Testing Library unit/component checks; Playwright journeys; ESLint, Prettier, strict type check, and static production build

**Target Platform**: Static GitHub Pages portfolio in evergreen desktop/mobile browsers from 320px wide upward

**Project Type**: Static single-page web application

**Performance Goals**: Hero text/actions usable within 1 second; no intentional layout shift; transitions 150–400ms except one-time reveals up to 600ms; no whole-library icon bundle or non-critical decoration in the critical path

**Constraints**: Preserve existing content model, routes, `output: "export"`, Pages base-path logic, and theme bootstrap. No additional animation/icon libraries beyond Simple Icons, no WebGL/Three.js/canvas particles/video, and no invented content. Motion is progressive enhancement and must obey reduced motion.

**Scale/Scope**: One page; add icon configuration, reusable icon primitives, enhanced content metadata, and targeted refinements to existing motion/layout components and tests.

## Constitution Check

### Pre-design gate — PASS

- [x] Responsive behavior remains 320px through desktop with containment for glows, SVG, and icon/text rows.
- [x] Themes, WCAG 2.1 AA accessibility, performance, strict TypeScript, content evidence, privacy, SEO, static delivery, and automated validation are explicitly preserved.
- [x] No professional content is added beyond the approved status phrase; project/certification/education details remain absent unless already verified.

### Post-design gate — PASS

- [x] The design extends existing shared motion primitives and adds a semantic icon layer; it does not duplicate variants or couple content records to component imports.
- [x] Every decorative graphic has an assistive-technology exclusion and every icon-only action has an accessible name; keyboard, touch, and reduced-motion behavior are specified.
- [x] Static export and GitHub Pages paths remain unchanged; bundle, responsive, accessibility, theme, and build validation are part of the release gate.

## Project Structure

```text
app/
├── layout.tsx                         # Keep theme bootstrap; mount MotionProvider
└── page.tsx                           # Compose semantic icons with existing content sections

components/
├── icons/
│   ├── app-icon.tsx                   # Generic semantic icon renderer
│   ├── brand-icon.tsx                 # Approved official-mark renderer
│   ├── technology-icon.tsx            # Technology fallback resolver
│   ├── icon-badge.tsx                 # Non-interactive category/metadata icon container
│   ├── icon-button.tsx                # Accessible icon-only button primitive
│   └── index.ts
├── layout/
│   ├── site-header.tsx                # Navigation icons, active state, mobile-menu behavior
│   └── theme-toggle.tsx               # Semantic sun/moon control
├── motion/                            # Existing shared motion primitives, refined only as needed
├── ui/
│   └── section-heading.tsx
└── visuals/
    └── infrastructure-nodes.tsx       # Existing decorative SVG, capability-gated

config/
├── icons.ts                           # Semantic generic/brand mappings and size tokens
└── technologies.ts                    # Approved technology identifier metadata

types/
└── icon.ts                            # Shared semantic icon and renderer prop types

content/                               # Existing records gain semantic identifiers only
lib/
├── content.ts                         # Content type extensions
├── motion.ts                          # Existing shared timings/variants
└── site-config.ts
styles/
└── globals.css                        # Theme-aware icon, card, header, timeline, fallback styles
tests/
├── components/                        # Icon primitive accessibility/fallback tests
├── unit/                              # Mapping/content validation
└── e2e/                               # Responsive, navigation, theme, reduced-motion journeys
```

**Structure Decision**: Retain the current server-rendered page and `content/` modules. Client boundaries stay in interactive/motion primitives. Icons are resolved at render time from semantic strings, preventing direct component imports in content files.

## Implementation Architecture

### 1. Dependencies and semantic icon system

1. Add the Simple Icons package and retain existing Lucide React and Framer Motion dependencies; do not add other icon or animation packages.
2. Define `IconName`, `BrandName`, `TechnologyName`, `IconSize`, and `BrandColorMode` types in `types/icon.ts` (or colocate types in `config/icons.ts` if the project prefers fewer files).
3. In `config/icons.ts`, map generic semantic names (`home`, `about`, `experience`, `skills`, `certifications`, `education`, `projects`, `contact`, `cloud`, `observability`, `cicd`, `automation`, `networking`, `security`, `reliability`, `infrastructure`, `leadership`, `download`, `external-link`, `location`, `calendar`) to individually imported Lucide symbols. Map `aws`, `kubernetes`, `terraform`, `docker`, `github`, `gitlab`, `jenkins`, `datadog`, `prometheus`, `grafana`, and `linux` only to permitted official marks.
4. In `config/technologies.ts`, record the approved technology identifier, optional brand name, and generic fallback; project and expertise content may reference only these identifiers.
5. Keep default icon color `currentColor`. Brand colors are disabled by default, may appear only in configured hover/emphasis contexts, and must retain theme contrast. Unsupported/missing brand marks resolve to the mapped generic icon, never an empty control.

### 2. Icon component contracts

The full public UI contract is in [visual-ui-contract.md](contracts/visual-ui-contract.md).

- `AppIcon` accepts a semantic generic name, size, optional title, class name, and decorative flag. It renders an individually imported icon and applies `aria-hidden` unless a label/title makes it informative.
- `BrandIcon` accepts a permitted brand name and the same semantic/accessibility controls. It never turns an unverified content string into a logo.
- `TechnologyIcon` accepts an approved technology identifier and resolves to its permitted official mark or generic fallback.
- `IconBadge` wraps a non-interactive icon with standardized compact/regular/hero sizing and does not add focusability.
- `IconButton` requires an accessible label and preserves native button or anchor semantics; tooltips supplement but never supply its accessible name.

### 3. Content and section migration

Update content types and records only with verified semantic metadata:

- `navigation.ts`: add icon names to existing links; preserve current anchors and visible labels.
- `expertise.ts`: convert tuple records to typed objects with a category icon and approved technology identifiers. Do not add ratings.
- `experience.ts`: add role icon metadata; add location/date identifiers only if verified data exists.
- `credentials.ts`: add credential/education category icon metadata without inventing dates, IDs, or links.
- `projects.ts`: retain empty/pending data; only use technology, repository, external-demo, update, or featured identifiers once validated.
- `profile.ts`: add display-only semantic cue lists for existing About and hero concepts; the status phrase remains non-metric.

Update `app/page.tsx` to render icon cues from those semantic fields, use `IconBadge` for contextual metadata, and use `IconButton`/visible labeled links for actions. Keep text as the primary source of information and retain existing DOM order.

### 4. Motion, hero, timeline, cards, navigation, and theme

- Preserve `lib/motion.ts` as the timing/variant authority: 150ms instant, 220ms fast, 320ms base, 480ms slow, 600ms emphasis; 12px compact and 22px desktop reveal distance; 65ms stagger; no inline duplicated timing literals.
- Refine `Reveal`, `AnimatedSection`, `AnimatedText`, and `StaggerContainer` to use the common reduced-motion outcome. Default/server HTML must be visible before hydration; reveal wrappers cannot permanently hide it.
- Keep `InfrastructureNodes` as a small, dimensioned `aria-hidden` inline SVG. Add only semantic technology cues to the hero foreground. The SVG is static for reduced motion, simplified on mobile, and cannot capture pointers or create overflow.
- Enhance `SiteHeader` with AppIcon-rendered links, active icon state, `aria-current`, scroll surface state, and menu transition. Ensure close by toggle, link, or Escape restores focus when appropriate; manage scroll lock only while open and always clean it up.
- Use `ScrollProgress` to animate only a timeline line and an active-entry class. Keep list reading order semantic; render a full static line under reduced motion and a simple mobile layout.
- Extend `InteractiveCard` with variants that preserve article semantics, use `focus-within` for cards containing controls, and gate tilt/pointer listeners to fine pointers. CSS handles border/shadow/translation and must give touch and keyboard equivalent feedback.
- Keep the theme bootstrap in `app/layout.tsx`. Theme icon transition and short-lived root class transition only color, background, border, and shadow properties—never all properties. Add theme tokens for icon contrast, muted/default icon color, allowed emphasis, glow, and gradients.

### 5. Accessibility and performance

- Decorative icons/SVG use `aria-hidden="true"`; adjacent text icons are hidden to prevent duplicate announcement. Icon-only controls receive required labels; visible labels remain visible in primary mobile navigation.
- Preserve focus order and focus-ring stacking above header/card/decorative layers. Maintain at least 44px practical touch targets for icon-only controls and avoid status-by-color alone.
- Prefer transforms/opacity and lightweight SVG stroke/opacity; never animate layout dimensions. Do not create permanent scroll listeners; observers/listeners are cleaned up on unmount.
- Verify individual icon imports in build output and compare baseline/updated build size. Lazy-load only optional non-critical decoration if a measurable regression appears; never defer hero text, links, navigation, or focus management.

### 6. Migration order and risks

1. Add Simple Icons and verify the unmodified production build.
2. Add semantic types/configuration and unit validation for mappings/fallbacks.
3. Add icon primitives and their accessibility tests.
4. Add semantic metadata to verified content records and render navigation, hero, About, expertise, timeline, credentials, education, projects, contact, and footer incrementally.
5. Refine existing motion/header/card/timeline/theme primitives; do not replace them wholesale.
6. Add component and end-to-end coverage, inspect bundle output, validate static export, then deploy through the existing GitHub Actions gate.

| Risk | Mitigation |
|---|---|
| Brand marks add bundle weight or licensing uncertainty | Use selected permitted marks only, per-symbol imports, generic fallback, and bundle measurement. |
| Content becomes coupled to UI imports | Content stores semantic strings only; renderers own imports and fallback resolution. |
| Motion hides content or harms reading | Server-visible baseline, one-time short reveals, shared reduced variants, and no layout animation. |
| Mobile menu/focus regression | Controlled state, Escape/link/toggle close paths, scroll-lock cleanup, and keyboard E2E coverage. |
| Theme/icon contrast failure | Design tokens, both-theme visual checks, and contrast assertions/manual audit. |

## Validation Commands

```bash
npm install simple-icons
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

Follow [quickstart.md](quickstart.md) for end-to-end validation, including widths 320/375/768/1024/1440, dark/light themes, reduced motion, keyboard-only operation, touch emulation, direct hashes, static output, asset paths, and bundle comparison.

## Complexity Tracking

No constitution violations require justification.
