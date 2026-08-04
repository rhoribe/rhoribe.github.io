# Quickstart Validation: Ricardo Horibe SRE Portfolio

## Prerequisites

- Current Node LTS and npm.
- Verified local content or intentional pending/omitted states per [data-model.md](./data-model.md).
- Browser-capable environment for end-to-end checks.

## Setup and Quality Gates

```text
npm ci
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

Expected: all commands pass and the build produces static output only.

## Manual Smoke Scenarios

1. At 320px, tablet, laptop, and large-desktop widths, every section/action is reachable without
   horizontal scrolling; the experience list is one mobile column.
2. Keyboard-only navigation activates skip link, navigation, menu, theme, contact, and back-to-top
   with visible focus.
3. Verify first-load and saved light/dark choices, including unavailable storage, have correct
   theme behavior and no visible wrong-theme flash.
4. Enable reduced motion and confirm complete usable content.
5. Verify public facts and destinations obey [ui-content-contract.md](./contracts/ui-content-contract.md).
6. Inspect metadata, canonical URL, Open Graph, sitemap, robots, and structured data.

## Deployment Validation

1. Set GitHub Pages source to GitHub Actions.
2. Configure `ricardo.horibe.com.br`, verify DNS, and enforce HTTPS when available.
3. Trigger workflow; checks must pass before artifact upload.
4. Visit custom domain and confirm assets, canonical URL, anchors, mobile menu, and theme smoke path.
