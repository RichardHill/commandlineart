// Credit Suisse - the strange interview project test! :)
// by
// Richard M. Hill. - 9/11/2019

var readline = require('readline');
var parameters = require('commander');
var CommandProcessor = require('./components/commandProcessor');

parameters
  .version('0.1.0')
  .usage('[options]')
  .option('C w h', 'Should create a new canvas of width w and height h.')
  .option('L x1 y1 x2 y2', 'Should create a new line from (x1,y1) to (x2,y2). Currently only horizontal or vertical lines are supported. Horizontal and vertical lines will be drawn using the x character.')
  .option('R x1 y1 x2 y2', 'Should create a new rectangle, whose upper left corner is (x1,y1) and lower right corner is (x2,y2). Horizontal and vertical lines will be drawn using the x character.')
  .option('B x y c', 'Should fill the entire area connected to (x,y) with "colour" c. The behaviour of this is the same as that of the "bucket fill" tool in paint programs.')
  .option('Q', 'Should quit the program.')

parameters.on('--help', function () {
  console.log('')
  console.log('Examples:');
  console.log('  $ custom-help --help');
  console.log('  $ custom-help -h');
});

parameters.parse(process.argv);

var rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('enter command: ');
rl.prompt();

rl.on('line', function (line) {

  //Process the Input here.
  CommandProcessor(line);
  rl.prompt();

}).on('close', function () {
  process.exit(0);
});
