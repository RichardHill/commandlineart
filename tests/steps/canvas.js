const Given = require('cucumber').Given;
const When = require('cucumber').When;
const Then = require('cucumber').Then;

const assert = require('assert');

const Canvas = require("../../src/components/canvas");
const commandProcessor = require('../../src/components/commandProcessor');
const messages = require("../../src/utils/constants");

let errorMessage = '';

Given('I run the app', function () {
    //Well that kinda obvious...
    return null;
});

When('I process the Canvas command {string} and parameter width of {int} and a height of {int}', function (command, width, height, callback) {
    // Write code here that turns the phrase above into concrete actions
    let theFullCommand = command + ' ' + width + ' ' + height;
    commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

When('I process the Canvas command {string} with a positive parameter width of {int} and a negative parameter height of {int}', function (command, width, height, callback) {
    let theFullCommand = command + ' ' + width + ' ' + height;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

When('I process the Canvas command {string} with a negative parameter width of {int} and a positive parameter height of {int}', function (command, width, height, callback) {
    let theFullCommand = command + ' ' + width + ' ' + height;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

When('I process the Canvas command {string} and a single parameter of {int}', function (command, width, callback) {
    let theFullCommand = command + ' ' + width;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

When('I process the Canvas command {string} and no parameters defined', function (command, callback) {
    let theFullCommand = command;
    errorMessage = commandProcessor.ProcessCommand(theFullCommand);
    return callback(null);
});

Then('I end up with a two dimensional array created in the Canvas object {int} height and {int} width', function (arrayLength1, arrayLength2) {
    let theCanvas = commandProcessor.getCanvas();
    assert.equal(arrayLength1, theCanvas.height());
    assert.equal(arrayLength2, theCanvas.width());
    return;
});

Then('I see the error message {string}', function (errorMessage) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(errorMessage, messages.invalid_command_parameters);
    return null;
});

Then('I end up with the canvas specific error {string}', function (errorMessage) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(errorMessage, messages.canvas_creation_failed);
    return null;
});


