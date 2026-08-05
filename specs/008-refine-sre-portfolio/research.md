# Research: Refine SRE Portfolio

## Decision: Use a reusable Intersection Observer timeline reveal controller

**Rationale**: The browser reports changes only when an observed company row crosses the configured reading band, avoiding a continuous scroll listener, animation loop, or per-frame layout work. Use one observer for the company card/article elements with thresholds around 0, 0.15, 0.45, and 0.7 and a reading-band root margin such as `-15% 0px -40%`. Each row retains a local `revealed` state after its first qualifying intersection; a single active company identifier maps directly to the associated marker and rail segment. When multiple rows qualify, select the highest intersection ratio and break ties by viewport-center proximity then document order. The DOM remains complete before enhancement, so content is still readable if script execution or observation is unavailable.

**Alternatives considered**:

- Continuous scroll position calculations: rejected because they perform work on every scroll event and invite layout reads and unstable active-state updates.
- A single scale-based rail-progress effect: rejected because it does not identify the active company group or provide a card-by-card reveal contract.
- Animation-library viewport wrappers for each card: rejected for this feature because a native observer gives explicit one-time reveal and marker mapping with less feature coupling.

## Decision: Use a visible middle-viewport reading band and deterministic active selection

**Rationale**: Observe each company row with a root margin that favors the central reading band. When multiple rows intersect, select the entry nearest the band center; on exit, retain the last valid active group until another observed group qualifies. The active ID is applied only to a timeline row that owns the corresponding card, marker, and rail segment. This maintains exactly one marker per company group and avoids accordion or technology-chip influence.

**Alternatives considered**:

- First intersecting entry: rejected because adjacent cards can intersect together and create order-dependent active states.
- Marker state inside company cards: rejected because expanding role accordions could create duplicate or misleading timeline semantics.

## Decision: Use CSS-only transitions for the reveal visual and an immediate reduced-motion state

**Rationale**: The observer changes semantic classes or attributes only. CSS transitions opacity, transform from 8–16px vertical offset, and accent-related colors without changing dimensions. Under `prefers-reduced-motion`, cards begin fully visible, all active-state information remains available, smooth scrolling is disabled, and no animated transition is needed.

**Alternatives considered**:

- Transforming layout-affecting properties or animating height: rejected due to layout shift and accordion interaction risk.
- Removing all active differentiation under reduced motion: rejected because orientation remains useful; only movement is removed.

## Decision: Make the existing dark token set canonical and remove all theme-selection paths

**Rationale**: The current root token set is already the intended dark palette. Removing the light token override, pre-hydration theme script, header toggle, local-storage writes, and theme-focused tests yields one predictable accessible rendering state with no stale preference behavior.

**Alternatives considered**:

- Hide the toggle while retaining state and light CSS: rejected because stored preference or OS preference could still expose light rendering and leaves dead code.
- Force dark with a runtime script: rejected because it preserves unnecessary hydration and preference machinery.

## Decision: Use Lucide-based briefcase and metadata icons, with issuer fallbacks treated as accessible identity tiles

**Rationale**: Existing Lucide icons provide consistent stroke weight. A dedicated BriefcaseIcon fixes size, primary teal color, alignment, decorative/informative semantics, and its text-supported labeling strategy for every company card. Certification issuers retain approved marks only when clear on dark surfaces; otherwise use a high-contrast labeled tile whose text identifies the issuer, avoiding dark-on-dark logos and unclear monochrome renders.

**Alternatives considered**:

- Per-company official logos: rejected by the approved requirement and creates inconsistent visual contrast and asset behavior.
- Initial-only company fallbacks: rejected because company experience must use one generic briefcase treatment.
- Recoloring unknown issuer SVGs indiscriminately: rejected because it can distort approved marks or reduce recognition; a labeled fallback is safer.

## Decision: Model expertise as typed card objects rather than title/skills tuples

**Rationale**: Named fields make the expanded eight-card inventory explicit and allow deterministic icon selection, responsive rendering, and tests without title-parsing conditionals. It keeps content claims in the content module.

**Alternatives considered**:

- Continue parsing the title string for icons: rejected because the expanded categories make the conditional fragile and obscures the content contract.
