# Feature Specification: Ricardo Horibe SRE Portfolio

**Feature Branch**: `main`

**Created**: 2026-08-03

**Status**: Draft

**Input**: User description: "Professional, responsive personal portfolio for Ricardo Horibe."

## Clarifications

### Session 2026-08-03

- Q: Which production URL and custom-domain strategy will the portfolio use? → A: Use
  ricardo.horibe.com.br on GitHub Pages.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand Ricardo's Professional Profile (Priority: P1)

As a recruiter or engineering leader, I can quickly understand Ricardo Horibe's senior SRE and
DevOps positioning, core expertise, and professional history, so I can assess whether to start a
conversation.

**Why this priority**: This is the portfolio's primary purpose and establishes the candidate's
credibility before any secondary action.

**Independent Test**: A visitor can open the home page and identify Ricardo's role, experience,
areas of expertise, career progression, certifications, and education without leaving the site.

**Acceptance Scenarios**:

1. **Given** a visitor opens the page, **When** the hero is visible, **Then** they see Ricardo
   Horibe's name, Site Reliability Engineer Specialist positioning, a concise SRE-focused
   introduction, and actions for experience, LinkedIn, GitHub, and resume access.
2. **Given** a visitor reads the About and Expertise sections, **When** they review the content,
   **Then** they can understand Ricardo's 15+ years in technology, progression from operations to
   DevOps/SRE, and categorised skills without percentage-based ratings.
3. **Given** a visitor explores professional history, **When** they view the experience section,
   **Then** they can read all eight supplied roles in a structured, accessible timeline or list.
4. **Given** a small-screen visitor explores the experience section, **When** the viewport is
   320px wide, **Then** all entries appear in one readable column without horizontal scrolling.

---

### User Story 2 - Navigate and Read Comfortably on Any Device (Priority: P1)

As a visitor using a phone, desktop, keyboard, or preferred visual theme, I can navigate and read
the portfolio comfortably, so the site is usable regardless of device or access needs.

**Why this priority**: Accessibility, responsive design, and dual-theme support are non-negotiable
portfolio requirements.

**Independent Test**: A tester can navigate between every main section using keyboard-only input,
switch themes, reload the page, and use the site at 320px and desktop widths without content loss
or unintended horizontal scrolling.

**Acceptance Scenarios**:

1. **Given** a keyboard user loads the page, **When** they begin navigating, **Then** a visible
   skip-to-content link and visible focus indicators allow them to reach and operate all navigation
   links, controls, and actions.
2. **Given** a first-time visitor, **When** no saved preference exists, **Then** the site uses the
   operating-system theme preference and otherwise uses dark mode; it does not visibly flash an
   incorrect theme while loading.
3. **Given** a visitor changes the theme, **When** they return or reload, **Then** the selected
   dark or light theme remains active and both themes provide accessible contrast.
4. **Given** a mobile visitor, **When** they use the header, **Then** they can open, use, and close
   the mobile navigation menu and reach every main section.
5. **Given** a visitor who prefers reduced motion, **When** they use the portfolio, **Then**
   non-essential motion is reduced without preventing use of the content.

---

### User Story 3 - Verify and Contact Ricardo (Priority: P2)

As a potential collaborator, I can inspect verified project placeholders and use professional
contact actions, so I can validate Ricardo's work and start a conversation without exposing
unnecessary personal data.

**Why this priority**: Contact and project links turn interest into an appropriate next step after
the professional profile is understood.

**Independent Test**: A visitor can use LinkedIn, GitHub, email, resume-download, source, and
back-to-top actions, while project cards visibly distinguish unverified placeholder content.

**Acceptance Scenarios**:

1. **Given** a visitor opens Projects, **When** repository information has not been reviewed,
   **Then** each placeholder is marked for validation and does not claim a repository description
   or a live demonstration.
2. **Given** a visitor opens Contact or the footer, **When** they select an available action,
   **Then** they can use the approved LinkedIn, GitHub, professional-email, resume, source, or
   back-to-top destination; no phone number is displayed.
3. **Given** a visitor shares a public page, **When** the destination is previewed by a search or
   social service, **Then** it presents an appropriate title, description, canonical address,
   social-sharing information, and structured professional information.

## Edge Cases

- At 320px width, long skill labels, role titles, external-link labels, and timeline content remain
  readable without clipping or horizontal scrolling.
- If system-theme detection is unavailable, the initial theme is dark; a manually stored preference
  takes precedence whenever storage is available.
- If local storage is unavailable or blocked, the site remains usable and applies the first-visit
  theme rule for the current visit.
- If a visitor prefers reduced motion, motion-dependent presentation is reduced while all content
  and interactions remain available.
- If an image or optional project demonstration is unavailable, meaningful text and a non-broken
  fallback remain available.
- If resume, LinkedIn, GitHub, or project details have not been verified, the site omits them or
  labels them as requiring confirmation rather than publishing invented information.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The site MUST present Ricardo Horibe as a Site Reliability Engineer Specialist with
  content focused on SRE, cloud infrastructure, reliability, resilience, and automation.
- **FR-002**: The site MUST include a sticky responsive header, main-section navigation, mobile
  menu, dark/light theme control, and keyboard-visible skip-to-content link.
- **FR-003**: The site MUST include hero, About, Expertise, professional experience,
  certifications, education, projects, contact, and footer sections.
- **FR-004**: The About section MUST describe 15+ years in technology and a transition from
  infrastructure and operations to DevOps and SRE, without unsupported outcomes.
- **FR-005**: The Expertise section MUST categorise supplied skills and MUST NOT display arbitrary
  skill percentages or levels.
- **FR-006**: The experience section MUST include the supplied eight roles and display resume-
  sourced dates and descriptions only after they have been verified against the LinkedIn-exported
  resume. Missing source details MUST be labelled as requiring confirmation and MUST NOT be
  invented.
- **FR-007**: The certifications and education sections MUST include only the certifications and
  institutions supplied in the feature description or subsequently verified resume evidence.
- **FR-008**: The Projects section MUST obtain card content from dedicated project data and support
  title, description, technologies, repository link, and optional live demonstration. Unreviewed
  project information MUST be clearly marked for validation.
- **FR-009**: The Contact section MUST provide LinkedIn, GitHub, professional email, and resume
  actions; it MUST NOT show a phone number or require a server-side contact form.
- **FR-010**: The site MUST work from 320px-wide screens through large desktop monitors without
  unintended horizontal scrolling; navigation, typography, cards, timelines, buttons, and grids
  MUST adapt to the viewport.
- **FR-011**: The site MUST support accessible dark and light themes, use system preference on a
  first visit, fall back to dark when no preference exists, persist an explicit user choice when
  storage is available, and avoid an incorrect-theme flash during loading.
- **FR-012**: The site MUST meet WCAG 2.1 AA principles through semantic structure, keyboard use,
  visible focus, meaningful image alternatives, reduced-motion support, sufficient contrast, and
  non-color-only communication.
- **FR-013**: The initial release MUST operate as a static site compatible with GitHub Pages and
  use automated deployment that blocks publication when required checks or the production build
  fail.
- **FR-014**: Public pages MUST include appropriate page title, description, canonical address,
  Open Graph metadata, and structured professional information, using
  `https://ricardo.horibe.com.br` as the production canonical address.
- **FR-015**: The initial public content MUST be English, while the content model MUST allow a
  future Portuguese translation without restructuring the portfolio.
- **FR-016**: The site MUST not expose secrets, private credentials, or sensitive personal data,
  and external links MUST include appropriate security protections.

### Key Entities *(include if feature involves data)*

- **Professional profile**: Verified identity, positioning, introduction, contact actions, and
  professional summary for Ricardo Horibe.
- **Experience entry**: Employer, role, verified dates, verified description, and supporting
  technologies for one career position.
- **Expertise category**: A named grouping of resume-supported technologies and professional
  capabilities, with no unsupported proficiency scoring.
- **Project entry**: Dedicated-data record with title, verified description, technologies,
  repository link, optional demonstration, and validation status.
- **Theme preference**: A visitor's current visual theme selection and its persistence state.

### Constitution Compliance *(mandatory)*

- **Content evidence**: The supplied professional profile, roles, skills, certifications, and
  education are the only approved initial claims. Exact employment dates, role descriptions,
  professional email, resume file, external profile URLs, and project data require the
  LinkedIn-exported resume or repository review before publication.
- **Experience and quality**: All relevant content and interactions must satisfy the mobile,
  theme, WCAG 2.1 AA, performance, visual-stability, SEO, static-delivery, privacy/security, and
  GitHub Pages principles in the project constitution.
- **Validation**: Release validation must cover responsive behavior, themes, navigation,
  accessibility, critical content utilities/components, and the production build.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At 320px, 768px, 1024px, and 1440px viewport widths, 100% of primary navigation,
  section content, and contact actions are reachable without unintended horizontal scrolling.
- **SC-002**: A keyboard-only user can reach the main content and activate every visible navigation,
  theme, contact, project, and back-to-top control without a pointer.
- **SC-003**: On a first visit and after a manually chosen theme, the active theme is correct in
  100% of tested page loads, with no visible incorrect-theme flash.
- **SC-004**: 100% of published professional claims, dates, numerical results, and project
  descriptions are traceable to approved resume or repository evidence; unverified items are not
  published as factual claims.
- **SC-005**: 100% of identified representative user paths remain usable when reduced motion is
  requested and when optional imagery or demonstrations are unavailable.
- **SC-006**: The release passes the defined linting, formatting, type, automated-test, and
  production-build quality gates before publication.

## Assumptions

- The LinkedIn-exported resume will be supplied or made available before publishing exact dates,
  detailed role descriptions, email, resume download, or external-profile destinations.
- A single-page static portfolio is sufficient for the first release; no visitor accounts, forms,
  analytics collection, or backend services are included.
- LinkedIn, GitHub, resume, source, and project destinations will be verified before their actions
  are enabled publicly.
- English is the initial language; a later Portuguese translation uses the same content structure.
- The site follows the project constitution's quality gates and uses GitHub Pages with
  `ricardo.horibe.com.br` as the initial public hosting target.

## Dependencies

- LinkedIn-exported resume for verification of professional facts, dates, and descriptions.
- Verified LinkedIn, GitHub, professional-email, resume-download, source, and featured-project
  destinations.
- A GitHub repository and Pages-enabled publication environment with permission to configure the
  automated deployment workflow.
