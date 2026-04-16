## Why

The homepage newsletter form currently provides no user-visible success confirmation after submission. This creates uncertainty about whether signup succeeded and can reduce trust and completion rates.

## What Changes

- Add explicit post-submit feedback for the newsletter signup flow on the homepage.
- Define visible form states for idle, submitting, success, and error outcomes.
- Require an inline confirmation message after successful subscription.
- Require an inline error message when submission fails, with retry guidance.
- Add accessibility requirements so status updates are announced to assistive technologies.

## Capabilities

### New Capabilities
- `newsletter-signup-feedback`: Defines user-facing and accessible feedback behavior for newsletter signup submissions.

### Modified Capabilities
- None.

## Impact

- Affected code: `src/pages/index.astro` newsletter signup section and related styles/scripts.
- User experience: users receive immediate confirmation or error guidance after submit.
- Accessibility: status updates become perceivable for screen-reader users.
