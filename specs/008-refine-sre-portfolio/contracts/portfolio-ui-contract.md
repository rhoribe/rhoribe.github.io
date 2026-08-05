# Portfolio UI Contract: Refine SRE Portfolio

## Header navigation

| Consumer action | Required result |
|-----------------|-----------------|
| Activate `Expertise` by pointer or keyboard | Navigates to `#expertise`. The Core Expertise heading is visible below the sticky header and becomes the unambiguous reading destination. |
| Load with OS or saved light preference | The document remains in the single dark visual state. |
| Inspect header controls | No theme toggle, theme menu item, or theme-preference control is rendered or focusable. |

## Experience timeline

```text
ExperienceTimeline
└── ordered TimelineRow (one per company group)
    ├── rail segment (active state mirrors this row only)
    ├── marker (exactly one; active state mirrors this row only)
    └── CompanyExperienceCard
        ├── BriefcaseIcon + company text
        └── one or more roles and their accordions
```

- Timeline rows expose stable test selectors for their company ID, marker, and rail segment.
- A row receives `data-revealed` after its first qualifying viewport entry and keeps it for the page lifetime.
- At most one row is marked active at a time while a qualifying card is in the reading band. The active marker and rail segment share that row's ID.
- Cards animate only opacity, 8–16px vertical transform, and controlled accent-related color transitions. They do not animate height, width, margins, padding, grid placement, or rail geometry.
- With reduced motion, every card is fully visible immediately and no movement is required; active-state semantics remain available.
- Role accordions and technology chips have no marker or rail-segment elements.

## Icon contract

- `BriefcaseIcon` is the only company identity visual in Professional Experience. It has a fixed semantic size, bright-teal primary color, shared Lucide outline stroke, and an accessible strategy that never substitutes company initials or an image.
- Role title, calendar/date, work mode, and location icons use the same icon system and stroke weight, align with text baselines, and meet contrast requirements.
- Certification cards provide issuer identity via a visually clear approved logo or a high-contrast, text-supported fallback tile. A certification's text remains the authoritative issuer and credential label.

## Expertise content contract

The Core Expertise grid renders the required named categories and exact listed skills from `ExpertiseCard` data. Each card has a shared icon treatment and gracefully reflows from one column on narrow screens to balanced multi-column layouts where width permits.
