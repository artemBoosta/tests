module.exports={

    selector: 'header',
    elements: {
        essayWritingHelpDropDown: {
            selector: ".//div[contains(text(), 'Essay Writing Help')]",
            locateStrategy: 'xpath'
        },
        allServicesDropDown: {
            selector: ".//div[contains(text(), 'All Services')]",
            locateStrategy: 'xpath'
        },
        othersDropDown: {
            selector: ".//div[contains(text(), 'Others')]",
            locateStrategy: 'xpath'
        },

        writingServicesDropDown: {
            selector: ".//span[text()[contains(., 'Writing Services')]]",
            locateStrategy: 'xpath'
        },

        editingDropDown: {
            selector: ".//span[text()[contains(., 'Editing')]]",
            locateStrategy: 'xpath'
        },

        whatIsEdubirdie: {
            selector: ".//span[text()[contains(., 'What Is Edubirdie')]]",
            locateStrategy: 'xpath'
        },
        aboutUs:{
            selector: '//span[text()[contains(., "About Us")]]',
            locateStrategy:'xpath'
        }

    }


}