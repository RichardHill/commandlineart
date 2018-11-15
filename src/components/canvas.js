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

    //Add the top line of the canvas.
    for (let topLineIndex = 0; topLineIndex < canvasArea[0].length; topLineIndex++) {
        canvas.plot(topLineIndex, 0, '-');
    }

    //And the lines inbetween
    for (let firstIndex = 1; firstIndex < canvasArea.length - 1; firstIndex++) {
        //Set the first and last characters of the array.
        canvas.plot(0, firstIndex, '|');

        for (let secondIndex = 1; secondIndex < canvasArea[firstIndex].length - 1; secondIndex++) {
            canvas.plot(secondIndex, firstIndex, ' ');
        }

        canvas.plot(width - 1, firstIndex, '|');
    }

    //And the bottom line.
    for (let index = 0; index < canvasArea[0].length; index++) {
        canvas.plot(index, height - 1, '-');
    }

    //Draw what we have in the canvas.
    canvas.display();
}

// Will draw a characeter at a particular position
canvas.plot = (x, y, character, checkbounds = false) => {
    if (checkbounds) {
        if (canvas.checkbounds(x, y))
            canvasArea[y][x] = character;
    } else {
        canvasArea[y][x] = character;
    }
}

canvas.checkbounds = (x, y) => {
    //Remember to take into account the border
    if ((x > 0 && x <= canvasArea[0].length - 1) && (y > 0 && y <= canvasArea.length)) {
        return true;
    }
    else {
        return false;
    }
}

canvas.get = (x, y) => {
    if (canvas !== null && canvas.checkbouns(x, y)) {
        return canvasArea[x][y];
    }
}

canvas.count = () => {
    let count = 0;

    for (let firstIndex = 1; firstIndex < canvasArea.length - 1; firstIndex++) {
        for (let secondIndex = 1; secondIndex < canvasArea[firstIndex].length - 1; secondIndex++) {
            let location = canvasArea[firstIndex][secondIndex];
            if (location !== ' ')
                count++;
        }
    }

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

canvas.fill = (x, y, c) => {

    // To effect flood fill we will need to take every position in the grid 
    // and see if it is enclosed at some point to the extents of the grid.
    // If all 8 surrounding areas are blocked then we cannot fill the spot in.
    // We will not always need to check all 8 positions unless we are a space into the grid.
    // eg the position belowe will only require
    //
    //  --------------
    //  |0x
    //  |xx
    //  |
    //
    //  checking in the x positions.
    //  so three checks.
    //
    // However this position denoted below 
    //
    // -----------------------
    // |
    // |       xxx
    // |       xox
    // |       xxx
    // |
    //
    // Will required 8 checks to see if it is possible to fill the area.

    //Lets start at the point that the user has requested and just try and fill....
    for (let indexY = y; indexY < canvasArea.length; indexY++) {
        const element = canvasArea[indexY];

        for (let indexX = 0; indexX < element.length; indexX++) {
            let position = element[indexX];
            if (position === ' ') {
                canvas.plot(indexX, indexY, c);
            }
        }
    }
}

canvas.clear = () => {
    //We should clear the canvas
    for (let indexX = 1; indexX < canvasArea.length - 1; indexX++) {
        const element = canvasArea[indexX];

        for (let indexY = 1; indexY < element.length - 1; indexY++) {
            let position = element[indexY];
            canvas.plot(indexX, indexY, ' ');

        }
    }
}

canvas.height = () => {
    const canvasEdge = 2;
    if (canvasArea == null) return -1;
    return canvasArea.length - canvasEdge;
}

canvas.width = () => {
    const canvasEdge = 2;
    if (canvasArea == null) return -1;
    return canvasArea[0].length - canvasEdge;
}

module.exports = canvas;