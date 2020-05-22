describe('Season 1 test suite',function()
{
    it ('test case',function()
    {
        browser.get('https://microsoftprod.btsmomenta.com');

        expect(browser.getTitle()).toEqual('Momenta');
        
        browser.driver.manage().window().maximize();

        browser.ignoreSynchronization = true;

        element(by.id('userEmail')).sendKeys('m300@microsoft.com');
  
        element(by.id('password')).sendKeys('ABab12$');
  
        element(by.name('Login')).click().then(function() { browser.sleep(5000)});
  
        element(by.name('Select your industry')).element(by.css("option[value='fc9868e7db79063f9808']")).click().then(function() {browser.sleep(10000)});
  
        element(by.name('Continue')).click().then(function() { browser.sleep(20000)});
  
        element(by.id('mat-radio-2')).click();
  
        element(by.name('Continue to Next Activity')).click().then(function() {browser.sleep(5000)});

        //account code 
        element.all(by.className('plugin-single__text')).first().click().then(function() 
        {
            element(by.name('Continue to Next Activity')).click().then(function() {browser.sleep(5000)});
            browser.sleep(5000)
        });

        //radio button codes 
        element(by.id('mat-radio-16')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-21')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-31')).click().then(function() {browser.sleep(3000)}).then(function()
        { element(by.id('mat-radio-37')).click().then(function() {browser.sleep(3000)});});
        element(by.id('mat-radio-37')).click().then(function() {browser.sleep(3000)});
        element(by.id('mat-radio-41')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-46')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-51')).click().then(function() {browser.sleep(2000)});
        element(by.id('mat-radio-26')).click().then(function() 
        {
            element(by.name('Continue to Next Activity')).click().then(function() { browser.sleep(5000)});
            browser.sleep(10000);
        });

        // thank you screen  
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });


        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });


        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });


        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });


        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });


        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
        
        // from here we have to write isomer S1R1 code 
        element(by.className('plugin-simlaunch-btn')).click().then(function(){browser.sleep(20000)});
        browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(20000)});
        //descision summary 
        element(by.id('summaryBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Summary"][contains(.,"Close Summary")])[1]')).click().then(function(){browser.sleep(20000)});
        //Org Chart
        element(by.id('orgChartBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Org Chart"])[1]')).click();
        //Case Study
        element(by.id('caseStudyBtnText')).click().then(function(){
            browser.sleep(10000);
            browser.getAllWindowHandles().then(function (handles) {
                   browser.driver.switchTo().window(handles[1]);
                   browser.driver.close();
                   browser.driver.switchTo().window(handles[0]);
                   browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
                   browser.sleep(10000)});
        //Instructions
        element(by.xpath('//*[contains(text(),"Instructions")]')).click().then(function(){browser.sleep(5000)});
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(10000)});
        //Get Support
        //element(by.id('supportBtnText')).click().then(function(){
        //browser.sleep(20000);
        console.log("Completed with Isomer Menu");

        element(by.xpath('//div[@class="submit-btn__text"][contains(.,"Submit")]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//span[contains(.,"Continue")])[2]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//span[contains(.,"Negotiate favorable pricing agreements with new and existing midstream operators")]')).click();
        element(by.xpath('//span[contains(.,"Leverage AI analysis to hedge oil sales through trading desk")]')).click();
        element(by.xpath('(//span[contains(.,"Use real-time dashboards to manage the existing business")])[2]')).click();
        element(by.xpath('(//span[contains(.,"Improve awareness and compliance  for proper use of safety gear (training/awareness)")])[2]')).click();
        element(by.xpath('(//span[contains(.,"Implement AI analysis to identify future risk factors")])[2]')).click();

        element(by.xpath('//div[@class="submit-btn__text"][contains(.,"Submit")]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();

        element(by.xpath('//span[contains(@id,"radioText0")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();

        element(by.xpath('//span[contains(@id,"radioText1")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();

        element(by.xpath('//span[@id="radioText0"]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(6000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(20000)});


        // out from isomer frame 
       
        //Simulation : Round 1 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Simulation : dibrief Round 1 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //{Make It Real: Customer research}
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //{Make It Real: Customer research}
        element(by.xpath('//*[@id="cust_res_input1"]')).sendKeys('hi i am testing this app').then(function(){browser.sleep(5000)});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
        //{Make it real : Customer research}
        element(by.xpath('//*[@id="cust_res_input2"]')).sendKeys('hi i am testing this app').then(function(){browser.sleep(5000)});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //{Make it real : Customer research}
        element(by.xpath('//*[@id="cust_res_input3"]')).sendKeys('hi i am testing this app').then(function(){browser.sleep(5000)});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
        //result page 1 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
        // result page 2 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        // Industry Expert: Top of mind for executives
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Simulation: Introduction to round 2
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //from here we have to write code for isomer round 2 
        element(by.className('plugin-simlaunch-btn')).click().then(function(){browser.sleep(20000)});
        browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
        //element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(20000)});
        //descision summary 
        element(by.id('summaryBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Summary"][contains(.,"Close Summary")])[1]')).click().then(function(){browser.sleep(20000)});
        //Org Chart
        element(by.id('orgChartBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Org Chart"])[1]')).click();
        //Case Study
        element(by.id('caseStudyBtnText')).click().then(function(){
            browser.sleep(10000);
            browser.getAllWindowHandles().then(function (handles) {
                   browser.driver.switchTo().window(handles[1]);
                   browser.driver.close();
                   browser.driver.switchTo().window(handles[0]);
                   browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
                   browser.sleep(10000)});
        //Instructions
        element(by.xpath('//*[contains(text(),"Instructions")]')).click().then(function(){browser.sleep(5000)});
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(10000)});
        //Get Support
        //element(by.id('supportBtnText')).click().then(function(){
        //browser.sleep(20000);
        console.log("Completed with Isomer Menu");
        element(by.xpath('(//span[contains(.,"Shift in Supply and Demand")])[2]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('(//span[contains(.,"Price Volatility and Operational Inefficiency")])[2]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//label[@class="col-layout"][contains(.,"Shift in supply and demand")]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('(//span[contains(.,"Price volatility and operational inefficiency")])[2]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//span[contains(@id,"radioText0")]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//span[@id="radioText0"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//b[contains(.,"Include in Digital Roadmap Next Year:")]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(20000)});
      

        // out from isomer frame 
        
        //this will print dibrief round 2 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.xpath('//*[@id="ind_res_input1"]')).sendKeys('This is again testing app');
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.xpath('//*[@id="ind_res_input2"]')).sendKeys('This is again testing app');
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.xpath('//*[@id="ind_res_input3"]')).sendKeys('This is again testing app');
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(10000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
        
        //video Episode 2
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //inside the episode 2
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Industry Expert: Stories of digital transformation

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Simulation: Introduction to round 3 

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        element(by.className('plugin-simlaunch-btn')).click().then(function(){browser.sleep(20000)});
        browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
        //element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(20000)});
        //descision summary 
        element(by.id('summaryBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Summary"][contains(.,"Close Summary")])[1]')).click().then(function(){browser.sleep(20000)});
        //Org Chart
        element(by.id('orgChartBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Org Chart"])[1]')).click();
        //Case Study
        element(by.id('caseStudyBtnText')).click().then(function(){
            browser.sleep(10000);
            browser.getAllWindowHandles().then(function (handles) {
                   browser.driver.switchTo().window(handles[1]);
                   browser.driver.close();
                   browser.driver.switchTo().window(handles[0]);
                   browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
                   browser.sleep(10000)});
        //Instructions
        element(by.xpath('//*[contains(text(),"Instructions")]')).click().then(function(){browser.sleep(5000)});
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(10000)});
        //Get Support
        //element(by.id('supportBtnText')).click().then(function(){
        //browser.sleep(20000);

        element(by.xpath('//label[@class="col-layout"][contains(.,"Catastrophe mitigation")]')).click();
        element(by.xpath('//label[@id="checkboxText01"]')).click();
        element(by.xpath('//label[@id="checkboxText02"]')).click();
        element(by.xpath('//label[@id="checkboxText03"]')).click();
        element(by.xpath('//label[@id="checkboxText04"]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//label[@id="checkboxText00"]')).click();
        element(by.xpath('//label[@id="checkboxText01"]')).click();
        element(by.xpath('//label[@id="checkboxText02"]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//span[@id="radioText0"]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//label[contains(@for,"col-0-column")]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//span[@id="radioText0"]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){
        	browser.sleep(20000);
        	console.log("Completed with Isomer Menu");
        	});


        // out from isomer frame 
        
        //Simulation: Debrief round 3
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
        
      //Make It Real: Customer objectives
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(30000);
                    element(by.id('cust_obj_input1')).click().sendKeys("Business Value1").then(function(){browser.sleep(5000)});
                    element(by.id('cust_obj_input2')).click().sendKeys("Business Value2").then(function(){browser.sleep(5000)});
                    element(by.id('cust_obj_input3')).click().sendKeys("Business Value3").then(function(){browser.sleep(5000)});
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        
      //Make It Real: Customer objectives - Continued
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(30000);
                    element(by.id('cust_obj_input4')).click().sendKeys("Business Value4").then(function(){browser.sleep(5000)});
                    element(by.id('cust_obj_input5')).click().sendKeys("Business Value5").then(function(){browser.sleep(5000)});
                    element(by.id('cust_obj_input6')).click().sendKeys("Business Value6").then(function(){browser.sleep(5000)});
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });

      //Make It Real: Customer objectives - Continued
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(30000);
                    element(by.id('cust_obj_input7')).click().sendKeys("Business Value7").then(function(){browser.sleep(5000)});
                    element(by.id('cust_obj_input8')).click().sendKeys("Business Value8").then(function(){browser.sleep(5000)});
                    element(by.id('cust_obj_input9')).click().sendKeys("Business Value9").then(function(){browser.sleep(5000)});
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(30000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
                
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
                
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
                
        //Episode 3
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        
        
        //Inside the Episode 3
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        //Start of new script from R4
        //Simulation: Introduction to round 4
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });

        //from here we have to write isomer code 
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        element(by.className('plugin-simlaunch-btn')).click().then(function(){browser.sleep(20000)});
        browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
        //element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(20000)});
        //descision summary 
        element(by.id('summaryBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Summary"][contains(.,"Close Summary")])[1]')).click().then(function(){browser.sleep(20000)});
        //Org Chart
        element(by.id('orgChartBtnText')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('(//isma-text-output[@key="Close Org Chart"])[1]')).click();
        //Case Study
        element(by.id('caseStudyBtnText')).click().then(function(){
            browser.sleep(10000);
            browser.getAllWindowHandles().then(function (handles) {
                   browser.driver.switchTo().window(handles[1]);
                   browser.driver.close();
                   browser.driver.switchTo().window(handles[0]);
                   browser.switchTo().frame(element(By.xpath("//object[@class='isomer-object']")).getWebElement());
                   browser.sleep(10000)});
        //Instructions
        element(by.xpath('//*[contains(text(),"Instructions")]')).click().then(function(){browser.sleep(5000)});
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(10000)});
        //Get Support
        //element(by.id('supportBtnText')).click().then(function(){
        //browser.sleep(20000);
        
        element(by.xpath('//span[@id="radioText0"]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//span[@id="radioText0"]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//span[@id="radioText0"]')).click();

        element(by.xpath('//*[contains(text(),"Submit")]')).click().then(function(){browser.sleep(5000)});

        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){
        	
        	browser.sleep(20000);
        	console.log("Completed with Isomer Menu");
        	});
        
        // out from isomer frame 
        
      //Simulation: Debrief round 4
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(20000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

      //Make It Real: Prepare an insight
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(20000);
          element(by.id('prep_insight4')).sendKeys("Business Value10").then(function(){browser.sleep(5000)});
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
        
        //Make It Real: Prepare an insight-Continued
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(15000);
                    element(by.name("Enter your comment")).sendKeys("Business Value11").then(function(){browser.sleep(5000)});
                    element(by.name("Comment")).click().then(function(){browser.sleep(5000)});
                    element(by.name('load-more')).click().then(function(){browser.sleep(5000)});
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });

      //Inside the Season
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);

                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        
        
      //Closing Words
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });

        
        //End of Season
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
            browser.sleep(10000);
        	console.log("End of Season 1");
        	});



        });
    });
});
});
});
});