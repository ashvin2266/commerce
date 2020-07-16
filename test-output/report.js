$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Book.feature");
formatter.feature({
  "line": 2,
  "name": "Book Feature",
  "description": "\r\nAs a user I want to view products on Books page",
  "id": "book-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@book"
    }
  ]
});
formatter.before({
  "duration": 8608625900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to Book page successfully",
  "description": "",
  "id": "book-feature;user-should-navigate-to-book-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@books"
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
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to Book page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 168376400,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iClickOnBookLink()"
});
formatter.result({
  "duration": 2043623800,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iShouldNavigateToBookPageSuccessfully()"
});
formatter.result({
  "duration": 31287200,
  "status": "passed"
});
formatter.after({
  "duration": 117800,
  "status": "passed"
});
formatter.after({
  "duration": 84995700,
  "status": "passed"
});
formatter.before({
  "duration": 7636711500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should see results on Book page sorted by AtoZ",
  "description": "",
  "id": "book-feature;user-should-see-results-on-book-page-sorted-by-atoz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@books1"
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
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I sort books by Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the products displayed on the books page sorted by alphabetic order",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 758700,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iClickOnBookLink()"
});
formatter.result({
  "duration": 1926945000,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iSortBooksByNameAToZ()"
});
formatter.result({
  "duration": 908781100,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByAlphabeticOrder()"
});
formatter.result({
  "duration": 91024000,
  "status": "passed"
});
formatter.after({
  "duration": 107300,
  "status": "passed"
});
formatter.after({
  "duration": 83604600,
  "status": "passed"
});
formatter.before({
  "duration": 7499964900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should see prices on Books page sorted by LowToHigh",
  "description": "",
  "id": "book-feature;user-should-see-prices-on-books-page-sorted-by-lowtohigh",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@books2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I sort books by Price: Low to High",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see the products displayed on the books page sorted by prices in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 1326600,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iClickOnBookLink()"
});
formatter.result({
  "duration": 1792115900,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iSortBooksByPriceLowToHigh()"
});
formatter.result({
  "duration": 1738882500,
  "status": "passed"
});
formatter.match({
  "location": "Books_sd.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByPricesInAscendingOrder()"
});
formatter.result({
  "duration": 90807000,
  "status": "passed"
});
formatter.after({
  "duration": 21700,
  "status": "passed"
});
formatter.after({
  "duration": 85725400,
  "status": "passed"
});
});