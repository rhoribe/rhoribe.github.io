# Ricardo Horibe Portfolio

Professional portfolio built with Next.js App Router, React, TypeScript, and Tailwind CSS. The site exports static HTML for GitHub Pages and presents experience, expertise, certifications, education, and contact information in a responsive dark layout.

## Local development

Use Node.js 20 or newer and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```sh
npm run build
python3 -m http.server 3000 --directory out
```

`npm run start` is not the preview command for the configured static export.

## Project structure

- `app/`: page composition, metadata, and root layout.
- `content/`: verified profile, experience, expertise, credentials, and contact data.
- `components/`: navigation, profile sections, reusable UI, icons, and motion.
- `styles/globals.css`: design tokens, layout, responsive behavior, and interaction states.
- `public/`: published assets and issuer logos.
- `tests/`: unit, component, and browser regression tests.

## Design and content

See [DESIGN.md](DESIGN.md) for the visual system, responsive breakpoints, and accessibility conventions. The layout groups hero actions, gives supporting career context its own column, and separates certifications from education. The theme is permanently dark.

Only add professional content supported by Ricardo's LinkedIn-exported resume. Do not commit the raw resume or a phone number. Keep unverified projects and contact destinations omitted or pending. See [content sources](docs/content-sources.md).

## Validation

```sh
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

Browser tests require Playwright Chromium and Firefox binaries. See [testing](docs/testing.md) for setup, visual baseline handling, and manual checks.

## Deployment

GitHub Actions publishes `out/`. Configure GitHub Pages to use GitHub Actions, set `ricardo.horibe.com.br` as the custom domain, verify DNS, and enable HTTPS. See [deployment](docs/github-pages.md).
