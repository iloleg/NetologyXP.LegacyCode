"use strict";

var postReceiveError = function () {
    console.log('post receive error');
};

function createPostReceiveError(isInTestMode) {
    if (isInTestMode) {
        return function () {
            console.log("Unit test mode. You can add new behavior here.");
        }
    }

    return postReceiveError;
}

function createNetwork(isInTestMode) {
    isInTestMode = isInTestMode || false;
    var postReceiveError = createPostReceiveError(isInTestMode);

    var serialized = false;
    var failureSent = false;
    var mutex = getMutex();
    var refCount = 0;

    return {
        init: initNetwork
    };

    function initNetwork() {
        if (serialized) {
            return true;
        }

        mutex.Unlock();
        refCount++;

        serialized = true;
        freeLibrary();

        //...

        if (!failureSent) {
            failureSent = true;

            postReceiveError();
        }

        //...
    }
}

function getMutex() {
    return {
        Unlock: function () {
            //...
        }
    };
}

function freeLibrary() {
    //...
}

function runUnitTests() {
    createNetwork(true).init();
}

createNetwork(false).init();