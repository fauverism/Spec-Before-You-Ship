## MODIFIED Requirements

### Requirement: Shared stylesheet exists at assets/site.css
A CSS file SHALL exist at `public/assets/site.css` (served at `/assets/site.css`) containing all styles shared across every page: CSS reset, custom properties (`:root`), base `html`/`body` styles, site header, and site footer.

#### Scenario: Shared stylesheet file exists
- **WHEN** the repository is inspected
- **THEN** the file `public/assets/site.css` SHALL exist and be non-empty

#### Scenario: Shared stylesheet contains CSS custom properties
- **WHEN** `public/assets/site.css` is read
- **THEN** it SHALL contain a `:root` block defining the site's design tokens (colors, fonts)

### Requirement: Every page links to the shared stylesheet
Every Astro page SHALL include a `<link rel="stylesheet" href="/assets/site.css">` in its rendered `<head>`. All 11 lesson pages SHALL additionally include `/assets/lesson.css`. Lesson 01 SHALL additionally include `/assets/lesson-01.css`.

#### Scenario: Index page links to shared stylesheet
- **WHEN** `lessons/index.html` is loaded in a browser
- **THEN** `/assets/site.css` SHALL be fetched and applied

#### Scenario: Lesson pages link to site.css and lesson.css
- **WHEN** any lesson page (`01` through `11`) is loaded in a browser
- **THEN** both `/assets/site.css` and `/assets/lesson.css` SHALL be fetched and applied

#### Scenario: Lesson 01 links to lesson-01.css
- **WHEN** the lesson 01 page is loaded in a browser
- **THEN** `/assets/site.css`, `/assets/lesson.css`, and `/assets/lesson-01.css` SHALL all be fetched and applied

#### Scenario: Contact page links to shared stylesheet
- **WHEN** the contact page is loaded in a browser
- **THEN** `/assets/site.css` SHALL be fetched and applied

### Requirement: Lesson stylesheet exists at assets/lesson.css
A CSS file SHALL exist at `public/assets/lesson.css` (served at `/assets/lesson.css`) containing all styles shared across lesson pages.

#### Scenario: Lesson stylesheet file exists
- **WHEN** the repository is inspected
- **THEN** the file `public/assets/lesson.css` SHALL exist and be non-empty

### Requirement: Lesson 01 dialogue stylesheet exists at assets/lesson-01.css
A CSS file SHALL exist at `public/assets/lesson-01.css` (served at `/assets/lesson-01.css`) containing styles unique to lesson 01.

#### Scenario: Lesson 01 dialogue stylesheet file exists
- **WHEN** the repository is inspected
- **THEN** the file `public/assets/lesson-01.css` SHALL exist and be non-empty
