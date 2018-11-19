const Messages = require('../../utils/constants');

rectangle = (parameters, Canvas) => {

    //Check we have a canvas.
    if (Canvas === null) {
        return Messages.no_canvas_created;
    }

    //Check for some command parameters
    if (parameters.length === 0) {
        return Messages.rectangle_creation_failed;
    }

    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length < 4) {
        return Messages.invalid_command_parameters;
    }

    //Lets get some values, destructure
    const [tmpx1, tmpy1, tmpx2, tmpy2] = res;
    //And convert.
    const x1 = parseInt(tmpx1);
    const y1 = parseInt(tmpy1);
    const x2 = parseInt(tmpx2);
    const y2 = parseInt(tmpy2);

    //Check that we fit on the canvas.
    if (!Canvas.checkbounds(x1, y1) || !Canvas.checkbounds(x2, y2)) {
        return Messages.rectangle_parameters_outside_of_cavas;
    }
    //Early out - only accepting top down cases
    if (x2 > x1 && y2 > y1) {
        //Top line goes from x1,y1 to x2,y1
        let tmpX1 = x1;
        while (tmpX1 <= x2 + 1) {
            Canvas.plot(tmpX1, y1, '*');
            tmpX1++;
        }

        //Draw the extents
        let tmpY1 = y1;
        while (tmpY1 <= y2) {
            Canvas.plot(x1, tmpY1, '*');
            Canvas.plot(x2 + 1, tmpY1, '*');
            tmpY1++;
        }

        //Draw the bottom line.
        let tmpX2 = x1;
        while (tmpX2 <= x2 + 1) {
            Canvas.plot(tmpX2, y2, '*');
            tmpX2++;
        }

        Canvas.display();

    } else {
        return Messages.rectangle_incorrectly_specified;
    }
}

module.exports = rectangle;