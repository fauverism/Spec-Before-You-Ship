## 1. Form feedback UI structure

- [x] 1.1 Add an inline status message region to the homepage newsletter form in `src/pages/index.astro`.
- [x] 1.2 Add style variants for submitting, success, and error messaging that match the existing design language.

## 2. Submission state behavior

- [x] 2.1 Add client-side state handling for `idle`, `submitting`, `success`, and `error` in the newsletter form flow.
- [x] 2.2 Disable the submit button while submission is in progress and restore it after completion.
- [x] 2.3 Render success confirmation copy on successful submission and retry guidance on failed submission.

## 3. Accessibility and verification

- [x] 3.1 Ensure status updates are exposed through a polite live region for assistive technologies.
- [x] 3.2 Manually test success and failure flows to confirm required messages appear in the correct states.
