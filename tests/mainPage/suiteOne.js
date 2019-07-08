

module.exports={



    before:(browser)=>{
        browser.maximizeWindow();
    },
    after:(browser)=>{
        console.log('Test is performed -)')
       browser.end()
    },

    test1:async (browser)=>{


        let mainPage=browser.page.main();
        let hwtPage=browser.page.main();
        let links=
            [
                "How It Works","Our Team", "TOP Writers", "Plagiarism Checker","Testimonials", "FAQ", "Blog", "Contacts","Support", "Referral Program"
            ];
           //  var temp='';
        let pageUrl =
            [
                'howitworks', 'our-team','top-writers','plagiarism-checker', 'testimonials','faq','blog', 'contactus', 'write-to-support', 'referral-program'
            ]

        //i need to get access to an array of selectors from main page
        // let mainMenu = require('./pages/main.js');


        //mainPage.navigate().expect.element('@mainTitle').to.be.visible.before(5000);
      try{


          await mainPage.navigate().moveToElement('@mainTitle',10,10, function(){



            for (let i=0;i<links.length;i++) {
             //   mainPage.click(`@aboutUs${links[i]}`);
                //here I need put a variable which contains an array of selectors


                mainPage.api.useXpath().click(`//a[contains(text(),"${links[i]}")]`);

                browser.assert.urlContains(`${pageUrl[i]}`);

                mainPage.api.back().pause(1000)

                mainPage.navigate().moveToElement('@mainTitle',10,10)

                /*browser.url(function(result){
                    temp = result;
                })*/




            }

         })


        await hwtPage.expect.element('@mainTitle').to.be.visible.before(2000);


         // await mainPage.navigate().moveToElement('@howItWorks',10,10)
      } catch(e){
          console.log(e)

        }


    }
}