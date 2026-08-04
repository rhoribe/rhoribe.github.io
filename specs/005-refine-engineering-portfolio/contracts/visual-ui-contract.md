# Visual UI Contract: Refine Engineering Portfolio

## Purpose

Defines the externally observable UI behavior for the refinement. This is a static page contract, not a network API.

## Shared visual primitives

| Primitive | Required inputs | Observable behavior |
| --- | --- | --- |
| Section container | section identifier, heading, content | Uses common responsive gutters, section rhythm, and semantic heading hierarchy. |
| Card layout | content, density, optional interaction | Has content-sized height, shared surface/border treatment, and restrained hover/focus feedback. |
| Badge | label and optional contextual icon | Has readable text, wraps in logical order, and never overlaps or clips. |
| Accordion | visible summary and associated content | Operable by keyboard and pointer; expanded state is exposed; all content remains available without hover. |
| Contact action | label, destination, icon, external flag | Has a descriptive name, generous target, visible focus, safe external behavior, and subtle feedback. |

## CompanyLogo contract

| Input | Requirement |
| --- | --- |
| Company identity | Supports Zup Innovation, PHI Pagamentos, Digipix, iTFLEX Tecnologia, and GSP Loteamentos. |
| Asset resolution | Uses only an approved local official asset; otherwise uses accessible initials. |
| Theme | Remains recognizable and proportionate in light and dark modes. |
| Dimensions | Preserves aspect ratio within a reserved frame; does not introduce layout shift. |
| Accessibility | The company name remains readable in text; if the image carries meaning, it has appropriate alternative text. |

## IssuerLogo contract

| Input | Requirement |
| --- | --- |
| Issuer identity | Supports every issuer in the existing certification inventory. |
| Asset resolution | Uses only an approved local official asset; otherwise uses accessible initials. |
| Theme and dimensions | Same theme, aspect-ratio, and stable-frame rules as CompanyLogo. |
| Accessibility | The certification title is visible and issuer identity is available in text or image alternative. |

## Experience contract

- Each entry visibly presents company, role, period, summary, responsibilities, and technologies in that order.
- Company mark is primary visual branding; role icon is subordinate and does not replace role text.
- Responsibilities begin collapsed when present and are revealed with an accessible accordion.
- Technology badges naturally wrap at all supported viewport widths.
- Existing verified role content is retained.

## Certification gallery contract

- Each rendered item visibly contains exactly an issuer logo or initials fallback and certification name.
- Issue dates, expiration, credential identifiers, skills, verification links, and status labels are not visibly rendered.
- Gallery content reflows from one column on narrow widths to space-appropriate columns without stretched logos, tall empty cards, or overflow.
- Existing certification data remains available to the site content model but is excluded from this public gallery surface.

## Responsive and interaction contract

- Validate 320, 375, 768, 1024, 1440, and 1920 pixel widths in both themes.
- No page-level horizontal overflow, clipped text, overlapping badges, distorted logos, or control/content collision is permitted.
- Hover states provide only supplemental polish. Keyboard, touch, and reduced-motion visitors can perform all equivalent tasks.
- Focus indicators are visible; color, motion, hover, and logos are never the only way to understand information.
