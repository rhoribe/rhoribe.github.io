# Tasks: Refine SRE Portfolio

**Input**: Design documents from `/specs/008-refine-sre-portfolio/`

**Prerequisites**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [portfolio-ui-contract.md](./contracts/portfolio-ui-contract.md), [quickstart.md](./quickstart.md)

**Tests**: Automated component and end-to-end tests are required for navigation, reduced motion, timeline state/structure, all-open accordions, icon clarity, responsive behavior, and production checks.

**Execution Status (2026-08-04)**: T001–T029 completed and validated. See the final Phase 6 quality-gate task and test output for command results.

## Phase 1: Setup and Governance

**Purpose**: Record the approved dark-only exception and establish the implementation baseline.

- [ ] T001 Amend the approved dark-only Principle II decision in [.specify/memory/constitution.md](../../../.specify/memory/constitution.md). Dependencies: none. Notes: document rationale, migration from dual theme, validation changes, owner approval, and constitution version/date changes. Completion: the constitution no longer requires light theme, a toggle, or persisted theme preference, while retaining dark-theme accessibility and reduced-motion obligations.
- [ ] T002 [P] Inventory all current theme, logo, timeline, Expertise, and certification consumers in [app/layout.tsx](../../../app/layout.tsx), [components/layout/site-header.tsx](../../../components/layout/site-header.tsx), [components/layout/theme-toggle.tsx](../../../components/layout/theme-toggle.tsx), [components/ui/company-logo.tsx](../../../components/ui/company-logo.tsx), [components/motion/scroll-progress.tsx](../../../components/motion/scroll-progress.tsx), and their tests. Dependencies: none. Notes: record exact imports and selectors to remove or migrate before code changes. Completion: implementation has a checked inventory that covers every existing theme and company-logo execution path and identifies tests requiring replacement.
- [ ] T003 Establish the dark-only visual token and icon-state acceptance matrix in [config/design-tokens.ts](../../../config/design-tokens.ts) and [styles/globals.css](../../../styles/globals.css). Dependencies: T001. Notes: define/refine bright teal primary, electric-blue or violet secondary, dark surfaces, muted text, focus state, inactive icon, active icon, marker, and rail values; use contrast-checked values only. Completion: each named state has one canonical token and documented WCAG AA foreground/background pairing.

**Checkpoint**: Governance and visual-token baseline are ready; implementation can proceed without preserving deprecated light-theme behavior.

## Phase 2: Foundational Components and Test Support

**Purpose**: Create shared pieces required by all story work while preserving the established timeline/card boundary.

- [ ] T004 Create the reusable generic BriefcaseIcon in [components/icons/briefcase-icon.tsx](../../../components/icons/briefcase-icon.tsx) and export it from [components/icons/index.ts](../../../components/icons/index.ts). Dependencies: T003. Notes: wrap the shared Lucide briefcase glyph with fixed semantic size, stroke width, teal styling hook, alignment class, and decorative-versus-labelled accessibility API. Completion: all consumers can render one consistent high-contrast briefcase icon without a company image, initials fallback, or per-company variant.
- [ ] T005 [P] Add stable timeline row, marker, rail-segment, reveal, and active-state selectors to the contract tests in [tests/components/experience-timeline.test.tsx](../../../tests/components/experience-timeline.test.tsx). Dependencies: T002. Notes: write assertions before implementation for five sibling markers, zero markers within cards/accordions/chips, and one marker/rail pair per company ID. Completion: tests fail against missing state selectors and prove structural invariants once implementation is complete.
- [ ] T006 [P] Create a mocked IntersectionObserver test helper in [tests/setup.ts](../../../tests/setup.ts) or [tests/components/experience-timeline.test.tsx](../../../tests/components/experience-timeline.test.tsx). Dependencies: T002. Notes: support deterministic callback entries, intersection ratio ordering, observer cleanup, and reduced-motion rendering. Completion: component tests can simulate reveal-once, active-row selection, and observer disconnect without a real browser scroll listener.

**Checkpoint**: Shared icon and test infrastructure exist; user-story work can begin.

## Phase 3: User Story 1 — Scan a Progressive Career Timeline (Priority: P1) 🎯 MVP

**Goal**: Visitors can read an elegant, stable, one-marker-per-company timeline that progressively reveals cards and tracks the active company through scrolling.

**Independent Test**: At all target viewports, scroll the complete experience section forward, reverse, and rapidly; each company card reveals once, exactly one visible company is active, and marker/rail mapping remains correct with all eight accordions open.

### Tests for User Story 1

- [ ] T007 [P] [US1] Add reveal-once, active-row tie-break, reduced-motion, and cleanup tests in [tests/components/experience-timeline.test.tsx](../../../tests/components/experience-timeline.test.tsx). Dependencies: T005, T006. Notes: test persistent revealed IDs, a single highest-ratio active row, active state changes on reverse movement, and immediate fully visible cards under reduced motion. Completion: the tests initially fail and then verify the observer contract without relying on timing-sensitive CSS animation events.
- [ ] T008 [P] [US1] Extend scroll, all-accordion-open, marker-nesting, visual-regression, and responsive overflow coverage in [tests/e2e/experience-timeline.spec.ts](../../../tests/e2e/experience-timeline.spec.ts). Dependencies: T005. Notes: test 375px, 768px, 1024px, and 1440px; scroll each company into the reading band; assert a matching active marker/rail; expand all eight accordions; emulate reduced motion. Completion: the suite detects duplicate/nested markers, unrevealed content, wrong active mapping, clipped/overlapping timeline content, and horizontal overflow.

### Implementation for User Story 1

- [ ] T009 [US1] Replace the unused continuous rail-progress behavior with a reusable native observer controller in [components/motion/timeline-reveal.tsx](../../../components/motion/timeline-reveal.tsx) and retire or repurpose [components/motion/scroll-progress.tsx](../../../components/motion/scroll-progress.tsx). Dependencies: T006, T007. Notes: use one IntersectionObserver over company card/article elements, thresholds near 0/0.15/0.45/0.7, a central reading-band root margin, persistent revealed state, deterministic active selection, and disconnect cleanup; attach no scroll listener or animation loop. Completion: the controller exposes exactly one active company ID, never removes a revealed ID, and renders all content visible without observer support or motion.
- [ ] T010 [US1] Integrate the timeline reveal controller while retaining one marker and rail segment per company row in [components/profile/experience-timeline.tsx](../../../components/profile/experience-timeline.tsx). Dependencies: T009. Notes: keep marker and rail as row-level siblings of the card; map `data-revealed` and `data-active` only from the company ID; do not add marker elements to cards, roles, accordions, bullets, or technology chips. Completion: five company groups render exactly five markers and each active company maps to only its own marker and outgoing rail segment.
- [ ] T011 [US1] Implement stable reveal, active rail/marker, and reduced-motion styles in [styles/globals.css](../../../styles/globals.css). Dependencies: T003, T010. Notes: animate only opacity, `translateY(12px)` (within 8–16px), and controlled color/border color transitions; preserve fixed geometry and remove transition/motion hiding under `prefers-reduced-motion`; avoid glow, height, margin, padding, width, and transform-based rail layout changes. Completion: cards have no layout shift, reveal once, remain readable under reduced motion/no script, and active treatment is distinguishable beyond color alone.
- [ ] T012 [US1] Run and correct the User Story 1 component and end-to-end timeline suite in [tests/components/experience-timeline.test.tsx](../../../tests/components/experience-timeline.test.tsx) and [tests/e2e/experience-timeline.spec.ts](../../../tests/e2e/experience-timeline.spec.ts). Dependencies: T007, T008, T009, T010, T011. Notes: use browser computed-style assertions only for opacity/transform/color state and keep durable data attributes as the principal behavior assertions. Completion: all User Story 1 tests pass at 375px, 768px, 1024px, and 1440px with all eight accordions open.

**Checkpoint**: Professional Experience is independently demonstrable as a subtle, performant, reduced-motion-safe progressive timeline.

## Phase 4: User Story 2 — Use a Clear, Permanent Dark Interface (Priority: P1)

**Goal**: Visitors always receive the refined dark portfolio and can reliably reach Core Expertise from the sticky header.

**Independent Test**: With no saved preference and a simulated old `light` preference, the page has no theme control or light state; pointer and keyboard Expertise navigation land with the Core Expertise heading fully visible.

### Tests for User Story 2

- [ ] T013 [P] [US2] Replace theme-switch coverage with dark-only fresh-load, stored-preference, and absent-control tests in [tests/unit/theme.test.ts](../../../tests/unit/theme.test.ts) and [tests/e2e/responsive.spec.ts](../../../tests/e2e/responsive.spec.ts). Dependencies: T001, T002. Notes: remove tests that click a theme switch; assert dark tokens/state regardless of a stale `localStorage.theme` value and run overflow checks only against the permanent dark interface. Completion: tests fail until selection/persistence code is removed and assert no light rendering or toggle is reachable.
- [ ] T014 [P] [US2] Add pointer and keyboard Expertise anchor plus sticky-header visibility tests in [tests/e2e/navigation.spec.ts](../../../tests/e2e/navigation.spec.ts). Dependencies: T002. Notes: assert `#expertise`, verify the Core Expertise heading bounding box starts below the sticky header after navigation, and cover desktop/mobile navigation controls where present. Completion: tests fail against the current missing target and pass only when the heading is fully visible and the link works from a scrolled page.

### Implementation for User Story 2

- [ ] T015 [US2] Remove light-theme state, persistence, pre-render selection, and theme-toggle UI from [app/layout.tsx](../../../app/layout.tsx), [components/layout/site-header.tsx](../../../components/layout/site-header.tsx), and [components/layout/theme-toggle.tsx](../../../components/layout/theme-toggle.tsx). Dependencies: T001, T013. Notes: delete the component and imports only after consumers are removed; remove local storage and `matchMedia` theme preference handling rather than forcing dark through a runtime script. Completion: no application code reads/writes the theme preference, renders a theme control, or allows a light theme state.
- [ ] T016 [US2] Remove light token overrides and dead theme-transition rules while preserving accessible permanent-dark tokens in [styles/globals.css](../../../styles/globals.css), then delete obsolete theme tests in [tests/unit/theme.test.ts](../../../tests/unit/theme.test.ts) if their assertion has moved to end-to-end coverage. Dependencies: T003, T015. Notes: retain dark focus, hover, contrast, and reduced-motion rules; avoid an empty placeholder test file. Completion: no `[data-theme="light"]`, theme-transition selector, or dead dual-theme styling remains, and dark contrast/focus behavior remains intact.
- [ ] T017 [US2] Create the exact Core Expertise destination and sticky-header offset in [app/page.tsx](../../../app/page.tsx) and [styles/globals.css](../../../styles/globals.css). Dependencies: T014, T016. Notes: place `id="expertise"` on the semantic Core Expertise section or heading container, retain `#expertise` as the navigation source of truth in [content/navigation.ts](../../../content/navigation.ts), and use `scroll-margin-top` or document scroll padding based on the sticky header. Completion: activating Expertise from any scroll position lands with a visible, unambiguous Core Expertise heading and no duplicate ID.
- [ ] T018 [US2] Run navigation, dark-only, keyboard, and responsive checks in [tests/e2e/navigation.spec.ts](../../../tests/e2e/navigation.spec.ts) and [tests/e2e/responsive.spec.ts](../../../tests/e2e/responsive.spec.ts). Dependencies: T013, T014, T015, T016, T017. Notes: include stale stored preference, touch/pointer activation, keyboard activation, and all target viewports. Completion: all User Story 2 tests pass with zero theme controls, zero light renderings, a correct `#expertise` destination, and no horizontal overflow.

**Checkpoint**: The site has one stable accessible dark presentation and dependable sticky-header navigation.

## Phase 5: User Story 3 — Recognize Experience, Credentials, and AI Tools Clearly (Priority: P2)

**Goal**: Visitors scan consistent high-contrast company and certification identity treatments and find the expanded Core Expertise inventory.

**Independent Test**: At every target viewport, every company card has the same teal briefcase icon, certification identity remains readable without dark-on-dark marks, and all requested expertise cards and skills are visible in a balanced grid.

### Tests for User Story 3

- [ ] T019 [P] [US3] Add company-briefcase identity, metadata icon, and no-logo/no-initials assertions in [tests/components/experience-timeline.test.tsx](../../../tests/components/experience-timeline.test.tsx) and [tests/e2e/professional-content.spec.ts](../../../tests/e2e/professional-content.spec.ts). Dependencies: T004, T005. Notes: assert the shared BriefcaseIcon class/accessible contract on all five company cards and absence of company logo image/fallback nodes. Completion: tests reject inconsistent company visuals, missing labels, or company-specific image/initial treatments.
- [ ] T020 [P] [US3] Add issuer treatment, accessible naming, visible fallback, contrast-state, and alignment checks in [tests/e2e/certification-gallery.spec.ts](../../../tests/e2e/certification-gallery.spec.ts) and [tests/e2e/accessibility-refinement.spec.ts](../../../tests/e2e/accessibility-refinement.spec.ts). Dependencies: T003. Notes: cover approved logo and fallback-tile paths and use browser checks to reject near-black/dark-on-dark rendering; retain issuer text as the durable identity oracle. Completion: tests fail when an issuer is unlabeled, clipped, low contrast, or rendered as an unclear monochrome mark.
- [ ] T021 [P] [US3] Add data and responsive grid assertions for all eight expertise cards in [tests/unit/content.test.ts](../../../tests/unit/content.test.ts) and [tests/e2e/responsive.spec.ts](../../../tests/e2e/responsive.spec.ts). Dependencies: T003. Notes: assert exact requested category labels and skill arrays, confirm Linux is absent from Reliability and operations but present in Operating Systems, and verify no card overflow at the four target widths. Completion: tests fail until the structured data and responsive rendering match the specified inventory.

### Implementation for User Story 3

- [ ] T022 [US3] Replace Professional Experience company-logo rendering with BriefcaseIcon and normalize role metadata icons in [components/profile/company-experience-card.tsx](../../../components/profile/company-experience-card.tsx), [components/icons/app-icon.tsx](../../../components/icons/app-icon.tsx), and [styles/globals.css](../../../styles/globals.css). Dependencies: T004, T019. Notes: remove the CompanyLogo import; use a visually clear teal briefcase with adjacent company text; standardize title, date, work mode, and location icon size, color, stroke, baseline alignment, and decorative/label semantics. Completion: all company cards render the same briefcase treatment, metadata is aligned and AA-contrast compliant, and no company logo/initial fallback remains.
- [ ] T023 [US3] Remove now-dead company-logo plumbing from [components/ui/company-logo.tsx](../../../components/ui/company-logo.tsx), [components/ui/logo-frame.tsx](../../../components/ui/logo-frame.tsx), [components/ui/logo.tsx](../../../components/ui/logo.tsx), [types/experience.ts](../../../types/experience.ts), [content/experience.ts](../../../content/experience.ts), and [config/brand-assets.ts](../../../config/brand-assets.ts). Dependencies: T022. Notes: preserve issuer-logo paths and only remove company-specific types/assets/configuration that have no consumer; retain verified company text and role records. Completion: typecheck finds no company brand references, no Professional Experience image components remain, and issuer assets still render through their separate path.
- [ ] T024 [US3] Audit and correct certification icon/logo treatments in [components/profile/certification-card.tsx](../../../components/profile/certification-card.tsx), [components/ui/issuer-logo.tsx](../../../components/ui/issuer-logo.tsx), [components/ui/logo.tsx](../../../components/ui/logo.tsx), [config/brand-assets.ts](../../../config/brand-assets.ts), and [styles/globals.css](../../../styles/globals.css). Dependencies: T003, T020. Notes: retain an official issuer mark only when readable on dark surfaces; otherwise supply a high-contrast text-supported fallback tile with stable padding and alignment; do not blindly recolor unclear marks. Completion: all certification cards have clear issuer identity, AA contrast, consistent spacing/alignment, no broken assets, and no dark-on-dark or low-contrast monochrome logos.
- [ ] T025 [US3] Replace tuple-based expertise data with typed card records and render the responsive grid in [content/expertise.ts](../../../content/expertise.ts), [app/page.tsx](../../../app/page.tsx), [types/icon.ts](../../../types/icon.ts), [config/icons.ts](../../../config/icons.ts), and [styles/globals.css](../../../styles/globals.css). Dependencies: T003, T021. Notes: add AI Engineering Tools; Cloud Platforms; Containers and orchestration; Infrastructure as Code; CI/CD and automation; Operating Systems; Reliability and operations; retain the verified observability card as the eighth record; remove Linux from Reliability and operations and list Windows, Linux, macOS only in Operating Systems. Completion: all requested titles and exact tools render with deterministic shared icons, no title-string icon parsing remains, and the grid stays balanced without overflow at all target widths.
- [ ] T026 [US3] Run the full visual identity and expertise test set in [tests/components/experience-timeline.test.tsx](../../../tests/components/experience-timeline.test.tsx), [tests/e2e/professional-content.spec.ts](../../../tests/e2e/professional-content.spec.ts), [tests/e2e/certification-gallery.spec.ts](../../../tests/e2e/certification-gallery.spec.ts), [tests/e2e/accessibility-refinement.spec.ts](../../../tests/e2e/accessibility-refinement.spec.ts), [tests/unit/content.test.ts](../../../tests/unit/content.test.ts), and [tests/e2e/responsive.spec.ts](../../../tests/e2e/responsive.spec.ts). Dependencies: T019, T020, T021, T022, T023, T024, T025. Notes: perform visual alignment and contrast review in addition to semantic assertions; update snapshots only after manually confirming intended design changes. Completion: all User Story 3 tests pass and visual inspection finds no broken asset, unclear icon, low-contrast treatment, detached icon, or unbalanced/overflowing expertise card.

**Checkpoint**: Experience, certifications, and Core Expertise are clear, consistent, accessible, and independently testable.

## Phase 6: Polish and Cross-Cutting Validation

**Purpose**: Remove residual dead code and prove release readiness across all stories.

- [ ] T027 [P] Perform a dead-code and broken-asset audit across [app/layout.tsx](../../../app/layout.tsx), [components](../../../components), [content](../../../content), [config](../../../config), [public/assets/brands](../../../public/assets/brands), and [tests](../../../tests). Dependencies: T012, T018, T026. Notes: search for theme switching, light selectors, CompanyLogo, company brand IDs, stale image paths, and unused imports; retain issuer assets supported by certification cards. Completion: lint/typecheck report no unused paths/imports, no broken image request is observed, and no removed behavior has a remaining executable reference.
- [ ] T028 [P] Run focused accessibility, keyboard, reduced-motion, contrast, and responsive manual validation using [specs/008-refine-sre-portfolio/quickstart.md](./quickstart.md) and [tests/e2e/accessibility-refinement.spec.ts](../../../tests/e2e/accessibility-refinement.spec.ts). Dependencies: T012, T018, T026. Notes: test 375px, 768px, 1024px, and 1440px; verify visible focus, header navigation, no color-only active state, all accordions open, no overflow, and all icons against their actual dark card backgrounds. Completion: no WCAG AA contrast issue, hidden focus, clipped content, duplicate marker, or horizontal overflow remains.
- [ ] T029 Run the production quality gate with [package.json](../../../package.json): `npm run lint`, `npm run format:check`, `npm run typecheck`, `npm test`, `npm run build`, and `npm run test:e2e`. Dependencies: T027, T028. Notes: fix failures rather than suppressing tests; retain static GitHub Pages compatibility. Completion: every command exits successfully and the final implementation satisfies the validated quickstart scenarios.

## Dependencies & Execution Order

```text
T001 → T003 → T004
T002 → T005, T006, T013, T014
T005 + T006 → T007 → T009 → T010 → T011 → T012
T005 → T008 → T012
T001 + T013 → T015 → T016 → T017 → T018
T014 ───────────────────────────────────┘
T003 + T004 + T005 → T019 → T022 → T023
T003 → T020 → T024
T003 → T021 → T025
T019 + T020 + T021 + T022 + T023 + T024 + T025 → T026
T012 + T018 + T026 → T027, T028 → T029
```

### User Story Dependencies

- **US1 (P1, timeline)**: Depends on foundational tasks T003–T006 and is independently releasable after T012.
- **US2 (P1, dark interface/navigation)**: Depends on T001–T003 and T013–T014; it does not depend on timeline work and is independently releasable after T018.
- **US3 (P2, visual clarity/expertise)**: Depends on shared tokens/icon/test structure T003–T005; it is independently releasable after T026.

### Parallel Opportunities

- T002 and T003 may proceed after the constitution amendment decision; T005 and T006 may proceed after inventory.
- US1 test preparation (T007, T008), US2 test preparation (T013, T014), and US3 test preparation (T019, T020, T021) can run in parallel once their explicit prerequisites complete.
- T024 and T025 can proceed independently after the shared token foundation; T027 and T028 can run in parallel after all user stories complete.

## Implementation Strategy

### MVP First

1. Complete T001–T006.
2. Complete T007–T012 to deliver the professional timeline, including reduced motion and all-open accordion verification.
3. Validate US1 independently before merging other changes.

### Incremental Delivery

1. Deliver US1 for the scroll-driven experience timeline.
2. Deliver US2 for permanent dark theme and reliable Expertise navigation.
3. Deliver US3 for consistent company/certification icons and the expanded expertise grid.
4. Finish T027–T029 only after all desired increments are integrated.

## Format Validation

All 29 tasks use the required checklist format with a sequential ID, a `[P]` marker only for parallelizable work, a user-story label for story-phase tasks, exact file paths, implementation notes, dependencies, and objective completion criteria.
