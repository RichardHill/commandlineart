const Messages = require('../../utils/constants');

line = (parameters, Canvas) => {

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
    if (res.length === 0 || res.length < 4) {
        return Messages.invalid_command_parameters;
    }

    //Lets get some values.
    const [tmpX1, tmpY1, tmpX2, tmpY2] = res;

    const x1 = parseInt(tmpX1);
    const y1 = parseInt(tmpY1);
    const x2 = parseInt(tmpX2);
    const y2 = parseInt(tmpY2);

    //Check we have a horizontal or vertical line.
    if (x1 != x2 && y1 != y2) {
        return Messages.line_creation_non_horizontal_or_vertical;
    }

    if (y1 === y2) { //Horizontal.
        for (let index = x1; index <= x2; index++) {
            Canvas.plot(index, y1, 'x', true);
        }
    }

    if (x1 === x2) { // Vertical
        for (let index = y1; index <= y2; index++) {
            Canvas.plot(x1, index, 'x', true);
        }
    }

    Canvas.display();
}

module.exports = line;