# Data Model: Enhance Portfolio Visuals

## Semantic icon types

| Entity | Required fields | Rules |
|---|---|---|
| Generic icon semantic | `name`, `size`, `decorative` | Name must be in the centralized generic mapping; default color inherits text color. |
| Brand icon semantic | `brand`, `size`, `decorative`, `brandColorMode` | Brand must be approved; use a generic fallback when absent/unpermitted. |
| Technology reference | `technology`, optional `brand`, `fallbackIcon` | Must correspond to existing verified expertise/project content. |
| Icon accessibility treatment | `decorative`, optional `label`, optional `title` | Decorative icons are excluded from assistive reading; functional icon-only actions require `label`. |

## Content record changes

| Record | Additive fields | Validation |
|---|---|---|
| Navigation item | `icon` | Existing `label` and `href` are unchanged; mobile labels remain visible. |
| Expertise category | `icon`, typed `technologies` | Category and technologies must already appear in verified content. |
| Experience entry | `roleIcon`, optional `location`, optional `period` | Location/period may be rendered only when verified; role remains unchanged. |
| Certification | `icon`, optional approved `technology` | No issue/expiry/credential ID/link without source evidence. |
| Education item | `icon`, optional `period` | No additional academic detail without source evidence. |
| Project | `technologies`, optional `repository`, `demo`, `updated`, `featured` semantics | Omit unavailable values; no inferred project metadata. |
| Profile presentation | `heroIcons`, `aboutHighlights` | Icons reinforce existing text and do not establish new claims. |

## State models

| State | Values | Transition/constraint |
|---|---|---|
| Theme | `dark`, `light` | Existing stored preference is preserved; short scoped visual transition follows explicit changes. |
| Motion preference | `normal`, `reduced` | Reduced state renders immediate/minimal reveals and static decorative/timeline views. |
| Navigation | active section + menu `open`/`closed` | Menu closes through trigger, navigation activation, or Escape; trigger focus is restored when closed from menu interaction. |
| Timeline | active visible entry + static/progress line | Reading order is unchanged; reduced motion uses a complete static line. |
| Card interaction | resting, hover, focus-within, pressed | Keyboard/touch receives an equivalent non-hover-only visible treatment. |

## Relationships

- Content records reference semantic icon identifiers.
- The icon registry resolves identifiers to generic/brand renderers and fallback behavior.
- Motion/card/navigation components consume state and semantic metadata but do not mutate portfolio content.
- Theme and motion preferences affect presentation only; neither changes content availability.
