const border = (parameters) => {
    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length < 3) {
        console.log("Error - you have not entered the correct parametesr for the Canvas");
        return;
    }

    //Lets get some values.
    const x = res[0];
    const y = res[1];
    const c = res[2];

    console.log("The values of the incoming parameters are -: x = " + x + " y = " + y + " c = " + c);

}

module.exports = border;