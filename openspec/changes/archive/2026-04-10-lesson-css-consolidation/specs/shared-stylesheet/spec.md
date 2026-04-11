## MODIFIED Requirements

### Requirement: Every page links to the shared stylesheet
Every HTML file in `lessons/` SHALL include a `<link rel="stylesheet">` referencing `../assets/site.css` in its `<head>`. All 11 lesson pages SHALL additionally include a `<link rel="stylesheet">` referencing `../assets/lesson.css`. Lesson 01 SHALL additionally include a `<link rel="stylesheet">` referencing `../assets/lesson-01.css`.

#### Scenario: Index page links to shared stylesheet
- **WHEN** `lessons/index.html` is loaded in a browser
- **THEN** `assets/site.css` SHALL be fetched and applied

#### Scenario: Lesson pages link to site.css and lesson.css
- **WHEN** any lesson page (`01` through `11`) is loaded in a browser
- **THEN** both `assets/site.css` and `assets/lesson.css` SHALL be fetched and applied

#### Scenario: Lesson 01 links to lesson-01.css
- **WHEN** `lessons/01-the-chaos-tax.html` is loaded in a browser
- **THEN** `assets/site.css`, `assets/lesson.css`, and `assets/lesson-01.css` SHALL all be fetched and applied

#### Scenario: Contact page links to shared stylesheet
- **WHEN** `lessons/contact.html` is loaded in a browser
- **THEN** `assets/site.css` SHALL be fetched and applied

## ADDED Requirements

### Requirement: Lesson stylesheet exists at assets/lesson.css
A CSS file SHALL exist at `assets/lesson.css` containing all styles shared across lesson pages: two-column layout grid, sticky sidebar, breadcrumb, lesson typography (h1, h2, h3, p, strong), code block chrome, callout, warn, checkpoint, shell block, sidebar signup form, next-lesson nav, and responsive breakpoints. It SHALL NOT include styles specific to any individual lesson.

#### Scenario: Lesson stylesheet file exists
- **WHEN** the repository is inspected
- **THEN** the file `assets/lesson.css` SHALL exist and be non-empty

#### Scenario: Lesson per-page style blocks contain no shared rules
- **WHEN** any lesson HTML file's inline `<style>` block is inspected
- **THEN** it SHALL NOT contain any rule that is identical to a rule in `assets/lesson.css`

### Requirement: Lesson 01 dialogue stylesheet exists at assets/lesson-01.css
A CSS file SHALL exist at `assets/lesson-01.css` containing styles unique to lesson 01: dialogue block layout (`.dialogue`, `.dialogue pre`, `.dialogue code`, `.dialogue-header`) and dialogue token classes (`.d-label`, `.d-you`, `.d-ai`, `.d-you-bad`, `.d-comment`).

#### Scenario: Lesson 01 dialogue stylesheet file exists
- **WHEN** the repository is inspected
- **THEN** the file `assets/lesson-01.css` SHALL exist and be non-empty

#### Scenario: Dialogue styles absent from lesson.css
- **WHEN** `assets/lesson.css` is inspected
- **THEN** it SHALL NOT contain any `.dialogue` or `.d-*` CSS rules

### Requirement: Rendered appearance is unchanged after extraction
Extracting shared CSS to external files SHALL produce no visible change to any lesson page's layout, typography, colors, or component styling.

#### Scenario: Visual regression — lesson layout
- **WHEN** any lesson page is viewed before and after this change
- **THEN** the two-column layout, sidebar, and content area SHALL appear identical

#### Scenario: Visual regression — callout and checkpoint components
- **WHEN** any lesson page containing callout or checkpoint components is viewed before and after this change
- **THEN** those components SHALL appear identical in color, spacing, and typography
