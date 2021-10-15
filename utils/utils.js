'use strict';

function futureDate(days) {

    const today = new Date();

    today.setDate(today.getDate() + days);

    // Months are cero indexed and one two match with the format 
    // date in the page

    const month = today.getMonth() + 1;

    return `${today.getFullYear()}-${month >= 10 ? month : "0" + month}-${today.getDate() >= 10 ? today.getDate() : "0" + today.getDate()}`;
}

module.exports = futureDate;

