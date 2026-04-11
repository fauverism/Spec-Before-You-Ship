## ADDED Requirements

### Requirement: Mobile lesson navigation bar
Lesson pages SHALL display a sticky top navigation bar on viewports ≤ 960px wide. The bar SHALL show the current lesson number out of total lessons (e.g., `01 / 11`) and provide links to the previous and next lesson. On Lesson 01 the back arrow SHALL be visually hidden. On Lesson 11 the forward arrow SHALL be visually hidden.

#### Scenario: Bar visible on mobile
- **WHEN** a lesson page is viewed on a viewport ≤ 960px wide
- **THEN** the mobile nav bar is visible at the top of the page, sticky on scroll

#### Scenario: Bar hidden on desktop
- **WHEN** a lesson page is viewed on a viewport > 960px wide
- **THEN** the mobile nav bar is not visible

#### Scenario: Lesson position shown
- **WHEN** the mobile nav bar is visible
- **THEN** it displays the current lesson number and total (e.g., `01 / 11`) in the center

#### Scenario: Next lesson link navigates forward
- **WHEN** user taps the forward arrow on any lesson except Lesson 11
- **THEN** browser navigates to the next lesson page

#### Scenario: Previous lesson link navigates back
- **WHEN** user taps the back arrow on any lesson except Lesson 01
- **THEN** browser navigates to the previous lesson page

#### Scenario: No back arrow on first lesson
- **WHEN** the mobile nav bar is visible on Lesson 01
- **THEN** the back arrow is not visible (space is preserved)

#### Scenario: No forward arrow on last lesson
- **WHEN** the mobile nav bar is visible on Lesson 11
- **THEN** the forward arrow is not visible (space is preserved)

### Requirement: Companion box removed
Lesson pages SHALL NOT display the `.companion-box` element in the sidebar.

#### Scenario: Companion box absent
- **WHEN** any lesson page is loaded
- **THEN** no element with class `companion-box` is present in the DOM
