
const outputMessages = {
    invalid_input: "Please enter a valid command",
    no_canvas_created: "Please create a canvas before drawing, use the c command eg, c 20 20",
    out_of_bounds: "Plot is out of canvas boundary area",
    canvas_creation_failed: "Canvas creation failed, no parameters specified",
    rectangle_creation_failed: "Rectangle creation failed, no parameters specified",
    rectangle_incorrectly_specified: "Rectangle creation failed, not defined top done",
    rectangle_parameters_outside_of_cavas: "The rectangle parameters are outside of the canvas",
    border_creation_failed: "Border creation failed, no parameters specified",
    border_creation_falls_outside_of_canvas: "The border you have defined does not fit within the canvas",
    border_creation_start_position_occupied: "The border start position is already occupied",
    invalid_command_parameters: "Incorrect parameters supplied for the command",
    no_command_parameters: "No paraemeters supplied for this command",
    line_creation_non_horizontal_or_vertical: "This software only supports vertical or horizontal lines",
    line_creation_falls_outside_of_canvas: "The line you have defined does not fit within the canvas",
    bye: 'bye'
};

module.exports = outputMessages;