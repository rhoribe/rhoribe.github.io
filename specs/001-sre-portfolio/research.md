# Research: Ricardo Horibe SRE Portfolio

## Decisions

### Static App Router Export
**Decision**: Use Next.js App Router with static export and no backend/API dependency.
**Rationale**: It meets GitHub Pages compatibility and minimizes operational surface area.
**Alternatives considered**: Server rendering and content APIs add runtime hosting or data dependencies.

### Theme Resolution Before Hydration
**Decision**: Resolve saved explicit preference, then system preference, then dark fallback before first paint.
**Rationale**: This prevents visible wrong-theme flash and supports the required preference order.
**Alternatives considered**: Post-hydration resolution can flash; always-dark ignores system preference.

### Local Verified Content
**Decision**: Use typed local content files and no runtime GitHub API calls.
**Rationale**: Static data avoids tokens, rate limits, availability risk, and unreviewed public claims.
**Alternatives considered**: GitHub API loading is deferred because it adds external dependency and governance risk.

### Custom-Domain Pages Hosting
**Decision**: Deploy GitHub Pages with `ricardo.horibe.com.br` as canonical URL.
**Rationale**: It reflects the accepted clarification and provides stable metadata/sharing URLs.
**Alternatives considered**: GitHub Pages URL-only launch conflicts with the accepted domain decision.

### Motion as Progressive Enhancement
**Decision**: Use Framer Motion only for non-essential enhancement and reduce it on request.
**Rationale**: This supports polish without compromising accessibility or performance.
**Alternatives considered**: Always-on animation is inaccessible; no animation remains valid where it adds no value.
