package StepDefinations;

import BasePage.DriverClass;
import com.aventstack.extentreports.ExtentReports;
import com.cucumber.listener.Reporter;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

import java.io.IOException;

public class Hook {

        ExtentReports extentReports = new ExtentReports();

        DriverClass driverC = new DriverClass();

        @Before
        public void browser() throws IOException {

            driverC.openBrowser();

        }
        @After(order = 1)
        public void tearDown(Scenario scenario) throws IOException {

            if (scenario.isFailed()) {
                Reporter.addStepLog("scenario is Failed");
                Reporter.getExtentReport().createTest(scenario.getName());
           String screenShotPath= driverC.TakeAscreenShot(scenario).toString();
                System.out.println(screenShotPath);
                try {
                    Reporter.addScreenCaptureFromPath("C:/Users/ashvi/commerce/target/screenshots");

                } catch (IOException e) {
                    e.printStackTrace();
                }
                Reporter.getExtentReport();
            }
        }

        @After(order = 0)
        public void closeBrowser() {

//            driverC.closeBrowser();
        }



}
