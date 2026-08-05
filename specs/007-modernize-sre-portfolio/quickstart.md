# Quickstart Validation: Modernize SRE Portfolio

## Commands

Run from the repository root:

```sh
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

## Required validation

1. Review dark and light themes at 375px, 768px, 1024px, and 1440px: no overflow, clipping, overlap, detached icon, or marker drift.
2. Open all eight responsibility controls at every target width: exactly five company markers remain, no marker is inside card/disclosure/list/badge content, and all panels are visible.
3. Use Tab, Enter, and Space: focus stays visible, labels/states change correctly, `aria-expanded` matches the panel state, and `aria-controls` resolves correctly.
4. Emulate reduced motion and confirm a readable immediate state change.
5. Confirm each approved local brand record maps to an on-disk SVG and every fallback has initials/text identity; no browser image failure or broken placeholder occurs.
6. Confirm pending project text and its navigation target are absent unless a verified project record exists.
7. Confirm only valid Hero CTAs render, contact external links use safe behavior, and footer technology groups remain intact.

## Manual review

Audit both themes for contrast, landmarks, heading order, accessible names, and disclosure announcements. Run Lighthouse against the production build and review performance, accessibility, best practices, SEO, and layout shift. Approve screenshot baseline changes by visual review.
