# Validation Guide: Enhance Portfolio Visuals

## Prerequisites

- Node/npm versions supported by the repository.
- Dependencies installed after the selected Simple Icons package is added.

```bash
npm install
npm install simple-icons
```

## Automated validation

```bash
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run build
npm run test:e2e
```

Expected results: all commands succeed; the build produces the static `out/` directory; E2E tests pass in configured browsers.

## Functional checks

1. Run `npm run dev` and review widths 320, 375, 768, 1024, and 1440 pixels. Confirm no horizontal scroll and readable icon/text spacing.
2. Inspect Home/About/Expertise/Experience/Credentials/Education/Projects/Contact navigation. Confirm visible labels, matching semantic icons, correct active state, keyboard focus, mobile menu Escape close, and focus restoration.
3. Check hero, About, expertise, timeline, certifications, education, projects, contact, and footer. Icons must map only to existing content; unsupported project/credential details remain absent.
4. Switch dark/light themes before and after reload. Confirm intentional icon contrast, no visible wrong-theme flash, and scoped—not global—transitions.
5. Emulate touch/coarse pointer. Confirm all card/action information is available without hover and pointer spotlight/tilt are absent.
6. Enable reduced motion. Confirm static/minimal motion, static hero/timeline decoration, complete content, and no focus or interaction delay.
7. Use a screen reader or accessibility tree inspection. Confirm decorative SVG/icons are excluded and icon-only controls have meaningful labels. See [visual-ui-contract.md](contracts/visual-ui-contract.md).
8. Inspect `out/` after build under the GitHub Pages base-path configuration and run the existing Pages workflow or its equivalent build gate. Confirm links/assets resolve with the configured repository path.
9. Compare build output before/after the enhancement. Confirm no full icon-library bundle, no unexpected large visual asset, and no material regression requiring lazy loading of optional decoration.

## Related artifacts

- Semantic entities and state: [data-model.md](data-model.md)
- Component and behavior contract: [visual-ui-contract.md](contracts/visual-ui-contract.md)
