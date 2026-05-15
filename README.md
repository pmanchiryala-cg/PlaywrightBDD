# PlaywrightBDD

Playwright + Cucumber-style BDD test suite with API helpers and page objects.


## Requirements
- Node.js (LTS)
- npm
- Environment variables in `.env` 

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

Run UI tests:
npx playwright test -- grep "ui"


View HTML report after run: open playwright-report/index.html or Cucumber report cucumber-report/index.html



## Quick overview
- BDD features: [tests/features]
  - UI: [tests/features/ui/userlogin.feature]
  - API: [tests/features/api/sf_eapi_GET_healthcheck.feature]
- Generated test runners: [tests/runners]
- Step definitions: [tests/steps]
  - UI steps: [`userlogin.steps`]
  - API steps: [`sf_eapi_GET_healthcheck.steps`]
- Page objects: [`LoginPage`]
- Playwright + BDD config: [playwright.config.js]