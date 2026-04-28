# PlaywrightBDD

Lightweight Playwright + Cucumber-style BDD test suite with API helpers and page objects.

## Quick overview
- BDD features: [tests/features](tests/features)
  - UI: [tests/features/ui/userlogin.feature](tests/features/ui/login.feature), [tests/features/ui/logindatatable.feature](tests/features/ui/loginscenariooutline.feature)
  - API: [tests/features/api/sf_eapi_GET_healthcheck.feature](tests/features/api/sf_eapi_GET_healthcheck.feature), [tests/features/api/sf_eapi_POST_EPC_request.feature](tests/features/api/sf_eapi_POST_EPC_request.feature)
- Generated test runners: [tests/runners](tests/runners)
- Step definitions: [tests/steps](tests/steps)
  - UI steps: [`userlogin.steps`](tests/steps/ui/login.steps.js), [`logindatatable.steps`](tests/steps/ui/loginscenariooutline.steps.js)
  - API steps: [`sf_eapi_GET_healthcheck.steps`](tests/steps/api/sf_eapi_GET_healthcheck.steps.js), [`sf_eapi_POST_EPC_request.steps`](tests/steps/api/sf_eapi_POST_EPC_request.steps.js)
- Page objects: [`LoginPage`](tests/pages/LoginPage.js)
- API helpers: [`ApiClient`](src/api/apiClient.js), [`getAuthHeaders`](src/api/authService.js), [`UserService`](src/api/userService.js)
- Playwright + BDD config: [playwright.config.js](playwright.config.js)

## Requirements
- Node.js (LTS)
- npm
- Environment variables in `.env` (see [src/api/authService.js](src/api/authService.js) — expects `CLIENT_ID` and `CLIENT_SECRET`)

## Setup

npm init -D playwright@latest
npm install -D @playwright/test
npm i -D playwright-bdd
npm install -D dotenv

Ensure .env at project root contains required credentials:
CLIENT_ID
CLIENT_SECRET


Run single test
npx playwright test tests/runners/tests/features/ui/login.feature.spec.js

Run all tests:
npx playwright test


View HTML report after run: open playwright-report/index.html or Cucumber report cucumber-report/index.html
