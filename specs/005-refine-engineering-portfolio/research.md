# Research: Refine Engineering Portfolio

## Decision: Use semantic design tokens and bounded fluid scales

**Rationale**: A small semantic token layer makes light/dark parity, responsive hierarchy, shared spacing, card consistency, and refinements auditable. Bounded fluid values preserve a premium hierarchy across the required viewport range without uncontrolled size growth.

**Alternatives considered**:

- One-off values in each section: rejected because it recreates the existing spacing and visual-consistency risks.
- A large third-party design-system package: rejected because the portfolio needs a focused visual language and must avoid additional runtime cost.

## Decision: Use local official SVGs plus a provenance manifest and initials fallback

**Rationale**: Local SVGs satisfy static delivery, avoid runtime network and hotlink dependency, and permit predictable dimensions. A manifest makes each asset source and theme treatment reviewable. Initials safely cover unavailable, unsuitable, or permission-constrained marks.

**Alternatives considered**:

- Hotlinking official logos: rejected because external availability, privacy, layout stability, and static-export reliability would be outside repository control.
- Using generic icon libraries for company and issuer identity: rejected because the specification requires official branding where possible.
- Using unofficial logo aggregators as a source: rejected because it does not meet official-source provenance requirements.

## Decision: Share a logo foundation while exposing CompanyLogo and IssuerLogo

**Rationale**: Company and issuer marks have identical core concerns—local resolution, reserved dimensions, aspect ratio, themes, alternatives, and fallback—while their usage context and default sizing differ. A common foundation reduces duplicate logic without hiding intent at call sites.

**Alternatives considered**:

- One universal generic logo component only: rejected because experience and certification surfaces need clear, domain-specific APIs.
- Separate duplicated components: rejected because fallback and accessibility behaviors could drift.

## Decision: Use a compact certification gallery without interactive filters

**Rationale**: The requested public experience is scanning issuer identity and credential title, not managing credential administration. Removing filters and administrative fields reduces density and matches the presentation scope while preserving inventory in content records.

**Alternatives considered**:

- Preserve filters, dates, statuses, IDs, and skills: rejected because they directly conflict with the requested two-field gallery.
- Delete hidden metadata from records: rejected because this is a presentation refinement and existing verified content should be preserved for future approved use.

## Decision: Use native disclosure semantics for experience responsibilities

**Rationale**: Native disclosure provides an accessible baseline for keyboard interaction and expanded state. Styling can make it feel intentional while preserving robust behavior without adding state-management complexity.

**Alternatives considered**:

- Custom clickable divs: rejected because keyboard and assistive-technology semantics would be easy to miss.
- Expose every responsibility by default: rejected because it increases experience-card density against the requested scan-first hierarchy.

## Decision: Treat hover as enhancement and preserve reduced-motion behavior

**Rationale**: Small lifts, shadows, and border emphasis can add tactile polish on fine-pointer devices without becoming a dependency. Existing motion support provides a foundation for stagger and reveal behaviors that can be reduced or removed when preferred.

**Alternatives considered**:

- Tilt, bounce, or continuous visual motion: rejected because it conflicts with the requested restrained, premium motion and may distract or discomfort visitors.
- Hover-only disclosure or navigation feedback: rejected because touch and keyboard visitors require equivalent access.

## Decision: Validate visual behavior at explicit width/theme/input combinations

**Rationale**: The required widths expose different failure modes: 320/375 wrapping, 768/1024 grid transitions, and 1440/1920 maximum-measure and whitespace discipline. Combining them with both themes, keyboard, and reduced motion makes quality criteria testable.

**Alternatives considered**:

- Desktop-only screenshot review: rejected because it does not verify the stated responsive and accessibility constraints.
- Pixel-perfect snapshots as the sole gate: rejected because behavior, semantics, and overflow need functional assertions too.
