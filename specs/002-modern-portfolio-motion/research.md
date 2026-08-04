# Research: Modern Portfolio Motion

## Decision: Use Framer Motion as the single orchestration dependency

**Rationale**: The project has Next.js 15, React 19, and static export enabled but no existing animation runtime. Framer Motion provides the required React primitives for viewport entry, staggered variants, presence transitions, reduced-motion awareness, and scroll-linked values without a server dependency. CSS and Tailwind remain responsible for ordinary hover, focus, press, and theme transitions.

**Alternatives considered**:

- Native Intersection Observer plus handwritten animation state: viable, but would duplicate reveal orchestration, reduced-motion behavior, and transition definitions.
- A second animation library: rejected by the requested dependency boundary and unnecessary for this scope.
- Canvas, WebGL, Three.js, or video: rejected for static-site performance, accessibility, and explicit scope constraints.

## Decision: Centralize motion in a provider, tokens, and shared variants

**Rationale**: A `MotionProvider` at the client boundary applies user preference consistently. `lib/motion.ts` exposes named duration, easing, distance, stagger, hero, reveal, menu, and timeline variants so behavior does not become fragmented across sections. Semantic durations remain in the requested 150–600ms range.

**Alternatives considered**:

- Inline component-level transitions: rejected because it invites duplicated timings and inconsistent reduced-motion behavior.
- A universal CSS animation rule: rejected because it cannot reliably orchestrate unmount exits or distinguish essential and optional motion.

## Decision: Use one-time viewport reveals with static content fallback

**Rationale**: Framer Motion viewport behavior supports an entry-once model using a modest threshold. Semantic text remains server-rendered and readable; reduced-motion and scripting-failure paths show it immediately. One-time reveals eliminate repeated distraction and observer churn.

**Alternatives considered**:

- Replaying every time a section is viewed: rejected because it distracts from reading and adds work during scrolling.
- Hiding content with initial global CSS: rejected because it risks inaccessible content if client behavior fails.

## Decision: Use presence transition for the controlled mobile navigation

**Rationale**: Presence orchestration provides a short exit animation when the currently conditional navigation unmounts. A controlled menu state can synchronize ARIA state, Escape handling, link close behavior, and focus restoration to the trigger.

**Alternatives considered**:

- CSS-only conditional rendering: rejected because unmounting prevents a reliable exit state.
- A modal focus trap: rejected because the existing header menu is disclosure navigation, not a dialog; it would add unnecessary behavior.

## Decision: Use scroll-linked timeline scale only for a decorative progress line

**Rationale**: A target-relative scroll value can scale one existing line from its top, while once-only entry state provides active-item styling. This communicates chronological progress without moving content or requiring a permanent scroll event handler.

**Alternatives considered**:

- Per-pixel scroll JavaScript listener: rejected for complexity and avoidable main-thread work.
- A constantly animated timeline: rejected because it adds decoration without a reading purpose.

## Decision: Use a small inline SVG infrastructure illustration

**Rationale**: A few nodes and connections communicate the portfolio theme without adding assets, a rendering engine, or semantic burden. It can become static under reduced motion and be entirely hidden from assistive technology.

**Alternatives considered**:

- Particle field: rejected as visually noisy and costly.
- Raster/video background: rejected for download size, visual stability, and static-site performance.

## Decision: Gate pointer effects and simplify mobile decoration

**Rationale**: Fine-pointer capability, viewport size, and reduced-motion preference identify when small optional tilt/spotlight treatment is appropriate. It is never required for content discovery. Touch/mobile behavior uses short reveal distances and static or reduced decorations.

**Alternatives considered**:

- Always-on pointer tracking: rejected because touch/coarse devices do not benefit and unnecessary listeners consume resources.
- Full removal of desktop feedback: rejected because restrained feedback improves affordance when it is capability-safe.

## Decision: Keep CSS theme transitions narrow and preserve theme bootstrap

**Rationale**: Existing pre-hydration theme selection prevents a visible incorrect-theme flash. A temporary root class can transition only visual color/surface/border/shadow properties, avoiding a slow site-wide transition that affects layout and interaction.

**Alternatives considered**:

- Universal transition on every element: rejected for perceived slowness and accidental animation of unrelated properties.
- No theme transition: acceptable fallback, but a short controlled transition supports the requested polish without undermining fast rendering.
