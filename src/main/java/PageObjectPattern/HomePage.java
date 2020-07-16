package PageObjectPattern;

import BasePage.DriverClass;
import com.cucumber.listener.Reporter;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends DriverClass {

    @FindBy(xpath = "//div[@class='header-links']/ul/li[2]/a")
    WebElement loginLink;
    @FindBy(linkText = "Register")
    WebElement registerLink;
    @FindBy(linkText = "Wishlist")
    WebElement wishlistlink;
    @FindBy(xpath = "//a[@class='ico-cart']")
    WebElement shoppingCart;
    @FindBy(id = "small-searchterms")
    WebElement searchBar;
    @FindBy(xpath = "//input[@type='submit']")
    WebElement searchBtn;
    @FindBy(xpath = "//ul[@class='top-menu notmobile']/li[1]/a")
    WebElement computers;
    @FindBy(linkText = "Electronics ")
    WebElement electronics;
    @FindBy(linkText = "Apparel ")
    WebElement apparel;
    @FindBy(linkText = "Digital downloads ")
    WebElement digitalDownload;
    @FindBy(xpath = "//ul[@class='top-menu notmobile']/li[5]")
    WebElement books;
    @FindBy(linkText = "Jewelry ")
    WebElement jewelry;
    @FindBy(linkText = "Gift Cards ")
    WebElement giftCards;









    public HomePage(){
        PageFactory.initElements(driver,this);
    }
    public void clickonLoginLink(){
        Reporter.addStepLog("click on login link"+loginLink.toString()+"<br>");
        loginLink.click();
        log.info("login link is clicked");
    }
    public void clickonRegisterLink(){
        Reporter.addStepLog("click on register link"+registerLink.toString()+"<br>");
        clickOnElement(registerLink);
        log.info("Register link is clicked");
    }
    public void clickonWishlistLink(){
        Reporter.addStepLog("click on wishlist link"+wishlistlink.toString()+"<br>");
        clickOnElement(wishlistlink);
        log.info("Wishlist link is clicked");
    }
    public void clickonShoppingCartLink(){
        Reporter.addStepLog("click on shoppingcart link"+shoppingCart.toString()+"<br>");
        clickOnElement(shoppingCart);
        log.info("Shopping Cart link is clicked");
    }
    public void enterSearchItemInSearchBar(String searchItem){
        Reporter.addStepLog("Enter the search  item in searchbar is"+searchItem+searchBar.toString()+"<br>");
        sendTextToElement(searchBar,searchItem);
    }
    public void clickOnSearchBtn(){
        clickOnElement(searchBtn);
    }
    public void clickonBooksLink(){
        Reporter.addStepLog("click on book link"+ books.toString()+ "<br>");
        clickOnElement(books);
        log.info("Books link is clicked");
    }
    public void clickOnComputerLink() throws InterruptedException {
        Thread.sleep(3000);
        clickOnElement(computers);
        Reporter.addStepLog("click on computer Link"+computers.toString()+"<br>");
        log.info("Computer link clicked");
    }
}
