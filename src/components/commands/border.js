const Messages = require('../../utils/constants');

const border = (parameters, Canvas) => {

    //Check we have a canvas.
    if (Canvas === null) {
        return Messages.no_canvas_created;
    }

    //Check for some command parameters
    if (parameters.length === 0) {
        return Messages.no_command_parameters;
    }

    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length < 3) {
        return Messages.invalid_command_parameters
    }

    const [x, y, c] = res;

    Canvas.fill(parseInt(x), parseInt(y), c);

    Canvas.display();
}

module.exports = border;