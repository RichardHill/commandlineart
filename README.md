Welcome to my Credit Suisse Node JS Test Application.

This file will contain any notes regarding the development such as assumptions made, packages used and any details of the approach I have taken to complete the test.

Given this is a bank interview test and that I have some experience of banking development environments I plan on using external packages that have -:

1. Few, if any dependencies
2. Popularity.

Open source should be treated carefully and any packages added, done so with careful consideration.

I plan to write this test using a Test Driven approach in Node JS using the Cucumber test package. 

On further examination of the task I have concluded that it will be necessary to create an in memory 2D array to represesnt that final output. It will also be necessary to store a stack of commands that the user issues. The stack will be sequentially applied to the in memory canvas and that will then be used to represent the final out put to the screen.

This approach will have benefits to the testing as trying to understand what has been output should be as easy as examining the 2D array.

Assumptions
-----------

1. I am assuming that the user can declare lines that do not fit inside of the canvas.
2. I am assuming that flood fill using the 'B' command will use the letter 'o' as a fill.
3. I am assuming that the flood fill will fill an area until it either reaches a defined line or hits the edge of the canvas.
4. I am assuming that Canvas's orginate at 0,0 and will only take positive Width and Height.
5. I am assuming that the user must create a canvas before they can start using another other commands!

I have identified the following tests -:

Data Input Tests.

Canvas Creation -:

1. The test will issue a correct command of 'C' and '20' and '20' to create a Canvas of 20 x 20.
2. The test will issue a correct command of 'C' but '-20' and '-20' and fail to create a canvas. It will tell the user they have incorrectly defined a Canvas and give them an example of the Command.
2. The test will issue an incorrect command of 'C' and '20' and no final parameter for height. It will tell the user they have incorrectly defined a Canvas and give them an example of the Command.
3. The test will issue an incorrect command of 'C' and no parameters. It will tell the user they have incorrectly defined a Canvas and give them an example of the Command.

Line Creation -:

1. The test will issue a correct command of 'L 1 2 6 2' to correctly create a horizontal line using the letter x.
2. The test will issue an incorrect command of 'L 1 2 6' to incorrectly define a line. It will tell the user that have in

Drawing Tests.

1. The software will allow the user to enter a key press command of C with x and y variables to specify the height and width of the canvas. 

2. The horizontal lines of the canvas will be decalare with '-'.

3. The vertical edges of the canvas are declared with '|'.

2. The software will allow the user to enter a key press combinatin of L to declare a line followed by x1,y1 for the starting point and x2 and y2 for the end point.

3. The test will create a horizontal line made of '*'.

4. The test will create a horizontal line that lies precisely inside of the canvas.

5. The test will create a horizontal line that starts inside the canvas but finishes outside of the canvas.

6. The test will create a horizontal line that will start outside of the canvas and also finish outside of the canvas.

7. The test will create a vertical line made of '*'.

8. The test will create a vertical line that lies percisely inside of the canvas.

9. The test will create a vertical line that starts inside of the canvas but finishes outside of the canvas boundary.

10. The test will create a vertical line that starts outside of the canvas and also finsihes outside of the canvas boundary.

11. The test will declare a rectangle using the 'R' command that will be positioned wholly inside of the canvas.

12. The test will declare a rectangle using the 'R' command that will be clipped outside of the canvas.

13. The test will declare a fill area using the 'B' command that will 'flood' fill areas of the canvas not filled by lines. (see assumptions 2,3).

99. The test will submit the letter 'Q' for processing which should terminate the program.
 

Ideas.

Testing that the software has actually drawn could be outside of the scope of this test. I have been giving some thought to how this could be acheived.