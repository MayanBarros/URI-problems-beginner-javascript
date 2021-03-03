var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());
var N = 3.14159;
var A = N * (R * R);

console.log("A=" + A.toFixed(4));