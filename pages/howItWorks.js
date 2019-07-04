module.exports ={

    url: 'http://edubirdie.com.stageprod/howitworks',
    elements: {
        "mainTitle":{
            selector:
                '//title[contains(text(),"How it works: Order a Perfect Essay at EduBirdie")]',
            //'//div/span[contains(text(),"Writing Services")]',
            locateStrategy:'xpath'    //or i can use  "css selector"
        }
    }

}