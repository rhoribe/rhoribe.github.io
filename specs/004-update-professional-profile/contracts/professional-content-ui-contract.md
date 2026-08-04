# Professional Content UI Contract

## Scope

This contract defines the user-visible and accessibility behavior for the portfolio’s professional-content enhancement. It is a static page contract, not a network API.

## Profile and About

- The page has one H1 naming Ricardo Horibe and presents the approved SRE Specialist headline, supporting statement, and technology line.
- About has an H2 and semantic child headings for expertise, leadership, and career objective as needed by the existing page hierarchy.
- Expertise is a semantic list/grid; icons beside visible labels are decorative unless they supply an otherwise absent accessible name.

## Experience timeline

- The timeline is one ordered semantic list. Each company group is one list item with a company heading; roles are nested semantic items in reverse chronology.
- A role always exposes its title, formatted date range, employment type, supplied location, work mode, summary, and highlight without hover or expansion.
- Responsibilities render as a `ul`; technologies render as text-bearing wrapping badges with decorative contextual icons.
- If supplemental details are collapsed, the toggle uses native `details`/`summary` with a unique visible summary label. Keyboard Enter/Space toggles it and its native `open` state is available to assistive technology. Its expanded region is readable in both themes and has no large motion under reduced-motion preferences.

## Certification browsing

- Certification cards expose an H3/name, issuer, issued date, optional expiration date, text status, optional credential ID, and optional skill badges.
- Status has visible words: `Active`, `Expired`, or `No expiration information provided`; color reinforces but never solely conveys status.
- Filters are keyboard-operable native radio inputs in a labelled fieldset/legend. The selected option communicates state natively; focus stays visible and cards/no-results update without hover. A polite live result count communicates the updated subset.
- Default order is featured first then approved display order. All records are reachable, including on narrow screens. A no-results message names the current condition and leaves filters available.
- “View credential” renders only when a valid explicit credential URL is supplied. It uses a meaningful external-link label, `target="_blank"`, and `rel="noopener noreferrer"`.

## Contact and privacy

- The contact section presents exactly the approved email, GitHub, and LinkedIn contact actions. Email uses `mailto:`.
- GitHub and LinkedIn use the existing icons plus meaningful labels and safe external-link attributes.
- Phone numbers, backend forms, generated credential URLs, private credentials, and credential links not explicitly approved are absent from visible page content and metadata.

## Responsive and motion behavior

- From 320px onward, timeline content is one column; long names, IDs, tags, and filter controls wrap or use accessible horizontal overflow without page overflow.
- Certification cards move from a single to multi-column grid only when space permits; text is never reduced merely to fit.
- Existing section/timeline motion remains. New disclosure/filter state does not depend on animation and respects `prefers-reduced-motion`.
