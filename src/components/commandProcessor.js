const BorderCommand = require('./commands/border');
const CanvasCommand = require('./commands/canvas');
const LineCommand = require('./commands/line');
const QuitCommand = require('./commands/quit');
const EmptyCommand = require('./commands/empty');
const RectangleCommand = require('./commands/rectangle');
const Messages = require('../utils/constants');
const Canvas = require('./canvas');
const winston = require('winston');

//Set up our logger object,
const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    transports: [
        new (winston.transports.Console)({ 'timestamp': true }),
        new (winston.transports.File)({ filename: 'combined.log', 'timestamp': true })
    ]
});

const commandsObject = {
    Canvas: 'c',
    Line: 'l',
    Rectangle: 'r',
    Border: 'b',
    Quit: 'q',
    Empty: 'e',
};

const CommandProcessor = () => { };

CommandProcessor.ProcessCommand = (input = '') => {

    let errorMessage = null;
    //We get the first character from the input and match it against our known list of commands.
    //If we do not have a match we just say it is an unknown command.
    let commands = new Array();

    //Early out if we do not have anything.
    if (input.length === 0) return;

    //Get the first character from the string.
    const command = input.charAt(0).toLowerCase();

    //Store the parameters
    const parameters = input.substring(2);

    switch (command) {
        case commandsObject.Canvas: {
            errorMessage = CanvasCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Line: {
            errorMessage = LineCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Rectangle: {
            errorMessage = RectangleCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Border: {
            errorMessage = BorderCommand(parameters, Canvas);
            break;
        }

        case commandsObject.Empty: {
            errorMessage = EmptyCommand(Canvas);
            break;
        }

        case commandsObject.Quit: {
            errorMessage = QuitCommand();
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

    if (errorMessage) {
        logger.log({
            level: 'info',
            message: errorMessage
        });
    }

    return errorMessage;
}

CommandProcessor.getCanvas = () => {
    return Canvas;
}

CommandProcessor.getLogger = () => {
    return logger;
}


module.exports = CommandProcessor;