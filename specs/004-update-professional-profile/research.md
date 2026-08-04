# Research: Update Professional Profile

## Decision: Keep approved content in typed local modules

**Rationale**: The portfolio is a static Next.js export and already separates content from `app/page.tsx`. Local typed data makes the approved source reviewable, prevents accidental view-layer duplication, and requires no runtime services.

**Alternatives considered**: A CMS or contact API would add operational scope and conflict with static-delivery/privacy constraints. Inline page constants would repeat the existing maintainability problem.

## Decision: Model experience as ordered company groups with nested roles

**Rationale**: Zup Innovation, iTFLEX Tecnologia, and GSP Loteamentos each have multiple approved roles. A company group owns shared company/employment/work-mode metadata and ordered role records, preventing repeated headings while preserving each role’s dates and content.

**Alternatives considered**: A flat role array with display-time grouping risks repeat headers and scattered shared data. Calculating tenure is excluded unless it can be shown without conflicting with approved date labels.

## Decision: Store date values as validated `YYYY-MM` strings and format them centrally

**Rationale**: Machine-readable month precision supports exact approved dates and a tested “Jul 2025 – Present” UI format without time-zone conversion. A formatter can reject invalid months and handles a current role from its explicit boolean/end-date contract.

**Alternatives considered**: Browser date parsing introduces time-zone ambiguity. Display-only strings cannot be reliably validated or formatted.

## Decision: Use client-side certification filters, with static default content

**Rationale**: More than 20 certification cards need browsing controls, but their source is local static content. A small client component can manage category/status selection with keyboard-operable buttons while the default featured-first inventory remains present in static markup where practical.

**Alternatives considered**: Search adds input complexity without a demonstrated need. Server filtering cannot respond without a server. Hover menus exclude keyboard and touch users.

## Decision: Keep role essentials visible and disclose only long supporting details with native disclosure

**Rationale**: Role, dates, employment information, location/work mode, summary, and highlight must be immediately available. Responsibility lists and technology badges may be in a native `details`/`summary` disclosure to limit density. Native disclosure supplies keyboard operation and expanded state without a client-only hydration dependency; its state-change motion must remain minimal under reduced-motion preferences.

**Alternatives considered**: Fully expanded entries may make the timeline unnecessarily dense. Hiding all descriptions behind animation violates the approved usability requirements.

## Decision: Use exclusive native radio controls for certification filtering

**Rationale**: Categories and statuses are mutually exclusive browsing views. A labelled native radio group gives touch, keyboard arrow-key, screen-reader, and selected-state behavior with little custom state logic; an `aria-live` result count explains filter results.

**Alternatives considered**: Tabs imply peer content panels rather than a filtered collection. Search is not needed for the known 24-record inventory. Custom button groups require more manual keyboard/state behavior.

## Decision: Extend existing icon mappings selectively and use semantic fallbacks

**Rationale**: The current system already includes Lucide semantics and selected Simple Icons. Supported issuers/technologies use the existing brand path; otherwise the display uses certificate/cloud/infrastructure/security/Linux/agile/service-management semantic fallbacks. This preserves the icon architecture and avoids a new dependency.

**Alternatives considered**: Adding multiple icon packages increases output and visual inconsistency. Decorative emoji duplicates existing accessible icon affordances.

## Decision: Validate content invariants in unit tests

**Rationale**: Exact approved statuses, identifiers, dates, categories, and contact privacy are data integrity rules. A reusable validation helper and fixture-level tests catch mistakes before visual rendering; component/E2E tests cover semantic output and interaction.

**Alternatives considered**: Relying only on manual page review is error-prone for 24 credentials. Runtime-only validation leaves source mistakes easier to ship.
