package PageObjectPattern;

import BasePage.DriverClass;
import com.cucumber.listener.Reporter;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

public class RegisterPage extends DriverClass {

    @FindBy(id="gender-male")
    WebElement maleRadioBtn;
    @FindBy(id = "gender-female")
    WebElement femaleRadioBtn;
    @FindBy(id = "FirstName")
    WebElement firstName;
    @FindBy(name = "LastName")
    WebElement lastName;
    @FindBy(xpath = "//div[@class='date-picker-wrapper']")
    WebElement datePick;
    @FindBy(xpath = "//div[@class='date-picker-wrapper']/select[1]")
    WebElement dayPick;
    @FindBy(xpath = "//div[@class='date-picker-wrapper']/select[2]")
    WebElement monthPick;
    @FindBy(xpath = "//div[@class='date-picker-wrapper']/select[3]")
    WebElement yearPick;
    @FindBy(id = "ConfirmPassword")
    WebElement confirmPassword;
    @FindBy(id = "Company")
    WebElement companyName;
    @FindBy(id = "register-button")
    WebElement registerBtn;
    @FindBy(id="Email")
    WebElement Email;
    @FindBy(xpath = "//div[@class='title']")
    WebElement personalDetail;
    @FindBy(xpath = "//div[@class='result']")
    WebElement registrationCompleteText;
    @FindBy(xpath = "//span[@class='field-validation-error']")
    WebElement errorMsg;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']/ul/li")
    WebElement errorMessage;

    public RegisterPage(){
        PageFactory.initElements(driver,this);
    }
    public void enterfirstName(String firstname) throws InterruptedException {
        Thread.sleep(2000);
        firstName.sendKeys(firstname);
    }
    public void enterlastName(String lastname){
        lastName.click();
        lastName.sendKeys(lastname);
    }

    public void enterCompanyname(String companyname){
        companyName.click();
        companyName.sendKeys(companyname);
    }
    public void enterconfirmPassword(String confirmpassword){
        confirmPassword.sendKeys(confirmpassword);
    }
    public void clickOnRegisterBtn(){
        registerBtn.click();
    }
    public void clickOnRadioBtn() throws InterruptedException {
        Thread.sleep(2000);
        radioButtonClick(maleRadioBtn);
       boolean selected= maleRadioBtn.isSelected();
        Assert.assertTrue(selected);
        log.info("Radiobutton is selected");
    }
    public void setDayPick(String day){
        Select Day= new Select(dayPick);
        Day.selectByVisibleText(day);
    }
    public void setMonthPick(String month){
        Select Month= new Select(monthPick);
        Month.selectByVisibleText(month);
    }
    public void setYearPick(String year){
        Select Year= new Select(yearPick);
        Year.selectByVisibleText(year);
    }
    public void setRandomEmail(String email){

        email=StringrandomString()+"@gmail.com";
        Email.sendKeys(email);
        log.info("Random email is-----"+email);
    }
    public void verifyPersonalDetailText(){
       String text="Your Personal Details";
        String actualText=personalDetail.getText();
        Reporter.addStepLog("verify massage" + text + "displayd Msg" + personalDetail.toString() + "<br>");
        Assert.assertEquals(text,actualText);
        log.info("Page contains Heading Text is---"+actualText);
        log.info("Personal detail text is verify");
    }
    public void verifyRegCompleText(String regMSG){
        verifyText(registrationCompleteText,regMSG);
        log.info("User should be able to see the message is---"+regMSG);
    }
    public void verifyErrorMessage(String errorMSG){
        if (errorMSG.equalsIgnoreCase("The specified email already exists")){
            String actualMSG=errorMessage.getText();
            Assert.assertEquals(errorMSG,actualMSG);
            log.info("Expected error message is  "+errorMSG);
            log.info("Actual error message is  "+ actualMSG);
            log.info("error message is verified");
        }
        else if (errorMSG.equalsIgnoreCase("Your registration completed")){
            String actualMSG=registrationCompleteText.getText();
            Assert.assertEquals(errorMSG,actualMSG);
            log.info("Expected error message is  "+errorMSG);
            log.info("Actual error message is  "+ actualMSG);
            log.info("error message is verified");

        }
        else {
       String actualErrorMsg=errorMsg.getText();

       Assert.assertEquals(errorMSG,actualErrorMsg);
       log.info("Expected error message is  "+errorMSG);
       log.info("Actual error message is  "+ actualErrorMsg);
       log.info("error message is verified");}
    }
}
