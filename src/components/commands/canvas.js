const Messages = require('../../utils/constants');

const canvas = (parameters, Canvas) => {

    if (parameters.length === 0) {
        return Messages.no_command_parameters;
    }

    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length != 2) {
        return Messages.invalid_command_parameters;
    }

    const canvasAreaOffset = 2;
    const [tmpWidth, tmpHeight] = res;

    const width = parseInt(tmpWidth);
    const height = parseInt(tmpHeight);

    //Do the values make sense?
    if (width <= 0 || height <= 0) {
        return Messages.invalid_command_parameters;
    }

    Canvas.create(width + canvasAreaOffset, height + canvasAreaOffset);
}

module.exports = canvas;