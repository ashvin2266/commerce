package StepDefinations;

import BasePage.DriverClass;
import PageObjectPattern.BookPage;
import PageObjectPattern.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Books_sd extends DriverClass {

    @When("^I click on Book Link$")
    public void iClickOnBookLink() {
        new HomePage().clickonBooksLink();
    }

    @Then("^I should navigate to Book page successfully$")
    public void iShouldNavigateToBookPageSuccessfully() {
        new BookPage().verifyBookPage();
    }

    @And("^I sort books by Name: A to Z$")
    public void iSortBooksByNameAToZ() throws InterruptedException {
        new  BookPage().setSortBy();
    }

    @Then("^I should see the products displayed on the books page sorted by alphabetic order$")
    public void iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByAlphabeticOrder() {
        new BookPage().verifySortByAZ();
    }

    @And("^I sort books by Price: Low to High$")
    public void iSortBooksByPriceLowToHigh() {
     new BookPage().setSortByLowpriceToHigh();
    }

    @Then("^I should see the products displayed on the books page sorted by prices in ascending order$")
    public void iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByPricesInAscendingOrder() {
        new BookPage().verifyPriceLowtoHigh();
    }
}
