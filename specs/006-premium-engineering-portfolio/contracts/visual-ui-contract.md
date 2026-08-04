# Visual UI Contract: Premium Engineering Portfolio

## Purpose

Defines externally observable portfolio behavior. This is a static UI contract, not a network API.

## Shared primitives

| Primitive | Required inputs | Observable behavior |
| --- | --- | --- |
| Design tokens | theme and semantic token category | Applies shared type, spacing, color, and motion values consistently in both themes. |
| Section container | section identifier, heading, content | Uses common responsive gutters, rhythm, heading hierarchy, and text measure. |
| Responsive grid | card collection and available width | Starts as one column and promotes only when cards remain readable and proportionate. |
| Card layout | content, density, optional interaction | Is content-sized with shared surface/border treatment and restrained states. |
| Badge | label and optional supporting icon | Has readable contrast, wraps logically, and never overlaps or clips. |
| Accordion | visible summary and content | Is keyboard and pointer operable, exposes state, and keeps content available without hover. |
| Contact action | label, destination, icon, external flag | Has descriptive label, generous target, visible focus, safe external behavior, and subtle feedback. |

## CompanyLogo contract

| Input | Requirement |
| --- | --- |
| Company identity | Supports Zup Innovation, PHI Pagamentos, Digipix, iTFLEX Tecnologia, and GSP Loteamentos. |
| Asset resolution | Uses an approved local official asset; otherwise displays accessible initials. |
| Theme | Remains recognizable and proportionate in light and dark modes. |
| Dimensions | Preserves aspect ratio inside reserved space and does not create layout shift. |
| Accessibility | Company name remains available as visible text; meaningful image use has appropriate text alternative. |

## IssuerLogo contract

| Input | Requirement |
| --- | --- |
| Issuer identity | Supports every issuer in the existing certification inventory. |
| Asset resolution | Uses an approved local official asset; otherwise displays accessible initials. |
| Theme/dimensions | Follows the same theme, ratio, and stable-frame rules as CompanyLogo. |
| Accessibility | Certification title remains visible and issuer identity is available as text or image alternative. |

## Experience and certification contracts

- Every experience entry visibly presents company, role, period, summary, responsibilities, and technologies in that order.
- Responsibilities begin collapsed when present and are revealed through an accessible accordion; technology badges wrap at all target widths.
- Every gallery item visibly contains exactly issuer identity (logo or initials fallback) and certification name.
- Dates, expiration, credential IDs, skills, verification links, categories, and status labels are not visibly rendered in the gallery.
- Grids reflow without stretched logos, tall empty cards, clipping, or horizontal page overflow.

## Responsive, motion, and accessibility contract

- Validate 320, 375, 768, 1024, 1440, and 1920 pixel widths in both themes.
- No page-level overflow, clipped text, overlapping badges, distorted marks, or control/content collision is permitted.
- Hover and motion are supplemental. Keyboard, touch, and reduced-motion visitors can complete equivalent tasks.
- Focus is visible; color, motion, hover, and logos are never the only way to understand information.
