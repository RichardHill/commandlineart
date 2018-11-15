Feature: Rectangle Creation
    Scenario: Creating a Rectangle with correct parameters
        Given I run the app 
        When I process the command 'r' and parameters 1 1 4 4
        Then I end up with a line the gives a count of 12 in the canvas

    Scenario: Creating a vertical line with correct parameters
        Given I run the app 
        When I process the command 'l' and parameters 1 1 1 4
        Then I end up with a line the gives a count of 12 in the canvas

    Scenario: Creating a Line that is not horizontal or vertical
        Given I run the app 
        When I process the command 'l' and incorrect parameters 1 1 4 3
        Then I see the error message 'Incorrect parameters supplied for the command'