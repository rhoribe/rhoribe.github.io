# UI Contract: Motion Components

## Scope

These are internal UI contracts for the static portfolio. They create no network endpoint, browser storage schema, or public API. Existing page anchors and content module shapes remain unchanged.

## Shared rules

- All components accept semantic children and preserve accessible source order.
- All optional visual motion has a reduced/static path.
- Named variants/tokens come from `lib/motion.ts`; consumers do not duplicate timing literals.
- Decorative output is `aria-hidden` and non-focusable. Interactive output retains native control semantics.

## Component interfaces

| Component | Inputs | Output and guarantees |
|---|---|---|
| `MotionProvider` | `children` | Establishes user-preference-aware motion defaults; never hides children. |
| `Reveal` | `children`, `delay?`, `variant?`, `once?`, `className?` | One semantic child with one-time viewport entrance; static/minimal fallback. |
| `StaggerContainer` | `children`, `stagger?`, `delayChildren?`, `className?` | Bounded group orchestration; caller limits visible child count. |
| `AnimatedSection` | `id?`, `children`, `label?`, `className?`, `stagger?` | Renders a semantic section with an unchanged anchor ID and optional one-time reveal. |
| `AnimatedText` | `children`, `as?`, `delay?`, `className?` | Animates a whole text unit or visually separated lines while maintaining normal accessible text. |
| `InteractiveCard` | `children`, `className?`, `interactive?`, `tilt?` | Renders an `article`; CSS provides hover/focus-within feedback; tilt requires capability approval and is non-essential. |
| `ScrollProgress` | `children`, `itemIds`, `className?` | Renders existing ordered timeline children and decorative line; reports visible item state without blocking reading. |
| `MotionSafe` | `children`, `fallback?`, `requiresFinePointer?` | Chooses optional animated branch only when capability and preference allow. |
| `ReducedMotionFallback` | `children`, `className?` | Renders static equivalent of an optional visual; no essential data exists only in this component. |
| `InfrastructureNodes` | `className?`, `animated?` | Decorative inline SVG marked `aria-hidden` and `focusable=false`; static when animation is unavailable. |

## Header contract

- Existing navigation hrefs remain unchanged (`#about`, `#expertise`, `#experience`, `#credentials`, `#projects`, `#contact`).
- The active visible link receives `aria-current="location"`; visual state is not color-only.
- The menu trigger has `aria-controls` and correct `aria-expanded`. Escape, selecting a link, and pressing the close trigger close the menu; focus returns to the trigger after a close.

## Theme contract

- Existing `data-theme` values (`light`, `dark`) and `localStorage` key remain unchanged.
- A theme transition class is ephemeral and applies only a narrowly defined visual-property list.
- The theme control retains an accessible label describing the destination theme and exposes a visible focus state.

## Project-card contract

- Existing unverified project cards keep their pending notice and never show invented repository metadata, secondary action, or URL.
- When a verified existing action is present, its link stays in the normal accessible flow on touch, focus, and hover. Arrow/icon motion is supplementary only.
