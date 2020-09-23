@regression
Feature: Computers Feature

  As a user I want to view products on Computer page
  @computer
  Scenario: User should navigate to computer page successfully
    Given   I am on Home page
    When    I click on Computer Link
    Then    I should navigate to Computer page successfully
  @computer1
  Scenario: User should see results on Computer page sorted by AtoZ
    Given   I am on Home page
    When    I click on Computer Link
    And  I click on category as"Notebooks"
   And     I sort computers by "Name: A to Z"
   Then    I should see the products displayed on the computer page sorted by alphabetic order
  @computer2
  Scenario: User should see prices on Computers page sorted by LowToHigh
    Given   I am on Home page
    When    I click on Computer Link
    And  I click on category as"Notebooks"
    And     I sort computers by "Price: Low to High"
    Then    I should see the products displayed on the computers page sorted by prices in ascending order
