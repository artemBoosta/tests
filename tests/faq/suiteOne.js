module.exports={

    before:(browser)=>{
        browser.maximizeWindow();
        browser.page.faq().navigate().waitForElementVisible('@hiw',3000).click('@hiw')


    },
    after:(browser)=>{

       browser.end()
    },

    'test one': async(browser)=> {

        let faq= browser.page.faq();

        let highlites = [

            'How does it work?', 'Why choose EduBirdie?', 'Who will write my papers?',
            'How do I place an order?', 'How is my essay price determined?'
           , 'What if the delivered paper',
            'Can I be guaranteed that my paper is 100% original?',
            'Is my personal information and payment data safe?'

        ];


        try {
            await faq.api.useXpath().assert.cssClassNotPresent
            (`//span[contains(text(),"How does it work?")]/ancestor::h2`, 'uk-active');


            highlites.forEach((i) => {
                faq.api.useXpath().click(`//span[contains(text(), "${i}")]/ancestor::h2`).pause(1000);


                faq.api.useXpath().assert.cssClassPresent
                (`//span[contains(text(),"${i}")]/ancestor::h2`, 'uk-active');

                faq.api.useXpath().click(`//h2/span[contains(text(), "${i}")]`).pause(1000);


                faq.api.useXpath().assert.cssClassPresent(
                    `//span[contains(text(), "${i}")]/ancestor::h2`,'uk-accordion-title');
            })


            /*


                        for (let i=0;i<highlites.length; i++) {


                            //click to open 0 element



                            faq.api.useXpath().click(`//span[contains(text(), "${highlites[i]}")]/ancestor::h2`).pause(1000);




                            //add a pause  unfortunatle not working



                            //faq.api.useCss().waitForElementVisible('.uk-accordion-content',3000);


                            //check visible




                            faq.api.useXpath().assert.cssClassPresent
                            (`//span[contains(text(),"${highlites[i]}")]/ancestor::h2`,'uk-active');






                             //click to hide an element




                            faq.api.useXpath().click(`//h2/span[contains(text(), "${highlites[i]}")]`).pause(1000);

                            //add a pause

                          //  faq.api.useCss().waitForElementNotVisible('.uk-accordion-content',4000);


                            //check invisible



                            faq.api.useXpath().assert.cssClassPresent(
                                    `//span[contains(text(), "${highlites[i]}")]/ancestor::h2`,'uk-accordion-title');



}
            */





        } catch(e){
            console.log(e)
        }


    }


}