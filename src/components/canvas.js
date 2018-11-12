// This is the in memory representation of what the canvas will look like
// when we put it out to the Std out. It is required to be created first
// and then the commandProcessor will apply multiple commands too it.
// It will have some simple pieces of functionality such as -:
// Size
// SpaceUsed
// Characters per line (useful for testing purposes)
//



const canvas = () => {

    let canvasArea;

    create = (width, height) => {
        //Check we have the right parameters.
        if (width === null || height === null) return;

        canvasArea = [width][height];
    },

        // Will dray a
        plot = (x, y, character) => {

            //Check we are in bounds
            //Check we are not already occupied.
            canvasArea[x][y] = character;
        },

        get = (x, y) => {

            //Check we are in bounds.
            //check we have been created.
            return canvasArea[x][y];
        },

        count = () => {
            //Return a count of the number of characters we have in the canvas.
        },
}

module.exports = canvas;