// this source code is from debrief r1 upto r2 isomer end 
describe('Season 1 test suite',function()
{
    it ('test case',function()
    {
        browser.get('https://microsoftprod.btsmomenta.com');

        expect(browser.getTitle()).toEqual('Momenta');
        
        browser.driver.manage().window().maximize();

        browser.ignoreSynchronization = true;

        element(by.id('userEmail')).sendKeys('m2@microsoft.com');
  
        element(by.id('password')).sendKeys('ABab12$');
  
        element(by.name('Login')).click().then(function() { browser.sleep(5000)});
  
        element(by.name('Select your industry')).sendKeys('Energy').then(function() { browser.sleep(3000)});

        element(by.name('Select')).sendKeys('Oil').then(function() { browser.sleep(3000)});
  
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

        //back button code 
        element(by.xpath('//i[contains(@class,"pv-icon pv-icon-left-arrow plugin-back")]')).click().then(function(){browser.sleep(10000)});
        element(by.xpath('(//span[contains(@class,"plugin-common__btn-start__text")])[31]')).click().then(function(){browser.sleep(20000)});

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        // go to the next season code 
        element(by.xpath('//*[contains(text(),"Go to Next Season")]')).click().then(function(){browser.sleep(10000)});

        //Engage Executive Decision Makers Episode 1
        console.log('season 2 starts');
        element(by.xpath('(//span[contains(@class,"plugin-common__btn-start__text")])[1]')).click().then(function(){browser.sleep(20000)});
        //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
        {console.log(text);});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {browser.sleep(30000);});
     

   
     //Engage Executive Decision Makers 
     //Inside the Episode 1
        element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text)
        {
             
        console.log(text);});
        //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        element(by.className('plugin-common__btn-continue__text')).click().then(function() { 
        browser.sleep(20000);});


    



    //Engage Executive Decision Makers Industry Expert: Buy cycles and influencers
        element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text)
        {console.log(text);});
        //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        element(by.className('plugin-common__btn-continue__text')).click().then(function() {
        browser.sleep(20000);});

    




    
 //Engage Executive Decision Makers Simulation: Introduction to round 1
        element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text)
        {
             
        console.log(text);});
        //browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        element(by.className('plugin-common__btn-continue__text')).click().then(function() { 
        browser.sleep(20000);});

    



 //isomer Simulation starts
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
         console.log("Completed with Isomer Menu");
         element(by.id('buttonText')).click().then(function(){browser.sleep(10000)});



 //Building relationships
       element(by.className('email-direction')).getText().then(function(text)
        {
             
       console.log(text);});
       element(by.id('radioText0')).click().then(function(){
        
       browser.sleep(1000);});
       element(by.className('submit-btn__text')).click();
       browser.sleep(10000);


 //Feedback page1
       element(by.id('buttonText')).click().then(function(){
       browser.sleep(1000);});



 //Motivating for action
      element(by.className('email-direction')).getText().then(function(text)
      {console.log(text);});
      element(by.id('hintBtn')).click();
      browser.sleep(2000);
      element(by.className('pull-right')).click();
      console.log('Hint button Working Fine');
      browser.sleep(2000);
      element(by.id('radioText0')).click();
      browser.sleep(2000);
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});



 //Feedback page2
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});

   

 //Cost of service
      element(by.className('email-direction')).getText().then(function(text)
      {console.log(text);});
      browser.sleep(2000);
      element(by.id('radioText0')).click();
      browser.sleep(2000);
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});



    
 //Feedback page3
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});

    


 //Predictive maintenance
      element(by.className('email-direction')).getText().then(function(text)
      {console.log(text);});
      browser.sleep(2000);
      element(by.id('radioText0')).click();
      browser.sleep(2000);
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});


 //Feedback page4
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});


 //Remote resolution
      element(by.className('email-direction')).getText().then(function(text)
      {console.log(text);});
      browser.sleep(2000);
      element(by.id('radioText0')).click();
      browser.sleep(2000);
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});


 //Feedback page5
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});

 //Cost of Inaction Page
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});

  //Cost of inaction multiselect
      element(by.id('checkbox00')).click().then(function(){browser.sleep(5000)});
      element(by.id('checkbox01')).click().then(function(){browser.sleep(5000)});
      element(by.id('checkbox02')).click().then(function(){browser.sleep(5000)});
      element(by.id('checkbox03')).click().then(function(){browser.sleep(5000)});
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});


 //Communicate cost of inaction
 console.log('Communicate cost of inaction');
      element(by.id('col-0-0')).click().then(function(){browser.sleep(5000)});
      element(by.id('col-0-1')).click().then(function(){browser.sleep(5000)});
      element(by.id('col-0-2')).click().then(function(){browser.sleep(5000)});
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});
      element(by.id('radioText0')).click().then(function(){browser.sleep(5000)});
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});
      element(by.id('buttonText')).click().then(function(){browser.sleep(5000)});
      element(by.id('radioText0')).click().then(function(){browser.sleep(5000)});
      element(by.className('submit-btn__text')).click().then(function(){browser.sleep(5000)});
      element(by.className('button-container rightSide')).click().then(function(){browser.sleep(20000)});

      element(by.name('Continue to Next Activity')).click().then(function() 
      {
          browser.sleep(30000);
          element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
          {
              console.log(text);
          });
      });

        //dibrief round 1 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Make It Real: Strengthening your insight
        element(by.id('prep_insight4')).sendKeys('Hi there this is testing text').then(function(){browser.sleep(5000)});
        
        element(by.id('mat-radio-64')).click().then(function(){
            browser.sleep(2000);
            element(by.id('mat-radio-67')).click().then(function(){
                element(by.id('mat-radio-67')).click()
                browser.sleep(2000);
                element(by.id('mat-radio-68')).click().then(function(){
                    browser.sleep(2000);
                    element(by.id('mat-radio-70')).click().then(function(){
                        browser.sleep(2000);
                        element(by.id('mat-radio-72')).click().then(function(){
                            browser.sleep(2000);
                            element(by.id('mat-radio-75')).click().then(function(){
                                element(by.id('mat-radio-75')).click()
                                browser.sleep(2000);
                                element(by.id('mat-radio-76')).click().then(function(){
                                    browser.sleep(2000);
                                    element(by.id('mat-radio-78')).click()
                                })
                            })
                        })
                    })
                })
            })
        })
        
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Make it real : cost of inaction 
        element(by.id('cost_of_inaction1')).sendKeys('testing text 1').then(function(){browser.sleep(1000)});
        element(by.id('cost_of_inaction2')).sendKeys('testing text 3').then(function(){browser.sleep(1000)});
        element(by.id('cost_of_inaction3')).sendKeys('testing text 3').then(function(){browser.sleep(1000)});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Make it real : cost of inaction 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //discussion board : cost of inaction 
        element(by.name('Enter your comment')).sendKeys('Hi there this is testing comment').then(function(){browser.sleep(1000)});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Episode 2 
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

        //Industry Expert: Key business decision makers and c-suite executives

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Simulation : introduction to round 2 

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //from here we have to write code for isomer s2r2
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
        console.log("Completed with Isomer Menu");

        //1st activity
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //2nd activity
        element(by.id('col-0-0')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-0-1')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-0-2')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-1-0')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-1-1')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-1-2')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-2-0')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-2-1')).click().then(function(){browser.sleep(1000)});
        element(by.id('col-2-2')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //3rd activity 
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //4th activity
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //5th activity
        element(by.id('checkbox01')).click().then(function(){browser.sleep(2000)});
        element(by.id('checkbox00')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(20000)});

        //debrief round 2 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Make It Real: Customer profiles
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(30000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        
      //Make It Real: Customer profiles Continued
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(20000);
                    element(by.xpath('(//select[@aria-label="Talker, mobilizer or blocker?"])[1]')).element(by.css("option[value='2']")).click().then(function() {browser.sleep(10000)});
                    element(by.xpath('(//select[@aria-label="Talker, mobilizer or blocker?"])[2]')).element(by.css("option[value='1']")).click().then(function() {browser.sleep(10000)});
                    element(by.xpath('(//select[@aria-label="Talker, mobilizer or blocker?"])[3]')).element(by.css("option[value='3']")).click().then(function() {browser.sleep(10000)});
                    browser.sleep(20000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        
       //Episode 3
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(30000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        
       //Inside the Episode 3
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
        
        //Simulation: Round 3
        element(by.name('Continue to Next Activity')).click().then(function() 
                {
                    browser.sleep(30000);
                    element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
                    {
                        console.log(text);
                    });
                });
        //Isomer S2R3 code 
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
        element(by.id('closeInstructionsButtonText')).click().then(function(){browser.sleep(10000);
        console.log("Completed with Isomer Menu");});
        //Get Support
        //element(by.id('supportBtnText')).click().then(function(){
        //browser.sleep(20000);
        
        //Decisions
        element(by.xpath('//*[contains(text(),"Continue")]')).click();
        
        element(by.xpath('//div[@class="submit-btn__text"][contains(.,"Submit")]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();
        
        element(by.xpath('//div[@class="submit-btn__text"][contains(.,"Submit")]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();
        
        element(by.xpath('//span[contains(@id,"radioText3")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();
        
        element(by.xpath('//span[contains(.,"Analyst reports on trends in the energy  industry")]')).click();
        element(by.xpath('//span[contains(.,"Get the latest compete strategy report for the energy industry")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();        
        
        element(by.xpath('//span[contains(@id,"radioText0")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click();
        
        element(by.xpath('//span[contains(@id,"radioText1")]')).click();
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(5000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(30000)});
         
        
        //Debrief R3
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


        //Make It Real: Powerful questions
        element(by.id('powerful_question1')).sendKeys('POWER 1').then(function(){browser.sleep(2000)});
        element(by.id('powerful_question2')).sendKeys('POWER 1').then(function(){browser.sleep(2000)});
        element(by.id('powerful_question3')).sendKeys('POWER 1').then(function(){browser.sleep(2000)});
        element(by.id('powerful_question4')).sendKeys('POWER 1').then(function(){browser.sleep(2000)});
        element(by.id('powerful_question5')).sendKeys('POWER 1').then(function(){browser.sleep(2000)});
        element(by.id('powerful_question6')).sendKeys('POWER 1').then(function(){browser.sleep(2000)});

        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Episode 4
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //inside the episode 4
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //introduction to round 4
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        // from here we have to write isomer code for season 2 round 4 
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
        console.log("Completed with Isomer Menu");

        //1st activity 
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //2nd activity
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //3rd activity 
        element(by.id('checkboxText00')).click().then(function(){browser.sleep(2000)});
        element(by.id('checkboxText01')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //4th activity 
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //5th activity
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //6th activity
        element(by.id('checkbox00')).click().then(function(){browser.sleep(2000)});
        element(by.id('checkbox01')).click().then(function(){browser.sleep(2000)});
        element(by.id('checkbox02')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //7th activity
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(5000)});

        //8th activity
        element(by.id('radioText0')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//div[@class="submit-btn__text"]')).click().then(function(){browser.sleep(2000)});
        element(by.xpath('//*[contains(text(),"Continue")]')).click().then(function(){browser.sleep(20000)});

        //
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //dibrief round 4
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //Make It Real: Emotional impact
        element(by.id('emoptional_impact1')).sendKeys('test1').then(function(){browser.sleep(2000)});
        element(by.id('emoptional_impact2')).sendKeys('test2').then(function(){browser.sleep(2000)});
        element(by.id('emoptional_impact3')).sendKeys('test3').then(function(){browser.sleep(2000)});
        element(by.id('emoptional_impact4')).sendKeys('test4').then(function(){browser.sleep(2000)});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //discussion board : emotional impact 
        element(by.name('Enter your comment')).sendKeys('hi there this is testing comment').then(function(){browser.sleep(3000)});
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //inside the season 
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });

        //closing words
        element(by.name('Continue to Next Activity')).click().then(function() 
        {
            browser.sleep(30000);
            element(by.className('plugin-activity-subtitle ng-star-inserted')).getText().then(function(text) 
            {
                console.log(text);
            });
        });
     });
    });
});
});
});
});