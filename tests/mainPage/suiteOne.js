

module.exports={



    before:(browser)=>{
        browser.maximizeWindow();
    },
    after:(browser)=>{
       browser.end()
    },

    test1: (browser)=>{


        let mainPage=browser.page.main();


        let links=
            [
                "How It Works","Our Team","TOP Writers","Plagiarism Checker","Testimonials","FAQ","Blog","Contacts","Support","Referral Program"
            ];

        let pageUrl =
            [
                'howitworks','our-team','top-writers','plagiarism-checker','testimonials','faq','blog', 'contactus','write-to-support','referral-program'
            ]





           mainPage
               .navigate()
               .moveToElement('@mainTitle',10,10, function(){



                        for (let i=0;i<links.length;i++) {



                            mainPage
                                .api
                                .useXpath()
                                .click(`//a[contains(text(),"${links[i]}")]`);

                            browser
                                .assert
                                .urlContains(`${pageUrl[i]}`);

                            mainPage
                                .api
                                .back()
                                .pause(1000)

                            mainPage
                                .navigate()
                                .moveToElement('@mainTitle',10,10)

            }

         })

    }
}