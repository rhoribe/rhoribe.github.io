# Data Model: Modern Portfolio Motion

This feature adds presentation state only. Existing professional content records remain the source of truth and are not migrated or expanded.

## Motion configuration

| Field | Description | Validation |
|---|---|---|
| duration token | Named short motion duration | 150–600ms; no arbitrary per-component timing |
| easing token | Named natural entrance or exit curve | Shared by matching interaction type |
| reveal distance | Compact vertical entrance distance | 12px mobile; 20–24px desktop |
| stagger delay | Delay between visible child items | 50–80ms; bounded group size |
| viewport threshold | Portion of an element that determines entry | Modest threshold; reveal occurs once |
| reduced variant | Immediate/static or minimal-opacity presentation | Must preserve all content and controls |

## Navigation state

| Field | Description | Validation / transition |
|---|---|---|
| active section ID | Existing visible navigation target | Must map only to an existing section anchor; direct hash load is supported |
| header scrolled | Whether visitor is beyond page top | Changes header surface treatment only |
| mobile menu open | Whether mobile navigation is displayed | Opens from trigger; closes by trigger, link selection, or Escape; focus returns to trigger on close |

## Theme presentation state

| Field | Description | Validation / transition |
|---|---|---|
| theme | Existing `dark` or `light` preference | Existing bootstrap and persistence behavior remains authoritative |
| transition active | Short-lived class used only after a manual change | Affects limited visual properties and is removed after completion |

## Section and timeline state

| Field | Description | Validation / transition |
|---|---|---|
| revealed | Whether a section/group has completed its one-time entry | `not revealed` → `revealed`; no required replay |
| active experience entry | Existing item currently in the reading region | Affects decorative emphasis only; never hides other entries |
| progress | Relative visual timeline progress | Decorative line only; static complete line in reduced motion |

## Capability state

| Field | Description | Validation |
|---|---|---|
| reduced motion | User motion preference | Disables non-essential animation, pointer effects, parallax, and data-flow movement |
| fine pointer / hover | Whether optional pointer feedback is appropriate | Required before tilt/spotlight tracking; false on touch/coarse environments |
| compact viewport | Whether mobile simplification applies | Reduces distances, duration, and decorative complexity |

## Relationships

- `Motion configuration` governs section, text, menu, SVG, and timeline presentation.
- `Capability state` selects either animated or static/minimal variants for each optional visual component.
- `Navigation state` selects the active link indicator and controls menu visibility.
- `Section and timeline state` decorates existing content only; it never changes the professional content entities defined by the prior portfolio feature.
