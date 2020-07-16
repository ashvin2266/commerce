@regression
Feature: Register feature
  As a User I want to create or register  a new account on Nop Commerce website.
  @register
  Scenario: 1.User should navigate to register page succesfully
    Given User on a Home page
    When User click on Register link
    Then User should navigate to register page succesfully.
    @register1
  Scenario: 2. User fill up  all details and create an Account
    Given User on a Home page
    When User click on Register link
    Then User should navigate to register page succesfully.
    Given User enter firstname as"ram"
    And I enter lastname as "rahim"
    And I enter the Day in date of birth is "11"
    And I enter the Month in date of birth is "July"
    And I enter the Year in date of birth is "1975"
    And     I enter random email as "abc@hotmail.com"
    And I enter Companyname as "xyz"
    And     I enter password as  "1234567"
    And I enter confirm password as "1234567"
    When I click on Register button
    Then I should create my account succesfully
    And I should see the message as "Your registration completed"
  @register2
  Scenario Outline:3.User enter all valid detail without firstname
    Given User on a Home page
    When User click on Register link
    Then User should navigate to register page succesfully.
    Given User enter firstname as"<firstname>"
    And I enter lastname as "<lastname>"
    And I enter the Day in date of birth is "<day>"
    And I enter the Month in date of birth is "<month>"
    And I enter the Year in date of birth is "<year>"
    And     I enter email as "<email>"
    And I enter Companyname as "<companyname>"
    And     I enter password as  "<password>"
    And I enter confirm password as "<confirmpassword>"
    When I click on Register button
    And I should see the error message as "<errorMSG>"

    Examples:
    |firstname|lastname|day|month |year|email             |companyname|password   |confirmpassword | errorMSG|
    |  abc   | def    |25 |July  |1975|abcdef@hotmail.com|xyz        |789456123  | 789456123      |Your registration completed  |
    |        | def    |25 |July  |1975|abcdef@hotmail.com|xyz        |789456123  | 789456123      |First name is required.      |
    |   abc  |        |25 |July  |1975|abcdef@hotmail.com|xyz        |789456123  | 789456123      |Last name is required.       |
    |  abc   | def    |25 |July  |1975|                  |xyz        |789456123  | 789456123      |Email is required.           |
    |  abc   | def    |25 |July  |1975|abcdef@hotmail.com|xyz        |           |                |Password is required.        |





    

