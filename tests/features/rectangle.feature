Feature: Rectangle Creation
    Scenario: Creating a Rectangle with correct parameters
        Given I run the app 
        When I process the Rectangle command 'r' and parameters 1 1 4 4
        Then I end up with a Rectangle that gives a count of 14 in the canvas

    Scenario: Creating a Rectangle with only one parameter
        Given I run the app
        When I process the Rectangle command 'r' and a single parameter of 10
        Then I see the error message "Incorrect parameters supplied for the command"

    Scenario: Creating a Rectangle with no parameters
        Given I run the app 
        When I process the Rectangle command 'r'
        Then I see the Rectangle error message "Rectangle creation failed, no parameters specified"

    Scenario: Creating a Rectangle that is not in the canvas
        Given I run the app 
        When I process the Rectangle command 'r' and parameters 1 1 40 40
        Then I see the Rectangle canvas specific error message 'The rectangle parameters are outside of the canvas'

    