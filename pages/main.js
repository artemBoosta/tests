module.exports ={

    url: 'http://edubirdie.com.stageprod',


    elements: {
        "mainTitle":{
            selector:
                '/html/body/div[1]/header/div[2]/div/div[2]/div[4]/div[1]',
            locateStrategy:'xpath'
         },
        "aboutUs":{
            selector:'//a[contains(text(),`${text}`)]',
            locateStrategy:' xpath'
        },


        "howItWorks":{
            selector:'//a[contains(text(),"How It Works")]',
            locateStrategy:'xpath'
        },
        "ourTeam":{
          selector:'//a[contains(text(),"Our Team")'  ,
            locateStrategy:'xpath'
        }, "topWriters":{
            selector:'//a[contains(text(),"TOP Writers")'  ,
            locateStrategy:'xpath'
        },
        "plagiarismChecker":{
            selector:'//a[contains(text(),"Plagiarism Checker")'  ,
            locateStrategy:'xpath'
        },
        "testimonials":{
            selector:'//a[contains(text(),"Testimonials")'  ,
            locateStrategy:'xpath'
        },
        "faq":{
            selector:'//a[contains(text(),"FAQ")'  ,
            locateStrategy:'xpath'
        },
        "blog":{
            selector:'//a[contains(text(),"Our Team")'  ,
            locateStrategy:'xpath'
        },
        "contacts":{
            selector:'//a[contains(text(),"Contacts")'  ,
            locateStrategy:'xpath'
        },
        "support":{
            selector:'//a[contains(text(),"Support")'  ,
            locateStrategy:'xpath'
        },
        "referralProgram":{
            selector:'//a[contains(text(),"Referral Program")'  ,
            locateStrategy:'xpath'
        },
        "preOfButton":{
            selector:'//button[contains(text(), "Proceed")]',
            locateStrategy:'xpath'
        }
    }

}


