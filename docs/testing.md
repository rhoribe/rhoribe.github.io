# Testing

Run npm run format:check, npm run lint, npm run typecheck, npm run test, and npm run build. Run npm run test:e2e when browser binaries are installed. Manually review Chromium, Firefox, and a mobile browser at 320px, 375px, 768px, 1024px, 1440px, and 1920px in light/dark themes with keyboard and reduced-motion preferences. Verify an initial light system theme, a dark system theme, and a manually saved theme; use touch emulation; check no horizontal overflow or content hidden before hydration; and review the production build with Lighthouse for CLS and initial JavaScript impact.

# Visual enhancement validation

- Production build completed successfully after the semantic icon layer was added.
- The home route first-load JavaScript changed from 156 kB to 170 kB (route size: 53.4 kB to 67.4 kB). The increase is attributable to selected official brand SVG paths; no icon sprite or additional animation runtime was added.
- Verified automated checks: formatting, ESLint, strict TypeScript, Vitest, static export, and Playwright Chromium/Firefox responsive, privacy, hero, and mobile-menu journeys.
- Remaining release checks are manual Lighthouse and Safari/Edge visual review against the deployed GitHub Pages site.
