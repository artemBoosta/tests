

module.exports={



    before:(browser)=>{
        browser.maximizeWindow();
    },
    after:(browser)=>{
       browser.end()
    },


    'About Us':(browser)=>{


        let mainPage=browser.page.main(),
        links={
            "How It Works": 'howitworks',
            "Our Team":'our-team',
            "TOP Writers":'top-writers',
            "Plagiarism Checker":'plagiarism-checker',
            "Testimonials":'testimonials',
            "FAQ":'faq',
            "Blog":'blog',
            "Contacts":'contactus',
            "Support":'write-to-support',
            "Referral Program":'referral-program'

        };

        mainPage.header=mainPage.section.header;


        Object.keys(links).forEach((link)=>{

            let linkSelector= `//a[contains(text(), "${link}")]`

            mainPage
                .navigate();
            mainPage.header
                .waitForElementVisible('@aboutUs',2000)
                .moveToElement('@aboutUs',0,0)
                .api.pause(2000)
                .useXpath()
                .click(linkSelector)
                .verify.urlEquals('http://edubirdie.com.stageprod/'+links[link]);
        })
    }
}