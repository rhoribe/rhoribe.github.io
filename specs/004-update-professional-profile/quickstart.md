# Quickstart Validation: Update Professional Profile

## Prerequisites

- Node.js and dependencies installed (`npm ci`).
- Run commands from the repository root.

## Automated validation

1. Run `npm run format:check`, `npm run lint`, and `npm run typecheck`.
2. Run `npm run test` to validate content model, year-month formatting, certification invariants, rendering semantics, disclosure state, filter behavior, credential IDs, contact links, placeholder removal, and phone exclusion.
3. Run `npm run build` to confirm static export remains valid.
4. When browser binaries are available, run `npm run test:e2e` for the existing navigation, theme/motion, privacy, and responsive flows plus the new professional-content journeys.

## Required end-to-end review

1. Start the site with `npm run dev`, then open `/`.
2. Compare all profile copy, eight roles/five company groups, and 24 certification cards against [spec.md](./spec.md); confirm all current/expired/no-expiration statuses and supplied identifiers.
3. At 320px, 375px, 768px, 1024px, 1440px, and 1920px, verify no horizontal page overflow; certification names/IDs/badges wrap and experience remains a readable single column on mobile.
4. Using only a keyboard, reach all contact links, filter controls, and any disclosure buttons. Confirm selected filter state, expanded state, focus visibility, and a usable empty-filter result.
5. Repeat the review in light and dark themes and with reduced motion enabled. Confirm status is comprehensible without color, decorative icons do not add redundant speech, and no essential data needs hover.
6. Inspect the page source/rendered metadata: title, description, Open Graph, canonical URL, and Person structured data reflect the approved role/skills/sameAs links; phone data is absent.
7. Activate email, GitHub, and LinkedIn actions. Confirm email is `mailto:` and external links have safe behavior. Confirm no “View credential” exists without an explicit approved URL.

## Expected result

The existing visual/motion system is retained while approved professional content is complete, accurate, accessible, responsive, privacy-safe, and exported successfully as a static GitHub Pages site. See [data-model.md](./data-model.md) for source invariants and [UI contract](./contracts/professional-content-ui-contract.md) for interaction requirements.
