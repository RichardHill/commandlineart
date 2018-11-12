Feature: Canvas Creation
    Scenario: Creating a Canvas with correct parameters
        Given I run the app 
        When I process the command 'c' and parameter width of 20 and a height of 20
        Then I end up with a Canvas command added to command stack

    Scenario: Creating a Canvas with an incorrect width
        Given I run the app 
        When I process the command 'c' and parameter width of -10 and a height of 20
        Then I end up with the error "Canvas creation failed, incorrect parameters"

    Scenario: Creating a Canvas with and incorrect height
        Given I run the app 
        When I process the command 'c' and parameter width of 20 and a height of -20
        Then I end up with the error "Canvas creation failed, incorrect parameters"

    Scenario: Creating a Canvas with only one parameter
        Given I run the app 
        When I process the command 'c' and a single parameter of 10
        Then I end up with the error "Canvas creation failed, incorrect parameters"

    Scenario: Creating a Canvas with no parameters
        Given I run the app 
        When I process the command 'c' and no parameters defined
        Then I end up with the error "Canvas creation failed, no parameters specified"