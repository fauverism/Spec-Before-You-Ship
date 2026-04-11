## MODIFIED Requirements

### Requirement: Dialogue token classes use Solarized Light accent colors
Dialogue `<pre>` and `<code>` elements SHALL use `var(--surface)` as background and `var(--ink)` as text color. Token color classes (`.d-you`, `.d-ai`, `.d-you-bad`, `.d-label`, `.d-comment`) SHALL remain available but dialogue `code` default color SHALL be `var(--ink)`. Dialogue `code` font-size SHALL be `12px`. No syntax token colors SHALL be applied by default inside dialogue blocks.

#### Scenario: Dialogue block background
- **WHEN** a `.dialogue` block is rendered
- **THEN** the `pre` inside uses `var(--surface)` as background (not `var(--code-bg)`)

#### Scenario: Dialogue code default text color
- **WHEN** unstyled text is rendered inside a `.dialogue code` block
- **THEN** its color is `var(--ink)` (not `var(--code-fg)`)

#### Scenario: Dialogue code font size
- **WHEN** a `.dialogue code` block is rendered
- **THEN** its font-size is `12px`

#### Scenario: Named dialogue token colors still work
- **WHEN** a `.d-you`, `.d-ai`, or `.d-you-bad` span is rendered
- **THEN** it displays its assigned color (blue, cyan, orange respectively)

### Requirement: Shell block chrome is minimal
`.shell-block` elements SHALL have no border, no background, and no outer margin. The `pre` inside inherits base `pre` padding.

#### Scenario: Shell block has no border or background
- **WHEN** a `.shell-block` is rendered
- **THEN** it has no visible border and no background color distinct from the page

#### Scenario: Shell block has no outer margin
- **WHEN** a `.shell-block` is rendered
- **THEN** it has no top or bottom margin applied by the `.shell-block` rule itself

## ADDED Requirements

### Requirement: Minimum body text size is 14px
Any font-size rule of 12px applied to body text, interactive element labels, or list content in lesson pages SHALL use 14px instead. Intentional decorative labels at 10–11px are excluded.

#### Scenario: Lesson h3 size
- **WHEN** a `.lesson h3` element is rendered
- **THEN** its font-size is 14px

#### Scenario: Sidebar signup text and input size
- **WHEN** `.sidebar-signup .ss-text` or `.sidebar-signup input` is rendered
- **THEN** its font-size is 14px
