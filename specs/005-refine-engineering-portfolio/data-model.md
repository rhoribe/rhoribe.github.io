# Data Model: Refine Engineering Portfolio

This feature retains existing verified content records and adds presentation configuration. No persisted visitor data or backend model is introduced.

## DesignTokenSet

| Field | Description | Validation |
| --- | --- | --- |
| `theme` | Supported color mode | Exactly the existing light or dark mode |
| `color` | Semantic background, surface, text, border, accent, focus, and shadow values | Every referenced foreground/background pair meets the applicable contrast requirement |
| `space` | Named spacing scale for section, group, card, control, and inline gaps | Values are ordered and reused; no section-specific replacement scale |
| `type` | Display, section, card, body, metadata, caption, and badge styles | Includes a responsive range and readable line height |
| `layout` | Content measure, grid gaps, card radius, and logo frames | Body measure targets approximately 70 characters; layouts reflow without overflow |
| `motion` | Durations, easing, lift, shadow, border emphasis, and reduced-motion behavior | No bounce, no information dependent on motion, and no layout-affecting entrance |

## BrandAsset

| Field | Description | Validation |
| --- | --- | --- |
| `id` | Stable brand identifier | Unique and referenced by company or issuer mapping |
| `kind` | `company` or `issuer` | Determines asset folder and presentation default |
| `displayName` | Human-readable brand name | Matches the existing verified employer/issuer spelling or documented alias |
| `localPath` | Repository-local SVG asset path | Must be inside the approved static asset folders; no remote URL |
| `sourceUrl` | Official public source used for review/acquisition | Required for each non-fallback asset |
| `reviewedOn` | Asset provenance review date | Required for each non-fallback asset |
| `themeMode` | `light`, `dark`, `adaptive`, or `monochrome` treatment | Must remain legible in both supported themes |
| `alt` | Alternative text when the mark is meaningful | Required when rendered as an informative image |
| `fallbackInitials` | Text fallback | Non-empty, concise, and accessible |
| `status` | `approved`, `fallback`, or `pending-review` | Only approved assets and fallbacks may be publicly rendered |

## LogoResolution

| Field | Description | Validation |
| --- | --- | --- |
| `brandId` | Requested company or issuer mark | Must resolve to one manifest entry |
| `presentation` | `company` or `issuer` | Selects size/frame treatment |
| `resolvedMode` | `asset` or `initials` | `asset` only when status is approved and local asset is valid |
| `accessibleName` | Text exposed to assistive technology | Company/issuer identity remains available even if mark is decorative |

## ExperiencePresentation

| Field | Description | Validation |
| --- | --- | --- |
| `company` | Existing verified company record | Uses a mapped CompanyLogo or initials fallback |
| `roles` | Existing role records in chronological presentation order | No professional facts are changed |
| `summary` | Existing visible role summary | Always visible before disclosure |
| `responsibilitiesOpen` | Per-role disclosure state | Toggles by keyboard and pointer and exposes expanded/collapsed state |
| `technologies` | Existing technology tags | Wraps in natural reading order with no clipping |

## CertificationGalleryItem

| Field | Description | Validation |
| --- | --- | --- |
| `certificationName` | Existing certification name | Always visible and unchanged |
| `issuer` | Existing certification issuer | Resolved through IssuerLogo or initials fallback |
| `issuerLogo` | Resolved issuer presentation | Maintains aspect ratio and stable reserved frame |
| `hiddenMetadata` | Existing dates, status, IDs, skills, links, categories, and ordering | Preserved in source data but not rendered in this gallery |

## ContactAction

| Field | Description | Validation |
| --- | --- | --- |
| `label` | Existing descriptive public action label | Non-empty accessible name |
| `destination` | Approved email, GitHub, LinkedIn, or resume target | Preserves privacy and external-link safety rules |
| `icon` | Official/recognizable brand or document icon | Supports semantic label; never the sole identifier |
| `external` | Whether destination opens externally | External destinations use safe opening behavior |

## Relationships

- `ExperiencePresentation.company` resolves to one `BrandAsset` of kind `company` through `LogoResolution`.
- Each `CertificationGalleryItem.issuer` resolves to one `BrandAsset` of kind `issuer` through `LogoResolution`.
- `DesignTokenSet` is consumed by all logo, grid, card, badge, section, motion, accordion, and contact-action presentations.
- Existing content records remain the source for experience, certifications, and contact actions; presentation configuration must not add or alter professional facts.
