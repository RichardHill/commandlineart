
line = (parameters, Canvas) => {
    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length < 4) {
        console.log("Error - you have not entered the correct parametesr for the Canvas");
        return;
    }

    //Lets get some values.
    const x1 = parseInt(res[0]);
    const y1 = parseInt(res[1]);
    const x2 = parseInt(res[2]);
    const y2 = parseInt(res[3]);

    //Check that the line is within the bounds of the canvas.
    //Canvas.checkbounds(x1, y1);
    //Canvas.checkvounds(x2, y2);

    //Check we have a horizontal or vertical line.
    if (x1 != x2 && y1 != y2) {
        // line is neither horizontal or vertical 
    }

    if (y1 === y2) { //Horizontal.

        let tmpX1 = x1;

        while (tmpX1 != x2) {
            Canvas.plot(y1, tmpX1, 'x');
            tmpX1++;
        }
    }

    if (x1 === x2) { // Vertical Line
        console.log("Drawing a Verical line");

        let tmpY1 = y1;

        while (tmpY1 != y2) {
            Canvas.plot(tmpY1, x1, 'x');
            tmpY1++;
        }
    }

    Canvas.display();

}

module.exports = line;