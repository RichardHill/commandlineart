const BorderCommand = require('./commands/border');
const CanvasCommand = require('./commands/canvas');
const LineCommand = require('./commands/line');
const QuitCommand = require('./commands/quit');
const RectangleCommand = require('./commands/rectangle');

const invalidInput = "Please enter a valid command";

const commandsObject = {
    Canvas: 'c',
    Line: 'l',
    Rectangle: 'r',
    Border: 'b',
    Quit: 'q',
};

CommandProcessor = (input = '') => {

    //We get the first character from the input and match it against our known list of commands.
    //If we do not have a match we just say it is an unknown command.

    //Early out if we do not have anything.
    if (input.length === 0) return;

    //Get the first character from the string.
    const command = input.charAt(0).toLowerCase();

    //Store the parameters
    const parameters = input.substring(2);

    switch (command) {

        case commandsObject.Canvas: {
            CanvasCommand(parameters);
            break;
        }

        case commandsObject.Line: {
            LineCommand(parameters);
            break;
        }

        case commandsObject.Rectangle: {
            RectangleCommand(parameters);
            break;
        }

        case commandsObject.Border: {
            BorderCommand(parameters);
            break;
        }

        case commandsObject.Quit: {
            QuitCommand();
            break;
        }

        default: { //At this situation we are dealing with unknown input.
            break;
        }
    }

}

module.exports = CommandProcessor;