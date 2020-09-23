$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Register.feature");
formatter.feature({
  "line": 2,
  "name": "Register feature",
  "description": "As a User I want to create or register  a new account on Nop Commerce website.",
  "id": "register-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 27,
  "name": "3.User enter all valid detail without firstname",
  "description": "",
  "id": "register-feature;3.user-enter-all-valid-detail-without-firstname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@register2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User on a Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should navigate to register page succesfully.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enter firstname as\"\u003cfirstname\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter the Day in date of birth is \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter the Month in date of birth is \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the Year in date of birth is \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter email as \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Companyname as \"\u003ccompanyname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password as  \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter confirm password as \"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see the error message as \"\u003cerrorMSG\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "day",
        "month",
        "year",
        "email",
        "companyname",
        "password",
        "confirmpassword",
        "errorMSG"
      ],
      "line": 44,
      "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;1"
    },
    {
      "cells": [
        "abc",
        "def",
        "25",
        "July",
        "1975",
        "abcdef@hotmail.com",
        "xyz",
        "789456123",
        "789456123",
        "The specified email already exists"
      ],
      "line": 45,
      "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;2"
    },
    {
      "cells": [
        "",
        "def",
        "25",
        "July",
        "1975",
        "abcdef@hotmail.com",
        "xyz",
        "789456123",
        "789456123",
        "First name is required."
      ],
      "line": 46,
      "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;3"
    },
    {
      "cells": [
        "abc",
        "",
        "25",
        "July",
        "1975",
        "abcdef@hotmail.com",
        "xyz",
        "789456123",
        "789456123",
        "Last name is required."
      ],
      "line": 47,
      "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;4"
    },
    {
      "cells": [
        "abc",
        "def",
        "25",
        "July",
        "1975",
        "",
        "xyz",
        "789456123",
        "789456123",
        "Email is required."
      ],
      "line": 48,
      "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;5"
    },
    {
      "cells": [
        "abc",
        "def",
        "25",
        "July",
        "1975",
        "abcdef@hotmail.com",
        "xyz",
        "",
        "",
        "Password is required."
      ],
      "line": 49,
      "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8178022100,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "3.User enter all valid detail without firstname",
  "description": "",
  "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@register2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User on a Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should navigate to register page succesfully.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enter firstname as\"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname as \"def\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter the Day in date of birth is \"25\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter the Month in date of birth is \"July\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the Year in date of birth is \"1975\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter email as \"abcdef@hotmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Companyname as \"xyz\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password as  \"789456123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter confirm password as \"789456123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see the error message as \"The specified email already exists\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Register_sd.userOnAHomePage()"
});
formatter.result({
  "duration": 133046800,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1373222600,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userShouldNavigateToRegisterPageSuccesfully()"
});
formatter.result({
  "duration": 47791100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 24
    }
  ],
  "location": "Register_sd.userEnterFirstnameAs(String)"
});
formatter.result({
  "duration": 4194986600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def",
      "offset": 21
    }
  ],
  "location": "Register_sd.iEnterLastnameAs(String)"
});
formatter.result({
  "duration": 92784700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 37
    }
  ],
  "location": "Register_sd.iEnterTheDayInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 117408600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 39
    }
  ],
  "location": "Register_sd.iEnterTheMonthInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 116016200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 38
    }
  ],
  "location": "Register_sd.iEnterTheYearInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 134791900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdef@hotmail.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 3092499000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 24
    }
  ],
  "location": "Register_sd.iEnterCompanynameAs(String)"
});
formatter.result({
  "duration": 84211700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 67820300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 29
    }
  ],
  "location": "Register_sd.iEnterConfirmPasswordAs(String)"
});
formatter.result({
  "duration": 73079000,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1197100200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The specified email already exists",
      "offset": 35
    }
  ],
  "location": "Register_sd.iShouldSeeTheErrorMessageAs(String)"
});
formatter.result({
  "duration": 29179900,
  "status": "passed"
});
formatter.after({
  "duration": 88700,
  "status": "passed"
});
formatter.after({
  "duration": 68922800,
  "status": "passed"
});
formatter.before({
  "duration": 6966768200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "3.User enter all valid detail without firstname",
  "description": "",
  "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@register2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User on a Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should navigate to register page succesfully.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enter firstname as\"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname as \"def\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter the Day in date of birth is \"25\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter the Month in date of birth is \"July\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the Year in date of birth is \"1975\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter email as \"abcdef@hotmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Companyname as \"xyz\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password as  \"789456123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter confirm password as \"789456123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see the error message as \"First name is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Register_sd.userOnAHomePage()"
});
formatter.result({
  "duration": 8835200,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1317366100,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userShouldNavigateToRegisterPageSuccesfully()"
});
formatter.result({
  "duration": 48467100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 24
    }
  ],
  "location": "Register_sd.userEnterFirstnameAs(String)"
});
formatter.result({
  "duration": 4166132100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def",
      "offset": 21
    }
  ],
  "location": "Register_sd.iEnterLastnameAs(String)"
});
formatter.result({
  "duration": 84594500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 37
    }
  ],
  "location": "Register_sd.iEnterTheDayInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 76951600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 39
    }
  ],
  "location": "Register_sd.iEnterTheMonthInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 80012300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 38
    }
  ],
  "location": "Register_sd.iEnterTheYearInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 114248800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdef@hotmail.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 3099360700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 24
    }
  ],
  "location": "Register_sd.iEnterCompanynameAs(String)"
});
formatter.result({
  "duration": 97501800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 65605600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 29
    }
  ],
  "location": "Register_sd.iEnterConfirmPasswordAs(String)"
});
formatter.result({
  "duration": 67264900,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 58233800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 35
    }
  ],
  "location": "Register_sd.iShouldSeeTheErrorMessageAs(String)"
});
formatter.result({
  "duration": 27268900,
  "status": "passed"
});
formatter.after({
  "duration": 30400,
  "status": "passed"
});
formatter.after({
  "duration": 94965500,
  "status": "passed"
});
formatter.before({
  "duration": 6987181400,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "3.User enter all valid detail without firstname",
  "description": "",
  "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@register2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User on a Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should navigate to register page succesfully.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enter firstname as\"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname as \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter the Day in date of birth is \"25\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter the Month in date of birth is \"July\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the Year in date of birth is \"1975\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter email as \"abcdef@hotmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Companyname as \"xyz\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password as  \"789456123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter confirm password as \"789456123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see the error message as \"Last name is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Register_sd.userOnAHomePage()"
});
formatter.result({
  "duration": 8163200,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1383013100,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userShouldNavigateToRegisterPageSuccesfully()"
});
formatter.result({
  "duration": 48237900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 24
    }
  ],
  "location": "Register_sd.userEnterFirstnameAs(String)"
});
formatter.result({
  "duration": 4198962400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "Register_sd.iEnterLastnameAs(String)"
});
formatter.result({
  "duration": 80919200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 37
    }
  ],
  "location": "Register_sd.iEnterTheDayInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 126989600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 39
    }
  ],
  "location": "Register_sd.iEnterTheMonthInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 120774800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 38
    }
  ],
  "location": "Register_sd.iEnterTheYearInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 83720700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdef@hotmail.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 3093710600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 24
    }
  ],
  "location": "Register_sd.iEnterCompanynameAs(String)"
});
formatter.result({
  "duration": 81523900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 66249100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 29
    }
  ],
  "location": "Register_sd.iEnterConfirmPasswordAs(String)"
});
formatter.result({
  "duration": 60581000,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 60183100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 35
    }
  ],
  "location": "Register_sd.iShouldSeeTheErrorMessageAs(String)"
});
formatter.result({
  "duration": 25825300,
  "status": "passed"
});
formatter.after({
  "duration": 19400,
  "status": "passed"
});
formatter.after({
  "duration": 60843600,
  "status": "passed"
});
formatter.before({
  "duration": 6914193300,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "3.User enter all valid detail without firstname",
  "description": "",
  "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@register2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User on a Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should navigate to register page succesfully.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enter firstname as\"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname as \"def\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter the Day in date of birth is \"25\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter the Month in date of birth is \"July\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the Year in date of birth is \"1975\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter email as \"\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Companyname as \"xyz\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password as  \"789456123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter confirm password as \"789456123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see the error message as \"Email is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Register_sd.userOnAHomePage()"
});
formatter.result({
  "duration": 8296100,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1327147000,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userShouldNavigateToRegisterPageSuccesfully()"
});
formatter.result({
  "duration": 50885900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 24
    }
  ],
  "location": "Register_sd.userEnterFirstnameAs(String)"
});
formatter.result({
  "duration": 4181821200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def",
      "offset": 21
    }
  ],
  "location": "Register_sd.iEnterLastnameAs(String)"
});
formatter.result({
  "duration": 91925100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 37
    }
  ],
  "location": "Register_sd.iEnterTheDayInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 75432700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 39
    }
  ],
  "location": "Register_sd.iEnterTheMonthInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 80532000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 38
    }
  ],
  "location": "Register_sd.iEnterTheYearInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 117261300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 3079921200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 24
    }
  ],
  "location": "Register_sd.iEnterCompanynameAs(String)"
});
formatter.result({
  "duration": 79860900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 70578200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "789456123",
      "offset": 29
    }
  ],
  "location": "Register_sd.iEnterConfirmPasswordAs(String)"
});
formatter.result({
  "duration": 71725800,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 64638800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 35
    }
  ],
  "location": "Register_sd.iShouldSeeTheErrorMessageAs(String)"
});
formatter.result({
  "duration": 27585300,
  "status": "passed"
});
formatter.after({
  "duration": 48500,
  "status": "passed"
});
formatter.after({
  "duration": 64944800,
  "status": "passed"
});
formatter.before({
  "duration": 6891201300,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "3.User enter all valid detail without firstname",
  "description": "",
  "id": "register-feature;3.user-enter-all-valid-detail-without-firstname;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 26,
      "name": "@register2"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User on a Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should navigate to register page succesfully.",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "User enter firstname as\"abc\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname as \"def\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter the Day in date of birth is \"25\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter the Month in date of birth is \"July\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter the Year in date of birth is \"1975\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter email as \"abcdef@hotmail.com\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Companyname as \"xyz\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password as  \"\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter confirm password as \"\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I should see the error message as \"Password is required.\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Register_sd.userOnAHomePage()"
});
formatter.result({
  "duration": 7455800,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userClickOnRegisterLink()"
});
formatter.result({
  "duration": 1320066500,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.userShouldNavigateToRegisterPageSuccesfully()"
});
formatter.result({
  "duration": 41696700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 24
    }
  ],
  "location": "Register_sd.userEnterFirstnameAs(String)"
});
formatter.result({
  "duration": 4195936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "def",
      "offset": 21
    }
  ],
  "location": "Register_sd.iEnterLastnameAs(String)"
});
formatter.result({
  "duration": 84971200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 37
    }
  ],
  "location": "Register_sd.iEnterTheDayInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 69854900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 39
    }
  ],
  "location": "Register_sd.iEnterTheMonthInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 90941000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 38
    }
  ],
  "location": "Register_sd.iEnterTheYearInDateOfBirthIs(String)"
});
formatter.result({
  "duration": 99219600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcdef@hotmail.com",
      "offset": 18
    }
  ],
  "location": "Login_sd.iEnterEmailAs(String)"
});
formatter.result({
  "duration": 3099685600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz",
      "offset": 24
    }
  ],
  "location": "Register_sd.iEnterCompanynameAs(String)"
});
formatter.result({
  "duration": 83672500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "Login_sd.iEnterPasswordAs(String)"
});
formatter.result({
  "duration": 52963300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 29
    }
  ],
  "location": "Register_sd.iEnterConfirmPasswordAs(String)"
});
formatter.result({
  "duration": 54464600,
  "status": "passed"
});
formatter.match({
  "location": "Register_sd.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 63368800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 35
    }
  ],
  "location": "Register_sd.iShouldSeeTheErrorMessageAs(String)"
});
formatter.result({
  "duration": 29893300,
  "status": "passed"
});
formatter.after({
  "duration": 16700,
  "status": "passed"
});
formatter.after({
  "duration": 66115300,
  "status": "passed"
});
});