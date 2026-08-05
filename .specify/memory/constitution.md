<!--
Sync Impact Report
- Version change: unversioned template -> 1.0.0
- Modified principles: template placeholders -> Principles I-X below
- Added sections: Portfolio Constraints and Quality Gates & Delivery Workflow
- Removed sections: none
- Templates requiring updates:
  - ✅ .specify/templates/plan-template.md
  - ✅ .specify/templates/spec-template.md
  - ✅ .specify/templates/tasks-template.md
- Follow-up TODOs: none
-->
# Ricardo Horibe Professional Portfolio Constitution

## Core Principles

### I. Mobile-First Responsive Design
Every page and component MUST function from 320px-wide mobile screens through large desktop monitors. Layouts MUST avoid unintended horizontal scrolling, and navigation, typography, cards, timelines, buttons, and grids MUST adapt to their available viewport. This protects the primary visitor experience and keeps content usable regardless of device.

### II. Refined Dark Theme
The site MUST present one accessible refined dark theme. It MUST NOT expose a light-theme state, theme-selection control, or persisted theme preference. The permanent dark palette MUST satisfy applicable contrast requirements.

### III. Accessible by Default
The portfolio MUST meet WCAG 2.1 AA principles through semantic HTML, full keyboard navigation, visible focus indicators, and meaningful alternative text for relevant images. It MUST respect `prefers-reduced-motion` and MUST NOT communicate information through color alone. Accessibility is a baseline quality requirement, not a later enhancement.

### IV. Performance and Visual Stability
The site MUST load quickly on mobile and desktop connections. Implementations MUST avoid unnecessary JavaScript and dependencies, optimize images and static assets, and minimize layout shift. Changes MUST target strong Lighthouse results for performance, accessibility, best practices, and SEO.

### V. Maintainable TypeScript
Implementation MUST use TypeScript with strict type checking. Components MUST be small, reusable, and clearly named; unnecessary abstractions and overengineering are prohibited. Portfolio content MUST remain separate from presentation components whenever practical. Linting and formatting checks are required for every production change.

### VI. Verifiable Content Integrity
Professional information MUST be grounded in Ricardo Horibe's LinkedIn-exported resume. The site MUST NOT invent experience, technologies, achievements, certifications, dates, or numerical results. Unsupported content MUST be explicitly marked as requiring confirmation before public display. The phone number MUST NOT be published; the email address MAY appear only in the contact section or behind a contact action.

### VII. Privacy, Security, and Static Delivery
The repository and published site MUST NOT expose secrets, API keys, private credentials, or sensitive personal data. External links MUST use appropriate security attributes. The initial release MUST require no backend and MUST operate as a static website.

### VIII. Reliable GitHub Pages Deployment
The site MUST be compatible with GitHub Pages and deploy through GitHub Actions. The production build MUST pass before deployment. The workflow MUST fail clearly when linting, type checking, testing, or building fails, so broken output cannot be silently released.

### IX. Searchable, Credible Professional Presentation
Every public page MUST provide an appropriate title, description, Open Graph metadata, canonical URL, and relevant structured information. Copy MUST be concise, professional, and credible, presenting Ricardo as a senior SRE and DevOps professional without exaggerated or unsupported claims.

### X. Proportionate Automated Validation
Critical components and utilities MUST have automated tests where they add meaningful confidence. Each relevant change MUST validate responsive behavior, theme switching, navigation, and accessibility. The production build MUST be tested before release.

## Portfolio Constraints

The initial portfolio is a static GitHub Pages site. Any feature specification MUST identify the resume evidence for proposed professional content and flag unverified content for confirmation. Specifications and plans MUST include mobile-responsive, permanent-dark-theme, accessibility, performance, privacy, SEO, and deployment implications whenever the feature can affect them. No new backend, authentication flow, or collection of visitor data is permitted without a constitution amendment.

## Quality Gates & Delivery Workflow

Before implementation, each plan MUST complete a Constitution Check that records how the feature meets Principles I-X and explicitly justifies any exception for amendment review. Tasks MUST include applicable responsive, theme, keyboard/accessibility, content-evidence, performance, SEO, and production-build validation. Before release or deployment, linting, formatting, strict type checking, applicable automated tests, and the production build MUST pass. GitHub Actions is the deployment authority and MUST stop on any failed quality gate.

## Governance

This constitution supersedes conflicting project practices, feature specifications, plans, and tasks. Every future specification and implementation plan MUST demonstrate compliance with all applicable principles; reviewers MUST reject work that lacks required evidence or quality gates.

Amendments require a documented proposal that states the affected principles, rationale, migration impact, and validation changes. The project owner must approve an amendment before implementation. Use semantic versioning for governance: MAJOR for incompatible principle removals or redefinitions, MINOR for new principles or material expansion, and PATCH for clarifications that do not change obligations. Ratification date remains the original adoption date; last-amended date changes for every approved update. Compliance is reviewed during specification, planning, code review, and pre-deployment validation.

**Version**: 2.0.0 | **Ratified**: 2026-08-03 | **Last Amended**: 2026-08-04
