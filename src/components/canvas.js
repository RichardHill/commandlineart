// This is the in memory representation of what the canvas will look like
// when we put it out to the Std out. It is required to be created first
// and then the commandProcessor will apply multiple commands too it.
// It will have some simple pieces of functionality such as -:
// Size
// SpaceUsed
// Characters per line (useful for testing purposes)
//

let canvasArea = [];

const canvas = () => { };

canvas.create = (width, height) => {
    //Check we have the right parameters.
    if (width === null || height === null) return;

    canvasArea = new Array(height);

    for (let index = 0; index < canvasArea.length; index++) {
        canvasArea[index] = new Array(width);
    }

    //Now add in our characters.
    //Add the top line of the canvas.
    for (let index = 0; index < canvasArea[0].length; index++) {
        canvas.plot(0, index, '-');
    }

    //And the lines inbetween
    for (let firstIndex = 1; firstIndex < canvasArea.length; firstIndex++) {
        //Set the first and last characters of the array.
        canvas.plot(firstIndex, 0, '|');

        for (let secondIndex = 1; secondIndex < canvasArea[firstIndex].length; secondIndex++) {
            canvas.plot(firstIndex, secondIndex, ' ');
        }

        canvas.plot(firstIndex, width, '|');
    }

    //And the bottom line.
    for (let index = 0; index < canvasArea[height - 1].length; index++) {
        canvas.plot(height - 1, index, '-');
    }

    //Draw what we have in the canvas.
    canvas.display();
}


// Will draw a characeter at a particular position
canvas.plot = (x, y, character) => {

    if (canvas.checkbounds(x, y))
        canvasArea[x][y] = character;
}

canvas.checkbounds = (x, y) => {
    if ((x <= canvasArea.length) && (y <= canvasArea[0].length)) {
        return true;
    }
    else {
        return false;
    }
}

canvas.get = (x, y) => {

    //Check we are in bounds.
    //check we have been created.
    return canvasArea[x][y];
}

canvas.count = () => {
    let count = 0;
    //Return a count of the number of characters we have in the canvas.
    array.forEach(element => {
        count += element.length;
    });

    return count;
}

canvas.display = () => {

    //Simply iterate over the array we have and print it out to the screen.
    let aLine = '';

    canvasArea.forEach(element => {

        element.forEach(location => {
            aLine += location;
        });

        if (aLine.length > 0) {
            console.log(aLine);
            aLine = '';
        }
    });
}


module.exports = canvas;