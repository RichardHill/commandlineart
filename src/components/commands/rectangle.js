rectangle = (parameters) => {
    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length < 4) {
        console.log("Error - you have not entered the correct parametesr for the Canvas");
        return;
    }

    //Lets get some values.
    const x1 = res[0];
    const y1 = res[1];
    const x2 = res[2];
    const y2 = res[3];

    console.log("The values of the incoming parameters are -: x1 = " + x1 + " y1 = " + y1 + " x2 = " + x2 + " y2 = " + y2);

}

module.exports = rectangle;