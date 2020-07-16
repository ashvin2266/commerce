package StepDefinations;

import BasePage.DriverClass;
import PageObjectPattern.HomePage;
import PageObjectPattern.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class Login_sd extends DriverClass {
    HomePage hp=new HomePage();
    LoginPage lp=new LoginPage();
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {

    }

    @When("^I click on Login Link$")
    public void iClickOnLoginLink() {
        hp.clickonLoginLink();
    }

    @Then("^I should navigate to Login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedurl="https://demo.nopcommerce.com/login?returnUrl=%2F";
        String actualUrl=driver.getCurrentUrl();
        Assert.assertEquals(expectedurl,actualUrl);
        log.info("expected url is --->"+ expectedurl);
        log.info("actual url is ---->"+actualUrl);
        log.info("login page url is verified ");
    }

    @And("^I enter email as \"([^\"]*)\"$")
    public void iEnterEmailAs(String email) throws InterruptedException {
        lp.enterEmail(email);
    }

    @And("^I enter password as  \"([^\"]*)\"$")
    public void iEnterPasswordAs(String password) {
       lp.enterPassword(password);
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        lp.clickLoginbtn();
    }

    @Then("^I should Login successfully$")
    public void iShouldLoginSuccessfully() {
        lp.messageVerify();
    }
}
