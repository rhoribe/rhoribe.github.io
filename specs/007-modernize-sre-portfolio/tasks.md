---
description: "Implementation tasks for the Modernize SRE Portfolio feature"
---

# Tasks: Modernize SRE Portfolio

**Input**: Design documents from `/specs/007-modernize-sre-portfolio/`

**Prerequisites**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/portfolio-ui.md`, and `quickstart.md`

**Tests**: Vitest coverage for content, asset registry, timeline, accordion, and logo behavior; Playwright coverage for responsive, visual, keyboard, motion, asset, and overflow behavior; manual WCAG AA and Lighthouse review.

**Organization**: Tasks are grouped by user story so each increment can be implemented and validated independently after shared foundations are complete.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the implementation and validation baseline without changing verified public content.

- [ ] T001 Inventory current page sections, shared components, styles, and existing automated coverage in `app/page.tsx`, `components/`, `styles/globals.css`, and `tests/`; Completion: a migration map identifies every affected owner and test suite.
- [ ] T002 [P] Record the approved target viewport matrix and screenshot naming convention in `tests/e2e/responsive.spec.ts`; Completion: cases exist for 375px, 768px, 1024px, and 1440px in both themes.
- [ ] T003 [P] Add feature-specific validation commands and manual review instructions to `docs/testing.md`; Completion: the documented sequence includes format, lint, typecheck, unit, E2E, build, visual review, and Lighthouse.
- [ ] T004 [P] Audit every logo and image reference in `app/`, `components/`, `content/`, `config/`, and `public/assets/brands/`, recording owner, purpose, source/provenance, local path, dimensions, alt treatment, and fallback decision in `docs/content-sources.md`; Completion: every rendered or registry-referenced asset has an approved-local or fallback disposition.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create shared tokens, stable content identities, and publication/asset rules required by all stories.

**⚠️ CRITICAL**: Complete this phase before implementing user-story UI work.

- [ ] T005 Define semantic dark/light design tokens for color, surfaces, typography, spacing, radii, borders, shadows, focus, hover, and motion in `config/design-tokens.ts`; Completion: both themes expose equivalent semantic roles with teal primary and constrained blue/violet secondary accents.
- [ ] T006 Apply the semantic token system, responsive primitives, focus-visible treatment, and reduced-motion defaults in `styles/globals.css`; Completion: components can consume tokens without hard-coded theme colors and the 320px baseline has no global horizontal overflow.
- [ ] T007 Add stable verified company-group IDs and role-derived disclosure IDs while preserving all verified experience text in `types/experience.ts` and `content/experience.ts`; Completion: five unique company IDs and eight unique role disclosure IDs are available without content loss.
- [ ] T008 [P] Implement publishable-project filtering and navigation derivation in `lib/content.ts`, `content/projects.ts`, and `content/navigation.ts`; Completion: pending projects and their navigation target resolve to absent, while verified records can render from the same filtered result.
- [ ] T009 [P] Normalize brand registry status, provenance, local path, and fallback initials rules in `types/brand-asset.ts` and `config/brand-assets.ts`; Completion: approved records require a local SVG plus source URL and every record has fallback initials.
- [ ] T010 Add shared test selectors and test helpers for company IDs, role IDs, target viewports, themes, and reduced motion in `tests/setup.ts` and `tests/e2e/accessibility-refinement.spec.ts`; Completion: subsequent suites can address a company marker and each disclosure deterministically.

**Checkpoint**: The shared design, identity, asset, and filtering foundations are ready; user-story work can proceed in parallel where file ownership does not overlap.

---

## Phase 3: User Story 1 - Understand the senior SRE proposition (Priority: P1) 🎯 MVP

**Goal**: Make the senior SRE proposition, core expertise, hierarchy, contact path, and foundational page sections immediately credible and scannable.

**Independent Test**: At first view, a visitor can identify SRE specialization, senior scope, and a working contact path; each required section has coherent hierarchy and actions at all target widths.

- [ ] T011 [P] [US1] Add first-view, required-section, and CTA assertions in `tests/e2e/navigation.spec.ts`; Completion: tests verify Header, Hero, About, Expertise, Experience, Certifications, Education, Contact, and Footer plus an understandable contact action.
- [ ] T012 [P] [US1] Add semantic-token and interaction-state unit coverage in `tests/unit/theme.test.ts`; Completion: both themes expose usable primary, text, focus, and motion values.
- [ ] T013 [US1] Rebuild Hero CTA hierarchy, credible SRE positioning, and responsive visual treatment in `app/page.tsx` and `styles/globals.css`; Completion: the opening view clearly states specialization and offers visible experience and contact paths without relying on hover.
- [ ] T014 [US1] Extract and improve the standalone Expertise section and navigation target in `app/page.tsx`, `content/expertise.ts`, and `styles/globals.css`; Completion: Expertise is independently navigable and its cards wrap cleanly at all target widths.
- [ ] T015 [US1] Improve header navigation states, icon alignment, accessible labels, and mobile behavior in `components/layout/site-header.tsx` and `styles/globals.css`; Completion: active/interactive navigation stays visible and operable without color or hover alone.
- [ ] T016 [US1] Improve certification-section hierarchy and surrounding section spacing in `components/profile/certification-section.tsx`, `app/page.tsx`, and `styles/globals.css`; Completion: certification and education headings have consistent responsive hierarchy.
- [ ] T017 [US1] Improve contact action hierarchy, safe external-link behavior, and responsive layout in `components/ui/contact-action.tsx`, `content/contact.ts`, and `styles/globals.css`; Completion: every contact action has a discernible name, safe target behavior, and no public phone number.
- [ ] T018 [US1] Rebuild the footer technology statement as inline nonbreaking icon-and-name groups and refine footer layout in `app/page.tsx` and `styles/globals.css`; Completion: “Built with Next.js and TypeScript” remains one coherent readable statement with no detached icons at target widths.

**Checkpoint**: US1 is independently testable as a polished, trustworthy opening and core-page experience.

---

## Phase 4: User Story 2 - Scan and expand career history (Priority: P1)

**Goal**: Rebuild experience into a five-marker chronological timeline with eight independently operable responsibility disclosures.

**Independent Test**: A visitor can identify five company groups, open all eight responsibilities simultaneously, and scan or resize with no duplicate marker, overlap, clipping, or horizontal scroll.

- [ ] T019 [P] [US2] Add component tests for disclosure IDs, button labels, `aria-expanded`, `aria-controls`, Enter, Space, and independent open state in `tests/components/experience-accordion.test.tsx`; Completion: all eight controls meet the accordion contract and may stay open together.
- [ ] T020 [P] [US2] Add timeline structure tests for five sibling rail markers and grouped company cards in `tests/components/experience-timeline.test.tsx`; Completion: markers are never descendants of cards, disclosures, responsibility lists, or technology lists.
- [ ] T021 [P] [US2] Add browser tests that open all eight disclosures, resize each target viewport, and assert five markers/no clipping/no overflow in `tests/e2e/experience-timeline.spec.ts`; Completion: every panel remains visible and operable at 375px, 768px, 1024px, and 1440px.
- [ ] T022 [US2] Create the normal-flow client `ExperienceAccordion` with role-derived IDs, clear open/close labels, decorative chevron, ARIA control relationship, and reduced-motion behavior in `components/profile/experience-accordion.tsx`; Completion: pointer and keyboard toggle only the invoked panel and semantic state changes are immediate under reduced motion.
- [ ] T023 [US2] Create `CompanyExperienceCard` that groups each company’s roles, verified metadata, disclosures, and technologies in normal flow in `components/profile/company-experience-card.tsx`; Completion: multi-role employers remain one card with distinct role data and no card-internal marker styling.
- [ ] T024 [US2] Rebuild `ExperienceTimeline` as explicit rail/marker siblings of company cards in `components/profile/experience-timeline.tsx`; Completion: exactly one `data-timeline-marker` renders per verified company group in chronological order.
- [ ] T025 [US2] Add timeline, card, disclosure, and expanded-panel responsive styles in `styles/globals.css`; Completion: all-open layouts have no overlap, clipped text, marker drift, or horizontal scroll from 320px upward.
- [ ] T026 [US2] Migrate the experience page to the new timeline components and retire the old generic experience-only accordion consumer in `components/profile/experience-timeline.tsx` and `components/ui/accordion.tsx`; Completion: no experience role uses the legacy accordion and it is removed only if no consumers remain.
- [ ] T027 [US2] Run and correct the all-eight-open browser scenario in `tests/e2e/experience-timeline.spec.ts`; Completion: test output demonstrates eight open panels, exactly five markers, valid ARIA, and no overflow at every required width.

**Checkpoint**: US2 is independently testable as a stable, expandable career-history timeline.

---

## Phase 5: User Story 3 - Trust visual assets and credentials (Priority: P1)

**Goal**: Render reliable company and certification branding through one audited registry, reserved frames, and accessible text-supported fallbacks.

**Independent Test**: Every visible company and issuer is identifiable by text and consistent visual treatment, including fallbacks, with no broken image or layout movement.

- [ ] T028 [P] [US3] Add registry validation for provenance, on-disk approved SVGs, reserved-path rules, and fallback initials in `tests/unit/brand-assets.test.ts`; Completion: the suite fails any missing approved asset and any record without a valid fallback.
- [ ] T029 [P] [US3] Add browser coverage for rendered logo dimensions, fallback identity, broken-image absence, and certification-card consistency in `tests/e2e/certification-gallery.spec.ts` and `tests/e2e/performance-assets.spec.ts`; Completion: both themes show stable asset frames without failed image indicators.
- [ ] T030 [US3] Create the reusable registry-driven logo fallback component with reserved frame, initials, text identity, and image error handling in `components/ui/logo.tsx`; Completion: approved SVGs render proportionately and fallback records make no image request or broken placeholder.
- [ ] T031 [US3] Migrate company and issuer logo wrappers to the shared fallback component in `components/ui/company-logo.tsx` and `components/ui/issuer-logo.tsx`; Completion: all company and issuer branding uses the same registry-based rendering path.
- [ ] T032 [US3] Create a normalized responsive certification card with logo area, issuer identity, title, spacing, and fallback behavior in `components/profile/certification-card.tsx`; Completion: each verified certification has the same structural treatment and remains text-identifiable.
- [ ] T033 [US3] Integrate the normalized certification cards and reserved asset styling in `components/profile/certification-section.tsx` and `styles/globals.css`; Completion: cards align across breakpoints and assets cannot cause layout shift.
- [ ] T034 [US3] Resolve audit findings by correcting or removing unapproved, missing, or unsuitable references in `config/brand-assets.ts`, `public/assets/brands/`, and `docs/content-sources.md`; Completion: every remaining approved asset passes local-file/provenance validation and every unresolved mark uses the fallback.

**Checkpoint**: US3 is independently testable with resilient, consistent company and credential brand treatments.

---

## Phase 6: User Story 4 - Use the portfolio accessibly at any target size (Priority: P2)

**Goal**: Make navigation, disclosure interaction, focus, contrast, motion, and layout robust for keyboard, assistive technology, and target viewport users.

**Independent Test**: At 375px, 768px, 1024px, and 1440px, a keyboard-only visitor can traverse every section and operate all eight disclosures with visible focus in either theme and under reduced motion.

- [ ] T035 [P] [US4] Add keyboard navigation and focus-order browser assertions for header, CTAs, disclosures, contact links, and footer in `tests/e2e/accessibility-refinement.spec.ts`; Completion: Tab, Enter, and Space work in logical order with visible focus that is never obscured.
- [ ] T036 [P] [US4] Add reduced-motion browser assertions for reveal and accordion behavior in `tests/e2e/motion.spec.ts`; Completion: enabled reduced motion preserves immediate state feedback and usable content.
- [ ] T037 [P] [US4] Add target-width, dark/light, and no-page-overflow assertions in `tests/e2e/responsive.spec.ts`; Completion: 375px, 768px, 1024px, and 1440px pass without clipping, misalignment, or horizontal overflow.
- [ ] T038 [US4] Apply semantic landmark, heading, discernible-name, focus-visible, and contrast corrections across `app/page.tsx`, `components/layout/site-header.tsx`, `components/profile/experience-accordion.tsx`, and `styles/globals.css`; Completion: WCAG AA contrast and semantic-control requirements are met without relying solely on logo, color, hover, or motion.
- [ ] T039 [US4] Correct responsive wrapping and overflow failures for cards, timeline, logos, actions, technology badges, and footer groups in `styles/globals.css`; Completion: content reflows safely from 320px through 1440px with all disclosures open.
- [ ] T040 [US4] Perform manual dual-theme accessibility review and production Lighthouse review, recording results in `docs/testing.md`; Completion: contrast, landmarks, headings, accessible names, announcements, layout shift, performance, accessibility, best practices, and SEO findings are resolved or explicitly documented.

**Checkpoint**: US4 is independently testable as keyboard-accessible, reduced-motion-safe, and responsive across the required viewport set.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Finish content safety, regression protection, documentation, and release-quality validation across all stories.

- [ ] T041 Remove or hide placeholder project content and conditionally render the Projects section only from publishable records in `app/page.tsx`; Completion: with current pending-only data, neither Projects content nor its navigation target appears in production output.
- [ ] T042 [P] Add project-publication and stale-navigation assertions in `tests/unit/content.test.ts` and `tests/e2e/professional-content.spec.ts`; Completion: pending, provisional, invented, and unverified projects cannot render publicly.
- [ ] T043 [P] Capture and review approved visual regression baselines for dark/light target widths and all-eight-open timeline state in `tests/e2e/experience-timeline.spec.ts`, `tests/e2e/responsive.spec.ts`, and `tests/e2e/certification-gallery.spec.ts`; Completion: screenshots are versioned only after human review accepts each baseline.
- [ ] T044 [P] Add a final broken-asset and no-overflow production browser check in `tests/e2e/performance-assets.spec.ts`; Completion: every image either loads or renders a fallback, and `document.documentElement.scrollWidth` never exceeds viewport width at required widths.
- [ ] T045 [P] Update implementation, asset provenance, responsive/accessibility, and validation guidance in `README.md`, `docs/content-sources.md`, and `docs/testing.md`; Completion: documentation explains registry rules, project filtering, local verification, and release commands.
- [ ] T046 Recheck professional-content evidence, privacy restrictions, metadata, and static-delivery compliance in `content/`, `app/layout.tsx`, `lib/metadata.ts`, and `docs/content-sources.md`; Completion: no unsupported claim, public phone number, secret, tracking, backend requirement, or unverified endorsement remains.
- [ ] T047 Run the complete automated quality gate using `package.json`; Completion: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run test:e2e`, and `npm run build` all pass.
- [ ] T048 Execute the end-to-end quickstart validation and record any resolved exceptions in `specs/007-modernize-sre-portfolio/quickstart.md`; Completion: both themes, all target widths, all eight disclosures, asset fallback, pending-project absence, footer integrity, accessibility, and Lighthouse checks are signed off.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)** has no dependencies and establishes the audit and test baseline.
- **Foundational (Phase 2)** depends on Setup and blocks all user-story implementation.
- **US1, US2, and US3** can begin after Phase 2. They should normally land in P1 order, but US2 and US3 can be worked in parallel with US1 when ownership avoids the shared `styles/globals.css` and `app/page.tsx` files.
- **US4** depends on the implemented shared controls and responsive styles from US1–US3.
- **Polish (Phase 7)** depends on all desired story work, with T041 required before final visual and content validations.

### User Story Dependencies

- **US1 (P1)**: Depends on T005–T010; no other story dependency.
- **US2 (P1)**: Depends on T005–T007 and T010; no other story dependency.
- **US3 (P1)**: Depends on T004, T005–T006, and T009; no other story dependency.
- **US4 (P2)**: Depends on the finalized interactive and responsive work from US1–US3.

### Parallel Opportunities

- In Phase 1, T002–T004 can run concurrently after T001’s migration map is available.
- In Phase 2, T008–T010 can run in parallel after the token/content-identity decisions are settled.
- In US2, T019–T021 can be authored in parallel before the component implementation; in US3, T028–T029 can be authored in parallel.
- In US4, T035–T037 can run in parallel; in Polish, T042–T045 can run in parallel after T041 is complete.

## Parallel Execution Examples

### User Story 2

```text
Task: "T019 Add accordion component tests in tests/components/experience-accordion.test.tsx"
Task: "T020 Add timeline structure tests in tests/components/experience-timeline.test.tsx"
Task: "T021 Add all-eight-open browser tests in tests/e2e/experience-timeline.spec.ts"
```

### User Story 3

```text
Task: "T028 Add brand registry validation in tests/unit/brand-assets.test.ts"
Task: "T029 Add asset rendering browser coverage in tests/e2e/certification-gallery.spec.ts"
```

## Implementation Strategy

### MVP First

1. Complete Setup and Foundational work.
2. Complete US1 and validate the senior SRE proposition, contact path, and core section hierarchy.
3. Complete US2 next; it is the highest-risk content interaction and needs the all-eight-open checks before the rest of the polish work.
4. Stop after each checkpoint for independent validation.

### Incremental Delivery

1. Add US1 for credible first-view positioning.
2. Add US2 for the timeline and eight accessible responsibility disclosures.
3. Add US3 for resilient asset and certification presentation.
4. Add US4 and the final cross-cutting quality gates before release.

## Format Validation

All 48 tasks use the required checklist format: checkbox, sequential task ID, `[P]` only where safely parallelizable, user-story label for story tasks, exact file path, and an explicit completion criterion.
