# Quickstart: Validate the Premium Visual Refinement

## Prerequisites

- Node.js and project dependencies are installed.
- Every rendered non-fallback brand asset has a recorded official source and review date.
- Existing verified portfolio content remains available.

## Automated validation

From the repository root, run:

```sh
npm run format:check
npm run lint
npm run typecheck
npm test
npm run test:e2e
npm run build
```

Expected result: every command succeeds and the production output remains suitable for static GitHub Pages deployment.

## Manual visual validation

Use the existing local preview workflow and inspect the homepage at 320, 375, 768, 1024, 1440, and 1920 pixels in both themes.

Verify outcomes defined in the [visual UI contract](./contracts/visual-ui-contract.md):

1. Typography remains distinct and reading copy uses the shared maximum measure where width permits.
2. Sections, cards, grids, badges, and contact actions reflow without page-level horizontal scrolling or excessive empty space.
3. Company and issuer marks are local, proportionate, and legible in both themes; unavailable official marks display readable initials.
4. Experience roles follow the scan order and their responsibilities expand/collapse by keyboard with a comprehensible state.
5. Certification entries show only issuer identity and certification name.
6. Contact actions have labels, visible focus, usable target size, expected destinations, and safe external behavior.
7. Reduced-motion preference removes non-essential movement while retaining all content and controls.

## Asset provenance review

For each rendered brand asset, compare its manifest entry against [data-model.md](./data-model.md). Confirm local path, official source URL, review date, theme treatment, and initials fallback. Confirm the rendered output has no remote brand-asset URL.

## References

- [Presentation data model](./data-model.md)
- [Visual UI contract](./contracts/visual-ui-contract.md)
- [Feature requirements](./spec.md)
