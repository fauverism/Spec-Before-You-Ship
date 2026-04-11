## Purpose

Defines the visual theming for code blocks and dialogue blocks across lesson pages, using the Solarized Light color palette for backgrounds, foregrounds, syntax tokens, and block chrome.

## Requirements

### Requirement: Code block background and foreground use Solarized Light base colors
All `<pre>` elements SHALL use `#fdf6e3` (Solarized base3) as background. Default code text SHALL use `#657b83` (Solarized base00) as foreground.

#### Scenario: Pre element background
- **WHEN** any `<pre>` block is rendered on a lesson page
- **THEN** its background color is `#fdf6e3`

#### Scenario: Default code text color
- **WHEN** unstyled code text is rendered inside a `<pre>` block
- **THEN** its color is `#657b83`

### Requirement: Syntax tokens use canonical Solarized Light accent colors
Token span classes SHALL use the following Solarized Light accent values:
- `.t-comment` — `#93a1a1` (base1), italic
- `.t-keyword` — `#859900` (green)
- `.t-string` — `#2aa198` (cyan)
- `.t-type` — `#268bd2` (blue)
- `.t-number` — `#cb4b16` (orange)
- `.t-prop` — `#268bd2` (blue)
- `.t-fn` — `#268bd2` (blue)
- `.t-op` — `#657b83` (base00)
- `.t-plain` — `#657b83` (base00)
- `.t-dim` — `#93a1a1` (base1)
- `.t-shell-out` — `#859900` (green)

#### Scenario: Comment token color
- **WHEN** a `.t-comment` span is rendered
- **THEN** its color is `#93a1a1` and it is italic

#### Scenario: Keyword token color
- **WHEN** a `.t-keyword` span is rendered
- **THEN** its color is `#859900`

#### Scenario: String token color
- **WHEN** a `.t-string` span is rendered
- **THEN** its color is `#2aa198`

### Requirement: Block chrome uses Solarized base2
`.code-header`, `.dialogue-header`, and block borders SHALL use `#eee8d5` (Solarized base2) as background/border color. Header label text SHALL use `#93a1a1` (base1).

#### Scenario: Code block header background
- **WHEN** a `.code-header` or `.dialogue-header` bar is rendered
- **THEN** its background is `#eee8d5`

#### Scenario: Block border color
- **WHEN** a `.code-block` or `.dialogue` element is rendered
- **THEN** its border color is `#eee8d5`

### Requirement: Dialogue token classes use Solarized Light accent colors
Dialogue `<pre>` and `<code>` elements SHALL use `var(--surface)` as background and `var(--ink)` as text color. Token color classes (`.d-you`, `.d-ai`, `.d-you-bad`, `.d-label`, `.d-comment`) SHALL remain available but dialogue `code` default color SHALL be `var(--ink)`. Dialogue `code` font-size SHALL be `12px`. No syntax token colors SHALL be applied by default inside dialogue blocks.

Dialogue-specific classes SHALL use the following values:
- `.d-label` — `#93a1a1` (base1), italic
- `.d-you` — `#268bd2` (blue)
- `.d-ai` — `#2aa198` (cyan)
- `.d-you-bad` — `#cb4b16` (orange)
- `.d-comment` — `#93a1a1` (base1), italic

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

#### Scenario: "You" message color
- **WHEN** a `.d-you` span is rendered in a dialogue block
- **THEN** its color is `#268bd2`

#### Scenario: AI message color
- **WHEN** a `.d-ai` span is rendered in a dialogue block
- **THEN** its color is `#2aa198`

#### Scenario: Bad example color
- **WHEN** a `.d-you-bad` span is rendered in a dialogue block
- **THEN** its color is `#cb4b16`

### Requirement: Shell block chrome is minimal
`.shell-block` elements SHALL have no border, no background, and no outer margin. The `pre` inside inherits base `pre` padding.

#### Scenario: Shell block has no border or background
- **WHEN** a `.shell-block` is rendered
- **THEN** it has no visible border and no background color distinct from the page

#### Scenario: Shell block has no outer margin
- **WHEN** a `.shell-block` is rendered
- **THEN** it has no top or bottom margin applied by the `.shell-block` rule itself

### Requirement: Minimum body text size is 14px
Any font-size rule of 12px applied to body text, interactive element labels, or list content in lesson pages SHALL use 14px instead. Intentional decorative labels at 10–11px are excluded.

#### Scenario: Lesson h3 size
- **WHEN** a `.lesson h3` element is rendered
- **THEN** its font-size is 14px

#### Scenario: Sidebar signup text and input size
- **WHEN** `.sidebar-signup .ss-text` or `.sidebar-signup input` is rendered
- **THEN** its font-size is 14px
