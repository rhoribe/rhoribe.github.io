# Implementation Plan: Update Professional Profile

**Branch**: `004-update-professional-profile` | **Date**: 2026-08-04 | **Spec**: [spec.md](./spec.md)

**Input**: Approved professional-content enhancement and attached technical planning direction.

**Note**: This template is filled in by the `/speckit-plan` command; its definition describes the execution workflow.

## Summary

Replace the portfolio’s simplified, placeholder professional content with approved typed profile, About, grouped experience, certification, and contact data. Retain the single-page Next.js static-export architecture, established semantic icons, timeline/motion components, responsive grid, themes, and GitHub Pages deployment. Add focused client-side islands only for certificate filtering and optional experience disclosure; keep the content itself statically renderable.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript 5.7, React 19, Next.js 15.1

**Primary Dependencies**: Next.js static export, Tailwind CSS 3, Framer Motion 12, lucide-react, simple-icons

**Storage**: Typed local TypeScript content modules; no persistence or backend

**Testing**: Vitest + Testing Library; Playwright Chromium/Firefox end-to-end checks; lint, Prettier, strict TypeScript, production static build

**Target Platform**: Modern browsers, static GitHub Pages site; support from 320px through desktop

**Project Type**: Static single-page web portfolio

**Performance Goals**: Preserve existing lean static delivery and visual stability; no new icon library or backend; content usable before interactive controls hydrate

**Constraints**: Preserve design/motion/theme system; no unsupported professional claims, phone number, secret/private credentials, generated credential URL, contact backend, or employer endorsement; external links use safe attributes; respect reduced motion

**Scale/Scope**: One route; 8 experience roles in 5 company groups; 24 certifications; three approved contact links; existing education and unrelated pending project content retained

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Responsive design covers 320px through desktop without horizontal overflow.
- [x] Themes, accessibility, performance, TypeScript, content evidence, privacy, deployment,
      SEO, and applicable automated validation comply with the constitution.
- [x] Resume evidence, static-delivery limits, and GitHub Pages/GitHub Actions impacts are recorded.

**Gate assessment (pre-design)**: Pass. The feature uses the user-provided approved inventory as content evidence, changes only local content/presentation, and preserves static export. No constitution exceptions are requested.

**Gate assessment (post-design)**: Pass. The design isolates interactive filters/disclosure from static core content, defines semantic/keyboard behavior and reduced-motion constraints, uses existing dependencies, and requires build/test validation.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── layout.tsx                 # Metadata and Person structured data
└── page.tsx                   # Composition of existing and feature sections
components/
├── icons/                     # Existing semantic/brand icon renderers
├── motion/                    # Existing motion and reduced-motion primitives
├── profile/                   # New focused About, experience, certification, contact components
└── ui/                        # Existing shared section heading
content/
├── profile.ts                 # Profile and About content
├── expertise.ts               # Approved expertise groups
├── experience.ts              # Grouped company/role content
├── certifications.ts          # Full certification content (replaces flat strings)
├── contact.ts                 # Approved contact links
└── credentials.ts             # Retained education content
config/
├── certification-categories.ts
├── issuer-icons.ts
├── technologies.ts            # Extended only for content-backed technology IDs
└── icons.ts                   # Existing icon/brand definitions, minimally extended
types/
├── icon.ts
├── experience.ts
└── certification.ts
lib/
├── content.ts                 # Existing generic publish guard retained
├── dates.ts                   # Year-month parsing/formatting and content validation helpers
└── metadata.ts
tests/
├── unit/
├── components/
└── e2e/
```

**Structure Decision**: Keep the existing one-route repository and content-first architecture. Add only feature-local presentational components and typed data/config modules; do not introduce an API, database, routing change, or new UI library.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | — | — |
