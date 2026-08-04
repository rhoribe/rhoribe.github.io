---

description: "Dependency-ordered implementation tasks for the engineering portfolio refinement"
---

# Tasks: Refine Engineering Portfolio

**Input**: Design documents from `/specs/005-refine-engineering-portfolio/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), and [visual-ui-contract.md](./contracts/visual-ui-contract.md)

**Tests**: Required. The constitution requires responsive, theme, navigation, accessibility, content-integrity, performance, and production-build validation.

**Task metadata**: Each task records its dependencies, acceptance criteria, files, tests, and parallel status. `[P]` means it may run concurrently once stated dependencies are complete.

## Phase 1: Setup and brand-asset foundation

**Purpose**: Establish local asset governance before any brand mark can be rendered.

- [X] T001 Create the local SVG asset folders and typed brand-asset manifest in `public/assets/brands/companies/`, `public/assets/brands/issuers/`, `public/assets/icons/`, and `config/brand-assets.ts`.
  - **Dependencies**: None.
  - **Acceptance criteria**: The manifest represents every existing company and certification issuer, distinguishes approved/fallback/pending-review status, and has fields for local path, official source URL, review date, theme treatment, alternative text, and initials.
  - **Files**: `public/assets/brands/companies/.gitkeep`, `public/assets/brands/issuers/.gitkeep`, `public/assets/icons/.gitkeep`, `config/brand-assets.ts`, `types/brand-asset.ts`.
  - **Tests**: Add manifest-schema and local-path-only tests in `tests/unit/brand-assets.test.ts`.
  - **Parallel execution**: No; this is the prerequisite for all asset and logo tasks.

- [X] T002 [P] Collect, optimize, store, and register approved official company SVG assets or initials fallbacks in `public/assets/brands/companies/` and `config/brand-assets.ts`.
  - **Dependencies**: T001.
  - **Acceptance criteria**: Zup Innovation, PHI Pagamentos, Digipix, iTFLEX Tecnologia, and GSP Loteamentos each resolve to a reviewed local official SVG or a documented accessible initials fallback; no remote URL is rendered.
  - **Files**: `public/assets/brands/companies/*.svg`, `config/brand-assets.ts`, `docs/content-sources.md`.
  - **Tests**: Extend `tests/unit/brand-assets.test.ts` for all five company mappings and fallback states.
  - **Parallel execution**: Yes, with T003 after T001; they modify separate asset folders and manifest entries must be coordinated.

- [X] T003 [P] Collect, optimize, store, and register approved official issuer SVG assets or initials fallbacks in `public/assets/brands/issuers/` and `config/brand-assets.ts`.
  - **Dependencies**: T001.
  - **Acceptance criteria**: Every issuer in `content/certifications.ts` resolves to a reviewed local official SVG or documented initials fallback; brand terms and source provenance are recorded; no logo is hotlinked.
  - **Files**: `public/assets/brands/issuers/*.svg`, `config/brand-assets.ts`, `docs/content-sources.md`.
  - **Tests**: Extend `tests/unit/brand-assets.test.ts` to cover all distinct certification issuers, including fallback behavior.
  - **Parallel execution**: Yes, with T002 after T001.

- [X] T004 Define semantic color, surface, border, focus, shadow, and theme-aware logo tokens in `styles/globals.css` and `config/design-tokens.ts`.
  - **Dependencies**: None.
  - **Acceptance criteria**: Both themes use semantic token names, preserve readable contrast, and remove section-specific visual values where shared tokens apply.
  - **Files**: `styles/globals.css`, `config/design-tokens.ts`.
  - **Tests**: Add token coverage and theme-token assertions in `tests/unit/design-tokens.test.ts`; retain `tests/unit/theme.test.ts`.
  - **Parallel execution**: Yes, with T001 because there is no file overlap.

- [X] T005 [P] Define shared spacing scale, section rhythm, content gutters, and spacing utility classes in `styles/globals.css` and `config/design-tokens.ts`.
  - **Dependencies**: T004.
  - **Acceptance criteria**: Page, section, group, card, control, and inline gaps use a coherent compact scale; no section depends on an oversized fixed vertical gap.
  - **Files**: `styles/globals.css`, `config/design-tokens.ts`.
  - **Tests**: Add spacing-token assertions in `tests/unit/design-tokens.test.ts` and inspect target widths in `tests/e2e/responsive.spec.ts`.
  - **Parallel execution**: Yes, with T006 after T004 if changes are coordinated in shared token files.

- [X] T006 [P] Define responsive typography tokens and maximum text-width utilities in `styles/globals.css` and `config/design-tokens.ts`.
  - **Dependencies**: T004.
  - **Acceptance criteria**: Display, section, card, metadata, body, caption, and badge hierarchy is explicit; long-form prose targets approximately 70 characters where width allows; typography remains readable at 320px and does not overgrow at 1920px.
  - **Files**: `styles/globals.css`, `config/design-tokens.ts`.
  - **Tests**: Add typography-token assertions in `tests/unit/design-tokens.test.ts` and viewport checks in `tests/e2e/responsive.spec.ts`.
  - **Parallel execution**: Yes, with T005 after T004 if changes are coordinated in shared token files.

- [X] T007 Build shared SectionContainer, Card, Badge, accordion, hover, and motion primitives in `components/ui/` and `components/motion/`.
  - **Dependencies**: T004, T005, T006.
  - **Acceptance criteria**: Primitives provide content-sized card layouts, responsive grids, natural badge wrapping, visible focus, subtle small-lift/soft-shadow/border feedback, and reduced-motion-safe variants without bounce or layout shift.
  - **Files**: `components/ui/section-container.tsx`, `components/ui/card.tsx`, `components/ui/badge.tsx`, `components/ui/accordion.tsx`, `components/ui/section-heading.tsx`, `components/motion/interactive-card.tsx`, `components/motion/motion-safe.tsx`, `lib/motion.ts`, `styles/globals.css`.
  - **Tests**: Add `tests/unit/ui-primitives.test.tsx` and `tests/unit/accordion.test.tsx` for focus, state, labels, wrapping class hooks, and reduced-motion behavior.
  - **Parallel execution**: No; downstream page and feature migrations consume these primitives.

- [X] T008 Implement shared logo resolution plus CompanyLogo and IssuerLogo components in `components/ui/`.
  - **Dependencies**: T001, T002, T003, T004, T007.
  - **Acceptance criteria**: Logos use approved local paths only, reserve stable dimensions, preserve aspect ratio, adapt to both themes, retain accessible identity, and render initials when an approved asset is unavailable.
  - **Files**: `components/ui/logo-frame.tsx`, `components/ui/company-logo.tsx`, `components/ui/issuer-logo.tsx`, `config/brand-assets.ts`, `types/brand-asset.ts`, `styles/globals.css`.
  - **Tests**: Add `tests/unit/company-logo.test.tsx` and `tests/unit/issuer-logo.test.tsx` for official asset, fallback, alternative text, and theme treatment.
  - **Parallel execution**: No; requires completed manifest, assets, tokens, and shared primitives.

**Checkpoint**: Asset provenance and shared design primitives are ready. User-story work can now start.

## Phase 2: User Story 1 - Assess professional positioning quickly (Priority: P1) 🎯 MVP

**Goal**: Deliver a compact, premium first impression with clear hierarchy, readable measures, balanced About cards, and existing content intact.

**Independent Test**: At each target width and in either theme, open the homepage and identify the role, scan the hero/About hierarchy, read constrained prose, and reach the experience action without clipping or visual competition.

- [X] T009 [P] [US1] Refine the hero layout, typography hierarchy, staggered entrance, and primary action in `app/page.tsx`, `components/visuals/infrastructure-nodes.tsx`, and `styles/globals.css`.
  - **Dependencies**: T005, T006, T007.
  - **Acceptance criteria**: Existing hero content remains unchanged; the primary action is immediately usable; stagger is subtle and ordered; decorative visual treatment is technical but not dashboard-like, gaming-like, neon-heavy, or motion-dependent.
  - **Files**: `app/page.tsx`, `components/visuals/infrastructure-nodes.tsx`, `styles/globals.css`, `lib/motion.ts`.
  - **Tests**: Update `tests/e2e/motion.spec.ts` and add hero hierarchy/action assertions in `tests/e2e/visual-refinement.spec.ts`.
  - **Parallel execution**: Yes, with T010 after T007 because the implementation files do not overlap materially.

- [X] T010 [P] [US1] Rebuild About with shared section/card layouts, balanced expertise content, and constrained reading widths in `app/page.tsx` and `styles/globals.css`.
  - **Dependencies**: T005, T006, T007.
  - **Acceptance criteria**: Existing About, expertise, leadership, and objective content is retained; cards are compact and balanced; visual cues are category-appropriate; long-form copy uses the shared max-measure utility.
  - **Files**: `app/page.tsx`, `components/ui/section-container.tsx`, `components/ui/card.tsx`, `styles/globals.css`.
  - **Tests**: Add About content/semantic checks in `tests/e2e/visual-refinement.spec.ts` and retain content parity in `tests/unit/professional-content.test.ts`.
  - **Parallel execution**: Yes, with T009 after T007; resolve shared `app/page.tsx` edits through a single integration pass in T011.

- [X] T011 [US1] Integrate Hero and About refinements into the page shell and validate US1 in `app/page.tsx` and `tests/e2e/visual-refinement.spec.ts`.
  - **Dependencies**: T009, T010.
  - **Acceptance criteria**: Hero and About share the new section rhythm and typography; their content and navigation anchors remain intact; the page is coherent in both themes with visible focus.
  - **Files**: `app/page.tsx`, `styles/globals.css`, `tests/e2e/visual-refinement.spec.ts`.
  - **Tests**: Run the US1 portion of `tests/e2e/visual-refinement.spec.ts`, `tests/e2e/navigation.spec.ts`, `tests/unit/theme.test.ts`, and `tests/e2e/responsive.spec.ts`.
  - **Parallel execution**: No; integrates parallel US1 work.

**Checkpoint**: The first-view and About experience are independently releasable after the listed US1 tests pass.

## Phase 3: User Story 2 - Review career history with low cognitive load (Priority: P1)

**Goal**: Present verified work history in a compact scan order with company branding, accessible disclosure, a refined timeline, and wrapping technology badges.

**Independent Test**: At 320px and desktop widths, inspect every role in chronology, read company/role/period/summary before disclosure, expand responsibilities by keyboard, and confirm all technologies wrap without overflow.

- [X] T012 [US2] Extend the experience presentation mapping with company brand identifiers while preserving verified role content in `content/experience.ts` and `types/experience.ts`.
  - **Dependencies**: T001, T002.
  - **Acceptance criteria**: Each approved company maps to a logo-manifest identifier or explicit initials fallback; dates, responsibilities, summaries, technologies, and verification status are not changed.
  - **Files**: `content/experience.ts`, `types/experience.ts`, `config/brand-assets.ts`.
  - **Tests**: Extend `tests/unit/professional-content.test.ts` and `tests/unit/brand-assets.test.ts` for complete company coverage and unchanged experience facts.
  - **Parallel execution**: Yes, with T013 and T014 after their dependencies; they use different primary files.

- [X] T013 [P] [US2] Replace the timeline and company-card presentation with shared layouts and CompanyLogo in `components/profile/experience-timeline.tsx` and `styles/globals.css`.
  - **Dependencies**: T007, T008, T012.
  - **Acceptance criteria**: Each role displays company, role, period, summary, responsibilities, and technologies in order; the company name remains visible; role icons are secondary; cards are compact and timeline reveal is smooth without excessive motion.
  - **Files**: `components/profile/experience-timeline.tsx`, `components/ui/company-logo.tsx`, `components/motion/scroll-progress.tsx`, `styles/globals.css`.
  - **Tests**: Add scan-order and logo assertions in `tests/e2e/experience-refinement.spec.ts`.
  - **Parallel execution**: Yes, with T014 after T007/T008; merge after both are complete.

- [X] T014 [P] [US2] Apply shared accordion semantics and improved technology Badge presentation to experience details in `components/ui/accordion.tsx`, `components/ui/badge.tsx`, and `styles/globals.css`.
  - **Dependencies**: T007.
  - **Acceptance criteria**: Responsibilities are collapsed behind an accessible control with announced state; technologies remain reachable and wrap naturally; neither requires hover; keyboard focus remains visible.
  - **Files**: `components/ui/accordion.tsx`, `components/ui/badge.tsx`, `styles/globals.css`, `components/profile/experience-timeline.tsx`.
  - **Tests**: Expand `tests/unit/accordion.test.tsx`, `tests/unit/ui-primitives.test.tsx`, and `tests/e2e/experience-refinement.spec.ts` for keyboard toggle and 320px wrapping.
  - **Parallel execution**: Yes, with T013 after T007/T008; coordinate the shared timeline integration.

- [X] T015 [US2] Integrate the refined company timeline, accordion, and badges and complete the experience regression suite in `components/profile/experience-timeline.tsx` and `tests/e2e/experience-refinement.spec.ts`.
  - **Dependencies**: T012, T013, T014.
  - **Acceptance criteria**: All eight roles retain verified content, all five companies render an approved mark or fallback, and every responsibility disclosure works by keyboard at target widths and in both themes.
  - **Files**: `components/profile/experience-timeline.tsx`, `tests/e2e/experience-refinement.spec.ts`, `tests/unit/professional-content.test.ts`.
  - **Tests**: Run `tests/e2e/experience-refinement.spec.ts`, `tests/e2e/responsive.spec.ts`, and the relevant unit tests.
  - **Parallel execution**: No; integrates US2 work.

**Checkpoint**: Experience is independently releasable after all verified roles, logo fallbacks, accordion states, and technology wrapping pass tests.

## Phase 4: User Story 3 - Scan certifications and contact options (Priority: P1)

**Goal**: Deliver a compact issuer-logo certification gallery and premium, accessible contact actions without exposing administrative credential metadata.

**Independent Test**: View the certification section and verify every item contains only issuer identity and certification title, then reach and activate each approved contact action by keyboard or touch.

- [X] T016 [US3] Add issuer brand identifiers to certification presentation data without deleting existing verified metadata in `content/certifications.ts` and `types/certification.ts`.
  - **Dependencies**: T001, T003.
  - **Acceptance criteria**: Every distinct issuer maps to the asset manifest or initials fallback; existing dates, statuses, IDs, skills, categories, and ordering remain in source data but are marked presentation-hidden for the gallery.
  - **Files**: `content/certifications.ts`, `types/certification.ts`, `config/brand-assets.ts`.
  - **Tests**: Extend `tests/unit/professional-content.test.ts` and `tests/unit/brand-assets.test.ts` for issuer mapping and retained metadata.
  - **Parallel execution**: Yes, with T017 and T018 after their dependencies; primary files do not overlap.

- [X] T017 [P] [US3] Replace the certification section with the responsive IssuerLogo gallery in `components/profile/certification-section.tsx` and `styles/globals.css`.
  - **Dependencies**: T007, T008, T016.
  - **Acceptance criteria**: Each visible card has exactly the issuer logo/initials and certification name; dates, expiration, IDs, skills, verification links, status labels, and filters are not rendered; cards remain compact with stable logo frames.
  - **Files**: `components/profile/certification-section.tsx`, `components/ui/issuer-logo.tsx`, `components/ui/card.tsx`, `styles/globals.css`.
  - **Tests**: Add `tests/e2e/certification-gallery.spec.ts` that asserts the allowed fields, absence of removed fields, complete inventory, logo fallback, and no overflow.
  - **Parallel execution**: Yes, with T018 after T007; integrate in T019.

- [ ] T018 [P] [US3] Create shared contact-action buttons and update the approved contact model in `components/ui/contact-action.tsx`, `content/contact.ts`, and `app/page.tsx`.
  - **Dependencies**: T007.
  - **Acceptance criteria**: GitHub, LinkedIn, email, and an approved resume action have labels, recognizable brand/document iconography, generous targets, visible focus, subtle hover/press feedback, and safe external-link behavior; no unapproved destination is introduced.
  - **Files**: `components/ui/contact-action.tsx`, `content/contact.ts`, `app/page.tsx`, `config/icons.ts`, `styles/globals.css`.
  - **Tests**: Add `tests/unit/contact-action.test.tsx` and extend `tests/e2e/privacy.spec.ts` for label, destination, target, and safe-link behavior.
  - **Parallel execution**: Yes, with T017 after T007; if no approved resume destination exists, keep the action absent and document the confirmation requirement in `docs/content-sources.md`.

- [X] T019 [US3] Integrate certification gallery and contact redesign into the page and complete US3 regression tests in `app/page.tsx` and `tests/e2e/`.
  - **Dependencies**: T016, T017, T018.
  - **Acceptance criteria**: Certification and contact sections share the design system; gallery contents satisfy the two-field contract; all approved contact actions work without breaking privacy or navigation.
  - **Files**: `app/page.tsx`, `components/profile/certification-section.tsx`, `tests/e2e/certification-gallery.spec.ts`, `tests/e2e/privacy.spec.ts`.
  - **Tests**: Run certification-gallery, privacy, navigation, and responsive suites plus contact-action unit tests.
  - **Parallel execution**: No; integrates US3 work.

**Checkpoint**: Certification scanning and contact actions are independently releasable when the gallery contract and contact safety tests pass.

## Phase 5: User Story 4 - Use the portfolio comfortably on every supported screen (Priority: P2)

**Goal**: Confirm every refined surface works across required breakpoints, input modes, themes, and reduced-motion preferences.

**Independent Test**: At 320, 375, 768, 1024, 1440, and 1920 pixels in light/dark and reduced-motion modes, navigate with keyboard and pointer with no overflow, clipped text, collisions, distorted logos, or inaccessible state.

- [X] T020 [US4] Apply responsive grid transitions, fluid spacing, and typography limits across page sections in `app/page.tsx` and `styles/globals.css`.
  - **Dependencies**: T011, T015, T019.
  - **Acceptance criteria**: The hero, About, experience, certification gallery, contact, education, projects, and footer reflow at all target widths without large empty areas, clipped text, overlap, or stretched logos.
  - **Files**: `app/page.tsx`, `styles/globals.css`, `components/ui/section-container.tsx`, `components/ui/card.tsx`.
  - **Tests**: Expand `tests/e2e/responsive.spec.ts` for every target width and sections with badge/logo assertions.
  - **Parallel execution**: No; requires all story integrations.

- [X] T021 [P] [US4] Audit and remediate semantic, focus, contrast, text-alternative, keyboard, and reduced-motion behavior across refined components in `components/` and `styles/globals.css`.
  - **Dependencies**: T011, T015, T019.
  - **Acceptance criteria**: Semantic heading sequence, skip link, visible focus, accordion state, meaningful alternatives, color-independent meaning, and reduced-motion operation meet the visual UI contract in both themes.
  - **Files**: `app/page.tsx`, `components/ui/accordion.tsx`, `components/ui/company-logo.tsx`, `components/ui/issuer-logo.tsx`, `components/ui/contact-action.tsx`, `components/motion/`, `styles/globals.css`.
  - **Tests**: Add `tests/e2e/accessibility-refinement.spec.ts` and update `tests/unit/theme.test.ts` for theme-aware focus/contrast hooks.
  - **Parallel execution**: Yes, with T020 after story integrations; coordinate any shared CSS corrections.

- [X] T022 [P] [US4] Optimize SVG delivery, reserve visual dimensions, and verify no external brand-asset requests in `public/assets/`, `config/brand-assets.ts`, and component rendering.
  - **Dependencies**: T002, T003, T008, T017.
  - **Acceptance criteria**: Only rendered local optimized assets are included; logos have stable dimensions; no brand asset is hotlinked; non-critical decoration does not delay primary comprehension; no logo-related layout shift is observed.
  - **Files**: `public/assets/brands/`, `config/brand-assets.ts`, `components/ui/logo-frame.tsx`, `next.config.ts`.
  - **Tests**: Add local-asset/network assertions in `tests/e2e/performance-assets.spec.ts` and manifest checks in `tests/unit/brand-assets.test.ts`.
  - **Parallel execution**: Yes, with T020/T021 once its dependencies are complete.

- [X] T023 [US4] Complete the cross-viewport, theme, keyboard, reduced-motion, and performance acceptance suite in `tests/e2e/`.
  - **Dependencies**: T020, T021, T022.
  - **Acceptance criteria**: All six target widths pass in both themes; no horizontal overflow, overlap, clipping, stretched marks, focus loss, motion dependency, remote assets, or logo-induced layout shift remains.
  - **Files**: `tests/e2e/responsive.spec.ts`, `tests/e2e/accessibility-refinement.spec.ts`, `tests/e2e/performance-assets.spec.ts`, `tests/e2e/visual-refinement.spec.ts`.
  - **Tests**: Run all named end-to-end suites with the existing navigation, motion, privacy, and professional-content suites.
  - **Parallel execution**: No; final US4 integration gate.

**Checkpoint**: The portfolio is independently usable across all supported viewport, theme, and input-mode combinations.

## Phase 6: Polish, footer, deployment, and quality gates

**Purpose**: Complete shared refinements, preserve credibility, and prove release readiness.

- [X] T024 [P] Refine the footer with shared typography, icon treatment, spacing, and interaction states in `app/page.tsx` and `styles/globals.css`.
  - **Dependencies**: T007.
  - **Acceptance criteria**: Existing footer content remains accurate; the footer is visually consistent, compact, readable in both themes, and its back-to-top action has visible focus and keyboard usability.
  - **Files**: `app/page.tsx`, `styles/globals.css`, `config/icons.ts`.
  - **Tests**: Add footer focus/navigation assertions in `tests/e2e/visual-refinement.spec.ts` and `tests/e2e/navigation.spec.ts`.
  - **Parallel execution**: Yes, any time after T007; integrate alongside final page changes.

- [X] T025 [P] Review and update motion variants and hover-system consistency in `components/motion/`, `components/ui/`, and `styles/globals.css`.
  - **Dependencies**: T007, T009, T013, T017, T018.
  - **Acceptance criteria**: Hero, cards, timeline, logos, buttons, and contact actions use compatible short-duration easing, small elevation, soft shadow, and border emphasis; none bounce or create significant movement; reduced motion remains effective.
  - **Files**: `components/motion/animated-text.tsx`, `components/motion/animated-section.tsx`, `components/motion/interactive-card.tsx`, `components/motion/scroll-progress.tsx`, `lib/motion.ts`, `styles/globals.css`.
  - **Tests**: Update `tests/e2e/motion.spec.ts` and `tests/unit/ui-primitives.test.tsx` for reduced-motion and interaction-state coverage.
  - **Parallel execution**: Yes, after listed component tasks; coordinate shared CSS with T020/T021.

- [X] T026 [P] Verify public-content integrity, logo-source provenance, metadata continuity, and resume-action approval in `content/`, `config/brand-assets.ts`, `docs/content-sources.md`, and `lib/metadata.ts`.
  - **Dependencies**: T002, T003, T012, T016, T018.
  - **Acceptance criteria**: No professional claims or contact destinations are invented; every displayed logo has official-source provenance or fallback; phone numbers/private data are absent; metadata and structured information remain credible; an absent approved resume destination is documented rather than guessed.
  - **Files**: `content/experience.ts`, `content/certifications.ts`, `content/contact.ts`, `config/brand-assets.ts`, `docs/content-sources.md`, `lib/metadata.ts`, `lib/site-config.ts`.
  - **Tests**: Run and extend `tests/unit/professional-content.test.ts`, `tests/e2e/privacy.spec.ts`, and metadata checks in `tests/e2e/visual-refinement.spec.ts`.
  - **Parallel execution**: Yes, after listed data/action tasks; no page-layout dependency.

- [X] T027 Verify GitHub Pages static export and deployment quality gates in `.github/workflows/deploy-pages.yml`, `next.config.ts`, and `docs/github-pages.md`.
  - **Dependencies**: T023, T024, T025, T026.
  - **Acceptance criteria**: Existing static export and base-path behavior are preserved; workflow fails on formatting, linting, type checks, tests, or build failure; deployment documentation reflects final validation without adding a backend or remote brand dependency.
  - **Files**: `.github/workflows/deploy-pages.yml`, `next.config.ts`, `docs/github-pages.md`, `docs/testing.md`.
  - **Tests**: Execute `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e`, and `npm run build`.
  - **Parallel execution**: No; release gate after all product and quality tasks.

- [ ] T028 Run the complete quickstart validation and record final results in `specs/005-refine-engineering-portfolio/quickstart.md` and `docs/testing.md`.
  - **Dependencies**: T027.
  - **Acceptance criteria**: Every manual and automated check in quickstart passes or has an explicit approved follow-up; target widths, both themes, keyboard, reduced motion, asset provenance, static build, and deployment behavior are documented as validated.
  - **Files**: `specs/005-refine-engineering-portfolio/quickstart.md`, `docs/testing.md`.
  - **Tests**: Re-run the full command sequence and the manual visual checks specified in `quickstart.md`.
  - **Parallel execution**: No; final acceptance task.

## Dependencies and execution order

```text
T001 ─┬─ T002 ─┐
      ├─ T003 ─┼─ T008 ─┬─ US2 (T012–T015)
T004 ─┼─ T005 ─┤        └─ US3 (T016–T019)
      └─ T006 ─┴─ T007 ─┬─ US1 (T009–T011)
                           └─ T024 / T025

US1 + US2 + US3 ── T020/T021 ── T023 ── T027 ── T028
T002 + T003 + T008 + T017 ── T022 ──────┘
T002 + T003 + T012 + T016 + T018 ── T026 ─┘
```

### User story dependencies

- **US1 (P1)**: Depends on T005–T007. Independently delivers the first-view and About refinement.
- **US2 (P1)**: Depends on T001–T008 and T012. Independently delivers the experience/timeline treatment.
- **US3 (P1)**: Depends on T001, T003, T007, T008, and T016. Independently delivers the certification gallery and contact redesign.
- **US4 (P2)**: Depends on US1, US2, and US3 integrations. It is the cross-viewport, access, and performance acceptance increment.

## Parallel execution examples

### Foundation

After T001 and T004 complete, run T002 and T003 in parallel for company/issuer assets; run T005 and T006 in parallel for spacing and typography. Integrate their outputs before T007 and T008.

### US1

After T007, run T009 (hero) and T010 (About) in parallel. Use T011 to reconcile the shared page-shell changes and execute US1 tests.

### US2

After T012 and T008, run T013 (timeline/company card) alongside T014 (accordion/badges). Use T015 for integration and experience regression validation.

### US3

After T016 and T008, run T017 (certification gallery) and T018 (contact actions) in parallel. Use T019 to integrate page-level changes and tests.

### US4 and release gates

After US1–US3 integrate, run T020 (responsive rules), T021 (accessibility), and T022 (asset performance) in parallel where shared-style changes are coordinated. T023, T027, and T028 remain sequential release gates.

## Implementation strategy

### MVP first

1. Complete T001–T008 to establish trusted assets and reusable visual primitives.
2. Complete US1 (T009–T011) and validate the premium first-view/reader experience.
3. Stop for visual, theme, and accessibility review before moving to content-dense sections.

### Incremental delivery

1. Add US2 experience improvements and validate all verified employment content.
2. Add US3 certification/contact improvements and validate gallery limits and contact safety.
3. Complete US4 responsive/accessibility/performance validation.
4. Finish footer, motion, integrity, deployment, and final quickstart gates.

## Notes

- Every production task preserves existing verified professional content; only the certification gallery omits specified metadata from public rendering.
- Official asset availability is not assumed. A documented initials fallback is required whenever source provenance or brand-use suitability is unresolved.
- Do not create a resume link or destination unless an approved existing destination is available.
