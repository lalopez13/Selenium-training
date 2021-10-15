'use strict';

const { Until, By, WebDriver, until } = require('selenium-webdriver');
const config = require('../lib/config');
const futureDate = require('../utils/utils')

class BasePage {
  constructor(driver) {
    this.driver = driver;
  }

  async visit() {
    await this.driver.get(config.baseUrl);
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
  async hover(locator) {
    let actions = this.driver.actions({
      async: true
    });
    await actions({ bridge: true }).move({
      origin: locator
    }).perform();
  }
  async rightClick(locator) {
    let actions = this.driver.actions();
    let element = await this.findElement(locator);
    await actions.contextClick(element).perform();
  }
  async waitForIsDisplayed(locator, timeout) {
    let condition = this.driver.until.elementIsVisible(locator);
    return this.driver.wait(condition, timeout);
  }
  async pollingWait(locator) {
    await this.driver.wait(until.elementIsVisible(locator), 30000, 'time out aftrer 30 seconds', 5000)
  }
  async scrollToFindElement(locator) {
    let element = await this.findElement(locator);
    //await this.driver.executeScript("window.scrollBy(0,1000)")
    await this.driver.executeScript("arguments[0].scrollIntoView(true);", element)

  }

  async getInputText(locator) {
    return this.findElement(locator).getAttribute('value');
  }

  async waitAndClick(locator) {
    let element = this.findElement(async () => {
      await this.driver.wait(until.elementLocated(locator))
      return this.findElement(locator)
    })
    await element.click();
  }

  async selectDay(day) {
    await this.findElement(By.css(`[data-date="${futureDate(day)}"]`)).click()
  }

  async selectHotel(option) {
    let card = option + 1
    // if (this.isDisplayed(this.findElement(By.id("hotellist_inner")))) {
    //   console.log('hotel')
    //   let card = option > 3 ? option + 1 : option;
    //   await this.findElement(By.xpath(`//*[@id="hotellist_inner"]/div[${card}]/div[2]/div[1]/div[1]/div[1]/h3`)).click()
    // } else {
    //    console.log('otro')
    await this.findElement(By.xpath(`//*[@id="ajaxsrwrap"]/div/div[1]//div[4]/div[${card}]//div/h3`)).click()
    //}
  }

  async waitInvisibility(locator) {
    await this.driver.wait(until.elementLocated(locator));
  }
  async getPriceCard(card) {
    return this.findElement(By.xpath(`//div[1]/div/div/div/div[4]/div[${card}]//span[contains(text(),'COP')]`))
  }

  async changeWindow() {
    let windows = await this.driver.getAllWindowHandles();

    await this.driver.switchTo().window(windows[1]);

  }

  async switchToFrame(locator) {
    await this.driver.switchTo().frame(locator)
  }

}

module.exports = BasePage;