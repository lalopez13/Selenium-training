'use strict';

const { Key, until, By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

const FILTER_PRICE_BTN = {
    css: 'ul[role="menubar"] [data-id="price"]'
};
const DROPDOWN = {
    //xpath : '//*[@id="ajaxsrwrap"]/div[3]/div/div/div[2]/ul/li[11]/a'
    //css: '[data-id="dropdown"]'
css : 'ul[role="menubar"] li:nth-child(11)'
    
}
const FILTER_BEACH = {
    css : 'ul[role="menu"] > li[data-id="closest_beach_distance_v2"]'
}
const SPAN_BEACH = {
    css : '//*[@id="hotellist_inner"]/div[1]/div[2]/div[1]/div[1]/div[3]'
   // xpath : '//span[contains(text(),"playa")]'
}
const LOADING_MODAL = {
    css: '.sr-usp-overlay__container'
};

const CARD_PRICE = {
    xpath: '//span[contains(text(),"COP")]'
}
const GET_CARD = {
    xpath: '//*[@id="ajaxsrwrap"]//div[4]/div[3]//div/h3'
    //xpath: '//*[@id="ajaxsrwrap"]/div//div//div[2]//div/h3'
    //xpath : '//*[@id="ajaxsrwrap"]/div/div[1]//div[4]/div[2]//div/h3'
    //css : '[data-block-id="hotel_list"] div[data-testid="property-card"]:nth-child(5) [data-testid="title"]'
    //xpath: '//*[@id="hotellist_inner"]/div[5]/div[2]/div[1]/div[1]/div[1]'
}
// //span[contains(text(),'COP')]

class ResultsPage extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async filterByLowerPrice() {
        await this.click(FILTER_PRICE_BTN);
        //await this.waitInvisibility(LOADING_MODAL)
    }
async filterByNearestToBeach(){
        await this.waitAndClick(DROPDOWN)
await this.click(FILTER_BEACH)
}
async getBeachText(){
    return this.getText(SPAN_BEACH);
}
    async getPriceHotel(element) {
        // let eles = await this.getPriceCard(element)
        // let ele = await this.scrollToFindElement(eles)
        //await this.isDisplayed(LOADING_MODAL)
        //await this.waitForIsDisplayed(CARD_PRICE,10000)
        let text = await this.getText(CARD_PRICE)
        //console.log(this.getText(CARD_PRICE))
        return text
    }
    async selectHotel(option) {
        //await this.waitForIsDisplayed(GET_CARD,10000)
        //await this.scrollToFindElement(GET_CARD)
        //await this.waitForIsDisplayed(GET_CARD,10000)
        await this.waitAndClick(By.xpath('//*[@id="ajaxsrwrap"]//div[4]/div[4]//div/h3'))
       // await this.selectHotel(option)
        await this.changeWindow()
    }


}

module.exports = ResultsPage;