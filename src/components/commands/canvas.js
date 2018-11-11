const canvas = (parameters) => {

    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length < 2) {
        console.log("Error - you have not entered the correct parametesr for the Canvas");
        return;
    }

    //Lets get some values.
    const width = res[0];
    const height = res[1];

    console.log("The values of the incoming parameters are -: width = " + width + " height = " + height);

    return;
}

module.exports = canvas;