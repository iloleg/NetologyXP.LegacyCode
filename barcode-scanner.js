"use strict";

function scanBarCode(barcode) {
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

    console.log("Item: " + item);
    console.log("Price: " + price + "$ (tax included)")
}

scanBarCode("123456");