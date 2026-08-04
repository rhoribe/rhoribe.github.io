# Implementation Plan: Modern Portfolio Motion

**Branch**: `002-modern-portfolio-motion` | **Date**: 2026-08-04 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/002-modern-portfolio-motion/spec.md`

## Summary

Enhance the existing static Ricardo Horibe portfolio with a restrained, cloud- and infrastructure-inspired motion and depth system while preserving its content, semantic structure, dual themes, SEO, and GitHub Pages export. CSS and Tailwind utilities own ordinary hover, focus, pressed, and theme-state feedback. Add Framer Motion as the sole animation runtime for orchestrated entrances, viewport reveals, the timeline progress cue, and mobile-menu presence transitions. The plan introduces small reusable client-boundary components and an inline decorative SVG; it does not change the portfolio data model, add a backend, or rewrite the page architecture.

## Technical Context

**Language/Version**: TypeScript 5.7, React 19, Next.js 15 static export

**Primary Dependencies**: Next.js, React, Tailwind CSS, Lucide icons; add Framer Motion as the only animation dependency

**Storage**: Existing browser theme preference only; no new persisted data, services, or visitor data collection

**Testing**: Vitest and Testing Library unit tests; Playwright end-to-end tests; lint, formatting, strict type check, and production export build

**Target Platform**: Static GitHub Pages portfolio, modern evergreen desktop and mobile browsers from 320px wide upward

**Project Type**: Static single-page web application

**Performance Goals**: Primary hero text and action usable within 1 second; no intentional cumulative layout shift; entrance effects complete in 150–600ms; no more than 6 simultaneously animating content elements (hero maximum 5; decorative SVG maximum 3 active paths/nodes; timeline maximum 2 active visual effects)

**Constraints**: Preserve `output: "export"`, existing GitHub Pages base-path behavior and pre-hydration theme script; no additional animation libraries, WebGL, Three.js, canvas particle system, video background, backend, analytics collection, or unsupported professional claims; use CSS/Tailwind for simple interaction states and Framer Motion only for orchestration; reduced-motion and touch/low-power paths must be complete and simpler

**Scale/Scope**: One existing page, existing header/theme controls and six existing content groups; add a motion component family, decorative SVG, focused CSS token system, and tests without changing existing portfolio content records

## Constitution Check

### Pre-design gate — PASS

- [x] Responsive design covers 320px through desktop without horizontal overflow. Decorations use containment/overflow clipping and are reduced at small widths; cards and timeline retain their existing single-column mobile reading order.
- [x] Themes, accessibility, performance, TypeScript, content evidence, privacy, deployment, SEO, and automated validation comply with the constitution. The pre-hydration theme script remains; semantic content, metadata, and static export are retained; motion is progressive enhancement with keyboard and reduced-motion equivalents.
- [x] Resume evidence, static-delivery limits, and GitHub Pages/GitHub Actions impacts are recorded. No professional data changes are planned; the only added status phrase is the approved general positioning phrase in the feature spec.

### Post-design gate — PASS

- [x] Design uses a single animation dependency and shared tokens/variants instead of duplicated configuration, with CSS transitions for simple state feedback.
- [x] Animation is constrained to transform/opacity/SVG stroke or opacity where appropriate, has static fallbacks, and does not add a client data dependency or server runtime requirement.
- [x] Tests and manual validation cover the constitution's responsive, theme, keyboard, reduced-motion, content integrity, performance, SEO preservation, and production-build gates.

## Project Structure

### Documentation (this feature)

```text
specs/002-modern-portfolio-motion/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── motion-ui-contract.md
└── tasks.md                         # Created later by /speckit-tasks
```

### Source Code (repository root)

```text
app/
├── layout.tsx                       # Preserve theme bootstrap; mount MotionProvider
└── page.tsx                         # Compose existing content with section/card/timeline wrappers

components/
├── layout/
│   ├── site-header.tsx              # Scroll-aware header, active link, controlled mobile menu
│   └── theme-toggle.tsx             # Theme control and animated icon state
├── motion/
│   ├── motion-provider.tsx
│   ├── reveal.tsx
│   ├── stagger-container.tsx
│   ├── animated-section.tsx
│   ├── animated-text.tsx
│   ├── interactive-card.tsx
│   ├── scroll-progress.tsx
│   ├── motion-safe.tsx
│   └── reduced-motion-fallback.tsx
├── ui/
│   └── section-heading.tsx
└── visuals/
    └── infrastructure-nodes.tsx     # Decorative inline, aria-hidden SVG

lib/
└── motion.ts                         # Tokens, shared variants, feature capability helpers

styles/
└── globals.css                       # Theme, background, interaction, responsive, and fallback CSS

tests/
├── unit/                             # Motion token/fallback and header/theme behavior tests
└── e2e/                              # Navigation, responsive, motion-preference, and theme journeys
```

**Structure Decision**: Keep the existing server-rendered one-page composition and centralized `content/` records. Add client components only at interactive or animated boundaries. No route, service, API, database, or content-schema migration is required.

## Implementation Architecture

### 1. Motion system

- Add `lib/motion.ts` as the single source for semantic timing, easing, reveal distances, stagger spacing, viewport thresholds, and named variants. Components consume named variants; page and component code must not recreate timing literals.
- Use durations: `instant` 150ms, `fast` 220ms, `base` 320ms, `slow` 480ms, and `emphasis` 600ms. Use a natural exit curve `[0.16, 1, 0.3, 1]` for entrances and a shorter ease-out for exits. Desktop reveal distance is 20–24px, compact/mobile distance 12px; child stagger is 50–80ms.
- `MotionProvider` is the sole client configuration boundary and configures the user motion preference. Individual components use the shared reduced variant when they need an opacity-only or immediate presentation.
- Use Framer Motion only for hero/section/text stagger, viewport reveal, timeline line, mobile-menu enter/exit, and SVG data-flow orchestration. CSS/Tailwind handles link, button, card, focus, pressed, and theme-property transitions.
- Animate only one stagger group within the reading viewport. `will-change` is applied only while a component is animating, never permanently.

### 2. Reusable animation components

The public component contracts are defined in [motion-ui-contract.md](contracts/motion-ui-contract.md). All components preserve ordinary HTML/ARIA semantics and render their children without content duplication.

- `MotionProvider`: supplies user-preference-aware defaults and token-consistent transitions.
- `Reveal`: one-time viewport entry for one semantic child; supports a visible/static reduced state.
- `StaggerContainer`: coordinates a bounded group of reveal children.
- `AnimatedSection`: wraps an existing semantic `section`, registers an optional navigation target, and applies section reveal behavior.
- `AnimatedText`: orchestrates hero lines or short status text without splitting words in a way that harms copy/paste or screen-reader reading.
- `InteractiveCard`: preserves `article` semantics and provides optional fine-pointer tilt only when supported; CSS provides equivalent `:focus-visible`/`:focus-within` feedback.
- `ScrollProgress`: renders a decorative timeline progress line from scroll position and reports the visible experience item for styling.
- `MotionSafe`: renders an optional animated/decorative branch only when motion and capability conditions allow it.
- `ReducedMotionFallback`: renders the same decorative or status information in an immediate static form.

### 3. Hero visual and background

- Add `InfrastructureNodes` as a small inline SVG with nodes and connecting paths; mark the SVG `aria-hidden="true"` and non-focusable because it conveys no required information.
- Use a maximum of three subtle moving path/node effects and a static completed diagram when reduced motion is active. Do not use canvas, WebGL, video, or particle fields.
- Add CSS custom properties for both themes: layered page background, a subtle grid, radial lighting, and limited decorative shapes. Use pseudo-elements or isolated layers behind content, never a full-page continuously blurred element.
- Keep the hero headline and action in normal document flow; visual layers are absolute and contain their own overflow so they cannot create layout shift or horizontal scrolling.

### 4. Navigation, theme, cards, and timeline

- Extend `SiteHeader` with a passive scroll/section observer state: `atTop`, `activeSection`, and `menuOpen`. Determine the active link from visible existing section IDs, accounting for direct hash loads; the hero is not an active navigation target.
- Render an animated active-link indicator under/alongside the active desktop link, while `aria-current="location"` and a text/shape distinction avoid color-only state. On mobile, use the same active semantic state without requiring the indicator.
- Use presence-based mobile-menu entry and exit. On close by control, link selection, or Escape: update `aria-expanded`, return focus to the menu button, and clean up listeners. Keep it a disclosure navigation rather than a modal; do not add a focus trap or make background content inert.
- Preserve the existing pre-hydration theme script. On an explicit change, add a short-lived root theme-transition class with a narrow list of color/background/border/shadow properties; never apply a universal transition. Theme icon changes use Framer Motion only as part of the existing orchestration policy or CSS rotation/opacity if it remains a simple state; select the CSS option unless a shared motion variant is already required.
- Change existing `Card` composition to `InteractiveCard` while retaining `article`; never add `tabIndex` to informational cards only to create an effect. Use `:focus-within` for a card that contains a real interactive descendant. Project secondary action affordances are conditional on already verified project data; pending project cards retain their current content and no invented links.
- Add `ScrollProgress` around the existing ordered experience list. Its scroll value drives only a line scale; each entry reveals once and gains an active visual style when sufficiently visible. At mobile widths, use a simple vertical line and no pointer tilt; under reduced motion, render the complete static line and entries.

### 5. Responsive and reduced-motion behavior

| Context | Behavior |
|---|---|
| Desktop, fine pointer | Full stagger/reveal sequence, subtle fine-pointer tilt/spotlight where enabled, SVG data flow, timeline line progression. |
| Compact desktop/tablet | Same hierarchy with fewer decorative SVG nodes and no optional pointer tracking if the viewport or device capability is constrained. |
| Mobile/touch | 12px or less reveal movement, short durations, static/limited decorative layers, no pointer tracking, tilt, or parallax; all actions remain visible. |
| Reduced motion | Immediate or minimal opacity content reveal; static hero SVG/timeline; no data flow, animated background, parallax, spotlight, pointer tracking, or animated menu travel. |
| No script/observer failure | Server-rendered text, links, sections, timeline entries, and static SVG remain readable and operable. |

### 6. Accessibility strategy

- Preserve semantic `header`, `nav`, `main`, `section`, `article`, `ol`, button, and anchor elements and the skip link. Decorative background/SVG layers are hidden from assistive technology and cannot receive focus.
- Ensure focus indicators remain visible above glow, grid, header, and card layers. Hover feedback has a matching `:focus-visible` or `:focus-within` state; touch does not depend on hover.
- Keep all copy in the DOM as normal text rather than announcing per-letter animations. The status uses ordinary visible text and no live region because it is not a changing alert.
- Keep focus order stable during entrance animations. Menu Escape and close behavior restore trigger focus; navigation links update their active state using `aria-current` in addition to the visual indicator.
- Respect `prefers-reduced-motion` through both CSS and motion-aware components. Replace the existing broad global duration override with targeted rules so essential theme/control feedback remains legible while non-essential movement is eliminated.
- Perform contrast review for both dedicated themes, including text over gradients, active-link indicator, card boundary/shadow, button states, and focus ring. Provide a solid-color fallback where backdrop filtering or color mixing is unavailable.

### 7. Performance controls and budget

- Prefer composited opacity, transform, and lightweight SVG path/node effects. Do not animate layout dimensions, use heavy filters continuously, or animate large blur surfaces on mobile.
- Use one-time viewport observation for section/card groups. Do not add permanent scroll listeners; motion scroll values handle the timeline and any temporary pointer listener is fine-pointer-only, scheduled once per animation frame, and removed on unmount/when inactive.
- Disable pointer tracking for coarse/no-hover devices, reduced motion, narrow viewports, and low-power indications where available. Stop/defer optional SVG data flow when the hero is off screen.
- Keep main hero content and navigation eager. Defer only non-critical decoration or optional scroll visuals if bundle inspection shows a material regression; do not defer text, actions, focus management, or the header.
- Budget: maximum 6 concurrent content animations, maximum 5 hero content elements, maximum 3 continuously changing decorative SVG primitives, maximum 2 active timeline effects; no additional network assets for visual motion.

### 8. Migration strategy

1. Add Framer Motion and `lib/motion.ts`; verify static export before changing visible components.
2. Add `MotionProvider`, then add motion wrappers incrementally around the existing page sections without moving content out of `content/` modules.
3. Add the hero SVG/status and CSS visual tokens behind existing hero content, with a static baseline first.
4. Upgrade header/mobile menu/theme control while preserving existing IDs, anchors, labels, theme storage key, and pre-hydration script.
5. Replace local page `Card` usage with `InteractiveCard`, then add timeline progress and expertise/project details conditionally.
6. Add and run tests after each behavior group. Retain plain semantic and CSS fallback paths so rollback consists of removing wrappers/dependency rather than restoring a replaced architecture.

### 9. Risk analysis

| Risk | Mitigation |
|---|---|
| Client animation runtime increases initial JavaScript | Use one dependency only, shared variants, bounded effects, and defer optional decoration after bundle review; keep core text/content server-rendered. |
| Animation hides content before client hydration or when scripts fail | Keep semantic content rendered in source; use static/reduced fallbacks and no CSS default that permanently hides content. |
| Theme transition causes flash or slow global animation | Preserve the existing pre-hydration script; apply a temporary class with limited properties only. |
| Scroll/active-section state is unstable near boundaries or direct hashes | Use section visibility thresholds, deterministic tie-breaking, and tests for initial hashes and normal scrolling. |
| Mobile menu exit disrupts keyboard focus | Keep a controlled open state, close on Escape/link selection/control, restore focus to trigger, and test focus sequence. |
| Decorative layers reduce contrast or create overflow | Isolate layers behind content, test themes/widths, use `pointer-events: none`, containment, and solid fallbacks. |
| Tilt/spotlight burdens touch or lower-power devices | Gate by fine-pointer capability and motion preference; make all such effects optional and removable. |
| New visual language implies unsupported credentials | Keep content modules unchanged and restrict new status text to the approved non-metric phrase. |

### 10. Validation commands

```bash
npm install framer-motion
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

Manual validation additionally follows [quickstart.md](quickstart.md): widths 320/375/768/1024/1440, both themes, keyboard-only navigation, touch behavior, direct section hashes, and reduced-motion mode. Production release continues to rely on the existing GitHub Actions build gate.

## Complexity Tracking

No constitution violations or complexity exceptions require justification.
