## ADDED Requirements

### Requirement: Dark theme activates via html.dark class
The site SHALL apply a Solarized Dark color palette when the `html` element has the class `dark`. All CSS custom properties defined in `:root` SHALL have corresponding overrides under `html.dark`.

#### Scenario: Dark theme applied when class present
- **WHEN** `document.documentElement.classList.contains('dark')` is true
- **THEN** the page background SHALL be `#002b36` and body text SHALL be `#fdf6e3`

#### Scenario: Light theme restored when class absent
- **WHEN** the `dark` class is removed from `html`
- **THEN** the page SHALL revert to Solarized Light values with no residual dark styles

### Requirement: Theme initializes before first paint
An inline script in `<head>` SHALL apply the correct theme class to `html` before any CSS renders, preventing a flash of incorrect theme.

#### Scenario: Dark system preference, no saved preference
- **WHEN** `prefers-color-scheme` is `dark` and `localStorage` has no `theme` key
- **THEN** `html.dark` SHALL be present before the first paint

#### Scenario: Saved dark preference overrides light system preference
- **WHEN** `localStorage.theme` is `"dark"` and `prefers-color-scheme` is `light`
- **THEN** `html.dark` SHALL be present before the first paint

#### Scenario: Saved light preference overrides dark system preference
- **WHEN** `localStorage.theme` is `"light"` and `prefers-color-scheme` is `dark`
- **THEN** `html.dark` SHALL NOT be present before the first paint

### Requirement: User preference persists across sessions
When the user explicitly toggles the theme, the choice SHALL be saved to `localStorage` under the key `theme` with value `"dark"` or `"light"`. On subsequent page loads the saved preference SHALL take precedence over the system preference.

#### Scenario: Toggle saves preference
- **WHEN** the user clicks the theme toggle
- **THEN** `localStorage.getItem('theme')` SHALL return the newly active theme name

#### Scenario: Preference survives navigation
- **WHEN** the user sets dark mode and navigates to another lesson
- **THEN** the new page SHALL load in dark mode without a flash

### Requirement: Sun/moon toggle button is present on every page
Every page SHALL render a theme toggle button displaying a sun icon when dark mode is active and a moon icon when light mode is active. The button SHALL be positioned in the top-right of the page on all screen sizes.

#### Scenario: Icon reflects current theme on load
- **WHEN** a page loads in dark mode
- **THEN** the toggle button SHALL display the sun icon (indicating "switch to light")

#### Scenario: Icon reflects current theme on load — light
- **WHEN** a page loads in light mode
- **THEN** the toggle button SHALL display the moon icon (indicating "switch to dark")

#### Scenario: Toggle button visible on lesson pages
- **WHEN** any lesson page is loaded
- **THEN** the theme toggle button SHALL be present and interactive

#### Scenario: Toggle button visible on index and contact pages
- **WHEN** the index or contact page is loaded
- **THEN** the theme toggle button SHALL be present and interactive

### Requirement: Code syntax tokens are correct in dark mode
Solarized Dark uses the same accent colors as Solarized Light for syntax tokens. Only the background and foreground base colors change. The code block background SHALL be `#002b36` and foreground SHALL be `#839496` in dark mode.

#### Scenario: Code block background in dark mode
- **WHEN** dark mode is active and a lesson page with a code block is loaded
- **THEN** the code block background SHALL be `#002b36`

#### Scenario: Syntax accent colors unchanged
- **WHEN** dark mode is active
- **THEN** keyword, string, type, and number token colors SHALL be identical to their light mode values
