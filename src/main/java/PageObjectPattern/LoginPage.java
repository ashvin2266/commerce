package PageObjectPattern;

import BasePage.DriverClass;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends DriverClass {

    @FindBy(id="Email")
    WebElement Email;
    @FindBy(id="Password")
    WebElement Password;
    @FindBy(xpath = "//input[@class='button-1 login-button']")
    WebElement loginbtn;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMSG;
    @FindBy(xpath = "//div[@class='page-title']")
    WebElement textMsg;







    public LoginPage(){
        PageFactory.initElements(driver,this);
    }

    public void enterEmail(String email) throws InterruptedException {
        Thread.sleep(3000);
        sendTextToElement(Email,email);
        log.info("user enter email in emailfield is--->"+ email);
    }
    public void enterPassword(String password){
        sendTextToElement(Password,password);
        log.info("user enter password in passwordfield");
    }
    public void clickLoginbtn(){
        clickOnElement(loginbtn);
        log.info("user click on login button");
    }
    public void messageVerify(){
       String actualMSG= textMsg.getText();
       String expectedMsg="Welcome, Please Sign In!";
       verifyText(textMsg,expectedMsg);
//       Assert.assertEquals(expectedMsg,actualMSG);
       log.info("user see the welcome message is --- "+ actualMSG);
    }
}
