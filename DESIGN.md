# Visual design

The portfolio uses a permanent dark theme, teal accents, and a restrained technical visual language. Professional content remains in English and comes from the verified content modules. The layout prioritizes identity, professional evidence, and contact.

## Foundations

`styles/globals.css` owns the design tokens: background `--bg`, surfaces `--surface` and `--surface-raised`, foreground `--text`, secondary copy `--text-muted`, borders `--line`, and actions `--accent`. Use `--focus` for keyboard outlines. Use the existing system sans-serif stack; no remote font request is needed.

Spacing follows `--s1` through `--s7` (8, 12, 16, 24, 36, 56, and 88px at the default root size). The content container is capped at 76rem; body copy is capped at 72ch. Display type scales fluidly to 6rem. Borders establish grouping without decorative card shadows.

## Composition

- The hero prioritizes the name, specialty, introduction, experience statement, and two grouped actions. The architecture illustration is supporting, explicitly illustrative content.
- About pairs the introduction with leadership and career context from 48rem. Expertise uses two columns at that breakpoint, with open rows and dividers rather than elevated cards.
- Professional experience keeps its chronological rail and accessible disclosures. Long role descriptions retain a readable line length.
- Certifications remain a compact gallery. Education has its own spacing and separator.
- Contact is a prominent final section containing the verified contact destinations.

## Responsive behavior

Below 64rem, the header uses its mobile menu and the hero becomes a single column; the decorative diagram is omitted. At 64rem, the full navigation and two-column hero appear. Expertise and About reflow into one column below 48rem. Preserve DOM order when changing visual layouts.

## Interaction and accessibility

Keep the skip link, visible keyboard focus, semantic headings, labelled contact actions, and disclosure state. Sticky-header destinations use `scroll-margin-top`. Disclosure controls have a minimum 44px height; hero actions wrap with explicit gaps. Reduced-motion preferences disable or simplify animation. Test touch, keyboard, narrow screens, and enlarged text before release.

## Maintenance

Change shared tokens before introducing component-specific values. Keep factual copy in `content/`. Do not add unverified metrics, project claims, contact destinations, or live-status indicators. See [testing](docs/testing.md) for release checks.
