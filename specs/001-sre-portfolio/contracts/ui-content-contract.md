# UI and Content Contract: Ricardo Horibe SRE Portfolio

## Public Page Contract

The page provides real semantic targets for `#about`, `#expertise`, `#experience`,
`#certifications`, `#education`, `#projects`, and `#contact`. Navigation and skip link
target landmarks. Every interactive control has an accessible name and keyboard operation.

## Content Contract

- Section components receive typed local data and do not embed career claims or destinations.
- `pending` content cannot render a factual date, description, metric, URL, or repository detail;
  it may display a clear pending-validation state.
- Missing optional fields remove only their dependent UI and retain a valid readable page.
- External links apply appropriate navigation security protections.

## Theme and Responsive Contract

- Root theme resolves before first paint: saved explicit choice, system preference, then dark.
- Theme control exposes state, is keyboard operable, and components use semantic tokens.
- 320px is the minimum viewport; no horizontal overflow is allowed.
- Experience is one column on mobile; grids enhance at larger widths.
- Mobile navigation exposes open/closed state, focus behavior, and a close path.

## Deployment Contract

- Static output works for user-site root and project-repository base paths.
- Canonical production URL is `https://ricardo.horibe.com.br`.
- Deployment occurs only after quality commands and production build pass.
