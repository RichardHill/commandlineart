const border = (parameters, Canvas) => {
    //Check we have the right parameters.
    const res = parameters.split(" ");

    //Check we have 4 elements in the array = if not return an error.
    //The user can supply more than 4 parameters but we won't be interested.
    if (res.length < 3) {
        console.log("Error - there was a problem processing the command. (eg b 1 3 o) for the Canvas");
        return;
    }

    //Lets get some values.
    const x = parseInt(res[0]);
    const y = parseInt(res[1]);
    const c = res[2];

    Canvas.fill(x, y, c);

    Canvas.display();
}

module.exports = border;