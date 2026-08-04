# Data Model: Premium Engineering Portfolio

This feature retains verified source content and adds/refines presentation configuration only. It introduces no persisted visitor data or backend model.

## DesignTokenSet

| Field | Description | Validation |
| --- | --- | --- |
| `theme` | Existing light or dark mode | Exactly one supported theme is active |
| `color` | Semantic background, surface, text, border, accent, focus, shadow, and logo-treatment values | Relevant foreground/background pairs meet applicable contrast requirements |
| `space` | Shared scale for gutters, sections, groups, cards, controls, badges, and disclosure content | Ordered, reusable, and bounded across widths |
| `type` | Display, section, card, body, metadata, caption, and badge styles | Responsive range, readable line height, and distinct hierarchy |
| `layout` | Reading measure, grid bounds, card density, radius, and mark frame | Prose targets about 70 characters; layouts reflow without overflow |
| `motion` | Duration, easing, lift, shadow, border emphasis, and reduced-motion rule | No bounce, no motion-only information, and no layout-affecting entrance |

## BrandAsset

| Field | Description | Validation |
| --- | --- | --- |
| `id` | Stable brand identifier | Unique and referenced by an employer or issuer mapping |
| `kind` | `company` or `issuer` | Determines asset folder and presentation default |
| `displayName` | Human-readable identity | Matches existing verified spelling or documented alias |
| `localPath` | Local SVG path | Must be in approved static asset folders; no remote URL |
| `sourceUrl` | Official public source used for acquisition/review | Required for each approved non-fallback asset |
| `reviewedOn` | Provenance review date | Required for each approved non-fallback asset |
| `themeMode` | `light`, `dark`, `adaptive`, or `monochrome` treatment | Legible in both supported themes |
| `fallbackInitials` | Text fallback | Non-empty, concise, and accessible |
| `status` | `approved`, `fallback`, or `pending-review` | Only approved assets and fallbacks may render publicly |

## LogoResolution

| Field | Description | Validation |
| --- | --- | --- |
| `brandId` | Requested company or issuer mark | Resolves to exactly one manifest entry |
| `presentation` | `company` or `issuer` | Selects context-specific frame and sizing |
| `resolvedMode` | `asset` or `initials` | Asset only when approved and locally valid |
| `accessibleName` | Identity exposed to assistive technology | Brand identity remains available when the image is decorative |

## ExperiencePresentation

| Field | Description | Validation |
| --- | --- | --- |
| `company` | Existing verified company record | Resolves to CompanyLogo or initials fallback |
| `roles` | Existing role records | No professional facts change |
| `summary` | Existing visible role summary | Appears before the disclosure |
| `responsibilitiesOpen` | Per-role disclosure state | Keyboard/pointer operable with exposed state |
| `technologies` | Existing technology labels | Wrap naturally without clipping |

## CertificationGalleryItem

| Field | Description | Validation |
| --- | --- | --- |
| `certificationName` | Existing certification name | Always visible and unchanged |
| `issuer` | Existing certification issuer | Resolves through IssuerLogo or initials fallback |
| `issuerMark` | Resolved issuer presentation | Stable reserved frame and aspect ratio |
| `hiddenMetadata` | Existing dates, status, IDs, skills, links, categories, and ordering | Remains in source records but is not rendered in the gallery |

## ContactAction

| Field | Description | Validation |
| --- | --- | --- |
| `label` | Descriptive public action label | Non-empty accessible name |
| `destination` | Existing approved email, GitHub, LinkedIn, or resume target | Preserves privacy and external-link safety |
| `icon` | Recognizable brand or document mark | Supports text label; never sole identifier |
| `external` | Whether destination is external | External opening behavior is safe |

## Relationships

- `ExperiencePresentation.company` resolves to one company `BrandAsset` through `LogoResolution`.
- `CertificationGalleryItem.issuer` resolves to one issuer `BrandAsset` through `LogoResolution`.
- `DesignTokenSet` is consumed by section, grid, card, badge, accordion, contact-action, logo, and motion presentations.
- Existing content records remain the only source for experience, certifications, and contact actions; presentation configuration must not add or alter professional facts.
