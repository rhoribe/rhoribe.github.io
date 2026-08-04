# Data Model: Ricardo Horibe SRE Portfolio

## Shared Rules

All public content is local, typed, English-first, and has `verificationStatus` where it makes a
professional or external claim. Values are `verified`, `pending`, or `omit`; only verified
factual content may be public. Future translated text is keyed by locale without changing identity.

## Site Configuration

| Field | Purpose | Validation |
|-------|---------|------------|
| siteName | Portfolio name | Required, verified |
| canonicalUrl | Production canonical URL | `https://ricardo.horibe.com.br` |
| repositoryUrl | Source repository address | Verified GitHub URL |
| deploymentMode | User-site/project-site paths | Required |
| defaultLocale | Initial language | `en` |

## Professional Content

| Entity | Required fields | Rules |
|--------|-----------------|-------|
| Profile | name, headline, introduction, summary, optional photo | Resume-supported; image has meaningful alternative text |
| ExperienceEntry | id, employer, role, dates, description, technologies, status | Unique; resume-verified before factual public rendering |
| ExpertiseCategory | id, label, skills | Resume-supported only; never stores scoring |
| Certification/Education | title, issuer/institution, optional dates | Verified content only |
| ProjectEntry | id, title, description, technologies, repository URL, optional demo URL, status | Pending entries clearly state validation status |
| NavigationItem | section anchor, accessible label | Targets a real section landmark |
| SocialLink | platform, label, verified URL, display rule | Email is contact-only and needs approval |
| ThemePreference | `light` or `dark` | Persistence failure cannot block current-session selection |

Experience renders chronologically as an accessible list/timeline and collapses to one column on mobile.
