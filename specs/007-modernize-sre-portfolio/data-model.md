# Data Model: Modernize SRE Portfolio

## Company group

| Field | Type | Rules |
|---|---|---|
| `id` | string | Stable, unique identifier for row, marker, and accessible-control IDs. |
| `company` | string | Verified employer name; always rendered as text. |
| `brand` | Brand ID | Resolves through the brand registry. |
| `employmentType`, `workMode`, `location` | existing metadata | Render only when present and verified. |
| `roles` | Role[] | One or more roles, all in the same group card. |
| `status` | `verified` | Only verified groups render. |

One Company group has one or more Roles and exactly one Timeline marker.

## Role and disclosure

| Field | Type | Rules |
|---|---|---|
| `role`, dates, `summary`, `highlight` | existing verified fields | Preserve professional meaning. |
| `responsibilities` | string[] | One independently controlled disclosure per role. |
| `technologies` | Technology tag[] | Wrap in normal flow and never create markers. |
| `roleIcon` | Icon ID | Decorative when adjacent title is visible. |

State transition: `closed → open → closed`; opening one role cannot change another role.

## Brand asset and certification

| Field | Type | Rules |
|---|---|---|
| `id`, `kind`, `displayName` | registry identity | Unique, required context and text identity. |
| `status` | approved or fallback | Approved requires local asset and provenance. |
| `localPath` | optional local path | Approved values resolve below `public/assets/brands/` to a valid SVG. |
| `sourceUrl` | optional URL | Provenance for approved marks. |
| `fallbackInitials` | string | Required for every asset record. |

Each Certification references one issuer Brand asset and renders through one normalized card.

## Project publication

Pending projects are excluded. If there are zero verified public project records, omit Projects and its navigation target; otherwise only verified approved fields render.
