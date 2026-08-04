# Research: Premium Engineering Portfolio

## Decision: Use semantic tokens with bounded responsive scales

**Rationale**: A small semantic token layer makes dark/light parity, typography hierarchy, spacing rhythm, shared card presentation, and responsive refinement reviewable. Bounded values avoid uncontrolled growth on wide monitors while keeping 320px layouts compact.

**Alternatives considered**:

- One-off values per section: rejected because visual drift and inconsistent spacing are the core problems being addressed.
- A third-party design-system package: rejected because the portfolio needs a small deliberate language and should not add runtime weight.

## Decision: Use a single mobile-first grid rule set

**Rationale**: Expertise and certification content need consistent reflow behavior. One-column defaults with width-based promotion prevent cramped cards, clipped titles, and stretched marks.

**Alternatives considered**:

- Fixed column counts: rejected because narrow and wide content can fail unpredictably between target widths.
- Independent per-section breakpoints: rejected because it weakens visual rhythm and increases regression surface.

## Decision: Use local official SVGs with provenance and initials fallback

**Rationale**: Local SVGs preserve static delivery, privacy, predictable dimensions, and resilience. Provenance makes approved usage auditable; initials safely cover unavailable, unsuitable, or permission-constrained marks.

**Alternatives considered**:

- Hotlinking official marks: rejected due to external availability, privacy, layout stability, and static-export risks.
- Generic icon libraries or unofficial asset aggregators for company/issuer identity: rejected because they do not meet the official-brand requirement.

## Decision: Share logo resolution while exposing CompanyLogo and IssuerLogo

**Rationale**: Both logo types require local resolution, reserved dimensions, aspect-ratio preservation, theme treatment, alternatives, and fallback. Separate public components retain clear intent for experience versus certification use.

**Alternatives considered**:

- One untyped universal component: rejected because its call sites would hide context-specific semantics and sizing.
- Fully duplicated components: rejected because fallback and accessibility behavior could drift.

## Decision: Present certifications as an unfiltered compact gallery

**Rationale**: Visitors need issuer identity and credential title for quick credibility scanning. Administrative credential details and controls create density contrary to the requested presentation while remaining retained in verified content records.

**Alternatives considered**:

- Keep dates, status, skills, IDs, filters, and verification links visible: rejected because it conflicts directly with the requested gallery.
- Delete retained metadata: rejected because presentation refinement must not discard verified data.

## Decision: Use native disclosure semantics for responsibilities

**Rationale**: Native disclosure offers reliable keyboard and assistive-technology behavior while allowing a compact experience scan order. Styling and subtle motion can enhance it without making state inaccessible.

**Alternatives considered**:

- Custom clickable containers: rejected because state and keyboard behavior are easier to get wrong.
- Keep all responsibilities open: rejected because it creates excessive visual density.

## Decision: Centralize motion and hover as supplemental feedback

**Rationale**: Small lift, shadow, border emphasis, and ordered reveal add polish without distracting visitors. Shared variants prevent inconsistent durations or bounce, and a reduced-motion path preserves all content.

**Alternatives considered**:

- Tilt, bounce, or continuous effects: rejected because they conflict with a restrained engineering-focused experience.
- Hover-dependent information: rejected because touch and keyboard visitors require equivalent access.

## Decision: Test observable quality at explicit viewport/theme/input combinations

**Rationale**: The required widths reveal different risks: 320/375 wrapping, 768/1024 grid promotion, and 1440/1920 text measure and whitespace. Combining each with themes, keyboard, and reduced motion makes quality measurable.

**Alternatives considered**:

- Desktop-only review: rejected because it does not validate stated responsive and accessibility requirements.
- Screenshots as the only gate: rejected because semantics, focus, overflow, and interaction require functional checks.
