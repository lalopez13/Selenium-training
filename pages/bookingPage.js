'use strict';

const { Key, until, By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

const FIRST_NAME = {
    id: 'firstname'
}
const LAST_NAME = {
    id: 'lastname'
}
const EMAIL = {
    id: 'email'
}
const EMAIL_CONFIRM = {
    id: 'email_confirm'
}
const GUEST_OPT = {
    id: 'notstayer_false'
}
const FULL_NAME = {
    css: '.guest-name-input'
}
const NEXT_BTN = {
    css: 'button[name="book"]'
}
const MODAL_CONT = {
    css: '.bui-overlay bui-overlay--active'
}
const MODAL = {
    id: 'retain-leaving-users__modal'
}
const MODAL_CHECKBOX = {
    css: '.bui-modal--active .bui-checkbox__label'
}
const MODAL_CLOSE = {
    css: '.bui-modal--active [data-bui-ref="modal-close"]:last-child'
}
const PHONE_FIELD = {
    id: 'phone'
}
const RESERVE_BTN = {
    xpath: '//*[@id="bookwrapper_cell"]//div[2]/button'
    //css : '.hprt-reservation-cta'
}



class BookingPage extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async handleModal() {
        await this.pollingWait(MODAL_CONT)
        //    await this.isDisplayed(MODAL)
        //    await this.click(MODAL_CHECKBOX)
        //    await this.click(MODAL_CLOSE)
    }
    async fillForm() {
        await this.sendKeys(FIRST_NAME, 'pepe')
        await this.sendKeys(LAST_NAME, 'PEREZ')
        await this.sendKeys(EMAIL, 'pepe@gmail.com')
        await this.sendKeys(EMAIL_CONFIRM, 'pepe@gmail.com')
        await this.sendKeys(FULL_NAME, 'pPEPE Pee')
        await this.click(NEXT_BTN)
        await this.sendKeys(PHONE_FIELD, 3136785689)
        await this.scrollToFindElement(RESERVE_BTN)
        return this.getText(RESERVE_BTN)
    }

}

module.exports = BookingPage;