# Research: Enhance Portfolio Visuals

## Decisions

### Semantic icon registry

**Decision**: Use a centralized typed mapping for general icon semantics and a separate approved technology registry; content records store only semantic identifiers.

**Rationale**: It keeps icons visually consistent, enables a single fallback policy, supports future icon substitutions, and avoids importing UI components into portfolio content.

**Alternatives considered**: Direct icon imports in every page/content file were rejected because they duplicate mapping decisions and make content presentation-coupled. A single generic symbol for all technologies was rejected because it weakens scannability.

### General versus official icon treatment

**Decision**: Use the existing Lucide React dependency for all generic UI/category/action icons and add selected Simple Icons marks only for approved technology/platform references.

**Rationale**: Generic icons retain one stroke style; recognizable brand marks remain available when appropriate. Selected imports and generic fallbacks control bundle size and licensing risk.

**Alternatives considered**: Mixing unrelated generic icon sets was rejected for inconsistent visual weight. A logo for every technology was rejected because not every use is permitted or necessary.

### Motion boundary

**Decision**: Retain Framer Motion only for coordinated hero/viewport/menu/timeline movement; use existing CSS/Tailwind styles for ordinary hover, focus, pressed, and theme surface transitions.

**Rationale**: The project already has shared motion tokens and primitives. Extending them avoids repeated variants while CSS keeps simple feedback cheap and predictable.

**Alternatives considered**: Per-section bespoke motion was rejected for duplicated timing and inconsistent reduced-motion behavior. Additional animation packages were rejected by scope and performance constraints.

### Progressive enhancement and reduced motion

**Decision**: Render semantic content in normal document flow and treat visual reveals, SVG flow, spotlight, tilt, and progress animation as optional enhancements; use static or immediate outcomes with reduced motion.

**Rationale**: This protects no-script/hydration failure, readability, and accessibility while still allowing a polished experience on capable devices.

**Alternatives considered**: CSS-hidden initial content and universal transitions were rejected because either can hide content or cause unwanted visual motion.

### Header and mobile navigation

**Decision**: Keep navigation as a disclosure-style menu with controlled open state, `aria-expanded`, Escape close, focus restoration, and scoped scroll lock; use `aria-current` plus a visual indicator for the active section.

**Rationale**: This preserves familiar navigation behavior, keyboard access, and an active state that is not color-only.

**Alternatives considered**: A modal focus trap was rejected because the mobile menu is still document navigation, not a blocking dialog. Icon-only mobile navigation was rejected because visible text is required.

### Performance controls

**Decision**: Use per-symbol imports, lightweight inline SVG, transform/opacity animation, one-time observers, and capability-gated pointer listeners; measure build output before/after.

**Rationale**: These controls meet the visual goal without affecting initial readability or static export.

**Alternatives considered**: Icon sprites, WebGL/canvas particles, video, continuous blur animation, and unconditional pointer tracking were rejected for cost, battery use, or static-site complexity.
