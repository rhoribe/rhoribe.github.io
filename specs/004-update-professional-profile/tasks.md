# Tasks: Update Professional Profile

**Input**: Design documents in `/specs/004-update-professional-profile/`  
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/

## Phase 1: Foundation

- [X] T001 Verify TypeScript ignore/configuration coverage in `.gitignore`, `eslint.config.mjs`, and `.prettierignore`.
- [X] T002 Create typed professional-content models and date/status validation in `types/experience.ts`, `types/certification.ts`, and `lib/dates.ts`.
- [X] T003 [P] Verify existing semantic technology/issuer icon mappings provide required contextual and certificate fallbacks in `types/icon.ts`, `config/icons.ts`, and `config/technologies.ts`.
- [X] T004 [P] Add invariant and formatter tests in `tests/unit/professional-content.test.ts`.

## Phase 2: User Story 1 — Assess current profile (P1)

**Goal**: Visitors can understand Ricardo’s approved positioning, About content, metadata, and contact options.

- [X] T005 [P] [US1] Replace profile/About/expertise/contact source data in `content/profile.ts`, `content/expertise.ts`, and `content/contact.ts`.
- [X] T006 [P] [US1] Add contact and metadata/Person-schema assertions in `tests/unit/professional-content.test.ts` and `tests/e2e/professional-content.spec.ts`.
- [X] T007 [US1] Render approved hero, semantic About content, contact links, metadata, and Person structured data in `app/page.tsx`, `app/layout.tsx`, and `lib/metadata.ts`.

## Phase 3: User Story 2 — Review career history (P1)

**Goal**: Visitors can read every approved experience role grouped by company.

- [X] T008 [P] [US2] Replace flat experience data with five company groups and eight complete roles in `content/experience.ts`.
- [X] T009 [P] [US2] Add grouped-timeline and detail-disclosure behavior checks in `tests/e2e/professional-content.spec.ts`.
- [X] T010 [US2] Implement grouped timeline cards, date metadata, responsibility lists, technology badges, and optional native details in `components/profile/experience-timeline.tsx` and `styles/globals.css`.
- [X] T011 [US2] Integrate the experience timeline into `app/page.tsx` while retaining `ScrollProgress`.

## Phase 4: User Story 3 — Browse certifications (P1)

**Goal**: Visitors can browse all approved certifications and distinguish statuses accessibly.

- [X] T012 [P] [US3] Replace flat credential strings with 24 typed certification records in `content/certifications.ts`; retain education in `content/credentials.ts`.
- [X] T013 [P] [US3] Add certification filter/status/ID interaction coverage in `tests/e2e/professional-content.spec.ts`.
- [X] T014 [US3] Implement responsive featured-first cards, native radio filters, status labels, issuer fallbacks, and optional credential details in `components/profile/certification-section.tsx` and `styles/globals.css`.
- [X] T015 [US3] Integrate the certification section in `app/page.tsx`.

## Phase 5: Polish and validation

- [X] T016 Remove approved obsolete placeholders while retaining pending project placeholders in `app/page.tsx`.
- [ ] T017 Run formatting, lint, type checks, unit/component/E2E accessibility/responsive coverage, production build/static export, and GitHub Pages path verification; record results in `specs/004-update-professional-profile/quickstart.md`.

## Dependencies

`T001–T004` → `T005–T007`, `T008–T011`, `T012–T015` → `T016–T017`. The three P1 stories can be developed independently after foundation, but page integration is sequential because each changes `app/page.tsx`.

## Implementation Strategy

Complete the shared typed model first; render approved profile/contact; then group the existing timeline; then add certificates and filtering. Preserve the existing project, motion components, static export, and visual language throughout.
