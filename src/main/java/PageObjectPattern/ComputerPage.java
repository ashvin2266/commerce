package PageObjectPattern;

import BasePage.DriverClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.Callable;

public class ComputerPage extends DriverClass {

@FindBy(xpath = "//a[contains(text(),' Notebooks ')]")
    WebElement notebooks;
    @FindBy(xpath = "//a[contains(text(),' Desktops ')]")
    WebElement desktops;
    @FindBy(xpath = "//a[contains(text(),' Software ')]")
    WebElement software;
    @FindBy(id = "products-orderby")
    WebElement sortBy;










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
    public void sortAtoZ(String args){
//     selectByIndexFromDropDown(sortBy,1);
     selectByVisibleTextFromDropDown(sortBy,args);

    }
    public void verifySortByAtoZ(){
        List<String>noteBookList=new ArrayList<String>();
        List<WebElement>list=driver.findElements(By.xpath("//h2[@class='product-title']"));
        for (WebElement ele:list){
            noteBookList.add(ele.getText());
        }
        System.out.println(noteBookList);
        List<String>tempList=new ArrayList<String>();
        tempList.addAll(noteBookList);
        System.out.println(tempList);
        Collections.sort(tempList);
        Assert.assertEquals(noteBookList,tempList);
        log.info("Products displayed on the computer page sorted by alphabetic order is Verified");
        log.info("Notebooks are sorted by A to Z");

    }
    public void verifyComputerByLowPriceToHigh(){
        List<String>notebookPriceList=new ArrayList<String>();
        List<WebElement>price=driver.findElements(By.xpath("//div[@class='prices']"));
        for (WebElement ele:price){
            notebookPriceList.add(ele.getText());
        }
        log.info("NoteBooks expected price list is "+notebookPriceList);
        List<String>tempList= new ArrayList<String>();
        tempList.addAll(notebookPriceList);
        Collections.sort(tempList);
        log.info("NoteBooks actual price list is "+ tempList);
        Assert.assertEquals(notebookPriceList,tempList);
        log.info("Products displayed on the computer page sorted by Low price to High price is verified");



            }


}
