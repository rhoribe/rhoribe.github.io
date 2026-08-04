# Visual UI Contract

## Icon primitives

| Component | Inputs | Contract |
|---|---|---|
| `AppIcon` | `name`, optional `size`, `className`, `decorative`, `label`, `title` | Resolves one generic semantic icon. Decorative defaults to hidden from assistive technology; a non-decorative use needs meaningful text. |
| `BrandIcon` | `brand`, optional shared icon inputs, `brandColorMode` | Resolves an approved official mark without allowing arbitrary brand strings. Falls back through the technology resolver when no mark is allowed. |
| `TechnologyIcon` | `technology`, optional shared icon inputs | Resolves permitted mark or configured generic fallback. It never silently adds a technology association. |
| `IconBadge` | `icon` or `technology`, `size`, `children`, `decorative` | Standard non-focusable icon container for category/metadata context; children remain the textual source of meaning. |
| `IconButton` | native button/anchor props plus required `label`, icon child | Provides native semantics, at least one accessible name, a visible focus state, and practical touch target size. Tooltip text is supplementary. |

## Motion and interaction primitives

| Component | Inputs | Contract |
|---|---|---|
| `MotionProvider` | `children` | Applies user motion preference and shared transition defaults once. |
| `Reveal` / `AnimatedSection` / `AnimatedText` | children, optional class/id/delay | One-time transform/opacity enhancement with immediately available reduced/no-script content. |
| `StaggerContainer` | children, optional class | Coordinates bounded children with shared staggering; does not animate unbounded lists continuously. |
| `InteractiveCard` | children, class, optional tilt/variant | Keeps semantic article/content order; gates pointer tilt; exposes equivalent focus/touch CSS state. |
| `ScrollProgress` | ordered-list children | Renders decorative line/progress and active entry styling without changing list order or hiding content. |
| `MotionSafe` | children, fallback, capability requirement | Selects decoration only on compatible non-reduced contexts. |

## Header/menu behavior

- Primary links retain visible labels and href anchors; active link uses `aria-current="location"` plus a visual indicator.
- Menu toggle has `aria-expanded`, `aria-controls`, and an accessible label.
- Closing through Escape, a mobile link, or toggle updates state; Escape/toggle restores trigger focus; scroll lock is always removed after close/unmount.
- Navigation and hero decorations are not focusable or announced unless they convey unique information.

## Styling tokens

- Icon sizes: compact (metadata), regular (navigation/card), action (buttons), and hero; each is responsive and tied to nearby text.
- Colors: default `currentColor`; muted, emphasis, focus, and permitted-brand modes derive from dual-theme tokens.
- Motion: all durations/easing/distance/stagger reference `lib/motion.ts`; CSS transitions are limited to color, background, border, shadow, opacity, and transform where appropriate.
