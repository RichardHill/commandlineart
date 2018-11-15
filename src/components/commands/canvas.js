const Messages = require('../../utils/constants');

const canvas = (parameters, Canvas) => {

    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length === 0 && res.length < 2) {
        return Messages.invalid_command_parameters;
    }

    if (res.length === 0) {
        return Messages.canvas_creation_failed;
    }

    const canvasAreaOffset = 2;
    const width = parseInt(res[0]);
    const height = parseInt(res[1]);

    //Do the values make sense?
    if (width <= 0 || height <= 0) {
        // return Messages.invalid_command_parameters;
    }

    Canvas.create(width + canvasAreaOffset, height + canvasAreaOffset);
}

module.exports = canvas;