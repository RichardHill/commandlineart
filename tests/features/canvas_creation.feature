Feature: Canvas Creation
    Scenario: Creating a Canvas with correct parameters
        Given I run the app 
        When I process the Canvas command 'c' and parameter width of 20 and a height of 20
        Then I end up with a two dimensional array created in the Canvas object 20 height and 20 width

    Scenario: Creating a Canvas with an incorrect width
        Given I run the app 
        When I process the Canvas command 'c' with a positive parameter width of 10 and a negative parameter height of -20
        Then I see the error message 'Incorrect parameters supplied for the command'

    Scenario: Creating a Canvas with and incorrect height
        Given I run the app 
        When I process the Canvas command 'c' with a negative parameter width of -10 and a positive parameter height of 20
        Then I see the error message 'Incorrect parameters supplied for the command'

    Scenario: Creating a Canvas with only one parameter
        Given I run the app 
        When I process the Canvas command 'c' and a single parameter of 10
        Then I see the error message "Incorrect parameters supplied for the command"

    Scenario: Creating a Canvas with no parameters
        Given I run the app 
        When I process the Canvas command 'c' and no parameters defined
        Then I end up with the canvas specific error "Canvas creation failed, no parameters specified"