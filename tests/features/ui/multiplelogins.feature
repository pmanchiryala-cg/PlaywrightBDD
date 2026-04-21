Feature: Login functionality

  Background:
    Given User navigate to the login page "https://practicetestautomation.com/practice-test-login"

  Scenario: Successful login with DataTable
    When User login with the following details:
      | username | password    |
      | testing  | test123     |
      | student  | test123     |
      | student  | Password123 |

    Then User should see the corresponding messages:
      | message                     |
      | Your username is invalid!   |
      | Your password is invalid!   |
      | Logged In Successfully      |