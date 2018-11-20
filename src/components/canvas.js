// This is the in memory representation of what the canvas will look like
// when we put it out to the Std out. It is required to be created first
// and then the commandProcessor will apply multiple commands too it.
// It will have some simple pieces of functionality such as -:
// Size
// SpaceUsed
// Characters per line (useful for testing purposes)
//

let canvasArea = [];
let Stack = [];

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
    if (canvasArea !== null && canvas.checkbounds(x, y)) {
        return canvasArea[y][x];
    }
}

canvas.count = () => {
    let count = 0;

    for (let firstIndex = 1; firstIndex < canvasArea.length - 1; firstIndex++) {
        for (let secondIndex = 1; secondIndex < canvasArea[firstIndex].length - 1; secondIndex++) {
            let location = canvasArea[firstIndex][secondIndex];
            if (location !== ' ') {
                count++;
            }
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

canvas.positionFilled = (x, y) => {
    return (canvas.get(x, y) !== ' ' ? true : false);
}

canvas.floodfill = (x, y, c) => {
    //Due to javascript having a limited stack we are going to have
    //to impletment the stack ourselves to get around it. We do this
    //by using javascript arrays and pop and push.
    canvas.floodplot(x, y, c);

    while (Stack.length > 0) {
        let toFill = Stack.pop();
        canvas.floodplot(toFill[0], toFill[1], c);
    }

    canvas.display();
}

canvas.floodplot = (x, y, c) => {

    if (!canvas.positionFilled(x, y)) canvas.plot(x, y, c);

    if (!canvas.positionFilled(x, y - 1)) Stack.push([x, y - 1]);
    if (!canvas.positionFilled(x + 1, y)) Stack.push([x + 1, y]);
    if (!canvas.positionFilled(x, y + 1)) Stack.push([x, y + 1]);
    if (!canvas.positionFilled(x - 1, y)) Stack.push([x - 1, y]);

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