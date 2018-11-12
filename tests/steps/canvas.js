const Given = require('cucumber').Given;
const When = require('cucumber').When;
const Then = require('cucumber').Then;

const assert = require('assert');

const commandProcessor = require('../../src/components/commandProcessor');

let errorMessage = '';

Given('I run the app', function () {
    //Well that kinda obvious...
    return null;
});

When('I process the command {string} and parameter width of {int} and a height of {int}', function (command, width, height, callback) {
    // Write code here that turns the phrase above into concrete actions
    errorMessage = commandProcessor(command, width, height);
    return callback(null);
});

When('I process the command {string} and a single parameter of {int}', function (string, int) {
    // Write code here that turns the phrase above into concrete actions
    errorMessage = commandProcessor(command);
    return callback(null);
});

When('I process the command {string} and no parameters defined', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('I end up with a Canvas command added to command stack', function () {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(commandProcessor.Stack.length, 1);
    return null;
});

Then('I end up with the error {string}', function (errorMessage) {
    // Write code here that turns the phrase above into concrete actions
    assert.equal(errorMessage, "Canvas creation failed, incorrect parameters")
    return null;
});

