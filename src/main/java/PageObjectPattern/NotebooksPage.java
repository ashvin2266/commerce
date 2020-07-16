package PageObjectPattern;

import BasePage.DriverClass;
import org.openqa.selenium.support.PageFactory;

public class NotebooksPage extends DriverClass {






    public NotebooksPage(){
        PageFactory.initElements(driver,this);
    }
    public void verifyPage(){
        String expectedPage="nopCommerce demo store. Notebooks";
        verifyPageTitle(expectedPage);
            }
}
