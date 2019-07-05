module.exports={

    url:'http://edubirdie.com.stageprod/faq',
    /*commands:{
        navigate:'http://edubirdie.com.stageprod/faq'
    }
    ,*/

    elements:{

        "hiw": {
         selector:   "//h2/span[contains(text(), 'How does it work')]",
           locateStrategy:'xpath'

        },
        "accordion":{
            selector: "//div[@data-wrapper]",
            locateStrategy: 'xpath'
        } ,

        "h2active":{
            selector: "//h2[@class='uk-accordion-title uk-active']",
            locateStrategy:'xpath'
        },
        "h2NotActive": {
            selector:"//h2[@class='uk-accordion-title']",
            locateStrategy:'xpath'
        }

    }


}