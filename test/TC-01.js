'use strict';

const assert = require('chai').assert;
const LoginPage = require('../pages/homePage');
const ResultsPage = require('../pages/resultsPage');
const SelectedOptionsPage = require('../pages/selectedOptionsPage');
const BookingPage = require('../pages/bookingPage')
require('./BaseTest');

describe('Login', function () {
  let login;
  let results;
  let reserve;
  let booking;

  beforeEach(async function () {
    login = new LoginPage(this.driver);
    await login.load();
  });

  it('with valid credentials', async function () {
    //await login.configLanguageAndCurrency()
    let city = await login.selectDestination('Cartagena');
    assert.equal(city, 'Cartagena de Indias, Bolívar, Colombia');
    await login.selectTravelDate(90, 110);
    let guest = await login.selectGuest();
    assert.equal(guest, '3 adultos');
    await login.submitPreferences();

    results = new ResultsPage(this.driver);
    await results.filterByLowerPrice()
    let price = await results.getPriceHotel()
    console.log(price)
    //assert.equal(price,'3 adultos');
    await results.selectHotel(3)

    reserve = new SelectedOptionsPage(this.driver);
    await reserve.getReservation();

    booking = new BookingPage(this.driver)
    //await booking.handleModal();
    let btn = await booking.fillForm()
    assert.equal(btn, '3 adultos');
  });


});