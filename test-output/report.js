$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computers Feature",
  "description": "\r\nAs a user I want to view products on Computer page",
  "id": "computers-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8653475800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should see results on Computer page sorted by AtoZ",
  "description": "",
  "id": "computers-feature;user-should-see-results-on-computer-page-sorted-by-atoz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@computer1"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Computer Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on category as\"Notebooks\"",
  "keyword": "And "
});
formatter.match({
  "location": "Login_sd.iAmOnHomePage()"
});
formatter.result({
  "duration": 210692700,
  "status": "passed"
});
formatter.match({
  "location": "Compute_sd.iClickOnComputerLink()"
});
formatter.result({
  "duration": 4643704100,
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
  "duration": 3543959500,
  "status": "passed"
});
formatter.after({
  "duration": 137400,
  "status": "passed"
});
formatter.after({
  "duration": 14200,
  "status": "passed"
});
});