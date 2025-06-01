Feature: User Registration Endpoint Testing

  Background:
    Given I open the registration page

  Scenario: Successful registration
    When I register with username "newuser123", password "SecurePass1", and confirm password "SecurePass1"
    Then the response status should be 10

  Scenario: Missing confirm password
    When I register with username "validUser", password "SecurePass1", and confirm password ""
    Then the response status should be 112

  Scenario: Password too short
    When I register with username "validUser", password "short", and confirm password "short"
    Then the response status should be 129

  Scenario: Username already exists
    When I register with username "test1", password "SecurePass1", and confirm password "SecurePass1"
    Then the response status should be 113

  Scenario: Password and confirm password do not match
    When I register with username "user123", password "SecurePass1", and confirm password "WrongPass1"
    Then the response status should be 99