# Data Model: Update Professional Profile

## Shared conventions

- `YearMonth` is an ISO `YYYY-MM` string with a valid month from `01` through `12`.
- All approved experience and certification data has verification status `verified`; existing unverified project content continues using its current pending status.
- No data object may derive a professional fact, credential URL, or expiration status from another field.
- Dates render through one formatter using abbreviated English month labels. `currentRole: true` renders `Present` and has no `endDate`.

## Profile and About

| Entity | Fields | Rules |
| --- | --- | --- |
| `Profile` | `name`, `primaryRole`, `heroStatement`, `technologyLine`, `yearsExperienceStatement` | Uses only the approved wording; no availability or scale metrics. |
| `AboutContent` | `paragraphs`, `leadershipStatement`, `careerObjective` | Two approved paragraphs; no inline view-specific composition. |
| `ExpertiseGroup` | `title`, `items`, `icon` | Each item has an existing semantic icon identifier; cards/list items remain semantic text. |
| `ContactLink` | `label`, `href`, `icon`, `external` | Email is `mailto:`; only GitHub and LinkedIn are external; external entries require safe link attributes in presentation. |

## Experience

| Entity | Fields | Rules |
| --- | --- | --- |
| `ExperienceCompany` | `company`, `employmentType`, `workMode`, `location?`, `logo?`, `roles`, `verificationStatus` | Company group is displayed once; `workMode` is `remote`, `hybrid`, or `on-site`; location is omitted if absent. |
| `ExperienceRole` | `role`, `startDate`, `endDate?`, `currentRole`, `durationLabel?`, `summary`, `responsibilities`, `highlight`, `technologies`, `roleIcon` | Must have a nonempty summary, highlight, responsibilities, and technologies. Start must precede/end at end month as approved. Current role has no end date; non-current role has an end date. |
| `Responsibility` | string | Rendered as a semantic list item; retains approved wording. |
| `CareerHighlight` | string | Always visible even when supporting details are collapsed. |
| `TechnologyTag` | `label`, `technologyId?`, `fallbackIcon` | Maps to existing technology/semantic icon identifiers; unknown brands use an approved semantic fallback. |

**Relationships**: `ExperienceCompany.roles` is a nonempty, reverse-chronological list. Each role inherits company-level employment type/work mode/location unless the approved source provides a role-specific override in a future approved revision.

## Certifications

| Entity | Fields | Rules |
| --- | --- | --- |
| `Certification` | `name`, `issuer`, `issuedDate`, `expirationDate?`, `status`, `credentialId?`, `credentialUrl?`, `skills?`, `categories`, `brand?`, `icon?`, `featured`, `displayOrder` | Required name/issuer/dates/category list. IDs are nonblank selectable text. URLs are optional explicit values only. |
| `CertificationStatus` | `active`, `expired`, `no-expiration-provided` | Status is text-visible. `active` requires a provided future expiration month; `expired` requires a provided past expiration month; no-expiration-provided has no expiration month. |
| `CertificationCategory` | approved finite identifiers: AI, AWS cloud, Azure, IaC, DevOps/CI/CD, Linux, network/security, agile, service management, governance, communications | A certification may have multiple supported categories. User-facing broad filters map deterministically to these terms. |
| `CertificationIssuer` | `name`, optional `brand`, optional semantic `icon` | Uses an existing brand if supported; otherwise uses generic certificate or relevant semantic fallback. |
| `CertificationFilter` | `kind`, `value` | `kind` is all/category/status; only one selected filter per group. No-results presentation retains the controls. |

**Ordering**: Sort featured records first, then `displayOrder`; never alter authenticity/status based on featured status.

**Validation**:

1. Every date must satisfy `YearMonth`.
2. For a record with an expiration date, status must match its relation to the current month used by the validator; an active record requires a future month and an expired record a past month.
3. A no-expiration-provided record has no expiration date.
4. Credential IDs trim to a nonempty value when present. A missing URL is valid; a URL must be explicitly supplied and valid when present.
5. Categories must belong to the defined union; at least one category is required for filtering.
6. Certification count is 24, role count is 8, and company-group count is 5.
