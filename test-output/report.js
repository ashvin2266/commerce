$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 2,
  "name": "Computers Feature",
  "description": "\r\nAs a user I want to view products on Computer page",
  "id": "computers-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@computer"
    }
  ]
});
formatter.before({
  "duration": 9666460900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to computer page successfully",
  "description": "",
  "id": "computers-feature;user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@computer"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 125714100,
  "status": "passed"
});
formatter.match({
  "location": "Compute_sd.iClickOnComputerLink()"
});
formatter.result({
  "duration": 15570956000,
  "status": "passed"
});
formatter.match({
  "location": "Compute_sd.iShouldNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 12548700,
  "status": "passed"
});
formatter.after({
  "duration": 81900,
  "status": "passed"
});
formatter.after({
  "duration": 29000,
  "status": "passed"
});
formatter.before({
  "duration": 8251097000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should see results on Computer page sorted by AtoZ",
  "description": "",
  "id": "computers-feature;user-should-see-results-on-computer-page-sorted-by-atoz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@computer1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on category as\"Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I sort computers by \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the products displayed on the computer page sorted by alphabetic order",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 534700,
  "status": "passed"
});
formatter.match({
  "location": "Compute_sd.iClickOnComputerLink()"
});
formatter.result({
  "duration": 4708926300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 23
    }
  ],
  "location": "Compute_sd.iClickOnCategoryAs(String)"
});
formatter.result({
  "duration": 2870750400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 21
    }
  ],
  "location": "Compute_sd.iSortComputersBy(String)"
});
formatter.result({
  "duration": 689193000,
  "status": "passed"
});
formatter.match({
  "location": "Compute_sd.iShouldSeeTheProductsDisplayedOnTheComputerPageSortedByAlphabeticOrder()"
});
formatter.result({
  "duration": 116613400,
  "status": "passed"
});
formatter.after({
  "duration": 27400,
  "status": "passed"
});
formatter.after({
  "duration": 10600,
  "status": "passed"
});
formatter.before({
  "duration": 7112823700,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should see prices on Books page sorted by LowToHigh",
  "description": "",
  "id": "computers-feature;user-should-see-prices-on-books-page-sorted-by-lowtohigh",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@computer2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on category as\"Notebooks\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I sort computers by \"Price: Low to High\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see the products displayed on the computers page sorted by prices in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 675200,
  "status": "passed"
});
formatter.match({
  "location": "Compute_sd.iClickOnComputerLink()"
});
formatter.result({
  "duration": 4530716300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Notebooks",
      "offset": 23
    }
  ],
  "location": "Compute_sd.iClickOnCategoryAs(String)"
});
formatter.result({
  "duration": 3376338900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price: Low to High",
      "offset": 21
    }
  ],
  "location": "Compute_sd.iSortComputersBy(String)"
});
formatter.result({
  "duration": 666568900,
  "status": "passed"
});
formatter.match({
  "location": "Compute_sd.iShouldSeeTheProductsDisplayedOnTheComputersPageSortedByPricesInAscendingOrder()"
});
formatter.result({
  "duration": 117966200,
  "status": "passed"
});
formatter.after({
  "duration": 35600,
  "status": "passed"
});
formatter.after({
  "duration": 9500,
  "status": "passed"
});
});