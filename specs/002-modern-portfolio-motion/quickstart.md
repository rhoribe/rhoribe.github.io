# Quickstart: Validate Modern Portfolio Motion

## Prerequisites

- Node.js version supported by the repository's existing Next.js release.
- Dependencies installed with `npm install`; implementation will add Framer Motion before validation.
- Playwright browser binaries installed before end-to-end tests.

## Required commands

Run from the repository root:

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

All commands must pass before publication. `npm run build` must produce the existing static export successfully with the GitHub Pages base-path configuration unchanged.

## End-to-end checks

1. Open the page at widths 320, 375, 768, 1024, and 1440 pixels. Confirm there is no horizontal overflow; all existing content and actions are present.
2. At desktop and mobile sizes, verify the hero text and action are usable immediately; its entrance is short and ordered but never blocks selection or reading.
3. Use keyboard only: activate the skip link, navigate header links, toggle theme, open the mobile menu, close it with Escape, and confirm focus returns to the menu trigger. Confirm focused cards/links have a visible equivalent to hover feedback.
4. Navigate via every existing header anchor and a direct section hash. Confirm the destination is correct, the header scrolled state is legible, and exactly the appropriate navigation link conveys current location.
5. Test light and dark theme on an initial visit and after a saved selection. Confirm no incorrect-theme flash and adequate contrast over backgrounds, cards, active links, and focus indicators.
6. Enable reduced motion. Confirm content is present immediately or uses minimal opacity only; no pointer spotlight, tilt, parallax, animated background/data flow, or animated timeline progression remains. The static SVG/timeline retains its non-essential visual structure.
7. On a touch/coarse-pointer emulator or device, confirm there is no hover-dependent action, tilt, or pointer tracking and project/contact actions remain visible and usable.
8. Scroll the experience section. Confirm the progress line is decorative, entries remain readable, and mobile retains a simple vertical layout.

## Contract and data checks

- Verify component and header behavior against [motion-ui-contract.md](contracts/motion-ui-contract.md).
- Verify presentation-state boundaries against [data-model.md](data-model.md).
- Compare all professional and project copy against the existing content modules; no unverified claim, technology, date, metric, or repository action may be added.

## Performance review

- Use browser performance tooling on a representative mobile profile and a desktop profile.
- Confirm no large layout shifts during initial render, no continuous large blur on mobile, and no more than the planned concurrent visual effects.
- Inspect listener cleanup by opening/closing mobile navigation and entering/leaving optional hero/section effects; ensure no pointer tracking is active on touch or reduced-motion contexts.
