 @book
Feature: Book Feature

  As a user I want to view products on Books page
  @books
  Scenario: User should navigate to Book page successfully
    Given   I am on Home page
    When    I click on Book Link
    Then    I should navigate to Book page successfully
  @books1
  Scenario: User should see results on Book page sorted by AtoZ
    Given   I am on Home page
    When    I click on Book Link
    And     I sort books by Name: A to Z
    Then    I should see the products displayed on the books page sorted by alphabetic order
  @books2
  Scenario: User should see prices on Books page sorted by LowToHigh
    Given   I am on Home page
    When    I click on Book Link
    And     I sort books by Price: Low to High
    Then    I should see the products displayed on the books page sorted by prices in ascending order