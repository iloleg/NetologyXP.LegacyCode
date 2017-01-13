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

function createPrinter() {
    var lines = [];

    return {
        print: print,
        getPrintedLines: getPrintedLines
    }

    function print(line) {
        lines.push(line);
    }

    function getPrintedLines() {
        return lines;
    }
}
function runUnitTest() {
    var printer = createPrinter();

    scanBarCode("123456", printer.print);

    var lines = printer.getPrintedLines();

    if (lines[0] !== "Item: milk") {
        console.log("TEST FAILED!");
        console.log("Expected: " + "Item: milk");
        console.log("Actual: " + lines[0]);
        return;
    }

    if (lines[1] !== "Price: 105$ (tax included)") {
        console.log("TEST FAILED");
        console.log("Expected: " + "Price: 105$ (tax included)");
        console.log("Actual: " + lines[1]);
        return;
    }

    console.log("TEST PASSED");
}

runUnitTest();
scanBarCode("123456", print);