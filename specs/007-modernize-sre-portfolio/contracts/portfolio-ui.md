# Portfolio UI Contract

## Timeline

- `ExperienceTimeline` renders one ordered row per verified company group.
- Each row has a rail/marker element and one sibling `CompanyExperienceCard`.
- A stable `data-timeline-marker` hook permits validation. Exactly one marker exists per company group; none are descendants of cards, panels, responsibility lists, or technology lists.

## Accordion

- `ExperienceAccordion` receives a unique role-derived ID, open/closed labels, and panel content.
- It renders one focusable button and one labelled controlled region.
- `aria-expanded` reflects state; `aria-controls` references the panel ID.
- Click, Enter, and Space toggle only the invoked panel; all panels may remain open.
- The chevron is decorative. Reduced motion makes the semantic transition immediate.

## Logo and navigation

- `Logo` accepts a registry Brand ID and context, reserves its frame, and supplies text identity through visible adjacent text or an accessible name for image-only uses.
- Approved records render only local SVGs; fallbacks render initials without an image request.
- Decorative navigation/footer icons are hidden from assistive technology; parent links/buttons have discernible names.
- Projects navigation uses the same publishable-project result as section rendering.

## Footer

- The technology statement is one text flow with nonbreaking icon-and-name groups for Next.js and TypeScript.
