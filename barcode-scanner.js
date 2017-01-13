"use strict";

function scanBarCode(barcode, print) {
    var item = '';
    var price = 0;
    if (barcode == "123456") {
        item = 'milk';
        price = 100;
    }

    if (barcode == "456789") {
        item = 'cheese';
        price = 30;
    }

    var tax = 0.05;
    if (item === 'cheese') {
        tax = 0.07;
    }

    price = price * (1 + tax);

    print("Item: " + item);
    print("Price: " + price + "$ (tax included)")
}

function print(line) {
    console.log(line);
}

function runUnitTest() {

    scanBarCode("123456", print);

    // Item: milk
    // Price: 105$ (tax included)
}

runUnitTest();
scanBarCode("123456", print);