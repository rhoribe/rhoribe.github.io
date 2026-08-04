# Implementation Plan: Ricardo Horibe SRE Portfolio

**Branch**: `001-sre-portfolio` | **Date**: 2026-08-03 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-sre-portfolio/spec.md`

## Summary

Deliver a single-page English-first professional portfolio for Ricardo Horibe. The statically
exported Next.js site presents verified SRE/DevOps experience, responsive accessible sections,
dual themes, local typed content, and secure external actions. It deploys to GitHub Pages at
`https://ricardo.horibe.com.br` through GitHub Actions, with no backend or runtime API dependency.

## Technical Context

**Language/Version**: TypeScript with strict type checking; current stable Next.js-compatible Node LTS

**Primary Dependencies**: Next.js App Router, React, Tailwind CSS, Framer Motion for meaningful
non-essential motion only, and a lightweight icon library

**Storage**: Local typed content files; browser local storage only for explicit theme preference

**Testing**: Vitest, React Testing Library, and Playwright smoke/accessibility checks where practical

**Target Platform**: Modern browsers, static GitHub Pages hosting, 320px through large desktops

**Project Type**: Static web application

**Performance Goals**: Fast mobile/desktop loads, low layout shift, strong Lighthouse results

**Constraints**: Static export, no backend, WCAG 2.1 AA, no phone number or unsupported claims,
custom-domain canonical URL, and user-site/project-site base-path compatibility

**Scale/Scope**: One public portfolio page with local content records and future-ready localisation

## Constitution Check

*GATE: Passed before Phase 0 research. Re-checked after Phase 1 design.*

- [x] Responsive design covers 320px through desktop without horizontal overflow.
- [x] Themes, accessibility, performance, TypeScript, content evidence, privacy, deployment,
      SEO, and applicable automated validation comply with the constitution.
- [x] Resume evidence, static-delivery limits, and GitHub Pages/GitHub Actions impacts are recorded.

**Post-design result**: Passed. The plan uses local typed content, static export, accessible
component boundaries, dual-theme tokens, and mandatory release gates. Exact dates, role
descriptions, email, resume file, and project details remain unpublishable until verified.

## Design Decisions

### Component Boundaries

- `SiteHeader` composes `DesktopNavigation`, `MobileNavigation`, and `ThemeToggle`; it owns
  only responsive-navigation state and keyboard/menu semantics.
- Data-driven section components render `HeroSection`, `AboutSection`, `ExpertiseSection`,
  `ExperienceTimeline`/`ExperienceCard`, credentials, projects, and contact.
- Shared UI is limited to `SectionHeading`, `SocialLinks`, `ResumeButton`, and `ProjectCard`.
- `SiteFooter` renders source, technology summary, copyright, and back-to-top action.
- Page composition reads typed data; presentational components do not embed career facts or URLs.

### Theme Architecture

Use CSS-variable semantic tokens mapped into Tailwind. A minimal document-head bootstrap resolves
saved explicit choice, then system preference, then dark fallback before first paint. `ThemeToggle`
is a labelled button, persists explicit choices, and every component consumes theme tokens.

### Responsive, Accessibility, and SEO Strategy

Design mobile-first from 320px; enhance at tablet, laptop, and large-desktop breakpoints. Use
`clamp()` selectively, touch-friendly controls, and grids that progressively enhance; mobile
experience is always one column. Motion is non-essential and reduces under
`prefers-reduced-motion`.

Use semantic landmarks/headings, skip link, visible focus, descriptive links, alternatives, and
non-color-only states. Central site metadata generates title, description, canonical URL, Open
Graph fields, structured professional data, sitemap, and robots directives.

### GitHub Pages Deployment Strategy

Configure static export. Select no base path for the `rhoribe.github.io` user-site repository and
a repository-name base path for project repositories; asset paths must follow the same decision.
GitHub Actions runs installation, format, lint, type, test, and production-build checks before
uploading and deploying the Pages artifact. Pages settings must use GitHub Actions, associate
`ricardo.horibe.com.br`, complete DNS verification, and enforce HTTPS.

### Error, Performance, and Risk Strategy

Theme fallbacks remain usable if storage/system preference is unavailable. Pending content is
omitted or visibly labelled, never fabricated. Missing optional imagery or demos preserve text or
remove only the dependent action. Prefer static/server markup and local data; limit client
components to theme/menu controls, reserve image dimensions, and keep dependencies minimal.

| Risk | Mitigation |
|------|------------|
| Resume facts or links unavailable | Gate public rendering on verified local content. |
| Incorrect Pages path breaks assets | Unit-test path helper and deployed output. |
| Theme flash or contrast regression | Bootstrap before paint; test both token sets. |
| Mobile overflow or inaccessible menu | Test 320px/desktop and keyboard paths. |
| Custom-domain DNS/HTTPS incomplete | Document settings and verify after deployment. |

## Project Structure

### Documentation (this feature)

```text
specs/001-sre-portfolio/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   └── ui-content-contract.md
└── tasks.md
```

### Source Code (repository root)

```text
app/
├── layout.tsx
├── page.tsx
├── sitemap.ts
└── robots.ts
components/
├── layout/
├── sections/
└── ui/
content/
├── profile.ts
├── navigation.ts
├── experience.ts
├── expertise.ts
├── credentials.ts
├── social.ts
└── projects.ts
lib/
├── content.ts
├── metadata.ts
└── site-config.ts
styles/globals.css
public/{images,resume}/
tests/{unit,components,e2e}/
.github/workflows/deploy-pages.yml
```

**Structure Decision**: A single static App Router application separates content, presentational
components, configuration, and tests. It has no API routes, server actions, database, or backend.

## Content Data Model

See [data-model.md](./data-model.md). Content is local and typed. Every professional/external
claim has a verification state; only verified factual content renders publicly. Projects use
dedicated records for title, description, technologies, repository URL, optional demo URL, and
validation status.

## Testing and Validation Strategy

- Unit tests: content guards, URL/base-path helpers, theme resolution, metadata helpers.
- Component tests: navigation/menu semantics, skip link, theme toggle, timeline, pending content,
  accessible names, and focus paths.
- Playwright: desktop/320px paths, keyboard navigation, theme persistence, reduced motion, no
  horizontal overflow, and practical accessibility scans.
- CI: formatting, linting, strict types, tests, e2e where practical, and production build.

## Development Milestones

1. Foundation: strict TypeScript, Tailwind, static export, lint/format/test tooling.
2. Content and shell: types, verified data rules, metadata, layout, theme bootstrap, navigation.
3. Portfolio sections: data-driven sections and responsive layouts.
4. Validation: automated checks, accessibility/performance/SEO audit, verified source assets.
5. Release: Pages workflow, repository-settings guide, deployed smoke verification.

## Validation Commands

```text
npm ci
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
```

Run end-to-end checks where a browser environment is available. CI must run required checks before
artifact upload and deployment.

## Complexity Tracking

> No constitution violations require justification.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
