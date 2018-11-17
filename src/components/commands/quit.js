const Messages = require('../../utils/constants');

quit = (logger) => {
    logger.log({
        level: 'info',
        message: Messages.bye
    });
    process.exit(0);
}

module.exports = quit;