var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var numb1 = parseInt(lines.shift());
var numb2 = parseInt(lines.shift());
var PROD = numb1 * numb2;

console.log("PROD = " + PROD);