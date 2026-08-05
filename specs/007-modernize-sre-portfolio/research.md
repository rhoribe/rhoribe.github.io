# Research: Modernize SRE Portfolio

## Existing foundation

**Decision**: Reuse the present Next.js/TypeScript application, global CSS theme variables, Framer Motion, Lucide/Simple Icons, local brand registry, Vitest, and Playwright.

**Rationale**: The repository already supplies the rendering, motion, icon, content, theme, and test capabilities required. A new UI framework adds migration and payload cost without a capability gap.

**Alternatives considered**: A component-library framework; rejected in favor of native React controls and existing CSS.

## Timeline architecture

**Decision**: Render an explicit row for each company group with a dedicated rail/marker column and a sibling `CompanyExperienceCard`; render one marker element per company group.

**Rationale**: Current pseudo-markers are difficult to count and enforce structurally. Explicit elements make the five-marker invariant testable and isolate the rail from expanding cards. Card interiors remain normal-flow Grid/Flex layouts.

**Alternatives considered**: Keep pseudo-markers; rejected for testability. Absolute-position card interiors; rejected because expansion can overlap content.

## Accordion architecture

**Decision**: Create a client `ExperienceAccordion` using a button, labelled controlled region, stable IDs, `aria-expanded`, `aria-controls`, open/closed labels, and a decorative chevron. Each role owns independent state.

**Rationale**: Existing native details controls are keyboard capable but lack the explicit state-label, relationship, and motion contract. Independent state permits all eight panels to remain open.

**Alternatives considered**: Keep generic details; rejected for incomplete requested ARIA/state contract. Single-open accordion; rejected by the specification.

## Motion and tokens

**Decision**: Use a 220–280ms ease-out height/opacity/chevron transition when motion is allowed and immediate semantic state changes under reduced motion. Extend semantic tokens for both themes with surfaces, typography, spacing, radii, borders, shadows, primary teal, limited secondary accent, hover, and focus.

**Rationale**: This provides refinement without visual jumps and centralizes WCAG contrast/focus review.

**Alternatives considered**: Spring animation or hard-coded component colors; rejected for motion noise and theme inconsistency.

## Assets and projects

**Decision**: Retain one brand registry. Render approved local SVGs in reserved frames and use text-supported monograms otherwise. Filter Projects and its navigation link through the existing publishability helper.

**Rationale**: Local assets avoid remote failure and layout shift; static export has no runtime image service. The sole project is pending validation and must not appear publicly.

**Alternatives considered**: Hotlinked assets or an empty Projects section; rejected for reliability/privacy and incomplete content respectively.

## Validation

**Decision**: Extend existing Vitest/Playwright suites with component ARIA tests, explicit-width screenshots, all-eight-open coverage, overflow/image checks, focus/keyboard/reduced-motion tests, local-file validation, and manual accessibility/Lighthouse review.

**Rationale**: Existing coverage lacks explicit ARIA state, five-marker structure, all-open layout, and filesystem asset checks.

**Alternatives considered**: Manual-only validation; rejected because these invariants are regression-prone.
