'use strict';

const { Key, until, By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

const FILTER_PRICE_BTN = {
    css: 'ul[role="menubar"] [data-id="price"]'
};
const LOADING_MODAL = {
    css: '.sr-usp-overlay__container'
};

const CARD_PRICE = {
    xpath: '//span[contains(text(),"COP")]'
}
const GET_CARD = {
    xpath: '//*[@id="hotellist_inner"]/div[5]/div[2]/div[1]/div[1]/div[1]'
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

    async getPriceHotel(element){
        // let eles = await this.getPriceCard(element)
        // let ele = await this.scrollToFindElement(eles)
        //await this.isDisplayed(LOADING_MODAL)
       await this.waitForIsDisplayed(CARD_PRICE,10000)
      let text = await this.getText(CARD_PRICE)
      //console.log(this.getText(CARD_PRICE))
    return text
    }
async selectHotel(){
    //await this.waitForIsDisplayed(GET_CARD,10000)
    //await this.scrollToFindElement(GET_CARD)
    //await this.waitForIsDisplayed(GET_CARD,10000)
    await this.click(GET_CARD)
    await this.changeWindow()
}
    

}

module.exports = ResultsPage;