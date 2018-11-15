const Messages = require('../../utils/constants');

line = (parameters, Canvas) => {
    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length === 0 || res.length < 4) {
        return Messages.invalid_command_parameters;
    }

    //Lets get some values.
    const x1 = parseInt(res[0]);
    const y1 = parseInt(res[1]);
    const x2 = parseInt(res[2]);
    const y2 = parseInt(res[3]);

    //Check we have a horizontal or vertical line.
    if (x1 != x2 && y1 != y2) {
        // line is neither horizontal or vertical 
        return Messages.line_creation_non_horizontal_or_vertical;
    }

    if (y1 === y2) { //Horizontal.

        let tmpX1 = x1;

        while (tmpX1 <= x2) {
            Canvas.plot(tmpX1, y1, 'x', true);
            tmpX1++;
        }
    }

    if (x1 === x2) { // Vertical Line
        let tmpY1 = y1;

        while (tmpY1 <= y2) {
            Canvas.plot(x1, tmpY1, 'x', true);
            tmpY1++;
        }
    }

    Canvas.display();

}

module.exports = line;