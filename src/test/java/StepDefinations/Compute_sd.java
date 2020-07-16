package StepDefinations;

import BasePage.DriverClass;
import PageObjectPattern.ComputerPage;
import PageObjectPattern.HomePage;
import PageObjectPattern.NotebooksPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Compute_sd extends DriverClass {
    @When("^I click on Computer Link$")
    public void iClickOnComputerLink() throws InterruptedException {
        new HomePage().clickOnComputerLink();
    }

    @Then("^I should navigate to Computer page successfully$")
    public void iShouldNavigateToComputerPageSuccessfully() {
        new ComputerPage().verifyPagetitle();
    }

    @And("^I click on category as\"([^\"]*)\"$")
    public void iClickOnCategoryAs(String categoryName) throws InterruptedException {
     new ComputerPage().setCategory(categoryName);
     new NotebooksPage().verifyPage();
    }
}
