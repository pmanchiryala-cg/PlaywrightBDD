Feature: Login functionality

The login functionality is a crucial aspect of any web application

  Scenario: Successful login with valid credentials
    Given I navigate to "https://practicetestautomation.com/practice-test-login/"
    When I enter valid credentials username "student" and password "Password123"
    When I click on the login button
    Then I should see the page containing "Logged In Successfully"
