package StepDefinations;

import BasePage.DriverClass;
import PageObjectPattern.HomePage;
import PageObjectPattern.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

public class Register_sd extends DriverClass {
    HomePage hp=new HomePage();
    RegisterPage rp=new RegisterPage();
    @Given("^User on a Home page$")
    public void userOnAHomePage() throws IOException {
        verifyURL(getproperty("url"));
    }
    @When("^User click on Register link$")
    public void userClickOnRegisterLink() {
        hp.clickonRegisterLink();

    }
    @Then("^User should navigate to register page succesfully.$")
    public void userShouldNavigateToRegisterPageSuccesfully() {
        String expectedUrl="https://demo.nopcommerce.com/register?returnUrl=%2F";
        verifyURL(expectedUrl);
        rp.verifyPersonalDetailText();

    }

    @Given("^User enter firstname as\"([^\"]*)\"$")
    public void userEnterFirstnameAs(String firstname) throws InterruptedException {
        rp.clickOnRadioBtn();
        rp.enterfirstName(firstname);

    }

    @And("^I enter lastname as \"([^\"]*)\"$")
    public void iEnterLastnameAs(String lastname){
        rp.enterlastName(lastname);
    }

    @And("^I enter the Day in date of birth is \"([^\"]*)\"$")
    public void iEnterTheDayInDateOfBirthIs(String day) {
        rp.setDayPick(day);
    }

    @And("^I enter the Month in date of birth is \"([^\"]*)\"$")
    public void iEnterTheMonthInDateOfBirthIs(String month) {
        rp.setMonthPick(month);
    }

    @And("^I enter the Year in date of birth is \"([^\"]*)\"$")
    public void iEnterTheYearInDateOfBirthIs(String year) {
        rp.setYearPick(year);
    }



    @And("^I enter Companyname as \"([^\"]*)\"$")
    public void iEnterCompanynameAs(String companyname) {
        rp.enterCompanyname(companyname);
    }


    @And("^I enter confirm password as \"([^\"]*)\"$")
    public void iEnterConfirmPasswordAs(String confirmpassword) {
        rp.enterconfirmPassword(confirmpassword);
    }

    @When("^I click on Register button$")
    public void iClickOnRegisterButton() {
        rp.clickOnRegisterBtn();
    }

    @Then("^I should create my account succesfully$")
    public void iShouldCreateMyAccountSuccesfully() {
        String expectedURL="https://demo.nopcommerce.com/registerresult/1?returnUrl=/";
      verifyURL(expectedURL);



    }

    @And("^I enter random email as \"([^\"]*)\"$")
    public void iEnterRandomEmailAs(String email) {
        rp.setRandomEmail(email);
    }

    @And("^I should see the message as \"([^\"]*)\"$")
    public void iShouldSeeTheMessageAs(String regMSG) {
        rp.verifyRegCompleText(regMSG);
    }


    @And("^I should see the error message as \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessageAs(String errorMSG)  {
        rp.verifyErrorMessage(errorMSG);
    }
}
