package PageObjectPattern;

import BasePage.DriverClass;
import com.cucumber.listener.Reporter;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class BookPage extends DriverClass {
     @FindBy(xpath = "//select[@id='products-orderby']")
    WebElement sortBy;
     @FindBy(xpath = "//div[@class='details']/h2/a")
     WebElement sortResult;








    public BookPage(){
        PageFactory.initElements(driver,this);
    }
    public void verifyBookPage(){
       String pageTitle= driver.getTitle();
        verifyPageTitle(pageTitle);
       String url="https://demo.nopcommerce.com/books";
       verifyURL(url);

    }
    public void setSortBy() throws InterruptedException {
//        waitUntilElementToBeClickable(sortBy,30);
        selectByIndexFromDropDown(sortBy,1);
    }
    public void verifySortByAZ() {
        List<String> bookName = new ArrayList<String>();
        List<WebElement>bookList=driver.findElements(By.xpath("//div[@class='details']/h2/a"));
        for (WebElement ele: bookList){
            bookName.add(ele.getText());

        }

        List<String>tempList= new ArrayList<String>();
        tempList.addAll(bookName);
        System.out.println(tempList);
        Collections.sort(tempList);
        System.out.println(bookName);
        Assert.assertEquals(bookName,tempList);
        Reporter.addStepLog("Verify that books: "+bookName+" are sorted AtoZ " +sortBy.toString());
        log.info("Verify that books: "+bookName+" are sorted AtoZ " +sortBy.toString());
    }
    public void setSortByLowpriceToHigh(){
        selectByIndexFromDropDown(sortBy,3);

    }
    public void verifyPriceLowtoHigh(){

        List<String>bookPrice=new ArrayList<String>();
        List<WebElement>priceList=driver.findElements(By.xpath("//div[@class='prices']/span[2]"));
        for (WebElement ele:priceList){
            bookPrice.add(ele.getText());
        }
        System.out.println("books price is "+bookPrice);
        List<String>tempList=new ArrayList<String>();
        tempList.addAll(bookPrice);
        System.out.println(tempList);
        Collections.sort(tempList);
        System.out.println("sorted book price is "+tempList);
        Assert.assertEquals(bookPrice,tempList);
        Reporter.addStepLog("Verify that books price: "+bookPrice+" are sorted AtoZ " +sortBy.toString());
        log.info("Verify that books price: "+bookPrice+" are sorted low price to high price " +sortBy.toString());
        }
        }