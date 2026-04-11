## ADDED Requirements

### Requirement: Font stack uses Source Sans Pro, Source Serif 4, and Google Sans Code
The site SHALL load and apply three typefaces: Source Sans Pro as the sans-serif, Source Serif 4 as the serif, and Google Sans Code as the monospace. These SHALL be referenced via the CSS custom properties `--sans`, `--serif`, and `--mono` respectively.

#### Scenario: Sans-serif font applied to body text
- **WHEN** any page is rendered in a browser
- **THEN** body text SHALL be set in Source Sans Pro

#### Scenario: Serif font applied to headings and display text
- **WHEN** any page is rendered in a browser
- **THEN** elements using `var(--serif)` SHALL render in Source Serif 4

#### Scenario: Monospace font applied to code and UI labels
- **WHEN** any page is rendered in a browser
- **THEN** elements using `var(--mono)` SHALL render in Google Sans Code (or DM Mono as fallback)

### Requirement: Base font size is 20px
The `html` element SHALL set `font-size: 20px`, establishing the rem scale for all other typographic measurements on the site.

#### Scenario: Body text renders at 20px equivalent
- **WHEN** a lesson page is viewed
- **THEN** 1rem body text SHALL measure approximately 20px

### Requirement: Content columns are expanded for the larger type scale
Content column widths and padding SHALL be sized to complement the 20px base, providing comfortable reading measure and breathing room.

#### Scenario: Lesson content column width
- **WHEN** a lesson page is viewed at full desktop width
- **THEN** the `.main` content area SHALL have a max-width of 960px

#### Scenario: Index content column width
- **WHEN** the index page is viewed at full desktop width
- **THEN** the `.col` container SHALL have a max-width of 860px
