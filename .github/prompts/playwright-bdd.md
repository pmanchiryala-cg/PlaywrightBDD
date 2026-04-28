# Playwright BDD Copilot Prompt

## Context

You are working in a JavaScript test automation framework using:

* Playwright (@playwright/test)
* playwright-bdd
* Node.js
* Microsoft Edge browser

BDD setup:

* Feature files: tests/features/**/*.feature
* Step definitions: tests/steps/**/*.js
* Generated runners: tests/runners

Tests are executed using:

* npm run test
* npm run test:ui
* npm run test:api

## Coding Standards

* Use modern JavaScript (ES modules, async/await)
* Follow Playwright test best practices
* Keep step definitions clean and reusable
* Use clear and meaningful step names
* Avoid duplication across steps
* Use fixtures when appropriate
* Handle waits properly (avoid hard waits)

## BDD Conventions

* Use Given / When / Then structure properly
* Keep steps atomic and reusable
* Do NOT put logic inside feature files
* Keep assertions inside Then steps
* Use descriptive scenario names

## Step Definition Rules

* Import from '@playwright/test'
* Use playwright-bdd step wrappers
* Use page object model when possible
* Support both UI and API tests where needed

## API Testing

* Use Playwright request context
* Validate status codes and responses
* Handle auth if needed (tokens, headers)

## UI Testing

* Use locators properly (getByRole, getByText, etc.)
* Avoid brittle selectors
* Support Edge browser execution
* Respect config (headless: false, trace on retry)

## Error Handling

* Add meaningful assertions
* Include helpful error messages
* Handle edge cases

## Task

Generate step definitions for a login feature with valid and invalid credentials

## Output Requirements

* Provide complete working code
* Include imports
* Follow project structure
* Add comments where useful

## Example Tasks

* Generate feature file for login flow
* Create step definitions for API endpoint
* Refactor steps into reusable functions
* Add Playwright test for UI form
