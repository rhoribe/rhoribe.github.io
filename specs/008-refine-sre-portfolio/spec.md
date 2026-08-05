# Feature Specification: Refine SRE Portfolio

**Feature Branch**: `main`

**Created**: 2026-08-04

**Status**: Draft — pending constitution amendment for the dark-only theme

**Input**: Refine Ricardo Horibe's SRE portfolio with a premium accessible experience timeline, permanent dark theme, corrected expertise navigation, clear consistent icons, and AI Engineering Tools expertise.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Scan a progressive career timeline (Priority: P1)

As a recruiter or engineering leader, I can scroll through Professional Experience and see each company group become prominent in a calm, polished sequence that helps me follow Ricardo's career history.

**Why this priority**: Professional experience is the portfolio's primary evidence of SRE capability; the effect must add orientation without distracting from verified content.

**Independent Test**: A participant can scroll from before to after the experience section and identify every company group, its single marker, and the active portion of the rail without a card, marker, or content becoming inaccessible.

**Acceptance Scenarios**:

1. **Given** a visitor enters Professional Experience, **When** each company group reaches the reading area, **Then** its card becomes progressively visible with a small upward settling movement and a subtle accent transition.
2. **Given** a company group is the current reading focus, **When** the visitor scrolls through it, **Then** only that group's one timeline marker and its corresponding rail segment receive the active accent treatment.
3. **Given** a company group contains multiple roles, **When** its card is visible, **Then** it has exactly one marker and one company-level briefcase icon regardless of how many roles it contains.
4. **Given** the visitor scrolls rapidly in either direction, **When** the visible company group changes, **Then** cards and the rail remain stable, readable, and free of flashing, overlap, or delayed misleading active states.

---

### User Story 2 - Use a clear, permanent dark interface (Priority: P1)

As a visitor, I can use a consistently refined dark portfolio with reliable navigation and clear visual hierarchy, without encountering a theme switch or a light-theme state.

**Why this priority**: A permanent visual identity and dependable navigation make the portfolio easier to assess quickly.

**Independent Test**: A participant can open the page in a fresh browser, navigate using the Expertise control, and confirm the Core Expertise section is reached while no light-theme control or light-theme rendering is available.

**Acceptance Scenarios**:

1. **Given** a visitor loads or reloads the portfolio under any operating-system preference or prior local preference, **When** the page renders, **Then** it displays the refined dark theme only.
2. **Given** a visitor scans or operates the header by pointer, keyboard, or touch, **When** they look for theme controls, **Then** no theme-switch control is present or reachable.
3. **Given** a visitor activates the header's Expertise navigation control, **When** the destination is reached, **Then** the Core Expertise heading is in view and the destination is unambiguous.

---

### User Story 3 - Recognize experience, credentials, and AI tools clearly (Priority: P2)

As a prospective employer, I can quickly understand professional experience, certifications, and AI Engineering Tools through consistently clear, accessible icons and labels.

**Why this priority**: Consistent visual language supports credibility and scanning without relying on brand imagery alone.

**Independent Test**: A participant can scan all experience and certification cards and identify their purpose from text and consistently styled, high-contrast icons; they can also find the AI Engineering Tools card and its four listed tools.

**Acceptance Scenarios**:

1. **Given** a visitor views any company group, **When** they inspect its company identity area, **Then** it uses the same clear generic work-briefcase icon in the primary accent, with an accessible name that complements the company text.
2. **Given** a visitor views Professional Experience or Certifications, **When** they compare icons, **Then** icons share one visual system, consistent stroke weight, aligned placement, and sufficient contrast against their dark card backgrounds.
3. **Given** a visitor scans Core Expertise, **When** they look for AI-focused capabilities, **Then** they find an "AI Engineering Tools" card listing Claude, ChatGPT, Codex, and Devin.
4. **Given** a company asset or certification mark was previously present, **When** the relevant card renders, **Then** no broken logo, initials fallback, low-contrast mark, or inconsistent company logo is displayed.

### Edge Cases

- Reduced-motion preference is enabled; all experience cards and timeline state remain immediately understandable without animated movement or a required transition.
- The visitor lands directly at a company group through a deep link, browser find, keyboard navigation, or a resize; the relevant content remains visible and the timeline does not create duplicate or misplaced markers.
- A long company, certification, or tool name wraps at narrow widths; its icon remains aligned, visible, and does not overlap text or create horizontal page overflow.
- JavaScript is unavailable or an animation cannot run; all company cards, company names, role content, markers, and rail context remain visible in chronological order.
- The visitor has a high-contrast display mode; the distinction between inactive and active timeline states remains understandable through more than color alone.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Professional Experience MUST retain one chronological company card and exactly one timeline marker for each verified company group. A group with multiple roles MUST NOT receive additional markers.
- **FR-002**: As a visitor scrolls through Professional Experience, each company card MUST progress from a subdued to fully visible state using only a subtle opacity change, small vertical translation, and controlled accent-color change; the current group marker and its corresponding rail segment MUST receive the active treatment.
- **FR-003**: The experience effect MUST preserve chronological readability during slow, fast, reverse, touch, keyboard, and programmatic scrolling. It MUST not obscure content, cause horizontal overflow, trigger layout shift, flash, or make active-state meaning depend on color alone.
- **FR-004**: When reduced motion is requested, experience cards, markers, and rail segments MUST remain fully available without motion; no essential state or content may depend on animation.
- **FR-005**: Every Professional Experience company identity MUST use the same generic work-briefcase icon instead of a company logo, image, initials treatment, or company-specific visual mark. The icon MUST be visually clear, use the refined bright-teal primary accent, have an accessible name, and supplement rather than replace company text.
- **FR-006**: Professional Experience and Certifications MUST use one consistent icon system with consistent stroke weight, clear size, and aligned placement. Each icon MUST meet WCAG AA contrast against its dark card background and must not be near-black, low-contrast monochrome, or visually unclear.
- **FR-007**: The header MUST not render, expose, or retain a theme-switch control. The portfolio MUST render only the refined dark theme regardless of device preference, stored preference, or navigation state.
- **FR-008**: The header Expertise navigation control MUST reliably move the visitor to the Core Expertise section, including from any page scroll position and through keyboard or pointer activation.
- **FR-009**: Core Expertise MUST include one card titled "AI Engineering Tools" that lists Claude, ChatGPT, Codex, and Devin. The new card MUST match the section's responsive visual hierarchy and remain readable at supported viewport sizes.
- **FR-010**: Bright teal MUST be the primary accent for high-priority interactive and identity elements. Electric blue or violet MAY be used only as restrained secondary emphasis and MUST preserve WCAG AA contrast on the dark interface.
- **FR-011**: Every experience and certification icon MUST have text or an accessible name that communicates its purpose; neither a logo nor color alone may carry required information.
- **FR-012**: The portfolio MUST retain its verified professional content, static delivery, privacy protections, semantic navigation, visible keyboard focus, and accessible contrast. It MUST not introduce a backend, data collection, secrets, a public phone number, or unsupported professional claims.
- **FR-013**: At 320px, 375px, 768px, 1024px, and 1440px widths, the header, Core Expertise, Professional Experience, Certifications, cards, icons, markers, and rail MUST be readable and operable with no horizontal page overflow, clipping, overlap, or detached icon.

### Key Entities

- **Company group**: One verified employer and its one or more verified roles, represented by one company card, one generic briefcase icon, and one timeline marker.
- **Timeline reading state**: The subdued, active, or completed visual status of a company group and its associated rail segment while a visitor moves through the experience section.
- **Icon treatment**: The shared visual and accessibility rules for experience and certification icons, including stroke weight, accent use, alignment, accessible name, and contrast.
- **Expertise card**: A labeled Core Expertise item containing a focused capability area and its listed tools.

### Constitution Compliance *(mandatory)*

- **Content evidence**: This feature changes presentation only and retains verified professional content. The added tool names describe personal expertise categories and MUST be confirmed as accurate before public release. No company logo or implied employer endorsement is introduced; company text remains the verified identity. No phone number, secret, private credential, or unsupported claim may be added.
- **Experience and quality**: Responsive support from 320px upward, WCAG 2.1 AA contrast, keyboard access, visible focus, reduced-motion support, performance, visual stability, concise credible copy, privacy, static delivery, search presentation, and GitHub Pages quality gates remain applicable. The request for a permanent dark-only theme conflicts with Constitution Principle II, which requires accessible dark and light themes and a selectable persistent preference. Implementation requires the project owner to approve and document an amendment to Principle II before the dark-only requirement can be accepted.
- **Validation**: Validate all stated viewport widths; count exactly one marker per company group; test scrolling in both directions and rapid scrolling; verify reduced-motion and no-script readability; test Expertise navigation from header and keyboard; confirm absent theme control and dark-only state after fresh load and saved-preference states once the amendment is approved; verify icon contrast, names, alignment, no broken or initial-based company branding, and production checks.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: At all five target viewport widths, 100% of Professional Experience company groups have exactly one marker, and 0 markers appear inside cards, roles, responsibility content, or technology labels.
- **SC-002**: In a manual scroll test covering forward, reverse, and rapid scrolling, 100% of company cards transition to a fully readable state and the active marker and rail segment always correspond to a visible company group, with 0 observed instances of flashing, overlap, clipping, or horizontal overflow.
- **SC-003**: With reduced motion enabled and with scripted effects unavailable, 100% of experience content, company identities, and chronology remain visible and understandable without animation.
- **SC-004**: 100% of rendered Professional Experience company identities use the same accessible generic work-briefcase icon and 0 company logos, broken images, initials, low-contrast marks, or inconsistent company visual marks are displayed.
- **SC-005**: 100% of experience and certification icons meet WCAG AA contrast against their dark card backgrounds, share the designated visual treatment, and remain aligned with their associated content at all target widths.
- **SC-006**: In a fresh-load, stored-preference, keyboard, and pointer test, the Expertise control reaches Core Expertise successfully in 100% of attempts; once the constitution amendment is approved, 0 theme controls or light-theme renderings are present.
- **SC-007**: At least 90% of moderated participants can find the AI Engineering Tools card and identify Claude, ChatGPT, Codex, and Devin within 20 seconds at 375px and 1440px widths.

## Assumptions

- The existing company groups, role content, certifications, and Core Expertise content are the authoritative verified portfolio inventory unless the project owner confirms otherwise.
- The generic work-briefcase icon is an appropriate non-branded representation for every company group and does not imply endorsement.
- The timeline's active state will use text, position, and/or visual treatment in addition to accent color so it is understandable to visitors with color-vision differences.
- The requested dark-only behavior is intentionally a product decision, but it cannot be implemented under the current constitution until the project owner approves a Principle II amendment.
- The new AI Engineering Tools entry is accurate for Ricardo and will be verified before public deployment.

## Out of Scope

- Adding or altering professional roles, dates, achievements, certifications, employer endorsements, or other professional claims without verified approval.
- Reintroducing company logos, logo fallbacks, initials, or company-specific marks in Professional Experience.
- Changing the static deployment model, adding a backend, visitor tracking, data collection, authentication, or a public phone number.
- Broader redesign of sections not named in this feature, except for necessary shared dark-theme or icon consistency adjustments.
