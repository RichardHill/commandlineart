# Feature: Border Creation
#     Scenario: Creating a Border with correct parameters
#         Given I run the app 
#         When I process the Border command 'b' and parameters 1 1 'c'
#         Then I end up with a Border that gives a count of 400 in the canvas

#     Scenario: Creating a Border with only one parameter
#         Given I run the app
#         When I process the Border command 'b' and a single parameter of 10
#         Then I see the error message "Incorrect parameters supplied for the command"

#     Scenario: Creating a Border with no parameters
#         Given I run the app 
#         When I process the Border command 'b'
#         Then I see the Border error message "Border creation failed, no parameters specified"