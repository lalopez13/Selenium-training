'use strict';

const DriverFactory = require('../lib/DriverFactory');
const config = require('../lib/config.js');
const driverFactory = new DriverFactory(config);

beforeEach(async function () {
  await driverFactory.setUp();
  this.driver = driverFactory.driver;
});

// afterEach(async function () {
//   await driverFactory.tearDown();
// });
