# Data Model: Refine SRE Portfolio

## ExpertiseCard

| Field | Type | Rules |
|-------|------|-------|
| `id` | stable string | Unique, kebab-case; used as React key only. |
| `title` | string | Exact visible category title. |
| `icon` | application icon name | Must resolve through the shared Lucide icon system. |
| `skills` | readonly string array | Non-empty; preserves requested tool and platform labels. |

Required records: AI Engineering Tools (Claude, ChatGPT, Codex, Devin); Cloud Platforms (AWS, Microsoft Azure, DigitalOcean); Containers and orchestration (Kubernetes, Docker, Amazon EKS, Azure AKS, Rancher (RKE)); Infrastructure as Code (Terraform, Ansible, Puppet, AWS CloudFormation); CI/CD and automation (GitLab, GitHub Actions, Jenkins); Operating Systems (Windows, Linux, macOS); Reliability and operations (High Availability, Resilience, Incident Management). Existing verified observability content remains as the eighth card unless its verified content is intentionally replaced during implementation review.

## CompanyGroup

Existing verified experience record with a stable `id`, company text, employment metadata, and one or more roles. Remove its presentation-only company brand reference once no Professional Experience component consumes it. No professional claim or role field changes in this feature.

**Relationship**: One CompanyGroup owns one TimelineRow and one or more Role records.

## TimelineRow

| Field | Source | Rules |
|-------|--------|-------|
| `companyId` | `CompanyGroup.id` | Unique among rendered rows. |
| `revealed` | observer controller | Starts visible for reduced motion/no enhancement; otherwise becomes true once and never returns false during a page view. |
| `active` | observer controller | True only for the selected visible company row; maps to exactly one marker and one outgoing rail segment. |

**State transitions**: `unrevealed → revealed`; `inactive ↔ active`. An active row may become inactive during reverse scrolling without losing its revealed state.

## IconTreatment

Shared presentation contract for briefcase, metadata, and issuer treatments.

| Field | Rules |
|-------|-------|
| `purpose` | Company identity, role metadata, or certification issuer. |
| `size` | Fixed semantic size token appropriate to its card position. |
| `stroke` | Shared Lucide stroke weight for all outline icons. |
| `color` | Bright teal for company identity and designated primary states; restrained secondary accent only where contrast passes. |
| `accessibleName` | Present when the icon conveys information not already available in text; otherwise decorative and adjacent text remains available. |
| `fallback` | Certification issuer may use a high-contrast text-supported tile; company groups always use BriefcaseIcon, never initials or a brand logo. |

## Validation invariants

- One rendered TimelineRow, marker, and rail segment per CompanyGroup.
- No marker is descended from a company card, role, accordion, responsibility list, or technology chip.
- A BriefcaseIcon accompanies every company card and no company-brand image is rendered in Professional Experience.
- All rendered icon treatments have an accessible name or adjacent visible text and meet WCAG AA contrast on their final dark background.
