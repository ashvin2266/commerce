package BasePage;


import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class DriverClass  {
    public static WebDriver driver;
    public static Properties prop;
    public static Logger log=LogManager.getLogger(DriverClass.class.getName());
   //    this method read Propertyfile
    public String getproperty(String key) throws IOException {
        Properties prop = new Properties();
        try {
        FileInputStream file = new FileInputStream("src/main/java/PropertiesFile/config.properties");
        prop.load(file);
        log.info("File is loaded from propertyfile");
        } catch (IOException e) {
            e.printStackTrace();}
        return prop.getProperty(key);

    }
//  this method open  the  browser read from propertyfile
    public void openBrowser() throws IOException {
       String Browser = getproperty("browser");
        if (Browser.equalsIgnoreCase("Chrome")) {
            WebDriverManager.chromedriver().setup();
         /*    if we want headless browser use the following two option and add parameter in ChromeDrive(option)
            ChromeOptions option=new ChromeOptions();
            option.addArguments("window-1400,800");
            option.addArguments("headless");*/
            driver = new ChromeDriver();
            log.info("Chrome browser is open");
        } else if (Browser.equalsIgnoreCase("firefox")) {
            WebDriverManager.firefoxdriver().setup();
            driver = new FirefoxDriver();
            log.info("Firefox browser is open");
        }
        driver.get(getproperty("url"));
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        log.info("Url is open");
    }
    public void closeBrowser() {

        driver.close();
        log.info("Browser is closed");
    }
    //this method verify the URL page
    public void verifyURL(String url){
        String actualUrl=driver.getCurrentUrl();
        Assert.assertEquals(url,actualUrl);
        log.info("Expected URL of page is  "+ url);
        log.info("Actual URL of page is  "+ actualUrl);
        log.info("URL of page is verified");
    }
//    this method verify the page title
    public void verifyPageTitle(String pageTitle){
        String actualPageTitle=driver.getTitle();
        Assert.assertEquals(pageTitle,actualPageTitle);
        log.info("Expected pageTitle of page is  "+ pageTitle);
        log.info("Actual pagetitle of page is  "+ actualPageTitle);
        log.info("Page Title of page is verified");
    }
    public  String TakeAscreenShot( Scenario scenario) throws IOException {
        String dateName = new SimpleDateFormat("yyyyMMddhhmmss").format(new Date());
        File srcFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        String  ScreenShotPath = "./target/screenshots/"+scenario.getName()+dateName+".png";
        Reporter.addScreenCaptureFromPath(ScreenShotPath);
        try {
            FileUtils.copyFile(srcFile, new File("./target/screenshots/"+scenario.getName()+dateName+".png"));
        } catch (IOException e1) {
            e1.printStackTrace();
        }
        return ScreenShotPath;
        }
    public String getScreenShotPath(String testCaseName,WebDriver driver) {

        TakesScreenshot ts = (TakesScreenshot)driver;
        File file=ts.getScreenshotAs(OutputType.FILE);
        String destinationFile=System.getProperty("user.dir") +"\\report\\"+ testCaseName + ".png" ;
        try {
            FileUtils.copyFile(file,new File(destinationFile) );
        } catch (IOException e) {

            e.printStackTrace();
        }
        return destinationFile;
    }
//  This Method generate new string for email
    public String StringrandomString() {
        String generatedString1= RandomStringUtils.randomAlphabetic(4);
        return (generatedString1);
}
// this method will click on element

    public void clickOnElement(By by) {
        driver.findElement(by).click();
    }
    // This method will click on element

    public void clickOnElement(WebElement element) {
        element.click();
    }
    // this method will send text on element
    public void sendTextToElement(By by, String str) {
        WebElement element = driver.findElement(by);
        element.clear();
        element.sendKeys(str);
    }
    public void sendTextToElement(WebElement element, String str) {
        element.sendKeys(str);
    }
    //this method will get text from element

    public String getTextFromElement(By by) {
        return driver.findElement(by).getText();
    }

    public String getTextFromElement(WebElement element) {
        return element.getText();
    }
    // text varification methods
    public void verifyText(By by, String str) {
        Assert.assertEquals(str, getTextFromElement(by));
    }

    public void verifyText(WebElement element, String str) {
        Assert.assertEquals(str, getTextFromElement(element));

    }
    /*
     *This method will perform a click on a radio Button
     */
    public void radioButtonClick(By by) {
        driver.findElement(by).click();
    }

    /*
     *This method will perform a click on a radio Button
     */
    public void radioButtonClick(WebElement element) {
        element.click();
    }
    /*
     * This method wiLL SELECT an element from a DROPDOWN menu by INDEX
     */
    public void selectByIndexFromDropDown(By by, int index) {
        Select select = new Select(driver.findElement(by));
        select.selectByIndex(index);
    }

    /*
     * This method wiLL SELECT an element from a DROPDOWN menu by INDEX
     */
    public void selectByIndexFromDropDown(WebElement element, int index) {
        element.click();
        Select select = new Select(element);
        select.selectByIndex(index);
    }

    /*
     * This method wiLL SELECT an element from a DROPDOWN menu by VISIBLE TEXT
     */
    public void selectByVisibleTextFromDropDown(By by, String string) {
        Select select = new Select(driver.findElement(by));
        select.selectByVisibleText(string);
    }

    /*
     * This method wiLL SELECT an element from a DROPDOWN menu by VISIBLE TEXT
     */
    public void selectByVisibleTextFromDropDown(WebElement element, String string) {
        Select select = new Select(element);
        select.selectByVisibleText(string);
    }
    /*
     * This method wiLL SELECT an element from a DROPDOWN menu by VALUE
     */
    public void selectByValueFromDropDown(By by, String string) {
        Select select = new Select(driver.findElement(by));
        select.selectByValue(string);
    }

    /*
     * This method wiLL SELECT an element from a DROPDOWN menu by VALUE
     */
    public void selectByValueFromDropDown(WebElement element, String string) {
        Select select = new Select(element);
        select.selectByValue(string);
    }
// This method will make the web driver wait until WebElement become clickable

    public void waitUntilElementToBeClickable(WebElement element, int timeout) {
        WebDriverWait wait = new WebDriverWait(driver, timeout);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }




}

