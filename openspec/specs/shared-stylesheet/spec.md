# Capability: shared-stylesheet

## Requirement: Shared stylesheet exists at assets/site.css
A single external CSS file SHALL exist at `assets/site.css` containing all styles shared across every page: CSS reset, custom properties (`:root`), base `html`/`body` styles, site header, and site footer.

### Scenario: Shared stylesheet file exists
- **WHEN** the repository is inspected
- **THEN** the file `assets/site.css` SHALL exist and be non-empty

### Scenario: Shared stylesheet contains CSS custom properties
- **WHEN** `assets/site.css` is read
- **THEN** it SHALL contain a `:root` block defining the site's design tokens (colors, fonts)

## Requirement: Every page links to the shared stylesheet
Every HTML file in `lessons/` SHALL include a `<link rel="stylesheet">` referencing `../assets/site.css` in its `<head>`, replacing the duplicate shared styles previously embedded inline.

### Scenario: Index page links to shared stylesheet
- **WHEN** `lessons/index.html` is loaded in a browser
- **THEN** `assets/site.css` SHALL be fetched and applied

### Scenario: Lesson pages link to shared stylesheet
- **WHEN** any lesson page (`01` through `11`) is loaded in a browser
- **THEN** `assets/site.css` SHALL be fetched and applied

### Scenario: Contact page links to shared stylesheet
- **WHEN** `lessons/contact.html` is loaded in a browser
- **THEN** `assets/site.css` SHALL be fetched and applied

## Requirement: Rendered appearance is unchanged
Extracting shared CSS to an external file SHALL produce no visible change to any page's layout, typography, colors, or component styling.

### Scenario: Visual regression — header
- **WHEN** any page is viewed before and after this change
- **THEN** the site header SHALL appear identical in position, font, and color

### Scenario: Visual regression — footer
- **WHEN** any page is viewed before and after this change
- **THEN** the site footer SHALL appear identical in position, font, and color
