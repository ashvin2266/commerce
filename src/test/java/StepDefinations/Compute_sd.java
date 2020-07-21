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
    @And("^I sort computers by \"([^\"]*)\"$")
    public void iSortComputersBy(String arg0)  {
        new ComputerPage().sortAtoZ(arg0);
    }

//    @And("^I sort computers by Name: A to Z$")
//    public void iSortComputersByNameAToZ() {
//         new ComputerPage().sortAtoZ();
//
//    }
    @Then("^I should see the products displayed on the computer page sorted by alphabetic order$")
    public void iShouldSeeTheProductsDisplayedOnTheComputerPageSortedByAlphabeticOrder() {
        new ComputerPage().verifySortByAtoZ();
    }


    @Then("^I should see the products displayed on the computers page sorted by prices in ascending order$")
    public void iShouldSeeTheProductsDisplayedOnTheComputersPageSortedByPricesInAscendingOrder() {
        new ComputerPage().verifyComputerByLowPriceToHigh();
    }
}
