Feature: Login functionality

  Background:
    Given I navigate to the login page "https://practicetestautomation.com/practice-test-login"
  @test
  Scenario: Successful login with valid credentials
    When I login with username "student" and password "Password123"
    Then I should see a success message "Logged In Successfully"
  @regression @smoke
  Scenario: Unsuccessful login with invalid username
    When I login with username "testing" and password "test123"
    Then I should see an error message "Your username is invalid!"
  @regression
  Scenario: Unsuccessful login with invalid password
    When I login with username "student" and password "test123"
    Then I should see an error message "Your password is invalid!"

 