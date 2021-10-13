'use strict';

const { Key, until, By } = require('selenium-webdriver');
const BasePage = require('./BasePage');

const CURRENCY_BTN = {
    css: '.bui-group > :nth-child(1) > .bui-button'
};
const CURRENCY_OPTION = {
    css: 'ul> li> a[data-modal-header-async-url-param="changed_currency=1;selected_currency=COP"]'
};
const LANGUAGE_OPTION = {
    css: '[data-modal-id="language-selection"]'
};
const SPANISH_LANG_OPTION = {
    css: '[data-lang="es"]:first-child'
};
const DESTINATION_FIELD = {
    id: 'ss'
};
const LIST_OPTION = {
    css: 'ul[role="listbox"]'
}
const FIRST_OPTION = {
    css: '[data-label="Cartagena de Indias, Bolívar, Colombia"]'
}
const CALENDAR = {
    css: '.bui-calendar'
}
const NEXT_ARROW = {
    css: '.bui-calendar__control--next'
}
const GUEST_OPTION = {
    css: 'div.xp__guests'
}
const GUEST_CONTENT = {
    id: 'xp__guests__inputs-container'
}
const ADD_BTN = {
    css: '.sb-group__field-adults  button.bui-stepper__add-button'
}
const ADULTS_COUNT = {
    css: 'span[data-adults-count]'
}
const SUBMIT_BTN = {
    css: '.sb-searchbox__button'
}

class HomePage extends BasePage {
    constructor(driver) {
        super(driver);
    }
    async load() {
        await this.visit();
    }
    async configLanguageAndCurrency() {
        await this.click(CURRENCY_BTN);
        await this.scrollToFindElement(CURRENCY_OPTION)
        await this.driver.wait(until.elementLocated(CURRENCY_OPTION))
        await this.click(CURRENCY_OPTION);
        await this.click(LANGUAGE_OPTION);
        await this.click(SPANISH_LANG_OPTION);
    }

    async selectDestination(city) {
        await this.sendKeys(DESTINATION_FIELD, city);
        await this.driver.wait(until.elementLocated(LIST_OPTION))
        await this.driver.wait(until.elementLocated(FIRST_OPTION))
        await this.click(FIRST_OPTION)
        return this.getInputText(DESTINATION_FIELD)
    }

    async selectTravelDate(checkin, checkout) {
        let calendar = await this.isDisplayed(CALENDAR);

        if (calendar) {
            await this.click(NEXT_ARROW)
            await this.click(NEXT_ARROW)
            await this.selectDay(checkin);
            await this.click(NEXT_ARROW)
            await this.selectDay(checkout);
        }
    }
    async selectGuest() {
        await this.click(GUEST_OPTION);
        let optionContainer = await this.isDisplayed(GUEST_CONTENT);
        if (optionContainer) {
            await this.click(ADD_BTN)
        }
        await this.click(GUEST_OPTION);
        return this.getText(ADULTS_COUNT)
    }
    async submitPreferences() {
        await this.click(SUBMIT_BTN);
    }

}

module.exports = HomePage;