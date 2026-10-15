# Testing

## Required checks

```sh
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
```

The build creates the static site in `out/`. Preview it with `python3 -m http.server 3000 --directory out`.

## Browser regression checks

Install the configured browsers once:

```sh
npx playwright install chromium firefox
npm run test:e2e
```

Playwright builds and serves the static export automatically unless a server already occupies port 3000. Ensure any reused server serves the current build. The suite covers navigation, responsive overflow, experience disclosures, certifications, privacy, motion, and console errors.

For an intentional visual change, inspect the resulting screenshot differences before updating the affected baseline with `--update-snapshots`. Snapshot names include browser and operating system; never update all baselines merely to hide a failure.

## Manual layout review

Review widths of 320, 375, 768, 1024, 1440, and 1920px, plus 200% zoom. The supported theme is permanently dark; no theme switch or saved-theme state exists.

- Confirm no horizontal overflow and that hero actions wrap without collisions.
- Check the single-column hero and mobile menu below 1024px; the full navigation starts at 1024px.
- Check About and expertise at their 768px transition, and the separation between certifications and education.
- Follow section anchors and confirm headings remain below the sticky header.
- Use Tab, Enter, Space, and Escape to exercise navigation and disclosures; verify visible focus and the skip link.
- Enable reduced motion and verify content remains readable and controls work.
- Review Safari/Edge and run Lighthouse against the production export before release.

Automated checks do not replace visual inspection or a production accessibility/performance audit. Record actual run results in the change summary rather than keeping historical success claims in this guide.
