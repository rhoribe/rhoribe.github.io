# Tasks: Enhance Portfolio Visuals

**Input**: Design documents from `/specs/003-enhance-portfolio-visuals/`

**Prerequisites**: [plan.md](plan.md), [spec.md](spec.md), [research.md](research.md), [data-model.md](data-model.md), [visual-ui-contract.md](contracts/visual-ui-contract.md), and [quickstart.md](quickstart.md)

**Tests**: Unit/component and end-to-end tests are required because the constitution requires validation of accessibility, navigation, themes, responsive behavior, motion preferences, and production output.

## Phase 1: Dependencies and Foundations

**Purpose**: Establish the approved dependency and token baseline without changing published content.

- [X] T001 Add the `simple-icons` dependency and lockfile entry in `package.json` and `package-lock.json`.
  - Depends on: none. Acceptance: only Simple Icons is added; existing Lucide React and Framer Motion remain present. Tests: `npm run build`.
- [X] T002 [P] Record baseline production build output and icon/motion bundle evidence in `docs/testing.md`.
  - Depends on: none. Acceptance: documented baseline identifies generated page chunks and current build success. Tests: `npm run build`.
- [X] T003 [P] Define shared icon semantic, size, brand-color, and accessibility types in `types/icon.ts`.
  - Depends on: T001. Acceptance: closed unions cover generic icon names, brands, technologies, size variants, and decorative/functional props. Tests: `npm run typecheck`.
- [X] T004 Extend shared motion and visual design tokens in `lib/motion.ts` and `styles/globals.css`.
  - Depends on: none. Acceptance: centralized duration, easing, reveal-distance, stagger, icon-size, glow, and card-elevation tokens exist with no duplicated timing literals in planned consumers. Tests: `npm run typecheck` and `npm run lint`.
- [ ] T005 [P] Add dependency and tree-shaking assertions in `tests/unit/icon-config.test.ts`.
  - Depends on: T001, T003. Acceptance: tests assert selected semantic mappings and prohibit broad runtime icon registries. Tests: `npm run test -- icon-config`.

## Phase 2: Semantic Icon System

**Purpose**: Build the shared semantic registry and accessible primitives that block all icon-bearing sections.

- [X] T006 Create generic semantic icon mappings with per-symbol Lucide imports in `config/icons.ts`.
  - Depends on: T003. Acceptance: all navigation/category/action semantics in the plan resolve to a generic icon without importing an entire library. Tests: `tests/unit/icon-config.test.ts`.
- [X] T007 [P] Create approved brand mappings and generic fallbacks in `config/icons.ts`.
  - Depends on: T001, T003. Acceptance: only listed permitted brands resolve to official marks; missing/unpermitted brands resolve to a generic semantic icon. Tests: `tests/unit/icon-config.test.ts`.
- [X] T008 [P] Create the approved technology metadata registry in `config/technologies.ts`.
  - Depends on: T003, T007. Acceptance: every technology identifier has a generic fallback and optional approved brand reference. Tests: `tests/unit/icon-config.test.ts`.
- [X] T009 Implement the generic semantic renderer in `components/icons/app-icon.tsx`.
  - Depends on: T003, T006. Acceptance: size, `className`, decorative, title, and informative-label behavior follow the visual UI contract. Tests: `tests/components/icon-primitives.test.tsx`.
- [X] T010 [P] Implement the approved official-mark renderer in `components/icons/brand-icon.tsx`.
  - Depends on: T003, T007. Acceptance: it accepts only typed approved brands and never emits an empty visual for a missing mapping. Tests: `tests/components/icon-primitives.test.tsx`.
- [X] T011 [P] Implement technology-to-brand/fallback resolution in `components/icons/technology-icon.tsx`.
  - Depends on: T008, T009, T010. Acceptance: each technology produces a permitted mark or configured generic fallback. Tests: `tests/components/icon-primitives.test.tsx`.
- [X] T012 [P] Implement the non-interactive icon container in `components/icons/icon-badge.tsx`.
  - Depends on: T009, T011. Acceptance: compact/regular/hero variants preserve text spacing, remain non-focusable, and hide decorative icons from assistive technology. Tests: `tests/components/icon-primitives.test.tsx`.
- [X] T013 Implement the accessible icon-only action primitive in `components/icons/icon-button.tsx`.
  - Depends on: T009. Acceptance: label is required, native anchor/button behavior is preserved, and keyboard focus/touch target styling is supplied. Tests: `tests/components/icon-primitives.test.tsx`.
- [X] T014 [P] Export the public icon primitives from `components/icons/index.ts`.
  - Depends on: T009, T010, T011, T012, T013. Acceptance: consumers import only public primitives, not registry internals. Tests: `npm run typecheck`.
- [ ] T015 Add mapping, fallback, decorative-icon, and accessible-name coverage in `tests/components/icon-primitives.test.tsx`.
  - Depends on: T006-T013. Acceptance: tests verify `aria-hidden` decoration, one accessible name for functional controls, brand fallback, and size rendering. Tests: `npm run test -- icon-primitives`.

## Phase 3: Shared Motion System

**Purpose**: Refine the existing motion primitives so all later stories use one accessible, mobile-safe behavior.

- [ ] T016 Refine common reveal/menu/timeline variants and reduced-motion outcomes in `lib/motion.ts`.
  - Depends on: T004. Acceptance: all variants use shared tokens and offer immediate/minimal reduced alternatives. Tests: `tests/unit/motion.test.ts`.
- [ ] T017 [P] Update `components/motion/reveal.tsx`, `components/motion/animated-section.tsx`, and `components/motion/animated-text.tsx` to use the shared no-hidden-content contract.
  - Depends on: T016. Acceptance: content is readable before hydration, reveals run once, and reduced motion omits displacement. Tests: `tests/components/motion-primitives.test.tsx`.
- [ ] T018 [P] Update `components/motion/stagger-container.tsx` and `components/motion/motion-provider.tsx` for bounded stagger and global user preference handling.
  - Depends on: T016. Acceptance: stagger is tokenized, bounded, and reduced-motion safe. Tests: `tests/components/motion-primitives.test.tsx`.
- [ ] T019 Update `components/motion/interactive-card.tsx` and `components/motion/motion-safe.tsx` for fine-pointer-only effects and listener cleanup.
  - Depends on: T004, T016. Acceptance: tilt/spotlight capability checks exclude touch and reduced-motion contexts; reset/cleanup occurs on exit/unmount. Tests: `tests/components/motion-primitives.test.tsx`.
- [X] T020 Add motion preference, no-script baseline, and compact-screen behavior in `styles/globals.css`.
  - Depends on: T004, T016. Acceptance: reduced mode uses static/minimal effects; mobile uses shorter/smaller motion; default CSS does not conceal content. Tests: `tests/e2e/motion.spec.ts`.
- [ ] T021 Add reduced-motion and fallback tests in `tests/unit/motion.test.ts` and `tests/components/motion-primitives.test.tsx`.
  - Depends on: T016-T020. Acceptance: tests cover immediate reduced variants, no pointer enhancement on coarse input, and readable fallback output. Tests: `npm run test -- motion`.

## Phase 4: User Story 3 — Navigation and Equal Access (Priority: P1)

**Goal**: Visitors can navigate and operate icon-enhanced controls through desktop, mobile, keyboard, and assistive technology.

**Independent Test**: At desktop and mobile widths, navigate each section via visible label/icon links, operate the mobile menu by keyboard, close it with Escape, and verify focus returns to its trigger.

- [X] T022 [P] [US3] Add typed icon semantics while preserving labels and anchors in `content/navigation.ts`.
  - Depends on: T003, T006. Acceptance: each existing primary destination has a relevant semantic identifier and visible label. Tests: `tests/unit/content.test.ts`.
- [X] T023 [US3] Render desktop and mobile navigation icons, active state, and accessible labels in `components/layout/site-header.tsx`.
  - Depends on: T014, T022. Acceptance: both navigation variants show text plus icons; active link has `aria-current` and a non-color-only indicator. Tests: `tests/components/site-header.test.tsx`.
- [ ] T024 [US3] Complete mobile-menu transition, Escape, focus restoration, and scoped scroll-lock cleanup in `components/layout/site-header.tsx`.
  - Depends on: T016, T023. Acceptance: toggle/link/Escape closes correctly, no stale body lock/listener remains, and trigger focus is restored where required. Tests: `tests/components/site-header.test.tsx` and `tests/e2e/navigation.spec.ts`.
- [X] T025 [US3] Add header surface, active-indicator, navigation-icon, focus, and mobile layout styles in `styles/globals.css`.
  - Depends on: T004, T023. Acceptance: scrolled header remains legible in both themes and primary mobile links retain readable icon/text spacing. Tests: `tests/e2e/navigation.spec.ts`.
- [ ] T026 [US3] Add keyboard, mobile-navigation, icon-accessibility, and direct-hash journeys in `tests/components/site-header.test.tsx` and `tests/e2e/navigation.spec.ts`.
  - Depends on: T023-T025. Acceptance: tests cover icon labels, active navigation, Escape, focus restoration, keyboard activation, and 320px layout. Tests: `npm run test -- site-header` and `npm run test:e2e -- navigation`.

## Phase 5: User Story 1 — Hero Positioning and Purposeful Motion (Priority: P1)

**Goal**: The opening view communicates professional positioning immediately with restrained, theme-aware context and motion.

**Independent Test**: Load the page in both themes and reduced-motion mode; primary hero text/actions are usable immediately while decorative infrastructure visuals remain non-interactive and responsive.

- [ ] T027 [P] [US1] Add approved hero and About semantic cue metadata in `content/profile.ts`.
  - Depends on: T003, T006. Acceptance: cues only reinforce existing verified cloud, reliability, infrastructure, automation, and leadership content; no new metric/claim is introduced. Tests: `tests/unit/content.test.ts`.
- [X] T028 [US1] Render hero status, visible-text actions, contextual icons, and staggered entrance integration in `app/page.tsx`.
  - Depends on: T014, T017, T027. Acceptance: headline/copy/actions remain normal readable text; status reads exactly as specified; actions have recognizable icons and accessible names. Tests: `tests/e2e/motion.spec.ts`.
- [ ] T029 [US1] Refine lightweight node/connection/data-flow SVG behavior in `components/visuals/infrastructure-nodes.tsx`.
  - Depends on: T016, T019. Acceptance: SVG has stable dimensions, `aria-hidden`, `pointer-events: none`, static reduced state, and bounded decorative animation. Tests: `tests/components/infrastructure-nodes.test.tsx`.
- [X] T030 [US1] Add hero gradients, node containment, responsive simplification, and no-layout-shift styles in `styles/globals.css`.
  - Depends on: T004, T028, T029. Acceptance: decorative layers cannot cause overflow, obscure text, or delay interaction; mobile/reduced presentation is simpler. Tests: `tests/e2e/motion.spec.ts` and `tests/e2e/responsive.spec.ts`.
- [ ] T031 [US1] Add hero entrance, reduced/static visual, and layout-stability checks in `tests/components/infrastructure-nodes.test.tsx` and `tests/e2e/motion.spec.ts`.
  - Depends on: T028-T030. Acceptance: tests verify accessible primary content, decorative exclusion, reduced behavior, and stable bounding box/no horizontal overflow. Tests: `npm run test -- infrastructure-nodes` and `npm run test:e2e -- motion`.

## Phase 6: User Story 2 — About and Expertise Scannability (Priority: P1)

**Goal**: Visitors can scan professional highlights and technical disciplines with consistent, verified iconography and accessible card feedback.

**Independent Test**: Inspect About and every expertise category at desktop, touch, and keyboard states; categories/text remain complete without ratings or hover-only data.

- [ ] T032 [P] [US2] Convert expertise tuples to typed semantic category/technology records in `content/expertise.ts` and `lib/content.ts`.
  - Depends on: T003, T008. Acceptance: every existing category has one generic icon and only existing technologies use approved identifiers. Tests: `tests/unit/content.test.ts`.
- [X] T033 [US2] Render About highlights, expertise category icons, technology badges, and staggered cards in `app/page.tsx`.
  - Depends on: T012, T014, T018, T027, T032. Acceptance: icons support visible text, permitted technology marks have fallback, and no percentages/ratings are rendered. Tests: `tests/components/expertise-section.test.tsx`.
- [X] T034 [US2] Add expertise badge/card hover, focus-within, touch, and responsive styles in `styles/globals.css`.
  - Depends on: T004, T019, T033. Acceptance: interaction feedback is subtle, theme-safe, and available through keyboard/touch without oversized icons. Tests: `tests/e2e/responsive.spec.ts`.
- [ ] T035 [US2] Add content-integrity, technology-fallback, focus, and touch tests in `tests/components/expertise-section.test.tsx` and `tests/e2e/responsive.spec.ts`.
  - Depends on: T033-T034. Acceptance: tests reject unknown technology identifiers and confirm no hover-only information/artificial ratings. Tests: `npm run test -- expertise-section`.

## Phase 7: User Story 2 — Experience Timeline (Priority: P1)

**Goal**: Visitors can read experience chronologically with relevant role cues and optional progress feedback that does not alter semantic list order.

**Independent Test**: Read the timeline with a keyboard and at mobile width; entries remain a complete ordered list while progress/active styling becomes static under reduced motion.

- [X] T036 [P] [US2] Add role-icon and optional verified metadata fields to `content/experience.ts` and `lib/content.ts`.
  - Depends on: T003, T006. Acceptance: every role maps to a relevant semantic icon; absent date/location values remain absent. Tests: `tests/unit/content.test.ts`.
- [X] T037 [US2] Render role, location/date cues, one-time entry reveals, and active-entry semantics in `app/page.tsx` and `components/motion/scroll-progress.tsx`.
  - Depends on: T012, T017, T036. Acceptance: ordered list reading order is retained and active state does not rely on color alone. Tests: `tests/components/experience-timeline.test.tsx`.
- [X] T038 [US2] Add progress-line, active-entry, mobile vertical, and reduced-motion static styles in `styles/globals.css`.
  - Depends on: T004, T037. Acceptance: mobile is a simple vertical list, progress is decorative, and static state is complete. Tests: `tests/e2e/responsive.spec.ts` and `tests/e2e/motion.spec.ts`.
- [ ] T039 [US2] Add semantic-order, icon fallback, reduced-motion, and responsive timeline tests in `tests/components/experience-timeline.test.tsx` and `tests/e2e/motion.spec.ts`.
  - Depends on: T037-T038. Acceptance: tests confirm role icon output, no invented metadata, and complete mobile/reduced reading experience. Tests: `npm run test -- experience-timeline`.

## Phase 8: User Story 2 — Certifications and Education (Priority: P1)

**Goal**: Visitors can distinguish credentials and education using compact, accurate visual cues.

**Independent Test**: Review every card in both themes and with keyboard focus; category/platform cues are visible while missing dates/IDs/details remain unavailable.

- [ ] T040 [P] [US2] Convert credential and education strings to typed icon-bearing records in `content/credentials.ts` and `lib/content.ts`.
  - Depends on: T003, T007. Acceptance: AWS/approved platform cues use approved mappings; general credentials/education use generic semantics; absent optional data is omitted. Tests: `tests/unit/content.test.ts`.
- [X] T041 [US2] Render certification and education icon badges and card transitions in `app/page.tsx`.
  - Depends on: T012, T040. Acceptance: cards retain text hierarchy and no issue/expiry/identifier/verification data is invented. Tests: `tests/components/credentials-section.test.tsx`.
- [X] T042 [US2] Add credential/education card focus-equivalent and responsive styles in `styles/globals.css`.
  - Depends on: T004, T019, T041. Acceptance: keyboard feedback matches hover, cards remain consistently sized where practical, and contrast works in both themes. Tests: `tests/e2e/responsive.spec.ts`.
- [ ] T043 [US2] Add missing-optional-data, accessible-decoration, focus, and width tests in `tests/components/credentials-section.test.tsx` and `tests/e2e/responsive.spec.ts`.
  - Depends on: T041-T042. Acceptance: tests confirm no unsupported detail renders and all icon-bearing cards remain readable at 320px. Tests: `npm run test -- credentials-section`.

## Phase 9: User Story 2 — Projects (Priority: P1)

**Goal**: Visitors can recognize verified project technologies and available project actions without hover dependence.

**Independent Test**: Inspect pending and verified project records with mouse, keyboard, and touch emulation; essential text remains visible and actions only appear when source data exists.

- [ ] T044 [P] [US2] Extend typed project semantics for verified technologies and optional actions in `content/projects.ts` and `lib/content.ts`.
  - Depends on: T003, T008. Acceptance: pending project records remain valid; repository/demo/update/featured properties are optional and never inferred. Tests: `tests/unit/content.test.ts`.
- [ ] T045 [US2] Render project technology, repository, GitHub, external-link, and metadata cues conditionally in `app/page.tsx`.
  - Depends on: T011, T012, T014, T044. Acceptance: icons map only to present verified data; external/repository actions have meaningful names and visible text/context. Tests: `tests/components/project-card.test.tsx`.
- [ ] T046 [US2] Add project link micro-interactions and card focus/touch-safe styles in `styles/globals.css`.
  - Depends on: T004, T019, T045. Acceptance: arrow/link movement is subtle; essential information is never hidden behind hover. Tests: `tests/e2e/responsive.spec.ts`.
- [ ] T047 [US2] Add pending-data, action accessibility, hover/focus parity, and touch tests in `tests/components/project-card.test.tsx` and `tests/e2e/responsive.spec.ts`.
  - Depends on: T045-T046. Acceptance: tests confirm no invented repository fields and equal keyboard/touch discoverability. Tests: `npm run test -- project-card`.

## Phase 10: User Story 3 — Contact and Footer Actions (Priority: P1)

**Goal**: Visitors can recognize and use permitted contact/source/platform actions without exposing restricted personal data.

**Independent Test**: Inspect contact/footer in keyboard and screen-reader modes; actions have labels and icons, while a phone number is absent.

- [ ] T048 [P] [US3] Add verified semantic contact and footer reference metadata in `content/profile.ts` and `lib/site-config.ts`.
  - Depends on: T003, T006, T008. Acceptance: only verified LinkedIn/GitHub/email/resume/location/platform records are represented; no phone field is added. Tests: `tests/unit/content.test.ts`.
- [ ] T049 [US3] Render contact actions and lightweight footer icons in `app/page.tsx`.
  - Depends on: T013, T014, T048. Acceptance: functional actions have accessible names; platform/footer cues do not dominate text; unavailable actions remain unavailable. Tests: `tests/components/contact-footer.test.tsx`.
- [ ] T050 [US3] Add contact/footer focus, pressed, contrast, and density styles in `styles/globals.css`.
  - Depends on: T004, T049. Acceptance: touch/keyboard feedback is visible in both themes and footer remains visually secondary. Tests: `tests/e2e/privacy.spec.ts`.
- [ ] T051 [US3] Add accessible-name, phone-exclusion, safe-link, and footer-density tests in `tests/components/contact-footer.test.tsx` and `tests/e2e/privacy.spec.ts`.
  - Depends on: T049-T050. Acceptance: tests assert no phone content and label every functional icon action exactly once. Tests: `npm run test -- contact-footer`.

## Phase 11: User Story 4 — Theme and Visual Polish (Priority: P2)

**Goal**: Visitors receive a deliberate dual-theme visual system with controlled transitions and equivalent icon contrast.

**Independent Test**: Switch/reload both themes; verify persisted selection, no incorrect-theme flash, visible icon/focus contrast, and no global transition artifacts.

- [X] T052 [US4] Integrate semantic theme-control icons and controlled state animation in `components/layout/theme-toggle.tsx`.
  - Depends on: T013, T016. Acceptance: toggle retains its current accessible name/behavior and reduces motion when requested. Tests: `tests/unit/theme.test.ts`.
- [X] T053 [US4] Add dual-theme icon, brand-hover, glow, gradient, and scoped transition tokens in `styles/globals.css`.
  - Depends on: T004, T052. Acceptance: default icons inherit current color; highlights meet contrast; transition properties are explicitly limited. Tests: `tests/e2e/motion.spec.ts`.
- [ ] T054 [US4] Preserve pre-hydration theme selection and mount motion configuration in `app/layout.tsx`.
  - Depends on: T018, T052. Acceptance: initial saved/system theme is applied before visual content; no new client data dependency is introduced. Tests: `tests/unit/theme.test.ts`.
- [ ] T055 [US4] Add persisted-theme, wrong-theme-flash, icon-contrast, and reduced-toggle tests in `tests/unit/theme.test.ts` and `tests/e2e/motion.spec.ts`.
  - Depends on: T052-T054. Acceptance: both themes expose a clear focus/control state and reduced motion avoids decorative rotation/travel. Tests: `npm run test -- theme`.

## Phase 12: Optional Desktop Effects

**Purpose**: Add only capability-gated decoration after core stories pass.

- [ ] T056 Add optional precise-pointer spotlight behavior in `components/motion/pointer-spotlight.tsx` and `app/page.tsx`.
  - Depends on: T019, T028. Acceptance: effect is decorative, fine-pointer-only, reduced-motion-off, non-intercepting, and removed on unmount. Tests: `tests/components/pointer-spotlight.test.tsx`.
- [ ] T057 Add optional controlled card-tilt activation and mobile/reduced disabling in `components/motion/interactive-card.tsx` and `styles/globals.css`.
  - Depends on: T019, T034. Acceptance: tilt is bounded, absent on touch/reduced motion, and does not replace focus feedback. Tests: `tests/components/motion-primitives.test.tsx`.
- [ ] T058 Add capability, pointer-event, and cleanup coverage in `tests/components/pointer-spotlight.test.tsx` and `tests/components/motion-primitives.test.tsx`.
  - Depends on: T056-T057. Acceptance: tests prove decoration does not intercept pointers and listeners are cleaned up. Tests: `npm run test -- pointer-spotlight`.

## Phase 13: Accessibility Validation

**Purpose**: Verify the complete visual system satisfies the accessibility contract.

- [ ] T059 [P] Add cross-section decorative/functional icon, duplicate-announcement, and touch-target checks in `tests/components/icon-accessibility.test.tsx`.
  - Depends on: T015, T026, T031, T035, T039, T043, T047, T051. Acceptance: every sampled decorative icon is hidden and every icon-only action has exactly one meaningful accessible name. Tests: `npm run test -- icon-accessibility`.
- [ ] T060 [P] Add keyboard focus, mobile-menu, reduced-motion, and theme-contrast accessibility journeys in `tests/e2e/accessibility.spec.ts`.
  - Depends on: T026, T031, T055, T058. Acceptance: E2E scenarios cover keyboard-only, touch, both themes, reduced motion, and focus restoration. Tests: `npm run test:e2e -- accessibility`.
- [ ] T061 Run automated accessibility checks and document manual screen-reader/contrast findings in `docs/testing.md`.
  - Depends on: T059, T060. Acceptance: findings include decorative exclusion, labels, focus, contrast, and exceptions/remediation; no unresolved critical issue remains. Tests: `npm run test` and `npm run test:e2e`.

## Phase 14: Performance Validation

**Purpose**: Verify the enhancement remains stable, efficient, and progressive.

- [X] T062 Compare pre/post build output, confirm selected icon imports, and record bundle evidence in `docs/testing.md`.
  - Depends on: T002, T015, T058. Acceptance: documentation confirms no full icon bundle and explains any measurable change. Tests: `npm run build`.
- [ ] T063 Add layout-shift, primary-content, off-screen-animation, and observer/listener cleanup checks in `tests/e2e/performance.spec.ts` and `tests/components/motion-primitives.test.tsx`.
  - Depends on: T031, T058. Acceptance: hero content appears promptly, visual effects do not cause horizontal overflow/intentional shift, and cleanup is test-covered. Tests: `npm run test` and `npm run test:e2e -- performance`.
- [ ] T064 Run a production-build Lighthouse audit and record performance/accessibility/best-practice/SEO results in `docs/testing.md`.
  - Depends on: T062, T063. Acceptance: audit is run against production output and any below-target result has a documented remediation task before release. Tests: production Lighthouse command documented in `docs/testing.md`.

## Phase 15: Responsive and Cross-Browser Validation

**Purpose**: Validate professional, complete presentation across required devices, modes, and supported browsers.

- [ ] T065 Expand viewport/theme/motion/input matrix in `tests/e2e/responsive.spec.ts` and `docs/testing.md`.
  - Depends on: T060, T063. Acceptance: automated/manual matrix covers 320, 375, 768, 1024, 1440, and 1920px; light/dark/saved theme; reduced motion; keyboard; touch; fine pointer; no overflow/clipped glows/oversized icons/layout shift. Tests: `npm run test:e2e -- responsive`.
- [ ] T066 Run and document Chrome, Edge, Firefox, and Safari validation in `docs/testing.md` and `playwright.config.ts`.
  - Depends on: T065. Acceptance: supported-browser results record navigation, themes, icon rendering, reduced motion, and static output behavior; any non-automated Safari/Edge step is explicitly documented. Tests: `npm run test:e2e`.

## Phase 16: Build, Deployment, and Documentation

**Purpose**: Apply final quality gates and confirm deployable GitHub Pages output.

- [ ] T067 Update iconography, motion, accessibility, and validation documentation in `README.md` and `docs/testing.md`.
  - Depends on: T061, T064, T066. Acceptance: documentation identifies semantic registry, approved brand/fallback rules, motion/reduced behavior, and validation commands. Tests: `npm run format:check`.
- [X] T068 Validate formatting, lint, strict typing, unit/component tests, and E2E tests from repository root.
  - Depends on: T067. Acceptance: all commands exit successfully with no skipped required suite. Tests: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run test:e2e`.
- [X] T069 Validate static export, GitHub Pages base paths, asset loading, and production deployment configuration in `next.config.ts`, `.github/workflows/deploy-pages.yml`, and `out/`.
  - Depends on: T068. Acceptance: exported assets/links resolve for user and project Pages paths and workflow retains fail-fast build gates. Tests: `npm run build` and deployment workflow validation.
- [ ] T070 Run the full quickstart release checklist in `specs/003-enhance-portfolio-visuals/quickstart.md`.
  - Depends on: T069. Acceptance: every automated and manual validation scenario is recorded as passed or remediated; feature is ready for deployment. Tests: all commands listed in `quickstart.md`.

## Dependencies & Execution Order

1. Phase 1 establishes the dependency/type/token baseline.
2. Phase 2 semantic icon primitives and Phase 3 shared motion primitives are the common foundation.
3. After Phases 1–3, US3 navigation/contact, US1 hero, and US2 content sections may proceed in parallel where their files do not overlap.
4. US4 theme polish depends on the icon and motion foundations but can proceed alongside later US2 section work.
5. Optional desktop effects follow core behavior; accessibility, performance, responsive, and deployment phases follow all selected stories.

### User Story Dependencies

- **US1 — Hero (P1)**: T027–T031; depends on icon/motion foundations only.
- **US2 — Scannable career content (P1)**: T032–T047; its About/expertise, timeline, credentials/education, and projects increments share foundations but are independently testable by subsection.
- **US3 — Equal access/navigation (P1)**: T022–T026 and T048–T051; depends on icon/motion foundations only.
- **US4 — Responsive themed system (P2)**: T052–T055; depends on foundations and preserves existing theme bootstrap.

## Parallel Opportunities

- T002, T003, and T005 can proceed alongside the non-overlapping foundation work.
- T006–T008 and T009–T014 have the marked per-file parallel work once their listed dependencies are complete.
- After T021, T022 (navigation), T027 (hero metadata), T032 (expertise metadata), T036 (experience metadata), T040 (credentials metadata), T044 (project metadata), and T048 (contact metadata) can be assigned in parallel.
- Accessibility tests (T059–T060) and performance evidence (T062) can run in parallel after their prerequisites.

## Implementation Strategy

### MVP First

1. Complete Phases 1–3.
2. Complete Phase 4 (US3 navigation) and Phase 5 (US1 hero).
3. Validate T026 and T031 independently before extending content-heavy sections.

### Incremental Delivery

1. Deliver the semantic icon/motion foundation.
2. Deliver navigation + hero as the first polished visitor experience.
3. Deliver About/expertise, timeline, credentials/education, and projects as independently validated US2 increments.
4. Deliver contact/footer, theme polish, optional desktop effects, then complete cross-cutting release gates.

## Format Validation

All 70 tasks use the required checkbox, sequential ID, optional `[P]`, story label for story work, and exact file-path format. Each task includes explicit dependencies, acceptance criteria, and relevant tests.
