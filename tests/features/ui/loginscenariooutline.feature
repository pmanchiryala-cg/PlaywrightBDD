Feature: Login functionality

  Background:
    Given I navigate to the login homepage "https://practicetestautomation.com/practice-test-login"

  @smoke @regression
  Scenario Outline: Login attempts with different credentials
    When I login with uname "<username>" and pwd "<password>"
    Then I should see a "<type>" message "<message>"

    Examples:
      | username | password    | type    | message                  |
      | studet1  | Password123 | error   | Your username is invalid!|
      | student  | test123     | error   | Your password is invalid!|
      | student  | Password123 | success | Logged In Successfully   |