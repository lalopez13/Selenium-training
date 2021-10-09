'use strict';

const { Until, By, WebDriver } = require('selenium-webdriver');
const config = require('../lib/config');

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async visit(url) {
    await this.driver.get(config.baseUrl + url);
    await this.driver.manage().window().maximize();
  }

  findElement(locator) {
    return this.driver.findElement(locator);
  }

  findElements(locator) {
    return this.driver.findElements(locator);
  }

  async click(locator) {
    await this.findElement(locator).click();
  }

  async sendKeys(locator, inputText) {
    await this.findElement(locator).sendKeys(inputText);
  }

  async isDisplayed(locator) {
    return this.findElement(locator).isDisplayed();
  }
  async getText(locator) {
    return this.findElement(locator).getText();
  }
  async waitForIsDisplayed(locator, timeout) {  
    let condition = WebDriver.Until.elementIsVisible(By.className(locator));
    return this.driver.wait(condition, timeout);
  }
}

module.exports = BasePage;