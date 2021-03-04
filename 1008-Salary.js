var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var NUMBER = parseInt(lines.shift());
var HOURS = parseInt(lines.shift());
var PriceForHours = parseFloat(lines.shift());
var SALARY = HOURS * PriceForHours;

console.log("NUMBER = " + NUMBER);
console.log("SALARY = U$ " + SALARY.toFixed(2));