// Credit Suisse - the strange interview project test! :)
// by
// Richard M. Hill. - 9/11/2019

let readline = require('readline');
let CommandProcessor = require('./components/commandProcessor');

let rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('enter command: ');
rl.prompt();

rl.on('line', function (line) {
  //Process the Input here.
  CommandProcessor.ProcessCommand(line);
  rl.prompt();

}).on('close', function () {
  process.exit(0);
});
