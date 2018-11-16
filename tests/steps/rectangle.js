const Given = require('cucumber').Given;
const When = require('cucumber').When;
const Then = require('cucumber').Then;

const assert = require('assert');

const Canvas = require("../../src/components/canvas");
const commandProcessor = require('../../src/components/commandProcessor');
const messages = require("../../src/utils/constants");

let errorMessage = '';

When('I process the Rectangle command {string} and parameters {int} {int} {int} {int}', function (command, X1, Y1, X2, Y2, callback) {
    // Write code here that turns the phrase above into concrete actions
    //Create the canvas first.
    commandProcessor.ProcessCommand('c 20 20');
    let theFullCommand = command + ' ' + X1 + ' ' + Y1 + ' ' + X2 + ' ' + Y2;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

When('I process the Rectangle command {string} and a single parameter of {int}', function (command, x1, callback) {
    //Create the canvas first.
    commandProcessor.ProcessCommand('c 20 20');
    let theFullCommand = command + ' ' + x1;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

When('I process the Rectangle command {string}', function (singleCommand, callback) {
    //Create the canvas first.
    commandProcessor.ProcessCommand('c 20 20');
    errorMessage = commandProcessor.ProcessCommand(singleCommand);
    return callback(null);
});

Then('I end up with a Rectangle that gives a count of {int} in the canvas', function (expectedCount) {
    // Write code here that turns the phrase above into concrete actions
    let theCanvas = commandProcessor.getCanvas();
    const actualCount = theCanvas.count();
    assert.equal(expectedCount, actualCount);
    return null;
});

Then('I see the Rectangle error message {string}', function (errorMessage) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(errorMessage, messages.rectangle_creation_failed);
    return null;
});