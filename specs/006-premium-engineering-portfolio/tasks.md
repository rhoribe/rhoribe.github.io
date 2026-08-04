# Tasks: Premium Engineering Portfolio

**Input**: [plan.md](./plan.md), [spec.md](./spec.md), [research.md](./research.md), [data-model.md](./data-model.md), [visual UI contract](./contracts/visual-ui-contract.md), and [quickstart.md](./quickstart.md)

**Tests**: Automated tests are required for critical primitives and all constitution-required responsive, theme, navigation, accessibility, performance, and production-build validation.

**Task metadata**: Every task has its dependency, acceptance criteria, files, tests, and parallel execution status in the detail tables immediately below its phase checklist. `[P]` means the task may run in parallel after its stated dependencies are met.

## Phase 1: Setup

**Purpose**: Capture a baseline and establish an executable validation workflow before changing the visual system.

- [ ] T001 Record baseline screenshots and current validation results in `specs/006-premium-engineering-portfolio/baseline.md`

| Task | Dependencies | Acceptance criteria | Files | Tests | Parallel execution |
| --- | --- | --- | --- | --- | --- |
| T001 | None | Baseline covers six target widths, both themes, primary keyboard paths, and existing test/build status. | `specs/006-premium-engineering-portfolio/baseline.md` | Run `format:check`, lint, typecheck, unit, e2e, and build; record failures without changing code. | No; establishes the comparison point for all work. |

---

## Phase 2: Foundational Design, Asset, and Primitive System

**Purpose**: Complete shared blockers before section-specific migration begins.

- [ ] T002 [P] Define complete brand-asset provenance fields and approved folder taxonomy in `config/brand-assets.ts` and `public/assets/`
- [ ] T003 [P] Add brand-asset manifest and fallback coverage in `tests/unit/brand-assets.test.ts`
- [ ] T004 Define semantic design, spacing, typography, maximum-measure, and theme tokens in `config/design-tokens.ts` and `styles/globals.css`
- [ ] T005 Build shared responsive grid, section-container, card, and spacing utilities in `components/ui/section-container.tsx`, `components/ui/card.tsx`, and `styles/globals.css`
- [ ] T006 Build shared theme-aware logo resolution and stable logo-frame behavior in `components/ui/logo-frame.tsx`, `components/ui/company-logo.tsx`, and `components/ui/issuer-logo.tsx`
- [ ] T007 Define shared hover, focus, press, and reduced-motion variants in `components/motion/interactive-card.tsx`, `components/motion/reveal.tsx`, and `styles/globals.css`
- [ ] T008 Add foundational primitive and motion coverage in `tests/unit/brand-assets.test.ts`, `tests/unit/theme.test.ts`, and `tests/e2e/motion.spec.ts`

| Task | Dependencies | Acceptance criteria | Files | Tests | Parallel execution |
| --- | --- | --- | --- | --- | --- |
| T002 | T001 | Company, issuer, and optional icon folders are explicit; each asset record supports ID, kind, local path, official source, review date, theme mode, accessible naming policy, initials, and approval status; no remote public asset path is accepted. | `config/brand-assets.ts`, `public/assets/brands/companies/`, `public/assets/brands/issuers/`, `public/assets/icons/` | Extend or run `tests/unit/brand-assets.test.ts`. | Yes, alongside T003 after T001. |
| T003 | T001 | Tests assert unique IDs, local-only approved paths, required provenance, valid fallback initials, and no approved remote-only asset. | `tests/unit/brand-assets.test.ts` | `npm test -- brand-assets`. | Yes, alongside T002; reconcile with T002 before test finalization. |
| T004 | T001 | Both themes expose semantic color, spacing, typography, reading-measure, layout, and motion tokens; hierarchy and bounded responsive values are documented through token names rather than one-off section values. | `config/design-tokens.ts`, `styles/globals.css` | `tests/unit/theme.test.ts`, lint, typecheck. | No; T005 and T007 depend on it. |
| T005 | T004 | Shared layouts are mobile-first, content-sized, use common gutters/rhythm, support compact card density, and prevent overflow; shared maximum-text-width utility targets about 70 characters. | `components/ui/section-container.tsx`, `components/ui/card.tsx`, `styles/globals.css` | Targeted responsive checks in `tests/e2e/responsive.spec.ts`. | No; consumes T004. |
| T006 | T002, T004 | CompanyLogo and IssuerLogo use one resolution foundation, reserve dimensions, preserve aspect ratio, remain legible in both themes, and show accessible initials fallback when an asset is not approved. | `components/ui/logo-frame.tsx`, `components/ui/company-logo.tsx`, `components/ui/issuer-logo.tsx` | `tests/unit/brand-assets.test.ts`, relevant e2e asset checks. | No; consumes manifest and tokens. |
| T007 | T004 | Shared interactions use subtle lift/shadow/border emphasis, visible focus, short non-bouncy timing, and a reduced-motion alternative with no information loss. | `components/motion/interactive-card.tsx`, `components/motion/reveal.tsx`, `styles/globals.css` | `tests/e2e/motion.spec.ts`. | Yes, after T004; independent of T005/T006. |
| T008 | T005, T006, T007 | Tests cover stable logo frame/fallback, theme behavior, shared grid/card semantics, and reduced-motion state before sections migrate. | `tests/unit/brand-assets.test.ts`, `tests/unit/theme.test.ts`, `tests/e2e/motion.spec.ts` | `npm test`, `npm run test:e2e -- motion`. | No; verifies foundational blockers. |

**Checkpoint**: Shared token, layout, logo, and motion foundations are ready. User-story work can begin.

---

## Phase 3: User Story 1 — Understand Professional Positioning Quickly (Priority: P1) 🎯 MVP

**Goal**: Make the page shell, hero, About, and footer clear, compact, readable, and visually consistent.

**Independent test**: At every target width and in both themes, a visitor can identify the professional focus, read bounded copy, navigate sections, and locate a contact action without visual competition or clipping.

- [ ] T009 [P] [US1] Apply responsive typography, maximum-measure, shared spacing, and subtle hero stagger to `app/page.tsx` and `styles/globals.css`
- [ ] T010 [P] [US1] Rebalance About expertise cards on shared grid and card layouts in `app/page.tsx`, `content/expertise.ts`, and `styles/globals.css`
- [ ] T011 [US1] Apply shared section hierarchy and footer rhythm to `app/page.tsx`, `app/layout.tsx`, and `styles/globals.css`
- [ ] T012 [US1] Add professional-positioning visual regression coverage in `tests/e2e/responsive.spec.ts` and `tests/e2e/navigation.spec.ts`

| Task | Dependencies | Acceptance criteria | Files | Tests | Parallel execution |
| --- | --- | --- | --- | --- | --- |
| T009 | T005, T007 | Hero has clear display/body hierarchy, bounded copy measure, compact responsive spacing, preserved content/actions, and restrained stagger with reduced-motion equivalent. | `app/page.tsx`, `styles/globals.css` | `tests/e2e/responsive.spec.ts`, `tests/e2e/motion.spec.ts`. | Yes, alongside T010 after foundation. |
| T010 | T005 | About preserves verified expertise data; cards are balanced, content-sized, use appropriate existing icons, and reflow without tall empty spaces. | `app/page.tsx`, `content/expertise.ts`, `styles/globals.css` | `tests/e2e/responsive.spec.ts`, content tests. | Yes, alongside T009 after foundation. |
| T011 | T009, T010 | Sections use consistent landmarks/headings/gaps; footer uses compact shared rhythm; navigation and existing metadata/theme mechanisms remain intact. | `app/page.tsx`, `app/layout.tsx`, `styles/globals.css` | `tests/e2e/navigation.spec.ts`, `tests/unit/theme.test.ts`. | No; integrates hero and About work. |
| T012 | T011 | Automated checks prove readable measure where applicable, visible identity/actions, no overflow, working navigation, and both-theme presentation at target widths. | `tests/e2e/responsive.spec.ts`, `tests/e2e/navigation.spec.ts` | `npm run test:e2e -- responsive navigation`. | No; validates the completed story. |

**Checkpoint**: US1 is independently deliverable as the MVP shell/hero/About/footer refinement.

---

## Phase 4: User Story 2 — Review Career History with Low Cognitive Load (Priority: P1)

**Goal**: Present verified career history in a branded, scan-first timeline with accessible responsibilities and wrapping technologies.

**Independent test**: A visitor can scan company, role, period, summary, responsibilities, and technologies in order; every responsibility disclosure works by keyboard and every company resolves to a local mark or initials fallback.

- [ ] T013 [P] [US2] Acquire, optimize, and record approved local company SVGs or reviewed initials fallbacks in `public/assets/brands/companies/` and `config/brand-assets.ts`
- [ ] T014 [US2] Finalize CompanyLogo theme, alternative-text, and fallback contract in `components/ui/company-logo.tsx`, `components/ui/logo-frame.tsx`, and `tests/unit/brand-assets.test.ts`
- [ ] T015 [P] [US2] Improve native responsibilities accordion semantics and compact disclosure styling in `components/ui/accordion.tsx` and `styles/globals.css`
- [ ] T016 [P] [US2] Improve technology badge wrapping and secondary icon treatment in `components/ui/badge.tsx` and `styles/globals.css`
- [ ] T017 [US2] Migrate experience cards and timeline scan order to shared components in `components/profile/experience-timeline.tsx` and `styles/globals.css`
- [ ] T018 [US2] Add experience, company-mark, accordion, badge, and timeline coverage in `tests/e2e/professional-content.spec.ts` and `tests/e2e/accessibility-refinement.spec.ts`

| Task | Dependencies | Acceptance criteria | Files | Tests | Parallel execution |
| --- | --- | --- | --- | --- | --- |
| T013 | T002 | Each approved company asset is local, optimized, official-source documented, reviewable, and theme-compatible; unresolved companies use named initials fallback. | `public/assets/brands/companies/`, `config/brand-assets.ts` | `tests/unit/brand-assets.test.ts`. | Yes, after foundation and independent from accordion/badge work. |
| T014 | T006, T013 | CompanyLogo exposes visible identity plus correct image/fallback behavior, stable frame, preserved ratio, and both-theme legibility. | `components/ui/company-logo.tsx`, `components/ui/logo-frame.tsx`, `tests/unit/brand-assets.test.ts` | `npm test -- brand-assets`; company-mark e2e assertions. | No; consumes approved company records. |
| T015 | T005, T007 | Disclosure uses semantic summary/control behavior, visible focus, clear state, keyboard/pointer operation, compact content, and reduced-motion-safe transition. | `components/ui/accordion.tsx`, `styles/globals.css` | `tests/e2e/accessibility-refinement.spec.ts`. | Yes, alongside T016 after foundation. |
| T016 | T005 | Badges remain readable, naturally wrap in DOM order, never clip/overlap, and keep decorative icons subordinate to text. | `components/ui/badge.tsx`, `styles/globals.css` | `tests/e2e/responsive.spec.ts`. | Yes, alongside T015 after foundation. |
| T017 | T014, T015, T016 | Every existing role retains verified content and visibly follows company → role → period → summary → responsibilities → technologies; company branding is primary and timeline remains compact. | `components/profile/experience-timeline.tsx`, `styles/globals.css` | Professional-content and responsive e2e tests. | No; integrates the story primitives. |
| T018 | T017 | Tests assert exact scan order, keyboard disclosure, company local/fallback resolution, wrapping badges, no overflow, and content parity. | `tests/e2e/professional-content.spec.ts`, `tests/e2e/accessibility-refinement.spec.ts` | `npm run test:e2e -- professional-content accessibility-refinement`. | No; validates the completed story. |

**Checkpoint**: US2 is independently testable and preserves all verified experience content.

---

## Phase 5: User Story 3 — Scan Credentials and Initiate Contact (Priority: P1)

**Goal**: Deliver a compact issuer-logo certification gallery and premium, accessible contact actions.

**Independent test**: Every certification visibly contains only issuer identity and title; every contact action has a label, usable target, and correct behavior; missing marks use initials fallback.

- [ ] T019 [P] [US3] Acquire, optimize, and record approved issuer SVGs or reviewed initials fallbacks in `public/assets/brands/issuers/` and `config/brand-assets.ts`
- [ ] T020 [US3] Finalize IssuerLogo theme, alternative-text, and fallback behavior in `components/ui/issuer-logo.tsx`, `components/ui/logo-frame.tsx`, and `tests/unit/brand-assets.test.ts`
- [ ] T021 [US3] Migrate the certification gallery to issuer identity plus certification title only in `components/profile/certification-section.tsx` and `styles/globals.css`
- [ ] T022 [P] [US3] Redesign contact actions with recognizable icons, safe links, target sizing, and shared interaction states in `components/ui/contact-action.tsx`, `components/icons/`, and `styles/globals.css`
- [ ] T023 [US3] Add certification gallery and contact behavior coverage in `tests/e2e/certification-gallery.spec.ts` and `tests/e2e/accessibility-refinement.spec.ts`

| Task | Dependencies | Acceptance criteria | Files | Tests | Parallel execution |
| --- | --- | --- | --- | --- | --- |
| T019 | T002 | Every issuer in existing certification data has an approved local official SVG with provenance or a reviewed initials fallback; no hotlink is introduced. | `public/assets/brands/issuers/`, `config/brand-assets.ts` | `tests/unit/brand-assets.test.ts`. | Yes, after foundation and independent from T022. |
| T020 | T006, T019 | IssuerLogo uses the shared resolver, preserves ratio/stable frame, remains legible in themes, and exposes issuer identity correctly. | `components/ui/issuer-logo.tsx`, `components/ui/logo-frame.tsx`, `tests/unit/brand-assets.test.ts` | `npm test -- brand-assets`. | No; consumes issuer records. |
| T021 | T005, T020 | Responsive gallery cards are compact and show exactly issuer identity plus certification name; all excluded administrative fields remain absent from rendered UI while source content remains intact. | `components/profile/certification-section.tsx`, `styles/globals.css` | `tests/e2e/certification-gallery.spec.ts`, content tests. | No; consumes layout and issuer primitive. |
| T022 | T005, T007 | GitHub, LinkedIn, email, and resume actions have visible labels, recognizable iconography, generous activation targets, visible focus, subtle feedback, and safe external behavior. | `components/ui/contact-action.tsx`, `components/icons/`, `styles/globals.css` | `tests/e2e/accessibility-refinement.spec.ts`, `tests/e2e/privacy.spec.ts`. | Yes, after foundation; independent of issuer/gallery work. |
| T023 | T021, T022 | Tests enforce two-field gallery output, issuer fallback, keyboard/focus behavior, contact labels/targets/destinations, and no visual overflow. | `tests/e2e/certification-gallery.spec.ts`, `tests/e2e/accessibility-refinement.spec.ts` | `npm run test:e2e -- certification-gallery accessibility-refinement`. | No; validates the completed story. |

**Checkpoint**: US3 is independently testable and preserves certification inventory without exposing disallowed metadata.

---

## Phase 6: User Story 4 — Use the Portfolio Comfortably on Every Supported Screen (Priority: P2)

**Goal**: Verify and finish responsive, motion, accessibility, performance, and static-delivery quality across all refined surfaces.

**Independent test**: At six target widths in both themes, keyboard and reduced-motion visitors can complete every task with no overflow, clipping, overlap, distortion, or layout shift attributable to refined assets.

- [ ] T024 [US4] Apply final responsive typography, spacing, grid, timeline, badge, and logo breakpoints in `styles/globals.css` and affected `components/`
- [ ] T025 [US4] Apply final motion polish and reduced-motion safeguards to `components/motion/`, `components/profile/`, and `styles/globals.css`
- [ ] T026 [US4] Complete semantic, focus, contrast, keyboard, and alternative-text audit in `app/page.tsx`, `components/ui/`, and `components/profile/`
- [ ] T027 [US4] Optimize SVG delivery, reserve media dimensions, and remove unused visual dependencies in `public/assets/`, `config/brand-assets.ts`, and `components/ui/logo-frame.tsx`
- [ ] T028 [US4] Expand cross-viewport, theme, reduced-motion, asset, and layout-stability coverage in `tests/e2e/responsive.spec.ts`, `tests/e2e/motion.spec.ts`, and `tests/e2e/performance-assets.spec.ts`

| Task | Dependencies | Acceptance criteria | Files | Tests | Parallel execution |
| --- | --- | --- | --- | --- | --- |
| T024 | T011, T017, T021, T022 | Every refined surface reflows at 320/375/768/1024/1440/1920 with no horizontal overflow, clipped text, overlapping badges, stretched marks, or excessive wide-screen whitespace. | `styles/globals.css`, affected `components/` | `tests/e2e/responsive.spec.ts`. | No; integrates all section work. |
| T025 | T007, T011, T017, T021, T022 | Hero/timeline/card/contact motion is subtle and non-bouncy; hover is supplemental; reduced motion leaves content and controls immediately usable. | `components/motion/`, `components/profile/`, `styles/globals.css` | `tests/e2e/motion.spec.ts`. | No; applies to finished surfaces. |
| T026 | T024, T025 | Headings/landmarks, focus, keyboard sequence, disclosure state, contrast, text alternatives, and external-link safety satisfy the UI contract in both themes. | `app/page.tsx`, `components/ui/`, `components/profile/` | `tests/e2e/accessibility-refinement.spec.ts`, `tests/e2e/navigation.spec.ts`. | No; audits integrated UI. |
| T027 | T013, T019, T024 | Rendered assets are optimized local SVGs with stable dimensions; unused marks are excluded; non-critical visuals do not cause layout shift or block primary comprehension. | `public/assets/`, `config/brand-assets.ts`, `components/ui/logo-frame.tsx` | `tests/e2e/performance-assets.spec.ts`; production build inspection. | Yes, after asset work; coordinate with T024 if frame styling overlaps. |
| T028 | T024, T025, T026, T027 | Automated checks cover all six widths, both themes, reduced motion, keyboard/focus, local assets, no overflow, and logo-related stability. | `tests/e2e/responsive.spec.ts`, `tests/e2e/motion.spec.ts`, `tests/e2e/performance-assets.spec.ts` | `npm run test:e2e`. | No; validates US4. |

**Checkpoint**: All user stories meet responsive, accessibility, motion, and performance constraints.

---

## Phase 7: Polish, Release Gates, and Deployment

**Purpose**: Complete cross-cutting evidence, verify static output, and let GitHub Actions remain the deployment authority.

- [ ] T029 [P] Verify content integrity, privacy, SEO, and external-link safety in `content/`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `tests/e2e/privacy.spec.ts`
- [ ] T030 Run the full quality gate and static deployment validation using `package.json`, `.github/workflows/`, and `specs/006-premium-engineering-portfolio/quickstart.md`

| Task | Dependencies | Acceptance criteria | Files | Tests | Parallel execution |
| --- | --- | --- | --- | --- | --- |
| T029 | T026 | No professional facts are invented or removed outside specified gallery rendering; no phone/private data or secrets are exposed; metadata, sitemap, robots, and secure external links remain valid. | `content/`, `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `tests/e2e/privacy.spec.ts` | `tests/e2e/privacy.spec.ts`, content tests. | Yes, after accessibility audit; independent of final command execution. |
| T030 | T028, T029 | Formatting, lint, strict typecheck, unit/e2e tests, and static production build pass; static output works with GitHub Pages configuration and CI remains the sole deployment mechanism. | `package.json`, `.github/workflows/`, `specs/006-premium-engineering-portfolio/quickstart.md` | `npm run format:check`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run test:e2e`, `npm run build`. | No; final release gate. |

## Dependencies & Execution Order

```text
T001
 ├─ T002 ─┬─ T006 ─┬─ US2: T013 → T014 ─┐
 │        │        └─ US3: T019 → T020 ─┤
 ├─ T003 ┘                             │
 └─ T004 ─┬─ T005 ─┬─ US1: T009/T010 → T011 → T012
           │        ├─ US2: T015/T016 → T017 → T018
           │        └─ US3: T021; T022 → T023
           └─ T007 ─┘

US1 + US2 + US3 → US4: T024 → T025 → T026; T027 → T028 → T029 → T030
```

### User Story Dependencies

- **US1 (P1)**: Depends on T005 and T007; no dependency on US2 or US3.
- **US2 (P1)**: Depends on logo/layout/motion foundations; no dependency on US1 or US3.
- **US3 (P1)**: Depends on logo/layout/motion foundations; no dependency on US1 or US2.
- **US4 (P2)**: Integrates and validates US1, US2, and US3.

## Parallel Execution Examples

### Foundation

After T001: run T002 and T003 together. After T004: run T005 and T007 together; complete T006 after T002/T004.

### US1

After foundation: run T009 (hero) and T010 (About) in parallel, then integrate with T011 and validate via T012.

### US2

After foundation: run T013 (company assets), T015 (accordion), and T016 (badges) in parallel. Complete T014 after T013, then T017 and T018.

### US3

After foundation: run T019 (issuer assets) and T022 (contact redesign) in parallel. Complete T020 after T019, then T021 and T023.

## Implementation Strategy

### MVP first

1. Complete T001–T008.
2. Complete US1 (T009–T012).
3. Validate US1 independently before expanding scope.

### Incremental delivery

1. Foundation → deployable shared design system.
2. US1 → premium positioning shell.
3. US2 → branded, scan-first experience.
4. US3 → compact credentials and premium contact.
5. US4 and release gates → full responsive, accessible static release.

### Format validation

All 30 tasks use the required checkbox, sequential task ID, optional `[P]`, applicable user-story label, and exact file-path format. Each task's dependency, acceptance criteria, files, tests, and parallel execution guidance are provided in its phase detail table.
