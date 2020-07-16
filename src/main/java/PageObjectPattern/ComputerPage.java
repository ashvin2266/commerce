package PageObjectPattern;

import BasePage.DriverClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends DriverClass {

@FindBy(xpath = "//a[contains(text(),' Notebooks ')]")
    WebElement notebooks;
    @FindBy(xpath = "//a[contains(text(),' Desktops ')]")
    WebElement desktops;
    @FindBy(xpath = "//a[contains(text(),' Software ')]")
    WebElement software;










    public ComputerPage(){
        PageFactory.initElements(driver,this);
    }
    public void verifyPagetitle(){
        String expectedTitle="nopCommerce demo store. Computers";
        verifyPageTitle(expectedTitle);

    }
    public void setCategory(String categoryName) throws InterruptedException {
        Thread.sleep(2000);
        if (categoryName.equalsIgnoreCase("notebooks")){
            clickOnElement(notebooks);
        }
        else if (categoryName.equalsIgnoreCase("desktops")){
            clickOnElement(desktops);
        }
        else if (categoryName.equalsIgnoreCase("software")){
            clickOnElement(software);
        }
    }
}
