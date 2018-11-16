const Given = require('cucumber').Given;
const When = require('cucumber').When;
const Then = require('cucumber').Then;

const assert = require('assert');

const Canvas = require("../../src/components/canvas");
const commandProcessor = require('../../src/components/commandProcessor');
const messages = require("../../src/utils/constants");

let errorMessage = '';

When('I process the Line command {string} and parameters {int} {int} {int} {int}', function (command, X1, Y1, X2, Y2, callback) {

    //Create the canvas first.
    commandProcessor.ProcessCommand('c 20 20');
    let theFullCommand = command + ' ' + X1 + ' ' + Y1 + ' ' + X2 + ' ' + Y2;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

When('I process the Line command {string} and incorrect parameters {int} {int} {int} {int}', function (command, X1, Y1, X2, Y2, callback) {
    //Create the canvas first.
    commandProcessor.ProcessCommand('c 20 20');
    let theFullCommand = command + ' ' + X1 + ' ' + Y1 + ' ' + X2 + ' ' + Y2;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

Then('I end up with a line the gives a count of {int} in the canvas', function (expectedCount) {
    // Write code here that turns the phrase above into concrete actions
    let theCanvas = commandProcessor.getCanvas();
    const actualCount = theCanvas.count();
    assert.equal(expectedCount, actualCount);
    return null;
});


Then('I see the line specific error message {string}', function (errorMessage) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(errorMessage, messages.line_creation_non_horizontal_or_vertical);
    return null;
});