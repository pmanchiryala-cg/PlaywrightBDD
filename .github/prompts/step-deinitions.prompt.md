---
mode: agent
---

* Import test utilities from '@playwright/test'
* Use playwright-bdd step wrappers (Given, When, Then)
* Each step definition must map 1:1 to a Gherkin step

* Keep step definitions thin:
  - Do NOT implement business logic inside steps
  - Delegate UI actions to Page Object methods
  - Delegate API calls to helper/service classes

* Enforce separation:
  - Do NOT mix UI and API logic in the same step
  - Keep concerns isolated and modular

* Use Page Object Model for all UI interactions
* Reuse existing page object methods whenever possible

* Use modern JavaScript (ES modules, async/await)

* Assertions:
  - Only include assertions in Then steps
  - Use 'expect' from '@playwright/test'

* Waiting strategy:
  - Avoid hard waits (no waitForTimeout)
  - Use Playwright auto-waiting or explicit conditions (locator.waitFor, expect)

* Reusability:
  - Keep steps generic and parameterized
  - Avoid duplication across step definitions

* Naming:
  - Use clear, consistent, human-readable step names
  - Prefer parameterized steps over hardcoded values

* Error handling:
  - Do not swallow errors
  - Let Playwright assertions fail naturally

* Output format:
  - Generate a complete step definition file
  - Use proper imports and exports
  - Group related steps logically