# Quickstart: Validate the Visual Refinement

## Prerequisites

- Node.js and project dependencies installed.
- Local brand-asset provenance recorded before any non-fallback asset is rendered.
- The existing portfolio content remains available.

## Baseline validation

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

Start the existing local preview workflow, then inspect the homepage at 320, 375, 768, 1024, 1440, and 1920 pixels in both themes.

Verify the following contract outcomes:

1. Every long-form paragraph respects the readable measure, and sections use a compact consistent rhythm.
2. Cards are content-sized; grids, badges, and contact actions reflow without page-level horizontal scrolling.
3. Company and issuer marks are local, proportionate, and clear in both themes. Any unavailable official mark shows readable initials instead.
4. Each experience role follows the required scan order. Keyboard activation opens and closes responsibilities with an understandable state.
5. Certification items show only issuer identity and certification name.
6. Contact actions have labels, visible focus, usable target size, expected destinations, and safe external behavior.
7. Reduced-motion preference removes non-essential movement while retaining all content and controls.

## Asset provenance review

For each rendered brand asset, compare its manifest entry against [data-model.md](./data-model.md): confirm local path, official source URL, review date, theme treatment, alternative text, and fallback initials. Confirm no remote asset URL is present in rendered output.

## Contract references

- [Visual UI contract](./contracts/visual-ui-contract.md)
- [Presentation data model](./data-model.md)
- [Feature requirements](./spec.md)
