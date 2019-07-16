module.exports = {

    before: (browser) => {
        browser.maximizeWindow();
        browser
            .page
            .faq()
            .navigate()
            .waitForElementVisible('@hiw', 3000)
            .click('@hiw')


    },
    after: (browser) => {

        browser.end()
    },

    'test one': async (browser) => {

        let faqPage = browser.page.faq();

        let tabs = [

            'How does it work?', 'Why choose EduBirdie?', 'Who will write my papers?',
            'How do I place an order?', 'How is my essay price determined?'
            , 'What if the delivered paper',
            'Can I be guaranteed that my paper is 100% original?', 'Is my personal information and payment data safe?'

        ];


        faqPage.api
            .useXpath()
            .assert
            .cssClassNotPresent
            (`//span[contains(text(),"How does it work?")]/ancestor::h2`, 'uk-active');


        tabs.forEach((tab) => {

            let tabSelector = `//span[contains(text(), "${tab}")]/ancestor::h2`;


            faqPage
                .api
                .useXpath()
                .click(tabSelector).pause(100)
                .verify.cssClassPresent(tabSelector,'uk-active')
                .click(tabSelector).pause(100)
                .verify.cssClassNotPresent(tabSelector,'uk-active')


        })


    }


}