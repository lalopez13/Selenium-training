'use strict';
const { webdriver, Builder } = require('selenium-webdriver');

require('chromedriver');
require('geckodriver');

class DriverFactory {
  constructor(config) {
    this.config = config;
  }

  async setUp() {
   
    // run test locally 
    // eslint-disable-next-line max-len
    this.driver = await new Builder().forBrowser(this.config.baseBrowser).build();
   
    // run test grid 
    // this.driver = await new webdriver.Builder()
    //   .usingServer(this.config.selenium.baseGridUrl)
    //   .withCapabilities(this.config.selenium.capabilities)
    //   .build();
  }

  // async tearDown() {
  //   await this.driver.quit();
  // }
}

module.exports = DriverFactory;
