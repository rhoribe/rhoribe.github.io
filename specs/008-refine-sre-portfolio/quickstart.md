# Quickstart Validation: Refine SRE Portfolio

## Prerequisites

- Node.js version supported by the repository's current Next.js release.
- Dependencies installed with `npm ci`.
- The project owner's approved Principle II constitution amendment recorded before testing the dark-only release condition.

## Validation commands

```sh
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

For interactive review, run `npm run dev`, open the local address shown by Next.js, and use a browser with device emulation and reduced-motion controls.

## End-to-end validation scenarios

### Dark-only header and navigation

1. At 375px, 768px, 1024px, and 1440px widths, load the page with no stored preference and with a previously stored `light` value.
2. Confirm the visual result is dark in every case and no theme control is present or reachable by keyboard.
3. Activate `Expertise` from the desktop and mobile header. Confirm the URL fragment is `#expertise`, the Core Expertise heading is not hidden under the sticky header, and focus/navigation remains usable.

### Experience timeline

1. At every target width, scroll through Professional Experience slowly, rapidly, and in reverse.
2. Confirm each card reveals once; the visual change is limited to opacity, 8–16px vertical settling, and restrained accent transitions.
3. Confirm the active marker and rail segment identify the same visible company group, and count exactly five markers with none inside company cards or accordion content.
4. Open all eight responsibility accordions, repeat the marker count and overflow check, and capture the established visual regression screenshot where applicable.
5. Enable reduced motion and repeat the section review. Every card must be immediately readable with no required movement.

### Icons, content, and responsive layout

1. Confirm every company card uses the same teal BriefcaseIcon and no company logo, initials, failed image, or company-brand component is rendered.
2. Inspect metadata and certification cards for alignment, visible text labels, and contrast against dark card surfaces. Test high-contrast display settings when available.
3. Confirm all required expertise categories and their exact skill lists render, including AI Engineering Tools.
4. At each target width, verify `document.documentElement.scrollWidth <= window.innerWidth` with all accordions open and ensure no clipped, detached, or overlapping cards, icons, markers, or rail segments.

Refer to [data-model.md](./data-model.md) for state and content invariants and [portfolio-ui-contract.md](./contracts/portfolio-ui-contract.md) for interface-level requirements.
