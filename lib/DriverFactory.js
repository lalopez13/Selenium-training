'use strict';
const { webdriver, Builder } = require('selenium-webdriver');

require('chromedriver');


class DriverFactory {
  constructor(config) {
    this.config = config;
  }

  async setUp() {
   
    // run test locally 
    // eslint-disable-next-line max-len
    this.driver = await new Builder().forBrowser(this.config.baseBrowser).build();
   
  }

  // async tearDown() {
  //   await this.driver.quit();
  // }
}

module.exports = DriverFactory;
