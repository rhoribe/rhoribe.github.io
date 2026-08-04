# Tasks: Modern Portfolio Motion

**Input**: Design documents from `/specs/002-modern-portfolio-motion/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/motion-ui-contract.md, and quickstart.md

**Tests**: Automated unit and Playwright coverage is required because this feature changes responsive behavior, theme switching, navigation, accessibility, and production output.

## Format and validation keys

- `[P]` marks a task that may run in parallel after its stated dependencies, provided no other active task modifies the same files.
- `[US1]`–`[US4]` map to the feature specification's user stories.
- There are no existing completed tasks in this feature directory; new identifiers begin at `T001`. The completed/unchecked historical tasks in `specs/001-sre-portfolio/tasks.md` are not modified.
- Every task includes its files, dependencies, and acceptance criteria through the following compact validation keys:
  - `LT/DT`: validate the result in light and dark themes.
  - `RM`: validate `prefers-reduced-motion` behavior or explicitly static behavior.
  - `KB/TC`: validate keyboard focus/operation and touch/coarse-pointer behavior where the task creates an interaction; `N/A` means the task has no user interaction.
  - `A11Y`: validate semantics, focus, contrast, and no color-only required state as applicable.
  - `PERF`: validate bounded effects, no layout shift, and cleanup as applicable.

## Phase 1: Setup and shared motion foundation

**Purpose**: Add the one permitted animation dependency and establish reusable, preference-aware motion primitives before any visual feature work.

- [X] T001 Add the sole animation dependency and lockfile entry in package.json and package-lock.json. **Depends on**: none. **AC**: Framer Motion is the only new animation library; static export remains configured and buildable; LT/DT: N/A; RM: N/A; KB/TC: N/A; PERF: dependency addition is recorded for later bundle comparison.
- [X] T002 Create centralized motion duration, easing, distance, stagger, viewport, and reduced-motion variants in lib/motion.ts. **Depends on**: T001. **AC**: 150/220/320/480/600ms semantic tokens, 12px compact and 20–24px desktop reveal distances, and named hero/reveal/menu/timeline variants exist with no duplicated configuration; LT/DT: visual-neutral; RM: static/minimal variants are exported; KB/TC: N/A; PERF: concurrency limits are documented in code comments/types.
- [X] T003 Create the MotionProvider client boundary in components/motion/motion-provider.tsx and mount it without moving the existing theme bootstrap in app/layout.tsx. **Depends on**: T001, T002. **AC**: all children render normally before/after hydration; existing pre-hydration theme script and metadata remain intact; LT/DT: correct initial theme preserved; RM: user preference is propagated; KB/TC: N/A; A11Y: no focusable wrapper is introduced; PERF: provider adds no blocking loader.
- [X] T004 [P] Create reduced-motion and capability branch helpers in components/motion/motion-safe.tsx and components/motion/reduced-motion-fallback.tsx. **Depends on**: T002. **AC**: optional visuals select a static/minimal fallback under reduced motion, coarse/no-hover pointer, or compact viewport; LT/DT: fallback remains legible in both themes; RM: no essential information disappears; KB/TC: touch path does not require hover; PERF: inactive branch does not run pointer/continuous work.
- [ ] T005 [P] Add unit coverage for tokens, MotionProvider, and reduced/capability fallbacks in tests/unit/motion.test.tsx. **Depends on**: T002, T003, T004. **AC**: tests assert shared token boundaries, child rendering, and static reduced-motion output; LT/DT: provider does not overwrite theme state; RM: fallback selection is covered; KB/TC: noninteractive helpers remain unfocusable; PERF: no timer/listener leak in tested components.

**Checkpoint**: Shared motion configuration is usable without changing existing portfolio content or architecture.

## Phase 2: Visual foundation and global safeguards

**Purpose**: Establish theme-specific depth, background layers, and CSS interaction rules that every user story uses.

- [X] T006 Define dedicated light/dark surface, grid, radial-light, glow, border, shadow, focus, and limited-transition tokens in styles/globals.css. **Depends on**: T003. **AC**: both themes receive intentional non-inverted backgrounds with sufficient text/control contrast; no universal transition is added; RM: targeted rules eliminate nonessential CSS movement; KB/TC: focus styles remain visible on touch/keyboard; A11Y: color is not the only state signal; PERF: no continuous full-page blur.
- [X] T007 Build the CSS-only background system (grid, radial gradients, contained decorative shapes, fallbacks) in styles/globals.css. **Depends on**: T006. **AC**: layers stay behind content, do not intercept input, and cannot cause horizontal overflow; LT/DT: contrast and decoration are reviewed in both themes; RM: background movement is absent; KB/TC: N/A; A11Y: layers are decorative; PERF: mobile uses reduced complexity and no large animated blur.
- [X] T008 [P] Add CSS hover, focus-visible, focus-within, and pressed micro-interaction rules for buttons, links, cards, and external-link affordances in styles/globals.css. **Depends on**: T006. **AC**: 150–220ms property-limited transitions give equivalent focus feedback without large scale/rotation/layout movement; LT/DT: all states retain contrast; RM: interactions remain legible with minimized transition; KB/TC: focus and touch active states work without hover; A11Y: focus ring remains prominent.
- [ ] T009 [P] Add unit/source assertions for theme transition scope and global reduced-motion safeguards in tests/unit/theme.test.ts and tests/unit/motion.test.tsx. **Depends on**: T006. **AC**: tests reject universal transition behavior and confirm existing theme priority is unchanged; LT/DT: both theme token sets are covered; RM: targeted policy is covered; KB/TC: N/A; PERF: rules do not introduce layout-affecting animation.

**Checkpoint**: The static page has dedicated dual-theme visual depth and safe CSS feedback before motion wrappers are introduced.

## Phase 3: User Story 1 — recognize professional positioning (Priority: P1) 🎯 MVP

**Goal**: Make the hero immediately understandable, polished, and usable with an ordered entrance and restrained infrastructure visual.

**Independent Test**: On a fresh page load, a visitor can read Ricardo's existing positioning, see the approved status phrase, and activate the existing hero action immediately at desktop and mobile widths.

- [ ] T010 [US1] Create reusable one-time Reveal, StaggerContainer, AnimatedSection, and AnimatedText components in components/motion/reveal.tsx, components/motion/stagger-container.tsx, components/motion/animated-section.tsx, and components/motion/animated-text.tsx. **Depends on**: T002, T003, T004. **AC**: semantic children retain source order; reveals use shared variants, run once, and expose static/minimal reduced output; LT/DT: wrappers do not alter contrast; RM: text is immediately readable or minimally faded; KB/TC: wrappers do not change tab order or touch behavior; A11Y: text is not fragmented for screen readers; PERF: at most one stagger group is active in a reading area.
- [ ] T011 [P] [US1] Create the decorative inline infrastructure node SVG in components/visuals/infrastructure-nodes.tsx. **Depends on**: T002, T004. **AC**: SVG uses only a small node/connection set, has `aria-hidden` and nonfocusable output, and offers static/reduced variants; LT/DT: node/path contrast is appropriate but secondary; RM: no data-flow movement; KB/TC: no focus/pointer dependency; A11Y: no required content conveyed; PERF: maximum three changing primitives and no canvas/WebGL/video.
- [ ] T012 [US1] Compose the existing hero in app/page.tsx with staggered heading/support/action, the approved "Building resilient cloud platforms" status, and InfrastructureNodes while preserving existing content/actions. **Depends on**: T006, T007, T010, T011. **AC**: primary text/action are usable within one second and no full-screen loader is introduced; LT/DT: hero remains readable over dedicated backgrounds; RM: content is static/minimal and visual is static; KB/TC: action retains visible focus and touch activation; A11Y: decorative output is ignored and status is ordinary text; PERF: no hydration-hidden content or layout shift.
- [ ] T013 [P] [US1] Add hero/component tests in tests/unit/hero-motion.test.tsx and end-to-end initial-load checks in tests/e2e/hero.spec.ts. **Depends on**: T010, T011, T012. **AC**: tests cover approved status wording, immediate semantic content, one-time behavior, decorative accessibility, and hero action; LT/DT: test each theme class/state; RM: static fallback asserted; KB/TC: action focus and touch/click remain usable; PERF: test confirms no hidden pre-hydration content selector/state.

**Checkpoint**: User Story 1 is independently complete and demonstrable without navigation/timeline/card enhancements.

## Phase 4: User Story 2 — explore content with comfortable motion (Priority: P1)

**Goal**: Provide scroll-aware orientation, controlled mobile navigation, and readable one-time section entrances.

**Independent Test**: A visitor can navigate by anchor, scroll, or keyboard through every existing section; active location, header state, and mobile-menu behavior remain correct in both themes and reduced-motion mode.

- [ ] T014 [US2] Implement scroll-aware header and active-section detection with active-link indicator in components/layout/site-header.tsx. **Depends on**: T002, T003, T006. **AC**: existing hrefs/anchors remain unchanged, direct hashes are handled, active link has `aria-current="location"` plus non-color-only indicator, and header gains a legible scrolled state; LT/DT: header/indicator contrast passes; RM: indicator changes without distracting travel; KB/TC: links remain keyboard/touch operable; A11Y: semantics and focus order preserved; PERF: observer/passive work is cleaned up.
- [ ] T015 [US2] Add presence-based mobile-menu entrance/exit, Escape handling, close-on-link behavior, and focus restoration in components/layout/site-header.tsx. **Depends on**: T014. **AC**: `aria-expanded` stays synchronized; close via control, Escape, and link returns focus to the trigger; LT/DT: menu surface is readable; RM: menu opens/closes immediately or minimally; KB/TC: keyboard and touch both reach/close every link; A11Y: no focus trap or inaccessible background state; PERF: listeners are removed on close/unmount.
- [ ] T016 [US2] Integrate AnimatedSection and bounded staggered child reveals around the existing sections in app/page.tsx. **Depends on**: T010, T014. **AC**: all existing section IDs/content remain present and each intended reveal runs at most once; LT/DT: entering content remains readable; RM: immediate/minimal presentation; KB/TC: no changed tab order or touch target; A11Y: content stays available if observer/script fails; PERF: only visible group animates and no layout properties are animated.
- [ ] T017 [P] [US2] Add header/menu unit coverage in tests/unit/site-header.test.tsx. **Depends on**: T014, T015. **AC**: tests cover active/current semantics, scrolled class/state, Escape, close paths, and focus restoration; LT/DT: style state hooks/classes are asserted; RM: reduced menu variant asserted; KB/TC: keyboard sequence and touch-click path covered; A11Y: button/name/expanded state covered; PERF: listener cleanup is covered where testable.
- [ ] T018 [P] [US2] Extend navigation and reduced-motion browser coverage in tests/e2e/navigation.spec.ts and tests/e2e/accessibility.spec.ts. **Depends on**: T014, T015, T016. **AC**: tests cover anchor navigation, direct hash, active indicator, scrolled header, mobile Escape/focus return, and section visibility; LT/DT: browser tests run under both theme states; RM: reduced-motion sections/menu remain complete; KB/TC: keyboard-only and touch-emulated flows pass; A11Y: focus never becomes obscured; PERF: no hidden content before hydration is checked.

**Checkpoint**: User Story 2 is independently complete: navigation, scrolling, and content access are comfortable without requiring the remaining card/timeline polish.

## Phase 5: User Story 3 — inspect experience and expertise (Priority: P2)

**Goal**: Improve chronology and technology scanability with progressive, accessible, touch-safe feedback.

**Independent Test**: A visitor can read every existing experience and expertise item, see only non-essential progress/depth feedback, and use the same information with keyboard, touch, and reduced motion.

- [ ] T019 [US3] Create the ScrollProgress timeline wrapper in components/motion/scroll-progress.tsx. **Depends on**: T002, T003, T004. **AC**: the existing ordered list remains semantic; one decorative progress line uses scroll-relative scale and item visibility supplies active styling; LT/DT: line/active contrast passes; RM: complete static line with no progress movement; KB/TC: reading/navigation unaffected on keyboard and touch; A11Y: progress is decorative; PERF: no handwritten permanent scroll listener and maximum two active effects.
- [ ] T020 [US3] Integrate progressive experience reveals, active-entry styling, and simple mobile timeline in app/page.tsx and styles/globals.css. **Depends on**: T006, T016, T019. **AC**: all existing entries/pending text remain readable, mobile is vertical without overflow, and active style is non-color-only; LT/DT: timeline/card contrast passes; RM: entries and final line are static/minimal; KB/TC: no focus/read obstruction and touch scrolling stays smooth; A11Y: ordered-list semantics retained; PERF: no layout shift/continuous mobile effect.
- [ ] T021 [US3] Create InteractiveCard with optional fine-pointer-only tilt and CSS-equivalent focus-within behavior in components/motion/interactive-card.tsx. **Depends on**: T004, T006, T008. **AC**: it renders an `article`, never adds tabIndex to informational cards, and limits optional movement to supported fine pointers; LT/DT: surface/border/shadow contrast passes; RM: tilt disabled; KB/TC: focus-within/touch states equal hover affordance; A11Y: content never obscured; PERF: pointer tracking is rAF-bounded and cleaned up.
- [ ] T022 [US3] Replace existing expertise-card composition with InteractiveCard and staggered badge/category feedback in app/page.tsx and styles/globals.css. **Depends on**: T016, T021. **AC**: existing categories/skills remain unscored and readable; LT/DT: badge and card states pass contrast; RM: immediate/minimal reveal with no tilt; KB/TC: keyboard focus/touch do not need hover; A11Y: no artificial proficiency/state communicated only by color; PERF: card effects remain bounded.
- [ ] T023 [P] [US3] Add timeline, card, and expertise tests in tests/unit/scroll-progress.test.tsx, tests/unit/interactive-card.test.tsx, and tests/e2e/experience.spec.ts. **Depends on**: T019, T020, T021, T022. **AC**: tests cover ordered entries, static reduced timeline, active-state semantics, fine-pointer gating, no scoring, and no mobile overflow; LT/DT: both theme styles/states covered; RM: disabled paths asserted; KB/TC: focus-within and touch/click behavior covered; A11Y: decorative line/SVG is excluded; PERF: no persistent listener assertion where testable.

**Checkpoint**: User Story 3 is independently complete and the timeline/expertise remain fully readable without motion.

## Phase 6: User Story 4 — evaluate projects and contact actions (Priority: P2)

**Goal**: Make existing project and action cards feel responsive while preserving pending-data integrity.

**Independent Test**: A visitor can distinguish existing pending projects from verified actions and receives equivalent hover, focus, and touch feedback without invented repository information.

- [ ] T024 [US4] Apply InteractiveCard and conditional secondary-action/arrow affordances to existing project cards in app/page.tsx and styles/globals.css. **Depends on**: T008, T021. **AC**: pending project copy/absence of unverified links is preserved; verified future actions remain visible on touch/focus/hover and arrow movement is supplementary; LT/DT: card/link states pass contrast; RM: no unnecessary movement; KB/TC: real controls receive focus and touch actions are visible; A11Y: no hidden-only essential action; PERF: no layout movement from metadata reveal.
- [ ] T025 [P] [US4] Complete certification and education InteractiveCard integration in app/page.tsx and styles/globals.css. **Depends on**: T008, T021. **AC**: all existing credential/education text remains visible and card feedback is restrained; LT/DT: surface/border states pass; RM: no tilt/reveal travel beyond minimal; KB/TC: focus behavior matches pointer/touch behavior; A11Y: informational cards remain non-tab-stopped; PERF: no simultaneous large card effects.
- [ ] T026 [US4] Apply primary button, in-page link, external-link icon, and press feedback to existing controls in app/page.tsx, components/layout/site-header.tsx, components/layout/theme-toggle.tsx, and styles/globals.css. **Depends on**: T008, T014. **AC**: feedback is fast, property-limited, and does not alter action destinations/content; LT/DT: normal/hover/focus/press contrast passes; RM: state remains visible with minimal transition; KB/TC: focus and touch pressed feedback works; A11Y: focus is at least as clear as hover; PERF: no universal transition or layout animation.
- [ ] T027 [P] [US4] Add project, credential, and action interaction tests in tests/unit/project-card-motion.test.tsx and tests/e2e/interactions.spec.ts. **Depends on**: T024, T025, T026. **AC**: tests confirm pending links are absent, card text/actions remain available, focus equivalence, and touch activation; LT/DT: execute theme matrix; RM: no required animation; KB/TC: keyboard-only/touch-emulated paths pass; A11Y: focus-visible and no hidden action are asserted; PERF: secondary state does not change measured layout dimensions.

**Checkpoint**: User Story 4 is independently complete, and all existing cards/actions retain content integrity.

## Phase 7: Theme-control polish and optional desktop enhancement

**Purpose**: Add optional polish that is not required for any story's core content.

- [ ] T028 Create limited theme-transition lifecycle and animated sun/moon icon state in components/layout/theme-toggle.tsx and styles/globals.css. **Depends on**: T003, T006, T026. **AC**: existing `data-theme`, storage key, and pre-hydration priority remain unchanged; transition class is short-lived and property-limited; LT/DT: both destination themes are correct with no flash; RM: icon/theme change is instant or minimal; KB/TC: labelled control/focus/touch activation remain correct; A11Y: accessible destination label persists; PERF: no global transition.
- [ ] T029 [P] Add theme-toggle persistence, no-flash, and reduced-motion tests in tests/unit/theme.test.ts and tests/e2e/theme.spec.ts. **Depends on**: T028. **AC**: tests cover light system theme, dark system theme, saved manual theme, and transition cleanup; LT/DT: both states verified; RM: reduced path verified; KB/TC: keyboard/touch control works; A11Y: label/focus coverage; PERF: no delayed primary render.
- [ ] T030 Create fine-pointer-only spotlight capability hook/behavior in components/motion/motion-safe.tsx and app/page.tsx, with styles in styles/globals.css. **Depends on**: T004, T007, T012. **AC**: effect is optional, subtle, confined to hero/nonessential layer, and disabled on touch, compact viewport, low-power/reduced-motion conditions; LT/DT: spotlight never harms contrast; RM: absent; KB/TC: no required pointer interaction and no touch listener; A11Y: decorative only; PERF: one rAF-scheduled listener at most, cleaned up on unmount/off-screen.
- [ ] T031 [P] Add capability/spotlight tests in tests/unit/motion-safe.test.tsx and tests/e2e/motion-performance.spec.ts. **Depends on**: T030. **AC**: fine-pointer enablement and touch/reduced disablement are asserted; LT/DT: visual classes are safe in both themes; RM: no running effect; KB/TC: keyboard/touch paths remain unaffected; A11Y: no focusable decoration; PERF: listener cleanup and off-screen stop behavior are covered where observable.

## Phase 8: Cross-cutting accessibility, performance, and release validation

**Purpose**: Verify all enhancement requirements together before static publication.

- [ ] T032 Audit semantic structure, contrast, focus visibility, non-color states, skip link, and decorative aria treatment in app/page.tsx, components/, and styles/globals.css; record findings in docs/testing.md. **Depends on**: T013, T018, T023, T027, T029, T031. **AC**: no issue remains that hides content, traps focus, or exposes decoration as required content; LT/DT: audit both themes; RM: full comfort audit; KB/TC: full keyboard/touch audit; A11Y: WCAG 2.1 AA evidence recorded; PERF: audit checks no focus/visual overlap.
- [ ] T033 Add accessibility regression coverage in tests/e2e/accessibility.spec.ts and tests/e2e/keyboard.spec.ts. **Depends on**: T032. **AC**: tests cover skip link, focus order, focus visibility, active nav semantics, menu Escape/restore, decorative aria hiding, and cards/actions; LT/DT: both themes; RM: complete nonessential-motion absence/minimality; KB/TC: keyboard-only and touch emulator; A11Y: no color-only state; PERF: no hidden pre-hydration content.
- [ ] T034 Add responsive and no-overflow matrix coverage for 320px, 375px, 768px, 1024px, 1440px, and 1920px in tests/e2e/responsive.spec.ts. **Depends on**: T020, T024, T025, T030. **AC**: all existing sections/actions have no horizontal overflow at every width; LT/DT: matrix runs in both themes; RM: mobile simplification checked; KB/TC: mobile menu/card touch behavior checked; A11Y: focus not clipped; PERF: no breakpoint-induced layout shift.
- [ ] T035 Add initial-render, motion-preference, layout-shift, and listener/bounded-animation coverage in tests/e2e/motion-performance.spec.ts and update docs/testing.md. **Depends on**: T012, T016, T020, T030. **AC**: test/record that no primary content is hidden before hydration, reduced mode disables optional effects, layout shifts remain absent/negligible, and concurrent effects respect plan limits; LT/DT: checks both themes; RM: required; KB/TC: pointer tracking absent on touch; A11Y: content readable during all states; PERF: bundle and runtime measurement procedure recorded.
- [ ] T036 Perform production-build Lighthouse and client-bundle comparison, documenting results and any remediation in docs/testing.md; modify package.json only if an approved analysis script is needed. **Depends on**: T001, T035. **AC**: Lighthouse runs against the production build; animation code is shown not to significantly increase initial JavaScript bundle or an approved mitigation is completed; LT/DT: both theme screenshots/review; RM: production reduced-mode review; KB/TC: N/A; A11Y: Lighthouse accessibility review; PERF: record performance, CLS, and bundle baseline/comparison.
- [ ] T037 Run the complete release command sequence and verify static export in package.json, next.config.ts, docs/testing.md, and the generated output. **Depends on**: T033, T034, T035, T036. **AC**: `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm run test`, `npm run build`, and `npm run test:e2e` pass; LT/DT: light system, dark system, and manually saved theme are all validated; RM: enabled validation passes; KB/TC: keyboard-only and touch-emulation pass; A11Y: results recorded; PERF: static export has no motion-induced CLS.
- [ ] T038 Verify GitHub Pages deployment behavior and production URL smoke checks in .github/workflows/deploy-pages.yml, docs/github-pages.md, and docs/testing.md without changing deployment architecture unless a failure requires it. **Depends on**: T037. **AC**: deployment uses the existing static export/base path and fails on required quality-gate failure; LT/DT: production smoke checks both themes; RM: production reduced-motion smoke check; KB/TC: production keyboard/touch smoke check; A11Y: production focus/contrast check; PERF: production Lighthouse and initial-bundle findings are recorded.

## Dependencies and execution order

- Phase 1 is the sole blocking foundation: T001 → T002 → T003; T004 and T005 follow the shared tokens/provider.
- Phase 2 depends on Phase 1. T006 unlocks T007–T009 and all visual integration.
- User Story 1 depends on Phases 1–2: T010/T011 can proceed in parallel, then T012, then T013.
- User Story 2 depends on the shared foundation and `AnimatedSection`: T014 → T015; T016 depends on T010/T014; T017–T018 validate their completed behavior.
- User Story 3 depends on the foundation and section integration: T019 → T020; T021 can proceed alongside T019; T022 follows T021; T023 validates the group.
- User Story 4 depends on `InteractiveCard` and global interactions; T024 and T025 may run in parallel, T026 follows header/card foundations, and T027 validates all three.
- Optional polish follows its dependencies and does not block a core story; final validation requires all selected enhancement tasks.

## Parallel opportunities

- After T002: T003 and the preparation of T004 may be coordinated, but both must converge before integration.
- After T006: T007, T008, and T009 can run in parallel.
- After Phase 2: T010 and T011 can run in parallel for US1.
- After T014/T015 and T016: T017 and T018 can run in parallel.
- In US3: T019 and T021 can run in parallel; T023 follows their integrations.
- In US4: T024 and T025 can run in parallel; T027 follows T024–T026.
- T029 and T031 can run in parallel after their respective theme/spotlight implementations.

## Implementation strategy

1. Deliver the motion/reduced-motion and dual-theme foundations first; they prevent drift and keep the portfolio accessible even before new effects are visible.
2. Deliver User Story 1 as the MVP: an immediately usable hero, approved status phrase, and static-safe infrastructure visual.
3. Deliver User Story 2 navigation and section entrances next; validate keyboard, hash navigation, and reduced-motion behavior before timeline/card work.
4. Deliver User Story 3 and User Story 4 independently, preserving all existing content and pending-validation restrictions.
5. Add optional spotlight only after core stories are proven, then complete the full accessibility, performance, static-export, GitHub Pages, and production Lighthouse validation matrix.
