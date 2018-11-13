const BorderCommand = require('./commands/border');
const CanvasCommand = require('./commands/canvas');
const LineCommand = require('./commands/line');
const QuitCommand = require('./commands/quit');
const RectangleCommand = require('./commands/rectangle');
const Messages = require('../utils/constants');
const Canvas = require('./canvas');
const winston = require('winston');



//Set up our logger object,
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

const commandsObject = {
    Canvas: 'c',
    Line: 'l',
    Rectangle: 'r',
    Border: 'b',
    Quit: 'q',
};

let commands = new Array();

const CommandProcessor = () => { };

CommandProcessor.ProcessCommand = (input = '') => {

    //We get the first character from the input and match it against our known list of commands.
    //If we do not have a match we just say it is an unknown command.

    let commands = new Array();

    //Early out if we do not have anything.
    if (input.length === 0) return;

    //Get the first character from the string.
    const command = input.charAt(0).toLowerCase();

    //Store the parameters
    const parameters = input.substring(2);

    //this.commands.push({ command, parameters });

    switch (command) {

        case commandsObject.Canvas: {
            CanvasCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Line: {
            LineCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Rectangle: {
            RectangleCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Border: {
            BorderCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Quit: {
            QuitCommand();
            break;
        }

        default: { //At this situation we are dealing with unknown input.
            logger.log({
                level: 'info',
                message: Messages.invalid_input
            });
            break;
        }
    }

    commands.forEach(element => {
        console.log("\n Command -: " + element.command + " with parameters -: " + element.parameters);
    });
}

module.exports = CommandProcessor;