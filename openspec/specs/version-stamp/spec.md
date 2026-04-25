## Purpose

Defines requirements for the version stamp displayed across all pages of the site, ensuring users can identify the content version they are viewing.

## Requirements

### Requirement: Version stamp displayed on every page
Every lesson page SHALL display the current content version string (`v1.0.0`) in the page footer.

#### Scenario: Version stamp visible on lesson pages
- **WHEN** a user views any lesson page (01 through 11)
- **THEN** the footer SHALL contain the version string `v1.0.0`

#### Scenario: Version stamp visible on index page
- **WHEN** a user views the course index page
- **THEN** the footer SHALL contain the version string `v1.0.0`

#### Scenario: Version stamp visible on contact page
- **WHEN** a user views the contact page
- **THEN** the footer SHALL contain the version string `v1.0.0`

### Requirement: Version stamp is visually subdued
The version stamp SHALL be styled to be readable but visually secondary to page content — using muted color and small monospace font consistent with the site's existing footer styling.

#### Scenario: Stamp does not dominate the footer
- **WHEN** a user views a lesson page
- **THEN** the version stamp SHALL be visually less prominent than primary footer elements (copyright, navigation links)
