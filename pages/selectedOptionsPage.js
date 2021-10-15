'use strict';

const { Key, until, By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

const RESERVE_BTN = {
    //id : 'hp_book_now_button'
    //css: '.txp-group-cta'
    xpath: '//*[@id="group_recommendation"]//tr[2]//a'
};
const CONFIRMATION_BTN = {
    css: '.txp-bui-main-pp'
};



class SelectedOptionsPage extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async getReservation() {
        await this.waitAndClick(RESERVE_BTN);
        await this.isDisplayed(CONFIRMATION_BTN)
        await this.waitInvisibility(CONFIRMATION_BTN)
        await this.waitAndClick(CONFIRMATION_BTN);
    }


}

module.exports = SelectedOptionsPage;