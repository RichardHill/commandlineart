Feature: Line Creation
    Scenario: Creating a horizontal line with correct parameters
        Given I run the app 
        When I process the Line command 'l' and parameters 1 1 4 1
        Then I end up with a line the gives a count of 4 in the canvas

    Scenario: Creating a vertical line with correct parameters
        Given I run the app 
        When I process the Line command 'l' and parameters 1 1 1 4
        Then I end up with a line the gives a count of 4 in the canvas

    Scenario: Creating a Line that is not horizontal or vertical
        Given I run the app 
        When I process the Line command 'l' and incorrect parameters 1 2 3 4
        Then I see the line specific error message 'This software only supports vertical or horizontal lines'