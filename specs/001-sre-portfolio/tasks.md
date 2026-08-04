# Tasks: Ricardo Horibe SRE Portfolio

**Input**: Design documents from /specs/001-sre-portfolio/

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-content-contract.md, and quickstart.md

**Tests**: Critical components and utilities require automated tests. Feature tasks include the relevant unit, component, and end-to-end checks close to their implementation work.

## Format: [ID] [P?] [Story] Description

- [P] indicates a task can proceed in parallel with tasks that do not modify the same files.
- [US1], [US2], and [US3] identify the user story served by feature work.

## Phase 1: Project Initialization

**Purpose**: Establish the static application skeleton.

- [ ] T001 Create the Next.js App Router project manifest and npm scripts in package.json
- [ ] T002 Create the planned application directories in app/, components/, content/, lib/, styles/, public/, and tests/
- [ ] T003 Configure static Next.js export and user-site/project-site base-path support in next.config.ts

**Validation**: Project structure matches plan.md and npm can resolve the project scripts.

## Phase 2: Tooling and Quality Configuration

**Purpose**: Make code quality and test gates executable before feature work.

- [ ] T004 [P] Configure strict compiler options and path aliases in tsconfig.json
- [ ] T005 [P] Configure Tailwind content scanning and semantic design-token extensions in tailwind.config.ts
- [ ] T006 [P] Configure ESLint rules for Next.js, TypeScript, accessibility, and imports in eslint.config.mjs
- [ ] T007 [P] Configure Prettier formatting and ignore rules in .prettierrc.json and .prettierignore
- [ ] T008 [P] Configure Vitest, React Testing Library setup, and coverage in vitest.config.ts and tests/setup.ts
- [ ] T009 [P] Configure Playwright projects and browser smoke-test defaults in playwright.config.ts
- [ ] T010 Add format, lint, typecheck, test, test:e2e, and build commands to package.json

**Validation**: npm quality commands are defined.

## Phase 3: Content Modeling

**Purpose**: Establish typed, verification-gated local content.

- [ ] T011 Create shared content types and verification-status guards in lib/content.ts
- [ ] T012 [P] Create site URL, locale, and deployment-mode configuration in lib/site-config.ts
- [ ] T013 [P] Create typed profile, navigation, expertise, credentials, and social data files in content/profile.ts, content/navigation.ts, content/expertise.ts, content/credentials.ts, and content/social.ts
- [ ] T014 [P] Create typed experience records with only verified/pending source fields in content/experience.ts
- [ ] T015 [P] Create pending-validation project record structure without invented details in content/projects.ts
- [ ] T016 Create content aggregation and public-rendering eligibility helpers in lib/content.ts
- [ ] T017 Add unit tests for content verification guards and pending-content behavior in tests/unit/content.test.ts
- [ ] T018 Add the verified LinkedIn-resume source material or documented source-reference record in docs/content-sources.md

**Validation**: No unsupported professional claim is eligible to render publicly.

## Phase 4: Theme Foundation

**Purpose**: Implement first-paint-correct, accessible dual-theme behavior.

- [ ] T019 [US2] Define dark/light CSS variables, focus tokens, and reduced-motion defaults in styles/globals.css
- [ ] T020 [US2] Create pre-hydration theme resolution for saved choice, system preference, and dark fallback in app/layout.tsx
- [ ] T021 [US2] Implement labelled keyboard-accessible ThemeToggle in components/layout/theme-toggle.tsx
- [ ] T022 [P] [US2] Add theme-resolution priority and storage-fallback tests in tests/unit/theme.test.ts
- [ ] T023 [P] [US2] Add ThemeToggle state, accessible-name, and persistence tests in tests/components/theme-toggle.test.tsx

**Validation**: Both themes are token-driven; saved choice, system preference, and dark fallback have coverage.

## Phase 5: Responsive Layout Foundation

**Purpose**: Establish semantic page structure and mobile-first layout primitives.

- [ ] T024 [US2] Create root landmarks, skip target, and page shell in app/layout.tsx and app/page.tsx
- [ ] T025 [US2] Define mobile-first containers, fluid typography, grids, touch targets, and overflow safeguards in styles/globals.css
- [ ] T026 [US2] Create accessible SectionHeading in components/ui/section-heading.tsx
- [ ] T027 [P] [US2] Add viewport and horizontal-overflow helpers in tests/e2e/helpers.ts
- [ ] T028 [US2] Add 320px, 375px, 768px, 1024px, and large-desktop layout smoke assertions in tests/e2e/responsive.spec.ts

**Validation**: The shell has semantic landmarks and no defined horizontal-overflow exception.

## Phase 6: Header and Navigation

**Goal**: Deliver the keyboard-accessible responsive navigation journey for US2.

**Independent Test**: Keyboard users reach main content and operate every header control at mobile and desktop widths.

- [ ] T029 [US2] Implement SiteHeader and DesktopNavigation in components/layout/site-header.tsx and components/layout/desktop-navigation.tsx
- [ ] T030 [US2] Implement accessible mobile-menu state, focus, and close behavior in components/layout/mobile-navigation.tsx
- [ ] T031 [US2] Integrate header, skip link, navigation, and theme toggle in app/page.tsx
- [ ] T032 [P] [US2] Add skip-link, desktop-link, and focus tests in tests/components/site-header.test.tsx
- [ ] T033 [P] [US2] Add mobile-menu keyboard/state tests in tests/components/mobile-navigation.test.tsx
- [ ] T034 [US2] Add header/menu keyboard smoke coverage in tests/e2e/navigation.spec.ts

**Validation**: Navigation is keyboard operable and focus visible in both themes.

## Phase 7: Hero and About Sections

**Goal**: Deliver the professional-profile MVP for US1.

**Independent Test**: Visitors identify Ricardo's role, summary, and only approved action states without leaving the page.

- [ ] T035 [US1] Implement HeroSection using profile and approved action data in components/sections/hero-section.tsx
- [ ] T036 [US1] Implement AboutSection using resume-supported content in components/sections/about-section.tsx
- [ ] T037 [US1] Implement SocialLinks and ResumeButton with pending/omitted destinations in components/ui/social-links.tsx and components/ui/resume-button.tsx
- [ ] T038 [P] [US1] Add hero heading/action/omitted-link tests in tests/components/hero-section.test.tsx
- [ ] T039 [P] [US1] Add resume-supported About-content tests in tests/components/about-section.test.tsx

**Validation**: No phone number, invented claim, or enabled unverified action appears in the profile MVP.

## Phase 8: Expertise Section

**Goal**: Present categorised, non-scored expertise for US1.

**Independent Test**: Visitors can read each category without arbitrary levels or percentage bars.

- [ ] T040 [US1] Implement responsive ExpertiseSection in components/sections/expertise-section.tsx
- [ ] T041 [P] [US1] Add category, skills, and no-proficiency-score tests in tests/components/expertise-section.test.tsx

**Validation**: Expertise is mobile-readable and contains no unsupported skill-level claim.

## Phase 9: Professional Experience Timeline

**Goal**: Present supplied career progression accessibly for US1.

**Independent Test**: Visitors can read every supplied role in a structured list at every target viewport.

- [ ] T042 [US1] Implement verification-gated ExperienceCard in components/sections/experience-card.tsx
- [ ] T043 [US1] Implement semantic ExperienceTimeline with one-column mobile layout in components/sections/experience-timeline.tsx
- [ ] T044 [P] [US1] Add eight-role and pending-detail tests in tests/components/experience-timeline.test.tsx
- [ ] T045 [US1] Add timeline mobile-readability and no-overflow coverage in tests/e2e/experience.spec.ts

**Validation**: Unverified dates/descriptions are never published as facts.

## Phase 10: Certifications and Education

**Goal**: Complete verified professional credentials for US1.

**Independent Test**: Visitors read approved credentials with responsive structure and no invented details.

- [ ] T046 [US1] Implement CertificationsSection in components/sections/certifications-section.tsx
- [ ] T047 [US1] Implement EducationSection in components/sections/education-section.tsx
- [ ] T048 [P] [US1] Add supplied credential and education-entry tests in tests/components/credentials.test.tsx

**Validation**: Credentials contain only approved titles and institutions.

## Phase 11: Projects Section

**Goal**: Provide responsibly labelled featured-project cards for US3.

**Independent Test**: Visitors distinguish verified projects from pending validation and cannot follow invented destinations.

- [ ] T049 [US3] Implement ProjectCard with tags, verified links, optional demo, and pending label in components/ui/project-card.tsx
- [ ] T050 [US3] Implement ProjectsSection with responsive empty, pending, and verified states in components/sections/projects-section.tsx
- [ ] T051 [P] [US3] Add pending-label, omitted-link, and optional-demo tests in tests/components/projects-section.test.tsx
- [ ] T052 [US3] Add featured-repository source-review checklist in docs/content-sources.md

**Validation**: Project content is data-driven and does not publish unreviewed descriptions or URLs.

## Phase 12: Contact and Footer

**Goal**: Provide safe professional contact and source actions for US3.

**Independent Test**: Visitors find verified contact/source actions and back-to-top control without a phone number.

- [ ] T053 [US3] Implement ContactSection with verified contact-action rules in components/sections/contact-section.tsx
- [ ] T054 [US3] Implement SiteFooter with source link, technology summary, and back-to-top in components/layout/site-footer.tsx
- [ ] T055 [US3] Integrate contact/footer sections in app/page.tsx
- [ ] T056 [P] [US3] Add contact visibility, no-phone, and footer-action tests in tests/components/contact-footer.test.tsx
- [ ] T057 [US3] Add contact/action smoke coverage in tests/e2e/contact.spec.ts

**Validation**: Contact/footer expose no phone number or unverified external destination.

## Phase 13: Accessibility Improvements

**Purpose**: Apply cross-cutting WCAG 2.1 AA requirements.

- [ ] T058 Audit semantic landmarks, heading order, accessible names, alternatives, and non-color states in app/page.tsx and components/
- [ ] T059 Add reduced-motion behavior for optional motion/transition paths in styles/globals.css and components/
- [ ] T060 Add accessibility assertions for page, menu states, and both themes in tests/e2e/accessibility.spec.ts
- [ ] T061 Add keyboard-only acceptance coverage across section actions in tests/e2e/keyboard.spec.ts

**Validation**: Interaction paths are keyboard usable, focus-visible, and reduced-motion safe.

## Phase 14: SEO and Metadata

**Purpose**: Make public pages discoverable using only verified information.

- [ ] T062 Create title, description, canonical, Open Graph, and structured-data builders in lib/metadata.ts
- [ ] T063 Add root metadata and verified structured professional information in app/layout.tsx
- [ ] T064 [P] Create sitemap and robots directives in app/sitemap.ts and app/robots.ts
- [ ] T065 [P] Add canonical, metadata-fallback, and verified-structured-data tests in tests/unit/metadata.test.ts
- [ ] T066 Add metadata/sitemap/robots source-review items in docs/content-sources.md

**Validation**: Canonical URLs use https://ricardo.horibe.com.br and no metadata uses unverified claims.

## Phase 15: Testing

**Purpose**: Complete integrated quality coverage and release-gate evidence.

- [ ] T067 Add first-visit, saved-choice, light/dark, and storage-fallback matrix in tests/e2e/theme.spec.ts
- [ ] T068 Add cross-browser smoke projects and guidance in playwright.config.ts and docs/testing.md
- [ ] T069 Add final 320px, 375px, 768px, 1024px, and large-desktop matrix in tests/e2e/responsive.spec.ts
- [ ] T070 Add final no-horizontal-overflow assertions in tests/e2e/responsive.spec.ts
- [ ] T071 Add final reduced-motion assertions in tests/e2e/accessibility.spec.ts
- [ ] T072 Add public-build phone-number absence test in tests/e2e/privacy.spec.ts
- [ ] T073 Add resume-evidence validation in tests/unit/content.test.ts
- [ ] T074 Add quality-gate command guidance in docs/testing.md

**Validation**: Coverage exercises both themes, keyboard navigation, reduced motion, all target viewports, no overflow, no phone number, and resume evidence.

## Phase 16: GitHub Pages Deployment

**Purpose**: Deploy only a validated static artifact.

- [ ] T075 Create Pages workflow with install, checks, build, artifact upload, and deploy in .github/workflows/deploy-pages.yml
- [ ] T076 Configure workflow permissions, concurrency, and clear failure reporting in .github/workflows/deploy-pages.yml
- [ ] T077 Add Pages custom-domain, DNS, HTTPS, and repository-setting instructions in docs/github-pages.md
- [ ] T078 Add deployment base-path/asset-path tests in tests/unit/site-config.test.ts
- [ ] T079 Add deployed custom-domain asset/canonical smoke procedure in docs/github-pages.md

**Validation**: Formatting, linting, type checks, tests, or build failure blocks deployment.

## Phase 17: Documentation and Final Validation

**Purpose**: Prepare maintainable handoff and release evidence.

- [ ] T080 Create local-development, quality-command, content-verification, and Pages setup guidance in README.md
- [ ] T081 Reconcile resume claims, dates, employers, credentials, and links against the source in docs/content-sources.md
- [ ] T082 Perform final cross-browser responsive verification at 320px, 375px, 768px, 1024px, and large desktop; record results in docs/testing.md
- [ ] T083 Run the complete release command sequence and record outcomes in docs/testing.md
- [ ] T084 Review and resolve/defer every requirement item in specs/001-sre-portfolio/checklists/portfolio-quality.md

**Validation**: Release evidence covers claims, target viewports, both themes, keyboard, reduced motion, overflow, and production build.

## Dependencies and Execution Order

- Phases 1–3 block feature work.
- Phases 4–5 establish cross-cutting UI requirements; Phase 6 depends on both.
- US1 work in Phases 7–10 proceeds after Phases 3 and 5.
- US2 completes through Phases 4–6 and Phase 13.
- US3 in Phases 11–12 depends on content modeling and shared shell work.
- Phases 13–17 follow feature completion; deployment follows every quality gate.

## Parallel Opportunities

- T004–T009 after T001; T012–T015 after T011.
- T022–T023, T027–T028, and all [P] feature tests after their target contracts stabilize.
- T040, T046, and T047 after shared foundations.
- T049 and T053 after content modeling and the page shell.
- T064–T065 after T062.

## Implementation Strategy

1. Deliver foundation and the US1 profile MVP with pending states for unverified source material.
2. Deliver US2 navigation/theme behavior as a required accessibility journey, not later polish.
3. Add US3 projects/contact only when sources are approved.
4. Complete validation and deployment automation after the static page passes every release gate.
